const initGame = () => {
    const state = {
        player:{},
        screen: {
            width: 8,
            height: 8,
            size: 8,
            pixelsPerFields: 50,
            coordenates: ['a','b','c','d','e','f','g','h'],
            light: "#f0d9b5",
            dark: "#b58863"
        }

    }
    const screen = document.getElementById("screen");
    const context = screen.getContext("2d");
    drawBoard(context, state);
}

const drawBoard = (context, state) => {
    const {width, height, size, pixelsPerFields, coordenates, light, dark} = state.screen;
    let i = y = x = -1;

    context.clearRect(0,0, width * pixelsPerFields, height * pixelsPerFields);
    for(i = 64; i > 0; i--) {
        x++
        if(i % 8 == 0) {
            y++
            x=0
        }

        context.beginPath();
        context.rect(x * pixelsPerFields, y * pixelsPerFields, pixelsPerFields, pixelsPerFields);
        context.fillStyle = (x + y) % 2 ? dark : light;
        context.fill();

        if(i % size === 0) {
            context.fillStyle = (x + y) % 2 ? light : dark;
            context.fillText((i/size), (x+0.05) * pixelsPerFields, (y+0.2) * pixelsPerFields)
        }
        if(y+1 === size) {
            context.fillStyle = (x + y) % 2 ? light : dark;
            context.fillText(coordenates[x], (x+0.85) * pixelsPerFields, (y+0.9) * pixelsPerFields)
            nx = x * pixelsPerFields
            ny = y * pixelsPerFields
            img = new Image()
            img.src = 'assets/img/w_king.png'
            context.drawImage( img, nx, ny, pixelsPerFields, pixelsPerFields)
        }
        

    }
}

initGame();
