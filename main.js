import connectDb from "./configurations/mongo_config.js";
import { app } from "./configurations/express_config.js";
import { env } from "./configurations/dotEnv.js";
import allRoutes from "./Api_Routes/allRoutes.js"

app.apps.use("/api", allRoutes)


app.apps.listen(env.port, () => {
    console.log("Port is listening:", env.port);
});
