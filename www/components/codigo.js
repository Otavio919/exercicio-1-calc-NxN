// This is a JavaScript file
function calculo(e) {

  var val = document.getElementById('valor').value;

  if(val <= 0 || val == ""){
    navigator.notification.alert('valor não aceito, multiplicação entre numeros negativos é divisão', null, '!!Aviso!!', 'OKAY');
  }
  else{
    document.getElementById('creator').innerHTML = '';
    for(var x = 0; x <= val; x++){
      document.getElementById('creator').innerHTML += x + ' X ' + val + ' = ' + (x * val) + '<br>';
    }
  }
}
