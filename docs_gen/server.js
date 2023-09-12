const showdown  = require('showdown');
const fs = require('fs');

const converter = new showdown.Converter();

fs.readFile('../README.md', 'utf8', (error, data) => {
    if (error) {
        console.error('An error occurred while reading the file:', error);
        return;
    }

    let dataConvert      = converter.makeHtml(data);
    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="http://fonts.googleapis.com/css?family=Old+Standard+TT:400,400italic,700" rel="stylesheet" type="text/css">
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,600" rel="stylesheet" type="text/css">
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css">
            <link rel="stylesheet" type="text/css" href="./style.css" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

            <!-- and it's easy to individually load additional languages -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"></script>

            <script>hljs.highlightAll();</script>

            <title>Document</title>
        </head>
        <body>
            ${dataConvert}
        </body>
        </html>
    `
    fs.writeFile('../generated/readme.html', html, 'utf8', (error) => {
        if (error) {
            console.error('An error occurred while writing to the file:', error);
            return;
        }
        console.log('File has been written successfully.');
    });

});


