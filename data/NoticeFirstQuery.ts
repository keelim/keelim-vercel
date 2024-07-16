import { graphql } from 'react-relay';

const NoticeQuery = graphql`
  query NoticeFirstQuery {
    noticeCollection(first: 1) {
      edges {
        node {
          noticeId
          created_at
          title
          description
          fixed
        }
      }
    }
  }
`;
