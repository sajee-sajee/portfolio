// Intersection Observer for scroll animations
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
//   // Certificate Overview functionality
// document.querySelectorAll('.certificate-title').forEach(title => {
//     title.addEventListener('click', (e) => {
//       const overview = e.target.closest('.certificate-item').querySelector('.certificate-overview');
//       const overlay = document.createElement('div');
//       overlay.className = 'overlay active';
      
//       document.body.appendChild(overlay);
//       overview.classList.add('active');
      
//       // Close functionality
//       const closeBtn = overview.querySelector('.close-btn');
//       const closeAll = () => {
//         overview.classList.remove('active');
//         overlay.remove();
//       };
      
//       closeBtn.addEventListener('click', closeAll);
//       overlay.addEventListener('click', closeAll);
      
//       // Prevent closing when clicking inside the overview
//       overview.addEventListener('click', (event) => {
//         event.stopPropagation();
//       });
//     });
//   });
  
  // Add this to your existing Intersection Observer code
//   document.querySelectorAll('.certificate-item').forEach((item) => {
//     item.style.opacity = 0;
//     item.style.transform = 'translateY(50px)';
//     observer.observe(item);
//   });
//   function showCertificate() {
//     document.getElementById('certificateContainer').style.display = 'block';
// }

// function hideCertificate() {
//     document.getElementById('certificateContainer').style.display = 'none';
// }

// // Close when clicking outside the certificate
// window.onclick = function(event) {
//     const container = document.getElementById('certificateContainer');
//     if (event.target === container) {
//         hideCertificate();
//     }
// }
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

  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target === document.getElementById('overlay')) {
      hideCertificate();
    }
  }