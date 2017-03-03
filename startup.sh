#!/bin/sh
cd /app
mkdir ./log
/usr/bin/mongod --fork --logpath ./log/mongod.log
echo "mongo started"
sleep 5
/usr/local/bundle/bin/nutella start
echo "nutella started"

# keep the container running
tail -f ./log/mongod.log