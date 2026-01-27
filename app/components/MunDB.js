function docRow(key, { title, info, href, type = "DOC", icon = "" }) {
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
                                type: { html: "text", text: type },
                            },
                        },
                    },
                },
                desc: {
                    html: "div",
                    className: "document-list__item-desc" + (href.startsWith("http") ? " align-self-center" : ""),
                    children: {
                        title: { html: "div", className: "document-list__item-title", textContent: title },
                        info: { html: "div", className: "document-list__item-info", textContent: info },
                    },
                },
            },
        },
    };
}

export const MunDB = {
    html: "div",
    className: "mun_db",
    children: {
        title: { html: "h2", className: "section_title" },
        attention: { html: "div", className: "attention_block" },
        info_block: {
            html: "div",
            className: "info_block",
            children: {
                ...docRow("row1", {
                    title: "Инструкция по работе с БД ПМО",
                    info: "1.12 Мб, 04.10.2023",
                    href: "/storage/mediabank/Инструкция по работе с БД ПМО - СО.doc",
                    type: "DOC",
                }),
                ...docRow("row2", {
                    title: "Краткий методологический комментарий по показателям БД ПМО",
                    info: "03.10.2023",
                    href: "https://rosstat.gov.ru/storage/mediabank/met_bdpmo.htm",
                    type: "WEB",
                    icon: "call_made",
                }),
                ...docRow("row3", {
                    title: "БД ПМО",
                    info: "25.12.2018",
                    href: "https://rosstat.gov.ru/dbscripts/munst/munst65/DBInet.cgi",
                    type: "WEB",
                    icon: "call_made",
                }),
                ...docRow("row4", {
                    title: "Ввод в действие жилых домов на территории Свердловской области за 2023-2024 годы",
                    info: "45.1 Кб, 28.03.2025",
                    href: "/storage/mediabank/Ввод в действие жилых домов_2023-2024.docx",
                    type: "DOCX",
                    icon: "",
                }),
            },
        },
    },
};
