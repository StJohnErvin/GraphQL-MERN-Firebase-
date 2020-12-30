const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
require('dotenv').config();

// express
const app = express();

//querry/mutation/subs

const typeDefs = `

type Query{

totalPosts: Int!

}

`;

//resolver

const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

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
