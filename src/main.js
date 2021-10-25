const http = require("http");
const express = require("express");
const cors = require('cors');
const config = require("./environment/config");
const apiRouter = require("./routes/index");
const path = require('path');
const exphbs = require("express-handlebars");

var bodyParser = require('body-parser');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session')


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser('UhTryaBasQt8PLH46R4u'));
app.use(  session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});



app.use(apiRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));


app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, "views"));



app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), "layouts"),
  //partialsDir: path.join(app.get('views'), "partials"),
  extname: '.hbs'
}))
app.set('view engine', '.hbs');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log("Server running on " + config.PORT);
});