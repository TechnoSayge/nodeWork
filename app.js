/*
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!'); 
    next(); //Allows the request to continue to the next middleware line...
});

app.use((req, res, next) => {
    console.log('In another middleware!')
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
*/
/*************************************************************************** */
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
/*Parsing of the body*/
app.use(bodyParser.urlencoded({extended: false}));


/*Begins Route Handling Middleware*/
//visit expressjs.com to learn more about .use (api reference tab)
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
	console.log('Middleware 2!');
	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});
app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
	console.log('Middleware 3!');
	res.send('<h1>But of course!</h1>');
}); /*Ends Route Handling Middleware */

app.listen(3000);
