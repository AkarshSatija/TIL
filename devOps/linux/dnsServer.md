# What I did was I created a DNS server + DNS Cache within a raspberry PI

Inspiration:
--------
I have a data server running over HTTP on raspberry PI just to access some data over WAN. 
Problem was I wanted to access that server locally over my domain. 
i.e. If I ping my domain, say `mydomain.example.com` from my Home, I wanted the network to be via WLAN instead of WAN,
for all kind of connections 
I wanted my connection to be local and latency free, Since server is just next to me.


So I created a DNS Cache server using `dnsmasq` and added my domain's local IP in an 


In `/etc/dnsmasq.conf` I added

    addn-hosts=/etc/dnsmasq_static_hosts.conf

Then in `/etc/dnsmasq_static_hosts.conf` I added 

    192.168.1.2 mydomain.example.com

Then I added 192.168.1.2 in DNS in my laptop


Extra perks:
This DNS cache will also cache IPs to various domains for me and will reduce resolving time for all the websites

Done



Ref:
-------
https://www.raspberrypi.org/forums/viewtopic.php?t=46154

https://blogging.dragon.org.uk/howto-setup-dnsmasq-as-dns-dhcp/
