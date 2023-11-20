import './style.css'

// 1.inicializo el canvass en 2d
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//2.medidas del tetris

const BLOCK_SIZE = 20
const BOARD_WIDTH = 15
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
const currentPiece = {
    position: { x: 0, y: 0 },
    shape: [
        [1,1,1,1]
    ],
    xSize: 4,
    xSizes:  [4,1],
    shapeForm:0,
    shapes: [
        [
            [1,1,1,1]
        ],
        [
            [1,0],
            [1,0],
            [1,0],
            [1,0]
        ]
    ]
}



//un array de  objetos, y en  cada objeto  un valor llamado shapes que tiene todas las  formas
const pieces = 
    {
        shapes: [
            [
                [1,1,1,1]
            ],
            [
                [1,0],
                [1,0],
                [1,0],
                [1,0]
            ]
        ],
        xSize:[4,1]
    
    }

const putas = {
    palitroker: {
        shape:[1,1,1,1],
        shapes: [
            [
                [1,1,1,1]
            ],
            [
                [1,0],
                [1,0],
                [1,0],
                [1,0]
            ]
        ],
        xSize:[4,1],
        shapeForm: 1,
        shapeForms:2
    },
    star: {
        shape:[
            [0,1,0],
            [1,1,1]
        ],
        shapes: [
            [
                [0,1,0],
                [1,1,1]
            ],
            [
                [0,1],
                [1,1],
                [0,1]
            ],
            [
                [1,1,1],
                [0,1,0]
            ],
            [
                [1,0],
                [1,1],
                [1,0]
            ]
        ],
        xSize:3,
        xSizes:[3,2],
        shapeForm:0,
        shapeForms:4
    }
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
    currentPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = 'red'
                context.fillRect(x + currentPiece.position.x, y + currentPiece.position.y, 1, 1)
            }
        })
    })
}

//7.controles 
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        console.log(checkingCollisions('left'))
        if (checkingCollisions('left')) {
           const minX = currentPiece.position.x;
           if (minX > 0) {
            currentPiece.position.x--;
           }
        }
    }

    if (event.key === 'ArrowRight') {
        if (checkingCollisions('right')) {
            const maxX = currentPiece.position.x + currentPiece.xSize;
            console.log(currentPiece.position.x)
            if (maxX < BOARD_WIDTH) {
                currentPiece.position.x++;
            }
        } 
    }

    if (event.key === 'ArrowDown') {
        console.log(checkingCollisions('down'))
        if (checkingCollisions('down')) currentPiece.position.y++
    }

    if (event.key === 'ArrowUp') {
        changingShape()
    }
})

// cambiar la posición de la pieza
const changingShape =  () =>  {
    

     currentPiece.shapeForm = (currentPiece.shapeForm === 0) ? 
    (currentPiece.shape = currentPiece.shapes[1], currentPiece.xSize = currentPiece.xSizes[1], 1) :
    (currentPiece.shape = currentPiece.shapes[0], currentPiece.xSize = currentPiece.xSizes[0], 0);
   
    if (!checkingCollisions('down') && !checkingCollisions('right')) {
        currentPiece.shapeForm = (currentPiece.shapeForm === 0) ? 
    (currentPiece.shape = currentPiece.shapes[1], currentPiece.xSize = currentPiece.xSizes[1], 1) :
    (currentPiece.shape = currentPiece.shapes[0], currentPiece.xSize = currentPiece.xSizes[0], 0);
    }

    
                 
}
    



// 8 colisiones


const checkingCollisions = (direction) => { // devuelve false  si hay colisión
    let result = true;
    let directionValue = 0;
    let yValue = 0;

    switch (direction) {
        case 'left':
            directionValue = -1;
            break;
        case 'right':
            directionValue = 1;
            break;
        case 'down':
            yValue = 1;
            break;
        // Puedes agregar más casos según sea necesario
    }

    currentPiece.shape.forEach((row, indexRow) => {
        row.forEach((cellValue, indexValue) => {
            if (board[currentPiece.position.y + indexRow + yValue]) {
                if (cellValue === 1) {
                    const boardValue = board[currentPiece.position.y + indexRow + yValue][currentPiece.position.x + indexValue + directionValue];
                    if (boardValue !== 0 || currentPiece.position.x + indexValue + directionValue >= BOARD_WIDTH) {
                        result = false;
                    }
                }
            } else {
                result = false;
            }
        });
    });

    return result;
};


// 9 pieza bajando cada segundo
const pieceGoingDown = () => {
    if (checkingCollisions('down')) currentPiece.position.y++
    else solidify()
    

    setTimeout(pieceGoingDown, 1000)
}

//10 solidificar las  piezas 
const solidify = () => {
    console.log('solidifico', currentPiece.position.x)
    currentPiece.shape.forEach((row, indexRow) => {
        row.forEach((value, indexValue) => {
            if (value == 1) {
                board[currentPiece.position.y + indexRow][currentPiece.position.x + indexValue] = 1
                pieceColor = 'yellow'
            }
        })
    })
    newPiece()
}

//11 crear la pieza post-solidificación
const newPiece = () => {
    
    currentPiece.position.x = 0
    currentPiece.position.y = 0

}


update()
pieceGoingDown()

