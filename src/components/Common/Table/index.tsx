/* eslint-disable camelcase */
import React, { useState, useMemo } from 'react'
import cx from 'classnames'
import { Error, Pagination, View, EtherAsset } from '../index'
import { TableColumnList } from '../../../lib/constant'
import dayjs from 'dayjs'

type TableProps<T> = {
  myAddress?: string
  data?: T[]
  pageSize?: number
}

type TableCellProps = {
  as?: 'th' | 'td'
  className?: string
  children: React.ReactNode
}

const TableCell = ({ as = 'th', className, children }: TableCellProps) => {
  const Component = as
  return <Component className={cx('border border-slate-300 p-2', className)}>{children}</Component>
}

export const Table = <T extends object>({ myAddress = '', data, pageSize = 10 }: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)

  if (!data || !data.length) return <Error type='noData' />

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, data, pageSize])

  return (
    <View className='w-full overflow-auto lg:inline-block'>
      <table className='w-full border border-separate border-slate-400'>
        <thead className='bg-slate-50'>
          <tr>
            {TableColumnList.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentTableData?.map((item: any) => {
            const {
              transaction_index,
              hash,
              block_number,
              value,
              block_timestamp,
              from_address,
              to_address,
            } = item

            return (
              <tr key={transaction_index} className=''>
                <TableCell as='td'>
                  <a href={`https://etherscan.io/tx/${hash}`} target='_blank' rel='noreferrer'>
                    {`${hash.slice(0, 20)}...`}
                  </a>
                </TableCell>
                <TableCell as='td'>
                  <EtherAsset isRedirect={true} assetType='block' assetValue={block_number} />
                </TableCell>
                <TableCell as='td'>{dayjs(block_timestamp).format('MMM D, YYYY h:mm A')}</TableCell>
                <TableCell as='td'>
                  {from_address.toLowerCase() === myAddress.toLowerCase() ? (
                    <EtherAsset assetValue={from_address} />
                  ) : (
                    <EtherAsset isRedirect={true} assetValue={from_address} />
                  )}
                </TableCell>
                <TableCell as='td'>
                  {to_address.toLowerCase() === myAddress.toLowerCase() ? (
                    <EtherAsset assetValue={to_address} />
                  ) : (
                    <EtherAsset isRedirect={true} assetValue={to_address} />
                  )}
                </TableCell>
                <TableCell as='td'>
                  {value && (
                    <>
                      <EtherAsset assetType='balance' assetValue={value} /> Ether
                    </>
                  )}
                </TableCell>
              </tr>
            )
          })}
        </tbody>
      </table>

      <View className='text-center'>
        <Pagination
          className='inline-flex items-center gap-4 mt-4'
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </View>
    </View>
  )
}
