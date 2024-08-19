let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
        <div class="image-1 image-padding">
                <img src="${product.image}">
                <p>${product.name}</p>
        </div>
    `;
});

document.querySelector('.js-products-row').innerHTML = productsHTML;