import {test, expect} from '@playwright/test'


test.describe('API login', async () => {

    test('Login user', async ({page}) => {
    
        const response = await page.request.post('/api/auth/signin', {
            data: {
                "email": process.env.USER_EMAIL,
                "password": process.env.USER_PASSWORD,
                "remember": false
            }
      });

    // console.log (await response.json())

      const respJson = await response.json()
      expect(respJson.status).toEqual('ok')

    //   await page.goto('/')
    //   await page.pause()
    })
})