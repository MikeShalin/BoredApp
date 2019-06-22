import React from 'react'
import { Button, Form, Icon, Text } from 'native-base'

import { ActivityDropdown } from 'Features/ActivityDropdown/Component'
import { mobxInjected } from 'Utils/helpers'
import { Result, TSetFilter } from 'Types/.'

interface TProps {
  boredStore: {
    getActivity: ({}) => void;
    result: Result;
    isFetching: boolean;
    setResult: () => void
  },
  searchFilters: {
    activity: null | string;
    accessibility: null | string;
    type: null | string;
    participants: null | string;
    price: null | string;
    setFilter: ({}: TSetFilter) => void
  }
}

const SearchBox = ({ searchFilters: { setFilter, ...searchFilters } }: TProps) => (
  <>
    {console.log('\n\n\nlolsearchFilters', searchFilters)}
    <Form>
      <ActivityDropdown setFilter={setFilter} name='accessibility' />
      <ActivityDropdown setFilter={setFilter} name='participants' />
      <ActivityDropdown setFilter={setFilter} name='type' />
      <ActivityDropdown setFilter={setFilter} name='price' />
    </Form>
  </>
)

export const SearchBoxInjected = mobxInjected( 'searchFilters')(SearchBox)
