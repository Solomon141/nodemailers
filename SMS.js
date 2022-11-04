

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "32add17f",
  apiSecret: "4d2fFg8N2rAj16Q5"
})

const from = "Vonage APIs"
const to = "251935811576"
const text = 'A text message sent using the Vonage SMS API'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})