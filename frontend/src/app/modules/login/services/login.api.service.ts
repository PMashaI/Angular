export class LoginApiService {
    url: string = '/login';
    constructor(public $http: ng.IHttpService) {
    }

    login(username: string, password: string) {
        this.$http.post(this.url, {username, password}).then((response: any) => {
            return response.data;
        });
    }
}
