<h1> AudioVibe</h1>



<p>O AudioVibe é uma aplicação que consome a API do Spotify para buscar informações sobre artistas e álbuns. A aplicação é dividida em três abas principais:</p>

## Início
![inicio](https://user-images.githubusercontent.com/98111351/229324211-db23cd63-12f8-4beb-acdb-263eb3fa4311.png)
<p> A aba Início foi desenvolvida para navegação</p>

## Artistas
![artistas](https://user-images.githubusercontent.com/98111351/229324207-0cec6a29-b46e-420e-9248-81f06df616d3.png)

<p> A aba de Artistas permite buscar artistas no Spotify e exibir o nome e foto.</p>

## Álbuns
![albuns](https://user-images.githubusercontent.com/98111351/229324224-0c17634e-31e3-4a99-839d-b6ae3aeb8f7d.png)
<p>A aba de Álbuns permite buscar álbuns no Spotify e exibir informações sobre eles, como nome, data de lançamento, foto da capa e número de faixas.</p>


## API do Spotify

<p>O AudioVibe consome a API do Spotify para buscar informações sobre artistas e álbuns. Para usar a API, é necessário criar uma conta no Spotify for Developers e criar um aplicativo para obter as credenciais de acesso. </p>

### Tecnologias Utilizadas
<p>O AudioVibe foi desenvolvido utilizando as seguintes tecnologias: </p>

<ul>
      <li><strong>React:</strong> uma biblioteca JavaScript para criação de interfaces de usuário.</li>
      <li><strong>TypeScript:</strong> um superconjunto do JavaScript que adiciona tipagem estática e outros recursos à linguagem.</li>
      <li><strong>Axios:</strong> um cliente HTTP baseado em Promises para o navegador e Node.js.</li>
       <li><strong>Chakra UI:</strong>  uma biblioteca de componentes de interface de usuário para React que permite criar interfaces bonitas e responsivas de forma rápida e fácil..</li>
      <li><strong>Reducer:</strong> uma função pura do Redux que é usada para atualizar o estado global da aplicação com base nas ações enviadas pela aplicação.</li>
       <li><strong>dotenv:</strong> uma biblioteca que permite carregar variáveis de ambiente de um arquivo .env na raiz do projeto.</li>   
 </ul>
 
 <p>Essas tecnologias trabalham juntas para fornecer uma arquitetura escalável e uma experiência de usuário agradável e responsiva para os usuários do AudioVibe. </p>



## Como usar 

<p> Para usar o AudioVibe, basta seguir os passos abaixo:</p>

1. Clone o repositório: 
```
git clone https://github.com/MatheusMangueira/Horizon_AudioVibe.git
```
2. instale as dependências: 
```
yarn install
```
3. O projeto utiliza algumas variáveis de ambiente para se conectar à API do Spotify e ao servidor de autenticação. Para configurá-las, crie um arquivo .env na raiz do projeto com as seguintes informações: 
```
REACT_APP_API_BASEURL=https://api.spotify.com/v1/
REACT_APP_API_ENDPOINT=https://accounts.spotify.com/
REACT_APP_TOKEN_KEY=myTokenSpotify
REACT_APP_CLIENTID=<seu_client_id>
REACT_APP_CLIENTSECRET=<seu_client_secret>
```

<p>A variável REACT_APP_API_BASEURL define a URL base da API do Spotify, enquanto a variável REACT_APP_API_ENDPOINT define a URL do servidor de autenticação. A variável REACT_APP_TOKEN_KEY define a chave para acessar o token de autenticação no LocalStorage do navegador. Além disso, as variáveis de ambiente REACT_APP_CLIENTID e REACT_APP_CLIENTSECRET são utilizadas para armazenar as credenciais do aplicativo registrado no painel de desenvolvedor do Spotify. Essas credenciais são necessárias para que a aplicação possa se autenticar na API do Spotify e obter as informações dos artistas e álbuns. </p>


4. Inicie o servidor de desenvolvimento:
```
yarn start
```


## Conclusão </p>
<p>
O AudioVibe é um projeto desenvolvido em React com TypeScript que consome a API do Spotify para buscar informações sobre artistas e álbuns. A aplicação utiliza Reducer para gerenciamento de estado e Axios para realizar as requisições HTTP. Com uma interface intuitiva e fácil de usar, o AudioVibe é uma ótima opção para quem deseja explorar o catálogo de músicas do Spotify de forma mais dinâmica e interativa.
</p>

