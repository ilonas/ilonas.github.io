const express = require('express')
const app = express()

app.get('/provider*', (req, res) => res.sendFile(__dirname + '/provider.html'))
app.get('/fixed*', (req, res) => res.sendFile(__dirname + '/provider.html'))
app.get('/menu*', (req, res) => res.sendFile(__dirname + '/menu.html'))
app.get('/widget*', (req, res) => res.sendFile(__dirname + '/provider.html'))
app.get('/gluedWidget*', (req, res) => res.sendFile(__dirname + '/gluedWidget.html'))
app.get('/regular-widget*', (req, res) => res.sendFile(__dirname + '/regular-widget.html'))




app.get('/client*', (req, res) => res.sendFile(__dirname + '/client.html'))

app.listen(5000, () => console.log('Example app listening on port 5000!'))

