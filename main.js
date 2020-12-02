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

const dates = ['12-10-2020','12-18-2020','12-1-2020','12-20-2020','12-8-2020']

function isOccuped(jour){
	for(k=0;k<dates.length;k++){
		if(jour===parseInt(dates[k].split('-')[1])){
			return true;
		}
	}
	return false;
}

function fill(month,year){
	var start =day_num(1,month,year);
	var end = new Date(year, month, 0).getDate();
	for(i=1;i<=35;i++){
		document.getElementById(i).innerHTML="";
		document.getElementById(i).className=document.getElementById(i).className.replace(" occuped","");
	}
	for(i=1;i<=end;i++){
		if(isOccuped(i) || (i+start-1)%7==0 || (i+start-1)%7==1 ){
			document.getElementById(i+start-1).className+=" occuped";
		}
		document.getElementById(i+start-1).innerHTML=i;
	}
}

function init(){
	var d = new Date();
	var ele =document.getElementById("month");
	ele.value=d.getMonth()+1;
	ele.addEventListener("change",(e)=>{
		fill(parseInt(e.target.value),parseInt(document.getElementById("years").value));
	})
	ele=document.getElementById("years");
	ele.addEventListener("change",(e)=>{
		fill(parseInt(document.getElementById("month").value),parseInt(e.target.value));
	})
	ele.value=d.getFullYear();
	fill(d.getMonth()+1,d.getFullYear());
	for(i=1;i<=35;i++){
		document.getElementById(i).addEventListener('click',(e)=>{
			if(e.target.className.includes("occuped")){
				Swal.fire({
				  icon: 'error',
				  title: 'Oops...',
				  text: 'This date is already occuped!',
				})
			}else{
				var day = e.target.innerHTML;
				var month = document.getElementById('month').value;
				var year = document.getElementById('years').value;
				document.location.href="./insert.html?days="+day+"&month="+month+"&year="+year;
			}
		})
	}
}

init();