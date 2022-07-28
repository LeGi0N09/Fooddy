const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const tablenumber = urlParams.get('tablenumber')
var fooditems = {}
var myModal = new bootstrap.Modal(document.getElementById('AddFoodItem'))
const searchfood = document.getElementById('search')

load = () => {
    $.post(
        '../manager/php/tablefood.php',
        { tablenumber },
        (data, response) => {
            if (response === 'success') {
                data = JSON.parse(data)
                var table = `
                    <table class="table table-hover w-100 mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No</th>
                                <th scope="col">Food Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                `;
                grandtotal = 0
                i = 1
                data.forEach((ele) => {
                    if (ele.quantity <= 0) {
                        deletefromlist(ele.id)
                        return
                    }
                    table += `
                    <tr>
                        <td>${i}</td>
                        <th scope="row">${ele.fooditem}</th>
                        <td>${ele.foodprice}</td>
                        <td class="h-100 d-flex justify-content-around"><button class="btn btn-danger py-0" onclick='decrement(${ele.id})'>-</button>${ele.quantity}<button class="btn btn-success py-0" onclick='increment(${ele.id})'>+</button></td>
                        <td>${ele.total}</td>
                        <td><div class="m-0 p-0" onclick="deletefromlist(${ele.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="23" height="23"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e74c3c"><path d="M130.40408,56.16327h-88.80816c-0.96084,-0.08151 -1.91289,0.23584 -2.63265,0.87755c-0.70765,0.67985 -1.03576,1.66419 -0.87755,2.63265l9.12653,79.50612c1.07015,8.76566 8.54501,15.33447 17.37551,15.26939h44.22857c9.0789,0.12923 16.7265,-6.75362 17.55102,-15.79592l7.54694,-79.33061c0.04677,-0.85097 -0.2726,-1.68132 -0.87755,-2.28163c-0.71976,-0.64171 -1.67182,-0.95906 -2.63265,-0.87755zM119.34694,138.30204c-0.55157,5.34456 -5.16192,9.34019 -10.53061,9.12653h-44.22857c-5.2721,0.21399 -9.80403,-3.70343 -10.3551,-8.95102l-8.77551,-75.29388h81.08571zM143.21633,33.34694h-36.1551v-5.61633c0.09687,-2.69772 -0.92009,-5.31653 -2.81222,-7.24186c-1.89213,-1.92533 -4.49286,-2.98768 -7.19186,-2.93773h-22.11429c-2.69899,-0.04994 -5.29972,1.0124 -7.19186,2.93773c-1.89213,1.92533 -2.90909,4.54414 -2.81222,7.24186v5.61633h-36.1551c-1.93863,0 -3.5102,1.57157 -3.5102,3.5102c0,1.93863 1.57157,3.5102 3.5102,3.5102h114.43265c1.93863,0 3.5102,-1.57157 3.5102,-3.5102c0,-1.93863 -1.57157,-3.5102 -3.5102,-3.5102zM71.95918,33.34694v-5.61633c-0.10734,-0.83501 0.16562,-1.67413 0.74367,-2.28619c0.57806,-0.61206 1.40022,-0.93248 2.24,-0.87299h22.11429c0.83978,-0.05949 1.66194,0.26093 2.24,0.87299c0.57806,0.61206 0.85101,1.45118 0.74367,2.28619v5.61633z"></path></g></g></svg>
                        </div></td>
                    </tr>
                    `
                    i++
                    grandtotal += Number.parseInt(ele.total)
                })

                table += `</table>
                    <div class="text-end h5">Total : ${grandtotal}</div>
                `
                document.getElementById('table').innerHTML = table
            }
        }
    )
}

increment = (id) => {
    $.post(
        '../manager/php/increment.php',
        { id },
        (data, response) => {
            if (response === 'success') {
                load()
            }
        }
    )
}

decrement = (id) => {
    $.post(
        '../manager/php/decrement.php',
        { id },
        (data, response) => {
            if (response === 'success') {
                load()
            }
        }
    )
}

deletefromlist = (id) => {
    $.post(
        '../manager/php/delete.php',
        { id },
        (data, response) => {
            if (response === 'success') {
                load()
            }
        }
    )
}

loadfooditems = () => {
    $.get(
        '../manager/php/fooditems.php',
        (data, response) => {
            if (response === 'success') {
                data = JSON.parse(data)
                fooditems = data
                htmlwriteup = ``
                data.forEach(food => {
                    htmlwriteup += `
                        <div class="col-auto m-2 btn rounded-pill bg-primary bg-gradient text-white" onclick="addFoodItem(${food.id})">
                            ${food.name}
                        </div>
                    `
                });
                $('#fooditems').html(htmlwriteup)
                // document.getElementById('footitems').innerHTML = htmlwriteup
            }
        }
    )
}

// $sql = sprintf($format, $_POST['foodid'],$_POST['fooditem'],$_POST['foodprice'],1,$_POST['foodprice'],$_POST['tablenumber'],0);

addFoodItem = (id) => {
    food = fooditems.find((item) => item.id == id)
    foodid = food.id
    fooditem = food.name
    foodprice = food.price

    $.post(
        '../manager/php/addfooditem.php',
        { foodid, fooditem, foodprice, tablenumber },
        (data, response) => {
            if (response === 'success') {
                load()
            }
        }
    )

    // To remove model from the page
    $('#search').val("")
    searchFood()
    $('.modal-backdrop').remove();
    myModal.hide();
}

searchFood = () => {
    keyword = $('#search').val().toUpperCase()
    if (keyword.length == 0) {
        htmlwriteup = ``
        fooditems.forEach(food => {
            htmlwriteup += `
                        <div class="col-auto m-2 btn rounded-pill bg-primary bg-gradient text-white" onclick="addFoodItem(${food.id})">
                            ${food.name}
                        </div>
                    `
        });
        $('#fooditems').html(htmlwriteup)
    } else {
        htmlwriteup = ``
        fooditems.forEach(food => {
            let foodname = food.name
            if (foodname.toUpperCase().indexOf(keyword) !== -1) {
                htmlwriteup += `
                        <div class="col-auto m-2 btn rounded-pill bg-primary bg-gradient text-white" onclick="addFoodItem(${food.id})">
                            ${food.name}
                        </div>
                    `
            }
        });
        $('#fooditems').html(htmlwriteup)
    }
}

load()
loadfooditems()
$('#tablenumber').html(`Table ${tablenumber}`)