import { Menu } from "./components/Menu.js";
import { Builder } from "./Builder.js";
import { MenuManager } from "./utils/Managers/MenuManager.js";
import { MainContentManager } from "./utils/Managers/MainContentManager.js";
import { GrandWrapper } from "./components/GrandWrapper.js";

export class App {
    constructor(cms_block) {
        new Builder(cms_block, Menu);
        new MenuManager();
        new Builder(cms_block, GrandWrapper);
        const grandWrapper = document.getElementById('grandWrapper')
        // new Builder(grandWrapper, MunList);
        new MainContentManager(grandWrapper);
    }
}