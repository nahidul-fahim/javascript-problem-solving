// Count the total papers needed for the following number of books. book1 requires 100 pages, book2 requires 200 pages, book3 requires 300 pages. Now count the total page numbers if you need 3 book1, 2 book2 and 1 book3.



let amountOfBook1 = 10;
let amountOfBook2 = 50;
let amountOfBook3 = 20;
let totalPages = paperRequirements (amountOfBook1, amountOfBook2, amountOfBook3);

function paperRequirements (book1, book2, book3){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;
    let book1TotalPages = book1 * book1Pages;
    let book2TotalPages = book2 * book2Pages;
    let book3TotalPages = book3 * book3Pages;
    totalPageRequired = book1TotalPages + book2TotalPages + book3TotalPages;
    return totalPageRequired;
}

console.log(totalPages);