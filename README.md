# Project Overview

## CryptoForager

The name of your project with deployed URL.

## Project Description

An App for searching up pricing and other information on cryptocurrencies. The project will append prices, 24hr change in price, 24 trade volume, Market Cap and images of the cryptocurrency coins from the coinrank api that I will be using.

## API and Data Sample

The API I am using is from coingecko.com. One of the API's functionalities is a individual coin search, which returns a list of data objects for the coin being searched. Below is the object data for the crypto currency bitcoin with reference currency of usd from the coingecko API.

[https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true]

```Json
{
    "bitcoin": {
        "usd": 32683,
        "usd_market_cap": 608091493951.057,
        "usd_24h_vol": 49983080500.82763,
        "usd_24h_change": -8.587783487711413,
        "last_updated_at": 1624305808
    }
}
```
Below is the object data for the reference currencies with reference currencies from the coingecko API.

[https://api.coingecko.com/api/v3/simple/supported_vs_currencies]

```Json
[
    "btc",
    "eth",
    "ltc",
    "bch",
    "bnb",
    "eos",
    "xrp",
    "xlm",
    "link",
    "dot",
    "yfi",
    "usd",
    "aed",
    "ars",
    "aud",
    "bdt",
    "bhd",
    "bmd",
    "brl",
    "cad",
    "chf",
    "clp",
    "cny",
    "czk",
    "dkk",
    "eur",
    "gbp",
    "hkd",
    "huf",
    "idr",
    "ils",
    "inr",
    "jpy",
    "krw",
    "kwd",
    "lkr",
    "mmk",
    "mxn",
    "myr",
    "ngn",
    "nok",
    "nzd",
    "php",
    "pkr",
    "pln",
    "rub",
    "sar",
    "sek",
    "sgd",
    "thb",
    "try",
    "twd",
    "uah",
    "vef",
    "vnd",
    "zar",
    "xdr",
    "xag",
    "xau",
    "bits",
    "sats"
]
```

## Wireframes

https://imgur.com/NP3TRqV.jpg

### MVP/PostMVP

#### MVP 

- Find and use external api 
- Retrieve crypto coin data for the coin being searched
- Render data on page
- retrieve dropdown list of reference currency
- Allow user to choose reference currency & return crypto coin data in the selected reference currency

#### PostMVP  

- Add second API from coinranking.com to retrieve data on multiple coins
- render the data on page
- add mediaquery for mobile devices

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|June 23| Pseudocode / actual code | Incomplete
|June 24| Initial Clickable Model  | Incomplete
|June 25| MVP | Incomplete
|June 26| Post-MVP | Incomplete
|June 28| Presentations | Incomplete

## Priority Matrix

https://imgur.com/NdUpOuy.jpg Priority Matrix

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up HTML boiler plate| H | 1hrs| --hrs | --hrs |
| Adding API | H | 3hrs| --hrs | --hrs |
| Adding Form for search bar | H | 3hrs| --hrs | --hrs |
| Fetch data for individual crypto search | H | 3hrs| --hrs | --hrs |
| Create click event for search bar | H | 3hrs| --hrs | --hrs |
| Fetch data list for reference currency | H | 3hrs| --hrs | --hrs |
| Create option list from reference currency list | H | 3hrs| --hrs | --hrs |
| Link selected reference currency to indivudal crypto search function | H | 3hrs| --hrs | --hrs |
| Append results to DOM | H | 3hrs| --hrs | --hrs |
| Create remove function for past results | H | 3hrs| --hrs | --hrs |
| Add icons | H | 3hrs| --hrs | --hrs |
| Format text for MVP | H | 2hrs| --hrs | --hrs |
| Flexbox & CSS for MVP | H | 3hrs| --hrs | --hrs |
| Add media queries for MVP | H | 3hrs| --hrs | --hrs |
| Adding 2nd API for multiple Crypto | H | 3hrs| --hrs | --hrs |
| Fetch data for multiple cryptos | H | 3hrs| --hrs | --hrs |
| Append multiple results to DOM | H | 3hrs| --hrs | --hrs |
| Format text for API 2 | H | 3hrs| --hrs | --hrs |
| Flexbox & CSS for API 2 | H | 3hrs| --hrs | --hrs |
| Add media queries for multiple crypto | H | 3hrs| --hrs | --hrs |
| Total | H | 57hrs| --hrs | --hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
