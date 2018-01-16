// ----------- EXERCICIO 01 - VARIAVEIS SIMPLES -----------

// var mes = prompt('Digite o mês do seu nascimento');
// var dia = prompt('Digite o dia do seu nascimento');
// var hora = prompt('Digite a hora do seu nascimento');
// var minutos = prompt('Digite os minutos do seu nascimento');

// var tudo = mes + ', ' + dia +  ', ' + hora + 'h e ' + minutos + 'min';

// document.write(tudo);



// ----------- EXERCICIO 02 - VARIAVEIS SIMPLES -----------

// var nasc = prompt('Digite o ano do seu nascimento');
// var anoAtual = prompt('Digite o ano atual');

// var idade = anoAtual - nasc;
// var idadeSem = (idade * 365) / 7;

// document.write(idade + ' anos, ou ' + idadeSem + ' semanas. ');


// ----------- EXERCICIO 03 - VARIAVEIS SIMPLES -----------

// var numero = prompt('Digite um número');

// document.write(numero * 2);

// ----------- EXERCICIO 04 - VARIAVEIS SIMPLES -----------

// var nome = prompt('Digite seu nome');
// var peso = parseFloat(prompt('Digite seu peso em kg'));
// var altura = prompt('Digite sua altura');

// var imc = peso / (altura ** 2);

// document.write(nome + ', seu IMC é ' + imc);

// ----------- EXERCICIO 05 - VARIAVEIS SIMPLES -----------

// var medida = prompt('Digite a medida em centímetros');
// medida = medida / 2.5;

// document.write(medida + 'polegada(s)');

// ----------- EXERCICIO 06 - VARIAVEIS SIMPLES -----------

// var medida = prompt('Digite a medida');
// medida = medida * 2.5;

// document.write(medida + ' centímetro(s)')

// ----------- EXERCICIO 07 - VARIAVEIS SIMPLES -----------

// var nome = prompt('Digite seu nome');
// var cargo = prompt('Digite seu cargo');
// var salario = parseFloat(prompt('Digite seu salário'));
// var novoSalario;

// novoSalario = salario * 0.1 + (salario);

// document.write(nome + ', ' + cargo + ', ganha ' + novoSalario);

// ----------- EXERCICIO 08 - IF SIMPLES -----------

// var nota1 = parseFloat(prompt('Digite sua primeira nota'));
// var nota2 = parseFloat(prompt('Digite sua segunda nota'));
// var nota3 = parseFloat(prompt('Digite sua terceira nota'));
// var nota4 = parseFloat(prompt('Digite sua quarta nota'));

// var media = (nota1 + nota2 + nota3 + nota4) / 4

// if(media >= 7.0){
//     alert('Aprovado!');
// } else {
//     alert('Reprovado!');
// }

// document.write('fim do programa');

// ----------- EXERCICIO 09 e 10 - IF SIMPLES -----------

// var sal = parseFloat(prompt('Digite seu salário em reais'));

// if(sal < 500){
//     sal = sal + (sal * 0.3);
//     document.write(sal);
// } else {
//     document.write('Desculpe, seu salário é igual ou superior a 500 reais.');
// }

// ----------- EXERCICIO 11 - IF ENCADEADO -----------

// var num = parseInt(prompt('Digite um número'));

// if(num < 0){
//     alert('NEGATIVO');
// } else if(num > 0){
//     alert('POSITIVO');
// } else{
//     alert('ZERO');
// }

// ----------- EXERCICIO 12 - IF SIMPLES -----------

// var num = parseFloat(prompt('Digite um número diferente de zero'));

// if(num % 2 == 0){
//     alert('Número par');
// } else{
//      alert('Número ímpar');
// } 

// ----------- EXERCICIO 13 - IF SIMPLES -----------

// var num = parseFloat(prompt('Digite um número diferente de zero'));

// if(num % 2 == 0){
//     document.write(num);
// } else{
//     document.write(' ');
// }

// ----------- EXERCICIO 14 - IF SIMPLES -----------

// var codigo = parseFloat(prompt('Digite: \n1 = Sul; \n2 = Norte; \n3 = Leste; \n4 = Oeste; \n5 ou 6 = Nordeste; \n7, 8 ou 9 = Sudeste; \n10 a 20 = Centro-Oeste, \n21 a 30 = Sem definição.'));

// if(codigo <= 0){
//     alert('Número negativo ou zero');
// }
// if(codigo == 1){
//     document.write('Você digitou Sul');
// } if(codigo == 2){
//     document.write('Você digitou Norte');
// } if(codigo == 3){
//     document.write('Você digitou Leste');
// } if(codigo == 4){
//     document.write('Você digitou Oeste');
// } if(codigo <= 6){
//     document.write('Você digitou Nordeste');
// } if(codigo <= 9){
//     document.write('Você digitou Sudeste');
// } if(codigo <= 20){
//     document.write('Você digitou Centro-Oeste');
// } if(codigo <= 30){
//     document.write('Sem definição');
// }

// ----------- EXERCICIO 15 - IF ENCADEADO -----------

// var n1 = parseFloat(prompt("Digite sua nota"));
// var n2 = parseFloat(prompt("Digite sua nota"));
// var n3 = parseFloat(prompt("Digite sua nota"));
// var n4 = parseFloat(prompt("Digite sua nota"));

// var media = (n1 + n2 + n3 + n4) / 4;

// if(media >= 7 ) {
//     document.write("APROVADO");
// } else if(media >= 5) {
//     document.write("RECUPERAÇÃO");
// } else{
//     document.write("REPROVADO");
// }

// ----------- EXERCICIO 16 - IF ENCADEADO -----------

// var cargo = parseFloat(prompt("Digite seu cargo: \n1-Produção; \n2-Administrativo; \n3-Diretoria."));
// var salario = parseFloat(prompt("Digite seu salário"));

// if(cargo == 1){
//     salario = salario + (salario * 0.065);
//     document.write(salario);
// } else if(cargo == 2){
//     salario = salario + (salario * 0.075);
//     document.write(salario);
// } else if(cargo == 3){
//     salario = salario + (salario * 0.12);
//     document.write(salario);
// } else{
//     alert("Digite o número de um dos três cargos mencionados");
// }

// ----------- EXERCICIO 17 - IF ENCADEADO -----------

// var number = parseFloat(prompt("Digite um número"));

// if (number % 2 == 0){
//     document.write(number);
// } else {
//     document.write(" ");
// }

// ----------- EXERCICIO 18 - IF ENCADEADO -----------

// var price = parseFloat(prompt("Digite o preço do produto"));
// var cod = prompt("Digite o código do produto");

// if(cod == 1){
//     document.write("Sul");
// } else if(cod == 2) {
//     document.write("Norte");
// } else if(cod == 3){
//     document.write("Leste");
// } else if(cod == 4) {
//     document.write("Oeste");
// } else if(cod <= 6){
//     document.write("Nordeste");
// } else if(cod <= 9){
//     document.write("Sudeste");
// } else if(cod <= 20){
//     document.write("Centro-Oeste");
// } else if(cod <= 30){
//     document.write("Sem definição");
// }

// ----------- EXERCICIO 19 - IF ENCADEADO -----------

// var idade = parseFloat(prompt("Digite a sua idade"));

// if(idade < 0){
//     alert("Idade inválida")
// } else if(idade <= 2){
//     document.write("Recém-nascido");
// } else if(idade <= 11){
//     document.write("Criança");
// } else if(idade <= 19){
//     document.write("Adolescente");
// } else if(idade <= 55){
//     document.write("Adulto");
// } else{
//     document.write("Idoso");
// }

// ----------- EXERCICIO 20 - IF ENCADEADO -----------

// var nome = prompt("Digite seu nome");
// var cargo = parseInt(prompt("Digite: \n1 Para Escriturário; \n2 Para Secretário; \n3 Para Caixa; \n4 Para Gerente; e \n5 Para Diretor."));

// if(cargo == 1){
//     document.write(nome + ", Escriturária(o)");
// } else if(cargo == 2){
//     document.write(nome + ", Secretário(o)");
// } else if(cargo == 3){
//     document.write(nome + ", Caixa");
// } else if(cargo == 4){
//     document.write(nome + ", Gerente");
// } else if (cargo == 5){
//     document.write(nome + ", Diretor(a)");
// }

// ----------- EXERCICIO 21 - FOR -----------

// var somatorio = 0;

// for(x=1; x<=15; x++){
//     somatorio+=parseInt(prompt("Digite o " + x + "o número"));
// }

// alert("O somatório é " + somatorio);

// ----------- EXERCICIO 22 - FOR -----------

// var number;

// for(number=0; number<=50; number++){
//     if(number % 2 == 1){
//         document.write(number + " ");
//     }
//    }

// or


// for(var number=1; number<=50; number = number + 2){
//     document.write(number + " ");
// }

// ----------- EXERCICIO 23 - FOR -----------


// var numero = parseInt(prompt("Digite um número"));

// for(i = 1; i<=10; i++){
//     document.write(numero + " x " + i + " = " + numero * i + "; ");
// }

// ----------- EXERCICIO 24 - FOR -----------
// document.write("Tabuada do 1 ao 10: ")

// for (x=1; x<=10; x++){
//     for(j=1; j<=10;j++){
//         document.write(x + "x" + j + "= " + x*j + "\n");
//     }
// }

// ----------- EXERCICIO 25 - FOR -----------
 
for()
    
}
