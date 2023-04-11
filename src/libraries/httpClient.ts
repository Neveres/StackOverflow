import axios from 'axios'
import { baseURL } from 'src/settings'

axios.defaults.baseURL = baseURL

export const httpClient = axios
