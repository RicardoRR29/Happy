//importing express
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//initializing express
const server = express()
server
    //utilizar body
    .use(express.urlencoded({ extended: true }))
    // utilizando arquivos estáticos
    .use(express.static('public'))

    //config template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    
    //create routes(rotas)
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
    
    

// turn on the server
server.listen(5500)