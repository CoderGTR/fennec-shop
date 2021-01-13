import ControllerRecord from "./components/record/controller-record.js";
import Publisher from "./components/helpers/publisher.js";
import ControllerDetails from "./components/details/controller-details.js";
import ControllerCart from "./components/cart/controller-cart.js";
import OrderController from "./components/order/order-controller.js";
import ControllerBot from "./components/bot/controller-bot.js";
import ControllerHistory from "./components/history/controller-history.js";
// import SortSearchController from "./components/sort-search/sort-search-controller.js";


const record = new ControllerRecord();
const details = new ControllerDetails();
const cart = new ControllerCart();
const order = new OrderController();
const bot = new ControllerBot();
const history = new ControllerHistory()
// const sortSearch = new SortSearchController(publisher.methods);

// document.querySelector('.get-data').addEventListener('click', () => {
    // const link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/3/public/full?alt=json';
    //
    // fetch(link)
    //     .then(r =>
    //     {return r.json()}
    //     )
    //     .then(d => render(parseData(d.feed.entry)))

    //
    // function parseData(arr) {
    //     const names = [
    //         {
    //             name: 'ID',
    //             type: 'float'
    //         },
    //         {
    //             name: 'PRODUCT_NAME',
    //             type: 'string'
    //         },
    //         {
    //             name: 'MANUFACTURE',
    //             type: 'string'
    //         },
    //         {
    //             name: 'CATEGORY',
    //             type: 'string'
    //         },
    //         {
    //             name: 'INGRIDIENTS',
    //             type: 'string'
    //         },
    //         {
    //             name: 'AMOUNT',
    //             type: 'string'
    //         },
    //         {
    //             name: 'UNITS',
    //             type: 'string'
    //         },
    //         {
    //             name: 'PRICE',
    //             type: 'string'
    //         },
    //         {
    //             name: 'IMG_LINK',
    //             type: 'string'
    //         }
    //     ];
    //
    //     const shift = names.length;
    //
    //     return arr.reduce((acc, {content}, i) => {
    //
    //         if (i<=8){
    //             return acc
    //         }else {
    //             const index = Math.floor(i / shift);
    //             const {name, type} = names[i % shift];
    //
    //
    //
    //
    //             if (!acc[index]) {
    //                 acc[index] = {}
    //             }
    //
    //             acc[index][name] = parseContent(content.$t, type)
    //
    //             return acc
    //         }
    //     }, [])
    // }

        // function parseContent (content, type = 'string'){
        //     let answ = content;
        //
        //     switch (type) {
        //        case 'float' : {
        //             answ = +(content.replace(',' , '.'));
        //             break;
        //         }
        //         case 'date': {
        //             answ = new Date(content);
        //             answ = answ.toLocaleDateString();
        //             break;
        //         }
        //         default:{
        //             answ = content
        //             break;
        //         }
        //     }
        //
        //     return answ;
        // }

        // function render (arr) {
        //     console.log(arr)
        //     document.querySelector('.list-of-cards').innerHTML = arr.map(renderCard).join('');
        // }

        // function renderCard({ID, PRODUCT_NAME, MANUFACTURE, CATEGORY, INGRIDIENTS , AMOUNT, UNITS, PRICE, IMG_LINK}) {
        //     return `
        //     <div class="col mb-4">
        //         <div class="card text-center bg-light border-secondary h-100">
        //             <img src="${IMG_LINK}" class="card-img-top" alt="...">
        //             <div class="card-body d-flex flex-column justify-content-between">
        //                 <h5 class="card-title font-weight-bold">${PRODUCT_NAME}</h5>
        //                 <h6 class="card-subtitle mb-2 text-muted">${MANUFACTURE}</h6>
        //                 <p class="card-text text-muted">
        //                     <strong>${UNITS}</strong>
        //                 </p>
        //                  <p class="card-text text-info">${PRICE} UAH</p>
        //                 <div class="d-flex justify-content-between align-items-center">
        //
        //                 <button type="button btn-sm" class="btn btn-info">In cart</button>
        //                 <button type="button" class="btn btn-outline-info">More details</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //         `
        // }



// })

