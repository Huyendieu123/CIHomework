const $template = document.getElementById('meme-container-template')
class MemeContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' }); // cú pháp để tạo Shadow DOM
        this.shadowRoot.appendChild($template.content.cloneNode(true));

    }
    // được gọi khi compoment được sinh ra
    connectedCallback() {
    }

    // phát triển: thay đổi thuộc tính. Được gọi khi thuộc tính của compoment thay đổi
    attributeChangedCallback(name, olaValue, newValue) {

    }

    //mất đi. Được gọi khi compoment mất đi(xóa đi)
    disconnectedCallback() {
        console.log('Vừa xóa đi một meme')

    }
    // Tạo custom element
    window.customElements.define("Meme-container", MemeContainer);// tên phải có dấu gạch để tránh xung đột với thẻ khác
