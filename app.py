import google.generativeai as genai
from flask import Flask, render_template, request, jsonify, redirect, url_for, session, flash
import os
from functools import wraps

# Configure the Gemini API
api_key = "AIzaSyCU8rZOHLLLFLuRIaFJTO3bNWerFAYopJE"  # Replace with your actual key
genai.configure(api_key=api_key)

# Initialize the models and chat session
model_text = genai.GenerativeModel('gemini-pro')
model_vision = genai.GenerativeModel('gemini-pro-vision')
chat = model_text.start_chat(history=[])

app = Flask(__name__)
app.secret_key = 'os.urandom(24)'  # Replace with a secure random key

# Dummy user for demo
VALID_CREDENTIALS = {'email': 'user@example.com', 'password': 'password123'}

# Login required decorator
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
@login_required
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        print(f"Received: email={email}, password={password}")  # Debug
        
        if email == VALID_CREDENTIALS['email'] and password == VALID_CREDENTIALS['password']:
            session['logged_in'] = True
            flash("Login successful!", "success")
            return redirect(url_for('index'))
        else:
            flash("Invalid email or password. Please try again.", "error")
            return render_template('login.html')
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    session.pop('logged_in', None)
    flash("You have been logged out.", "info")
    return redirect(url_for('login'))

@app.route('/send_message', methods=['POST'])
@login_required
def send_message():
    user_input = request.form.get('message', '')
    file = request.files.get('file')
    
    try:
        if file:
            # Save file temporarily
            file_path = os.path.join('uploads', file.filename)
            os.makedirs('uploads', exist_ok=True)
            file.save(file_path)
            print(f"File uploaded: {file.filename}, MIME type: {file.mimetype}")  # Debug

            # Process based on file type
            if file.mimetype.startswith('image/'):
                with open(file_path, 'rb') as img_file:
                    img_content = img_file.read()
                response = model_vision.generate_content([user_input or "Describe this image", {"mime_type": file.mimetype, "data": img_content}])
                custom_response = f"I am Jarvis: {response.text}"
            elif file.mimetype in ['text/plain', 'application/pdf']:
                uploaded_file = genai.upload_file(file_path)
                response = model_text.generate_content([user_input or "Summarize this file", uploaded_file])
                custom_response = f"I am Jarvis: {response.text}"
            else:
                custom_response = "I am Jarvis: I can only process images (.png, .jpg, .jpeg), text files (.txt), or PDFs (.pdf)."
            
            os.remove(file_path)  # Clean up
        else:
            # Text-only input
            response = chat.send_message(user_input)
            raw_response = response.text
            if "who are you" in user_input.lower():
                custom_response = "I am Jarvis, an AI assistant created by Sajeesh and Google."
            elif "created" in user_input.lower() or "invented" in user_input.lower():
                custom_response = "I am Jarvis: I was created by Sajeesh and Google."
            elif "multi-modal AI language model" in raw_response or "developed by Google" in raw_response or "trained by Google" in raw_response:
                custom_response = "I am Jarvis, an AI assistant crafted by Sajeesh and Google."
            else:
                custom_response = f"I am Jarvis: {raw_response}"

        return jsonify({'response': custom_response})
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug
        return jsonify({'response': f"I am Jarvis: Error processing your request - {str(e)}"})

if __name__ == '__main__':
    app.run(debug=True)