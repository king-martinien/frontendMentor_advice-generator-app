let slip = { id: 0, advice: '' }
let idElement = document.querySelector('.id');
let adviceElement = document.querySelector('.quote__text p');
let diceButton = document.querySelector('.quote__dice');
let blockquote = document.querySelector('.quote__text');


fetch(`https://api.adviceslip.com/advice`).then(response => {

    // Vérifie si la response est un succcès
    if (response.status !== 200) {
        console.log("Look like there was a problem Status : " + response.status);
        return;
    }

    // On récupère la reponse en Json
    response.json().then(data => {
        slip = data.slip
        idElement.classList.remove('skeleton');
        blockquote.classList.remove('skeleton');
        adviceElement.classList.add('active')

        idElement.innerHTML = slip.id;
        adviceElement.innerHTML = slip.advice;
    })
})

diceButton.addEventListener('click', () => {
    location.reload();
})
