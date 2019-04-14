# Selenium test

import time, os

from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.alert import Alert
from dotenv import load_dotenv

# load .env
load_dotenv()

# URLs
ONGEKI_NET_URL = "https://ongeki-net.com/"
ONGEKI_LOGIN_URL = ONGEKI_NET_URL + "ongeki-mobile/"
ONGEKI_SELECTAIME_URL = ONGEKI_LOGIN_URL+ "aimeList/"
ONGEKI_RATE_URL = ONGEKI_LOGIN_URL + "home/ratingTargetMusic/"
# SEGA ID
USERNAME = os.getenv("USERNAME")
PASSWORD = os.getenv("PASSWORD")

driver = webdriver.Chrome()

def sleep3():
    time.sleep(3)

def login():
    driver.get(ONGEKI_LOGIN_URL)
    name_box = driver.find_element_by_name("segaId")
    password_box = driver.find_element_by_name("password")
    form = driver.find_element_by_tag_name("form")

    name_box.send_keys(USERNAME)
    password_box.send_keys(PASSWORD)
    form.submit()

    # select first aime
    driver.find_element_by_tag_name("form").submit()

    driver.get(ONGEKI_RATE_URL)

    # execute JS
    driver.execute_script(open("../addRateInfos.js").read())

    # click alert
    Alert(driver).accept()

login()
sleep3()
#driver.close()
