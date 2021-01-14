import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";
import Publisher from "../helpers/publisher.js";

export default class ControllerCart {
    constructor() {
        this.model = new ModelCart();
        this.publisher = new Publisher();
        this.view = new ViewCart(this.onCount, this.onDelete, this.onOrder);
        this.notify = this.publisher.notify;
        this.events = this.publisher.events;

        // this.view.cartRender();
        this.publisher.subscribe(this.events.ADD_TO_CART, this.addHandler)
    }

    addHandler = data => {
        this.model.addToCart(data)
    }

    onCount = ev => {
        console.log(ev.target)
        let element;
        if(ev.target.dataset.type === 'minus') {
            document.querySelectorAll('.input-count').forEach(el => {
                if (el.dataset.count === `inp-${ev.target.dataset.count}`) {
                    element = el
                }
            })
            if(element.value > 1) {
                element.value--
            }
            this.model.getElement(ev.target.dataset.count, 'minus');
        }else{
            document.querySelectorAll('.input-count').forEach(el => {
                if (el.dataset.count === `inp-${ev.target.dataset.count}`) {
                    element = el
                }
            })

            element.value++

            this.model.getElement(ev.target.dataset.count, 'plus');
        }
    }

    onDelete = ev => {
        const data = ev.target.dataset.value;
        this.model.onDelete(data);
        this.view.sumRender();
        this.view.cartRender();
    }

    onOrder = () => {
        const order = JSON.parse(localStorage.getItem('cartItems'));
        order.push({sum: this.model.getSum()});
        this.notify(this.events.ORDER, order);
    }
};