// get coin list: https://api.coingecko.com/api/v3/coins/list
// get supported currencies: https://api.coingecko.com/api/v3/simple/supported_vs_currencies
// to get price of coins and which currencies to get it in: https://api.coingecko.com/api/v3/coins

const dataContainer = document.querySelector('#data-container')

// Adding API & Fetch data for individual crypto search
async function fetchData(name) {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
    const url2 = `https://api.coingecko.com/api/v3/coins/${name}`
    const response = await axios.get(url)
    const data = await axios.request(url2)
    console.log(response)
    console.log(response.data)
    // console.log(response.data.name) //this is not working - if I solve this then the whole thing works
    console.log(response.data[name]) // solved using https://stackoverflow.com/questions/59490822/how-to-extract-price-using-javascript-from-coingecko-api-in-a-nested-array 
    console.log(data)

    const info = (data.data)
    console.log(info)
    showCrypto(response.data[name], info)
    return response
  } catch (error) {
    console.error(error)
    let errorMsg = document.createElement('h1')
    errorMsg.textContent = `ERROR!! PLEASE CHECK THE SPELLING & TRY AGAIN!!`
    dataContainer.append(errorMsg)
  }
}
// fetchData('cardano') // for test purposes

//below function helps limit decimal points - assitance taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function decimal(x) {
  const deci = Number.parseFloat(x).toFixed(4);
  const comma = deci.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //function helps put a comma for thousand separator - taken from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return comma
}

// Append results to DOM
function showCrypto(data, info) { 
  const stat = Object.values(data)
  console.log(stat)
  console.log(typeof stat[0])
  console.log(decimal(stat[0])) 
  const cryPrice = decimal(stat[0])
  const cryChange = decimal(stat[3])
  const cryTrade = decimal(stat[2]/1000000000)
  const cryCap = decimal((stat[1])/1000000000)
  const cryCir = decimal((info.market_data.circulating_supply)/1000000000)

  let cryptoData = `
  <h3>Crypto: ${info.name} (${info.symbol})</h3>
  <img src=" ${info.image.large}"></img>
  <p>Rank By Market Cap: ${info.market_cap_rank}<p>
  <h3>Price: ${cryPrice}</h3>
  <p>24Hr Price Change %: ${cryChange}</p>
  <p>24Hr Trade Volume: ${cryTrade}</p>
  <p>Market Cap: ${cryCap}</p>
  <p>Circulating Supply: ${cryCir}<p>
  `
  dataContainer.insertAdjacentHTML('beforeend', cryptoData)
  return cryptoData
}

// Adding Form for search bar & create click event for search bar
const form = document.querySelector('#crypto-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#crypto-search').value
  const inputLow = inputValue.toLowerCase() // ADDED THIS IN BECAUSE API IS CASE SENSITIVE AND ONLY RECOGNIZES LOWER CASE
  console.log(inputLow)
  fetchData(inputLow)
  document.querySelector('#crypto-search').value = ''
})





