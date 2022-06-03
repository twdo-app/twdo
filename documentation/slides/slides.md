---
highlighter: shiki
lineNumbers: false
aspectRatio: "16/10"
---

# twdo

---

## Integrantes

- André Silva de Oliveira

- Luana da Silva Chaves

- Pedro Lucas Barros Palma

- Vítor Barroso de Sousa

---

## Minimundo

O twdo é um organizador pessoal de tarefas minimalista, pensado em ser um ambiente simples e livre de distrações, de maneira que o usuário possa focar no que realmente precisa ser feito. Ele faz isso através de uma interface limpa, fácil de entender e agradável de utilizar.
<br>
<br>
Ele permite que o usuário crie uma conta (utilizando e-mail pessoal ou conta existente no GitHub) e já comece a criar suas tarefas. As tarefas podem ser agrupadas em projetos e arrastadas ao longo da tela para ordená-las. Dependendo da direção que o usuário arraste a tarefa, ela pode ser adicionada para um projeto ou iniciar um timer pomodoro para a realização da tarefa.
<br>
<br>
A aplicação também conta com uma área reservada para as tarefas do dia atual (que possui também informações relacionadas à <b> temperatura climática </b>), de maneira que o usuário possa configurar um envio automático de e-mail para avisá-lo das tarefas que ele organizou para aquele dia. As tarefas também <b> podem </b> ser agendadas para serem realizadas em um determinado dia, com uma área dedicada do aplicativo para listar essas tarefas.

<SlideNumber/>

---

## Glossário

| Termo            | Descrição                                                                                                                                                                                                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| To-do list       | Lista (ordenada ou não) de tarefas geralmente utilizada para organização pessoal.                                                                                                                                                                                                                                                      |
| API              | Sigla para "Application Programming Interface", que consiste em um conjunto de métodos prontos para serem utilizados, cujas implementações são abstraídas do desenvolvedor que irá utilizá-los.                                                                                                                                        |
| Chaves de Acesso | Chave única utilizada para identificar quem está fazendo uma determinada ação. Amplamente utilizadas para uso de API's externas da aplicação em desenvolvimento.                                                                                                                                                                       |
| Github           | Sistema de gerenciamento de repositórios Git em nuvem.                                                                                                                                                                                                                                                                                 |
| Registro         | Criação de conta única para um usuário poder utilizar a aplicação.                                                                                                                                                                                                                                                                     |
| Login            | Acesso à uma conta previamente criada pelo usuário para poder utilizar a aplicação.                                                                                                                                                                                                                                                    |
| JWT              | Sigla para "JSON Web Token". Consiste em um código hash devolvido pelo servidor para o navedor após login bem sucedido. O hash conterá informações à respeito do usuário e será enviado em futuros pedidos para o servidor quando o usuário precisar acessar rotas protegidas, obrigando-o a realizar o login para utilizar o sistema. |
| Tarefa           | Tarefa ligada à um único usuário que conterá uma descrição, data e data limite.                                                                                                                                                                                                                                                        |
| Projeto          | Conjunto de Tarefas.                                                                                                                                                                                                                                                                                                                   |
| Pomodoro         | Timer utilizado para que o usuário possa focar em realizar uma tarefa dentro de um determinado período de tempo.                                                                                                                                                                                                                       |

<SlideNumber/>

---

## Requisitos Funcionais<span> ></span> <h3>Projetos e Tarefas</h3>

| RF          | Descrição                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| RF1         | O sistema deve permitir que o usuário crie uma Tarefa preenchendo os campos descrição, data e data limite. |
| RF2         | O sistema deve permitir que o usuário liste as Tarefas dele agendadas para aquele dia                      |
| RF3         | O sitema deve permitir que o usuário liste as Tarefas agendadas para dias futuros                          |
| RF4         | O sitema deve permitir que o usuário marque uma Tarefa como feita                                          |
| RF5         | O sitema deve permitir que o usuário edite a descrição e as datas de uma Tarefa                            |
| RF6         | O sistema deve permitir que o usuário crie um Projeto preenchendo o campo descrição                        |
| RF7         | O sistema deve permitir que o usuário agrupe Tarefas em um Projeto                                         |
| RF8         | O sistema deve permitir que o usuário veja seus Projetos atuais                                            |
| RF9         | O sistema deve permitir que o usuário edite as Tarefas de seus Projetos                                    |
| <b>RF10</b> | <b>O sistema deve permitir que o usuário edite o descrição de seus Projetos</b>                            |

<SlideNumber/>

---

## Requisitos Funcionais<span> ></span> <h3>Conta e Autenticação</h3>

| RF          | Descrição                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------- |
| <b>RF10</b> | <b>O sistema deve permitir que o usuário crie uma conta utilizando email. </b>                 |
| RF11        | O sistema deve permitir que o usuário se autentique informando email e senha                   |
| RF12        | O sistema deve permitir que o usuário delete sua própria conta                                 |
| <b>RF13</b> | <b>O sistema deve permitir que o usuário altere o email, senha e nome da sua própria conta</b> |

<SlideNumber/>

---

## Requisitos Funcionais<span> ></span> <h3>Features e Armazenamento</h3>

| RF          | Descrição                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| RF14        | O sistema deve permitir que o usuário configure um envio de email automático para lembrá-lo das suas Tarefas agendadas para o dia atual |
| RF15        | O sistema deve permitir que o usuário utilize um timer pomodoro                                                                         |
| RF16        | O sistema deve permitir que o usuário possa enviar um feedback para os desenvolvedores.                                                 |
| RF17        | O sistema deve permitir que o usuário inicie o "Modo Foco" da funcionalidade de "Pomodoro"                                              |
| <b>RF18</b> | <b>O sistema deve armazenar os registros de Usuários, Tarefas e Projetos em banco de dados PostgreSQL</b>                               |

<SlideNumber/>

---

## Requisitos Não Funcionais

| RNF         | Descrição                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF1        | O sistema deve criptografar a senha do usuário utilizando a biblioteca brcypt.js antes de armazená-la no banco de dados                                                               |
| <b>RNF2</b> | <b>O sistema deve permitir que o usuário ao alterar um tema tenha as opções de modo claro e modo escuro que auxiliam na melhor visualização do sistema em diferentes horas do dia</b> |
| <b>RNF3</b> | <b>O sistema deve permitir ao usuário a opção de autenticação por meio da integração com a API do Github</b>                                                                          |

<SlideNumber/>

---

## Regras de Negócio

| RN         | Descrição                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| RN1        | Um usuário não pode cadastrar uma conta com um email já pertencente à outra conta cadastrada.                                                       |
| RN2        | Um usuário não pode alterar o email da sua conta para um email já pertencente à outra conta cadastrada.                                             |
| RN3        | Um usuário não pode associar uma Tarefa à mais de um Projeto.                                                                                       |
| RN4        | Um usuário só pode realizar qualquer operação de usuário (Manter tarefas, projetos, deletar conta, alterar email, senha e nome) após se autenticar. |
| <b>RN5</b> | <b>Uma tarefa é criada preenchendo obrigatoriamente o campo "descrição", os campos "data" e "data limite" são opcionais. </b>                       |
| <b>RN6</b> | <b>Um projeto é criado preenchendo obrigatoriamente o campo "descrição" e atribuindo nenhuma ou inúmeras tarefas para ele. </b>                     |
| <b>RN7</b> | <b>Um usuário só poderá trocar a senha fornecendo a senha atual da conta.</b>                                                                       |
| <b>RN8</b> | <b>Só serão aceitas senhas com no minimo 5 caracteres</b>                                                                                           |
| <b>RN9</b> | <b>Um usuário só poderá iniciar a sessão caso tenha uma conta registrada</b>                                                                        |

<SlideNumber/>

---

## Integrações

1. Github oAuth
2. Weather API
3. SendGrid

<SlideNumber/>

---

## Casos de Uso

<pre>
<span>1.</span> Manter Conta
  <span>1.1</span> Registrar Conta
  <span>1.2</span> Deletar Conta
  <span>1.3</span> Alterar Email
  <b><span>1.4</span> Alterar Senha</b>
  <b><span>1.5</span> Alterar Nome</b>
<span>2.</span> Iniciar Sessão
  <b><span>2.1</span> Iniciar sessão com email</b>
  <b><span>2.2</span> Iniciar sessão com github</b>
<span>3.</span> Enviar Feedback
<span>4.</span> Configurar envio de email com resumo do dia
<span>5.</span> Mudar tema
<span>6.</span> Encerrar sessão
<span>7.</span> Manter Tarefa
  <span>7.1</span> Registrar tarefa
  <span>7.2</span> Deletar tarefa
<span>8.</span> Exibir a temperatura atual
<span>9.</span> Manter Projeto
<span>10.</span> Arrastar Tarefa
<span>11.</span> Reordenar projeto
<span>12.</span> Usar Pomodoro
<span>13.</span> Iniciar Modo Foco
</pre>

<SlideNumber/>

---

## Diagrama de Casos de Uso

<img src="/use_cases.png">

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>1.1 - Registrar Conta</h3>

| Propriedade       | Descrição                                                                 |
| ----------------- | ------------------------------------------------------------------------- |
| Nome              | Registrar conta                                                           |
| Objetivo          | Criar conta na aplicação                                                  |
| Atores            | Usuário                                                                   |
| Pré-condições     | Ator na tela de cadastro                                                  |
| Trigger           | Ator seleciona "Sign up"                                                  |
| Fluxo Principal   | 1. Ator digita um nome de usuário, email e senha nos campos do formulário |
|                   | 2. Ator seleciona "Sign up"[A1] [A2]                                      |
|                   | 3. Sistema redireciona para tela de login                                 |
| Fluxo Alternativo | A2 - E-mail já registrado                                                 |
|                   | A2.1 - O sistema apresenta uma mensagem de erro                           |
|                   | A2.2 - Volta para o passo 1                                               |
| Fluxo Alternativo | A2 - Senha invalida                                                       |
|                   | A2.1 - O sistema apresenta uma mensagem de erro                           |
|                   | A2.2 - Volta para o passo 1                                               |
| Extensões         | N/A                                                                       |
| Pós-condições     | O ator é redirecionado para a tela de login                               |
| Regras de negócio | RN1, RN8                                                                  |

---

## Casos de Uso<span> ></span> <h3>1.2 - Deletar Conta</h3>

| Propriedade       | Descrição                                                    |
| ----------------- | ------------------------------------------------------------ |
| Nome              | Deletar conta                                                |
| Objetivo          | Deletar conta da aplicação                                   |
| Atores            | Usuário                                                      |
| Pré-condições     | Ator precisa estar logado e na página "Settings"             |
| Trigger           | Ator clica em "Delete your Account"                          |
| Fluxo Principal   | 1. Ator clica no botão "Delete your Account"                 |
|                   | 2. Sistema pede uma confirmação da ação[A1]                  |
|                   | 3. Ator confirma a ação                                      |
|                   | 4. Sistema deleta a conta e redireciona para tela de sign up |
| Fluxo Alternativo | A1 - Não confirmar a ação                                    |
|                   | A1.1 O Sistema não deleta a conta                            |
|                   | A1.2 Fim do caso de uso                                      |
| Extensões         | N/A                                                          |
| Pós-condições     | O Ator é redirecionado para a tela de sign up                |
| Regras de negócio | RN4                                                          |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>1.3 - Alterar Email</h3>

| Propriedade       | Descrição                                                            |
| ----------------- | -------------------------------------------------------------------- |
| Nome              | Alterar email                                                        |
| Objetivo          | Alterar endereço de email da conta                                   |
| Atores            | Usuário                                                              |
| Pré-condições     | Ator precisa estar logado e na página "Settings"                     |
| Trigger           | Ator clica em "Change my email"                                      |
| Fluxo Principal   | 1. Ator preenche formulário com novo email e clica em "Save Changes" |
|                   | 2. Sistema pede uma confirmação da ação [A2]                         |
|                   | 3. Ator confirma a ação [A1]                                         |
|                   | 4. Sistema altera email e mostra uma notificação                     |
| Fluxo Alternativo | A1 - E-mail já registrado                                            |
|                   | A1.1 - O sistema apresenta uma mensagem de erro                      |
|                   | A1.2 - Volta para o passo 1                                          |
| Fluxo Alternativo | A2 - Não confirmar a ação                                            |
|                   | A2.1 O Sistema não altera o email                                    |
|                   | A2.2 Fim do caso de uso                                              |
| Extensões         | N/A                                                                  |
| Pós-condições     | O Ator permanece na tela "Settings"                                  |
| Regras de negócio | RN2, RN4                                                             |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>1.4 - Alterar Senha</h3>

| Propriedade       | Descrição                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Nome              | Alterar senha                                                                                              |
| Objetivo          | Alterar a senha da conta                                                                                   |
| Atores            | Usuário                                                                                                    |
| Pré-condições     | Ator precisa estar logado e na página "Settings"                                                           |
| Trigger           | Ator clica em "Change my password"                                                                         |
| Fluxo Principal   | 1. O ator preenche os campos "senha atual", "nova senha" e clica em "Save Changes"                         |
|                   | 2. O sistema pede uma confirmação da ação                                                                  |
|                   | 3. O ator confirma a ação                                                                                  |
|                   | 4. O sistema valida a senha atual [A1]                                                                     |
|                   | 5. O sistema mostra uma notificação de que as configurações foram salvas e retira a caixa de texto da tela |
| Fluxo Alternativo | A1 - Senha atual invalida                                                                                  |
|                   | A1.1 - O sistema apresenta uma mensagem de erro                                                            |
|                   | A1.2 - Volta para o passo 1                                                                                |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>1.4 - Alterar Senha</h3>

| Propriedade       | Descrição                           |
| ----------------- | ----------------------------------- |
| Fluxo Alternativo | A2 - Não confirmar a ação           |
|                   | A2.1 O Sistema não altera a senha   |
|                   | A2.2 Fim do caso de uso             |
| Extensões         | N/A                                 |
| Pós-condições     | O Ator permanece na tela "Settings" |
| Regras de negócio | RN4, RN7, RN8                       |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>1.5 - Alterar Nome</h3>

| Propriedade       | Descrição                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Nome              | Alterar nome                                                                                               |
| Objetivo          | Alterar a nome da conta                                                                                    |
| Atores            | Usuário                                                                                                    |
| Pré-condições     | Ator precisa estar logado e na página "Settings"                                                           |
| Trigger           | Ator clica em "Change my username"                                                                         |
| Fluxo Principal   | 1. O ator preenche o campo "Novo nome" e clica em "Save Changes"                                           |
|                   | 2. O sistema pede uma confirmação da ação                                                                  |
|                   | 3. O ator confirma a ação                                                                                  |
|                   | 4. O sistema mostra uma notificação de que as configurações foram salvas e retira a caixa de texto da tela |
| Fluxo Alternativo | A1 - Não confirmar a ação                                                                                  |
|                   | A1.1 O Sistema não altera o nome                                                                           |
|                   | A1.2 Fim do caso de uso                                                                                    |
| Extensões         | N/A                                                                                                        |
| Pós-condições     | O Ator permanece na tela "Settings"                                                                        |
| Regras de negócio | RN4                                                                                                        |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>2.1 - Iniciar sessão com email</h3>

| Propriedade       | Descrição                                                                    |
| ----------------- | ---------------------------------------------------------------------------- |
| Nome              | Iniciar sessão com email                                                     |
| Objetivo          | Iniciar sessão na aplicação                                                  |
| Atores            | Usuário                                                                      |
| Pré-condições     | O usuário não pode estar logado na aplicação                                 |
| Trigger           | Ator seleciona "Sign in"                                                     |
| Fluxo Principal   | 1. O ator digita email e senha nos campos do formulário e clica em "Sign in" |
|                   | 2. O sistema valida os campos preenchidos[A1]                                |
|                   | 3. O sistema redireciona para tela inicial de "Today"                        |
| Fluxo Alternativo | A1 - Email ou senha invalidas                                                |
|                   | A1.1 O sistema informa que um dos campos está incorreto                      |
|                   | A1.2 Volta para o passo 1                                                    |
| Extensões         | N/A                                                                          |
| Pós-condições     | O Ator é redirecionado para a tela "Today"                                   |
| Regras de negócio | N/A                                                                          |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>2.2 - Iniciar sessão com github</h3>

| Propriedade       | Descrição                                                                        |
| ----------------- | -------------------------------------------------------------------------------- |
| Nome              | Iniciar sessão com github                                                        |
| Objetivo          | Iniciar sessão na aplicação                                                      |
| Atores            | Usuário                                                                          |
| Pré-condições     | O usuário não pode estar logado na aplicação e deve possuir uma conta registrada |
| Trigger           | Ator seleciona "Sign in with github"                                             |
| Fluxo Principal   | 1 Sistema redireciona para a tela de confirmação [A1]                            |
|                   | 2 Ator seleciona "I accept"                                                      |
|                   | 3 Sistema redireciona para tela "Today"                                          |
| Fluxo Alternativo | A1 Não confirmar a ação                                                          |
|                   | A1.1 O Sistema não efetua o login                                                |
|                   | A1.2 Fim do caso de uso                                                          |
| Extensões         | N/A                                                                              |
| Pós-condições     | O Ator é redirecionado para a tela "Today"                                       |
| Regras de negócio | N/A                                                                              |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>3 - Enviar Feedback</h3>

| Propriedade       | Descrição                                                                              |
| ----------------- | -------------------------------------------------------------------------------------- |
| Nome              | Enviar Feedback                                                                        |
| Objetivo          | Enviar feedback da aplicação para os desenvolvedores                                   |
| Atores            | Usuário                                                                                |
| Pré-condições     | O Ator precisa estar logado na aplicação e na tela de "Settings"                       |
| Trigger           | Ator seleciona "Send Feedback"                                                         |
| Fluxo Principal   | 1. Sistema mostra uma caixa de texto para o usuário                                    |
|                   | 2. Ator digita sua mensagem na caixa de texto e clica no botão "Send feedback"         |
|                   | 3. O Sistema mostra uma notificação de agradecimento e retira a caixa de texto da tela |
| Fluxo Alternativo | N/A                                                                                    |
| Extensões         | N/A                                                                                    |
| Pós-condições     | O Ator permanece na tela "Settings"                                                    |
| Regras de negócio | RN4                                                                                    |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>4 - Configurar envio de email com resumo do dia</h3>

| Propriedade       | Descrição                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Nome              | Configurar envio de email com resumo do dia                                                                |
| Objetivo          | Configurar envio de email diário com informações das tarefas agendadas para aquele dia                     |
| Atores            | Usuário                                                                                                    |
| Pré-condições     | O Ator precisa estar logado na aplicação e na tela de "Settings"                                           |
| Trigger           | O Ator clica na caixa "Send daily reminder of my Tasks"                                                    |
| Fluxo Principal   | 1. Ator seleciona o botão "Save Changes"                                                                   |
|                   | 2. O Sistema mostra uma notificação de que as configurações foram salvas e retira a caixa de texto da tela |
| Fluxo Alternativo | N/A                                                                                                        |
| Extensões         | N/A                                                                                                        |
| Pós-condições     | O Ator permanece na tela "Settings"                                                                        |
| Regras de negócio | RN4                                                                                                        |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>5 - Mudar Tema</h3>

| Propriedade       | Descrição                                                             |
| ----------------- | --------------------------------------------------------------------- |
| Nome              | Mudar Tema                                                            |
| Objetivo          | Mudar o tema da aplicação para Dark ou Light                          |
| Atores            | Usuário                                                               |
| Pré-condições     | O Ator precisa estar logado na aplicação e na tela de "Settings"      |
| Trigger           | O Ator clica na caixa de "Theme"                                      |
| Fluxo Principal   | 1. Ator seleciona um dos temas                                        |
|                   | 2. O Sistema muda de acordo com a opção escolhida e salva as mudanças |
| Fluxo Alternativo | N/A                                                                   |
| Extensões         | N/A                                                                   |
| Pós-condições     | O Ator permanece na tela "Settings"                                   |
| Regras de negócio | RN4                                                                   |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>6 - Encerrar Sessão</h3>

| Propriedade       | Descrição                                                        |
| ----------------- | ---------------------------------------------------------------- |
| Nome              | Encerrar sessão                                                  |
| Objetivo          | Encerrar sessão na aplicação                                     |
| Atores            | Usuário                                                          |
| Pré-condições     | O usuário precisa estar logado na aplicação e na na tela de User |
| Trigger           | Ator seleciona "Sign out"                                        |
| Fluxo Principal   | 1. O Sistema solicita uma confirmação da ação [A1]               |
|                   | 2. O ator confirma a ação                                        |
|                   | 3. O sistema efetua o logout                                     |
| Fluxo Alternativo | A1 Não confirmar a ação                                          |
|                   | A1.1 O Sistema não efetua o logout                               |
|                   | A1.2 Fim do caso de uso                                          |
| Extensões         | N/A                                                              |
| Pós-condições     | O Ator é redirecionado para a tela de "Sign In"                  |
| Regras de negócio | RN4                                                              |

<SlideNumber/>

---

## Casos de Uso<span> ></span> <h3>7.1 - Registrar Tarefa</h3>

| Propriedade       | Descrição                                                                             |
| ----------------- | ------------------------------------------------------------------------------------- |
| Nome              | Registrar tarefa                                                                      |
| Objetivo          | Criar uma tarefa na aplicação                                                         |
| Atores            | Usuário                                                                               |
| Pré-condições     | O ator precisa estar logado na aplicação e na página "Today", "Upcoming" ou "Someday" |
| Trigger           | O ator clica no sinal "+"                                                             |
| Fluxo Principal   | 1. O ator digita a descrição da tarefa, a data de inicio e data limite                |
|                   | 2. O sitema salva a nova tarefa                                                       |
| Fluxo Alternativo | N/A                                                                                   |
| Extensões         | N/A                                                                                   |
| Pós-condições     | O ator continua na mesma página                                                       |
| Regras de negócio | RN3, RN4, RN5                                                                         |

---

## Casos de Uso<span> ></span> <h3>7.2 - Deletar Tarefa</h3>

| Propriedade       | Descrição                                                                             |
| ----------------- | ------------------------------------------------------------------------------------- |
| Nome              | Deletar tarefa                                                                        |
| Objetivo          | Deletar uma tarefa na aplicação                                                       |
| Atores            | Usuário                                                                               |
| Pré-condições     | O ator precisa estar logado na aplicação e na página "Today", "Upcoming" ou "Someday" |
| Trigger           | O ator clica no icone de deletar (lixeira)                                            |
| Fluxo Principal   | 1. O sistema pede uma confirmação da ação [A1]                                        |
|                   | 2. O ator confirma a ação                                                             |
|                   | 3. O sistema deleta a tarefa                                                          |
| Fluxo Alternativo | A1 Não confirmar a ação                                                               |
|                   | A1.1 O Sistema não deleta a tarefa                                                    |
|                   | A1.2 Fim do caso de uso                                                               |
| Extensões         | N/A                                                                                   |
| Pós-condições     | O ator continua na mesma página                                                       |
| Regras de negócio | RN4                                                                                   |

---

## Casos de Uso<span> ></span> <h3>8 - Exibir a temperatura atual</h3>

| Propriedade       | Descrição                                                       |
| ----------------- | --------------------------------------------------------------- |
| Nome              | Exibir a temperatura atual                                      |
| Objetivo          | Exibir a temperatura atual na aplicação                         |
| Atores            | N/A                                                             |
| Pré-condições     | O Usuário precisa estar logado na aplicação e na página "Today" |
| Trigger           | N/A                                                             |
| Fluxo Principal   | 1. O sistema exibe a temperatura atual do dia na tela           |
| Fluxo Alternativo | N/A                                                             |
| Extensões         | N/A                                                             |
| Pós-condições     | N/A                                                             |
| Regras de negócio | N/A                                                             |

---

## Links

- https://balsamiq.cloud/sxy21mi/pcz15al

<SlideNumber/>
