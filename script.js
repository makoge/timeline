const mainHeader=document.getElementById('main-header')

mainHeader.addEventListener('mouseover', ()=>{
    const colors=["#F4A381", "#01ABA9", "#ffdc40"]
    const randomColor=colors[Math.floor(Math.random()*colors.length)]
    background.color=randomColor
})