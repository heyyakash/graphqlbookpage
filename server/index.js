const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const port = 5500

const app = express()

app.use('/gql',graphqlHTTP(
    {
        schema,
        graphiql:true
    }
    ))
app.listen(port,()=>console.log(`App is listening at ${port}`))
