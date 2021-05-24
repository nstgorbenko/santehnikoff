document.addEventListener("DOMContentLoaded", () => {
  new WOW().init();
});


// Pinterest layout for reviews
(function () {
  const container = document.getElementById("pinterest");

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
