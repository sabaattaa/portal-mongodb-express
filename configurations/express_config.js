import express from "express";
const apps = express();
const router = express.Router()
apps.use(express.json());
export const app = {apps, router}