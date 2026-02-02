export const Menu = {
    html: 'div',
    id: 'mun_menu',
    className: 'mun_menu',
    children: {
        municipalities: {
            html: 'div',
            id: 'municipalities',
            className: 'municipalities menu',
            textContent: 'Перечень муниципальных образований',
        },
        main_indicators: {
            html: 'div',
            id: 'main_indicators',
            className: 'main_indicators menu',
            textContent: 'Основные показатели социально-экономического положения',
            children: {
                main_indicators_sub: {
                    html: 'div',
                    id: 'main_indicators_sub',
                    className: 'main_indicators_sub sub',
                    children: {
                        currentInfo: {
                            html: 'div',
                            id: 'currentInfo',
                            className: 'currentInfo item',
                            textContent: 'Оперативная информация'
                        },
                        indicators: {
                            html: 'div',
                            id: 'indicators',
                            className: 'indicators item',
                            textContent: 'Показатели для оценки эффективности деятельности органов местного самоуправления'
                        },
                        munDB: {
                            html: 'div',
                            id: 'munDB',
                            className: 'munDB item',
                            textContent: 'База данных показателей муниципальных образований'
                        }
                    }
                }
            }
        },
        regulatory_docs: {
            html: 'div',
            id: 'regulatory_docs',
            className: 'regulatory_docs menu',
            textContent: 'Нормативные документы',
            children: {
                regulatory_docs_sub: {
                    html: 'div',
                    id: 'regulatory_docs_sub',
                    className: 'regulatory_docs_sub sub',
                    children: {
                        federal_laws: {
                            html: 'div',
                            id: 'federal_laws',
                            className: 'federal_laws item',
                            textContent: 'Федеральные законы'
                        },
                        presidential_decrees: {
                            html: 'div',
                            id: 'presidential_decrees',
                            className: 'presidential_decree item',
                            textContent: 'Указы Президента'
                        },
                        government_resolutions: {
                            html: 'div',
                            id: 'government_resolutions',
                            className: 'government_resolutions item',
                            textContent: 'Постановления Правительства'
                        }
                    }
                }
            }
        }

    }
};