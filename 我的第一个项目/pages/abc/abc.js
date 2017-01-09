
var app = getApp()  
Page({  
  data: {  
      imgUrls: [  
       {  
          link:'/pages/index/index',  
          url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'   
       },{  
          link:'/pages/logs/logs',  
          url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'   
       },{  
          link:'/pages/test/test',  
          url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'   
       }   
    ],  
    indicatorDots: true,  
    autoplay: true,  
    interval: 3000,  
    duration: 500,  
    userInfo: {}  
  },  
  onLoad: function () {  
    console.log('onLoad test');  
  }
  // timeout: function () {
    
  //       var oBtn=document.getElementsByTagName("button")[0];

  //       oBtn.onclick=function(){
  //           setInterval(function(){
  //               //读取当前的毫秒
  //               var oDate=new Date();

  //               var now_time=oDate.getTime();//当前的毫秒数

  //               //时间调整到未来的日期,在读出毫秒数

  //               var year=2017
  //               var month=0;
  //               var date=1;

  //               oDate.setFullYear(year,month,date);

  //               //把时间调整到0时0分0秒
  //               oDate.setHours(0,0,0,0);

  //               var futrue_time=oDate.getTime();//得到未来的毫秒数

  //               var dif_time=(futrue_time-now_time)/1000;//得到秒数

  //               //计算出日
  //               var all_day=parseInt(dif_time/86400);

  //               //把日过滤掉
  //               dif_time=dif_time%86400;

  //               //计算出小时
  //               var all_hour=parseInt(dif_time/3600);

  //               //过滤掉小时
  //               dif_time=dif_time%3600;

  //               //计算出分
  //               var all_mon=parseInt(dif_time/60);

  //               //过滤完分,就只剩下秒了
  //               var all_sex=parseInt(dif_time%60);

  //               var showtime=document.getElementById("showtime");

  //               showtime.innerHTML=("相差"+all_day+"天"+all_hour+"小时"+all_mon+"分钟"+all_sex+"秒");
  //           },1000);
  //       }
  //   }
  
})  