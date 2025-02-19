const divSection = document.querySelector('#adivce');
const heading = document.querySelector('.heading');
const p = document.querySelector('.advice');
const btn = document.querySelector('.shuffleBtn')

document.addEventListener("DOMContentLoaded", function(){
    findMeAdvice();
})
function findMeAdvice(){
    try{
        fetch('https://api.adviceslip.com/advice')
        .then(res => {
            if(!res.ok){
                throw Error(`The error was ${res.response}`)
            }else{
            return res.json()
            }
        })
        .then(({slip})=>{
            const {id, advice} = slip;
            heading.innerHTML = `Advice # ${id}`
            p.innerText = advice
        })
    }catch(e){
        console.log(e)
    }
}
btn.addEventListener("click", function(){
    findMeAdvice();
})