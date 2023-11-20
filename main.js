let books = [[1, 'Start with why', 'Simon Sinek', 80.0, 13],
[2, 'But how do it know', 'J. Clark Scott', 59.9, 22],
[3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
[4, 'Zero to One', 'Peter Thiel', 45.0, 12],
[5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]];

// /*
let query_book_id = 0; //if user use id to do query

let query_title = 'where are you';//if user use title to do query

let query_Author = 'rami';// //if user use author to do query

//for query we use for loop
for (let i = 0; i < books.length - 1; i++) {
    let book_id = books[i][0];
    let title = books[i][1];
    let author = books[i][2];

    if (book_id == query_book_id) {
        if (query_book_id != null) {
            console.log(book_id + ' | ' + title + ' | ' + author);
            break;
        }
    } else if (author == query_Author) {
        if (query_Author != null) {
            console.log(book_id + ' | ' + title + ' | ' + author);
            break;
        }
    } else if (title == query_title) {
        if (query_title != null) {
            console.log(book_id + ' | ' + title + ' | ' + author);
            break;
        }
    } else if (book_id != query_book_id || title != query_title) {
        if (query_title != null) {
            console.log(' sorry this book is not in the libary');
            break;
        } else if (query_book_id != null) {
            console.log(' sorry this book is not in the libary');
            break;
        }
    } else if (author != query_Author && query_Author != null) {
        console.log(' sorry this author  is not in the libary');
        break;
    }
}

// */

let book_title = 'Start with why';
let user_quantity = 3;
let ava_balance = 300;



function pay_book(book_title, user_quantity, ava_balance) {

    for (let i = 0; i < books.length - 1; i++) {
        let title = books[i][1];
        let quantity = books[i][4];
        let price = books[i][3]

        if (title == book_title) {// أن يكون الكتاب متوفر
            if (user_quantity == quantity) { //أن تكون الكمية المطلوبة متوفرة
                tot_price = user_quantity * price;
                if (ava_balance >= tot_price) {//أن يكون رصيد العميل يكفي لشراء الكمية المطلوبة
                    console.log(
                        `The bill:
    the book: ${books[i][1]} 
    the total price: ${tot_price} 
    the amount: ${user_quantity} `);

                    console.log(' thinks for visit us ');
                    break;
                }
            } else if (user_quantity < quantity) {
                books[i][4] = quantity - user_quantity;//في حال وجود كمية كافية، يتم إنقاص المخزون وفقاً للكمية المطلوبة في الفاتورة

                tot_price = user_quantity * price;
                if (ava_balance >= tot_price) {
                    console.log(
                        `The bill:
    the book: ${books[i][1]} 
    the total price: ${tot_price} 
    the amount: ${user_quantity} `);

                    console.log(' thinks for visit us ');
                    break;
                }
            } else {
                console.log(' sorry we don\'t have this amount we have only: ' + quantity);
                break;
            }
        } if (title != book_title) {
            console.log('sorry this book is not in the libary');
            break;
        }

    }
}

pay_book(book_title, user_quantity, ava_balance);

console.log(books); // to see the chenges 