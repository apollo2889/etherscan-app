import React, { forwardRef, type HTMLProps } from 'react'

type ViewProps = HTMLProps<HTMLDivElement>

// eslint-disable-next-line react/display-name
export const View = forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
  return <div ref={ref} {...props} />
})
