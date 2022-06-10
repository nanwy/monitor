let lastEvent;
['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(eventType => {
  document.addEventListener(eventType, (event) => {
    lastEvent = event;
  }, {
    capture: true, //捕获
    passive: true
  })
})

export default function () {
  return lastEvent;
}