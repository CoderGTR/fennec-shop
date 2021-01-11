export default class SortSearchView {
    htmlSort = document.querySelector('.select-sort');
    htmlSearch = document.querySelector('.input-search');
    htmlCategories = document.querySelector('.categories');

    constructor(cbSort, cbSearch, cbFilter) {
        this.htmlSort.addEventListener('input', cbSort)
        this.htmlSearch.addEventListener('input', cbSearch)
        this.htmlCategories.addEventListener('input', cbFilter)

        this.onSort = cbSort;
        this.onSearch = cbSearch;
        this.onFilter = cbFilter;
    }

    render = () => {
        const container = document.querySelector('.sort-search');
        container.innerHTML = `
         <div class="form-group col-md-5">
                    <select id="inputState" class="form-control-md select-sort">
                        <option value="price-exp">Expensive first</option>
                        <option value="price-cheap">Cheap first</option>
                    </select>
                </div>

                <div class="form-group col-md-5">
                    <select id="inputState" class="form-control-md categories">

                    </select>
                </div>
                
                <form class="form-inline search col-md-2">
                    <input class="form-control mr-sm-2 input-search" type="search" placeholder="Search" aria-label="Search">
                    <!--                    <button class="btn btn-outline-warning my-2 my-sm-0 search-button" type="submit"><i class="fa fa-search"></i></button>-->
                </form>
            `
        container.querySelector('.price-exp').addEventListener('click', () => this.onSort('price-exp') );
        container.querySelector('.price-cheap').addEventListener('click', () => this.onSort('price-cheap') );

        container.querySelector('.input-search').addEventListener('input', (event) => this.onSort(event) );


    }

    renderCategories = arr => {
        this.htmlCategories.innerHTML = arr.map(this.renderOption).join('');
    }

    renderOption = (el) => {
        return `<option class="${el}">${el}</option>`
    }
}