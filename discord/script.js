document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const messageDiv = document.querySelector('.form-message');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      messageDiv.style.display = 'block';
      messageDiv.textContent = 'Thank you! Your message has been sent.';
      form.reset();
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 3000);
    });
  }

  // Modal logic for project cards
  const modal = document.getElementById('project-modal');
  const modalImage = modal.querySelector('.modal-image');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDesc = modal.querySelector('.modal-description');
  const modalClose = modal.querySelector('.modal-close');


  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const imgDiv = card.querySelector('.project-image');
      const title = card.querySelector('h3').textContent;
      const desc = card.querySelector('p').textContent;
      const bgImg = imgDiv.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

      modalImage.style.backgroundImage = `url(${bgImg})`;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modal.classList.add('open');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
});

document.querySelector('.logo').addEventListener('click', () => {
  window.location.href = '../';
});