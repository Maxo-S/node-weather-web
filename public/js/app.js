const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message = document.querySelector('#message')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchEl.value
    message1.textContent = 'Loading...'
    message.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message.textContent = data.forecast
            }
        })
    })
})