// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str){
  return str;
  }
  var miNombre= 'Fernando';
  alert("Mi nombre es: " + miNombre);
  
  function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    suma = x+y;
    return suma;
  }
  var oper = suma(20,30);
  alert(oper);
  
  function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    resta = y - x;
    return resta;
  }
  var res = resta(50,30);
  alert("La resta es: " + res);
  
  function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    multiplica = x * y;
    return multiplica;
  }
  var multi = multiplica(5,9);
  alert("La multiplicacion es: " + multi);
  
  function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    divide = x / y;
    return divide;
  }
  var divi = divide(20,4);
  alert("La division es: " + divi);
  
  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    if(x === y){
      return true;
    }
    else{
      return false;
    }
  }
  var comparar = sonIguales(25,25);
  alert(comparar);
  
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.length === str2.length){
      return true;
    }
    else{
      return false;
    }
  }
  var igual = tienenMismaLongitud('Marcos', 'Diana')
  alert(igual);
  
  
  function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num < 90){
      return true;

    }
    else{
      return false;
    }
  }
  var menos = menosQueNoventa(800);
  alert(menos);
  
  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num > 50){
      return true;
    }
    else{
      return false;
    }
  }
  var mas = mayorQueCincuenta(60);
  alert(mas);
  
  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    resto = x % y;
    return resto;
  }
  var resto = obtenerResto(15, 8);
  alert(resto);
  
  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num % 2 === 0){
      return true;
    }
    else{
      return false;
    }
  }
  var validar = esPar(15);
  alert(validar);
  
  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num % 2 !==0){
      return true;
    }
    else{
      return false;
    }
  }
  var validar = esImpar(15);
  alert(validar);
  
  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    cuadrado = Math.pow(num,2);
    return cuadrado;
  }
  var potencia = elevarAlCuadrado(12);
  alert(potencia);
  
  function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    cubo = Math.pow(num,3);
    return cubo;
  }
  var potencia = elevarAlCubo(5);
  console.log(potencia);
  
  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    elevar = Math.pow(num, exponent);
    return elevar;
  }
  var eleva = elevar(5, 3);
  alert(eleva);
  
  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    redondearNumero = Math.round(num);
    return redondearNumero;
  }
  var redon = redondearNumero(6.5);
  alert(redon);
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    redondearHaciaArriba = Math.ceil(num);
    return redondearHaciaArriba;
  }
  var redon = redondearHaciaArriba(6.001);
  console.log(redon);
  
  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:
  }
  
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    if(numero > 0){
      return ("Es positivo");
    }
    else if(numero < 0){
      return ("Es negativo");
    }
    else{
      return false;
    }
  }
  var num = esPositivo(10);
  alert(num);
  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
  }
  
  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
  }
  
  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
  }
  
  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
  }
  
  function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
  }
  
  function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
  }
  
  function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
  }
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
  };