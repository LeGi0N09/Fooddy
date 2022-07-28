const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const tablenumber = urlParams.get('tablenumber')

load = () => {
    $.post(
        '../admin/php/tablefood.php',
        { tablenumber },
        (data, response) => {
            if (response === 'success') {
                data = JSON.parse(data)
                var table = `
                    <h1>Table ${tablenumber}</h1>
                    <table class="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Food Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                `;
                grandtotal = 0
                data.forEach((ele) => {
                    table += `
                    <tr>
                        <th scope="row">${ele.fooditem}</th>
                        <td>${ele.foodprice}</td>
                        <td>${ele.quantity}</td>
                        <td>${ele.total}</td>
                    </tr>
                    `
                    grandtotal += Number.parseInt(ele.total)
                })

                table += '</table>'
                document.getElementById('table').innerHTML = table
                document.getElementById('totalbill').innerHTML = grandtotal

            }
        }
    )
}

resetDetails = () => {
    if (confirm("Want to reset this table")) {
        $.post(
            '../admin/php/resettable.php',
            { tablenumber },
            (data, response) => {
                if (response === 'success') {
                    load()
                }
            }
        )
    }
}

bill = `window.location = 'bill.html?tablenumber=${tablenumber}'`
document.getElementById('makebill').setAttribute('onclick', bill)

load()