/*
********************************
! ASYNCHRONOUS PROGRAMMING
********************************


    - Synchronous programming is code read line by line
    - Asychronous programming allows a programs to do more than
        one thing at a time
    - Makes it possibleto run long-running actions without
        stopping the program to wait for a response

/*
********************************
! API
********************************

    - API: Application Program Interface
    - Is NOT a database or server
    - Allows us access points to a server
        - comes in the forms of ENDPOINTS
        - endpoints directs us to sets of data
    
    - REST API: REpresentational State Transfer
        - creates an object of requested data by the client,
            sends values in response to the user
    
    - Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
    
  

*/

let baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
console.log(document.childNotes[1].childNotes);

//! GLOBAL ELEMENTS
let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');

//! EVENT LISTENER
logo.addEventListener('click', fetchQuote);


/*
*******************************
! FETCH
*******************************
let  promise = fetch(url, [option]);

    - url: THE URL we wish to access
    - option: optional parameters like methods, nheaders, etc.

Promise:
    - an unknown value when created
    - represents the eventual fulfilled value or rejected (error)
    - is ALWAYS:
        - Pending: initital state, neither fulfilled or rejected
        - Fulfilled: the operation completed successfully
        - Rejected: Operation failed

*/

//fetch(baseURL)
//    .then(res => res.json());
//    .then(json => console.log(json));

function fetchQuote() {
    fetch(baseURL)
    .then(res => res.json());
    .then(json => console.log(json));
}

// fetchQuote();


/*
****************************
! ASYNC/AWAIT
****************************

    - Allows us to program in a synchronous mamer while still
       allowing code to run in the background
    - Makes our sites as responsive as possible

    - Asynch keyword can be used on a normal function
        - Async used at the beginnin of hte function delcaration
    - Can use await keyword

    ex:
        async function myFn() {
            await...

        }

*/

async function fetchQuote() {
    const response = await fetch(baseURL);
    const json = await response.json();
    console.log('Async/Await: ', json);
}

let displayQuote = data => {
    console.log('DISPLAY QUOTE', data);
}