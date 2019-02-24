import datetime
from picamera import PiCamera
from time import sleep
from sense_hat import SenseHat
import json

camera = PiCamera()
sense = SenseHat()
sense.clear()
img_counter = 0
img_name_counter = 1
interval_secs = 10 #camera
max_history = 72 #12 hours
max_dump = 1 #push to feed
data_dump = {}
sleep(2)

while True:
    data = {}
    temp = sense.get_temperature()
    humidity = sense.get_humidity()
    if img_counter == max_history:
        img_counter = 0
        img_name_counter = 1
    if img_counter % max_dump == 0:
        with open("/var/www/html/data/feed.json", "w") as write_file:
            json.dump(data_dump, write_file)
    camera.capture('/var/www/html/images/' + str(img_name_counter) + '.jpg')        
    data['temp'] = temp
    data['img'] = '/images/' + str(img_name_counter) + '.jpg'
    data['hum'] = humidity
    data['time'] = str(datetime.datetime.now())
    json_data = json.dumps(data)
    data_dump[img_counter] = json_data
    print(json_data)
    img_counter = img_counter + 1
    img_name_counter = img_name_counter + 1
    sleep(interval_secs)

