// graphql/queries/publicPost.ts
import { gql } from "@apollo/client";

export const GET_PUBLIC_POSTS = gql`
  query GetPublicPosts {
    publicPosts {
      id
      title
      description
      image
      likes
      created_at
      user {
        id
        name
      }
    }
  }
`;
