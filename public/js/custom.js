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
var _init = function(){
    var touchBtn = $('.responsiveButton'),
        body = $('body'),
        vsMenu = $('.vsMenu'),
        vsMenuPosition = parseInt(vsMenu.css('left')),
        vsMenuWidth = parseInt(vsMenu.width()),
        windowWidth = parseInt($(window).width());

    var _open = function(this_){
        this_.addClass('vsMenuOpen');
        vsMenu.scrollTop(0);
        vsMenu.animate({
            left: '0'
        }, function () {
            vsMenu.addClass('show-menu');
        });
        //body.animate({
        //left: vsMenuWidth
        //});
        body.addClass('vsMenuBody');

        /*body.css({
            position: 'absolute',
            overflow: 'hidden',
            width: windowWidth
        });*/
        //$('.headerWrap').css({
        //width: windowWidth
        //});
    };

    var _close = function(this_){
        this_.removeClass('vsMenuOpen');
        vsMenu.animate({
            left: -vsMenuWidth
        }, function () {
            vsMenu.removeAttr('style');
        });
        body.stop().animate({
            left: '0'
        }, function () {
            body.removeClass('vsMenuBody');
            body.removeAttr('style');
            vsMenu.removeClass('show-menu');
        });

    }

    touchBtn.click(function (e) {
        e.preventDefault();
        vsMenuPosition = parseInt(vsMenu.css('left'));
        if (vsMenuPosition == -vsMenuWidth) {
            _open($(this));
        } else {
            _close($(this));
        }
    });
    $('.close-button').click(function() {
        vsMenuPosition = parseInt(vsMenu.css('left'));
        _close(touchBtn);

    });
    $('body').click(function() {
        vsMenuPosition = parseInt(vsMenu.css('left'));
        if (vsMenuPosition === 0) {
            _close(touchBtn);
        }
    });
    $('body').on("click", ".vsMenu", function(event) {
        event.stopPropagation();
    });
    $(window).resize(function() {
        windowWidth = parseInt($(window).width());
        vsMenuWidth = parseInt(vsMenu.width());
        touchBtn = $('.responsiveButton');
        if(windowWidth >767){
            if(touchBtn.hasClass('vsMenuOpen')) {
                touchBtn.trigger('click');
            }
        }
    });
};


$(window).load(function() {
    _customRadioButton();   
});



$(document).ready(function(e){

    var element = '<div class="form-group"><label class="col-sm-2 control-label">Question 2</label><div class="control col-sm-10 qeditWrapper"><textarea class="form-control"></textarea><span class="deleteBtn"></span></div></div>';
   $(document).on("click",".deleteBtn",function(){
        $(this).parents("div.form-group").remove();
   });
    $(document).on("click",".btnAdd",function(e){
        e.preventDefault();
        $(element).insertBefore('.btnAddWrapper');
    });

    _init();

    var j = 0;
    $("section").each(function(){
        $(this).attr("rel", j);
        ++j;
    });

    $(".next").addClass("disabled");
    $(".prev").addClass("hide");

    var lengthCount = $(".cycle-slideshow section").length;
    var precent = 100 / lengthCount;

    console.log(precent)
    console.log(lengthCount)

    $(".progressBar").css("width",0)
    function check() {
        var prevStatusCheck = $(".cycle-slideshow section:nth-child(2)").hasClass("cycle-slide-active");
        var lastChildStatusCheck = $(".cycle-slideshow section:last-child").hasClass("cycle-slide-active");
        var nextStatus = $(".cycle-slideshow .cycle-slide-active .radioWrap").hasClass("checked");
        
        // next status check
        if (nextStatus) {
            $(".next").removeClass("disabled");
            console.log("deo11")
        } else {
            console.log("deo")
        }

        // prev check
        if (prevStatusCheck) {
            $(".prev").addClass("hide");
        } else {
            $(".prev").removeClass("hide"); 
        }

        // last child check
        if(lastChildStatusCheck) {
            $(".next").addClass("hide");
            $(".submit").removeClass("hide");
        } else {
            $(".next").removeClass("hide");            
        }
    }

    $(document).on("change",".cycle-slide-active input",function(){
        $(this).parent("span").addClass("checked")
        var nextStatus = $(".cycle-slideshow .cycle-slide-active .radioWrap").hasClass("checked")
        var comment = $(".cycle-slide-active textarea").val().length;
        console.log(comment)
        if( nextStatus && comment > 0) {
            $(".next").removeClass("disabled");
            var lastChildStatusCheck = $(".cycle-slideshow section:last-child").hasClass("cycle-slide-active");
            if(lastChildStatusCheck) {
                $(".progressBar").css("width",done+precent+"%");
                $(".submit").removeClass("disabled");
            }            
        }
    });

    $(document).on("change",".cycle-slide-active textarea",function(){
        var nextStatus = $(".cycle-slideshow .cycle-slide-active .radioWrap").hasClass("checked")
        var comment = $(".cycle-slide-active textarea").val().length;
        console.log(comment)
        if( nextStatus && comment > 0) {
            $(".next").removeClass("disabled");
            var lastChildStatusCheck = $(".cycle-slideshow section:last-child").hasClass("cycle-slide-active");
            if(lastChildStatusCheck) {
                $(".progressBar").css("width",done+precent+"%");
                $(".submit").removeClass("disabled");
            }            
        }
    });

    var done = 0;
    $(".next").on("click",function(e){
        $(".next").addClass("disabled");
        done += precent;
        $(".progressBar").css("width",done+"%");
        check();
    });

    $(".prev").on("click",function(e){
        check();
    });

});