import mongoose from "mongoose";

//mongose config
  mongoose.Promise = global.Promise

  await mongoose.connect('mongodb://127.0.0.1:27017/primeiro',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Success!!')
  }).catch((err) => {
    console.log('Failed due to: ' + err)
  })

//model definition
  const UserSchema = mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    sobrenome: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    idade: {
      type: Number,
      require: true
    },
    pais: {
      type: String,
      default: 'none'
    }
  })

//collection
  mongoose.model('user', UserSchema)

//inserting data into 'user'

  const usuario = mongoose.model('user')

  new usuario({
    nome: 'vini',
    sobrenome: 'nativo',
    email: 'nativo@gmail.com',
    idade: 29,
    pais: ''
    }).save()
    .then(() => {
      console.log('User saved!!')})
    .catch((err) => {
      console.log("User couldn't be saved to: " + err)})

  new usuario({
    nome: 'john',
    sobrenome: 'green',
    email: 'gjg@gmail.com',
    idade: 25,
    pais: 'netherland'
    }).save()
    .then(() => {
      console.log('User saved!!')})
    .catch((err) => {
      console.log("User couldn't be saved due to: " + err)})

