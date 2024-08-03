export const scrollToTop = scrollValue => {
  window.scrollTo({
    top: scrollValue ? scrollValue : 0,
    left: 0,
  });
};
