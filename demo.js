// JavaScript Document
	function html5_storage_support() {
  		//check to see if this browser support local storage: return true if so, false if not
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	}
function apply(){
   var name = document.forms["formID"]["nameEvent"].value;
   var location = document.forms["formID"]["nameEvent2"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
	 else if (location == "") {
        alert("location must be filled out");
        return false;
    }

   select = document.getElementById('select1'); // or in jQuery use: select = this;
   if (select.value=="") {
    alert("should be select Month");
  return false;
   }
   
   select2 = document.getElementById('select2'); // or in jQuery use: select = this;
   if (select2.value=="") {
    alert("should be select Date");
  return false;
	
}
   select3 = document.getElementById('select3'); // or in jQuery use: select = this;
   if (select3.value=="") {
    alert("should be select Day");
  return false;
	
}
 select4 = document.getElementById('select4'); // or in jQuery use: select = this;
   if (select4.value=="") {
    alert("should be select Hour");
  return false;
	
}
 select5 = document.getElementById('Max'); // or in jQuery use: select = this;
   if (select5.value=="") {
    alert("should be select Max");
  return false;
	
}
 select6 = document.getElementById('Min'); // or in jQuery use: select = this;
   if (select6.value=="") {
    alert("should be select Min");
  return false;
	
}
if (html5_storage_support()) {
  	    localStorage.setItem("name",name);
		localStorage.setItem("location",location);
		localStorage.setItem("Month",select.value);
        localStorage.setItem("Date",select2.value);
        localStorage.setItem("Day",select3.value);
		localStorage.setItem("Hour",select4.value);
		localStorage.setItem("Max",select5.value);
		localStorage.setItem("Min",select6.value);
		
		
	   checkbox = document.getElementById('morning'); // or in jQuery use: select = this;
       if (checkbox.checked=="false") {
       localStorage.setItem("am","pm");
	    window.open("event.html");
       }
       else {
      localStorage.setItem("am","am");
	   window.open("event.html");
       }
	   
	   
	   checkbox2 = document.getElementById('man'); // or in jQuery use: select = this;
       if (checkbox2.checked=="false") {
       localStorage.setItem("man","woman");
	    window.open("event.html");
       }
       else {
      localStorage.setItem("man","man");
	   window.open("event.html");
       }
	   
	  checkbox3 = document.getElementById('both'); // or in jQuery use: select = this;
       if (checkbox2.checked=="true") {
       localStorage.setItem("man","both");
	    window.open("event.html");
       } 
	   
	   
	 }
	else {
	 alert("browser not support local storage and javascript  ");	
		}
	
	
	
	
	
}
function SomeFunction(){
 hh = document.getElementById("myTable");
hh.innerHTML +="<tr><td><b>"+localStorage.getItem("name")+"</b></td><td><b> "+ localStorage.getItem("location") +"</b></td><td><b> "+ localStorage.getItem("Month") +"</b></td><td><b>"+ localStorage.getItem("Date")+"</b></td><td><b>"+ localStorage.getItem("Day")+"</b></td><td><b>"+localStorage.getItem("Hour")+" "+ localStorage.getItem("am")+"</b></td><td><b>"+localStorage.getItem("Max")+"</b></td><td><b>"+localStorage.getItem("Min")+"</b></td><td><b>"+localStorage.getItem("man")+"</b></td></tr>";	
}


function ch1(){
 morning = document.getElementById('morning'); 
night.checked=false;	
	
	}

function ch2(){
 night = document.getElementById('Night');
morning.checked=false;	
}