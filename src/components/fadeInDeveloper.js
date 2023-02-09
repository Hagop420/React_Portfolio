
// document.addEventListener('load', () => {
//   const introText = document.querySelector('.opacity_animation');
//   const introPos = introText.getBoundingClientRect().top
//   const screenPos = window.innerHeight
  
//   if (introPos < screenPos) {
//     introText.classList.add('new_opacity_animation')
//   }
// })

const ss = () => {
  const introText = document.querySelector('.opacity_animation');
const introPos = introText.getBoundingClientRect().top
const screenPos = window.innerHeight

if (introPos < screenPos) {
  introText.classList.add('new_opacity_animation')
}
}

document.addEventListener('click',ss)