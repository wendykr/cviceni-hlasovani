const formElm = document.querySelector('#form');
const voterElm = document.querySelector('#voter');
const zpravaElm = document.querySelector('#zprava');

const sendVote = (event) => {
    event.preventDefault();

    const objectVote = {
        optionId: 1,
        voterName: voterElm.value
    }

    fetch('https://apps.kodim.cz/daweb/hlasovani/api/poll/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectVote),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'error') {
            zpravaElm.innerHTML = `<span class="error">Nelze hlasovat dvakrát se stejným jménem 😪</span>`;
        } else {
            zpravaElm.innerHTML = `<span class="sucess">Váš hlas byl odeslán 🤗</span>`;
            voterElm.value = '';
        }
    });
}

formElm.addEventListener('submit', sendVote);

// const formButtonElm = document.querySelector('.form__button');

// const sendVote = () => {

//     const objectVote = {
//         optionId: 1,
//         voterName: 'Vendula'
//     }

//     fetch('https://apps.kodim.cz/daweb/hlasovani/api/poll/1', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(objectVote),
//     })
//     .then(response => response.json())
//     .then(data =>
//         console.log(data));
// }

// formButtonElm.addEventListener('click', sendVote);