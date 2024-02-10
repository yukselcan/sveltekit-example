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
        `,

  findMail: gql`
  query FindMails($email: String!) {
    mails(where: { email:{ _eq: $email } }) {
      email
    }
  }
  `,

  findUser: gql`
  query FindUsers($email: String!, $password: String!) {
    users(where: { email:{ _eq: $email }, password:{ _eq: $password } }) {
      id
      email
    }
  }
`,

  registerUser: gql`
      mutation AddUser($email: String!, $password: String!) {
        insert_users_one(object: {email: $email, password: $password}) {
          email,
          password
        }
      }
    `,

}