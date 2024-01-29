export class UserProfilePage {

       constructor(page) {
              this.page = page
              this.editProfileButton = page.locator('button.btn-primary')
              this.chooseFile = page.setInputFiles('input#editProfilePhoto', 'fixtures/userLogo.png')
              this.saveButton = page.locator('button', {hasText: 'Save'})
              this.successPopup = page.locator(".alert-success")
       }

       open() {
              return this.page.goto ('/panel/profile')
          }


}