import { sendEmailFallback } from "../providers/email.providers.js";
import rateLimiter from "../utils/rate-limiting.utils.js";

import { Router } from "express";

const emailRoute = Router()

emailRoute.post("/", rateLimiter, sendEmailFallback)

export default emailRoute