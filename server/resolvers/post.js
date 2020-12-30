const {gql} = require("apollo-server-express");

const totalPosts =  () => 29;


module.exports  = {
    Query: {
      totalPosts
    }
  };