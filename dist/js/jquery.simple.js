$.fn.simpleVideo=function(e,a,n){var t=this,l=t[0],d=null,s=document.createElement("video"),o=document.createElement("div"),c=document.createElement("ul"),i=document.createElement("li"),r=document.createElement("div"),m=document.createElement("i"),u=document.createElement("li"),p=document.createElement("div"),f=document.createElement("div"),h=document.createElement("span"),v=document.createElement("div"),C=document.createElement("div"),E=document.createElement("div"),g=document.createElement("div"),N=document.createElement("li"),L=document.createElement("div"),k=document.createElement("div"),S=document.createElement("div"),V=document.createElement("div"),w=document.createElement("i"),y=document.createElement("i");l.className="svContainer",s.className="sVideo",o.className="svControls",i.className="sPlay",r.className="sCenter",m.className="fa fa-play",u.className="sProgress",p.className="sAlign",v.className="sBarAlign",C.className="sBarProgress",E.className="sBarBuffer",g.className="sBarPercent",N.className="sVolume",L.className="sCenter",k.className="sVolumeControl",S.className="sVolumeCon",V.className="sVolumeBar",w.className="fa fa-volume-up",y.className="fa fa-expand",l.appendChild(s),l.appendChild(o),o.appendChild(c),c.appendChild(i),i.appendChild(r),r.appendChild(m),c.appendChild(u),u.appendChild(p),p.appendChild(f),f.appendChild(h),u.appendChild(v),v.appendChild(C),C.appendChild(g),C.appendChild(E),c.appendChild(N),N.appendChild(L),L.appendChild(k),k.appendChild(S),S.appendChild(V),L.appendChild(w),L.appendChild(y),h.innerHTML="00:00",t.init=function(){t.loadSources(e)},t.play=function(){s.play(),m.className="fa fa-pause"},t.stop=function(){s.pause(),m.className="fa fa-play"},t.toggleState=function(){s.paused?t.play():t.stop()},t.showControls=function(e){e.preventDefault(),clearTimeout(d),$(o).addClass("active")},t.hideControls=function(e){e.preventDefault(),d=setTimeout(function(){$(o).removeClass("active")},500)},t.toggleFullScreen=function(e){s.webkitRequestFullScreen?s.webkitRequestFullScreen():s.mozRequestFullScreen&&s.mozRequestFullScreen()},t.skip=function(e){var a=e.offsetX?e.offsetX:e.layerX,n=$(C).width(),t=a/n,l=Math.round(s.duration*t);s.currentTime=l},t.toggleVolume=function(){$(k).toggleClass("active")},t.changeVolume=function(e){var a=e.offsetY?e.offsetY:e.layerY;$(V).css("height",a+"%");var n=Math.abs(100-a);n/=100,s.volume=n},t.showLoader=function(){$(C).addClass("loading")},t.hideLoader=function(){$(C).removeClass("loading")},t.updateTime=function(){var e=s.currentTime,a=Math.floor(e/60),n=Math.floor(e-60*a),t=(10>a?"0"+a:a)+":"+(10>n?"0"+n:n);h.innerHTML=t;var l=Math.round(e/s.duration*100);$(g).css("width",l+"%");var d=s.buffered,o=Math.round(d.end(0)/s.duration*100);$(E).css("width",o+"%")},t.loadSources=function(e){for(var a=0,n=0;n<e.length;n++){var t=e[n];if(t&&3>a){var l=document.createElement("source");l.src=t,s.appendChild(l),a++}}},t.init(),i.addEventListener("click",t.toggleState,!1),w.addEventListener("click",t.toggleVolume,!1),k.addEventListener("click",t.changeVolume,!1),y.addEventListener("click",t.toggleFullScreen,!1),s.ontimeupdate=t.updateTime,s.onended=t.stop,s.onseeking=t.showLoader,s.onseeked=t.hideLoader,C.addEventListener("click",t.skip,!1),l.addEventListener("mouseover",t.showControls,!1),l.addEventListener("mouseout",t.hideControls,!1)};