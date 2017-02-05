# Enable HTTP/2.0 in nginx

To run HTTP/2 you just need to upgrade to Nginx 1.9.5 or later

Assuming your nginx is already configured with ssl

Change 

`listen 443 ssl;`

to

`listen 443 ssl http2;`

and reload your config:

`$ service nginx reload`



Ref:
------
https://www.bjornjohansen.no/enable-http2-on-nginx
