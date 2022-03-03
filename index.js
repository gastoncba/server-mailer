const express = require('express')
const cors = require('cors')
const routerApi = require('./router')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: "*",
    exposedHeaders: "*",
    credentials: true
}));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//routers
router.get('/', (req, res) => {res.send('Test Nodemailer')})
routerApi(app)