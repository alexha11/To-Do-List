const express = require('express')
const bodyParser = require('body-parser')
const test = require(__dirname + "/isPrime.js")

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var Items = ["Buy Food", "Cook Food"];
var answer = "";

Items = ["Buy Food", "Cook Food", "Eat Food"];

console.log(test.isPrime(5));
console.log(test.duong([2, 3, 4, 5, 6, 7]));

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

//! Start get and post dir "/" 
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
        listTitle: day,
        nameOfUser: name,
        newListItems: Items
    });
});

app.post("/", (req, res) => {
    let addItem = req.body.newItem;
    if (!isEmpty(addItem)){
        Items.push(addItem);
    }
    console.log(addItem);
    res.redirect("/");
})
//! End

//! Start get and post dir "/test"
app.get('/test', (req, res) => {
    res.render("index", {
        answerInput: answer
    });
});

app.post('/test', (req, res) => {
    let stringNumber = req.body.testingInput;
    let intNumber = parseInt(stringNumber);

    if (isPrime(intNumber)) {
        answer = "Yup, the " + stringNumber + " is a prime";
    }
    else {
        answer = "No, the "+ stringNumber + " is not a prime";
    }

    if (isEmpty(stringNumber)) {
        answer = "--------------ANSWER-------------";
    }
    console.log(parseInt(stringNumber));
    res.redirect("/test");
});
//! End

// //! Start get and post dir "/work"
// let workItems = [];
// app.get("/work", (req, res) => {
//     res.render("list", {listTitle: "Work List", newListItems: workItems});
// });
// app.post('/work', (req, res) => {
//     let item = req.body.item;
//     workItems.push(item);
//     res.redirect("/work");
// })
// //! End
app.listen(3500 || process.env.PORT, () => {
    console.log('Server is up on port 3500');
});



// ! this need to be done sfe
// ? write a function
// * hi  