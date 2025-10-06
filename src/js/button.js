 const askedItems = document.querySelectorAll('.item_asked');

askedItems.forEach(item => {
  const icons = item.querySelectorAll('.svg_plus, .icon-x');

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        return;
      }

      askedItems.forEach(i => i.classList.remove('active'));

      item.classList.add('active');
    });
  });
});