import { gql } from 'graphql-request';

export const queries = {
    selectMails: gql`
    query GetMails {
        mails {
            email
        }
      }`,

    insertMails: gql`
        mutation AddMails($mails: [mails_insert_input!]!) {
          insert_mails(objects: $mails) {
            returning {
              email
            }
        }
        }
      `,

    insertMail: gql`
          mutation AddMail($email: String!) {
            insert_mails_one(object: {email: $email}) {
              email
            }
          }
        `

}