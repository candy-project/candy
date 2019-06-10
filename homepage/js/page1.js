(function () {
        // 1、设置内容区高度
    window.onload = window.onresize = function () {
        const content = document.querySelector('#wrap .content');
        content.style.height = document.documentElement.clientHeight + 'px';
    };


    // 侧边导航
    const contentList = document.querySelector('#wrap .content .contentList');
    const contentItems = document.querySelectorAll('#wrap .content .contentList .contentItem');
    const asideItems = document.querySelectorAll('#wrap .aside .asideList .asideItem');
    let currentIndex =0;

    // 出入场动画
    const ainimationArr = [
        {
            outAnimation:function () {
                const oursPic = document.querySelector('#wrap .content .contentList .contentItem.ours  .oursPic');
                const aboutItems = document.querySelectorAll('#wrap .content .contentList .contentItem.ours .contentMain .aboutOur .aboutItem');
                oursPic.style.transform = "translateY(-500px)";
                for(let i = 0 ; i < aboutItems.length ; i++){
                    aboutItems[i].style.transition = ".5s linear 0s";
                    aboutItems[i].style.opacity = 0;
                    const num = -Math.pow(-1,i%2)*300;
                    aboutItems[i].style.transform = "translateX("+ num +"px)";
                }
            },
            inAnimation:function () {
                const oursPic = document.querySelector('#wrap .content .contentList .contentItem.ours  .oursPic');
                const aboutItems = document.querySelectorAll('#wrap .content .contentList .contentItem.ours .contentMain .aboutOur .aboutItem');
                oursPic.style.transform = "translateY(0)";
                for(let i = 0 ; i < aboutItems.length ; i++){
                    aboutItems[i].style.transition = ".5s linear "+ (i*0.1) +"s";
                    aboutItems[i].style.opacity = 1;
                    aboutItems[i].style.transform = "translateX(0)";
                }
            }
        },
        {
            outAnimation:function () {
                const title = document.querySelector('#wrap .content .contentList .contentItem.product .contentMain .title');
                const productMain = document.querySelector('#wrap .content .contentList .contentItem.product .contentMain .productMain');
                title.style.transform = "translateY(600px) rotate(360deg)";
                title.style.opacity = 0;
                productMain.style.transform = "translateY(700px)";
                productMain.style.opacity = 0;
            },
            inAnimation:function () {
                const title = document.querySelector('#wrap .content .contentList .contentItem.product .contentMain .title');
                const productMain = document.querySelector('#wrap .content .contentList .contentItem.product .contentMain .productMain');
                title.style.transform = "translateY(0) rotate(0)";
                title.style.opacity = 1;
                productMain.style.transform = "translateY(0)";
                productMain.style.opacity = 1;
            }
        },
        {
            outAnimation:function () {
                const title = document.querySelector('#wrap .content .contentList .contentItem.news .contentMain .title');
                const newMain = document.querySelector('#wrap .content .contentList .contentItem.news .contentMain .newMain');
                title.style.transform = "translateY(600px) rotate(360deg)";
                title.style.opacity = 0;
                newMain.style.transform = "translateY(700px)";
                newMain.style.opacity = 0;
            },
            inAnimation:function () {
                const title = document.querySelector('#wrap .content .contentList .contentItem.news .contentMain .title');
                const newMain = document.querySelector('#wrap .content .contentList .contentItem.news .contentMain .newMain');
                title.style.transform = "translateY(0) rotate(0)";
                title.style.opacity = 1;
                newMain.style.transform = "translateY(0)";
                newMain.style.opacity = 1;
            }
        },
        {
            outAnimation:function () {
                const pic = document.querySelector('#wrap .content .contentList .contentItem.invite .pic');
                const title = document.querySelector('#wrap .content .contentList .contentItem.invite .contentMain .title');
                const inviteMain = document.querySelector('#wrap .content .contentList .contentItem.invite .contentMain .inviteMain');
                title.style.transform = "translateY(1000px) rotate(360deg)";
                inviteMain.style.transform = "translateY(1000px) rotate(360deg)";
                pic.style.transform = "translateY(-300px)";
                title.style.opacity = 0;
                inviteMain.style.opacity = 0;
                pic.style.opacity = 0;
            },
            inAnimation:function () {
                const pic = document.querySelector('#wrap .content .contentList .contentItem.invite .pic');
                const title = document.querySelector('#wrap .content .contentList .contentItem.invite .contentMain .title');
                const inviteMain = document.querySelector('#wrap .content .contentList .contentItem.invite .contentMain .inviteMain');
                title.style.transform = "translateY(0) rotate(0)";
                inviteMain.style.transform = "translateY(0) rotate(0)";
                pic.style.transform = "translateY(0)";
                title.style.opacity = 1;
                inviteMain.style.opacity = 1;
                pic.style.opacity = 1;
            }
        },
        {
            outAnimation:function () {
                const title = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatLeft .title');
                const code = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatLeft .concatBottom .code');
                const phone = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatLeft .concatBottom .phone');
                const concatRight = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatRight');
                title.style.transform = "translateX(-500px)";
                code.style.transform = "translateX(-500px)";
                phone.style.transform = "translateX(-500px)";
                title.style.opacity = 0;
                code.style.opacity = 0;
                phone.style.opacity = 0;
                concatRight.style.opacity = 0;
                concatRight.style.transform = "rotateY(-180deg)";
            },
            inAnimation:function () {
                const title = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatLeft .title');
                const code = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatLeft .concatBottom .code');
                const phone = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatLeft .concatBottom .phone');
                const concatRight = document.querySelector('#wrap .content .contentList .contentItem.concat .contentMain .concatRight');
                title.style.transform = "translateX(0)";
                code.style.transform = "translateX(0)";
                phone.style.transform = "translateX(0)";
                title.style.opacity = 1;
                code.style.opacity = 1;
                phone.style.opacity = 1;
                concatRight.style.opacity = 1;
                concatRight.style.transform = "rotateY(0)";
            }
        }
    ];
    for(let i = 0 ; i < ainimationArr.length ; i++){
        ainimationArr[i].outAnimation();
    }
    mouseScroll();
    function throttle(fn,time) {
        let startTime = 0;
        return function () {
            const endTime = Date.now();
            if( endTime - startTime >= time){
                fn.apply(this,arguments);  //接的是return得这个函数得实参，因为这个回调函数得参数是浏览器传的，不固定，所以需要都接住，后期才能使用
                startTime = endTime;
            }
        }
    }
    function mouseScroll(){
        document.addEventListener("mousewheel",throttle(function (ev) {
            fn(ev)
        },1000),{
            passive:false
        });
        if(document.addEventListener){
            document.addEventListener("DOMMouseScroll",throttle(function (ev) {
                fn(ev)
            },1000),{
                passive:false
            })
        }

        function fn(ev) {
            ev = ev || event;
            ev.preventDefault ? ev.preventDefault(): ev.returnValue = false;
            let flag='';
            if(ev.wheelDelta){
                if(ev.wheelDelta > 0){
                    flag='up'
                }else if(ev.wheelDelta < 0){
                    flag ='down'
                }
            }else{
                if(ev.detail > 0){
                    flag ='down'
                }else if(ev.detail < 0){
                    flag='up'
                }
            }
            switch(flag){
                case 'up':
                    if(currentIndex >0){
                        currentIndex--;
                        move(currentIndex);
                    }
                    break;
                case 'down':
                    if(currentIndex <contentItems.length-1){
                        currentIndex++;
                        move(currentIndex);
                    }
                    break;
            }
            // event.preventDefault && event.preventDefault();
            // return false;
        }
    }
    // 侧边栏
    asideBind();
    function asideBind() {
        for(let i = 0; i < asideItems.length; i++){
            asideItems[i].index = i;
            asideItems[i].onclick = function () {
                move(this.index);
                currentIndex = this.index;
            }
        }
    }
    function move(index){
        contentList.style.marginTop = - index*contentItems[0].offsetHeight + "px";
        for(let i = 0; i < asideItems.length; i++){
            contentItems[i].classList.remove("active");
            asideItems[i].classList.remove("active");
        }
        contentItems[index].classList.add("active");
        asideItems[index].classList.add("active");
        contentItems[index].style.animation= "myfirst 10s linear infinite";
        for(let i = 0 ; i < ainimationArr.length ; i++){
            ainimationArr[i].outAnimation();
        }
        if(index > 0){
            ainimationArr[index-1].inAnimation();
        }

    }

    // 首屏随鼠标移动
    var scene = document.querySelector('.scene');
    var parallax = new Parallax(scene);

    // 背景色随机改变

        // function bgChange() {
        //     clearInterval(timer);
        //     // const arr = ["rgb(255,127,172)","rgb(255,148,161)","rgb(136,175,183)","rgb(62,205,188)","rgb(218,200,49)","rgb(255, 194, 22)"];
        //     const arr = ["#ffc304","#ff7cab","#32cfbc","#ffc304"];
        //
        //     const bg=document.querySelector('#wrap .content .contentList .contentItem.active');
        //     let rand = 0;
        //     timer = setInterval(function () {
        //         if(rand > 5){
        //             rand = 0
        //         }
        //         bg.style.backgroundColor=arr[rand];
        //         rand++;
        //     },1000);
        // }
    })();
