const initGame = () => {
    const state = {
        player:{},
        screen: {
            width: 8,
            height: 8,
            size: 8,
            pixelsPerFields: 50,
            light: "#f0d9b5",
            dark: "#b58863"
        }

    }
    const screen = document.getElementById("screen");
    const context = screen.getContext("2d");
    drawBoard(context, state);
}

const drawBoard = (context, state) => {
    const {width, height, size, pixelsPerFields, light, dark} = state.screen;
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
    }
}

initGame();
