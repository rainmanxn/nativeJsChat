import queryStringify from "../../utils/myDash/queryStringify/index";

const BASE_URL = 'https://ya-praktikum.tech/api/v2';

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
  timeout?: number,
  credentials?: string;
}

type RequestOptions = {
  method: METHODS,
  headers?: HeadersType,
  body?: any
}

class FetchHTTP {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
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

  request = (url: string, options: RequestOptions, timeout = 5000) => {
    const { headers: currentHeaders, body, method } = options;
    const headers: HeadersType = {
      ...currentHeaders
    }

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const requestUrl = this.baseUrl + url;
      const isGet = method === METHODS.GET;
      method && xhr.open(method, isGet && !!body ? `${requestUrl}${queryStringify(body)}` : requestUrl);
      headers && Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.withCredentials = true
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

const Fetch = new FetchHTTP(BASE_URL);

export default Fetch;
