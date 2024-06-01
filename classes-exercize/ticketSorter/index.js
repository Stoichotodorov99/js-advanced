function ticketSorter(tickets, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];

    tickets.map((el) => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));

    })

    result.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        }
        else {
            return a[sorting].localeCompare(b[sorting]);

        }
    });


}

ticketSorter(['Philadelphie|92.30|avaible', 'New York|77.49|avaible',
    'Boston|49.16|sold', 'Kanzas|144.55|sold'], 'destination');