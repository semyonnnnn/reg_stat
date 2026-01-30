import { docCreate } from "./docCreate.js";

export const PresidentialDecrees = {
    html: "div",
    className: "document-list__items main-content",
    children: {
        ...docCreate("row607decree", {
            title: 'Указ Президента Российской Федерации от 28.04.2008 № 607 "Об оценке эффективности деятельности органов местного самоуправления муниципальных, городских округов и муниципальных районов"',
            info: "124.72 Кб, 05.04.2023",
            href: "/storage/mediabank/Указ №607 (ред. от 11.06.2021).pdf",
            type: "PDF",
        }),
    },
};
