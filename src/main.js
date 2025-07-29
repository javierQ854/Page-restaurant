import './style.css'
import header from './components/header'
import hero from './components/hero'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('header').innerHTML = header()
  document.getElementById('hero').innerHTML = hero()
})

