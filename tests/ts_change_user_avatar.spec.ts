import {test, expect} from '@playwright/test'
import { UserProfilePageTs } from './POM/user_profile_ts.page';

test.describe('Upload file to user profile', () => {

    test.only('Successfuly update user logo in profile', async ({page}) => {
        const userProfilePageTs = new UserProfilePageTs (page)

        await userProfilePageTs.open()
        await userProfilePageTs.editProfileButton.click()
        await userProfilePageTs.setInputFiles('fixtures/userLogo.png')
        await userProfilePageTs.saveButton.click()        
        await expect(page.locator('input#editProfilePhoto')).toHaveValue('C:\\fakepath\\userLogo.png')

        await expect (userProfilePageTs.successPopup).toBeVisible()
    })

})