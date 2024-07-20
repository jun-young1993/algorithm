function shortestPath(maze, start, end) {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 하, 상, 우, 좌
    const queue = [];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    queue.push([...start, 0]); // 시작 지점과 현재까지의 경로 길이(0)를 큐에 추가
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();

        if (x === end[0] && y === end[1]) {
            return distance; // 도착 지점에 도달하면 현재까지의 경로 길이 반환
        }

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === 0 && !visited[newX][newY]) {
                queue.push([newX, newY, distance + 1]);
                visited[newX][newY] = true;
            }
        }
    }

    return -1; // 경로가 존재하지 않음
}

// 예제 입력
const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];
const start = [0, 0];
const end = [4, 4];

console.log(shortestPath(maze, start, end)); // 출력: 8