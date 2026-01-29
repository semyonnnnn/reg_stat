// import { MunDB } from "./components/Pages/MunDB.js";
// import { Indicators } from "./components/Pages/Indicators.js";
// import { currentInfo } from "./components/Pages/CurrentInfo.js";
import { Menu } from "./components/Menu.js";

import { Builder } from "./Builder.js";


export class App {
    constructor(cms_block) {
        new Builder(cms_block, Menu);
        // new Builder(cms_block, MunDB);
        // new Builder(cms_block, Indicators)
        // new Builder(cms_block, currentInfo);
    }
}