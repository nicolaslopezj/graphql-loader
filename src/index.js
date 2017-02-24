import resolveTypeDefs from './resolveTypeDefs'
import resolveResolvers from './resolveResolvers'
import {allTypeDefs, allResolvers} from './store'

export const loadSchema = function ({typeDefs, resolvers}) {
  allTypeDefs.push(typeDefs)
  allResolvers.push(resolvers)
}

export const getSchema = function () {
  return {
    typeDefs: resolveTypeDefs(),
    resolvers: resolveResolvers()
  }
}
