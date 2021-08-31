import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const regions = [
    {
        value: 'Filter by Region',
        label: 'Filter by Region',
      },
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
      
    },
    padding: '10px'
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [region, setRegion] = React.useState('Filter by Region');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          value={region}
          onChange={handleChange}
        >
          {regions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}

