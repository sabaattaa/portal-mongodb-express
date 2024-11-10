import { config } from "dotenv";
config();

const env_configuration = Object.freeze({
    port :process.env.PORT||6000,
});

export const env = env_configuration;