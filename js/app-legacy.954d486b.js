(function(){var t={10204:function(t,e,i){"use strict";i(66992),i(88674),i(19601),i(17727);var a=i(28935),n=i(74549),r=i.n(n),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("HelloWorld")],1)},o=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-family":"Times New Roman"},attrs:{id:"building"}},[a("div",{staticClass:"content"},[a("el-row",[a("el-col",[a("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[a("div",{staticStyle:{"text-align":"center!important"}},[a("h1",[t._v("GlyphDraw: Learning to Draw Chinese Characters in ")]),a("h1",[t._v("Image Synthesis Models Coherently")])]),a("el-row",{staticClass:"row-bg",staticStyle:{"font-size":"medium","text-align":"center"},attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:5}},[a("p",[a("strong",[t._v("Jian Ma ")])]),a("p",[t._v("OPPO Research Institute")]),a("p",[t._v("majian2@oppo.com")])]),a("el-col",{attrs:{span:5}},[a("p",[a("strong",[t._v(" Mingjun Zhao")])]),a("p",[t._v("University of Alberta")]),a("p",[t._v("zhao2@ualberta.ca")])]),a("el-col",{attrs:{span:5}},[a("p",[a("strong",[t._v(" Chen Chen ")])]),a("p",[t._v(" OPPO Research Institute")]),a("p",[t._v("chenchen4@oppo.com")])])],1),a("el-row",{staticClass:"row-bg",staticStyle:{"font-size":"medium","text-align":"center"},attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:5}},[a("p",[a("strong",[t._v(" Ruichen Wang")])]),a("p",[t._v(" OPPO Research Institute")]),a("p",[t._v("wangruichen@oppo.com")])]),a("el-col",{attrs:{span:5}},[a("p",[a("strong",[t._v(" Di Niu")])]),a("p",[t._v(" University of Alberta")]),a("p",[t._v("dniu@ualberta.ca")])]),a("el-col",{attrs:{span:5}},[a("p",[a("strong",[t._v("Haonan Lu")])]),a("p",[t._v("OPPO Research Institute")]),a("p",[t._v("luhaonan@oppo.com")])]),a("el-col",{attrs:{span:5}},[a("p",[a("strong",[t._v("Xiaodong Lin")])]),a("p",[t._v("Rutgers University")]),a("p",[t._v("lin@business.rutgers.edu")])])],1),a("el-row",{staticClass:"row-bg",staticStyle:{"text-align":"center"},attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:4}},[a("a",{staticStyle:{"font-size":"30px",color:"#224b8d"},attrs:{href:"https://arxiv.org/abs/2303.17870",target:"_blank"}},[t._v("Paper")])]),a("el-col",{attrs:{span:6}},[a("div",{staticStyle:{"font-size":"30px"}},[t._v("Code "),a("span",{staticStyle:{"font-size":"16px"}},[t._v("(Coming Soon)")])])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",t._l(4,(function(e){return a("div",{staticStyle:{"text-align":"center!important",width:"100%","margin-top":"15px"}},[a("waterfall",{ref:"waterfall",refInFor:!0,attrs:{autoResize:t.autoResize,moveTransitionDuration:.4,fillBox:t.fillBox,col:4,list:t.imgPart1.slice(4*(e-1),4*e),imgKey:"src"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"waterfall-item",class:{bounceIn:"show"==e.state},staticStyle:{"margin-left":"15px","margin-bottom":"15px"}},[a("div",{staticStyle:{position:"relative"}},[e.data.url?a("img",{key:e.data.url,staticClass:"waterfall-img",staticStyle:{width:"100%",height:"100%","border-radius":"10px"},attrs:{src:e.data.url},on:{click:function(i){return t.imgClick(e.index)}}}):t._e()]),a("div",{staticStyle:{"margin-bottom":"10px","font-size":"small"}},[t._v(" "+t._s(e.data.info)+" ")]),a("div",{staticStyle:{"margin-bottom":"10px","font-size":"small"}},[t._v(" "+t._s(e.data.info2)+" ")])])}}],null,!0)})],1)})),0)],1),a("div",{staticStyle:{"font-size":"24px"}},[t._v(" Figure1：We propose GlyphDraw, a general framework for endowing image generation models with the ability to generate high-quality Chinese text embedded seamlessly in images while retaining their open-domain generation capability. ")])],1)],1)],1)],1),a("div",{staticClass:"content"},[a("el-row",[a("el-col",[a("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("h1",[t._v("Abstract ")])]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",[a("div",{staticStyle:{"font-size":"24px"}},[t._v(" "+t._s(t.AbstractText)+" ")])])],1)],1)],1)],1)],1),a("div",{staticClass:"content"},[a("el-row",[a("el-col",[a("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("h1",[t._v("Model Designs ")])]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("img",{attrs:{src:i(67082)}})]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("h2",[t._v("Location Control ")])]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",[a("div",{staticStyle:{"font-size":"24px"}},[t._v(" Unlike global conditional input such as segmentation maps, depth maps, sketches and grayscale images, character generation requires more attention to a specific local area of the image, since the latent feature distribution of character pixels varies dramatically from that of natural image pixels. To prevent model learning from collapsing, a fine-grained location area control is innovatively introduced to decouple the distribution between different regions. Specifically, as shown in Fig 2, a binary mask feature map is generated and concatenated to original image latent feature. During the training phase, the quadrilateral-shaped mask is extracted from OCR detection information. During inference phase, since there is no available reference image, the mask is generated through a mask prediction module during early diffusion stage. ")])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("h2",[t._v("Glyph Control ")])]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",[a("div",{staticStyle:{"font-size":"24px"}},[t._v(" A significant aspect of generating images embedded in Chinese characters is the complexity of the glyph, which results from the orderly distribution of multiple strokes in a flat box. Typically, the number of strokes in common Chinese characters ranges from 0 to 20, and even a slight shift in the stroke position can affect the recognition of Chinese characters. Therefore, to generate Chinese characters accurately, we consider embedding Chinese character images in the model in two ways. The first way is to concatenate the image to the noisy latent, similar to the mask image. The second way is to combine global control with projection and add them to the timestep embedding, along with text embeddings. To achieve this goal, a plausible approach is to concatenate the font image embeddings with text embeddings. However, we find that this leads to bad results empirically, where not only the Chinese characters are not generated, but also semantic information is lost. As a result, we introduce a model framework called MergeNet to learn how to integrate the two embeddings' information. ")])])],1)],1)],1)],1)],1),a("div",{staticClass:"content"},[a("el-row",[a("el-col",[a("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("h1",[t._v("More Results ")])]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",t._l(12,(function(e){return a("div",{staticStyle:{"text-align":"center!important",width:"100%","margin-top":"15px"}},[a("waterfall",{ref:"waterfall",refInFor:!0,attrs:{autoResize:t.autoResize,moveTransitionDuration:.4,fillBox:t.fillBox,col:4,list:t.imgPart2.slice(4*(e-1),4*e),imgKey:"src"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"waterfall-item",class:{bounceIn:"show"==e.state},staticStyle:{"margin-left":"15px","margin-bottom":"15px"}},[a("div",{staticStyle:{position:"relative"}},[e.data.url?a("img",{key:e.data.url,staticClass:"waterfall-img",staticStyle:{width:"100%",height:"100%","border-radius":"10px"},attrs:{src:e.data.url},on:{click:function(i){return t.imgClick(e.index)}}}):t._e()]),a("div",{staticStyle:{"margin-bottom":"10px","font-size":"small"}},[t._v(" "+t._s(e.data.info)+" ")]),a("div",{staticStyle:{"margin-bottom":"10px","font-size":"small"}},[t._v(" "+t._s(e.data.info2)+" ")])])}}],null,!0)})],1)})),0)],1)],1)],1)],1)],1),a("div",{staticClass:"content"},[a("el-row",[a("el-col",[a("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("h1",[t._v("BibTex ")])]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:22}},[a("div",{staticStyle:{"font-size":"16px"}},[t._v(" @misc{ma2023glyphdraw,"),a("br"),t._v("       title={GlyphDraw: Learning to Draw Chinese Characters in Image Synthesis Models Coherently}, "),a("br"),t._v("       author={Jian Ma and Mingjun Zhao and Chen Chen and Ruichen Wang and Di Niu and Haonan Lu and Xiaodong Lin},"),a("br"),t._v("       year={2023},"),a("br"),t._v("       eprint={2303.17870},"),a("br"),t._v("       archivePrefix={arXiv},"),a("br"),t._v("       primaryClass={cs.CV}"),a("br"),t._v(" } ")])])],1)],1)],1)],1)],1),a("div",{staticClass:"busuanzi"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("span",{staticStyle:{display:"none"},attrs:{id:"busuanzi_container_site_pv"}},[t._v(" 本站总访问量 "),a("span",{attrs:{id:"busuanzi_value_site_pv"}}),t._v("次 "),a("span",{staticClass:"post-meta-divider"},[t._v("|")])]),a("span",{staticStyle:{display:"none"},attrs:{id:"busuanzi_container_site_uv"}},[t._v(" 本站访客数 "),a("span",{attrs:{id:"busuanzi_value_site_uv"}}),t._v("人 ")])])],1)])},l=[],c=i(77965),g=(i(41539),i(54747),i(33948),i(78783),i(74916),i(15306),i(23123),i(92222),i(47042),i(38862),i(26166)),u=i.n(g),f=i(71941),d={name:"showEntity",props:{msg:String},components:{waterfall:f.Z},data:function(){return{autoResize:!0,fillBox:!1,col:6,imgsArr:[],imgsArrDisplay:[],Options:{inline:!1,button:!0,navbar:!1,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!1,keyboard:!0,url:"data-source"},viewer:"",swiperImageList1:[],swiperShow:!1,tittleText:"",labelDisplay:!0,selectTab:"4",inputQuery:"熊猫在吃竹子",options:[{value:"2",label:"主题"},{value:"4",label:"壁纸"},{value:"12",label:"动态壁纸"},{value:"10",label:"视频铃声"}],loading:!1,componentKey:0,sliceIndex:0,imgPart1:[],imgPart2:[],imgPart1Row1:[],imgPart1Row2:[],infoMap:{"一辆汽车的侧面贴着“速度”":'"Speed" is pasted on the side of a car',"图书馆墙壁上贴着“请勿涂鸦”的标语":'There are slogans on the walls of the library that say "No Graffiti"',"“秋天来了”写在漂浮在湖面上的秋叶上":'"Autumn Comes" is written on autumn leaves floating on the lake',"一个手绘的菠萝形状的木制“菠萝俱乐部”标志，悬挂在酒吧外":'A hand-painted wooden "Pineapple Club" logo in the shape of a pineapple hung outside the bar',"一个红包,写了“新春快乐”的祝福":'A red envelope with the blessing of "Happy New Year"',"一件t恤，上面写着“没有行星”":'A T-shirt that says "No Planet"',"一只猫在读一本书，书的标题是“捉鼠大法”":'A cat is reading a book entitled "The Great Method of Catching Rats"',"一只猫在读一本书，标题是“捉鼠大法”":'A cat is reading a book entitled "The Great Method of Catching Rats"',"一辆车上写着“速度”的标语":'A car has a slogan with "speed" written on it',"书店里贴了“请勿涂鸦”的告示":'A notice "No Graffiti" was posted in the bookstore',"书店里贴了“请勿涂鸦”的告示 ":'A notice "No Graffiti" was posted in the bookstore',"图书馆里挂着“勿扰”的门牌":'There is a "Don\'t Disturb" sign hanging in the library',"在停车场里，一张写着“禁止停车”的牌子":'In the parking lot, a sign says "No Parking"',"在医院里，一张写着“请勿打扰”的牌子":'In the hospital, a sign says "Don\'t Disturb"',"在博物馆里，一块写着“禁止用闪光灯”的标牌":'In the museum, a sign says "No Flashing"',"博物馆里，展柜里有一个标记为“月亮岩”的标志":'In the museum, there is a sign labeled "Moon Rock" in the display cabinet',"在图书馆，一张写着“请勿喧哗”的标牌":'In the library, there is a sign that says "No Noise"',"在展览馆里，一张写着“请勿触摸”的标牌":'In the exhibition hall, a sign says "Do Not Touch"',"在火车站，一张写着“请排队购票”的牌子":'At the railway station, there is a sign saying "Please queue up to buy tickets"',"在火车站，一张写着“请排队购票”的牌子 ":'At the railway station, there is a sign saying "Please queue up to buy tickets"',"在超市里，一张写着“请勿触摸”的标识":'In a supermarket, a sign says "Do Not Touch"',"在音乐会现场，“摇滚”字样":'At the concert site, the words "rock"',"小乌龟举着牌子，上面显示“我要爬山”":'The little turtle held up a sign that said, "I want to climb the mountain."',"小乌龟举着牌子，上面显示“我要爬山” ":'The little turtle held up a sign that said, "I want to climb the mountain."',"小乌龟举着牌子，显示“我要爬山”  ":'The little turtle held up a sign that said, "I want to climb the mountain."',"小乌龟举着牌子，显示“我要爬山”":'The little turtle held up a sign that said, "I want to climb the mountain."',"小松鼠举着牌子，上面显示“我要储存粮食”":'The little squirrel held up a sign that said, "I want to store grain."',"小浣熊拿着牌子,“我要学习”":'The little raccoon held the sign and said, "I want to learn."',"小浣熊杯子上印着“浣”":'"Huan" is printed on the little raccoon cup',"小浣熊盯着“深度学习”思考着未来":'Little Raccoon Stares at "Deep Learning" Thinking about the Future',"小海豚举着牌子，上面显示“我要游泳”":'The little dolphin held up a sign that said, "I want to swim."',"小狐狸举着牌子，上面写着“我要食物”":'The little fox held up a sign that said, "I want food."',"小猫咪举着牌子，上面显示“我要吃鱼”":'Kitty holds up a sign that says "I want to eat fish"',"小猫咪举着牌子，上面显示“我要吃鱼”。":'The kitten held up a sign that said, "I want to eat fish.".',"小猴子举着牌子，上面写着“我要果子”":'The little monkey held up a sign that said, "I want fruit."',"小蜜蜂举着牌子，上面显示“我要采花”":'The little bee held up a sign that said, "I want to pick flowers."',"小鹿举着牌子，上面显示“我要奔跑”":'The deer held up a sign that said, "I want to run."',"校园里，一块写着“禁止乱扔垃圾”的标语":'On campus, a sign reads "No Littering"',"桌子上有本书，标题是“花园里的女孩”":'There is a book on the table entitled "The Girl in the Garden"',"海边有一个刻着“北戴河”的石碑":'There is a stone tablet engraved with "Beidaihe" on the seashore',"草地上贴着“禁止踩踏”的标识":'"No Treading" signs are pasted on the grass',"街边的路牌，内容显示“天道酬勤”":'A street sign displaying "Heavenly Way Rewards Diligence"',"课堂上，黑板上写着“知识改变命运”这句话":'In class, the sentence "knowledge changes fate" is written on the blackboard',"赌场门口挂着“拒绝赌博”的禁止牌":'There is a "No Gambling" sign hanging outside the casino',"这个垃圾桶上写着“环境保护”的字样":'The words "environmental protection" are written on this trash can',"这个旅行箱上写着“轻松出行”的字样":'The words "Easy Travel" are written on this suitcase',"这本书上写着“智慧启迪”的标语":'The book has a slogan "Wisdom and Enlightenment" written on it',"酒店里贴着“请勿打扰”的门牌":'There is a "Do Not Disturb" sign posted in the hotel',"饭盒上写了“健康饮食”的字样":'The words "healthy eating" are written on the lunch box'},modelDesignsText:"",AbstractText:"Recent breakthroughs in the field of language-guided image generation have yielded impressive achievements, enabling the creation of high-quality and diverse images based on user instructions.Although the synthesis performance is fascinating, one significant limitation of current image generation models is their insufficient ability to generate coherent text within images, particularly for complex glyph structures like Chinese characters. To address this problem, we introduce GlyphDraw, a general learning framework aimed at endowing image generation models with the capacity to generate images embedded with coherent text.To the best of our knowledge, this is the first work in the field of image synthesis to address the generation of Chinese characters.We first sophisticatedly design the image-text dataset's construction strategy, then build our model specifically on a diffusion-based image generator and carefully modify the network structure to allow the model to learn drawing Chinese characters with the help of glyph and position information.Furthermore, we maintain the model's open-domain image synthesis capability by preventing catastrophic forgetting using a variety of training techniques.Extensive qualitative and quantitative experiments demonstrate that our method not only produces accurate Chinese characters as in prompts, but also naturally blends the generated text into the background."}},mounted:function(){i(50868);window.addEventListener("scroll",this.scrolling),this.initImgList()},methods:{initImgList:function(){var t=this;console.log(this.infoMap["一辆汽车的侧面贴着“速度”"]);var e=i(71431);this.imgsArr=[],e.keys().forEach((function(e){i(44298)("./part1"+e.replace(".","")),t.imgPart1.push({url:i(16444)("./part1"+e.replace(".","")),info:e.replace("./","").split(".")[0],info2:t.infoMap[e.replace("./","").split(".")[0]]})})),e=i(84577),this.imgsArr=[],e.keys().forEach((function(e){i(30524)("./part2"+e.replace(".","")),t.imgPart2.push({url:i(81422)("./part2"+e.replace(".","")),info:e.replace("./","").split(".")[0],info2:t.infoMap[e.replace("./","").split(".")[0]]})})),console.log(this.imgPart1Row1)},scrolling:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.scrollHeight||document.body.scrollHeight;t/e>.7&&this.getData()},getData:function(){this.loading=!0,this.imgsArrDisplay=this.imgsArrDisplay.concat(this.imgsArr.slice(this.sliceIndex-50,this.sliceIndex)),this.sliceIndex+=50,console.log(this.imgsArrDisplay.length),this.loading=!1},loadmore:function(){var t=this;this.loading=!0,setTimeout((function(){t.imgsArrDisplay=t.imgsArrDisplay.concat(t.imgsArr.slice(t.sliceIndex-50,t.sliceIndex)),t.sliceIndex+=50,t.loading=!1,console.log(t.imgsArrDisplay.length)}),1e3)},scrollFn:function(){},imgClick:function(t){console.log(t),this.$viewer.full(),this.viewer.view(t)},inited:function(t){this.$viewer=t,this.viewer=t},selectChange:function(t){console.log(t)},onSubmit:function(){var t=this;this.loading=!0,u()({method:"post",url:"/api/rongzhi-topic-image/topic-image/analysis/text/list",data:JSON.stringify({tab:this.selectTab,query:this.inputQuery,topk:2e3}),headers:{"Content-Type":"application/json;charset=UTF-8"}}).then((function(e){if(console.log(e),200==e.data.code){t.imgsArr=[],t.swiperImageList1=[],t.imgsArrDisplay=[],t.sliceIndex=50;var i,a=(0,c.Z)(e.data.data);try{for(a.s();!(i=a.n()).done;){var n=i.value;-1!=n["id"]&&(t.imgsArr.push({url:n["url"],info:n["distance"],id:n["id"]}),t.swiperImageList1.push(n["url"]))}}catch(r){a.e(r)}finally{a.f()}t.getData(),t.$nextTick((function(){}))}else t.$message({showClose:!0,message:e.data.msg,type:"error"}),t.loading=!1;t.loading=!1}))}}},h=d,m=i(1001),j=(0,m.Z)(h,p,l,!1,null,null,null),y=j.exports,b={name:"App",components:{HelloWorld:y}},v=b,w=(0,m.Z)(v,s,o,!1,null,null,null),x=w.exports;a["default"].config.productionTip=!1,a["default"].use(r()),document.title="展示",new a["default"]({render:function(t){return t(x)}}).$mount("#app")},71431:function(t,e,i){var a={"./一个红包,写了“新春快乐”的祝福.jpg":65499,"./一辆汽车的侧面贴着“速度”.jpg":34006,"./博物馆里，展柜里有一个标记为“月亮岩”的标志.jpg":61665,"./图书馆墙壁上贴着“请勿涂鸦”的标语.jpg":87793,"./在医院里，一张写着“请勿打扰”的牌子.jpg":64649,"./小松鼠举着牌子，上面显示“我要储存粮食”.jpg":12038,"./小浣熊杯子上印着“浣”.jpg":2174,"./小浣熊盯着“深度学习”思考着未来.jpg":16657,"./小猫咪举着牌子，上面显示“我要吃鱼”.jpg":86431,"./小鹿举着牌子，上面显示“我要奔跑”.jpg":6181,"./赌场门口挂着“拒绝赌博”的禁止牌.jpg":89537,"./这个垃圾桶上写着“环境保护”的字样.jpg":91141};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=71431},84577:function(t,e,i){var a={"./“秋天来了”写在漂浮在湖面上的秋叶上.jpg":29124,"./一个手绘的菠萝形状的木制“菠萝俱乐部”标志，悬挂在酒吧外.jpg":42675,"./一件t恤，上面写着“没有行星”.jpg":91426,"./一只猫在读一本书，书的标题是“捉鼠大法”.jpg":65409,"./一只猫在读一本书，标题是“捉鼠大法”.jpg":43902,"./一辆车上写着“速度”的标语.jpg":21596,"./书店里贴了“请勿涂鸦”的告示 .jpg":95803,"./书店里贴了“请勿涂鸦”的告示.jpg":73368,"./图书馆里挂着“勿扰”的门牌.jpg":38932,"./在停车场里，一张写着“禁止停车”的牌子.jpg":95183,"./在博物馆里，一块写着“禁止用闪光灯”的标牌.jpg":75e3,"./在图书馆，一张写着“请勿喧哗”的标牌.jpg":47007,"./在展览馆里，一张写着“请勿触摸”的标牌.jpg":58287,"./在火车站，一张写着“请排队购票”的牌子 .jpg":6637,"./在火车站，一张写着“请排队购票”的牌子.jpg":27223,"./在超市里，一张写着“请勿触摸”的标识.jpg":10634,"./在音乐会现场，“摇滚”字样.jpg":72422,"./小乌龟举着牌子，上面显示“我要爬山” .jpg":45021,"./小乌龟举着牌子，上面显示“我要爬山”.jpg":51784,"./小乌龟举着牌子，显示“我要爬山”  .jpg":33259,"./小浣熊拿着牌子,“我要学习”.jpg":77314,"./小海豚举着牌子，上面显示“我要游泳”.jpg":65910,"./小狐狸举着牌子，上面写着“我要食物”.jpg":90864,"./小猫咪举着牌子，上面显示“我要吃鱼”。.jpg":60231,"./小猴子举着牌子，上面写着“我要果子”.jpg":13725,"./小蜜蜂举着牌子，上面显示“我要采花”.jpg":72919,"./校园里，一块写着“禁止乱扔垃圾”的标语.jpg":57630,"./桌子上有本书，标题是“花园里的女孩”.jpg":26398,"./海边有一个刻着“北戴河”的石碑.jpg":76898,"./草地上贴着“禁止踩踏”的标识.jpg":39183,"./街边的路牌，内容显示“天道酬勤”.jpg":57611,"./课堂上，黑板上写着“知识改变命运”这句话.jpg":79860,"./这个旅行箱上写着“轻松出行”的字样.jpg":11167,"./这本书上写着“智慧启迪”的标语.jpg":25949,"./酒店里贴着“请勿打扰”的门牌.jpg":13621,"./饭盒上写了“健康饮食”的字样.jpg":75760};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=84577},44298:function(t,e,i){var a={"./part1/一个红包,写了“新春快乐”的祝福.jpg":65499,"./part1/一辆汽车的侧面贴着“速度”.jpg":34006,"./part1/博物馆里，展柜里有一个标记为“月亮岩”的标志.jpg":61665,"./part1/图书馆墙壁上贴着“请勿涂鸦”的标语.jpg":87793,"./part1/在医院里，一张写着“请勿打扰”的牌子.jpg":64649,"./part1/小松鼠举着牌子，上面显示“我要储存粮食”.jpg":12038,"./part1/小浣熊杯子上印着“浣”.jpg":2174,"./part1/小浣熊盯着“深度学习”思考着未来.jpg":16657,"./part1/小猫咪举着牌子，上面显示“我要吃鱼”.jpg":86431,"./part1/小鹿举着牌子，上面显示“我要奔跑”.jpg":6181,"./part1/赌场门口挂着“拒绝赌博”的禁止牌.jpg":89537,"./part1/这个垃圾桶上写着“环境保护”的字样.jpg":91141};function n(t){return Promise.resolve().then((function(){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var n=a[t];return i.t(n,17)}))}n.keys=function(){return Object.keys(a)},n.id=44298,t.exports=n},30524:function(t,e,i){var a={"./part2/“秋天来了”写在漂浮在湖面上的秋叶上.jpg":29124,"./part2/一个手绘的菠萝形状的木制“菠萝俱乐部”标志，悬挂在酒吧外.jpg":42675,"./part2/一件t恤，上面写着“没有行星”.jpg":91426,"./part2/一只猫在读一本书，书的标题是“捉鼠大法”.jpg":65409,"./part2/一只猫在读一本书，标题是“捉鼠大法”.jpg":43902,"./part2/一辆车上写着“速度”的标语.jpg":21596,"./part2/书店里贴了“请勿涂鸦”的告示 .jpg":95803,"./part2/书店里贴了“请勿涂鸦”的告示.jpg":73368,"./part2/图书馆里挂着“勿扰”的门牌.jpg":38932,"./part2/在停车场里，一张写着“禁止停车”的牌子.jpg":95183,"./part2/在博物馆里，一块写着“禁止用闪光灯”的标牌.jpg":75e3,"./part2/在图书馆，一张写着“请勿喧哗”的标牌.jpg":47007,"./part2/在展览馆里，一张写着“请勿触摸”的标牌.jpg":58287,"./part2/在火车站，一张写着“请排队购票”的牌子 .jpg":6637,"./part2/在火车站，一张写着“请排队购票”的牌子.jpg":27223,"./part2/在超市里，一张写着“请勿触摸”的标识.jpg":10634,"./part2/在音乐会现场，“摇滚”字样.jpg":72422,"./part2/小乌龟举着牌子，上面显示“我要爬山” .jpg":45021,"./part2/小乌龟举着牌子，上面显示“我要爬山”.jpg":51784,"./part2/小乌龟举着牌子，显示“我要爬山”  .jpg":33259,"./part2/小浣熊拿着牌子,“我要学习”.jpg":77314,"./part2/小海豚举着牌子，上面显示“我要游泳”.jpg":65910,"./part2/小狐狸举着牌子，上面写着“我要食物”.jpg":90864,"./part2/小猫咪举着牌子，上面显示“我要吃鱼”。.jpg":60231,"./part2/小猴子举着牌子，上面写着“我要果子”.jpg":13725,"./part2/小蜜蜂举着牌子，上面显示“我要采花”.jpg":72919,"./part2/校园里，一块写着“禁止乱扔垃圾”的标语.jpg":57630,"./part2/桌子上有本书，标题是“花园里的女孩”.jpg":26398,"./part2/海边有一个刻着“北戴河”的石碑.jpg":76898,"./part2/草地上贴着“禁止踩踏”的标识.jpg":39183,"./part2/街边的路牌，内容显示“天道酬勤”.jpg":57611,"./part2/课堂上，黑板上写着“知识改变命运”这句话.jpg":79860,"./part2/这个旅行箱上写着“轻松出行”的字样.jpg":11167,"./part2/这本书上写着“智慧启迪”的标语.jpg":25949,"./part2/酒店里贴着“请勿打扰”的门牌.jpg":13621,"./part2/饭盒上写了“健康饮食”的字样.jpg":75760};function n(t){return Promise.resolve().then((function(){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var n=a[t];return i.t(n,17)}))}n.keys=function(){return Object.keys(a)},n.id=30524,t.exports=n},16444:function(t,e,i){var a={"./part1/一个红包,写了“新春快乐”的祝福.jpg":65499,"./part1/一辆汽车的侧面贴着“速度”.jpg":34006,"./part1/博物馆里，展柜里有一个标记为“月亮岩”的标志.jpg":61665,"./part1/图书馆墙壁上贴着“请勿涂鸦”的标语.jpg":87793,"./part1/在医院里，一张写着“请勿打扰”的牌子.jpg":64649,"./part1/小松鼠举着牌子，上面显示“我要储存粮食”.jpg":12038,"./part1/小浣熊杯子上印着“浣”.jpg":2174,"./part1/小浣熊盯着“深度学习”思考着未来.jpg":16657,"./part1/小猫咪举着牌子，上面显示“我要吃鱼”.jpg":86431,"./part1/小鹿举着牌子，上面显示“我要奔跑”.jpg":6181,"./part1/赌场门口挂着“拒绝赌博”的禁止牌.jpg":89537,"./part1/这个垃圾桶上写着“环境保护”的字样.jpg":91141};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=16444},81422:function(t,e,i){var a={"./part2/“秋天来了”写在漂浮在湖面上的秋叶上.jpg":29124,"./part2/一个手绘的菠萝形状的木制“菠萝俱乐部”标志，悬挂在酒吧外.jpg":42675,"./part2/一件t恤，上面写着“没有行星”.jpg":91426,"./part2/一只猫在读一本书，书的标题是“捉鼠大法”.jpg":65409,"./part2/一只猫在读一本书，标题是“捉鼠大法”.jpg":43902,"./part2/一辆车上写着“速度”的标语.jpg":21596,"./part2/书店里贴了“请勿涂鸦”的告示 .jpg":95803,"./part2/书店里贴了“请勿涂鸦”的告示.jpg":73368,"./part2/图书馆里挂着“勿扰”的门牌.jpg":38932,"./part2/在停车场里，一张写着“禁止停车”的牌子.jpg":95183,"./part2/在博物馆里，一块写着“禁止用闪光灯”的标牌.jpg":75e3,"./part2/在图书馆，一张写着“请勿喧哗”的标牌.jpg":47007,"./part2/在展览馆里，一张写着“请勿触摸”的标牌.jpg":58287,"./part2/在火车站，一张写着“请排队购票”的牌子 .jpg":6637,"./part2/在火车站，一张写着“请排队购票”的牌子.jpg":27223,"./part2/在超市里，一张写着“请勿触摸”的标识.jpg":10634,"./part2/在音乐会现场，“摇滚”字样.jpg":72422,"./part2/小乌龟举着牌子，上面显示“我要爬山” .jpg":45021,"./part2/小乌龟举着牌子，上面显示“我要爬山”.jpg":51784,"./part2/小乌龟举着牌子，显示“我要爬山”  .jpg":33259,"./part2/小浣熊拿着牌子,“我要学习”.jpg":77314,"./part2/小海豚举着牌子，上面显示“我要游泳”.jpg":65910,"./part2/小狐狸举着牌子，上面写着“我要食物”.jpg":90864,"./part2/小猫咪举着牌子，上面显示“我要吃鱼”。.jpg":60231,"./part2/小猴子举着牌子，上面写着“我要果子”.jpg":13725,"./part2/小蜜蜂举着牌子，上面显示“我要采花”.jpg":72919,"./part2/校园里，一块写着“禁止乱扔垃圾”的标语.jpg":57630,"./part2/桌子上有本书，标题是“花园里的女孩”.jpg":26398,"./part2/海边有一个刻着“北戴河”的石碑.jpg":76898,"./part2/草地上贴着“禁止踩踏”的标识.jpg":39183,"./part2/街边的路牌，内容显示“天道酬勤”.jpg":57611,"./part2/课堂上，黑板上写着“知识改变命运”这句话.jpg":79860,"./part2/这个旅行箱上写着“轻松出行”的字样.jpg":11167,"./part2/这本书上写着“智慧启迪”的标语.jpg":25949,"./part2/酒店里贴着“请勿打扰”的门牌.jpg":13621,"./part2/饭盒上写了“健康饮食”的字样.jpg":75760};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=81422},67082:function(t,e,i){"use strict";t.exports=i.p+"img/example1.681b4aa6.png"},65499:function(t,e,i){"use strict";t.exports=i.p+"img/一个红包,写了“新春快乐”的祝福.290e72fc.jpg"},34006:function(t,e,i){"use strict";t.exports=i.p+"img/一辆汽车的侧面贴着“速度”.88dcb796.jpg"},61665:function(t,e,i){"use strict";t.exports=i.p+"img/博物馆里，展柜里有一个标记为“月亮岩”的标志.edea49b4.jpg"},87793:function(t,e,i){"use strict";t.exports=i.p+"img/图书馆墙壁上贴着“请勿涂鸦”的标语.d61b411d.jpg"},64649:function(t,e,i){"use strict";t.exports=i.p+"img/在医院里，一张写着“请勿打扰”的牌子.594310ec.jpg"},12038:function(t,e,i){"use strict";t.exports=i.p+"img/小松鼠举着牌子，上面显示“我要储存粮食”.5d2aed0b.jpg"},2174:function(t,e,i){"use strict";t.exports=i.p+"img/小浣熊杯子上印着“浣”.bac79b88.jpg"},16657:function(t,e,i){"use strict";t.exports=i.p+"img/小浣熊盯着“深度学习”思考着未来.2f6375e3.jpg"},86431:function(t,e,i){"use strict";t.exports=i.p+"img/小猫咪举着牌子，上面显示“我要吃鱼”.c33ec696.jpg"},6181:function(t,e,i){"use strict";t.exports=i.p+"img/小鹿举着牌子，上面显示“我要奔跑”.ec9a8837.jpg"},89537:function(t,e,i){"use strict";t.exports=i.p+"img/赌场门口挂着“拒绝赌博”的禁止牌.f1dc3c54.jpg"},91141:function(t,e,i){"use strict";t.exports=i.p+"img/这个垃圾桶上写着“环境保护”的字样.f76f65bb.jpg"},29124:function(t,e,i){"use strict";t.exports=i.p+"img/“秋天来了”写在漂浮在湖面上的秋叶上.6e9852d2.jpg"},42675:function(t,e,i){"use strict";t.exports=i.p+"img/一个手绘的菠萝形状的木制“菠萝俱乐部”标志，悬挂在酒吧外.f9435170.jpg"},91426:function(t,e,i){"use strict";t.exports=i.p+"img/一件t恤，上面写着“没有行星”.ef71fb1a.jpg"},65409:function(t,e,i){"use strict";t.exports=i.p+"img/一只猫在读一本书，书的标题是“捉鼠大法”.015dc50e.jpg"},43902:function(t,e,i){"use strict";t.exports=i.p+"img/一只猫在读一本书，标题是“捉鼠大法”.99f9ed7a.jpg"},21596:function(t,e,i){"use strict";t.exports=i.p+"img/一辆车上写着“速度”的标语.1378eb17.jpg"},95803:function(t,e,i){"use strict";t.exports=i.p+"img/书店里贴了“请勿涂鸦”的告示 .e8c5c3a6.jpg"},73368:function(t,e,i){"use strict";t.exports=i.p+"img/书店里贴了“请勿涂鸦”的告示.d15b517b.jpg"},38932:function(t,e,i){"use strict";t.exports=i.p+"img/图书馆里挂着“勿扰”的门牌.7f2568b1.jpg"},95183:function(t,e,i){"use strict";t.exports=i.p+"img/在停车场里，一张写着“禁止停车”的牌子.d444dd7f.jpg"},75e3:function(t,e,i){"use strict";t.exports=i.p+"img/在博物馆里，一块写着“禁止用闪光灯”的标牌.a9bb423b.jpg"},47007:function(t,e,i){"use strict";t.exports=i.p+"img/在图书馆，一张写着“请勿喧哗”的标牌.1661469e.jpg"},58287:function(t,e,i){"use strict";t.exports=i.p+"img/在展览馆里，一张写着“请勿触摸”的标牌.6dab46bf.jpg"},6637:function(t,e,i){"use strict";t.exports=i.p+"img/在火车站，一张写着“请排队购票”的牌子 .7d826e8c.jpg"},27223:function(t,e,i){"use strict";t.exports=i.p+"img/在火车站，一张写着“请排队购票”的牌子.4a8244ac.jpg"},10634:function(t,e,i){"use strict";t.exports=i.p+"img/在超市里，一张写着“请勿触摸”的标识.5225de6c.jpg"},72422:function(t,e,i){"use strict";t.exports=i.p+"img/在音乐会现场，“摇滚”字样.c03c1feb.jpg"},45021:function(t,e,i){"use strict";t.exports=i.p+"img/小乌龟举着牌子，上面显示“我要爬山” .88f6380b.jpg"},51784:function(t,e,i){"use strict";t.exports=i.p+"img/小乌龟举着牌子，上面显示“我要爬山”.5d351e93.jpg"},33259:function(t,e,i){"use strict";t.exports=i.p+"img/小乌龟举着牌子，显示“我要爬山”  .6bc25e48.jpg"},77314:function(t,e,i){"use strict";t.exports=i.p+"img/小浣熊拿着牌子,“我要学习”.4bb7d430.jpg"},65910:function(t,e,i){"use strict";t.exports=i.p+"img/小海豚举着牌子，上面显示“我要游泳”.a2d4665e.jpg"},90864:function(t,e,i){"use strict";t.exports=i.p+"img/小狐狸举着牌子，上面写着“我要食物”.dbd05ebe.jpg"},60231:function(t,e,i){"use strict";t.exports=i.p+"img/小猫咪举着牌子，上面显示“我要吃鱼”。.fb113e98.jpg"},13725:function(t,e,i){"use strict";t.exports=i.p+"img/小猴子举着牌子，上面写着“我要果子”.cc4c8512.jpg"},72919:function(t,e,i){"use strict";t.exports=i.p+"img/小蜜蜂举着牌子，上面显示“我要采花”.bc3a86f9.jpg"},57630:function(t,e,i){"use strict";t.exports=i.p+"img/校园里，一块写着“禁止乱扔垃圾”的标语.2f63231e.jpg"},26398:function(t,e,i){"use strict";t.exports=i.p+"img/桌子上有本书，标题是“花园里的女孩”.ff5e6ae4.jpg"},76898:function(t,e,i){"use strict";t.exports=i.p+"img/海边有一个刻着“北戴河”的石碑.af050acf.jpg"},39183:function(t,e,i){"use strict";t.exports=i.p+"img/草地上贴着“禁止踩踏”的标识.5fb4a743.jpg"},57611:function(t,e,i){"use strict";t.exports=i.p+"img/街边的路牌，内容显示“天道酬勤”.b7824308.jpg"},79860:function(t,e,i){"use strict";t.exports=i.p+"img/课堂上，黑板上写着“知识改变命运”这句话.356a4637.jpg"},11167:function(t,e,i){"use strict";t.exports=i.p+"img/这个旅行箱上写着“轻松出行”的字样.0cb5c74a.jpg"},25949:function(t,e,i){"use strict";t.exports=i.p+"img/这本书上写着“智慧启迪”的标语.1c4ae681.jpg"},13621:function(t,e,i){"use strict";t.exports=i.p+"img/酒店里贴着“请勿打扰”的门牌.cabe5239.jpg"},75760:function(t,e,i){"use strict";t.exports=i.p+"img/饭盒上写了“健康饮食”的字样.73e8d8c1.jpg"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,r){if(!a){var s=1/0;for(c=0;c<t.length;c++){a=t[c][0],n=t[c][1],r=t[c][2];for(var o=!0,p=0;p<a.length;p++)(!1&r||s>=r)&&Object.keys(i.O).every((function(t){return i.O[t](a[p])}))?a.splice(p--,1):(o=!1,r<s&&(s=r));if(o){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,n,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};i.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"===typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"===typeof a.then)return a}var r=Object.create(null);i.r(r);var s={};t=t||[null,e({}),e([]),e(e)];for(var o=2&n&&a;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){s[t]=function(){return a[t]}}));return s["default"]=function(){return a},i.d(r,s),r}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.e=function(){return Promise.resolve()}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/glyph-draw.github.io/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,s=a[0],o=a[1],p=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(p)var c=p(i)}for(e&&e(a);l<s.length;l++)r=s[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},a=self["webpackChunkclip_zsc_front"]=self["webpackChunkclip_zsc_front"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(10204)}));a=i.O(a)})();
//# sourceMappingURL=app-legacy.954d486b.js.map