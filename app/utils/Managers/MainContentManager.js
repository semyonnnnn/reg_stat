import { MunDB } from "../../components/Pages/MunDB.js";
import { Indicators } from "../../components/Pages/Indicators.js";
import { CurrentInfo } from "../../components/Pages/CurrentInfo.js";
import { FederalLaws } from "../../components/Pages/FederalLaws.js";
import { PresidentialDecrees } from "../../components/Pages/PresidentialDecrees.js";
import { GovernmentResolutions } from "../../components/Pages/GovernmentResolutions.js";

import { WhereAmI } from "../../components/WhereAmI.js";

import { Builder } from "../../Builder.js";
import { RegionButtons } from "../../components/RegionButtons.js";
import { MunList } from "../../components/Pages/MunList.js";


export class MainContentManager {
    constructor(parent) {
        this.parent = parent;
        this.assign_objs();
        this.build_default();   // 👈 default content
        this.add_listeners();
        this.add_switcher();
    }

    assign_objs() {
        this.entities = {
            municipalities: MunList,
            currentInfo: CurrentInfo,
            indicators: Indicators,
            munDB: MunDB,
            federal_laws: FederalLaws,
            presidential_decrees: PresidentialDecrees,
            government_resolutions: GovernmentResolutions
        };
    }

    build_default() {
        this.parent.innerHTML = '';

        new Builder(this.parent, WhereAmI);
        new Builder(this.parent, RegionButtons);
        new Builder(this.parent, MunList);

        const where_am_i = document.querySelector('.where_am_i');
        if (where_am_i) {
            where_am_i.textContent = 'Муниципальные образования';
        }
    }

    add_listeners() {
        for (const item in this.entities) {
            const dom_item = document.getElementById(item);
            if (!dom_item) continue;

            const dom_item_text = dom_item.textContent;
            const parent_text =
                dom_item.id === 'municipalities'
                    ? dom_item.innerText
                    : dom_item.parentElement.parentElement.innerText;

            dom_item.addEventListener('click', () => {
                this.parent.innerHTML = '';

                new Builder(this.parent, WhereAmI);
                new Builder(this.parent, RegionButtons);

                const where_am_i = document.querySelector('.where_am_i');
                where_am_i.textContent = parent_text + ' ➞ ' + dom_item_text;

                new Builder(this.parent, this.entities[item]);
                this.add_switcher();
            });
        }
    }
    add_switcher() {
        const btnEkb = document.getElementById('btn_ekb');
        const btnKrg = document.getElementById('btn_krg');

        const ekbContent = document.querySelector('.ekb');
        const krgContent = document.querySelector('.krg');

        if (!btnEkb || !btnKrg || !ekbContent || !krgContent) return;

        // Show Ekb by default
        ekbContent.classList.add('show');
        krgContent.classList.add('hide');
        btnEkb.classList.add('btn-primary');
        btnEkb.classList.remove('btn-light');
        btnKrg.classList.add('btn-light');
        btnKrg.classList.remove('btn-primary');

        btnEkb.addEventListener('click', () => {
            ekbContent.classList.remove('hide');
            ekbContent.classList.add('show');

            krgContent.classList.remove('show');
            krgContent.classList.add('hide');

            btnEkb.classList.add('btn-primary');
            btnEkb.classList.remove('btn-light');
            btnKrg.classList.add('btn-light');
            btnKrg.classList.remove('btn-primary');
        });

        btnKrg.addEventListener('click', () => {
            krgContent.classList.remove('hide');
            krgContent.classList.add('show');

            ekbContent.classList.remove('show');
            ekbContent.classList.add('hide');

            btnKrg.classList.add('btn-primary');
            btnKrg.classList.remove('btn-light');
            btnEkb.classList.add('btn-light');
            btnEkb.classList.remove('btn-primary');
        });
    }

}
