const MunListEkb = {
    html: "div",
    className: "content ekb",
    children: {
        p1: {
            html: "p",
            textContent: "С 1 января 2025 года на территории Свердловской области расположены 94 муниципальных образования, из них: 53 муниципальных округа, 15 городских округов, 5 муниципальных районов, 5 городских поселений, 16 сельских поселений."
        },
        p2: {
            html: "p",
            children: {
                link: {
                    html: "a",
                    href: "http://www.midural.ru/100034/100089/mu_leaders/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: "color: #333399;",
                    textContent: "Перечень муниципальных образований"
                }
            }
        },
        p3: {
            html: "p",
            children: {
                oktmoLink: {
                    html: "a",
                    href: "/storage/mediabank/%D0%9E%D0%9A%D0%A2%D0%9C%D0%9E(1).pdf",
                    textContent: "Территориальный раздел Общероссийского классификатора территорий муниципальных образований (ОКТМО) по Свердловской области"
                }
            }
        },
    }
};


const MunListKurgan = {
    html: "div",
    className: "content krg hide",
    children: {
        p1: {
            html: "p",
            textContent:
                "С 1 января 2024 года на территории Курганской области расположены 26 муниципальных образований, из них: 24 муниципальных округа, 2 городских округа."
        },
        p2: {
            html: "p",
            children: {
                link: {
                    html: "a",
                    href: "http://kurganobl.ru/administracii-gorodov-i-rayonov-oblasti",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    textContent: "Перечень муниципальных образований"
                }
            }
        },
        p3: {
            html: "p",
            children: {
                oktmoLink: {
                    html: "a",
                    href: "/storage/mediabank/%D0%9E%D0%9A%D0%A2%D0%9C%D0%9E%20%D0%9E%D0%9A%20033-2013%20%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.docx",
                    textContent:
                        "Территориальный раздел Общероссийского классификатора территорий муниципальных образований (ОКТМО) по Курганской области"
                }
            }
        }
    }
};

export const MunList = {
    html: 'div',
    className: 'content',
    children: {
        MunListEkb,
        MunListKurgan
    }
};