export function carousel() {
  const itemsContainer = document?.querySelector('.items');
  const prevButton = document?.querySelector('.leftarrow');
  const nextButton = document?.querySelector('.rightarrow');

  let currentPosition = 0;
  prevButton?.addEventListener('click', () => {
    currentPosition = 0;
    setPosition(currentPosition);
  });

  nextButton?.addEventListener('click', () => {
    currentPosition -= 1233;
    setPosition(currentPosition);
  });

  function setPosition(currentPosition) {
    itemsContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}