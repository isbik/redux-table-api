import axios from 'axios'

const ApiService = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1/'
})

export default ApiService