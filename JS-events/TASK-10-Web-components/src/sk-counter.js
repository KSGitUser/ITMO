class Counter extends HTMLElement {
  connectedCallback() {
    this.shadow = this.attachShadow({ mode: 'open' });
    this.content = document.importNode(
      document.querySelector('#t').content,
      true
    );
    this.val = +this.querySelector('[slot=val]').textContent;
    if (this.val) {
      [...Array(this.val).keys()].forEach((item) => {
        this.addStar();
      });
    }
    this.shadow.appendChild(this.content);

    this.shadow.addEventListener('click', this.addStar.bind(this, true));
  }

  addStar(count = false) {
    const elToAdd = document.createElement('span');
    elToAdd.innerHTML = '&#11088';
    elToAdd.addEventListener('click', (e) => {
      e.stopPropagation();
      e.target.remove();
      this.val -= 1;
      this.querySelector('[slot=val]').textContent = this.val;
    });
    if (count) {
      this.val += 1;
      this.querySelector('[slot=val]').textContent = this.val;
    }
    this.content.appendChild(elToAdd);
    this.shadow.appendChild(this.content);
  }
}
customElements.define('sk-counter', Counter);
