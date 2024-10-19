// Notas obtidas pelos atletas, disponibilizada no enunciado.
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];

// Função para calcular a média das notas dos atletas, utilizando apenas as notas validas (excluindo a menor e a maior nota de cada atleta)
function calcularMedias(atletas) {
    for (let i = 0; i < atletas.length; i++) {
     
      
      // Ordena as notas em ordem crescente (a-b)
      let notasEmOrdem = atletas[i].notas.sort(function(a, b) {
        return a - b;
      });
      
      // Elimina a maior e a menor nota com o metodo slice(), pegando elementos do indice 1 até o indice 3 (o 4 é excluido)
      let notasValidas = notasEmOrdem.slice(1, 4);
      
      // Calcula a média
      
      let soma = 0;
      notasValidas.forEach(function(nota) {
      soma = soma + nota; // Soma cada nota
      });
       
      // Calcula a média
      let media = soma / notasValidas.length; 

      
      
      // Mostra o resultado
      console.log(`Notas Obtidas:  ${atletas[i].notas.join(', ')}`);
      console.log(`Média Válida:  ${media}`);
      console.log(''); // Linha em branco/vazia para melhor visualização
    }
  }
  
 
  
  
  // Chama a função usando como parametro atletas
  calcularMedias(atletas);
  
  