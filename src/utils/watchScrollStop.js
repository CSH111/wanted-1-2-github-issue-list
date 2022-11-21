const watchScrollStop = (callback, time = 200) => {
  let timer;
  window.addEventListener("scroll", () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(callback, time);
  });
};

export default watchScrollStop;
