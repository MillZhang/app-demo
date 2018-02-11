const BASEURL = "https://api.douban.com/v2/";
const Util = {
  /**
   * 获取请求
   * @param {string} url
   * @param {请求回调} successCallback
   * @param {失败回调} failCallback
   */
  fetchData(url, successCallback, failCallback) {
    fetch(BASEURL + url, {
      headers: {
        "Content-Type": "x-www-form-urlencoded;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(data => successCallback(data))
      .catch(error => failCallback(data));
  }
};

module.exports = Util;
