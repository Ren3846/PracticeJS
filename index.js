const views = [
    {id: 1, title: 'Mountain', title2: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains'},
    {id: 2, title: 'Beach', title2: 'Plan your next beach trip with these fabulous destinations'},
    {id: 3, title: 'Desert', title2: 'It\'s the desert you\'ve always dreamed of'},
    {id: 4, title: 'Galaxy', title2: 'Seriously, straight up, just blast off into outer space today'}
]

const toHTML = view => `
 <div class="card" >
        <div class="content card-body">
            <h2 class="title">${view.title}</h2>
            <p class="copy">${view.title2}</p>
            <button class="btn btn-primary" data-btn="Trips" data-id="${view.id}">View Trips</button>
        </div>
    </div>
`

function render() {
    const html = views.map(toHTML).join('')  //( view => toHTML(view))
    document.querySelector('#views').innerHTML = html
}

render()

const modalView = $.modal({
    title: 'About trip',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
                modalView.close()
        }},
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const  id = +event.target.dataset.id

    if (btnType === 'Trips') {
        const view = views.find(f => f.id === id)
        modalView.setContent(`
        <strong>${view.title}<p>${view.title2}</p></strong>
        `)
        modalView.open()
    }
})

