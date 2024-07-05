var formatarMoeda = require('./util.js')

module.exports = function gerarFaturaStr(fatura, calc) {
    let faturaStr = `Fatura ${fatura.cliente}\n`;
    for (let apre of fatura.apresentacoes) {
        faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
    return faturaStr;
}
  /*
  function gerarFaturaHTML(fatura, pecas) {
    li = ""
    for (let apre of fatura.apresentacoes) {
      li += `<li>  ${getPeca(pecas, apre).nome}: ${formatarMoeda(calcularTotalApresentacao(pecas,apre))} (${apre.audiencia} assentos) </li>\n`
    }
    return `<html>
  <p> Fatura ${fatura.cliente} </p>
  <ul>
  ${li}</ul>
  <p> Valor total: ${formatarMoeda(calcularTotalFatura(pecas, fatura.apresentacoes))} </p>
  <p> Créditos acumulados: ${calcularTotalCreditos(pecas, fatura.apresentacoes)} </p>
  </html>`
  }*/