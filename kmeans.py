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