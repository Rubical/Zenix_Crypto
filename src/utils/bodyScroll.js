export const enableBodyScroll = () => {
  document.body.style.overflow = "visible";
  document.body.style.background = "fff";
};

export const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
  window.scroll(0, 0);
};
