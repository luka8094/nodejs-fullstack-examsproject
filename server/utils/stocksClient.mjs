import "dotenv/config"
import axios from "axios"

const axiosNode = axios
let data = []
console.log(axios)

//reference: https://rapidapi.com
const OPTIONS = {
    method: 'GET',
  url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list',
  params: {
    edition_currency_id: '12',
    time_utc_offset: '28800',
    lang_ID: '1',
    sort: 'PERC1D_DN',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST
  }
}

axiosNode.request(OPTIONS)
.then( res => res.json())
.then( res => data = res)

export default axiosNode 