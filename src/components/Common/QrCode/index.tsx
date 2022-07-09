import React from 'react'

type QrCodeProps = {
  address: string
}

export const QrCode = ({ address }: QrCodeProps) => {
  return (
    <>
      <img
        className='qr-code'
        src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${address}&choe=UTF-8`}
        alt='qrcode'
      />
    </>
  )
}
