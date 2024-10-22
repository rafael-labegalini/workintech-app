#!/bin/sh

dnf update -y
dnf install -y git nodejs

# Preparing and cloning application
cd /home/ec2-user
git clone https://github.com/rafael-labegalini/workintech-app.git

cd workintech-app
npm install

# Configuring Systemd service
cp others/files/workintech-app.service /etc/systemd/system/workintech-app.service
systemctl enable workintech-app.service
systemctl start workintech-app.service