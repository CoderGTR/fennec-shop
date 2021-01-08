export default class Publisher{
    listeners = {};

    subscribe = (eventType, listener) => {
        if(!this.listeners[eventType]){
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    }

    unsubscribe = (eventType, listener) => {
        if(!this.listeners[eventType]){
            this.listeners[eventType] = [];
        }
        // listeners.remove(eventType, listener)
        //!TODO Доделать
    }

    notify = (eventType, data) => {
        if(!this.listeners[eventType]){
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].forEach(listener => listener(data));
    }
}