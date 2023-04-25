#!/bin/sh
yum update -y
yum install -y git
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs
node --version
git clone https://github.com/Atophite/PaceManBot.git /home/PaceManBot
npm i /home/PaceManBot
node /home/PaceManBot/index.mjs