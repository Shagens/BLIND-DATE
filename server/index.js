
const chalk = require('chalk');
const mongoose = require('mongoose');
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const config = require('./config');
const server = require('./server');

io.on('connection', socket => {
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
    })
})

http.listen(3001, function() {
    console.log('listening on port 3001')
})

mongoose.set('useCreateIndex', true);
mongoose.connect(config.DB_URI, {useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => console.log(chalk.green('Database Initialized')))
    .catch((err) => console.log(chalk.red(err)));

