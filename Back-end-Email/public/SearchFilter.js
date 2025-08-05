let searchText = document.getElementById('searchText');
searchText.addEventListener('keyup', filterProducts);
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('searchDropdown');
    const searchInput = document.getElementById('searchText');
    if (!dropdown.contains(event.target) && event.target !== searchInput) {
        dropdown.style.display = 'none';
    }
});

function filterProducts() {
    const input = document.getElementById('searchText').value.toLowerCase();
    const dropdown = document.getElementById('searchDropdown');
    dropdown.style.display = 'block';
    dropdown.innerHTML = `
        <div class="loading-spinner"></div>
    `;

    if (input === '') {
        dropdown.innerHTML = '';
        return;
    }

    setTimeout(() => {
        const filtered = database.filter(p =>
            p.Name.toLowerCase().includes(input) ||
            p.Category.toLowerCase().includes(input)
        );

        dropdown.innerHTML = ''; // Clear loading spinner

        if (filtered.length === 0) {
            dropdown.innerHTML = '<div class="product-item1">No results found</div>';
            return;
        }

        filtered.forEach(p => {
            const div = document.createElement('div');
            div.classList.add('product-item');
            div.innerHTML = `
              <img src="${p.IMG}" alt="product">
              <div class="product-info">
                <strong id="pname">${p.Name}</strong>
                <strong id="pcat">${p.Category}</strong>
              </div>
            `;
            dropdown.appendChild(div);
        });
    }, 500); // Simulate delay for loader visibility
}
