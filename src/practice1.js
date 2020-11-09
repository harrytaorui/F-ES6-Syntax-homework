const parseData = (obj) => {
  return obj.data.reduce((acc, next) =>
    (acc.push(next.reduce((pre, cur, index) =>
      (pre[obj.column[index].name] = cur, pre), {})), acc), [])
}
export {parseData};
