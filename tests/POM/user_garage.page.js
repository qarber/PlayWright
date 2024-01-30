export class UserGaragePage {

    constructor(page) {
        this.page = page
        this.addCarButton = page.locator('button.btn-primary')
        this.chooseCarBrand = page.getByLabel('Brand')
        this.chooseCarModel = page.getByLabel('Model')
        this.addCarMileage = page.getByLabel('Mileage')
        this.addButton = page.getByRole('button', { name: 'Add' })

        this.successPopup = page.locator(".alert-success")

    
        this.addFuelExpenseButton = page.getByRole('button', { name: 'Add fuel expense' })
        this.addExpenseLiters = page.getByLabel('Number of liters')
        this.addExpenseTotalCost = page.getByLabel('Total cost')
        this.addButton = page.getByRole('button', { name: 'Add' })


        this.successPopup = page.locator(".alert-success")



    }
    
    open() {
        return this.page.goto ('/panel/garage')
    }



}