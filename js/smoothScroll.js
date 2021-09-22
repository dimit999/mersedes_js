let linksHeader = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelectorAll('.main__scroll')
const newArray = [...linksHeader, mainScroll] //spread operator for joining 2 arrays

newArray.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const ID = event.target.getAttribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth', //Lazy scroll
      block: 'start' //scroll to start of section
    });
  });
});

