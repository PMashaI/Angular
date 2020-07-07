import _ from 'lodash';
import LoginDelegate from '../../delegates/login/LoginDelegate';

_.defaults(sails.config.routes, {
    'post /api/login': {
        controller: 'login/LoginController',
        action: 'UserLogin'
    }
});

export function UserLogin(req, res) {
    LoginDelegate.login(req, res);
}

