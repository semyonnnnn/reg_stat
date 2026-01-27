import { MunDB } from "./components/MunDB.js";
import { Builder } from "./Builder.js";

export class App {
    constructor(cms_block) {
        new Builder(cms_block, MunDB);
    }
}