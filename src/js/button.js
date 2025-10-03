
  document.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.item_asked');
    const btnPlus = document.querySelector('.icon-plus');
    const btnX = document.querySelector('.icon-x');
    const text = document.querySelector('.item_text_asked');

    btnPlus.addEventListener('click', () => {
      btnPlus.style.display = 'none';
      btnX.style.display = 'inline-block';
      text.style.display = 'inline-block';
    });

    btnX.addEventListener('click', () => {
      btnX.style.display = 'none';
      btnPlus.style.display = 'inline-block';
      text.style.display = 'none';
    });
  });

