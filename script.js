function calcular() {
    let altura = document.getElementById("alt");
    let peso = document.getElementById("peso");
    var res = document.getElementById("res");
  
    var a = Number(altura.value);
    var p = Number(peso.value);
    a = a / 100;
    let imc = p / (a * a);
    let im = imc.toFixed(2);
  
    if (imc < 17) {
      res.innerText = `${im} - MUITO ABAIXO DO PESO!`;
      res.style.background = "red";
    }
    if (imc >= 17 && imc <= 18.49) {
      res.innerText = `${im} - ABAIXO DO PESO!`;
      res.style.background = "yellow";
    }
    if (imc >= 18.5 && imc <= 24.99) {
      res.innerText = `${im} - PESO NORMAL!`;
      res.style.background = "blue";
    }
    if (imc >= 25 && imc <= 29.99) {
      res.innerText = `${im} - ACIMA DO PESO!`;
      res.style.background = "yellow";
    }
    if (imc >= 30 && imc <= 34.99) {
      res.innerText = `${im} - OBESIDADE NÍVEL 1!`;
      res.style.background = "red";
    }
    if (imc >= 35 && imc <= 39.99) {
      res.innerText = `${im} - OBESIDADE NÍVEL 2!`;
      res.style.background = "red";
    }
  }