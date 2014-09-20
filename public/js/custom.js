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

$(document).ready(function(){
    var j = 0;
    $("section").each(function(){
        $(this).attr("rel", j);
        ++j;
    });
});