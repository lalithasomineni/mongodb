
# mongodb
mongoDB crud operations
### intialzing mongo shell
 `mongo`
### creating my db
`mydatabase`
### inserting data to my database (create)
`db.collections.insert({
                 "firstname": "lalitha",
                 "lastname":"somineni",
                 "age":"20",
                 "Studies":"b.tech",
                 "friends":["venky","sushma"],
                 "livesat":"hyderabad"
                 });`
   ### creating another collection
   `> db.createCollection('customers');
{ "ok" : 1 }
> db.customers.insert({"name":"raj","order":"book"},{"name":"rhea","order":"hair-drier"},{"name":"sherlock","order":"magnifiedglasses"});
WriteResult({ "nInserted" : 1 })`

### reading data (find operation)
` db.customers.find()
{ "_id" : ObjectId("5ece4c19be8da3eecbe2c30f"), "name" : "raj", "order" : "book" }
{ "_id" : ObjectId("5ece4cc3be8da3eecbe2c310"), "name" : "raj", "order" : "book" }
{ "_id" : ObjectId("5ece4cc3be8da3eecbe2c311"), "name" : "rhea", "order" : "hair-drier" }
{ "_id" : ObjectId("5ece4cc3be8da3eecbe2c312"), "name" : "sherlock", "order" : "magnifiedglasses" }`
#### another way to make it lok good
`db.customers.find().pretty()
{
	"_id" : ObjectId("5ece4c19be8da3eecbe2c30f"),
	"name" : "raj",
	"order" : "book"
}
{
	"_id" : ObjectId("5ece4cc3be8da3eecbe2c310"),
	"name" : "raj",
	"order" : "book"
}
{
	"_id" : ObjectId("5ece4cc3be8da3eecbe2c311"),
	"name" : "rhea",
	"order" : "hair-drier"
}
{
	"_id" : ObjectId("5ece4cc3be8da3eecbe2c312"),
	"name" : "sherlock",
	"order" : "magnifiedglasses"
}`
###### the above are reading all.
### finding individually
`db.customers.find({"order":"hair-drier"});
{ "_id" : ObjectId("5ece4cc3be8da3eecbe2c311"), "name" : "rhea", "order" : "hair-drier" }`
### updating data
`> db.customers.update({name:"rhea"},{name:"rhea",order:"hair-drier",number:"2"});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.customers.update({name:"raj"},{name:"raj",order:"book",number:"20"})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> `
### updating 
`> db.customers.update({order:"book"},{$set:{order:"books"}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>db.customers.update({order:"hair-drier"},{$set:{number:"3"}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.customers.update({order:"book"},{$set:{name:"rajKoothrapalli"}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })`


### remove
`> db.customers.remove({name:"raj"});
WriteResult({ "nRemoved" : 1 })
> db.customers.find();
{ "_id" : ObjectId("5ece4c19be8da3eecbe2c30f"), "name" : "rajKoothrapalli", "order" : "books", "number" : "20" }
{ "_id" : ObjectId("5ece4cc3be8da3eecbe2c311"), "name" : "rhea", "order" : "hair-drier", "number" : "3" }
{ "_id" : ObjectId("5ece4cc3be8da3eecbe2c312"), "name" : "sherlock", "order" : "magnifiedglasses" }
> `
