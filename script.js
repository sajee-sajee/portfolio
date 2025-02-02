
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  
  document.querySelectorAll('.project-card').forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    observer.observe(card);
  });


function showCertificate(imageSrc, title, issuer, date) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('certificateContainer').style.display = 'block';
    document.getElementById('certificateImage').src = imageSrc;
    document.getElementById('certTitle').textContent = title;
    document.getElementById('certIssuer').textContent = issuer;
    document.getElementById('certDate').textContent = date;
  }

  function hideCertificate() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('certificateContainer').style.display = 'none';
  }

  
  window.onclick = function(event) {
    if (event.target === document.getElementById('overlay')) {
      hideCertificate();
    }
  }
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
