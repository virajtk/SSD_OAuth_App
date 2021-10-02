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

    setUrlParamsCode = () => {
        const param = new URLSearchParams(window.location.search);
        const code = param.get('code');
        const state = param.get('state');
        console.log('code :'+ code);
        console.log('state: '+state);
        this.setState({
            code: code,
            state_l: state,
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="section-title">
                        <h2><i className="fab fa-linkedin-in"/>&nbsp; LinkedIn Profile</h2>
                    </div>
                    <div className="row">
                        <div className="column">

                        </div>
                        <div className="column">
                            <div className="team-1">
                                <div className="team-img">
                                    <img src="https://picsum.photos/200" alt="profile" />
                                </div>
                                <div className="team-content">
                                    <h2>Mollie Ross</h2>
                                    <h3>Art Director</h3>
                                    <p>Some text goes here that describes about team member</p>
                                    <h4>example@example.com</h4>
                                    <div className="team-social">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a className="social-li"><i class="fab fa-linkedin-in"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">

                        </div>
                        <div className="column">

                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Viewlinkedin;
