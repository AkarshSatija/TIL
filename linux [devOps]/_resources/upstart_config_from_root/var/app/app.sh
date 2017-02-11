#!/bin/bash
echo "Starting the server"

/usr/local/bin/pm2 start /usr/local/bin/http-server -- /media -p 3000
