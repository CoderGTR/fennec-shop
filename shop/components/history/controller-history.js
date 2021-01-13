import ViewHistory from "./view-history.js";
import ModelHistory from "./model-history.js";

export default class ControllerHistory {
    constructor({events, subscribe, notify}) {
        this.events = events;
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