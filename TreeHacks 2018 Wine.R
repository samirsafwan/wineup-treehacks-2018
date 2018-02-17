setwd("~/Downloads")

data = read.csv("winequality-red.csv")
colnames(data)

sample.set = sample(1599, 1000)
train = data[sample.set,]
sample.test = sample(599, 200)
validation = data[sample.test, ]
test = data[-sample.test,]


library('e1071')
max_mse = 0
cv.cost = 0
for (i in seq(-8, -2, 0.1)) {
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
svm.fit = svm(train$quality~., data = train, kernel = 'linear', cost = cv.cost, type = "C-classification", cross = 5)
pred = predict(svm.fit, validation)
mean(pred != validation$quality)
pred =predict(svm.fit, test)
mean(pred != test$quality)
