const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var Items = ["Buy Food", "Cood Food"];
var answer = "";
var number = 0;

function isPrime(x) {
    for(let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
} 

app.get('/', (req, res) => {
    //console.log(addItem);
    var today =  new Date(); 
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long", 
        year: "numeric"
    };
    var name = "Ha Duong";

    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindOfDay: day,
        nameOfUser: name,
        newListItems: Items
    });
});

app.get('/test', (req, res) => {
    if (isPrime(number)) {
        answer = "Yup, the number is a prime";
    }
    else if(!isPrime(number)) {
        answer = "No, the number is not a prime";
    }
    else {
        answer = "";
    }
    res.render("index", {
        answerInput: answer
    });
});

app.post('/test', (req, res) => {
    number = req.body.testingInput;
    console.log(parseInt(number));
    res.redirect("/test");
});

app.post("/", (req, res) => {
    var addItem = req.body.newItem;
    Items.push(addItem);
    console.log(addItem);
    res.redirect("/");
})

app.listen(3500, () => {
    console.log('Server is up on port 3500');
});

