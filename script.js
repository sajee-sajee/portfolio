// ... inside showPDF() function
pdfLink.href = "https://yourwebsite.com/pdfs/sde.pdf"; 
pdfViewer.src = "https://yourwebsite.com/pdfs/sde.pdf"; 
function showPDF() {
    var pdfContainer = document.getElementById("pdfContainer");
    var pdfViewer = document.getElementById("pdfViewer");
    var pdfLink = document.getElementById("pdfLink");

    pdfContainer.style.display = "block"; 
    pdfViewer.src = "sde.pdf"; 
    pdfLink.href = "sde.pdf"; 
}
function showPDF() {
    var pdfContainer = document.getElementById("pdfContainer");
    var pdfLink = document.getElementById("pdfLink");

    pdfContainer.style.display = "block"; // Show the container
    pdfLink.href = "sde.pdf";  // Set the correct PDF path
}
