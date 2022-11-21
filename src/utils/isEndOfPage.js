const isEndOfPage = (margin = 200) =>
  window.scrollY + window.innerHeight >= document.body.offsetHeight - margin;

export default isEndOfPage;
