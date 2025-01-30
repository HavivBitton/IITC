from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time

service = Service(executable_path="./chromedriver")
# service = Service()
options = webdriver.ChromeOptions()
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

# 1 Open Browser
driver.get("http://localhost:5174")
driver.maximize_window()
time.sleep(3)

dropdown_button = driver.find_element(By.XPATH, "//a[normalize-space()='Dropdowns']")
dropdown_button.click()
time.sleep(3)

