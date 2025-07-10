class UniqueArray{
    constructor(){
        this.array = []
        this.length = 0
        this.itemIndex = {}
    }

    add(item){
        if(this.exists(item)){
            return
        }
        this.array[this.length] = item
        this.itemIndex[item] = this.length
        this.length++
    }

    showAll(){
        console.log(this.array)
    }

    exists(item){
        if(this.itemIndex[item] !== undefined){
            return true
        }
        return false
    }

    get(index){
        if(index < this.length){
            return this.array[index]
        }
        return -1
    }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"