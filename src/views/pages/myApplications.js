import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class MyApplicationsView {
  init(){
    document.title = 'My Applications'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <paw-header title="My Applications" user="${JSON.stringify(Auth.currentUser)}"></paw-header>
      <div class="applications-screen">        
        <h1>My Applications</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new MyApplicationsView()