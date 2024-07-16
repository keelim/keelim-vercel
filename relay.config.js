module.exports = {
  src: './',
  artifactDirectory: '__generated__',
  schema: './data/schema.graphql',
  exclude: [
    '**/node_modules/**',
    '**/.next/**',
    '**/__mocks__/**',
    '**/__generated__/**'
  ],
  language: 'typescript',
  schemaConfig: {
    nodeInterfaceIdField: 'nodeId',
    nodeInterfaceIdVariableName: 'nodeId'
  },
  customScalars: {
    UUID: 'string',
    Datetime: 'string',
    JSON: 'string',
    BigInt: 'string',
    BigFloat: 'string',
    Opaque: 'any'
  }
};
