const isEndOfPage = (margin = 300) =>
  window.scrollY + window.innerHeight >= document.body.offsetHeight - margin;

export default isEndOfPage;
