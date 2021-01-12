# mongodb cheatsheet

## create db
- `use "databasename"`

## show collections in the database
- `"show collections()"`

## show data in a particular collection
- let the name of database be db and collection be x then
- `db.x.find()`
- `db.x.find({"database":"mongod"})`

## insert data in a database
- `db.x.insert({"database":"mongod"})`

## update data
- `db.x.update({"database":"mongod"})`

## delete data in a database
- `db.x.remove({"dtabase":"mongod"})`
