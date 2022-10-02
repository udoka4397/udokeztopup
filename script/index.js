let intro = document.querySelector('.welcome');

// let startBtn = document.querySelector('.get_started');
// startBtn.addEventListener('click', function(event){
// intro.classList.toggle("display-none");
// console.log('shown');
// });

// let button = document.querySelector('#button');
// button.addEventListener('mouseenter', ()=>{
//     button.innerHTML = "<i class='fa-solid fa-xmark'></i>";
//     console.log('mouse entered');
// });
// button.addEventListener('mouseleave', function(){
//     button.innerHTML = "<i class='fa-solid fa-bars'></i>";
//     console.log('mouse left');

// });
// function add(a,b=10) {
//     return a+b;
// }

// console.log(add(1));
// console.log(add(5,11));
// console.log(add(300000));
// console.log(add(1,0.5));

$( "button.continue" ).html( "Next Step..." )
document.querySelector('button.conyinue').innerHTML('Next Step...')
let listParent = document.querySelector('.nav-list');
listParent.addEventListener('click', (event) => {

    switch (event.target.innerText) {
        case 'Home':
            console.log('Were are home');

            break;
        case 'About':
            console.log('Were are About');

            break;
        case 'contact':
            console.log('Were are contact');

            break;

        default:

            console.log(event.target.innerText);
            break;
    }
    if (event.target.innerText == 'Home') {
        console.log('Were are home');
    } else if (event.target.innerText == 'About') {
        console.log("ABout us here");
    }
    else {
        console.log(event.target.innerText);

    }
})