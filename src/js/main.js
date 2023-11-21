window.addEventListener('load', function() {
    hamburgerActivator();
})


function hamburgerActivator() {
    const hamburgers = document.querySelectorAll('.header-hamburger')
    const dropdownMenu = document.querySelector('.navBar-dropdown')
    const body = document.body;

    hamburgers.forEach((e)=> {
        e.addEventListener('click', ()=> {
            // как это сократить?)))
            if(
                hamburgers[0].classList.contains('active') 
                ||
                hamburgers[1].classList.contains('active'))
                {
                    hamburgers[0].classList.remove('active')
                    hamburgers[1].classList.remove('active')

                }else {
                    hamburgers[0].classList.remove('active')
                    hamburgers[1].classList.remove('active')
                    hamburgers[0].classList.add('active')
                    hamburgers[1].classList.add('active')
            }
            dropdownMenu.classList.toggle('open')
            body.classList.toggle('locked')
        })
    })
}