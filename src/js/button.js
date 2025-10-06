
  // document.addEventListener('DOMContentLoaded', () => {
  //   const btnPlus = document.querySelector('.icon-plus');
  //   const btnX = document.querySelector('.icon-x');
  //   const text = document.querySelector('.item_text_asked');

  //   btnPlus.addEventListener('click', () => {
  //     btnPlus.style.display = 'none';
  //     btnX.style.display = 'inline-block';
  //     text.style.display = 'inline-block';
  //   });

  //   btnX.addEventListener('click', () => {
  //     btnX.style.display = 'none';
  //     btnPlus.style.display = 'inline-block';
  //     text.style.display = 'none';
  //   });
  // });


 const askedItems = document.querySelectorAll('.item_asked');

askedItems.forEach(item => {
  const icons = item.querySelectorAll('.svg_plus, .icon-x');

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      // Если этот пункт уже открыт — закрываем
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        return;
      }

      // Закрываем все остальные
      askedItems.forEach(i => i.classList.remove('active'));

      // Открываем только текущий
      item.classList.add('active');
    });
  });
});