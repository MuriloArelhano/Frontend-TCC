export const scrollToSection = (section) => {
  // console.log(section)
  if (section) {
    window.scroll(0, section.current.offsetTop);
  }
};