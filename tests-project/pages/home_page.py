import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class HomePage:
    def __init__(self, driver):
        self.driver = driver
        driver.get("https://atid.store/")
        self.wait = WebDriverWait(driver, 10)
        self.navbar_buttons = {
            "home": (By.XPATH, "//li[@id='menu-item-381']//a[@class='menu-link'][normalize-space()='Home']"),
            "store": (By.XPATH, "//li[@id='menu-item-45']//a[@class='menu-link'][normalize-space()='Store']"),
            "men": (By.XPATH, "//li[@id='menu-item-266']//a[@class='menu-link'][normalize-space()='Men']"),
            "women": (By.XPATH, "//li[@id='menu-item-267']//a[@class='menu-link'][normalize-space()='Women']"),
            "accessories": (By.XPATH, "//li[@id='menu-item-671']//a[@class='menu-link'][normalize-space()='Accessories']"),
            "about": (By.XPATH, "//li[@id='menu-item-828']//a[@class='menu-link'][normalize-space()='About']"),
            "contact-us": (By.XPATH, "//li[@id='menu-item-829']//a[@class='menu-link'][normalize-space()='Contact Us']")
        }
        self.

    def click_navbar_button(self, button_name):
        button_name = button_name.lower()
        if button_name in self.navbar_buttons:
            self.wait.until(EC.presence_of_element_located(self.navbar_buttons[button_name])).click()
        else:
            raise ValueError(f"'{button_name}' does not exist in the navigation bar.")


    def if_url_contain(self, word):
        try:
            WebDriverWait(self.driver, 10).until(EC.url_contains(word))
            assert word in self.driver.current_url, f"Expected URL to contain '{word}', but got {self.driver.current_url}"
        except Exception as e:
            raise AssertionError(f"URL check failed: {e}")
