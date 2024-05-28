import{r as Ce,u as Ln,R as We,j as f,S as de,B as Y,C as He,a as Me,b as En,_ as Rn,F as Dn,T as J,c as Cn,s as gn}from"./index-BFKXbQxx.js";function Ke(e,n){const[t,i]=Ce.useState({status:"not-executed",error:void 0,result:n}),a=Ce.useRef(),s=Ce.useRef(),l=Ln({execute(...T){s.current=T;const c=e(...T);return a.current=c,i(r=>({...r,status:"loading"})),c.then(r=>{c===a.current&&i(o=>({...o,status:"success",error:void 0,result:r}))},r=>{c===a.current&&i(o=>({...o,status:"error",error:r}))}),c},reset(){i({status:"not-executed",error:void 0,result:n}),a.current=void 0,s.current=void 0}});return[t,Ce.useMemo(()=>({reset(){l.current.reset()},execute:(...T)=>l.current.execute(...T)}),[]),{promise:a.current,lastArgs:s.current}]}function On(e){switch(e){case"index":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
GCS: {
  label: "GCS"
}
Device: {
  label: "Device"
}
ElevationApi: {
  label: "OpenTopoData"
}

Customer -> GCS: "Control and monitoring"
GCS -> ElevationApi: "HTTP"
GCS -> Device: "[FTP,ROS,RSTP]"
`;case"feb1c26b09984c154f833452dd3dcbd84f04e711":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
GCS: {
  label: "GCS"

  Ui: {
    label: "Frontend"
  }
  Backend: {
    label: "GCS Backend"
  }
  Mediamtx: {
    label: "Multimedia server"
  }
  Rosbridge: {
    label: "ROSBridge"
  }
  RosMultimaster: {
    label: "Multimaster FLK"
  }
}
Device: {
  label: "Device"
}
ElevationApi: {
  label: "OpenTopoData"
}

Customer -> GCS.Ui: "open in browser"
GCS.Ui -> GCS.Backend: "request via HTTPS"
GCS.Backend -> GCS.Rosbridge: "UDP socket"
GCS.Backend -> GCS.Mediamtx: "API REST"
GCS.Backend -> ElevationApi: "HTTP"
GCS.Backend -> Device: "FTP"
GCS.Mediamtx -> Device: "RTSP H264"
GCS.Rosbridge -> GCS.RosMultimaster: "ROS"
GCS.RosMultimaster -> Device: "ROS"
`;case"backend":return`direction: down

GCS: {
  label: "GCS"

  Ui: {
    label: "Frontend"
  }
  Backend: {
    label: "GCS Backend"

    Express: {
      label: "REST API & Socket"
    }
    MissionManager: {
      label: "Mission Manager"
    }
    Ftp: {
      label: "File Manager"
    }
    DeviceManager: {
      label: "Device Manager"
    }
    Events: {
      label: "Events Manager"
    }
    Roslib: {
      label: "ROSLibjs"
    }
  }
  Rosbridge: {
    label: "ROSBridge"
  }
  Mediamtx: {
    label: "Multimedia server"
  }
}
ElevationApi: {
  label: "OpenTopoData"
}
Device: {
  label: "Device"
}

GCS.Ui -> GCS.Backend.Express
GCS.Backend.Express -> GCS.Backend.DeviceManager
GCS.Backend.Express -> GCS.Backend.MissionManager
GCS.Backend.MissionManager -> GCS.Backend.Ftp
GCS.Backend.MissionManager -> GCS.Backend.DeviceManager
GCS.Backend.MissionManager -> ElevationApi: "HTTP"
GCS.Backend.Ftp -> Device: "FTP"
GCS.Backend.DeviceManager -> GCS.Backend.Roslib: "Msg & Srv ROS"
GCS.Backend.DeviceManager -> GCS.Backend.Events: "Create events"
GCS.Backend.DeviceManager -> GCS.Mediamtx: "API REST"
GCS.Backend.Events -> GCS.Backend.Express
GCS.Backend.Roslib -> GCS.Backend.DeviceManager
GCS.Backend.Roslib -> GCS.Rosbridge: "Send/Recv msg"
GCS.Mediamtx -> Device: "RTSP H264"
`;case"backend_complete":return`direction: down

GCS: {
  label: "GCS"

  Ui: {
    label: "Frontend"
  }
  Backend: {
    label: "GCS Backend"

    Express: {
      label: "REST API & Socket"
    }
    MissionManager: {
      label: "Mission Manager"
    }
    Ftp: {
      label: "File Manager"
    }
    DeviceManager: {
      label: "Device Manager"
    }
    Events: {
      label: "Events Manager"
    }
    Roslib: {
      label: "ROSLibjs"
    }
  }
  Rosbridge: {
    label: "ROSBridge"
  }
  RosMultimaster: {
    label: "Multimaster FLK"
  }
  Mediamtx: {
    label: "Multimedia server"
  }
}
ElevationApi: {
  label: "OpenTopoData"
}
Device: {
  label: "Device"
}

GCS.Ui -> GCS.Backend.Express
GCS.Backend.Express -> GCS.Backend.DeviceManager
GCS.Backend.Express -> GCS.Backend.MissionManager
GCS.Backend.MissionManager -> GCS.Backend.Ftp
GCS.Backend.MissionManager -> GCS.Backend.DeviceManager
GCS.Backend.MissionManager -> ElevationApi: "HTTP"
GCS.Backend.Ftp -> Device: "FTP"
GCS.Backend.DeviceManager -> GCS.Backend.Roslib: "Msg & Srv ROS"
GCS.Backend.DeviceManager -> GCS.Backend.Events: "Create events"
GCS.Backend.DeviceManager -> GCS.Mediamtx: "API REST"
GCS.Backend.Events -> GCS.Backend.Express
GCS.Backend.Roslib -> GCS.Backend.DeviceManager
GCS.Backend.Roslib -> GCS.Rosbridge: "Send/Recv msg"
GCS.Rosbridge -> GCS.RosMultimaster: "ROS"
GCS.RosMultimaster -> Device: "ROS"
GCS.Mediamtx -> Device: "RTSP H264"
`;case"my_backend":return`direction: down

GCSUi: {
  label: "Frontend"
}
GCSBackend: {
  label: "GCS Backend"

  Express: {
    label: "REST API & Socket"
  }
  MissionManager: {
    label: "Mission Manager"
  }
  Ftp: {
    label: "File Manager"
  }
  DeviceManager: {
    label: "Device Manager"
  }
  Events: {
    label: "Events Manager"
  }
  Roslib: {
    label: "ROSLibjs"
  }
}
Device: {
  label: "Device"
}
ElevationApi: {
  label: "OpenTopoData"
}
GCSRosbridge: {
  label: "ROSBridge"
}
GCSMediamtx: {
  label: "Multimedia server"
}

GCSUi -> GCSBackend.Express
GCSBackend.Express -> GCSBackend.DeviceManager
GCSBackend.Express -> GCSBackend.MissionManager
GCSBackend.MissionManager -> GCSBackend.Ftp
GCSBackend.MissionManager -> GCSBackend.DeviceManager
GCSBackend.MissionManager -> ElevationApi: "HTTP"
GCSBackend.Ftp -> Device: "FTP"
GCSBackend.DeviceManager -> GCSBackend.Roslib: "Msg & Srv ROS"
GCSBackend.DeviceManager -> GCSBackend.Events: "Create events"
GCSBackend.DeviceManager -> GCSMediamtx: "API REST"
GCSBackend.Events -> GCSBackend.Express
GCSBackend.Roslib -> GCSBackend.DeviceManager
GCSBackend.Roslib -> GCSRosbridge: "Send/Recv msg"
`;default:throw new Error("Unknown viewId: "+e)}}const{createElement:fe,createContext:Sn,createRef:qn,forwardRef:$e,useCallback:U,useContext:qe,useEffect:se,useImperativeHandle:Ye,useLayoutEffect:Gn,useMemo:In,useRef:K,useState:ue}=We,_e=We.useId,xe=Sn(null);xe.displayName="PanelGroupContext";const Ge=Gn,Bn=typeof _e=="function"?_e:()=>null;let An=0;function Fe(e=null){const n=Bn(),t=K(e||n||null);return t.current===null&&(t.current=""+An++),e??t.current}function Je({children:e,className:n="",collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:a,dataAttributes:s,defaultSizePercentage:l,defaultSizePixels:T,forwardedRef:c,id:r,maxSizePercentage:o,maxSizePixels:L,minSizePercentage:E,minSizePixels:d,onCollapse:R,onExpand:x,onResize:m,order:G,style:u,tagName:y="div"}){const z=qe(xe);if(z===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:I,expandPanel:S,getPanelSize:M,getPanelStyle:X,groupId:F,isPanelCollapsed:w,registerPanel:re,resizePanel:Z,unregisterPanel:Q}=z,ee=Fe(r),_=K({callbacks:{onCollapse:R,onExpand:x,onResize:m},constraints:{collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:a,defaultSizePercentage:l,defaultSizePixels:T,maxSizePercentage:o,maxSizePixels:L,minSizePercentage:E,minSizePixels:d},id:ee,idIsFromProps:r!==void 0,order:G});K({didLogMissingDefaultSizeWarning:!1}),Ge(()=>{const{callbacks:$,constraints:V}=_.current;_.current.id=ee,_.current.idIsFromProps=r!==void 0,_.current.order=G,$.onCollapse=R,$.onExpand=x,$.onResize=m,V.collapsedSizePercentage=t,V.collapsedSizePixels=i,V.collapsible=a,V.defaultSizePercentage=l,V.defaultSizePixels=T,V.maxSizePercentage=o,V.maxSizePixels=L,V.minSizePercentage=E,V.minSizePixels=d}),Ge(()=>{const $=_.current;return re($),()=>{Q($)}},[G,ee,re,Q]),Ye(c,()=>({collapse:()=>{I(_.current)},expand:()=>{S(_.current)},getId(){return ee},getSize(){return M(_.current)},isCollapsed(){return w(_.current)},isExpanded(){return!w(_.current)},resize:$=>{Z(_.current,$)}}),[I,S,M,w,ee,Z]);const Be=X(_.current);return fe(y,{children:e,className:n,style:{...Be,...u},...s,"data-panel":"","data-panel-id":ee,"data-panel-group-id":F,"data-panel-collapsible":void 0,"data-panel-size":void 0})}const le=$e((e,n)=>fe(Je,{...e,forwardedRef:n}));Je.displayName="Panel";le.displayName="forwardRef(Panel)";function ge(e,n){return e/n*100}function Ve(e,n){let{collapsedSizePercentage:t=0,collapsedSizePixels:i,defaultSizePercentage:a,defaultSizePixels:s,maxSizePercentage:l=100,maxSizePixels:T,minSizePercentage:c=0,minSizePixels:r}=e;return(i!=null||s!=null||r!=null||T!=null)&&n<=0?(console.warn(`WARNING: Invalid group size: ${n}px`),{collapsedSizePercentage:0,defaultSizePercentage:a,maxSizePercentage:0,minSizePercentage:0}):(i!=null&&(t=ge(i,n)),s!=null&&(a=ge(s,n)),r!=null&&(c=ge(r,n)),T!=null&&(l=ge(T,n)),{collapsedSizePercentage:t,defaultSizePercentage:a,maxSizePercentage:l,minSizePercentage:c})}function Le(e,n,t){let i=0,a=0;for(let r=0;r<e.length;r++)if(r!==n){const{collapsible:o}=e[r],{collapsedSizePercentage:L,maxSizePercentage:E,minSizePercentage:d}=Ve(e[r],t);a+=E,i+=o?L:d}const{collapsedSizePercentage:s,defaultSizePercentage:l,maxSizePercentage:T,minSizePercentage:c}=Ve(e[n],t);return{collapsedSizePercentage:s,defaultSizePercentage:l,maxSizePercentage:e.length>1?Math.min(T,100-i):T,minSizePercentage:e.length>1?Math.max(c,100-a):c}}const pn=10;function Ie(e,n,t=pn){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const i=e-n;return i===0?0:i>0?1:-1}function W(e,n,t){return Ie(e,n,t)===0}function ce({groupSizePixels:e,panelConstraints:n,panelIndex:t,size:i}){if(n.some(({collapsedSizePixels:r,defaultSizePixels:o,minSizePixels:L,maxSizePixels:E})=>r!=null||o!=null||L!=null||E!=null)&&e<=0)return console.warn(`WARNING: Invalid group size: ${e}px`),0;let{collapsible:s}=n[t];const{collapsedSizePercentage:l,maxSizePercentage:T,minSizePercentage:c}=Le(n,t,e);if(c!=null&&Ie(i,c)<0)if(s){const r=(l+c)/2;Ie(i,r)<0?i=l:i=c}else i=c;return T!=null&&(i=Math.min(T,i)),i}function Oe({delta:e,groupSizePixels:n,layout:t,panelConstraints:i,pivotIndices:a,trigger:s}){if(W(e,0))return t;const l=[...t];let T=0;if(s==="keyboard"){{const r=e<0?a[1]:a[0];if(i[r].collapsible){const L=t[r],{collapsedSizePercentage:E,minSizePercentage:d}=Le(i,r,n);if(W(L,E)){const R=d-L;Ie(R,Math.abs(e))>0&&(e=e<0?0-R:R)}}}{const r=e<0?a[0]:a[1];if(i[r].collapsible){const L=t[r],{collapsedSizePercentage:E,minSizePercentage:d}=Le(i,r,n);if(W(L,d)){const R=L-E;Ie(R,Math.abs(e))>0&&(e=e<0?0-R:R)}}}}{const r=e<0?1:-1;let o=e<0?a[1]:a[0],L=0;for(;;){const d=t[o],x=ce({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:100})-d;if(L+=x,o+=r,o<0||o>=i.length)break}const E=Math.min(Math.abs(e),Math.abs(L));e=e<0?0-E:E}{let o=e<0?a[0]:a[1];for(;o>=0&&o<i.length;){const L=Math.abs(e)-Math.abs(T),E=t[o],d=E-L,R=ce({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:d});if(!W(E,R)&&(T+=E-R,l[o]=R,T.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?o--:o++}}if(W(T,0))return t;{const r=e<0?a[1]:a[0],o=t[r]+T,L=ce({groupSizePixels:n,panelConstraints:i,panelIndex:r,size:o});if(l[r]=L,!W(L,o)){let E=o-L,R=e<0?a[1]:a[0];for(;R>=0&&R<i.length;){const x=l[R],m=x+E,G=ce({groupSizePixels:n,panelConstraints:i,panelIndex:R,size:m});if(W(x,G)||(E-=G-x,l[R]=G),W(E,0))break;e>0?R--:R++}}}const c=l.reduce((r,o)=>o+r,0);return T=100-c,W(c,100)?l:t}function Xe(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}function ie({sizePercentage:e,sizePixels:n},t){if(e!=null)return e;if(n!=null)return ge(n,t)}function Nn({groupSizePixels:e,layout:n,panelsArray:t,pivotIndices:i}){let a=0,s=100,l=0,T=0;t.forEach((L,E)=>{var d,R;const{constraints:x}=L,{maxSizePercentage:m,maxSizePixels:G,minSizePercentage:u,minSizePixels:y}=x,z=(d=ie({sizePercentage:u,sizePixels:y},e))!==null&&d!==void 0?d:0,I=(R=ie({sizePercentage:m,sizePixels:G},e))!==null&&R!==void 0?R:100;E===i[0]?(a=z,s=I):(l+=z,T+=I)});const c=Math.min(s,100-l),r=Math.max(a,100-T),o=n[i[0]];return{valueMax:c,valueMin:r,valueNow:o}}function oe(e){return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Qe(e,n){const i=oe(e).findIndex(a=>a.getAttribute("data-panel-resize-handle-id")===n);return i??null}function en(e,n){const t=Qe(e,n);return t!=null?[t,t+1]:[-1,-1]}function Ee(e){const n=document.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function ne(e){const n=Ee(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((a,s)=>a+s.offsetWidth,0):n.offsetHeight-i.reduce((a,s)=>a+s.offsetHeight,0)}function mn(e){const n=Ee(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((a,s)=>a+s.offsetWidth,0):n.offsetHeight-i.reduce((a,s)=>a+s.offsetHeight,0)}function ke(e){const n=document.querySelector(`[data-panel-resize-handle-id="${e}"]`);return n||null}function un(e,n,t){var i,a,s,l;const T=ke(n),c=oe(e),r=T?c.indexOf(T):-1,o=(i=(a=t[r])===null||a===void 0?void 0:a.id)!==null&&i!==void 0?i:null,L=(s=(l=t[r+1])===null||l===void 0?void 0:l.id)!==null&&s!==void 0?s:null;return[o,L]}function xn({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:i,panelDataArray:a,setLayout:s}){K({didWarnAboutMissingResizeHandle:!1}),Ge(()=>{const l=ne(t),T=oe(t);for(let c=0;c<a.length-1;c++){const{valueMax:r,valueMin:o,valueNow:L}=Nn({groupSizePixels:l,layout:i,panelsArray:a,pivotIndices:[c,c+1]}),E=T[c];E==null||(E.setAttribute("aria-controls",a[c].id),E.setAttribute("aria-valuemax",""+Math.round(r)),E.setAttribute("aria-valuemin",""+Math.round(o)),E.setAttribute("aria-valuenow",""+Math.round(L)))}return()=>{T.forEach((c,r)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,i,a]),se(()=>{const{panelDataArray:l}=n.current,T=Ee(t);Xe(T!=null,`No group found for id "${t}"`);const r=oe(t).map(o=>{const L=o.getAttribute("data-panel-resize-handle-id"),[E,d]=un(t,L,l);if(E==null||d==null)return()=>{};const R=x=>{if(!x.defaultPrevented)switch(x.key){case"Enter":{x.preventDefault();const u=l.findIndex(y=>y.id===E);if(u>=0){const y=l[u],z=i[u];if(z!=null&&y.constraints.collapsible){var m,G;const I=mn(t),S=(m=ie({sizePercentage:y.constraints.collapsedSizePercentage,sizePixels:y.constraints.collapsedSizePixels},I))!==null&&m!==void 0?m:0,M=(G=ie({sizePercentage:y.constraints.minSizePercentage,sizePixels:y.constraints.minSizePixels},I))!==null&&G!==void 0?G:0,X=Oe({delta:W(z,S)?M-S:S-z,groupSizePixels:I,layout:i,panelConstraints:l.map(F=>F.constraints),pivotIndices:en(t,L),trigger:"keyboard"});i!==X&&s(X)}}break}}};return o.addEventListener("keydown",R),()=>{o.removeEventListener("keydown",R)}});return()=>{r.forEach(o=>o())}},[e,n,t,i,a,s])}function pe(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function nn(e){return e.type==="keydown"}function tn(e){return e.type.startsWith("mouse")}function an(e){return e.type.startsWith("touch")}function sn(e,n){const t=e==="horizontal";if(tn(n))return t?n.clientX:n.clientY;if(an(n)){const i=n.touches[0];return t?i.screenX:i.screenY}else throw Error(`Unsupported event type "${n.type}"`)}function kn(e,n,t,i){const a=t==="horizontal",l=ke(n).getAttribute("data-panel-group-id");let{initialCursorPosition:T}=i;const c=sn(t,e),o=Ee(l).getBoundingClientRect(),L=a?o.width:o.height;return(c-T)/L*100}function bn(e,n,t,i,a,s){if(nn(e)){const l=i==="horizontal",c=Ee(n).getBoundingClientRect(),r=l?c.width:c.height;let o=0;e.shiftKey?o=100:s.percentage!=null?o=s.percentage:s.pixels!=null?o=s.pixels/r:o=10;let L=0;switch(e.key){case"ArrowDown":L=l?0:o;break;case"ArrowLeft":L=l?-o:0;break;case"ArrowRight":L=l?o:0;break;case"ArrowUp":L=l?0:-o;break;case"End":L=100;break;case"Home":L=-100;break}return L}else return kn(e,t,i,a)}function Ze({groupSizePixels:e,panelDataArray:n}){const t=Array(n.length),i=n.map(l=>l.constraints);let a=0,s=100;for(let l=0;l<n.length;l++){const{defaultSizePercentage:T}=Le(i,l,e);T!=null&&(a++,t[l]=T,s-=T)}for(let l=0;l<n.length;l++){const{defaultSizePercentage:T}=Le(i,l,e);if(T!=null)continue;const c=n.length-a,r=s/c;a++,t[l]=r,s-=r}return t}function q(e,n){return e/100*n}function te(e,n,t,i){const a=ne(e);t.forEach((s,l)=>{const T=n[l];if(!T)return;const{callbacks:c,constraints:r,id:o}=T,{collapsible:L}=r,E={sizePercentage:s,sizePixels:q(s,a)},d=i[o];if(d==null||E.sizePercentage!==d.sizePercentage||E.sizePixels!==d.sizePixels){i[o]=E;const{onCollapse:x,onExpand:m,onResize:G}=c;if(G&&G(E,d),L&&(x||m)){var R;const u=(R=ie({sizePercentage:r.collapsedSizePercentage,sizePixels:r.collapsedSizePixels},a))!==null&&R!==void 0?R:0,y=ie(E,a);m&&(d==null||d.sizePercentage===u)&&y!==u&&m(),x&&(d==null||d.sizePercentage!==u)&&y===u&&x()}}})}function Ne(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function hn({dragState:e,layout:n,panelData:t,panelIndex:i,precision:a=3}){const s=n[i];let l;return t.length===1||s==null?l="1":l=s.toPrecision(a),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:e!==null?"none":void 0}}let ye=null,ae=null;function ln(e){switch(e){case"horizontal":return"ew-resize";case"horizontal-max":return"w-resize";case"horizontal-min":return"e-resize";case"vertical":return"ns-resize";case"vertical-max":return"n-resize";case"vertical-min":return"s-resize"}}function vn(){ae!==null&&(document.head.removeChild(ae),ye=null,ae=null)}function ve(e){if(ye===e)return;ye=e;const n=ln(e);ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${n}!important;}`}function Pn(e,n=10){let t=null;return(...a)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...a)},n)}}function yn(e){return Array.from(document.querySelectorAll(`[data-panel][data-panel-group-id="${e}"]`))}function je(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function on(e){return e.map(n=>{const{constraints:t,id:i,idIsFromProps:a,order:s}=n;return a?i:`${s}:${JSON.stringify(t)}`}).sort((n,t)=>n.localeCompare(t)).join(",")}function rn(e,n){try{const t=n.getItem(`PanelGroup:sizes:${e}`);if(t){const i=JSON.parse(t);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Hn(e,n,t){const i=rn(e,t);if(i){var a;const s=on(n);return(a=i[s])!==null&&a!==void 0?a:null}return null}function Mn(e,n,t,i){const a=on(n),s=rn(e,i)||{};s[a]=t;try{i.setItem(`PanelGroup:sizes:${e}`,JSON.stringify(s))}catch(l){console.error(l)}}function Ue(e){return e.some(n=>n.collapsedSizePixels!==void 0||n.maxSizePixels!==void 0||n.minSizePixels!==void 0)}function me({groupSizePixels:e,layout:n,panelConstraints:t}){const i=[...n];if(i.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${i.map(s=>`${s}%`).join(", ")}`);W(i.reduce((s,l)=>s+l,0),100);let a=0;for(let s=0;s<t.length;s++){const l=i[s],T=ce({groupSizePixels:e,panelConstraints:t,panelIndex:s,size:l});l!=T&&(a+=l-T,i[s]=T)}if(!W(a,0))for(let s=0;s<t.length;s++){const l=i[s],T=l+a,c=ce({groupSizePixels:e,panelConstraints:t,panelIndex:s,size:T});if(l!==c&&(a-=c-l,i[s]=c,W(a,0)))break}return i}const Fn=100,Se={getItem:e=>(je(Se),Se.getItem(e)),setItem:(e,n)=>{je(Se),Se.setItem(e,n)}},Pe={};function Tn({autoSaveId:e=null,children:n,className:t="",dataAttributes:i,direction:a,forwardedRef:s,id:l,onLayout:T=null,keyboardResizeByPercentage:c=null,keyboardResizeByPixels:r=null,storage:o=Se,style:L,tagName:E="div"}){const d=Fe(l),[R,x]=ue(null),[m,G]=ue([]),u=K({}),y=K(new Map),z=K(0),I=K({autoSaveId:e,direction:a,dragState:R,id:d,keyboardResizeByPercentage:c,keyboardResizeByPixels:r,onLayout:T,storage:o}),S=K({layout:m,panelDataArray:[]});K({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Ye(s,()=>({getId:()=>I.current.id,getLayout:()=>{const{id:D}=I.current,{layout:B}=S.current,g=ne(D);return B.map(C=>({sizePercentage:C,sizePixels:q(C,g)}))},setLayout:D=>{const{id:B,onLayout:g}=I.current,{layout:C,panelDataArray:O}=S.current,p=ne(B),A=D.map(k=>ie(k,p)),b=me({groupSizePixels:p,layout:A,panelConstraints:O.map(k=>k.constraints)});pe(C,b)||(G(b),S.current.layout=b,g&&g(b.map(k=>({sizePercentage:k,sizePixels:q(k,p)}))),te(B,O,b,u.current))}}),[]),Ge(()=>{I.current.autoSaveId=e,I.current.direction=a,I.current.dragState=R,I.current.id=d,I.current.onLayout=T,I.current.storage=o}),xn({committedValuesRef:I,eagerValuesRef:S,groupId:d,layout:m,panelDataArray:S.current.panelDataArray,setLayout:G}),se(()=>{const{panelDataArray:D}=S.current;if(e){if(m.length===0||m.length!==D.length)return;Pe[e]||(Pe[e]=Pn(Mn,Fn)),Pe[e](e,D,m,o)}},[e,m,o]),Ge(()=>{const{layout:D,panelDataArray:B}=S.current,g=B.map(({constraints:C})=>C);if(Ue(g))if(typeof ResizeObserver>"u")console.warn("WARNING: Pixel based constraints require ResizeObserver but it is not supported by the current browser.");else{const C=new ResizeObserver(()=>{const O=ne(d),{onLayout:p}=I.current,A=me({groupSizePixels:O,layout:D,panelConstraints:B.map(b=>b.constraints)});pe(D,A)||(G(A),S.current.layout=A,p&&p(A.map(b=>({sizePercentage:b,sizePixels:q(b,O)}))),te(d,B,A,u.current))});return C.observe(Ee(d)),()=>{C.disconnect()}}},[d]),se(()=>{});const M=U(D=>{const{onLayout:B}=I.current,{layout:g,panelDataArray:C}=S.current;if(D.constraints.collapsible){const O=C.map(P=>P.constraints),{collapsedSizePercentage:p,panelSizePercentage:A,pivotIndices:b,groupSizePixels:k}=Te(d,C,D,g);if(A!==p){y.current.set(D.id,A);const H=C.indexOf(D)===C.length-1?A-p:p-A,N=Oe({delta:H,groupSizePixels:k,layout:g,panelConstraints:O,pivotIndices:b,trigger:"imperative-api"});Ne(g,N)||(G(N),S.current.layout=N,B&&B(N.map(h=>({sizePercentage:h,sizePixels:q(h,k)}))),te(d,C,N,u.current))}}},[d]),X=U(D=>{const{onLayout:B}=I.current,{layout:g,panelDataArray:C}=S.current;if(D.constraints.collapsible){const O=C.map(H=>H.constraints),{collapsedSizePercentage:p,panelSizePercentage:A,minSizePercentage:b,pivotIndices:k,groupSizePixels:P}=Te(d,C,D,g);if(A===p){const H=y.current.get(D.id),N=H!=null&&H>=b?H:b,v=C.indexOf(D)===C.length-1?A-N:N-A,j=Oe({delta:v,groupSizePixels:P,layout:g,panelConstraints:O,pivotIndices:k,trigger:"imperative-api"});Ne(g,j)||(G(j),S.current.layout=j,B&&B(j.map(Re=>({sizePercentage:Re,sizePixels:q(Re,P)}))),te(d,C,j,u.current))}}},[d]),F=U(D=>{const{layout:B,panelDataArray:g}=S.current,{panelSizePercentage:C,panelSizePixels:O}=Te(d,g,D,B);return{sizePercentage:C,sizePixels:O}},[d]),w=U(D=>{const{panelDataArray:B}=S.current,g=B.indexOf(D);return hn({dragState:R,layout:m,panelData:B,panelIndex:g})},[R,m]),re=U(D=>{const{layout:B,panelDataArray:g}=S.current,{collapsedSizePercentage:C,collapsible:O,panelSizePercentage:p}=Te(d,g,D,B);return O===!0&&p===C},[d]),Z=U(D=>{const{layout:B,panelDataArray:g}=S.current,{collapsedSizePercentage:C,collapsible:O,panelSizePercentage:p}=Te(d,g,D,B);return!O||p>C},[d]),Q=U(D=>{const{autoSaveId:B,id:g,onLayout:C,storage:O}=I.current,{layout:p,panelDataArray:A}=S.current;if(A.push(D),A.sort((N,h)=>{const v=N.order,j=h.order;return v==null&&j==null?0:v==null?-1:j==null?1:v-j}),yn(g).length!==A.length)return;let k=null;B&&(k=Hn(B,A,O));const P=ne(g);if(P<=0&&Ue(A.map(({constraints:N})=>N)))return;k==null&&(k=Ze({groupSizePixels:P,panelDataArray:A}));const H=me({groupSizePixels:P,layout:k,panelConstraints:A.map(N=>N.constraints)});G(H),S.current.layout=H,pe(p,H)||(C&&C(H.map(N=>({sizePercentage:N,sizePixels:q(N,P)}))),te(g,A,H,u.current))},[]),ee=U(D=>function(g){g.preventDefault();const{direction:C,dragState:O,id:p,keyboardResizeByPercentage:A,keyboardResizeByPixels:b,onLayout:k}=I.current,{layout:P,panelDataArray:H}=S.current,{initialLayout:N}=O??{},h=en(p,D);let v=bn(g,p,D,C,O,{percentage:A,pixels:b});if(v===0)return;const j=C==="horizontal";document.dir==="rtl"&&j&&(v=-v);const Re=ne(p),fn=H.map(Ae=>Ae.constraints),De=Oe({delta:v,groupSizePixels:Re,layout:N??P,panelConstraints:fn,pivotIndices:h,trigger:nn(g)?"keyboard":"mouse-or-touch"}),ze=!Ne(P,De);(tn(g)||an(g))&&z.current!=v&&(z.current=v,ve(ze?j?"horizontal":"vertical":j?v<0?"horizontal-min":"horizontal-max":v<0?"vertical-min":"vertical-max")),ze&&(G(De),S.current.layout=De,k&&k(De.map(Ae=>({sizePercentage:Ae,sizePixels:q(Ae,Re)}))),te(p,H,De,u.current))},[]),_=U((D,B)=>{const{onLayout:g}=I.current,{layout:C,panelDataArray:O}=S.current,p=O.map(v=>v.constraints),{groupSizePixels:A,panelSizePercentage:b,pivotIndices:k}=Te(d,O,D,C),P=ie(B,A),N=O.indexOf(D)===O.length-1?b-P:P-b,h=Oe({delta:N,groupSizePixels:A,layout:C,panelConstraints:p,pivotIndices:k,trigger:"imperative-api"});Ne(C,h)||(G(h),S.current.layout=h,g&&g(h.map(v=>({sizePercentage:v,sizePixels:q(v,A)}))),te(d,O,h,u.current))},[d]),Be=U((D,B)=>{const{direction:g}=I.current,{layout:C}=S.current,O=ke(D),p=sn(g,B);x({dragHandleId:D,dragHandleRect:O.getBoundingClientRect(),initialCursorPosition:p,initialLayout:C})},[]),$=U(()=>{vn(),x(null)},[]),V=K({pendingPanelIds:new Set,timeout:null}),we=U(D=>{const{id:B,onLayout:g}=I.current,{layout:C,panelDataArray:O}=S.current,p=O.indexOf(D);p>=0&&(O.splice(p,1),V.current.pendingPanelIds.add(D.id)),V.current.timeout!=null&&clearTimeout(V.current.timeout),V.current.timeout=setTimeout(()=>{const{pendingPanelIds:A}=V.current,b=u.current;let k=!1;if(A.forEach(h=>{A.delete(h),O.find(({id:v})=>v===h)==null&&(k=!0,delete b[D.id])}),!k||O.length===0)return;const P=ne(B);let H=Ze({groupSizePixels:P,panelDataArray:O});const N=me({groupSizePixels:P,layout:H,panelConstraints:O.map(h=>h.constraints)});pe(C,N)||(G(N),S.current.layout=N,g&&g(N.map(h=>({sizePercentage:h,sizePixels:q(h,P)}))),te(B,O,N,u.current))},0)},[]),cn=In(()=>({collapsePanel:M,direction:a,dragState:R,expandPanel:X,getPanelSize:F,getPanelStyle:w,groupId:d,isPanelCollapsed:re,isPanelExpanded:Z,registerPanel:Q,registerResizeHandle:ee,resizePanel:_,startDragging:Be,stopDragging:$,unregisterPanel:we}),[M,R,a,X,F,w,d,re,Z,Q,ee,_,Be,$,we]),dn={display:"flex",flexDirection:a==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return fe(xe.Provider,{value:cn},fe(E,{children:n,className:t,style:{...dn,...L},...i,"data-panel-group":"","data-panel-group-direction":a,"data-panel-group-id":d}))}const be=$e((e,n)=>fe(Tn,{...e,forwardedRef:n}));Tn.displayName="PanelGroup";be.displayName="forwardRef(PanelGroup)";function Te(e,n,t,i){const a=n.map(d=>d.constraints),s=n.indexOf(t),l=a[s],T=ne(e),c=Le(a,s,T),o=s===n.length-1?[s-1,s]:[s,s+1],L=i[s],E=q(L,T);return{...c,collapsible:l.collapsible,panelSizePercentage:L,panelSizePixels:E,groupSizePixels:T,pivotIndices:o}}function wn({disabled:e,handleId:n,resizeHandler:t}){se(()=>{if(e||t==null)return;const i=ke(n);if(i==null)return;const a=s=>{if(!s.defaultPrevented)switch(s.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{s.preventDefault(),t(s);break}case"F6":{s.preventDefault();const l=i.getAttribute("data-panel-group-id"),T=oe(l),c=Qe(l,n);Xe(c!==null);const r=s.shiftKey?c>0?c-1:T.length-1:c+1<T.length?c+1:0;T[r].focus();break}}};return i.addEventListener("keydown",a),()=>{i.removeEventListener("keydown",a)}},[e,n,t])}function he({children:e=null,className:n="",dataAttributes:t,disabled:i=!1,id:a=null,onDragging:s,style:l={},tagName:T="div"}){const c=K(null),r=K({onDragging:s});se(()=>{r.current.onDragging=s});const o=qe(xe);if(o===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:L,dragState:E,groupId:d,registerResizeHandle:R,startDragging:x,stopDragging:m}=o,G=Fe(a),u=(E==null?void 0:E.dragHandleId)===G,[y,z]=ue(!1),[I,S]=ue(null),M=U(()=>{c.current.blur(),m();const{onDragging:w}=r.current;w&&w(!1)},[m]);se(()=>{if(i)S(null);else{const F=R(G);S(()=>F)}},[i,G,R]),se(()=>{if(i||I==null||!u)return;const F=Q=>{I(Q)},w=Q=>{I(Q)},Z=c.current.ownerDocument;return Z.body.addEventListener("contextmenu",M),Z.body.addEventListener("mousemove",F),Z.body.addEventListener("touchmove",F),Z.body.addEventListener("mouseleave",w),window.addEventListener("mouseup",M),window.addEventListener("touchend",M),()=>{Z.body.removeEventListener("contextmenu",M),Z.body.removeEventListener("mousemove",F),Z.body.removeEventListener("touchmove",F),Z.body.removeEventListener("mouseleave",w),window.removeEventListener("mouseup",M),window.removeEventListener("touchend",M)}},[L,i,u,I,M]),wn({disabled:i,handleId:G,resizeHandler:I});const X={cursor:ln(L),touchAction:"none",userSelect:"none"};return fe(T,{children:e,className:n,onBlur:()=>z(!1),onFocus:()=>z(!0),onMouseDown:F=>{x(G,F.nativeEvent);const{onDragging:w}=r.current;w&&w(!0)},onMouseUp:M,onTouchCancel:M,onTouchEnd:M,onTouchStart:F=>{x(G,F.nativeEvent);const{onDragging:w}=r.current;w&&w(!0)},ref:c,role:"separator",style:{...X,...l},tabIndex:0,...t,"data-panel-group-direction":L,"data-panel-group-id":d,"data-resize-handle":"","data-resize-handle-active":u?"pointer":y?"keyboard":void 0,"data-panel-resize-handle-enabled":!i,"data-panel-resize-handle-id":G})}he.displayName="PanelResizeHandle";const zn=async e=>await(await fetch("https://kroki.io/d2/svg",{method:"POST",cache:"force-cache",body:JSON.stringify({diagram_source:e,output_format:"svg"}),headers:{"Content-Type":"application/json"}})).text();function _n({viewId:e}){var a;const n=On(e),[t,{execute:i}]=Ke(zn,null);return f.jsxs(be,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[f.jsx(le,{minSizePixels:100,children:f.jsxs(de,{scrollbars:"both",children:[f.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:f.jsx(He,{variant:"soft",autoFocus:!0,children:n})}),f.jsx(Me,{text:n})]})}),f.jsx(he,{style:{width:10}}),f.jsx(le,{minSizePixels:100,children:f.jsxs(de,{scrollbars:"both",children:[t.status!=="success"&&f.jsxs(f.Fragment,{children:[f.jsx(En,{disabled:t.status==="loading",onClick:()=>void i(n),children:t.status==="loading"?"Loading...":"Render with Kroki"}),t.status==="error"&&f.jsx(Y,{children:(a=t.error)==null?void 0:a.message})]}),t.status==="success"&&f.jsx(Y,{grow:"1",asChild:!0,className:"svg-container",children:t.result?f.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}}):f.jsx(Y,{children:"Empty result"})})]})})]})}function Vn(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    customer [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Monitor of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    gcs [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">GCS</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Ground control Station</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=GCS,
        likec4_level=0];
    customer -> gcs [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Control and monitoring</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:GCS",
        minlen=1,
        style=dashed];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp;</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=device,
        likec4_level=0];
    gcs -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">[FTP,ROS,RSTP]</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS:device",
        minlen=1,
        style=dashed];
    elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">OpenTopoData</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Api of elevation</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=elevationApi,
        likec4_level=0];
    gcs -> elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">HTTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS:elevationApi",
        minlen=1,
        style=dashed];
}
`;case"feb1c26b09984c154f833452dd3dcbd84f04e711":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_gcs {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>GCS</B>>,
            likec4_depth=1,
            likec4_id=GCS,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ui [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Reactjs node V18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Single web aplication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.ui",
            likec4_level=1,
            margin="0.362,0.417"];
        backend [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">GCS Backend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Javascript Nodejs V18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Implements business logic,</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">comunication with UAVs using ROS</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">and exposes as REST API</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend",
            likec4_level=1];
        ui -> backend [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">request via HTTPS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.ui:GCS.backend",
            style=dashed];
        mediamtx [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Multimedia server</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RealTime video Transmission</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.mediamtx",
            likec4_level=1];
        backend -> mediamtx [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">API REST</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend:GCS.mediamtx",
            minlen=1,
            style=dashed];
        rosbridge [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ROSBridge</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.Rosbridge",
            likec4_level=1];
        backend -> rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">UDP socket</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend:GCS.Rosbridge",
            minlen=1,
            style=dashed];
        rosmultimaster [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Multimaster FLK</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.RosMultimaster",
            likec4_level=1];
        rosbridge -> rosmultimaster [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">ROS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.Rosbridge:GCS.RosMultimaster",
            minlen=1,
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Monitor of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> ui [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">open in browser</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:GCS.ui",
        minlen=1,
        style=dashed];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp;</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=device,
        likec4_level=0];
    elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">OpenTopoData</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Api of elevation</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=elevationApi,
        likec4_level=0];
    backend -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">FTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend:device",
        style=dashed];
    backend -> elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">HTTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend:elevationApi",
        minlen=1,
        style=dashed];
    mediamtx -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">RTSP H264</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.mediamtx:device",
        style=dashed];
    rosmultimaster -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">ROS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.RosMultimaster:device",
        style=dashed];
}
`;case"backend":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_gcs {
        graph [color="#292f37",
            fillcolor="#3a404a",
            fontcolor="#cbd5e1b3",
            label=<<B>GCS</B>>,
            likec4_depth=2,
            likec4_id=GCS,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_backend {
            graph [color="#2d333d",
                fillcolor="#3e4651",
                fontcolor="#cbd5e1b3",
                label=<<B>GCS BACKEND</B>>,
                likec4_depth=1,
                likec4_id="GCS.backend",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            express [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">REST API &amp; Socket</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">REST API for the backend</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">uses Express and send Telemetry</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.express",
                likec4_level=2];
            missionmanager [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mission Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Mission inspection logic</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.missionManager",
                likec4_level=2];
            express -> missionmanager [likec4_id="GCS.backend.express:GCS.backend.missionManager",
                style=dashed];
            devicemanager [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Process all devices msg &amp; command</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.deviceManager",
                likec4_level=2];
            express -> devicemanager [likec4_id="GCS.backend.express:GCS.backend.deviceManager",
                style=dashed];
            ftp [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">File Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Download mission files</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">from Devices</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.ftp",
                likec4_level=2];
            missionmanager -> ftp [likec4_id="GCS.backend.missionManager:GCS.backend.ftp",
                minlen=1,
                style=dashed];
            missionmanager -> devicemanager [likec4_id="GCS.backend.missionManager:GCS.backend.deviceManager",
                style=dashed];
            events [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Events Manager</FONT></TD></TR></TABLE>>,
                likec4_id="GCS.backend.events",
                likec4_level=2];
            devicemanager -> events [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Create events</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.deviceManager:GCS.backend.events",
                minlen=1,
                style=dashed];
            roslib [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ROSLibjs</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Convert msg and command</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">to ROS &amp; the other way</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.roslib",
                likec4_level=2];
            devicemanager -> roslib [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Msg &amp; Srv ROS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.deviceManager:GCS.backend.roslib",
                style=dashed];
            events -> express [likec4_id="GCS.backend.events:GCS.backend.express",
                style=dashed];
            roslib -> devicemanager [likec4_id="GCS.backend.roslib:GCS.backend.deviceManager",
                style=dashed];
        }
        ui [fillcolor="#428a4f",
            group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#c2f0c2">Reactjs node V18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Single web aplication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.ui",
            likec4_level=1,
            margin="0.362,0.417"];
        ui -> express [likec4_id="GCS.ui:GCS.backend.express",
            minlen=1,
            style=dashed];
        rosbridge [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ROSBridge</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.Rosbridge",
            likec4_level=1];
        mediamtx [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Multimedia server</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RealTime video Transmission</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.mediamtx",
            likec4_level=1];
        devicemanager -> mediamtx [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">API REST</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.deviceManager:GCS.mediamtx",
            minlen=1,
            style=dashed];
        roslib -> rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Send/Recv msg</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.roslib:GCS.Rosbridge",
            minlen=1,
            style=dashed];
    }
    elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">OpenTopoData</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Api of elevation</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=elevationApi,
        likec4_level=0];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp;</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=device,
        likec4_level=0];
    mediamtx -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">RTSP H264</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.mediamtx:device",
        style=dashed];
    missionmanager -> elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">HTTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.missionManager:elevationApi",
        minlen=1,
        style=dashed];
    ftp -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">FTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.ftp:device",
        style=dashed];
}
`;case"backend_complete":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_gcs {
        graph [color="#292f37",
            fillcolor="#3a404a",
            fontcolor="#cbd5e1b3",
            label=<<B>GCS</B>>,
            likec4_depth=2,
            likec4_id=GCS,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_backend {
            graph [color="#2d333d",
                fillcolor="#3e4651",
                fontcolor="#cbd5e1b3",
                label=<<B>GCS BACKEND</B>>,
                likec4_depth=1,
                likec4_id="GCS.backend",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            express [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">REST API &amp; Socket</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">REST API for the backend</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">uses Express and send Telemetry</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.express",
                likec4_level=2];
            missionmanager [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mission Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Mission inspection logic</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.missionManager",
                likec4_level=2];
            express -> missionmanager [likec4_id="GCS.backend.express:GCS.backend.missionManager",
                style=dashed];
            devicemanager [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Process all devices msg &amp; command</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.deviceManager",
                likec4_level=2];
            express -> devicemanager [likec4_id="GCS.backend.express:GCS.backend.deviceManager",
                style=dashed];
            ftp [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">File Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Download mission files</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">from Devices</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.ftp",
                likec4_level=2];
            missionmanager -> ftp [likec4_id="GCS.backend.missionManager:GCS.backend.ftp",
                minlen=1,
                style=dashed];
            missionmanager -> devicemanager [likec4_id="GCS.backend.missionManager:GCS.backend.deviceManager",
                style=dashed];
            events [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Events Manager</FONT></TD></TR></TABLE>>,
                likec4_id="GCS.backend.events",
                likec4_level=2];
            devicemanager -> events [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Create events</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.deviceManager:GCS.backend.events",
                minlen=1,
                style=dashed];
            roslib [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ROSLibjs</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Convert msg and command</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">to ROS &amp; the other way</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.roslib",
                likec4_level=2];
            devicemanager -> roslib [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Msg &amp; Srv ROS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.deviceManager:GCS.backend.roslib",
                style=dashed];
            events -> express [likec4_id="GCS.backend.events:GCS.backend.express",
                style=dashed];
            roslib -> devicemanager [likec4_id="GCS.backend.roslib:GCS.backend.deviceManager",
                style=dashed];
        }
        ui [fillcolor="#428a4f",
            group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#c2f0c2">Reactjs node V18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Single web aplication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.ui",
            likec4_level=1,
            margin="0.362,0.417"];
        ui -> express [likec4_id="GCS.ui:GCS.backend.express",
            minlen=1,
            style=dashed];
        rosbridge [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ROSBridge</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.Rosbridge",
            likec4_level=1];
        rosmultimaster [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Multimaster FLK</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.RosMultimaster",
            likec4_level=1];
        rosbridge -> rosmultimaster [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">ROS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.Rosbridge:GCS.RosMultimaster",
            minlen=1,
            style=dashed];
        mediamtx [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Multimedia server</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RealTime video Transmission</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.mediamtx",
            likec4_level=1];
        devicemanager -> mediamtx [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">API REST</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.deviceManager:GCS.mediamtx",
            minlen=1,
            style=dashed];
        roslib -> rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Send/Recv msg</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.roslib:GCS.Rosbridge",
            minlen=1,
            style=dashed];
    }
    elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">OpenTopoData</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Api of elevation</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=elevationApi,
        likec4_level=0];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp;</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=device,
        likec4_level=0];
    rosmultimaster -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">ROS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.RosMultimaster:device",
        style=dashed];
    mediamtx -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">RTSP H264</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.mediamtx:device",
        style=dashed];
    missionmanager -> elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">HTTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.missionManager:elevationApi",
        minlen=1,
        style=dashed];
    ftp -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">FTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.ftp:device",
        style=dashed];
}
`;case"my_backend":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.25,
        outputorder=nodesfirst,
        pack=90,
        packmode=array_3,
        penwidth=1,
        rankdir=TB,
        ranksep=1.25,
        searchsize=50,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.5,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_backend {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>GCS BACKEND</B>>,
            likec4_depth=1,
            likec4_id="GCS.backend",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        express [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">REST API &amp; Socket</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">REST API for the backend</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">uses Express and send Telemetry</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.express",
            likec4_level=1];
        missionmanager [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mission Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Mission inspection logic</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.missionManager",
            likec4_level=1];
        express -> missionmanager [likec4_id="GCS.backend.express:GCS.backend.missionManager",
            style=dashed];
        devicemanager [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Process all devices msg &amp; command</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.deviceManager",
            likec4_level=1];
        express -> devicemanager [likec4_id="GCS.backend.express:GCS.backend.deviceManager",
            style=dashed];
        ftp [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">File Manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Download mission files</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">from Devices</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.ftp",
            likec4_level=1];
        missionmanager -> ftp [likec4_id="GCS.backend.missionManager:GCS.backend.ftp",
            minlen=1,
            style=dashed];
        missionmanager -> devicemanager [likec4_id="GCS.backend.missionManager:GCS.backend.deviceManager",
            style=dashed];
        events [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Events Manager</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.backend.events",
            likec4_level=1];
        devicemanager -> events [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Create events</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.deviceManager:GCS.backend.events",
            minlen=1,
            style=dashed];
        roslib [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ROSLibjs</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Convert msg and command</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">to ROS &amp; the other way</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.roslib",
            likec4_level=1];
        devicemanager -> roslib [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Msg &amp; Srv ROS</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.deviceManager:GCS.backend.roslib",
            style=dashed];
        events -> express [likec4_id="GCS.backend.events:GCS.backend.express",
            style=dashed];
        roslib -> devicemanager [likec4_id="GCS.backend.roslib:GCS.backend.deviceManager",
            style=dashed];
    }
    ui [fillcolor="#428a4f",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#c2f0c2">Reactjs node V18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Single web aplication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.ui",
        likec4_level=0,
        margin="0.362,0.417"];
    ui -> express [likec4_id="GCS.ui:GCS.backend.express",
        minlen=1,
        style=dashed];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp;</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=device,
        likec4_level=0];
    elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">OpenTopoData</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Api of elevation</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=elevationApi,
        likec4_level=0];
    rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">ROSBridge</FONT></TD></TR></TABLE>>,
        likec4_id="GCS.Rosbridge",
        likec4_level=0];
    mediamtx [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Multimedia server</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">RealTime video Transmission</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.mediamtx",
        likec4_level=0];
    missionmanager -> elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">HTTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.missionManager:elevationApi",
        minlen=1,
        style=dashed];
    ftp -> device [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">FTP</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.ftp:device",
        minlen=1,
        style=dashed];
    devicemanager -> mediamtx [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">API REST</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.deviceManager:GCS.mediamtx",
        minlen=1,
        style=dashed];
    roslib -> rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Send/Recv msg</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.backend.roslib:GCS.Rosbridge",
        minlen=1,
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+e)}}function Zn(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="738pt" height="775pt"
 viewBox="0.00 0.00 738.04 775.20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 771.2)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="525.04,-767.2 205,-767.2 205,-587.2 525.04,-587.2 525.04,-767.2"/>
<text text-anchor="start" x="321.68" y="-681.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="317.56" y="-658" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Monitor of UAV</text>
</g>
<!-- gcs -->
<g id="node2" class="node">
<title>gcs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="525.04,-473.6 205,-473.6 205,-293.6 525.04,-293.6 525.04,-473.6"/>
<text text-anchor="start" x="343.35" y="-388" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">GCS</text>
<text text-anchor="start" x="294.98" y="-364.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Ground control Station</text>
</g>
<!-- device -->
<g id="node3" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="144.02" y="-140.3"/>
<text text-anchor="start" x="129.45" y="-84.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device</text>
<text text-anchor="start" x="101.67" y="-60.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp;</text>
<text text-anchor="start" x="95.84" y="-43.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RSTP server of UAV</text>
</g>
<!-- elevationapi -->
<g id="node4" class="node">
<title>elevationapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="730.04,-180 410,-180 410,0 730.04,0 730.04,-180"/>
<text text-anchor="start" x="501.64" y="-94.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">OpenTopoData</text>
<text text-anchor="start" x="522.15" y="-70.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Api of elevation</text>
</g>
<!-- customer&#45;&gt;gcs -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;gcs</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M365.02,-587.52C365.02,-555.57 365.02,-519.27 365.02,-486.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="368.52,-486.38 365.02,-476.38 361.52,-486.38 368.52,-486.38"/>
<text text-anchor="start" x="375.02" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Control and monitoring</text>
</g>
<!-- gcs&#45;&gt;device -->
<g id="edge2" class="edge">
<title>gcs&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M302.68,-293.92C279.62,-261.12 253.34,-223.74 229.67,-190.08"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="232.77,-188.4 224.16,-182.23 227.05,-192.43 232.77,-188.4"/>
<text text-anchor="start" x="279.02" y="-232.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">[FTP,ROS,RSTP]</text>
</g>
<!-- gcs&#45;&gt;elevationapi -->
<g id="edge3" class="edge">
<title>gcs&#45;&gt;elevationapi</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M427.36,-293.92C450.42,-261.12 476.7,-223.74 500.37,-190.08"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="502.99,-192.43 505.88,-182.23 497.27,-188.4 502.99,-192.43"/>
<text text-anchor="start" x="483.02" y="-232.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">HTTP</text>
</g>
</g>
</svg>
`;case"feb1c26b09984c154f833452dd3dcbd84f04e711":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1370pt" height="1675pt"
 viewBox="0.00 0.00 1370.02 1674.60" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1670.6)">
<g id="clust1" class="cluster">
<title>cluster_gcs</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-261.6 8,-1410 802,-1410 802,-261.6 8,-261.6"/>
<text text-anchor="start" x="16" y="-1395.3" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">GCS</text>
</g>
<!-- ui -->
<g id="node1" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-1354.4 449.98,-1354.4 449.98,-1174.4 770.02,-1174.4 770.02,-1354.4"/>
<text text-anchor="start" x="569.98" y="-1278.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="562.64" y="-1256.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Reactjs node V18</text>
<text text-anchor="start" x="544.23" y="-1235.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Single web aplication</text>
</g>
<!-- backend -->
<g id="node2" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-1060.8 449.98,-1060.8 449.98,-880.8 770.02,-880.8 770.02,-1060.8"/>
<text text-anchor="start" x="546.64" y="-1001.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">GCS Backend</text>
<text text-anchor="start" x="550.3" y="-979.9" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Javascript Nodejs V18</text>
<text text-anchor="start" x="525.96" y="-958.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Implements business logic,</text>
<text text-anchor="start" x="498.73" y="-941.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">comunication with UAVs using ROS</text>
<text text-anchor="start" x="527.12" y="-925.1" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">and exposes as REST API</text>
</g>
<!-- mediamtx -->
<g id="node3" class="node">
<title>mediamtx</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-767.2 449.98,-767.2 449.98,-587.2 770.02,-587.2 770.02,-767.2"/>
<text text-anchor="start" x="531.09" y="-681.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimedia server</text>
<text text-anchor="start" x="517.8" y="-658" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RealTime video Transmission</text>
</g>
<!-- rosbridge -->
<g id="node4" class="node">
<title>rosbridge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-767.2 39.98,-767.2 39.98,-587.2 360.02,-587.2 360.02,-767.2"/>
<text text-anchor="start" x="149.42" y="-670.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ROSBridge</text>
</g>
<!-- rosmultimaster -->
<g id="node5" class="node">
<title>rosmultimaster</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-473.6 39.98,-473.6 39.98,-293.6 360.02,-293.6 360.02,-473.6"/>
<text text-anchor="start" x="127.21" y="-377.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimaster FLK</text>
</g>
<!-- customer -->
<g id="node6" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#2563eb" stroke-width="0" points="770.02,-1666.6 449.98,-1666.6 449.98,-1486.6 770.02,-1486.6 770.02,-1666.6"/>
<text text-anchor="start" x="566.66" y="-1581" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer</text>
<text text-anchor="start" x="562.54" y="-1557.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Monitor of UAV</text>
</g>
<!-- device -->
<g id="node7" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-180 449.98,-180 449.98,0 770.02,0 770.02,-180"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="594" y="-140.3"/>
<text text-anchor="start" x="579.43" y="-84.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device</text>
<text text-anchor="start" x="551.65" y="-60.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp;</text>
<text text-anchor="start" x="545.82" y="-43.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RSTP server of UAV</text>
</g>
<!-- elevationapi -->
<g id="node8" class="node">
<title>elevationapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1362.02,-767.2 1041.98,-767.2 1041.98,-587.2 1362.02,-587.2 1362.02,-767.2"/>
<text text-anchor="start" x="1133.62" y="-681.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">OpenTopoData</text>
<text text-anchor="start" x="1154.13" y="-658" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Api of elevation</text>
</g>
<!-- ui&#45;&gt;backend -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M610,-1174.72C610,-1142.77 610,-1106.47 610,-1073.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="613.5,-1073.58 610,-1063.58 606.5,-1073.58 613.5,-1073.58"/>
<text text-anchor="start" x="620" y="-1113.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">request via HTTPS</text>
</g>
<!-- backend&#45;&gt;mediamtx -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;mediamtx</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M610,-881.12C610,-849.17 610,-812.87 610,-779.9"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="613.5,-779.98 610,-769.98 606.5,-779.98 613.5,-779.98"/>
<text text-anchor="start" x="620" y="-820.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">API REST</text>
</g>
<!-- backend&#45;&gt;rosbridge -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;rosbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M485.04,-880.92C437.75,-847.29 383.72,-808.86 335.5,-774.57"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="337.63,-771.79 327.46,-768.85 333.58,-777.5 337.63,-771.79"/>
<text text-anchor="start" x="427" y="-820.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">UDP socket</text>
</g>
<!-- backend&#45;&gt;device -->
<g id="edge6" class="edge">
<title>backend&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M730.87,-880.98C764.59,-849.24 796.92,-810.49 815,-767.2 897.97,-568.54 770.84,-324.47 682.68,-190.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="685.74,-188.89 677.29,-182.51 679.91,-192.77 685.74,-188.89"/>
<text text-anchor="start" x="843" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">FTP</text>
</g>
<!-- backend&#45;&gt;elevationapi -->
<g id="edge7" class="edge">
<title>backend&#45;&gt;elevationapi</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M769.59,-920.82C834.58,-898.39 909.45,-869.31 974,-835.8 1007.96,-818.17 1042.82,-796.29 1074.74,-774.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1076.71,-777.4 1082.96,-768.84 1072.74,-771.63 1076.71,-777.4"/>
<text text-anchor="start" x="1023" y="-820.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">HTTP</text>
</g>
<!-- mediamtx&#45;&gt;device -->
<g id="edge8" class="edge">
<title>mediamtx&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M610,-587.32C610,-481.21 610,-304.14 610,-192.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="613.5,-192.78 610,-182.78 606.5,-192.78 613.5,-192.78"/>
<text text-anchor="start" x="620" y="-379.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">RTSP H264</text>
</g>
<!-- rosbridge&#45;&gt;rosmultimaster -->
<g id="edge4" class="edge">
<title>rosbridge&#45;&gt;rosmultimaster</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-587.52C200,-555.57 200,-519.27 200,-486.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="203.5,-486.38 200,-476.38 196.5,-486.38 203.5,-486.38"/>
<text text-anchor="start" x="210" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">ROS</text>
</g>
<!-- rosmultimaster&#45;&gt;device -->
<g id="edge9" class="edge">
<title>rosmultimaster&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324.96,-293.72C372.25,-260.09 426.28,-221.66 474.5,-187.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="476.42,-190.3 482.54,-181.65 472.37,-184.59 476.42,-190.3"/>
<text text-anchor="start" x="427" y="-232.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">ROS</text>
</g>
<!-- customer&#45;&gt;ui -->
<g id="edge5" class="edge">
<title>customer&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M610,-1486.71C610,-1449.39 610,-1405.78 610,-1367.18"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="613.5,-1367.33 610,-1357.33 606.5,-1367.33 613.5,-1367.33"/>
<text text-anchor="start" x="620" y="-1425.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">open in browser</text>
</g>
</g>
</svg>
`;case"backend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1670pt" height="1733pt"
 viewBox="0.00 0.00 1670.02 1733.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1729)">
<g id="clust1" class="cluster">
<title>cluster_gcs</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-8 8,-1717 1310,-1717 1310,-8 8,-8"/>
<text text-anchor="start" x="16" y="-1702.3" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">GCS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_backend</title>
<polygon fill="#3e4651" stroke="#2d333d" points="40,-301.6 40,-1427.4 926,-1427.4 926,-301.6 40,-301.6"/>
<text text-anchor="start" x="48" y="-1412.7" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">GCS BACKEND</text>
</g>
<!-- express -->
<g id="node1" class="node">
<title>express</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.02,-1371.8 163.98,-1371.8 163.98,-1191.8 484.02,-1191.8 484.02,-1371.8"/>
<text text-anchor="start" x="235.64" y="-1294.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">REST API &amp; Socket</text>
<text text-anchor="start" x="241.9" y="-1271" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">REST API for the backend</text>
<text text-anchor="start" x="218.17" y="-1254.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">uses Express and send Telemetry</text>
</g>
<!-- missionmanager -->
<g id="node2" class="node">
<title>missionmanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="735.02,-1100.8 414.98,-1100.8 414.98,-920.8 735.02,-920.8 735.02,-1100.8"/>
<text text-anchor="start" x="498.86" y="-1015.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mission Manager</text>
<text text-anchor="start" x="501.47" y="-991.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Mission inspection logic</text>
</g>
<!-- devicemanager -->
<g id="node3" class="node">
<title>devicemanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.02,-807.2 163.98,-807.2 163.98,-627.2 484.02,-627.2 484.02,-807.2"/>
<text text-anchor="start" x="251.19" y="-721.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device Manager</text>
<text text-anchor="start" x="209.62" y="-698" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Process all devices msg &amp; command</text>
</g>
<!-- ftp -->
<g id="node4" class="node">
<title>ftp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="894.02,-807.2 573.98,-807.2 573.98,-627.2 894.02,-627.2 894.02,-807.2"/>
<text text-anchor="start" x="675.64" y="-730" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">File Manager</text>
<text text-anchor="start" x="662.8" y="-706.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Download mission files</text>
<text text-anchor="start" x="693.16" y="-689.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">from Devices</text>
</g>
<!-- events -->
<g id="node5" class="node">
<title>events</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-513.6 71.98,-513.6 71.98,-333.6 392.02,-333.6 392.02,-513.6"/>
<text text-anchor="start" x="159.18" y="-417.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Events Manager</text>
</g>
<!-- roslib -->
<g id="node6" class="node">
<title>roslib</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="802.02,-513.6 481.98,-513.6 481.98,-333.6 802.02,-333.6 802.02,-513.6"/>
<text text-anchor="start" x="599.76" y="-436.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ROSLibjs</text>
<text text-anchor="start" x="556.02" y="-412.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Convert msg and command</text>
<text text-anchor="start" x="568.47" y="-396" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">to ROS &amp; the other way</text>
</g>
<!-- ui -->
<g id="node7" class="node">
<title>ui</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="484.02,-1661.4 163.98,-1661.4 163.98,-1481.4 484.02,-1481.4 484.02,-1661.4"/>
<text text-anchor="start" x="283.98" y="-1585.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Frontend</text>
<text text-anchor="start" x="276.64" y="-1563.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">Reactjs node V18</text>
<text text-anchor="start" x="258.23" y="-1542.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Single web aplication</text>
</g>
<!-- rosbridge -->
<g id="node8" class="node">
<title>rosbridge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="802.02,-220 481.98,-220 481.98,-40 802.02,-40 802.02,-220"/>
<text text-anchor="start" x="591.42" y="-123.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ROSBridge</text>
</g>
<!-- mediamtx -->
<g id="node9" class="node">
<title>mediamtx</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.02,-513.6 957.98,-513.6 957.98,-333.6 1278.02,-333.6 1278.02,-513.6"/>
<text text-anchor="start" x="1039.09" y="-428" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimedia server</text>
<text text-anchor="start" x="1025.8" y="-404.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RealTime video Transmission</text>
</g>
<!-- elevationapi -->
<g id="node10" class="node">
<title>elevationapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1662.02,-807.2 1341.98,-807.2 1341.98,-627.2 1662.02,-627.2 1662.02,-807.2"/>
<text text-anchor="start" x="1433.62" y="-721.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">OpenTopoData</text>
<text text-anchor="start" x="1454.13" y="-698" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Api of elevation</text>
</g>
<!-- device -->
<g id="node11" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1662.02,-220 1341.98,-220 1341.98,-40 1662.02,-40 1662.02,-220"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="1486" y="-180.3"/>
<text text-anchor="start" x="1471.43" y="-124.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device</text>
<text text-anchor="start" x="1443.65" y="-100.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp;</text>
<text text-anchor="start" x="1437.82" y="-83.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RSTP server of UAV</text>
</g>
<!-- express&#45;&gt;missionmanager -->
<g id="edge1" class="edge">
<title>express&#45;&gt;missionmanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M406.88,-1191.97C431.41,-1165.69 458.4,-1136.77 483.44,-1109.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="485.88,-1112.45 490.14,-1102.75 480.76,-1107.67 485.88,-1112.45"/>
</g>
<!-- express&#45;&gt;devicemanager -->
<g id="edge2" class="edge">
<title>express&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324,-1191.96C324,-1090.9 324,-926.16 324,-820"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="327.5,-820.06 324,-810.06 320.5,-820.06 327.5,-820.06"/>
</g>
<!-- missionmanager&#45;&gt;devicemanager -->
<g id="edge4" class="edge">
<title>missionmanager&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M498.67,-921.12C470.19,-888.04 437.7,-850.3 408.53,-816.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="411.55,-814.55 402.37,-809.25 406.25,-819.11 411.55,-814.55"/>
</g>
<!-- missionmanager&#45;&gt;ftp -->
<g id="edge3" class="edge">
<title>missionmanager&#45;&gt;ftp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M623.35,-921.12C641.08,-888.61 661.27,-851.59 679.5,-818.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="682.44,-820.07 684.15,-809.62 676.29,-816.72 682.44,-820.07"/>
</g>
<!-- missionmanager&#45;&gt;elevationapi -->
<g id="edge13" class="edge">
<title>missionmanager&#45;&gt;elevationapi</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M734.88,-959.51C900.83,-907.31 1159.48,-825.94 1329.83,-772.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1330.82,-775.72 1339.31,-769.38 1328.72,-769.04 1330.82,-775.72"/>
<text text-anchor="start" x="1076" y="-860.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">HTTP</text>
</g>
<!-- devicemanager&#45;&gt;events -->
<g id="edge5" class="edge">
<title>devicemanager&#45;&gt;events</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M285.37,-627.55C279.5,-612.56 273.82,-597.05 269.07,-582.2 263.29,-564.17 257.99,-544.72 253.31,-525.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="256.72,-525.05 250.96,-516.16 249.92,-526.7 256.72,-525.05"/>
<text text-anchor="start" x="279" y="-566.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Create events</text>
</g>
<!-- devicemanager&#45;&gt;roslib -->
<g id="edge6" class="edge">
<title>devicemanager&#45;&gt;roslib</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M381.09,-627.5C398.55,-603.73 418.84,-579 440.26,-558.6 453.94,-545.58 469.03,-533 484.61,-521.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="486.58,-524.02 492.49,-515.22 482.39,-518.41 486.58,-524.02"/>
<text text-anchor="start" x="450" y="-566.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Msg &amp; Srv ROS</text>
</g>
<!-- devicemanager&#45;&gt;mediamtx -->
<g id="edge10" class="edge">
<title>devicemanager&#45;&gt;mediamtx</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M483.99,-644.12C499.09,-638.11 514.26,-632.37 529,-627.2 707.17,-564.74 765.84,-583.16 946.23,-514.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="947.41,-517.42 955.47,-510.54 944.88,-510.89 947.41,-517.42"/>
<text text-anchor="start" x="815" y="-566.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">API REST</text>
</g>
<!-- ftp&#45;&gt;device -->
<g id="edge14" class="edge">
<title>ftp&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M893.94,-697.65C1048.18,-676.78 1267.45,-638.29 1332,-582.2 1434.5,-493.12 1475.36,-335.74 1491.54,-232.4"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1494.97,-233.16 1492.99,-222.75 1488.04,-232.12 1494.97,-233.16"/>
<text text-anchor="start" x="1487" y="-419.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">FTP</text>
</g>
<!-- events&#45;&gt;express -->
<g id="edge7" class="edge">
<title>events&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M169.6,-513.43C149.28,-547.4 129.31,-587.54 119,-627.2 98.87,-704.63 102.77,-728.86 119,-807.2 147.09,-942.79 215.98,-1087.28 266.17,-1180.51"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="263.06,-1182.12 270.9,-1189.24 269.21,-1178.78 263.06,-1182.12"/>
</g>
<!-- roslib&#45;&gt;devicemanager -->
<g id="edge8" class="edge">
<title>roslib&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M482.03,-492.13C450.82,-510.42 420.29,-532.54 396,-558.6 391.02,-563.94 379.46,-587.91 367.02,-615.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="363.95,-613.91 363.08,-624.47 370.34,-616.75 363.95,-613.91"/>
</g>
<!-- roslib&#45;&gt;rosbridge -->
<g id="edge11" class="edge">
<title>roslib&#45;&gt;rosbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M642,-333.92C642,-301.97 642,-265.67 642,-232.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="645.5,-232.78 642,-222.78 638.5,-232.78 645.5,-232.78"/>
<text text-anchor="start" x="652" y="-272.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Send/Recv msg</text>
</g>
<!-- ui&#45;&gt;express -->
<g id="edge9" class="edge">
<title>ui&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324,-1481.76C324,-1451.01 324,-1416.29 324,-1384.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="327.5,-1384.67 324,-1374.67 320.5,-1384.67 327.5,-1384.67"/>
</g>
<!-- mediamtx&#45;&gt;device -->
<g id="edge12" class="edge">
<title>mediamtx&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1235.04,-333.72C1279.24,-300.16 1329.72,-261.82 1374.81,-227.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1376.68,-230.56 1382.53,-221.73 1372.45,-224.99 1376.68,-230.56"/>
<text text-anchor="start" x="1331" y="-272.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">RTSP H264</text>
</g>
</g>
</svg>
`;case"backend_complete":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1670pt" height="2280pt"
 viewBox="0.00 0.00 1670.02 2280.20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 2276.2)">
<g id="clust1" class="cluster">
<title>cluster_gcs</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-261.6 8,-2264.2 1310,-2264.2 1310,-261.6 8,-261.6"/>
<text text-anchor="start" x="16" y="-2249.5" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">GCS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_backend</title>
<polygon fill="#3e4651" stroke="#2d333d" points="40,-848.8 40,-1974.6 926,-1974.6 926,-848.8 40,-848.8"/>
<text text-anchor="start" x="48" y="-1959.9" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">GCS BACKEND</text>
</g>
<!-- express -->
<g id="node1" class="node">
<title>express</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.02,-1919 163.98,-1919 163.98,-1739 484.02,-1739 484.02,-1919"/>
<text text-anchor="start" x="235.64" y="-1841.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">REST API &amp; Socket</text>
<text text-anchor="start" x="241.9" y="-1818.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">REST API for the backend</text>
<text text-anchor="start" x="218.17" y="-1801.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">uses Express and send Telemetry</text>
</g>
<!-- missionmanager -->
<g id="node2" class="node">
<title>missionmanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="735.02,-1648 414.98,-1648 414.98,-1468 735.02,-1468 735.02,-1648"/>
<text text-anchor="start" x="498.86" y="-1562.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mission Manager</text>
<text text-anchor="start" x="501.47" y="-1538.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Mission inspection logic</text>
</g>
<!-- devicemanager -->
<g id="node3" class="node">
<title>devicemanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.02,-1354.4 163.98,-1354.4 163.98,-1174.4 484.02,-1174.4 484.02,-1354.4"/>
<text text-anchor="start" x="251.19" y="-1268.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device Manager</text>
<text text-anchor="start" x="209.62" y="-1245.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Process all devices msg &amp; command</text>
</g>
<!-- ftp -->
<g id="node4" class="node">
<title>ftp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="894.02,-1354.4 573.98,-1354.4 573.98,-1174.4 894.02,-1174.4 894.02,-1354.4"/>
<text text-anchor="start" x="675.64" y="-1277.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">File Manager</text>
<text text-anchor="start" x="662.8" y="-1253.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Download mission files</text>
<text text-anchor="start" x="693.16" y="-1236.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">from Devices</text>
</g>
<!-- events -->
<g id="node5" class="node">
<title>events</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-1060.8 71.98,-1060.8 71.98,-880.8 392.02,-880.8 392.02,-1060.8"/>
<text text-anchor="start" x="159.18" y="-964.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Events Manager</text>
</g>
<!-- roslib -->
<g id="node6" class="node">
<title>roslib</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="802.02,-1060.8 481.98,-1060.8 481.98,-880.8 802.02,-880.8 802.02,-1060.8"/>
<text text-anchor="start" x="599.76" y="-983.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ROSLibjs</text>
<text text-anchor="start" x="556.02" y="-960" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Convert msg and command</text>
<text text-anchor="start" x="568.47" y="-943.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">to ROS &amp; the other way</text>
</g>
<!-- ui -->
<g id="node7" class="node">
<title>ui</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="484.02,-2208.6 163.98,-2208.6 163.98,-2028.6 484.02,-2028.6 484.02,-2208.6"/>
<text text-anchor="start" x="283.98" y="-2132.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Frontend</text>
<text text-anchor="start" x="276.64" y="-2110.9" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">Reactjs node V18</text>
<text text-anchor="start" x="258.23" y="-2089.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Single web aplication</text>
</g>
<!-- rosbridge -->
<g id="node8" class="node">
<title>rosbridge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="892.02,-767.2 571.98,-767.2 571.98,-587.2 892.02,-587.2 892.02,-767.2"/>
<text text-anchor="start" x="681.42" y="-670.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ROSBridge</text>
</g>
<!-- rosmultimaster -->
<g id="node9" class="node">
<title>rosmultimaster</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="892.02,-473.6 571.98,-473.6 571.98,-293.6 892.02,-293.6 892.02,-473.6"/>
<text text-anchor="start" x="659.21" y="-377.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimaster FLK</text>
</g>
<!-- mediamtx -->
<g id="node10" class="node">
<title>mediamtx</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.02,-1060.8 957.98,-1060.8 957.98,-880.8 1278.02,-880.8 1278.02,-1060.8"/>
<text text-anchor="start" x="1039.09" y="-975.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimedia server</text>
<text text-anchor="start" x="1025.8" y="-951.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RealTime video Transmission</text>
</g>
<!-- elevationapi -->
<g id="node11" class="node">
<title>elevationapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1662.02,-1354.4 1341.98,-1354.4 1341.98,-1174.4 1662.02,-1174.4 1662.02,-1354.4"/>
<text text-anchor="start" x="1433.62" y="-1268.8" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">OpenTopoData</text>
<text text-anchor="start" x="1454.13" y="-1245.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Api of elevation</text>
</g>
<!-- device -->
<g id="node12" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.02,-180 957.98,-180 957.98,0 1278.02,0 1278.02,-180"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="1102" y="-140.3"/>
<text text-anchor="start" x="1087.43" y="-84.3" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device</text>
<text text-anchor="start" x="1059.65" y="-60.7" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp;</text>
<text text-anchor="start" x="1053.82" y="-43.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RSTP server of UAV</text>
</g>
<!-- express&#45;&gt;missionmanager -->
<g id="edge1" class="edge">
<title>express&#45;&gt;missionmanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M406.88,-1739.17C431.41,-1712.89 458.4,-1683.97 483.44,-1657.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="485.88,-1659.65 490.14,-1649.95 480.76,-1654.87 485.88,-1659.65"/>
</g>
<!-- express&#45;&gt;devicemanager -->
<g id="edge2" class="edge">
<title>express&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324,-1739.16C324,-1638.1 324,-1473.36 324,-1367.2"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="327.5,-1367.26 324,-1357.26 320.5,-1367.26 327.5,-1367.26"/>
</g>
<!-- missionmanager&#45;&gt;devicemanager -->
<g id="edge4" class="edge">
<title>missionmanager&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M498.67,-1468.32C470.19,-1435.24 437.7,-1397.5 408.53,-1363.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="411.55,-1361.75 402.37,-1356.45 406.25,-1366.31 411.55,-1361.75"/>
</g>
<!-- missionmanager&#45;&gt;ftp -->
<g id="edge3" class="edge">
<title>missionmanager&#45;&gt;ftp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M623.35,-1468.32C641.08,-1435.81 661.27,-1398.79 679.5,-1365.35"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="682.44,-1367.27 684.15,-1356.82 676.29,-1363.92 682.44,-1367.27"/>
</g>
<!-- missionmanager&#45;&gt;elevationapi -->
<g id="edge15" class="edge">
<title>missionmanager&#45;&gt;elevationapi</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M734.88,-1506.71C900.83,-1454.51 1159.48,-1373.14 1329.83,-1319.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1330.82,-1322.92 1339.31,-1316.58 1328.72,-1316.24 1330.82,-1322.92"/>
<text text-anchor="start" x="1076" y="-1407.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">HTTP</text>
</g>
<!-- devicemanager&#45;&gt;events -->
<g id="edge5" class="edge">
<title>devicemanager&#45;&gt;events</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M285.37,-1174.75C279.5,-1159.76 273.82,-1144.25 269.07,-1129.4 263.29,-1111.37 257.99,-1091.92 253.31,-1073.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="256.72,-1072.25 250.96,-1063.36 249.92,-1073.9 256.72,-1072.25"/>
<text text-anchor="start" x="279" y="-1113.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Create events</text>
</g>
<!-- devicemanager&#45;&gt;roslib -->
<g id="edge6" class="edge">
<title>devicemanager&#45;&gt;roslib</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M381.09,-1174.7C398.55,-1150.93 418.84,-1126.2 440.26,-1105.8 453.94,-1092.78 469.03,-1080.2 484.61,-1068.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="486.58,-1071.22 492.49,-1062.42 482.39,-1065.61 486.58,-1071.22"/>
<text text-anchor="start" x="450" y="-1113.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Msg &amp; Srv ROS</text>
</g>
<!-- devicemanager&#45;&gt;mediamtx -->
<g id="edge11" class="edge">
<title>devicemanager&#45;&gt;mediamtx</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M483.99,-1191.32C499.09,-1185.31 514.26,-1179.57 529,-1174.4 707.17,-1111.94 765.84,-1130.36 946.23,-1061.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="947.41,-1064.62 955.47,-1057.74 944.88,-1058.09 947.41,-1064.62"/>
<text text-anchor="start" x="815" y="-1113.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">API REST</text>
</g>
<!-- ftp&#45;&gt;device -->
<g id="edge16" class="edge">
<title>ftp&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M893.68,-1243.05C1046.79,-1220.85 1264.38,-1181.42 1332,-1129.4 1394.58,-1081.26 1414,-1050.76 1414,-971.8 1414,-971.8 1414,-971.8 1414,-382.6 1414,-299.4 1353.93,-231.99 1287.9,-183.02"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1290.3,-180.43 1280.15,-177.4 1286.19,-186.1 1290.3,-180.43"/>
<text text-anchor="start" x="1424" y="-673.3" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">FTP</text>
</g>
<!-- events&#45;&gt;express -->
<g id="edge7" class="edge">
<title>events&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M169.6,-1060.63C149.28,-1094.6 129.31,-1134.74 119,-1174.4 98.87,-1251.83 102.77,-1276.06 119,-1354.4 147.09,-1489.99 215.98,-1634.48 266.17,-1727.71"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="263.06,-1729.32 270.9,-1736.44 269.21,-1725.98 263.06,-1729.32"/>
</g>
<!-- roslib&#45;&gt;devicemanager -->
<g id="edge8" class="edge">
<title>roslib&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M482.03,-1039.33C450.82,-1057.62 420.29,-1079.74 396,-1105.8 391.02,-1111.14 379.46,-1135.11 367.02,-1162.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="363.95,-1161.11 363.08,-1171.67 370.34,-1163.95 363.95,-1161.11"/>
</g>
<!-- roslib&#45;&gt;rosbridge -->
<g id="edge12" class="edge">
<title>roslib&#45;&gt;rosbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M669.37,-881.12C679.32,-848.89 690.63,-812.23 700.88,-779.02"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="704.11,-780.44 703.71,-769.85 697.42,-778.37 704.11,-780.44"/>
<text text-anchor="start" x="699" y="-820.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Send/Recv msg</text>
</g>
<!-- ui&#45;&gt;express -->
<g id="edge9" class="edge">
<title>ui&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324,-2028.96C324,-1998.21 324,-1963.49 324,-1931.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="327.5,-1931.87 324,-1921.87 320.5,-1931.87 327.5,-1931.87"/>
</g>
<!-- rosbridge&#45;&gt;rosmultimaster -->
<g id="edge10" class="edge">
<title>rosbridge&#45;&gt;rosmultimaster</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M732,-587.52C732,-555.57 732,-519.27 732,-486.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="735.5,-486.38 732,-476.38 728.5,-486.38 735.5,-486.38"/>
<text text-anchor="start" x="742" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">ROS</text>
</g>
<!-- rosmultimaster&#45;&gt;device -->
<g id="edge13" class="edge">
<title>rosmultimaster&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M849.65,-293.72C894.08,-260.16 944.82,-221.82 990.14,-187.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="992.04,-190.54 997.91,-181.72 987.82,-184.95 992.04,-190.54"/>
<text text-anchor="start" x="946" y="-232.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">ROS</text>
</g>
<!-- mediamtx&#45;&gt;device -->
<g id="edge14" class="edge">
<title>mediamtx&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1118,-881.11C1118,-716.86 1118,-366.32 1118,-192.73"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1121.5,-192.81 1118,-182.81 1114.5,-192.81 1121.5,-192.81"/>
<text text-anchor="start" x="1128" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">RTSP H264</text>
</g>
</g>
</svg>
`;case"my_backend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1823pt" height="1629pt"
 viewBox="0.00 0.00 1823.02 1629.40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1625.4)">
<g id="clust1" class="cluster">
<title>cluster_backend</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-261.6 8,-1387.4 1053,-1387.4 1053,-261.6 8,-261.6"/>
<text text-anchor="start" x="16" y="-1372.7" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">GCS BACKEND</text>
</g>
<!-- express -->
<g id="node1" class="node">
<title>express</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="611.02,-1331.8 290.98,-1331.8 290.98,-1151.8 611.02,-1151.8 611.02,-1331.8"/>
<text text-anchor="start" x="362.64" y="-1254.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">REST API &amp; Socket</text>
<text text-anchor="start" x="368.9" y="-1231" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">REST API for the backend</text>
<text text-anchor="start" x="345.17" y="-1214.2" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">uses Express and send Telemetry</text>
</g>
<!-- missionmanager -->
<g id="node2" class="node">
<title>missionmanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="862.02,-1060.8 541.98,-1060.8 541.98,-880.8 862.02,-880.8 862.02,-1060.8"/>
<text text-anchor="start" x="625.86" y="-975.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mission Manager</text>
<text text-anchor="start" x="628.47" y="-951.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Mission inspection logic</text>
</g>
<!-- devicemanager -->
<g id="node3" class="node">
<title>devicemanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="611.02,-767.2 290.98,-767.2 290.98,-587.2 611.02,-587.2 611.02,-767.2"/>
<text text-anchor="start" x="378.19" y="-681.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device Manager</text>
<text text-anchor="start" x="336.62" y="-658" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Process all devices msg &amp; command</text>
</g>
<!-- ftp -->
<g id="node4" class="node">
<title>ftp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1021.02,-767.2 700.98,-767.2 700.98,-587.2 1021.02,-587.2 1021.02,-767.2"/>
<text text-anchor="start" x="802.64" y="-690" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">File Manager</text>
<text text-anchor="start" x="789.8" y="-666.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Download mission files</text>
<text text-anchor="start" x="820.16" y="-649.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">from Devices</text>
</g>
<!-- events -->
<g id="node5" class="node">
<title>events</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-473.6 39.98,-473.6 39.98,-293.6 360.02,-293.6 360.02,-473.6"/>
<text text-anchor="start" x="127.18" y="-377.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Events Manager</text>
</g>
<!-- roslib -->
<g id="node6" class="node">
<title>roslib</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-473.6 449.98,-473.6 449.98,-293.6 770.02,-293.6 770.02,-473.6"/>
<text text-anchor="start" x="567.76" y="-396.4" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ROSLibjs</text>
<text text-anchor="start" x="524.02" y="-372.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Convert msg and command</text>
<text text-anchor="start" x="536.47" y="-356" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">to ROS &amp; the other way</text>
</g>
<!-- ui -->
<g id="node7" class="node">
<title>ui</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="611.02,-1621.4 290.98,-1621.4 290.98,-1441.4 611.02,-1441.4 611.02,-1621.4"/>
<text text-anchor="start" x="410.98" y="-1545.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Frontend</text>
<text text-anchor="start" x="403.64" y="-1523.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">Reactjs node V18</text>
<text text-anchor="start" x="385.23" y="-1502.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Single web aplication</text>
</g>
<!-- device -->
<g id="node8" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1815.02,-473.6 1494.98,-473.6 1494.98,-293.6 1815.02,-293.6 1815.02,-473.6"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="1639" y="-433.9"/>
<text text-anchor="start" x="1624.43" y="-377.9" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device</text>
<text text-anchor="start" x="1596.65" y="-354.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp;</text>
<text text-anchor="start" x="1590.82" y="-337.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RSTP server of UAV</text>
</g>
<!-- elevationapi -->
<g id="node9" class="node">
<title>elevationapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1431.02,-767.2 1110.98,-767.2 1110.98,-587.2 1431.02,-587.2 1431.02,-767.2"/>
<text text-anchor="start" x="1202.62" y="-681.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">OpenTopoData</text>
<text text-anchor="start" x="1223.13" y="-658" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Api of elevation</text>
</g>
<!-- rosbridge -->
<g id="node10" class="node">
<title>rosbridge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-180 449.98,-180 449.98,0 770.02,0 770.02,-180"/>
<text text-anchor="start" x="559.42" y="-83.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">ROSBridge</text>
</g>
<!-- mediamtx -->
<g id="node11" class="node">
<title>mediamtx</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1405.02,-473.6 1084.98,-473.6 1084.98,-293.6 1405.02,-293.6 1405.02,-473.6"/>
<text text-anchor="start" x="1166.09" y="-388" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimedia server</text>
<text text-anchor="start" x="1152.8" y="-364.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RealTime video Transmission</text>
</g>
<!-- express&#45;&gt;missionmanager -->
<g id="edge1" class="edge">
<title>express&#45;&gt;missionmanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M533.88,-1151.97C558.41,-1125.69 585.4,-1096.77 610.44,-1069.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="612.88,-1072.45 617.14,-1062.75 607.76,-1067.67 612.88,-1072.45"/>
</g>
<!-- express&#45;&gt;devicemanager -->
<g id="edge2" class="edge">
<title>express&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M451,-1151.96C451,-1050.9 451,-886.16 451,-780"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="454.5,-780.06 451,-770.06 447.5,-780.06 454.5,-780.06"/>
</g>
<!-- missionmanager&#45;&gt;devicemanager -->
<g id="edge4" class="edge">
<title>missionmanager&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M625.67,-881.12C597.19,-848.04 564.7,-810.3 535.53,-776.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="538.55,-774.55 529.37,-769.25 533.25,-779.11 538.55,-774.55"/>
</g>
<!-- missionmanager&#45;&gt;ftp -->
<g id="edge3" class="edge">
<title>missionmanager&#45;&gt;ftp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M750.35,-881.12C768.08,-848.61 788.27,-811.59 806.5,-778.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="809.44,-780.07 811.15,-769.62 803.29,-776.72 809.44,-780.07"/>
</g>
<!-- missionmanager&#45;&gt;elevationapi -->
<g id="edge10" class="edge">
<title>missionmanager&#45;&gt;elevationapi</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M862.01,-887.8C936.11,-849.82 1024.24,-804.66 1099.69,-765.99"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1101.21,-769.15 1108.51,-761.47 1098.01,-762.92 1101.21,-769.15"/>
<text text-anchor="start" x="1013" y="-820.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">HTTP</text>
</g>
<!-- devicemanager&#45;&gt;events -->
<g id="edge5" class="edge">
<title>devicemanager&#45;&gt;events</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M374.67,-587.52C346.19,-554.44 313.7,-516.7 284.53,-482.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="287.55,-480.95 278.37,-475.65 282.25,-485.51 287.55,-480.95"/>
<text text-anchor="start" x="344" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Create events</text>
</g>
<!-- devicemanager&#45;&gt;roslib -->
<g id="edge6" class="edge">
<title>devicemanager&#45;&gt;roslib</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M499.35,-587.52C517.08,-555.01 537.27,-517.99 555.5,-484.55"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="558.44,-486.47 560.15,-476.02 552.29,-483.12 558.44,-486.47"/>
<text text-anchor="start" x="545" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Msg &amp; Srv ROS</text>
</g>
<!-- devicemanager&#45;&gt;mediamtx -->
<g id="edge12" class="edge">
<title>devicemanager&#45;&gt;mediamtx</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M610.99,-604.12C626.09,-598.11 641.26,-592.37 656,-587.2 834.17,-524.74 892.84,-543.16 1073.23,-474.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1074.41,-477.42 1082.47,-470.54 1071.88,-470.89 1074.41,-477.42"/>
<text text-anchor="start" x="942" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">API REST</text>
</g>
<!-- ftp&#45;&gt;device -->
<g id="edge11" class="edge">
<title>ftp&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1020.75,-602.4C1035.87,-596.77 1051.11,-591.58 1066,-587.2 1184.39,-552.36 1222.6,-580.24 1340,-542.2 1389.98,-526.01 1441.89,-502.93 1488.81,-479.42"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1490.27,-482.6 1497.61,-474.96 1487.11,-476.36 1490.27,-482.6"/>
<text text-anchor="start" x="1413" y="-526.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">FTP</text>
</g>
<!-- events&#45;&gt;express -->
<g id="edge7" class="edge">
<title>events&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M203.42,-473.35C208.14,-551.79 219.37,-668.71 246,-767.2 282.26,-901.29 349.78,-1046.66 397.41,-1140.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="394.22,-1141.93 401.88,-1149.24 400.46,-1138.75 394.22,-1141.93"/>
</g>
<!-- roslib&#45;&gt;devicemanager -->
<g id="edge8" class="edge">
<title>roslib&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M532.02,-473.46C521.38,-487.97 511.29,-503.29 503,-518.6 493.45,-536.25 485.24,-555.96 478.36,-575.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="475.05,-574.14 475.12,-584.74 481.68,-576.42 475.05,-574.14"/>
</g>
<!-- roslib&#45;&gt;rosbridge -->
<g id="edge13" class="edge">
<title>roslib&#45;&gt;rosbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M610,-293.92C610,-261.97 610,-225.67 610,-192.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="613.5,-192.78 610,-182.78 606.5,-192.78 613.5,-192.78"/>
<text text-anchor="start" x="620" y="-232.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Send/Recv msg</text>
</g>
<!-- ui&#45;&gt;express -->
<g id="edge9" class="edge">
<title>ui&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M451,-1441.76C451,-1411.01 451,-1376.29 451,-1344.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="454.5,-1344.67 451,-1334.67 447.5,-1344.67 454.5,-1344.67"/>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}function jn({viewId:e}){const n=Vn(e);return f.jsxs(be,{direction:"horizontal",autoSaveId:"viewAsDot",children:[f.jsx(le,{minSizePixels:100,children:f.jsxs(de,{scrollbars:"both",children:[f.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:f.jsx(He,{variant:"soft",autoFocus:!0,children:n})}),f.jsx(Me,{text:n})]})}),f.jsx(he,{style:{width:10}}),f.jsx(le,{minSizePixels:100,children:f.jsx(de,{scrollbars:"both",children:f.jsx(Y,{py:"2",style:{overflow:"scroll",overscrollBehavior:"none"},children:f.jsx(Y,{asChild:!0,position:"relative",className:"svg-container",children:f.jsx("div",{dangerouslySetInnerHTML:{__html:Zn(e)}})})})})})]})}function Un(e){switch(e){case"index":return`---
title: "Landscape view"
---
graph TB
  Customer[fa:fa-user Customer]
  GCS[GCS]
  Device[Device]
  ElevationApi[OpenTopoData]
  Customer -. "Control and monitoring" .-> GCS
  GCS -. "HTTP" .-> ElevationApi
  GCS -. "[FTP,ROS,RSTP]" .-> Device
`;case"feb1c26b09984c154f833452dd3dcbd84f04e711":return`---
title: "GCS"
---
graph TB
  Customer[fa:fa-user Customer]
  subgraph GCS["GCS"]
    GCS.Ui[Frontend]
    GCS.Backend[GCS Backend]
    GCS.Mediamtx[Multimedia server]
    GCS.Rosbridge[ROSBridge]
    GCS.RosMultimaster[Multimaster FLK]
  end
  Device[Device]
  ElevationApi[OpenTopoData]
  Customer -. "open in browser" .-> GCS.Ui
  GCS.Ui -. "request via HTTPS" .-> GCS.Backend
  GCS.Backend -. "UDP socket" .-> GCS.Rosbridge
  GCS.Backend -. "API REST" .-> GCS.Mediamtx
  GCS.Backend -. "HTTP" .-> ElevationApi
  GCS.Backend -. "FTP" .-> Device
  GCS.Mediamtx -. "RTSP H264" .-> Device
  GCS.Rosbridge -. "ROS" .-> GCS.RosMultimaster
  GCS.RosMultimaster -. "ROS" .-> Device
`;case"backend":return`---
title: "GCS Backend"
---
graph TB
  subgraph GCS["GCS"]
    GCS.Ui[Frontend]
    subgraph GCS.Backend["GCS Backend"]
      GCS.Backend.Express[REST API & Socket]
      GCS.Backend.MissionManager[Mission Manager]
      GCS.Backend.Ftp[File Manager]
      GCS.Backend.DeviceManager[Device Manager]
      GCS.Backend.Events[Events Manager]
      GCS.Backend.Roslib[ROSLibjs]
    end
    GCS.Rosbridge[ROSBridge]
    GCS.Mediamtx[Multimedia server]
  end
  ElevationApi[OpenTopoData]
  Device[Device]
  GCS.Ui -.-> GCS.Backend.Express
  GCS.Backend.Express -.-> GCS.Backend.DeviceManager
  GCS.Backend.Express -.-> GCS.Backend.MissionManager
  GCS.Backend.MissionManager -.-> GCS.Backend.Ftp
  GCS.Backend.MissionManager -.-> GCS.Backend.DeviceManager
  GCS.Backend.MissionManager -. "HTTP" .-> ElevationApi
  GCS.Backend.Ftp -. "FTP" .-> Device
  GCS.Backend.DeviceManager -. "Msg & Srv ROS" .-> GCS.Backend.Roslib
  GCS.Backend.DeviceManager -. "Create events" .-> GCS.Backend.Events
  GCS.Backend.DeviceManager -. "API REST" .-> GCS.Mediamtx
  GCS.Backend.Events -.-> GCS.Backend.Express
  GCS.Backend.Roslib -.-> GCS.Backend.DeviceManager
  GCS.Backend.Roslib -. "Send/Recv msg" .-> GCS.Rosbridge
  GCS.Mediamtx -. "RTSP H264" .-> Device
`;case"backend_complete":return`---
title: "GCS Backend"
---
graph TB
  subgraph GCS["GCS"]
    GCS.Ui[Frontend]
    subgraph GCS.Backend["GCS Backend"]
      GCS.Backend.Express[REST API & Socket]
      GCS.Backend.MissionManager[Mission Manager]
      GCS.Backend.Ftp[File Manager]
      GCS.Backend.DeviceManager[Device Manager]
      GCS.Backend.Events[Events Manager]
      GCS.Backend.Roslib[ROSLibjs]
    end
    GCS.Rosbridge[ROSBridge]
    GCS.RosMultimaster[Multimaster FLK]
    GCS.Mediamtx[Multimedia server]
  end
  ElevationApi[OpenTopoData]
  Device[Device]
  GCS.Ui -.-> GCS.Backend.Express
  GCS.Backend.Express -.-> GCS.Backend.DeviceManager
  GCS.Backend.Express -.-> GCS.Backend.MissionManager
  GCS.Backend.MissionManager -.-> GCS.Backend.Ftp
  GCS.Backend.MissionManager -.-> GCS.Backend.DeviceManager
  GCS.Backend.MissionManager -. "HTTP" .-> ElevationApi
  GCS.Backend.Ftp -. "FTP" .-> Device
  GCS.Backend.DeviceManager -. "Msg & Srv ROS" .-> GCS.Backend.Roslib
  GCS.Backend.DeviceManager -. "Create events" .-> GCS.Backend.Events
  GCS.Backend.DeviceManager -. "API REST" .-> GCS.Mediamtx
  GCS.Backend.Events -.-> GCS.Backend.Express
  GCS.Backend.Roslib -.-> GCS.Backend.DeviceManager
  GCS.Backend.Roslib -. "Send/Recv msg" .-> GCS.Rosbridge
  GCS.Rosbridge -. "ROS" .-> GCS.RosMultimaster
  GCS.RosMultimaster -. "ROS" .-> Device
  GCS.Mediamtx -. "RTSP H264" .-> Device
`;case"my_backend":return`---
title: "GCS Backend"
---
graph TB
  GCSUi[Frontend]
  subgraph GCSBackend["GCS Backend"]
    GCSBackend.Express[REST API & Socket]
    GCSBackend.MissionManager[Mission Manager]
    GCSBackend.Ftp[File Manager]
    GCSBackend.DeviceManager[Device Manager]
    GCSBackend.Events[Events Manager]
    GCSBackend.Roslib[ROSLibjs]
  end
  Device[Device]
  ElevationApi[OpenTopoData]
  GCSRosbridge[ROSBridge]
  GCSMediamtx[Multimedia server]
  GCSUi -.-> GCSBackend.Express
  GCSBackend.Express -.-> GCSBackend.DeviceManager
  GCSBackend.Express -.-> GCSBackend.MissionManager
  GCSBackend.MissionManager -.-> GCSBackend.Ftp
  GCSBackend.MissionManager -.-> GCSBackend.DeviceManager
  GCSBackend.MissionManager -. "HTTP" .-> ElevationApi
  GCSBackend.Ftp -. "FTP" .-> Device
  GCSBackend.DeviceManager -. "Msg & Srv ROS" .-> GCSBackend.Roslib
  GCSBackend.DeviceManager -. "Create events" .-> GCSBackend.Events
  GCSBackend.DeviceManager -. "API REST" .-> GCSMediamtx
  GCSBackend.Events -.-> GCSBackend.Express
  GCSBackend.Roslib -.-> GCSBackend.DeviceManager
  GCSBackend.Roslib -. "Send/Recv msg" .-> GCSRosbridge
`;default:throw new Error("Unknown viewId: "+e)}}const Wn=async(e,n)=>{const{default:t}=await Rn(()=>import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"),__vite__mapDeps([]));t.initialize({theme:"dark"});const{svg:i}=await t.render(e,n);return i};function Kn({viewId:e}){const n=Un(e),[t,{execute:i}]=Ke(Wn,null);return Ce.useEffect(()=>{i(e,n)},[n]),f.jsxs(be,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[f.jsx(le,{minSizePixels:100,children:f.jsxs(de,{scrollbars:"both",children:[f.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:f.jsx(He,{variant:"soft",autoFocus:!0,children:n})}),f.jsx(Me,{text:n})]})}),f.jsx(he,{style:{width:10}}),f.jsx(le,{minSizePixels:100,children:f.jsx(de,{scrollbars:"both",children:t.result&&f.jsx(Y,{grow:"1",asChild:!0,position:"relative",className:"svg-container",children:f.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}})})})})]})}function Yn({viewId:e,viewMode:n}){return f.jsx(Dn,{asChild:!0,position:"fixed",inset:"0",pt:"8",pl:"8",pr:"2",align:"stretch",direction:"column",children:f.jsxs(J.Root,{value:n,onValueChange:t=>t!==n&&Cn({mode:t}),children:[f.jsx(Y,{asChild:!0,shrink:"0",grow:"0",children:f.jsxs(J.List,{children:[f.jsx(J.Trigger,{value:"react",children:"React"}),f.jsx(J.Trigger,{value:"dot",children:"Graphviz"}),f.jsx(J.Trigger,{value:"mmd",children:"Mermaid"}),f.jsx(J.Trigger,{value:"d2",children:"D2"})]})}),f.jsxs(Y,{p:"2",className:gn.otherFormats,position:"relative",children:[f.jsx(J.Content,{value:"react",children:""}),f.jsx(J.Content,{value:"dot",children:f.jsx(jn,{viewId:e})}),f.jsx(J.Content,{value:"mmd",children:f.jsx(Kn,{viewId:e})}),f.jsx(J.Content,{value:"d2",children:f.jsx(_n,{viewId:e})})]})]})})}export{Yn as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
