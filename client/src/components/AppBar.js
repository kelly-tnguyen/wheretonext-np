import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import "./styles/AppBar.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar fixed="top" dark expand="md" scrolling transparent style = {{boxShadow:'0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              <Link to="/">
              <i class="fas fa-tree"> </i> WhereToNext
            </Link>
          </Typography>
          <Link to ="/dashboard">
          <Button className = 'topNav' color="default">Discover  </Button>
            </Link>

            <Link to ="/nextadventure">
          <Button className = 'topNav' color="default">NextAdventure  </Button>
            </Link>
            <Link to ="/archive">
          <Button className = 'topNav' color="default">Archive  </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}