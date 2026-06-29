const pairingButtons = document.querySelectorAll('.pairing');
const pairingNote = document.querySelector('.pairing-note');

pairingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    pairingButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    pairingNote.textContent = button.dataset.note;
  });
});
