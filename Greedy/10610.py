

number = input()


if '0' not in number :
	print(-1)
else :
	plus = 0
	for i in number :
		plus += int(i)
	if plus % 3 != 0 :
		print(-1)
	else :
		numberDesc = sorted(number, reverse = True)
		
		print(''.join(numberDesc))






# 보류
	
