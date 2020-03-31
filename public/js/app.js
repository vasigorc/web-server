console.log('Client side javascript file is loaded')


// returns the first element that matches the query
const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit', event => {
    event.preventDefault()
    const search = document.querySelector('input')
    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then(data => console.log(data)).catch(error => console.log(error))
    })

})