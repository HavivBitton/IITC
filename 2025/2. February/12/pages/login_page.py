import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


    
class loginPage:
    def __init__(self, driver):
        self.driver = driver
        self.username_field = (By.ID, "username")
        self.password_field = (By.ID, "password")
        self.login_button = (By.XPATH, "//button[normalize-space()='Login']")
        self.wait = WebDriverWait(driver , 10)
            
    def enter_username(self, username):
        self.wait.until(EC.presence_of_element_located(self.username_field)).send_keys(username)
   
    def enter_password(self, password):
        self.wait.until(EC.presence_of_element_located(self.password_field)).send_keys(password)
        
    def submit_login(self):
        self.wait.until(EC.presence_of_element_located(self.login_button)).click()

    