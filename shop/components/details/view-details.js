export default class ViewDetails {
    htmlModals = document.querySelector('.modals');

    constructor() {
        this.htmlModals.insertAdjacentHTML('beforeend', `
    
           <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Some more information about this product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`);

        this.htmlDetailsContent = document.querySelector('#detailsModal .modal-body');

    }

    render = data => {
        this.htmlDetailsContent.innerHTML = `
         <p class="card-text text-success">ID:  <strong class="card-text text-dark"> ${data.ID},</strong></p>
         <p class="card-text text-success">Category:  <strong class="card-text text-dark"> ${data.CATEGORY},</strong></p>
         <p class="card-text text-success">Ingridients:  <strong class="card-text text-dark"> ${data.INGRIDIENTS},</strong></p>
         <p class="card-text text-success">Price:  <strong class="card-text text-dark"> ${data.PRICE} UAH,</strong></p>
         <p class="card-text text-success">In stock:  <strong class="card-text text-dark"> ${data.AMOUNT < 1000 ? 'Less than 1000 ' : 'More than 1000 '} pieces</strong></p>
        `
    }
}