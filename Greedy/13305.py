
count = int(input());
street = list(map(int, input().split()));
oil = list(map(int, input().split()));
result = street[0] * oil[0]
minOil = oil[0];
for i in range(1, count-1) : 
	
	if minOil >= oil[i] :
		minOil = oil[i]
	

	result = result + (minOil * street[i])




print(result)