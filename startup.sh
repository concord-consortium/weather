#!/bin/sh
cd /app
/usr/bin/mongod --fork --logpath ./monogod.log
/usr/local/bundle/bin/nutella start
# keep the container running
tail -f ./monogod.log