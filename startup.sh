#!/bin/sh
cd /app
/usr/bin/mongod --fork --logpath ./log/mongod.log
/usr/local/bundle/bin/nutella start
# keep the container running
tail -f ./log/mongod.log