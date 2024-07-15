# Apadrinha Brasil App
- [ ] TODO: Adicione uma breve descrição do projeto aqui.

## Instruções para Configuração Local
Estas instruções te ajudarão a obter uma cópia do projeto e a colocá-lo em funcionamento em sua máquina local para desenvolvimento.

### Pré-requisitos
Antes de começar, certifique-se de que atende aos seguintes requisitos:
- **Node.js**: Certifique-se de ter o Node.js na versão 16 instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
- **Yarn**: O gerenciador de pacotes é o Yarn. Certifique-se de instalá-lo antes de prosseguir. Siga as instruções no [site oficial](https://classic.yarnpkg.com/en/docs/install).
- **Docker**: Usamos o Docker para executar um banco de dados PostgreSQL em um contêiner. Você precisará ter o Docker CLI instalado para executar os comandos necessários para construir, iniciar e parar o contêiner. Recomendamos a instalação do Docker Desktop, que é o software GUI do Docker para gerenciar contêineres. Uma vez que você instala o Docker Desktop, ele também instalará o Docker CLI. Acesse o [site oficial](https://www.docker.com/products/docker-desktop/) para instalar Docker Desktop.

### Primeiros passos
1. Clone o repositório.
```
git clone https://github.com/Apadrinha-Brasil/apadrinha-brasil.git
```
2. Navegue para a pasta do projeto.
```
cd apadrinha-brasil
```
3. Instale dependências.
```
yarn
```

### Configuração
1. Crie um arquivo de configuração '.env' e defina as variáveis de ambiente necessárias. Você precisará disso para conectar o Prisma ao banco de dados.
```
DATABASE_URL=postgresql://admin:1234@localhost:5432/ab_dev
```
Observe `admin` e `1234` na URL de conexão do banco de dados. Se desejar usar o PgAdmin ou qualquer outro software de gerenciamento de banco de dados para facilitar o desenvolvimento, você precisará dessas credenciais para conectá-lo ao banco de dados. Existe a opção de usar Prisma Studio o que evita a necessidade de instalar um software para gerenciamento do banco de dados.

2. Crie um arquivo `.env.local` e adicione o conteúdo abaixo. Este arquivo contém o segredo JWT usado para codificar e decodificar a senha do usuário. Ele também contém o salt, que é usado como um dado de incremento para fortalecer a segurança do token.
```
JWT_SECRET=m53WWgzip74cX63avQS0hr5DMTVPALO6MVxpjueYe0eO3CLThpAbiurRk3hgaT
HASH_SALT=E9iak6f7L2a9EqLGYJHhR04M8gTFUtvrDu33D3XEWIQFrEHNGKssjVFMXPkRz6
```

### Configurar o banco de dados PostgreSQL
Construa o banco de dados PostgreSQL em um contêiner.
1. Se o contêiner Docker não existir, ou seja, se você nunca executou com sucesso o script abaixo, execute-o para construí-lo.
```
yarn build:db
```
Se o script acima foi bem-sucedido, os dois scripts a seguir podem ser ignorados na configuração inicial.

Para iniciar um contêiner PostgreSQL existente.
```
yarn start:db
```
Para parar o containêr.
```
yarn stop:db
```
Você pode confirmar que o contêiner `postgresql` está em execução verificando no Docker Desktop ou executando `docker ps` no seu terminal. Isso mostrará todos os contêineres em execução. Você também pode iniciar e parar o contêiner diretamente do Docker Desktop.

2. Assim que seu banco de dados local estiver em execução, você precisará aplicar todo o histórico de migração à ele.
```
yarn migrate:db
```

### Execute a aplicação
1. Para iniciar o servidor de desenvolvimento, execute este comando.
```
yarn dev
```
2. Se preferir, você pode usar o gerenciador de banco de dados incorporado do Prisma em vez de instalar outro software.
```
yarn studio:db
```

### PG Admin
Após inicialização do banco de dados será possível acessá-lo através do PG Admin em localhost:5000. Para acessar basta informar as credenciais.

Login:
```
app.apadrinhabrasil@gmail.com
```

Senha:
```
postgres
```

Para conectar com o banco clique com "Servers" com o botão direito e em "Registrar" > "Servidor...".

Informe o nome ao banco de dados:
```
postgresql-ab
```

E em "Conexão" informe os seguintes dados:
```
Host name/address: 172.36.0.2
Maintenance database: ab_dev
Username: admin
Senha: 1234
```

### ES Lint
É recomendável instalar a extensão ES Lint (da Microsoft) para o VS Code, pois ela destaca erros e avisos de lint diretamente no editor. Além disso, habilita o arquivo `.vscode/settings.json` para impor correções de lint ao salvar os arquivos. 
> **Note**: All the rules added was an initial set of rules to start off, but it's open for discussion what rules could be added and removed.

## Deployment

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Platforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Consulte nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para obter mais detalhes.
