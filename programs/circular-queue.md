```
class CQ {
	constructor(size) {
		this.SIZE = size;
		this.front = -1;
		this.rear = -1;
		this.queue = [];
    }

   insert (value) { 
		if(this.front === Math.floor((this.rear + 1) % this.SIZE)) {
			return "Queue is Overflow!";
		} 

		if(this.front === -1) {
			this.front = 0;
			this.rear = 0;
		} else {
			this.rear = Math.ceil((this.rear + 1) % this.SIZE);
		}

		this.queue[this.rear] = value;
		return true;
    }

    remove() {
		let value;
		if(this.front === -1) {
			return "Queue is Underflow!";
		}

		value = this.queue[this.rear];
		if(this.front === this.rear) {
			this.front = -1;
			this.rear = -1;
		} else {
			this.front= (this.front + 1) % this.SIZE;
		}
		return value;
    }

    display () {
		if(this.front === -1) {
			return "Queue is Underflow!";
		} else {
			if(this.front < this.rear)
			{
				for(let i = this.front; i <= this.rear; i++)
					console.log(this.queue[i]);
			}
			else
			{
				for(let i = this.front; i < this.SIZE; i++)
					console.log(this.queue[i]);
				for(let i = 0; i <= this.rear; i++)
					console.log(this.queue[i]);
			}
		}
	}
}

const cq = new CQ(5);

cq.insert(5);
cq.insert(23);
cq.insert(12);
cq.remove();
cq.insert(56);
cq.insert(43);
cq.insert(67);

cq.display();

// Output:
23
12
56
43
67
```