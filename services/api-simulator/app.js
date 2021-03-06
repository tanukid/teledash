import express from 'express'
import router from './routes'
import bodyParser from 'body-parser'
import volleyball from 'volleyball'
import chalk from 'chalk'

const app = express()

app.use(volleyball)
// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })) // for HTML form submits
app.use(bodyParser.json()) // would be for AJAX requests

// start the server
const PORT = 2001
const server = app.listen(PORT, function () {
  console.log(chalk.green('Test server is running on port ' + PORT))
})

app.use('/sim', router)
