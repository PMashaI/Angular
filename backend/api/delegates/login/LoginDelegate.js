const fakeUsername = "admin"
const fakePassword = "admin"

class LoginDelegate {

    static login(req, res) {
        const params = req.allParams();

        if ((params.username != fakeUsername) 
            || (params.password != fakePassword) ) {
            res.forbidden();
        }
        else {
            res.ok();
        }
    }
}

export default LoginDelegate;