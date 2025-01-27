# fav_movie_list = ["Harry Potter", "ironman"]
# fav_movie_list.append("Shrek")
# print(fav_movie_list)
# fav_movie_list.remove("ironman")
# print(fav_movie_list)


# 1
# colors = ["red", "green","blue","purple"]
# print(colors[0],colors[-1])

# 2
# colors.append("yellow")
# colors.remove(colors[1])
# print(colors)

# 3
# list_1 = [1,2,3,4,5,6,7,8,9,10]
# for num in list_1:
#     if num % 2==0:
#         print(num)

# 4
# fruits = ["apple", "banana", "grape"]

# print(fruits[::-1])

# fruits.reverse()
# print(fruits)

# 5
# num_list = [5,4,6,7,3,5]
# count = 0
# for num in num_list:
#     if num == 5:
#         count +=1
# print(count)

# 6 
# list1 = [1, 2, 3]
# list2 = [4, 5, 6]
# combined_list = list1 + list2
# print(combined_list)

# 7
# list1=[4,7,2,9]
# ascending = sorted(list1)
# descending = sorted(list1, reverse=True)
# print(ascending)
# print(descending)

# 8
# fruits =("banana", "apple", "orange")
# print(fruits[1])

# 9

# 10
# num = (10,20,30)
# num_list = list(num)
# print(num_list)
# print(tuple(num_list))

# 11
# student ={
#     "name":"yosef",
#     "age" :24,
#     "grade": 100
# }
# print(student["name"])

# 12
# student["email"] ="yosef@gmail.com"
# print(student)

# 13
# del student["grade"]
# print(student)

# 14
num_dict = {"a":1,"b":2,"c":3}
# print(num_dict.keys())
# print(num_dict.values())
# print(tuple(num_dict))
                      
# 15
# while i<num_dict.keys()
# key in num_dict.keys():
#     if key == 'd' : 

# 16
dict_1 = {'x': 10}
dict_2 = {'y': 20}
comb_dict = dict_1 + dict_2
print(comb_dict)

# 17


# cube = [x**3 for x in range(1,11)]
# print(cube)

# list1 = [1,3,5,7,9]
# new_list = [x for x in list1 if x>5]
# print(new_list)                                                                                                                                                                                     

# list =["hello","world","python"]
# upper = [(word[0].upper()+ word[1:]) for word in list]
# print(upper)


# Dictionary methods
# people = {"haviv":24 , "tal":23, "yosef":24 }
# print(people.keys())
# print(people.values())
# for name, age in people.items():
#     print (f"{name} is {age} years old")

# fruit = {"apple": 1,"banana": 2}
# print(fruit.items())
