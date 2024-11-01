var stopwords=["a","and","are","as","at","be","but","by","for","if","in","into","is","it","near","no","not","of","on","or","such","that","the","their","then","there","these","they","this","to","was","will","with"],Stemmer=function(){var h={ational:'ate',tional:'tion',enci:'ence',anci:'ance',izer:'ize',bli:'ble',alli:'al',entli:'ent',eli:'e',ousli:'ous',ization:'ize',ation:'ate',ator:'ate',alism:'al',iveness:'ive',fulness:'ful',ousness:'ous',aliti:'al',iviti:'ive',biliti:'ble',logi:'log'},g={icate:'ic',ative:'',alize:'al',iciti:'ic',ical:'ic',ful:'',ness:''},j="[^aeiou]",d="[aeiouy]",a=j+"[^aeiouy]*",b=d+"[aeiou]*",e="^("+a+")?"+b+a,i="^("+a+")?"+b+a+"("+b+")?$",c="^("+a+")?"+b+a+b+a,f="^("+a+")?"+d;this.stemWord=function(b){var r=b,o,n,k,j,l,p,q,m;return b.length<3?b:(n=b.substr(0,1),n=="y"&&(b=n.toUpperCase()+b.substr(1)),j=/^(.+?)(ss|i)es$/,l=/^(.+?)([^s])s$/,j.test(b)?b=b.replace(j,"$1$2"):l.test(b)&&(b=b.replace(l,"$1$2")),j=/^(.+?)eed$/,l=/^(.+?)(ed|ing)$/,j.test(b)?(m=j.exec(b),j=new RegExp(e),j.test(m[1])&&(j=/.$/,b=b.replace(j,""))):l.test(b)&&(m=l.exec(b),k=m[1],l=new RegExp(f),l.test(k)&&(b=k,l=/(at|bl|iz)$/,p=new RegExp("([^aeiouylsz])\\1$"),q=new RegExp("^"+a+d+"[^aeiouwxy]$"),l.test(b)?b=b+"e":p.test(b)?(j=/.$/,b=b.replace(j,"")):q.test(b)&&(b=b+"e"))),j=/^(.+?)y$/,j.test(b)&&(m=j.exec(b),k=m[1],j=new RegExp(f),j.test(k)&&(b=k+"i")),j=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,j.test(b)&&(m=j.exec(b),k=m[1],o=m[2],j=new RegExp(e),j.test(k)&&(b=k+h[o])),j=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,j.test(b)&&(m=j.exec(b),k=m[1],o=m[2],j=new RegExp(e),j.test(k)&&(b=k+g[o])),j=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,l=/^(.+?)(s|t)(ion)$/,j.test(b)?(m=j.exec(b),k=m[1],j=new RegExp(c),j.test(k)&&(b=k)):l.test(b)&&(m=l.exec(b),k=m[1]+m[2],l=new RegExp(c),l.test(k)&&(b=k)),j=/^(.+?)e$/,j.test(b)&&(m=j.exec(b),k=m[1],j=new RegExp(c),l=new RegExp(i),p=new RegExp("^"+a+d+"[^aeiouwxy]$"),(j.test(k)||l.test(k)&&!p.test(k))&&(b=k)),j=/ll$/,l=new RegExp(c),j.test(b)&&l.test(b)&&(j=/.$/,b=b.replace(j,"")),n=="y"&&(b=n.toLowerCase()+b.substr(1)),b)}}