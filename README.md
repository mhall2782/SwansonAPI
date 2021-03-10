This project is for in-class use and should be saved within the proper Class Folder.

Please do the following after Forking this project:

- create a boilerplate for index.html
- link styles.css to index.html
- link scripts.js to index.html

We will be using the **Ron Swanson Quote API**.  

Here is the URL:
http://ron-swanson-quotes.herokuapp.com/v2/quotes 

* ***************************************************************** *
Please feel free to use this space for notes alongside the files included.

["Is Star Wars the one with the wizard boy?"]


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equip="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,
         initial-scale=1.0">
         <link rel="stylesheet" href="./styles.css">
        <title>Ron Swanson Quotes</title>
        <link rel="shortcut icon" href="./assets/ron.ico">   
</head>
<body>

    <!-- BUTTON -->
    <div id="genQuote">
    <img src="./assets/ron.png" alt="Ron Swanson"
    id="ronLogo">
</div>

<-- DISPLAY -->
<section>
    <main>
        <div class = "quoteContainer">
            <!--
                Info Here::
                - empty div to target
                - h1: Quote Pulled from API
                - p: note "Ron Swanson"
                - img: button for more quotes
            -->
        </div>
    </main>
</section>

    <script src="myscripts.js"></script>
</body>
</html>