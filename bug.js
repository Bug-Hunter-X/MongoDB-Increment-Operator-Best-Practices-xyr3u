```javascript
//Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{count:1}});
//Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{count:"incorrect"}});
```