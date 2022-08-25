type DataType = {
  日付: Date
  小計: number
}

export type GraphDataType = {
  label: string
  transition: number
  cumulative: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (
  data: DataType[],
  startDate: Date,
  endDate: Date = new Date()
) => {
  const graphData: GraphDataType[] = []

  let checkIndex

  if (!startDate) {
    checkIndex = 0
    startDate = new Date(data[0]['日付'])
  } else {
    let leftEdgeIndex = 0
    let rightEdgeIndex = data.length - 1
    checkIndex = Math.floor(rightEdgeIndex / 2)
    let beforeCheckIndex = -1
    let checkDate = new Date(data[checkIndex]['日付'])

    while (beforeCheckIndex !== checkIndex) {
      beforeCheckIndex = checkIndex
      if (startDate === checkDate) {
        break
      } else if (startDate < checkDate) {
        rightEdgeIndex = checkIndex - 1
        checkIndex =
          Math.floor((rightEdgeIndex - leftEdgeIndex) / 2) + leftEdgeIndex
      } else {
        leftEdgeIndex = checkIndex + 1
        checkIndex =
          Math.floor((rightEdgeIndex - leftEdgeIndex) / 2) + leftEdgeIndex
      }
      checkDate = new Date(data[checkIndex]['日付'])
    }

    if (startDate < checkDate) {
      checkIndex--
      checkDate = new Date(data[checkIndex]['日付'])
    } else if (startDate === checkDate) {
      while (startDate === checkDate) {
        checkIndex--
        checkDate = new Date(data[checkIndex]['日付'])
      }
      checkIndex++
      checkDate = new Date(data[checkIndex]['日付'])
    }
  }

  let patSum = 0
  for (
    let i = checkIndex;
    data[i] !== undefined && new Date(data[i]['日付']) <= endDate;
    i++
  ) {
    const pushData = data[i]
    const date = new Date(pushData['日付'])
    const subTotal = pushData['小計']
    if (!isNaN(subTotal)) {
      patSum += subTotal
      graphData.push({
        label: `${date.getMonth() + 1}/${date.getDate()}`,
        transition: subTotal,
        cumulative: patSum
      })
    }
  }
  /*
  let patSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      const subTotal = d['小計']
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          cumulative: patSum
        })
      }
    }) */
  return graphData
}
