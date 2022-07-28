load = () => {
    $.get(
        '../cook/php/tablefood.php',
        (data, response) => {
            if (response === 'success') {
                data = JSON.parse(data)
                tablenumber = 0
                pendingSectionString = ""
                data.forEach((ele) => {
                    if (ele.tablenumber != tablenumber) {
                        if(tablenumber>0){
                            pendingSectionString += `
                                    </div>
                                </div>
                            </div>
                            `
                        }
                        tablenumber = ele.tablenumber
                        pendingSectionString += `
                        <div class="mt-3 col-3">
                            <div class="card p-0">
                                <h5 class="card-header p-3">Table ${ele.tablenumber}</h5>
                            <div class="card-body">
                        `
                    }
                    pendingSectionString += `
                        <div class="mb-2 d-flex justify-content-between">
                            <div>
                                ${ele.fooditem} ( ${ele.quantity} )
                            </div>
                            <div>
                                <img src="./assests/tick.svg" alt="" onclick="deleteFoodItem(${ele.id})" />
                            </div>
                        </div>
                    `
                })
                pendingSectionString += `</div></div>`
                $('#PendingSection').html(pendingSectionString)
            }
        }
    )
}

deleteFoodItem = (id) => {
    $.post(
        '../cook/php/changeStatus.php',
        {id},
        (data, response)=>{
            if(response === 'success'){
                load()
            }
        }
    )
}

load()