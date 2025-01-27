temperatura = 0

def on_forever():
    global temperatura
    if input.button_is_pressed(Button.A):
        temperatura = input.temperature()
        basic.show_string(str(temperatura) + "C")
    if input.button_is_pressed(Button.B):
        temperatura = input.temperature()
        luz = input.light_level()
        if temperatura > 30 and luz < 100:
            basic.show_leds("""
                . # . # .
                # # # # #
                . # # # .
                # # # # #
                . # . # .
            """)
        else:
            basic.show_string("Normal")
    if input.button_is_pressed(Button.AB):
        temperatura = input.temperature()
        if 20 <= temperatura <= 30:
            basic.show_string("OK")
        else:
            basic.show_string("Alerta")

basic.forever(on_forever)
