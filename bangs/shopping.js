var bangs = bangs || [];

bangs = [].concat([
    {
        "d": "search.11st.co.kr",
        "b": "11st",
        "u": "http://search.11st.co.kr/SearchPrdAction.tmall?method=getTotalSearchSeller&kwd={{{s}}}"
    },
    {
        "d": "www.1mg.com",
        "b": "1mg",
        "u": "https://www.1mg.com/search/all?name={{{s}}}"
    },
    {
        "d": "krsk.au.ru",
        "b": "24au",
        "u": "https://krsk.au.ru/nextauction/?search={{{s}}}"
    },
    {
        "d": "www.2dehands.be",
        "b": "2dehands",
        "u": "http://www.2dehands.be/markt?qq={{{s}}}"
    },
    {
        "d": "www.2ememain.be",
        "b": "2eme",
        "u": "http://www.2ememain.be/marche/2/{{{s}}}/"
    },
    {
        "d": "www.2ememain.be",
        "b": "2ememain",
        "u": "http://www.2ememain.be/marche/?qq={{{s}}}"
    },
    {
        "d": "www.2xmoinscher.com",
        "b": "2xmc",
        "u": "https://www.2xmoinscher.com/r?q={{{s}}}"
    },
    {
        "d": "www.360skate.com",
        "b": "360",
        "u": "http://www.360skate.com/catalogsearch/result/?q={{{s}}} "
    },
    {
        "d": "3tailer.com",
        "b": "3tailer",
        "u": "https://3tailer.com/search/?q={{{s}}}"
    },
    {
        "d": "store.401games.ca",
        "b": "401games",
        "u": "https://store.401games.ca/pages/search-results?q={{{s}}}"
    },
    {
        "d": "www.4sound.dk",
        "b": "4sound",
        "u": "http://www.4sound.dk/search/{{{s}}}"
    },
    {
        "d": "www.4x4direct.co.za",
        "b": "4x4direct",
        "u": "http://www.4x4direct.co.za/search?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search="
    },
    {
        "d": "www.quintoandar.com.br",
        "b": "5a",
        "u": "https://www.quintoandar.com.br/alugar/imovel/{{{s}}}/"
    },
    {
        "d": "www.6pm.com",
        "b": "6pm",
        "u": "https://www.6pm.com/search?term={{{s}}}"
    },
    {
        "d": "no.7digital.com",
        "b": "7digitalno",
        "u": "https://no.7digital.com/search?q={{{s}}}"
    },
    {
        "d": "8020.net",
        "b": "8020",
        "u": "https://8020.net/freetextsearch/search/result/?keyword={{{s}}}"
    },
    {
        "d": "www.91mobiles.com",
        "b": "91",
        "u": "http://www.91mobiles.com/topic/{{{s}}}/all"
    },
    {
        "d": "999.md",
        "b": "999",
        "u": "https://999.md/ru/search?query={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "aa",
        "u": "http://www.amazon.com/s/&url=search-alias%3Dautomotive&field-keywords={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "a",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "a.at",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com.au",
        "b": "aau",
        "u": "https://www.amazon.com.au/s?k={{{s}}}"
    },
    {
        "d": "new.abb.com",
        "b": "abb",
        "u": "https://new.abb.com/search/results#query={{{s}}}"
    },
    {
        "d": "www.abesmarket.com",
        "b": "abe",
        "u": "http://www.abesmarket.com/catalogsearch/result/?cat=5&order=relevance&dir=desc&q={{{s}}}"
    },
    {
        "d": "www.abebooks.de",
        "b": "abebooksde",
        "u": "http://www.abebooks.de/servlet/SearchResults?kn={{{s}}}&sts=t&x=0&y=0"
    },
    {
        "d": "www.abebooks.co.uk",
        "b": "abeuk",
        "u": "http://www.abebooks.co.uk/servlet/SearchResults?kn={{{s}}}"
    },
    {
        "d": "www.amazon.com.br",
        "b": "abr",
        "u": "https://www.amazon.com.br/s?k={{{s}}} "
    },
    {
        "d": "www.allbookstores.com",
        "b": "abs",
        "u": "http://www.allbookstores.com/search?q={{{s}}}"
    },
    {
        "d": "miabuelavende.com",
        "b": "abuela",
        "u": "http://miabuelavende.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.amazon.ca",
        "b": "aca",
        "u": "https://www.amazon.ca/s?k={{{s}}}"
    },
    {
        "d": "americancustomboxes.com",
        "b": "acb",
        "u": "https://americancustomboxes.com/?s={{{s}}}"
    },
    {
        "d": "www.acehardware.com",
        "b": "ace",
        "u": "http://www.acehardware.com/search/index.jsp?kwCatId=&kw={{{s}}}&origkw={{{s}}}&f=Taxonomy/ACE/19541496&sr=1"
    },
    {
        "d": "www.amazon.cn",
        "b": "acn",
        "u": "https://www.amazon.cn/s?k={{{s}}}"
    },
    {
        "d": "www.adafruit.com",
        "b": "adafruit",
        "u": "https://www.adafruit.com/?q={{{s}}}"
    },
    {
        "d": "www.adagio.com",
        "b": "adagio",
        "u": "http://www.adagio.com/search/index.html?query={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "a.de",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "ade",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "adefb",
        "u": "https://www.amazon.de/s?k={{{s}}}&i=english-books"
    },
    {
        "d": "smile.amazon.de",
        "b": "ades",
        "u": "https://smile.amazon.de/s/ref=nb_sb_noss?field-keywords={{{s}}}"
    },
    {
        "d": "www.adiglobaldistribution.us",
        "b": "adi",
        "u": "https://www.adiglobaldistribution.us/search?criteria={{{s}}}"
    },
    {
        "d": "www.adidas.fr",
        "b": "adidas",
        "u": "http://www.adidas.fr/search?q={{{s}}}"
    },
    {
        "d": "www.adlibris.com",
        "b": "adlibris",
        "u": "https://www.adlibris.com/se/sok?q={{{s}}}"
    },
    {
        "d": "www.adlibris.com",
        "b": "adlibrisdk",
        "u": "http://www.adlibris.com/dk/searchresult.aspx?search=quickfirstpage&quickvalue={{{s}}}"
    },
    {
        "d": "www.adlibris.com",
        "b": "adlibrisfi",
        "u": "http://www.adlibris.com/fi/searchresult.aspx?search=quickfirstpage&quickvalue={{{s}}}"
    },
    {
        "d": "www.adlibris.com",
        "b": "adlibrisno",
        "u": "http://www.adlibris.com/no/searchresult.aspx?search=quickfirstpage&quickvalue={{{s}}}"
    },
    {
        "d": "www.adlibris.com",
        "b": "adlibrisse",
        "u": "http://www.adlibris.com/se/searchresult.aspx?search=quickfirstpage&quickvalue={{{s}}}"
    },
    {
        "d": "www.adorama.com",
        "b": "ador",
        "u": "https://www.adorama.com/l/?searchinfo={{{s}}}"
    },
    {
        "d": "www.adverts.ie",
        "b": "adverts",
        "u": "http://www.adverts.ie/for-sale/q_{{{s}}}/"
    },
    {
        "d": "www.aliexpress.com",
        "b": "ae",
        "u": "https://www.aliexpress.com/wholesale?SearchText={{{s}}}"
    },
    {
        "d": "www.ae.com",
        "b": "aeo",
        "u": "https://www.ae.com/search/{{{s}}}"
    },
    {
        "d": "www.aerobis.com",
        "b": "aerobis",
        "u": "https://www.aerobis.com/en/?s={{{s}}}"
    },
    {
        "d": "www.amazon.es",
        "b": "a.es",
        "u": "https://www.amazon.es/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.es",
        "b": "aes",
        "u": "https://www.amazon.es/s?k={{{s}}}"
    },
    {
        "d": "www.afcindustries.com",
        "b": "afcind",
        "u": "https://www.afcindustries.com/products/search.aspx?search={{{s}}}"
    },
    {
        "d": "www.amazon.fr",
        "b": "afr",
        "u": "https://www.amazon.fr/s?k={{{s}}}"
    },
    {
        "d": "www.adafruit.com",
        "b": "aft",
        "u": "https://www.adafruit.com/search?q={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "age",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "ager",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "agora.co.il",
        "b": "agorail",
        "u": "https://agora.co.il/toGet.asp?iseek={{{s}}}"
    },
    {
        "d": "www.ah.nl",
        "b": "ah",
        "u": "https://www.ah.nl/zoeken?rq={{{s}}}"
    },
    {
        "d": "www.amazon.in",
        "b": "a.in",
        "u": "https://www.amazon.in/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.in",
        "b": "ain",
        "u": "https://www.amazon.in/s?k={{{s}}}"
    },
    {
        "d": "www.airbnb.com",
        "b": "airbnb",
        "u": "https://www.airbnb.com/s/{{{s}}}"
    },
    {
        "d": "www.airlinehyd.com",
        "b": "airlinehyd",
        "u": "https://www.airlinehyd.com/Results.aspx?srh={{{s}}}"
    },
    {
        "d": "www.amazon.it",
        "b": "ait",
        "u": "https://www.amazon.it/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.it",
        "b": "a.it",
        "u": "https://www.amazon.it/s?k={{{s}}}"
    },
    {
        "d": "www.achajogobarato.com.br",
        "b": "ajb",
        "u": "http://www.achajogobarato.com.br/search.html?query={{{s}}}"
    },
    {
        "d": "www.amazon.co.jp",
        "b": "aj",
        "u": "https://www.amazon.co.jp/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.jp",
        "b": "ajl",
        "u": "https://www.amazon.co.jp/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.jp",
        "b": "ajp",
        "u": "https://www.amazon.co.jp/s?k={{{s}}}"
    },
    {
        "d": "www.akakce.com",
        "b": "akakce",
        "u": "http://www.akakce.com/arama/?q={{{s}}}"
    },
    {
        "d": "akizukidenshi.com",
        "b": "akiduki",
        "u": "http://akizukidenshi.com/catalog/goods/search.aspx?keyword= {{{s}}}&goods=&number=&name=&min_price=&max_price=&search.x=0&search.y=0"
    },
    {
        "d": "www.allkeyshop.com",
        "b": "aks",
        "u": "http://www.allkeyshop.com/blog/catalogue/search-{{{s}}}/"
    },
    {
        "d": "www.alamaula.com",
        "b": "ala",
        "u": "http://www.alamaula.com/q/{{{s}}}/S0"
    },
    {
        "d": "www.aladin.co.kr",
        "b": "aladin",
        "u": "http://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord={{{s}}}"
    },
    {
        "d": "alatest.de",
        "b": "alatest",
        "u": "http://alatest.de/searchaction.html?keyword1={{{s}}}"
    },
    {
        "d": "www.alibaba.com",
        "b": "alb",
        "u": "https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText={{{s}}}"
    },
    {
        "d": "www.ah.nl",
        "b": "alberthein",
        "u": "http://www.ah.nl/zoeken?rq={{{s}}}"
    },
    {
        "d": "www.alexshoes.com.br",
        "b": "alexshoes",
        "u": "http://www.alexshoes.com.br/buscacomfab.asp?chaves={{{s}}}"
    },
    {
        "d": "www.aliexpress.com",
        "b": "ali",
        "u": "https://www.aliexpress.com/wholesale?SearchText={{{s}}}"
    },
    {
        "d": "www.alibaba.com",
        "b": "alibaba",
        "u": "http://www.alibaba.com/trade/search?SearchText={{{s}}}"
    },
    {
        "d": "www.alibris.com",
        "b": "alibris",
        "u": "http://www.alibris.com/booksearch?keyword={{{s}}}"
    },
    {
        "d": "www.aliexpress.com",
        "b": "aliexp",
        "u": "http://www.aliexpress.com/wholesale?SearchText={{{s}}}"
    },
    {
        "d": "www.aliexpress.com",
        "b": "aliexpress",
        "u": "http://www.aliexpress.com/wholesale?SearchText={{{s}}}"
    },
    {
        "d": "m.aliexpress.com",
        "b": "alim",
        "u": "https://m.aliexpress.com/search.htm?keywords={{{s}}}"
    },
    {
        "d": "aliseeks.com",
        "b": "aliseeks",
        "u": "http://aliseeks.com/search?SearchText={{{s}}}"
    },
    {
        "d": "www.alko.fi",
        "b": "alko",
        "u": "https://www.alko.fi/INTERSHOP/web/WFS/Alko-OnlineShop-Site/fi_FI/-/EUR/ViewParametricSearchBySearchIndex-SimpleGenericSearch?SearchTerm={{{s}}}"
    },
    {
        "d": "www.all.biz",
        "b": "allbiz",
        "u": "http://www.all.biz/search/goods/?q={{{s}}}"
    },
    {
        "d": "allegro.pl",
        "b": "allegro",
        "u": "https://allegro.pl/listing?string={{{s}}}"
    },
    {
        "d": "www.allelectronics.com",
        "b": "allelec",
        "u": "http://www.allelectronics.com/index.php?page=seek&id%5Bm%5D=pattern&id%5Bq%5D={{{s}}}"
    },
    {
        "d": "www.alliedelec.com",
        "b": "alliedelec",
        "u": "http://www.alliedelec.com/search/results.aspx?term={{{s}}}"
    },
    {
        "d": "www.allposters.com",
        "b": "allposters",
        "u": "http://www.allposters.com/gallery.asp?txtSearch={{{s}}}"
    },
    {
        "d": "www.almanac.com",
        "b": "almanac",
        "u": "http://www.almanac.com/store/product-search?keys={{{s}}}"
    },
    {
        "d": "www.almedina.net",
        "b": "almedina",
        "u": "https://www.almedina.net/search.php?query={{{s}}}"
    },
    {
        "d": "www.alnatura.de",
        "b": "alnaturade",
        "u": "http://www.alnatura.de/de-de/suche?q={{{s}}}"
    },
    {
        "d": "www.alo.bg",
        "b": "alobg",
        "u": "https://www.alo.bg/searchq/?q={{{s}}}"
    },
    {
        "d": "www.alternate.be",
        "b": "altbe",
        "u": "https://www.alternate.be/html/search.html?query={{{s}}}"
    },
    {
        "d": "www.alternate.de",
        "b": "alternate",
        "u": "http://www.alternate.de/html/search.html?searchCriteria={{{s}}}"
    },
    {
        "d": "www.alternate.nl",
        "b": "alternatenl",
        "u": "https://www.alternate.nl/html/search.html?query={{{s}}}"
    },
    {
        "d": "altex.ro",
        "b": "altex",
        "u": "https://altex.ro/cauta/?q={{{s}}}"
    },
    {
        "d": "www.alza.cz",
        "b": "alza",
        "u": "https://www.alza.cz/search.htm?exps={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "ama",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amalexa",
        "u": "https://www.amazon.com/s?k={{{s}}}&i=alexa-skills"
    },
    {
        "d": "www.amazon.com",
        "b": "am",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com.au",
        "b": "amau",
        "u": "https://www.amazon.com.au/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amazon",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com.au",
        "b": "amazonau",
        "u": "https://www.amazon.com.au/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.ca",
        "b": "amazonca",
        "u": "https://www.amazon.ca/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.cn",
        "b": "amazoncn",
        "u": "https://www.amazon.cn/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "amazon_de",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "amazonde",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.es",
        "b": "amazones",
        "u": "https://www.amazon.es/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.fr",
        "b": "amazonfr",
        "u": "https://www.amazon.fr/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.in",
        "b": "amazonin",
        "u": "https://www.amazon.in/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.in",
        "b": "amazon.in",
        "u": "http://www.amazon.in/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.it",
        "b": "amazon.it",
        "u": "https://www.amazon.it/s/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.it",
        "b": "amazonit",
        "u": "https://www.amazon.it/s/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.jp",
        "b": "amazonjp",
        "u": "https://www.amazon.co.jp/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amazonmp3",
        "u": "https://www.amazon.com/s?k={{{s}}}&i=digital-music"
    },
    {
        "d": "www.amazon.com.mx",
        "b": "amazonmx",
        "u": "https://www.amazon.com.mx/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.nl",
        "b": "amazonnl",
        "u": "https://www.amazon.nl/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amazonorders",
        "u": "https://www.amazon.com/gp/your-account/order-history/ref=oh_aui_search?opt=ab&search={{{s}}} "
    },
    {
        "d": "www.amazon.com.tr",
        "b": "amazontr",
        "u": "https://www.amazon.com.tr/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.uk",
        "b": "amazonuk",
        "u": "https://www.amazon.co.uk/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.ca",
        "b": "amca",
        "u": "https://www.amazon.ca/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.ca",
        "b": "am.ca",
        "u": "https://www.amazon.ca/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amcloud",
        "u": "https://www.amazon.com/clouddrive/#G=0&path={{{s}}}"
    },
    {
        "d": "www.amazon.cn",
        "b": "amcn",
        "u": "https://www.amazon.cn/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "amde",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.es",
        "b": "ames",
        "u": "https://www.amazon.es/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.fr",
        "b": "amfr",
        "u": "https://www.amazon.fr/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amglobal",
        "u": "https://www.amazon.com/s?k={{{s}}}&i=us-worldwide-shipping-aps"
    },
    {
        "d": "slist.amiami.com",
        "b": "amiami",
        "u": "http://slist.amiami.com/top/search/list?s_keywords={{{s}}}"
    },
    {
        "d": "www.amazon.in",
        "b": "amin",
        "u": "https://www.amazon.in/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.it",
        "b": "amit",
        "u": "https://www.amazon.it/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.jp",
        "b": "amjp",
        "u": "https://www.amazon.co.jp/s?k={{{s}}}"
    },
    {
        "d": "marketplace.atlassian.com",
        "b": "amkt",
        "u": "https://marketplace.atlassian.com/search?q={{{s}}}"
    },
    {
        "d": "www.ammodepottx.com",
        "b": "ammo",
        "u": "http://www.ammodepottx.com/#sthash.Bx8Cvh8l.dpbs={{{s}}}:"
    },
    {
        "d": "www.amazon.com",
        "b": "amp3",
        "u": "https://www.amazon.com/s?k={{{s}}}&i=digital-music"
    },
    {
        "d": "smile.amazon.com",
        "b": "ams",
        "u": "http://smile.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.co.uk",
        "b": "amsuk",
        "u": "https://smile.amazon.co.uk/s?field-keywords={{{s}}}"
    },
    {
        "d": "www.amazon.co.uk",
        "b": "amuk",
        "u": "https://www.amazon.co.uk/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.uk",
        "b": "amukmp3",
        "u": "https://www.amazon.co.uk/s?k={{{s}}}&i=digital-music"
    },
    {
        "d": "www.amazon.com",
        "b": "amus",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amvid",
        "u": "https://www.amazon.com/s/url=search-alias%3Dinstant-video&field-keywords={{{s}}}"
    },
    {
        "d": "www.amway.com",
        "b": "amway",
        "u": "https://www.amway.com/Shop/Search/SearchResults.aspx?searchkeyword={{{s}}}"
    },
    {
        "d": "www.amazon.com.mx",
        "b": "amx",
        "u": "https://www.amazon.com.mx/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amz",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "amzbks",
        "u": "https://www.amazon.com/s?k={{{s}}}&i=stripbooks"
    },
    {
        "d": "www.amazon.de",
        "b": "amznde",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.in",
        "b": "amznin",
        "u": "https://www.amazon.in/s?k={{{s}}}"
    },
    {
        "d": "www.abercrombie.com",
        "b": "anf",
        "u": "https://www.abercrombie.com/webapp/wcs/stores/servlet/Search?storeId=10051&catalogId=10901&langId=-1&departmentCategoryId=10000&search-field={{{s}}}"
    },
    {
        "d": "www.angelajey.com",
        "b": "angelajey",
        "u": "https://www.angelajey.com/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "katzothek.provital.com",
        "b": "anifit",
        "u": "https://katzothek.provital.com/content/partners/katzothek/futtershop/de/article_search?article_name={{{s}}}"
    },
    {
        "d": "primenow.amazon.com",
        "b": "aNOW",
        "u": "https://primenow.amazon.com/search?k={{{s}}} "
    },
    {
        "d": "www.amazon.com",
        "b": "ao",
        "u": "https://www.amazon.com/gp/your-account/order-history/ref=oh_aui_search?opt=ab&search={{{s}}}"
    },
    {
        "d": "www.apmex.com",
        "b": "apmex",
        "u": "http://www.apmex.com/search?q={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "app",
        "u": "https://www.amazon.com/s/search-alias%3Dpantry&field-keywords={{{s}}}"
    },
    {
        "d": "www.ah.nl",
        "b": "appie",
        "u": "https://www.ah.nl/zoeken?rq={{{s}}}"
    },
    {
        "d": "www.apple.com",
        "b": "apple",
        "u": "http://www.apple.com/search/?q={{{s}}}"
    },
    {
        "d": "itunes.apple.com",
        "b": "appstore",
        "u": "https://duckduckgo.com/search/?q=site%3Aitunes.apple.com%2Fus%2Fapp%2F+{{{s}}}"
    },
    {
        "d": "aprohirdetesingyen.hu",
        "b": "apro",
        "u": "https://aprohirdetesingyen.hu/osszes-hirdetes/kereses--{{{s}}}"
    },
    {
        "d": "www.aqasha.de",
        "b": "aqasha",
        "u": "https://www.aqasha.de/search/result?term={{{s}}}"
    },
    {
        "d": "veriforcetactical.com",
        "b": "ar-15",
        "u": "https://veriforcetactical.com/?s={{{s}}}"
    },
    {
        "d": "www.ardmoor.co.uk",
        "b": "ardmoor",
        "u": "https://www.ardmoor.co.uk/search/{{{s}}}"
    },
    {
        "d": "www.argos.co.uk",
        "b": "argos",
        "u": "http://www.argos.co.uk/search/{{{s}}}"
    },
    {
        "d": "www.argos.ie",
        "b": "argosie",
        "u": "http://www.argos.ie/webapp/wcs/stores/servlet/Search?storeId=10152&catalogId=14551&langId=111&searchTerms={{{s}}}"
    },
    {
        "d": "www.aria.co.uk",
        "b": "aria",
        "u": "http://www.aria.co.uk/Products?search={{{s}}}"
    },
    {
        "d": "www.armslist.com",
        "b": "armslist",
        "u": "https://www.armslist.com/classifieds/search?search={{{s}}}&location=usa&category=all&posttype=7&ships="
    },
    {
        "d": "www.arnoldbusck.dk",
        "b": "arnoldbusck",
        "u": "https://www.arnoldbusck.dk/soeg?s={{{s}}}&cid=alle"
    },
    {
        "d": "secure.arnzenarms.com",
        "b": "arnzenarms",
        "u": "https://secure.arnzenarms.com/catalog-search?fulltext={{{s}}}"
    },
    {
        "d": "www.arrow.com",
        "b": "arrow",
        "u": "https://www.arrow.com/en/products/search?q={{{s}}}"
    },
    {
        "d": "www.artdiscount.co.uk",
        "b": "artd",
        "u": "https://www.artdiscount.co.uk/catalogsearch/result/?cat=0&q={{{s}}} "
    },
    {
        "d": "www.artdiscount.co.uk",
        "b": "artdiscount",
        "u": "https://www.artdiscount.co.uk/catalogsearch/result/?cat=0&q={{{s}}}"
    },
    {
        "d": "www.artfire.com",
        "b": "artfire",
        "u": "http://www.artfire.com/browse/?term={{{s}}}"
    },
    {
        "d": "www.arukereso.hu",
        "b": "aru",
        "u": "https://www.arukereso.hu/CategorySearch.php?st={{{s}}}"
    },
    {
        "d": "www.arukereso.hu",
        "b": "arukereso",
        "u": "https://www.arukereso.hu/CategorySearch.php?st={{{s}}}"
    },
    {
        "d": "smile.amazon.com",
        "b": "as",
        "u": "http://smile.amazon.com/s?url=search-alias%3Daps&field-keywords={{{s}}}"
    },
    {
        "d": "www.asap-supplies.com",
        "b": "asapsupplies",
        "u": "https://www.asap-supplies.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.ascent.co.nz",
        "b": "ascent",
        "u": "https://www.ascent.co.nz/search.aspx?query={{{s}}}&sortBy=products"
    },
    {
        "d": "groceries.asda.com",
        "b": "asda",
        "u": "https://groceries.asda.com/asda-webstore/landing/home.shtml#/search/{{{s}}}"
    },
    {
        "d": "smile.amazon.de",
        "b": "asd",
        "u": "https://smile.amazon.de/s?url=search-alias%3Daps&field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.de",
        "b": "asde",
        "u": "https://smile.amazon.de/s/field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.de",
        "b": "asg",
        "u": "https://smile.amazon.de/s/?field-keywords={{{s}}}"
    },
    {
        "d": "asiavape.co",
        "b": "asiavape",
        "u": "https://asiavape.co/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.asics.com",
        "b": "asics",
        "u": "http://www.asics.com/us/en-us/search?text={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "asin",
        "u": "https://www.amazon.com/dp/{{{s}}}"
    },
    {
        "d": "smile.amazon.com",
        "b": "asm",
        "u": "http://smile.amazon.com/s/?field-keywords={{{s}}}"
    },
    {
        "d": "www.asthamobileshop.ml",
        "b": "asmmrg",
        "u": "https://www.asthamobileshop.ml/_/search?query={{{s}}}"
    },
    {
        "d": "smile.amazon.co.uk",
        "b": "asmuk",
        "u": "https://smile.amazon.co.uk/s?field-keywords={{{s}}}"
    },
    {
        "d": "www.asos.com",
        "b": "asos",
        "u": "http://www.asos.com/search/?q={{{s}}}"
    },
    {
        "d": "smile.amazon.com",
        "b": "ass",
        "u": "https://smile.amazon.com/s?url=srs%3D5856181011&field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.co.uk",
        "b": "asuk",
        "u": "https://smile.amazon.co.uk/s?field-keywords={{{s}}}"
    },
    {
        "d": "www.asus.com",
        "b": "asus",
        "u": "http://www.asus.com/us/Search/?SearchKey={{{s}}}"
    },
    {
        "d": "www.atcmarket.cz",
        "b": "atcomp",
        "u": "https://www.atcmarket.cz/zbozi?hledani=true&zb={{{s}}}"
    },
    {
        "d": "atlona.com",
        "b": "atlona",
        "u": "http://atlona.com/?s={{{s}}}"
    },
    {
        "d": "www.audible.com",
        "b": "audible",
        "u": "http://www.audible.com/search?advsearchKeywords={{{s}}}"
    },
    {
        "d": "www.audible.com",
        "b": "audible.com",
        "u": "http://www.audible.com/search?advsearchKeywords={{{s}}}"
    },
    {
        "d": "www.audible.de",
        "b": "audible.de",
        "u": "http://www.audible.de/search?advsearchKeywords={{{s}}}"
    },
    {
        "d": "www.audible.de",
        "b": "audiblede",
        "u": "http://www.audible.de/search?advsearchKeywords={{{s}}}"
    },
    {
        "d": "www.audible.co.uk",
        "b": "audibleuk",
        "u": "http://www.audible.co.uk/search/?advsearchKeywords={{{s}}}&filterby=field-keywords&x=0&y=0"
    },
    {
        "d": "audiobook.jp",
        "b": "audiobookjp",
        "u": "https://audiobook.jp/search?q={{{s}}}"
    },
    {
        "d": "app.audiogon.com",
        "b": "audiogon",
        "u": "https://app.audiogon.com/listings?&global_search_text={{{s}}}"
    },
    {
        "d": "audiojungle.net",
        "b": "audiojungle",
        "u": "http://audiojungle.net/search?utf8=%E2%9C%93&term={{{s}}}"
    },
    {
        "d": "www.amazon.co.uk",
        "b": "a.uk",
        "u": "https://www.amazon.co.uk/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.uk",
        "b": "auk",
        "u": "https://www.amazon.co.uk/s?k={{{s}}}"
    },
    {
        "d": "aukro.cz",
        "b": "aukro",
        "u": "http://aukro.cz/listing.php/search?string={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "aus",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.autoanything.com",
        "b": "autoanything",
        "u": "http://www.autoanything.com/shop/{{{s}}}"
    },
    {
        "d": "www.autoblip.com",
        "b": "autoblip",
        "u": "http://www.autoblip.com/used/{{{s}}} "
    },
    {
        "d": "www.autocar.co.uk",
        "b": "autocar",
        "u": "http://www.autocar.co.uk/SearchResults.aspx?q={{{s}}}"
    },
    {
        "d": "www.autozone.com",
        "b": "autozone",
        "u": "http://www.autozone.com/searchresult?searchText={{{s}}}"
    },
    {
        "d": "avechi.com",
        "b": "avechi",
        "u": "https://avechi.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.avito.ru",
        "b": "avito",
        "u": "https://www.avito.ru/rossiya?q={{{s}}}"
    },
    {
        "d": "www.getawaygear.com",
        "b": "away",
        "u": "https://www.getawaygear.com/index.php?page=search&sPattern={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "awd",
        "u": "https://www.amazon.com/s/url=search-alias%3Dwarehouse-deals&field-keywords={{{s}}}"
    },
    {
        "d": "www.ancientwisdom.biz",
        "b": "awisdom",
        "u": "https://www.ancientwisdom.biz/search.php?q={{{s}}}"
    },
    {
        "d": "www.levykauppax.fi",
        "b": "äx",
        "u": "https://www.levykauppax.fi/search/?q={{{s}}}"
    },
    {
        "d": "www.aboutyou.de",
        "b": "ay",
        "u": "https://www.aboutyou.de/suche?term={{{s}}}&search_source=ddgo"
    },
    {
        "d": "www.amazon.com",
        "b": "az",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "azd",
        "u": "https://www.amazon.de/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.es",
        "b": "aze",
        "u": "https://www.amazon.es/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.fr",
        "b": "azf",
        "u": "https://www.amazon.fr/s?k={{{s}}}"
    },
    {
        "d": "www.amazon.co.uk",
        "b": "azuk",
        "u": "https://www.amazon.co.uk/s?k={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "bambali",
        "u": "https://duckduckgo.com/?q=site%3Abambali.net+{{{s}}}"
    },
    {
        "d": "www.booksamillion.com",
        "b": "bam",
        "u": "http://www.booksamillion.com/search?query={{{s}}}"
    },
    {
        "d": "band-band.com",
        "b": "bandband",
        "u": "https://band-band.com/?s={{{s}}}"
    },
    {
        "d": "www.diy.com",
        "b": "bandq",
        "u": "https://www.diy.com/search?Ntt={{{s}}}"
    },
    {
        "d": "www.banggood.com",
        "b": "banggood",
        "u": "http://www.banggood.com/index.php?keywords={{{s}}}&cat_id=0&com=search"
    },
    {
        "d": "www.shopping-bargains.com",
        "b": "bargain",
        "u": "http://www.shopping-bargains.com/?s={{{s}}}"
    },
    {
        "d": "www.barnesandnoble.com",
        "b": "barnesandnoble",
        "u": "https://www.barnesandnoble.com/s/{{{s}}}"
    },
    {
        "d": "www.bartleby.com",
        "b": "bartlets",
        "u": "https://www.bartleby.com/search?q={{{s}}}"
    },
    {
        "d": "www.bax-shop.nl",
        "b": "bax",
        "u": "http://www.bax-shop.nl/assortiment?keyword={{{s}}}&avz=true"
    },
    {
        "d": "www.baygel.de",
        "b": "baygel",
        "u": "https://www.baygel.de/baygel.php?query={{{s}}} "
    },
    {
        "d": "bazar.bg",
        "b": "bazarbg",
        "u": "https://bazar.bg/obiavi?q={{{s}}}"
    },
    {
        "d": "cafebazaar.ir",
        "b": "bazar",
        "u": "http://cafebazaar.ir/search/?l=&q={{{s}}}"
    },
    {
        "d": "www.bazos.cz",
        "b": "bazos",
        "u": "http://www.bazos.cz/search.php?hledat={{{s}}}"
    },
    {
        "d": "search.bodybuilding.com",
        "b": "bbcom",
        "u": "https://search.bodybuilding.com/slp/full?context=all&query={{{s}}}"
    },
    {
        "d": "www.bestbuy.com.mx",
        "b": "bbmx",
        "u": "https://www.bestbuy.com.mx/c/buscar-best-buy/buscar?query={{{s}}}"
    },
    {
        "d": "www.bestbuy.com",
        "b": "bbuy",
        "u": "http://www.bestbuy.com/site/Brands/Apple/pcmcat128500050005.c?id=pcmcat128500050005&pageType=REDIRECT&issolr=1&searchterm={{{s}}}"
    },
    {
        "d": "www.bestbuy.com",
        "b": "bby",
        "u": "http://www.bestbuy.com/site/olspage.jsp?id=pcat17071&type=page&st={{{s}}}&sc=Global&cp=1&nrp=15&sp=&qp=&list=n&iht=y&usc=All+Categories&ks=960"
    },
    {
        "d": "m.bestbuy.ca",
        "b": "bbyc",
        "u": "https://m.bestbuy.ca/en-CA/search?search={{{s}}}"
    },
    {
        "d": "bandcamp.com",
        "b": "bcamp",
        "u": "https://bandcamp.com/search?q={{{s}}}"
    },
    {
        "d": "blockchain.info",
        "b": "bc",
        "u": "http://blockchain.info/search/{{{s}}} "
    },
    {
        "d": "www.bcbsla.com",
        "b": "bcbsla",
        "u": "https://www.bcbsla.com/search/Results.aspx?k={{{s}}}"
    },
    {
        "d": "www.bcc.nl",
        "b": "bcc",
        "u": "http://www.bcc.nl/search?fh_location=%2F%2Fcatalog01%2Fnl_NL%2Fchannel%3E%7Bm2ebcc2enl%7D&search={{{s}}}"
    },
    {
        "d": "boston.craigslist.org",
        "b": "bcl",
        "u": "https://boston.craigslist.org/search/sss?query={{{s}}}"
    },
    {
        "d": "www.bradsdeals.com",
        "b": "bdeals",
        "u": "http://www.bradsdeals.com/search?query={{{s}}}"
    },
    {
        "d": "www.boadica.com.br",
        "b": "bdica",
        "u": "https://www.boadica.com.br/busca-resultado?q={{{s}}}"
    },
    {
        "d": "beautymnl.com",
        "b": "beautymnl",
        "u": "https://beautymnl.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.beck-shop.de",
        "b": "beckshop",
        "u": "http://www.beck-shop.de/trefferliste.aspx?q={{{s}}}&action=search&page=0"
    },
    {
        "d": "www.bedbathandbeyond.com",
        "b": "bedbath",
        "u": "http://www.bedbathandbeyond.com/store/s/{{{s}}}"
    },
    {
        "d": "bedrockgranitecompany.com",
        "b": "bedrock",
        "u": "https://bedrockgranitecompany.com/?s={{{s}}}"
    },
    {
        "d": "beewigs.com",
        "b": "beewigs",
        "u": "https://beewigs.com/search?q={{{s}}}"
    },
    {
        "d": "www.beezer.com.au",
        "b": "beezer",
        "u": "http://www.beezer.com.au/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.belkin.com",
        "b": "belkin",
        "u": "http://www.belkin.com/us/search?text={{{s}}}"
    },
    {
        "d": "bellissimi.bg",
        "b": "bellissimi.bg",
        "u": "http://bellissimi.bg/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.belsimpel.nl",
        "b": "belsimpel",
        "u": "https://www.belsimpel.nl/zoeken?s={{{s}}}"
    },
    {
        "d": "bendixkingradios.com",
        "b": "bendixking",
        "u": "https://bendixkingradios.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.bergdorfgoodman.com",
        "b": "bergdorf",
        "u": "http://www.bergdorfgoodman.com/search.jsp?N=0&Ntt={{{s}}}"
    },
    {
        "d": "www.bergfreunde.de",
        "b": "bergfreunde",
        "u": "http://www.bergfreunde.de/s/*/?searchparam={{{s}}}"
    },
    {
        "d": "www.bertrand.pt",
        "b": "bertrand",
        "u": "https://www.bertrand.pt/pesquisa/{{{s}}}"
    },
    {
        "d": "www.beslist.nl",
        "b": "beslist",
        "u": "http://www.beslist.nl/products/r/{{{s}}}/"
    },
    {
        "d": "www.bestbuy.com",
        "b": "bestbuy",
        "u": "http://www.bestbuy.com/site/olspage.jsp?id=pcat17071&type=page&st={{{s}}}&sc=Global&cp=1&nrp=15&sp=&qp=&list=n&iht=y&usc=All+Categories&ks=960"
    },
    {
        "d": "www.bestbuy.ca",
        "b": "bestbuyca",
        "u": "https://www.bestbuy.ca/en-ca/search?search={{{s}}}"
    },
    {
        "d": "www.bestprice.gr",
        "b": "bestprice",
        "u": "http://www.bestprice.gr/search?q={{{s}}}"
    },
    {
        "d": "www.bestsellinglover.com",
        "b": "bestsellinglover",
        "u": "https://www.bestsellinglover.com/search-now?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search="
    },
    {
        "d": "betterworldbooks.com",
        "b": "betterworldbooks",
        "u": "https://betterworldbooks.com/?q={{{s}}}"
    },
    {
        "d": "www.bever.nl",
        "b": "bever",
        "u": "https://www.bever.nl/lister.html?q={{{s}}}"
    },
    {
        "d": "www.bevmo.com",
        "b": "bevmo",
        "u": "http://www.bevmo.com/Shop/ProductList.aspx/_/D-{{{s}}}/N-/Ntt-{{{s}}}?DNID=Home&Dx=mode%2Bmatchany&fromsearch=true&Ntk=All&Ntx=mode%2Bmatchany"
    },
    {
        "d": "boardgamegeek.com",
        "b": "bgggm",
        "u": "http://boardgamegeek.com/geekmarket/search?q={{{s}}}"
    },
    {
        "d": "www.babygearlab.com",
        "b": "bgl",
        "u": "https://www.babygearlab.com/search?ftr={{{s}}}"
    },
    {
        "d": "boardgameprices.co.uk",
        "b": "bgpuk",
        "u": "https://boardgameprices.co.uk/item/search?search={{{s}}}"
    },
    {
        "d": "www.boardgamesearch.com.au",
        "b": "bgs",
        "u": "http://www.boardgamesearch.com.au/#!/search/{{{s}}}"
    },
    {
        "d": "bgunikat.eu",
        "b": "bgunikat",
        "u": "https://bgunikat.eu/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.bhphotovideo.com",
        "b": "bh",
        "u": "http://www.bhphotovideo.com/c/search?Ntt={{{s}}}"
    },
    {
        "d": "www.bhphotovideo.com",
        "b": "bhphotovideo",
        "u": "https://www.bhphotovideo.com/c/search?Ntt={{{s}}}&N=0&InitialSearch=yes&sts=ma&typedValue=&Top+Nav-Search="
    },
    {
        "d": "biblio.com",
        "b": "biblio",
        "u": "http://biblio.com/search.php?keyisbn={{{s}}}"
    },
    {
        "d": "www.bidorbuy.co.za",
        "b": "bidorbuy",
        "u": "http://www.bidorbuy.co.za/search/{{{s}}} "
    },
    {
        "d": "bidvoy.net",
        "b": "bidvoy",
        "u": "http://bidvoy.net/%22{{{s}}} "
    },
    {
        "d": "bigbasket.com",
        "b": "bigbasket",
        "u": "http://bigbasket.com/ps/?q={{{s}}}"
    },
    {
        "d": "www.bigstockphoto.com",
        "b": "bigstock",
        "u": "http://www.bigstockphoto.com/search/{{{s}}}/"
    },
    {
        "d": "www.bigw.com.au",
        "b": "bigw",
        "u": "https://www.bigw.com.au/search/?text={{{s}}}&category="
    },
    {
        "d": "www5.bigwords.com",
        "b": "bigwords",
        "u": "http://www5.bigwords.com/search/easy-search/?producttype=all&searchtype=isbn&searchstring={{{s}}}&buySell="
    },
    {
        "d": "www.bike24.com",
        "b": "bike24",
        "u": "https://www.bike24.com/1.php?content=13&search={{{s}}}"
    },
    {
        "d": "www.bike-discount.de",
        "b": "bikedsct",
        "u": "https://www.bike-discount.de/de/suche?q={{{s}}}"
    },
    {
        "d": "bikenet.nl",
        "b": "bikenet",
        "u": "https://bikenet.nl/occasions/?zoeken={{{s}}}"
    },
    {
        "d": "www.billiger.de",
        "b": "bil",
        "u": "https://www.billiger.de/search?searchstring={{{s}}}"
    },
    {
        "d": "www.bilka.dk",
        "b": "bilka",
        "u": "https://www.bilka.dk/s%C3%B8g?tekst={{{s}}}"
    },
    {
        "d": "www.billiger.de",
        "b": "billiger",
        "u": "https://www.billiger.de/search?searchstring={{{s}}}"
    },
    {
        "d": "www.bilpriser.se",
        "b": "bilpriser",
        "u": "http://www.bilpriser.se/bilvardering?regnr={{{s}}}"
    },
    {
        "d": "www.biltema.se",
        "b": "biltema",
        "u": "http://www.biltema.se/sv/Sok/?query={{{s}}}"
    },
    {
        "d": "www.binnys.com",
        "b": "binnys",
        "u": "http://www.binnys.com/all/{{{s}}}"
    },
    {
        "d": "www.biohelp-profi.at",
        "b": "biobelp",
        "u": "https://www.biohelp-profi.at/store-search-result.php?keywords={{{s}}}"
    },
    {
        "d": "bookprice.co",
        "b": "bisbn",
        "u": "http://bookprice.co/isbn/{{{s}}}"
    },
    {
        "d": "bitaps.com",
        "b": "bitaps",
        "u": "https://bitaps.com/{{{s}}}"
    },
    {
        "d": "bizgift.vn",
        "b": "bizgift",
        "u": "https://bizgift.vn/?s={{{s}}}"
    },
    {
        "d": "www.bizrate.com",
        "b": "bizrate",
        "u": "http://www.bizrate.com/classify?search_box=1&keyword={{{s}}}&originalKeyword=&SEARCH_GO="
    },
    {
        "d": "www.bookadda.com",
        "b": "bkadda",
        "u": "http://www.bookadda.com/general-search?searchkey={{{s}}}"
    },
    {
        "d": "www.bluekangaroo.com",
        "b": "bk",
        "u": "https://www.bluekangaroo.com/products?term={{{s}}}"
    },
    {
        "d": "search.books.com.tw",
        "b": "bkl",
        "u": "http://search.books.com.tw/search/query/key/{{{s}}}/cat/all"
    },
    {
        "d": "bendixkingradios.com",
        "b": "bkradio",
        "u": "https://bendixkingradios.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.blablacar.fr",
        "b": "blablacar",
        "u": "https://www.blablacar.fr/trajets/vers-{{{s}}}"
    },
    {
        "d": "blackwells.co.uk",
        "b": "blackwells",
        "u": "https://blackwells.co.uk/bookshop/search/?keyword={{{s}}}"
    },
    {
        "d": "www.bladehq.com",
        "b": "bladehq",
        "u": "https://www.bladehq.com/?search={{{s}}}"
    },
    {
        "d": "bland.is",
        "b": "bland",
        "u": "https://bland.is/classified/default.aspx?q={{{s}}}"
    },
    {
        "d": "www.booklooker.de",
        "b": "blk",
        "u": "https://www.booklooker.de/Bücher/Angebote/infotext={{{s}}}"
    },
    {
        "d": "blueapron.com",
        "b": "blueapron",
        "u": "http://blueapron.com/?q={{{s}}}"
    },
    {
        "d": "www.brickmerge.de",
        "b": "bmde",
        "u": "https://www.brickmerge.de/?find={{{s}}}"
    },
    {
        "d": "bookmyparts.com",
        "b": "bmp",
        "u": "https://bookmyparts.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.barnesandnoble.com",
        "b": "b&n",
        "u": "http://www.barnesandnoble.com/s/{{{s}}}"
    },
    {
        "d": "www.barnesandnoble.com",
        "b": "bn",
        "u": "http://www.barnesandnoble.com/s/{{{s}}}"
    },
    {
        "d": "www.bodycarereviews.com",
        "b": "bodycare",
        "u": "https://www.bodycarereviews.com/?s={{{s}}}"
    },
    {
        "d": "www.bodyenfitshop.nl",
        "b": "bodyfit",
        "u": "http://www.bodyenfitshop.nl/#twn|?tn_q={{{s}}}"
    },
    {
        "d": "www.bokus.com",
        "b": "bokus",
        "u": "http://www.bokus.com/cgi-bin/product_search.cgi?ac_used=no&search_word={{{s}}}"
    },
    {
        "d": "www.bol.com",
        "b": "bol",
        "u": "https://www.bol.com/nl/s/?searchtext={{{s}}}"
    },
    {
        "d": "www.bolha.com",
        "b": "bolha",
        "u": "http://www.bolha.com/iskanje?q={{{s}}}"
    },
    {
        "d": "www.bomnegocio.com",
        "b": "bomnegocio",
        "u": "http://www.bomnegocio.com/brasil?q={{{s}}}"
    },
    {
        "d": "www.bondfaro.com.br",
        "b": "bondfaro",
        "u": "http://www.bondfaro.com.br/cprocura?produto={{{s}}}"
    },
    {
        "d": "www.bonfire.com",
        "b": "bonfire",
        "u": "https://www.bonfire.com/results/{{{s}}}"
    },
    {
        "d": "bookbaz.ir",
        "b": "bookbaz",
        "u": "http://bookbaz.ir/?s={{{s}}} "
    },
    {
        "d": "www.booking.com",
        "b": "book",
        "u": "http://www.booking.com/searchresults.html?ss={{{s}}}&si=ai"
    },
    {
        "d": "bookdepository.com",
        "b": "bookdep",
        "u": "http://bookdepository.com/search?searchTerm={{{s}}}&search=Find+book"
    },
    {
        "d": "www.bookdepository.com",
        "b": "bookdepository",
        "u": "https://www.bookdepository.com/search?searchTerm={{{s}}}&search=Find+book"
    },
    {
        "d": "www.booking.com",
        "b": "booking",
        "u": "http://www.booking.com/searchresults.html?ss={{{s}}}&si=ai"
    },
    {
        "d": "booklive.jp",
        "b": "booklive",
        "u": "http://booklive.jp/search/keyword?keyword={{{s}}}"
    },
    {
        "d": "www.booklooker.de",
        "b": "booklooker",
        "u": "http://www.booklooker.de/B%C3%BCcher/Angebote/infotext={{{s}}}?lid=1"
    },
    {
        "d": "www.booknet.co.il",
        "b": "booknet",
        "u": "http://www.booknet.co.il/subc.asp?serin=3&c=3947&ser={{{s}}}"
    },
    {
        "d": "www.booksetc.co.uk",
        "b": "booksetc",
        "u": "http://www.booksetc.co.uk/books/search?q={{{s}}}"
    },
    {
        "d": "www.boulanger.com",
        "b": "boulanger",
        "u": "http://www.boulanger.com/resultats?tr={{{s}}}"
    },
    {
        "d": "www.brownpapertickets.com",
        "b": "bpt",
        "u": "https://www.brownpapertickets.com/browse.html?keywords={{{s}}}"
    },
    {
        "d": "www.brack.ch",
        "b": "brack",
        "u": "https://www.brack.ch/search?query={{{s}}}"
    },
    {
        "d": "www.brettspiel-angebote.de",
        "b": "brettspiele",
        "u": "http://www.brettspiel-angebote.de/spiele/?s={{{s}}}&t="
    },
    {
        "d": "www.bricklink.com",
        "b": "bricklink",
        "u": "http://www.bricklink.com/search.asp?q={{{s}}}"
    },
    {
        "d": "www.bricoman.it",
        "b": "bricoman",
        "u": "https://www.bricoman.it/search/?q={{{s}}}"
    },
    {
        "d": "www.bruun-rasmussen.dk",
        "b": "brk",
        "u": "http://www.bruun-rasmussen.dk/search.do?q={{{s}}}"
    },
    {
        "d": "broncowine.com",
        "b": "bronco",
        "u": "http://broncowine.com/woocommerce-search/?cat_in=&rs={{{s}}}&search_in=product&search_other=product"
    },
    {
        "d": "www.brownells.com",
        "b": "brownells",
        "u": "https://www.brownells.com/search/index.htm?k={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bs",
        "u": "https://www.bing.com/shop?q={{{s}}}"
    },
    {
        "d": "www.bundlestars.com",
        "b": "bstars",
        "u": "https://www.bundlestars.com/en/games?search={{{s}}}"
    },
    {
        "d": "www.buch7.de",
        "b": "buch7",
        "u": "https://www.buch7.de/store/simple_search_results?utf8=%E2%9C%93&navkat=&search={{{s}}}&commit.x=0&commit.y=0"
    },
    {
        "d": "www.buchpreis24.de",
        "b": "buchpreis24",
        "u": "https://www.buchpreis24.de/stichwort/{{{s}}}"
    },
    {
        "d": "www.build.com",
        "b": "build",
        "u": "http://www.build.com/index.cfm?page=search:browse&term={{{s}}}"
    },
    {
        "d": "www.bukalapak.com",
        "b": "bukalapak",
        "u": "https://www.bukalapak.com/products?utf8=%E2%9C%93&search%5Bkeywords%5D={{{s}}}"
    },
    {
        "d": "www.bundlestars.com",
        "b": "bundles",
        "u": "https://www.bundlestars.com/en/games?search={{{s}}}"
    },
    {
        "d": "www.bunnings.com.au",
        "b": "bunnings",
        "u": "https://www.bunnings.com.au/search/products?q={{{s}}}&redirectFrom=Any"
    },
    {
        "d": "www.bunnings.com.au",
        "b": "bunware",
        "u": "http://www.bunnings.com.au/search/products?q={{{s}}} &redirectFrom=Any"
    },
    {
        "d": "www.buscape.com.br",
        "b": "buscape",
        "u": "http://www.buscape.com.br/cprocura?produto={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "buy",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "buyee.jp",
        "b": "buyee",
        "u": "http://buyee.jp/item/search?query={{{s}}} "
    },
    {
        "d": "www.buytruckwheels.com",
        "b": "buytruckwheels",
        "u": "http://www.buytruckwheels.com/index.php?route=product/search&filter_name={{{s}}} "
    },
    {
        "d": "www.betterworldbooks.com",
        "b": "bwbooks",
        "u": "http://www.betterworldbooks.com/{{{s}}}-H0.aspx?SearchTerm={{{s}}} "
    },
    {
        "d": "bws.com.au",
        "b": "bws",
        "u": "https://bws.com.au/search?searchTerm={{{s}}}"
    },
    {
        "d": "www.channel21.de",
        "b": "c21",
        "u": "https://www.channel21.de/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.chrono24.com",
        "b": "c24",
        "u": "https://www.chrono24.com/search/index.htm?watchTypes=&query={{{s}}}&dosearch=true&searchexplain=1&accessoryTypes="
    },
    {
        "d": "www.amazon.ca",
        "b": "ca",
        "u": "https://www.amazon.ca/s?k={{{s}}}"
    },
    {
        "d": "shop.cactusmart.com",
        "b": "cactus",
        "u": "https://shop.cactusmart.com/search?q={{{s}}}"
    },
    {
        "d": "shop.cactusmart.com",
        "b": "cactusmart",
        "u": "https://shop.cactusmart.com/search?q={{{s}}}"
    },
    {
        "d": "www.cafepress.com",
        "b": "cafepress",
        "u": "https://www.cafepress.com/+{{{s}}}"
    },
    {
        "d": "www.carrefour.fr",
        "b": "cafr",
        "u": "http://www.carrefour.fr/?q={{{s}}}"
    },
    {
        "d": "www.cardhoarder.com",
        "b": "caho",
        "u": "https://www.cardhoarder.com/cards?data[search]={{{s}}}"
    },
    {
        "d": "camelcamelcamel.com",
        "b": "camel",
        "u": "http://camelcamelcamel.com/products?sq={{{s}}} "
    },
    {
        "d": "de.camelcamelcamel.com",
        "b": "camelde",
        "u": "https://de.camelcamelcamel.com/products?sq={{{s}}}"
    },
    {
        "d": "fr.camelcamelcamel.com",
        "b": "camelfr",
        "u": "https://fr.camelcamelcamel.com/search?sq={{{s}}}"
    },
    {
        "d": "www.camerapricebuster.co.uk",
        "b": "camerapb",
        "u": "https://www.camerapricebuster.co.uk/Search?q={{{s}}}"
    },
    {
        "d": "www.canadacomputers.com",
        "b": "canadacomputers",
        "u": "http://www.canadacomputers.com/advanced_search_result.php?keywords={{{s}}} "
    },
    {
        "d": "www.canadiantire.ca",
        "b": "canadiantire",
        "u": "http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q={{{s}}}"
    },
    {
        "d": "www.c-and-a.com",
        "b": "candade",
        "u": "https://www.c-and-a.com/webapp/wcs/stores/servlet/SearchDisplay?catalogId=10001&storeId=10153&langId=-3&articleSearch=false&searchTerm={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.usa.canon.com",
        "b": "canon",
        "u": "https://www.usa.canon.com/internet/portal/us/home/searchresults?query={{{s}}}&searchTab=products"
    },
    {
        "d": "www.canadapost.ca",
        "b": "capost",
        "u": "http://www.canadapost.ca//cpotools/apps/track/personal/findByTrackNumber?trackingNumber={{{s}}}"
    },
    {
        "d": "www.cappusa.com",
        "b": "capp",
        "u": "http://www.cappusa.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.cardkingdom.com",
        "b": "cardkingdom",
        "u": "https://www.cardkingdom.com/catalog/search?search=header&filter%5Bname%5D={{{s}}}"
    },
    {
        "d": "www.carmax.com",
        "b": "carmax",
        "u": "https://www.carmax.com/search#FreeText={{{s}}}"
    },
    {
        "d": "carousell.com",
        "b": "carousell",
        "u": "https://carousell.com/search/products/?query={{{s}}} "
    },
    {
        "d": "www.carsales.com.au",
        "b": "carsales",
        "u": "https://www.carsales.com.au/cars/results/?q=CarAll.keyword({{{s}}}).&area=Stock&vertical=car&WT.z_srchsrcx=makemodel"
    },
    {
        "d": "www.catawiki.be",
        "b": "catawikibe",
        "u": "https://www.catawiki.be/search?q={{{s}}}"
    },
    {
        "d": "www.zieglers.com",
        "b": "catholicstore",
        "u": "https://www.zieglers.com/search.php?search_query={{{s}}}"
    },
    {
        "d": "www.christianbook.com",
        "b": "cbd",
        "u": "http://www.christianbook.com/Christian/Books/easy_find?Ntt={{{s}}}&N=0&Ntk=keywords&action=Search&Ne=0"
    },
    {
        "d": "cbd-oil-canada.ca",
        "b": "cbdoil",
        "u": "https://cbd-oil-canada.ca/?s=/{{{s}}}"
    },
    {
        "d": "www.coolblue.nl",
        "b": "cblue",
        "u": "https://www.coolblue.nl/zoeken?query={{{s}}}"
    },
    {
        "d": "www.cbservicedetersivi.it",
        "b": "cbservice",
        "u": "http://www.cbservicedetersivi.it/?s={{{s}}}"
    },
    {
        "d": "ca.camelcamelcamel.com",
        "b": "cccca",
        "u": "https://ca.camelcamelcamel.com/search?sq={{{s}}}"
    },
    {
        "d": "camelcamelcamel.com",
        "b": "ccc",
        "u": "http://camelcamelcamel.com/search?sq={{{s}}}"
    },
    {
        "d": "de.camelcamelcamel.com",
        "b": "cccde",
        "u": "https://de.camelcamelcamel.com/search?sq={{{s}}}"
    },
    {
        "d": "uk.camelcamelcamel.com",
        "b": "cccuk",
        "u": "http://uk.camelcamelcamel.com/search?sq={{{s}}}"
    },
    {
        "d": "www.cclonline.com",
        "b": "ccl",
        "u": "http://www.cclonline.com/search/?q={{{s}}}"
    },
    {
        "d": "www.cheapies.nz",
        "b": "ccnz",
        "u": "https://www.cheapies.nz/search/node/{{{s}}}"
    },
    {
        "d": "cda.chronomania.net",
        "b": "cda",
        "u": "http://cda.chronomania.net/search.php?search={{{s}}}"
    },
    {
        "d": "www.cdandlp.com",
        "b": "cdandlp",
        "u": "http://www.cdandlp.com/en/search/?q={{{s}}}"
    },
    {
        "d": "cheapdigitaldownload.com",
        "b": "cdd",
        "u": "https://cheapdigitaldownload.com/catalog/search-{{{s}}}"
    },
    {
        "d": "www.cdiscount.com",
        "b": "cdiscount",
        "u": "http://www.cdiscount.com/search/10/{{{s}}}.html"
    },
    {
        "d": "chronodivers.com",
        "b": "cdiver",
        "u": "https://chronodivers.com/?s={{{s}}}"
    },
    {
        "d": "www.cdjapan.co.jp",
        "b": "cdj",
        "u": "http://www.cdjapan.co.jp/products?q={{{s}}}"
    },
    {
        "d": "www.cdkeys.com",
        "b": "cdkeys",
        "u": "https://www.cdkeys.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "cdon.se",
        "b": "cdon",
        "u": "http://cdon.se/search?q={{{s}}}"
    },
    {
        "d": "cdon.dk",
        "b": "cdondk",
        "u": "http://cdon.dk/search?q={{{s}}}"
    },
    {
        "d": "cdon.eu",
        "b": "cdoneu",
        "u": "http://cdon.eu/search?q={{{s}}}"
    },
    {
        "d": "cdon.fi",
        "b": "cdonfi",
        "u": "http://cdon.fi/search?q={{{s}}}"
    },
    {
        "d": "cdon.no",
        "b": "cdonno",
        "u": "http://cdon.no/search?q={{{s}}}"
    },
    {
        "d": "cdon.se",
        "b": "cdonse",
        "u": "http://cdon.se/search?q={{{s}}}"
    },
    {
        "d": "www.cduniverse.com",
        "b": "cdu",
        "u": "http://www.cduniverse.com/sresult.asp?HT_Search_Info={{{s}}}"
    },
    {
        "d": "www.cdw.ca",
        "b": "cdwca",
        "u": "https://www.cdw.ca/shop/search/result.aspx?key={{{s}}}}&wclsscat=&b=&p=&ctlgfilter=&searchscope=all&sr=1"
    },
    {
        "d": "www.cdw.com",
        "b": "cdw",
        "u": "http://www.cdw.com/shop/search/result.aspx?key={{{s}}}"
    },
    {
        "d": "www.ebay.com",
        "b": "ceb",
        "u": "https://www.ebay.com/csc/items/?_nkw={{{s}}}+&LH_Complete=1"
    },
    {
        "d": "www.ceneje.si",
        "b": "ceneje",
        "u": "https://www.ceneje.si/Iskanje/Izdelki?q={{{s}}}"
    },
    {
        "d": "www.ceneo.pl",
        "b": "ceneo",
        "u": "http://www.ceneo.pl/;szukaj-{{{s}}}"
    },
    {
        "d": "cercavino.com",
        "b": "cercavino",
        "u": "http://cercavino.com/cerca?vino={{{s}}}"
    },
    {
        "d": "uk.webuy.com",
        "b": "cex",
        "u": "https://uk.webuy.com/search/index.php?stext={{{s}}}"
    },
    {
        "d": "store.channelfireball.com",
        "b": "cfb",
        "u": "http://store.channelfireball.com/products/search?query={{{s}}}"
    },
    {
        "d": "pittsburgh.craigslist.org",
        "b": "cgl",
        "u": "https://pittsburgh.craigslist.org/search/sss?query={{{s}}}"
    },
    {
        "d": "www.chairish.com",
        "b": "chairish",
        "u": "https://www.chairish.com/search?q={{{s}}} "
    },
    {
        "d": "www.champssports.com",
        "b": "champssports",
        "u": "http://www.champssports.com/_-_/keyword-{{{s}}}"
    },
    {
        "d": "chatters.ca",
        "b": "chatters",
        "u": "https://chatters.ca/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "preisvergleich.check24.de",
        "b": "check24",
        "u": "https://preisvergleich.check24.de/suche.html?query={{{s}}}"
    },
    {
        "d": "www.chegg.com",
        "b": "chegg",
        "u": "http://www.chegg.com/search/{{{s}}}"
    },
    {
        "d": "www.chewy.com",
        "b": "chewy",
        "u": "http://www.chewy.com/s?dept=all&query={{{s}}}"
    },
    {
        "d": "www.chipoteka.hr",
        "b": "chipoteka",
        "u": "https://www.chipoteka.hr/search?q={{{s}}}"
    },
    {
        "d": "www.chollometro.com",
        "b": "chollo",
        "u": "https://www.chollometro.com/search?q={{{s}}}"
    },
    {
        "d": "www.ciao.de",
        "b": "ciao",
        "u": "http://www.ciao.de/sr/q-{{{s}}}"
    },
    {
        "d": "www.circuit-help.com.ph",
        "b": "circuit-help-ph",
        "u": "https://www.circuit-help.com.ph/?s={{{s}}}"
    },
    {
        "d": "www.citizen.es",
        "b": "citizenes",
        "u": "http://www.citizen.es/search?s={{{s}}}"
    },
    {
        "d": "www.encole.com",
        "b": "clamps",
        "u": "https://www.encole.com/search/{{{s}}}"
    },
    {
        "d": "www.clarks.co.uk",
        "b": "clarks",
        "u": "https://www.clarks.co.uk/search/?text={{{s}}}"
    },
    {
        "d": "www.clasohlson.com",
        "b": "clas",
        "u": "https://www.clasohlson.com/se/view/content/search?searchKey=All&search_prefix={{{s}}}"
    },
    {
        "d": "www.clasohlson.com",
        "b": "clasfi",
        "u": "https://www.clasohlson.com/fi/view/content/search?N=0&Ntk=All&Ntt={{{s}}}&Nty=1&D={{{s}}}&Ntx=mode+matchpartial&Dx=mode+matchpartial&showTabs=true"
    },
    {
        "d": "www.clasohlson.com",
        "b": "clasno",
        "u": "https://www.clasohlson.com/no/view/content/search?searchKey=All&search_prefix={{{s}}}"
    },
    {
        "d": "www.classrr.com",
        "b": "classrr",
        "u": "https://www.classrr.com/classroom/list?q={{{s}}}"
    },
    {
        "d": "clcnederland.com",
        "b": "clc",
        "u": "https://clcnederland.com/producten/zoeken?sq={{{s}}}"
    },
    {
        "d": "www.craigslist.org",
        "b": "cl",
        "u": "https://www.craigslist.org/search/sss?query={{{s}}}"
    },
    {
        "d": "www.cleanfreak.com",
        "b": "cleanfreak",
        "u": "https://www.cleanfreak.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.clearly.ca",
        "b": "clearly",
        "u": "https://www.clearly.ca/eyewear/search?query={{{s}}}"
    },
    {
        "d": "www.clockworksynergy.com",
        "b": "clockworksynergy",
        "u": "http://www.clockworksynergy.com/?s={{{s}}} &post_type=product"
    },
    {
        "d": "nightwear.clovia.com",
        "b": "clovia.app",
        "u": "https://nightwear.clovia.com/search/?q={{{s}}}"
    },
    {
        "d": "cm.center",
        "b": "cm",
        "u": "https://cm.center/catalog/?q={{{s}}}"
    },
    {
        "d": "www.chicagomusicexchange.com",
        "b": "cme",
        "u": "https://www.chicagomusicexchange.com/search?query={{{s}}}"
    },
    {
        "d": "compare.eu",
        "b": "cmpeu",
        "u": "http://compare.eu/?fs={{{s}}}"
    },
    {
        "d": "www.cheapies.nz",
        "b": "cnz",
        "u": "https://www.cheapies.nz/search/node/{{{s}}}"
    },
    {
        "d": "www.cocklestorm.com",
        "b": "cocklestorm",
        "u": "http://www.cocklestorm.com/catalogsearch/result/?q={{{s}}} "
    },
    {
        "d": "codecanyon.net",
        "b": "codecanyon",
        "u": "http://codecanyon.net/search?utf8=%E2%9C%93&term={{{s}}}"
    },
    {
        "d": "www.cloudofgoods.com",
        "b": "cog",
        "u": "https://www.cloudofgoods.com/s/products?query={{{s}}}"
    },
    {
        "d": "bookmanager.com",
        "b": "coho",
        "u": "http://bookmanager.com/760081x/index.php?q=h.tviewer&using_sb=status&qsb=keyword&so=oh&searchtype=keyword&qs={{{s}}}&x=0&y=0&qs_file="
    },
    {
        "d": "shop.coles.com.au",
        "b": "coles",
        "u": "https://shop.coles.com.au/a/a-national/everything/search/{{{s}}}?pageNumber=1"
    },
    {
        "d": "www.colormango.com",
        "b": "colormango",
        "u": "http://www.colormango.com/search/index.asp?keyword={{{s}}}"
    },
    {
        "d": "www.comc.com",
        "b": "comc",
        "u": "https://www.comc.com/Cards,={{{s}}}"
    },
    {
        "d": "comfy.ua",
        "b": "comfy",
        "u": "https://comfy.ua/catalogsearch/result?q={{{s}}}"
    },
    {
        "d": "www.comixology.com",
        "b": "comix",
        "u": "https://www.comixology.com/search?search={{{s}}}"
    },
    {
        "d": "www.comixology.eu",
        "b": "comixeu",
        "u": "https://www.comixology.eu/search?search={{{s}}} "
    },
    {
        "d": "www.comixology.co.uk",
        "b": "comixuk",
        "u": "https://www.comixology.co.uk/search?search={{{s}}}&submit=Submit"
    },
    {
        "d": "www.comparegames.com.br",
        "b": "comparegames",
        "u": "http://www.comparegames.com.br/comprar/{{{s}}} "
    },
    {
        "d": "www.compumundo.com.ar",
        "b": "compumundo",
        "u": "https://www.compumundo.com.ar/q/{{{s}}}/srch?q={{{s}}}"
    },
    {
        "d": "www.consumeraffairs.com",
        "b": "conaff",
        "u": "https://www.consumeraffairs.com/search.html?q={{{s}}}&cat=homepage"
    },
    {
        "d": "www.conrad.at",
        "b": "conradat",
        "u": "https://www.conrad.at/de/Search.html?searchType=REGULAR&search={{{s}}}"
    },
    {
        "d": "www.conrad.de",
        "b": "conrad",
        "u": "http://www.conrad.de/ce/de/Search.html?search={{{s}}}"
    },
    {
        "d": "www.consumerreports.org",
        "b": "consumer",
        "u": "https://www.consumerreports.org/search/?query={{{s}}}"
    },
    {
        "d": "www.continente.pt",
        "b": "continente",
        "u": "http://www.continente.pt/stores/continente/pt-pt/public/Pages/searchResults.aspx?k={{{s}}}"
    },
    {
        "d": "www.coolblue.be",
        "b": "coolbluebe",
        "u": "https://www.coolblue.be/zoeken?query={{{s}}}"
    },
    {
        "d": "www.coolblue.nl",
        "b": "coolblue",
        "u": "https://www.coolblue.nl/zoeken?query={{{s}}}"
    },
    {
        "d": "www.coolblue.nl",
        "b": "coolbluenl",
        "u": "https://www.coolblue.nl/zoeken?query={{{s}}}"
    },
    {
        "d": "www.coolshop.dk",
        "b": "coolshop",
        "u": "https://www.coolshop.dk/s/?q={{{s}}}"
    },
    {
        "d": "www.coolstuffinc.com",
        "b": "coolstuffinc",
        "u": "http://www.coolstuffinc.com/main_search.php?pa=searchOnName&page=1&resultsPerPage=25&q={{{s}}}"
    },
    {
        "d": "www.coopathome.ch",
        "b": "coopathome",
        "u": "https://www.coopathome.ch/search/?text={{{s}}}"
    },
    {
        "d": "www.coop.se",
        "b": "coop",
        "u": "https://www.coop.se/handla-online/sok/?q={{{s}}}"
    },
    {
        "d": "www.coop.ch",
        "b": "coop_de",
        "u": "http://www.coop.ch/pb/site/search/search/2057/Lde/index.html?qs={{{s}}}&fr=coop2012&SuchButton.x=0&SuchButton.y=0&search=search&backend=backend_coop2012&la=de&_sid=4aea1684-910e-4741-9099-86fff3d8a570"
    },
    {
        "d": "www.coop.ch",
        "b": "coop_fr",
        "u": "http://www.coop.ch/pb/site/search/search/2057/Lfr/index.html?qs={{{s}}}&fr=coop2012&SuchButton.x=0&SuchButton.y=0&search=search&backend=backend_coop2012&la=fr&_sid=2fae98df-7f08-49a8-86b5-38148b71ebdb"
    },
    {
        "d": "www.coop.ch",
        "b": "coop_it",
        "u": "http://www.coop.ch/pb/site/search/search/2057/Lit/index.html?qs={{{s}}}&fr=coop2012&SuchButton.x=0&SuchButton.y=0&search=search&backend=backend_coop2012&la=it&_sid=537d493c-9c35-41dc-8881-d878b57e702f"
    },
    {
        "d": "www.costco.ca",
        "b": "costcoca",
        "u": "https://www.costco.ca/CatalogSearch?dept=All&keyword={{{s}}}"
    },
    {
        "d": "www.costco.com",
        "b": "costco",
        "u": "http://www.costco.com/CatalogSearch?storeId=10301&catalogId=10701&langId=-1&keyword={{{s}}}"
    },
    {
        "d": "www.coupang.com",
        "b": "coupang",
        "u": "https://www.coupang.com/np/search?component=&q={{{s}}}"
    },
    {
        "d": "www.couponcabin.com",
        "b": "couponcabin",
        "u": "http://www.couponcabin.com/ps/{{{s}}}/1/"
    },
    {
        "d": "www.couponmeup.com",
        "b": "couponmeup",
        "u": "http://www.couponmeup.com/cgi-bin/display.pl?search=1&q={{{s}}} "
    },
    {
        "d": "www.dealtaker.com",
        "b": "coupons",
        "u": "http://www.dealtaker.com/site/search?q={{{s}}}"
    },
    {
        "d": "www.couponsurfer.com",
        "b": "couponsurfer",
        "u": "http://www.couponsurfer.com/coupon_search.cfm?q={{{s}}}"
    },
    {
        "d": "www.cozydays.com",
        "b": "cozydays",
        "u": "https://www.cozydays.com/search.aspx?q={{{s}}}"
    },
    {
        "d": "www.cpap.com",
        "b": "cpap",
        "u": "http://www.cpap.com/productSearch.php?q=1&query={{{s}}}"
    },
    {
        "d": "www.passmark.com",
        "b": "cpb",
        "u": "https://www.passmark.com/search/zoomsearch.php?zoom_query={{{s}}}"
    },
    {
        "d": "cpc.farnell.com",
        "b": "cpc",
        "u": "http://cpc.farnell.com/search?st={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "craigslist",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Acraigslist.org"
    },
    {
        "d": "www.chainreactioncycles.com",
        "b": "crc",
        "u": "http://www.chainreactioncycles.com/s?q={{{s}}}&sort=pricelow"
    },
    {
        "d": "www.cloudretails.com",
        "b": "crcom",
        "u": "https://www.cloudretails.com/search?q={{{s}}}"
    },
    {
        "d": "www.creative-cables.nl",
        "b": "creacables",
        "u": "https://www.creative-cables.nl/zoeken?controller=search&orderby=position&orderway=desc&search_query={{{s}}}"
    },
    {
        "d": "www.crowdsupply.com",
        "b": "crowdsupply",
        "u": "https://www.crowdsupply.com/search?q={{{s}}}"
    },
    {
        "d": "www.crushwineco.com",
        "b": "crush",
        "u": "https://www.crushwineco.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.cheapshark.com",
        "b": "cs",
        "u": "http://www.cheapshark.com/search?q={{{s}}}"
    },
    {
        "d": "www.coolstuffinc.com",
        "b": "csi",
        "u": "http://www.coolstuffinc.com/main_search.php?pa=searchOnName&page=1&resultsPerPage=25&q={{{s}}}"
    },
    {
        "d": "www.csv.de",
        "b": "csv",
        "u": "https://www.csv.de/artsearchresult.php?STICHWORT={{{s}}}"
    },
    {
        "d": "www.canadiantire.ca",
        "b": "ct",
        "u": "http://www.canadiantire.ca/en/search-results.html?q={{{s}}}"
    },
    {
        "d": "www.cheaperthandirt.com",
        "b": "ctd",
        "u": "http://www.cheaperthandirt.com/SolrSearchResults.aspx?site=All+Products&num=15&q={{{s}}}"
    },
    {
        "d": "www.skutchi.com",
        "b": "cubicles",
        "u": "http://www.skutchi.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "cuchilleriaalbacete.com",
        "b": "cuchilleriaalbacete",
        "u": "https://cuchilleriaalbacete.com/articulos-buscar.php?busco={{{s}}}"
    },
    {
        "d": "www.cultpens.com",
        "b": "cultpens",
        "u": "https://www.cultpens.com/s?q={{{s}}}"
    },
    {
        "d": "www.cambridge.org",
        "b": "cup",
        "u": "https://www.cambridge.org/gb/search?query={{{s}}}"
    },
    {
        "d": "www.cuprinol.co.uk",
        "b": "cuprinoluk",
        "u": "http://www.cuprinol.co.uk/servlet/SiteAdvancedSearchHandler?searchtype=all&searchString={{{s}}}"
    },
    {
        "d": "www.cuspide.com",
        "b": "cuspide",
        "u": "http://www.cuspide.com/resultados.aspx?c={{{s}}}"
    },
    {
        "d": "www.cvo.co.uk",
        "b": "cvo",
        "u": "http://www.cvo.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.cvo.co.uk",
        "b": "cvofire",
        "u": "https://www.cvo.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.cvs.com",
        "b": "cvs",
        "u": "http://www.cvs.com/search/_/N-0?searchTerm={{{s}}}&pt=global"
    },
    {
        "d": "www.cyberport.de",
        "b": "cyberport",
        "u": "http://www.cyberport.de/?EVENT=itemsearch&query={{{s}}}"
    },
    {
        "d": "www.cycletec.ch",
        "b": "cycletec",
        "u": "https://www.cycletec.ch/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.czc.cz",
        "b": "czc",
        "u": "http://www.czc.cz/search?q-fulltext={{{s}}}"
    },
    {
        "d": "www.dacardworld.com",
        "b": "dacardworld",
        "u": "http://www.dacardworld.com/search?Search={{{s}}}"
    },
    {
        "d": "www.dafoodmall.com",
        "b": "dafoodmall",
        "u": "http://www.dafoodmall.com/goods/search.asp?sword={{{s}}}"
    },
    {
        "d": "search.danawa.com",
        "b": "danawa",
        "u": "http://search.danawa.com/dsearch.php?query={{{s}}}"
    },
    {
        "d": "www.dandyfellow.com",
        "b": "dandyfellow",
        "u": "https://www.dandyfellow.com/search/{{{s}}}"
    },
    {
        "d": "www.danielshomecenter.com",
        "b": "danielshomecenter",
        "u": "https://www.danielshomecenter.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.danmurphys.com.au",
        "b": "danmurphys",
        "u": "https://www.danmurphys.com.au/search?searchTerm={{{s}}}"
    },
    {
        "d": "www.darty.com",
        "b": "darty",
        "u": "http://www.darty.com/nav/recherche?text={{{s}}}"
    },
    {
        "d": "www.davetiyebaski.net",
        "b": "davetiyebaski",
        "u": "http://www.davetiyebaski.net/arama?q={{{s}}}"
    },
    {
        "d": "davidsw.com",
        "b": "davidsw",
        "u": "http://davidsw.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.dba.dk",
        "b": "dba",
        "u": "http://www.dba.dk/soeg/?soeg={{{s}}}"
    },
    {
        "d": "diebuchsuche.de",
        "b": "dbuch",
        "u": "http://diebuchsuche.de/r.php?q={{{s}}}"
    },
    {
        "d": "www.dealabs.com",
        "b": "dealabs",
        "u": "http://www.dealabs.com/search/?q={{{s}}}"
    },
    {
        "d": "www.dealagora.com",
        "b": "dealagora",
        "u": "https://www.dealagora.com/recherche?q={{{s}}}"
    },
    {
        "d": "dx.com",
        "b": "dealextreme",
        "u": "http://dx.com/s/{{{s}}}"
    },
    {
        "d": "dealnews.com",
        "b": "dealnews",
        "u": "http://dealnews.com/search.html?search={{{s}}}"
    },
    {
        "d": "www.dealspricer.com",
        "b": "dealspricer",
        "u": "http://www.dealspricer.com/search?q={{{s}}}&utm_source=ddgbang&utm_medium=organic"
    },
    {
        "d": "www.reddit.com",
        "b": "deals",
        "u": "https://www.reddit.com/r/deals/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "www.debenhams.com",
        "b": "debenhams",
        "u": "http://www.debenhams.com/search/{{{s}}}"
    },
    {
        "d": "www.decathlon.co.uk",
        "b": "decathlon",
        "u": "http://www.decathlon.co.uk/Buy/{{{s}}}"
    },
    {
        "d": "www.decathlon.es",
        "b": "decathlones",
        "u": "https://www.decathlon.es/Comprar/{{{s}}}"
    },
    {
        "d": "www.decathlon.fr",
        "b": "decathlonfr",
        "u": "http://www.decathlon.fr/Acheter/{{{s}}}"
    },
    {
        "d": "www.decathlon.it",
        "b": "decathlonit",
        "u": "http://www.decathlon.it/Comprare/{{{s}}}"
    },
    {
        "d": "www.decathlon.de",
        "b": "decde",
        "u": "https://www.decathlon.de/search?Ntt={{{s}}}"
    },
    {
        "d": "www.decitre.fr",
        "b": "decitre",
        "u": "http://www.decitre.fr/rechercher/result/?q={{{s}}}"
    },
    {
        "d": "www.decks.de",
        "b": "decks",
        "u": "https://www.decks.de/decks/workfloor/search_db.php?such={{{s}}}"
    },
    {
        "d": "www.deichmann.com",
        "b": "dei",
        "u": "http://www.deichmann.com/DE/de/shop/search.html?q={{{s}}}"
    },
    {
        "d": "www.demeure-et-jardin.com",
        "b": "demeureetjardin",
        "u": "http://www.demeure-et-jardin.com/?q={{{s}}}"
    },
    {
        "d": "ledenicheur.fr",
        "b": "denicheur",
        "u": "http://ledenicheur.fr/#rparams=ss={{{s}}} "
    },
    {
        "d": "www.depop.com",
        "b": "depop",
        "u": "https://www.depop.com/search/?q={{{s}}}"
    },
    {
        "d": "www.desiclik.com",
        "b": "desiclik",
        "u": "https://www.desiclik.com/_search.php?page=1&q={{{s}}}"
    },
    {
        "d": "www.desiclik.com",
        "b": "desi",
        "u": "https://www.desiclik.com/_search.php?page=1&q={{{s}}}"
    },
    {
        "d": "www.digikey.com",
        "b": "dgky",
        "u": "https://www.digikey.com/products/en?keywords={{{s}}}"
    },
    {
        "d": "www.dhgate.com",
        "b": "dhgate",
        "u": "http://www.dhgate.com/wholesale/search.do?act=search&supplierid=&isfactory=&sus=&searchkey={{{s}}}&catalog=#search"
    },
    {
        "d": "www.dhgate.com",
        "b": "dhg",
        "u": "http://www.dhgate.com/wholesale/search.do?act=search&sus=&searchkey={{{s}}}"
    },
    {
        "d": "www.1stdibs.com",
        "b": "dibs",
        "u": "https://www.1stdibs.com/search/?q={{{s}}}"
    },
    {
        "d": "www.dierenkruiden.nl",
        "b": "dierenkruiden",
        "u": "https://www.dierenkruiden.nl/search?s={{{s}}} "
    },
    {
        "d": "www.digikala.com",
        "b": "digikala",
        "u": "https://www.digikala.com/Search?q={{{s}}}"
    },
    {
        "d": "www.digikey.com",
        "b": "digikey",
        "u": "http://www.digikey.com/product-search/en?x=17&y=13&lang=en&site=us&KeyWords={{{s}}}"
    },
    {
        "d": "www.digitec.ch",
        "b": "digitec",
        "u": "https://www.digitec.ch/Search?q={{{s}}}"
    },
    {
        "d": "www.digitick.com",
        "b": "digitick",
        "u": "http://www.digitick.com/fr/recherche?query={{{s}}}"
    },
    {
        "d": "www.direnc.net",
        "b": "direncnet",
        "u": "https://www.direnc.net/arama?q={{{s}}}"
    },
    {
        "d": "discountoffice.co.nz",
        "b": "discountoffice",
        "u": "https://discountoffice.co.nz/search?type=product&q={{{s}}}*"
    },
    {
        "d": "www.distrelec.ch",
        "b": "distch",
        "u": "https://www.distrelec.ch/search?q={{{s}}}"
    },
    {
        "d": "www.distrelec.de",
        "b": "dist",
        "u": "http://www.distrelec.de/search?q={{{s}}}"
    },
    {
        "d": "divazus.com",
        "b": "divazus",
        "u": "https://divazus.com/?s={{{s}}}"
    },
    {
        "d": "store.dji.com",
        "b": "dji",
        "u": "https://store.dji.com/product-search?q={{{s}}}"
    },
    {
        "d": "search.www.davidjones.com",
        "b": "djones",
        "u": "https://search.www.davidjones.com/search?w={{{s}}}"
    },
    {
        "d": "www.digikey.ca",
        "b": "dkc",
        "u": "http://www.digikey.ca/product-search/en?x=-1308&y=-74&lang=en&site=ca&KeyWords={{{s}}} "
    },
    {
        "d": "www.digikey.es",
        "b": "dkes",
        "u": "https://www.digikey.es/products/es?keywords={{{s}}}"
    },
    {
        "d": "www.digikey.fr",
        "b": "dkfr",
        "u": "http://www.digikey.fr/product-search/fr?keywords={{{s}}}"
    },
    {
        "d": "www.digikey.it",
        "b": "dkit",
        "u": "http://www.digikey.it/products/it?keywords={{{s}}}"
    },
    {
        "d": "www.digikey.com",
        "b": "dky",
        "u": "https://www.digikey.com/products/en?keywords={{{s}}}"
    },
    {
        "d": "www.dlcompare.com",
        "b": "dlc",
        "u": "http://www.dlcompare.com/search?q={{{s}}}"
    },
    {
        "d": "www.dm.de",
        "b": "dmde",
        "u": "https://www.dm.de/search/468652.html?type=product&q={{{s}}}"
    },
    {
        "d": "www.dns-shop.ru",
        "b": "dnsshop",
        "u": "http://www.dns-shop.ru/search/?q={{{s}}}"
    },
    {
        "d": "search.danawa.com",
        "b": "dnw",
        "u": "http://search.danawa.com/dsearch.php?k1={{{s}}}"
    },
    {
        "d": "www.dobre-knihy.cz",
        "b": "dobreknihy",
        "u": "http://www.dobre-knihy.cz/vyhledavani/?q={{{s}}}"
    },
    {
        "d": "www.dodax.it",
        "b": "dodaxit",
        "u": "https://www.dodax.it/it-it/search/?s={{{s}}}"
    },
    {
        "d": "dohp.com",
        "b": "dohp",
        "u": "https://dohp.com/search?q={{{s}}}"
    },
    {
        "d": "www.donedeal.ie",
        "b": "donedeal",
        "u": "https://www.donedeal.ie/all?words={{{s}}}"
    },
    {
        "d": "www.doomsdayprep.com",
        "b": "doomsday",
        "u": "https://www.doomsdayprep.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.douglas.nl",
        "b": "douglas",
        "u": "https://www.douglas.nl/douglas/search.html?query={{{s}}}&searchType=search&init=true"
    },
    {
        "d": "search.doverpublications.com",
        "b": "dover",
        "u": "http://search.doverpublications.com/search?keywords={{{s}}}"
    },
    {
        "d": "www.dpreview.com",
        "b": "dpr",
        "u": "http://www.dpreview.com/search/?query={{{s}}} "
    },
    {
        "d": "www.dr.com.tr",
        "b": "d&r",
        "u": "https://www.dr.com.tr/search?q={{{s}}}"
    },
    {
        "d": "www.drom.ru",
        "b": "drom",
        "u": "https://www.drom.ru/search/?q={{{s}}}"
    },
    {
        "d": "dsmcz.com",
        "b": "dsmcz",
        "u": "http://dsmcz.com/prestashop/en/search?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search="
    },
    {
        "d": "www.doubletakedeals.com",
        "b": "dtdeals",
        "u": "http://www.doubletakedeals.com/searchresults?srch={{{s}}}"
    },
    {
        "d": "dubai.dubizzle.com",
        "b": "dubizzle",
        "u": "http://dubai.dubizzle.com/search/?keywords={{{s}}}&is_basic_search_widget=1&is_search=1"
    },
    {
        "d": "www.duluxdecoratorcentre.co.uk",
        "b": "duluxdc",
        "u": "http://www.duluxdecoratorcentre.co.uk/servlet/SiteAdvancedSearchHandler?searchString={{{s}}}"
    },
    {
        "d": "www.dulux.co.uk",
        "b": "duluxuk",
        "u": "https://www.dulux.co.uk/en/search?s={{{s}}}"
    },
    {
        "d": "kulturkaufhaus.buchhandlung.de",
        "b": "duss",
        "u": "https://kulturkaufhaus.buchhandlung.de/shop/quickSearch?searchString={{{s}}}"
    },
    {
        "d": "www.dustin.se",
        "b": "dustin",
        "u": "https://www.dustin.se/search/{{{s}}}"
    },
    {
        "d": "www.dv247.com",
        "b": "dv247",
        "u": "http://www.dv247.com/search/0/0/Relevance/Descending/{{{s}}}/1/"
    },
    {
        "d": "www.dx.com",
        "b": "dx",
        "u": "http://www.dx.com/s/{{{s}}}"
    },
    {
        "d": "www.dymocks.com.au",
        "b": "dymocks",
        "u": "https://www.dymocks.com.au/books/?term={{{s}}}"
    },
    {
        "d": "www.everything5pounds.com",
        "b": "e5p",
        "u": "https://www.everything5pounds.com/en/search/?q=%3AbestSeller&text={{{s}}}"
    },
    {
        "d": "www.eastbay.com",
        "b": "eastbay",
        "u": "http://www.eastbay.com/_-_/keyword-{{{s}}}"
    },
    {
        "d": "www.easymerchant.co.uk",
        "b": "easymerchant",
        "u": "https://www.easymerchant.co.uk/?product_cat=&s={{{s}}}&post_type=product"
    },
    {
        "d": "www.ebay.at",
        "b": "eat",
        "u": "https://www.ebay.at/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.at",
        "b": "e.at",
        "u": "https://www.ebay.at/sch/i.html?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.com.au",
        "b": "e.au",
        "u": "https://www.ebay.com.au/sch/?_nkw={{{s}}}&_sacat=0"
    },
    {
        "d": "www.ebay.com.au",
        "b": "eau",
        "u": "https://www.ebay.com.au/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.at",
        "b": "ebat",
        "u": "http://www.ebay.at/sch/i.html?_nkw={{{s}}}"
    },
    {
        "d": "www.ebates.ca",
        "b": "ebatesca",
        "u": "https://www.ebates.ca/srch/all?query={{{s}}}"
    },
    {
        "d": "www.ebates.com",
        "b": "ebates",
        "u": "http://www.ebates.com/search/all.htm?query={{{s}}}&position=submit&type=suggest&store_name={{{s}}}"
    },
    {
        "d": "www.ebay.com.au",
        "b": "ebau",
        "u": "https://www.ebay.com.au/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.at",
        "b": "ebayat",
        "u": "https://www.ebay.at/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.com.au",
        "b": "ebayau",
        "u": "https://www.ebay.com.au/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.befr.ebay.be",
        "b": "ebaybe",
        "u": "https://www.befr.ebay.be/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.ca",
        "b": "ebayca",
        "u": "https://www.ebay.ca/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.ch",
        "b": "ebaych",
        "u": "https://www.ebay.ch/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.de",
        "b": "ebayde",
        "u": "https://www.ebay.de/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.com",
        "b": "ebay",
        "u": "https://www.ebay.com/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.es",
        "b": "ebayes",
        "u": "https://www.ebay.es/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.fr",
        "b": "ebayfr",
        "u": "https://www.ebay.fr/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "search.eim.ebay.gr",
        "b": "ebaygr",
        "u": "http://search.eim.ebay.gr/?kw={{{s}}}"
    },
    {
        "d": "shop.ebay.com.hk",
        "b": "ebayhk",
        "u": "http://shop.ebay.com.hk/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.ie",
        "b": "ebayie",
        "u": "https://www.ebay.ie/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "shop.ebay.in",
        "b": "ebayin",
        "u": "http://shop.ebay.in/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.it",
        "b": "ebayit",
        "u": "https://www.ebay.it/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "ebaykleinanzeigen",
        "u": "https://www.ebay-kleinanzeigen.de/s-{{{s}}}/k0"
    },
    {
        "d": "shop.ebay.com.my",
        "b": "ebaymy",
        "u": "http://shop.ebay.com.my/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.nl",
        "b": "ebaynl",
        "u": "https://www.ebay.nl/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "shop.ebay.ph",
        "b": "ebayph",
        "u": "http://shop.ebay.ph/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "shop.ebay.pl",
        "b": "ebaypl",
        "u": "http://shop.ebay.pl/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "shop.ebay.com.sg",
        "b": "ebaysg",
        "u": "http://shop.ebay.com.sg/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.co.uk",
        "b": "ebayuk",
        "u": "https://www.ebay.co.uk/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.befr.ebay.be",
        "b": "ebbe",
        "u": "https://www.befr.ebay.be/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.ca",
        "b": "ebca",
        "u": "https://www.ebay.ca/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.ca",
        "b": "ebc",
        "u": "https://www.ebay.ca/sch/{{{s}}}"
    },
    {
        "d": "www.ebay.ch",
        "b": "ebch",
        "u": "https://www.ebay.ch/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.de",
        "b": "ebde",
        "u": "https://www.ebay.de/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.com",
        "b": "eb",
        "u": "https://www.ebay.com/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.befr.ebay.be",
        "b": "ebe",
        "u": "https://www.befr.ebay.be/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.es",
        "b": "ebes",
        "u": "https://www.ebay.es/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.fr",
        "b": "ebfr",
        "u": "https://www.ebay.fr/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebgames.com.au",
        "b": "ebgamesaustralia",
        "u": "https://www.ebgames.com.au/any/any?q={{{s}}}"
    },
    {
        "d": "www.ebgames.ca",
        "b": "ebgamesca",
        "u": "https://www.ebgames.ca/SearchResult/QuickSearch?q={{{s}}}"
    },
    {
        "d": "ebgames.com.au",
        "b": "ebg",
        "u": "https://ebgames.com.au/any/any?q={{{s}}}"
    },
    {
        "d": "search.eim.ebay.gr",
        "b": "ebgr",
        "u": "http://search.eim.ebay.gr/?kw={{{s}}}"
    },
    {
        "d": "shop.ebay.com.hk",
        "b": "ebhk",
        "u": "http://shop.ebay.com.hk/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.ie",
        "b": "ebie",
        "u": "https://www.ebay.ie/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "shop.ebay.in",
        "b": "ebin",
        "u": "http://shop.ebay.in/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.it",
        "b": "ebit",
        "u": "https://www.ebay.it/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "shop.ebay.com.my",
        "b": "ebmy",
        "u": "http://shop.ebay.com.my/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.nl",
        "b": "ebnl",
        "u": "https://www.ebay.nl/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebook.de",
        "b": "ebookde",
        "u": "https://www.ebook.de/de/quickSearch?searchString={{{s}}}"
    },
    {
        "d": "shop.ebay.ph",
        "b": "ebph",
        "u": "http://shop.ebay.ph/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "shop.ebay.pl",
        "b": "ebpl",
        "u": "http://shop.ebay.pl/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.com",
        "b": "ebseller",
        "u": "http://www.ebay.com/sch/{{{s}}}/m.html"
    },
    {
        "d": "shop.ebay.com.sg",
        "b": "ebsg",
        "u": "http://shop.ebay.com.sg/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "ebay.com",
        "b": "ebsold",
        "u": "https://ebay.com/sch/i.html?isRefine=true&_nkw={{{s}}}&LH_Sold=1"
    },
    {
        "d": "www.ebth.com",
        "b": "ebth",
        "u": "https://www.ebth.com/search?q={{{s}}}"
    },
    {
        "d": "gpo.zugaina.org",
        "b": "ebuild",
        "u": "http://gpo.zugaina.org/Search?search={{{s}}}"
    },
    {
        "d": "gpo.zugaina.org",
        "b": "ebuilds",
        "u": "http://gpo.zugaina.org/Search?search={{{s}}}"
    },
    {
        "d": "www.ebay.co.uk",
        "b": "ebuk",
        "u": "https://www.ebay.co.uk/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebuyer.com",
        "b": "ebuyer",
        "u": "https://www.ebuyer.com/search?q={{{s}}}"
    },
    {
        "d": "www.ebay.com",
        "b": "ebyrec",
        "u": "https://www.ebay.com/sch/176985/i.html?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.ca",
        "b": "eca",
        "u": "https://www.ebay.ca/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.ch",
        "b": "ech",
        "u": "https://www.ebay.ch/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.eciaauthorized.com",
        "b": "ecia",
        "u": "http://www.eciaauthorized.com/search?pn={{{s}}}"
    },
    {
        "d": "www.elcorteingles.es",
        "b": "eci",
        "u": "http://www.elcorteingles.es/search?s={{{s}}}"
    },
    {
        "d": "eclair.md",
        "b": "eclair",
        "u": "http://eclair.md/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.ecobookstore.de",
        "b": "ecob",
        "u": "https://www.ecobookstore.de/shop/quickSearch?searchString={{{s}}}"
    },
    {
        "d": "www.ecoshopper.de",
        "b": "ecoshopper",
        "u": "http://www.ecoshopper.de/ecoshopper2/faces/SuchErgebnis.jsp?query={{{s}}}&brancheDropDown=alle&preisspanneDropDown=0&_charset_=UTF-8&suchen=Suchen&searchrange=namen"
    },
    {
        "d": "www.edbpriser.dk",
        "b": "edbpriser",
        "u": "http://www.edbpriser.dk/Search/General.aspx?q={{{s}}}}"
    },
    {
        "d": "www.eddiebauer.com",
        "b": "eddiebauer",
        "u": "https://www.eddiebauer.com/search/a-search.jsp?sTerm={{{s}}}"
    },
    {
        "d": "www.ebay.de",
        "b": "ede",
        "u": "https://www.ebay.de/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.de",
        "b": "e.de",
        "u": "http://www.ebay.de/sch/i.html?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.com",
        "b": "e",
        "u": "https://www.ebay.com/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.es",
        "b": "ees",
        "u": "https://www.ebay.es/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.fr",
        "b": "efr",
        "u": "https://www.ebay.fr/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "e-gear.se",
        "b": "egear",
        "u": "https://e-gear.se/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "search.eim.ebay.gr",
        "b": "egr",
        "u": "http://search.eim.ebay.gr/?kw={{{s}}}"
    },
    {
        "d": "shop.ebay.com.hk",
        "b": "ehk",
        "u": "http://shop.ebay.com.hk/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.ie",
        "b": "eie",
        "u": "https://www.ebay.ie/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "shop.ebay.in",
        "b": "ein",
        "u": "http://shop.ebay.in/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.ebay.it",
        "b": "eit",
        "u": "https://www.ebay.it/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.e-jumbo.gr",
        "b": "ejumbo",
        "u": "http://www.e-jumbo.gr/pages/searchProducts.aspx?lang=el&search-for={{{s}}}"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "ekac",
        "u": "https://www.ebay-kleinanzeigen.de/s-aachen/{{{s}}}/k0l1921"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "eka",
        "u": "http://www.ebay-kleinanzeigen.de/s-{{{s}}}/k0"
    },
    {
        "d": "kleinanzeigen.ebay.de",
        "b": "ekb",
        "u": "http://kleinanzeigen.ebay.de/anzeigen/s-berlin/{{{s}}}/k0l3331"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "ekh",
        "u": "https://www.ebay-kleinanzeigen.de/s-hamburg/{{{s}}}/k0l9409"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "ekhr",
        "u": "https://www.ebay-kleinanzeigen.de/s-hannover/{{{s}}}/k0l3155"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "ekk",
        "u": "https://www.ebay-kleinanzeigen.de/s-koeln/{{{s}}}/k0l945"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "ekl",
        "u": "https://www.ebay-kleinanzeigen.de/s-leipzig/{{{s}}}/k0l4233"
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "ekm",
        "u": "https://www.ebay-kleinanzeigen.de/s-muenchen/{{{s}}}/k0l6411"
    },
    {
        "d": "www.ekwb.com",
        "b": "ekwb",
        "u": "https://www.ekwb.com/shop/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.elfa.se",
        "b": "elfa",
        "u": "https://www.elfa.se/elfa3~se_sv/elfa/init.do?sq={{{s}}}"
    },
    {
        "d": "eshop.elfetex.cz",
        "b": "elf",
        "u": "http://eshop.elfetex.cz/fulltext_search/1?query={{{s}}}"
    },
    {
        "d": "www.elfster.com",
        "b": "elfster",
        "u": "https://www.elfster.com/shop/search/?q={{{s}}}"
    },
    {
        "d": "www.elgiganten.se",
        "b": "elgiganten",
        "u": "https://www.elgiganten.se/search?SearchTerm={{{s}}}"
    },
    {
        "d": "www.ellos.se",
        "b": "ellos",
        "u": "https://www.ellos.se/search?SearchTerm={{{s}}}"
    },
    {
        "d": "www.eloquii.com",
        "b": "eloquii",
        "u": "http://www.eloquii.com/on/demandware.store/Sites-eloquii-Site/default/Search-Show?q= {{{s}}}"
    },
    {
        "d": "www.emag.bg",
        "b": "emagbg",
        "u": "https://www.emag.bg/search/{{{s}}}?ref=effective_search"
    },
    {
        "d": "www.emag.ro",
        "b": "emag",
        "u": "https://www.emag.ro/search/{{{s}}}"
    },
    {
        "d": "motors.shop.ebay.com",
        "b": "em",
        "u": "http://motors.shop.ebay.com/eBay-Motors-/6000/i.html?_nkw={{{s}}}&_trksid=p2050885.m570.l1313&_rdc=1"
    },
    {
        "d": "www.emoney.ge",
        "b": "emoneyge",
        "u": "https://www.emoney.ge/index.php/main/services?search_query={{{s}}}"
    },
    {
        "d": "www.emp.de",
        "b": "emp",
        "u": "http://www.emp.de/search/{{{s}}}/"
    },
    {
        "d": "www.empik.com",
        "b": "empik",
        "u": "http://www.empik.com/szukaj/produkt?q={{{s}}}"
    },
    {
        "d": "shop.ebay.com.my",
        "b": "emy",
        "u": "http://shop.ebay.com.my/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.engadin.stmoritz.ch",
        "b": "engadin",
        "u": "https://www.engadin.stmoritz.ch/suche/q.{{{s}}}/"
    },
    {
        "d": "www.globalspec.com",
        "b": "engineering360",
        "u": "http://www.globalspec.com/search/all?query={{{s}}}"
    },
    {
        "d": "www.ebay.nl",
        "b": "enl",
        "u": "https://www.ebay.nl/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.entertainmentearth.com",
        "b": "entearth",
        "u": "https://www.entertainmentearth.com/s/?query1={{{s}}}"
    },
    {
        "d": "themeforest.net",
        "b": "envatomarkettheme",
        "u": "https://themeforest.net/search?term={{{s}}}"
    },
    {
        "d": "shop.ebay.ph",
        "b": "eph",
        "u": "http://shop.ebay.ph/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "shop.ebay.pl",
        "b": "epl",
        "u": "http://shop.ebay.pl/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.eprice.it",
        "b": "epriceit",
        "u": "http://www.eprice.it/search/qs={{{s}}}&mets={{{s}}}"
    },
    {
        "d": "www.ethnicsmart.com",
        "b": "es1",
        "u": "https://www.ethnicsmart.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "shop.ebay.com.sg",
        "b": "esg",
        "u": "http://shop.ebay.com.sg/?_nkw={{{s}}}&_sacat=See-All-Categories"
    },
    {
        "d": "www.nintendo.co.uk",
        "b": "eshopuk",
        "u": "https://www.nintendo.co.uk/Search/Search-299117.html?q={{{s}}}"
    },
    {
        "d": "www.essef.be",
        "b": "esseffr",
        "u": "http://www.essef.be/fr/cataloog/index.search.asp?zoek={{{s}}} "
    },
    {
        "d": "www.essef.be",
        "b": "essefn",
        "u": "http://www.essef.be/ndl/cataloog/index.search.asp?zoek={{{s}}}"
    },
    {
        "d": "www.estantevirtual.com.br",
        "b": "estantevirtual",
        "u": "https://www.estantevirtual.com.br/busca?utf8=✓&type=q&new=&q={{{s}}}"
    },
    {
        "d": "www.etbm.ro",
        "b": "etbm.ro",
        "u": "http://www.etbm.ro/search?Q={{{s}}} "
    },
    {
        "d": "ethicalrevolution.co.uk",
        "b": "ethrev",
        "u": "https://ethicalrevolution.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.etsy.com",
        "b": "etsy",
        "u": "https://www.etsy.com/search?q={{{s}}}"
    },
    {
        "d": "www.ebay.co.uk",
        "b": "euk",
        "u": "https://www.ebay.co.uk/sch/items/?_nkw={{{s}}}"
    },
    {
        "d": "www.ebay.co.uk",
        "b": "e.uk",
        "u": "http://www.ebay.co.uk/sch/i.html?_nkw={{{s}}}"
    },
    {
        "d": "www.eukeries.com",
        "b": "eukeries",
        "u": "https://www.eukeries.com/?s={{{s}}}"
    },
    {
        "d": "www.eurobuch.com",
        "b": "eurobuch",
        "u": "http://www.eurobuch.com/buch/isbn/3838758854.html?author=&coverState=&doAbeDe=1&doAchtungBuecher=1&doAko=1&doAlibris=1&doAmazon=1&doAmazonCa=1&doAmazonCom=1&doAmazonEs=1&doAmazonFr=1&doAmazonIt=1&doAmazonUk=1&doAudibile=1&doAudiobooks=1&doAum=1&doBUCH=1&doBUCHCH=1&doBbBuch=1&doBetterworld=1&doBiblio=1&doBlackwell=1&doBn=1&doBoeken=1&doBolCom=1&doBookdepository=1&doBooklooker=1&doBruna=1&doBuch24=1&doBuchfreund=1&doBuchmarie=1&doBuecherDe=1&doCasaDelLibro=1&doCiando=1&doEBS=1&doEBay=1&doEBooknl=1&doEbooks=1&doEbookscom=1&doEci=1&doElsevier=1&doFnac=1&doFoyles=1&doGoogle=1&doHive=1&doHoepli=1&doIbs=1&doImosver=1&doIndigo=1&doJokers=1&doKobo=1&doLaFeltrinelli=1&doLehmanns=1&doLibri=1&doLibriEB=1&doLibroco=1&doLuisterboeken=1&doMedimops=1&doMondadori=1&doMusicroom=1&doNotenbuch=1&doOnderwijsboek=1&doProlibri=1&doProxis=1&doRegalfrei=1&doRheinberg=1&doScholastic=1&doStudystore=1&doThaliaAt=1&doThaliaCh=1&doThaliaDe=1&doThriftbooks=1&doVoordeelboekenonline=1&doWaterstones=1&doWebster=1&doZVAB=1&fromDateDays=7&isbn=&land=&maxJahr=&maxPrice=&mediatype=0&minJahr=&minPrice=&noBids=0&noReprint=0&pageLen=20&proSearch=&professionalState=&publisher=&search={{{s}}}&search_submit=suchen&sisbn=&title=&updatePresets=1&updateProState=1&usedState="
    },
    {
        "d": "euro-industry.com",
        "b": "euro-industry",
        "u": "https://euro-industry.com/main.php?index=search&search={{{s}}}"
    },
    {
        "d": "www.euronics.de",
        "b": "euronics",
        "u": "https://www.euronics.de/search/?sSearch={{{s}}}&log=search"
    },
    {
        "d": "www.evanscycles.com",
        "b": "evans",
        "u": "http://www.evanscycles.com/search?query={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.e-ville.com",
        "b": "evillecom",
        "u": "http://www.e-ville.com/fi/q/{{{s}}}"
    },
    {
        "d": "evreward.com",
        "b": "evreward",
        "u": "http://evreward.com/store/find?store[name]={{{s}}}"
    },
    {
        "d": "www.exasoft.cz",
        "b": "exa",
        "u": "https://www.exasoft.cz/default.asp?cls=stoitems&stifulltext_search=and&fulltext={{{s}}}"
    },
    {
        "d": "exist.ua",
        "b": "existgo",
        "u": "https://exist.ua/price.aspx?pcode={{{s}}}&sortType="
    },
    {
        "d": "www.exlibris.ch",
        "b": "exlibris",
        "u": "https://www.exlibris.ch/de/suche/?q={{{s}}}"
    },
    {
        "d": "search.expedia.com",
        "b": "expedia",
        "u": "http://search.expedia.com/socialsearch/query?st=1&cn=expedia&cc=www&q={{{s}}}"
    },
    {
        "d": "www.expert.nl",
        "b": "expert",
        "u": "https://www.expert.nl/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.extrastores.com",
        "b": "extra",
        "u": "http://www.extrastores.com/en-sa/search?q={{{s}}}"
    },
    {
        "d": "www.ezydvd.com.au",
        "b": "ezydvd",
        "u": "http://www.ezydvd.com.au/search?q={{{s}}}&t=all"
    },
    {
        "d": "www.f64.ro",
        "b": "f64",
        "u": "https://www.f64.ro/{{{s}}}"
    },
    {
        "d": "fab.com",
        "b": "fab",
        "u": "http://fab.com/search/?q={{{s}}}&ref=ddb"
    },
    {
        "d": "www.fabric.com",
        "b": "fabric",
        "u": "https://www.fabric.com/SearchResults2.aspx?SearchText={{{s}}}"
    },
    {
        "d": "www.fahrschule-berne.de",
        "b": "fahrschule",
        "u": "http://www.fahrschule-berne.de/component/search/?searchword={{{s}}}"
    },
    {
        "d": "www.fairmondo.de",
        "b": "fairmondo",
        "u": "https://www.fairmondo.de/articles?article_search_form[q]={{{s}}}"
    },
    {
        "d": "www.fairtragen.de",
        "b": "fairtragen",
        "u": "https://www.fairtragen.de/advanced_search_result.php?keywords={{{s}}}"
    },
    {
        "d": "www.fakespot.com",
        "b": "fake",
        "u": "https://www.fakespot.com/analyze?url={{{s}}}"
    },
    {
        "d": "www.fakespot.com",
        "b": "fakespot",
        "u": "https://www.fakespot.com/analyze?url={{{s}}}"
    },
    {
        "d": "www.shopfancythat.com",
        "b": "fancythat",
        "u": "https://www.shopfancythat.com/search?q={{{s}}}"
    },
    {
        "d": "www.thefancy.com",
        "b": "fancy",
        "u": "http://www.thefancy.com/search?q={{{s}}} "
    },
    {
        "d": "www.fangamer.com",
        "b": "fangamer",
        "u": "https://www.fangamer.com/search?type=product&q=*{{{s}}}*"
    },
    {
        "d": "it.farnell.com",
        "b": "farit",
        "u": "http://it.farnell.com/webapp/wcs/stores/servlet/Search?catalogId=15001&langId=-4&storeId=10165&categoryName=Tutte le categorie&selectedCategoryId=&gs=true&st={{{s}}}"
    },
    {
        "d": "www.farmaline.be",
        "b": "farmaline",
        "u": "https://www.farmaline.be/apotheek/zoeken/{{{s}}}/?ref=duckduckgo"
    },
    {
        "d": "de.farnell.com",
        "b": "farnde",
        "u": "http://de.farnell.com/webapp/wcs/stores/servlet/Search?catalogId=15001&langId=-3&storeId=10161&categoryName=Alle%20Kategorien&selectedCategoryId=&gs=true&st={{{s}}}"
    },
    {
        "d": "fr.farnell.com",
        "b": "farnellfr",
        "u": "http://fr.farnell.com/{{{s}}} "
    },
    {
        "d": "es.farnell.com",
        "b": "farnes",
        "u": "https://es.farnell.com/search?st={{{s}}}"
    },
    {
        "d": "nl.farnell.com",
        "b": "farnl",
        "u": "https://nl.farnell.com/webapp/wcs/stores/servlet/Search?&st={{{s}}}"
    },
    {
        "d": "www.farrvintners.com",
        "b": "farr",
        "u": "https://www.farrvintners.com/winelist.php?keywords={{{s}}}"
    },
    {
        "d": "www.faucet.com",
        "b": "faucet",
        "u": "http://www.faucet.com/index.cfm?page=search:browse&term={{{s}}}"
    },
    {
        "d": "www.fcpeuro.com",
        "b": "fcpeuro",
        "u": "https://www.fcpeuro.com/products?utf8=%E2%9C%93&keywords={{{s}}}"
    },
    {
        "d": "fegtherm.hu",
        "b": "fegtherm",
        "u": "http://fegtherm.hu/?s={{{s}}}"
    },
    {
        "d": "www.lafeltrinelli.it",
        "b": "feltrinelli",
        "u": "http://www.lafeltrinelli.it/fcom/it/home/pages/catalogo/searchresults.html?prkw={{{s}}}"
    },
    {
        "d": "www.firesidexpressions.com",
        "b": "fex",
        "u": "https://www.firesidexpressions.com/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.freefallsupport.com",
        "b": "ffs",
        "u": "https://www.freefallsupport.com/?s={{{s}}}"
    },
    {
        "d": "fidgethq.com",
        "b": "fhq",
        "u": "https://fidgethq.com/search?q={{{s}}}"
    },
    {
        "d": "www.fibercables.com",
        "b": "fibercables",
        "u": "http://www.fibercables.com/search?q={{{s}}}"
    },
    {
        "d": "figuya.com",
        "b": "figuya",
        "u": "https://figuya.com/en/products?q[query]={{{s}}}"
    },
    {
        "d": "www.finn.no",
        "b": "finn",
        "u": "https://www.finn.no/globalsearchlander.html?searchKeys=&q={{{s}}}"
    },
    {
        "d": "www.firebox.com",
        "b": "firebox",
        "u": "http://www.firebox.com/search/{{{s}}}"
    },
    {
        "d": "www.firstcry.com",
        "b": "firstcry",
        "u": "http://www.firstcry.com/search.aspx?q={{{s}}}"
    },
    {
        "d": "www.firstmats.co.uk",
        "b": "firstmats",
        "u": "https://www.firstmats.co.uk/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.fishpond.com.au",
        "b": "fishpond",
        "u": "http://www.fishpond.com.au/advanced_search_result.php?keywords={{{s}}}"
    },
    {
        "d": "www.flipkart.com",
        "b": "fk",
        "u": "http://www.flipkart.com/search?q={{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "flag",
        "u": "https://duckduckgo.com/?q=site%3Aflagpoles.com.au+{{{s}}}"
    },
    {
        "d": "www.flipkart.com",
        "b": "flip",
        "u": "http://www.flipkart.com/search?q={{{s}}}&as=off&as-show=on&otracker=start"
    },
    {
        "d": "www.flipkart.com",
        "b": "flipkart",
        "u": "https://www.flipkart.com/search?q={{{s}}}"
    },
    {
        "d": "flyerhunters.com",
        "b": "flyer",
        "u": "https://flyerhunters.com/?s={{{s}}}"
    },
    {
        "d": "busqueda.fnac.es",
        "b": "fnaces",
        "u": "http://busqueda.fnac.es/Search/SearchResult.aspx?SCat=0%211&Search={{{s}}}&sft=1&submitbtn=OK"
    },
    {
        "d": "recherche.fnac.com",
        "b": "fnac",
        "u": "http://recherche.fnac.com/SearchResult/ResultList.aspx?Search={{{s}}}"
    },
    {
        "d": "pesquisa.fnac.pt",
        "b": "fnacportugal",
        "u": "http://pesquisa.fnac.pt/Search/SearchResult.aspx?Search={{{s}}}"
    },
    {
        "d": "www.fashionnova.com",
        "b": "fnova",
        "u": "https://www.fashionnova.com/pages/search-results?q={{{s}}}"
    },
    {
        "d": "www.focalprice.com",
        "b": "focalprice",
        "u": "http://www.focalprice.com/buy/{{{s}}}.html"
    },
    {
        "d": "folddownpro.com",
        "b": "folddown",
        "u": "https://folddownpro.com/search.php?search_query={{{s}}}"
    },
    {
        "d": "www.fonq.be",
        "b": "fonq",
        "u": "http://www.fonq.be/nl_BE/search/?search_term={{{s}}}#s=2"
    },
    {
        "d": "www.fonq.nl",
        "b": "fonqnl",
        "u": "https://www.fonq.nl/zoek/?fq={{{s}}}"
    },
    {
        "d": "www.footlocker.com",
        "b": "footlocker",
        "u": "http://www.footlocker.com/_-_/keyword-{{{s}}}"
    },
    {
        "d": "for-two-store.com",
        "b": "for-two",
        "u": "https://for-two-store.com/search?q={{{s}}}"
    },
    {
        "d": "www.fossil.com",
        "b": "fossil",
        "u": "https://www.fossil.com/uk/en/search.{{{s}}}.html"
    },
    {
        "d": "foundland.shop",
        "b": "found",
        "u": "https://foundland.shop/search?query={{{s}}}"
    },
    {
        "d": "www.foxracing.com",
        "b": "foxracing",
        "u": "https://www.foxracing.com/store/browse?_dyncharset=UTF-8&Dy=1&Nty=1&searchBox=searchBox&siteScope=ok&_D%3AsiteScope=+&autoSuggestEnabled=true&autoSuggestURL=%2Fstore%2Fassembler%3FassemblerContentCollection%3D%2Fcontent%2FShared%2FAuto-Suggest%2520Panels%26format%3Djson%26Dy%3D1%26Ntt%3D&minAutoSuggestInputLength=3&%2Fatg%2Fendeca%2Fassembler%2FSearchFormHandler.search=search&_D%3A%2Fatg%2Fendeca%2Fassembler%2FSearchFormHandler.search=+&Ntt={{{s}}}"
    },
    {
        "d": "www.foyles.co.uk",
        "b": "foyles",
        "u": "http://www.foyles.co.uk/qsearch/All/All?term={{{s}}}"
    },
    {
        "d": "www.friday-ad.co.uk",
        "b": "frad",
        "u": "https://www.friday-ad.co.uk/uk/search/?keywords={{{s}}}"
    },
    {
        "d": "www.fravega.com",
        "b": "fravega",
        "u": "https://www.fravega.com/{{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "fresh",
        "u": "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Damazonfresh&field-keywords={{{s}}}"
    },
    {
        "d": "www.fastreplacementglass.com",
        "b": "frg",
        "u": "https://www.fastreplacementglass.com/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.fressnapf.de",
        "b": "friss",
        "u": "https://www.fressnapf.de/s/search?text={{{s}}}"
    },
    {
        "d": "www.frys.com",
        "b": "frys",
        "u": "http://www.frys.com/search?search_type=regular&sqxts=1&query_string={{{s}}}"
    },
    {
        "d": "www.dicemagazine.com",
        "b": "ftlr",
        "u": "https://www.dicemagazine.com/search?q={{{s}}}"
    },
    {
        "d": "fuglymugcompany.com",
        "b": "fuglymugcompany",
        "u": "https://fuglymugcompany.com/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.funda.nl",
        "b": "funda",
        "u": "http://www.funda.nl/koop/{{{s}}}"
    },
    {
        "d": "funplass.com",
        "b": "funplass",
        "u": "https://funplass.com/recherche.php?what={{{s}}}&where=0&when=0"
    },
    {
        "d": "www.furet.com",
        "b": "furet",
        "u": "http://www.furet.com/catalogsearch/result/?q={{{s}}} "
    },
    {
        "d": "www.fusetronsound.com",
        "b": "fusetron",
        "u": "https://www.fusetronsound.com/search?q={{{s}}}"
    },
    {
        "d": "www.fye.com",
        "b": "fye",
        "u": "https://www.fye.com/search?q={{{s}}}"
    },
    {
        "d": "fyndiq.se",
        "b": "fyndiq",
        "u": "https://fyndiq.se/search/?q={{{s}}}"
    },
    {
        "d": "www.fiyatlab.com",
        "b": "fyt",
        "u": "https://www.fiyatlab.com/?s={{{s}}}"
    },
    {
        "d": "www.g2a.com",
        "b": "g2a",
        "u": "https://www.g2a.com/?search={{{s}}}"
    },
    {
        "d": "www.g2play.net",
        "b": "g2p",
        "u": "http://www.g2play.net/catalogsearch/result/index/?q={{{s}}}"
    },
    {
        "d": "games4you.rs",
        "b": "g4y",
        "u": "http://games4you.rs/search-glavni?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "thegadgetflow.com",
        "b": "gadgetflow",
        "u": "http://thegadgetflow.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.gadgetsdirect.com.au",
        "b": "gadgetsdirect",
        "u": "http://www.gadgetsdirect.com.au/index.php?main_page=advanced_search_result&search_in_description=1&keyword={{{s}}}"
    },
    {
        "d": "www.galaxus.ch",
        "b": "galaxus",
        "u": "https://www.galaxus.ch/de/Search?searchSectors=0&q={{{s}}}"
    },
    {
        "d": "www.game.co.uk",
        "b": "game",
        "u": "http://www.game.co.uk/webapp/wcs/stores/servlet/AjaxCatalogSearch?storeId=10151&catalogId=10201&langId=44&pageSize=&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=image&predictiveSearchURL=&searchTerm={{{s}}}&searchBtn=z"
    },
    {
        "d": "www.gamemar.com",
        "b": "gamemar",
        "u": "https://www.gamemar.com/?s={{{s}}}"
    },
    {
        "d": "www.game.co.za",
        "b": "gameza",
        "u": "https://www.game.co.za/game-za/en/search/?text={{{s}}}"
    },
    {
        "d": "www.gamma.nl",
        "b": "gamma",
        "u": "https://www.gamma.nl/assortiment/zoeken?text={{{s}}}"
    },
    {
        "d": "www.gandhi.com.mx",
        "b": "gandhi",
        "u": "https://www.gandhi.com.mx/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "gapp",
        "u": "https://play.google.com/store/search?q={{{s}}}"
    },
    {
        "d": "www.garbarino.com",
        "b": "garbarino",
        "u": "https://www.garbarino.com/productos?q={{{s}}}"
    },
    {
        "d": "www.booksinprint.com",
        "b": "gbip",
        "u": "http://www.booksinprint.com/Search/Results?q=quicksearch-all%3A{{{s}}}&op=1&qs=1"
    },
    {
        "d": "www.guitarcenter.com",
        "b": "gcenter",
        "u": "https://www.guitarcenter.com/search?typeAheadSuggestion=true&typeAheadRedirect=true&Ntt={{{s}}}"
    },
    {
        "d": "www.gandhi.com.mx",
        "b": "gdhimx",
        "u": "http://www.gandhi.com.mx/catalogsearch/result/?q={{{s}}} "
    },
    {
        "d": "www.gearbest.com",
        "b": "gearbest",
        "u": "http://www.gearbest.com/{{{s}}} -_gear/"
    },
    {
        "d": "www.gbase.com",
        "b": "gear",
        "u": "https://www.gbase.com/gear?q={{{s}}}"
    },
    {
        "d": "geecr.com",
        "b": "geecr",
        "u": "https://geecr.com/search/{{{s}}}"
    },
    {
        "d": "www.geekbuying.com",
        "b": "geekbuying",
        "u": "http://www.geekbuying.com/Search/?keyword={{{s}}}"
    },
    {
        "d": "geizhals.eu",
        "b": "geiz",
        "u": "https://geizhals.eu/?fs={{{s}}}"
    },
    {
        "d": "geizhals.at",
        "b": "geizhalsat",
        "u": "https://geizhals.at/?in=&fs={{{s}}}"
    },
    {
        "d": "geizhals.de",
        "b": "geizhalsde",
        "u": "http://geizhals.de/?fs={{{s}}}&in="
    },
    {
        "d": "geizhals.at",
        "b": "geizhals",
        "u": "http://geizhals.at/eu/?in=&fs={{{s}}}"
    },
    {
        "d": "bienenzuchtbedarf-geller.de",
        "b": "geller",
        "u": "https://bienenzuchtbedarf-geller.de/shop/search?sSearch={{{s}}}"
    },
    {
        "d": "www.getchu.com",
        "b": "getchu",
        "u": "http://www.getchu.com/php/nsearch.phtml?search_keyword={{{s}}}"
    },
    {
        "d": "getdeals.co.in",
        "b": "getdeals",
        "u": "https://getdeals.co.in/search?q={{{s}}}"
    },
    {
        "d": "www.gettyimages.com",
        "b": "getty",
        "u": "https://www.gettyimages.com/photos/{{{s}}}"
    },
    {
        "d": "gamegator.net",
        "b": "ggnet",
        "u": "https://gamegator.net/search.php?q={{{s}}}"
    },
    {
        "d": "geizhals.at",
        "b": "ghat",
        "u": "https://geizhals.at/?in=&fs={{{s}}}"
    },
    {
        "d": "geizhals.de",
        "b": "ghde",
        "u": "https://geizhals.de/?fs={{{s}}}"
    },
    {
        "d": "www.gibert.com",
        "b": "gibert",
        "u": "https://www.gibert.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "geizhals.at",
        "b": "giez",
        "u": "http://geizhals.at/eu/?in=&fs={{{s}}}"
    },
    {
        "d": "geizhals.at",
        "b": "giezhals",
        "u": "http://geizhals.at/eu/?in=&fs={{{s}}}"
    },
    {
        "d": "community.giffgaff.com",
        "b": "giffgaff",
        "u": "http://community.giffgaff.com/t5/forums/searchpage/tab/message?q={{{s}}}"
    },
    {
        "d": "giga-cultures.com",
        "b": "giga-cultures",
        "u": "http://giga-cultures.com/recherche?controller=search&search_query={{{s}}}:"
    },
    {
        "d": "www.gigantti.fi",
        "b": "gigantti",
        "u": "http://www.gigantti.fi/search?SearchTerm={{{s}}}"
    },
    {
        "d": "www.gittigidiyor.com",
        "b": "gittigidiyor",
        "u": "http://www.gittigidiyor.com/arama/?k={{{s}}}"
    },
    {
        "d": "www.gjensidige.no",
        "b": "gjensidige",
        "u": "https://www.gjensidige.no/s%C3%B8k?query={{{s}}}"
    },
    {
        "d": "gladrys.com",
        "b": "gladrys",
        "u": "http://gladrys.com/search0results-plant{{{s}}}.html"
    },
    {
        "d": "www.globetrotter.de",
        "b": "globetrotter",
        "u": "https://www.globetrotter.de/search?q={{{s}}}"
    },
    {
        "d": "glyde.com",
        "b": "glyde",
        "u": "http://glyde.com/stores/glyde#!display_as=2&s_query={{{s}}}"
    },
    {
        "d": "search.gmarket.co.kr",
        "b": "gmarket",
        "u": "http://search.gmarket.co.kr/search.aspx?keyword={{{s}}}"
    },
    {
        "d": "www.gme.cz",
        "b": "gme",
        "u": "https://www.gme.cz/vysledky-vyhledavani?search_keyword= {{{s}}}"
    },
    {
        "d": "www.greenmangaming.com",
        "b": "gmgf",
        "u": "https://www.greenmangaming.com/search/{{{s}}}"
    },
    {
        "d": "www.greenmangaming.com",
        "b": "gmg",
        "u": "https://www.greenmangaming.com/search/{{{s}}}"
    },
    {
        "d": "gumroad.com",
        "b": "gmr",
        "u": "https://gumroad.com/discover?query={{{s}}}"
    },
    {
        "d": "www.goatbots.com",
        "b": "goat",
        "u": "https://www.goatbots.com/search/{{{s}}}"
    },
    {
        "d": "gobago.it",
        "b": "gobago",
        "u": "https://gobago.it/?q={{{s}}}"
    },
    {
        "d": "www.gocompare.com",
        "b": "gocompare",
        "u": "http://www.gocompare.com/searchresults/?q={{{s}}}"
    },
    {
        "d": "m.banggood.com",
        "b": "good",
        "u": "https://m.banggood.com/search/{{{s}}}.html"
    },
    {
        "d": "www.thegoodguys.com.au",
        "b": "goodguys",
        "u": "https://www.thegoodguys.com.au/SearchDisplay?categoryId=&storeId=900&catalogId=30000&langId=-1&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&beginIndex=0&orderBy=0&pageSize=60&searchTerm={{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "googleplay",
        "u": "https://play.google.com/store/search?q={{{s}}}"
    },
    {
        "d": "thegooodshop.com",
        "b": "goood",
        "u": "https://thegooodshop.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.gorila.sk",
        "b": "gorila",
        "u": "https://www.gorila.sk/vyhladavanie?q={{{s}}}"
    },
    {
        "d": "www.gorillasports.de",
        "b": "gorilla",
        "u": "https://www.gorillasports.de/search?page=search&page_action=query&desc=on&sdesc=on&keywords={{{s}}}"
    },
    {
        "d": "www.gouletpens.com",
        "b": "gouletpens",
        "u": "https://www.gouletpens.com/pages/search-results?limit=24&q={{{s}}}"
    },
    {
        "d": "www.gouletpens.com",
        "b": "goulet",
        "u": "https://www.gouletpens.com/pages/search-results?limit=24&q={{{s}}}"
    },
    {
        "d": "www.gowifi.co.nz",
        "b": "gowifi",
        "u": "http://www.gowifi.co.nz/product-search.html?keyword={{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "gpb",
        "u": "https://play.google.com/store/search?c=books&q={{{s}}}"
    },
    {
        "d": "www.gouletpens.com",
        "b": "gpens",
        "u": "https://www.gouletpens.com/pages/search-results?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gps",
        "u": "https://www.google.com/search?hl=en&tbm=shop&q={{{s}}}"
    },
    {
        "d": "www.grailed.com",
        "b": "grailed",
        "u": "http://www.grailed.com/search?search={{{s}}} "
    },
    {
        "d": "www.grainger.com",
        "b": "grainger",
        "u": "http://www.grainger.com/search?nls=1&searchQuery={{{s}}} "
    },
    {
        "d": "graphicriver.net",
        "b": "graphicriver",
        "u": "http://graphicriver.net/search?utf8=%E2%9C%93&term={{{s}}}"
    },
    {
        "d": "www.grillscatalog.com",
        "b": "grills",
        "u": "https://www.grillscatalog.com/?s={{{s}}}"
    },
    {
        "d": "groenewaterman.mijnboekhandelaar.com",
        "b": "groene",
        "u": "http://groenewaterman.mijnboekhandelaar.com/index.php?option=com_mbhbooksearch&Itemid=10008&task=gosearch&query={{{s}}}"
    },
    {
        "d": "www.grosbill.com",
        "b": "grosbill",
        "u": "https://www.grosbill.com/catv2.cgi?mode=recherche&recherche={{{s}}}"
    },
    {
        "d": "www.grossoshop.net",
        "b": "grossoshop",
        "u": "http://www.grossoshop.net/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "groupees.com",
        "b": "groupees",
        "u": "https://groupees.com/?q={{{s}}}:"
    },
    {
        "d": "www.groupon.com",
        "b": "groupon",
        "u": "https://www.groupon.com/browse/?query={{{s}}}"
    },
    {
        "d": "www.grubhub.com",
        "b": "grub",
        "u": "https://www.grubhub.com/search/?cuisine={{{s}}}"
    },
    {
        "d": "www.grubhub.com",
        "b": "grubhub",
        "u": "https://www.grubhub.com/search?queryText={{{s}}}"
    },
    {
        "d": "www.gsaadvantage.gov",
        "b": "gsa",
        "u": "https://www.gsaadvantage.gov/advantage/s/search.do?q=0:0{{{s}}}&db=0&searchType=1"
    },
    {
        "d": "www.google.com.au",
        "b": "gsau",
        "u": "https://www.google.com.au/search?biw=1920&bih=947&tbm=shop&q={{{s}}}"
    },
    {
        "d": "www.google.com.br",
        "b": "gsbr",
        "u": "http://www.google.com.br/search?q={{{s}}}&hl=pt-BR&safe=off&biw=1108&bih=651&prmd=imvns&source=univ&tbm=shop&tbo=u&sa=X&ei=ZculTqjGLcvAgQf5n_CxBQ&ved=0CJkBEK0E"
    },
    {
        "d": "www.google.es",
        "b": "gs.es",
        "u": "https://www.google.es/search?tbm=shop&q={{{s}}}"
    },
    {
        "d": "www.google.it",
        "b": "gsit",
        "u": "https://www.google.it/search?hl=it&tbm=shop&q={{{s}}}"
    },
    {
        "d": "www.gsmpunt.nl",
        "b": "gsmpunt",
        "u": "https://www.gsmpunt.nl/zoeken?z={{{s}}}"
    },
    {
        "d": "www.gsport.no",
        "b": "gsport",
        "u": "https://www.gsport.no/magento/sok?q={{{s}}}"
    },
    {
        "d": "store.google.com",
        "b": "gstore",
        "u": "https://store.google.com/search?q={{{s}}}"
    },
    {
        "d": "www.google.co.uk",
        "b": "gsuk",
        "u": "http://www.google.co.uk/search?q={{{s}}}&tbm=shop"
    },
    {
        "d": "www.google.com",
        "b": "gsus",
        "u": "https://www.google.com/search?tbm=shop&q={{{s}}}&gws_rd=cr"
    },
    {
        "d": "www.google.com",
        "b": "gsx",
        "u": "https://www.google.com/shopping/express/#SearchResultsPlace:s=0&c=24&q={{{s}}}"
    },
    {
        "d": "www.gumtree.com.au",
        "b": "gtau",
        "u": "http://www.gumtree.com.au/s-{{{s}}}/k0"
    },
    {
        "d": "www.gucci.com",
        "b": "gucci",
        "u": "https://www.gucci.com/fr/fr/search?search-cat=header-search&text={{{s}}}"
    },
    {
        "d": "www.guenstiger.de",
        "b": "gue",
        "u": "http://www.guenstiger.de/Katalog/Preis.pl?suche={{{s}}}"
    },
    {
        "d": "www.guenstiger.de",
        "b": "guenstiger",
        "u": "http://www.guenstiger.de/Katalog/Preis.pl?suche={{{s}}}"
    },
    {
        "d": "www.gumtree.com.au",
        "b": "gumau",
        "u": "http://www.gumtree.com.au/s-{{{s}}}/k0"
    },
    {
        "d": "www.gumtree.com.au",
        "b": "gumtreeau",
        "u": "http://www.gumtree.com.au/s-{{{s}}}/k0"
    },
    {
        "d": "www.gumtree.com.au",
        "b": "gumtree",
        "u": "http://www.gumtree.com.au/s-melbourne/{{{s}}} /k0l3001317"
    },
    {
        "d": "www.gumtree.pl",
        "b": "gumtreepl",
        "u": "https://www.gumtree.pl/s-{{{s}}}/v1q0p1"
    },
    {
        "d": "www.gumtree.com",
        "b": "gumtreeuk",
        "u": "https://www.gumtree.com/search?search_category=all&q={{{s}}}"
    },
    {
        "d": "www.gumtree.co.za",
        "b": "gumtreeza",
        "u": "https://www.gumtree.co.za/s-{{{s}}}/v1q0p1"
    },
    {
        "d": "www.gunbroker.com",
        "b": "gunbroker",
        "u": "http://www.gunbroker.com/All/BI.aspx?Keywords={{{s}}}"
    },
    {
        "d": "gun.deals",
        "b": "gundeals",
        "u": "https://gun.deals/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "www.gunengine.com",
        "b": "gunengine",
        "u": "http://www.gunengine.com/guns?q={{{s}}}"
    },
    {
        "d": "gunmagwarehouse.com",
        "b": "gunmag",
        "u": "https://gunmagwarehouse.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "gunwatcher.com",
        "b": "gunwatcher",
        "u": "https://gunwatcher.com/Search/{{{s}}}"
    },
    {
        "d": "www.gurtbandlager.de",
        "b": "gurtband",
        "u": "https://www.gurtbandlager.de/search?sSearch={{{s}}}"
    },
    {
        "d": "www.games-workshop.com",
        "b": "gwes",
        "u": "https://www.games-workshop.com/es-ES/searchResults?_dyncharset=UTF-8&_dynSessConf=7453102396832862391&qty=&sorting=&view=&Ntt={{{s}}}"
    },
    {
        "d": "www.geizhals.at",
        "b": "gzh",
        "u": "http://www.geizhals.at/eu/?such={{{s}}}"
    },
    {
        "d": "www.h2olimpo.com",
        "b": "h2",
        "u": "http://www.h2olimpo.com/buscar?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search="
    },
    {
        "d": "www.h2olimpo.com",
        "b": "h2o",
        "u": "http://www.h2olimpo.com/buscar?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search="
    },
    {
        "d": "handmade-add.com",
        "b": "hadd",
        "u": "https://handmade-add.com/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.hafele.nl",
        "b": "hafelenl",
        "u": "https://www.hafele.nl/INTERSHOP/web/WFS/Haefele-HNL-Site/nl_NL/-/EUR/ViewParametricSearch-SimpleOfferSearch?SearchType=all&SearchTerm={{{s}}}"
    },
    {
        "d": "handmade-add.com",
        "b": "handmadeadd",
        "u": "https://handmade-add.com/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.handytarife.de",
        "b": "handytarife",
        "u": "https://www.handytarife.de/?q={{{s}}}"
    },
    {
        "d": "www.hannaford.com",
        "b": "hannaford",
        "u": "http://www.hannaford.com/catalog/search.cmd?form_state=searchForm&keyword={{{s}}}"
    },
    {
        "d": "www.hapshoe.com",
        "b": "hapshoe",
        "u": "https://www.hapshoe.com/Arama?1&kelime={{{s}}}"
    },
    {
        "d": "www.harney.com",
        "b": "harney",
        "u": "https://www.harney.com/pages/search-results?findify_q={{{s}}}"
    },
    {
        "d": "hawkclothing.uk",
        "b": "hawk",
        "u": "http://hawkclothing.uk/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.hornbach.at",
        "b": "hbat",
        "u": "https://www.hornbach.at/shop/suche/sortiment/{{{s}}}"
    },
    {
        "d": "www.homedepot.ca",
        "b": "hdc",
        "u": "https://www.homedepot.ca/en/home/search.html?q={{{s}}}"
    },
    {
        "d": "search.datasheetcatalog.net",
        "b": "hds",
        "u": "http://search.datasheetcatalog.net/key/{{{s}}}"
    },
    {
        "d": "www.homedepot.com",
        "b": "hdx",
        "u": "http://www.homedepot.com/s/{{{s}}}"
    },
    {
        "d": "www.head-fi.org",
        "b": "headfi",
        "u": "https://www.head-fi.org/search/9458473/?q={{{s}}}&o=relevance&c[p][sonnb_xengallery_photo][focal]=0&c[p][sonnb_xengallery_photo][iso]=0&c[p][sonnb_xengallery_photo][aperture]=0"
    },
    {
        "d": "www.heatershop.co.uk",
        "b": "heaters",
        "u": "https://www.heatershop.co.uk/search?query={{{s}}}"
    },
    {
        "d": "www.heb.com",
        "b": "heb",
        "u": "https://www.heb.com/search/?q={{{s}}}"
    },
    {
        "d": "www.helm.nu",
        "b": "helm",
        "u": "http://www.helm.nu/Pages/Search.aspx?search={{{s}}}"
    },
    {
        "d": "www.hema.nl",
        "b": "hema",
        "u": "https://www.hema.nl/search?q={{{s}}}&lang=nl_NL"
    },
    {
        "d": "www.henna-boy.co.uk",
        "b": "henna",
        "u": "https://www.henna-boy.co.uk/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.henrys.com",
        "b": "henry",
        "u": "https://www.henrys.com/Search/{{{s}}}.aspx?q={{{s}}}"
    },
    {
        "d": "www.henrys.com",
        "b": "henrysphoto",
        "u": "https://www.henrys.com/Search/{{{s}}}.aspx?q={{{s}}}"
    },
    {
        "d": "www.hepsiburada.com",
        "b": "hepsib",
        "u": "http://www.hepsiburada.com/ara?q={{{s}}}"
    },
    {
        "d": "www.hepsiburada.com",
        "b": "hepsiburada",
        "u": "http://www.hepsiburada.com/ara?q={{{s}}}"
    },
    {
        "d": "www.heureka.cz",
        "b": "heureka",
        "u": "http://www.heureka.cz/?h[fraze]={{{s}}}"
    },
    {
        "d": "www.heureka.sk",
        "b": "heurekask",
        "u": "http://www.heureka.sk/?h[fraze]={{{s}}} "
    },
    {
        "d": "www.hfqpdb.com",
        "b": "hfqpdb",
        "u": "http://www.hfqpdb.com/search/{{{s}}}"
    },
    {
        "d": "www.hifishark.com",
        "b": "hfs",
        "u": "https://www.hifishark.com/search?q={{{s}}}"
    },
    {
        "d": "www.harborfreight.com",
        "b": "hft",
        "u": "http://www.harborfreight.com/catalogsearch/result?q={{{s}}}"
    },
    {
        "d": "www.homehardware.ca",
        "b": "hh",
        "u": "https://www.homehardware.ca/search?query={{{s}}}"
    },
    {
        "d": "www.highsnobiety.com",
        "b": "highsnob",
        "u": "http://www.highsnobiety.com/?s={{{s}}}"
    },
    {
        "d": "www.hihostels.com",
        "b": "hihostels",
        "u": "https://www.hihostels.com/search/hostels?q={{{s}}}"
    },
    {
        "d": "hinta.fi",
        "b": "hintafi",
        "u": "http://hinta.fi/haku?q={{{s}}}"
    },
    {
        "d": "hintaseuranta.fi",
        "b": "hinta",
        "u": "http://hintaseuranta.fi/haku/{{{s}}}"
    },
    {
        "d": "www.hive.co.uk",
        "b": "hive",
        "u": "https://www.hive.co.uk/Search/Keyword?keyword={{{s}}}"
    },
    {
        "d": "hlj.com",
        "b": "hlj",
        "u": "https://hlj.com/search/go?w={{{s}}}"
    },
    {
        "d": "www.harald-nyborg.dk",
        "b": "hndk",
        "u": "https://www.harald-nyborg.dk/search?q={{{s}}}"
    },
    {
        "d": "www.harald-nyborg.se",
        "b": "hnse",
        "u": "http://www.harald-nyborg.se/search?q={{{s}}}"
    },
    {
        "d": "hobbyking.com",
        "b": "hobbyking",
        "u": "https://hobbyking.com/en_us/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.hobbyworks.com",
        "b": "hobbyworks",
        "u": "https://www.hobbyworks.com/index.cfm?action=search&searchText={{{s}}}"
    },
    {
        "d": "www.hockeymonkey.com",
        "b": "hockeymonkey",
        "u": "http://www.hockeymonkey.com/nsearch?q={{{s}}}"
    },
    {
        "d": "www.homedepot.com",
        "b": "hode",
        "u": "http://www.homedepot.com/s/{{{s}}}?NCNI-5"
    },
    {
        "d": "www.hollandandbarrett.com",
        "b": "hollbarr",
        "u": "https://www.hollandandbarrett.com/search?query={{{s}}}&isSearch=true"
    },
    {
        "d": "www.homebase.co.uk",
        "b": "homebase",
        "u": "http://www.homebase.co.uk/webapp/wcs/stores/servlet/Search?storeId=10151&catalogId=1500001201&langId=110&searchTerms={{{s}}}&authToken="
    },
    {
        "d": "www.homedepot.ca",
        "b": "homedepotca",
        "u": "https://www.homedepot.ca/en/home/search.html?q={{{s}}}#!q={{{s}}}"
    },
    {
        "d": "www.homedepot.com",
        "b": "homedepot",
        "u": "https://www.homedepot.com/s/{{{s}}}"
    },
    {
        "d": "www.homeadvisor.com",
        "b": "home",
        "u": "http://www.homeadvisor.com/sitesearch/searchQuery?action=SEARCH&searchType=SiteTaskSearch&useExtSearch=false&initialSearch=true&query={{{s}}}"
    },
    {
        "d": "www.hood.de",
        "b": "hood",
        "u": "https://www.hood.de/suchergebnisse.htm?q={{{s}}}"
    },
    {
        "d": "www.hornbach.de",
        "b": "hornbach",
        "u": "https://www.hornbach.de/shop/suche/sortiment/{{{s}}}"
    },
    {
        "d": "hotels.com",
        "b": "hotel",
        "u": "https://hotels.com/search.do?q-destination={{{s}}}"
    },
    {
        "d": "hotels.com",
        "b": "hotels",
        "u": "https://hotels.com/search.do?q-destination={{{s}}}"
    },
    {
        "d": "hotline.ua",
        "b": "hotline",
        "u": "http://hotline.ua/sr/?q={{{s}}}"
    },
    {
        "d": "www.hottopic.com",
        "b": "hottopic",
        "u": "http://www.hottopic.com/search?q={{{s}}}"
    },
    {
        "d": "www.hotukdeals.com",
        "b": "hotukdeals",
        "u": "http://www.hotukdeals.com/search?action=search&keywords={{{s}}}"
    },
    {
        "d": "www.housetrip.com",
        "b": "housetrip",
        "u": "http://www.housetrip.com/en/search-holiday-apartments/{{{s}}}?guests=2"
    },
    {
        "d": "www.howardpianoindustries.com",
        "b": "howard",
        "u": "https://www.howardpianoindustries.com/search.php?search_query={{{s}}}"
    },
    {
        "d": "hpecas.com",
        "b": "hpecas",
        "u": "https://hpecas.com/pesquisa?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search="
    },
    {
        "d": "www.heise.de",
        "b": "hpv",
        "u": "http://www.heise.de/preisvergleich/?fs={{{s}}}"
    },
    {
        "d": "consumer.huawei.com",
        "b": "huawei",
        "u": "http://consumer.huawei.com/en/search/index.htm?keywords={{{s}}}"
    },
    {
        "d": "www.hotukdeals.com",
        "b": "hukd",
        "u": "http://www.hotukdeals.com/search?action=search&keywords={{{s}}}"
    },
    {
        "d": "www.humblebundle.com",
        "b": "humblebest",
        "u": "https://www.humblebundle.com/store/search?sort=bestselling&search={{{s}}}"
    },
    {
        "d": "www.humblebundle.com",
        "b": "humbledeals",
        "u": "https://www.humblebundle.com/store/search?sort=discount&search={{{s}}}"
    },
    {
        "d": "www.huuto.net",
        "b": "huuto",
        "u": "http://www.huuto.net/hakutulos?words={{{s}}}"
    },
    {
        "d": "www.hinnavaatlus.ee",
        "b": "hv",
        "u": "http://www.hinnavaatlus.ee/search/?Type=products&Query={{{s}}}"
    },
    {
        "d": "www.harveynorman.com.au",
        "b": "hvnorman",
        "u": "https://www.harveynorman.com.au/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.hv-store.de",
        "b": "hvstore",
        "u": "https://www.hv-store.de/navi.php?qs={{{s}}}: "
    },
    {
        "d": "www.hy-vee.com",
        "b": "hyvee",
        "u": "https://www.hy-vee.com/grocery/search?search={{{s}}}"
    },
    {
        "d": "www.ibergour.fr",
        "b": "ibergourfr",
        "u": "https://www.ibergour.fr/fr/search?query={{{s}}}"
    },
    {
        "d": "www.iberlibro.com",
        "b": "iberlibro",
        "u": "https://www.iberlibro.com/servlet/SearchResults?sts=t&an=&tn=&kn={{{s}}}&isbn="
    },
    {
        "d": "www.ibhejo.com",
        "b": "ibhejo",
        "u": "http://www.ibhejo.com/ssearch.php?simple_search=Y&mode=search&search_substring={{{s}}}&sort_by=high"
    },
    {
        "d": "www.ibs.it",
        "b": "ibs",
        "u": "https://www.ibs.it/search/?ts=as&query={{{s}}}"
    },
    {
        "d": "www.i-comparateur.com",
        "b": "icomp",
        "u": "http://www.i-comparateur.com/search.aspx?q={{{s}}}"
    },
    {
        "d": "www.icstation.com",
        "b": "icstation",
        "u": "http://www.icstation.com/advanced_search_result.php?keywords={{{s}}}&search_in_description=1"
    },
    {
        "d": "www.idealworld.tv",
        "b": "ideal",
        "u": "http://www.idealworld.tv/search/{{{s}}}?fh_location=//IdealWorld/en_GB/$s={{{s}}}&gs={{{s}}}"
    },
    {
        "d": "www.idealo.de",
        "b": "idealode",
        "u": "http://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q={{{s}}}"
    },
    {
        "d": "www.idealo.es",
        "b": "idealoes",
        "u": "https://www.idealo.es/resultados.html?q={{{s}}}"
    },
    {
        "d": "www.idealo.de",
        "b": "idealo",
        "u": "http://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q={{{s}}}"
    },
    {
        "d": "www.idee-shop.com",
        "b": "idee",
        "u": "https://www.idee-shop.com/search?sSearch={{{s}}}"
    },
    {
        "d": "www.idefix.com",
        "b": "idefix",
        "u": "https://www.idefix.com/search/?Q={{{s}}}"
    },
    {
        "d": "www.idealo.de",
        "b": "ide",
        "u": "http://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q={{{s}}}"
    },
    {
        "d": "www.idealo.es",
        "b": "ides",
        "u": "https://www.idealo.es/resultados.html?q={{{s}}}"
    },
    {
        "d": "www.idealo.fr",
        "b": "idfr",
        "u": "https://www.idealo.fr/prechcat.html?q={{{s}}} "
    },
    {
        "d": "www.idealo.de",
        "b": "id",
        "u": "http://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q={{{s}}}"
    },
    {
        "d": "www.iga.net",
        "b": "iga",
        "u": "https://www.iga.net/en/search?k={{{s}}}"
    },
    {
        "d": "iherb.com",
        "b": "iherb",
        "u": "https://iherb.com/search?kw={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeaat",
        "u": "https://www.ikea.com/at/de/search/products/?q={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeaau",
        "u": "http://www.ikea.com/au/en/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeabe",
        "u": "http://www.ikea.com/be/nl/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeaca",
        "u": "https://www.ikea.com/ca/en/search/products/?q={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeach",
        "u": "http://www.ikea.com/ch/de/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeacs",
        "u": "https://www.ikea.com/cz/cs/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeade",
        "u": "https://www.ikea.com/de/de/search/products/?q={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeaes",
        "u": "https://www.ikea.com/es/es/search/products/?q={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeafr",
        "u": "http://www.ikea.com/fr/fr/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeaie",
        "u": "http://www.ikea.com/ie/en/search/?query={{{s}}} "
    },
    {
        "d": "www.ikea.com",
        "b": "ikea",
        "u": "http://www.ikea.com/us/en/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeait",
        "u": "http://www.ikea.com/it/it/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeanl",
        "u": "https://www.ikea.com/nl/nl/search/?q={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeapl",
        "u": "https://www.ikea.com/pl/pl/search/?query={{{s}}}"
    },
    {
        "d": "www.ikea.com",
        "b": "ikeauk",
        "u": "https://www.ikea.com/gb/en/search/products/?q={{{s}}}"
    },
    {
        "d": "ikman.lk",
        "b": "ikman",
        "u": "https://ikman.lk/en/ads?query={{{s}}}"
    },
    {
        "d": "www.impericon.com",
        "b": "impericonde",
        "u": "http://www.impericon.com/de/advancedsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.impericon.com",
        "b": "impericonuk",
        "u": "http://www.impericon.com/uk/advancedsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.ineedabargain.com",
        "b": "inab",
        "u": "http://www.ineedabargain.com/deals/search?q={{{s}}} "
    },
    {
        "d": "www.incensepro.com",
        "b": "incense",
        "u": "https://www.incensepro.com/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.incredible.co.za",
        "b": "incredible",
        "u": "https://www.incredible.co.za/search/?q={{{s}}}"
    },
    {
        "d": "www.indiabookstore.net",
        "b": "indiabookstore",
        "u": "https://www.indiabookstore.net/search?q={{{s}}}"
    },
    {
        "d": "dir.indiamart.com",
        "b": "indiamart",
        "u": "http://dir.indiamart.com/cgi/catprdsearch.mp?ss={{{s}}}"
    },
    {
        "d": "www.indiegogo.com",
        "b": "indiegogo",
        "u": "https://www.indiegogo.com/search#/?q={{{s}}}"
    },
    {
        "d": "www.indiemerchstore.com",
        "b": "indiemerch",
        "u": "https://www.indiemerchstore.com/search?q={{{s}}}"
    },
    {
        "d": "www.indyaconnects.com",
        "b": "indyaconnects",
        "u": "http://www.indyaconnects.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.inet.se",
        "b": "inet",
        "u": "http://www.inet.se/hitta?q={{{s}}}"
    },
    {
        "d": "www.inktweb.nl",
        "b": "inktweb",
        "u": "https://www.inktweb.nl/search.php?search={{{s}}}"
    },
    {
        "d": "www.innerfidelity.com",
        "b": "innerf",
        "u": "http://www.innerfidelity.com/search/node/{{{s}}}"
    },
    {
        "d": "innerlightcrystals.co.uk",
        "b": "innerlightcrystals",
        "u": "https://innerlightcrystals.co.uk/sales/index.php?main_page=advanced_search_result&keyword={{{s}}}&search_in_description=1"
    },
    {
        "d": "www.instant-gaming.com",
        "b": "instantgaming",
        "u": "https://www.instant-gaming.com/en/search/?q={{{s}}}"
    },
    {
        "d": "www.interencheres.com",
        "b": "inter",
        "u": "https://www.interencheres.com/recherche/lots?search={{{s}}}&area=france"
    },
    {
        "d": "www.intersport.se",
        "b": "intersport",
        "u": "https://www.intersport.se/soksida/?q={{{s}}}"
    },
    {
        "d": "intheclouds.io",
        "b": "intheclouds",
        "u": "https://intheclouds.io/search?q={{{s}}}"
    },
    {
        "d": "ioteksperten.dk",
        "b": "ioteksperten",
        "u": "https://ioteksperten.dk/?s={{{s}}}&post_type=product"
    },
    {
        "d": "iprice.my",
        "b": "iprice",
        "u": "https://iprice.my/search/?term={{{s}}}"
    },
    {
        "d": "irecommend.ru",
        "b": "irecommend",
        "u": "http://irecommend.ru/srch?query={{{s}}}"
    },
    {
        "d": "www.isbns.net",
        "b": "isb",
        "u": "http://www.isbns.net/search/?query={{{s}}} "
    },
    {
        "d": "islamicboighor.com",
        "b": "islamicboighor",
        "u": "http://islamicboighor.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "isthereanydeal.com",
        "b": "isthereanydeal",
        "u": "https://isthereanydeal.com/search/?q={{{s}}}"
    },
    {
        "d": "www.istoric-preturi.info",
        "b": "istoric-preturi",
        "u": "https://www.istoric-preturi.info/search/{{{s}}}"
    },
    {
        "d": "isthereanydeal.com",
        "b": "itad",
        "u": "https://isthereanydeal.com/search/?q={{{s}}}"
    },
    {
        "d": "www.iwoot.com",
        "b": "iwoot",
        "u": "http://www.iwoot.com/elysium.search?search={{{s}}}"
    },
    {
        "d": "www.jabong.com",
        "b": "jab",
        "u": "https://www.jabong.com/find/{{{s}}}"
    },
    {
        "d": "www.jal.co.jp",
        "b": "jal",
        "u": "http://www.jal.co.jp/cgi-bin/jal/insite_search/index.cgi?keyword={{{s}}}&collection=jalcojp&charset=shift_jis"
    },
    {
        "d": "www.jaycar.co.nz",
        "b": "jaycar",
        "u": "https://www.jaycar.co.nz/search/?q={{{s}}}"
    },
    {
        "d": "www.jaycar.com.au",
        "b": "jay",
        "u": "http://www.jaycar.com.au/search?text={{{s}}}"
    },
    {
        "d": "www.jbhifi.com.au",
        "b": "jbhifi",
        "u": "http://www.jbhifi.com.au/?q={{{s}}}"
    },
    {
        "d": "chaitan.cloudapp.net",
        "b": "jcomp",
        "u": "http://chaitan.cloudapp.net/justcompare/search?q={{{s}}}"
    },
    {
        "d": "www.jdlighting.com.au",
        "b": "jdl",
        "u": "https://www.jdlighting.com.au/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "search.jd.com",
        "b": "jd",
        "u": "http://search.jd.com/Search?keyword={{{s}}}&enc=utf-8"
    },
    {
        "d": "www.jegs.com",
        "b": "jegs",
        "u": "https://www.jegs.com/webapp/wcs/stores/servlet/SearchResultsPageCmd?Ntt={{{s}}}"
    },
    {
        "d": "www.jensonusa.com",
        "b": "jensonusa",
        "u": "http://www.jensonusa.com/search?q={{{s}}}"
    },
    {
        "d": "jet.com",
        "b": "jet",
        "u": "https://jet.com/search?term={{{s}}}"
    },
    {
        "d": "www.jetpens.com",
        "b": "jetpens",
        "u": "http://www.jetpens.com/search?q={{{s}}}"
    },
    {
        "d": "www.jimms.fi",
        "b": "jimms",
        "u": "https://www.jimms.fi/fi/Product/Search?q={{{s}}}"
    },
    {
        "d": "jet.com",
        "b": "j",
        "u": "https://jet.com/search?term={{{s}}}"
    },
    {
        "d": "www.johnlewis.com",
        "b": "jl",
        "u": "http://www.johnlewis.com/Search/Search.aspx?SearchTerm={{{s}}}"
    },
    {
        "d": "www.joann.com",
        "b": "joann",
        "u": "https://www.joann.com/search?q={{{s}}}"
    },
    {
        "d": "www.joefresh.com",
        "b": "joefresh",
        "u": "https://www.joefresh.com/search?text={{{s}}}"
    },
    {
        "d": "www.jofogas.hu",
        "b": "jofogas",
        "u": "http://www.jofogas.hu/magyarorszag?q={{{s}}}"
    },
    {
        "d": "www.johnlewis.com",
        "b": "johnlewis",
        "u": "http://www.johnlewis.com/Search/Search.aspx?SearchTerm={{{s}}}"
    },
    {
        "d": "www.jotrin.com",
        "b": "jo",
        "u": "https://www.jotrin.com/product/list?keyword={{{s}}}"
    },
    {
        "d": "www.joom.com",
        "b": "joom",
        "u": "https://www.joom.com/en/search/q.{{{s}}}"
    },
    {
        "d": "www.jpc.de",
        "b": "jpc",
        "u": "https://www.jpc.de/s/{{{s}}}"
    },
    {
        "d": "www.jetpens.com",
        "b": "jp",
        "u": "http://www.jetpens.com/search?q={{{s}}}"
    },
    {
        "d": "www.johnstonesupply.com",
        "b": "jssupply",
        "u": "https://www.johnstonesupply.com/search/go?w={{{s}}}"
    },
    {
        "d": "www.jualusg2d3dmurah.com",
        "b": "jualusg",
        "u": "https://www.jualusg2d3dmurah.com/search?q={{{s}}}"
    },
    {
        "d": "www.jula.se",
        "b": "jula",
        "u": "https://www.jula.se/search/?query={{{s}}}"
    },
    {
        "d": "www.jumbo.pt",
        "b": "jumbo",
        "u": "https://www.jumbo.pt/Frontoffice/search/{{{s}}}"
    },
    {
        "d": "www.jumbo.com",
        "b": "jumbosupermarkt",
        "u": "http://www.jumbo.com/zoeken?SearchTerm={{{s}}}"
    },
    {
        "d": "www.justimprinted.com",
        "b": "justimprinted",
        "u": "https://www.justimprinted.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "justwalkers.com",
        "b": "justwalkers",
        "u": "http://justwalkers.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.juwelo.es",
        "b": "juwelo",
        "u": "https://www.juwelo.es/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.japanesevehicles.com",
        "b": "jvj",
        "u": "https://www.japanesevehicles.com/stocklist.php?qsearch_kbn=1&lang=en&opt=0&qsearch={{{s}}}"
    },
    {
        "d": "www.jwpepper.com",
        "b": "jwpepper",
        "u": "http://www.jwpepper.com/sheet-music/search.jsp?keywords={{{s}}}"
    },
    {
        "d": "www.jwpepper.com",
        "b": "jwp",
        "u": "http://www.jwpepper.com/sheet-music/search.jsp?keywords={{{s}}}"
    },
    {
        "d": "www.kaartje2go.nl",
        "b": "kaartje",
        "u": "https://www.kaartje2go.nl/zoeken?q={{{s}}}"
    },
    {
        "d": "www.kabum.com.br",
        "b": "kabum",
        "u": "https://www.kabum.com.br/cgi-local/site/listagem/listagem.cgi?string={{{s}}}&btnG="
    },
    {
        "d": "kaffee.citadella.de",
        "b": "kaffee",
        "u": "https://kaffee.citadella.de/de/suche?controller=search&s={{{s}}}"
    },
    {
        "d": "kakaku.com",
        "b": "kakaku",
        "u": "http://kakaku.com/search_results/{{{s}}}"
    },
    {
        "d": "kangarookarry.com",
        "b": "kangaroo",
        "u": "https://kangarookarry.com/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.karmaplace.com",
        "b": "KarmaPlace",
        "u": "http://www.karmaplace.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.kaskus.co.id",
        "b": "kas",
        "u": "http://www.kaskus.co.id/search?q={{{s}}}"
    },
    {
        "d": "www.kaskus.co.id",
        "b": "kaskus",
        "u": "https://www.kaskus.co.id/search?q={{{s}}}"
    },
    {
        "d": "www.kayak.com",
        "b": "kayak",
        "u": "https://www.kayak.com/sherlock/opensearch/search?q={{{s}}}"
    },
    {
        "d": "fegszerviz.hu",
        "b": "kazan",
        "u": "http://fegszerviz.hu/?s={{{s}}}"
    },
    {
        "d": "www.kbb.com",
        "b": "kbb",
        "u": "https://www.kbb.com/search/?source=homepage&query={{{s}}}"
    },
    {
        "d": "kuldnebors.ee",
        "b": "kbors",
        "u": "http://kuldnebors.ee/search/search.mec?search_evt=onsearch&pob_action=search&search_O_string={{{s}}}"
    },
    {
        "d": "keepa.com",
        "b": "keepa",
        "u": "http://keepa.com/#search/x-{{{s}}}"
    },
    {
        "d": "www.keh.com",
        "b": "keh",
        "u": "https://www.keh.com/shop/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "keithspecialty.com",
        "b": "keithspecialty",
        "u": "http://keithspecialty.com/cgi-keithspecialty/sb/productsearch.cgi?storeid=*0ee0f14a0870280c8d&search_field= {{{s}}} "
    },
    {
        "d": "shopping.kelkoo.co.uk",
        "b": "kelkoo",
        "u": "http://shopping.kelkoo.co.uk/ss-{{{s}}}.html"
    },
    {
        "d": "shopping.kelkoo.se",
        "b": "kelkoose",
        "u": "http://shopping.kelkoo.se/ss-{{{s}}}.html"
    },
    {
        "d": "www.keyforsteam.de",
        "b": "kfs",
        "u": "http://www.keyforsteam.de/catalogue/search-{{{s}}}/"
    },
    {
        "d": "www.kieskeurig.nl",
        "b": "kieskeurig",
        "u": "http://www.kieskeurig.nl/zoeken/index.html?q={{{s}}}"
    },
    {
        "d": "www.kijiji.ca",
        "b": "kijijigm",
        "u": "http://www.kijiji.ca/b-grand-montreal/{{{s}}}/k0l80002"
    },
    {
        "d": "www.kijiji.it",
        "b": "kijijiit",
        "u": "http://www.kijiji.it/{{{s}}}/"
    },
    {
        "d": "www.kijiji.ca",
        "b": "kijiji",
        "u": "https://www.kijiji.ca/b-search.html?formSubmit=true&pageNumber=1&searchView=LIST&sortByName=dateDesc&urgentOnly=false&keywords={{{s}}}&SearchCategory=0"
    },
    {
        "d": "www.kijiji.ca",
        "b": "kijijiog",
        "u": "https://www.kijiji.ca/b-ottawa-gatineau-area/{{{s}}}/k0l1700184?dc=true"
    },
    {
        "d": "www.kijiji.ca",
        "b": "kijijiyyc",
        "u": "https://www.kijiji.ca/b-calgary/{{{s}}}/k0l1700199?dc=true"
    },
    {
        "d": "www.kilimall.co.ke",
        "b": "kilimall",
        "u": "https://www.kilimall.co.ke/?act=search&keyword={{{s}}}"
    },
    {
        "d": "www.kimovil.com",
        "b": "kimovil",
        "u": "http://www.kimovil.com/en/compare-smartphones/name.{{{s}}}"
    },
    {
        "d": "www.amazon.cn",
        "b": "kindlecn",
        "u": "https://www.amazon.cn/s?k={{{s}}}&i=digital-text"
    },
    {
        "d": "www.amazon.es",
        "b": "kindlees",
        "u": "https://www.amazon.es/s?k={{{s}}}&i=digital-text"
    },
    {
        "d": "www.amazon.co.jp",
        "b": "kindlejp",
        "u": "https://www.amazon.co.jp/s?k={{{s}}}&i=digital-text"
    },
    {
        "d": "www.kinguin.net",
        "b": "kinguin",
        "u": "http://www.kinguin.net/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "kinige.com",
        "b": "kinige",
        "u": "http://kinige.com/ksearch.php?searchfor={{{s}}}"
    },
    {
        "d": "www.kinokuniya.co.jp",
        "b": "kinokuniya",
        "u": "https://www.kinokuniya.co.jp/disp/CSfDispListPage_001.jsp?qsd=true&ptk=01&q={{{s}}}&SEARCH.x=0&SEARCH.y=0"
    },
    {
        "d": "www.kisskissbankbank.com",
        "b": "kissbb",
        "u": "http://www.kisskissbankbank.com/fr/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.kitapyurdu.com",
        "b": "kitapyurdu",
        "u": "https://www.kitapyurdu.com/index.php?route=product/search&filter_name={{{s}}}"
    },
    {
        "d": "kitkraft.com",
        "b": "kitkraft",
        "u": "http://kitkraft.com/search_a.php?q={{{s}}}"
    },
    {
        "d": "www.kjell.com",
        "b": "kjell",
        "u": "http://www.kjell.com/Sok?query={{{s}}}"
    },
    {
        "d": "www.kjell.com",
        "b": "kjellno",
        "u": "https://www.kjell.com/no/sok?query={{{s}}}"
    },
    {
        "d": "kubekings.com",
        "b": "kk",
        "u": "https://kubekings.com/buscar?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search="
    },
    {
        "d": "www.kuantokusta.pt",
        "b": "kkusta",
        "u": "http://www.kuantokusta.pt/search?q= {{{s}}} "
    },
    {
        "d": "www.ebay-kleinanzeigen.de",
        "b": "klein",
        "u": "https://www.ebay-kleinanzeigen.de/{{{s}}}/k0"
    },
    {
        "d": "www.kmart.com.au",
        "b": "kmartau",
        "u": "https://www.kmart.com.au/webapp/wcs/stores/servlet/SearchDisplay?searchTerm={{{s}}}&categoryId=&storeId=10701&catalogId=10102&langId=-1&pageSize=30&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView="
    },
    {
        "d": "www.kmart.com",
        "b": "kmart",
        "u": "http://www.kmart.com/shc/s/search_10151_10104?keyword={{{s}}}"
    },
    {
        "d": "www.kobo.com",
        "b": "koboca",
        "u": "https://www.kobo.com/ca/en/search?Query={{{s}}}"
    },
    {
        "d": "www.kobo.com",
        "b": "kobonz",
        "u": "https://www.kobo.com/nz/en/search?Query={{{s}}}"
    },
    {
        "d": "www.kogan.com",
        "b": "kogan",
        "u": "https://www.kogan.com/au/shop/?q={{{s}}}"
    },
    {
        "d": "www.kohls.com",
        "b": "kohls",
        "u": "http://www.kohls.com/search.jsp?search={{{s}}}"
    },
    {
        "d": "www.komplett.no",
        "b": "komplett",
        "u": "https://www.komplett.no/search?q={{{s}}}"
    },
    {
        "d": "www.konga.com",
        "b": "konga",
        "u": "http://www.konga.com/catalogsearch/result/?cat=0&q={{{s}}} "
    },
    {
        "d": "www.koopjedeal.nl",
        "b": "koopjedeal",
        "u": "https://www.koopjedeal.nl/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.kooponline.com",
        "b": "kooponline",
        "u": "https://www.kooponline.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.koorong.com",
        "b": "koorong",
        "u": "https://www.koorong.com/search/results.jhtml?w={{{s}}}"
    },
    {
        "d": "www.kosmas.cz",
        "b": "kosmas",
        "u": "http://www.kosmas.cz/hledani/?query={{{s}}}"
    },
    {
        "d": "www.kupujemprodajem.com",
        "b": "kp",
        "u": "https://www.kupujemprodajem.com/search.php?action=list&data%5Bad_kind%5D=&data%5Bad_type%5D=&data%5Bfollow%5D=&data%5Bad_kind_type%5D=&data%5Btip_oglasa%5D=&data%5Bcategory_id%5D=&data%5Bgroup_id%5D=&data%5Blocation_id%5D=&data%5Blocation_radius%5D=&data%5Bhas_photo%5D=&data%5Bcondition%5D=&data%5Bperiod%5D=&data%5Border%5D=&data%5Bcar_model%5D=&data%5Bvehicle_power_min%5D=&data%5Bvehicle_power_max%5D=&data%5Bvehicle_cc_min%5D=&data%5Bvehicle_cc_max%5D=&data%5Bvehicle_km_min%5D=&data%5Bvehicle_km_max%5D=&data%5Bvehicle_make_year_min%5D=&data%5Bvehicle_make_year_max%5D=&data%5Bcar_body_type%5D=&data%5Bcar_fuel_type%5D=&data%5Bcar_doors%5D=&data%5Bcar_gearbox%5D=&data%5Bvehicle_aircondition%5D=&data%5Bvehicle_drive%5D=&data%5Bprice_from%5D=&data%5Bprice_to%5D=&dummy=name&data%5Bkeywords%5D={{{s}}} &=&=&=&=&=&=&return_url=aW5kZXgucGhw"
    },
    {
        "d": "kraftly.com",
        "b": "kraftly",
        "u": "https://kraftly.com/search?q={{{s}}}"
    },
    {
        "d": "www.kreedo.de",
        "b": "kreedo",
        "u": "https://www.kreedo.de/index.php?cl=search&searchparam={{{s}}} "
    },
    {
        "d": "www.kroger.com",
        "b": "kr",
        "u": "https://www.kroger.com/search?query={{{s}}}"
    },
    {
        "d": "www.kroger.com",
        "b": "kroger",
        "u": "https://www.kroger.com/search?query={{{s}}}"
    },
    {
        "d": "www.ksl.com",
        "b": "kslc",
        "u": "https://www.ksl.com/classifieds/search/?keyword={{{s}}}"
    },
    {
        "d": "classifieds.ksl.com",
        "b": "ksl",
        "u": "https://classifieds.ksl.com/search?keyword={{{s}}}"
    },
    {
        "d": "ksp.co.il",
        "b": "ksppc",
        "u": "https://ksp.co.il/index.php?txt_search={{{s}}}"
    },
    {
        "d": "www.kuantokusta.pt",
        "b": "kuantokusta",
        "u": "http://www.kuantokusta.pt/search?q={{{s}}} "
    },
    {
        "d": "kultofathena.com",
        "b": "kultofathena",
        "u": "http://kultofathena.com/s_results.asp?search={{{s}}}"
    },
    {
        "d": "www.kurpirkt.lv",
        "b": "kur",
        "u": "https://www.kurpirkt.lv/cena.php?q={{{s}}}"
    },
    {
        "d": "search.kyobobook.co.kr",
        "b": "kyobo",
        "u": "https://search.kyobobook.co.kr/web/search?vPstrKeyWord={{{s}}}"
    },
    {
        "d": "www.lafeltrinelli.it",
        "b": "laf",
        "u": "http://www.lafeltrinelli.it/fcom/it/home/pages/catalogo/searchresults.html?srch=0&sort=1&page=1&prkw={{{s}}}&cat1=1"
    },
    {
        "d": "www.lamps.com",
        "b": "lamps",
        "u": "https://www.lamps.com/catalogsearch/result?q={{{s}}}"
    },
    {
        "d": "laopinione.com",
        "b": "laopinione",
        "u": "https://laopinione.com/?s={{{s}}}"
    },
    {
        "d": "www.laptopdirect.co.za",
        "b": "laptopdirect",
        "u": "http://www.laptopdirect.co.za/search.php?SearchTerm={{{s}}}"
    },
    {
        "d": "www.latemodelrestoration.com",
        "b": "latemodelresto",
        "u": "http://www.latemodelrestoration.com/product/search?q={{{s}}}"
    },
    {
        "d": "www.latemodelrestoration.com",
        "b": "latemodelrestoration",
        "u": "http://www.latemodelrestoration.com/product/search?q={{{s}}}"
    },
    {
        "d": "www.lazada.co.id",
        "b": "lazadaid",
        "u": "http://www.lazada.co.id/catalog/?q={{{s}}} "
    },
    {
        "d": "www.lazada.com.ph",
        "b": "lazadaph",
        "u": "https://www.lazada.com.ph/catalog/?q={{{s}}}"
    },
    {
        "d": "www.lazada.com.ph",
        "b": "laz",
        "u": "http://www.lazada.com.ph/catalog/?q={{{s}}}"
    },
    {
        "d": "www.lazada.co.th",
        "b": "lazth",
        "u": "http://www.lazada.co.th/catalog/?scs=0&q={{{s}}} "
    },
    {
        "d": "www.leboncoin.fr",
        "b": "lbcidf",
        "u": "https://www.leboncoin.fr/recherche/?text={{{s}}}&regions=12"
    },
    {
        "d": "www.leboncoin.fr",
        "b": "lbc",
        "u": "http://www.leboncoin.fr/recherche/?text={{{s}}}"
    },
    {
        "d": "www.leboncoin.fr",
        "b": "lbcra",
        "u": "https://www.leboncoin.fr/recherche/?text={{{s}}}&regions=22"
    },
    {
        "d": "www.logos.com",
        "b": "lbs",
        "u": "https://www.logos.com/products/search?q={{{s}}}"
    },
    {
        "d": "lcsc.com",
        "b": "lcsc",
        "u": "https://lcsc.com/search?q={{{s}}}"
    },
    {
        "d": "www.ldlc.be",
        "b": "ldlcbe",
        "u": "http://www.ldlc.be/navigation/{{{s}}}/"
    },
    {
        "d": "www.ldlc.com",
        "b": "ldlc",
        "u": "http://www.ldlc.com/navigation/{{{s}}}/"
    },
    {
        "d": "www.leboncoin.fr",
        "b": "leboncoin",
        "u": "https://www.leboncoin.fr/recherche/?text={{{s}}}"
    },
    {
        "d": "www.culture.leclerc",
        "b": "leclerc",
        "u": "https://www.culture.leclerc/pageRecherche?q={{{s}}}&univers=all"
    },
    {
        "d": "ledom.com.ua",
        "b": "ledom",
        "u": "https://ledom.com.ua/search?controller=search&orderby=position&orderway=desc&search_category=all&s={{{s}}}"
    },
    {
        "d": "search2.lego.com",
        "b": "lego",
        "u": "https://search2.lego.com/en-GB/{{{s}}}"
    },
    {
        "d": "www.leisurepro.com",
        "b": "leisurepro",
        "u": "http://www.leisurepro.com/search?searchinfo={{{s}}}"
    },
    {
        "d": "www.varusteleka.fi",
        "b": "leka",
        "u": "https://www.varusteleka.fi/fi/bestsearch/{{{s}}}?q={{{s}}}"
    },
    {
        "d": "www.lelong.com.my",
        "b": "lelong",
        "u": "https://www.lelong.com.my/catalog/all/list?TheKeyword={{{s}}}"
    },
    {
        "d": "www.leons.ca",
        "b": "leons",
        "u": "https://www.leons.ca/pages/search-results?limit=48&q={{{s}}}"
    },
    {
        "d": "www.leroymerlin.it",
        "b": "leroymerlinit",
        "u": "https://www.leroymerlin.it/ricerca?q={{{s}}}&page=1"
    },
    {
        "d": "www.battdepot.com",
        "b": "li-ion",
        "u": "https://www.battdepot.com/nl/Search.aspx?keywords={{{s}}}"
    },
    {
        "d": "www.limundo.com",
        "b": "lim",
        "u": "https://www.limundo.com/pretragaLimundo.php?bSearchBox=1&txtPretraga={{{s}}}&Submit="
    },
    {
        "d": "lingerka.pl",
        "b": "lingerka",
        "u": "https://lingerka.pl/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.liquidation.com",
        "b": "liquidation",
        "u": "http://www.liquidation.com/auction/search?cmd=keyword&searchparam_words={{{s}}}&flag=new"
    },
    {
        "d": "www.liquorland.com.au",
        "b": "liquorland",
        "u": "https://www.liquorland.com.au/Search?q={{{s}}}"
    },
    {
        "d": "www.list.am",
        "b": "listam",
        "u": "http://www.list.am/category?q={{{s}}}"
    },
    {
        "d": "www.litres.ru",
        "b": "litres",
        "u": "https://www.litres.ru/pages/rmd_search/?q={{{s}}}"
    },
    {
        "d": "shirts.ly",
        "b": "lively",
        "u": "https://shirts.ly/shop?search={{{s}}}"
    },
    {
        "d": "www.lizzart.fr",
        "b": "lizzart",
        "u": "http://www.lizzart.fr/boutique/tout/recherche.html?keyword={{{s}}}&limitstart=0&option=com_virtuemart&view=category"
    },
    {
        "d": "www.llbean.com",
        "b": "llbean",
        "u": "http://www.llbean.com/llb/search/?freeText={{{s}}}&init=1"
    },
    {
        "d": "les-maitres-composeurs.fr",
        "b": "lmc",
        "u": "https://les-maitres-composeurs.fr/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.latemodelrestoration.com",
        "b": "lmr",
        "u": "http://www.latemodelrestoration.com/Product/Search?q={{{s}}}"
    },
    {
        "d": "www.linio.com.mx",
        "b": "lmx",
        "u": "https://www.linio.com.mx/search?q={{{s}}}"
    },
    {
        "d": "www.loblaws.ca",
        "b": "loblaws",
        "u": "https://www.loblaws.ca/search/?search-bar={{{s}}}"
    },
    {
        "d": "local-list.co.il",
        "b": "localist",
        "u": "https://local-list.co.il?p=106&stag={{{s}}}"
    },
    {
        "d": "www.locksonline.com",
        "b": "lolcom",
        "u": "https://www.locksonline.com/search/search.html?zoom_query={{{s}}}"
    },
    {
        "d": "www.locksonline.co.uk",
        "b": "lol",
        "u": "https://www.locksonline.co.uk/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.loot.co.za",
        "b": "loot",
        "u": "http://www.loot.co.za/search?cat=b&terms={{{s}}}"
    },
    {
        "d": "www.loveseat.com",
        "b": "loveseat",
        "u": "https://www.loveseat.com/search/?term={{{s}}}"
    },
    {
        "d": "www.lowes.ca",
        "b": "lowesca",
        "u": "https://www.lowes.ca/search/{{{s}}}.html"
    },
    {
        "d": "www.lowes.com",
        "b": "lowes",
        "u": "http://www.lowes.com/SearchCatalogDisplay?Ntt={{{s}}}#!"
    },
    {
        "d": "www.laptopspirit.fr",
        "b": "lps",
        "u": "http://www.laptopspirit.fr/search/{{{s}}}"
    },
    {
        "d": "www.lsf.com.ar",
        "b": "lsf",
        "u": "http://www.lsf.com.ar/resulta.aspx?key={{{s}}}"
    },
    {
        "d": "www.lazada.sg",
        "b": "lsg",
        "u": "http://www.lazada.sg/catalog/?q={{{s}}}"
    },
    {
        "d": "de.lush.com",
        "b": "luch",
        "u": "https://de.lush.com/search/site/{{{s}}}"
    },
    {
        "d": "www.lulu.com",
        "b": "lulu",
        "u": "https://www.lulu.com/shop/search.ep?keyWords={{{s}}}"
    },
    {
        "d": "www.lumas.de",
        "b": "lumas",
        "u": "https://www.lumas.de/search/?q={{{s}}}"
    },
    {
        "d": "www.luxflair.de",
        "b": "luxflair",
        "u": "https://www.luxflair.de/search?sSearch={{{s}}} "
    },
    {
        "d": "neoluxor.cz",
        "b": "luxor",
        "u": "http://neoluxor.cz/vyhledavani/?query={{{s}}}"
    },
    {
        "d": "luzme.com",
        "b": "luzme",
        "u": "http://luzme.com/search_all?keyword={{{s}}}"
    },
    {
        "d": "www.lazada.com.ph",
        "b": "lzd",
        "u": "http://www.lazada.com.ph/catalog/?q={{{s}}}"
    },
    {
        "d": "www.lazada.com.my",
        "b": "LzdMy",
        "u": "http://www.lazada.com.my/catalog/?q={{{s}}}"
    },
    {
        "d": "www.lazada.com.ph",
        "b": "lzdph",
        "u": "https://www.lazada.com.ph/catalog/?q={{{s}}}"
    },
    {
        "d": "www.lazada.sg",
        "b": "lzdsg",
        "u": "http://www.lazada.sg/catalog/?q={{{s}}}"
    },
    {
        "d": "www.lazada.co.th",
        "b": "lzdth",
        "u": "http://www.lazada.co.th/catalog/?q={{{s}}}"
    },
    {
        "d": "www.maakjetaart.nl",
        "b": "maakjetaart",
        "u": "http://www.maakjetaart.nl/advanced_search_result.php?search_in_description=0&keywords={{{s}}}"
    },
    {
        "d": "eshop.macsales.com",
        "b": "macsales",
        "u": "https://eshop.macsales.com/search/?q={{{s}}}"
    },
    {
        "d": "www.macupdate.com",
        "b": "macupdate",
        "u": "http://www.macupdate.com/find/mac/{{{s}}}"
    },
    {
        "d": "www.macys.com",
        "b": "macys",
        "u": "https://www.macys.com/shop/featured/{{{s}}}"
    },
    {
        "d": "www.made.com",
        "b": "made",
        "u": "http://www.made.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.maedler.de",
        "b": "maedler",
        "u": "https://www.maedler.de/ShopSearch?query={{{s}}}"
    },
    {
        "d": "www.maerklin.de",
        "b": "maerklinde",
        "u": "http://www.maerklin.de/index.php?id=247&q={{{s}}}"
    },
    {
        "d": "www.magazineluiza.com.br",
        "b": "magalu",
        "u": "https://www.magazineluiza.com.br/busca/{{{s}}}"
    },
    {
        "d": "www.cardmarket.com",
        "b": "magiccardmarket",
        "u": "https://www.cardmarket.com/en/Magic/MainPage/showSearchResult?searchFor={{{s}}}"
    },
    {
        "d": "store.musicmagpie.co.uk",
        "b": "magpie",
        "u": "http://store.musicmagpie.co.uk/category/?keyword={{{s}}}"
    },
    {
        "d": "www.makro.cz",
        "b": "makro",
        "u": "https://www.makro.cz/vyhledavani?q={{{s}}}"
    },
    {
        "d": "www.mall.cz",
        "b": "mall",
        "u": "https://www.mall.cz/hledej?s={{{s}}}"
    },
    {
        "d": "www.maltapark.com",
        "b": "maltapark",
        "u": "https://www.maltapark.com/search?c=s1&search={{{s}}}"
    },
    {
        "d": "ekizo.mandarake.co.jp",
        "b": "mandarake",
        "u": "http://ekizo.mandarake.co.jp/shop/en/search.do?action=keyword&doujin=all&searchStrategy=keyword&keyword={{{s}}}"
    },
    {
        "d": "www.marksandspencer.com",
        "b": "mands",
        "u": "http://www.marksandspencer.com/gp/search?field-keywords={{{s}}}"
    },
    {
        "d": "www.marinepartssource.com",
        "b": "marineparts",
        "u": "https://www.marinepartssource.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "mariselaveludo.fashion",
        "b": "marisela",
        "u": "https://mariselaveludo.fashion/?s={{{s}}}"
    },
    {
        "d": "www.markandgraham.com",
        "b": "markandgraham",
        "u": "http://www.markandgraham.com/search/results.html?words={{{s}}}"
    },
    {
        "d": "market.android.com",
        "b": "market",
        "u": "https://market.android.com/search?q={{{s}}}&c=apps"
    },
    {
        "d": "marketplace.tf",
        "b": "marketplacetf",
        "u": "https://marketplace.tf/search?q={{{s}}}&?r=76561198039950396"
    },
    {
        "d": "www.markt.de",
        "b": "markt",
        "u": "http://www.markt.de/muenchen/keywords,{{{s}}}/suche.htm"
    },
    {
        "d": "www.marktplaats.nl",
        "b": "marktplaats",
        "u": "https://www.marktplaats.nl/z.html?query={{{s}}}"
    },
    {
        "d": "marktplaats.nl",
        "b": "mar",
        "u": "http://marktplaats.nl/z.html?query={{{s}}}"
    },
    {
        "d": "www.martinka.com",
        "b": "martinka",
        "u": "http://www.martinka.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.martinus.sk",
        "b": "martinus",
        "u": "http://www.martinus.sk/?uMod=list&uTyp=search&uQ={{{s}}}"
    },
    {
        "d": "drop.com",
        "b": "massdrop",
        "u": "https://drop.com/search/{{{s}}}/drops"
    },
    {
        "d": "www.materiel.net",
        "b": "materiel",
        "u": "http://www.materiel.net/achat/{{{s}}}/"
    },
    {
        "d": "www.mathem.se",
        "b": "mathem",
        "u": "https://www.mathem.se/sok?q={{{s}}}"
    },
    {
        "d": "mavin.io",
        "b": "mavin",
        "u": "https://mavin.io/search?q={{{s}}}"
    },
    {
        "d": "www.maxspar.de",
        "b": "maxspar",
        "u": "https://www.maxspar.de/s/{{{s}}}"
    },
    {
        "d": "mbeans.com",
        "b": "mbeans",
        "u": "https://mbeans.com/search.html?search={{{s}}}"
    },
    {
        "d": "www.mbglick.com",
        "b": "mbglick",
        "u": "http://www.mbglick.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "mms.mckesson.com",
        "b": "mck",
        "u": "https://mms.mckesson.com/catalog?query={{{s}}}"
    },
    {
        "d": "www.mcmaster.com",
        "b": "mcmaster",
        "u": "http://www.mcmaster.com/#{{{s}}}"
    },
    {
        "d": "www.cardmarket.com",
        "b": "mcm",
        "u": "https://www.cardmarket.com/en/Magic/Products/Search?searchString={{{s}}}"
    },
    {
        "d": "mdcomputers.in",
        "b": "mdcomp",
        "u": "https://mdcomputers.in/index.php?route=product/search&search={{{s}}}&description=true"
    },
    {
        "d": "tienda.mercadona.es",
        "b": "mdona",
        "u": "https://tienda.mercadona.es/search-results?query={{{s}}}"
    },
    {
        "d": "www.mdt.co.uk",
        "b": "mdt",
        "u": "http://www.mdt.co.uk/catalogsearch/result/?q={{{s}}}&t=general&order=most_viewed"
    },
    {
        "d": "www.mec.ca",
        "b": "mec",
        "u": "https://www.mec.ca/en/search?text={{{s}}} "
    },
    {
        "d": "www.metalochimice.ro",
        "b": "meco",
        "u": "https://www.metalochimice.ro/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.mediamarkt.be",
        "b": "mediamarktfr",
        "u": "http://www.mediamarkt.be/fr/search.html?query={{{s}}}"
    },
    {
        "d": "www.mediamarkt.nl",
        "b": "mediamarkt",
        "u": "http://www.mediamarkt.nl/nl/search.html?storeId=10259&langId=-11&searchProfile=onlineshop&channel=mmnlnl&searchParams=&path=&query={{{s}}}"
    },
    {
        "d": "www.mediamarkt.nl",
        "b": "mediamarktnl",
        "u": "http://www.mediamarkt.nl/nl/search.html?query={{{s}}}&searchProfile=onlineshop&channel=mmnlnl"
    },
    {
        "d": "www.medimax.de",
        "b": "medimax",
        "u": "https://www.medimax.de/search?search={{{s}}}"
    },
    {
        "d": "www.medimops.de",
        "b": "medimops",
        "u": "http://www.medimops.de/produkte-C0/?fcIsSearch=1&searchparam={{{s}}}"
    },
    {
        "d": "www.meijer.com",
        "b": "meijer",
        "u": "http://www.meijer.com/catalog/search_command.cmd?keyword={{{s}}}&tierId="
    },
    {
        "d": "www.melorra.com",
        "b": "melorra",
        "u": "https://www.melorra.com/jewellery/search/?q={{{s}}}:"
    },
    {
        "d": "www.memoryexpress.com",
        "b": "memoryexpress",
        "u": "http://www.memoryexpress.com/Search/Products?Search={{{s}}}"
    },
    {
        "d": "www.memoryexpress.com",
        "b": "memx",
        "u": "http://www.memoryexpress.com/Search/Products?Search={{{s}}}"
    },
    {
        "d": "www.menards.com",
        "b": "menards",
        "u": "https://www.menards.com/main/search.html?search={{{s}}}"
    },
    {
        "d": "listado.mercadolibre.com.ar",
        "b": "mercadolibrear",
        "u": "http://listado.mercadolibre.com.ar/{{{s}}}#D[A:{{{s}}}]"
    },
    {
        "d": "listado.mercadolibre.cl",
        "b": "mercadolibrecl",
        "u": "http://listado.mercadolibre.cl/{{{s}}}#D[A:{{{s}}}]"
    },
    {
        "d": "mercadolibre.com",
        "b": "mercadolibre",
        "u": "http://mercadolibre.com/?q= {{{s}}}"
    },
    {
        "d": "www.mercari.com",
        "b": "mercarijp",
        "u": "https://www.mercari.com/jp/search/?keyword={{{s}}}"
    },
    {
        "d": "www.mercari.com",
        "b": "mercari",
        "u": "https://www.mercari.com/search/?keyword={{{s}}}"
    },
    {
        "d": "merlin.pl",
        "b": "merlin",
        "u": "http://merlin.pl/browse/search.html?offer=O&phrase={{{s}}}"
    },
    {
        "d": "www.messicks.com",
        "b": "mes",
        "u": "https://www.messicks.com/search?q={{{s}}}"
    },
    {
        "d": "shop.messerle.at",
        "b": "messerle",
        "u": "https://shop.messerle.at/dataTransfer/custom/suche.php?keyword={{{s}}}"
    },
    {
        "d": "romaandmacmetalscrap.com",
        "b": "metalscrap",
        "u": "https://romaandmacmetalscrap.com/?product_cat=0&s={{{s}}}"
    },
    {
        "d": "www.metro.ca",
        "b": "metro",
        "u": "https://www.metro.ca/en/search?free-text={{{s}}}"
    },
    {
        "d": "www.mindfactory.de",
        "b": "mfac",
        "u": "https://www.mindfactory.de/search_result.php?select_search=0&search_query={{{s}}}"
    },
    {
        "d": "www.mindfactory.de",
        "b": "mfde",
        "u": "http://www.mindfactory.de/search_result.php?search_query={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.managementboek.nl",
        "b": "mgtbk",
        "u": "https://www.managementboek.nl/zoeken?c=&q={{{s}}}"
    },
    {
        "d": "www.michaels.com",
        "b": "michaels",
        "u": "http://www.michaels.com/search?q={{{s}}}"
    },
    {
        "d": "www.microcenter.com",
        "b": "microcenter",
        "u": "http://www.microcenter.com/search/search_results.phtml?Ntt={{{s}}}"
    },
    {
        "d": "www.middaysomewhere.com",
        "b": "midday",
        "u": "https://www.middaysomewhere.com/prices/search?q={{{s}}}"
    },
    {
        "d": "www.mightyape.co.nz",
        "b": "mightyape",
        "u": "http://www.mightyape.co.nz/search/?i=All&prev=&s={{{s}}}&SearchButton=Search"
    },
    {
        "d": "search.migros.ch",
        "b": "migros_de",
        "u": "https://search.migros.ch/de/q:{{{s}}}"
    },
    {
        "d": "search.migros.ch",
        "b": "migros_fr",
        "u": "https://search.migros.ch/de/q:{{{s}}}"
    },
    {
        "d": "search.migros.ch",
        "b": "migros_it",
        "u": "https://search.migros.ch/de/q:{{{s}}}"
    },
    {
        "d": "blackstarsurplus.com",
        "b": "militarysurplus",
        "u": "http://blackstarsurplus.com/{{{s}}}"
    },
    {
        "d": "www.mimovrste.com",
        "b": "mimovrste",
        "u": "https://www.mimovrste.com/iskanje?s={{{s}}}"
    },
    {
        "d": "www.mindfactory.de",
        "b": "mindfactory",
        "u": "https://www.mindfactory.de/search_result.php?select_search=0&search_query={{{s}}}"
    },
    {
        "d": "www.mindfactory.de",
        "b": "mindf",
        "u": "https://www.mindfactory.de/search_result.php?select_search=0&search_query={{{s}}}"
    },
    {
        "d": "www.miniinthebox.com",
        "b": "miniinthebox",
        "u": "http://www.miniinthebox.com/index.php?main_page=advanced_search_result&inc_subcat=1&search_in_description=0&keyword={{{s}}}"
    },
    {
        "d": "www.mironet.cz",
        "b": "mironet",
        "u": "https://www.mironet.cz/Productlist/showSearch?EXPS={{{s}}}"
    },
    {
        "d": "us.misumi-ec.com",
        "b": "misumi",
        "u": "https://us.misumi-ec.com/vona2/result/?Keyword={{{s}}}"
    },
    {
        "d": "mechanicalkeyboards.com",
        "b": "mk",
        "u": "http://mechanicalkeyboards.com/search.php?switch_id=ALL&size=ALL&keyword={{{s}}} "
    },
    {
        "d": "www.cardmarket.com",
        "b": "mkm",
        "u": "https://www.cardmarket.com/en/Magic/Products/Search?searchString={{{s}}}"
    },
    {
        "d": "listado.mercadolibre.com.ar",
        "b": "mlar",
        "u": "http://listado.mercadolibre.com.ar/{{{s}}}"
    },
    {
        "d": "lista.mercadolivre.com.br",
        "b": "mlbr",
        "u": "http://lista.mercadolivre.com.br/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.cl",
        "b": "mlcl",
        "u": "http://listado.mercadolibre.cl/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.com.co",
        "b": "mlco",
        "u": "http://listado.mercadolibre.com.co/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.co.cr",
        "b": "mlcr",
        "u": "http://listado.mercadolibre.co.cr/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.com.do",
        "b": "mldo",
        "u": "http://listado.mercadolibre.com.do/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.com.ec",
        "b": "mlec",
        "u": "http://listado.mercadolibre.com.ec/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.com.co",
        "b": "mlibreco",
        "u": "https://listado.mercadolibre.com.co/{{{s}}}"
    },
    {
        "d": "lista.mercadolivre.com.br",
        "b": "mlivre",
        "u": "http://lista.mercadolivre.com.br/{{{s}}}#D[A:{{{s}}}]"
    },
    {
        "d": "www.liquormarts.ca",
        "b": "mll",
        "u": "https://www.liquormarts.ca/search-products/%25/{{{s}}}"
    },
    {
        "d": "listado.mercadolibre.com.pa",
        "b": "mlpa",
        "u": "http://listado.mercadolibre.com.pa/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.com.pe",
        "b": "mlpe",
        "u": "http://listado.mercadolibre.com.pe/{{{s}}} "
    },
    {
        "d": "listado.mercadolibre.com.uy",
        "b": "mluy",
        "u": "http://listado.mercadolibre.com.uy/{{{s}}}"
    },
    {
        "d": "listado.mercadolibre.com.ve",
        "b": "mlve",
        "u": "http://listado.mercadolibre.com.ve/{{{s}}} "
    },
    {
        "d": "www.mcmaster.com",
        "b": "mmc",
        "u": "http://www.mcmaster.com/#{{{s}}} "
    },
    {
        "d": "www.miniaturemarket.com",
        "b": "mmk",
        "u": "https://www.miniaturemarket.com/searchresults?q={{{s}}}"
    },
    {
        "d": "mmlafleur.com",
        "b": "mmlafleur",
        "u": "https://mmlafleur.com/shop/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.mmoga.de",
        "b": "mmoga",
        "u": "https://www.mmoga.de/advanced_search.php?keywords={{{s}}}"
    },
    {
        "d": "www.cardmarket.com",
        "b": "mmz",
        "u": "https://www.cardmarket.com/en/Magic/MainPage/browseUserProducts?idCategory=1&idUser=25674&resultsPage=0&cardName={{{s}}}"
    },
    {
        "d": "mnnthbx.com",
        "b": "mnnthbx",
        "u": "https://mnnthbx.com/?post_type=product&s={{{s}}}"
    },
    {
        "d": "mobilecentre.am",
        "b": "mobce",
        "u": "https://mobilecentre.am/search/?searchData={{{s}}}"
    },
    {
        "d": "www.modcloth.com",
        "b": "modcloth",
        "u": "http://www.modcloth.com/shop/search?keyword={{{s}}} "
    },
    {
        "d": "www.modes4u.com",
        "b": "modes4u_it",
        "u": "https://www.modes4u.com/carino/{{{s}}}"
    },
    {
        "d": "www.modes4u.com",
        "b": "modes4u",
        "u": "https://www.modes4u.com/japanese/{{{s}}}"
    },
    {
        "d": "www.mofakult.ch",
        "b": "mofakult",
        "u": "https://www.mofakult.ch/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.moglix.com",
        "b": "moglix",
        "u": "https://www.moglix.com/search?controller=search&orderby=position&orderway=desc&search_query= {{{s}}}&submit_search=Search"
    },
    {
        "d": "www.madeofjeans.com",
        "b": "moj",
        "u": "https://www.madeofjeans.com/search/?q={{{s}}}"
    },
    {
        "d": "www.mollat.com",
        "b": "mollat",
        "u": "https://www.mollat.com/recherche?requete={{{s}}}"
    },
    {
        "d": "www.mondou.com",
        "b": "mondou",
        "u": "https://www.mondou.com/en-CA/Search?keywords={{{s}}}"
    },
    {
        "d": "www.monoprice.com",
        "b": "monoprice",
        "u": "http://www.monoprice.com/products/search.asp?keyword={{{s}}}"
    },
    {
        "d": "monster-coupons.com",
        "b": "monstercoupons",
        "u": "https://monster-coupons.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.moo.com",
        "b": "moo",
        "u": "https://www.moo.com/search?query={{{s}}}"
    },
    {
        "d": "www.moonpig.com",
        "b": "moonpig",
        "u": "https://www.moonpig.com/uk/testpages/search/ab277/?q={{{s}}}"
    },
    {
        "d": "www.moraneducation.com",
        "b": "moraneducation",
        "u": "http://www.moraneducation.com/index.php?route=product/search&search={{{s}}} "
    },
    {
        "d": "www.morchstore.com",
        "b": "morchstore",
        "u": "https://www.morchstore.com/?post_type=product&s={{{s}}}"
    },
    {
        "d": "mosaicmarble.com",
        "b": "mosaicmarble",
        "u": "https://mosaicmarble.com/products/search?query={{{s}}}"
    },
    {
        "d": "www.motonet.fi",
        "b": "motonet",
        "u": "http://www.motonet.fi/fi/haku?q={{{s}}}"
    },
    {
        "d": "www.mountainwarehouse.com",
        "b": "mountainwarehouse",
        "u": "https://www.mountainwarehouse.com/search/{{{s}}}/"
    },
    {
        "d": "www.mouser.com",
        "b": "mouser",
        "u": "http://www.mouser.com/Search/Refine.aspx?Keyword={{{s}}}"
    },
    {
        "d": "www.mrporter.com",
        "b": "mrporter",
        "u": "https://www.mrporter.com/mens/search?keywords={{{s}}}"
    },
    {
        "d": "www.mscdirect.com",
        "b": "mscdirect",
        "u": "https://www.mscdirect.com/browse/?searchterm={{{s}}}"
    },
    {
        "d": "www.microsoft.com",
        "b": "mstore",
        "u": "https://www.microsoft.com/en-us/search?q={{{s}}}"
    },
    {
        "d": "www.msy.com.au",
        "b": "msy",
        "u": "http://www.msy.com.au/saonline/search?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search=Go"
    },
    {
        "d": "www.mtgotraders.com",
        "b": "mtgotraders",
        "u": "http://www.mtgotraders.com/store/search.php?q={{{s}}}&x=0&y=0"
    },
    {
        "d": "m.mudah.my",
        "b": "mudah",
        "u": "https://m.mudah.my/list?q={{{s}}}&ca=9_3_s&sa=&cg=&catname=All+Categories&o=1&f=p&srch=1&so=1"
    },
    {
        "d": "www.multitronic.fi",
        "b": "multitron",
        "u": "https://www.multitronic.fi/en/search/results#lang=en&c=search&keywords={{{s}}}"
    },
    {
        "d": "www.musicaneto.com",
        "b": "musicaneto",
        "u": "http://www.musicaneto.com/?s={{{s}}}"
    },
    {
        "d": "www.musiciansfriend.com",
        "b": "musiciansfriend",
        "u": "http://www.musiciansfriend.com/search/search.jsp?sB=r&question={{{s}}}"
    },
    {
        "d": "www.musicstack.com",
        "b": "musicstack",
        "u": "http://www.musicstack.com/show.cgi?find={{{s}}}"
    },
    {
        "d": "www.musik-meisinger.de",
        "b": "musikm",
        "u": "http://www.musik-meisinger.de/1/advanced_search_result.php?keywords={{{s}}} "
    },
    {
        "d": "www.musimundo.com",
        "b": "musimundo",
        "u": "http://www.musimundo.com/Busqueda?cbrand=0&title=0&artist=0&categories=&search={{{s}}}&typeGrid=grid"
    },
    {
        "d": "muusikoiden.net",
        "b": "muusikoiden",
        "u": "https://muusikoiden.net/tori/haku.php?keyword={{{s}}}&title_only=0&location=all&province=&city=&type=all&price_min=&price_max=&category=all&with_image=0"
    },
    {
        "d": "www.muziker.sk",
        "b": "muzikersk",
        "u": "https://www.muziker.sk/search?q={{{s}}}"
    },
    {
        "d": "www.mwave.com.au",
        "b": "mwave",
        "u": "https://www.mwave.com.au/searchresult?w={{{s}}}"
    },
    {
        "d": "market.yandex.ru",
        "b": "mya",
        "u": "https://market.yandex.ru/search?text={{{s}}}"
    },
    {
        "d": "www.mybestbrands.de",
        "b": "mybestbrands",
        "u": "http://www.mybestbrands.de/search/?q={{{s}}}"
    },
    {
        "d": "www.mycomicshop.com",
        "b": "myc",
        "u": "https://www.mycomicshop.com/search?q={{{s}}}"
    },
    {
        "d": "mycom.nl",
        "b": "mycom",
        "u": "https://mycom.nl/search/{{{s}}}"
    },
    {
        "d": "www.mydealz.de",
        "b": "mydealz",
        "u": "https://www.mydealz.de/search?q={{{s}}}"
    },
    {
        "d": "www.myer.com.au",
        "b": "myer",
        "u": "https://www.myer.com.au/search?query={{{s}}}"
    },
    {
        "d": "www.mygofer.com",
        "b": "mygofer",
        "u": "http://www.mygofer.com/search={{{s}}}"
    },
    {
        "d": "www.myknobs.com",
        "b": "myk",
        "u": "https://www.myknobs.com/page/search?Ntt={{{s}}}"
    },
    {
        "d": "www.myntra.com",
        "b": "myn",
        "u": "http://www.myntra.com/{{{s}}}"
    },
    {
        "d": "www.myntra.com",
        "b": "myntra",
        "u": "http://www.myntra.com/{{{s}}} "
    },
    {
        "d": "pt.myprotein.com",
        "b": "myp",
        "u": "https://pt.myprotein.com/elysium.search?search={{{s}}}"
    },
    {
        "d": "mysku.ru",
        "b": "mysku",
        "u": "http://mysku.ru/search/topics/?q={{{s}}}"
    },
    {
        "d": "www.mysupermarket.co.uk",
        "b": "mys",
        "u": "http://www.mysupermarket.co.uk/Shopping/FindProducts.aspx?Query={{{s}}}"
    },
    {
        "d": "www.n11.com",
        "b": "n11",
        "u": "http://www.n11.com/arama?q={{{s}}}"
    },
    {
        "d": "www.nabava.net",
        "b": "nabava",
        "u": "https://www.nabava.net/search.php?q={{{s}}}"
    },
    {
        "d": "www.namecheap.com",
        "b": "namecheap",
        "u": "https://www.namecheap.com/domains/registration/results.aspx?domain={{{s}}}"
    },
    {
        "d": "search.shopping.naver.com",
        "b": "nasp",
        "u": "https://search.shopping.naver.com/search/all.nhn?query={{{s}}}&cat_id=&frm=NVSHATC"
    },
    {
        "d": "www.notebooksbilliger.de",
        "b": "nbooks",
        "u": "http://www.notebooksbilliger.de/produkte/{{{s}}}"
    },
    {
        "d": "www.newegg.ca",
        "b": "neca",
        "u": "http://www.newegg.ca/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description={{{s}}}&N=-1&isNodeId=1"
    },
    {
        "d": "www.nemlig.com",
        "b": "nemlig",
        "u": "https://www.nemlig.com/?search={{{s}}}"
    },
    {
        "d": "www.newegg.com",
        "b": "ne",
        "u": "http://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Description={{{s}}}"
    },
    {
        "d": "www.nerdstore.com.br",
        "b": "nerdstore",
        "u": "http://www.nerdstore.com.br/{{{s}}}"
    },
    {
        "d": "www.netonnet.no",
        "b": "netonnet",
        "u": "https://www.netonnet.no/Search?query={{{s}}}"
    },
    {
        "d": "www.nettimarkkina.com",
        "b": "nettimarkkina",
        "u": "https://www.nettimarkkina.com/haku?tag_cld=Y&site=A&status_typeF=F&status_typeR=R&status_typeP=P&search_keyword[]={{{s}}}&"
    },
    {
        "d": "www.newark.com",
        "b": "newark",
        "u": "http://www.newark.com/jsp/search/browse.jsp;jsessionid=HLQ02PGLEB0YKCXDUZ1G4IQ?N=0&Ntk=gensearch_001&Ntt={{{s}}}&Ntx=mode+matchallpartial&suggestions=false&ref=globalsearch&_requestid=285160"
    },
    {
        "d": "www.newegg.ca",
        "b": "neweggca",
        "u": "https://www.newegg.ca/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description={{{s}}}&N=-1&isNodeId=1"
    },
    {
        "d": "www.newegg.com",
        "b": "newegg",
        "u": "http://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Description={{{s}}}"
    },
    {
        "d": "www.newhome.se",
        "b": "newhome",
        "u": "http://www.newhome.se/index.php?route=product/search&filter_name={{{s}}}"
    },
    {
        "d": "nicegear.co.nz",
        "b": "nicegear",
        "u": "http://nicegear.co.nz/search/?q={{{s}}}"
    },
    {
        "d": "www.nikon.co.uk",
        "b": "nikonuk",
        "u": "https://www.nikon.co.uk/en_GB/search.page#keywords={{{s}}}"
    },
    {
        "d": "njal.la",
        "b": "njalla",
        "u": "https://njal.la/list/?search={{{s}}}"
    },
    {
        "d": "www.njuskalo.hr",
        "b": "njuskalo",
        "u": "https://www.njuskalo.hr/?ctl=search_ads&keywords={{{s}}}"
    },
    {
        "d": "www.noelleeming.co.nz",
        "b": "noel",
        "u": "https://www.noelleeming.co.nz/search.html?q={{{s}}}"
    },
    {
        "d": "shop.nordstrom.com",
        "b": "nordstrom",
        "u": "http://shop.nordstrom.com/sr?origin=keywordsearch&keyword={{{s}}}"
    },
    {
        "d": "www.nuuvem.com",
        "b": "nuuvem",
        "u": "https://www.nuuvem.com/catalog/search/{{{s}}}"
    },
    {
        "d": "www.o2.co.uk",
        "b": "o2",
        "u": "https://www.o2.co.uk/shop/{{{s}}}"
    },
    {
        "d": "www.offresasaisir.fr",
        "b": "oas",
        "u": "https://www.offresasaisir.fr/recherche?q={{{s}}}"
    },
    {
        "d": "www.obi.at",
        "b": "obiat",
        "u": "https://www.obi.at/searchresult/?isi=true&searchTerm={{{s}}}"
    },
    {
        "d": "www.obi.de",
        "b": "obi",
        "u": "https://www.obi.de/decom/search/{{{s}}}"
    },
    {
        "d": "www.ocado.com",
        "b": "ocado",
        "u": "https://www.ocado.com/webshop/getSearchProducts.do?entry={{{s}}}"
    },
    {
        "d": "octopart.com",
        "b": "octo",
        "u": "https://octopart.com/search?q={{{s}}}"
    },
    {
        "d": "overclockers.co.uk",
        "b": "ocuk",
        "u": "http://overclockers.co.uk/search_results.php?keywords={{{s}}}"
    },
    {
        "d": "affygility.com",
        "b": "oel",
        "u": "https://affygility.com/oel/search.html?addsearch={{{s}}}"
    },
    {
        "d": "www.oemstrade.com",
        "b": "oem",
        "u": "http://www.oemstrade.com/search/{{{s}}}"
    },
    {
        "d": "www.oeticket.com",
        "b": "oeticket",
        "u": "http://www.oeticket.com/Tickets.html?affiliate=EOE&fun=search&fuzzy=yes&doc=search&action=grouped&inline=false&suchbegriff={{{s}}}"
    },
    {
        "d": "www.offerteinternet.net",
        "b": "offerteinternet",
        "u": "https://www.offerteinternet.net/?s={{{s}}}"
    },
    {
        "d": "www.officedepot.com",
        "b": "officedepot",
        "u": "http://www.officedepot.com/catalog/search.do?Ntt={{{s}}}"
    },
    {
        "d": "www.office-furniture-direct.co.uk",
        "b": "officefurniture",
        "u": "https://www.office-furniture-direct.co.uk/search?query={{{s}}}"
    },
    {
        "d": "www.oglasnik.hr",
        "b": "oglasnik",
        "u": "https://www.oglasnik.hr/search?q={{{s}}}&category_id="
    },
    {
        "d": "www.outdoorgearlab.com",
        "b": "ogl",
        "u": "https://www.outdoorgearlab.com/search.php?ftr={{{s}}}"
    },
    {
        "d": "www.okazii.ro",
        "b": "okazii",
        "u": "http://www.okazii.ro/cautare/{{{s}}}.html?autoc=write"
    },
    {
        "d": "www.okidoki.ee",
        "b": "okidoki",
        "u": "http://www.okidoki.ee/buy/all/?query={{{s}}}"
    },
    {
        "d": "www.okkazeo.com",
        "b": "okkazeo",
        "u": "https://www.okkazeo.com/jeux/searchJeux?rech_nom={{{s}}}"
    },
    {
        "d": "www.olx.com.ar",
        "b": "olxar",
        "u": "https://www.olx.com.ar/nf/search/{{{s}}}"
    },
    {
        "d": "bahiablanca.olx.com.ar",
        "b": "olxbb",
        "u": "https://bahiablanca.olx.com.ar/nf/search/{{{s}}}"
    },
    {
        "d": "www.olx.bg",
        "b": "olxbg",
        "u": "https://www.olx.bg/ads/?q={{{s}}}"
    },
    {
        "d": "www.olx.com.br",
        "b": "olxbr",
        "u": "http://www.olx.com.br/brasil?q={{{s}}}"
    },
    {
        "d": "df.olx.com.br",
        "b": "olxdf",
        "u": "https://df.olx.com.br/?q={{{s}}}"
    },
    {
        "d": "m.olx.co.id",
        "b": "olxid",
        "u": "https://m.olx.co.id/all-results/q-{{{s}}} "
    },
    {
        "d": "www.olx.in",
        "b": "olxin",
        "u": "https://www.olx.in/?{{{s}}}"
    },
    {
        "d": "olxliban.com",
        "b": "olxlb",
        "u": "https://olxliban.com/en/ads/q-{{{s}}}"
    },
    {
        "d": "www.olx.pl",
        "b": "olx",
        "u": "https://www.olx.pl/oferty/q- {{{s}}}/"
    },
    {
        "d": "www.olx.ph",
        "b": "olxph",
        "u": "https://www.olx.ph/all-results?q={{{s}}}"
    },
    {
        "d": "olx.pl",
        "b": "olxpl",
        "u": "http://olx.pl/oferty/q-{{{s}}}/"
    },
    {
        "d": "olx.pl",
        "b": "olxpoland",
        "u": "http://olx.pl/oferty/q-{{{s}}}/"
    },
    {
        "d": "www.olx.pt",
        "b": "olxpt",
        "u": "https://www.olx.pt/ads/q-{{{s}}}"
    },
    {
        "d": "www.olx.ro",
        "b": "olxro",
        "u": "https://www.olx.ro/ads/?q={{{s}}}"
    },
    {
        "d": "olx.ua",
        "b": "olxua",
        "u": "http://olx.ua/uk/list/q-{{{s}}}/"
    },
    {
        "d": "www.ombe.com",
        "b": "ombe",
        "u": "http://www.ombe.com/find/{{{s}}} "
    },
    {
        "d": "www.onbit.pt",
        "b": "onbit",
        "u": "https://www.onbit.pt/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "us.oneill.com",
        "b": "oneill",
        "u": "http://us.oneill.com/shop/search/?q={{{s}}}"
    },
    {
        "d": "ongoal.se",
        "b": "ongoal",
        "u": "https://ongoal.se/search?type=article%2Cpage%2Cproduct&q={{{s}}}*"
    },
    {
        "d": "www.otto-office.com",
        "b": "oo",
        "u": "https://www.otto-office.com/de/app/search/index?query[query]={{{s}}}"
    },
    {
        "d": "openhours.dk",
        "b": "openhours",
        "u": "https://openhours.dk/spots?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.openlistings.co",
        "b": "openlistings",
        "u": "https://www.openlistings.co/s/{{{s}}} "
    },
    {
        "d": "www.oomipood.ee",
        "b": "opood",
        "u": "https://www.oomipood.ee/product/search?q={{{s}}}"
    },
    {
        "d": "www.opticsplanet.com",
        "b": "opticsplanet",
        "u": "https://www.opticsplanet.com/s/{{{s}}}"
    },
    {
        "d": "www.oreillyauto.com",
        "b": "oreillyauto",
        "u": "https://www.oreillyauto.com/search/?q={{{s}}}"
    },
    {
        "d": "www.orellfuessli.ch",
        "b": "orell",
        "u": "https://www.orellfuessli.ch/suche?utf8=%E2%9C%93&filterPATHROOT=&sq={{{s}}}"
    },
    {
        "d": "www.origin.com",
        "b": "origin",
        "u": "https://www.origin.com/en-us/store/browse?q={{{s}}}"
    },
    {
        "d": "www.theoringstore.com",
        "b": "oring",
        "u": "http://www.theoringstore.com/index.php?main_page=advanced_search_result&search_in_description=1&keyword={{{s}}}"
    },
    {
        "d": "www.ormsdirect.co.za",
        "b": "orms",
        "u": "https://www.ormsdirect.co.za/catalogsearch/result/index/?q={{{s}}}"
    },
    {
        "d": "www.osta.ee",
        "b": "osta",
        "u": "http://www.osta.ee/index.php?q[q]={{{s}}}&fuseaction=search.search&q[show_items]=1&q[show_shop]=1&q[cat]=1000&search=OTSI"
    },
    {
        "d": "optochip.org",
        "b": "ot4",
        "u": "https://optochip.org/search/?q={{{s}}}"
    },
    {
        "d": "www.otto-office.com",
        "b": "ottooffice",
        "u": "http://www.otto-office.com/de/search/si.obtshop?query[query]={{{s}}}"
    },
    {
        "d": "www.otto.de",
        "b": "otto",
        "u": "https://www.otto.de/suche/{{{s}}}/"
    },
    {
        "d": "offerup.com",
        "b": "oup",
        "u": "https://offerup.com/search/?q= {{{s}}}"
    },
    {
        "d": "www.outdoorandcountry.co.uk",
        "b": "outdoorandcountry",
        "u": "https://www.outdoorandcountry.co.uk/search/go?w={{{s}}} "
    },
    {
        "d": "www.outlet-pc.es",
        "b": "outletpc",
        "u": "http://www.outlet-pc.es/?q={{{s}}}:"
    },
    {
        "d": "www.overstock.com",
        "b": "overstock",
        "u": "http://www.overstock.com/search?keywords={{{s}}}"
    },
    {
        "d": "eshop.macsales.com",
        "b": "owc",
        "u": "https://eshop.macsales.com/search/?q={{{s}}}"
    },
    {
        "d": "www.owl-you-need.de",
        "b": "owl-you-need",
        "u": "http://www.owl-you-need.de/suche/{{{s}}}"
    },
    {
        "d": "www.officeworks.com.au",
        "b": "oworks",
        "u": "https://www.officeworks.com.au/shop/SearchDisplay?searchTerm={{{s}}}"
    },
    {
        "d": "www.ozbargain.com.au",
        "b": "ozbargain",
        "u": "https://www.ozbargain.com.au/search/node/{{{s}}}"
    },
    {
        "d": "www.ozbargain.com.au",
        "b": "ozb",
        "u": "https://www.ozbargain.com.au/search/node/{{{s}}}"
    },
    {
        "d": "www.ozon.ru",
        "b": "ozon",
        "u": "http://www.ozon.ru/?context=search&text={{{s}}}"
    },
    {
        "d": "oz.by",
        "b": "oz",
        "u": "http://oz.by/search/?q={{{s}}}"
    },
    {
        "d": "ozsmoke.com.au",
        "b": "ozsmoke.com.au",
        "u": "https://ozsmoke.com.au/search/?q={{{s}}}"
    },
    {
        "d": "www.pacificpkg.com",
        "b": "pacific",
        "u": "https://www.pacificpkg.com/search.php?kw={{{s}}}"
    },
    {
        "d": "www.packtpub.com",
        "b": "packt",
        "u": "https://www.packtpub.com/all/?search={{{s}}} "
    },
    {
        "d": "pandalook.com",
        "b": "panda",
        "u": "http://pandalook.com/search?controller=search&search_query={{{s}}} "
    },
    {
        "d": "www.paradigit.nl",
        "b": "paradigit",
        "u": "https://www.paradigit.nl/zoekresultaten/?tn_q={{{s}}}"
    },
    {
        "d": "partsdr.com",
        "b": "partsdr",
        "u": "http://partsdr.com/model-number-search/?query={{{s}}}"
    },
    {
        "d": "www.passwird.com",
        "b": "pass",
        "u": "http://www.passwird.com/search?query={{{s}}}"
    },
    {
        "d": "www.paypal.com",
        "b": "paypal",
        "u": "https://www.paypal.com/us/selfhelp/search?q={{{s}}}&helpSearchButton=Search"
    },
    {
        "d": "paytmmall.com",
        "b": "paytmmall",
        "u": "https://paytmmall.com/shop/search?q={{{s}}}&from=organic&child_site_id=6&site_id=2&brand=16051"
    },
    {
        "d": "paytm.com",
        "b": "paytm",
        "u": "https://paytm.com/shop/search/?q={{{s}}}"
    },
    {
        "d": "www.potterybarnkids.com",
        "b": "pbkids",
        "u": "http://www.potterybarnkids.com/search/results.html?words={{{s}}}"
    },
    {
        "d": "www.paperbackswap.com",
        "b": "pbswap",
        "u": "http://www.paperbackswap.com/book/browser.php?k={{{s}}}"
    },
    {
        "d": "www.pbtech.co.nz",
        "b": "pbtech",
        "u": "https://www.pbtech.co.nz/search?sf={{{s}}}"
    },
    {
        "d": "www.pbteen.com",
        "b": "pbteen",
        "u": "http://www.pbteen.com/search/results.html?words={{{s}}}"
    },
    {
        "d": "ecshweb.pchome.com.tw",
        "b": "pc24",
        "u": "http://ecshweb.pchome.com.tw/search/?q={{{s}}}"
    },
    {
        "d": "search.pccasegear.com",
        "b": "pccg",
        "u": "http://search.pccasegear.com/search#w={{{s}}} "
    },
    {
        "d": "www.pccomponentes.com",
        "b": "pccomponentes",
        "u": "https://www.pccomponentes.com/buscar/?query={{{s}}}"
    },
    {
        "d": "www.pccomponentes.com",
        "b": "pcco",
        "u": "https://www.pccomponentes.com/buscar/?query={{{s}}}"
    },
    {
        "d": "www.pcconnection.com",
        "b": "pcc",
        "u": "http://www.pcconnection.com/IPA/Shop/Product/Search.htm?SearchType=1&term={{{s}}}"
    },
    {
        "d": "www.pcdiga.com",
        "b": "pcd",
        "u": "https://www.pcdiga.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.peacocks.co.uk",
        "b": "pcks",
        "u": "http://www.peacocks.co.uk/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "picclick.co.uk",
        "b": "pclick",
        "u": "https://picclick.co.uk/?q={{{s}}}"
    },
    {
        "d": "www.pccomponentes.com",
        "b": "pcomp",
        "u": "https://www.pccomponentes.com/buscar/?query={{{s}}}"
    },
    {
        "d": "pcpartpicker.com",
        "b": "pcpartpicker",
        "u": "http://pcpartpicker.com/search/?q={{{s}}}"
    },
    {
        "d": "pcpartpicker.com",
        "b": "pcpp",
        "u": "http://pcpartpicker.com/search/?q={{{s}}}"
    },
    {
        "d": "www.placedeslibraires.fr",
        "b": "pdl",
        "u": "https://www.placedeslibraires.fr/listeliv.php?mots_recherche={{{s}}}&base=allbooks"
    },
    {
        "d": "www.peapod.com",
        "b": "peapod",
        "u": "https://www.peapod.com/product-search/{{{s}}}"
    },
    {
        "d": "www.peixeurbano.com.br",
        "b": "peixe",
        "u": "https://www.peixeurbano.com.br/#q={{{s}}}"
    },
    {
        "d": "www.pelando.com.br",
        "b": "pelando",
        "u": "https://www.pelando.com.br/search?q={{{s}}}"
    },
    {
        "d": "www.penguinmagic.com",
        "b": "penguinmagic",
        "u": "http://www.penguinmagic.com/s/{{{s}}}"
    },
    {
        "d": "pennydeals.in",
        "b": "pennydeals",
        "u": "http://pennydeals.in/usearch.php?search={{{s}}}"
    },
    {
        "d": "nl.pepper.com",
        "b": "peppernl",
        "u": "https://nl.pepper.com/search?q={{{s}}}"
    },
    {
        "d": "www.petco.com",
        "b": "petco",
        "u": "http://www.petco.com/shop/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-1&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&beginIndex=0&pageSize=24&fromPageValue=search&searchTerm={{{s}}}"
    },
    {
        "d": "www.petsmart.ca",
        "b": "petsmartca",
        "u": "http://www.petsmart.ca/search?SearchTerm={{{s}}}"
    },
    {
        "d": "www.petsmart.com",
        "b": "petsmart",
        "u": "http://www.petsmart.com/search/?q={{{s}}}"
    },
    {
        "d": "prisguiden.no",
        "b": "pgno",
        "u": "https://prisguiden.no/sok?q={{{s}}}"
    },
    {
        "d": "www.philibertnet.com",
        "b": "philibert",
        "u": "http://www.philibertnet.com/fr/recherche?orderby=position&orderway=desc&search_query={{{s}}}&submit_search=C%27est+parti+%21"
    },
    {
        "d": "photodune.net",
        "b": "photodune",
        "u": "http://photodune.net/search?utf8=%E2%9C%93&term={{{s}}}"
    },
    {
        "d": "www.producthunt.com",
        "b": "ph",
        "u": "https://www.producthunt.com/search?q={{{s}}}"
    },
    {
        "d": "www.pier1.com",
        "b": "pier1",
        "u": "https://www.pier1.com/on/demandware.store/Sites-pier1_us-Site/default/Search-ShowContent?q={{{s}}}"
    },
    {
        "d": "pigu.lt",
        "b": "pigu",
        "u": "http://pigu.lt/search?q={{{s}}}"
    },
    {
        "d": "shop.pimoroni.com",
        "b": "pimo",
        "u": "https://shop.pimoroni.com/search?q={{{s}}}"
    },
    {
        "d": "shop.pimoroni.com",
        "b": "pimoroni",
        "u": "https://shop.pimoroni.com/?q={{{s}}}"
    },
    {
        "d": "pinterest.com",
        "b": "pinterest",
        "u": "https://pinterest.com/search/?q={{{s}}}"
    },
    {
        "d": "shop.pixbreak.com",
        "b": "pix",
        "u": "http://shop.pixbreak.com/?s={{{s}}}"
    },
    {
        "d": "www.prisjakt.no",
        "b": "pjno",
        "u": "http://www.prisjakt.no/#rparams=ss={{{s}}} "
    },
    {
        "d": "www.prisjakt.nu",
        "b": "pj",
        "u": "https://www.prisjakt.nu/search?search={{{s}}}"
    },
    {
        "d": "www.plaisio.gr",
        "b": "plaisio",
        "u": "http://www.plaisio.gr/search.aspx?query={{{s}}}&catalogue=all&mode=searchlist"
    },
    {
        "d": "www.planetkey.de",
        "b": "planetkey",
        "u": "https://www.planetkey.de/suche/?s={{{s}}}"
    },
    {
        "d": "plase.net",
        "b": "plase",
        "u": "https://plase.net/?s= {{{s}}}&post_type=product"
    },
    {
        "d": "platekompaniet.no",
        "b": "platekompaniet",
        "u": "https://platekompaniet.no/search/?q={{{s}}}"
    },
    {
        "d": "www.customplaygroundequipment.com",
        "b": "playgrounds",
        "u": "https://www.customplaygroundequipment.com/search?search={{{s}}}"
    },
    {
        "d": "www.playstation.com",
        "b": "playstation",
        "u": "https://www.playstation.com/search-results/?q={{{s}}}"
    },
    {
        "d": "www.plombservice.fr",
        "b": "plombservice",
        "u": "http://www.plombservice.fr/catalogsearch/result/?imageField.x=0&imageField.y=0&q={{{s}}}"
    },
    {
        "d": "pimpmykeyboard.com",
        "b": "pmk",
        "u": "http://pimpmykeyboard.com/search.php?Search=&search_query={{{s}}}"
    },
    {
        "d": "primenow.amazon.com",
        "b": "pn",
        "u": "https://primenow.amazon.com/search?k={{{s}}}"
    },
    {
        "d": "primenow.amazon.de",
        "b": "pnde",
        "u": "https://primenow.amazon.de/search?k={{{s}}}"
    },
    {
        "d": "shop.pnp.co.za",
        "b": "pnp",
        "u": "http://shop.pnp.co.za/b2c_pnp/b2c/display/(cpgsize=12&layout=5.1-6_2_4_86_92_8_3&uiarea=1&carea=%24ROOT&cpgnum=1&cquery={{{s}}})/.do?rf=y"
    },
    {
        "d": "primenow.amazon.co.uk",
        "b": "pnuk",
        "u": "https://primenow.amazon.co.uk/search?k={{{s}}}"
    },
    {
        "d": "www.petersofkensington.com.au",
        "b": "pok",
        "u": "https://www.petersofkensington.com.au/Public/Catalog/searchresults.aspx?search={{{s}}}&issearch=true"
    },
    {
        "d": "www.polkaudio.com",
        "b": "polk",
        "u": "http://www.polkaudio.com/search/products?q={{{s}}}"
    },
    {
        "d": "www.pollin.de",
        "b": "pollin",
        "u": "http://www.pollin.de/shop/suchergebnis.html?S_TEXT={{{s}}}"
    },
    {
        "d": "postmates.com",
        "b": "poma",
        "u": "https://postmates.com/search?q={{{s}}}"
    },
    {
        "d": "www.poolsupplyworld.com",
        "b": "poolsupplyworld",
        "u": "http://www.poolsupplyworld.com/search.htm?searchBox={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.poppin.com",
        "b": "poppin",
        "u": "http://www.poppin.com/search?q={{{s}}}"
    },
    {
        "d": "porkbun.com",
        "b": "porkbun",
        "u": "https://porkbun.com/checkout/search?q={{{s}}}"
    },
    {
        "d": "poromagia.com",
        "b": "poromagia",
        "u": "https://poromagia.com/fi/search/?q={{{s}}}"
    },
    {
        "d": "www.evilinnocence.com",
        "b": "poser",
        "u": "http://www.evilinnocence.com/shop/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.postnord.dk",
        "b": "postdk",
        "u": "http://www.postnord.dk/da/Sider/TrackTrace.aspx?search={{{s}}}"
    },
    {
        "d": "www.allposters.com",
        "b": "posters",
        "u": "http://www.allposters.com/gallery.asp?startat=%2Fgallery.asp&CID=A34475974C344D66A5E4D6D2F5CDA949&txtSearch={{{s}}}&imageField2.x=0&imageField2.y=0"
    },
    {
        "d": "postmates.com",
        "b": "postmates",
        "u": "https://postmates.com/search?q={{{s}}}"
    },
    {
        "d": "www.postnl.nl",
        "b": "postnl",
        "u": "https://www.postnl.nl/search?q={{{s}}}&searchEntry=searchfield&boosting_label="
    },
    {
        "d": "www.postnord.no",
        "b": "postnord",
        "u": "http://www.postnord.no/minside/SOPS/{{{s}}}"
    },
    {
        "d": "www.potterybarn.com",
        "b": "potterybarn",
        "u": "http://www.potterybarn.com/search/results.html?words={{{s}}}"
    },
    {
        "d": "www.pentyofamelie.com",
        "b": "pottery",
        "u": "https://www.pentyofamelie.com/search/?term={{{s}}}"
    },
    {
        "d": "www.powells.com",
        "b": "powells",
        "u": "https://www.powells.com/searchresults?keyword= {{{s}}}"
    },
    {
        "d": "www.progressiverc.com",
        "b": "prc",
        "u": "http://www.progressiverc.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "preloved.com",
        "b": "preloved",
        "u": "http://preloved.com/?q={{{s}}}"
    },
    {
        "d": "www.prestoclassical.co.uk",
        "b": "presto",
        "u": "http://www.prestoclassical.co.uk/search.php?searchString={{{s}}}"
    },
    {
        "d": "pretium.direct",
        "b": "pretium",
        "u": "http://pretium.direct/search/?query={{{s}}}"
    },
    {
        "d": "www.prezzybox.com",
        "b": "prezzybox",
        "u": "http://www.prezzybox.com/Search/?s={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "price",
        "u": "https://www.amazon.com/s?k={{{s}}}"
    },
    {
        "d": "www.pricegrabber.com",
        "b": "pricegrabber",
        "u": "http://www.pricegrabber.com/{{{s}}}/products.html/form_keyword={{{s}}}/st=query/sv=findit_top"
    },
    {
        "d": "www.price.com.hk",
        "b": "pricehk",
        "u": "http://www.price.com.hk/search.php?g=A&q={{{s}}}"
    },
    {
        "d": "www.pricemania.sk",
        "b": "pricemania",
        "u": "https://www.pricemania.sk/katalog/vyhladavanie/{{{s}}}.html"
    },
    {
        "d": "www.price.ro",
        "b": "pricero",
        "u": "https://www.price.ro/index.php?action=q&text={{{s}}}&submit=Cauta"
    },
    {
        "d": "www.pricerunner.se",
        "b": "pricerunner",
        "u": "http://www.pricerunner.se/pl/360-364563094/Herrklaeder/Jam-OD-Yellow-Yellow-over-dyed-jean-jacket-priser?other_hits=%3B25607%3B%3B&q=acne+jam+od+yellow+yellow&ref=redirect&search={{{s}}}&sort=4"
    },
    {
        "d": "www.pricerunner.dk",
        "b": "pricerun",
        "u": "http://www.pricerunner.dk/search?q={{{s}}}"
    },
    {
        "d": "pricespy.co.nz",
        "b": "pricespy",
        "u": "https://pricespy.co.nz/search?search={{{s}}}"
    },
    {
        "d": "tweakers.net",
        "b": "pricewatch",
        "u": "http://tweakers.net/pricewatch/zoeken/?keyword={{{s}}}"
    },
    {
        "d": "www.outcast.amsterdam",
        "b": "pride",
        "u": "https://www.outcast.amsterdam/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.primeabgb.com",
        "b": "primeabgb",
        "u": "https://www.primeabgb.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "www.primrose.co.uk",
        "b": "primrose",
        "u": "http://www.primrose.co.uk/search.mvc?search_term={{{s}}}"
    },
    {
        "d": "printeera.com",
        "b": "printeera",
        "u": "https://printeera.com/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.prisguide.no",
        "b": "prisguide",
        "u": "https://www.prisguide.no/sok?q={{{s}}}"
    },
    {
        "d": "www.prisjakt.nu",
        "b": "prisjakt",
        "u": "https://www.prisjakt.nu/search?search={{{s}}}"
    },
    {
        "d": "www.prisjakt.nu",
        "b": "pris",
        "u": "https://www.prisjakt.nu/search?search={{{s}}}"
    },
    {
        "d": "www.procook.co.uk",
        "b": "procook",
        "u": "http://www.procook.co.uk/shop/search/?searchDep=main+site&searchstr={{{s}}}"
    },
    {
        "d": "www.precisionroller.com",
        "b": "proll",
        "u": "http://www.precisionroller.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.promobit.com.br",
        "b": "promobit",
        "u": "https://www.promobit.com.br/buscar?q={{{s}}}"
    },
    {
        "d": "prom.ua",
        "b": "prom",
        "u": "https://prom.ua/search?search_term={{{s}}}"
    },
    {
        "d": "www.proshop.dk",
        "b": "proshop",
        "u": "https://www.proshop.dk/?s={{{s}}}"
    },
    {
        "d": "www.protocentral.com",
        "b": "protocentral",
        "u": "https://www.protocentral.com/search?controller=search&orderby=position&orderway=desc&search_query={{{s}}}"
    },
    {
        "d": "www.provigo.ca",
        "b": "provigo",
        "u": "https://www.provigo.ca/search/?search-bar={{{s}}}"
    },
    {
        "d": "palmettostatearmory.com",
        "b": "psa",
        "u": "https://palmettostatearmory.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "store.playstation.com",
        "b": "psgca",
        "u": "https://store.playstation.com/en-ca/grid/search-game/1?query={{{s}}}"
    },
    {
        "d": "store.playstation.com",
        "b": "psnde",
        "u": "https://store.playstation.com/de-de/search/{{{s}}}"
    },
    {
        "d": "store.playstation.com",
        "b": "psnuk",
        "u": "http://store.playstation.com/#!/en-gb/search/q={{{s}}}"
    },
    {
        "d": "pricespy.co.nz",
        "b": "psnz",
        "u": "https://pricespy.co.nz/search?q={{{s}}}"
    },
    {
        "d": "www.playstation.com",
        "b": "ps",
        "u": "https://www.playstation.com/search-results/?q={{{s}}}"
    },
    {
        "d": "pricespy.co.uk",
        "b": "psuk",
        "u": "https://pricespy.co.uk/search?q={{{s}}}"
    },
    {
        "d": "jp.search.app.ricoh",
        "b": "ptax",
        "u": "http://jp.search.app.ricoh/en_imaging/search.x?q={{{s}}}"
    },
    {
        "d": "www.planttherapy.com",
        "b": "pth",
        "u": "https://www.planttherapy.com/search?Store_Code=PT&q={{{s}}}"
    },
    {
        "d": "www.publix.com",
        "b": "publix",
        "u": "http://www.publix.com/search?query={{{s}}}"
    },
    {
        "d": "www.pumpbiz.com",
        "b": "pumpbiz",
        "u": "http://www.pumpbiz.com/shopping_search.asp?searchString={{{s}}}&searchType=0&FIND.x=0&FIND.y=0&FIND=FIND+IT"
    },
    {
        "d": "www.pulseuniform.com",
        "b": "pu",
        "u": "https://www.pulseuniform.com/search.asp?q={{{s}}}"
    },
    {
        "d": "polarweldfin.com",
        "b": "pwf",
        "u": "https://polarweldfin.com/etsi?controller=search&s={{{s}}}"
    },
    {
        "d": "www.pricewatch.com",
        "b": "pw",
        "u": "http://www.pricewatch.com/search?q={{{s}}} "
    },
    {
        "d": "qpongo.com",
        "b": "qpon",
        "u": "http://qpongo.com/ddgsearch.aspx?q={{{s}}}"
    },
    {
        "d": "www.qvc.com",
        "b": "qvc",
        "u": "http://www.qvc.com/catalog/search.html?langId=-1&storeId=10251&catalogId=10151&keyword={{{s}}}"
    },
    {
        "d": "search.rakuten.co.jp",
        "b": "r10",
        "u": "https://search.rakuten.co.jp/search/mall/{{{s}}}/"
    },
    {
        "d": "www.racksforcars.com",
        "b": "racksforcars",
        "u": "https://www.racksforcars.com/store/search.asp?keyword={{{s}}}"
    },
    {
        "d": "www.racv.com.au",
        "b": "racv",
        "u": "https://www.racv.com.au/search-results.html?q={{{s}}}"
    },
    {
        "d": "www.radioshack.com",
        "b": "radioshack",
        "u": "https://www.radioshack.com/search?q={{{s}}}"
    },
    {
        "d": "www.rakuten.de",
        "b": "rakde",
        "u": "https://www.rakuten.de/suchen/{{{s}}}?category=0"
    },
    {
        "d": "global.rakuten.com",
        "b": "rakuteng",
        "u": "https://global.rakuten.com/en/search/?k={{{s}}}"
    },
    {
        "d": "search.rakuten.co.jp",
        "b": "rakuten",
        "u": "http://search.rakuten.co.jp/search/mall/{{{s}}}/"
    },
    {
        "d": "www.reliableaftermarketparts.com",
        "b": "raparts",
        "u": "https://www.reliableaftermarketparts.com/search?q={{{s}}}"
    },
    {
        "d": "www.rapidonline.com",
        "b": "rapidonline",
        "u": "https://www.rapidonline.com/Catalogue/Search?Query={{{s}}}"
    },
    {
        "d": "raru.co.za",
        "b": "raru",
        "u": "https://raru.co.za/search/{{{s}}}"
    },
    {
        "d": "www.topratgeber24.de",
        "b": "ratgeber",
        "u": "https://www.topratgeber24.de/suche?s={{{s}}}"
    },
    {
        "d": "raymond-nh.com",
        "b": "raymond",
        "u": "https://raymond-nh.com/?s={{{s}}}"
    },
    {
        "d": "www.razer.com",
        "b": "razer",
        "u": "https://www.razer.com/search/?text={{{s}}}"
    },
    {
        "d": "raleigh.craigslist.org",
        "b": "rcl",
        "u": "https://raleigh.craigslist.org/search/?query={{{s}}}"
    },
    {
        "d": "www.recyclivre.com",
        "b": "rclivre",
        "u": "https://www.recyclivre.com/shop/recherche?orderby=price&orderway=asc&search_query={{{s}}}&submit_search=&s="
    },
    {
        "d": "www.realcanadiansuperstore.ca",
        "b": "rcss",
        "u": "https://www.realcanadiansuperstore.ca/search/?search-bar={{{s}}}"
    },
    {
        "d": "www.rueducommerce.fr",
        "b": "rdc",
        "u": "https://www.rueducommerce.fr/recherche/{{{s}}}"
    },
    {
        "d": "www.rebel.pl",
        "b": "rebel",
        "u": "https://www.rebel.pl/e4u.php/1,ModProducts/Search?search[submit]=1&search[phrase]={{{s}}}"
    },
    {
        "d": "www.rebuy.de",
        "b": "rebuy",
        "u": "https://www.rebuy.de/kaufen/suchen?q={{{s}}}"
    },
    {
        "d": "www.reckless.com",
        "b": "reckless",
        "u": "http://www.reckless.com/index.php?keywords={{{s}}}&format=&cond=&store=&is_search=true&srch=Search"
    },
    {
        "d": "www.reclameaqui.com.br",
        "b": "reclame",
        "u": "http://www.reclameaqui.com.br/busca/?q={{{s}}}"
    },
    {
        "d": "www.watchrecon.com",
        "b": "recon",
        "u": "http://www.watchrecon.com/?query={{{s}}}"
    },
    {
        "d": "recordclick.com",
        "b": "recordclick",
        "u": "http://recordclick.com/?s={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.redable.nl",
        "b": "redable",
        "u": "https://www.redable.nl/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.redbubble.com",
        "b": "redbubble",
        "u": "http://www.redbubble.com/shop/{{{s}}}"
    },
    {
        "d": "www.recreationhobbiescenter.com",
        "b": "redcat",
        "u": "https://www.recreationhobbiescenter.com/pages/search-results-page?q={{{s}}}"
    },
    {
        "d": "www.redeye.com.au",
        "b": "redeye",
        "u": "https://www.redeye.com.au/answer.asp?reion=USA&atype=both&artist={{{s}}}"
    },
    {
        "d": "www.redflagdeals.com",
        "b": "redflagdeals",
        "u": "http://www.redflagdeals.com/search/?={{{s}}}"
    },
    {
        "d": "www.refreshcartridges.co.uk",
        "b": "refresh",
        "u": "http://www.refreshcartridges.co.uk/advanced_search_result.php?q={{{s}}}"
    },
    {
        "d": "secure.reichelt.de",
        "b": "reichelt",
        "u": "https://secure.reichelt.de/?ACTION=446;SEARCH={{{s}}}"
    },
    {
        "d": "www.rei.com",
        "b": "rei",
        "u": "https://www.rei.com/search?q={{{s}}}"
    },
    {
        "d": "www.reisartikelen.nl",
        "b": "reisartikelen",
        "u": "https://www.reisartikelen.nl/search/?q={{{s}}}"
    },
    {
        "d": "bendixkingradios.com",
        "b": "relmbk",
        "u": "https://bendixkingradios.com/catalogsearch/result/?q={{{s}}} "
    },
    {
        "d": "represent.com",
        "b": "repm",
        "u": "https://represent.com/search?q={{{s}}}"
    },
    {
        "d": "www.replacements.com",
        "b": "rep",
        "u": "http://www.replacements.com/search/?query={{{s}}}"
    },
    {
        "d": "en.resto.be",
        "b": "restobe",
        "u": "http://en.resto.be/business/search?searchbox=true&businessTypeId=1&fullText={{{s}}}"
    },
    {
        "d": "www.retailmenot.com",
        "b": "retailmenot",
        "u": "http://www.retailmenot.com/view/{{{s}}}"
    },
    {
        "d": "www.revamed.com",
        "b": "revamed",
        "u": "https://www.revamed.com/search?s={{{s}}} "
    },
    {
        "d": "reverb.com",
        "b": "reverb",
        "u": "https://reverb.com/marketplace?query={{{s}}}"
    },
    {
        "d": "www.reviewgeek.com",
        "b": "reviewgeek",
        "u": "https://www.reviewgeek.com/?s={{{s}}}"
    },
    {
        "d": "reviewmeta.com",
        "b": "reviewmeta",
        "u": "https://reviewmeta.com/search?q={{{s}}}"
    },
    {
        "d": "reviewscon.com",
        "b": "reviews",
        "u": "https://reviewscon.com/?s={{{s}}}&post_type=&catid="
    },
    {
        "d": "www.revolico.com",
        "b": "revolico",
        "u": "https://www.revolico.com/search.html?q={{{s}}}"
    },
    {
        "d": "www.revolve.com",
        "b": "revolve",
        "u": "https://www.revolve.com/r/Search.jsp?search={{{s}}}"
    },
    {
        "d": "www.revzilla.com",
        "b": "revzilla",
        "u": "http://www.revzilla.com/search?query={{{s}}}&commit=Search"
    },
    {
        "d": "www.rewe.de",
        "b": "rewe",
        "u": "https://www.rewe.de/suche/?search={{{s}}}"
    },
    {
        "d": "www.rexel.de",
        "b": "rexel",
        "u": "https://www.rexel.de/search/?text={{{s}}}"
    },
    {
        "d": "rfclipart.com",
        "b": "rfclipart",
        "u": "http://rfclipart.com/search.html?text={{{s}}}"
    },
    {
        "d": "www.rhydolabz.com",
        "b": "rhydo",
        "u": "https://www.rhydolabz.com/advanced_search_result.html?keyword={{{s}}}"
    },
    {
        "d": "www.ricardo.ch",
        "b": "ricardo",
        "u": "https://www.ricardo.ch/de/s/{{{s}}}"
    },
    {
        "d": "ridibooks.com",
        "b": "ridi",
        "u": "https://ridibooks.com/search/?q={{{s}}}"
    },
    {
        "d": "www.robokart.com",
        "b": "rk",
        "u": "http://www.robokart.com/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.retailmenot.com",
        "b": "rmn",
        "u": "http://www.retailmenot.com/s/{{{s}}}"
    },
    {
        "d": "www.rockauto.com",
        "b": "rockauto",
        "u": "https://www.rockauto.com/en/partsearch/?partnum={{{s}}}"
    },
    {
        "d": "www.rocketindustrial.com",
        "b": "rocket",
        "u": "http://www.rocketindustrial.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "rokomari.com",
        "b": "rokomari",
        "u": "http://rokomari.com/search?term={{{s}}}"
    },
    {
        "d": "www.rossmann.de",
        "b": "rossde",
        "u": "https://www.rossmann.de/verbraucherportal/toolbox/suche.html?query={{{s}}}"
    },
    {
        "d": "www.router24.info",
        "b": "router",
        "u": "https://www.router24.info/uebersicht?s={{{s}}}"
    },
    {
        "d": "rozetka.com.ua",
        "b": "rozetka",
        "u": "http://rozetka.com.ua/search/?section_id=&section=&text={{{s}}}&rz-search-button="
    },
    {
        "d": "www.rainbowresource.com",
        "b": "rrc",
        "u": "http://www.rainbowresource.com/searchspring.php?q={{{s}}}"
    },
    {
        "d": "uk.rs-online.com",
        "b": "rsc",
        "u": "http://uk.rs-online.com/web/c/?searchTerm={{{s}}}"
    },
    {
        "d": "de.rs-online.com",
        "b": "rsde",
        "u": "http://de.rs-online.com/web/c/?searchTerm={{{s}}}"
    },
    {
        "d": "es.rs-online.com",
        "b": "rses",
        "u": "https://es.rs-online.com/web/c/?sra=oss&r=t&searchTerm={{{s}}}"
    },
    {
        "d": "radiospares-fr.rs-online.com",
        "b": "rsfr",
        "u": "http://radiospares-fr.rs-online.com/web/c/?searchTerm={{{s}}}"
    },
    {
        "d": "it.rs-online.com",
        "b": "rsit",
        "u": "http://it.rs-online.com/web/c/?searchTerm={{{s}}}"
    },
    {
        "d": "nl.rs-online.com",
        "b": "rsnl",
        "u": "http://nl.rs-online.com/web/c/?searchTerm={{{s}}}"
    },
    {
        "d": "nz.rs-online.com",
        "b": "rsnz",
        "u": "https://nz.rs-online.com/web/c/?sra=oss&r=t&searchTerm={{{s}}}"
    },
    {
        "d": "ph.rs-online.com",
        "b": "rsph",
        "u": "http://ph.rs-online.com/web/c/?searchTerm={{{s}}}"
    },
    {
        "d": "uk.rs-online.com",
        "b": "rsuk",
        "u": "http://uk.rs-online.com/web/c/?sra=oss&r=t&searchTerm={{{s}}}"
    },
    {
        "d": "runsignup.com",
        "b": "rsu",
        "u": "https://runsignup.com/Races?name={{{s}}}"
    },
    {
        "d": "za.rs-online.com",
        "b": "rsza",
        "u": "https://za.rs-online.com/web/c/?sra=oss&r=t&searchTerm={{{s}}}"
    },
    {
        "d": "fr.shopping.rakuten.com",
        "b": "rtfr",
        "u": "https://fr.shopping.rakuten.com/s/{{{s}}}"
    },
    {
        "d": "www.rtings.com",
        "b": "rtings",
        "u": "https://www.rtings.com/search?cx=partner-pub-9742413462301870%3A7201788216&cof=FORID%3A10&ie=UTF-8&silo=&q={{{s}}}"
    },
    {
        "d": "www.rubylane.com",
        "b": "rubylane",
        "u": "http://www.rubylane.com/search?q={{{s}}}"
    },
    {
        "d": "www.retrovideogamestore.com",
        "b": "rugame",
        "u": "https://www.retrovideogamestore.com/index.php?option=com_mijoshop&route=product/search&search={{{s}}}"
    },
    {
        "d": "www.rusta.com",
        "b": "rusta",
        "u": "http://www.rusta.com/se/Sok/{{{s}}}/"
    },
    {
        "d": "find.ruten.com.tw",
        "b": "ruten",
        "u": "http://find.ruten.com.tw/search/s000.php?enc=u&searchfrom=searchf&k={{{s}}}&t=0"
    },
    {
        "d": "www.billygrahambookstore.org",
        "b": "ruth",
        "u": "https://www.billygrahambookstore.org/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.rutronik24.com",
        "b": "rutronik",
        "u": "https://www.rutronik24.com/search-result/qs:{{{s}}}"
    },
    {
        "d": "reviewmeta.com",
        "b": "rvm",
        "u": "https://reviewmeta.com/search?q={{{s}}}"
    },
    {
        "d": "ryanscomputers.com",
        "b": "ryans",
        "u": "https://ryanscomputers.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "rozetka.com.ua",
        "b": "rztk",
        "u": "https://rozetka.com.ua/ua/search/?text={{{s}}}"
    },
    {
        "d": "society6.com",
        "b": "s6all",
        "u": "http://society6.com/search/?q={{{s}}}"
    },
    {
        "d": "society6.com",
        "b": "s6",
        "u": "http://society6.com/search/?q={{{s}}}"
    },
    {
        "d": "smile.amazon.de",
        "b": "sade",
        "u": "https://smile.amazon.de/s/?field-keywords={{{s}}}"
    },
    {
        "d": "www.sahibinden.com",
        "b": "sahibinden",
        "u": "http://www.sahibinden.com/kelime-ile-arama?query_text={{{s}}}"
    },
    {
        "d": "www.sainsburys.co.uk",
        "b": "sainsburys",
        "u": "https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/SearchDisplayView?storeId=10151&searchTerm={{{s}}}"
    },
    {
        "d": "www.saiyasune.com",
        "b": "saiyasune",
        "u": "https://www.saiyasune.com/I1W{{{s}}}.html"
    },
    {
        "d": "www.salidzini.lv",
        "b": "sal",
        "u": "http://www.salidzini.lv/search.php?q={{{s}}}"
    },
    {
        "d": "smile.amazon.de",
        "b": "samde",
        "u": "https://smile.amazon.de/s/?url=search-alias%3Daps&field-keywords={{{s}}}"
    },
    {
        "d": "www.samsclub.com",
        "b": "samsclub",
        "u": "https://www.samsclub.com/sams/search/searchResults.jsp?searchTerm={{{s}}}&searchCategoryId=all"
    },
    {
        "d": "www.sanalpazar.com",
        "b": "sanalpazar",
        "u": "http://www.sanalpazar.com/urunara?criteria={{{s}}}"
    },
    {
        "d": "sapnaonline.com",
        "b": "sapna",
        "u": "https://sapnaonline.com/general-search?searchkey={{{s}}}"
    },
    {
        "d": "busca.saraiva.com.br",
        "b": "saraiva",
        "u": "https://busca.saraiva.com.br/?q={{{s}}}"
    },
    {
        "d": "www.saturngames.co.uk",
        "b": "saturngames",
        "u": "http://www.saturngames.co.uk/?searchStr={{{s}}}&_a=viewCat&Submit=Go"
    },
    {
        "d": "www.saturn.de",
        "b": "saturn",
        "u": "https://www.saturn.de/de/search.html?query={{{s}}}&searchProfile=onlineshop&channel=sedede"
    },
    {
        "d": "smile.amazon.co.uk",
        "b": "sauk",
        "u": "https://smile.amazon.co.uk/s/?field-keywords={{{s}}}"
    },
    {
        "d": "spendabit.co",
        "b": "sbit",
        "u": "https://spendabit.co/go?q={{{s}}}"
    },
    {
        "d": "www.scan.co.uk",
        "b": "scan",
        "u": "http://www.scan.co.uk/search.aspx?q={{{s}}}"
    },
    {
        "d": "sales.starcitygames.com",
        "b": "scg",
        "u": "http://sales.starcitygames.com/search.php?substring={{{s}}}"
    },
    {
        "d": "www.schottenland.de",
        "b": "schottenland",
        "u": "http://www.schottenland.de/suche/?searchstring={{{s}}}"
    },
    {
        "d": "www.schuh.co.uk",
        "b": "schuh",
        "u": "http://www.schuh.co.uk/results.aspx#st={{{s}}}"
    },
    {
        "d": "www.scotbycycles.co.uk",
        "b": "scotby",
        "u": "https://www.scotbycycles.co.uk/facetresults.aspx?Term={{{s}}}"
    },
    {
        "d": "scottwyden.com",
        "b": "scottwyden",
        "u": "https://scottwyden.com/?s={{{s}}}"
    },
    {
        "d": "www.screwfix.com",
        "b": "screwfix",
        "u": "https://www.screwfix.com/search?search={{{s}}}"
    },
    {
        "d": "www.scrooge.co.uk",
        "b": "scrooge",
        "u": "https://www.scrooge.co.uk/search?keyphrase={{{s}}}"
    },
    {
        "d": "www.scuba.com",
        "b": "scuba",
        "u": "https://www.scuba.com/resources/search1.aspx?Action=Search&Search={{{s}}}"
    },
    {
        "d": "slickdeals.net",
        "b": "sd",
        "u": "https://slickdeals.net/newsearch.php?q={{{s}}}&searcharea=deals&searchin=first"
    },
    {
        "d": "www.seamless.com",
        "b": "seamless",
        "u": "https://www.seamless.com/search?queryText={{{s}}}"
    },
    {
        "d": "www.searchtempest.com",
        "b": "searchtempest",
        "u": "http://www.searchtempest.com/search?location=12345&search_string={{{s}}}&cityselect=zip"
    },
    {
        "d": "www.sears.ca",
        "b": "searsca",
        "u": "http://www.sears.ca/en/search?q={{{s}}}&lang=default"
    },
    {
        "d": "www.searsoutlet.com",
        "b": "searsoutlet",
        "u": "http://www.searsoutlet.com/d/products.jsp?md=srh_md&stxt={{{s}}}"
    },
    {
        "d": "www.sears.com",
        "b": "sears",
        "u": "http://www.sears.com/shc/s/search_10153_12605?keyword={{{s}}}"
    },
    {
        "d": "www.seefelder.net",
        "b": "seefelder",
        "u": "https://www.seefelder.net/suche?id=&searchTerm={{{s}}}"
    },
    {
        "d": "selectfashion.pk",
        "b": "select",
        "u": "http://selectfashion.pk?term={{{s}}}"
    },
    {
        "d": "search.selu.edu",
        "b": "selu",
        "u": "http://search.selu.edu/search?q={{{s}}}"
    },
    {
        "d": "www.sephora.com.au",
        "b": "sephoraau",
        "u": "https://www.sephora.com.au/search?q={{{s}}}"
    },
    {
        "d": "www.sephora.com",
        "b": "sephora",
        "u": "https://www.sephora.com/search?keyword={{{s}}}"
    },
    {
        "d": "www.seur.com",
        "b": "seur",
        "u": "http://www.seur.com/seguimiento-online.do?segOnlineIdentificador={{{s}}}"
    },
    {
        "d": "www.sfbok.se",
        "b": "sfbok",
        "u": "https://www.sfbok.se/search?keys={{{s}}}"
    },
    {
        "d": "www.sparkfun.com",
        "b": "sfe",
        "u": "http://www.sparkfun.com/search/results?term={{{s}}}&what=products"
    },
    {
        "d": "sfxperformance.com",
        "b": "sfxperformance",
        "u": "https://sfxperformance.com/search/part-search.asp?search={{{s}}}"
    },
    {
        "d": "apps.shopify.com",
        "b": "s.fyapp",
        "u": "https://apps.shopify.com/search?q={{{s}}}&st_source="
    },
    {
        "d": "www.sheetmusicplus.com",
        "b": "sheetmusicplus",
        "u": "http://www.sheetmusicplus.com/search?q={{{s}}} "
    },
    {
        "d": "www.sherwin-williams.com",
        "b": "sherwin",
        "u": "https://www.sherwin-williams.com/SearchDisplay?categoryId=&storeId=10151&catalogId=11051&langId=-1&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=list&beginIndex=0&searchType=1000&pageSize=6&globalSearch=true&searchTerm={{{s}}}#facet:&productBeginIndex:0&contentBeginIndex:0&orderBy:&orderByContent:&pageView:list&minPrice:&maxPrice:&pageSize:&"
    },
    {
        "d": "shirtoid.com",
        "b": "shirtoid",
        "u": "https://shirtoid.com/search/{{{s}}}"
    },
    {
        "d": "www.shoop.de",
        "b": "shoopde",
        "u": "https://www.shoop.de/suche?q={{{s}}}"
    },
    {
        "d": "www.shopathome.com",
        "b": "shopathome",
        "u": "https://www.shopathome.com/search?query={{{s}}}"
    },
    {
        "d": "www.shopcade.com",
        "b": "shopcade",
        "u": "https://www.shopcade.com/search?query={{{s}}}"
    },
    {
        "d": "www.shop.ca",
        "b": "shopca",
        "u": "https://www.shop.ca/webapp/wcs/stores/servlet/SearchDisplay?storeId=10201&catalogId=10301&langId=-1&pageSize=48&beginIndex=0&searchSource=Q&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=imageOnly&searchTermScope=-1&searchTerm={{{s}}}"
    },
    {
        "d": "shopclues.com",
        "b": "shopclues",
        "u": "http://shopclues.com/?q={{{s}}}: "
    },
    {
        "d": "www.shopdisciple.com",
        "b": "shopdisciple",
        "u": "https://www.shopdisciple.com/search?q={{{s}}}"
    },
    {
        "d": "shopee.ph",
        "b": "shopeeph",
        "u": "https://shopee.ph/search?keyword={{{s}}}"
    },
    {
        "d": "shopee.tw",
        "b": "shopee",
        "u": "https://shopee.tw/search/?keyword={{{s}}}"
    },
    {
        "d": "shophenco.com",
        "b": "shophenco",
        "u": "https://shophenco.com/?q={{{s}}}"
    },
    {
        "d": "www.shopomo.com",
        "b": "shopomo",
        "u": "http://www.shopomo.com/search?q={{{s}}} "
    },
    {
        "d": "www.google.com",
        "b": "shopping",
        "u": "https://www.google.com/products?q={{{s}}}&sa=N&tab=pf"
    },
    {
        "d": "www.shopto.net",
        "b": "shopto",
        "u": "https://www.shopto.net/search/newSearchPage?Filter_department=&newsearch={{{s}}}"
    },
    {
        "d": "shopping.yahoo.com",
        "b": "shop",
        "u": "http://shopping.yahoo.com/search?p={{{s}}}"
    },
    {
        "d": "www.shopyourway.com",
        "b": "shopyourway",
        "u": "http://www.shopyourway.com/search/products?q={{{s}}}"
    },
    {
        "d": "www.shopzilla.com",
        "b": "shopzilla",
        "u": "http://www.shopzilla.com/{{{s}}}/search"
    },
    {
        "d": "en.shpock.com",
        "b": "shpock",
        "u": "https://en.shpock.com/q/{{{s}}}/"
    },
    {
        "d": "www.shoptimate.com",
        "b": "shtm",
        "u": "http://www.shoptimate.com/search?q={{{s}}}"
    },
    {
        "d": "www.staticice.com.au",
        "b": "sice",
        "u": "http://www.staticice.com.au/cgi-bin/search.cgi?q={{{s}}}"
    },
    {
        "d": "www.providentmetals.com",
        "b": "silver",
        "u": "https://www.providentmetals.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "simania.co.il",
        "b": "simania",
        "u": "http://simania.co.il/searchBooks.php?searchType=tabAll&query={{{s}}}"
    },
    {
        "d": "www.simplyscuba.com",
        "b": "simplyscuba",
        "u": "https://www.simplyscuba.com/pages/search-results-page?q={{{s}}}"
    },
    {
        "d": "sinopak.net",
        "b": "sinopak",
        "u": "http://sinopak.net/search?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search=Search"
    },
    {
        "d": "www.silberschmiede-online.de",
        "b": "sischmi",
        "u": "https://www.silberschmiede-online.de/advanced_search_result.php?keywords={{{s}}}"
    },
    {
        "d": "www.sitag.ch",
        "b": "sitag",
        "u": "http://www.sitag.ch/suchen/?tx_indexedsearch%5Bsword%5D={{{s}}}"
    },
    {
        "d": "www.sportkopf24.de",
        "b": "sk24",
        "u": "https://www.sportkopf24.de/?ActionCall=WebActionArticleSearch&Params%5BSearchParam%5D={{{s}}}"
    },
    {
        "d": "www.skal-man.se",
        "b": "skalman",
        "u": "https://www.skal-man.se/sok/{{{s}}}"
    },
    {
        "d": "www.skapiec.pl",
        "b": "skapiec",
        "u": "http://www.skapiec.pl/szukaj/w_calym_serwisie/{{{s}}}"
    },
    {
        "d": "www.skelbimai.lt",
        "b": "skelbimai",
        "u": "https://www.skelbimai.lt/paieska?q={{{s}}}"
    },
    {
        "d": "skelbiu.lt",
        "b": "skelbiu",
        "u": "http://skelbiu.lt/skelbimai/?keywords={{{s}}}"
    },
    {
        "d": "skinflint.co.uk",
        "b": "skinflint",
        "u": "http://skinflint.co.uk/?fs={{{s}}}"
    },
    {
        "d": "www.skroutz.gr",
        "b": "skroutz",
        "u": "https://www.skroutz.gr/search?keyphrase={{{s}}}"
    },
    {
        "d": "slickdeals.net",
        "b": "slickdeals",
        "u": "http://slickdeals.net/sdsearch.php?forumchoice%5B%5D=9&search={{{s}}}&mode=forum&showposts=0&sdsearch_archive=0&firstpost=1"
    },
    {
        "d": "smile.amazon.com",
        "b": "smam",
        "u": "http://smile.amazon.com/s/?field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.co.uk",
        "b": "smamuk",
        "u": "https://smile.amazon.co.uk/s?field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.com",
        "b": "sma",
        "u": "https://smile.amazon.com/s/&field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.de",
        "b": "smde",
        "u": "http://smile.amazon.de/s?field-keywords={{{s}}}"
    },
    {
        "d": "www.sheetmusicdirect.com",
        "b": "smd",
        "u": "http://www.sheetmusicdirect.com/Search.aspx?query={{{s}}}"
    },
    {
        "d": "st-sm.com",
        "b": "s&m",
        "u": "https://st-sm.com/sante-et-minceur/en/search?s={{{s}}}"
    },
    {
        "d": "smile.amazon.com",
        "b": "smile",
        "u": "https://smile.amazon.com/s?field-keywords={{{s}}}"
    },
    {
        "d": "smile.amazon.co.uk",
        "b": "smileuk",
        "u": "https://smile.amazon.co.uk/s?field-keywords={{{s}}}"
    },
    {
        "d": "www.smithsfoodanddrug.com",
        "b": "smiths",
        "u": "https://www.smithsfoodanddrug.com/search?query={{{s}}}&searchType=natural"
    },
    {
        "d": "search.smzdm.com",
        "b": "smzdm",
        "u": "https://search.smzdm.com/?c=home&s={{{s}}}"
    },
    {
        "d": "www.snapdeal.com",
        "b": "snapdeal",
        "u": "http://www.snapdeal.com/search?keyword={{{s}}}"
    },
    {
        "d": "www.snapdeal.com",
        "b": "snd",
        "u": "http://www.snapdeal.com/search?noOfResults=20&keyword={{{s}}}"
    },
    {
        "d": "www.snogard.de",
        "b": "snogard",
        "u": "https://www.snogard.de/suche.html?suchwort={{{s}}}"
    },
    {
        "d": "www.sobeys.com",
        "b": "sobeys",
        "u": "http://www.sobeys.com/en/search/?search={{{s}}}"
    },
    {
        "d": "www.socksandmore.dk",
        "b": "sockandmore",
        "u": "http://www.socksandmore.dk/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.soft32.com",
        "b": "soft32",
        "u": "http://www.soft32.com/search/?k={{{s}}}&submit="
    },
    {
        "d": "www.billing.softicweb.com",
        "b": "softicweb",
        "u": "https://www.billing.softicweb.com/cart.php?a=add&domain=register&query={{{s}}}"
    },
    {
        "d": "www.solopress.com",
        "b": "solopress",
        "u": "https://www.solopress.com/search?searchTerm={{{s}}}"
    },
    {
        "d": "www.sonnentor.com",
        "b": "sonnentor",
        "u": "https://www.sonnentor.com/de-at/find?q={{{s}}}&c=Alle"
    },
    {
        "d": "soov-ee.postimees.ee",
        "b": "soov",
        "u": "http://soov-ee.postimees.ee/keyword-{{{s}}}/listings.html"
    },
    {
        "d": "www.sorabel.com",
        "b": "sorabel",
        "u": "https://www.sorabel.com/products/search?query={{{s}}}"
    },
    {
        "d": "www.soul-flower.com",
        "b": "soulflower",
        "u": "http://www.soul-flower.com/mm5/merchant.mvc?Screen=search&onlyone=1&sort=id.desc&x=0&y=0&Search={{{s}}}"
    },
    {
        "d": "uae.souq.com",
        "b": "souq",
        "u": "https://uae.souq.com/ae-en/{{{s}}}/s/?as=1"
    },
    {
        "d": "kfz-schlachter.de",
        "b": "spare-part",
        "u": "https://kfz-schlachter.de/Store?q={{{s}}}"
    },
    {
        "d": "www.sparkfun.com",
        "b": "sparkfun",
        "u": "https://www.sparkfun.com/search/results?term={{{s}}}"
    },
    {
        "d": "packages.speedeedelivery.com",
        "b": "spd",
        "u": "http://packages.speedeedelivery.com/packageDetail.php?barcode={{{s}}}"
    },
    {
        "d": "www.speedyhen.com",
        "b": "speedyhen",
        "u": "https://www.speedyhen.com/Search/Keyword?keyword={{{s}}}"
    },
    {
        "d": "www.speurders.nl",
        "b": "speur",
        "u": "http://www.speurders.nl/overzicht/?query={{{s}}}"
    },
    {
        "d": "www.spreadshirt.com",
        "b": "sprd",
        "u": "https://www.spreadshirt.com/{{{s}}}"
    },
    {
        "d": "spreadshirt.com",
        "b": "spreadshirt",
        "u": "http://spreadshirt.com/{{{s}}}"
    },
    {
        "d": "www.surplex.com",
        "b": "spx",
        "u": "https://www.surplex.com/de/maschinen.html?tx_surplex_pi1%5Bsword%5D={{{s}}}"
    },
    {
        "d": "www.sqprofessional.com",
        "b": "sqprofessional",
        "u": "http://www.sqprofessional.com/?q={{{s}}}"
    },
    {
        "d": "stacksocial.com",
        "b": "stacksocial",
        "u": "https://stacksocial.com/search?utf8=✓&query={{{s}}}"
    },
    {
        "d": "www.stadium.se",
        "b": "stadium",
        "u": "https://www.stadium.se/search?SearchTerm={{{s}}}"
    },
    {
        "d": "www.staples.ca",
        "b": "staplesca",
        "u": "http://www.staples.ca/{{{s}}}/directory_{{{s}}}_20051_1_20001"
    },
    {
        "d": "www.staples.com",
        "b": "staples",
        "u": "http://www.staples.com/office/supplies/StaplesSearch?searchkey={{{s}}}&storeId=10001&catalogId=10051&langId=-1&fromUrl=home"
    },
    {
        "d": "staticice.com.au",
        "b": "staticice",
        "u": "http://staticice.com.au/cgi-bin/search.cgi?q={{{s}}}"
    },
    {
        "d": "www.staxtradecentres.co.uk",
        "b": "stax",
        "u": "http://www.staxtradecentres.co.uk/search/?keys={{{s}}}"
    },
    {
        "d": "staygb.com",
        "b": "staygb",
        "u": "https://staygb.com/search?q={{{s}}}"
    },
    {
        "d": "www.stealengine.com",
        "b": "steal",
        "u": "https://www.stealengine.com/?q={{{s}}}"
    },
    {
        "d": "www.steelcase.com",
        "b": "steelcase",
        "u": "https://www.steelcase.com/?s={{{s}}}"
    },
    {
        "d": "www.steimatzky.co.il",
        "b": "steimatzky",
        "u": "http://www.steimatzky.co.il/Steimatzky/Pages/SearchResult.aspx?SearchType=Simple&SearchSimpleText={{{s}}}"
    },
    {
        "d": "store.steampowered.com",
        "b": "steme",
        "u": "https://store.steampowered.com/search/?term={{{s}}}"
    },
    {
        "d": "www.engadin.stmoritz.ch",
        "b": "stmoritz",
        "u": "https://www.engadin.stmoritz.ch/suche/q.{{{s}}}/"
    },
    {
        "d": "stockx.com",
        "b": "stockx",
        "u": "https://stockx.com/search?s={{{s}}}"
    },
    {
        "d": "www.sierratradingpost.com",
        "b": "stp",
        "u": "http://www.sierratradingpost.com/s~{{{s}}}"
    },
    {
        "d": "streeteasy.com",
        "b": "street",
        "u": "http://streeteasy.com/search?utf8=%E2%9C%93&search={{{s}}}"
    },
    {
        "d": "www.strefasluchu.pl",
        "b": "strefasluchu",
        "u": "http://www.strefasluchu.pl/?s={{{s}}}"
    },
    {
        "d": "www.strumentimusicali.net",
        "b": "strumenti",
        "u": "https://www.strumentimusicali.net/advanced_search_result.php?manufacturers_id=&keywords={{{s}}}&inc_subcat=1"
    },
    {
        "d": "www.subito.it",
        "b": "subito",
        "u": "http://www.subito.it/annunci-italia/vendita/usato/?q={{{s}}}"
    },
    {
        "d": "www.submarino.com.br",
        "b": "submarino",
        "u": "https://www.submarino.com.br/busca?conteudo={{{s}}}"
    },
    {
        "d": "www.sulit.com.ph",
        "b": "sulit",
        "u": "http://www.sulit.com.ph/index.php/classifieds+directory/q/{{{s}}}"
    },
    {
        "d": "www.sunnysports.com",
        "b": "sunnysports",
        "u": "http://www.sunnysports.com/search?searchinfo={{{s}}}"
    },
    {
        "d": "www.realcanadiansuperstore.ca",
        "b": "superstore",
        "u": "https://www.realcanadiansuperstore.ca/search/?search-bar={{{s}}}"
    },
    {
        "d": "superstropdas.nl",
        "b": "superstropdas",
        "u": "http://superstropdas.nl/?s={{{s}}}"
    },
    {
        "d": "www.surplustraders.net",
        "b": "surplus",
        "u": "https://www.surplustraders.net/catalogsearch/advanced/result/?name={{{s}}}"
    },
    {
        "d": "www.swalter.com",
        "b": "swalter",
        "u": "http://www.swalter.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "swappa.com",
        "b": "swappa",
        "u": "https://swappa.com/search?q={{{s}}}"
    },
    {
        "d": "swappa.com",
        "b": "swap",
        "u": "https://swappa.com/search?q={{{s}}}"
    },
    {
        "d": "www.sweetwater.com",
        "b": "sweetwater",
        "u": "http://www.sweetwater.com/store/search.php?s={{{s}}}"
    },
    {
        "d": "www.swoop.ge",
        "b": "swoopge",
        "u": "https://www.swoop.ge/search?query={{{s}}}"
    },
    {
        "d": "www.swoop.ge",
        "b": "swoop",
        "u": "https://www.swoop.ge/search?query={{{s}}}"
    },
    {
        "d": "swtl.pt",
        "b": "swtl",
        "u": "http://swtl.pt/web/index.php?route=product/isearch&search={{{s}}}"
    },
    {
        "d": "www.sweetwater.com",
        "b": "swtr",
        "u": "https://www.sweetwater.com/store/search.php?s={{{s}}}"
    },
    {
        "d": "www.systembolaget.se",
        "b": "systembolaget",
        "u": "http://www.systembolaget.se/?searchquery={{{s}}}"
    },
    {
        "d": "www.systembolaget.se",
        "b": "systemet",
        "u": "https://www.systembolaget.se/Sok-dryck/?searchquery={{{s}}}"
    },
    {
        "d": "www.shopyourway.com",
        "b": "syw",
        "u": "http://www.shopyourway.com/search/products?q={{{s}}}"
    },
    {
        "d": "www.time2game.be",
        "b": "t2g",
        "u": "http://www.time2game.be/index.php?main_page=advanced_search_result&search_in_description=1&keyword={{{s}}}"
    },
    {
        "d": "tactical-medicine.com",
        "b": "tacmed",
        "u": "https://tactical-medicine.com/search?q={{{s}}}"
    },
    {
        "d": "www.tacojohns.com",
        "b": "tacojohns",
        "u": "https://www.tacojohns.com/?s={{{s}}}"
    },
    {
        "d": "www.takealot.com",
        "b": "takealot",
        "u": "http://www.takealot.com/all/?qsearch={{{s}}}"
    },
    {
        "d": "www.tanishq.co.in",
        "b": "tanishq",
        "u": "https://www.tanishq.co.in/search-result/{{{s}}}"
    },
    {
        "d": "www.tanum.no",
        "b": "tanum",
        "u": "http://www.tanum.no/tanum/search/search.action?query={{{s}}}"
    },
    {
        "d": "s.taobao.com",
        "b": "taobao",
        "u": "https://s.taobao.com/search?q={{{s}}}"
    },
    {
        "d": "www.target.com.au",
        "b": "targetau",
        "u": "https://www.target.com.au/search?text={{{s}}}"
    },
    {
        "d": "www.target.com",
        "b": "target",
        "u": "http://www.target.com/s?searchTerm={{{s}}}"
    },
    {
        "d": "www.tacklewarehouse.com",
        "b": "taw",
        "u": "https://www.tacklewarehouse.com/searchresults.html#search=products&searchtext={{{s}}}"
    },
    {
        "d": "www.taydaelectronics.com",
        "b": "tayda",
        "u": "http://www.taydaelectronics.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.testberichte.de",
        "b": "tbde",
        "u": "http://www.testberichte.de/d/search.php?searchstr={{{s}}}"
    },
    {
        "d": "www.bookdepository.com",
        "b": "tbd",
        "u": "http://www.bookdepository.com/search?searchTerm={{{s}}}&search=Find+book"
    },
    {
        "d": "www.olx.co.id",
        "b": "tb",
        "u": "http://www.olx.co.id/halaman/mencari/{{{s}}}/search"
    },
    {
        "d": "www.thriftbooks.com",
        "b": "tbooks",
        "u": "https://www.thriftbooks.com/browse/?b.search={{{s}}}#b.oos"
    },
    {
        "d": "shop.tcgplayer.com",
        "b": "tcgp",
        "u": "http://shop.tcgplayer.com/productcatalog/product/show?newSearch=false&ProductType=All&IsProductNameExact=false&ProductName={{{s}}}"
    },
    {
        "d": "www.tchibo.de",
        "b": "tchi",
        "u": "https://www.tchibo.de/search?query={{{s}}}"
    },
    {
        "d": "www.todocoleccion.net",
        "b": "tcol",
        "u": "https://www.todocoleccion.net/buscador?bu={{{s}}}"
    },
    {
        "d": "thecubicle.us",
        "b": "tcu",
        "u": "http://thecubicle.us/advanced_search_result.php?search_in_description=0&keywords={{{s}}}"
    },
    {
        "d": "www.technikdirekt.de",
        "b": "technikdirekt",
        "u": "http://www.technikdirekt.de/search?sSearch={{{s}}}"
    },
    {
        "d": "www.tedi-shop.com",
        "b": "tedi",
        "u": "http://www.tedi-shop.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.teknikmagasinet.se",
        "b": "tekmag",
        "u": "http://www.teknikmagasinet.se/sokresultat?CMS_SearchString={{{s}}}"
    },
    {
        "d": "www.teknofiyat.com",
        "b": "teknofiyat",
        "u": "http://www.teknofiyat.com/?search={{{s}}}"
    },
    {
        "d": "www.tematimi.com",
        "b": "tematimi",
        "u": "https://www.tematimi.com/ara&search={{{s}}}"
    },
    {
        "d": "www.tesco.com",
        "b": "tesco",
        "u": "http://www.tesco.com/groceries/product/search/default.aspx?searchBox={{{s}}}"
    },
    {
        "d": "www.testberichte.de",
        "b": "testberichte",
        "u": "http://www.testberichte.de/d/search.php?searchstr={{{s}}}&submit=Suchen"
    },
    {
        "d": "www.target.com.au",
        "b": "tgtau",
        "u": "https://www.target.com.au/search?text={{{s}}}"
    },
    {
        "d": "www.target.com",
        "b": "tgt",
        "u": "https://www.target.com/s?searchTerm={{{s}}}"
    },
    {
        "d": "www.thebrick.com",
        "b": "thebrick",
        "u": "https://www.thebrick.com/pages/search-results?limit=48&q={{{s}}}"
    },
    {
        "d": "www.theitdepot.com",
        "b": "theitdepot",
        "u": "https://www.theitdepot.com/search.html?keywords={{{s}}}"
    },
    {
        "d": "themeforest.net",
        "b": "themeforest",
        "u": "http://themeforest.net/search?utf8=%E2%9C%93&term={{{s}}}"
    },
    {
        "d": "www.thermatru.com",
        "b": "thermatru",
        "u": "https://www.thermatru.com/search/?q={{{s}}}"
    },
    {
        "d": "www.thesource.ca",
        "b": "thesource",
        "u": "http://www.thesource.ca/en-ca/search/?text={{{s}}}&search_submit="
    },
    {
        "d": "www.thomann.de",
        "b": "thme",
        "u": "https://www.thomann.de/es/search_dir.html?sw={{{s}}}&smcs=80cfba"
    },
    {
        "d": "www.thomann.de",
        "b": "thm",
        "u": "http://www.thomann.de/de/search_dir.html?sw={{{s}}}"
    },
    {
        "d": "www.thomann.de",
        "b": "thomann",
        "u": "http://www.thomann.de/de/search_dir.html?sw={{{s}}}"
    },
    {
        "d": "www.thorlabs.de",
        "b": "thorlabs",
        "u": "http://www.thorlabs.de/search/thorsearch.cfm?search={{{s}}}"
    },
    {
        "d": "www.thorne.com",
        "b": "thorne",
        "u": "https://www.thorne.com/search?q={{{s}}}"
    },
    {
        "d": "www.three.co.uk",
        "b": "three",
        "u": "http://www.three.co.uk/Search/?q={{{s}}}"
    },
    {
        "d": "www.thriftbooks.com",
        "b": "thriftb",
        "u": "https://www.thriftbooks.com/browse/?b.search={{{s}}}"
    },
    {
        "d": "www.thriftyfoods.com",
        "b": "thriftyfoods",
        "u": "https://www.thriftyfoods.com/search?k={{{s}}}"
    },
    {
        "d": "thrivemarket.com",
        "b": "thrive",
        "u": "https://thrivemarket.com/search/results?filter%5Bsearch%5D={{{s}}}"
    },
    {
        "d": "www.ticketmaster.co.uk",
        "b": "ticketmasteruk",
        "u": "http://www.ticketmaster.co.uk/search?tm_link=tm_homeA_header_search&user_input=test&q={{{s}}}"
    },
    {
        "d": "www.ticmate.com",
        "b": "ticmate",
        "u": "https://www.ticmate.com/search?freeText={{{s}}}"
    },
    {
        "d": "www.tigerdirect.com",
        "b": "tigerdirect",
        "u": "http://www.tigerdirect.com/applications/SearchTools/search.asp?keywords={{{s}}}"
    },
    {
        "d": "tiki.vn",
        "b": "tiki",
        "u": "https://tiki.vn/search?q={{{s}}}"
    },
    {
        "d": "www.tindie.com",
        "b": "tindie",
        "u": "https://www.tindie.com/search/?q={{{s}}}"
    },
    {
        "d": "www.tiendainglesa.com.uy",
        "b": "tinglesa",
        "u": "https://www.tiendainglesa.com.uy/busqueda?0,0,{{{s}}},0"
    },
    {
        "d": "www.thisiswhyimbroke.com",
        "b": "tiwimb",
        "u": "http://www.thisiswhyimbroke.com/{{{s}}}"
    },
    {
        "d": "www.tacojohns.com",
        "b": "tj",
        "u": "https://www.tacojohns.com/?s={{{s}}}"
    },
    {
        "d": "www.tokopedia.com",
        "b": "tkpd",
        "u": "https://www.tokopedia.com/search?q={{{s}}}"
    },
    {
        "d": "thelasthunt.com",
        "b": "tlh",
        "u": "https://thelasthunt.com/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.thorlabs.com",
        "b": "tls",
        "u": "https://www.thorlabs.com/search/thorsearch.cfm?search= {{{s}}}"
    },
    {
        "d": "list.tmall.com",
        "b": "tmall",
        "u": "https://list.tmall.com/search_product.htm?q={{{s}}}"
    },
    {
        "d": "www.tme.eu",
        "b": "tme",
        "u": "https://www.tme.eu/pl/katalog/?search={{{s}}}"
    },
    {
        "d": "www.tematika.com",
        "b": "tmk",
        "u": "https://www.tematika.com/buscar.do?txtencoded={{{s}}}&idSeccionPropia=0&optSeleccionada=DuckDuckGo.com&idSeccion=0&seccionDeBusqueda=DuckDuckGo.com&texto={{{s}}}"
    },
    {
        "d": "www.trademe.co.nz",
        "b": "tm",
        "u": "http://www.trademe.co.nz/Browse/SearchResults.aspx?searchString={{{s}}}"
    },
    {
        "d": "www.tunisie-annonce.com",
        "b": "tn-annonces",
        "u": "http://www.tunisie-annonce.com/search.asp?cx=partner-pub-4455074141785177%3Aabc2p7-5h3d&cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}&sa=Rechercher&siteurl=www.tunisie-annonce.com%2F&ref=&ss=1479j334475j10"
    },
    {
        "d": "www.tokmanni.fi",
        "b": "tokmanni",
        "u": "https://www.tokmanni.fi/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.olx.co.id",
        "b": "tokobagus",
        "u": "http://www.olx.co.id/halaman/mencari/{{{s}}}/search"
    },
    {
        "d": "www.tokopedia.com",
        "b": "tokopedia",
        "u": "https://www.tokopedia.com/search?q={{{s}}}"
    },
    {
        "d": "www.topachat.com",
        "b": "topachat",
        "u": "http://www.topachat.com/pages/recherche.php?mc={{{s}}}"
    },
    {
        "d": "www.tokopedia.com",
        "b": "toped",
        "u": "https://www.tokopedia.com/search?st=product&q={{{s}}}"
    },
    {
        "d": "www.topgeek.net",
        "b": "topgeek",
        "u": "http://www.topgeek.net/fr/recherche?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search=Rechercher"
    },
    {
        "d": "tophatter.com",
        "b": "tophatter",
        "u": "https://tophatter.com/catalogs/search?utf8=%E2%9C%93&category=&query={{{s}}}"
    },
    {
        "d": "www.toppreise.ch",
        "b": "toppreise",
        "u": "http://www.toppreise.ch/index.php?search={{{s}}}&res=OK"
    },
    {
        "d": "us.topshop.com",
        "b": "topshop",
        "u": "http://us.topshop.com/webapp/wcs/stores/servlet/CatalogNavigationSearchResultCmd?langId=-1&storeId=13052&catalogId=33060&beginIndex=1&viewAllFlag=false&pageSize=20&sort_field=Relevance&searchTerm={{{s}}}"
    },
    {
        "d": "www.toptenreviews.com",
        "b": "toptenrevs",
        "u": "https://www.toptenreviews.com/search/?q={{{s}}}"
    },
    {
        "d": "www.tori.fi",
        "b": "tori",
        "u": "https://www.tori.fi/koko_suomi?q={{{s}}}"
    },
    {
        "d": "torob.com",
        "b": "torob",
        "u": "https://torob.com/search/?query={{{s}}}"
    },
    {
        "d": "www.touslesprix.com",
        "b": "touslesprix",
        "u": "https://www.touslesprix.com/achat,{{{s}}}.html"
    },
    {
        "d": "www.touts.com.br",
        "b": "touts",
        "u": "https://www.touts.com.br/arts?search={{{s}}}"
    },
    {
        "d": "www.toutvendre.fr",
        "b": "toutvendre",
        "u": "https://www.toutvendre.fr/s?k={{{s}}}"
    },
    {
        "d": "protinkertoys.com",
        "b": "toy",
        "u": "https://protinkertoys.com/search?type=product&q={{{s}}}"
    },
    {
        "d": "paintedheirloom.com",
        "b": "tph",
        "u": "https://paintedheirloom.com/search?q={{{s}}}"
    },
    {
        "d": "www.telemark-pyrenees.com",
        "b": "t-p",
        "u": "http://www.telemark-pyrenees.com/en/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.teacherspayteachers.com",
        "b": "tpt",
        "u": "https://www.teacherspayteachers.com/Browse/Search:{{{s}}}"
    },
    {
        "d": "tweakers.net",
        "b": "tpw",
        "u": "https://tweakers.net/pricewatch/zoeken/?keyword={{{s}}}"
    },
    {
        "d": "www.tractorhouse.com",
        "b": "tractorhouse",
        "u": "https://www.tractorhouse.com/listings/farm-equipment/for-sale/list/?fulltext={{{s}}}"
    },
    {
        "d": "trademachines.com",
        "b": "trademachines",
        "u": "https://trademachines.com/search?phrase={{{s}}} "
    },
    {
        "d": "www.trademe.co.nz",
        "b": "trademe",
        "u": "http://www.trademe.co.nz/Browse/SearchResults.aspx?searchString={{{s}}}"
    },
    {
        "d": "www.tradera.com",
        "b": "tradera",
        "u": "http://www.tradera.com/finding.mvc/itemlisting?header=true&search={{{s}}}"
    },
    {
        "d": "www.trailandmountain.co.uk",
        "b": "trail",
        "u": "https://www.trailandmountain.co.uk/search?q={{{s}}}"
    },
    {
        "d": "www.travelgator.com",
        "b": "travelgator",
        "u": "https://www.travelgator.com/en/search/?locationquery={{{s}}}"
    },
    {
        "d": "www.traxsource.com",
        "b": "traxsource",
        "u": "https://www.traxsource.com/search?term={{{s}}}"
    },
    {
        "d": "trendyscooter.com",
        "b": "trendyscooter",
        "u": "http://trendyscooter.com/?route=product/search&search={{{s}}}"
    },
    {
        "d": "theringlord.com",
        "b": "trl",
        "u": "http://theringlord.com/cart/shopdisplayproducts.asp?Search=Yes&Keyword={{{s}}}"
    },
    {
        "d": "www.trollandtoad.com",
        "b": "troll",
        "u": "https://www.trollandtoad.com/products/search.php?searchmode=basic&search_words={{{s}}}"
    },
    {
        "d": "tropicalprice.com",
        "b": "tropicalprice",
        "u": "https://tropicalprice.com/?query={{{s}}}"
    },
    {
        "d": "www.trouva.com",
        "b": "trouva",
        "u": "https://www.trouva.com/shop/search/{{{s}}}"
    },
    {
        "d": "www.trovaprezzi.it",
        "b": "trovaprezzi",
        "u": "http://www.trovaprezzi.it/categoria.aspx?libera={{{s}}}&id=-1&prezzomin=&prezzomax="
    },
    {
        "d": "www.trulytexan.com",
        "b": "trulytexan",
        "u": "http://www.trulytexan.com/?{{{s}}}"
    },
    {
        "d": "www.trustpilot.com",
        "b": "trustpilot",
        "u": "https://www.trustpilot.com/search?query={{{s}}}"
    },
    {
        "d": "teeshirt21.com",
        "b": "ts21",
        "u": "https://teeshirt21.com/shop/{{{s}}}"
    },
    {
        "d": "www.tractorsupply.com",
        "b": "tsco",
        "u": "https://www.tractorsupply.com/tsc/search/{{{s}}}"
    },
    {
        "d": "www.theshoppingchannel.com",
        "b": "tsc",
        "u": "https://www.theshoppingchannel.com/search/{{{s}}}"
    },
    {
        "d": "www.teeterritory.com",
        "b": "tshirts",
        "u": "https://www.teeterritory.com/search?q={{{s}}}"
    },
    {
        "d": "www.tpop.fr",
        "b": "tshirt",
        "u": "https://www.tpop.fr/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.tutti.ch",
        "b": "tti",
        "u": "http://www.tutti.ch/ticino?q={{{s}}}"
    },
    {
        "d": "www.tuffyproducts.com",
        "b": "tuffyproducts",
        "u": "https://www.tuffyproducts.com/search.aspx?searchterm={{{s}}}"
    },
    {
        "d": "www.tundra.com",
        "b": "tundra",
        "u": "https://www.tundra.com/search?q={{{s}}}"
    },
    {
        "d": "tuerenmarkt24.de",
        "b": "türen",
        "u": "https://tuerenmarkt24.de/suche?controller=search&orderby=position&orderway=desc&search_query=deur{{{s}}}"
    },
    {
        "d": "myturnstone.com",
        "b": "turnstone",
        "u": "http://myturnstone.com/?s={{{s}}}&lang=en"
    },
    {
        "d": "www.tutti.ch",
        "b": "tuttich",
        "u": "http://www.tutti.ch/ganze-schweiz?q={{{s}}} "
    },
    {
        "d": "www.tutti.ch",
        "b": "tutti",
        "u": "https://www.tutti.ch/de/li/ganze-schweiz?q={{{s}}}"
    },
    {
        "d": "tweakers.net",
        "b": "tva",
        "u": "https://tweakers.net/aanbod/zoeken/?keyword={{{s}}}"
    },
    {
        "d": "thewirecutter.com",
        "b": "twc",
        "u": "https://thewirecutter.com/?s={{{s}}}"
    },
    {
        "d": "tweakers.net",
        "b": "tweakers",
        "u": "https://tweakers.net/nieuws/zoeken/?keyword={{{s}}}"
    },
    {
        "d": "tweakers.net",
        "b": "twpw",
        "u": "https://tweakers.net/pricewatch/zoeken/?keyword={{{s}}}"
    },
    {
        "d": "www.youbehero.com",
        "b": "ubh",
        "u": "https://www.youbehero.com/gr/search/causes?loose_type=1&term={{{s}}}"
    },
    {
        "d": "www.ugodecoracion.com",
        "b": "ugo",
        "u": "http://www.ugodecoracion.com/buscar?controller=search&orderby=position&orderway=desc&search-cat-select=0&search_query={{{s}}}&submit_search="
    },
    {
        "d": "duckduckgo.com",
        "b": "ukappstore",
        "u": "https://duckduckgo.com/?q=site%3Aapps.apple.com%2Fgb%2Fapp%2F+{{{s}}}"
    },
    {
        "d": "www.ulabox.com",
        "b": "ulabox",
        "u": "https://www.ulabox.com/busca?q={{{s}}}"
    },
    {
        "d": "www.uline.com",
        "b": "uline",
        "u": "https://www.uline.com/Product/AdvSearchResult?keywords={{{s}}}"
    },
    {
        "d": "www.ulta.com",
        "b": "ulta",
        "u": "http://www.ulta.com/ulta/a/_/Ntt-{{{s}}}/Nty-1?Dy=1&ciSelector=searchResults"
    },
    {
        "d": "www.umart.com.au",
        "b": "umo",
        "u": "http://www.umart.com.au/newsite/search.php?type=0&keywords={{{s}}}"
    },
    {
        "d": "www.calida.com",
        "b": "underwear",
        "u": "https://www.calida.com/search/#/q/{{{s}}}"
    },
    {
        "d": "www.uniqlo.com",
        "b": "uniqlo",
        "u": "https://www.uniqlo.com/us/en/search/?q={{{s}}}&lang=default"
    },
    {
        "d": "www.amazon.com.br",
        "b": "unlimitedbr",
        "u": "https://www.amazon.com.br/s?k={{{s}}}&i=digital-text"
    },
    {
        "d": "www.upwork.com",
        "b": "upwork",
        "u": "https://www.upwork.com/o/jobs/browse/?q={{{s}}}"
    },
    {
        "d": "www.urbanoutfitters.com",
        "b": "urbout",
        "u": "http://www.urbanoutfitters.com/fr/catalog/search.jsp?q={{{s}}}"
    },
    {
        "d": "www.usedvictoria.com",
        "b": "usedvictoria",
        "u": "http://www.usedvictoria.com/classifieds/all?description={{{s}}}"
    },
    {
        "d": "www.valvesonline.co.uk",
        "b": "valvesonline",
        "u": "https://www.valvesonline.co.uk/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.valvesonline.co.uk",
        "b": "valves",
        "u": "https://www.valvesonline.co.uk/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.vans.com",
        "b": "vans",
        "u": "https://www.vans.com/webapp/wcs/stores/servlet/VFSearchDisplay?storeId=10153&catalogId=10703&langId=-1&beginIndex=0&searchSource=Q&sType=SimpleSearch&searchTerm={{{s}}}"
    },
    {
        "d": "vapefiend.co.uk",
        "b": "vapefiend",
        "u": "https://vapefiend.co.uk/search?q={{{s}}}&type=product"
    },
    {
        "d": "www.vapetime-ec.com",
        "b": "vapetime",
        "u": "https://www.vapetime-ec.com/?s={{{s}}}"
    },
    {
        "d": "www.vapeoildirect.co.uk",
        "b": "vape",
        "u": "http://www.vapeoildirect.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.varle.lt",
        "b": "varle",
        "u": "https://www.varle.lt/search/?q={{{s}}}"
    },
    {
        "d": "www.vat19.com",
        "b": "vat19",
        "u": "https://www.vat19.com/products/search?q={{{s}}}"
    },
    {
        "d": "www.vatera.hu",
        "b": "vatera",
        "u": "http://www.vatera.hu/listings/index.php?q={{{s}}}"
    },
    {
        "d": "shop.vcp-san.at",
        "b": "vcp",
        "u": "http://shop.vcp-san.at/index.php?main_page=advanced_search_result&search_in_description=1&keyword={{{s}}}"
    },
    {
        "d": "www.vouchercodes.co.uk",
        "b": "vc",
        "u": "https://www.vouchercodes.co.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.vandenborre.be",
        "b": "vdb",
        "u": "https://www.vandenborre.be/zoekresultaat?query={{{s}}}&v2"
    },
    {
        "d": "www.vedantcomputers.com",
        "b": "vedant",
        "u": "https://www.vedantcomputers.com/index.php?route=product/search&search={{{s}}}&description=true"
    },
    {
        "d": "store.veganessentials.com",
        "b": "vegess",
        "u": "https://store.veganessentials.com/categories.aspx?Keyword={{{s}}}"
    },
    {
        "d": "www.vemo.it",
        "b": "vemo",
        "u": "http://www.vemo.it/cerca.php?prodotto={{{s}}}"
    },
    {
        "d": "www.verkkokauppa.com",
        "b": "verkkis",
        "u": "https://www.verkkokauppa.com/fi/search/?query={{{s}}}"
    },
    {
        "d": "www.verkkokauppa.com",
        "b": "verkkokauppa",
        "u": "https://www.verkkokauppa.com/fi/search/?query={{{s}}}"
    },
    {
        "d": "www.politie.nl",
        "b": "verkoper",
        "u": "https://www.politie.nl/zoek?query={{{s}}}"
    },
    {
        "d": "www.verkkokauppa.com",
        "b": "verk",
        "u": "https://www.verkkokauppa.com/fi/search/?query={{{s}}}"
    },
    {
        "d": "veriforcetactical.com",
        "b": "vft",
        "u": "https://veriforcetactical.com/?s={{{s}}}"
    },
    {
        "d": "www.vidaxl.nl",
        "b": "vidaxl",
        "u": "https://www.vidaxl.nl/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "videohive.net",
        "b": "videohive",
        "u": "http://videohive.net/search?utf8=%E2%9C%93&term={{{s}}}"
    },
    {
        "d": "www.ving.no",
        "b": "ving",
        "u": "http://www.ving.no/searchresult?q={{{s}}}"
    },
    {
        "d": "www.vipon.com",
        "b": "vipon",
        "u": "https://www.vipon.com/promotion/index?search={{{s}}}"
    },
    {
        "d": "www.visiondirect.com.au",
        "b": "visiondirect",
        "u": "https://www.visiondirect.com.au/search?query={{{s}}}"
    },
    {
        "d": "www.viveport.com",
        "b": "viveport",
        "u": "https://www.viveport.com/list/desktop?keyword={{{s}}}"
    },
    {
        "d": "www.vlh.de",
        "b": "vlh",
        "u": "https://www.vlh.de/suchergebnis.html?q={{{s}}}"
    },
    {
        "d": "www.vodafone.it",
        "b": "voda",
        "u": "http://www.vodafone.it/area-utente/appmanager/fai-da-te/Common?_nfpb=true&_pageLabel=P5000626721379247340997&categoryId=&pageNumber=&slideNumber=&defaultView=true&searchQuery={{{s}}}"
    },
    {
        "d": "voteformost.net",
        "b": "voteformost",
        "u": "https://voteformost.net/?s={{{s}}}"
    },
    {
        "d": "vrijuit.nl",
        "b": "vrijuit",
        "u": "https://vrijuit.nl/algemeen/ListerPage.aspx?filter=search({{{s}}})"
    },
    {
        "d": "www.vividseats.com",
        "b": "vs",
        "u": "http://www.vividseats.com/Search.action?searchTerm={{{s}}}"
    },
    {
        "d": "us.vwr.com",
        "b": "vwr",
        "u": "https://us.vwr.com/store/product?keyword={{{s}}}"
    },
    {
        "d": "www.wafresh.com.au",
        "b": "wafresh",
        "u": "https://www.wafresh.com.au/search.php?Search=&search_query={{{s}}}"
    },
    {
        "d": "www.waitrose.com",
        "b": "waitrose",
        "u": "http://www.waitrose.com/shop/HeaderSearchCmd?searchTerm={{{s}}}"
    },
    {
        "d": "es.wallapop.com",
        "b": "wallapop",
        "u": "https://es.wallapop.com/search?keywords={{{s}}}"
    },
    {
        "d": "www.walmart.ca",
        "b": "walmartca",
        "u": "http://www.walmart.ca/search/{{{s}}}"
    },
    {
        "d": "www.walmart.com",
        "b": "walmart",
        "u": "https://www.walmart.com/search/?query={{{s}}}"
    },
    {
        "d": "wanelo.com",
        "b": "wanelo",
        "u": "http://wanelo.com/search?query={{{s}}}"
    },
    {
        "d": "www.waschbaer.de",
        "b": "waschbaer",
        "u": "https://www.waschbaer.de/shop/frontend/search/result?q={{{s}}}"
    },
    {
        "d": "myrwatches.com",
        "b": "watches",
        "u": "https://myrwatches.com/?s={{{s}}} &post_type=product"
    },
    {
        "d": "www.waterstones.com",
        "b": "waterstones",
        "u": "https://www.waterstones.com/books/search/term/{{{s}}}"
    },
    {
        "d": "watercontainerstore.com",
        "b": "watertank",
        "u": "https://watercontainerstore.com/search?type=product&q={{{s}}}"
    },
    {
        "d": "www.wayfair.ca",
        "b": "wayfairca",
        "u": "https://www.wayfair.ca/keyword.php?keyword={{{s}}}&command=dosearch&new_keyword_search=true"
    },
    {
        "d": "www.wayfair.com",
        "b": "wayfair",
        "u": "http://www.wayfair.com/keyword.php?keyword={{{s}}}"
    },
    {
        "d": "www.whitcoulls.co.nz",
        "b": "wcoulls",
        "u": "https://www.whitcoulls.co.nz/search?q={{{s}}}"
    },
    {
        "d": "www.webhallen.com",
        "b": "webhallen",
        "u": "https://www.webhallen.com/se/search?searchString={{{s}}}&sort=searchRating"
    },
    {
        "d": "www.webstore.com",
        "b": "webstore",
        "u": "http://www.webstore.com/search.php?option=basic_search&basic_search={{{s}}}&form_basic_search=Search"
    },
    {
        "d": "www.webstaurantstore.com",
        "b": "webst",
        "u": "https://www.webstaurantstore.com/search/{{{s}}}.html"
    },
    {
        "d": "www.wegmans.com",
        "b": "wegmans",
        "u": "https://www.wegmans.com/search.html?searchKey={{{s}}}"
    },
    {
        "d": "www.wehkamp.nl",
        "b": "wehkamp",
        "u": "http://www.wehkamp.nl/Winkelen/SearchOverview.aspx?N=186&Nty=1&Ntk=ART&VIEW=Grid&Ntt={{{s}}}"
    },
    {
        "d": "www.weltbild.de",
        "b": "weltbild",
        "u": "https://www.weltbild.de/suche?q={{{s}}}"
    },
    {
        "d": "www.westelm.com",
        "b": "westelm",
        "u": "http://www.westelm.com/search/results.html?words={{{s}}}"
    },
    {
        "d": "www.walgreens.com",
        "b": "wgs",
        "u": "http://www.walgreens.com/search/results.jsp?Ntt={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.whisky.de",
        "b": "whiskyde",
        "u": "https://www.whisky.de/shop/index.php?&cl=search&searchparam={{{s}}}"
    },
    {
        "d": "www.whitetailproperties.com",
        "b": "whitetailproperties",
        "u": "https://www.whitetailproperties.com/hunting-land/filtered-search?search_mode=all&keywords={{{s}}}"
    },
    {
        "d": "www.wickes.co.uk",
        "b": "wickes",
        "u": "https://www.wickes.co.uk/search?text={{{s}}}"
    },
    {
        "d": "www.wiggle.co.uk",
        "b": "wiggle",
        "u": "http://www.wiggle.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.wikiarms.com",
        "b": "wikiarms",
        "u": "http://www.wikiarms.com/guns?q={{{s}}}"
    },
    {
        "d": "www.wilko.com",
        "b": "wilko",
        "u": "http://www.wilko.com/search?q={{{s}}}"
    },
    {
        "d": "www.willhaben.at",
        "b": "willhaben",
        "u": "http://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz?keyword={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.williams-sonoma.com",
        "b": "williamssonoma",
        "u": "http://www.williams-sonoma.com/search/results.html?words={{{s}}}"
    },
    {
        "d": "www.windowparts.co.uk",
        "b": "windowparts",
        "u": "http://www.windowparts.co.uk/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.wind.gr",
        "b": "wind",
        "u": "https://www.wind.gr/search?_dyncharset=utf-8&Dy=1&Ntt={{{s}}}"
    },
    {
        "d": "thewirecutter.com",
        "b": "wirecutter",
        "u": "http://thewirecutter.com/search/?s={{{s}}}"
    },
    {
        "d": "wiringa.nl",
        "b": "wiringa",
        "u": "https://wiringa.nl/search?q={{{s}}}"
    },
    {
        "d": "www.wish.com",
        "b": "wish",
        "u": "https://www.wish.com/search/{{{s}}}"
    },
    {
        "d": "www.willhaben.at",
        "b": "wlhb",
        "u": "https://www.willhaben.at/iad/kaufen-und-verkaufen/marktplatz?keyword={{{s}}}"
    },
    {
        "d": "www.wandaloo.com",
        "b": "wnd",
        "u": "http://www.wandaloo.com/search-result.php?pg=1&q={{{s}}}&w=news&m=pertinence"
    },
    {
        "d": "www.worldofboardgames.com",
        "b": "wob",
        "u": "http://www.worldofboardgames.com/webshop-sok.php?searchString={{{s}}}&search=S%F6k"
    },
    {
        "d": "www.wog.ch",
        "b": "wogch",
        "u": "http://www.wog.ch/index.cfm/search/type/Games/term/{{{s}}}"
    },
    {
        "d": "www.woodbrass.com",
        "b": "woodbrass",
        "u": "https://www.woodbrass.com/advanced_search_result.php?keywords={{{s}}}"
    },
    {
        "d": "www.wook.pt",
        "b": "wook",
        "u": "https://www.wook.pt/pesquisa/{{{s}}}"
    },
    {
        "d": "www.woolworths.com.au",
        "b": "woolies",
        "u": "https://www.woolworths.com.au/shop/search/products?searchTerm={{{s}}}"
    },
    {
        "d": "www.woolworths.com.au",
        "b": "woolworths",
        "u": "https://www.woolworths.com.au/shop/search/products?searchTerm={{{s}}}"
    },
    {
        "d": "wordery.com",
        "b": "wordery",
        "u": "https://wordery.com/search?term={{{s}}}"
    },
    {
        "d": "www.worten.es",
        "b": "worten",
        "u": "https://www.worten.es/?qs={{{s}}}"
    },
    {
        "d": "www.worldofwhisky.ch",
        "b": "wowch",
        "u": "https://www.worldofwhisky.ch/suche?controller=search&orderby=position&orderway=desc&search_query={{{s}}}&submit_search=Search"
    },
    {
        "d": "winningstrategy.games",
        "b": "wsg",
        "u": "https://winningstrategy.games/search/{{{s}}}"
    },
    {
        "d": "www.test.de",
        "b": "wtest",
        "u": "https://www.test.de/suche/?q={{{s}}}"
    },
    {
        "d": "www.wtsbooks.com",
        "b": "wtsbooks",
        "u": "https://www.wtsbooks.com/index/page/search?FullText={{{s}}}"
    },
    {
        "d": "s.wuage.com",
        "b": "wuage",
        "u": "https://s.wuage.com/product/search?keywords= {{{s}}}"
    },
    {
        "d": "www.we-online.com",
        "b": "wurthe",
        "u": "https://www.we-online.com/web/en/wuerth_elektronik/searchpage.php?search={{{s}}}"
    },
    {
        "d": "www.wwbw.com",
        "b": "wwbw",
        "u": "http://www.wwbw.com/Search/Default.aspx?src={{{s}}}"
    },
    {
        "d": "www.x-kom.pl",
        "b": "xkom",
        "u": "https://www.x-kom.pl/szukaj?q={{{s}}}"
    },
    {
        "d": "www.xtend-life.com",
        "b": "xl",
        "u": "http://www.xtend-life.com/search-results?cx=005442268687610389394%3a4wscy8mawc0&cof=FORID%3a10&q={{{s}}}"
    },
    {
        "d": "xpresate.com.mx",
        "b": "xpresate",
        "u": "http://xpresate.com.mx/busqueda.php?search={{{s}}}"
    },
    {
        "d": "xxl.no",
        "b": "xxl",
        "u": "https://xxl.no/search?q={{{s}}}"
    },
    {
        "d": "www.yad2.co.il",
        "b": "yad2",
        "u": "https://www.yad2.co.il/products/all?info={{{s}}}"
    },
    {
        "d": "auctions.search.yahoo.co.jp",
        "b": "yajp",
        "u": "http://auctions.search.yahoo.co.jp/search?p={{{s}}}"
    },
    {
        "d": "ya-market.org",
        "b": "yamarket",
        "u": "https://ya-market.org/products?search={{{s}}}"
    },
    {
        "d": "market.yandex.ru",
        "b": "yama",
        "u": "https://market.yandex.ru/search?text={{{s}}}"
    },
    {
        "d": "www.yaoota.com",
        "b": "yaoota",
        "u": "https://www.yaoota.com/en/search/?q={{{s}}}"
    },
    {
        "d": "www.yay.bg",
        "b": "yay",
        "u": "https://www.yay.bg/index.php?route=product/search&search={{{s}}}"
    },
    {
        "d": "www.yesasia.com",
        "b": "yesasia",
        "u": "http://www.yesasia.com/us/search/{{{s}}}/0-0-0-q.{{{s}}}_bpt.48-en/list.html"
    },
    {
        "d": "www.youneedabudget.com",
        "b": "ynab",
        "u": "https://www.youneedabudget.com/?s={{{s}}}"
    },
    {
        "d": "www.yodobashi.com",
        "b": "yodobashi",
        "u": "http://www.yodobashi.com/ec/category/index.html?word={{{s}}}"
    },
    {
        "d": "www.yopi.de",
        "b": "yopi",
        "u": "http://www.yopi.de/search?search_str={{{s}}}"
    },
    {
        "d": "youla.ru",
        "b": "youla",
        "u": "https://youla.ru/?q={{{s}}}"
    },
    {
        "d": "www.zalando.de",
        "b": "zalandode",
        "u": "https://www.zalando.de/katalog/?q={{{s}}}"
    },
    {
        "d": "www.zalando.co.uk",
        "b": "zalando",
        "u": "https://www.zalando.co.uk/catalog/?q={{{s}}}"
    },
    {
        "d": "www.zalando.de",
        "b": "zal",
        "u": "https://www.zalando.de/katalog/?q={{{s}}}&qf=1"
    },
    {
        "d": "www.zappos.com",
        "b": "zappos",
        "u": "https://www.zappos.com/{{{s}}}"
    },
    {
        "d": "www.zap.co.il",
        "b": "zap",
        "u": "http://www.zap.co.il/search.aspx?keyword={{{s}}}"
    },
    {
        "d": "www.zara.com",
        "b": "zara",
        "u": "http://www.zara.com/webapp/wcs/stores/servlet/ItxSolrSearchingDataCmd?storeId=10701&langId=-5&searchTerm={{{s}}}"
    },
    {
        "d": "www.zavvi.com",
        "b": "zavvi",
        "u": "https://www.zavvi.com/elysium.search?search={{{s}}}"
    },
    {
        "d": "www.zbozi.cz",
        "b": "zbozi",
        "u": "http://www.zbozi.cz/hledani/?q={{{s}}}"
    },
    {
        "d": "www.zehrs.ca",
        "b": "zehrs",
        "u": "https://www.zehrs.ca/search/?search-bar={{{s}}}"
    },
    {
        "d": "arcade.zenzo.io",
        "b": "zen",
        "u": "https://arcade.zenzo.io/search?for={{{s}}}"
    },
    {
        "d": "www.zoom.com.br",
        "b": "zoombr",
        "u": "http://www.zoom.com.br/search?q={{{s}}}"
    },
    {
        "d": "zoomthelist.com",
        "b": "zoomthelist",
        "u": "http://zoomthelist.com/?q={{{s}}}"
    },
    {
        "d": "www.zoom.com.br",
        "b": "zoom",
        "u": "http://www.zoom.com.br/search?q={{{s}}}"
    },
    {
        "d": "shop.zuckerzauber.at",
        "b": "zuckerzauber",
        "u": "http://shop.zuckerzauber.at/epages/es121414.sf/de_AT/?ObjectPath=/Shops/es121414_Caros_Zuckerzauber&ViewAction=DetailSearchProducts&Search=SF-AllStrings&SearchString={{{s}}}"
    },
    {
        "d": "www.zulily.com",
        "b": "zulily",
        "u": "http://www.zulily.com/{{{s}}}?fromSearch=true&searchTerm={{{s}}}"
    },
    {
        "d": "www.zvab.com",
        "b": "zvab",
        "u": "http://www.zvab.com/basicSearch.do?anyWords={{{s}}}"
    },
    {
        "d": "www.zalando.de",
        "b": "z",
        "u": "https://www.zalando.de/katalog/?q={{{s}}}"
    },
    {
        "d": "www.zzounds.com",
        "b": "zzounds",
        "u": "http://www.zzounds.com/prodsearch?q={{{s}}}"
    },
    {
        "d": "setareh-co.com",
        "b": "پخشستاره",
        "u": "https://setareh-co.com/?s={{{s}}}&submit="
    },
    {
        "d": "mobilesacademy.com",
        "b": "موبايل",
        "u": "https://mobilesacademy.com/?s={{{s}}}"
    },
    {
        "d": "www.labirint.ru",
        "b": "л",
        "u": "http://www.labirint.ru/search/{{{s}}}"
    }
], bangs);

module.exports = {
    bangs
};
