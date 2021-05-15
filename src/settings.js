const URL = "http://localhost:8080/sys/api/";
//const URL = "/tomcat/sys/api/"

const adminURL = URL + "user/admin";
const userURL = URL + "user/user";
const createUserURL = URL + "user/create";
const fiveThingsURL = URL + "5things/teachersSolution";
const loginURL = URL + "login";
const pinStock = URL + "stock/pin"
const pinnedStocks = URL + "stock/pinned/"
const top5 = URL + "stock/filldbwithdailyratings/"
const makeChart = URL + "stock/makechart/"
const marketStackKey = "80f90dbc8de86858f292e8e8ff76293f"; 
const EOD = `https://api.marketstack.com/v1/eod?access_key=${marketStackKey}&symbols=`
const exchanges = `https://api.marketstack.com/v1/exchanges?access_key=${marketStackKey}`
const tickers = `https://api.marketstack.com/v1/tickers?access_key=${marketStackKey}`
const removePin = "stock/deletePin/"

export {adminURL, userURL, fiveThingsURL, loginURL, createUserURL, pinStock, pinnedStocks, top5, 
    makeChart, EOD, exchanges, tickers, removePin};