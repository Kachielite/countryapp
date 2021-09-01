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

export default function FilterComponent({backgroundColor, color}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: backgroundColor, }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      let menuBack = backgroundColor;
      let textColor = color;
      return {
        ...styles,
        backgroundColor: menuBack,
        color: textColor,
        
      };
    },

  };

  

  return (
    <div style={{width:'10vw'}} >
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
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import '../App.css';



// const FilterComponent = () => {
//   const defaultOption = regions[0];

//   return(
//     <div style={{backgroundColor:'black'}}>
//       <Dropdown className="drop-down" options={regions} value={defaultOption} placeholder="Select an option" />
//     </div>
    

//   )
// }

// export default FilterComponent;

// import React from 'react';

// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(3),
//       width: '25ch',
      
//     },
//     padding: '10px'
//   },
// }));

// export default function MultilineTextFields() {
//   const classes = useStyles();
//   const [region, setRegion] = React.useState('Filter by Region');

//   const handleChange = (event) => {
//     setRegion(event.target.value);
//   };

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="standard-select-currency"
//           select
//           value={region}
//           onChange={handleChange}
//         >
//           {regions.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </div>
//     </form>
//   );
// }

