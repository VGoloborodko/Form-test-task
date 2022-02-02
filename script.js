const form = document.querySelector('form');
form.addEventListener('submit', formSend);

const policy = document.querySelector('.policy');
policy.addEventListener('input', () => {
    policy.value = policy.value.toUpperCase();
});

const lastName = document.querySelector('.lastName');
lastName.addEventListener('keyup', noSpaces);
const firstName = document.querySelector('.firstName');
firstName.addEventListener('keyup', noSpaces);

const clue = document.querySelector('.clue');
const result = document.querySelector('.result');
const date = document.querySelector('.date');

function noSpaces() {
    lastName.value = lastName.value.replace(/[\s]/g, '');
    firstName.value = firstName.value.replace(/[\s]/g, '');
}

async function formSend(event) {
    event.preventDefault();

    let formReq = document.querySelectorAll('.req');
    let error = 0;

    for(let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);

        if (input.classList.contains('policy')) {
            if (policyTest(input)) {
                formAddError(input);
                error++;
            } if (clue.innerHTML === '') {
                formRemoveError(input);
            }
        } else if (input.classList.contains('lastName')) {
            if (fullNameTest(input)){
                formAddError(input);
                error++;
            }if (clue.innerHTML === '') {
                formRemoveError(input);
            }
        } else if (input.classList.contains('firstName')) {
            if (fullNameTest(input)){
                formAddError(input);
                error++;
            }if (clue.innerHTML === '') {
                formRemoveError(input);
            }
        } else {
            if (input.value === '') {
                if (clue.innerHTML === '') {
                    formRemoveError(input);
                } else {
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    // const data = new FormData(event.target);

    // if (policy.value === '' && lastName.value === '' && firstName.value === '' && date.value === '') {
    //     console.log('error')
    // } else {
    //     let fullName = document.createElement('p');
    //     result.append(fullName);
    //     fullName.classList.add('meaning-forms');
    //     fullName.innerHTML = `${data.get('firstName')} ${data.get('lastName')}`;

    //     let policy = document.createElement('p');
    //     result.append(policy);
    //     policy.classList.add('meaning-forms');
    //     policy.innerHTML = `Номер полиса: ${data.get('policy')}`;

    //     clue.innerHTML = ''

    //     e.target.reset();
    // }

}

function formAddError(input) {
    input.parentElement.parentElement.classList.add('error');
}

function formRemoveError(input) {
    input.parentElement.parentElement.classList.remove('error');

}

function policyTest(input) {
    return !/^[A-Za-z0-9]+$/i.test(input.value);
}

function fullNameTest(input) {
    return !/^([а-яё-]+|[a-z-]+)$/i.test(input.value);
}
