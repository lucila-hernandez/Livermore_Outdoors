import data from './livermore-data.json'

data.forEach((obj, i) => {
  obj.id = i
})

export default data