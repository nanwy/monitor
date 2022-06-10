
function getSelectors(path) {
  return path.reverse().filter(e => {
    return e != document && e != window
  }).map(e => {
    let selector = '';
    if (e.id) {
      return `${e.tagName.toLowerCase()}#${e.id}`
    } else if (e.className && typeof e.className === 'string') {
      return `${e.nodeName.toLowerCase()}.${e.className}`;
    } else {
      selector = e.nodeName.toLowerCase();
    }
    return selector;
  }).join(' ');
}

export default function (path) {
  if (Array.isArray(path)) {
    return getSelectors(path);
  }
}