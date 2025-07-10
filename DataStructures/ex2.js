class UniqueArray {
    constructor() {
        this.array = [];
        this.length = 0;
        this.itemIndex = new Map(); // key: JSON string, value: index
    }

    _stringify(item) {
        try {
            return JSON.stringify(item);
        } catch (e) {
            return undefined; // skip non-serializable items
        }
    }

    add(item) {
        const key = this._stringify(item);
        if (key === undefined || this.itemIndex.has(key)) {
            return;
        }
        this.array[this.length] = item;
        this.itemIndex.set(key, this.length);
        this.length++;
    }

    exists(item) {
        const key = this._stringify(item);
        return key !== undefined && this.itemIndex.has(key);
    }

    get(index) {
        return index < this.length ? this.array[index] : -1;
    }

    showAll() {
        console.log(this.array);
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add(["toy"])
uniqueStuff.showAll() //prints ["toy", ["toy"]]
uniqueStuff.add(["toy"])
uniqueStuff.showAll() //prints ["toy", ["toy"]]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(3)) //prints "hydrogen"