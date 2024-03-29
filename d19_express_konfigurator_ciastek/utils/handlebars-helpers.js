const handlebarsHelpers = {
    findPrice: (entries, selectedItem) => {
        // console.log({entries, selectedItem});
        const found = entries.find(el => el[0] === selectedItem);

        if(!found) {
            throw new Error(`Cannot find price of "${selectedItem}"`);
        }

        const [, price] = found;
        return price;
    },

    pricify: price => price.toFixed(2),

    isNotInArray: (array, element) => {
        return !array.includes(element);
    }
};

module.exports = {
    handlebarsHelpers
}; 