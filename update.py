import os
import requests
import psutil
from dotenv import load_dotenv

load_dotenv(".env.local")


def post_battery_status():
    battery = psutil.sensors_battery()
    password = os.getenv("PASSWORD")
    data = {"battery": battery.percent, "password": password}
    response = requests.post("https://ayush.digital/api/battery", json=data)
    return response.status_code


post_battery_status()
