type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '感染者数'
      value: number
      children: [
        {
          attr: '入院中'
          value: number
        },
        {
          attr: '宿泊療養中'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number
  感染者数: number
  入院中: number
  死亡: number
  宿泊療養中: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    感染者数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    死亡: data.children[0].children[2].value,
    宿泊療養中: data.children[0].children[1].value
  }
  return formattedData
}
