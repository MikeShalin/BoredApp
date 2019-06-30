import React from 'react'
import { Spinner, Row, Grid } from 'native-base'

import { ActivityCardWrapper } from 'Features/ActivityCardWrapper/Component'
import { SearchBoxInjected as SearchBox } from 'Features/SearchBox/Component'
import { ButtonSeacrhInjected as ButtonSeacrh } from 'Features/ButtonSeacrh/Component'
import { ButtonResetResultInjected as ButtonResetResult } from 'Features/ButtonResetResult/Component'
import { mobxInjected } from 'Utils/helpers'
import { Result } from 'Types/.'

interface TProps {
  boredStore: {
    getActivity: ({}) => void;
    result: Result;
    isFetching: boolean;
  },
}

const HomeScreen = ({ boredStore }: TProps) => {
  if (boredStore.isFetching) return <Spinner color='blue' />
  return (
    <Grid style={{ flex: 4 }}>
      <Row style={{ flex: 2 }}>
        {
          boredStore.result
            ? <ActivityCardWrapper {...boredStore.result} />
            : <SearchBox />
        }
      </Row>
      <Row style={{ flex: 1 }}>
        {
          boredStore.result
            ? <ButtonResetResult />
            : <ButtonSeacrh />
        }
      </Row>
    </Grid>
  )
}

export const Home = mobxInjected('boredStore')(HomeScreen)
