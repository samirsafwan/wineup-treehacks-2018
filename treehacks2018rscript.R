setwd("/Users/Aneesh/Desktop/treehacks-2018")
needs(magrittr)
library("e1071")
set.seed(512)

do.call(rep, input)
  load("wine_support_vector_machine.rba")
  summary(svm.fit)
  vec = data.frame(input)
  print(vec)
  rownames(vec) = colnames(data)
  vec = t(vec)
  print(vec)
  as.numeric(as.matrix(predict(svm.fit, vec))[1])-3

