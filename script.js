document.querySelectorAll('a[href^="#').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        document.querySelector(this.getAttribute('href')).srollintowiew({
            behavior: 'smooth'
        })
    })
})