
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { wrap } from 'module';

const useStyles = makeStyles({
  image: {
    maxHeight: 200,
    maxWidth: 250,
  },
  card: {
    maxWidth: 300,
    height: 350,
    margin: 10,
    wordWrap: wrap
  },
  media: {
    height: 180,
    width: 300
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  
  const newPark = () => {
    // e.preventDefault();
    let newPark={
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          name: props.name, 
          location: props.location,
          image: props.image
      })
    }

 // if id isn't in database, run the fetch
 
    fetch("http://localhost:3001/likes", newPark)
    .then((res)=>{
        console.log(res.text())
    })
    alert('Park added to Next Adventure!');

  //else, don't add it if it's there/alert them saying it's added already
  }


  const newArchive = () => {
    // e.preventDefault();
    let newArchive={
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          name: props.name, 
          location: props.location,
          image: props.image
      })
    }

 
    fetch("http://localhost:3001/archives", newArchive)
    .then((res)=>{
        console.log(res.text())
    })
    alert('Park added to Archive');

  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {props.image}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="links" size="small" color="primary" onClick = {()=>{newPark()}}>
        <i class="fas fa-plus">  </i> Next Adventure
        </Button>
        <Button className="links" size="small" color="primary" onClick = {()=>{newArchive()}}>
        <i class="fas fa-plus">  </i> Archive
        </Button>
      
      </CardActions>
    </Card>
  );
  }