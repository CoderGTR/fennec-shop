import ViewHistory from "./view-history.js";
import ModelHistory from "./model-history.js";
import Publisher from "../helpers/publisher.js";

export default class ControllerHistory {
    constructor() {
        this.publisher = new Publisher();
        this.events = this.publisher.events;
        this.view = new ViewHistory(this.initHistory, this.countPrice);
        this.model = new ModelHistory()
    };


    initHistory = () => {
        let arr = JSON.parse(localStorage.getItem('OrderHistory'));
        if(arr === null){
            arr = [];
        }
        this.view.renderHistory(arr);
        console.log(arr)

    }

    countPrice = data => {
        return this.model.countPrice(data);
    }
};