const searchInp = document.querySelector('#search');
const items = document.querySelectorAll('.item');

searchInp.addEventListener('keyup', (event)=> {
    let word = event.target.value.toLowerCase();

    items.forEach(item => {
        item.querySelector('h3').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })

})