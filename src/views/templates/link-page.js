// Template
module.exports = function LinkPageTemplate (state = {}, html) {
  const  { page = { title: 'My Link Page', subTitle: 'a subtitle' } } = state

  return html`
    <style>
      h1 {
        color: red;
      }
    </style>

    <h1>${page.title}</h1>
    <h1>${page.subTitle}</h1>

    <script type=module>
      class LinkPage extends HTMLElement {
        constructor () {
          super()
          const template = document.getElementById('link-page-template')
          this.attachShadow({ mode: 'open' })
            .appendChild(template.content.cloneNode(true))
        }

        connectedCallback () {
          console.log('Why hello there 👋')
        }
      }

      customElements.define('link-page', LinkPage)
    </script>
  `
}
