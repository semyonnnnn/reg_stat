export class MenuManager {
    constructor(wrapperSelector = '.mun_menu') {
        this.wrapper = document.querySelector(wrapperSelector);
        if (!this.wrapper) return;

        this.veil = document.createElement('div');
        this.veil.classList.add('veil', 'hide');
        document.body.appendChild(this.veil);

        this._init();
    }

    _toggle(el, show) {
        if (!el) return;
        el.classList.toggle('show', show);
        el.classList.toggle('hide', !show);
    }

    _hideAll() {
        this._toggle(this.veil, false);
        this.wrapper.querySelectorAll('.sub').forEach(sub => this._toggle(sub, false));
    }

    _init() {
        // veil click hides all
        this.veil.addEventListener('click', () => this._hideAll());
        document.addEventListener('click', () => this._hideAll());

        // handle top-level menu items
        this.wrapper.querySelectorAll('.menu').forEach(menu => {
            const sub = menu.querySelector('.sub');
            if (!sub) return;

            menu.addEventListener('click', e => {
                e.stopPropagation();
                const isOpen = sub.classList.contains('show');
                this._hideAll();
                this._toggle(sub, !isOpen);
                this._toggle(this.veil, !isOpen);
            });

            // submenu items hide menu on click
            sub.querySelectorAll('.item').forEach(item =>
                item.addEventListener('click', e => {
                    e.stopPropagation();
                    this._hideAll();
                })
            );
        });
    }
}
