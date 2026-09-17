import { APIRequestContext } from "@playwright/test";
import { APITestData } from "../support/Datastorage/ApiTestData";


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

        const responseBody = await response.json();
        console.log(responseBody);
        return responseBody.api_key;
    }

    async getCurrentUser(apiKey: string) {
        const response = await this.api.get(
            `${APITestData.apiBaseUrl}/me`,
            {
                headers: {
                    "api-key": apiKey,
                },
            }
        );
    
        const userBody = await response.json();
    
        console.log(
            "CURRENT USER:",
            JSON.stringify(userBody, null, 2)
        );
    
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
          
        };

    }
}


