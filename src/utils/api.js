// Proxy Server is used to avoid cors issue

const proxy = (url) => `https://cors-anywhere.herokuapp.com/${url}`

const APIBase = 'https://api.bitfinex.com/v1/'

export const getUrl = (action) => `${proxy(APIBase)}${action}`
