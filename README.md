#Projeto Front-end com Next.js e Tailwind CSS

Este projeto é um exemplo de uma aplicação front-end utilizando Next.js e estilização com Tailwind CSS. A aplicação consiste em uma página inicial (Home) que exibe produtos fictícios e permite aos usuários adicionar esses produtos a um carrinho de compras simulado.

##Funcionalidades
• Exibição de produtos com nome, imagem, preço e descrição.
• Adição e remoção de produtos ao carrinho de compras.
• Notificações de sucesso e informações utilizando React Toastify.
• Armazenamento local dos itens do carrinho utilizando localStorage.
• Cache dos produtos na página inicial por 2 minutos para melhorar o desempenho.

##Tecnologias Utilizadas

• Next.js: Framework React para renderização do lado do servidor e do cliente.
• Tailwind CSS: Framework CSS utilitário para estilização rápida e responsiva.
• React Toastify: Componente React para notificações de usuário.
• Mock Data: Dados fictícios são utilizados para simular os produtos exibidos na página.

Como Executar o Projeto
1 - Instalação das Dependências

```bash
npm install
```

2 - Executar Localmente

```bash
npm run dev
```

O projeto estará disponível em http://localhost:3000.

##Considerações
Este projeto foi desenvolvido como parte de um teste técnico para demonstrar habilidades em React, Next.js, Tailwind CSS e gerenciamento de estado com useState e useEffect. A implementação de cache dos produtos na página inicial por 2 minutos foi realizada para otimizar o desempenho da aplicação.

