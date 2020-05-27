const mongo = require('mongodb');
//creating a database "people"
const mongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/people";
mongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    console.log("db created");
    var dbo = db.db("people");
    dbo.createCollection("customers",function(err,res){
        if(err){
            throw err;
        };
        console.log("customers collection added");
        const arr = [{ "name" : "rajKoothrapalli", "order" : "books", "number" : "20" },
        {"name" : "rhea", "order" : "hair-drier", "number" : "3" },
        {"name" : "ruchi", "order" : "magicbook" ,"number": "4"},{ "name" : "suresh", "order" : "cricketbat", "number" : "20" },
        {"name" : "preetham", "order" : "bike", "number" : "3" },
        {"name" : "shewtha", "order" : "barbiedoll","number":"3" }];
        dbo.collection("customers").insertMany(arr,function(err,res){
            if(err){
                throw error;
            }
            console.log("arr added");
        });            
    })
    var query = {name: "ruchi"};
    var newvalues = {$set:{name : "ruchitha", order : "magicbook",number:"4"}};
   var upd = dbo.collection("customers").updateOne(query, newvalues);
   if(upd){
       console.log("done");
   };
   var findme = {"name":"sherlock"};
  var find =  dbo.collection("customers").findOne(findme);
   if(find){
       console.log("found");
   }
   var deleteMe = {"name": "preetham"};

    var del = dbo.collection("customers").deleteOne(deleteMe);
   if(del){
       console.log("shewtha cancelled order");
   }
   var addme = {"name":"ravi","order": "choclates","number":"2"};
   var upset = {upset:true};
 dbo.collection("customers").insertOne(addme,upset,function(err,res){
     if(err){
         throw err;
     }
     console.log("ravi ordered");
 });
     
  });


       
    




