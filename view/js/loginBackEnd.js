// 前端失焦、聚焦验证
$(function () {
    //登录用户名的失焦验证
    $("input[name='user']").on("blur",function () {
        $userName = $("input[name='user']").val();
        if ($userName != ''){
            console.log($userName);
            $("#uworn").text("用户名合法！");
            $("#uworn").css({color:"green"});
            if ($userName == 0){
                $("#uworn").text("用户名已存在！");
                $("#uworn").css({color:"red"});
            }
        }
        else {
            $("#uworn").text("用户名不能为空！");
            $("#uworn").css({color:"red"});
        }
    })
    //登录用户名的聚焦验证
    $("input[name='user']").on("focus",function () {
        $userName = $("input[name='user']").val();
        if ($userName != ''){
            console.log($userName);
            $("#uworn").text("用户名合法！");
            $("#uworn").css({color:"green"});
            if ($userName == 0){
                $("#uworn").text("用户名已存在！");
                $("#uworn").css({color:"red"});
            }
        }
        else {
            $("#uworn").text("用户名不能为空！");
            $("#uworn").css({color:"red"});
        }
    })


    //登录密码失焦验证
    $("input[name='psd']").on("blur",function () {
        $lpsd = $("input[name='psd']").val();
        if ($lpsd != ''){
            console.log($lpsd);
        }
        else {
            $("#pworn").text("输入密码不能为空！");
            $("#pworn").css({color:"red"});
        }
    })
    //登录密码聚焦验证
    $("input[name='psd']").on("focus",function () {
        $lspsd = $("input[name='psd']").val();
        if ($lspsd != ''){
            console.log($lspsd);
        }
        else {
            $("#pworn").text("输入密码不能为空！");
            $("#pworn").css({color:"red"});
        }
    })

    //验证码失焦验证
    $("input[name='code']").on("blur",function () {
        $code = $("input[name='code']").val();
        if ($code != '' && $code==$code){
            console.log($code);
            $("#cworn").text("验证码正确！");
            $("#cworn").css({color:"green"});

        }
        else {
            $("#cworn").text("验证码不能为空！");
            $("#cworn").css({color:"red"});
        }
    })
    //验证码聚焦验证
    $("input[name='code']").on("focus",function () {
        $lcode = $("input[name='code']").val();
        if ($lcode != '' && $lcode==$lcode){
            console.log($lcode);
            $("#cworn").text("验证码正确！");
            $("#cworn").css({color:"green"});

        }
        else {
            $("#cworn").text("验证码不能为空！");
            $("#cworn").css({color:"red"});
        }
    })

})
