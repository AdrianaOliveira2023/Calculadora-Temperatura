function converterTemperatura() {
    // Elementos de entrada
    var temperaturaInput = document.getElementById("temperature");
    var unidadeSelect = document.getElementById("unit");
    var resultadoDiv = document.getElementById("result");

    // Obtem o valor e a unidade selecionada
    var temperatura = parseFloat(temperaturaInput.value);
    var unidade = unidadeSelect.value;

    // Verifica se a entrada é válida
    if (isNaN(temperatura)) {
      resultadoDiv.innerHTML = "Por favor, insira uma temperatura válida.";
      return;
    }

    // Converte a temperatura
    var resultado;
    if (unidade === "celsius") {
      resultado = " Resultado em fahrenheit " + (temperatura * 9/5 + 32).toFixed(2) + " °F";
    } else if (unidade === "fahrenheit") {
      resultado = " Resultado em celsius: " + ((temperatura - 32) * 5/9).toFixed(2) + " °C";
    }

    // Exibi o resultado
    resultadoDiv.innerHTML = resultado;
  }
