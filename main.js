console.log("Main.js working")

const populate = async(value,currency) =>{
    let myStr=""
url="https://api.currencyapi.com/v3/latest?apikey=cur_live_WZDgxYxkrc3GgllanT4Woas1dHCvyc4vBcTbvzby&base_currency="+currency
let response = await fetch(url)
let rJson = await response.json()
document.querySelector(".output").computedStyleMap.display="block"

//let rJson = JSON.parse(`"data":{"ADA":{"code":"ADA","value":2.6416443068},
                      // "AED":{"code":"AED","value":3.6726104749},
                      // "AFN":{"code":"AFN","value":69.2270107145},
                      // "ALL":{"code":"ALL","value":95.2294324978},
                      // "AMD":{"code":"AMD","value":400.8811510955},
                      // "ANG":{"code":"ANG","value":1.7863303468},
                      // "AOA":{"code":"AOA","value":824.8970226983},
                      // "ARB":{"code":"ARB","value":0.9665133469},
                      // "ARS":{"code":"ARS","value":353.9978565076},
                      // "AUD":{"code":"AUD","value":1.5347503018},
                      // "AVAX":{"code":"AVAX","value":0.0453877001},
                      // "AWG":{"code":"AWG","value":1.79},
                      // "AZN":{"code":"AZN","value":1.7},
                      // "BAM":{"code":"BAM","value":1.7954203454},
                      // "BBD":{"code":"BBD","value":2},
                      // "BDT":{"code":"BDT","value":110.5659100943},
                      // "BGN":{"code":"BGN","value":1.7897803319},
                      // "BHD":{"code":"BHD","value":0.376},
                      // "BIF":{"code":"BIF","value":2843.0648946524},
                      // "BMD":{"code":"BMD","value":1},
                      // "BNB":{"code":"BNB","value":0.0040507932},
                      // "BND":{"code":"BND","value":1.3419401649},
                      // "BOB":{"code":"BOB","value":6.9248713399},
                      // "BRL":{"code":"BRL","value":4.9060207883},
                      // "BSD":{"code":"BSD","value":1},
                      // "BTC":{"code":"BTC","value":2.71856e-5},
                      // "BTN":{"code":"BTN","value":83.106784336},
                      // "BUSD":{"code":"BUSD","value":0.9971786377},
                      // "BWP":{"code":"BWP","value":13.4017626068},
                      // "BYN":{"code":"BYN","value":3.2950059706},
                      // "BYR":{"code":"BYR","value":32950.063364295},
                      // "BZD":{"code":"BZD","value":2},
                      // "CAD":{"code":"CAD","value":1.3718202276},
                      // "CDF":{"code":"CDF","value":2480.9982213116},
                      // "CHF":{"code":"CHF","value":0.8857301696},
                      // "CLF":{"code":"CLF","value":0.0237700026},
                      // "CLP":{"code":"CLP","value":882.0557312092},
                      // "CNY":{"code":"CNY","value":7.2100709613},
                      // "COP":{"code":"COP","value":4068.0006156828},
                      // "CRC":{"code":"CRC","value":535.2160982809},
                      // "CUC":{"code":"CUC","value":1},
                      // "CUP":{"code":"CUP","value":24},
                      // "CVE":{"code":"CVE","value":101.0440044134},
                      // "CZK":{"code":"CZK","value":22.4513326677},
                      // "DAI":{"code":"DAI","value":0.9979508398},
                      // "DJF":{"code":"DJF","value":177.721},
                      // "DKK":{"code":"DKK","value":6.8334207645},
                      // "DOP":{"code":"DOP","value":56.9020607081},
                      // "DOT":{"code":"DOT","value":0.1885543775},
                      // "DZD":{"code":"DZD","value":134.9468159558},
                      // "EGP":{"code":"EGP","value":30.9514736687},
                      // "ERN":{"code":"ERN","value":15},
                      // "ETB":{"code":"ETB","value":55.7879356958},
                      // "ETH":{"code":"ETH","value":0.0005078924},
                      // "EUR":{"code":"EUR","value":0.9162601604},
                      // "FJD":{"code":"FJD","value":2.276930284},
                      // "FKP":{"code":"FKP","value":0.8027409868},
                      // "GBP":{"code":"GBP","value":0.80245015},
                      // "GEL":{"code":"GEL","value":2.6880804126},
                      // "GGP":{"code":"GGP","value":0.8027409917},
                      // "GHS":{"code":"GHS","value":11.9036623008},
                      // "GIP":{"code":"GIP","value":0.8027406834},
                      // "GMD":{"code":"GMD","value":59.4409369647},
                      // "GNF":{"code":"GNF","value":8551.7355321908},
                      // "GTQ":{"code":"GTQ","value":7.8199210824},
                      // "GYD":{"code":"GYD","value":209.2025468092},
                      // "HKD":{"code":"HKD","value":7.7930210132},
                      // "HNL":{"code":"HNL","value":24.6916235756},
                      // "HRK":{"code":"HRK","value":7.042900927},
                      // "HTG":{"code":"HTG","value":133.4911639085},
                      // "HUF":{"code":"HUF","value":346.9146101474},
                      // "IDR":{"code":"IDR","value":15477.782099284},
                      // "ILS":{"code":"ILS","value":3.7166904346},
                      // "IMP":{"code":"IMP","value":0.8027413748},
                      // "INR":{"code":"INR","value":83.2295613429},
                      // "IQD":{"code":"IQD","value":1307.0265209564},
                      // "IRR":{"code":"IRR","value":42010.792620184},
                      // "ISK":{"code":"ISK","value":140.452447484},
                      // "JEP":{"code":"JEP","value":0.8027407212},
                      // "JMD":{"code":"JMD","value":157.21408063},
                      // "JOD":{"code":"JOD","value":0.71},
                      // "JPY":{"code":"JPY","value":149.6284816012},
                      // "KES":{"code":"KES","value":152.4253069668},
                      // "KGS":{"code":"KGS","value":88.9157470482},
                      // "KHR":{"code":"KHR","value":4114.454443022},
                      // "KMF":{"code":"KMF","value":452.8744446216},
                      // "KPW":{"code":"KPW","value":899.9125046664},
                      // "KRW":{"code":"KRW","value":1293.0397098502},
                      // "KWD":{"code":"KWD","value":0.3083000432},
                      // "KYD":{"code":"KYD","value":0.83333},
                      // "KZT":{"code":"KZT","value":460.8708664968},
                      // "LAK":{"code":"LAK","value":20735.690441168},
                      // "LBP":{"code":"LBP","value":15011.718510424},
                      // "LKR":{"code":"LKR","value":325.1200276546},
                      // "LRD":{"code":"LRD","value":187.9062678974},
                      // "LSL":{"code":"LSL","value":18.3535324215},
                      // "LTC":{"code":"LTC","value":0.0143134104},
                      // "LTL":{"code":"LTL","value":3.1645570751},
                      // "LVL":{"code":"LVL","value":0.6441294516},
                      // "LYD":{"code":"LYD","value":4.8432307469},
                      // "MAD":{"code":"MAD","value":10.1457315198},
                      // "MATIC":{"code":"MATIC","value":1.1995658225},
                      // "MDL":{"code":"MDL","value":17.7223233562},
                      // "MGA":{"code":"MGA","value":4478.9524161222},
                      // "MKD":{"code":"MKD","value":56.6321959572},
                      // "MMK":{"code":"MMK","value":2094.9304641926},
                      // "MNT":{"code":"MNT","value":3444.1198867967},
                      // "MOP":{"code":"MOP","value":8.0226013872},
                      // "MRO":{"code":"MRO","value":356.999828},
                      // "MUR":{"code":"MUR","value":44.156067859},
                      // "MVR":{"code":"MVR","value":15.4521827896},
                      // "MWK":{"code":"MWK","value":1683.488938251},
                      // "MXN":{"code":"MXN","value":17.2225524097},
                      // "MYR":{"code":"MYR","value":4.6785206862},
                      // "MZN":{"code":"MZN","value":63.6896922463},
                      // "NAD":{"code":"NAD","value":18.2910225878},
                      // "NGN":{"code":"NGN","value":840.1676811105},
                      // "NIO":{"code":"NIO","value":36.4174189238},
                      // "NOK":{"code":"NOK","value":10.8047020794},
                      // "NPR":{"code":"NPR","value":132.4006345491},
                      // "NZD":{"code":"NZD","value":1.6687603269},
                      // "OMR":{"code":"OMR","value":0.3841100679},
                      // "OP":{"code":"OP","value":0.5739849685},
                      // "PAB":{"code":"PAB","value":0.9989201278},
                      // "PEN":{"code":"PEN","value":3.7731506315},
                      // "PGK":{"code":"PGK","value":3.7053504944},
                      // "PHP":{"code":"PHP","value":55.5590804168},
                      // "PKR":{"code":"PKR","value":287.0661084841},"PLN":{"code":"PLN","value":4.0172404784},"PYG":{"code":"PYG","value":7458.875261073},"QAR":{"code":"QAR","value":3.6403605242},"RON":{"code":"RON","value":4.5524205447},"RSD":{"code":"RSD","value":107.058381586},"RUB":{"code":"RUB","value":89.6764664709},"RWF":{"code":"RWF","value":1233.4336058955},"SAR":{"code":"SAR","value":3.7425807461},"SBD":{"code":"SBD","value":8.4033497293},"SCR":{"code":"SCR","value":14.6226118045},"SDG":{"code":"SDG","value":601.5},"SEK":{"code":"SEK","value":10.5183018578},"SGD":{"code":"SGD","value":1.3418002082},"SHP":{"code":"SHP","value":0.8024501159},"SLL":{"code":"SLL","value":22444.353436279},"SOL":{"code":"SOL","value":0.0170609446},"SOS":{"code":"SOS","value":570.3278209256},"SRD":{"code":"SRD","value":38.2112571174},"STD":{"code":"STD","value":22499.201833116},"SVC":{"code":"SVC","value":8.75},"SYP":{"code":"SYP","value":13001.869444245},"SZL":{"code":"SZL","value":18.3253636454},"THB":{"code":"THB","value":35.1040045329},"TJS":{"code":"TJS","value":10.9017213291},"TMT":{"code":"TMT","value":3.5},"TND":{"code":"TND","value":3.1069303766},"TOP":{"code":"TOP","value":2.3749202647},"TRY":{"code":"TRY","value":28.6908830825},"TTD":{"code":"TTD","value":6.7630212743},"TWD":{"code":"TWD","value":31.7782363514},"TZS":{"code":"TZS","value":2495.498703795},"UAH":{"code":"UAH","value":36.696305423},"UGX":{"code":"UGX","value":3779.9362187837},"USD":{"code":"USD","value":1},"USDC":{"code":"USDC","value":0.9989553002},"USDT":{"code":"USDT","value":0.9974262154},"UYU":{"code":"UYU","value":39.6090563066},"UZS":{"code":"UZS","value":12233.467899392},"VEF":{"code":"VEF","value":3535128.9866943},"VND":{"code":"VND","value":24246.821708055},"VUV":{"code":"VUV","value":120.3508959052},"WST":{"code":"WST","value":2.7639834029},"XAF":{"code":"XAF","value":601.0609510871},"XAG":{"code":"XAG","value":0.0421413473},"XAU":{"code":"XAU","value":0.0005048915},"XCD":{"code":"XCD","value":2.7},"XDR":{"code":"XDR","value":0.7505901295},"XOF":{"code":"XOF","value":601.0609286639},"XPD":{"code":"XPD","value":0.000949037},"XPF":{"code":"XPF","value":109.2771617415},"XPT":{"code":"XPT","value":0.0011032779},"XRP":{"code":"XRP","value":1.6248873428},"YER":{"code":"YER","value":249.8427554482},"ZAR":{"code":"ZAR","value":18.3354721638},"ZMK":{"code":"ZMK","value":9001.2},"ZMW":{"code":"ZMW","value":23.2543533343},"ZWL":{"code":"ZWL","value":5741.9024183958}}}`)
console.log(rJson)
for(let key of Object.keys(rJson["data"])){
    console.log(key)
    myStr += `
    <tr>
       <td>${key}</td>
       <td>${rJson["data"][key]["code"]}</td>
       <td>${Math.round(rJson["data"][key]["value"]*value)}</td>
    </tr>
    `
  
}
const tableBody=document.querySelector("tBody");
tableBody.innerHTML= myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;

    populate(value,currency)
})




