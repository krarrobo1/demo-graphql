import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

/*-------------------------------------
 *              TYPEDEFS
 *------------------------------------ */


// Tipos de datos que se pueden consultar desde una API Graphql
var typeDefs = [`
type Query {
  hello: String
  greet(name: String!): String
  tasks: [Task],
  Users: [User]
}

type Mutation {
  myMutation(input: TaskInput): Task,
  createUser(input: UserInput): User,
  deleteUser(_id: ID): User,
  updateUser(_id: ID, input: UserInput): User
}


type Task {
  _id: ID,
  title: String!,
  description: String!,
  number: Int
}

type User {
  _id: ID,
  firstName: String!,
  lastName: String,
  age: Int
}

input UserInput{
  firstName: String!,
  lastName: String,
  age: Int
}
input TaskInput { 
  title: String!,
  description: String!,
  number: Int
}
`];
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});