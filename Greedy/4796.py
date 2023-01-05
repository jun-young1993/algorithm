# 연속하는 8일중 5일동안만 사용할수 있다 휴가는 20일
# res 20/8 = 2 * 5
# 20%8 = 4

# 연속하는 8일중 2일동안만 사용할수 있다 휴가는 20일
# res 20/8 = 2 * 2
# 20%8 = 4

# 연속하는 8일중 5일동안만 사용할수 있다 휴가는 17일
# 16일 옻챁 10일


count = 1
while True :
	inputs = input().split(' ')
	# 캠핑장연속일수
	P = int(inputs[1])
	# 캠핑장 최대일수
	L = int(inputs[0])
	# 휴가일수
	V = int(inputs[2])
	if (P + L + V ) == 0 :
		break	
	
	S = int(V/P)
	
	value = (L * S) + (int(min(V%P,L)))


	print("Case "+str(count)+": "+str(value))
	count += 1
	
