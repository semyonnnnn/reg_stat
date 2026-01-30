import { docCreate } from "./docCreate.js";

const CurrentInfoEkb = {
    html: "div",
    className: "document-list__items current_info ekb main-content",
    children: {
        ...docCreate("row2025", {
            title: "Оценка численности населения по муниципальным образованиям Свердловской области на 1 января 2025 года и в среднем за 2024 год",
            info: "39.43 Кб, 25.04.2025",
            href: "/storage/mediabank/Числ_МО_ 2025.xlsx",
            type: 'XLSX',
        }),
        ...docCreate("row2023", {
            title: "Объем социальных выплат населению и налогооблагаемых денежных доходов населения по муниципальным, городским округам и муниципальным районам за 2023 год",
            info: "15.42 Кб, 11.04.2025",
            href: "/storage/mediabank/Свердловская область_соцвыплаты_2023.xlsx",
            type: 'XLSX',
        }),
        ...docCreate("row2022", {
            title: "Объем социальных выплат населению и налогооблагаемых денежных доходов населения по муниципальным, городским округам и муниципальным районам за 2022 год",
            info: "16.85 Кб, 10.04.2024",
            href: "/storage/mediabank/Свердловская область_соцвыплаты_2022.xlsx",
            type: 'XLSX',
        }),
        ...docCreate("row2024doc", {
            title: "Инвестиции в основной капитал организаций Свердловской области за 2024 год",
            info: "171 Кб, 12.08.2025",
            href: "/storage/mediabank/Инвестиции_Свердловская область_2024 год.doc",
            type: "DOC",
        }),
        ...docCreate("row2020xlsx", {
            title: "Ввод в действие жилых домов на территории муниципальных образований Свердловской области за 2020 год (на основании данных годовой отчетности)",
            info: "17.92 Кб, 02.08.2021",
            href: "/storage/mediabank/ввод в действие жилых домов_2020_сайт.xlsx",
            type: 'XLSX',
        }),
        ...docCreate("row2024pdf", {
            title: "Просроченная задолженность по заработной плате в Свердловской области на 1 марта 2024 года",
            info: "103 Кб, 27.03.2024",
            href: "/storage/mediabank/1. О просроченной задолженности по МО на 1 марта 2024.pdf",
            type: "PDF",
        }),
        ...docCreate("row2023-2024", {
            title: "Ввод в действие жилых домов на территории Свердловской области за 2023-2024 годы",
            info: "45.1 Кб, 28.03.2025",
            href: "/storage/mediabank/Ввод в действие жилых домов_2023-2024_1074446.docx",
            type: "DOCX",
        }),
    },
};


const CurrentInfoKurgan = {
    html: "div",
    className: "document-list__items current_info krg main-content hide",
    children: {
        ...docCreate("row2025krg", {
            title:
                "Оценка численности населения по муниципальным образованиям Курганской области на 1 января 2025 года и в среднем за 2024 год",
            info: "13.65 Кб, 25.04.2025",
            href:
                "/storage/mediabank/Числ_ МО_ 2025_Курганская обл(1).xlsx",
            type: "XLSX",
        }),
        ...docCreate("row2022krg", {
            title:
                "Объем социальных выплат населению и налогооблагаемых денежных доходов населения по муниципальным, городским округам и муниципальным районам за 2022 год",
            info: "37.64 Кб, 10.04.2024",
            href:
                "/storage/mediabank/Курганская область_соцвыплаты_2022.xlsx",
            type: "XLSX",
        }),
    },
};

export const CurrentInfo = {
    html: 'div',
    className: 'content',
    children: {
        CurrentInfoEkb,
        CurrentInfoKurgan
    }
};