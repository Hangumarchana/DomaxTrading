function toggleSection(title){
    const content = title.nextElementSibling;
    const isOpen = content.style.display === 'flex';
    content.style.display = isOpen ? 'none' : 'flex';
}

function toggleRotate(IMG){
    IMG.classList.toggle('arrow-up');

}
Filter =document.querySelectorAll('.filter-title')

Filter.forEach(item =>{
    item.addEventListener('click', function(){
        IMG = this.querySelector('img');
        IMG.classList.toggle('arrow-up');
    })
}


)

document.addEventListener("DOMContentLoaded", function () {
    const selectedFiltersContainer = document.getElementById('selected-filters-container');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const colorCircles = document.querySelectorAll('.color-circle');
    const checkboxes = document.querySelectorAll('#FilterSlider input[type="checkbox"]');
    const appliedFilterBox = document.getElementById('applied-filters');

    // Hide initially
    appliedFilterBox.style.display = 'none';

    function updateFilterVisibility() {
        if (selectedFiltersContainer.children.length === 0) {
            appliedFilterBox.style.display = 'none';
        } else {
            appliedFilterBox.style.display = 'flex'; // or 'block'
        }
    }

    // ---------- Handle Checkbox Filters ----------
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const label = this.parentElement.textContent.trim();

            if (this.checked) {
                const tag = document.createElement('span');
                tag.className = 'filter-tag';
                tag.textContent = label;

                const removeBtn = document.createElement('span');
                removeBtn.textContent = " ×";
                removeBtn.style.cursor = 'pointer';
                removeBtn.onclick = () => {
                    this.checked = false;
                    tag.remove();
                    updateFilterVisibility();
                };

                tag.appendChild(removeBtn);
                selectedFiltersContainer.appendChild(tag);
            } else {
                document.querySelectorAll('.filter-tag').forEach(tag => {
                    if (tag.textContent.trim().startsWith(label)) {
                        tag.remove();
                    }
                });
            }
            updateFilterVisibility();
        });
    });

    // ---------- Handle Color Circles ----------
    colorCircles.forEach(circle => {
        circle.addEventListener('click', function () {
            const colorName = this.dataset.color;
            const alreadySelected = this.classList.contains('selected');

            if (!alreadySelected) {
                this.classList.add('selected');

                const tag = document.createElement('span');
                tag.className = 'filter-tag';
                tag.textContent = colorName;

                const removeBtn = document.createElement('span');
                removeBtn.textContent = ' ×';
                removeBtn.style.cursor = 'pointer';
                removeBtn.onclick = () => {
                    this.classList.remove('selected');
                    tag.remove();
                    updateFilterVisibility();
                };

                tag.appendChild(removeBtn);
                selectedFiltersContainer.appendChild(tag);
            } else {
                this.classList.remove('selected');
                document.querySelectorAll('.filter-tag').forEach(tag => {
                    if (tag.textContent.trim().startsWith(colorName)) {
                        tag.remove();
                    }
                });
            }
            updateFilterVisibility();
        });
    });

    // ---------- Clear All ----------
    clearFiltersBtn.addEventListener('click', function (e) {
        e.preventDefault();
        checkboxes.forEach(cb => cb.checked = false);
        colorCircles.forEach(c => c.classList.remove('selected'));
        selectedFiltersContainer.innerHTML = '';
        updateFilterVisibility();
    });
});

