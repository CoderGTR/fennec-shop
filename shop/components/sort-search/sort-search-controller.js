import SortSearchView from "./sort-search-view.js";
import SortSearchModel from "./sort-search-model.js";

export default class SortSearchController {

    constructor({ subscribe, events, notify}) {
        this.view = new SortSearchView(this.onSort, this.onSearch, this.onCategorySort);
        this.model = new SortSearchModel();

        this.notify = notify;
        this.subscribe = subscribe;
        this.events = events;

        subscribe(events.LOADED_DATA, this.onLoadData)

    }


    //sort
    onSort = ev => {
        const records = this.model.sort(ev.target.value);

        this.view.render(records);
    }
    //search
    onSearch = ev => {
        const records = this.model.search(ev.target.value);
        this.view.render(records)
    }
    // filter
    initCategories = () => {
        this.model.loadRecords()
            .then(d => {this.view.renderCategories(this.model.getCategories(d))})
    }
    //filter
    onCategorySort = ev => {
        const records = this.model.sortCategory(ev.target.value);

        this.view.render(records);
    }
    onLoadData = data => {
        this.model.goods = data;
    }
}