


import { app } from "../configurations/express_config.js"
import { authControler } from "../controler/authControler.js"
const route = app.router;
route.post("/register", authControler.register);

export default route;