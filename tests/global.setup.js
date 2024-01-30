import { test as setup, expect } from '@playwright/test'


setup('do login user', async ({page}) => {
    
    const response = await page.request.post('/api/auth/signin', {
        data: {
            "email": process.env.USER_EMAIL,
            "password": process.env.USER_PASSWORD,
            "remember": false
        }
    });


    const respJson = await response.json()
    
    expect(respJson.status).toEqual('ok')

    await page.context().storageState({path: 'auth.json'})
    
});
