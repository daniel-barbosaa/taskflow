# taskFlow

O TaskFlow é um painel de gerenciamento de projetos, intuitivo e funcional.

##  Índice

1. [Descrição](#descrição)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Uso](#uso)
5. [Configuração](#configuração)

## Descrição 

O TaskFlow é uma plataforma para organizar projetos e tarefas de forma simples e eficiente, oferecendo uma experiência intuitiva para melhorar a produtividade. 🚀

<img src="https://private-user-images.githubusercontent.com/101154066/395321417-5da267c3-19e8-4da3-b0ec-dd6a69805843.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQwMzYyODgsIm5iZiI6MTczNDAzNTk4OCwicGF0aCI6Ii8xMDExNTQwNjYvMzk1MzIxNDE3LTVkYTI2N2MzLTE5ZTgtNGRhMy1iMGVjLWRkNmE2OTgwNTg0My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIxMlQyMDM5NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMzVkNDhiODU5NmYyOTY2ZjJkMDAyMTQ0YzIyOWU0NzI1ZjZiZWFiMDE1NzFkZGZkYmRkMDk0MjkxNmNiMmQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6VEudpNGLYkiY6th5GoXfRrf6TGp3IAa3VbNrxb-Hvs" alt="capa-do-projeto">
<img src="https://private-user-images.githubusercontent.com/101154066/395320820-0929446c-e1fb-41c6-bd54-77a1e9227695.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQwMzYxNTksIm5iZiI6MTczNDAzNTg1OSwicGF0aCI6Ii8xMDExNTQwNjYvMzk1MzIwODIwLTA5Mjk0NDZjLWUxZmItNDFjNi1iZDU0LTc3YTFlOTIyNzY5NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIxMlQyMDM3MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ODdjNjQ0MjBmMDIwMmY3MTY0YzEyNTk1YTk0MWUwYWUyZDJlMTAyYmY5ZWRiMWEyYjhjZmFjNTlkZGRhOWI1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4iR67yz_zwO3k99RNzv8P9qslzgnj5gnTauLFtX8OVk" alt="capa-do-projeto">



## Tecnologias utilizadas 

- [Typescript](https://www.typescriptlang.org/docs/)
- [NextJs](https://nextjs.org/docs)
- [ReactJs](https://legacy.reactjs.org/docs/getting-started.html)
- [Firebase](https://firebase.google.com/docs)
- [Chakra UI](https://v2.chakra-ui.com/docs/components)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing Library](https://testing-library.com)


## Instalação

```sh
# Instalar o CLI na maquina. É importante que faça essa etapa para o funcionamento correto da aplicação
https://learn.microsoft.com/pt-br/dotnet/machine-learning/how-to-guides/install-ml-net-cli?tabs=windows


# Clone o repositório
git clone https://github.com/daniel-barbosaa/taskflow.git

# Entre no diretório do projeto
cd taskflow

# Instale as dependências
npm install

```

## Uso

```sh

# Iniciar

npm dev
ou
yarn dev

# Rodar testes

npm test
ou
yarn test

```
## Configuração

```sh
# Antes de usar a aplicação faça isso, este projeto requer a configuração de um ambiente Firebase para funcionar.

# Para clonar e executar o sistema, você precisa:

- Criar um projeto no Firebase Console.
- Configurar os serviços necessários, como Firestore, Authentication e Storage.
- Obter as credenciais do cliente e do admin no Firebase:
- Configurações do cliente (para as variáveis NEXT_PUBLIC_*).
- Credenciais do SDK Admin (para as variáveis privadas).

#Sem essas configurações, a aplicação não pode ser executada corretamente.

#Configuração do Ambiente

#Após configurar seu projeto no Firebase, crie um arquivo .env na raiz do repositório com as variáveis de ambiente necessárias. Consulte a documentação do Firebase para obter os valores apropriados.

# Exemplo de estrutura

//Client
#NEXT_PUBLIC_FIREBASE_API_KEY=
#NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
#NEXT_PUBLIC_FIREBASE_PROJECT_ID=
#NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
#NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
#NEXT_PUBLIC_FIREBASE_APP_ID=
#NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
...
//Admin

FIREBASE_PRIVATE_KEY=FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PROJECT_ID=


```





