let temperatura = 0
basic.forever(function on_forever() {
    let luz: number;
    
    if (input.buttonIsPressed(Button.A)) {
        temperatura = input.temperature()
        basic.showString("" + temperatura + "C")
    }
    
    if (input.buttonIsPressed(Button.B)) {
        temperatura = input.temperature()
        luz = input.lightLevel()
        if (temperatura > 30 && luz < 100) {
            basic.showLeds(`
                . # . # .
                # # # # #
                . # # # .
                # # # # #
                . # . # .
            `)
        } else {
            basic.showString("Normal")
        }
        
    }
    
    if (input.buttonIsPressed(Button.AB)) {
        temperatura = input.temperature()
        if (20 <= temperatura && temperatura <= 30) {
            basic.showString("OK")
        } else {
            basic.showString("Alerta")
        }
        
    }
    
})
