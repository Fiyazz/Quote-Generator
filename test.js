const quotes = [
    "Live in love.",
    "Kahlil Gibran.",
    "Mahmoud Darwish.",
    "Reggea John Page.",
    "Love costs a dime.",
    "This love is on fire.",
    "I know life is a test.",
    "Thus with my lips have I denounced you, while my heart, bleeding within me, called you tender names.",
    "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
    "One hour devoted to the pursuit of beauty and love is worth a century full of glory given by the frightened weak to the strong.",
    "Yesterday, I was rich in happiness. Today, I am poor in Gold."

]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
        
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
        
    }
    
}