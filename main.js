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

// ----------- EXERCICIO 04 - VARIAVEIS SIMPLES COM PROPRIEDADES -----------

var pessoa = {
    nome : prompt('Digite seu nome'),
    peso : parseFloat(prompt('Digite seu peso em kg')),
    altura : parseFloat(prompt('Digite sua altura em centímetros'))
};

var imc = pessoa.peso / pessoa.altura * pessoa.altura;

document.write(pessoa.nome + ', Seu IMC é: ' + imc);