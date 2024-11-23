// JavaScript code for search functionality
function search_wizards() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase(); // Converts the input to lowercase to make the search case-insensitive
    let items = document.getElementsByClassName('hi');
    
    // Loop through each item and check if it includes the search input
    for (let i = 0; i < items.length; i++) { 
        if (!items[i].innerHTML.toLowerCase().includes(input)) {
            items[i].style.display = "none"; // Hide items that do not match
        } else {
            items[i].style.display = "list-item"; // Show items that match
        }
    }
}


function myFunction() {
    let paragraphs = document.querySelectorAll('#wiz1, #wiz2');
    paragraphs.forEach(paragraph => {
        if (paragraph.innerHTML === "हैरी पॉटर एक फिल्म श्रृंखला है ...") {
            location.reload(); // Reload to switch back to English
        } else {
            paragraph.innerHTML = paragraph.id === "wiz1"
                ? "हैरी पॉटर एक फिल्म श्रृंखला है जो ... पर आधारित है।"
                : "फैंटास्टिक बीस्ट्स एंड वेयर टू फाइंड देम एक फंतासी फिल्म है ...।";
        }
    });
}
