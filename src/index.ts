import Koa, { Context } from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.body = "Hello World";
});

app.use(router.routes());

app.listen(process.env.PORT);

// eslint-disable-next-line
console.info(`Listening to http://localhost:${process.env.PORT} 🚀`);

export { app };
