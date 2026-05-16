function validateForm() {

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

if (name === '' || email === '' || message === '') 
    {
    alert('Por favor, preencha todos os campos.');
    return false;
}

if (name.length < 3 || name.length > 50)
    {
        alert('O nome deve conter entre 3 e 50 caracteres.');
        return false;
}

if (email.length < 5 || email.length > 50)
    {
        alert('O email deve conter entre 5 e 50 caracteres.');
        return false;
}

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email)) 
    {
        alert('Por favor, insira um email válido.');
        return false;
    }

    return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Formulário enviado com sucesso!');
    }
})