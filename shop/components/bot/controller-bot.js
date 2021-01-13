import ModelBot from "./model-bot.js";
import Publisher from "../helpers/publisher.js";

export default class ControllerBot {
    constructor() {
        this.model = new ModelBot(this.onUserData);
        this.publisher = new Publisher();

        this.notify = this.publisher.notify;
        this.events = this.publisher.events;

        this.publisher.subscribe(this.events.SEND_MESSAGE, this.onSend);
        this.publisher.subscribe(this.events.ORDER, this.getOrder);
        this.publisher.subscribe(this.events.USER_DATA, this.onUserData)
    }

    getOrder = data => {
        this.model.historyData = data;
    }

    onSend = () => {
        this.model.send(this.model.validMsg(this.model.historyData)).then(() => this.notify(this.events.MESSAGE_SENDED));
    }

    onUserData = data => {
        this.model.getUserData(data);
    }
};