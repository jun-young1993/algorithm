number = input()
numbers = number.split(' ')

sourceNumber = int(numbers[0])
targetNumber = int(numbers[1])


count = 0
while True :
	count += 1
	# print(targetNumber)
	
	if sourceNumber == targetNumber :
		print(count)
		break
	if (sourceNumber > targetNumber) or (targetNumber % 2 != 0 and targetNumber % 10 != 1) :
		print(-1)
		break
	
	

	if targetNumber % 10 == 1 :
		targetNumber //= 10
	else :
		targetNumber //= 2
	
		
	
	



# count = 0
# success = False
# while tempNumber <= targetNumber :
# 	tempNumber = tempNumber * 2
# 	print(tempNumber)
# 	count += 1
# 	if(tempNumber == targetNumber) :
# 		success = true
# 		break
# print(count)
