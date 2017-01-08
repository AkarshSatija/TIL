- Create users:
```
db.createUser({
	user: "readUser",
	pwd: "changeMe",
	roles: [
	{ role: "readAnyDatabase", db: "admin" },
		"readWrite"
	]
}, { w: "majority", wtimeout: 5000 })


//full user
db.createUser(
  {
    user: "admin",
    pwd: "password",
    roles: [ { role: "root", db: "admin" } ]
  }
);
```


- Enable Auth in mongo config
-- For mongo 3.x, Add this to the config
```
security:
  authorization: "enabled"
```
Ref: http://serverfault.com/a/807914/196457



More: 
https://docs.mongodb.com/manual/reference/method/db.updateUser/
http://stackoverflow.com/questions/23943651/mongodb-admin-user-not-authorized
https://docs.mongodb.com/v3.2/reference/built-in-roles/
https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/
