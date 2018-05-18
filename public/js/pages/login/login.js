$('#loginNow').click(function(){
    $.ajax({
       type:'POST',
       url: '/loginuser',
       data: {test:'helloss'},
       success: function(result){
            console.log(result);
       } 
    });
});