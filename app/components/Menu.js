export const Menu = {
    html: 'div',
    id: 'mun_menu',
    classname: 'mun_menu',
    children: {
        municipalities: {
            html: 'div',
            id: 'mun_sub_menu1',
            className: 'mun_sub_menu',
            textContent: 'Перечень муниципальных образований',
        },
        main_indicators: {
            html: 'div',
            id: 'main_indicators',
            className: 'main_indicators',
            textContent: 'Основные показатели социально-экономического положения муниципальных образований',
            children: {
                currentInfo: {
                    html: 'p',
                    id: 'currentInfo_menu',
                    className: 'currentInfo_menu',
                    textContent: 'Оперативная информация'
                },
                indicators: {
                    html: 'p',
                    id: 'indicators_menu',
                    className: 'indicators_menu',
                    textContent: 'Показатели для оценки эффективности деятельности органов местного самоуправления'
                },
                munDB: {
                    html: 'p',
                    id: 'munDB_menu',
                    className: 'munDB_menu',
                    textContent: 'База данных показателей муниципальных образований'
                }
            }
        },
        regulatory_docs: {
            html: 'div',
            id: 'regulatory_docs_menu',
            className: 'regulatory_docs_menu',
            textContent: 'Нормативные документы',
            children: {
                federal_laws: {
                    html: 'p',
                    id: 'federal_laws_menu',
                    className: 'federal_laws_menu',
                    textContent: 'Федеральные законы'
                },
                presidential_decrees: {
                    html: 'p',
                    id: 'presidential_decrees_menu',
                    className: 'presidential_decrees_menu',
                    textContent: 'Указы Президента'
                },
                government_resolutions: {
                    html: 'p',
                    id: 'government_resolutions_menu',
                    className: 'government_resolutions_menu',
                    textContent: 'Постановления Правительства'
                }
            }
        }

    }
};