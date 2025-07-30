import './style.css'
import header from './components/header'
import hero from './components/hero'
import about from './components/about'
import menu from './components/menu'
import contact from './components/contact'
import footer from './components/footer'
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('header').innerHTML = header()
  document.getElementById('hero').innerHTML = hero()
  document.getElementById('about').innerHTML = about()
  document.getElementById('menu').innerHTML = menu()
  document.getElementById('contact').innerHTML = contact()
  document.getElementById('footer').innerHTML = footer()
})

