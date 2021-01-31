let button = document.getElementById('fortuneButton');
let fortune= document.getElementById("fortune");

let fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
  'A fresh start will put you on your way.',
  'A golden egg of opportunity falls into your lap this month.',
  'A smile is your personal welcome mat.',
  'All your hard work will soon pay off.'
]

function fortuneSelector(){
   let randomFortune=Math.floor(Math.random()* fortunes)
   return fortunes(randomFortune)
}

function showFortune(){
    fortune.innerHTML=fortuneSelector()
    
}