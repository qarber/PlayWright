import {test, expect} from '@playwright/test'
import { UserProfilePage } from "./POM/user_profile.page";

test.describe('Upload file to user profile', () => {

    test('Successfuly update user logo in profile', async ({page}) => {
        const userProfilePage = new UserProfilePage(page)

        await userProfilePage.open()
        await userProfilePage.editProfileButton.click()
        await userProfilePage.chooseFile
        await userProfilePage.saveButton.click()        
        await expect(page.locator('input#editProfilePhoto')).toHaveValue('C:\\fakepath\\userLogo.png')

        await expect (userProfilePage.successPopup).toBeVisible()
    })

})