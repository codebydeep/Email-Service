import EmailService from "../email-service.js";

// Provider A
const ProviderA = async(email) => {
    try {
        const newEmail = new EmailService()
        const result = await newEmail.send(email)
        console.log(result, `Send using ProviderA`);
        return result
    } catch (error) {
        console.log(`Error sending Mail with A`);
        return {
            status: false,
            message: "Message Sending fail with A"
        }
    }
}

// Provider B
const ProviderB = async(email) => {
    try {
        const newEmail = new EmailService()
        const result = await newEmail.send(email)
        console.log(result, `Send using ProviderB`);
        return result
    } catch (error) {
        console.log(`Error sending Mail with B`);
        return {
            status: false,
            message: "Message Sending fail with B"
        }
    }
}


// Fallback Controller - 
export const sendEmailFallback = async(req, res) => {
    const { to, subject, body } = req.body;

    if (!to || !subject || !body) {
        return res.status(400).json({
            status: false,
            message: "Fill all the details",
        });
    }

    const resultA = await ProviderA({to, subject, body });

    if (resultA.status === true) {
        return res.status(200).json(resultA);
    }
    
    console.log("⚠️ Fallback to ProviderB...");
    
    const resultB = await ProviderB({ to, subject, body });
    
    if (resultB.status === true) {
        return res.status(200).json(resultB);
    }

    return res.status(500).json({
        status: false,
        message: "Both providers failed",
    });
}