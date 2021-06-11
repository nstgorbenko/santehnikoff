document.addEventListener('DOMContentLoaded', () => {
  // Pinterest layout for reviews
  (function () {
    const container = document.getElementById('pinterest');

    if (container) {
      const ScreenWidth = {
        TABLET: 1200,
        MOBILE: 768,
      };

      const ColumnsCount = {
        DESKTOP: 3,
        TABLET: 2,
        MOBILE: 1,
      };

      const makePinterestLayout = () => {
        const currentScreenWidth = document.documentElement.clientWidth;

        let currentColumnsCount;
        if (currentScreenWidth > ScreenWidth.TABLET) {
          currentColumnsCount = ColumnsCount.DESKTOP;
        } else if (currentScreenWidth > ScreenWidth.MOBILE) {
          currentColumnsCount = ColumnsCount.TABLET;
        } else {
          currentColumnsCount = ColumnsCount.MOBILE;
        }

        const columnsHeights = Array(currentColumnsCount).fill(0);

        Array.from(container.children).forEach((child, i) => {
          const order = i % currentColumnsCount;
          child.style.order = order;
          columnsHeights[order] += parseFloat(child.clientHeight);
        });

        container.style.height = Math.max(...columnsHeights) + 'px';
      }

      makePinterestLayout();
      window.addEventListener('resize', makePinterestLayout);
    }
  })();

  // Price list container height
  (function () {
    const priceLists = document.querySelectorAll('.price__list');

    if (priceLists) {
      const TABLET_WIDTH = 992;

      const setPriceListsHeight = () => {
        const currentScreenWidth = document.documentElement.clientWidth;

        priceLists.forEach((priceList) => {
          if (currentScreenWidth > TABLET_WIDTH) {
            const priceListContainer = priceList.closest('.price__tab');
            const priceItemsCount = priceList.children.length;

            if (priceItemsCount) {
              priceListContainer.style.display = 'block';
              const priceItemHeight = priceList.firstElementChild.offsetHeight;
              priceListContainer.style.display = null;
              priceList.style.height = `${Math.ceil(priceItemsCount / 2) * priceItemHeight}px`;
            } else {
              priceList.style.height = 0;
            }

          } else {
            priceList.style.height = 'auto';
          }
        });
      }

      setPriceListsHeight();
      window.addEventListener('resize', setPriceListsHeight);
    }
  })();

  // Header catalog work on mouseover
  (function () {
    const headerCatalog = document.querySelector('.header-catalog');

    if (headerCatalog) {
      let titles = headerCatalog.querySelectorAll('.header-catalog__name');
      let innerLists = headerCatalog.querySelectorAll('.header-catalog__inner-list');

      let activeTitle = titles[0];
      let activeInnerList = innerLists[0];

      activeTitle.classList.add('active');
      activeInnerList.classList.add('active');

      headerCatalog.addEventListener('mouseover', (evt) => {
        const target = evt.target.closest('.header-catalog__name');
        if (!target) return;

        activeTitle.classList.toggle('active');
        activeInnerList.classList.toggle('active');

        activeTitle = target;
        activeInnerList = innerLists[[...titles].indexOf(activeTitle)];

        activeTitle.classList.add('active');
        activeInnerList.classList.add('active');
      });
    }

  })();

  // Show more About section
  (function () {
    const aboutSection = document.querySelector('.about');

    if (aboutSection) {
      const showMoreButton = document.querySelector('.about__link--more');
      if (showMoreButton) {
        const textContainer = document.querySelector('.about__content');

        showMoreButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          textContainer.style.height = `${textContainer.scrollHeight}px`;
          textContainer.classList.add('show');
          showMoreButton.remove();
        })
      }
    }
  })();

  // Show more Service-text section
  (function () {
    const aboutSection = document.querySelector('.service-text');

    if (aboutSection) {
      const showMoreButton = document.querySelector('.service-text__button--more');
      if (showMoreButton) {
        const textContainer = document.querySelector('.service-text__text');

        showMoreButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          textContainer.style.height = `${textContainer.scrollHeight}px`;
          textContainer.classList.add('show');
          showMoreButton.remove();
        })
      }
    }
  })();

  // Init staff slider
  (function () {
    const staffSection = document.querySelector('.staff');

    if (staffSection) {
      return new Swiper('.staff__content', {
        slidesPerView: 2.3,
        spaceBetween: 15,
        navigation: {
          prevEl: '.staff__link-left',
          nextEl: '.staff__link-right',
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
        grabCursor: true,
        loop: true,
      });
    }
  })();

  // Init service slider
  (function () {
    const serviceSection = document.querySelector('.service--slider');

    if (serviceSection) {
      return new Swiper('.service__content', {
        slidesPerView: 2.3,
        spaceBetween: 15,
        navigation: {
          prevEl: '.service__link-left',
          nextEl: '.service__link-right',
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
        grabCursor: true,
        loop: true,
      });
    }
  })();
});


window.addEventListener('load', () => {
  // Header catalog height
  (function () {
    const headerCatalog = document.querySelector('.header-catalog__inner');

    if (headerCatalog) {
      const ScreenWidth = {
        DESKTOP: 1400,
        TABLET: 992,
      };
      const ColumnsCount = {
        DESKTOP: 3,
        TABLET: 2,
        MOBILE: 1,
      }

      const catalogLists = headerCatalog.querySelectorAll('.header-catalog__sublist');

      const setHeaderCatalogHeight = () => {
        const currentScreenWidth = document.documentElement.clientWidth;
        let catalogListsHeights = [];

        catalogLists.forEach((catalogList) => {
          const catalogListContainer = catalogList.closest('.header-catalog__inner-list');
          const catalogListItemsCount = catalogList.children.length;

          let catalogListHeight;
          if (catalogListItemsCount) {
            catalogListContainer.style.display = 'block';
            catalogListItemHeight = catalogList.firstElementChild.offsetHeight;
            catalogListContainer.style.display = null;

            let columnsCount;
            if (currentScreenWidth > ScreenWidth.DESKTOP) {
              columnsCount = ColumnsCount.DESKTOP;
            } else if (currentScreenWidth > ScreenWidth.TABLET) {
              columnsCount = ColumnsCount.TABLET;
            } else {
              columnsCount = ColumnsCount.MOBILE;
            }

            catalogListHeight = Math.ceil(catalogListItemsCount / columnsCount) * catalogListItemHeight;
          } else {
            catalogListHeight = 0;
          }
          catalogListsHeights.push(catalogListHeight);
        });

        headerCatalog.style.height = `${Math.max(...catalogListsHeights)}px`
      }

      setHeaderCatalogHeight();
      window.addEventListener('resize', setHeaderCatalogHeight);
    }
  })();
});
