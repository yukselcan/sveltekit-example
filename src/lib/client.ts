
import { GraphQLClient, type RequestDocument } from 'graphql-request';


const graphClient = new GraphQLClient('http://localhost:8080/v1/graphql', {
    headers: {
        'x-hasura-admin-secret': 'niximeraadminscretkey',
        'x-hasura-access-key': 'niximeraadminscretkey'
    },
});
const client = (ql: RequestDocument, data: any = undefined) => {
    if (data)
        return graphClient.request(ql, data);
    else
        return graphClient.request(ql);
}

export default client;