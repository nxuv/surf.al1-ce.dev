var bangs = bangs || [];

bangs = [].concat([
    {
        "d": "1001boom.com",
        "b": "1001",
        "u": "http://1001boom.com/?s={{{s}}}"
    },
    {
        "d": "14-tage-wettervorhersage.de",
        "b": "14",
        "u": "https://14-tage-wettervorhersage.de/suche/?q={{{s}}}&lg=de"
    },
    {
        "d": "www.15min.lt",
        "b": "15min",
        "u": "https://www.15min.lt/paieska?q={{{s}}}"
    },
    {
        "d": "onepeterfive.com",
        "b": "1p5",
        "u": "https://onepeterfive.com/?s={{{s}}}"
    },
    {
        "d": "www.20minutes.fr",
        "b": "20m",
        "u": "http://www.20minutes.fr/search?q={{{s}}}"
    },
    {
        "d": "www.24matins.fr",
        "b": "24matins",
        "u": "http://www.24matins.fr/?s={{{s}}}"
    },
    {
        "d": "www.2nn.jp",
        "b": "2nn",
        "u": "https://www.2nn.jp/word/{{{s}}}"
    },
    {
        "d": "events.ccc.de",
        "b": "35c3",
        "u": "https://events.ccc.de/congress/2018/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.3bmeteo.com",
        "b": "3bm",
        "u": "https://www.3bmeteo.com/meteo/{{{s}}}"
    },
    {
        "d": "www.trojmiasto.pl",
        "b": "3m",
        "u": "http://www.trojmiasto.pl/s/{{{s}}}/"
    },
    {
        "d": "www.47news.jp",
        "b": "47",
        "u": "https://www.47news.jp/search?phrase={{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chnews",
        "u": "https://boards.4chan.org/news/catalog#s={{{s}}}"
    },
    {
        "d": "aktueladam.com",
        "b": "a.a",
        "u": "https://aktueladam.com/?s={{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "aamulehti",
        "u": "https://duckduckgo.com/?sites=www.aamulehti.fi&kh=1&q={{{s}}}&ia=web"
    },
    {
        "d": "search.abc.net.au",
        "b": "abcau",
        "u": "http://search.abc.net.au/s/search.html?query={{{s}}}&collection=abcall_meta&form=simple"
    },
    {
        "d": "abcnews.go.com",
        "b": "abcnews",
        "u": "http://abcnews.go.com/search?searchtext={{{s}}}"
    },
    {
        "d": "www.accuweather.com",
        "b": "accuweather",
        "u": "http://www.accuweather.com/us-city-list.asp?zipcode={{{s}}}"
    },
    {
        "d": "www.actuly.fr",
        "b": "actuly",
        "u": "https://www.actuly.fr/?s={{{s}}}"
    },
    {
        "d": "adaderana.lk",
        "b": "adaderana",
        "u": "http://adaderana.lk/search_results.php?mode=1&show=1&query={{{s}}}"
    },
    {
        "d": "www.aemet.es",
        "b": "aemet",
        "u": "http://www.aemet.es/es/buscador?modo=and&orden=n&tipo=sta&str={{{s}}}"
    },
    {
        "d": "aidenpromotions.com",
        "b": "aiden",
        "u": "https://aidenpromotions.com/blog/?s=phones {{{s}}}"
    },
    {
        "d": "america.aljazeera.com",
        "b": "aja",
        "u": "http://america.aljazeera.com/search.html?q={{{s}}}"
    },
    {
        "d": "www.aljazeera.com",
        "b": "aje",
        "u": "http://www.aljazeera.com/Search/?q={{{s}}}"
    },
    {
        "d": "www.aktuality.sk",
        "b": "aktuality",
        "u": "https://www.aktuality.sk/vyhladavanie/?q={{{s}}}"
    },
    {
        "d": "www.aktualne.cz",
        "b": "aktualne",
        "u": "https://www.aktualne.cz/hledani/?query={{{s}}}"
    },
    {
        "d": "english.aljazeera.net",
        "b": "aljazeera",
        "u": "http://english.aljazeera.net/Services/Search/?q={{{s}}}"
    },
    {
        "d": "www.allsides.com",
        "b": "allsides",
        "u": "https://www.allsides.com/allsides-search-results?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "www.alternet.org",
        "b": "alternet",
        "u": "https://www.alternet.org/search/site/{{{s}}}"
    },
    {
        "d": "www.altroconsumo.it",
        "b": "altro",
        "u": "http://www.altroconsumo.it/Serp/ShowResults?keyword={{{s}}}"
    },
    {
        "d": "www.auto-medienportal.net",
        "b": "ampnet",
        "u": "http://www.auto-medienportal.net/artikel/quicksearch/?searchterm={{{s}}}"
    },
    {
        "d": "www.ampparit.com",
        "b": "ampparit",
        "u": "http://www.ampparit.com/haku?q={{{s}}}"
    },
    {
        "d": "anilist.co",
        "b": "an",
        "u": "http://anilist.co/search?q={{{s}}}"
    },
    {
        "d": "www.androidpolice.com",
        "b": "andpol",
        "u": "http://www.androidpolice.com/?s={{{s}}}"
    },
    {
        "d": "www.anglenews.com",
        "b": "anglenews",
        "u": "https://www.anglenews.com/?s={{{s}}}"
    },
    {
        "d": "www.actionnewsjax.com",
        "b": "anj",
        "u": "http://www.actionnewsjax.com/?q={{{s}}}"
    },
    {
        "d": "www.ansa.it",
        "b": "ansa",
        "u": "http://www.ansa.it/ricerca/index.jsp?si=1&ns=10&sb=date&lang=it&home=%2Fweb&search=1&c=webarchive&qt={{{s}}}&radio-search=ansa&forid=1&ie=ISO-8859-1&oe=ISO-8859-1&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23009C41%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3A336699%3BALC%3A10578b%3BLC%3A10578b%3BT%3A000000%3BGFNT%3A10578b%3BGIMP%3A10578b%3BFORID%3A11&hl=it&client=pub-2538762546398839"
    },
    {
        "d": "news.antiwar.com",
        "b": "antiwar",
        "u": "http://news.antiwar.com/?s={{{s}}}"
    },
    {
        "d": "antyweb.pl",
        "b": "antyweb",
        "u": "http://antyweb.pl/?s={{{s}}}"
    },
    {
        "d": "ap.org",
        "b": "ap",
        "u": "http://ap.org/Search/SearchResults?searchkeywords={{{s}}}"
    },
    {
        "d": "hk.appledaily.com",
        "b": "appledaily",
        "u": "https://hk.appledaily.com/search/{{{s}}}?q={{{s}}}"
    },
    {
        "d": "tw.appledaily.com",
        "b": "appledailytw",
        "u": "https://tw.appledaily.com/search/result?querystrS={{{s}}}"
    },
    {
        "d": "www.april.org",
        "b": "april",
        "u": "https://www.april.org/search/node/{{{s}}}"
    },
    {
        "d": "aqicn.org",
        "b": "aqicn",
        "u": "http://aqicn.org/city/{{{s}}}"
    },
    {
        "d": "www.arabnews.com",
        "b": "arabnews",
        "u": "http://www.arabnews.com/search/google/{{{s}}}"
    },
    {
        "d": "www.ara.cat",
        "b": "ara",
        "u": "http://www.ara.cat/cercador/?text={{{s}}}"
    },
    {
        "d": "www.archdaily.com",
        "b": "archdaily",
        "u": "https://www.archdaily.com/search/all?q={{{s}}}"
    },
    {
        "d": "archive.org",
        "b": "archivetv",
        "u": "https://archive.org/details/tv?q={{{s}}}"
    },
    {
        "d": "arstechnica.com",
        "b": "arstechnica",
        "u": "https://arstechnica.com/search/?q={{{s}}}"
    },
    {
        "d": "www.aparatorul.md",
        "b": "art",
        "u": "https://www.aparatorul.md/?s={{{s}}}"
    },
    {
        "d": "sitesearch.asahi.com",
        "b": "asahi",
        "u": "http://sitesearch.asahi.com/.cgi/sitesearch/sitesearch.pl?Keywords={{{s}}}"
    },
    {
        "d": "ca.askmen.com",
        "b": "askmen",
        "u": "http://ca.askmen.com/search?q={{{s}}}"
    },
    {
        "d": "allthingsd.com",
        "b": "atd",
        "u": "http://allthingsd.com/?s={{{s}}}:"
    },
    {
        "d": "www.atmatix.pl",
        "b": "atmatix",
        "u": "https://www.atmatix.pl/patterns/all?q={{{s}}}"
    },
    {
        "d": "www.theaustralian.com.au",
        "b": "australian",
        "u": "https://www.theaustralian.com.au/search-results?q={{{s}}}"
    },
    {
        "d": "www.autocosmos.com.mx",
        "b": "autos",
        "u": "http://www.autocosmos.com.mx/search?q={{{s}}}"
    },
    {
        "d": "www.avanza.se",
        "b": "avanza",
        "u": "https://www.avanza.se/sok.html?query={{{s}}}"
    },
    {
        "d": "www.adamvstheman.com",
        "b": "avtm",
        "u": "http://www.adamvstheman.com/?s={{{s}}} "
    },
    {
        "d": "azol.de",
        "b": "azol",
        "u": "http://azol.de/suche/?q={{{s}}}"
    },
    {
        "d": "azspot.net",
        "b": "azs",
        "u": "https://azspot.net/search/{{{s}}}"
    },
    {
        "d": "babidoo.de",
        "b": "babidoo",
        "u": "https://babidoo.de/?s={{{s}}}"
    },
    {
        "d": "banned.video",
        "b": "banned",
        "u": "https://banned.video/?q={{{s}}}"
    },
    {
        "d": "www.breitbart.com",
        "b": "bbart",
        "u": "http://www.breitbart.com/search/?s={{{s}}}"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbc",
        "u": "http://www.bbc.co.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbcfood",
        "u": "http://www.bbc.co.uk/food/recipes/search?keywords={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbcm",
        "u": "http://www.bbc.co.uk/mundo/search/?q={{{s}}}"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbcnews",
        "u": "http://www.bbc.co.uk/search/news/?q={{{s}}}"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbcw",
        "u": "https://www.bbc.co.uk/weather/search?s={{{s}}}"
    },
    {
        "d": "www.blockchainwalls.com",
        "b": "bcwalls",
        "u": "https://www.blockchainwalls.com/category/{{{s}}}"
    },
    {
        "d": "www.bournemouthecho.co.uk",
        "b": "becho",
        "u": "https://www.bournemouthecho.co.uk/search/?search={{{s}}}"
    },
    {
        "d": "beebom.com",
        "b": "beebom",
        "u": "https://beebom.com/?s={{{s}}}"
    },
    {
        "d": "www.begeek.fr",
        "b": "begeek",
        "u": "http://www.begeek.fr/?s={{{s}}}"
    },
    {
        "d": "kgov.com",
        "b": "bel",
        "u": "https://kgov.com/search?query={{{s}}}"
    },
    {
        "d": "luzonmorningsun.com",
        "b": "beneco",
        "u": "http://luzonmorningsun.com/?s={{{s}}}"
    },
    {
        "d": "katasapa.com",
        "b": "berita",
        "u": "https://katasapa.com/vanessa?q={{{s}}}"
    },
    {
        "d": "b.dk",
        "b": "berlingske",
        "u": "http://b.dk/search/{{{s}}}"
    },
    {
        "d": "www.bfm.my",
        "b": "bfm899",
        "u": "https://www.bfm.my/podcast.html?qseaid={{{s}}}&pseaid=latest&iseaid=all&dsseaid=&deseaid=&tag=&prg="
    },
    {
        "d": "www.bergfex.at",
        "b": "bfx",
        "u": "https://www.bergfex.at/suchen/?q={{{s}}}"
    },
    {
        "d": "www.birikimdergisi.com",
        "b": "birikim",
        "u": "http://www.birikimdergisi.com/arama/{{{s}}}"
    },
    {
        "d": "www.bjp.org",
        "b": "bjp",
        "u": "http://www.bjp.org/?searchword={{{s}}}&searchphrase=exact&limit=20&ordering=newest&view=search&option=com_search"
    },
    {
        "d": "search.bangkokpost.com",
        "b": "bkkpost",
        "u": "https://search.bangkokpost.com/search/result_advanced?category=all&xChannel=&q={{{s}}}"
    },
    {
        "d": "www.theblaze.com",
        "b": "blaze",
        "u": "http://www.theblaze.com/?s={{{s}}}"
    },
    {
        "d": "blendle.nl",
        "b": "blendle",
        "u": "https://blendle.nl/search/{{{s}}}"
    },
    {
        "d": "www.blickamabend.ch",
        "b": "blickaa",
        "u": "http://www.blickamabend.ch/suche/?q={{{s}}}"
    },
    {
        "d": "www.bloomberg.com",
        "b": "blmb",
        "u": "http://www.bloomberg.com/search?query={{{s}}}"
    },
    {
        "d": "bloganchoi.com",
        "b": "bloganchoi",
        "u": "http://bloganchoi.com/?s={{{s}}}"
    },
    {
        "d": "www.bloomberg.com",
        "b": "bloom",
        "u": "https://www.bloomberg.com/search?query={{{s}}}"
    },
    {
        "d": "www.boerse-online.de",
        "b": "bo",
        "u": "http://www.boerse-online.de/suchergebnisse?_search={{{s}}}"
    },
    {
        "d": "www.bona.co.za",
        "b": "bona",
        "u": "https://www.bona.co.za/?s={{{s}}}"
    },
    {
        "d": "www.bostonglobe.com",
        "b": "bostonglobe",
        "u": "http://www.bostonglobe.com/queryResult/search?q={{{s}}}"
    },
    {
        "d": "www.bloombergquint.com",
        "b": "bq",
        "u": "https://www.bloombergquint.com/search?q={{{s}}}"
    },
    {
        "d": "brakdag.nl",
        "b": "brakdag",
        "u": "https://brakdag.nl/?s={{{s}}}"
    },
    {
        "d": "www.breitbart.com",
        "b": "breitbart",
        "u": "http://www.breitbart.com/search/?s={{{s}}}"
    },
    {
        "d": "www.businessinsider.com",
        "b": "bsi",
        "u": "http://www.businessinsider.com/s?q={{{s}}}"
    },
    {
        "d": "buchonline.info",
        "b": "buch",
        "u": "https://buchonline.info/?s={{{s}}}"
    },
    {
        "d": "www.buienalarm.nl",
        "b": "buien",
        "u": "http://www.buienalarm.nl/location/{{{s}}}"
    },
    {
        "d": "www.lawyersaroundme.com",
        "b": "bung",
        "u": "http://www.lawyersaroundme.com/search/?term={{{s}}}"
    },
    {
        "d": "www.basketusa.com",
        "b": "busa",
        "u": "http://www.basketusa.com/?s={{{s}}}"
    },
    {
        "d": "www.bing.com",
        "b": "bw",
        "u": "https://www.bing.com/weather/forecast?q={{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "cap",
        "u": "https://coinmarketcap.com/search/?q={{{s}}}"
    },
    {
        "d": "www.capital.bg",
        "b": "capital",
        "u": "https://www.capital.bg/search.php?stext={{{s}}}"
    },
    {
        "d": "stadt-bremerhaven.de",
        "b": "caschy",
        "u": "http://stadt-bremerhaven.de/?s={{{s}}}"
    },
    {
        "d": "www.cbc.ca",
        "b": "cbc",
        "u": "https://www.cbc.ca/search?q={{{s}}}"
    },
    {
        "d": "search.cbsnews.com",
        "b": "cbsnews",
        "u": "http://search.cbsnews.com/?source=cbs&q={{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "ccm",
        "u": "https://coinmarketcap.com/currencies/search/?q={{{s}}}"
    },
    {
        "d": "canadiancouchpotato.com",
        "b": "ccp",
        "u": "http://canadiancouchpotato.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "so.cntv.cn",
        "b": "cctv",
        "u": "http://so.cntv.cn/language/english/?qtext={{{s}}}"
    },
    {
        "d": "www.cdm.me",
        "b": "cdm",
        "u": "http://www.cdm.me/pretraga/{{{s}}}"
    },
    {
        "d": "celebrity.tn",
        "b": "celebrity",
        "u": "https://celebrity.tn/?s={{{s}}}"
    },
    {
        "d": "www.centredaily.com",
        "b": "centredailytimes",
        "u": "http://www.centredaily.com/search/?q={{{s}}}"
    },
    {
        "d": "www.cerberusbyte.com",
        "b": "cerb",
        "u": "https://www.cerberusbyte.com/?s={{{s}}}"
    },
    {
        "d": "championrunner.com",
        "b": "champion",
        "u": "https://championrunner.com/?s={{{s}}}"
    },
    {
        "d": "www.channel4.com",
        "b": "channel4",
        "u": "http://www.channel4.com/search/?q={{{s}}}"
    },
    {
        "d": "www.channel5.com",
        "b": "channel5",
        "u": "http://www.channel5.com/search?q={{{s}}}"
    },
    {
        "d": "cheddar.com",
        "b": "cheddar",
        "u": "https://cheddar.com/search?q={{{s}}}"
    },
    {
        "d": "www.chicagotribune.com",
        "b": "chicagotribune",
        "u": "http://www.chicagotribune.com/search/dispatcher.front?Query={{{s}}}&sortby=display_time+descending&subheader-search-button=Go&target=article"
    },
    {
        "d": "www.chilango.com",
        "b": "chilango",
        "u": "https://www.chilango.com/?s={{{s}}}"
    },
    {
        "d": "www.lachainemeteo.com",
        "b": "chm",
        "u": "https://www.lachainemeteo.com/synthese-previsions-meteo-{{{s}}}"
    },
    {
        "d": "nsearch.chosun.com",
        "b": "chosun",
        "u": "http://nsearch.chosun.com/search/total.search?query={{{s}}}"
    },
    {
        "d": "choualbox.com",
        "b": "choualbox",
        "u": "https://choualbox.com/recherche?q={{{s}}}"
    },
    {
        "d": "www.churchofsatan.com",
        "b": "churchofsatan",
        "u": "http://www.churchofsatan.com/search-results.php?q={{{s}}}"
    },
    {
        "d": "ciied.xyz",
        "b": "ciied",
        "u": "http://ciied.xyz/?s={{{s}}}"
    },
    {
        "d": "conjour.world",
        "b": "cj",
        "u": "https://conjour.world/?s={{{s}}}"
    },
    {
        "d": "www.clarin.com",
        "b": "clarin",
        "u": "https://www.clarin.com/buscador/?q={{{s}}}"
    },
    {
        "d": "clark.com",
        "b": "clark",
        "u": "https://clark.com/search/?q={{{s}}}"
    },
    {
        "d": "www.clicrbs.com.br",
        "b": "clicrbs",
        "u": "http://www.clicrbs.com.br/busca/rs/?q={{{s}}} "
    },
    {
        "d": "www.climatempo.com.br",
        "b": "climatempo",
        "u": "http://www.climatempo.com.br/?q={{{s}}}"
    },
    {
        "d": "search.cnbc.com",
        "b": "cnbc",
        "u": "http://search.cnbc.com/main.do?target=all&keywords={{{s}}}"
    },
    {
        "d": "www.conservativehome.com",
        "b": "cnh",
        "u": "https://www.conservativehome.com/?s={{{s}}}"
    },
    {
        "d": "www.cnn.com",
        "b": "cnn",
        "u": "http://www.cnn.com/search/?q={{{s}}}"
    },
    {
        "d": "cnnespanol.cnn.com",
        "b": "cnne",
        "u": "http://cnnespanol.cnn.com/?s={{{s}}}"
    },
    {
        "d": "casinonews.today",
        "b": "cnt",
        "u": "http://casinonews.today/?s={{{s}}} "
    },
    {
        "d": "www.counterpunch.org",
        "b": "cntrp",
        "u": "https://www.counterpunch.org/search-results/?q={{{s}}}"
    },
    {
        "d": "cannanewswire.co",
        "b": "cnw",
        "u": "https://cannanewswire.co/?s={{{s}}}"
    },
    {
        "d": "www.elconfidencial.com",
        "b": "confi",
        "u": "http://www.elconfidencial.com/buscar/2-6-1-3/0/1/10/desc/{{{s}}}/"
    },
    {
        "d": "contamet.wordpress.com",
        "b": "contamet",
        "u": "http://contamet.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "theconversation.com",
        "b": "conv",
        "u": "https://theconversation.com/search?q={{{s}}}"
    },
    {
        "d": "sitesearch.corriere.it",
        "b": "corriere",
        "u": "http://sitesearch.corriere.it/forward.jsp?q={{{s}}}"
    },
    {
        "d": "www.cosmoty.de",
        "b": "cosmoty",
        "u": "http://www.cosmoty.de/suche/{{{s}}}/"
    },
    {
        "d": "cottrillcompass.com",
        "b": "cottrillcompassblog",
        "u": "http://cottrillcompass.com/blog/?s={{{s}}}"
    },
    {
        "d": "www.courant.com",
        "b": "courant",
        "u": "http://www.courant.com/search/dispatcher.front?target=article&sortby=display_time++descending&Query={{{s}}} "
    },
    {
        "d": "www.courrierinternational.com",
        "b": "courrierint",
        "u": "http://www.courrierinternational.com/search/result/{{{s}}}"
    },
    {
        "d": "www.rollcall.com",
        "b": "cqrq",
        "u": "https://www.rollcall.com/page/search?keyword={{{s}}}&advanced=false&sort=relevance"
    },
    {
        "d": "crickhero.blogspot.com",
        "b": "crickhero",
        "u": "https://crickhero.blogspot.com/search/?q={{{s}}}"
    },
    {
        "d": "www.crol.hr",
        "b": "crol",
        "u": "https://www.crol.hr/index.php/search?searchword={{{s}}}&searchphrase=all"
    },
    {
        "d": "www.cronista.com",
        "b": "cronista",
        "u": "https://www.cronista.com/buscar/{{{s}}}"
    },
    {
        "d": "www.cryptoanalyst.co",
        "b": "cryptoanalyst",
        "u": "https://www.cryptoanalyst.co/?s={{{s}}}"
    },
    {
        "d": "cryptocoinspy.com",
        "b": "cryptocoinspy",
        "u": "https://cryptocoinspy.com/?s={{{s}}}"
    },
    {
        "d": "noname.c64.org",
        "b": "csdb",
        "u": "http://noname.c64.org/csdb/search/?seinsel=all&search={{{s}}}"
    },
    {
        "d": "www.csmonitor.com",
        "b": "csmonitor",
        "u": "http://www.csmonitor.com/content/search?SearchText={{{s}}}&SearchButton=Search"
    },
    {
        "d": "www.c-span.org",
        "b": "cspan",
        "u": "https://www.c-span.org/search/basic/?query={{{s}}}"
    },
    {
        "d": "www.collegiatetimes.com",
        "b": "ctimes",
        "u": "https://www.collegiatetimes.com/search/?q={{{s}}}"
    },
    {
        "d": "www.ctvnews.ca",
        "b": "ctvnews",
        "u": "http://www.ctvnews.ca/search-results/search-ctv-news-7.137?q={{{s}}}"
    },
    {
        "d": "www.cubanet.org",
        "b": "cubanet",
        "u": "http://www.cubanet.org/?s={{{s}}}"
    },
    {
        "d": "cvmweb.cvm.gov.br",
        "b": "cvmcia",
        "u": "http://cvmweb.cvm.gov.br/SWB/Sistemas/SCW/CPublica/CiaAb/ResultBuscaParticCiaAb.aspx?CNPJNome={{{s}}}&TipoConsult=C"
    },
    {
        "d": "www.cyberscoop.com",
        "b": "cyber",
        "u": "https://www.cyberscoop.com/?s={{{s}}}"
    },
    {
        "d": "www.dagen.se",
        "b": "dagen",
        "u": "http://www.dagen.se/search-7.157994?sortby=date&q={{{s}}}"
    },
    {
        "d": "www.collegian.psu.edu",
        "b": "dailycollegian",
        "u": "http://www.collegian.psu.edu/search/?f=html&q={{{s}}}"
    },
    {
        "d": "www.dailymail.co.uk",
        "b": "dailymail",
        "u": "https://www.dailymail.co.uk/home/search.html?sel=site&searchPhrase={{{s}}}"
    },
    {
        "d": "www.delcotimes.com",
        "b": "dailytimes",
        "u": "http://www.delcotimes.com/search?text={{{s}}}"
    },
    {
        "d": "www.dallasnews.com",
        "b": "dallasnews",
        "u": "https://www.dallasnews.com/search?q={{{s}}}"
    },
    {
        "d": "www.d-archive.org",
        "b": "darc",
        "u": "https://www.d-archive.org/?s={{{s}}}"
    },
    {
        "d": "www.darknetmarkets.net",
        "b": "darknetmarkets",
        "u": "https://www.darknetmarkets.net/?s={{{s}}}"
    },
    {
        "d": "www.dcrainmaker.com",
        "b": "dcr",
        "u": "http://www.dcrainmaker.com/?s={{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgn",
        "u": "http://duckduckgo.com/?q={{{s}}}&iar=news&ia=news"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgpd",
        "u": "https://duckduckgo.com/?df=d&q={{{s}}}"
    },
    {
        "d": "www.daytondailynews.com",
        "b": "ddn",
        "u": "https://www.daytondailynews.com/google-search/?q={{{s}}}"
    },
    {
        "d": "www.deepdotweb.com",
        "b": "ddw",
        "u": "https://www.deepdotweb.com/?s={{{s}}}"
    },
    {
        "d": "deadline.com",
        "b": "deadline",
        "u": "https://deadline.com/results/#?q={{{s}}} "
    },
    {
        "d": "dealbook.nytimes.com",
        "b": "deal",
        "u": "http://dealbook.nytimes.com/?s={{{s}}}"
    },
    {
        "d": "decoracion2.com",
        "b": "deco",
        "u": "https://decoracion2.com/search/{{{s}}}"
    },
    {
        "d": "www.delcotimes.com",
        "b": "delcotimes",
        "u": "http://www.delcotimes.com/search?text={{{s}}}"
    },
    {
        "d": "www.delfi.lt",
        "b": "delfi",
        "u": "http://www.delfi.lt/paieska/?q={{{s}}}"
    },
    {
        "d": "otsing.delfi.ee",
        "b": "delfiee",
        "u": "http://otsing.delfi.ee/find?c=dns&q={{{s}}} &x=0&y=0"
    },
    {
        "d": "www.delfi.lt",
        "b": "delflt",
        "u": "http://www.delfi.lt/paieska/?q={{{s}}}"
    },
    {
        "d": "www.delijn.be",
        "b": "delijn",
        "u": "https://www.delijn.be/nl/zoekresultaten/index.html?searchtext={{{s}}}"
    },
    {
        "d": "www.democracynow.org",
        "b": "democracynow",
        "u": "http://www.democracynow.org/search?query={{{s}}}"
    },
    {
        "d": "deredactie.be",
        "b": "deredactie",
        "u": "http://deredactie.be/cm/vrtnieuws/1.516538?text={{{s}}}&action=submit"
    },
    {
        "d": "www.derstandard.at",
        "b": "derstandard",
        "u": "https://www.derstandard.at/search?query={{{s}}}"
    },
    {
        "d": "www.designernews.co",
        "b": "designernews",
        "u": "https://www.designernews.co/search?q={{{s}}}"
    },
    {
        "d": "destinonegocio.com",
        "b": "destinonegocio",
        "u": "http://destinonegocio.com/search/{{{s}}}"
    },
    {
        "d": "www.detik.com",
        "b": "detik",
        "u": "https://www.detik.com/search/searchall?query={{{s}}}"
    },
    {
        "d": "www.dexigner.com",
        "b": "dexigner",
        "u": "http://www.dexigner.com/search?q={{{s}}}"
    },
    {
        "d": "index.hu",
        "b": "dex",
        "u": "http://index.hu/24ora/?word=1&pepe=1&tol=1999-01-01&ig=2016-01-18&s={{{s}}}"
    },
    {
        "d": "www.dhnet.be",
        "b": "dhnet",
        "u": "http://www.dhnet.be/search/?query={{{s}}}"
    },
    {
        "d": "diepresse.com",
        "b": "diepresse",
        "u": "http://diepresse.com/user/search.do?resetForm=1&resultsPage=0&searchText={{{s}}}&x=0&y=0"
    },
    {
        "d": "digg.com",
        "b": "digg",
        "u": "http://digg.com/search?q={{{s}}}"
    },
    {
        "d": "www.digi24.ro",
        "b": "digi24",
        "u": "https://www.digi24.ro/cautare?q={{{s}}}"
    },
    {
        "d": "www.digibron.nl",
        "b": "digibron",
        "u": "https://www.digibron.nl/search/results?q={{{s}}}"
    },
    {
        "d": "www.digi.no",
        "b": "digi",
        "u": "https://www.digi.no/sok?query={{{s}}}"
    },
    {
        "d": "www.monde-diplomatique.fr",
        "b": "diplo",
        "u": "http://www.monde-diplomatique.fr/recherche?s={{{s}}}"
    },
    {
        "d": "www.disclose.tv",
        "b": "disclosetv",
        "u": "http://www.disclose.tv/search/desk?title={{{s}}}"
    },
    {
        "d": "www.deutschlandfunk.de",
        "b": "dlf",
        "u": "http://www.deutschlandfunk.de/suchergebnisse.448.de.html?search%5Bsubmit%5D=1&search%5BwithNews%5D%5B%5D=WithNews&search%5Bword%5D={{{s}}}"
    },
    {
        "d": "www.dmi.dk",
        "b": "dmiby",
        "u": "http://www.dmi.dk/byindex?by={{{s}}}"
    },
    {
        "d": "www.dmi.dk",
        "b": "dmi",
        "u": "http://www.dmi.dk/byindex?by={{{s}}}"
    },
    {
        "d": "www.dn.se",
        "b": "dn",
        "u": "https://www.dn.se/sok/?q={{{s}}}&page=1&sort=relevance"
    },
    {
        "d": "www.dnevnik.bg",
        "b": "dnevnik",
        "u": "https://www.dnevnik.bg/search/{{{s}}}"
    },
    {
        "d": "www.dnt.no",
        "b": "dnt",
        "u": "https://www.dnt.no/søk/?q={{{s}}}"
    },
    {
        "d": "www.dpreview.com",
        "b": "dpreview",
        "u": "http://www.dpreview.com/search/?query={{{s}}}&terms={{{s}}}"
    },
    {
        "d": "www.deutschlandradio.de",
        "b": "dradio",
        "u": "http://www.deutschlandradio.de/text-und-audio-suche.287.de.html?search%5Bsubmit%5D=1&search%5Bword%5D={{{s}}}"
    },
    {
        "d": "www.drargapress.com",
        "b": "drargapress",
        "u": "http://www.drargapress.com/?s={{{s}}}"
    },
    {
        "d": "www.dr.dk",
        "b": "drdk",
        "u": "http://www.dr.dk/search/Result?query={{{s}}}"
    },
    {
        "d": "www.diarioregistrado.com",
        "b": "dreg",
        "u": "https://www.diarioregistrado.com/search?text={{{s}}}"
    },
    {
        "d": "www.drudgereportarchives.com",
        "b": "drudge",
        "u": "http://www.drudgereportarchives.com/dsp/search.htm?searchFor={{{s}}}"
    },
    {
        "d": "www.standaard.be",
        "b": "ds",
        "u": "http://www.standaard.be/zoeken?keyword={{{s}}} "
    },
    {
        "d": "www.dwd.de",
        "b": "dwd",
        "u": "https://www.dwd.de/DE/wetter/warnungen/warnWetter_node.html?ort={{{s}}}"
    },
    {
        "d": "www.dwdl.de",
        "b": "dwdl",
        "u": "http://www.dwdl.de/features/suche/?suche={{{s}}} "
    },
    {
        "d": "www.dw.com",
        "b": "dwe",
        "u": "http://www.dw.com/search/es?languageCode=es&item={{{s}}}"
    },
    {
        "d": "dark-world.ru",
        "b": "dwru",
        "u": "http://dark-world.ru/search/?q={{{s}}}"
    },
    {
        "d": "www.e1.ru",
        "b": "e1",
        "u": "https://www.e1.ru/news/search/?search={{{s}}}"
    },
    {
        "d": "london.eater.com",
        "b": "eaterlon",
        "u": "https://london.eater.com/search?q={{{s}}}"
    },
    {
        "d": "ebukaokorie.blogspot.com",
        "b": "ebukaokoriesblog",
        "u": "https://ebukaokorie.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "www.economist.com",
        "b": "economist",
        "u": "https://www.economist.com/search?q={{{s}}}"
    },
    {
        "d": "economictimes.indiatimes.com",
        "b": "ecotimesindia",
        "u": "https://economictimes.indiatimes.com/topic/{{{s}}}"
    },
    {
        "d": "www.ecuavisa.com",
        "b": "ecuavisa",
        "u": "https://www.ecuavisa.com/busqueda?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "everydayfeminism.com",
        "b": "edfeminism",
        "u": "http://everydayfeminism.com/?s={{{s}}}"
    },
    {
        "d": "www.elsalvador.com",
        "b": "edh",
        "u": "https://www.elsalvador.com/search?s={{{s}}}"
    },
    {
        "d": "edmofy.com",
        "b": "edm",
        "u": "http://edmofy.com/?s={{{s}}}"
    },
    {
        "d": "www.edmsauce.com",
        "b": "edmsauce",
        "u": "https://www.edmsauce.com/?s={{{s}}}"
    },
    {
        "d": "eldigitalpanama.com",
        "b": "edpanama",
        "u": "https://eldigitalpanama.com/?s={{{s}}}"
    },
    {
        "d": "www.eldestapeweb.com",
        "b": "edweb",
        "u": "http://www.eldestapeweb.com/{{{s}}}-s"
    },
    {
        "d": "www.edweek.org",
        "b": "edweek",
        "u": "http://www.edweek.org/search.html?q={{{s}}}"
    },
    {
        "d": "eic.rsc.org",
        "b": "eic",
        "u": "https://eic.rsc.org/searchresults?qkeyword={{{s}}}"
    },
    {
        "d": "eksisozluk.com",
        "b": "ekşi",
        "u": "https://eksisozluk.com/?q={{{s}}}"
    },
    {
        "d": "ekspress.delfi.ee",
        "b": "ekspress",
        "u": "http://ekspress.delfi.ee/otsing/?query={{{s}}}"
    },
    {
        "d": "www.el19digital.com",
        "b": "el19",
        "u": "https://www.el19digital.com/busqueda/articulos?q={{{s}}}"
    },
    {
        "d": "elcomercio.pe",
        "b": "elcomercio",
        "u": "https://elcomercio.pe/buscar/?query={{{s}}}"
    },
    {
        "d": "elcomercio.pe",
        "b": "elcomerciope",
        "u": "https://elcomercio.pe/buscar/?query={{{s}}}"
    },
    {
        "d": "elliottwaveideas.com",
        "b": "elliottwave",
        "u": "https://elliottwaveideas.com/search.php?query={{{s}}}"
    },
    {
        "d": "ariadna.elmundo.es",
        "b": "elmundo",
        "u": "http://ariadna.elmundo.es/buscador/archivo.html?q={{{s}}}&b_avanzada="
    },
    {
        "d": "www.elobservador.com.uy",
        "b": "elobs",
        "u": "http://www.elobservador.com.uy/{{{s}}}-s"
    },
    {
        "d": "elpais.com",
        "b": "elpais",
        "u": "http://elpais.com/buscador/?qt={{{s}}}"
    },
    {
        "d": "search.theregister.co.uk",
        "b": "elreg",
        "u": "http://search.theregister.co.uk/?q={{{s}}}"
    },
    {
        "d": "www.eluniverso.com",
        "b": "eluniverso",
        "u": "https://www.eluniverso.com/resultados?search={{{s}}}"
    },
    {
        "d": "www.eternitynews.com.au",
        "b": "enews",
        "u": "https://www.eternitynews.com.au/?s={{{s}}}"
    },
    {
        "d": "entranceadda.in",
        "b": "entrance",
        "u": "https://entranceadda.in/?s={{{s}}}"
    },
    {
        "d": "en.wikinews.org",
        "b": "enwn",
        "u": "https://en.wikinews.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.epw.in",
        "b": "epwin",
        "u": "http://www.epw.in/search/site/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "equestriadaily",
        "u": "http://duckduckgo.com/?q=site:equestriadaily.com+{{{s}}}"
    },
    {
        "d": "busca.estadao.com.br",
        "b": "estadao",
        "u": "https://busca.estadao.com.br/?q={{{s}}}"
    },
    {
        "d": "www.eltiempo.es",
        "b": "et",
        "u": "http://www.eltiempo.es/buscar?q={{{s}}}"
    },
    {
        "d": "etnet.com.hk",
        "b": "etnet",
        "u": "http://etnet.com.hk/?q={{{s}}}"
    },
    {
        "d": "www.euronews.com",
        "b": "euronewsen",
        "u": "http://www.euronews.com/search?query={{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "ev",
        "u": "https://cse.google.com/cse?cx=008464549922976904202:3wy4ipwvlno&q={{{s}}}&oq={{{s}}}&gs_l=partner-generic.3...27208.27522.3.27758.3.3.0.0.0.0.67.174.3.3.0.gsnos%2Cn%3D13...0.1844j1376214j6j1...1.34.partner-generic..3.2.102.qiNHoIwD47w"
    },
    {
        "d": "www.standard.co.uk",
        "b": "eveningstandard",
        "u": "http://www.standard.co.uk/search/site/{{{s}}} "
    },
    {
        "d": "www.weltexporte.de",
        "b": "export",
        "u": "https://www.weltexporte.de/?s={{{s}}}"
    },
    {
        "d": "www.f1zone.net",
        "b": "f1",
        "u": "http://www.f1zone.net/news/index.php?s={{{s}}}"
    },
    {
        "d": "www.france3.fr",
        "b": "f3",
        "u": "http://www.france3.fr/recherche?s={{{s}}}"
    },
    {
        "d": "factly.in",
        "b": "factly",
        "u": "https://factly.in/?s={{{s}}}"
    },
    {
        "d": "www.faillissementen.com",
        "b": "failliet",
        "u": "https://www.faillissementen.com/insolventies/nederlandse-insolventies/?q={{{s}}}"
    },
    {
        "d": "fair.org",
        "b": "fair",
        "u": "https://fair.org/?s={{{s}}}"
    },
    {
        "d": "www.fantasy.fr",
        "b": "fantasy",
        "u": "http://www.fantasy.fr/searches/index/{{{s}}} "
    },
    {
        "d": "www.fark.com",
        "b": "fark",
        "u": "https://www.fark.com/hlsearch?&qq={{{s}}}"
    },
    {
        "d": "www.farmfor.com.br",
        "b": "farmfor",
        "u": "https://www.farmfor.com.br/?s={{{s}}}"
    },
    {
        "d": "www.faz.net",
        "b": "faz",
        "u": "http://www.faz.net/suche/?query={{{s}}}"
    },
    {
        "d": "feedly.com",
        "b": "fdl",
        "u": "https://feedly.com/i/search/{{{s}}}"
    },
    {
        "d": "thefederalist.com",
        "b": "fdrlst",
        "u": "http://thefederalist.com/?s={{{s}}}"
    },
    {
        "d": "ffbbunt.wordpress.com",
        "b": "ffbbunt",
        "u": "https://ffbbunt.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "www.finanzen.net",
        "b": "finanzennet",
        "u": "http://www.finanzen.net/suchergebnis.asp?_search={{{s}}}"
    },
    {
        "d": "finviz.com",
        "b": "fin",
        "u": "https://finviz.com/search.ashx?p={{{s}}}"
    },
    {
        "d": "www.francetvinfo.fr",
        "b": "finfo",
        "u": "https://www.francetvinfo.fr/recherche/?request={{{s}}}"
    },
    {
        "d": "www.firstpost.com",
        "b": "firstpost",
        "u": "http://www.firstpost.com/?s={{{s}}}"
    },
    {
        "d": "www.frontlinedefenders.org",
        "b": "fld",
        "u": "https://www.frontlinedefenders.org/en/search/{{{s}}}"
    },
    {
        "d": "ilmatieteenlaitos.fi",
        "b": "fmi",
        "u": "http://ilmatieteenlaitos.fi/saa/{{{s}}}"
    },
    {
        "d": "www.foromedios.com",
        "b": "fms",
        "u": "http://www.foromedios.com/index.php?app=core&module=search&do=search&andor_type=&sid=&search_app_filters[forums][sortKey]=date&search_app_filters[forums][sortKey]=date&search_app_filters[forums][searchInKey]=&search_term={{{s}}}&search_app=forums"
    },
    {
        "d": "www.finanzen.net",
        "b": "fnet",
        "u": "http://www.finanzen.net/suchergebnis.asp?frmAktiensucheTextfeld={{{s}}}"
    },
    {
        "d": "search.folha.com.br",
        "b": "folha",
        "u": "http://search.folha.com.br/search?q={{{s}}}"
    },
    {
        "d": "search.forbes.com",
        "b": "forbes",
        "u": "http://search.forbes.com/search/find?MT={{{s}}}"
    },
    {
        "d": "www.foxnews.com",
        "b": "fox",
        "u": "http://www.foxnews.com/search-results/search?q={{{s}}}&submit=Search"
    },
    {
        "d": "www.foxnews.com",
        "b": "foxnews",
        "u": "http://www.foxnews.com/search-results/search?q={{{s}}}"
    },
    {
        "d": "news.francheval.com",
        "b": "francheval",
        "u": "https://news.francheval.com/search?q={{{s}}} "
    },
    {
        "d": "freedom.press",
        "b": "freedompress",
        "u": "https://freedom.press/search/?query={{{s}}}"
    },
    {
        "d": "www.freerepublic.com",
        "b": "freep",
        "u": "https://www.freerepublic.com/tag/{{{s}}}/index?tab=articles"
    },
    {
        "d": "www.freitag.de",
        "b": "freitag",
        "u": "https://www.freitag.de/@@search?SearchableText={{{s}}}&SubmitSearch=Suche"
    },
    {
        "d": "www.franceinter.fr",
        "b": "fri",
        "u": "https://www.franceinter.fr/recherche?q={{{s}}}"
    },
    {
        "d": "www.lesfrontaliers.lu",
        "b": "frontalux",
        "u": "http://www.lesfrontaliers.lu/search?text={{{s}}}"
    },
    {
        "d": "factualsearch.news",
        "b": "fs",
        "u": "https://factualsearch.news/#/&gsc.q={{{s}}} "
    },
    {
        "d": "futurism.com",
        "b": "fsm",
        "u": "http://futurism.com/?s={{{s}}}"
    },
    {
        "d": "www.ft.com",
        "b": "ft",
        "u": "https://www.ft.com/search?q={{{s}}}"
    },
    {
        "d": "finviz.com",
        "b": "fv",
        "u": "http://finviz.com/quote.ashx?t={{{s}}}"
    },
    {
        "d": "gayburg.blogspot.com",
        "b": "gayburg",
        "u": "http://gayburg.blogspot.com/search?q={{{s}}}: "
    },
    {
        "d": "www.gazetadopovo.com.br",
        "b": "gazeta",
        "u": "https://www.gazetadopovo.com.br/busca/?q={{{s}}}"
    },
    {
        "d": "www.gurufocus.com",
        "b": "gfguru",
        "u": "https://www.gurufocus.com/guru/{{{s}}}/stock-picks"
    },
    {
        "d": "www.gurufocus.com",
        "b": "gfstock",
        "u": "https://www.gurufocus.com/stock/{{{s}}}/summary"
    },
    {
        "d": "ggr-law.com",
        "b": "ggrlaw",
        "u": "https://ggr-law.com/suche/?id=1843&tx_kesearch_pi1%5Bsword%5D={{{s}}}"
    },
    {
        "d": "ghananews.xyz",
        "b": "ghananews",
        "u": "https://ghananews.xyz/?s={{{s}}}"
    },
    {
        "d": "www.theglobeandmail.com",
        "b": "glmail",
        "u": "http://www.theglobeandmail.com/search/?q={{{s}}}"
    },
    {
        "d": "www.globalresearch.ca",
        "b": "global",
        "u": "http://www.globalresearch.ca/search?q={{{s}}}"
    },
    {
        "d": "www.theglobeandmail.com",
        "b": "globeandmail",
        "u": "https://www.theglobeandmail.com/search/?q={{{s}}}&mode=all"
    },
    {
        "d": "www.gmanetwork.com",
        "b": "gmanews",
        "u": "https://www.gmanetwork.com/news/search/?q={{{s}}}"
    },
    {
        "d": "www.google.at",
        "b": "gnat",
        "u": "https://www.google.at/#q={{{s}}}&tbm=nws"
    },
    {
        "d": "news.google.com",
        "b": "gnau",
        "u": "https://news.google.com/search?q={{{s}}}&hl=en-AU&gl=AU&ceid=AU%3Aen"
    },
    {
        "d": "news.google.com",
        "b": "gnbe",
        "u": "https://news.google.com/news/search/section/q/{{{s}}}/?gl=BE&ned=nl_be&hl=nl"
    },
    {
        "d": "news.google.com",
        "b": "gnca",
        "u": "https://news.google.com/news/search/section/q/{{{s}}}/{{{s}}}?hl=en-CA&ned=ca"
    },
    {
        "d": "news.google.com",
        "b": "gnde",
        "u": "https://news.google.com/news/search/section/q/{{{s}}}?hl=de&ned=de"
    },
    {
        "d": "www.google.es",
        "b": "gnes",
        "u": "https://www.google.es/search?q={{{s}}}&prmd=nvi&source=lnms&tbm=nws&sa=X&ved=0ahUKEwiTxIfujK3XAhXItRoKHTQfDLYQ_AUIEigB&biw=375&bih=553"
    },
    {
        "d": "news.google.com",
        "b": "gnews",
        "u": "https://news.google.com/news/search/section/q/{{{s}}}/{{{s}}}"
    },
    {
        "d": "news.google.com",
        "b": "gn",
        "u": "https://news.google.com/news/search/section/q/{{{s}}}"
    },
    {
        "d": "www.google.it",
        "b": "gnit",
        "u": "https://www.google.it/search?q={{{s}}}&hl=it&source=lnms&tbm=nws"
    },
    {
        "d": "globalnewlightofmyanmar.com",
        "b": "gnlm",
        "u": "http://globalnewlightofmyanmar.com/?s={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gnnl",
        "u": "https://www.google.com/search?hl=nl&gl=nl&tbm=nws&q={{{s}}}"
    },
    {
        "d": "www.google.ru",
        "b": "gnru",
        "u": "https://www.google.ru/search?q={{{s}}}&tbm=nws&cad=h"
    },
    {
        "d": "news.google.com",
        "b": "gnse",
        "u": "https://news.google.com/search?q={{{s}}}&hl=sv&gl=SE&ceid=SE%3Asv"
    },
    {
        "d": "google.com",
        "b": "gns",
        "u": "https://google.com/search?q={{{s}}}&hl=es&prmd=niv&source=lnms&tbm=nws&sa="
    },
    {
        "d": "www.google.co.uk",
        "b": "gnuk",
        "u": "https://www.google.co.uk/search?hl=en&gl=uk&tbm=nws&authuser=0&q={{{s}}}"
    },
    {
        "d": "news.google.com",
        "b": "gnus",
        "u": "https://news.google.com/news/search/section/q/{{{s}}}/{{{s}}}?hl=en&ned=us"
    },
    {
        "d": "www.goettingen.de",
        "b": "goe",
        "u": "https://www.goettingen.de/portalsuche.html?keyword={{{s}}}"
    },
    {
        "d": "suche.golem.de",
        "b": "golem",
        "u": "http://suche.golem.de/search.php?l=10&q={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpafrica",
        "u": "http://www.greenpeace.org/africa/en/Search-results/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpau",
        "u": "http://www.greenpeace.org/australia/en/System-templates/Site-Settings-Pages/Search/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpcanfr",
        "u": "http://www.greenpeace.org/canada/fr/System-templates/Site-Settings-Pages/Recherche/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpcan",
        "u": "http://www.greenpeace.org/canada/en/System-templates/Site-Settings-Pages/Search/?all={{{s}}}"
    },
    {
        "d": "gpodder.net",
        "b": "gpdr",
        "u": "https://gpodder.net/search/?q={{{s}}} "
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpea",
        "u": "http://www.greenpeace.org/eastasia/system-templates/search-results/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpeu",
        "u": "http://www.greenpeace.org/eu-unit/en/System-templates/such-resultate/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpindia",
        "u": "http://www.greenpeace.org/india/en/System-templates/Search-results/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpnz",
        "u": "http://www.greenpeace.org/new-zealand/en/System-templates/Search-results/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpphilip",
        "u": "http://www.greenpeace.org/seasia/ph/System-templates/Search-results/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "gpseasia",
        "u": "http://www.greenpeace.org/seasia/System-templates/Search-results/?all={{{s}}}"
    },
    {
        "d": "www.greenpeace.org.uk",
        "b": "gpuk",
        "u": "http://www.greenpeace.org.uk/search/node/{{{s}}}"
    },
    {
        "d": "www.gq.com",
        "b": "gq",
        "u": "http://www.gq.com/search?qt=dismax&sort=score+desc&query={{{s}}}"
    },
    {
        "d": "www.greentech-news.org",
        "b": "green",
        "u": "https://www.greentech-news.org/?s={{{s}}}"
    },
    {
        "d": "www.greenpeace.org",
        "b": "greenpeace",
        "u": "http://www.greenpeace.org/usa/?s={{{s}}}"
    },
    {
        "d": "de.gegenstandpunkt.com",
        "b": "gsp",
        "u": "https://de.gegenstandpunkt.com/artikel/suche?modus=AND&volltextsuche={{{s}}}"
    },
    {
        "d": "www.theguardian.com",
        "b": "guardian",
        "u": "https://www.theguardian.com/{{{s}}}"
    },
    {
        "d": "guideforlm.com",
        "b": "gufolm",
        "u": "https://guideforlm.com/search/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "gu",
        "u": "https://duckduckgo.com/?q=site%3Awww.theguardian.com+{{{s}}}"
    },
    {
        "d": "www.geekzone.fr",
        "b": "gz",
        "u": "http://www.geekzone.fr/?s={{{s}}}"
    },
    {
        "d": "www.haaretz.co.il",
        "b": "haaretz",
        "u": "http://www.haaretz.co.il/misc/search-results?searchType=textSearch&simpleSearch=simpleSearch&text={{{s}}}"
    },
    {
        "d": "app.handelsblatt.com",
        "b": "handelsblatt",
        "u": "http://app.handelsblatt.com/suche/?sw={{{s}}}"
    },
    {
        "d": "www.hardocp.com",
        "b": "hardocp",
        "u": "https://www.hardocp.com/search/?q={{{s}}}"
    },
    {
        "d": "www.hbl.fi",
        "b": "hbl",
        "u": "https://www.hbl.fi/?s={{{s}}}"
    },
    {
        "d": "www.hdblog.it",
        "b": "hdblog",
        "u": "https://www.hdblog.it/?sName={{{s}}}"
    },
    {
        "d": "www.heraldsun.com.au",
        "b": "heraldsun",
        "u": "https://www.heraldsun.com.au/?s={{{s}}}"
    },
    {
        "d": "hs.fi",
        "b": "hesari",
        "u": "http://hs.fi/haku/?search-term={{{s}}}"
    },
    {
        "d": "www.zdf.de",
        "b": "heute",
        "u": "https://www.zdf.de/suche?q={{{s}}}&synth=true&sender=heute.de&from=&to=&attrs="
    },
    {
        "d": "www.thehindu.com",
        "b": "hindu",
        "u": "http://www.thehindu.com/search/?q={{{s}}}"
    },
    {
        "d": "hi-news.ru",
        "b": "hinews",
        "u": "http://hi-news.ru/?s={{{s}}}"
    },
    {
        "d": "www.honestjohn.co.uk",
        "b": "hj",
        "u": "https://www.honestjohn.co.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.hongkongfp.com",
        "b": "hkfp",
        "u": "https://www.hongkongfp.com/?s={{{s}}}"
    },
    {
        "d": "horalectura.blogspot.com",
        "b": "hlectura",
        "u": "https://horalectura.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "www.hln.be",
        "b": "hln",
        "u": "https://www.hln.be/zoeken?query={{{s}}}"
    },
    {
        "d": "hn.algolia.com",
        "b": "hnsearch",
        "u": "http://hn.algolia.com/#!/story/forever/0/{{{s}}}"
    },
    {
        "d": "horormagoria.sk",
        "b": "horor",
        "u": "https://horormagoria.sk/?s={{{s}}}"
    },
    {
        "d": "horormagoria.sk",
        "b": "horormagoria",
        "u": "https://horormagoria.sk/?s={{{s}}}"
    },
    {
        "d": "horormagoria.sk",
        "b": "horory",
        "u": "https://horormagoria.sk/?s={{{s}}}"
    },
    {
        "d": "www.buzzyhot.com",
        "b": "hotbuzzy",
        "u": "https://www.buzzyhot.com/search?q={{{s}}}"
    },
    {
        "d": "www.hotnews.ro",
        "b": "hotn",
        "u": "https://www.hotnews.ro/cauta/{{{s}}}/1"
    },
    {
        "d": "www.heraldsun.com.au",
        "b": "hsun",
        "u": "https://www.heraldsun.com.au/?s={{{s}}}"
    },
    {
        "d": "hubski.com",
        "b": "hubski",
        "u": "https://hubski.com/search?q={{{s}}}"
    },
    {
        "d": "www.huffingtonpost.com",
        "b": "huffingtonpost",
        "u": "https://www.huffingtonpost.com/search?keywords={{{s}}}&sortBy=recency&sortOrder=desc"
    },
    {
        "d": "www.huffingtonpost.com",
        "b": "huffpost",
        "u": "https://www.huffingtonpost.com/search?keywords={{{s}}}&sortBy=recency&sortOrder=desc"
    },
    {
        "d": "www.humanite.fr",
        "b": "huma",
        "u": "http://www.humanite.fr/search/{{{s}}}"
    },
    {
        "d": "hvg.hu",
        "b": "hvg",
        "u": "http://hvg.hu/kereses?term={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.hollywoodreporter.com",
        "b": "hwd",
        "u": "http://www.hollywoodreporter.com/search/{{{s}}} "
    },
    {
        "d": "ici.radio-canada.ca",
        "b": "ici",
        "u": "https://ici.radio-canada.ca/recherche?q={{{s}}}"
    },
    {
        "d": "spectrum.ieee.org",
        "b": "ieees",
        "u": "http://spectrum.ieee.org/searchContent?q={{{s}}}"
    },
    {
        "d": "www.iex.nl",
        "b": "iex",
        "u": "https://www.iex.nl/Zoeken/Default.aspx?q={{{s}}}"
    },
    {
        "d": "www.ilfattoquotidiano.it",
        "b": "ilfatto",
        "u": "http://www.ilfattoquotidiano.it/{{{s}}}"
    },
    {
        "d": "www.ilmeteo.it",
        "b": "ilm",
        "u": "http://www.ilmeteo.it/meteo/{{{s}}}"
    },
    {
        "d": "www.ilpost.it",
        "b": "ilpost",
        "u": "http://www.ilpost.it/?s={{{s}}}"
    },
    {
        "d": "iltasanomat.fi",
        "b": "iltasanomat",
        "u": "http://iltasanomat.fi/haku/?search-term={{{s}}}"
    },
    {
        "d": "www.independent.co.uk",
        "b": "independent",
        "u": "http://www.independent.co.uk/search/simple.do?destinationSectionUniqueName=search&publicationName=ind&searchString={{{s}}}"
    },
    {
        "d": "www.india.com",
        "b": "ind",
        "u": "https://www.india.com/searchresult/?cx=partner-pub-6717584324019958%3A4408969895&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa="
    },
    {
        "d": "www.indolio.com",
        "b": "indol",
        "u": "https://www.indolio.com/search?q={{{s}}}"
    },
    {
        "d": "www.infobae.com",
        "b": "infobae",
        "u": "https://www.infobae.com/search/{{{s}}}/?q={{{s}}}"
    },
    {
        "d": "www.infowars.com",
        "b": "infowars",
        "u": "https://www.infowars.com/?s={{{s}}}"
    },
    {
        "d": "inkeri-klubi.radioviola.net",
        "b": "inkeri",
        "u": "http://inkeri-klubi.radioviola.net/system/app/pages/search?scope=search-site&q={{{s}}}"
    },
    {
        "d": "www.israelnationalnews.com",
        "b": "inn",
        "u": "https://www.israelnationalnews.com/Search.aspx?string={{{s}}}"
    },
    {
        "d": "www.aljazeera.com",
        "b": "intaljazeera",
        "u": "http://www.aljazeera.com/Services/Search/?q={{{s}}}"
    },
    {
        "d": "theintercept.com",
        "b": "intercept",
        "u": "https://theintercept.com/search/?s={{{s}}}"
    },
    {
        "d": "www.internazionale.it",
        "b": "internazionale",
        "u": "http://www.internazionale.it/search/{{{s}}}"
    },
    {
        "d": "www.internazionale.it",
        "b": "int",
        "u": "http://www.internazionale.it/search/?q={{{s}}}"
    },
    {
        "d": "invak.info",
        "b": "invak",
        "u": "https://invak.info/?s={{{s}}}"
    },
    {
        "d": "www.iol.co.za",
        "b": "iol",
        "u": "https://www.iol.co.za/search?q={{{s}}}"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "iplayer",
        "u": "http://www.bbc.co.uk/iplayer/search?q={{{s}}}"
    },
    {
        "d": "www.iprofesional.com",
        "b": "ipro",
        "u": "http://www.iprofesional.com/index.php?p=buscadorProfesional&texto={{{s}}}"
    },
    {
        "d": "www.irishtimes.com",
        "b": "irishtimes",
        "u": "https://www.irishtimes.com/search/search-7.4195619?q={{{s}}}"
    },
    {
        "d": "www.ishr.ch",
        "b": "ishr",
        "u": "http://www.ishr.ch/advanced-search?term={{{s}}} "
    },
    {
        "d": "www.Islam21c.com",
        "b": "islam21c",
        "u": "https://www.Islam21c.com/?s={{{s}}}"
    },
    {
        "d": "www.isrgrajan.com",
        "b": "isrgrajan",
        "u": "https://www.isrgrajan.com/?s={{{s}}}"
    },
    {
        "d": "issuu.com",
        "b": "iss",
        "u": "http://issuu.com/search?q={{{s}}}"
    },
    {
        "d": "issuu.com",
        "b": "issuu",
        "u": "https://issuu.com/search?q={{{s}}}"
    },
    {
        "d": "it-news.press",
        "b": "itnews",
        "u": "https://it-news.press/search?searchword={{{s}}}"
    },
    {
        "d": "jacobinmag.com",
        "b": "jacobin",
        "u": "https://jacobinmag.com/search?query={{{s}}}"
    },
    {
        "d": "www.journaldesfemmes.com",
        "b": "jdf",
        "u": "http://www.journaldesfemmes.com/s/{{{s}}}"
    },
    {
        "d": "www.journaldunet.com",
        "b": "jdn",
        "u": "http://www.journaldunet.com/s/{{{s}}}"
    },
    {
        "d": "jionews.com",
        "b": "jion",
        "u": "https://jionews.com/search?query={{{s}}}"
    },
    {
        "d": "www.jean-luc-melenchon.fr",
        "b": "jlm",
        "u": "http://www.jean-luc-melenchon.fr/?s={{{s}}}"
    },
    {
        "d": "www.jornaldaparaiba.com.br",
        "b": "jornaldaparaiba",
        "u": "http://www.jornaldaparaiba.com.br/?s={{{s}}}"
    },
    {
        "d": "jpralves.net",
        "b": "jpralves",
        "u": "https://jpralves.net/search.html?q={{{s}}}"
    },
    {
        "d": "jrsbelgium.org",
        "b": "jrs",
        "u": "https://jrsbelgium.org/spip.php?page=recherche&recherche={{{s}}}"
    },
    {
        "d": "www.jutarnji.hr",
        "b": "jutarnji",
        "u": "https://www.jutarnji.hr/search/?q={{{s}}}"
    },
    {
        "d": "www.jw.org",
        "b": "jwde",
        "u": "https://www.jw.org/de/suche/?q={{{s}}}"
    },
    {
        "d": "www.jw.org",
        "b": "jwes",
        "u": "https://www.jw.org/es/búsquedas/?q={{{s}}}:"
    },
    {
        "d": "www.kahtahaber.com",
        "b": "kahta",
        "u": "https://www.kahtahaber.com/search?q={{{s}}}"
    },
    {
        "d": "www.kaleva.fi",
        "b": "kaleva",
        "u": "https://www.kaleva.fi/haku/?search={{{s}}}"
    },
    {
        "d": "kabutan.jp",
        "b": "kbt",
        "u": "https://kabutan.jp/stock/?code={{{s}}}"
    },
    {
        "d": "leit.keldan.is",
        "b": "keldan",
        "u": "https://leit.keldan.is/Home/Search?term={{{s}}}"
    },
    {
        "d": "kimdeyir.com",
        "b": "kimdeyir",
        "u": "https://kimdeyir.com/?s={{{s}}}"
    },
    {
        "d": "www.kleinezeitung.at",
        "b": "kleinezeitung",
        "u": "http://www.kleinezeitung.at/user/search.do?searchText={{{s}}}&action=1&resetForm=1&resultsPage=0"
    },
    {
        "d": "kabarlinux.id",
        "b": "kl",
        "u": "https://kabarlinux.id/?s={{{s}}}"
    },
    {
        "d": "knmi.nl",
        "b": "knmi",
        "u": "https://knmi.nl/zoeken?q={{{s}}}"
    },
    {
        "d": "www.koreaherald.com",
        "b": "koherald",
        "u": "http://www.koreaherald.com/search/index.php?q={{{s}}}&kr=0"
    },
    {
        "d": "search.kompas.com",
        "b": "kompas",
        "u": "https://search.kompas.com/search/?q={{{s}}}&submit=Submit+Query"
    },
    {
        "d": "www.kicktraq.com",
        "b": "kt",
        "u": "http://www.kicktraq.com/search/?find={{{s}}}"
    },
    {
        "d": "buscar.lanacion.com.ar",
        "b": "lanacion",
        "u": "http://buscar.lanacion.com.ar/{{{s}}}/sort-new"
    },
    {
        "d": "lapatilla.com",
        "b": "lapa",
        "u": "http://lapatilla.com/?s={{{s}}}"
    },
    {
        "d": "lapatria.com",
        "b": "lapatria",
        "u": "http://lapatria.com/?q={{{s}}}"
    },
    {
        "d": "www.lastampa.it",
        "b": "lastampa",
        "u": "http://www.lastampa.it/ricerca?search={{{s}}}"
    },
    {
        "d": "search.latimes.com",
        "b": "latimes",
        "u": "http://search.latimes.com/search?q={{{s}}}"
    },
    {
        "d": "www.lemonde.fr",
        "b": "lemonde",
        "u": "http://www.lemonde.fr/recherche/?search_keywords={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lescris",
        "u": "https://duckduckgo.com/?q=site%3Ales-cris.com+{{{s}}}"
    },
    {
        "d": "www.lesoir.be",
        "b": "lesoir",
        "u": "https://www.lesoir.be/archives/recherche?word={{{s}}}&sort=date%20desc&datefilter=lastyear&form_build_id=form-OccakxlLTXnbavxnbgZGoqHzkT0bEeOrjy3PPlFais4&form_id=dpidamwidgets_damsimplesearch_content_type_search_form"
    },
    {
        "d": "duckduckgo.com",
        "b": "lewrockwell",
        "u": "https://duckduckgo.com/?q=site%3Alewrockwell.com+{{{s}}} "
    },
    {
        "d": "www.lesfrontaliers.lu",
        "b": "lf",
        "u": "http://www.lesfrontaliers.lu/search?text={{{s}}}"
    },
    {
        "d": "www.liberation.fr",
        "b": "libe",
        "u": "https://www.liberation.fr/recherche/?q={{{s}}}"
    },
    {
        "d": "www.lifesitenews.com",
        "b": "life",
        "u": "https://www.lifesitenews.com/archives/search/?q={{{s}}}"
    },
    {
        "d": "www.lifo.gr",
        "b": "lifo",
        "u": "https://www.lifo.gr/search?q={{{s}}}"
    },
    {
        "d": "www.linkiesta.it",
        "b": "linkiesta",
        "u": "http://www.linkiesta.it/cerca/{{{s}}}"
    },
    {
        "d": "www.montygreylock.com",
        "b": "liter",
        "u": "https://www.montygreylock.com/search/?q={{{s}}}"
    },
    {
        "d": "www.livemint.com",
        "b": "livemint",
        "u": "https://www.livemint.com/Search/Link/Keyword/{{{s}}}"
    },
    {
        "d": "logbuch-netzpolitik.de",
        "b": "lnp",
        "u": "https://logbuch-netzpolitik.de/?s={{{s}}}"
    },
    {
        "d": "lobste.rs",
        "b": "lobsters",
        "u": "https://lobste.rs/search?q={{{s}}}"
    },
    {
        "d": "www.lovebusinessexpo.co.uk",
        "b": "lovebusinessexpo",
        "u": "https://www.lovebusinessexpo.co.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.lapoliticaonline.com",
        "b": "lpo",
        "u": "http://www.lapoliticaonline.com/0/buscar/index.vnc?id={{{s}}}"
    },
    {
        "d": "www.laquadrature.net",
        "b": "lqdn",
        "u": "https://www.laquadrature.net/fr/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "www.lrb.co.uk",
        "b": "lrb",
        "u": "http://www.lrb.co.uk/search?q={{{s}}}"
    },
    {
        "d": "www.latoilescoute.net",
        "b": "lts",
        "u": "http://www.latoilescoute.net/spip.php?page=recherche&recherche={{{s}}} "
    },
    {
        "d": "www.lavocedellelotte.it",
        "b": "lvdl",
        "u": "https://www.lavocedellelotte.it/it/?s={{{s}}}"
    },
    {
        "d": "www.linuxvoice.com",
        "b": "lvmag",
        "u": "http://www.linuxvoice.com/?s={{{s}}}"
    },
    {
        "d": "lwn.net",
        "b": "lwn",
        "u": "https://lwn.net/Search/DoSearch?words={{{s}}}"
    },
    {
        "d": "www.motor1.com",
        "b": "m1",
        "u": "https://www.motor1.com/search/?q={{{s}}}"
    },
    {
        "d": "www.macg.co",
        "b": "macg",
        "u": "http://www.macg.co/search/site/{{{s}}}"
    },
    {
        "d": "www.macwelt.de",
        "b": "macwelt",
        "u": "http://www.macwelt.de/suche?searchStr={{{s}}}"
    },
    {
        "d": "host.madison.com",
        "b": "madison",
        "u": "http://host.madison.com/search/?l=25&sd=desc&s=start_time&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&q={{{s}}}&nsa=eedition"
    },
    {
        "d": "myanimelist.net",
        "b": "malist",
        "u": "http://myanimelist.net/anime.php?q={{{s}}}"
    },
    {
        "d": "mangotv.co",
        "b": "mangotv",
        "u": "http://mangotv.co/?s={{{s}}}"
    },
    {
        "d": "www.manoramaonline.com",
        "b": "manorama",
        "u": "https://www.manoramaonline.com/search-results.html?q={{{s}}}"
    },
    {
        "d": "mediabiasfactcheck.com",
        "b": "mbfc",
        "u": "https://mediabiasfactcheck.com/?s={{{s}}}"
    },
    {
        "d": "www.meteoblue.com",
        "b": "mblue",
        "u": "https://www.meteoblue.com/?q={{{s}}}"
    },
    {
        "d": "mb.com.ph",
        "b": "mbph",
        "u": "https://mb.com.ph/?s={{{s}}}"
    },
    {
        "d": "mmlafleur.com",
        "b": "mdash",
        "u": "https://mmlafleur.com/mdash/search/{{{s}}}"
    },
    {
        "d": "www.mediapart.fr",
        "b": "mdp",
        "u": "https://www.mediapart.fr/search?search_word={{{s}}}&op=ok"
    },
    {
        "d": "www.mediatize.info",
        "b": "mdtz",
        "u": "https://www.mediatize.info/search?q={{{s}}}"
    },
    {
        "d": "manualdousuario.net",
        "b": "mdu",
        "u": "https://manualdousuario.net/?s={{{s}}}"
    },
    {
        "d": "www.mediapart.fr",
        "b": "mediapart",
        "u": "https://www.mediapart.fr/search?search_word={{{s}}}"
    },
    {
        "d": "mellowviews.com",
        "b": "mellowviews",
        "u": "https://mellowviews.com/search/?query={{{s}}}"
    },
    {
        "d": "www.meneame.net",
        "b": "meneame",
        "u": "https://www.meneame.net/search?q={{{s}}}"
    },
    {
        "d": "www.mercurynews.com",
        "b": "mercurynews",
        "u": "http://www.mercurynews.com/circare/html/sca_template.jsp?runSearch=true&query={{{s}}}&searchButton.x=0&searchButton.y=0&searchButton=Search&view=entiresitesppublished"
    },
    {
        "d": "www.ilmessaggero.it",
        "b": "messaggero",
        "u": "http://www.ilmessaggero.it/?p=search&q={{{s}}}"
    },
    {
        "d": "metalitalia.com",
        "b": "metalit",
        "u": "https://metalitalia.com/?s={{{s}}}"
    },
    {
        "d": "www.meteociel.fr",
        "b": "meteociel",
        "u": "http://www.meteociel.fr/prevville.php?action=getville&ville={{{s}}}"
    },
    {
        "d": "www.meteofrance.com",
        "b": "meteofr",
        "u": "http://www.meteofrance.com/recherche/resultats?facet=previsions&lieuId=&lieuType=&search-type=previsions&query={{{s}}}"
    },
    {
        "d": "www.meteomedia.com",
        "b": "meteomedia",
        "u": "https://www.meteomedia.com/ca/search?q={{{s}}}"
    },
    {
        "d": "meteox.de",
        "b": "met",
        "u": "http://meteox.de/search.aspx?s={{{s}}}"
    },
    {
        "d": "www.metoffice.gov.uk",
        "b": "metoffice",
        "u": "http://www.metoffice.gov.uk/public/weather/location-search/sitename?searchLocation={{{s}}}"
    },
    {
        "d": "www.metoffice.gov.uk",
        "b": "metoff",
        "u": "http://www.metoffice.gov.uk/public/weather/location-search/sitename?searchLocation={{{s}}}"
    },
    {
        "d": "meucrespo.com.br",
        "b": "meucrespo",
        "u": "http://meucrespo.com.br/?s={{{s}}}"
    },
    {
        "d": "www.mgm.gov.tr",
        "b": "mgm",
        "u": "https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx?il={{{s}}}"
    },
    {
        "d": "www.military-stuff.org",
        "b": "military",
        "u": "https://www.military-stuff.org/?s={{{s}}}"
    },
    {
        "d": "news.mingpao.com",
        "b": "mingpao",
        "u": "https://news.mingpao.com/cfm/search2.cfm?keywords={{{s}}}"
    },
    {
        "d": "miniology.com",
        "b": "miniology",
        "u": "http://miniology.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.marketwatch.com",
        "b": "mktw",
        "u": "http://www.marketwatch.com/investing/stock/{{{s}}}"
    },
    {
        "d": "www.medicalnewstoday.com",
        "b": "mnt",
        "u": "http://www.medicalnewstoday.com/search?q={{{s}}} "
    },
    {
        "d": "www.mobilegeeks.com",
        "b": "mobilegeeks",
        "u": "http://www.mobilegeeks.com/?s={{{s}}}"
    },
    {
        "d": "www.moex.com",
        "b": "moex",
        "u": "https://www.moex.com/en/issue.aspx?code={{{s}}}"
    },
    {
        "d": "www.lemonde.fr",
        "b": "mondefr",
        "u": "https://www.lemonde.fr/recherche/?keywords={{{s}}}"
    },
    {
        "d": "www.lemonde.fr",
        "b": "monde",
        "u": "https://www.lemonde.fr/recherche/?search_keywords={{{s}}}"
    },
    {
        "d": "www.moneycontrol.com",
        "b": "moneycontrol",
        "u": "http://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?search_data=&cid=&mbsearch_str=&topsearch_type=1&search_str={{{s}}}"
    },
    {
        "d": "moneybadger.stocktwits.com",
        "b": "money",
        "u": "http://moneybadger.stocktwits.com/?s={{{s}}}"
    },
    {
        "d": "www.mrmoneymustache.com",
        "b": "mrmoney",
        "u": "http://www.mrmoneymustache.com/?s={{{s}}}"
    },
    {
        "d": "www.msnbc.com",
        "b": "msnbc",
        "u": "http://www.msnbc.com/search/{{{s}}}"
    },
    {
        "d": "www.msn.al",
        "b": "msn",
        "u": "https://www.msn.al/?s={{{s}}}"
    },
    {
        "d": "www.musicradar.com",
        "b": "msrd",
        "u": "http://www.musicradar.com/search?searchTerm={{{s}}}:"
    },
    {
        "d": "www.meteoswiss.admin.ch",
        "b": "msui",
        "u": "https://www.meteoswiss.admin.ch/home/search.html?query={{{s}}} "
    },
    {
        "d": "mybroadband.co.za",
        "b": "mybb",
        "u": "https://mybroadband.co.za/news/?s={{{s}}}"
    },
    {
        "d": "www.plazademayo.com",
        "b": "myo",
        "u": "http://www.plazademayo.com/mediosyopinion/?s={{{s}}}"
    },
    {
        "d": "www.mittelbayerische.de",
        "b": "mz",
        "u": "https://www.mittelbayerische.de/suche/?scope=20000&type=articles%2Cgalleries%2Cvideos&interval=month&searchterm={{{s}}}"
    },
    {
        "d": "www.news24.com",
        "b": "n24",
        "u": "http://www.news24.com/search?q={{{s}}}"
    },
    {
        "d": "www.nasdaq.com",
        "b": "nasdaq",
        "u": "https://www.nasdaq.com/symbol/{{{s}}}/real-time"
    },
    {
        "d": "www.nationalgeographic.com",
        "b": "natgeo",
        "u": "https://www.nationalgeographic.com/search/?q={{{s}}}"
    },
    {
        "d": "www.nationalgeographic.com",
        "b": "nationalgeographic",
        "u": "https://www.nationalgeographic.com/search/?q={{{s}}}"
    },
    {
        "d": "www.nationalobserver.com",
        "b": "nationalobserver",
        "u": "https://www.nationalobserver.com/search?keywords={{{s}}}"
    },
    {
        "d": "nationalpost.com",
        "b": "nationalpost",
        "u": "https://nationalpost.com/?s={{{s}}}"
    },
    {
        "d": "www.nationalreview.com",
        "b": "nationalreview",
        "u": "https://www.nationalreview.com/?s={{{s}}}"
    },
    {
        "d": "www.nationalobserver.com",
        "b": "natobserver",
        "u": "https://www.nationalobserver.com/search?keywords={{{s}}}"
    },
    {
        "d": "www.thenational.com.pg",
        "b": "natpng",
        "u": "http://www.thenational.com.pg/?s={{{s}}}"
    },
    {
        "d": "naturvin.wordpress.com",
        "b": "naturvin",
        "u": "https://naturvin.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "nautil.us",
        "b": "nautilus",
        "u": "http://nautil.us/search/{{{s}}}"
    },
    {
        "d": "nbcstructuredsolutions.ca",
        "b": "nbnotes",
        "u": "https://nbcstructuredsolutions.ca/listeProduits.aspx?search={{{s}}}"
    },
    {
        "d": "www.ncregister.com",
        "b": "ncr",
        "u": "https://www.ncregister.com/search/results?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "nde",
        "u": "https://duckduckgo.com/?q=test&iar=news&ia=news&kl=de-de"
    },
    {
        "d": "www.neues-deutschland.de",
        "b": "ndeutsch",
        "u": "https://www.neues-deutschland.de/suche/index.php?and={{{s}}}&s0_d=00&s0_m=00&s0_y=0000&s1_d=00&s1_m=00&s1_y=0000&modus=2&sort=1&searchfields%5B%5D=0&searchfields%5B%5D=1&searchfields%5B%5D=2&searchfields%5B%5D=3&searchfields%5B%5D=4&display=1&search=Suchen"
    },
    {
        "d": "www.ndr.de",
        "b": "ndr",
        "u": "https://www.ndr.de/suche10.html?query={{{s}}}"
    },
    {
        "d": "www.nachdenkseiten.de",
        "b": "nds",
        "u": "http://www.nachdenkseiten.de/?s={{{s}}}"
    },
    {
        "d": "ndtv.com",
        "b": "ndtv",
        "u": "http://ndtv.com/topic/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "n",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=news&ia=news"
    },
    {
        "d": "www.nerdscoop.com",
        "b": "nerdscoop",
        "u": "http://www.nerdscoop.com/?s={{{s}}}"
    },
    {
        "d": "netzpolitik.org",
        "b": "netzpolitik",
        "u": "https://netzpolitik.org/?s={{{s}}}"
    },
    {
        "d": "www.news24.com",
        "b": "news24",
        "u": "https://www.news24.com/search?q={{{s}}}"
    },
    {
        "d": "news365.club",
        "b": "news365club",
        "u": "http://news365.club/arama?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "newsarchive",
        "u": "http://www.google.com/#q={{{s}}}&hl=en&tbm=nws&prmd=imvnsfd&source=lnt&tbs=ar:1&sa=X&ei=UJrnT8LwO8Sf6QGHmIjhDg&ved=0CCcQpwUoBQ&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=3c6a142c5aa1edc2&biw=1366&bih=706"
    },
    {
        "d": "search.news.com.au",
        "b": "newscomau",
        "u": "http://search.news.com.au/search?us=ndmnews&as=NEWS&q={{{s}}}"
    },
    {
        "d": "www.newsday.com",
        "b": "newsday",
        "u": "http://www.newsday.com/7.25434?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "newsde",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=news&ia=news&kl=de-de"
    },
    {
        "d": "duckduckgo.com",
        "b": "news",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=news&ia=news"
    },
    {
        "d": "duckduckgo.com",
        "b": "newsfr",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=news&ia=news&kl=fr-fr"
    },
    {
        "d": "us.newshub.org",
        "b": "newsh",
        "u": "http://us.newshub.org/search/{{{s}}}/us/all/p1"
    },
    {
        "d": "www.delawareonline.com",
        "b": "newsjournal",
        "u": "https://www.delawareonline.com/search/{{{s}}}/"
    },
    {
        "d": "www.google.com",
        "b": "newsmax",
        "u": "http://www.google.com/custom?domains=NewsMax.com&client=pub-2932230807573228&forid=1&ie=UTF8&oe=UTF8&safe=active&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23336699%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3A336699%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A70%3BLW%3A297%3BL%3Ahttp%3A%2F%2Fwww.newsmax.com%2Fimages%2Fhome%2Fa-logo.gif%3BS%3Ahttp%3A%2F%2Fwww.newsmax.com%2F%3BLP%3A1%3BFORID%3A1%3B&sitesearch=Newsmax.com&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "newsmx",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=news&kl=mx-es&ia=news"
    },
    {
        "d": "www.newsnow.co.uk",
        "b": "newsnow",
        "u": "http://www.newsnow.co.uk/h/?search={{{s}}}"
    },
    {
        "d": "newstapa.org",
        "b": "newstapa",
        "u": "http://newstapa.org/?s={{{s}}}"
    },
    {
        "d": "www.newsweek.com",
        "b": "newsweek",
        "u": "https://www.newsweek.com/search/site/{{{s}}}"
    },
    {
        "d": "hn.algolia.com",
        "b": "newsyc",
        "u": "http://hn.algolia.com/#!/story/forever/0/{{{s}}}"
    },
    {
        "d": "www.newyorker.com",
        "b": "newyorker",
        "u": "http://www.newyorker.com/search/q/{{{s}}}"
    },
    {
        "d": "www.nexojornal.com.br",
        "b": "nexo",
        "u": "https://www.nexojornal.com.br/utility/search/?q={{{s}}}"
    },
    {
        "d": "www.nfib.com",
        "b": "nfib",
        "u": "http://www.nfib.com/search/?query={{{s}}}"
    },
    {
        "d": "www.infowars.com",
        "b": "nfowrs",
        "u": "http://www.infowars.com/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "nfr",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=news&ia=news&kl=fr-fr"
    },
    {
        "d": "cgi2.nhk.or.jp",
        "b": "nhk",
        "u": "http://cgi2.nhk.or.jp/news/nsearch/query.cgi?col=news&st=1&rf=1&charset=utf-8&qt={{{s}}}&search.x=-318&search.y=-183"
    },
    {
        "d": "www.nieuwsblad.be",
        "b": "nieuwsblad",
        "u": "http://www.nieuwsblad.be/Search/Index.aspx?searchString={{{s}}}"
    },
    {
        "d": "www.niferry.co.uk",
        "b": "nifs",
        "u": "https://www.niferry.co.uk/?s={{{s}}}"
    },
    {
        "d": "r.nikkei.com",
        "b": "nikkei",
        "u": "https://r.nikkei.com/search?keyword={{{s}}}"
    },
    {
        "d": "www.nordkurier.de",
        "b": "nkurier",
        "u": "http://www.nordkurier.de/suche?text={{{s}}}"
    },
    {
        "d": "www.naturalnews.com",
        "b": "nn",
        "u": "https://www.naturalnews.com/SearchResults.asp?query={{{s}}}&pr=NN"
    },
    {
        "d": "forecast.weather.gov",
        "b": "noaa",
        "u": "http://forecast.weather.gov/zipcity.php?inputstring={{{s}}}"
    },
    {
        "d": "nos.nl",
        "b": "nos",
        "u": "https://nos.nl/zoeken/?q={{{s}}}"
    },
    {
        "d": "noticiados.net",
        "b": "noticiados",
        "u": "http://noticiados.net/blog/buscar/?query={{{s}}}"
    },
    {
        "d": "www.novinky.cz",
        "b": "novinky",
        "u": "http://www.novinky.cz/hledej?w={{{s}}}"
    },
    {
        "d": "www.noz.de",
        "b": "noz",
        "u": "https://www.noz.de/suche/?q={{{s}}}"
    },
    {
        "d": "www.npr.org",
        "b": "npr",
        "u": "http://www.npr.org/search/index.php?query={{{s}}}"
    },
    {
        "d": "www.nrc.nl",
        "b": "nrc",
        "u": "http://www.nrc.nl/php/zoeken.php?cx=000950122183490940160%3Afse5ljfbq2u&q={{{s}}}&ie=anci&sa=&cof=FORID%3A9#449"
    },
    {
        "d": "www.nrk.no",
        "b": "nrk",
        "u": "https://www.nrk.no/sok/?q={{{s}}}"
    },
    {
        "d": "history.newtheatre.org.uk",
        "b": "nthp",
        "u": "https://history.newtheatre.org.uk/search/?q={{{s}}}"
    },
    {
        "d": "newstral.com",
        "b": "nt",
        "u": "https://newstral.com/search/articles?&q={{{s}}}"
    },
    {
        "d": "www.n-tv.de",
        "b": "n-tv",
        "u": "http://www.n-tv.de/suche/?a=search&at=all&q={{{s}}}&submit=Suche starten"
    },
    {
        "d": "www.numerama.com",
        "b": "numerama",
        "u": "http://www.numerama.com/magazine/recherche/1/{{{s}}}/date"
    },
    {
        "d": "www.nu.nl",
        "b": "nu",
        "u": "http://www.nu.nl/zoeken/?q={{{s}}} "
    },
    {
        "d": "forecast.weather.gov",
        "b": "nws",
        "u": "http://forecast.weather.gov/zipcity.php?inputstring={{{s}}}"
    },
    {
        "d": "m.nextinpact.com",
        "b": "nxim",
        "u": "https://m.nextinpact.com/rechercher?term={{{s}}}"
    },
    {
        "d": "www.nextinpact.com",
        "b": "nxi",
        "u": "http://www.nextinpact.com/recherche?_search={{{s}}}"
    },
    {
        "d": "nyheteridag.se",
        "b": "nyheteridag",
        "u": "https://nyheteridag.se/?s={{{s}}}"
    },
    {
        "d": "nypost.com",
        "b": "nypost",
        "u": "https://nypost.com/search/{{{s}}}/"
    },
    {
        "d": "www.nybooks.com",
        "b": "nyrb",
        "u": "http://www.nybooks.com/search/?s={{{s}}}&option_match=&year_after=1963&year_before=2017&type=all&orderby=relevance"
    },
    {
        "d": "www.nytimes.com",
        "b": "nytimes",
        "u": "https://www.nytimes.com/search?query={{{s}}}"
    },
    {
        "d": "query.nytimes.com",
        "b": "nyt",
        "u": "http://query.nytimes.com/search/sitesearch?query={{{s}}}&srchst=cse"
    },
    {
        "d": "www.nytimes3xbfgragh.onion",
        "b": "nyto",
        "u": "https://www.nytimes3xbfgragh.onion/search?query={{{s}}}"
    },
    {
        "d": "www.nzz.ch",
        "b": "nzz",
        "u": "http://www.nzz.ch/suche?form%5Bq%5D={{{s}}}"
    },
    {
        "d": "observador.pt",
        "b": "observador",
        "u": "http://observador.pt/pesquisa/?q={{{s}}}"
    },
    {
        "d": "www.ocregister.com",
        "b": "ocregister",
        "u": "http://www.ocregister.com/search/?q={{{s}}}&x=0&y=0"
    },
    {
        "d": "oglobo.globo.com",
        "b": "oglobo",
        "u": "https://oglobo.globo.com/busca/?q={{{s}}}"
    },
    {
        "d": "search.oregonlive.com",
        "b": "ol",
        "u": "http://search.oregonlive.com/{{{s}}}"
    },
    {
        "d": "www.omgubuntu.co.uk",
        "b": "omg",
        "u": "http://www.omgubuntu.co.uk/?s={{{s}}} "
    },
    {
        "d": "omni.se",
        "b": "omni",
        "u": "http://omni.se/sok?q={{{s}}}"
    },
    {
        "d": "ottawacitizen.com",
        "b": "ottawacitizen",
        "u": "https://ottawacitizen.com/?s={{{s}}}"
    },
    {
        "d": "openweathermap.org",
        "b": "owm",
        "u": "http://openweathermap.org/find?q={{{s}}}"
    },
    {
        "d": "www.prothomalo.com",
        "b": "pabn",
        "u": "https://www.prothomalo.com/search/?q={{{s}}}"
    },
    {
        "d": "passapalavra.info",
        "b": "passapalavra",
        "u": "http://passapalavra.info/?s={{{s}}}"
    },
    {
        "d": "www.pcinpact.com",
        "b": "pci",
        "u": "http://www.pcinpact.com/recherche?_search={{{s}}}"
    },
    {
        "d": "www.pcmasters.de",
        "b": "pcmasters",
        "u": "http://www.pcmasters.de/suche?search_keywords={{{s}}}"
    },
    {
        "d": "www.pcper.com",
        "b": "pcper",
        "u": "http://www.pcper.com/search/node/{{{s}}}"
    },
    {
        "d": "www.pcwelt.de",
        "b": "pcwelt",
        "u": "https://www.pcwelt.de/suche?searchStr={{{s}}}"
    },
    {
        "d": "www.perfil.com",
        "b": "perfil",
        "u": "http://www.perfil.com/buscador/?q={{{s}}}"
    },
    {
        "d": "peru21.pe",
        "b": "peru21",
        "u": "https://peru21.pe/buscar/?query={{{s}}}"
    },
    {
        "d": "www.petitweb.fr",
        "b": "petitweb",
        "u": "http://www.petitweb.fr/?s={{{s}}}"
    },
    {
        "d": "pewnews.org",
        "b": "pewnews",
        "u": "https://pewnews.org/?s={{{s}}}"
    },
    {
        "d": "poinformowani.pl",
        "b": "pfi",
        "u": "https://poinformowani.pl/szukaj?q={{{s}}}"
    },
    {
        "d": "www.philenews.com",
        "b": "philenews",
        "u": "http://www.philenews.com/search?kw={{{s}}}"
    },
    {
        "d": "www.phonemore.com",
        "b": "phonemore",
        "u": "https://www.phonemore.com/search/?q={{{s}}}"
    },
    {
        "d": "www.phoronix.com",
        "b": "phoronix",
        "u": "https://www.phoronix.com/scan.php?page=search&q={{{s}}}"
    },
    {
        "d": "www.pinknews.co.uk",
        "b": "pink",
        "u": "http://www.pinknews.co.uk/?s={{{s}}} "
    },
    {
        "d": "piratetimes.net",
        "b": "piratetimes",
        "u": "http://piratetimes.net/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.philly.com",
        "b": "pi",
        "u": "http://www.philly.com/philly/search/?search=y&adv=y&searchKeywords={{{s}}}&minscore=50&pagesize=20&sites=philly&fields=full&sections=5&queryType=all"
    },
    {
        "d": "www.pisatoday.it",
        "b": "pito",
        "u": "http://www.pisatoday.it/search/query/{{{s}}}"
    },
    {
        "d": "pjmedia.com",
        "b": "pjm",
        "u": "https://pjmedia.com/search/?s={{{s}}} "
    },
    {
        "d": "plan3t.info",
        "b": "plan3t",
        "u": "http://plan3t.info/?s={{{s}}}"
    },
    {
        "d": "www.postimees.ee",
        "b": "pms",
        "u": "http://www.postimees.ee/search?query={{{s}}}"
    },
    {
        "d": "www.getpocket.com",
        "b": "pocketexplore",
        "u": "https://www.getpocket.com/explore/{{{s}}}"
    },
    {
        "d": "www.politico.eu",
        "b": "politicoeu",
        "u": "http://www.politico.eu/?s={{{s}}}"
    },
    {
        "d": "www.politico.com",
        "b": "politico",
        "u": "http://www.politico.com/search?q={{{s}}}"
    },
    {
        "d": "www.politifact.com",
        "b": "politifact",
        "u": "http://www.politifact.com/search/?q={{{s}}}"
    },
    {
        "d": "politiken.dk",
        "b": "politiken",
        "u": "http://politiken.dk/search/?q={{{s}}}"
    },
    {
        "d": "www.pollen.com",
        "b": "pollen",
        "u": "https://www.pollen.com/forecast/current/pollen/{{{s}}}"
    },
    {
        "d": "prensaobrera.com",
        "b": "po",
        "u": "https://prensaobrera.com/buscar?q={{{s}}}"
    },
    {
        "d": "www.popsci.com",
        "b": "popsci",
        "u": "https://www.popsci.com/find/{{{s}}}"
    },
    {
        "d": "portal12.bg",
        "b": "portal12",
        "u": "https://portal12.bg/search?q={{{s}}}"
    },
    {
        "d": "www.postimees.ee",
        "b": "postimees",
        "u": "http://www.postimees.ee/search?query={{{s}}}"
    },
    {
        "d": "passapalavra.info",
        "b": "pp",
        "u": "http://passapalavra.info/?s={{{s}}}"
    },
    {
        "d": "www.prabhasakshi.com",
        "b": "prab",
        "u": "https://www.prabhasakshi.com/topics/{{{s}}}"
    },
    {
        "d": "www.pravda.sk",
        "b": "pravda",
        "u": "https://www.pravda.sk/vyhladavanie/?q={{{s}}}"
    },
    {
        "d": "prwirepro.com",
        "b": "press",
        "u": "https://prwirepro.com/?s={{{s}}}"
    },
    {
        "d": "www.protocol.co.il",
        "b": "protocol",
        "u": "https://www.protocol.co.il/?s={{{s}}}"
    },
    {
        "d": "www.collegian.psu.edu",
        "b": "psudc",
        "u": "http://www.collegian.psu.edu/search/?f=html&q={{{s}}}"
    },
    {
        "d": "publc.com",
        "b": "publc",
        "u": "https://publc.com/{{{s}}}"
    },
    {
        "d": "publicintelligence.net",
        "b": "publicintelligence",
        "u": "https://publicintelligence.net/?s={{{s}}}"
    },
    {
        "d": "www.publico.pt",
        "b": "publico",
        "u": "http://www.publico.pt/pesquisa?q={{{s}}}"
    },
    {
        "d": "www.qsrmagazine.com",
        "b": "qsr",
        "u": "https://www.qsrmagazine.com/search/site/{{{s}}}"
    },
    {
        "d": "qz.com",
        "b": "quartz",
        "u": "http://qz.com/search/{{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qwn",
        "u": "https://www.qwant.com/?q={{{s}}}&t=news"
    },
    {
        "d": "qz.com",
        "b": "qz",
        "u": "http://qz.com/search/{{{s}}}"
    },
    {
        "d": "www.radio24.ilsole24ore.com",
        "b": "radio24",
        "u": "https://www.radio24.ilsole24ore.com/ricerca/{{{s}}}"
    },
    {
        "d": "www.roadandtrack.com",
        "b": "randt",
        "u": "https://www.roadandtrack.com/search/?q={{{s}}}"
    },
    {
        "d": "www.radio-browser.info",
        "b": "rbtag",
        "u": "http://www.radio-browser.info/gui/#!/bytag/{{{s}}}"
    },
    {
        "d": "www.realclearpolitics.com",
        "b": "rcp",
        "u": "http://www.realclearpolitics.com/search/?q={{{s}}}"
    },
    {
        "d": "reason.com",
        "b": "reason",
        "u": "http://reason.com/search?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "reddit",
        "u": "https://www.reddit.com/search?q={{{s}}}"
    },
    {
        "d": "redpandazine.com",
        "b": "redpanda",
        "u": "https://redpandazine.com/?s={{{s}}}"
    },
    {
        "d": "ru.redtram.com",
        "b": "redtram",
        "u": "https://ru.redtram.com/search/?q={{{s}}}"
    },
    {
        "d": "reflets.info",
        "b": "reflets",
        "u": "http://reflets.info/?s={{{s}}}"
    },
    {
        "d": "search.theregister.co.uk",
        "b": "register",
        "u": "http://search.theregister.co.uk/?q={{{s}}}&advanced=1&author=&date=the+dawn+of+time&site=all+The+Register+sites&results_per_page=100"
    },
    {
        "d": "www.reittiopas.fi",
        "b": "reittiopas",
        "u": "http://www.reittiopas.fi/?showsearchformsaved=hide&from_in= {{{s}}}&from=&via_in=&via=&via_time=0&to_in= {{{s}}}&to=&hour=15&minute=39&timetype=departure&date_cb=on&day=7&month=7&year=2015&cmargin=3&wspeed=70&method=1&stz=0&mc1=0&mc2=0&mc3=0&mc4=0&mc5=0&mc6=0&mc0=1&nroutes=3&gotoHash="
    },
    {
        "d": "ricerca.repubblica.it",
        "b": "repubblica",
        "u": "http://ricerca.repubblica.it/ricerca/repubblica?query={{{s}}}"
    },
    {
        "d": "www.reuters.com",
        "b": "reuq",
        "u": "http://www.reuters.com/search/news?blob={{{s}}}"
    },
    {
        "d": "www.reuters.com",
        "b": "reuters",
        "u": "https://www.reuters.com/search/news?blob={{{s}}}"
    },
    {
        "d": "robinhood.com",
        "b": "rh",
        "u": "https://robinhood.com/stocks/{{{s}}}"
    },
    {
        "d": "www.rightrelevance.com",
        "b": "right",
        "u": "http://www.rightrelevance.com/search/articles?query={{{s}}}"
    },
    {
        "d": "www.rightsidenews.com",
        "b": "rightsidenews",
        "u": "https://www.rightsidenews.com/?s={{{s}}}"
    },
    {
        "d": "www.rijnmond.nl",
        "b": "rijnmond",
        "u": "http://www.rijnmond.nl/zoeken?query={{{s}}}"
    },
    {
        "d": "www.rinf.com",
        "b": "rinf",
        "u": "http://www.rinf.com/?q={{{s}}} "
    },
    {
        "d": "rknastrovastu.com",
        "b": "rknastro",
        "u": "https://rknastrovastu.com/?s={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rmk",
        "u": "https://www.reddit.com/r/MechanicalKeyboards/search?q={{{s}}}&sort=relevance&t=all"
    },
    {
        "d": "www.radionz.co.nz",
        "b": "rnz",
        "u": "https://www.radionz.co.nz/search/results?utf8=%E2%9C%93&q={{{s}}}&commit=Search"
    },
    {
        "d": "www.roadandtrack.com",
        "b": "roadandtrack",
        "u": "https://www.roadandtrack.com/search/?q={{{s}}}"
    },
    {
        "d": "robot-review.ru",
        "b": "robotreview",
        "u": "https://robot-review.ru/search?q={{{s}}}"
    },
    {
        "d": "www.rockpapershotgun.com",
        "b": "rockpapershotgun",
        "u": "http://www.rockpapershotgun.com/?s={{{s}}}"
    },
    {
        "d": "gdpr.pl",
        "b": "rodo",
        "u": "https://gdpr.pl/?s={{{s}}}"
    },
    {
        "d": "www.roetgen.de",
        "b": "roetgen",
        "u": "https://www.roetgen.de/?s={{{s}}}"
    },
    {
        "d": "www.rollingstone.com",
        "b": "rollingstone",
        "u": "http://www.rollingstone.com/search?q={{{s}}}"
    },
    {
        "d": "redpandazine.at",
        "b": "roterpanda",
        "u": "https://redpandazine.at/?s={{{s}}}"
    },
    {
        "d": "rozethaber.com",
        "b": "rozet",
        "u": "http://rozethaber.com/search/{{{s}}}"
    },
    {
        "d": "www.rollingstone.com.ar",
        "b": "rsar",
        "u": "http://www.rollingstone.com.ar/buscador-r30-{{{s}}}"
    },
    {
        "d": "www.rtbf.be",
        "b": "rtbf",
        "u": "https://www.rtbf.be/info/recherche?q={{{s}}}"
    },
    {
        "d": "actualidad.rt.com",
        "b": "rtes",
        "u": "https://actualidad.rt.com/search?q={{{s}}}"
    },
    {
        "d": "rt.com",
        "b": "rtnews",
        "u": "http://rt.com/search/?q={{{s}}}"
    },
    {
        "d": "www.rt.com",
        "b": "rtoday",
        "u": "https://www.rt.com/search?q={{{s}}}"
    },
    {
        "d": "www.rts.ch",
        "b": "rts",
        "u": "http://www.rts.ch/services/recherche/?q={{{s}}}"
    },
    {
        "d": "www.rtvnh.nl",
        "b": "rtvnh",
        "u": "http://www.rtvnh.nl/zoeken/1/{{{s}}}"
    },
    {
        "d": "www.countrylife.co.za",
        "b": "sacl",
        "u": "https://www.countrylife.co.za/?s={{{s}}}"
    },
    {
        "d": "activehi.com",
        "b": "/?s",
        "u": "https://activehi.com/?s={{{s}}}"
    },
    {
        "d": "saidit.net",
        "b": "saidit",
        "u": "https://saidit.net/search?q={{{s}}}"
    },
    {
        "d": "www.salon.com",
        "b": "salon",
        "u": "https://www.salon.com/search/{{{s}}}"
    },
    {
        "d": "www.samaritanspurse.org",
        "b": "samaritans",
        "u": "http://www.samaritanspurse.org/?s={{{s}}}"
    },
    {
        "d": "saportareport.com",
        "b": "saporta",
        "u": "https://saportareport.com/?s={{{s}}}"
    },
    {
        "d": "www.sarkariplace.com",
        "b": "sarkariplace",
        "u": "https://www.sarkariplace.com/search?q={{{s}}}"
    },
    {
        "d": "www.scientificamerican.com",
        "b": "sa",
        "u": "http://www.scientificamerican.com/search/?q={{{s}}}&x=-783&y=-180 "
    },
    {
        "d": "sceptr.net",
        "b": "sceptr",
        "u": "https://sceptr.net/?s={{{s}}}"
    },
    {
        "d": "scienceblog.com",
        "b": "scienceblog",
        "u": "https://scienceblog.com/?s={{{s}}}"
    },
    {
        "d": "www.lescienze.it",
        "b": "scienze",
        "u": "http://www.lescienze.it/?q={{{s}}}"
    },
    {
        "d": "www.scmp.com",
        "b": "scmp",
        "u": "https://www.scmp.com/content/search/{{{s}}}"
    },
    {
        "d": "www.scottsradiosite.co.uk",
        "b": "scottsradiosite",
        "u": "http://www.scottsradiosite.co.uk/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "searchr",
        "u": "http://duckduckgo.com/?q=site:reddit.com+{{{s}}}"
    },
    {
        "d": "hn.algolia.com",
        "b": "searchyc",
        "u": "http://hn.algolia.com/#!/story/forever/0/{{{s}}}"
    },
    {
        "d": "www.security.nl",
        "b": "securitynl",
        "u": "https://www.security.nl/zoeken?search={{{s}}} "
    },
    {
        "d": "securityshelf.com",
        "b": "securityshelf",
        "u": "https://securityshelf.com/index.php?s={{{s}}}"
    },
    {
        "d": "seekingalpha.com",
        "b": "seekingalpha",
        "u": "http://seekingalpha.com/search/?q={{{s}}}"
    },
    {
        "d": "search.searchengineland.com",
        "b": "seland",
        "u": "http://search.searchengineland.com/search?w={{{s}}}"
    },
    {
        "d": "senat.me",
        "b": "senate",
        "u": "http://senat.me/en/?s={{{s}}}"
    },
    {
        "d": "www.sfgate.com",
        "b": "sfgate",
        "u": "http://www.sfgate.com/search/?action=search&query={{{s}}}"
    },
    {
        "d": "search.sindonews.com",
        "b": "sindonews",
        "u": "https://search.sindonews.com/search?type=artikel&q={{{s}}}"
    },
    {
        "d": "slashdot.org",
        "b": "/.",
        "u": "http://slashdot.org/index2.pl?fhfilter={{{s}}}"
    },
    {
        "d": "slashdot.org",
        "b": "./",
        "u": "http://slashdot.org/index2.pl?fhfilter={{{s}}}"
    },
    {
        "d": "slashdot.org",
        "b": "slashdot",
        "u": "http://slashdot.org/index2.pl?fhfilter={{{s}}}"
    },
    {
        "d": "www.slate.fr",
        "b": "slatefr",
        "u": "https://www.slate.fr/search?mot-cle={{{s}}}"
    },
    {
        "d": "sludgefeed.com",
        "b": "sludgefeed",
        "u": "https://sludgefeed.com/?s={{{s}}}"
    },
    {
        "d": "www.smhi.se",
        "b": "smhi",
        "u": "https://www.smhi.se/sok?query={{{s}}}"
    },
    {
        "d": "www.smh.com.au",
        "b": "smh",
        "u": "http://www.smh.com.au/search?text={{{s}}}"
    },
    {
        "d": "www.smashingmagazine.com",
        "b": "sm",
        "u": "http://www.smashingmagazine.com/search-results/?q={{{s}}}&cx=partner-pub-6779860845561969%3A5884617103&cof=FORID%3A10&ie=UTF-8"
    },
    {
        "d": "www.ohg-ka.de",
        "b": "smv",
        "u": "http://www.ohg-ka.de/smv/?s={{{s}}}"
    },
    {
        "d": "www.snopes.com",
        "b": "snp",
        "u": "http://www.snopes.com/?s={{{s}}}"
    },
    {
        "d": "soylentnews.org",
        "b": "sn",
        "u": "http://soylentnews.org/search.pl?query={{{s}}}"
    },
    {
        "d": "www.sp-bx.com",
        "b": "soapbox",
        "u": "https://www.sp-bx.com/?s={{{s}}}"
    },
    {
        "d": "www.ricerca24.ilsole24ore.com",
        "b": "sole24",
        "u": "https://www.ricerca24.ilsole24ore.com/fc?cmd=static&chId=30&path=%2Fsearch%2Fsearch_engine.jsp&field=Titolo%7CTesto&orderBy=score+desc&chId=30&keyWords={{{s}}}&button="
    },
    {
        "d": "www.spectator.co.uk",
        "b": "speccie",
        "u": "http://www.spectator.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.spiegel.de",
        "b": "spiegel",
        "u": "http://www.spiegel.de/suche/index.html?suchbegriff= {{{s}}}"
    },
    {
        "d": "www.spiegel.de",
        "b": "spon",
        "u": "http://www.spiegel.de/suche/index.html?suchbegriff={{{s}}}"
    },
    {
        "d": "www.sport1.de",
        "b": "sport1",
        "u": "http://www.sport1.de/suche#{{{s}}}"
    },
    {
        "d": "www.srf.ch",
        "b": "srf",
        "u": "http://www.srf.ch/suche?q={{{s}}}"
    },
    {
        "d": "stukroodvlees.nl",
        "b": "srv",
        "u": "http://stukroodvlees.nl/?s={{{s}}}"
    },
    {
        "d": "www.standaard.be",
        "b": "standaard",
        "u": "http://www.standaard.be/zoeken?keyword={{{s}}}"
    },
    {
        "d": "steigan.no",
        "b": "steigan",
        "u": "https://steigan.no/?s={{{s}}}"
    },
    {
        "d": "www.stern.de",
        "b": "stern",
        "u": "http://www.stern.de/action/3000116/search?query={{{s}}}"
    },
    {
        "d": "stockcharts.com",
        "b": "stockcharts",
        "u": "http://stockcharts.com/h-sc/ui?s={{{s}}}&p=D&yr=0&mn=6&dy=0"
    },
    {
        "d": "finance.google.com",
        "b": "stock",
        "u": "http://finance.google.com/?q={{{s}}}&sa=N&tab=fe"
    },
    {
        "d": "sok.stortinget.no",
        "b": "stortinget",
        "u": "https://sok.stortinget.no/?querytext={{{s}}}"
    },
    {
        "d": "www.straitstimes.com",
        "b": "straitstimes",
        "u": "https://www.straitstimes.com/search?searchkey={{{s}}}"
    },
    {
        "d": "www.startribune.com",
        "b": "strib",
        "u": "http://www.startribune.com/search/?q={{{s}}}"
    },
    {
        "d": "stream.org",
        "b": "strm",
        "u": "https://stream.org/?s={{{s}}}"
    },
    {
        "d": "stocktwits.com",
        "b": "st",
        "u": "http://stocktwits.com/search?q={{{s}}}"
    },
    {
        "d": "www.stuff.co.nz",
        "b": "stuffnz",
        "u": "http://www.stuff.co.nz/searchresults?Search+Site=Search+Site&cof=FORID%3A9&cx=006730714154542492986%3Aoh6vl0ybuqy&ie=UTF-8&q={{{s}}}&siteurl=www.stuff.co.nz%2F&ref="
    },
    {
        "d": "www.stuttgarter-zeitung.de",
        "b": "stz",
        "u": "http://www.stuttgarter-zeitung.de/suche?_charset_=UTF-8&searchText={{{s}}}"
    },
    {
        "d": "www.suconlavite.it",
        "b": "suconlavite",
        "u": "http://www.suconlavite.it/?s={{{s}}}"
    },
    {
        "d": "www.sueddeutsche.de",
        "b": "sued",
        "u": "http://www.sueddeutsche.de/news?search={{{s}}}"
    },
    {
        "d": "sunrise-sunset.org",
        "b": "sun",
        "u": "https://sunrise-sunset.org/search?location={{{s}}}"
    },
    {
        "d": "chicago.suntimes.com",
        "b": "suntimes",
        "u": "https://chicago.suntimes.com/?s={{{s}}}"
    },
    {
        "d": "www.svd.se",
        "b": "svd",
        "u": "http://www.svd.se/search.do?q={{{s}}}"
    },
    {
        "d": "sverigesradio.se",
        "b": "svr",
        "u": "https://sverigesradio.se/sida/sok.aspx?q={{{s}}} "
    },
    {
        "d": "www.svt.se",
        "b": "svtn",
        "u": "http://www.svt.se/search/?q={{{s}}}"
    },
    {
        "d": "swarajyamag.com",
        "b": "swarajya",
        "u": "https://swarajyamag.com/search?q={{{s}}}"
    },
    {
        "d": "www.seznam.cz",
        "b": "szpravy",
        "u": "https://www.seznam.cz/zpravy/hledani?q={{{s}}}&search--active=1"
    },
    {
        "d": "suche.sueddeutsche.de",
        "b": "sz",
        "u": "http://suche.sueddeutsche.de/news?search={{{s}}}"
    },
    {
        "d": "t3n.de",
        "b": "t3n",
        "u": "http://t3n.de/search?q={{{s}}}"
    },
    {
        "d": "taddlr.com",
        "b": "taddlr",
        "u": "http://taddlr.com/de/?s={{{s}}}"
    },
    {
        "d": "www.tagesschau.de",
        "b": "tagesschau",
        "u": "http://www.tagesschau.de/suche2.html?query={{{s}}}"
    },
    {
        "d": "www.tageswoche.ch",
        "b": "tageswoche",
        "u": "https://www.tageswoche.ch/search/?q={{{s}}}"
    },
    {
        "d": "www.tagesanzeiger.ch",
        "b": "tagi",
        "u": "https://www.tagesanzeiger.ch/service/suche/suche.html?date=alle&order=date&key={{{s}}}"
    },
    {
        "d": "markets.theaustralian.com.au",
        "b": "tam",
        "u": "https://markets.theaustralian.com.au/shares/{{{s}}}"
    },
    {
        "d": "tandemtech.be",
        "b": "tandemtech",
        "u": "https://tandemtech.be/search?q={{{s}}}"
    },
    {
        "d": "www.theaustralian.com.au",
        "b": "tan",
        "u": "https://www.theaustralian.com.au/search-results?q={{{s}}}"
    },
    {
        "d": "www.taz.de",
        "b": "taz",
        "u": "http://www.taz.de/!s={{{s}}}/"
    },
    {
        "d": "tedcurran.net",
        "b": "tcnet",
        "u": "http://tedcurran.net/?s={{{s}}}"
    },
    {
        "d": "conservativepapers.com",
        "b": "tcp",
        "u": "http://conservativepapers.com/?s={{{s}}}"
    },
    {
        "d": "theconversation.com",
        "b": "tcv",
        "u": "https://theconversation.com/global/search?utf8=✓&q={{{s}}}"
    },
    {
        "d": "www.tdg.ch",
        "b": "tdg",
        "u": "http://www.tdg.ch/services/recherche/?order=date&q={{{s}}}&submitSearch=Chercher&date=alle"
    },
    {
        "d": "www.tdstructurednotes.com",
        "b": "tdnotes",
        "u": "https://www.tdstructurednotes.com/snp/searchByKeyword.action?criteria.keyword={{{s}}}"
    },
    {
        "d": "www.techspot.com",
        "b": "techspot",
        "u": "https://www.techspot.com/search/?cx=partner-pub-7395890353660701%3Aj5claj-6kfy&cof=FORID%3A11&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "teknoseyir.com",
        "b": "teknoseyir",
        "u": "https://teknoseyir.com/?s={{{s}}}"
    },
    {
        "d": "www.telegraaf.nl",
        "b": "telegraaf",
        "u": "http://www.telegraaf.nl/zoeken/{{{s}}}"
    },
    {
        "d": "www.telegram.hr",
        "b": "telegram",
        "u": "https://www.telegram.hr/?s={{{s}}}"
    },
    {
        "d": "www.telegraph.co.uk",
        "b": "telegraph",
        "u": "https://www.telegraph.co.uk/search.html?q={{{s}}}"
    },
    {
        "d": "teletekst-data.nos.nl",
        "b": "teletekst",
        "u": "http://teletekst-data.nos.nl/webplus?p={{{s}}}"
    },
    {
        "d": "www.tenki.jp",
        "b": "tenkijp",
        "u": "http://www.tenki.jp/search/zip/?keyword={{{s}}}"
    },
    {
        "d": "www.teslarati.com",
        "b": "teslarati",
        "u": "https://www.teslarati.com/?s={{{s}}}"
    },
    {
        "d": "www.theage.com.au",
        "b": "theage",
        "u": "https://www.theage.com.au/search?text={{{s}}}"
    },
    {
        "d": "www.theatlantic.com",
        "b": "theatlantic",
        "u": "http://www.theatlantic.com/search/?q={{{s}}} "
    },
    {
        "d": "www.theaustralian.com.au",
        "b": "theaustralian",
        "u": "https://www.theaustralian.com.au/search-results?q={{{s}}}"
    },
    {
        "d": "www.theblaze.com",
        "b": "theblaze",
        "u": "https://www.theblaze.com/search/?q={{{s}}}"
    },
    {
        "d": "www.thecheckeredflag.co.uk",
        "b": "thecheckeredflag",
        "u": "http://www.thecheckeredflag.co.uk/?s={{{s}}} "
    },
    {
        "d": "www.columbian.com",
        "b": "thecolumbian",
        "u": "http://www.columbian.com/search/?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "thedonald",
        "u": "https://www.reddit.com/r/the_donald/search?q={{{s}}}&restrict_sr=on&sort=relevance&t=all"
    },
    {
        "d": "thehimalayantimes.com",
        "b": "thehimalayantimes",
        "u": "https://thehimalayantimes.com/?s={{{s}}}"
    },
    {
        "d": "www.thehindu.com",
        "b": "thehindu",
        "u": "https://www.thehindu.com/search/?q={{{s}}}"
    },
    {
        "d": "search.theregister.co.uk",
        "b": "theregister",
        "u": "http://search.theregister.co.uk/?q={{{s}}}&advanced=1&author=&date=the+dawn+of+time&site=all+The+Register+sites&results_per_page=100"
    },
    {
        "d": "www.thestar.com",
        "b": "thestar",
        "u": "https://www.thestar.com/search.html?q={{{s}}}"
    },
    {
        "d": "www.theverge.com",
        "b": "theverge",
        "u": "http://www.theverge.com/search?q={{{s}}}"
    },
    {
        "d": "www.theweek.co.uk",
        "b": "theweek",
        "u": "http://www.theweek.co.uk/search/site/{{{s}}}"
    },
    {
        "d": "www.huffingtonpost.com",
        "b": "thp",
        "u": "http://www.huffingtonpost.com/search.php/?q={{{s}}}"
    },
    {
        "d": "tildes.net",
        "b": "tildes",
        "u": "https://tildes.net/search?q={{{s}}}"
    },
    {
        "d": "www.tipranks.com",
        "b": "tipranks",
        "u": "https://www.tipranks.com/stocks/{{{s}}}"
    },
    {
        "d": "www.tivi.fi",
        "b": "tivi",
        "u": "https://www.tivi.fi/haku/?q={{{s}}}"
    },
    {
        "d": "tjournal.ru",
        "b": "tjournal",
        "u": "https://tjournal.ru/search/{{{s}}}"
    },
    {
        "d": "theladiesfinger.com",
        "b": "tlf",
        "u": "http://theladiesfinger.com/?s={{{s}}}"
    },
    {
        "d": "thelogicalindian.com",
        "b": "tli",
        "u": "http://thelogicalindian.com/?s={{{s}}}"
    },
    {
        "d": "www.timesnownews.com",
        "b": "tn",
        "u": "https://www.timesnownews.com/latest-news?search={{{s}}}"
    },
    {
        "d": "www.tntnews.net",
        "b": "tntnews",
        "u": "https://www.tntnews.net/?s={{{s}}}"
    },
    {
        "d": "tn.com.ar",
        "b": "todonoticias",
        "u": "http://tn.com.ar/buscar/{{{s}}}"
    },
    {
        "d": "timesofindia.indiatimes.com",
        "b": "toi",
        "u": "http://timesofindia.indiatimes.com/topic/{{{s}}}"
    },
    {
        "d": "torrentfreak.com",
        "b": "torrentfreak",
        "u": "http://torrentfreak.com/search/{{{s}}}"
    },
    {
        "d": "www.thestar.com",
        "b": "tostar",
        "u": "http://www.thestar.com/search.html?q={{{s}}}"
    },
    {
        "d": "tpo.nl",
        "b": "tpo",
        "u": "http://tpo.nl/?s={{{s}}}"
    },
    {
        "d": "trainingindustry.com",
        "b": "training",
        "u": "https://trainingindustry.com/?s={{{s}}}"
    },
    {
        "d": "www.trappersreport.com",
        "b": "trapper",
        "u": "http://www.trappersreport.com/?q={{{s}}}"
    },
    {
        "d": "www.trappersreport.com",
        "b": "trapping",
        "u": "https://www.trappersreport.com/search/{{{s}}}"
    },
    {
        "d": "www.transfermarkt.co.uk",
        "b": "trfuk",
        "u": "http://www.transfermarkt.co.uk/schnellsuche/ergebnis/schnellsuche?query={{{s}}}"
    },
    {
        "d": "therealnews.com",
        "b": "trn",
        "u": "https://therealnews.com/?s={{{s}}}"
    },
    {
        "d": "trome.pe",
        "b": "trome",
        "u": "https://trome.pe/buscar/?query={{{s}}}"
    },
    {
        "d": "web.tmxmoney.com",
        "b": "tsx",
        "u": "https://web.tmxmoney.com/company.php?qm_symbol={{{s}}}&locale=en"
    },
    {
        "d": "www.texastribune.org",
        "b": "tt",
        "u": "https://www.texastribune.org/search/?q={{{s}}}"
    },
    {
        "d": "news.tut.by",
        "b": "tutnews",
        "u": "http://news.tut.by/search/?str={{{s}}}"
    },
    {
        "d": "www.tradingview.com",
        "b": "tview",
        "u": "https://www.tradingview.com/chart/?symbol={{{s}}}"
    },
    {
        "d": "www.tvi24.iol.pt",
        "b": "tvi",
        "u": "http://www.tvi24.iol.pt/pesquisa/{{{s}}} "
    },
    {
        "d": "tvlanguedoc.com",
        "b": "tvl",
        "u": "http://tvlanguedoc.com/search_gcse/?q={{{s}}}"
    },
    {
        "d": "tweakers.net",
        "b": "tweak",
        "u": "https://tweakers.net/zoeken/?keyword={{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "@",
        "u": "https://twitter.com/{{{s}}}"
    },
    {
        "d": "www.theweathernetwork.com",
        "b": "twn",
        "u": "https://www.theweathernetwork.com/search?q={{{s}}}"
    },
    {
        "d": "www.washingtonpost.com",
        "b": "twp",
        "u": "http://www.washingtonpost.com/newssearch/search.html?st={{{s}}}"
    },
    {
        "d": "www.timeanddate.com",
        "b": "tz",
        "u": "http://www.timeanddate.com/worldclock/results.html?query={{{s}}}"
    },
    {
        "d": "www.urgente24.com",
        "b": "u24",
        "u": "http://www.urgente24.com/search/node/{{{s}}}"
    },
    {
        "d": "www.uaar.it",
        "b": "uaar",
        "u": "http://www.uaar.it/news/?s={{{s}}}"
    },
    {
        "d": "www.unilad.co.uk",
        "b": "unilad",
        "u": "https://www.unilad.co.uk/search/{{{s}}}"
    },
    {
        "d": "www.un-spider.org",
        "b": "unspider",
        "u": "http://www.un-spider.org/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "www.usatoday.com",
        "b": "usatoday",
        "u": "http://www.usatoday.com/search/{{{s}}}/"
    },
    {
        "d": "www.dailyuw.com",
        "b": "uwd",
        "u": "http://www.dailyuw.com/search/?t=article&nsa=eedition&q=&x=17&y=23{{{s}}}: "
    },
    {
        "d": "variety.com",
        "b": "variety",
        "u": "https://variety.com/results/#?q={{{s}}} "
    },
    {
        "d": "www.vartoslo.no",
        "b": "vartoslo",
        "u": "https://www.vartoslo.no/?s={{{s}}} "
    },
    {
        "d": "vc.ru",
        "b": "vcru",
        "u": "https://vc.ru/search/{{{s}}}"
    },
    {
        "d": "www.diarioveloz.com",
        "b": "veloz",
        "u": "http://www.diarioveloz.com/contenidos/resultado.html?text={{{s}}}"
    },
    {
        "d": "venturebeat.com",
        "b": "venturebeat",
        "u": "http://venturebeat.com/?s={{{s}}}"
    },
    {
        "d": "www.vice.com",
        "b": "vice",
        "u": "https://www.vice.com/en_us/search?q={{{s}}}"
    },
    {
        "d": "videnskab.dk",
        "b": "viden",
        "u": "https://videnskab.dk/s?query={{{s}}}"
    },
    {
        "d": "www.videonews.com",
        "b": "videonews",
        "u": "https://www.videonews.com/?s={{{s}}}"
    },
    {
        "d": "www.vijesti.me",
        "b": "vijesti",
        "u": "http://www.vijesti.me/trazi/?q={{{s}}}"
    },
    {
        "d": "www.vikatan.com",
        "b": "vikatan",
        "u": "https://www.vikatan.com/search.php?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "virtus",
        "u": "https://duckduckgo.com/?q=site:virtus.com+{{{s}}}"
    },
    {
        "d": "www.voanews.com",
        "b": "voan",
        "u": "https://www.voanews.com/s?k={{{s}}}&tab=all&pi=1&r=any&pp=10"
    },
    {
        "d": "www.vogue.co.uk",
        "b": "vogueuk",
        "u": "https://www.vogue.co.uk/search?q={{{s}}}"
    },
    {
        "d": "www.vogue.com",
        "b": "vogue",
        "u": "https://www.vogue.com/?s={{{s}}}"
    },
    {
        "d": "vote.us.org",
        "b": "vote",
        "u": "https://vote.us.org/search/?q={{{s}}}"
    },
    {
        "d": "www.vox.com",
        "b": "vox",
        "u": "http://www.vox.com/search?q={{{s}}}"
    },
    {
        "d": "www.vancouversun.com",
        "b": "vsun",
        "u": "http://www.vancouversun.com/search/search.html?q={{{s}}}"
    },
    {
        "d": "www.vz.lt",
        "b": "vz",
        "u": "https://www.vz.lt/section/?template=search&search={{{s}}}"
    },
    {
        "d": "www.wacotrib.com",
        "b": "wacotrib",
        "u": "http://www.wacotrib.com/search/?sd=desc&l=25&s=start_time&f=html&t=article%2Cvideo%2Cyoutube%2Ccollection&app=editorial&nsa=eedition&q={{{s}}}"
    },
    {
        "d": "thewalrus.ca",
        "b": "walrus",
        "u": "https://thewalrus.ca/?s={{{s}}}"
    },
    {
        "d": "www.washingtonpost.com",
        "b": "washingtonpost",
        "u": "http://www.washingtonpost.com/ac2/wp-dyn/NewsSearch?sb=-1&st={{{s}}}"
    },
    {
        "d": "www.watson.ch",
        "b": "watson",
        "u": "http://www.watson.ch/u/search?#{{{s}}}"
    },
    {
        "d": "www.wbur.org",
        "b": "wbur",
        "u": "http://www.wbur.org/search?q={{{s}}}"
    },
    {
        "d": "www.weather.com",
        "b": "wc",
        "u": "http://www.weather.com/search/enhancedlocalsearch?where={{{s}}}&loctypes=1/5/9/11/13/19/"
    },
    {
        "d": "weather.weatherbug.com",
        "b": "weatherbug",
        "u": "http://weather.weatherbug.com/Common/SearchResults.html?loc={{{s}}}&nav_section=1&zcode=z6169&lang_id=en-us&country=US&x=0&y=0&is_search=true"
    },
    {
        "d": "www.weather.com",
        "b": "weatherchannel",
        "u": "http://www.weather.com/search/enhancedlocalsearch?where={{{s}}}&loctypes=1/5/9/11/13/19/"
    },
    {
        "d": "weather.gc.ca",
        "b": "weathergc",
        "u": "https://weather.gc.ca/city/jump_e.html?city={{{s}}}"
    },
    {
        "d": "weatherspark.com",
        "b": "weatherspark",
        "u": "http://weatherspark.com/#!dashboard;q={{{s}}}"
    },
    {
        "d": "www.weather.com",
        "b": "weather",
        "u": "http://www.weather.com/search/enhancedlocalsearch?where={{{s}}}&loctypes=1/5/9/11/13/19/&from=hdr"
    },
    {
        "d": "www.weatherforyou.com",
        "b": "weathforyou",
        "u": "https://www.weatherforyou.com/reports/index.php?forecast=zandh&pands={{{s}}}&Submit=Get+Weather"
    },
    {
        "d": "www.weeronline.nl",
        "b": "weeronline",
        "u": "http://www.weeronline.nl/Go/Search/SearchResults?searchCriteria={{{s}}}&pageIndex=0&searchAction=WeatherInformation"
    },
    {
        "d": "www.wetter.de",
        "b": "wetterde",
        "u": "http://www.wetter.de/suche.html?search={{{s}}}"
    },
    {
        "d": "www.wetteronline.de",
        "b": "wetteronline",
        "u": "https://www.wetteronline.de/wetter/{{{s}}}"
    },
    {
        "d": "www.wetter.com",
        "b": "wetter",
        "u": "http://www.wetter.com/suche/?q={{{s}}}"
    },
    {
        "d": "wgbhnews.org",
        "b": "wgbh",
        "u": "http://wgbhnews.org/search/google/{{{s}}} "
    },
    {
        "d": "forecast.weather.gov",
        "b": "wgov",
        "u": "http://forecast.weather.gov/zipcity.php?inputstring={{{s}}} "
    },
    {
        "d": "www.wunderground.com",
        "b": "wg",
        "u": "https://www.wunderground.com/cgi-bin/findweather/getForecast?query={{{s}}}"
    },
    {
        "d": "search.wikileaks.org",
        "b": "wikileaks",
        "u": "https://search.wikileaks.org/?q={{{s}}}"
    },
    {
        "d": "en.wikinews.org",
        "b": "wikinews",
        "u": "http://en.wikinews.org/w/index.php?title=Special%3ASearch&redirs=0&search={{{s}}}"
    },
    {
        "d": "winfuture.de",
        "b": "winfu",
        "u": "http://winfuture.de/suche/?cx=001589123709424097799%3Asbdrzmcykc8&cof=FORID%3A11&ie=ISO-8859-1&q={{{s}}}"
    },
    {
        "d": "www.wionews.com",
        "b": "wion",
        "u": "http://www.wionews.com/search?q={{{s}}}"
    },
    {
        "d": "wolnemedia.net",
        "b": "wme",
        "u": "http://wolnemedia.net/?s={{{s}}}"
    },
    {
        "d": "www.meteovista.com",
        "b": "wmv",
        "u": "http://www.meteovista.com/Go/Search/SearchResults?searchCriteria={{{s}}}&pageIndex=0&searchAction=WeatherInformation"
    },
    {
        "d": "duckduckgo.com",
        "b": "wnall",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Awikinews.org"
    },
    {
        "d": "www.theweathernetwork.com",
        "b": "wnetwork",
        "u": "https://www.theweathernetwork.com/search?q={{{s}}}"
    },
    {
        "d": "world.wng.org",
        "b": "wng",
        "u": "https://world.wng.org/search/site/{{{s}}}"
    },
    {
        "d": "wagingnonviolence.org",
        "b": "wnv",
        "u": "http://wagingnonviolence.org/?s={{{s}}}"
    },
    {
        "d": "en.wikinews.org",
        "b": "wn",
        "u": "https://en.wikinews.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.wnyc.org",
        "b": "wnyc",
        "u": "http://www.wnyc.org/search/?q={{{s}}}"
    },
    {
        "d": "www.wonkette.com",
        "b": "wonkette",
        "u": "https://www.wonkette.com/search/?q={{{s}}}"
    },
    {
        "d": "world.wng.org",
        "b": "world",
        "u": "https://world.wng.org/search/site/{{{s}}}}"
    },
    {
        "d": "www.wetteronline.de",
        "b": "wo",
        "u": "http://www.wetteronline.de/wetter/{{{s}}}"
    },
    {
        "d": "www.washingtonpost.com",
        "b": "wpost",
        "u": "http://www.washingtonpost.com/newssearch/search.html?st={{{s}}}"
    },
    {
        "d": "szukaj.wp.pl",
        "b": "wppl",
        "u": "https://szukaj.wp.pl/szukaj.html?q={{{s}}}"
    },
    {
        "d": "whatreallyhappened.com",
        "b": "wrh",
        "u": "http://whatreallyhappened.com/search/node/{{{s}}}"
    },
    {
        "d": "www.marketwatch.com",
        "b": "wsjmw",
        "u": "http://www.marketwatch.com/search?q={{{s}}}"
    },
    {
        "d": "www.wsj.com",
        "b": "wsj",
        "u": "https://www.wsj.com/search/term.html?KEYWORDS={{{s}}}&isAdvanced=true&daysback=90d&andor=AND&sort=date-desc&source=wsjarticle,wsjblogs,wsjvideo,interactivemedia,sitesearch,wsjpro"
    },
    {
        "d": "www.wsws.org",
        "b": "wsws",
        "u": "https://www.wsws.org/en/search.html?sectionId=&maxResults=100&phrase={{{s}}}&submit=Search"
    },
    {
        "d": "wttr.in",
        "b": "wttr.in",
        "u": "http://wttr.in/{{{s}}}"
    },
    {
        "d": "wttr.in",
        "b": "wttr",
        "u": "http://wttr.in/{{{s}}}"
    },
    {
        "d": "www.wunderground.com",
        "b": "wunderground",
        "u": "https://www.wunderground.com/cgi-bin/findweather/getForecast?query={{{s}}}"
    },
    {
        "d": "www.wunderground.com",
        "b": "wu",
        "u": "https://www.wunderground.com/cgi-bin/findweather/getForecast?query={{{s}}}"
    },
    {
        "d": "www.wykop.pl",
        "b": "wykop",
        "u": "http://www.wykop.pl/szukaj/{{{s}}}/"
    },
    {
        "d": "xe.com",
        "b": "xe",
        "u": "https://xe.com/currency/{{{s}}}"
    },
    {
        "d": "www.xgn.nl",
        "b": "xgn",
        "u": "https://www.xgn.nl/zoeken/{{{s}}}"
    },
    {
        "d": "so.news.cn",
        "b": "xinhua",
        "u": "http://so.news.cn/#search/0/{{{s}}}/1/"
    },
    {
        "d": "xmostrata.com",
        "b": "xmostrata",
        "u": "http://xmostrata.com/?s={{{s}}}"
    },
    {
        "d": "au.finance.yahoo.com",
        "b": "yahoofinau",
        "u": "https://au.finance.yahoo.com/q?s={{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "yandexw",
        "u": "https://yandex.ru/pogoda/{{{s}}}"
    },
    {
        "d": "yandex.ru",
        "b": "yaw",
        "u": "https://yandex.ru/pogoda/search?request={{{s}}}"
    },
    {
        "d": "hn.algolia.com",
        "b": "yc",
        "u": "https://hn.algolia.com/?query={{{s}}}"
    },
    {
        "d": "yetigogo.com",
        "b": "yeti",
        "u": "https://yetigogo.com/?q={{{s}}}"
    },
    {
        "d": "finance.yahoo.com",
        "b": "yfc",
        "u": "http://finance.yahoo.com/echarts?s={{{s}}}"
    },
    {
        "d": "finance.yahoo.com",
        "b": "yfinance",
        "u": "http://finance.yahoo.com/q?s={{{s}}}"
    },
    {
        "d": "finance.yahoo.com",
        "b": "yfp",
        "u": "http://finance.yahoo.com/q/pr?s={{{s}}}+Profile"
    },
    {
        "d": "haku.yle.fi",
        "b": "yle",
        "u": "http://haku.yle.fi/?language=fi&UILanguage=fi&q={{{s}}}"
    },
    {
        "d": "news.search.yahoo.com",
        "b": "ynews",
        "u": "http://news.search.yahoo.com/news/search?ei=UTF-8&fr=news-us-ss&c=&p={{{s}}}"
    },
    {
        "d": "www.yr.no",
        "b": "yr",
        "u": "http://www.yr.no/soek/soek.aspx?sted={{{s}}}"
    },
    {
        "d": "youtubenews.de",
        "b": "ytn",
        "u": "https://youtubenews.de/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "yw",
        "u": "https://duckduckgo.com/?q=site%3Aweather.yahoo.com+{{{s}}}"
    },
    {
        "d": "www.zeit.de",
        "b": "zeit",
        "u": "http://www.zeit.de/suche/index?q={{{s}}}"
    },
    {
        "d": "zentrum-online.at",
        "b": "zentrum",
        "u": "https://zentrum-online.at/?s={{{s}}}"
    },
    {
        "d": "www.zerohedge.com",
        "b": "zerohedge",
        "u": "http://www.zerohedge.com/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "www.zerohedge.com",
        "b": "zh",
        "u": "https://www.zerohedge.com/search-content?search_api_fulltext={{{s}}}"
    },
    {
        "d": "www.zic.it",
        "b": "zic",
        "u": "http://www.zic.it/?s={{{s}}}"
    },
    {
        "d": "www.sahifatv.com",
        "b": "الاخبار",
        "u": "https://www.sahifatv.com/category/{{{s}}}"
    },
    {
        "d": "www.protocol.co.il",
        "b": "פרוטוקול",
        "u": "https://www.protocol.co.il/?s={{{s}}}"
    },
    {
        "d": "ru.wikinews.org",
        "b": "вн",
        "u": "https://ru.wikinews.org/wiki/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9F%D0%BE%D0%B8%D1%81%D0%BA?search={{{s}}}"
    },
    {
        "d": "npsd.party",
        "b": "нпсд",
        "u": "https://npsd.party/?s={{{s}}}"
    },
    {
        "d": "astronet.ge",
        "b": "ასტრო",
        "u": "http://astronet.ge/?s={{{s}}}"
    }
], bangs);
