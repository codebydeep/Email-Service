// Email-Service Class
class EmailService{
    send = async (email) => {
        const {to, subject, body} = email

        if(!to || !subject || !body){
            return {
                status: false,
                message: "Fill all the details"
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Email sent to: ${to}`);
                console.log(`Subject: ${subject}`);
                console.log(`Body: ${body}`);
                
                resolve({
                    status: true,
                    message: "Email sent Successfully!"
                })
            }, 1000)
        })
    }
}

export default EmailService