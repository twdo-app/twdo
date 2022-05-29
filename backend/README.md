# twdo-backend

## Como a aplicação funciona

Esta API roda de maneira containerizada. Isso significa que os nossos arquivos dentro do diretório do projeto são copiados para dentro de um container docker para serem executados dentro do container.

Além do container da aplicação, também há um container de PostgresSQL que roda em paralelo. A máquina host não se comunica com o container do banco, apenas com o container da API para copiar os arquivos.

## Para levantar a aplicação pela primeira vez

```[lang=bash]

docker compose up --build

docker exec /twdo-backend /bin/bash (isso colocará você num terminal dentro do container. Dentro desse terminal, execute os comandos abaixo)

npx prisma generate
npx prisma migrate dev

```

## Para levantar a aplicação após a primeira vez

```[lang=bash]
docker compose up
```

## Para rodar migrations no banco após alterações no schema:

```[lang=bash]


docker exec /twdo-backend /bin/bash (isso colocará você num terminal dentro do container. Dentro desse terminal, execute o comando abaixo)
npx prisma migrate dev

```

## Sobre pacotes do NPM

Ao desenvolver uma nova feature, pode ser que pacotes precisem ser baixados. Para isso, execute:

```[lang=bash]
yarn add <nomeDoPacote>
```

Caso seja uma dependencia de desenvolvimento, não esqueça da flag -D.

E a cada novo pacote adicionado, você precisará executar em seguida:

```[lang=bash]
docker exec twdo-backend yarn install
```

O yarn add na sua máquina host atualiza o package.json da sua máquina host.

Quando há uma mudança em quaisquer arquivos da pasta do projeto (inclusive o package.json) da sua máquina host, o container copia quaisquer alterações para dentro da pasta do projeto dentro do container.

Porém, o pacote está apenas instalado na sua máquina host (o container não copia a pasta node_modules), e ainda precisará ser instalado no container. Por isso rodamos o yarn install dentro do container em seguida.

## O número do container pode ser obtido com

```[lang=bash]
docker ps
```

## Para derrubar a aplicação

```[lang=bash]
docker compose down (ou um ctrl+c no terminal que estiver rodando)
```
