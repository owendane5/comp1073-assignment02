//owen dane
const orderSummary = document.getElementById('orderSum')
//creating smoothie class
class Smoothie{
    constructor(smoothieType, milkType, smoothieOption, additionalRequest){
        this.smoothieType = smoothieType;
        this.milkType = milkType;
        this.smoothieOption = smoothieOption;
        this.additionalRequest = additionalRequest;
    }
    //printing the smoothie details inside the 
    displayOrder() {
        //clearing the texts
        orderSummary.textContent = '';
        //elements for smoothie!
        let smoothieTypeHead = document.createElement('h3');
        let milkTypeText = document.createTextNode(`Type of Milk: ${this.milkType}`);
        let smoothieOptionImg = document.createElement('img');
        let additionalRequestText = document.createTextNode(`Additional Requests: ${this.additionalRequest}`);
        //throwing in the ternary
        smoothieTypeHead.textContent = `Flavour: ${this.smoothieType}`;
        smoothieOptionImg.src = this.smoothieOption === 'smoothie' ? 'images/bowl.jpg' : 'images/cup.jpg';

      
        
    }
}