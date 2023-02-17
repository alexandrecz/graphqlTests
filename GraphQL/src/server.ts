import "reflect-metadata";
import path from 'node:path';
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentResolver } from "./resolvers/appointment-resolver";

/**
 *
 * Code First approach
 */
async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'), //this option generate schema file,
    validate: false,
  });


  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();
  console.log(`HTTP server running on ${url}`);
}

bootstrap();
