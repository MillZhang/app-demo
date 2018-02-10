const BASEURL = "https://api.douban.com/v2/";
const Util = {
  /**
   * 获取请求
   * @param {string} url
   * @param {请求回调} successCallback
   * @param {失败回调} failCallback
   */
  fetchData(url, successCallback, failCallback) {
    fetch(BASEURL+url)
      .then(response => response.json())
      .then(data => successCallback(data))
      .catch(error => failCallback(data));
  }
};

module.exports = Util;
