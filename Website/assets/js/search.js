document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page
    var searchQuery = document.querySelector('input[type="search"]').value.toLowerCase();
    
    // Example: filter through list items (modify as needed)
    var items = document.querySelectorAll('.search-item'); // Add the 'search-item' class to items to search through
    items.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
            item.style.display = 'block';  // Show matching items
        } else {
            item.style.display = 'none';   // Hide non-matching items
        }
    });
});
