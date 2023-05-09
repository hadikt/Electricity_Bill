let btns = document.querySelector("#sub")
let input = document.querySelector("#input")
let consumnum = document.querySelector("#second")
// let first = document.querySelector('#first')
// let second = document.querySelector('#seconds')
let output = document.querySelector(".output")
let user = document.querySelector(".curnt")
let pre = document.querySelector(".pre")


class consumer {
    constructor(name, consumer_address, consumer_number,) {
        this.name = name
        this.consumer = consumer_address
        this.consumernum = consumer_number

    }
    
}
class electricity extends consumer {
    constructor(name, consumer_address, consumer_number, currentunit, perivousunit, id, surcharge, tarif, deposit) {
        super(name, consumer_address, consumer_number)
        this.currentunit = currentunit
        this.perivousunit = perivousunit
        this.id = id
        this.surcharge = surcharge
        this.tarif = tarif
        this.deposit = deposit

    }


}

let con = new consumer()
let ece = new electricity("", "", "", 10000, 3000, "ks3134324", 1, 2, 5.2)
// ece.condition()
btns.addEventListener('click', () => {
    output.innerText = ""
    let div = document.createElement('div')
    div.className = "out"

    let first = document.createElement('p')
    first.className = "first"


    let sec = document.createElement('p')
    sec.className = "sec"
    let sur = document.createElement('p')
    let thank = document.createElement('h2')
thank.className="thank"
    sur.className = "sur"
    let tarif = document.createElement('h1')
    tarif.className = "trf"
    let deposit = document.createElement('p')
    deposit.className = "dst"
    let amount = document.createElement('p')
    let ele = document.createElement('p')
    ele.className="eceused"
    amount.className="amt"
    first.innerText = `names :${input.value}`
    sec.innerText = `number :${consumnum.value}`
    sur.innerText = `surcharge : 1`
    tarif.innerText = `payment detalis    `
    deposit.innerText = `deposit : 5`
    thank.innerText="Thank You"
    // head.innerText="fshgfghgjdfd"
    ele.innerText = `eletricity used : ${condition()}`
        amount.innerText = `Total : ${ condition()  + ece.deposit + ece.surcharge}
`
    //   totals.innerText = `total :${ece.currentunit-perivousunit}`
    div.appendChild(tarif)
    output.appendChild(div)
    div.appendChild(first)
    div.appendChild(sec)
    div.appendChild(sur)
    div.appendChild(deposit)
    div.appendChild(ele)
    div.appendChild(amount)
    div.appendChild(thank)
    // div.appendChild()

    // console.log(user.value)
})
function condition() {

    let blue = user.value
    let red = pre.value
    let units = `${blue - red}`


    if (units > 0 && units <= 350) {
        return units * 6.60
    }
    else if (units > 0 && units <= 400) {
        return units * 6.90
    } else if (units > 0 && units <= 500) {
        return units * 7.10
    } else if (units > 500) {
        return units * 7.90

    }
}