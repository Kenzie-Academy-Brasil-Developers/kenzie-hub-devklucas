Bibliotecas utilizadas 

- react
- react-router-dom
- react-hook-form
- yup
- styled components
- axios

Padronizações 

- Componentes funcionais com o uso de arrow function.
- For padrão Vanilha.
- Idioma principal da aplicação 'pt-br' e o codigo em 'en'.
- Nomeação de variáveis seguindo a conveção do Javascript sera camelCase.
- Fontes utilizadas serão importadas diretamente do google fonts.

Git hub 

Utilizando o conventinal commit para estruturar o versionamento do projeto, na qual a cada uma das feateares que forem implementas seram criadas novas branchs e que posteriormente seram
incluindas na brach develop, que por sua vez será a responsavel pelos testes antes de serem subidas na Main. 

Features 

O usuário pode se cadastrar;
O usuário pode logar em sua conta;
O usuário pode cadastrar as tecnologias que ele conhece;
O usuário consegue visualizar e deletar as tecnologias que ele conhece.

Regras de Negócio

- Todos os formulários tem validações, para não enviar nenhum dado errado para a API;
- O Token está sendo salvo no localStorage de forma correta e sendo utilizado para verificar se o usuário está logado ou não;
- O usuário deslogado não pode acessar o dashboard.

Estilização 

Usando a blioteca styled-components para melhorar a produtividade e ganhar autonomia no processo,
tanto na implementação da versão mobile quanto na versão desktop. Seguindo um style guide antes criado no figma, disponivel nesse endereço: https://www.figma.com/file/ccZ4uMlJtuBQISDzCCI1Vq/Kenzie-Hub?node-id=0%3A1

Endpoints da Api

Base da url: https://kenziehub.herokuapp.com
Listar usuario: GET /users
Listar usuario especifico: GET /users/:user_id 
Criar Usuário:POST /users 
{
"email": "johndoe@email.com",
"password": "123456",
"name": "John Doe",
"bio": "Lorem ipsum dolor emet",
"contact": "linkedin/in/johndoe",
"course_module": "Segundo Módulo (Frontend avançado)"
}
Criar tecnologias para o perfil: POST /users/techs
{
	"title": "React",
	"status": "Iniciante"
}
alterar tecnologia: PUT /users/techs/:tech_id
deletar tecnologia : DELETE /users/techs/:tech_id


Desenvolvimento (tasks)

- Criar página login jsx estáticas
- Criar página register jsx estáticas
- Criar página Home jsx estáticas
- Criar modal em Home Cadastrar Tecnologia
- Criar modal em Home Alterar Tecnologia
- Criar rotas para navegação entre as páginas
- Estilização global da aplicação para receber fonts e cores padroes.
- Estilização versão mobile
- Estilização versão desktop
- Criar component form para login do usuário, responsável por receber os dados e verificar se estam no formato esperado antes de enviar-los para request da api
- Criar component form para criação de novo usuário, responsável por receber os dados e verificar se estam no formato esperado antes de enviar-los para request da api.
- Criar request da Api
- Integrar response da Api com a interface e exibir em tela