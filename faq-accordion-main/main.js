const accordionBtns = document.querySelectorAll('#accordion-btn')

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')
        const answer = this.nextElementSibling
        const plusIcon = this.querySelectorAll('.plus-icon')
        const minusIcon = this.querySelectorAll('.minus-icon')

        if(answer.style.maxHeight) {
            answer.style.maxHeight = null
            plusIcon.style.diplay = 'block'
            minusIcon.style.display = "none"
        } else {
            answer.style.maxHeight = answer.scrollHeight +
            'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})