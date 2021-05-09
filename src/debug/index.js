var a = "Hello";

function hello() {
    let b = 'Hello Wold'
    const c = 'Hello World¡'
    if (true) {
        let d = 'Hellio Wordl¡¡'
        debugger
    }
}

hello()

////////////////////////////////////////////////////


const moneyBox = () => {
    debugger
    var saveCoins = 0
    const CountCoins = (coins) =>{
        debugger
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return CountCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(4)  
myMoneyBox(6)  
myMoneyBox(10) 