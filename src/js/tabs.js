const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElements = document.querySelectorAll('[data-tabs-field]');
const tabsTitles = document.querySelectorAll('.design__title');

for (let btn of tabsHandlerElements) {
  btn.addEventListener('click', () => {
    tabsHandlerElements.forEach((item) => {
      item.classList.remove('design-list__item_active');
      btn.classList.add('design-list__item_active')

      tabsContentElements.forEach((content) => {
        content.dataset.tabsField === btn.dataset.tabsHandler ? content.classList.remove('hidden') : content.classList.add('hidden');

        if (btn.dataset.tabsHandler === "interior" ) {
          tabsTitles[0].classList.remove('hidden')
          tabsTitles[1].classList.add('hidden')
        } else if (btn.dataset.tabsHandler === "body" ) {
          tabsTitles[1].classList.remove('hidden')
          tabsTitles[0].classList.add('hidden')
        }
      });
    });
  });
};
