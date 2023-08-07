// If you buy less than 100 tickets, each ticket price will be 100. If you buy more than 100 but less than 200 tickets, the first 100 ticket price will be 100/ticket but rest will 90/ticket. If you purchase more than 200 ticket, first 100 ticket will be 100/ticket, next 100 will be 90/ticket and the rest will be 70/ticket.



function ticketPrice (ticketNumber){
    const first100Ticket = 100;
    const second100Ticket = 90;
    const restTicket = 70;
    if (ticketNumber <= 100){
        const first100price = ticketNumber * first100Ticket;
        return first100price;
    }
    else if (ticketNumber <= 200){
        const first100price = 100 * first100Ticket;
        const restTicketQuantity = ticketNumber - 100;
        const restTicketPrice = restTicketQuantity * second100Ticket;
        const totalTicketPrice = restTicketPrice + first100price;
        return totalTicketPrice;
    }
    else{
        const first100Price = 100 * first100Ticket;
        const second100Price = 100 * second100Ticket;
        const restTicketQuantity = ticketNumber - 200;
        const restTicketPrice = restTicketQuantity * restTicket;
        const totalTicketPrice = first100Price + second100Price + restTicketPrice;
        return totalTicketPrice;
    }
}

let ticketBought = 210;
let ticketTotalCost = ticketPrice(ticketBought);
console.log(ticketTotalCost);