import { docCreate } from "./docCreate.js";

const MunDBEkb = {
    html: "div",
    id: 'mun_db',
    className: "document-list__items ekb main-content",
    children: {
        title: { html: "h2", className: "section_title" },
        attention: { html: "div", className: "attention_block" },
        info_block: {
            html: "div",
            className: "info_block",
            children: {
                ...docCreate("row1", {
                    title: "Инструкция по работе с БД ПМО",
                    info: "1.12 Мб, 04.10.2023",
                    href: "/storage/mediabank/Инструкция по работе с БД ПМО - СО.doc",
                    type: "DOC",
                }),
                ...docCreate("row2", {
                    title: "Краткий методологический комментарий по показателям БД ПМО",
                    info: "03.10.2023",
                    href: "https://rosstat.gov.ru/storage/mediabank/met_bdpmo.htm",
                    type: "WEB",
                    icon: "call_made",
                }),
                ...docCreate("row3", {
                    title: "БД ПМО",
                    info: "25.12.2018",
                    href: "https://rosstat.gov.ru/dbscripts/munst/munst65/DBInet.cgi",
                    type: "WEB",
                    icon: "call_made",
                }),
                ...docCreate("row4", {
                    title: "Ввод в действие жилых домов на территории Свердловской области за 2023-2024 годы",
                    info: "45.1 Кб, 28.03.2025",
                    href: "/storage/mediabank/Ввод в действие жилых домов_2023-2024.docx",
                    type: "DOCX",
                }),
            },
        },
    },
};

const MunDBKurgan = {
    html: "div",
    id: "mun_db_kurgan",
    className: "document-list__items main-content krg hide",
    children: {
        content: {
            html: "div",
            className: "content",
            children: {
                p1: {
                    html: "p",
                    className: "soder",
                    style: "text-align: center;",
                    children: {
                        span: {
                            html: "span",
                            style: "color: #ff0000;",
                            children: {
                                bold: { html: "b" },
                            },
                        },
                    },
                },
                p2: {
                    html: "p",
                    className: "soder",
                    style: "text-align: center;",
                    children: {
                        span: {
                            html: "span",
                            style: "color: #ff0000;",
                            textContent: "\u00A0",
                        },
                    },
                },
            },
        },

        ...docCreate("row1krg", {
            title: "Инструкция по работе с БД ПМО",
            info: "04.10.2023",
            href: "https://66.rosstat.gov.ru/storage/mediabank/Инструкция по работе с БД ПМО - КО.doc",
            type: "WEB",
            icon: "call_made",
        }),

        ...docCreate("row2krg", {
            title: "Краткий методологический комментарий по показателям БД ПМО",
            info: "03.10.2023",
            href: "https://rosstat.gov.ru/storage/mediabank/met_bdpmo.htm",
            type: "WEB",
            icon: "call_made",
        }),

        ...docCreate("row3krg", {
            title: "База данных показателей муниципальных образований Курганской области (БД ПМО)",
            info: "14.12.2018",
            href: "https://rosstat.gov.ru/dbscripts/munst/munst37/DBInet.cgi",
            type: "WEB",
            icon: "call_made",
        }),
    },
};

export const MunDB = {
    html: 'div',
    className: 'content',
    children: {
        MunDBEkb,
        MunDBKurgan
    }
};
