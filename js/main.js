document.querySelector('.container').addEventListener("mouseover",()=>{
    const bar = document.getElementById('bars')
    const div = document.querySelector('.bar-container')
    const icon = document.querySelector('.icon-container')
    div.style.transition = ".7s"
    div.style.backgroundColor = "#242323"
    div.style.borderRadius = "2em 0 0 2em"
    bar.style.color = "#A800DB"
    icon.style.display = "flex"
    icon.style.animationName = "lefts"
    icon.style.animationDuration = "2s"
})
document.querySelector('.container').addEventListener("mouseout",()=>{
    const bar = document.getElementById('bars')
    const div = document.querySelector('.bar-container')
    const icon = document.querySelector('.icon-container')
    div.style.backgroundColor = "transparent"
    div.style.borderRadius = " 0 0 0 0"
    bar.style.color = "black"
    icon.style.display = "none"
})