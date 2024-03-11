class listNode {
  public next: listNode | null;
  constructor(public el: number | string) {}
}

class LinkedList {
  private head: listNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getFirst(): any {
    let first = this.head;
    return first?.el;
  }

  getLast(): any {
    let last = this.head;
    if (last) {
      while (last.next) {
        last = last.next;
      }
    }
    return last?.el;
  }

  getLength(): number {
    return this.length;
  }

  append = (...el: (number | string)[]): LinkedList => {
    el.forEach((el) => {
      const node = new listNode(el);

      if (this.head === null) {
        this.head = node;
      } else {
        let previous = this.head;
        while (previous.next) {
          previous = previous.next;
        }
        previous.next = node;
      }
      this.length++;
    });

    return this;
  };

  prepend = (...el: (number | string)[]): LinkedList => {
    el.reverse().forEach((el) => {
      const node = new listNode(el);

      if (this.head === null) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.length++;
    });

    return this;
  };

  insert = (index: number, ...el: (number | string)[]): LinkedList => {
    el.reverse().forEach((el) => {
      if (index < 0 || index > this.length) {
        console.log("Invalid index");
        return;
      } else if (index === 0) {
        this.prepend(el);
      } else {
        const node = new listNode(el);
        let previous = this.head;
        for (let i = 0; i < index - 1; i++) {
          previous = previous!.next;
        }
        node.next = previous!.next;
        previous!.next = node;
        this.length++;
      }
    });

    return this;
  };

  removeAt(index: number): string | undefined {
    let removedNode;
    if (index < 0 || index > this.length) {
      console.log("Invalid index");
    } else if (index === 0) {
      removedNode = this.head;
      this.head = this.head!.next;
      this.length--;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous!.next;
      }
      removedNode = previous!.next;
      previous!.next = removedNode.next;
      this.length--;
    }

    return `The element at index ${index} -> (${removedNode!.el}) has been successfully removed`;
  };

  at(index: number, el?: number | string): string | number {
    if (index < 0 || index > this.length) {
      throw new Error("Invalid index");
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
      if (el != undefined) {
        current!.el = el;
        return el;
      } else {
        return `The element at index ${index} is ${current!.el}`;
      }
    }
  };

  toArray(): (string | number)[] {
    let current = this.head;
    let arr: (string | number)[] = [];
    while (current) {
      arr.push(current.el);
      current = current.next;
    }
    return arr;
  };

  toString(): string {
    let result: string = "";
    let current = this.head;
    while (current) {
      result += `${current.el}${current.next ? " -> " : ""}`;
      current = current.next;
    }

    return result;
  };

  *[Symbol.iterator](): IterableIterator<(string | number)> {
    let current = this.head;
    while (current) {
        yield current.el;
        current = current.next;
    }
  }

  print(): void {
    if (this.head === null) {
      console.log("The list is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.el} `;
        current = current.next!;
      }
      console.log(listValues);
    }
  };
}

console.log("List1:");
const list1 = new LinkedList();
list1.append(1, 2, 3).append(4);
list1.print();

console.log("List2:");
const list2 = new LinkedList();
list2.append(4, 5, 6).prepend(1, 2, 3);
list2.print();

console.log("List3:");
const list3 = new LinkedList();
list3.append(1, 4, 5).insert(1, 2, 3);
list3.print();

console.log("List4:");
const list4 = new LinkedList();
list4.append(1, 2, 3, 4, 5, 6);
console.log(list4.at(2)); // 3
list4.at(2, "gosho");
console.log(list4.at(2)); // gosho
list4.print();

console.log("List5:");
const list5 = new LinkedList();
const removed = list5.append(1, 2, 3, 4, 5).removeAt(1);
console.log(removed);
list5.print();

console.log("List6:");
const list6 = new LinkedList().append(6, 7, 8).prepend(1, 2, 3, 4, 5);
for (const value of list6) {
  console.log(value);
}

console.log("List7:");
const list7 = new LinkedList();
list7.append(1, 2, 3, 4, 5, 6);
const arr = list7.toArray();
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(arr instanceof Array); // true
list7.print();

console.log("List8:");
const list8 = new LinkedList();
list8.append(1, 2, 3, 4, 5, 6);
console.log(list8.toString()); // 1 -> 2 -> 3 -> 4 -> 5 -> 6
