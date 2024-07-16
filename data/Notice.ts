import { graphql } from 'react-relay';

const NoticeQuery = graphql`
  query NoticeFirstQuery {
    noticeCollection(first: 1) {
      edges {
        node {
          nodeId
          id
          created_at
          title
          description
          fixed
        }
      }
    }
  }
`;
