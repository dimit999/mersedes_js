const btns =  document.querySelectorAll('.feature__link');
const lists =  document.querySelectorAll('.feature-sub');


btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btnItem.classList.toggle('feature__link_active')

    lists[index].classList.toggle('hidden')
  });
});

