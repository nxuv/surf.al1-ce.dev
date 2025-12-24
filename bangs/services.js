var bangs = bangs || [];

bangs = [].concat([
    {
        "d": "0to255.com",
        "b": "0to255",
        "u": "http://0to255.com/{{{s}}}"
    },
    {
        "d": "1122.com.uy",
        "b": "1122",
        "u": "https://1122.com.uy/buscar/{{{s}}}/todo-el-pais"
    },
    {
        "d": "118.dk",
        "b": "118",
        "u": "http://118.dk/search/go?what={{{s}}}"
    },
    {
        "d": "b144.co.il",
        "b": "144",
        "u": "http://b144.co.il/PrivateResults.aspx?&p_name={{{s}}}"
    },
    {
        "d": "www.17track.net",
        "b": "17t",
        "u": "http://www.17track.net/en/track?nums={{{s}}}"
    },
    {
        "d": "www.180.no",
        "b": "180",
        "u": "https://www.180.no/Search/All?w={{{s}}}"
    },
    {
        "d": "www.1881.no",
        "b": "1881",
        "u": "http://www.1881.no/?query={{{s}}}"
    },
    {
        "d": "27crags.com",
        "b": "27crags",
        "u": "https://27crags.com/site/search?qs={{{s}}}"
    },
    {
        "d": "2gis.ru",
        "b": "2gis",
        "u": "http://2gis.ru/moscow/search/{{{s}}}"
    },
    {
        "d": "2gis.ru",
        "b": "2gissbp",
        "u": "https://2gis.ru/spb/search/{{{s}}}"
    },
    {
        "d": "2gis.ru",
        "b": "2gisufa",
        "u": "https://2gis.ru/ufa/search/{{{s}}}"
    },
    {
        "d": "image.so.com",
        "b": "360iso",
        "u": "http://image.so.com/i?q={{{s}}}"
    },
    {
        "d": "www.so.com",
        "b": "360so",
        "u": "https://www.so.com/s?q={{{s}}}"
    },
    {
        "d": "www.tritrans.net",
        "b": "3t",
        "u": "http://www.tritrans.net/cgibin/translate.cgi?spraak=Engelsk&Fra={{{s}}}&button=Translate%21"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chc",
        "u": "https://boards.4chan.org/{{{s}}}/catalog"
    },
    {
        "d": "archive.rebeccablacktech.com",
        "b": "4ga",
        "u": "https://archive.rebeccablacktech.com/g/search/text/{{{s}}}/"
    },
    {
        "d": "archive.4plebs.org",
        "b": "4plebs",
        "u": "https://archive.4plebs.org/_/search/text/{{{s}}}/"
    },
    {
        "d": "foursquare.com",
        "b": "4sq",
        "u": "https://foursquare.com/explore?mode=url&nearGeoId=&q={{{s}}}"
    },
    {
        "d": "www.4x4community.co.za",
        "b": "4x4community",
        "u": "http://www.4x4community.co.za/forum/threadloom/threadloom.php?query={{{s}}}"
    },
    {
        "d": "find.5ch.net",
        "b": "5ch",
        "u": "https://find.5ch.net/search?q={{{s}}}"
    },
    {
        "d": "fiverr.com",
        "b": "5",
        "u": "http://fiverr.com/gigs/search?query={{{s}}}"
    },
    {
        "d": "800notes.com",
        "b": "800",
        "u": "http://800notes.com/Phone.aspx/{{{s}}}"
    },
    {
        "d": "careers-calstate.aaa.com",
        "b": "aaa",
        "u": "https://careers-calstate.aaa.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "careers.aam.com",
        "b": "aam",
        "u": "https://careers.aam.com/us/en/search-results?keywords={{{s}}}"
    },
    {
        "d": "airbitz.co",
        "b": "ab",
        "u": "http://airbitz.co/search?term={{{s}}}"
    },
    {
        "d": "www.jobs.abbott",
        "b": "abbott",
        "u": "https://www.jobs.abbott/us/en/search-results?keywords={{{s}}}"
    },
    {
        "d": "www.lingvo-online.ru",
        "b": "ab-er",
        "u": "http://www.lingvo-online.ru/en/Translate/en-ru/{{{s}}}"
    },
    {
        "d": "mobile.bahn.de",
        "b": "abfahrt",
        "u": "https://mobile.bahn.de/bin/mobil/bhftafel.exe/dox?input={{{s}}}&productsFilter=1111111111000000&time=actual&maxJourneys=40&start=Suchen&boardType=Abfahrt&rt=1"
    },
    {
        "d": "www.airbnb.com",
        "b": "abnb",
        "u": "https://www.airbnb.com/s/{{{s}}}/all"
    },
    {
        "d": "search.about.com",
        "b": "about",
        "u": "http://search.about.com/fullsearch.htm?terms={{{s}}}"
    },
    {
        "d": "www.accountcia.com",
        "b": "accountcia",
        "u": "https://www.accountcia.com/?geodir_search=1&stype=gd_place&sgd_placecategory%5B%5D=&s={{{s}}}"
    },
    {
        "d": "www.accountkiller.com",
        "b": "accountkiller",
        "u": "http://www.accountkiller.com/en/delete-{{{s}}}-account"
    },
    {
        "d": "cortas.elpais.com",
        "b": "acortar",
        "u": "http://cortas.elpais.com/encode.pl?u=http://{{{s}}}"
    },
    {
        "d": "getpocket.com",
        "b": "addtopocket",
        "u": "https://getpocket.com/edit?url={{{s}}}"
    },
    {
        "d": "careers.adtalem.com",
        "b": "adtalem",
        "u": "https://careers.adtalem.com/us/en/search-results?keywords={{{s}}}"
    },
    {
        "d": "uk.advfn.com",
        "b": "advfn",
        "u": "http://uk.advfn.com/p.php?pid=qkquote&symbol={{{s}}} "
    },
    {
        "d": "www.adzuna.co.uk",
        "b": "adzuna",
        "u": "https://www.adzuna.co.uk/jobs/search?q={{{s}}} "
    },
    {
        "d": "ae7q.com",
        "b": "aeq",
        "u": "http://ae7q.com/query/data/CallHistory.php?CALL={{{s}}}"
    },
    {
        "d": "afpl.ent.sirsi.net",
        "b": "afpls",
        "u": "http://afpl.ent.sirsi.net/client/default/search/results?qu={{{s}}}&te=ILS"
    },
    {
        "d": "track.aftership.com",
        "b": "aftership",
        "u": "https://track.aftership.com/{{{s}}}"
    },
    {
        "d": "www.aihitdata.com",
        "b": "aihit",
        "u": "https://www.aihitdata.com/search/companies?i={{{s}}}"
    },
    {
        "d": "ai-jobs.net",
        "b": "aijobs",
        "u": "https://ai-jobs.net/?search_keywords={{{s}}}"
    },
    {
        "d": "airnav.com",
        "b": "airn",
        "u": "https://airnav.com/airport/{{{s}}}"
    },
    {
        "d": "airnav.com",
        "b": "airnav",
        "u": "http://airnav.com/airport/{{{s}}}"
    },
    {
        "d": "www.airsoftdb.com",
        "b": "airsoftdb",
        "u": "https://www.airsoftdb.com/search/?q={{{s}}}"
    },
    {
        "d": "archive.is",
        "b": "ais",
        "u": "http://archive.is/{{{s}}}"
    },
    {
        "d": "www.accountkiller.com",
        "b": "ak",
        "u": "https://www.accountkiller.com/en/delete-{{{s}}}-account"
    },
    {
        "d": "aladi.diba.cat",
        "b": "aladi",
        "u": "https://aladi.diba.cat/search*cat/-{{{s}}}"
    },
    {
        "d": "www.alesund.kommune.no",
        "b": "alesund",
        "u": "http://www.alesund.kommune.no/component/finder/search?q={{{s}}}&Itemid=406"
    },
    {
        "d": "www.alfinsight.com",
        "b": "alf",
        "u": "https://www.alfinsight.com/app/SearchResults?quickSearch={{{s}}} "
    },
    {
        "d": "mail.alice.it",
        "b": "alicemail",
        "u": "https://mail.alice.it/?q={{{s}}}"
    },
    {
        "d": "careers.alight.com",
        "b": "alight",
        "u": "https://careers.alight.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "alipaczka.pl",
        "b": "alipaczka",
        "u": "https://alipaczka.pl/?track={{{s}}}"
    },
    {
        "d": "www.allabolag.se",
        "b": "allabolag",
        "u": "https://www.allabolag.se/what/{{{s}}}"
    },
    {
        "d": "all-io.net",
        "b": "all",
        "u": "http://all-io.net/?q={{{s}}}"
    },
    {
        "d": "en.allexperts.com",
        "b": "allexperts",
        "u": "http://en.allexperts.com/sitesearch.htm?terms={{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "alpha",
        "u": "http://www.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "alternativeto.net",
        "b": "alt",
        "u": "http://alternativeto.net/SearchResult.aspx?search={{{s}}}"
    },
    {
        "d": "altru.greatjob.net",
        "b": "altru",
        "u": "https://altru.greatjob.net/search-results?keywords={{{s}}}"
    },
    {
        "d": "alternativeto.net",
        "b": "altto",
        "u": "http://alternativeto.net/browse/search?q={{{s}}}"
    },
    {
        "d": "maps.apple.com",
        "b": "amaps",
        "u": "http://maps.apple.com/?q={{{s}}}"
    },
    {
        "d": "careers.amegybank.com",
        "b": "amegy",
        "u": "https://careers.amegybank.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "agentcareers.americannational.com",
        "b": "american",
        "u": "https://agentcareers.americannational.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "haveibeenpwned.com",
        "b": "amipwned",
        "u": "https://haveibeenpwned.com/account/{{{s}}}"
    },
    {
        "d": "jobs.amncareers.com",
        "b": "amn",
        "u": "https://jobs.amncareers.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "www.amnesty.org",
        "b": "amnesty",
        "u": "https://www.amnesty.org/en/search/?q={{{s}}}"
    },
    {
        "d": "careers.amplifysnacks.com",
        "b": "amplify",
        "u": "https://careers.amplifysnacks.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "careers.analog.com",
        "b": "analog",
        "u": "https://careers.analog.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "www.animefillerlist.com",
        "b": "animefiller",
        "u": "http://www.animefillerlist.com/search/node/{{{s}}}"
    },
    {
        "d": "nedir-sozluk.com",
        "b": "anlamı",
        "u": "http://nedir-sozluk.com/ara/{{{s}}}"
    },
    {
        "d": "www.appannie.com",
        "b": "annie",
        "u": "http://www.appannie.com/search/?q={{{s}}}"
    },
    {
        "d": "answers.yahoo.com",
        "b": "answer",
        "u": "http://answers.yahoo.com/search/search_result;_ylt=AmLr_DtDPVmDQzOuA2T6sxAjzKIX;_ylv=3?p={{{s}}}&submit-go=Search+Y!+Answers"
    },
    {
        "d": "www.antonimos.net",
        "b": "antonimo",
        "u": "http://www.antonimos.net/?termino={{{s}}}&btnG=Ant%F3nimos"
    },
    {
        "d": "www.antonimos.com.br",
        "b": "antonimos",
        "u": "https://www.antonimos.com.br/busca.php?q={{{s}}}"
    },
    {
        "d": "artofproblemsolving.com",
        "b": "aopscomm",
        "u": "https://artofproblemsolving.com/community/search/{{{s}}}"
    },
    {
        "d": "www.apertium.org",
        "b": "apert-en-es",
        "u": "https://www.apertium.org/index.spa.html?dir=eng-spa&q={{{s}}}#translation"
    },
    {
        "d": "api.duckduckgo.com",
        "b": "api",
        "u": "https://api.duckduckgo.com/?q={{{s}}}&o=json&pretty=1&no_html=1&no_redirect=1"
    },
    {
        "d": "apility.io",
        "b": "apility",
        "u": "https://apility.io/search/{{{s}}}"
    },
    {
        "d": "careers.activision.com",
        "b": "apinc",
        "u": "https://careers.activision.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "apps.evozi.com",
        "b": "apk",
        "u": "http://apps.evozi.com/apk-downloader/?id={{{s}}}"
    },
    {
        "d": "wq.apnic.net",
        "b": "apnic",
        "u": "https://wq.apnic.net/static/search.html?query={{{s}}}"
    },
    {
        "d": "www.apolloduck.com",
        "b": "apolloduck",
        "u": "http://www.apolloduck.com/search.phtml?search={{{s}}}&exact=1&sr=1&q=1"
    },
    {
        "d": "appear.in",
        "b": "appear",
        "u": "https://appear.in/{{{s}}}"
    },
    {
        "d": "maps.apple.com",
        "b": "applemaps",
        "u": "http://maps.apple.com/?q={{{s}}}"
    },
    {
        "d": "aprs.fi",
        "b": "aprsfi",
        "u": "http://aprs.fi/#!mt=roadmap&z=11&call=a%2F{{{s}}}&timerange=3600&tail=3600"
    },
    {
        "d": "translate.google.com",
        "b": "ar2en",
        "u": "https://translate.google.com/#ar/en/{{{s}}}"
    },
    {
        "d": "www.aramex.com",
        "b": "aramex",
        "u": "https://www.aramex.com/track-results-multiple.aspx?ShipmentNumber={{{s}}}"
    },
    {
        "d": "con.arbeitsagentur.de",
        "b": "arbeitsagentur",
        "u": "https://con.arbeitsagentur.de/prod/jobboerse/jobsuche-ui/?VOLLTEXT={{{s}}}&FCT.ANGEBOTSART=ARBEIT&FCT.AKTUALITAET=100&FCT.BEHINDERUNG=AUS&page=1&size=10&sort=Relevanz&s=5"
    },
    {
        "d": "www.arcgis.com",
        "b": "arcgis",
        "u": "http://www.arcgis.com/home/search.html?q={{{s}}}"
    },
    {
        "d": "www.archchinese.com",
        "b": "archchine",
        "u": "http://www.archchinese.com/chinese_english_dictionary.html?find={{{s}}} "
    },
    {
        "d": "web.archive.org",
        "b": "archived",
        "u": "https://web.archive.org/web/*/{{{s}}}"
    },
    {
        "d": "archive.org",
        "b": "archive",
        "u": "https://archive.org/search.php?query={{{s}}}"
    },
    {
        "d": "archive.is",
        "b": "archiveis",
        "u": "http://archive.is/search/?q={{{s}}}"
    },
    {
        "d": "www.archiveteam.org",
        "b": "archiveteam",
        "u": "http://www.archiveteam.org/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "web.archive.org",
        "b": "archiveweb",
        "u": "https://web.archive.org/web/*/{{{s}}}"
    },
    {
        "d": "www.almaany.com",
        "b": "ar-en",
        "u": "https://www.almaany.com/ar/dict/ar-en/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "arf",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aar15.com&ia=web"
    },
    {
        "d": "www.argep.hu",
        "b": "argep",
        "u": "http://www.argep.hu/main.aspx?suche={{{s}}}&x=0&y=0"
    },
    {
        "d": "app.asana.com",
        "b": "asana",
        "u": "https://app.asana.com/0/search/{{{s}}}"
    },
    {
        "d": "selfhosted.libhunt.com",
        "b": "ash",
        "u": "https://selfhosted.libhunt.com/search?query={{{s}}}"
    },
    {
        "d": "www.ask.com",
        "b": "ask",
        "u": "http://www.ask.com/web?q={{{s}}}"
    },
    {
        "d": "apple.stackexchange.com",
        "b": "askd",
        "u": "http://apple.stackexchange.com/search?{{{s}}}"
    },
    {
        "d": "stock.adobe.com",
        "b": "astk",
        "u": "https://stock.adobe.com/search?k={{{s}}}"
    },
    {
        "d": "search.asx.com.au",
        "b": "asx",
        "u": "https://search.asx.com.au/s/search.html?query={{{s}}}&collection=asx-meta&profile=web"
    },
    {
        "d": "www.athletic.net",
        "b": "ath",
        "u": "https://www.athletic.net/Search.aspx#?q={{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "AUD2EUR",
        "u": "http://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=AUD&To=EUR"
    },
    {
        "d": "www.xe.com",
        "b": "AUD2GDP",
        "u": "http://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=AUD&To=GBP"
    },
    {
        "d": "www.xe.com",
        "b": "aud2usd",
        "u": "http://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=AUD&To=USD"
    },
    {
        "d": "search.auone.jp",
        "b": "auone",
        "u": "http://search.auone.jp/?q={{{s}}}"
    },
    {
        "d": "auspost.com.au",
        "b": "auspost",
        "u": "http://auspost.com.au/track/track.html?id={{{s}}}"
    },
    {
        "d": "avxsearch.se",
        "b": "avax",
        "u": "http://avxsearch.se/search?q={{{s}}}:"
    },
    {
        "d": "search.avg.com",
        "b": "avg",
        "u": "http://search.avg.com/search?q={{{s}}}"
    },
    {
        "d": "kb.avg.com",
        "b": "avgkb",
        "u": "http://kb.avg.com/pkb_Home?q={{{s}}}"
    },
    {
        "d": "flightaware.com",
        "b": "aware",
        "u": "http://flightaware.com/live/airport/{{{s}}}"
    },
    {
        "d": "awesomecow.com",
        "b": "awesomecow",
        "u": "http://awesomecow.com/index.php?ieska={{{s}}}"
    },
    {
        "d": "www.alibaba.com",
        "b": "baba",
        "u": "https://www.alibaba.com/trade/search?IndexArea=product_en&CatId=&SearchText={{{s}}}"
    },
    {
        "d": "fr.bab.la",
        "b": "babdedk",
        "u": "http://fr.bab.la/dictionnaire/danois-allemand/{{{s}}}"
    },
    {
        "d": "nl.bab.la",
        "b": "babel",
        "u": "http://nl.bab.la/woordenboek/nederlands-engels/{{{s}}}"
    },
    {
        "d": "en.bab.la",
        "b": "babeneo",
        "u": "http://en.bab.la/dictionary/english-esperanto/{{{s}}}"
    },
    {
        "d": "en.bab.la",
        "b": "babensw",
        "u": "https://en.bab.la/dictionary/english-swedish/{{{s}}}"
    },
    {
        "d": "de.bab.la",
        "b": "babesde",
        "u": "http://de.bab.la/woerterbuch/spanisch-deutsch/{{{s}}}"
    },
    {
        "d": "pl.bab.la",
        "b": "babplru",
        "u": "https://pl.bab.la/slownik/polski-rosyjski/{{{s}}}"
    },
    {
        "d": "sv.bab.la",
        "b": "babsv",
        "u": "http://sv.bab.la/lexikon/engelsk-svensk/{{{s}}}"
    },
    {
        "d": "backpack.tf",
        "b": "backpack",
        "u": "http://backpack.tf/id/{{{s}}}"
    },
    {
        "d": "badi.com",
        "b": "badi",
        "u": "https://badi.com/us/s/{{{s}}}"
    },
    {
        "d": "reiseauskunft.bahn.de",
        "b": "bahn",
        "u": "http://reiseauskunft.bahn.de/bin/query.exe/dn?S=&Z={{{s}}}"
    },
    {
        "d": "www.baidu.com",
        "b": "baidu",
        "u": "http://www.baidu.com/s?wd={{{s}}}&cl=3"
    },
    {
        "d": "pipl.com",
        "b": "BangPeople",
        "u": "https://pipl.com/search/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "bangs",
        "u": "https://duckduckgo.com/bang?q={{{s}}}"
    },
    {
        "d": "thebarchive.com",
        "b": "barchive",
        "u": "https://thebarchive.com/_/search/text/{{{s}}}"
    },
    {
        "d": "cryptography.cc",
        "b": "base64e",
        "u": "https://cryptography.cc/convert?text={{{s}}}&algorithm=base64encode"
    },
    {
        "d": "www.bing.com",
        "b": "b",
        "u": "https://www.bing.com/search?q={{{s}}}"
    },
    {
        "d": "www.bbt.com",
        "b": "bbt",
        "u": "https://www.bbt.com/search-results.html?query={{{s}}}"
    },
    {
        "d": "blockchain.info",
        "b": "bchain",
        "u": "https://blockchain.info/address/{{{s}}}"
    },
    {
        "d": "sitereview.bluecoat.com",
        "b": "bcsite",
        "u": "https://sitereview.bluecoat.com/sitereview.jsp#/?search={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bday",
        "u": "https://www.bing.com/search?q={{{s}}}&filters=ex1%3a\"\"ez1\"\""
    },
    {
        "d": "www.baidu.com",
        "b": "bd",
        "u": "http://www.baidu.com/s?wd={{{s}}}"
    },
    {
        "d": "dict.tu-chemnitz.de",
        "b": "bde",
        "u": "http://dict.tu-chemnitz.de/dings.cgi?query={{{s}}}"
    },
    {
        "d": "www.beammachine.net",
        "b": "beam",
        "u": "http://www.beammachine.net/de/qsearch.php?q={{{s}}}&strict=1"
    },
    {
        "d": "because.moe",
        "b": "because",
        "u": "http://because.moe/?q={{{s}}}"
    },
    {
        "d": "www.berekenhet.nl",
        "b": "berekenen",
        "u": "http://www.berekenhet.nl/zoeken.html?q={{{s}}}"
    },
    {
        "d": "www.berlin.de",
        "b": "berlinmap",
        "u": "http://www.berlin.de/stadtplan/?ADR_STREET={{{s}}}"
    },
    {
        "d": "berufenet.arbeitsagentur.de",
        "b": "berufenet",
        "u": "https://berufenet.arbeitsagentur.de/berufenet/faces/index?path=null/suchergebnisse&such={{{s}}}"
    },
    {
        "d": "conjugueur.bescherelle.com",
        "b": "besch",
        "u": "http://conjugueur.bescherelle.com/ConjugueurWeb/index.jsf?term={{{s}}}"
    },
    {
        "d": "www.biblegateway.com",
        "b": "bg",
        "u": "http://www.biblegateway.com/passage/?search={{{s}}}"
    },
    {
        "d": "www.bankgirot.se",
        "b": "bgc",
        "u": "https://www.bankgirot.se/en/sok-bg-nr/?company={{{s}}}"
    },
    {
        "d": "bgm.tv",
        "b": "bgm",
        "u": "https://bgm.tv/subject_search/{{{s}}}?cat=all"
    },
    {
        "d": "www.bankgirot.se",
        "b": "bgn",
        "u": "https://www.bankgirot.se/en/sok-bg-nr/?bgnr={{{s}}}"
    },
    {
        "d": "www.bankgirot.se",
        "b": "bgo",
        "u": "https://www.bankgirot.se/en/sok-bg-nr/?orgnr={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bi",
        "u": "https://www.bing.com/images/search?q={{{s}}}&go=&form=QBIL&qs=n"
    },
    {
        "d": "bibleserver.com",
        "b": "bibleserver",
        "u": "http://bibleserver.com/search/LUT/{{{s}}}/1"
    },
    {
        "d": "www.bibleserver.com",
        "b": "biblsrv",
        "u": "http://www.bibleserver.com/search/{{{s}}}"
    },
    {
        "d": "www.biblionet.gr",
        "b": "bibnet",
        "u": "http://www.biblionet.gr/main.asp?page=results&key={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bimages",
        "u": "https://www.bing.com/images/search?q={{{s}}}&go=&form=QBIL&qs=n"
    },
    {
        "d": "bin.arnastofnun.is",
        "b": "bin",
        "u": "http://bin.arnastofnun.is/leit/?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bing",
        "u": "https://www.bing.com/search?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bingimages",
        "u": "https://www.bing.com/images/search?q={{{s}}}&go=&form=QBIL&qs=n"
    },
    {
        "d": "www.bing.com",
        "b": "bingmaps",
        "u": "https://www.bing.com/maps/?q={{{s}}}&obox=1"
    },
    {
        "d": "bing.co.uk",
        "b": "Binguk",
        "u": "http://bing.co.uk/?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bingvideos",
        "u": "https://www.bing.com/videos/search?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bir",
        "u": "https://www.bing.com/images/search?q=imgurl:{{{s}}}&view=detailv2&iss=sbi&FORM=IRSBIQ#enterInsights"
    },
    {
        "d": "www.bisafans.de",
        "b": "bisa",
        "u": "https://www.bisafans.de/suchbisa.php?q={{{s}}}"
    },
    {
        "d": "bitbucket.org",
        "b": "bitbucket",
        "u": "http://bitbucket.org/repo/all/?name={{{s}}}"
    },
    {
        "d": "blockchain.info",
        "b": "bitcoin",
        "u": "https://blockchain.info/search?search={{{s}}}"
    },
    {
        "d": "bitly.com",
        "b": "bitly",
        "u": "https://bitly.com/?url={{{s}}}"
    },
    {
        "d": "bittrust.org",
        "b": "bittrust",
        "u": "http://bittrust.org/search#stq={{{s}}}"
    },
    {
        "d": "www.biznar.com",
        "b": "biznar",
        "u": "http://www.biznar.com/biznar/result-list/fullRecord:{{{s}}}"
    },
    {
        "d": "blackle.com",
        "b": "bla",
        "u": "http://blackle.com/results/?cx=partner-pub-8993703457585266%3A4862972284&cof=FORID%3A10&ie=UTF-8&q= {{{s}}}&sa=+#gsc.tab=0&gsc.q= {{{s}}}&gsc.page=1"
    },
    {
        "d": "www.blinde-kuh.de",
        "b": "blindekuh",
        "u": "http://www.blinde-kuh.de/bksearch.cgi?input=bksearchbox+start&query={{{s}}}"
    },
    {
        "d": "blockchain.info",
        "b": "blockchain",
        "u": "https://blockchain.info/en/search?search={{{s}}}"
    },
    {
        "d": "blockchair.com",
        "b": "blockchair",
        "u": "https://blockchair.com/search?q={{{s}}}"
    },
    {
        "d": "blogspot.com",
        "b": "blogspot",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:blogspot.com"
    },
    {
        "d": "www.bluehive.com",
        "b": "bluehive",
        "u": "https://www.bluehive.com/providers/search/{{{s}}}"
    },
    {
        "d": "www.blox.pl",
        "b": "blx",
        "u": "http://www.blox.pl/html?page=blogPublicSearch&container_search={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bmaps",
        "u": "https://www.bing.com/maps/?q={{{s}}}&obox=1"
    },
    {
        "d": "www.bing.com",
        "b": "bm",
        "u": "https://www.bing.com/maps/?q={{{s}}}&obox=1"
    },
    {
        "d": "blendermarket.com",
        "b": "bmk",
        "u": "https://blendermarket.com/search?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bmonth",
        "u": "https://www.bing.com/search?q={{{s}}}&filters=ex1%3a\"\"ez3\"\""
    },
    {
        "d": "www.getbmwparts.com",
        "b": "bmwparts",
        "u": "https://www.getbmwparts.com/search?search_str={{{s}}}"
    },
    {
        "d": "www.bna.com.ar",
        "b": "bna",
        "u": "http://www.bna.com.ar/Buscador?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bnbr",
        "u": "http://www.bing.com/search?q={{{s}}}&rf=1&qpvt={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bnews",
        "u": "https://www.bing.com/news/search?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bnl",
        "u": "https://www.bing.com/search?q={{{s}}}&cc=nl"
    },
    {
        "d": "www.bodo.de",
        "b": "bodo",
        "u": "https://www.bodo.de/suche.html?tx_kesearch_pi1[sword]={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "boingboing",
        "u": "http://www.google.com/cse?cx=partner-pub-2170174688585464:d58nno-rqp8&ie=ISO-8859-1&q={{{s}}}&sa=GO&siteurl=www.boingboing.net/"
    },
    {
        "d": "boxoh.com",
        "b": "boxoh",
        "u": "http://boxoh.com/?t={{{s}}}"
    },
    {
        "d": "products.bpiworld.org",
        "b": "bpi",
        "u": "http://products.bpiworld.org/companies?title=&field_industry_category_tid=&field_member_id_value={{{s}}}"
    },
    {
        "d": "track.bpost.be",
        "b": "bpost",
        "u": "http://track.bpost.be/btr/web/#/search?itemCode={{{s}}}"
    },
    {
        "d": "search.brave.com",
        "b": "brave",
        "u": "https://search.brave.com/search?q={{{s}}}"
    },
    {
        "d": "boardreader.com",
        "b": "brd",
        "u": "https://boardreader.com/s/{{{s}}}.html"
    },
    {
        "d": "www.bing.com",
        "b": "bri",
        "u": "https://www.bing.com/images/search?q=imgurl:{{{s}}}&view=detailv2&iss=sbi&FORM=IRSBIQ#enterInsights"
    },
    {
        "d": "www.bricksinmotion.com",
        "b": "brim",
        "u": "http://www.bricksinmotion.com/forums/search/?action=search&keywords={{{s}}}&search=Submit+search&show_as=topics"
    },
    {
        "d": "www.xe.com",
        "b": "brl2eur",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=BRL&To=EUR"
    },
    {
        "d": "www.xe.com",
        "b": "brl2gbp",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=BRL&To=GBP"
    },
    {
        "d": "www.xe.com",
        "b": "brl2usd",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=BRL&To=USD"
    },
    {
        "d": "w2.brreg.no",
        "b": "brreg",
        "u": "http://w2.brreg.no/enhet/sok/treffliste.jsp?navn={{{s}}} &orgform=0&fylke=0&kommune=0"
    },
    {
        "d": "www.bsag.de",
        "b": "bsag",
        "u": "https://www.bsag.de/index.php?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bsocial",
        "u": "https://www.bing.com/social/search/updates?q={{{s}}}"
    },
    {
        "d": "www.blendswap.com",
        "b": "bsp",
        "u": "https://www.blendswap.com/blends/search?keywords={{{s}}}"
    },
    {
        "d": "www.blockchain.com",
        "b": "btc",
        "u": "https://www.blockchain.com/search?search={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bt",
        "u": "https://www.bing.com/translator?text={{{s}}}"
    },
    {
        "d": "bttf.duckduckgo.com",
        "b": "bttf",
        "u": "http://bttf.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "www.microsofttranslator.com",
        "b": "bturl",
        "u": "http://www.microsofttranslator.com/bv.aspx?a={{{s}}}"
    },
    {
        "d": "www.bookbub.com",
        "b": "bub",
        "u": "https://www.bookbub.com/search?search={{{s}}}"
    },
    {
        "d": "builtwith.com",
        "b": "built",
        "u": "https://builtwith.com/?{{{s}}}"
    },
    {
        "d": "together.bunq.com",
        "b": "bunq",
        "u": "https://together.bunq.com/?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bv",
        "u": "https://www.bing.com/videos?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bvideo",
        "u": "https://www.bing.com/videos?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bvideos",
        "u": "https://www.bing.com/videos?q={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bweek",
        "u": "https://www.bing.com/search?q={{{s}}}&filters=ex1%3a\"\"ez2\"\""
    },
    {
        "d": "www.byui.edu",
        "b": "byui",
        "u": "https://www.byui.edu/search/result?q={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "c2e",
        "u": "https://translate.google.com/#cs/en/{{{s}}}"
    },
    {
        "d": "www.c64-wiki.de",
        "b": "c64wde",
        "u": "http://www.c64-wiki.de/index.php?title=Spezial%3ASuche&go=Seite&search={{{s}}}"
    },
    {
        "d": "www.caa.ca",
        "b": "caa",
        "u": "http://www.caa.ca/?s={{{s}}}&submit=Search&lang=en"
    },
    {
        "d": "webcache.googleusercontent.com",
        "b": "cached",
        "u": "https://webcache.googleusercontent.com/search?q=cache:{{{s}}}"
    },
    {
        "d": "webcache.googleusercontent.com",
        "b": "cachedview",
        "u": "http://webcache.googleusercontent.com/search?q=cache:{{{s}}}"
    },
    {
        "d": "webcache.googleusercontent.com",
        "b": "cache",
        "u": "https://webcache.googleusercontent.com/search?q=cache:{{{s}}}"
    },
    {
        "d": "conjd.cactus2000.de",
        "b": "cact",
        "u": "http://conjd.cactus2000.de/index.php?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "calc",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=calculator"
    },
    {
        "d": "duckduckgo.com",
        "b": "calculator",
        "u": "https://duckduckgo.com/?ia=calculator&q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "calendar",
        "u": "https://www.google.com/calendar/b/0/render?q={{{s}}}"
    },
    {
        "d": "callook.info",
        "b": "callook",
        "u": "http://callook.info/{{{s}}}"
    },
    {
        "d": "accucampus.net",
        "b": "campus",
        "u": "https://accucampus.net/search?q={{{s}}}"
    },
    {
        "d": "recherche-search.gc.ca",
        "b": "canada",
        "u": "https://recherche-search.gc.ca/rGs/s_r?cdn=canada&st=s&num=10&langs=eng&st1rt=0&s5bm3ts21rch=x&q={{{s}}}"
    },
    {
        "d": "www.canadapost.ca",
        "b": "canadapost",
        "u": "https://www.canadapost.ca/cpotools/apps/track/personal/findByTrackNumber?trackingNumber={{{s}}}&LOCALE=en&LOCALE2=en"
    },
    {
        "d": "recherche-search.gc.ca",
        "b": "can",
        "u": "https://recherche-search.gc.ca/rGs/s_r?cdn=canada&st=s&num=10&langs=eng&st1rt=0&s5bm3ts21rch=x&q={{{s}}}"
    },
    {
        "d": "www.candlestickpatterns.org",
        "b": "candlestickpatterns",
        "u": "http://www.candlestickpatterns.org/?s={{{s}}}"
    },
    {
        "d": "www.careerbuilder.com",
        "b": "careerbuilder",
        "u": "http://www.careerbuilder.com/Jobseeker/Jobs/JobResults.aspx?IPath=QH&ch=&rs=&s_rawwords={{{s}}}&s_jobtypes=ALL&s_freshness=30&s_education=DRNS&s_freeloc=&qsbButton=Find+Jobs+%3E%3E"
    },
    {
        "d": "carjam.co.nz",
        "b": "carjam",
        "u": "https://carjam.co.nz/car/?plate={{{s}}}"
    },
    {
        "d": "search.carrot2.org",
        "b": "carrot",
        "u": "http://search.carrot2.org/stable/search?source=web&view=folders&skin=fancy-compact&query={{{s}}}&results=100&algorithm=lingo"
    },
    {
        "d": "www.crunchbase.com",
        "b": "cb",
        "u": "https://www.crunchbase.com/textsearch?q={{{s}}}"
    },
    {
        "d": "www.cbs.nl",
        "b": "cbs",
        "u": "https://www.cbs.nl/nl-nl/zoeken/?query={{{s}}}"
    },
    {
        "d": "search.creativecommons.org",
        "b": "cc",
        "u": "https://search.creativecommons.org/search?q={{{s}}}"
    },
    {
        "d": "www.coworking.coffee",
        "b": "ccplace",
        "u": "https://www.coworking.coffee/places?q={{{s}}}"
    },
    {
        "d": "www.class-central.com",
        "b": "cctrl",
        "u": "https://www.class-central.com/search?q={{{s}}} "
    },
    {
        "d": "coincheckup.com",
        "b": "ccu",
        "u": "https://coincheckup.com/coins/{{{s}}}"
    },
    {
        "d": "chess-db.com",
        "b": "cdb",
        "u": "https://chess-db.com/public/execute.jsp?name={{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cdeen",
        "u": "http://www.collinsdictionary.com/spellcheck/english-german?q={{{s}}} "
    },
    {
        "d": "www.dictionary.com",
        "b": "cdi",
        "u": "https://www.dictionary.com/browse/{{{s}}}"
    },
    {
        "d": "www.comdirect.de",
        "b": "cdirect",
        "u": "https://www.comdirect.de/inf/search/general.html?SEARCH_VALUE={{{s}}}"
    },
    {
        "d": "currentlydown.com",
        "b": "cdown",
        "u": "http://currentlydown.com/{{{s}}}"
    },
    {
        "d": "www.cdp.net",
        "b": "cdp",
        "u": "https://www.cdp.net/en/responses?utf8=✓&queries[name]={{{s}}}"
    },
    {
        "d": "www.ceek.jp",
        "b": "ceekjp",
        "u": "http://www.ceek.jp/search.cgi?q={{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cenfr",
        "u": "http://www.collinsdictionary.com/dictionary/english-french/{{{s}}}"
    },
    {
        "d": "www.consultarcep.com.br",
        "b": "cep",
        "u": "http://www.consultarcep.com.br/resultados.html?cx=partner-pub-6657933402951336%3A8478085485&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa=%C2%A0"
    },
    {
        "d": "maps.cern.ch",
        "b": "cernmap",
        "u": "https://maps.cern.ch/mapsearch/mapsearch.htm?n=[%27{{{s}}}%27]"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cfren",
        "u": "http://www.collinsdictionary.com/dictionary/french-english/{{{s}}}"
    },
    {
        "d": "www.change.org",
        "b": "change",
        "u": "https://www.change.org/search?q={{{s}}}"
    },
    {
        "d": "chrome.google.com",
        "b": "che",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}?_category=extensions"
    },
    {
        "d": "check-host.net",
        "b": "checkhost",
        "u": "https://check-host.net/ip-info?host={{{s}}}"
    },
    {
        "d": "www.chefkoch.de",
        "b": "chef",
        "u": "http://www.chefkoch.de/rs/s0/{{{s}}}/Rezepte.html"
    },
    {
        "d": "www.choice.com.au",
        "b": "choice",
        "u": "https://www.choice.com.au/search?q={{{s}}}"
    },
    {
        "d": "chrome.google.com",
        "b": "chromewebstore",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}"
    },
    {
        "d": "www.chronopost.fr",
        "b": "chronopost",
        "u": "http://www.chronopost.fr/fr/chrono_suivi_search?lang=fr&listeNumerosLT={{{s}}}"
    },
    {
        "d": "beta.companieshouse.gov.uk",
        "b": "chuk",
        "u": "https://beta.companieshouse.gov.uk/search?q={{{s}}}"
    },
    {
        "d": "www.cookinglight.com",
        "b": "cklt",
        "u": "http://www.cookinglight.com/search?q={{{s}}}"
    },
    {
        "d": "clanky.seznam.cz",
        "b": "clanky",
        "u": "https://clanky.seznam.cz/?q={{{s}}}"
    },
    {
        "d": "climatecounts.org",
        "b": "climatecounts",
        "u": "http://climatecounts.org/searchresults.php?p=term&term={{{s}}}"
    },
    {
        "d": "jobs.advancedclinical.com",
        "b": "clinical",
        "u": "https://jobs.advancedclinical.com/search-results?keywords={{{s}}}"
    },
    {
        "d": "beta.cliqz.com",
        "b": "cliqz",
        "u": "https://beta.cliqz.com/search?q={{{s}}}&lang=en"
    },
    {
        "d": "www.worldcat.org",
        "b": "closebook",
        "u": "https://www.worldcat.org/search?qt=worldcat_org_bks&q={{{s}}}&fq=dt%3Abks"
    },
    {
        "d": "www.cloudsdale.org",
        "b": "cloudsdale",
        "u": "https://www.cloudsdale.org/explore/clouds/search?q={{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "cmcap",
        "u": "https://coinmarketcap.com/currencies/{{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "cmc",
        "u": "https://coinmarketcap.com/currencies/{{{s}}}"
    },
    {
        "d": "library.cmi.ac.in",
        "b": "cmi",
        "u": "http://library.cmi.ac.in/cgi-bin/koha/opac-search.pl?q={{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtl",
        "u": "http://www.cnrtl.fr/definition/{{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "cny2eur",
        "u": "https://www.xe.com/currencyconverter/convert/?From=CNY&To=EUR&Amount={{{s}}}"
    },
    {
        "d": "coccoc.com",
        "b": "coccoc",
        "u": "http://coccoc.com/search#query={{{s}}}"
    },
    {
        "d": "coda.io",
        "b": "codat",
        "u": "https://coda.io/templates/productivity?search={{{s}}}"
    },
    {
        "d": "codepen.io",
        "b": "codepen",
        "u": "https://codepen.io/search/pens?q={{{s}}}&limit=all&type=type-pens"
    },
    {
        "d": "codepoints.net",
        "b": "codepoints",
        "u": "http://codepoints.net/search?q={{{s}}}"
    },
    {
        "d": "www.searchco.de",
        "b": "code",
        "u": "http://www.searchco.de/?q={{{s}}}&cs=on"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "codi",
        "u": "https://www.collinsdictionary.com/dictionary/english/{{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "coin",
        "u": "https://coinmarketcap.com/search/?q={{{s}}}"
    },
    {
        "d": "www.coingecko.com",
        "b": "coingecko",
        "u": "https://www.coingecko.com/en/search/bang?query={{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "coinmarketcap",
        "u": "https://coinmarketcap.com/search/?q={{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "coinmc",
        "u": "https://coinmarketcap.com/currencies/search/?q={{{s}}}"
    },
    {
        "d": "www.londoncoins.co.uk",
        "b": "coins",
        "u": "http://www.londoncoins.co.uk/?page=Pastresults&searchterm={{{s}}}&searchtype=1"
    },
    {
        "d": "www.colourbox.com",
        "b": "col",
        "u": "https://www.colourbox.com/search/find?q={{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "collinsge",
        "u": "https://www.collinsdictionary.com/dictionary/german-english/{{{s}}}"
    },
    {
        "d": "beta.companieshouse.gov.uk",
        "b": "companieshouse",
        "u": "https://beta.companieshouse.gov.uk/search/companies?q={{{s}}}"
    },
    {
        "d": "mail.google.com",
        "b": "compose",
        "u": "https://mail.google.com/mail/?view=cm&to=&su={{{s}}}"
    },
    {
        "d": "www.computrabajo.com.ar",
        "b": "computrabajo",
        "u": "http://www.computrabajo.com.ar/ofertas-de-trabajo/?q={{{s}}}"
    },
    {
        "d": "www.conference-service.com",
        "b": "coms",
        "u": "https://www.conference-service.com/conferences/conference-search.html?searchwords={{{s}}}"
    },
    {
        "d": "conjugator.reverso.net",
        "b": "conjen",
        "u": "http://conjugator.reverso.net/conjugation-english-verb-{{{s}}}.html"
    },
    {
        "d": "conjugueur.reverso.net",
        "b": "conjfr",
        "u": "http://conjugueur.reverso.net/conjugaison-francais-verbe-{{{s}}}.html"
    },
    {
        "d": "leconjugueur.lefigaro.fr",
        "b": "conj",
        "u": "https://leconjugueur.lefigaro.fr/conjugaison/verbe/{{{s}}}"
    },
    {
        "d": "contacts.google.com",
        "b": "contacts",
        "u": "https://contacts.google.com/search/{{{s}}}"
    },
    {
        "d": "www.coolinarika.com",
        "b": "coolinarika",
        "u": "https://www.coolinarika.com/recepti/pretrazivanje/?upit={{{s}}}"
    },
    {
        "d": "www.linkcorreios.com.br",
        "b": "correios",
        "u": "https://www.linkcorreios.com.br/{{{s}}}"
    },
    {
        "d": "www.correos.es",
        "b": "correos",
        "u": "http://www.correos.es/ss/Satellite/site/aplicacion-4000003383089-herramientas_y_apps/detalle_app-sidioma=es_ES?numero={{{s}}}"
    },
    {
        "d": "cd.justinjc.com",
        "b": "countdown",
        "u": "http://cd.justinjc.com/{{{s}}}"
    },
    {
        "d": "www.countrycode.org",
        "b": "country",
        "u": "https://www.countrycode.org/{{{s}}}"
    },
    {
        "d": "www.covot.net",
        "b": "covot",
        "u": "http://www.covot.net/dictionary?search={{{s}}}"
    },
    {
        "d": "www.postaonline.cz",
        "b": "cpost",
        "u": "https://www.postaonline.cz/trackandtrace/-/zasilka/cislo?parcelNumbers={{{s}}}"
    },
    {
        "d": "wikidiy.org",
        "b": "crafts",
        "u": "https://wikidiy.org/?s={{{s}}}"
    },
    {
        "d": "crowdin.com",
        "b": "crowdin",
        "u": "https://crowdin.com/projects?q={{{s}}}#advanced-search"
    },
    {
        "d": "chemsearch.kovsky.net",
        "b": "crr",
        "u": "http://chemsearch.kovsky.net/index.php?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "csgo",
        "u": "https://www.reddit.com/r/GlobalOffensive/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "ciphersuite.info",
        "b": "csinfo",
        "u": "https://ciphersuite.info/search/?q={{{s}}} "
    },
    {
        "d": "checkshorturl.com",
        "b": "csu",
        "u": "http://checkshorturl.com/expand.php?u={{{s}}}"
    },
    {
        "d": "www.couchsurfing.com",
        "b": "csurf",
        "u": "https://www.couchsurfing.com/?q={{{s}}}"
    },
    {
        "d": "cs.wikipedia.org",
        "b": "cswiki",
        "u": "http://cs.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "www.ctt.pt",
        "b": "ctt",
        "u": "https://www.ctt.pt/feapl_2/app/open/objectSearch/objectSearch.jspx?objects={{{s}}}"
    },
    {
        "d": "www.cvmarket.lt",
        "b": "cvm",
        "u": "http://www.cvmarket.lt/joboffers.php?op=search&search%5Bkeyword%5D={{{s}}}"
    },
    {
        "d": "www.cwjobs.co.uk",
        "b": "cwj",
        "u": "https://www.cwjobs.co.uk/jobs/{{{s}}}"
    },
    {
        "d": "www.cybrhome.com",
        "b": "cybrhome",
        "u": "https://www.cybrhome.com/search?q={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "cyen",
        "u": "https://translate.google.com/#cy/en/{{{s}}}"
    },
    {
        "d": "cymon.io",
        "b": "cymon",
        "u": "https://cymon.io/{{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "czk2eur",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=CZK&To=EUR"
    },
    {
        "d": "daccaa.com",
        "b": "daccaa",
        "u": "https://daccaa.com/results/?q={{{s}}}"
    },
    {
        "d": "www.dailywritingtips.com",
        "b": "dailywriting",
        "u": "https://www.dailywritingtips.com/?s={{{s}}}"
    },
    {
        "d": "www.danas.rs",
        "b": "danas",
        "u": "https://www.danas.rs/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dark",
        "u": "https://duckduckgo.com/?q={{{s}}}&kae=d"
    },
    {
        "d": "dic.academic.ru",
        "b": "daru",
        "u": "http://dic.academic.ru/searchall.php?SWord={{{s}}}&from=xx&to=ru&did=&stype=0"
    },
    {
        "d": "datadeer.net",
        "b": "datadeer",
        "u": "https://datadeer.net/search/index.php?q={{{s}}}"
    },
    {
        "d": "search.daum.net",
        "b": "daum",
        "u": "http://search.daum.net/search?w=tot&q={{{s}}}"
    },
    {
        "d": "davesgarden.com",
        "b": "davesgarden",
        "u": "http://davesgarden.com/sitewidesearch.php?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dax",
        "u": "http://duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "day",
        "u": "https://duckduckgo.com/?q={{{s}}}&df=d"
    },
    {
        "d": "m.douban.com",
        "b": "db",
        "u": "https://m.douban.com/search/?query={{{s}}}"
    },
    {
        "d": "discordbots.org",
        "b": "dbl",
        "u": "https://discordbots.org/search?q={{{s}}}"
    },
    {
        "d": "discord.boats",
        "b": "dboats",
        "u": "https://discord.boats/bots?search={{{s}}}"
    },
    {
        "d": "discord.bots.gg",
        "b": "dbots",
        "u": "https://discord.bots.gg/search?q={{{s}}}"
    },
    {
        "d": "paper.dropbox.com",
        "b": "dbp",
        "u": "https://paper.dropbox.com/?q={{{s}}}"
    },
    {
        "d": "duck.co",
        "b": "dc",
        "u": "https://duck.co/forum/search?q={{{s}}}"
    },
    {
        "d": "www.apps.dcnr.state.pa.us",
        "b": "dcnr",
        "u": "http://www.apps.dcnr.state.pa.us/search.aspx?cx=008544532008978746929:8o8oxsc28a8&cof=FORID:11&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "dictionary.reference.com",
        "b": "d.com",
        "u": "http://dictionary.reference.com/browse/{{{s}}}?s=t"
    },
    {
        "d": "wiki.dcinside.com",
        "b": "dcw",
        "u": "http://wiki.dcinside.com/wiki/{{{s}}}"
    },
    {
        "d": "www.deutsche-digitale-bibliothek.de",
        "b": "ddb",
        "u": "https://www.deutsche-digitale-bibliothek.de/searchresults?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dde",
        "u": "https://duckduckgo.com/?kl=de-de&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgal",
        "u": "https://duckduckgo.com/?t=palemoon&kl=xl-es&ko=1&k1=1&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgar",
        "u": "https://duckduckgo.com/?t=palemoon&kl=ar-es&ko=1&k1=1&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgbr",
        "u": "https://duckduckgo.com/?q={{{s}}}&kp=-1&kl=br-pt"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgc",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=calculator"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgde",
        "u": "https://duckduckgo.com/?kl=de-de&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddg",
        "u": "http://duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgee",
        "u": "https://duckduckgo.com/?kl=ee-et&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgeue",
        "u": "https://duckduckgo.com/?kl=ue-es&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddghu",
        "u": "http://duckduckgo.com/?kl=hu-hu&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgi",
        "u": "https://duckduckgo.com/?q={{{s}}}&iax=images&ia=images"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgja",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=jp-jp&kp=-1"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgm",
        "u": "https://duckduckgo.com/?q={{{s}}}&iaxm=maps"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgnl",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=nl-nl"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgno",
        "u": "https://duckduckgo.com/?kl=no-no&q={{{s}}}"
    },
    {
        "d": "ddh10.duckduckgo.com",
        "b": "ddh10",
        "u": "http://ddh10.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh2.duckduckgo.com",
        "b": "ddh2",
        "u": "http://ddh2.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh3.duckduckgo.com",
        "b": "ddh3",
        "u": "http://ddh3.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh4.duckduckgo.com",
        "b": "ddh4",
        "u": "http://ddh4.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh5.duckduckgo.com",
        "b": "ddh5",
        "u": "http://ddh5.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh6.duckduckgo.com",
        "b": "ddh6",
        "u": "http://ddh6.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh7.duckduckgo.com",
        "b": "ddh7",
        "u": "http://ddh7.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh8.duckduckgo.com",
        "b": "ddh8",
        "u": "http://ddh8.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "ddh9.duckduckgo.com",
        "b": "ddh9",
        "u": "http://ddh9.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "docs.duckduckhack.com",
        "b": "ddhdoc",
        "u": "http://docs.duckduckhack.com/?q={{{s}}}"
    },
    {
        "d": "duckduckhack.com",
        "b": "ddhu",
        "u": "http://duckduckhack.com/u/{{{s}}}"
    },
    {
        "d": "www.joindiaspora.com",
        "b": "d*",
        "u": "https://www.joindiaspora.com/people?utf8=✓&q={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "de2fr",
        "u": "https://translate.google.com/#de/fr/{{{s}}}"
    },
    {
        "d": "packages.debian.org",
        "b": "deb",
        "u": "https://packages.debian.org/search?keywords={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "debianfr",
        "u": "http://www.google.com/cse?cx=007724375775369850404%3Ajwpah_hbbjk&ie=UTF-8&q={{{s}}}&sa=Rechercher&siteurl=www.google.com%2Fcse%2Fhome%3Fcx%3D007724375775369850404%3Ajwpah_hbbjk"
    },
    {
        "d": "www.dict.cc",
        "b": "deen",
        "u": "http://www.dict.cc/?s={{{s}}}"
    },
    {
        "d": "deeo.dict.cc",
        "b": "deeo",
        "u": "https://deeo.dict.cc/?s={{{s}}}"
    },
    {
        "d": "www.deepl.com",
        "b": "deeples",
        "u": "https://www.deepl.com/translator#en/es/{{{s}}}"
    },
    {
        "d": "dees.dict.cc",
        "b": "dees",
        "u": "http://dees.dict.cc/?s={{{s}}}"
    },
    {
        "d": "defr.dict.cc",
        "b": "defr",
        "u": "http://defr.dict.cc/?s={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "dehu",
        "u": "http://translate.google.com/#de/hu/{{{s}}}"
    },
    {
        "d": "denl.dict.cc",
        "b": "denl",
        "u": "http://denl.dict.cc/?s={{{s}}}"
    },
    {
        "d": "deno.dict.cc",
        "b": "deno",
        "u": "https://deno.dict.cc/?s={{{s}}}"
    },
    {
        "d": "www.deepl.com",
        "b": "denru",
        "u": "https://www.deepl.com/translator#en/ru/{{{s}}}%0A"
    },
    {
        "d": "www.openthesaurus.de",
        "b": "deopenthesaurus",
        "u": "https://www.openthesaurus.de/synonyme/?q={{{s}}}"
    },
    {
        "d": "descriptionari.com",
        "b": "desc",
        "u": "http://descriptionari.com/q/{{{s}}}"
    },
    {
        "d": "desv.dict.cc",
        "b": "desv",
        "u": "http://desv.dict.cc/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "df",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Adaringfireball.net"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "dfeojm",
        "u": "https://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dgi",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=images&iax=images&ia=images"
    },
    {
        "d": "www.degulesider.dk",
        "b": "dgs",
        "u": "http://www.degulesider.dk/person/resultat/{{{s}}}"
    },
    {
        "d": "nolp.dhl.de",
        "b": "dhlde",
        "u": "http://nolp.dhl.de/nextt-online-public/set_identcodes.do?lang=de&idc={{{s}}}&rfn=&extendedSearch=true"
    },
    {
        "d": "www.dhl-usa.com",
        "b": "dhl",
        "u": "http://www.dhl-usa.com/content/us/en/express/tracking.shtml?AWB={{{s}}}"
    },
    {
        "d": "activetracing.dhl.com",
        "b": "dhlf",
        "u": "https://activetracing.dhl.com/DatPublic/datSelection.do?search=consignmentId&at=cons_ordercode&valueShipmentOrderField={{{s}}}&focus=search2&searchConsignmentId=track"
    },
    {
        "d": "webtrack.dhlglobalmail.com",
        "b": "dhlgm",
        "u": "http://webtrack.dhlglobalmail.com/?trackingnumber={{{s}}}"
    },
    {
        "d": "duck.co",
        "b": "dia",
        "u": "https://duck.co/ia?q={{{s}}}"
    },
    {
        "d": "dic.nicovideo.jp",
        "b": "dicnico",
        "u": "https://dic.nicovideo.jp/a/{{{s}}}"
    },
    {
        "d": "dict.cn",
        "b": "dicn",
        "u": "http://dict.cn/{{{s}}} "
    },
    {
        "d": "www.dict.cc",
        "b": "dictcc",
        "u": "https://www.dict.cc/?s={{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "dictleode",
        "u": "http://dict.leo.org/ende?cmpType=relaxed&search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "diff",
        "u": "https://duckduckgo.com/?q=difference+between+{{{s}}}&ia=qa"
    },
    {
        "d": "www.diigo.com",
        "b": "diigo",
        "u": "http://www.diigo.com/search/my?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dim",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "dict.tu-chemnitz.de",
        "b": "ding",
        "u": "https://dict.tu-chemnitz.de/dings.cgi?query={{{s}}}"
    },
    {
        "d": "www.google.de",
        "b": "dir",
        "u": "https://www.google.de/maps/dir/{{{s}}}"
    },
    {
        "d": "www.dirpy.com",
        "b": "dirpy",
        "u": "http://www.dirpy.com/studio?url={{{s}}}"
    },
    {
        "d": "disboard.org",
        "b": "disboard",
        "u": "https://disboard.org/search?keyword={{{s}}}"
    },
    {
        "d": "discord.me",
        "b": "discme",
        "u": "https://discord.me/servers/1/{{{s}}}"
    },
    {
        "d": "search.disconnect.me",
        "b": "disconnect",
        "u": "http://search.disconnect.me/searchTerms/search?query={{{s}}}&ses=Google"
    },
    {
        "d": "search.disconnect.me",
        "b": "disconnectimg",
        "u": "https://search.disconnect.me/searchTerms/search?query={{{s}}}&option=Images"
    },
    {
        "d": "discordapp.com",
        "b": "discord",
        "u": "https://discordapp.com/invite/{{{s}}}"
    },
    {
        "d": "www.dispostable.com",
        "b": "dispt",
        "u": "http://www.dispostable.com/inbox/{{{s}}}/"
    },
    {
        "d": "dissenter.com",
        "b": "dissent",
        "u": "https://dissenter.com/search?q={{{s}}}"
    },
    {
        "d": "www.dokuwiki.org",
        "b": "dkwk",
        "u": "http://www.dokuwiki.org/start?do=search&id={{{s}}}"
    },
    {
        "d": "map.daum.net",
        "b": "dmap",
        "u": "http://map.daum.net/?q={{{s}}}"
    },
    {
        "d": "eikaiwa.dmm.com",
        "b": "dme",
        "u": "https://eikaiwa.dmm.com/uknow/search/?keyword={{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "dns",
        "u": "http://mxtoolbox.com/SuperTool.aspx?action=a%3a{{{s}}}&run=toolpage"
    },
    {
        "d": "www.avl.gva.es",
        "b": "dnv",
        "u": "http://www.avl.gva.es/lexicval/dnv?paraula={{{s}}}"
    },
    {
        "d": "doai.io",
        "b": "doai",
        "u": "http://doai.io/{{{s}}}"
    },
    {
        "d": "www.dasoertliche.de",
        "b": "doe",
        "u": "http://www.dasoertliche.de/Controller?form_name=search_inv&page=5&context=4&action=43&ph={{{s}}}"
    },
    {
        "d": "results.dogpile.com",
        "b": "dogpile",
        "u": "http://results.dogpile.com/search/web?q={{{s}}}&ql=&topSearchSubmit.x=0&topSearchSubmit.y=0&fcoid=417&fcop=topnav&fpid=27&om_nextpage=True"
    },
    {
        "d": "domainsbot.com",
        "b": "domainsbot",
        "u": "http://domainsbot.com/?q={{{s}}} "
    },
    {
        "d": "domeinwinkel.hosting",
        "b": "domein",
        "u": "https://domeinwinkel.hosting/?domain={{{s}}}"
    },
    {
        "d": "en.niconico.sarashi.com",
        "b": "douga",
        "u": "http://en.niconico.sarashi.com/?{{{s}}}"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "down4me",
        "u": "https://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "downdetector.co.uk",
        "b": "downd",
        "u": "https://downdetector.co.uk/search/?q={{{s}}}"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "down",
        "u": "https://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "downfor",
        "u": "http://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "downforme",
        "u": "https://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "tracking.dpd.de",
        "b": "dpdpost",
        "u": "http://tracking.dpd.de/parcelstatus?query={{{s}}}&locale=en_DE"
    },
    {
        "d": "www.duckduckgo.com",
        "b": "dp",
        "u": "http://www.duckduckgo.com/?q=site%3Adlang.org+{{{s}}}"
    },
    {
        "d": "tracking.dpd.de",
        "b": "dpdt",
        "u": "https://tracking.dpd.de/cgi-bin/delistrack?typ=1&pknr={{{s}}}"
    },
    {
        "d": "www.dogpile.com",
        "b": "dpi",
        "u": "http://www.dogpile.com/search/images?q={{{s}}}"
    },
    {
        "d": "www.dogpile.com",
        "b": "dpn",
        "u": "http://www.dogpile.com/search/news?q={{{s}}}"
    },
    {
        "d": "www.dicio.com.br",
        "b": "dpt",
        "u": "http://www.dicio.com.br/{{{s}}}"
    },
    {
        "d": "www.dogpile.com",
        "b": "dpv",
        "u": "http://www.dogpile.com/search/video?q={{{s}}}"
    },
    {
        "d": "www.dogpile.com",
        "b": "dpw",
        "u": "http://www.dogpile.com/search/web?q={{{s}}}"
    },
    {
        "d": "dle.rae.es",
        "b": "drae",
        "u": "http://dle.rae.es/srv/fetch?w={{{s}}}&m=30"
    },
    {
        "d": "dr.loudness-war.info",
        "b": "drdba",
        "u": "http://dr.loudness-war.info/album/list?album={{{s}}}"
    },
    {
        "d": "dr.loudness-war.info",
        "b": "drdb",
        "u": "http://dr.loudness-war.info/album/list?artist={{{s}}}"
    },
    {
        "d": "www.dreamcareerbuilder.com",
        "b": "dreamcareerbuilder",
        "u": "https://www.dreamcareerbuilder.com/findjob.php?keyword={{{s}}}"
    },
    {
        "d": "drive.google.com",
        "b": "drive",
        "u": "https://drive.google.com/drive/search?q={{{s}}} "
    },
    {
        "d": "www.dropbox.com",
        "b": "dropbox",
        "u": "https://www.dropbox.com/search/personal?query={{{s}}}"
    },
    {
        "d": "www.maildrop.cc",
        "b": "drop",
        "u": "https://www.maildrop.cc/inbox/{{{s}}}"
    },
    {
        "d": "discordservers.com",
        "b": "DscSrv",
        "u": "https://discordservers.com/?term={{{s}}}"
    },
    {
        "d": "search.disroot.org",
        "b": "dsrt",
        "u": "https://search.disroot.org/?q={{{s}}}"
    },
    {
        "d": "www.joindiaspora.com",
        "b": "dtags",
        "u": "https://www.joindiaspora.com/tags/{{{s}}}"
    },
    {
        "d": "www.joindiaspora.com",
        "b": "d*t",
        "u": "https://www.joindiaspora.com/tags/{{{s}}} "
    },
    {
        "d": "translate.reference.com",
        "b": "dtes",
        "u": "http://translate.reference.com/english/spanish/{{{s}}}/"
    },
    {
        "d": "duck.co",
        "b": "duck.co",
        "u": "https://duck.co/search/{{{s}}}"
    },
    {
        "d": "duck.co",
        "b": "duckco",
        "u": "https://duck.co/search/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "?",
        "u": "http://duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "duckgoes",
        "u": "https://duckduckgo.com/?q={{{s}}}&kp=-1&k5=1&kah=wt-wt&kl=xl-es&kad=es_ES"
    },
    {
        "d": "duckduckgo.com",
        "b": "duk",
        "u": "https://duckduckgo.com/?q={{{s}}}&kah=uk-en&kl=uk-en&ia=web"
    },
    {
        "d": "duunitori.fi",
        "b": "duunitori",
        "u": "https://duunitori.fi/tyopaikat/?haku={{{s}}}"
    },
    {
        "d": "m.dvb.de",
        "b": "dvb",
        "u": "https://m.dvb.de/de/verbindungsauskunft/verbindungen.do?vaform%5Bstartname%5D={{{s}}}"
    },
    {
        "d": "www.dvdupc.com",
        "b": "dvdupc",
        "u": "https://www.dvdupc.com/find?find={{{s}}}"
    },
    {
        "d": "www.dr.loudness-war.info",
        "b": "dynamicrangea",
        "u": "http://www.dr.loudness-war.info/index.php?search_album={{{s}}}"
    },
    {
        "d": "www.dr.loudness-war.info",
        "b": "dynamicrange",
        "u": "http://www.dr.loudness-war.info/index.php?search_artist={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "e2c",
        "u": "https://translate.google.com/#en/cs/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "eaf",
        "u": "https://duckduckgo.com/?q=site%3Ahttp%3A%2F%2Feffective-altruism.com+{{{s}}}"
    },
    {
        "d": "search.earth911.com",
        "b": "earth911",
        "u": "http://search.earth911.com/?what={{{s}}}"
    },
    {
        "d": "www.earthcam.com",
        "b": "earthcam",
        "u": "http://www.earthcam.com/?q={{{s}}} "
    },
    {
        "d": "earth.google.com",
        "b": "earth",
        "u": "https://earth.google.com/web/search/{{{s}}}"
    },
    {
        "d": "www.encyclo.nl",
        "b": "eccpd",
        "u": "http://www.encyclo.nl/zoek.php?woord={{{s}}}"
    },
    {
        "d": "www.ecosia.org",
        "b": "ec",
        "u": "http://www.ecosia.org/search?q={{{s}}}"
    },
    {
        "d": "www.ecosia.org",
        "b": "ecim",
        "u": "https://www.ecosia.org/images?q={{{s}}}"
    },
    {
        "d": "community.e-spirit.com",
        "b": "ecom",
        "u": "https://community.e-spirit.com/search.jspa?peopleEnabled=true&userID=&containerType=&container=&spotlight=true&q={{{s}}}"
    },
    {
        "d": "www.ecosia.org",
        "b": "ecosia",
        "u": "https://www.ecosia.org/search?q={{{s}}}"
    },
    {
        "d": "www.edinburgh.gov.uk",
        "b": "edinburgh",
        "u": "http://www.edinburgh.gov.uk/site/scripts/google_results.php?q={{{s}}}"
    },
    {
        "d": "mslworld.egged.co.il",
        "b": "egged",
        "u": "http://mslworld.egged.co.il/?state=3&language=he&freelang={{{s}}}&width=1280#/search"
    },
    {
        "d": "e.ggtimer.com",
        "b": "eggtimer",
        "u": "http://e.ggtimer.com/{{{s}}} "
    },
    {
        "d": "www.ecosia.org",
        "b": "ei",
        "u": "https://www.ecosia.org/images?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ejmr",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aeconjobrumors.com"
    },
    {
        "d": "ejoy-english.com",
        "b": "ejoy",
        "u": "https://ejoy-english.com/go/wordhunt?word={{{s}}}"
    },
    {
        "d": "www.eksisozluk.com",
        "b": "eksisozluk",
        "u": "http://www.eksisozluk.com/show.asp?t={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "elen",
        "u": "http://translate.google.com/#el/en/{{{s}}}"
    },
    {
        "d": "elgoog.im",
        "b": "elgoog",
        "u": "http://elgoog.im/search/?q={{{s}}}"
    },
    {
        "d": "ello.co",
        "b": "ello",
        "u": "https://ello.co/search?terms={{{s}}} "
    },
    {
        "d": "www.eluta.ca",
        "b": "eluta",
        "u": "http://www.eluta.ca/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "emacs",
        "u": "https://duckduckgo.com/?q=site:emacswiki.org+{{{s}}}"
    },
    {
        "d": "emojicons.com",
        "b": "emojicons",
        "u": "http://emojicons.com/tag/{{{s}}}"
    },
    {
        "d": "emojipedia.org",
        "b": "emoji",
        "u": "https://emojipedia.org/search/?q={{{s}}}"
    },
    {
        "d": "www.jobillico.com",
        "b": "emploi",
        "u": "https://www.jobillico.com/recherche-emploi?skwd={{{s}}}"
    },
    {
        "d": "www.jobillico.com",
        "b": "emplois",
        "u": "https://www.jobillico.com/recherche-emploi/0?skwd={{{s}}}&scty=&icty=0&ipc=0&sil=&sjdpl=&sdl=&imc1=0&imc2=0&flat=0&flng=0&mfil=40&ipg=1&clr=1"
    },
    {
        "d": "www.jobillico.com",
        "b": "emploismtl",
        "u": "https://www.jobillico.com/recherche-emploi?skwd={{{s}}}&scty=Montr%C3%A9al%2C%20QC&icty=6185&ipc=0&sil=&sjdpl=&sdl=&imc1=0&imc2=0&flat=45.509828&flng=-73.6715&mfil=byCity&ipg=1&clr=1"
    },
    {
        "d": "www.empregosaqui.com.br",
        "b": "empregosaqui",
        "u": "https://www.empregosaqui.com.br/?s={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "en2ar",
        "u": "https://translate.google.com/#en/ar/{{{s}}}"
    },
    {
        "d": "translate.google.gr",
        "b": "en2el",
        "u": "https://translate.google.gr/#en/el/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "en2fa",
        "u": "https://translate.google.com/#en/fa/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "en2nl",
        "u": "https://translate.google.com/#en/nl/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "en2zh",
        "u": "https://translate.google.com/#en/zh-CN/{{{s}}}"
    },
    {
        "d": "www.searchencrypt.com",
        "b": "encrypt",
        "u": "https://www.searchencrypt.com/search?eq={{{s}}}"
    },
    {
        "d": "www.encyclo.nl",
        "b": "encyclo",
        "u": "http://www.encyclo.nl/begrip/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "ency",
        "u": "https://translate.google.com/#en/cy/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "ende",
        "u": "https://translate.google.com/#en/de/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enel",
        "u": "http://translate.google.com/#en/el/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enes",
        "u": "http://translate.google.com/#en/es/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enfr",
        "u": "http://translate.google.com/#en/fr/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enhe",
        "u": "https://translate.google.com/#en/iw/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enhu",
        "u": "http://translate.google.com/#en/hu/{{{s}}}"
    },
    {
        "d": "gulasidorna.eniro.se",
        "b": "eniro",
        "u": "http://gulasidorna.eniro.se/hitta:{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enit",
        "u": "http://translate.google.com/#en/it/{{{s}}} "
    },
    {
        "d": "translate.google.com",
        "b": "enkr",
        "u": "https://translate.google.com/#en/ko/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enlt",
        "u": "http://translate.google.com/#en/lt/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "ennl",
        "u": "https://translate.google.com/#en/nl/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enno",
        "u": "https://translate.google.com/#view=home&op=translate&sl=en&tl=no&text={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enpl",
        "u": "https://translate.google.com/#en/pl/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enpt",
        "u": "http://translate.google.com/#en/pt/{{{s}}} "
    },
    {
        "d": "translate.google.com",
        "b": "ensl",
        "u": "http://translate.google.com/#en/sl/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "ensv",
        "u": "https://translate.google.com/#en/sv/{{{s}}}"
    },
    {
        "d": "entireweb.com",
        "b": "entireweb",
        "u": "http://entireweb.com/?q={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "entr",
        "u": "https://translate.google.com/#en/tr/{{{s}}} "
    },
    {
        "d": "enumquery.com",
        "b": "enum",
        "u": "http://enumquery.com/lookup?e164={{{s}}}"
    },
    {
        "d": "eune.op.gg",
        "b": "eop",
        "u": "http://eune.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "www.unixtimeconverter.io",
        "b": "epoch",
        "u": "https://www.unixtimeconverter.io//{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "es",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=xl-es&kad=es_ES&ia=about"
    },
    {
        "d": "translate.google.com",
        "b": "esen",
        "u": "http://translate.google.com/#es/en/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "esfr",
        "u": "http://translate.google.com/#es/fr/{{{s}}}"
    },
    {
        "d": "explainshell.com",
        "b": "eshell",
        "u": "https://explainshell.com/explain?cmd={{{s}}}"
    },
    {
        "d": "translate.google.hu",
        "b": "eshu",
        "u": "https://translate.google.hu/#es/hu/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "esit",
        "u": "http://translate.google.com/#es/it/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "espt",
        "u": "https://translate.google.com/#es/pt/{{{s}}}"
    },
    {
        "d": "de.excel-translator.de",
        "b": "etde",
        "u": "https://de.excel-translator.de/{{{s}}}/"
    },
    {
        "d": "en.excel-translator.de",
        "b": "eten",
        "u": "https://en.excel-translator.de/{{{s}}}/"
    },
    {
        "d": "etherscan.io",
        "b": "eth",
        "u": "http://etherscan.io/search?q={{{s}}}"
    },
    {
        "d": "www.etools.ch",
        "b": "etools",
        "u": "https://www.etools.ch/searchSubmit.do?query={{{s}}}"
    },
    {
        "d": "www.tritrans.net",
        "b": "etrans",
        "u": "http://www.tritrans.net/cgibin/translate.cgi?spraak=Engelsk&Fra={{{s}}}"
    },
    {
        "d": "www.etymonline.com",
        "b": "etym",
        "u": "https://www.etymonline.com/search?q={{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "eur2brl",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=EUR&To=BRL"
    },
    {
        "d": "www.xe.com",
        "b": "eur2cny",
        "u": "https://www.xe.com/currencyconverter/convert/?From=EUR&To=CNY&Amount={{{s}}}"
    },
    {
        "d": "www.europarl.europa.eu",
        "b": "europarl",
        "u": "http://www.europarl.europa.eu/portal/en/search?q={{{s}}}"
    },
    {
        "d": "everipedia.org",
        "b": "everi",
        "u": "https://everipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "www.evernote.com",
        "b": "evernote",
        "u": "https://www.evernote.com/Home.action#x={{{s}}}"
    },
    {
        "d": "www.everyclick.com",
        "b": "everyclick",
        "u": "http://www.everyclick.com/search?keyword={{{s}}}&filterType=&sortType=&searchArea=web&sbtn="
    },
    {
        "d": "eki.ee",
        "b": "evs",
        "u": "http://eki.ee/dict/evs/index.cgi?Q={{{s}}}"
    },
    {
        "d": "e-words.jp",
        "b": "e-words",
        "u": "http://e-words.jp/?cx=partner-pub-1175263777233757%3Axelkt7-c6j8&cof=FORID%3A10&ie=Shift_JIS&q={{{s}}}&sa=%88%EA%92v%82%B7%82%E9%97p%8C%EA%82%F0%95%5C%8E%A6&siteurl=e-words.jp%2F&ref=e-words.jp%2Fw%2FE382B9E3839AE383BCE382B9.html&ss=1193j290715j7"
    },
    {
        "d": "msxml.excite.com",
        "b": "exite",
        "u": "http://msxml.excite.com/search/web?q={{{s}}} "
    },
    {
        "d": "www.expressmojo.com",
        "b": "exmojo",
        "u": "https://www.expressmojo.com/search/?q={{{s}}}"
    },
    {
        "d": "reports.exodus-privacy.eu.org",
        "b": "exodus",
        "u": "https://reports.exodus-privacy.eu.org/reports/search/{{{s}}}"
    },
    {
        "d": "www.expressio.fr",
        "b": "expressio",
        "u": "http://www.expressio.fr/search.php?q={{{s}}}&lang="
    },
    {
        "d": "www.eatyourbooks.com",
        "b": "eyb",
        "u": "https://www.eatyourbooks.com/bookshelf?q={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "fa2en",
        "u": "https://translate.google.com/#fa/en/{{{s}}}"
    },
    {
        "d": "www.facebook.com",
        "b": "facebook",
        "u": "http://www.facebook.com/s.php?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "facephoto",
        "u": "https://www.google.com/search?q=%22{{{s}}}%22&tbm=isch&tbs=ic:color,isz:lt,itp:face,isg:to&filter=0&safe=off&pws=0&tbs=rl:0"
    },
    {
        "d": "www.google.com",
        "b": "faces",
        "u": "https://www.google.com/search?tbm=isch&tbs=itp:face&q={{{s}}}"
    },
    {
        "d": "www.fanpop.com",
        "b": "fanpop",
        "u": "http://www.fanpop.com/search?query={{{s}}}"
    },
    {
        "d": "fontawesome.com",
        "b": "fas",
        "u": "https://fontawesome.com/icons?d=gallery&q={{{s}}}"
    },
    {
        "d": "www.fass.se",
        "b": "fass",
        "u": "https://www.fass.se/m/sok/{{{s}}}/public"
    },
    {
        "d": "www.fastmail.com",
        "b": "fastmail",
        "u": "https://www.fastmail.com/help/search/?q={{{s}}}"
    },
    {
        "d": "flightaware.com",
        "b": "faw",
        "u": "http://flightaware.com/live/flight/{{{s}}}"
    },
    {
        "d": "framabee.org",
        "b": "fbee",
        "u": "https://framabee.org/?q={{{s}}} "
    },
    {
        "d": "www.facebook.com",
        "b": "fb",
        "u": "https://www.facebook.com/search.php/?q={{{s}}}"
    },
    {
        "d": "facebook.com",
        "b": "@fb",
        "u": "https://facebook.com/{{{s}}}"
    },
    {
        "d": "www.facebook.com",
        "b": "fbk",
        "u": "https://www.facebook.com/search/results/?q={{{s}}}"
    },
    {
        "d": "www.facebook.com",
        "b": "fbm",
        "u": "https://www.facebook.com/messages/search?action=search-snippet&mquery={{{s}}}"
    },
    {
        "d": "facebookcorewwwi.onion",
        "b": "fbonion",
        "u": "https://facebookcorewwwi.onion/search.php/?q={{{s}}}"
    },
    {
        "d": "www.facebook.com",
        "b": "fbp",
        "u": "https://www.facebook.com/search/results/?q={{{s}}}&type=pages"
    },
    {
        "d": "search.freecodecamp.org",
        "b": "fcode",
        "u": "https://search.freecodecamp.org/?q={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "fconj",
        "u": "http://www.wordreference.com/conj/FRverbs.aspx?v={{{s}}} "
    },
    {
        "d": "portal.fultonschools.org",
        "b": "fcs",
        "u": "http://portal.fultonschools.org/_layouts/OSSSearchResults.aspx?k={{{s}}}"
    },
    {
        "d": "www.fedex.com",
        "b": "fedex",
        "u": "https://www.fedex.com/fedextrack/?trknbr={{{s}}}"
    },
    {
        "d": "feedly.com",
        "b": "feedly",
        "u": "https://feedly.com/i/search/{{{s}}}"
    },
    {
        "d": "felleskatalogen.no",
        "b": "felleskatalogen",
        "u": "http://felleskatalogen.no/medisin/sok?sokord={{{s}}}"
    },
    {
        "d": "www.finder.fi",
        "b": "ffi",
        "u": "https://www.finder.fi/search?what={{{s}}}"
    },
    {
        "d": "www.flickr.com",
        "b": "f",
        "u": "http://www.flickr.com/search/?q={{{s}}}"
    },
    {
        "d": "www.frag-caesar.de",
        "b": "fgcs",
        "u": "http://www.frag-caesar.de/lateinwoerterbuch/{{{s}}}-uebersetzung.html"
    },
    {
        "d": "www.file.net",
        "b": "fid",
        "u": "https://www.file.net/process/{{{s}}}.html"
    },
    {
        "d": "www.finanzen.net",
        "b": "fi",
        "u": "http://www.finanzen.net/suchergebnis.asp?strSuchString={{{s}}}"
    },
    {
        "d": "forum.finf.uni-hannover.de",
        "b": "finf",
        "u": "https://forum.finf.uni-hannover.de/index.php?form=Search&q={{{s}}}"
    },
    {
        "d": "finna.fi",
        "b": "finna",
        "u": "https://finna.fi/Search/Results?lookfor={{{s}}}"
    },
    {
        "d": "fireball.de",
        "b": "fireball",
        "u": "https://fireball.de/q/{{{s}}}"
    },
    {
        "d": "addons.mozilla.org",
        "b": "firefoxaddon",
        "u": "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}"
    },
    {
        "d": "www.firmy.cz",
        "b": "firmycz",
        "u": "http://www.firmy.cz/?thru=&q={{{s}}}"
    },
    {
        "d": "www.firmy.cz",
        "b": "firmy",
        "u": "https://www.firmy.cz/?q={{{s}}}"
    },
    {
        "d": "fontsinuse.com",
        "b": "fiu",
        "u": "https://fontsinuse.com/search?terms={{{s}}}"
    },
    {
        "d": "www.flashback.org",
        "b": "flashback",
        "u": "https://www.flashback.org/sok/{{{s}}}"
    },
    {
        "d": "flathub.org",
        "b": "flat",
        "u": "https://flathub.org/apps/search/{{{s}}}"
    },
    {
        "d": "flattr.com",
        "b": "flattr",
        "u": "https://flattr.com/q/{{{s}}}"
    },
    {
        "d": "www.flexjobs.com",
        "b": "flexjobs",
        "u": "https://www.flexjobs.com/search?search={{{s}}}&Location="
    },
    {
        "d": "www.google.com",
        "b": "fl",
        "u": "http://www.google.com/search?btnI&q={{{s}}}"
    },
    {
        "d": "flightaware.com",
        "b": "flightaware",
        "u": "https://flightaware.com/live/flight/{{{s}}} "
    },
    {
        "d": "spotterlead.net",
        "b": "flight",
        "u": "https://spotterlead.net/flights/{{{s}}}"
    },
    {
        "d": "www.followthatpage.com",
        "b": "follow",
        "u": "http://www.followthatpage.com/?url={{{s}}}"
    },
    {
        "d": "www.fonecta.fi",
        "b": "fonecta",
        "u": "https://www.fonecta.fi/henkilot/haku/-/{{{s}}}/"
    },
    {
        "d": "forex-station.com",
        "b": "forexstation",
        "u": "https://forex-station.com/search.php?keywords={{{s}}}&terms=all&author=&sc=1&sf=all&sr=posts&sk=t&sd=d&st=0&ch=300&t=0&submit=Search"
    },
    {
        "d": "duck.co",
        "b": "forum",
        "u": "https://duck.co/forum/search?q={{{s}}}"
    },
    {
        "d": "foursquare.com",
        "b": "foursquare",
        "u": "https://foursquare.com/explore?q={{{s}}}"
    },
    {
        "d": "www.fanpop.com",
        "b": "fp",
        "u": "http://www.fanpop.com/search?query={{{s}}}"
    },
    {
        "d": "www.freepatentsonline.com",
        "b": "fpo",
        "u": "http://www.freepatentsonline.com/result.html?sort=relevance&srch=top&query_txt={{{s}}}&submit=&patents=on"
    },
    {
        "d": "www.flightradar24.com",
        "b": "fr24f",
        "u": "https://www.flightradar24.com/data/flights/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "fr2en",
        "u": "http://translate.google.com/#fr/en/{{{s}}}"
    },
    {
        "d": "framabee.org",
        "b": "framabee",
        "u": "https://framabee.org/?q={{{s}}} "
    },
    {
        "d": "framalibre.org",
        "b": "framal",
        "u": "https://framalibre.org/recherche-par-crit-res?keys={{{s}}}"
    },
    {
        "d": "webchat.freenode.net",
        "b": "freenode",
        "u": "http://webchat.freenode.net/?channels={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "fren",
        "u": "http://translate.google.com/#fr/en/{{{s}}}"
    },
    {
        "d": "www.frequencycheck.com",
        "b": "frequencycheck",
        "u": "https://www.frequencycheck.com/search?s={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "fres",
        "u": "http://translate.google.com/#fr/es/{{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "frge",
        "u": "http://dictionnaire.reverso.net/francais-allemand/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "frit",
        "u": "http://translate.google.com/#fr/it/{{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "frjp",
        "u": "http://dictionnaire.reverso.net/francais-japonais/{{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "frpl",
        "u": "http://dictionnaire.reverso.net/francais-polonais/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "frru",
        "u": "https://translate.google.com/#fr/ru/{{{s}}}"
    },
    {
        "d": "frutke.com",
        "b": "frutke",
        "u": "http://frutke.com/?s={{{s}}}"
    },
    {
        "d": "www.freewave.at",
        "b": "frw",
        "u": "http://www.freewave.at/?s={{{s}}}"
    },
    {
        "d": "fr.wiktionary.org",
        "b": "fr.wiktionary",
        "u": "https://fr.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "fsfe.org",
        "b": "fsfe",
        "u": "https://fsfe.org/cgi-bin/search.cgi?l=en&x=0&y=0&q={{{s}}}"
    },
    {
        "d": "wiki.foodsharing.de",
        "b": "fsh",
        "u": "https://wiki.foodsharing.de/index.php?search={{{s}}}"
    },
    {
        "d": "ft-datenbank.de",
        "b": "ft-db",
        "u": "https://ft-datenbank.de/tickets?fulltext={{{s}}}"
    },
    {
        "d": "www.fortuneo.fr",
        "b": "ftn",
        "u": "https://www.fortuneo.fr/recherche?term={{{s}}}"
    },
    {
        "d": "apollo.fintechstudios.com",
        "b": "fts",
        "u": "https://apollo.fintechstudios.com/search?searchQuery={{{s}}}"
    },
    {
        "d": "app.fullcontact.com",
        "b": "fullcontact",
        "u": "https://app.fullcontact.com/#/search/{{{s}}}"
    },
    {
        "d": "fuska.nu",
        "b": "fuskanu",
        "u": "http://fuska.nu/sok/?search={{{s}}}"
    },
    {
        "d": "futar.bkk.hu",
        "b": "futar",
        "u": "http://futar.bkk.hu/?toCoord={{{s}}}&toName={{{s}}}&toSubName={{{s}}}&layers=GSVB"
    },
    {
        "d": "google.com",
        "b": "g100en",
        "u": "http://google.com/search?q={{{s}}}&tbo=1&num=100&lr=lang_en"
    },
    {
        "d": "google.com",
        "b": "g100",
        "u": "http://google.com/search?q={{{s}}}&tbo=1&num=100"
    },
    {
        "d": "www.google.com",
        "b": "g24",
        "u": "http://www.google.com/search?q={{{s}}}&tbs=qdr:d"
    },
    {
        "d": "www.google.com",
        "b": "g2year",
        "u": "https://www.google.com/search?tbs=qdr:y2&q={{{s}}}&safe=off&ie=utf-8&oe=utf-8"
    },
    {
        "d": "www.google.com",
        "b": "g6month",
        "u": "https://www.google.com/search?tbs=qdr:m6&q={{{s}}}&safe=off&ie=utf-8&oe=utf-8"
    },
    {
        "d": "gab.ai",
        "b": "gab",
        "u": "https://gab.ai/search/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gaccess",
        "u": "http://www.google.com/cse?ie=UTF-8&cx=000183394137052953072%3Azc1orsc6mbq&q={{{s}}}t&btnG=Search"
    },
    {
        "d": "www.google.ae",
        "b": "gae",
        "u": "http://www.google.ae/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "translate.google.com",
        "b": "gaen",
        "u": "http://translate.google.com/#ga/en/{{{s}}}"
    },
    {
        "d": "www.girlsaskguys.com",
        "b": "gag",
        "u": "https://www.girlsaskguys.com/search?q={{{s}}}"
    },
    {
        "d": "gymnasium-gag.de",
        "b": "gagol",
        "u": "https://gymnasium-gag.de/?s={{{s}}}"
    },
    {
        "d": "www.google.com.au",
        "b": "ga",
        "u": "http://www.google.com.au/search?q={{{s}}}"
    },
    {
        "d": "www.vn-gaia.com",
        "b": "gaia",
        "u": "https://www.vn-gaia.com/search?SearchForm%5Bkeyword%5D={{{s}}}&SearchForm%5BlimitSpaceGuids%5D="
    },
    {
        "d": "graph.anime.plus",
        "b": "gap",
        "u": "http://graph.anime.plus/{{{s}}}"
    },
    {
        "d": "www.google.com.ar",
        "b": "gar",
        "u": "http://www.google.com.ar/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.as",
        "b": "gas",
        "u": "http://www.google.as/search?q={{{s}}}"
    },
    {
        "d": "www.maisgasolina.com",
        "b": "gasolina",
        "u": "https://www.maisgasolina.com/pesquisa/{{{s}}}/"
    },
    {
        "d": "www.google.at",
        "b": "gat",
        "u": "http://www.google.at/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.at",
        "b": "g.at",
        "u": "https://www.google.at/#q={{{s}}}"
    },
    {
        "d": "www.google.com.au",
        "b": "gau",
        "u": "http://www.google.com.au/search?&source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "mail.google.com",
        "b": "gba",
        "u": "https://mail.google.com/mail/u/{{{s}}}"
    },
    {
        "d": "www.google.be",
        "b": "gbe",
        "u": "http://www.google.be/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "en.glosbe.com",
        "b": "gbeo",
        "u": "https://en.glosbe.com/en/eo/{{{s}}}"
    },
    {
        "d": "www.google.bg",
        "b": "gbg",
        "u": "http://www.google.bg/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gbk",
        "u": "https://www.google.com/bookmarks/l#!q={{{s}}}"
    },
    {
        "d": "gigablast.com",
        "b": "gblast",
        "u": "http://gigablast.com/search?q={{{s}}} "
    },
    {
        "d": "www.google.com",
        "b": "gbm",
        "u": "https://www.google.com/bookmarks/find?q={{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "gbp2brl",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=GBP&To=BRL"
    },
    {
        "d": "www.xe.com",
        "b": "gbp2eur",
        "u": "http://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=GBP&To=EUR"
    },
    {
        "d": "www.xe.com",
        "b": "gbp2nzd",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=GBP&To=NZD"
    },
    {
        "d": "www.xe.com",
        "b": "gbp2usd",
        "u": "http://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=GBP&To=USD"
    },
    {
        "d": "www.google.com.br",
        "b": "gbr",
        "u": "http://www.google.com.br/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "gigablast.com",
        "b": "gbs",
        "u": "https://gigablast.com/search?c=main&index=search&q={{{s}}}"
    },
    {
        "d": "www.google.ca",
        "b": "gca",
        "u": "http://www.google.ca/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "calendar.google.com",
        "b": "gcal",
        "u": "https://calendar.google.com/calendar/b/0/r/search?q={{{s}}}"
    },
    {
        "d": "www.google.cat",
        "b": "gcat",
        "u": "http://www.google.cat/#q={{{s}}}"
    },
    {
        "d": "contacts.google.com",
        "b": "gc",
        "u": "https://contacts.google.com/search/{{{s}}}"
    },
    {
        "d": "www.google.ch",
        "b": "gch",
        "u": "http://www.google.ch/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.co.ck",
        "b": "gci",
        "u": "https://www.google.co.ck/search?q={{{s}}}"
    },
    {
        "d": "www.google.co.ck",
        "b": "gck",
        "u": "https://www.google.co.ck/search?q={{{s}}}"
    },
    {
        "d": "www.google.cl",
        "b": "gcl",
        "u": "http://www.google.cl/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.cn",
        "b": "gcn",
        "u": "http://www.google.cn/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "code.google.com",
        "b": "gcode",
        "u": "https://code.google.com/hosting/search?q={{{s}}}"
    },
    {
        "d": "www.google.com.co",
        "b": "gco",
        "u": "http://www.google.com.co/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "contacts.google.com",
        "b": "gcontact",
        "u": "https://contacts.google.com/search/{{{s}}}"
    },
    {
        "d": "www.google.hr",
        "b": "gcro",
        "u": "https://www.google.hr/#q={{{s}}}&*"
    },
    {
        "d": "cloudsearch.google.com",
        "b": "gcs",
        "u": "https://cloudsearch.google.com/cloudsearch/search?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gcu",
        "u": "https://www.google.com/search?q={{{s}}}&source=lnt&tbs=ctr:countryCU&cr=countryCU"
    },
    {
        "d": "www.google.com",
        "b": "gcultinst",
        "u": "https://www.google.com/culturalinstitute/browse/{{{s}}}"
    },
    {
        "d": "www.google.com.cy",
        "b": "gcy",
        "u": "https://www.google.com.cy/search?q={{{s}}}"
    },
    {
        "d": "www.google.cz",
        "b": "gcz",
        "u": "http://www.google.cz/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gday",
        "u": "http://www.google.com/search?q={{{s}}}&tbs=qdr:d"
    },
    {
        "d": "translate.google.com",
        "b": "gdeen",
        "u": "https://translate.google.com/#de/en/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gdef",
        "u": "https://www.google.com/search?hl=en&q=define+{{{s}}}"
    },
    {
        "d": "www.google.de",
        "b": "gde",
        "u": "http://www.google.de/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.de",
        "b": "g.de",
        "u": "https://www.google.de/#q={{{s}}}"
    },
    {
        "d": "developers.google.com",
        "b": "gdevs",
        "u": "https://developers.google.com/s/results/?q={{{s}}}"
    },
    {
        "d": "docs.google.com",
        "b": "gd",
        "u": "https://docs.google.com/document/u/0/?q={{{s}}}"
    },
    {
        "d": "www.google.dk",
        "b": "gdk",
        "u": "http://www.google.dk/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "ditu.amap.com",
        "b": "gdmaps",
        "u": "https://ditu.amap.com/search?query={{{s}}}"
    },
    {
        "d": "domains.google.com",
        "b": "gdomains",
        "u": "https://domains.google.com/registrar?s={{{s}}}"
    },
    {
        "d": "domains.google.com",
        "b": "gdoms",
        "u": "https://domains.google.com/registrar?s={{{s}}}"
    },
    {
        "d": "drive.google.com",
        "b": "gdrive",
        "u": "https://drive.google.com/drive/search?q={{{s}}}"
    },
    {
        "d": "www.goodsearch.com",
        "b": "gds",
        "u": "http://www.goodsearch.com/search-web?keywords={{{s}}}"
    },
    {
        "d": "docs.google.com",
        "b": "gdv",
        "u": "https://docs.google.com/viewer?url={{{s}}}"
    },
    {
        "d": "www.coingecko.com",
        "b": "gecko",
        "u": "https://www.coingecko.com/en/search/bang?query={{{s}}}"
    },
    {
        "d": "www.google.com.ec",
        "b": "gecuador",
        "u": "https://www.google.com.ec/search?safe=active&q={{{s}}} "
    },
    {
        "d": "www.google.ee",
        "b": "gee",
        "u": "http://www.google.ee/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "translate.google.com",
        "b": "geen",
        "u": "https://translate.google.com/#ge/en/{{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "gefr",
        "u": "http://dictionnaire.reverso.net/allemand-francais/{{{s}}}"
    },
    {
        "d": "google.com",
        "b": "ge",
        "u": "https://google.com/#q={{{s}}}"
    },
    {
        "d": "packages.gentoo.org",
        "b": "genpkg",
        "u": "https://packages.gentoo.org/packages/search?q={{{s}}}"
    },
    {
        "d": "iplookup.flagfox.net",
        "b": "geotool",
        "u": "https://iplookup.flagfox.net/?ip={{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "geouri",
        "u": "https://www.openstreetmap.org/search?query={{{s}}}#map=7/0.000/-60.000"
    },
    {
        "d": "www.google.es",
        "b": "ges",
        "u": "https://www.google.es/search?q={{{s}}} "
    },
    {
        "d": "www.ge-tracker.com",
        "b": "ge-t",
        "u": "https://www.ge-tracker.com/names/{{{s}}}"
    },
    {
        "d": "gethuman.com",
        "b": "gethuman",
        "u": "http://gethuman.com/phone-number/search/?q={{{s}}}"
    },
    {
        "d": "www.getlinkinfo.com",
        "b": "getlinkinfo",
        "u": "http://www.getlinkinfo.com/info?link={{{s}}}"
    },
    {
        "d": "search.gexsi.com",
        "b": "gex",
        "u": "https://search.gexsi.com/en/search/?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gfa",
        "u": "https://www.google.com/search?hl=fa&q={{{s}}}"
    },
    {
        "d": "greatfirewallofchina.org",
        "b": "gfc",
        "u": "http://greatfirewallofchina.org/index.php?siteurl={{{s}}}"
    },
    {
        "d": "finance.google.com",
        "b": "gf",
        "u": "http://finance.google.com/?q={{{s}}}&sa=N&tab=fe"
    },
    {
        "d": "www.google.fi",
        "b": "gfi",
        "u": "https://www.google.fi/search?q={{{s}}}"
    },
    {
        "d": "finance.google.com",
        "b": "gfinance",
        "u": "http://finance.google.com/?q={{{s}}}&sa=N&tab=fe"
    },
    {
        "d": "www.google.com",
        "b": "gfl",
        "u": "https://www.google.com/flights/#search;t={{{s}}}"
    },
    {
        "d": "fonts.google.com",
        "b": "gfont",
        "u": "https://fonts.google.com/?query={{{s}}}"
    },
    {
        "d": "greasyfork.org",
        "b": "gfork",
        "u": "https://greasyfork.org/en/scripts?q={{{s}}}"
    },
    {
        "d": "productforums.google.com",
        "b": "gforums",
        "u": "https://productforums.google.com/forum/#!topicsearch/{{{s}}}"
    },
    {
        "d": "www.google.fr",
        "b": "gfr",
        "u": "http://www.google.fr/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.gp",
        "b": "ggd",
        "u": "https://www.google.gp/?gws_rd=ssl#q= {{{s}}} "
    },
    {
        "d": "groups.google.com",
        "b": "gg",
        "u": "http://groups.google.com/groups/search?q={{{s}}}&qt_s=Search+Groups"
    },
    {
        "d": "www.google.com",
        "b": "g",
        "u": "https://www.google.com/search?q={{{s}}}"
    },
    {
        "d": "plus.google.com",
        "b": "g+",
        "u": "https://plus.google.com/u/0/s/{{{s}}} "
    },
    {
        "d": "www.google.gr",
        "b": "ggr",
        "u": "http://www.google.gr/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "groups.google.com",
        "b": "ggroups",
        "u": "http://groups.google.com/groups/search?q={{{s}}}&qt_s=Search+Groups"
    },
    {
        "d": "www.google.com.hk",
        "b": "ghk",
        "u": "http://www.google.com.hk/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.groenehartscholen.nl",
        "b": "ghl",
        "u": "http://www.groenehartscholen.nl/lyceum/={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "ghour",
        "u": "https://google.com/search?q={{{s}}}&tbs=qdr:h"
    },
    {
        "d": "www.google.hu",
        "b": "ghu",
        "u": "http://www.google.hu/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.gia.edu",
        "b": "gia",
        "u": "http://www.gia.edu/cs/Satellite?pagename=GST%2FDispatcher&childpagename=GIA%2FPage%2FReportCheck&c=Page&cid=1355954554547&reportno={{{s}}}"
    },
    {
        "d": "www.google.com.au",
        "b": "giau",
        "u": "https://www.google.com.au/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "gibiru.com",
        "b": "gib",
        "u": "https://gibiru.com/results.html?q={{{s}}}&cx=partner-pub-5956360965567042%3A8627692578&cof=FORID%3A11&ie=UTF-8"
    },
    {
        "d": "www.google.com",
        "b": "gic",
        "u": "https://www.google.com/search?q={{{s}}}&tbm=isch&sout=1"
    },
    {
        "d": "www.google.co.id",
        "b": "gid",
        "u": "http://www.google.co.id/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.ie",
        "b": "gie",
        "u": "http://www.google.ie/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "google.com",
        "b": "gifl",
        "u": "http://google.com/search?btnI=1&q={{{s}}}"
    },
    {
        "d": "www.gigablast.com",
        "b": "gigablast",
        "u": "http://www.gigablast.com/search?q={{{s}}}"
    },
    {
        "d": "www.gigablast.com",
        "b": "giga",
        "u": "http://www.gigablast.com/search?q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gi",
        "u": "https://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "www.google.co.il",
        "b": "gik",
        "u": "http://www.google.co.il/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.co.il",
        "b": "gil",
        "u": "https://www.google.co.il/#q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gimages",
        "u": "http://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "www.google.com",
        "b": "gimg",
        "u": "https://www.google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "google.com",
        "b": "gim",
        "u": "https://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "www.google.co.in",
        "b": "gin",
        "u": "https://www.google.co.in/search?q={{{s}}}"
    },
    {
        "d": "dearcomputer.nl",
        "b": "gir",
        "u": "http://dearcomputer.nl/gir/?q={{{s}}}&s=8&imgtype=any"
    },
    {
        "d": "www.google.com",
        "b": "gisafeoff",
        "u": "http://www.google.com/images?safe=off&q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gis",
        "u": "https://www.google.com/search?site=imghp&tbm=isch&q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gisoff",
        "u": "http://www.google.com/images?safe=off&q={{{s}}}"
    },
    {
        "d": "gis.stackexchange.com",
        "b": "gisstackexchange",
        "u": "http://gis.stackexchange.com/search?q={{{s}}} "
    },
    {
        "d": "www.google.it",
        "b": "gitl",
        "u": "http://www.google.it/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.co.uk",
        "b": "giuk",
        "u": "http://www.google.co.uk/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "www.givero.com",
        "b": "give",
        "u": "https://www.givero.com/search?q={{{s}}}"
    },
    {
        "d": "www.google.co.jp",
        "b": "gj",
        "u": "http://www.google.co.jp/search?q={{{s}}}"
    },
    {
        "d": "www.google.co.jp",
        "b": "gjp",
        "u": "http://www.google.co.jp/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.co.kr",
        "b": "gkr",
        "u": "http://www.google.co.kr/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.glassdoor.com",
        "b": "glassdoor",
        "u": "https://www.glassdoor.com/Job/jobs.htm?sc.keyword={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "glatest",
        "u": "http://www.google.com/search?q={{{s}}}&tbs=rltm:1"
    },
    {
        "d": "www.glassdoor.com",
        "b": "gld",
        "u": "https://www.glassdoor.com/Reviews/company-reviews.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword={{{s}}}+&sc.keyword={{{s}}}+&locT=&locId=&jobType="
    },
    {
        "d": "www.google.com",
        "b": "glink",
        "u": "http://www.google.com/search?as_lq={{{s}}}&hl=en&btnG=Search"
    },
    {
        "d": "www.google.lk",
        "b": "glk",
        "u": "https://www.google.lk/search?q={{{s}}}"
    },
    {
        "d": "www.gepir.de",
        "b": "gln",
        "u": "https://www.gepir.de/?search={{{s}}}"
    },
    {
        "d": "local.google.com",
        "b": "glocal",
        "u": "http://local.google.com/maps?f=q&source=s_q&geocode=&q={{{s}}}"
    },
    {
        "d": "www.interglot.com",
        "b": "glotennl",
        "u": "http://www.interglot.com/dictionary/en/nl/search?q={{{s}}}"
    },
    {
        "d": "www.google.lt",
        "b": "glt",
        "u": "http://www.google.lt/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gluck",
        "u": "http://www.google.com/search?q={{{s}}}&btnI"
    },
    {
        "d": "www.google.lu",
        "b": "glu",
        "u": "https://www.google.lu/search?q={{{s}}}"
    },
    {
        "d": "www.google.lv",
        "b": "glv",
        "u": "http://www.google.lv/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "mail.google.com",
        "b": "gma",
        "u": "https://mail.google.com/mail/u/0/#search/{{{s}}}"
    },
    {
        "d": "mail.google.com",
        "b": "gmail",
        "u": "https://mail.google.com/mail/#search/{{{s}}}"
    },
    {
        "d": "mail.google.com",
        "b": "gmailh",
        "u": "https://mail.google.com/mail/u/0/h/?s=q&q={{{s}}}&nvp_site_mail=Search%20Mail"
    },
    {
        "d": "maps.google.com",
        "b": "gmap",
        "u": "http://maps.google.com/maps?q={{{s}}}"
    },
    {
        "d": "maps.google.com",
        "b": "gmaps",
        "u": "http://maps.google.com/maps?q={{{s}}}"
    },
    {
        "d": "www.google.at",
        "b": "gmat",
        "u": "https://www.google.at/maps/search/{{{s}}}"
    },
    {
        "d": "www.google.com.au",
        "b": "gmau",
        "u": "https://www.google.com.au/maps/search/{{{s}}} "
    },
    {
        "d": "www.google.ca",
        "b": "gmca",
        "u": "https://www.google.ca/maps/?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gmc",
        "u": "https://www.google.com/maps?q={{{s}}}&output=classic"
    },
    {
        "d": "www.google.cl",
        "b": "gmcl",
        "u": "https://www.google.cl/maps/place/{{{s}}}"
    },
    {
        "d": "www.google.de",
        "b": "gmde",
        "u": "https://www.google.de/maps/place/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gmd",
        "u": "https://www.google.com/maps/dir/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gmdir",
        "u": "https://www.google.com/maps/dir//{{{s}}}"
    },
    {
        "d": "www.google.fr",
        "b": "gmfr",
        "u": "https://www.google.fr/maps/search/{{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gm",
        "u": "https://google.com/maps/place/{{{s}}}"
    },
    {
        "d": "www.google.co.il",
        "b": "gmil",
        "u": "https://www.google.co.il/maps/search/{{{s}}}/?hl=iw"
    },
    {
        "d": "www.google.it",
        "b": "gmit",
        "u": "https://www.google.it/maps/place/{{{s}}}"
    },
    {
        "d": "www.google.co.jp",
        "b": "gmjp",
        "u": "https://www.google.co.jp/maps/place/{{{s}}}"
    },
    {
        "d": "www.google.de",
        "b": "gmnl",
        "u": "https://www.google.de/maps/place/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gmob",
        "u": "http://www.google.com/gwt/x?u={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gmonth",
        "u": "http://www.google.com/search?q={{{s}}}&tbs=qdr:m"
    },
    {
        "d": "www.google.si",
        "b": "gmsi",
        "u": "https://www.google.si/maps/search/{{{s}}}/"
    },
    {
        "d": "www.google.com.tw",
        "b": "gmtw",
        "u": "https://www.google.com.tw/maps?hl=zh-TW&q={{{s}}}"
    },
    {
        "d": "music.google.com",
        "b": "gmusic",
        "u": "http://music.google.com/music/listen?#{{{s}}}_sr"
    },
    {
        "d": "www.google.com.mx",
        "b": "gmx",
        "u": "https://www.google.com.mx/#q={{{s}}}"
    },
    {
        "d": "www.google.com.my",
        "b": "gmy",
        "u": "http://www.google.com.my/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "r.gnavi.co.jp",
        "b": "gnavi",
        "u": "https://r.gnavi.co.jp/area/jp/rs/?fwr={{{s}}}"
    },
    {
        "d": "www.bibleserver.com",
        "b": "gnb",
        "u": "https://www.bibleserver.com/search/GNB/{{{s}}}/1"
    },
    {
        "d": "www.google.com",
        "b": "gncr",
        "u": "https://www.google.com/search?gws_rd=cr&gl=us&hl=en&num=20&q={{{s}}}"
    },
    {
        "d": "www.google.fr",
        "b": "gnfr",
        "u": "http://www.google.fr/search?aq=f&hl=fr&gl=fr&tbm=nws&btnmeta_news_search=1&q={{{s}}} "
    },
    {
        "d": "www.google.nl",
        "b": "gnl",
        "u": "http://www.google.nl/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gnm",
        "u": "http://www.google.com/m/search?site=news&q={{{s}}}"
    },
    {
        "d": "www.google.no",
        "b": "gno",
        "u": "http://www.google.no/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.co.nz",
        "b": "gnz",
        "u": "http://www.google.co.nz/search?&source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "dictionary.goo.ne.jp",
        "b": "gode",
        "u": "https://dictionary.goo.ne.jp/word/en/{{{s}}}/"
    },
    {
        "d": "dictionary.goo.ne.jp",
        "b": "godj",
        "u": "https://dictionary.goo.ne.jp/srch/jn/{{{s}}}/m1u/"
    },
    {
        "d": "dictionary.goo.ne.jp",
        "b": "gods",
        "u": "https://dictionary.goo.ne.jp/thsrs/3913/meaning/m1u/{{{s}}}/"
    },
    {
        "d": "www.gofundme.com",
        "b": "gofundme",
        "u": "http://www.gofundme.com/mvc.php?route=search&term={{{s}}}"
    },
    {
        "d": "www.goodgopher.com",
        "b": "gogo",
        "u": "http://www.goodgopher.com/SearchResults.asp?query={{{s}}}&pr=GG"
    },
    {
        "d": "www.goldenline.pl",
        "b": "goldenline",
        "u": "http://www.goldenline.pl/szukaj/?q={{{s}}}"
    },
    {
        "d": "goodgopher.com",
        "b": "goodg",
        "u": "http://goodgopher.com/SearchResults.asp?query={{{s}}}&pr=GG"
    },
    {
        "d": "www.goodsearch.com",
        "b": "goodsearch",
        "u": "http://www.goodsearch.com/search-web?keywords={{{s}}}"
    },
    {
        "d": "www.google.be",
        "b": "googlebe",
        "u": "https://www.google.be/#q={{{s}}}"
    },
    {
        "d": "www.google.ch",
        "b": "googlech",
        "u": "https://www.google.ch/search?q={{{s}}}"
    },
    {
        "d": "fonts.google.com",
        "b": "googlefonts",
        "u": "https://fonts.google.com/?query={{{s}}}"
    },
    {
        "d": "www.google.fr",
        "b": "googlefr",
        "u": "https://www.google.fr/#q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "google",
        "u": "https://www.google.com/search?q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "googleimages",
        "u": "http://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "www.google.co.in",
        "b": "googlein",
        "u": "https://www.google.co.in/search?q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "googleit",
        "u": "https://google.com/search?hl=it&q={{{s}}}"
    },
    {
        "d": "www.google.co.jp",
        "b": "googlejp",
        "u": "https://www.google.co.jp/search?q={{{s}}}"
    },
    {
        "d": "www.google.co.kr",
        "b": "google.kr",
        "u": "https://www.google.co.kr/?gws_rd=cr&ei=GEnlVfT8BMOJuQT8tLPYDg={{{s}}}"
    },
    {
        "d": "maps.google.com",
        "b": "googlemap",
        "u": "http://maps.google.com/maps?q={{{s}}}"
    },
    {
        "d": "maps.google.com",
        "b": "googlemaps",
        "u": "http://maps.google.com/maps?q={{{s}}}"
    },
    {
        "d": "www.google.com.au",
        "b": "googleoz",
        "u": "https://www.google.com.au/#q={{{s}}}"
    },
    {
        "d": "www.google.pl",
        "b": "googlepl",
        "u": "https://www.google.pl/#q={{{s}}}"
    },
    {
        "d": "www.google.pt",
        "b": "googlept",
        "u": "https://www.google.pt/search?hl=pt_pt&q={{{s}}}"
    },
    {
        "d": "google.se",
        "b": "googlese",
        "u": "http://google.se/?q={{{s}}}"
    },
    {
        "d": "www.google.com.sv",
        "b": "googlesv",
        "u": "https://www.google.com.sv/#q={{{s}}}"
    },
    {
        "d": "www.google.co.uk",
        "b": "googleuk",
        "u": "http://www.google.co.uk/search?&source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "search.goo.ne.jp",
        "b": "goo",
        "u": "http://search.goo.ne.jp/web.jsp?MT={{{s}}}&IE=UTF-8&OE=UTF-8"
    },
    {
        "d": "www.google.com",
        "b": "goog",
        "u": "http://www.google.com/?q={{{s}}}"
    },
    {
        "d": "dictionary.goo.ne.jp",
        "b": "gookokugo",
        "u": "http://dictionary.goo.ne.jp/srch/jn/{{{s}}} /m0u/"
    },
    {
        "d": "goosh.org",
        "b": "goosh",
        "u": "http://goosh.org/#{{{s}}}"
    },
    {
        "d": "gopher.floodgap.com",
        "b": "gopher",
        "u": "http://gopher.floodgap.com/gopher/gw?ss=gopher%3A%2F%2Fgopher.floodgap.com%3A70%2F7%2Fv2%2Fvs&sq={{{s}}}"
    },
    {
        "d": "www.google.com.sv",
        "b": "gosv",
        "u": "https://www.google.com.sv/#q={{{s}}}"
    },
    {
        "d": "gothere.sg",
        "b": "gothere",
        "u": "https://gothere.sg/maps#q:{{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "gpa",
        "u": "https://play.google.com/store/search?q={{{s}}}&c=apps"
    },
    {
        "d": "www.google.com",
        "b": "gpat",
        "u": "http://www.google.com/patents?q={{{s}}}&btnG=Search+Patents"
    },
    {
        "d": "www.google.com.pe",
        "b": "gpe",
        "u": "http://www.google.com.pe/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "http-keys.gnupg.net",
        "b": "gpg",
        "u": "http://http-keys.gnupg.net/pks/lookup?op=vindex&search={{{s}}}"
    },
    {
        "d": "www.google.com.ph",
        "b": "gph",
        "u": "https://www.google.com.ph/search?hl=en&q={{{s}}}&tbs=ctr:countryPH&cr=countryPH "
    },
    {
        "d": "play.google.com",
        "b": "gplay",
        "u": "https://play.google.com/store/search?q={{{s}}} "
    },
    {
        "d": "www.google.pl",
        "b": "gpl",
        "u": "http://www.google.pl/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "plus.google.com",
        "b": "gplus",
        "u": "https://plus.google.com/s/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gplusp",
        "u": "http://www.google.com/search?tbs=prfl:e&q={{{s}}}"
    },
    {
        "d": "www.google.pt",
        "b": "gpt",
        "u": "https://www.google.pt/search?q={{{s}}}"
    },
    {
        "d": "thegradcafe.com",
        "b": "gradcafe",
        "u": "http://thegradcafe.com/survey/index.php?q={{{s}}}"
    },
    {
        "d": "graphemica.com",
        "b": "graphemica",
        "u": "http://graphemica.com/search?q={{{s}}}"
    },
    {
        "d": "graphhopper.com",
        "b": "graphhopper",
        "u": "https://graphhopper.com/maps/?point={{{s}}}&point={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "greddit",
        "u": "https://google.com/search?q=site%3Areddit.com+{{{s}}}"
    },
    {
        "d": "www.google.ro",
        "b": "gro",
        "u": "http://www.google.ro/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.de",
        "b": "groute",
        "u": "https://www.google.de/maps/dir/{{{s}}}"
    },
    {
        "d": "www.google.rs",
        "b": "grs",
        "u": "https://www.google.rs/search?q={{{s}}}"
    },
    {
        "d": "google.ru",
        "b": "gru",
        "u": "https://google.ru/search?hl=ru&q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gsafe",
        "u": "https://www.google.com/search?hl=all&safe=on&pws=0&q={{{s}}}"
    },
    {
        "d": "scholar.google.com",
        "b": "gsc",
        "u": "http://scholar.google.com/scholar?q={{{s}}}&btnG=Search&as_sdt=800000000001&as_sdtp=on"
    },
    {
        "d": "scholar.google.com",
        "b": "gscholar",
        "u": "http://scholar.google.com/scholar?q={{{s}}}&btnG=Search&as_sdt=800000000001&as_sdtp=on"
    },
    {
        "d": "www.google.se",
        "b": "gse",
        "u": "http://www.google.se/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com.sg",
        "b": "gsg",
        "u": "http://www.google.com.sg/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gs",
        "u": "http://www.google.com/products?q={{{s}}}&sa=N&tab=pf"
    },
    {
        "d": "docs.google.com",
        "b": "gsheet",
        "u": "https://docs.google.com/spreadsheets/u/0/?q={{{s}}}"
    },
    {
        "d": "docs.google.com",
        "b": "gsheets",
        "u": "https://docs.google.com/spreadsheets/u/0/?q={{{s}}}"
    },
    {
        "d": "docs.google.com",
        "b": "gsh",
        "u": "https://docs.google.com/spreadsheets/u/0/?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gshopping",
        "u": "https://www.google.com/products?q={{{s}}}&sa=N&tab=pf"
    },
    {
        "d": "www.google.si",
        "b": "gsi",
        "u": "https://www.google.si/search?q={{{s}}}"
    },
    {
        "d": "www.google.sk",
        "b": "gsk",
        "u": "http://www.google.sk/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com.sl",
        "b": "gsl",
        "u": "http://www.google.com.sl/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "slides.google.com",
        "b": "gslides",
        "u": "https://slides.google.com/presentation/u/0/?q={{{s}}}"
    },
    {
        "d": "docs.google.com",
        "b": "gspreadsheets",
        "u": "https://docs.google.com/spreadsheets/u/0/?q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gssl",
        "u": "https://google.com/search?q={{{s}}}"
    },
    {
        "d": "support.google.com",
        "b": "gsupport",
        "u": "https://support.google.com/search?q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gsv",
        "u": "https://google.com/search?hl=sv&q={{{s}}}"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "gtabs",
        "u": "http://www.ultimate-guitar.com/search.php?search_type=title&value={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtcz",
        "u": "https://translate.google.com/#auto/cs/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtenga",
        "u": "https://translate.google.com/#en/ga/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtenit",
        "u": "https://translate.google.com/#en/it/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gt",
        "u": "https://translate.google.com/#auto/en/{{{s}}}"
    },
    {
        "d": "www.google.co.th",
        "b": "gth",
        "u": "http://www.google.co.th/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.gepir.de",
        "b": "gtin",
        "u": "https://www.gepir.de/?search={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtiten",
        "u": "https://translate.google.com/#it/en/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtjp",
        "u": "http://translate.google.com/#auto/ja/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtkr",
        "u": "http://translate.google.com/#auto/ko/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtlanl",
        "u": "https://translate.google.com/#la/nl/{{{s}}}"
    },
    {
        "d": "www.google.tn",
        "b": "gtn",
        "u": "https://www.google.tn/search?q={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gt-nl-du",
        "u": "https://translate.google.com/m/translate#nl/de/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "gtrad",
        "u": "http://translate.google.com/#auto/fr/{{{s}}}"
    },
    {
        "d": "www.google.com.tr",
        "b": "gtr",
        "u": "http://www.google.com.tr/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "translate.google.com",
        "b": "gtsp",
        "u": "https://translate.google.com/#en/es/{{{s}}}"
    },
    {
        "d": "translate.google.com.tw",
        "b": "gttw",
        "u": "https://translate.google.com.tw/#auto/zh-TW/{{{s}}}"
    },
    {
        "d": "www.google.com.tw",
        "b": "gtw",
        "u": "http://www.google.com.tw/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "translate.google.com",
        "b": "gtzh-TW",
        "u": "https://translate.google.com/#auto/zh-TW/{{{s}}}"
    },
    {
        "d": "www.google.com.ua",
        "b": "gua",
        "u": "http://www.google.com.ua/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.guidestar.org",
        "b": "guidestar",
        "u": "https://www.guidestar.org/search?q={{{s}}}"
    },
    {
        "d": "www.google.co.uk",
        "b": "g.uk",
        "u": "https://www.google.co.uk/#q={{{s}}}"
    },
    {
        "d": "www.google.co.uk",
        "b": "guk",
        "u": "https://www.google.co.uk/search?q={{{s}}}"
    },
    {
        "d": "www.eniro.se",
        "b": "gulasidorna",
        "u": "http://www.eniro.se/query?what=all&search_word={{{s}}}"
    },
    {
        "d": "www.gulesider.no",
        "b": "gulesider",
        "u": "https://www.gulesider.no/?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gus",
        "u": "http://www.google.com/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.gussmark.at",
        "b": "gussmark",
        "u": "https://www.gussmark.at/_/search?query={{{s}}}"
    },
    {
        "d": "www.gutscheine.de",
        "b": "gutschein",
        "u": "http://www.gutscheine.de/suche?search={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gv100en",
        "u": "http://google.com/search?q={{{s}}}&tbo=1&num=100&tbs=li:1&lr=lang_en"
    },
    {
        "d": "google.com",
        "b": "gv100",
        "u": "http://google.com/search?q={{{s}}}&tbo=1&num=100&tbs=li:1"
    },
    {
        "d": "www.google.com.au",
        "b": "gvau",
        "u": "https://www.google.com.au/search?tbm=vid&q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gvb",
        "u": "https://google.com/search?&tbs=li:1&q={{{s}}}"
    },
    {
        "d": "www.google.co.ve",
        "b": "gve",
        "u": "http://www.google.co.ve/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gv",
        "u": "https://www.google.com/search?tbm=vid&q={{{s}}}"
    },
    {
        "d": "docs.google.com",
        "b": "gviewer",
        "u": "http://docs.google.com/viewer?url={{{s}}}"
    },
    {
        "d": "docs.google.com",
        "b": "gview",
        "u": "http://docs.google.com/viewer?url={{{s}}}"
    },
    {
        "d": "www.google.com.vn",
        "b": "gvn",
        "u": "http://www.google.com.vn/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gvoice",
        "u": "https://www.google.com/voice#search/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gweek",
        "u": "http://www.google.com/search?q={{{s}}}&tbs=qdr:w"
    },
    {
        "d": "www.google.de",
        "b": "gwpde",
        "u": "http://www.google.de/search?ie=UTF-8&sourceid=navclient&gfns=1&q=site:de.wikipedia.org+{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gwp",
        "u": "http://www.google.com/search?q={{{s}}}%20site:wikipedia.org"
    },
    {
        "d": "chrome.google.com",
        "b": "gws",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}?_category=extensions"
    },
    {
        "d": "www.ghanawebsolutions.com",
        "b": "gwsonline",
        "u": "https://www.ghanawebsolutions.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.ghanawebsolutions.com",
        "b": "gwsonlinegh",
        "u": "https://www.ghanawebsolutions.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gyear",
        "u": "http://www.google.com/search?q={{{s}}}&tbs=qdr:y"
    },
    {
        "d": "google.com",
        "b": "gy",
        "u": "https://google.com/search?q={{{s}}} &tbs=qdr:y"
    },
    {
        "d": "www.gyakorikerdesek.hu",
        "b": "gyk",
        "u": "http://www.gyakorikerdesek.hu/kereses.php?keres={{{s}}}"
    },
    {
        "d": "www.genyoutube.net",
        "b": "gyt",
        "u": "https://www.genyoutube.net/search.php?q={{{s}}}"
    },
    {
        "d": "www.google.co.za",
        "b": "gza",
        "u": "http://www.google.co.za/search?source=hp&q={{{s}}}&meta=&aq=f&aqi=g10&aql=&oq=&gs_rfai="
    },
    {
        "d": "www.google.com",
        "b": "gzc",
        "u": "https://www.google.com/search?q={{{s}}}&lr=lang_zh-CN"
    },
    {
        "d": "duckduckgo.com",
        "b": "h2m",
        "u": "https://duckduckgo.com/?q={{{s}}}&sites=hard2mano.com"
    },
    {
        "d": "hn.algolia.com",
        "b": "hackernews",
        "u": "http://hn.algolia.com/#!/all/forever/0/{{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "hashtag",
        "u": "https://twitter.com/search?q=%23{{{s}}}"
    },
    {
        "d": "b.hatena.ne.jp",
        "b": "hatebu",
        "u": "http://b.hatena.ne.jp/search/text?q={{{s}}}"
    },
    {
        "d": "hdyc.neis-one.org",
        "b": "hdyc",
        "u": "http://hdyc.neis-one.org/?{{{s}}}"
    },
    {
        "d": "filippo.io",
        "b": "heartbleed",
        "u": "http://filippo.io/Heartbleed/#{{{s}}}"
    },
    {
        "d": "haku.helmet.fi",
        "b": "helmet",
        "u": "http://haku.helmet.fi/iii/encore/search/C__S{{{s}}}"
    },
    {
        "d": "help.duckduckgo.com",
        "b": "help",
        "u": "https://help.duckduckgo.com/search?q={{{s}}}"
    },
    {
        "d": "wego.here.com",
        "b": "here",
        "u": "https://wego.here.com/search/{{{s}}}"
    },
    {
        "d": "www.myhermes.de",
        "b": "hermes",
        "u": "https://www.myhermes.de/empfangen/sendungsverfolgung/sendungsinformation/#{{{s}}}"
    },
    {
        "d": "www.herold.at",
        "b": "herold",
        "u": "http://www.herold.at/telefonbuch/{{{s}}}/"
    },
    {
        "d": "www.herold.at",
        "b": "hgs",
        "u": "https://www.herold.at/gelbe-seiten/was_{{{s}}}/"
    },
    {
        "d": "hi5.com",
        "b": "hi5",
        "u": "http://hi5.com/friend/processHeaderNameSearch.do?searchText={{{s}}}"
    },
    {
        "d": "haveibeenpwned.com",
        "b": "hibp",
        "u": "https://haveibeenpwned.com/account/{{{s}}}"
    },
    {
        "d": "hwikis25cffertqe.onion",
        "b": "hidden",
        "u": "http://hwikis25cffertqe.onion/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "www.hilux4x4.co.za",
        "b": "hilux4x4",
        "u": "http://www.hilux4x4.co.za/views/search.php?keywords={{{s}}}&terms=all&author=&sc=1&sf=all&sr=posts&sk=t&sd=d&st=0&ch=300&t=0&submit=Search"
    },
    {
        "d": "historio.us",
        "b": "historious",
        "u": "http://historio.us/search/?q={{{s}}}"
    },
    {
        "d": "www.hitta.se",
        "b": "hitta",
        "u": "https://www.hitta.se/sök?vad={{{s}}}"
    },
    {
        "d": "wego.here.com",
        "b": "hm",
        "u": "https://wego.here.com/search/{{{s}}}?"
    },
    {
        "d": "help.openstreetmap.org",
        "b": "hosm",
        "u": "https://help.openstreetmap.org/search/?q={{{s}}}"
    },
    {
        "d": "www.hotbot.com",
        "b": "hotbot",
        "u": "http://www.hotbot.com/search/web?q={{{s}}}"
    },
    {
        "d": "soblex.de",
        "b": "hsb",
        "u": "http://soblex.de/?p_w={{{s}}}&cmd=search_soblex"
    },
    {
        "d": "www.herold.at",
        "b": "htel",
        "u": "https://www.herold.at/telefonbuch/telefon_{{{s}}}/"
    },
    {
        "d": "duckduckgo.com",
        "b": "html",
        "u": "https://duckduckgo.com/html/?q={{{s}}}"
    },
    {
        "d": "www.htw-berlin.de",
        "b": "htwb",
        "u": "https://www.htw-berlin.de/suche/?domain=www.htw-berlin.de&query={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "hude",
        "u": "http://translate.google.com/#hu/de/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "huen",
        "u": "http://translate.google.com/#hu/en/{{{s}}}"
    },
    {
        "d": "translate.google.hu",
        "b": "hues",
        "u": "https://translate.google.hu/#hu/es/{{{s}}}"
    },
    {
        "d": "healthunlocked.com",
        "b": "hu",
        "u": "https://healthunlocked.com/search/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "huit",
        "u": "http://translate.google.com/#hu/it/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "husr",
        "u": "https://translate.google.com/#hu/sr/{{{s}}} "
    },
    {
        "d": "geofox.hvv.de",
        "b": "hvv",
        "u": "https://geofox.hvv.de/jsf/home.seam?destination={{{s}}}"
    },
    {
        "d": "howto9ja.com",
        "b": "hw2",
        "u": "https://howto9ja.com/?s={{{s}}}"
    },
    {
        "d": "maps.google.com",
        "b": "hybrid",
        "u": "https://maps.google.com/maps?t=h&q={{{s}}}"
    },
    {
        "d": "via.hypothes.is",
        "b": "hy",
        "u": "https://via.hypothes.is/{{{s}}}"
    },
    {
        "d": "www.hyphenation24.com",
        "b": "hyphen",
        "u": "https://www.hyphenation24.com/word/{{{s}}}/"
    },
    {
        "d": "www.hyves.nl",
        "b": "hyves",
        "u": "http://www.hyves.nl/search/hyver/?searchterms={{{s}}}"
    },
    {
        "d": "iacac.aero",
        "b": "iacac",
        "u": "https://iacac.aero/?s={{{s}}}"
    },
    {
        "d": "ialoc.ro",
        "b": "ialoc",
        "u": "https://ialoc.ro/restaurante-bucuresti?search={{{s}}}"
    },
    {
        "d": "airportcodes.aero",
        "b": "iata",
        "u": "http://airportcodes.aero/{{{s}}}"
    },
    {
        "d": "www.google.ca",
        "b": "ica",
        "u": "https://www.google.ca/imghp?{{{s}}}"
    },
    {
        "d": "www.icann.org",
        "b": "icann",
        "u": "https://www.icann.org/search/#!/?searchText={{{s}}}"
    },
    {
        "d": "www.ica.se",
        "b": "icarecept",
        "u": "https://www.ica.se/receptsok/#:search={{{s}}}"
    },
    {
        "d": "www.iciba.com",
        "b": "iciba",
        "u": "http://www.iciba.com/{{{s}}}"
    },
    {
        "d": "www.iconarchive.com",
        "b": "iconarchivecc",
        "u": "http://www.iconarchive.com/search?q={{{s}}}&license=commercialfree"
    },
    {
        "d": "www.iconarchive.com",
        "b": "iconarchive",
        "u": "http://www.iconarchive.com/tag/{{{s}}}"
    },
    {
        "d": "identi.ca",
        "b": "identica",
        "u": "http://identi.ca/search/people?q={{{s}}}&search=Search"
    },
    {
        "d": "docs.idfy.io",
        "b": "idfy",
        "u": "https://docs.idfy.io/?q={{{s}}}"
    },
    {
        "d": "www.thefreedictionary.com",
        "b": "idioms",
        "u": "http://www.thefreedictionary.com/{{{s}}} "
    },
    {
        "d": "jizdnirady.idnes.cz",
        "b": "idos",
        "u": "https://jizdnirady.idnes.cz/vlakyautobusymhdvse/spojeni/?f={{{s}}}&t={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "i",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "duckduckgo.com",
        "b": "ie",
        "u": "https://duckduckgo.com/?q=site%3Aie+{{{s}}}"
    },
    {
        "d": "industriaenlaweb.com.ar",
        "b": "ielw",
        "u": "https://industriaenlaweb.com.ar/buscador?name={{{s}}}"
    },
    {
        "d": "ifttt.com",
        "b": "ifttt",
        "u": "https://ifttt.com/search/query/{{{s}}}"
    },
    {
        "d": "ifunny.co",
        "b": "ifunny",
        "u": "https://ifunny.co/search/memes?q={{{s}}}"
    },
    {
        "d": "www.indiegogo.com",
        "b": "igg",
        "u": "https://www.indiegogo.com/explore?q={{{s}}}"
    },
    {
        "d": "www.instagram.com",
        "b": "ig",
        "u": "https://www.instagram.com/explore/tags/{{{s}}}/"
    },
    {
        "d": "www.instagram.com",
        "b": "igu",
        "u": "https://www.instagram.com/{{{s}}}"
    },
    {
        "d": "www.isitdownrightnow.com",
        "b": "iidrn",
        "u": "http://www.isitdownrightnow.com/{{{s}}}.html"
    },
    {
        "d": "duckduckgo.com",
        "b": "il",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images&iaf=size%3Aimagesize-large"
    },
    {
        "d": "il.ink",
        "b": "ilink",
        "u": "https://il.ink/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "image",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "duckduckgo.com",
        "b": "images",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "imageshack.us",
        "b": "imageshack",
        "u": "http://imageshack.us/photos/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "img",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "imgops.com",
        "b": "imgops",
        "u": "https://imgops.com/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "imgs",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "imgur.com",
        "b": "imgurul",
        "u": "http://imgur.com/api/upload/?url={{{s}}}"
    },
    {
        "d": "inbox.google.com",
        "b": "inbox",
        "u": "https://inbox.google.com/search/{{{s}}}"
    },
    {
        "d": "inci.sozlukspot.com",
        "b": "inci",
        "u": "http://inci.sozlukspot.com/w/{{{s}}}"
    },
    {
        "d": "www.indeed.com",
        "b": "indeed",
        "u": "http://www.indeed.com/jobs?q={{{s}}}"
    },
    {
        "d": "indieweb.org",
        "b": "indieweb",
        "u": "http://indieweb.org/wiki/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.infopedia.pt",
        "b": "infopedia",
        "u": "http://www.infopedia.pt/dicionarios/lingua-portuguesa/{{{s}}}"
    },
    {
        "d": "websearch.rakuten.co.jp",
        "b": "infoseek",
        "u": "http://websearch.rakuten.co.jp/Web?qt={{{s}}}"
    },
    {
        "d": "www.ing.de",
        "b": "ing",
        "u": "https://www.ing.de/suche/?query={{{s}}}"
    },
    {
        "d": "www.innovativity.org",
        "b": "innooo",
        "u": "http://www.innovativity.org/moteur-de-recherche-innooo.php?typerecherche=&item={{{s}}}"
    },
    {
        "d": "www.inoreader.com",
        "b": "ino",
        "u": "http://www.inoreader.com/search/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "inp",
        "u": "https://duckduckgo.com/?q=-site%3Apinterest.com+{{{s}}}&iar=images&iax=images&ia=images"
    },
    {
        "d": "inpost.pl",
        "b": "inpost",
        "u": "https://inpost.pl/pl/pomoc/znajdz-przesylke?parcel={{{s}}}"
    },
    {
        "d": "insider.in",
        "b": "insider",
        "u": "https://insider.in/search?q={{{s}}}"
    },
    {
        "d": "www.instructables.com",
        "b": "ins",
        "u": "http://www.instructables.com/howto/{{{s}}}"
    },
    {
        "d": "www.instagram.com",
        "b": "insta",
        "u": "https://www.instagram.com/explore/tags/{{{s}}}"
    },
    {
        "d": "www.instructables.com",
        "b": "instructables",
        "u": "http://www.instructables.com/howto/{{{s}}}"
    },
    {
        "d": "www.investing.com",
        "b": "investing",
        "u": "https://www.investing.com/search/?q={{{s}}}"
    },
    {
        "d": "ip-api.com",
        "b": "ipapi",
        "u": "http://ip-api.com/#{{{s}}}"
    },
    {
        "d": "tracking.i-parcel.com",
        "b": "iparcel",
        "u": "https://tracking.i-parcel.com/secure/track.aspx?track={{{s}}}"
    },
    {
        "d": "ipfs.io",
        "b": "ipfs",
        "u": "https://ipfs.io/ipfs/{{{s}}}"
    },
    {
        "d": "ipfs.io",
        "b": "ipns",
        "u": "https://ipfs.io/ipns/{{{s}}}"
    },
    {
        "d": "www.ip-tracker.org",
        "b": "iptracker",
        "u": "http://www.ip-tracker.org/locator/ip-lookup.php?ip={{{s}}} "
    },
    {
        "d": "www.ipvoid.com",
        "b": "ipvoid",
        "u": "http://www.ipvoid.com/scan/{{{s}}}"
    },
    {
        "d": "irc-galleria.net",
        "b": "irc-galleria",
        "u": "https://irc-galleria.net/users/search?username={{{s}}} "
    },
    {
        "d": "irc.netsplit.de",
        "b": "irc",
        "u": "http://irc.netsplit.de/channels/?chat={{{s}}}"
    },
    {
        "d": "www.imaging-resource.com",
        "b": "ires",
        "u": "http://www.imaging-resource.com/search.html?q={{{s}}}"
    },
    {
        "d": "ilmainensanakirja.fi",
        "b": "is",
        "u": "http://ilmainensanakirja.fi/sanakirja/{{{s}}}?"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "isitdown",
        "u": "https://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "isitup.org",
        "b": "isitup",
        "u": "https://isitup.org/{{{s}}}"
    },
    {
        "d": "isni.oclc.org",
        "b": "isni",
        "u": "https://isni.oclc.org/xslt/CMD?ACT=SRCH&IKT=8006&TRM={{{s}}}"
    },
    {
        "d": "www.downforeveryoneorjustme.com",
        "b": "isoffline",
        "u": "http://www.downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "www.downforeveryoneorjustme.com",
        "b": "isonline",
        "u": "http://www.downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "isup",
        "u": "https://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "www.instantstreetview.com",
        "b": "isw",
        "u": "https://www.instantstreetview.com/s/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "it",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=it-it"
    },
    {
        "d": "www.itella.fi",
        "b": "itella",
        "u": "http://www.itella.fi/itemtracking/itella/search_by_shipment_id?ShipmentId={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "iten",
        "u": "http://translate.google.com/#it/en/{{{s}}} "
    },
    {
        "d": "translate.google.com",
        "b": "ites",
        "u": "http://translate.google.com/#it/es/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "ithu",
        "u": "http://translate.google.com/#it/hu/{{{s}}}"
    },
    {
        "d": "www.its-mo.com",
        "b": "its",
        "u": "https://www.its-mo.com/search/freeword/{{{s}}}"
    },
    {
        "d": "www.italian-verbs.com",
        "b": "itverb",
        "u": "http://www.italian-verbs.com/italian-verbs/conjugation.php?verbo={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "ja2en",
        "u": "https://translate.google.com/#ja/en/{{{s}}}"
    },
    {
        "d": "ja.is",
        "b": "já",
        "u": "http://ja.is/?q={{{s}}}"
    },
    {
        "d": "www.jamf.com",
        "b": "jamf",
        "u": "https://www.jamf.com/jamf-nation/search?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "jargon",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Acatb.org+inurl%3Ajargon"
    },
    {
        "d": "jisho.org",
        "b": "jisho",
        "u": "http://jisho.org/search/{{{s}}}"
    },
    {
        "d": "www.jobintree.com",
        "b": "jit",
        "u": "http://www.jobintree.com/emploi?keywords={{{s}}}"
    },
    {
        "d": "jivesearch.com",
        "b": "jive",
        "u": "https://jivesearch.com/?q={{{s}}}"
    },
    {
        "d": "www.jouwictvacature.nl",
        "b": "jiv",
        "u": "https://www.jouwictvacature.nl/vacatures?s={{{s}}}"
    },
    {
        "d": "www.jemepropose.com",
        "b": "jmp",
        "u": "http://www.jemepropose.com/annonces?keywords={{{s}}}"
    },
    {
        "d": "us.job2u.org",
        "b": "job2u",
        "u": "https://us.job2u.org/?s={{{s}}}"
    },
    {
        "d": "job.am",
        "b": "job",
        "u": "https://job.am/hy/jobs?q={{{s}}}"
    },
    {
        "d": "www.jobs.bg",
        "b": "jobsbg",
        "u": "https://www.jobs.bg/front_job_search.php?zone_id=0&distance=0&location_sid=0&all_categories=0&all_type=0&all_position_level=1&all_company_type=1&keyword={{{s}}}&last=0"
    },
    {
        "d": "www.indeed.ca",
        "b": "jobsca",
        "u": "http://www.indeed.ca/jobs?q={{{s}}}"
    },
    {
        "d": "englishjobs.de",
        "b": "jobsde",
        "u": "https://englishjobs.de/search?q={{{s}}}"
    },
    {
        "d": "www.indeed.com",
        "b": "jobs",
        "u": "http://www.indeed.com/jobs?q={{{s}}}"
    },
    {
        "d": "www.jobillico.com",
        "b": "jobsmtl",
        "u": "https://www.jobillico.com/search-jobs?skwd={{{s}}}&scty=Montr%C3%A9al%2C%20QC&icty=6185&ipc=0&sil=&sjdpl=&sdl=&imc1=0&imc2=0&flat=45.509828&flng=-73.6715&mfil=byCity&ipg=1&clr=1"
    },
    {
        "d": "together.jolla.com",
        "b": "jolla",
        "u": "https://together.jolla.com/questions/scope:all/sort:activity-desc/page:1/query:{{{s}}}/"
    },
    {
        "d": "www.joofficial.com",
        "b": "joofficial",
        "u": "http://www.joofficial.com/website/search?query={{{s}}} "
    },
    {
        "d": "www.jorudan.co.jp",
        "b": "jorudan",
        "u": "https://www.jorudan.co.jp/jt/cgi/qsearch/qsearch.cgi?s={{{s}}}"
    },
    {
        "d": "www.japandict.com",
        "b": "jpd",
        "u": "https://www.japandict.com/?s={{{s}}}"
    },
    {
        "d": "www.buycarplate.com",
        "b": "jpj",
        "u": "https://www.buycarplate.com/?m=scr&searchval={{{s}}}"
    },
    {
        "d": "trackings.post.japanpost.jp",
        "b": "jpost",
        "u": "https://trackings.post.japanpost.jp/services/srv/search/direct?searchKind=S004&locale=en&reqCodeNo1={{{s}}}"
    },
    {
        "d": "www.idsjmk.cz",
        "b": "jrady",
        "u": "https://www.idsjmk.cz/jrady/{{{s}}}.pdf"
    },
    {
        "d": "www.jra.go.jp",
        "b": "jra",
        "u": "http://www.jra.go.jp/search/top/index.html?q={{{s}}}"
    },
    {
        "d": "www.jrdevjobs.com",
        "b": "jrdevjobs",
        "u": "https://www.jrdevjobs.com/jobs?query={{{s}}}"
    },
    {
        "d": "bundlephobia.com",
        "b": "jsbf",
        "u": "https://bundlephobia.com/result?p={{{s}}}"
    },
    {
        "d": "jsonlint.com",
        "b": "jsonlint",
        "u": "http://jsonlint.com/?json={{{s}}}"
    },
    {
        "d": "juick.com",
        "b": "juick",
        "u": "http://juick.com/?search={{{s}}}"
    },
    {
        "d": "slovniky.juls.savba.sk",
        "b": "juls",
        "u": "http://slovniky.juls.savba.sk/?w={{{s}}}&s=exact&c=608a&d=kssj4&d=psp&d=sssj&d=scs&d=sss&d=peciar&d=ma&d=hssjV&d=bernolak&d=obce&d=priezviska&d=un&d=locutio&d=pskcs&d=psken&d=noundb&ie=utf-8&oe=utf-8#"
    },
    {
        "d": "www.junat.net",
        "b": "junat",
        "u": "https://www.junat.net/en/{{{s}}}"
    },
    {
        "d": "or.justice.cz",
        "b": "justice",
        "u": "https://or.justice.cz/ias/ui/rejstrik-$firma?jenPlatne=PLATNE&nazev={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "justwatchfi",
        "u": "https://www.justwatch.com/fi/search?q={{{s}}}"
    },
    {
        "d": "japaneseverbconjugator.com",
        "b": "jvc",
        "u": "http://japaneseverbconjugator.com/VerbDetails.asp?txtVerb={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "jwh",
        "u": "https://www.justwatch.com/us/search?q={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "jwse",
        "u": "https://www.justwatch.com/se/search?q={{{s}}}"
    },
    {
        "d": "kamusiturki.com",
        "b": "kam",
        "u": "http://kamusiturki.com/{{{s}}}"
    },
    {
        "d": "dikarier.com",
        "b": "karir",
        "u": "https://dikarier.com/layanan/?keywords={{{s}}}"
    },
    {
        "d": "karmadecay.com",
        "b": "karmadecay",
        "u": "http://karmadecay.com/{{{s}}}"
    },
    {
        "d": "kart.finn.no",
        "b": "kart",
        "u": "https://kart.finn.no/?q={{{s}}}"
    },
    {
        "d": "keep.google.com",
        "b": "keep",
        "u": "https://keep.google.com/#search/text={{{s}}}"
    },
    {
        "d": "ovi.rdw.nl",
        "b": "kenteken",
        "u": "https://ovi.rdw.nl/default.aspx?kenteken={{{s}}}"
    },
    {
        "d": "keybase.io",
        "b": "key",
        "u": "https://keybase.io/{{{s}}}"
    },
    {
        "d": "khamsat.com",
        "b": "khamsat",
        "u": "https://khamsat.com/search?utf8=✓&q={{{s}}}"
    },
    {
        "d": "www.kicktraq.com",
        "b": "kicktraq",
        "u": "http://www.kicktraq.com/search/?find={{{s}}}"
    },
    {
        "d": "www.kiddle.co",
        "b": "kid",
        "u": "https://www.kiddle.co/s.php?q={{{s}}}"
    },
    {
        "d": "www.kidrex.org",
        "b": "kidrex",
        "u": "http://www.kidrex.org/results/?q={{{s}}}"
    },
    {
        "d": "www.killerstartups.com",
        "b": "killerstartups",
        "u": "http://www.killerstartups.com/?s={{{s}}} "
    },
    {
        "d": "kanji.jitenon.jp",
        "b": "kji",
        "u": "http://kanji.jitenon.jp/cat/search.php?getdata={{{s}}}"
    },
    {
        "d": "www.kisskissbankbank.com",
        "b": "kkbb",
        "u": "http://www.kisskissbankbank.com/search?q={{{s}}}"
    },
    {
        "d": "www.postnord.se",
        "b": "kolli",
        "u": "https://www.postnord.se/sv/verktyg/sok/Sidor/spara-brev-paket-och-pall.aspx?view=item&itemid={{{s}}}"
    },
    {
        "d": "koodous.com",
        "b": "koodous",
        "u": "https://koodous.com/apks?search={{{s}}}"
    },
    {
        "d": "www.korrekturen.de",
        "b": "korrekturen",
        "u": "https://www.korrekturen.de/suche/searcher.php?q={{{s}}}"
    },
    {
        "d": "kotobank.jp",
        "b": "kotoba",
        "u": "http://kotobank.jp/word/{{{s}}}"
    },
    {
        "d": "kotobank.jp",
        "b": "kotobank",
        "u": "http://kotobank.jp/word/{{{s}}} "
    },
    {
        "d": "www.krak.dk",
        "b": "krak",
        "u": "https://www.krak.dk/search?searchQuery={{{s}}}"
    },
    {
        "d": "www.kickstarter.com",
        "b": "ks",
        "u": "http://www.kickstarter.com/projects/search?utf8=✓&term={{{s}}}+"
    },
    {
        "d": "www.kth.se",
        "b": "kthplaces",
        "u": "https://www.kth.se/places/search/?query={{{s}}}"
    },
    {
        "d": "www.kununu.com",
        "b": "kunu",
        "u": "https://www.kununu.com/de/search#/?q={{{s}}}&country=COUNTRY_DE"
    },
    {
        "d": "www.kununu.com",
        "b": "kununu",
        "u": "https://www.kununu.com/de/search#/?q={{{s}}}&country=COUNTRY_DE"
    },
    {
        "d": "kuopassa.net",
        "b": "kuopassa",
        "u": "http://kuopassa.net/haku/?q={{{s}}}"
    },
    {
        "d": "www.kvasir.no",
        "b": "kvasir",
        "u": "http://www.kvasir.no/alle?q={{{s}}}"
    },
    {
        "d": "www.kvraudio.com",
        "b": "kvraudio",
        "u": "http://www.kvraudio.com/q.php?search=1&q={{{s}}}"
    },
    {
        "d": "kwzf.net",
        "b": "kwzf",
        "u": "http://kwzf.net/#search={{{s}}}&page=1"
    },
    {
        "d": "forum.lametayel.co.il",
        "b": "lametayel",
        "u": "http://forum.lametayel.co.il/index.php?t=search&forum_limiter=0&field=all&search_logic=AND&type=msg&srch={{{s}}}&btn_submit="
    },
    {
        "d": "www.lambdatest.com",
        "b": "lam",
        "u": "https://www.lambdatest.com/blog/?s={{{s}}}"
    },
    {
        "d": "www.csuivi.courrier.laposte.fr",
        "b": "laposte",
        "u": "http://www.csuivi.courrier.laposte.fr/suivi?id={{{s}}}"
    },
    {
        "d": "www.larousse.fr",
        "b": "larfren",
        "u": "https://www.larousse.fr/dictionnaires/rechercher?q={{{s}}}&l=francais-anglais&culture="
    },
    {
        "d": "www.larousse.fr",
        "b": "larousse",
        "u": "http://www.larousse.fr/dictionnaires/francais/{{{s}}}"
    },
    {
        "d": "lasership.com",
        "b": "laser",
        "u": "http://lasership.com/track/{{{s}}}"
    },
    {
        "d": "lasership.com",
        "b": "lasership",
        "u": "http://lasership.com/track/{{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "las",
        "u": "http://www.perseus.tufts.edu/hopper/morph?&la=la&l={{{s}}}&la=la"
    },
    {
        "d": "latency.apex.sh",
        "b": "latency",
        "u": "https://latency.apex.sh/?url={{{s}}}"
    },
    {
        "d": "www.latlong.net",
        "b": "latlong",
        "u": "http://www.latlong.net/search.php?keyword={{{s}}}"
    },
    {
        "d": "www.motorelavoro.it",
        "b": "lavoro",
        "u": "http://www.motorelavoro.it/?q={{{s}}}"
    },
    {
        "d": "labonneformation.pole-emploi.fr",
        "b": "lbf",
        "u": "https://labonneformation.pole-emploi.fr/toutes-les-formations?motscles={{{s}}}"
    },
    {
        "d": "en.langenscheidt.com",
        "b": "lde",
        "u": "https://en.langenscheidt.com/german-english/{{{s}}}"
    },
    {
        "d": "learnzone.org.uk",
        "b": "learnzone",
        "u": "http://learnzone.org.uk/courses/?q={{{s}}}"
    },
    {
        "d": "www.lecker.de",
        "b": "lecker",
        "u": "http://www.lecker.de/suche-rezept/{{{s}}}"
    },
    {
        "d": "www.clsfyd.com",
        "b": "leel",
        "u": "https://www.clsfyd.com/search-results/?ad_title={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "lef",
        "u": "https://www.linguee.com/english-french/search?source=french&query={{{s}}}"
    },
    {
        "d": "scholar.google.com",
        "b": "legal",
        "u": "http://scholar.google.com/scholar?hl=en&q={{{s}}}&btnG=Search&as_sdt=2%2C5&as_ylo=&as_vis=0"
    },
    {
        "d": "legisquebec.gouv.qc.ca",
        "b": "legisqc",
        "u": "http://legisquebec.gouv.qc.ca/fr/result?command=search&length=10&search_type=all&title_search_type=any&corpus=all&corpusType=c&langCont=fr&fragment={{{s}}}&shorttitle=&stemmed=stemmed"
    },
    {
        "d": "leifinder.com",
        "b": "lei",
        "u": "https://leifinder.com/search/{{{s}}}/0/15/results.html?"
    },
    {
        "d": "www.linguee.fr",
        "b": "lenfr",
        "u": "https://www.linguee.fr/francais-anglais/search?source=anglais&query={{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "leofr",
        "u": "https://dict.leo.org/französisch-deutsch/{{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "leopl",
        "u": "https://dict.leo.org/plde/?search={{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "leopt",
        "u": "https://dict.leo.org/portugiesisch-deutsch/{{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "leoru",
        "u": "https://dict.leo.org/russisch-deutsch/{{{s}}}"
    },
    {
        "d": "lernu.net",
        "b": "lernuen",
        "u": "https://lernu.net/en/vortaro/{{{s}}}"
    },
    {
        "d": "lernu.net",
        "b": "lernues",
        "u": "https://lernu.net/es/vortaro/{{{s}}}"
    },
    {
        "d": "www.linguee.fr",
        "b": "lesfr",
        "u": "https://www.linguee.fr/francais-espagnol/search?source=espagnol&query={{{s}}}"
    },
    {
        "d": "www.linguee.es",
        "b": "les",
        "u": "http://www.linguee.es/espanol-ingles/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.lowendtalk.com",
        "b": "let",
        "u": "http://www.lowendtalk.com/search?Search={{{s}}}"
    },
    {
        "d": "letonika.lv",
        "b": "leto",
        "u": "http://letonika.lv/default.aspx?q={{{s}}}"
    },
    {
        "d": "letras.mus.br",
        "b": "letras",
        "u": "http://letras.mus.br/?q={{{s}}} "
    },
    {
        "d": "lexparency.org",
        "b": "lexp",
        "u": "http://lexparency.org/eu/EN/search?deep=True&search_words={{{s}}}"
    },
    {
        "d": "www.greek-language.gr",
        "b": "lext",
        "u": "http://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/search.html?lq={{{s}}}"
    },
    {
        "d": "pac.lfpl.org",
        "b": "lfpl",
        "u": "http://pac.lfpl.org/polaris/search/searchresults.aspx?&type=Default&by=KW&sort=RELEVANCE&term={{{s}}}"
    },
    {
        "d": "lib.thessaloniki.gr",
        "b": "libth",
        "u": "http://lib.thessaloniki.gr/ipac20/ipac.jsp?session=14048C549F1N5.44906&menu=search&aspect=subtab37&npp=10&ipp=20&spp=20&profile=central--1&ri=&term={{{s}}}&index=.GW&x=0&y=0&aspect=subtab37"
    },
    {
        "d": "www.linkedin.com",
        "b": "lic",
        "u": "https://www.linkedin.com/search/results/companies/?keywords={{{s}}}"
    },
    {
        "d": "www.linguee.de",
        "b": "lide",
        "u": "http://www.linguee.de/deutsch-englisch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.welklidwoord.nl",
        "b": "lidwoord",
        "u": "https://www.welklidwoord.nl/{{{s}}}"
    },
    {
        "d": "www.linguee.de",
        "b": "lied",
        "u": "https://www.linguee.de/deutsch-englisch/search?source=englisch&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "liende",
        "u": "https://www.linguee.com/english-german/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "lienit",
        "u": "http://www.linguee.com/english-italian/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.es",
        "b": "lies",
        "u": "https://www.linguee.es/espanol-ingles/search?query={{{s}}}"
    },
    {
        "d": "lihkg.com",
        "b": "lihkg",
        "u": "https://lihkg.com/search?q={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "lihu",
        "u": "https://www.linguee.com/english-hungarian/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linkedin.com",
        "b": "li",
        "u": "https://www.linkedin.com/search/results/all/?keywords={{{s}}}"
    },
    {
        "d": "search.lilo.org",
        "b": "lilo",
        "u": "https://search.lilo.org/searchweb.php?q={{{s}}}"
    },
    {
        "d": "www.linguee.de",
        "b": "lindp",
        "u": "http://www.linguee.de/deutsch-portugiesisch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "lineg",
        "u": "http://www.linguee.com/english-german/search?source=german&query={{{s}}}"
    },
    {
        "d": "www.linguee.it",
        "b": "linei",
        "u": "https://www.linguee.it/italiano-inglese/search?query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "linep",
        "u": "http://www.linguee.com/english-portuguese/?query={{{s}}}"
    },
    {
        "d": "www.linguee.es",
        "b": "linesin",
        "u": "http://www.linguee.es/espanol-ingles/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "lines",
        "u": "http://www.linguee.com/english-spanish/?query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "linge",
        "u": "http://www.linguee.com/deutsch-englisch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.fr",
        "b": "lingfp",
        "u": "http://www.linguee.fr/francais-portugais/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.fr",
        "b": "lingpf",
        "u": "http://www.linguee.fr/francais-portugais/search?source=portugais&query={{{s}}}"
    },
    {
        "d": "www.linguee.de",
        "b": "lingp",
        "u": "http://www.linguee.de/deutsch-portugiesisch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.de",
        "b": "lingueefe",
        "u": "https://www.linguee.de/francais-englisch/search?source=auto&query={{{s}}} "
    },
    {
        "d": "www.linguee.de",
        "b": "linguee",
        "u": "http://www.linguee.de/deutsch-englisch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "lingvolive.ru",
        "b": "lingvo",
        "u": "https://lingvolive.ru/translate/en-ru/{{{s}}}"
    },
    {
        "d": "www.linkedin.com",
        "b": "linkedin",
        "u": "https://www.linkedin.com/search/results/all/?keywords={{{s}}}"
    },
    {
        "d": "linklocker.co",
        "b": "linkl",
        "u": "https://linklocker.co/search?query={{{s}}}"
    },
    {
        "d": "www.linkup.com",
        "b": "linkup",
        "u": "http://www.linkup.com/results.php#q={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "linpe",
        "u": "http://www.linguee.com/english-portuguese/search?source=portuguese&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "linse",
        "u": "http://www.linguee.com/english-swedish/search?query={{{s}}}"
    },
    {
        "d": "www.linternaute.fr",
        "b": "linternautesy",
        "u": "https://www.linternaute.fr/dictionnaire/fr/synonyme/{{{s}}}/"
    },
    {
        "d": "www.listcorp.com",
        "b": "listcorp",
        "u": "https://www.listcorp.com/search?q={{{s}}}"
    },
    {
        "d": "www.listennotes.com",
        "b": "listennotes",
        "u": "https://www.listennotes.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lite",
        "u": "https://duckduckgo.com/lite?q={{{s}}}"
    },
    {
        "d": "www.litefx.to",
        "b": "litefx",
        "u": "https://www.litefx.to/search?q={{{s}}}"
    },
    {
        "d": "leeds.summon.serialssolutions.com",
        "b": "llib",
        "u": "https://leeds.summon.serialssolutions.com/?q=elonmsuck&fvf=ContentType%2CBook+Review%2Ct#!/search?ho=t&fvf=ContentType,Book%20Review,t&l=en&q={{{s}}}"
    },
    {
        "d": "www.lmgtfy.com",
        "b": "lmgtfy",
        "u": "http://www.lmgtfy.com/?s=d&q={{{s}}}"
    },
    {
        "d": "tel.local.ch",
        "b": "localch",
        "u": "http://tel.local.ch/de/q?what={{{s}}}"
    },
    {
        "d": "local.google.com",
        "b": "local",
        "u": "http://local.google.com/maps?f=q&source=s_q&geocode=&q={{{s}}}"
    },
    {
        "d": "www.timeanddate.com",
        "b": "localtime",
        "u": "http://www.timeanddate.com/time/zone/?query={{{s}}}"
    },
    {
        "d": "learnomnifocus.com",
        "b": "lof",
        "u": "https://learnomnifocus.com/?s={{{s}}}"
    },
    {
        "d": "lolnames.gg",
        "b": "lolnames",
        "u": "https://lolnames.gg/en/na/{{{s}}}/"
    },
    {
        "d": "primo.tug-libraries.on.ca",
        "b": "loolib",
        "u": "https://primo.tug-libraries.on.ca/primo_library/libweb/action/dlSearch.do?institution=WATERLOO&vid=WATERLOO&onCampus=false&lang=eng&indx=1&dym=true&highlight=true&displayField=title&bulkSize=10&query=any%2Ccontains%2C{{{s}}}&search_scope=books_tab&tab=default_tab"
    },
    {
        "d": "www.loomisexpress.com",
        "b": "loomis",
        "u": "https://www.loomisexpress.com/ca/wfTrackingStatus.aspx?PieceNumber={{{s}}}"
    },
    {
        "d": "www.loseit.com",
        "b": "loseit",
        "u": "https://www.loseit.com/search/?term={{{s}}}"
    },
    {
        "d": "louisvilleky.gov",
        "b": "louisville",
        "u": "https://louisvilleky.gov/search/site/{{{s}}}"
    },
    {
        "d": "www.lowonganterpadu.com",
        "b": "lowongan",
        "u": "https://www.lowonganterpadu.com/search?q={{{s}}}"
    },
    {
        "d": "linuxsecurity.expert",
        "b": "lse",
        "u": "https://linuxsecurity.expert/search/?q={{{s}}}"
    },
    {
        "d": "litecoin.holytransaction.com",
        "b": "ltc",
        "u": "https://litecoin.holytransaction.com/address/{{{s}}}"
    },
    {
        "d": "www.linguee.es",
        "b": "ltrans",
        "u": "https://www.linguee.es/espanol-ingles/search?&query={{{s}}}"
    },
    {
        "d": "lambda-the-ultimate.org",
        "b": "ltu",
        "u": "http://lambda-the-ultimate.org/search/node/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lucire",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Alucire.com"
    },
    {
        "d": "www.google.com",
        "b": "lucky",
        "u": "http://www.google.com/search?q={{{s}}}&btnI"
    },
    {
        "d": "ludwig.guru",
        "b": "ludwig",
        "u": "https://ludwig.guru/s/{{{s}}} "
    },
    {
        "d": "www.lukol.com",
        "b": "lukol",
        "u": "http://www.lukol.com/s.php?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lupa",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Apiaui.folha.uol.com.br+inurl%3Alupa&ia=web"
    },
    {
        "d": "www.luther.edu",
        "b": "luther",
        "u": "https://www.luther.edu/search/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lwjgl",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:http://lwjgl.org/javadoc/"
    },
    {
        "d": "search.lycos.com",
        "b": "lycos",
        "u": "http://search.lycos.com/web?q={{{s}}}"
    },
    {
        "d": "www.maajim.com",
        "b": "maajim",
        "u": "https://www.maajim.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.macmillandictionary.com",
        "b": "macbrit",
        "u": "http://www.macmillandictionary.com/dictionary/british/{{{s}}}"
    },
    {
        "d": "maduraonline.com",
        "b": "madura",
        "u": "https://maduraonline.com/?find={{{s}}}"
    },
    {
        "d": "www2.informatik.uni-hamburg.de",
        "b": "mafia",
        "u": "https://www2.informatik.uni-hamburg.de/fachschaft/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "www2.informatik.uni-hamburg.de",
        "b": "mafiasi",
        "u": "https://www2.informatik.uni-hamburg.de/fachschaft/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "mailcatch.com",
        "b": "mailcatch",
        "u": "http://mailcatch.com/en/temporary-inbox?box={{{s}}}"
    },
    {
        "d": "mailchimp.com",
        "b": "mailchimp",
        "u": "https://mailchimp.com/search/?q={{{s}}}"
    },
    {
        "d": "mail.google.com",
        "b": "mail",
        "u": "https://mail.google.com/mail/u/0/#inbox{{{s}}}:"
    },
    {
        "d": "www.mailinator.com",
        "b": "mailinator",
        "u": "https://www.mailinator.com/v3/index.jsp?zone=public&query={{{s}}}"
    },
    {
        "d": "go.mail.ru",
        "b": "mailru",
        "u": "https://go.mail.ru/search?fm=1&q={{{s}}}"
    },
    {
        "d": "www.mamma.com",
        "b": "mamma",
        "u": "http://www.mamma.com/result.php?q={{{s}}}&type=web"
    },
    {
        "d": "www.manta.com",
        "b": "manta",
        "u": "http://www.manta.com/mb?search={{{s}}}"
    },
    {
        "d": "www.manualslib.com",
        "b": "manualslib",
        "u": "http://www.manualslib.com/a/{{{s}}}.html"
    },
    {
        "d": "mapfan.com",
        "b": "mapfan",
        "u": "https://mapfan.com/map/words/{{{s}}}/spots"
    },
    {
        "d": "maps.google.com",
        "b": "map",
        "u": "http://maps.google.com/maps?q={{{s}}}"
    },
    {
        "d": "www.mapion.co.jp",
        "b": "mapion",
        "u": "https://www.mapion.co.jp/s/q={{{s}}}/t=spot/"
    },
    {
        "d": "mapper.acme.com",
        "b": "mapp",
        "u": "http://mapper.acme.com/?q={{{s}}} "
    },
    {
        "d": "fr.mappy.com",
        "b": "mappy",
        "u": "http://fr.mappy.com/#/TSearch/S{{{s}}}"
    },
    {
        "d": "www.mapquest.com",
        "b": "mapquest",
        "u": "http://www.mapquest.com/?q={{{s}}}"
    },
    {
        "d": "www.google.de",
        "b": "mapsde",
        "u": "https://www.google.de/maps/place/{{{s}}}"
    },
    {
        "d": "google.com",
        "b": "maps",
        "u": "https://google.com/maps?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "mapsr",
        "u": "https://www.google.com/maps/dir/{{{s}}}"
    },
    {
        "d": "maps.google.co.uk",
        "b": "mapsuk",
        "u": "https://maps.google.co.uk/maps?q={{{s}}}"
    },
    {
        "d": "mapy.cz",
        "b": "mapy",
        "u": "https://mapy.cz/zakladni?q={{{s}}}"
    },
    {
        "d": "www.marinetraffic.com",
        "b": "marine",
        "u": "http://www.marinetraffic.com/en/ais/index/search/all/keyword:{{{s}}}"
    },
    {
        "d": "www.marinetraffic.com",
        "b": "marinetraffic",
        "u": "https://www.marinetraffic.com/en/ais/index/search/all?keyword={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "markos",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Amarkosweb.com "
    },
    {
        "d": "www.masterseek.com",
        "b": "masterseek",
        "u": "http://www.masterseek.com/lead_generation_final.aspx?q={{{s}}}"
    },
    {
        "d": "mapa.buenosaires.gov.ar",
        "b": "mbs",
        "u": "http://mapa.buenosaires.gov.ar/buscador/?dir= {{{s}}}"
    },
    {
        "d": "wiki.musicbrainz.org",
        "b": "mbwiki",
        "u": "https://wiki.musicbrainz.org/index.php?title=Special%3ASearch&go=Go&search={{{s}}}"
    },
    {
        "d": "mycallbot.com",
        "b": "mcb",
        "u": "http://mycallbot.com/numbers/{{{s}}}"
    },
    {
        "d": "map.geo.admin.ch",
        "b": "mch",
        "u": "http://map.geo.admin.ch/?swisssearch={{{s}}}"
    },
    {
        "d": "magiccards.info",
        "b": "mc.info",
        "u": "http://magiccards.info/query?q={{{s}}}&v=card&s=cname"
    },
    {
        "d": "www.metacritic.com",
        "b": "mc",
        "u": "http://www.metacritic.com/search/all/{{{s}}}/results"
    },
    {
        "d": "mapy.cz",
        "b": "mcz",
        "u": "https://mapy.cz/?q={{{s}}}"
    },
    {
        "d": "www.mdbg.net",
        "b": "mdbgt",
        "u": "http://www.mdbg.net/chindict/chindict.php?page=worddict&wdrst=1&wdqb={{{s}}}"
    },
    {
        "d": "mapa.buenosaires.gov.ar",
        "b": "mdbs",
        "u": "http://mapa.buenosaires.gov.ar/buscador/?dir= {{{s}}}"
    },
    {
        "d": "mecabricks.com",
        "b": "mecabricks",
        "u": "http://mecabricks.com/en/library/search?q={{{s}}}"
    },
    {
        "d": "www.meetup.com",
        "b": "meetup",
        "u": "http://www.meetup.com/find/?keywords={{{s}}}"
    },
    {
        "d": "www.metafilter.com",
        "b": "mefi",
        "u": "http://www.metafilter.com/contribute/search.mefi?site=mefi&q={{{s}}}"
    },
    {
        "d": "megalodon.jp",
        "b": "megalodon",
        "u": "http://megalodon.jp/?url={{{s}}}"
    },
    {
        "d": "melpa.milkbox.net",
        "b": "melpa",
        "u": "http://melpa.milkbox.net/#/?q={{{s}}}"
    },
    {
        "d": "timetravel.mementoweb.org",
        "b": "memento",
        "u": "http://timetravel.mementoweb.org/list/2013/{{{s}}}"
    },
    {
        "d": "lista.mercadolivre.com.br",
        "b": "mercadolivre",
        "u": "http://lista.mercadolivre.com.br/{{{s}}}"
    },
    {
        "d": "egliseinfo.catholique.fr",
        "b": "messeinfo",
        "u": "http://egliseinfo.catholique.fr/horaires/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "metacanada",
        "u": "https://www.reddit.com/r/metacanada/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "www.metacrawler.com",
        "b": "metacrawler",
        "u": "http://www.metacrawler.com/search/web?q={{{s}}}"
    },
    {
        "d": "www.metaculus.com",
        "b": "metaculus",
        "u": "https://www.metaculus.com/questions/?search={{{s}}}"
    },
    {
        "d": "www.metafilter.com",
        "b": "metafilter",
        "u": "http://www.metafilter.com/contribute/search.mefi?site=mefi&q={{{s}}}"
    },
    {
        "d": "metager.de",
        "b": "metageren",
        "u": "https://metager.de/meta/cgi-bin/meta.ger1?ui=en&lang=en&wikiboost=on&QuickTips=off&langfilter=yes&eingabe={{{s}}}&mm=and&time=1&exalead=on&fastbot=on&yacy=on&nebel=on&atsearch=on&acoon=on&overture=on&base=on&yandex=on&onenewspage=on&dmozint=on"
    },
    {
        "d": "www.metager.de",
        "b": "metager",
        "u": "https://www.metager.de/meta/meta.ger3?eingabe={{{s}}}"
    },
    {
        "d": "b7cxf4dkdsko6ah2.onion",
        "b": "metagertoren",
        "u": "http://b7cxf4dkdsko6ah2.onion/en/meta/meta.ger3?focus=web&encoding=utf8&lang=en&eingabe={{{s}}}"
    },
    {
        "d": "b7cxf4dkdsko6ah2.onion",
        "b": "metagertor",
        "u": "http://b7cxf4dkdsko6ah2.onion/meta/meta.ger3?focus=web&encoding=utf8&lang=all&eingabe={{{s}}}"
    },
    {
        "d": "mewe.com",
        "b": "mewe",
        "u": "https://mewe.com/profile/{{{s}}}"
    },
    {
        "d": "myfigurecollection.net",
        "b": "mfc",
        "u": "http://myfigurecollection.net/browse.v4.php?keywords={{{s}}}"
    },
    {
        "d": "www.myfitnesspal.com",
        "b": "mfp",
        "u": "http://www.myfitnesspal.com/food/search?search={{{s}}}"
    },
    {
        "d": "maps.google.com",
        "b": "m",
        "u": "http://maps.google.com/maps?q={{{s}}}"
    },
    {
        "d": "search.mibbit.com",
        "b": "mib",
        "u": "http://search.mibbit.com/search/{{{s}}}"
    },
    {
        "d": "michaelis.uol.com.br",
        "b": "michaelis",
        "u": "http://michaelis.uol.com.br/busca?r=1&f=0&t=1&palavra={{{s}}}"
    },
    {
        "d": "michaelis.uol.com.br",
        "b": "michaelispt",
        "u": "http://michaelis.uol.com.br/busca?r=1&f=1&t=0&palavra={{{s}}}"
    },
    {
        "d": "mijisou.com",
        "b": "mijisou",
        "u": "https://mijisou.com/?q={{{s}}}"
    },
    {
        "d": "millionshort.com",
        "b": "millionshort",
        "u": "http://millionshort.com/search.php?q={{{s}}}&remove=1000k"
    },
    {
        "d": "millionshort.com",
        "b": "mill",
        "u": "https://millionshort.com/search?keywords={{{s}}}&remove=1000000"
    },
    {
        "d": "www.minds.com",
        "b": "minds",
        "u": "https://www.minds.com/search;q={{{s}}}"
    },
    {
        "d": "cerca.ministerosalute.it",
        "b": "minsal",
        "u": "http://cerca.ministerosalute.it/search?q={{{s}}}&client=defaultPORT_front-end&proxystylesheet=defaultPORT_front-end&site=default_collection&output=xml_no_dtd&filter=p"
    },
    {
        "d": "minimalsearch.com",
        "b": "minsearch",
        "u": "https://minimalsearch.com/search?q={{{s}}}"
    },
    {
        "d": "www.miningjobsearch.com",
        "b": "mjs",
        "u": "https://www.miningjobsearch.com/Mining-Jobs/Search/{{{s}}}"
    },
    {
        "d": "sammlungonline.mkg-hamburg.de",
        "b": "mkg",
        "u": "https://sammlungonline.mkg-hamburg.de/de/search?s={{{s}}}"
    },
    {
        "d": "forum.manjaro.org",
        "b": "mlf",
        "u": "https://forum.manjaro.org/search?q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "ml",
        "u": "https://google.com/maps/search/{{{s}}}?force=canvas"
    },
    {
        "d": "www.mageialinux-online.org",
        "b": "mlo",
        "u": "http://www.mageialinux-online.org/search/search.php#results?q={{{s}}}&search_submit=Recherche"
    },
    {
        "d": "mlpforums.com",
        "b": "mlpf",
        "u": "https://mlpforums.com/search/?q={{{s}}}"
    },
    {
        "d": "find.minlib.net",
        "b": "mmls",
        "u": "http://find.minlib.net/iii/encore/search?formids=target&lang=eng&suite=def&reservedids=lang%2Csuite&submitmode=&submitname=&target={{{s}}}"
    },
    {
        "d": "www.macmillandictionary.com",
        "b": "mm",
        "u": "http://www.macmillandictionary.com/us/search/british/direct/?q={{{s}}}"
    },
    {
        "d": "m.search.naver.com",
        "b": "mnaver",
        "u": "https://m.search.naver.com/search.naver?query={{{s}}}"
    },
    {
        "d": "masterof13fps.de",
        "b": "mo13fps",
        "u": "https://masterof13fps.de/forums/search/46335/?q={{{s}}}"
    },
    {
        "d": "search.google.com",
        "b": "mobilefriendly",
        "u": "https://search.google.com/test/mobile-friendly?url={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "modhelp",
        "u": "http://www.reddit.com/r/modhelp/search?q={{{s}}}"
    },
    {
        "d": "www.modulargrid.net",
        "b": "modulargrid",
        "u": "https://www.modulargrid.net/e/modules/browser?SearchName={{{s}}}"
    },
    {
        "d": "bugs.mojang.com",
        "b": "mojangbug",
        "u": "https://bugs.mojang.com/issues/?jql=text ~ '{{{s}}}'"
    },
    {
        "d": "www.mojeek.com",
        "b": "mojeek",
        "u": "https://www.mojeek.com/search?q={{{s}}}"
    },
    {
        "d": "www.moj-posao.net",
        "b": "mojposao",
        "u": "https://www.moj-posao.net/Pretraga-Poslova/?keyword={{{s}}}&area=&category="
    },
    {
        "d": "paikat.te-palvelut.fi",
        "b": "mol",
        "u": "https://paikat.te-palvelut.fi/tpt/?searchPhrase={{{s}}}"
    },
    {
        "d": "www.moneyland.ch",
        "b": "moneyland",
        "u": "https://www.moneyland.ch/search?q={{{s}}}"
    },
    {
        "d": "jobsearch.monster.com",
        "b": "monster",
        "u": "http://jobsearch.monster.com/Search.aspx?re=130&cy=us&brd=1&JSNONREG=1&q={{{s}}}&rad=20&rad_units=miles"
    },
    {
        "d": "duckduckgo.com",
        "b": "month",
        "u": "https://duckduckgo.com/?q={{{s}}}&df=m"
    },
    {
        "d": "mooji.tv",
        "b": "mooji",
        "u": "http://mooji.tv/freemedia/?_fm_s={{{s}}}"
    },
    {
        "d": "mostaql.com",
        "b": "mostaql",
        "u": "https://mostaql.com/freelancers?keyword={{{s}}}"
    },
    {
        "d": "mozillians.org",
        "b": "mozillians",
        "u": "https://mozillians.org/en-US/search/?q={{{s}}}"
    },
    {
        "d": "phonebook.mozilla.org",
        "b": "mozpb",
        "u": "https://phonebook.mozilla.org/?search/{{{s}}}"
    },
    {
        "d": "observatory.mozilla.org",
        "b": "moztest",
        "u": "https://observatory.mozilla.org/analyze/{{{s}}}"
    },
    {
        "d": "www.mapquest.com",
        "b": "mq",
        "u": "http://www.mapquest.com/?q={{{s}}}"
    },
    {
        "d": "go.mail.ru",
        "b": "mrg",
        "u": "https://go.mail.ru/msearch?q={{{s}}}"
    },
    {
        "d": "www.mrw.es",
        "b": "mrw",
        "u": "https://www.mrw.es/seguimiento_envios/MRW_resultados_consultas.asp?modo=nacional&envio={{{s}}}"
    },
    {
        "d": "etfs.morningstar.com",
        "b": "mseq",
        "u": "http://etfs.morningstar.com/quote?t={{{s}}}"
    },
    {
        "d": "www.morningstar.com",
        "b": "msfq",
        "u": "http://www.morningstar.com/funds/xnas/{{{s}}}/quote.html"
    },
    {
        "d": "www.messenger.com",
        "b": "msg",
        "u": "https://www.messenger.com/t/{{{s}}}"
    },
    {
        "d": "investing.money.msn.com",
        "b": "msnm",
        "u": "http://investing.money.msn.com/investments/stock-price?Symbol={{{s}}} "
    },
    {
        "d": "mastodon.social",
        "b": "msocial",
        "u": "https://mastodon.social/tags/{{{s}}}"
    },
    {
        "d": "www.microsofttranslator.com",
        "b": "mst",
        "u": "http://www.microsofttranslator.com/bv.aspx?a={{{s}}}"
    },
    {
        "d": "www.mturk.com",
        "b": "mtk",
        "u": "https://www.mturk.com/mturk/searchbar?selectedSearchType=hitgroups&searchWords={{{s}}}"
    },
    {
        "d": "mwsgsa01.mtr.com.hk",
        "b": "mtr",
        "u": "http://mwsgsa01.mtr.com.hk/search?site=default_collection&output=xml_no_dtd&client=mtr_eng&proxystylesheet=mtr_eng&proxyreload=1&ie=big5&oe=UTF-8&q={{{s}}}"
    },
    {
        "d": "www.muffwiggler.com",
        "b": "muff",
        "u": "https://www.muffwiggler.com/forum/search.php?search_keywords={{{s}}}&search_terms=extended&search_author=&search_forum=-1&search_time=0&search_fields=all&sort_by=0&sort_dir=desc&show_results=topics&return_chars=200"
    },
    {
        "d": "www.google.co.uk",
        "b": "muke",
        "u": "https://www.google.co.uk/maps/?hl=en&q={{{s}}}"
    },
    {
        "d": "www.google.co.uk",
        "b": "muk",
        "u": "https://www.google.co.uk/maps/?hl=en&q={{{s}}}"
    },
    {
        "d": "www.multitran.ru",
        "b": "multitran",
        "u": "http://www.multitran.ru/c/m.exe?CL=1&s={{{s}}}&l1=1"
    },
    {
        "d": "muragon.com",
        "b": "muragon",
        "u": "https://muragon.com/search/?ie=UTF-8&q={{{s}}}&sa=検索"
    },
    {
        "d": "efa.mvv-muenchen.de",
        "b": "mvv",
        "u": "http://efa.mvv-muenchen.de/index.html?name_destination={{{s}}}"
    },
    {
        "d": "www.mijnwoordenboek.nl",
        "b": "mwb",
        "u": "http://www.mijnwoordenboek.nl/vertaal/NL/EN/{{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "mxtool",
        "u": "https://mxtoolbox.com/SuperTool.aspx?action={{{s}}}"
    },
    {
        "d": "myactivity.google.com",
        "b": "myactivity",
        "u": "https://myactivity.google.com/myactivity?q={{{s}}}"
    },
    {
        "d": "www.myallsearch.com",
        "b": "myallsearch",
        "u": "http://www.myallsearch.com/Web/{{{s}}}.html"
    },
    {
        "d": "mycroftproject.com",
        "b": "mycroft",
        "u": "http://mycroftproject.com/search-engines.html?name={{{s}}}&opensearch=yes"
    },
    {
        "d": "my.ecp.fr",
        "b": "myecp",
        "u": "https://my.ecp.fr/search?query={{{s}}}"
    },
    {
        "d": "www.mypdns.org",
        "b": "mypdns",
        "u": "http://www.mypdns.org/trac/search?q={{{s}}}"
    },
    {
        "d": "searchservice.myspace.com",
        "b": "myspace",
        "u": "http://searchservice.myspace.com/index.cfm?fuseaction=sitesearch.results&orig=search_Header&origpfc=Splash&type=People&qry={{{s}}}&submit=Search"
    },
    {
        "d": "www.mytip.co",
        "b": "mytip",
        "u": "https://www.mytip.co/explore?search={{{s}}}"
    },
    {
        "d": "www.mywot.com",
        "b": "mywot",
        "u": "https://www.mywot.com/en/scorecard/{{{s}}}"
    },
    {
        "d": "www.najdi.si",
        "b": "najdi",
        "u": "http://www.najdi.si/search.jsp?q={{{s}}}"
    },
    {
        "d": "namchey.com",
        "b": "namchey",
        "u": "https://namchey.com/search/?searchKeyword={{{s}}}"
    },
    {
        "d": "nameling.net",
        "b": "nameling",
        "u": "http://nameling.net/name/{{{s}}}"
    },
    {
        "d": "search.naver.com",
        "b": "na",
        "u": "https://search.naver.com/search.naver?query={{{s}}}"
    },
    {
        "d": "na.op.gg",
        "b": "naopgg",
        "u": "http://na.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "www.naora.me",
        "b": "naora",
        "u": "https://www.naora.me/web?q={{{s}}}"
    },
    {
        "d": "www.naslovi.net",
        "b": "naslovi",
        "u": "http://www.naslovi.net/search.php?q={{{s}}}"
    },
    {
        "d": "dict.naver.com",
        "b": "naverdicfr",
        "u": "https://dict.naver.com/frkodict/#/search?query={{{s}}}"
    },
    {
        "d": "search.naver.com",
        "b": "ㄴ",
        "u": "https://search.naver.com/search.naver?query={{{s}}}"
    },
    {
        "d": "search.naver.com",
        "b": "naver",
        "u": "http://search.naver.com/search.naver?where=nexearch&sm=osd&ie={inputEncoding}&query={{{s}}}"
    },
    {
        "d": "beta.map.naver.com",
        "b": "navm",
        "u": "https://beta.map.naver.com/search/{{{s}}}"
    },
    {
        "d": "www.navigium.de",
        "b": "nav",
        "u": "http://www.navigium.de/latein-woerterbuch.php?form={{{s}}}&wb=gross&phr=true&mh=true"
    },
    {
        "d": "nayiri.com",
        "b": "nayiri",
        "u": "http://nayiri.com/search?query={{{s}}}"
    },
    {
        "d": "https://duckduckgo.com/newbang",
        "b": "nbang",
        "u": "https://duckduckgo.com/newbang"
    },
    {
        "d": "ordbokene.no",
        "b": "nbd",
        "u": "https://ordbokene.no/bm/search?scope=ei&perPage=20&q={{{s}}}"
    },
    {
        "d": "nbn-resolving.org",
        "b": "nbn",
        "u": "https://nbn-resolving.org/{{{s}}}"
    },
    {
        "d": "nciku.com",
        "b": "nck",
        "u": "http://nciku.com/search/all/{{{s}}}"
    },
    {
        "d": "nedir-sozluk.com",
        "b": "nedir",
        "u": "http://nedir-sozluk.com/ara/{{{s}}}"
    },
    {
        "d": "neocities.org",
        "b": "neo",
        "u": "https://neocities.org/browse?tag={{{s}}}"
    },
    {
        "d": "www.neti.ee",
        "b": "neti",
        "u": "http://www.neti.ee/cgi-bin/otsing?src=web&query={{{s}}} "
    },
    {
        "d": "nevakit.com",
        "b": "nevakit",
        "u": "https://nevakit.com/ara/{{{s}}}"
    },
    {
        "d": "books.google.com",
        "b": "ngramsde",
        "u": "https://books.google.com/ngrams/graph?content={{{s}}}&year_start=1800&year_end=2000&corpus=20&smoothing=3"
    },
    {
        "d": "tracking.newgistics.com",
        "b": "ngt",
        "u": "http://tracking.newgistics.com/?trackingvalue={{{s}}}"
    },
    {
        "d": "search.nifty.com",
        "b": "nifty",
        "u": "https://search.nifty.com/websearch/search?cflg=%E6%A4%9C%E7%B4%A2&q={{{s}}}"
    },
    {
        "d": "nightbot.tv",
        "b": "nightbot",
        "u": "https://nightbot.tv/t/{{{s}}}/commands"
    },
    {
        "d": "www.nihongodict.com",
        "b": "nihongodict",
        "u": "http://www.nihongodict.com/?s={{{s}}}"
    },
    {
        "d": "masto.nixnet.xyz",
        "b": "nixtodon",
        "u": "https://masto.nixnet.xyz/@{{{s}}}"
    },
    {
        "d": "norgeskart.no",
        "b": "nk",
        "u": "https://norgeskart.no/#!?project=seeiendom&layers=1002,1015&zoom=4&lat=7197864.00&lon=396722.00&sok={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "nlen",
        "u": "https://translate.google.com/#nl/en/{{{s}}}"
    },
    {
        "d": "www.verbix.com",
        "b": "nlverbix",
        "u": "http://www.verbix.com/webverbix/go.php?D1=24&T1={{{s}}}"
    },
    {
        "d": "nl.wikipedia.org",
        "b": "nlwiki",
        "u": "https://nl.wikipedia.org/wiki/Speciaal:Zoeken/{{{s}}}"
    },
    {
        "d": "map.naver.com",
        "b": "nmap",
        "u": "http://map.naver.com/?query={{{s}}}"
    },
    {
        "d": "ordbok.uib.no",
        "b": "nnd",
        "u": "https://ordbok.uib.no/perl/ordbok.cgi?OPP={{{s}}}&ant_bokmaal=5&ant_nynorsk=5&nynorsk=+&ordbok=nynorsk"
    },
    {
        "d": "translate.google.com",
        "b": "noen",
        "u": "https://translate.google.com/#no/en/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "nofap",
        "u": "https://www.reddit.com/r/NoFap/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "pasokatu.com",
        "b": "noiseless",
        "u": "http://pasokatu.com/nsearch#gsc.q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "nojs",
        "u": "https://duckduckgo.com/html/?q={{{s}}}"
    },
    {
        "d": "nominatim.openstreetmap.org",
        "b": "nominatim",
        "u": "http://nominatim.openstreetmap.org/search?q={{{s}}}"
    },
    {
        "d": "safeweb.norton.com",
        "b": "nortonsafe",
        "u": "https://safeweb.norton.com/report/show?url={{{s}}}"
    },
    {
        "d": "safeweb.norton.com",
        "b": "nortonsafeweb",
        "u": "https://safeweb.norton.com/report/show?url={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "noscript",
        "u": "https://duckduckgo.com/html/?q={{{s}}}"
    },
    {
        "d": "dic.nicovideo.jp",
        "b": "npedia",
        "u": "http://dic.nicovideo.jp/a/{{{s}}}"
    },
    {
        "d": "www.nasdaq.com",
        "b": "nrtq",
        "u": "http://www.nasdaq.com/symbol/{{{s}}}/real-time"
    },
    {
        "d": "duckduckgo.com",
        "b": "ns",
        "u": "http://duckduckgo.com/?q=!safeoff+{{{s}}}"
    },
    {
        "d": "www.nseindia.com",
        "b": "nse",
        "u": "http://www.nseindia.com/gsa/search.jsp?q={{{s}}}"
    },
    {
        "d": "safeweb.norton.com",
        "b": "nsf",
        "u": "https://safeweb.norton.com/report/show?url={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "nsfw",
        "u": "https://duckduckgo.com/?q={{{s}}}&kp=-2&ia=web"
    },
    {
        "d": "www.numeroinconnu.fr",
        "b": "ntel",
        "u": "https://www.numeroinconnu.fr/numero/{{{s}}}"
    },
    {
        "d": "www.tritrans.net",
        "b": "ntrans",
        "u": "http://www.tritrans.net/cgibin/translate.cgi?spraak=Norsk&Fra={{{s}}}"
    },
    {
        "d": "nutritiondata.self.com",
        "b": "nutritiondata",
        "u": "http://nutritiondata.self.com/foods-{{{s}}}000000000000000000000.html"
    },
    {
        "d": "search.naver.com",
        "b": "nvi",
        "u": "https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query={{{s}}}"
    },
    {
        "d": "papago.naver.com",
        "b": "nvkrjp",
        "u": "https://papago.naver.com/?sk=ko&tk=ja&st={{{s}}}"
    },
    {
        "d": "m.search.naver.com",
        "b": "nv",
        "u": "http://m.search.naver.com/search.naver?query={{{s}}}):"
    },
    {
        "d": "www.nzqa.govt.nz",
        "b": "nzqas",
        "u": "https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber={{{s}}}"
    },
    {
        "d": "www.obrazky.cz",
        "b": "obrazky",
        "u": "https://www.obrazky.cz/?q={{{s}}}"
    },
    {
        "d": "www.opencaching.us",
        "b": "ocna",
        "u": "https://www.opencaching.us/search.php?searchto=searchbyname&showresult=1&expert=0&output=HTML&sort=bydistance&f_inactive=0&f_ignored=0&f_userfound=0&f_userowner=0&f_watched=0&f_geokret=0&cachename=https://www.opencaching.us/search.php?searchto=searchbyname&showresult=1&expert=0&output=HTML&sort=bydistance&f_inactive=0&f_ignored=0&f_userfound=0&f_userowner=0&f_watched=0&f_geokret=0&cachename={{{s}}}&submit=Search&submit=Search"
    },
    {
        "d": "octopart.com",
        "b": "octopart",
        "u": "https://octopart.com/search?q={{{s}}}"
    },
    {
        "d": "theodd1sout.com",
        "b": "odd",
        "u": "https://theodd1sout.com/search?q={{{s}}}"
    },
    {
        "d": "www.opendota.com",
        "b": "odota",
        "u": "https://www.opendota.com/search?q={{{s}}}"
    },
    {
        "d": "odpiralnicasi.com",
        "b": "odpiralni",
        "u": "http://odpiralnicasi.com/spots?utf8=✓&q={{{s}}}"
    },
    {
        "d": "www.eki.ee",
        "b": "õ",
        "u": "http://www.eki.ee/dict/qs/index.cgi?Q={{{s}}}"
    },
    {
        "d": "oeis.org",
        "b": "oeis",
        "u": "http://oeis.org/search?q={{{s}}}&language=english&go=Search"
    },
    {
        "d": "www.downforeveryoneorjustme.com",
        "b": "offline",
        "u": "http://www.downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "openfontlibrary.org",
        "b": "ofl",
        "u": "http://openfontlibrary.org/en/search?query={{{s}}}"
    },
    {
        "d": "www.oilandgasjobsearch.com",
        "b": "ogjs",
        "u": "https://www.oilandgasjobsearch.com/Oil-and-Gas-Jobs/Search/{{{s}}}"
    },
    {
        "d": "www.oilandgasjobsearch.com",
        "b": "oilandgas",
        "u": "https://www.oilandgasjobsearch.com/Oil-and-Gas-Jobs/Search/{{{s}}}"
    },
    {
        "d": "www.gavo.t.u-tokyo.ac.jp",
        "b": "ojad",
        "u": "http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/word:{{{s}}}"
    },
    {
        "d": "www.okcaller.com",
        "b": "okcaller",
        "u": "http://www.okcaller.com/detail.php?number={{{s}}}"
    },
    {
        "d": "okcupid.com",
        "b": "okc",
        "u": "https://okcupid.com/profile/{{{s}}}"
    },
    {
        "d": "olam.in",
        "b": "olam",
        "u": "http://olam.in/Dictionary/en_ml/{{{s}}} "
    },
    {
        "d": "old.reddit.com",
        "b": "oldreddit",
        "u": "https://old.reddit.com/search?q={{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "omap",
        "u": "https://www.openstreetmap.org/search?query={{{s}}}"
    },
    {
        "d": "open.mapquest.fr",
        "b": "omfr",
        "u": "http://open.mapquest.fr/?q={{{s}}} "
    },
    {
        "d": "omnum.se",
        "b": "omnum",
        "u": "http://omnum.se/search/?q={{{s}}}"
    },
    {
        "d": "theomx.com",
        "b": "omx",
        "u": "https://theomx.com/companies?keyword%5D={{{s}}}"
    },
    {
        "d": "www.ontario.ca",
        "b": "on",
        "u": "https://www.ontario.ca/search/search-results?query={{{s}}}"
    },
    {
        "d": "onlinelinkscan.com",
        "b": "onlinelinkscan",
        "u": "http://onlinelinkscan.com/results/{{{s}}}"
    },
    {
        "d": "cad.onshape.com",
        "b": "onshape",
        "u": "https://cad.onshape.com/documents?resourceType=filter&nodeId=1&column=modifiedAt&order=desc&viewMode=0&q={{{s}}}"
    },
    {
        "d": "www.onvista.de",
        "b": "onvista",
        "u": "http://www.onvista.de/suche/?onvHeaderSearchBoxAction=true&searchValue={{{s}}}"
    },
    {
        "d": "onzetaal.nl",
        "b": "onzetaal",
        "u": "https://onzetaal.nl/zoekresultaten/?q={{{s}}}"
    },
    {
        "d": "www.opencompanies.nl",
        "b": "opencomp",
        "u": "https://www.opencompanies.nl/zoekresultaten?q={{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "openmaps",
        "u": "https://www.openstreetmap.org/search?query={{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "openstreetmap",
        "u": "http://www.openstreetmap.org/?query={{{s}}}"
    },
    {
        "d": "wiki.openstreetmap.org",
        "b": "openstreetmapwiki",
        "u": "https://wiki.openstreetmap.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "openstreet",
        "u": "http://www.openstreetmap.org/?query={{{s}}}"
    },
    {
        "d": "na.op.gg",
        "b": "opggna",
        "u": "http://na.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "checklists.opquast.com",
        "b": "opq",
        "u": "http://checklists.opquast.com/fr/opquastv2?q={{{s}}} "
    },
    {
        "d": "www.ordguru.se",
        "b": "ordguru",
        "u": "https://www.ordguru.se/synonymer/sök?q={{{s}}}"
    },
    {
        "d": "ordnet.dk",
        "b": "ordnet",
        "u": "http://ordnet.dk/ddo/ordbog?query={{{s}}}"
    },
    {
        "d": "www.orfoqrafiya.az",
        "b": "orfo",
        "u": "http://www.orfoqrafiya.az/aze/{{{s}}}"
    },
    {
        "d": "osalt.com",
        "b": "osalt",
        "u": "https://osalt.com/search?q={{{s}}}"
    },
    {
        "d": "oscobo.co.uk",
        "b": "osc",
        "u": "https://oscobo.co.uk/search.php?q={{{s}}}"
    },
    {
        "d": "osmcha.mapbox.com",
        "b": "osmcha",
        "u": "https://osmcha.mapbox.com/changesets/{{{s}}}"
    },
    {
        "d": "forum.openstreetmap.org",
        "b": "osmforumnl",
        "u": "https://forum.openstreetmap.org/search.php?action=search&keywords={{{s}}}&forums[]=12"
    },
    {
        "d": "forum.openstreetmap.org",
        "b": "osmforum",
        "u": "http://forum.openstreetmap.org/search.php?action=search&keywords={{{s}}}&author=&forums=&search_in=0&sort_by=0&sort_dir=DESC&show_as=topics"
    },
    {
        "d": "tile.openstreetmap.fr",
        "b": "osmfr",
        "u": "http://tile.openstreetmap.fr/?q={{{s}}}"
    },
    {
        "d": "www.openlinkmap.org",
        "b": "osmlink",
        "u": "http://www.openlinkmap.org/?q={{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "osmnode",
        "u": "https://www.openstreetmap.org/node/{{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "osm",
        "u": "https://www.openstreetmap.org/search?query={{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "osmrelation",
        "u": "https://www.openstreetmap.org/relation/{{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "osmway",
        "u": "https://www.openstreetmap.org/way/{{{s}}}"
    },
    {
        "d": "wiki.openstreetmap.org",
        "b": "osmwiki",
        "u": "https://wiki.openstreetmap.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "wiki.openstreetmap.org",
        "b": "osmw",
        "u": "http://wiki.openstreetmap.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "map.project-osrm.org",
        "b": "osrm",
        "u": "http://map.project-osrm.org/?dest={{{s}}}"
    },
    {
        "d": "www.openstreetmap.org",
        "b": "ost",
        "u": "http://www.openstreetmap.org/search?query={{{s}}}"
    },
    {
        "d": "oberlin.summon.serialssolutions.com",
        "b": "osummon",
        "u": "https://oberlin.summon.serialssolutions.com/search?q={{{s}}}"
    },
    {
        "d": "www.openthesaurus.de",
        "b": "othesa",
        "u": "https://www.openthesaurus.de/synonyme/{{{s}}}"
    },
    {
        "d": "templates.office.com",
        "b": "ot",
        "u": "https://templates.office.com/en-US/Search/results?query={{{s}}}"
    },
    {
        "d": "overpass-turbo.eu",
        "b": "otw",
        "u": "http://overpass-turbo.eu/?w={{{s}}}&R"
    },
    {
        "d": "www.ou.edu",
        "b": "ou",
        "u": "http://www.ou.edu/content/web/search.html?q={{{s}}}"
    },
    {
        "d": "mail.live.com",
        "b": "outlook",
        "u": "https://mail.live.com/default.aspx?skws=hello#fid=flsearch&srch=1&skws={{{s}}}&sdr=4&satt=0"
    },
    {
        "d": "www.owid.de",
        "b": "owid",
        "u": "http://www.owid.de/suche/wort?wort={{{s}}}"
    },
    {
        "d": "addons.opera.com",
        "b": "ows",
        "u": "https://addons.opera.com/ru/search/?query={{{s}}}&type=extensions"
    },
    {
        "d": "www.oxforddictionaries.com",
        "b": "oxforddictionaries",
        "u": "http://www.oxforddictionaries.com/definition/english/{{{s}}}"
    },
    {
        "d": "en.oxforddictionaries.com",
        "b": "oxford",
        "u": "https://en.oxforddictionaries.com/definition/{{{s}}}"
    },
    {
        "d": "cannabis.community.forums.ozstoners.com",
        "b": "ozstoners",
        "u": "https://cannabis.community.forums.ozstoners.com/index.php?app=core&module=search&do=search&andor_type=and&sid=58ffdab89aaeb17e49a50f52929f35d6&search_content=both&search_app_filters[ccs][searchInKey]=pages&search_app_filters[ccs][pages][sortKey]=date&search_app_filters[ccs][pages][sortDir]=0&search_app_filters[ccs][database_1][sortKey]=date_added&search_app_filters[ccs][database_1][sortDir]=0&search_term={{{s}}}&search_app=forums"
    },
    {
        "d": "www.packagemapping.com",
        "b": "package",
        "u": "http://www.packagemapping.com/?action=track&tracknum={{{s}}}"
    },
    {
        "d": "www.pagesjaunes.fr",
        "b": "pagesjaunes",
        "u": "https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui={{{s}}}&monochamp={{{s}}}"
    },
    {
        "d": "developers.google.com",
        "b": "pagespeed",
        "u": "https://developers.google.com/speed/pagespeed/insights/?url={{{s}}}"
    },
    {
        "d": "www.paginegialle.it",
        "b": "pagine",
        "u": "http://www.paginegialle.it/pgol/4-{{{s}}}"
    },
    {
        "d": "www.pai.pt",
        "b": "pai",
        "u": "http://www.pai.pt/q/business/advanced/what/{{{s}}}/?contentErrorLinkEnabled=true"
    },
    {
        "d": "www.theideaskitchen.co.uk",
        "b": "panideas",
        "u": "https://www.theideaskitchen.co.uk/search/-{{{s}}}"
    },
    {
        "d": "www.paginasamarillas.es",
        "b": "pa",
        "u": "https://www.paginasamarillas.es/search/all-ac/all-ma/all-pr/all-is/all-ci/all-ba/all-pu/all-nc/1?what={{{s}}}"
    },
    {
        "d": "www.parcello.org",
        "b": "parcello",
        "u": "https://www.parcello.org/tracking?tid={{{s}}}"
    },
    {
        "d": "parcelsapp.com",
        "b": "parcels",
        "u": "http://parcelsapp.com/en/tracking/{{{s}}}"
    },
    {
        "d": "www.parkwhiz.com",
        "b": "parking",
        "u": "http://www.parkwhiz.com/search/?destination={{{s}}}"
    },
    {
        "d": "community.particle.io",
        "b": "particleforums",
        "u": "https://community.particle.io/users/{{{s}}}/"
    },
    {
        "d": "pastebin.com",
        "b": "pastebin",
        "u": "http://pastebin.com/search?cx=partner-pub-4339714761096906%3A1qhz41g8k4m&cof=FORID%3A10&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "www.wholesalehome.com",
        "b": "pathway",
        "u": "https://www.wholesalehome.com/collections/outdoor-{{{s}}}-lighting"
    },
    {
        "d": "www.patreon.com",
        "b": "patreon",
        "u": "http://www.patreon.com/search?q={{{s}}} "
    },
    {
        "d": "www.paxinasgalegas.es",
        "b": "paxgal",
        "u": "http://www.paxinasgalegas.es/resultados.aspx?tipo=0&texto={{{s}}}"
    },
    {
        "d": "www.payscale.com",
        "b": "payscale",
        "u": "http://www.payscale.com/rcsearch.aspx?category=&str={{{s}}}&CountryName=United+States&SourceId=%2Fresearch%2FUS%2FCountry%3DUnited_States%2FSalary"
    },
    {
        "d": "pinboard.in",
        "b": "pb",
        "u": "http://pinboard.in/search/?query={{{s}}}&mine=Search+Mine"
    },
    {
        "d": "pinboard.in",
        "b": "pbtag",
        "u": "https://pinboard.in/t:{{{s}}} "
    },
    {
        "d": "www.parcello.org",
        "b": "pclo",
        "u": "https://www.parcello.org/tracking?tid={{{s}}}"
    },
    {
        "d": "www.ebi.ac.uk",
        "b": "pdbe",
        "u": "https://www.ebi.ac.uk/pdbe/entry/search/index/?searchParams={\"\"text\"\":[{\"\"value\"\":\"\"{{{s}}}\"\",\"\"condition1\"\":\"\"AND\"\",\"\"condition2\"\":\"\"Contains\"\"}]}"
    },
    {
        "d": "https://duckduckgo.com/",
        "b": "pdf",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+filetype:pdf"
    },
    {
        "d": "www.printfriendly.com",
        "b": "pdfy",
        "u": "https://www.printfriendly.com/print/?source=site&url={{{s}}}"
    },
    {
        "d": "pear.php.net",
        "b": "pear",
        "u": "http://pear.php.net/search.php?in=packages&x=0&y=0&q={{{s}}}"
    },
    {
        "d": "peekier.com",
        "b": "peek",
        "u": "https://peekier.com/#!{{{s}}}"
    },
    {
        "d": "candidat.pole-emploi.fr",
        "b": "pef",
        "u": "https://candidat.pole-emploi.fr/offres/recherche?motsCles={{{s}}}"
    },
    {
        "d": "people.zoho.com",
        "b": "people",
        "u": "https://people.zoho.com/people/#selfservice/directory/employees-searchstring={{{s}}}&searchType=0"
    },
    {
        "d": "childishgiant.github.io",
        "b": "perdola",
        "u": "https://childishgiant.github.io/perdola/?app={{{s}}}"
    },
    {
        "d": "www.printfriendly.com",
        "b": "pf",
        "u": "http://www.printfriendly.com/print/?source=site&url={{{s}}}"
    },
    {
        "d": "kontoutdrag.plusgirot.se",
        "b": "pgn",
        "u": "https://kontoutdrag.plusgirot.se/ku/sokko002?SO_KTO={{{s}}}"
    },
    {
        "d": "api.posteo.de",
        "b": "pgpkey",
        "u": "https://api.posteo.de/v1/public-keys/{{{s}}}?type=openpgp"
    },
    {
        "d": "pgp.mit.edu",
        "b": "pgp",
        "u": "https://pgp.mit.edu/pks/lookup?search={{{s}}}"
    },
    {
        "d": "careers.phenompeople.com",
        "b": "phe",
        "u": "https://careers.phenompeople.com/us/en/search-results?keywords={{{s}}}"
    },
    {
        "d": "www.careers.philips.com",
        "b": "philips",
        "u": "https://www.careers.philips.com/professional/global/en/search-results?keywords={{{s}}}"
    },
    {
        "d": "phonespell.org",
        "b": "phonespell",
        "u": "https://phonespell.org/combo.cgi?n={{{s}}}"
    },
    {
        "d": "photopin.com",
        "b": "photopin",
        "u": "http://photopin.com/search/{{{s}}}"
    },
    {
        "d": "www.phrasen.com",
        "b": "phrasen",
        "u": "https://www.phrasen.com/index.php?do=suche&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "pics",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "duckduckgo.com",
        "b": "pictures",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images"
    },
    {
        "d": "pinboard.in",
        "b": "pina",
        "u": "http://pinboard.in/search/?query={{{s}}}&all=Search+All"
    },
    {
        "d": "pinboard.in",
        "b": "pinboard",
        "u": "http://pinboard.in/search/?query={{{s}}}&mine=Search+Mine"
    },
    {
        "d": "pinboard.in",
        "b": "pinf",
        "u": "https://pinboard.in/search/?query={{{s}}}&fulltext=on"
    },
    {
        "d": "dns-tools.domaintools.com",
        "b": "ping",
        "u": "http://dns-tools.domaintools.com/?method=ping&query={{{s}}}"
    },
    {
        "d": "pinterest.com",
        "b": "pin",
        "u": "http://pinterest.com/search/pins/?q={{{s}}}"
    },
    {
        "d": "www.pin1yin1.com",
        "b": "pinyin1",
        "u": "http://www.pin1yin1.com/#{{{s}}}"
    },
    {
        "d": "www.pipilika.com",
        "b": "pipilika",
        "u": "https://www.pipilika.com/search?q={{{s}}}"
    },
    {
        "d": "pipl.com",
        "b": "pipl",
        "u": "https://pipl.com/search/?q={{{s}}}&l=&sloc=&in=5"
    },
    {
        "d": "packageradar.com",
        "b": "pkgrd",
        "u": "https://packageradar.com/form?tracking_form[tracking_number]={{{s}}}"
    },
    {
        "d": "www.packagetrackr.com",
        "b": "pkgtr",
        "u": "https://www.packagetrackr.com/track/{{{s}}}"
    },
    {
        "d": "www.planplus.rs",
        "b": "planplus",
        "u": "https://www.planplus.rs/#!pretraga/{{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "play",
        "u": "https://play.google.com/store/search?q={{{s}}}"
    },
    {
        "d": "www.playright.dk",
        "b": "playright",
        "u": "http://www.playright.dk/playright/soeg?_submit=1&_soeg=0&soeg={{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "playstore",
        "u": "https://play.google.com/store/search?q={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "plen",
        "u": "http://translate.google.com/#pl/en/{{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "plfr",
        "u": "http://dictionnaire.reverso.net/polonais-francais/{{{s}}}"
    },
    {
        "d": "www.plurk.com",
        "b": "plurk",
        "u": "https://www.plurk.com/search?q={{{s}}}"
    },
    {
        "d": "plus.codes",
        "b": "pluscodes",
        "u": "https://plus.codes/{{{s}}}"
    },
    {
        "d": "plus.codes",
        "b": "plus",
        "u": "https://plus.codes/map/{{{s}}}"
    },
    {
        "d": "pl.wikipedia.org",
        "b": "plw",
        "u": "https://pl.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.postdirekt.de",
        "b": "plz",
        "u": "https://www.postdirekt.de/plzserver/PlzSearchServlet?finda=miniapp&city={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "pmeg",
        "u": "http://duckduckgo.com/?q={{{s}}} site:http://bertilow.com/pmeg/"
    },
    {
        "d": "poal.co",
        "b": "poal",
        "u": "https://poal.co/search/{{{s}}}"
    },
    {
        "d": "app.getpocket.com",
        "b": "pocket",
        "u": "https://app.getpocket.com/search/{{{s}}}"
    },
    {
        "d": "emonitoring.poczta-polska.pl",
        "b": "poczta",
        "u": "http://emonitoring.poczta-polska.pl/?numer={{{s}}}"
    },
    {
        "d": "podio.com",
        "b": "podio",
        "u": "https://podio.com/search#/query/{{{s}}}"
    },
    {
        "d": "pathofexile.gamepedia.com",
        "b": "poe",
        "u": "http://pathofexile.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.polimi.it",
        "b": "polimi",
        "u": "https://www.polimi.it/risultati-ricerca?q={{{s}}}&cerca=Cerca"
    },
    {
        "d": "poly.google.com",
        "b": "poly",
        "u": "https://poly.google.com/search/{{{s}}}"
    },
    {
        "d": "polyratings.com",
        "b": "polyratings",
        "u": "http://polyratings.com/search.php?type=ProfName&terms={{{s}}}&format=long&sort=name"
    },
    {
        "d": "en.pons.com",
        "b": "ponsdeen",
        "u": "http://en.pons.com/translate?q={{{s}}}&l=deen&in=&lf=de"
    },
    {
        "d": "de.pons.com",
        "b": "ponsdela",
        "u": "https://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=dela"
    },
    {
        "d": "en.pons.com",
        "b": "ponsderu",
        "u": "http://en.pons.com/translate?q={{{s}}}&l=deru&in=&lf=de&cid="
    },
    {
        "d": "en.pons.com",
        "b": "ponsed",
        "u": "http://en.pons.com/translate?q={{{s}}}&l=deen&in=&lf=en"
    },
    {
        "d": "de.pons.com",
        "b": "ponsende",
        "u": "https://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=deen&in=&lf=en"
    },
    {
        "d": "pl.pons.com",
        "b": "ponsitpl",
        "u": "http://pl.pons.com/tłumaczenie?q={{{s}}}&l=itpl"
    },
    {
        "d": "pl.pons.com",
        "b": "ponsplde",
        "u": "https://pl.pons.com/tłumaczenie?q={{{s}}}&l=depl&in=&lf=de"
    },
    {
        "d": "en.pons.com",
        "b": "pons",
        "u": "https://en.pons.com/translate?q={{{s}}}"
    },
    {
        "d": "en.pons.com",
        "b": "ponspt",
        "u": "http://en.pons.com/translate?q={{{s}}}&l=enpt&in=&lf=en"
    },
    {
        "d": "www.speedguide.net",
        "b": "ports",
        "u": "http://www.speedguide.net/port.php?port={{{s}}}"
    },
    {
        "d": "www.post.at",
        "b": "postat",
        "u": "https://www.post.at/sendungsverfolgung.php/details?pnum1={{{s}}}"
    },
    {
        "d": "sporing.posten.no",
        "b": "posten",
        "u": "http://sporing.posten.no/sporing.html?lang=no&q={{{s}}}&submit="
    },
    {
        "d": "www.poste.it",
        "b": "poste",
        "u": "https://www.poste.it/cerca/index.html#/risultati-spedizioni/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ppt",
        "u": "https://duckduckgo.com/?q={{{s}}}+filetype%3Appt"
    },
    {
        "d": "emonitoring.poczta-polska.pl",
        "b": "pptrack",
        "u": "http://emonitoring.poczta-polska.pl/?lang=en&numer={{{s}}}"
    },
    {
        "d": "paizo.com",
        "b": "prd",
        "u": "http://paizo.com/search?q={{{s}}}&what=prd&includeUnrated=true&includeUnavailable=true"
    },
    {
        "d": "www.predictit.org",
        "b": "predictit",
        "u": "https://www.predictit.org/markets/search?query={{{s}}}"
    },
    {
        "d": "prostor-av.com",
        "b": "proav",
        "u": "https://prostor-av.com/search/?q={{{s}}}"
    },
    {
        "d": "processing.org",
        "b": "processing",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:processing.org"
    },
    {
        "d": "processing.org",
        "b": "proc",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:processing.org"
    },
    {
        "d": "www.producthunt.com",
        "b": "prodhun",
        "u": "http://www.producthunt.com/#!/s/posts/{{{s}}}"
    },
    {
        "d": "mail.protonmail.com",
        "b": "protonmail",
        "u": "https://mail.protonmail.com/search?keyword={{{s}}}"
    },
    {
        "d": "www.psi.ch",
        "b": "psi",
        "u": "https://www.psi.ch/search/telefonbuch-und-e-mail?q={{{s}}}"
    },
    {
        "d": "image.parsijoo.ir",
        "b": "psji",
        "u": "http://image.parsijoo.ir/image?q={{{s}}}"
    },
    {
        "d": "parsijoo.ir",
        "b": "psj",
        "u": "http://parsijoo.ir/web?q={{{s}}}"
    },
    {
        "d": "www.psu.edu",
        "b": "psu",
        "u": "http://www.psu.edu/search/gss?query={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "pten",
        "u": "https://translate.google.com/#pt/en/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "ptes",
        "u": "https://translate.google.com/#pt/es/{{{s}}}"
    },
    {
        "d": "www.ptv.vic.gov.au",
        "b": "ptv",
        "u": "https://www.ptv.vic.gov.au/search/getForm?Search={{{s}}}&action_getSearchResults=Go"
    },
    {
        "d": "eshiponline.purolator.com",
        "b": "purolator",
        "u": "https://eshiponline.purolator.com/ShipOnline/Public/Track/TrackingDetails.aspx?pin={{{s}}}"
    },
    {
        "d": "puzzling.stackexchange.com",
        "b": "puzzse",
        "u": "https://puzzling.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "haveibeenpwned.com",
        "b": "pwned",
        "u": "https://haveibeenpwned.com/account/{{{s}}}"
    },
    {
        "d": "pixabay.com",
        "b": "pxb",
        "u": "http://pixabay.com/en/photos/?q={{{s}}}"
    },
    {
        "d": "qaz.wtf",
        "b": "qaz",
        "u": "http://qaz.wtf/u/convert.cgi?text={{{s}}}"
    },
    {
        "d": "es.quora.com",
        "b": "qes",
        "u": "https://es.quora.com/search?q={{{s}}}"
    },
    {
        "d": "beta.cliqz.com",
        "b": "qli",
        "u": "https://beta.cliqz.com/search?q={{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qmaps",
        "u": "https://www.qwant.com/maps/?q={{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qm",
        "u": "https://www.qwant.com/music/search?q={{{s}}}"
    },
    {
        "d": "www.quip.com",
        "b": "qp",
        "u": "https://www.quip.com/search?q={{{s}}}"
    },
    {
        "d": "www.quora.com",
        "b": "q",
        "u": "https://www.quora.com/search?q={{{s}}}"
    },
    {
        "d": "api.qrserver.com",
        "b": "qr",
        "u": "https://api.qrserver.com/v1/create-qr-code/?qzone=1&data={{{s}}}"
    },
    {
        "d": "www.qumran2.net",
        "b": "qum",
        "u": "http://www.qumran2.net/indice.php?parole={{{s}}}"
    },
    {
        "d": "www.quora.com",
        "b": "quora",
        "u": "http://www.quora.com/search?q={{{s}}}&context_type=&context_id="
    },
    {
        "d": "quttera.com",
        "b": "quttera",
        "u": "https://quttera.com/sitescan/{{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qwant",
        "u": "https://www.qwant.com/?q={{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qwi",
        "u": "https://www.qwant.com/?q={{{s}}}&t=images"
    },
    {
        "d": "lite.qwant.com",
        "b": "qwl",
        "u": "https://lite.qwant.com/?q={{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qw",
        "u": "http://www.qwant.com/?q={{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qws",
        "u": "https://www.qwant.com/?q={{{s}}}&t=social"
    },
    {
        "d": "qwant.com",
        "b": "qwt",
        "u": "https://qwant.com/?q={{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qww",
        "u": "https://www.qwant.com/?q={{{s}}}&t=web"
    },
    {
        "d": "www.r2u.org.ua",
        "b": "r2u",
        "u": "http://www.r2u.org.ua/s?w={{{s}}}&scope=all&dicts=all&highlight=on"
    },
    {
        "d": "www.koivuniemi.com",
        "b": "raamattu",
        "u": "http://www.koivuniemi.com/raamattuhaku?tila=pikahaku&hakuehto={{{s}}}"
    },
    {
        "d": "dle.rae.es",
        "b": "rae",
        "u": "https://dle.rae.es/?w={{{s}}}"
    },
    {
        "d": "www.rallypoint.com",
        "b": "rallypoint",
        "u": "https://www.rallypoint.com/answers?q={{{s}}}"
    },
    {
        "d": "www.random.org",
        "b": "random",
        "u": "https://www.random.org/search?q={{{s}}}"
    },
    {
        "d": "ratamo.verkkokirjasto.fi",
        "b": "ratamo",
        "u": "https://ratamo.verkkokirjasto.fi/web/arena/search?p_p_id=searchResult_WAR_arenaportlets&p_r_p_687834046_search_query={{{s}}}"
    },
    {
        "d": "www.rbcroyalbank.com",
        "b": "rbc",
        "u": "https://www.rbcroyalbank.com/search-public/index.html?question={{{s}}}"
    },
    {
        "d": "www.dnswatch.info",
        "b": "rbl",
        "u": "http://www.dnswatch.info/dns/rbl-lookup?host={{{s}}}&submit=RBL+Lookup"
    },
    {
        "d": "www.reversebeacon.net",
        "b": "rbndx",
        "u": "http://www.reversebeacon.net/dxsd1/dxsd1.php?f=0&c={{{s}}}&t=dx"
    },
    {
        "d": "rbt.asia",
        "b": "rbt",
        "u": "https://rbt.asia/_/search/text/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "rcenpl",
        "u": "http://context.reverso.net/translation/english-polish/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "rcfe",
        "u": "http://context.reverso.net/translation/french-english/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "rcfrnl",
        "u": "http://context.reverso.net/translation/french-dutch/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "rcplde",
        "u": "http://context.reverso.net/t%C5%82umaczenie/niemiecki-polski/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "rcplen",
        "u": "http://context.reverso.net/translation/polish-english/{{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "rdns",
        "u": "http://mxtoolbox.com/SuperTool.aspx?action=ptr%3a{{{s}}}&run=toolpage"
    },
    {
        "d": "www.reddit.com",
        "b": "rds",
        "u": "https://www.reddit.com/r/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "recent",
        "u": "http://duckduckgo.com/?q={{{s}}}&df=w"
    },
    {
        "d": "search.earth911.com",
        "b": "recycle",
        "u": "http://search.earth911.com/?what={{{s}}}"
    },
    {
        "d": "redbot.org",
        "b": "redbot",
        "u": "http://redbot.org/?uri={{{s}}}"
    },
    {
        "d": "old.reddit.com",
        "b": "redditold",
        "u": "https://old.reddit.com/search?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "reddits",
        "u": "http://www.reddit.com/r/{{{s}}}"
    },
    {
        "d": "www.redfin.com",
        "b": "redfin",
        "u": "http://www.redfin.com/homes-for-sale#!search_location={{{s}}}"
    },
    {
        "d": "www.relcdetroit.org",
        "b": "redford",
        "u": "http://www.relcdetroit.org/index.php?p_id=1{{{s}}}"
    },
    {
        "d": "www.reed.co.uk",
        "b": "reed",
        "u": "http://www.reed.co.uk/job/searchresults.aspx?k={{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reenes",
        "u": "http://dictionary.reverso.net/english-spanish/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reenfr",
        "u": "http://dictionary.reverso.net/english-french/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reen",
        "u": "http://dictionary.reverso.net/english-definition/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reesen",
        "u": "http://dictionary.reverso.net/spanish-english/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reesfr",
        "u": "http://dictionary.reverso.net/spanish-french/{{{s}}}"
    },
    {
        "d": "woerterbuch.reverso.net",
        "b": "reesge",
        "u": "http://woerterbuch.reverso.net/spanisch-deutsch/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "rees",
        "u": "http://dictionary.reverso.net/spanish-definition/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "refreb",
        "u": "http://dictionary.reverso.net/french-english/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "refres",
        "u": "http://dictionary.reverso.net/french-spanish/{{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "refrge",
        "u": "http://dictionnaire.reverso.net/francais-allemand/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "refr",
        "u": "http://dictionary.reverso.net/french-definition/{{{s}}}"
    },
    {
        "d": "woerterbuch.reverso.net",
        "b": "regees",
        "u": "http://woerterbuch.reverso.net/deutsch-spanisch/{{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "regefr",
        "u": "http://dictionnaire.reverso.net/allemand-francais/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "rege",
        "u": "http://dictionary.reverso.net/german-definition/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "r-es",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=es-es"
    },
    {
        "d": "cekresi.com",
        "b": "resi",
        "u": "http://cekresi.com/?noresi={{{s}}}"
    },
    {
        "d": "www.resto.lu",
        "b": "restolu",
        "u": "http://www.resto.lu/fr/Luxembourg/guide.cfm?searchmode=classic&RESTOTYPE=isresto&nom={{{s}}}&idcuisine_type=&ville=&region=&idprix=ddg@pivert.org"
    },
    {
        "d": "dsn.dk",
        "b": "retskriv",
        "u": "https://dsn.dk/?retskriv={{{s}}}&ae=0"
    },
    {
        "d": "retty.me",
        "b": "retty",
        "u": "https://retty.me/restaurant-search/search-result/?free_word_category={{{s}}}"
    },
    {
        "d": "www.reverseaustralia.com",
        "b": "revau",
        "u": "http://www.reverseaustralia.com/search.php?search={{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "revenit",
        "u": "http://context.reverso.net/translation/english-italian/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "revesen",
        "u": "http://context.reverso.net/translation/spanish-english/{{{s}}} "
    },
    {
        "d": "dictionary.reverso.net",
        "b": "revgf",
        "u": "https://dictionary.reverso.net/german-french/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "reviten",
        "u": "http://context.reverso.net/translation/italian-english/{{{s}}}"
    },
    {
        "d": "www.reta-vortaro.de",
        "b": "revo",
        "u": "http://www.reta-vortaro.de/cgi-bin/sercxu.pl?sercxata={{{s}}}&x=on&kadroj=1"
    },
    {
        "d": "refind.com",
        "b": "rfd",
        "u": "https://refind.com/?q={{{s}}}"
    },
    {
        "d": "reverseip.domaintools.com",
        "b": "rip",
        "u": "https://reverseip.domaintools.com/search/?q={{{s}}}"
    },
    {
        "d": "stat.ripe.net",
        "b": "ripestat",
        "u": "http://stat.ripe.net/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "riten",
        "u": "http://context.reverso.net/translation/italian-english/{{{s}}}"
    },
    {
        "d": "reestr.rublacklist.net",
        "b": "rkn",
        "u": "https://reestr.rublacklist.net/search/?q={{{s}}}"
    },
    {
        "d": "www.royalmail.com",
        "b": "rmail",
        "u": "https://www.royalmail.com/track-your-item#/tracking-results/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rmelb",
        "u": "https://www.reddit.com/r/melbourne/search?q={{{s}}}&restrict_sr=on&sort=relevance&t=all"
    },
    {
        "d": "www.ratemyprofessors.com",
        "b": "rmp",
        "u": "http://www.ratemyprofessors.com/search.jsp?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "r-nl",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=nl-nl"
    },
    {
        "d": "duckduckgo.com",
        "b": "rnl",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=nl-nl"
    },
    {
        "d": "india.recruit.net",
        "b": "rn",
        "u": "http://india.recruit.net/search.html?query={{{s}}}&location=delhi"
    },
    {
        "d": "rockethub.com",
        "b": "rockethub",
        "u": "http://rockethub.com/projects?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.dictionar-finlandez.net",
        "b": "rofi",
        "u": "http://www.dictionar-finlandez.net/online/?word={{{s}}}"
    },
    {
        "d": "old.reddit.com",
        "b": "rold",
        "u": "https://old.reddit.com/search?q={{{s}}}"
    },
    {
        "d": "www.romajidesu.com",
        "b": "romajidesukanji",
        "u": "http://www.romajidesu.com/kanji/{{{s}}} "
    },
    {
        "d": "decode.org",
        "b": "rot13",
        "u": "http://decode.org/?q={{{s}}}"
    },
    {
        "d": "www.google.de",
        "b": "route",
        "u": "https://www.google.de/maps/dir/{{{s}}}"
    },
    {
        "d": "pad.riseup.net",
        "b": "rpad",
        "u": "https://pad.riseup.net/p/{{{s}}}"
    },
    {
        "d": "www.whitepages.com",
        "b": "rphone",
        "u": "http://www.whitepages.com/phone/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rprivacy",
        "u": "https://www.reddit.com/r/privacy/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "www.reddit.com",
        "b": "r",
        "u": "https://www.reddit.com/search?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rsn",
        "u": "https://www.reddit.com/r/{{{s}}}/new/"
    },
    {
        "d": "www.rsssearchhub.com",
        "b": "rsssh",
        "u": "http://www.rsssearchhub.com/feeds/?search={{{s}}}"
    },
    {
        "d": "www.rememberthemilk.com",
        "b": "rtm",
        "u": "https://www.rememberthemilk.com/app/#search/{{{s}}}"
    },
    {
        "d": "www.realtimetrains.co.uk",
        "b": "rtt",
        "u": "http://www.realtimetrains.co.uk/search/handler?type=basic&qs=true&search={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "rufr",
        "u": "https://translate.google.com/#ru/fr/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "r-uk",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=uk-en"
    },
    {
        "d": "duckduckgo.com",
        "b": "r-us",
        "u": "https://duckduckgo.com/?q={{{s}}}&kl=us-en"
    },
    {
        "d": "www.reddit.com",
        "b": "rusr",
        "u": "https://www.reddit.com/user/{{{s}}}/"
    },
    {
        "d": "thereaderwiki.com",
        "b": "rwiki",
        "u": "https://thereaderwiki.com/en/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "ryear",
        "u": "http://www.reddit.com/search?q={{{s}}}&t=year"
    },
    {
        "d": "https://duckduckgo.com/",
        "b": "safe",
        "u": "https://duckduckgo.com/search/?q={{{s}}}&kp=1"
    },
    {
        "d": "https://duckduckgo.com/",
        "b": "safeoff",
        "u": "https://duckduckgo.com/search/?q={{{s}}}&kp=-2"
    },
    {
        "d": "https://duckduckgo.com/",
        "b": "safeon",
        "u": "https://duckduckgo.com/search/?q={{{s}}}&kp=1"
    },
    {
        "d": "safeweb.norton.com",
        "b": "safeweb",
        "u": "https://safeweb.norton.com/report/show?url={{{s}}}"
    },
    {
        "d": "www.sailguide.com",
        "b": "sailguide",
        "u": "http://www.sailguide.com/boats?boatname={{{s}}}"
    },
    {
        "d": "www.sanakirja.org",
        "b": "sana",
        "u": "http://www.sanakirja.org/search.php?q={{{s}}}"
    },
    {
        "d": "svenska.se",
        "b": "saob",
        "u": "https://svenska.se/tre/?sok={{{s}}}&pz=1"
    },
    {
        "d": "svenska.se",
        "b": "saol",
        "u": "https://svenska.se/tre/?sok={{{s}}}"
    },
    {
        "d": "pesquisa.sapo.pt",
        "b": "sapo",
        "u": "http://pesquisa.sapo.pt/?barra=&q={{{s}}}"
    },
    {
        "d": "www.search.ask.com",
        "b": "sask",
        "u": "http://www.search.ask.com/web?q={{{s}}}"
    },
    {
        "d": "www.saugus.net",
        "b": "saugus",
        "u": "https://www.saugus.net/cgi-bin/htsearch?config=htdig&restrict=&exclude=&words={{{s}}}&method=and&format=long"
    },
    {
        "d": "web.archive.org",
        "b": "saveback",
        "u": "https://web.archive.org/save/{{{s}}}"
    },
    {
        "d": "web.archive.org",
        "b": "save",
        "u": "https://web.archive.org/save/{{{s}}}"
    },
    {
        "d": "dev.eoils.de",
        "b": "sbbb",
        "u": "https://dev.eoils.de/contents/b/index.php?station={{{s}}}"
    },
    {
        "d": "www.sbb.ch",
        "b": "sbb",
        "u": "https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?nach={{{s}}}&suche=false"
    },
    {
        "d": "www.reddit.com",
        "b": "sbr",
        "u": "http://www.reddit.com/r/{{{s}}}"
    },
    {
        "d": "www.swagbucks.com",
        "b": "sb",
        "u": "http://www.swagbucks.com/?t=w&p=1&b=0&f=0&sef=1&q={{{s}}}"
    },
    {
        "d": "socialblade.com",
        "b": "sbt",
        "u": "https://socialblade.com/twitter/user/{{{s}}}"
    },
    {
        "d": "www.stopbadware.org",
        "b": "sbw",
        "u": "https://www.stopbadware.org/clearinghouse/search/?url={{{s}}}"
    },
    {
        "d": "socialblade.com",
        "b": "sbyt",
        "u": "http://socialblade.com/youtube/user/{{{s}}}"
    },
    {
        "d": "www.scania.com",
        "b": "scania",
        "u": "https://www.scania.com/global/en/home/misc/searchresult.html?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "sca",
        "u": "https://www.reddit.com/r/skincareaddiction/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "www.scheidung.de",
        "b": "scheidung",
        "u": "https://www.scheidung.de/suche.html?tx_kesearch_pi1%5Bsword%5D={{{s}}}"
    },
    {
        "d": "scholar.google.com",
        "b": "scholar",
        "u": "http://scholar.google.com/scholar?q={{{s}}}&btnG=Search&as_sdt=800000000001&as_sdtp=on"
    },
    {
        "d": "startpage.com",
        "b": "sch",
        "u": "https://startpage.com/do/search?cmd=process_search&query={{{s}}}&language=deutsch&with_region=countryCH"
    },
    {
        "d": "www.google.com",
        "b": "scienceblogs",
        "u": "http://www.google.com/cse?cx=017254414699180528062%3Auyrcvn__yd0&q={{{s}}}"
    },
    {
        "d": "api.sck.pm",
        "b": "sck",
        "u": "https://api.sck.pm/shorten?{{{s}}}"
    },
    {
        "d": "www.scoop.it",
        "b": "scoop",
        "u": "http://www.scoop.it/search?q={{{s}}}"
    },
    {
        "d": "www.slant.co",
        "b": "sco",
        "u": "https://www.slant.co/search?query={{{s}}}"
    },
    {
        "d": "slovnik-cizich-slov.abz.cz",
        "b": "scz",
        "u": "http://slovnik-cizich-slov.abz.cz/web.php/hledat?typ_hledani=prefix&cizi_slovo={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "sde",
        "u": "https://startpage.com/do/search?cmd=process_search&query={{{s}}}&language=deutsch"
    },
    {
        "d": "www.searchbug.com",
        "b": "searchbug",
        "u": "http://www.searchbug.com/tools/reverse-phone-lookup.aspx?TYPE=phonerev&TAG=tools&FULLPHONE={{{s}}}"
    },
    {
        "d": "www.search.ch",
        "b": "searchch",
        "u": "http://www.search.ch/?q={{{s}}}&search=Suchen"
    },
    {
        "d": "www.search.com",
        "b": "search",
        "u": "http://www.search.com/search?q={{{s}}}"
    },
    {
        "d": "searx.me",
        "b": "searx.me",
        "u": "http://searx.me/?q={{{s}}}&pageno=1&category_general"
    },
    {
        "d": "searx.me",
        "b": "searx",
        "u": "https://searx.me/?q={{{s}}}"
    },
    {
        "d": "www.search.ch",
        "b": "sech",
        "u": "https://www.search.ch/?q={{{s}}}"
    },
    {
        "d": "infosec-jobs.com",
        "b": "secjobs",
        "u": "https://infosec-jobs.com/?search_keywords={{{s}}}"
    },
    {
        "d": "www.seek.com.au",
        "b": "seek",
        "u": "http://www.seek.com.au/JobSearch?SearchFrom=quick&Keywords={{{s}}}"
    },
    {
        "d": "seenthis.net",
        "b": "seen",
        "u": "http://seenthis.net/spip.php?page=recherche&recherche={{{s}}}"
    },
    {
        "d": "meta.stackexchange.com",
        "b": "semeta",
        "u": "https://meta.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.semrush.com",
        "b": "semrush",
        "u": "https://www.semrush.com/info/{{{s}}}+(full+search)"
    },
    {
        "d": "www.searchencrypt.com",
        "b": "senc",
        "u": "https://www.searchencrypt.com/search?eq={{{s}}}"
    },
    {
        "d": "sentencedict.com",
        "b": "sendict",
        "u": "http://sentencedict.com/{{{s}}}.html"
    },
    {
        "d": "www.seriebox.com",
        "b": "seriebox",
        "u": "http://www.seriebox.com/search.php?txt={{{s}}} &submit=OK"
    },
    {
        "d": "stackexchange.com",
        "b": "se",
        "u": "http://stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "search.seznam.cz",
        "b": "seznam",
        "u": "http://search.seznam.cz/?q={{{s}}}"
    },
    {
        "d": "www.stopforumspam.com",
        "b": "sfs",
        "u": "http://www.stopforumspam.com/search?q={{{s}}}"
    },
    {
        "d": "soundeffectssearch.com",
        "b": "sfxsearch",
        "u": "http://soundeffectssearch.com/find-a-sound-library/?library={{{s}}}"
    },
    {
        "d": "www.hebcal.com",
        "b": "shabbat",
        "u": "https://www.hebcal.com/shabbat/?cfg=json&m=50&b=18&zip={{{s}}}&a=on"
    },
    {
        "d": "cortas.elpais.com",
        "b": "shorten",
        "u": "http://cortas.elpais.com/encode.pl?u=http://{{{s}}}"
    },
    {
        "d": "symbolhound.com",
        "b": "sho",
        "u": "http://symbolhound.com/?q={{{s}}}"
    },
    {
        "d": "br.shouldianswer.net",
        "b": "siabr",
        "u": "https://br.shouldianswer.net/numero-de-telefone/?q={{{s}}}"
    },
    {
        "d": "www.similarsites.com",
        "b": "similar",
        "u": "http://www.similarsites.com/site/{{{s}}}"
    },
    {
        "d": "www.similarweb.com",
        "b": "similarweb",
        "u": "http://www.similarweb.com/website/{{{s}}}"
    },
    {
        "d": "www.simplyhired.com",
        "b": "simplyhired",
        "u": "http://www.simplyhired.com/a/jobs/list/q-{{{s}}}"
    },
    {
        "d": "sinonimi.it",
        "b": "sinonimit",
        "u": "http://sinonimi.it/{{{s}}}"
    },
    {
        "d": "www.sinonimos.com.br",
        "b": "sinonimos",
        "u": "https://www.sinonimos.com.br/{{{s}}}"
    },
    {
        "d": "www.sirogohan.com",
        "b": "sirogohan",
        "u": "https://www.sirogohan.com/recipe/index/keyword: {{{s}}}"
    },
    {
        "d": "la-lojban.github.io",
        "b": "sisku",
        "u": "https://la-lojban.github.io/sutysisku/en/#sisku/{{{s}}}"
    },
    {
        "d": "www.sitealytics.com",
        "b": "sitealytics",
        "u": "http://www.sitealytics.com/{{{s}}}/"
    },
    {
        "d": "duckduckgo.com",
        "b": "site",
        "u": "https://duckduckgo.com/?q=site%3A{{{s}}}"
    },
    {
        "d": "www.siteslike.com",
        "b": "siteslike",
        "u": "http://www.siteslike.com/similar/{{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "sjmr",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:socjobrumors.com"
    },
    {
        "d": "www.sitejabber.com",
        "b": "sj",
        "u": "https://www.sitejabber.com/search?q={{{s}}}"
    },
    {
        "d": "sk8park.de",
        "b": "sk8",
        "u": "https://sk8park.de/?s={{{s}}}"
    },
    {
        "d": "www.sanakirja.org",
        "b": "skenfi",
        "u": "http://www.sanakirja.org/search.php?l=3&l2=17&q={{{s}}}"
    },
    {
        "d": "www.skipthedrive.com",
        "b": "skipthedrive",
        "u": "http://www.skipthedrive.com/jobs/?search={{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "skyscan",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:http://www.skyscanner.net"
    },
    {
        "d": "skyvector.com",
        "b": "skyvector",
        "u": "https://skyvector.com/search/site/{{{s}}}"
    },
    {
        "d": "www.slader.com",
        "b": "slader",
        "u": "http://www.slader.com/search/?search_query={{{s}}}"
    },
    {
        "d": "www.slant.co",
        "b": "slant",
        "u": "http://www.slant.co/topics/?search={{{s}}}"
    },
    {
        "d": "www.lightningdesignsystem.com",
        "b": "slds",
        "u": "https://www.lightningdesignsystem.com/components/{{{s}}}"
    },
    {
        "d": "www.slideshare.net",
        "b": "slideshare",
        "u": "http://www.slideshare.net/search/slideshow?q={{{s}}}&submit=post&commit=Search"
    },
    {
        "d": "www.searchlock.com",
        "b": "slk",
        "u": "https://www.searchlock.com/search?q={{{s}}}"
    },
    {
        "d": "www.searchlock.com",
        "b": "slocki",
        "u": "https://www.searchlock.com/search?tbm=isch&q={{{s}}}"
    },
    {
        "d": "www.searchlock.com",
        "b": "slock",
        "u": "https://www.searchlock.com/search?q={{{s}}}"
    },
    {
        "d": "www.searchlotto.co.uk",
        "b": "slo",
        "u": "https://www.searchlotto.co.uk/yhs_search.php?q={{{s}}}"
    },
    {
        "d": "www.sololearn.com",
        "b": "slqa",
        "u": "https://www.sololearn.com/Discuss?ordering=Trending&query={{{s}}}"
    },
    {
        "d": "streetmap.co.uk",
        "b": "smap",
        "u": "http://streetmap.co.uk/postcode/{{{s}}}"
    },
    {
        "d": "smartsearch.altervista.org",
        "b": "smartsearch",
        "u": "http://smartsearch.altervista.org/?q={{{s}}} "
    },
    {
        "d": "smashbomb.com",
        "b": "smashbomb",
        "u": "https://smashbomb.com/search?keyword={{{s}}}"
    },
    {
        "d": "socialmention.com",
        "b": "smention",
        "u": "http://socialmention.com/search?q={{{s}}}"
    },
    {
        "d": "api.posteo.de",
        "b": "smime",
        "u": "https://api.posteo.de/v1/public-keys/{{{s}}}?type=smime"
    },
    {
        "d": "snapzu.com",
        "b": "snap",
        "u": "http://snapzu.com/find/{{{s}}}"
    },
    {
        "d": "websniffer.cc",
        "b": "sniff",
        "u": "https://websniffer.cc/?url={{{s}}}"
    },
    {
        "d": "www.startpage.com",
        "b": "snih",
        "u": "https://www.startpage.com/do/search?q={{{s}}}&l=nihongo"
    },
    {
        "d": "www.snoopsnoo.com",
        "b": "snoopsnoo",
        "u": "https://www.snoopsnoo.com/u/{{{s}}}"
    },
    {
        "d": "www.startpage.com",
        "b": "sno",
        "u": "https://www.startpage.com/do/search?cmd=process_search&query={{{s}}}&with_region=countryNO"
    },
    {
        "d": "www.societe.com",
        "b": "societe",
        "u": "http://www.societe.com/cgi-bin/search?champs={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "socompanies",
        "u": "https://stackoverflow.com/jobs/companies?q={{{s}}}"
    },
    {
        "d": "careers.stackoverflow.com",
        "b": "socp",
        "u": "http://careers.stackoverflow.com/companies?searchTerm={{{s}}}"
    },
    {
        "d": "careers.stackoverflow.com",
        "b": "soc",
        "u": "http://careers.stackoverflow.com/jobs?searchTerm={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "soff",
        "u": "https://duckduckgo.com/?kp=-2&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "s-off",
        "u": "https://duckduckgo.com/?q={{{s}}}&kp=-2"
    },
    {
        "d": "www.sogou.com",
        "b": "sogou",
        "u": "https://www.sogou.com/web?query={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "sojob",
        "u": "https://stackoverflow.com/jobs?q={{{s}}}"
    },
    {
        "d": "solo.bodleian.ox.ac.uk",
        "b": "soloj",
        "u": "http://solo.bodleian.ox.ac.uk/primo-explore/search?query=any,contains,{{{s}}}&tab=local&search_scope=LSCOP_ALL&vid=SOLO&facet=rtype,include,journals&lang=en_US&offset=0"
    },
    {
        "d": "duckduckgo.com",
        "b": "s-on",
        "u": "https://duckduckgo.com/?q={{{s}}}&kp=1"
    },
    {
        "d": "www.so-net.ne.jp",
        "b": "sonet",
        "u": "https://www.so-net.ne.jp/search/web/?query={{{s}}}"
    },
    {
        "d": "odesli.co",
        "b": "songlink",
        "u": "https://odesli.co/embed?url={{{s}}}"
    },
    {
        "d": "www.sorocaba.sp.gov.br",
        "b": "sorocaba",
        "u": "http://www.sorocaba.sp.gov.br/pesquisar/?q={{{s}}}"
    },
    {
        "d": "www.soso.com",
        "b": "soso",
        "u": "http://www.soso.com/q?pid=s.idx&w={{{s}}}"
    },
    {
        "d": "www.sogou.com",
        "b": "sougou",
        "u": "https://www.sogou.com/web?query={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "soxl",
        "u": "http://stackoverflow.com/search?q=[excel]+{{{s}}}"
    },
    {
        "d": "www.spanishdict.com",
        "b": "spandict",
        "u": "http://www.spanishdict.com/translate/{{{s}}}"
    },
    {
        "d": "www.spanishdict.com",
        "b": "spanishd",
        "u": "http://www.spanishdict.com/translate/{{{s}}}"
    },
    {
        "d": "www.spartan-donate.com",
        "b": "spartan",
        "u": "https://www.spartan-donate.com/?s={{{s}}}"
    },
    {
        "d": "speiderbasen.no",
        "b": "spb",
        "u": "https://speiderbasen.no/?searchWord={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "spen",
        "u": "https://startpage.com/do/dsearch?query={{{s}}}&cat=web&pl=opensearch&language=english"
    },
    {
        "d": "startpage.com",
        "b": "spes",
        "u": "https://startpage.com/do/dsearch?query={{{s}}}&cat=web&pl=opensearch&language=espanol"
    },
    {
        "d": "startpage.com",
        "b": "spe",
        "u": "https://startpage.com/do/dsearch?query={{{s}}}&cat=web&pl=opensearch&language=espanol"
    },
    {
        "d": "www.spin.de",
        "b": "spin",
        "u": "https://www.spin.de/search?q={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "spi",
        "u": "https://startpage.com/do/search?cat=pics&cmd=process_search&query={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "spit",
        "u": "https://startpage.com/do/search?cat=web&cmd=process_search&language=italiano&engine0=v1all&query={{{s}}}&abp=-1&prf=ab8a0a99ccae7d38fd1f9b31e845ce7e&SuggestOn=1"
    },
    {
        "d": "startpage.com",
        "b": "spm",
        "u": "https://startpage.com/do/m/mobilesearch?&q={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "spnl",
        "u": "https://startpage.com/do/search?l=nederlands&q={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "sppit",
        "u": "https://startpage.com/do/search?prf=77fe802d54508e9ee48b88624be6da56&cat=web&query={{{s}}}"
    },
    {
        "d": "www.startpage.com",
        "b": "sppl",
        "u": "https://www.startpage.com/do/dsearch?query={{{s}}}&cat=web&pl=opensearch&language=polski"
    },
    {
        "d": "startpage.com",
        "b": "spp",
        "u": "https://startpage.com/do/search?prf=2cc506ab255c98e10570b7d50ef6b1c8&cat=web&query={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "sp",
        "u": "https://startpage.com/do/metasearch.pl?query={{{s}}}"
    },
    {
        "d": "search.privacytools.io",
        "b": "sptio",
        "u": "https://search.privacytools.io/?q={{{s}}}"
    },
    {
        "d": "www.sputnik.ru",
        "b": "sputnik",
        "u": "http://www.sputnik.ru/search?q={{{s}}}"
    },
    {
        "d": "www.startpage.com",
        "b": "spv",
        "u": "https://www.startpage.com/do/search?cat=video&cmd=process_search&query={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "srhu",
        "u": "https://translate.google.com/#sr/hu/{{{s}}} "
    },
    {
        "d": "old.reddit.com",
        "b": "srold",
        "u": "https://old.reddit.com/r/{{{s}}}/"
    },
    {
        "d": "www.reddit.com",
        "b": "srs",
        "u": "https://www.reddit.com/search?q=subreddit:{{{s}}}"
    },
    {
        "d": "srthealing.com",
        "b": "srtblog",
        "u": "https://srthealing.com/?s={{{s}}}"
    },
    {
        "d": "bos.zrc-sazu.si",
        "b": "sskj",
        "u": "http://bos.zrc-sazu.si/cgi/a03.exe?name=sskj_testa&expression={{{s}}}&hs=1"
    },
    {
        "d": "duckduckgo.com",
        "b": "ssoff",
        "u": "https://duckduckgo.com/?q={{{s}}}&kp=-2"
    },
    {
        "d": "duckduckgo.com",
        "b": "sson",
        "u": "https://duckduckgo.com/?q={{{s}}}&kp=1"
    },
    {
        "d": "www.similarsitesearch.com",
        "b": "ssses",
        "u": "http://www.similarsitesearch.com/es/sitio/{{{s}}}"
    },
    {
        "d": "www.similarsitesearch.com",
        "b": "sss",
        "u": "https://www.similarsitesearch.com/alternatives-to/{{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "s",
        "u": "http://startpage.com/do/metasearch.pl?query={{{s}}}"
    },
    {
        "d": "bibliothek.hannover-stadt.de",
        "b": "stabihannover",
        "u": "https://bibliothek.hannover-stadt.de/alswww3.dll/APS_ZONES?fn=SEARCH?q={{{s}}}"
    },
    {
        "d": "stackexchange.com",
        "b": "stackexchange",
        "u": "http://stackexchange.com/search?q={{{s}}} "
    },
    {
        "d": "www.abbreviations.com",
        "b": "standsfor",
        "u": "http://www.abbreviations.com/{{{s}}}"
    },
    {
        "d": "starmadedock.net",
        "b": "starmadedock",
        "u": "https://starmadedock.net/search/1/?q={{{s}}}"
    },
    {
        "d": "startpage.com",
        "b": "startpageimages",
        "u": "https://startpage.com/do/search?cat=pics&cmd=process_search&query={{{s}}}"
    },
    {
        "d": "www.startpage.com",
        "b": "startpage",
        "u": "https://www.startpage.com/do/dsearch?query={{{s}}}&cat=web&pl=opensearch"
    },
    {
        "d": "startpage.com",
        "b": "startpagevideos",
        "u": "https://startpage.com/do/search?cat=video&cmd=process_search&query={{{s}}}"
    },
    {
        "d": "www.startpage.com",
        "b": "start",
        "u": "https://www.startpage.com/do/dsearch?query={{{s}}}"
    },
    {
        "d": "startup.jobs",
        "b": "startupjobs",
        "u": "https://startup.jobs/?q={{{s}}}"
    },
    {
        "d": "stadtplan-ilmenau.de",
        "b": "stdtplnlmn",
        "u": "http://stadtplan-ilmenau.de/?query={{{s}}}"
    },
    {
        "d": "tab-bot.net",
        "b": "steam2twitch",
        "u": "http://tab-bot.net/botcheck?twitchname_botcheck=&steam_botcheck={{{s}}}"
    },
    {
        "d": "steamid.io",
        "b": "steamio",
        "u": "https://steamid.io/lookup/{{{s}}}"
    },
    {
        "d": "www.asksteem.com",
        "b": "steem",
        "u": "https://www.asksteem.com/search?q={{{s}}}"
    },
    {
        "d": "stellarfed.org",
        "b": "stellar",
        "u": "https://stellarfed.org/search?q={{{s}}}"
    },
    {
        "d": "stackexchange.com",
        "b": "stex",
        "u": "http://stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.stib-mivb.be",
        "b": "stib",
        "u": "http://www.stib-mivb.be/horaires-dienstregeling2.html?l=en&linecode={{{s}}}"
    },
    {
        "d": "stockflare.com",
        "b": "$",
        "u": "https://stockflare.com/#stocks/${{{s}}} "
    },
    {
        "d": "storybank.id",
        "b": "storybank",
        "u": "https://storybank.id/?s={{{s}}}"
    },
    {
        "d": "www.tritrans.net",
        "b": "strans",
        "u": "http://www.tritrans.net/cgibin/translate.cgi?spraak=Spansk&Fra={{{s}}}"
    },
    {
        "d": "www.strava.com",
        "b": "strava",
        "u": "https://www.strava.com/athletes/search?utf8=✓&text={{{s}}}&gsf=1"
    },
    {
        "d": "www.spreadthesign.com",
        "b": "stsde",
        "u": "https://www.spreadthesign.com/de.de/search/?q={{{s}}}"
    },
    {
        "d": "sublevel.net",
        "b": "sublevel",
        "u": "https://sublevel.net/search/?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "subreddit",
        "u": "http://www.reddit.com/r/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "subredditsearch",
        "u": "http://www.reddit.com/search?q=subreddit:{{{s}}}"
    },
    {
        "d": "searchvoat.co",
        "b": "subverse",
        "u": "https://searchvoat.co/subverses/?q={{{s}}}"
    },
    {
        "d": "sitecheck.sucuri.net",
        "b": "sucuri",
        "u": "https://sitecheck.sucuri.net/results/{{{s}}}"
    },
    {
        "d": "www.colissimo.fr",
        "b": "suivicolissimo",
        "u": "http://www.colissimo.fr/portail_colissimo/suivre.do?language=fr_FR&parcelnumber={{{s}}}"
    },
    {
        "d": "www.csuivi.courrier.laposte.fr",
        "b": "suivicourrier",
        "u": "http://www.csuivi.courrier.laposte.fr/suivi/index?id={{{s}}}#"
    },
    {
        "d": "search.sulekha.com",
        "b": "sulekha",
        "u": "http://search.sulekha.com/sulekhasearch.aspx?txtsearch={{{s}}}"
    },
    {
        "d": "sum.in.ua",
        "b": "sum",
        "u": "http://sum.in.ua/?swrd={{{s}}} "
    },
    {
        "d": "help.surveygizmo.com",
        "b": "surveygizmo",
        "u": "https://help.surveygizmo.com/help/search/?phrase={{{s}}}"
    },
    {
        "d": "www.surveymonkey.com",
        "b": "survey",
        "u": "https://www.surveymonkey.com/dashboard/?term{{{s}}}"
    },
    {
        "d": "susi.at",
        "b": "susi",
        "u": "http://susi.at/suche/{{{s}}}/"
    },
    {
        "d": "www.svb.com",
        "b": "svb",
        "u": "http://www.svb.com/searchresults.aspx?term={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "svde",
        "u": "https://translate.google.com/#sv/de/{{{s}}}"
    },
    {
        "d": "translate.google.se",
        "b": "svpt",
        "u": "https://translate.google.se/#sv/pt/{{{s}}}"
    },
    {
        "d": "swagbucks.com",
        "b": "swagbucks",
        "u": "https://swagbucks.com/?q={{{s}}}"
    },
    {
        "d": "sweetsearch.com",
        "b": "sweetsearch",
        "u": "http://sweetsearch.com/search?q={{{s}}}"
    },
    {
        "d": "swisscows.com",
        "b": "swisscows",
        "u": "https://swisscows.com/?query={{{s}}}"
    },
    {
        "d": "www.post.ch",
        "b": "swisspost",
        "u": "https://www.post.ch/EasyTrack/submitParcelData.do?formattedParcelCodes={{{s}}}"
    },
    {
        "d": "stackexchange.com",
        "b": "sx",
        "u": "http://stackexchange.com/search?q={{{s}}} "
    },
    {
        "d": "startpage.com",
        "b": "syear",
        "u": "https://startpage.com/do/metasearch.pl?query={{{s}}}&with_date=y"
    },
    {
        "d": "www.synonymes.com",
        "b": "syfr",
        "u": "http://www.synonymes.com/resultats.php?mot={{{s}}}"
    },
    {
        "d": "www.symbolab.com",
        "b": "symbolab",
        "u": "https://www.symbolab.com/solver/step-by-step/{{{s}}}"
    },
    {
        "d": "www.sympygamma.com",
        "b": "sympy",
        "u": "http://www.sympygamma.com/input/?i={{{s}}}"
    },
    {
        "d": "sync.me",
        "b": "syncme",
        "u": "https://sync.me/search/?number={{{s}}}"
    },
    {
        "d": "synoniemen.net",
        "b": "synoniem",
        "u": "http://synoniemen.net/index.php?zoekterm={{{s}}}"
    },
    {
        "d": "www.eki.ee",
        "b": "sys",
        "u": "http://www.eki.ee/dict/sys/index.cgi?Q={{{s}}}&F=M&C06=en"
    },
    {
        "d": "www.systranet.com",
        "b": "systranet",
        "u": "http://www.systranet.com/translate?text={{{s}}}"
    },
    {
        "d": "slovnik.seznam.cz",
        "b": "sznsde",
        "u": "http://slovnik.seznam.cz/de/?q={{{s}}}"
    },
    {
        "d": "search.seznam.cz",
        "b": "szn",
        "u": "http://search.seznam.cz/?q={{{s}}}"
    },
    {
        "d": "slovnik.seznam.cz",
        "b": "szns",
        "u": "http://slovnik.seznam.cz/?q={{{s}}}"
    },
    {
        "d": "www.szotar.net",
        "b": "szotar",
        "u": "https://www.szotar.net/mind/{{{s}}}/"
    },
    {
        "d": "szotar.sztaki.hu",
        "b": "sztaki",
        "u": "http://szotar.sztaki.hu/search?searchWord={{{s}}}"
    },
    {
        "d": "taaladvies.net",
        "b": "taaladvies",
        "u": "https://taaladvies.net/taal/advies/zoek.php?q={{{s}}}"
    },
    {
        "d": "www.tabroom.com",
        "b": "tabroom",
        "u": "https://www.tabroom.com/index/search.mhtml?search={{{s}}}"
    },
    {
        "d": "tagfinder.herokuapp.com",
        "b": "tagfinder",
        "u": "https://tagfinder.herokuapp.com/search?query={{{s}}}"
    },
    {
        "d": "taginfo.openstreetmap.ch",
        "b": "taginfoch",
        "u": "http://taginfo.openstreetmap.ch/search?q={{{s}}}"
    },
    {
        "d": "taginfo.openstreetmap.org",
        "b": "taginfo",
        "u": "https://taginfo.openstreetmap.org/search?q={{{s}}}"
    },
    {
        "d": "www.therapistaid.com",
        "b": "taid",
        "u": "https://www.therapistaid.com/search?query={{{s}}}"
    },
    {
        "d": "www.tripadvisor.in",
        "b": "tain",
        "u": "https://www.tripadvisor.in/Search?q={{{s}}}"
    },
    {
        "d": "talky.io",
        "b": "talky",
        "u": "https://talky.io/{{{s}}}"
    },
    {
        "d": "tapwage.com",
        "b": "tapwage",
        "u": "https://tapwage.com/search?q={{{s}}}"
    },
    {
        "d": "mapa.targeo.pl",
        "b": "targeo",
        "u": "http://mapa.targeo.pl/{{{s}}}"
    },
    {
        "d": "www.taringa.net",
        "b": "tar",
        "u": "http://www.taringa.net/buscar/?q={{{s}}}"
    },
    {
        "d": "www.tripadvisor.co.uk",
        "b": "tauk",
        "u": "https://www.tripadvisor.co.uk/Search?q={{{s}}}"
    },
    {
        "d": "isittaxed.ca",
        "b": "tax",
        "u": "http://isittaxed.ca/search.php?q={{{s}}}"
    },
    {
        "d": "www.treccani.it",
        "b": "tbio",
        "u": "http://www.treccani.it/biografie/?q={{{s}}}"
    },
    {
        "d": "www.tdbank.com",
        "b": "tdbank",
        "u": "https://www.tdbank.com/CustomerService/search-results.aspx?q={{{s}}}"
    },
    {
        "d": "www.tdcanadatrust.com",
        "b": "tdcanada",
        "u": "https://www.tdcanadatrust.com/search/index.jsp?query={{{s}}}&language=en&site=td_tdct_tdcb_en"
    },
    {
        "d": "www.timeanddate.com",
        "b": "td",
        "u": "http://www.timeanddate.com/search/results.html?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "teamsnap",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:teamsnap.com"
    },
    {
        "d": "tel.search.ch",
        "b": "telch",
        "u": "http://tel.search.ch/?q={{{s}}}"
    },
    {
        "d": "www.dastelefonbuch.de",
        "b": "telefonbuch",
        "u": "http://www.dastelefonbuch.de/?pid=OpenSearch&cmd=search&kw={{{s}}}"
    },
    {
        "d": "tel.search.ch",
        "b": "telsearch",
        "u": "http://tel.search.ch/{{{s}}}"
    },
    {
        "d": "temp-mail.org",
        "b": "tempmail",
        "u": "https://temp-mail.org/{{{s}}}/"
    },
    {
        "d": "translate.google.com",
        "b": "ten",
        "u": "https://translate.google.com/?hl=en&tab=TT#auto/en/{{{s}}}"
    },
    {
        "d": "www.btb.termiumplus.gc.ca",
        "b": "termium",
        "u": "http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-eng.html?srchtxt={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "tes",
        "u": "https://translate.google.com/?hl=es&tab=TT#auto/es/{{{s}}}"
    },
    {
        "d": "tex.stackexchange.com",
        "b": "tex",
        "u": "http://tex.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.textise.net",
        "b": "textise",
        "u": "https://www.textise.net/showText.aspx?strURL={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "texture",
        "u": "https://duckduckgo.com/?q={{{s}}}+texture&iax=images&ia=images"
    },
    {
        "d": "tezaurs.lv",
        "b": "tezaurs",
        "u": "http://tezaurs.lv/#/sv/?{{{s}}}"
    },
    {
        "d": "www.freethesaurus.com",
        "b": "tft",
        "u": "https://www.freethesaurus.com/{{{s}}}"
    },
    {
        "d": "tgd.kr",
        "b": "tgd",
        "u": "https://tgd.kr/search?q={{{s}}}"
    },
    {
        "d": "www.thefreedictionary.com",
        "b": "thefreedictionary",
        "u": "http://www.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "www.themighty.com",
        "b": "themighty",
        "u": "https://www.themighty.com/search/?search={{{s}}}"
    },
    {
        "d": "www.openthesaurus.de",
        "b": "thesaurusde",
        "u": "http://www.openthesaurus.de/synonyme/{{{s}}}"
    },
    {
        "d": "www.thesaurus.com",
        "b": "thesaurus",
        "u": "https://www.thesaurus.com/browse/{{{s}}}?s=t"
    },
    {
        "d": "threadreaderapp.com",
        "b": "thread",
        "u": "https://threadreaderapp.com/search?q={{{s}}}"
    },
    {
        "d": "www.ticketmaster.com",
        "b": "ticketmaster",
        "u": "https://www.ticketmaster.com/search?q={{{s}}}"
    },
    {
        "d": "www.stubhub.com",
        "b": "tickets",
        "u": "http://www.stubhub.com/search/doSearch?searchStr={{{s}}}&pageNumber=1&resultsPerPage=50&searchMode=event&start=0&rows=50"
    },
    {
        "d": "duckduckgo.com",
        "b": "tim",
        "u": "http://duckduckgo.com/?q=timer+{{{s}}}&ia=answer"
    },
    {
        "d": "time.is",
        "b": "timeis",
        "u": "https://time.is/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "timer",
        "u": "http://duckduckgo.com/?q=timer+{{{s}}}&ia=answer"
    },
    {
        "d": "timerepublik.com",
        "b": "timerep",
        "u": "https://timerepublik.com/?q={{{s}}}"
    },
    {
        "d": "timerepublik.com",
        "b": "timerepublik",
        "u": "https://timerepublik.com/?q={{{s}}}"
    },
    {
        "d": "www.timeanddate.com",
        "b": "timezone",
        "u": "http://www.timeanddate.com/time/zones/{{{s}}}"
    },
    {
        "d": "www.tinkercad.com",
        "b": "tink",
        "u": "https://www.tinkercad.com/search?q={{{s}}}"
    },
    {
        "d": "tinycards.duolingo.com",
        "b": "tinycards",
        "u": "https://tinycards.duolingo.com/search?query={{{s}}}"
    },
    {
        "d": "time.is",
        "b": "tis",
        "u": "http://time.is/{{{s}}}"
    },
    {
        "d": "trovu.komun.org",
        "b": "tko",
        "u": "https://trovu.komun.org/?q={{{s}}}&categories=general&language=en-US"
    },
    {
        "d": "tldrlegal.com",
        "b": "tldrlegal",
        "u": "https://tldrlegal.com/search?q={{{s}}} "
    },
    {
        "d": "www.linguee.com",
        "b": "tlenge",
        "u": "https://www.linguee.com/english-german/search?source=auto&query={{{s}}}"
    },
    {
        "d": "web.telegram.org",
        "b": "tlgrm",
        "u": "https://web.telegram.org/#/im?p={{{s}}} "
    },
    {
        "d": "tlk.io",
        "b": "tlk",
        "u": "https://tlk.io/{{{s}}}"
    },
    {
        "d": "www.thetrainline.com",
        "b": "tlld",
        "u": "https://www.thetrainline.com/live/departures/{{{s}}}"
    },
    {
        "d": "www.rezeptwelt.de",
        "b": "tmr",
        "u": "http://www.rezeptwelt.de/search/?rec_all=0&search={{{s}}}"
    },
    {
        "d": "webtracker.tnt.com",
        "b": "tnt",
        "u": "http://webtracker.tnt.com/webtracker/tracking.do?requestType=GEN&searchType=CON&respLang=en&respCountry=US&sourceID=1&sourceCountry=ww&cons={{{s}}}"
    },
    {
        "d": "tny.im",
        "b": "tnyims",
        "u": "http://tny.im/yourls-api.php?action=shorturl&url={{{s}}}"
    },
    {
        "d": "theorangealliance.org",
        "b": "toa",
        "u": "https://theorangealliance.org/teams/{{{s}}}"
    },
    {
        "d": "todoist.com",
        "b": "todoist",
        "u": "https://todoist.com/app?lang=en#agenda%2F{{{s}}} "
    },
    {
        "d": "tontonroger.org",
        "b": "ton",
        "u": "https://tontonroger.org/?q={{{s}}}"
    },
    {
        "d": "tontonroger.org",
        "b": "tonton",
        "u": "https://tontonroger.org/?q={{{s}}}"
    },
    {
        "d": "www.toogit.com",
        "b": "toogit",
        "u": "https://www.toogit.com/find-freelance-jobs?JobSearch%5Bsearch_text%5D={{{s}}}"
    },
    {
        "d": "trac.torproject.org",
        "b": "torwiki",
        "u": "https://trac.torproject.org/projects/tor/search?q={{{s}}} "
    },
    {
        "d": "tosdr.org",
        "b": "tosdr",
        "u": "https://tosdr.org/#search={{{s}}}"
    },
    {
        "d": "www.transperth.wa.gov.au",
        "b": "tperth",
        "u": "https://www.transperth.wa.gov.au/Search-Results?Search={{{s}}}"
    },
    {
        "d": "www.packagemapping.com",
        "b": "track",
        "u": "http://www.packagemapping.com/?action=track&tracknum={{{s}}}"
    },
    {
        "d": "www.packagetrackr.com",
        "b": "trackr",
        "u": "http://www.packagetrackr.com/track/?submit=&n={{{s}}}&c="
    },
    {
        "d": "www.trademarkia.com",
        "b": "trademarks",
        "u": "http://www.trademarkia.com/trademarks-search.aspx?tn={{{s}}}"
    },
    {
        "d": "www.tradingview.com",
        "b": "tradingview",
        "u": "https://www.tradingview.com/chart/?symbol={{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "trad",
        "u": "http://dictionary.reverso.net/french-english/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "trans",
        "u": "https://translate.google.com/?source=osdd#auto/en/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "translatede",
        "u": "https://translate.google.com/#auto/de/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "translatenl",
        "u": "https://translate.google.com/#auto/nl/{{{s}}}"
    },
    {
        "d": "www.microsofttranslator.com",
        "b": "translatesite",
        "u": "http://www.microsofttranslator.com/bv.aspx?from=&to=en&a={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "transnl",
        "u": "https://translate.google.com/#auto/nl/{{{s}}}"
    },
    {
        "d": "www.trashmail.de",
        "b": "trash",
        "u": "http://www.trashmail.de/?search={{{s}}}"
    },
    {
        "d": "trello.com",
        "b": "trello",
        "u": "https://trello.com/search?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "trends",
        "u": "https://www.google.com/trends/explore#q={{{s}}}"
    },
    {
        "d": "trendstop.knack.be",
        "b": "trendstop",
        "u": "http://trendstop.knack.be/nl/results.aspx?s1={{{s}}}"
    },
    {
        "d": "timerepublik.com",
        "b": "trep",
        "u": "https://timerepublik.com/?q={{{s}}}"
    },
    {
        "d": "www.trivago.com",
        "b": "trivago",
        "u": "https://www.trivago.com/?sQuery={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "trnl",
        "u": "https://translate.google.com/#auto/nl/{{{s}}}"
    },
    {
        "d": "www.truecaller.com",
        "b": "true",
        "u": "https://www.truecaller.com/search/in/{{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "trump",
        "u": "https://twitter.com/search?q=from%3Arealdonaldtrump%20{{{s}}}&src=typd"
    },
    {
        "d": "www.treccani.it",
        "b": "tsin",
        "u": "http://www.treccani.it/sinonimi/?q={{{s}}}"
    },
    {
        "d": "www.triestetrasporti.it",
        "b": "tts",
        "u": "https://www.triestetrasporti.it//?s={{{s}}}&lang=it"
    },
    {
        "d": "duckduckgo.com",
        "b": "tty",
        "u": "https://duckduckgo.com/tty/#q={{{s}}}"
    },
    {
        "d": "www.tu-darmstadt.de",
        "b": "tuda",
        "u": "https://www.tu-darmstadt.de/suche.de.jsp?q={{{s}}}"
    },
    {
        "d": "mail.tutanota.com",
        "b": "tutanota",
        "u": "https://mail.tutanota.com/search/mail/LSWThzP--3-1?query={{{s}}}"
    },
    {
        "d": "www.tuttocitta.it",
        "b": "tuttocitta",
        "u": "https://www.tuttocitta.it/mappe/{{{s}}}"
    },
    {
        "d": "search.tut.by",
        "b": "tut",
        "u": "http://search.tut.by/?status=1&ru=1&encoding=1&page=0&how=rlv&query={{{s}}}"
    },
    {
        "d": "mobile.twitter.com",
        "b": "tweet",
        "u": "https://mobile.twitter.com/search?q={{{s}}}"
    },
    {
        "d": "tab-bot.net",
        "b": "twitch2steam",
        "u": "http://tab-bot.net/botcheck?twitchname_botcheck={{{s}}}&submit_twitch=&steam_botcheck="
    },
    {
        "d": "twitchbots.info",
        "b": "twitchbots",
        "u": "https://twitchbots.info/check?username={{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "twitters",
        "u": "https://twitter.com/{{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "twitter",
        "u": "https://twitter.com/search?q={{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "twitteruser",
        "u": "https://twitter.com/{{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "twit",
        "u": "https://twitter.com/search?q={{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "twl",
        "u": "https://twitter.com/search?f=tweets&vertical=news&q={{{s}}}"
    },
    {
        "d": "twpro.jp",
        "b": "twpro",
        "u": "https://twpro.jp/search?word={{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "tw",
        "u": "https://twitter.com/search?q={{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "twuser",
        "u": "https://twitter.com/search/users?q={{{s}}}"
    },
    {
        "d": "tyda.se",
        "b": "tydala",
        "u": "http://tyda.se/search/{{{s}}}?lang%5B0%5D=la&lang%5B1%5D=sv"
    },
    {
        "d": "tinyurl.com",
        "b": "tyurl",
        "u": "https://tinyurl.com/create.php?source=indexpage&url={{{s}}}&submit=Make+TinyURL%21&alias= "
    },
    {
        "d": "search.ucf.edu",
        "b": "ucfl",
        "u": "https://search.ucf.edu/#?q={{{s}}}"
    },
    {
        "d": "ja.uncyc.org",
        "b": "ucpjp",
        "u": "http://ja.uncyc.org/index.php?search={{{s}}}"
    },
    {
        "d": "uem.blackboard.com",
        "b": "uembb",
        "u": "https://uem.blackboard.com/{{{s}}}"
    },
    {
        "d": "uiba.co",
        "b": "uiba",
        "u": "http://uiba.co/?s={{{s}}}"
    },
    {
        "d": "www.uio.no",
        "b": "uio",
        "u": "https://www.uio.no/studier/emner/?course-query={{{s}}}&vrtx=search&searchMode=emne"
    },
    {
        "d": "www.uitmuntend.de",
        "b": "uit",
        "u": "http://www.uitmuntend.de/search.html?search={{{s}}}"
    },
    {
        "d": "gridreferencefinder.com",
        "b": "ukgr",
        "u": "https://gridreferencefinder.com/bing.php?gr={{{s}}}"
    },
    {
        "d": "www.uludagsozluk.com",
        "b": "uludagsozluk",
        "u": "http://www.uludagsozluk.com/?q={{{s}}}"
    },
    {
        "d": "www.ulule.com",
        "b": "ul",
        "u": "https://www.ulule.com/discover/?q={{{s}}}"
    },
    {
        "d": "unicode.party",
        "b": "unicodeparty",
        "u": "http://unicode.party/?query={{{s}}}"
    },
    {
        "d": "unicode-table.com",
        "b": "unicodetable",
        "u": "http://unicode-table.com/en/search/?q={{{s}}}"
    },
    {
        "d": "www.unizar.es",
        "b": "unizar",
        "u": "http://www.unizar.es/search/node/{{{s}}}"
    },
    {
        "d": "ja.uncyclopedia.info",
        "b": "unja",
        "u": "http://ja.uncyclopedia.info/wiki/{{{s}}}"
    },
    {
        "d": "unkompliziert.eu",
        "b": "unkompliziert",
        "u": "https://unkompliziert.eu/index.php?search={{{s}}}"
    },
    {
        "d": "untappd.com",
        "b": "untappd",
        "u": "https://untappd.com/search?q={{{s}}} "
    },
    {
        "d": "unvis.it",
        "b": "unv",
        "u": "http://unvis.it/{{{s}}}"
    },
    {
        "d": "downforeveryoneorjustme.com",
        "b": "updown",
        "u": "http://downforeveryoneorjustme.com/{{{s}}}"
    },
    {
        "d": "www.ups.com",
        "b": "upses",
        "u": "https://www.ups.com/track?loc=es_ES&tracknum={{{s}}}"
    },
    {
        "d": "wwwapps.ups.com",
        "b": "ups",
        "u": "https://wwwapps.ups.com/WebTracking/processInputRequest?tracknum={{{s}}}&"
    },
    {
        "d": "www.ureka.org",
        "b": "ureka",
        "u": "https://www.ureka.org/search?loader=1&q={{{s}}}"
    },
    {
        "d": "urlscan.io",
        "b": "urlscan",
        "u": "https://urlscan.io/search/#{{{s}}}"
    },
    {
        "d": "www.urlvoid.com",
        "b": "urlvoid",
        "u": "http://www.urlvoid.com/scan/{{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "usd2brl",
        "u": "https://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=USD&To=BRL"
    },
    {
        "d": "www.xe.com",
        "b": "usd2gbp",
        "u": "http://www.xe.com/currencyconverter/convert/?Amount={{{s}}}&From=USD&To=GBP"
    },
    {
        "d": "www.machineseeker.com",
        "b": "used",
        "u": "https://www.machineseeker.com/fy/inserat/inseratliste/index?stichwort={{{s}}}&submit="
    },
    {
        "d": "www.userbenchmark.com",
        "b": "userbench",
        "u": "http://www.userbenchmark.com/Search?searchTerm={{{s}}}"
    },
    {
        "d": "tools.usps.com",
        "b": "usps",
        "u": "https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1={{{s}}}"
    },
    {
        "d": "userstyles.org",
        "b": "us",
        "u": "https://userstyles.org/styles/browse?search_terms={{{s}}}"
    },
    {
        "d": "ut.no",
        "b": "utno",
        "u": "http://ut.no/finn?search={{{s}}}"
    },
    {
        "d": "www.virginia.edu",
        "b": "uva",
        "u": "http://www.virginia.edu/search/site/{{{s}}}"
    },
    {
        "d": "uwflow.com",
        "b": "uwflow",
        "u": "https://uwflow.com/courses?keywords={{{s}}}"
    },
    {
        "d": "www.ssjoy.org",
        "b": "uw",
        "u": "https://www.ssjoy.org/dho/?vid=&mid=home&act=IS&is_target=all&is_keyword={{{s}}}"
    },
    {
        "d": "www.duckduckgo.com",
        "b": "v2ex",
        "u": "https://www.duckduckgo.com/?q=site:v2ex.com/t+{{{s}}}"
    },
    {
        "d": "www.verb2verbe.com",
        "b": "v2ve",
        "u": "http://www.verb2verbe.com/EnglishConj.aspx?verb={{{s}}}&tail=&type=query"
    },
    {
        "d": "www.verb2verbe.com",
        "b": "v2vf",
        "u": "http://www.verb2verbe.com/francais/FrenchConj.aspx?verb={{{s}}}&tail=&ref=0&type=query"
    },
    {
        "d": "www.vagas.com.br",
        "b": "vagas",
        "u": "https://www.vagas.com.br/vagas-de-{{{s}}}?"
    },
    {
        "d": "jigsaw.w3.org",
        "b": "validatecss",
        "u": "http://jigsaw.w3.org/css-validator/validator?uri={{{s}}}&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en"
    },
    {
        "d": "validator.w3.org",
        "b": "validate",
        "u": "http://validator.w3.org/check?uri={{{s}}}&charset=%28detect+automatically%29&doctype=Inline&group=0"
    },
    {
        "d": "vancouver.ca",
        "b": "vancouver",
        "u": "http://vancouver.ca/search.aspx?q={{{s}}}&searchEngine=GSA"
    },
    {
        "d": "www.vanguardinvestments.com.au",
        "b": "vanguard",
        "u": "https://www.vanguardinvestments.com.au/retail/mvc/searchresults.htm?https%3A%2F%2Fwww.vanguardinvestments.com.au%2Fretail%2Fmvc%2Fsearchresults.htm=&searchtext={{{s}}}"
    },
    {
        "d": "vaski.finna.fi",
        "b": "vaski",
        "u": "https://vaski.finna.fi/Search/Results?lookfor={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "v",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=videos&iax=videos"
    },
    {
        "d": "www.venuefirst.com",
        "b": "vef",
        "u": "https://www.venuefirst.com/all/venues?search_keyword={{{s}}}"
    },
    {
        "d": "veganistan.se",
        "b": "veganistan",
        "u": "http://veganistan.se/search/innehall/{{{s}}}"
    },
    {
        "d": "vegewel.com",
        "b": "vegewel",
        "u": "https://vegewel.com/en/search?utf8=%E2%9C%93&q%5Bg%5D%5B1%5D%5Brestaurant_search%5D={{{s}}}&q%5Bg%5D%5B0%5D%5Bm%5D=or&commit=Search"
    },
    {
        "d": "vemringde.se",
        "b": "vem",
        "u": "http://vemringde.se/?q={{{s}}}"
    },
    {
        "d": "www.dictionar-finlandez.net",
        "b": "verbfi",
        "u": "http://www.dictionar-finlandez.net/online/verbs/conjugate_verb.php?verb={{{s}}}"
    },
    {
        "d": "www.verbix.com",
        "b": "verbixpt",
        "u": "http://www.verbix.com/webverbix/Portuguese/{{{s}}}.html"
    },
    {
        "d": "www.verbs.cat",
        "b": "verbs",
        "u": "http://www.verbs.cat/ca/conjugacio.html?infinitive={{{s}}}"
    },
    {
        "d": "www.bible.com",
        "b": "verse",
        "u": "https://www.bible.com/search/bible?q={{{s}}}"
    },
    {
        "d": "www.vertalen.nu",
        "b": "vertalennu",
        "u": "http://www.vertalen.nu/vertaal?vertaal={{{s}}}&van=en&naar=nl"
    },
    {
        "d": "vgcollect.com",
        "b": "vgcollect",
        "u": "http://vgcollect.com/search/{{{s}}}"
    },
    {
        "d": "v.gd",
        "b": "vgd",
        "u": "http://v.gd/create.php?url={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "vg",
        "u": "https://google.com/search?hl=en&q={{{s}}}&tbs=li:1"
    },
    {
        "d": "www.vantagehunt.com",
        "b": "vh",
        "u": "https://www.vantagehunt.com/jobs?search={{{s}}}"
    },
    {
        "d": "videa.seznam.cz",
        "b": "videa",
        "u": "https://videa.seznam.cz/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "video",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=videos&iax=videos"
    },
    {
        "d": "duckduckgo.com",
        "b": "videos",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=videos&iax=1"
    },
    {
        "d": "duckduckgo.com",
        "b": "vids",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=videos&iax=videos"
    },
    {
        "d": "mail.virgilio.it",
        "b": "virgiliomail",
        "u": "http://mail.virgilio.it/login/?q={{{s}}}:"
    },
    {
        "d": "www.virustotal.com",
        "b": "virustotal",
        "u": "https://www.virustotal.com/url/submission/?force=1&url={{{s}}}"
    },
    {
        "d": "ricerca.virgilio.it",
        "b": "vir",
        "u": "http://ricerca.virgilio.it/ricerca?qs={{{s}}}"
    },
    {
        "d": "visualhunt.com",
        "b": "visualh",
        "u": "https://visualhunt.com/search/instant/?q={{{s}}}"
    },
    {
        "d": "forum.vivaldi.net",
        "b": "vivaldi",
        "u": "https://forum.vivaldi.net/search?term={{{s}}}"
    },
    {
        "d": "fr.vikidia.org",
        "b": "vkdia",
        "u": "https://fr.vikidia.org/w/index.php?search={{{s}}}&title=Sp%C3%A9cial:Recherche&go=Trouver"
    },
    {
        "d": "vk.com",
        "b": "vk",
        "u": "http://vk.com/search?c[q]={{{s}}}&c[section]=auto"
    },
    {
        "d": "www.viamichelin.com",
        "b": "vml",
        "u": "https://www.viamichelin.com/web/Maps?address={{{s}}}"
    },
    {
        "d": "vi.wikipedia.org",
        "b": "vnwiki",
        "u": "https://vi.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "searchvoat.co",
        "b": "voat",
        "u": "https://searchvoat.co/?all={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "voice",
        "u": "https://www.google.com/voice#search/{{{s}}}"
    },
    {
        "d": "vortaro.nl",
        "b": "vortaronl",
        "u": "https://vortaro.nl/?v={{{s}}}"
    },
    {
        "d": "vulners.com",
        "b": "vulners",
        "u": "https://vulners.com/search?query={{{s}}}"
    },
    {
        "d": "www.victoria.ac.nz",
        "b": "vuw",
        "u": "http://www.victoria.ac.nz/search?q={{{s}}}"
    },
    {
        "d": "w3.org",
        "b": "w3c",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:w3.org"
    },
    {
        "d": "welovedevs.com",
        "b": "w3d",
        "u": "https://welovedevs.com/app/companies/search?query={{{s}}}&type=company"
    },
    {
        "d": "w3schools.com",
        "b": "w3schools",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:w3schools.com"
    },
    {
        "d": "w3.org",
        "b": "w3",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:w3.org"
    },
    {
        "d": "map.what3words.com",
        "b": "w3w",
        "u": "https://map.what3words.com/{{{s}}}"
    },
    {
        "d": "google.com",
        "b": "wallpaper",
        "u": "http://google.com/search?tbm=isch&imgsz=xxlarge&gbv=2&safe=off&q={{{s}}}+wallpaper&btnG=Search+Images&tbs=imgo:1"
    },
    {
        "d": "als.wikipedia.org",
        "b": "wals",
        "u": "https://als.wikipedia.org/w/index.php/search={{{s}}}"
    },
    {
        "d": "api.whatsapp.com",
        "b": "wapp",
        "u": "https://api.whatsapp.com/send?phone={{{s}}}&text="
    },
    {
        "d": "warframe.wikia.com",
        "b": "warframe",
        "u": "http://warframe.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1"
    },
    {
        "d": "search.warwick.ac.uk",
        "b": "warwick",
        "u": "https://search.warwick.ac.uk/?q={{{s}}}"
    },
    {
        "d": "wave.webaim.org",
        "b": "wave",
        "u": "http://wave.webaim.org/report#/{{{s}}}"
    },
    {
        "d": "web.archive.org",
        "b": "waybackmachine",
        "u": "http://web.archive.org/web/*/{{{s}}}"
    },
    {
        "d": "web.archive.org",
        "b": "wbs",
        "u": "https://web.archive.org/save/*/{{{s}}}"
    },
    {
        "d": "spark.apache.org",
        "b": "wcme",
        "u": "https://spark.apache.org/docs/latest/api/python/search.html?q={{{s}}}"
    },
    {
        "d": "www.wikidata.org",
        "b": "wd",
        "u": "https://www.wikidata.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "web.archive.org",
        "b": "webarchive",
        "u": "https://web.archive.org/web/*/{{{s}}}"
    },
    {
        "d": "webbkoll.dataskydd.net",
        "b": "webbkoll",
        "u": "https://webbkoll.dataskydd.net/en/results?url={{{s}}}"
    },
    {
        "d": "www.webcrawler.com",
        "b": "webcrawler",
        "u": "http://www.webcrawler.com/search/web?fcoid=417&fcop=topnav&fpid=2&aid=3ebe8f19-0a9d-425b-a3ff-9d59e6c12c5e&ridx=2&q={{{s}}}&ql=&ss=t"
    },
    {
        "d": "www.mywot.com",
        "b": "weboftrust",
        "u": "https://www.mywot.com/en/scorecard/{{{s}}}"
    },
    {
        "d": "www.webstatsdomain.com",
        "b": "webstats",
        "u": "http://www.webstatsdomain.com/?q={{{s}}} "
    },
    {
        "d": "websta.me",
        "b": "websta",
        "u": "http://websta.me/search/{{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "webtender",
        "u": "http://duckduckgo.com/?q=site%3Awebtender.com+{{{s}}}"
    },
    {
        "d": "www.webutations.org",
        "b": "webutation",
        "u": "http://www.webutations.org/go/review/{{{s}}}"
    },
    {
        "d": "webxicon.org",
        "b": "webxicon",
        "u": "http://webxicon.org/search.php?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "week",
        "u": "https://duckduckgo.com/?q={{{s}}}&df=w"
    },
    {
        "d": "weheartit.com",
        "b": "weheartit",
        "u": "http://weheartit.com/search?query={{{s}}}"
    },
    {
        "d": "s.weibo.com",
        "b": "weibo",
        "u": "http://s.weibo.com/weibo/{{{s}}}?frm=opensearch"
    },
    {
        "d": "job.weladee.com",
        "b": "weladee",
        "u": "https://job.weladee.com/?q={{{s}}}"
    },
    {
        "d": "www.webforditas.hu",
        "b": "wfdehu",
        "u": "http://www.webforditas.hu/szotar.php?S={{{s}}}&l1=de&l2=hu"
    },
    {
        "d": "www.webforditas.hu",
        "b": "wfenhu",
        "u": "http://www.webforditas.hu/szotar.php?S={{{s}}}&l1=en&l2=hu"
    },
    {
        "d": "fr.wikipedia.org",
        "b": "wf",
        "u": "https://fr.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.webforditas.hu",
        "b": "wfhude",
        "u": "http://www.webforditas.hu/szotar.php?S={{{s}}}&l1=hu&l2=de"
    },
    {
        "d": "www.webforditas.hu",
        "b": "wfhuen",
        "u": "http://www.webforditas.hu/szotar.php?S= {{{s}}}&l1=hu&l2=en"
    },
    {
        "d": "fo.wikipedia.org",
        "b": "wfo",
        "u": "http://fo.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "warframe.wikia.com",
        "b": "wframe",
        "u": "http://warframe.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1"
    },
    {
        "d": "www.wordreference.com",
        "b": "wfren",
        "u": "http://www.wordreference.com/fren/{{{s}}}"
    },
    {
        "d": "warframe.market",
        "b": "wft",
        "u": "https://warframe.market/items/{{{s}}}"
    },
    {
        "d": "gl.wikipedia.org",
        "b": "wgl",
        "u": "https://gl.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "whatcms.org",
        "b": "whatcms",
        "u": "http://whatcms.org/?s={{{s}}}"
    },
    {
        "d": "de.wikihow.com",
        "b": "whde",
        "u": "https://de.wikihow.com/wikiHowTo?search={{{s}}}:"
    },
    {
        "d": "www.getwhichit.com",
        "b": "whichit",
        "u": "https://www.getwhichit.com/whichitapp.html#!/Search/{{{s}}}"
    },
    {
        "d": "search.which.co.uk",
        "b": "which",
        "u": "https://search.which.co.uk/search?w={{{s}}}"
    },
    {
        "d": "whisper.sh",
        "b": "whisper",
        "u": "http://whisper.sh/search?q={{{s}}}"
    },
    {
        "d": "www.whoisbg.com",
        "b": "whoisbg",
        "u": "http://www.whoisbg.com/?domain={{{s}}}"
    },
    {
        "d": "www.whois.com",
        "b": "whois.com",
        "u": "http://www.whois.com/search.php?query={{{s}}}"
    },
    {
        "d": "who.pm",
        "b": "whopm",
        "u": "https://who.pm/{{{s}}}"
    },
    {
        "d": "whoscall.com",
        "b": "whoscalltw",
        "u": "https://whoscall.com/en-US/tw/{{{s}}}"
    },
    {
        "d": "www.who.is",
        "b": "who",
        "u": "http://www.who.is/whois/{{{s}}} "
    },
    {
        "d": "www.who-hosts-this.com",
        "b": "wht",
        "u": "https://www.who-hosts-this.com/?s={{{s}}}"
    },
    {
        "d": "hy.wikipedia.org",
        "b": "w-hy",
        "u": "https://hy.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "wiby.me",
        "b": "wiby",
        "u": "https://wiby.me/?q={{{s}}}"
    },
    {
        "d": "www.wie-sagt-man-noch.de",
        "b": "wie",
        "u": "https://www.wie-sagt-man-noch.de/synonyme/{{{s}}}.html"
    },
    {
        "d": "www.whoishostingthis.com",
        "b": "wiht",
        "u": "http://www.whoishostingthis.com/?q={{{s}}}"
    },
    {
        "d": "ko.wikipedia.org",
        "b": "wikiko",
        "u": "https://ko.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "www.wikimapia.org",
        "b": "wikimapia",
        "u": "http://www.wikimapia.org/#search={{{s}}}"
    },
    {
        "d": "fr.wikimini.org",
        "b": "wikimini",
        "u": "https://fr.wikimini.org/w/index.php?search={{{s}}}&title=Sp%C3%A9cial%3ARecherche&fulltext=Rechercher"
    },
    {
        "d": "de.wikipedia.org",
        "b": "wikipediade",
        "u": "http://de.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wiki.com",
        "b": "wikisearch",
        "u": "http://www.wiki.com/results1.htm?cx=009420061493499222400%3Ae8sof1xaq-u&q={{{s}}}&btnG=Wiki+Search&cof=GIMP%3A009900%3BT%3A000000%3BALC%3AFF9900%3BGFNT%3AB0B0B0%3BLC%3A003F7D%3BBGC%3AFFFFFF%3BVLC%3A666666%3BGALT%3A36A200%3BFORID%3A9%3B&as_q=on"
    },
    {
        "d": "it.wiktionary.org",
        "b": "wikizionario",
        "u": "https://it.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "ja.wiktionary.org",
        "b": "wiktja",
        "u": "https://ja.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "it.wiktionary.org",
        "b": "wkit",
        "u": "https://it.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wlw.de",
        "b": "wlw",
        "u": "https://www.wlw.de/search?suchbegriff={{{s}}}"
    },
    {
        "d": "www.whatsmydns.net",
        "b": "wmdns",
        "u": "https://www.whatsmydns.net/#A/{{{s}}}"
    },
    {
        "d": "fr.m.wikipedia.org",
        "b": "wmfr",
        "u": "https://fr.m.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "passport.webmoney.ru",
        "b": "wmid",
        "u": "https://passport.webmoney.ru/asp/CertView.asp?wmid={{{s}}}"
    },
    {
        "d": "phabricator.wikimedia.org",
        "b": "wmphab",
        "u": "https://phabricator.wikimedia.org/search/?query={{{s}}}"
    },
    {
        "d": "www.wooroll.com",
        "b": "wooroll",
        "u": "http://www.wooroll.com/search.html?q={{{s}}}&ref=duckduckgo"
    },
    {
        "d": "www.wordhippo.com",
        "b": "wordhippo",
        "u": "https://www.wordhippo.com/what-is/another-word-for/{{{s}}}.html"
    },
    {
        "d": "wordpress.org",
        "b": "wordpress",
        "u": "http://wordpress.org/search/{{{s}}}"
    },
    {
        "d": "www.wordnik.com",
        "b": "word",
        "u": "https://www.wordnik.com/words?myWord={{{s}}}"
    },
    {
        "d": "workatremote.com",
        "b": "workatremote",
        "u": "https://workatremote.com/remote-{{{s}}}-jobs"
    },
    {
        "d": "www.workcircle.com",
        "b": "workcircle",
        "u": "http://www.workcircle.com/jobs/?search=1&query={{{s}}}"
    },
    {
        "d": "corpora.uni-leipzig.de",
        "b": "wortschatz",
        "u": "http://corpora.uni-leipzig.de/de/res?corpusId=deu_newscrawl_2011&word={{{s}}}"
    },
    {
        "d": "www.wort-suchen.de",
        "b": "wort",
        "u": "https://www.wort-suchen.de/kreuzwortraetsel-hilfe/loesungen/{{{s}}}/"
    },
    {
        "d": "wiki.openstreetmap.org",
        "b": "wosm",
        "u": "http://wiki.openstreetmap.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.woxikon.com",
        "b": "wox",
        "u": "http://www.woxikon.com/?q={{{s}}} "
    },
    {
        "d": "wordpress.org",
        "b": "wpplugins",
        "u": "http://wordpress.org/extend/plugins/search.php?q={{{s}}}&sort="
    },
    {
        "d": "wordpress.org",
        "b": "wpplugs",
        "u": "https://wordpress.org/plugins/search/{{{s}}}/"
    },
    {
        "d": "wordpress.org",
        "b": "wpthemes",
        "u": "http://wordpress.org/extend/themes/search.php?q={{{s}}}"
    },
    {
        "d": "wordpress.org",
        "b": "wp",
        "u": "http://wordpress.org/search/{{{s}}}"
    },
    {
        "d": "it.wikiquote.org",
        "b": "wqit",
        "u": "https://it.wikiquote.org/?q={{{s}}}:"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrdefr",
        "u": "http://www.wordreference.com/frde/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrden",
        "u": "http://www.wordreference.com/deen/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrdes",
        "u": "http://www.wordreference.com/definicion/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrenfr",
        "u": "http://www.wordreference.com/enfr/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrengr",
        "u": "http://www.wordreference.com/engr/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrenpl",
        "u": "http://www.wordreference.com/enpl/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrensyn",
        "u": "http://www.wordreference.com/thesaurus/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wren",
        "u": "http://www.wordreference.com/definition/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wressin",
        "u": "http://www.wordreference.com/sinonimos/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wres",
        "u": "http://www.wordreference.com/definicion/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wre",
        "u": "http://www.wordreference.com/definicion/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrgren",
        "u": "http://www.wordreference.com/gren/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "writconj",
        "u": "http://www.wordreference.com/conj/ItVerbs.aspx?v={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrn",
        "u": "http://www.wordreference.com/definition/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrplen",
        "u": "http://www.wordreference.com/plen/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrse",
        "u": "http://www.wordreference.com/enes/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrsf",
        "u": "http://www.wordreference.com/esfr/{{{s}}}"
    },
    {
        "d": "sc.wikipedia.org",
        "b": "wsc",
        "u": "http://sc.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "www.wallstreetoasis.com",
        "b": "wso",
        "u": "http://www.wallstreetoasis.com/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "sr.wikipedia.org",
        "b": "wsr",
        "u": "https://sr.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "br.wiktionary.org",
        "b": "wtbr",
        "u": "https://br.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "te.wikipedia.org",
        "b": "wte",
        "u": "https://te.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wiktionary.org",
        "b": "wtja",
        "u": "https://ja.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "corpora.uni-leipzig.de",
        "b": "wul",
        "u": "http://corpora.uni-leipzig.de/de/res?corpusId=deu_newscrawl_2011&word={{{s}}}"
    },
    {
        "d": "www.wunderlist.com",
        "b": "wunderlist",
        "u": "https://www.wunderlist.com/#/search/{{{s}}}"
    },
    {
        "d": "www.walmart.com",
        "b": "wus",
        "u": "https://www.walmart.com/search/?query={{{s}}}&country=US"
    },
    {
        "d": "en.wikipedia.org",
        "b": "w",
        "u": "https://en.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.wwoof.net",
        "b": "wwoof",
        "u": "http://www.wwoof.net/?s={{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwtr",
        "u": "http://www.wikiwand.com/tr/{{{s}}}"
    },
    {
        "d": "www.wykop.pl",
        "b": "wy",
        "u": "http://www.wykop.pl/szukaj/{{{s}}}"
    },
    {
        "d": "x.com",
        "b": "x",
        "u": "https://x.com/search?q={{{s}}}"
    },
    {
        "d": "www.xing.com",
        "b": "xing",
        "u": "https://www.xing.com/app/search?op=combined;keywords={{{s}}} "
    },
    {
        "d": "stellar.expert",
        "b": "xlm",
        "u": "https://stellar.expert/explorer/public/account/{{{s}}}"
    },
    {
        "d": "xploremycity.com",
        "b": "xmc",
        "u": "https://xploremycity.com/{{{s}}}"
    },
    {
        "d": "trafficpixel.tk",
        "b": "xmpprooms",
        "u": "https://trafficpixel.tk/chatrooms/showRooms.php?search={{{s}}}&numberResults=10"
    },
    {
        "d": "chinese.yabla.com",
        "b": "yabla",
        "u": "https://chinese.yabla.com/chinese-english-pinyin-dictionary.php?define={{{s}}} "
    },
    {
        "d": "search.yacy.net",
        "b": "yacy",
        "u": "https://search.yacy.net/yacysearch/index.html?query={{{s}}}&Enter=&verify=false&nav=filetype%2Cprotocol%2Chosts%2Cauthors%2Ccollections%2Cnamespace%2Ctopics%2Cdate&startRecord=0&indexof=off&meanCount=5&resource=global&prefermaskfilter=&maximumRecords=10&timezoneOffset=0"
    },
    {
        "d": "yandex.com",
        "b": "yaen",
        "u": "https://yandex.com/yandsearch?text={{{s}}}&lr=103421"
    },
    {
        "d": "search.yahoo.com",
        "b": "yahoo",
        "u": "http://search.yahoo.com/search?p={{{s}}}"
    },
    {
        "d": "www.yammer.com",
        "b": "yam",
        "u": "https://www.yammer.com/search?search={{{s}}}"
    },
    {
        "d": "yandex.com",
        "b": "yandexen",
        "u": "https://yandex.com/yandsearch?text={{{s}}}"
    },
    {
        "d": "maps.yandex.ru",
        "b": "yandexmaps",
        "u": "http://maps.yandex.ru/?text={{{s}}} "
    },
    {
        "d": "market.yandex.ru",
        "b": "yandexm",
        "u": "http://market.yandex.ru/search.xml?text={{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "yandex",
        "u": "https://yandex.ru/yandsearch?text={{{s}}}"
    },
    {
        "d": "answers.yahoo.com",
        "b": "yanswers",
        "u": "http://answers.yahoo.com/search/search_result;_ylt=AnPnri0ekBBFsWt64sNbHmvj1KIX;_ylv=3?p={{{s}}}&submit-go=Search+Y!+Answers"
    },
    {
        "d": "yandex.com",
        "b": "yan",
        "u": "https://yandex.com/search/?text={{{s}}}"
    },
    {
        "d": "slovari.yandex.ru",
        "b": "yaslovari",
        "u": "https://slovari.yandex.ru/{{{s}}}"
    },
    {
        "d": "yandex.com.tr",
        "b": "yatr",
        "u": "https://yandex.com.tr/search/?text={{{s}}}"
    },
    {
        "d": "translate.yandex.com",
        "b": "yat",
        "u": "https://translate.yandex.com/?text={{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "yav",
        "u": "https://yandex.ru/video/search?text={{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "ya",
        "u": "https://yandex.ru/search/?text={{{s}}}"
    },
    {
        "d": "dict.youdao.com",
        "b": "ydd",
        "u": "http://dict.youdao.com/search?q={{{s}}}"
    },
    {
        "d": "de.yahoo.com",
        "b": "yde",
        "u": "https://de.yahoo.com/?q={{{s}}}"
    },
    {
        "d": "www.yeggi.com",
        "b": "yeggi",
        "u": "http://www.yeggi.com/q/{{{s}}}/"
    },
    {
        "d": "yellow.co.nz",
        "b": "yellownz",
        "u": "http://yellow.co.nz/yellow+pages/{{{s}}}/New+Zealand"
    },
    {
        "d": "www.yelp.de",
        "b": "yelpde",
        "u": "http://www.yelp.de/search?find_desc={{{s}}}&ns=1&rpp=10&find_loc="
    },
    {
        "d": "yandex.com.tr",
        "b": "yh",
        "u": "https://yandex.com.tr/harita/?text={{{s}}}"
    },
    {
        "d": "www.yippy.com",
        "b": "yippy",
        "u": "https://www.yippy.com/search/?v%3Aproject=clusty-new&query={{{s}}}"
    },
    {
        "d": "images.search.yahoo.com",
        "b": "yi",
        "u": "https://images.search.yahoo.com/search/images?p={{{s}}}"
    },
    {
        "d": "dic.search.yahoo.co.jp",
        "b": "yjisho",
        "u": "http://dic.search.yahoo.co.jp/search?ei=UTF-8&p={{{s}}}&fr=dic&stype=prefix"
    },
    {
        "d": "map.yahoo.co.jp",
        "b": "yjm",
        "u": "https://map.yahoo.co.jp/mapsearch/search?p={{{s}}}"
    },
    {
        "d": "search.yahoo.co.jp",
        "b": "yjp",
        "u": "http://search.yahoo.co.jp/search?p={{{s}}}"
    },
    {
        "d": "search.yahoo.co.jp",
        "b": "yjr",
        "u": "https://search.yahoo.co.jp/realtime/search?p={{{s}}}"
    },
    {
        "d": "search.yahoo.co.jp",
        "b": "yj",
        "u": "https://search.yahoo.co.jp/search?p={{{s}}}"
    },
    {
        "d": "ylilauta.org",
        "b": "ylilauta",
        "u": "https://ylilauta.org/{{{s}}} "
    },
    {
        "d": "mail.yahoo.com",
        "b": "ymail",
        "u": "https://mail.yahoo.com/d/search/keyword={{{s}}}"
    },
    {
        "d": "yandex.com",
        "b": "ymg",
        "u": "https://yandex.com/images/search?text={{{s}}}"
    },
    {
        "d": "fr.news.search.yahoo.com",
        "b": "ynfr",
        "u": "https://fr.news.search.yahoo.com/search?p={{{s}}}"
    },
    {
        "d": "yubnub.org",
        "b": "yn",
        "u": "http://yubnub.org/parser/parse?command={{{s}}} "
    },
    {
        "d": "www.yopmail.com",
        "b": "yop.email",
        "u": "http://www.yopmail.com/en/?login={{{s}}}"
    },
    {
        "d": "www.yopmail.com",
        "b": "yopmail",
        "u": "http://www.yopmail.com/en/index.php?login={{{s}}}"
    },
    {
        "d": "dict.youdao.com",
        "b": "youdaod",
        "u": "http://dict.youdao.com/search?q={{{s}}}"
    },
    {
        "d": "www.youdao.com",
        "b": "youdao",
        "u": "http://www.youdao.com/search?q={{{s}}}&ue=utf8&keyfrom=web.index"
    },
    {
        "d": "www.yellowpages.com",
        "b": "yp",
        "u": "https://www.yellowpages.com/search?search_terms={{{s}}}"
    },
    {
        "d": "yandex.com",
        "b": "yri",
        "u": "https://yandex.com/images/search?source=collections&&url={{{s}}}&rpt=imageview"
    },
    {
        "d": "search.yahoo.co.jp",
        "b": "yrtjp",
        "u": "https://search.yahoo.co.jp/realtime/search?p={{{s}}}"
    },
    {
        "d": "travel.yahoo.co.jp",
        "b": "ytj",
        "u": "https://travel.yahoo.co.jp/dhotel/search/?qry={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytmx",
        "u": "https://www.youtube.com/results?search_query={{{s}}}&gl=MX"
    },
    {
        "d": "translate.yandex.com",
        "b": "ytren",
        "u": "https://translate.yandex.com/?text={{{s}}}"
    },
    {
        "d": "translate.yandex.ru",
        "b": "ytr",
        "u": "https://translate.yandex.ru/?text={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytus",
        "u": "https://www.youtube.com/results?search_query={{{s}}}&gl=US"
    },
    {
        "d": "tw.dictionary.search.yahoo.com",
        "b": "ytwd",
        "u": "https://tw.dictionary.search.yahoo.com/search?p={{{s}}}"
    },
    {
        "d": "tw.search.yahoo.com",
        "b": "ytw",
        "u": "http://tw.search.yahoo.com/search?p={{{s}}}"
    },
    {
        "d": "yubnub.org",
        "b": "yubnub",
        "u": "http://yubnub.org/parser/parse?command={{{s}}}"
    },
    {
        "d": "maps.yandex.ru",
        "b": "yxmaps",
        "u": "https://maps.yandex.ru/?text={{{s}}}"
    },
    {
        "d": "search.yahoo.com",
        "b": "y",
        "u": "http://search.yahoo.com/search?p={{{s}}}"
    },
    {
        "d": "www.zabasearch.com",
        "b": "zabasearch",
        "u": "http://www.zabasearch.com/people/{{{s}}}"
    },
    {
        "d": "www.zapmeta.es",
        "b": "zapmeta",
        "u": "http://www.zapmeta.es/?vid=l791573315I1470912501&sess=a3a3a303a3a313&template=&asid=zapmeta_es&awc=&de=&nwc=&suggest=1&q={{{s}}}"
    },
    {
        "d": "www.zaragoza.es",
        "b": "zaragoza",
        "u": "http://www.zaragoza.es/ciudad/servicios/buscar_Web?q={{{s}}}"
    },
    {
        "d": "zeef.com",
        "b": "zeef",
        "u": "https://zeef.com/?query={{{s}}}&in=all"
    },
    {
        "d": "zemljevid.najdi.si",
        "b": "zemljevid",
        "u": "http://zemljevid.najdi.si/search_maps.jsp?q={{{s}}}"
    },
    {
        "d": "zetawiki.com",
        "b": "zetawiki",
        "u": "https://zetawiki.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "zetax.net",
        "b": "zetax",
        "u": "http://zetax.net/search/?q={{{s}}}"
    },
    {
        "d": "nciku.com",
        "b": "zhen",
        "u": "http://nciku.com/search/zh/{{{s}}}"
    },
    {
        "d": "www.zhihu.com",
        "b": "zhihu",
        "u": "https://www.zhihu.com/search?type=content&q={{{s}}}"
    },
    {
        "d": "www.zhihu.com",
        "b": "zhi",
        "u": "http://www.zhihu.com/search?q= {{{s}}} &type=question"
    },
    {
        "d": "www.zip-codes.com",
        "b": "zip",
        "u": "https://www.zip-codes.com/search.asp?srch-type=fuzzy&q={{{s}}}"
    },
    {
        "d": "www.zivefirmy.cz",
        "b": "zivefirmy",
        "u": "http://www.zivefirmy.cz/?q={{{s}}}"
    },
    {
        "d": "zomato.com",
        "b": "zomato",
        "u": "http://zomato.com/restaurants?q={{{s}}}"
    },
    {
        "d": "zoom.us",
        "b": "zoom.us",
        "u": "https://zoom.us/?q={{{s}}}"
    },
    {
        "d": "www.zakonyprolidi.cz",
        "b": "zpl",
        "u": "https://www.zakonyprolidi.cz/hledani?text={{{s}}}"
    },
    {
        "d": "www.zumi.pl",
        "b": "zumi",
        "u": "https://www.zumi.pl/{{{s}}},namapie.html"
    },
    {
        "d": "search.zum.com",
        "b": "zum",
        "u": "http://search.zum.com/search.zum?query={{{s}}}"
    },
    {
        "d": "www.google.gr",
        "b": "γ",
        "u": "https://www.google.gr/?gws_rd=ssl#q={{{s}}}"
    },
    {
        "d": "el.wikipedia.org",
        "b": "ςγρ",
        "u": "https://el.wikipedia.org/wiki/?search={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "г",
        "u": "https://google.com/search?hl=ru&q={{{s}}}"
    },
    {
        "d": "www.google.bg",
        "b": "гбг",
        "u": "https://www.google.bg/search?source=hp&q={{{s}}}"
    },
    {
        "d": "www.google.ru",
        "b": "гк",
        "u": "https://www.google.ru/search?q={{{s}}}&tbm=isch"
    },
    {
        "d": "yandex.ru",
        "b": "карты",
        "u": "https://yandex.ru/maps/?text={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "кгут",
        "u": "https://translate.google.com/#ru/en/{{{s}}}"
    },
    {
        "d": "www.google.bg",
        "b": "мапс",
        "u": "https://www.google.bg/maps/search/{{{s}}}/"
    },
    {
        "d": "www.google.com",
        "b": "п",
        "u": "https://www.google.com/search?q={{{s}}}"
    },
    {
        "d": "www.google.ru",
        "b": "пш",
        "u": "https://www.google.ru/search?tbm=isch&q={{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "ц",
        "u": "https://ru.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "ш",
        "u": "https://ru.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "шру",
        "u": "https://ru.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "я",
        "u": "https://yandex.ru/yandsearch?text={{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "як",
        "u": "https://yandex.ru/images/search?text={{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "ям",
        "u": "https://yandex.ru/maps/?text={{{s}}}"
    }
], bangs);

module.exports = {
    bangs
};
