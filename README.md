# Notas-Atletas

Aplicação que calcula a média das notas de atletas em uma competição de ginástica artística, levando em consideração as avaliações de cinco jurados e excluindo a menor e maior nota de cada atleta.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)

## Instalação

Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/Volneijunior1994/notas-atletas.git
   ```

2. Navegue até o projeto:

   ```bash
   cd notas-atletas
   ```

## Uso

Para usar a aplicação, você deve passar uma matriz de objetos contendo o nome dos atletas e suas respectivas notas. A aplicação calculará a média das notas, desconsiderando a maior e a menor nota.

### Exemplo de uso:

```javascript
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

// Chame a função que calcula as médias
calcularMedias(atletas);
```
