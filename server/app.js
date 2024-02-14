require("dotenv").config();

const { ApolloServer, gql, PubSub } = require('apollo-server');
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/type-defs");
// const cors = require('cors')


const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

// server.use(cors())
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {

});
