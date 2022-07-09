import React from 'react'
import { TransactionsDto } from '../../../../types'
import { Table, View } from '../../../Common'

type HistoryTableProps = {
  myAddress?: string
  data?: TransactionsDto
}

export const HistoryTable = ({ myAddress = '', data }: HistoryTableProps) => {
  return (
    <>
      <View>
        {data && <Table data={data.result} pageSize={data.page_size} myAddress={myAddress}></Table>}
      </View>
    </>
  )
}
