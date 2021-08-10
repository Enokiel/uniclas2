import { uniclas } from "./module/config.js"
import uniclasItemSheet from "./module/sheets/uniclasItemSheet.js";

Hooks.once("init", function () {
    console.log("uniclas | Initialising Classic Unisystem System");

    CONFIG.uniclas = uniclas;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("uniclas", uniclasItemSheet, { makeDefault: true});
});