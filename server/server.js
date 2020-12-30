const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const path = require("path");

const{fileLoader, mergeTypes, mergeResolvers} = require("merge-graphql-schemas");
require('dotenv').config();

// express
const app = express();

//typedefs

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./typeDefs")));


//resolver
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, "./resolvers")));








//graphql

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

//apply middle ware method  connection specifit http 



apolloServer.applyMiddleware({app});

//server

const httpserver = http.createServer(app)


// rest 
app.get('/rest', function(req, res) {
    res.json({
        data: 'you hit rest endpoint great!'
    });
});

// port
app.listen(process.env.PORT, function() {
    console.log(`server is ready at http://localhost:${process.env.PORT}`);

    console.log(`graphql is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);



});
