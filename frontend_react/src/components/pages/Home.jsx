import React, { Component } from 'react';
import React, {Component} from 'react';
import googleLogo from '../asserts/google-logo.png';
import linkedinLogo from '../asserts/linkedin-logo.png';
import './home.css';

// google envs
export const clientID = process.env.REACT_APP_CLIENT_ID;
export const redirectURL = process.env.REACT_APP_REDIRECT_URL;
export const scopeEnv = process.env.REACT_APP_SCOPE;

// linkedin envs
export const clientID_l = process.env.REACT_APP_CLIENT_ID_LINKEDIN;
export const redirectUrl = process.env.REACT_APP_REDIRECT_URL_ENCODED_LINKEDIN;
export const scopeEnv_l = process.env.REACT_APP_SCOPE_LINKEDIN;
export const state_l = process.env.REACT_APP_STATE_LINKEDIN;

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

    loginLinkedIn = () => {
        this.setState({
            url_linkedin: "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=" + this.state.client_id_link
                + "&redirect_uri="+ this.state.redirectUrl_link +"&state="+ this.state.state_link +"&scope="+ this.state.scope_link
        });

        setTimeout(() => {
            window.location = this.state.url_linkedin;
        }, 1000);
    }

    render() {
        return (
            <div>
               <div className="container">
               <h1>OAuth 2.0 Application</h1>  
               <hr />
               <h4>View info in LinkedIn</h4>
                    <div className="upload-container">
                        <div className="border-container">
                            <button className="btn btn-dark" onClick={this.loginLinkedIn}>
                                <img src={linkedinLogo} alt="linked" width="30" height="30" />
                                &nbsp; Sign into LinkedIn
                            </button>

                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Home;
