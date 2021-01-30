// identifing, condition apply and etc

function handleTicketClassChange(ticket, isIncrease) {
    const ticketClassInput = document.getElementById(ticket + '-count');
    const ticketClassCount = parseInt(ticketClassInput.value);

    let ticketClassNewCount = ticketClassCount;

    if (isIncrease == true) {
        ticketClassNewCount = ticketClassCount + 1;
    }
    if (isIncrease == false && ticketClassCount > 0) {
        ticketClassNewCount = ticketClassCount - 1;
    }
    ticketClassInput.value = ticketClassNewCount;
    let ticketClassTotal = 0;
    if (ticket == 'first-class') {
        ticketClassTotal = ticketClassNewCount * 150;
    }
    if (ticket == 'economy-class') {
        ticketClassTotal = ticketClassNewCount * 100;
    }
    document.getElementById(ticket + '-total').innerText = '$' + ticketClassTotal;
    calculateTotal();
}

// Price calculation

function calculateTotal() {
    const firstClassCount = getInput('first-class');
    const economyClassCount = getInput('economy-class');
    const totalCost = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = '$' + totalCost;

    const tax = Math.round(totalCost * 0.1);
    document.getElementById('tax-price').innerText = '$' + tax;

    const grandTotal = totalCost + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal
}
function getInput(ticket) {
    const ticketClassInput = document.getElementById(ticket + '-count');
    const ticketClassCount = parseInt(ticketClassInput.value);
    return ticketClassCount;
}

// bookin info showoff

document.getElementById("book-now").addEventListener('click',function(){

    const offBookingForm = document.getElementById('main-part');
    offBookingForm.style.display = 'none';
    const headerArea = document.getElementById('header-area');
    headerArea.style.display = 'none';
    const bookedInfo = document.getElementById('booked-info');
    bookedInfo.style.display = 'block';

    showOff('fly-from', 'flied-from');
    showOff('fly-to', 'flied-to');
    showOff('departure-date', 'departured-to');
    showOff('return-date', 'returned-to');
    showOffPrice('first-class-total', 'first-class-ticket');
    showOffPrice('economy-class-total', 'economy-class-ticket');
    showOffPrice('grand-total','grand-total-price');
})

function showOff(set,get){
    const flyFrom = document.getElementById(set).value;
    document.getElementById(get).innerText = flyFrom;
}
function showOffPrice(set,get){
    const flyFrom = document.getElementById(set).innerText;
    document.getElementById(get).innerText = flyFrom;
}

