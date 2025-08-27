const cartBtns = document.getElementsByClassName('cart-btn')
// console.log(cartBtns);

for (let cartButton of cartBtns) {
   cartButton.addEventListener('click', function () {
      // console.log(cartButton);

      const serviceTitle = cartButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
      // console.log(serviceTitle);

      const serviceNumber = cartButton.parentNode.parentNode.childNodes[3].childNodes[3].innerText
      // console.log(serviceNumber);

      const callHistoryContainer = document.getElementById('call-history-container');

      let now = new Date();
      let timeString = now.toLocaleTimeString();

      const newCart = document.createElement('div');
      newCart.innerHTML = ` <div class="cart-box bg-[#FAFAFA] p-4 mt-4 mb-2 rounded-lg flex justify-between items-center">
                <div>
                  <h2 class="font-semibold">${serviceTitle}</h2>
                  <p class="text-gray-400 mt-1">${serviceNumber}</p>
                </div>
                <div>
                  <h2 class="font-medium">${timeString}</h2>
                </div>
              </div>`;

      callHistoryContainer.append(newCart);


   });



}

// heart
const totalQuantity = document.getElementById('total-quantity') ;

const heartButton = document.getElementsByClassName('hear-btn')

// console.log(heartButton);

for (let herat of heartButton) {
   herat.addEventListener('click', function () {
      // console.log("heart button click");
      const quantity = document.getElementById('total-quantity').innerText;

// console.log(quantity);

const currentQuantity = Number(quantity) + 1;
totalQuantity.innerText = currentQuantity;

   });
}


// copy




