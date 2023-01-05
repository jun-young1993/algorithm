import heapq
count = int(input())



# cards = [int(input()) for _ in range(count)]
# cards_asc = sorted(cards)
cards = []
for _ in range(count) :
	heapq.heappush(cards, int(input()))



result = 0
for i in range(1,count) :
	if count == 1 :
		break
	
	plus = heapq.heappop(cards) + heapq.heappop(cards)
	
	result +=  plus
	
	heapq.heappush(cards,plus)
	



print(result)




