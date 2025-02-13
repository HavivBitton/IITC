import pytest
from selenium import webdriver

import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from pages.home_page import HomePage

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()
    
def check_title(driver, title):
    return title in driver.title 
    
# navbar check
@pytest.mark.parametrize("page",["store","men","women","accessories","about","contact-us"])
def test_click_navbar(driver ,page):
        home_page = HomePage(driver)
        home_page.click_button(page)  
        home_page.if_url_contain(page)
      
@pytest.mark.parametrize(
    "btn, page", 
    [
        ("shopNowBtn", "store"), 
        ("findMoreBtn", "contact-us"), 
        ("womenShopNowBtn", "women"), 
        ("menShopNowBtn", "men"), 
        ("checkOutBtn", "accessories")
    ]
)
def test_click_home_btn(driver, btn, page):
    home_page = HomePage(driver)
    home_page.click_button(btn)  
    home_page.if_url_contain(page)
