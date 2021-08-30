import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';


const useStyles = makeStyles(() => ({
  root:{
      flexGrow:1,
      textAlign:'center',
      fontWeight: 'bolder',
      fontSize: 15,
  },
  content: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin: '10px 60px'
  },
  theme:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center', 
    cursor: 'pointer'
  }
}));


export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='transparent'>
          <div className={classes.content}>
            <div>
                <h3>
                    Where in the World?
                </h3>
            </div>
            <div className={classes.theme} onClick={props.themeSwitch}>
                <NightsStayOutlinedIcon/>
                <p>Dark Mode</p>
            </div>
          </div>
      </AppBar>
    </div>
  );
}
