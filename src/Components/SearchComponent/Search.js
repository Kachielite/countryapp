import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width:'25vw',
    margin: '25px 0',
    '@media(max-width: 550px)' : {
      width: '90vw'
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Search({elementTheme}) {

  const classes = useStyles();
  


  return (
    <Paper component="form" className={classes.root} style={elementTheme}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search" style={elementTheme}>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search for a country..."
        style={elementTheme}
      />
    </Paper>
  );
}