import { BigNumber, ethers } from 'ethers'
import React from 'react'

type EtherAssetProps = {
  isRedirect?: boolean
  assetType?: string
  assetValue: string
  maxShowLength?: number
}

export const EtherAsset = ({
  isRedirect = false,
  assetType = 'address',
  assetValue,
  maxShowLength = 20,
}: EtherAssetProps) => {
  if (assetType === 'balance') {
    const ethBalance = ethers.utils.formatEther(BigNumber.from(assetValue))
    return <>{(+ethBalance).toFixed(4)}</>
  }
  return (
    <>
      {isRedirect ? (
        <a
          href={`https://etherscan.io/${assetType}/${assetValue}`}
          target='_blank'
          rel='noreferrer'
        >
          {maxShowLength < assetValue.length
            ? `${assetValue.slice(0, maxShowLength)}...`
            : assetValue}
        </a>
      ) : (
        <>
          {maxShowLength < assetValue.length
            ? `${assetValue.slice(0, maxShowLength)}...`
            : assetValue}
        </>
      )}
    </>
  )
}
