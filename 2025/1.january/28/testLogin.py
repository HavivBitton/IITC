from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service(executable_path="./chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://practicetestautomation.com/practice-test-login/")
driver.maximize_window()

# Find Shop Now Button
username_input = driver.find_element(By.XPATH,"(//input[@id='username'])[1]")
password_input = driver.find_element(By.XPATH,"(//input[@id='password'])[1]")
submit_button =  driver.find_element(By.XPATH,"(//button[normalize-space()='Submit'])[1]")
username_input.send_keys("student")
password_input.send_keys("Password123")
time.sleep(1)
submit_button.click()

success_message = driver.find_element(By.XPATH,"(//h1[normalize-space()='Logged In Successfully'])[1]")
if success_message:
    print("Found success message",success_message)


time.sleep(1)
# Error Check
logout_button =  driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[2]/div[1]/div[1]/div[1]/a[1]")
logout_button.click()
print("logout")


username_input = driver.find_element(By.XPATH,"(//input[@id='username'])[1]")
password_input = driver.find_element(By.XPATH,"(//input[@id='password'])[1]")
submit_button =  driver.find_element(By.XPATH,"(//button[normalize-space()='Submit'])[1]")
username_input.send_keys("incorrectUser")
password_input.send_keys("Password123")
time.sleep(1)
submit_button.click()

error_message = driver.find_element(By.XPATH,"(//div[@id='error'])[1]")
if error_message:
    print("Found error message",error_message)



time.sleep(20)