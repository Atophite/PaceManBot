const tmi = require('tmi.js');

const client = new tmi.Client({
	channels: [ 'xqc' ]
});

let paceManCounter = 0

client.connect();

client.on('message', (channel, tags, message, self) => {

    console.log(`${tags['display-name']}: ${message}`);
    if(message.includes("PaceMan")) {
        console.log(`${tags['display-name']}: ${message}`);
        paceManCounter++
    }
    else if (paceManCounter > 0) {
        paceManCounter = 0
    }

    if(paceManCounter == 3) {
        console.log("God seed?")
    }
});
	