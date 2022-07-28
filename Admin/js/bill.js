const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const tablenumber = urlParams.get('tablenumber')
$('#tableid').html(tablenumber)

load = () => {
    $.post(
        '../admin/php/tablefood.php',
        { tablenumber },
        (data, response) => {
            if (response === 'success') {
                data = JSON.parse(data)
                var table = `
                    <table class="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Food Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                `;
                var subtotal = 0
                var i =1
                data.forEach((ele) => {
                    table += `
                        <tr>
                            <td class="col-1">${i}</td>
                            <th scope="row">${ele.fooditem}</th>
                            <td class="col-1">${ele.foodprice}</td>
                            <td class="col-1">${ele.quantity}</td>
                            <td class="col-1">${ele.total}</td>
                        </tr>
                    `
                    subtotal += Number.parseInt(ele.total)
                    i++
                })
                table += '</table>'
                document.getElementById('table').innerHTML = table
                $('#subtotal').html(subtotal)
                $('#tax').html(subtotal*8/100)
                $('#total').html(parseFloat(subtotal+(subtotal*8/100)).toFixed(2));
            }
        }
    )
}


load()