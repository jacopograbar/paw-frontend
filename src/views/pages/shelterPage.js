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
      <paw-header title="Shelter Page"></paw-header>
      <div class="shelter-page-view layout-page">
      <div class="page-animation"></div>
        <!-- First Section -->
        <section class="shelter-page-section layout-section">
        <img id="first-background-img" src="../images/pawprint-white.png" />
        </section>
        <section class="shelter-page-section layout-section">
        <img id="first-background-img" src="../images/pawprint-white.png" />
        </section>
      </div>    
    `
    render(template, App.rootEl)
  }
}


export default new ShelterPageView()