
function solution(maze, start, end){
    const queue = [[start[0], start[1], 0]];
    const map = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    while(queue.length > 0){
        const [x, y, distance] = queue.shift();
        if(
            x < 0 ||
            maze.length <= x ||
            y < 0 ||
            maze[x].length <= y ||
            maze[x][y] === 1
        ){
            continue;
        }
        if(x === end[0] && y === end[1]){
            // console.log("=>(1.js:23) distance", distance);
            return distance;
        }
        maze[x][y] = 1;
        // console.log("=>(1.js:27) maze", maze);
        for(const [mx, my] of map){
            queue.push([x+mx, y+my, distance + 1]);
        }
    }
    return -1;
}

const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
]
const start = [0, 0]
const end = [4, 4]

const result = solution(maze, start, end)
console.log(result);



