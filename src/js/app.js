const divSection = document.querySelector('#adivce');
const heading = document.querySelector('.heading');
const p = document.querySelector('.advice');
const btn = document.querySelector('.shuffleBtn')

document.addEventListener("DOMContentLoaded", function(){
    findMeAdvice();
})
async function findMeAdvice(){
    try{
        const endpoint = await fetch('https://api.adviceslip.com/advice');
        const data = await endpoint.json()
            const {id, advice} = data.slip;
            heading.innerHTML = `Advice # ${id}`
            p.innerText = advice
            console.dir(p)
    }catch(error){
        p.innerText = error;
    }
}
btn.addEventListener("click", function(){
    findMeAdvice();
})