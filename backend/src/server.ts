import app from './app'
import "dotenv/config";
import env from './util/validateEnv'
import dbConnect from './config/mongo';

const PORT = env.PORT || 3005

dbConnect()
  .then(() => {
    console.log("Mongoose Connected")
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    });  
  })
  .catch(console.error)

