const nodemailer = require('nodemailer')
async function main(){
    let transporter = nodemailer.createTransport({
        host:'denjoyd.com',
        port: 465,
        secure:true,
        auth:{ 
            user: 'drinkenjoydonate@denjoyd.com',
            pass:'!@12Solomon',
        },
    });

    let info = await transporter.sendMail({
        from:'drinkenjoydonate@denjoyd.com',
        to:['habtu80@gmail.com'],
        subject:'Drink Enjoy and Donate',
        text:'a company you will like forever?',
        html:'<h1> Registration confirmation code / Link </h1>',
    });

    console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);