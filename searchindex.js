Search.setIndex({alltitles:{"1. Correction":[[1,"correction"]],"2. Warning":[[1,"warning"]],"3. Temporary ban":[[1,"temporary-ban"]],"4. Permanent ban":[[1,"permanent-ban"]],"Addressing review feedback":[[2,"addressing-review-feedback"]],"After the project have merged your pull request":[[2,"after-the-project-have-merged-your-pull-request"]],AlmaLinux:[[6,"almalinux"]],"Arch Linux":[[6,"arch-linux"]],"Asterisk configuration files":[[6,null]],Attribution:[[1,"attribution"]],"Code of conduct":[[2,"code-of-conduct"]],"Coding rules":[[2,"coding-rules"]],"Commit message body":[[2,"commit-message-body"]],"Commit message footer":[[2,"commit-message-footer"]],"Commit message format":[[2,"commit-message-format"]],"Commit message header":[[2,"commit-message-header"]],Contents:[[0,"contents"]],Contributing:[[2,null],[6,"contributing"]],"Contributor covenant code of conduct":[[1,null]],Contributors:[[6,"contributors"]],"Debian and Ubuntu Linux":[[6,"debian-and-ubuntu-linux"]],Developing:[[2,"developing"]],Documentation:[[6,"documentation"]],Enforcement:[[1,"enforcement"]],"Enforcement guidelines":[[1,"enforcement-guidelines"]],"Enforcement responsibilities":[[1,"enforcement-responsibilities"]],"File and directory name conventions":[[2,"file-and-directory-name-conventions"]],"Found a bug":[[2,"found-a-bug"]],"General questions":[[8,"general-questions"]],"Getting started":[[6,"getting-started"]],"Getting the sources":[[2,"getting-the-sources"]],Installation:[[6,"installation"]],Installing:[[2,"installing"]],License:[[6,"license"]],"Missing a feature":[[2,"missing-a-feature"]],OpenWrt:[[6,"openwrt"]],"Our pledge":[[1,"our-pledge"]],"Our standards":[[1,"our-standards"]],Prerequisites:[[2,"prerequisites"]],"Project follows":[[2,"project-follows"]],"Project status":[[6,"project-status"]],"Question or problem":[[2,"question-or-problem"]],"Reporting a vulnerability":[[7,"reporting-a-vulnerability"]],"Revert commits":[[2,"revert-commits"]],"Reviewing a pull request":[[2,"reviewing-a-pull-request"]],Scope:[[1,"scope"],[2,"scope"]],Security:[[6,"security"]],"Security policy":[[7,null]],"Submission guidelines":[[2,"submission-guidelines"]],"Submitting a pull request":[[2,"submitting-a-pull-request"]],"Submitting an issue":[[2,"submitting-an-issue"]],Summary:[[2,"summary"]],Support:[[6,"support"],[8,null]],"Supported versions":[[7,"supported-versions"]],Testing:[[2,"testing"]],Type:[[2,"type"]],"Updating the commit message":[[2,"updating-the-commit-message"]],Usage:[[6,"usage"]],"Welcome to asterisk configuration files\u2019s documentation":[[0,null]],"[201](default-aors)":[[4,"id6"]],"[201](default-from-internal)":[[4,"id8"]],"[201](default-password)":[[4,"id7"]],"[clients]":[[5,"clients"]],"[default-aors](!)":[[4,"default-aors"]],"[default-from-external](!)":[[4,"default-from-external"]],"[default-from-internal](!)":[[4,"default-from-internal"]],"[default-password](!)":[[4,"default-password"]],"[from-external]":[[3,"from-external"]],"[from-internal]":[[3,"from-internal"]],"[general]":[[3,"general"]],"[global]":[[4,"global"]],"[globals]":[[3,"globals"]],"[isdn-1/isdn-2/gsm](default-aors)":[[4,"isdn-1-isdn-2-gsm-default-aors"]],"[isdn-1/isdn-2/gsm](default-from-external)":[[4,"isdn-1-isdn-2-gsm-default-from-external"]],"[isdn-1/isdn-2/gsm](default-password)":[[4,"isdn-1-isdn-2-gsm-default-password"]],"[transport-udp]":[[4,"transport-udp"]],"allow = ulaw":[[4,"allow-ulaw"],[4,"id4"]],"aors = 201":[[4,"aors-201"]],"aors = isdn-1/isdn-2/gsm":[[4,"aors-isdn-1-isdn-2-gsm"]],"auth = 201":[[4,"auth-201"]],"auth = isdn-1/isdn-2/gsm":[[4,"auth-isdn-1-isdn-2-gsm"]],"auth_type = userpass":[[4,"auth-type-userpass"]],"autofallthrough=yes":[[3,"autofallthrough-yes"]],"bind = 0.0.0.0":[[4,"bind-0-0-0-0"]],"context = from-external":[[4,"context-from-external"]],"context = from-internal":[[4,"context-from-internal"]],"debug = yes":[[4,"debug-yes"]],"direct_media = no":[[4,"direct-media-no"],[4,"id5"]],"disallow = all":[[4,"disallow-all"],[4,"id3"]],"dtmf_mode = rfc4733":[[4,"dtmf-mode-rfc4733"],[4,"id2"]],"exten => 201,1,NoOP(${CALLERID})":[[3,"exten-201-1-noop-callerid"]],"exten => _0690XXXXXX,1,Hangup/_0681XXXXXX,1,Hangup":[[3,"exten-0690xxxxxx-1-hangup-0681xxxxxx-1-hangup"]],"exten => _06XXXXXXXX,1,Ringing":[[3,"exten-06xxxxxxxx-1-ringing"]],"exten => _06[237]0XXXXXXX,1,Ringing":[[3,"exten-06-237-0xxxxxxx-1-ringing"]],"extensions.conf":[[3,null]],"max_contacts = 1":[[4,"max-contacts-1"]],"member => SIP/201 and member => SIP/202":[[5,"member-sip-201-and-member-sip-202"]],"password = important-change-password-at-first-use":[[4,"password-important-change-password-at-first-use"]],"pjsip.conf":[[4,null]],"protocol = udp":[[4,"protocol-udp"]],"queues.conf":[[5,null]],"retry = 3":[[5,"retry-3"]],"same => 2,Dial(SIP/${EXTEN}@gsm,60)":[[3,"same-2-dial-sip-exten-gsm-60"]],"same => 3,GotoIf($[${DIALSTATUS}=CHANUNAVAIL]?:5)":[[3,"same-3-gotoif-dialstatus-chanunavail-5"]],"same => 4/7/6, Hangup":[[3,"same-4-7-6-hangup"]],"same => 5, Dial(SIP/${EXTEN}@gsm,60)":[[3,"same-5-dial-sip-exten-gsm-60"]],"same => 6,GotoIf($[${DIALSTATUS}=CHANUNAVAIL]?:8)":[[3,"same-6-gotoif-dialstatus-chanunavail-8"]],"same => 8,Dial(SIP/${EXTEN}@isdn-2,60)":[[3,"same-8-dial-sip-exten-isdn-2-60"]],"same => n,Answer":[[3,"same-n-answer"]],"same => n,Hangup":[[3,"same-n-hangup"]],"same => n,Queue(clients)":[[3,"same-n-queue-clients"]],"same => n,Ringing":[[3,"same-n-ringing"]],"static=yes":[[3,"static-yes"]],"strategy = ringall":[[5,"strategy-ringall"]],"timeout = 15":[[5,"timeout-15"]],"type = aor":[[4,"type-aor"]],"type = auth":[[4,"type-auth"]],"type = endpoint":[[4,"type-endpoint"],[4,"id1"]],"type = global":[[4,"type-global"]],"type = transport":[[4,"type-transport"]],"username = 201":[[4,"username-201"]],"username = isdn-1/isdn-2/gsm":[[4,"username-isdn-1-isdn-2-gsm"]],"wirteprotect=no":[[3,"wirteprotect-no"]],"wrapuptime = 1000":[[5,"wrapuptime-1000"]]},docnames:["index","pages/code-of-conduct","pages/contributing","pages/extensions-conf","pages/pjsip-conf","pages/queues-conf","pages/readme","pages/security","pages/support"],envversion:{sphinx:64,"sphinx.domains.c":3,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":9,"sphinx.domains.index":1,"sphinx.domains.javascript":3,"sphinx.domains.math":2,"sphinx.domains.python":4,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1},filenames:["index.rst","pages/code-of-conduct.rst","pages/contributing.rst","pages/extensions-conf.rst","pages/pjsip-conf.rst","pages/queues-conf.rst","pages/readme.rst","pages/security.rst","pages/support.rst"],indexentries:{},objects:{},objnames:{},objtypes:{},terms:{"":[1,2,3],0:0,"06":3,"0690xxxxxx":3,"0xxxxxxx":0,1:0,1000:0,15:0,2:0,20:2,201:0,202:[0,3],237:0,3:0,4:0,4733:4,5:0,6:0,60:0,7:0,8:0,8601:6,9:[2,3],A:[1,2,3,5],Being:1,For:[1,2],If:[2,3],In:[2,3,4,5],It:[2,3,4,5],No:[1,2],Not:2,Of:4,One:2,Such:2,That:2,The:[1,2,3,4,5,8],These:[3,6],To:2,_0036:3,_06:0,_0681xxxxxx:0,_0690xxxxxx:0,_06xxxxxxxx:0,about:[1,2],abus:1,accept:[1,2],access:[3,4],accident:3,account:[1,2],accur:2,across:2,act:[1,3],action:[1,3],activ:[0,3],ad:[2,3],adapt:1,add:2,addit:5,address:[0,1,3,4],adher:2,advanc:1,affect:[1,2],after:[0,5],ag:1,again:5,agent:5,aggress:1,alaw:6,algorithm:2,align:1,all:[0,1,2,3,5,8],allow:[0,1,3],almalinux:0,alreadi:2,also:[1,2],alter:3,alwai:3,amend:2,ami:3,among:[5,6],amount:5,an:[0,1,3,4,5],angular:2,ani:[1,3,4,5],anoth:[3,5],answer:[0,1,5],aor:0,api:2,apolog:1,apologi:1,appear:1,appli:[1,2,3,4],applic:3,appoint:1,appropri:[1,2],apt:6,ar:[1,2,3,4,5,6,8],arch:0,aren:2,argument:3,around:1,ask:[2,8],asterisk:[2,3,4,5],"asterisk-dialplan":[0,3,4,5],"asterisk-pbx":[0,3,4,5],"asterisk-serv":[0,3,4,5],attack:1,attempt:[4,5],attent:1,attilasomogyi:[2,6],attribut:0,auth:0,auth_typ:0,authent:4,author:4,autofallthrough:0,automat:[2,3],avail:[1,3,4,5],avoid:[1,2,8],b:2,back:2,backup:6,ban:0,base:[4,5],baselin:4,becaus:2,been:2,befor:[2,5],beforehand:2,begin:2,behavior:[1,2,3,4,5,6],being:[2,3,4,5],belong:5,below:5,best:1,bind:0,blank:2,block:4,bodi:[0,1],bracket:5,branch:[2,3,6],break:2,bridg:6,broccoli:2,bug:0,build:[2,3],call:[3,4,5],caller:[3,5],callerid:0,can:[2,3,4,5],cannot:3,capit:2,case:[2,3],cast:1,cd:2,chanc:2,chang:[0,2,3],changelog:2,channel:[1,2,3],chanunavail:0,charact:2,characterist:1,check:[2,3],checkout:2,ci:2,circl:2,citizen:2,clarifi:1,clariti:1,class:1,classif:2,clear:2,cli:3,client:0,clone:[2,6],close:[2,8],code:0,code_of_conduct:1,codec:[4,6],color:1,com:[2,6],command:[2,3],comment:1,commit:[0,1],common:[1,4],commun:[1,2,4],comparison:2,complaint:1,complet:[3,5],condit:3,conduct:0,conf:[0,6],config:[0,3,4,5],configur:[2,3,4,5],confirm:2,conform:2,connect:[4,5],consequ:1,consid:1,consist:2,consol:3,construct:1,contact:4,contain:[2,3,4],content:2,context:[0,2,3],continu:[1,3],contribut:[0,1],contributor:0,control:3,convent:0,correct:[0,2],correspond:4,could:1,coven:0,cp:6,creat:[2,4],credenti:4,css:2,current:[3,4],custom:3,d:2,date:6,debian:0,debug:[0,3],decis:1,deem:1,default:[0,3],defin:[2,3,4,5],definit:[3,4],delet:[2,3],demonstr:1,depend:2,deprec:2,derogatori:1,describ:2,descript:2,design:2,destin:3,detail:[2,5],determin:[1,3,4,5],develop:0,devic:4,dial:0,dialplan:3,dialstatu:0,differ:[1,3],digit:3,direct:[3,4],direct_media:0,directori:0,disabl:1,disallow:0,disconnect:5,discuss:2,disparag:1,distribut:5,divers:1,dnf:6,doc:2,document:2,doesn:2,don:2,done:2,dot:2,draw:2,dtmf:4,dtmf_mode:0,duplic:2,durat:3,dure:1,dynam:3,e:[1,3],each:[2,3],earlier:2,easier:2,econom:1,edit:[1,2],educ:1,effici:2,effort:2,either:[2,3],email:1,empathi:1,empti:2,encrypt:4,end:[2,3],endpoint:[0,3],enforc:[0,2],ensur:[2,3],environ:1,etc:6,ethnic:1,event:1,everyon:1,exampl:[1,2,4,5],except:2,exchang:6,execut:3,exist:2,experi:1,explain:2,explan:1,explicit:1,express:1,exten:0,extens:[0,2,6],extern:[0,1,2],f:2,fair:1,fairli:1,fall:3,faq:1,feat:2,featur:0,feedback:[0,1],ff:2,field:2,file:[3,4,5],filenam:2,first:[0,2,3],fix:2,fixup:2,flow:3,focus:1,follow:[0,1,3,4],footer:0,forc:2,fork:2,format:[0,6],found:[0,3],free:1,from:[0,1,2],full:2,further:3,gender:1,gener:[0,2],get:0,git:[2,6],github:[2,6],give:[1,2],given:3,global:0,go:[2,8],good:2,gotoif:0,gracefulli:1,gsm:0,guid:2,guidelin:[0,6],gulp:2,handl:[3,4,5],hang:3,hangup:0,happen:3,harass:1,harm:1,hash:2,have:[0,1],haven:2,head:2,header:[0,4],healthi:1,help:2,histori:2,homebrew:2,how:[2,3,4,5],html:[1,2],http:[1,6],hyphen:2,i:[0,1,2,3,4,5,8],id:[3,4],ident:[1,4],identifi:[2,4,5],illustr:2,imageri:1,immedi:3,immut:3,impact:[1,2],imper:2,implement:4,import:0,improv:2,inappropri:1,incid:1,includ:[1,2,3,6],inclus:1,incom:[3,4,5],increas:2,indic:[3,4],individu:[1,3,4],inform:[1,2],inherit:4,initi:[3,4,6],insid:5,inspir:[1,2],instal:0,instanc:1,instruct:[2,3],insult:1,integ:3,intend:3,interact:[1,2],interfac:[3,4],intern:0,investig:[1,2],invis:1,involv:1,ip:4,isdn:0,iso:6,issu:[0,1,4,8],its:[2,4],j:2,java:2,javascript:2,jira:2,jump:3,just:[1,2],keep:2,keyword:3,kind:1,lab:2,ladder:1,languag:1,last:2,latest:[2,7],layer:4,lead:[1,2],leader:1,learn:1,leas:2,least:2,letter:2,level:[1,3],licens:0,like:[1,2],line:[2,3,4,5],linux:0,list:[2,5],local:[2,4],log:4,logic:3,login:2,long:2,made:[3,5],mai:[1,2],mail:1,main:2,maintain:7,make:[1,2,3,4],manag:[2,3,4],mandatori:2,mani:5,mark:3,match:3,max_contact:0,maximum:[3,4],mean:[3,4,5],media:[1,4],member:[0,1,2],mention:2,merg:0,messag:[0,3,4],method:[2,4,6],might:2,migrat:2,millisecond:5,mind:2,minim:2,miss:0,mistak:1,mode:2,moder:1,modifi:3,monitor:5,more:2,motiv:2,move:5,mozilla:1,multipl:3,must:2,my:2,n:0,name:[0,4,5],nation:1,natur:1,necessari:2,need:2,neither:2,network:[3,4],new:[1,2],next:[3,5],node:2,none:2,noop:0,nor:2,note:[2,5],npm:2,number:[2,3,4,5],object:4,oblig:1,offens:1,offer:6,offici:1,offlin:1,often:2,one:[2,5],onli:2,onlin:1,open:[1,2,8],openwrt:0,opinion:1,opkg:6,option:[2,3,4,5],org:1,orient:1,origin:[2,3],other:[1,2,4,6],otherwis:[1,3],our:0,out:[2,3],outgo:[3,4],outlin:2,outsid:[2,3],over:4,overal:1,overflow:8,overridden:[3,4],packag:2,pacman:6,paramet:[3,4,5],part:[3,5],particip:1,pass:2,password:0,patch:2,path:2,pattern:[1,3],pbx:[3,5],peer:4,peopl:[1,8],perceiv:2,perf:2,perform:[2,3],period:[1,2],perman:0,permiss:1,person:[1,2],phone:3,phrase:2,physic:1,pjsip:[0,6],place:[2,3],plai:3,plan:3,pleas:[2,7],pledg:0,point:2,polici:0,polit:1,port:4,posit:[1,3],post:1,pr:2,prefix:3,prerequisit:0,present:2,previou:3,print:3,prioriti:3,privaci:1,privat:[1,6],problem:0,process:3,profession:1,project:[0,8],promptli:1,properti:[4,5],protect:3,protocol:[0,3,6],provid:[1,3,4],pstn:3,public:[1,2],publish:1,pull:0,purpos:[2,3,4],push:2,put:3,python:2,question:[0,1],queue:0,r:6,race:1,re:[2,6],reach:5,read:[2,6],readi:3,readm:2,reason:[1,2],rebas:2,receiv:[2,3,4],recipi:3,recommend:2,record:4,recurs:[2,6],redirect:8,refactor:2,refer:[2,3,4,5],referenc:3,refresh:6,regardless:1,regexp:2,regist:4,reject:1,relat:[2,4,8],releas:[2,3],religion:1,remain:3,remot:[2,4],remov:1,report:[0,1],repositori:[2,7],repres:[1,3],reproduct:2,request:[0,1,8],requir:2,reserv:2,resourc:[3,4],respect:1,respons:[0,5],rest:5,restart:6,result:3,retri:0,revert:0,review:[0,1],rfc:4,rfc4733:0,right:[1,2],ring:[0,5],ringal:0,rm:2,rout:3,rtp:6,rule:[0,3],run:[2,3],rust:2,same:[0,5],sauc:2,scenario:3,scope:[0,4],script:2,search:[2,3],second:[3,5,6],section:[2,3,4],secur:[0,1,2,4],see:[1,2],select:2,send:[2,4],sent:4,sentenc:3,separ:2,seri:[1,3],seriou:1,session:[4,6],set:[1,3,4,5,6],setup:[2,4],sex:1,sexual:1,shell:2,short:2,should:[2,3,4,5],side:3,signal:3,similar:2,similarli:2,simpl:[2,6],simpli:3,simultan:5,singl:1,sip:[0,4],size:1,so:3,social:1,socio:1,sort:1,sound:3,sourc:[0,4],space:[1,2],spec:2,special:2,specif:[2,3,4],specifi:[1,3,4,5],sql:2,squar:5,src:6,stack:[4,8],standard:0,start:[0,2,3],state:3,statement:3,static:0,statu:[0,1,3],step:[3,5],still:2,strategi:0,string:2,structur:2,style:2,submiss:0,submit:0,submodul:[2,6],succinct:2,sudo:6,suggest:2,suit:2,summari:0,supersed:2,support:[0,2],sustain:1,sync:6,syntax:3,system:[2,3,4,6],systemat:8,systemctl:6,sysupgrad:6,t:2,take:[1,5],taken:3,task:5,team:2,templat:[1,4],temporari:0,tens:2,term:1,termin:[3,5],test:[0,3],thank:2,thei:[1,2,3,5],them:5,thi:[0,1,2,3,4,5],those:[1,2,3],threaten:1,through:[1,2,3],throughout:2,ticket:2,time:[1,3,5],timeout:0,tone:[3,4],toward:1,tracker:2,transact:4,transfer:3,translat:1,transport:0,tri:3,troll:1,tutori:2,two:[3,5],type:0,typescript:2,typic:[3,6],typo:2,u:1,ubuntu:0,udp:0,ui:2,ulaw:[0,6],unaccept:1,unalt:3,unansw:5,unavail:3,under:[0,4],uniqu:4,unit:2,unless:3,unprofession:1,unsolicit:1,until:5,unwelcom:1,up:[3,4,5],updat:[0,6],upgrad:6,upstream:2,us:[0,1,2,3,5,8],usag:0,user:4,usernam:[0,2],userpass:0,valu:[3,4,5],variabl:3,verifi:4,version:[0,1,2],via:[1,3],viewpoint:1,violat:1,visibl:1,voic:4,voip:4,vou:2,vulner:0,wa:1,wai:[1,3,4,5],wait:[3,5],want:3,warn:0,we:1,web:2,welcom:1,well:1,were:1,what:[1,2,3],when:[1,2,3,4],where:3,which:[1,2,3,4],while:3,who:[2,5],why:[1,2],wiki:1,wirteprotect:0,within:[1,2,3,4],without:[1,2],word:2,work:2,wrap:5,wrapuptim:0,writeprotect:3,written:1,www:1,yarn:2,ye:[0,7],you:[2,3],your:0,z0:2},titles:["Welcome to asterisk configuration files\u2019s documentation","Contributor covenant code of conduct","Contributing","extensions.conf","pjsip.conf","queues.conf","Asterisk configuration files","Security policy","Support"],titleterms:{"":0,0:4,"0xxxxxxx":3,1:[1,3,4],1000:5,15:5,2:[1,3,4],201:[3,4,5],202:5,237:3,3:[1,3,5],4:[1,3],5:3,6:3,60:3,7:3,8:3,_06:3,_0681xxxxxx:3,_0690xxxxxx:3,_06xxxxxxxx:3,address:2,after:2,all:4,allow:4,almalinux:6,an:2,answer:3,aor:4,arch:6,asterisk:[0,6],attribut:1,auth:4,auth_typ:4,autofallthrough:3,ban:1,bind:4,bodi:2,bug:2,callerid:3,chang:4,chanunavail:3,client:[3,5],code:[1,2],commit:2,conduct:[1,2],conf:[3,4,5],configur:[0,6],content:0,context:4,contribut:[2,6],contributor:[1,6],convent:2,correct:1,coven:1,debian:6,debug:4,default:4,develop:2,dial:3,dialstatu:3,direct_media:4,directori:2,disallow:4,document:[0,6],dtmf_mode:4,endpoint:4,enforc:1,exten:3,extens:3,extern:[3,4],featur:2,feedback:2,file:[0,2,6],first:4,follow:2,footer:2,format:2,found:2,from:[3,4],gener:[3,8],get:[2,6],global:[3,4],gotoif:3,gsm:[3,4],guidelin:[1,2],hangup:3,have:2,header:2,import:4,instal:[2,6],intern:[3,4],isdn:[3,4],issu:2,licens:6,linux:6,max_contact:4,member:5,merg:2,messag:2,miss:2,n:3,name:2,noop:3,openwrt:6,our:1,password:4,perman:1,pjsip:4,pledg:1,polici:7,prerequisit:2,problem:2,project:[2,6],protocol:4,pull:2,question:[2,8],queue:[3,5],report:7,request:2,respons:1,retri:5,revert:2,review:2,rfc4733:4,ring:3,ringal:5,rule:2,same:3,scope:[1,2],secur:[6,7],sip:[3,5],sourc:2,standard:1,start:6,static:3,statu:6,strategi:5,submiss:2,submit:2,summari:2,support:[6,7,8],temporari:1,test:2,timeout:5,transport:4,type:[2,4],ubuntu:6,udp:4,ulaw:4,updat:2,us:4,usag:6,usernam:4,userpass:4,version:7,vulner:7,warn:1,welcom:0,wirteprotect:3,wrapuptim:5,ye:[3,4],your:2}})