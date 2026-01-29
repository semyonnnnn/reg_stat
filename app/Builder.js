export class Builder {
    constructor(parent, obj) {
        this.parent = parent;
        this.build(parent, obj);
    }

    #not_attributes = ['className', 'children', 'html', 'textContent'];

    #if_exists_prop(obj, element, prop) {
        if (obj[prop]) element[prop] = obj[prop];
    }

    build(parent, obj) {
        if (!obj) return;

        const currentElement = document.createElement(obj['html']);
        this.#if_exists_prop(obj, currentElement, 'className');
        this.#if_exists_prop(obj, currentElement, 'textContent');
        for (const key in obj) {
            if (!this.#not_attributes.includes(key)) {
                currentElement.setAttribute(key, obj[key]);
            }
        }
        parent.appendChild(currentElement);

        if (!obj.children) return;

        const children = obj['children'];

        for (const key in children) {
            const child = children[key];
            this.build(currentElement, child);
        }

    }
}