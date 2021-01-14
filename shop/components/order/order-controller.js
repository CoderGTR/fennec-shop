import OrderView from "./order-view.js";
import OrderModel from "./order-model.js";
import Publisher from "../helpers/publisher.js";

export default class OrderController {
    constructor() {
        this.view = new OrderView(this.checkInput, this.onSubmit, this.onBack);
        this.publisher = new Publisher();
        this.model = new OrderModel();

        this.events = this.publisher.events;
        this.notify = this.publisher.notify;
        this.publisher.subscribe(this.events.ORDER, this.initOrderList);
    }

    initOrderList = data => {
        this.view.renderOrder();
        this.model.addData(data);
    }

    checkInput = (data, type) => {
        let result = this.model.checkInputData(data,type);

        return result
    }

    onSubmit = () => {
        const userInfo = this.view.getValues();
        this.notify(this.events.USER_DATA, userInfo );
        this.notify(this.events.SEND_MESSAGE, JSON.stringify(userInfo));
                this.model.sendToStorage(userInfo);
        };

    onBack = () => {
        location.reload();
    }

    // clearModal = () => {
    //     this.view.clearModal();
    // }

};