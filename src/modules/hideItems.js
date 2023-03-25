const hideItems = () => {
  const items = document.querySelectorAll('.card-food');
  items.forEach((e) => {
    e.classList.toggle('hiden');
  });
};

export { hideItems as default };