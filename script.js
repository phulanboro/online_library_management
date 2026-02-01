let books = [];

function addBook(){
    let name = bookName.value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;
    let year = document.getElementById("year").value;

    if(!name || !author || !isbn || !year){
        alert("Please fill all fields");
        return;
    }

    books.push({
        name,
        author,
        isbn,
        year,
        status: "Available",
        borrowerName: "-",
        borrowerId: "-"
    });

    bookName.value = author.value = isbn.value = year.value = "";
    displayBooks();
}

function borrowBook(i){
    if(books[i].status === "Borrowed"){
        alert("Book already borrowed");
        return;
    }

    let borrowerName = prompt("Enter Borrower Name:");
    let borrowerId = prompt("Enter Borrower ID:");

    if(!borrowerName || !borrowerId){
        alert("Borrower details required");
        return;
    }

    books[i].status = "Borrowed";
    books[i].borrowerName = borrowerName;
    books[i].borrowerId = borrowerId;
    displayBooks();
}

function returnBook(i){
    books[i].status = "Available";
    books[i].borrowerName = "-";
    books[i].borrowerId = "-";
    displayBooks();
}

function deleteBook(i){
    books.splice(i,1);
    displayBooks();
}

function displayBooks(){
    let list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach((b,i)=>{
        list.innerHTML += `
        <tr>
            <td>${b.name}</td>
            <td>${b.author}</td>
            <td>${b.isbn}</td>
            <td>${b.year}</td>
            <td>${b.status}</td>
            <td>${b.borrowerName}</td>
            <td>${b.borrowerId}</td>
            <td>
                <button onclick="borrowBook(${i})">Borrow</button>
                <button onclick="returnBook(${i})">Return</button>
                <button onclick="deleteBook(${i})">Delete</button>
            </td>
        </tr>
        `;
    });
}
