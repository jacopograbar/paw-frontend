import App from './App.js'

// components (custom web components)
import './components/paw-header.js'
import './components/paw-petcard.js'
import './components/paw-applicationcard.js'
import './components/paw-sheltercard.js'
import './components/paw-application-detail.js'

// styles
import './scss/master.scss'

// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})