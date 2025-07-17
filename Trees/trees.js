class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }


    findNode(value){
        if(value === this.value){
            console.log(true)
            return true
        }
        else if(value > this.value && this.rightChild ){
            return this.rightChild.findNode(value)
        }
        else if(value <= this.value && this.leftChild){
            return this.leftChild.findNode(value)
        }
        console.log(false)
        return false
    }

    // This function should return the node object of the common parent of two values in the tree
    findCommonParent(val1, val2) {
        let bigVal = (val1 > val2) ? val1 : val2;
        let smallVal = (val1 < val2) ? val1 : val2;     
        if (this.value > smallVal && this.value < bigVal) return this.value;
        // check direct child
        if (this.leftChild.value === val1 || this.leftChild.value === val2 || this.rightChild.value === val1 || this.rightChild.value === val2) return this.value;
        else if (this.value > bigVal) return this.leftChild.findCommonParent(val1, val2);
        else return this.rightChild.findCommonParent(val1, val2);
    }

      removeNode(parent, val) {
        // Find Node        
        
        // Recursive case
        if (val > this.value) return this.rightChild.removeNode(this, val);
        else if (val < this.value) return this.leftChild.removeNode(this, val);

        // Found node
        console.log(`this: ${this.value}; parent: ${parent.value}`);

        const isLeft = this.value < parent.value; // help for readability
        const isParent = (parent.value === val); // value is same as the original root

        // No children
        if (!this.leftChild && !this.rightChild) {
            if (isParent) {
                parent = null;
                return parent;
            }

            isLeft ? parent.leftChild = null : parent.rightChild = null;
            return this;
        }
        // One child
        if (!this.leftChild || !this.rightChild) {            
            let childToAdd = this.leftChild || this.rightChild;

            if (isParent) {
                parent = childToAdd;
                return parent;
            }

            isLeft ? parent.leftChild = childToAdd : parent.rightChild = childToAdd;
            return this;
        }
        else { // Two children
            let childToAdd = this.leftChild.findMax();

            if (isParent) {
                childToAdd.rightChild = parent.rightChild;
                parent = childToAdd;
                return parent;
            }
            isLeft ? parent.leftChild = childToAdd : parent.rightChild = childToAdd;
        }
        return this
    }

    findMax() {
        return this.rightChild ? this.rightChild.findMax() : this;
    }

}

// const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

// const bsTree = new BSNode("J")
// bsTree.insertNode("H")
// bsTree.insertNode("R")
// bsTree.insertNode("E")
// bsTree.insertNode("S")
// bsTree.insertNode("P")
// bsTree.insertNode("G")
// bsTree.insertNode("B")
// bsTree.insertNode("L")
// bsTree.insertNode("Y")
// bsTree.insertNode("I")
// //insert nodes (same as in lesson)
    
// console.log(bsTree.findCommonParent("B", "I")) //should return "H"
// console.log(bsTree.findCommonParent("B", "G")) //should return "E"
// console.log(bsTree.findCommonParent("E", "H")) //should return "J"
// console.log(bsTree.findCommonParent("L", "Y")) //should return "R"
// console.log(bsTree.findCommonParent("E", "H")) //should return "J"

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

console.log('---9 REMOVE--');

let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
console.log('---ROOT IS 5--');
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 


