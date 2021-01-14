import ModelCart from "./model-cart.js";
import ControllerCart from "./controller-cart.js";

export default class ViewCart {
    htmlCart = document.querySelector('.cart');
    htmlModals = document.querySelector('.modals');

    constructor(onCount, onDelete, onOrder) {
        this.model = new ModelCart();
        this.sum = this.model.getSum();
        this.onOrder = onOrder;
        this.htmlCart.addEventListener('click', this.cartRender);



        this.htmlModals.insertAdjacentHTML('beforeend', `
    
           <div class="modal fade " id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Your cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex row">
                        <h5 class="modal-title empty" id="exampleModalLabel">Your cart is empty :(</h5>
                    </div>
                    <div class="sum d-flex align-center justify-content-center">
                          <hr/><p class="text-info">TOTAL: ${this.sum} UAH</p>
                     </div>
                    <div class="modal-footer">
                    
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary btn-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
       
            `);

        this.htmlSubmit = document.querySelector('.btn-submit');
        this.onCount = onCount;
        this.onDelete = onDelete;
        this.htmlDetailsContent = document.querySelector('#cartModal .modal-body');
        this.htmlSubmit.addEventListener('click', this.onOrder);

    }



    cartRender = () => {
        let arr = JSON.parse(localStorage.getItem('cartItems'));
        let records = [];

        arr.forEach(el => {
            this.sumRender();

            // sum += +el.PRICE * el.count;
            //     this.htmlDetailsContent.innerHTML
             records.push( `
         <div class="row mb-3 d-flex justify-content-center flex-row">
            <div class="goods col-sm-4 mb-3">
              <div class="card text-center bg-light border-secondary h-100">
                    <img src="${el.IMG_LINK}" class="card-img-top" alt="${el.PRODUCT_NAME+'image'}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title font-weight-bold">${el.PRODUCT_NAME}${el.AMOUNT < 1000 ? `<p class="text-warning">(running out)</p>`:''}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${el.MANUFACTURE}</h6>
                        <p class="card-text text-muted">
                            <strong>${el.UNITS}</strong>
                        </p>
                         <p class="card-text text-info">${el.PRICE} UAH</p>
            </div>
            </div>
            </div>
            
            <div class="buttons  d-flex justify-content-center mb-4">
                <button class="btn-minus btn-counter" data-count="${el.val}" data-type="minus">-</button>
                <div class="count h-100"><input type="text" class="form-control input-count" id="inlineFormInputName" data-count="inp-${el.val}"value="${el.count}"></div>
                <button class="btn-plus btn-counter" data-count="${el.val}" data-type="plus">+</button>
            </div>
            <button class="btn-warning btn-sm col-sm-2 btn-delete" data-value="${el.val}">Delete</button>
         </div>
         <hr/>
             
        `
             )

        });
        this.htmlDetailsContent.innerHTML = ''
        records.map(el => {
            this.htmlDetailsContent.insertAdjacentHTML('beforeend', el) ;
        })

        // this.htmlDetailsContent.innerHTML = records.map().join('');

        document.querySelectorAll('.btn-minus').forEach(el=>{
            el.addEventListener('click', this.onCount);
            el.addEventListener('click', this.sumRender);
        })

        document.querySelectorAll('.btn-plus').forEach(el=>{
            el.addEventListener('click', this.onCount);
            el.addEventListener('click', this.sumRender);

        })


        document.querySelectorAll('.btn-delete').forEach(el=>{
            el.addEventListener('click', this.onDelete);
            this.sumRender();
        })



    //    что бы повесить увеличиватель счетчика , нужно задать уникальный ID для каждого инпута и кнопки


    }



    sumRender = () => {
        let sum = this.model.getSum();
        document.querySelector('.sum').innerHTML = `<hr/><p class="text-info">TOTAL: ${sum} UAH</p>`
    }


};