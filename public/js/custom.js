var _customRadioButton = function(){
    $("input[type='radio']").each(function(){
        if(this.checked){
            if(this.disabled)
                $(this).wrap("<span class='radioWrap checked disabled'></span>");
            else
                $(this).wrap("<span class='radioWrap checked'></span>");
        }
        else{
            if(this.disabled)
                $(this).wrap("<span class='radioWrap disabled'></span>");
            else
                $(this).wrap("<span class='radioWrap'></span>");  
        }
        $(this).parent().after("<label for="+ $(this).attr("id")+">"+ $(this).attr("value") +"</label>")
    });

    $(document).on("change","input[type='radio']", function () {
        $("input[name="+ $(this).attr("name") +"]").parent().removeClass("checked");
        $(this).parent().addClass("checked");
    });
}


$(window).load(function() {
    _customRadioButton();   
});


$(document).ready(function(e){

/*    var element = '<div class="form-group"><label class="col-sm-2 control-label">Question 2</label><div class="control col-sm-10 qeditWrapper"><textarea class="form-control"></textarea><span class="deleteBtn"></span></div></div>';
   $(document).on("click",".deleteBtn",function(){
        $(this).parents("div.form-group").remove();
   });
    $(document).on("click",".btnAdd",function(e){
        e.preventDefault();
        $(element).insertBefore('.btnAddWrapper');
    });*/
});