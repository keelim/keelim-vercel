import { graphql } from 'react-relay';

const NoticeQuery = graphql`
query NoticeCollection {
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
;`;
