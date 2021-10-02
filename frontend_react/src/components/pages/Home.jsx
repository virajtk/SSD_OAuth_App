import React, { Component } from 'react';
import React, {Component} from 'react';
import googleLogo from '../asserts/google-logo.png';
import linkedinLogo from '../asserts/linkedin-logo.png';
import './home.css';

// google envs
export const clientID = process.env.REACT_APP_CLIENT_ID;
export const redirectURL = process.env.REACT_APP_REDIRECT_URL;
export const scopeEnv = process.env.REACT_APP_SCOPE;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: clientID,
            redirectUrl : redirectURL,
            scope: scopeEnv,
            client_id_link: clientID_l,
            redirectUrl_link: redirectUrl,
            scope_link: scopeEnv_l,
            state_link: state_l,
            url: null,
            url_linkedin: null,
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;
