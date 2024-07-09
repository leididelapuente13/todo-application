import cors from 'cors'

const ALLOWED_PORTS = [
    'http://localhost:5173',
    'http://localhost:7070'
]

export const corsMiddleware = ({acceptedOrigins = ALLOWED_PORTS})=>{
    cors({
        origin: (origin, result)=>{
            if(acceptedOrigins.includes(origin)){
                return result(null, {origin: true})
            } else if(!origin){
                return result(null, {origin: true})
            }else{
            return result(new Error('Not allowed by cors'), {origin: false});

            }
        }
    })
}