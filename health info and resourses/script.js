const infoBoxes = document.querySelectorAll('.info-box');

infoBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const link = box.querySelector('a');
    window.location.href = link.href;
  });
});
