// les input sont stocké dans des variables
const namee = document.querySelector('#name');
const number = document.querySelector('#numero');
const mois = document.querySelector('#mois');
const annee = document.querySelector('#annee');
const cvc = document.querySelector('#cvc');

// les messages d'erreur sont stockées dans des variables
const err = document.querySelectorAll('.err');
const errName = err[0];
const errNumber = err[1];
const errDate = err[2];
const errCvc = err[3];

// les boutons sont stockées dans des variables
const confirme = document.querySelector('#confirm');
const continu = document.querySelector('#continue');

// écouteur d'événement sur les bouutons
// continu.addEventListener('click', ()=>{
//     console.log('coucou');
// })

confirme.addEventListener('click', ()=>{

    /* NAME */
    // vérifier si :
    // vide
    // que des lettres
    // plus de 60 charactères
    // xss

    if(namee.value === ''){

        errName.textContent = 'Veuillez renseigner un nom';
        namee.style.border = '1px solid red';


    }else if( namee.value.length >= 100 ){

        errName.textContent = 'Nom non conforme';
        namee.style.border = '1px solid red';

    }else if( namee.value.match('<(|\/|[^\/>][^>]+|\/[^>][^>]+)>') ){

        errName.textContent = 'Nom non conforme';
        namee.style.border = '1px solid red';

    }else if( !namee.value.match(/^[a-zA-Z]+$/) ){

        errName.textContent = 'Nom non conforme';
        namee.style.border = '1px solid red';

    }else{

        verifName = namee.value;
        errName.textContent = '';
        namee.style.border = '2px solid #e8e8e8';

    }


    /* NUM CARD */
    // vérifier si :
    // vide
    // que des chiffres
    // 16 chiffres

    if(number.value === ''){

        number.style.border = '1px solid red';
        errNumber.textContent = 'Veuillez renseigner ce champ'


    }else if( !number.value.match(/^\d+$/)){

        number.style.border = '1px solid red';
        errNumber.textContent = 'Wrong format, numbers only'

    }else if( number.value.length != 16){

        number.style.border = '1px solid red';
        errNumber.textContent = 'Le numéro doit contenir 16 chiffres'

    }else{

        verifNum = number.value;
        errNumber.textContent = '';
        number.style.border = '2px solid #e8e8e8';

    }

    /* DATE */
    // vérifier si :
    // vide
    // que des chiffres 
    // min 01; max 12
    // min 2023
    // xss

    if(mois.value === ''){

        mois.style.border = '1px solid red';
        errDate.textContent = 'veuillez renseigner une date valide';

    }else if( !mois.value.match(/^\d+$/) ){

        mois.style.border = '1px solid red';
        errDate.textContent = 'Wrong format, numbers only';

    }

    if(annee.value === ''){

        annee.style.border = '1px solid red';
        errDate.textContent = 'veuillez renseigner une date valide';

    }

    /* CVC */
    // vérifier si :
    // vide
    // que des chiffres
    // 3 chiffres
    // xss

    if(cvc.value === ''){
        cvc.style.border = '1px solid red'
    }
})


