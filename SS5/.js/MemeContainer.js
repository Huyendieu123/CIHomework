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
    attributeChangedCallback(attrName, olaValue, newValue) {
        console.log(attrName, newValue);
        if (attrName == 'name') {
            this.shadowRoot.querySelector(".meme-name").innerHTML = newValue;
        } else if (attrName == 'data-modified') {

        } else if (attrName == 'image') {

        }
    }

    //mất đi. Được gọi khi compoment mất đi(xóa đi)
    disconnectedCallback() {
        console.log('Vừa xóa đi một meme');

    }
    // Tạo custom element
window.customElements.define("Meme-container", MemeContainer);// tên phải có dấu gạch để tránh xung đột với thẻ khác
    // xét những thuộc tính có ảnh hưởng đến  nội dung
    static get observedAttributes() {
        return ["name", "date-modified", 'image', 'descrition']
    }
}

