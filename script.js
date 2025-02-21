document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('exampleFormControlInput1');
    const passwordInput = document.getElementById('inputPassword5');
    const loginButton = document.querySelector('.btn-primary');
    const googleButton = document.querySelector('.google-button');
    const linkedinButton = document.querySelector('.button');

    // Função para validar o email
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Função para validar a senha (deve conter pelo menos uma letra e um número)
    const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(password);

    // Função para exibir mensagens de erro
    const showError = (input, message) => {
        const errorText = input.parentElement.querySelector('.error-text') || document.createElement('div');
        errorText.className = 'error-text';
        errorText.style.cssText = 'color: red; font-size: 0.875rem; margin-top: 0.25rem;';
        errorText.textContent = message;
        
        if (!input.parentElement.contains(errorText)) {
            input.insertAdjacentElement('afterend', errorText);
        }
    };

    // Função para remover mensagens de erro
    const removeError = (input) => {
        const errorText = input.parentElement.querySelector('.error-text');
        if (errorText) errorText.remove();
    };

    // Limpar mensagens de erro ao digitar
    emailInput.addEventListener('input', () => removeError(emailInput));
    passwordInput.addEventListener('input', () => removeError(passwordInput));

    // Validação ao clicar no botão de login
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validar email
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Por favor, preencha o campo de email.');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um email válido.');
            isValid = false;
        }

        // Validar senha
        if (!passwordInput.value.trim()) {
            showError(passwordInput, 'Por favor, preencha o campo de senha.');
            isValid = false;
        } else if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'A senha deve conter 8-20 caracteres, com pelo menos uma letra e um número.');
            isValid = false;
        }

        // Redirecionar se tudo estiver válido
        if (isValid) window.location.href = 'dashboard.html';
    });

    // Botões de login com Google e LinkedIn
    googleButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Login com Google');
    });

    linkedinButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Login com LinkedIn');
    });
});
