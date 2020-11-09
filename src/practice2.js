const inject = (items, section) => {
  let result = []
  items.map((item, index) => {
    let record = section.find(sect => sect.index === index)
    if (record) {
      result.push(record.content)
    }
    result.push(item)
  })
  return result
}
export {inject};
