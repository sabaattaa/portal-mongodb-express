
import { authServices } from "../services/authServices.js"
export const authControler = {
    register: async (req, res) => {
        console.log(req.body, "kkkkkkkkkkkkkkkk");
        authServices.addUser(req, res)
       
    }
};
