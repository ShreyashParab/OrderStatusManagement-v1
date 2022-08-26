let orderStatusGreen = false

let orderPlaced = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn1').classList.remove('btn-warning')
            document.getElementById('order-status-btn1').classList.add('btn-success')
            document.getElementById('order-status-btn1').style.color = 'aliceblue'
            resolve()
        },1000)
    })
}

let receivedOrder = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn2').classList.remove('btn-info')
            document.getElementById('order-status-btn2').classList.add('btn-success')
            document.getElementById('order-status-btn2').style.color = 'aliceblue'
            resolve()
        },2000)
    })
}
let sauceAdded = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn3').classList.remove('btn-danger')
            document.getElementById('order-status-btn3').classList.add('btn-success')
            document.getElementById('order-status-btn3').style.color = 'aliceblue'
            resolve()
        },10000)
    })
}

let firstLayerChesse = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn4').classList.remove('btn-warning')
            document.getElementById('order-status-btn4').classList.add('btn-success')
            document.getElementById('order-status-btn4').style.color = 'aliceblue'
            resolve()
        },5000)
    })
}

let toppingsAdded = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn5').classList.remove('btn-info')
            document.getElementById('order-status-btn5').classList.add('btn-success')
            document.getElementById('order-status-btn5').style.color = 'aliceblue'
            resolve()
        },12000)
    })
}

let secondLayerChesse = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn6').classList.remove('btn-danger')
            document.getElementById('order-status-btn6').classList.add('btn-success')
            document.getElementById('order-status-btn6').style.color = 'aliceblue'
            resolve()
        },5000)
    })
}

let pizzaBaked = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn7').classList.remove('btn-warning')
            document.getElementById('order-status-btn7').classList.add('btn-success')
            document.getElementById('order-status-btn7').style.color = 'aliceblue'
            resolve()
        },15000)
    })
}

let oreganoAdded = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn8').classList.remove('btn-info')
            document.getElementById('order-status-btn8').classList.add('btn-success')
            document.getElementById('order-status-btn8').style.color = 'aliceblue'
            resolve()
        },8000)
    })
}

let packageRecievedCounter = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.getElementById('order-status-btn9').classList.remove('btn-danger')
            document.getElementById('order-status-btn9').classList.add('btn-success')
            document.getElementById('order-status-btn9').style.color = 'aliceblue'
            resolve()
        },2000)
    })
}

function executeOrder(){
    let orderId = document.getElementById('orderId').value
    let validationOrderId = /^[0-9a-zA-Z]+$/
    if(orderStatusGreen == true){
        document.getElementById('order-status-btn1').classList.add('btn-warning')
        document.getElementById('order-status-btn2').classList.add('btn-info')
        document.getElementById('order-status-btn3').classList.add('btn-danger')
        document.getElementById('order-status-btn4').classList.add('btn-warning')
        document.getElementById('order-status-btn5').classList.add('btn-info')
        document.getElementById('order-status-btn6').classList.add('btn-danger')
        document.getElementById('order-status-btn7').classList.add('btn-warning')
        document.getElementById('order-status-btn8').classList.add('btn-info')
        document.getElementById('order-status-btn9').classList.add('btn-danger')
        document.getElementById('order-status-btn10').classList.add('btn-warning')
        document.getElementById('thankyouMsg').style.display = 'none'

        orderId = document.getElementById('orderId').value
        if(orderId && orderStatusGreen)
        {
            orderStatusGreen = false
            document.getElementById('invalid-orderid').style.display = 'none'
        }
        else{
            document.getElementById('invalid-orderid').style.display = 'block'
            document.getElementById('orderIdDisplay').innerText = ''
        }

    }
    if(orderId && orderId.match(validationOrderId) && orderStatusGreen == false){
    document.getElementById('orderIdDisplay').innerText = `Order status for ID : ${orderId}`
    document.getElementById('orderId').value = ''   
    orderPlaced()
    .then(receivedOrder)
    .then(sauceAdded)
    .then(firstLayerChesse)
    .then(toppingsAdded)
    .then(secondLayerChesse)
    .then(pizzaBaked)
    .then(oreganoAdded)
    .then(packageRecievedCounter)
    .then(()=>{
        document.getElementById('order-status-btn10').classList.remove('btn-warning')
        document.getElementById('order-status-btn10').classList.add('btn-success')
        document.getElementById('order-status-btn10').style.color = 'aliceblue'
        document.getElementById('thankyouMsg').style.display = 'block'
        orderStatusGreen = true
    })
    .catch((err)=>console.log(err))
    }
    else{
        document.getElementById('invalid-orderid').style.display = 'block'
    }
    
    
 }
 