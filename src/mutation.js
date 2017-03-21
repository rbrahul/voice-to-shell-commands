import {
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLList
} from 'graphql';

import User from './models/userModel';
import UserType from './types/userType';


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                user_name: { type: new GraphQLNonNull(GraphQLString) },
                display_name: { type: GraphQLString },
                email: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: GraphQLString },
                phone: { type: GraphQLString },
                password: { type: GraphQLString },
                confirm_password: { type: GraphQLString },
            },
            resolve: (user, args) => {
                const newUser = new User({
                    user_name: args.user_name,
                    display_name: args.display_name,
                    email: args.email,
                    address: args.address,
                    phone: args.phone,
                    password: args.password,
                    confirm_password: args.confirm_password
                });
                return newUser.save()
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

export default Mutation
