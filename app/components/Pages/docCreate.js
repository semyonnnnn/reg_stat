export function docCreate(key, { title, info, href, type, icon = "" }) {
    return {
        [key]: {
            html: "div",
            className: "document-list__item document-list__item--row",
            children: {
                link: {
                    html: "div",
                    className: "document-list__item-link",
                    children: {
                        a: {
                            html: "a",
                            className: "btn btn-icon btn-white btn-br btn-sm",
                            href,
                            target: href.startsWith("http") ? "_blank" : undefined,
                            rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
                            children: {
                                icon: { html: "i", className: "material-icons", textContent: icon },
                                type: { html: "text", textContent: type },
                            },
                        },
                    },
                },
                desc: {
                    html: "div",
                    className: "document-list__item-desc",
                    children: {
                        title: { html: "div", className: "document-list__item-title", textContent: title },
                        info: { html: "div", className: "document-list__item-info", textContent: info },
                    },
                },
            },
        },
    };
}
