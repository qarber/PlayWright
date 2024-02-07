import { Page, Response } from '@playwright/test'
import { strict } from 'assert'


export class UserProfilePageTs {
    
    
    constructor (private page: Page) {
        this.page = page 
    }

    readonly editProfileButton = this.page.locator('button.btn-primary')
    readonly saveButton = this.page.locator('button', {hasText: 'Save'})
    readonly successPopup = this.page.locator(".alert-success")

    open():Promise<null|Response> {
        return this.page.goto('/panel/profile')
    }

    async setInputFiles(filePath: string | string[]):Promise<void> {
        await this.page.setInputFiles('input#editProfilePhoto', filePath)
    }


}