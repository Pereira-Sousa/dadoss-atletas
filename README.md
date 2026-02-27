# Projeto 02 - Certificação de Atletas (Lógica de Programação)

Este projeto consiste em uma aplicação em **JavaScript** voltada para a gestão de informações de atletas. O software utiliza Programação Orientada a Objetos (POO) para processar dados como nome, idade, peso e notas, realizando cálculos automáticos de categoria, IMC e média válida.

## 🚀 Funcionalidades

O sistema foi estruturado através de uma classe `Atleta` que gerencia os seguintes dados e cálculos:

* **Cálculo de Categoria:** Define a categoria (Infantil, Juvenil, Intermediário ou Adulto) com base na faixa etária.
* **Cálculo de IMC:** Realiza o cálculo do Índice de Massa Corporal através da fórmula $IMC = \frac{peso}{altura^2}$.
* **Média Válida:** Implementa uma lógica de pontuação que descarta a maior e a menor nota do atleta, calculando a média das notas restantes.
* **Exibição em Blocos:** Apresenta no console um relatório organizado para cada atleta contido na base de dados.

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Node.js** (Ambiente de execução via terminal)

## 📋 Regras de Negócio

### Categorias por Idade

| Categoria | Faixa Etária |
| :--- | :--- |
| **Infantil** | 9 a 11 anos |
| **Juvenil** | 12 e 13 anos |
| **Intermediário** | 14 e 15 anos |
| **Adulto** | 16 a 30 anos |
| **Sem categoria** | Demais idades |

## 💻 Como Executar o Projeto

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Abra o terminal (Bash) no VS Code.
3. Navegue até a pasta do projeto:
   ```bash
   cd "Projeto 02"