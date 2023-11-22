import Router from './Router'
import Auth from './services/Auth'
import Toast from './Toast'


class App {
  constructor(){
    this.name = "Paw"
    this.version = "1.0.0"
    this.apiBase = 'https://jgrabar-paw-backend-1552b35ab7a6.herokuapp.com'
    this.rootEl = document.getElementById("root")
    this.version = "1.0.0"
  }
  
  init() { 
    console.log("App.init")
    
    // Toast init
    Toast.init()   
    
    // Authentication check    
    Auth.check(() => {
      // authenticated! init Router
      Router.init()
    })    
  }
}

export default new App()