if(!self.define){let e,i={};const c=(c,b)=>(c=new URL(c+".js",b).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(b,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const o=e=>c(e,a),n={module:{uri:a},exports:r,require:o};i[a]=Promise.all(b.map((e=>n[e]||o(e)))).then((e=>(d(...e),r)))}}define(["./workbox-8366b1fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"html/antrop.html",revision:"37c743ac01f6001113cf118927aabb4d"},{url:"html/index5.html",revision:"c9be10dbeeb4b5d2bfe30c0a40145466"},{url:"html/index6.html",revision:"73da3f4138953dd986c7791c71108572"},{url:"html/preguntas.json",revision:"3b62ad89e1047660e63ad5dc5e22b2c6"},{url:"html/reportes.html",revision:"60d520b53e59a07090881fd8686635a4"},{url:"img/citrabajo/66.webp",revision:"72847375f171075c96dcf1cccd553b0c"},{url:"img/citrabajo/67.webp",revision:"17596d2d1746e8936649b3a6d8017a4a"},{url:"img/citramo1/45.webp",revision:"7200e93930ea8d1313964e2f3336e308"},{url:"img/citramo2/46.webp",revision:"3d2ae5b3275e903972649aadb554dc97"},{url:"img/citramo3/47.webp",revision:"af7220d8b88e7aee00c08c4d3582e155"},{url:"img/citramo4/48.webp",revision:"5e9135b066dc196b5b03e90fb3cb49f7"},{url:"img/citramo4/49.webp",revision:"320e8d497cd315864a9cf56b9d4d8866"},{url:"img/citramo5/50.webp",revision:"645a2b954673855a7f90990e194f21aa"},{url:"img/citramo6/51.webp",revision:"67cac85b3124e43d2faca4f82ac720b0"},{url:"img/citramo6a/52.webp",revision:"1ac533015e1b8d744f078c133ab2afc2"},{url:"img/civiolen/74.webp",revision:"3ef7c3b99aa91e7ba630481caadcf7d1"},{url:"img/civiolen/75.webp",revision:"257a8546604bcbc5dbdd27db3d2bf886"},{url:"img/civiolen/76.webp",revision:"129be972d1bff4baf441829c944c2a6e"},{url:"img/civiolen/77.webp",revision:"a74cfb4a34f0c6158264830468832d7b"},{url:"img/civiolen/78.webp",revision:"f52609457583f80f78dfc1202a3bd3f4"},{url:"img/civiolen/79.webp",revision:"db4fde946c84865e495e0f07b637eeb5"},{url:"img/civiolen/80.webp",revision:"c7748951a47b1e74aea8c8bfdb284a3e"},{url:"img/civiolen/81.webp",revision:"06268f398881704149082882f9967f55"},{url:"img/civiolen/82.webp",revision:"d178049dd26caf4bf4d21ba15919b4f8"},{url:"img/civiolen/83.webp",revision:"0b37f65865e89507a89329baf4641807"},{url:"img/csanteced/1.webp",revision:"e5f273839c8108d695b9399d1b6e3851"},{url:"img/csanteced/2.webp",revision:"b1d3e02ef37cd5f523ed847a339d6a53"},{url:"img/csanteced/3.webp",revision:"6938afa8d9f020aa1645906fb2686e7d"},{url:"img/cscancer/10.webp",revision:"230c23759c5b9ab51726044e9ceebd79"},{url:"img/cscancer/11.webp",revision:"efe10b88be41b9acf8c1657c0e208908"},{url:"img/csfactore/6.webp",revision:"6e6028a5a371db16ebfe85aee4c43a9c"},{url:"img/csfactore/7.webp",revision:"e76ace3c56a3fc0d092a9492660bc15d"},{url:"img/cshiperdi/4.webp",revision:"15c35cd12fa83ef1655f0ae31c1f81ce"},{url:"img/cshiperdi/5.webp",revision:"59977d7b18ec51c55d4777da1aee568f"},{url:"img/csmental/14.webp",revision:"df4cf214710b3148cb50b4b68ad49c18"},{url:"img/csmental/15.webp",revision:"31170ca882560c3645c16f151dab83d5"},{url:"img/csmental/16.webp",revision:"1ad91aed8c2dc4b76b35b7aa402300bc"},{url:"img/csmental/17.webp",revision:"484d2c54dd5f45ca5384c6e3da56e3c2"},{url:"img/csmental/18.webp",revision:"6d2fbb7eb704d501f0bd037a94cbc8a5"},{url:"img/csninos/19.webp",revision:"fa8d06a9c700128a6b87b7e15f53e9f9"},{url:"img/csninos/20.webp",revision:"cce730cc8d17c763d18cd9e75116de3a"},{url:"img/csninos/21.webp",revision:"36291b637f7159f79defeeae09a9e4a9"},{url:"img/csninos/22.webp",revision:"2bbb19d0bd1273b18151584dd31aa8cb"},{url:"img/csninos/23.webp",revision:"9c8dd6618eea18ffbdbc50d517e1f3f1"},{url:"img/csninos/24.webp",revision:"0ef5c1d6cdd3aecc73748e2a0853472d"},{url:"img/csninos/25.webp",revision:"54b7097a96a202847ebc719ec2ce15ec"},{url:"img/csninos/26.webp",revision:"1c6a9dca4b3944a9bba5246e94983c8b"},{url:"img/csninos/27.webp",revision:"4e88c83ce8e84897d4ee43545682a637"},{url:"img/csninos/28.webp",revision:"a944902f7a905db89ba0c7315a673e21"},{url:"img/csninos/29.webp",revision:"8517720df770d2f22ebad90e13ce5b8d"},{url:"img/csninos/30.webp",revision:"50c9e03573706f012dc8931d2689f24d"},{url:"img/csocularbu/8.webp",revision:"f1067e883a51b71c3b380e0a4632179f"},{url:"img/csocularbu/9.webp",revision:"8c9bffb1cfe6171fb561fa9ca97bf416"},{url:"img/cstbcds/12.webp",revision:"a273eed9a94ffbe9cbc269fd9a7576e1"},{url:"img/csvihsida/13.webp",revision:"698f2097b68aaec71bca186d706716d4"},{url:"imgold/chcaracmihog/1.webp",revision:"9ce42dfc33163f2c5979c69f914216e5"},{url:"imgold/chcaracmihog/2.webp",revision:"eb0bc2f9121436a495f27ddd8be2344c"},{url:"imgold/chcaracmihog/3.webp",revision:"9275ca7366ffeac778b71142698fe5e4"},{url:"imgold/chcaracmihog/4.webp",revision:"48a3ee9447a18441a3e68eab46badd6d"},{url:"imgold/chcaracmihog/5.webp",revision:"67740713a66813cac65d8f0ec8cf13c4"},{url:"imgold/chcaracmihog/6.webp",revision:"a903e7e7e59448252c9261088ffe3fab"},{url:"imgold/chcaracvivi/10.webp",revision:"8501b53a8ae6ba73a740a19e95ef58be"},{url:"imgold/chcaracvivi/7.webp",revision:"2765aaed4321eff9acc4e767e5dc9e59"},{url:"imgold/chcaracvivi/8.webp",revision:"a34140154ca38d5066342a536e5b091e"},{url:"imgold/chcaracvivi/9.webp",revision:"9958f37b094ef4bb9906b0e7f15568fc"},{url:"imgold/chmortalidad/6.webp",revision:"62737376b9f30dc8c2bbd208c5265f64"},{url:"imgold/chprosocia/11.webp",revision:"de1a24e9a7ab70904689ad7b4bddc7ff"},{url:"imgold/chprosocia/12.webp",revision:"6c95b8003ac10bb96bcdc0c000ab6ad9"},{url:"imgold/ci226240/12.webp",revision:"86a3811eb9b005737ddb14ce320b3624"},{url:"imgold/ci226240/13.webp",revision:"c8e4b049eab13b8a14bb860889d07ba0"},{url:"imgold/ci226240/14.webp",revision:"a9d48bfd48a277b2483b3bf1e77bcac2"},{url:"imgold/ci479496/53.webp",revision:"957c15ef76ac99e32f3f58e3611a9e84"},{url:"imgold/ci479496/54.webp",revision:"39c74ba002e48e84fe06fd765d410890"},{url:"imgold/ci479496/55.webp",revision:"26cfe6f0b16926f9d9612a79e8d82f82"},{url:"imgold/ci479496/56.webp",revision:"3b39a3ba1f5126c44f72316de207c3d9"},{url:"imgold/ci479496/57.webp",revision:"c559e05e04005a99ce80a1abcb96cfca"},{url:"imgold/cianteced/1.webp",revision:"dbf20ed8571742f13deeaf936ee82e1d"},{url:"imgold/cianteced/5.webp",revision:"974253fb866b012f89f1085d0894505b"},{url:"imgold/cianteced/6.webp",revision:"6cf1d05062ed3dc984934fd6e3d72083"},{url:"imgold/cianteced/7.webp",revision:"d428b7eda9ea8b66e6fa10d267b68b4c"},{url:"imgold/cianticoncep/15.webp",revision:"3e39907cb62ed5a80d82d9b1e61f9adb"},{url:"imgold/cianticoncep/16.webp",revision:"9b486b285ccd644a96bef38daf9ad119"},{url:"imgold/cianticoncep/17.webp",revision:"09600dc07cf33ceddd9ba3c009d9ce5f"},{url:"imgold/cianticoncep/18.webp",revision:"774c40f9fe08c1216d7e1b86d56b2bbd"},{url:"imgold/cianticoncep/19.webp",revision:"9764b06d19c905d79b235950a1b1e361"},{url:"imgold/cianticoncep/20.webp",revision:"2eea2803943d8f8b5daebbbd728b1048"},{url:"imgold/cianticoncep/21.webp",revision:"f3b66569308dcb6051126199cb6596f3"},{url:"imgold/cihistoria/10.webp",revision:"cde93387cae8396b5fb052201ba8ed8c"},{url:"imgold/ciinmunizaci/31.webp",revision:"b779a64e28b6cad38fa986765aeaec11"},{url:"imgold/ciinmunizaci/32.webp",revision:"ec7a89f4c7710d394332ea01267a22a3"},{url:"imgold/ciinmunizaci/33.webp",revision:"25e2abe75d437c551c8ce13fcdd52823"},{url:"imgold/ciinmunizaci/34.webp",revision:"78476736f2e1106d162957793215033f"},{url:"imgold/ciinmunizaci/35.webp",revision:"a7c107d8e806f0ab56594bee51e2f464"},{url:"imgold/ciinmunizaci/36.webp",revision:"048161030fee540095bdf54bbd2428fa"},{url:"imgold/ciinmunizaci/37.webp",revision:"25f7172b2145d7850798367803fb61c2"},{url:"imgold/ciinmunizaci/38.webp",revision:"6d890ff2e47b7b150415563567f0da26"},{url:"imgold/ciinmunizaci/39.webp",revision:"af1c62d28f7b24f0fc5aecab15f0fe1f"},{url:"imgold/ciinmunizaci/40.webp",revision:"9fe72fe42696df5ec0b4d0676d9743d5"},{url:"imgold/ciinmunizaci/41.webp",revision:"54066ebd290928c07beb7508ef4d0441"},{url:"imgold/ciinmunizaci/42.webp",revision:"d270229b10bab28e4d789f422c88b687"},{url:"imgold/ciinmunizaci/43.webp",revision:"6c711345f161677ba09038fb625f3721"},{url:"imgold/cimormater/72.webp",revision:"0e6e29ce29a82ee1c7cd42a9b5582818"},{url:"imgold/cimormater/73.webp",revision:"8c4add0fe619178969301e16b9f6f5c2"},{url:"imgold/cinupciali/58.webp",revision:"75fa6801fdbcfe774335a35bcfe06915"},{url:"imgold/cinupciali/59.webp",revision:"cc770d82e824ca9863e27a455987b856"},{url:"imgold/cinupciali/60.webp",revision:"0ef65ca081eaf19bb9ab52d6ed549fb1"},{url:"imgold/cinupciali/61.webp",revision:"cac683af99e200a5369d243430696565"},{url:"imgold/ciprefecund/62.webp",revision:"d7a7b5dec9c2f4a19bfa9f4f6d4fd7eb"},{url:"imgold/ciprefecund/63.webp",revision:"15df6d5f7e3aa7568b123d203357fbd9"},{url:"imgold/ciprefecund/64.webp",revision:"6a8df9f2a80b854d8aba1bb9521f9950"},{url:"imgold/ciprefecund/65.webp",revision:"30dabc7ba65e9cd1d80c86c27f6cd459"},{url:"imgold/cireproduc/8.webp",revision:"3dea230b7735bda1fabf3b18f49061c9"},{url:"imgold/cireproduc/9.webp",revision:"19d945fdc0f3d1eecaac72bf00c17330"},{url:"imgold/ciseccion4a/22.webp",revision:"15c641491b3bb0e841d17485af206194"},{url:"imgold/ciseccion4a/23.webp",revision:"d968d6c8cf3e603bd6d9b2d8e11785e8"},{url:"imgold/ciseccion4a/24.webp",revision:"aecebf1eea29e8dc48bb20386bad0612"},{url:"imgold/ciseccion4a/25.webp",revision:"f40ba56b645f963eea34a1f726614712"},{url:"imgold/ciseccion4a/26.webp",revision:"e3add7dfc28abd9c27c56ed063db8d00"},{url:"imgold/ciseccion4a/27.webp",revision:"8043c65c569b2a23455a25491f27cb4d"},{url:"imgold/ciseccion4a/28.webp",revision:"be5696531b089866229bf6280c5acb6b"},{url:"imgold/ciseccion4a/29.webp",revision:"1231f289c031921da84bf1271c2c7b83"},{url:"imgold/ciseccion4a/30.webp",revision:"5f82d77a62b33f0ac5ce8edee3c9e8d5"},{url:"imgold/cisida/68.webp",revision:"5bbc092ac39ac08a69b5b6432b06279c"},{url:"imgold/cisida/69.webp",revision:"b4060dd3653d82f9772d2c727ac46092"},{url:"imgold/cisida/70.webp",revision:"92e6fe725d640ccd7a5b5da008be7a9b"},{url:"imgold/cisida/71.webp",revision:"40941f1809c89e533a057d28e90426e6"},{url:"index.html",revision:"3556c9114a595a3cd4f527ede55c6c32"},{url:"index.js",revision:"3446aaca46e1c183e9f82e2fd439a6bb"},{url:"manifest.json",revision:"169e0cbc88e9963f4ce21acf83478ca7"},{url:"recursos/128.png",revision:"d98d4823341a7582e0cbcd50d82ce6e8"},{url:"recursos/256.png",revision:"6f81100e16f158b6906546a550820e61"},{url:"recursos/css/bootstrap.min.css",revision:"abe91756d18b7cd60871a2f47c1e8192"},{url:"recursos/css/style.css",revision:"5e61e4d33af1e32a9143321b6e1fdcc0"},{url:"recursos/endes.png",revision:"2b936a4fa3406fcdd5d9f3694d9e263e"},{url:"recursos/girl.png",revision:"790956428d6e81d03cb1e0cd3f703a04"},{url:"recursos/girlold.png",revision:"8ae30e24587f4cfa7aecc5ad721a41b9"},{url:"recursos/js/bootstrap.min.js",revision:"a08792f518b51f0f1422b5c96df9eb8a"},{url:"recursos/js/filesaver.js",revision:"455ef724a4d67a67ceb581df80e5490c"},{url:"recursos/js/jszip.js",revision:"64b377caf1ef6a0cd7dcc3391dea1d74"},{url:"recursos/js/script.js",revision:"98ec49532cfeb518efb9f825615c9b05"},{url:"recursos/js/xml.js",revision:"774feaabc29bca33c60ebc7d5bcb8ab7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
