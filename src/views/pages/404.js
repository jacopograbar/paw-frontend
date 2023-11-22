import App from './../../App'
import Auth from '../../services/Auth'
import {html, render } from 'lit-html'

class FourOFourView{
  init(){  
    document.title = '404 File not found'    
    this.render()
  }

  render(){
    const template = html`  
      <paw-header title="404" user="${JSON.stringify(Auth.currentUser)}"></paw-header>
      <div class="not-found">
        <h1>Oops!</h1>
        <p>Sorry, we couldn't find that.</p>
      </div>
    `
    render(template, App.rootEl)
  }
}

export default new FourOFourView()