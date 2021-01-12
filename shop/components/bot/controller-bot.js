import ModelBot from "./model-bot.js";

export default class ControllerBot {
    constructor({subscribe, notify, events}) {
        this.model = new ModelBot(this.onUserData)

        this.notify = notify
        this.events = events;

        subscribe(this.events.SEND_MESSAGE, this.onSend);
        subscribe(this.events.ORDER, this.getOrder);
        subscribe(this.events.USER_DATA, this.onUserData)
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