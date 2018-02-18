### Full data with red and white wines
setwd("~/Downloads")

data = read.csv("winequality.csv")
colnames(data)

sample.set = sample(6497, 3500)
train = data[sample.set,]
cur = data[-sample.set,]
sample.test = sample(6497-3500, 1500)
validation = cur[-sample.test, ]
test = cur[sample.test,]


library('e1071')
max_mse = 0
cv.cost = 0
for (i in seq(-4, -2, 0.1)) {
  svm.fit = svm(train$quality~., data = train, kernel = 'linear', cost = 10^i, type = "C-classification")
  pred = predict(svm.fit, validation)
  test_mse = mean(pred == validation$quality)
  if (test_mse > max_mse) {
    max_mse = test_mse
    cv.cost = i
  }
}
max_mse
cv.cost

library('e1071')
svm.fit = svm(train$quality~., data = train, kernel = 'linear', cost = 10^cv.cost, type = "C-classification", cross = 5)
pred = predict(svm.fit, validation)
mean(pred != validation$quality)
pred =predict(svm.fit, test)
mean(pred != test$quality)

save(svm.fit, file = "wine_support_vector_machine.rba")
vec = data.frame()
callnames = c("fixed.acidity", "volatile.acidity","citric.acid" ,"residual.sugar" ,  "chlorides" ,"free.sulfur.dioxide" ,
              "total.sulfur.dioxide", "density","pH"  ,"sulphates" ,"alcohol","quality","good"  , "color"  )    
vec = data.frame(c(0,0,0,0,0,0,0,0,0,0,0,6,0,1))
rownames(vec) = colnames(data)
vec = t(vec)
predict(svm.fit, vec)
as.numeric(as.matrix(predict(svm.fit, vec))[1])-3

# Misclassification error is around 28%