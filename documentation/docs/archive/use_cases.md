# Casos de Uso

1. Registrar Conta
    - Nome: Registrar conta
    - Objetivo: Criar conta na aplicação.
    - Atores: Usuário.
    - Pré-condições: Ator na tela de cadastro
    - Trigger: Ator seleciona "Sign up"
    - Fluxo Principal:
        1. Ator digita um nome de usuário, email e senha nos campos do formulário
        2. Ator seleciona "Sign up"
        3. Sistema redireciona para tela de login
    - Fluxo alternativo:
        1. Ator seleciona "Sign up with Github"
        2. Sistema redireciona para telas de confirmação
        3. Ator seleciona "I accept"
        4. Sistema redireciona para tela de login.
    - Extensões: N/A
    - Pós-condições: Ator na tela de login.
    - Regras de negócio: RN1
    
2. Deletar Conta
    - Nome: Deletar conta
    - Objetivo: Deletar conta da aplicação.
    - Atores: Usuário.
    - Pré-condições: Ator precisa estar logado e na página "Account settings".
    - Trigger: Ator clica em "Delete your Account"
    - Fluxo Principal:
        1. Ator clica no botão "Delete your Account"
        2. Sistema pede uma confirmação da ação.
        3. Ator confirma a ação
        4. Sistema deleta a conta e redireciona para tela de sign up.
    - Extensões: N/A
    - Pós-condições: Ator na tela de login
    - Regras de negócio: N/A

3. Alterar Email
    - Nome: Alterar email
    - Objetivo: Alterar endereço de email da conta.
    - Atores: Usuário.
    - Pré-condições: Ator precisa estar logado e na página "Account settings".
    - Trigger: Ator clica em "Change my email"
    - Fluxo Principal:
        1. Ator preenche formulário com novo email.
        2. Ator clica em "Save Changes"
        3. Sistema pede uma confirmação da ação.
        4. Ator confirma a ação
        5. Sistema altera email, mantém o ator na página "Account Settings" e mostra uma notificação caso a ação seja bem-sucedida.
    - Extensões: N/A
    - Pós-condições: N/A
    - Regras de negócio: RN2
        
4. Iniciar Sessão
    - Nome: Iniciar sessão
    - Objetivo: Iniciar sessão na aplicação.
    - Atores: Usuário.
    - Pré-condições: O usuário não pode estar logado na aplicação e possuir uma conta registrada.
    - Trigger: Ator seleciona "Sign in"
    - Fluxo Principal:
        1. Ator digita email e senha nos campos do formulário
        2. Ator seleciona "Sign in"
        3. Sistema redireciona para tela inicial de "Today"
    - Fluxo alternativo:
        1. Ator seleciona "Sign in with Github"
        2. Sistema redireciona para telas de confirmação
        3. Ator seleciona "I accept"
        4. Sistema redireciona para inicial de "Today"
    - Extensões: N/A
    - Pós-condições: Ator na tela "Today"
    - Regras de negócio: N/A

5. Usar Pomodoro
6. Arrastar Tarefa
7. Arrastar projeto
8. Ver previsão da temperatura
9. Configurar envio de email com resumo do dia
10. Manter Tarefa
11. Manter Projeto
12. Mudar tema da aplicação