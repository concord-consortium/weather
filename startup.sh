#!/bin/sh
cd /app
/usr/local/bundle/bin/nutella start
# keep the container running
tail -f /dev/null