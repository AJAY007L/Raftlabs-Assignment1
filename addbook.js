const title=document.getElementById('title')
const ISBN=document.getElementById('ISBN')
const author=document.getElementById('author')
const description = document.getElementById('description')
const btn = document.getElementById('addbook');
btn.addEventListener("click", addBook);

function addBook() {
    const rows = [
        ["title", "ISBN", "authors","description"]
        
    ];
    const temp = [];
    temp.push(title.value);
    temp.push(ISBN.value);
    temp.push(author.value);
    temp.push(description.value);
    rows.push(temp);
    title.value = "";
    ISBN.value = "";
    author.value = "";
    description.value = "";

    let csvContent = "data:text/csv;charset=utf-8,";
    
    rows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    
    link.click();
}
    