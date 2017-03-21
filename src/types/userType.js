import {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat
} from 'graphql';

const User = new GraphQLObjectType({
    name: 'User',
    description: 'This describes the  user information',
    fields: {
            id: {
                type:GraphQLString
            },
            user_name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            display_name: {
                type: GraphQLString
            },
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
             address: {
                type: GraphQLString
            },
             phone: {
                type: GraphQLString
            },
             avatar: {
                type: GraphQLString
            }
            
        }

});

export default User;