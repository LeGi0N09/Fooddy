load = () => {
    $.get(
        '../admin/php/fooditems.php',
        (data, response) => {
            if (response === 'success') {
                data = JSON.parse(data)
                var table = `
                    <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Food Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Edit/Delete</th>
                        </tr>
                    </thead>
                `

                data.forEach(ele => {
                    table += `
                        <tr>
                            <td>${ele.name}</td>
                            <td>${ele.price}</td>
                            <td>
                                <a href="editfood.html?id=${ele.id}"><img src="../admin/assests/edit.svg" alt="" /><a>
                                <img
                                    src="../admin/assests/delete.svg"
                                    class="ms-3"
                                    alt=""
                                    onclick="deleteFoodItem(${ele.id})"
                                />
                            </td>
                        </tr>
                    `
                })

                table += `</table>`
                document.getElementById('table').innerHTML = table
            } else {
                alert('error')
            }
        }
    )
}

deleteFoodItem = (id) => {
    $.post(
        '../admin/php/deletefooditem.php',
        { id },
        (data, response) => {
            if (response === 'success') {
                load()
            } else {
                alert('error')
            }
        }
    )
}

$("form").submit(
    (event) => {
        event.preventDefault()
        var name = $('#foodName').val()
        var price = $('#foodPrice').val()
        $("#foodName").val("");
        $("#foodPrice").val("");

        $.post(
            '../admin/php/addfooditem.php',
            { name, price },
            (data, response) => {
                if (response === 'success') {
                    load()
                } else {
                    alert('error')
                }
            }
        )

    }
);

load()