export default class PaginationModel {
    records = [];

    goodsOnPage = 12;

    initCountOfPages = () => {
        return Math.ceil(this.records.length / this.goodsOnPage);
    }

    render = () => {
        return this.records.slice(0, this.goodsOnPage);
    }

    pag = pageNum => {
        let start = (pageNum - 1) * this.goodsOnPage;
        let end = start + this.goodsOnPage;

        return this.records.slice(start, end);
    }
};