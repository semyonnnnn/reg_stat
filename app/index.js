import { App } from "./App.js";
import { CMS_BLOCK_ID } from "./utils/key.js";

document.addEventListener("DOMContentLoaded", async () => {
  const cms_block = document.getElementById(CMS_BLOCK_ID)?.parentElement;

  if (cms_block) {
    new App(cms_block);
  }
});

if (import.meta.webpackHot) import.meta.webpackHot.accept();