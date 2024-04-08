function resolverQuestao() {
    const select = document.getElementById("questoes");
    const questaoSelecionada = parseInt(select.value);
  
    switch (questaoSelecionada) {
      case 1:
        mostrarMensagem();
        break;
      case 2:
        calcularCubo();
        break;
      case 3:
        converterTemperatura();
        break;
      case 4:
        calcularAreaTriangulo();
        break;
      case 5:
        calcularAreaPerimetroCirculo();
        break;
      case 6:
        numeroInvertido();
        break;
      case 7:
        contarVogais();
        break;
      case 8:
        retornoInvestimento();
        break;
      case 9:
        calcularFatorial();
        break;
      case 10:
        contarCaractere();
        break;
      case 11:
        verificarNumeroPrimo();
        break;
      default:
        alert("Selecione uma questão para resolver.");
    }
  }
  
  function mostrarMensagem() {
    alert("Bom dia, Mundo!!!");
  }
  
  function calcularCubo() {
    const numero = prompt("Digite um número:");
    const cubo = Math.pow(parseInt(numero), 3);
    alert("O cubo do número é: " + cubo);
  }
  
  function converterTemperatura() {
    const fahrenheit = prompt("Digite a temperatura em Fahrenheit:");
    const celsius = (fahrenheit - 32) * (5/9);
    alert("A temperatura em Celsius é: " + celsius.toFixed(2));
  }
  
  function calcularAreaTriangulo() {
    const base = prompt("Digite o valor da base do triângulo:");
    const altura = prompt("Digite o valor da altura do triângulo:");
    const area = (base * altura) / 2;
    alert("A área do triângulo é: " + area);
  }
  
  function calcularAreaPerimetroCirculo() {
    const raio = prompt("Digite o raio do círculo:");
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;
    alert("A área do círculo é: " + area.toFixed(2) + "\nO perímetro do círculo é: " + perimetro.toFixed(2));
  }
  
  function numeroInvertido() {
    const numero = prompt("Digite um número:");
    const numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    alert("O número invertido é: " + numeroInvertido);
  }
  
  function contarVogais() {
    const frase = prompt("Digite uma frase:");
    const vogais = frase.match(/[aeiou]/gi);
    const totalVogais = vogais ? vogais.length : 0;
    alert("O total de vogais na frase é: " + totalVogais);
  }
  
  function retornoInvestimento() {
    const capitalInicial = prompt("Digite o capital inicial investido:");
    const taxaJuros = prompt("Digite a taxa de juros (em percentual):");
    const tempoInvestimento = prompt("Digite o tempo do investimento (em meses):");
    const montante = capitalInicial * Math.pow((1 + taxaJuros/100), tempoInvestimento);
    alert("O montante do investimento é: " + montante.toFixed(2));
  }
  
  function calcularFatorial() {
    const numero = prompt("Digite um número para calcular o fatorial:");
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    alert("O fatorial de " + numero + " é: " + fatorial);
  }
  
  function contarCaractere() {
    const frase = prompt("Digite uma frase:");
    const caractere = prompt("Digite o caractere para contar:");
    const ocorrencias = [...frase].filter(char => char === caractere).length;
    alert("O caractere '" + caractere + "' aparece " + ocorrencias + " vezes na frase.");
  }
  
  function verificarNumeroPrimo() {
    const numero = prompt("Digite um número para verificar se é primo:");
    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }
    if (numero <= 1) {
      primo = false;
    }
    alert(primo ? numero + " é primo." : numero + " não é primo.");
  }