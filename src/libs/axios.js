/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The project request use axios, this is axios packaging.
 */

import axios from 'axios';
import { Toast } from "vant";

class AxiosRequest {
  /**
   * @description Class AxiosRequest constructor.
   * @param {String} baseUrl Request base url.
   * @param {Object} headers Request headers config.
   * @param {Boolean} isLoading Request loading switch.
   */
  constructor(baseUrl, headers, isLoading) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.isLoading = isLoading;
    this.queue = {};
  }

  /**
   * @description Get inside config.
   * @returns Inside config.
   */
  getInsideConfig() {
    const config = {
      // alert: Axios default base url param is "baseURL" not is "baseUrl" !
      baseURL: this.baseUrl,
      headers: this.headers,
      timeout: 50000
    }
    return config;
  }

  /**
   * @description Destroy completed request.
   * @param {String} url The completed request. 
   */
  destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // Present request complete.
      // Remove request loading.
      if (this.isLoading) {
        Toast.clear();
      }
    }
  }

  /**
   * @description The axios intercept.
   * @param {Function} instance Create axios get instance.
   * @param {String} url Request url.
   */
  interceptors(instance, url) {
    // Request intercept.
    instance.interceptors.request.use(
      config => {
        if (!Object.keys(this.queue).length) {
          if (this.isLoading) {
            // Add request loading.
            Toast.loading({
              duration: 0,
              forbidClick: true,
              loadingType: "spinner",
              message: "加载中..."
            });
          }
          this.queue[url] = true;
          return config;
        }
      },
      error => {
        if (this.isLoading) {
          Toast.clear();
        }
        return Promise.reject(error);
      }
    );
    // Response intercept.
    instance.interceptors.response.use(
      result => {
        this.destroy(url);
        return result.data;
      },
      error => {
        if (this.isLoading) {
          Toast.clear();
        }
        if (error.message.includes("timeout")) {
          Toast.fail("网络超时！");
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * @description Axios request function.
   * @param {Object} options Axios request options.
   * @returns Create axios get instance.
   */
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

export default AxiosRequest;