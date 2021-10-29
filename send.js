const accountSid = "ACff7a18d7bfc2825d8ad0de5719362d1c";
const authToken = "30512f06e8d062fc934cc9fe3e84497d";
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: "L'information que vous avez envoyée est fausse.",
        from: '+12058465912',
        to: '+243814063056'
    })
    .then(message => console.log(message.sid));