///////////////////////////////////////////////////////////////////////////////////
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

    const info = (data.data)
    showCrypto(response.data[name], info)
    return response
  } catch (error) {
    console.error(error)
    let errorMsg = document.createElement('h1')
    errorMsg.textContent = `ERROR. --- PLEASE CHECK SPELLING & TRY AGAIN`
    dataContainer.append(errorMsg)
  }
}

//below function helps limit decimal points - assistance taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function decimal(x) {
  const deci = Number.parseFloat(x).toFixed(4);
  return deci
}
function decimal2(x) {
  const deci2 = Number.parseFloat(x).toFixed(2);
  return deci2
}
// the function below will style the elements to red or green depending if the number is negative or positive (Added - feature)
function numColor(num) {
  if (num < 0){
  document.querySelector("#perChange").style.color = "red";
  } 
  else {  
  document.querySelector("#perChange").style.color = "#50C878";
  }
}
function numColor2() {
  let x = document.getElementsByClassName("timePrice");

  for (i = 0; i < x.length; i++) {
    if (x[i].innerText < 0){
      x[i].style.color = "red";
      } 
      else {  
      x[i].style.color = "#50C878";
      }
  }
}

// Get data from API and Append results to DOM
function showCrypto(data, info) {
  const curr = selectTag.value
  const fiat = curr.toUpperCase()
  const stat = Object.values(data)
  const cryPrice = decimal(stat[0]) + ` ${[fiat]}`
  const crySym = (info.symbol).toUpperCase()
  const cryChange = decimal2(stat[3])
  const cryTrade = decimal(stat[2] / 1000000000) + ` Billion ${[fiat]}`
  const cryCap = decimal((stat[1]) / 1000000000) + ` Billion  ${[fiat]}`
  const cryCir = decimal((info.market_data.circulating_supply) / 1000000000) + ` Billion ${crySym}`
  const cryLow = decimal2(info.market_data.low_24h[curr])
  const cryHigh = decimal2(info.market_data.high_24h[curr])
  const cryMax = decimal(info.market_data.total_supply)
  const cryID = (info.id)

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
  <p id="cryID">${cryID}</p>
  `
  imageContainer.insertAdjacentHTML('afterbegin', cryptoImage)
  dataContainer.insertAdjacentHTML('beforeend', cryptoData)
  cryptoTable(info, curr, fiat)
  document.getElementById("desDiv").style.display = "block";
  document.getElementById("hideTable").style.visibility = "visible";
  document.getElementById("indvCrypto").style.visibility = "visible";
  document.getElementById("update-data-btn").style.visibility = "visible";
  numColor(cryChange)
  numColor2()
  return cryptoData
}

// Post-MVP new section/table to show additional price changes by hour, day, month, and year + button to toggle on and off
const rowPrice = document.querySelector('#rowPrice')

function cryptoTable(info, curr, fiat) {
  const onePrc = decimal2(info.market_data.price_change_percentage_1h_in_currency[curr])
  const dayPrc = decimal2(info.market_data.market_cap_change_percentage_24h_in_currency[curr])
  const weekPrc = decimal2(info.market_data.price_change_percentage_7d_in_currency[curr])
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
  const inputLow = inputValue.toLowerCase().replace(/ /g, "-"); // ADDED THIS IN BECAUSE API IS CASE SENSITIVE AND ONLY RECOGNIZES LOWER CASE - ALSO ADDED IN .REPLACE BECAUSE IF SEARCHING FOR 2 WORDS YOU NEED TO ADD "-". Assistance taken from https://stackoverflow.com/questions/19873002/how-to-replace-all-spaces-in-a-string/19873010
  const selectCurr = selectTag.value
  fetchData(inputLow, selectCurr)
  document.querySelector('#crypto-search').value = ''
  removeContent(imageContainer)
  removeContent(dataContainer)
  removeContent(rowPrice)
})

// Added in Post-MVP so that search results can be updated with the selected currency instead of having to typing in again. it takes the id of the crypto being shown in #indvCrypto
const updateDataBtn = document.querySelector("#update-data-btn")

updateDataBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const selectCurr = selectTag.value
  const cryID = document.querySelector("#cryID")
  const searchTerm = cryID.textContent
  fetchData(searchTerm, selectCurr)
  removeContent(imageContainer)
  removeContent(dataContainer)
  removeContent(rowPrice)
})

// ////////////////////////////////////////////////////////////////////////////////////
// // REFERENCE CURRENCY LIST SECTION
// ///////////////////////////////////////////////////////////////////////////////////

// // Create option list from reference currency list
const selectTag = document.querySelector('#select-currency')
const selectTag2 = document.querySelector('#select-currency2')
const formCurr = document.querySelector('.form-currency') 

// Fetch data list for reference currency
const getCurrList = async () => {
  try {
    const getCurrURL = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
    const response = await axios.get(getCurrURL)
    const CurrList = Object.values(response.data)
    setOptions(CurrList)
  } catch (error) {
    console.error(error)
  }
}

getCurrList()

// Create option list from reference currency list
function setOptions(list) {
  list.forEach((currency) => {
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
    const coinsArray = (data.data)
    showCoinData(coinsArray)
    numColor2()
  
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

   for (i = 0; i < coinsArray.length; i++) {
    const sectionDiv = document.createElement("div")
    sectionDiv.classList.add("sectionDiv")
    const searchName = (coinsArray[i].name).toString().toLowerCase().replace(/ /g, "-");
    const searchID = (coinsArray[i].id)
    sectionDiv.addEventListener('click', (e) => {
      e.preventDefault()
      const selectCurr2 = selectTag2.value
      fetchData(searchID, selectCurr2)
      removeContent(imageContainer)
      removeContent(dataContainer)
      removeContent(rowPrice)
      scrollFunction(180)
    }) 
    section.append(sectionDiv)

    const coinName = document.createElement("h3")
    coinName.classList.add("coinName")
    const sym = (coinsArray[i].symbol).toUpperCase() 
    coinName.textContent = `${coinsArray[i].name} (${sym})`
    sectionDiv.append(coinName)

    const coinImg = document.createElement("img")
    coinImg.classList.add("coinImg") 
    coinImg.setAttribute('src', coinsArray[i].image.large)
    sectionDiv.append(coinImg)

    const coinSymbol = document.createElement('p')
    coinSymbol.classList.add("coinSymbol")
    coinSymbol.textContent = `Symbol: ${sym}`
    sectionDiv.append(coinSymbol)
     
    const coinRank = document.createElement('p')
    coinRank.classList.add("coinRank")
    coinRank.textContent = `Market Cap Rank: ${coinsArray[i].market_data.market_cap_rank}`
    sectionDiv.append(coinRank)
     
    const coinPrice = document.createElement('h3')
    coinPrice.classList.add("coinPrice")
    const deciPrice = decimal(coinsArray[i].market_data.current_price[curr])
    coinPrice.textContent = `Price: ${fiat} ${deciPrice}` 
     sectionDiv.append(coinPrice)
     
    const coinPerChange = document.createElement('p')
    coinPerChange.classList.add("timePrice")
    const deciPerChange = decimal2(coinsArray[i].market_data.price_change_percentage_24h) + "%"
    coinPerChange.textContent = `24hr Change: ${deciPerChange}`
    sectionDiv.append(coinPerChange) 
    
    const coinCap = document.createElement('p')
    coinCap.classList.add("coinCap")
    const deciCap = decimal2((coinsArray[i].market_data.market_cap[curr])/1000000000) + ` Bil ${fiat}`
    coinCap.textContent = `Market Cap: ${deciCap}`
    sectionDiv.append(coinCap) 
     
    const coinSupply = document.createElement('p')
    coinSupply.classList.add("coinSupply")
    const deciSupply = decimal2((coinsArray[i].market_data.circulating_supply)/1000000000) + ` Bil ${sym}`
    coinSupply.textContent = `Cir Supply: ${deciSupply}`
    sectionDiv.append(coinSupply)
  }
}

// form and return new array of coins with selected reference currency
const form2 = document.querySelector('.array-form')

form2.addEventListener('click', (e) => {
  e.preventDefault()
  removeContent(section) 
  getData(selectTag2)
})

// hide and display function 
function hideShow() {
  let x = document.getElementById("desDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Scroll function that takes the user to the #indvCrypto section once invoked
function scrollFunction(place) {
  document.documentElement.scrollTop = place;
  document.body.scrollTop = place; // for safari users
}