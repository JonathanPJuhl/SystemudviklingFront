const URL = "http://localhost:8080/sys/api/";
//const URL = "ipwithme.com/tomcat/sys/api/"

const adminURL = URL + "user/admin";
const userURL = URL + "user/user";
const createUserURL = URL + "user/create";
const fiveThingsURL = URL + "5things/teachersSolution";
const loginURL = URL + "login";
const pinStock = URL + "stock/pin"
const pinnedStocks = URL + "stock/pinned/"
const top5 = URL + "stock/filldbwithdailyratings/"
const makeChart = URL + "stock/makechart/"
export {adminURL, userURL, fiveThingsURL, loginURL, createUserURL, pinStock, pinnedStocks, top5, makeChart};