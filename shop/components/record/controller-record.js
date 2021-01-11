import ModelRecord from "./model-record.js";
import ViewRecord from "./view-record.js";
import Publisher from "../helpers/publisher.js";

export default class ControllerRecord {
    constructor ({ notify, events }) {
        this.model = new ModelRecord();
        this.view = new ViewRecord(this.onSort, this.onSearch, this.onCategorySort, this.init, this.onDetails, this.onAdd);

        this.notify = notify;
        this.events = events;

        this.init()
        // this.initCategories();
    }

    init = () => {
        this.model.loadRecords()
            .then(d => {
                this.view.render(d)
                this.notify(this.events.LOADED_DATA, d)
            })

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
    // initCategories = () => {
    //     this.model.loadRecords()
    //         .then(d => {this.view.renderCategories(this.model.getCategories(d))})
    // }
    //filter
    onCategorySort = ev => {
        const records = this.model.sortCategory(ev.target.value);

        this.view.render(records);
    }

    onDetails = ev => {
        const record = this.model.getRecordById(ev.target.dataset.detailsId);
        this.notify(this.events.SHOW_DETAILS, record);
    }



    onAdd= ev => {
        const record = this.model.getRecordById(ev.target.dataset.addId);
        this.notify(this.events.ADD_TO_CART, record);
    }
}