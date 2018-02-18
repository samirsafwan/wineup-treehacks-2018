setwd("/Users/Aneesh/Desktop/treehacks-2018")
library("magrittr")
library("e1071")
library("caret")

set.seed(512)
load("wine_support_vector_machine.rba")
do.call(rep, input)
  callnames = c("fixed.acidity",       "volatile.acidity",     "citric.acid" ,        
                "residual.sugar" ,      "chlorides" ,           "free.sulfur.dioxide" ,
                "total.sulfur.dioxide", "density",              "pH"  ,                
                "sulphates" ,           "alcohol",              "quality" )         
  vec = data.frame(input)
  rownames(vec) = callnames
  vec = t(vec)
  temp = as.numeric(as.matrix(predict(svm.fit, vec))[1])-3

  write(temp, file = paste0( "/Users/Aneesh/Desktop/treehacks-2018/",  "hack.json"))