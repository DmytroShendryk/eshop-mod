const form = document.getElementById('singup');
const formName = document.getElementById('name');
const requiredFields = form.querySelectorAll('.required');
const formDataEl = document.querySelector('.form-data');

const EMPTY_FIELD = 'The field is empty';
const INCORRECT_VALUE = 'Incorrect value';

function printError(el, errorMessage) {
    if (errorMessage) {
        form.elements[el].classList.add('has-error');
    } else {
        form.elements[el].classList.remove('has-error');
    }
    form.elements[el].parentElement.querySelector('small').textContent = errorMessage;
}

function sendFormToHTML() {
    console.log('valid');

    for (let i = 0; i < form.elements.length - 1; i++) {
        const div = document.createElement('div');
        let formElementValue = form.elements[i].value;

        if (form.elements[i].type === 'checkbox') {
            formElementValue = form.elements[i].checked;
        }
        if (form.elements[i].type === 'radio') {
            formElementValue = form.elements['radio'].value;
        }
        div.textContent = `${form.elements[i].name}: ${formElementValue}`;
        formDataEl.append(div);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formValid = true;

    // Check the Errors
    requiredFields.forEach((field) => {
        if (field.value === '') {
            printError(field.id, EMPTY_FIELD);
            formValid = false;
        }

        if (field.getAttribute('type') === 'email' && !field.value.includes('@')) {
            printError(field.id, INCORRECT_VALUE);
            formValid = false;
        }
    });

    // Send the Form if the Form is valid
    if (formValid) {
        sendFormToHTML();
    }
});

formName.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
        printError('name', '');
    }
});
