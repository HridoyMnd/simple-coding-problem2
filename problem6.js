/**
Function name: searchByPrefix(phonebook, prefix)
Statement:
 Return an array of names that start with the given prefix.
Test case 1
Input:
phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
prefix = "ra";

Output:
["rahim", "rafi"]

 */

// problem 6 solution here
phonebook = { rahim: "0181", karim: "0172", rafi: "0193", tara: "0000" };
prefix = "ra";

function searchByPrefix(phonebook, prefix){
    const findedNames = [];
    for(const person in phonebook){
        if(person.startsWith(prefix)){
            findedNames.push(person)
        }

    }
    return findedNames;
}   

const result6 = searchByPrefix(phonebook, prefix);
console.log(result6);