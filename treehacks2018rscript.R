setwd("~/Desktop/treehacks")
do.call(rep, input) %>% 
  load("wine_support_vector_machine.rba")
  vec = data.frame(input)
  rownames(vec) = colnames(data)
  vec = t(vec)
  as.numeric(as.matrix(predict(svm.fit, vec))[1])-3

