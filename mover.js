let mover = {
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число 1, 2, 3, 4, 6, 7, 8, 9 куда вы хотите идти.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Неверное направление!');
                continue;
            }
            return direction
        }
    },
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        if ([7, 8, 9].includes(direction)) {
            nextPosition.y--;
        }
        if ([1, 2, 3].includes(direction)) {
            nextPosition.y++;
        }
        if ([1, 4, 7].includes(direction)) {
            nextPosition.x--;
        }
        if ([3, 6, 9].includes(direction)) {
            nextPosition.x++;
        }
        if (nextPosition.x >= config.colsCount || nextPosition.x < 0) {
            nextPosition.x = player.x
        }
        if (nextPosition.y >= config.rowsCount || nextPosition.y < 0) {
            nextPosition.y = player.y
        }
        return nextPosition;
    }
};
