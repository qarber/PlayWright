import {test, expect} from '@playwright/test'
import { UserGaragePage } from "./POM/user_garage.page";


test.describe('Add new car to user profile', () => {

    test.only('Successfuly add new car', async ({page}) => {
        const userGaragePage = new UserGaragePage(page)

        await userGaragePage.open()
        await userGaragePage.addCarButton.click()
        await userGaragePage.chooseCarBrand.selectOption('Porsche')
        await userGaragePage.chooseCarModel.selectOption('Panamera')
        await userGaragePage.addCarMileage.fill('1001')
        await userGaragePage.addButton.click()
        
        await expect (userGaragePage.successPopup).toBeVisible()

        await userGaragePage.addFuelExpenseButton.click()

        test.slow()

        await userGaragePage.addExpenseLiters.fill('15')
        await userGaragePage.addExpenseTotalCost.fill('999')
        await userGaragePage.addCarMileage.fill('1110')
        await userGaragePage.addButton.click()

        await expect (userGaragePage.successPopup).toBeVisible()
        


    })

})