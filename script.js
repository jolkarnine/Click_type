// let bot = document.querySelectorAll('button')

// let men = Array.from(bot)

// let imgDiv = document.querySelector('#img-div')


// men.map(function(bee){
//     bee.addEventListener('click' , function(shofik){
//         imgDiv.innerHTML = `<img src="${shofik.target.dataset.url}" alt="pic">`
//     })
// })

let a = document.querySelectorAll('a')

let arr = Array.from(a)

let h1 = document.querySelector('h1')

arr.map(function(john){
    john.addEventListener('click' , function(smith){
        h1.innerHTML += smith.target.dataset.goal
    })
})







// a.addEventListener('click' , function(){
//     h1.innerHTML = 'Alhamdulillah'
// })