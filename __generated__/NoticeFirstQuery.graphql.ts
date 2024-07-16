/**
 * @generated SignedSource<<3c1e5bed687936441629a7b7ee130340>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type NoticeFirstQuery$variables = Record<PropertyKey, never>;
export type NoticeFirstQuery$data = {
  readonly noticeCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly created_at: any;
        readonly description: string;
        readonly fixed: boolean | null | undefined;
        readonly noticeId: any;
        readonly title: string;
      };
    }>;
  } | null | undefined;
};
export type NoticeFirstQuery = {
  response: NoticeFirstQuery$data;
  variables: NoticeFirstQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "noticeId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_at",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fixed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NoticeFirstQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "noticeConnection",
        "kind": "LinkedField",
        "name": "noticeCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "noticeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "notice",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "noticeCollection(first:1)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NoticeFirstQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "noticeConnection",
        "kind": "LinkedField",
        "name": "noticeCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "noticeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "notice",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "noticeCollection(first:1)"
      }
    ]
  },
  "params": {
    "cacheID": "8f5279279e4077c91228b5fb32e0920a",
    "id": null,
    "metadata": {},
    "name": "NoticeFirstQuery",
    "operationKind": "query",
    "text": "query NoticeFirstQuery {\n  noticeCollection(first: 1) {\n    edges {\n      node {\n        noticeId\n        created_at\n        title\n        description\n        fixed\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e68c47a5c45ce5a0718a5fe4a1183e74";

export default node;
