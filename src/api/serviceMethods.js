import serviceInstance from './serviceInstance'

const get = (url, config) => {
  if (url) {
    return serviceInstance.get(url, config)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.resolve(error))
  }
  return Promise.reject()
}

export default get
export { get }
