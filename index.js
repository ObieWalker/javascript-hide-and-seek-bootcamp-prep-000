function getFirstSelector(selector){

  const element = document.getElementById('app').querySelector(selector)
  return element
}

function nestedTarget(){
  const pulled = document.querySelector('#nested .target')
  return pulled
}

function increaseRankBy(n){
  let increase = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i=0; i<increase.length; i++){
    increase[i].innerHTML = parseInt(increase[i].innerHTML) +n

  }
return increase
}

function deepestChild(){
  let node = document.getElementById('app').querySelectorAll('#grand-node div div div')

  return node
}
