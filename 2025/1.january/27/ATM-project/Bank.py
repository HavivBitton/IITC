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
        print(f"Current balance: ${self.__balance}.")
        return self.__balance
    
class SavingsAccount(BankAccount): 
    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be greater than 0.")
        else:
            bonus = amount *0.02
            self.__balance += (amount + bonus)
            print(f"Deposited ${amount}. Updated balance: ${self.__balance}.")