const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

load = () => {
    $.post(
        '../admin/php/editfooditemshow.php',
        { id },
        (data, response) => {
            if (response === 'success') {
                data = JSON.parse(data)[0]
                // document.getElementById('foodName').value = data.name
                $('#foodName').val(data.name)
                $('#foodPrice').val(data.price)
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
        $.post(
            '../admin/php/updatefooditem.php',
            { id, name, price },
            (data, response) => {
                if (response === 'success') {
                    window.location.replace("../admin/fooditem.html");
                } else {
                    alert('error')
                }
            }
        )
    }
);

load()