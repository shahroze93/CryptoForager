// get coin list: https://api.coingecko.com/api/v3/coins/list
// get supported currencies: https://api.coingecko.com/api/v3/simple/supported_vs_currencies
// to get price of coins and which currencies to get it in: https://api.coingecko.com/api/v3/coins

////////////////////////////////////////////////////////////////////////////////////
// INDIVIDUAL CRYPTO SEARCH SECTION
///////////////////////////////////////////////////////////////////////////////////

const imageContainer = document.querySelector('#image-container')
const dataContainer = document.querySelector('#data-container')
const desContainer = document.querySelector('#desDiv')

// Adding API & Fetch data for individual crypto search
async function fetchData(name, curr) {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=${curr}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
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
    errorMsg.textContent = `ERROR. --- PLEASE CHECK SPELLING & TRY AGAIN`
    dataContainer.append(errorMsg)
  }
}
// fetchData('cardano') // for test purposes

//below function helps limit decimal points - assitance taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function decimal(x) {
  const deci = Number.parseFloat(x).toFixed(4);
  // const comma = deci.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //function helps put a comma for thousand separator - taken from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return deci
}
function decimal2(x) {
  const deci2 = Number.parseFloat(x).toFixed(2);
  return deci2
}

// Get data from API and Append results to DOM
function showCrypto(data, info) {
  const curr = selectTag.value
  const fiat = curr.toUpperCase()
  console.log(fiat)
  const stat = Object.values(data)
  console.log(stat)
  console.log(typeof stat[0])
  console.log(decimal(stat[0]))
  console.log(info)
  const cryPrice = decimal(stat[0]) + ` ${[fiat]}`
  const crySym = (info.symbol).toUpperCase()
  const cryChange = decimal2(stat[3])
  const cryTrade = decimal(stat[2] / 1000000000) + ` Billion ${[fiat]}`
  const cryCap = decimal((stat[1]) / 1000000000) + ` Billion  ${[fiat]}`
  const cryCir = decimal((info.market_data.circulating_supply) / 1000000000) + ` Billion ${crySym}`
  const cryLow = decimal2(info.market_data.low_24h[curr])
  const cryHigh = decimal2(info.market_data.high_24h[curr])
  const cryMax = decimal(info.market_data.total_supply)

  let cryptoImage = `
  <h3 class="searchName">${info.name} (${crySym})</h3>
  <img class="searchImg" src=" ${info.image.large}"></img>
  <p>Rank By Mkt Cap: ${info.market_cap_rank}<p>
  `
  let cryptoData = `
  <p class="searchPrice">Price: ${cryPrice}</p>
  <p>24Hr Low: ${[fiat]} ${cryLow}</p>
  <p>24Hr High: ${[fiat]} ${cryHigh}</p>
  <p id=perChange>24Hr Price Change: ${cryChange}%</p>
  <p>24Hr Trade Vol: ${cryTrade}</p>
  <p>Market Cap: ${cryCap}</p>
  <p>Circulating Supply: ${cryCir}<p>
  `
  imageContainer.insertAdjacentHTML('afterbegin', cryptoImage)
  dataContainer.insertAdjacentHTML('beforeend', cryptoData)
  cryptoTable(info, curr, fiat)
  document.getElementById("desDiv").style.display = "block";
  document.getElementById("hideTable").style.visibility = "visible";
  document.getElementById("indvCrypto").style.visibility = "visible";
  return cryptoData
}

// Post-MVP new section/table to show addtional price changes by hour, day, month, and year + button to toggle on and off
const rowPrice = document.querySelector('#rowPrice')

function cryptoTable(info, curr, fiat) {
  const onePrc = decimal2(info.market_data.price_change_percentage_1h_in_currency[curr])
  const dayPrc = decimal2(info.market_data.market_cap_change_percentage_24h_in_currency[curr])
  console.log(dayPrc)
  const weekPrc = decimal2(info.market_data.price_change_percentage_7d_in_currency[curr])
  console.log(weekPrc)
  const fortnightPrc = decimal2(info.market_data.price_change_percentage_14d_in_currency[curr])
  const monthPrc = decimal2(info.market_data.price_change_percentage_30d_in_currency[curr])
  const yearPrc = decimal2(info.market_data.price_change_percentage_1y_in_currency[curr])

  const displayPriceTitle = document.createElement('td')
  displayPriceTitle.classList.add("tablePrice")
  displayPriceTitle.textContent = `Price Change % in ${[fiat]}`
  rowPrice.append(displayPriceTitle)
  const displayOnePrc = document.createElement('td')
  displayOnePrc.classList.add("timePrice")
  displayOnePrc.textContent = onePrc
  rowPrice.append(displayOnePrc)
  const displayDayPrc = document.createElement('td')
  displayDayPrc.classList.add("timePrice")
  displayDayPrc.textContent = (dayPrc)
  rowPrice.append(displayDayPrc)
  const displayWeekPrc = document.createElement('td')
  displayWeekPrc.classList.add("timePrice")
  displayWeekPrc.textContent = (weekPrc)
  rowPrice.append(displayWeekPrc)
  const displayFortPrc = document.createElement('td')
  displayFortPrc.classList.add("timePrice")
  displayFortPrc.textContent = (fortnightPrc)
  rowPrice.append(displayFortPrc)
  const displayMonthPrc = document.createElement('td')
  displayMonthPrc.classList.add("timePrice")
  displayMonthPrc.textContent = (monthPrc)
  rowPrice.append(displayMonthPrc)
  const displayYearPrc = document.createElement('td')
  displayYearPrc.classList.add("timePrice")
  displayYearPrc.textContent = (yearPrc)
  rowPrice.append(displayYearPrc)
}

// Adding Form for search bar & create click event for search bar
const form = document.querySelector('#crypto-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#crypto-search').value.replace(" ", "-")
  const inputLow = inputValue.toLowerCase() // ADDED THIS IN BECAUSE API IS CASE SENSITIVE AND ONLY RECOGNIZES LOWER CASE
  console.log(inputLow)
  const selectCurr = selectTag.value
  console.log(selectCurr)
  fetchData(inputLow, selectCurr)
  document.querySelector('#crypto-search').value = ''
  removeContent(imageContainer)
  removeContent(dataContainer)
  removeContent(rowPrice)
  removeContent(rowChange)
})

// ////////////////////////////////////////////////////////////////////////////////////
// // REFERENCE CURRENCY LIST SECTION
// ///////////////////////////////////////////////////////////////////////////////////

// // Create option list from reference currency list
const selectTag = document.querySelector('#select-currency')
// console.log(selectTag)
const selectTag2 = document.querySelector('#select-currency2')
// console.log(selectTag2)
const formCurr = document.querySelector('.form-currency') 
// console.log(formCurr)

// Fetch data list for reference currency
const getCurrList = async () => {
  try {
    const getCurrURL = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
    const response = await axios.get(getCurrURL)
    console.log(response)
    // console.log(response.data)
    const CurrList = Object.values(response.data)
    // console.log(CurrList)
    setOptions(CurrList)
  } catch (error) {
    console.error(error)
  }
}

getCurrList()

// Create option list from reference currency list
function setOptions(list) {
  // console.log(list)
  list.forEach((currency) => {
    // console.log(currency)
    let optionTag = document.createElement('option')
    optionTag.textContent = currency
    optionTag.value = currency
    selectTag.append(optionTag)
    let optionTag2 = document.createElement('option')
    optionTag2.textContent = currency
    optionTag2.value = currency
    selectTag2.append(optionTag2)
  })
}

// Create remove function for past results
function removeContent(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild)
  }
}

//////////////////////////////////////////////////////////////////////////////////////
////MULTIPLE CRYPTO/ MARKET OVERVIEW SECTION
/////////////////////////////////////////////////////////////////////////////////////

// Add API and fetch data list for multiple currencies
const section = document.querySelector('.coin-list')

async function getData() {
  try {
    const url3 = 'https://api.coingecko.com/api/v3/coins'
    const data = await axios.request(url3)
    // console.log(data);
    // console.log(data.data);
    // console.log(data.data[0]);
    const coinsArray = (data.data)
    showCoinData(coinsArray)
  
    return data
  } catch (error) {
    console.error(error)
  }
}

getData()

// get array data for multiple coins and append it to the DOM
function showCoinData(coinsArray) {
  const curr = selectTag2.value
  const fiat = curr.toUpperCase()
  console.log(fiat)

   for (i = 0; i < coinsArray.length; i++) {
    // console.log(coinsArray[i])
    const sectionDiv = document.createElement("div")
    sectionDiv.classList.add("sectionDiv") 
    section.append(sectionDiv)

    const coinName = document.createElement("h3")
    coinName.classList.add("coinName") 
    const sym = (coinsArray[i].symbol).toUpperCase() //put the symbol variable here because i want to add it next to the name of the coin
    // console.log(sym)
    coinName.textContent = `${coinsArray[i].name} (${sym})`
    // console.log(coinsArray[i].name)
    sectionDiv.append(coinName)

    const coinImg = document.createElement("img")
    coinImg.classList.add("coinImg") 
    coinImg.setAttribute('src', coinsArray[i].image.large)
    // console.log(coinsArray[i].image.large)
    sectionDiv.append(coinImg)

    const coinSymbol = document.createElement('p')
    coinSymbol.classList.add("coinSymbol")
    coinSymbol.textContent = `Symbol: ${sym}`
    sectionDiv.append(coinSymbol)
     
    const coinRank = document.createElement('p')
    coinRank.classList.add("coinRank")
    coinRank.textContent = `Market Cap Rank: ${coinsArray[i].market_data.market_cap_rank}`
    // console.log(coinsArray[i].market_data.market_cap_rank)
    sectionDiv.append(coinRank)
     
    const coinPrice = document.createElement('h3')
    coinPrice.classList.add("coinPrice")
    const deciPrice = decimal(coinsArray[i].market_data.current_price[curr])
    coinPrice.textContent = `Price: ${fiat} ${deciPrice}` //need to add a function where the currency changes like for the search option
    // console.log(deciPrice)
     sectionDiv.append(coinPrice)
     
    const coinPerChange = document.createElement('p')
    coinPerChange.classList.add("timePrice")
    const deciPerChange = decimal2(coinsArray[i].market_data.price_change_percentage_24h) + "%"
    coinPerChange.textContent = `24hr Change: ${deciPerChange}`
    // console.log(deciSupply)
    sectionDiv.append(coinPerChange) 
    
    const coinCap = document.createElement('p')
    coinCap.classList.add("coinCap")
    const deciCap = decimal2((coinsArray[i].market_data.market_cap[curr])/1000000000) + ` Bil ${fiat}`
    coinCap.textContent = `Market Cap: ${deciCap}`
    // console.log(deciCap)
    sectionDiv.append(coinCap) 
     
    const coinSupply = document.createElement('p')
    coinSupply.classList.add("coinSupply")
    const deciSupply = decimal2((coinsArray[i].market_data.circulating_supply)/1000000000) + ` Bil ${sym}`
    coinSupply.textContent = `Cir Supply: ${deciSupply}`
    // console.log(deciSupply)
    sectionDiv.append(coinSupply)
     


  }
}

// form and return new array of coins with selected referenece currency
const form2 = document.querySelector('.array-form')

form2.addEventListener('click', (e) => {
  e.preventDefault()
  removeContent(section) 
  getData(selectTag2)
})

// hide and display function assistance taken from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function hideShow() {
  var x = document.getElementById("desDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}