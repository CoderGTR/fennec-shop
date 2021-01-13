export default class ViewHistory {
    htmlModal = document.querySelector('.modals');
    constructor(cbInit, cbCount) {
        this.initHistory = cbInit;
        this.countPrice = cbCount;
        this.htmlBtn = document.querySelector('.btn-history').addEventListener('click', cbInit);

        this.htmlModal.insertAdjacentHTML('beforeend', `
             <div class="modal fade " id="historyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Orders history</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body modal-body-history">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Total price</th>
                              <th scope="col">When</th>
                            </tr>
                          </thead>
                          <tbody class="table-body">
                              
                          </tbody>
                          </table>
                      
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
                
                `)
    };

    renderHistory = (arr) => {
        const tbody = document.querySelector('.table-body');
        arr.forEach((el, index) => {
            let date = new Date(el[2])

                tbody.insertAdjacentHTML('beforeend' , `
                <tr>
                
                              <th scope="row">${el[0].name}</th>
                              <td>${el[0].phone}</td>
                              <td>${this.countPrice(el[1])} UAH</td>
                              <td>${date.toLocaleDateString()} , at
                                   ${date.getHours() < 10 ? '0' + date.getHours():date.getHours()}:
                                   ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:
                                   ${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()} 
                              </td>
                              
                           
                              </tr>
                `)

        })
    }

};