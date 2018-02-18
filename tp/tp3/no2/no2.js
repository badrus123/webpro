var a="";
var b="";
var c="";
var count=0;
var gender="";
$(document).ready(function(){
		$("#simpan").click(function(){
    		a = $("#name").val();
    		b = $("#nim").val();
    		c = $("#kelas").val();
    		gender = $("input[name='jk_input']:checked").val();
    			count += 1;
                $('#tbl').append(
                     '<tr>'
                    + '<td>'+a+'</td>'
                    + '<td>'+b+'</td>'
                    + '<td>'+c+'</td>'
                    + '<td>'+gender+'</td>'
                    + '<td><button id="delete">delete</button></td></tr>'
            );

            $("#delete").click(function() {
    		var delConfirm = confirm("Are you sure want to delete this row?");
    		if (delConfirm) {
    			$(this).parents("tr").remove();
    				}	
    		});
    	});		
});