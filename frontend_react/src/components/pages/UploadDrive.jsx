import React, {Component} from 'react';
import googleLogo from '../asserts/google_drive_logo.png';
import './upload.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import axios from "axios";

export const redirectURL = process.env.REACT_APP_REDIRECT_URL;
export const clientID = process.env.REACT_APP_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
export const scopeEnv = process.env.REACT_APP_SCOPE;

class UploadDrive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urlParams: null,
            code: null,
            redirect_uri: redirectURL,
            client_secret: clientSecret,
            client_id: clientID,
            scope: scopeEnv,
            access_token: null,
            refresh_token: null,
            expires_in: null,
            token_type: null,
            selectedFile: null,
            image: null,
            progress: 0,

        }
    }

    render() {
        return (
            <div className="wrapper">
                <ToastContainer />
                <div className="container">
                    <img src={googleLogo} width="70" height="70" alt="google drive"/>
                    <h3>
                        Upload a Image
                    </h3>
                    <div className="upload-container">
                        <div className="border-container">
                            <input
                                className="btn btn-success"
                                id="files"
                                type="file"
                                name="files[]"
                                onChange={this.fileSelectedHandler}
                                ref={ref=> this.fileInput = ref}
                                // multiple
                            /> &nbsp;
                            <button className="btn btn-dark" id="upload" onClick={this.fileUploadHandler}>Upload</button> &nbsp;
                            <button className="btn btn-danger" id="upload" onClick={this.clearImage}>Clear</button>
                            <br/> <br/>
                            <Progress
                                percent={this.state.progress}
                            />
                        </div>

                    </div>
                </div>
                <br/>
                <img id="target" src={this.state.image} style={{"width": "200px"}} alt=""/>
            </div>
        );
    }
}

export default UploadDrive;
