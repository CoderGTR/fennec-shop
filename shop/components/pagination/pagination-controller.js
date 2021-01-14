import PaginationModel from "./pagination-model.js";
import PaginationView from "./pagination-view.js";
import Publisher from "../helpers/publisher.js";

export default class PaginationController {

    constructor() {
        this.view = new PaginationView();
        this.model = new PaginationModel();
        this.publisher = new Publisher();

        this.events = this.publisher.events;
        this.notify = this.publisher.notify;

        this.onSubscribe = eventType => {
            this.publisher.subscribe(eventType, this.onLoadData);
            this.publisher.subscribe(eventType, this.onStart);
            this.publisher.subscribe(eventType, this.onRender);
        }

        this.onSubscribe(this.events.LOADED_DATA);
        this.onSubscribe(this.events.AFTER_SORT);
        this.onSubscribe(this.events.AFTER_SEARCH);
        this.onSubscribe(this.events.AFTER_FILTER);


    }

    onLoadData= data => {
        this.model.records = data;
    }

    onStart = () => {
        const records = this.model.render();

        this.notify(this.events.PAGINATE, records);
    }

    onRender = () => {
        this.view.render(this.model.initCountOfPages());
        this.view.handle(this.onHandle);
    }

    onHandle = e => {
        this.view.unactive();
        e.target.parentElement.classList.toggle('active');
        const pages = this.model.pag(e.target.dataset.value);
        this.notify(this.events.PAGINATE, pages);
    }
};