import queryStringify from "../../utils/myDash/queryStringify/index.js";
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
class fetchHTTP {
    constructor() {
        this.get = (url, options = {}) => {
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.GET }), options.timeout);
        };
        this.post = (url, options = {}) => {
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.POST }), options.timeout);
        };
        this.put = (url, options = {}) => {
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.PUT }), options.timeout);
        };
        this.delete = (url, options = {}) => {
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.DELETE }), options.timeout);
        };
        this.request = (url, options, timeout = 5000) => {
            const { headers: currentHeaders, body, method } = options;
            const headers = Object.assign({}, currentHeaders);
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                const isGet = method === METHODS.GET;
                method && xhr.open(method, isGet && !!body ? `${url}${queryStringify(body)}` : url);
                headers && Object.keys(headers).forEach((key) => {
                    xhr.setRequestHeader(key, headers[key]);
                });
                xhr.withCredentials = true;
                xhr.timeout = timeout;
                xhr.onload = function () {
                    resolve(xhr);
                };
                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;
                if (method === METHODS.GET || !body) {
                    xhr.send();
                }
                else {
                    xhr.send(body);
                }
            });
        };
    }
}
;
const Fetch = new fetchHTTP();
export default Fetch;
