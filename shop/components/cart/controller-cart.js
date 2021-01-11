import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";

export default class ControllerCart {
    constructor({events, subscribe}) {
        this.model = new ModelCart();
        this.view = new ViewCart(this.onCount, this.onDelete);

        // this.view.cartRender();
        subscribe(events.ADD_TO_CART, this.addHandler)
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
        this.view.cartRender();
    }
};