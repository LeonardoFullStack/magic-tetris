import './style.css'

// 1.inicializo el canvass en 2d
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//2.medidas del tetris

const BLOCK_SIZE = 20
const BOARD_WIDTH = 16
const BOARD_HEIGHT = 31

//3.Le ponemos esas medidas al canvass
canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

//Hacemos que cada punto del canvas escale con el block_size
context.scale(BLOCK_SIZE, BLOCK_SIZE)

//4. el board
const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

]

//5. las piezas
const piece = {
    position: { x: 0, y: 0 },
    shape: [
        [1,1]
    ]
}


//6.El game loop

const update = () => {
    draw()
    window.requestAnimationFrame(update)
}

const draw = () => {
    context.fillStyle = '#000'
    // el fillrect dibuja un rectángulo, los 2 primeros argumentos
    //son las coordenadas de la esquina superior izquierda,
    //y el resto de argumentos su tamaño
    context.fillRect(0, 0, canvas.width, canvas.height)

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value === 1) {
                context.fillStyle = 'red'
                context.fillRect(x, y, 1, 1)
            }
        })
    })

    //mover la pieza
    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = 'red'
                context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1)
            }
        })
    })
}

//7.controles 
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        piece.position.x--
        console.log(piece.position.x)
        console.log(checkCollisions())
        if (checkCollisions()) {
            piece.position.x++
        }
    }

    if (event.key === 'ArrowRight') {
        piece.position.x++
        console.log(piece.position.x)
        console.log(checkCollisions())
        console.log(piece.position.x > 16, 'putas')
        if (checkCollisions()) {
            piece.position.x--
        }

    }
    if (event.key === 'ArrowDown') {
        piece.position.y++
        console.log(piece.position.y)
        console.log(checkCollisioners())
        if (checkCollisioners()) {
            piece.position.y--
        }
    }
})

const checkCollision = () => { // ésta función devuelve un array si encuentra una colisión
    return piece.shape.find((row, y) => {
        /*     if  (piece.position.y + piece.shape.length > 30) return true */
        return row.find((value, x) => {
            return ( // éste return devuelve undefined si no encuentra colisiones
                board[piece.shape.length + piece.position.y] == undefined || // Verificar si la fila existe
                board[y + piece.position.y][x + piece.position.x] !== 0
            );
        });
    });
};

const checkCollisions = () => { // devuelve true si hay colisión
    let result = false

    //colisiones con los bordes (falta probar con los diferentes tamaños de piezas)
    if ((piece.shape.length + 1) + piece.position.y > 32 ||
        (piece.position.x + piece.shape.length) > 15 || 
        piece.position.x < 0
    ) result = true

    //colisiones con otras piezas
    piece.shape.forEach((row, indexRow) => {
        row.forEach((value, indexValue) => {
            if (value == 1) {
                if (board[piece.position.y + indexRow][piece.position.x + indexValue] == 1) result = true
            }
        })
    })

    return result

}

const checkCollisioners = () => {
    const width = piece.shape[0].length + 1
    const height = piece.shape.length + 1
    let result = false

    piece.shape.forEach((row, indexRow) => {
        row.forEach((value, indexValue) => {
            if (value == 1) {
                if (board[piece.position.y + indexRow][piece.position.x + indexValue] == 1) result = true
            }
        })
    })

    return result
}


update()

