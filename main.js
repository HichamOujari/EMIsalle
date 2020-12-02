//document.getElementById("20").className+=" occuped";
//document.getElementById("20").className=document.getElementById("20").className.replace(" occuped","");

/*
for(i=1;i<nbr;i++){
	document.getElementById("20")
}*/


function day_num(day,month,year){
	var date =new Date(month+'-'+day+'-'+year);
	switch(date.toString().split(' ')[0]){
		case 'Tue' :return 3;break; 
		case 'Wed' :return 4;break;
		case 'Thu' :return 5;break;
		case 'Fri' :return 6;break;
		case 'Sat' :return 7;break;
		case 'Sun' :return 1;break;
		case 'Mon' :return 2;break;
	}
}


function fill(month,year){
	var start =day_num(1,month,year);
	var end = new Date(year, month, 0).getDate();
	for(i=1;i<=end;i++){
		//if(i.isOccupe){
			//document.getElementById(i+start-1).className+=" occuped";
		//}
		document.getElementById(i+start-1).innerHTML=i;
	}
}

fill(11,2020);
