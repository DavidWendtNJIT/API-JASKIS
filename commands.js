// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis

use jaskis

// 2. Create a collection called bounties

db.createCollection('bounties')
{ ok: 1 }


// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object

db.bounties.insertOne(
  {
  name: "Thanoceros",
  species: "Rhinoceros",
  location: "Grasslands",
  wantedFor: "Eating too much grass",
  client: "Songbird",
  reward: 10000,
  captured: false
}
  )
{ acknowledged: true,
  insertedId: ObjectId("6276b9937ee8143fe0037cdf") }


// 2. Query for all bounties in the bounties collection

db.bounties.find()
{ _id: ObjectId("6276b9937ee8143fe0037cdf"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }


// 3. Insert many bounties at once using the given objects

db.bounties.insertMany( [ {
    "name": "Lokinkajou",
    "species": "Kinkajou",
    "location": "Tropical rainforest",
    "wantedFor": "Partying too late at night",
    "client": "White tiger",
    "reward": 1000,
    "captured": false
  },
  {
    "name": "Nebullama",
    "species": "Llama",
    "location": "Grasslands",
    "wantedFor": "Drinking all the water from the ocean",
    "client": "Songbird",
    "reward": 2500,
    "captured": false
  },
  {
    "name": "Polarwind",
    "species": "Polar Bear",
    "location": "Arctic",
    "wantedFor": "Not hibernating",
    "client": "Sabertooth",
    "reward": 4000,
    "captured": false
  },
  {
    "name": "Wrecking Crows",
    "species": "Crow",
    "location": "Grasslands",
    "wantedFor": "Cawing too loudly",
    "client": "Red wolf",
    "reward": 40000,
    "captured": false
  },
  {
    "name": "Grandhog",
    "species": "Groundhog",
    "location": "Woodlands",
    "wantedFor": "Not coming out of the hole on time and prolonging winter",
    "client": "Songbird",
    "reward": 50000,
    "captured": false
  },
  {
    "name": "Grim Panda",
    "species": "Giant Panda",
    "location": "Temperate forest",
    "wantedFor": "Eating all the bamboo",
    "client": "Red wolf",
    "reward": 5000,
    "captured": false
  }
])
{ acknowledged: true,
  insertedIds: 
   { '0': ObjectId("6276ba1b7ee8143fe0037ce0"),
     '1': ObjectId("6276ba1b7ee8143fe0037ce1"),
     '2': ObjectId("6276ba1b7ee8143fe0037ce2"),
     '3': ObjectId("6276ba1b7ee8143fe0037ce3"),
     '4': ObjectId("6276ba1b7ee8143fe0037ce4"),
     '5': ObjectId("6276ba1b7ee8143fe0037ce5") } }


// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands

db.bounties.find({location:'Grasslands'})
{ _id: ObjectId("6276b9937ee8143fe0037cdf"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce1"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce3"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }


// 2. Query for all bounties with a reward worth 10000 or more

db.bounties.find({reward: {$gte: 10000}})
{ _id: ObjectId("6276b9937ee8143fe0037cdf"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce3"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce4"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }

// 3. Query for all bounties, but exclude the client attribute from being shown

db.bounties.find({client:{$ne: 'Red wolf'}})
{ _id: ObjectId("6276b9937ee8143fe0037cdf"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce0"),
  name: 'Lokinkajou',
  species: 'Kinkajou',
  location: 'Tropical rainforest',
  wantedFor: 'Partying too late at night',
  client: 'White tiger',
  reward: 1000,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce1"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce2"),
  name: 'Polarwind',
  species: 'Polar Bear',
  location: 'Arctic',
  wantedFor: 'Not hibernating',
  client: 'Sabertooth',
  reward: 4000,
  captured: false }
{ _id: ObjectId("6276ba1b7ee8143fe0037ce4"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }


// 4. Query for a Groundhog in the Woodlands

db.bounties.find({$and: [{species:'Groundhog'}, {location:'Woodlands'}]})
{ _id: ObjectId("6276ba1b7ee8143fe0037ce4"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }


// Update and Delete
// 1. Update the reward for Polarwind to 10000

db.bounties.updateOne(
  {name:'Polarwind'},
  {$set: {reward:'10000'}}
  )
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }


// 2. Remove Lokinkajou

db.bounties.deleteOne({name:'Lokinkajou'})
{ acknowledged: true, deletedCount: 1 }


// 3. Delete all bounties sent by Songbird

db.bounties.deleteMany({client:'Songbird'})
{ acknowledged: true, deletedCount: 3 }


// 4. Update all captured statuses to true

db.bounties.updateMany({captured: false}, {$set: {captured: true}})
{ acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0 }