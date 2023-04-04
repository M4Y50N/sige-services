# Documentação da API do dadosjusbr

## Como documentamos a api do DadosJusBr?

Utilizamos o [insomnia-rest](https://insomnia.rest/) para testar e documentar endpoints, após escrever as documentações geramos o html da doc que será colocada em produção usando a lib [insomnia-documenter](https://www.npmjs.com/package/insomnia-documenter)

### Gerando a documentação
para gerar a documentação é necessário ter o [nodejs](https://nodejs.org) e o [yarn](https://yarnpkg.com/) instalados, ciente disso:

- exporte a coleção de endpoints do insomnia no formato json com o nome `dadosjusdoc.json` e insira na raiz do projeto

- execute o comando:
```sh
yarn build
```

Após a execução do comando ele irá modificar o arquivo insomnia.json da raiz e da pasta assets, esses arqivos são usados pelo script do [insomnia-documenter](https://www.npmjs.com/package/insomnia-documenter) para gerar o html da doc