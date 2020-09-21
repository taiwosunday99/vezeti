import React, { useEffect } from 'react';
// import clsx from 'clsx';
import PropTypes from 'prop-types';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import { useSnackbar } from 'notistack';
// import axios from 'axios';
import {
  List,
  ListItem,
  ListSubheader,
  // ListItemText,
  makeStyles
} from '@material-ui/core';

// import Autocomplete from '@material-ui/lab/Autocomplete';
// import wait from 'src/utils/wait';
// import countries from './countries';

const useStyles = makeStyles(() => ({
  root: {}
}));

const GeneralSettings = ({ className, user, accessToken, ...rest }) => {
  const classes = useStyles();

  // useEffect( async () =>  {
  //   const url = 'https://secure.vezeti.net/test-api/v3/get-user-account-parameters/';
  //   const data = {
  //     orgId: '728934',
  //     "userId": "VEZ88381598451",
  //   };
  //   const config = {
  //     method: 'GET',
  //     headers: {
  //       Authorization:
  //         'Basic dGFpd29zdW5kYXk5OUBnbWFpbC5jb206TTBuZSFXZXQxYU5EISE=',
  //       'Content-Type': 'application/json'
  //     },
  //     data: JSON.stringify(data),
  //     url
  //   };
  //   const response = await axios(config);

  //   const isSuccess = response.data.responseCode == '00' ? true : false;
  //   if (isSuccess) {
  //      user = response.data;
  //      console.log(user)
  //   }
  //   // axios.get('')
  //   // .then(result => {
  //   //   console.log(result)
  //   // })
  // },[])
  const style = {
    width: '60%',
    height: '100%',
    margin: '16px',
    // border: "1px solid #eee",
    // "box-shadow": "0 2px 3px #ccc",
    color: 'white',
    'text-align': 'center',
    backgroundColor: 'DeepSkyBlue'
  };

  // const style2 = {
  //   width: "50%",
  //   height: "50%",
  //   margin: "16px",
  //   // padding: "5%",
  //   color: "black",
  //   "font-size": "4em",
  //   "text-align": "center",
  //   backgroundColor: "magenta"
  // }
  return (
    <List style={style}>
      <h1 className="center"> User Profile</h1>
      <li>
        <ul>
          <ListSubheader>ORGID:{user.orgId}</ListSubheader>
          <ListItem className="magenta">
            <span className="navy">FullName:</span>
            {user.userLastName + ' ' + user.userFirstName}
          </ListItem>
          <ListItem className="magenta">
            <span className="navy">Mobile:</span>
            {user.userPhoneNumber}
          </ListItem>
          <ListItem className="magenta">
            <span className="navy">Account-Balance:</span>
            {user.currency3Letters} {user.userAccountBalance}
          </ListItem>
          <ListItem className="magenta">
            <span className="navy">Global Identity No:</span>
            {user.userGlobalId}
          </ListItem>
        </ul>
      </li>
    </List>

    //    <Grid style={style}>

    // <h1 className='center'>Viewing User Profile</h1>

    //   <Card style2={style2}>
    //   <div className="center">
    //     <h5 className="black">
    //       FullName: {user.userLastName} {user.userFirstName}
    //     </h5>
    //   </div>
    //   <div className="center">
    //     <h5 className="black">
    //       Phone: {user.userPhoneNumber}
    //     </h5>
    //   </div>
    //   <div className="center">
    //     <h5 className="black">
    //       AccountBalance: {user.currency3Letters} {user.userAccountBalance}
    //     </h5>
    //   </div>

    // </Card>

    // <Card style2={style2}>
    //   <div className="center">
    //     <h5 className="black">
    //       Global Identity No: {user.userGlobalId}
    //     </h5>
    //   </div>
    //   <div className="center">
    //     <h5 className="black">
    //       Transaction ID: {user.transactionId}
    //     </h5>
    //   </div>

    // </Card>
    // </Grid>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default GeneralSettings;
