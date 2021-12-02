module.exports = function MyContent (state = {}, html) {
  return html`
<h2>My Content</h2>
<link-page></link-page>
<slot name=title>
  <h3>
    Title
  </h3>
</slot>
<slot></slot>
<script type="module">
  class MyContent extends HTMLElement {
    constructor() {
      super()
    }
    connectedCallback() {
      console.log('My Content')
    }
  }
  customElements.define('my-content', MyContent)
</script>
  `
}

