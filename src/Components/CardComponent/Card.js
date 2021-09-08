import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';






const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    textAlign: 'left',
    width:'85vw',
  },
  card: {
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    margin:'20px',

  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
      fontWeight:'bolder',
      marginLeft:'10px'
      
  },
  subContent: {
    display: 'flex',
    flexDirection: 'column',
    margin:'10px',
    fontSize:'0.7rem',
    lineHeight:'0.1rem'
  },
  content: {
    display: 'inline',
    width:'100%',
    margin: '11ßpx 0'
  }
}));




export default function SearchContent(props) {

  const classes = useStyles();
  const data =[
      {
          country: 'Germany',
          population:'12334',
          region:'Europe',
          capital:"dffdfvdvf",
          image: 'https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_1280.png'
      },
      {
        country: 'Spain',
        population:'12334545545',
        region:'Europe',
        capital:"dffdfvdvf",
        image: 'https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428__340.png'
    },
    {
        country: 'U.S.A',
        population:'12334545545',
        region:'Central America',
        capital:"dffdfvdvf",
        image: 'https://cdn.pixabay.com/photo/2017/01/07/16/55/usa-1960922__340.jpg'
    },
    {
        country: 'France',
        population:'12334545545',
        region:'Europe',
        capital:"dffdfvdvf",
        image: 'https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png'
    },
    {
        country: 'Canada',
        population:'12334545545',
        region:'North America',
        capital:"dffdfvdvf",
        image: 'https://cdn.pixabay.com/photo/2017/10/31/23/52/canada-2906822__480.png'
    },
    {
      country: 'Australia',
      population:'12334545545',
      region:'Australia',
      capital:"dffdfvdvf",
      image: 'https://cdn.pixabay.com/photo/2012/04/11/15/43/australia-28586__480.png'
  },
  {
      country: 'Argentina',
      population:'12334545545',
      region:'South America',
      capital:"dffdfvdvf",
      image: 'https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__480.png'
  },
  {
      country: 'Portugal',
      population:'12334545545',
      region:'Europe',
      capital:"dffdfvdvf",
      image: 'https://cdn.pixabay.com/photo/2013/07/13/14/16/portugal-162394__480.png'
  }
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} >
          <Grid container spacing={1}>
            {data.map((item) => {
              return(
              <Grid item key={item.id} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent className={classes.cardContent} style={props.elementTheme}>
                    <div className={classes.title}>
                        <h3>{item.country}</h3>
                    </div>
                    <div className={classes.subContent}>
                        <p className={classes.content}><span style={{fontWeight:"bold"}}>Population:</span> {item.population}</p>
                        <p className={classes.content}><span style={{fontWeight:"bold"}}>Region:</span> {item.region}</p>
                        <p className={classes.content}><span style={{fontWeight:"bold"}}>Capital:</span> {item.capital} </p>     
                    </div>
                  </CardContent>
                </Card>
              </Grid>)
              })}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}