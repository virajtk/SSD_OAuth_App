import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedinLogo from '../asserts/linkedin-logo.png';

export const redirectURL = process.env.REACT_APP_REDIRECT_URL_ENCODED_LINKEDIN;
export const clientID = process.env.REACT_APP_CLIENT_ID_LINKEDIN;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET_LINKEDIN;
export const stateEnv = process.env.REACT_APP_STATE_LINKEDIN;

class ViewLinkedIn extends Component {

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
            isLoaded: null,
            text: "",
            visibility: "",
            title: "",
            description: "",
            url: "",
            userId: "",
        }
    }

    setUrlParamsCode = () => {
        const param = new URLSearchParams(window.location.search);
        const code = param.get('code');
        const state = param.get('state');
        console.log('code :' + code);
        console.log('state: ' + state);
        this.setState({
            code: code,
            state_l: state,
        });
    }

    componentDidMount() {
        this.setUrlParamsCode();
        setTimeout(() => {
            if (this.state.state_l === stateEnv && this.state.code) {
                // console.log('State is correct and good to go!');
                // Simple POST request with a JSON body using fetch
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        code: this.state.code,
                        redirect_uri: this.state.redirect_uri,
                        client_secret: this.state.client_secret,
                        client_id: this.state.client_id
                    })
                };
                fetch('http://localhost:5000/api/linkedin', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                            // console.log(data);
                            this.setState({
                                access_token: data.access_token,
                                expires_in: data.expires_in,
                            });

                            localStorage.setItem("access_token_linkedin", data.access_token);
                            localStorage.setItem("expires_in_linkedin", data.expires_in);
                            window.history.pushState({}, document.title, "/view");

                            setTimeout(() => {
                                this.fetchData().then(() => {
                                    this.fetchEmail().then(() => {
                                        this.setState({
                                            isLoaded: true
                                        })
                                        toast.success('Profile Details Fetched!', {
                                            position: "top-right",
                                            autoClose: 3000,
                                            hideProgressBar: true,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                    });
                                }).catch(err => {
                                    console.log(err)
                                })
                            }, 1000);

                        }
                    )
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                console.log('state is incorrect/ code invalid');
            }
        }, 1000);

    }

    fetchData = async () => {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                access_token: this.state.access_token
            })
        };
        await fetch('http://localhost:5000/api/linkedin/profile_picture', requestOptions)
            .then(response => response.json())
            .then(data => {
                // const result = JSON.stringify(data);
                const result = data.profilePicture;
                let displayImage = null;

                for (let key in result) {
                    if (result.hasOwnProperty(key)) {
                        // console.log(key + " -> " + result[key]);
                        if (key === 'displayImage~') {
                            // console.log(result[key]);
                            displayImage = result[key];
                        }
                    }
                }
                // console.log(displayImage.elements[2].identifiers[0].identifier);
                this.setState({
                    first_name: data.firstName.localized.en_US,
                    last_name: data.lastName.localized.en_US,
                    profile_img: displayImage.elements[2].identifiers[0].identifier,
                    userId: data.id,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    fetchEmail = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                access_token: this.state.access_token
            })
        };
        await fetch('http://localhost:5000/api/linkedin/email', requestOptions)
            .then(response => response.json())
            .then(data => {
                const result = data.elements[0];
                let handle = null;
                for (let key in result) {
                    if (result.hasOwnProperty(key)) {
                        // console.log(key + " -> " + result[key]);
                        if (key === 'handle~') {
                            // console.log(result[key]);
                            handle = result[key];
                        }
                    }
                }
                this.setState({
                    email: handle.emailAddress,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleInputFocus = (e) => {
        this.setState({focus: e.target.name});
    };
    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    submitAction = () => {
        if (this.state.visibility === "" || this.state.text === "" || this.state.title === ""
            || this.state.description === "" || this.state.url=== "") {
            toast.error("Fill all mandatory fields ", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            this.postData().then(() => {
                this.clearAction();
            });
        }
    }

    clearAction = () => {
        this.setState({
            text: "",
            visibility: "",
            title: "",
            description: "",
            url: "",
        })
    }

    async postData() {
        try {
            const API = "http://localhost:5000/api/linkedin/post";
            let result = await fetch(  API , {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    "access_token": this.state.access_token,
                    "user_id": this.state.userId,
                    "text": this.state.text,
                    "description": this.state.description,
                    "url": this.state.url,
                    "title": this.state.title,
                    "visibility": this.state.visibility
                }),
            });
            console.log("Result: " + result);
            if ( result.status === 201 ) {
                toast.success("Article Added Successfully !", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            } else {
                toast.error("Something wrong !", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    <div className="container">
                        <div className="section-title">
                            <h2>
                                <img src={linkedinLogo} alt="linkedin logo" style={{"width": "50px"}}/>
                                &nbsp; LinkedIn Profile
                            </h2>
                        </div>
                        <center>loading data ...</center>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <ToastContainer/>
                <div className="container">
                    <div className="section-title">
                        <h2>
                            <img src={linkedinLogo} alt="linkedin logo" style={{"width": "50px"}}/>
                            &nbsp; LinkedIn Profile
                        </h2>
                    </div>
                    <div className="row">
                        {/*<div className="column"/>*/}
                        <div className="column">
                            <div className="team-1">
                                <div className="team-img">
                                    <img src={this.state.profile_img} alt="profile"/>
                                </div>
                                <div className="team-content">
                                    <h2>{this.state.first_name} {this.state.last_name}</h2>
                                    {/*<h3>Art Director</h3>*/}
                                    {/*<p>Some text goes here that describes about team member</p>*/}
                                    <p>{this.state.email}</p>
                                    <div className="team-social">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a className="social-li"><i className="fab fa-linkedin-in"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">

                            <h4>Post an Article on LinkedIn</h4>

                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" name="title"
                                       onChange={this.handleInputChange}
                                       onFocus={this.handleInputFocus}
                                       value={this.state.title}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" name="description"
                                          onChange={this.handleInputChange}
                                          onFocus={this.handleInputFocus}
                                          value={this.state.description}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">URL</label>
                                <input type="text" className="form-control" name="url"
                                       onChange={this.handleInputChange}
                                       onFocus={this.handleInputFocus}
                                       value={this.state.url}/>
                            </div>


                        </div>
                        <div className="column">
                            <br/><br/><br/>
                            <div className="mb-3">
                                <label className="form-label">Post Text</label>
                                <textarea className="form-control" name="text" rows="3"
                                          onChange={this.handleInputChange}
                                          onFocus={this.handleInputFocus}
                                          value={this.state.text}/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Visibility</label>
                                <select className="form-select" name="visibility" value={this.state.visibility}
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}>
                                    <option value="">Select visibility</option>
                                    <option value="PUBLIC">Public</option>
                                    <option value="CONNECTIONS">Connections</option>
                                </select>
                            </div>

                            <button type="submit" onClick={this.submitAction} className="btn btn-primary">POST
                            </button>
                            &nbsp; &nbsp;
                            <button className="btn btn-danger" onClick={this.clearAction}>CLEAR</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewLinkedIn;
