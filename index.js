const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const findBtn = document.getElementById('find');
const findemail = document.getElementById('findemail');
const ISBN = document.getElementById('ISBN');
const email = document.getElementById('email');



btn.addEventListener("click", getBooks);
btn1.addEventListener("click", getMagazines);
btn2.addEventListener("click", sortedBooksAndMagazines);

findBtn.addEventListener("click", findBookbyIsbn);
findemail.addEventListener("click", findBookAndMagaByEmail);


async function getBooks() {
    const response=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv');
    const data=await response.text();
    const booksTable=data.split('\n').slice(1);


    booksTable.forEach(ele => {
        if(ele.length!=0)
        {row=ele.split(';');
        console.log(row);}
    });
}

async function getMagazines() {
    const response=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv');
    const data=await response.text();
    const magazinesTable=data.split('\n').slice(1);


    magazinesTable.forEach(ele => {
        if(ele.length!=0)
        {row=ele.split(';');
        console.log(row);}
    });
}
//comparator for sorting on basis of title
function compare_to_sort(x,y) 
 {
  if (x[0] < y[0])
    return -1;
  if (x[0] > y[0])
    return 1;
  return 0;
 }
async function sortedBooksAndMagazines() {
    //fetching books
    const response=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv');
    const data=await response.text();
    const booksTable=data.split('\n').slice(1);
    const booksAndMagazines=[]
    
    booksTable.forEach(ele => {
        if(ele.length!=0)
        {row=ele.split(';');
            booksAndMagazines.push(row);
        }
    });
    //fetching magazines
    const response1=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv');
    const data1=await response1.text();
    const magazinesTable = data1.split('\n').slice(1);
    magazinesTable.forEach(ele => {
        if(ele.length!=0)
        {  row=ele.split(';');
            booksAndMagazines.push(row);
        }
    });
    
    booksAndMagazines.sort(compare_to_sort);
    console.log(booksAndMagazines);

}

async function findBookbyIsbn() {
    let isbnValue = ISBN.value;
    const response=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv');
    const data=await response.text();
    const booksTable=data.split('\n').slice(1);
    const books=[]
    
    booksTable.forEach(ele => {
        if(ele.length!=0)
        {row=ele.split(';');
            books.push(row);
        }
    });
    let flag = 0;
   
    books.forEach(ele => {
        if (ele.length)
        {
            if (ele[1] == isbnValue) {
                console.log(ele[0]);
                flag = 1;
            }     
        }
    });
    if (flag==0) {
        const response=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv');
        const data=await response.text();
        const magazinesTable=data.split('\n').slice(1);
        const magazines=[]
    
        magazinesTable.forEach(ele => {
            if(ele.length!=0)
            {  row=ele.split(';');
                magazines.push(row);
            }
        });
        let flag2 = 0;
        magazines.forEach(ele => {
            if (ele.length)
            {
                if (ele[1] == isbnValue) {
                    console.log(ele[0]);
                    flag2 = 1;
                }     
            }
        });
        if (flag2==0) {
            console.log('Incorrect Isbn');
        }
        
    }
}


async function findBookAndMagaByEmail() {
    //finding in books
    let emailValue = email.value;
    const response=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv');
    const data=await response.text();
    const booksTable=data.split('\n').slice(1);
    const books=[]
    
    booksTable.forEach(ele => {
        if(ele.length!=0)
        {row=ele.split(';');
            books.push(row);
        }
    });
    let flag = 0;
   
    books.forEach(ele => {
        if (ele.length)
        {
            let len = emailValue.length;
            for (let i = 0; i < ele[2].length; i++) {
                let sub = ele[2].substr(i, len)
                if (sub.includes('@') && sub.includes('.') && sub === emailValue)
                {
                    flag = 1;
                    console.log(ele[0]);
                }
                }  
        }
    });
    //finding in magazines
        const response1=await fetch('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv');
        const data1=await response1.text();
        const magazinesTable=data1.split('\n').slice(1);
        const magazines=[]
    
        magazinesTable.forEach(ele => {
            if(ele.length!=0)
            {  row=ele.split(';');
                magazines.push(row);
            }
        });
       
        magazines.forEach(ele => {
            if (ele.length)
            {
            let len = emailValue.length;
            for (let i = 0; i < ele[2].length; i++) {
                let sub = ele[2].substr(i, len)
                if (sub.includes('@') && sub.includes('.') && sub === emailValue)
                {
                    flag = 1;
                    console.log(ele[0]);
                }
                }  
            }
        });
        if (flag==0) {
            console.log('Incorrect email');
        }
        
    
}


