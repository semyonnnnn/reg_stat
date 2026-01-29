import { App } from "./app.js";
import { CMS_BLOCK_ID } from "./utils/key.js";

const style = document.createElement('style');
style.textContent = `body {
background-color: rgb(249, 127, 253);
}`;
document.head.appendChild(style);



document.addEventListener("DOMContentLoaded", async () => {
  const cms_block = document.getElementById(CMS_BLOCK_ID)?.parentElement;

  if (cms_block) {
    new App(cms_block);
  }
});

if (import.meta.webpackHot) import.meta.webpackHot.accept();