import React, { useState } from "react";
import { Save, Delete, Menu } from "@material-ui/icons/";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Icon,
  TextField,
} from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { purple, blue } from "@material-ui/core/colors";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";

import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AppBar, Toolbar, IconButton  } from "@material-ui/core"


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE68, #999)",
    border: 0,
    borderRadius: 15,
    color: "red",
    padding: "5px 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 25,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styles Btn</Button>;
};

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<Delete />}
            checkedIcon={<Save />}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="testing checkbox"
      />
    </div>
  );
};

function App() {
  return (
    // Orange and Green theme
    <ThemeProvider theme={theme}>
      {/* //CONTAINER */}
      <Container maxWidth="lg" style={{background: "lightBlue", textAlign:"center"}}>
        {/* APP-BAR */}
        <AppBar color= "secondary" >
          <Toolbar >
            <IconButton> 
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Typography */}
        <Typography variant="h2" component="div" style={{marginTop: "100px"}}>
          Welcome to MUI
        </Typography>
        <Typography variant="subtitle1">Learn how to Burn</Typography>
        <div className="App">
          {/* Styled Button with MakeStyles */}
          <ButtonStyled />
          {/* Text Input */}
          {/* <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="your email"
            placeholder="youremail@something.com"
          /> */}
          {/* GRID/PAPER */}
          <Grid container spacing={4} justify="center"> 
            <Grid item xs={12} md={4}>
              <Paper style={{height: 75, width:"100%"}}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{height: 75, width:"100%"}}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{height: 75, width:"100%"}}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{height: 75, width:"100%"}}/>
            </Grid>
          </Grid>
          {/* Checkbox */}
          <CheckboxExample />
          {/* Buttons */}
          <ButtonGroup>
            <Button
              startIcon={<Save />}
              onClick={() => alert("sup bruh")}
              size="large"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="medium"
              onClick={() => alert("delete?")}
              endIcon={<Delete />}
            >
              Delete
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
