            // 1. Create some objects

            function Store(id, name, price, qtyOnHand, maxPerCustomer, category, shippingCost, reviews, description) {
            
                // Properties
                this.id = id;
                this.name = name;
                this.price = price;
                this.qtyOnHand = qtyOnHand;
                this.maxPerCustomer = maxPerCustomer;
                this.category = category;
                this.shippingCost = shippingCost;
                this.reviews = reviews;
                this.description = description;
    
    
                // Methods
    
                }
    
                function Cart(id, price, quantity, shippingCost) {
                
                // Properties
                this.id = id;
                this.price = price;
                this.quantity = quantity;
                this.shippingCost = shippingCost;
    
    
                // Methods
    
                }            
    
    
                // Global variables
                var items = [];
                var cart = [];
    
    
                
    
                /* This function sets the date, creates new items, and calls the display functions*/
    
                function initialize() {
                    var date = Date();
                    document.getElementById("dateArea").innerHTML = "Date: " + date;
    
                    var itemMsg = document.getElementById("addIDValidationMessage").innerHTML = "";
                    var itemQtyMsg = document.getElementById("addQtyValidationMessage").innerHTML = "";
    
                    // Some items
                    //                      ID,     Item,       Price,  Qty,    Max,    Category,       shipping,               reviews,                                description       
                    items.push( new Store( "PID01", "Carrots",  8.99,   160,    6,      "Produce",      1.99,       ["Great carrots","Easy to chop"],               "finger size carrots") );
                    items.push( new Store( "PID02", "Bagel",    5.99,   213,    12,     "Bakery",       1.50,       ["For breakfast", "Small bagels"],              "imported from montreal") );
                    items.push( new Store( "PID03", "Pears",    5.99,   145,    12,     "Produce",      1.50,       ["Fresh pears", "Long-lasting pears"],          "imported from El Salvador") );
                    items.push( new Store( "PID04", "Beef",     5.99,   60,     12,     "Deli",         2.00,       ["4 pounds steak", "American beef"],            "beef for four") );
                    items.push( new Store( "PID05", "Milk",     7.50,   40,     4,      "Dairy",        1.50,       ["Whole milk", "2 liters"],                     "unsweetened") );
                    items.push( new Store( "PID06", "Cheese",   6.49,   32,     12,     "Dairy",        1.99,       ["Great for sandwiches", "High quality"],       "cheddar cheese") );
                    items.push( new Store( "PID07", "Salami",   8.50,   58,     6,      "Deli",         1.50,       ["3 pound salami", "best salami in London"],    "italian salami") );
                    items.push( new Store( "PID08", "Baguette", 4.00,   86,     6,      "Bakery",       1.50,       ["4 feet long", "better with peanut butter"],   "french baguette") );
                    items.push( new Store( "PID09", "Ham",      5.00,   92,     12,     "Deli",         1.50,       ["5 star ham", "soft and fresh"],               "perfect for sandwiches") );
                    items.push( new Store( "PID10", "Avocados", 8.99,   118,    12,     "Produce",      1.99,       ["Big avocados", "great for guacamole"],        "imported from El Salvador") );
                    items.push( new Store( "PID11", "Bread",    4.99,   62,     6,      "Bakery",       1.50,       ["soft bread", "perfect for french toast"],     "Oat bread") );
                    items.push( new Store( "PID12", "Margarine",3.99,   54,     6,      "Dairy",        1.50,       ["lactose free", "too much margarine is bad"],  "huge portion of margarine") );                
                    items.push( new Store( "PID13", "Oranges",  5.99,   100,    6,      "Produce",      2.00,       ["mid-size oranges", "They're great for smoothies"],  "Brazilian oranges") );                
                    items.push( new Store( "PID14", "Chicken",  7.49,   125,    12,     "Deli",         1.50,       ["fresh dead chicken", "Without any chemicals"],  "The chicken didn't suffer when she died") );                
                    items.push( new Store( "PID15", "Turkey",   9.99,   62,     12,     "Deli",         1.50,       ["Turkey for 6", "100% canadian turkey"],  "this is perfect for thanks giving") );                
    
                    displayItems();
                    displayCartItems();
                }
    
    
                /* This function displays the items in the table. 
                   To display the items in the table I created the tr, th, and td elements, so then
                   I was appending them to each other and to the table. Pretty cool huh? 
                */
    
                function displayItems() {
                    let dropdown = document.getElementById("displayFilter").value;
    
    
                    let tableBody = document.getElementById("tableBody");
    
                    while (tableBody.hasChildNodes()) {
                        tableBody.removeChild(tableBody.lastChild);
                    }
    
    
                    for (let x = 0; x < items.length; x++) {
                        var tempTR = document.createElement("tr"); 
                        var tempTH = document.createElement("th");
                        var tempTD1 = document.createElement("td");
                        var tempTD2 = document.createElement("td");
                        var tempTD3 = document.createElement("td");
                        var tempTD4 = document.createElement("td");
                        var tempTD5 = document.createElement("td");
                        var tempTD6 = document.createElement("td");
    
    
    
                        if (dropdown == "All") {
                            tempTH.innerHTML = items[x].id;
                            tempTD1.innerHTML = items[x].name;
                            tempTD2.innerHTML = items[x].price;
                            tempTD3.innerHTML = items[x].qtyOnHand;
                            tempTD4.innerHTML = items[x].maxPerCustomer;
                            tempTD5.innerHTML = items[x].category;
    
                            tempTR.appendChild(tempTH);
                            tempTR.appendChild(tempTD1);
                            tempTR.appendChild(tempTD2);
                            tempTR.appendChild(tempTD3);
                            tempTR.appendChild(tempTD4);
                            tempTR.appendChild(tempTD5);
    
                            tableBody.appendChild(tempTR);
    
                            // output.innerHTML += items[x].id + " | " + items[x].name + " | $" + items[x].price +" | " + items[x].qtyOnHand + " | " + items[x].maxPerCustomer + " | " + items[x].category + "<br/>";
                        } else {
                            if (items[x].category == dropdown) {
    
                                tempTH.innerHTML = items[x].id;
                                tempTD1.innerHTML = items[x].name;
                                tempTD2.innerHTML = items[x].price;
                                tempTD3.innerHTML = items[x].qtyOnHand;
                                tempTD4.innerHTML = items[x].maxPerCustomer;
                                tempTD5.innerHTML = items[x].category;
    
                                tempTR.appendChild(tempTH);
                                tempTR.appendChild(tempTD1);
                                tempTR.appendChild(tempTD2);
                                tempTR.appendChild(tempTD3);
                                tempTR.appendChild(tempTD4);
                                tempTR.appendChild(tempTD5);
    
                                tableBody.appendChild(tempTR);
    
                                // output.innerHTML += items[x].id + " | " + items[x].name + " | $" + items[x].price +" | " + items[x].qtyOnHand + " | " + items[x].maxPerCustomer + " | " + items[x].category + "<br/>";
                            }
                        }                   
                        
                    }
    
                }
    
    
                /* This function works the same way as the other one, the only
                   difference is that I'm displaying the cart items in another table.
    
                   It was easier for me to display the items and do the cart calculations
                   in the same function. I hope deduct marks from me :)
                */
    
                function displayCartItems() {
                    let output = document.getElementById("cartOutput");
    
                    var itemSubtotal = 0.0;
                    var shipping = 0.0;
                    var subtotal = 0.0;
                    var estimatedTax = 0.0;
                    var total = 0.0;               
    
                    let tableBody = document.getElementById("cartBody");
    
                    while (tableBody.hasChildNodes()) {
                        tableBody.removeChild(tableBody.lastChild);
                    }
    
    
                    output.innerHTML = "";
    
                    if (cart.length == 0) {
                        output.innerHTML += "No Items in Cart. Add Items to Cart";
                    } else {
                        for (let x = 0; x < cart.length; x++) {
                            var tempTR = document.createElement("tr"); 
                            var tempTH = document.createElement("th");
    
                            var tempTD1 = document.createElement("td");
                            var tempTD2 = document.createElement("td");
                            var tempTD3 = document.createElement("td");
    
                            tempTH.innerHTML = cart[x].id;
                            tempTD1.innerHTML = "$" + cart[x].price;
                            tempTD2.innerHTML = cart[x].quantity;
                            tempTD3.innerHTML = "$" + (cart[x].price * cart[x].quantity).toFixed(2);
    
                            tempTR.appendChild(tempTH);
                            tempTR.appendChild(tempTD1);
                            tempTR.appendChild(tempTD2);
                            tempTR.appendChild(tempTD3);
    
                            tableBody.appendChild(tempTR);
    
                            itemSubtotal += (cart[x].price * cart[x].quantity);
                            shipping += cart[x].shippingCost;
                        }
                    }
    
                    subtotal = itemSubtotal + shipping;
                    estimatedTax = subtotal * 0.14;
                    total = subtotal + estimatedTax;
    
    
                    var tempTRItemSubtotal = document.createElement("tr");
                    var tempTRShipping = document.createElement("tr"); 
                    var tempTRSubtotal = document.createElement("tr"); 
                    var tempTREstimatedTax = document.createElement("tr"); 
                    var tempTRTotal = document.createElement("tr"); 
    
                    var tempTHItemSubtotal = document.createElement("th");
                    var tempTHShipping = document.createElement("th");
                    var tempTHSubtotal = document.createElement("th");
                    var tempTHEstimatedTax = document.createElement("th");
                    var tempTHTotal = document.createElement("th");
    
    
    
                    var tempEmptyTD1 = document.createElement("td");
                    var tempEmptyTD2 = document.createElement("td");
                    var tempEmptyTD3 = document.createElement("td");
                    var tempEmptyTD4 = document.createElement("td");
                    var tempEmptyTD5 = document.createElement("td");
                    var tempEmptyTD6 = document.createElement("td");
                    var tempEmptyTD7 = document.createElement("td");
                    var tempEmptyTD8 = document.createElement("td");
                    var tempEmptyTD9 = document.createElement("td");                
                    var tempEmptyTD10 = document.createElement("td");
                    var tempEmptyTD11 = document.createElement("td");
                    var tempEmptyTD12 = document.createElement("td");
                    var tempEmptyTD13 = document.createElement("td");
                    var tempEmptyTD14 = document.createElement("td");
                    var tempEmptyTD15 = document.createElement("td");
    
                    tempTHItemSubtotal.innerHTML = "Item Subtotal";
                    tempTHShipping.innerHTML = "Estimated Shipping";
                    tempTHSubtotal.innerHTML = "Subtotal";
                    tempTHEstimatedTax.innerHTML = "Estimated Tax";
                    tempTHTotal.innerHTML = "Order Total";
    
                    
                    tempEmptyTD1.innerHTML = "";
                    tempEmptyTD2.innerHTML = "";
                    tempEmptyTD3.innerHTML = "$" + itemSubtotal.toFixed(2);
                    tempEmptyTD3.style = "font-weight: bold; color: grey;";
    
    
                    tempEmptyTD4.innerHTML = "";
                    tempEmptyTD5.innerHTML = "";
                    tempEmptyTD6.innerHTML = "$" + shipping;
                    tempEmptyTD6.style = "font-weight: bold; color: grey;";
    
                    tempEmptyTD7.innerHTML = "";
                    tempEmptyTD8.innerHTML = "";
                    tempEmptyTD9.innerHTML = "$" + subtotal.toFixed(2);
                    tempEmptyTD9.style = "font-weight: bold; color: grey;";
    
                    tempEmptyTD10.innerHTML = "";
                    tempEmptyTD11.innerHTML = "";
                    tempEmptyTD12.innerHTML = "$" + estimatedTax.toFixed(2);
                    tempEmptyTD12.style = "font-weight: bold; color: grey;";
    
                    tempEmptyTD13.innerHTML = "";
                    tempEmptyTD14.innerHTML = "";
                    tempEmptyTD15.innerHTML = "$" + total.toFixed(2);
                    tempEmptyTD15.style = "font-weight: bold;";
    
                    tempTRItemSubtotal.appendChild(tempTHItemSubtotal);
                    tempTRShipping.appendChild(tempTHShipping);
                    tempTRSubtotal.appendChild(tempTHSubtotal);
                    tempTREstimatedTax.appendChild(tempTHEstimatedTax);
                    tempTRTotal.appendChild(tempTHTotal);
    
    
                    tempTRItemSubtotal.appendChild(tempEmptyTD1);
                    tempTRItemSubtotal.appendChild(tempEmptyTD2);
                    tempTRItemSubtotal.appendChild(tempEmptyTD3);
    
                    tempTRShipping.appendChild(tempEmptyTD4);
                    tempTRShipping.appendChild(tempEmptyTD5);
                    tempTRShipping.appendChild(tempEmptyTD6);
    
                    tempTRSubtotal.appendChild(tempEmptyTD7);
                    tempTRSubtotal.appendChild(tempEmptyTD8);
                    tempTRSubtotal.appendChild(tempEmptyTD9);
    
                    tempTREstimatedTax.appendChild(tempEmptyTD10);
                    tempTREstimatedTax.appendChild(tempEmptyTD11);
                    tempTREstimatedTax.appendChild(tempEmptyTD12);
    
                    tempTRTotal.appendChild(tempEmptyTD13);
                    tempTRTotal.appendChild(tempEmptyTD14);
                    tempTRTotal.appendChild(tempEmptyTD15);
    
                    tableBody.appendChild(tempTRItemSubtotal);
                    tableBody.appendChild(tempTRShipping);
                    tableBody.appendChild(tempTRSubtotal);
                    tableBody.appendChild(tempTREstimatedTax);
                    tableBody.appendChild(tempTRTotal);
    
    
    
                }
    
                /* ----------------------------------- Validations ------------------------------------------ */
    
    
                /*
                    This function checks if both the item input
                    and the quantity input are valid.
                */
    
                function validation(){
    
                    if (validateItem() && validateQty()) {
                        return true;  
                    }
                    
                    return false;
    
                }
    
                /*
                    This function returns true or false if the item input is correct or not.
                    Also, changes the validation message and the border color.
                */
    
                function validateItem(){
                    var itemID = document.getElementById("addItemId");
                    var itemMsg = document.getElementById("addIDValidationMessage");
    
                    if (itemID.value.length > 0) {
                        if (itemID.value.indexOf(' ') === -1) {
                            itemMsg.style.color = "black";
                            itemMsg.innerHTML = "";
                            itemID.style.border = "";
                            itemID.style.background = "";
                            return true;
                        } else {
                                itemMsg.style.color = "red";
                                itemMsg.innerHTML = "No spaces allowed";
                                itemID.style.border = "1px solid #dc3545";
                        }
                    } else {
                        itemMsg.style.color = "red";
                        itemMsg.innerHTML = "Field Required";
                        itemID.style.border = "1px solid #dc3545";
                    }
    
                    return false;                        
                }
    
    
                /*
                    This function returns true or false if the quantity input is correct or not.
                    Also, changes the validation message and the border color.
                */
    
                function validateQty(){
                    var itemQty = document.getElementById("addItemQty");
                    var itemQtyMsg = document.getElementById("addQtyValidationMessage");
    
                    if (itemQty.value.length > 0) {
                        if (itemQty.value > 0) {
                            itemQtyMsg.style.color = "black";
                            itemQtyMsg.innerHTML = "";
                            itemQty.style.border = "";
                            itemQty.style.background = "";
                            return true;
                        } else {
                            itemQtyMsg.style.color = "red";
                            itemQtyMsg.innerHTML = "Value must be positive";
                            itemQty.style.border = "1px solid #dc3545";
                        }                            
                    } else {
                        itemQtyMsg.style.color = "red";
                        itemQtyMsg.innerHTML = "Field Required";
                        itemQty.style.border = "1px solid #dc3545";
                    }
    
                    return false;
                }
    
    
                /*
                    This function returns true or false if the review input is correct or not.
                    Also, changes the validation message and the border color.
                */
    
                function validateReviewTextbox(){
                    var reviewID = document.getElementById("reviewId");
                    var reviewMsg = document.getElementById("reviewMessage");
    
                    if (reviewID.value.length > 0) {
                        if (reviewID.value.indexOf(' ') === -1) {
                            reviewMsg.style.color = "black";
                            reviewMsg.innerHTML = "";
                            reviewID.style.border = "";
                            reviewID.style.background = "";
                            return true;
                        } else {
                                reviewMsg.style.color = "red";
                                reviewMsg.innerHTML = "No spaces allowed";
                                reviewID.style.border = "1px solid red";
                        }
                    } else {
                        reviewMsg.style.color = "red";
                        reviewMsg.innerHTML = "Field Required";
                        reviewID.style.border = "1px solid red";
                    }
    
                    return false;                        
                }
    
       
                /* ----------------------------------- Actions ------------------------------------------ */
    
                
                
                /*
                    This function displays the detail in a swal alert
                */            
    
                function itemDetails() {
                    let id = document.getElementById("addItemId").value;
                    var itemID = document.getElementById("addItemId");
                    let itemMsg = document.getElementById("addIDValidationMessage");
                    let details = "";
    
                    if (validateItem()) {
                        itemID.value = "";
                        
                        if (validItemID(id)) {
                            for (let x = 0; x < items.length; x++) {
                                if (items[x].id == id) {
                                    details = "Item Details\n" + "ID: " + items[x].id + "\nProduct: " + items[x].name + "\nPrice: $" + items[x].price + "\nQty Available: " + items[x].qtyOnHand + "\nMax Per Customer: " + items[x].maxPerCustomer + "\nCost of Shipping: $" + items[x].shippingCost + "\n\n" +
                                    "Description: \n" + items[x].description + "\n\nReviews\n";
                                    for (let y = 0; y < items[x].reviews.length; y++) {
                                        details += "- " + items[x].reviews[y] + "\n";
                                    }
                                    swal(items[x].name + " Details", details);
                                }
                            }   
                        } else {
                            toastr.error("This items does not exists", 'Error!')
    
                        }
                    }
    
                }
    
                /*
                    This function returns true or false if the ID is in the array.
                */
    
                function validItemID(id) {
                    for (let x = 0; x < items.length; x++) {
                        if (items[x].id == id) {
                            return true;
                        }                     
                    }
                    return false;
                }
    
                /*
                    This function adds a new item to the cart.
                */
    
                function addItem() {
                    let id = document.getElementById("addItemId").value;
                    let qty = parseInt(document.getElementById("addItemQty").value);
                    let item = isItemOnStore(id);
                    let cartItem = isItemOnCart(id);
    
                    if (validation()) { // validate if the inputs are correct
                        if (item != "") { // validate if the ID is in store
                            if (qty <= item.qtyOnHand) { // validate if the qty is greater than qtyOnHand
                                
                                if (qty > item.maxPerCustomer) { // validate that qty doesn't exceeds qtyOnHand
                                    qty = item.maxPerCustomer;
                                    // alert("Quantity exceeds the max per customer, new quantity = " + qty);
                                    toastr.info("Quantity exceeds the max per customer, new quantity = " + qty, 'Wow!', {timeOut: 6000} )
    
                                }
                                if (cartItem == "") { // validate if the item is not in the cart
                                    // alert("Item added to cart");
                                    toastr.success('Item added to cart', 'Done!')
                                    document.getElementById("addItemId").value = "";
                                    document.getElementById("addItemQty").value = "";
                                    cart.push( new Cart(id, item.price, qty, item.shippingCost));
                                    item.qtyOnHand -= qty;
                                    displayItems();
                                    displayCartItems();
                                } else {
                                    // alert("Item is already in cart");
                                    toastr.info("Item is already in cart, quantity updated", "Done!");
                                    document.getElementById("addItemId").value = "";
                                    document.getElementById("addItemQty").value = "";
                                    cartItem.quantity += qty;
                                    item.qtyOnHand -= qty;
                                    displayItems();
                                    displayCartItems();
                                }
                            } else {
                                document.getElementById("addItemId").value = "";
                                document.getElementById("addItemQty").value = "";
                                // alert("We don't have enough quantity on hand");
                                toastr.error("We don't have enough quantity on hand", 'Error!')
    
                            }
                        } else {
                            document.getElementById("addItemId").value = "";
                            document.getElementById("addItemQty").value = "";                        
                            // alert("Enter a valid ID");
                            toastr.error("Enter a valid ID", 'Error!')
    
                        }
                    }
    
                }
    
                /*
                    This function checks if the item is on store, if it is returns the object,
                    if not, return an empty string. Don't ask why, I just didn't want to return true or false.
                */
    
                function isItemOnStore(id) {
                    for (let x = 0; x < items.length; x++) {
                        if (items[x].id == id){
                            return items[x];
                        }
                        
                    }
                    
                    return "";
                }
    
                /*
                    This function is the same as the last one, instead I search in the cart array.
                */            
    
                function isItemOnCart(id) {
                    for (let x = 0; x < cart.length; x++) {
                        if (cart[x].id == id){
                            return cart[x];
                        }
                        
                    }
    
                    return "";
                }
    
                /*
                    This function removes an item from the cart array.
                */
    
                function removeItem() {
                    let id = document.getElementById("addItemId").value;
                    let item = isItemOnStore(id);
                    let cartItem = isItemOnCart(id);
    
    
                    if (validateItem()) { // validate if the input is correct
                        if (cartItem !== "") { // validate if the item is in the cart
                            cart.splice(cart.indexOf(cartItem),1);
    
                            // Reset store stock
                            item.qtyOnHand += cartItem.quantity;
    
                            displayItems();
                            displayCartItems();
                            toastr.success('Item has been removed from cart.', 'Done!')
    
                        } else {
                            // alert("Item is not in cart");
                            toastr.error('Item is not in cart.', 'Error!')
    
                        }
                    }
                }
    
                /*
                    This function adds a review to an item.
    
                */            
    
                function addReview() {
                    let id = document.getElementById("reviewId").value;
                    let review = document.getElementById("reviewDesc");
                    let item = isItemOnStore(id);     
    
                    if (validateReviewTextbox()) { // validate if the input is correct
                        if (item !== "") { // validate if the item is in the store
                            if (review.value.length > 0) { // validate the review txtbox has data in it
                                
                                item.reviews.push(review.value);
                                document.getElementById("reviewId").value = "";
                                document.getElementById("reviewDesc").value = "";
                                // alert("Review added");
                                toastr.success('Review added.', 'Done!')
                                review.style.border = "";
    
    
    
    
                            } else {
                                // alert("Review field required");
                                review.style.border = "1px solid red";
    
                            }
    
                        } else {
                            // alert("Item is not in store");
                            toastr.error('Item is not in store.', 'Error!')
    
                            document.getElementById("reviewId").value = "";
                        }
                    }
    
    
                }