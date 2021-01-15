export default class ViewRecord {
    htmlCards = document.querySelector('.list-of-cards');
    htmlSort = document.querySelector('.select-sort');
    htmlSearch = document.querySelector('.input-search');
    htmlCategories = document.querySelector('.categories');
    htmlHeaderLogo = document.querySelector('.navbar-brand');


    constructor(cbSort, cbSearch, cbFilter, initRender, onDetails, onAdd) {
        this.htmlSort.addEventListener('input', cbSort)
        this.htmlSearch.addEventListener('input', cbSearch)
        this.htmlCategories.addEventListener('input', cbFilter)
        this.htmlHeaderLogo.addEventListener('click', initRender)
        this.onDetails = onDetails;
        this.onAddHandler = onAdd;

    }

    render = arr => {
        this.htmlCards.innerHTML = arr.map(this.renderCard).join('');
        [...this.htmlCards.querySelectorAll('.btn-container .btn-details')].forEach(btn => btn.addEventListener('click', this.onDetails));
        [...this.htmlCards.querySelectorAll('.btn-container .add-to-cart')].forEach(btn => btn.addEventListener('click', this.onAddHandler));
    }



    renderCard = ({ID, PRODUCT_NAME, MANUFACTURE, CATEGORY, INGRIDIENTS , AMOUNT, UNITS, PRICE, IMG_LINK, val}) => {
        return `
            <div class="col col-sm-2 col-md-3  mb-4 record">
                <div class="card text-center bg-light border-secondary h-100">
                    <img src="${IMG_LINK}" class="card-img-top" alt="${PRODUCT_NAME+'image'}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title font-weight-bold">${PRODUCT_NAME}${AMOUNT < 1000 ? `<p class="text-warning">(running out)</p>`:''}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${MANUFACTURE}</h6>
                        <p class="card-text text-muted">
                            <strong>${UNITS}</strong>
                        </p>
                         <p class="card-text text-info">${PRICE} UAH</p>
                        <div class="d-flex justify-content-between align-items-center btn-container">
                       
                        <button type="button btn-sm" 
                        class="btn btn-info add-to-cart"
                        data-add-id="${val}"
                        >In cart</button>
                        <button type="button" class="btn btn-outline-info btn-details"
                         data-bs-toggle="modal" data-bs-target="#detailsModal"
                         data-details-id="${val}">More details</button>
                            
                        </div>
                    </div>
                </div>
            </div>
                `


    }



}