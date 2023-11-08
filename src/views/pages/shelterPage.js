import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ShelterPageView {
  init(){
    document.title = 'Shelter Page'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Shelter Page" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Shelter Page</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ShelterPageView()