export function carouselProjects() {
  const carousel = document.querySelectorAll('.carousel');
  const itemsContainer = carousel[0]?.querySelector('.items');
  const prevButton = carousel[0]?.querySelector('.leftarrow');
  const nextButton = carousel[0]?.querySelector('.rightarrow');

  let currentPosition = 0;

  prevButton?.addEventListener('click', () => {
    currentPosition += 1233;
    console.log(currentPosition);
    setPosition(currentPosition);
  });

  nextButton?.addEventListener('click', () => {
    currentPosition -= 1233;
    console.log(currentPosition);
    setPosition(currentPosition);
  });

  function setPosition(currentPosition: any) {
    const maxPosition = 0;
    
    if (currentPosition > maxPosition) {
      currentPosition = maxPosition;
    }
    // @ts-ignore
    itemsContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}

export function carouselStack() {
  const carousel = document.querySelectorAll('.carousel');
  const itemsContainer = carousel[1]?.querySelector('.items');
  const prevButton = carousel[1]?.querySelector('.leftarrow');
  const nextButton = carousel[1]?.querySelector('.rightarrow');

  let currentPosition = 0;

  prevButton?.addEventListener('click', () => {
    currentPosition += 1250;
    setPosition(currentPosition);
  });

  nextButton?.addEventListener('click', () => {
    if (currentPosition == -1250) {
      currentPosition -= 2000;
    }
    currentPosition -= 1250;
    setPosition(currentPosition);
  });

  function setPosition(currentPosition: number) {
    const maxPosition = 0;
    
    if (currentPosition < maxPosition) {
      currentPosition = maxPosition;
    }
    // @ts-ignore
    itemsContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}