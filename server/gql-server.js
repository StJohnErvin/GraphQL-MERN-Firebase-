const { ApolloServer } = require("apollo-server");
require("dotenv").config();

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
// port
apolloServer.listen(process.env.PORT, function() {
    console.log(`graphql server is ready at http://localhost:${process.env.PORT}`);
});
