document.querySelector('.arrow__button').addEventListener('click', function () {
  document.querySelector('.main__container').classList.toggle('hide__menu');
})

document.querySelector('.menu__button').addEventListener('click', function () {
  document.querySelector('.nav__links').classList.toggle('active');
})

document.querySelectorAll('.nav__links li a').forEach(el => el.addEventListener('click', function () {
  document.querySelectorAll('.nav__links li').forEach(el => el.classList.remove('active'));
  el.parentElement.classList.add('active')
}))


// document.querySelector('.sect__arrow').addEventListener('click', function(){
//     document.querySelector('.sect__arrow svg').style.transform = 'rotate(90deg) scale(-1)';
//     setTimeout(() => {
//         document.querySelector('.sect__arrow svg').style.transform = 'rotate(90deg) scale(1)';
//     }, 250);
// })
document.querySelectorAll('.tab__btn').forEach(el => el.addEventListener('click', function () {
  document.querySelectorAll('.tab__btn').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab__content').forEach(el => el.classList.remove('active'));
  let tabNum = [...el.parentElement.children].indexOf(el);
  el.classList.add('active');
  document.querySelector('.tabs__content').children[tabNum].classList.add('active');
}))



// document.getElementById('arrowtoHome').addEventListener('click', function(){
//     single_click_timeout = setTimeout(function() {
//         alert('click')
//     }, 400);
//     document.getElementById('arrowtoHome').setAttribute('href', '#contacts');
// })
// .addEventListener('dblclick', function(e){
//     clearTimeout(single_click_timeout);
//     alert('double click')
//     e.stopPropagation();

//     document.getElementById('arrowtoHome').setAttribute('href', '#home');
//         
// })


let numClicks = 0;
let sections = [];
[...document.querySelector('.right__container').children].forEach(el => sections.push(el.id));

function handleClick(e) {
  var goto = e.currentTarget.getAttribute('data-id');
  var gotoPrev = document.getElementById(e.currentTarget.getAttribute('data-id'));
  var gotoNext = document.getElementById(sections[sections.indexOf(goto) + 1]);
  numClicks++;
  if (numClicks === 1) {
    singleClickTimer = setTimeout(() => {
      numClicks = 0;
      gotoNext.scrollIntoView();

    }, 400);
  } else if (numClicks === 2) {
    clearTimeout(singleClickTimer);
    e.currentTarget.children[0].style.transform = 'rotate(90deg) scale(-1)';
    setTimeout(() => {
      e.currentTarget.children[0].style.transform = 'rotate(90deg) scale(1)';
    }, 250);
    gotoPrev.scrollIntoView();
    numClicks = 0;
  }
};
document.querySelectorAll('.sect__arrow').forEach(el => el.addEventListener('click', (e) => handleClick(e)));