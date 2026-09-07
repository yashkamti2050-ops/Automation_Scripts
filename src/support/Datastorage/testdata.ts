export const testData = {
    validUser: {
        username: process.env.TEST_USER_USERNAME!,
        password: process.env.TEST_USER_PASSWORD!,
    },

    profileData: {
        email: process.env.TEST_PROFILE_EMAIL!,
        phoneNumber: process.env.TEST_PROFILE_PHONE_NUMBER!,
    },

    userDetail: {
        fullName: process.env.TEST_PROFILE_FULL_NAME!,
        phoneNumber: process.env.TEST_PROFILE_PHONE_NUMBER!,
    },

    profileName: {
        firstName: process.env.TEST_PROFILE_FIRST_NAME!,
        lastName: process.env.TEST_PROFILE_LAST_NAME!,
    },

    profileSettings: {
        language: process.env.TEST_PROFILE_LANGUAGE!,
    },

    loginURL: {
        url: process.env.BASE_URL!,
    }, 
    
    voucher: {
        code: process.env.TEST_VOUCHER_CODE!,
    }
    
    
};