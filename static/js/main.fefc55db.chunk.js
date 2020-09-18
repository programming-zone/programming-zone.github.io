(this["webpackJsonpprogramming-zone.github.io"]=this["webpackJsonpprogramming-zone.github.io"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/logo.4a8f6c9e.png"},,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=(a(13),a(1)),c=a(2),m=a(5),s=a(4),u=(a(14),a(15),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={repositories:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/orgs/programming-zone").then((function(e){return e.json()})).then((function(t){e.setState({repositories:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"repo-div"},r.a.createElement("a",{href:"https://github.com/programming-zone"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fa fa-github"})," ",this.state.repositories.public_repos," repositories")))}}]),a}(n.Component)),g=a(3),h=a.n(g),p=function(){return r.a.createElement("div",{className:"nav-div"},r.a.createElement("nav",null,r.a.createElement("div",{className:"navigation-group"},r.a.createElement("h1",null,"Programming Zone ")),r.a.createElement("div",null,r.a.createElement("img",{width:"64px",height:"64px",src:h.a,alt:"logo"}))),r.a.createElement(u,null))};var d=function(){return r.a.createElement("div",{className:"header-div"},r.a.createElement("section",{className:"hero--component"},r.a.createElement("div",{className:"hero-container","data-align":"center"},r.a.createElement("h2",{className:"hero-heading"},"Commit to collaborate. Push innovation."),r.a.createElement("div",{className:"hero-copy"},r.a.createElement("p",null,"Collaborating with a community is about more than developing code. Collaboration is the freedom to ask questions and offer improvements\u2014that's the open source way. It's why we've been a part of open source communities, working side-by-side with people like you."),r.a.createElement("p",null,"Let's make something together.")))))};var E=function(e){return r.a.createElement("div",{className:"card-div"},r.a.createElement("div",{className:"card--component"},r.a.createElement("div",{className:"card-header"},r.a.createElement("a",{href:e.url},r.a.createElement("img",{height:"32px",className:"card-header-img",src:e.img,alt:"repo-logo"}))),r.a.createElement("div",{className:"card-body","data-align":"center"},r.a.createElement("h3",{className:"card-body-headline"},r.a.createElement("a",{className:"title-link",href:e.url},e.title)),r.a.createElement("p",{className:"card-body-copy"}," ",e.description," ")),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"card-footer-content padding-space","data-align":"right"},r.a.createElement("a",{className:"card-footer-link",href:e.website},r.a.createElement("i",{className:"card-footer-icon fa fa-fw fa-globe"})," Website")),"|",r.a.createElement("div",{className:"card-footer-content padding-space","data-align":"left"},r.a.createElement("a",{className:"card-footer-link",href:e.url},r.a.createElement("i",{className:"card-footer-icon fa fa-github"})," Repo")))))},f=[{id:1,img:"https://avatars3.githubusercontent.com/u/53279732?s=200&v=4",title:"Programming Zone",description:"Our Main Project",url:"https://github.com/programming-zone",website:"https://programming-zone.github.io/"},{id:2,img:"https://isocpp.org/files/img/cpp_logo.png",title:"C Plus Plus Program",description:"This Project is for the purpose of learning C++ together. Do contribute to this Project.",url:"https://github.com/programming-zone/C-Plus-Plus-Program",website:"https://programming-zone.github.io/"},{id:3,img:"https://git-scm.com/images/logo@2x.png",title:"Git Tutorials",description:"The purpose of this project is to learn Git to the beginners",url:"https://github.com/programming-zone/Git_Tutorials",website:"https://git-scm.com/"}];var b=function(e){var t=e.data.map((function(e,t){return r.a.createElement("tr",{className:t%2===0?"":"selected",key:e.id},r.a.createElement("td",null,r.a.createElement("b",null,r.a.createElement("a",{href:e.html_url},e.name))),r.a.createElement("td",{className:"hidden"},r.a.createElement("i",null,r.a.createElement("a",{href:e.html_url}," ",e.html_url," "))),r.a.createElement("td",null,r.a.createElement("code",null,r.a.createElement("b",null," ",null!==e.language?e.language:"Unknown"," "))))}));return r.a.createElement("div",{className:"project-div"},r.a.createElement("h2",null,"All Projects"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("table",{className:"project-list"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"selected"},r.a.createElement("th",null,"Project Name"),r.a.createElement("th",{className:"hidden"},"Project Website"),r.a.createElement("th",null,"Technology"))),r.a.createElement("tbody",null,r.a.createElement("br",null),t))))};var v=function(e){return r.a.createElement("div",{className:"profile-card"},r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"pp"},r.a.createElement("img",{height:"50px",width:"50px",src:e.img,alt:"profile"})),r.a.createElement("div",{className:"pp-about"},r.a.createElement("span",null,r.a.createElement("b",null," ",e.name," ")),r.a.createElement("span",null," "),r.a.createElement("span",null,r.a.createElement("small",null,r.a.createElement("a",{className:"faded",href:e.userlink}," ",e.username))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"pp-footer"},e.isOrg&&r.a.createElement("div",{className:"faded"},r.a.createElement("i",{className:"fa fa-building-o"})," ",r.a.createElement("small",null,r.a.createElement("a",{className:"faded",href:e.orgLink}," ",e.orgName," "))),r.a.createElement("div",{className:"faded"},r.a.createElement("i",{className:"fa fa-map-marker"})," ",r.a.createElement("small",{className:"faded"},e.Loc)),r.a.createElement("div",null)))))},N=[{id:1,name:"Injamul Mohammad Mollah",img:"https://avatars1.githubusercontent.com/u/43756219?s=460&u=c133586bd27db098039b668856fb7c3f1cbbea04&v=4",username:"mrinjamul",userlink:"https://github.com/mrinjamul",isOrg:!1,orgName:"Github",orgLink:"https://github.com",isLoc:!0,Loc:"Berhampore, IN"},{id:2,name:"Injamul",img:"https://avatars3.githubusercontent.com/u/43629828?s=460&u=e2219c36da773979394c6a9b90a390e0506ee434&v=4",username:"linuxuserin",userlink:"https://github.com/linuxuserin",isOrg:!0,orgName:"Programming Zone",orgLink:"https://programming-zone.github.io/",isLoc:!0,Loc:"Earth"}],y=function(){var e=N.map((function(e,t){return r.a.createElement(v,{key:t,name:e.name,img:null===e.img?"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png":e.img,username:e.username,userlink:e.userlink,isOrg:e.isOrg,orgName:e.orgName,orgLink:e.orgLink,isLoc:e.isLoc,Loc:e.Loc})}));return r.a.createElement("div",{className:"contributor-div"},r.a.createElement("div",null,r.a.createElement("h2",null,"Main Contributors"),r.a.createElement("div",{className:"con-container"},e)),r.a.createElement("div",null,r.a.createElement("h2",null,"Want to contribute?"),r.a.createElement("p",null,"We know groups can accomplish more than individuals. That\u2019s why our mission is to be the catalyst in communities of contributors, and partners creating better technology the open source way.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{className:"blue-link",href:"https://github.com/programming-zone"},"Let's Contribute"," "),r.a.createElement("i",{className:" blue-link fa fa-arrow-right "}))))};var k=function(){return r.a.createElement("div",{className:"footer-div"},r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-group"},r.a.createElement("p",{className:"footer-copyright",property:"dc:rights"},"Copyright \xa9",r.a.createElement("span",{property:"dc:dateCopyrighted"},"2019\u20132020")," ",r.a.createElement("span",{property:"dc:publisher"},"Programming Zone"))),r.a.createElement("div",null,r.a.createElement("img",{width:"64px",height:"64px",src:h.a,alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#root"},"Home")),"|",r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/programming-zone"},"Github")),"|",r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/programming-zone/programming-zone.github.io"},"Fork Me")))))},w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={repositories:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/orgs/programming-zone/repos?per_page=100").then((function(e){return e.json()})).then((function(t){e.setState({repositories:t})}))}},{key:"render",value:function(){var e=f.map((function(e){return r.a.createElement(E,{key:e.id,img:e.img,title:e.title,description:e.description,url:e.url,website:e.website})}));return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(d,null),r.a.createElement("div",{className:"band-container","data-layout":"3-up"},e),r.a.createElement(b,{data:this.state.repositories}),r.a.createElement(y,null),r.a.createElement(k,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fefc55db.chunk.js.map