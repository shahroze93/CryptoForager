# Project Overview

## CryptoForager

The name of your project with deployed URL.

## Project Description

An App for searching up pricing and other information on cryptocurrencies. The project will append prices, 24hr change in price, 24 trade volume, Market Cap and images of the cryptocurrency coins from the coinrank api that I will be using.

## API and Data Sample

The API I am using is from coingecko.com. One of the API's functionalities is a individual coin search, which returns a list of data objects for the coin being searched. Below is the object data that returns basic information for the crypto currency bitcoin with reference currency of usd from the coingecko API.

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
Below is the object data that returns additional detailed information the crypto currency bitcoin from the coingecko API including images, descriptions and more.

[https://api.coingecko.com/api/v3/coins/bitcoin?market_data=true&community_data=true&developer_data=true]

<details>
<summary>Click to expand!</summary>
```json
{
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "asset_platform_id": null,
    "platforms": {
        "": ""
    },
    "block_time_in_minutes": 10,
    "hashing_algorithm": "SHA-256",
    "categories": [
        "Cryptocurrency"
    ],
    "public_notice": null,
    "additional_notices": [],
    "localization": {
        "en": "Bitcoin",
        "de": "Bitcoin",
        "es": "Bitcoin",
        "fr": "Bitcoin",
        "it": "Bitcoin",
        "pl": "Bitcoin",
        "ro": "Bitcoin",
        "hu": "Bitcoin",
        "nl": "Bitcoin",
        "pt": "Bitcoin",
        "sv": "Bitcoin",
        "vi": "Bitcoin",
        "tr": "Bitcoin",
        "ru": "биткоин",
        "ja": "ビットコイン",
        "zh": "比特币",
        "zh-tw": "比特幣",
        "ko": "비트코인",
        "ar": "بيتكوين",
        "th": "บิตคอยน์",
        "id": "Bitcoin"
    },
    "description": {
        "en": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "de": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "es": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "fr": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "it": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "pl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "ro": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "hu": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "nl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "pt": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "sv": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "vi": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "tr": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
        "ru": "",
        "ja": "",
        "zh": "",
        "zh-tw": "",
        "ko": "비트코인은 2009년 나카모토 사토시가 만든 디지털 통화로, 통화를 발행하고 관리하는 중앙 장치가 존재하지 않는 구조를 가지고 있다. 대신, 비트코인의 거래는 P2P 기반 분산 데이터베이스에 의해 이루어지며, 공개 키 암호 방식 기반으로 거래를 수행한다. 비트코인은 공개성을 가지고 있다. 비트코인은 지갑 파일의 형태로 저장되며, 이 지갑에는 각각의 고유 주소가 부여되며, 그 주소를 기반으로 비트코인의 거래가 이루어진다. 비트코인은 1998년 웨이따이가 사이버펑크 메일링 리스트에 올린 암호통화란 구상을 최초로 구현한 것 중의 하나이다.\r\n\r\n비트코인은 최초로 구현된 가상화폐입니다. 발행 및 유통을 관리하는 중앙권력이나 중간상인 없이, P2P 네트워크 기술을 이용하여 네트워크에 참여하는 사용자들이 주체적으로 화폐를 발행하고 이체내용을 공동으로 관리합니다. 이를 가능하게 한 블록체인 기술을 처음으로 코인에 도입한 것이 바로 비트코인입니다.\r\n\r\n비트코인을 사용하는 개인과 사업자의 수는 꾸준히 증가하고 있으며, 여기에는 식당, 아파트, 법률사무소, 온라인 서비스를 비롯한 소매상들이 포함됩니다. 비트코인은 새로운 사회 현상이지만 아주 빠르게 성장하고 있습니다. 이를 바탕으로 가치 증대는 물론, 매일 수백만 달러의 비트코인이 교환되고 있습니다. \r\n\r\n비트코인은 가상화폐 시장에서 현재 유통시가총액과 코인의 가치가 가장 크고, 거래량 또한 안정적입니다. 이더리움이 빠르게 추격하고 있지만 아직은 가장 견고한 가상화폐라고 볼 수 있습니다. \r\n\r\n코인 특징\r\n1. 중앙주체 없이 사용자들에 의해 거래내용이 관리될 수 있는 비트코인의 운영 시스템은 블록체인 기술에서 기인합니다. 블록체인은 쉽게 말해 다 같이 장부를 공유하고, 항상 서로의 컴퓨터에 있는 장부 파일을 비교함으로써 같은 내용만 인정하는 방식으로 운영됩니다. 따라서 전통적인 금융기관에서 장부에 대한 접근을 튼튼하게 방어하던 것과는 정반대의 작업을 통해 보안을 달성합니다. 장부를 해킹하려면 51%의 장부를 동시에 조작해야 하는데, 이는 사실상 불가능합니다. 왜냐하면, 이를 실행하기 위해서는 컴퓨팅 파워가 어마어마하게 소요되고, 이것이 가능한 슈퍼컴퓨터는 세상에 존재하지 않기 때문입니다. 또한, 장부의 자료들은 줄글로 기록되는 것이 아니라 암호화 해시 함수형태로 블록에 저장되고, 이 블록들은 서로 연결되어 있어서 더 강력한 보안을 제공합니다. \r\n\r\n2. 비트코인은 블록발행보상을 채굴자에게 지급하는 방식으로 신규 코인을 발행합니다. 블록발행보상은 매 21만 블록(약 4년)을 기준으로 발행량이 절반으로 줄어듭니다. 처음에는 50비트코인씩 발행이 되었고, 4년마다 계속 반으로 감소하고 있습니다. 코인의 총량이 2,100만 개에 도달하면 신규 발행은 종료되고, 이후에는 거래 수수료만을 통해 시스템이 지탱될 것입니다. \r\n\r\n핵심 가치\r\n(키워드: 통화로 사용될 수 있는 보편성 및 편의성)\r\n\r\n1. 다양한 알트코인들의 등장에 앞서 비트코인은 가상화폐 시장에서 독보적이었기 때문에, 현재 가장 보편적인 결제수단으로 사용됩니다. 실생활에서 이를 활용할 수 있는 가맹점이 알트코인들보다 압도적으로 많을 뿐만 아니라, 이 또한 증가하고 있습니다. 일례로 일본 업체들이 비트코인 결제 시스템을 도입하면서 곧 비트코인을 오프라인 점포 26만 곳에서 이용할 수 있게 될 것입니다. \r\n\r\n2. 여러 나라에서 비트코인을 정식 결제 수단으로 인정하면서, 실물화폐와 가상화폐를 거래할 때 더는 부가가치세가 부과되지 않게 된다고 합니다. 실제로 일본과 호주에서는 이미 비트코인을 합법적 결제 수단으로 인정하면서 제도권 안으로 들여오고 있고, 미국에서는 비트코인 ETF 승인 노력도 진행되고 있습니다. 각국에 비트코인을 기반으로 한 ATM 기계도 설치되었다고 합니다. ",
        "ar": "",
        "th": "",
        "id": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>."
    },
    "links": {
        "homepage": [
            "http://www.bitcoin.org",
            "",
            ""
        ],
        "blockchain_site": [
            "https://blockchair.com/bitcoin/",
            "https://btc.com/",
            "https://btc.tokenview.com/",
            "",
            ""
        ],
        "official_forum_url": [
            "https://bitcointalk.org/",
            "",
            ""
        ],
        "chat_url": [
            "",
            "",
            ""
        ],
        "announcement_url": [
            "",
            ""
        ],
        "twitter_screen_name": "bitcoin",
        "facebook_username": "bitcoins",
        "bitcointalk_thread_identifier": null,
        "telegram_channel_identifier": "",
        "subreddit_url": "https://www.reddit.com/r/Bitcoin/",
        "repos_url": {
            "github": [
                "https://github.com/bitcoin/bitcoin",
                "https://github.com/bitcoin/bips"
            ],
            "bitbucket": []
        }
    },
    "image": {
        "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
        "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
        "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    },
    "country_origin": "",
    "genesis_date": "2009-01-03",
    "sentiment_votes_up_percentage": 54.7,
    "sentiment_votes_down_percentage": 45.3,
    "market_cap_rank": 1,
    "coingecko_rank": 1,
    "coingecko_score": 80.579,
    "developer_score": 98.877,
    "community_score": 71.987,
    "liquidity_score": 100.021,
    "public_interest_score": 0.365,
    "market_data": {
        "current_price": {
            "aed": 117060,
            "ars": 3036659,
            "aud": 42252,
            "bch": 68.263,
            "bdt": 2702457,
            "bhd": 12016.1,
            "bmd": 31869,
            "bnb": 113.659,
            "brl": 159808,
            "btc": 1.0,
            "cad": 39410,
            "chf": 29262,
            "clp": 23824967,
            "cny": 206091,
            "czk": 682036,
            "dkk": 198888,
            "dot": 2002,
            "eos": 8828,
            "eth": 16.61836,
            "eur": 26745,
            "gbp": 22878,
            "hkd": 247460,
            "huf": 9451181,
            "idr": 458790214,
            "ils": 104167,
            "inr": 2362594,
            "jpy": 3515985,
            "krw": 36059047,
            "kwd": 9604.31,
            "lkr": 6342228,
            "ltc": 249.896,
            "mmk": 52458808,
            "mxn": 653341,
            "myr": 132111,
            "ngn": 13098003,
            "nok": 273302,
            "nzd": 45575,
            "php": 1553079,
            "pkr": 5021875,
            "pln": 121101,
            "rub": 2330829,
            "sar": 119514,
            "sek": 271991,
            "sgd": 42793,
            "thb": 1007371,
            "try": 279937,
            "twd": 891126,
            "uah": 869051,
            "usd": 31869,
            "vef": 3191.0,
            "vnd": 732347034,
            "xag": 1227.42,
            "xau": 17.86,
            "xdr": 22354,
            "xlm": 130760,
            "xrp": 51140,
            "yfi": 1.062938,
            "zar": 453128,
            "bits": 1003576,
            "link": 1799,
            "sats": 100357648
        },
        "total_value_locked": null,
        "mcap_to_tvl_ratio": null,
        "fdv_to_tvl_ratio": null,
        "roi": null,
        "ath": {
            "aed": 238028,
            "ars": 6003192,
            "aud": 84381,
            "bch": 113.776,
            "bdt": 5493601,
            "bhd": 24433,
            "bmd": 64805,
            "bnb": 143062,
            "brl": 370557,
            "btc": 1.003301,
            "cad": 81381,
            "chf": 59803,
            "clp": 45888222,
            "cny": 423510,
            "czk": 1405977,
            "dkk": 403111,
            "dot": 5526,
            "eos": 15224,
            "eth": 624.203,
            "eur": 54205,
            "gbp": 47095,
            "hkd": 503309,
            "huf": 19455389,
            "idr": 947837108,
            "ils": 212949,
            "inr": 4868723,
            "jpy": 7058952,
            "krw": 72296468,
            "kwd": 19538.17,
            "lkr": 13058370,
            "ltc": 318.98,
            "mmk": 92661658,
            "mxn": 1303117,
            "myr": 267546,
            "ngn": 26604355,
            "nok": 546617,
            "nzd": 91285,
            "php": 3144705,
            "pkr": 9907525,
            "pln": 247078,
            "rub": 4907234,
            "sar": 243030,
            "sek": 550226,
            "sgd": 86666,
            "thb": 2036265,
            "try": 525937,
            "twd": 1844031,
            "uah": 1815814,
            "usd": 64805,
            "vef": 8618768857,
            "vnd": 1495234422,
            "xag": 2553.93,
            "xau": 37.14,
            "xdr": 45474,
            "xlm": 275874,
            "xrp": 159288,
            "yfi": 1.976674,
            "zar": 938527,
            "bits": 1058236,
            "link": 2874,
            "sats": 105823579
        },
        "ath_change_percentage": {
            "aed": -51.33261,
            "ars": -49.94039,
            "aud": -50.43158,
            "bch": -39.84329,
            "bdt": -51.31886,
            "bhd": -51.33654,
            "bmd": -51.33512,
            "bnb": -99.91974,
            "brl": -57.3203,
            "btc": -0.32896,
            "cad": -52.0594,
            "chf": -51.57021,
            "clp": -48.62047,
            "cny": -51.84355,
            "czk": -51.9735,
            "dkk": -51.1544,
            "dot": -63.65095,
            "eos": -41.97625,
            "eth": -97.3203,
            "eur": -51.15208,
            "gbp": -51.91779,
            "hkd": -51.34514,
            "huf": -51.91432,
            "idr": -52.09956,
            "ils": -51.59255,
            "inr": -51.97885,
            "jpy": -50.71009,
            "krw": -50.64129,
            "kwd": -51.35642,
            "lkr": -51.93688,
            "ltc": -21.47767,
            "mmk": -43.97557,
            "mxn": -50.3653,
            "myr": -51.11115,
            "ngn": -51.27954,
            "nok": -50.49096,
            "nzd": -50.56144,
            "php": -51.12309,
            "pkr": -49.83974,
            "pln": -51.47353,
            "rub": -52.98606,
            "sar": -51.33783,
            "sek": -51.06427,
            "sgd": -51.13294,
            "thb": -51.0394,
            "try": -47.33789,
            "twd": -52.17775,
            "uah": -52.6377,
            "usd": -51.33512,
            "vef": -99.99996,
            "vnd": -51.51956,
            "xag": -52.44644,
            "xau": -52.45947,
            "xdr": -51.35357,
            "xlm": -52.20312,
            "xrp": -68.10436,
            "yfi": -45.77103,
            "zar": -52.18636,
            "bits": -5.7045,
            "link": -36.69357,
            "sats": -5.7045
        },
        "ath_date": {
            "aed": "2021-04-14T11:54:46.763Z",
            "ars": "2021-04-14T11:54:46.763Z",
            "aud": "2021-04-14T06:52:46.198Z",
            "bch": "2021-03-25T02:09:22.587Z",
            "bdt": "2021-04-14T06:52:46.198Z",
            "bhd": "2021-04-14T11:54:46.763Z",
            "bmd": "2021-04-14T11:54:46.763Z",
            "bnb": "2017-10-19T00:00:00.000Z",
            "brl": "2021-04-14T11:54:46.763Z",
            "btc": "2019-10-15T16:00:56.136Z",
            "cad": "2021-04-14T11:54:46.763Z",
            "chf": "2021-04-14T11:54:46.763Z",
            "clp": "2021-04-14T11:54:46.763Z",
            "cny": "2021-04-14T06:52:46.198Z",
            "czk": "2021-04-14T11:54:46.763Z",
            "dkk": "2021-04-14T11:54:46.763Z",
            "dot": "2020-12-27T11:42:47.567Z",
            "eos": "2021-03-13T01:53:26.538Z",
            "eth": "2015-10-20T00:00:00.000Z",
            "eur": "2021-04-14T11:54:46.763Z",
            "gbp": "2021-04-14T11:54:46.763Z",
            "hkd": "2021-04-14T11:54:46.763Z",
            "huf": "2021-04-14T06:52:46.198Z",
            "idr": "2021-04-14T11:54:46.763Z",
            "ils": "2021-04-14T11:54:46.763Z",
            "inr": "2021-04-14T11:54:46.763Z",
            "jpy": "2021-04-14T11:54:46.763Z",
            "krw": "2021-04-14T06:52:46.198Z",
            "kwd": "2021-04-14T11:54:46.763Z",
            "lkr": "2021-04-14T11:54:46.763Z",
            "ltc": "2017-03-05T00:00:00.000Z",
            "mmk": "2021-05-08T13:44:31.031Z",
            "mxn": "2021-04-14T11:54:46.763Z",
            "myr": "2021-04-14T11:54:46.763Z",
            "ngn": "2021-04-14T11:54:46.763Z",
            "nok": "2021-04-14T06:52:46.198Z",
            "nzd": "2021-04-14T06:52:46.198Z",
            "php": "2021-04-14T11:54:46.763Z",
            "pkr": "2021-04-14T06:52:46.198Z",
            "pln": "2021-04-14T06:52:46.198Z",
            "rub": "2021-04-14T11:54:46.763Z",
            "sar": "2021-04-14T11:54:46.763Z",
            "sek": "2021-04-14T06:52:46.198Z",
            "sgd": "2021-04-14T11:54:46.763Z",
            "thb": "2021-04-14T06:52:46.198Z",
            "try": "2021-04-14T06:52:46.198Z",
            "twd": "2021-04-14T11:54:46.763Z",
            "uah": "2021-04-14T06:52:46.198Z",
            "usd": "2021-04-14T11:54:46.763Z",
            "vef": "2021-01-03T12:04:17.372Z",
            "vnd": "2021-04-14T11:54:46.763Z",
            "xag": "2021-04-14T11:54:46.763Z",
            "xau": "2021-04-14T11:54:46.763Z",
            "xdr": "2021-04-14T11:54:46.763Z",
            "xlm": "2021-01-03T07:50:39.913Z",
            "xrp": "2021-01-03T07:54:40.240Z",
            "yfi": "2020-11-05T13:29:25.560Z",
            "zar": "2021-04-14T06:52:46.198Z",
            "bits": "2021-05-19T16:00:11.072Z",
            "link": "2021-01-03T07:43:41.985Z",
            "sats": "2021-05-19T16:00:11.072Z"
        },
        "atl": {
            "aed": 632.31,
            "ars": 1478.98,
            "aud": 72.61,
            "bch": 3.513889,
            "bdt": 9390.25,
            "bhd": 45.91,
            "bmd": 121.77,
            "bnb": 81.254,
            "brl": 149.66,
            "btc": 0.99895134,
            "cad": 69.81,
            "chf": 63.26,
            "clp": 107408,
            "cny": 407.23,
            "czk": 4101.56,
            "dkk": 382.47,
            "dot": 991.882,
            "eos": 908.141,
            "eth": 6.779735,
            "eur": 51.3,
            "gbp": 43.9,
            "hkd": 514.37,
            "huf": 46598,
            "idr": 658780,
            "ils": 672.18,
            "inr": 3993.42,
            "jpy": 6641.83,
            "krw": 75594,
            "kwd": 50.61,
            "lkr": 22646,
            "ltc": 20.707835,
            "mmk": 117588,
            "mxn": 859.32,
            "myr": 211.18,
            "ngn": 4289706,
            "nok": 1316.03,
            "nzd": 84.85,
            "php": 2880.5,
            "pkr": 17315.84,
            "pln": 220.11,
            "rub": 2206.43,
            "sar": 646.04,
            "sek": 443.81,
            "sgd": 84.47,
            "thb": 5644.35,
            "try": 392.91,
            "twd": 1998.66,
            "uah": 553.37,
            "usd": 67.81,
            "vef": 766.19,
            "vnd": 3672339,
            "xag": 3.37,
            "xau": 0.0531,
            "xdr": 44.39,
            "xlm": 21608,
            "xrp": 9908,
            "yfi": 0.23958075,
            "zar": 666.26,
            "bits": 950993,
            "link": 598.477,
            "sats": 95099268
        },
        "atl_change_percentage": {
            "aed": 18220.36318,
            "ars": 203092.73837,
            "aud": 57504.73098,
            "bch": 1847.80248,
            "bdt": 28380.03326,
            "bhd": 25796.67529,
            "bmd": 25798.94201,
            "bnb": 41.31147,
            "brl": 105575.56012,
            "btc": 0.10498,
            "cad": 55789.40901,
            "chf": 45682.52158,
            "clp": 21850.97963,
            "cny": 49982.23742,
            "czk": 16363.05482,
            "dkk": 51382.07249,
            "dot": 102.51007,
            "eos": 872.71834,
            "eth": 146.71742,
            "eur": 51515.61561,
            "gbp": 51478.52967,
            "hkd": 47508.14114,
            "huf": 19976.50053,
            "idr": 68818.02565,
            "ils": 15235.56968,
            "inr": 58446.73846,
            "jpy": 52285.4108,
            "krw": 47105.72536,
            "kwd": 18678.66652,
            "lkr": 27614.28715,
            "ltc": 1109.54409,
            "mmk": 44048.36664,
            "mxn": 75168.76154,
            "myr": 61838.99646,
            "ngn": 202.15975,
            "nok": 20463.7705,
            "nzd": 53085.39105,
            "php": 53259.94311,
            "pkr": 28599.96169,
            "pln": 54371.58792,
            "rub": 104461.69424,
            "sar": 18205.94057,
            "sek": 60570.08524,
            "sgd": 50040.14869,
            "thb": 17563.11261,
            "try": 70392.01627,
            "twd": 44022.52822,
            "uah": 155314.0222,
            "usd": 46408.78451,
            "vef": 312.1453,
            "vnd": 19639.35818,
            "xag": 35941.36467,
            "xau": 33148.81857,
            "xdr": 49732.72481,
            "xlm": 510.22506,
            "xrp": 412.77798,
            "yfi": 347.419,
            "zar": 67252.20295,
            "bits": 4.92917,
            "link": 204.01312,
            "sats": 4.92917
        },
        "atl_date": {
            "aed": "2015-01-14T00:00:00.000Z",
            "ars": "2015-01-14T00:00:00.000Z",
            "aud": "2013-07-05T00:00:00.000Z",
            "bch": "2017-08-02T00:00:00.000Z",
            "bdt": "2013-09-08T00:00:00.000Z",
            "bhd": "2013-09-08T00:00:00.000Z",
            "bmd": "2013-09-08T00:00:00.000Z",
            "bnb": "2021-05-13T07:09:55.887Z",
            "brl": "2013-07-05T00:00:00.000Z",
            "btc": "2019-10-21T00:00:00.000Z",
            "cad": "2013-07-05T00:00:00.000Z",
            "chf": "2013-07-05T00:00:00.000Z",
            "clp": "2015-01-14T00:00:00.000Z",
            "cny": "2013-07-05T00:00:00.000Z",
            "czk": "2015-01-14T00:00:00.000Z",
            "dkk": "2013-07-05T00:00:00.000Z",
            "dot": "2021-05-19T11:04:48.978Z",
            "eos": "2019-04-11T00:00:00.000Z",
            "eth": "2017-06-12T00:00:00.000Z",
            "eur": "2013-07-05T00:00:00.000Z",
            "gbp": "2013-07-05T00:00:00.000Z",
            "hkd": "2013-07-05T00:00:00.000Z",
            "huf": "2015-01-14T00:00:00.000Z",
            "idr": "2013-07-05T00:00:00.000Z",
            "ils": "2015-01-14T00:00:00.000Z",
            "inr": "2013-07-05T00:00:00.000Z",
            "jpy": "2013-07-05T00:00:00.000Z",
            "krw": "2013-07-05T00:00:00.000Z",
            "kwd": "2015-01-14T00:00:00.000Z",
            "lkr": "2015-01-14T00:00:00.000Z",
            "ltc": "2013-11-28T00:00:00.000Z",
            "mmk": "2013-09-08T00:00:00.000Z",
            "mxn": "2013-07-05T00:00:00.000Z",
            "myr": "2013-07-05T00:00:00.000Z",
            "ngn": "2020-10-15T09:39:31.080Z",
            "nok": "2015-01-14T00:00:00.000Z",
            "nzd": "2013-07-05T00:00:00.000Z",
            "php": "2013-07-05T00:00:00.000Z",
            "pkr": "2015-01-14T00:00:00.000Z",
            "pln": "2013-07-05T00:00:00.000Z",
            "rub": "2013-07-05T00:00:00.000Z",
            "sar": "2015-01-14T00:00:00.000Z",
            "sek": "2013-07-05T00:00:00.000Z",
            "sgd": "2013-07-05T00:00:00.000Z",
            "thb": "2015-01-14T00:00:00.000Z",
            "try": "2015-01-14T00:00:00.000Z",
            "twd": "2013-07-05T00:00:00.000Z",
            "uah": "2013-07-06T00:00:00.000Z",
            "usd": "2013-07-06T00:00:00.000Z",
            "vef": "2013-09-08T00:00:00.000Z",
            "vnd": "2015-01-14T00:00:00.000Z",
            "xag": "2013-07-05T00:00:00.000Z",
            "xau": "2013-07-05T00:00:00.000Z",
            "xdr": "2013-07-05T00:00:00.000Z",
            "xlm": "2018-11-20T00:00:00.000Z",
            "xrp": "2018-12-25T00:00:00.000Z",
            "yfi": "2020-09-12T20:09:36.122Z",
            "zar": "2013-07-05T00:00:00.000Z",
            "bits": "2021-05-19T13:14:13.071Z",
            "link": "2020-08-16T08:13:13.338Z",
            "sats": "2021-05-19T13:14:13.071Z"
        },
        "market_cap": {
            "aed": 2185431686539,
            "ars": 56699136682953,
            "aud": 788975822883,
            "bch": 1278618415,
            "bdt": 50453138771735,
            "bhd": 224311965788,
            "bmd": 594966701116,
            "bnb": 2129690723,
            "brl": 2983519424450,
            "btc": 18740218,
            "cad": 735948225712,
            "chf": 546520347544,
            "clp": 444796838019311,
            "cny": 3847590159447,
            "czk": 12737820594203,
            "dkk": 3714198625057,
            "dot": 37558028658,
            "eos": 165448780628,
            "eth": 311918398,
            "eur": 499447177119,
            "gbp": 427234283704,
            "hkd": 4619910484499,
            "huf": 176487947385547,
            "idr": 8565319119276377,
            "ils": 1944726008269,
            "inr": 44108121742384,
            "jpy": 65639106333922,
            "krw": 673172318091948,
            "kwd": 179299760015,
            "lkr": 118405329277788,
            "ltc": 4683170681,
            "mmk": 979372306840256,
            "mxn": 12202112576518,
            "myr": 2466434459476,
            "ngn": 244531314158679,
            "nok": 5104400198751,
            "nzd": 851046913910,
            "php": 28993651923637,
            "pkr": 93755190107980,
            "pln": 2261407744338,
            "rub": 43515210056254,
            "sar": 2231109660051,
            "sek": 5079187294858,
            "sgd": 799099776269,
            "thb": 18807436462108,
            "try": 5225042191703,
            "twd": 16636755784990,
            "uah": 16224618186360,
            "usd": 594966701116,
            "vef": 59574015783,
            "vnd": 13675592873328702,
            "xag": 22927000180,
            "xau": 333353893,
            "xdr": 417334037798,
            "xlm": 2457318949336,
            "xrp": 958157747133,
            "yfi": 19933391,
            "zar": 8460726353087,
            "bits": 18784598002543,
            "link": 33783743848,
            "sats": 1878459800254256
        },
        "market_cap_rank": 1,
        "fully_diluted_valuation": {
            "aed": 2448961128271,
            "ars": 63536180333762,
            "aud": 884114169885,
            "bch": 1432800126,
            "bdt": 56537011159979,
            "bhd": 251360538151,
            "bmd": 666710532580,
            "bnb": 2386498662,
            "brl": 3343285969963,
            "btc": 21000000,
            "cad": 824692260248,
            "chf": 612422294043,
            "clp": 498432494136703,
            "cny": 4311550343138,
            "czk": 14273805805155,
            "dkk": 4162073841734,
            "dot": 42086949139,
            "eos": 185399358384,
            "eth": 349530958,
            "eur": 559672823416,
            "gbp": 478752165945,
            "hkd": 5177000618375,
            "huf": 197769678831724,
            "idr": 9598164840174426,
            "ils": 2179230048105,
            "inr": 49426882685680,
            "jpy": 73554172796302,
            "krw": 754346543883903,
            "kwd": 200920552809,
            "lkr": 132683190496159,
            "ltc": 5247889021,
            "mmk": 1097469540837005,
            "mxn": 13673499641620,
            "myr": 2763848512808,
            "ngn": 274018028890179,
            "nok": 5719912339002,
            "nzd": 953670079618,
            "php": 32489840320767,
            "pkr": 105060623748751,
            "pln": 2534098729860,
            "rub": 48762474971280,
            "sar": 2500147162699,
            "sek": 5691659146762,
            "sgd": 895458916308,
            "thb": 21075323974581,
            "try": 5855101900403,
            "twd": 18642892600544,
            "uah": 18181057547653,
            "usd": 666710532580,
            "vef": 66757725627,
            "vnd": 15324658994890174,
            "xag": 25691643703,
            "xau": 373551244,
            "xdr": 467658102683,
            "xlm": 2753633812374,
            "xrp": 1073696831584,
            "yfi": 22337051,
            "zar": 9480959795389,
            "bits": 21049731548128,
            "link": 37857543643,
            "sats": 2104973154812787
        },
        "total_volume": {
            "aed": 190417425337,
            "ars": 4939634957155,
            "aud": 68729171775,
            "bch": 111041820,
            "bdt": 4395999584095,
            "bhd": 19546194229,
            "bmd": 51839656250,
            "bnb": 184884642,
            "brl": 259955140231,
            "btc": 1632485,
            "cad": 64107510901,
            "chf": 47599638926,
            "clp": 38755304721386,
            "cny": 335241873003,
            "czk": 1109446144034,
            "dkk": 323524866538,
            "dot": 3257120498,
            "eos": 14359619826,
            "eth": 27032550,
            "eur": 43504979997,
            "gbp": 37215430024,
            "hkd": 402534930781,
            "huf": 15373931335069,
            "idr": 746299243270682,
            "ils": 169444655608,
            "inr": 3843156036574,
            "jpy": 5719339674913,
            "krw": 58656088782459,
            "kwd": 15623020883,
            "lkr": 10316697651155,
            "ltc": 406497653,
            "mmk": 85333050794364,
            "mxn": 1062768110518,
            "myr": 214901294984,
            "ngn": 21306098718716,
            "nok": 444570774920,
            "nzd": 74136099762,
            "php": 2526342765837,
            "pkr": 8168922424947,
            "pln": 196991782382,
            "rub": 3791485066566,
            "sar": 194409597265,
            "sek": 442439231934,
            "sgd": 69610290412,
            "thb": 1638657443781,
            "try": 455364724465,
            "twd": 1449566336049,
            "uah": 1413656643287,
            "usd": 51839656250,
            "vef": 5190704780,
            "vnd": 1191285297486088,
            "xag": 1996597621,
            "xau": 29050425,
            "xdr": 36362460320,
            "xlm": 212703519232,
            "xrp": 83187640771,
            "yfi": 1729047,
            "zar": 737089306262,
            "bits": 1632485483092,
            "link": 2926529850,
            "sats": 163248548309238
        },
        "high_24h": {
            "aed": 131445,
            "ars": 3410317,
            "aud": 47695,
            "bch": 68.53,
            "bdt": 3033451,
            "bhd": 13489.33,
            "bmd": 35787,
            "bnb": 114.871,
            "brl": 182384,
            "btc": 1.0,
            "cad": 44548,
            "chf": 33015,
            "clp": 26790232,
            "cny": 230938,
            "czk": 770975,
            "dkk": 224156,
            "dot": 2013,
            "eos": 8839,
            "eth": 16.839873,
            "eur": 30145,
            "gbp": 25897,
            "hkd": 277878,
            "huf": 10721448,
            "idr": 517473470,
            "ils": 117332,
            "inr": 2653402,
            "jpy": 3943635,
            "krw": 40627255,
            "kwd": 10783.0,
            "lkr": 7127125,
            "ltc": 250.97,
            "mmk": 59023058,
            "mxn": 738423,
            "myr": 148209,
            "ngn": 14690595,
            "nok": 310130,
            "nzd": 51507,
            "php": 1734589,
            "pkr": 5641446,
            "pln": 137241,
            "rub": 2606448,
            "sar": 134202,
            "sek": 308014,
            "sgd": 48133,
            "thb": 1126947,
            "try": 313645,
            "twd": 994738,
            "uah": 975100,
            "usd": 35787,
            "vef": 3583.36,
            "vnd": 826093800,
            "xag": 1381.74,
            "xau": 20.23,
            "xdr": 25046,
            "xlm": 132214,
            "xrp": 51364,
            "yfi": 1.080805,
            "zar": 513213,
            "bits": 1010999,
            "link": 1827,
            "sats": 101099851
        },
        "low_24h": {
            "aed": 115507,
            "ars": 2996433,
            "aud": 41708,
            "bch": 63.719,
            "bdt": 2666608,
            "bhd": 11856.19,
            "bmd": 31446,
            "bnb": 103.381,
            "brl": 157688,
            "btc": 1.0,
            "cad": 38905,
            "chf": 28879,
            "clp": 23508917,
            "cny": 203357,
            "czk": 673422,
            "dkk": 196320,
            "dot": 1716,
            "eos": 7890,
            "eth": 15.83453,
            "eur": 26399,
            "gbp": 22574,
            "hkd": 244172,
            "huf": 9329675,
            "idr": 452704154,
            "ils": 102785,
            "inr": 2331250,
            "jpy": 3469611,
            "krw": 35581582,
            "kwd": 9476.24,
            "lkr": 6258095,
            "ltc": 229.599,
            "mmk": 51762918,
            "mxn": 644879,
            "myr": 130422,
            "ngn": 12924252,
            "nok": 269818,
            "nzd": 44989,
            "php": 1532681,
            "pkr": 4955258,
            "pln": 119537,
            "rub": 2299432,
            "sar": 117924,
            "sek": 268435,
            "sgd": 42229,
            "thb": 994153,
            "try": 276189,
            "twd": 879305,
            "uah": 857522,
            "usd": 31446,
            "vef": 3148.67,
            "vnd": 722798254,
            "xag": 1210.41,
            "xau": 17.61,
            "xdr": 22057,
            "xlm": 118420,
            "xrp": 45830,
            "yfi": 0.98611717,
            "zar": 447360,
            "bits": 987495,
            "link": 1637,
            "sats": 98749542
        },
        "price_change_24h": -3851.7055269183,
        "price_change_percentage_24h": -10.78295,
        "price_change_percentage_7d": -18.5939,
        "price_change_percentage_14d": -11.06715,
        "price_change_percentage_30d": -14.65203,
        "price_change_percentage_60d": -41.19103,
        "price_change_percentage_200d": 65.90983,
        "price_change_percentage_1y": 240.46769,
        "market_cap_change_24h": -76014209671.115,
        "market_cap_change_percentage_24h": -11.32882,
        "price_change_24h_in_currency": {
            "aed": -14140.297710506276,
            "ars": -366938.1094861525,
            "aud": -5341.285281575845,
            "bch": 4.282341,
            "bdt": -325335.84672162076,
            "bhd": -1448.074422215119,
            "bmd": -3851.7055269183,
            "bnb": 8.462273,
            "brl": -22015.219146948773,
            "btc": 0.0,
            "cad": -5041.151492976867,
            "chf": -3681.659481578121,
            "clp": -2915295.3711414747,
            "cny": -24415.653979422674,
            "czk": -87567.23197541689,
            "dkk": -24815.005103400064,
            "dot": 286.399,
            "eos": 934.27,
            "eth": 0.77578258,
            "eur": -3337.703815110577,
            "gbp": -2962.832141172512,
            "hkd": -29892.419270023005,
            "huf": -1249556.8906315565,
            "idr": -54690332.63244057,
            "ils": -12946.789170008997,
            "inr": -285858.38816845,
            "jpy": -420180.37806001445,
            "krw": -4492427.815551899,
            "kwd": -1158.58153787427,
            "lkr": -758346.4028012892,
            "ltc": 20.282649,
            "mmk": -6346488.89709226,
            "mxn": -83421.10085747275,
            "myr": -15735.063145758208,
            "ngn": -1565190.8087879382,
            "nok": -36185.412479530205,
            "nzd": -5815.534280607667,
            "php": -178027.48842665274,
            "pkr": -591588.7356520463,
            "pln": -15859.983038231063,
            "rub": -266304.9518732326,
            "sar": -14437.239036064117,
            "sek": -35428.90120032104,
            "sgd": -5231.330201635275,
            "thb": -116578.58304260753,
            "try": -33072.56638150936,
            "twd": -101755.91346081428,
            "uah": -102449.27131636604,
            "usd": -3851.7055269183,
            "vef": -385.671274410339,
            "vnd": -92015562.3843745,
            "xag": -150.36256400862,
            "xau": -2.329914822875,
            "xdr": -2644.841697904151,
            "xlm": 11321,
            "xrp": 5182,
            "yfi": 0.07682094,
            "zar": -59016.97535271308,
            "bits": 3681.32,
            "link": 159.644,
            "sats": 368132
        },
        "price_change_percentage_1h_in_currency": {
            "aed": -0.44099,
            "ars": -0.4318,
            "aud": -0.42334,
            "bch": 1.87738,
            "bdt": -0.44099,
            "bhd": -0.42383,
            "bmd": -0.44099,
            "bnb": 1.45055,
            "brl": -0.43504,
            "btc": 0.0,
            "cad": -0.42489,
            "chf": -0.40173,
            "clp": -0.44105,
            "cny": -0.44099,
            "czk": -0.45776,
            "dkk": -0.41904,
            "dot": 2.36042,
            "eos": 1.71986,
            "eth": -0.92929,
            "eur": -0.42094,
            "gbp": -0.41686,
            "hkd": -0.44035,
            "huf": -0.39196,
            "idr": -0.44099,
            "ils": -0.44099,
            "inr": -0.44085,
            "jpy": -0.3957,
            "krw": -0.44617,
            "kwd": -0.42778,
            "lkr": -0.44099,
            "ltc": 1.44519,
            "mmk": -0.44099,
            "mxn": -0.41805,
            "myr": -0.489,
            "ngn": -0.44099,
            "nok": -0.46662,
            "nzd": -0.44169,
            "php": -0.41167,
            "pkr": -0.44099,
            "pln": -0.4049,
            "rub": -0.43051,
            "sar": -0.44251,
            "sek": -0.43481,
            "sgd": -0.38016,
            "thb": -0.53346,
            "try": -0.43136,
            "twd": -0.44064,
            "uah": -0.44099,
            "usd": -0.44099,
            "vef": -0.44099,
            "vnd": -0.39523,
            "xag": -0.30684,
            "xau": -0.33428,
            "xdr": -0.44099,
            "xlm": 1.69474,
            "xrp": 2.41205,
            "yfi": -0.19505,
            "zar": -0.51629,
            "bits": 0.10882,
            "link": 0.5291,
            "sats": 0.10882
        },
        "price_change_percentage_24h_in_currency": {
            "aed": -10.77766,
            "ars": -10.78089,
            "aud": -11.22289,
            "bch": 6.69314,
            "bdt": -10.74498,
            "bhd": -10.75502,
            "bmd": -10.78295,
            "bnb": 8.04427,
            "brl": -12.10801,
            "btc": 0.0,
            "cad": -11.3408,
            "chf": -11.17561,
            "clp": -10.90227,
            "cny": -10.59216,
            "czk": -11.37823,
            "dkk": -11.09283,
            "dot": 16.69061,
            "eos": 11.83616,
            "eth": 4.89682,
            "eur": -11.09515,
            "gbp": -11.46556,
            "hkd": -10.77778,
            "huf": -11.6773,
            "idr": -10.65091,
            "ils": -11.05491,
            "inr": -10.79341,
            "jpy": -10.67487,
            "krw": -11.07833,
            "kwd": -10.76459,
            "lkr": -10.68007,
            "ltc": 8.8334,
            "mmk": -10.79238,
            "mxn": -11.32267,
            "myr": -10.64284,
            "ngn": -10.67428,
            "nok": -11.69206,
            "nzd": -11.31626,
            "php": -10.28403,
            "pkr": -10.53875,
            "pln": -11.57989,
            "rub": -10.2538,
            "sar": -10.77798,
            "sek": -11.52459,
            "sgd": -10.89304,
            "thb": -10.37223,
            "try": -10.56599,
            "twd": -10.24854,
            "uah": -10.54547,
            "usd": -10.78295,
            "vef": -10.78295,
            "vnd": -11.16203,
            "xag": -10.91341,
            "xau": -11.54065,
            "xdr": -10.57988,
            "xlm": 9.47857,
            "xrp": 11.27657,
            "yfi": 7.79024,
            "zar": -11.52348,
            "bits": 0.36817,
            "link": 9.73766,
            "sats": 0.36817
        },
        "price_change_percentage_7d_in_currency": {
            "aed": -18.5894,
            "ars": -18.45621,
            "aud": -16.80872,
            "bch": 7.09546,
            "bdt": -18.66579,
            "bhd": -18.56366,
            "bmd": -18.5939,
            "bnb": 6.32219,
            "brl": -20.21206,
            "btc": 0.0,
            "cad": -17.20262,
            "chf": -16.75003,
            "clp": -15.7076,
            "cny": -17.72624,
            "czk": -16.98652,
            "dkk": -17.26552,
            "dot": 12.9374,
            "eos": 14.96529,
            "eth": 6.85461,
            "eur": -17.27058,
            "gbp": -17.4923,
            "hkd": -18.55981,
            "huf": -16.0616,
            "idr": -17.40582,
            "ils": -18.2098,
            "inr": -17.58945,
            "jpy": -18.13198,
            "krw": -17.50467,
            "kwd": -18.40166,
            "lkr": -18.24531,
            "ltc": 9.35316,
            "mmk": -18.65628,
            "mxn": -16.0389,
            "myr": -17.95065,
            "ngn": -18.79149,
            "nok": -16.39072,
            "nzd": -16.88369,
            "php": -16.95375,
            "pkr": -17.74908,
            "pln": -16.72592,
            "rub": -17.4169,
            "sar": -18.59585,
            "sek": -16.48716,
            "sgd": -17.54479,
            "thb": -17.18513,
            "try": -14.75277,
            "twd": -17.69171,
            "uah": -17.91133,
            "usd": -18.5939,
            "vef": -18.5939,
            "vnd": -18.74305,
            "xag": -12.66752,
            "xau": -14.50201,
            "xdr": -17.68383,
            "xlm": 15.54469,
            "xrp": 15.7324,
            "yfi": 5.03237,
            "zar": -15.64414,
            "bits": 0.07531,
            "link": 7.50394,
            "sats": 0.07531
        },
        "price_change_percentage_14d_in_currency": {
            "aed": -11.0617,
            "ars": -10.59595,
            "aud": -8.71564,
            "bch": 24.79027,
            "bdt": -10.90245,
            "bhd": -11.05913,
            "bmd": -11.06715,
            "bnb": 24.3451,
            "brl": -11.69755,
            "btc": 0.0,
            "cad": -8.92703,
            "chf": -9.18621,
            "clp": -7.43939,
            "cny": -10.07148,
            "czk": -8.91054,
            "dkk": -9.20085,
            "dot": 34.86115,
            "eos": 43.99541,
            "eth": 25.80179,
            "eur": -9.19196,
            "gbp": -9.5835,
            "hkd": -10.97721,
            "huf": -7.22658,
            "idr": -10.43694,
            "ils": -10.58066,
            "inr": -9.57233,
            "jpy": -10.49398,
            "krw": -9.40083,
            "kwd": -10.85654,
            "lkr": -10.59501,
            "ltc": 22.90436,
            "mmk": -11.04418,
            "mxn": -8.64277,
            "myr": -10.69013,
            "ngn": -11.40128,
            "nok": -8.19191,
            "nzd": -8.31362,
            "php": -9.10881,
            "pkr": -9.29392,
            "pln": -7.6835,
            "rub": -10.80532,
            "sar": -11.06454,
            "sek": -8.3046,
            "sgd": -9.82921,
            "thb": -9.69555,
            "try": -9.97604,
            "twd": -9.73886,
            "uah": -10.99544,
            "usd": -11.06715,
            "vef": -11.06715,
            "vnd": -10.88259,
            "xag": -4.93939,
            "xau": -5.8185,
            "xdr": -10.09743,
            "xlm": 39.65142,
            "xrp": 34.39221,
            "yfi": 27.71162,
            "zar": -5.839,
            "bits": 0.19724,
            "link": 37.8765,
            "sats": 0.19724
        },
        "price_change_percentage_30d_in_currency": {
            "aed": -14.64971,
            "ars": -13.66655,
            "aud": -12.55076,
            "bch": 24.93961,
            "bdt": -14.68568,
            "bhd": -14.63437,
            "bmd": -14.65203,
            "bnb": -2.04421,
            "brl": -20.25156,
            "btc": 0.0,
            "cad": -12.55183,
            "chf": -12.73268,
            "clp": -11.50343,
            "cny": -14.21827,
            "czk": -12.58675,
            "dkk": -12.74655,
            "dot": 29.81524,
            "eos": 30.35855,
            "eth": 7.67084,
            "eur": -12.75965,
            "gbp": -13.28909,
            "hkd": -14.63939,
            "huf": -11.54502,
            "idr": -14.48214,
            "ils": -14.31623,
            "inr": -13.22396,
            "jpy": -13.58483,
            "krw": -14.37197,
            "kwd": -14.41775,
            "lkr": -13.79919,
            "ltc": 19.7595,
            "mmk": -14.66552,
            "mxn": -12.31233,
            "myr": -14.55928,
            "ngn": -14.96239,
            "nok": -12.83003,
            "nzd": -12.44488,
            "php": -13.20032,
            "pkr": -12.35463,
            "pln": -12.15526,
            "rub": -15.213,
            "sar": -14.64889,
            "sek": -12.5583,
            "sgd": -13.97552,
            "thb": -13.97043,
            "try": -10.93706,
            "twd": -14.65753,
            "uah": -15.15436,
            "usd": -14.65203,
            "vef": -14.65203,
            "vnd": -15.20018,
            "xag": -9.4058,
            "xau": -9.98918,
            "xdr": -13.51999,
            "xlm": 45.99732,
            "xrp": 36.80335,
            "yfi": 23.9847,
            "zar": -13.03963,
            "bits": -0.17501,
            "link": 22.46028,
            "sats": -0.17501
        },
        "price_change_percentage_60d_in_currency": {
            "aed": -41.19103,
            "ars": -39.70827,
            "aud": -39.51898,
            "bch": 15.25747,
            "bdt": -41.18908,
            "bhd": -41.18542,
            "bmd": -41.19103,
            "bnb": 15.52285,
            "brl": -47.04933,
            "btc": 0.0,
            "cad": -41.82768,
            "chf": -41.09082,
            "clp": -37.03012,
            "cny": -41.40938,
            "czk": -41.41224,
            "dkk": -40.58866,
            "dot": 25.72733,
            "eos": 3.9008,
            "eth": -27.34452,
            "eur": -40.58772,
            "gbp": -41.17842,
            "hkd": -41.1788,
            "huf": -42.07254,
            "idr": -41.65347,
            "ils": -41.16737,
            "inr": -42.20015,
            "jpy": -39.93523,
            "krw": -40.3886,
            "kwd": -41.15393,
            "lkr": -39.04492,
            "ltc": 19.53523,
            "mmk": -31.34539,
            "mxn": -39.4079,
            "myr": -40.84141,
            "ngn": -36.47704,
            "nok": -39.53559,
            "nzd": -39.39545,
            "php": -40.815,
            "pkr": -39.53071,
            "pln": -40.96666,
            "rub": -43.84695,
            "sar": -41.20549,
            "sek": -40.28309,
            "sgd": -40.55354,
            "thb": -40.65955,
            "try": -36.99217,
            "twd": -41.25931,
            "uah": -42.7431,
            "usd": -41.19103,
            "vef": -41.19103,
            "vnd": -41.28526,
            "xag": -39.90057,
            "xau": -40.86708,
            "xdr": -40.8462,
            "xlm": 18.98818,
            "xrp": 23.41433,
            "yfi": -10.39688,
            "zar": -41.31223,
            "bits": 0.16869,
            "link": 21.0723,
            "sats": 0.16869
        },
        "price_change_percentage_200d_in_currency": {
            "aed": 65.91886,
            "ars": 93.99161,
            "aud": 63.08107,
            "bch": 4.49,
            "bdt": 65.84173,
            "bhd": 65.93843,
            "bmd": 65.90983,
            "bnb": -82.07937,
            "brl": 59.44564,
            "btc": 0.0,
            "cad": 58.81937,
            "chf": 70.26696,
            "clp": 64.06618,
            "cny": 63.4705,
            "czk": 62.89865,
            "dkk": 68.48853,
            "dot": -42.88376,
            "eos": 40.71784,
            "eth": -48.19702,
            "eur": 68.68812,
            "gbp": 59.21303,
            "hkd": 66.18484,
            "huf": 65.74328,
            "idr": 69.4749,
            "ils": 64.85973,
            "inr": 66.97378,
            "jpy": 75.22224,
            "krw": 70.60029,
            "kwd": 63.7216,
            "lkr": 77.67164,
            "ltc": 15.85895,
            "mmk": 106.33033,
            "mxn": 70.06811,
            "myr": 68.71806,
            "ngn": 79.03993,
            "nok": 61.73397,
            "nzd": 67.73187,
            "php": 68.26798,
            "pkr": 63.18758,
            "pln": 70.62174,
            "rub": 61.51781,
            "sar": 65.8905,
            "sek": 67.21834,
            "sgd": 66.50004,
            "thb": 73.5748,
            "try": 85.58112,
            "twd": 63.04169,
            "uah": 59.10045,
            "usd": 65.90983,
            "vef": -99.99993,
            "vnd": 65.68212,
            "xag": 53.62815,
            "xau": 70.16089,
            "xdr": 66.43492,
            "xlm": 26.47601,
            "xrp": 68.24879,
            "yfi": 69.13252,
            "zar": 54.28391,
            "bits": 0.35765,
            "link": 31.01898,
            "sats": 0.35765
        },
        "price_change_percentage_1y_in_currency": {
            "aed": 240.49086,
            "ars": 365.16723,
            "aud": 208.5227,
            "bch": 69.6606,
            "bdt": 240.03599,
            "bhd": 240.52368,
            "bmd": 240.46769,
            "bnb": -80.50736,
            "brl": 221.43819,
            "btc": 0.0,
            "cad": 209.37849,
            "chf": 228.27425,
            "clp": 211.43284,
            "cny": 211.32312,
            "czk": 205.515,
            "dkk": 218.51546,
            "eos": 139.03601,
            "eth": -59.36657,
            "eur": 219.36832,
            "gbp": 201.83066,
            "hkd": 241.10597,
            "huf": 226.18795,
            "idr": 244.13221,
            "ils": 222.62974,
            "inr": 231.01612,
            "jpy": 251.41698,
            "krw": 217.85544,
            "kwd": 233.26219,
            "lkr": 263.36001,
            "ltc": 16.35845,
            "mmk": 302.82721,
            "mxn": 208.28261,
            "myr": 230.65686,
            "ngn": 261.11541,
            "nok": 202.75067,
            "nzd": 211.9667,
            "php": 231.35795,
            "pkr": 221.52586,
            "pln": 223.96849,
            "rub": 258.68266,
            "sar": 240.28231,
            "sek": 206.63501,
            "sgd": 227.15304,
            "thb": 247.01609,
            "try": 336.40774,
            "twd": 221.64138,
            "uah": 247.30387,
            "usd": 240.46769,
            "vef": -99.99986,
            "vnd": 236.14613,
            "xag": 130.77032,
            "xau": 232.67312,
            "xdr": 229.2815,
            "xlm": -2.33037,
            "xrp": 3.0821,
            "zar": 179.60271,
            "bits": 0.35765,
            "link": -19.67795,
            "sats": 0.35765
        },
        "market_cap_change_24h_in_currency": {
            "aed": -279069121125.3911,
            "ars": -7241744302473.172,
            "aud": -105420930788.28027,
            "bch": 78806341,
            "bdt": -6421795896820.336,
            "bhd": -28602881857.76883,
            "bmd": -76014209671.11475,
            "bnb": 159792080,
            "brl": -433632699560.61426,
            "btc": 675.0,
            "cad": -99198229612.50146,
            "chf": -72338095112.03241,
            "clp": -57499944166490.0,
            "cny": -482316755953.2744,
            "czk": -1713766262330.0918,
            "dkk": -488189710210.20605,
            "dot": 5411146787,
            "eos": 17534459361,
            "eth": 15038627,
            "eur": -65656300850.83142,
            "gbp": -58283477456.01178,
            "hkd": -589769826602.8926,
            "huf": -24599663730067.656,
            "idr": -1.135215935966505e+15,
            "ils": -255168109379.69556,
            "inr": -5638896825323.609,
            "jpy": -8294602773433.672,
            "krw": -88557851029017.25,
            "kwd": -22873498214.246185,
            "lkr": -14973910136421.016,
            "ltc": 380749687,
            "mmk": -125243371405130.88,
            "mxn": -1638069093315.7031,
            "myr": -311292315000.12354,
            "ngn": -30761250768458.562,
            "nok": -706378361278.9658,
            "nzd": -114685175291.2832,
            "php": -3523810117971.711,
            "pkr": -11689737808313.484,
            "pln": -311592018562.37256,
            "rub": -5270112372431.07,
            "sar": -285069426381.81494,
            "sek": -695757529631.5576,
            "sgd": -103329289885.12048,
            "thb": -2270169419099.8164,
            "try": -655219796543.5293,
            "twd": -2013482714118.3047,
            "uah": -2024316694720.1562,
            "usd": -76014209671.11475,
            "vef": -7611302814.36882,
            "vnd": -1.811311796358942e+15,
            "xag": -2958114816.127487,
            "xau": -46072392.463612795,
            "xdr": -52250610655.03168,
            "xlm": 217861232653,
            "xrp": 96150093618,
            "yfi": 1466025,
            "zar": -1158072182876.2266,
            "bits": 23493844603,
            "link": 3098566604,
            "sats": 2349384460341
        },
        "market_cap_change_percentage_24h_in_currency": {
            "aed": -11.32356,
            "ars": -11.32569,
            "aud": -11.78682,
            "bch": 6.56822,
            "bdt": -11.29108,
            "bhd": -11.30929,
            "bmd": -11.32882,
            "bnb": 8.11169,
            "brl": -12.68989,
            "btc": 0.0036,
            "cad": -11.87794,
            "chf": -11.68896,
            "clp": -11.4474,
            "cny": -11.13919,
            "czk": -11.85867,
            "dkk": -11.61696,
            "dot": 16.83257,
            "eos": 11.85447,
            "eth": 5.06556,
            "eur": -11.61846,
            "gbp": -12.0044,
            "hkd": -11.32065,
            "huf": -12.23331,
            "idr": -11.70261,
            "ils": -11.59911,
            "inr": -11.33515,
            "jpy": -11.21897,
            "krw": -11.62588,
            "kwd": -11.31381,
            "lkr": -11.22657,
            "ltc": 8.84966,
            "mmk": -11.33819,
            "mxn": -11.8356,
            "myr": -11.20673,
            "ngn": -11.17402,
            "nok": -12.15635,
            "nzd": -11.87546,
            "php": -10.83667,
            "pkr": -11.08611,
            "pln": -12.11007,
            "rub": -10.80266,
            "sar": -11.32946,
            "sek": -12.04786,
            "sgd": -11.45013,
            "thb": -10.77053,
            "try": -11.1427,
            "twd": -10.79602,
            "uah": -11.09279,
            "usd": -11.32882,
            "vef": -11.32882,
            "vnd": -11.69576,
            "xag": -11.42786,
            "xau": -12.14265,
            "xdr": -11.12698,
            "xlm": 9.7283,
            "xrp": 11.1542,
            "yfi": 7.93846,
            "zar": -12.03968,
            "bits": 0.12523,
            "link": 10.09793,
            "sats": 0.12523
        },
        "total_supply": 21000000.0,
        "max_supply": 21000000.0,
        "circulating_supply": 18740218.0,
        "last_updated": "2021-06-21T23:34:46.267Z"
    },
    "community_data": {
        "facebook_likes": null,
        "twitter_followers": 2796575,
        "reddit_average_posts_48h": 7.0,
        "reddit_average_comments_48h": 1297.833,
        "reddit_subscribers": 3115361,
        "reddit_accounts_active_48h": 8192,
        "telegram_channel_user_count": null
    },
    "developer_data": {
        "forks": 29198,
        "stars": 55151,
        "subscribers": 3819,
        "total_issues": 6295,
        "closed_issues": 5706,
        "pull_requests_merged": 8721,
        "pull_request_contributors": 730,
        "code_additions_deletions_4_weeks": {
            "additions": 2428,
            "deletions": -2103
        },
        "commit_count_4_weeks": 419,
        "last_4_weeks_commit_activity_series": [
            3,
            8,
            3,
            7,
            11,
            4,
            1,
            5,
            4,
            5,
            2,
            9,
            6,
            3,
            0,
            8,
            3,
            1,
            3,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },
    "public_interest_stats": {
        "alexa_rank": 9440,
        "bing_matches": null
    },
    "status_updates": [],
    "last_updated": "2021-06-21T23:34:46.267Z",
    "tickers": [
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Binance",
                "identifier": "binance",
                "has_trading_incentive": false
            },
            "last": 31582.5,
            "volume": 173437.1460403766,
            "converted_last": {
                "btc": 0.99546497,
                "eth": 16.686789,
                "usd": 31503
            },
            "converted_volume": {
                "btc": 172651,
                "eth": 2894109,
                "usd": 5463873345
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010032,
            "timestamp": "2021-06-21T23:19:13+00:00",
            "last_traded_at": "2021-06-21T23:19:13+00:00",
            "last_fetch_at": "2021-06-21T23:19:13+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.com/en/trade/BTC_USDT?ref=37754157",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Bitfinex",
                "identifier": "bitfinex",
                "has_trading_incentive": false
            },
            "last": 31548.0,
            "volume": 22550.94752757,
            "converted_last": {
                "btc": 0.99398503,
                "eth": 16.799213,
                "usd": 31548
            },
            "converted_volume": {
                "btc": 22415,
                "eth": 378838,
                "usd": 711437293
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.031696,
            "timestamp": "2021-06-21T22:52:45+00:00",
            "last_traded_at": "2021-06-21T22:52:45+00:00",
            "last_fetch_at": "2021-06-21T22:52:45+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bitfinex.com/t/BTCUSD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "FTX.US",
                "identifier": "ftx_us",
                "has_trading_incentive": false
            },
            "last": 31800.0,
            "volume": 416.87143426415093,
            "converted_last": {
                "btc": 1.006887,
                "eth": 16.802044,
                "usd": 31864
            },
            "converted_volume": {
                "btc": 419.742,
                "eth": 7004,
                "usd": 13283067
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.157233,
            "timestamp": "2021-06-21T23:26:36+00:00",
            "last_traded_at": "2021-06-21T23:26:36+00:00",
            "last_fetch_at": "2021-06-21T23:26:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.us/trade/BTC/USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "EUR",
            "market": {
                "name": "Bitfinex",
                "identifier": "bitfinex",
                "has_trading_incentive": false
            },
            "last": 26491.40689,
            "volume": 1691.79235609,
            "converted_last": {
                "btc": 0.994374,
                "eth": 16.805787,
                "usd": 31560
            },
            "converted_volume": {
                "btc": 1682,
                "eth": 28432,
                "usd": 53393551
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.0755,
            "timestamp": "2021-06-21T22:52:43+00:00",
            "last_traded_at": "2021-06-21T22:52:43+00:00",
            "last_fetch_at": "2021-06-21T22:52:43+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bitfinex.com/t/BTCEUR",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "JPY",
            "market": {
                "name": "Bitfinex",
                "identifier": "bitfinex",
                "has_trading_incentive": false
            },
            "last": 3480900.00000016,
            "volume": 977.8219653,
            "converted_last": {
                "btc": 0.9939907,
                "eth": 16.799309,
                "usd": 31548
            },
            "converted_volume": {
                "btc": 971.946,
                "eth": 16427,
                "usd": 30848503
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.028727,
            "timestamp": "2021-06-21T22:52:43+00:00",
            "last_traded_at": "2021-06-21T22:52:43+00:00",
            "last_fetch_at": "2021-06-21T22:52:43+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bitfinex.com/t/BTCJPY",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "GBP",
            "market": {
                "name": "Bitfinex",
                "identifier": "bitfinex",
                "has_trading_incentive": false
            },
            "last": 22650.0,
            "volume": 968.30072651,
            "converted_last": {
                "btc": 0.99410078,
                "eth": 16.801169,
                "usd": 31552
            },
            "converted_volume": {
                "btc": 962.589,
                "eth": 16269,
                "usd": 30551509
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.088261,
            "timestamp": "2021-06-21T22:52:48+00:00",
            "last_traded_at": "2021-06-21T22:52:48+00:00",
            "last_fetch_at": "2021-06-21T22:52:48+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bitfinex.com/t/BTCGBP",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "WBTC",
            "target": "BTC",
            "market": {
                "name": "FTX",
                "identifier": "ftx_spot",
                "has_trading_incentive": false
            },
            "last": 0.9999,
            "volume": 73.26715491549155,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.652832,
                "usd": 31678
            },
            "converted_volume": {
                "btc": 73.26,
                "eth": 1220,
                "usd": 2320704
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.03,
            "timestamp": "2021-06-21T23:27:06+00:00",
            "last_traded_at": "2021-06-21T23:27:06+00:00",
            "last_fetch_at": "2021-06-21T23:27:06+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.com/trade/WBTC/BTC",
            "token_info_url": null,
            "coin_id": "wrapped-bitcoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "FTX.US",
                "identifier": "ftx_us",
                "has_trading_incentive": false
            },
            "last": 31777.0,
            "volume": 1862.5438797715328,
            "converted_last": {
                "btc": 1.004147,
                "eth": 16.756326,
                "usd": 31777
            },
            "converted_volume": {
                "btc": 1870,
                "eth": 31209,
                "usd": 59186057
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.116403,
            "timestamp": "2021-06-21T23:26:36+00:00",
            "last_traded_at": "2021-06-21T23:26:36+00:00",
            "last_fetch_at": "2021-06-21T23:26:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.us/trade/BTC/USD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "BUSD",
            "market": {
                "name": "Binance",
                "identifier": "binance",
                "has_trading_incentive": false
            },
            "last": 31785.2,
            "volume": 53300.900859758185,
            "converted_last": {
                "btc": 1.008094,
                "eth": 16.787613,
                "usd": 31934
            },
            "converted_volume": {
                "btc": 53732,
                "eth": 894795,
                "usd": 1702116284
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.01003,
            "timestamp": "2021-06-21T23:27:58+00:00",
            "last_traded_at": "2021-06-21T23:27:58+00:00",
            "last_fetch_at": "2021-06-21T23:27:58+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.com/en/trade/BTC_BUSD?ref=37754157",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "binance-usd"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Digifinex",
                "identifier": "digifinex",
                "has_trading_incentive": false
            },
            "last": 31995.73,
            "volume": 24293.05625726,
            "converted_last": {
                "btc": 1.013084,
                "eth": 16.806553,
                "usd": 32096
            },
            "converted_volume": {
                "btc": 24611,
                "eth": 408283,
                "usd": 779700486
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.014469,
            "timestamp": "2021-06-21T23:32:34+00:00",
            "last_traded_at": "2021-06-21T23:32:34+00:00",
            "last_fetch_at": "2021-06-21T23:32:34+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.digifinex.com/en-ww/trade/USDT/BTC",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Coinbase Exchange",
                "identifier": "gdax",
                "has_trading_incentive": false
            },
            "last": 31998.35,
            "volume": 40709.0472444,
            "converted_last": {
                "btc": 1.010014,
                "eth": 16.755624,
                "usd": 31998
            },
            "converted_volume": {
                "btc": 41117,
                "eth": 682105,
                "usd": 1302622342
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.012031,
            "timestamp": "2021-06-21T23:32:28+00:00",
            "last_traded_at": "2021-06-21T23:32:28+00:00",
            "last_fetch_at": "2021-06-21T23:33:48+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.coinbase.com/trade/BTC-USD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "WBTC",
            "target": "BTC",
            "market": {
                "name": "Binance",
                "identifier": "binance",
                "has_trading_incentive": false
            },
            "last": 1.00036,
            "volume": 856.4600989743692,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.60474,
                "usd": 31678
            },
            "converted_volume": {
                "btc": 856.768,
                "eth": 14226,
                "usd": 27140459
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.016989,
            "timestamp": "2021-06-21T23:30:55+00:00",
            "last_traded_at": "2021-06-21T23:30:55+00:00",
            "last_fetch_at": "2021-06-21T23:30:55+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.com/en/trade/WBTC_BTC?ref=37754157",
            "token_info_url": null,
            "coin_id": "wrapped-bitcoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Huobi Global",
                "identifier": "huobi",
                "has_trading_incentive": false
            },
            "last": 31773.61,
            "volume": 61295.545450848,
            "converted_last": {
                "btc": 1.006051,
                "eth": 16.788101,
                "usd": 31837
            },
            "converted_volume": {
                "btc": 61666,
                "eth": 1029036,
                "usd": 1951482137
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010031,
            "timestamp": "2021-06-21T23:26:31+00:00",
            "last_traded_at": "2021-06-21T23:26:31+00:00",
            "last_fetch_at": "2021-06-21T23:26:31+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.hbg.com/en-us/exchange/?s=btc_usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "FTX",
                "identifier": "ftx_spot",
                "has_trading_incentive": false
            },
            "last": 31768.0,
            "volume": 25460.906973161673,
            "converted_last": {
                "btc": 1.00285,
                "eth": 16.700295,
                "usd": 31768
            },
            "converted_volume": {
                "btc": 25533,
                "eth": 425205,
                "usd": 808842093
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.013148,
            "timestamp": "2021-06-21T23:27:10+00:00",
            "last_traded_at": "2021-06-21T23:27:10+00:00",
            "last_fetch_at": "2021-06-21T23:27:10+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.com/trade/BTC/USD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "OKEx",
                "identifier": "okex",
                "has_trading_incentive": false
            },
            "last": 31991.5,
            "volume": 47568.58641672,
            "converted_last": {
                "btc": 1.01295,
                "eth": 16.804332,
                "usd": 32091
            },
            "converted_volume": {
                "btc": 48185,
                "eth": 799358,
                "usd": 1526541007
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010313,
            "timestamp": "2021-06-21T23:32:31+00:00",
            "last_traded_at": "2021-06-21T23:32:31+00:00",
            "last_fetch_at": "2021-06-21T23:32:31+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.okex.com/markets/spot-info/btc-usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "FTX",
                "identifier": "ftx_spot",
                "has_trading_incentive": false
            },
            "last": 31777.0,
            "volume": 3245.6247520596658,
            "converted_last": {
                "btc": 1.006158,
                "eth": 16.755388,
                "usd": 31873
            },
            "converted_volume": {
                "btc": 3266,
                "eth": 54382,
                "usd": 103447151
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.050322,
            "timestamp": "2021-06-21T23:27:06+00:00",
            "last_traded_at": "2021-06-21T23:27:06+00:00",
            "last_fetch_at": "2021-06-21T23:27:06+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.com/trade/BTC/USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "ZB",
                "identifier": "zb",
                "has_trading_incentive": false
            },
            "last": 31508.36,
            "volume": 52573.8384,
            "converted_last": {
                "btc": 0.99624877,
                "eth": 16.835644,
                "usd": 31604
            },
            "converted_volume": {
                "btc": 52377,
                "eth": 885114,
                "usd": 1661531127
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.050353,
            "timestamp": "2021-06-21T22:54:15+00:00",
            "last_traded_at": "2021-06-21T22:54:15+00:00",
            "last_fetch_at": "2021-06-21T22:54:15+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://trans.zb.com/btcusdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "LBank",
                "identifier": "lbank",
                "has_trading_incentive": false
            },
            "last": 31819.3,
            "volume": 40808.4528,
            "converted_last": {
                "btc": 1.007498,
                "eth": 16.86034,
                "usd": 31883
            },
            "converted_volume": {
                "btc": 41114,
                "eth": 688044,
                "usd": 1301106054
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.039551,
            "timestamp": "2021-06-21T23:23:45+00:00",
            "last_traded_at": "2021-06-21T23:23:45+00:00",
            "last_fetch_at": "2021-06-21T23:23:45+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.lbank.info/exchange/btc/usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Coinsbit",
                "identifier": "coinsbit",
                "has_trading_incentive": false
            },
            "last": 31568.55,
            "volume": 41509.74052046,
            "converted_last": {
                "btc": 0.9995583,
                "eth": 16.755108,
                "usd": 31591
            },
            "converted_volume": {
                "btc": 41491,
                "eth": 695500,
                "usd": 1311315143
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.065681,
            "timestamp": "2021-06-21T23:20:47+00:00",
            "last_traded_at": "2021-06-21T23:20:47+00:00",
            "last_fetch_at": "2021-06-21T23:20:47+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://coinsbit.io/trade/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Serum DEX",
                "identifier": "serum_dex",
                "has_trading_incentive": false
            },
            "last": 31612.2,
            "volume": 121.3888,
            "converted_last": {
                "btc": 0.99953205,
                "eth": 16.892963,
                "usd": 31724
            },
            "converted_volume": {
                "btc": 121.332,
                "eth": 2051,
                "usd": 3850945
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.07688,
            "timestamp": "2021-06-21T22:52:28+00:00",
            "last_traded_at": "2021-06-21T22:52:28+00:00",
            "last_fetch_at": "2021-06-21T22:52:28+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://dex.projectserum.com",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Hoo.com",
                "identifier": "hoo",
                "has_trading_incentive": false
            },
            "last": 31902.78,
            "volume": 38241.37576128782,
            "converted_last": {
                "btc": 0.9846537,
                "eth": 16.550882,
                "usd": 31660
            },
            "converted_volume": {
                "btc": 37655,
                "eth": 632929,
                "usd": 1210724773
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.02116,
            "timestamp": "2021-06-21T21:32:53+00:00",
            "last_traded_at": "2021-06-21T21:32:53+00:00",
            "last_fetch_at": "2021-06-21T21:32:53+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hoo.com/spot/btc-usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Kraken",
                "identifier": "kraken",
                "has_trading_incentive": false
            },
            "last": 31593.4,
            "volume": 11057.37689129,
            "converted_last": {
                "btc": 0.99830637,
                "eth": 16.734419,
                "usd": 31593
            },
            "converted_volume": {
                "btc": 11039,
                "eth": 185039,
                "usd": 349340131
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010317,
            "timestamp": "2021-06-21T23:19:57+00:00",
            "last_traded_at": "2021-06-21T23:19:57+00:00",
            "last_fetch_at": "2021-06-21T23:19:57+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://trade.kraken.com/markets/kraken/btc/usd",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "EUR",
            "market": {
                "name": "Kraken",
                "identifier": "kraken",
                "has_trading_incentive": false
            },
            "last": 26500.0,
            "volume": 8772.44370204,
            "converted_last": {
                "btc": 0.99735725,
                "eth": 16.718509,
                "usd": 31563
            },
            "converted_volume": {
                "btc": 8749,
                "eth": 146662,
                "usd": 276887826
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010377,
            "timestamp": "2021-06-21T23:19:57+00:00",
            "last_traded_at": "2021-06-21T23:19:57+00:00",
            "last_fetch_at": "2021-06-21T23:19:57+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://trade.kraken.com/markets/kraken/btc/eur",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDC",
            "market": {
                "name": "Serum DEX",
                "identifier": "serum_dex",
                "has_trading_incentive": false
            },
            "last": 32105.1,
            "volume": 125.1508,
            "converted_last": {
                "btc": 1.012026,
                "eth": 17.104117,
                "usd": 32121
            },
            "converted_volume": {
                "btc": 126.656,
                "eth": 2141,
                "usd": 4019918
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.368116,
            "timestamp": "2021-06-21T22:52:41+00:00",
            "last_traded_at": "2021-06-21T22:52:41+00:00",
            "last_fetch_at": "2021-06-21T22:52:41+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://dex.projectserum.com",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "usd-coin"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Bitcoin.com Exchange",
                "identifier": "bitcoin_com",
                "has_trading_incentive": false
            },
            "last": 31792.74,
            "volume": 16045.78998,
            "converted_last": {
                "btc": 1.004638,
                "eth": 16.812477,
                "usd": 31793
            },
            "converted_volume": {
                "btc": 16120,
                "eth": 269769,
                "usd": 510139629
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.027764,
            "timestamp": "2021-06-21T23:23:47+00:00",
            "last_traded_at": "2021-06-21T23:23:47+00:00",
            "last_fetch_at": "2021-06-21T23:23:47+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://exchange.bitcoin.com/exchange/BTC-to-USD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Changelly PRO",
                "identifier": "changelly",
                "has_trading_incentive": false
            },
            "last": 31611.56,
            "volume": 15938.44899,
            "converted_last": {
                "btc": 1.00092,
                "eth": 16.777936,
                "usd": 31634
            },
            "converted_volume": {
                "btc": 15953,
                "eth": 267414,
                "usd": 504190210
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010032,
            "timestamp": "2021-06-21T23:20:13+00:00",
            "last_traded_at": "2021-06-21T23:20:13+00:00",
            "last_fetch_at": "2021-06-21T23:20:13+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.changelly.com",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "HitBTC",
                "identifier": "hitbtc",
                "has_trading_incentive": false
            },
            "last": 31432.08,
            "volume": 16121.35705,
            "converted_last": {
                "btc": 0.99282835,
                "eth": 16.769382,
                "usd": 31432
            },
            "converted_volume": {
                "btc": 16006,
                "eth": 270345,
                "usd": 506727785
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.055922,
            "timestamp": "2021-06-21T23:01:16+00:00",
            "last_traded_at": "2021-06-21T23:01:16+00:00",
            "last_fetch_at": "2021-06-21T23:01:16+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hitbtc.com/BTC-to-USD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "VCC Exchange",
                "identifier": "vcc",
                "has_trading_incentive": false
            },
            "last": 31773.98,
            "volume": 633.239889,
            "converted_last": {
                "btc": 1.006063,
                "eth": 16.753796,
                "usd": 31870
            },
            "converted_volume": {
                "btc": 637.079,
                "eth": 10609,
                "usd": 20181211
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010031,
            "timestamp": "2021-06-21T23:27:34+00:00",
            "last_traded_at": "2021-06-21T23:27:34+00:00",
            "last_fetch_at": "2021-06-21T23:27:34+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://vcc.exchange/exchange/basic?currency=usdt&coin=btc",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "UST",
            "market": {
                "name": "Bitfinex",
                "identifier": "bitfinex",
                "has_trading_incentive": false
            },
            "last": 31505.0,
            "volume": 2835.27352308,
            "converted_last": {
                "btc": 0.99584378,
                "eth": 16.8288,
                "usd": 31591
            },
            "converted_volume": {
                "btc": 2823,
                "eth": 47714,
                "usd": 89568886
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.031756,
            "timestamp": "2021-06-21T22:54:46+00:00",
            "last_traded_at": "2021-06-21T22:54:46+00:00",
            "last_fetch_at": "2021-06-21T22:54:46+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bitfinex.com/t/BTCUST",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "BitZ",
                "identifier": "bit_z",
                "has_trading_incentive": false
            },
            "last": 31906.97,
            "volume": 21703.21,
            "converted_last": {
                "btc": 1.010274,
                "eth": 16.775332,
                "usd": 32003
            },
            "converted_volume": {
                "btc": 21926,
                "eth": 364079,
                "usd": 694571200
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.013133,
            "timestamp": "2021-06-21T23:30:37+00:00",
            "last_traded_at": "2021-06-21T23:30:37+00:00",
            "last_fetch_at": "2021-06-21T23:30:37+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bit-z.com/exchange/btc_usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Currency.com",
                "identifier": "currency",
                "has_trading_incentive": false
            },
            "last": 31787.75,
            "volume": 2157.7407,
            "converted_last": {
                "btc": 1.003474,
                "eth": 16.662422,
                "usd": 31788
            },
            "converted_volume": {
                "btc": 2165,
                "eth": 35953,
                "usd": 68589722
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.011725,
            "timestamp": "2021-06-21T23:30:51+00:00",
            "last_traded_at": "2021-06-21T23:30:51+00:00",
            "last_fetch_at": "2021-06-21T23:30:51+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://exchange.currency.com/btc-to-usd",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "Digifinex",
                "identifier": "digifinex",
                "has_trading_incentive": false
            },
            "last": 0.060293,
            "volume": 32472.7796,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.589494,
                "usd": 31681
            },
            "converted_volume": {
                "btc": 1958,
                "eth": 32480,
                "usd": 62027816
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.210453,
            "timestamp": "2021-06-21T23:32:34+00:00",
            "last_traded_at": "2021-06-21T23:32:34+00:00",
            "last_fetch_at": "2021-06-21T23:32:34+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.digifinex.com/en-ww/trade/BTC/ETH",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "KRW",
            "market": {
                "name": "Upbit",
                "identifier": "upbit",
                "has_trading_incentive": false
            },
            "last": 37720000.0,
            "volume": 22718.55633611,
            "converted_last": {
                "btc": 1.049804,
                "eth": 17.410172,
                "usd": 33337
            },
            "converted_volume": {
                "btc": 23850,
                "eth": 395534,
                "usd": 757358366
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.017954,
            "timestamp": "2021-06-21T23:33:32+00:00",
            "last_traded_at": "2021-06-21T23:33:32+00:00",
            "last_fetch_at": "2021-06-21T23:33:32+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "ZBG",
                "identifier": "zbg",
                "has_trading_incentive": false
            },
            "last": 31555.8,
            "volume": 1932.5177,
            "converted_last": {
                "btc": 0.9991546,
                "eth": 16.746516,
                "usd": 31664
            },
            "converted_volume": {
                "btc": 1931,
                "eth": 32363,
                "usd": 61191240
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.017179,
            "timestamp": "2021-06-21T23:22:06+00:00",
            "last_traded_at": "2021-06-21T23:22:06+00:00",
            "last_fetch_at": "2021-06-21T23:22:06+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "Binance",
                "identifier": "binance",
                "has_trading_incentive": false
            },
            "last": 0.060307,
            "volume": 233983.12207720496,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.559137,
                "usd": 31755
            },
            "converted_volume": {
                "btc": 14111,
                "eth": 233663,
                "usd": 448089783
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.019929,
            "timestamp": "2021-06-21T23:34:15+00:00",
            "last_traded_at": "2021-06-21T23:34:15+00:00",
            "last_fetch_at": "2021-06-21T23:34:15+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.com/en/trade/ETH_BTC?ref=37754157",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "JPY",
            "market": {
                "name": "bitFlyer",
                "identifier": "bitflyer",
                "has_trading_incentive": false
            },
            "last": 3505965.0,
            "volume": 9988.53889266,
            "converted_last": {
                "btc": 1.004204,
                "eth": 16.757278,
                "usd": 31779
            },
            "converted_volume": {
                "btc": 10031,
                "eth": 167381,
                "usd": 317423840
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.051816,
            "timestamp": "2021-06-21T23:26:32+00:00",
            "last_traded_at": "2021-06-21T23:26:32+00:00",
            "last_fetch_at": "2021-06-21T23:26:32+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://bitflyer.com/en-jp/ex/simpleex",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Bitstamp",
                "identifier": "bitstamp",
                "has_trading_incentive": false
            },
            "last": 31837.57,
            "volume": 8555.43268191,
            "converted_last": {
                "btc": 1.005192,
                "eth": 16.691226,
                "usd": 31838
            },
            "converted_volume": {
                "btc": 8600,
                "eth": 142801,
                "usd": 272384187
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.098848,
            "timestamp": "2021-06-21T23:29:55+00:00",
            "last_traded_at": "2021-06-21T23:29:55+00:00",
            "last_fetch_at": "2021-06-21T23:29:55+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "LBank",
                "identifier": "lbank",
                "has_trading_incentive": false
            },
            "last": 0.0601607,
            "volume": 47938.521,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.734865,
                "usd": 31646
            },
            "converted_volume": {
                "btc": 2884,
                "eth": 48264,
                "usd": 91267460
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.082322,
            "timestamp": "2021-06-21T23:23:45+00:00",
            "last_traded_at": "2021-06-21T23:23:45+00:00",
            "last_fetch_at": "2021-06-21T23:23:45+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.lbank.info/exchange/eth/btc",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Bibox",
                "identifier": "bibox",
                "has_trading_incentive": false
            },
            "last": 31707.5,
            "volume": 17277.0,
            "converted_last": {
                "btc": 0.99315418,
                "eth": 16.742588,
                "usd": 31702
            },
            "converted_volume": {
                "btc": 17159,
                "eth": 289262,
                "usd": 547711556
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010316,
            "timestamp": "2021-06-21T22:44:41+00:00",
            "last_traded_at": "2021-06-21T22:44:41+00:00",
            "last_fetch_at": "2021-06-21T22:44:41+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bibox.com/en/exchange/basic/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDC",
            "market": {
                "name": "Changelly PRO",
                "identifier": "changelly",
                "has_trading_incentive": false
            },
            "last": 31580.29268,
            "volume": 2427.59405,
            "converted_last": {
                "btc": 1.000929,
                "eth": 16.778086,
                "usd": 31634
            },
            "converted_volume": {
                "btc": 2430,
                "eth": 40730,
                "usd": 76794177
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.053509,
            "timestamp": "2021-06-21T23:20:12+00:00",
            "last_traded_at": "2021-06-21T23:20:12+00:00",
            "last_fetch_at": "2021-06-21T23:20:12+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.changelly.com",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "usd-coin"
        },
        {
            "base": "BTC",
            "target": "EUR",
            "market": {
                "name": "Binance",
                "identifier": "binance",
                "has_trading_incentive": false
            },
            "last": 26634.15,
            "volume": 11064.865162353302,
            "converted_last": {
                "btc": 1.002019,
                "eth": 16.814828,
                "usd": 31725
            },
            "converted_volume": {
                "btc": 11087,
                "eth": 186054,
                "usd": 351029885
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.01015,
            "timestamp": "2021-06-21T23:15:06+00:00",
            "last_traded_at": "2021-06-21T23:15:06+00:00",
            "last_fetch_at": "2021-06-21T23:15:06+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.com/en/trade/BTC_EUR?ref=37754157",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Gemini",
                "identifier": "gemini",
                "has_trading_incentive": false
            },
            "last": 31891.05,
            "volume": 6824.2691326076,
            "converted_last": {
                "btc": 1.006735,
                "eth": 16.716569,
                "usd": 31891
            },
            "converted_volume": {
                "btc": 6870,
                "eth": 114078,
                "usd": 217633108
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.05073,
            "timestamp": "2021-06-21T23:30:28+00:00",
            "last_traded_at": "2021-06-21T23:30:28+00:00",
            "last_fetch_at": "2021-06-21T23:30:28+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDC",
            "market": {
                "name": "HitBTC",
                "identifier": "hitbtc",
                "has_trading_incentive": false
            },
            "last": 31449.67094,
            "volume": 2391.94886,
            "converted_last": {
                "btc": 0.99136513,
                "eth": 16.754804,
                "usd": 31449
            },
            "converted_volume": {
                "btc": 2371,
                "eth": 40077,
                "usd": 75224018
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.044406,
            "timestamp": "2021-06-21T22:53:29+00:00",
            "last_traded_at": "2021-06-21T22:53:29+00:00",
            "last_fetch_at": "2021-06-21T22:53:29+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hitbtc.com/BTC-to-USDC",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "usd-coin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "FTX.US",
                "identifier": "ftx_us",
                "has_trading_incentive": false
            },
            "last": 0.060205,
            "volume": 780.0409272900922,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.687125,
                "usd": 31646
            },
            "converted_volume": {
                "btc": 46.962364,
                "eth": 783.667,
                "usd": 1486160
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.132703,
            "timestamp": "2021-06-21T23:26:36+00:00",
            "last_traded_at": "2021-06-21T23:26:36+00:00",
            "last_fetch_at": "2021-06-21T23:26:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.us/trade/ETH/BTC",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "BW.com",
                "identifier": "bw",
                "has_trading_incentive": false
            },
            "last": 0.0596,
            "volume": 9990.1204,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.899037,
                "usd": 31723
            },
            "converted_volume": {
                "btc": 595.411,
                "eth": 10062,
                "usd": 18888087
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.25134,
            "timestamp": "2021-06-21T22:54:55+00:00",
            "last_traded_at": "2021-06-21T22:54:55+00:00",
            "last_fetch_at": "2021-06-21T22:54:55+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bw.com/trade/eth_btc",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "WBTC",
            "target": "BTC",
            "market": {
                "name": "Tokenize",
                "identifier": "tokenize",
                "has_trading_incentive": false
            },
            "last": 0.9905148,
            "volume": 0.017785974,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.878712,
                "usd": 31826
            },
            "converted_volume": {
                "btc": 0.01761727,
                "eth": 0.29735683,
                "usd": 560.69
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 1.995873,
            "timestamp": "2021-06-21T22:48:02+00:00",
            "last_traded_at": "2021-06-21T22:48:02+00:00",
            "last_fetch_at": "2021-06-21T23:26:41+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://tokenize.exchange/market/BTC-WBTC",
            "token_info_url": null,
            "coin_id": "wrapped-bitcoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BCH",
            "target": "BTC",
            "market": {
                "name": "FTX.US",
                "identifier": "ftx_us",
                "has_trading_incentive": false
            },
            "last": 0.014727,
            "volume": 119.33451191688735,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.687125,
                "usd": 31646
            },
            "converted_volume": {
                "btc": 1.757439,
                "eth": 29.32661,
                "usd": 55616
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.441366,
            "timestamp": "2021-06-21T23:26:36+00:00",
            "last_traded_at": "2021-06-21T23:26:36+00:00",
            "last_fetch_at": "2021-06-21T23:26:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.us/trade/BCH/BTC",
            "token_info_url": null,
            "coin_id": "bitcoin-cash",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDC",
            "market": {
                "name": "Bitcoin.com Exchange",
                "identifier": "bitcoin_com",
                "has_trading_incentive": false
            },
            "last": 31793.44259,
            "volume": 2429.5812,
            "converted_last": {
                "btc": 1.007685,
                "eth": 16.863469,
                "usd": 31889
            },
            "converted_volume": {
                "btc": 2448,
                "eth": 40971,
                "usd": 77477317
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.061107,
            "timestamp": "2021-06-21T23:23:47+00:00",
            "last_traded_at": "2021-06-21T23:23:47+00:00",
            "last_fetch_at": "2021-06-21T23:23:47+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://exchange.bitcoin.com/exchange/BTC-to-USDC",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "usd-coin"
        },
        {
            "base": "BTC",
            "target": "EUR",
            "market": {
                "name": "Bitstamp",
                "identifier": "bitstamp",
                "has_trading_incentive": false
            },
            "last": 26552.36,
            "volume": 4787.08788597,
            "converted_last": {
                "btc": 1.000506,
                "eth": 16.84391,
                "usd": 31627
            },
            "converted_volume": {
                "btc": 4790,
                "eth": 80633,
                "usd": 151402711
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.112119,
            "timestamp": "2021-06-21T23:11:18+00:00",
            "last_traded_at": "2021-06-21T23:11:18+00:00",
            "last_fetch_at": "2021-06-21T23:11:18+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "KuCoin",
                "identifier": "kucoin",
                "has_trading_incentive": false
            },
            "last": 31644.0,
            "volume": 13386.31017575,
            "converted_last": {
                "btc": 1.001947,
                "eth": 16.795154,
                "usd": 31666
            },
            "converted_volume": {
                "btc": 13412,
                "eth": 224825,
                "usd": 423891476
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010316,
            "timestamp": "2021-06-21T23:20:25+00:00",
            "last_traded_at": "2021-06-21T23:20:25+00:00",
            "last_fetch_at": "2021-06-21T23:20:25+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.kucoin.com/trade/BTC-USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Dex-Trade",
                "identifier": "dextrade",
                "has_trading_incentive": false
            },
            "last": 31789.49,
            "volume": 724.22753528,
            "converted_last": {
                "btc": 1.006554,
                "eth": 16.761974,
                "usd": 31885
            },
            "converted_volume": {
                "btc": 728.974,
                "eth": 12139,
                "usd": 23092233
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.209323,
            "timestamp": "2021-06-21T23:27:45+00:00",
            "last_traded_at": "2021-06-21T23:27:45+00:00",
            "last_fetch_at": "2021-06-21T23:27:45+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "Bitfinex",
                "identifier": "bitfinex",
                "has_trading_incentive": false
            },
            "last": 0.059743,
            "volume": 23595.13231867,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.899037,
                "usd": 31723
            },
            "converted_volume": {
                "btc": 1410,
                "eth": 23822,
                "usd": 44717801
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.217391,
            "timestamp": "2021-06-21T22:54:37+00:00",
            "last_traded_at": "2021-06-21T22:54:37+00:00",
            "last_fetch_at": "2021-06-21T22:54:37+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bitfinex.com/t/ETHBTC",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Binance US",
                "identifier": "binance_us",
                "has_trading_incentive": false
            },
            "last": 31626.1,
            "volume": 5179.834227783382,
            "converted_last": {
                "btc": 1.000683,
                "eth": 16.773968,
                "usd": 31626
            },
            "converted_volume": {
                "btc": 5183,
                "eth": 86886,
                "usd": 163817955
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.01416,
            "timestamp": "2021-06-21T23:20:20+00:00",
            "last_traded_at": "2021-06-21T23:20:20+00:00",
            "last_fetch_at": "2021-06-21T23:20:20+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.us/en/trade/BTC_USD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "EUR",
            "market": {
                "name": "Coinbase Exchange",
                "identifier": "gdax",
                "has_trading_incentive": false
            },
            "last": 26851.49,
            "volume": 4714.99541764,
            "converted_last": {
                "btc": 1.00993,
                "eth": 16.754233,
                "usd": 31996
            },
            "converted_volume": {
                "btc": 4762,
                "eth": 78996,
                "usd": 150859549
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.042902,
            "timestamp": "2021-06-21T23:32:31+00:00",
            "last_traded_at": "2021-06-21T23:32:31+00:00",
            "last_fetch_at": "2021-06-21T23:33:47+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.coinbase.com/trade/BTC-EUR",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "Cryptology",
                "identifier": "cryptology",
                "has_trading_incentive": false
            },
            "last": 0.05988,
            "volume": 278.16837815,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.762512,
                "usd": 31605
            },
            "converted_volume": {
                "btc": 16.656722,
                "eth": 279.209,
                "usd": 526427
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.383269,
            "timestamp": "2021-06-21T23:20:09+00:00",
            "last_traded_at": "2021-06-21T23:20:09+00:00",
            "last_fetch_at": "2021-06-21T23:20:09+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "XRP",
            "target": "BTC",
            "market": {
                "name": "Changelly PRO",
                "identifier": "changelly",
                "has_trading_incentive": false
            },
            "last": 1.9517e-05,
            "volume": 28853524.4,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.762512,
                "usd": 31605
            },
            "converted_volume": {
                "btc": 563.134,
                "eth": 9440,
                "usd": 17797576
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.046092,
            "timestamp": "2021-06-21T23:20:12+00:00",
            "last_traded_at": "2021-06-21T23:20:12+00:00",
            "last_fetch_at": "2021-06-21T23:20:12+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.changelly.com",
            "token_info_url": null,
            "coin_id": "ripple",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "LTC",
            "target": "BTC",
            "market": {
                "name": "FTX",
                "identifier": "ftx_spot",
                "has_trading_incentive": false
            },
            "last": 0.004009,
            "volume": 2309.8033929907706,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.652832,
                "usd": 31678
            },
            "converted_volume": {
                "btc": 9.260002,
                "eth": 154.205,
                "usd": 293336
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.130735,
            "timestamp": "2021-06-21T23:27:08+00:00",
            "last_traded_at": "2021-06-21T23:27:08+00:00",
            "last_fetch_at": "2021-06-21T23:27:08+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.com/trade/LTC/BTC",
            "token_info_url": null,
            "coin_id": "litecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "HitBTC",
                "identifier": "hitbtc",
                "has_trading_incentive": false
            },
            "last": 0.059524,
            "volume": 53167.3072,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.90074,
                "usd": 31723
            },
            "converted_volume": {
                "btc": 3165,
                "eth": 53486,
                "usd": 100394002
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.023516,
            "timestamp": "2021-06-21T22:53:48+00:00",
            "last_traded_at": "2021-06-21T22:53:48+00:00",
            "last_fetch_at": "2021-06-21T22:53:48+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hitbtc.com/ETH-to-BTC",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Zipmex",
                "identifier": "zipmex",
                "has_trading_incentive": false
            },
            "last": 31870.0,
            "volume": 13.82686,
            "converted_last": {
                "btc": 1.009103,
                "eth": 16.804425,
                "usd": 31966
            },
            "converted_volume": {
                "btc": 13.952728,
                "eth": 232.352,
                "usd": 441991
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.103744,
            "timestamp": "2021-06-21T23:27:21+00:00",
            "last_traded_at": "2021-06-21T23:27:21+00:00",
            "last_fetch_at": "2021-06-21T23:27:21+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://trade.zipmex.com",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BNB",
            "target": "BTC",
            "market": {
                "name": "HitBTC",
                "identifier": "hitbtc",
                "has_trading_incentive": false
            },
            "last": 0.0087321,
            "volume": 3365.39,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.90074,
                "usd": 31723
            },
            "converted_volume": {
                "btc": 29.386922,
                "eth": 496.661,
                "usd": 932234
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.022856,
            "timestamp": "2021-06-21T22:53:41+00:00",
            "last_traded_at": "2021-06-21T22:53:41+00:00",
            "last_fetch_at": "2021-06-21T22:53:41+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hitbtc.com/BNB-to-BTC",
            "token_info_url": null,
            "coin_id": "binancecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Float SV",
                "identifier": "floatsv",
                "has_trading_incentive": false
            },
            "last": 32022.5,
            "volume": 16.54116108,
            "converted_last": {
                "btc": 1.013932,
                "eth": 16.994191,
                "usd": 32045
            },
            "converted_volume": {
                "btc": 16.771609,
                "eth": 281.104,
                "usd": 530063
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.010312,
            "timestamp": "2021-06-21T23:21:59+00:00",
            "last_traded_at": "2021-06-21T23:21:59+00:00",
            "last_fetch_at": "2021-06-21T23:21:59+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.floatsv.com/spot/trade#product=btc_usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "CoinTiger",
                "identifier": "cointiger",
                "has_trading_incentive": false
            },
            "last": 31782.39,
            "volume": 7318.1315625,
            "converted_last": {
                "btc": 1.006329,
                "eth": 16.75823,
                "usd": 31878
            },
            "converted_volume": {
                "btc": 7364,
                "eth": 122639,
                "usd": 233288912
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.028509,
            "timestamp": "2021-06-21T23:27:47+00:00",
            "last_traded_at": "2021-06-21T23:27:47+00:00",
            "last_fetch_at": "2021-06-21T23:27:47+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "Bitcoin.com Exchange",
                "identifier": "bitcoin_com",
                "has_trading_incentive": false
            },
            "last": 0.060201,
            "volume": 54157.1292,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.734865,
                "usd": 31646
            },
            "converted_volume": {
                "btc": 3260,
                "eth": 54561,
                "usd": 103175787
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.01827,
            "timestamp": "2021-06-21T23:23:48+00:00",
            "last_traded_at": "2021-06-21T23:23:48+00:00",
            "last_fetch_at": "2021-06-21T23:23:48+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://exchange.bitcoin.com/exchange/ETH-to-BTC",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "BitZ",
                "identifier": "bit_z",
                "has_trading_incentive": false
            },
            "last": 0.0602665,
            "volume": 89054.08,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.60474,
                "usd": 31678
            },
            "converted_volume": {
                "btc": 5367,
                "eth": 89117,
                "usd": 170013548
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.425253,
            "timestamp": "2021-06-21T23:30:36+00:00",
            "last_traded_at": "2021-06-21T23:30:36+00:00",
            "last_fetch_at": "2021-06-21T23:30:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bit-z.com/exchange/eth_btc",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "JPY",
            "market": {
                "name": "Liquid",
                "identifier": "quoine",
                "has_trading_incentive": false
            },
            "last": 3532406.0,
            "volume": 8537.75838006,
            "converted_last": {
                "btc": 1.010617,
                "eth": 16.765629,
                "usd": 32017
            },
            "converted_volume": {
                "btc": 8628,
                "eth": 143141,
                "usd": 273357313
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.051358,
            "timestamp": "2021-06-21T23:32:26+00:00",
            "last_traded_at": "2021-06-21T23:32:26+00:00",
            "last_fetch_at": "2021-06-21T23:32:26+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://app.liquid.com/exchange/BTCJPY?lang=en",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "P2PB2B",
                "identifier": "p2pb2b",
                "has_trading_incentive": false
            },
            "last": 31765.72,
            "volume": 14182.047825,
            "converted_last": {
                "btc": 1.005801,
                "eth": 16.783932,
                "usd": 31829
            },
            "converted_volume": {
                "btc": 14264,
                "eth": 238031,
                "usd": 451405405
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.156078,
            "timestamp": "2021-06-21T23:26:36+00:00",
            "last_traded_at": "2021-06-21T23:26:36+00:00",
            "last_fetch_at": "2021-06-21T23:26:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "XRP",
            "target": "BTC",
            "market": {
                "name": "HitBTC",
                "identifier": "hitbtc",
                "has_trading_incentive": false
            },
            "last": 1.9476e-05,
            "volume": 30438976.0,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.90074,
                "usd": 31723
            },
            "converted_volume": {
                "btc": 592.829,
                "eth": 10019,
                "usd": 18806189
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.12333,
            "timestamp": "2021-06-21T22:53:24+00:00",
            "last_traded_at": "2021-06-21T22:53:24+00:00",
            "last_fetch_at": "2021-06-21T22:53:24+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hitbtc.com/XRP-to-BTC",
            "token_info_url": null,
            "coin_id": "ripple",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "Changelly PRO",
                "identifier": "changelly",
                "has_trading_incentive": false
            },
            "last": 0.059872,
            "volume": 53876.4247,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.762512,
                "usd": 31605
            },
            "converted_volume": {
                "btc": 3226,
                "eth": 54071,
                "usd": 101946298
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.013357,
            "timestamp": "2021-06-21T23:20:12+00:00",
            "last_traded_at": "2021-06-21T23:20:12+00:00",
            "last_fetch_at": "2021-06-21T23:20:12+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.changelly.com",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDC",
            "market": {
                "name": "Binance",
                "identifier": "binance",
                "has_trading_incentive": false
            },
            "last": 31782.37,
            "volume": 6113.060049154749,
            "converted_last": {
                "btc": 0.99833299,
                "eth": 16.65862,
                "usd": 31601
            },
            "converted_volume": {
                "btc": 6103,
                "eth": 101835,
                "usd": 193177533
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.031956,
            "timestamp": "2021-06-21T23:25:58+00:00",
            "last_traded_at": "2021-06-21T23:25:58+00:00",
            "last_fetch_at": "2021-06-21T23:25:58+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.com/en/trade/BTC_USDC?ref=37754157",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "usd-coin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "WhiteBIT",
                "identifier": "whitebit",
                "has_trading_incentive": false
            },
            "last": 31613.29,
            "volume": 8585.637856,
            "converted_last": {
                "btc": 1.000975,
                "eth": 16.779151,
                "usd": 31678
            },
            "converted_volume": {
                "btc": 8594,
                "eth": 144060,
                "usd": 271974557
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.050999,
            "timestamp": "2021-06-21T23:19:59+00:00",
            "last_traded_at": "2021-06-21T23:19:59+00:00",
            "last_fetch_at": "2021-06-21T23:19:59+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://whitebit.com/trade/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "P2PB2B",
                "identifier": "p2pb2b",
                "has_trading_incentive": false
            },
            "last": 31753.52,
            "volume": 14206.74604,
            "converted_last": {
                "btc": 1.003405,
                "eth": 16.743945,
                "usd": 31754
            },
            "converted_volume": {
                "btc": 14255,
                "eth": 237877,
                "usd": 451114195
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.212158,
            "timestamp": "2021-06-21T23:26:36+00:00",
            "last_traded_at": "2021-06-21T23:26:36+00:00",
            "last_fetch_at": "2021-06-21T23:26:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BNB",
            "target": "BTC",
            "market": {
                "name": "Bitcoin.com Exchange",
                "identifier": "bitcoin_com",
                "has_trading_incentive": false
            },
            "last": 0.0087533,
            "volume": 3411.48,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.734865,
                "usd": 31646
            },
            "converted_volume": {
                "btc": 29.861708,
                "eth": 499.732,
                "usd": 945003
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.070663,
            "timestamp": "2021-06-21T23:23:47+00:00",
            "last_traded_at": "2021-06-21T23:23:47+00:00",
            "last_fetch_at": "2021-06-21T23:23:47+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://exchange.bitcoin.com/exchange/BNB-to-BTC",
            "token_info_url": null,
            "coin_id": "binancecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "BiKi",
                "identifier": "biki",
                "has_trading_incentive": false
            },
            "last": 31606.54,
            "volume": 8057.40751033,
            "converted_last": {
                "btc": 1.000761,
                "eth": 16.775272,
                "usd": 31629
            },
            "converted_volume": {
                "btc": 8064,
                "eth": 135165,
                "usd": 254844173
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.017673,
            "timestamp": "2021-06-21T23:20:16+00:00",
            "last_traded_at": "2021-06-21T23:20:16+00:00",
            "last_fetch_at": "2021-06-21T23:20:16+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.biki.com/trade/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BNB",
            "target": "BTC",
            "market": {
                "name": "FTX",
                "identifier": "ftx_spot",
                "has_trading_incentive": false
            },
            "last": 0.0087828,
            "volume": 3848.3953339481714,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.652832,
                "usd": 31678
            },
            "converted_volume": {
                "btc": 33.799687,
                "eth": 562.86,
                "usd": 1070697
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.160351,
            "timestamp": "2021-06-21T23:27:07+00:00",
            "last_traded_at": "2021-06-21T23:27:07+00:00",
            "last_fetch_at": "2021-06-21T23:27:07+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.com/trade/BNB/BTC",
            "token_info_url": null,
            "coin_id": "binancecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "BKEX",
                "identifier": "bkex",
                "has_trading_incentive": false
            },
            "last": 32049.77,
            "volume": 14233.8322,
            "converted_last": {
                "btc": 1.014795,
                "eth": 17.008663,
                "usd": 32160
            },
            "converted_volume": {
                "btc": 14444,
                "eth": 242098,
                "usd": 457755252
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.913664,
            "timestamp": "2021-06-21T23:22:04+00:00",
            "last_traded_at": "2021-06-21T23:22:04+00:00",
            "last_fetch_at": "2021-06-21T23:22:04+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bkex.com/#/trade/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "BigONE",
                "identifier": "bigone",
                "has_trading_incentive": false
            },
            "last": 31798.05,
            "volume": 7779.555122,
            "converted_last": {
                "btc": 1.006825,
                "eth": 16.84908,
                "usd": 31862
            },
            "converted_volume": {
                "btc": 7833,
                "eth": 131078,
                "usd": 247871844
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.013531,
            "timestamp": "2021-06-21T23:23:54+00:00",
            "last_traded_at": "2021-06-21T23:23:54+00:00",
            "last_fetch_at": "2021-06-21T23:23:54+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://big.one/trade/BTC-USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Crypto.com Exchange",
                "identifier": "crypto_com",
                "has_trading_incentive": false
            },
            "last": 31796.63,
            "volume": 3452.945409,
            "converted_last": {
                "btc": 1.00678,
                "eth": 16.800264,
                "usd": 31860
            },
            "converted_volume": {
                "btc": 3476,
                "eth": 58010,
                "usd": 110011962
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.06212,
            "timestamp": "2021-06-21T23:26:39+00:00",
            "last_traded_at": "2021-06-21T23:26:39+00:00",
            "last_fetch_at": "2021-06-21T23:26:39+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://crypto.com/exchange/trade/spot/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "Coinbase Exchange",
                "identifier": "gdax",
                "has_trading_incentive": false
            },
            "last": 0.06029,
            "volume": 31904.46760457,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.584216,
                "usd": 31755
            },
            "converted_volume": {
                "btc": 1924,
                "eth": 31900,
                "usd": 61081455
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.016584,
            "timestamp": "2021-06-21T23:33:46+00:00",
            "last_traded_at": "2021-06-21T23:33:46+00:00",
            "last_fetch_at": "2021-06-21T23:33:46+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.coinbase.com/trade/ETH-BTC",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "LTC",
            "target": "BTC",
            "market": {
                "name": "Changelly PRO",
                "identifier": "changelly",
                "has_trading_incentive": false
            },
            "last": 0.0039961,
            "volume": 115695.826,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.762512,
                "usd": 31605
            },
            "converted_volume": {
                "btc": 462.332,
                "eth": 7750,
                "usd": 14611775
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.052583,
            "timestamp": "2021-06-21T23:20:13+00:00",
            "last_traded_at": "2021-06-21T23:20:13+00:00",
            "last_fetch_at": "2021-06-21T23:20:13+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.changelly.com",
            "token_info_url": null,
            "coin_id": "litecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "BTSE",
                "identifier": "btse",
                "has_trading_incentive": false
            },
            "last": 31606.5,
            "volume": 5105.755992959715,
            "converted_last": {
                "btc": 1.000063,
                "eth": 16.763573,
                "usd": 31607
            },
            "converted_volume": {
                "btc": 5106,
                "eth": 85591,
                "usd": 161375077
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.030011,
            "timestamp": "2021-06-21T23:20:21+00:00",
            "last_traded_at": "2021-06-21T23:20:21+00:00",
            "last_fetch_at": "2021-06-21T23:20:21+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.btse.com/en/trading/BTC-USD",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "JPY",
            "market": {
                "name": "Coincheck",
                "identifier": "coincheck",
                "has_trading_incentive": false
            },
            "last": 3508526.0,
            "volume": 7479.05261203,
            "converted_last": {
                "btc": 1.004876,
                "eth": 16.81647,
                "usd": 31800
            },
            "converted_volume": {
                "btc": 7516,
                "eth": 125771,
                "usd": 237836042
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.035283,
            "timestamp": "2021-06-21T23:23:48+00:00",
            "last_traded_at": "2021-06-21T23:23:48+00:00",
            "last_fetch_at": "2021-06-21T23:23:48+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Phemex",
                "identifier": "phemex",
                "has_trading_incentive": false
            },
            "last": 31801.54,
            "volume": 7498.38940352,
            "converted_last": {
                "btc": 1.006935,
                "eth": 16.876929,
                "usd": 31824
            },
            "converted_volume": {
                "btc": 7550,
                "eth": 126550,
                "usd": 238628358
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.173269,
            "timestamp": "2021-06-21T23:21:22+00:00",
            "last_traded_at": "2021-06-21T23:21:22+00:00",
            "last_fetch_at": "2021-06-21T23:21:22+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://phemex.com/spot/trade/BTCUSDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "AlterDice",
                "identifier": "alterdice",
                "has_trading_incentive": false
            },
            "last": 0.060162,
            "volume": 1532.22229261,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.760685,
                "usd": 31691
            },
            "converted_volume": {
                "btc": 92.182,
                "eth": 1545,
                "usd": 2921306
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.03161,
            "timestamp": "2021-06-21T23:22:08+00:00",
            "last_traded_at": "2021-06-21T23:22:08+00:00",
            "last_fetch_at": "2021-06-21T23:22:08+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": null,
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Kraken",
                "identifier": "kraken",
                "has_trading_incentive": false
            },
            "last": 31598.0,
            "volume": 897.13127632,
            "converted_last": {
                "btc": 1.000491,
                "eth": 16.771036,
                "usd": 31663
            },
            "converted_volume": {
                "btc": 897.572,
                "eth": 15046,
                "usd": 28405446
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.046228,
            "timestamp": "2021-06-21T23:19:58+00:00",
            "last_traded_at": "2021-06-21T23:19:58+00:00",
            "last_fetch_at": "2021-06-21T23:19:58+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://trade.kraken.com/markets/kraken/btc/usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USD",
            "market": {
                "name": "Tokenize",
                "identifier": "tokenize",
                "has_trading_incentive": false
            },
            "last": 31827.95,
            "volume": 1.9790261812127392,
            "converted_last": {
                "btc": 1.005757,
                "eth": 16.783192,
                "usd": 31828
            },
            "converted_volume": {
                "btc": 1.990419,
                "eth": 33.214377,
                "usd": 62988
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.234765,
            "timestamp": "2021-06-21T23:26:40+00:00",
            "last_traded_at": "2021-06-21T23:26:40+00:00",
            "last_fetch_at": "2021-06-21T23:26:40+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://tokenize.exchange/market/USD-BTC",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "QC",
            "market": {
                "name": "ZB",
                "identifier": "zb",
                "has_trading_incentive": false
            },
            "last": 204953.94,
            "volume": 9404.5031,
            "converted_last": {
                "btc": 0.99856247,
                "eth": 16.874744,
                "usd": 31677
            },
            "converted_volume": {
                "btc": 9391,
                "eth": 158699,
                "usd": 297907949
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.13407,
            "timestamp": "2021-06-21T22:54:20+00:00",
            "last_traded_at": "2021-06-21T22:54:20+00:00",
            "last_fetch_at": "2021-06-21T22:54:20+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://trans.zb.com/btcqc",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "qcash"
        },
        {
            "base": "LTC",
            "target": "BTC",
            "market": {
                "name": "HitBTC",
                "identifier": "hitbtc",
                "has_trading_incentive": false
            },
            "last": 0.0040262,
            "volume": 115845.07,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.705112,
                "usd": 31654
            },
            "converted_volume": {
                "btc": 466.415,
                "eth": 7792,
                "usd": 14763948
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.104242,
            "timestamp": "2021-06-21T23:24:38+00:00",
            "last_traded_at": "2021-06-21T23:24:38+00:00",
            "last_fetch_at": "2021-06-21T23:24:38+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hitbtc.com/LTC-to-BTC",
            "token_info_url": null,
            "coin_id": "litecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "BUSD",
            "market": {
                "name": "Bitcoin.com Exchange",
                "identifier": "bitcoin_com",
                "has_trading_incentive": false
            },
            "last": 31420.88,
            "volume": 3.22656,
            "converted_last": {
                "btc": 0.99653885,
                "eth": 16.676943,
                "usd": 31536
            },
            "converted_volume": {
                "btc": 3.215392,
                "eth": 53.809,
                "usd": 101754
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.146651,
            "timestamp": "2021-06-21T23:23:47+00:00",
            "last_traded_at": "2021-06-21T23:23:47+00:00",
            "last_fetch_at": "2021-06-21T23:23:47+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://exchange.bitcoin.com/exchange/BTC-to-BUSD",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "binance-usd"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "BW.com",
                "identifier": "bw",
                "has_trading_incentive": false
            },
            "last": 31500.0,
            "volume": 1874.0127,
            "converted_last": {
                "btc": 0.99598444,
                "eth": 16.829827,
                "usd": 31581
            },
            "converted_volume": {
                "btc": 1866,
                "eth": 31539,
                "usd": 59182689
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.21594,
            "timestamp": "2021-06-21T22:55:19+00:00",
            "last_traded_at": "2021-06-21T22:55:19+00:00",
            "last_fetch_at": "2021-06-21T22:55:19+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bw.com/trade/btc_usdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Binance US",
                "identifier": "binance_us",
                "has_trading_incentive": false
            },
            "last": 31633.26,
            "volume": 3369.2365802353406,
            "converted_last": {
                "btc": 1.001607,
                "eth": 16.789453,
                "usd": 31655
            },
            "converted_volume": {
                "btc": 3375,
                "eth": 56568,
                "usd": 106654180
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.039435,
            "timestamp": "2021-06-21T23:20:19+00:00",
            "last_traded_at": "2021-06-21T23:20:19+00:00",
            "last_fetch_at": "2021-06-21T23:20:19+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.us/en/trade/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "LTC",
            "target": "BTC",
            "market": {
                "name": "FTX.US",
                "identifier": "ftx_us",
                "has_trading_incentive": false
            },
            "last": 0.0040215,
            "volume": 481.8085888350118,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.687125,
                "usd": 31646
            },
            "converted_volume": {
                "btc": 1.937593,
                "eth": 32.33286,
                "usd": 61317
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.503543,
            "timestamp": "2021-06-21T23:26:36+00:00",
            "last_traded_at": "2021-06-21T23:26:36+00:00",
            "last_fetch_at": "2021-06-21T23:26:36+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://ftx.us/trade/LTC/BTC",
            "token_info_url": null,
            "coin_id": "litecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "DOGE",
            "target": "BTC",
            "market": {
                "name": "Binance",
                "identifier": "binance",
                "has_trading_incentive": false
            },
            "last": 5.72e-06,
            "volume": 1162883280.867133,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.835389,
                "usd": 31611
            },
            "converted_volume": {
                "btc": 6652,
                "eth": 111984,
                "usd": 210268714
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.16,
            "timestamp": "2021-06-21T23:11:42+00:00",
            "last_traded_at": "2021-06-21T23:11:42+00:00",
            "last_fetch_at": "2021-06-21T23:11:42+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.binance.com/en/trade/DOGE_BTC?ref=37754157",
            "token_info_url": null,
            "coin_id": "dogecoin",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "ETH",
            "target": "BTC",
            "market": {
                "name": "VCC Exchange",
                "identifier": "vcc",
                "has_trading_incentive": false
            },
            "last": 0.060178,
            "volume": 3899.012,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.589494,
                "usd": 31681
            },
            "converted_volume": {
                "btc": 234.635,
                "eth": 3892,
                "usd": 7433485
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.011659,
            "timestamp": "2021-06-21T23:32:39+00:00",
            "last_traded_at": "2021-06-21T23:32:39+00:00",
            "last_fetch_at": "2021-06-21T23:32:39+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://vcc.exchange/exchange/basic?currency=btc&coin=eth",
            "token_info_url": null,
            "coin_id": "ethereum",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "EOS",
            "target": "BTC",
            "market": {
                "name": "Changelly PRO",
                "identifier": "changelly",
                "has_trading_incentive": false
            },
            "last": 0.00011324,
            "volume": 2252950.94,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.762512,
                "usd": 31605
            },
            "converted_volume": {
                "btc": 255.124,
                "eth": 4277,
                "usd": 8063072
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.070728,
            "timestamp": "2021-06-21T23:20:13+00:00",
            "last_traded_at": "2021-06-21T23:20:13+00:00",
            "last_fetch_at": "2021-06-21T23:20:13+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.changelly.com",
            "token_info_url": null,
            "coin_id": "eos",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "GBP",
            "market": {
                "name": "Coinbase Exchange",
                "identifier": "gdax",
                "has_trading_incentive": false
            },
            "last": 22935.64,
            "volume": 4323.96571811,
            "converted_last": {
                "btc": 1.006091,
                "eth": 16.659994,
                "usd": 31948
            },
            "converted_volume": {
                "btc": 4350,
                "eth": 72037,
                "usd": 138144048
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.058244,
            "timestamp": "2021-06-21T23:34:04+00:00",
            "last_traded_at": "2021-06-21T23:34:04+00:00",
            "last_fetch_at": "2021-06-21T23:34:04+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://pro.coinbase.com/trade/BTC-GBP",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "EOS",
            "target": "BTC",
            "market": {
                "name": "HitBTC",
                "identifier": "hitbtc",
                "has_trading_incentive": false
            },
            "last": 0.00011324,
            "volume": 2258256.25,
            "converted_last": {
                "btc": 1.0,
                "eth": 16.762018,
                "usd": 31647
            },
            "converted_volume": {
                "btc": 255.725,
                "eth": 4286,
                "usd": 8092921
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.053055,
            "timestamp": "2021-06-21T23:18:05+00:00",
            "last_traded_at": "2021-06-21T23:18:05+00:00",
            "last_fetch_at": "2021-06-21T23:18:05+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://hitbtc.com/EOS-to-BTC",
            "token_info_url": null,
            "coin_id": "eos",
            "target_coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Gate.io",
                "identifier": "gate",
                "has_trading_incentive": false
            },
            "last": 31610.39,
            "volume": 4317.373156046,
            "converted_last": {
                "btc": 1.000883,
                "eth": 16.777612,
                "usd": 31675
            },
            "converted_volume": {
                "btc": 4321,
                "eth": 72435,
                "usd": 136752558
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.011964,
            "timestamp": "2021-06-21T23:19:16+00:00",
            "last_traded_at": "2021-06-21T23:19:16+00:00",
            "last_fetch_at": "2021-06-21T23:19:16+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://gate.io/trade/BTC_USDT",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "USDT",
            "market": {
                "name": "Bitrue",
                "identifier": "bitrue",
                "has_trading_incentive": false
            },
            "last": 31578.44,
            "volume": 9554.4525,
            "converted_last": {
                "btc": 0.99987145,
                "eth": 16.760654,
                "usd": 31643
            },
            "converted_volume": {
                "btc": 9553,
                "eth": 160139,
                "usd": 302330871
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.025043,
            "timestamp": "2021-06-21T23:19:29+00:00",
            "last_traded_at": "2021-06-21T23:19:29+00:00",
            "last_fetch_at": "2021-06-21T23:19:29+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://www.bitrue.com/trading?market=usdt&symbol=btcusdt",
            "token_info_url": null,
            "coin_id": "bitcoin",
            "target_coin_id": "tether"
        },
        {
            "base": "BTC",
            "target": "SGD",
            "market": {
                "name": "Tokenize",
                "identifier": "tokenize",
                "has_trading_incentive": false
            },
            "last": 42902.34,
            "volume": 300.9282247703603,
            "converted_last": {
                "btc": 1.009385,
                "eth": 16.84374,
                "usd": 31943
            },
            "converted_volume": {
                "btc": 303.753,
                "eth": 5069,
                "usd": 9612482
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.424877,
            "timestamp": "2021-06-21T23:26:41+00:00",
            "last_traded_at": "2021-06-21T23:26:41+00:00",
            "last_fetch_at": "2021-06-21T23:26:41+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://tokenize.exchange/market/SGD-BTC",
            "token_info_url": null,
            "coin_id": "bitcoin"
        },
        {
            "base": "BTC",
            "target": "JPY",
            "market": {
                "name": "GMO Japan",
                "identifier": "gmo_japan",
                "has_trading_incentive": false
            },
            "last": 3508850.0,
            "volume": 828.2707,
            "converted_last": {
                "btc": 1.00503,
                "eth": 16.771067,
                "usd": 31805
            },
            "converted_volume": {
                "btc": 832.437,
                "eth": 13891,
                "usd": 26343113
            },
            "trust_score": "green",
            "bid_ask_spread_percentage": 0.052785,
            "timestamp": "2021-06-21T23:26:39+00:00",
            "last_traded_at": "2021-06-21T23:26:39+00:00",
            "last_fetch_at": "2021-06-21T23:26:39+00:00",
            "is_anomaly": false,
            "is_stale": false,
            "trade_url": "https://coin.z.com/jp/corp/information/btc-market/",
            "token_info_url": null,
            "coin_id": "bitcoin"
        }
    ]
}
```
	
</details>

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
