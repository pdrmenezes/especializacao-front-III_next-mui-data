1. Vamos utilizar o projeto feito da mesa de trabalho anterior e adicionar componentes de tabelas do Material UI, onde iremos fazer uma tabela das pessoas que se inscreveram na newsletter.

2. Importe o componente Modal, onde teremos um botão que vai abrir um modal e mostrar a tabela.

3. Dentro do modal, importaremos o componente DataGrid. Neste componente temos a coluna: ID, Nome, Sobrenome, Email, Stack, Gênero e Data de inscrição dos usuários. Lembrando que o DataGrid é importado pelo @mui/x-data-grid.

4. Os emails devem ser gerados dinamicamente de acordo com o nome do usuário inscrito na newsletter. Para isso, utilizaremos o valueGetter: (params) => `${params.row.firstName + "@gmail.com"}` na criação da coluna email. Isto é, na criação das linhas da tabelas não iremos passar o email da pessoa de forma estática.

5. Para estilizar os componentes (tamanho, espaçamentos, fontes…) utilize o suporte sx para alterar o estilo de um componente em alguma implementação específica. Caso necessário utilize também o componente Box para clicar caixas/divisões entre os componentes e assim aplicar os estilos.
