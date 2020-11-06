const $template = document.getElementById('anime-container-template')
class AnimeContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // cú pháp để tạo Shadow DOM
        this.shadowRoot.appendChild($template.content.cloneNode(true));

    }
    connectedCallback() { }


    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName, newValue);
        if (attrName == 'image') {
            this.shadowRoot.querySelector('img').src = newValue
        }
        else if (attrName == 'category') {
            this.shadowRoot.querySelector('.category').innerHTML = newValue
        }
        else if (attrName == 'name') {
            this.shadowRoot.querySelector('.name').innerHTML = newValue
        }
        else if (attrName == 'chapters') {
            this.shadowRoot.querySelector('.chapter').innerHTML = newValue
        }
        else if (attrName == 'price') {
            this.shadowRoot.querySelector('.price').innerHTML = newValue
        }


    }


    disconnectedCallback() { }
    static get observedAttributes() {
        return ['image', 'name', 'category', 'chapters', 'price'];

    }

    
    
}
window.customElements.define('anime-container', AnimeContainer);