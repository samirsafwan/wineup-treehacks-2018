setwd("~/Downloads")
needs(magrittr)
library("e1071")
library("caret")
set.seed(512)
library('e1071')
load("wine_support_vector_machine.rba")
do.call(rep, input)
  callnames = c("fixed.acidity",       "volatile.acidity",     "citric.acid" ,        
                "residual.sugar" ,      "chlorides" ,           "free.sulfur.dioxide" ,
                "total.sulfur.dioxide", "density",              "pH"  ,                
                "sulphates" ,           "alcohol",              "quality" )         
vec = data.frame(input)
rownames(vec) = callnames
vec = t(vec)
as.numeric(as.matrix(predict(svm.fit, vec))[1])-3