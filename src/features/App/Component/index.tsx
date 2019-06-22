import React from 'react'
import { Provider } from 'mobx-react'
import { Container } from 'native-base'

import { Navigation } from 'Features/Navigation/Component'
import { Header } from 'Features/Header/Component'
import { Footer } from 'Features/Footer/Component'
import { RootModel as stores } from 'Models/.'

export const App = () => (
  <Provider {...stores}>
    <Container>
      <Header>
        Bored App
      </Header>
    <Navigation />
      <Footer/>
    </Container>
  </Provider>
)


