import axios from 'axios'

const config = {
  baseURL: '',
  headers: {},
  data: {},
  responseType: 'json',
  responseEncoding: 'utf8',
  validiteStatus: status => status >= 200 && status < 300,
  maxRedirects: 5
}

export default axios.create(config)
