const app = require('./app')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const keys = require('./config/keys')

async function start(){
  try {
    mongoose.connect(keys.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
      .then(() => console.log('MongoDB connected.'))
      .catch(e => console.log('Error connected to MongoDB', e))

    app.listen(port, () => {
      console.log(`Server has been started on ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()