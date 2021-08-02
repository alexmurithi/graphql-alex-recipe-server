const {gql,ApolloServer} = require('apollo-server-express');

const express =require('express');

const typeDefs =require('./src/Schema')
const resolvers =require('./src/Resolvers')
const models =require('./models')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{models}
})

const startUp =async()=>{
    await server.start()
    const app =express();
    server.applyMiddleware({app})

    app.listen({port:4000},()=>(
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    ))
}

startUp()