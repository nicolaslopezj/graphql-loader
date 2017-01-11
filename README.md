# GraphQL Loader

Creates a ecosystem for package authors to inject schemas to your app.

### Usage

```js
import {makeExecutableSchema} from 'graphql-tools'
import {loadSchema, getSchema} from 'graphql-loader'

import typeDefs from './schema'
import resolvers from './resolvers'

loadSchema({typeDefs, resolvers})

const schema = makeExecutableSchema(getSchema())
```
