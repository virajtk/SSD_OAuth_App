var request = require('request');
const getAccessToken = async (req, res) => {

    const url = "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=" 
    + req.body.code + "&redirect_uri=" + req.body.redirect_uri + "&client_id=" + req.body.client_id 
    + "&client_secret=" + req.body.client_secret;
    
    var clientServerOptions = {
        uri: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    request(clientServerOptions, function (error, response) {
        if (response) {
            res.status(200).json(JSON.parse(response.body));
        }
        else {
            res.status(500).json({ errors: error });
        }
        return;
    });

}

module.exports = {
    getAccessToken,
}