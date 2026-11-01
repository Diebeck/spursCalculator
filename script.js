const sell = {
    "Netherite Ingot": 64,
    "Gold Ingot": 1 / (9*9),
    "Zinc Ingot": 1 / (14*9),
    "Copper Ingot": 1 / (14*9),
    "Iron Ingot": 1 / (12*9),
    "Steel Ingot": 2 / (8*9),
    "Platinum Ingot": 1 / (2*9),
    "Emerald": 10 / (1*9),
    "Diamond": 10,
    "Petrolium Bucket": 4,
    "Bauxite": 1 / 64,
    "Pitchblende": 2 / 64
}
const buy = {
    "Netherite scrap": 64,
    "Gold Ingot": 1 / (2*9),
    "Zinc Ingot": 1 / (3*9),
    "Copper Ingot": 1 / (3*9),
    "Iron Ingot": 1 / (4*9),
    "Steel Ingot": 1 / (3*9),
    "Platinum Ingot": 3 / (2*9),
    "Bronze Ingot": 1 / (1*9),
    "Diamond": 20,
    "Petrolium Bucket": 12,
    "Brass Ingot": 2 / (3*9),
    "Andesite Alloy": 1 / (18*9)
}

console.log("Sell value:")
console.table(sell)
console.log("Price:")
console.table(buy)

const sellType = document.getElementById("sellType")
for (const item in sell) {
    const opt = document.createElement("option")
    opt.innerText = item
    opt.value = item
    sellType.appendChild(opt)
}

const buyType = document.getElementById("buyType")
for (const item in buy) {
    const opt = document.createElement("option")
    opt.innerText = item
    opt.value = item
    buyType.appendChild(opt)
}

const sellAmount = document.getElementById("sellAmount")
sellAmount.addEventListener("change", () => {
    spurAmount.value = sellAmount.value * sell[sellType.value]
    buyAmount.value = spurAmount.value / buy[buyType.value]
})

const spurAmount = document.getElementById("spurAmount")
spurAmount.addEventListener("change", () => {
    sellAmount.value = spurAmount.value / sell[sellType.value]
    buyAmount.value = spurAmount.value / buy[buyType.value]
})

const buyAmount = document.getElementById("buyAmount")
buyAmount.addEventListener("change", () => {
    spurAmount.value = buyAmount.value * buy[buyType.value]
    sellAmount.value = spurAmount.value / sell[sellType.value]
})

sellType.addEventListener("change", () => {
    sellAmount.value = spurAmount.value / sell[sellType.value]
})
buyType.addEventListener("change", () => {
    buyAmount.value = spurAmount.value / buy[buyType.value]
})