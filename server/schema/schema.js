const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType,GraphQLString,GraphQLSchema} = graphql;

const books = [
    {name:"ShoeDog",id:"1",genre:"autobio"},
    {name:"The Alchemist",id:"2",genre:"fantasy"},
    {name:"Ikigai",id:"3",genre:"life"}
]

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return _.find(books,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})