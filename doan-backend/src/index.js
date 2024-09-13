const express= require("express");
const dotenv = require('dotenv')
const mongoose =require('mongoose'); 
const routes = require("./router");
const cors = require('cors'); 
const fishRoutes = require('./router/fishRoutes');
const plantRoutes = require('./router/plantRoutes');
const cartRoutes = require('./router/cartRouter');
const accRoutes = require('./router/accountRouter');
const logginRoutes = require('./router/loginRouter');

dotenv.config()


const app = express();
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
  res.send('hellooo word! everyone')
})

routes(app);

app.use(cors());
// Middleware
app.use(express.json());

// MongoDB connection

mongoose.connect('mongodb+srv://ThanhTruc:0z7nrkKTAcgyvUkM@cluster0.hsxnsi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });
  

app.use('/login', logginRoutes);
app.use('/accounts', accRoutes);
app.use('/plants', plantRoutes);
app.use('/carts', cartRoutes);
// Start the server
app.listen(port, () => {
    console.log("Server is running on ",+ port);
});