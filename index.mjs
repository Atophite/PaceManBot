
import * as tmi from "tmi.js"
import { EmbedBuilder, WebhookClient } from 'discord.js';

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1100451423478628442/yqIzp1ov9D-zAMlRSa3MP2t4RIeq3NTgrRXaQS3ouBZk8epvHXsMiy68lW-Z5z2P8Pt2' });

const client = new tmi.Client({
	channels: [ 'xqc' ]
});

let paceManCounter = 0

function sendNotification() {
    webhookClient.send({
      content: `A goodseed has been detected by chat!`
    });
    console.log("discord notification sent")
}

client.connect();

client.on('message', (channel, tags, message, self) => {

    if(message.includes("PaceMan")) {
        console.log(`${tags['display-name']}: ${message}`);
        paceManCounter++
    }
    else if (paceManCounter > 0) {
        paceManCounter = 0
        console.log("counter has been broken!")
    }

    if(paceManCounter == 3) {
        sendNotification()
        console.log("God seed?")
    }
});
	