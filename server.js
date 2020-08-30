const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

const uri = "mongodb+srv://tylernguyen:tTt03181995@cluster0.gud8x.mongodb.net/guidebook?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());

//Fix depcrecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully!!!");
})


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

//Routing logic
const guidebookRoutes = express.Router();
app.use('/guidebook', guidebookRoutes);

guidebookRoutes.route('/').get(function (req, res) {
    guidebook.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});