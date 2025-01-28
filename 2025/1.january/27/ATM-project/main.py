from tkinter import Tk, Label, Button
from Bank import BankAccount

haviv_account = BankAccount("haviv")

root = Tk()

root.geometry("488x250")
root.title("ATM Bank test")

def add_balance():
    haviv_account.deposit(50)
    balance_data.config(text=f"{haviv_account.check_balance()}")
def remove_balance():
    haviv_account.withdraw(50)
    balance_data.config(text=f"{haviv_account.check_balance()}")



Label(root, text=f"Welcome back, {haviv_account.account_holder}").pack()
Label(root, text="Balance", font=("Arial", 25)).pack()

balance_data = Label(root, text=f"{haviv_account.check_balance()}", font=("Arial", 45))
balance_data.pack()
Button(root, text="+", command=add_balance).pack()
Button(root, text="-", command=remove_balance).pack()
root.mainloop()



