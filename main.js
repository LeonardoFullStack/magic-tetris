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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

]

//5. las piezas
const piece = {
    position: { x: 1, y: 0 },
    shape: [
        [1, 1, 1, 1]
    ]
}


//6.El game loop

const update = () => {
    draw()
    window.requestAnimationFrame(update)
}
let pieceColor = 'red'
const draw = () => {
    context.fillStyle = '#000'
    // el fillrect dibuja un box, los 2 primeros argumentos
    //son las coordenadas de la esquina superior izquierda,
    //y el resto de argumentos su tamaño
    context.fillRect(0, 0, canvas.width, canvas.height)

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value === 1) {
                context.fillStyle = 'yellow'
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
        console.log(checkingCollisions('left'))
        if (checkingCollisions('left')) piece.position.x--
    }

    if (event.key === 'ArrowRight') {
        console.log(checkingCollisions('right'))
        if (checkingCollisions('right')) piece.position.x++

    }
    if (event.key === 'ArrowDown') {
        console.log(checkingCollisions('down'))
        if (checkingCollisions('down')) piece.position.y++
        console.log('posición y', piece.position.y)
    }
})


// 8 colisiones
const checkCollisions = () => { // devuelve true si hay colisión
    let result = false

    //colisiones con los bordes (falta probar con los diferentes tamaños de piezas)
    if (
        (piece.shape.length + 1) + piece.position.y > 32 ||
        (piece.position.x + (piece.shape[0].length - 1)) > 15 ||
        piece.position.x < 0
    ) result = true

    //colisiones con otras piezas
    piece.shape.forEach((row, indexRow) => {
        row.forEach((value, indexValue) => {
            if (value == 1) {
                console.log(board[piece.position.y + indexRow][piece.position.x + indexValue])
                if (board[piece.position.y + indexRow][piece.position.x + indexValue] == 1) {
                    result = true
                    console.log(result)
                }
            }
        })
    })

    return result

}

const checkingCollisions = (direction) => { // devuelve false  si hay colisión
    let result = true;
    let directionValue = 0
    let yValue = 0

    switch (direction) {
        case 'left':
            directionValue = -1;
            break;
        case 'right':
            directionValue = 0;
            break;
        case 'down':
            yValue = 1;
            break;
        // Puedes agregar más casos según sea necesario
    }

    piece.shape.forEach((row, indexRow) => {
        row.forEach((cellValue, indexValue) => {

            if  (board[piece.position.y + indexRow + yValue]){
                if (cellValue === 1) {
                    const boardValue = board[piece.position.y + indexRow + yValue][piece.position.x + indexValue + directionValue];
                    if (boardValue !== 0) {
                        result = false;
                    }
                }
            } else result  =  false
            
        });
    });

    return result;
};

// 9 pieza bajando cada segundo
const pieceGoingDown = () => {
    if (checkingCollisions('down')) piece.position.y++
    else solidify()
    

    setTimeout(pieceGoingDown, 1000)
}

//10 solidificar las  piezas 
const solidify = () => {
    console.log('solidifico')
    piece.shape.forEach((row, indexRow) => {
        row.forEach((value, indexValue) => {
            if (value == 1) {
                board[piece.position.y + indexRow][piece.position.x + indexValue] = 1
                pieceColor = 'yellow'
            }
        })
    })
    newPiece()
}

//11 crear la pieza post-solidificación
const newPiece = () => {
    console.log('reiniciando pieza')
    piece.position.x = 0
    piece.position.y = 0
    console.log(piece.position.x)

}


update()
pieceGoingDown()

