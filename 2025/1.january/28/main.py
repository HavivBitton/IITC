from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service(executable_path="./chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://atid.store")
driver.maximize_window()

# Find Shop Now Button
shopNow_Button = driver.find_element(By.XPATH,"(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]")

shopNow_Button.click()
time.sleep(10)