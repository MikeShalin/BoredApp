import React, { useState } from 'react'
import { Picker, Icon, Item } from 'native-base'
//@ts-ignore
import get from 'lodash/get'

import { ActivityDropdownOptions } from '../config'
import { TSetFilter } from 'Types/.'

interface TProps {
  name: string;
  setFilter: ({}: TSetFilter) => void;
}

export const ActivityDropdown = ({ name, setFilter }: TProps) => {
  const activityType = get(ActivityDropdownOptions, name, [])
  const [selected, onValueChange] = useState(name)
  return (
    <Item picker>
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        style={{ width: undefined }}
        placeholder={name}
        placeholderStyle={{ color: '#bfc6ea' }}
        placeholderIconColor="#007aff"
        selectedValue={selected}
        onValueChange={(value) => {
          //@ts-ignore
          setFilter({ name, value})
          onValueChange(value)
        }}
        headerBackButtonText="cancel"
      >
        {
          activityType.map((option: string) => (
            <Picker.Item key={option} label={option} value={option} />
          ))
        }
      </Picker>
    </Item>
  )
}
