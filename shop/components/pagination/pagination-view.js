export default class PaginationView {
    htmlPagination = document.querySelector('.pagination');

    render = count => {
        let text = ``;
        for (let i = 1; i <= count; i++) {
            text +=  `
                <li class="page-item ${i===1 ? 'active' : ''}">
                    <a class="page-link puglink" href="#" tabindex="-1" data-value="${ i }" aria-disabled="true">${ i }</a>
                </li> `;
        }

        if (count <= 1) text = ``;

        return this.htmlPagination.innerHTML = text;
    }

    handle = pag => {
        this.htmlPagLinks = document.querySelectorAll('.puglink');

        for (let htmlPagLink of this.htmlPagLinks) {
            htmlPagLink.addEventListener('click', pag);
        }
    }

    unactive = () => {
        document.querySelectorAll('.page-item').forEach(el => {
            el.classList.remove('active');
        })
    }
};