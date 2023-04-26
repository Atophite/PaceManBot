
import * as tmi from "tmi.js"
import { EmbedBuilder, WebhookClient } from 'discord.js';


const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1100451423478628442/yqIzp1ov9D-zAMlRSa3MP2t4RIeq3NTgrRXaQS3ouBZk8epvHXsMiy68lW-Z5z2P8Pt2' });
const FREE_CHATS = 3
let currentFreeChats = 0

const tmiClient = new tmi.Client({
	channels: [ 'xqc' ]
});

let paceManCounter = 0

function sendNotification() {
    webhookClient.send({
      content: `A godseed has been detected by chat!`
    });
    console.log("discord notification sent")
}

tmiClient.connect();
tmiClient.on("connecting", () => {
    console.log("connecting with chat...")
}) 
tmiClient.on("connected", () => {
    console.log("connection with chat has been made!")
})

tmiClient.on('message', (channel, tags, message, self) => {

    if(message.includes("PaceMan")) {
        console.log(`${tags['display-name']}: ${message}`);
        paceManCounter++
    }
    else if (paceManCounter > 0) {
        currentFreeChats++

        if(currentFreeChats >= FREE_CHATS) {
            paceManCounter = 0
            console.log("counter has been broken!")
        }
    }


    if(paceManCounter == 3) {
        sendNotification()
        console.log("God seed?")
    }
    
});
	