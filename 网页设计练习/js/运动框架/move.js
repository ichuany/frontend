/**
 * Created by zhuwenh on 4/19/2016.
 */
function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,attr,iTargate,fnEnd)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var cur=0;
        if(attr=='opacity')
        {
            cur=parseFloat(getStyle(obj,attr))*100;
        }
        else
        {
            cur=parseInt(getStyle(obj,attr));
        }
        var speed=(iTargate-cur)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        
        if(attr=='opacity')
        {
            obj.style.filter='alpha(opacity:'+(cur+speed)+')';
            obj.style.opacity=(cur+speed)/100;
        }
        else
        {
            obj.style[attr]=cur+speed+'px';
        }
        if(cur==iTargate)
        {
            clearInterval(obj.timer);
            if(fnEnd) fnEnd();
        }
    },30)
}
