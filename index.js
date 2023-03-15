const app =  require('./app')
require('dotenv').config()
const port = process.env.PORT;


app.listen(port, (res) => {

    console.log(`"Listening on port ${port}`)
})