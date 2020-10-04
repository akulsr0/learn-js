```
class PriorityQueue {
    constructor() {
        this.array = [];
        this.priority = [];
    }

    /**
     *  Takes the value and priority for that value to
     *  be inserted in the priority queue
     * @param {primitive} val
     * @param {number} priority
     */
    insert(val, priority = 0) {
        this.array.push(val);
        this.priority.push(priority);
    }

    /**
     *  Searches the max element in the priority queue
     *  and returns the corresponding value from this.array
     */
    searchMax() {
        const max = Math.max(...this.priority);
        const maxIndex = this.priority.indexOf(max);

        return { element: this.array[maxIndex], max: max };
    }

    /**
     *  Searches the max element in the priority queue
     *  and returns the corresponding value from this.array
     */
    searchMin() {
        const min = Math.min(...this.priority);
        const minIndex = this.priority.indexOf(min);

        return { element: this.array[minIndex], min: min };
    }

    deleteMax() {
        const { element, max } = this.searchMax();

        this.remove(this.array, element);
        this.remove(this.priority, max);
    }

    deleteMin() {
        const { element, min } = this.searchMin();

        this.remove(this.array, element);
        this.remove(this.priority, min);
    }

    /**
     *  removes the element from the array
     * @param {[Object object]} array
     * @param {*} value
     */
    remove(array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                array.splice(i, 1);
                return;
            }
        }
    }
}

const queue = new PriorityQueue();

queue.insert(2);
queue.insert(4, 10);
queue.insert(10, -2);

console.log(queue.searchMax());
console.log(queue.searchMin());

queue.deleteMax();
queue.deleteMin();
```