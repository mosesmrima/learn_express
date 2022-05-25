#!/usr/bin/node

const express = require('express');
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/test1';
const userRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use('/api/users', userRouter);

mongoose.connect(dbUrl).catch(err => console.log(err));
const tstCon = mongoose.connection;
tstCon.once('connected', () => {
  console.log('Successfully connected to DB');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
