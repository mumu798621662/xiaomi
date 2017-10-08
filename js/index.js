/*
* @Author: 木木
* @Date:   2017-09-18 21:06:25
* @Last Modified by:   木木
* @Last Modified time: 2017-09-27 08:29:56
*/
window.onload=function(){


function $(select,range){
    var range = range || document
    var first = select.charAt(0);
    if (first=='.') {
      return document.getElementsByClassName(select.substring(1),range);
    }else if (first=='#') {
      return document.getElementById(select.substring(1));
    }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
            return document.getElementsByTagName(select);
      } 
    }

function getClass(classname,range){
      var range=range||document;
      if(document.getElementsByClassName){
        return range.getElementsByClassName(classname);
      }
      else{
      var newarr=[];
      var all=range.getElementsByTagName('*');
      for (var i=0;i<all.length;i++){
        if(check(all[i].className,classname)){
          newarr.push(all[i]);
        }
      }
      return newarr;
      }
    }
    function check(className,classname){
  var arr = className.split(' ');
  for(var j=0;j<arr.length;j++){
    if (arr[j]==classname) {
      return true;
    }
  }
  return false;
}
	


  function float(obj,speed){
   this.name=obj;
   this.speed = speed;
   this.speed1 = speed;

   this.maxX=window.innerWidth-this.name.offsetWidth;
   this.maxY=window.innerHeight-this.name.offsetHeight;

}
 float.prototype.move=function(){
  let that = this;
  let t = setInterval(function(){
      let lefts = that.name.offsetLeft+that.speed;
      if (lefts<=0) {
        lefts=0;
        that.speed*=-1
      }
      if (lefts>=that.maxX) {
        lefts=that.maxX;
        that.speed*=-1
      }
      that.name.style.left =lefts+'px';

  },60)
    let t1 = setInterval(function(){
      let tops = that.name.offsetTop+that.speed1;
      if (tops<=0) {
        tops=0;
        that.speed1*=-1
      }
      if (tops>=that.maxY) {
        tops=that.maxY;
        that.speed1*=-1
      }
      that.name.style.top =tops+'px';

  },60)
 }
 // 获取之后
// let obj = new float (box,100)
//  obj.move();




let bigbox=$('.big-box')[0];
let bigbanner=$('.bigbanner')[0]
let bannerli=bigbanner.getElementsByTagName('li');
let circle=$('.circle')[0];
let circleli=$('.circleli');
let bannertu=document.getElementsByClassName('img1');
let imgw=parseInt(getComputedStyle(bigbanner,null).width);
let flag = true;
let asi = $('.asi')[0];
let asi1=$('.asi1')[0];
let item1 = $('.item1')[0];
let item2 = $('.item2')[0];
let item3 = $('.item3')[0];
let item4 = $('.item4')[0];
let item5 = $('.item5')[0];
let item6 = $('.item6')[0];
let item7 = $('.item7')[0];
let item8 = $('.item8')[0];
let item9 = $('.item9')[0];
let item10 = $('.item10')[0];

let item11=$('.item11')[0];
let item12=$('.item12')[0];
let item13=$('.item13')[0];
let item14=$('.item14')[0];
let item15=$('.item15')[0];
let item16=$('.item16')[0];
let item17=$('.item17')[0];
let item18=$('.item18')[0];


let li1=$('.li1')[0]
let li2=$('.li2')[0]
let li3=$('.li3')[0]
let li4=$('.li4')[0]
let li5=$('.li5')[0]
let li6=$('.li6')[0]
let li7=$('.li7')[0]
let li8=$('.li8')[0]
let li9=$('.li9')[0]
let li10=$('.li10')[0]

let shopbig = $('.shopbig')[0]
let mingxingleft=$('.xiaoyu')[0];
let mingxingright=$('.dayu')[0];
let mx=$('.mingxing-right')[0];





for(let i=0;i<circleli.length;i++){
  circleli[i].onclick=function(){
    if (now==i) {
      return;
    }
      circleli[i].style.background='#fff';
      circleli[now].style.background='#15171b';
      bannerli[i].style.left=imgw+'px';
      animate(bannerli[now],{left:-imgw});
      animate(bannerli[i],{left:0});
      now=next=i;
  }
}


// let t = setInterval(move,3000);
// let num = 0;
// function move (){
//   for(let i=0;i<bannerli.length;i++){
//     bannerli[i].style.display='none';
//     circle[i].style.background='#15171b';
//   }
//     bannerli[num].style.display='block';
//     circleli[num].style.background='#fff';
// }

// let t = setInterval(move,3000);
// let num = 0;
// function move (){
//   num++;
//  if (num==bannertu.length) {
//     num=0;
//   }
//   for(let i=0;i<bannertu.length;i++){
//     // bannertu[i].style.display='none';
//     animate(bannertu[i],{opacity:0})
//     circleli[i].style.background='#15171b';
//   }
//     // bannertu[num].style.display='block';
//     animate(bannertu[num],{opacity:1})
//     circleli[num].style.background='#fff';
// }





let t = setInterval(move,3000);
let next = 0;
let now=0;
function move (){
  next++;
 if (next==bannerli.length) {
     next=0;
  }
     bannerli[next].style.left=imgw+'px';
     animate(bannerli[now],{left:-imgw});
     circleli[now].style.background='#15171b';
     animate(bannerli[next],{left:0},function(){
     circleli[next].style.background='#fff';
      flag=true;
     });
     now=next;
}

function move1 (){
  next--;
 if (next<0) {
     next=bannerli.length-1;
  }
     bannerli[next].style.left=`${-imgw}px`;
     animate(bannerli[now],{left:imgw});
     circleli[now].style.background='#15171b';
     animate(bannerli[next],{left:0},function(){
      circleli[next].style.background='#fff';
      flag=true;
     });
     now=next;
    // circleli[i].style.background='#15171b';

    // circleli[num].style.background='#fff';
}

bigbox.onmouseover = function(){
  clearInterval(t);
}
bigbox.onmouseout = function(){
  t = setInterval(move,3000)
}

let rightarrow = document.getElementsByClassName('rightarrow')[0];
let leftarrow = $('.leftarrow')[0];
rightarrow.onclick=function(){
  if (!flag) {
    return;

  }
  move();
  flag=false;
}
leftarrow.onclick=function(){
  if(!flag){
    return;
  }
  move1();
  flag=false;
}







// function move1 (){
//   num--;
//  if (num==0) {
//     num=bannertu.length-1;
//   }
//   for(let i=0;i<bannertu.length;i++){
//     bannertu[i].style.display='none';
//     circleli[i].style.background='#15171b';
//   }
//     bannertu[num].style.display='block';
//     circleli[num].style.background='#fff';
// }

// bigbox.onmouseover=function(){
//       clearInterval(t);
//     }  
// bigbox.onmouseout=function(){
//       // num=i;
//    t=setInterval(move,3000);

//     } 


// let leftarrow = $('.leftarrow')[0];

// let rightarrow = $('.rightarrow')[0];
//  rightarrow.onclick = function (){
//   move();
//  }

//  leftarrow.onclick = function (){
//    num--;
//  if (num<=0) {
//     num=bannertu.length-1;
//   }
//   for(let i=0;i<bannertu.length;i++){
//     // bannertu[i].style.display='none';
//     animate(bannertu[i],{opacity:0})
//     circleli[i].style.background='#15171b';
//   }
//     // bannertu[num].style.display='block';
//     animate(bannertu[num],{opacity:1})
//     circleli[num].style.background='#fff';
// }



li1.onmouseover = function (){
  item1.style.display='block';
}

li1.onmouseout = function (){
  item1.style.display='none';
}

li2.onmouseover = function (){
  item2.style.display='block';
}

li2.onmouseout = function (){
  item2.style.display='none';
}

li3.onmouseover = function (){
  item3.style.display='block';
}

li3.onmouseout = function (){
  item3.style.display='none';
}

li4.onmouseover = function (){
  item4.style.display='block';
}

li4.onmouseout = function (){
  item4.style.display='none';
}


li5.onmouseover = function (){
  item5.style.display='block';
}

li5.onmouseout = function (){
  item5.style.display='none';
}


li6.onmouseover = function (){
  item6.style.display='block';
}

li6.onmouseout = function (){
  item6.style.display='none';
}


li7.onmouseover = function (){
  item7.style.display='block';
}

li7.onmouseout = function (){
  item7.style.display='none';
}


li8.onmouseover = function (){
  item8.style.display='block';
}

li8.onmouseout = function (){
  item8.style.display='none';
}

li9.onmouseover = function (){
  item9.style.display='block';
}

li9.onmouseout = function (){
  item9.style.display='none';
}


li10.onmouseover = function (){
  item10.style.display='block';
}

li10.onmouseout = function (){
  item10.style.display='none';
}

item12.onmouseover = function(){
  // item11.style.display='block'
  // item11.style.height='230px'
  animate(item11,{height:230})
}
item12.onmouseout = function(){
  // item11.style.display='none'
  animate(item11,{height:0})
}

item13.onmouseover = function(){
  // item11.style.display='block'
  // item11.style.height='230px'
  animate(item11,{height:230})
}
item13.onmouseout = function(){
  // item11.style.display='none'
  animate(item11,{height:0})
}

item14.onmouseover = function(){
  // item11.style.display='block'
  // item11.style.height='230px'
  animate(item11,{height:230})
}
item14.onmouseout = function(){
  // item11.style.display='none'
  animate(item11,{height:0})
}

item15.onmouseover = function(){
  // item11.style.display='block'
  // item11.style.height='230px'
  animate(item11,{height:230})
}
item15.onmouseout = function(){
  // item11.style.display='none'
  animate(item11,{height:0})
}

item16.onmouseover = function(){
  // item11.style.display='block'
  // item11.style.height='230px'
  animate(item11,{height:230})
}
item16.onmouseout = function(){
  // item11.style.display='none'
  animate(item11,{height:0})
}

item17.onmouseover = function(){
  // item11.style.display='block'
  // item11.style.height='230px'
  animate(item11,{height:230})
}
item17.onmouseout = function(){
  // item11.style.display='none'
  animate(item11,{height:0})
}

item18.onmouseover = function(){
  // item11.style.display='block'
  // item11.style.height='230px'
  animate(item11,{height:230})
}
item18.onmouseout = function(){
  // item11.style.display='none'
  animate(item11,{height:0})
}


let i = 0
mingxingleft.onclick=function(){
  if (i==1) {
    return;
  }
  i++;
   shopbig.style.left=-1246*i+'px';
}

mingxingright.onclick=function(){
    if (i==0) {
    return;
  }
  i--;
   shopbig.style.left=0+'px';
}


  let mingxingt = setInterval(function lunbo(){

    if (i==0) {
      shopbig.style.left=-1246+'px';
      i++

    }
    else if (i==1) {
     shopbig.style.left=0+'px';
     i--
    }
 
    }
 ,5000)


mx.onmouseover=function(){
  clearTimeout(mingxingt)
}

mx.onmouseout=function(){
mingxingt = setInterval(function lunbo(){

    if (i==0) {
      shopbig.style.left=-1246+'px';
      i++

    }
    else if (i==1) {
     shopbig.style.left=0+'px';
     i--
    }
 
    }
 ,5000)
}

// 家电

let remen = document.getElementsByClassName('remen')[0];
let TV= document.getElementsByClassName('TV')[0];
let computer = document.getElementsByClassName('computer')[0];
let last1 = document.getElementsByClassName('last1')[0];
let jiadianbottom1=document.getElementsByClassName('jiadian-bottom1')[0];
let jiadianbottom2=document.getElementsByClassName('jiadian-bottom2')[0];
let jiadianbottom3=document.getElementsByClassName('jiadian-bottom3')[0];
let jiadianbottom4=document.getElementsByClassName('jiadian-bottom4')[0];


remen.onmouseover=function(){
    jiadianbottom1.style.display='block';
    jiadianbottom2.style.display='none';
    jiadianbottom3.style.display='none';
    jiadianbottom4.style.display='none';
}
TV.onmouseover=function(){
        jiadianbottom2.style.display='block';
        jiadianbottom1.style.display='none';
        jiadianbottom3.style.display='none';
        jiadianbottom4.style.display='none';
    }
computer.onmouseover=function(){
     jiadianbottom3.style.display='block';
    jiadianbottom2.style.display='none';
    jiadianbottom1.style.display='none';
    jiadianbottom4.style.display='none';
    }

 last1.onmouseover=function(){
    jiadianbottom4.style.display='block';
    jiadianbottom2.style.display='none';
    jiadianbottom1.style.display='none';
    jiadianbottom3.style.display='none';
    }


    let remen1 = document.getElementsByClassName('remen')[1];
    let TV1= document.getElementsByClassName('TV')[1];
    let computer1 = document.getElementsByClassName('computer ')[1];
    let last11 = document.getElementsByClassName('last1')[1];
    let jiadianbottom111=document.getElementsByClassName('jiadian-bottom1')[1];
    let jiadianbottom112=document.getElementsByClassName('jiadian-bottom2')[1];
    let jiadianbottom113=document.getElementsByClassName('jiadian-bottom3')[1];
    let jiadianbottom114=document.getElementsByClassName('jiadian-bottom4')[1];


    remen1.onmouseover=function(){
        jiadianbottom111.style.display='block';
        jiadianbottom112.style.display='none';
        jiadianbottom113.style.display='none';
        jiadianbottom114.style.display='none';
    }
    TV1.onmouseover=function(){
        jiadianbottom112.style.display='block';
        jiadianbottom111.style.display='none';
        jiadianbottom113.style.display='none';
        jiadianbottom114.style.display='none';
    }
    computer1.onmouseover=function(){
        jiadianbottom113.style.display='block';
        jiadianbottom112.style.display='none';
        jiadianbottom111.style.display='none';
        jiadianbottom114.style.display='none';
    }

    last11.onmouseover=function(){
        jiadianbottom114.style.display='block';
        jiadianbottom112.style.display='none';
        jiadianbottom111.style.display='none';
        jiadianbottom113.style.display='none';
    }


    let remen2 = document.getElementsByClassName('remen')[2];
    let TV2= document.getElementsByClassName('TV')[2];
    let computer2 = document.getElementsByClassName('computer ')[2];
    let last12 = document.getElementsByClassName('last1')[2];
    let jiadianbottom122=document.getElementsByClassName('jiadian-bottom1')[2];
    let jiadianbottom222=document.getElementsByClassName('jiadian-bottom2')[2];
    let jiadianbottom322=document.getElementsByClassName('jiadian-bottom3')[2];
    let jiadianbottom422=document.getElementsByClassName('jiadian-bottom4')[2];


    remen2.onmouseover=function(){
        jiadianbottom122.style.display='block';
        jiadianbottom222.style.display='none';
        jiadianbottom322.style.display='none';
        jiadianbottom422.style.display='none';
    }
    TV2.onmouseover=function(){
        jiadianbottom222.style.display='block';
        jiadianbottom122.style.display='none';
        jiadianbottom322.style.display='none';
        jiadianbottom422.style.display='none';
    }
    computer2.onmouseover=function(){
        jiadianbottom322.style.display='block';
        jiadianbottom222.style.display='none';
        jiadianbottom122.style.display='none';
        jiadianbottom422.style.display='none';
    }

    last12.onmouseover=function(){
        jiadianbottom422.style.display='block';
        jiadianbottom222.style.display='none';
        jiadianbottom122.style.display='none';
        jiadianbottom322.style.display='none';
    }


    let remen3 = document.getElementsByClassName('remen')[3];
    let TV3= document.getElementsByClassName('TV')[3];
    let computer3 = document.getElementsByClassName('computer ')[3];
    let last13 = document.getElementsByClassName('last1')[3];
    let jiadianbottom133=document.getElementsByClassName('jiadian-bottom1')[3];
    let jiadianbottom233=document.getElementsByClassName('jiadian-bottom2')[3];
    let jiadianbottom333=document.getElementsByClassName('jiadian-bottom3')[3];
    let jiadianbottom433=document.getElementsByClassName('jiadian-bottom4')[3];


    remen3.onmouseover=function(){
        jiadianbottom133.style.display='block';
        jiadianbottom233.style.display='none';
        jiadianbottom333.style.display='none';
        jiadianbottom433.style.display='none';
    }
    TV3.onmouseover=function(){
        jiadianbottom233.style.display='block';
        jiadianbottom133.style.display='none';
        jiadianbottom333.style.display='none';
        jiadianbottom433.style.display='none';
    }
    computer3.onmouseover=function(){
        jiadianbottom333.style.display='block';
        jiadianbottom233.style.display='none';
        jiadianbottom133.style.display='none';
        jiadianbottom433.style.display='none';
    }

    last13.onmouseover=function(){
        jiadianbottom433.style.display='block';
        jiadianbottom233.style.display='none';
        jiadianbottom133.style.display='none';
        jiadianbottom333.style.display='none';
    }

    let remen4 = document.getElementsByClassName('remen')[4];
    let TV4= document.getElementsByClassName('TV')[4];
    let computer4 = document.getElementsByClassName('computer ')[4];
    let last14 = document.getElementsByClassName('last1')[4];
    let jiadianbottom144=document.getElementsByClassName('jiadian-bottom1')[4];
    let jiadianbottom244=document.getElementsByClassName('jiadian-bottom2')[4];
    let jiadianbottom344=document.getElementsByClassName('jiadian-bottom3')[4];
    let jiadianbottom444=document.getElementsByClassName('jiadian-bottom4')[4];


    remen4.onmouseover=function(){
        jiadianbottom144.style.display='block';
        jiadianbottom244.style.display='none';
        jiadianbottom344.style.display='none';
        jiadianbottom444.style.display='none';
    }
    TV4.onmouseover=function(){
        jiadianbottom244.style.display='block';
        jiadianbottom144.style.display='none';
        jiadianbottom344.style.display='none';
        jiadianbottom444.style.display='none';
    }
    computer4.onmouseover=function(){
        jiadianbottom344.style.display='block';
        jiadianbottom244.style.display='none';
        jiadianbottom144.style.display='none';
        jiadianbottom444.style.display='none';
    }

    last14.onmouseover=function(){
        jiadianbottom444.style.display='block';
        jiadianbottom244.style.display='none';
        jiadianbottom144.style.display='none';
        jiadianbottom344.style.display='none';
    }
// 内容

    let halibote=document.querySelectorAll('.halibote');
    let nami=document.querySelectorAll('.nami')
    let neirongleft=document.querySelectorAll('.xiaojiantou')
    let neirongright=document.querySelectorAll('.xiaojiantou-right')
    let dianbox=document.querySelectorAll('.dian-box')
    let dianli=document.querySelectorAll('.dian-box>a');
    console.log(dianli);
    let j=0;
    for(let x=0;x<halibote.length;x++){
        neirongleft[x].onclick=function () {
            if(j==0){
                return;
            }
            j--;

            animate(halibote[x],{left:-j*296});
            for(let i=0;i<dianli.length;i++){
                dianli[i].style.border='none';
                dianli[i].style.background='#b0b0b0'
            }
            dianli[j].style.border='2px solid #ff6700';
            dianli[j].style.background='#fff';




        }
        neirongright[x].onclick=function () {
            if(j==2){
                return;
            }
            j++;
            animate(halibote[x],{left:-j*296});
            for(let i=0;i<dianli.length;i++){
                dianli[i].style.border='none';
                dianli[i].style.background='#b0b0b0'
            }
            dianli[j].style.border='2px solid #ff6700';
            dianli[j].style.background='#fff';


        }
  }


    let tuijianbig = $('.tuijianbig')[0]

    let tj=$('.tuijian-right')[0];
let xiaoyu1 = document.getElementsByClassName('xiaoyu1')[0];

let dayu1 = document.getElementsByClassName('dayu1')[0];



    xiaoyu1.onclick=function(){
        let j = 0
        if (j==1) {
            return;
        }
        j++;
        tuijianbig.style.left=-1246*j+'px';
    }

    dayu1.onclick=function(){
        if (j==0) {
            return;
        }
        j--;
        tuijianbig.style.left=0+'px';
    }


    let tuijiant = setInterval(function lunbo(){

            if (j==0) {
                tuijianbig.style.left=-1246+'px';
                j++

            }
            else if (j==1) {
                tuijianbig.style.left=0+'px';
                j--
            }

        }
        ,5000)















}