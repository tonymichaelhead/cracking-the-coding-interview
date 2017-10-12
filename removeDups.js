/*
R�mov� Dups! Write code to remove duplicates from an unsorted linked list.
*/

// I: 1 -> 2 -> 5 -> 2 -> 6 -> 1
// O: 1 -> 2 -> 5 -> 6

const removeDups = (list) => {

}

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

    add(val) {
        this.next = new Node(val);
    }
}

let list = new Node(1);
list.add(2);
// list.add(5);
// list.add(2);
// list.add(6);
// list.add(1);

console.log(list)


