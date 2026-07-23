import { APIRequestContext } from "@playwright/test";

export class AuthApi {

    constructor(private api: APIRequestContext) { }

    async authenticate(email: string, password: string) {

        const response = await this.api.post(
            'https://apitest.lovingloyalty.com/users/authenticate/email',
            {
                data: {
                    id: email,
                    password: password,
                },
            }
        );

        console.log(response.headers());

        const loginBody = await response.json();

        return loginBody.api_key;
    }

    async getCurrentUser(apiKey: string) {

        const response = await this.api.get(
            'https://apitest.lovingloyalty.com/me',
            {
                headers: {
                    'api-key': apiKey,
                },
            }
        );

        const userBody = await response.json();

        return userBody;

    }

    async login(email: string, password: string) {
        const apiKey = await this.authenticate(
            email,
            password
        );
        const user = await this.getCurrentUser(apiKey);

         return {
            apiKey,
            user,
        };

    }
}


