const textButton = document.getElementById('text-button')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

textButton.addEventListener('click', toggleButton)