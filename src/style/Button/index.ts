// @ts-ignore
import { compose, defaultProps } from 'recompose'

export const Style = compose(
  defaultProps({
    style: {
      justifyContent: 'center',
      width: '100%',
      height: 80,
    },
  }),
)