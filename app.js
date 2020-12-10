const express = require('express');

const app = express();
const jwt = require('jsonwebtoken');

app.use(husg)
app.use(huyt)

function husg (req, res, next) {
    const user = 100;
    dook = user
    console.log('this global middleware should run first')
    next()
};
function huyt (req, res, next) {
    // req.user = req.body
    console.log(`global middleware ${dook}should run first`)
    next()
};
function foo (req, res, next) {
    const token = req.headers.authorisation;
    console.log(token)
    if (!token) {
        return res.send("this token does not exist")
        } else {
            // const tokenbody = token.slice(7);
            jwt.verify(token, "my secrete")
        next();
    }
}

app.get('/', (req, res, next) => {
    const payload = {
        name: "arthur",
        birthday: "today"
    };
    const token = jwt.sign(payload, "my secrete")
    res.send(`we are testing the ${token} middle ware`)
});
app.get('/home', foo, (req, res, next) => {
    res.send('we are testing the home middle ware')
});
app.get('/admin', (req, res, next) => {
    res.send('we are testing the admin middle ware')
});

app.listen(3000, err => {
    if (!err) console.log('reading from port 3000');
});
