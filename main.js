// Buy chocolate

const buyChocolate = () => {
    const candyStep1 = { type: "Milk chocolate" }

    return candyStep1

}

// Add mint flavoring

const addFlavoring = (flavorType) => {
    flavorType.flavor = "Mint"


    return flavorType
}

const newCandy = buyChocolate()
const newCandyFlavor = addFlavoring(newCandy)


// Combine chocolate and mint

const makeBarkMixture = (flavor) => {
    
    if (newCandy.flavor === "Mint") {
        flavor.mixed = true

    } else {
        flavor.mixed = false
    }
    return flavor

}

const newCandyStep2 = buyChocolate()
const newMixedCandy = makeBarkMixture(newCandyStep2)

console.log(newMixedCandy)


// // Bake the mixture

const bakeCandy = (doNext) => {

    if (newCandyStep2.mixed === true) {
        doNext.baked = true

    } else {
        doNext.baked = false
    }
    return doNext
}
const newCandyStep3 = buyChocolate()
const newBakedCandy = bakeCandy(newCandyStep3)

console.log(newBakedCandy)





// // Break into 6 pieces

const breakBark = (mixedCandy) => {

    if (newCandyStep3.baked === true)
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]



    if (newCandyStep3.baked === false) {
        return []
    }

}

const newCandyStep4 = buyChocolate()
const candyPieces = breakBark(newCandyStep4)

console.log(candyPieces)





