```
const SIZE = 5;

let rear = -1, front = -1;

var CQ = [];

function insert (value) {
    
    if(front === Math.floor((rear + 1) % SIZE)) {
        return "Queue is Overflow!";
    } 
    
    if(front === -1) {
        front = 0;
        rear = 0;
    } else {
        rear = Math.ceil((rear + 1) % SIZE);
    }

    CQ[rear] = value;
    return true;
}

function remove() {
    let value;
    if(front === -1) {
        return "Queue is Underflow!";
    }

    value = CQ[rear];
    if(front === rear) {
        front = -1;
        rear = -1;
    } else {
        front=(front+1)%SIZE;
    }
    return value;
}

function display () {
    if(front === -1) {
        return "Queue is Underflow!";
    } else {
        if(front<rear)
		{
			for(i=front;i<=rear;i++)
				console.log(CQ[i]);
		}
		else
		{
			for(i=front;i<SIZE;i++)
				console.log(CQ[i]);
			for(i=0;i<=rear;i++)
				console.log(CQ[i]);
		}
    }
}

insert(4);
insert(12);
remove();
insert(23);
insert(34);
insert(67);
remove();
insert(72);
insert(5);

display();

// Output: 
23
34
67
72
5
```