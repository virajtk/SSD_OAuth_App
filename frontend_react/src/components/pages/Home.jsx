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

    login = () => {
        this.setState(
            {
                url: "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+this.state.redirectUrl
                +"&prompt=consent&response_type=code&client_id="+this.state.client_id+"&scope="+this.state.scope
                +"&access_type=offline",
            });

        setTimeout(() => {
            window.location = this.state.url;
        }, 1000);
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
            <div className="wrapper">
                <div className="container">
                    <h1>OAuth 2.0 Application</h1>
                    <hr />
                    <h4>Upload files to Google Drive</h4>
                    <div className="upload-container">
                        <div className="border-container">
                            <button className="btn btn-dark" onClick={this.login}>
                                <img src={googleLogo} alt="google" width="30" height="30" />
                                &nbsp; Sign into Google
                            </button>
                        </div>
                    </div>

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
