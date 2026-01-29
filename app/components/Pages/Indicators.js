import { docCreate } from "./docCreate.js";

export const Indicators = {
    html: "div",
    id: "indicators",
    className: "document-list__items",
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
