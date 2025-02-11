import pytest
from selenium import webdriver 

def test_google_title():
    driver = webdriver.Chrome()
    driver.get("https://www.github.com")
    assert  "GitHub" in  driver.title