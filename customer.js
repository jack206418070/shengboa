let flag = false;
$(".grid-box").each((index, el) => {
    if($(el).data('producttlid') !== undefined) {
        flag = true
    } else {
        flag = false
    }
})

if(flag){
    $(".grid-box .price")
    .append(`<div class="InstantAddCart-bottom" href="javascript:;" title="加入購物車">加入購物車</div>`)
    .on('click', function(e){
        let productId = e.target.parentNode.parentNode.parentNode.dataset.producttlid;
        console.log(productId)
        InstantAddToCart(productId,'1','-1','-1');
        return false;
    }
)}

let shareUrl_fb = `https://www.addtoany.com/add_to/facebook?linkurl=${window.location.href}&linknote=`
let shareUrl_line = `https://access.line.me/oauth2/v2.1/login?loginState=l3DGkZuhmS7obyON8R5Rm2&loginChannelId=1446101138&returnUri=/oauth2/v2.1/authorize/consent?scope=openid+profile+friends+groups+timeline.post+message.write&response_type=code&state=a9c0d7ccc101167654416de1781820&redirect_uri=https://social-plugins.line.me/lineit/loginCallback?returnUrl=https://social-plugins.line.me/lineit/share?url=${window.location.href}&client_id=1446101138#/`

$(".leftcol #main-image").append(`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" class="css">
<ul class="cust-share">
        <li style="font-size: 18px;">分享到：</li>
        <li>
            <a href="${shareUrl_fb}" target="_blank">
                <i class="fa-brands fa-facebook" style="color: blue !important"></i>
            </a>
        </li>
        <li>
            <a href="${shareUrl_line}" target="_blank">
                <i class="fa-brands fa-line" style="color: rgb(0, 184, 79)"></i>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa-brands fa-instagram-square" style="color: #FF574D"></i>
            </a>
        </li>
    </ul>`);


if(location.href.startsWith('https://www.shengbao.com.tw/product') || location.href.startsWith('https://www.shengbao.com.tw/%E6%9A%A2%E9%8A%B7%E5%95%86%E5%93%81') || location.href.startsWith('https://www.shengbao.com.tw/%E4%BF%AE%E8%AD%B7%E5%A5%BD%E7%9C%A0') || location.href.startsWith('https://www.shengbao.com.tw/%E5%AF%B5%E7%89%A9%E5%9A%B4%E9%81%B8') || location.href.startsWith('https://www.shengbao.com.tw/%E7%94%B7%E4%BB%95%E5%B0%88%E5%8D%80') || location.href.startsWith('https://www.shengbao.com.tw/%E9%8A%80%E9%AB%AE%E7%85%A7%E8%AD%B7') || location.href.startsWith('https://www.shengbao.com.tw/%E8%85%B8%E9%81%93%E4%BF%9D%E5%81%A5') || location.href.startsWith('https://www.shengbao.com.tw/%E9%98%B2%E8%AD%B7%E5%B0%88%E5%8D%80') || location.href.startsWith('https://www.shengbao.com.tw/%E7%AA%88%E7%AA%95%E7%BE%8E%E9%A1%8F') || location.href.startsWith('https://www.shengbao.com.tw/%E5%95%86%E5%93%81%E7%B8%BD%E8%A6%BD')){
    $("#body-outer-container").addClass('product-container')
}


$('.product-listing .image .flipper').each((index, el) => {
    let outIndex = index;
    let imageUrl = $(el).data('flipper')
    let image = $(el).attr('src')
    $(el).parent().append(`
        <img class="show-image" src="${image}"/>
        <img class="hide-image" src="${imageUrl}" style="opacity: 0"/>
    `)
    $(el).remove()
})

$('.product-box .image .flipper').each((index, el) => {
    let outIndex = index;
    let imageUrl = $(el).data('flipper')
    let image = $(el).attr('src')
    $(el).parent().append(`
        <img class="show-image" src="${image}"/>
        <img class="hide-image" src="${imageUrl}" style="opacity: 0"/>
    `)
    $(el).remove()

})


var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "103513122404647");
      chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v13.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
$('#myBody').append(`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" class="css">
    <a href="javascript:; target="_blank" class="lineTag" style="color: white; font-weight: bold"><i class="fa-brands fa-line" style="color: rgb(0, 184, 79)"></i>
    </a>
    <div class="line-content" style="display: none; position: fixed; right: 80px; bottom: 250px; width: 250px; background: #fff; z-index: 100; padding: 16px; border-radius: 10px; box-shadow: 3px 3px 3px #ccc">
        <div class="close-line" style="position: absolute; right: 16px; top: 16px; cursor: pointer; font-weight: bold; color: #cccccc;">X</div>
        <h3 style="font-size: 14px; margin-bottom: 8px;">訂閱我取得更多優惠內容</h3>
        <p style="margin-bottom: 16px">訂閱我，您可即時收到相關優惠或是活動內容。</p>
        <a class="line-link" style="background: rgb(0, 184, 79); padding: 8px 20px; color: #ffffff; font-weight: bold; cursor: pointer; border-radius: 5px" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=759zletq" target="_blank">
            連結 Line 帳號
        </a>
    </div>
`)
$('.lineTag').on('click', function(){
    if ($('.line-content').css('display') === 'none') {
        $('.line-content').css('display', 'block')   
    } else {
        $('.line-content').css('display', 'none')
    }
})
$('.close-line').on('click', function(){
    $('.line-content').css('display', 'none')
})