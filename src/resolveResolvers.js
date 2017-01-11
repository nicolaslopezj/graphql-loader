import keys from 'lodash/keys'

export default function () {
  const resolvers = {}

  global.allResolvers.forEach(resolversGroup => {
    keys(resolversGroup).forEach(type => {
      resolvers[type] = {...resolvers[type], ...resolversGroup[type]}
    })
  })

  return resolvers
}
