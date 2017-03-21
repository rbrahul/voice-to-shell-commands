import {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLList
} from 'graphql';

import UserType from './types/userType';
import User from './models/userModel';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return User.find({})
                    .then(result => {
                        return result;
                    })
                    .catch(err => {
                        throw err;
                    });
            }
        }
    }
});

export default Query;
