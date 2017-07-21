# Mongo Replica sets
I'll keep it short



- Start mongo in replication mode in config and also set a name for your `replicaSet`
- Start other servers as well with same mode
- initilize replica set by runnning `rs.initilize()`
- Use `rs.status()` for status
- Choose a master and run `rs.add("address and port to other server")`
- repeat last step for multiple replica slaves
- Done.



Thats all I have learnt till now.

REF: https://blog.ajduke.in/2013/05/31/setup-mongodb-replica-set-in-4-steps/
