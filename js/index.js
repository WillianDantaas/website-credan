let navServices = document.querySelector('.navdown')
let btnServices = document.getElementById('btnServices')


btnServices.addEventListener('click', () => {

    if (navServices.style.display === 'none') {
        navServices.style.display = 'block'
    } else {
        navServices.style.display = 'none'
    }

})
