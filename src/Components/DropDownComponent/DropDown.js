import React, { useState } from 'react';
import Select from 'react-select';

const regions = [
  {
    value: 'Africa',
    label: 'Africa',
  },
  {
    value: 'America',
    label: 'America',
  },
  {
    value: 'Asia',
    label: 'Asia',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
  {
    value: 'Oceania',
    label: 'Oceania',
  },
  
  ];

export default function DropDown({backgroundColor, color}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: backgroundColor, color:color, }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      
      return {
        ...styles,
        // backgroundColor: 'hsl(209, 23%, 22%)',
        // color: 'hsl(0, 0%, 100%)',
        
      };
    },

  };

  

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={regions}
        styles={colourStyles}
        placeholder='Filter by Region'
      />
    </div>
  );
}