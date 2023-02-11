

number = input()

#  고급 풀이 

cnt = 0
for i in range(len(number) -1) :
	if number[i] != number[i+1] :
		cnt += 1

print((cnt+1)//2)



#  내꺼 초보 풀이.. ㅜㅜ
# count = 0
# zero = 0
# one = 0
# before = number[0]
# for n in number :

# 	if int(before) != int(n) :
# 		if 0 == int(n) :
# 			zero += 1
# 			before = 0
# 		else :
# 			one += 1
# 			before = 1

# if int(zero) > int(one) :
# 	print(zero)
# else :
# 	print(one)


