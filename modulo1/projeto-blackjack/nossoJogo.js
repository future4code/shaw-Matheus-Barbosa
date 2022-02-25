/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
    console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("Você deseja iniciar o jogo?")){

   let cartas =[]
   
   for (i=0;i < 5;i++){
      cartas[i] = comprarCarta()
   }
   
   let jogador = {
      nome : "Usuário",
      carta1 : cartas[0].texto,
      carta2 :cartas[1].texto,
      pontuacao : cartas[0].valor + cartas[1].valor
   }

   let jogadorPC = {
      nome: "Computador",
      carta1 : cartas[2].texto,
      carta2 : cartas[3].texto,
      pontuacao : cartas[2].valor + cartas[3].valor

   }

   console.log(jogador.nome + " - cartas: " + jogador.carta1 + " " + jogador.carta2+ " - pontuação " + jogador.pontuacao)
   console.log(jogadorPC.nome + " - cartas: " + jogadorPC.carta1 + " " + jogadorPC.carta2+ " - pontuação " + jogadorPC.pontuacao)
      
   if (jogador.pontuacao > jogadorPC.pontuacao){
      console.log("O " + jogador.nome + " ganhou!!")
   }else if (jogador.pontuacao < jogadorPC.pontuacao){
      console.log("O " + jogadorPC.nome + " ganhou!")
   }else{
      console.log("Empate!")
   }



}else{
   console.log("O jogo acabou")
}
*/
