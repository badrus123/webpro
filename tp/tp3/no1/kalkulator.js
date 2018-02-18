//variable buat menyimpan angka yang di klikk oleh button
		var angka ="";
		var tempt ="";
		var total ="";

		  //Set operation button listener
 		 	var btnAdd = false;
  			var btnMin = false;
  			var btnbagi = false;
  			var btnkali = false;


		 $(document).ready(function() {
		 	//untuk tombol button angka7
		 	$("#btn7").click(function() {
    			$("#test").text(angka + "7");
    				angka = $("#test").text();
   			});
   			$("#btn8").click(function() {
    			$("#test").text(angka + "8");
    				angka = $("#test").text();
   			});
   			$("#btn9").click(function() {
    			$("#test").text(angka + "9");
    				angka = $("#test").text();
   			});
   			$("#btn4").click(function() {
    			$("#test").text(angka + "4");
    				angka = $("#test").text();
   			});
   			$("#btn5").click(function() {
    			$("#test").text(angka + "5");
    				angka = $("#test").text();
   			});
   			$("#btn6").click(function() {
    			$("#test").text(angka + "6");
    				angka = $("#test").text();
   			});
   			$("#btn1").click(function() {
    			$("#test").text(angka + "1");
    				angka = $("#test").text();
   			});
   			$("#btn2").click(function() {
    			$("#test").text(angka + "2");
    				angka = $("#test").text();
   			});
   			$("#btn3").click(function() {
    			$("#test").text(angka + "3");
    				angka = $("#test").text();
   			});
   			$("#btn0").click(function() {
    			$("#test").text(angka + "0");
    				angka = $("#test").text();
   			});

   			// btn penambahan
        		 $("#btnAdd").click(function() {
    				tempt = angka;
    				btnAdd = true;
    				angka= ""; 
  			 		});
        		 $("#btnMin").click(function() {
    				tempt = angka;
    				btnMin = true;
    				angka= ""; 
  			 		});
        		 $("#btnbagi").click(function() {
    				tempt = angka;
    				btnbagi = true;
    				angka= ""; 
  			 		});
        		 $("#btnkali").click(function() {
    				tempt = angka;
    				btnkali = true;
    				angka= ""; 
  			 		});

        		 $("#btnResult").click(function() {
    					if (btnAdd) {
     						total = parseInt(angka) + parseInt(tempt);
     						btnAdd = false;
    					} else if (btnMin) {
    					 	total = parseInt(tempt) - parseInt(angka);
    					 	btnMin = false;
    					} else if (btnkali) {
    					 	total = parseInt(angka) * parseInt(tempt);
    					 	btnkali = false;
    					} else if (btnbagi) {
   					  		total = parseInt(tempt) / parseInt(angka);
     						btnbagi = false;
    					}

    					$("#test").text(total);
    						angka = "";
   						 	tempt = "";
   						});
	    		});
    	    		