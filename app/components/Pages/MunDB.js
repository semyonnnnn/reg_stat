import { docCreate } from "./docCreate.js";

export const MunDB = {
    html: "div",
    id: 'mun_db',
    className: "document-list__items",
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
