/*
Remove Dups! Write code to remove duplicates from an unsorted linked list.
*/

// I: 1 -> 2 -> 5 -> 2 -> 6 -> 1
// O: 1 -> 2 -> 5 -> 6

const removeDups = (list) => {
    
    const hist = {};
    
    const recurse = (currentNode, previousNode) => {
        if (!currentNode) {
          return;
        }
        if (hist[currentNode.value]) {
          previousNode.next = currentNode.next;
          recurse(previousNode.next, previousNode);
        } else {
          hist[currentNode.value] = 1;
          recurse(currentNode.next, currentNode);
        }
    } 
    recurse(list);
    return list;
}
    
class Node {
    constructor(val) {
    this.value = val;
    this.next = null;
    }
}
    
let list = new Node(6);
let nodeB = list.next = new Node(2);
let nodeC = nodeB.next = new Node(3);
let nodeD = nodeC.next = new Node(4);
let nodeE = nodeD.next = new Node(5);
let nodeF = nodeE.next = new Node(6);

console.log(JSON.stringify(removeDups(list)));
    
    
    