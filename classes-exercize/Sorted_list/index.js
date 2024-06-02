class LIst {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }
    add(value) {
        this.result.push(value);
        this.size = this.result.length;
        this.result.sort((a, b) => a-b)
    }
    remove(index) {
        if(index < 0 || index >= this.result.length)
            {
                throw new Error('Invalid index');
            }
            this.result.splice(index, 1);
    }
    get () {
        if(index < 0 || index >= this.result.length)
            {
                throw new Error('Invalid index');
            }
            return this.result[index];
    }
}

let list = new LIst();
list.add(5);
list.add(3);
list.add(1);
list.add(10);
list.remove(0);
console.log(list.result);