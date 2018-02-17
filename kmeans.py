from collections import defaultdict

def dotProduct(vec1, vec2):
    dotProduct = 0
    for k in vec1:
        dotProduct += vec1[k]*vec2[k]
    return dotProduct

def kmeans(examples, K, maxIters):
    clusters = random.sample(examples, K)
    results = []
    prevLoss = -1
    for t in range(maxIters):
        numExamples = collections.defaultdict(float)
        centroidDotProducts = []
        curLoss = 0
        newClusters = []
        for i in range(K):
            newClusters.append({})
        for cluster in clusters:
            centroidDotProducts.append(dotProduct(cluster, cluster))                                      
        for example in examples:
            exampleDot = dotProduct(example, example)
            curMin = 0
            begin = True
            assign = 0
            for i in range(K):
                dist = centroidDotProducts[i] + exampleDot - 2*dotProduct(clusters[i], example)
                if begin:
                    curMin = dist
                    assign = i
                    begin = False 
                else:
                    if dist < curMin:
                        curMin = dist
                        assign = i
            results.append(assign)
            curLoss += curMin
            numExamples[assign] += 1.0
            increment(newClusters[assign], 1, example)
        for i in range(K):
            for key in newClusters[i]:
                (newClusters[i])[key] /= numExamples[i]
        if curLoss == prevLoss:
            return clusters, results, curLoss
        clusters = newClusters
        prevLoss = curLoss
        curLoss = 0
        results = []
    return clusters, results, prevLoss


# Test:
vec1 = defaultdict(int)
vec2 = defaultdict(int)
vec1[0] = 1
vec2[0] = 1
vec1[1] = 3
vec2[4] = 4
print dotProduct(vec1, vec2)

