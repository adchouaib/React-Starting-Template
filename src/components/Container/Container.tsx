import React, { FC, useEffect, useState } from 'react';
import styles from './Container.module.css';

//import material components
import { Button, Container, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';

//import redux connection method
import { connect } from 'react-redux';

//import models
import { dataStruct } from '../../models/dataModel';

//import data Action Creators
import { getMessage } from '../../redux/Actions/dataActions/dataActionCreator';
import { Key } from '@mui/icons-material';

//map state & dispatch to props
const mapStateToProps = (state:any) => {
  return {
    data : state.dataReducer
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  getMessage: (message:string , name:string) => dispatch(getMessage(message,name))
})

const AppContainer = (props:any) => {

  const messages = props.data.map((message:dataStruct) => <h1>{message.message+ " " + message.name}</h1>)
 
  const SubmitEvent = (e:any) => {
    props.getMessage("hello", "others")
    console.log(props.data)
  }

  return(
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{bgcolor: '#cfe8fc', height: '100vh' }}>
          {messages}
          <Button variant="contained" onClick={SubmitEvent}>Contained</Button>
        </Box>    
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
