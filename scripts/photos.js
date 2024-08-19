let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="image-1">
                <img src="${product.image}" alt="">
                <p>${product.name}</p>
        </div>
    `;
});

document.querySelector('.js-products-row').innerHTML = productsHTML;

console.log(productsHTML);