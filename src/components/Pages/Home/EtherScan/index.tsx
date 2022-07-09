import { ethers } from 'ethers'
import React, { useState } from 'react'
import { EtherAsset, QrCode, Title } from '../../../Common'

type EtherScanProps = {
  balance: string
  onUpdateAddress: (address: string) => void
}

export const EtherScan = ({ balance, onUpdateAddress }: EtherScanProps) => {
  const [ethAddress, setEthAddress] = useState('')
  const handleAddressChange = (addr: string) => {
    if (ethers.utils.isAddress(addr)) {
      setEthAddress(addr)
      onUpdateAddress(addr)
    } else {
			setEthAddress('')
			onUpdateAddress('')
		}
  }

  return (
    <>
      <div className='flex items-start justify-center'>
        <div className='flex-1'>
          <Title className='mb-6 text-3xl text-blue-600'>Please Enter a Wallet Address</Title>
          <input
            type='text'
            placeholder={'0x....'}
            className='relative w-full max-w-md px-3 py-3 pr-10 text-sm bg-white border rounded outline-none placeholder-slate-300 text-slate-600 border-slate-300 focus:outline-none focus:ring'
            onChange={(e) => handleAddressChange(e.target.value)}
          />
          {ethAddress && <QrCode address={ethAddress} />}
        </div>
        <div className='flex-1'>
          <Title className='mb-6 text-3xl text-blue-600'>
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
