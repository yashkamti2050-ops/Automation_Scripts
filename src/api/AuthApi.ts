import { APIRequestContext } from "@playwright/test";
import { prependOnceListener } from "cluster";

export class AuthApi {
    // // static login(login: any) {
    //     throw new Error("Method not implemented.");
    // }

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

        const responseBody = await response.json();
        console.log(responseBody);
        return responseBody.api_key;
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
            // user,
        };

    }
}


