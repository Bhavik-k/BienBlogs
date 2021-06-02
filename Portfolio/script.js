
document.getElementsByClassName('fa-bars')[0].addEventListener('click', function (params) {
    menu = document.getElementById('menu').classList.add('menuout')

})

document.querySelector('#menu p').addEventListener('click', function (params) {
    menu = document.getElementById('menu').classList.remove('menuout')

})