const form = document.querySelector('.login-form');
const btn = document.querySelector('button[type="submit"]');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = form.elements;

    for (const element of formElements) {
        if (element.tagName === 'INPUT' && element.value.trim() === '') {
            alert('All form fields must be filled in');
            return;
        }
    }

    const dataObj = {
        email: formElements.email.value.trim(),
        password: formElements.password.value.trim(),
    }

    console.log(dataObj);
    
    form.reset();
})
