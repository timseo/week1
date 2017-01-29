console.log('Connected!')

// All of my images

var kitten = 'https://www.hirerush.com/blog/wp-content/uploads/2016/02/playful-kitten-6683.jpg'

var puppy = 'http://www.pawderosa.com/images/puppies.jpg'

var cat = 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx'

var dog = 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-medium-landing-hero.ashx'

var unicorn = 'https://s-media-cache-ak0.pinimg.com/originals/e3/ab/d2/e3abd2c3b64151e4c1dfe59e5a2227dc.jpg'

var cats = 'http://brightmags.com/wp-content/uploads/2015/06/cats.jpg'

var queen = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqgM6oM5Yr21KVuoVVGW4RazIZZDXkrp1dXV0iabbVRA02xP3j'

var kake = 'https://herschelian.files.wordpress.com/2012/06/2candlebdaycake.png'

document.getElementById('greeting').addEventListener('click', function(){
  alert('HELLO')
})

// document.getElementById('dogCat').addEventListener('click', function(){
//   if(this.src === kitten) {
//     this.src = puppy
//   } else {
//     this.src = kitten
//   }
// })

//ternary above scrip works too
document.getElementById('dogCat').addEventListener('click', function(){
  this.src = (this.src === kitten ? puppy : kitten)
})

var backgroundChoices = document.getElementsByClassName('backgroundChoice')
  for (var i = 0; i < backgroundChoices.length; i++) {
    backgroundChoices[i].addEventListener('click', function(){
      var newBackground
      if (this.id === 'cat') {
        newBackground = cat
      } else if (this.id === 'dog') {
        newBackground = dog
      } else {
        newBackground = unicorn
      }
      // document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + newBackground + ')'
      document.getElementsByTagName('body')[0].background = newBackground
      // also works!!!!!

    })
  }

var favThings =
document.getElementsByClassName('favThings')

for (var i = 0; i < favThings.length; i++) {
  favThings[i].addEventListener('mouseover', function(){
    this.style.color = 'pink'
  })
  favThings[i].addEventListener('mouseout', function() {
    this.style.color = 'black'
  })
}

//super bonus
document.getElementById('once').addEventListener('click', handler)

function handler(e) {
  e.target.removeEventListener(e.type, arguments.callee)
//e is for event ... event can also be spelled out
  alert("That's it")
}
















// null
