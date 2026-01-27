export class Builder {
    constructor(parent, obj) {
        this.parent = parent;
        this.build(parent, obj);
    }

    #not_attributes = ['className', 'children', 'html', 'textContent'];
    #handlers = {
        html: (parent, value) => {
            const element = document.createElement(value);
            parent.appendChild(element);
        },
        className: (el, value) => el.className = value,
    };

    build(parent, obj) {
        for (const key in obj) {
            if (!this.#not_attributes.includes(key)) {
                this.element.setAttribute(key, obj[key]);
                continue; //skips the rest of the loop
            }

            switch (this.#not_attributes) {
                case 'html': {
                    this.#handlers.html(parent, obj[key]);
                    break;
                }
                case 'className': {
                    this.#handlers.className();
                }
            }
        }
        parent.appendChild(this.element);
    }
}