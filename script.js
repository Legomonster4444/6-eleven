function search() {
    let query = document.getElementById('query').value;
    if (query) {
        let resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<p>Searching for: ' + query + '</p>';
        // Here you would add the code to make an API request and display results
    }
}
