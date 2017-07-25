angular.module("gettext",[]),angular.module("gettext").constant("gettext",function(a){return a}),angular.module("gettext").factory("gettextCatalog",["gettextPlurals","gettextFallbackLanguage","$http","$cacheFactory","$interpolate","$rootScope",function(a,b,c,d,e,f){function g(){f.$broadcast("gettextLanguageChanged")}var h,i="$$noContext",j='<span id="test" title="test" class="tested">test</span>',k=angular.element("<span>"+j+"</span>").html()!==j,l=function(a){return h.debug&&h.currentLanguage!==h.baseLanguage?h.debugPrefix+a:a},m=function(a){return h.showTranslatedMarkers?h.translatedMarkerPrefix+a+h.translatedMarkerSuffix:a};return h={debug:!1,debugPrefix:"[MISSING]: ",showTranslatedMarkers:!1,translatedMarkerPrefix:"[",translatedMarkerSuffix:"]",strings:{},baseLanguage:"en",currentLanguage:"en",cache:d("strings"),setCurrentLanguage:function(a){this.currentLanguage=a,g()},getCurrentLanguage:function(){return this.currentLanguage},setStrings:function(b,c){this.strings[b]||(this.strings[b]={});var d=a(b,1);for(var e in c){var f=c[e];if(k&&(e=angular.element("<span>"+e+"</span>").html()),angular.isString(f)||angular.isArray(f)){var h={};h[i]=f,f=h}this.strings[b][e]||(this.strings[b][e]={});for(var j in f){var l=f[j];angular.isArray(l)?this.strings[b][e][j]=l:(this.strings[b][e][j]=[],this.strings[b][e][j][d]=l)}}g()},getStringFormFor:function(b,c,d,e){if(!b)return null;var f=this.strings[b]||{},g=f[c]||{},h=g[e||i]||[];return h[a(b,d)]},getString:function(a,c,d){var f=b(this.currentLanguage);return a=this.getStringFormFor(this.currentLanguage,a,1,d)||this.getStringFormFor(f,a,1,d)||l(a),a=c?e(a)(c):a,m(a)},getPlural:function(a,c,d,f,g){var h=b(this.currentLanguage);return c=this.getStringFormFor(this.currentLanguage,c,a,g)||this.getStringFormFor(h,c,a,g)||l(1===a?c:d),f&&(f.$count=a,c=e(c)(f)),m(c)},loadRemote:function(a){return c({method:"GET",url:a,cache:h.cache}).then(function(a){var b=a.data;for(var c in b)h.setStrings(c,b[c]);return a})}}}]),angular.module("gettext").directive("translate",["gettextCatalog","$parse","$animate","$compile","$window","gettextUtil",function(a,b,c,d,e,f){function g(a){return f.lcFirst(a.replace(j,""))}function h(a,b,c){var d=Object.keys(b).filter(function(a){return f.startsWith(a,j)&&a!==j});if(!d.length)return null;var e=angular.extend({},a),h=[];return d.forEach(function(d){var f=a.$watch(b[d],function(a){var b=g(d);e[b]=a,c(e)});h.push(f)}),a.$on("$destroy",function(){h.forEach(function(a){a()})}),e}var i=parseInt((/msie (\d+)/.exec(angular.lowercase(e.navigator.userAgent))||[])[1],10),j="translateParams";return{restrict:"AE",terminal:!0,compile:function(e,g){f.assert(!g.translatePlural||g.translateN,"translate-n","translate-plural"),f.assert(!g.translateN||g.translatePlural,"translate-plural","translate-n");var j=f.trim(e.html()),k=g.translatePlural,l=g.translateContext;return 8>=i&&"<!--IE fix-->"===j.slice(-13)&&(j=j.slice(0,-13)),{post:function(e,g,i){function m(b){b=b||null;var h;k?(e=o||(o=e.$new()),e.$count=n(e),h=a.getPlural(e.$count,j,k,b,l)):h=a.getString(j,b,l);var i=g.contents();if(i||h){if(h===f.trim(i.html()))return void(p&&d(i)(e));var m=angular.element("<span>"+h+"</span>");d(m.contents())(e);var q=m.contents();c.enter(q,g),c.leave(i)}}var n=b(i.translateN),o=null,p=!0,q=h(e,i,m);m(q),p=!1,i.translateN&&e.$watch(i.translateN,function(){m(q)}),e.$on("gettextLanguageChanged",function(){m(q)})}}}}}]),angular.module("gettext").factory("gettextFallbackLanguage",function(){var a={},b=/([^_]+)_[^_]+$/;return function(c){if(a[c])return a[c];var d=b.exec(c);return d?(a[c]=d[1],d[1]):null}}),angular.module("gettext").filter("translate",["gettextCatalog",function(a){function b(b,c){return a.getString(b,null,c)}return b.$stateful=!0,b}]),angular.module("gettext").factory("gettextPlurals",function(){function a(a){return b[a]||(b[a]=a.split(/\-|_/).shift()),b[a]}var b={pt_BR:"pt_BR","pt-BR":"pt_BR"};return function(b,c){switch(a(b)){case"ay":case"bo":case"cgg":case"dz":case"fa":case"id":case"ja":case"jbo":case"ka":case"kk":case"km":case"ko":case"ky":case"lo":case"ms":case"my":case"sah":case"su":case"th":case"tt":case"ug":case"vi":case"wo":case"zh":return 0;case"is":return c%10!=1||c%100==11?1:0;case"jv":return 0!=c?1:0;case"mk":return 1==c||c%10==1?0:1;case"ach":case"ak":case"am":case"arn":case"br":case"fil":case"fr":case"gun":case"ln":case"mfe":case"mg":case"mi":case"oc":case"pt_BR":case"tg":case"ti":case"tr":case"uz":case"wa":case"zh":return c>1?1:0;case"lv":return c%10==1&&c%100!=11?0:0!=c?1:2;case"lt":return c%10==1&&c%100!=11?0:c%10>=2&&(10>c%100||c%100>=20)?1:2;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return c%10==1&&c%100!=11?0:c%10>=2&&4>=c%10&&(10>c%100||c%100>=20)?1:2;case"mnk":return 0==c?0:1==c?1:2;case"ro":return 1==c?0:0==c||c%100>0&&20>c%100?1:2;case"pl":return 1==c?0:c%10>=2&&4>=c%10&&(10>c%100||c%100>=20)?1:2;case"cs":case"sk":return 1==c?0:c>=2&&4>=c?1:2;case"sl":return c%100==1?1:c%100==2?2:c%100==3||c%100==4?3:0;case"mt":return 1==c?0:0==c||c%100>1&&11>c%100?1:c%100>10&&20>c%100?2:3;case"gd":return 1==c||11==c?0:2==c||12==c?1:c>2&&20>c?2:3;case"cy":return 1==c?0:2==c?1:8!=c&&11!=c?2:3;case"kw":return 1==c?0:2==c?1:3==c?2:3;case"ga":return 1==c?0:2==c?1:7>c?2:11>c?3:4;case"ar":return 0==c?0:1==c?1:2==c?2:c%100>=3&&10>=c%100?3:c%100>=11?4:5;default:return 1!=c?1:0}}}),angular.module("gettext").factory("gettextUtil",function(){function a(a,b,c){if(!a)throw new Error("You should add a "+b+" attribute whenever you add a "+c+" attribute.")}function b(a,b){return 0===a.indexOf(b)}function c(a){var b=a.charAt(0).toLowerCase();return b+a.substr(1)}var d=function(){return String.prototype.trim?function(a){return"string"==typeof a?a.trim():a}:function(a){return"string"==typeof a?a.replace(/^\s*/,"").replace(/\s*$/,""):a}}();return{trim:d,assert:a,startsWith:b,lcFirst:c}});
angular.module('enplug.sdk.utils', [
	'gettext',
	'enplug.sdk.utils.templates'
]);

angular.module('enplug.sdk.utils').run(['$templateCache', function ($templateCache) {

    // Update default pagination template for Smart Table to use our directive and icons
    $templateCache.put('template/smart-table/pagination.html',
        '<div ng-if="pages.length >= 2">' +
        '<st-summary></st-summary>' +
        '<ul class="pagination plain">' +
        '<li><a class="ion-chevron-left" ng-click="selectPage(currentPage - 1)" ng-class="{ disabled: currentPage == 1 }"></a></li>'+
        '<li><a class="ion-chevron-right" ng-click="selectPage(currentPage + 1)" ng-class="{ disabled: currentPage == numPages }"></a></li>' +
        '</ul></div>');
}]);

angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('ja', {"A lot of times, people don't know what they want until you show it to them.":"人々は、提示されるまで自分が何を望んでいるのかをわかっていないことがよくあります。","A person who never made a mistake never tried anything new.":"失敗したことのない人は、新しいことを試みたことがない人です。","A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.":"悲観主義者はあらゆる機会に困難を見出し、楽観主義者はあらゆる困難に機会を見出す。","A:":"A:","Add tags":"タグを追加","Alabama":"アラバマ","Alaska":"アラスカ","All great achievements require time.":"大きな成果には時間が必要です。","All our dreams can come true, if we have the courage to pursue them.":"夢を追い求める勇気を持っているならば、夢はすべて実現します。","Amateurs practice until they get it right. Professionals practice until they can't get it wrong.":"アマチュアは、成功するまで練習する。プロフェッショナルは、失敗できなくなるまで練習する。","Ambition should be made of sterner stuff.":"野心はもっと冷酷な心から生まれる。","An ant on the move does more than a dozing ox.":"動いている蟻は寝ている牡牛よりも多くのことをする。","Apr":"4月","April":"4月","Arizona":"アリゾナ","Arkansas":"アーカンサス","At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.":"6歳の時に私は料理人になりたいと思っていました。7歳の時にはナポレオンになりたかった。それ以来、私の野心は着実に成長しています。","Aug":"８月","August":"８月","B:":"B:","California":"カリフォルニア","Carpe diem, seize the day boys, make your lives extraordinary.":"カーペ・ディエム。今を生きろ、若者たちよ。素晴らしい人生をつかめ。","Colorado":"コロラド","Connecticut":"コネチカット","Contain":"含む","Cover":"カバー","Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.":"創造性とは自分自身に失敗を許すことである。芸術とはどちらを残すべきかを知ることである。","Dec":"12月","December":"12月","Delaware":"デラウェア","District of Columbia":"ワシントンD.C.","Do things that have never been done before.":"これまでしたことのないことをせよ。","Doing the best at this moment puts you in the best place for the next moment.":"今この瞬間に最善を尽くすことによって、次の瞬間に最善の場所に行くことができる。","During your life, never stop dreaming. No one can take away your dreams.":"生きている間は夢見ることをやめてはならない。誰もあなたの夢を奪えない。","Enplug Help Center":"Enplug ヘルプセンターをご覧ください","Every act of creation is first of all an act of destruction.":"いかなる創造活動も、はじめは破壊活動である。","Everything comes to him who hustles while he waits.":"待っている間もがんばる人にすべてのものはやってくる。","Feb":"2月","February":"2月","Florida":"フロリダ","Focus is a matter of deciding what things you're not going to do.":"集中するとは、何をやらないかを決めることである。","For every dark night, there's a brigher day.":"暗い夜のために、明るい昼がある。","Fun is good.":"楽しいことは良いことである。","G:":"G:","Genius is one percent inspiration and ninety-nine percent perspiration.":"天才とは、1パーセントのひらめきと、99パーセントの努力である。","Georgia":"ジョージア","HULK SMASH!":"ハルク、暴れろ！","Hawaii":"ハワイ","He who hesitates is lost.":"ためらうものは失敗する","I don't know where I'm going, but I'm on my way.":"どこに向かっているかはわからないが、道の途中にいる。","I hated every minute of training, but I said, 'Dont quit. Suffer now and live the rest of your life as a champion'.":"俺はトレーニングが大嫌いだった。でも、自分に言い聞かせた。「絶対にあきらめるな。今は耐えろ。そして残りの人生をチャンピオンとして生きろ」","I have no special talent. I am only passionately curious.":"私には特別な才能はない。ただ情熱的な好奇心があるだけだ。","I have not failed. I've just found 10,000 ways that won't work.":"私は失敗したことがない。うまく行かない方法を10000通り見つけただけだ。","I pay no attention whatever to anybody's praise or blame. I simply follow my own feelings.":"他人の賞賛や非難など一切気にしない。自分自身の感性に従うのみだ。","I play to win, whether during practice or a real game.":"練習でも試合でも、勝つためにプレイする。","I steal from every movie ever made.":"これまで作られた全映画から盗んだ。","I've failed over and over and over again in my life and that is why I succeed.":"人生で何度も失敗してきた。それが成功の秘訣だ。","I've got a theory that if you give 100% all the time, somehow things will work out in the end.":"つねに100％の力を尽くしていれば、物事は最終的にうまくいく。","Idaho":"アイダホ","If you love life, don't waste time, for time is what life is made up of.":"人生を愛しているならば、時間を無駄にするな。人生は時間でできている。","If you spend too much time thinking about a thing, you'll never get it done.":"何かについて考えてばかりいると、それをやり遂げることはできない。","Illinois":"イリノイ","Indiana":"インディアナ","Iowa":"アイオワ","It is the working man who is the happy man. It is the idle man who is the miserable man.":"幸福な者とは働いている者である。不幸な者とは怠惰な者である。","It's lack of faith that makes people afraid of meeting challenges, and I believed in myself.":"人間が困難に立ち向かう時、恐怖を抱くのは信頼が欠如しているからだ。私は自分を信じる。","Jan":"1月","January":"1月","Jul":"7月","July":"7月","Jun":"6月","June":"6月","Kansa":"カンザス","Kentucky":"ケンタッキー","Live long and prosper.":"長寿と繁栄を。","Lost time is never found again.":"失った時間は戻らない。","Lousiana":"ルイジアナ","Luck is preparation meeting opportunity.":"幸運とは、準備がチャンスに巡り会うこと。","Maine":"メイン","Make everything as simple as possible, but not simpler.":"何事もできる限り単純化すべきだが、必要以上に単純化してはならない。","Many of life's failures are people who did not realize how close they were to success when they gave up.":"人生に失敗した人の多くは、諦めたときに自分がどれほど成功に近づいていたか気づかなかった人たちだ。","Mar":"3月","March":"3月","Maryland":"メリーランド","Massachusetts":"マサチューセッツ","May":"5月","May the Force be with you.":"フォースと共にあらんことを。","Michigan":"ミシガン","Minnesota":"ミネソタ","Mississippi":"ミシシッピ","Missouri":"ミズーリ","Montana":"モンタナ","Nebraska":"ネブラスカ","Need help? Go to the":"ヘルプが必要ですか？","Nevada":"ネバダ","New Hampshire":"ニューハンプシャー","New Jersey":"ニュージャージー","New Mexico":"ニューメキシコ","New York":"ニューヨーク","North Carolina":"ノースカロライナ","North Dakota":"ノースダコタ","Nothing will work unless you do.":"自分でしない限り何も上手くいかない。","Nov":"11月","November":"11月","Oct":"10月","October":"10月","Ohio":"オハイオ","Oklahoma":"オクラホマ","Oregon":"オレゴン","Our greatest glory is not in never failing, but in rising up every time we fail.":"偉大な栄光とは失敗しないことではない。失敗するたびに立ち上がることにある。","Passwords must match.":"パスワードが一致する必要があります。","Pennsylvania":"ペンシルバニア","Please enter a valid URL starting with http:// or https://":"http:// または https:// で始まる有効なURLを入力してください","Please enter a valid email address.":"有効なメールアドレスを入力してください。","Position":"ポジション","ProTip:":"ProTip:","Quality is more important than quantity. One home run is much better than two doubles.":"質は量より重要だ。1本のホームランは2本のツーベースヒットより貴重だ。","R:":"R:","Rhode Island":"ロードアイランド","Sep":"9月","September":"9月","Show me a thoroughly satisfied man and I will show you a failure.":"完全に満足しきった人がいたら、それは落伍者だ。","Showing {{ stRangeFrom }}-{{ stRangeTo}} of {{size}}":"見せる {{ stRangeFrom }}-{{ stRangeTo}} of {{size}}","Showing":"見せる","Simplify, simplify, simplify.":"とにかく単純化せよ。","Some people want it to happen, some wish it would happen, others make it happen.":"実現したいと願う人もいれば、夢想する人もいる。そして、みずから実現する人もいる。","Something went wrong, please try again.":"エラーが発生しました、もう一度お試しください。","South Carolina":"サウスカロライナ","South Dakota":"サウスダコタ","Success breeds success.":"成功は成功を育てる。","Tennessee":"テネシー","Texas":"テキサス","That's one small step for man, one giant leap for mankind.":"これは一人の人間にとっては小さな一歩だが、人類にとっては偉大な飛躍である。","The best way out is always through.":"終わらせる一番の方法は、やり遂げることだ。","The harder the conflict, the more glorious the triumph.":"戦いが激しければ激しいほど、勝利は輝かしいものとなる。","The perfect is the enemy of the good.":"完璧は善の敵。","The problem with the future is that it keeps turning into the present.":"未来の問題は、それが現在に変わっていくということです。","The value of an idea lies in the using of it.":"アイデアの価値はそれを使うことにある。","The way to get started is to quit talking and begin doing.":"スタートをきる方法は、しゃべるのをやめて動き始めることだ。","There is no substitute for hard work.":"努力に勝るものはない。","There was an error.":"エラーが発生しました。","There's a way to do it better - find it.":"もっと良い方法がある。探せ。","Things do not happen. Things are made to happen.":"物事は起こるのではなく、起こさせるものだ。","This is required.":"これは必要です。","To be idle is a short road to death and to be diligent is a way of life.":"怠惰は死への近道であり、勤勉は生きる術である。","To have a great idea, have a lot of them.":"良いアイデアを生むには多くのアイデアが必要だ。","Upload Image":"画像をアップロード","Utah":"ユタ","Vermont":"バーモント","Victory belongs to the most persevering.":"勝利は、もっとも忍耐強い人にもたらされる。","Virginia":"バージニア","Washington":"ワシントン","West Virginia":"ウェストバージニア","When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the steps.":"目標に到達できないことが明らかな場合は、目標を変えるのではなく、その過程を変えよ。","When you stop doing things for fun, you might as well be dead.":"楽しくないのならば、死んだほうがマシだ。","Wisconsin":"ウィスコンシン","Without pain, without sacrifice, we would have nothing.":"苦痛がなければ、犠牲がなければ何も得られない。","Work spares us from three evils: boredom, vice and need.":"仕事は3つの悪から人間を守る。それは退屈、悪徳、必要だ。","Wyoming":"ワイオミング","You are never too old to set another goal or to dream a new dream.":"何歳になっても、新しい目標を立てたり、新しい夢を見つけたりできる。","You can never quit. Winners never quit, and quitters never win.":"歩みを止めることはできない。勝者は止まらず、止まる者が勝つことはない。","You can't wait for inspiration. You have to go after it with a club.":"インスピレーションはやっては来ない。 こん棒を持ってでも追いかけなければ。","You miss 100% of the shots you don't take.":"打たないシュートは、100％外れる。","You've got to jump off cliffs and build your wings on the way down.":"まず崖から飛び降りて、落ちていく間に自分の翼を作らなければいけない。","of":"of"});
    gettextCatalog.setStrings('pt_BR', {"A lot of times, people don't know what they want until you show it to them.":"Muitas vezes as pessoas não sabem o que querem até você mostrar a elas.","A person who never made a mistake never tried anything new.":"Uma pessoa que nunca cometeu um erro nunca tentou nada novo.","A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.":"Um pessimista vê a dificuldade em cada oportunidade; um otimista vê a oportunidade em cada dificuldade.","A:":"A:","Add tags":"Adicionar etiquetas","Alabama":"Alabama","Alaska":"Alasca","All great achievements require time.":"Todas as grandes conquistas exigem tempo.","All our dreams can come true, if we have the courage to pursue them.":"Todos os nossos sonhos se realizam, se temos a coragem de persegui-los.","Amateurs practice until they get it right. Professionals practice until they can't get it wrong.":"Amadores praticam até eles acertarem. Profissionais praticam até eles não se enganarem.","Ambition should be made of sterner stuff.":"Ambição deve ser feita de material mais duro.","An ant on the move does more than a dozing ox.":"Uma formiga em movimento faz mais do que um boi cochilando.","Apr":"Abr","April":"Abril","Arizona":"Arizona","Arkansas":"Arcansas","At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.":"Aos seis anos de idade eu queria ser um cozinheiro. Aos sete, queria ser Napoleão. E minha ambição tem crescido constantemente desde então.","Aug":"Ago","August":"Agosto","B:":"B:","California":"California","Carpe diem, seize the day boys, make your lives extraordinary.":"Carpe diem, aproveite o dia, rapazes, façam as suas vidas extraordinárias.","Colorado":"Colorado","Connecticut":"Connecticut","Contain":"Contém","Cover":"Capa","Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.":"Criatividade é permitir-se cometer erros. Arte é saber quais manter.","Dec":"Dez","December":"Dezembro","Delaware":"Delaware","District of Columbia":"Distrito de Columbia","Do things that have never been done before.":"Fazer coisas que nunca foram feitas antes.","Doing the best at this moment puts you in the best place for the next moment.":"Fazer o melhor neste momento o coloca no melhor lugar para o momento seguinte","During your life, never stop dreaming. No one can take away your dreams.":"Durante sua vida, nunca pare de sonhar. Ninguém pode tirar seus sonhos.","Enplug Help Center":"Central de Ajuda Enplug","Every act of creation is first of all an act of destruction.":"Todo ato de criação é antes de tudo um ato de destruição.","Everything comes to him who hustles while he waits.":"Tudo alcança aquele que trabalha duro enquanto espera.","Feb":"Fev","February":"Fevereiro","Florida":"Florida","Focus is a matter of deciding what things you're not going to do.":"Foco é uma questão de decidir que coisas que você não vai fazer.","Fun is good.":"Diversão é bom.","G:":"G:","Genius is one percent inspiration and ninety-nine percent perspiration.":"Talento é 1% inspiração e 99% transpiração.","Georgia":"Georgia","Hawaii":"Havaí","He who hesitates is lost.":"Ele, que hesita, está perdido.","I don't know where I'm going, but I'm on my way.":"Não sei onde eu vou, mas eu estou no meu caminho.","I hated every minute of training, but I said, 'Dont quit. Suffer now and live the rest of your life as a champion'.":"Odiei cada minuto de treino, mas eu disse, 'Não saia. Sofra agora e viva o resto de sua vida como um campeão'.","I have no special talent. I am only passionately curious.":"Eu não tenho nenhum talento especial. Sou apenas apaixonadamente curioso.","I have not failed. I've just found 10,000 ways that won't work.":"Eu não falhei. Apenas encontrei 10.000 maneiras que não vão funcionar.","I pay no attention whatever to anybody's praise or blame. I simply follow my own feelings.":"Eu não presto atenção em tudo o que alguém elogia ou reclama. Eu simplesmente sigo os meus próprios sentimentos.","I play to win, whether during practice or a real game.":"Jogo para ganhar, durante a prática ou um jogo de verdade.","I steal from every movie ever made.":"Eu roubo de cada filme feito.","I've failed over and over and over again in my life and that is why I succeed.":"Eu falhei várias e várias vezes na minha vida e esse é o motivo do meu sucesso.","I've got a theory that if you give 100% all the time, somehow things will work out in the end.":"Eu tenho uma teoria que se você der 100% o tempo todo, de alguma forma, tudo vai dar certo no final.","Idaho":"Idaho","If you love life, don't waste time, for time is what life is made up of.":"Se você ama a vida, não perca tempo, pois tempo é do que a vida é feita.","If you spend too much time thinking about a thing, you'll never get it done.":"Se você gastar muito tempo pensando sobre uma coisa, você nunca terá feito.","Illinois":"Ilinois","Indiana":"Indiana","Iowa":"Iowa","It is the working man who is the happy man. It is the idle man who is the miserable man.":"É o trabalhador que é o homem feliz. O homem ocioso é um homem miserável.","It's lack of faith that makes people afraid of meeting challenges, and I believed in myself.":"A falta de fé que faz as pessoas terem medo de enfrentar desafios e eu acreditei em mim mesmo.","Jan":"Jan","January":"Janeiro","Jul":"Jul","July":"Julho","Jun":"Jun","June":"Junho","Kansa":"Kansa","Kentucky":"Kentucky","Live long and prosper.":"Vida longa e próspera.","Lost time is never found again.":"Tempo perdido nunca é encontrado novamente","Lousiana":"Lousiana","Luck is preparation meeting opportunity.":"Sorte é a preparação encontrando a oportunidade.","Maine":"Maine","Make everything as simple as possible, but not simpler.":"Faça tudo o mais simples possível, mas não singelo.","Many of life's failures are people who did not realize how close they were to success when they gave up.":"Muitos dos fracassos da vida são pessoas que não percebem quão perto estavam ao sucesso quando desistiram.","Mar":"Mar","March":"Março","Maryland":"Maryland","Massachusetts":"Massachusetts","May":"Maio","May the Force be with you.":"Que a Força esteja com você.","Michigan":"Michigan","Minnesota":"Minesota","Mississippi":"Mississippi","Missouri":"Missuri","Montana":"Montana","Nebraska":"Nebrasca","Need help? Go to the":"Precisa de ajuda? Vá para a","Nevada":"Nevada","New Hampshire":"New Hampshire","New Jersey":"Nova Jersey","New Mexico":"Novo México","New York":"Nova York","North Carolina":"North Carolina","North Dakota":"North Dakota","Nothing will work unless you do.":"Nada vai funcionar a menos que você faça.","Nov":"Nov","November":"Novembro","Oct":"Out","October":"Outubro","Ohio":"Ohio","Oklahoma":"Oklahoma","Oregon":"Oregon","Our greatest glory is not in never failing, but in rising up every time we fail.":"Nossa maior glória não está em nunca falhar, mas em melhorar a cada vez que falhamos.","Passwords must match.":"As senhas devem ser iguais","Pennsylvania":"Pennsylvania","Please enter a valid URL starting with http:// or https://":"Por favor, introduza uma URL válida começando com http:// ou https://","Please enter a valid email address.":"Por favor, insira um e-mail válido.","Position":"Posição","ProTip:":"Dica Pro:","R:":"R:","Rhode Island":"Rhode Island","Sep":"Set","September":"Setembro","Show me a thoroughly satisfied man and I will show you a failure.":"Mostre-me um homem completamente satisfeito e eu lhe mostrarei um fracassado.","Simplify, simplify, simplify.":"Simplificar, simplificar, simplificar.","Some people want it to happen, some wish it would happen, others make it happen.":"Algumas pessoas querem que aconteça, alguns desejam que aconteça, outros fazem acontecer","Something went wrong, please try again.":"Algo deu errado, por favor, tente novamente.","South Carolina":"South Carolina","South Dakota":"South Dakota","Success breeds success.":"Sucesso gera sucesso.","Tennessee":"Tennessee","Texas":"Texas","That's one small step for man, one giant leap for mankind.":"Isso é um pequeno passo para o homem, um salto gigante para a humanidade.","The best way out is always through.":"A melhor saída é sempre passar por.","The harder the conflict, the more glorious the triumph.":"Quando mais duro o conflito, mais glorioso o triunfo.","The perfect is the enemy of the good.":"O perfeito é inimigo do bom.","The problem with the future is that it keeps turning into the present.":"O problema com o futuro é que ele continua a virar para o presente.","The value of an idea lies in the using of it.":"O valor de uma ideia reside na utilização da mesma.","The way to get started is to quit talking and begin doing.":"A maneira de começar é parar de falar e começar a fazer.","There is no substitute for hard work.":"Não há substituto para o trabalho duro.","There was an error.":"Ocorreu um erro.","There's a way to do it better - find it.":"Há uma maneira de fazer melhor - encontre-a.","Things do not happen. Things are made to happen.":"As coisas não acontecem. As coisas são feitas para acontecer.","This is required.":"Este é obrigatório.","To be idle is a short road to death and to be diligent is a way of life.":"Ser ocioso é uma pequena estrada à morte e ser aplicado é um modo de vida.","To have a great idea, have a lot of them.":"Para ter uma ótima ideia, tenho um monte.","Upload Image":"Enviar Imagem","Utah":"Utah","Vermont":"Vermont","Victory belongs to the most persevering.":"A vitória pertence ao mais perseverante.","Virginia":"Virginia","Washington":"Washington","West Virginia":"West Virginia","When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the steps.":"Quando é óbvio que os objetivos não podem ser alcançados, não ajuste os objetivos, ajustar os passos.","When you stop doing things for fun, you might as well be dead.":"Quando você parar de fazer coisas para se divertir, você também pode estar morto.","Wisconsin":"Wisconsin","Without pain, without sacrifice, we would have nothing.":"Sem dor, sem sacrifício, não teríamos nada.","Work spares us from three evils: boredom, vice and need.":"Trabalho nos poupa de três males: tédio, vício e necessidade.","Wyoming":"Wyoming","You are never too old to set another goal or to dream a new dream.":"Você nunca é velho demais para definir outro objetivo ou um novo sonho.","You can never quit. Winners never quit, and quitters never win.":"Você nunca pode parar. Vencedores nunca desistem e desistentes nunca ganham.","You've got to jump off cliffs and build your wings on the way down.":"Você tem que saltar de penhascos e construir suas asas no caminho para baixo."});
/* jshint +W100 */
}]);
angular.module('enplug.sdk.utils').constant('countries', [
    { name: 'United States', code: 'US' },
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Democratic People\'s Republic of Korea', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kosovo', code: 'XK' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'s Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
]);

// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').constant('months', [
    { name: gettext('January'), short: gettext('Jan'), code: '01' },
    { name: gettext('February'), short: gettext('Feb'), code: '02' },
    { name: gettext('March'), short: gettext('Mar'), code: '03' },
    { name: gettext('April'), short: gettext('Apr'), code: '04' },
    { name: gettext('May'), short: gettext('May'), code: '05' },
    { name: gettext('June'), short: gettext('Jun'), code: '06' },
    { name: gettext('July'), short: gettext('Jul'), code: '07' },
    { name: gettext('August'), short: gettext('Aug'), code: '08' },
    { name: gettext('September'), short: gettext('Sep'), code: '09' },
    { name: gettext('October'), short: gettext('Oct'), code: '10' },
    { name: gettext('November'), short: gettext('Nov'), code: '11' },
    { name: gettext('December'), short: gettext('Dec'), code: '12' }
]);

// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').constant('quotes', {
    random: function () {
        var index = Math.floor(Math.random() * (this.quotes.length));
        return this.quotes[index];
    },
    quotes: [
        {
            text: gettext("All great achievements require time."),
            author: "Maya Angelou"
        },
        {
            text: gettext("You can't wait for inspiration. You have to go after it with a club."),
            author: "Jack London"
        },
        {
            text: gettext("The perfect is the enemy of the good."),
            author: "Voltaire"
        },
        {
            text: gettext("I play to win, whether during practice or a real game."),
            author: "Michael Jordan"
        },
        {
            text: gettext("Many of life's failures are people who did not realize how close they were to success when they gave up."),
            author: "Thomas Edison"
        },
        {
            text: gettext("At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since."),
            author: "Salvador Dali"
        },
        {
            text: gettext("Quality is more important than quantity. One home run is much better than two doubles."),
            author: "Steve Jobs"
        },
        {
            text: gettext("That's one small step for man, one giant leap for mankind."),
            author: "Neil Armstrong"
        },
        {
            text: gettext("Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep."),
            author: "Scott Adams"
        },
        {
            text: gettext("Nothing will work unless you do."),
            author: "Maya Angelou"
        },
        {
            text: gettext("The best way out is always through."),
            author: "Robert Frost"
        },
        {
            text: gettext("An ant on the move does more than a dozing ox."),
            author: "Lao Tzu"
        },
        {
            text: gettext("Show me a thoroughly satisfied man and I will show you a failure."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Our greatest glory is not in never failing, but in rising up every time we fail."),
            author: "Ralph Waldo Emerson"
        },
        {
            text: gettext("Every act of creation is first of all an act of destruction."),
            author: "Pablo Picasso"
        },
        {
            text: gettext("Fun is good."),
            author: "Dr. Seuss"
        },
        {
            text: gettext("I steal from every movie ever made."),
            author: "Quentin Tarantino"
        },
        {
            text: gettext("It is the working man who is the happy man. It is the idle man who is the miserable man."),
            author: "Ben Franklin"
        },
        {
            text: gettext("A person who never made a mistake never tried anything new."),
            author: "Albert Einstein"
        },
        {
            text: gettext("To be idle is a short road to death and to be diligent is a way of life."),
            author: "Buddha"
        },
        {
            text: gettext("The way to get started is to quit talking and begin doing."),
            author: "Walt Disney"
        },
        {
            text: gettext("For every dark night, there's a brigher day."),
            author: "Tupac Shakur"
        },
        {
            text: gettext("If you love life, don't waste time, for time is what life is made up of."),
            author: "Bruce Lee"
        },
        {
            text: gettext("You can never quit. Winners never quit, and quitters never win."),
            author: "Ted Turner"
        },
        {
            text: gettext("Work spares us from three evils: boredom, vice and need."),
            author: "Voltaire"
        },
        {
            text: gettext("Focus is a matter of deciding what things you're not going to do."),
            author: "John Carmack"
        },
        {
            text: gettext("I play to win, whether during practice or a real game."),
            author: "Michael Jordan"
        },
        {
            text: gettext("HULK SMASH!"),
            author: "The Incredible Hulk"
        },
        {
            text: gettext("The harder the conflict, the more glorious the triumph."),
            author: "Thomas Paine"
        },
        {
            text: gettext("Everything comes to him who hustles while he waits."),
            author: "Thomas Edison"
        },
        {
            text: gettext("You've got to jump off cliffs and build your wings on the way down."),
            author: "Ray Bradbury"
        },
        {
            text: gettext("Amateurs practice until they get it right. Professionals practice until they can't get it wrong."),
            author: "Unknown"
        },
        {
            text: gettext("Genius is one percent inspiration and ninety-nine percent perspiration."),
            author: "Thomas Edison"
        },
        {
            text: gettext("A lot of times, people don't know what they want until you show it to them."),
            author: "Steve Jobs"
        },
        {
            text: gettext("I don't know where I'm going, but I'm on my way."),
            author: "Carl Sagan"
        },
        {
            text: gettext("Lost time is never found again."),
            author: "Benjamin Franklin"
        },
        {
            text: gettext("Without pain, without sacrifice, we would have nothing."),
            author: "Tyler Durden"
        },
        {
            text: gettext("I pay no attention whatever to anybody's praise or blame. I simply follow my own feelings."),
            author: "Wolfgang Amadeus Mozart"
        },
        {
            text: gettext("You miss 100% of the shots you don't take."),
            author: "Wayne Gretzky"
        },
        {
            text: gettext("To have a great idea, have a lot of them."),
            author: "Thomas Edison"
        },
        {
            text: gettext("The value of an idea lies in the using of it."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Simplify, simplify, simplify."),
            author: "Henry David Thoreau"
        },
        {
            text: gettext("There's a way to do it better - find it."),
            author: "Thomas Edison"
        },
        {
            text: gettext("When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the steps."),
            author: "Confucius"
        },
        {
            text: gettext("During your life, never stop dreaming. No one can take away your dreams."),
            author: "Tupac Shakur"
        },
        {
            text: gettext("Things do not happen. Things are made to happen."),
            author: "John F. Kennedy"
        },
        {
            text: gettext("Ambition should be made of sterner stuff."),
            author: "William Shakespeare"
        },
        {
            text: gettext("If you spend too much time thinking about a thing, you'll never get it done."),
            author: "Bruce Lee"
        },
        {
            text: gettext("Success breeds success."),
            author: "Proverb"
        },
        {
            text: gettext("You are never too old to set another goal or to dream a new dream."),
            author: "C.S. Lewis"
        },
        {
            text: gettext("When you stop doing things for fun, you might as well be dead."),
            author: "Ernest Hemingway"
        },
        {
            text: gettext("There is no substitute for hard work."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Live long and prosper."),
            author: "Spock"
        },
        {
            text: gettext("I have not failed. I've just found 10,000 ways that won't work."),
            author: "Thomas Edison"
        },
        {
            text: gettext("It's lack of faith that makes people afraid of meeting challenges, and I believed in myself."),
            author: "Muhammad Ali"
        },
        {
            text: gettext("All our dreams can come true, if we have the courage to pursue them."),
            author: "Walt Disney"
        },
        {
            text: gettext("Make everything as simple as possible, but not simpler."),
            author: "Albert Einstein"
        },
        {
            text: gettext("Some people want it to happen, some wish it would happen, others make it happen."),
            author: "Michael Jordan"
        },
        {
            text: gettext("I've got a theory that if you give 100% all the time, somehow things will work out in the end."),
            author: "Larry Bird"
        },
        {
            text: gettext("The problem with the future is that it keeps turning into the present."),
            author: "Bill Watterson"
        },
        {
            text: gettext("May the Force be with you."),
            author: "Han Solo"
        },
        {
            text: gettext("Victory belongs to the most persevering."),
            author: "Napoleon Bonaparte"
        },
        {
            text: gettext("I hated every minute of training, but I said, 'Dont quit. Suffer now and live the rest of your life as a champion'."),
            author: "Muhammad Ali"
        },
        {
            text: gettext("Do things that have never been done before."),
            author: "Russell Kirsch"
        },
        {
            text: gettext("I've failed over and over and over again in my life and that is why I succeed."),
            author: "Michael Jordan"
        },
        {
            text: gettext("A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty."),
            author: "Winston Churchill"
        },
        {
            text: gettext("He who hesitates is lost."),
            author: "Proverb"
        },
        {
            text: gettext("Carpe diem, seize the day boys, make your lives extraordinary."),
            author: "John Keating"
        },
        {
            text: gettext("Doing the best at this moment puts you in the best place for the next moment."),
            author: "Oprah Winfrey"
        },
        {
            text: gettext("Luck is preparation meeting opportunity."),
            author: "Oprah Winfrey"
        },
        {
            text: gettext("I have no special talent. I am only passionately curious."),
            author: "Albert Einstein"
        }]
});

// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').constant('states', [
    { name: gettext('Alabama'), code: 'AL' },
    { name: gettext('Alaska'), code: 'AK' },
    { name: gettext('Arizona'), code: 'AZ' },
    { name: gettext('Arkansas'), code: 'AR' },
    { name: gettext('California'), code: 'CA' },
    { name: gettext('Colorado'), code: 'CO' },
    { name: gettext('Connecticut'), code: 'CT' },
    { name: gettext('Delaware'), code: 'DE' },
    { name: gettext('District of Columbia'), code: 'DC' },
    { name: gettext('Florida'), code: 'FL' },
    { name: gettext('Georgia'), code: 'GA' },
    { name: gettext('Hawaii'), code: 'HI' },
    { name: gettext('Idaho'), code: 'ID' },
    { name: gettext('Illinois'), code: 'IL' },
    { name: gettext('Indiana'), code: 'IN' },
    { name: gettext('Iowa'), code: 'IA' },
    { name: gettext('Kansa'), code: 'KS' },
    { name: gettext('Kentucky'), code: 'KY' },
    { name: gettext('Lousiana'), code: 'LA' },
    { name: gettext('Maine'), code: 'ME' },
    { name: gettext('Maryland'), code: 'MD' },
    { name: gettext('Massachusetts'), code: 'MA' },
    { name: gettext('Michigan'), code: 'MI' },
    { name: gettext('Minnesota'), code: 'MN' },
    { name: gettext('Mississippi'), code: 'MS' },
    { name: gettext('Missouri'), code: 'MO' },
    { name: gettext('Montana'), code: 'MT' },
    { name: gettext('Nebraska'), code: 'NE' },
    { name: gettext('Nevada'), code: 'NV' },
    { name: gettext('New Hampshire'), code: 'NH' },
    { name: gettext('New Jersey'), code: 'NJ' },
    { name: gettext('New Mexico'), code: 'NM' },
    { name: gettext('New York'), code: 'NY' },
    { name: gettext('North Carolina'), code: 'NC' },
    { name: gettext('North Dakota'), code: 'ND' },
    { name: gettext('Ohio'), code: 'OH' },
    { name: gettext('Oklahoma'), code: 'OK' },
    { name: gettext('Oregon'), code: 'OR' },
    { name: gettext('Pennsylvania'), code: 'PA' },
    { name: gettext('Rhode Island'), code: 'RI' },
    { name: gettext('South Carolina'), code: 'SC' },
    { name: gettext('South Dakota'), code: 'SD' },
    { name: gettext('Tennessee'), code: 'TN' },
    { name: gettext('Texas'), code: 'TX' },
    { name: gettext('Utah'), code: 'UT' },
    { name: gettext('Vermont'), code: 'VT' },
    { name: gettext('Virginia'), code: 'VA' },
    { name: gettext('Washington'), code: 'WA' },
    { name: gettext('West Virginia'), code: 'WV' },
    { name: gettext('Wisconsin'), code: 'WI' },
    { name: gettext('Wyoming'), code: 'WY' }
]);

angular.module('enplug.sdk.utils').constant('years', function () {
    'use strict';

    // Returns an array of name/code objects with years as strings
    var yearsToShow = 20,
        thisYear = (new Date()).getFullYear(),
        years = [];
    for (var year = thisYear; year < thisYear + yearsToShow; year++) {
        years.push({ name: year.toString(), code: year.toString().slice(-2) });
    }

    return years;
}());

/**
 * @ngdoc directive
 * @name alert
 * @module enplug.sdk.utils
 * @description shows an alert message
 */
angular.module('enplug.sdk.utils').directive('alert', function () {
    'use strict';

    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        replace: true,
        templateUrl: 'sdk-utils/alert.tpl'
    }
});

/**
 * @ngdoc directive
 * @name backgroundPicker
 * @module enplug.sdk.utils
 *
 * @param {Object} imageData
 * @param {number} screenWidth
 * @param {number} screenHeight
 *
 * @description Component for choosing and positioning a background image.
 */

'use strict';



angular.module('enplug.sdk.utils').directive('backgroundPicker', ['$enplugDashboard', 'gettext', function ($enplugDashboard, gettext) {
    return {
        restrict: 'E',
        scope: {
            imageData: '=',
            screenWidth: '=',
            screenHeight: '='
        },
        templateUrl: 'sdk-utils/background-picker.tpl',
        link: function (scope, element, attrs, arg) {
            /**
             * Checks whether the position button should be disabled.
             * @returns {boolean}
             */
            scope.isDisabled = function (position) {
                var screenRes = scope.screenWidth / scope.screenHeight;
                var imageRes = scope.imageData.BgWidth / scope.imageData.BgHeight;

                if (!scope.imageData || !scope.imageData.BgUrl) {
                    return true;
                }

                if (position == 'center') {
                    return false;
                } else if (scope.imageData.BgSize == 'contain') {
                    if (position == 'top' || position == 'bottom') {
                        return screenRes > imageRes;
                    } else if (position == 'left' || position == 'right') {
                        return screenRes < imageRes;
                    } else {
                        return true;
                    }
                } else { // cover
                    if (position == 'top' || position == 'bottom') {
                        return screenRes < imageRes;
                    } else if (position == 'left' || position == 'right') {
                        return screenRes > imageRes;
                    } else {
                        return true;
                    }
                }

                return false;
            }

            scope.removeUploadedFile = function() {
                scope.imageData.BgUrl = '';
                scope.imageData.BgFilename = '';
                scope.imageData.BgWidth = '';
                scope.imageData.BgHeight = '';
                scope.imageData.BgResolution = '';
            }


            scope.promptImageUpload = function () {
                $enplugDashboard.upload().then(function (uploads) {
                    if (uploads.length > 0) {
                    	var img = uploads[0];
                        scope.imageData.BgUrl = img.url;
                        scope.imageData.BgResolution = img.width / img.height;
                        scope.imageData.BgWidth = img.width;
                        scope.imageData.BgHeight = img.height;
                        scope.imageData.BgFilename = img.filename;
                    } else {
                        $enplugDashboard.errorIndicator(gettext('Something went wrong, please try again.'));
                    }
                });
            }
        }
    }
}]);

/**
* @ngdoc directive
* @name customDurationSlider
* @module enplug.sdk.utils
*
* @param ratio {String Duration}
*/
angular.module('enplug.sdk.utils').directive('customDurationSlider', ['$document', function ($document) {
    return {
        restrict: 'E',
        scope: {
            ratio: '=ratio'
        },
        templateUrl: 'sdk-utils/custom-duration-slider.tpl',

        link: function (scope, element, attrs, arg) {

            var startX = 0,
            padding = 2,
            $barWidth = angular.element(element[0].querySelector('.slider')),
            barWidth = $barWidth.prop('clientWidth'),
            $cursor = angular.element(element[0].querySelector('.slider-cursor')),
            cursorWidth = $cursor.prop('clientWidth'),
            scrollLength = barWidth - cursorWidth - padding,
            offset = 0;

            // Scope variable if user has made change on manual input
            scope.manualDuration = false;

            scope.ratio = preventFalseDuration();
            scope.placeholder = scope.ratio || '-';

            // Handling input keydown event, setting manual duration to true
            scope.handleKeyDown = function(event) {
                scope.manualDuration = true;
            }
            // Assigning ratio to prevent zero from being saved
            scope.checkRatioValue = function() {
                scope.ratio = preventFalseDuration();
            }
            // Watching changes on ratio. Moving cursor to reflect manual changes
            scope.$watch('ratio', function() {
                if(scope.manualDuration) {
                    offset = compareOffsetValue();
                    $cursor.css('transition', 'margin-left 0.5s ease-in');
                    $cursor.css('margin-left', offset+'px');
                }
            });

            scope.clearUndefined = function() {
                resolveUndefined();
            }

            function resolveUndefined() {
                if(!scope.ratio) {
                    scope.ratio = 1;
                    offset = compareOffsetValue();
                    $cursor.css('transition', 'margin-left 0.5s ease-in');
                    $cursor.css('margin-left', offset+'px');
                }
            }

            // Prevents false value from being saved. Must be at least 1 sec duration
            function preventFalseDuration() {
                if(scope.ratio <= 0) {
                    scope.ratio = undefined;
                    scope.placeholder = '-';
                }
                return scope.ratio;
            }
            // Function comparing offset to padding and scrollLength. Prevent cursor from overflowing slider
            function compareOffsetValue() {
                var difference = scope.ratio * scrollLength / 60;
                if ( difference < padding ) {
                    difference = padding;
                } else if ( difference > scrollLength )  {
                    difference = scrollLength;
                }
                return difference;
            }
            // Setting default values for slider on mousedown
            function setDefaultValues() {
                scope.manualDuration = false;
                $cursor.css('transition', 'none')
                startX = event.pageX;
                scope.ratio = preventFalseDuration();
            }
            // Immediately invoked to set margin when directive is instantiated
            (function() {
                offset = compareOffsetValue();
                $cursor.css('margin-left', offset+'px');
            })();

            return $cursor.on('mousedown', function(event) {
                var mousemove, mouseup;

                if(scope.ratio == undefined) {
                    scope.ratio = 1;
                    offset = compareOffsetValue();
                    $cursor.css('transition', 'margin-left 0.5s ease-in');
                    $cursor.css('margin-left', offset+'px');
                }

                mousemove = function(event) {
                    return scope.$apply(function() {
                        offset += (event.pageX - startX);
                        if ( offset < padding ) {
                            offset = padding;
                        } else if ( offset > scrollLength )  {
                            offset = scrollLength;
                        } else {
                            startX = event.pageX;
                        }
                        scope.ratio = Math.round(offset/scrollLength * 60);
                        if(scope.ratio == 0 || scope.ratio == '0') {
                            scope.ratio = 1
                        }
                        $cursor.css('margin-left', offset+'px')
                    })
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    return $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                setDefaultValues();
                $document.on('mousemove', mousemove);
                return $document.on('mouseup', mouseup);
            });

        }
    };
}]);

/**
 * @ngdoc directive
 * @name displayCounter
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('displayCounter', function () {
    return {

        restrict: 'E',

        replace: true,

        scope: {
            count: '=',
            showDanger: '=?',
            vertical: '=?',
            disabled: '=?'
        },

        templateUrl: 'sdk-utils/display-counter.tpl',

        link: function (scope, element, attrs) {

            scope.showDanger = 'showDanger' in attrs && scope.showDanger == false;

            scope.checkDanger = function () {
                if ( scope.showDanger && scope.count <= 0 ) {
                    element.addClass('danger');
                } else {
                    element.removeClass('danger');
                }
            };
            scope.checkDanger();

            if ( 'vertical' in scope && scope.vertical === true ) {
                element.addClass('vertical');
            }
            if ( 'disabled' in scope && scope.disabled === true ) {
                element.addClass('disabled');
            }

            scope.$watch('count', function(){
                scope.checkDanger();
            });

        }
    };
});

angular.module('enplug.sdk.utils').directive('downloadCsv', ['$document', '$log',
    function ($document, $log) {

        return {
            restrict: 'A',
            scope: {
                epDownloadCsv: '='
            },
            link: function (scope, element) {
                element.bind('click', function () {
                    var fileName = scope.epDownloadCsv.fileName;
                    var downloadFunction = scope.epDownloadCsv.downloadFunction;
                    $log.debug(fileName);
                    var promise = downloadFunction();
                    promise.then(function (data) {
                        var downloadLink = angular.element('<a></a>')
                            .attr('href', 'data:text/csv;charset=utf8,' + encodeURIComponent(data))
                            .attr('download', fileName);
                        downloadLink.insertAfter(element);

                        downloadLink.ready(function () {
                            downloadLink.get(0).click();
                            downloadLink.remove();
                        });
                    });
                });
            }
        };
    }
]);

/**
 * @ngdoc directive
 * @name dropdownMenu
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('dropdownMenu', function () {
    'use strict';
    return {
        link: function (scope, element) {

            element.addClass('dropdown-menu');

            // Close dropdown menu when we click on links in the dropdown menu that take us to a new page
            element.on('click', function (event) {
                var target = angular.element(event.target);
                if (target.attr('href') || target.parent().attr('href')) {
                    scope.$emit('dropdown:toggle');
                }
                scope.$apply(function () {
                    scope.$emit('dropdown:click');
                });
            });
        }
    }
});

/**
 * @ngdoc directive
 * @name dropdownToggle
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('dropdownToggle', function () {
   'use strict';
    return {
        link: function (scope, element) {

            element.addClass('dropdown-toggle');
            element.on('click', function () {
               scope.$apply(function () {
                  scope.$broadcast('dropdown:toggle');
               });
            });
        }
    }
});

/**
 * @ngdoc directive
 * @name dropdown
 * @module enplug.sdk.utils
 *
 */
angular.module('enplug.sdk.utils').directive('dropdown', ['$document', '$timeout', function ($document, $timeout) {
    return {
        scope: true,
        link: function (scope, element) {

            element.addClass('dropdown-wrap');

            function closeDropdown() {
                element.addClass('closing');
                $timeout(function () {
                    element.removeClass('open');
                    element.removeClass('closing');
                    $document.off('click', closeDropdown);
                }, 300);
            }

            // Event emitted by the dropdown-toggle directive
            scope.$on('dropdown:toggle', toggle);
            scope.$on('dropdown:click', toggle);

            function toggle() {
                if (element.hasClass('open')) {
                    closeDropdown();
                } else {
                    open();
                }
            }

            function open() {
                element.addClass('open');
                $document.on('click', function (event) {
                    if (!element[0].contains(event.target)) {
                        closeDropdown();
                    }
                });
            }

            scope.$on('$destroy', function () {
                $document.off('click', closeDropdown);
            });
        }
    }
}]);

/**
* @ngdoc directive
* @name durationSlider
* @module enplug.sdk.utils
*
* @param ratio {String Duration}
*/
angular.module('enplug.sdk.utils').directive('durationSlider', ['$document', function ($document) {
    return {
        restrict: 'E',
        scope: {
            ratio: '=ratio'
        },
        templateUrl: 'sdk-utils/duration-slider.tpl',

        link: function (scope, element, attrs, arg) {
            var startX = 0,
            padding = 3,
            $barWidth = angular.element(element[0].querySelector('.duration-slider')),
            barWidth = $barWidth.prop('clientWidth'),
            $cursor = angular.element(element[0].querySelector('.slider-cursor')),
            cursorWidth = $cursor.prop('clientWidth'),
            scrollLength = barWidth - cursorWidth - padding,
            offset = 0;

            function setPosition() {
                offset += scope.ratio * scrollLength / 60;
                $cursor.css('margin-left', offset+'px');
            }

            setPosition();

            scope.formatLabel = function(val) {
                return val > -1 ? Math.round(val)+' secs' : '-';
            }

            return element.on('mousedown', function(event) {
                var mousemove, mouseup;

                mousemove = function(event) {

                    return scope.$apply(function() {
                        offset += (event.pageX - startX);
                        if ( offset < padding ) {
                            offset = padding;
                        } else if ( offset > scrollLength )  {
                            offset = scrollLength;
                        } else {
                            startX = event.pageX;
                        }
                        scope.ratio = Math.round(offset/scrollLength * 60);
                        $cursor.css('margin-left', offset+'px')
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    return $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                startX = event.pageX;
                $document.on('mousemove', mousemove);
                return $document.on('mouseup', mouseup);
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name colorPicker
 * @module enplug.sdk.utils
 */
angular.module('enplug.sdk.utils').directive('colorPicker', ['$document', '$timeout', 'ColorTools', 'PositionTools', 
    function ($document, $timeout, ColorTools, PositionTools) {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            hex: '=?',
            rgb: '=?',
            alpha: '=?'
        },
        templateUrl: 'sdk-utils/color-picker.tpl',

        link: function (scope, element, attrs) {

            /** link dom elements **/
            var labelAlpha = angular.element(element[0].querySelector('.channel-alpha')),
                labelRed = angular.element(element[0].querySelector('.channel-red')),
                labelGreen = angular.element(element[0].querySelector('.channel-green')),
                labelBlue = angular.element(element[0].querySelector('.channel-blue')),
                labelHex = angular.element(element[0].querySelector('.hex-input'));

            var $palette = angular.element(element[0].querySelector('.palette'));

            var $swatch = angular.element(element[0].querySelector('.swatch'));
            scope.opened = false;

            var $hue = angular.element(element[0].querySelector('.hue'));
            $hue[0].$cursor = angular.element($hue[0].querySelector('.cursor'));

            var $alpha = angular.element(element[0].querySelector('.alpha-slider'));
            $alpha[0].$cursor = angular.element($alpha[0].querySelector('.cursor'));
            
            var $saturation = angular.element(element[0].querySelector('.saturation'))
            $saturation[0].$cursor = angular.element($saturation[0].querySelector('.cursor'))

            /** Format 'rgb' vs 'hex' **/
            if ( attrs.hasOwnProperty('showAsRgb') ) {
                scope.showAs = 'rgb';
            } else {
                scope.showAs = 'hex';
            }
            scope.toggleShowAs = function () {
                scope.showAs = scope.showAs == 'hex' ? 'rgb' : 'hex';
            };

            /** alpha support **/
            scope.noAlpha = attrs.hasOwnProperty('noAlpha');

            /** Test: 
            scope.hex = scope.hex.replace(/^#/, '')
            console.log('HEX:', scope.hex)
            setRGB( ColorTools.hex2rgb( parseInt(scope.hex, 16) ) );
            console.log('RGB:', scope.rgb)
            var hsb = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
            console.log('HSB:', hsb, hsb[0]*360, hsb[1]*100, hsb[2]*100)
            var backToRGB =  ColorTools.hsl2rgb(hsb[0], hsb[1], hsb[2] );
            console.log('BACK TO RGB:', backToRGB)
            var backToHex = ColorTools.rgb2hex(backToRGB[0], backToRGB[1], backToRGB[2])
            console.log('BACK TO HEX:', backToHex)
            **/

            /** initialize color hex/rgb and alpha **/
            if ( scope.hasOwnProperty('hex') ) { // We're dealing with HEX string input/output
                setHEX( scope.hex.replace(/^#/, '') );
                setRGB( ColorTools.hex2rgb( parseInt(scope.hex, 16) ) );
                var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            } else if ( scope.hasOwnProperty('rgb') ) { // We're dealing with RGB array input/output
                setRGB( scope.rgb );
                setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            } else {
                console.warn('[ColorPicker] Something insane just happened!')
            }

            /** alpha **/
            if ( !scope.hasOwnProperty('alpha') || isNaN(scope.alpha) ) {
                scope.alpha = 1.0;
            }
            setAlpha(scope.alpha);

            /** Handle Saturation Panel Drag Events **/  
            $saturation.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var top = Math.max(0, Math.min($saturation[0].clientHeight, event.pageY - PositionTools.getTop($saturation[0])))
                          , left = Math.max(0, Math.min($saturation[0].clientWidth, event.pageX - PositionTools.getLeft($saturation[0])));
                        setSaturation( left/$saturation[0].clientWidth );
                        setBrightness( 1 - top/$saturation[0].clientHeight );
                        setRGB( ColorTools.hsl2rgb(scope.hue, scope.saturation, scope.brightness) );
                        setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });


            /** Handle Hue Panel Drag Events **/
            $hue.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var left = Math.max(0, Math.min($hue[0].clientWidth, event.pageX - PositionTools.getLeft($hue[0])));
                        setHue( 1 - left/$hue[0].clientWidth );
                        setRGB( ColorTools.hsl2rgb(scope.hue, scope.saturation, scope.brightness) );
                        setHEX( ColorTools.rgb2hex(scope.rgb[0], scope.rgb[1], scope.rgb[2]) );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });


            /** Handle Alpha Panel Drag Events **/
            $alpha.on('mousedown', function(event) {
                var mousemove, mouseup, ref;
                mousemove = function (event) {
                    return scope.$apply(function() {
                        var left = Math.max(0, Math.min($alpha[0].clientWidth, event.pageX - PositionTools.getLeft($alpha[0])));
                        setAlpha( left/$alpha[0].clientWidth );
                    });
                };
                mouseup = function() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseleave', mouseup);
                    $document.unbind('mouseup', mouseup);
                };
                event.preventDefault();
                mousemove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseleave', mouseup);
                $document.on('mouseup', mouseup);
            });

            function setHEX(val) {
                scope.hex = val;
                scope.hexInput = val;
            }

            function setRGB (val) {
                scope.rgb = val;
                setRed( val[0] );
                setGreen( val[1] );
                setBlue( val[2] );
            }

            function setRed(val) {
                scope.red = Math.round(val);
            }
            function setGreen(val) {
                scope.green = Math.round(val);
            }
            function setBlue(val) {
                scope.blue = Math.round(val);
            }

            function setHue(val) {
                scope.hue = val;
                $hue[0].$cursor.css( 'left', (1-scope.hue) * $hue[0].clientWidth + 'px' );
            }

            function setSaturation(val) {
                scope.saturation = val;
                $saturation[0].$cursor.css( 'left', scope.saturation * $saturation[0].clientWidth + 'px' );
            }

            function setBrightness(val) {
                scope.brightness = val;
                $saturation[0].$cursor.css( 'top', (1-val) * $saturation[0].clientHeight + 'px' );
            }
            
            function setAlpha(val) {
                scope.alpha = parseFloat(val.toFixed(2));
                scope.alphaPercent = parseFloat( (scope.alpha*100).toFixed(2));
                if ( !scope.noAlpha ) {
                    $alpha[0].$cursor.css( 'left', scope.alpha * $alpha[0].clientWidth + 'px' );
                }
            }

            /** Handle UI changes **/
            scope.$watch('alphaPercent', function(){
                setAlpha( labelAlpha[0].value / 100 );
            });

            scope.getHueColor = function () {
                var rgb = ColorTools.hsl2rgb( scope.hue, 1, 1);
                var hex = ColorTools.rgb2hex( rgb[0], rgb[1], rgb[2] );
                return hex;
            }

            scope.watchRGBInputChange = function () {
                setRGB( [scope.red, scope.green, scope.blue] );
                var hsl = ColorTools.rgb2hsl(scope.red, scope.green, scope.blue);
                setHEX( ColorTools.rgb2hex(scope.red, scope.green, scope.blue) );
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            };

            scope.watchHEXInputChange = function () {
                if ( labelHex[0].value.match(/[^0-9a-fA-F\.]/g) ) {
                    labelHex[0].value = labelHex[0].value.replace(/[^0-9a-fA-F\.]/g, '');
                }
                var fixed = labelHex[0].value.split(''), hex='';
                for ( var i=0, l=6; i<l; i++ ) {
                    hex += i < fixed.length ? fixed[i] : 0;
                }
                scope.hex = hex; // make sure not to call setHEX instead!
                setRGB( ColorTools.hex2rgb(parseInt(scope.hex, 16)) );
                var hsl = ColorTools.rgb2hsl(scope.red, scope.green, scope.blue);
                setHue(hsl[0]);
                setSaturation(hsl[1]);
                setBrightness(hsl[2]);
            };

            /** Close on outter click **/
            var outterClickHandler = function (event) {
                var isInside = event.pageY > PositionTools.getTop($palette[0]) 
                    && event.pageY < PositionTools.getTop($swatch[0]) + $swatch[0].clientHeight + $palette[0].clientHeight
                    && event.pageX > PositionTools.getLeft($palette[0]) 
                    && event.pageX < PositionTools.getLeft($palette[0]) + $palette[0].clientWidth

                if ( !isInside ) {
                    return scope.$apply(function() {
                        scope.opened = false;
                        $document.unbind("mousedown", outterClickHandler);
                    });
                }
            };

            scope.toggle = function () {
                scope.opened = !scope.opened;
                if ( scope.opened ) {
                    $timeout(function () {
                        setAlpha(scope.alpha);
                        var hsl = ColorTools.rgb2hsl(scope.rgb[0], scope.rgb[1], scope.rgb[2]);
                        setHue(hsl[0]);
                        setSaturation(hsl[1]);
                        setBrightness(hsl[2]);
                    });
                    $document.bind("mousedown", outterClickHandler);
                } else {
                    $document.unbind("mousedown", outterClickHandler);
                }
            }

            element.on('$destroy', function() {
                $document.unbind("mousedown", outterClickHandler);
            });
        }
    }
}]);

/**
 * @ngdoc directive
 * @name equals
 * @module enplug.sdk.utils.directives
 *
 * @param equal {String} scope value to compare to
 */
angular.module('enplug.sdk.utils').directive('equals', function() {

    function getter(property, object) {
        var splitModel = property.split('.');
        return splitModel.reduce(function (map, key) {
            return map[key];
        }, object);
    }

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function($scope, $element, $attrs, $ngModel) {

            // watch own value and re-validate on change
            $scope.$watch($attrs.ngModel, function() {
                validate();
            });

            // observe the other value and re-validate on change
            $scope.$watch($attrs.equals, function () {
                validate();
            });

            function validate() {
                // values
                var val1 = $ngModel.$viewValue;
                var val2 = getter($attrs.equals, $scope);
                // set validity
                $ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
            }
        }
    };
});

/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 * @param label {String} The input label
 */
angular.module('enplug.sdk.utils').directive('materialCheckbox', ['$log', '$compile', 'GUID', function ($log, $compile, GUID) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide', 'ng-repeat'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        templateUrl: 'sdk-utils/material-checkbox.tpl',
        link: function ($scope, $element, $attrs, $ctrl, $transclude) {

            $element.addClass('material-checkbox');
            $scope.id = GUID.new(); // better to use name?
            $scope.label = $attrs.label;

            // Copy any wrapped html into checkbox label
            $transclude(function(clone) {
                if (clone) {

                    // Check to see if our transcluded HTML includes an input
                    var hasInput = false;
                    for (var i = 0; i < clone.length; i++) {
                        if (clone[i].nodeName.toLowerCase() == 'input') {
                            hasInput = true;
                        }
                    }

                    if (hasInput) {

                        // Use this input
                        $element.find('input').remove();
                        $element.find('label').prepend(clone);
                        $element.find('input').attr('id', $scope.id);
                        $element.find('input').attr('type', 'checkbox');
                    } else {

                        // Label
                        angular.element($element[0].querySelector('.checkbox-label')).append(clone);
                    }
                }
            });

            var input = $element.find('input')[0];

            // Copy attributes over to input
            angular.forEach($attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    $element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            var checkbox = $element.find('label')[0];
            $compile(checkbox)($scope);
        }
    };
}]);

/**
 * @ngdoc directive
 * @name materialInput
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 * @param type {String} Input type
 * @param label {String} Input label
 * @param directives {Object} key:value of directives to assign to input. This directive creates isolate+transcluded scope, so remember to use $parent in values.
 * @param required {boolean},
 * @param autofocus {boolean} - causes this input to be focused after creation
 *
 * For better ways to do a lot of this, look to: https://github.com/angular/material/blob/master/src/components/input/input.js
 *
 */
angular.module('enplug.sdk.utils').directive('materialInput', ['$log', '$compile', '$parse', '$document', 'GUID', 'gettext',
    function ($log, $compile, $parse, $document, GUID, gettextCatalog) {
        'use strict';

        return {
            restrict: 'E',
            require: '^form',
            scope: {
                model: '=field'
            },
            transclude: true, // Allows us to wrap up custom html
            templateUrl: 'sdk-utils/material-input.tpl',
            link: function ($scope, $element, $attrs, $form, $transclude) {

                var ignoreAttributes = ['class', 'label', 'directives', 'field', 'focus', 'ng-if', 'ng-show', 'ng-hide'],
                    input = $document[0].createElement('input'),
                    directives = $parse($attrs.directives)($scope),
                    autofocus = typeof $attrs.autofocus !== 'undefined',
                    id = $attrs.field + '-' + GUID.new();

                $scope.id = id; // better to use name?
                $scope.label = $attrs.label;
                $element.removeAttr('label');
                $element.removeAttr('label');
                input.setAttribute('name', id);

                // Convenience method so we don't have to apply form-groups
                if (!$element.parent().hasClass('form-group')) {
                    $element.addClass('form-group');
                }

                // Copy attributes over to input
                angular.forEach($attrs, function (value, _attr) {
                    var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                        $element.removeAttr(attr);
                        input.setAttribute(attr, value);
                    }
                });

                // Type may have been set by copying attributes, if not default to text
                if (!input.getAttribute('type')) {
                    input.setAttribute('type', 'text');
                }

                // Set fields that used to be in HTML
                input.setAttribute('class', 'form-control');
                input.setAttribute('ng-model', 'model');
                input.setAttribute('ng-class', '{ active: model }');
                input.setAttribute('ng-model-options', '{ allowInvalid: true, debounce: 100 }');
                input.setAttribute('id', $scope.id);

                // Copy custom directives
                angular.forEach(directives, function (value, directive) {
                    input.setAttribute(directive, value);
                });

                $element.removeAttr('directives');

                // Copy any wrapped html into input template
                $transclude(function(clone) {

                    var hasInput = false;
                    if (clone) {

                        // Check to see if our transcluded HTML includes an input
                        var newInput;
                        for (var i = 0; i < clone.length; i++) {
                            if (clone[i].nodeName.toLowerCase() == 'input') {
                                hasInput = true;
                                newInput = clone[i];
                            }
                        }

                        if (hasInput) {

                            // Add default attributes to the transcluded input
                            newInput.setAttribute('class', 'form-control');
                            newInput.setAttribute('id', $scope.id);
                            input.setAttribute('name', $scope.id);

                            // Connect this input's model and scope to our directive's scope
                            // FIXME: Known bug when transcluded input is number type, and has an existing model value
                            newInput.setAttribute('ng-class', '{ active: model }');
                            newInput.setAttribute('ng-model', 'model');
                            $compile(clone)($scope);

                            // Add input and any other included HTML to beginning of input
                            // This case ignores all the work we did on the input above. Messy, needs refactoring.
                            $element.prepend(clone);
                        } else {
                            $element.append(clone);
                        }
                    }

                    if (!hasInput) {

                        // Add our manufactured input
                        $compile(input)($scope);
                        $element.prepend(input);
                    }
                });

                if (autofocus) {
                    input.focus();
                }

                $scope.formField = $form[id]; // used for ng-messages. Must retrieve after re-$compiling input

                // Stupid hack to get $dirty state to be correctly set, which bizarrely doesn't happen. WTF
                $scope.$watch('model', function (val) {
                    if (val !== undefined && val !== null && $scope.formField) {
                        $scope.formField.$dirty = true;
                    }
                });
            }
        };
    }
]);

/**
 * @ngdoc directive
 * @name materialCheckbox
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 */
angular.module('enplug.sdk.utils').directive('materialRadio', ['$log', '$compile', function ($log, $compile) {
    'use strict';

    var ignoreAttributes = ['class', 'field', 'label', 'ng-if', 'ng-show', 'ng-hide', 'ng-repeat'];

    return {
        restrict: 'E',
        scope: {
            model: '=field'
        },
        transclude: true,
        replace: true,
        templateUrl: 'sdk-utils/material-radio.tpl',
        link: function (scope, element, attrs) {

            element.addClass('material-radio');

            var input = element.find('input')[0];

            // Copy attributes over to input
            angular.forEach(attrs, function (value, _attr) {
                var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                    element.removeAttr(attr);
                    input.setAttribute(attr, value);
                }
            });

            $compile(input)(scope);
        }
    };
}]);

/**
 * @ngdoc directive
 * @name materialSelect
 * @module enplug.sdk.utils
 * @description Wraps a select element, turning it into a material-select.
 */
angular.module('enplug.sdk.utils').directive('materialSelect', ['$timeout', function ($timeout) {
    'use strict';

    // Returns a JQLite object for the select element we transcluded, allowing us to
    // pick information from it
    function findSelect(clone) {
        for (var i = 0; i < clone.length; i++) {
            if (clone[i].nodeName.toLowerCase() == 'select') {
                return angular.element(clone[i]);
            }
        }
    }

    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        templateUrl: 'sdk-utils/material-select.tpl',
        link: function (scope, element, attrs, ctrl, transclude) {

            element.addClass('material-select');

            // Take the label from an attribute instead of scope because it'll usually just be a simple
            // string that doesn't need to be bound to
            scope.label = attrs.label;
            element.removeAttr('label');

            transclude(function (clone) {
                var select = findSelect(clone);
                if (select) {

                    // Watch for changes on our select element's model so that we can update the
                    // material-select label and selected state
                    scope.$watch('$parent.' + select.attr('ng-model'), function (val) {

                        if (typeof val !== 'undefined' && val !== null) {
                            element.addClass('selected');

                            // Wait until this digest cycle has completed so that the HTML <select> has
                            // updated its options
                            $timeout(function () {

                                // Access the label property on the currently-selected option from our select
                                // element
                                scope.label = select[0].options[select[0].selectedIndex].label
                            });
                        }
                    });
                } else {
                    console.warn('Warning: material-select requires a <select> element to be transcluded.');
                }
            });
        }
    };
}]);

angular.module('enplug.sdk.utils').directive('materialSwitch', function () {
    'use strict';

    // Returns a JQLite object for the select element we transcluded, allowing us to
    // pick information from it
    function findInput(clone) {
        for (var i = 0; i < clone.length; i++) {
            if (clone[i].nodeName.toLowerCase() == 'input') {
                return angular.element(clone[i]);
            }
        }
    }

    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'sdk-utils/material-switch.tpl',
        scope: { model: '=' },
        link: function (scope, element, attrs, ctrl, transclude) {

            // Keeps track of dirty state, without adding dependency on a form
            scope.dirty = false;

            // If transcluding input, remove other input
            transclude(function (clone) {
                if (findInput(clone)) {
                    angular.element(element[0].querySelector('.default-input')).remove();
                }
            });
        }
    }
});

angular.module('enplug.sdk.utils').directive('helpBlock', function () {
    'use strict';
    return {
        templateUrl: 'sdk-utils/help-block.tpl',
        restrict: 'E'
    }
});

angular.module('enplug.sdk.utils').directive('layoutToggle', ['$rootScope', function ($rootScope) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/layout-toggle.tpl',
        replace: true,
        link: function (scope) {

            if ($rootScope.showGridLayout !== false) {
                $rootScope.showGridLayout = true;
            }
            scope.toggleLayout = function () {
                $rootScope.showGridLayout = !$rootScope.showGridLayout;
            };
        }
    }
}]);

angular.module('enplug.sdk.utils').directive('gridLayout', function () {
    'use strict';

    return {
        link: function (scope, element) {
            scope.$watch('showGridLayout', function (bool) {
                if (bool) {
                    element.removeClass('ng-hide');
                } else {
                    element.addClass('ng-hide');
                }
            });
        }
    }
});

angular.module('enplug.sdk.utils').directive('tableLayout', function () {
    'use strict';

    return {
        link: function (scope, element) {
            scope.$watch('showGridLayout', function (bool) {
                if (bool) {
                    element.addClass('ng-hide');
                } else {
                    element.removeClass('ng-hide');
                }
            });
        }
    }
});

/**
 * @ngdoc directive
 * @name loading
 * @module enplug.sdk.utils
 * @description easy showing/hiding of content based on boolean value or promise.
 *
 * @param condition {promise|boolean} the condition to wait for showing the loading indicator.
 */
angular.module('enplug.sdk.utils').directive('loading', [function() {
    'use strict';

    // Todo: error handling
    // Todo: watch promises that are re-assigned

    function isPromise(val) {
        return typeof val === 'object' && typeof val.then === 'function';
    }

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/loading.tpl',
        transclude: true,
        replace: false,
        scope: {
            isLoading: '=condition'
        },
        link: function(scope, element) {

            element.addClass('loading-wrapper');

            if (isPromise(scope.isLoading)) {
                scope.loading = true;
                scope.isLoading.then(function () {
                    scope.loading = false;
                }, function () {
                    scope.error = true;
                });
            } else {

                // watch the property
                scope.loading = scope.isLoading;
                scope.$watch('isLoading', function (val) {
                    scope.loading = val;
                });
            }
        }
    };
}]);

/**
 * @ngdoc directive
 * @name locationAware
 * @module enplug.sdk.utils.directives
 *
 */
angular.module('enplug.sdk.utils').directive('locationAware', ['$location', function ($location) {
    'use strict';

    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {

            function getPath() {
                var path = attrs.href || attrs.ngHref || attrs.locationAware;
                if (!path) {

                    // search for a child link
                    var anchor = element.find('a');
                    if (anchor) {
                        path = anchor.attr('href') || anchor.attr('ngHref');
                    }
                }
                return path;
            }

            function checkActive() {
                var path = getPath();
                if (path === $location.path()) {
                    element.addClass('active');
                } else {
                    element.removeClass('active');
                }
            }

            checkActive();

            // We need to update active class every time route changes
            scope.$on('$routeChangeSuccess', checkActive);

        }
    };
}]);

/**
 * @ngdoc directive
 * @name notice
 * @module enplug.sdk.utils
 * @description shows a notice message
 */
angular.module('enplug.sdk.utils').directive('notice', function () {
    'use strict';

    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        replace: true,
        templateUrl: 'sdk-utils/alert.tpl',
        link: function (scope) {
            scope.notice = true;
        }
    }
});

/**
 * Created by aleross on 7/14/15. Copyright (c) Enplug, Inc.
 */

/**
 * @ngdoc directive
 * @name proTip
 * @module enplug
 *
 * @param tip {String} Path to tip to show from ProTips constant.
 */
angular.module('enplug.sdk.utils').directive('proTip', ['$log', 'ProTips', function ($log, ProTips) {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'sdk-utils/protip.tpl',
        link: function (scope, element, attrs) {

            // Get the protip config from ProTip constant
            var path = attrs.tip,
                config = _.get(ProTips, path);
            if (_.isString(config)) {
                scope.config = {
                    tip: config
                };
            } else if (_.isObject(config)) {
                scope.config = config;
            } else {
                $log.error('Did not find pro tip config for path:', path);
                element.remove();
            }
        }
    };
}]);

/**
 * @ngdoc directive
 * @name statusButton
 * @module enplug.sdk.utils
 * @description easy showing/hiding of loading indicator in a button based on bool, promise, or function returned promise
 *
 * @param condition {function|promise|boolean} the condition to wait for showing the loading indicator.
 * @param action {function} the click action which can take parameters and should return a promise
 */
angular.module('enplug.sdk.utils').directive('statusButton', ['$log', '$timeout', function ($log, $timeout) {
    'use strict';

    // TODO: animate the icons a bit

    var showStatusDelay = 2000; // milliseconds to show success/error icon before resetting

    function isPromise(val) {
        return typeof val === 'object' && typeof val.then === 'function';
    }

    return {
        restrict: 'E',
        replace: true,
        scope: {
            condition: '=condition',
            action: '&'
        },
        transclude: true,
        templateUrl: 'sdk-utils/status-button.tpl',
        link: function (scope, element, attrs) {

            // Assign default classes
            if (!element.hasClass('btn')) {
                element.addClass('btn');
                element.addClass('btn-default');
            }

            // Allow ng-click style function calls with parameters
            if (scope.action) {
                element.bind('click', function (event, data) {
                    scope.$apply(function () {
                        var promise = scope.action({ data: data });
                        if (isPromise(promise)) {
                            handlePromise(promise);
                        } else {
                            $log.warn('Status button action must return a promise.');
                        }
                    });
                });
            }

            function handlePromise(promise) {
                scope.isLoading = true;
                promise.then(function () {
                    scope.success = true;
                }, function () {
                    scope.error = true;
                }).finally(function () {
                    element[0].blur();
                    scope.isLoading = false;
                    $timeout(function () {
                        scope.success = false;
                        scope.error = false;
                    }, showStatusDelay);
                });
            }

            // Watch a property for changes
            if (typeof attrs.condition !== 'undefined') {
                scope.isLoading = scope.condition;
                scope.$watch('condition', function (val) {
                    scope.isLoading = val;
                });
            }
        }
    }
}]);

angular.module('enplug.sdk.utils').filter('stNestedSearch', [function() {

    function getter(model, item) {
        var splitModel = model.split('.');
        return splitModel.reduce(function (map, key) {
            return map[key];
        }, item);
    }

    return function(items, filters) {
        var itemsLeft = items.slice();
        Object.keys(filters).forEach(function(model) {
            var value = filters[model];
            itemsLeft = itemsLeft.filter(function(item) {
                var compare = getter(model, item);
                if (compare !== null && compare !== undefined) {
                    return String(compare).toLowerCase().indexOf(value.toLowerCase()) >= 0;
                }
            });
        });
        return itemsLeft;
    };
}]);

angular.module('enplug.sdk.utils').filter('stNestedSort', [function() {

    // Returns nested property value: nested.property
    function getter(property, item) {
        var properties = property.split('.');
        return properties.reduce(function (map, key) {
            return map[key];
        }, item);
    }

    return function(input, property, descending) {
        if (Array.isArray(input)) {

            // Sort sorts in place, so we need to clone for when sorting is removed
            return input.concat().sort(function (a, b) {
                var sortOrder = 1;
                if (descending) {
                    sortOrder = -1;
                }

                var aVal = getter(property, a),
                    bVal = getter(property, b),
                    result = (aVal < bVal) ? -1 : (aVal > bVal) ? 1 : 0;
                return result * sortOrder;
            });
        }
        return input;
    };
}]);

// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').directive('stSummary', [function () {
    return {
        restrict: 'E',
        require: '^stTable',
        template: '<div class="summary">{{ paginationLabel | translate }} {{stRange.from}}-{{stRange.to}} {{ paginationLabel2 | translate }} {{ size }}</div>',
        link: function ($scope, $element, $attrs, $stTable) {

            $scope.paginationLabel;

            console.log('Get text catalog: ', gettext)

            $scope.paginationLabel = gettext("Showing");

            $scope.paginationLabel2 = gettext("of");

            // Watch for updates to data
            $scope.$watch($stTable.getFilteredCollection, function  (val) {
                $scope.size = (val || []).length;
            });

            // Watch for updates to pagination
            $scope.$watch('currentPage', function () {
                $scope.stRange = {
                    from: null,
                    to: null
                };

                $scope.stRange.from = $stTable.tableState().pagination.start + 1;
                $scope.stRange.to = $scope.currentPage === $scope.numPages ? $scope.size : ($scope.stRange.from + $scope.stItemsByPage - 1);
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name tagInput
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('tagInput', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tags: '='
        },
        templateUrl: 'sdk-utils/tag-input.tpl',
        link: function (scope, element, attrs) {

            scope.deleteTag = function(tag) {
                for ( var i=0,l=scope.tags.length; i<l; i++ ) {
                    if (  scope.tags[i] === tag ) {
                        scope.tags.splice(i, 1);
                    }
                }
            }

            scope.handleTextChange = function () {
                if ( scope.input == null ) {
                    return;  // filter empty input case
                }
                processTags(1);
            }

            scope.handleKeyPress = function (event) {
                if ( scope.input == null ) {
                    return;  // filter empty input case
                }
                if ( event.charCode != 13 && event.charCode != 32 ) {
                    return; // filter Enter Key and Space ONLY
                }
                if ( scope.input === ' ' || scope.input.length === 0) {
                    return; // filter edge cases
                }
                processTags(0);
            }

            function processTags(offset) {
                var words = scope.input.split(' ');
                for ( var i=offset; i<words.length; i++ ) {
                    if ( scope.tags.indexOf( words[i] ) === -1 ) {
                        scope.tags.push(words[i]);
                    }
                    words.splice(i--, 1);
                }
                scope.input = words.join(' ');
            }
        }
    };
});

/**
 * @ngdoc directive
 * @name tagSelect
 * @module enplug.sdk.utils
 *
 * @param tags {Array of Strings}
 */
angular.module('enplug.sdk.utils').directive('tagSelect', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tags: '=',
            selectedTags: '='
        },
        templateUrl: 'sdk-utils/tag-select.tpl',
        link: function (scope, element, attrs) {

            scope.toggleSelection = function (tag) {
                var index = scope.selectedTags.indexOf(tag);

                if ( index > -1 ) {
                    scope.selectedTags.splice(index, 1);
                } else {
                    scope.selectedTags.push(tag);
                }
            };

            scope.isSelected = function ( tag ) {
                return scope.selectedTags.indexOf( tag ) > -1;
            }
        }
    };
});

/**
* @ngdoc directive
* @name themePicker
* @module enplug.sdk.utils
*
* @param selectedTheme {Object selected theme}
* @param defaultTheme {Object default or new theme to use as templatee}
* @param themeDefinition {Object constant of theme sections}
* @param customThemes {Array of saved custom themes}
* @param defaultThemes {Array of default enplug themes}
* @param previewUrl {Url of current app}
* @param previewAsset {Object of current asset being used in preview editor}
* @param previewCheck {Promise, when available will only open theme preview if resolved}
*/
angular.module('enplug.sdk.utils').directive('themePicker', ['$document', '$enplugDashboard', '$enplugAccount', 'gettextCatalog', '$filter', '$route', '$q', function ($document, $enplugDashboard, $enplugAccount, gettextCatalog, $filter, $route, $q) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selectedTheme: '=',
            defaultTheme: '=',
            customThemes: '=',
            defaultThemes: '=',
            themeDefinition: '=',
            previewFonts: '=',
            previewUrl: '=',
            previewAsset: '=',
            previewCheck: '&?',
            layout: '='
        },
        templateUrl: 'sdk-utils/theme-picker.tpl',

        link: function (scope, element, attrs, arg) {

            if (!scope.previewCheck) {
              scope.previewCheck = function() { return $q.resolve() };
            }
            // Filtering background style for themes
            scope.filterStyle = function( theme ) {
                theme = parseJSON(theme);
                var themeContent = theme.Value.content;
                // Prevents undefined error if creating new theme is delayed before
                if( themeContent ) {
                    var style = $filter('themePickerStyle')(themeContent, themeContent.background.backgroundImage);
                    return style[themeContent.background.gradient];
                }
            }
            // CSS styles array for each theme
            scope.customThemeStyles = [];

            scope.customThemes.forEach(function(theme) {
                scope.customThemeStyles.push(scope.filterStyle(theme));
            });
            // Method to select theme
            scope.selectTheme = function( theme ) {
              theme = parseJSON(theme);
              scope.selectedTheme = theme;
            }
            // Removing theme
            scope.removeTheme = function( theme ) {
                $enplugDashboard.openConfirm({
                    title: gettextCatalog.getString('Delete "{{themeName}}" ?', {themeName: theme.Name}),
                    text: gettextCatalog.getString('Are you sure you want to cancel the changes you\'ve made? This action is not recoverable.'),
                    confirmText: gettextCatalog.getString('Delete'),
                    cancelText: gettextCatalog.getString('Cancel')
                }).then(function(){
                    $enplugAccount.deleteTheme(theme.Id);

                    var themeIndex = scope.customThemes.indexOf(theme);

                    if (themeIndex > -1) {
                        scope.customThemes.splice(themeIndex, 1);
                        scope.customThemeStyles.splice(themeIndex, 1);
                        scope.selectTheme(scope.defaultThemes[0]);
                    }
                });
            }
            // Creating new theme
            scope.createNewTheme = function() {
                var newTheme = scope.defaultTheme ? scope.defaultTheme : scope.defaultThemes[0];

                  scope.previewCheck().then(function() {
                      saveTheme(newTheme).then( function(newTheme) {
                          scope.customThemes.push(newTheme);
                          scope.customThemeStyles.push(scope.filterStyle(newTheme));
                          scope.selectTheme(newTheme);
                      });
                  });
            }
            // Copying default theme values
            scope.copyTheme = function( theme ) {
                var copy = angular.copy(theme);
                copy.Id = null;
                copy.Name = gettextCatalog.getString('Copy of {{themeName}}', {themeName: theme.Name});
                copy.isDefault = false;

                scope.previewCheck().then(function() {
                    saveTheme(copy).then( function(newTheme) {
                        scope.customThemes.push(newTheme);
                        scope.customThemeStyles.push(scope.filterStyle(newTheme))
                        scope.selectTheme(newTheme);
                    });
                });

            }
            // Editing theme
            scope.editTheme = function( theme ) {
                scope.previewCheck().then(function() {
                    saveTheme(theme).then( function(theme) {
                        scope.selectTheme(theme);
                        applyUpdates(theme);
                    });
                });
            }

            function parseJSON(theme) {
                if( typeof theme.Value == 'string' ) {
                    theme.Value = JSON.parse(theme.Value);
                }

                return theme;
            }

            function applyUpdates(updatedTheme) {
              for (var i = 0; i < scope.customThemes.length; i++) {

                  if( scope.customThemes[i].Id == updatedTheme.Id ) {
                      scope.customThemes[i] = updatedTheme;
                      scope.customThemeStyles[i] = scope.filterStyle(updatedTheme);
                  }
              }
            }
            // Function used to create, edit, and copy default theme to save
            function saveTheme( theme ) {
                return $enplugAccount.editTheme(scope.themeDefinition, theme, scope.previewUrl, scope.previewAsset, scope.layout, scope.previewFonts);
            }
        }
    };
}]);

/**
 * @ngdoc directive
 * @name tooltip
 * @module enplug.sdk.utils
 *
 * @param tip {String} Path to tip to show from ToolTips constant.
 */
angular.module('enplug.sdk.utils').directive('tooltip', ['Tooltips', function (Tooltips) {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'sdk-utils/tooltip.tpl',
        replace: true,
        scope: true,
        link: function (scope, element, attrs) {

            // Get the tooltip config from Tips constant
            var tip = attrs.tip,
                config = _.get(Tooltips, tip) || {};

            // Default position
            if (typeof config.position !== 'string') {
                config.position = 'top center'; // default position
            }

            // Allow for passing in string tips without a path
            if (!config.text) {
                config.text = tip;
            }

            // Add external link indicator if this isn't a local link
            if (config.link && ~config.link.location.indexOf('http')) {
                element.find('a').attr('target', '_blank');
            }

            scope.config = config;
        }
    };
}]);

angular.module('enplug.sdk.utils').filter('themePickerStyle', function() {

    function hexToRGB(color) {
        return color.match(/[A-Za-z0-9]{2}/g)
          .map(function(hexValue){
            return parseInt(hexValue, 16)
          });
    }

    return function(theme, backgroundImage) {

      theme.background.rgb = hexToRGB(theme.background.backgroundColor);
      theme.background.rgb2 = hexToRGB(theme.background.backgroundColor2);

      // Both image and color selected
      if (theme.background.backgroundTypes[0] &&
          theme.background.backgroundTypes[1] &&
          backgroundImage) {

              return  {
                  'Solid': {
                      'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                      theme.background.rgb[2] + ', ' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb[0] + ',' +
                      theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ')), url(' +
                      backgroundImage +')',
                      'background-repeat': 'no-repeat',
                      'background-position': 'center',
                      'background-size': 'cover'
                  },

                  'Vertical Gradient': {
                      'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                      theme.background.rgb[2] + ', ' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' +
                      theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 + ')), url(' +
                      backgroundImage +')',
                      'background-repeat': 'no-repeat',
                      'background-position': 'center',
                      'background-size': 'cover'
                  },

                  'Horizontal Gradient': {
                      'background': 'linear-gradient(-90deg, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha + ') , rgba(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                      ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 + ')), url(' +
                      backgroundImage + ')',
                      'background-repeat': 'no-repeat',
                      'background-position': 'center',
                      'background-size': 'cover'
                  },

                  'Radial Gradient': {
                    'background': 'radial-gradient(70vw at 50% 50%, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha2 +'), rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                    ',' + theme.background.rgb[2] + ','+ theme.background.backgroundAlpha +') , rgba(' + theme.background.rgb2[0] + ',' +
                     theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + theme.background.backgroundAlpha2 +')), url(' +
                     backgroundImage +')',
                     'background-repeat': 'no-repeat',
                     'background-position': 'center',
                     'background-size': 'cover'
                  }
              }
      }  // Only color selected, Or both are selected but no background image has been uploaded yet
        else if(theme.background.backgroundTypes[0] ||
                !backgroundImage) {
                return {

                    'Solid': {
                      'background': 'rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ')'
                    },

                    'Vertical Gradient': {
                      'background': 'linear-gradient(rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                      theme.background.rgb[2] + ') , rgb(' + theme.background.rgb2[0] + ',' +
                      theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ')'
                    },

                    'Horizontal Gradient': {
                      'background': 'linear-gradient(-90deg, rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ') , rgb(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                      ',' + theme.background.rgb2[2] + ')'
                    },

                    'Radial Gradient': {
                      'background': 'radial-gradient(70vw at 50% 50%, rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + '), rgb(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                      ',' + theme.background.rgb[2] + ') , rgb(' + theme.background.rgb2[0] + ',' +
                       theme.background.rgb2[1] + ',' + theme.background.rgb2[2] +')'
                    }
                }

    } // Only image selected. No color selected
      else if (theme.background.backgroundTypes[1]) {

          return  {
              'Solid': {
                  'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                  theme.background.rgb[2] + ',' + 0 + ') , rgba(' + theme.background.rgb[0] + ',' +
                  theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + 0 + ')), url(' +
                  backgroundImage +')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Vertical Gradient': {
                  'background': 'linear-gradient(rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' +
                  theme.background.rgb[2] + ', ' + 0 + ') , rgba(' + theme.background.rgb2[0] + ',' +
                  theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + 0 + ')), url(' +
                  backgroundImage +')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Horizontal Gradient': {
                  'background': 'linear-gradient(-90deg, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                  ',' + theme.background.rgb[2] + ',' + 0 + ') , rgba(' + theme.background.rgb2[0] + ',' + theme.background.rgb2[1] +
                  ',' + theme.background.rgb2[2] + ',' + 0 + ')), url(' +
                  backgroundImage + ')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-size': 'cover'
              },

              'Radial Gradient': {
                'background': 'radial-gradient(70vw at 50% 50%, rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] + ',' + theme.background.rgb[2] + ',' + theme.background.backgroundAlpha2 +'), rgba(' + theme.background.rgb[0] + ',' + theme.background.rgb[1] +
                ',' + theme.background.rgb[2] + ','+ 0 +') , rgba(' + theme.background.rgb2[0] + ',' +
                 theme.background.rgb2[1] + ',' + theme.background.rgb2[2] + ',' + 0 +')), url(' +
                 backgroundImage +')',
                 'background-repeat': 'no-repeat',
                 'background-position': 'center',
                 'background-size': 'cover'
              }
          }
       }
    }
});

/**
 * @ngdoc service
 * @name ColorTools
 * @module enplug.sdk.utils
 * @source https://gist.github.com/emanuel-sanabria-developer/5793377
 */

 angular.module('enplug.sdk.utils').factory('ColorTools', [function () {
    
    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   Number  r       The red color value
     * @param   Number  g       The green color value
     * @param   Number  b       The blue color value
     * @return  Array           The HSL representation
     */
    function rgb2hsl (r, g, b) {

        var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

        if (diff == 0) {
            h = s = 0;
        } else {
            s = diff / v;
            rr = diffc(r);
            gg = diffc(g);
            bb = diffc(b);

            if (r === v) {
                h = bb - gg;
            }else if (g === v) {
                h = (1 / 3) + rr - bb;
            }else if (b === v) {
                h = (2 / 3) + gg - rr;
            }
            if (h < 0) {
                h += 1;
            }else if (h > 1) {
                h -= 1;
            }
        }
        return [h, s, v ]
    }

    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Number  h       The hue
     * @param   Number  s       The saturation
     * @param   Number  l       The lightness
     * @return  Array           The RGB representation
     */
    function hsl2rgb (h,s,v) {
        var r,g,b,i,f,p,q,t,hue;
        if (h.h !=null){
            v=h.b;
            s=h.s;
            h=h.h;
        }
        h%=360;
        if (h<1) h*=360;
        s=s>1?1:s<0?0:s;
        v=v>1?1:v<0?0:v;
        hue=h
        if (s==0) r=g=b=v;
        else {
            h/=60;
            f=h-(i=Math.floor(h));
            p=v*(1-s);
            q=v*(1-s*f);
            t=v*(1-s*(1-f));
            switch (i) {
                case 0:r=v; g=t; b=p; break;
                case 1:r=q; g=v; b=p; break;
                case 2:r=p; g=v; b=t; break;
                case 3:r=p; g=q; b=v; break;
                case 4:r=t; g=p; b=v; break;
                case 5:r=v; g=p; b=q; break;
            }
        }
        return [ Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)]
    }

    /**
     * Converts HEX color value to Array of integer representing the Red Green Blue channels.
     *
     * @param   Number  hex     The hex value FFFFFF
     * @return  Array of 3 Number  The RGB value [ [0, 255], [0, 255], [0, 255] ].
     */
    function hex2rgb (hex) {
        return [ (hex >> 16) & 255, (hex >> 8) & 255, hex & 255 ];
    }

    /**
     * Converts RGB color value to array of hex representing the Red Green Blue channels.
     *
     * @param   Number  r           red [0,1]
     * @param   Number  g           red [0,1]
     * @param   Number  r           red [0,2]
     * @return  Array ofb3 Number   The RGB value [ [0, 255], [0, 255], [0, 255] ].
     */
    function rgb2hex ( r, g, b) {
        var hex = (r*65536+g*256+b).toString(16,6);
        while ( hex.length < 6 ) {
            hex = '0'+hex;
        }
        return hex;
    }

    return {
        rgb2hsl: rgb2hsl,
        hsl2rgb: hsl2rgb,
        hex2rgb: hex2rgb,
        rgb2hex: rgb2hex
    };
}]);

angular.module('enplug.sdk.utils').service('DetectChanges', ['$log', function ($log) {

    // TODO: remove lodash dependency

    'use strict';

    /**
     * Fields being watched for changes.
     * @type {Array}
     */
    var fields = [];

    /**
     * Convenience debug method.
     * @param field
     */
    function log(field) {
        $log.debug('Change detected:', field);
    }

    return {

        /**
         * Takes a single or array of fields to watch on the $scope.
         * Example: 'scheduling.times', or ['height', 'width']
         * Todo: is there any harm in using scope? should we be destroying the fields after route change?
         * @param watchForChanges
         * @param scope
         * @param verbose for debugging
         */
        watch: function (watchForChanges, scope, verbose) {
            fields = []; // reset any previous usages
            if (!_.isObject(scope)) {
                $log.error('Detect changes requires $scope.');
                return;
            }
            if (!_.isArray(watchForChanges)) {
                watchForChanges = [watchForChanges];
            }

            // Register watchers for each field
            watchForChanges.forEach(function (watcher) {
                var field = {
                    property: watcher,
                    changed: false
                };

                // Get the original value, can be as nested as we want
                field.original = _.cloneDeep(watcher.split('.').reduce(function (map, key) {
                    return map[key];
                }, scope));

                // Store the type for debugging/reference
                field.type = typeof field.original;

                // Track this field
                fields.push(field);

                // Register listeners based on data type
                if (_.isArray(field.original)) {
                    // Arrays need to be watched as a collection
                    scope.$watch(field.property, function (newValue, oldValue) {
                        // Todo add a property to track by instead of equality xor?
                        field.changed = !_.isEqual(newValue, field.original);
                        field.current = newValue;
                        if (verbose && newValue !== oldValue) {
                            log(field);
                        }
                    }, true);
                } else if (_.isDate(field.original)) {
                    field.type = 'Date';
                    scope.$watch(field.property, function (newValue) {
                        if (_.isDate(newValue)) {
                            field.changed = field.original.getTime() !== newValue.getTime();
                        } else {
                            field.changed = true;
                        }
                        field.current = newValue;
                        if (verbose) {
                            log(field);
                        }
                    });
                } else {
                    // Todo watch objects differently?
                    scope.$watch(field.property, function (newValue, oldValue) {
                        field.changed = newValue !== field.original;
                        field.current = newValue;
                        if (verbose && newValue !== oldValue) {
                            log(field);
                        }
                    });
                }
            });

            if (verbose) {
                $log.debug('[DetectChanges] Registered fields to watch:', fields);
            }
        },

        /**
         * Returns whether any properties being watched have changed.
         * @returns {boolean}
         */
        hasChanges: function () {
            var changed = _.filter(fields, { changed: true });
            return changed.length > 0;
        },

        /**
         * Returns array of property strings being watched for changes.
         * @returns {Array}
         */
        fieldsChanged: function () {
            return _.pluck(_.filter(fields, { changed: true }), 'property');
        },

        reset: function () {
            fields = [];
        }
    };
}]);

angular.module('enplug.sdk.utils').factory('GUID', [function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return {
        new: function() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    };
}]);

/**
 * @ngdoc service
 * @name PositionTools
 * @module enplug.sdk.utils
 * @source snippets from jquery library
 */

 angular.module('enplug.sdk.utils').factory('PositionTools', ['$window', function ($window) {
    
    function getOffset(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return {
            	top: rect.top + $window.pageYOffset - docElem.clientTop,
                left: rect.left + $window.pageXOffset - docElem.clientLeft
            };
        }
    }

	function getLeft(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return rect.left + $window.pageXOffset - docElem.clientLeft;
        }
    }

	function getTop(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return rect.top + $window.pageYOffset - docElem.clientTop;
        }
    }

    return {
        getOffset: getOffset,
        getLeft: getLeft,
        getTop: getTop
    };
}]);

angular.module('enplug.sdk.utils').factory('ScriptLoaderService', ['$q', '$document', '$timeout', function ($q, $document, $timeout) {
    'use strict';

    return {

        // Lazy-load the script
        loadScript: function (callback, src) {
            var defer = $q.defer();

            // Insert script into html
            var script = $document[0].createElement('script');
            script.src = src;
            $document[0].body.appendChild(script);

            // Script loaded
            script.onload = script.onreadystatechange = function () {
                $timeout(function () {
                    if (callback()) {
                        defer.resolve();
                    } else {
                        defer.reject('Error occurred. Please try again.');
                    }
                });
            };

            // Script failed to load
            script.onerror = function () {
                $timeout(function () {
                    defer.reject('Error. Please try again.');
                });
            };

            return defer.promise;
        }
    }
}]);

angular.module('enplug.sdk.utils.templates', []).run(['$templateCache', function ($templateCache) {
    "use strict";
    $templateCache.put("sdk-utils/alert.tpl",
        "<div class=alert><i ng-hide=notice class=\"ion-alert-circled alert-icon\"></i> <i ng-show=notice class=\"ion-information-circled alert-icon\"></i><ng-transclude class=alert-body></ng-transclude></div>");
    $templateCache.put("sdk-utils/background-picker.tpl",
        "<div class=\"clearfix background-picker\"><div><button class=upload-image ng-hide=imageData.BgUrl ng-click=promptImageUpload() translate>Upload Image</button><div class=\"upload-image uploaded\" ng-show=imageData.BgUrl><span class=filename title={{imageData.BgFilename}}>{{imageData.BgFilename}}</span> <a class=remove ng-click=removeUploadedFile()>✕</a></div></div><div ng-show=imageData.BgUrl class=image-position><div class=\"one-third clearfix\"><ul class=\"alignement-widget clearfix\"><li class=top-left ng-click=\"imageData.BgPosition='top-left'\" ng-class=\"{ active: imageData.BgPosition=='top-left', disabled:isDisabled('top-left') }\"></li><li class=top ng-click=\"imageData.BgPosition='top'\" ng-class=\"{ active: imageData.BgPosition=='top', disabled:isDisabled('top') }\"></li><li class=top-right ng-click=\"imageData.BgPosition='top-right'\" ng-class=\"{ active: imageData.BgPosition=='top-right', disabled:isDisabled('top-right') }\"></li><li class=left ng-click=\"imageData.BgPosition='left'\" ng-class=\"{ active: imageData.BgPosition=='left', disabled:isDisabled('left') }\"></li><li class=center ng-click=\"imageData.BgPosition='center'\" ng-class=\"{ active: imageData.BgPosition=='center', disabled:isDisabled('center') }\"></li><li class=right ng-click=\"imageData.BgPosition='right'\" ng-class=\"{ active: imageData.BgPosition=='right', disabled:isDisabled('right') }\"></li><li class=bottom-left ng-click=\"imageData.BgPosition='bottom-left'\" ng-class=\"{ active: imageData.BgPosition=='bottom-left', disabled:isDisabled('bottom-left') }\"></li><li class=bottom ng-click=\"imageData.BgPosition='bottom'\" ng-class=\"{ active: imageData.BgPosition=='bottom', disabled:isDisabled('bottom') }\"></li><li class=bottom-right ng-click=\"imageData.BgPosition='bottom-right'\" ng-class=\"{ active: imageData.BgPosition=='bottom-right', disabled:isDisabled('bottom-right') }\"></li></ul><p translate>Position</p></div><div class=\"two-thirds clearfix\"><div class=\"full-width half-height\" ng-click=\"imageData.BgSize='contain'\" ng-class=\"{ active: imageData.BgSize=='contain' }\"><p class=\"icon icon-contain\" translate>Contain</p></div><div class=\"full-width half-height\" ng-click=\"imageData.BgSize='cover'\" ng-class=\"{ active: imageData.BgSize=='cover' }\"><p class=\"icon icon-cover\"><translate>Cover</translate><span class=sub-icon></span></p></div></div></div></div>");
    $templateCache.put("sdk-utils/color-picker.tpl",
        "<div class=color-picker ng-blur=close()><div class=swatch ng-style=\"{ 'background-color': '#' + hex }\" ng-click=toggle()></div><div class=transcluded ng-transclude ng-click=toggle()></div><div class=palette ng-class=\"{ 'opened': opened }\"><div class=saturation ng-class=\"{ 'no-alpha': noAlpha }\" ng-style=\"{ 'background-color': '#' + getHueColor() }\"><div class=cursor></div></div><div class=preview ng-style=\"{ 'background-color': '#' + hex }\"></div><div class=hue><div class=cursor></div></div><div class=numbers><ul class=clearfix ng-class=\"{ 'show-as-hex': showAs=='hex', 'show-as-rgb': showAs=='rgb'  }\"><li class=\"\"><label translate translate-comment=\"R represents 'red' in rgb\">R:</label><input class=channel-red type=number name=channel-red min=0 max=255 ng-model=red ng-change=watchRGBInputChange()></li><li class=\"\"><label translate translate-comment=\"G represents 'green' in rgb\">G:</label><input class=channel-green type=number name=channel-green min=0 max=255 ng-model=green ng-change=watchRGBInputChange()></li><li class=\"\"><label translate translate-comment=\"B represents 'blue' in rgb\">B:</label><input class=channel-blue type=number name=channel-blue min=0 max=255 ng-model=blue ng-change=watchRGBInputChange()></li><li class=iconic ng-click=toggleShowAs()><i class=\"icon ion-android-options\"></i></li><li class=hex-values><label>#</label><input class=hex-input name=hex-input maxlength=6 ng-model=hexInput ng-change=watchHEXInputChange()></li></ul></div><div class=alpha ng-hide=noAlpha><div class=field><label translate translate-comment=\"A represents 'Alpha'\">A:</label><input class=channel-alpha type=number name=channel-alpha min=0 max=100 ng-model=alphaPercent></div><div class=alpha-slider ng-style=\"{ 'background-color': '#' + hex }\"><div class=cursor></div></div></div></div></div>");
    $templateCache.put("sdk-utils/custom-duration-slider.tpl",
        "<div class=duration-slider-directive><div class=\"slider-container clearfix\"><div class=slider><div class=slider-cursor><i ng-show=ratio class=\"icon on ion-record\"><span>||</span> </i><i ng-hide=ratio class=\"icon on ion-record icon-undefined\"><span>&mdash;</span></i></div></div></div><input maxlength=5 ng-model=ratio placeholder={{placeholder}} class=slider-duration-input ng-blur=checkRatioValue() ng-focus=clearUndefined() ng-keydown=handleKeyDown($event)></div>");
    $templateCache.put("sdk-utils/display-counter.tpl",
        "<div class=display-counter><span ng-bind=\"count | translate\" class=binding></span></div>");
    $templateCache.put("sdk-utils/duration-slider.tpl",
        "<div class=duration-slider><div class=slider-cursor><span>{{formatLabel(ratio)}}</span></div></div>");
    $templateCache.put("sdk-utils/help-block.tpl",
        "<footer class=\"footer-help block-center\"><div class=\"info-message text-gray\"><i class=\"ion-help-circled text-primary\"></i><translate translate-comment=\"The full paragraph for this string is the following: 'Need help? Go to the Enplug Help Center'\">Need help? Go to the</translate><a href=http://support.enplug.com/hc/en-us target=_blank>&nbsp;<translate>Enplug Help Center</translate></a></div></footer>");
    $templateCache.put("sdk-utils/layout-toggle.tpl",
        "<div class=\"btn-group layout-toggle\"><button ng-click=toggleLayout() ng-disabled=showGridLayout class=\"btn btn-default btn-icon btn-sm ion-android-apps grid-toggle\"></button> <button ng-click=toggleLayout() ng-disabled=!showGridLayout class=\"btn btn-default btn-icon btn-sm ion-navicon table-toggle\"></button></div>");
    $templateCache.put("sdk-utils/loading.tpl",
        "<div class=loading-directive ng-show=loading><div class=loader ng-hide=error><svg class=circular><circle class=path cx=32 cy=32 r=30 fill=none stroke-width=2></circle></svg></div><div ng-show=error><p translate>There was an error.</p></div></div><ng-transclude class=loading-content ng-hide=loading></ng-transclude>");
    $templateCache.put("sdk-utils/material-checkbox.tpl",
        "<div class=checkbox><label for=\"{{ id }}\"><input id=\"{{ id }}\" type=checkbox ng-model=model> <span class=checkbox-material><span class=check></span></span> <span class=checkbox-label><span ng-bind=\"label | translate\"></span></span></label></div>");
    $templateCache.put("sdk-utils/material-input.tpl",
        "<label for=\"{{ ::id }}\" ng-bind=\"label | translate\"></label><div class=validation ng-messages=formField.$error ng-if=formField.$dirty><span class=text-danger ng-message=required translate>This is required.</span> <span class=text-danger ng-message=email translate>Please enter a valid email address.</span> <span class=text-danger ng-message=url translate>Please enter a valid URL starting with http:// or https://</span> <span class=text-danger ng-message=equals translate>Passwords must match.</span></div>");
    $templateCache.put("sdk-utils/material-radio.tpl",
        "<div class=radio><label><input type=radio ng-model=model> <span class=radio-on></span> <span class=radio-off></span><ng-transclude></ng-transclude></label></div>");
    $templateCache.put("sdk-utils/material-select.tpl",
        "<span class=form-label ng-bind=\"label | translate\"></span><ng-transclude></ng-transclude>");
    $templateCache.put("sdk-utils/material-switch.tpl",
        "<label class=material-switch ng-class=\"{ 'switch-on': model, 'switch-off': !model, dirty: dirty }\" ng-click=\"dirty = true\"><input class=default-input type=checkbox ng-model=model><ng-transclude></ng-transclude></label>");
    $templateCache.put("sdk-utils/protip.tpl",
        "<div class=pro-tip><i class=\"ion-flash text-primary\"></i> <strong translate>ProTip: </strong><span ng-bind=\"config.tip | translate\"></span> <a ng-if=::config.link dynamic-click=::config.link.action dynamic-href=::config.link.location ng-bind=\"config.link.text | translate\"></a></div>");
    $templateCache.put("sdk-utils/status-button.tpl",
        "<button class=status-button><i class=ion-load-a ng-show=isLoading></i> <i class=ion-checkmark-circled ng-show=\"!isLoading && success\"></i> <i class=ion-alert-circled ng-show=\"!isLoading && error\"></i><ng-transclude></ng-transclude></button>");
    $templateCache.put("sdk-utils/tag-input.tpl",
        "<div class=\"tag-input clearfix\"><ul class=\"list clearfix\"><li class=tag ng-repeat=\"tag in tags track by $index\">{{tag}} <i ng-click=deleteTag(tag) class=\"icon ion-android-close\"></i></li><li><input name=fname placeholder=\"{{ 'Add tags' | translate }}\" ng-model=input ng-change=handleTextChange() ng-keypress=handleKeyPress($event)></li></ul></div>");
    $templateCache.put("sdk-utils/tag-select.tpl",
        "<div class=\"tag-select clearfix\"><ul class=\"list clearfix\"><li class=tag ng-repeat=\"tag in tags track by $index\" ng-click=toggleSelection(tag) ng-class=\"{ 'selected': isSelected(tag) }\">{{tag}}</li></ul></div>");
    $templateCache.put("sdk-utils/theme-picker.tpl",
        "<div class=themes-directive><div class=themes-flexbox><h3 class=flexbox-header><translate>Enplug Themes</translate></h3><div class=enplug-themes-container><div ng-class=\"{'selected': selectedTheme.Id == theme.Id}\" ng-style=filterStyle(theme) ng-click=selectTheme(theme) ng-repeat=\"theme in defaultThemes | orderDefaultTheme: defaultThemes\" class=custom-themes><div class=template><div class=mini-template ng-style=filterStyle(theme) ng-transclude></div></div><span class=label>{{theme.Name}}</span><div ng-hide=false class=roll-over><button class=\"btn theme-edit-button theme-copy-button\" ng-click=\"\n" +
        "                        copyTheme(theme)\"><translate>Edit Theme</translate></button></div></div></div></div><div class=themes-flexbox><h3 class=flexbox-header><translate>Custom Themes</translate></h3><div class=enplug-themes-container><div ng-class=\"{'selected': selectedTheme.Id == theme.Id}\" ng-style=filterStyle(theme) ng-click=selectTheme(theme) ng-repeat=\"theme in customThemes\" class=custom-themes><div class=template><div class=mini-template ng-style=filterStyle(theme) ng-transclude></div></div><span class=label>{{theme.Name}}</span><div ng-hide=false class=roll-over><button class=\"btn theme-edit-button\" ng-click=\"\n" +
        "                    editTheme(theme)\"><translate>Edit</translate></button> <button class=\"btn theme-delete-button\" ng-click=removeTheme(theme)><translate>Delete</translate></button></div></div><div ng-click=createNewTheme() ng-class=\"{'selected': selected == newTheme}\" class=\"custom-themes new-theme\"><img class=new-theme-img ng-src=./img/new-theme.png> <span class=label>{{newTheme.Name}}</span></div></div></div></div>");
    $templateCache.put("sdk-utils/tooltip.tpl",
        "<span class=glossaryTip><sup ng-hide=::config.tooltip class=\"icon ion-help-circled text-gray-light\"></sup> <span class=tipText ng-show=::config.tooltip ng-bind=\"config.tooltip | translate\"></span><span class=tip ng-class=::config.position><span class=\"tip-content radius shadow\"><span ng-if=config.title class=\"tipTitle text-gd\" ng-bind=\"config.title | translate\"></span> <span class=\"tipBody text-reset\" ng-bind=\"config.text | translate\" ng-class=\"{ pt: !config.title, pb: !config.link }\"></span> <a ng-if=::config.link class=link-reset ng-href=\"{{ ::config.link.location }}\" ng-bind=\"config.link.title | translate\"></a> <span class=tipArrow></span></span></span></span>");
}]);
