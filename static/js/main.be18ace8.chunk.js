(window["webpackJsonppersonal-website"]=window["webpackJsonppersonal-website"]||[]).push([[0],{15:function(e,a,t){e.exports=t(32)},20:function(e,a,t){},21:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),i=t.n(r),o=(t(20),t(21),t(6)),c=t(1),s=function(){var e=Object(n.useRef)(null),a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],i=t[1],s=r?"nav-links nav-links-show":"nav-links",m=function(){i(!1)};return l.a.createElement("div",{ref:e,className:"nav sticky"},l.a.createElement("div",{className:"nav-name",onClick:function(){c.animateScroll.scrollToTop()}},"Thomas Armena"),l.a.createElement("div",{className:s},l.a.createElement(c.Link,{className:"nav-link",activeClass:"active",to:"about-me",spy:!0,smooth:!0,offset:-20,duration:500,onClick:m},"About Me"),l.a.createElement(c.Link,{className:"nav-link",activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-20,duration:500,onClick:m},"Projects"),l.a.createElement(c.Link,{className:"nav-link",activeClass:"active",to:"work-experience",spy:!0,smooth:!0,offset:-20,duration:500,onClick:m},"Work Experience"),l.a.createElement("a",{id:"nav-resume",href:"./ThomasResume.pdf"},"Resume")),l.a.createElement("div",{className:"nav-menu-button",onClick:function(){i(!r)}},l.a.createElement("i",{className:"material-icons"},"menu")))},m=function(e){var a=e.text,t=Object(n.useState)(!0),r=Object(o.a)(t,2),i=r[0],c=r[1];Object(n.useEffect)(function(){var e=setInterval(function(){c(function(e){return!e})},500);return function(){return clearInterval(e)}},[]);var s=i?"|":"";return l.a.createElement("div",{className:"terminal-text"},l.a.createElement("b",null,">"),a,l.a.createElement("b",null,s))},u=function(){return l.a.createElement(c.Element,{name:"about-me",className:"about-me"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,l.a.createElement(m,{text:"About Me"})),l.a.createElement("hr",null),l.a.createElement("p",null,"Hey! I'm Thomas, an aspiring Software Engineer. ",l.a.createElement("br",null),l.a.createElement("br",null),"I am a strong believer of the ",l.a.createElement("b",null,"KISS")," design principle (",l.a.createElement("b",null,"Keep It Simple Stupid!"),"). I do my best to apply it in developing maintainable and readable code, as well as clean user interfaces. ",l.a.createElement("br",null),l.a.createElement("br",null),"I am interested in many areas, including operating systems, cloud services, web development, and game development. As a tech junkie, I hope be involved with the bleeding edge of technology. It is this desire that pushes me to learn new things everyday. ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-github-square"}),l.a.createElement("a",{href:"https://github.com/thomas-armena"}," thomas-armena"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope-square"}),"   armenat@mcmaster.ca",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-linkedin"}),l.a.createElement("a",{href:"https://www.linkedin.com/in/thomas-armena/"}," thomas-armena"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-file"}),l.a.createElement("a",{href:"/ThomasResume.pdf",download:"thomas-armena-resume"},"    download my resume ")))},d=function(){return l.a.createElement(c.Element,{name:"projects"},l.a.createElement("br",null),l.a.createElement("h1",null,l.a.createElement(m,{text:"Projects"})),l.a.createElement("hr",null),l.a.createElement("h3",null,"Chess Dash"),"A mobile arcade puzzle game inspired by Chess (available on the Google Playstore)",l.a.createElement("ul",null,l.a.createElement("li",null,"Designed an algorithm which creates unlimited randomly-generated puzzles (Dart)"),l.a.createElement("li",null,"Created a responsive mobile UI using Google\u2019s Flutter UI kit")),l.a.createElement("img",{className:"pic-phone",src:"chess-dash-menu.png"}),l.a.createElement("img",{className:"pic-phone",src:"chess-dash-gameplay.png"}),l.a.createElement("h3",null,"Postra"),"A web application for making digital collages and sharing them online",l.a.createElement("ul",null,l.a.createElement("li",null,"Built an online editor in React that lets you perform vector transformation on images and text"),l.a.createElement("li",null,"Created a backend service to store images and collage layouts, aswell as handle user authentication (node, express, mongo)")),l.a.createElement("img",{className:"pic",src:"postra.png"}),l.a.createElement("h3",null,"Chaos"),"1st place submission for a game programming competition (Rogue-like top down shooter)",l.a.createElement("ul",null,l.a.createElement("li",null,"Worked in a team of four to brainstorm ideas, design, develop, and debug the game"),l.a.createElement("li",null,"Implemented the movement mechanics, equipment system, and random level generation (Game Maker Studio 2)"),l.a.createElement("li",null,"Pitched game to judges alongside my team in Sheridan College, which included Computer Science instructors")),l.a.createElement("h3",null,"Finstagram"),"Top 5 project submission at a CIBC Hackathon",l.a.createElement("ul",null,l.a.createElement("li",null,"Created a mobile web app in React with a live feed of financial advice"),l.a.createElement("li",null,"Leveraged open banking APIs to obtain transactional data to base advice off of"),l.a.createElement("li",null,"Placed top 5 out of 25 teams")),l.a.createElement("img",{className:"pic-phone",src:"finstagram.png"}),l.a.createElement("h3",null,"Git Plant"),"Your own linux terminal plant that grows as long as you stay active on Github",l.a.createElement("ul",null,l.a.createElement("li",null,"Used a fractal algorithm to create randomly generated plants (C++)"),l.a.createElement("li",null,"Rendered the plant in the terminal only using ASCII characters")))},h=function(){return l.a.createElement(c.Element,{name:"work-experience"},l.a.createElement("br",null),l.a.createElement("h1",null,l.a.createElement(m,{text:"Work Experience"})),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Contract Full Stack Developer - University of Toronto "),l.a.createElement("aside",null,"Sep 2018 - Sep 2019"),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed an interactive learning website for a first year anatomy course"),l.a.createElement("li",null,"Designed a RESTful API that handles student authentication and progress in Golang and using MongoDB"),l.a.createElement("li",null,"Created various exercises in React such as drawing ligaments on 3D models, drag and drop choices, etc"),l.a.createElement("li",null,"Implemented scalable state management for the frontend using redux")),l.a.createElement("img",{className:"pic",src:"kinundrum.png"}),l.a.createElement("h3",null,"Software Developer (Co-op) - CIBC Innovation Lab "),l.a.createElement("aside",null,"Jan-Aug 2019"),l.a.createElement("ul",null,l.a.createElement("li",null,"Created a system of biometric camera\u2019s that collects and stores facial data into a MySQL database and can be controlled remotely (raspberry pis and amazon web services)"),l.a.createElement("li",null,"Worked with one other co-op to prototype a smart device station that allows you to connect and use peripheral devices (printers, scanners, card readers) via bluetooth proximity and secured wireless connection (node and electron)",l.a.createElement("ul",null,l.a.createElement("li",null,"Demoed this project to stakeholders which included VPs and seniors of a few departments"),l.a.createElement("li",null,"Held meetings to handoff knowledge of the architecture and code to the engineers that will bring the project into production"))),l.a.createElement("li",null,"Worked in a team of 5 to develop a digital kiosk assistant for future banking centres",l.a.createElement("ul",null,l.a.createElement("li",null,"Created the \u201dhearing\u201d capabilities of the AI, leveraging mic arrays attached to a raspberry pi to capture audio and convert it to text using various AWS APIs"),l.a.createElement("li",null,"Contributed to the high-level design architecture of the deep learning model used for the AI, experimented with recurrent neural networks to see how they could be used to leverage contextual information to make decisions")))),l.a.createElement("h3",null,"Application Developer (Co-op) - Canadian Imperial Bank of Commerce "),l.a.createElement("aside",null,"Sep-Dec 2018"),l.a.createElement("ul",null,l.a.createElement("li",null,"Automated banking processes in a z/OS system using REXX and JCL")),l.a.createElement("h3",null,"Innovation Engineer and QA Automation (Co-op) - World Vision Canada "),l.a.createElement("aside",null,"May-Aug 2018"),l.a.createElement("ul",null,l.a.createElement("li",null,"Created a hand gesture controlled minigame alongside 2 other developers in Unity (C sharp) using LEAP (hand motion detector) in order promote an upcoming Netflix documentary"),l.a.createElement("li",null,"The project was showcased in cineplex on the big screen during the launch of the documentary"),l.a.createElement("li",null,"Created a web scraper in python and selenium in order to introduce integration tests into the CI/CD pipeline")))};var E=function(){return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement("div",{className:"content"},l.a.createElement(u,null),l.a.createElement(d,null),l.a.createElement(h,null)))};i.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.be18ace8.chunk.js.map