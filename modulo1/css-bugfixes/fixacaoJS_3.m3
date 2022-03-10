```function calculaNota(ex, p1, p2) {
  let exerc = ex
  let prova1 = p1*2
  let prova2 = p2*3 
  let media = (exerc+prova1+prova2)/6 
  
  
    if (media >= 9){
      return "A"
    }else if (media >= 7.5 && media <= 9){
      return "B"
    }else if (media >= 6 && media <= 7.5){
      return "C"
      
    }else{
      return "D"
    }
  
}```