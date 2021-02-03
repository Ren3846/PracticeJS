let views = [
    {id: 1, title: 'Mountain', title2: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"},
    {id: 2, title: 'Beach', title2: 'Plan your next beach trip with these fabulous destinations', image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"},
    {id: 3, title: 'Desert', title2: 'It\'s the desert you\'ve always dreamed of', image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"},
    {id: 4, title: 'Galaxy', title2: 'Seriously, straight up, just blast off into outer space today', image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"}
]

const toHTML = view => `
     <div class="card" >
           <div class="content card-body">
                   <h2 class="title"> ${view.title} </h2>
                   <p class="copy"> ${view.title2}> </p>
                   <button class="btn" data-btn="trips" data-id="${view.id}"> View Trips </button>
                   <button class="btn" data-btn="remove" data-id="${view.id}"> Delete Trip </button>
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
    const view = views.find(f => f.id === id)

    if (btnType === 'trips') {
        modalView.setContent(`<strong>${view.title}<p>${view.title2}</p></strong>`)
        modalView.open()
    } else if (btnType === 'remove') {
        $.confirm( {
            title: 'Are you sure?',
            content: `<p>You are delete trip: <strong>${view.title}</strong></p>`
        }).then(() => {
            views = views.filter(f => f.id !== id)
            render()
        }).catch(() => {
            console.log('Cancel')
        })
    }
})

