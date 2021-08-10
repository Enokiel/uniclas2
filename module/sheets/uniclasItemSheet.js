export default class uniclasItemSheet extends ItemSheet {
    get template() {
        return `systems/uniclas/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.uniclas;

        return data;
    }
}