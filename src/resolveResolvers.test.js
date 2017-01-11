/* global describe */
/* global it */
/* global expect */
import resolveResolvers from './resolveResolvers'
import keys from 'lodash/keys'

describe('Resolve resolvers function', () => {
  it('should return one object with types', () => {
    global.allResolvers = [
      { Query: {hello: () => 'world'} },
      { Query: {world: () => 'hello'} },
      { Mutation: {save: () => 'ad'} },
      { Type: {field: () => 'afdfdfd'} },
      { Type: {field2: () => 'afdfdffd'} }
    ]
    const result = resolveResolvers()
    expect(keys(result)).toEqual(['Query', 'Mutation', 'Type'])
  })

  it('should join same type fields', () => {
    global.allResolvers = [
      { Query: {hello: () => 'world', hola: () => 'mundo'} },
      { Query: {world: () => 'hello'} }
    ]
    const result = resolveResolvers()
    expect(keys(result.Query)).toEqual(['hello', 'hola', 'world'])
  })
})
