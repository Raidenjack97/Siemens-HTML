//----------------------Save Value On plc----------------------------------	
function SaveData(name, val){

	var nome = name;
	var valore = val;
	url="In_HMI.html";
	sdata=escape(nome)+'='+valore;
	//console.log(sdata);
	$.post(url,sdata,function(result2){});
	refresh_dati();
  
}

//----------------------Button To Read Value----------------------------------	
$("#btn_Set").click(function(){

  name='"DB_Name"."Value Name"';
  val=$('input[id=SetVar_X]').val();
  SaveData(name,val);
  
});
