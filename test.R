needs(magrittr)
set.seed(512)
getwd()

do.call(rep, input) %>% 
  strsplit(NULL) %>% 
  sapply(sample) %>% 
  apply(2, paste, collapse = "")