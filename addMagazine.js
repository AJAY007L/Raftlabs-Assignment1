const title=document.getElementById('title')
const ISBN=document.getElementById('ISBN')
const author=document.getElementById('author')
const publishedAt = document.getElementById('publishedAt')
const btn = document.getElementById('addMaga');
btn.addEventListener("click", addMagazine);



function addMagazine() {
    const rows = [
        ["title", "ISBN", "authors","publishedAt"]
        
    ];
    const temp = [];
    temp.push(title.value);
    temp.push(ISBN.value);
    temp.push(author.value);
    temp.push(publishedAt.value);
    rows.push(temp);
    title.value = "";
    ISBN.value = "";
    author.value = "";
    publishedAt.value = "";

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
    