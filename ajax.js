// 用promise封装一个ajax函数，实现与后台的数据交互

function getData() {
   
     //原生创建ajax
     var xhr=null;
     if(window.XMLHttpRequest) {
          xhr=new XMLHttpRequest();
     }else {
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
     }

     console.log(xhr);

     xhr.open('get','./data.json',true);
     xhr.send();

     xhr.onreadystatechange=function() {

         console.log('readyState:',xhr.readyState);
         console.log('status:',xhr.status);

         if(xhr.readyState===4) {

            if(xhr.status===200) {
                console.log(typeof xhr.responseText);
            }

         }
      


     }


}

getData()




