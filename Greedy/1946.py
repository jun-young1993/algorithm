testCount = int(input())

sexuals = []
for i in range(testCount) :
	n = int(input())
	rank = [list(map(int, input().split())) for _ in range(n)]
	
	rank_asc = sorted(rank)
	print("sorted")
	print(rank_asc)
	result = 1
	top = 0
	for i in range(1, len(rank_asc)):
		if rank_asc[i][1] < rank_asc[top][1]
		print("rank_asc[i][1]"+"rank_asc["+str(i)+"][1]")
		print(rank_asc[i][1])
		print("rank_asc[top][1]"+"rank_asc["+str(top)+"][1]")
		print(rank_asc[top][1])
		top = i

# for degree in sexuals :

# 	minNumber = 0
# 	newdegree = []
# 	# for deg in range(len(degree)) :
# 	# 	# degArray = deg.split()
# 	# 	int(degree[deg].split()[1])

# 	   degreeSort = sorted(degree, key = lambda x : x[0])
# 	   print(degreeSort)
	
# for sexual in sexuals :
	
# 	result = 0
# 	for i in range(len(sexual)) :
		
# 		diffValues = sexual[i].split()
# 		for x in sexual :
# 			diffX = x.split()
# 			if diffValues[0] > diffX[0] and diffValues[1] > diffX[1] :
	
# 				result = result + 1
# 				break
				
	
	
# 	print(len(sexual) - result)


			






