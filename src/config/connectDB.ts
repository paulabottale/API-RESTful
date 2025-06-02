import { connect } from "mongoose"
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""
const connectMongodb = async () => {
    try {
        await connect(URI_DB)
        console.log("conectado a MongoDB con exito")
    } catch (error) {
        console.log("no fue posible hacer la conexion con la base de datos")
    }
}

export { connectMongodb }

