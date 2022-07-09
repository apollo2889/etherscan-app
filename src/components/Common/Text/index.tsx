import React, { forwardRef, type HTMLProps } from 'react';

type TextProps = HTMLProps<HTMLSpanElement>;

// eslint-disable-next-line react/display-name
export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  return <span ref={ref} {...props} />;
});
