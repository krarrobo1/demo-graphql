import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

import { connect } from './db'



let port = 3000;
const app = express();


app.get('/', (req, res) => {
    res.json({ ok: true });
});


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: { // El context sirve para pasar datos entre los resolvers ejm: auths
        ok: undefined
    }
}));


app.listen(port, () => {
    console.log(`Listening on ${port}`);
    connect();
});