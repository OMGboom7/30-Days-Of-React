// 1. Declare an _empty_ array;
let empty_arr = [];
// 2. Declare an array with more than 5 number of elements
let nine_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 3. Find the length of your array
console.log('---3---')
console.log(nine_arr.length)
// 4. Get the first item, the middle item and the last item of the array
console.log('---4---')
let first, middle, last;
first = 0;
middle = Math.floor(nine_arr.length / 2);
last = nine_arr.length - 1;
console.log(nine_arr[first], nine_arr[middle], nine_arr[last])
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
console.log('---5---')
let mixedDataTypes = [
    1,
    '22',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    true,
    undefined,
    null,
    {name: 'alice'},
]
console.log(mixedDataTypes.length)
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
]
// 7. Print the array using _console.log()_
console.log('---7---')
console.log(itCompanies)
// 8. Print the number of companies in the array
console.log('---8---')
console.log(itCompanies.length)
// 9. Print the first company, middle and last company
console.log('---9---')
first = 0;
middle = Math.floor(itCompanies.length / 2);
last = itCompanies.length - 1;
console.log(itCompanies[first], itCompanies[middle], itCompanies[last])
// 10. Print out each company
console.log('---10---')
for (let i in itCompanies) {
    console.log(itCompanies[i])
}
// 11. Change each company name to uppercase one by one and print them out
console.log('---11---')
for (let itCompany of itCompanies) {
    console.log(itCompany.toUpperCase());
}
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log('---12---')
let sentence = itCompanies.slice(0, -1).join() + ` and ${itCompanies[itCompanies.length - 1]}`;
console.log(`${sentence} are big IT companies`);
// 13. Check if a certain company exists in the itCompanies array. If it exists return the company else return a company is _not found_
console.log('---13---')
const certain_company = 'aaaa'
if (itCompanies.includes(certain_company)) {
    console.log(certain_company)
} else {
    console.log('not found')
}
// 14. Filter out companies which have more than one 'o' without the filter method
console.log('---14---')
let filterdCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i];
    let oCount = 0;

    for (let j = 0; j < company.length; j++) {
        if (company[j] === 'o') {
            oCount++;
        }
    }

    if (oCount > 1) {
        filterdCompanies.push(company);
    }
}
console.log(filterdCompanies)
// 15. Sort the array using _sort()_ method
console.log('---15---')
itCompanies.sort();
console.log(itCompanies)
// 16. Reverse the array using _reverse()_ method
console.log('---16---')
console.log(itCompanies.reverse())
// 17. Slice out the first 3 companies from the array
console.log('---17---')
console.log(itCompanies.slice(0, 3))
// 18. Slice out the last 3 companies from the array
console.log('---18---')
console.log(itCompanies.slice(-3))
// 19. Slice out the middle IT company or companies from the array
console.log('---19---')
console.log(itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1))
// 20. Remove the first IT company from the array
console.log('---20---')
console.log(itCompanies.shift())
// 21. Remove the middle IT company or companies from the array
console.log('---21---')

// 22. Remove the last IT company from the array
console.log('---22---')
console.log(itCompanies.pop())
// 23. Remove all IT companies
console.log('---23---')
console.log(itCompanies.splice(0,itCompanies.length))