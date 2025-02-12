import pytest
from selenium import webdriver

from pages.login_page import loginPage

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()
    
def check_title(driver, title):
    return driver.title == title
    
def test_login(driver):
    login_page = loginPage(driver)
    driver.get("http://127.0.0.1:5500/client/index.html")
    login_page.enter_username("baba")
    login_page.enter_password("123")
    login_page.submit_login()
    
    assert check_title(driver, "dashboard")