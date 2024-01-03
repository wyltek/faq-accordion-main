const accordionBtns = document.querySelectorAll('#accordion-btn')

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')
        const answer = this.nextElementSibling
        const plusIcon = this.querySelector('.plus-icon')
        const minusIcon = this.querySelector('.minus-icon')

        if(answer.style.maxHeight) {
            answer.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = "none"
        } else {
            answer.style.maxHeight = answer.scrollHeight +
            'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})
