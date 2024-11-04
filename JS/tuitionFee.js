function calculateDiscount(){
    const name = document.getElementById("name").value;
    const fees = document.getElementById("fees").value;
    const age = document.getElementById("age").value;

    let discountRate;

    if (fees > 50000 && age > 21) {
        discountRate = 0.15;
    } else if (fees > 40000 && age > 20) {
        discountRate = 0.10;
    } else if (fees > 30000 && age > 19) {
        discountRate = 0.05;
    } else {
        discountRate = 0.02;
    }

    const discountAmount = fees * discountRate;
    const payableFees = fees - discountAmount;

    console.log("Name: ", name);
    console.log("Discount Amount: ", discountAmount);
    console.log("Payable Tuition Fees: ", payableFees);
}