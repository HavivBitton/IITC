from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service(executable_path="./chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://atid.store/store/")
driver.maximize_window()

# Basic Level Questions
# 1
def check_if_title_contain(word):
    page_title = driver.title
    if word in page_title:
        print(f"✅ Page loaded successfully. Title contains {word}:", page_title)
    else:
        print("❌ Page title verification failed! Title:", page_title)

check_if_title_contain("ATID")

# 2
def check_the_url (expectedUrl):
    current_url = driver.current_url
    if current_url == expectedUrl:
        return "✅URL is correct:", current_url
    else:
        return f"❌URL mismatch! Expected: {expectedUrl}, but got: {current_url}"


expected_url = "https://atid.store/store/"
print(check_the_url(expected_url))

# 3
def check_if_element_by_id_exists(xpath):
    try:
        element = driver.find_element(By.XPATH, xpath)
        print(f"✅ The element '{element.text}' exists on the page.")
    except:
        print("❌ The element was not found.")

shop_now_xpath = "(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]"
driver.get("http://atid.store")

check_if_element_by_id_exists(shop_now_xpath)

# 4
def if_wordsArray_exist_in_nav(navID, array):
    nav_items = driver.find_element(By.ID, navID ).text
    for item in array:
        if item.upper() in nav_items:
            print(f"✅ '{item}' is present in the navigation menu.")
        else:
            print(f"❌ '{item}' is MISSING from the navigation menu!")

expected_items = ["Home", "Shop", "Cart", "men"]
if_wordsArray_exist_in_nav("ast-hf-menu-1", expected_items)


# 5
def if_button_redirects_to_page(button, pageUrl):
    button.click()
    check_url_answer = check_the_url(pageUrl)
    if '✅URL is correct:' in check_url_answer :
        print("ok")
    else: 
        print("not ok")

shop_now_button = driver.find_element(By.XPATH, shop_now_xpath)
if_button_redirects_to_page (shop_now_button, "https://atid.store/store/")

# 6
def check_if_element_by_class_exists(class_name):
    try:
        element = driver.find_element(By.CLASS_NAME, class_name)
        print("✅ The element exists on the page.")
    except:
        print("❌ The element was not found.")

class_name = "site-logo-img"
driver.get("http://atid.store")
check_if_element_by_class_exists(class_name)


# search_input_Button = driver.find_element(By.XPATH,"(//input[@id='wc-block-search__input-1'])[1]")
# search_input_Button.send_keys("ATID Black Shoes")
# time.sleep(2)
# search_Button = driver.find_element(By.XPATH,"(//button[@aria-label='Search'])[1]")
# search_Button.click()
# time.sleep(2)
# shoes_h1=driver.find_element(By.XPATH,"(//h1[normalize-space()='ATID Black Shoes'])[1]")
# if shoes_h1:
#     print(shoes_h1.text)

# expected_url = "https://atid.store/product/atid-black-shoes/"
# current_url = driver.current_url

# if current_url == expected_url:
#     print("URL is correct:", current_url)
# else:
#     print(f"URL mismatch! Expected: {expected_url}, but got: {current_url}")

# time.sleep(5) 
