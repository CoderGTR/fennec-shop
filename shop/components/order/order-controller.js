import OrderView from "./order-view.js";
import OrderModel from "./order-model.js";

export default class OrderController {
    constructor({events, subscribe, notify}) {
        this.view = new OrderView(this.checkInput, this.onSubmit);
        this.model = new OrderModel();

        this.events = events;
        this.notify = notify;
        subscribe(this.events.ORDER, this.initOrderList);
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

    // clearModal = () => {
    //     this.view.clearModal();
    // }

};