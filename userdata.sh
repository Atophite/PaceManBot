#!/bin/sh
yum update -y
yum install -y git
git clone https://github.com/Atophite/PaceManBot.git /home/PaceManBot
node /home/PaceManBot/