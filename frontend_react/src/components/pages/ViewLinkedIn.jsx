import React, { Component } from 'react';

export const redirectURL = process.env.REACT_APP_REDIRECT_URL_ENCODED_LINKEDIN;
export const clientID = process.env.REACT_APP_CLIENT_ID_LINKEDIN;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET_LINKEDIN;
export const stateEnv = process.env.REACT_APP_STATE_LINKEDIN;

class Viewlinkedin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: null,
            redirect_uri: redirectURL,
            client_secret: clientSecret,
            client_id: clientID,
            access_token: null,
            expires_in: null,
            state_l: null,
            profile_img: null,
            first_name: null,
            last_name: null,
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Viewlinkedin;
