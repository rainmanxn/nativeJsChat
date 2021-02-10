import queryStringify from "../../utils/myDash/queryStringify/index.js";

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type HeadersType = { [key: string]: string }

type Options = {
  headers?: HeadersType,
  body?: any,
  method?: METHODS,
  timeout?: number
}

// function queryStringify(body) {
//   return Object
//     .entries(body)
//     .reduce((acc, [key, value]) => {
//       return `${acc}${key}=${value}&`
//     }, '?').slice(0, -1)
// }

class fetchHTTP {
  get = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  post = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  put = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  delete = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers, body, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const isGet = method === METHODS.GET;
      method && xhr.open(method, isGet && !!body ? `${url}${queryStringify(body)}` : url);
      headers && Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !body) {
        xhr.send();
      } else {
        xhr.send(body);
      }

    })
  };
};

const Fetch = new fetchHTTP();

export default Fetch;
