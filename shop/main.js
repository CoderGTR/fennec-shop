import ControllerRecord from "./components/record/controller-record.js";
import ControllerDetails from "./components/details/controller-details.js";
import ControllerCart from "./components/cart/controller-cart.js";
import OrderController from "./components/order/order-controller.js";
import ControllerBot from "./components/bot/controller-bot.js";
import ControllerHistory from "./components/history/controller-history.js";
import PaginationController from "./components/pagination/pagination-controller.js";



const record = new ControllerRecord();
const details = new ControllerDetails();
const cart = new ControllerCart();
const order = new OrderController();
const bot = new ControllerBot();
const history = new ControllerHistory();
const pagination = new PaginationController();

document.addEventListener('DOMContentLoaded' , () => {
    document.querySelector('.header-burger').addEventListener('click', ev => {
        document.querySelector('.header-burger').classList.toggle('active');
        document.querySelector('.header-menu').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    });
});

