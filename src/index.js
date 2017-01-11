import resolveTypeDefs from './resolveTypeDefs'
import resolveResolvers from './resolveResolvers'

global.allTypeDefs = []
global.allResolvers = []

export const loadSchema = function ({typeDefs, resolvers}) {
  global.allTypeDefs.push(typeDefs)
  global.allResolvers.push(resolvers)
}

export const getSchema = function () {
  return {
    typeDefs: resolveTypeDefs(),
    resolvers: resolveResolvers()
  }
}
