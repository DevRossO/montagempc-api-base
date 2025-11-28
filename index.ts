import express from "express"
import usuariosRouter from "./src/routes/usuarios"
import lojasRouter from "./src/routes/lojas";
import pecasRouter from "./src/routes/pecas";
import itensPedidoRouter from "./src/routes/itensPedido";
import pedidosRouter from "./src/routes/pedidos";
import 'dotenv/config'


const app = express()
app.use(express.json())

app.use("/pecas", pecasRouter)
app.use("/lojas", lojasRouter)
app.use("/usuarios", usuariosRouter)
app.use("/itens-pedido", itensPedidoRouter);
app.use("/pedidos", pedidosRouter);

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000")
})
