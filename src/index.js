import resolveTypeDefs from './resolveTypeDefs'
import resolveResolvers from './resolveResolvers'
import {allTypeDefs, allResolvers} from './store'

if (!global.gqlLoader) {
  const loadSchema = function ({typeDefs, resolvers}, origin) {
    allTypeDefs.push(typeDefs)
    allResolvers.push(resolvers)
  }

  const getSchema = function () {
    return {
      typeDefs: resolveTypeDefs(),
      resolvers: resolveResolvers()
    }
  }
  global.gqlLoader = {loadSchema, getSchema}
}

export const loadSchema = global.gqlLoader.loadSchema
export const getSchema = global.gqlLoader.getSchema
