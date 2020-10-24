# Tower of Hanoi

- Suppose there are three towers labelled 1, 2, 3 and **N** numbers of disks with decreasing size, are placed on to **tower 1**.
- The aim of game is to move all the disks can be move from **tower 1** to **tower 3** using a temporary **tower 2**.
- Rules
  1. At any point in time, only one disk can be moved from one tower to another.
  2. Only a top most disk can be a move to any other tower.
  3. A large disk cannot be placed on a smaller disk at any point in time.


```
function moveDisk(count, start, end, temp) {

    if(count > 0) {
        moveDisk(count - 1, start, temp, end);
        console.log(`Move disk ${count} from Tower ${start} to Tower ${end}`);
        moveDisk(count - 1, temp, end, start);
    }

}

var disks = 5;
var tower_1 = 1, tower_2 = 2, tower_3 = 3;

moveDisk(disks, tower_1, tower_3, tower_2);
```