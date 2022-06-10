let host = '', project = '', logStore = ''

function getExtraData() {
  return {
    title: document.title,
    url: location.url,
    timestamp: Date.now(),
  }
}

class SendTracker {
  constructor() {
    this.url = `${project}.${host}/log/${logStore}`;
    this.xhr = new XMLHttpRequest
  }
  send(data = {}) {
    const extraData = getExtraData();
    let log = { ...extraData, ...data }
    console.log('log: ', log);
    this.xhr.open('POST', this.url, true);
    let body = JSON.stringify(data);
    this.xhr.setRequestHeader('x-log-id', '0.6.0');
    this.xhr.onload = function () {

    }
    this.xhr.onerror = function () {

    }
    this.xhr.send(body)
  }

}

export default new SendTracker()