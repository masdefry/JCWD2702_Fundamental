// STACK
// LIFO (Last In - First Out)

class Stack{
    maxSize = 3;
    container = []; // [Page-01] [Page01, Page-02] [Page-01, Page-02, Page-03]
    push(data){
        if(this.container.length < this.maxSize){ // 3 <= 3?
            this.container.push(data)
        }
    }
    pop(){
        this.container.pop()
    }
}
let newStack = new Stack()
newStack.push('Page-01')
newStack.push('Page-02')
newStack.push('Page-03')
newStack.pop()
newStack.push('Page-04')
newStack.push('Page-05')


// QUEUE
class Queue{
    maxSize = 3;
    container = []; // [Page-01] [Page01, Page-02] [Page-01, Page-02, Page-03]
    addData(data){
        if(this.container.length < this.maxSize){ // 3 <= 3?
            this.container.push(data)
        }
    }
    deleteData(){
        this.container.shift()
    }
}


// SET
const fruits = ['Banana', 'Orange', 'Starfruit']

const newFruits = new Set(fruits)
newFruits.add('banana')
newFruits.add('Durian')
newFruits.delete('banana')
console.log(newFruits.has('Banana'))
// newFruits.clear()

const campus = ['BSD', 'JKT', 'BDG']
const setCampus = new Set(campus)
const campusEntries = setCampus.entries()

let text = ''
for(const entry of campusEntries){
    text += entry
}

setCampus.forEach((item) => {
    console.log(item)
})


const data = {
    name: 'Ferry',
    name: 'Bogor', 
    school: 'Pwd'
}
data.name = 'Bebas'
console.log(data)



class Node{
    constructor(element){
        this.element = element; 
        this.next = undefined;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
        /*
            head: {
                element: 'A',
                next: {
                    element: 'B', 
                    next: {
                        element: 'D',
                        next: {
                            element: 'C', 
                            next: undefined
                        }
                    }
                }
            }
        */
      this.size = 0;
    }
  
    add(element) { 
      let node = new Node(element); 
     
      let current;
      if (this.head == null) { 
        this.head = node;
      } else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node; 
      }
      this.size += 1;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
          return console.log("Please enter a valid index");
        } else {
          const node = new Node(element);

          let curr = this.head; 
    
          if (index == 0) {
            node.next = this.head; 
            this.head = node; 
          } else { 
            curr = this.head; 
            let prev;
    
            for (let i = 0; i < index; i++) {
              prev = curr; 
              curr = curr.next;
            }
    
            prev.next = node;  
            node.next = curr;
          }
          this.size += 1;
        }
    }

    removeElement(element) { 'D'
        let current = this.head;
        let prev = null;
    
        while (current != null) {
          if (current.element === element) {
            if (prev == null) {
              this.head = current.next;
            } else {
              prev.next = current.next;
            }
    
            this.size -= 1;
    
            return current.element;
        }
    
            prev = current;
            current = current.next;
        }
    
        return null;
    }

    indexOf(element) { // 'B'
      let count = 0;
      let current = this.head;
  
      while (current != null) {
        if (current.element === element) {
          return count;
        }
  
        count += 1;
        current = current.next;
      }
  
      return -1;
    }
  }
}

let linkedList = new LinkedList()
linkedList.add('A')
linkedList.add('B')
linkedList.add('C')
linkedList.insertAt('D', 2)
console.log(linkedList.removeElement('D'))
console.log(linkedList.head)
