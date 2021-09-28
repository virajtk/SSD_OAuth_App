import React, {Component} from 'react';
import googleLogo from '../asserts/google.jpg';
import './home.css';

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
            url: null,

        }


    }




    login = () => {

        this.setState({
            url: "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+this.state.redirectUrl
                +"&prompt=consent&response_type=code&client_id="+this.state.client_id+"&scope="+this.state.scope
                +"&access_type=offline",
        });


    }




    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h1>Google OAuth 2.0 Application</h1>
                    <h3>Login</h3>
                    <div className="upload-container">
                        <div className="border-container">
                            <button className="btn btn-primary" onClick={this.login}>
                                <img src={googleLogo} alt="google" width="30" height="30" />
                                 Sign into Google to upload files
                            </button>

                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Home;
