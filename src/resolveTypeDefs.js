import union from 'lodash/union'
import keys from 'lodash/keys'

export default function () {
  const allTypesDefs = union(...global.allTypeDefs)
  const typeDefs = {}
  const scalars = []
  const unions = []


  /* Search for all types */
  allTypesDefs.forEach(def => {
    const regex = /([A-z ]+){\n?(([^{}])+)}/g
    let m

    while ((m = regex.exec(def)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      let type
      m.forEach((match, groupIndex) => {
        if (groupIndex === 1) {
          type = match.trim()
          typeDefs[type] = typeDefs[type] || []
        } else if (groupIndex === 2) {
          const fields = match
          typeDefs[type].push(fields)
        }
      })
    }
  })

  /* Search scalars */
  allTypesDefs.forEach(def => {
    const regex = /scalar [\w]+/g
    let m

    while ((m = regex.exec(def)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      m.forEach((match, groupIndex) => {
        scalars.push(match)
      })
    }
  })

  /* Search unions */
  allTypesDefs.forEach(def => {
    const regex = /union [\w ]+=[\w |]+/g
    let m

    while ((m = regex.exec(def)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      m.forEach((match, groupIndex) => {
        unions.push(match)
      })
    }
  })

  let schema = ''

  keys(typeDefs).forEach(type => {
    const fields = typeDefs[type].join('\n')
    schema += `\n${type} {\n${fields}\n}\n`
  })

  scalars.forEach(scalar => {
    schema += `\n${scalar}\n`
  })

  unions.forEach(union => {
    schema += `\n${union}\n`
  })

  return schema
}
