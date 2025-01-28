print ("Hello World")

class SuperHero:
    def __init__(self, name, alias, power, strength_level, team, is_active=True):
        self.name = name
        self.alias = alias 
        self.power = power
        self.strength_level = strength_level
        self.team = team 
        self.is_active = is_active
        
    def introduce(self):
        print(f"I am {self.alias}, also known as {self.name}. My power is {self.power}, and I fight for {self.team}!")
    def fight_villain(self,villain_name):
        self.decrease_strength_level()
        self.decrease_strength_level()
        self.decrease_strength_level()
        print(f"{self.alias} is fighting {villain_name}!")
        print(f"{self.alias} strength level now is {self.strength_level}!")
    def train(self, hours):
        self.strength_level += 10 * hours
        print(f"{self.alias} trained for {hours} hour(s). Strength level is now {self.strength_level}.")
    def decrease_strength_level(self):
        self.strength_level -= 5
        if self.strength_level < 10:
            self.is_active = False
    def retire(self):
        self.is_active = False
        print(" {self.alias} has retired from hero duties.")
    def reactivate(self): 
        self.is_active = True
        print(" {self.alias} is back in action!")

superman = SuperHero(
    name="Clark Kent",
    alias="Superman",
    power="Super strength, flight, heat vision, invulnerability",
    strength_level=100,
    team="Justice League",
    is_active=True
)

spiderMan = SuperHero(
    name="Peter Parker",
    alias="Spider-Man",
    power="Wall-crawling, enhanced agility, spider sense",
    strength_level=85,
    team="Avengers",
    is_active=True
)

# spiderMan.introduce()
# superman.introduce()

# spiderMan.train(1)

# superman.fight_villain("ridel")

class BankAccount:
    def __init__(self, account_holder):
        self.account_holder = account_holder
        self.__balance = 0

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be greater than 0.")
        else:
            self.__balance += amount
            print(f"Deposited ${amount}. Updated balance: ${self.__balance}.")

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal amount must be greater than 0.")
        elif amount > self.__balance:
            print(f"Insufficient funds. Available balance: ${self.__balance}.")
        else:
            self.__balance -= amount
            print(f"Withdrew ${amount}. Updated balance: ${self.__balance}.")

    def check_balance(self):
        print(f"Current balance: ${self.balance}.")
        return self.__balance
    
class SavingsAccount(BankAccount): 
    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be greater than 0.")
        else:
            bonus = amount *0.02
            self.__balance += (amount + bonus)
            print(f"Deposited ${amount}. Updated balance: ${self.__balance}.")



john_account = BankAccount(account_holder="John Doe", balance=1000)

john_account.deposit(500)    
john_account.withdraw(200)   
john_account.check_balance()   
john_account.withdraw(1500)   

yosef_account = SavingsAccount(account_holder="yosef sabag")


