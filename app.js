const confirmButton = document.querySelector('button')
const modal = document.querySelector('sw-modal')
confirmButton.addEventListener('click', () => {
    modal.open()
})

modal.addEventListener('confirm', () => {
    console.log('Confirmed..')
})

modal.addEventListener('cancel', () => {
    console.log('Cancelled..')
})