'use strict'

function getConfigFor(simplifiedObject, configs) {
  const configIndex = configs.find(config => {
    return config.type === simplifiedObject._type
  })

  return configIndex === undefined ? undefined : configs[configIndex]
}

function stripAttributes(simplifiedObject) {
  let strippedObject = JSON.parse(JSON.stringify(simplifiedObject))

  delete strippedObject['_type']
  delete strippedObject['id']
  return strippedObject
}

const normalize = function (simplifiedObject, configs) {
  let normalizedObject = {}
  const typeConfig = getConfigFor(simplifiedObject, configs)

  typeConfig.relationships.forEach(relationship => {
    if (simplifiedObject[relationship.name] === undefined) {
      return
    }

    normalizedObject.data.relationships[relationship.name] = {
      data: {
        type: relationship.type,
        id: simplifiedObject[relationship.name]
      }
    }

    normalizedObject.attributes = stripAttributes(simplifiedObject)

    normalizedObject.included.add({
      type: relationship.type,
      id: simplifiedObject[relationship.name],
      attributes: stripAttributes(simplifiedObject)
    })
  })

  return normalizedObject
}

export default normalize
