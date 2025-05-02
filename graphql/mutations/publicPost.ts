import { gql } from '@apollo/client';

export const CREATE_PUBLIC_POST = gql`
  mutation CreatePublicPost($title: String!, $description: String, $image: String) {
    createPublicPost(title: $title, description: $description, image: $image) {
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
