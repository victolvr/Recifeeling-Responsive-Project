document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('exampleFormControlInput1');
    const passwordInput = document.getElementById('inputPassword5');
    const loginButton = document.querySelector('.btn-primary');
    const googleButton = document.querySelector('.google-button');
    const linkedinButton = document.querySelector('.button');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => /^[A-Za-z0-9]{8,20}$/.test(password);

    const showError = (input, message) => {
        const errorText = input.parentElement.querySelector('.error-text') || document.createElement('div');
        errorText.className = 'error-text';
        errorText.style.cssText = 'color: red; font-size: 0.875rem; margin-top: 0.25rem;';
        errorText.textContent = message;
        
        if (!input.parentElement.contains(errorText)) {
            input.insertAdjacentElement('afterend', errorText);
        }
    };

    const removeError = (input) => {
        const errorText = input.parentElement.querySelector('.error-text');
        if (errorText) errorText.remove();
    };

    emailInput.addEventListener('input', () => removeError(emailInput));
    passwordInput.addEventListener('input', () => removeError(passwordInput));

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        let isValid = true;

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um email válido.');
            isValid = false;
        }

        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'A senha deve conter 8-20 caracteres alfanuméricos.');
            isValid = false;
        }

        if (isValid) window.location.href = 'dashboard.html';
    });

    googleButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Login com Google');
    });

    linkedinButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Login com LinkedIn');
    });
});