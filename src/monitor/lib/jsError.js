
import getLastEvent from "../utils/getLastEvent";
import getSelector from "../utils/getSelector";
import tracker from '../utils/tracker'

export function injectJsError() {
  //监听全局未捕获的错误
  window.addEventListener('error', function (event) {
    let lastEvent = getLastEvent(); //最后一个交互事件的元素
    console.log('lastEvent: ', lastEvent);
    const log = {
      // title: 
      kind: 'stability', //监控指标的大类
      type: 'error',  //小类 一个小错误
      errorType: 'jsError', //错误类型
      url: '', //报错路径
      message: event.message, //报错信息
      filename: event.filename, //报错文件
      position: `${event.lineno}:${event.colno}`, //报错的行数列数 sourcemap
      stack: getLines(event.error.stack),
      selector: lastEvent ? getSelector(lastEvent.path) : '' //代表最后操作的一个元素
    }
    console.log(log);
    tracker.send(log);
  });

  function getLines(stack) {
    console.log('stack: ', stack);
    return stack.split('\n').slice(1).map(i => i.replace(/^\s+at\s+/g, '')).join('^');
  }
}