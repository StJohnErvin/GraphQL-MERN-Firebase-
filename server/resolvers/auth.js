const {gql} = require("apollo-server-express");


const me =  () => "John";


module.exports = {
    Query: {
      me
    }
  };

