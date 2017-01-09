//index.js
//获取应用实例
var app = getApp();
Page({
    data:{
        imgUrls:[
            {
                linkin:'../stuClass/stuClass',
                url:'/images/banner01.jpg'
            },{
                linkin:'../coffee/coffee',
                url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
            },{
                linkin:'../friend/friend',
                url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            },
        ],
        indicatorDots:true,
        autoplay:true,
        interval:2000,
        duration: 500 ,
        subject:null, 
        outline_subject:null     
    },
    onLoad: function(options){
        var subject = [
            {
                date:"11.25 18:30",
                teacherName:"Benjhi | 英国皇家医学院硕士",
                photo:"/images/touxiang/touxiang (20).jpg",
                background_img:"/images/subject_bg_03.jpg",
                detials:"今天跨年今天跨年今天跨年今天跨年今天跨年牛逼的不行牛逼的不行牛逼的不行牛逼的不行牛逼的不行牛逼的不行牛逼的不行",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5"
            },
            {
                date:"12.25 18:30",
                teacherName:"荀晓伟 | 英国皇家医学院硕士",
                photo:"/images/touxiang/touxiang (16).jpg",
                background_img:"/images/subject_bg_03.jpg",
                detials:"中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5"
            },{
                date:"12.28 18:30",
                teacherName:"薛琪 | 阴阳师医学院硕士",
                photo:"/images/touxiang/touxiang (10).jpg",
                background_img:"/images/subject_bg_03.jpg",
                detials:"今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5"
            }
        ];
        var outline_subject = [
                {
                    id:"green",
                    adress:"上海复旦大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },{
                    id:"red",
                    adress:"北京清华大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },{
                    id:"yellow",
                    adress:"上海同济大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },{
                    id:"blue",
                    adress:"兰州交通大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },
            ];
        var article =[
            {
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            }
        ]
        this.setData({subject:subject});   
    
        this.setData({outline_subject:outline_subject}); 

        this.setData({article}); 
    },
    outline:function(){
        wx.navigateTo({
            url:'../outline_course/outline_course'
        })
    },
    Voice:function(){
        wx.navigateTo({
            url:'../Voice/Voice'
        })
    }
   
})

