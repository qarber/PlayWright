import {test, expect} from '@playwright/test'

const randomNumber = () => {
    return Math.floor((Math.random() * 1000))
}



test.describe('Registration test on Hillel auto', () => {

    test('New user is registered successfully', async ({page}) => {
        const signupButton = page.locator('button.btn-primary')
        const signupName = page.locator('#signupName')
        const signupLastName = page.locator('#signupLastName')
        const signupEmail = page.locator('#signupEmail')
        const signupPassword = page.locator('#signupPassword')
        const signupRepeatPassword = page.locator('#signupRepeatPassword')
        const registerButton = page.getByText('Register');
        const userProfilebutton = page.locator('#userNavDropdown')
        const titleGarage = page.locator('div.panel-page')

        await page.goto('/')
        await signupButton.click()
        await signupName.fill('Roman')
        await expect(signupName).toHaveValue('Roman')
        await signupLastName.fill('Last')
        await signupEmail.fill(`qaromtest+${randomNumber()}@testmail.com`)
        await signupPassword.fill(`qaRomP@ss1`)
        await signupRepeatPassword.fill(`qaRomP@ss1`)
        await registerButton.click()
        await expect(userProfilebutton).toBeVisible()
        await expect (titleGarage).toBeVisible()



    })



})