import React from 'react'

import { mobxInjected } from 'Utils/helpers'
import { ButtonMainEnhancer as ButtonMain } from 'Features/ButtonMain/Component'

interface TProps {
  boredStore: {
    setResult: () => void
  },
}

const ButtonResetResult = ({ boredStore: { setResult }}: TProps) => (
  <ButtonMain onHandler={() => setResult()} icon='settings' success>
    Go to filters
  </ButtonMain>
)

export const ButtonResetResultInjected = mobxInjected('boredStore')(ButtonResetResult)
