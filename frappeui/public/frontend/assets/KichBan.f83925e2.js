import{a as c}from"./ListView.e4532d11.js";import{_ as p,a4 as r,o as d,d as u,f as s,g as o,C as m,D as h,w as _,U as v,r as f,W as g,p as b,i as x}from"./vendor.ae1af255.js";import"./index.de2b8369.js";const w=e=>(b("data-v-1943ca0c"),e=e(),x(),e),y={style:{display:"flex","justify-content":"end",padding:"10px"}},B=w(()=>s("i",{class:"fa-solid fa-plus",style:{"font-size":"11px"}},null,-1)),k={__name:"KichBan",setup(e){const t=r({selectable:!0,showTooltip:!0}),a=[{label:"T\xEAn k\u1ECBch b\u1EA3n",key:"code",width:3},{label:"M\xF4 t\u1EA3",key:"description"},{label:"Nh\xE2n vi\xEAn",key:"user"}],i=[{id:1,code:"Gi\xE1m s\xE1t 1",name:"Dove",description:"This template ",user:"xuanthang@doe.com",photo:"/files/img_4.jpg",status:"Active",role:"Developer"},{id:2,code:"Gi\xE1m s\xE1t 2",name:"Cocacola",description:"This template ",user:"xuandien@doe.com",status:"Inactive",role:"HR",photo:"/files/img_4.jpg"},{id:3,code:"Gi\xE1m s\xE1t 3",name:"Custas",description:"custom frontend",user:"xuantrung@doe.com",status:"Active",role:"Developer",photo:"/files/img_4.jpg"},{id:4,code:"Gi\xE1m s\xE1t 4",name:"Banh Hoa Cuc",description:"This template ",user:"xuanduy@doe.com",status:"Active",role:"Developer",photo:"/files/img_4.jpg"},{id:5,code:"Gi\xE1m s\xE1t 5",name:"Banh Milano",description:"rors while using the ",user:"xuanthu@doe.com",status:"Active",role:"Developer",photo:"/files/img_4.jpg"}];return(T,j)=>{const n=f("Button");return d(),u(v,null,[s("div",y,[o(m(h),{options:[{label:"Th\xEAm k\u1ECBch b\u1EA3n",value:"1"},{label:"Xoa k\u1ECBch b\u1EA3n",value:"1"},{label:"In",value:"1"},{label:"Sao chep",value:"1"}],button:{label:"..."},style:{"margin-right":"10px"}},null,8,["button"]),o(n,{class:"btn-save"},{default:_(()=>[B,g("Th\xEAm k\u1ECBch b\u1EA3n")]),_:1})]),o(c,{class:"h-auto",columns:a,rows:i,options:{getRowRoute:l=>({name:"KichBanDetail",params:{KichBanId:l.id}}),selectable:t.selectable,showTooltip:t.showTooltip},"row-key":"id"},null,8,["options"])],64)}}};var G=p(k,[["__scopeId","data-v-1943ca0c"]]);export{G as default};