const divSection = document.querySelector('#adivce');
const heading = document.querySelector('.heading');
const p = document.querySelector('.advice')

fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(({slip})=>{
    const {id, advice} = slip;
    heading.innerHTML = `Advice # ${id}`
    p.innerText = advice
})