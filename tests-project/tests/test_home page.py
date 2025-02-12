import pytest
from selenium import webdriver
from pages.home_page import HomePage


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()