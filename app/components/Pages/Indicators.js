import { docCreate } from "./docCreate.js";

const IndicatorsEkb = {
    html: "div",
    id: "indicators_ekb",
    className: "document-list__items ekb main-content",
    children: {
        ...docCreate("row2024", { title: "2024 год", info: "136.33 Кб, 01.04.2025", href: "/storage/mediabank/Указ _607 за 2024 год (1).rar", type: "RAR" }),
        ...docCreate("row2023", { title: "2023 год", info: "138.39 Кб, 01.04.2024", href: "/storage/mediabank/Указ №607 за 2023 год.rar", type: "RAR" }),
        ...docCreate("row2022", { title: "2022 год", info: "139.68 Кб, 31.03.2023", href: "/storage/mediabank/Указ №607 за 2022 год.rar", type: "RAR" }),
        ...docCreate("row2021", { title: "2021 год", info: "133.23 Кб, 01.04.2022", href: "/storage/mediabank/Указ №607 за 2021.rar", type: "RAR" }),
        ...docCreate("row2020", { title: "2020 год", info: "133.55 Кб, 06.04.2021", href: "/storage/mediabank/5GHqrW93/Указ №607 за 2020.rar", type: "RAR" }),
        ...docCreate("row2019", { title: "2019 год", info: "132.66 Кб, 01.04.2022", href: "/storage/mediabank/Указ №607 за 2019.rar", type: "RAR" }),
        ...docCreate("row2018", { title: "2018 год", info: "123.78 Кб, 14.09.2023", href: "/storage/mediabank/Указ №607 за 2018 год.rar", type: "RAR" }),
        ...docCreate("row2017", { title: "2017 год", info: "111.57 Кб, 25.12.2018", href: "/storage/mediabank/Указ №607_за 2017(1)_305015.rar", type: "RAR" }),
        ...docCreate("row2016", { title: "2016 год", info: "96.03 Кб, 26.12.2018", href: "/storage/mediabank/Указ 607 за 2016_305016.rar", type: "RAR" }),
        ...docCreate("row2015", { title: "2015 год", info: "66.29 Кб, 26.12.2018", href: "/storage/mediabank/Указ 607 за 2015_305017.rar", type: "RAR" }),
        ...docCreate("row2014", { title: "2014 год", info: "76.55 Кб, 26.12.2018", href: "/storage/mediabank/Указ 607 за 2014_305018.zip", type: "ZIP" }),
        ...docCreate("row2013", { title: "2013 год", info: "65.9 Кб, 26.12.2018", href: "/storage/mediabank/Указ 607 за 2013_305019.zip", type: "ZIP" }),
        ...docCreate("row2012", { title: "2012 год", info: "57.31 Кб, 26.12.2018", href: "/storage/mediabank/Указ 607 за 2012_305020.zip", type: "ZIP" }),
        ...docCreate("row2011", { title: "2011 год", info: "137.35 Кб, 26.12.2018", href: "/storage/mediabank/Указ 607 за 2011_305021.zip", type: "ZIP" }),
        ...docCreate("row2010", { title: "2010 год", info: "106.48 Кб, 26.12.2018", href: "/storage/mediabank/Указ 607 за 2010_305022.zip", type: "ZIP" }),
    },
};

const IndicatorsKurgan = {
    html: "div",
    id: "indicators_krg",
    className: "document-list__items krg main-content hide",
    children: {
        ...docCreate("row2024krg", {
            title: "2024 год",
            info: "92.6 Кб, 01.04.2025",
            href: "/storage/mediabank/2024 год(1).zip",
            type: "ZIP",
        }),
        ...docCreate("row2023krg", {
            title: "2023 год",
            info: "92.55 Кб, 01.04.2024",
            href: "/storage/mediabank/2023(2).zip",
            type: "ZIP",
        }),
        ...docCreate("row2022krg", {
            title: "2022 год",
            info: "93.59 Кб, 31.03.2023",
            href: "/storage/mediabank/2022(3).zip",
            type: "ZIP",
        }),
        ...docCreate("row2021krg", {
            title: "2021 год",
            info: "95.71 Кб, 01.04.2022",
            href: "/storage/mediabank/2021 год(2).zip",
            type: "ZIP",
        }),
        ...docCreate("row2020krg", {
            title: "2020 год",
            info: "92.35 Кб, 13.04.2021",
            href: "/storage/mediabank/TwCtEIIi/2020.zip",
            type: "ZIP",
        }),
        ...docCreate("row2019krg", {
            title: "2019 год",
            info: "92.13 Кб, 30.04.2020",
            href: "/storage/mediabank/2019 год(1).zip",
            type: "ZIP",
        }),
        ...docCreate("row2018krg", {
            title: "2018 год",
            info: "83.81 Кб, 10.04.2019",
            href: "/storage/mediabank/2018 год(1).zip",
            type: "ZIP",
        }),
        ...docCreate("row2017krg", {
            title: "2017 год",
            info: "79.03 Кб, 30.03.2018",
            href: "/storage/mediabank/Указ+№607_2017+год.zip",
            type: "ZIP",
        }),
        ...docCreate("row2016krg", {
            title: "2016 год",
            info: "59.58 Кб, 30.03.2017",
            href: "/storage/mediabank/Оценка_ОМС.rar",
            type: "RAR",
        }),
        ...docCreate("row2015krg", {
            title: "2015 год",
            info: "236.78 Кб, 20.07.2016",
            href: "/storage/mediabank/2015+год(1).zip",
            type: "ZIP",
        }),
        ...docCreate("row2014krg", {
            title: "2014 год",
            info: "355.77 Кб, 15.12.2015",
            href: "/storage/mediabank/2014+год(2).zip",
            type: "ZIP",
        }),
        ...docCreate("row2013krg", {
            title: "2013 год",
            info: "238.77 Кб, 23.04.2014",
            href: "/storage/mediabank/2013(2).zip",
            type: "ZIP",
        }),
        ...docCreate("row2012krg", {
            title: "2012 год",
            info: "303.46 Кб, 25.12.2018",
            href: "/storage/mediabank/2012+год.zip",
            type: "ZIP",
        }),
        ...docCreate("row2011krg", {
            title: "2011 год",
            info: "271.87 Кб, 24.05.2013",
            href: "/storage/mediabank/2011+год.zip",
            type: "ZIP",
        }),
    },
};

export const Indicators = {
    html: 'div',
    className: 'content',
    children: {
        IndicatorsEkb,
        IndicatorsKurgan
    }
};