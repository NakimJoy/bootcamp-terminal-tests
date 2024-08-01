export default function findItemsOver(products, threshold) {
    const itemsOverThreshold = [];
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].qty > threshold) {
            itemsOverThreshold.push(products[i]);
        }
    }
    
    return itemsOverThreshold;
}