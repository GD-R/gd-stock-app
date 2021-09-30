let intialPrice = document.querySelector("#intial_price");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#current_price");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");

function clickAction() {
    let ip = Number(intialPrice.value);
    let quant = Number(quantity.value);
    let cp = Number(currentPrice.value);
    calculate(ip, quant, cp);
}


function calculate(intial, quantities, current) {
    if(intial > current) {

        let loss = (intial - current) * quantities;
        let lossPersent = (loss / intial) * 100;
        output.style.color = "red";
        message(`The loss is ${loss} and the loss percentage is ${lossPersent}`);
    }
    else if(current > intial) {
        let profit = (current - intial) * quantities;
        let profitPersent = (profit / intial) * 100;
        output.style.color = "green";
        message(`The profit is ${profit} and the profit percentage is ${profitPersent}`);
    }
    else {
        output.style.color = "yellow";
        message(`Thers is no Loss or Profit`)
    }
}

function message(msg) {
    output.innerHTML = msg;
}

btn.addEventListener("click", clickAction)