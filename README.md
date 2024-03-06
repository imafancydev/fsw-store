Este é um projeto [Next.js](https://nextjs.org/) inicializado com o [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando app/page.tsx. A página será atualizada automaticamente conforme você editar o arquivo.

Este projeto utiliza o  [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

## Tecnologias Utilizadas 🚀

- **React**: Uma biblioteca JavaScript popular para construir interfaces de usuário interativas.

- **Next.js 13**: Um framework React que oferece renderização do lado do servidor (SSR), geração estática (SSG), entre muitos outros recursos.

- **Next Auth**: Biblioteca para autenticação de usuários com OAuth.

- **Postgres**: Um sistema de gerenciamento de banco de dados relacional.

- **Prisma**: Um ORM (Object-Relational Mapping) para Node.js e TypeScript.

- **shadcn/ui**: Uma biblioteca de componentes de IU reutilizáveis e estilizáveis.

- **Tailwind CSS**: Um framework CSS que oferece várias classes para utilização já pré-estilizadas.

- **API do Stripe**: Uma API de pagamento popular para processar pagamentos online de forma segura.

## Funcionalidades 📦

- **Login com o Google**: Permitimos que os usuários façam login usando suas contas do Google para uma experiência de autenticação simplificada.

- **Navegação por Categorias**: Os usuários podem explorar produtos por categorias, facilitando a busca e a compra.

- **Descontos em Produtos**: Alguns produtos podem ter descontos especiais, permitindo aos usuários economizar em suas compras.

- **Gerenciamento do Carrinho de Compras**: Os usuários podem adicionar produtos ao seu carrinho de compras, remover produtos e também modificar a quantidade de um produto no carrinho de compras conforme necessário.

- **Pagamento do Pedido com a API do Stripe**: Oferecemos uma experiência segura de pagamento online com a integração da API do Stripe, incluindo o uso de webhooks para processar eventos relacionados ao pagamento. Os usuários podem concluir seus pedidos com facilidade e segurança.

## Protótipo no Figma 🎨

Você pode visualizar o protótipo do nosso projeto no Figma. Ele oferece uma prévia visual de como a interface do usuário é projetada e como as diferentes funcionalidades são organizadas. Confira o protótipo [aqui](https://www.figma.com/file/Y8jmabSZXxAobeUJQdI4bm/FSW-Store-%5BLive%5D?type=design&mode=design&t=JoIB87O9jkqADxpN-1).

Fique à vontade para explorar e compartilhar suas opiniões sobre o design do projeto!

## Contribuições e Colaborações 🤝

Este projeto está totalmente aberto a contribuições. Se você deseja colaborar, fique à vontade para criar pull requests, corrigir bugs, adicionar novos recursos ou aprimorar a documentação. Sua contribuição é valiosa e ajuda a melhorar ainda mais este projeto!

### Como Contribuir

1. Faça um fork deste repositório.

2. Crie uma branch para sua contribuição:

```bash
    git checkout -b minha-contribuicao
```

3. Faça suas alterações e adicione commits descritivos (seguindo o Conventional Commits, preferencialmente).

4. Crie um pull request para a branch `main` deste repositório.
