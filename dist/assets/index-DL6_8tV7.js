(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();function Ta(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var De=Ta();function Li(a){De=a}var no={exec:()=>null};function E(a,e=""){let o=typeof a=="string"?a:a.source,t={replace:(i,s)=>{let r=typeof s=="string"?s:s.source;return r=r.replace(J.caret,"$1"),o=o.replace(i,r),t},getRegex:()=>new RegExp(o,e)};return t}var Tt=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),J={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}#`),htmlBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}<(?:[a-z].*>|!--)`,"i")},Rt=/^(?:[ \t]*(?:\n|$))+/,It=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ot=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,po=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Dt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ra=/(?:[*+-]|\d{1,9}[.)])/,Ni=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,zi=E(Ni).replace(/bull/g,Ra).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Mt=E(Ni).replace(/bull/g,Ra).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ia=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Lt=/^[^\n]+/,Oa=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Nt=E(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Oa).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),zt=E(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ra).getRegex(),Lo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Da=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ft=E("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Da).replace("tag",Lo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Fi=E(Ia).replace("hr",po).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lo).getRegex(),_t=E(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Fi).getRegex(),Ma={blockquote:_t,code:It,def:Nt,fences:Ot,heading:Dt,hr:po,html:Ft,lheading:zi,list:zt,newline:Rt,paragraph:Fi,table:no,text:Lt},ci=E("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",po).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lo).getRegex(),qt={...Ma,lheading:Mt,table:ci,paragraph:E(Ia).replace("hr",po).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ci).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Lo).getRegex()},Bt={...Ma,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Da).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:no,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(Ia).replace("hr",po).replace("heading",` *#{1,6} *[^
]`).replace("lheading",zi).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Gt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$t=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_i=/^( {2,}|\\)\n(?!\s*$)/,jt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,No=/[\p{P}\p{S}]/u,La=/[\s\p{P}\p{S}]/u,qi=/[^\s\p{P}\p{S}]/u,Ht=E(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,La).getRegex(),Bi=/(?!~)[\p{P}\p{S}]/u,Wt=/(?!~)[\s\p{P}\p{S}]/u,Vt=/(?:[^\s\p{P}\p{S}]|~)/u,Ut=E(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Tt?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Gi=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Yt=E(Gi,"u").replace(/punct/g,No).getRegex(),Qt=E(Gi,"u").replace(/punct/g,Bi).getRegex(),$i="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Jt=E($i,"gu").replace(/notPunctSpace/g,qi).replace(/punctSpace/g,La).replace(/punct/g,No).getRegex(),Xt=E($i,"gu").replace(/notPunctSpace/g,Vt).replace(/punctSpace/g,Wt).replace(/punct/g,Bi).getRegex(),Kt=E("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,qi).replace(/punctSpace/g,La).replace(/punct/g,No).getRegex(),Zt=E(/\\(punct)/,"gu").replace(/punct/g,No).getRegex(),es=E(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),os=E(Da).replace("(?:-->|$)","-->").getRegex(),as=E("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",os).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Po=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,is=E(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Po).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ji=E(/^!?\[(label)\]\[(ref)\]/).replace("label",Po).replace("ref",Oa).getRegex(),Hi=E(/^!?\[(ref)\](?:\[\])?/).replace("ref",Oa).getRegex(),ts=E("reflink|nolink(?!\\()","g").replace("reflink",ji).replace("nolink",Hi).getRegex(),pi=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Na={_backpedal:no,anyPunctuation:Zt,autolink:es,blockSkip:Ut,br:_i,code:$t,del:no,emStrongLDelim:Yt,emStrongRDelimAst:Jt,emStrongRDelimUnd:Kt,escape:Gt,link:is,nolink:Hi,punctuation:Ht,reflink:ji,reflinkSearch:ts,tag:as,text:jt,url:no},ss={...Na,link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",Po).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Po).getRegex()},ca={...Na,emStrongRDelimAst:Xt,emStrongLDelim:Qt,url:E(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",pi).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:E(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",pi).getRegex()},rs={...ca,br:E(_i).replace("{2,}","*").getRegex(),text:E(ca.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},wo={normal:Ma,gfm:qt,pedantic:Bt},Je={normal:Na,gfm:ca,breaks:rs,pedantic:ss},ns={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ui=a=>ns[a];function xe(a,e){if(e){if(J.escapeTest.test(a))return a.replace(J.escapeReplace,ui)}else if(J.escapeTestNoEncode.test(a))return a.replace(J.escapeReplaceNoEncode,ui);return a}function mi(a){try{a=encodeURI(a).replace(J.percentDecode,"%")}catch{return null}return a}function gi(a,e){let o=a.replace(J.findPipe,(s,r,d)=>{let n=!1,l=r;for(;--l>=0&&d[l]==="\\";)n=!n;return n?"|":" |"}),t=o.split(J.splitPipe),i=0;if(t[0].trim()||t.shift(),t.length>0&&!t.at(-1)?.trim()&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(J.slashPipe,"|");return t}function Xe(a,e,o){let t=a.length;if(t===0)return"";let i=0;for(;i<t&&a.charAt(t-i-1)===e;)i++;return a.slice(0,t-i)}function ds(a,e){if(a.indexOf(e[1])===-1)return-1;let o=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===e[0])o++;else if(a[t]===e[1]&&(o--,o<0))return t;return o>0?-2:-1}function hi(a,e,o,t,i){let s=e.href,r=e.title||null,d=a[1].replace(i.other.outputLinkReplace,"$1");t.state.inLink=!0;let n={type:a[0].charAt(0)==="!"?"image":"link",raw:o,href:s,title:r,text:d,tokens:t.inlineTokens(d)};return t.state.inLink=!1,n}function ls(a,e,o){let t=a.match(o.other.indentCodeCompensation);if(t===null)return e;let i=t[1];return e.split(`
`).map(s=>{let r=s.match(o.other.beginningSpace);if(r===null)return s;let[d]=r;return d.length>=i.length?s.slice(i.length):s}).join(`
`)}var To=class{options;rules;lexer;constructor(a){this.options=a||De}space(a){let e=this.rules.block.newline.exec(a);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(a){let e=this.rules.block.code.exec(a);if(e){let o=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?o:Xe(o,`
`)}}}fences(a){let e=this.rules.block.fences.exec(a);if(e){let o=e[0],t=ls(o,e[3]||"",this.rules);return{type:"code",raw:o,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:t}}}heading(a){let e=this.rules.block.heading.exec(a);if(e){let o=e[2].trim();if(this.rules.other.endingHash.test(o)){let t=Xe(o,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(o=t.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(a){let e=this.rules.block.hr.exec(a);if(e)return{type:"hr",raw:Xe(e[0],`
`)}}blockquote(a){let e=this.rules.block.blockquote.exec(a);if(e){let o=Xe(e[0],`
`).split(`
`),t="",i="",s=[];for(;o.length>0;){let r=!1,d=[],n;for(n=0;n<o.length;n++)if(this.rules.other.blockquoteStart.test(o[n]))d.push(o[n]),r=!0;else if(!r)d.push(o[n]);else break;o=o.slice(n);let l=d.join(`
`),p=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${l}`:l,i=i?`${i}
${p}`:p;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,s,!0),this.lexer.state.top=u,o.length===0)break;let m=s.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let g=m,v=g.raw+`
`+o.join(`
`),y=this.blockquote(v);s[s.length-1]=y,t=t.substring(0,t.length-g.raw.length)+y.raw,i=i.substring(0,i.length-g.text.length)+y.text;break}else if(m?.type==="list"){let g=m,v=g.raw+`
`+o.join(`
`),y=this.list(v);s[s.length-1]=y,t=t.substring(0,t.length-m.raw.length)+y.raw,i=i.substring(0,i.length-g.raw.length)+y.raw,o=v.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:s,text:i}}}list(a){let e=this.rules.block.list.exec(a);if(e){let o=e[1].trim(),t=o.length>1,i={type:"list",raw:"",ordered:t,start:t?+o.slice(0,-1):"",loose:!1,items:[]};o=t?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=t?o:"[*+-]");let s=this.rules.other.listItemRegex(o),r=!1;for(;a;){let n=!1,l="",p="";if(!(e=s.exec(a))||this.rules.block.hr.test(a))break;l=e[0],a=a.substring(l.length);let u=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),m=a.split(`
`,1)[0],g=!u.trim(),v=0;if(this.options.pedantic?(v=2,p=u.trimStart()):g?v=e[1].length+1:(v=e[2].search(this.rules.other.nonSpaceChar),v=v>4?1:v,p=u.slice(v),v+=e[1].length),g&&this.rules.other.blankLine.test(m)&&(l+=m+`
`,a=a.substring(m.length+1),n=!0),!n){let y=this.rules.other.nextBulletRegex(v),T=this.rules.other.hrRegex(v),F=this.rules.other.fencesBeginRegex(v),O=this.rules.other.headingBeginRegex(v),R=this.rules.other.htmlBeginRegex(v);for(;a;){let h=a.split(`
`,1)[0],x;if(m=h,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),x=m):x=m.replace(this.rules.other.tabCharGlobal,"    "),F.test(m)||O.test(m)||R.test(m)||y.test(m)||T.test(m))break;if(x.search(this.rules.other.nonSpaceChar)>=v||!m.trim())p+=`
`+x.slice(v);else{if(g||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(u)||O.test(u)||T.test(u))break;p+=`
`+m}!g&&!m.trim()&&(g=!0),l+=h+`
`,a=a.substring(h.length+1),u=x.slice(v)}}i.loose||(r?i.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(r=!0)),i.items.push({type:"list_item",raw:l,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),i.raw+=l}let d=i.items.at(-1);if(d)d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let n of i.items){if(this.lexer.state.top=!1,n.tokens=this.lexer.blockTokens(n.text,[]),n.task){if(n.text=n.text.replace(this.rules.other.listReplaceTask,""),n.tokens[0]?.type==="text"||n.tokens[0]?.type==="paragraph"){n.tokens[0].raw=n.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),n.tokens[0].text=n.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}}let l=this.rules.other.listTaskCheckbox.exec(n.raw);if(l){let p={type:"checkbox",raw:l[0]+" ",checked:l[0]!=="[ ]"};n.checked=p.checked,i.loose?n.tokens[0]&&["paragraph","text"].includes(n.tokens[0].type)&&"tokens"in n.tokens[0]&&n.tokens[0].tokens?(n.tokens[0].raw=p.raw+n.tokens[0].raw,n.tokens[0].text=p.raw+n.tokens[0].text,n.tokens[0].tokens.unshift(p)):n.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):n.tokens.unshift(p)}}if(!i.loose){let l=n.tokens.filter(u=>u.type==="space"),p=l.length>0&&l.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=p}}if(i.loose)for(let n of i.items){n.loose=!0;for(let l of n.tokens)l.type==="text"&&(l.type="paragraph")}return i}}html(a){let e=this.rules.block.html.exec(a);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(a){let e=this.rules.block.def.exec(a);if(e){let o=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:o,raw:e[0],href:t,title:i}}}table(a){let e=this.rules.block.table.exec(a);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let o=gi(e[1]),t=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(o.length===t.length){for(let r of t)this.rules.other.tableAlignRight.test(r)?s.align.push("right"):this.rules.other.tableAlignCenter.test(r)?s.align.push("center"):this.rules.other.tableAlignLeft.test(r)?s.align.push("left"):s.align.push(null);for(let r=0;r<o.length;r++)s.header.push({text:o[r],tokens:this.lexer.inline(o[r]),header:!0,align:s.align[r]});for(let r of i)s.rows.push(gi(r,s.header.length).map((d,n)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:s.align[n]})));return s}}lheading(a){let e=this.rules.block.lheading.exec(a);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(a){let e=this.rules.block.paragraph.exec(a);if(e){let o=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:o,tokens:this.lexer.inline(o)}}}text(a){let e=this.rules.block.text.exec(a);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(a){let e=this.rules.inline.escape.exec(a);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(a){let e=this.rules.inline.tag.exec(a);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(a){let e=this.rules.inline.link.exec(a);if(e){let o=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(o)){if(!this.rules.other.endAngleBracket.test(o))return;let s=Xe(o.slice(0,-1),"\\");if((o.length-s.length)%2===0)return}else{let s=ds(e[2],"()");if(s===-2)return;if(s>-1){let r=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,r).trim(),e[3]=""}}let t=e[2],i="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(t);s&&(t=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(o)?t=t.slice(1):t=t.slice(1,-1)),hi(e,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(a,e){let o;if((o=this.rules.inline.reflink.exec(a))||(o=this.rules.inline.nolink.exec(a))){let t=(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[t.toLowerCase()];if(!i){let s=o[0].charAt(0);return{type:"text",raw:s,text:s}}return hi(o,i,o[0],this.lexer,this.rules)}}emStrong(a,e,o=""){let t=this.rules.inline.emStrongLDelim.exec(a);if(!(!t||t[3]&&o.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[2])||!o||this.rules.inline.punctuation.exec(o))){let i=[...t[0]].length-1,s,r,d=i,n=0,l=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*a.length+i);(t=l.exec(e))!=null;){if(s=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!s)continue;if(r=[...s].length,t[3]||t[4]){d+=r;continue}else if((t[5]||t[6])&&i%3&&!((i+r)%3)){n+=r;continue}if(d-=r,d>0)continue;r=Math.min(r,r+d+n);let p=[...t[0]][0].length,u=a.slice(0,i+t.index+p+r);if(Math.min(i,r)%2){let g=u.slice(1,-1);return{type:"em",raw:u,text:g,tokens:this.lexer.inlineTokens(g)}}let m=u.slice(2,-2);return{type:"strong",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(a){let e=this.rules.inline.code.exec(a);if(e){let o=e[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(o),i=this.rules.other.startingSpaceChar.test(o)&&this.rules.other.endingSpaceChar.test(o);return t&&i&&(o=o.substring(1,o.length-1)),{type:"codespan",raw:e[0],text:o}}}br(a){let e=this.rules.inline.br.exec(a);if(e)return{type:"br",raw:e[0]}}del(a){let e=this.rules.inline.del.exec(a);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(a){let e=this.rules.inline.autolink.exec(a);if(e){let o,t;return e[2]==="@"?(o=e[1],t="mailto:"+o):(o=e[1],t=o),{type:"link",raw:e[0],text:o,href:t,tokens:[{type:"text",raw:o,text:o}]}}}url(a){let e;if(e=this.rules.inline.url.exec(a)){let o,t;if(e[2]==="@")o=e[0],t="mailto:"+o;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);o=e[0],e[1]==="www."?t="http://"+e[0]:t=e[0]}return{type:"link",raw:e[0],text:o,href:t,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(a){let e=this.rules.inline.text.exec(a);if(e){let o=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:o}}}},ne=class pa{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||De,this.options.tokenizer=this.options.tokenizer||new To,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let o={other:J,block:wo.normal,inline:Je.normal};this.options.pedantic?(o.block=wo.pedantic,o.inline=Je.pedantic):this.options.gfm&&(o.block=wo.gfm,this.options.breaks?o.inline=Je.breaks:o.inline=Je.gfm),this.tokenizer.rules=o}static get rules(){return{block:wo,inline:Je}}static lex(e,o){return new pa(o).lex(e)}static lexInline(e,o){return new pa(o).inlineTokens(e)}lex(e){e=e.replace(J.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let o=0;o<this.inlineQueue.length;o++){let t=this.inlineQueue[o];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,o=[],t=!1){for(this.options.pedantic&&(e=e.replace(J.tabCharGlobal,"    ").replace(J.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(r=>(i=r.call({lexer:this},e,o))?(e=e.substring(i.raw.length),o.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let r=o.at(-1);i.raw.length===1&&r!==void 0?r.raw+=`
`:o.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let r=o.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.at(-1).src=r.text):o.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let r=o.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},o.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),o.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let r=1/0,d=e.slice(1),n;this.options.extensions.startBlock.forEach(l=>{n=l.call({lexer:this},d),typeof n=="number"&&n>=0&&(r=Math.min(r,n))}),r<1/0&&r>=0&&(s=e.substring(0,r+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let r=o.at(-1);t&&r?.type==="paragraph"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):o.push(i),t=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let r=o.at(-1);r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):o.push(i);continue}if(e){let r="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,o}inline(e,o=[]){return this.inlineQueue.push({src:e,tokens:o}),o}inlineTokens(e,o=[]){let t=e,i=null;if(this.tokens.links){let n=Object.keys(this.tokens.links);if(n.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)n.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,i.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)s=i[2]?i[2].length:0,t=t.slice(0,i.index+s)+"["+"a".repeat(i[0].length-s-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t;let r=!1,d="";for(;e;){r||(d=""),r=!1;let n;if(this.options.extensions?.inline?.some(p=>(n=p.call({lexer:this},e,o))?(e=e.substring(n.raw.length),o.push(n),!0):!1))continue;if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),o.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),o.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),o.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length);let p=o.at(-1);n.type==="text"&&p?.type==="text"?(p.raw+=n.raw,p.text+=n.text):o.push(n);continue}if(n=this.tokenizer.emStrong(e,t,d)){e=e.substring(n.raw.length),o.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),o.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),o.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),o.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),o.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),o.push(n);continue}let l=e;if(this.options.extensions?.startInline){let p=1/0,u=e.slice(1),m;this.options.extensions.startInline.forEach(g=>{m=g.call({lexer:this},u),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(l=e.substring(0,p+1))}if(n=this.tokenizer.inlineText(l)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(d=n.raw.slice(-1)),r=!0;let p=o.at(-1);p?.type==="text"?(p.raw+=n.raw,p.text+=n.text):o.push(n);continue}if(e){let p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return o}},Ro=class{options;parser;constructor(a){this.options=a||De}space(a){return""}code({text:a,lang:e,escaped:o}){let t=(e||"").match(J.notSpaceStart)?.[0],i=a.replace(J.endingNewline,"")+`
`;return t?'<pre><code class="language-'+xe(t)+'">'+(o?i:xe(i,!0))+`</code></pre>
`:"<pre><code>"+(o?i:xe(i,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:e}){return`<h${e}>${this.parser.parseInline(a)}</h${e}>
`}hr(a){return`<hr>
`}list(a){let e=a.ordered,o=a.start,t="";for(let r=0;r<a.items.length;r++){let d=a.items[r];t+=this.listitem(d)}let i=e?"ol":"ul",s=e&&o!==1?' start="'+o+'"':"";return"<"+i+s+`>
`+t+"</"+i+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let e="",o="";for(let i=0;i<a.header.length;i++)o+=this.tablecell(a.header[i]);e+=this.tablerow({text:o});let t="";for(let i=0;i<a.rows.length;i++){let s=a.rows[i];o="";for(let r=0;r<s.length;r++)o+=this.tablecell(s[r]);t+=this.tablerow({text:o})}return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let e=this.parser.parseInline(a.tokens),o=a.header?"th":"td";return(a.align?`<${o} align="${a.align}">`:`<${o}>`)+e+`</${o}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${xe(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:e,tokens:o}){let t=this.parser.parseInline(o),i=mi(a);if(i===null)return t;a=i;let s='<a href="'+a+'"';return e&&(s+=' title="'+xe(e)+'"'),s+=">"+t+"</a>",s}image({href:a,title:e,text:o,tokens:t}){t&&(o=this.parser.parseInline(t,this.parser.textRenderer));let i=mi(a);if(i===null)return xe(o);a=i;let s=`<img src="${a}" alt="${o}"`;return e&&(s+=` title="${xe(e)}"`),s+=">",s}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:xe(a.text)}},za=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},de=class ua{options;renderer;textRenderer;constructor(e){this.options=e||De,this.options.renderer=this.options.renderer||new Ro,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new za}static parse(e,o){return new ua(o).parse(e)}static parseInline(e,o){return new ua(o).parseInline(e)}parse(e){let o="";for(let t=0;t<e.length;t++){let i=e[t];if(this.options.extensions?.renderers?.[i.type]){let r=i,d=this.options.extensions.renderers[r.type].call({parser:this},r);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(r.type)){o+=d||"";continue}}let s=i;switch(s.type){case"space":{o+=this.renderer.space(s);break}case"hr":{o+=this.renderer.hr(s);break}case"heading":{o+=this.renderer.heading(s);break}case"code":{o+=this.renderer.code(s);break}case"table":{o+=this.renderer.table(s);break}case"blockquote":{o+=this.renderer.blockquote(s);break}case"list":{o+=this.renderer.list(s);break}case"checkbox":{o+=this.renderer.checkbox(s);break}case"html":{o+=this.renderer.html(s);break}case"def":{o+=this.renderer.def(s);break}case"paragraph":{o+=this.renderer.paragraph(s);break}case"text":{o+=this.renderer.text(s);break}default:{let r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return o}parseInline(e,o=this.renderer){let t="";for(let i=0;i<e.length;i++){let s=e[i];if(this.options.extensions?.renderers?.[s.type]){let d=this.options.extensions.renderers[s.type].call({parser:this},s);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=d||"";continue}}let r=s;switch(r.type){case"escape":{t+=o.text(r);break}case"html":{t+=o.html(r);break}case"link":{t+=o.link(r);break}case"image":{t+=o.image(r);break}case"checkbox":{t+=o.checkbox(r);break}case"strong":{t+=o.strong(r);break}case"em":{t+=o.em(r);break}case"codespan":{t+=o.codespan(r);break}case"br":{t+=o.br(r);break}case"del":{t+=o.del(r);break}case"text":{t+=o.text(r);break}default:{let d='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return t}},to=class{options;block;constructor(a){this.options=a||De}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(){return this.block?ne.lex:ne.lexInline}provideParser(){return this.block?de.parse:de.parseInline}},cs=class{defaults=Ta();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=de;Renderer=Ro;TextRenderer=za;Lexer=ne;Tokenizer=To;Hooks=to;constructor(...e){this.use(...e)}walkTokens(e,o){let t=[];for(let i of e)switch(t=t.concat(o.call(this,i)),i.type){case"table":{let s=i;for(let r of s.header)t=t.concat(this.walkTokens(r.tokens,o));for(let r of s.rows)for(let d of r)t=t.concat(this.walkTokens(d.tokens,o));break}case"list":{let s=i;t=t.concat(this.walkTokens(s.items,o));break}default:{let s=i;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(r=>{let d=s[r].flat(1/0);t=t.concat(this.walkTokens(d,o))}):s.tokens&&(t=t.concat(this.walkTokens(s.tokens,o)))}}return t}use(...e){let o=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let r=o.renderers[s.name];r?o.renderers[s.name]=function(...d){let n=s.renderer.apply(this,d);return n===!1&&(n=r.apply(this,d)),n}:o.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let r=o[s.level];r?r.unshift(s.tokenizer):o[s.level]=[s.tokenizer],s.start&&(s.level==="block"?o.startBlock?o.startBlock.push(s.start):o.startBlock=[s.start]:s.level==="inline"&&(o.startInline?o.startInline.push(s.start):o.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(o.childTokens[s.name]=s.childTokens)}),i.extensions=o),t.renderer){let s=this.defaults.renderer||new Ro(this.defaults);for(let r in t.renderer){if(!(r in s))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let d=r,n=t.renderer[d],l=s[d];s[d]=(...p)=>{let u=n.apply(s,p);return u===!1&&(u=l.apply(s,p)),u||""}}i.renderer=s}if(t.tokenizer){let s=this.defaults.tokenizer||new To(this.defaults);for(let r in t.tokenizer){if(!(r in s))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let d=r,n=t.tokenizer[d],l=s[d];s[d]=(...p)=>{let u=n.apply(s,p);return u===!1&&(u=l.apply(s,p)),u}}i.tokenizer=s}if(t.hooks){let s=this.defaults.hooks||new to;for(let r in t.hooks){if(!(r in s))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let d=r,n=t.hooks[d],l=s[d];to.passThroughHooks.has(r)?s[d]=p=>{if(this.defaults.async&&to.passThroughHooksRespectAsync.has(r))return(async()=>{let m=await n.call(s,p);return l.call(s,m)})();let u=n.call(s,p);return l.call(s,u)}:s[d]=(...p)=>{if(this.defaults.async)return(async()=>{let m=await n.apply(s,p);return m===!1&&(m=await l.apply(s,p)),m})();let u=n.apply(s,p);return u===!1&&(u=l.apply(s,p)),u}}i.hooks=s}if(t.walkTokens){let s=this.defaults.walkTokens,r=t.walkTokens;i.walkTokens=function(d){let n=[];return n.push(r.call(this,d)),s&&(n=n.concat(s.call(this,d))),n}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,o){return ne.lex(e,o??this.defaults)}parser(e,o){return de.parse(e,o??this.defaults)}parseMarkdown(e){return(o,t)=>{let i={...t},s={...this.defaults,...i},r=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof o>"u"||o===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=e),s.async)return(async()=>{let d=s.hooks?await s.hooks.preprocess(o):o,n=await(s.hooks?await s.hooks.provideLexer():e?ne.lex:ne.lexInline)(d,s),l=s.hooks?await s.hooks.processAllTokens(n):n;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let p=await(s.hooks?await s.hooks.provideParser():e?de.parse:de.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(p):p})().catch(r);try{s.hooks&&(o=s.hooks.preprocess(o));let d=(s.hooks?s.hooks.provideLexer():e?ne.lex:ne.lexInline)(o,s);s.hooks&&(d=s.hooks.processAllTokens(d)),s.walkTokens&&this.walkTokens(d,s.walkTokens);let n=(s.hooks?s.hooks.provideParser():e?de.parse:de.parseInline)(d,s);return s.hooks&&(n=s.hooks.postprocess(n)),n}catch(d){return r(d)}}}onError(e,o){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+xe(t.message+"",!0)+"</pre>";return o?Promise.resolve(i):i}if(o)return Promise.reject(t);throw t}}},Ie=new cs;function k(a,e){return Ie.parse(a,e)}k.options=k.setOptions=function(a){return Ie.setOptions(a),k.defaults=Ie.defaults,Li(k.defaults),k};k.getDefaults=Ta;k.defaults=De;k.use=function(...a){return Ie.use(...a),k.defaults=Ie.defaults,Li(k.defaults),k};k.walkTokens=function(a,e){return Ie.walkTokens(a,e)};k.parseInline=Ie.parseInline;k.Parser=de;k.parser=de.parse;k.Renderer=Ro;k.TextRenderer=za;k.Lexer=ne;k.lexer=ne.lex;k.Tokenizer=To;k.Hooks=to;k.parse=k;k.options;k.setOptions;k.use;k.walkTokens;k.parseInline;de.parse;ne.lex;const{entries:Wi,setPrototypeOf:fi,isFrozen:ps,getPrototypeOf:us,getOwnPropertyDescriptor:ms}=Object;let{freeze:X,seal:se,create:ma}=Object,{apply:ga,construct:ha}=typeof Reflect<"u"&&Reflect;X||(X=function(e){return e});se||(se=function(e){return e});ga||(ga=function(e,o){for(var t=arguments.length,i=new Array(t>2?t-2:0),s=2;s<t;s++)i[s-2]=arguments[s];return e.apply(o,i)});ha||(ha=function(e){for(var o=arguments.length,t=new Array(o>1?o-1:0),i=1;i<o;i++)t[i-1]=arguments[i];return new e(...t)});const Ao=K(Array.prototype.forEach),gs=K(Array.prototype.lastIndexOf),vi=K(Array.prototype.pop),Ke=K(Array.prototype.push),hs=K(Array.prototype.splice),Eo=K(String.prototype.toLowerCase),Ko=K(String.prototype.toString),Zo=K(String.prototype.match),Ze=K(String.prototype.replace),fs=K(String.prototype.indexOf),vs=K(String.prototype.trim),re=K(Object.prototype.hasOwnProperty),Q=K(RegExp.prototype.test),eo=bs(TypeError);function K(a){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var o=arguments.length,t=new Array(o>1?o-1:0),i=1;i<o;i++)t[i-1]=arguments[i];return ga(a,e,t)}}function bs(a){return function(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];return ha(a,o)}}function C(a,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Eo;fi&&fi(a,null);let t=e.length;for(;t--;){let i=e[t];if(typeof i=="string"){const s=o(i);s!==i&&(ps(e)||(e[t]=s),i=s)}a[i]=!0}return a}function xs(a){for(let e=0;e<a.length;e++)re(a,e)||(a[e]=null);return a}function ue(a){const e=ma(null);for(const[o,t]of Wi(a))re(a,o)&&(Array.isArray(t)?e[o]=xs(t):t&&typeof t=="object"&&t.constructor===Object?e[o]=ue(t):e[o]=t);return e}function oo(a,e){for(;a!==null;){const t=ms(a,e);if(t){if(t.get)return K(t.get);if(typeof t.value=="function")return K(t.value)}a=us(a)}function o(){return null}return o}const bi=X(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ea=X(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),oa=X(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ss=X(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),aa=X(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ws=X(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),xi=X(["#text"]),Si=X(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ia=X(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),wi=X(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Co=X(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),As=se(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Cs=se(/<%[\w\W]*|[\w\W]*%>/gm),ys=se(/\$\{[\w\W]*/gm),ks=se(/^data-[\-\w.\u00B7-\uFFFF]+$/),Es=se(/^aria-[\-\w]+$/),Vi=se(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ps=se(/^(?:\w+script|data):/i),Ts=se(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ui=se(/^html$/i),Rs=se(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ai=Object.freeze({__proto__:null,ARIA_ATTR:Es,ATTR_WHITESPACE:Ts,CUSTOM_ELEMENT:Rs,DATA_ATTR:ks,DOCTYPE_NAME:Ui,ERB_EXPR:Cs,IS_ALLOWED_URI:Vi,IS_SCRIPT_OR_DATA:Ps,MUSTACHE_EXPR:As,TMPLIT_EXPR:ys});const ao={element:1,text:3,progressingInstruction:7,comment:8,document:9},Is=function(){return typeof window>"u"?null:window},Os=function(e,o){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let t=null;const i="data-tt-policy-suffix";o&&o.hasAttribute(i)&&(t=o.getAttribute(i));const s="dompurify"+(t?"#"+t:"");try{return e.createPolicy(s,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Ci=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Yi(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Is();const e=S=>Yi(S);if(e.version="3.3.1",e.removed=[],!a||!a.document||a.document.nodeType!==ao.document||!a.Element)return e.isSupported=!1,e;let{document:o}=a;const t=o,i=t.currentScript,{DocumentFragment:s,HTMLTemplateElement:r,Node:d,Element:n,NodeFilter:l,NamedNodeMap:p=a.NamedNodeMap||a.MozNamedAttrMap,HTMLFormElement:u,DOMParser:m,trustedTypes:g}=a,v=n.prototype,y=oo(v,"cloneNode"),T=oo(v,"remove"),F=oo(v,"nextSibling"),O=oo(v,"childNodes"),R=oo(v,"parentNode");if(typeof r=="function"){const S=o.createElement("template");S.content&&S.content.ownerDocument&&(o=S.content.ownerDocument)}let h,x="";const{implementation:I,createNodeIterator:A,createDocumentFragment:M,getElementsByTagName:P}=o,{importNode:N}=t;let L=Ci();e.isSupported=typeof Wi=="function"&&typeof R=="function"&&I&&I.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:U,ERB_EXPR:ke,TMPLIT_EXPR:j,DATA_ATTR:ge,ARIA_ATTR:Y,IS_SCRIPT_OR_DATA:_,ATTR_WHITESPACE:He,CUSTOM_ELEMENT:We}=Ai;let{IS_ALLOWED_URI:Ve}=Ai,B=null;const $a=C({},[...bi,...ea,...oa,...aa,...xi]);let H=null;const ja=C({},[...Si,...ia,...wi,...Co]);let q=Object.seal(ma(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ue=null,Bo=null;const Me=Object.seal(ma(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ha=!0,Go=!0,Wa=!1,Va=!0,Le=!1,go=!0,Ee=!1,$o=!1,jo=!1,Ne=!1,ho=!1,fo=!1,Ua=!0,Ya=!1;const St="user-content-";let Ho=!0,Ye=!1,ze={},ce=null;const Wo=C({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Qa=null;const Ja=C({},["audio","video","img","source","image","track"]);let Vo=null;const Xa=C({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),vo="http://www.w3.org/1998/Math/MathML",bo="http://www.w3.org/2000/svg",he="http://www.w3.org/1999/xhtml";let Fe=he,Uo=!1,Yo=null;const wt=C({},[vo,bo,he],Ko);let xo=C({},["mi","mo","mn","ms","mtext"]),So=C({},["annotation-xml"]);const At=C({},["title","style","font","a","script"]);let Qe=null;const Ct=["application/xhtml+xml","text/html"],yt="text/html";let $=null,_e=null;const kt=o.createElement("form"),Ka=function(c){return c instanceof RegExp||c instanceof Function},Qo=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(_e&&_e===c)){if((!c||typeof c!="object")&&(c={}),c=ue(c),Qe=Ct.indexOf(c.PARSER_MEDIA_TYPE)===-1?yt:c.PARSER_MEDIA_TYPE,$=Qe==="application/xhtml+xml"?Ko:Eo,B=re(c,"ALLOWED_TAGS")?C({},c.ALLOWED_TAGS,$):$a,H=re(c,"ALLOWED_ATTR")?C({},c.ALLOWED_ATTR,$):ja,Yo=re(c,"ALLOWED_NAMESPACES")?C({},c.ALLOWED_NAMESPACES,Ko):wt,Vo=re(c,"ADD_URI_SAFE_ATTR")?C(ue(Xa),c.ADD_URI_SAFE_ATTR,$):Xa,Qa=re(c,"ADD_DATA_URI_TAGS")?C(ue(Ja),c.ADD_DATA_URI_TAGS,$):Ja,ce=re(c,"FORBID_CONTENTS")?C({},c.FORBID_CONTENTS,$):Wo,Ue=re(c,"FORBID_TAGS")?C({},c.FORBID_TAGS,$):ue({}),Bo=re(c,"FORBID_ATTR")?C({},c.FORBID_ATTR,$):ue({}),ze=re(c,"USE_PROFILES")?c.USE_PROFILES:!1,Ha=c.ALLOW_ARIA_ATTR!==!1,Go=c.ALLOW_DATA_ATTR!==!1,Wa=c.ALLOW_UNKNOWN_PROTOCOLS||!1,Va=c.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Le=c.SAFE_FOR_TEMPLATES||!1,go=c.SAFE_FOR_XML!==!1,Ee=c.WHOLE_DOCUMENT||!1,Ne=c.RETURN_DOM||!1,ho=c.RETURN_DOM_FRAGMENT||!1,fo=c.RETURN_TRUSTED_TYPE||!1,jo=c.FORCE_BODY||!1,Ua=c.SANITIZE_DOM!==!1,Ya=c.SANITIZE_NAMED_PROPS||!1,Ho=c.KEEP_CONTENT!==!1,Ye=c.IN_PLACE||!1,Ve=c.ALLOWED_URI_REGEXP||Vi,Fe=c.NAMESPACE||he,xo=c.MATHML_TEXT_INTEGRATION_POINTS||xo,So=c.HTML_INTEGRATION_POINTS||So,q=c.CUSTOM_ELEMENT_HANDLING||{},c.CUSTOM_ELEMENT_HANDLING&&Ka(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(q.tagNameCheck=c.CUSTOM_ELEMENT_HANDLING.tagNameCheck),c.CUSTOM_ELEMENT_HANDLING&&Ka(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(q.attributeNameCheck=c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),c.CUSTOM_ELEMENT_HANDLING&&typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(q.allowCustomizedBuiltInElements=c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(Go=!1),ho&&(Ne=!0),ze&&(B=C({},xi),H=[],ze.html===!0&&(C(B,bi),C(H,Si)),ze.svg===!0&&(C(B,ea),C(H,ia),C(H,Co)),ze.svgFilters===!0&&(C(B,oa),C(H,ia),C(H,Co)),ze.mathMl===!0&&(C(B,aa),C(H,wi),C(H,Co))),c.ADD_TAGS&&(typeof c.ADD_TAGS=="function"?Me.tagCheck=c.ADD_TAGS:(B===$a&&(B=ue(B)),C(B,c.ADD_TAGS,$))),c.ADD_ATTR&&(typeof c.ADD_ATTR=="function"?Me.attributeCheck=c.ADD_ATTR:(H===ja&&(H=ue(H)),C(H,c.ADD_ATTR,$))),c.ADD_URI_SAFE_ATTR&&C(Vo,c.ADD_URI_SAFE_ATTR,$),c.FORBID_CONTENTS&&(ce===Wo&&(ce=ue(ce)),C(ce,c.FORBID_CONTENTS,$)),c.ADD_FORBID_CONTENTS&&(ce===Wo&&(ce=ue(ce)),C(ce,c.ADD_FORBID_CONTENTS,$)),Ho&&(B["#text"]=!0),Ee&&C(B,["html","head","body"]),B.table&&(C(B,["tbody"]),delete Ue.tbody),c.TRUSTED_TYPES_POLICY){if(typeof c.TRUSTED_TYPES_POLICY.createHTML!="function")throw eo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof c.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw eo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');h=c.TRUSTED_TYPES_POLICY,x=h.createHTML("")}else h===void 0&&(h=Os(g,i)),h!==null&&typeof x=="string"&&(x=h.createHTML(""));X&&X(c),_e=c}},Za=C({},[...ea,...oa,...Ss]),ei=C({},[...aa,...ws]),Et=function(c){let f=R(c);(!f||!f.tagName)&&(f={namespaceURI:Fe,tagName:"template"});const b=Eo(c.tagName),z=Eo(f.tagName);return Yo[c.namespaceURI]?c.namespaceURI===bo?f.namespaceURI===he?b==="svg":f.namespaceURI===vo?b==="svg"&&(z==="annotation-xml"||xo[z]):!!Za[b]:c.namespaceURI===vo?f.namespaceURI===he?b==="math":f.namespaceURI===bo?b==="math"&&So[z]:!!ei[b]:c.namespaceURI===he?f.namespaceURI===bo&&!So[z]||f.namespaceURI===vo&&!xo[z]?!1:!ei[b]&&(At[b]||!Za[b]):!!(Qe==="application/xhtml+xml"&&Yo[c.namespaceURI]):!1},pe=function(c){Ke(e.removed,{element:c});try{R(c).removeChild(c)}catch{T(c)}},Pe=function(c,f){try{Ke(e.removed,{attribute:f.getAttributeNode(c),from:f})}catch{Ke(e.removed,{attribute:null,from:f})}if(f.removeAttribute(c),c==="is")if(Ne||ho)try{pe(f)}catch{}else try{f.setAttribute(c,"")}catch{}},oi=function(c){let f=null,b=null;if(jo)c="<remove></remove>"+c;else{const G=Zo(c,/^[\r\n\t ]+/);b=G&&G[0]}Qe==="application/xhtml+xml"&&Fe===he&&(c='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+c+"</body></html>");const z=h?h.createHTML(c):c;if(Fe===he)try{f=new m().parseFromString(z,Qe)}catch{}if(!f||!f.documentElement){f=I.createDocument(Fe,"template",null);try{f.documentElement.innerHTML=Uo?x:z}catch{}}const V=f.body||f.documentElement;return c&&b&&V.insertBefore(o.createTextNode(b),V.childNodes[0]||null),Fe===he?P.call(f,Ee?"html":"body")[0]:Ee?f.documentElement:V},ai=function(c){return A.call(c.ownerDocument||c,c,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Jo=function(c){return c instanceof u&&(typeof c.nodeName!="string"||typeof c.textContent!="string"||typeof c.removeChild!="function"||!(c.attributes instanceof p)||typeof c.removeAttribute!="function"||typeof c.setAttribute!="function"||typeof c.namespaceURI!="string"||typeof c.insertBefore!="function"||typeof c.hasChildNodes!="function")},ii=function(c){return typeof d=="function"&&c instanceof d};function fe(S,c,f){Ao(S,b=>{b.call(e,c,f,_e)})}const ti=function(c){let f=null;if(fe(L.beforeSanitizeElements,c,null),Jo(c))return pe(c),!0;const b=$(c.nodeName);if(fe(L.uponSanitizeElement,c,{tagName:b,allowedTags:B}),go&&c.hasChildNodes()&&!ii(c.firstElementChild)&&Q(/<[/\w!]/g,c.innerHTML)&&Q(/<[/\w!]/g,c.textContent)||c.nodeType===ao.progressingInstruction||go&&c.nodeType===ao.comment&&Q(/<[/\w]/g,c.data))return pe(c),!0;if(!(Me.tagCheck instanceof Function&&Me.tagCheck(b))&&(!B[b]||Ue[b])){if(!Ue[b]&&ri(b)&&(q.tagNameCheck instanceof RegExp&&Q(q.tagNameCheck,b)||q.tagNameCheck instanceof Function&&q.tagNameCheck(b)))return!1;if(Ho&&!ce[b]){const z=R(c)||c.parentNode,V=O(c)||c.childNodes;if(V&&z){const G=V.length;for(let Z=G-1;Z>=0;--Z){const ve=y(V[Z],!0);ve.__removalCount=(c.__removalCount||0)+1,z.insertBefore(ve,F(c))}}}return pe(c),!0}return c instanceof n&&!Et(c)||(b==="noscript"||b==="noembed"||b==="noframes")&&Q(/<\/no(script|embed|frames)/i,c.innerHTML)?(pe(c),!0):(Le&&c.nodeType===ao.text&&(f=c.textContent,Ao([U,ke,j],z=>{f=Ze(f,z," ")}),c.textContent!==f&&(Ke(e.removed,{element:c.cloneNode()}),c.textContent=f)),fe(L.afterSanitizeElements,c,null),!1)},si=function(c,f,b){if(Ua&&(f==="id"||f==="name")&&(b in o||b in kt))return!1;if(!(Go&&!Bo[f]&&Q(ge,f))){if(!(Ha&&Q(Y,f))){if(!(Me.attributeCheck instanceof Function&&Me.attributeCheck(f,c))){if(!H[f]||Bo[f]){if(!(ri(c)&&(q.tagNameCheck instanceof RegExp&&Q(q.tagNameCheck,c)||q.tagNameCheck instanceof Function&&q.tagNameCheck(c))&&(q.attributeNameCheck instanceof RegExp&&Q(q.attributeNameCheck,f)||q.attributeNameCheck instanceof Function&&q.attributeNameCheck(f,c))||f==="is"&&q.allowCustomizedBuiltInElements&&(q.tagNameCheck instanceof RegExp&&Q(q.tagNameCheck,b)||q.tagNameCheck instanceof Function&&q.tagNameCheck(b))))return!1}else if(!Vo[f]){if(!Q(Ve,Ze(b,He,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&c!=="script"&&fs(b,"data:")===0&&Qa[c])){if(!(Wa&&!Q(_,Ze(b,He,"")))){if(b)return!1}}}}}}}return!0},ri=function(c){return c!=="annotation-xml"&&Zo(c,We)},ni=function(c){fe(L.beforeSanitizeAttributes,c,null);const{attributes:f}=c;if(!f||Jo(c))return;const b={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H,forceKeepAttr:void 0};let z=f.length;for(;z--;){const V=f[z],{name:G,namespaceURI:Z,value:ve}=V,qe=$(G),Xo=ve;let W=G==="value"?Xo:vs(Xo);if(b.attrName=qe,b.attrValue=W,b.keepAttr=!0,b.forceKeepAttr=void 0,fe(L.uponSanitizeAttribute,c,b),W=b.attrValue,Ya&&(qe==="id"||qe==="name")&&(Pe(G,c),W=St+W),go&&Q(/((--!?|])>)|<\/(style|title|textarea)/i,W)){Pe(G,c);continue}if(qe==="attributename"&&Zo(W,"href")){Pe(G,c);continue}if(b.forceKeepAttr)continue;if(!b.keepAttr){Pe(G,c);continue}if(!Va&&Q(/\/>/i,W)){Pe(G,c);continue}Le&&Ao([U,ke,j],li=>{W=Ze(W,li," ")});const di=$(c.nodeName);if(!si(di,qe,W)){Pe(G,c);continue}if(h&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!Z)switch(g.getAttributeType(di,qe)){case"TrustedHTML":{W=h.createHTML(W);break}case"TrustedScriptURL":{W=h.createScriptURL(W);break}}if(W!==Xo)try{Z?c.setAttributeNS(Z,G,W):c.setAttribute(G,W),Jo(c)?pe(c):vi(e.removed)}catch{Pe(G,c)}}fe(L.afterSanitizeAttributes,c,null)},Pt=function S(c){let f=null;const b=ai(c);for(fe(L.beforeSanitizeShadowDOM,c,null);f=b.nextNode();)fe(L.uponSanitizeShadowNode,f,null),ti(f),ni(f),f.content instanceof s&&S(f.content);fe(L.afterSanitizeShadowDOM,c,null)};return e.sanitize=function(S){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,b=null,z=null,V=null;if(Uo=!S,Uo&&(S="<!-->"),typeof S!="string"&&!ii(S))if(typeof S.toString=="function"){if(S=S.toString(),typeof S!="string")throw eo("dirty is not a string, aborting")}else throw eo("toString is not a function");if(!e.isSupported)return S;if($o||Qo(c),e.removed=[],typeof S=="string"&&(Ye=!1),Ye){if(S.nodeName){const ve=$(S.nodeName);if(!B[ve]||Ue[ve])throw eo("root node is forbidden and cannot be sanitized in-place")}}else if(S instanceof d)f=oi("<!---->"),b=f.ownerDocument.importNode(S,!0),b.nodeType===ao.element&&b.nodeName==="BODY"||b.nodeName==="HTML"?f=b:f.appendChild(b);else{if(!Ne&&!Le&&!Ee&&S.indexOf("<")===-1)return h&&fo?h.createHTML(S):S;if(f=oi(S),!f)return Ne?null:fo?x:""}f&&jo&&pe(f.firstChild);const G=ai(Ye?S:f);for(;z=G.nextNode();)ti(z),ni(z),z.content instanceof s&&Pt(z.content);if(Ye)return S;if(Ne){if(ho)for(V=M.call(f.ownerDocument);f.firstChild;)V.appendChild(f.firstChild);else V=f;return(H.shadowroot||H.shadowrootmode)&&(V=N.call(t,V,!0)),V}let Z=Ee?f.outerHTML:f.innerHTML;return Ee&&B["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&Q(Ui,f.ownerDocument.doctype.name)&&(Z="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+Z),Le&&Ao([U,ke,j],ve=>{Z=Ze(Z,ve," ")}),h&&fo?h.createHTML(Z):Z},e.setConfig=function(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Qo(S),$o=!0},e.clearConfig=function(){_e=null,$o=!1},e.isValidAttribute=function(S,c,f){_e||Qo({});const b=$(S),z=$(c);return si(b,z,f)},e.addHook=function(S,c){typeof c=="function"&&Ke(L[S],c)},e.removeHook=function(S,c){if(c!==void 0){const f=gs(L[S],c);return f===-1?void 0:hs(L[S],f,1)[0]}return vi(L[S])},e.removeHooks=function(S){L[S]=[]},e.removeAllHooks=function(){L=Ci()},e}var so=Yi();function Ae(a){return Array.isArray?Array.isArray(a):Xi(a)==="[object Array]"}function Ds(a){if(typeof a=="string")return a;let e=a+"";return e=="0"&&1/a==-1/0?"-0":e}function Ms(a){return a==null?"":Ds(a)}function me(a){return typeof a=="string"}function Qi(a){return typeof a=="number"}function Ls(a){return a===!0||a===!1||Ns(a)&&Xi(a)=="[object Boolean]"}function Ji(a){return typeof a=="object"}function Ns(a){return Ji(a)&&a!==null}function ee(a){return a!=null}function ta(a){return!a.trim().length}function Xi(a){return a==null?a===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(a)}const zs="Incorrect 'index' type",Fs=a=>`Invalid value for key ${a}`,_s=a=>`Pattern length exceeds max of ${a}.`,qs=a=>`Missing ${a} property in key`,Bs=a=>`Property 'weight' in key '${a}' must be a positive integer`,yi=Object.prototype.hasOwnProperty;class Gs{constructor(e){this._keys=[],this._keyMap={};let o=0;e.forEach(t=>{let i=Ki(t);this._keys.push(i),this._keyMap[i.id]=i,o+=i.weight}),this._keys.forEach(t=>{t.weight/=o})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ki(a){let e=null,o=null,t=null,i=1,s=null;if(me(a)||Ae(a))t=a,e=ki(a),o=fa(a);else{if(!yi.call(a,"name"))throw new Error(qs("name"));const r=a.name;if(t=r,yi.call(a,"weight")&&(i=a.weight,i<=0))throw new Error(Bs(r));e=ki(r),o=fa(r),s=a.getFn}return{path:e,id:o,weight:i,src:t,getFn:s}}function ki(a){return Ae(a)?a:a.split(".")}function fa(a){return Ae(a)?a.join("."):a}function $s(a,e){let o=[],t=!1;const i=(s,r,d)=>{if(ee(s))if(!r[d])o.push(s);else{let n=r[d];const l=s[n];if(!ee(l))return;if(d===r.length-1&&(me(l)||Qi(l)||Ls(l)))o.push(Ms(l));else if(Ae(l)){t=!0;for(let p=0,u=l.length;p<u;p+=1)i(l[p],r,d+1)}else r.length&&i(l,r,d+1)}};return i(a,me(e)?e.split("."):e,0),t?o:o[0]}const js={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Hs={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(a,e)=>a.score===e.score?a.idx<e.idx?-1:1:a.score<e.score?-1:1},Ws={location:0,threshold:.6,distance:100},Vs={useExtendedSearch:!1,getFn:$s,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var w={...Hs,...js,...Ws,...Vs};const Us=/[^ ]+/g;function Ys(a=1,e=3){const o=new Map,t=Math.pow(10,e);return{get(i){const s=i.match(Us).length;if(o.has(s))return o.get(s);const r=1/Math.pow(s,.5*a),d=parseFloat(Math.round(r*t)/t);return o.set(s,d),d},clear(){o.clear()}}}class Fa{constructor({getFn:e=w.getFn,fieldNormWeight:o=w.fieldNormWeight}={}){this.norm=Ys(o,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((o,t)=>{this._keysMap[o.id]=t})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,me(this.docs[0])?this.docs.forEach((e,o)=>{this._addString(e,o)}):this.docs.forEach((e,o)=>{this._addObject(e,o)}),this.norm.clear())}add(e){const o=this.size();me(e)?this._addString(e,o):this._addObject(e,o)}removeAt(e){this.records.splice(e,1);for(let o=e,t=this.size();o<t;o+=1)this.records[o].i-=1}getValueForItemAtKeyId(e,o){return e[this._keysMap[o]]}size(){return this.records.length}_addString(e,o){if(!ee(e)||ta(e))return;let t={v:e,i:o,n:this.norm.get(e)};this.records.push(t)}_addObject(e,o){let t={i:o,$:{}};this.keys.forEach((i,s)=>{let r=i.getFn?i.getFn(e):this.getFn(e,i.path);if(ee(r)){if(Ae(r)){let d=[];const n=[{nestedArrIndex:-1,value:r}];for(;n.length;){const{nestedArrIndex:l,value:p}=n.pop();if(ee(p))if(me(p)&&!ta(p)){let u={v:p,i:l,n:this.norm.get(p)};d.push(u)}else Ae(p)&&p.forEach((u,m)=>{n.push({nestedArrIndex:m,value:u})})}t.$[s]=d}else if(me(r)&&!ta(r)){let d={v:r,n:this.norm.get(r)};t.$[s]=d}}}),this.records.push(t)}toJSON(){return{keys:this.keys,records:this.records}}}function Zi(a,e,{getFn:o=w.getFn,fieldNormWeight:t=w.fieldNormWeight}={}){const i=new Fa({getFn:o,fieldNormWeight:t});return i.setKeys(a.map(Ki)),i.setSources(e),i.create(),i}function Qs(a,{getFn:e=w.getFn,fieldNormWeight:o=w.fieldNormWeight}={}){const{keys:t,records:i}=a,s=new Fa({getFn:e,fieldNormWeight:o});return s.setKeys(t),s.setIndexRecords(i),s}function yo(a,{errors:e=0,currentLocation:o=0,expectedLocation:t=0,distance:i=w.distance,ignoreLocation:s=w.ignoreLocation}={}){const r=e/a.length;if(s)return r;const d=Math.abs(t-o);return i?r+d/i:d?1:r}function Js(a=[],e=w.minMatchCharLength){let o=[],t=-1,i=-1,s=0;for(let r=a.length;s<r;s+=1){let d=a[s];d&&t===-1?t=s:!d&&t!==-1&&(i=s-1,i-t+1>=e&&o.push([t,i]),t=-1)}return a[s-1]&&s-t>=e&&o.push([t,s-1]),o}const Te=32;function Xs(a,e,o,{location:t=w.location,distance:i=w.distance,threshold:s=w.threshold,findAllMatches:r=w.findAllMatches,minMatchCharLength:d=w.minMatchCharLength,includeMatches:n=w.includeMatches,ignoreLocation:l=w.ignoreLocation}={}){if(e.length>Te)throw new Error(_s(Te));const p=e.length,u=a.length,m=Math.max(0,Math.min(t,u));let g=s,v=m;const y=d>1||n,T=y?Array(u):[];let F;for(;(F=a.indexOf(e,v))>-1;){let A=yo(e,{currentLocation:F,expectedLocation:m,distance:i,ignoreLocation:l});if(g=Math.min(A,g),v=F+p,y){let M=0;for(;M<p;)T[F+M]=1,M+=1}}v=-1;let O=[],R=1,h=p+u;const x=1<<p-1;for(let A=0;A<p;A+=1){let M=0,P=h;for(;M<P;)yo(e,{errors:A,currentLocation:m+P,expectedLocation:m,distance:i,ignoreLocation:l})<=g?M=P:h=P,P=Math.floor((h-M)/2+M);h=P;let N=Math.max(1,m-P+1),L=r?u:Math.min(m+P,u)+p,U=Array(L+2);U[L+1]=(1<<A)-1;for(let j=L;j>=N;j-=1){let ge=j-1,Y=o[a.charAt(ge)];if(y&&(T[ge]=+!!Y),U[j]=(U[j+1]<<1|1)&Y,A&&(U[j]|=(O[j+1]|O[j])<<1|1|O[j+1]),U[j]&x&&(R=yo(e,{errors:A,currentLocation:ge,expectedLocation:m,distance:i,ignoreLocation:l}),R<=g)){if(g=R,v=ge,v<=m)break;N=Math.max(1,2*m-v)}}if(yo(e,{errors:A+1,currentLocation:m,expectedLocation:m,distance:i,ignoreLocation:l})>g)break;O=U}const I={isMatch:v>=0,score:Math.max(.001,R)};if(y){const A=Js(T,d);A.length?n&&(I.indices=A):I.isMatch=!1}return I}function Ks(a){let e={};for(let o=0,t=a.length;o<t;o+=1){const i=a.charAt(o);e[i]=(e[i]||0)|1<<t-o-1}return e}const Io=String.prototype.normalize?(a=>a.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(a=>a);class et{constructor(e,{location:o=w.location,threshold:t=w.threshold,distance:i=w.distance,includeMatches:s=w.includeMatches,findAllMatches:r=w.findAllMatches,minMatchCharLength:d=w.minMatchCharLength,isCaseSensitive:n=w.isCaseSensitive,ignoreDiacritics:l=w.ignoreDiacritics,ignoreLocation:p=w.ignoreLocation}={}){if(this.options={location:o,threshold:t,distance:i,includeMatches:s,findAllMatches:r,minMatchCharLength:d,isCaseSensitive:n,ignoreDiacritics:l,ignoreLocation:p},e=n?e:e.toLowerCase(),e=l?Io(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const u=(g,v)=>{this.chunks.push({pattern:g,alphabet:Ks(g),startIndex:v})},m=this.pattern.length;if(m>Te){let g=0;const v=m%Te,y=m-v;for(;g<y;)u(this.pattern.substr(g,Te),g),g+=Te;if(v){const T=m-Te;u(this.pattern.substr(T),T)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:o,ignoreDiacritics:t,includeMatches:i}=this.options;if(e=o?e:e.toLowerCase(),e=t?Io(e):e,this.pattern===e){let y={isMatch:!0,score:0};return i&&(y.indices=[[0,e.length-1]]),y}const{location:s,distance:r,threshold:d,findAllMatches:n,minMatchCharLength:l,ignoreLocation:p}=this.options;let u=[],m=0,g=!1;this.chunks.forEach(({pattern:y,alphabet:T,startIndex:F})=>{const{isMatch:O,score:R,indices:h}=Xs(e,y,T,{location:s+F,distance:r,threshold:d,findAllMatches:n,minMatchCharLength:l,includeMatches:i,ignoreLocation:p});O&&(g=!0),m+=R,O&&h&&(u=[...u,...h])});let v={isMatch:g,score:g?m/this.chunks.length:1};return g&&i&&(v.indices=u),v}}class Ce{constructor(e){this.pattern=e}static isMultiMatch(e){return Ei(e,this.multiRegex)}static isSingleMatch(e){return Ei(e,this.singleRegex)}search(){}}function Ei(a,e){const o=a.match(e);return o?o[1]:null}class Zs extends Ce{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const o=e===this.pattern;return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class er extends Ce{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=e.indexOf(this.pattern)===-1;return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class or extends Ce{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const o=e.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class ar extends Ce{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const o=!e.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,e.length-1]}}}class ir extends Ce{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const o=e.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class tr extends Ce{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const o=!e.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,e.length-1]}}}class ot extends Ce{constructor(e,{location:o=w.location,threshold:t=w.threshold,distance:i=w.distance,includeMatches:s=w.includeMatches,findAllMatches:r=w.findAllMatches,minMatchCharLength:d=w.minMatchCharLength,isCaseSensitive:n=w.isCaseSensitive,ignoreDiacritics:l=w.ignoreDiacritics,ignoreLocation:p=w.ignoreLocation}={}){super(e),this._bitapSearch=new et(e,{location:o,threshold:t,distance:i,includeMatches:s,findAllMatches:r,minMatchCharLength:d,isCaseSensitive:n,ignoreDiacritics:l,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class at extends Ce{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let o=0,t;const i=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,o))>-1;)o=t+s,i.push([t,o-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const va=[Zs,at,or,ar,tr,ir,er,ot],Pi=va.length,sr=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,rr="|";function nr(a,e={}){return a.split(rr).map(o=>{let t=o.trim().split(sr).filter(s=>s&&!!s.trim()),i=[];for(let s=0,r=t.length;s<r;s+=1){const d=t[s];let n=!1,l=-1;for(;!n&&++l<Pi;){const p=va[l];let u=p.isMultiMatch(d);u&&(i.push(new p(u,e)),n=!0)}if(!n)for(l=-1;++l<Pi;){const p=va[l];let u=p.isSingleMatch(d);if(u){i.push(new p(u,e));break}}}return i})}const dr=new Set([ot.type,at.type]);class lr{constructor(e,{isCaseSensitive:o=w.isCaseSensitive,ignoreDiacritics:t=w.ignoreDiacritics,includeMatches:i=w.includeMatches,minMatchCharLength:s=w.minMatchCharLength,ignoreLocation:r=w.ignoreLocation,findAllMatches:d=w.findAllMatches,location:n=w.location,threshold:l=w.threshold,distance:p=w.distance}={}){this.query=null,this.options={isCaseSensitive:o,ignoreDiacritics:t,includeMatches:i,minMatchCharLength:s,findAllMatches:d,ignoreLocation:r,location:n,threshold:l,distance:p},e=o?e:e.toLowerCase(),e=t?Io(e):e,this.pattern=e,this.query=nr(this.pattern,this.options)}static condition(e,o){return o.useExtendedSearch}searchIn(e){const o=this.query;if(!o)return{isMatch:!1,score:1};const{includeMatches:t,isCaseSensitive:i,ignoreDiacritics:s}=this.options;e=i?e:e.toLowerCase(),e=s?Io(e):e;let r=0,d=[],n=0;for(let l=0,p=o.length;l<p;l+=1){const u=o[l];d.length=0,r=0;for(let m=0,g=u.length;m<g;m+=1){const v=u[m],{isMatch:y,indices:T,score:F}=v.search(e);if(y){if(r+=1,n+=F,t){const O=v.constructor.type;dr.has(O)?d=[...d,...T]:d.push(T)}}else{n=0,r=0,d.length=0;break}}if(r){let m={isMatch:!0,score:n/r};return t&&(m.indices=d),m}}return{isMatch:!1,score:1}}}const ba=[];function cr(...a){ba.push(...a)}function xa(a,e){for(let o=0,t=ba.length;o<t;o+=1){let i=ba[o];if(i.condition(a,e))return new i(a,e)}return new et(a,e)}const Oo={AND:"$and",OR:"$or"},Sa={PATH:"$path",PATTERN:"$val"},wa=a=>!!(a[Oo.AND]||a[Oo.OR]),pr=a=>!!a[Sa.PATH],ur=a=>!Ae(a)&&Ji(a)&&!wa(a),Ti=a=>({[Oo.AND]:Object.keys(a).map(e=>({[e]:a[e]}))});function it(a,e,{auto:o=!0}={}){const t=i=>{let s=Object.keys(i);const r=pr(i);if(!r&&s.length>1&&!wa(i))return t(Ti(i));if(ur(i)){const n=r?i[Sa.PATH]:s[0],l=r?i[Sa.PATTERN]:i[n];if(!me(l))throw new Error(Fs(n));const p={keyId:fa(n),pattern:l};return o&&(p.searcher=xa(l,e)),p}let d={children:[],operator:s[0]};return s.forEach(n=>{const l=i[n];Ae(l)&&l.forEach(p=>{d.children.push(t(p))})}),d};return wa(a)||(a=Ti(a)),t(a)}function mr(a,{ignoreFieldNorm:e=w.ignoreFieldNorm}){a.forEach(o=>{let t=1;o.matches.forEach(({key:i,norm:s,score:r})=>{const d=i?i.weight:null;t*=Math.pow(r===0&&d?Number.EPSILON:r,(d||1)*(e?1:s))}),o.score=t})}function gr(a,e){const o=a.matches;e.matches=[],ee(o)&&o.forEach(t=>{if(!ee(t.indices)||!t.indices.length)return;const{indices:i,value:s}=t;let r={indices:i,value:s};t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r)})}function hr(a,e){e.score=a.score}function fr(a,e,{includeMatches:o=w.includeMatches,includeScore:t=w.includeScore}={}){const i=[];return o&&i.push(gr),t&&i.push(hr),a.map(s=>{const{idx:r}=s,d={item:e[r],refIndex:r};return i.length&&i.forEach(n=>{n(s,d)}),d})}class ye{constructor(e,o={},t){this.options={...w,...o},this.options.useExtendedSearch,this._keyStore=new Gs(this.options.keys),this.setCollection(e,t)}setCollection(e,o){if(this._docs=e,o&&!(o instanceof Fa))throw new Error(zs);this._myIndex=o||Zi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){ee(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const o=[];for(let t=0,i=this._docs.length;t<i;t+=1){const s=this._docs[t];e(s,t)&&(this.removeAt(t),t-=1,i-=1,o.push(s))}return o}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:o=-1}={}){const{includeMatches:t,includeScore:i,shouldSort:s,sortFn:r,ignoreFieldNorm:d}=this.options;let n=me(e)?me(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return mr(n,{ignoreFieldNorm:d}),s&&n.sort(r),Qi(o)&&o>-1&&(n=n.slice(0,o)),fr(n,this._docs,{includeMatches:t,includeScore:i})}_searchStringList(e){const o=xa(e,this.options),{records:t}=this._myIndex,i=[];return t.forEach(({v:s,i:r,n:d})=>{if(!ee(s))return;const{isMatch:n,score:l,indices:p}=o.searchIn(s);n&&i.push({item:s,idx:r,matches:[{score:l,value:s,norm:d,indices:p}]})}),i}_searchLogical(e){const o=it(e,this.options),t=(d,n,l)=>{if(!d.children){const{keyId:u,searcher:m}=d,g=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(n,u),searcher:m});return g&&g.length?[{idx:l,item:n,matches:g}]:[]}const p=[];for(let u=0,m=d.children.length;u<m;u+=1){const g=d.children[u],v=t(g,n,l);if(v.length)p.push(...v);else if(d.operator===Oo.AND)return[]}return p},i=this._myIndex.records,s={},r=[];return i.forEach(({$:d,i:n})=>{if(ee(d)){let l=t(o,d,n);l.length&&(s[n]||(s[n]={idx:n,item:d,matches:[]},r.push(s[n])),l.forEach(({matches:p})=>{s[n].matches.push(...p)}))}}),r}_searchObjectList(e){const o=xa(e,this.options),{keys:t,records:i}=this._myIndex,s=[];return i.forEach(({$:r,i:d})=>{if(!ee(r))return;let n=[];t.forEach((l,p)=>{n.push(...this._findMatches({key:l,value:r[p],searcher:o}))}),n.length&&s.push({idx:d,item:r,matches:n})}),s}_findMatches({key:e,value:o,searcher:t}){if(!ee(o))return[];let i=[];if(Ae(o))o.forEach(({v:s,i:r,n:d})=>{if(!ee(s))return;const{isMatch:n,score:l,indices:p}=t.searchIn(s);n&&i.push({score:l,key:e,value:s,idx:r,norm:d,indices:p})});else{const{v:s,n:r}=o,{isMatch:d,score:n,indices:l}=t.searchIn(s);d&&i.push({score:n,key:e,value:s,norm:r,indices:l})}return i}}ye.version="7.1.0";ye.createIndex=Zi;ye.parseIndex=Qs;ye.config=w;ye.parseQuery=it;cr(lr);const vr={id:"coletivo",title:"Coletivo",description:"Módulo destinado ao tratamento de questões internas relacionadas ao suporte.",icon:`<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
  </g>
</svg>`,topics:[{id:"tratativa-protocolo-wise",title:"Tratativa e Abertura de Protocolos",description:"Guia completo sobre a correta abertura e condução de protocolos no sistema W-GSC. Ideal para novos colaboradores do suporte técnico.",group:"Processos",tags:["Protocolo","Atendimento"],content:`
  <div class="welcome-banner">
    <h1>Guia de Abertura e Tratativa de Protocolos</h1>
    <p>Este guia foi criado para padronizar o processo de atendimento através de protocolos, garantindo organização, responsabilidade e um retorno claro ao cliente.</p>
  </div>

  <section class="core-concepts">
    <h2> 1. Início da Abertura</h2>
    <p><strong>Ao atender um cliente:</strong> deve-se abrir um protocolo imediatamente no sistema <strong>W-GSC</strong>, detalhando a dúvida ou problema no campo de ocorrência.</p>
    <div class="note-box">
      <strong>Importante:</strong> O protocolo é de responsabilidade do agente que o abriu. Esse agente deve manter o cliente atualizado diariamente (máximo duas vezes ao dia) mesmo que não haja solução definitiva. Sempre agende o retorno no sistema.
    </div>
  </section>

  <section class="core-concepts">
    <h2>2. Campos Obrigatórios</h2>
    <p>Os seguintes campos devem ser corretamente preenchidos no momento da abertura do protocolo:</p>
    <ul>
      <li><strong>- Cliente/Empresa</strong></li>
      <li><strong>- Nome do Supervisor Sigo</strong></li>
      <li><strong>- Ocorrência:</strong> Classifique conforme o tipo de solicitação.</li>
      <li><strong>- Atendente – Abertura</strong></li>
      <li><strong>- Detalhamento da ocorrência:</strong> Todas as informações fornecidas pelo cliente.</li>
      <li><strong>- Meio de contato:</strong> (telefone, WhatsApp, e-mail, site)</li>
      <li><strong>- Resolução:</strong> O que foi feito/testado, com datas e nomes.</li>
      <li><strong>- Status</strong></li>
      <li><strong>- Atendente Executor:</strong> Se houver repasse.</li>
      <li><strong>- Aguardando</strong></li>
      <li><strong>- Retorno</strong></li>
      <li><strong>- Encerramento:</strong> Somente após contato com o cliente.</li>
    </ul>
    <div class="note-box">
      <strong>Dica:</strong> Quando o cliente não for claro, faça as perguntas certas (abertas e fechadas) para levantar as informações corretamente.
    </div>
  </section>
  <section class="core-concepts">
    <h2> Como estruturar o Protocolo</h2>
    <p>O corpo do protocolo deve conter:</p>
    <ul>
      <li><strong>Dúvida ou questão:</strong> Tudo o que o cliente relatou.</li>
      <li><strong>Campos de resolução:</strong> Ações tomadas, análises, datas e quem executou.</li>
    </ul>
    <h3>Modelo de Preenchimento do protocolo:</h3>
      <div class="code-block">
          
            <p>
            Empresa: xxxxxx ID: 000<br>
            Funcionário: xxxxxx ID: 000<br>
            O que ocorreu: [Descrição detalhada]<br>
            "Se houver necessidade de análise do desenvolvimento do caso, devemos implementar na planilha e disponibilizar o caminho no protocolo. 
          Fornecendo, assim, o caminho da pasta:<br> W:\\Transfer\\_x\\Exemplo"</p>
          </div>
        <div class="image-placeholder">
     <p>[Imagem: Layout de tabela de IDs com exemplos preenchidos]</p>
  </div>
  <section class="core-concepts">

  <h2>Resolução enviada ao cliente:</h2>
<p><strong>Wise System – Suporte, (Seu nome). Bom dia, Sr.(a) xxxx, tudo bem?<br>
Sobre o chamado de protocolo nº xxxx, informamos que (Situação)<br>
Se ainda precisar de algo, conte com a gente, estaremos por aqui para ajudar no que for necessário. Ah, e se puder deixar sua opinião sobre o atendimento, ficaremos muito gratos! Sua avaliação é essencial para seguirmos melhorando sempre.

Um ótimo dia pra você! "</strong></p>
          </div>
    <h2>3. Encaminhamento e Níveis</h2>
    <p>Após análise inicial (N1), se não houver solução:</p>
    <ul>
      <li>Consultar o N2 para orientação.</li>
      <li>Se necessário, registrar tarefa na aba <strong>Evoluções e Tarefas</strong> atribuindo ao N2.</li>
      <li>Comunicar verbalmente e registrar <strong>data/motivo/departamento ou pessoa encaminhada</strong>.</li>
    </ul>
    <div class="note-box">
      <strong>Importante:</strong> Mesmo que o caso seja transferido para o N2 ou Desenvolvimento, o protocolo segue sob responsabilidade de quem abriu.
    </div>
  </section>


  <section class="core-concepts">
    <strong><h2>4. Qualidade das Informações</h2></strong>
    <p><strong>Informações incompletas podem gerar:</strong></p>
    <ul>
      <li>1. Erros de interpretação e conclusões incorretas.</li>
      <li>2. Retrabalho e atrasos na solução.</li>
      <li>3. Dificuldade na reprodução de testes e análises.</li>
    </ul>
    <div class="note-box">
      <strong>Recomendação:</strong> Seja minucioso! Preencha o protocolo com todas as informações relevantes para que qualquer analista consiga entender e dar continuidade.
    </div>
  </section>
  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .code-block {
        background: #f8f8f8;
        border-left: 4px solid #2196F3;
        padding: 20px;
        margin: 20px 0;
        font-family: monospace;
        font-size: 0.95em;
        
      }

      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }

    .core-concepts h2 {
      color: #0d47a1;
      margin-top: 40px;
    }

    .core-concepts ul {
      margin: 20px 0;
      padding-left: 20px;
    }

    .core-concepts li {
      margin-bottom: 8px;
      color: #333;
      font-size: 0.95em;
    }

    .note-box {
      background: #f0f4f8;
      padding: 15px;
      border-left: 4px solid #90caf9;
      margin-top: 20px;
      border-radius: 5px;
      font-size: 0.9em;
      color: #333;
    }
  </style>
`},{id:"feedback-cliente-24h",title:"Feedback ao Cliente a Cada 24 Horas",description:"Guia sobre a importância e prática do feedback contínuo ao cliente, mantendo transparência e fortalecendo a relação de confiança.",group:"Processos",tags:["Feedback","Cliente","Comunicação"],content:`
  <div class="welcome-banner">
    <h1>Feedback Contínuo ao Cliente</h1>
    <p>Manter o cliente informado sobre o andamento de sua solicitação é uma prática essencial para garantir transparência e fortalecer a relação de confiança.</p>
  </div>

  <section class="core-concepts">
    <h2>1. Periodicidade do Feedback</h2>
    <p>Recomenda-se que seja realizado um <strong>feedback a cada 24 horas</strong>, mesmo que não haja uma atualização definitiva sobre a solução.</p>
    <div class="note-box">
      <strong>Importante:</strong> Esse contato demonstra comprometimento, organização e cuidado com a experiência do cliente.
    </div>
  </section>

  <section class="core-concepts">
    <h2>2. Boas Práticas ao Atualizar o Cliente</h2>
    <p>Ao atualizar o cliente, é importante seguir estas diretrizes:</p>
    <ul>
      <li><strong>Ser claro e objetivo:</strong> Comunique o status atual de forma simples, evitando termos técnicos desnecessários.</li>
      <li><strong>Reforçar o acompanhamento:</strong> Mostre que o caso continua em análise ou execução, e que a empresa está atenta à necessidade do cliente.</li>
      <li><strong>Transmitir segurança:</strong> Utilize uma linguagem empática, que passe confiança e profissionalismo.</li>
      <li><strong>Evitar o silêncio:</strong> Mesmo sem novidades relevantes, informe que o processo está em andamento. Isso evita insegurança e possíveis reclamações.</li>
    </ul>
  </section>

  <section class="core-concepts">
    <h2>3. Registro dos Contatos</h2>
    <p>Anote cada feedback enviado em nossa plataforma <strong>w-GSC</strong> para manter o histórico atualizado e facilitar consultas futuras.</p>
  </section>

  <section class="core-concepts">
    <h2>4. Benefícios do Feedback Contínuo</h2>
    <p>Essa prática não apenas mantém o cliente informado, mas também:</p>
    <ul>
      <li>Contribui para reduzir a ansiedade do cliente.</li>
      <li>Minimiza insatisfações.</li>
      <li>Melhora a percepção da qualidade do atendimento.</li>
    </ul>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .core-concepts h2 {
      color: #0d47a1;
      margin-top: 40px;
    }

    .core-concepts ul {
      margin: 20px 0;
      padding-left: 20px;
    }

    .core-concepts li {
      margin-bottom: 8px;
      color: #333;
      font-size: 0.95em;
    }

    .note-box {
      background: #f0f4f8;
      padding: 15px;
      border-left: 4px solid #90caf9;
      margin-top: 20px;
      border-radius: 5px;
      font-size: 0.9em;
      color: #333;
    }
  </style>
`},{id:"fluxograma-atendimento-wise",title:"Fluxograma de Atendimento Técnico - Wise System",description:"Processo detalhado com etapas decisórias, orientações e encaminhamentos para suporte técnico.",group:"Processos",tags:["Atendimento","Operação","Processos"],content:`
<div class="welcome-banner">
  <h1 class="text-2xl font-bold text-sky-800">Fluxograma de Atendimento Técnico</h1>
  <p class="text-base text-sky-600">Passo a passo de como realizar um atendimento</p>
</div>

<div class="flow-container space-y-6 mt-6">
  <div class="step bg-slate-100 border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>1. Cliente entra em contato</strong>
    <p class="text-sm text-slate-700">O atendimento é iniciado via telefone, chat ou e-mail.</p>
  </div>

  <div class="step bg-white border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>2. Verificar se a empresa é cliente Wise System</strong>
    <p class="text-sm text-slate-700">- Sim: gerar protocolo de atendimento<br>- Não: informar que o suporte é exclusivo para contratantes do software</p>
  </div>

  <div class="step bg-slate-50 border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>3. Classificar o tipo de problema</strong>
    <p class="text-sm text-slate-700">Diferenciar se trata-se de <span class="font-medium">dúvida</span> ou <span class="font-medium">erro técnico</span>.</p>
  </div>

  <div class="step bg-white border-l-4 border-emerald-500 rounded-xl p-4 shadow-sm">
    <strong>4A. Se for dúvida:</strong>
    <ul class="text-sm text-slate-700 list-disc ml-4">
      <li>Entender a dúvida do cliente</li>
      <li>Orientar de forma clara e objetiva</li>
      <li>Finalizar protocolo com registro de atendimento</li>
    </ul>
  </div>

  <div class="step bg-white border-l-4 border-yellow-500 rounded-xl p-4 shadow-sm">
    <strong>4B. Se for erro técnico:</strong>
    <ul class="text-sm text-slate-700 list-disc ml-4">
      <li>Tentar reproduzir a falha junto ao cliente</li>
      <li>Analisar a possível causa</li>
      <li>Teve solução no N1?
        <ul class="list-disc ml-6">
          <li>Sim: orientar o cliente e encerrar o protocolo</li>
          <li>Não: encaminhar ao N2 (nível técnico especializado)</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="step bg-slate-50 border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>5. N2 analisou a falha</strong>
    <p class="text-sm text-slate-700">Caso resolva, retorna o atendimento para o N1 finalizar com o cliente. Se não resolver, registrar pendência para desenvolvimento.</p>
  </div>

  <div class="step bg-white border-l-4 border-emerald-500 rounded-xl p-4 shadow-sm">
    <strong>6. Encerramento do protocolo</strong>
    <p class="text-sm text-slate-700">Sempre encerrar com cordialidade, verificando se há mais dúvidas. Registrar toda a tratativa no w-GSC (ferramenta usada para registros de chamados na Wise System)</p>
  </div>
</div>

<style>
.flow-container {
  max-width: 800px;
  margin: auto;
}
.step {
  transition: all 0.3s ease;
}
.step:hover {
  background-color: #f1f5f9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
}
</style>
`},{id:"script-atendimento-wise",title:"Script de Atendimento ao Cliente",description:"Guia prático e humanizado para novos colaboradores do suporte técnico da Wise System. Este conteúdo aborda boas práticas, orientações de conduta, linguagem e procedimentos durante atendimentos telefônicos e via chat.",group:"Operação Suporte",tags:["Atendimento","Script"],content:`
<div class="welcome-banner">
  <h1>Script de Atendimento - Wise System</h1>
  <p>Este guia foi desenvolvido para acolher e orientar novos colaboradores da equipe de suporte da Wise System. O atendimento ao cliente é a nossa principal vitrine, e por isso, deve ser conduzido com profissionalismo, empatia e clareza.</p>
</div>

<section class="core-concepts">
  <h2>1. Princípios Fundamentais</h2>
  <div class="note-box">
    <strong>Dica essencial:</strong> O sucesso de um bom atendimento começa na intenção genuína de ajudar. Quando você realmente se importa, a solução aparece com mais naturalidade.
  </div>
  <ul class="checklist">
    <li><strong>Atenda até o 3º toque:</strong> Evite transmitir desatenção.</li>
    <li><strong>Evite "quem fala?":</strong> Prefira: “Por gentileza, qual o seu nome?”</li>
    <li><strong>Chame o cliente pelo nome:</strong> precedido sempre de Sr. ou Sra.</li>
    <li><strong>Mantenha tom de voz moderado:</strong> Nem alto, nem baixo.</li>
    <li><strong>Evite termos técnicos e gírias:</strong> Clareza é essencial.</li>
    <li><strong>Seja cordial mesmo com clientes difíceis:</strong> autocontrole é chave.</li>
  </ul>
</section>

<section class="core-concepts">
  <h2>2. Comunicação Eficaz</h2>
  <p>Estudos mostram que no telefone, 93% da comunicação não depende das palavras. Sua voz precisa carregar confiança e empatia. </p>
  <div class="note-box">
    <strong>Lembre-se:</strong> Um sorriso na voz transmite entusiasmo e proximidade.
  </div>
</section>

<section class="core-concepts">
  <h2>3. Scripts Telefônicos</h2>
  <div class="grid-container">
    <div class="shortcut-card">
      <code>Ligação Externa</code>
      <p>Wise System, Suporte, André. Bom dia!</p>
    </div>
    <div class="shortcut-card">
      <code>Ligação Interna</code>
      <p>Suporte, André. Boa tarde!</p>
    </div>
  </div>
  <div class="note-box">
    <strong>Boas práticas:</strong> Sempre inicie o protocolo no WGSC ao atender.
  </div>
</section>

<section class="core-concepts">
  <h2>4. Etapas do Atendimento Telefônico</h2>
  <div class="grid-container">
    <div class="shortcut-card full">
      <code>Passo a passo</code>
      <p>
        • Confirme nome e empresa do cliente<br>
        • Solicite anotação do número de protocolo<br>
        • Pergunte em que pode ajudar<br>
        • Registre tudo de forma clara<br>
        • Utilize o acesso remoto se necessário<br>
        • Se houver espera, informe o cliente a cada minuto<br>
        • Explique o que foi feito e confirme a solução<br>
        • Encerramento cordial com agradecimento e abertura para novas dúvidas
      </p>
    </div>
  </div>
</section>

<section class="core-concepts">
  <h2>5. Atendimento via Chat</h2>
  <p>O atendimento por chat exige escrita profissional e empática.</p>
  <div class="note-box">
    <strong>Boas práticas:</strong> Nunca use abreviações, gírias ou emojis. Respeite a gramática.
  </div>
  <div class="grid-container">
    <div class="shortcut-card full">
      <code>Script base</code>
      <p>
        • Bom dia, Sr. João<br>
        • Tudo bem com o(a) senhor(a)?<br>
        • Poderia, por gentileza, anotar o número do protocolo?<br>
        • Em que posso ajudá-lo?<br>
        • Obrigado por aguardar! Já identifiquei o ocorrido.<br>
        • Posso ajudá-lo em algo mais?<br>
        • A Wise System agradece seu contato. Tenha um ótimo dia!
      </p>
    </div>
  </div>
</section>

<section class="core-concepts">
  <h2>6. Situações Especiais</h2>
  <div class="grid-container">
    <div class="shortcut-card">
      <code>Cliente bloqueado</code>
      <p>Sr. João, ao tentar abrir o protocolo, consta que sua empresa possui pendências administrativas. Poderia verificar com o financeiro?</p>
    </div>
    <div class="shortcut-card">
      <code>Sem acesso ao sistema</code>
      <p>Sr. João, eu realmente preciso abrir o atendimento no sistema para poder ajudá-lo. Me desculpe!</p>
    </div>
    <div class="shortcut-card">
      <code>Todos os atendentes ocupados</code>
      <p>Sr. João, bom dia! No momento, todos os nossos atendentes estão em atendimento. Por favor, aguarde um momento que logo será atendido.</p>
    </div>
  </div>
</section>

<section class="core-concepts">
  <h2>7. Orientações Complementares</h2>
  <ul class="checklist">
    <li>Evite abreviações como "vc", "q", "td".</li>
    <li>Use pontuação e acentuação corretamente.</li>
    <li>Comece sempre com letra maiúscula.</li>
    <li>Se estiver em dúvida, pergunte ou pesquise.</li>
    <li>Descumprir essas orientações pode resultar em advertência.</li>
  </ul>
</section>

<section class="core-concepts">
  <h2>8. Revisão Rápida</h2>
  <ul class="checklist">
    <li>✔ Tenha a intenção de ajudar.</li>
    <li>✔ Tom de voz moderado.</li>
    <li>✔ Não deixe o cliente esperando.</li>
    <li>✔ Sorria com a voz.</li>
  </ul>
  <div class="note-box">
    <strong>Reflexão final:</strong> Podemos oferecer a melhor tecnologia, mas se o atendimento for ruim, colocamos tudo a perder.
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  .core-concepts h2 {
    color: #0d47a1;
    margin-top: 40px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  .shortcut-card {
    background: #ffffff;
    border-left: 4px solid #2196F3;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .shortcut-card.full {
    grid-column: 1 / -1;
  }
  .shortcut-card code {
    display: block;
    font-weight: bold;
    color: #1565c0;
    margin-bottom: 8px;
    font-size: 0.95em;
  }
  .shortcut-card p {
    font-size: 0.95em;
    color: #333;
  }
  .note-box {
    background: #f0f4f8;
    padding: 15px;
    border-left: 4px solid #90caf9;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 0.9em;
    color: #333;
  }
  .checklist li {
    margin-bottom: 8px;
    font-size: 0.95em;
  }
</style>
`},{id:"contatos-internos-wise",title:"Contatos Internos - Wise System",description:"Lista atualizada de ramais, e-mails e contatos dos setores internos da Wise System.",group:"Operação Suporte",tags:["Atendimento","Operação"],content:`<div class="welcome-banner">
    <h1 class="text-2xl font-bold text-sky-800">Contatos Internos</h1>
    <p class="text-base text-sky-700">Consulte abaixo os ramais, e-mails e formas de contato com os setores da Wise System.</p>
  </div>

  <section class="contact-section">
    <h2 class="text-xl font-semibold text-sky-700 mb-2">Ramais Internos</h2>
    <div class="grid-container">
      <div class="contact-card">
        <h3>Comercial</h3>
        <p><strong>Ramal:</strong> 218</p>
      </div>
      <div class="contact-card">
        <h3>Financeiro</h3>
        <p><strong>Ramal:</strong> 222</p>
      </div>
      <div class="contact-card">
        <h3>Desenvolvimento</h3>
        <p><strong>Ramal:</strong> 230</p>
      </div>
      <div class="contact-card">
        <h3>Recepção</h3>
        <p><strong>Ramal:</strong> 200</p>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <h2 class="text-xl font-semibold text-sky-700 mt-8 mb-2">Contatos por E-mail</h2>
    <div class="grid-container">
      <div class="contact-card">
        <h3>Comercial</h3>
        <p><strong>E-mail:</strong> <a href="mailto:comercial@wisesystem.com.br" class="text-blue-600 underline">comercial@wisesystem.com.br</a></p>
      </div>
      <div class="contact-card">
        <h3>Financeiro</h3>
        <p><strong>E-mail:</strong> <a href="mailto:financeiro@wisesystem.com.br" class="text-blue-600 underline">financeiro@wisesystem.com.br</a></p>
      </div>
      <div class="contact-card">
        <h3>Relacionamento</h3>
        <p><strong>E-mail:</strong> <a href="mailto:relacionamento@wisesystem.com.br" class="text-blue-600 underline">relacionamento@wisesystem.com.br</a></p>
      </div>
      <div class="contact-card">
        <h3>Suporte</h3>
        <p><strong>E-mail:</strong> <a href="mailto:suporte@wisesystem.com.br" class="text-blue-600 underline">suporte@wisesystem.com.br</a></p>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <h2 class="text-xl font-semibold text-sky-700 mt-8 mb-2">WhatsApp para Atendimento</h2>
      <div class="contact-card">
      <p><strong>Comercial</strong> <a href="https://wa.me/5511977444017" target="_blank" class="text-blue-600 underline">11 97744-4017</a></p>
    </div>
    <div class="contact-card">
      <p><strong>Financeiro:</strong> <a href="https://wa.me/5511917211256" target="_blank" class="text-blue-600 underline">11 91721-1256</a></p>
    </div>
     <div class="contact-card">
      <p><strong>Relacionamento:</strong> <a href="https://wa.me/1122954137" target="_blank" class="text-blue-600 underline">11 2295-4137</a></p>
    </div>
    <div class="contact-card">
      <p><strong>Suporte:</strong> <a href="https://wa.me/1126091029" target="_blank" class="text-blue-600 underline">11 2609-1029</a></p>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .contact-section {
      margin: 30px 0;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .contact-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .contact-card h3 {
      margin-top: 0;
      font-weight: 600;
      color: #0d47a1;
    }

    .contact-card p {
      margin: 6px 0;
      font-size: 0.95em;
      color: #333;
    }

    .contact-card a {
      color: #1976d2;
    }
  </style>
  `},{id:"estrutura-operacao-suporte",title:"Estrutura e Ocupações da Operação do Suporte",description:"Descrição detalhada dos níveis e estágios da operação de suporte, incluindo responsabilidades e fluxos de trabalho.",group:"Operação Suporte",tags:["Operação","Processos"],content:`
<div class="welcome-banner">
  <h1>Estrutura da Operação de Suporte</h1>
  <p>Este guia detalha a organização hierárquica e as responsabilidades de cada nível da equipe de suporte.</p>
</div>

<section class="structure-overview">
  <h2 style="color: #1a5276;">Visão Geral da Estrutura</h2>
  
  <div class="structure-card">
    <p>A operação de suporte é organizada em três níveis principais:</p>
    <ul class="blue-bullets">
      <li><strong>Relacionamento</strong>: Coordenação geral e gestão de processos</li>
      <li><strong>Nível 1 (N1)</strong>: Suporte direto ao cliente dividido em dois estágios</li>
      <li><strong>Nível 2 (N2)</strong>: Suporte técnico avançado e desenvolvimento</li>
    </ul>
  </div>
</section>

<section class="relationship-section">
  <h2 style="color: #1a5276; border-bottom: 2px solid #3498db; padding-bottom: 8px;">Relacionamento</h2>
  
  <div class="role-card">
    <h3 style="color: #2874a6;">Responsabilidades Principais</h3>
    <div class="responsibilities">
      <ul class="blue-bullets">
        <li>Agendamentos e reuniões com clientes</li>
        <li>Monitoramento da equipe e acompanhamento de casos críticos</li>
        <li>Registro de sugestões de melhorias</li>
        <li>Tratativa de e-mails e redirecionamentos</li>
        <li>Alteração e cadastro de supervisores Sigo</li>
        <li>Organização do suporte e gestão de processos</li>
        <li>Elaboração de documentações</li>
      </ul>
    </div>
  </div>
</section>

<section class="level-section">
  <h2 style="color: #1a5276; border-bottom: 2px solid #3498db; padding-bottom: 8px;">Nível 1 (N1)</h2>
  <p>Departamento dividido em 2 estágios com responsabilidades complementares:</p>
  
  <div class="stage-container">
    <div class="stage-card">
      <h3 style="color: #2874a6;">Estágio 1</h3>
      <div class="responsibilities">
        <ul class="blue-bullets">
          <li>Suporte direto aos clientes</li>
          <li>Análise de casos em até 1h</li>
          <li>Coleta de dados para tratativas</li>
          <li>Feedbacks aos clientes</li>
          <li>Direcionamento de casos financeiros, comerciais e de faturamento para o Estágio 2</li>
          <li>Elaboração de documentações</li>
        </ul>
      </div>
    </div>
    
    <div class="stage-card">
      <h3 style="color: #2874a6;">Estágio 2</h3>
      <div class="responsibilities">
        <ul class="blue-bullets">
          <li>Suporte direto aos clientes</li>
          <li>Análise de casos em até 2h</li>
          <li>Acompanhamento de reuniões operacionais</li>
          <li>Inclusão de casos na planilha mediante autorização</li>
          <li>Suporte exclusivo em migrações e homologações bancárias/NFSe</li>
          <li>Ministração de treinamentos</li>
          <li>Registro de sugestões de melhorias</li>
          <li>Tratativa de e-mails e redirecionamentos</li>
          <li>Elaboração de documentações</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="level-section">
  <h2 style="color: #1a5276; border-bottom: 2px solid #3498db; padding-bottom: 8px;">Nível 2 (N2)</h2>
  
  <div class="role-card">
    <h3 style="color: #2874a6;">Responsabilidades Técnicas</h3>
    <div class="responsibilities">
      <ul class="blue-bullets">
        <li>Desenvolvimento de relatórios e estrutura do dashboard</li>
        <li>Análise de casos avançados na planilha de Controle de Correção de Erros</li>
        <li>Redirecionamento de erros para a equipe de desenvolvimento</li>
        <li>Estruturação de queries para banco de dados</li>
        <li>Processos relacionados a migração</li>
        <li>Tratativa de implantação do W3 server</li>
        <li>Tratativa de erros por banco de dados no W3</li>
        <li>Testes de sistema</li>
        <li>Acompanhamento de casos críticos com administração das empresas</li>
        <li>Participação em reuniões técnicas sobre software</li>
        <li>Homologações bancárias e de NFSe</li>
        <li>Tratativas de sugestões de melhorias</li>
        <li>Auxílio na elaboração de documentações</li>
      </ul>
    </div>
  </div>
  
  <div class="workflow-card">
    <h3 style="color: #2874a6;">Fluxo de Atendimento N2</h3>
    <ol class="blue-numbers">
      <li>Recebimento de casos complexos do N1</li>
      <li>Análise técnica detalhada</li>
      <li>Desenvolvimento de soluções ou relatórios</li>
      <li>Coordenação com equipe de desenvolvimento quando necessário</li>
      <li>Testes e validação de soluções</li>
      <li>Documentação do processo</li>
      <li>Feedback ao N1 e cliente</li>
    </ol>
  </div>
</section>

<style>
  .welcome-banner {
    background: #eaf2f8;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #2874a6;
  }
  
  .structure-card, .role-card, .workflow-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
    border-left: 4px solid #3498db;
  }
  
  .stage-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 25px;
    margin: 25px 0;
  }
  
  .stage-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #3498db;
  }
  
  .blue-bullets {
    list-style: none;
    padding-left: 20px;
  }
  
  .blue-bullets li {
    margin-bottom: 12px;
    padding-left: 25px;
    position: relative;
    line-height: 1.5;
  }
  
  .blue-bullets li:before {
    content: "•";
    color: #2874a6;
    font-size: 1.4em;
    position: absolute;
    left: 0;
    top: -3px;
  }
  
  .blue-numbers {
    list-style: none;
    counter-reset: blue-counter;
    padding-left: 0;
  }
  
  .blue-numbers li {
    counter-increment: blue-counter;
    margin-bottom: 15px;
    padding-left: 35px;
    position: relative;
  }
  
  .blue-numbers li:before {
    content: counter(blue-counter);
    background-color: #2874a6;
    color: white;
    font-size: 0.9em;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .responsibilities {
    margin-top: 15px;
  }
  
  .workflow-card {
    margin-top: 25px;
    background-color: #f8f9fc;
    border-left: 4px solid #1a5276;
  }
</style>
`},{id:"atalhos-sincro-mensagens-rapidas",title:"Atalhos Sincro - Mensagens Rápidas",description:"Manual completo de atalhos e mensagens padronizadas para agilizar o atendimento ao cliente na ferramenta Sincro da Wise System.",group:"Atendimento e Suporte",content:`
<div class="welcome-banner">
  <h1>Manual de Atalhos Sincro - Mensagens Rápidas</h1>
  <p>A fim de facilitar o processo de escrita e comunicação com o cliente, o Sincro disponibiliza um sistema de mensagens automáticas que, ao digitar um 'atalho', permite que determinadas frases padrão sejam encaminhadas sem a necessidade de escrever a frase completa. Recomendamos o uso deste recurso para otimizar o processo de escrita.</p>
</div>

<section class="shortcuts-section">
  <h2>Início da Conversa</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/saudação</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Wise System, Suporte, Bom dia! Espero que esteja bem! Em que podemos ajudar?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Wise System, Suporte, Bom dia! Espero que esteja bem! Em que podemos ajudar?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/farei</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Farei o possível para ajudar!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Farei o possível para ajudar!</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/protocolo</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Verifiquei internamente e, por não haver atendimentos anteriores referentes a esta questão, este atendimento gerou o protocolo --.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Verifiquei internamente e, por não haver atendimentos anteriores referentes a esta questão, este atendimento gerou o protocolo --.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/dispo</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Claro, estou à disposição. Qual seria a outra questão?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Claro, estou à disposição. Qual seria a outra questão?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/ocupa</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Seu contato é muito importante para nós! No momento todos os nossos agentes estão em atendimento! Peço gentilmente que aguarde um momento, em breve iremos atendê-lo(a).')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Seu contato é muito importante para nós! No momento todos os nossos agentes estão em atendimento! Peço gentilmente que aguarde um momento, em breve iremos atendê-lo(a).</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/outra</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Claro, estou à disposição. Qual seria a outra questão?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Claro, estou à disposição. Qual seria a outra questão?</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Observação Importante</h4>
    <p>Antes de gerar um protocolo, verifique se há um chamado em aberto no WGSC com outro analista. Em caso de dúvida sobre a natureza da solicitação (erro ou não), consulte outro analista mais experiente.</p>
  </div>
</section>

<section class="shortcuts-section">
  <h2>Meio da Conversa</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/momento</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Um momento por gentileza, vou verificar internamente.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Um momento por gentileza, vou verificar internamente.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/obrigado</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Obrigado por aguardar.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Obrigado por aguardar.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/agrade</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Agradeço a compreensão, após verificar internamente, ...')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Agradeço a compreensão, após verificar internamente, ...</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/desculpa</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Peço desculpas pela demora.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Peço desculpas pela demora.</p>
    </div>
  </div>
</section>

<section class="shortcuts-section">
  <h2>Encerramento</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/ajudo</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('No momento, ajudo em algo mais?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>No momento, ajudo em algo mais?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/duvida</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('O senhor ficou com alguma dúvida quanto à questão?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>O senhor ficou com alguma dúvida quanto à questão?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/disponha</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Disponha, qualquer dúvida, estamos à disposição! A Wise System agradece seu contato, tenha um ótimo dia!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Disponha, qualquer dúvida, estamos à disposição! A Wise System agradece seu contato, tenha um ótimo dia!</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/retor</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Wise System - Suporte, (SEU NOME). Referente ao chamado com protocolo nº xxxx, que se refere ao caso (DETALHAR O CASO) o mesmo já foi corrigido e atualizado. 

Qualquer dúvida, estamos à disposição!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Wise System - Suporte, (SEU NOME). Referente ao chamado com protocolo nº xxxx, que se refere ao caso (DETALHAR O CASO) o mesmo já foi corrigido e atualizado.<br>
Qualquer dúvida, estamos à disposição! </p>
    </div>
  </div>
</section>

<section class="anydesk-section">
  <h2>Mensagens para Cenários de Acesso AnyDesk</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/anydesk</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Por favor, poderia me enviar o acesso AnyDesk?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Por favor, poderia me enviar o acesso AnyDesk?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/solici</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Solicitei o acesso AnyDesk.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Solicitei o acesso AnyDesk.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/informação</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('*Informações transmitidas através do acesso remoto.*')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>*Informações transmitidas através do acesso remoto.*</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/finalizado</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Finalizado via AnyDesk, qualquer dúvida estaremos à disposição! A Wise System agradece o seu contato, tenha uma ótima tarde!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Finalizado via AnyDesk, qualquer dúvida estaremos à disposição! A Wise System agradece o seu contato, tenha uma ótima tarde!</p>
      <p class="note">(Se for via ligação, utilize: "Finalizado via ligação")</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Procedimento para Acesso Remoto</h4>
    <p>Sempre registre no Bloco de Notas em seguida informe na conversa com o cliente o que foi feito durante o acesso remoto: problema identificado e solução aplicada, no atalho "Informação". Esse procedimento garante histórico claro caso o cliente retorne com o mesmo problema.</p>
  </div>
</section>

<section class="pesquisa-section">
  <h2>Pesquisa de Satisfação</h2>
  
  <div class="shortcut-card full-width">
    <div class="shortcut-header">
      <h3>/pesquisa</h3>
      <button class="copy-btn" onclick="navigator.clipboard.writeText('A sua satisfação é a nossa prioridade! Por isso, com a finalização do seu Protocolo de Atendimento, você receberá uma pesquisa em seu e-mail. Sua opinião é fundamental para que possamos avaliar nosso atendimento e melhorar continuamente nossos serviços. Se puder avaliar neste momento o atendimento que recebeu, ficaremos imensamente gratos! Agradecemos pela confiança e por escolher a Wise System como parceira em soluções tecnológicas.')">
        <span class="copy-icon"></span> Copiar
      </button>
    </div>
    <p>A sua satisfação é a nossa prioridade! Por isso, com a finalização do seu Protocolo de Atendimento, você receberá uma pesquisa em seu e-mail. Sua opinião é fundamental para que possamos avaliar nosso atendimento e melhorar continuamente nossos serviços. Se puder avaliar neste momento o atendimento que recebeu, ficaremos imensamente gratos! Agradecemos pela confiança e por escolher a Wise System como parceira em soluções tecnológicas.</p>
  </div>
</section>

<section class="situacoes-adversas-section">
  <h2>Mensagens para Situações Adversas</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/por falta</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Prezado(a) Supervisor Sigo, por falta de comunicação este atendimento será encerrado. Peço a gentileza que envie uma nova mensagem para iniciar um novo atendimento. A Wise System agradece o seu contato, tenha um ótimo dia!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Prezado(a) Supervisor Sigo, por falta de comunicação este atendimento será encerrado. Peço a gentileza que envie uma nova mensagem para iniciar um novo atendimento. A Wise System agradece o seu contato, tenha um ótimo dia!</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/supervisor</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Agradecemos por entrar em contato com o Suporte Técnico da Wise System. Verificamos que o suporte é exclusivo para os usuários cadastrados como Supervisor Sigo [Nome do Usuário] e Suplente Sigo [Nome do Usuário]. Sugerimos entrar em contato com esses usuários para que possam encaminhar sua solicitação.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Agradecemos por entrar em contato com o Suporte Técnico da Wise System. Verificamos que o suporte é exclusivo para os usuários cadastrados como Supervisor Sigo [Nome do Usuário] e Suplente Sigo [Nome do Usuário]. Sugerimos entrar em contato com esses usuários para que possam encaminhar sua solicitação.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/fina</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Sr. [ ], ao tentar abrir o protocolo de atendimento em nosso sistema, consta que sua empresa está com pendência administrativa. Poderia, por gentileza, verificar essa situação com seu departamento financeiro?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Sr.[], ao tentar abrir o protocolo de atendimento em nosso sistema, consta que sua empresa está com uma pendência administrativa. Poderia, por gentileza, verificar essa situação com o nosso departamento financeiro pelo número (11) 91721-1256?
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .shortcut-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .shortcut-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    position: relative;
  }
  
  .shortcut-card.full-width {
    grid-column: 1 / -1;
  }
  
  .shortcut-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .shortcut-header h3 {
    margin: 0;
    color: #2196F3;
    font-size: 1.2em;
  }
  
  .copy-btn {
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;
  }
  
  .copy-btn:hover {
    background: #e3f2fd;
    border-color: #2196F3;
  }
  
  .copy-btn:active {
    transform: scale(0.95);
  }
  
  .note {
    font-size: 0.9em;
    color: #777;
    font-style: italic;
    margin-top: 10px;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .warning-box h4 {
    margin-top: 0;
    color: #ff9800;
  }
</style>

<script>
// Função para mostrar feedback visual ao copiar
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('copy-btn') || e.target.closest('.copy-btn')) {
    const btn = e.target.classList.contains('copy-btn') ? e.target : e.target.closest('.copy-btn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '✓ Copiado!';
    btn.style.background = '#4caf50';
    btn.style.color = 'white';
    btn.style.borderColor = '#4caf50';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  }
});
<\/script>
`}]},br={id:"duvidas",title:"Informações",description:"Este módulo tem como objetivo a retirada de duvidas.",icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <g fill="currentColor">
        <path d="M18.748 12.816c-1.74.067-3.313.688-4.154 1.53a1 1 0 1 1-1.414-1.415c1.297-1.297 3.409-2.033 5.49-2.114c2.095-.081 4.382.492 5.984 2.094a1 1 0 0 1-1.415 1.414c-1.09-1.091-2.764-1.577-4.491-1.51Z"/>
        <path fill-rule="evenodd" d="M27.384 28.936A12.948 12.948 0 0 1 19 32c-7.18 0-13-5.82-13-13S11.82 6 19 6s13 5.82 13 13c0 3.195-1.152 6.12-3.064 8.384L31.144 27l10.284 10.284c.763.763.763 2 0 2.762l-1.382 1.382c-.763.763-2 .763-2.762 0L27 31.144l.384-2.208ZM30 19c0 6.075-4.925 11-11 11S8 25.075 8 19S12.925 8 19 8s11 4.925 11 11Zm7.249 16.933l-6.785-6.785l-1.12.195l-.196 1.121l6.805 6.805l1.296-1.336Zm.118 2.75l1.298 1.298l1.316-1.316l-1.318-1.318l-1.296 1.336Z" clip-rule="evenodd"/>
    </g>
</svg>`,topics:[{id:"guia-painel-de-chamada-sigo-web",title:"Guia de Utilização do Painel de Chamada no Sigo Web",description:"Passo a passo completo para configurar e operar o Painel de Chamada, desde a criação do link até a chamada do funcionário pelo médico no consultório.",group:"Processos",tags:["eSocial","Funcionalidades"],content:`
  <div class="welcome-banner-chamada">
    <h1>Olá! Bem-vindo ao Guia do Painel de Chamada!</h1>
    <p>Este material foi criado para te ajudar a entender o fluxo de atendimento e como utilizar nosso painel de chamada de forma simples e eficiente.</p>
  </div>

  <section class="process-overview">
    <h2>Como Funciona o Fluxo?</h2>
    <p>O processo envolve três etapas principais: a criação do painel, a configuração do atendimento pela recepção e a chamada final pelo médico. Vamos detalhar cada uma delas a seguir.</p>
  </section>

  <section class="step-by-step-guide">
    <h2>Passo a Passo da Operação</h2>
    
    <div class="step-card">
      <h3 class="step-title">Passo 1: Criar o Link do Painel de Chamada</h3>
      <div class="step-content">
        <p>O primeiro passo é gerar o link que será exibido na TV ou monitor da sala de espera. Este link é único e persistente.</p>
        
        <h4>Instruções:</h4>
        <ol>
          <li>Acesse o menu: <strong>Atendimento > Criar painel de chamada</strong>.</li>
          <li>Na tela, selecione os locais de atendimento que farão parte deste painel (Ex: Coleta, Consultório, Sala de Espera, etc.).</li>
          <li>Clique no botão <strong>"Gerar Link"</strong> para obter a URL do seu painel.</li>
        </ol>
        
        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'menu-criar-painel.png']</p>
          <span>Navegação e seleção dos locais para gerar o link do painel.</span>
        </div>
      </div>
    </div>

    <div class="step-card">
      <h3 class="step-title">Passo 2: Preparar o Atendimento (Recepção)</h3>
      <div class="step-content">
        <p>A recepcionista é responsável por direcionar o funcionário (paciente) para a fila de espera correta, preparando-o para a chamada do médico.</p>
        
        <h4>Instruções:</h4>
        <ul>
          <li>A recepção deve incluir o atendimento em: <strong>Menu > Atendimento > Recepção</strong>, filtrando pela sala de espera desejada.</li>
          <li>Ao editar o atendimento do funcionário, é crucial preencher três campos:</li>
          <li><strong>1. Sala de Espera:</strong> Selecione para qual fila o funcionário será enviado (Ex: Audiometria, Exame médico).</li>
          <li><strong>2. Status:</strong> Mude o status para <strong>"Aguardando Atendimento"</strong>.</li>
          <li><strong>3. Procedimento:</strong> Na aba "Procedimentos", edite o exame e defina o <strong>Local do Atendimento</strong> e o <strong>Profissional Médico</strong> responsável.</li>
        </ul>

        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'configuracao-atendimento.png']</p>
          <span>Tela de edição do atendimento, destacando os campos Sala de Espera, Status e a aba Procedimentos.</span>
        </div>

        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'edicao-procedimento.png']</p>
          <span>Janela de edição do procedimento, mostrando a seleção da Unidade de Atendimento e do Médico.</span>
        </div>
      </div>
    </div>

    <div class="step-card">
      <h3 class="step-title">Passo 3: Chamar o Funcionário (Consultório)</h3>
      <div class="step-content">
        <p>Após a preparação pela recepção, o funcionário fica visível para o médico, que pode então realizar a chamada para o consultório.</p>
        
        <h4>Instruções para o Médico:</h4>
        <ol>
          <li>O médico acessa seu módulo em: <strong>Menu > Atendimento > Consultório</strong>.</li>
          <li>A lista de funcionários "Aguardando Atendimento" será exibida.</li>
          <li>Selecione o funcionário desejado e clique no botão <strong>"Chamar Funcionário"</strong>.</li>
          <li>Pronto! O nome do funcionário e o local de destino aparecerão instantaneamente no painel de chamada.</li>
        </ol>

        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'tela-consultorio-medico.png']</p>
          <span>Tela do consultório do médico, mostrando a lista de pacientes e o botão "Chamar Funcionário".</span>
        </div>
      </div>
    </div>

  </section>

  <section class="important-note">
    <div class="note-card">
      <h3>Observação Importante</h3>
      <p>Independentemente do tipo de usuário no sistema, <strong>somente o perfil de "Médico"</strong> consegue visualizar e chamar os funcionários através do módulo "Consultório". Outros perfis não terão acesso a esta funcionalidade.</p>
    </div>
  </section>

  <style>
    .welcome-banner-chamada {
      background: linear-gradient(135deg, #e3f2fd, #bbdefb);
      color: #1e3a56;
      padding: 30px;
      border-radius: 12px;
      margin-bottom: 35px;
      text-align: center;
      border: 1px solid #90caf9;
    }
    
    .process-overview {
        text-align: center;
        margin-bottom: 30px;
        padding: 0 20px;
    }

    .process-overview h2 {
        color: #333;
        margin-bottom: 10px;
    }
    
    .step-by-step-guide .step-card {
      background: #ffffff;
      padding: 0;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      margin-bottom: 30px;
      overflow: hidden;
      border: 1px solid #e0e0e0;
    }
    
    .step-card .step-title {
      background: #f5f7fa;
      padding: 20px 25px;
      margin: 0;
      font-size: 1.3em;
      color: #0d47a1;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .step-card .step-content {
      padding: 25px;
    }
    
    .step-card h4 {
      color: #1976d2;
      margin-top: 20px;
      margin-bottom: 15px;
      border-bottom: 2px solid #e3f2fd;
      padding-bottom: 8px;
    }

    .step-card ol, .step-card ul {
        padding-left: 25px;
        line-height: 1.8;
    }
    
    .image-placeholder-chamada {
      background: #fafafa;
      padding: 30px;
      text-align: center;
      margin: 25px 0 15px 0;
      border: 2px dashed #d0dbe8;
      border-radius: 8px;
    }

    .image-placeholder-chamada p {
        font-weight: bold;
        color: #555;
        margin: 0 0 10px 0;
    }

    .image-placeholder-chamada span {
        font-size: 0.9em;
        color: #777;
    }
    
    .important-note .note-card {
      background: #fff9c4;
      border-left: 5px solid #fbc02d;
      padding: 20px 25px;
      border-radius: 8px;
      margin: 25px 0;
    }

    .note-card h3 {
        color: #795548;
        margin-top: 0;
    }
  </style>
  `},{id:"prospect-to-company-conversion",title:"Solução para Erro de Duplicidade ao Cadastrar Empresa",description:"Orientações para resolver conflitos quando um Prospect com pedidos não aprovados impede novo cadastro.",group:"Processos",tags:["Cadastros","Erro","Empresas"],content:`
    <div class="issue-header">
      <h1>Prospect → Empresa: Resolução de Conflitos</h1>
      <p>Problema relatado: Erro de duplicidade ao cadastrar empresa com CNPJ existente</p>
    </div>

    <section class="problem-analysis">
      <h2>Análise do Caso</h2>
      <div class="case-card">
        <div class="case-timeline">
          <div class="timeline-step">
            <div class="step-number">1</div>
            <h3>Cadastro Inicial</h3>
            <p>Empresa registrada como <strong>Prospect</strong> com dois pedidos gerados</p>
          </div>
          <div class="timeline-arrow">→</div>
          <div class="timeline-step">
            <div class="step-number">2</div>
            <h3>Pedidos Não Aprovados</h3>
            <p>Nenhum dos pedidos foi aprovado</p>
          </div>
          <div class="timeline-arrow">→</div>
          <div class="timeline-step error">
            <div class="step-number">3</div>
            <h3>Exclusão do Prospect</h3>
            <p>Registro foi excluído no módulo Prospects</p>
          </div>
          <div class="timeline-arrow">→</div>
          <div class="timeline-step error">
            <div class="step-number">4</div>
            <h3>Tentativa de Novo Cadastro</h3>
            <p>Erro de duplicidade ao tentar cadastrar no módulo Empresas</p>
          </div>
        </div>

        <div class="technical-details">
          <h3>Motivo Técnico:</h3>
          <div class="detail-item">
            <div class="detail-icon">!</div>
            <p>O sistema mantém referência do CNPJ mesmo após exclusão do prospect quando há pedidos pendentes</p>
          </div>
          <div class="detail-item">
            <div class="detail-icon">✓</div>
            <p>A migração para Empresas só ocorre após <strong>aprovação</strong> de pelo menos um pedido</p>
          </div>
        </div>
      </div>
    </section>

    <section class="solution-section">
      <h2>Orientações para Resolução</h2>
      <div class="solution-flow">
        <div class="solution-step">
          <div class="step-number">1</div>
          <h3>Restaurar o Prospect</h3>
          <p>Recuperar o cadastro original no módulo Prospects</p>
        </div>
        <div class="solution-arrow">→</div>
        <div class="solution-step">
          <div class="step-number">2</div>
          <h3>Gerenciar Pedidos</h3>
          <p>Ajustar pedidos existentes ou criar novo pedido</p>
        </div>
        <div class="solution-arrow">→</div>
        <div class="solution-step highlight">
          <div class="step-number">3</div>
          <h3>Aprovar Pedido</h3>
          <p>Concluir o processo de aprovação para ativar migração</p>
        </div>
      </div>

      <div class="benefit-box">
        <h3>Vantagens desta Solução:</h3>
        <ul>
          <li>Preserva todos os dados históricos</li>
          <li>Evita necessidade de cadastro manual</li>
          <li>Não requer intervenção técnica no banco de dados</li>
          <li>Seguindo o fluxo natural do sistema</li>
        </ul>
      </div>
    </section>
  
    <style>
      .issue-header {
        background: #e3f2fd;
        color: white;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      .issue-header h1 {
        margin-top: 0;
        font-size: 1.8em;
      }
      .case-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        margin-top: 20px;
      }
      .case-timeline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        flex-wrap: wrap;
      }
      .timeline-step {
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 150px;
        flex: 1;
        margin: 0 5px;
        position: relative;
      }
      .timeline-step.error {
        border-top: 3px solid #f44336;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 10px;
      }
      .timeline-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.2em;
      }
      .technical-details {
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
      }
      .detail-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
      }
      .detail-icon {
        background: #2196F3;
        color: white;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 15px;
        flex-shrink: 0;
      }
      .solution-flow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        flex-wrap: wrap;
      }
      .solution-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 180px;
        flex: 1;
        margin: 0 5px;
      }
      .solution-step.highlight {
        background: #e3f2fd;
        border: 2px solid #2196F3;
      }
      .solution-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.3em;
      }
      .benefit-box {
        background: #e8f5e9;
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
      }
      .benefit-box h3 {
        margin-top: 0;
        color: #2e7d32;
      }
      .checklist-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        margin-top: 20px;
      }
      .checklist-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }
      .checklist-item input {
        margin-right: 15px;
      }
      h2 {
        color: #2196F3;
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 8px;
      }
      @media (max-width: 768px) {
        .case-timeline, .solution-flow {
          flex-direction: column;
        }
        .timeline-arrow, .solution-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
  `},{id:"configuracao-servidor-smtp-sigoweb",title:"Configuração do Servidor SMTP - SigoWeb",description:"Guia completo para configuração do servidor SMTP no sistema SigoWeb, incluindo dados necessários, orientações para provedores e configurações específicas para domínios públicos e privados.",group:"Seu computador",tags:["Configurações","Funcionaliades"],content:`
<div class="welcome-banner">
  <h1>Configuração do Servidor SMTP</h1>
  <p>Este guia técnico orienta sobre a configuração do protocolo SMTP para envio automatizado de e-mails no sistema SigoWeb.</p>
</div>

<section class="core-concepts">
  <h2>1. Importância do SMTP para uma clínica de SST</h2>
  <div class="concept-card">
    <p>O <strong>SMTP (Simple Mail Transportation Protocol)</strong> é um protocolo de rede utilizado para:</p>
    <ul>
      <li>• Encaminhar e disparar e-mails de forma automatizada através de gatilhos ou comandos</li>
      <li>• Enviar um ou centenas de e-mails simultaneamente para diversos destinatários</li>
      <li>• Agilizar o envio de documentos como guias de autorizações, boletos e demonstrativos financeiros</li>
      <li>• Padronizar comunicações com empresas e funcionários</li>
    </ul>
  </div>
</section>

<section class="configuration-steps">
  <h2>2. Criação de um SMTP</h2>
  
  <div class="step-card">
    <h3>Pré-requisitos</h3>
    <ul>
      <li>1/ Conta de e-mail configurada em um provedor compatível</li>
      <li>2/ Liberação da verificação de duas etapas (obrigatório na maioria dos provedores modernos)</li>
      <li>3/ Suporte técnico para configuração de portas e criptografia</li>
    </ul>
  </div>

    </br><h3>Principais provedores de SMTP:</h3>
  <div class="provider-comparison">
    <div class="provider-card">
      <h4>Gmail</h4>
      <ul>
        <li>Verificação de duas etapas obrigatória</li>
        <li>Alta documentação disponível</li>
        <li>Configuração intuitiva</li>
      </ul>
    </div>
    
    <div class="provider-card">
      <h4>Thunderbird</h4>
      <ul>
        <li>Boa documentação</li>
        <li>Suporte limitado</li>
      </ul>
    </div>
    
    <div class="provider-card">
      <h4>Locaweb</h4>
      <ul>
        <li>Utiliza senha única</li>
        <li>Suporte especializado</li>
        <li>Boa documentação</li>
      </ul>
    </div>
  </div>
  
  <h3>Configuração no Sistema SigoWeb</h3>
  <div class="step-by-step">
    <div class="step">
      <h4>Passo 1</h4>
      <p>Acesse o módulo "Configurações Gerais"</p>
    </div>
    
    <div class="step">
      <h4>Passo 2</h4>
      <p>Localize o campo "Servidor SMTP"</p>
    </div>
    
    <div class="step">
      <h4>Passo 3</h4>
      <p>Preencha os dados conforme instruções abaixo</p>
    </div>
  </div>
</section>

<section class="required-data">
  <h2>3. Dados necessários para o preenchimento</h2>
  
  <div class="data-card">
    <h3>Endereço do servidor SMTP</h3>
    <p>Endereço genérico do provedor (ex: smtp.gmail.com, smtplw.com.br)</p>
  </div>
  
  <div class="data-card">
    <h3>Porta SMTP</h3>
    <table class="port-table">
      <tr>
        <th>Porta</th>
        <th>Tecnologia</th>
        <th>Segurança</th>
      </tr>
      <tr>
        <td>25</td>
        <td>Sem criptografia</td>
        <td>Baixa</td>
      </tr>
      <tr>
        <td>465</td>
        <td>SSL</td>
        <td>Média</td>
      </tr>
      <tr>
        <td>587</td>
        <td>TLS/STARTTLS</td>
        <td>Alta (recomendada)</td>
      </tr>
      <tr>
        <td>2525</td>
        <td>Não oficial</td>
        <td>Variável</td>
      </tr>
    </table>
  </div>
  
  <div class="data-card">
    <h3>Credenciais de acesso, exemplo:</h3>
    <ul>
      <li>•	Servidor SMTP: smtp.meuprovedor.com.br </li>
      <li>•	Login SMTP: wisesystem@meuprovedor.com.br</li>
    </ul>
  </div>
  
  <div class="data-card">
    <h3>Configurações de segurança</h3>
    <ul>
      <li>Autenticação obrigatória (normalmente SIM)</li>
      <li>Conexão SSL/TLS (depende da porta utilizada)</li>
    </ul>
  </div>
</section>

<section class="email-providers">
  <h2>4. Orientações para Provedores de E-mail</h2>
  
  <div class="provider-links">
    <h3>Documentação oficial:</h3>
    <ul>
      <li><a href="https://support.microsoft.com/pt-br/office/configura%C3%A7%C3%B5es-pop-imap-e-smtp-para-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040" target="_blank">Configurações SMTP para Outlook/Microsoft</a></li>
      <li><a href="https://support.google.com/a/answer/176600?hl=pt" target="_blank">Configurações SMTP para Google Workspace</a></li>
    </ul>
  </div>
  
  <div class="special-instructions">
    <h3>Configuração Especial para Google</h3>
    <p>Devido à autenticação de dois fatores, é necessário gerar uma senha específica para aplicativos:</p>
    <ol>
      <li>Acesse o <a href="https://support.google.com/accounts/answer/185833?hl=pt-BR" target="_blank">gerador de senhas de app</a></li>
      <li>Selecione "Outro (Nome personalizado)"</li>
      <li>Digite "SigoWeb" como nome do aplicativo</li>
      <li>Use a senha gerada no campo "Senha SMTP" do sistema</li>
    </ol>
  </div>
</section>

<section class="domain-config">
  <h2>4.1 Configuração para Domínios Públicos e Privados</h2>
  
  <div class="config-card">
    <h3>Domínios Públicos (Gmail, Outlook, etc)</h3>
    <ul>
      <li>Seguir configurações padrão do provedor</li>
      <li>Utilizar endereços SMTP genéricos</li>
    </ul>
  </div>
  
  <div class="config-card">
    <h3>Domínios Privados (Empresariais)</h3>
    <ul>
      <li>Servidor SMTP específico (ex: smtp.meuprovedor.com.br)</li>
      <li>Login SMTP completo (ex: wisesystem@meuprovedor.com.br)</li>
      <li>Configurações personalizadas de porta e segurança</li>
    </ul>
    <p class="note">Recomenda-se consultar o suporte técnico do provedor para configurações específicas</p>
  </div>
  
  <h3>Exemplo de Configuração para Domínio Privado:</h3>
  <div class="code-block">
    <p>Endereço SMTP: smtp.meudominio.com.br</p>
    <p>Porta: 587</p>
    <p>Login: sistema@meudominio.com.br</p>
    <p>Requer SSL: Sim</p>
    <p>Requer autenticação: Sim</p>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card, .data-card, .config-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .provider-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .provider-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4CAF50;
  }
  
  .step-by-step {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
  }
  
  .step {
    flex: 1;
    min-width: 200px;
    background: #e8f5e9;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #2E7D32;
  }
  
  .port-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  
  .port-table th, .port-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  .port-table th {
    background-color: #f5f5f5;
  }
  
  .provider-links ul {
    list-style-type: none;
    padding: 0;
  }
  
  .provider-links li {
    margin: 10px 0;
  }
  
  .provider-links a {
    color: #1a73e8;
    text-decoration: none;
  }
  
  .provider-links a:hover {
    text-decoration: underline;
  }
  
  .special-instructions {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #FFC107;
    margin: 20px 0;
  }
  
  .code-block {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    font-family: monospace;
    margin: 15px 0;
  }
  
  .note {
    font-style: italic;
    color: #666;
    margin-top: 10px;
  }
  
  .image-placeholder {
    background: #fafafa;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ddd;
    border-radius: 8px;
    color: #777;
  }
</style>
`},{id:"processo-solicitacoes-banco-dados",title:"Processo de Solicitações via Banco de Dados",description:"Protocolo completo para solicitações via banco de dados com ênfase na análise prévia, informações obrigatórias e configuração correta de status.",group:"Processos",tags:["Atendimento","Protocolo","Processo"],content:`
    <div class="welcome-banner">
      <h1>Solicitações Técnicas via Banco de Dados</h1>
      <p>Este guia detalha o processo correto para solicitações que exigem intervenção direta no banco de dados, garantindo eficiência e rastreabilidade.</p>
    </div>

    <section class="core-concepts">
      <h2>Análise Prévia Obrigatória</h2>
      <div class="concept-card">
        <p><strong>Requisito fundamental:</strong> Todas as solicitações devem passar por análise técnica completa antes do encaminhamento ao departamento responsável.</p>
        <ul>
          <li>• Realizar diagnóstico completo durante o atendimento</li>
          <li>• Efetuar sondagens técnicas com o cliente para identificar causas-raiz</li>
          <li>• Documentar todas as tentativas de resolução no ambiente local</li>
          <li>• Validar compreensão do cliente sobre o problema antes do encaminhamento</li>
        </ul>
      </div>
    <section class="documents-section">
      <h2>Informações Obrigatórias para Solicitação</h2>
      
      <div class="document-card">
        <h3 class="document-title">Dados Técnicos Essenciais</h3>
        <div class="document-content">
          <p>Toda solicitação enviada por e-mail deve conter:</p>
          <ul>
            <li><strong>Endereço de destino:</strong> suporte@wisesystem.com.br</li>
            <li><strong>Número de protocolo:</strong> Identificador único do atendimento</li>
            <li><strong>Nome do Analista:</strong> Responsável pelo atendimento inicial</li>
            <li><strong>IDs relacionados:</strong> Conjunto completo de identificadores técnicos</li>
          </ul>
          
          <h4>Estrutura Padrão do E-mail:</h4>
          <div class="code-block">
            <p><strong>Assunto:</strong> Solicitação Banco de Dados - [N° Protocolo]</p>
            <p><strong>Corpo:</strong></p>
            <p>• Descrição detalhada da ocorrência<br>
               • IDs envolvidos (listados abaixo)<br>
          </div>
        </div>
      </div>

  <!-- Imagem: Exemplo de tabela de IDs -->
          <div class="image-placeholder">
            <p>[Imagem: Exemplo de e-mail que deve ser enviado a Wise]</p>
          </div>
        </div>
      </div>
    </section>
      <div class="document-card">
        <h3 class="document-title">Identificadores Técnicos (IDs)</h3>
        <div class="document-content">
          <table class="id-table">
            <tr>
              <th>Tipo de Solicitação</th>
              <th>IDs Obrigatórios</th>
            </tr>
            <tr>
              <td><strong>Casos Gerais</strong></td>
              <td>
                <ul>
                  <li>- ID Funcionário</li>
                  <li>- ID Empresa</li>
                  <li>- ID Gerenciamento de Riscos</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Atendimento</strong></td>
              <td>
                <ul>
                  <li>- ID Cliente</li>
                  <li>- ID Funcionário</li>
                  <li>- ID Registro de Admissão</li>
                  <li>- ID Registro de Ocupação</li>
                </ul>
              </td>
            </tr>
          </table>

    <section class="nr-overview">
      <h2>Configuração do Protocolo</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Status</h3>
          <p>Aguardando Cliente</p>
          <p class="nr-desc">Status obrigatório para todos os protocolos encaminhados</p>
        </div>
        
        <div class="nr-card">
          <h3>Detalhamento</h3>
          <p>Ocorrência</p>
          <p class="nr-desc">Descrição técnica completa do problema</p>
        </div>
        
        <div class="nr-card">
          <h3>Resolução</h3>
          <p>Solução Proposta</p>
          <p class="nr-desc">Campo deve ser pré-preenchido com ação sugerida</p>
        </div>
        
        <div class="nr-card">
          <h3>Executor</h3>
          <p>Atendente Executor</p>
          <p class="nr-desc">Responsável técnico do departamento destino</p>
        </div>
      </div>

      <!-- Imagem: Configuração de protocolo no sistema -->
      <div class="image-placeholder">
        <p>[Imagem: Captura de tela do w-GSC com campos destacados]</p>
      </div>
    </section>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .nr-desc {
        font-size: 0.9em;
        color: #555;
        margin-top: 10px;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .id-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .id-table th, .id-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .id-table th {
        background-color: #f2f2f2;
      }
      
      .code-block {
        background: #f8f8f8;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin: 15px 0;
        font-family: monospace;
      }
    </style>
  `},{id:"xml-esocial",title:"XML no Contexto do eSocial - Funcionamento e Geração",description:"Guia completo sobre XML, sua estrutura, funcionamento em Web Services e papel crítico na geração de eventos do eSocial.",group:"Seu computador",tags:["eSocial","Evento","Webservice"],content:`
    <div class="welcome-banner">
      <h1>Entendendo o XML no eSocial</h1>
      <p>Este guia explica a tecnologia XML e seu papel fundamental na comunicação com o sistema eSocial do governo.</p>
    </div>

    <section class="core-concepts">
      <h2>O Que é XML?</h2>
      <div class="concept-card">
        <p>O <strong>XML</strong> (eXtensible Markup Language) é uma linguagem de marcação projetada para:</p>
        <ul>
          <li>• Armazenar e transportar dados de forma estruturada</li>
          <li>• Ser legível tanto por humanos quanto por máquinas</li>
          <li>• Facilitar a troca de informações entre sistemas diferentes</li>
        </ul>
        
        <h4>Características Essenciais:</h4>
        <div class="grid-container">
          <div class="nr-card">
            <h3>Estrutura Hierárquica</h3>
            <p>Dados organizados em formato de árvore com elementos aninhados</p>
          </div>
          
          <div class="nr-card">
            <h3>Personalizável</h3>
            <p>Criação de tags próprias para descrever os dados</p>
          </div>
          
          <div class="nr-card">
            <h3>Compatibilidade</h3>
            <p>Neutralidade de plataforma para integração entre sistemas</p>
          </div>
        </div>
      </div>
    <section class="documents-section">
      <h2>Como o XML Funciona?</h2>
      
      <div class="document-card">
        <h3 class="document-title">Comunicação em Web Services</h3>
        <div class="document-content">
          <p>O XML atua como formato de troca de dados entre sistemas diferentes:</p>
          
          <div class="flow-container">
            <div class="flow-step">
              <h4>1. Requisição (Request)</h4>
              <p>Cliente envia solicitação em XML para web service</p>
              <div class="code-block">
                &lt;request&gt;<br>
                &nbsp;&nbsp;&lt;usuarioID&gt;123&lt;/usuarioID&gt;<br>
                &lt;/request&gt;
              </div>
            </div>
            
            <div class="flow-step">
              <h4>2. Processamento</h4>
              <p>Servidor interpreta e processa a requisição</p>
            </div>
            
            <div class="flow-step">
              <h4>3. Resposta (Response)</h4>
              <p>Servidor retorna dados solicitados em XML</p>
              <div class="code-block">
                &lt;response&gt;<br>
                &nbsp;&nbsp;&lt;usuario&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;id&gt;123&lt;/id&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;nome&gt;Diego Silva&lt;/nome&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;email&gt;diego.silva@example.com&lt;/email&gt;<br>
                &nbsp;&nbsp;&lt;/usuario&gt;<br>
                &lt;/response&gt;
              </div>
            </div>
          </div>
        </div>
      </div>

    <section class="esocial-integration">
      <h2>XML no Contexto do eSocial</h2>
      
      <div class="document-card">
        <h3 class="document-title">Geração Automática de Eventos</h3>
        <div class="document-content">
          <p>Nosso sistema utiliza dados do usuário e do banco de dados para:</p>
          <ul>
            <li>- Preencher automaticamente arquivos XML</li>
            <li>- Seguir rigidamente o layout oficial do governo</li>
            <li>- Garantir conformidade com padrões técnicos específicos</li>
          </ul>
          
          <h4>Padrões Técnicos Obrigatórios:</h4>
          <ul>
            <li>• Especificações definidas pelo município da região</li>
            <li>• Normas técnicas do Comitê Gestor do eSocial</li>
            <li>• Estruturas de validação XSD do governo</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Comportamento do Sistema na Geração</h3>
        <div class="document-content">
          <p>O processo de geração segue esta lógica:</p>
          
          <div class="step-by-step">
            <div class="step">
              <h4>Passo 1: Identificação de Tags</h4>
              <p>Reconhecimento das tags exigidas pelo layout do evento</p>
            </div>
            
            <div class="step">
              <h4>Passo 2: Verificação de Dados</h4>
              <p>Consulta ao banco de dados para cada tag obrigatória</p>
            </div>
            
            <div class="step">
              <h4>Passo 3: Inserção de Valores</h4>
              <p>Preenchimento da tag quando dado existe</p>
            </div>
            
            <div class="step">
              <h4>Passo 4: Tratamento de Erros</h4>
              <p>Bloqueio da geração para tags obrigatórias sem dados</p>
            </div>
          </div>
          
          <div class="alert-box">
            <h4>Regra Crítica:</h4>
            <p>Tags obrigatórias sem dados correspondentes impedem a geração do evento</p>
          </div>
        </div>
      </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .flow-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px 0;
      }
      
      .flow-step {
        flex: 1;
        min-width: 250px;
        background: #f8f8f8;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #4CAF50;
      }
      
      .code-block {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 15px;
        border-radius: 4px;
        font-family: monospace;
        margin: 15px 0;
        overflow-x: auto;
      }
      
      .step-by-step {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 20px 0;
      }
      
      .step {
        background: #e8f5e9;
        padding: 15px;
        border-left: 4px solid #4CAF50;
        border-radius: 4px;
      }
      
      .alert-box {
        background: #ffebee;
        padding: 15px;
        border-left: 4px solid #f44336;
        border-radius: 4px;
        margin: 20px 0;
      }
    </style>
  `},{id:"assinatura-medica-certificado-a1",title:"Assinatura Digital Médica e Certificado A1: Requisitos Técnicos",description:"Especificações técnicas para registro de assinatura médica em formato BMP e uso do certificado digital A1 para transmissão de eventos.",group:"Seu computador",tags:["Configurações","Usuarios"],content:`
    <div class="welcome-banner">
      <h1>Configurações de Segurança Digital</h1>
      <p>Este guia detalha os requisitos técnicos para validação de documentos médicos e transmissão de eventos no sistema.</p>
    </div>

    <section class="core-concepts">
      <h2>Requisitos Técnicos para Assinatura Médica no Sigo Web</h2>
      
      <div class="document-card">
        <h3 class="document-title">Especificações da Assinatura Digital</h3>
        <div class="document-content">
          <div class="spec-grid">
            <div class="spec-card">
              <h4>Formato:</h4>
              <p><strong>.BMP</strong> (Bitmap)</p>
              <p>Imagem não comprimida que mantém a autenticidade da assinatura</p>
            </div>
            
            <div class="spec-card">
              <h4>Dimensões</h4>
              <p><strong>276x92 pixels</strong></p>
              <p>Proporção exata de 3:1 (largura:altura)</p>
            </div>
            
            <div class="spec-card">
              <p>Configuração da assinatura médica no perfil do usuário médico dentro do sistema Sigo</p>
            </div>
          </div>
          
          <h4>Fluxo de Implementação:</h4>
          <ol>
            <li>• Captura da assinatura em dispositivo digital</li>
            <li>• Conversão para BMP com resolução exata (276x92px)</li>
            <li>• Upload no cadastro do profissional médico</li>
            <li>• Validação automática pelo sistema</li>
          </ol>
          <div class="alert-box">
            <h4>Restrições Técnicas:</h4>
            <ul>
              <li>• Formatos JPG/PNG são <strong>rejeitados</strong> pelo sistema. Imagens fora do padrão dimensional causam falha na validação</li>
              <li>• Assinaturas digitalizadas devem ter fundo branco e traço preto</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="certificate-section">
      <h2>Certificado Digital A1</h2>
      
      <div class="document-card">
        <h3 class="document-title">Configuração e Funcionalidades</h3>
        <div class="document-content">
          <div class="feature-card">
            <h4>Definição Técnica</h4>
            <p>Certificado digital emitido por Autoridade Certificadora credenciada pela ICP-Brasil, instalado localmente na máquina do usuário.</p>
          </div>
          
          <div class="feature-card">
            <h4>Validade Legal</h4>
            <p>Equivalente à assinatura manuscrita para documentos eletrônicos, com validade jurídica nos termos da MP 2.200-2/2001.</p>
          </div>
          
          <h4>Implementação no Sistema</h4>
          <div class="comparison-table">
            <table>
              <tr>
                <th>Característica</th>
                <th>Certificado A1</th>
                <th>Outros Certificados</th>
              </tr>
              <tr>
                <td><strong>Armazenamento</strong></td>
                <td>Instalado no computador</td>
                <td>Token físico ou nuvem</td>
              </tr>
              <tr>
                <td><strong>Validade</strong></td>
                <td>1 ano</td>
                <td>Até 5 anos</td>
              </tr>
              <tr>
                <td><strong>Transmissão eSocial</strong></td>
                <td>Suportado</td>
                <td>Não suportado na versão Web</td>
              </tr>
            </table>
          </div>
          
          <h4>Eventos Habilitados</h4>
          <ul>
            <li><strong>S-2220:</strong> Monitoramento da Saúde do Trabalhador</li>
            <li><strong>S-2240:</strong> Condições do Ambiente de Trabalho</li>
            <li><strong>S-2221:</strong> Toxicológico</li>
            <li><strong>S-2210:</strong> Comunicação de Acidente de Trabalho</li>
          </ul>
          
          <div class="warning-box">
            <h4>Procedimentos Críticos:</h4>
            <ul>
              <li>• Renovar o certificado com 30 dias de antecedência da expiração</li>
              <li>• ar/importar o certificado ao trocar de máquina</li>
              <li>• Manter backup do arquivo .PFX protegido por senha forte</li>
            </ul>
          </div>
    <section class="integration-section">
      <h2>Integração com Documentos Ocupacionais</h2>
      
      <div class="grid-container">
        <div class="integration-card">
          <h3>ASO Digital</h3>
          <ul>
            <li>Assinatura BMP aplicada automaticamente</li>
            <li>Certificado A1 gera carimbo de tempo RFC 3161</li>
            <li>Validação cruzada com CRM do médico</li>
          </ul>
        </div>
        
        <div class="integration-card">
          <h3>PCMSO Eletrônico</h3>
          <ul>
            <li>Transmissão automatizada via S-2220</li>
            <li>Assinatura digital em todos os exames</li>
            <li>Registro criptografado com hash SHA-256</li>
          </ul>
        </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .spec-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin: 20px 0;
      }
      
      .spec-card {
        background: #f8fbff;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #bbdefb;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .alert-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }
      
      .warning-box {
        border-left: 4px solid #f44336;
        background-color: #ffebee;
        padding: 15px;
        margin: 20px 0;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .comparison-table table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .comparison-table th {
        background-color: #f2f2f2;
      }
      
      .integration-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #4caf50;
      }
      
      .feature-card {
        background: #e8f5e9;
        padding: 15px;
        border-radius: 6px;
        margin: 15px 0;
      }
    </style>
  `},{id:"cache-navegador-fundamentos-tecnicos",title:"Cache do Navegador: Fundamentos Técnicos e Operacionais",description:"Guia completo sobre funcionamento, tipos e gerenciamento de cache em navegadores e sistemas computacionais.",group:"Seu computador",tags:["Base"],content:`
    <div class="welcome-banner">
      <h1>Entendendo o Cache Computacional</h1>
      <p>Este guia explica o funcionamento técnico dos sistemas de cache e seu impacto no desempenho de aplicações web.</p>
    </div>

    <section class="core-concepts">
      <h2>O Que é Cache?</h2>
      
      <div class="concept-card">
        <p>O <strong>cache</strong> é um mecanismo de armazenamento temporário que acelera o acesso a dados frequentemente utilizados:</p>
        <ul>
          <li>• Armazena cópias locais de recursos (imagens, scripts, credenciais)</li>
          <li>• Reduz a necessidade de novas solicitações ao servidor</li>
          <li>• Melhora significativamente o tempo de resposta do sistema</li>
        </ul>
        
        <div class="technical-note">
          <h4>Definição Técnica:</h4>
          <p>"Cache é um componente que armazena dados temporariamente para futuras requisições, reduzindo o tempo de acesso a informações de alto custo computacional" (Fonte: Mozilla Developer Network)</p>
        </div>
      </div>
    <section class="cache-types">
      <h2>Tipos de Cache</h2>
      
      <div class="grid-container">
        <div class="cache-card">
          <h3>Cache de Navegador</h3>
          <div class="cache-content">
            <ul>
              <li><strong>Localização:</strong> Armazenado localmente no dispositivo</li>
              <li><strong>Conteúdo:</strong> Cookies, senhas, histórico, recursos de sites</li>
              <li><strong>Persistência:</strong> Mantido entre sessões até limpeza manual</li>
              <li><strong>Capacidade:</strong> Tipicamente 50MB-1GB (varia por navegador)</li>
            </ul>
          </div>
        </div>
        
        <div class="cache-card">
          <h3>Cache de Memória (RAM)</h3>
          <div class="cache-content">
            <ul>
              <li><strong>Localização:</strong> Armazenado na memória volátil (RAM)</li>
              <li><strong>Conteúdo:</strong> Dados de aplicativos em execução</li>
              <li><strong>Persistência:</strong> Perdido ao desligar o dispositivo</li>
              <li><strong>Velocidade:</strong> Acesso 100x mais rápido que SSD</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <table>
          <tr>
            <th>Característica</th>
            <th>Cache do Navegador</th>
            <th>Cache de Memória</th>
          </tr>
          <tr>
            <td><strong>Armazenamento</strong></td>
            <td>Disco rígido/SSD</td>
            <td>Memória RAM</td>
          </tr>
          <tr>
            <td><strong>Persistência</strong></td>
            <td>Até limpeza manual</td>
            <td>Apenas durante a sessão</td>
          </tr>
          <tr>
            <td><strong>Finalidade</strong></td>
            <td>Acelerar carregamento de sites</td>
            <td>Acelerar execução de aplicativos</td>
          </tr>
          <tr>
            <td><strong>Capacidade</strong></td>
            <td>MBs a GBs</td>
            <td>GBs</td>
          </tr>
        </table>
      </div>
    </section>


    <section class="performance-section">
      <h2>Impacto no Desempenho</h2>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Redução de Latência</h3>
          <p>Até <strong>90%</strong> menos tempo de carregamento para recursos em cache</p>
        </div>
        
        <div class="stat-card">
          <h3>Economia de Banda</h3>
          <p>Até <strong>60%</strong> menos dados transferidos (Fonte: HTTP Archive)</p>
        </div>
        
        <div class="stat-card">
          <h3>Eficiência de Memória</h3>
          <p>Aplicações usam <strong>30-40%</strong> menos RAM com cache otimizado</p>
        </div>
      </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .technical-note {
        background: #e8f5e9;
        padding: 15px;
        border-left: 4px solid #4caf50;
        margin-top: 15px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .cache-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #2196F3;
      }
      
      .comparison-table table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .comparison-table th {
        background-color: #f2f2f2;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .code-example {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 15px;
        border-radius: 4px;
        font-family: monospace;
        margin: 15px 0;
        overflow-x: auto;
      }
      
      .warning-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      
      .stat-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        text-align: center;
        border-bottom: 4px solid #9c27b0;
      }
      
      .best-practices {
        background: #e3f2fd;
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
      }
    </style>
  `},{id:"nrs-conceitos-basicos",title:" (NRs) - Normas Regulamentadoras",description:"Guia completo sobre as Normas Regulamentadoras (NRs) com foco em SST, abordando NR-1, NR-7, NR-15 e NR-16, seus objetivos, obrigações e impactos para empresas e trabalhadores.",group:"PJ",content:`
<div class="welcome-banner">
  <h1>Normas Regulamentadoras (NRs)</h1>
  <p>Este guia apresenta os conceitos fundamentais das principais Normas Regulamentadoras de Segurança e Saúde no Trabalho utilizadas em nosso sistema.</p>
</div>

<section class="core-concepts">
  <h2>O Que São as Normas Regulamentadoras (NRs)?</h2>
  <div class="concept-card">
    <p>As <strong>Normas Regulamentadoras (NR)</strong> são regras que definem o que pessoas jurídicas e físicas devem fazer para manter o bem-estar social, com foco específico na área de Segurança e Saúde no Trabalho (SST).</p>
    <ul>
      <li>• Algumas tratam de regras gerais, como o uso de <strong>Equipamentos de Proteção Individual (EPIs)</strong></li>
      <li>• Outras falam de situações mais específicas, como segurança no uso de máquinas, cuidados com ergonomia ou proteção da saúde do trabalhador</li>
    </ul>
  </div>
<section class="nr-overview">
  <h2>Principais Normas Regulamentadoras (NRs)</h2>
  
  <div class="grid-container">
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-1</h3>
      <p>(GRO) Gerenciamento de Riscos Ocupacionais</p>
      <p class="nr-desc">Estabelece disposições gerais, o campo de aplicação, termos e definições comuns às Normas Regulamentadoras.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-7</h3>
      <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
      <p class="nr-desc">Estabelece diretrizes para o desenvolvimento do PCMSO com objetivo de proteger e preservar a saúde dos empregados.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-15</h3>
      <p>Atividades e Operações Insalubres</p>
      <p class="nr-desc">Estabelece as atividades que devem ser consideradas insalubres, gerando direito ao adicional de insalubridade.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-16</h3>
      <p>Atividades e Operações Perigosas</p>
      <p class="nr-desc">Define o que é periculosidade e como deve ser feito o pagamento do adicional para atividades perigosas.</p>
    </div>
  </div>
</section>

<section class="documents-section">
  <h2>Detalhamento das Principais NRs</h2>
  
  <div class="document-card">
    <h3 class="document-title">NR-1 - (GRO) Gerenciamento de Riscos Ocupacionais</h3>
    <div class="document-content">
      <p>Estabelece as disposições gerais, o campo de aplicação, os termos e as definições comuns às Normas Regulamentadoras relativas à Segurança e Saúde no Trabalho.</p>
      
      <h4>Obrigações da Empresa:</h4>
      <ul>
        <li><strong>Informar trabalhadores</strong> sobre os riscos no local de trabalho e como preveni-los</li>
        <li><strong>Comunicar resultados</strong> de exames médicos e das avaliações ambientais</li>
        <li><strong>Explicar procedimentos</strong> em caso de acidente ou doença relacionada ao trabalho</li>
        <li><strong>Tomar medidas de prevenção</strong>, priorizando:
          <ol>
            <li>Eliminar o risco</li>
            <li>Reduzir o risco com medidas coletivas</li>
            <li>Reduzir o risco com ajustes na organização do trabalho</li>
            <li>Usar equipamentos de proteção individual (EPI)</li>
          </ol>
        </li>
      </ul>
      
      <h4>Deveres do Trabalhador:</h4>
      <ul>
        <li>Seguir as regras de segurança e saúde no trabalho</li>
        <li>Fazer os exames médicos exigidos</li>
        <li>Usar corretamente os EPIs fornecidos pela empresa</li>
        <li>Colaborar para manter o ambiente de trabalho seguro</li>
      </ul>
      
      <h4>Direitos do Trabalhador:</h4>
      <ul>
        <li>Parar o trabalho se houver risco grave e iminente à vida ou à saúde, avisando o superior</li>
        <li>Não ser punido por parar o trabalho nessas situações</li>
        <li>Receber informações, ao ser contratado ou mudar de função, sobre:
          <ul>
            <li>Riscos do trabalho</li>
            <li>Como prevenir acidentes e doenças</li>
            <li>O que fazer em emergências</li>
          </ul>
        </li>
      </ul>
      
      <h4>Gerenciamento de Riscos Ocupacionais (PGR):</h4>
      <p>O <strong>Programa de Gerenciamento de Riscos (PGR)</strong> deve ser implementado através de:</p>
      <ul>
        <li>Aplicação para toda a operação ou apenas para setor/atividade específica</li>
        <li>Integração com sistema de gestão, seguindo todas as regras da NR</li>
        <li>Inclusão ou vinculação a outros planos e programas exigidos pela legislação</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-7 - Programa de Controle Médico de Saúde Ocupacional (PCMSO)</h3>
    <div class="document-content">
      <p>Programa médico obrigatório que acompanha a saúde dos trabalhadores durante todo o vínculo empregatício.</p>
      
      <h4>Diretrizes do PCMSO:</h4>
      <ul>
        <li>Detectar precocemente problemas de saúde ligados ao trabalho</li>
        <li>Identificar se há exposição excessiva a agentes nocivos</li>
        <li>Avaliar se o trabalhador está apto para suas funções</li>
        <li>Acompanhar a saúde de empregados mais vulneráveis</li>
        <li>Apoiar decisões de afastamento e readaptação profissional</li>
        <li>Garantir vacinas recomendadas pelo Ministério da Saúde</li>
      </ul>
      
      <h4>Exames Médicos Obrigatórios:</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tipo de Exame</th>
              <th>Periodicidade</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Admissional</strong></td>
              <td>Antes de assumir atividades</td>
              <td>Obrigatório para todos os empregados</td>
            </tr>
            <tr>
              <td><strong>Periódico</strong></td>
              <td>Variável conforme risco</td>
              <td>
                <ul>
                  <li>Exposição a riscos/doenças crônicas: anualmente ou menos (conforme médico)</li>
                  <li>Condições hiperbáricas: seguir prazo do Anexo IV</li>
                  <li>Demais empregados: a cada 2 anos</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Retorno ao trabalho</strong></td>
              <td>Após afastamento ≥ 30 dias</td>
              <td>Realizado antes do retorno, com possibilidade de retorno gradual</td>
            </tr>
            <tr>
              <td><strong>Mudança de risco</strong></td>
              <td>Antes da mudança de função</td>
              <td>Quando houver exposição a novos riscos ocupacionais</td>
            </tr>
            <tr>
              <td><strong>Demissional</strong></td>
              <td>Até 10 dias após fim do contrato</td>
              <td>
                Pode ser dispensado se exame mais recente foi realizado:
                <ul>
                  <li>Há menos de 135 dias (grau de risco 1 e 2)</li>
                  <li>Há menos de 90 dias (grau de risco 3 e 4)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h4>Relatório Anual do PCMSO:</h4>
      <p>O médico responsável deve elaborar relatório analítico anual contendo no mínimo:</p>
      <ul>
        <li>Número de exames clínicos realizados</li>
        <li>Número e tipos de exames complementares realizados</li>
        <li>Estatística de resultados anormais, categorizados por tipo de exame e por unidade/setor/função</li>
        <li>Incidência e prevalência de doenças relacionadas ao trabalho</li>
        <li>Informações sobre número e tipo de eventos e doenças informadas nas CAT</li>
        <li>Análise comparativa em relação ao relatório anterior</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-15 - Atividades e Operações Insalubres</h3>
    <div class="document-content">
      <p>Estabelece as atividades que devem ser consideradas insalubres, gerando direito ao adicional de insalubridade aos trabalhadores.</p>
      
      <h4>Atividades Consideradas Insalubres:</h4>
      <ul>
        <li>Exposição a ruído excessivo</li>
        <li>Exposição ao calor ambiente</li>
        <li>Radiações ionizantes e não ionizantes</li>
        <li>Trabalho sob condições hiperbáricas</li>
        <li>Vibrações</li>
        <li>Frio excessivo</li>
        <li>Umidade</li>
        <li>Agentes químicos (incluindo benzeno)</li>
        <li>Poeiras minerais (sílica, asbesto, manganês)</li>
        <li>Agentes biológicos</li>
      </ul>
      
      <h4>Graus de Insalubridade e Adicionais:</h4>
      <ul>
        <li><strong>Insalubridade de Grau Máximo:</strong> adicional de 40% do salário mínimo</li>
        <li><strong>Insalubridade de Grau Médio:</strong> adicional de 20% do salário mínimo</li>
        <li><strong>Insalubridade de Grau Mínimo:</strong> adicional de 10% do salário mínimo</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-16 - Atividades e Operações Perigosas</h3>
    <div class="document-content">
      <p>Estabelece as diretrizes para caracterização de atividades perigosas e o respectivo adicional de periculosidade.</p>
      
      <h4>Características das Atividades Perigosas:</h4>
      <ul>
        <li>Atividades com inflamáveis ou explosivos</li>
        <li>Atividades com energia elétrica</li>
        <li>Atividades de segurança patrimonial armada</li>
        <li>Outras atividades que impliquem risco iminente de vida</li>
      </ul>
      
      <h4>Adicional de Periculosidade:</h4>
      <ul>
        <li>Valor fixo de 30% sobre o salário base do trabalhador</li>
        <li>Não acumulável com adicional de insalubridade</li>
        <li>Não incide sobre outros adicionais</li>
      </ul>
      
      <h4>Responsabilidades:</h4>
      <p>É responsabilidade do empregador a caracterização ou descaracterização da periculosidade, mediante laudo técnico elaborado por Médico do Trabalho ou Engenheiro de Segurança do Trabalho.</p>
    </div>
  </div>
</section>

<section class="links-section">
  <h2>Links Úteis e Referências</h2>
  
  <div class="links-grid">
    <div class="link-card">
      <h4>NR-1 Completa</h4>
      <p>Acesse a versão atualizada da NR-1 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-01-atualizada-2024-i-1.pdf" target="_blank">Acessar NR-1</a>
    </div>
    
    <div class="link-card">
      <h4>NR-7 Completa</h4>
      <p>Acesse a versão atualizada da NR-7 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-07-atualizada-2022-1.pdf" target="_blank">Acessar NR-7</a>
    </div>
    
    <div class="link-card">
      <h4>NR-15 Completa</h4>
      <p>Acesse a versão atualizada da NR-15 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-15-atualizada-2022.pdf" target="_blank">Acessar NR-15</a>
    </div>
    
    <div class="link-card">
      <h4>NR-16 Completa</h4>
      <p>Acesse a versão atualizada da NR-16 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/NR16atualizada2024.pdf" target="_blank">Acessar NR-16</a>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .document-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .link-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4CAF50;
    transition: transform 0.3s ease;
  }
  
  .link-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .link-card a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .link-card a:hover {
    background-color: #3e8e41;
  }
  
  .table-container {
    overflow-x: auto;
    margin: 20px 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
  
  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`},{id:"entendendo-mundo-juridico",title:"Entendendo o Mundo Jurídico - Naturezas Jurídicas e Aspectos Tributários",description:"Guia completo sobre naturezas jurídicas, tipos de sociedades, criação de CNPJ e obrigações legais para empresas.",group:"PJ",content:`
<div class="welcome-banner">
  <h1>Bem-vindo ao Mundo Jurídico Empresarial!</h1>
  <p>Este guia foi criado para ajudar você a compreender os principais conceitos jurídicos e tributários que fundamentam a estruturação de empresas no Brasil.</p>
</div>

<section class="core-concepts">
  <h2>O Que é Natureza Jurídica?</h2>
  <div class="concept-card">
    <p>A <strong>Natureza Jurídica</strong> é como a lei classifica um negócio ou empresa. Ela define aspectos fundamentais como:</p>
    <ul>
      <li><strong>Responsabilidade legal</strong>: Quem é responsável em caso de problemas (dívidas ou acidentes)</li>
      <li><strong>Carga tributária</strong>: Quais impostos a empresa precisa pagar</li>
      <li><strong>Funcionamento operacional</strong>: Como a empresa pode operar de acordo com a lei</li>
    </ul>
    <p>Esses aspectos dependem <strong>diretamente</strong> da natureza jurídica escolhida, que pode ser, por exemplo, uma <strong>empresa individual</strong> ou uma <strong>sociedade</strong>.</p>
  </div>
</section>

<section class="society-types">
  <h2>Tipos de Sociedade</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>Sociedade Comum</h3>
      <p>Espécie de sociedade <u>despersonificada</u> (não possui personalidade jurídica)</p>
      <p class="nr-desc">Constitui sociedade de fato ou irregular, aplicável a sociedades sem atos constitutivos ou sem registro.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Simples</h3>
      <p>Formada por duas ou mais pessoas para atividades não empresariais</p>
      <p class="nr-desc">Ligada a trabalhos intelectuais ou profissionais (médicos, nutricionistas, dentistas).</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Limitada</h3>
      <p>Sócios têm responsabilidade limitada ao capital investido</p>
      <p class="nr-desc">Protege o patrimônio pessoal dos sócios em caso de dívidas da empresa.</p>
    </div>
    
    <div class="nr-card">
      <h3>Contribuinte Individual</h3>
      <p>Quem trabalha por conta própria sem vínculo empregatício</p>
      <p class="nr-desc">Tem obrigação de pagar contribuição previdenciária diretamente.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Comandita Simples</h3>
      <p>Dois tipos de sócios: comanditários e comanditados</p>
      <p class="nr-desc">Comanditários arriscam apenas o valor investido, comanditados têm responsabilidade integral.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade em Nome Coletivo</h3>
      <p>Somente pessoas físicas podem participar</p>
      <p class="nr-desc">Todos os sócios respondem solidária e ilimitadamente pelas obrigações sociais.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Comandita por Ações</h3>
      <p>Alguns sócios têm responsabilidade limitada (acionistas)</p>
      <p class="nr-desc">Sócio diretor tem responsabilidade ilimitada pelas dívidas da empresa.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade em Conta de Participação</h3>
      <p>Não possui CNPJ próprio</p>
      <p class="nr-desc">Apenas um dos sócios cuida da administração do negócio.</p>
    </div>
  </div>
</section>

<section class="cnpj-section">
  <h2>Criação do CNPJ</h2>
  <div class="document-card">
    <h3 class="document-title">Processo de Criação do CNPJ</h3>
    <div class="document-content">
      <p>Para uma pessoa física realizar a criação de um CNPJ, os seguintes passos devem ser realizados:</p>
      
      <h4>Etapas do Processo:</h4>
      <ol>
        <li><strong>Consulta prévia de viabilidade</strong>: Verificar se as atividades do negócio podem ser realizadas no local escolhido e se o nome empresarial está disponível</li>
        <li><strong>Inscrição no CNPJ</strong>: Fornecer os dados necessários para a inscrição no CNPJ e o registro da empresa</li>
        <li><strong>Licenças municipais</strong>: Obter as licenças necessárias no município onde pretende atuar</li>
      </ol>
      
<section class="obligations-section">
  <h2>Obrigações Legais do Empregador</h2>
  
  <div class="document-card">
    <h3 class="document-title">Obrigações com Colaboradores</h3>
    <div class="document-content">
      <p>Algumas das principais obrigações legais que o empregador possui com os colaboradores são:</p>
      
      <h4>Obrigações Financeiras:</h4>
      <ul>
        <li>Pagamento de salário</li>
        <li>Pagamento de encargos sociais</li>
      </ul>
      
      <h4>Obrigações Legais e Trabalhistas:</h4>
      <ul>
        <li>Cumprimento da CLT</li>
        <li>Emissão de documentos (carteira de trabalho, contrato de trabalho, recibos de pagamento)</li>
        <li>Comunicação de informações sobre direitos</li>
        <li>Segurança e saúde no trabalho</li>
      </ul>
    </div>
  </div>
</section>

<section class="taxes-section">
  <h2>Deduções de Impostos</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>ISS</h3>
      <p>Imposto Sobre Serviços</p>
      <p class="nr-desc">Tributo municipal cobrado de empresas que prestam serviços. Um dos principais tributos municipais.</p>
    </div>
    
    <div class="nr-card">
      <h3>IR</h3>
      <p>Imposto de Renda</p>
      <p class="nr-desc">Tributação federal cobrada anualmente sobre os ganhos de pessoas físicas ou jurídicas.</p>
    </div>
    
    <div class="nr-card">
      <h3>PIS</h3>
      <p>Programa de Integração Social</p>
      <p class="nr-desc">Promove a integração do empregado na vida e desenvolvimento das empresas, com melhor distribuição de renda.</p>
    </div>
    
    <div class="nr-card">
      <h3>COFINS</h3>
      <p>Contribuição para Financiamento da Seguridade Social</p>
      <p class="nr-desc">Tributo pago por pessoas jurídicas sobre a receita, destinado à saúde, previdência e assistência social.</p>
    </div>
    
    <div class="nr-card">
      <h3>CSLL</h3>
      <p>Contribuição Social sobre Lucro Líquido</p>
      <p class="nr-desc">Tributo federal cobrado sobre o lucro líquido das empresas que operam no Brasil para financiar a Seguridade Social.</p>
    </div>
    
    <div class="nr-card">
      <h3>INSS</h3>
      <p>Instituto Nacional do Seguro Social</p>
      <p class="nr-desc">Responsável pela gestão da Previdência Social, garantindo benefícios como aposentadoria, auxílio-doença e pensão por morte.</p>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`},{id:"sistema-tributario-impacto-notas-fiscais",title:"Sistema Tributário e Seu Impacto Nas Notas Fiscais",description:"Guia completo sobre o sistema tributário brasileiro, tipos de tributos, retenções, deduções, regimes tributários e seu impacto na emissão de notas fiscais.",group:"PJ",content:`
<div class="welcome-banner">
  <h1>Entendendo o Sistema Tributário Brasileiro</h1>
  <p>Este guia foi criado para ajudar você a compreender o sistema tributário nacional, seus impactos nas operações empresariais e a correta parametrização para emissão de notas fiscais.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o Sistema Tributário Nacional?</h2>
  <div class="concept-card">
    <p>O <strong>Sistema Tributário Nacional</strong> é o conjunto de regras que organiza como os impostos e outros tributos são criados, cobrados, arrecadados e divididos entre os governos (federal, estadual e municipal).</p>
    <p>Inclui todas as normas relacionadas à cobrança de tributos:</p>
    <ul>
      <li>Constituição Federal</li>
      <li>Leis ordinárias e complementares</li>
      <li>Decretos</li>
      <li>Portarias</li>
      <li>Instruções normativas</li>
    </ul>
  </div>
<section class="tax-overview">
  <h2>Tipos de Tributos</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>Impostos</h3>
      <p>Carro-chefe da tributação, responsáveis por financiar as atividades do Estado</p>
      <div class="nr-desc">
        <p><strong>Federais:</strong> IRPF, IRPJ, IOF, IPI, II</p>
        <p><strong>Estaduais:</strong> ICMS, IPVA, ITCMD</p>
        <p><strong>Municipais:</strong> ISS, IPTU, ITBI</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Taxas</h3>
      <p>Cobradas quando o governo oferece serviço específico ou faz fiscalização</p>
      <div class="nr-desc">
        <p>Exemplos: Taxa de fiscalização de comércio, emissão de RG/CNH, passaporte</p>
        <p>Pagas apenas por quem utiliza o serviço</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Contribuição de Melhoria</h3>
      <p>Cobrada quando obra pública valoriza imóveis da região</p>
      <div class="nr-desc">
        <p>Exemplo: Asfaltamento de rua (não se aplica a recapeamento)</p>
        <p>Limitada ao valor da valorização obtida</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Empréstimo Compulsório</h3>
      <p>Recurso excepcional em casos especiais (guerra, desastre)</p>
      <div class="nr-desc">
        <p>Exclusivo do governo federal</p>
        <p>Temporário e criado por lei complementar</p>
        <p>Exemplo histórico: 1986, governo Sarney</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Contribuições</h3>
      <p>Tributos com finalidade específica</p>
      <div class="nr-desc">
        <p>Exemplos: COFINS, CSLL, CIDE</p>
        <p>Destinados a saúde, previdência, transporte</p>
      </div>
    </div>
  </div>
</section>

<section class="tax-classification">
  <h2>Classificação dos Tributos</h2>
  
  <div class="document-card">
    <h3 class="document-title">Tributos Diretos e Indiretos</h3>
    <div class="document-content">
      <div class="classification-grid">
        <div class="classification-item">
          <h4>Tributos Diretos</h4>
          <p>Pagos diretamente ao governo por quem tem a obrigação</p>
          <ul>
            <li>IPVA</li>
            <li>IPTU</li>
            <li>IR</li>
            <li>Taxas</li>
            <li>COFINS</li>
            <li>CSLL</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Tributos Indiretos</h4>
          <p>Embutidos no preço de produtos ou serviços</p>
          <ul>
            <li>ICMS</li>
            <li>IPI</li>
            <li>ISS</li>
            <li>CIDE</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="retention-deduction">
  <h2>Retenções e Deduções Tributárias</h2>
  
  <div class="document-card">
    <h3 class="document-title">Conceitos Fundamentais</h3>
    <div class="document-content">
      <div class="concept-grid">
        <div class="concept-item">
          <h4>Retenção</h4>
          <p>Desconto do imposto diretamente no pagamento, com repasse ao governo</p>
          <ul>
            <li>Ocorre no momento do pagamento</li>
            <li>Feita pelo pagador do serviço/produto</li>
            <li>Entrega direta ao governo</li>
          </ul>
        </div>
        
        <div class="concept-item">
          <h4>Dedução</h4>
          <p>Redução do valor do imposto a pagar mediante despesas permitidas</p>
          <ul>
            <li>Diminui a base de cálculo do imposto</li>
            <li>Despesas com saúde, educação, etc.</li>
            <li>Quanto mais despesas dedutíveis, menor o imposto</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="tax-regimes">
  <h2>Regimes Tributários</h2>
  <div class="document-card">
    <h3 class="document-title">Simples Nacional, Lucro Presumido e Lucro Real</h3>
    <div class="document-content">
      <p>A escolha do regime tributário define como serão calculados os impostos, bem como a aplicação de retenções e deduções em notas fiscais.</p>
      
      <div class="classification-grid">
        <div class="classification-item">
          <h4>Simples Nacional</h4>
          <ul>
            <li>Unifica diversos tributos em uma única guia (DAS).</li>
            <li>Geralmente não há retenção de IR, PIS, COFINS e CSLL na fonte.</li>
            <li>Pode haver retenção de ISS em alguns municípios e INSS em serviços sujeitos à cessão de mão de obra.</li>
            <li>Deduções são limitadas, pois o cálculo é feito sobre a receita bruta.</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Lucro Presumido</h4>
          <ul>
            <li>Base de cálculo definida por presunção de margem de lucro.</li>
            <li>Sujeito a retenções de IR, PIS, COFINS e CSLL em serviços prestados a pessoas jurídicas.</li>
            <li>ISS retido conforme legislação municipal.</li>
            <li>Deduções não são consideradas diretamente (exceto compensações específicas).</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Lucro Real</h4>
          <ul>
            <li>Tributação sobre o lucro contábil ajustado por adições e exclusões.</li>
            <li>Sujeito a retenções de IR, PIS, COFINS, CSLL e ISS conforme operações.</li>
            <li>Possibilidade de deduções mais amplas, como despesas operacionais, financeiras e trabalhistas.</li>
            <li>Mais complexo, exige controles contábeis detalhados.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="configuration-section">
  <h2>Parametrização no Sistema</h2>
  
  <div class="document-card">
    <h3 class="document-title">Configuração de Retenções</h3>
    <div class="document-content">
      <p>É fundamental que as retenções e deduções sejam devidamente parametrizadas, pois impactam diretamente no valor cobrado nas notas fiscais.</p>
      
      <h4>Exceção Fiscal</h4>
      <p>Caminho: <strong>Cadastros > Tabelas > Fiscais > Tabela de Códigos de Serviços > Exceção Fiscal</strong></p>
      <p>Necessário informar se determinada unidade não sofrerá retenção de impostos para nenhuma empresa, selecionando o tipo de imposto para o qual não haverá retenção.</p>
      
      <h4>Retenção em Parcelamentos</h4>
      <p>Caminho: <strong>Configurações > Configurações Gerais > Financeiro > Retenção dos Impostos em Parcelamentos</strong></p>
      <p>Definir a forma de retenção dos impostos em títulos parcelados:</p>
      <ul>
        <li><strong>Parcelado:</strong> Impostos divididos proporcionalmente entre as parcelas</li>
        <li><strong>Na 1ª Parcela:</strong> Valor total aplicado na primeira parcela</li>
        <li><strong>Na Última Parcela:</strong> Valor total aplicado na última parcela</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Configuração de Deduções</h3>
    <div class="document-content">
      <p>Para parametrizar a dedução de impostos de uma empresa específica:</p>
      <p>Caminho: <strong>Cadastros > Empresas > Financeiro > Deduções de Impostos</strong></p>
      
      <p>Informar os dados relacionados à dedução dos seguintes tributos:</p>
      
      <div class="tax-grid">
        <div class="tax-item">
          <h4>ISS</h4>
          <p>Imposto Sobre Serviços</p>
        </div>
        
        <div class="tax-item">
          <h4>IR</h4>
          <p>Imposto de Renda</p>
        </div>
        
        <div class="tax-item">
          <h4>PIS</h4>
          <p>Programa de Integração Social</p>
        </div>
        
        <div class="tax-item">
          <h4>COFINS</h4>
          <p>Contribuição para o Financiamento da Seguridade Social</p>
        </div>
        
        <div class="tax-item">
          <h4>CSLL</h4>
          <p>Contribuição Social sobre o Lucro Líquido</p>
        </div>
        
        <div class="tax-item">
          <h4>INSS</h4>
          <p>Instituto Nacional do Seguro Social</p>
        </div>
      </div>
      
      <div class="alert-box">
        <p>A correta parametrização garante que o sistema considere as deduções de forma adequada durante os processos financeiros e fiscais da empresa, evitando inconsistências na emissão das notas fiscais.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .classification-grid, .concept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  
  .classification-item, .concept-item {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #4CAF50;
  }
  
  .tax-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }
  
  .tax-item {
    background: #e8f5e9;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .tax-item:hover {
    transform: scale(1.05);
    background: #c8e6c9;
  }
  
  .alert-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`},{id:"regimes-tributarios-retencoes-deducoes",title:"Mais sobre: Regimes Tributários: Simples Nacional, Lucro Presumido e Lucro Real — Retenções, Deduções e Migrações",description:"Guia completo e prático sobre quando há retenção e como funcionam deduções/créditos em cada regime (Simples, Presumido e Real), com exemplos, cenários especiais, ISS/ICMS-ST, CPRB, mudanças de regime e modelos de declaração.",group:"PJ",content:`
  <div class="welcome-banner">
    <h1>Regimes Tributários — Retenção, Dedução/Créditos e Migrações</h1>
    <p>Este guia foi preparado para uso no atendimento e apoio consultivo: explica, de forma objetiva e com exemplos, quando ocorre <strong>retenção na fonte</strong> (IRRF, CSLL/PIS/COFINS e INSS/CPRB), como funcionam <strong>deduções e créditos</strong>, e o que muda quando a empresa <strong>troca de regime</strong> (Simples, Lucro Presumido, Lucro Real).</p>
  </div>

  <section class="shortcuts-section">
    <h2>Visão Geral Rápida</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>O que é retenção na fonte?</h3>
        </div>
        <p>É quando o <strong>tomador</strong> do serviço (ou comprador) <em>desconta tributos</em> de um pagamento ao fornecedor, recolhendo-os ao Fisco. Pode atingir: <strong>IRRF</strong> (serviços profissionais), <strong>CSLL/PIS/COFINS</strong> (regra dos 4,65% em certos serviços), e <strong>INSS</strong> (11% ou 3,5% em cessão de mão de obra/empreitada, conforme o caso). ISS e ICMS podem ter retenções/substituição conforme legislação local/estadual.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>O que são deduções/créditos?</h3>
        </div>
        <p>“Deduções” aqui significam, em linhas gerais, <strong>despesas dedutíveis</strong> do lucro (Lucro Real) e <strong>créditos</strong> (PIS/COFINS no regime não cumulativo do Lucro Real) que reduzem a base/valor devido. No Lucro Presumido há <em>percentuais de presunção</em> da base; no Simples, a apuração é unificada via DAS (com poucas exceções fora do DAS).</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>Resumo por Regime</h3>
        </div>
        <ul>
          <li><strong>Simples:</strong> em regra, <em>não</em> sofre retenção de CSLL/PIS/COFINS; pode haver <strong>IRRF (alguns casos)</strong> e <strong>INSS</strong> se houver cessão de mão de obra/empreitada; ISS pode ser retido por regra municipal.</li>
          <li><strong>Presumido:</strong> pode sofrer <strong>retenção 4,65%</strong> (CSLL/PIS/COFINS) em certos serviços; <strong>IRRF</strong> (ex.: 1,5% serviços profissionais); <strong>INSS 11%</strong> em cessão de mão de obra/empreitada (ou 3,5% se CPRB aplicada a quem for desonerado).</li>
          <li><strong>Real:</strong> idem ao Presumido nas retenções; diferença central está na <strong>apuração do IRPJ/CSLL</strong> (lucro contábil ajustado) e no <strong>PIS/COFINS não cumulativos</strong> (créditos).</li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <h4>Importante</h4>
      <p>Retenções federais (IR, CSLL, PIS, COFINS) têm <strong>hipóteses de dispensa</strong> e <strong>alíquotas/códigos DARF</strong> específicos. No caso do <strong>Simples</strong>, é usual exigir do prestador a <strong>declaração de optante</strong> para <em>dispensa</em> de retenção de CSLL/PIS/COFINS.</p>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Simples Nacional — Regras, Retenção, Deduções</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Enquadramento & Limites</h3></div>
        <ul>
          <li>ME até R$ 360 mil/ano; EPP até R$ <strong>4,8 milhões/ano</strong> (com sublimites para ICMS/ISS conforme Estado).</li>
          <li>Vedado a atividades específicas e a quem ultrapassa limites (efeitos variam: mês seguinte ou ano seguinte conforme excesso).</li>
        </ul>
        <p><em>Observação:</em> ao ultrapassar limites, pode haver exclusão com efeitos distintos (até 20% vs. acima de 20% do teto) e possível manutenção apenas do DAS federal, com recolhimento de ICMS/ISS fora do Simples, conforme sublimite/regra vigente.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções mais comuns no Simples</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong>: <u>em regra, dispensadas</u> quando o <strong>prestador</strong> é optante pelo Simples, mediante <strong>declaração de optante</strong> apresentada ao tomador.</li>
          <li><strong>IRRF</strong>: há hipóteses de retenção (ex.: serviços profissionais listados pelo RIR/Regulamento do IR). Alguns entes dispensam quando prestador é Simples; confirme na sua política/ente pagador.</li>
          <li><strong>INSS (retenção 11%)</strong> em <strong>cessão de mão de obra/empreitada</strong> (serviços típicos: limpeza, conservação, manutenção, construção, apoio administrativo, call center, TI com cessão de pessoal etc.). Para empresas <strong>desoneradas (CPRB)</strong>, a retenção previdenciária pode ser <strong>3,5%</strong> nos períodos de desoneração previstos em lei.</li>
          <li><strong>ISS</strong>: pode haver retenção na fonte por legislação municipal (ex.: tomador responsável), inclusive com exigência de RPS/Nota fiscal com destaque.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções/Créditos no Simples</h3></div>
        <p>A apuração é por <strong>DAS unificado</strong> (IRPJ/CSLL/PIS/COFINS/CPP e, quando devido, ICMS/ISS), segundo <strong>anexos e faixas</strong> da LC 123. Não há <strong>créditos de PIS/COFINS</strong> a tomar (regra do Simples não adota o regime não cumulativo). Deduções de base (como no Lucro Real) <u>não</u> se aplicam.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplos de atendimento (Simples)</h3></div>
        <ul>
          <li><strong>Prestador Simples → Tomador privado:</strong> cliente solicita retenção 4,65%. <em>Ação</em>: pedir a <strong>declaração de optante</strong> e <em>não reter</em> CSLL/PIS/COFINS. Avaliar se há <strong>IRRF</strong> (serviço profissional) e se há <strong>INSS 11%/3,5%</strong> (cessão de mão de obra/empreitada). Verificar <strong>ISS retido</strong> pela prefeitura.</li>
          <li><strong>Prestador Simples → Órgão público:</strong> a Administração costuma <em>reter</em> (IR + CSLL/PIS/COFINS) salvo <strong>dispensa</strong> comprovada para optante (apresentar modelo de declaração). <em>Confirmar rotina do órgão.</em></li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <h4>Checklist Simples (Tomador)</h4>
      <ol>
        <li>Prestador é <strong>Simples</strong>? Solicitar <strong>declaração de optante</strong> atualizada.</li>
        <li>Serviço envolve <strong>cessão de mão de obra/empreitada</strong>? Se sim: avaliar <strong>INSS 11%</strong> (ou <strong>3,5%</strong> quando CPRB for aplicável ao prestador).</li>
        <li>Serviço é <strong>profissional</strong> (lista do IRRF)? Avaliar <strong>IRRF</strong>.</li>
        <li>Legislação municipal exige <strong>ISS retido</strong>? Aplicar regras locais.</li>
      </ol>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Lucro Presumido — Regras, Retenção, Deduções</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Como funciona</h3></div>
        <ul>
          <li>Base de IRPJ/CSLL por <strong>percentuais de presunção</strong> sobre a receita (ex.: <strong>IRPJ: 8% comércio/indústria; 32% serviços</strong> em geral). Para CSLL: <strong>12%</strong> (comércio/indústria) e <strong>32%</strong> (serviços) — há especificidades por atividade.</li>
          <li><strong>PIS/COFINS cumulativos</strong> (em regra): <strong>PIS 0,65%</strong> e <strong>COFINS 3%</strong> sobre a receita, sem créditos.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções comuns no Presumido</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong> retidos pelo tomador em <strong>determinados serviços</strong> (base: valor bruto). Há hipóteses de <em>dispensa</em> e exceções na IN aplicável.</li>
          <li><strong>IRRF</strong> em serviços profissionais (alíquota típica <strong>1,5%</strong>), com códigos DARF próprios.</li>
          <li><strong>INSS 11%</strong> (ou <strong>3,5%</strong> quando aplicável a desoneração/CPRB) em <strong>cessão de mão de obra/empreitada</strong> listadas na IN previdenciária (ex.: limpeza, manutenção, construção, apoio administrativo, alguns serviços de TI com alocação, etc.).</li>
          <li><strong>ISS retido</strong> conforme regras do município do tomador.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções</h3></div>
        <p>Não há dedução de despesas para reduzir base presumida (salvo regras específicas). Em compensações federais, as <strong>retenções sofridas</strong> (IRRF e CSRF 4,65%) normalmente podem ser <strong>compensadas</strong> com tributos de mesma espécie na apuração.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo (Presumido)</h3></div>
        <p>Serviço de consultoria (PJ no Presumido) emite NF de R$ 100.000,00:</p>
        <ul>
          <li>Tomador retém <strong>4,65%</strong> (R$ 4.650,00) de CSLL/PIS/COFINS e <strong>IRRF 1,5%</strong> (R$ 1.500,00), se caracterizado como serviço profissional.</li>
          <li>Se for <strong>cessão de mão de obra</strong>, tomador retém <strong>INSS 11%</strong> (R$ 11.000,00) — ou <strong>3.500,00</strong> se o prestador estiver sob CPRB com retenção reduzida.</li>
          <li>Município pode reter <strong>ISS</strong> (ex.: 5%).</li>
          <li>Prestador compensa retenções conforme espécie/códigos na apuração.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Lucro Real — Regras, Retenção, Deduções/Créditos</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Como funciona</h3></div>
        <ul>
          <li><strong>IRPJ/CSLL</strong> apurados sobre o <strong>lucro contábil ajustado</strong> por adições/exclusões (regras fiscais).</li>
          <li><strong>PIS/COFINS não cumulativos</strong>: alíquotas <strong>1,65%</strong> (PIS) e <strong>7,6%</strong> (COFINS) com <strong>créditos</strong> sobre insumos, energia, aluguéis, depreciação, etc., conforme hipóteses legais.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções comuns no Real</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong> na fonte em serviços abrangidos.</li>
          <li><strong>IRRF</strong> (ex.: 1,5% serviços profissionais).</li>
          <li><strong>INSS 11%/3,5%</strong> em cessão de mão de obra/empreitada.</li>
          <li><strong>ISS retido</strong> conforme legislação municipal.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções/Créditos (Real)</h3></div>
        <ul>
          <li><strong>Despesas dedutíveis</strong> (IRPJ/CSLL) conforme regras de dedutibilidade.</li>
          <li><strong>Créditos de PIS/COFINS</strong> sobre <em>insumos</em> e demais hipóteses legais (não cumulativo), reduzindo o valor a pagar.</li>
          <li>Retenções sofridas (IRRF e 4,65%) podem ser <strong>compensadas</strong> na apuração do tributo correspondente.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo (Real)</h3></div>
        <p>Prestadora de serviços de engenharia (Lucro Real) fatura R$ 200.000,00:</p>
        <ul>
          <li>Tomador retém <strong>4,65%</strong> (R$ 9.300,00) e, se serviço profissional, <strong>IRRF 1,5%</strong> (R$ 3.000,00).</li>
          <li>Se caracterizar <strong>cessão de mão de obra</strong>, reter <strong>INSS 11%</strong> (R$ 22.000,00) — ou <strong>R$ 7.000,00</strong> se CPRB com retenção reduzida.</li>
          <li>Prestadora aproveita <strong>créditos de PIS/COFINS</strong> sobre insumos pertinentes e compensa as retenções.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Retenções — Detalhamento Rápido (Operacional)</h2>
    <div class="shortcut-grid">

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>CSLL/PIS/COFINS (4,65%)</h3></div>
        <ul>
          <li>Aplicável a <strong>pagamentos por PJ a PJ</strong> pela prestação de determinados <strong>serviços</strong>.</li>
          <li><strong>Base</strong>: valor bruto da NF (serviço).</li>
          <li><strong>Rateio</strong>: CSLL 1%, PIS 0,65%, COFINS 3%.</li>
          <li><strong>Dispensa</strong>: prestador <strong>Simples</strong> (com declaração), valores muito pequenos (regra dos R$ 10,00 a reter), imunes/isentas conforme IN, e outras hipóteses específicas.</li>
          <li><strong>Comprovação</strong>: guardar <strong>declaração do Simples</strong> do prestador no dossiê do pagamento.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>IRRF (Serviços Profissionais)</h3></div>
        <ul>
          <li>Geralmente <strong>1,5%</strong> sobre o serviço para atividades de natureza profissional (advocacia, consultoria, auditoria, engenharia, etc.), conforme lista do Regulamento do IR.</li>
          <li><strong>Exceções/dispensas</strong>: há hipóteses na legislação e em rotinas dos entes públicos/privados; atenção a códigos DARF.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>INSS 11% (ou 3,5% CPRB)</h3></div>
        <ul>
          <li>Quando houver <strong>cessão de mão de obra/empreitada</strong> nos serviços listados (limpeza, conservação, manutenção, construção, apoio administrativo, digitação/digitalização, preparo de dados, vigilância presencial etc.).</li>
          <li><strong>Base</strong>: valor bruto da NF, com hipóteses de exclusão de materiais/equipamentos quando expressamente destacadas e aceitas pela norma.</li>
          <li><strong>Redução para 3,5%</strong>: quando o prestador estiver <strong>desonerado (CPRB)</strong> nos períodos em que a lei definir.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>ISS/ICMS — Substituição/Retenções</h3></div>
        <ul>
          <li><strong>ISS</strong>: inúmeras capitais exigem <strong>retenção</strong> pelo tomador para determinados serviços e/ou quando prestador é de outro município.</li>
          <li><strong>ICMS-ST</strong>: regime de substituição tributária (antecipação/retido na fonte) por produto/NCM e convênios; <strong>independe do regime de IRPJ/CSLL</strong>.</li>
        </ul>
      </div>

    </div>
    <div class="warning-box">
      <h4>Boas Práticas</h4>
      <ul>
        <li>Sempre conferir <strong>natureza do serviço</strong> x listas de retenção (IRRF/INSS) e hipóteses da IN de CSRF (4,65%).</li>
        <li>Guardar <strong>declarações e evidências</strong> (optante do Simples, imunidade/isenção, CPRB, etc.).</li>
        <li>Usar <strong>códigos DARF/GPS</strong> corretos e observar <strong>mínimos de retenção</strong>.</li>
      </ul>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Migração entre Regimes — Efeitos Práticos</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Quando e como trocar</h3></div>
        <ul>
          <li><strong>Simples → Presumido/Real</strong>: por excesso de receita, vedação ou por opção estratégica. Efeitos variam conforme o momento e o percentual do excesso (até 20% vs. acima de 20%).</li>
          <li><strong>Presumido ↔ Real</strong>: opção/anualidade (a opção vale para <strong>todo o ano-calendário</strong>), respeitados requisitos legais (ex.: obrigatoriedade do Real em alguns setores, como instituições financeiras).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>O que muda na prática</h3></div>
        <ul>
          <li><strong>Retenções</strong>: continuam existindo; no Simples tende a haver <em>dispensa</em> de 4,65% (com declaração). No Presumido/Real, 4,65% é comum. IRRF/INSS dependem da natureza do serviço.</li>
          <li><strong>PIS/COFINS</strong>: no Real (não cumulativo) surgem <strong>créditos</strong> relevantes; no Presumido são cumulativos (0,65%/3%) e <strong>sem créditos</strong>; no Simples é via DAS.</li>
          <li><strong>IRPJ/CSLL</strong>: no Presumido usa-se <strong>percentuais</strong> de presunção; no Real, <strong>lucro contábil ajustado</strong>.</li>
          <li><strong>Compliance</strong>: maior complexidade no Real (EFD-Contribuições com créditos, LALUR/LACS, controles de insumo, etc.).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo de migração</h3></div>
        <p>Empresa de serviços (consultoria) ultrapassou R$ 4,8 mi em 18% no ano (até 20%).</p>
        <ul>
          <li>Permanece no Simples até <strong>31/12</strong>, mas ficará <strong>excluída</strong> no ano seguinte e precisará optar por Presumido ou Real.</li>
          <li>Ao migrar para Presumido, passará a <strong>sofrer retenção 4,65%</strong> (salvo exceções) e possivelmente <strong>IRRF</strong> em serviços profissionais; avaliar <strong>INSS 11%/3,5%</strong> se houver cessão de mão de obra.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Documentos/rotinas ao migrar</h3></div>
        <ul>
          <li>Atualizar <strong>cadastros</strong> junto a clientes (informar novo regime para reter/dispensar o que couber).</li>
          <li>Revisar contratos para <strong>preço líquido</strong> x <strong>bruto</strong>, prevendo retenções.</li>
          <li>Adequar a <strong>escrituração</strong> (EFD-Contribuições, créditos no Real, etc.).</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Modelos & Tabelas Úteis</h2>
    <div class="shortcut-grid">

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Modelo — Declaração de Optante (Dispensa 4,65%)</h3></div>
        <p>“Declaramos, para fins do art. aplicável, que a <strong>[Razão Social • CNPJ]</strong> é <strong>optante pelo Simples Nacional</strong> na data deste documento e, por isso, encontra-se <strong>dispensada da retenção na fonte</strong> de CSLL, PIS/Pasep e COFINS, nos termos da legislação. Comprometemo-nos a comunicar imediatamente qualquer alteração de nosso enquadramento.”</p>
        <p class="note">Anexar: comprovante de opção (Portal do Simples) quando solicitado. Arquivar no dossiê do pagamento.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Tabela-guia (resumo operacional)</h3></div>
        <table style="width:100%; border-collapse:collapse; font-size:0.95em;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Tributo</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Quando reter</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Alíquota/base</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSLL/PIS/COFINS</td>
              <td>Serviços a PJ (lista da IN)</td>
              <td>4,65% sobre valor do serviço</td>
              <td>Dispensa p/ prestador Simples (com declaração) e outras hipóteses; mínimo a reter; códigos DARF específicos.</td>
            </tr>
            <tr>
              <td>IRRF</td>
              <td>Serviços de natureza profissional</td>
              <td>Ex.: 1,5% sobre serviço</td>
              <td>Ver lista do RIR; exceções; códigos DARF.</td>
            </tr>
            <tr>
              <td>INSS</td>
              <td>Cessão de mão de obra/empreitada</td>
              <td>11% (ou 3,5% CPRB)</td>
              <td>Serviços listados na IN previdenciária; exclusões de materiais/equipamentos conforme regra.</td>
            </tr>
            <tr>
              <td>ISS</td>
              <td>Conforme lei municipal</td>
              <td>Alíquota local</td>
              <td>Tomador pode ser responsável; atenção a retenções de prestadores de fora do município.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Percentuais (Presunção)</h3></div>
        <ul>
          <li><strong>IRPJ (exemplos usuais):</strong> 8% (comércio/indústria), 32% (serviços em geral).</li>
          <li><strong>CSLL (exemplos usuais):</strong> 12% (comércio/indústria), 32% (serviços em geral).</li>
          <li><strong>PIS/COFINS (Presumido):</strong> 0,65% / 3% — <em>cumulativos</em> (sem créditos).</li>
          <li><strong>PIS/COFINS (Real):</strong> 1,65% / 7,6% — <em>não cumulativos</em> (com créditos).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Erros comuns</h3></div>
        <ul>
          <li>Reter 4,65% de prestador <strong>Simples</strong> sem checar a <strong>declaração de dispensa</strong>.</li>
          <li>Não reter <strong>INSS</strong> quando há <strong>cessão de mão de obra</strong> claramente configurada no contrato/execução.</li>
          <li>Aplicar <strong>IRRF</strong> fora dos serviços profissionais de fato (ou usar código DARF incorreto).</li>
          <li>Deixar de compensar retenções já sofridas na apuração do tributo correspondente.</li>
        </ul>
      </div>

    </div>
    <div class="warning-box">
      <h4>Observação Final</h4>
      <p>Em caso de dúvida sobre a natureza do serviço, peça o <strong>contrato</strong> e/ou descreva a execução para checar o <strong>enquadramento em listas de retenção</strong> (IRRF/INSS) e nas hipóteses da IN 4,65%. Para pendências, envolva o time fiscal/contábil.</p>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Referências Legais (para consulta)</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card full-width">
        <div class="shortcut-header"><h3>Principais diplomas</h3></div>
        <ul>
          <li><strong>LC 123/2006</strong> (Simples Nacional) e <strong>Resolução CGSN 140/2018</strong> (procedimentos, exclusões, prazos, sublimites).</li>
          <li><strong>Lei 10.637/2002</strong> e <strong>Lei 10.833/2003</strong> (PIS/COFINS, não cumulativo, e regras da retenção 4,65%).</li>
          <li><strong>IN SRF 459/2004</strong> e <strong>IN RFB 1.234/2012</strong> (retenções CSLL/PIS/COFINS/IR na fonte, dispensa para Simples, mínimos, DARF).</li>
          <li><strong>Lei 8.212/1991 art. 31</strong> e <strong>IN RFB 971/2009</strong> (retenção de <strong>INSS</strong> em cessão de mão de obra/empreitada); regras de <strong>CPRB</strong> (Lei 12.546/2011 e atos correlatos) para <strong>retenção 3,5%</strong> quando aplicável.</li>
          <li><strong>RIR/2018 (Decreto 9.580/2018)</strong> (IRRF serviços profissionais).</li>
          <li><strong>Legislação municipal</strong> (ISS retido) e convênios/legislação estadual (ICMS-ST).</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
    .shortcuts-section { margin-bottom: 24px; }
    .shortcut-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin: 25px 0; }
    .shortcut-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #2196F3; position: relative; }
    .shortcut-card.full-width { grid-column: 1 / -1; }
    .shortcut-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .shortcut-header h3 { margin: 0; color: #2196F3; font-size: 1.2em; }
    .note { font-size: 0.9em; color: #777; font-style: italic; margin-top: 10px; }
    .warning-box { border-left: 4px solid #ff9800; background-color: #fff8e1; padding: 15px; margin: 20px 0; }
    .warning-box h4 { margin-top: 0; color: #ff9800; }
    table th, table td { padding: 8px 6px; }
  </style>

  <script>
    // Mantém o mesmo comportamento visual do seu artigo de atalhos (feedback ao clicar em botões/copiar etc.)
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('copy-btn') || e.target.closest('.copy-btn')) {
        const btn = e.target.classList.contains('copy-btn') ? e.target : e.target.closest('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copiado!';
        btn.style.background = '#4caf50';
        btn.style.color = 'white';
        btn.style.borderColor = '#4caf50';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }
    });
  <\/script>
  `},{id:"tutorial-instalacao-sigoplugin-drives",title:"Tutorial de Instalação do SigoPlugin® e Drives",description:"Guia completo para instalação de drives de biometria e SigoPlugin® para utilização de leitura biométrica e assinatura digital do médico.",group:"Tutoriais",tags:["Instalação","SigoPlugin","Biometria","Drives","Java","Wise System"],content:`
<div class="welcome-banner">
  <h1>Tutorial de Instalação de Drives/Plugin</h1>
  <p>Guia passo a passo para a instalação do SigoPlugin® e dos drivers de biometria para utilização no sistema Wise System.</p>
</div>

<section class="core-concepts">
  <h2>1. Introdução</h2>
  <p>Se você pretende utilizar o computador para realizar "Leitura Biométrica" e "Assinatura Digital do Médico", é necessário instalar o Java, o driver específico do seu leitor e o "Sigo Plugin".</p>
  <p>Por outro lado, se a sua intenção é utilizar o computador apenas para a "Assinatura Digital do Médico", será suficiente instalar apenas o "Sigo Plugin".</p>

  <h3>Leitores Biométricos Compatíveis</h3>
  <p>Atualmente, o sistema é compatível apenas com os seguintes modelos de leitores biométricos:</p>
  <ul>
    <li>Futronic FS80/88</li>
    <li>Digital Persona U4500</li>
  </ul>
  <div class="note-box">
    <strong>Importante:</strong> Certifique-se de instalar os drivers corretos para garantir o funcionamento adequado. O Sigo Plugin funcionará apenas em máquinas 64 bits. Verificar a compatibilidade do Sigo Plugin com o sistema operacional que esta recebendo o aplicativo, ele deve ter arquitetura x86, Não funciona na x32 nem em arquitetura arm.

  </div>
</section>

---

<section class="core-concepts">
  <h2>2. Downloads</h2>

  <h3>2.1. Drivers de Leitores Biométricos e SigoPlugin</h3>
  <p>Primeiramente, acesse a página de suporte da Wise System, onde você encontrará os drivers dos leitores biométricos.</p>
  <ul>
    <li> <button onclick="window.open('https://www.wisesystem.com.br/suporte/desktop/', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Acessar Suporte Desktop</button></li>
    <li>Na seção Biometria, baixe o driver compatível com seu leitor. (Se não possuir leitor biométrico, ignore esta etapa.)</li>
  </ul>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_1.png">
  </div>
  <p>Baixe o Sigo Plugin no link abaixo:</p>
  <ul>
   <button onclick="window.open('https://wisesystem.com.br/sigoweb/upload/SigoPlugin.exe', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Download Sigo Plugin</button>
  </ul>

  <h3>2.2. Java</h3>
  <p>Em seguida, baixe o Java, pois o Sigo Plugin utiliza alguns de seus recursos para funcionar corretamente. Recomenda-se a instalação da versão 64 bits.</p>
  <ul>
    <li>Link para download do Java e manual de instalação: <a href="https://www.java.com/pt-BR/download/manual.jsp" target="_blank">https://www.java.com/pt-BR/download/manual.jsp</a></li>
  </ul>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_2.png">
  </div>
  <div class="note-box">
    <strong>Atenção ao Java:</strong> Se você usa navegadores de 32 e 64 bits de forma intercambiável, será necessário instalar o Java de 32 e 64 bits para ter o plug-in Java em ambos os navegadores. Após instalar o Java, talvez seja necessário reiniciar seu browser para ativá-lo.
  </div>
</section>

---

<section class="core-concepts">
  <h2>3. Instalações</h2>

  <h3>3.1. Instalação de Dependências</h3>
  <ol>
    <li>Instale o Java (versão 64 bits).</li>
    <li>Em seguida, instale o driver correspondente ao seu leitor biométrico, baixado no item 2. (Se não possuir um leitor biométrico, ignore esta etapa.)</li>
  </ol>

  <h3>3.2. Extração e Instalação do Sigo Plugin (e DRIVE SDK)</h3>
  <p>Para instalar o Sigo Plugin, siga os passos abaixo:</p>
  <ol>
    <li>Selecione o executável Sigo Plugin, clique com o botão direito do mouse e selecione a opção "Executar como Administrador".</li>
    <li>Ao abrir o SigoPlugin, será exibida a opção para selecionar o idioma e, em seguida, a tela de requisitos. O SigoPlugin exige o Griaule FingerPrint instalado. Clique em Instalar para iniciar a instalação desses requisitos.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_3.png">
    </div>
    <li>Em seguida, clique em Avançar para prosseguir a Instalação do DRIVE SDK. Na tela de boas-vindas do Assistente de Instalação do Fingerprint SDK 2009, clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_4.png">
    </div>
    <li>Aceite os termos do "Contrato Geral de Uso de Licença de Software" marcando "Eu aceito os termos do Contrato" e clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_5.png">
    </div>
    <li>Aceite novamente os termos do "Acordo Específico de Licença de Uso de Software", marcando "Eu aceito os termos do Contrato" e clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_6.png">
    </div>
    <li>Na tela de Informação sobre o Fingerprint SDK 2009, clique em "Avançar" para prosseguir com a instalação.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_7.png">
    </div>
    <li>Na tela "Escolha a Pasta de destino", é recomendado manter o padrão que já vem selecionado e clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_8.png">
    </div>
    <li>Na tela "Selecionar a Pasta do Menu Iniciar", mantenha o padrão e clique em "Avançar" para prosseguir e criar o atalho.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_9.png">
    </div>
    <li>Na tela "Pronto para Instalar", clique em "Instalar" para começar a instalação do DRIVE SDK e aguarde.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_10.png">
    </div>
    <li>Durante a instalação, se for questionado sobre o FingerCap USB Driver, clique em "NÃO" para não baixá-lo.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_11.png">
    </div>
    <li>Se aparecer a mensagem de aviso sobre o Java Runtime Environment 1.4 ou superior, clique em "OK" para prosseguir.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_12.png">
    </div>
    <li>Na tela "Finalizando o Assistente de Instalação de Fingerprint SDK 2009", selecione a opção "Não, eu vou reiniciar o computador depois" e clique em "Concluir" para finalizar a instalação do DRIVE SDK.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_13.png">
    </div>
  </ol>

  <h3>3.3. Instalação do SigoPlugin®</h3>
  <ol>
    <li>Após a conclusão da instalação do DRIVE SDK, o instalador do SigoPlugin® deve abrir automaticamente. Clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_14.png">
    </div>
    <li>Na tela "Pronto para instalar o programa", clique em "Instalar" para iniciar a instalação.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_15.png">
    </div>
    <li>Ao finalizar a instalação, clique em "Concluir".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_16.png">
    </div>
    <li>Por fim, após realizar a instalação do SIGO Puglin, automaticamente será aberto a página da extensão do Sigo.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_17.png">
    </div>
  </ol>

  <h3>3.4. Pós-Instalação e Observações (Imagens de Alerta)</h3>
  <p>As seguintes imagens estão presentes no documento como alertas ou passos de limpeza após a instalação, detalhando o processo que deve ser ignorado/excluído:</p>
  <ol start="18">
    <li>O ícone do instalador "Instalar o FingerCap" na área de trabalho.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_18.png">
    </div>
    <li>Tela de seleção do idioma do instalador do FingerCap.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_19.png">
    </div>
    <li>Tela de Atenção sobre o FingerCap substituir drivers.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_20.png">
    </div>
    <li>Tela de boas-vindas do assistente de instalação do Griaule FingerCap USB Driver.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_21.png">
    </div>
    <li>Tela do Contrato de Licença de Uso do FingerCap.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_22.png">
    </div>
    <li>Tela de Informação do FingerCap, alertando para desconectar o leitor.</li>
    <div class="image-placeholder">
     <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_23.png">
    </div>
    <li>Tela Pronto para Instalar do FingerCap.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_24.png">
    </div>
    <li>Tela Finalizando o Assistente de Instalação do Griaule FingerCap USB Driver.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_25.png">
    </div>
  </ol>
  <p>Instrução Final: Após finalizar a instalação, vá até a área de trabalho e exclua o atalho do aplicativo FingerCap.</p>

<div class="note-box" style="text-align: center;">
  <p>Para baixar o documento original, clique no botão abaixo.</p>
  <a href="https://wisesystem.com.br/sigoweb/tutorial/tutorial-de-instalacao-sigoplugin-e-drives.pdf" class="download-button" style="display: inline-block; background-color: #0d47a1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px;" target="_blank">
    Baixar Documento Direcionado ao Cliente (PDF)
  </a>
</div>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }

  .core-concepts h1, .core-concepts h2 {
    color: #0d47a1;
    margin-top: 40px;
  }

  .core-concepts ul {
    margin: 20px 0;
    padding-left: 20px;
  }

  .core-concepts li {
    margin-bottom: 8px;
    color: #333;
    font-size: 0.95em;
  }

  .note-box {
    background: #f0f4f8;
    padding: 15px;
    border-left: 4px solid #90caf9;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 0.9em;
    color: #333;
  }

  .image-placeholder {
    background: #f5f5f5;
    padding: 50px 10px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
    font-style: italic;
    color: #666;
  }

  /* Adicionado para diferenciar subtítulos */
  .core-concepts h3 {
    color: #1565c0; /* Um tom de azul um pouco mais claro */
    margin-top: 25px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 5px;
  }
</style>
`}]},xr={id:"esocial",title:"eSocial",description:"Módulo eSocial no sistema Sigo.",icon:`<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13.138.053a12.018 12.018 0 0 0-9.646 3.481A12.014 12.014 0 0 0 .937 16.651a12.014 12.014 0 0 0 11.162 7.348a2.275 2.275 0 1 0-.037-4.549a7.438 7.438 0 0 1-6.932-4.562a7.438 7.438 0 0 1 1.587-8.145a7.437 7.437 0 0 1 12.378 3.014H12.05a2.275 2.275 0 1 0 0 4.55h9.674A2.275 2.275 0 0 0 24 12.04A12.014 12.014 0 0 0 16.597.914a11.962 11.962 0 0 0-3.459-.86Z"/>
</svg>`,topics:[{id:"esocial-guia-completo",title:"eSocial: Guia Completo do Sistema de Escrituração Digital",description:"Tudo sobre a plataforma federal que unificou as obrigações trabalhistas, fiscais e previdenciárias no Brasil.",group:"eSocial",tags:["eSocial","Introdução"],content:`
# eSocial
Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas

## 1. Fundamentação Legal e Histórico

### Criação e Marco Legal
* **Data de fundação:** 11 de dezembro de 2014
* **Órgãos envolvidos:** Receita Federal, INSS, Caixa Econômica Federal e Ministério do Trabalho
* **Base tecnológica:** Sistema Público de Escrituração Digital (SPED)
* **Obrigatoriedade geral:** 8 de janeiro de 2018 (com exceção inicial para eventos de SST)

> ### Principais Objetivos
> * Eliminar a multiplicidade de declarações
> * Reduzir custos de compliance para empresas
> * Aprimorar a fiscalização governamental
> * Garantir direitos trabalhistas e previdenciários

## 2. Cronograma Detalhado de Implantação

### Fases de Implementação

* **Fase 1 - Eventos de Tabela:** Informações cadastrais do empregador
* **Fase 2 - Eventos Não Periódicos:** Admissões, afastamentos e demissões
* **Fase 3 - Eventos Periódicos:** Folhas de pagamento
* **Fase 4 - Eventos de SST:** Saúde e Segurança no Trabalho

### Cronograma Específico para SST (Portaria SEPRT/RFB/ME nº 71/2021)

| Grupo | Perfil das Empresas | Data Limite |
| :--- | :--- | :--- |
| **1** | Faturamento anual superior a R$78 milhões | 13/10/2021 |
| **2** | Entidades com faturamento até R$78 milhões (não optantes pelo Simples Nacional) | 10/01/2022 |
| **3** | Optantes pelo Simples Nacional, empregadores PF (exceto doméstico), produtor rural PF e entidades sem fins lucrativos | 10/01/2022 |
| **4** | Órgãos públicos e organizações internacionais | 11/07/2022 |

> **Situação Atual:** Desde 2022, a obrigatoriedade é universal para todas as empresas, com exceção de alguns órgãos públicos que possuem método de transmissão diferenciado.

## 3. eSocial Simplificado (S-1.0)

### Principais Mudanças

#### Redução de Burocracia
* Eliminação de campos duplicados
* Substituição da RAIS e CAGED
* Simplificação de layouts

#### Benefícios
* Menor carga de trabalho para empresas
* Redução de erros no preenchimento
* Processamento mais rápido pelo governo

> **Impacto na Rotina:** As empresas passaram a enviar aproximadamente 30% menos informações, mantendo toda a qualidade dos dados necessários para fiscalização.

## 4. Impacto nas Relações de Trabalho

### Para os Trabalhadores
* **Transparência:** Registro imediato de admissões, alterações salariais e afastamentos
* **Histórico unificado:** Facilita comprovação para aposentadoria especial
* **Garantia de direitos:** FGTS, INSS e seguro-desemprego com menos inconsistências
* **Banco de dados:** Informações sobre exames médicos, condições de trabalho e acidentes

### Para as Empresas
* **Fiscalização integrada:** Cruzamento automático de informações entre órgãos
* **Combate à sonegação:** Identificação mais eficiente de irregularidades
* **Redução de custos:** Eliminação de múltiplos envios para diferentes sistemas
* **Segurança jurídica:** Registro oficial de todas as movimentações trabalhistas

## 5. Dados Coletados e LGPD

### Categorias de Informações

#### Dados Pessoais
* CPF
* Nome completo
* Data de nascimento
* Endereço

#### Dados Contratuais
* Data de admissão
* Cargo e função
* Salário e benefícios
* Jornada de trabalho

#### Dados de SST
* Exames médicos (ASO)
* Comunicação de Acidentes (CAT)
* Condições ambientais
* Exposição a agentes nocivos

> ### Conformidade com a LGPD
> O tratamento dos dados no eSocial segue rigorosamente os princípios da Lei Geral de Proteção de Dados (LGPD):
> * Finalidade específica e legítima
> * Necessidade e adequação
> * Transparência
> * Segurança e prevenção

## 6. Integração com o Sigo Web

### Eventos de SST Transmitidos
O sistema Sigo Web realiza a transmissão automática dos seguintes eventos para o eSocial:

* **S-2210 - Comunicação de Acidente de Trabalho:** Deve ser enviado em até 1 dia útil após o acidente, contendo dados do acidentado, tipo de lesão e CID.
* **S-2220 - Monitoramento da Saúde do Trabalhador:** Registra todos os exames ocupacionais realizados, vinculados ao PCMSO da empresa.
* **S-2221 - Exame Toxicológico:** Obrigatório para motoristas profissionais (Lei 13.103/2015). Resultados positivos geram bloqueio automático.
* **S-2240 - Condições Ambientais do Trabalho:** Comunica os riscos ambientais identificados no PGR e as medidas de controle adotadas.
* **S-3000 - Exclusão de Eventos:** Utilizado para tornar sem efeito (excluir) um evento que foi enviado incorretamente.
  `},{id:"eventos-sst-esocial",title:"Eventos de SST no eSocial",description:"Material sobre os eventos S-2210, S-2220, S-2221 e S-2240 no eSocial, com regras, observações e tabela completa de obrigatoriedade por categoria.",group:"Eventos do eSocial - SST",content:`
  <div class="welcome-banner">
    <h1>Eventos de SST no eSocial</h1>
    <p>Os eventos de Segurança e Saúde no Trabalho (SST) no eSocial substituem formulários tradicionais como a CAT e o PPP, garantindo conformidade legal e registro eletrônico unificado.</p>
  </div>

  <section class="core-concepts">
    <h2>Definição Completa</h2>
    <div class="concept-card">
      <p>São eventos obrigatórios para registro de informações trabalhistas relacionadas à saúde e segurança:</p>
      <ul>
        <li><strong>S-2210</strong> - Comunicação de Acidente de Trabalho (Substitui a CAT física)</li>
        <li><strong>S-2220</strong> - Monitoramento da Saúde do Trabalhador (Equivalente ao PPP)</li>
        <li><strong>S-2221</strong> - Exame Toxicológico (Obrigatório para motoristas profissionais)</li>
        <li><strong>S-2240</strong> - Condições Ambientais do Trabalho (Base para aposentadoria especial)</li>
      </ul>
      <div class="purpose-grid">
        <div class="purpose-card">
          <h4>Finalidade Principal</h4>
          <ul>
            <li>- Substituição de formulários físicos (CAT, PPP)</li>
            <li>- Histórico digitalizado de exposição a riscos</li>
            <li>- Base para financiamento da aposentadoria especial</li>
            <li>- Integração com demais eventos do eSocial</li>
          </ul>
        </div>
        <div class="purpose-card">
          <h4>Impactos Jurídicos</h4>
          <ul>
            <li>- Eliminação de autuações por falta de PPP/CAT</li>
            <li>- Comprovação de conformidade com NRs</li>
            <li>- Redução de passivos trabalhistas</li>
            <li>- Fundamentação para defesas judiciais</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="event-grid">
  
    <div class="event-card hover-info" data-hover="Prazo: 1 dia útil após o acidente">
      <h4>S-2210</h4>
      <p><strong>Comunicação de Acidente de Trabalho</strong></p>
      <ul>
        <li>Substitui a CAT física (Comunicação de Acidente de Trabalho)</li>
        <li>Obrigatório para todos os tipos de acidente (típico, de trajeto, doença ocupacional)</li>
        <li>Informações essenciais:
          <ul>
            <li>- Data, hora e local do acidente</li>
            <li>- Parte do corpo afetada</li>
            <li>- CID-10 relacionado</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Obrigatoriedade: Imediata</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Inclui ASO, exames complementares e histórico médico ocupacional completo">
      <h4>S-2220</h4>
      <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
      <ul>
        <li>Registra todo o ciclo de exames ocupacionais</li>
        <li>Substitui o Perfil Profissiográfico Previdenciário (PPP)</li>
        <li>Tipos de exames abrangidos:
          <ul>
            <li>- Admissional, periódico, retorno ao trabalho</li>
            <li>- Mudança de função, demissional</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Prazo: 15º dia do mês subsequente</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Custos: Empresa arca com todos os exames | Periodicidade: A cada 2,5 anos">
      <h4>S-2221</h4>
      <p><strong>Exame Toxicológico</strong></p>
      <ul>
        <li>Exigido pela Lei 13.103/2015 (Lei do Caminhoneiro)</li>
        <li>Categorias obrigatórias:
          <ul>
            <li>- Motoristas profissionais (CNH C, D e E)</li>
            <li>- Operadores de máquinas perigosas</li>
          </ul>
        </li>
        <li>Consequências de resultado positivo:
          <ul>
            <li>- Afastamento imediato das atividades</li>
            <li>- Bloqueio no sistema até regularização</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Amostra: Cabelo/Unha (6 meses de rastreamento)</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Tabela 24 do eSocial com 1.200+ agentes nocivos | Atualização trimestral obrigatória">
      <h4>S-2240</h4>
      <p><strong>Condições Ambientais do Trabalho</strong></p>
      <ul>
        <li>Mapeamento completo de agentes:
          <ul>
            <li>- Físicos (ruído, calor, vibração)</li>
            <li>- Químicos (fumos, poeiras, gases)</li>
            <li>- Biológicos (vírus, bactérias, fungos)</li>
          </ul>
        </li>
        <li>Informações sobre proteção:
          <ul>
            <li>- EPIs fornecidos</li>
            <li>- EPCs instalados</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Base legal: Anexo IV do Decreto 3.048/99</span>
      </div>
    </div>
  </section>

  <section class="important-info">
    <h2>Observações Técnicas Críticas</h2>
    <div class="notes-grid">
      <div class="note-card">
        <h4>Regras Gerais</h4>
        <ul>
          <li>• Estagiários (901) e aprendizes (1401) estão isentos</li>
          <li>• Servidores públicos (RPPS): obrigatório apenas se previsto em norma específica</li>
          <li>• Empresas sem exposição a riscos: envio do S-2240 com declaração negativa</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Integração de Dados</h4>
        <ul>
          <li>• S-2220 utiliza dados do S-2240 para compor o histórico</li>
          <li>• S-2210 aciona automaticamente o S-2220 quando necessário</li>
          <li>• Eventos interligados: S-2190, S-2300 e S-2400</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Responsabilidades</h4>
        <ul>
          <li>• Médico coordenador: validação técnica dos eventos</li>
          <li>• RH: envio dentro dos prazos legais</li>
          <li>• SESMT: fornecimento de dados técnicos</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="obligations-table">
    <h2>Obrigatoriedade por Categoria de Trabalhador</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Categoria</th>
            <th>S-2210</th>
            <th>S-2220</th>
            <th>S-2221</th>
            <th>S-2240</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>101</td><td>Empregado - CLT</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>102</td><td>Trabalhador Rural</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>103</td><td>Doméstico</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
          <tr><td>104</td><td>Aprendiz</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
          <tr><td>105</td><td>Avulso</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>106</td><td>Temporário</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>111</td><td>Cooperado</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>201</td><td>Servidor Público</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>301</td><td>Empresário</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>401</td><td>Dirigente</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>701</td><td>Autônomo</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>721</td><td>Dirigente Sindical</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>731</td><td>Trab. Cooperado</td><td>Facultativo</td><td>Facultativo</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>901</td><td>Estagiário</td><td>Não</td><td>Não</td><td>Não</td><td>Não</td></tr>
          <tr><td>1401</td><td>Aprendiz</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-notes">
      <p>* Condicional: Obrigatório apenas para motoristas profissionais (Lei 13.103/2015)</p>
      <p>Fonte: Instrução Normativa RFB nº 2.100/2022 e Manual do eSocial v. 1.7</p>
    </div>
  </section>

  <section class="penalties-section">
    <h2>Consequências do Descumprimento</h2>
    <div class="penalties-grid">
      <div class="penalty-card">
        <h4>Multas Administrativas</h4>
        <ul>
          <li>• Atraso no S-2210: R$ 1.000,00 + R$ 100,00/dia</li>
          <li>• Omisssão do S-2240: Até R$ 8.257,40 por trabalhador</li>
          <li>• Erros recorrentes: Inclusão no "Cadastro de Empresas Infratoras"</li>
        </ul>
      </div>
      <div class="penalty-card">
        <h4>Riscos Trabalhistas</h4>
        <ul>
          <li>• Invalidação de demissões por justa causa</li>
          <li>• Reversão do ônus da prova em ações judiciais</li>
          <li>• Perda de direito a recursos administrativos</li>
        </ul>
      </div>
      <div class="penalty-card">
        <h4>Impactos Previdenciários</h4>
        <ul>
          <li>• Perda do direito à aposentadoria especial</li>
          <li>• Reclassificação de grau de incapacidade</li>
          <li>• Cobrança retroativa de diferenças de GFIP</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    :root {
      --primary: #2196F3;
      --secondary: #0D47A1;
      --accent: #0D47A1
      --light: #e3f2fd;
      --dark: #0d2b4e;
      --gray: #f5f5f5;
      --text: #333;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--text);
      padding: 0 20px 40px;
      background-color: #f9fbfd;
    }
    
    h1, h2, h3, h4 {
      color: var(--dark);
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 2.2rem;
      border-bottom: 3px solid var(--accent);
      padding-bottom: 10px;
      margin-top: 0;
    }
    
    h2 {
      font-size: 1.8rem;
      margin: 2rem 0 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--primary);
    }
    
    h3 {
      font-size: 1.4rem;
      margin: 1.5rem 0 1rem;
    }
    
    h4 {
      font-size: 1.2rem;
      margin: 1.2rem 0 0.8rem;
      color: var(--secondary);
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    ul {
      padding-left: 1.5rem;
      margin-bottom: 1.2rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    /* Banner */
    .welcome-banner {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      margin: 20px 0 30px;
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .welcome-banner h1 {
      color: white;
      border-bottom: none;
    }
    
    .welcome-banner p {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    /* Cards */
    .concept-card, 
    .event-card, 
    .purpose-card,
    .note-card,
    .penalty-card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.08);
      margin-bottom: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-left: 4px solid var(--primary);
    }
    
    .concept-card {
      background: linear-gradient(to right, white 80%, #e8f4ff);
    }
    
    .event-card:hover, 
    .purpose-card:hover,
    .note-card:hover,
    .penalty-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    }
    
    /* Grids */
    .purpose-grid,
    .notes-grid,
    .penalties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin: 25px 0;
    }
    
    .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin: 30px 0;
    }
    
    /* Event Card Specific */
    .event-card {
      position: relative;
      overflow: hidden;
    }
    
    .event-card:hover::after {
      content: attr(data-hover);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--accent);
      color: white;
      padding: 12px;
      font-size: 0.9rem;
      transform: translateY(0);
      transition: transform 0.3s ease;
      z-index: 10;
    }
    
    .event-footer {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px dashed #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .tag {
      background: var(--light);
      color: var(--secondary);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    /* Table */
    .obligations-table {
      margin: 40px 0 30px;
    }
    
    .table-container {
      overflow-x: auto;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 800px;
      background: white;
    }
    
    th, td {
      padding: 14px 16px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    
    thead {
      background: var(--primary);
      color: white;
    }
    
    thead th {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
    
    tbody tr:nth-child(even) {
      background-color: #f8fbff;
    }
    
    tbody tr:hover {
      background-color: #edf7ff;
    }
    
    .table-notes {
      margin-top: 15px;
      font-size: 0.9rem;
      color: #666;
      font-style: italic;
    }
    
    /* Responsividade */
    @media (max-width: 768px) {
      .welcome-banner {
        padding: 20px;
      }
      
      .event-grid,
      .purpose-grid,
      .notes-grid,
      .penalties-grid {
        grid-template-columns: 1fr;
      }
      
      .concept-card, 
      .event-card {
        padding: 20px;
      }
    }
  </style>
  `},{id:"ecac-esocial-advanced-guide",title:"e-CAC e eSocial",description:"Aspectos do e-CAC e sua integração estratégica com o eSocial.",group:"eSocial",tags:["eSocial","Introdução"],content:`
    <div class="welcome-banner">
      <h1>Domine o e-CAC: Guia Completo para Colaboradores Wise</h1>
      <p>Este guia aprofundado explica o e-CAC como pilar fundamental para a gestão das obrigações do eSocial, com ênfase nos processos de procuração eletrônica e certificação digital.</p>
    </div>

    <section class="core-concepts">
      <h2>O e-CAC em Detalhe: Centro Virtual de Atendimento ao Contribuinte</h2>
      <div class="concept-card">
        <div class="definition-box">
          <p>O <strong>e-CAC</strong> (Centro Virtual de Atendimento ao Contribuinte) é a principal plataforma digital da Receita Federal para:</p>
          <ul>
            <li>Centralizar todos os serviços fiscais em um único ambiente seguro</li>
            <li>Eliminar a necessidade de deslocamento físico às unidades da RFB</li>
            <li>Garantir autenticidade e validade jurídica através de certificação digital</li>
          </ul>
        </div>
        
        <h3>Serviços Essenciais do e-CAC para Operações SST</h3>
        <div class="service-grid">
          <div class="service-item">
            <h4>Consulta Fiscal Integrada</h4>
            <p>Verificação em tempo real de débitos e pendências tributárias vinculadas a CPF/CNPJ</p>
          </div>
          <div class="service-item">
            <h4>Gestão de Declarações</h4>
            <p>Envio e retificação de DCTF, EFD-Reinf e outras obrigações acessórias</p>
          </div>
          <div class="service-item">
            <h4>Regularização Fiscal</h4>
            <p>Emissão de DARF e opções de parcelamento de débitos</p>
          </div>
          <div class="service-item highlight">
            <h4>Procuração Eletrônica</h4>
            <p>Cadastro e gestão de autorizações para terceiros atuarem em nome da empresa</p>
          </div>
          <div class="service-item">
            <h4>Comunicação Digital</h4>
            <p>Acesso a documentos oficiais transmitidos via SPED e eSocial</p>
          </div>
        </div>
      </div>
    </section>

    <section class="integration-section">
      <h2>Integração Estratégica: e-CAC como Gateway do eSocial</h2>
      <div class="integration-card">
        <div class="integration-diagram">
          <div class="diagram-node">
            <h4>e-CAC</h4>
            <p>Portal de Controle de Acessos</p>
            <div class="node-arrow">→</div>
          </div>
          <div class="diagram-connector"></div>
          <div class="diagram-node">
            <h4>Procuração Eletrônica</h4>
            <p>Validação Jurídica</p>
            <div class="node-arrow">→</div>
          </div>
          <div class="diagram-connector"></div>
          <div class="diagram-node highlight">
            <h4>eSocial</h4>
            <p>Transmissão de Eventos</p>
          </div>
        </div>
        
        <div class="integration-details">
          <h3>Mecanismo de Autorização</h3>
          <p>O e-CAC atua como <strong>controlador de acesso</strong> para o eSocial, garantindo que:</p>
          <ul>
            <li>Apenas procuradores devidamente autorizados possam enviar eventos</li>
            <li>Cada transação tenha validade jurídica através de certificação digital</li>
            <li>As permissões sejam específicas por tipo de evento (ex: Grupo SST)</li>
          </ul>
          
          <div class="warning-box">
            <strong>Ponto Crítico:</strong> Sem procuração eletrônica válida no e-CAC, nenhum terceiro (incluindo a Wise) pode legalmente transmitir eventos ao eSocial em nome do cliente.
          </div>
        </div>
      </div>
    </section>

    <section class="proxy-process">
      <h2>Fluxo Detalhado: Cadastro de Procuração Eletrônica no e-CAC</h2>
      <div class="process-steps">
        <div class="step-card">
          <div class="step-header">1</div>
          <h3>Acesso com Certificado Digital</h3>
          <ul>
            <li>Login no e-CAC usando <strong>e-CNPJ A1 ou A3</strong></li>
            <li>Conta Gov.br com nível Prata ou Ouro também é aceita</li>
            <li>O representante legal deve acessar em nome da PJ outorgante</li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">2</div>
          <h3>Navegação ao Módulo de Procurações</h3>
          <ul>
            <li>Buscar por "procuração" na barra de pesquisa</li>
            <li>Selecionar: <em>"CADASTRO, CONSULTA E CANCELAMENTO - PROCURAÇÃO PARA E-CAC"</em></li>
            <li>Recomenda-se cancelar procurações antigas não utilizadas</li>
          </ul>
        </div>
        
        <div class="step-card highlight">
          <div class="step-header">3</div>
          <h3>Preenchimento dos Dados</h3>
          <ul>
            <li><strong>Outorgante:</strong> Dados preenchidos automaticamente (empresa cliente)</li>
            <li><strong>Procurador:</strong> CNPJ/CPF da Wise ou profissional designado</li>
            <li><strong>Vigência:</strong> Alinhar com duração do contrato de serviços</li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">4</div>
          <h3>Definição de Permissões</h3>
          <ul>
            <li>Marcar <strong>"eSocial - Grupo SST"</strong> para eventos de Saúde e Segurança</li>
            <li>Incluir <strong>"eSocial - Download"</strong> para consulta de envios</li>
            <li>Para exames toxicológicos: <strong>"eSocial - Toxicológico"</strong></li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">5</div>
          <h3>Finalização e Validação</h3>
          <ul>
            <li>Definir possibilidade de substabelecimento</li>
            <li>Resolver Captcha de segurança</li>
            <li>Clicar em <strong>"Cadastrar Procuração"</strong> para concluir</li>
          </ul>
        </div>
      </div>
      
      <div class="process-note">
        <p><strong>Observação:</strong> Todo o processo deve ser realizado pelo representante legal da empresa cliente. A Wise pode fornecer orientações, mas não pode executar esta etapa diretamente.</p>
      </div>
    </section>

    <section class="certificates-section">
      <h2>Certificação Digital: Requisitos Técnicos para Operação</h2>
      <div class="certificates-grid">
        <div class="certificate-card">
          <h3>e-CNPJ (Empresa Cliente)</h3>
          <ul>
            <li><strong>Obrigatório</strong> para outorgar procurações</li>
            <li><strong>Tipo A1:</strong> Arquivo digital (.pfx) instalado no computador</li>
            <li><strong>Tipo A3:</strong> Token físico ou cartão inteligente</li>
            <li>Validade: de 1 a 3 anos, conforme o tipo. Importante destacar que, no Sigo, é utilizado exclusivamente o certificado do Tipo A1</li>
          </ul>
        </div>
        
        <div class="certificate-card highlight">
          <h3>e-CPF (Profissional Wise)</h3>
          <ul>
            <li>Necessário para assinar eventos como procurador</li>
            <li>Deve estar vinculado à procuração eletrônica</li>
            <li>Permite transmissão em nome do cliente</li>
            <li>Níveis de certificado: A1 ou A3</li>
          </ul>
        </div>
        
        <div class="certificate-card">
          <h3>Conta Gov.br</h3>
          <ul>
            <li>Alternativa para acesso ao e-CAC</li>
            <li>Nível <strong>Prata</strong> (com foto) ou <strong>Ouro</strong> exigido</li>
            <li>Não substitui certificado digital para algumas funcionalidades</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="workflow-section">
      <h2>Fluxo Operacional Wise: e-CAC + eSocial</h2>
      <div class="workflow-diagram">
        <div class="workflow-step">
          <div class="step-number">1</div>
          <h3>Onboarding do Cliente</h3>
          <p>Cliente cadastra procuração para Wise no e-CAC com permissões SST</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="step-number">2</div>
          <h3>Transmissão de Eventos</h3>
          <p>Wise envia eventos (S-2210, S-2220, etc.) usando e-CPF do responsável</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step highlight">
          <div class="step-number">3</div>
          <h3>Gestão de Correções</h3>
          <p>Para erros: envio de S-3000 (exclusão) e retransmissão do evento correto</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="step-number">4</div>
          <h3>Verificação Conjunta</h3>
          <p>Cliente pode consultar recibo de entrega diretamente no eSocial via e-CAC</p>
        </div>
      </div>
    </section>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        color: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 40px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .welcome-banner h1 {
        margin-top: 0;
        font-size: 2.2em;
      }
      .concept-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        margin-bottom: 30px;
      }
      .definition-box {
        background: #f5f9ff;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin-bottom: 20px;
      }
      .service-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .service-item {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
      }
      .service-item.highlight {
        background: #e3f2fd;
        border-color: #2196F3;
      }
      .integration-card {
        display: flex;
        gap: 30px;
        margin-top: 20px;
      }
      .integration-diagram {
        flex: 1;
        display: flex;
        align-items: center;
      }
      .diagram-node {
        background: white;
        padding: 15px;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        min-width: 120px;
      }
      .diagram-node.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .diagram-connector {
        flex: 1;
        border-top: 2px dashed #2196F3;
        margin: 0 10px;
      }
      .node-arrow {
        color: #2196F3;
        font-weight: bold;
      }
      .integration-details {
        flex: 2;
      }
      .warning-box {
        background: #fff8e1;
        border-left: 4px solid #ffc107;
        padding: 15px;
        margin-top: 20px;
      }
      .process-steps {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 30px;
      }
      .step-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .step-card.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .step-header {
        background: #2196F3;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .process-note {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 6px;
        margin-top: 30px;
        font-style: italic;
      }
      .certificates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 30px;
      }
      .certificate-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .certificate-card.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .workflow-diagram {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        flex-wrap: wrap;
      }
      .workflow-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 180px;
        flex: 1;
        margin: 0 10px;
      }
      .workflow-step.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 15px;
      }
      .workflow-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.5em;
      }
      h2, h3, h4 {
        color: #00000;
      }
      h2 {
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 10px;
        margin-top: 40px;
      }
      ul {
        margin-left: 20px;
      }
      @media (max-width: 768px) {
        .integration-card, .workflow-diagram {
          flex-direction: column;
        }
        .workflow-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
  `},{id:"esocial-sst-transmission",title:"Rotina de Transmissão dos Eventos de SST ao eSocial",description:"Fluxo completo e prazos para transmissão dos eventos de Saúde e Segurança do Trabalho no eSocial.",group:"eSocial",tags:["eSocial","Processos","Webservice","Eventos"],content:`
    <div class="transmission-header">
      <h1>Rotina de Transmissão Automatizada - Eventos SST</h1>
      <p>Envio automatizado via Serviço Mensageria do Sigo® conforme programação estabelecida</p>
    </div>

    <section class="event-section">
      <h2>Eventos de SST e Seus Prazos Legais</h2>
      
      <div class="event-grid">
        <!-- S-2210 -->
        <div class="event-card critical">
          <div class="event-header">
            <h3>S-2210</h3>
            <span class="event-tag">Crítico</span>
          </div>
          <p class="event-title">Comunicação de Acidente de Trabalho</p>
          <div class="event-detail">
            <strong>Prazo:</strong> 1º dia útil após ocorrência (em caso de morte: imediato)
          </div>
          <div class="event-detail">
            <strong>Transmissão:</strong> Imediata quando disponível
          </div>
          <div class="event-detail">
            <strong>Substitui:</strong> CAT física (exceto para MEI não obrigado no eSocial)
          </div>
          <div class="event-warning">
            <h4>Consequências por Não Envio:</h4>
            <ul>
              <li>Multas até R$ 10.037,35 (art. 286, Decreto 3.048/1999)</li>
              <li>Fiscalização eletrônica automatizada</li>
              <li>Impacto no FAP da empresa</li>
              <li>Dificuldade de acesso a benefícios</li>
            </ul>
          </div>
        </div>

        <!-- S-2220 -->
        <div class="event-card">
          <div class="event-header">
            <h3>S-2220</h3>
            <span class="event-tag">Periódico</span>
          </div>
          <p class="event-title">Monitoramento da Saúde do Trabalhador</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês subsequente ao exame
          </div>
          <div class="event-detail">
            <strong>Transmissão:</strong> A partir do 1º dia do mês subsequente
          </div>
          <div class="event-warning">
            <h4>Riscos por Não Envio:</h4>
            <ul>
              <li>Inconsistência no prontuário eletrônico</li>
              <li>Autuação por falta de comprovação</li>
              <li>Responsabilização solidária empregador-prestador</li>
            </ul>
          </div>
        </div>

        <!-- S-2221 -->
        <div class="event-card important">
          <div class="event-header">
            <h3>S-2221</h3>
            <span class="event-tag">Toxicológico</span>
          </div>
          <p class="event-title">Exame Toxicológico do Motorista Profissional</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês seguinte ao exame
          </div>
          <div class="event-detail">
            <strong>Aplica-se:</strong> Categorias C, D ou E (Lei 13.103/2015)
          </div>
          <div class="event-warning">
            <h4>Impactos por Não Envio:</h4>
            <ul>
              <li>Irregularidade perante Lei dos Caminhoneiros</li>
              <li>Impedimento contratual</li>
              <li>Ações fiscais por falta de controle</li>
            </ul>
          </div>
        </div>

        <!-- S-2240 -->
        <div class="event-card">
          <div class="event-header">
            <h3>S-2240</h3>
            <span class="event-tag">Ambiental</span>
          </div>
          <p class="event-title">Condições Ambientais do Trabalho</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês subsequente à alteração
          </div>
          <div class="event-detail">
            <strong>Observação:</strong> Não se retifica - envia novo evento
          </div>
          <div class="event-warning">
            <h4>Consequências por Não Envio:</h4>
            <ul>
              <li>Multas por omissão de dados</li>
              <li>Inconsistência no PPP eletrônico</li>
              <li>Impacto em aposentadoria especial</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="responsibility-section">
      <h2>Responsabilidades no Envio</h2>
      <div class="responsibility-card">
        <div class="responsibility-item">
          <h3>Empregador</h3>
          <p>Responsável legal pelo envio, podendo delegar via procuração eletrônica no e-CAC</p>
        </div>
        <div class="responsibility-item important">
          <h3>Certificação Digital</h3>
          <p>Obrigatório uso de e-CNPJ da empresa ou e-CPF com procuração válida</p>
          <div class="warning-note">
            <strong>Proibição:</strong> Uso indevido de certificado do cliente por prestador gera responsabilização solidária
          </div>
        </div>
        <div class="responsibility-item">
          <h3>Prestador SST</h3>
          <p>Quando autorizado, deve utilizar próprio e-CPF (nunca o certificado do cliente)</p>
        </div>
      </div>
    </section>

    <section class="automation-section">
      <h2>Processo Automatizado via Mensageria Sigo®</h2>
      <div class="automation-flow">
        <div class="flow-step">
          <div class="step-number">1</div>
          <h3>Verificação Horária</h3>
          <p>A cada 1 hora, o sistema rastreia eventos disponíveis no prazo</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">2</div>
          <h3>Validação XML</h3>
          <p>Conferência automática da estrutura conforme leiaute eSocial</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">3</div>
          <h3>Transmissão</h3>
          <p>Envio ao Ambiente Nacional do eSocial</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">4</div>
          <h3>Confirmação</h3>
          <p>Consulta do recibo de entrega na próxima verificação</p>
        </div>
      </div>
      <div class="validation-note">
        <h3>Validação de Preenchimento</h3>
        <p>Eventos com erros ficam bloqueados para transmissão até correção via botão "Validar Preenchimento"</p>
      </div>
    </section>

    <style>
      .transmission-header {
        background: #e3f2fd;
        color: white;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      .transmission-header h1 {
        margin-top: 0;
      }
      .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 20px;
      }
      .event-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #2196F3;
      }
      .event-card.critical {
        border-top-color: #2196F3;
      }
      .event-card.important {
        border-top-color: #2196F3;
      }
      .event-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .event-tag {
        background: #e3f2fd;
        color: #2196F3;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.8em;
        font-weight: bold;
      }
      .event-title {
        font-weight: bold;
        color: #333;
        margin-bottom: 15px;
      }
      .event-detail {
        margin-bottom: 10px;
        font-size: 0.9em;
      }
      .event-warning {
        background: #fff8e1;
        padding: 12px;
        border-radius: 6px;
        margin-top: 15px;
        font-size: 0.85em;
      }
      .event-warning h4 {
        margin-top: 0;
        color: #f57c00;
      }
      .event-warning ul {
        margin: 8px 0 0 20px;
      }
      .responsibility-card {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 25px;
      }
      .responsibility-item {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .responsibility-item.important {
        border: 2px solid #FFC107;
      }
      .warning-note {
        background: #ffebee;
        padding: 10px;
        border-radius: 5px;
        margin-top: 15px;
        font-size: 0.85em;
      }
      .automation-flow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        flex-wrap: wrap;
      }
      .flow-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 150px;
        flex: 1;
        margin: 0 5px;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 15px;
      }
      .flow-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.3em;
      }
      .validation-note {
        background: #e8f5e9;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
      }
      h2 {
        color: #2196F3;
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 8px;
      }
      @media (max-width: 768px) {
        .automation-flow {
          flex-direction: column;
        }
        .flow-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
  `},{id:"evento-s2210-comunicacao-cat",title:"Evento S-2210 - Comunicação de Acidente de Trabalho no eSocial",description:"Artigo completo para integração de novos colaboradores sobre o envio da CAT pelo evento S-2210. Entenda a legislação, responsabilidades e impacto direto na vida do trabalhador.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2210"],content:`

  <div class="welcome-banner">
    <h1>Bem-vindo à Comunicação de Acidente de Trabalho</h1>
    <p>Este conteúdo foi elaborado para você compreender a importância da Comunicação de Acidente de Trabalho (CAT) e como ela é feita através do evento S-2210 no eSocial. Um processo essencial para garantir os direitos do trabalhador e manter a empresa em conformidade com a legislação.</p>
  </div>

  <section class="core-concepts">
    <h2>O que é o Evento S-2210?</h2>
    <div class="concept-card">
      <p>O evento <strong>S-2210</strong> é utilizado para comunicar oficialmente um <strong>acidente de trabalho</strong>, uma <strong>doença ocupacional</strong> ou um <strong>acidente de trajeto</strong>, ainda que não haja afastamento do colaborador.</p>
      <p>Essa comunicação é obrigatória para:</p>
      <ul>
        <li>Empregadores do regime CLT;</li>
        <li>Órgãos públicos que contratam servidores pelo RGPS;</li>
        <li>OGMO (Órgão Gestor de Mão de Obra);</li>
        <li>Sindicatos que atuam com trabalhadores avulsos.</li>
      </ul>
      <p>No sistema do eSocial, o número de recibo do evento passa a ser o <strong>número oficial da CAT</strong>, eliminando a necessidade de emissão em papel.</p>
    </div>
  </section>

  <section class="nr-overview">
    <h2>Base Legal e Normas Relacionadas</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>Lei nº 8.213/1991 - Art. 22</h3>
        <p>Estabelece a obrigatoriedade da comunicação do acidente de trabalho à Previdência Social até o primeiro dia útil seguinte ao da ocorrência.</p>
        <p class="nr-desc">O não cumprimento implica em penalidade ao empregador.</p>
      </div>
      <div class="nr-card">
        <h3>CLT - Art. 169</h3>
        <p>Prevê a notificação compulsória das doenças profissionais e das relacionadas às condições especiais de trabalho.</p>
        <p class="nr-desc">Complementa a legislação previdenciária com foco na saúde ocupacional.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impacto Direto para o Trabalhador</h2>

    <div class="document-card">
      <h3 class="document-title">Direitos Garantidos com a Emissão da CAT</h3>
      <div class="document-content">
        <p>A CAT é o documento que formaliza o acidente ou doença como sendo de natureza ocupacional. Sua emissão garante ao trabalhador os seguintes direitos:</p>
        <ul>
          <li><strong>Auxílio por Incapacidade Temporária Acidentária (B91):</strong> O trabalhador passa a receber pelo INSS a partir do 16º dia de afastamento.</li>
          <li><strong>Estabilidade Provisória:</strong> Ao retornar de um afastamento superior a 15 dias por acidente de trabalho, o empregado tem estabilidade de 12 meses.</li>
          <li><strong>FGTS Durante o Afastamento:</strong> O empregador deve continuar depositando o FGTS durante todo o período.</li>
          <li><strong>Aposentadoria por Incapacidade Permanente ou Pensão por Morte:</strong> Em caso de óbito ou invalidez permanente, a CAT é base essencial para garantir esses benefícios.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Consequências da Não Comunicação</h3>
      <div class="document-content">
        <p>Deixar de transmitir o evento S-2210 acarreta penalidades:</p>
        <ul>
          <li><strong>Multa:</strong> Pode variar entre o limite mínimo e o limite máximo do salário de contribuição, conforme os artigos 286 e 336 do Decreto nº 3.048/1999.</li>
          <li><strong>Multa Agravada:</strong> Em caso de reincidência, a penalidade pode ser ampliada.</li>
        </ul>
        <p><strong>Responsabilidade Exclusiva:</strong> A obrigação de envio é da empresa ou dos órgãos competentes (OGMO, sindicato, etc.).</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Detalhes Técnicos do Evento no Sistema</h2>
    <p>O evento S-2210 exige preenchimento rigoroso com base em tabelas do eSocial. Abaixo, apresentamos as mais relevantes:</p>

    <div class="event-grid">
      <div class="event-card">
        <h4>Tabela 01</h4>
        <p><strong>Categoria de Trabalhador</strong></p>
        <p>Exemplo: 101 – Empregado, 111 – Trabalhador Temporário.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 05</h4>
        <p><strong>Tipo de Inscrição</strong></p>
        <p>Define o tipo de local do acidente (CNPJ, CAEPF, CNO).</p>
      </div>

      <div class="event-card">
        <h4>Tabela 13</h4>
        <p><strong>Parte do Corpo Atingida</strong></p>
        <p>Exemplo: cabeça, tronco, membros superiores/inferiores.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 14</h4>
        <p><strong>Agente Causador</strong></p>
        <p>Exemplo: ferramenta, máquina, produto químico, veículo.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 15</h4>
        <p><strong>Situação Geradora</strong></p>
        <p>Exemplo: queda, explosão, esforço físico, contato com material cortante.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 17</h4>
        <p><strong>Natureza da Lesão</strong></p>
        <p>Exemplo: fratura, queimadura, corte, contusão, entorse.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 20</h4>
        <p><strong>Tipo de Logradouro</strong></p>
        <p>Preenchimento correto do endereço onde ocorreu o acidente.</p>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px #e3f2fd(0,0,0,0.1);
      margin: 15px 0;
    }

    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }

    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }

    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }

    .document-content {
      padding: 25px;
    }

    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }

    .event-card p {
      margin: 8px 0;
    }

    .event-card p:first-of-type {
      font-weight: bold;
      margin-bottom: 12px;
    }
  </style>
  `},{id:"evento-s2220-monitoramento-saude",title:"Evento S-2220 - Monitoramento da Saúde do Trabalhador",description:"Entenda de forma clara e acolhedora como funciona o envio do evento S-2220 no eSocial e sua relação com o PCMSO e o ASO. Essencial para colaboradores e profissionais de SST.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2220"],content:`

  <div class="welcome-banner">
    <h1>Monitoramento da Saúde no eSocial</h1>
    <p>Este guia foi criado para apresentar a importância do evento S-2220, que documenta a saúde ocupacional dos trabalhadores ao longo de sua trajetória na empresa. Uma ferramenta essencial para promover segurança, cumprir a legislação e proteger o trabalhador.</p>
  </div>

  <section class="core-concepts">
    <h2>O que é o Evento S-2220?</h2>
    <div class="concept-card">
      <p>O <strong>evento S-2220</strong> é utilizado para registrar digitalmente as informações sobre o <strong>monitoramento da saúde do trabalhador</strong> durante todo seu vínculo com a empresa.</p>
      <p>Esse evento detalha as avaliações clínicas e os exames complementares, com base no <strong>Atestado de Saúde Ocupacional (ASO)</strong>, e deve ser enviado sempre que um exame ocupacional for realizado.</p>

      <h4>Exames que devem ser registrados:</h4>
      <ul>
        <li>Admissional</li>
        <li>Periódico</li>
        <li>Retorno ao Trabalho</li>
        <li>Mudança de Função ou Risco</li>
        <li>Monitoração Pontual (quando houver ASO)</li>
        <li>Demissional</li>
      </ul>

      <p><strong>Importante:</strong> mesmo exames solicitados fora da rotina periódica (monitoração pontual) devem ser enviados, desde que estejam registrados no ASO.</p>
    </div>
  </section>

  <section class="nr-overview">
    <h2>Relação com as Normas Regulamentadoras</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-7</h3>
        <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
        <p class="nr-desc">Estabelece a obrigatoriedade de exames clínicos e complementares, visando preservar a saúde dos trabalhadores. O evento S-2220 é a forma digital de comprovar sua execução.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impacto para o Trabalhador e Previdência</h2>

    <div class="document-card">
      <h3 class="document-title">Ligação com o Perfil Profissiográfico Previdenciário (PPP)</h3>
      <div class="document-content">
        <p>O evento S-2220 alimenta diretamente o <strong>PPP em meio digital</strong>, documento exigido pelo INSS para comprovação do histórico laboral e da saúde do trabalhador.</p>

        <h4>Benefícios do registro correto:</h4>
        <ul>
          <li><strong>Comprovação de Doença Ocupacional:</strong> Históricos de exames ajudam a comprovar o nexo entre a doença e a atividade profissional.</li>
          <li><strong>Aposentadoria Especial:</strong> O PPP digital, baseado no S-2220 e S-2240, é essencial para solicitação junto ao INSS.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Monitoração Pontual - Como Funciona?</h3>
      <div class="document-content">
        <p>O evento S-2220 também cobre exames realizados fora da rotina, como os solicitados por critério médico. No entanto:</p>
        <ul>
          <li>O exame só deve ser enviado se estiver vinculado a um <strong>ASO emitido</strong>.</li>
          <li>Exames avulsos, sem ASO, não devem ser registrados de forma isolada no S-2220.</li>
        </ul>
        <p>Esses cuidados evitam inconsistências no histórico digital do trabalhador.</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Tabelas Técnicas Utilizadas no Evento S-2220</h2>
    <p>O correto preenchimento do S-2220 exige o uso de códigos e referências das tabelas do eSocial. Veja abaixo as principais:</p>

    <div class="event-grid">
      <div class="event-card">
        <h4>Tabela 05</h4>
        <p><strong>Tipos de Inscrição</strong></p>
        <p>Define o tipo de inscrição do estabelecimento de saúde onde o exame foi realizado. Ex: CNPJ, CAEPF, CNO.</p>
        <p><strong>Campo:</strong> ideEstabSaude/tpInsc</p>
      </div>

      <div class="event-card">
        <h4>Tabela 01</h4>
        <p><strong>Categoria do Trabalhador</strong></p>
        <p>Identifica a relação do trabalhador com a empresa (empregado, estagiário, servidor etc.).</p>
        <p><strong>Campo:</strong> categoria</p>
      </div>

      <div class="event-card">
        <h4>Tabela 27</h4>
        <p><strong>Procedimentos Diagnósticos</strong></p>
        <p>Indica o tipo de exame realizado: clínico, audiometria, hemograma, espirometria, etc.</p>
        <p><strong>Campo:</strong> procRealizado/codProcRealizado</p>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin: 15px 0;
    }

    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }

    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }

    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }

    .document-content {
      padding: 25px;
    }

    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }

    .event-card p {
      margin: 8px 0;
    }

    .event-card p:first-of-type {
      font-weight: bold;
      margin-bottom: 12px;
    }
  </style>
  `},{id:"evento-s2221-exame-toxicologico",title:"Evento S-2221 - Exame Toxicológico para Motoristas Profissionais",description:"Guia completo sobre o envio do evento S-2221 ao eSocial, abrangendo requisitos legais, prazos, impacto previdenciário e operacional, com orientações específicas para uso no sistema.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2221"],content:`
<div class="welcome-banner">
  <h1>Bem-vindo ao Guia sobre o Evento S-2221!</h1>
  <p>Este material foi desenvolvido para explicar de forma clara como funciona o envio do exame toxicológico de motoristas profissionais pelo evento S-2221 no eSocial, com instruções completas para uso do sistema.</p>
</div>

<section class="core-concepts">
  <h2>O que é o Evento S-2221?</h2>
  <div class="concept-card">
    <p>O evento S-2221 é o registro eletrônico, enviado ao eSocial, que contém as informações do <strong>exame toxicológico</strong> realizado por motoristas profissionais empregados. Visa detectar o uso de substâncias psicoativas que comprometam a direção segura.</p>
    <ul>
      <li>Obrigatório desde 1º de agosto de 2024</li>
      <li>Aplica-se a motoristas com CNH nas categorias C, D ou E</li>
      <li>Exclusivo para atividades remuneradas de transporte rodoviário de cargas ou passageiros</li>
    </ul>
  </div>
</section>

<section class="details-section">
  <h2>Quem Deve Realizar o Exame?</h2>
  <ul>
    <li>Motoristas de transporte rodoviário de passageiros</li>
    <li>Motoristas de transporte rodoviário de cargas</li>
    <li><strong>Importante:</strong> Aplica-se apenas às categorias C, D e E da CNH</li>
  </ul>
</section>

<section class="data-required">
  <h2>Informações que Devem ser Informadas no Evento</h2>
  <ul>
    <li>CPF do empregado</li>
    <li>Matrícula</li>
    <li>Data do exame</li>
    <li>CNPJ do laboratório</li>
    <li>Código sequencial (11 caracteres)</li>
    <li>Nome e CRM do médico responsável</li>
  </ul>
</section>

<section class="deadline-section">
  <h2>Prazo de Envio</h2>
  <p>O envio deve ocorrer até o dia 15 do mês subsequente ao exame. Se cair em dia não útil, antecipa-se para o último dia útil anterior.</p>
  <h3>Momentos de Realização</h3>
  <ul>
    <li><strong>Admissional</strong>: Antes da contratação</li>
    <li><strong>Periódico</strong>: A cada 30 meses por sorteio randômico</li>
    <li><strong>Demissional</strong>: No desligamento</li>
  </ul>
  <p><strong>Reaproveitamento:</strong> Se feito nos últimos 60 dias, pode ser usado para outro fim (admissional/demissional).</p>
</section>

<section class="legal-base">
  <h2>Base Legal e Normas</h2>
  <ul>
    <li><strong>Portaria MTP nº 672/2021</strong>: Confidencialidade e contraprova</li>
    <li><strong>Portaria MTE nº 612/2024</strong>: Regras específicas para motoristas empregados</li>
  </ul>
  <p>Embora não esteja vinculado a uma NR específica, sua inclusão no PCMSO é prevista. O resultado <strong>não deve constar no ASO</strong>.</p>
</section>

<section class="impact-section">
  <h2>Impactos do Exame</h2>
  <h3>Profissional</h3>
  <ul>
    <li>Resultado positivo implica suspensão do direito de dirigir por 3 meses</li>
    <li>Para retomar, deve apresentar novo exame negativo</li>
  </ul>
  <h3>Trabalhista e Previdenciário</h3>
  <ul>
    <li>Empregado deve ser afastado</li>
    <li>Empresa deve realizar avaliação clínica</li>
    <li>Se houver dependência química: CAT, INSS e reavaliação do PGR</li>
    <li><strong>Confidencialidade e direito à contraprova são garantidos</strong></li>
  </ul>
</section>

<section class="codigo-section">
  <h2>Código Sequencial no eSocial</h2>
  <p>O laudo possui 17 caracteres. Para o eSocial, só os 11 finais são usados. Exemplo:</p>
  <div class="code-example">
    <p>Laudo: AAAAAAAA123456789</p>
    <p>eSocial: AA123456789</p>
  </div>
</section>

<section class="positive-result">
  <h2>Condutas em Caso de Resultado Positivo</h2>
  <ul>
    <li>Avaliação clínica</li>
    <li>CAT (se houver suspeita ocupacional)</li>
    <li>Afastamento</li>
    <li>Encaminhamento ao INSS</li>
    <li>Revalidação de riscos e medidas preventivas</li>
  </ul>
</section>

<section class="ecac-section">
  <h2>Importante para o Suporte: Acesso ao e-CAC</h2>
  <p>É obrigatória a permissão específica na procuração eletrônica no portal e-CAC para envio do evento S-2221.</p>
  <p>Sem essa permissão, mesmo com o sistema configurado corretamente, a transmissão não será autorizada.</p>
</section>

<section class="sistema-section">
  <h2>No Sistema - Parametrização</h2>
  <p>O exame toxicológico é identificado pelo <strong>ID 17</strong>. Para que ele seja transmitido corretamente:</p>
  <ul>
    <li>Campo "S-2221" marcado como "Sim" no cadastro do funcionário</li>
    <li>Opção "Seleção Randômica" habilitada</li>
  </ul>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_1.png">
  </div>
</section>

<section class="preenchimento-section">
  <h2>Preenchimento do Exame</h2>
  <p>Campos obrigatórios para preenchimento:</p>
  <ul>
    <li>CPF do empregado</li>
    <li>Matrícula</li>
    <li>Data de realização do exame</li>
    <li>CNPJ do laboratório</li>
    <li>Código sequencial</li>
    <li>Nome e CRM do médico</li>
  </ul>
  <p>O campo "Exibir no ASO" deve estar desmarcado.</p>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_2.png">
  </div>
</section>

<section class="geracao-section">
  <h2>Geração e Transmissão do Evento</h2>
  <p>Após finalizar o atendimento, o evento S-2221 é gerado automaticamente, desde que todos os parâmetros estejam configurados corretamente.</p>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_3.png">
  </div>
</section>

<style>
  .welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
  .concept-card, .details-section, .data-required, .impact-section, .codigo-section, .positive-result, .ecac-section, .sistema-section, .preenchimento-section, .geracao-section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin: 15px 0; }
  .image-placeholder {
  /* Remove o padding, background e a borda tracejada que criam o espaço cinza */
  background: none;
  padding: 0;
  text-align: center;
  margin: 30px 0;
  border: none;
  border-radius: 0;
}

.image-placeholder img {
  /* Garante que a imagem preencha 100% da largura do contêiner */
  width: 90%;
  height: auto; /* Mantém a proporção da imagem */
  display: block;
}
  .code-example { background: #f5f5f5; padding: 15px; border-radius: 5px; font-family: monospace; margin: 15px 0; }
</style>
`},{id:"evento-s2240-condicoes-ambientais",title:"Evento S-2240: Condições Ambientais do Trabalho no eSocial",description:"Entenda como funciona o evento S-2240, sua base legal, prazos, impacto na aposentadoria e obrigatoriedade de envio, mesmo na ausência de riscos.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos","Introdução","S-2240"],content:`
  <div class="welcome-banner">
    <h1>Evento S-2240: Condições Ambientais do Trabalho</h1>
    <p>Este guia foi elaborado para integrar novos colaboradores ao universo do eSocial, com foco no evento S-2240, essencial para o histórico previdenciário do trabalhador.</p>
  </div>

  <section class="core-concepts">
    <h2>O que é o Evento S-2240?</h2>
    <div class="concept-card">
      <p>O evento S-2240 registra, de forma eletrônica, as <strong>condições ambientais de trabalho</strong> de cada funcionário e detalha a exposição a <strong>agentes nocivos</strong> (físicos, químicos, biológicos ou mistos).</p>
      <p>É a base para emissão do <strong>Perfil Profissiográfico Previdenciário (PPP)</strong> em meio eletrônico e responde a perguntas como:</p>
      <ul>
        <li>Onde o trabalhador exerce suas funções?</li>
        <li>Quais atividades realiza?</li>
        <li>Está exposto a algum risco que possa gerar direito à aposentadoria especial?</li>
        <li>Há medições? EPIs são fornecidos e eficazes?</li>
      </ul>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Envio Obrigatório (Mesmo sem Riscos)</h2>
    <p>Todo trabalhador regido pela CLT deve ter um evento S-2240 ativo no eSocial.</p>
    <div class="event-grid">
      <div class="event-card">
        <h4>Funcionário exposto a riscos</h4>
        <p>Informar os agentes nocivos conforme a Tabela 24 do eSocial, com base nos documentos ocupacionais da empresa.</p>
      </div>

      <div class="event-card">
        <h4>Funcionário sem exposição</h4>
        <p>Deve-se utilizar o código <strong>09.01.001</strong> – "Ausência de fator de risco", formalizando a avaliação realizada.</p>
      </div>
    </div>
    <p>Esse envio é obrigatório, inclusive para cargos administrativos. Ele comprova que a empresa avaliou o ambiente de trabalho e garante a segurança jurídica da organização.</p>
  </section>

  <section class="nr-overview">
    <h2>Normas Regulamentadoras e Bases Legais</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-01</h3>
        <p>Gerenciamento de Riscos Ocupacionais (PGR)</p>
        <p class="nr-desc">Origem primária das informações transmitidas no S-2240. Apresenta o inventário de riscos e medidas de controle.</p>
      </div>

      <div class="nr-card">
        <h3>NR-09</h3>
        <p>Exposições Ocupacionais</p>
        <p class="nr-desc">Orienta as avaliações qualitativas e quantitativas dos riscos ambientais descritos no evento.</p>
      </div>

      <div class="nr-card">
        <h3>NR-15 / NR-16</h3>
        <p>Insalubridade e Periculosidade</p>
        <p class="nr-desc">Laudos auxiliares para identificação de riscos no S-2240. Não geram diretamente os adicionais, mas são fontes de referência.</p>
      </div>

      <div class="nr-card">
        <h3>Decreto 3.048/99</h3>
        <p>Anexo IV - Previdência</p>
        <p class="nr-desc">Lista oficial de agentes nocivos que geram direito à aposentadoria especial.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impactos Previdenciários e Trabalhistas</h2>
    <div class="document-card">
      <h3 class="document-title">Aposentadoria Especial</h3>
      <div class="document-content">
        <p>O evento S-2240 serve como prova documental de exposição a agentes nocivos. A Previdência usará esse histórico para conceder aposentadoria com tempo reduzido (15, 20 ou 25 anos).</p>
        <h4>Importante:</h4>
        <ul>
          <li>Sem o S-2240, o direito à aposentadoria especial pode ser negado.</li>
          <li>O histórico é construído por envio contínuo de novos eventos, sem necessidade de retificação por mudança de função.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Encargos para a Empresa</h3>
      <div class="document-content">
        <p>Empregadores que declaram exposição a riscos devem recolher uma contribuição adicional (GIIL-RAT), destinada ao financiamento da aposentadoria especial.</p>
        <h4>Consequências:</h4>
        <ul>
          <li>Alíquota de 6%, 9% ou 12% sobre a folha, conforme o risco.</li>
          <li>Empresas que omitem riscos podem ser autuadas e obrigadas a arcar com o passivo.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Segurança Jurídica e Compliance</h3>
      <div class="document-content">
        <p>O correto preenchimento do S-2240 protege tanto o colaborador quanto a empresa. Reduz ações trabalhistas, reforça a credibilidade da gestão e evita prejuízos futuros com passivos ocultos.</p>
        <h4>Boas Práticas:</h4>
        <ul>
          <li>Integrar PGR, LTCAT, PCMSO e S-2240 no sistema</li>
          <li>Validar EPIs e registros de entrega</li>
          <li>Registrar novas condições sempre que houver alterações</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin: 15px 0;
    }

    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }

    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }

    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }

    .document-content {
      padding: 25px;
    }

    .document-content h4 {
      color: #2196F3;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }
  </style>
  `},{id:"eventos-sst-orgaos-publicos",title:"Eventos de SST para Órgãos Públicos: Regras e Obrigatoriedades",description:"Guia completo sobre o envio de eventos de SST para servidores públicos no eSocial, com foco nas categorias 301-314, regimes previdenciários e particularidades legais.",group:"Eventos do eSocial - SST",tags:["eSocial","Eventos"],content:`
<div class="public-sector-guide">
  <h1>Eventos de SST no Âmbito dos Órgãos Públicos</h1>
  <p>Este guia detalha as regras específicas para envio de eventos de Saúde e Segurança no Trabalho (SST) para servidores públicos e funcionários sem vínculo empregatício no sistema eSocial.</p>
</div>

<section class="category-identification">
  <h2>Identificação de Funcionários Públicos</h2>
  <div class="identification-card">
    <p>Funcionários públicos são identificados pelo <strong>Código de Categoria do Trabalhador</strong> na Tabela 01 do eSocial:</p>
    
    <div class="category-table">
      <table>
        <tr>
          <th>Códigos</th>
          <th>Categoria</th>
          <th>Classificação</th>
        </tr>
        <tr>
          <td>301-314</td>
          <td>Todos os códigos neste intervalo</td>
          <td>Funcionário Público</td>
        </tr>
        <tr>
          <td colspan="3">
            <strong>Link oficial:</strong> 
            <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-1.3/tabelas.html#01" target="_blank">
              Tabela 01 - Clique aqui
            </a>
          </td>
        </tr>
      </table>
    </div>
    
    <div class="technical-note">
      <p><strong>Nota Importante:</strong> Estagiários não possuem obrigatoriedade de envio de eventos de SST, conforme destaque do manual do eSocial.</p>
    </div>
  </div>
</section>

<section class="previdenciary-system">
  <h2>Regimes Previdenciários e Impacto nos Eventos</h2>
  <div class="system-card">
    <p>A obrigatoriedade do envio de eventos de SST depende do regime previdenciário do servidor:</p>
    
    <div class="comparison-table">
      <table>
        <tr>
          <th>Tipo de Servidor</th>
          <th>Regime Previdenciário</th>
          <th>Eventos Obrigatórios</th>
          <th>Eventos Dispensados</th>
        </tr>
        <tr>
          <td>Empregado CLT</td>
          <td>RGPS</td>
          <td class="required">Todos (S-2210, S-2220, S-2240)</td>
          <td>Nenhum</td>
        </tr>
        <tr>
          <td>Servidor Estatutário</td>
          <td>RGPS</td>
          <td class="required">S-2210 e S-2240</td>
          <td>S-2220</td>
        </tr>
        <tr>
          <td>Servidor com RPPS instituído</td>
          <td>RGPS</td>
          <td class="required">S-2210 e S-2240</td>
          <td>S-2220</td>
        </tr>
        <tr>
          <td>Servidor Estatutário</td>
          <td>RPPS</td>
          <td>Nenhum</td>
          <td>Todos</td>
        </tr>
      </table>
    </div>
    
    <div class="critical-info">
      <h3>Diretriz Fundamental</h3>
      <p>A obrigatoriedade deve ser avaliada <strong>individualmente</strong> para cada servidor, considerando:</p>
      <ul>
        <li>• Regime jurídico (celetista ou estatutário)</li>
        <li>• Regime previdenciário (RGPS ou RPPS)</li>
      </ul>
    </div>
  </div>
</section>

<section class="obligation-rules">
  <h2>Diretrizes para Envio de Eventos de SST</h2>
  
  <div class="rule-card">
    <h3>1. Empregados CLT (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210, S-2220 e S-2240</p>
      <p><strong>Contexto:</strong> Contratação pela CLT (emprego público)</p>
      <p><strong>Abragência:</strong> Todos os eventos de SST devem ser enviados</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>2. Servidores Estatutários (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210 e S-2240</p>
      <p><strong>Eventos dispensados:</strong> S-2220</p>
      <p><strong>Contexto:</strong> Regime estatutário vinculado ao RGPS</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>3. Servidores com RPPS instituído (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210 e S-2240</p>
      <p><strong>Eventos dispensados:</strong> S-2220</p>
      <p><strong>Contexto:</strong> RPPS instituído mas vinculação ao RGPS</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>4. Servidores Estatutários (RPPS)</h3>
    <div class="rule-content">
      <p><strong>Obrigatoriedade:</strong> Nenhum evento de SST</p>
      <p><strong>Exceção:</strong> Pode ser enviado para cumprimento da Nota Técnica 2/2014/CGNAL/DRPSP/SPPS/MPS</p>
      <p><strong>Contexto:</strong> Regime estatutário vinculado a RPPS</p>
    </div>
  </div>
  
  <div class="legal-exception">
    <h3>Exceção Legal</h3>
    <p>Para servidores vinculados a RPPS, o envio de eventos pode ser realizado para cumprimento do disposto na:</p>
    <div class="legal-reference">
      <p><strong>Nota Técnica 2/2014/CGNAL/DRPSP/SPPS/MPS</strong></p>
      <p>"As informações são obrigatórias só para segurados vinculados ao RGPS, mas é possível a informação relativa a servidores vinculados a RPPS..."</p>
    </div>
  </div>
</section>

<section class="practical-example">
  <h2>Exemplo Prático</h2>
  
  <div class="example-card">
    <h3>Cenário:</h3>
    <p>Órgão público com regime estatutário e RPPS possui:</p>
    
    <div class="employee-grid">
      <div class="employee-card">
        <h4>2 Servidores</h4>
        <p>• Cargos em comissão</p>
        <p>• Sem vínculo efetivo</p>
        <p>• Vinculados ao <strong>RGPS</strong></p>
        <div class="required-action">
          <p>Eventos obrigatórios: S-2210 e S-2240</p>
        </div>
      </div>
      
      <div class="employee-card">
        <h4>Demais Servidores</h4>
        <p>• Vínculo estatutário</p>
        <p>• Vinculados ao <strong>RPPS</strong></p>
        <div class="optional-action">
          <p>Nenhum evento obrigatório</p>
        </div>
      </div>
    </div>
    
    <div class="justification">
      <h4>Fundamentação Técnica:</h4>
      <p>O PPP (Perfil Profissiográfico Previdenciário) e a CAT (Comunicação de Acidente de Trabalho) são obrigações aplicáveis exclusivamente a segurados do RGPS, substituídas pelo eSocial.</p>
    </div>
  </div>
</section>

<section class="implementation-guide">
  <h2>Orientações para Implementação</h2>
  
  <div class="step-by-step">
    <div class="step">
      <h3>Passo 1: Classificação</h3>
      <p>Identificar o código de categoria (301-314) e regime previdenciário de cada servidor</p>
    </div>
    
    <div class="step">
      <h3>Passo 2: Mapeamento</h3>
      <p>Definir quais eventos são obrigatórios conforme tabela de diretrizes</p>
    </div>
    
    <div class="step">
      <h3>Passo 3: Configuração</h3>
      <p>Ajustar o sistema para envio seletivo conforme perfil de cada servidor</p>
    </div>
    
    <div class="step">
      <h3>Passo 4: Validação</h3>
      <p>Testar no ambiente Restrita (Teste) antes do envio à Produção</p>
    </div>
  </div>

<style>
  .public-sector-guide {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #0d47a1;
  }
  
  .identification-card {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .category-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .category-table th, .category-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  
  .category-table th {
    background-color: #bbdefb;
  }
  
  .technical-note {
    background: #ffecb3;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .system-card {
    background: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .comparison-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .comparison-table th, .comparison-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  .comparison-table th {
    background-color: #c8e6c9;
  }
  
  .comparison-table td.required {
    background-color: #c8e6c9;
    font-weight: bold;
  }
  
  .critical-info {
    background: #ffecb3;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .rule-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    border-left: 4px solid #2196F3;
  }
  
  .legal-exception {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
  }
  
  .legal-reference {
    background: #bbdefb;
    padding: 15px;
    border-radius: 4px;
    margin-top: 15px;
    font-style: italic;
  }
  
  .example-card {
    background: #f5f5f5;
    padding: 25px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .employee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .employee-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .required-action {
    background: #c8e6c9;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .optional-action {
    background: #e0e0e0;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .justification {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .step-by-step {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .step {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4caf50;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
</style>
`},{id:"Erro S-2210",title:"Erros no Evento S-2210 - Comunicação de Acidente de Trabalho",description:"Guia completo para solução de problemas no envio do evento S-2210 ao eSocial, com principais erros, fluxos de correção e procedimentos de escalonamento.",group:"Erros",tags:["eSocial","Eventos","Erro","S-2210"],content:`
    <div class="welcome-banner">
      <h1>Resolução de Erros no Evento S-2210</h1>
      <p>Este guia detalha os procedimentos para correção de erros no envio da Comunicação de Acidente de Trabalho (CAT) ao eSocial.</p>
    </div>

    <section class="core-concepts">
      <h2>Descrição do Evento S-2210</h2>
      <div class="concept-card">
        <p>O evento <strong>S-2210</strong> refere-se à Comunicação de Acidente de Trabalho (CAT) e deve ser enviado ao eSocial:</p>
        <ul>
          <li>• Sempre que ocorrer acidente de trabalho com empregado</li>
          <li>• Mesmo quando não houver afastamento</li>
          <li>• Dentro do prazo máximo de 1 dia útil após o acidente</li>
        </ul>
      </div>
    <section class="documents-section">
      <h2>Fluxo Geral de Envio</h2>
      
      <div class="document-card">
        <h3 class="document-title">Etapas do Processo</h3>
        <div class="document-content">
          <ol class="step-list">
            <h3>1. Preenchimento do evento no sistema</h3>
            <h3>2. Validação de dados obrigatórios</h3>
            <h3>3. Geração do XML do evento</h3>
            <h3>4. Envio para o eSocial</h3>
            <h3>5. Retorno do protocolo ou mensagem de erro</h3>
          </ol>
    <section class="esocial-integration">
      <h2>Principais Erros e Soluções</h2>
      
      <div class="document-card">
        <h3 class="document-title">Tabela de Erros Comuns</h3>
        <div class="document-content">
          <table class="error-table">
            <thead>
              <tr>
                <th>Mensagem de Erro</th>
                <th>Causa Provável</th>
                <th>Ação do Suporte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"O cogAgent Causador inválido"</td>
                <td>Campo divergente das tabelas 14 ou 15 do eSocial</td>
                <td>Verificar aba "Acidente" da CAT, campo "Agente Causador"</td>
              </tr>
              <tr>
                <td>"O campo {tpAcid} é obrigatório"</td>
                <td>Campo "Tipo de Acidente" não preenchido</td>
                <td>Solicitar preenchimento do campo obrigatório</td>
              </tr>
              <tr>
                <td>"Data do acidente não correspondente"</td>
                <td>Data posterior à data atual</td>
                <td>Solicitar correção da data do acidente</td>
              </tr>
              <tr>
                <td>"Data do acidente não pode ser posterior a data de envio"</td>
                <td>Data posterior à data de envio do evento</td>
                <td>Solicitar correção da data do acidente</td>
              </tr>
              <tr>
                <td>"matricula ou codCateg: O valor '' é inválido"</td>
                <td>Matrícula do funcionário não informada</td>
                <td>Verificar número da matrícula do funcionário</td>
              </tr>
              <tr>
                <td>"CNPJ do emitente não autorizado"</td>
                <td>Empresa sem vínculo correto com o evento</td>
                <td>Confirmar cadastro da empresa no portal eSocial</td>
              </tr>
            </tbody>
          </table>
          
          <div class="alert-box">
            <h4>Consulta para Erros Diversos:</h4>
            <ol>
              <li>• Identificar o erro no XML (ex: 'tpInsc Inválido')</li>
              <li>Para consultar o documento oficial:
                <ul>
                  <li><strong>Leiautes eSocial - Versão 1.3 - NT 03/2025</strong></li>
                  <li>Disponível em: <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-versao-1-3-nt-03-2025/index.html#evtCAT" target="_blank">https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-versao-1-3-nt-03-2025/index.html#evtCAT</a></li>
                </ul>
              </li>
              <li>Usar <strong>Ctrl + F</strong> para localizar termos específicos</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="nr-overview">
      <h2>Orientação para Atendimento ao Cliente</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Solicitação Inicial</h3>
          <p>Solicitar print ou código do erro</p>
        </div>
        
        <div class="nr-card">
          <h3>Questionamentos</h3>
          <p>• Nome do funcionário e empresa<br>• Escopo do problema</p>
        </div>
        
        <div class="nr-card">
          <h3>Verificação Técnica</h3>
          <p>Validar dados do evento no sistema</p>
        </div>
        
        <div class="nr-card">
          <h3>Campos Críticos</h3>
          <p>• S-2210 ativado<br>• N° Matrícula<br>• CID em maiúsculas</p>
        </div>
      </div>

      <!-- Imagem: Verificação de campos no sistema -->
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_1.png">
        <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_2.png">
      </div>

      <div class="document-card">
        <h3 class="document-title">Verificação do Agente Causador</h3>
        <div class="document-content">
          <p>Verificar na CAT do Trabalhador se o código corresponde às tabelas 14 ou 15:</p>
          
          <table class="id-table">
            <tr>
              <th>Tabela</th>
              <th>Código Iniciador</th>
              <th>Link</th>
            </tr>
            <tr>
              <td><strong>14</strong></td>
              <td>3</td>
              <td rowspan="2">
                <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/leiautes-esocial-v-1-1-beta/tabelas.html#14" target="_blank">
                  Acessar Tabelas 14/15
                </a>
              </td>
            </tr>
            <tr>
              <td><strong>15</strong></td>
              <td>2</td>
            </tr>
          </table>
          
          <div class="tip-box">
            <h4>Dica Técnica:</h4>
            <p>Quando o agente causador for diretamente o agente presente no ambiente (código iniciado por 3), deve-se utilizar a Tabela 14. Para situações geradoras ou doenças (código iniciado por 2), utiliza-se a Tabela 15. Há ainda o caso em que, tratando-se de uma doença, pode-se utilizar tanto a Tabela 14 quanto a Tabela 15.</p>
          </div>

          <!-- Imagem: Verificação do agente causador -->
          <div class="image-placeholder">
            <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_3.png">
          </div>
        </div>
      </div>
    </section>

    <section class="documents-section">
      <h2>Escalonamento Técnico</h2>
      
      <div class="document-card">
        <h3 class="document-title">Casos para Escalonamento</h3>
        <div class="document-content">
          <ul>
            <li>• Erros de retorno da API sem mensagens claras</li>
            <li>• Falha no envio com XML validado</li>
            <li>• Inconsistência de dados entre sistema e eSocial</li>
          </ul>
          
          <h4>Informações Obrigatórias para Abertura de Chamado:</h4>
          <div class="info-grid">
            <div class="info-item">
              <h5>- Print do Erro</h5>
              <p>- Captura completa da mensagem de erro</p>
            </div>
            <div class="info-item">
              <h5>- Dados da Empresa</h5>
              <p>- Nome e ID da empresa</p>
            </div>
            <div class="info-item">
              <h5>- Dados do Funcionário</h5>
              <p>- Nome e ID do funcionário</p>
            </div>
            <div class="info-item">
              <h5>- Descrição do Ocorrido</h5>
              <p>- Detalhamento completo do problema</p>
            </div>
          </div>
          
          <div class="code-block">
            <h2><strong>Modelo de Detalhamento no w-GSC:</strong></h2>
            <p>Data: 00/00/0000<br>
            Contato: xxxxxx<br>
            Empresa: xxxxxx ID: 000<br>
            Funcionário: xxxxxx ID: 000<br>
            O que ocorreu: [Descrição detalhada]<br>
            Caminho da pasta: W:\\Transfer\\_x\\Exemplo</p>
          </div>
        </div>
      </div>
    </section>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .error-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .error-table th, .error-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .error-table th {
        background-color: #f2f2f2;
      }
      
      .error-table tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      
      .alert-box {
        background: #fff8e1;
        border-left: 4px solid #ff9800;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .step-list {
        padding-left: 20px;
      }
      
      .step-list li {
        margin-bottom: 10px;
        line-height: 1.6;
      }
      
      .id-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .id-table th, .id-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: center;
      }
      
      .id-table th {
        background-color: #f2f2f2;
      }
      
      .tip-box {
        background: #e8f5e9;
        border-left: 4px solid #4CAF50;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      
      .info-item {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 8px;
      }
      
      .code-block {
        background: #f8f8f8;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin: 15px 0;
        font-family: monospace;
      }
      
      a {
        color: #2196F3;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
    </style>
  `},{id:"resolucao-erros-s2240",title:"Resolução de Erros no Evento S-2240 do eSocial",description:"Guia completo para diagnóstico e correção de falhas no envio do evento S-2240, com foco em configurações de empresa, funcionário e preenchimento de campos obrigatórios.",group:"Erros",tags:["eSocial","Eventos","Erro","S-2240"],content:`
<div class="error-resolution-guide">
  <h1>Erros no Envio do Evento S-2240</h1>
  <p>Este guia detalha os pontos críticos para resolver inconsistências no envio do evento S-2240 referente às Condições do Ambiente de Trabalho, conforme documentação técnica.</p>
  <div class="error-summary">
    <p><strong>Erro principal:</strong> Informações obrigatórias não preenchidas corretamente ou em desacordo com requisitos do eSocial</p>
    <p><strong>Causas comuns:</strong> Dados inconsistentes, campos obrigatórios em branco, preenchimento incorreto</p>
  </div>
</div>

<section class="diagnostic-section">
  <h2>Perguntas para Diagnóstico</h2>
  <div class="diagnostic-card">
    <p>Responda estas perguntas para identificar o cenário do erro:</p>
    <ul>
      <li>• <strong>Funcionário relacionado:</strong> Identificar qual colaborador está associado ao evento com erro</li>
      <li>• <strong>Empresa vinculada:</strong> Verificar a qual organização pertence o funcionário</li>
      <li>• <strong>Escopo do erro:</strong> Ocorre apenas com este funcionário ou afeta múltiplos colaboradores?</li>
      <li>• <strong>Abrangência empresarial:</strong> O erro acontece apenas nesta empresa ou em várias organizações?</li>
      <li>• <strong>Universalidade:</strong> Acontece com envios de todas as empresas diferentes?</li>
    </ul>
    <div class="technical-note">
      <p><strong>Nota Técnica:</strong> Estas perguntas permitem identificar se o erro é pontual (dados específicos) ou sistêmico (configuração geral)</p>
    </div>
  </div>
</section>

<section class="company-config">
  <h2>Configurações na Empresa (Verificação Obrigatória)</h2>
  <div class="config-grid">
    <div class="config-card critical">
      <h3>Habilitado</h3>
      <p>• Deve estar marcado como <strong class="required">SIM</strong> para envio ao eSocial</p>
      <p>• Se configurado como "Não", os eventos <strong>não serão transmitidos</strong></p>
    </div>
    
    <div class="config-card">
      <h3>Ambiente</h3>
      <p>• <strong>Produção:</strong> Envio oficial ao ambiente do governo</p>
      <p>• <strong>Restrita (Teste):</strong> Ambiente de validação pré-produção (sem efeitos legais)</p>
      <div class="warning">
        <p>Configuração incorreta gera envios para ambiente errado</p>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Método de Transmissão</h3>
      <p>• <strong>Manual:</strong> Envio direto pela empresa (controle total)</p>
      <p>• <strong>Automático A1:</strong> Uso de certificado digital para automação</p>
    </div>
    
    <div class="config-card">
      <h3>Responsabilidade</h3>
      <p>• <strong>Prestador SST:</strong> Clínica/Parceiro responsável pelo envio</p>
      <p>• <strong>Empregador:</strong> Cliente final assume responsabilidade</p>
      <p>• <strong>Contador:</strong> Empresa contábil responsável (método manual)</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_1.png">
  </div>
</section>

<section class="employee-config">
  <h2>Configurações no Funcionário (Campos Críticos)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>TSVE sem Matrícula</h3>
      <p>• Obrigatório para categorias profissionais sem matrícula</p>
      <p>• Requer preenchimento do <strong>Código de Categoria do Trabalhador</strong></p>
    </div>
    
    <div class="config-card critical">
      <h3>S-2240 Habilitado</h3>
      <p>• Deve estar explicitamente marcado como <strong class="required">SIM</strong></p>
      <p>• Configuração como "Não" impede o envio do evento</p>
    </div>
    
    <div class="config-card critical">
      <h3>Registro de Admissão</h3>
      <p>• <strong>Obrigatório</strong> para processamento correto</p>
      <p>• Ausência gera erro de vínculo empregatício</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_2.png">
  </div>
  
  <div class="sub-section">
    <h3>Admissão do Funcionário</h3>
    <div class="config-card critical">
      <h4>Número de Matrícula</h4>
      <p>• Campo obrigatório transmitido ao eSocial</p>
      <p>• Deve corresponder ao registro oficial do governo</p>
    </div>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_3.png">
    </div>
  </div>
  
  <div class="sub-section">
    <h3>Ocupações Sede</h3>
    <div class="config-card critical">
      <h4>Data Início</h4>
      <p>• Data de início de ocupação enviada ao eSocial</p>
      <p>• <strong>Deve corresponder exatamente</strong> ao registro no eSocial</p>
      <div class="warning">
        <p>Divergência causa erro de RET ou falta de vínculo</p>
      </div>
    </div>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_4.png">
    </div>
  </div>
</section>

<section class="ppp-config">
  <h2>Lotações PPP (Preenchimento Obrigatório)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>Código CBO</h3>
      <p>• Classificação ocupacional conforme tabela oficial</p>
      <p>• Consultar: <a href="http://www.mtecbo.gov.br/cbosite/pages/pesquisas/BuscaPorCodigo.jsf" target="_blank">MTE CBO</a></p>
      <p>• Atualização constante requer verificação periódica</p>
    </div>
    
    <div class="config-card">
      <h3>Código GFIP</h3>
      <p>• Informa exposição a agentes nocivos</p>
      <p>• Especifica tempo de exposição quando aplicável</p>
    </div>
    
    <div class="config-card critical">
      <h3>EPI/EPC</h3>
      <p>• <strong>Número do CA</strong> deve corresponder ao lote do produto</p>
      <p>• Inconsistências podem gerar multas</p>
      <p>• Dados de cadastro devem refletir situação real</p>
    </div>
    
    <div class="config-card critical">
      <h3>Responsáveis Técnicos</h3>
      <p>• Cadastro completo obrigatório</p>
      <p>• Informações incorretas impedem envio do evento</p>
      <p>• Deve conter: Nome completo, registro profissional, especialidade</p>
    </div>
  </div>
  
  <div class="additional-fields">
    <h4>Outros Campos Relevantes:</h4>
    <ul>
      <li>• <strong>Observações Ambientais:</strong> Transmitidas integralmente ao eSocial</li>
      <li>• <strong>Descrição de Atividade:</strong> Detalhamento das funções exercidas</li>
      <li>• <strong>Registro eSocial:</strong> Histórico de envios e erros ocorridos</li>
    </ul>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_5.png">
  </div>
</section>

<section class="risk-factors">
  <h2>Exposição a Fatores de Risco (Campo Crítico)</h2>
  <div class="critical-card">
    <h3>Preenchimento Obrigatório</h3>
    <p>• Mesmo sem exposição, selecionar: <strong class="required">Ausência de fatores de risco</strong></p>
    <p>• Campo vazio gera erro de "Informações insuficientes para gerar XML"</p>
    
    <div class="config-grid">
      <div class="config-card">
        <h4>Código do Agente Nocivo</h4>
        <p>• Obrigatório quando há direito à aposentadoria especial</p>
        <p>• Consultar Tabela 24: <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/leiautes-esocial-v-1-1-beta/tabelas.html#24" target="_blank">Agentes Nocivos - eSocial</a></p>
      </div>
      
      <div class="config-card critical">
        <h4>Número do CA</h4>
        <p>• Identificação única do EPI</p>
        <p>• Deve corresponder ao registro no Ministério do Trabalho</p>
        <p>• Essencial para rastreabilidade e validade</p>
      </div>
    </div>
    
    <div class="technical-note">
      <p><strong>Consequências de Inconsistência:</strong> Diferença entre número do CA cadastrado e utilizado na empresa pode gerar multas e penalidades</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_6.png">
  </div>
</section>

<section class="recurrent-errors">
  <h2>Ocorrências Recorrentes e Soluções</h2>
  
  <div class="error-card critical">
    <h3>Data de Ocupação ≠ Data de Admissão</h3>
    <p>• <strong>Erro resultante:</strong> RET ou falta de vínculo</p>
    <p>• <strong>Mensagem do sistema:</strong> "Dentro da data enviada, não havia cadastro do funcionário"</p>
    <p>• <strong>Solução:</strong> Uniformizar datas entre sistema e eSocial</p>
  </div>
  
  <div class="error-card critical">
    <h3>Ausência de Risco Cadastrado</h3>
    <p>• <strong>Erro resultante:</strong> Erro de Preenchimento (S-2240)</p>
    <p>• <strong>Requisito absoluto:</strong> Cadastro de risco obrigatório, mesmo que seja "Ausência de agente nocivo"</p>
    <p>• <strong>Solução:</strong> Preencher campo de exposição a riscos em todos os funcionários</p>
  </div>
  
  <div class="error-example">
    <h4>Exemplo de Erro Retornado pelo Sistema:</h4>
    <div class="code-block">
      <p>[Grupo: 1]</p>
      <p>[Campo: dataIni]</p>
      <p>[Valor: 01/01/2023]</p>
      <p>[Motivo: Não existe vínculo ativo para o trabalhador na data de início]</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_7.png">
  </div>
  
  <div class="prevention-tips">
    <h3>Medidas Preventivas</h3>
    <ul>
      <li>• Verificar consistência entre data de admissão e data de ocupação</li>
      <li>• Implementar checklist de campos obrigatórios antes do envio</li>
      <li>• Validar números de CA com fornecedores de EPI</li>
      <li>• Realizar testes no ambiente Restrita antes da produção</li>
    </ul>
  </div>
</section>

<style>
  .error-resolution-guide {
    background: linear-gradient(to right, #ffebee, #ffcdd2);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #d32f2f;
  }
  
  .error-summary {
    background: #ffffff90;
    padding: 15px;
    border-radius: 6px;
    margin-top: 20px;
    text-align: left;
  }
  
  .diagnostic-card, .critical-card {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #ffa000;
    margin: 20px 0;
  }
  
  .technical-note {
    background: #ffecb3;
    padding: 12px;
    border-radius: 4px;
    margin-top: 15px;
    font-style: italic;
  }
  
  .config-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .config-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s;
  }
  
  .config-card:hover {
    transform: translateY(-5px);
  }
  
  .config-card.critical {
    border-left: 4px solid #f44336;
    background: #ffebee;
  }
  
  .critical-card {
    border-left: 4px solid #f44336;
  }
  
  .required {
    color: #d32f2f;
    font-weight: bold;
  }
  
  .error-card {
    background: #ffebee;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #f44336;
    margin: 15px 0;
  }
  
  .error-card.critical {
    background: #ffcdd2;
  }
  
  .sub-section {
    margin: 30px 0;
    padding-left: 20px;
    border-left: 3px solid #bdbdbd;
  }
  
  .warning {
    background: #fff8e1;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 0.9em;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .additional-fields {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 6px;
    margin: 20px 0;
  }
  
  .error-example {
    margin: 25px 0;
  }
  
  .code-block {
    background: #5f5c5c79;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 4px;
    font-family: monospace;
    overflow-x: auto;
  }
  
  .prevention-tips {
    background: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin-top: 25px;
  }
</style>
`},{id:"funcionarios-declarantes-esocial",title:"Funcionários e Declarantes no eSocial - Regras de Identificação",description:"Guia completo sobre identificação de funcionários (CPF/matrícula) e declarantes (CNPJ/CPF) no contexto do eSocial, com regras específicas para casos especiais.",group:"eSocial",tags:["eSocial","Introdução"],content:`
    <div class="welcome-banner">
      <h1>Identificação no eSocial</h1>
      <p>Este guia explica as regras de identificação de funcionários e declarantes para integração com o eSocial.</p>
    </div>

    <section class="core-concepts">
      <h2>Funcionários</h2>
      <div class="concept-card">
        <p>No eSocial, os funcionários têm como <strong>identificador obrigatório o CPF</strong>, com as seguintes regras:</p>
        
        <div class="highlight-box">
          <h4>Regras Chave:</h4>
          <ul>
            <li>• Um CPF pode ter múltiplos vínculos com o mesmo declarante</li>
            <li>• Cada vínculo é identificado por um número de matrícula único</li>
            <li>• A matrícula é obrigatória para eventos de SST</li>
          </ul>
        </div>
      <div class="document-card">
        <h3 class="document-title">Casos Especiais - TSVE (Trabalhador Sem Vínculo)</h3>
        <div class="document-content">
          <p>Quando a matrícula não foi informada no evento S-2300:</p>
          
          <div class="alert-box">
            <h4>Procedimento Obrigatório:</h4>
            <ol>
              <li>Acessar <strong>Funcionários » Aba Dados Pessoais</strong></li>
              <li>Habilitar a opção <strong>"TSVE sem Matrícula"</strong></li>
              <li>Selecionar o código da <strong>Categoria do Trabalhador</strong> (Tabela 01 do eSocial)</li>
            </ol>
          </div>
          
          <h4>Regras de Matrícula:</h4>
          <ul>
            <li>- Deve corresponder à matrícula informada nos eventos S-2190, S-2200 ou S-2300</li>
            <li>- Transferências entre departamentos <strong>não alteram</strong> a matrícula</li>
            <li>- Readmissão gera <strong>nova matrícula</strong> (novo vínculo)</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Gerenciamento de Matrículas no Sigo®</h3>
        <div class="document-content">
          <p>A matrícula é informada em:</p>
          <p><strong>Funcionários » Aba Registros de Admissões</strong></p>
          
          <h4>Fluxo para Admissão/Readmissão:</h4>
          <ol>
            <li>• Criar registro de admissão</li>
            <li>• Preencher número de matrícula</li>
            <li>• Ativar vínculo do trabalhador</li>
          </ol>
    <section class="esocial-integration">
      <h2>Declarantes</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Pessoa Jurídica</h3>
          <p>Identificada apenas pelo <strong>CNPJ</strong></p>
          <p class="nr-desc">No XML: {nrInsc} = CNPJ-Raiz (8 posições)</p>
        </div>
        
        <div class="nr-card">
          <h3>Pessoa Física</h3>
          <p>Identificada apenas pelo <strong>CPF</strong></p>
          <p class="nr-desc">Utilizar <strong>CAEPF</strong> como estabelecimento</p>
        </div>
        
        <div class="nr-card">
          <h3>Administração Pública</h3>
          <p>Identificada pelo <strong>CNPJ completo (14 posições)</strong></p>
          <p class="nr-desc">Exige parametrização especial</p>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Regras Específicas para Declarantes</h3>
        <div class="document-content">
          <table class="rules-table">
            <tr>
              <th>Tipo</th>
              <th>Identificador</th>
              <th>Casos Aplicáveis</th>
            </tr>
            <tr>
              <td><strong>Pessoa Física com Atividade Econômica</strong></td>
              <td>CAEPF (antigo CEI)</td>
              <td>
                <ul>
                  <li>Contribuinte individual (408-1)</li>
                  <li>Produtor rural (412-0)</li>
                  <li>Segurado especial (402-2)</li>
                  <li>Encarregado de consórcios rurais (228-3)</li>
                  <li>Titular de cartório (303-4)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Obras de Construção Civil</strong></td>
              <td>CNO</td>
              <td>Vinculado a CNPJ ou CPF</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Configuração para Administração Pública</h3>
        <div class="document-content">
          <div class="warning-box">
            <h4>Parametrização Obrigatória:</h4>
            <p>Para clientes com natureza jurídica de Administração Pública Federal:</p>
            <ol>
              <li>Acessar <strong>Clientes - Empresas » Aba Geral</strong></li>
              <li>Habilitar <strong>"Natureza Jurídica de Adm Pública"</strong></li>
            </ol>
          </div>
          
          <p>Esta configuração garante que o campo <strong>{nrInsc}</strong> no XML seja preenchido com o CNPJ completo (14 posições).</p>
        
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .nr-desc {
        font-size: 0.9em;
        color: #555;
        margin-top: 10px;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .highlight-box {
        background: #e8f5e9;
        border-left: 4px solid #4CAF50;
        padding: 15px;
        margin: 15px 0;
        border-radius: 4px;
      }
      
      .alert-box {
        background: #fff8e1;
        border-left: 4px solid #FFC107;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .warning-box {
        background: #ffebee;
        border-left: 4px solid #F44336;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .rules-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .rules-table th, .rules-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .rules-table th {
        background-color: #f2f2f2;
      }
      
      .rules-table ul {
        margin: 0;
        padding-left: 20px;
      }
    </style>
  `},{id:"procuracoes-eletronicas-ecac",title:"Procuração Eletrônica no e-CAC",description:"Passo a passo para cadastrar procurações eletrônicas no e-CAC, permitindo que clínicas e contadores transmitam eventos eSocial em nome das empresas.",group:"eSocial",content:`
<div class="header-banner">
  <h1>Procuração Eletrônica para Transmissão eSocial</h1>
  <p>Guia completo para cadastrar autorizações no e-CAC e permitir que terceiros transmitam eventos como o S-2221</p>
</div>

<section class="intro-section">
  <h2>O Que é a Procuração Eletrônica?</h2>
  <div class="concept-card">
    <p>Documento digital que autoriza clínicas, contadores e outros prestadores a:</p>
    <ul>
      <li>• Transmitir eventos eSocial em nome da empresa</li>
      <li>• Acessar informações restritas no e-CAC</li>
      <li>• Realizar procedimentos fiscais e trabalhistas</li>
    </ul>
    <p><strong>Requisito obrigatório</strong> para transmissão de eventos por terceiros:</p>
  </div>
</section>

<!-- Passo 1 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">1</div>
    <h2>Acesso Inicial</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>• Acesse o <a href="https://cav.receita.fazenda.gov.br" target="_blank">e-CAC</a></li>
      <li>Faça login com:
        <ul>
          <li><strong>Certificado Digital e-CNPJ</strong> da empresa ou conta Gov. br com acesso ao CNPJ</li>
        </ul>
      </li>
      <li><strong>Critério essencial:</strong> Login deve ser feito em nome da pessoa jurídica outorgante</li>
    </ol>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_1.png">
    </div>
  </div>
</section>

<!-- Passo 2 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">2</div>
    <h2>Localizando o Serviço</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>Na barra de pesquisa, digite "procuração"</li>
      <li>Selecione: <strong>"CADASTRO, CONSULTA E CANCELAMENTO - PROCURAÇÃO PARA E-CAC"</strong></li>
      <li>Recomendações:
        <ul>
          <li>Consulte procurações ativas</li>
          <li>Cancele autorizações obsoletas</li>
        </ul>
      </li>
    </ol>
    
  
  
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_2.png">
    </div>
  </div>
</section>

<!-- Passo 3 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">3</div>
    <h2>Preenchendo Dados</h2>
  </div>
  
  <div class="step-content">
    <div class="form-section">
      <h3>Dados do Outorgante</h3>
      <ul>
        <li>• Preenchimento <strong>automático</strong> pelo sistema</li>
        <li>• Informações da empresa logada</li>
      </ul>
    </div>
    
    <div class="form-section">
      <h3>Dados do Procurador</h3>
      <ul>
        <li>• Informe CNPJ ou CPF do prestador (clínica/contador)</li>
        <li>• Dados complementares serão carregados automaticamente</li>
      </ul>
    </div>
    
    <div class="form-section">
      <h3>Configurações Adicionais</h3>
      <ol>
        <li>• Selecione o tipo de documento</li>
        <li>• Defina período de vigência (sugere-se alinhar ao contrato de serviços)</li>
      </ol>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_3.png">
    </div>
  </div>
</section>

<!-- Passo 4 -->
<section class="step-section critical-section">
  <div class="step-header">
    <div class="step-number">4</div>
    <h2>Definindo Permissões</h2>
  </div>
  
  <div class="step-content">
    <p>Na seção <strong>"Opções de Atendimento Permitidas para o Delegante"</strong>:</p>
    
    <div class="permissions-grid">
      <div class="permission-card required">
        <h3>Permissão Essencial</h3>
        <ul>
          <li>
            <label>
    
              eSocial - Toxicológico
            </label>
          </li>
          <li><em>(Obrigatório para transmissão S-2221)</em></li>
        </ul>
      </div>
      
      <div class="permission-card recommended">
        <h3>Permissões Recomendadas</h3>
        <ul>
          <li>
            <label>
           
              eSocial - Grupo SST
            </label>
          </li>
          <li>
            <label>
            
              eSocial - Download
            </label>
          </li>
        </ul>
        <p><em>(Para transmissão completa de eventos SST)</em></p>
      </div>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_4.png">
    </div>
  </div>
</section>

<!-- Passo 5 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">5</div>
    <h2>Finalização do Cadastro</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>Role até o final da página > </li>
      <li>Defina opção de substabelecimento:
        <ul>
          <li><strong>Permitir:</strong> Procurador pode delegar poderes</li>
          <li><strong>Não permitir:</strong> Acesso exclusivo ao procurador original</li>
        </ul>
      </li>
      <li>Resolva o <strong>Captcha</strong> de segurança.</li>
      
    
    <div class="legal-note">
      <h3>Validação Legal</h3>
      <p>Após cadastro, o prestador torna-se <strong>procurador legal</strong> da empresa para:</p>
      <ul>
        <li>• Transmissão de eventos S-2221 (Exame Toxicológico)</li>
        <li>• Envio de demais eventos SST quando autorizado</li>
        <li>• Consulta a informações restritas no e-CAC</li>
      </ul>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_5.png">
    </div>
  </div>
</section>

<section class="conclusion-section">
  <div class="benefits-card">
    <h2>Vantagens da Procuração Eletrônica</h2>
    <ul>
      <li>• Transmissão automática de eventos pelo SIGO</li>
      <li>• Redução de trâmites burocráticos</li>
      <li>• Segurança jurídica nas transmissões</li>
      <li>• Centralização das autorizações</li>
    </ul>
  </div>
  
  <div class="warning-box">
    <h3>Importante</h3>
    <p>Sem procuração ativa no e-CAC, <strong>é impossível</strong> transmitir eventos eSocial em nome de terceiros</p>
  </div>
</section>

<style>
  .header-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 25px;
  }
  
  .step-section {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  }
  
  .critical-section {
    border-top: 3px solid #f44336;
  }
  
  .step-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .step-number {
    background: #2196F3;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 15px;
  }
  
  .action-box {
    background: #e8f5e9;
    padding: 15px;
    border-radius: 4px;
    margin: 15px 0;
    text-align: center;
  }
  
  .virtual-button {
    background: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    cursor: default;
  }
  
  .form-section {
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #ddd;
  }
  
  .permissions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .permission-card {
    padding: 20px;
    border-radius: 8px;
  }
  
  .permission-card.required {
    background: #ffebee;
    border-left: 4px solid #f44336;
  }
  
  .permission-card.recommended {
    background: #fff8e1;
    border-left: 4px solid #ff9800;
  }
  
  .permission-card h3 {
    margin-top: 0;
  }
  
  .permission-card ul {
    list-style: none;
    padding: 0;
  }
  
  .permission-card li {
    margin: 12px 0;
  }
  
  .permission-card input {
    margin-right: 10px;
  }
  
  .legal-note {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .benefits-card {
    background: #e8f5e9;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 25px;
  }
  
  .warning-box {
    background: #ffebee;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #f44336;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 40px;
    text-align: center;
    margin: 25px 0;
    border: 2px dashed #bdbdbd;
    border-radius: 4px;
    color: #757575;
  }
</style>
`},{id:"parametrizacao-transmissao-eventos-sst-esocial",title:"Parametrização para Transmissão de Eventos de SST no eSocial",description:"Guia completo sobre os procedimentos para testes e parametrização de eventos de Saúde e Segurança no Trabalho (SST) no ambiente do eSocial, incluindo configurações no sistema Sigo®.",group:"Eventos do eSocial - SST",content:`
    <div class="welcome-banner">
      <h1>Parametrização para Transmissão de Eventos de SST no eSocial</h1>
      <p>Este guia detalha os passos necessários para realizar testes e configurar a transmissão de eventos de Saúde e Segurança no Trabalho (SST) no ambiente do eSocial, utilizando o sistema Sigo®.</p>
    </div>

    <section class="core-concepts">
      <h2>Ambientes do eSocial</h2>
      <div class="concept-card">
        <p>O eSocial possui dois ambientes distintos:</p>
        <ul>
          <li><strong>Produção:</strong> Ambiente oficial para processamento e apuração das informações do declarante, gerando efeitos jurídicos.</li>
          <li><strong>Produção Restrita:</strong> Ambiente de testes, onde as informações não produzem efeitos jurídicos.</li>
        </ul>
      </div>
    <section class="configuration-section">
      <h2>Configurações no Sistema Sigo®</h2>
      <div class="document-card">
        <h3 class="document-title">Teste Realizado pelo RH/Folha de Pagamento do Cliente</h3>
        <div class="document-content">
          <p>Se o teste for realizado pelo RH/Folha de Pagamento do cliente, o Prestador de SST deve configurar o sistema Sigo® conforme abaixo:</p>
          <h4>Parâmetros no Sigo®:</h4>
          <div class="step-by-step">
            <div class="step">
              <h5>1. Acessar Clientes - Empresas » Aba eSocial Parâmetros eSocial</h5>
              <ul>
                <li><strong>eSocial – Habilitado:</strong> Definir como “Sim”.</li>
                <li><strong>Grupo de Declarantes Obrigados ao eSocial:</strong> Selecionar o grupo correspondente ao cliente.</li>
                <li><strong>Identificação do Ambiente:</strong> Selecionar “2 - Produção Restrita” durante os testes.</li>
                <li><strong>Método de Geração e Transmissão:</strong> Selecionar “Mensageria Manual”.</li>
              </ul>
            </div>
            <div class="step">
              <h5>2. Dados do Transmissor</h5>
              <ul>
                <li><strong>Transmissor:</strong> Selecionar “Empregador – Empresa”.</li>
              </ul>
            </div>
          </div>
          <h4>Próximos Passos:</h4>
          <ul>
            <li>Disponibilizar o <strong>Módulo Mensageria Manual</strong> e o <strong>Módulo Cliente</strong> no computador do responsável pela transmissão, com login de acesso.</li>
            <li>Capacitar o usuário sobre o uso dos módulos, especialmente o menu <strong>eSocial » Painel de Pendências</strong>.</li>
            <li>Utilizar um <strong>Certificado Digital A1 ou A3</strong> para assinatura dos eventos de SST (arquivos XML).</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Teste Realizado pelo Prestador de SST</h3>
        <div class="document-content">
          <p>Se o teste for realizado pelo Prestador de SST, é necessário obter uma <strong>Procuração Eletrônica</strong> do cliente para assinar e enviar os eventos de SST em seu nome.</p>
          <h4>Parâmetros no Sigo®:</h4>
          <div class="step-by-step">
            <div class="step">
              <h5>1. Configurações do Sigo® » Empresas – Unidades » Aba eSocial Certificado</h5>
              <ul>
                <li><strong>Tipo de Certificado:</strong> Selecionar “A1”.</li>
                <li><strong>Arquivo *.pfx:</strong> Anexar o arquivo do Certificado Digital A1 do Prestador de SST.</li>
                <li><strong>Senha do Certificado:</strong> Preencher com a senha correspondente.</li>
              </ul>
            </div>
            <div class="step">
              <h5>2. Acessar Clientes - Empresas » Aba eSocial Parâmetros eSocial</h5>
              <ul>
                <li><strong>eSocial – Habilitado:</strong> Definir como “Sim”.</li>
                <li><strong>Grupo de Declarantes Obrigados ao eSocial:</strong> Selecionar o grupo correspondente ao cliente.</li>
                <li><strong>Identificação do Ambiente:</strong> Selecionar “2 - Produção Restrita” durante os testes.</li>
                <li><strong>Método de Geração e Transmissão:</strong> Selecionar “Serviço Mensageria (Automático)”.</li>
              </ul>
            </div>
            <div class="step">
              <h5>3. Dados do Transmissor</h5>
              <ul>
                <li><strong>Transmissor:</strong> Selecionar “Prestador de SST - Procurador”.</li>
                <li><strong>Procurador:</strong> Selecionar a unidade do Prestador de SST configurada com o Certificado Digital e a Procuração Eletrônica.</li>
              </ul>
            </div>
          </div>

          </ul>
        </div>
      </div>

  
        <ul>
  
        </ul>
      </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }

      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
        transition: transform 0.2s;
      }
      .concept-card:hover {
        transform: translateY(-5px);
      }

      .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }

      .event-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
        transition: transform 0.2s;
      }
      .event-card:hover {
        transform: translateY(-5px);
      }

      .event-card p {
        margin: 8px 0;
      }

      .event-card p:first-of-type {
        font-weight: bold;
        margin-bottom: 12px;
      }

      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: transform 0.2s;
      }
      .document-card:hover {
        transform: translateY(-5px);
      }

      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }

      .document-content {
        padding: 25px;
      }

      .document-content h4 {
        color: #2196F3;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }

      .warning-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
        transition: transform 0.2s;
      }
      .warning-box:hover {
        transform: translateY(-5px);
      }

      .step-by-step .step {
        background: #e8f5e9;
        padding: 10px 15px;
        margin: 10px 0;
        border-left: 4px solid #4caf50;
        transition: transform 0.2s;
      }
      .step-by-step .step:hover {
        transform: translateY(-5px);
      }

      .note {
        font-style: italic;
        color: #555;
        margin-top: 10px;
      }
    </style>
  `}]},Sr={id:"gerenciamento-de-riscos",title:"Gerenciamento de Riscos",description:"Este módulo aborda aspectos relacionados ao PGR, PCMSO, LTCAT, LI, LP e outros documentos ligados à saúde e segurança do trabalho.",icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill="currentColor" fill-rule="evenodd" d="M3.5 13.5v-12H8v2.75C8 5.216 8.784 6 9.75 6h3.375a.76.76 0 0 0 .063-.003A.75.75 0 0 0 14 5.25v-.774a1 1 0 0 0-.282-.695L10.363.305A1 1 0 0 0 9.643 0H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h4.25a.75.75 0 0 0 0-1.5H3.5Zm8.828-9L9.5 1.57v2.68c0 .138.112.25.25.25h2.578ZM10 15.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm3-2a.75.75 0 0 1-.75-.75V11h-1.5a.75.75 0 0 1 0-1.5h1.5V8a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/>
</svg>`,topics:[{id:"introducao-sst-novos-funcionarios",title:"Introdução à Saúde e Segurança no Trabalho",description:"Guia sobre SST, NRs, PGR, PCMSO, LTCAT e outros documentos ocupacionais para integração de novos colaboradores.",group:"Gerenciamento de Riscos",tags:["Introdução"],content:`
  <div class="welcome-banner">
    <h1>Bem-vindo à Área de SST!</h1>
    <p>Este guia foi criado para ajudar você a compreender os principais conceitos de Saúde e Segurança no Trabalho que utilizamos diariamente em nosso sistema.</p>
  </div>

  <section class="core-concepts">
    <h2>O Que é Saúde e Segurança no Trabalho (SST)?</h2>
    <div class="concept-card">
      <p>É um conjunto de <strong>Normas Regulamentadoras (NRs)</strong> estabelecidas pelo Ministério do Trabalho que visam:</p>
      <ul>
        <li>Minimizar ou eliminar riscos no ambiente de trabalho</li>
        <li>Reduzir custos com acidentes e afastamentos</li>
        <li>Promover saúde e qualidade de vida aos colaboradores</li>
        <li>Cumprir exigências legais e previdenciárias</li>
      </ul>
    </div>

  <section class="nr-overview">
    <h2>Principais Normas Regulamentadoras (NRs)</h2>
    
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-1</h3>
        <p>Disposições Gerais e Gerenciamento de Riscos Ocupacionais (PGR)</p>
        <p class="nr-desc">Estabelece os requisitos básicos para a implementação do PGR em todas as empresas.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-5</h3>
        <p>Comissão Interna de Prevenção de Acidentes (CIPA)</p>
        <p class="nr-desc">Regulamenta a formação e atuação da CIPA nas empresas.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-7</h3>
        <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
        <p class="nr-desc">Define os exames médicos obrigatórios e seu período de realização.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-15</h3>
        <p>Atividades e Operações Insalubres (LI - Laudo de Insalubridade)</p>
        <p class="nr-desc">Lista as atividades que conferem direito ao adicional de insalubridade.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-16</h3>
        <p>Atividades e Operações Perigosas (LP - Laudo de Periculosidade)</p>
        <p class="nr-desc">Regulamenta o adicional de periculosidade para atividades de risco.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-17</h3>
        <p>Ergonomia</p>
        <p class="nr-desc">Estabelece parâmetros para adaptação do trabalho às características do trabalhador.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-35</h3>
        <p>Trabalho em Altura</p>
        <p class="nr-desc">Define os requisitos para trabalho em altura acima de 2 metros.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Documentos Ocupacionais no Sistema Sigo</h2>
    
    <div class="document-card">
      <h3 class="document-title">PGR (NR-1) - Programa de Gerenciamento de Riscos</h3>
      <div class="document-content">
        <p>Documento técnico obrigatório para todas as empresas, conforme estabelecido pela NR-1.</p>
        
        <h4>Características Técnicas:</h4>
        <ul>
          <li><strong>Periodicidade:</strong> Anual, com revisões sempre que houver mudanças nos processos</li>
          <li><strong>Responsável Técnico:</strong> Engenheiro de Segurança do Trabalho ou Técnico em Segurança do Trabalho</li>
          <li><strong>Conteúdo Mínimo:</strong> Identificação de riscos, medidas de controle, cronograma de ações</li>
          <li><strong>Validade:</strong> 1 ano, podendo ser prorrogado por igual período se não houver alterações significativas</li>
        </ul>
        
        <h4>Fluxo no Sistema:</h4>
        <ol>
          <li>Cadastro inicial de setores e funções</li>
          <li>Identificação automática de riscos associados</li>
          <li>Plano de ação com prazos e responsáveis</li>
          <li>Assinatura digital do responsável técnico</li>
        </ol>
      
    <div class="document-card">
      <h3 class="document-title">PCMSO (NR-7) - Programa de Controle Médico de Saúde Ocupacional</h3>
      <div class="document-content">
        <p>Programa médico obrigatório que acompanha a saúde dos trabalhadores durante todo o vínculo empregatício.</p>
        
        <h4>Detalhes Importantes:</h4>
        <ul>
          <li><strong>Exames Obrigatórios:</strong> Admissional, periódico, de retorno ao trabalho, de mudança de função e demissional</li>
          <li><strong>Periodicidade:</strong> Varia conforme o risco (6 meses para alto risco, 12 meses para demais casos)</li>
          <li><strong>Documento Gerado:</strong> ASO (Atestado de Saúde Ocupacional) para cada exame realizado</li>
          <li><strong>Armazenamento:</strong> Os resultados devem ser mantidos por no mínimo 20 anos</li>
        </ul>
        
        <h4>Dados no Sistema:</h4>
        <p>Todos os exames são registrados no sistema com data, tipo, resultado e restrições identificadas.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</h3>
      <div class="document-content">
        <p>Documento técnico exigido pelo INSS para comprovação de exposição a agentes nocivos.</p>
        
        <h4>Informações Relevantes:</h4>
        <ul>
          <li><strong>Finalidade Principal:</strong> Base para concessão de aposentadoria especial</li>
          <li><strong>Validade:</strong> 5 anos, podendo ser antecipada em caso de mudanças significativas</li>
          <li><strong>Conteúdo:</strong> Descrição detalhada das atividades, agentes nocivos, níveis de exposição e medidas de controle</li>
          <li><strong>Vínculo com PGR:</strong> Os dados de exposição são importados automaticamente do PGR</li>
        </ul>
        
        <h4>Diferencial:</h4>
        <p>Enquanto o Laudo de Insalubridade (NR-15) foca nos adicionais, o LTCAT tem caráter previdenciário.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LI/NR-15 - Laudo de Insalubridade</h3>
      <div class="document-content">
        <p>Documento que comprova a exposição do trabalhador a agentes insalubres conforme limites estabelecidos na NR-15.</p>
        
        <h4>Detalhamento:</h4>
        <ul>
          <li><strong>Graus de Insalubridade:</strong> Máximo (40%), Médio (20%) e Mínimo (10%) do salário mínimo</li>
          <li><strong>Agentes Avaliados:</strong> Ruído, calor, radiações, produtos químicos, entre outros</li>
          <li><strong>Metodologia:</strong> Requer medições ambientais com equipamentos específicos</li>
          <li><strong>Validade:</strong> Indeterminada, mas deve ser refeito quando houver alterações nas condições</li>
        </ul>
        
        <h4>Processo no Sistema:</h4>
        <p>Após cadastro dos dados de monitoramento, o sistema calcula automaticamente o grau de insalubridade.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LP/NR-16 - Laudo de Periculosidade</h3>
      <div class="document-content">
        <p>Documento técnico que atesta condições de risco iminente conforme definido na NR-16.</p>
        
        <h4>Especificações:</h4>
        <ul>
          <li><strong>Adicional:</strong> 30% sobre o salário base (não incide sobre outros adicionais)</li>
          <li><strong>Atividades Enquadradas:</strong> Explosivos, energia elétrica, inflamáveis, segurança patrimonial armada</li>
          <li><strong>Característica:</strong> Não requer medição quantitativa, apenas qualificação da atividade</li>
          <li><strong>Validade:</strong> Enquanto persistirem as condições de periculosidade</li>
        </ul>
        
        <h4>Integração:</h4>
        <p>O sistema gera alertas quando um trabalhador é alocado em função com periculosidade.</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Integração com o eSocial</h2>
    <p>O sistema envia automaticamente os seguintes eventos para o eSocial:</p>
    
    <div class="event-grid">
      <div class="event-card">
        <h4>S-2210</h4>
        <p><strong>Comunicação de Acidente de Trabalho</strong></p>
        <p>Deve ser enviado em até 1 dia útil após o acidente. Contém dados do acidentado, tipo de lesão e CID.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2220</h4>
        <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
        <p>Registra todos os exames ocupacionais realizados, vinculados ao PCMSO da empresa.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2221</h4>
        <p><strong>Exame Toxicológico</strong></p>
        <p>Obrigatório para motoristas profissionais (Lei 13.103/2015). Resultados positivos geram bloqueio automático no sistema.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2240</h4>
        <p><strong>Condições do Ambiente de Trabalho</strong></p>
        <p>Comunica os riscos ambientais identificados no PGR e as medidas de controle adotadas.</p>
      </div>
      
      <div class="event-card">
        <h4>S-3000</h4>
        <p><strong>Eventos de Saúde e Segurança</strong></p>
        <p> Utilizado para tornar sem efeito (excluir) um evento que foi enviado incorretamente.</p>
      </div>
    </div>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }
    
    .concept-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin: 15px 0;
    }
    
    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }
    
    .nr-card, .event-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }
    
    .nr-desc {
      font-size: 0.9em;
      color: #555;
      margin-top: 10px;
    }
    
    .document-card {
      background: white;
      padding: 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      overflow: hidden;
    }
    
    .document-title {
      background: #f5f5f5;
      padding: 18px;
      margin: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .document-content {
      padding: 25px;
    }
    
    .document-content h4 {
      color: #2196F3;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    
    .image-placeholder {
      background: #f5f5f5;
      padding: 50px;
      text-align: center;
      margin: 30px 0;
      border: 2px dashed #ccc;
      border-radius: 5px;
    }
    
    .event-card p {
      margin: 8px 0;
    }
    
    .event-card p:first-of-type {
      font-weight: bold;
      margin-bottom: 12px;
    }
  </style>
`},{id:"migracao-gerenciamento-riscos-sigo-w3-para-sigo-web",title:"Migração do Gerenciamento de Riscos: Impactos na Transição do Sigo W3 para o Sigo Web",description:"Guia completo sobre a reestruturação de setores, funções, PCMSO e LTCAT durante a migração entre sistemas, com procedimentos para correção de vínculos e prevenção de erros operacionais.",group:"Gerenciamento de Riscos",tags:["Processos","Introdução","Migração"],content:`
  <h2>Migração do Gerenciamento de Riscos: Impactos na Transição do Sigo W3 para o Sigo Web</h2>
  <p>A transição entre as plataformas exige atenção especial à gestão de setores, funções e seus vínculos com documentos ocupacionais. Este manual técnico detalha as mudanças estruturais e fornece soluções práticas para garantir a continuidade dos processos de saúde e segurança no trabalho.</p>

  <!-- Seção 1 -->
  <h3>1. Protocolos Críticos para Prevenção de Erros</h3>
  <div class="warning-box">
    <h4>Atenção Operacional</h4>
    <ul>
      <li><strong>Preservação de cadastros:</strong> Manter todos os setores e funções existentes no Gerenciamento de Riscos de empresas migradas</li>
      <li><strong>Consolidação prévia:</strong> Verificar ativamente se todos os funcionários estão vinculados a um único setor/função antes de excluir duplicatas</li>
    </ul>
  </div>

  <!-- Seção 2 -->
  <h3>2. Análise Comparativa das Estruturas</h3>
  
  <h4>2.1 Arquitetura no Sigo W3 (Legado)</h4>
  <ul>
    <li><strong>Cadastro isolado:</strong> Cada empresa possuía seu próprio conjunto de setores e funções, mesmo com descrições idênticas</li>
    <li><strong>Identificadores únicos:</strong> IDs independentes para cada combinação empresa-setor-função</li>
  </ul>

  <div class="code-example">
    <p><strong>Exemplo Prático:</strong></p>
    <p>Empresa A: Setor Administrativo (ID: 1) | Função: Auxiliar (ID: 1)</p>
    <p>Empresa B: Setor Administrativo (ID: 2) | Função: Auxiliar (ID: 2)</p>
  </div>

  <!-- Espaço para imagem de fluxo Sigo W3 -->
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_1.png">
  </div>

  <h4>2.2 Modelo no Sigo Web (Nova Versão)</h4>
  <ul>
    <li><strong>Cadastro unificado:</strong> Setores e funções tornaram-se entidades globais</li>
    <li><strong>Seleção contextual:</strong> Associados às empresas durante a elaboração do Gerenciamento de Riscos</li>
  </ul>

  <div class="code-example">
    <p><strong>Exemplo Prático:</strong></p>
    <p>Setor: Administrativo (ID: 1) | Função: Auxiliar (ID: 1)</p>
    <p>Aplicação uniforme em todas as empresas</p>
  </div>

  <!-- Seção 3 -->
  <h3>3. Processo de Migração - Transformação de Dados</h3>
  <p>Durante a conversão dos dados ocorre:</p>
  
  <div class="comparison-table">
    <table>
      <tr>
        <th>Estado Inicial (Pré-Migração)</th>
        <th>Estado Final (Pós-Migração)</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li>Administrativo, ID: 1 – Ativo</li>
            <li>Administrativo, ID: 2 – Ativo</li>
            <li>Administrativo, ID: 3 – Ativo</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Administrativo, ID: 1 – Ativo</li>
            <li>Administrativo, ID: 2 – Inativo</li>
            <li>Administrativo, ID: 3 – Inativo</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>

  <p><strong>Observação técnica:</strong> Os vínculos históricos são preservados mesmo para registros inativados, permitindo a recuperação via ID original quando necessário.</p>

  <!-- Seção 4 -->
  <h3>4. Impactos Operacionais e Soluções</h3>
  
  <h4>4.1 Quebra de Vínculos no PCMSO</h4>
  <div class="alert-box">
    <p><strong>Cenário crítico:</strong> Quando os IDs de setor/função no Registro de Admissão divergem dos IDs no PCMSO migrado, ocorre perda de associação.</p>
    <p><em>Exemplo documentado:</em> Funcionária Luciana teve seu vínculo rompido devido à discrepância entre os sistemas.</p>
  </div>

  <!-- Espaço para imagem de alerta de vínculo quebrado -->
  <div class="image-placeholder">
    <p>[Imagem: Alerta de vínculo quebrado com exemplo da funcionária Luciana]</p>
  </div>

  <h4>4.2 Procedimento de Restauração (Passo a Passo)</h4>
  <div class="step-by-step">
    <div class="step">
      <h5>Passo 1: Recuperação de Cadastros</h5>
      <p>Acessar o cadastro de Setor/Função → Pesquisar pelo ID original → Reativar os registros inativados</p>
    </div>
    
    <div class="step">
      <h5>Passo 2: Reassociação no GR</h5>
      <p>No Gerenciamento de Riscos da empresa → Incluir os setores reativados</p>
    </div>
    
    <div class="step">
      <h5>Passo 3: Transferência de Riscos</h5>
      <p>Utilizar a função "Importar Exposições" para migrar os riscos do PGR antigo para a nova estrutura</p>
    </div>
  </div>

  <!-- Espaço para imagem do assistente de importação -->
  <div class="image-placeholder">
    <p>[Imagem: Tela do assistente de importação de exposições do PGR]</p>
  </div>

  <!-- Seção 5 -->
  <h3>5. Mudanças no LTCAT - Nova Abordagem</h3>
  <div class="new-feature">
    <h4>Desacoplamento de Funcionalidades</h4>
    <ul>
      <li><strong>Independência estrutural:</strong> LTCAT e PGR agora operam como módulos separados</li>
      <li><strong>Facilidade de importação:</strong> Nova função "Importar do PGR" para transferência de riscos da Tabela 24</li>
    </ul>
  </div>

  <div class="benefits-box">
    <h4>Vantagens da Nova Versão</h4>
    <ul>
      <li>Replicação simplificada de LTCATs entre empresas</li>
      <li>Atualização ágil de documentos</li>
      <li>Redução de inconsistências</li>
    </ul>
  </div>

  <div class="warning-box">
    <h4>Restrição Importante</h4>
    <p>Evitar importação de PGR entre empresas diferentes para prevenir falhas nos vínculos futuros entre PCMSO e atendimentos médicos.</p>
  </div>

  <!-- Seção 6 -->
  <h3>6. Fluxograma de Decisão para Casos Complexos</h3>
  <div class="flowchart">
    <!-- Espaço para imagem do fluxograma -->
    <p>[Imagem: Fluxograma de tratamento para migração com problemas de vínculo]</p>
  </div>

  <h3>Conclusão Técnica</h3>
  <div class="summary">
    <p>A migração para o Sigo Web representa uma evolução arquitetural significativa, com:</p>
    <ul>
      <li><strong>Otimização estrutural:</strong> Eliminação de redundâncias nos cadastros</li>
      <li><strong>Gestão unificada:</strong> Padronização de setores e funções</li>
      <li><strong>Continuidade assegurada:</strong> Mecanismos de recuperação para manutenção dos vínculos históricos</li>
    </ul>
    <p>As equipes devem priorizar a verificação dos vínculos pós-migração, seguindo os protocolos estabelecidos para garantia da integridade dos dados ocupacionais.</p>
  </div>

  <style>
    .warning-box, .alert-box {
      border-left: 4px solid #ff9800;
      background-color: #fff8e1;
      padding: 15px;
      margin: 20px 0;
    }
    .alert-box {
      border-color: #f44336;
      background-color: #ffebee;
    }
    .code-example {
      background: #f5f5f5;
      padding: 10px;
      border-radius: 4px;
      font-family: monospace;
    }
    .step-by-step .step {
      background: #e8f5e9;
      padding: 10px 15px;
      margin: 10px 0;
      border-left: 4px solid #4caf50;
    }
    .new-feature {
      background: #e3f2fd;
      padding: 15px;
      border-left: 4px solid #2196f3;
    }
    .benefits-box {
      background: #e8f5e9;
      padding: 15px;
      margin: 15px 0;
    }
    .image-placeholder {
      background: #f5f5f5;
      padding: 30px;
      text-align: center;
      margin: 20px 0;
      border: 1px dashed #ccc;
    }
    .comparison-table table {
      width: 100%;
      border-collapse: collapse;
    }
    .comparison-table th, .comparison-table td {
      border: 1px solid #ddd;
      padding: 12px;
      vertical-align: top;
    }
    .comparison-table th {
      background-color: #f2f2f2;
    }
  </style>
`},{id:"diferenca-li-lp",title:"Diferença entre LI e LP - Conceitos, Aplicações e Obrigações Legais",description:"Guia visual comparativo entre Laudo de Insalubridade (LI) e Laudo de Periculosidade (LP), com objetivos, bases legais, critérios, prazos e orientações práticas.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <div class="welcome-banner">
        <h1>Diferença entre LI e LP</h1>
        <p>Este guia esclarece as funções, critérios e aplicações práticas do <strong>Laudo de Insalubridade (LI)</strong> e do <strong>Laudo de Periculosidade (LP)</strong>, essenciais para a conformidade legal e a proteção do trabalhador.</p>
    </div>

    <section class="steps-container">
        <!-- Passo 1 -->
        <div class="step-card hover-card">
            <div class="step-number">1</div>
            <h3>Laudo de Insalubridade (LI)</h3>
            <p><strong>O que é:</strong> Documento técnico elaborado por médico ou engenheiro de segurança do trabalho para identificar, avaliar e classificar atividades insalubres, conforme parâmetros da NR-15.</p>
            <ul class="aligned-list">
                <li><strong>Objetivos:</strong> Determinar exposição a agentes nocivos; Classificar grau (mínimo, médio ou máximo); Indicar medidas de controle.</li>
                <li><strong>Agentes avaliados:</strong> Físicos (ruído, vibração, calor, frio, radiações não ionizantes), Químicos (poeiras, fumos metálicos, vapores, gases), Biológicos (bactérias, vírus, fungos).</li>
                <li><strong>Base legal:</strong> NR-15 / CLT arts. 189 e 192.</li>
            </ul>
        </div>

        <!-- Passo 2 -->
        <div class="step-card hover-card">
            <div class="step-number">2</div>
            <h3>Laudo de Periculosidade (LP)</h3>
            <p><strong>O que é:</strong> Documento técnico elaborado por médico ou engenheiro de segurança do trabalho para avaliar se o trabalhador exerce atividades perigosas, conforme critérios da NR-16.</p>
            <ul class="aligned-list">
                <li><strong>Objetivos:</strong> Identificar risco iminente à vida; Determinar enquadramento conforme NR-16; Recomendar medidas preventivas.</li>
                <li><strong>Riscos avaliados:</strong> Inflamáveis e explosivos; Energia elétrica; Radiações ionizantes; Segurança armada.</li>
                <li><strong>Base legal:</strong> NR-16 / CLT art. 193.</li>
            </ul>
        </div>

        <!-- Passo 3 -->
        <div class="step-card hover-card">
            <div class="step-number">3</div>
            <h3>Comparativo LI x LP</h3>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Critério</th>
                            <th>LI</th>
                            <th>LP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Natureza do risco</td>
                            <td>Danos à saúde a longo prazo</td>
                            <td>Risco iminente de morte/acidente grave</td>
                        </tr>
                        <tr>
                            <td>Tipo de agente</td>
                            <td>Físico, químico, biológico</td>
                            <td>Inflamável, explosivo, eletricidade, radiação ionizante, segurança armada</td>
                        </tr>
                        <tr>
                            <td>Adicional</td>
                            <td>10%, 20% ou 40% sobre salário mínimo</td>
                            <td>30% sobre salário-base</td>
                        </tr>
                        <tr>
                            <td>Objetivo</td>
                            <td>Proteger saúde</td>
                            <td>Proteger vida e integridade física</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Passo 4 -->
        <div class="step-card hover-card">
            <div class="step-number">4</div>
            <h3>Quando Solicitar</h3>
            <ul class="aligned-list">
                <li><strong>LI:</strong> Admissão em atividades com agentes nocivos; Mudança no processo produtivo; Suspeita de exposição acima do limite; Fiscalizações ou ações trabalhistas.</li>
                <li><strong>LP:</strong> Atividades com inflamáveis, explosivos, eletricidade ou riscos da NR-16; Alterações elétricas/combustíveis; Auditorias ou fiscalizações.</li>
            </ul>
        </div>

        <!-- Passo 5 -->
        <div class="step-card hover-card">
            <div class="step-number">5</div>
            <h3>Finalidade dos Laudos</h3>
            <ul class="aligned-list">
                <li>Comprovação legal perante órgãos fiscalizadores.</li>
                <li>Cálculo de adicionais salariais.</li>
                <li>Prevenção e segurança, orientando medidas e EPIs.</li>
                <li>Proteção jurídica para empresa e trabalhador.</li>
                <li>Atendimento ao eSocial (ex.: S-2240).</li>
            </ul>
        </div>
    </section>

    <style>
        .welcome-banner {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 25px;
        }
        .steps-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        .step-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            position: relative;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .hover-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .step-number {
            background: #2196F3;
            color: white;
            font-weight: bold;
            font-size: 1.2em;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -12px;
            left: -12px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .aligned-list {
            list-style-position: inside;
            margin-top: 10px;
            padding-left: 10px;
        }
        .comparison-table table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        .comparison-table th, .comparison-table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .comparison-table th {
            background: #f5f5f5;
        }
        .comparison-table tbody tr:hover {
            background: #e3f2fd;
        }
    </style>
    `},{id:"ltcat-guia-completo",title:"LTCAT: o que é, finalidade, validade e quando elaborar",description:"Laudo Técnico das Condições Ambientais do Trabalho: conceito, finalidade previdenciária (PPP/aposentadoria especial), quando elaborar, validade/atualização e integração com o eSocial.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <div class="welcome-banner">
      <h1>LTCAT – Laudo Técnico das Condições Ambientais do Trabalho</h1>
      <p>Documento técnico-legal que registra a exposição dos trabalhadores a agentes nocivos no ambiente laboral
      (químicos, físicos e biológicos), servindo de base para <span class="hover-tip" data-title="Documento histórico-laboral exigido pelo INSS; utiliza dados do LTCAT para caracterizar exposições."><strong>PPP</strong></span>
      e para concessão de <strong>aposentadoria especial</strong>.</p>
    </div>

    <section class="core-concepts">
      <h2>Conceito e Objetivo</h2>
      <div class="concept-card">
        <ul>
          <li>Registrar, de forma técnica e com amparo legal, as <strong>condições ambientais de trabalho</strong>.</li>
          <li>Caracterizar a <strong>exposição ocupacional</strong> a agentes nocivos e sua intensidade/concentração.</li>
          <li>Dar lastro técnico para emissão do <strong>PPP</strong> e para o envio de <span class="hover-tip" data-title="Sistema público de escrituração digital de obrigações trabalhistas, previdenciárias e fiscais."><strong>eventos de SST no eSocial</strong></span>.</li>
          <li>Apoiar programas ocupacionais: <strong>PCMSO</strong> e <strong>PGR</strong>.</li>
        </ul>
      </div>
    </section>

    <section class="documents-section">
      <h2>Finalidades Práticas</h2>
      <div class="grid-container">
        <div class="doc-card">
          <h3>Base Previdenciária</h3>
          <ul>
            <li>Suporte à <strong>aposentadoria especial</strong> (15, 20 ou 25 anos conforme agente e enquadramento).</li>
            <li>Fonte oficial para <strong>PPP</strong> e auditorias previdenciárias.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Gestão de SST</h3>
          <ul>
            <li>Evidencia os agentes nocivos presentes no ambiente de trabalho.</li>
            <li>Subsidiar decisões do <strong>PGR</strong> e acompanhamento clínico pelo <strong>PCMSO</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Conformidade</h3>
          <ul>
            <li>Comprovação legal perante fiscalizações trabalhistas e previdenciárias.</li>
            <li>Resguardo formal inclusive quando a empresa alega <em>“não haver riscos”</em>.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="nr-overview">
      <h2>Quando é obrigatório elaborar</h2>
      <div class="concept-card">
        <p>Aplicável a todas as empresas com empregados regidos pela CLT (inclui MEI com funcionário e órgãos públicos celetistas), especialmente quando houver:</p>
        <ul>
          <li><strong>Exposição a agentes nocivos</strong> acima dos limites de tolerância (químicos, físicos, biológicos).</li>
          <li>Atividades com potencial de <strong>aposentadoria especial</strong> (25, 20 ou 15 anos).</li>
          <li>Obrigação de emitir <strong>PPP</strong> — inclusive para comprovar <em>inexistência de riscos</em>.</li>
          <li>Necessidade de informações para envio ao eSocial:
            <ul>
              <li><span class="hover-tip" data-title="Evento de Fatores de Risco — comunica exposições por lotação/funcão."><strong>S-2240</strong></span> — Condições Ambientais do Trabalho</li>
              <li><span class="hover-tip" data-title="Evento de exames ocupacionais do PCMSO."><strong>S-2220</strong></span> — Monitoramento da Saúde do Trabalhador</li>
            </ul>
          </li>
        </ul>
        <div class="info-box">
          <strong>Importante:</strong> Mesmo empresas que declaram não possuir riscos devem formalizar essa condição via LTCAT para evitar passivos.
        </div>
      </div>
    </section>

    <section class="documents-section">
      <h2>Validade e Atualização</h2>
      <div class="document-card">
        <div class="document-content">
          <ul>
            <li>Sem <strong>prazo fixo</strong> em lei — vigor <em>enquanto as condições permanecerem</em>.</li>
            <li><strong>Atualizar</strong> sempre que houver mudanças de layout, processo, máquinas, EPI/EPC ou agentes que alterem a exposição.</li>
            <li><strong>Boas práticas:</strong> revisar ao menos <strong>anualmente</strong> ou a cada alteração significativa, alinhado ao ciclo do PGR e aos prazos do eSocial.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="esocial-integration">
      <h2>Conteúdo Mínimo e Estrutura Técnica</h2>
      <div class="grid-container">
        <div class="doc-card">
          <h3>Responsáveis</h3>
          <ul>
            <li>Elaboração por <strong>Engenheiro de Segurança</strong> ou <strong>Médico do Trabalho</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Itens do Laudo</h3>
          <ul>
            <li>Descrição das <strong>atividades</strong> e <strong>setores</strong>.</li>
            <li>Lista de <strong>agentes nocivos</strong> e <strong>níveis de exposição</strong> (métodos de avaliação).</li>
            <li><strong>Medidas de controle</strong> existentes (EPC/EPI) e recomendações.</li>
            <li>Relação com <strong>PGR</strong> e impactos no <strong>PCMSO</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Integração eSocial</h3>
          <ul>
            <li><strong>S-2240</strong>: fatores de risco por lotação e medidas de controle.</li>
            <li><strong>S-2220</strong>: exames e avaliações clínicas vinculadas ao PCMSO.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="legal-section">
      <h2>Base Legal e Referências</h2>
      <div class="comparison-table">
        <table>
          <tr>
            <th>Norma</th>
            <th>Escopo</th>
          </tr>
          <tr>
            <td>Lei 8.213/1991 — Art. 58</td>
            <td>Define critérios de exposição para fins previdenciários (aposentadoria especial).</td>
          </tr>
          <tr>
            <td>Decreto 3.048/1999</td>
            <td>Regulamento da Previdência Social (detalhamento dos enquadramentos).</td>
          </tr>
          <tr>
            <td>IN INSS 128/2022</td>
            <td>Procedimentos para comprovação de exposição e PPP.</td>
          </tr>
          <tr>
            <td>NR-15</td>
            <td>Atividades e Operações Insalubres (limites e critérios técnicos).</td>
          </tr>
          <tr>
            <td>PGR (NR-1)</td>
            <td>Integração com a gestão de riscos ocupacionais (substituiu a antiga NR-9/PPRA).</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="faq-section">
      <h2>Perguntas Frequentes (FAQ)</h2>
      <details>
        <summary>Quem pode assinar o LTCAT?</summary>
        <p>Engenheiro de Segurança do Trabalho ou Médico do Trabalho, conforme legislação previdenciária.</p>
      </details>
      <details>
        <summary>Se não há agentes nocivos, preciso do LTCAT?</summary>
        <p>Sim. O laudo formaliza a inexistência de exposição e resguarda a empresa em fiscalizações e ações.</p>
      </details>
      <details>
        <summary>Qual a periodicidade de revisão?</summary>
        <p>Não há prazo fixo em lei; recomenda-se revisão anual ou sempre que houver alteração significativa.</p>
      </details>
    </section>
    <style>
      :root {
        --brand-blue: #2196F3;
        --brand-black: #0f172a;
        --brand-white: #ffffff;
        --muted: #f5f5f5;
      }
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 10px;
        margin-bottom: 30px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.05);
      }
      h1, h2, h3 { color: var(--brand-black); }
      .core-concepts .concept-card,
      .concept-card,
      .doc-card,
      .document-card,
      .event-card {
        background: var(--brand-white);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        border-left: 4px solid var(--brand-blue);
        margin: 15px 0;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      .document-card { padding: 0; overflow: hidden; border-left: none; }
      .document-content { padding: 25px; }
      .comparison-table table { width: 100%; border-collapse: collapse; }
      .comparison-table th, .comparison-table td { border: 1px solid #e0e0e0; padding: 12px; text-align: left; }
      .comparison-table th { background: #f7f7f7; }
      .image-placeholder {
        background: var(--muted);
        padding: 40px; text-align: center; margin: 30px 0;
        border: 2px dashed #ccc; border-radius: 8px;
      }
      .info-box {
        background: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px 16px; margin-top: 16px;
      }
      /* Hovers (tooltips) */
      .hover-tip { position: relative; cursor: help; border-bottom: 1px dashed var(--brand-blue); }
      .hover-tip::after {
        content: attr(data-title);
        position: absolute; left: 0; bottom: calc(100% + 8px);
        background: var(--brand-black); color: var(--brand-white);
        padding: 8px 10px; border-radius: 6px; white-space: nowrap; font-size: .85em; line-height: 1.2;
        opacity: 0; transform: translateY(4px); pointer-events: none; transition: all .2s ease;
      }
      .hover-tip:hover::after { opacity: 1; transform: translateY(0); }
      /* Details hover styling */
      details { background: #fafafa; border: 1px solid #eaeaea; border-radius: 8px; padding: 12px 14px; margin: 10px 0; }
      details[open] { border-color: var(--brand-blue); }
      summary { cursor: pointer; }
      /* Lists spacing */
      ul { padding-left: 18px; }
      li { margin: 6px 0; }
    </style>
    `},{id:"pcmso-programa-controle-medico",title:"PCMSO - Guia Completo sobre o Programa de Controle Médico de Saúde Ocupacional",description:"Entenda o que é o PCMSO, sua importância, os exames obrigatórios, o Relatório Analítico e as responsabilidades da empresa conforme a NR-7.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <style>
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease-in-out;
      }

      .document-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }

      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }

      .document-content {
        padding: 25px;
      }

      .document-content h4 {
        color: #2196F3;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }

      .info-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }

      .info-card ul {
        padding-left: 20px;
        margin: 0;
      }

      .info-card li {
        margin-bottom: 8px;
      }

    </style>

    <div class="document-card">
      <h3 class="document-title">O que é o PCMSO (NR-7)?</h3>
      <div class="document-content">
        <p>O <strong>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</strong> é um programa obrigatório para todas as empresas com empregados regidos pela CLT, conforme estabelecido pela Norma Regulamentadora NR-7.</p>
        <ul>
          <li><strong>Finalidade Principal:</strong> Proteger e preservar a saúde dos trabalhadores através de ações de prevenção e diagnóstico precoce de doenças relacionadas ao trabalho.</li>
          <li><strong>Integração:</strong> O PCMSO deve estar alinhado com o Programa de Gerenciamento de Riscos (PGR).</li>
          <li><strong>eSocial:</strong> As informações do PCMSO são enviadas principalmente através do evento S-2220 (Monitoramento da Saúde do Trabalhador).</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Exames Ocupacionais Contemplados</h3>
      <div class="document-content">
        <h4>Exames Obrigatórios por Lei:</h4>
        <ul>
          <li><strong>Admissional:</strong> Realizado antes do colaborador iniciar suas atividades.</li>
          <li><strong>Periódico:</strong> Feito em intervalos regulares, definidos de acordo com os riscos da função.</li>
          <li><strong>Retorno ao Trabalho:</strong> Necessário após afastamento por motivo de doença ou acidente.</li>
          <li><strong>Mudança de Função:</strong> Aplicado quando o trabalhador muda de atividade, se houver alteração de risco.</li>
          <li><strong>Demissional:</strong> Realizado no processo de desligamento do funcionário.</li>
        </ul>
        <h4>Exames Complementares:</h4>
        <p>Podem ser exigidos outros exames de acordo com os riscos identificados no ambiente de trabalho. O objetivo é a vigilância ativa da saúde para detectar doenças ocupacionais precocemente.</p>
        <ul>
          <li>Exemplos: Audiometria, radiologia, espirometria e outros exames específicos.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
        <h3 class="document-title">Importância e Funções Essenciais do PCMSO</h3>
        <div class="document-content">
            <p>O PCMSO desempenha um papel crucial na saúde ocupacional, com diversas funções definidas pela NR-7:</p>
            <div class="info-grid">
                <div class="info-card">
                    <h4>Prevenção e Diagnóstico</h4>
                    <ul>
                        <li>Detectar precocemente agravos à saúde.</li>
                        <li>Avaliar exposições a agentes nocivos.</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h4>Gestão de Aptidão</h4>
                    <ul>
                        <li>Definir a aptidão do trabalhador para a função.</li>
                        <li>Subsidiar ações de reabilitação profissional.</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h4>Análise e Controle</h4>
                    <ul>
                        <li>Apoiar análises epidemiológicas.</li>
                        <li>Monitorar imunizações ocupacionais recomendadas.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class="document-card">
      <h3 class="document-title">Relatório Analítico do PCMSO</h3>
      <div class="document-content">
        <p>É um documento anual e obrigatório, elaborado pelo médico do trabalho, que funciona como uma avaliação crítica do PCMSO. Seu principal objetivo é analisar e comparar dados de saúde para identificar riscos, prevenir doenças e, se necessário, ajustar o PCMSO e o PGR.</p>
        <h4>O que o relatório contém?</h4>
        <ul>
          <li><strong>Exames Clínicos:</strong> Número de exames admissionais, periódicos, de retorno, de mudança de risco e demissionais realizados.</li>
          <li><strong>Exames Complementares:</strong> Estatísticas sobre a quantidade e os tipos de exames complementares feitos.</li>
          <li><strong>Resultados Anormais:</strong> Dados de exames com resultados fora do padrão, detalhados por tipo, setor ou função.</li>
          <li><strong>Saúde Geral:</strong> Incidência de doenças relacionadas ao trabalho e informações das CATs emitidas.</li>
          <li><strong>Análise Comparativa:</strong> Comparação dos resultados atuais com os do relatório anterior para identificar tendências.</li>
        </ul>
        <h4>Finalidade Estratégica:</h4>
        <ul>
            <li>Avaliar a eficácia das ações de prevenção e monitoramento da saúde.</li>
            <li>Identificar áreas e funções com maiores riscos para intervenções direcionadas.</li>
            <li>Fornecer dados para revisar e aprimorar o PGR.</li>
            <li>Oferecer dados concretos para decisões da gestão sobre investimentos em saúde e segurança.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Responsabilidades e Benefícios</h3>
      <div class="document-content">
        <h4>Responsabilidade do Empregador:</h4>
        <ul>
          <li>Elaborar, implantar e custear todos os procedimentos do programa, sem ônus ao empregado.</li>
          <li>Indicar um médico do trabalho para ser o responsável pelo PCMSO.</li>
          <li style="font-size: 0.9em;"><em>Obs: Empresas de grau de risco 1 ou 2, com até 25 empregados, podem ser dispensadas da indicação de médico coordenador.</em></li>
        </ul>
        <h4>Relevância para a Empresa:</h4>
        <ul>
          <li><strong>Legalidade:</strong> Cumprir a NR-7 protege a empresa de multas e ações judiciais.</li>
          <li><strong>Produtividade:</strong> Um ambiente de trabalho seguro reduz o absenteísmo e melhora o clima organizacional.</li>
        </ul>
      </div>
    </div>
  `},{id:"pgr-programa-gerenciamento-riscos",title:"PGR - Guia Completo do Programa de Gerenciamento de Riscos (NR-1)",description:"Entenda o que é o PGR, sua estrutura com Inventário de Riscos e Plano de Ação, quem precisa elaborar, prazos de revisão e as exceções da norma.",tags:["eSocial","Introdução"],group:"Documentos",content:`
    <style>
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease-in-out;
      }

      .document-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }

      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }

      .document-content {
        padding: 25px;
      }

      .document-content h4 {
        color: #2196F3;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .info-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }

      .warning-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }

    </style>

    <div class="document-card">
      <h3 class="document-title">O que é o PGR (Programa de Gerenciamento de Riscos)?</h3>
      <div class="document-content">
        <p>O PGR é a formalização do Gerenciamento de Riscos Ocupacionais (GRO) por meio de documentos, com o objetivo de promover um ambiente de trabalho seguro e saudável. Ele se tornou obrigatório em <strong>3 de janeiro de 2022</strong>, com a nova redação da NR-01.</p>
        <ul>
          <li><strong>Substituição:</strong> O PGR substituiu o antigo PPRA (Programa de Prevenção de Riscos Ambientais), que existia desde 1994.</li>
          <li><strong>Escopo Ampliado:</strong> Diferente do PPRA, o PGR abrange também riscos ergonômicos e de acidentes.</li>
          <li><strong>Obrigatoriedade:</strong> Todas as empresas que contratam funcionários sob o regime CLT devem elaborar o PGR.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Estrutura Mínima do PGR</h3>
      <div class="document-content">
        <p>Conforme a NR-01, o PGR deve conter, no mínimo, dois documentos principais:</p>
        <div class="info-grid">
          <div class="info-card">
            <h4>1. Inventário de Riscos Ocupacionais</h4>
            <p>Documento que identifica e avalia os perigos no ambiente de trabalho. Ele deve incluir:</p>
            <ul>
              <li>Caracterização dos ambientes e atividades.</li>
              <li>Descrição de lesões potenciais e grupos de trabalhadores expostos.</li>
              <li>Análise de exposições a agentes físicos, químicos e biológicos.</li>
              <li>Critérios de avaliação e classificação dos riscos (probabilidade vs. severidade).</li>
              <li>O histórico deve ser mantido por, no mínimo, 20 anos.</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>2. Plano de Ação</h4>
            <p>Define as medidas de prevenção a serem adotadas, contendo um cronograma, formas de acompanhamento e avaliação dos resultados.</p>
            <p>O PGR também deve prever procedimentos para resposta a emergências e se integrar a outras ações, como a análise de acidentes e o PCMSO.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Prazos e Revisões do PGR</h3>
      <div class="document-content">
        <p>A NR-01 não define um "prazo de validade" fixo, mas exige que a avaliação de riscos seja revista periodicamente.</p>
        <ul>
          <li><strong>Revisão Padrão:</strong> A avaliação de riscos deve ser revista, no máximo, a cada 2 anos.</li>
          <li><strong>Revisão Estendida:</strong> Empresas com certificações em SST podem estender o prazo para até 3 anos.</li>
        </ul>
        <h4>Revisões Obrigatórias Imediatas</h4>
        <p>O PGR deve ser revisado sempre que ocorrerem as seguintes situações:</p>
        <ul>
          <li>Implementação de novas medidas de prevenção (para reavaliar os riscos residuais).</li>
          <li>Mudanças nos processos, tecnologias ou na organização do trabalho.</li>
          <li>Ocorrência de acidentes de trabalho ou doenças ocupacionais.</li>
          <li>Alterações na legislação aplicável.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Quem está dispensado de elaborar o PGR?</h3>
      <div class="document-content">
        <p>A NR-01 prevê algumas exceções à obrigatoriedade de elaboração do PGR.</p>
        <div class="warning-box">
          <h4>Casos de Dispensa:</h4>
          <ul>
            <li><strong>Microempreendedor Individual (MEI):</strong> Está sempre dispensado de elaborar o PGR.</li>
            <li><strong>Microempresas (ME) e Empresas de Pequeno Porte (EPP):</strong> Podem ser dispensadas se atenderem a dois critérios simultaneamente:
              <ul>
                <li>Serem de grau de risco 1 ou 2.</li>
                <li>Não identificarem perigos de agentes físicos, químicos ou biológicos em seu levantamento preliminar de riscos e declararem essas informações digitalmente.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `},{id:"prazos-validade-sst",title:"Prazos de Validade, Elaboração e Atualização de Documentos de SST",description:"Guia prático sobre prazos de validade, elaboração, renovação e revisão de documentos de Saúde e Segurança no Trabalho (SST), incluindo PCMSO, PGR, LTCAT, LI e LP.",group:"Documentos",content:`
    <div class="welcome-banner">
      <h1>Prazos de Validade e Atualização em SST</h1>
      <p>Este guia detalha os prazos de validade, momentos de elaboração, renovação e revisão dos principais documentos de Saúde e Segurança no Trabalho (SST).</p>
    </div>

    <section class="core-concepts">
      <h2>Resumo Prático – Quando Agir</h2>
      <div class="concept-card">
        <ul>
          <li><strong>Implantar:</strong> Quando a empresa inicia atividades ou novos setores que envolvam riscos ocupacionais.</li>
          <li><strong>Renovar:</strong> Quando o documento atinge o fim de sua validade ou há mudanças profundas no ambiente de trabalho.</li>
          <li><strong>Revisar:</strong> Quando há ajustes pontuais, como novos EPIs, troca de máquinas, mudança de layout ou alteração de produto químico.</li>
        </ul>
      </div>

    <section class="documents-section">
      <h2>Detalhamento dos Documentos de SST</h2>

      <div class="document-card">
        <h3 class="document-title">PCMSO (NR-07) - Programa de Controle Médico de Saúde Ocupacional</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> 1 ano (renovação anual).</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades da empresa com empregados regidos pela CLT.</li>
            <li><strong>Renovação Obrigatória:</strong> Anualmente, com nova programação de exames.</li>
            <li><strong>Quando Revisar:</strong> Sempre que houver mudança nos riscos ocupacionais identificados.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">PGR (NR-01) - Programa de Gerenciamento de Riscos</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> 1 ano para análise documental (pode ser atualizado a qualquer momento).</li>
            <li><strong>Quando Elaborar:</strong> Antes do início das operações.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver alteração significativa nos riscos ou processos.</li>
            <li><strong>Quando Revisar:</strong> Sempre que houver novos equipamentos, processos ou mudanças de layout.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LTCAT - Laudo Técnico das Condições Ambientais do Trabalho</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem validade fixa por lei, mas deve estar sempre atualizado.</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades que possam expor trabalhadores a agentes nocivos.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver alteração de processos, layout ou agentes.</li>
            <li><strong>Quando Revisar:</strong> A cada nova medição ou atualização tecnológica.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LI (NR-15) - Laudo de Insalubridade</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem prazo fixo, atualizado conforme necessidade.</li>
            <li><strong>Quando Elaborar:</strong> Ao admitir trabalhadores em atividades com possíveis agentes nocivos.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando confirmada alteração de agentes ou intensidade de exposição.</li>
            <li><strong>Quando Revisar:</strong> Após mudanças no processo, substituição de EPI/EPC ou troca de função.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LP (NR-16) - Laudo de Periculosidade</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem prazo fixo, atualizado conforme necessidade.</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades com inflamáveis, explosivos, eletricidade, radiação ionizante ou segurança armada.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver mudança de atividade ou risco.</li>
            <li><strong>Quando Revisar:</strong> Após modificações na área de risco ou mudança de função.</li>
          </ul>
        </div>
      </div>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
        transition: background-color 0.3s ease;
      }
      .welcome-banner:hover {
        background: #bbdefb;
      }

      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
        transition: transform 0.2s ease;
      }
      .concept-card:hover {
        transform: translateY(-5px);
      }

      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease;
      }
      .document-card:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }

      .document-content {
        padding: 25px;
      }

      .document-content h4 {
        color: #2196F3;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
        transition: border-color 0.3s ease;
      }
      .image-placeholder:hover {
        border-color: #2196F3;
      }

      ul li {
        margin-bottom: 10px;
        position: relative;
        padding-left: 20px;
      }
      ul li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #2196F3;
        font-size: 1.2em;
      }
    </style>
  `},{id:"rat-risco-acidente-trabalho",title:"RAT - Risco Acidente de Trabaho: Legislação e Enquadramento",description:"Guia completo sobre o RAT, alíquotas, legislação e enquadramento previdenciário.",group:"Gerenciamento de Riscos",content:`
<div class="welcome-banner">
  <h1>Entendendo o RAT - Risco Acidente de Trabalho</h1>
  <p>Este guia explica o conceito, legislação e aplicação prática do RAT no contexto previdenciário e de segurança do trabalho.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o RAT (Risco Acidente de Trabalho)?</h2>
  <div class="concept-card">
    <p>O RAT representa a contribuição da empresa, prevista no inciso II do artigo 22 da Lei 8212/91, e consiste em percentual que mede o risco da atividade econômica.</p>
    <p>Com base neste percentual, é cobrada a contribuição para financiar os benefícios previdenciários decorrentes do grau de incidência de incapacidade laborativa (GIIL-RAT).</p>
  </div>

<section class="nr-overview">
  <h2>Alíquotas do RAT e Sua Aplicação</h2>
  
  <div class="grid-container">
    <div class="nr-card hover-effect">
      <h3>1%</h3>
      <p>Atividades de Risco Mínimo</p>
      <p class="nr-desc">Aplicável a atividades econômicas com baixo potencial de acidentes de trabalho.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>2%</h3>
      <p>Atividades de Risco Médio</p>
      <p class="nr-desc">Para atividades com potencial moderado de ocorrência de acidentes de trabalho.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>3%</h3>
      <p>Atividades de Risco Grave</p>
      <p class="nr-desc">Aplicável a atividades com alto potencial de acidentes e doenças ocupacionais.</p>
    </div>
  </div>

  <div class="warning-box">
    <h4>Atenção:</h4>
    <p>Havendo exposição do trabalhador a agentes nocivos que permitam a concessão de aposentadoria especial, há acréscimo das alíquotas na forma da legislação em vigor. Além disso, é importante ressaltar que a Contabilidade, o RH ou a Folha serão responsáveis por essa questão do vínculo do funcionário à plataforma do eSocial. Esse procedimento deverá ser realizado primeiro, para que os eventos de SST possam ser enviados.</p>
  </div>
</section>

<section class="documents-section">
  <h2>Variações nas Alíquotas do RAT</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Redução de Até 50%</h3>
    <div class="document-content">
      <p>O percentual de 1%, 2% ou 3% poderá ser reduzido em até cinquenta por cento conforme regulamento.</p>
      
      <h4>Critérios para Redução:</h4>
      <ul class="bullet-list">
        <li>Bom desempenho da empresa em relação à respectiva atividade econômica</li>
        <li>Índices positivos de frequência, gravidade e custo de acidentes</li>
        <li>Implementação eficaz de programas de prevenção de acidentes</li>
      </ul>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Aumento de Até 100%</h3>
    <div class="document-content">
      <p>O percentual pode ser aumentado em até cem por cento conforme regulamento.</p>
      
      <h4>Motivos para Aumento:</h4>
      <ul class="bullet-list">
        <li>Desempenho insatisfatório em segurança do trabalho</li>
        <li>Altos índices de acidentes na empresa</li>
        <li>Falta de implementação de medidas de proteção adequadas</li>
      </ul>
      
      <p class="note-text">Os índices são calculados segundo metodologia aprovada pelo Conselho Nacional de Previdência Social.</p>
    </div>
  </div>
</section>

<section class="legislation-section">
  <h2>Legislação Aplicável ao RAT</h2>
  
  <div class="legislation-card hover-effect">
    <h3 class="legislation-period">Fato gerador da contribuição até: 31/12/09</h3>
    <div class="legislation-content">
      <h4>Legislação:</h4>
      <p>Anexo V do RPS, alterado pelo Decreto nº 6.042, de 12 de fevereiro de 2007</p>
      
      <h4>Fonte:</h4>
      <p><a href="http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6042.htm" target="_blank">http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6042.htm</a></p>
    </div>
  </div>

  <div class="legislation-card hover-effect">
    <h3 class="legislation-period">Fato gerador da contribuição a partir de: 01/01/10</h3>
    <div class="legislation-content">
      <h4>Legislação:</h4>
      <p>Anexo V do RPS, alterado pelo Decreto nº 6.957, de 9 de setembro de 2009</p>
      
      <h4>Fonte:</h4>
      <p><a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Decreto/D6957.htm" target="_blank">http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Decreto/D6957.htm</a></p>
    </div>
  </div>
</section>

<section class="calculation-section">
  <h2>Base de Cálculo do RAT</h2>
  
  <div class="calculation-card hover-effect">
    <h3>Incide sobre:</h3>
    <ul class="bullet-list">
      <li>Total da remuneração paga</li>
      <li>Remuneração devida</li>
      <li>Remuneração creditada a qualquer título</li>
    </ul>
    <p class="note-text">No decorrer do mês, aos segurados empregados e trabalhadores avulsos.</p>
  </div>


<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card, .event-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover, .event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card, .legislation-card, .calculation-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .document-card:hover, .legislation-card:hover, .calculation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title, .legislation-period {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content, .legislation-content {
    padding: 25px;
  }
  
  .document-content h4, .legislation-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 15px 0;
  }
  
  .bullet-list li {
    margin-bottom: 8px;
    transition: color 0.2s ease;
  }
  
  .bullet-list li:hover {
    color: #2196F3;
  }
  
  .note-text {
    font-style: italic;
    color: #666;
    margin-top: 15px;
  }
  
  .hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-effect:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
`},{id:"erros-impressao-pgr-formatacao",title:"Erros na Impressão do PGR: Solução para Problemas de Formatação",description:"Guia completo para solucionar problemas de impressão no PGR, PCMSO, LTCAT e outros documentos causados por formatação incorreta de texto.",group:"Erros",content:`
<div class="welcome-banner">
  <h1>Resolução de Erros na Impressão de Documentos</h1>
  <p>Este guia aborda os problemas mais comuns de formatação que causam erros na geração de documentos do Gerenciamento de Riscos e suas soluções.</p>
</div>

<section class="core-concepts">
  <h2>Problemas Comuns de Formatação em Documentos</h2>
  <div class="concept-card">
    <p>Erros ao imprimir documentos como PGR, PCMSO, LTCAT, LI NR-15 e LP NR-16 geralmente estão relacionados a:</p>
    <ul class="bullet-list">
      <li>Formatação herdada de textos copiados de outras fontes</li>
      <li>CEP não vinculado à unidade ou informado de forma incorreta.</li>
      <li>Uso incorreto de negrito e itálico</li>
      <li>Espaçamentos e quebras de linha excessivas</li>
      <li>Caracteres especiais não reconhecidos pelo sistema</li>
    </ul>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_1.png">
  </div>
</section>

<section class="troubleshooting-section">
  <h2>Sondagem Inicial para Identificação do Problema</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Questionamentos Iniciais ao Cliente</h3>
    <div class="document-content">
      <p>Antes de iniciar a análise técnica, é importante levantar informações com o cliente:</p>
      
      <h4>Perguntas-Chave:</h4>
      <ul class="bullet-list">
        <li>Esse erro acontece em outras empresas ou estabelecimentos?</li>
        <li>Em qual empresa específica o erro ocorre?</li>
        <li>O erro acontece apenas com uma Área de Atuação específica na Documentação?</li>
        <li>Ocorre na geração de um único documento ou em vários?</li>
        <li>O caso se refere a uma revisão, implementação ou renovação?</li>
      </ul>
    </div>
  </div>
</section>

<section class="analysis-section">
  <h2>Análise Técnica Passo a Passo</h2>
  
  <div class="step-by-step">
    <div class="step hover-effect">
      <h4>Passo 1: Acessar a Empresa</h4>
      <p>Tente gerar o documento para confirmar a ocorrência do erro.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 2: Verificar Escopo do Problema</h4>
      <p>Identifique se o erro ocorre em um único documento ou em vários, e se está relacionado a revisões.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 3: Navegar até a Área de Atuação</h4>
      <p>Acesse: Menu → Configurações → Configurações Gerais → Documentação</p>
      <p>Desative todos os tópicos relacionados à área de atuação problemática.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 4: Testar Novamente</h4>
      <p>Tente gerar o documento novamente. Se o erro persistir, desconsidere os próximos passos.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 5: Identificação do Tópico Problemático</h4>
      <p>Ative os tópicos dois por vez, testando a geração do documento após cada ativação.</p>
      <p class="note-text">Recomenda-se anotar os tópicos ativados para não se perder durante os testes.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 6: Correção da Formatação</h4>
      <p>Após identificar o tópico problemático, instrua o cliente a limpar a formatação usando a ferramenta "Remover Estilo de Fonte".</p>
    </div>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_2.png">
  </div>
</section>

<section class="formatting-section">
  <h2>Problemas Específicos de Formatação</h2>
  
  <div class="grid-container">
    <div class="nr-card hover-effect">
      <h3>Texto com Estilo de Fonte</h3>
      <p>Formatações herdadas de outras fontes</p>
      <p class="nr-desc">Textos copiados de portais ou documentos externos trazem formatações invisíveis que causam erros.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>Espaços em Negrito</h3>
      <p>Espaços entre palavras formatados em negrito</p>
      <p class="nr-desc">Quando o espaço entre palavras também está em negrito (ex: "Texto&nbsp;&nbsp;com&nbsp;&nbsp;espaços"), ocorrem erros.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>Quebras de Linha</h3>
      <p>Excesso de espaçamentos e quebras</p>
      <p class="nr-desc">Muitas quebras de linha consecutivas ou espaçamentos excessivos podem causar falhas na renderização.</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Exemplo de Erro Comum</h4>
    <p>Um texto copiado de um portal do eSocial com diferentes formatações pode causar o erro:</p>
    <p class="code-example">ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection. (Parameter 'index')</p>
  </div>
</section>

<section class="solutions-section">
  <h2>Soluções para Problemas de Formatação</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Remover Estilo de Fonte</h3>
    <div class="document-content">
      <p>A função "Remover Estilo de Fonte" elimina formatações como negrito, itálico, cores e tamanhos diferentes.</p>

       <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_3.png">
  </div>
</section>
      
      <h4>Como usar:</h4>
      <ol class="bullet-list">
        <li>Selecione todo o texto problemático</li>
        <li>Clique no ícone "Remover Estilo de Fonte" no editor</li>
        <li>Reformate o texto usando apenas as ferramentas do editor do sistema</li>
      </ol>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Usar Bloco de Notas como Intermediário</h3>
    <div class="document-content">
      <p>Quando a função "Remover Estilo de Fonte" não for suficiente:</p>
      
      <h4>Processo Recomendado:</h4>
      <ul class="bullet-list">
        <li>Cole o texto primeiro no Bloco de Notas (Notepad)</li>
        <li>O Bloco de Notas converte completamente qualquer formatação</li>
        <li>Copia o texto do Bloco de Notas e cole no sistema</li>
        <li>Formate o texto usando as ferramentas do editor do sistema</li>
      </ul>
    </div>
  </div>

<section class="client-support-section">
  <h2>Suporte ao Cliente</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Para Clientes com Conhecimento Técnico</h3>
    <div class="document-content">
      <p>Envie documentação explicativa detalhando:</p>
      <ul class="bullet-list">
        <li>O motivo do erro relacionado à formatação</li>
        <li>Passo a passo para correção</li>
        <li>Exemplos antes e depois da correção</li>
        <li>Prevenção para casos futuros</li>
      </ul>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Para Clientes sem Conhecimento Técnico</h3>
    <div class="document-content">
      <p>Siga este protocolo de atendimento:</p>
      
      <h4>Passo a Passo de Atendimento:</h4>
      <ol class="bullet-list">
        <li>Informe ao cliente que a causa do erro foi identificada</li>
        <li>Solicite acesso remoto (AnyDesk) para demonstrar a solução</li>
        <li>Explique visualmente o problema e a solução</li>
        <li>Oriente o cliente a:
          <ul>
            <li>Selecionar todo o texto no tópico problemático</li>
            <li>Clicar no ícone "Remover Estilo de Fonte"</li>
            <li>Reformatar o texto usando as ferramentas do editor</li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
<section class="prevention-section">
  <h2>Prevenção de Problemas Futuros</h2>
  
  <div class="prevention-grid">
    <div class="prevention-card hover-effect">
      <h4>Boas Práticas de Formatação</h4>
      <ul class="bullet-list">
        <li>Evitar copiar texto diretamente de outras fontes</li>
        <li>Usar sempre o Bloco de Notas como intermediário</li>
        <li>Formatar texto apenas com as ferramentas do sistema</li>
        <li>Verificar espaços entre palavras ao usar negrito</li>
      </ul>
    </div>
    
    <div class="prevention-card hover-effect">
      <h4>Verificações Regulares</h4>
      <ul class="bullet-list">
        <li>Testar a geração de documentos após edições</li>
        <li>Revisar textos copiados de fontes externas</li>
        <li>Manter documentação padronizada</li>
        <li>Treinar equipe nas boas práticas de formatação</li>
      </ul>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Observação Importante</h4>
    <p>Este mesmo erro pode ocorrer em qualquer campo de "Inserção de Texto" do sistema, não apenas na Documentação do Gerenciamento de Riscos.</p>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 15px 0;
  }
  
  .bullet-list li {
    margin-bottom: 8px;
    transition: color 0.2s ease;
  }
  
  .bullet-list li:hover {
    color: #2196F3;
  }
  
  .grid-container, .prevention-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card, .prevention-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover, .prevention-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .document-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .step-by-step .step {
    background: #e8f5e9;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid #4caf50;
    border-radius: 4px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .step-by-step .step:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .code-example {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    font-family: monospace;
    margin: 10px 0;
  }
  
  .note-text {
    font-style: italic;
    color: #666;
    margin-top: 10px;
  }
  
  .hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-effect:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
`}]},wr={id:"resolu-o-de-problemas",title:"Resolução de problemas",description:"Este módulo tem como objetivo apoiar o processo de solução de problemas.",icon:`<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 14h-2v-2h2v2m0-4h-2V5h2"/>
</svg>`,topics:[{id:"resolucao-erros-s2240",title:"Resolução de Erros no Evento S-2240 do eSocial",description:"Guia completo para diagnóstico e correção de falhas no envio do evento S-2240, com foco em configurações de empresa, funcionário e preenchimento de campos obrigatórios.",group:"eSocial",tags:["eSocial","Eventos","Erro","S-2240"],content:`
<div class="error-resolution-guide">
  <h1>Erros no Envio do Evento S-2240</h1>
  <p>Este guia detalha os pontos críticos para resolver inconsistências no envio do evento S-2240 referente às Condições do Ambiente de Trabalho, conforme documentação técnica.</p>
  <div class="error-summary">
    <p><strong>Erro principal:</strong> Informações obrigatórias não preenchidas corretamente ou em desacordo com requisitos do eSocial</p>
    <p><strong>Causas comuns:</strong> Dados inconsistentes, campos obrigatórios em branco, preenchimento incorreto</p>
  </div>
</div>

<section class="diagnostic-section">
  <h2>Perguntas para Diagnóstico</h2>
  <div class="diagnostic-card">
    <p>Responda estas perguntas para identificar o cenário do erro:</p>
    <ul>
      <li>• <strong>Funcionário relacionado:</strong> Identificar qual colaborador está associado ao evento com erro</li>
      <li>• <strong>Empresa vinculada:</strong> Verificar a qual organização pertence o funcionário</li>
      <li>• <strong>Escopo do erro:</strong> Ocorre apenas com este funcionário ou afeta múltiplos colaboradores?</li>
      <li>• <strong>Abrangência empresarial:</strong> O erro acontece apenas nesta empresa ou em várias organizações?</li>
      <li>• <strong>Universalidade:</strong> Acontece com envios de todas as empresas diferentes?</li>
    </ul>
    <div class="technical-note">
      <p><strong>Nota Técnica:</strong> Estas perguntas permitem identificar se o erro é pontual (dados específicos) ou sistêmico (configuração geral)</p>
    </div>
  </div>
</section>

<section class="company-config">
  <h2>Configurações na Empresa (Verificação Obrigatória)</h2>
  <div class="config-grid">
    <div class="config-card critical">
      <h3>Habilitado</h3>
      <p>• Deve estar marcado como <strong class="required">SIM</strong> para envio ao eSocial</p>
      <p>• Se configurado como "Não", os eventos <strong>não serão transmitidos</strong></p>
    </div>
    
    <div class="config-card">
      <h3>Ambiente</h3>
      <p>• <strong>Produção:</strong> Envio oficial ao ambiente do governo</p>
      <p>• <strong>Restrita (Teste):</strong> Ambiente de validação pré-produção (sem efeitos legais)</p>
      <div class="warning">
        <p>Configuração incorreta gera envios para ambiente errado</p>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Método de Transmissão</h3>
      <p>• <strong>Manual:</strong> Envio direto pela empresa (controle total)</p>
      <p>• <strong>Automático A1:</strong> Uso de certificado digital para automação</p>
    </div>
    
    <div class="config-card">
      <h3>Responsabilidade</h3>
      <p>• <strong>Prestador SST:</strong> Clínica/Parceiro responsável pelo envio</p>
      <p>• <strong>Empregador:</strong> Cliente final assume responsabilidade</p>
      <p>• <strong>Contador:</strong> Empresa contábil responsável (método manual)</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 1: Configurações de empresa - Habilitado/Ambiente/Transmissão/Responsabilidade]</p>
  </div>
</section>

<section class="employee-config">
  <h2>Configurações no Funcionário (Campos Críticos)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>TSVE sem Matrícula</h3>
      <p>• Obrigatório para categorias profissionais sem matrícula</p>
      <p>• Requer preenchimento do <strong>Código de Categoria do Trabalhador</strong></p>
    </div>
    
    <div class="config-card critical">
      <h3>S-2240 Habilitado</h3>
      <p>• Deve estar explicitamente marcado como <strong class="required">SIM</strong></p>
      <p>• Configuração como "Não" impede o envio do evento</p>
    </div>
    
    <div class="config-card critical">
      <h3>Registro de Admissão</h3>
      <p>• <strong>Obrigatório</strong> para processamento correto</p>
      <p>• Ausência gera erro de vínculo empregatício</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 2: Configurações de funcionário - TSVE/S-2240/Admissão]</p>
  </div>
  
  <div class="sub-section">
    <h3>Admissão do Funcionário</h3>
    <div class="config-card critical">
      <h4>Número de Matrícula</h4>
      <p>• Campo obrigatório transmitido ao eSocial</p>
      <p>• Deve corresponder ao registro oficial do governo</p>
    </div>
    <div class="image-placeholder">
      <p>[Imagem 3: Tela de admissão do funcionário (destaque para campo matrícula)]</p>
    </div>
  </div>
  
  <div class="sub-section">
    <h3>Ocupações Sede</h3>
    <div class="config-card critical">
      <h4>Data Início</h4>
      <p>• Data de início de ocupação enviada ao eSocial</p>
      <p>• <strong>Deve corresponder exatamente</strong> ao registro no eSocial</p>
      <div class="warning">
        <p>Divergência causa erro de RET ou falta de vínculo</p>
      </div>
    </div>
    <div class="image-placeholder">
      <p>[Imagem 4: Tela de ocupações sede (destaque para data início)]</p>
    </div>
  </div>
</section>

<section class="ppp-config">
  <h2>Lotações PPP (Preenchimento Obrigatório)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>Código CBO</h3>
      <p>• Classificação ocupacional conforme tabela oficial</p>
      <p>• Consultar: <a href="http://www.mtecbo.gov.br/cbosite/pages/pesquisas/BuscaPorCodigo.jsf" target="_blank">MTE CBO</a></p>
      <p>• Atualização constante requer verificação periódica</p>
    </div>
    
    <div class="config-card">
      <h3>Código GFIP</h3>
      <p>• Informa exposição a agentes nocivos</p>
      <p>• Especifica tempo de exposição quando aplicável</p>
    </div>
    
    <div class="config-card critical">
      <h3>EPI/EPC</h3>
      <p>• <strong>Número do CA</strong> deve corresponder ao lote do produto</p>
      <p>• Inconsistências podem gerar multas</p>
      <p>• Dados de cadastro devem refletir situação real</p>
    </div>
    
    <div class="config-card critical">
      <h3>Responsáveis Técnicos</h3>
      <p>• Cadastro completo obrigatório</p>
      <p>• Informações incorretas impedem envio do evento</p>
      <p>• Deve conter: Nome completo, registro profissional, especialidade</p>
    </div>
  </div>
  
  <div class="additional-fields">
    <h4>Outros Campos Relevantes:</h4>
    <ul>
      <li>• <strong>Observações Ambientais:</strong> Transmitidas integralmente ao eSocial</li>
      <li>• <strong>Descrição de Atividade:</strong> Detalhamento das funções exercidas</li>
      <li>• <strong>Registro eSocial:</strong> Histórico de envios e erros ocorridos</li>
    </ul>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 5: Tela de lotações PPP com todos os campos obrigatórios]</p>
  </div>
</section>

<section class="risk-factors">
  <h2>Exposição a Fatores de Risco (Campo Crítico)</h2>
  <div class="critical-card">
    <h3>Preenchimento Obrigatório</h3>
    <p>• Mesmo sem exposição, selecionar: <strong class="required">Ausência de fatores de risco</strong></p>
    <p>• Campo vazio gera erro de "Informações insuficientes para gerar XML"</p>
    
    <div class="config-grid">
      <div class="config-card">
        <h4>Código do Agente Nocivo</h4>
        <p>• Obrigatório quando há direito à aposentadoria especial</p>
        <p>• Consultar Tabela 24: <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/leiautes-esocial-v-1-1-beta/tabelas.html#24" target="_blank">Agentes Nocivos - eSocial</a></p>
      </div>
      
      <div class="config-card critical">
        <h4>Número do CA</h4>
        <p>• Identificação única do EPI</p>
        <p>• Deve corresponder ao registro no Ministério do Trabalho</p>
        <p>• Essencial para rastreabilidade e validade</p>
      </div>
    </div>
    
    <div class="technical-note">
      <p><strong>Consequências de Inconsistência:</strong> Diferença entre número do CA cadastrado e utilizado na empresa pode gerar multas e penalidades</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 6: Tela de exposição a riscos com destaque para campos obrigatórios]</p>
  </div>
</section>

<section class="recurrent-errors">
  <h2>Ocorrências Recorrentes e Soluções</h2>
  
  <div class="error-card critical">
    <h3>Data de Ocupação ≠ Data de Admissão</h3>
    <p>• <strong>Erro resultante:</strong> RET ou falta de vínculo</p>
    <p>• <strong>Mensagem do sistema:</strong> "Dentro da data enviada, não havia cadastro do funcionário"</p>
    <p>• <strong>Solução:</strong> Uniformizar datas entre sistema e eSocial</p>
  </div>
  
  <div class="error-card critical">
    <h3>Ausência de Risco Cadastrado</h3>
    <p>• <strong>Erro resultante:</strong> Erro de Preenchimento (S-2240)</p>
    <p>• <strong>Requisito absoluto:</strong> Cadastro de risco obrigatório, mesmo que seja "Ausência de agente nocivo"</p>
    <p>• <strong>Solução:</strong> Preencher campo de exposição a riscos em todos os funcionários</p>
  </div>
  
  <div class="error-example">
    <h4>Exemplo de Erro Retornado pelo Sistema:</h4>
    <div class="code-block">
      <p>[Grupo: 1]</p>
      <p>[Campo: dataIni]</p>
      <p>[Valor: 01/01/2023]</p>
      <p>[Motivo: Não existe vínculo ativo para o trabalhador na data de início]</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 7: Mensagem de erro detalhada do sistema]</p>
  </div>
  
  <div class="prevention-tips">
    <h3>Medidas Preventivas</h3>
    <ul>
      <li>• Verificar consistência entre data de admissão e data de ocupação</li>
      <li>• Implementar checklist de campos obrigatórios antes do envio</li>
      <li>• Validar números de CA com fornecedores de EPI</li>
      <li>• Realizar testes no ambiente Restrita antes da produção</li>
    </ul>
  </div>
</section>

<style>
  .error-resolution-guide {
    background: linear-gradient(to right, #ffebee, #ffcdd2);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #d32f2f;
  }
  
  .error-summary {
    background: #ffffff90;
    padding: 15px;
    border-radius: 6px;
    margin-top: 20px;
    text-align: left;
  }
  
  .diagnostic-card, .critical-card {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #ffa000;
    margin: 20px 0;
  }
  
  .technical-note {
    background: #ffecb3;
    padding: 12px;
    border-radius: 4px;
    margin-top: 15px;
    font-style: italic;
  }
  
  .config-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .config-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s;
  }
  
  .config-card:hover {
    transform: translateY(-5px);
  }
  
  .config-card.critical {
    border-left: 4px solid #f44336;
    background: #ffebee;
  }
  
  .critical-card {
    border-left: 4px solid #f44336;
  }
  
  .required {
    color: #d32f2f;
    font-weight: bold;
  }
  
  .error-card {
    background: #ffebee;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #f44336;
    margin: 15px 0;
  }
  
  .error-card.critical {
    background: #ffcdd2;
  }
  
  .sub-section {
    margin: 30px 0;
    padding-left: 20px;
    border-left: 3px solid #bdbdbd;
  }
  
  .warning {
    background: #fff8e1;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 0.9em;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .additional-fields {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 6px;
    margin: 20px 0;
  }
  
  .error-example {
    margin: 25px 0;
  }
  
  .code-block {
    background: #5f5c5c79;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 4px;
    font-family: monospace;
    overflow-x: auto;
  }
  
  .prevention-tips {
    background: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin-top: 25px;
  }
</style>
`}]},Ar={id:"financeiro",title:"Financeiro e Faturamento",description:"Este módulo tem como objetivo apoiar o processo de solução de problemas relacionados a processos financeiros e de faturamento.",icon:` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <path fill="currentColor" d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52a.8.8 0 1 0 .59 1.49a10.11 10.11 0 0 1 5.44-.48a.8.8 0 1 0 .28-1.57Z" class="clr-i-outline clr-i-outline-path-1"/>
    <circle cx="25.38" cy="16.71" r="1.36" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"/>
    <path fill="currentColor" d="M35.51 18.63a1 1 0 0 0-.84-.44a3.42 3.42 0 0 1-2.09-1.12a17.35 17.35 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1a10.12 10.12 0 0 0-5.39.75a12.72 12.72 0 0 0-2.72 1.63a16.94 16.94 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53a1.81 1.81 0 0 1 .14-1.4a1.19 1.19 0 0 1 .43-.43a1.08 1.08 0 0 0-1.12-1.85A3.31 3.31 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.58 17.58 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09a1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9l1.18.13a20.33 20.33 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2c-.18-.53-.32-1-.43-1.45A13.18 13.18 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0a1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94Zm-3.78 5.44a11.37 11.37 0 0 1-2.35-.11a8.2 8.2 0 0 1-2.53-.87a1 1 0 0 0-.93 1.77a11.72 11.72 0 0 0 1.29.58a8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.53 18.53 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.57 20.57 0 0 1 7.76 26l-.18-.39A14.62 14.62 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.47 15.47 0 0 1 5.08 1.48l.62.29l.5-.47A10.29 10.29 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29l.25.5a21.16 21.16 0 0 0 3.31 4.84a6.49 6.49 0 0 0 2.14 1.39Z" class="clr-i-outline clr-i-outline-path-3"/>
    <path fill="none" d="M0 0h36v36H0z"/>
</svg>`,topics:[{id:"parametros-financeiros",title:"Parâmetros Comuns do Financeiro",description:"Configurações de cobrança, exames, contratos e serviços adicionais no módulo financeiro do sistema.",tags:["Empresas"],group:"Financeiro",content:`
<div class="welcome-banner">
  <h1>Bem-vindo ao Módulo Financeiro!</h1>
  <p>Este guia apresenta os principais parâmetros e configurações do sistema financeiro para gestão de cobranças, exames e contratos.</p>
</div>

<section class="core-concepts">
  <h2>Parâmetros de Cobrança de Exames</h2>
  
  <div class="grid-container">
    <div class="param-card">
      <h3>Sem Resultado</h3>
      <div class="param-content">
        <p>O sistema fatura com base na data de atendimento (data de cadastro), independente da realização do exame.</p>
      </div>
    </div>
    
    <div class="param-card">
      <h3>Todos com Resultado</h3>
      <div class="param-content">
        <p>O sistema fatura com base na data de realização do exame. Se o procedimento foi cadastrado em 15/06 mas realizado em 02/07, entrará na cobrança de julho.</p>
      </div>
    </div>
    
    <div class="param-card">
      <h3>Todos com Resultado -- Liberado</h3>
      <div class="param-content">
        <p>Funciona como "Todos com Resultado", mas depende do ASO estar liberado. A data de realização do atendimento define o período de cobrança.</p>
      </div>
    </div>
  </div>
  

</section>

<section class="cobranca-section">
  <h2>Tipos de Cobrança</h2>
  
  <div class="document-card">
    <h3 class="document-title">Per Capta</h3>
    <div class="document-content">
      <p>Cobrança baseada em todas as vidas ativas da empresa (funcionários ativos).</p>
      
      <h4>Configurações Adicionais:</h4>
      <ul>
        <li><strong>Cobrar Funcionários Demitidos:</strong> Parâmetro que deve ser marcado se desejar incluir demitidos na cobrança</li>
        <li><strong>Não Cobrar:</strong> Opção no cadastro do funcionário para excluí-lo da cobrança</li>
        <li><strong>Exames Clínicos:</strong> Entram como "Coberto" por padrão, mas podem ser configurados como "Cobrado à parte"</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Tabela de Desconto</h3>
    <div class="document-content">
      <h4>Funcionário:</h4>
      <p>Valor multiplicado pela quantidade de funcionários (ex: R$ 162,50 × 10 funcionários)</p>
      
      <h4>Pacote:</h4>
      <p>Cobrança até X funcionários por valor fixo. Opção "Adicionar Excedente na Cobrança" para funcionários além do limite.</p>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Atendimentos</h3>
    <div class="document-content">
      <p>Cobrança baseada apenas nos atendimentos lançados no sistema.</p>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Valor Consulta Médica</h3>
    <div class="document-content">
      <p>Sem vínculo com Exame Clínico Ocupacional. Utilizado para consultas rotineiras ou monitoração pontual.</p>
    </div>
  </div>
</section>

<section class="configuracoes-section">
  <h2>Configurações Adicionais de Cobrança</h2>
  
  <div class="grid-container">
    <div class="config-card">
      <h3>Carência na Cobrança</h3>
      <div class="config-content">
        <p>Permite estender o tempo de cobrança após demissão (ex: cobrar mais 3 meses após demissão).</p>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Quantidade Mínima de Funcionários</h3>
      <div class="config-content">
        <p>Só realiza cobrança a partir do número X de vidas ativas configurado.</p>
        <div class="warning-box">
          <p><strong>Observação:</strong> Este campo não tem vínculo com o campo "Quantidade Funcionários". O sistema utiliza apenas o número de vidas ativas cadastradas.</p>
        </div>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Periodicidade de Cobrança</h3>
      <div class="config-content">
        <p>Frequência de faturamento da empresa:</p>
        <ul>
          <li>Mensalmente (uma vez ao mês)</li>
          <li>Semestralmente (uma vez a cada seis meses)</li>
          <li>Personalizado (período determinado pela empresa)</li>
        </ul>
      </div>
    </div>
  </div>
  

</section>

<section class="exames-section">
  <h2>Configurações de Exames</h2>
  
  <div class="document-card">
    <h3 class="document-title">Exames Médicos Pré-Pagos</h3>
    <div class="document-content">
      <p>Utilizado para contratos com pacotes de exames clínicos pré-determinados.</p>
      
      <h4>Funcionalidades:</h4>
      <ul>
        <li>Parametrização do número total de exames</li>
        <li>Opção de acumulação por mês</li>
        <li>Controle de quantidade restante e já realizados</li>
        <li>Gestão do período de vigência</li>
      </ul>
      
      <div class="warning-box">
        <p><strong>Importante:</strong> Todo tipo de pacote pré-pago deve ser parametrizado antes da realização dos exames.</p>
      </div>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Exames Médicos por Credenciada</h3>
    <div class="document-content">
      <p>Criação de tabela individual com valores específicos para cada credenciada.</p>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Exames Complementares</h3>
    <div class="document-content">
      <p>Tabela individual para cada exame complementar, tanto para laboratórios quanto para exames realizados na clínica.</p>
      
      <h4>Funcionalidades:</h4>
      <ul>
        <li>Criação de pacotes pré-pagos para exames complementares</li>
        <li>Configuração de quantidade de exames no pacote</li>
        <li>Opção de acumulação</li>
      </ul>
    </div>
  </div>
</section>

<section class="servicos-section">
  <h2>Serviços Adicionais - Contrato</h2>
  
  <div class="document-card">
    <div class="document-content">
      <p>Cobrança de serviços além dos exames (NRs, acordos contratuais, adendos, etc.).</p>
      
      <h4>Tipos de Cobrança:</h4>
      <div class="grid-container">
        <div class="service-card">
          <h5>Coberto no Contrato</h5>
          <p>Serviço incluído como cortesia, sem cobrança adicional.</p>
        </div>
        
        <div class="service-card">
          <h5>Per Capta</h5>
          <p>Valor multiplicado pelo total de vidas ativas da empresa.</p>
        </div>
        
        <div class="service-card">
          <h5>Valor Fechado</h5>
          <p>Mensalidade fixa cobrada todo mês.</p>
        </div>
        
        <div class="service-card">
          <h5>Anual</h5>
          <p>Cobrança realizada uma vez por ano, no mês determinado por parâmetro.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="parametros-section">
  <h2>Parâmetros de Faturamento - Contrato</h2>
  
  <div class="document-card">
    <div class="document-content">
      <p>Parametrização da unidade responsável pela cobrança mensal de:</p>
      <ul>
        <li>Serviços Médicos Ocupacionais</li>
        <li>Serviços Adicionais</li>
      </ul>
      <p>Cada contrato pode ser faturado através de uma unidade específica.</p>
    </div>
  </div>
</section>

<section class="contrato-section">
  <h2>Gestão de Contratos</h2>
  
  <div class="grid-container">
    <div class="contract-card">
      <h3>Contrato Digitalizado</h3>
      <div class="contract-content">
        <p>Área para arquivamento de documentos contratuais referentes à empresa.</p>
      </div>
    </div>
    
    <div class="contract-card">
      <h3>Complementos - Contrato</h3>
      <div class="contract-content">
        <p>Funcionalidades adicionais:</p>
        <ul>
          <li>Apontamento do vendedor responsável</li>
          <li>Reajuste manual do contrato</li>
          <li>Configuração de reajuste automático por base do sistema</li>
          <li>Registro do usuário que parametrizou o contrato</li>
        </ul>
      </div>
    </div>
  </div>
  
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .param-card, .config-card, .contract-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .param-card:hover, .config-card:hover, .contract-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .service-card {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 6px;
    border-left: 3px solid #4caf50;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
    transition: background-color 0.2s ease;
  }
  
  li:hover {
    background-color: #f5f5f5;
  }
</style>
`},{id:"cnab-remessa-retorno",title:"CNAB - Remessa e Retorno: Guia Completo para Geração e Processamento",description:"Aprenda a gerar remessas CNAB e processar retornos para boletos bancários, com detalhes sobre layouts 240 e 400.",tags:["Empresas","Introdução"],group:"Financeiro",content:`
<div class="welcome-banner">
  <h1>Bem-vindo ao Módulo CNAB!</h1>
  <p>Este guia apresenta o processo completo de geração de remessas e processamento de retornos CNAB para cobrança bancária em nosso sistema.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o Arquivo CNAB?</h2>
  <div class="concept-card">
    <p>O <strong>CNAB (Centro Nacional de Automação Bancária)</strong> é um arquivo de texto usado para encaminhar instruções de cobrança de uma empresa para um banco, contendo:</p>
    <ul>
      <li>Dados do cliente</li>
      <li>Valor e vencimento do boleto</li>
      <li>Instruções (multa, juros, desconto)</li>
      <li>Número do documento</li>
      <li>Código da empresa no banco</li>
    </ul>
    <p>Estas informações validam os boletos criados no sistema, permitindo que sejam pagos e estejam prontos para cobrança.</p>
  </div>

  <div class="image-placeholder">
     <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_1.png">
  </div>
</section>

<section class="layout-section">
  <h2>Layouts CNAB</h2>
  <p>A remessa CNAB possui dois tipos de layouts que variam conforme bancos e contas bancárias:</p>
  
  <div class="grid-container">
    <div class="layout-card">
      <h3>Layout 400</h3>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_2.png">
      </div>
      <p class="layout-desc">Layout com até 400 posições (linhas) no arquivo.</p>
    </div>
    
    <div class="layout-card">
      <h3>Layout 240</h3>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_3.png">
      </div>
      <p class="layout-desc">Layout com até 240 posições (linhas) no arquivo.</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Importante</h4>
    <p>A diferença entre esses layouts é a quantidade de posições dentro do arquivo, sendo crucial identificá-los corretamente para evitar complicações no processamento.</p>
  </div>
</section>

<section class="remessa-generation">
  <h2>Geração de Remessa CNAB</h2>
  
  <div class="step-by-step">
    <div class="step">
      <h3>Passo 1: Pré-requisitos</h3>
      <p>É necessário ter um título no Contas a Receber (pedido faturado ou faturamento de contrato) com status "Em carteira".</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_4.png">
      </div>
    </div>
    
    <div class="step">
      <h3>Passo 2: Acessar o Módulo de Geração</h3>
      <p>Direcione-se ao módulo de geração de remessa CNAB e utilize os filtros para localizar o título desejado.</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_5.png">
      </div>
    </div>
    
    <div class="step">
      <h3>Passo 3: Gerar Remessa</h3>
      <p>Após verificar se o título correto está selecionado, clique em "Gerar Remessa" para criar o arquivo de texto.</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_6.png">
      </div>
    </div>
    
    <div class="step">
      <h3>Passo 4: Download e Envio ao Banco</h3>
      <p>Faça o download do arquivo gerado e encaminhe-o para o banco. Após processamento, o boleto ficará disponível para pagamento.</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_7.png">
      </div>
    </div>
  </div>
  
  <div class="info-box">
    <h4>Onde Gerar o Boleto</h4>
    <p>O boleto pode ser gerado tanto no módulo de boletos em lote quanto no próprio Contas a Receber.</p>
  </div>
</section>

<section class="retorno-section">
  <h2>Retorno CNAB</h2>
  
  <div class="concept-card">
    <p>O <strong>Retorno CNAB</strong> é um arquivo disponibilizado pelo banco para confirmar operações de boletos, como:</p>
    <ul>
      <li>Entrada confirmada</li>
      <li>Entrada rejeitada</li>
      <li>Alterações de dados</li>
      <li>Diversas outras operações</li>
    </ul>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_8.png">
  </div>
  
  <h3>Processamento do Retorno CNAB</h3>
  <p>O processamento do arquivo de retorno no sistema permite alterar o status do título no Contas a Receber (ex: para "Em cartório") ou no movimento financeiro (se liquidado).</p>
  
  <div class="step-by-step">
    <div class="step">
      <h4>Passo a Passo: Processar Retorno</h4>
      <ol>
        <li>Acesse o módulo Financeiro e navegue até a aba "Retorno CNAB"</li>
        <li>Selecione a conta bancária correspondente à remessa</li>
        <li>Selecione o arquivo de retorno a ser processado</li>
      </ol>
    </div>
  </div>
  
  <!--<div class="image-placeholder">
    <p>[Imagem: Tela de processamento de retorno CNAB]</p>
  </div>-->
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .layout-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .layout-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .layout-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .step-by-step .step {
    background: #e8f5e9;
    padding: 20px;
    margin: 15px 0;
    border-left: 4px solid #4caf50;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .step-by-step .step:hover {
    background: #d4edda;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .info-box {
    border-left: 4px solid #2196F3;
    background-color: #e3f2fd;
    padding: 15px;
    margin: 20px 0;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  ol {
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`},{id:"processo-faturamento-empresarial",title:"Processo de Faturamento Empresarial",description:"Manual completo sobre o processo de faturamento, incluindo parametrizações, tipos de faturamento e geração de documentos fiscais.",tags:["Empresas"],group:"Faturamento",content:`
<div class="welcome-banner">
  <h1>Bem-vindo ao Módulo de Faturamento!</h1>
  <p>Este guia foi criado para ajudar você a compreender todo o processo de faturamento da empresa, desde as parametrizações iniciais até a geração de documentos fiscais.</p>
</div>

<section class="core-concepts">
  <h2>O que é o Faturamento?</h2>
  <div class="concept-card">
    <p>Em resumo, o faturamento é um <strong>processo periódico</strong> onde todos os valores a serem cobrados dos clientes são analisados por meio de relatórios e demonstrativos (no caso de contratos).</p>
    <p>Após essa análise é feito o faturamento, no qual o sistema gera um boleto e uma RPS (Nota Fiscal) com os valores obtidos do relatório e demonstrativo.</p>
    
    <div class="alert-box">
      <h4>Atenção!</h4>
      <p>É crucial revisar tudo antes de faturar, pois não é possível voltar atrás após a confirmação.</p>
    </div>
    
    <h4>Tipos de Faturamento:</h4>
    <ul>
      <li><strong>Faturamento de Contratos</strong> - Para cobranças recorrentes baseadas em contratos</li>
      <li><strong>Faturamento de Pedidos de Vendas</strong> - Para vendas avulsas ou pontuais</li>
    </ul>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_1.png">
  </div>
</section>

<section class="parametrizacao-section">
  <h2>Parametrizações Iniciais</h2>
  
  <div class="document-card">
    <h3 class="document-title">Unidades - Configuração de Impostos</h3>
    <div class="document-content">
      <p>Antes do faturamento em si, é necessário configurar os dados referentes aos impostos que serão cobrados.</p>
      
      <h4>Como acessar:</h4>
      <p>Menu >> Configurações >> Unidades >> Adm</p>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_2.png">
      </div>
      
      <h4>Importante:</h4>
      <ul>
        <li>Alguns valores de impostos são preenchidos nessa aba Adm</li>
        <li>Atenção especial ao código de ISS que também precisa ser cadastrado</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Empresas - Configuração Financeira</h3>
    <div class="document-content">
      <p>Para cada cliente, dependendo do município e tipo de empresa, os valores de impostos podem variar.</p>
      
      <h4>Como acessar:</h4>
      <p>Menu >> Cadastros >> Empresas >> Financeiro</p>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_3.png">
      </div>
      
      <h4>Configurações importantes:</h4>
      <ul>
        <li>Impostos que serão cobrados para cada cliente</li>
        <li>Tipo de empresa</li>
        <li>Taxas administrativas da conta bancária (configurada no cadastro do Banco)</li>
      </ul>
    </div>
  </div>
</section>

<section class="faturamento-contrato">
  <h2>Faturamento de Contrato</h2>
  
  <div class="document-card">
    <h3 class="document-title">Parametrização do Contrato</h3>
    <div class="document-content">
      <p>É necessário primeiramente parametrizar o contrato do cliente no cadastro de Empresas.</p>
      
      <h4>Como acessar:</h4>
      <p>Empresas >> Financeiro >> Parametrizar Cobrança</p>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_4.png">
      </div>
      
      <h4>Configurações importantes na aba "Parâmetros de Faturamento":</h4>
      <ul>
        <li>Unidade que vai faturar</li>
        <li>Conta bancária de recebimento do boleto</li>
        <li>Último mês de cobrança</li>
      </ul>
      
      <h4>Na aba Financeiro deve ser informado:</h4>
      <ul>
        <li>Dia de vencimento do boleto</li>
        <li>Dia do fechamento (o dia em que finaliza a cobrança de um mês e inicia uma nova)</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Processo de Faturamento</h3>
    <div class="document-content">
      <h4>Como realizar o faturamento:</h4>
      <ol>
        <li>Acesse o Menu >> Faturamento >> Faturamento de Contrato</li>
        <li>Pesquise pela empresa e o período</li>
        <li>Gere o demonstrativo</li>
        <li>Compare com os relatórios:
          <ul>
            <li>Faturamento >> Relatório de Funcionários Para Cobrança</li>
            <li>Faturamento >> Relatório de Exames Para Cobrança</li>
          </ul>
        </li>
        <li>Se todos os dados estiverem corretos, realize o faturamento</li>
      </ol>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_5.png">
      </div>
      
      <div class="note-box">
        <h4>Observação:</h4>
        <p>Para os pedidos parcelados, utilize o Menu >> Faturamento >> Faturamento de Notas Parciais.</p>
      </div>
    </div>
  </div>
</section>

<section class="faturamento-pedidos">
  <h2>Faturamento de Pedidos</h2>
  
  <div class="document-card">
    <h3 class="document-title">Processo de Faturamento de Pedidos</h3>
    <div class="document-content">
      <p>Para esse tipo de faturamento, é necessário que o pedido de venda seja aprovado previamente.</p>
      
      <h4>Fluxo do processo:</h4>
      <ol>
        <li>Pedido de venda realizado no Menu >> Comercial >> Pedidos</li>
        <li>Pedido é aprovado</li>
        <li>Pedido fica disponível para faturamento em Menu >> Faturamento >> Faturamento de Pedidos</li>
      </ol>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_6.png">
      </div>
    </div>
  </div>
</section>

<section class="geracao-documentos">
  <h2>Geração de RPS e Remessa CNAB</h2>
  
  <div class="document-card">
    <h3 class="document-title">Processo Pós-Faturamento</h3>
    <div class="document-content">
      <p>Após a realização do faturamento, o sistema automaticamente gera:</p>
      <ul>
        <li><strong>Título (boleto)</strong> no Menu >> Financeiro >> Contas a Receber</li>
        <li><strong>Arquivos RPS e CNAB</strong> para serem gerados posteriormente</li>
      </ul>
      
      <h4>Geração dos arquivos:</h4>
      <ul>
        <li>RPS: Menu >> Faturamento >> Gerar NFS-e</li>
        <li>CNAB: Menu >> Financeiro >> Remessa CNAB</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">CNAB - Remessa Bancária</h3>
    <div class="document-content">
      <p>O arquivo CNAB será encaminhado ao banco para validação do título gerado pelo sistema.</p>
      
      <h4>Características do processo:</h4>
      <ul>
        <li>A remessa CNAB leva cerca de 1 dia para que o banco processe</li>
        <li>Após esse procedimento, pode processar o retorno em Menu >> Financeiro >> Retorno CNAB</li>
        <li>O sistema informa o status atual do título</li>
        <li>Caso esteja pago, dá baixa no boleto gerado no sistema</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">RPS - Nota Fiscal</h3>
    <div class="document-content">
      <p>O arquivo RPS será encaminhado para prefeitura com as informações preenchidas no sistema.</p>
      
      <h4>Características do processo:</h4>
      <ul>
        <li>Contém todas as informações preenchidas no sistema, incluindo impostos e valores</li>
        <li>Gera uma nota fiscal que será encaminhada automaticamente para o cliente</li>
      </ul>
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .document-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .alert-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .note-box {
    border-left: 4px solid #4caf50;
    background-color: #e8f5e9;
    padding: 15px;
    margin: 20px 0;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  ol {
    padding-left: 20px;
  }
</style>
`}]},Cr={id:"formatacao",title:"Formatação",description:"Módulo de Formatação e Configuração de Sistemas",icon:'<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,18H7V16H17V18M15,14H9V12H15V14M15,10H9V8H15V10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/></svg>',topics:[{id:"guia-instalacao-sistemas",title:"Guia Completo: Instalação de Sistemas",description:"Passo a passo para instalar sistemas operacionais",group:"Instalação",tags:["windows","linux","instalação","bios"],content:`
        <div class="welcome-banner">
          <h1>Guia Completo de Instalação</h1>
          <p>Tudo o que você precisa saber para instalar sistemas operacionais</p>
        </div>
        <section>
          <h2>Pré-requisitos</h2>
          <ul>
            <li>Mídia de instalação (USB ou DVD)</li>
            <li>Backup dos dados importantes</li>
            <li>Drivers atualizados</li>
          </ul>
        </section>
      `,manualSuggestions:[{categoryId:"formatacao",topicId:"pos-formatacao-checklist"}]},{id:"dual-boot-windows-linux",title:"Configurando Dual Boot: Windows + Linux",description:"Como instalar e configurar dois sistemas no mesmo computador",group:"Instalação",tags:["windows","linux","dual-boot","partição"],content:"..."},{id:"pos-formatacao-checklist",title:"Checklist Pós-Formatação",description:"7 cuidados essenciais após formatar o computador",group:"Configuração",tags:["windows","drivers","segurança","otimização"],content:"..."},{id:"otimizando-windows-10",title:"Otimizando o Windows 10 para Desempenho",description:"Configurações para melhorar velocidade e responsividade",group:"Configuração",tags:["windows","otimização","desempenho","ssd"],content:"..."},{id:"drivers-essenciais",title:"Drivers Essenciais Pós-Formatação",description:"Lista dos drivers mais importantes para instalar",group:"Drivers",tags:["drivers","hardware","placa-de-video","som"],content:"..."},{id:"solucionar-problemas-drivers",title:"Como Solucionar Problemas com Drivers",description:"Identificando e corrigindo conflitos de drivers",group:"Drivers",tags:["drivers","erros","conflitos","dispositivos"],content:"..."},{id:"seguranca-pos-formatacao",title:"Proteção Essencial Após Formatação",description:"Configurações de segurança fundamentais",group:"Segurança",tags:["antivirus","firewall","backup","atualizações"],content:"..."},{id:"backup-automatizado",title:"Configurando Backup Automatizado",description:"Como criar rotinas de backup eficientes",group:"Segurança",tags:["backup","nuvem","automatização","recuperação"],content:"...",manualSuggestions:[{categoryId:"formatacao",topicId:"seguranca-pos-formatacao"},{categoryId:"formatacao",topicId:"drivers-essenciais"}]}]},ae=[vr,br,xr,Sr,wr,Ar,Cr];function zo(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function yr(a,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function Fo(a,e,o){return e&&yr(a.prototype,e),a}function kr(a,e,o){return e in a?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o,a}function Ri(a,e){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),o.push.apply(o,t)}return o}function sa(a){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Ri(Object(o),!0).forEach(function(t){kr(a,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):Ri(Object(o)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(o,t))})}return a}function tt(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&Aa(a,e)}function le(a){return le=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},le(a)}function Aa(a,e){return Aa=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},Aa(a,e)}function Er(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function st(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Pr(a,e){return e&&(typeof e=="object"||typeof e=="function")?e:st(a)}function rt(a){var e=Er();return function(){var t=le(a),i;if(e){var s=le(this).constructor;i=Reflect.construct(t,arguments,s)}else i=t.apply(this,arguments);return Pr(this,i)}}function Tr(a,e){for(;!Object.prototype.hasOwnProperty.call(a,e)&&(a=le(a),a!==null););return a}function Se(a,e,o){return typeof Reflect<"u"&&Reflect.get?Se=Reflect.get:Se=function(i,s,r){var d=Tr(i,s);if(d){var n=Object.getOwnPropertyDescriptor(d,s);return n.get?n.get.call(r):n.value}},Se(a,e,o||a)}function Be(a,e){return Or(a)||Mr(a,e)||nt(a,e)||Nr()}function Rr(a){return Ir(a)||Dr(a)||nt(a)||Lr()}function Ir(a){if(Array.isArray(a))return Ca(a)}function Or(a){if(Array.isArray(a))return a}function Dr(a){if(typeof Symbol<"u"&&Symbol.iterator in Object(a))return Array.from(a)}function Mr(a,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(a)))){var o=[],t=!0,i=!1,s=void 0;try{for(var r=a[Symbol.iterator](),d;!(t=(d=r.next()).done)&&(o.push(d.value),!(e&&o.length===e));t=!0);}catch(n){i=!0,s=n}finally{try{!t&&r.return!=null&&r.return()}finally{if(i)throw s}}return o}}function nt(a,e){if(a){if(typeof a=="string")return Ca(a,e);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ca(a,e)}}function Ca(a,e){(e==null||e>a.length)&&(e=a.length);for(var o=0,t=new Array(e);o<e;o++)t[o]=a[o];return t}function Lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ge={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},dt=(function(){function a(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};zo(this,a),Object.assign(this,Ge,e),this.smartphone=Ge.smartphone,e.smartphone&&Object.assign(this.smartphone,e.smartphone),this.tablet=Ge.tablet,e.tablet&&Object.assign(this.tablet,e.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),this.direction==="horizontal"?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return Fo(a,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var o=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame(function(){o.resize(),o.resizeTick=!1}))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var o=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",o!=this.context){var t=o=="desktop"?this.smooth:this[o].smooth,i=this.context=="desktop"?this.smooth:this[this.context].smooth;t!=i&&window.location.reload()}}}},{key:"initEvents",value:function(){var o=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach(function(t){t.addEventListener("click",o.setScrollTo,!1)})}},{key:"setScrollTo",value:function(o){o.preventDefault(),this.scrollTo(o.currentTarget.getAttribute("data-".concat(this.name,"-href"))||o.currentTarget.getAttribute("href"),{offset:o.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(o){var t=this,i=this.instance.scroll.y,s=i+this.windowHeight,r=this.instance.scroll.x,d=r+this.windowWidth;Object.entries(this.els).forEach(function(n){var l=Be(n,2),p=l[0],u=l[1];if(u&&(!u.inView||o)&&(t.direction==="horizontal"?d>=u.left&&r<u.right&&t.setInView(u,p):s>=u.top&&i<u.bottom&&t.setInView(u,p)),u&&u.inView)if(t.direction==="horizontal"){var m=u.right-u.left;u.progress=(t.instance.scroll.x-(u.left-t.windowWidth))/(m+t.windowWidth),(d<u.left||r>u.right)&&t.setOutOfView(u,p)}else{var g=u.bottom-u.top;u.progress=(t.instance.scroll.y-(u.top-t.windowHeight))/(g+t.windowHeight),(s<u.top||i>u.bottom)&&t.setOutOfView(u,p)}}),this.hasScrollTicking=!1}},{key:"setInView",value:function(o,t){this.els[t].inView=!0,o.el.classList.add(o.class),this.currentElements[t]=o,o.call&&this.hasCallEventSet&&(this.dispatchCall(o,"enter"),o.repeat||(this.els[t].call=!1))}},{key:"setOutOfView",value:function(o,t){var i=this;this.els[t].inView=!1,Object.keys(this.currentElements).forEach(function(s){s===t&&delete i.currentElements[s]}),o.call&&this.hasCallEventSet&&this.dispatchCall(o,"exit"),o.repeat&&o.el.classList.remove(o.class)}},{key:"dispatchCall",value:function(o,t){this.callWay=t,this.callValue=o.call.split(",").map(function(s){return s.trim()}),this.callObj=o,this.callValue.length==1&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var o=new Event(this.namespace+"scroll");this.el.dispatchEvent(o)}},{key:"setEvents",value:function(o,t){this.listeners[o]||(this.listeners[o]=[]);var i=this.listeners[o];i.push(t),i.length===1&&this.el.addEventListener(this.namespace+o,this.checkEvent,!1),o==="call"&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(o,t){if(this.listeners[o]){var i=this.listeners[o],s=i.indexOf(t);s<0||(i.splice(s,1),i.index===0&&this.el.removeEventListener(this.namespace+o,this.checkEvent,!1))}}},{key:"checkEvent",value:function(o){var t=this,i=o.type.replace(this.namespace,""),s=this.listeners[i];!s||s.length===0||s.forEach(function(r){switch(i){case"scroll":return r(t.instance);case"call":return r(t.callValue,t.callWay,t.callObj);default:return r()}})}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(o,t){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var o=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach(function(t){o.el.removeEventListener(o.namespace+t,o.checkEvent,!1)}),this.listeners={},this.scrollToEls.forEach(function(t){t.removeEventListener("click",o.setScrollTo,!1)}),this.html.classList.remove(this.initClass)}}]),a})(),zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lt(a,e){return e={exports:{}},a(e,e.exports),e.exports}var ct=lt(function(a,e){(function(){function o(){var t=window,i=document;if("scrollBehavior"in i.documentElement.style&&t.__forceSmoothScrollPolyfill__!==!0)return;var s=t.HTMLElement||t.Element,r=468,d={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||u,scrollIntoView:s.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;function l(h){var x=["MSIE ","Trident/","Edge/"];return new RegExp(x.join("|")).test(h)}var p=l(t.navigator.userAgent)?1:0;function u(h,x){this.scrollLeft=h,this.scrollTop=x}function m(h){return .5*(1-Math.cos(Math.PI*h))}function g(h){if(h===null||typeof h!="object"||h.behavior===void 0||h.behavior==="auto"||h.behavior==="instant")return!0;if(typeof h=="object"&&h.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+h.behavior+" is not a valid value for enumeration ScrollBehavior.")}function v(h,x){if(x==="Y")return h.clientHeight+p<h.scrollHeight;if(x==="X")return h.clientWidth+p<h.scrollWidth}function y(h,x){var I=t.getComputedStyle(h,null)["overflow"+x];return I==="auto"||I==="scroll"}function T(h){var x=v(h,"Y")&&y(h,"Y"),I=v(h,"X")&&y(h,"X");return x||I}function F(h){for(;h!==i.body&&T(h)===!1;)h=h.parentNode||h.host;return h}function O(h){var x=n(),I,A,M,P=(x-h.startTime)/r;P=P>1?1:P,I=m(P),A=h.startX+(h.x-h.startX)*I,M=h.startY+(h.y-h.startY)*I,h.method.call(h.scrollable,A,M),(A!==h.x||M!==h.y)&&t.requestAnimationFrame(O.bind(t,h))}function R(h,x,I){var A,M,P,N,L=n();h===i.body?(A=t,M=t.scrollX||t.pageXOffset,P=t.scrollY||t.pageYOffset,N=d.scroll):(A=h,M=h.scrollLeft,P=h.scrollTop,N=u),O({scrollable:A,method:N,startTime:L,startX:M,startY:P,x,y:I})}t.scroll=t.scrollTo=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){d.scroll.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:t.scrollY||t.pageYOffset);return}R.call(t,i.body,arguments[0].left!==void 0?~~arguments[0].left:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(arguments[0]!==void 0){if(g(arguments[0])){d.scrollBy.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}R.call(t,i.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},s.prototype.scroll=s.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");d.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var h=arguments[0].left,x=arguments[0].top;R.call(this,this,typeof h>"u"?this.scrollLeft:~~h,typeof x>"u"?this.scrollTop:~~x)}},s.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){d.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},s.prototype.scrollIntoView=function(){if(g(arguments[0])===!0){d.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var h=F(this),x=h.getBoundingClientRect(),I=this.getBoundingClientRect();h!==i.body?(R.call(this,h,h.scrollLeft+I.left-x.left,h.scrollTop+I.top-x.top),t.getComputedStyle(h).position!=="fixed"&&t.scrollBy({left:x.left,top:x.top,behavior:"smooth"})):t.scrollBy({left:I.left,top:I.top,behavior:"smooth"})}}a.exports={polyfill:o}})()});ct.polyfill;var Fr=(function(a){tt(o,a);var e=rt(o);function o(){var t,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zo(this,o),t=e.call(this,i),t.resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",t.checkScroll,!1),window.smoothscrollPolyfill===void 0&&(window.smoothscrollPolyfill=ct,window.smoothscrollPolyfill.polyfill()),t}return Fo(o,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),Se(le(o.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var i=this;Se(le(o.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame(function(){i.detectElements()}),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var i=this;this.els={};var s=this.el.querySelectorAll("[data-"+this.name+"]");s.forEach(function(r,d){r.getBoundingClientRect();var n=r.dataset[i.name+"Class"]||i.class,l=typeof r.dataset[i.name+"Id"]=="string"?r.dataset[i.name+"Id"]:d,p,u,m=typeof r.dataset[i.name+"Offset"]=="string"?r.dataset[i.name+"Offset"].split(","):i.offset,g=r.dataset[i.name+"Repeat"],v=r.dataset[i.name+"Call"],y=r.dataset[i.name+"Target"],T;y!==void 0?T=document.querySelector("".concat(y)):T=r;var F=T.getBoundingClientRect();p=F.top+i.instance.scroll.y,u=F.left+i.instance.scroll.x;var O=p+T.offsetHeight,R=u+T.offsetWidth;g=="false"?g=!1:g!=null?g=!0:g=i.repeat;var h=i.getRelativeOffset(m);p=p+h[0],O=O-h[1];var x={el:r,targetEl:T,id:l,class:n,top:p,bottom:O,left:u,right:R,offset:m,progress:0,repeat:g,inView:!1,call:v};i.els[l]=x,r.classList.contains(n)&&i.setInView(i.els[l],l)})}},{key:"updateElements",value:function(){var i=this;Object.entries(this.els).forEach(function(s){var r=Be(s,2),d=r[0],n=r[1],l=n.targetEl.getBoundingClientRect().top+i.instance.scroll.y,p=l+n.targetEl.offsetHeight,u=i.getRelativeOffset(n.offset);i.els[d].top=l+u[0],i.els[d].bottom=p-u[1]}),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(i){var s=[0,0];if(i)for(var r=0;r<i.length;r++)typeof i[r]=="string"?i[r].includes("%")?s[r]=parseInt(i[r].replace("%","")*this.windowHeight/100):s[r]=parseInt(i[r]):s[r]=i[r];return s}},{key:"scrollTo",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=parseInt(s.offset)||0,d=s.callback?s.callback:!1;if(typeof i=="string"){if(i==="top")i=this.html;else if(i==="bottom")i=this.html.offsetHeight-window.innerHeight;else if(i=document.querySelector(i),!i)return}else if(typeof i=="number")i=parseInt(i);else if(!(i&&i.tagName)){console.warn("`target` parameter is not valid");return}typeof i!="number"?r=i.getBoundingClientRect().top+r+this.instance.scroll.y:r=i+r;var n=function(){return parseInt(window.pageYOffset)===parseInt(r)};if(d)if(n()){d();return}else{var l=function p(){n()&&(window.removeEventListener("scroll",p),d())};window.addEventListener("scroll",l)}window.scrollTo({top:r,behavior:s.duration===0?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){Se(le(o.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),o})(dt);var Ii=Object.getOwnPropertySymbols,_r=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable;function Br(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function Gr(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var e={},o=0;o<10;o++)e["_"+String.fromCharCode(o)]=o;var t=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(t.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var $r=Gr()?Object.assign:function(a,e){for(var o,t=Br(a),i,s=1;s<arguments.length;s++){o=Object(arguments[s]);for(var r in o)_r.call(o,r)&&(t[r]=o[r]);if(Ii){i=Ii(o);for(var d=0;d<i.length;d++)qr.call(o,i[d])&&(t[i[d]]=o[i[d]])}}return t};function pt(){}pt.prototype={on:function(a,e,o){var t=this.e||(this.e={});return(t[a]||(t[a]=[])).push({fn:e,ctx:o}),this},once:function(a,e,o){var t=this;function i(){t.off(a,i),e.apply(o,arguments)}return i._=e,this.on(a,i,o)},emit:function(a){var e=[].slice.call(arguments,1),o=((this.e||(this.e={}))[a]||[]).slice(),t=0,i=o.length;for(t;t<i;t++)o[t].fn.apply(o[t].ctx,e);return this},off:function(a,e){var o=this.e||(this.e={}),t=o[a],i=[];if(t&&e)for(var s=0,r=t.length;s<r;s++)t[s].fn!==e&&t[s].fn._!==e&&i.push(t[s]);return i.length?o[a]=i:delete o[a],this}};var jr=pt,Hr=lt(function(a,e){(function(){var o;o=e!==null?e:this,o.Lethargy=(function(){function t(i,s,r,d){this.stability=i!=null?Math.abs(i):8,this.sensitivity=s!=null?1+Math.abs(s):100,this.tolerance=r!=null?1+Math.abs(r):1.1,this.delay=d??150,this.lastUpDeltas=(function(){var n,l,p;for(p=[],n=1,l=this.stability*2;1<=l?n<=l:n>=l;1<=l?n++:n--)p.push(null);return p}).call(this),this.lastDownDeltas=(function(){var n,l,p;for(p=[],n=1,l=this.stability*2;1<=l?n<=l:n>=l;1<=l?n++:n--)p.push(null);return p}).call(this),this.deltasTimestamp=(function(){var n,l,p;for(p=[],n=1,l=this.stability*2;1<=l?n<=l:n>=l;1<=l?n++:n--)p.push(null);return p}).call(this)}return t.prototype.check=function(i){var s;return i=i.originalEvent||i,i.wheelDelta!=null?s=i.wheelDelta:i.deltaY!=null?s=i.deltaY*-40:(i.detail!=null||i.detail===0)&&(s=i.detail*-40),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),s>0?(this.lastUpDeltas.push(s),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(s),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(i){var s,r,d,n,l,p,u;return s=i===-1?this.lastDownDeltas:this.lastUpDeltas,s[0]===null?i:this.deltasTimestamp[this.stability*2-2]+this.delay>Date.now()&&s[0]===s[this.stability*2-1]?!1:(d=s.slice(0,this.stability),r=s.slice(this.stability,this.stability*2),u=d.reduce(function(m,g){return m+g}),l=r.reduce(function(m,g){return m+g}),p=u/d.length,n=l/r.length,Math.abs(p)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)?i:!1)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t})()}).call(zr)}),oe=(function(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}})(),Wr=Object.prototype.toString,Vr=Object.prototype.hasOwnProperty,Ur=function(a){if(!a)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(e.length===0)for(var o in a)Vr.call(a,o)&&typeof a[o]=="function"&&Wr.call(a[o])=="[object Function]"&&e.push(o);for(var t=0;t<e.length;t++){var i=e[t];a[i]=Yr(a[i],a)}};function Yr(a,e){return function(){return a.apply(e,arguments)}}var Qr=Hr.Lethargy,Re="virtualscroll",Jr=ie,io={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32};function ie(a){Ur(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,a&&a.el&&(this.el=a.el,delete a.el),this.options=$r({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},a),this.options.limitInertia&&(this._lethargy=new Qr),this._emitter=new jr,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,this.options.passive!==void 0&&(this.listenerOptions={passive:this.options.passive})}ie.prototype._notify=function(a){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(Re,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:a})};ie.prototype._onWheel=function(a){var e=this.options;if(!(this._lethargy&&this._lethargy.check(a)===!1)){var o=this._event;o.deltaX=a.wheelDeltaX||a.deltaX*-1,o.deltaY=a.wheelDeltaY||a.deltaY*-1,oe.isFirefox&&a.deltaMode==1&&(o.deltaX*=e.firefoxMultiplier,o.deltaY*=e.firefoxMultiplier),o.deltaX*=e.mouseMultiplier,o.deltaY*=e.mouseMultiplier,this._notify(a)}};ie.prototype._onMouseWheel=function(a){if(!(this.options.limitInertia&&this._lethargy.check(a)===!1)){var e=this._event;e.deltaX=a.wheelDeltaX?a.wheelDeltaX:0,e.deltaY=a.wheelDeltaY?a.wheelDeltaY:a.wheelDelta,this._notify(a)}};ie.prototype._onTouchStart=function(a){var e=a.targetTouches?a.targetTouches[0]:a;this.touchStartX=e.pageX,this.touchStartY=e.pageY};ie.prototype._onTouchMove=function(a){var e=this.options;e.preventTouch&&!a.target.classList.contains(e.unpreventTouchClass)&&a.preventDefault();var o=this._event,t=a.targetTouches?a.targetTouches[0]:a;o.deltaX=(t.pageX-this.touchStartX)*e.touchMultiplier,o.deltaY=(t.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=t.pageX,this.touchStartY=t.pageY,this._notify(a)};ie.prototype._onKeyDown=function(a){var e=this._event;e.deltaX=e.deltaY=0;var o=window.innerHeight-40;switch(a.keyCode){case io.LEFT:case io.UP:e.deltaY=this.options.keyStep;break;case io.RIGHT:case io.DOWN:e.deltaY=-this.options.keyStep;break;case a.shiftKey:e.deltaY=o;break;case io.SPACE:e.deltaY=-o;break;default:return}this._notify(a)};ie.prototype._bind=function(){oe.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),oe.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),oe.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),oe.hasPointer&&oe.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),oe.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)};ie.prototype._unbind=function(){oe.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),oe.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),oe.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),oe.hasPointer&&oe.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),oe.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)};ie.prototype.on=function(a,e){this._emitter.on(Re,a,e);var o=this._emitter.e;o&&o[Re]&&o[Re].length===1&&this._bind()};ie.prototype.off=function(a,e){this._emitter.off(Re,a,e);var o=this._emitter.e;(!o[Re]||o[Re].length<=0)&&this._unbind()};ie.prototype.reset=function(){var a=this._event;a.x=0,a.y=0};ie.prototype.destroy=function(){this._emitter.off(),this._unbind()};function ra(a,e,o){return(1-o)*a+o*e}function te(a){var e={};if(window.getComputedStyle){var o=getComputedStyle(a),t=o.transform||o.webkitTransform||o.mozTransform,i=t.match(/^matrix3d\((.+)\)$/);return i?(e.x=i?parseFloat(i[1].split(", ")[12]):0,e.y=i?parseFloat(i[1].split(", ")[13]):0):(i=t.match(/^matrix\((.+)\)$/),e.x=i?parseFloat(i[1].split(", ")[4]):0,e.y=i?parseFloat(i[1].split(", ")[5]):0),e}}function na(a){for(var e=[];a&&a!==document;a=a.parentNode)e.push(a);return e}var Xr=4,Kr=.001,Zr=1e-7,en=10,ro=11,ko=1/(ro-1),on=typeof Float32Array=="function";function ut(a,e){return 1-3*e+3*a}function mt(a,e){return 3*e-6*a}function gt(a){return 3*a}function Do(a,e,o){return((ut(e,o)*a+mt(e,o))*a+gt(e))*a}function ht(a,e,o){return 3*ut(e,o)*a*a+2*mt(e,o)*a+gt(e)}function an(a,e,o,t,i){var s,r,d=0;do r=e+(o-e)/2,s=Do(r,t,i)-a,s>0?o=r:e=r;while(Math.abs(s)>Zr&&++d<en);return r}function tn(a,e,o,t){for(var i=0;i<Xr;++i){var s=ht(e,o,t);if(s===0)return e;var r=Do(e,o,t)-a;e-=r/s}return e}function sn(a){return a}var rn=function(e,o,t,i){if(!(0<=e&&e<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===o&&t===i)return sn;for(var s=on?new Float32Array(ro):new Array(ro),r=0;r<ro;++r)s[r]=Do(r*ko,e,t);function d(n){for(var l=0,p=1,u=ro-1;p!==u&&s[p]<=n;++p)l+=ko;--p;var m=(n-s[p])/(s[p+1]-s[p]),g=l+m*ko,v=ht(g,e,t);return v>=Kr?tn(n,g,e,t):v===0?g:an(n,l,l+ko,e,t)}return function(l){return l===0?0:l===1?1:Do(d(l),o,i)}},be={UP:38,DOWN:40,SPACE:32,TAB:9,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35},nn=(function(a){tt(o,a);var e=rt(o);function o(){var t,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zo(this,o),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),t=e.call(this,i),t.inertia&&(t.lerp=t.inertia*.1),t.isScrolling=!1,t.isDraggingScrollbar=!1,t.isTicking=!1,t.hasScrollTicking=!1,t.parallaxElements={},t.stop=!1,t.scrollbarContainer=i.scrollbarContainer,t.checkKey=t.checkKey.bind(st(t)),window.addEventListener("keydown",t.checkKey,!1),t}return Fo(o,[{key:"init",value:function(){var i=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=sa({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new Jr({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on(function(s){i.stop||i.isDraggingScrollbar||requestAnimationFrame(function(){i.updateDelta(s),i.isScrolling||i.startScrolling()})}),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),Se(le(o.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,this.direction==="horizontal"){for(var i=0,s=this.el.children,r=0;r<s.length;r++)i+=s[r].offsetWidth;this.instance.limit.x=i-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(i){var s=this;if(this.stop){i.keyCode==be.TAB&&requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0});return}switch(i.keyCode){case be.TAB:requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0,s.scrollTo(document.activeElement,{offset:-window.innerHeight/2})});break;case be.UP:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]-=240);break;case be.DOWN:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]+=240);break;case be.PAGEUP:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case be.PAGEDOWN:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case be.HOME:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case be.END:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case be.SPACE:this.isActiveElementScrollSensitive()&&(i.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"isActiveElementScrollSensitive",value:function(){return!(document.activeElement instanceof HTMLInputElement)&&!(document.activeElement instanceof HTMLTextAreaElement)&&!(document.activeElement instanceof HTMLButtonElement)&&!(document.activeElement instanceof HTMLSelectElement)}},{key:"checkScroll",value:function(){var i=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(s||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame(function(){return i.checkScroll()}),this.hasScrollTicking=!0),this.updateScroll();var r=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),d=Date.now()-this.startScrollTs;if(!this.animatingScroll&&d>100&&(r<.5&&this.instance.delta[this.directionAxis]!=0||r<.5&&this.instance.delta[this.directionAxis]==0)&&this.stopScrolling(),Object.entries(this.sections).forEach(function(l){var p=Be(l,2);p[0];var u=p[1];u.persistent||i.instance.scroll[i.directionAxis]>u.offset[i.directionAxis]&&i.instance.scroll[i.directionAxis]<u.limit[i.directionAxis]?(i.direction==="horizontal"?i.transform(u.el,-i.instance.scroll[i.directionAxis],0):i.transform(u.el,0,-i.instance.scroll[i.directionAxis]),u.inView||(u.inView=!0,u.el.style.opacity=1,u.el.style.pointerEvents="all",u.el.setAttribute("data-".concat(i.name,"-section-inview"),""))):((u.inView||s)&&(u.inView=!1,u.el.style.opacity=0,u.el.style.pointerEvents="none",u.el.removeAttribute("data-".concat(i.name,"-section-inview"))),i.transform(u.el,0,0))}),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var n=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];this.direction==="horizontal"?this.transform(this.scrollbarThumb,n,0):this.transform(this.scrollbarThumb,0,n)}Se(le(o.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(i){var s,r=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;r==="both"?s=i.deltaX+i.deltaY:r==="vertical"?s=i.deltaY:r==="horizontal"?s=i.deltaX:s=i.deltaY,this.instance.delta[this.directionAxis]-=s*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(i){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=ra(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?this.instance.direction!=="right"&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&this.instance.direction!=="left"&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(i){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(i){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(i){var s=this;this.isDraggingScrollbar&&requestAnimationFrame(function(){var r=(i.clientX-s.scrollbarBCR.left)*100/s.scrollbarWidth*s.instance.limit.x/100,d=(i.clientY-s.scrollbarBCR.top)*100/s.scrollbarHeight*s.instance.limit.y/100;d>0&&d<s.instance.limit.y&&(s.instance.delta.y=d),r>0&&r<s.instance.limit.x&&(s.instance.delta.x=r)})}},{key:"addElements",value:function(){var i=this;this.els={},this.parallaxElements={};var s=this.el.querySelectorAll("[data-".concat(this.name,"]"));s.forEach(function(r,d){var n=na(r),l=Object.entries(i.sections).map(function(We){var Ve=Be(We,2);Ve[0];var B=Ve[1];return B}).find(function(We){return n.includes(We.el)}),p=r.dataset[i.name+"Class"]||i.class,u=typeof r.dataset[i.name+"Id"]=="string"?r.dataset[i.name+"Id"]:"el"+d,m,g,v=r.dataset[i.name+"Repeat"],y=r.dataset[i.name+"Call"],T=r.dataset[i.name+"Position"],F=r.dataset[i.name+"Delay"],O=r.dataset[i.name+"Direction"],R=typeof r.dataset[i.name+"Sticky"]=="string",h=r.dataset[i.name+"Speed"]?parseFloat(r.dataset[i.name+"Speed"])/10:!1,x=typeof r.dataset[i.name+"Offset"]=="string"?r.dataset[i.name+"Offset"].split(","):i.offset,I=r.dataset[i.name+"Target"],A;I!==void 0?A=document.querySelector("".concat(I)):A=r;var M=A.getBoundingClientRect();l===null||l.inView?(m=M.top+i.instance.scroll.y-te(A).y,g=M.left+i.instance.scroll.x-te(A).x):(m=M.top-te(l.el).y-te(A).y,g=M.left-te(l.el).x-te(A).x);var P=m+A.offsetHeight,N=g+A.offsetWidth,L={x:(N-g)/2+g,y:(P-m)/2+m};if(R){var U=r.getBoundingClientRect(),ke=U.top,j=U.left,ge={x:j-g,y:ke-m};m+=window.innerHeight,g+=window.innerWidth,P=ke+A.offsetHeight-r.offsetHeight-ge[i.directionAxis],N=j+A.offsetWidth-r.offsetWidth-ge[i.directionAxis],L={x:(N-g)/2+g,y:(P-m)/2+m}}v=="false"?v=!1:v!=null?v=!0:v=i.repeat;var Y=[0,0];if(x)if(i.direction==="horizontal"){for(var _=0;_<x.length;_++)typeof x[_]=="string"?x[_].includes("%")?Y[_]=parseInt(x[_].replace("%","")*i.windowWidth/100):Y[_]=parseInt(x[_]):Y[_]=x[_];g=g+Y[0],N=N-Y[1]}else{for(var _=0;_<x.length;_++)typeof x[_]=="string"?x[_].includes("%")?Y[_]=parseInt(x[_].replace("%","")*i.windowHeight/100):Y[_]=parseInt(x[_]):Y[_]=x[_];m=m+Y[0],P=P-Y[1]}var He={el:r,id:u,class:p,section:l,top:m,middle:L,bottom:P,left:g,right:N,offset:x,progress:0,repeat:v,inView:!1,call:y,speed:h,delay:F,position:T,target:A,direction:O,sticky:R};i.els[u]=He,r.classList.contains(p)&&i.setInView(i.els[u],u),(h!==!1||R)&&(i.parallaxElements[u]=He)})}},{key:"addSections",value:function(){var i=this;this.sections={};var s=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));s.length===0&&(s=[this.el]),s.forEach(function(r,d){var n=typeof r.dataset[i.name+"Id"]=="string"?r.dataset[i.name+"Id"]:"section"+d,l=r.getBoundingClientRect(),p={x:l.left-window.innerWidth*1.5-te(r).x,y:l.top-window.innerHeight*1.5-te(r).y},u={x:p.x+l.width+window.innerWidth*2,y:p.y+l.height+window.innerHeight*2},m=typeof r.dataset[i.name+"Persistent"]=="string";r.setAttribute("data-scroll-section-id",n);var g={el:r,offset:p,limit:u,inView:!1,persistent:m,id:n};i.sections[n]=g})}},{key:"transform",value:function(i,s,r,d){var n;if(!d)n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s,",").concat(r,",0,1)");else{var l=te(i),p=ra(l.x,s,d),u=ra(l.y,r,d);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(p,",").concat(u,",0,1)")}i.style.webkitTransform=n,i.style.msTransform=n,i.style.transform=n}},{key:"transformElements",value:function(i){var s=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=this.instance.scroll.x+this.windowWidth,n=this.instance.scroll.y+this.windowHeight,l={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach(function(p){var u=Be(p,2);u[0];var m=u[1],g=!1;if(i&&(g=0),m.inView||r)switch(m.position){case"top":g=s.instance.scroll[s.directionAxis]*-m.speed;break;case"elementTop":g=(n-m.top)*-m.speed;break;case"bottom":g=(s.instance.limit[s.directionAxis]-n+s.windowHeight)*m.speed;break;case"left":g=s.instance.scroll[s.directionAxis]*-m.speed;break;case"elementLeft":g=(d-m.left)*-m.speed;break;case"right":g=(s.instance.limit[s.directionAxis]-d+s.windowHeight)*m.speed;break;default:g=(l[s.directionAxis]-m.middle[s.directionAxis])*-m.speed;break}m.sticky&&(m.inView?s.direction==="horizontal"?g=s.instance.scroll.x-m.left+window.innerWidth:g=s.instance.scroll.y-m.top+window.innerHeight:s.direction==="horizontal"?s.instance.scroll.x<m.left-window.innerWidth&&s.instance.scroll.x<m.left-window.innerWidth/2?g=0:s.instance.scroll.x>m.right&&s.instance.scroll.x>m.right+100?g=m.right-m.left+window.innerWidth:g=!1:s.instance.scroll.y<m.top-window.innerHeight&&s.instance.scroll.y<m.top-window.innerHeight/2?g=0:s.instance.scroll.y>m.bottom&&s.instance.scroll.y>m.bottom+100?g=m.bottom-m.top+window.innerHeight:g=!1),g!==!1&&(m.direction==="horizontal"||s.direction==="horizontal"&&m.direction!=="vertical"?s.transform(m.el,g,0,i?!1:m.delay):s.transform(m.el,0,g,i?!1:m.delay))})}},{key:"scrollTo",value:function(i){var s=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=parseInt(r.offset)||0,n=isNaN(parseInt(r.duration))?1e3:parseInt(r.duration),l=r.easing||[.25,0,.35,1],p=!!r.disableLerp,u=r.callback?r.callback:!1;if(l=rn.apply(void 0,Rr(l)),typeof i=="string"){if(i==="top")i=0;else if(i==="bottom")i=this.instance.limit.y;else if(i==="left")i=0;else if(i==="right")i=this.instance.limit.x;else if(i=document.querySelector(i),!i)return}else if(typeof i=="number")i=parseInt(i);else if(!(i&&i.tagName)){console.warn("`target` parameter is not valid");return}if(typeof i!="number"){var m=na(i).includes(this.el);if(!m)return;var g=i.getBoundingClientRect(),v=g.top,y=g.left,T=na(i),F=T.find(function(P){return Object.entries(s.sections).map(function(N){var L=Be(N,2);L[0];var U=L[1];return U}).find(function(N){return N.el==P})}),O=0;F?O=te(F)[this.directionAxis]:O=-this.instance.scroll[this.directionAxis],this.direction==="horizontal"?d=y+d-O:d=v+d-O}else d=i+d;var R=parseFloat(this.instance.delta[this.directionAxis]),h=Math.max(0,Math.min(d,this.instance.limit[this.directionAxis])),x=h-R,I=function(N){p?s.direction==="horizontal"?s.setScroll(R+x*N,s.instance.delta.y):s.setScroll(s.instance.delta.x,R+x*N):s.instance.delta[s.directionAxis]=R+x*N};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var A=Date.now(),M=function P(){var N=(Date.now()-A)/n;N>1?(I(1),s.animatingScroll=!1,n==0&&s.update(),u&&u()):(s.scrollToRaf=requestAnimationFrame(P),I(l(N)))};M()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(i,s){this.instance=sa(sa({},this.instance),{},{scroll:{x:i,y:s},delta:{x:i,y:s},speed:0})}},{key:"destroy",value:function(){Se(le(o.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),o})(dt),dn=(function(){function a(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};zo(this,a),this.options=e,Object.assign(this,Ge,e),this.smartphone=Ge.smartphone,e.smartphone&&Object.assign(this.smartphone,e.smartphone),this.tablet=Ge.tablet,e.tablet&&Object.assign(this.tablet,e.tablet),!this.smooth&&this.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),!this.tablet.smooth&&this.tablet.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),!this.smartphone.smooth&&this.smartphone.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return Fo(a,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new nn(this.options):this.scroll=new Fr(this.options),this.scroll.init(),window.location.hash){var o=window.location.hash.slice(1,window.location.hash.length),t=document.getElementById(o);t&&this.scroll.scrollTo(t)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(o,t){this.scroll.scrollTo(o,t)}},{key:"setScroll",value:function(o,t){this.scroll.setScroll(o,t)}},{key:"on",value:function(o,t){this.scroll.setEvents(o,t)}},{key:"off",value:function(o,t){this.scroll.unsetEvents(o,t)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),a})();window.renderCategories=je;window.renderTopics=_o;window.renderArticle=qo;window.handleSearch=qa;window.setSearchScope=xt;window.scrollToGroup=An;window.navigateArticle=co;window.renderArticlesByTag=fn;const we=document.getElementById("app"),ln=document.getElementById("sidebar-nav"),Mo=document.getElementById("search-input"),ya=document.getElementById("theme-toggle"),lo=document.getElementById("search-filter-button"),ka=document.getElementById("search-filter-menu"),Oi=document.getElementById("filter-menu-input"),cn=document.getElementById("filter-menu-list"),da=document.getElementById("sidebar"),Ea={search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><path fill="currentColor" d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>'},ft={keys:[{name:"title",weight:.6},{name:"description",weight:.2},{name:"contentText",weight:.2},{name:"group",weight:.1}],includeMatches:!0,threshold:.4,ignoreLocation:!1,minMatchCharLength:2,shouldSort:!0,useExtendedSearch:!1,findAllMatches:!1},D={currentCategory:null,scrollInstance:null,searchScope:"all",currentArticleIndex:0,currentGroupArticles:[],fuseInstance:null};function pn(a,e){let o;return function(...t){clearTimeout(o),o=setTimeout(()=>a.apply(this,t),e)}}function uo(){we.classList.remove("animate-in"),we.offsetWidth,we.classList.add("animate-in")}function un(){D.scrollInstance&&D.scrollInstance.destroy(),D.scrollInstance=new dn({el:document.querySelector("#content-wrapper"),smooth:!0})}function mo(){setTimeout(()=>D.scrollInstance?.update(),50)}function vt(){const a=lo.offsetWidth;Mo.style.paddingLeft=`${a+10}px`}function la(a,e){if(!e||!a||e==="%")return a;const o=e.split(/\s+/).filter(i=>i.length>1);if(o.length===0)return a;const t=new RegExp(`(${o.map(i=>mn(i)).join("|")})`,"gi");return a.replace(t,"<mark>$1</mark>")}function mn(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $e(a){if(document.querySelectorAll("#floating-group-filter, .article-navigation").forEach(e=>e.remove()),a==="create_group_filter"){const e=we.querySelector(".group-filter-container");if(e){const o=e.cloneNode(!0);o.id="floating-group-filter",document.body.appendChild(o);const t=o.querySelector(".group-filter-menu");o.addEventListener("mouseenter",()=>t.classList.add("visible")),o.addEventListener("mouseleave",()=>t.classList.remove("visible")),e.style.display="none"}}else a==="create_article_nav"&&gn()}function gn(){const a=document.createElement("button");a.className="article-navigation prev-button",a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',a.onclick=()=>co(-1),document.body.appendChild(a);const e=document.createElement("button");e.className="article-navigation next-button",e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',e.onclick=()=>co(1),document.body.appendChild(e)}function _a(a){const e=new URL(window.location);e.searchParams.delete("module"),e.searchParams.delete("article"),Object.keys(a).forEach(o=>{a[o]&&e.searchParams.set(o,a[o])}),window.history.pushState(a,"",e)}function hn(a){const e=new URLSearchParams(window.location.search),o=e.get("module"),t=e.get("article");t&&o?qo(o,t,!1):o?_o(o,!1):je(!1)}function Oe(a,e){const o=new URLSearchParams;a&&o.set("module",a),e&&o.set("article",e);const t=o.toString();return t?`?${t}`:"/"}function je(a=!0){D.currentCategory=null,a&&_a({}),$e("destroy"),uo(),we.innerHTML=`
    <div class="text-center">
      <h1 class="text-4xl font-bold">Base de Conhecimento</h1>
      <p class="mt-2 text-lg max-w-2xl mx-auto">Navegue pelos módulos para encontrar guias, soluções e respostas.</p>
    </div>
    <div class="module-grid">
      ${ae.map(e=>`
        <a href="${Oe(e.id)}" onclick="handleLinkClick(event, () => renderTopics('${e.id}'))" class="card-link flex cursor-pointer flex-col gap-4 rounded-xl p-5 group">
          <div class="w-8 h-8 module-icon">${e.icon}</div>
          <div class="flex flex-col gap-1 mt-1">
            <h3 class="text-base font-semibold">${e.title}</h3>
            <p class="text-sm font-normal">${e.description}</p>
          </div>
        </a>
      `).join("")}
    </div>
  `,mo(),Ga()}function _o(a,e=!0){const o=ae.find(d=>d.id===a);if(!o)return je();D.currentCategory=a,e&&_a({module:a}),$e("destroy"),uo();const t=o.topics.reduce((d,n)=>{const l=n.group||"Geral";return d[l]||(d[l]=[]),d[l].push(n),d},{}),i=Object.keys(t),s=Object.entries(t).map(([d,n])=>`
    <div class="article-group" id="group-${d.replace(/\s+/g,"-").toLowerCase()}">
      <h3 class="article-group-title">${d}</h3>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${n.map(l=>`
          <a href="${Oe(o.id,l.id)}" onclick="handleLinkClick(event, () => renderArticle('${o.id}', '${l.id}'))" class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-5 group">
            <h3 class="text-base font-semibold">${l.title}</h3>
            <p class="text-sm font-normal">${l.description||""}</p>
          </a>
        `).join("")}
      </div>
    </div>
  `).join(""),r=i.map(d=>`<a onclick="scrollToGroup('${d.replace(/\s+/g,"-").toLowerCase()}'); this.closest('.group-filter-menu').classList.remove('visible');" 
       class="group-filter-item cursor-pointer">${d}</a>`).join("");we.innerHTML=`
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a href="/" onclick="handleLinkClick(event, () => renderCategories())" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${o.title}</span>
    </div>
    <div class="flex justify-between items-start mt-4">
      <h1 class="text-4xl font-bold">${o.title}</h1>
      ${i.length>1?`
        <div class="relative group-filter-container">
          <button class="group-filter-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div class="group-filter-menu">
            <div class="font-semibold text-xs px-3 py-2 opacity-60">GRUPOS</div>
            ${r}
          </div>
        </div>
      `:""}
    </div>
    <div class="mt-8">${o.topics.length===0?'<p class="opacity-70">Nenhum artigo encontrado.</p>':s}</div>`,mo(),Ga(),i.length>1&&$e("create_group_filter")}async function qo(a,e,o=!0){const t=ae.find(l=>l.id===a),i=t?.topics.find(l=>l.id===e);if(!i)return je();D.currentCategory=a,o&&_a({module:a,article:e}),$e("create_article_nav"),uo(),yn(t,e);const s=Cn(i,a);let r="";if(i.contentUrl)try{const l=await fetch(i.contentUrl);if(!l.ok)throw new Error("Falha ao carregar conteúdo");const p=await l.text(),u=typeof k<"u"?k.parse(p):p;r=typeof so<"u"?so.sanitize(u):u}catch(l){console.error(l),r='<p class="text-red-500">Erro ao carregar o conteúdo do artigo.</p>'}else{const l=typeof k<"u"?k.parse(i.content):i.content;r=typeof so<"u"?so.sanitize(l):l}const d=En(r),n=Pn(a,e);we.innerHTML=`
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a href="/" onclick="handleLinkClick(event, () => renderCategories())" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <a href="${Oe(t.id)}" onclick="handleLinkClick(event, () => renderTopics('${t.id}'))" class="cursor-pointer opacity-70 hover:opacity-100">${t.title}</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">${i.title}</span>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-8 mt-8">
      <div class="article-content flex-1 min-w-0 relative">
        <h1>${i.title}</h1>
        ${i.description?`<p class="text-xl mt-4 opacity-80">${i.description}</p>`:""}
        
        ${i.tags?`
          <div class="mt-6 flex flex-wrap gap-2">
            ${i.tags.map(l=>`
              <span onclick="renderArticlesByTag('${l}')" 
                    class="text-xs px-2 py-1 rounded-full bg-opacity-20 bg-primary cursor-pointer hover:bg-opacity-30">
                ${l}
              </span>
            `).join("")}
          </div>
        `:""}
        
        <hr class="my-8 opacity-20">
        <div class="markdown-body">${r}</div>
        
        ${n}

        ${s.length>0?`
        <div class="mt-12 border-t pt-8">
          <h2 class="text-2xl font-bold mb-6">Recomendados para você</h2>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            ${s.map(l=>`
              <a href="${Oe(l.categoryId,l.id)}" onclick="handleLinkClick(event, () => renderArticle('${l.categoryId}', '${l.id}'))" 
                 class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-6 group hover:border-primary transition-all">
                <h3 class="text-lg font-semibold">${l.title}</h3>
                <p class="text-sm font-normal opacity-80">${l.description||""}</p>
                <p class="text-xs mt-2 opacity-60">${l.categoryTitle}</p>
              </a>
            `).join("")}
          </div>
        </div>
        `:""}
      </div>

      ${d?`
        <aside class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
            <h4 class="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Nesta página</h4>
            <nav class="toc-nav flex flex-col gap-2 text-sm opacity-80">
              ${d}
            </nav>
          </div>
        </aside>
      `:""}
    </div>
  `,wn(),mo(),Ga()}function fn(a){uo(),$e("destroy");const e=ae.flatMap(o=>o.topics.filter(t=>t.tags&&t.tags.includes(a)).map(t=>({...t,categoryId:o.id,categoryTitle:o.title})));we.innerHTML=`
    <div class="flex flex-wrap items-center gap-2 text-sm font-medium">
      <a href="/" onclick="handleLinkClick(event, () => renderCategories())" class="cursor-pointer opacity-70 hover:opacity-100">Início</a>
      <span class="opacity-50">/</span>
      <span class="font-semibold">Artigos com a tag: ${a}</span>
    </div>
    <div class="mt-8">
      <h1 class="text-3xl font-bold mb-6">Artigos marcados com "${a}"</h1>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        ${e.map(o=>`
          <a href="${Oe(o.categoryId,o.id)}" onclick="handleLinkClick(event, () => renderArticle('${o.categoryId}', '${o.id}'))" 
             class="card-link flex cursor-pointer flex-col gap-3 rounded-xl p-5 group">
            <h3 class="text-base font-semibold">${o.title}</h3>
            <p class="text-sm font-normal">${o.description||""}</p>
            <p class="text-xs mt-2 opacity-60">${o.categoryTitle}</p>
          </a>
        `).join("")}
      </div>
    </div>
  `,mo()}function bt(){const a=ae.flatMap(e=>e.topics.map(o=>({...o,categoryId:e.id,categoryTitle:e.title,contentText:o.content.replace(/<[^>]*>/g," ")})));D.fuseInstance=new ye(a,ft)}const vn=pn(a=>{bn(a)},300);function qa(a){const e=a.trim();e==="%"?D.searchScope==="all"?xn():Sn(D.searchScope):vn(e)}function bn(a){if(!a){D.currentCategory?_o(D.currentCategory):je();return}D.fuseInstance||bt();let e;if(D.searchScope==="all")e=D.fuseInstance.search(a);else{const o=D.fuseInstance._docs.filter(i=>i.categoryId===D.searchScope);e=new ye(o,ft).search(a)}Ba(e,a)}function Ba(a,e){uo(),$e("destroy");const o=a.map(t=>{const i=t.item,s=t.matches?.find(d=>d.key==="contentText");let r="";if(s){const[d,n]=s.indices[0],l=Math.max(0,d-60),p=Math.min(i.contentText.length,n+60);let u=i.contentText.substring(l,p);u=la(u,e),r=`...${u}...`}else i.description&&(r=la(i.description,e));return`
      <a href="${Oe(i.categoryId,i.id)}" onclick="handleLinkClick(event, () => renderArticle('${i.categoryId}', '${i.id}'))" 
         class="card-link block cursor-pointer p-5 rounded-xl group hover:border-primary transition-all bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs font-semibold px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            ${i.categoryTitle||"Módulo"}
          </span>
          ${i.group?`<span class="text-xs opacity-60">• ${i.group}</span>`:""}
        </div>
        <h3 class="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          ${la(i.title,e)}
        </h3>
        <p class="text-sm opacity-70 leading-relaxed">
          ${r}
        </p>
      </a>
    `}).join("");we.innerHTML=`
    <div>
      <h1 class="text-3xl font-bold mb-4">Resultados para: <span class="opacity-70">"${e}"</span></h1>
      <p class="text-sm opacity-70 mb-6">${a.length} resultado(s) encontrado(s).</p>
      ${a.length===0?`
        <div class="p-8 text-center">
          <p class="opacity-70 mb-4">Nenhum resultado encontrado.</p>
          <p class="text-sm opacity-50">Tente uma busca diferente ou altere o filtro de módulo.</p>
        </div>
      `:`
        <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">${o}</div>
      `}
    </div>`,mo()}function xn(){const a=ae.flatMap(e=>e.topics.map(o=>({...o,categoryId:e.id,categoryTitle:e.title})));Ba(a.map(e=>({item:e})),"%")}function Sn(a){const e=ae.find(t=>t.id===a);if(!e)return;const o=e.topics.map(t=>({...t,categoryId:e.id,categoryTitle:e.title}));Ba(o.map(t=>({item:t})),"%")}function Pa(a){const e=ka.classList.contains("visible");ka.classList.toggle("visible",a!==void 0?a:!e)}function Di(a=""){const e=a.toLowerCase(),t=[{id:"all",title:"Todos os Módulos",icon:Ea.search},...ae].filter(i=>i.title.toLowerCase().includes(e));cn.innerHTML=t.map(i=>`
    <div class="filter-menu-item ${D.searchScope===i.id?"active":""}" 
         onclick="setSearchScope('${i.id}')">
      <div class="item-icon">${i.icon||Ea.search}</div>
      <span>${i.title}</span>
    </div>
  `).join("")}function xt(a){D.searchScope=a;const e=ae.find(o=>o.id===a);e?lo.innerHTML=`
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 flex-shrink-0">${e.icon||""}</div>
        <span>${e.title}</span>
      </div>
    `:lo.innerHTML=`
      <div class="flex items-center gap-2">
        ${Ea.search} 
        <span>Todos os Módulos</span>
      </div>
    `,qa(Mo.value),Pa(!1),Mo.focus(),vt()}function Ga(){ln.innerHTML=ae.map(a=>`
    <a href="${Oe(a.id)}" onclick="handleLinkClick(event, () => renderTopics('${a.id}'))" 
       class="sidebar-nav-link flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer group ${D.currentCategory===a.id?"active":""}"
       data-category-id="${a.id}">
      <div class="w-6 h-6 flex-shrink-0 module-icon">${a.icon||""}</div>
      <p class="text-sm font-medium leading-normal">${a.title}</p>
      <span class="tooltip">${a.title}</span>
    </a>
  `).join("")}function wn(){document.querySelectorAll("pre:not(:has(.copy-button))").forEach(a=>{const e=document.createElement("button");e.className="copy-button",e.textContent="Copiar",e.onclick=()=>{const o=a.querySelector("code")?.textContent||a.textContent;navigator.clipboard.writeText(o).then(()=>{e.textContent="Copiado!",setTimeout(()=>e.textContent="Copiar",2e3)})},a.appendChild(e)})}function Mi(a){const e=ya.querySelector(".sun-icon"),o=ya.querySelector(".moon-icon");document.body.classList.toggle("dark-mode",a),e&&o&&(e.style.display=a?"block":"none",o.style.display=a?"none":"block"),localStorage.setItem("theme",a?"dark":"light")}function An(a){const e=document.getElementById(`group-${a}`);e&&D.scrollInstance&&D.scrollInstance.scrollTo(e,{offset:-20,duration:600})}function Cn(a,e){if(a.manualSuggestions?.length>0)return a.manualSuggestions.map(i=>{const s=ae.find(d=>d.id===i.categoryId);if(!s)return null;const r=s.topics.find(d=>d.id===i.topicId);return r?{...r,categoryId:s.id,categoryTitle:s.title}:null}).filter(Boolean).slice(0,3);if(!a.tags?.length)return[];const o=ae.flatMap(i=>i.topics.filter(s=>s.id!==a.id&&s.tags?.length).map(s=>{const r=s.tags.filter(d=>a.tags.includes(d));return r.length?{...s,categoryId:i.id,categoryTitle:i.title,relevanceScore:r.length}:null}).filter(Boolean).sort((s,r)=>r.relevanceScore-s.relevanceScore)).sort((i,s)=>s.relevanceScore-i.relevanceScore);if(o.length>0)return o.slice(0,3);const t=ae.find(i=>i.id===e);return t?.topics.filter(i=>i.id!==a.id).sort(()=>.5-Math.random()).slice(0,3).map(i=>({...i,categoryId:e,categoryTitle:t.title}))||[]}function yn(a,e){const o=a.topics,t=o.findIndex(i=>i.id===e);t!==-1&&(D.currentGroupArticles=o,D.currentArticleIndex=t)}async function co(a){const e=D.currentArticleIndex+a;if(e>=0&&e<D.currentGroupArticles.length){const o=D.currentGroupArticles[e];await qo(D.currentCategory,o.id)}}document.addEventListener("DOMContentLoaded",()=>{un(),Tn(),kn();const a=new URLSearchParams(window.location.search),e=a.get("module"),o=a.get("article");o&&e?qo(e,o,!1):e?_o(e,!1):je(!1),window.addEventListener("popstate",hn),xt("all"),Di(),vt(),Mo.addEventListener("keyup",d=>{qa(d.target.value)}),lo.addEventListener("click",d=>{d.stopPropagation(),Pa()}),Oi.addEventListener("input",()=>Di(Oi.value)),document.addEventListener("click",d=>{!ka.contains(d.target)&&d.target!==lo&&Pa(!1)}),ya.addEventListener("click",()=>{Mi(!document.body.classList.contains("dark-mode"))});const t=localStorage.getItem("theme"),i=window.matchMedia("(prefers-color-scheme: dark)").matches;Mi(t?t==="dark":i);const s=document.getElementById("mobile-menu-button"),r=document.getElementById("sidebar-overlay");s&&r&&da&&(s.addEventListener("click",()=>{da.classList.toggle("visible"),r.classList.toggle("visible")}),r.addEventListener("click",()=>{da.classList.remove("visible"),r.classList.remove("visible")})),document.addEventListener("keydown",d=>{document.querySelector(".article-navigation")&&(d.key==="ArrowLeft"?co(-1):d.key==="ArrowRight"&&co(1))}),bt()});function kn(){const a=document.getElementById("sidebar"),e=document.querySelector(".article-navigation.prev-button");if(!a||!e)return;const o=()=>{const i=a.getBoundingClientRect().width,s=document.querySelector(".article-navigation.prev-button");s&&(s.style.left=`${i+32}px`)};new MutationObserver(i=>{for(const s of i)s.type==="attributes"&&s.attributeName==="class"&&o()}).observe(document.body,{attributes:!0}),o()}function En(a){const o=new DOMParser().parseFromString(a,"text/html"),t=Array.from(o.querySelectorAll("h2, h3"));return t.length===0?"":t.map(i=>{const s=i.textContent,r=s.toLowerCase().replace(/[^\w]+/g,"-"),d=i.tagName==="H3";return`<a href="#${r}" class="hover:text-primary transition-colors ${d?"pl-4 text-xs":""}">${s}</a>`}).join("")}function Pn(a,e){return`
    <div class="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
        <h4 class="font-semibold mb-4">Este artigo foi útil?</h4>
        <div class="flex justify-center gap-4">
            <button onclick="handleFeedback('${a}', '${e}', 'yes')" class="px-6 py-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 hover:bg-green-200 transition-colors font-medium">Sim</button>
            <button onclick="handleFeedback('${a}', '${e}', 'no')" class="px-6 py-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 transition-colors font-medium">Não</button>
        </div>
        <p id="feedback-message-${e}" class="hidden mt-3 text-sm opacity-60">Obrigado pelo seu feedback!</p>
    </div>
    `}window.handleFeedback=function(a,e,o){localStorage.setItem(`feedback-${a}-${e}`,o);const t=document.getElementById(`feedback-message-${e}`);t&&(t.classList.remove("hidden"),t.textContent="Obrigado! Seu feedback foi registrado.")};function Tn(a){const e=document.getElementById("sidebar"),o=document.getElementById("mobile-menu-button"),t=document.getElementById("sidebar-overlay");if(o&&t&&e){const i=o.cloneNode(!0);o.parentNode.replaceChild(i,o),i.addEventListener("click",()=>{e.classList.toggle("visible"),t.classList.toggle("visible")}),t.addEventListener("click",()=>{e.classList.remove("visible"),t.classList.remove("visible")})}}window.marked=k;window.DOMPurify=so;window.Fuse=ye;
