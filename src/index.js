global.allTypeDefs = []
global.allResolvers = []

export const loadSchema = function ({typeDefs, resolvers}) {
  global.allTypeDefs.push(typeDefs)
  global.allResolvers.push(resolvers)
}

export const getSchema = function () {
  return {
    typeDefs: [],
    resolvers: {}
  }
}
