function openModal() {
  document.getElementById('myModal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    closeModal();
  }
}

// Анимация появления секций при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
