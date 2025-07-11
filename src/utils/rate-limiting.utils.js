import rateLimit from "express-rate-limit";

const Limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: {
        status: false,
        message: "Try after one minute",
    }
})

export default Limiter