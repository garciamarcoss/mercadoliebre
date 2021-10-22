const express = require('express');
const path = require('path');

const app = express();
const pathPublic = path.resolve(__dirname, './public');
const port = process.env.PORT || 3000;

app.use(express.static(pathPublic));
app.listen(3300, () => console.log('Servidor funciona'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

app.listen (port, ()=>{
    console.log('Servidor funcionando');
});
