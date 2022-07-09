import { ethers } from 'ethers'
import React, { useState } from 'react'
import { Error, EtherAsset, QrCode, Title } from '../../../Common'

type EtherScanProps = {
  balance: string
  onUpdateAddress: (address: string) => void
}

export const EtherScan = ({ balance, onUpdateAddress }: EtherScanProps) => {
  const [ethAddress, setEthAddress] = useState('')
  const [isValidAddress, setIsValidAddress] = useState(false)
  const handleAddressChange = (addr: string) => {
    setEthAddress(addr)
    if (ethers.utils.isAddress(addr)) {
      setIsValidAddress(true)
      onUpdateAddress(addr)
    } else {
      setIsValidAddress(false)
      onUpdateAddress('')
    }
  }

  return (
    <>
      <div className='flex flex-col items-start justify-center md:flex-row'>
        <div className='flex-col justify-center flex-1 w-full md:justify-start'>
          <Title className='mb-6 text-xl text-center text-blue-600 md:text-3xl md:text-left'>Please Enter a Wallet Address</Title>
          <input
            type='text'
            placeholder={'0x....'}
            value={ethAddress}
            className='relative w-full max-w-md px-3 py-3 pr-10 text-sm bg-white border rounded outline-none placeholder-slate-300 text-slate-600 border-slate-300 focus:outline-none focus:ring'
            onChange={(e) => handleAddressChange(e.target.value)}
          />
          <div>
            {ethAddress && isValidAddress && <QrCode address={ethAddress} />}
            {ethAddress && !isValidAddress && <Error type='invalidAddress' />}
          </div>
        </div>
        <div className='flex-1 w-full'>
          <Title className='mb-6 text-xl text-center text-blue-600 md:text-3xl md:text-left'>
            {balance && (
              <>
                Balance:
                <EtherAsset assetType='balance' assetValue={balance} /> ETH
              </>
            )}
          </Title>
        </div>
      </div>
    </>
  )
}
