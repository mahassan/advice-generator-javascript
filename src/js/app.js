const divSection = document.querySelector('#adivce');
const heading = document.querySelector('.heading');
const p = document.querySelector('.advice');
const btn = document.querySelector('.shuffleBtn')
const h1 = document.querySelector('h1')

document.addEventListener("DOMContentLoaded", function(){
    findMeAdvice();
})
async function findMeAdvice(){
    try{
        const endpoint = await fetch('https://api.adviceslip.com/advice');
        const data = await endpoint.json()
            const {id, advice} = data.slip;
            h1.innerHTML = `Advice # ${id}`
            p.innerText = advice
            p.classList.add("text-white")
    }catch(error){
            p.innerText = error;
    }
}
btn.addEventListener("click", function(){
    findMeAdvice();
})