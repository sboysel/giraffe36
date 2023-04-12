# giraffe36 kmk firmware

1. copy CircuitPython to Pi Picos
2. rename L and R
    ```
    sudo umount /dev/sdb1
    sudo fatlabel /dev/sdb1 GIRAFFE36L
    ...
    ```
3. Use Piantor firmware as a starting point
    - https://raw.githubusercontent.com/cairnm/kmk_firmware/piantor/boards/beekeeb/piantor/kb.py
    - https://raw.githubusercontent.com/cairnm/kmk_firmware/piantor/boards/beekeeb/piantor/main.py 


## docs

- https://circuitpython.org/board/weact_studio_pico/
- http://kmkfw.io/docs/split_keyboards/
