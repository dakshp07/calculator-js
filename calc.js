$(".sub").on("click",function even(){
    if($(".fi").val()=="" &&  $(".se").val()=="")
    {
        alert("Please Enter The Numbers");
    }
    else{
        var num1=$(".fi").val();
        var num2=$(".se").val();
        var sum=parseInt(num1)+parseInt(num2);
        var diff=parseInt(num1)-parseInt(num2);
        var pro=parseInt(num1)*parseInt(num2);
        var div=parseFloat(num1)/parseFloat(num2);
        $(".te").val(sum);
        $(".fr").val(diff);
        $(".fif").val(pro);
        $(".si").val(div);
    }
    
});
$(".clr").on("click",function odd(){
    $(".fi").val("") &&  $(".se").val("") && $(".te").val("") && $(".fr").val("") && $(".fif").val("") && $(".si").val("");
});