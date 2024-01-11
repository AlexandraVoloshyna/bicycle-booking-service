import  express  from 'express';
import { connectDB } from './config/connectDb.js';
import { errorHandler} from './middleware/errorMiddleware.js';
import route from './router/router.js'
import cors from 'cors'

const app = express()

connectDB()
const client = process.env.CLIENT
const Port = process.env.PORT || 5001
app.use(express.json())
app.use(cors({
  origin:[`${client}`],
  methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
}))
app.use('/api', route )

app.use(errorHandler)

app.listen( Port, ()=>{
  console.log(`server runs on port:${Port}`)
}
)