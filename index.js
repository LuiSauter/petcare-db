/**
 * Rest API with Node.js, Express and MongoDB
 * to PetCare App
 */
import app from './src/app.js'
import dotenv from 'dotenv'
import './src/database.js'
dotenv.config() // load enviroment variables from .env file

const PORT = process.env.NODE_ENV === 'development' ? 3000 : process.env.PORT
// server running
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
