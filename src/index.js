import App from './App.js'

// components (custom web components)
import './components/paw-header.js'
import './components/paw-petcard.js'

// styles
import './scss/master.scss'

// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})