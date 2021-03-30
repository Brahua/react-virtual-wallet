import { ajax } from "rxjs/ajax";
import { stringify } from "querystringify";

class Api {
  /**
   * getUrl
   * * Retorna el hostserver  concatenated with the custom url
   * ? All class have to extends from Api
   * @param url this param is the url to concatenated
   * @param host this param is optional for custom hostserver
   */
  static getUrl(url, host) {
    return `${host}/${url}`;
  }
  static getHeader() {
    return {};
  }
  static getPrivateHeader() {
    return {};
  }
  static getJSON(
    url,
    {
      params = {},
      isPublicRequest = true,
      host = process.env.REACT_APP_SERVER_URL,
      customHeader = null,
    }
  ) {
    return ajax.getJSON(
      Api.getUrl(`${url}?${stringify(params)}`, host),
      customHeader
        ? customHeader
        : isPublicRequest
        ? Api.getHeader()
        : Api.getPrivateHeader()
    );
  }
  static get(
    url,
    {
      params = {},
      isPublicRequest = true,
      host = process.env.REACT_APP_SERVER_URL,
      customHeader = null,
    }
  ) {
    return ajax.get(
      Api.getUrl(`${url}?${stringify(params)}`, host),
      customHeader
        ? customHeader
        : isPublicRequest
        ? Api.getHeader()
        : Api.getPrivateHeader()
    );
  }
  static post(
    url,
    {
      params = {},
      data = {},
      isPublicRequest = true,
      host = process.env.REACT_APP_SERVER_URL,
      customHeader = null,
    }
  ) {
    return ajax.post(
      Api.getUrl(`${url}?${stringify(params)}`, host),
      data,
      customHeader
        ? customHeader
        : isPublicRequest
        ? Api.getHeader()
        : Api.getPrivateHeader()
    );
  }
  static put(
    url,
    {
      params = {},
      isPublicRequest = true,
      host = process.env.REACT_APP_SERVER_URL,
      customHeader = null,
    }
  ) {
    return ajax.put(
      Api.getUrl(url, host),
      params,
      customHeader
        ? customHeader
        : isPublicRequest
        ? Api.getHeader()
        : Api.getPrivateHeader()
    );
  }
  static delete(
    url,
    {
      params = {},
      isPublicRequest = true,
      host = process.env.REACT_APP_SERVER_URL,
      customHeader = null,
    }
  ) {
    return ajax.delete(
      Api.getUrl(url, host),
      customHeader
        ? customHeader
        : isPublicRequest
        ? Api.getHeader()
        : Api.getPrivateHeader()
    );
  }
}
export default Api;
