import axios from 'axios'
import config from '../config'

class HttpService {
  constructor() {
    this._axios = axios.create({
      baseURL: config.api.url
    })
  }

  get(url, config) {
    return this._axios.get(url, config)
  }

  post(url, data, config) {
    return this._axios.post(url, data, config)
  }

  patch(url, data, config) {
    return this._axios.put(url, data, config)
  }

  put(url, data, config) {
    return this._axios.put(url, data, config)
  }

  delete(url, config) {
    return this._axios.delete(url, config)
  }

  customRequest(config) {
    return this._axios(config)
  }
}

const httpService = new HttpService()

export default httpService
