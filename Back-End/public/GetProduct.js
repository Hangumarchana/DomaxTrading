let database4;
const productDetailImage = document.getElementById('product-details-image');
const productName = document.querySelector('.product-name');
const productCategory = document.querySelector('.product-category');
const productShape = document.querySelector('.product-shape');
const productColor = document.querySelector('.product-color');
const productMaterial = document.querySelector('.product-material');
const productFinish = document.querySelector('.product-finish');
const productStyle = document.querySelector('.product-style');
const productDescription = document.querySelector('.product-description');
const productContainer = document.querySelector('.product-card-details');
const phoneNumber = "94718990374";
const buyNowBtn = document.querySelector(".premium-btn");
const productDetailFooter = document.querySelector('.productDetailFooter');



document.addEventListener("DOMContentLoaded", async function () {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        console.log("Product ID from URL:", productId);

        // Fetch the data.json file
        const response = await fetch('Data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        database4 = await response.json();
        console.log("Loaded database:", database4);

        if (productId && database4) {
            // Find product by Id (loose equality to allow string/number match)
            const product = database4.find(item => item.Id == productId);

            if (product) {
                console.log("Product found:", product);

                // Populate product details
                productDetailImage.src = product.IMG;
                productDetailImage.alt = product.Name;
                productName.innerText = product.Name;
                productCategory.innerHTML = `<strong>Category:</strong> ${product.Category}`;
                productShape.innerHTML = `<strong>Shape:</strong> ${product.Sub}`;
                productColor.innerHTML = `<strong>Color:</strong> ${product.Color}`;
                productMaterial.innerHTML = `<strong>Material:</strong> ${product.Material}`;
                productFinish.innerHTML = `<strong>Finish:</strong> ${product.Finish}`;
                productStyle.innerHTML = `<strong>Style:</strong> ${product.Style}`;
                productDescription.innerHTML = `<strong>Description:</strong> ${product.Dep}`;

                // Add event listener to Buy Now button
                buyNowBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    const message = `Hello, I'm interested in buying:\n\n` +
                        `*${product.Name}*\n` +
                        `Category: ${product.Category}\n` +
                        `Subtype: ${product.Sub}\n` +
                        `Color: ${product.Color}\n` +
                        `Material: ${product.Material}\n` +
                        `Finish: ${product.Finish}\n` +
                        `Style: ${product.Style}\n\n` +
                        `Product Link: ${window.location.href}`;

                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                });

            } else {
                // Product with that ID not found in database
                console.log("No product found with the given ID");
                productContainer.innerHTML = `
                    <div class="text-center p-4 bg-light rounded ">
                        <p class="h5 mb-3  NoProduct">No Results Found</p>
                        <a href="Product.html" class="NoProductBTN px-5 py-3">Go to Products</a>
                    </div>
                `;
                productDetailFooter.style.setProperty('top', '160px', 'important');


            }
        } else {
            // productId missing or database4 empty
            console.log("Product ID missing in URL or database is empty");
            productContainer.innerHTML = `
                    <div class="text-center p-4 bg-light rounded ">
                        <p class="h5 mb-3  NoProduct">No Results Found</p>
                        <a href="Product.html" class="NoProductBTN px-5 py-3">Go to Products</a>
                    </div>
                `;
            productDetailFooter.style.setProperty('top', '160px', 'important');

        }

    } catch (error) {
        console.error("Error loading data:", error);
        productContainer.innerHTML = `
                    <div class="text-center p-4 bg-light rounded ">
                        <p class="h5 mb-3  NoProduct">No Results Found</p>
                        <a href="Product.html" class="NoProductBTN btn-lg px-5 py-3">Go to Products</a>
                    </div>
                `;
        productDetailFooter.style.setProperty('top', '160px', 'important');

    }
});
