export default class OrderView {

    constructor(cbCheck, cbSubmit, cbBack) {
        this.cbCheck = cbCheck;
        this.cbSubmit = cbSubmit;
        this.cbBack = cbBack;
    }

    renderOrder = () => {
        const htmlModal = document.querySelector('#cartModal');
        // htmlModal.innerHTML = ``;
        htmlModal.innerHTML = '';
        htmlModal.innerHTML =    `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Making order</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body modal-body--cart">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input id="name" type="search" class="form-control" placeholder="Please, enter your name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="Name" autofocus>
                        </div>
                        <div class="descr-name"></div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                            <input id="email" type="search" class="form-control" placeholder="Please, enter your E-mail" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="Email">
                        </div>
                        <div class="descr-email"></div>
                        <div class="input-group  group-phone mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                            <input id="phone" type="search" class="form-control" placeholder="Please, enter your phone number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" data-name="Phone">
                        </div>
                        <div class="descr-phone"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-secondary back-btn" data-bs-dismiss="modal">Go back</button>
                        <button type="button" class="btn btn-primary btn-submit" data-bs-dismiss="modal" disabled="true">Submit</button>
                    </div>
                </div>
                </div>
               `
        ;

        const btnSubmit = document.querySelector('.btn-submit');
        btnSubmit.addEventListener('click', this.cbSubmit)

        document.querySelector('#phone').addEventListener('input', (ev) => {
            let modalContent = document.querySelector(`.descr-${ev.target.id}`);
            const result = this.cbCheck(ev.target.value, ev.target.dataset.name)
            console.log(result)
            if(result !== true) {
                modalContent.innerHTML =  `<p class="text-warning">${result}</p>`
            }else{
                modalContent.innerHTML = `<p class="text-success">Finally!</p>`
                btnSubmit.disabled = false;
            }

        })
        document.querySelector('#email').addEventListener('input', (ev) => {
            let modalContent = document.querySelector(`.descr-${ev.target.id}`);
            const result = this.cbCheck(ev.target.value, ev.target.dataset.name)

            if(result !== true) {
                modalContent.innerHTML =  `<p class="text-warning">${result}</p>`
            }else{
                modalContent.innerHTML = `<p class="text-success">Finally!</p>`
            }

        })
        document.querySelector('#name').addEventListener('input', (ev) => {
            let modalContent = document.querySelector(`.descr-${ev.target.id}`);
            const result = this.cbCheck(ev.target.value, ev.target.dataset.name)
            console.log(result)
            if(result !== true) {
                modalContent.innerHTML =  `<p class="text-warning">${result}</p>`
            }else{
                modalContent.innerHTML = `<p class="text-success">Finally!</p>`
            };

        });

        document.querySelector('.back-btn').addEventListener('click', this.cbBack)

    }

    getValues = () => {
        this.name = document.querySelector('#name');
        this.phone = document.querySelector('#phone');
        this.email = document.querySelector('#email');

        return {
            name : this.name.value.trim(),
            phone : this.phone.value.trim(),
            email : this.email.value.trim()
        }
    };

    // clearModal = () => {
    //     const htmlModal = document.querySelector('#cartModal');
    //     htmlModal.innerHTML = '';
    // }

};