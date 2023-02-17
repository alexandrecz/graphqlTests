import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";



/**
 * gql schema
 * Schema First approach 
 */
const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;


//global intefaces
interface User {
  name: string;
  id: string;
}

const users: User[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users;
      },
    },

    Mutation: {
      createUser: (parent, args, ctx) => {
        const user = {
          id: randomUUID(),
          name: args.name,
        };
        users.push(user);

        return user
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
