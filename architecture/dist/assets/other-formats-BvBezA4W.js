import{r as De,u as Ln,R as We,j as f,S as Te,B as Y,C as He,a as Me,b as En,_ as gn,F as Rn,T as J,c as Dn,s as Cn}from"./index-eQb5aKGS.js";function $e(e,n){const[t,i]=De.useState({status:"not-executed",error:void 0,result:n}),s=De.useRef(),a=De.useRef(),l=Ln({execute(...c){a.current=c;const d=e(...c);return s.current=d,i(r=>({...r,status:"loading"})),d.then(r=>{d===s.current&&i(o=>({...o,status:"success",error:void 0,result:r}))},r=>{d===s.current&&i(o=>({...o,status:"error",error:r}))}),d},reset(){i({status:"not-executed",error:void 0,result:n}),s.current=void 0,a.current=void 0}});return[t,De.useMemo(()=>({reset(){l.current.reset()},execute:(...c)=>l.current.execute(...c)}),[]),{promise:s.current,lastArgs:a.current}]}function un(e){switch(e){case"index":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
GCS: {
  label: "GCS"
}
Device: {
  label: "device"
}
ElevationApi: {
  label: "OpenTopoData"
}

Customer -> GCS: "Control and monitoring"
GCS -> ElevationApi: "HTTP"
GCS -> Device: "[FTP,ROS,RSTP]"
`;case"09e94ea7fbc76d2410d1c7875d40c4622b4a9b36":return`direction: down

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
    label: "Backend Services"
  }
  Mediamtx: {
    label: "Multimedia server"
  }
  Rosbridge: {
    label: "RosBridge"
  }
  RosMultimaster: {
    label: "Multimaster FLK"
  }
}
Device: {
  label: "device"
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
    label: "Backend Services"

    Express: {
      label: "RestAPI & websocket"
    }
    MissionManager: {
      label: "Mission manager"
    }
    Ftp: {
      label: "FileTransferManager"
    }
    DeviceManager: {
      label: "Device Manager"
    }
    Roslib: {
      label: "RosLibjs"
    }
    Events: {
      label: "Events Manager"
    }
  }
  Rosbridge: {
    label: "RosBridge"
  }
  Mediamtx: {
    label: "Multimedia server"
  }
}
ElevationApi: {
  label: "OpenTopoData"
}
Device: {
  label: "device"
}

GCS.Ui -> GCS.Backend.Express
GCS.Backend.Express -> GCS.Backend.DeviceManager
GCS.Backend.Express -> GCS.Backend.MissionManager
GCS.Backend.MissionManager -> GCS.Backend.Ftp
GCS.Backend.MissionManager -> GCS.Backend.DeviceManager
GCS.Backend.MissionManager -> ElevationApi: "HTTP"
GCS.Backend.Ftp -> Device: "FTP"
GCS.Backend.DeviceManager -> GCS.Backend.Roslib
GCS.Backend.DeviceManager -> GCS.Mediamtx: "API REST"
GCS.Backend.Roslib -> GCS.Backend.DeviceManager
GCS.Backend.Roslib -> GCS.Backend.Events
GCS.Backend.Roslib -> GCS.Rosbridge: "Send/recv UDP msg"
GCS.Backend.Events -> GCS.Backend.Express
GCS.Mediamtx -> Device: "RTSP H264"
`;case"my_backend":return`direction: down

GCSUi: {
  label: "Frontend"
}
GCSBackend: {
  label: "Backend Services"

  Express: {
    label: "RestAPI & websocket"
  }
  MissionManager: {
    label: "Mission manager"
  }
  Ftp: {
    label: "FileTransferManager"
  }
  DeviceManager: {
    label: "Device Manager"
  }
  Roslib: {
    label: "RosLibjs"
  }
  Events: {
    label: "Events Manager"
  }
}
Device: {
  label: "device"
}
ElevationApi: {
  label: "OpenTopoData"
}
GCSRosbridge: {
  label: "RosBridge"
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
GCSBackend.DeviceManager -> GCSBackend.Roslib
GCSBackend.DeviceManager -> GCSMediamtx: "API REST"
GCSBackend.Roslib -> GCSBackend.DeviceManager
GCSBackend.Roslib -> GCSBackend.Events
GCSBackend.Roslib -> GCSRosbridge: "Send/recv UDP msg"
GCSBackend.Events -> GCSBackend.Express
`;default:throw new Error("Unknown viewId: "+e)}}const{createElement:fe,createContext:pn,createRef:qn,forwardRef:Ke,useCallback:U,useContext:qe,useEffect:ae,useImperativeHandle:Ye,useLayoutEffect:Sn,useMemo:On,useRef:$,useState:xe}=We,_e=We.useId,he=pn(null);he.displayName="PanelGroupContext";const Se=Sn,Gn=typeof _e=="function"?_e:()=>null;let mn=0;function we(e=null){const n=Gn(),t=$(e||n||null);return t.current===null&&(t.current=""+mn++),e??t.current}function Je({children:e,className:n="",collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:s,dataAttributes:a,defaultSizePercentage:l,defaultSizePixels:c,forwardedRef:d,id:r,maxSizePercentage:o,maxSizePixels:L,minSizePercentage:E,minSizePixels:T,onCollapse:g,onExpand:h,onResize:I,order:S,style:x,tagName:y="div"}){const F=qe(he);if(F===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:O,expandPanel:p,getPanelSize:M,getPanelStyle:X,groupId:w,isPanelCollapsed:z,registerPanel:re,resizePanel:Z,unregisterPanel:Q}=F,ee=we(r),_=$({callbacks:{onCollapse:g,onExpand:h,onResize:I},constraints:{collapsedSizePercentage:t,collapsedSizePixels:i,collapsible:s,defaultSizePercentage:l,defaultSizePixels:c,maxSizePercentage:o,maxSizePixels:L,minSizePercentage:E,minSizePixels:T},id:ee,idIsFromProps:r!==void 0,order:S});$({didLogMissingDefaultSizeWarning:!1}),Se(()=>{const{callbacks:K,constraints:V}=_.current;_.current.id=ee,_.current.idIsFromProps=r!==void 0,_.current.order=S,K.onCollapse=g,K.onExpand=h,K.onResize=I,V.collapsedSizePercentage=t,V.collapsedSizePixels=i,V.collapsible=s,V.defaultSizePercentage=l,V.defaultSizePixels=c,V.maxSizePercentage=o,V.maxSizePixels=L,V.minSizePercentage=E,V.minSizePixels=T}),Se(()=>{const K=_.current;return re(K),()=>{Q(K)}},[S,ee,re,Q]),Ye(d,()=>({collapse:()=>{O(_.current)},expand:()=>{p(_.current)},getId(){return ee},getSize(){return M(_.current)},isCollapsed(){return z(_.current)},isExpanded(){return!z(_.current)},resize:K=>{Z(_.current,K)}}),[O,p,M,z,ee,Z]);const Ge=X(_.current);return fe(y,{children:e,className:n,style:{...Ge,...x},...a,"data-panel":"","data-panel-id":ee,"data-panel-group-id":w,"data-panel-collapsible":void 0,"data-panel-size":void 0})}const le=Ke((e,n)=>fe(Je,{...e,forwardedRef:n}));Je.displayName="Panel";le.displayName="forwardRef(Panel)";function Ce(e,n){return e/n*100}function Ve(e,n){let{collapsedSizePercentage:t=0,collapsedSizePixels:i,defaultSizePercentage:s,defaultSizePixels:a,maxSizePercentage:l=100,maxSizePixels:c,minSizePercentage:d=0,minSizePixels:r}=e;return(i!=null||a!=null||r!=null||c!=null)&&n<=0?(console.warn(`WARNING: Invalid group size: ${n}px`),{collapsedSizePercentage:0,defaultSizePercentage:s,maxSizePercentage:0,minSizePercentage:0}):(i!=null&&(t=Ce(i,n)),a!=null&&(s=Ce(a,n)),r!=null&&(d=Ce(r,n)),c!=null&&(l=Ce(c,n)),{collapsedSizePercentage:t,defaultSizePercentage:s,maxSizePercentage:l,minSizePercentage:d})}function Le(e,n,t){let i=0,s=0;for(let r=0;r<e.length;r++)if(r!==n){const{collapsible:o}=e[r],{collapsedSizePercentage:L,maxSizePercentage:E,minSizePercentage:T}=Ve(e[r],t);s+=E,i+=o?L:T}const{collapsedSizePercentage:a,defaultSizePercentage:l,maxSizePercentage:c,minSizePercentage:d}=Ve(e[n],t);return{collapsedSizePercentage:a,defaultSizePercentage:l,maxSizePercentage:e.length>1?Math.min(c,100-i):c,minSizePercentage:e.length>1?Math.max(d,100-s):d}}const An=10;function Oe(e,n,t=An){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const i=e-n;return i===0?0:i>0?1:-1}function W(e,n,t){return Oe(e,n,t)===0}function de({groupSizePixels:e,panelConstraints:n,panelIndex:t,size:i}){if(n.some(({collapsedSizePixels:r,defaultSizePixels:o,minSizePixels:L,maxSizePixels:E})=>r!=null||o!=null||L!=null||E!=null)&&e<=0)return console.warn(`WARNING: Invalid group size: ${e}px`),0;let{collapsible:a}=n[t];const{collapsedSizePercentage:l,maxSizePercentage:c,minSizePercentage:d}=Le(n,t,e);if(d!=null&&Oe(i,d)<0)if(a){const r=(l+d)/2;Oe(i,r)<0?i=l:i=d}else i=d;return c!=null&&(i=Math.min(c,i)),i}function ue({delta:e,groupSizePixels:n,layout:t,panelConstraints:i,pivotIndices:s,trigger:a}){if(W(e,0))return t;const l=[...t];let c=0;if(a==="keyboard"){{const r=e<0?s[1]:s[0];if(i[r].collapsible){const L=t[r],{collapsedSizePercentage:E,minSizePercentage:T}=Le(i,r,n);if(W(L,E)){const g=T-L;Oe(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const r=e<0?s[0]:s[1];if(i[r].collapsible){const L=t[r],{collapsedSizePercentage:E,minSizePercentage:T}=Le(i,r,n);if(W(L,T)){const g=L-E;Oe(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}}{const r=e<0?1:-1;let o=e<0?s[1]:s[0],L=0;for(;;){const T=t[o],h=de({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:100})-T;if(L+=h,o+=r,o<0||o>=i.length)break}const E=Math.min(Math.abs(e),Math.abs(L));e=e<0?0-E:E}{let o=e<0?s[0]:s[1];for(;o>=0&&o<i.length;){const L=Math.abs(e)-Math.abs(c),E=t[o],T=E-L,g=de({groupSizePixels:n,panelConstraints:i,panelIndex:o,size:T});if(!W(E,g)&&(c+=E-g,l[o]=g,c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?o--:o++}}if(W(c,0))return t;{const r=e<0?s[1]:s[0],o=t[r]+c,L=de({groupSizePixels:n,panelConstraints:i,panelIndex:r,size:o});if(l[r]=L,!W(L,o)){let E=o-L,g=e<0?s[1]:s[0];for(;g>=0&&g<i.length;){const h=l[g],I=h+E,S=de({groupSizePixels:n,panelConstraints:i,panelIndex:g,size:I});if(W(h,S)||(E-=S-h,l[g]=S),W(E,0))break;e>0?g--:g++}}}const d=l.reduce((r,o)=>o+r,0);return c=100-d,W(d,100)?l:t}function Xe(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}function ie({sizePercentage:e,sizePixels:n},t){if(e!=null)return e;if(n!=null)return Ce(n,t)}function Bn({groupSizePixels:e,layout:n,panelsArray:t,pivotIndices:i}){let s=0,a=100,l=0,c=0;t.forEach((L,E)=>{var T,g;const{constraints:h}=L,{maxSizePercentage:I,maxSizePixels:S,minSizePercentage:x,minSizePixels:y}=h,F=(T=ie({sizePercentage:x,sizePixels:y},e))!==null&&T!==void 0?T:0,O=(g=ie({sizePercentage:I,sizePixels:S},e))!==null&&g!==void 0?g:100;E===i[0]?(s=F,a=O):(l+=F,c+=O)});const d=Math.min(a,100-l),r=Math.max(s,100-c),o=n[i[0]];return{valueMax:d,valueMin:r,valueNow:o}}function oe(e){return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Qe(e,n){const i=oe(e).findIndex(s=>s.getAttribute("data-panel-resize-handle-id")===n);return i??null}function en(e,n){const t=Qe(e,n);return t!=null?[t,t+1]:[-1,-1]}function Ee(e){const n=document.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function ne(e){const n=Ee(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((s,a)=>s+a.offsetWidth,0):n.offsetHeight-i.reduce((s,a)=>s+a.offsetHeight,0)}function In(e){const n=Ee(e);if(n==null)return NaN;const t=n.getAttribute("data-panel-group-direction"),i=oe(e);return t==="horizontal"?n.offsetWidth-i.reduce((s,a)=>s+a.offsetWidth,0):n.offsetHeight-i.reduce((s,a)=>s+a.offsetHeight,0)}function ke(e){const n=document.querySelector(`[data-panel-resize-handle-id="${e}"]`);return n||null}function xn(e,n,t){var i,s,a,l;const c=ke(n),d=oe(e),r=c?d.indexOf(c):-1,o=(i=(s=t[r])===null||s===void 0?void 0:s.id)!==null&&i!==void 0?i:null,L=(a=(l=t[r+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[o,L]}function hn({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:i,panelDataArray:s,setLayout:a}){$({didWarnAboutMissingResizeHandle:!1}),Se(()=>{const l=ne(t),c=oe(t);for(let d=0;d<s.length-1;d++){const{valueMax:r,valueMin:o,valueNow:L}=Bn({groupSizePixels:l,layout:i,panelsArray:s,pivotIndices:[d,d+1]}),E=c[d];E==null||(E.setAttribute("aria-controls",s[d].id),E.setAttribute("aria-valuemax",""+Math.round(r)),E.setAttribute("aria-valuemin",""+Math.round(o)),E.setAttribute("aria-valuenow",""+Math.round(L)))}return()=>{c.forEach((d,r)=>{d.removeAttribute("aria-controls"),d.removeAttribute("aria-valuemax"),d.removeAttribute("aria-valuemin"),d.removeAttribute("aria-valuenow")})}},[t,i,s]),ae(()=>{const{panelDataArray:l}=n.current,c=Ee(t);Xe(c!=null,`No group found for id "${t}"`);const r=oe(t).map(o=>{const L=o.getAttribute("data-panel-resize-handle-id"),[E,T]=xn(t,L,l);if(E==null||T==null)return()=>{};const g=h=>{if(!h.defaultPrevented)switch(h.key){case"Enter":{h.preventDefault();const x=l.findIndex(y=>y.id===E);if(x>=0){const y=l[x],F=i[x];if(F!=null&&y.constraints.collapsible){var I,S;const O=In(t),p=(I=ie({sizePercentage:y.constraints.collapsedSizePercentage,sizePixels:y.constraints.collapsedSizePixels},O))!==null&&I!==void 0?I:0,M=(S=ie({sizePercentage:y.constraints.minSizePercentage,sizePixels:y.constraints.minSizePixels},O))!==null&&S!==void 0?S:0,X=ue({delta:W(F,p)?M-p:p-F,groupSizePixels:O,layout:i,panelConstraints:l.map(w=>w.constraints),pivotIndices:en(t,L),trigger:"keyboard"});i!==X&&a(X)}}break}}};return o.addEventListener("keydown",g),()=>{o.removeEventListener("keydown",g)}});return()=>{r.forEach(o=>o())}},[e,n,t,i,s,a])}function Ae(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function nn(e){return e.type==="keydown"}function tn(e){return e.type.startsWith("mouse")}function sn(e){return e.type.startsWith("touch")}function an(e,n){const t=e==="horizontal";if(tn(n))return t?n.clientX:n.clientY;if(sn(n)){const i=n.touches[0];return t?i.screenX:i.screenY}else throw Error(`Unsupported event type "${n.type}"`)}function kn(e,n,t,i){const s=t==="horizontal",l=ke(n).getAttribute("data-panel-group-id");let{initialCursorPosition:c}=i;const d=an(t,e),o=Ee(l).getBoundingClientRect(),L=s?o.width:o.height;return(d-c)/L*100}function Nn(e,n,t,i,s,a){if(nn(e)){const l=i==="horizontal",d=Ee(n).getBoundingClientRect(),r=l?d.width:d.height;let o=0;e.shiftKey?o=100:a.percentage!=null?o=a.percentage:a.pixels!=null?o=a.pixels/r:o=10;let L=0;switch(e.key){case"ArrowDown":L=l?0:o;break;case"ArrowLeft":L=l?-o:0;break;case"ArrowRight":L=l?o:0;break;case"ArrowUp":L=l?0:-o;break;case"End":L=100;break;case"Home":L=-100;break}return L}else return kn(e,t,i,s)}function Ze({groupSizePixels:e,panelDataArray:n}){const t=Array(n.length),i=n.map(l=>l.constraints);let s=0,a=100;for(let l=0;l<n.length;l++){const{defaultSizePercentage:c}=Le(i,l,e);c!=null&&(s++,t[l]=c,a-=c)}for(let l=0;l<n.length;l++){const{defaultSizePercentage:c}=Le(i,l,e);if(c!=null)continue;const d=n.length-s,r=a/d;s++,t[l]=r,a-=r}return t}function q(e,n){return e/100*n}function te(e,n,t,i){const s=ne(e);t.forEach((a,l)=>{const c=n[l];if(!c)return;const{callbacks:d,constraints:r,id:o}=c,{collapsible:L}=r,E={sizePercentage:a,sizePixels:q(a,s)},T=i[o];if(T==null||E.sizePercentage!==T.sizePercentage||E.sizePixels!==T.sizePixels){i[o]=E;const{onCollapse:h,onExpand:I,onResize:S}=d;if(S&&S(E,T),L&&(h||I)){var g;const x=(g=ie({sizePercentage:r.collapsedSizePercentage,sizePixels:r.collapsedSizePixels},s))!==null&&g!==void 0?g:0,y=ie(E,s);I&&(T==null||T.sizePercentage===x)&&y!==x&&I(),h&&(T==null||T.sizePercentage!==x)&&y===x&&h()}}})}function Be(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function bn({dragState:e,layout:n,panelData:t,panelIndex:i,precision:s=3}){const a=n[i];let l;return t.length===1||a==null?l="1":l=a.toPrecision(s),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:e!==null?"none":void 0}}let ye=null,se=null;function ln(e){switch(e){case"horizontal":return"ew-resize";case"horizontal-max":return"w-resize";case"horizontal-min":return"e-resize";case"vertical":return"ns-resize";case"vertical-max":return"n-resize";case"vertical-min":return"s-resize"}}function vn(){se!==null&&(document.head.removeChild(se),ye=null,se=null)}function ve(e){if(ye===e)return;ye=e;const n=ln(e);se===null&&(se=document.createElement("style"),document.head.appendChild(se)),se.innerHTML=`*{cursor: ${n}!important;}`}function Pn(e,n=10){let t=null;return(...s)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...s)},n)}}function yn(e){return Array.from(document.querySelectorAll(`[data-panel][data-panel-group-id="${e}"]`))}function je(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function on(e){return e.map(n=>{const{constraints:t,id:i,idIsFromProps:s,order:a}=n;return s?i:`${a}:${JSON.stringify(t)}`}).sort((n,t)=>n.localeCompare(t)).join(",")}function rn(e,n){try{const t=n.getItem(`PanelGroup:sizes:${e}`);if(t){const i=JSON.parse(t);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Hn(e,n,t){const i=rn(e,t);if(i){var s;const a=on(n);return(s=i[a])!==null&&s!==void 0?s:null}return null}function Mn(e,n,t,i){const s=on(n),a=rn(e,i)||{};a[s]=t;try{i.setItem(`PanelGroup:sizes:${e}`,JSON.stringify(a))}catch(l){console.error(l)}}function Ue(e){return e.some(n=>n.collapsedSizePixels!==void 0||n.maxSizePixels!==void 0||n.minSizePixels!==void 0)}function Ie({groupSizePixels:e,layout:n,panelConstraints:t}){const i=[...n];if(i.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${i.map(a=>`${a}%`).join(", ")}`);W(i.reduce((a,l)=>a+l,0),100);let s=0;for(let a=0;a<t.length;a++){const l=i[a],c=de({groupSizePixels:e,panelConstraints:t,panelIndex:a,size:l});l!=c&&(s+=l-c,i[a]=c)}if(!W(s,0))for(let a=0;a<t.length;a++){const l=i[a],c=l+s,d=de({groupSizePixels:e,panelConstraints:t,panelIndex:a,size:c});if(l!==d&&(s-=d-l,i[a]=d,W(s,0)))break}return i}const wn=100,pe={getItem:e=>(je(pe),pe.getItem(e)),setItem:(e,n)=>{je(pe),pe.setItem(e,n)}},Pe={};function cn({autoSaveId:e=null,children:n,className:t="",dataAttributes:i,direction:s,forwardedRef:a,id:l,onLayout:c=null,keyboardResizeByPercentage:d=null,keyboardResizeByPixels:r=null,storage:o=pe,style:L,tagName:E="div"}){const T=we(l),[g,h]=xe(null),[I,S]=xe([]),x=$({}),y=$(new Map),F=$(0),O=$({autoSaveId:e,direction:s,dragState:g,id:T,keyboardResizeByPercentage:d,keyboardResizeByPixels:r,onLayout:c,storage:o}),p=$({layout:I,panelDataArray:[]});$({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Ye(a,()=>({getId:()=>O.current.id,getLayout:()=>{const{id:R}=O.current,{layout:G}=p.current,C=ne(R);return G.map(D=>({sizePercentage:D,sizePixels:q(D,C)}))},setLayout:R=>{const{id:G,onLayout:C}=O.current,{layout:D,panelDataArray:u}=p.current,A=ne(G),m=R.map(k=>ie(k,A)),N=Ie({groupSizePixels:A,layout:m,panelConstraints:u.map(k=>k.constraints)});Ae(D,N)||(S(N),p.current.layout=N,C&&C(N.map(k=>({sizePercentage:k,sizePixels:q(k,A)}))),te(G,u,N,x.current))}}),[]),Se(()=>{O.current.autoSaveId=e,O.current.direction=s,O.current.dragState=g,O.current.id=T,O.current.onLayout=c,O.current.storage=o}),hn({committedValuesRef:O,eagerValuesRef:p,groupId:T,layout:I,panelDataArray:p.current.panelDataArray,setLayout:S}),ae(()=>{const{panelDataArray:R}=p.current;if(e){if(I.length===0||I.length!==R.length)return;Pe[e]||(Pe[e]=Pn(Mn,wn)),Pe[e](e,R,I,o)}},[e,I,o]),Se(()=>{const{layout:R,panelDataArray:G}=p.current,C=G.map(({constraints:D})=>D);if(Ue(C))if(typeof ResizeObserver>"u")console.warn("WARNING: Pixel based constraints require ResizeObserver but it is not supported by the current browser.");else{const D=new ResizeObserver(()=>{const u=ne(T),{onLayout:A}=O.current,m=Ie({groupSizePixels:u,layout:R,panelConstraints:G.map(N=>N.constraints)});Ae(R,m)||(S(m),p.current.layout=m,A&&A(m.map(N=>({sizePercentage:N,sizePixels:q(N,u)}))),te(T,G,m,x.current))});return D.observe(Ee(T)),()=>{D.disconnect()}}},[T]),ae(()=>{});const M=U(R=>{const{onLayout:G}=O.current,{layout:C,panelDataArray:D}=p.current;if(R.constraints.collapsible){const u=D.map(P=>P.constraints),{collapsedSizePercentage:A,panelSizePercentage:m,pivotIndices:N,groupSizePixels:k}=ce(T,D,R,C);if(m!==A){y.current.set(R.id,m);const H=D.indexOf(R)===D.length-1?m-A:A-m,B=ue({delta:H,groupSizePixels:k,layout:C,panelConstraints:u,pivotIndices:N,trigger:"imperative-api"});Be(C,B)||(S(B),p.current.layout=B,G&&G(B.map(b=>({sizePercentage:b,sizePixels:q(b,k)}))),te(T,D,B,x.current))}}},[T]),X=U(R=>{const{onLayout:G}=O.current,{layout:C,panelDataArray:D}=p.current;if(R.constraints.collapsible){const u=D.map(H=>H.constraints),{collapsedSizePercentage:A,panelSizePercentage:m,minSizePercentage:N,pivotIndices:k,groupSizePixels:P}=ce(T,D,R,C);if(m===A){const H=y.current.get(R.id),B=H!=null&&H>=N?H:N,v=D.indexOf(R)===D.length-1?m-B:B-m,j=ue({delta:v,groupSizePixels:P,layout:C,panelConstraints:u,pivotIndices:k,trigger:"imperative-api"});Be(C,j)||(S(j),p.current.layout=j,G&&G(j.map(ge=>({sizePercentage:ge,sizePixels:q(ge,P)}))),te(T,D,j,x.current))}}},[T]),w=U(R=>{const{layout:G,panelDataArray:C}=p.current,{panelSizePercentage:D,panelSizePixels:u}=ce(T,C,R,G);return{sizePercentage:D,sizePixels:u}},[T]),z=U(R=>{const{panelDataArray:G}=p.current,C=G.indexOf(R);return bn({dragState:g,layout:I,panelData:G,panelIndex:C})},[g,I]),re=U(R=>{const{layout:G,panelDataArray:C}=p.current,{collapsedSizePercentage:D,collapsible:u,panelSizePercentage:A}=ce(T,C,R,G);return u===!0&&A===D},[T]),Z=U(R=>{const{layout:G,panelDataArray:C}=p.current,{collapsedSizePercentage:D,collapsible:u,panelSizePercentage:A}=ce(T,C,R,G);return!u||A>D},[T]),Q=U(R=>{const{autoSaveId:G,id:C,onLayout:D,storage:u}=O.current,{layout:A,panelDataArray:m}=p.current;if(m.push(R),m.sort((B,b)=>{const v=B.order,j=b.order;return v==null&&j==null?0:v==null?-1:j==null?1:v-j}),yn(C).length!==m.length)return;let k=null;G&&(k=Hn(G,m,u));const P=ne(C);if(P<=0&&Ue(m.map(({constraints:B})=>B)))return;k==null&&(k=Ze({groupSizePixels:P,panelDataArray:m}));const H=Ie({groupSizePixels:P,layout:k,panelConstraints:m.map(B=>B.constraints)});S(H),p.current.layout=H,Ae(A,H)||(D&&D(H.map(B=>({sizePercentage:B,sizePixels:q(B,P)}))),te(C,m,H,x.current))},[]),ee=U(R=>function(C){C.preventDefault();const{direction:D,dragState:u,id:A,keyboardResizeByPercentage:m,keyboardResizeByPixels:N,onLayout:k}=O.current,{layout:P,panelDataArray:H}=p.current,{initialLayout:B}=u??{},b=en(A,R);let v=Nn(C,A,R,D,u,{percentage:m,pixels:N});if(v===0)return;const j=D==="horizontal";document.dir==="rtl"&&j&&(v=-v);const ge=ne(A),fn=H.map(me=>me.constraints),Re=ue({delta:v,groupSizePixels:ge,layout:B??P,panelConstraints:fn,pivotIndices:b,trigger:nn(C)?"keyboard":"mouse-or-touch"}),Fe=!Be(P,Re);(tn(C)||sn(C))&&F.current!=v&&(F.current=v,ve(Fe?j?"horizontal":"vertical":j?v<0?"horizontal-min":"horizontal-max":v<0?"vertical-min":"vertical-max")),Fe&&(S(Re),p.current.layout=Re,k&&k(Re.map(me=>({sizePercentage:me,sizePixels:q(me,ge)}))),te(A,H,Re,x.current))},[]),_=U((R,G)=>{const{onLayout:C}=O.current,{layout:D,panelDataArray:u}=p.current,A=u.map(v=>v.constraints),{groupSizePixels:m,panelSizePercentage:N,pivotIndices:k}=ce(T,u,R,D),P=ie(G,m),B=u.indexOf(R)===u.length-1?N-P:P-N,b=ue({delta:B,groupSizePixels:m,layout:D,panelConstraints:A,pivotIndices:k,trigger:"imperative-api"});Be(D,b)||(S(b),p.current.layout=b,C&&C(b.map(v=>({sizePercentage:v,sizePixels:q(v,m)}))),te(T,u,b,x.current))},[T]),Ge=U((R,G)=>{const{direction:C}=O.current,{layout:D}=p.current,u=ke(R),A=an(C,G);h({dragHandleId:R,dragHandleRect:u.getBoundingClientRect(),initialCursorPosition:A,initialLayout:D})},[]),K=U(()=>{vn(),h(null)},[]),V=$({pendingPanelIds:new Set,timeout:null}),ze=U(R=>{const{id:G,onLayout:C}=O.current,{layout:D,panelDataArray:u}=p.current,A=u.indexOf(R);A>=0&&(u.splice(A,1),V.current.pendingPanelIds.add(R.id)),V.current.timeout!=null&&clearTimeout(V.current.timeout),V.current.timeout=setTimeout(()=>{const{pendingPanelIds:m}=V.current,N=x.current;let k=!1;if(m.forEach(b=>{m.delete(b),u.find(({id:v})=>v===b)==null&&(k=!0,delete N[R.id])}),!k||u.length===0)return;const P=ne(G);let H=Ze({groupSizePixels:P,panelDataArray:u});const B=Ie({groupSizePixels:P,layout:H,panelConstraints:u.map(b=>b.constraints)});Ae(D,B)||(S(B),p.current.layout=B,C&&C(B.map(b=>({sizePercentage:b,sizePixels:q(b,P)}))),te(G,u,B,x.current))},0)},[]),dn=On(()=>({collapsePanel:M,direction:s,dragState:g,expandPanel:X,getPanelSize:w,getPanelStyle:z,groupId:T,isPanelCollapsed:re,isPanelExpanded:Z,registerPanel:Q,registerResizeHandle:ee,resizePanel:_,startDragging:Ge,stopDragging:K,unregisterPanel:ze}),[M,g,s,X,w,z,T,re,Z,Q,ee,_,Ge,K,ze]),Tn={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return fe(he.Provider,{value:dn},fe(E,{children:n,className:t,style:{...Tn,...L},...i,"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":T}))}const Ne=Ke((e,n)=>fe(cn,{...e,forwardedRef:n}));cn.displayName="PanelGroup";Ne.displayName="forwardRef(PanelGroup)";function ce(e,n,t,i){const s=n.map(T=>T.constraints),a=n.indexOf(t),l=s[a],c=ne(e),d=Le(s,a,c),o=a===n.length-1?[a-1,a]:[a,a+1],L=i[a],E=q(L,c);return{...d,collapsible:l.collapsible,panelSizePercentage:L,panelSizePixels:E,groupSizePixels:c,pivotIndices:o}}function zn({disabled:e,handleId:n,resizeHandler:t}){ae(()=>{if(e||t==null)return;const i=ke(n);if(i==null)return;const s=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id"),c=oe(l),d=Qe(l,n);Xe(d!==null);const r=a.shiftKey?d>0?d-1:c.length-1:d+1<c.length?d+1:0;c[r].focus();break}}};return i.addEventListener("keydown",s),()=>{i.removeEventListener("keydown",s)}},[e,n,t])}function be({children:e=null,className:n="",dataAttributes:t,disabled:i=!1,id:s=null,onDragging:a,style:l={},tagName:c="div"}){const d=$(null),r=$({onDragging:a});ae(()=>{r.current.onDragging=a});const o=qe(he);if(o===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:L,dragState:E,groupId:T,registerResizeHandle:g,startDragging:h,stopDragging:I}=o,S=we(s),x=(E==null?void 0:E.dragHandleId)===S,[y,F]=xe(!1),[O,p]=xe(null),M=U(()=>{d.current.blur(),I();const{onDragging:z}=r.current;z&&z(!1)},[I]);ae(()=>{if(i)p(null);else{const w=g(S);p(()=>w)}},[i,S,g]),ae(()=>{if(i||O==null||!x)return;const w=Q=>{O(Q)},z=Q=>{O(Q)},Z=d.current.ownerDocument;return Z.body.addEventListener("contextmenu",M),Z.body.addEventListener("mousemove",w),Z.body.addEventListener("touchmove",w),Z.body.addEventListener("mouseleave",z),window.addEventListener("mouseup",M),window.addEventListener("touchend",M),()=>{Z.body.removeEventListener("contextmenu",M),Z.body.removeEventListener("mousemove",w),Z.body.removeEventListener("touchmove",w),Z.body.removeEventListener("mouseleave",z),window.removeEventListener("mouseup",M),window.removeEventListener("touchend",M)}},[L,i,x,O,M]),zn({disabled:i,handleId:S,resizeHandler:O});const X={cursor:ln(L),touchAction:"none",userSelect:"none"};return fe(c,{children:e,className:n,onBlur:()=>F(!1),onFocus:()=>F(!0),onMouseDown:w=>{h(S,w.nativeEvent);const{onDragging:z}=r.current;z&&z(!0)},onMouseUp:M,onTouchCancel:M,onTouchEnd:M,onTouchStart:w=>{h(S,w.nativeEvent);const{onDragging:z}=r.current;z&&z(!0)},ref:d,role:"separator",style:{...X,...l},tabIndex:0,...t,"data-panel-group-direction":L,"data-panel-group-id":T,"data-resize-handle":"","data-resize-handle-active":x?"pointer":y?"keyboard":void 0,"data-panel-resize-handle-enabled":!i,"data-panel-resize-handle-id":S})}be.displayName="PanelResizeHandle";const Fn=async e=>await(await fetch("https://kroki.io/d2/svg",{method:"POST",cache:"force-cache",body:JSON.stringify({diagram_source:e,output_format:"svg"}),headers:{"Content-Type":"application/json"}})).text();function _n({viewId:e}){var s;const n=un(e),[t,{execute:i}]=$e(Fn,null);return f.jsxs(Ne,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[f.jsx(le,{minSizePixels:100,children:f.jsxs(Te,{scrollbars:"both",children:[f.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:f.jsx(He,{variant:"soft",autoFocus:!0,children:n})}),f.jsx(Me,{text:n})]})}),f.jsx(be,{style:{width:10}}),f.jsx(le,{minSizePixels:100,children:f.jsxs(Te,{scrollbars:"both",children:[t.status!=="success"&&f.jsxs(f.Fragment,{children:[f.jsx(En,{disabled:t.status==="loading",onClick:()=>void i(n),children:t.status==="loading"?"Loading...":"Render with Kroki"}),t.status==="error"&&f.jsx(Y,{children:(s=t.error)==null?void 0:s.message})]}),t.status==="success"&&f.jsx(Y,{grow:"1",asChild:!0,className:"svg-container",children:t.result?f.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}}):f.jsx(Y,{children:"Empty result"})})]})})]})}function Vn(e){switch(e){case"index":return`digraph {
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
    gcs [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">GCS</FONT></TD></TR></TABLE>>,
        likec4_id=GCS,
        likec4_level=0];
    customer -> gcs [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Control and monitoring</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:GCS",
        minlen=1,
        style=dashed];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
`;case"09e94ea7fbc76d2410d1c7875d40c4622b4a9b36":return`digraph {
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
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">Reactjs node 18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Single web aplication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.ui",
            likec4_level=1,
            margin="0.362,0.417"];
        backend [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Backend Services</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Implements business logic,</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">comunication with UAVs using ROS</FONT></TD></TR>,<TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">and exposes as REST API</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">RosBridge</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
                label=<<B>BACKEND SERVICES</B>>,
                likec4_depth=1,
                likec4_id="GCS.backend",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            express [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">RestAPI &amp; websocket</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Rest api for the backend uses  Express</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.express",
                likec4_level=2];
            missionmanager [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mission manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Mision Inspection logic</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="GCS.backend.missionManager",
                likec4_level=2];
            express -> missionmanager [likec4_id="GCS.backend.express:GCS.backend.missionManager",
                style=dashed];
            devicemanager [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device Manager</FONT></TD></TR></TABLE>>,
                likec4_id="GCS.backend.deviceManager",
                likec4_level=2];
            express -> devicemanager [likec4_id="GCS.backend.express:GCS.backend.deviceManager",
                style=dashed];
            ftp [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">FileTransferManager</FONT></TD></TR></TABLE>>,
                likec4_id="GCS.backend.ftp",
                likec4_level=2];
            missionmanager -> ftp [likec4_id="GCS.backend.missionManager:GCS.backend.ftp",
                minlen=1,
                style=dashed];
            missionmanager -> devicemanager [likec4_id="GCS.backend.missionManager:GCS.backend.deviceManager",
                style=dashed];
            roslib [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">RosLibjs</FONT></TD></TR></TABLE>>,
                likec4_id="GCS.backend.roslib",
                likec4_level=2];
            devicemanager -> roslib [likec4_id="GCS.backend.deviceManager:GCS.backend.roslib",
                style=dashed];
            roslib -> devicemanager [likec4_id="GCS.backend.roslib:GCS.backend.deviceManager",
                style=dashed];
            events [group="GCS.backend",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Events Manager</FONT></TD></TR></TABLE>>,
                likec4_id="GCS.backend.events",
                likec4_level=2];
            roslib -> events [likec4_id="GCS.backend.roslib:GCS.backend.events",
                minlen=1,
                style=dashed];
            events -> express [likec4_id="GCS.backend.events:GCS.backend.express",
                style=dashed];
        }
        ui [fillcolor="#428a4f",
            group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#c2f0c2">Reactjs node 18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Single web aplication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.ui",
            likec4_level=1,
            margin="0.362,0.417"];
        ui -> express [likec4_id="GCS.ui:GCS.backend.express",
            minlen=1,
            style=dashed];
        rosbridge [group=GCS,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">RosBridge</FONT></TD></TR></TABLE>>,
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
        roslib -> rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Send/recv UDP msg</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.roslib:GCS.Rosbridge",
            minlen=1,
            style=dashed];
    }
    elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">OpenTopoData</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Api of elevation</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=elevationApi,
        likec4_level=0];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
            label=<<B>BACKEND SERVICES</B>>,
            likec4_depth=1,
            likec4_id="GCS.backend",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        express [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">RestAPI &amp; websocket</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Rest api for the backend uses  Express</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.express",
            likec4_level=1];
        missionmanager [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Mission manager</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Mision Inspection logic</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="GCS.backend.missionManager",
            likec4_level=1];
        express -> missionmanager [likec4_id="GCS.backend.express:GCS.backend.missionManager",
            style=dashed];
        devicemanager [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Device Manager</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.backend.deviceManager",
            likec4_level=1];
        express -> devicemanager [likec4_id="GCS.backend.express:GCS.backend.deviceManager",
            style=dashed];
        ftp [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">FileTransferManager</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.backend.ftp",
            likec4_level=1];
        missionmanager -> ftp [likec4_id="GCS.backend.missionManager:GCS.backend.ftp",
            minlen=1,
            style=dashed];
        missionmanager -> devicemanager [likec4_id="GCS.backend.missionManager:GCS.backend.deviceManager",
            style=dashed];
        roslib [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">RosLibjs</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.backend.roslib",
            likec4_level=1];
        devicemanager -> roslib [likec4_id="GCS.backend.deviceManager:GCS.backend.roslib",
            style=dashed];
        roslib -> devicemanager [likec4_id="GCS.backend.roslib:GCS.backend.deviceManager",
            style=dashed];
        events [group="GCS.backend",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Events Manager</FONT></TD></TR></TABLE>>,
            likec4_id="GCS.backend.events",
            likec4_level=1];
        roslib -> events [likec4_id="GCS.backend.roslib:GCS.backend.events",
            minlen=1,
            style=dashed];
        events -> express [likec4_id="GCS.backend.events:GCS.backend.express",
            style=dashed];
    }
    ui [fillcolor="#428a4f",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD><FONT POINT-SIZE="12" COLOR="#c2f0c2">Reactjs node 18</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Single web aplication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="GCS.ui",
        likec4_level=0,
        margin="0.362,0.417"];
    ui -> express [likec4_id="GCS.ui:GCS.backend.express",
        minlen=1,
        style=dashed];
    device [imagescale=true,
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="32"><IMG SRC="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" SCALE="TRUE"/></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">device</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=device,
        likec4_level=0];
    elevationapi [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">OpenTopoData</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="16"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Api of elevation</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=elevationApi,
        likec4_level=0];
    rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">RosBridge</FONT></TD></TR></TABLE>>,
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
    roslib -> rosbridge [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="15"><FONT POINT-SIZE="13">Send/recv UDP msg</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
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
<text text-anchor="start" x="343.35" y="-377.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">GCS</text>
</g>
<!-- device -->
<g id="node3" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="144.02" y="-131.9"/>
<text text-anchor="start" x="131.11" y="-75.9" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">device</text>
<text text-anchor="start" x="35.54" y="-52.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</text>
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
`;case"09e94ea7fbc76d2410d1c7875d40c4622b4a9b36":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
<text text-anchor="start" x="566.64" y="-1256.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#bfdbfe">Reactjs node 18</text>
<text text-anchor="start" x="544.23" y="-1235.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Single web aplication</text>
</g>
<!-- backend -->
<g id="node2" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="770.02,-1060.8 449.98,-1060.8 449.98,-880.8 770.02,-880.8 770.02,-1060.8"/>
<text text-anchor="start" x="529.96" y="-992" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Backend Services</text>
<text text-anchor="start" x="525.96" y="-968.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Implements business logic,</text>
<text text-anchor="start" x="498.73" y="-951.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">comunication with UAVs using ROS</text>
<text text-anchor="start" x="527.12" y="-934.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">and exposes as REST API</text>
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
<text text-anchor="start" x="153.31" y="-670.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">RosBridge</text>
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
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="594" y="-131.9"/>
<text text-anchor="start" x="581.09" y="-75.9" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">device</text>
<text text-anchor="start" x="485.52" y="-52.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</text>
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
<svg width="1696pt" height="1765pt"
 viewBox="0.00 0.00 1696.02 1765.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1761)">
<g id="clust1" class="cluster">
<title>cluster_gcs</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-8 8,-1749 1310,-1749 1310,-8 8,-8"/>
<text text-anchor="start" x="16" y="-1734.3" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">GCS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_backend</title>
<polygon fill="#3e4651" stroke="#2d333d" points="40,-40 40,-1459.4 926,-1459.4 926,-40 40,-40"/>
<text text-anchor="start" x="48" y="-1444.7" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">BACKEND SERVICES</text>
</g>
<!-- express -->
<g id="node1" class="node">
<title>express</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.02,-1403.8 163.98,-1403.8 163.98,-1223.8 484.02,-1223.8 484.02,-1403.8"/>
<text text-anchor="start" x="227.85" y="-1318.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">RestAPI &amp; websocket</text>
<text text-anchor="start" x="202.21" y="-1294.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Rest api for the backend uses &#160;Express</text>
</g>
<!-- missionmanager -->
<g id="node2" class="node">
<title>missionmanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="735.02,-1132.8 414.98,-1132.8 414.98,-952.8 735.02,-952.8 735.02,-1132.8"/>
<text text-anchor="start" x="498.86" y="-1047.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mission manager</text>
<text text-anchor="start" x="504.58" y="-1023.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Mision Inspection logic</text>
</g>
<!-- devicemanager -->
<g id="node3" class="node">
<title>devicemanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.02,-839.2 163.98,-839.2 163.98,-659.2 484.02,-659.2 484.02,-839.2"/>
<text text-anchor="start" x="251.19" y="-742.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device Manager</text>
</g>
<!-- ftp -->
<g id="node4" class="node">
<title>ftp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="894.02,-839.2 573.98,-839.2 573.98,-659.2 894.02,-659.2 894.02,-839.2"/>
<text text-anchor="start" x="641.19" y="-742.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">FileTransferManager</text>
</g>
<!-- roslib -->
<g id="node5" class="node">
<title>roslib</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="484.02,-545.6 163.98,-545.6 163.98,-365.6 484.02,-365.6 484.02,-545.6"/>
<text text-anchor="start" x="285.65" y="-449.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">RosLibjs</text>
</g>
<!-- events -->
<g id="node6" class="node">
<title>events</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="438.02,-252 117.98,-252 117.98,-72 438.02,-72 438.02,-252"/>
<text text-anchor="start" x="205.18" y="-155.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Events Manager</text>
</g>
<!-- ui -->
<g id="node7" class="node">
<title>ui</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="484.02,-1693.4 163.98,-1693.4 163.98,-1513.4 484.02,-1513.4 484.02,-1693.4"/>
<text text-anchor="start" x="283.98" y="-1617.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Frontend</text>
<text text-anchor="start" x="280.64" y="-1595.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">Reactjs node 18</text>
<text text-anchor="start" x="258.23" y="-1574.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Single web aplication</text>
</g>
<!-- rosbridge -->
<g id="node8" class="node">
<title>rosbridge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.02,-252 957.98,-252 957.98,-72 1278.02,-72 1278.02,-252"/>
<text text-anchor="start" x="1071.31" y="-155.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">RosBridge</text>
</g>
<!-- mediamtx -->
<g id="node9" class="node">
<title>mediamtx</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.02,-545.6 957.98,-545.6 957.98,-365.6 1278.02,-365.6 1278.02,-545.6"/>
<text text-anchor="start" x="1039.09" y="-460" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimedia server</text>
<text text-anchor="start" x="1025.8" y="-436.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RealTime video Transmission</text>
</g>
<!-- elevationapi -->
<g id="node10" class="node">
<title>elevationapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1662.02,-839.2 1341.98,-839.2 1341.98,-659.2 1662.02,-659.2 1662.02,-839.2"/>
<text text-anchor="start" x="1433.62" y="-753.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">OpenTopoData</text>
<text text-anchor="start" x="1454.13" y="-730" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Api of elevation</text>
</g>
<!-- device -->
<g id="node11" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1688.02,-252 1367.98,-252 1367.98,-72 1688.02,-72 1688.02,-252"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="1512" y="-203.9"/>
<text text-anchor="start" x="1499.09" y="-147.9" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">device</text>
<text text-anchor="start" x="1403.52" y="-124.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</text>
</g>
<!-- express&#45;&gt;missionmanager -->
<g id="edge1" class="edge">
<title>express&#45;&gt;missionmanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M406.88,-1223.97C431.41,-1197.69 458.4,-1168.77 483.44,-1141.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="485.88,-1144.45 490.14,-1134.75 480.76,-1139.67 485.88,-1144.45"/>
</g>
<!-- express&#45;&gt;devicemanager -->
<g id="edge2" class="edge">
<title>express&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324,-1223.96C324,-1122.9 324,-958.16 324,-852"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="327.5,-852.06 324,-842.06 320.5,-852.06 327.5,-852.06"/>
</g>
<!-- missionmanager&#45;&gt;devicemanager -->
<g id="edge4" class="edge">
<title>missionmanager&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M498.67,-953.12C470.19,-920.04 437.7,-882.3 408.53,-848.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="411.55,-846.55 402.37,-841.25 406.25,-851.11 411.55,-846.55"/>
</g>
<!-- missionmanager&#45;&gt;ftp -->
<g id="edge3" class="edge">
<title>missionmanager&#45;&gt;ftp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M623.35,-953.12C641.08,-920.61 661.27,-883.59 679.5,-850.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="682.44,-852.07 684.15,-841.62 676.29,-848.72 682.44,-852.07"/>
</g>
<!-- missionmanager&#45;&gt;elevationapi -->
<g id="edge13" class="edge">
<title>missionmanager&#45;&gt;elevationapi</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M734.88,-991.51C900.83,-939.31 1159.48,-857.94 1329.83,-804.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1330.82,-807.72 1339.31,-801.38 1328.72,-801.04 1330.82,-807.72"/>
<text text-anchor="start" x="1076" y="-892.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">HTTP</text>
</g>
<!-- devicemanager&#45;&gt;roslib -->
<g id="edge5" class="edge">
<title>devicemanager&#45;&gt;roslib</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M292.67,-659.52C289.82,-627.57 289.49,-591.27 291.66,-558.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="295.15,-558.62 292.43,-548.38 288.17,-558.08 295.15,-558.62"/>
</g>
<!-- devicemanager&#45;&gt;mediamtx -->
<g id="edge10" class="edge">
<title>devicemanager&#45;&gt;mediamtx</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M483.99,-676.12C499.09,-670.11 514.26,-664.37 529,-659.2 707.17,-596.74 765.84,-615.16 946.23,-546.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="947.41,-549.42 955.47,-542.54 944.88,-542.89 947.41,-549.42"/>
<text text-anchor="start" x="815" y="-598.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">API REST</text>
</g>
<!-- ftp&#45;&gt;device -->
<g id="edge14" class="edge">
<title>ftp&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M893.74,-728.93C1047.5,-707.52 1266.14,-668.64 1332,-614.2 1438.96,-525.8 1489.1,-367.86 1511.46,-264.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1514.87,-265.06 1513.49,-254.56 1508.02,-263.63 1514.87,-265.06"/>
<text text-anchor="start" x="1493" y="-451.7" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">FTP</text>
</g>
<!-- roslib&#45;&gt;devicemanager -->
<g id="edge6" class="edge">
<title>roslib&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M355.34,-545.36C358.18,-577.32 358.51,-613.62 356.33,-646.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="352.85,-646.26 355.57,-656.5 359.83,-646.8 352.85,-646.26"/>
</g>
<!-- roslib&#45;&gt;events -->
<g id="edge7" class="edge">
<title>roslib&#45;&gt;events</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M310.01,-365.92C304.95,-333.83 299.19,-297.35 293.97,-264.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="297.49,-264.08 292.47,-254.75 290.57,-265.17 297.49,-264.08"/>
</g>
<!-- roslib&#45;&gt;rosbridge -->
<g id="edge11" class="edge">
<title>roslib&#45;&gt;rosbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M483.91,-367.21C485.28,-366.66 486.64,-366.13 488,-365.6 680.53,-291 748.42,-325.21 946.35,-252.43"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="947.35,-255.79 955.49,-249.01 944.9,-249.23 947.35,-255.79"/>
<text text-anchor="start" x="792" y="-304.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Send/recv UDP msg</text>
</g>
<!-- events&#45;&gt;express -->
<g id="edge8" class="edge">
<title>events&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M173.1,-251.9C122.66,-304.77 73,-376.63 73,-454.6 73,-1043.8 73,-1043.8 73,-1043.8 73,-1112.5 117.31,-1170.96 168.69,-1215.65"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="166.15,-1218.09 176.05,-1221.88 170.67,-1212.75 166.15,-1218.09"/>
</g>
<!-- ui&#45;&gt;express -->
<g id="edge9" class="edge">
<title>ui&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M324,-1513.76C324,-1483.01 324,-1448.29 324,-1416.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="327.5,-1416.67 324,-1406.67 320.5,-1416.67 327.5,-1416.67"/>
</g>
<!-- mediamtx&#45;&gt;device -->
<g id="edge12" class="edge">
<title>mediamtx&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1242.96,-365.72C1290.25,-332.09 1344.28,-293.66 1392.5,-259.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1394.42,-262.3 1400.54,-253.65 1390.37,-256.59 1394.42,-262.3"/>
<text text-anchor="start" x="1345" y="-304.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">RTSP H264</text>
</g>
</g>
</svg>
`;case"my_backend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 9.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1664pt" height="1669pt"
 viewBox="0.00 0.00 1664.02 1669.40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 1665.4)">
<g id="clust1" class="cluster">
<title>cluster_backend</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-8 8,-1427.4 894,-1427.4 894,-8 8,-8"/>
<text text-anchor="start" x="16" y="-1412.7" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">BACKEND SERVICES</text>
</g>
<!-- express -->
<g id="node1" class="node">
<title>express</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="452.02,-1371.8 131.98,-1371.8 131.98,-1191.8 452.02,-1191.8 452.02,-1371.8"/>
<text text-anchor="start" x="195.85" y="-1286.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">RestAPI &amp; websocket</text>
<text text-anchor="start" x="170.21" y="-1262.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Rest api for the backend uses &#160;Express</text>
</g>
<!-- missionmanager -->
<g id="node2" class="node">
<title>missionmanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="703.02,-1100.8 382.98,-1100.8 382.98,-920.8 703.02,-920.8 703.02,-1100.8"/>
<text text-anchor="start" x="466.86" y="-1015.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Mission manager</text>
<text text-anchor="start" x="472.58" y="-991.6" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Mision Inspection logic</text>
</g>
<!-- devicemanager -->
<g id="node3" class="node">
<title>devicemanager</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="452.02,-807.2 131.98,-807.2 131.98,-627.2 452.02,-627.2 452.02,-807.2"/>
<text text-anchor="start" x="219.19" y="-710.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Device Manager</text>
</g>
<!-- ftp -->
<g id="node4" class="node">
<title>ftp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="862.02,-807.2 541.98,-807.2 541.98,-627.2 862.02,-627.2 862.02,-807.2"/>
<text text-anchor="start" x="609.19" y="-710.7" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">FileTransferManager</text>
</g>
<!-- roslib -->
<g id="node5" class="node">
<title>roslib</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="452.02,-513.6 131.98,-513.6 131.98,-333.6 452.02,-333.6 452.02,-513.6"/>
<text text-anchor="start" x="253.65" y="-417.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">RosLibjs</text>
</g>
<!-- events -->
<g id="node6" class="node">
<title>events</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="406.02,-220 85.98,-220 85.98,-40 406.02,-40 406.02,-220"/>
<text text-anchor="start" x="173.18" y="-123.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Events Manager</text>
</g>
<!-- ui -->
<g id="node7" class="node">
<title>ui</title>
<polygon fill="#428a4f" stroke="#2563eb" stroke-width="0" points="452.02,-1661.4 131.98,-1661.4 131.98,-1481.4 452.02,-1481.4 452.02,-1661.4"/>
<text text-anchor="start" x="251.98" y="-1585.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Frontend</text>
<text text-anchor="start" x="248.64" y="-1563.7" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">Reactjs node 18</text>
<text text-anchor="start" x="226.23" y="-1542.5" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Single web aplication</text>
</g>
<!-- device -->
<g id="node8" class="node">
<title>device</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1656.02,-513.6 1335.98,-513.6 1335.98,-333.6 1656.02,-333.6 1656.02,-513.6"/>
<image xlink:href="https://icons.terrastruct.com/aws%2FInternet%20of%20Things%2FIoT_Travel_light-bg.svg" width="32px" height="32px" preserveAspectRatio="xMinYMin meet" x="1480" y="-465.5"/>
<text text-anchor="start" x="1467.09" y="-409.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">device</text>
<text text-anchor="start" x="1371.52" y="-385.9" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">ROS enviroment &amp; RSTP server of UAV</text>
</g>
<!-- elevationapi -->
<g id="node9" class="node">
<title>elevationapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1272.02,-807.2 951.98,-807.2 951.98,-627.2 1272.02,-627.2 1272.02,-807.2"/>
<text text-anchor="start" x="1043.62" y="-721.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">OpenTopoData</text>
<text text-anchor="start" x="1064.13" y="-698" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Api of elevation</text>
</g>
<!-- rosbridge -->
<g id="node10" class="node">
<title>rosbridge</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1246.02,-220 925.98,-220 925.98,-40 1246.02,-40 1246.02,-220"/>
<text text-anchor="start" x="1039.31" y="-123.5" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">RosBridge</text>
</g>
<!-- mediamtx -->
<g id="node11" class="node">
<title>mediamtx</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1246.02,-513.6 925.98,-513.6 925.98,-333.6 1246.02,-333.6 1246.02,-513.6"/>
<text text-anchor="start" x="1007.09" y="-428" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Multimedia server</text>
<text text-anchor="start" x="993.8" y="-404.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">RealTime video Transmission</text>
</g>
<!-- express&#45;&gt;missionmanager -->
<g id="edge1" class="edge">
<title>express&#45;&gt;missionmanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M374.88,-1191.97C399.41,-1165.69 426.4,-1136.77 451.44,-1109.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="453.88,-1112.45 458.14,-1102.75 448.76,-1107.67 453.88,-1112.45"/>
</g>
<!-- express&#45;&gt;devicemanager -->
<g id="edge2" class="edge">
<title>express&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M292,-1191.96C292,-1090.9 292,-926.16 292,-820"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="295.5,-820.06 292,-810.06 288.5,-820.06 295.5,-820.06"/>
</g>
<!-- missionmanager&#45;&gt;devicemanager -->
<g id="edge4" class="edge">
<title>missionmanager&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M466.67,-921.12C438.19,-888.04 405.7,-850.3 376.53,-816.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="379.55,-814.55 370.37,-809.25 374.25,-819.11 379.55,-814.55"/>
</g>
<!-- missionmanager&#45;&gt;ftp -->
<g id="edge3" class="edge">
<title>missionmanager&#45;&gt;ftp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M591.35,-921.12C609.08,-888.61 629.27,-851.59 647.5,-818.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="650.44,-820.07 652.15,-809.62 644.29,-816.72 650.44,-820.07"/>
</g>
<!-- missionmanager&#45;&gt;elevationapi -->
<g id="edge10" class="edge">
<title>missionmanager&#45;&gt;elevationapi</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M703.01,-927.8C777.11,-889.82 865.24,-844.66 940.69,-805.99"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="942.21,-809.15 949.51,-801.47 939.01,-802.92 942.21,-809.15"/>
<text text-anchor="start" x="854" y="-860.1" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">HTTP</text>
</g>
<!-- devicemanager&#45;&gt;roslib -->
<g id="edge5" class="edge">
<title>devicemanager&#45;&gt;roslib</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M260.67,-627.52C257.82,-595.57 257.49,-559.27 259.66,-526.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="263.15,-526.62 260.43,-516.38 256.17,-526.08 263.15,-526.62"/>
</g>
<!-- devicemanager&#45;&gt;mediamtx -->
<g id="edge12" class="edge">
<title>devicemanager&#45;&gt;mediamtx</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M451.99,-644.12C467.09,-638.11 482.26,-632.37 497,-627.2 675.17,-564.74 733.84,-583.16 914.23,-514.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="915.41,-517.42 923.47,-510.54 912.88,-510.89 915.41,-517.42"/>
<text text-anchor="start" x="783" y="-566.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">API REST</text>
</g>
<!-- ftp&#45;&gt;device -->
<g id="edge11" class="edge">
<title>ftp&#45;&gt;device</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M861.75,-642.4C876.87,-636.77 892.11,-631.58 907,-627.2 1025.39,-592.36 1063.6,-620.24 1181,-582.2 1230.98,-566.01 1282.89,-542.93 1329.81,-519.42"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1331.27,-522.6 1338.61,-514.96 1328.11,-516.36 1331.27,-522.6"/>
<text text-anchor="start" x="1254" y="-566.5" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">FTP</text>
</g>
<!-- roslib&#45;&gt;devicemanager -->
<g id="edge6" class="edge">
<title>roslib&#45;&gt;devicemanager</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M323.34,-513.36C326.18,-545.32 326.51,-581.62 324.33,-614.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="320.85,-614.26 323.57,-624.5 327.83,-614.8 320.85,-614.26"/>
</g>
<!-- roslib&#45;&gt;events -->
<g id="edge7" class="edge">
<title>roslib&#45;&gt;events</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M278.01,-333.92C272.95,-301.83 267.19,-265.35 261.97,-232.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="265.49,-232.08 260.47,-222.75 258.57,-233.17 265.49,-232.08"/>
</g>
<!-- roslib&#45;&gt;rosbridge -->
<g id="edge13" class="edge">
<title>roslib&#45;&gt;rosbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M451.75,-378.8C576.45,-342.75 753.4,-287.47 914.62,-220.46"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="915.53,-223.87 923.4,-216.79 912.83,-217.42 915.53,-223.87"/>
<text text-anchor="start" x="809" y="-272.9" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">Send/recv UDP msg</text>
</g>
<!-- events&#45;&gt;express -->
<g id="edge8" class="edge">
<title>events&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M141.1,-219.9C90.66,-272.77 41,-344.63 41,-422.6 41,-1011.8 41,-1011.8 41,-1011.8 41,-1080.5 85.31,-1138.96 136.69,-1183.65"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="134.15,-1186.09 144.05,-1189.88 138.67,-1180.75 134.15,-1186.09"/>
</g>
<!-- ui&#45;&gt;express -->
<g id="edge9" class="edge">
<title>ui&#45;&gt;express</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M292,-1481.76C292,-1451.01 292,-1416.29 292,-1384.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="295.5,-1384.67 292,-1374.67 288.5,-1384.67 295.5,-1384.67"/>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}function jn({viewId:e}){const n=Vn(e);return f.jsxs(Ne,{direction:"horizontal",autoSaveId:"viewAsDot",children:[f.jsx(le,{minSizePixels:100,children:f.jsxs(Te,{scrollbars:"both",children:[f.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:f.jsx(He,{variant:"soft",autoFocus:!0,children:n})}),f.jsx(Me,{text:n})]})}),f.jsx(be,{style:{width:10}}),f.jsx(le,{minSizePixels:100,children:f.jsx(Te,{scrollbars:"both",children:f.jsx(Y,{py:"2",style:{overflow:"scroll",overscrollBehavior:"none"},children:f.jsx(Y,{asChild:!0,position:"relative",className:"svg-container",children:f.jsx("div",{dangerouslySetInnerHTML:{__html:Zn(e)}})})})})})]})}function Un(e){switch(e){case"index":return`---
title: "Landscape view"
---
graph TB
  Customer[fa:fa-user Customer]
  GCS[GCS]
  Device[device]
  ElevationApi[OpenTopoData]
  Customer -. "Control and monitoring" .-> GCS
  GCS -. "HTTP" .-> ElevationApi
  GCS -. "[FTP,ROS,RSTP]" .-> Device
`;case"09e94ea7fbc76d2410d1c7875d40c4622b4a9b36":return`---
title: "GCS"
---
graph TB
  Customer[fa:fa-user Customer]
  subgraph GCS["GCS"]
    GCS.Ui[Frontend]
    GCS.Backend[Backend Services]
    GCS.Mediamtx[Multimedia server]
    GCS.Rosbridge[RosBridge]
    GCS.RosMultimaster[Multimaster FLK]
  end
  Device[device]
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
title: "Backend Services"
---
graph TB
  subgraph GCS["GCS"]
    GCS.Ui[Frontend]
    subgraph GCS.Backend["Backend Services"]
      GCS.Backend.Express[RestAPI & websocket]
      GCS.Backend.MissionManager[Mission manager]
      GCS.Backend.Ftp[FileTransferManager]
      GCS.Backend.DeviceManager[Device Manager]
      GCS.Backend.Roslib[RosLibjs]
      GCS.Backend.Events[Events Manager]
    end
    GCS.Rosbridge[RosBridge]
    GCS.Mediamtx[Multimedia server]
  end
  ElevationApi[OpenTopoData]
  Device[device]
  GCS.Ui -.-> GCS.Backend.Express
  GCS.Backend.Express -.-> GCS.Backend.DeviceManager
  GCS.Backend.Express -.-> GCS.Backend.MissionManager
  GCS.Backend.MissionManager -.-> GCS.Backend.Ftp
  GCS.Backend.MissionManager -.-> GCS.Backend.DeviceManager
  GCS.Backend.MissionManager -. "HTTP" .-> ElevationApi
  GCS.Backend.Ftp -. "FTP" .-> Device
  GCS.Backend.DeviceManager -.-> GCS.Backend.Roslib
  GCS.Backend.DeviceManager -. "API REST" .-> GCS.Mediamtx
  GCS.Backend.Roslib -.-> GCS.Backend.DeviceManager
  GCS.Backend.Roslib -.-> GCS.Backend.Events
  GCS.Backend.Roslib -. "Send/recv UDP msg" .-> GCS.Rosbridge
  GCS.Backend.Events -.-> GCS.Backend.Express
  GCS.Mediamtx -. "RTSP H264" .-> Device
`;case"my_backend":return`---
title: "Backend Services"
---
graph TB
  GCSUi[Frontend]
  subgraph GCSBackend["Backend Services"]
    GCSBackend.Express[RestAPI & websocket]
    GCSBackend.MissionManager[Mission manager]
    GCSBackend.Ftp[FileTransferManager]
    GCSBackend.DeviceManager[Device Manager]
    GCSBackend.Roslib[RosLibjs]
    GCSBackend.Events[Events Manager]
  end
  Device[device]
  ElevationApi[OpenTopoData]
  GCSRosbridge[RosBridge]
  GCSMediamtx[Multimedia server]
  GCSUi -.-> GCSBackend.Express
  GCSBackend.Express -.-> GCSBackend.DeviceManager
  GCSBackend.Express -.-> GCSBackend.MissionManager
  GCSBackend.MissionManager -.-> GCSBackend.Ftp
  GCSBackend.MissionManager -.-> GCSBackend.DeviceManager
  GCSBackend.MissionManager -. "HTTP" .-> ElevationApi
  GCSBackend.Ftp -. "FTP" .-> Device
  GCSBackend.DeviceManager -.-> GCSBackend.Roslib
  GCSBackend.DeviceManager -. "API REST" .-> GCSMediamtx
  GCSBackend.Roslib -.-> GCSBackend.DeviceManager
  GCSBackend.Roslib -.-> GCSBackend.Events
  GCSBackend.Roslib -. "Send/recv UDP msg" .-> GCSRosbridge
  GCSBackend.Events -.-> GCSBackend.Express
`;default:throw new Error("Unknown viewId: "+e)}}const Wn=async(e,n)=>{const{default:t}=await gn(()=>import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"),__vite__mapDeps([]));t.initialize({theme:"dark"});const{svg:i}=await t.render(e,n);return i};function $n({viewId:e}){const n=Un(e),[t,{execute:i}]=$e(Wn,null);return De.useEffect(()=>{i(e,n)},[n]),f.jsxs(Ne,{direction:"horizontal",autoSaveId:"ViewAsD2",children:[f.jsx(le,{minSizePixels:100,children:f.jsxs(Te,{scrollbars:"both",children:[f.jsx(Y,{asChild:!0,display:"block",p:"2",style:{whiteSpace:"pre",minHeight:"100%"},children:f.jsx(He,{variant:"soft",autoFocus:!0,children:n})}),f.jsx(Me,{text:n})]})}),f.jsx(be,{style:{width:10}}),f.jsx(le,{minSizePixels:100,children:f.jsx(Te,{scrollbars:"both",children:t.result&&f.jsx(Y,{grow:"1",asChild:!0,position:"relative",className:"svg-container",children:f.jsx("div",{dangerouslySetInnerHTML:{__html:t.result}})})})})]})}function Yn({viewId:e,viewMode:n}){return f.jsx(Rn,{asChild:!0,position:"fixed",inset:"0",pt:"8",pl:"8",pr:"2",align:"stretch",direction:"column",children:f.jsxs(J.Root,{value:n,onValueChange:t=>t!==n&&Dn({mode:t}),children:[f.jsx(Y,{asChild:!0,shrink:"0",grow:"0",children:f.jsxs(J.List,{children:[f.jsx(J.Trigger,{value:"react",children:"React"}),f.jsx(J.Trigger,{value:"dot",children:"Graphviz"}),f.jsx(J.Trigger,{value:"mmd",children:"Mermaid"}),f.jsx(J.Trigger,{value:"d2",children:"D2"})]})}),f.jsxs(Y,{p:"2",className:Cn.otherFormats,position:"relative",children:[f.jsx(J.Content,{value:"react",children:""}),f.jsx(J.Content,{value:"dot",children:f.jsx(jn,{viewId:e})}),f.jsx(J.Content,{value:"mmd",children:f.jsx($n,{viewId:e})}),f.jsx(J.Content,{value:"d2",children:f.jsx(_n,{viewId:e})})]})]})})}export{Yn as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
