let slip = {}
let idElement = document.querySelector('.id');
let adviceElement = document.querySelector('.quote__text p');
let diceButton = document.querySelector('.quote__dice');
let diceImage = diceButton.querySelector('img');
let blockquote = document.querySelector('.quote__text');

/**
 * Remet tous les elements qui reçoivent les données à zéro
 */
const resetElements = () => {
    idElement.classList.add('skeleton')
    blockquote.classList.add('skeleton')
    adviceElement.classList.remove('active')

    idElement.innerHTML = ''
    adviceElement.innerHTML = ''
    diceImage.style.animation = "anim 0.3s 1"

}

/**
 * Récuperer les données de l'API
 */
const fetcher = () => {
    fetch(`https://api.adviceslip.com/advice`, { cache: 'no-cache' }).then(response => {

        // Vérifie si la response est un succcès
        if (response.status !== 200) {
            console.log("Look like there was a problem Status : " + response.status);
            return;
        }

        // On récupère la reponse en Json
        response.json().then(data => {
            diceImage.style.animation = "none"
            idElement.classList.remove('skeleton');
            blockquote.classList.remove('skeleton');
            adviceElement.classList.add('active')

            idElement.innerHTML = data.slip.id;
            adviceElement.innerHTML = data.slip.advice;
        })
    })

}

fetcher();

diceButton.addEventListener('click', () => {

    resetElements()
    fetcher();
})
