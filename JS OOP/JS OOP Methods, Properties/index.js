class listNode {
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    getFirst() {
        let first = this.head.el;
        return first;
    }

    getLast() {
        let last = this.head;
        if(last) {
            while(last.next) {
                last = last.next;
            }
        }
        return last.el;
    }

    getLength() {
        return this.length;
    }

    append = (...el) => {
        el.forEach(el => {
            const node = new listNode(el);

            if(this.head === null) {
                this.head = node
            } else {
                let previous = this.head;
                while(previous.next) {
                    previous = previous.next;
                }
                previous.next = node;
            }
            this.length++;
        })
        return this;
    }

    prepend = (...el) => {
        el.reverse().forEach(el => {
            const node = new listNode(el);

            if(this.head === null) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
            this.length++;
        })
        
        return this;
    }

    insert = (index, ...el) => {
        el.reverse().forEach(el => {
            if(index < 0 || index > this.length) {
                console.log("Invalid index");
                return;
            } else if(index === 0) {
                this.prepend(el);
            } else {
                const node = new listNode(el);
                let previous = this.head;
                for(let i = 0; i < index - 1; i++) {
                    previous = previous.next;
                }
                node.next = previous.next;
                previous.next = node;
                this.length++;
            }
        })
        return this;
    }

    removeAt(index) {
        let removedNode;
        if(index < 0 || index > this.length) {
            return "Invalid index";
        } else if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            this.length--;
        } else {
            let previous = this.head;
            for(let i = 0; i < index - 1; i++) {
                previous = previous.next;
            }
            removedNode = previous.next;
            previous.next = removedNode.next;
            this.length--;
            return `The element at index ${index} -> (${removedNode.el}) has been successfully removed`;
        }
    }

    at(index, el) {
        if(index < 0 || index > this.length) {
            console.log("Invalid index");
            return;
        } else {
            let previous = this.head;
            for(let i = 0; i < index; i++) {
                previous = previous.next;
            } 
            if(el != undefined) {
                previous.el = el;
                return el;
            } 
            else {
                return `The element at index ${index} is ${previous.el}` 
            }  
        }
    }

    toArray() {
        let current = this.head;
        let arr = [];
        while(current) {
            arr.push(current.el);
            current = current.next;
        }
        return arr;
    }

    toString() {
        let result = "";
        let current = this.head;
        while (current) {
          result += `${current.el}${current.next ? " -> " : ""}`;
          current = current.next;
        }
        return result;
    }
    
    *[Symbol.iterator]() {
        let current = this.head;
        while(current) {
            yield current.el;
            current = current.next;
        }
    }

    print() {
        if(this.head === null) {
            console.log("The list is empty")
        } else {
            let current = this.head;
            let listValues = '';
            while(current) {
                listValues += `${current.el} `;
                current = current.next;
            }
            console.log(listValues)
        }
    }
}

console.log("List1: \n")
const list1 = new LinkedList();
list1.append(1, 2, 3).append(4);
list1.print()

console.log("List2: \n")
const list2 = new LinkedList();
list2.append(4, 5, 6).prepend(1, 2, 3);
list2.print()

console.log("List3: \n")
const list3 = new LinkedList();
list3.append(1, 4, 5).insert(1, 2, 3);
list3.print()

console.log("List4: \n")
const list4 = new LinkedList();
list4.append(1, 2, 3, 4, 5, 6);
console.log(list4.at(2)); // 3
list4.at(2, 'gosho');
console.log(list4.at(2)); // gosho
list4.print()

console.log("List5: \n")
const list5 = new LinkedList();
const removed = list5.append(1, 2, 3, 4, 5).removeAt(1);
console.log(removed);
list5.print()

console.log("List6: \n")
const list6 = new LinkedList().append(6, 7, 8).prepend(1, 2, 3, 4, 5);
for(const value of list6) {
    console.log(value);
}
list6.print()

console.log("List7: \n")
const list7 = new LinkedList();
list7.append(1, 2, 3, 4, 5, 6);
const arr  = list7.toArray();
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(arr instanceof Array); // true
list7.print()

console.log("List8: \n")
const list8 = new LinkedList();
list8.append(1, 2, 3, 4, 5, 6);
console.log(list8.toString()); // 1 -> 2 -> 3 -> 4 -> 5 -> 6
