import React from 'react'

import { mobxInjected } from 'Utils/helpers'
import { Result } from 'Types/.'
import { ButtonMainEnhancer as ButtonMain } from 'Features/ButtonMain/Component'

interface TProps {
  boredStore: {
    getActivity: () => void;
    result: Result;
    isFetching: boolean;
  },
}

const ButtonSeacrh = ({ boredStore: { getActivity }}: TProps) => (
  <ButtonMain onHandler={getActivity} icon='bicycle' info>
    Get activity
  </ButtonMain>
)

export const ButtonSeacrhInjected = mobxInjected('boredStore', 'searchFilters')(ButtonSeacrh)
