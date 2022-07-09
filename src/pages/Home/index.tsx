import React, { useState } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import { Loading, Title, View } from '../../components/Common'
import { EtherScan } from '../../components/Pages/Home/EtherScan'
import { HistoryTable } from '../../components/Pages/Home/HistoryTable'
import { TransactionsDto } from '../../types'

const HomePage = () => {
  const Web3Api = useMoralisWeb3Api()

  const [isLoading, setIsLoading] = useState(false)
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [transactions, setTransactions] = useState<TransactionsDto>()

  const onEtherScan = async (address: string) => {
    setAddress(address)
    if (address) {
      setIsLoading(true)
      const transactions = await Web3Api.account.getTransactions({ address })
      const ethBalance = await Web3Api.account.getNativeBalance({ address })
      setIsLoading(false)
      if (transactions) {
        setTransactions(transactions)
      } else {
        setTransactions(undefined)
      }
      setBalance(ethBalance.balance)
    } else {
      setTransactions(undefined)
      setBalance('')
    }
  }

  return (
    <View>
      <Title className='mb-6 text-4xl text-center text-blue-600'>EtherScan App</Title>
      {isLoading && <Loading />}
      <EtherScan balance={balance} onUpdateAddress={onEtherScan}></EtherScan>
      {transactions && <HistoryTable data={transactions} myAddress={address}></HistoryTable>}
    </View>
  )
}

export default HomePage
