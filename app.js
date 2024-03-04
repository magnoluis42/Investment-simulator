function main(){
    calculateCapitalization();
    exponentialConvention();
    linearConvention();
}
function calculateCapitalization() {
    const investment = parseFloat(document.getElementById("value").value);
    const time = parseFloat(document.getElementById("time").value);
    const rate = parseFloat(document.getElementById("rate").value);
    console.log(time);
    const euler = Math.E;
    let rateInDecimal = rate/100;

    let res = (investment) * Math.exp(rateInDecimal * time)

    document.getElementById("result-1").textContent = "O valor do seu investimento após " + time + " anos será de R$" + res.toFixed(2);
}


function exponentialConvention() {
    const investment = parseFloat(document.getElementById("value").value);
    const time = parseFloat(document.getElementById("time").value);
    const rate = parseFloat(document.getElementById("rate").value);

    let result = investment * Math.pow(1 + (rate / 100), time);
    console.log(result);

    document.getElementById("result-2").textContent = "O valor do seu investimento após " + time + " anos será de R$" + result.toFixed(2);
}

function linearConvention(){
    const investment = parseFloat(document.getElementById("value").value);
    const time = parseFloat(document.getElementById("time").value);
    const rate = parseFloat(document.getElementById("rate").value);

    let rateInDecimal = rate/100;
    let intPart = Math.floor(time);
    let fractionalPart = time - intPart;
    console.log(intPart);
    console.log(fractionalPart);

    //let result = (investment) * (1 + rateInDecimal * time);
    //let montanteComposto = (investment) * Math.pow(1 + rateInDecimal)**intPart;
    let compound = investment * Math.pow(1 + rateInDecimal, intPart) * Math.pow(1 + rateInDecimal, fractionalPart);
    const simple = 1 + (rate * fractionalPart);

    const result = compound + simple;

    document.getElementById("result-3").textContent = "O valor do seu investimento após " + time + " anos será de R$" + result.toFixed(2);
    console.log(result)
}

