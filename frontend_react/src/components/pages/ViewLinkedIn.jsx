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

    componentDidMount() {
        this.setUrlParamsCode();
        setTimeout(() => {
            if (this.state.state_l === stateEnv && this.state.code){
                // console.log('State is correct and good to go!');
                    // Simple POST request with a JSON body using fetch
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            code:this.state.code,
                            redirect_uri:this.state.redirect_uri,
                            client_secret:this.state.client_secret,
                            client_id:this.state.client_id
                        })
                    };
                    fetch('http://localhost:5000/api/linkedin', requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                                this.setState({
                                    access_token: data.access_token,
                                    expires_in: data.expires_in,
                                });

                                localStorage.setItem("access_token_linkedin",data.access_token);
                                localStorage.setItem("expires_in_linkedin",data.expires_in);
                                window.history.pushState({}, document.title, "/view");

                                setTimeout(() => {
                                    this.fetchData().then(r => {

                                    }).catch(err => {
                                        console.log(err)
                                    })
                                }, 1000);

                            }
                        )
                        .catch(error => {
                            console.log(error);
                        });
            }
            else {
                console.log('state is incorrect/ code invalid');
            }
        }, 1000);

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
