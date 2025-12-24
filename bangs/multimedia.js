var bangs = bangs || [];

bangs = [].concat([
    {
        "d": "140journos.com",
        "b": "140",
        "u": "https://140journos.com/search?q={{{s}}}"
    },
    {
        "d": "15mpedia.org",
        "b": "15mpedia",
        "u": "https://15mpedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "onedrive.live.com",
        "b": "1dr",
        "u": "http://onedrive.live.com/?q={{{s}}}"
    },
    {
        "d": "1gabba.net",
        "b": "1gabba",
        "u": "http://1gabba.net/frontpage?title={{{s}}}"
    },
    {
        "d": "touhoudb.com",
        "b": "2hu",
        "u": "https://touhoudb.com/Search?filter={{{s}}}"
    },
    {
        "d": "www.4fitnessrules.com",
        "b": "4",
        "u": "https://www.4fitnessrules.com/workout-videos/?frm_search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "4chan",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3A4chan.org&t=ffsb"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chmu",
        "u": "https://boards.4chan.org/mu/catalog#s={{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chr9k",
        "u": "https://boards.4chan.org/r9k/catalog#s={{{s}}}"
    },
    {
        "d": "search.4shared.com",
        "b": "4shared",
        "u": "http://search.4shared.com/q/CCAD/1/{{{s}}}"
    },
    {
        "d": "prime.500px.com",
        "b": "500",
        "u": "https://prime.500px.com/search/keywords={{{s}}}"
    },
    {
        "d": "500px.com",
        "b": "500px",
        "u": "https://500px.com/search?q={{{s}}}"
    },
    {
        "d": "www.7digital.com",
        "b": "7digital",
        "u": "https://www.7digital.com/search?q={{{s}}}"
    },
    {
        "d": "www.7switch.com",
        "b": "7switch",
        "u": "https://www.7switch.com/fr/list/search/page/1?q={{{s}}}"
    },
    {
        "d": "www.7tv.de",
        "b": "7tv",
        "u": "https://www.7tv.de/suche?q={{{s}}}"
    },
    {
        "d": "8tracks.com",
        "b": "8tracks",
        "u": "http://8tracks.com/explore/all?q={{{s}}}"
    },
    {
        "d": "www.911tabs.com",
        "b": "911",
        "u": "http://www.911tabs.com/search.php?search={{{s}}}&type=band"
    },
    {
        "d": "www.911tabs.com",
        "b": "911s",
        "u": "http://www.911tabs.com/search.php?search={{{s}}}&type=song"
    },
    {
        "d": "99quotes.me",
        "b": "99quotes",
        "u": "https://99quotes.me/search?q={{{s}}}"
    },
    {
        "d": "www.aadl.org",
        "b": "aadl",
        "u": "http://www.aadl.org/catalog/search/keyword/{{{s}}}"
    },
    {
        "d": "www.albumartexchange.com",
        "b": "aae",
        "u": "http://www.albumartexchange.com/covers.php?q={{{s}}}"
    },
    {
        "d": "www.aakb.dk",
        "b": "aakb",
        "u": "https://www.aakb.dk/search/ting/{{{s}}}?"
    },
    {
        "d": "www.albumartexchange.com",
        "b": "àax",
        "u": "http://www.albumartexchange.com/covers?fltr=ALL&sort=TITLE&q={{{s}}}"
    },
    {
        "d": "www.albumartexchange.com",
        "b": "aax",
        "u": "http://www.albumartexchange.com/covers.php?q={{{s}}}"
    },
    {
        "d": "www.abandonia.com",
        "b": "abandonia",
        "u": "http://www.abandonia.com/en/search_abandonia/{{{s}}}"
    },
    {
        "d": "abcnotation.com",
        "b": "abc",
        "u": "http://abcnotation.com/searchTunes?q={{{s}}}"
    },
    {
        "d": "wall.alphacoders.com",
        "b": "abyss",
        "u": "http://wall.alphacoders.com/search.php?search={{{s}}}"
    },
    {
        "d": "www.acfun.cn",
        "b": "acfun",
        "u": "http://www.acfun.cn/search/?#query={{{s}}} "
    },
    {
        "d": "adjective1.com",
        "b": "adjective",
        "u": "http://adjective1.com/?s={{{s}}}"
    },
    {
        "d": "animedigitalnetwork.fr",
        "b": "adn",
        "u": "http://animedigitalnetwork.fr/video#search={{{s}}}"
    },
    {
        "d": "www.adsrsounds.com",
        "b": "adsr",
        "u": "https://www.adsrsounds.com/?src={{{s}}}"
    },
    {
        "d": "www.afpforum.com",
        "b": "afp",
        "u": "http://www.afpforum.com/AFPForum/Search/Results.aspx?pn=1&smd=8&fst={{{s}}}&fto=7&mui=3&t=2"
    },
    {
        "d": "www.afpforum.com",
        "b": "afpf",
        "u": "http://www.afpforum.com/AFPForum/Search/Results.aspx?pn=1&smd=8&fst={{{s}}}&fto=7&mui=3&t=2"
    },
    {
        "d": "duckduckgo.com",
        "b": "agdl",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:artsites.ucsc.edu/GDead/agdl/+!"
    },
    {
        "d": "www.air1.com",
        "b": "air1",
        "u": "http://www.air1.com/search.aspx?searchterm={{{s}}}"
    },
    {
        "d": "www.airliners.net",
        "b": "airliners",
        "u": "http://www.airliners.net/search?keywords={{{s}}}"
    },
    {
        "d": "air.mozilla.org",
        "b": "airmo",
        "u": "https://air.mozilla.org/search/?q={{{s}}}"
    },
    {
        "d": "www.albumartexchange.com",
        "b": "albex",
        "u": "http://www.albumartexchange.com/covers.php?q={{{s}}} "
    },
    {
        "d": "www.albumart.org",
        "b": "albumartcd",
        "u": "http://www.albumart.org/index.php?skey={{{s}}}&itempage=1&newsearch=1&searchindex=Music"
    },
    {
        "d": "www.albumart.org",
        "b": "albumartdvd",
        "u": "http://www.albumart.org/index.php?skey={{{s}}}&itempage=1&newsearch=1&searchindex=DVD"
    },
    {
        "d": "bendodson.com",
        "b": "albumart",
        "u": "https://bendodson.com/projects/itunes-artwork-finder/index.html?entity=album&country=us&query={{{s}}}"
    },
    {
        "d": "www.allmusic.com",
        "b": "allmus",
        "u": "https://www.allmusic.com/search/all/{{{s}}}"
    },
    {
        "d": "allsongs.tv",
        "b": "allsongs",
        "u": "http://allsongs.tv/search/?q={{{s}}}"
    },
    {
        "d": "alugha.com",
        "b": "alugha",
        "u": "https://alugha.com/search?q={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "amademp3",
        "u": "https://www.amazon.de/s?k={{{s}}}&i=digital-music"
    },
    {
        "d": "www.amara.org",
        "b": "amara",
        "u": "http://www.amara.org/search/#/?q={{{s}}}"
    },
    {
        "d": "www.allmusic.com",
        "b": "amg",
        "u": "http://www.allmusic.com/search/all/{{{s}}}"
    },
    {
        "d": "www.angrymetalguy.com",
        "b": "amguy",
        "u": "https://www.angrymetalguy.com/?s={{{s}}}"
    },
    {
        "d": "www.amoeba.com",
        "b": "amoeba",
        "u": "https://www.amoeba.com/search/all/?s={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "amusing",
        "u": "https://www.google.com/cse?cx=partner-pub-4049870445958322%3Apxmbpw-atgu&ie=ISO-8859-1&q={{{s}}}"
    },
    {
        "d": "www.amazon.de",
        "b": "amvidde",
        "u": "http://www.amazon.de/s/url=search-alias%3Dinstant-video&field-keywords={{{s}}}"
    },
    {
        "d": "www.anghami.com",
        "b": "anghami",
        "u": "https://www.anghami.com/search/{{{s}}}"
    },
    {
        "d": "www.angrymetalguy.com",
        "b": "angry",
        "u": "https://www.angrymetalguy.com/?s={{{s}}}"
    },
    {
        "d": "anibin.blogspot.com",
        "b": "anibin",
        "u": "https://anibin.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "anidb.net",
        "b": "anime",
        "u": "https://anidb.net/perl-bin/animedb.pl?show=animelist&adb.search={{{s}}}"
    },
    {
        "d": "www.animelyrics.com",
        "b": "animelyrics",
        "u": "http://www.animelyrics.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.anisearch.com",
        "b": "anisearch",
        "u": "https://www.anisearch.com/search?q={{{s}}}"
    },
    {
        "d": "www.anobii.com",
        "b": "anobii",
        "u": "http://www.anobii.com/search?s=1&keyword={{{s}}}"
    },
    {
        "d": "www.albumoftheyear.org",
        "b": "aoty",
        "u": "https://www.albumoftheyear.org/search.php?q={{{s}}}"
    },
    {
        "d": "www.aparat.com",
        "b": "aparat",
        "u": "http://www.aparat.com/result/{{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "apiv",
        "u": "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dprime-instant-video&field-keywords={{{s}}}"
    },
    {
        "d": "apod.nasa.gov",
        "b": "apod",
        "u": "https://apod.nasa.gov/apod/ap{{{s}}}.html"
    },
    {
        "d": "itunes.apple.com",
        "b": "applemusic",
        "u": "https://itunes.apple.com/search?term={{{s}}}&entity=musicTrack"
    },
    {
        "d": "www.amazon.de",
        "b": "apvde",
        "u": "https://www.amazon.de/s?k={{{s}}}&i=instant-video"
    },
    {
        "d": "www.ardmediathek.de",
        "b": "ard",
        "u": "https://www.ardmediathek.de/ard/search/{{{s}}}"
    },
    {
        "d": "haku.yle.fi",
        "b": "areena",
        "u": "http://haku.yle.fi/?q={{{s}}}&category=Areena"
    },
    {
        "d": "www.are.na",
        "b": "arena",
        "u": "https://www.are.na/search/{{{s}}}"
    },
    {
        "d": "asearchoficeandfire.com",
        "b": "asearchoficeandfire",
        "u": "https://asearchoficeandfire.com/?q={{{s}}}"
    },
    {
        "d": "stock.adobe.com",
        "b": "astock",
        "u": "https://stock.adobe.com/fr/search?k={{{s}}}"
    },
    {
        "d": "www.astrobin.com",
        "b": "astrobin",
        "u": "http://www.astrobin.com/search/?q={{{s}}}&search_type=1&solar_system_main_subject=&telescope_type=any&camera_type=any&aperture_min=&aperture_max=&pixel_size_min=&pixel_size_max=&start_date=&end_date=&integration_min=&integration_max=&moon_phase_min=&moon_phase_max="
    },
    {
        "d": "forum.audacityteam.org",
        "b": "audf",
        "u": "https://forum.audacityteam.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "fr.audiofanzine.com",
        "b": "audiofanzine",
        "u": "http://fr.audiofanzine.com/recherche/{{{s}}}.html"
    },
    {
        "d": "www.audionetwork.com",
        "b": "audionetwork",
        "u": "http://www.audionetwork.com/show-production-results.aspx?stype=4&keywords={{{s}}}"
    },
    {
        "d": "seznam-autobusu.cz",
        "b": "autobus",
        "u": "http://seznam-autobusu.cz/seznam?numberPlateOrNumber={{{s}}}"
    },
    {
        "d": "avaxsearch.net",
        "b": "avaxh",
        "u": "http://avaxsearch.net/avaxhome_search?q={{{s}}} &a=&commit=Search&c=&l=&sort_by="
    },
    {
        "d": "avtoprom.org",
        "b": "avtoprom",
        "u": "https://avtoprom.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "anevandos.wikia.com",
        "b": "avw",
        "u": "http://anevandos.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.augsburgwiki.de",
        "b": "awiki",
        "u": "https://www.augsburgwiki.de/index.php/AugsburgWiki/Suchergebnisse?q={{{s}}}"
    },
    {
        "d": "images.search.yahoo.com",
        "b": "awimg",
        "u": "http://images.search.yahoo.com/search/images;_ylt=A0PDoS1.milPyVkAh7OJzbkF?p={{{s}}}&fr=alltheweb&ei=utf-8&n=30&x=wrt&y=Search"
    },
    {
        "d": "search.azlyrics.com",
        "b": "azlyrics",
        "u": "http://search.azlyrics.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.baka-tsuki.org",
        "b": "bakatsuki",
        "u": "https://www.baka-tsuki.org/project/index.php?search={{{s}}}"
    },
    {
        "d": "bandcamp.com",
        "b": "bandcamp",
        "u": "https://bandcamp.com/search?q={{{s}}}"
    },
    {
        "d": "bato.to",
        "b": "bato",
        "u": "http://bato.to/search?name={{{s}}}&name_cond=c"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbcmusic",
        "u": "http://www.bbc.co.uk/music/search-results?q={{{s}}}"
    },
    {
        "d": "bandcamp.com",
        "b": "bctag",
        "u": "http://bandcamp.com/tag/{{{s}}}"
    },
    {
        "d": "baddogbooks.com",
        "b": "bdb",
        "u": "https://baddogbooks.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "image.baidu.com",
        "b": "bdimg",
        "u": "https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word={{{s}}}&oq=test&rsp=-1"
    },
    {
        "d": "www.beatport.com",
        "b": "beatport",
        "u": "https://www.beatport.com/search?q={{{s}}}"
    },
    {
        "d": "beets.readthedocs.io",
        "b": "beet",
        "u": "https://beets.readthedocs.io/en/latest/search.html?q={{{s}}}"
    },
    {
        "d": "beinsa.bg",
        "b": "beinsa",
        "u": "http://beinsa.bg/search.php?q={{{s}}}&submit=ТЪРСИ&s_type=all&id=&status=1"
    },
    {
        "d": "www.besteveralbums.com",
        "b": "besteveralbums",
        "u": "https://www.besteveralbums.com/search.php?s_o=all&s_q={{{s}}}"
    },
    {
        "d": "zoeken.gent.bibliotheek.be",
        "b": "bibgent",
        "u": "http://zoeken.gent.bibliotheek.be/?q={{{s}}}"
    },
    {
        "d": "milano.biblioteche.it",
        "b": "bibliomi",
        "u": "https://milano.biblioteche.it/opac/search/lst?q={{{s}}}"
    },
    {
        "d": "www.biblionetka.pl",
        "b": "biblionetka",
        "u": "http://www.biblionetka.pl/search.aspx?searchType=book_catalog&searchPhrase={{{s}}}"
    },
    {
        "d": "bibliotek.kavlinge.se",
        "b": "bibliotekkavlinge",
        "u": "http://bibliotek.kavlinge.se/search?query={{{s}}}"
    },
    {
        "d": "bibliotheques.paris.fr",
        "b": "bibparis",
        "u": "https://bibliotheques.paris.fr/Default/search.aspx?SC=CATALOGUE&QUERY={{{s}}}"
    },
    {
        "d": "search.bilibili.com",
        "b": "bilibili",
        "u": "http://search.bilibili.com/all?keyword={{{s}}} "
    },
    {
        "d": "www.bilibili.com",
        "b": "bili",
        "u": "http://www.bilibili.com/search?keyword={{{s}}}:"
    },
    {
        "d": "www.bing.com",
        "b": "bim",
        "u": "https://www.bing.com/images/search?q={{{s}}}&go=&form=QBIL&qs=n"
    },
    {
        "d": "www.bing.com",
        "b": "binggif",
        "u": "http://www.bing.com/images/search?&q={{{s}}}&qft=+filterui:photo-animatedgif&FORM=R5IR25"
    },
    {
        "d": "www.bitchute.com",
        "b": "bitc",
        "u": "https://www.bitchute.com/search/?q={{{s}}}&sort=date_created+desc"
    },
    {
        "d": "www.bitchute.com",
        "b": "bitch",
        "u": "https://www.bitchute.com/search/?q={{{s}}}&sort=date_created+desc"
    },
    {
        "d": "www.bitview.net",
        "b": "bitview",
        "u": "http://www.bitview.net/results.php?search={{{s}}}&t=Search+Videos"
    },
    {
        "d": "www.bilibili.com",
        "b": "blbl",
        "u": "http://www.bilibili.com/search?keyword={{{s}}}"
    },
    {
        "d": "bleach.wikia.com",
        "b": "bleach",
        "u": "http://bleach.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "bleep.com",
        "b": "bleep",
        "u": "https://bleep.com/search/query?q={{{s}}}"
    },
    {
        "d": "www.blenderguru.com",
        "b": "blenderguru",
        "u": "http://www.blenderguru.com/?s={{{s}}}&submit.x=0&submit.y=0"
    },
    {
        "d": "www.blenderguru.com",
        "b": "blg",
        "u": "http://www.blenderguru.com/?s={{{s}}}&submit.x=0&submit.y=0"
    },
    {
        "d": "bandcamp.com",
        "b": "bndc",
        "u": "https://bandcamp.com/search?q={{{s}}}"
    },
    {
        "d": "www.baileynurseries.com",
        "b": "bnil",
        "u": "http://www.baileynurseries.com/imagelibrary/gallery/search/?name={{{s}}}&brand=All&plant_type=All&height_lo=&height=f&spread_lo=&spread=f&exposure=All&zone=All&foliage=&dosearch=Do+Search"
    },
    {
        "d": "www.bobdylan.com",
        "b": "bobdylan",
        "u": "https://www.bobdylan.com/?s={{{s}}}"
    },
    {
        "d": "bocpages.org",
        "b": "bocpages",
        "u": "http://bocpages.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "bookcrossing.by",
        "b": "bookcrossing",
        "u": "http://bookcrossing.by/books?find={{{s}}}"
    },
    {
        "d": "www.bookeenstore.com",
        "b": "bookeen",
        "u": "https://www.bookeenstore.com/search?words={{{s}}}"
    },
    {
        "d": "www.bookfinder.com",
        "b": "bookfinder",
        "u": "http://www.bookfinder.com/search/?author=&title={{{s}}}&lang=en&submit=Begin+search&new_used=*&destination=us&currency=USD&mode=basic&st=sr&ac=qr"
    },
    {
        "d": "bookflavor.com",
        "b": "bookflavor",
        "u": "http://bookflavor.com/#!{{{s}}}"
    },
    {
        "d": "booko.com.au",
        "b": "booko",
        "u": "http://booko.com.au/books/search?q={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "books",
        "u": "https://www.amazon.com/s?k={{{s}}}&i=stripbooks"
    },
    {
        "d": "boomkat.com",
        "b": "boomkat",
        "u": "http://boomkat.com/search?q={{{s}}}"
    },
    {
        "d": "bpl.bibliocommons.com",
        "b": "bostonpubliclibrary",
        "u": "https://bpl.bibliocommons.com/search?q={{{s}}}&t=smart&search_category=keyword&commit=Search&submitsearch=go&se=catalog"
    },
    {
        "d": "duckduckgo.com",
        "b": "botb",
        "u": "https://duckduckgo.com/?q=site%3Abattleofthebits.org+{{{s}}}"
    },
    {
        "d": "songbpm.com",
        "b": "bpm",
        "u": "https://songbpm.com/{{{s}}}"
    },
    {
        "d": "katalog.bppn.waw.pl",
        "b": "bppn",
        "u": "http://katalog.bppn.waw.pl/F?func=find-b&request={{{s}}}&find_code=WRD&adjacent=N&local_base=PRA01&x=0&y=0&filter_code_1=WLN&filter_request_1=&filter_code_2=WYR&filter_request_2=&filter_code_3=WYR&filter_request_3=&filter_code_4=WFM&filter_request_4=&filter_code_5=WSL&filter_request_5="
    },
    {
        "d": "pro.beatport.com",
        "b": "bppro",
        "u": "https://pro.beatport.com/search?q={{{s}}}"
    },
    {
        "d": "www.brandsoftheworld.com",
        "b": "brands",
        "u": "http://www.brandsoftheworld.com/search/logo?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "quest.eb.com",
        "b": "britimgq",
        "u": "http://quest.eb.com/search/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "broadsign",
        "u": "https://duckduckgo.com/?q=site%3Abroadsign.com+{{{s}}}"
    },
    {
        "d": "www.barbershoptags.com",
        "b": "bst",
        "u": "http://www.barbershoptags.com/dbpage.php?pg=tags&go=Go&_searchq={{{s}}}"
    },
    {
        "d": "burst.shopify.com",
        "b": "burst",
        "u": "https://burst.shopify.com/photos/search?utf8=✓&q={{{s}}}"
    },
    {
        "d": "media.ccc.de",
        "b": "c3tv",
        "u": "https://media.ccc.de/search/?q={{{s}}}"
    },
    {
        "d": "www.cajunlyrics.com",
        "b": "CajunLyrics",
        "u": "https://www.cajunlyrics.com/?page=search&word={{{s}}}"
    },
    {
        "d": "11foot8.com",
        "b": "canopener",
        "u": "http://11foot8.com/?s={{{s}}}"
    },
    {
        "d": "www.cartoonnetwork.com",
        "b": "cartoonnetwork",
        "u": "http://www.cartoonnetwork.com/search/index.html?keywords={{{s}}}"
    },
    {
        "d": "cbdb.cz",
        "b": "cbdbcz",
        "u": "https://cbdb.cz/hledat?text={{{s}}}"
    },
    {
        "d": "colorcodedlyrics.com",
        "b": "ccly",
        "u": "https://colorcodedlyrics.com/?s={{{s}}}"
    },
    {
        "d": "ccsearch.creativecommons.org",
        "b": "ccsearch",
        "u": "https://ccsearch.creativecommons.org/search?q={{{s}}}"
    },
    {
        "d": "search.cheezburger.com",
        "b": "cheezburger",
        "u": "http://search.cheezburger.com/?q={{{s}}}"
    },
    {
        "d": "suche.chip.de",
        "b": "chip",
        "u": "http://suche.chip.de/?q={{{s}}}&it=1&submit.x=0&submit.y=0"
    },
    {
        "d": "www.chordie.com",
        "b": "chordie",
        "u": "http://www.chordie.com/?q={{{s}}}"
    },
    {
        "d": "chordify.net",
        "b": "chordify",
        "u": "https://chordify.net/?search={{{s}}}"
    },
    {
        "d": "ja.chordwiki.org",
        "b": "chordwiki",
        "u": "https://ja.chordwiki.org/search.html?q={{{s}}}"
    },
    {
        "d": "www.cifraclub.com.br",
        "b": "cifraclub",
        "u": "http://www.cifraclub.com.br/?q={{{s}}}"
    },
    {
        "d": "www.cineycortosgay.com",
        "b": "cineycortosgay",
        "u": "http://www.cineycortosgay.com/search?q={{{s}}}"
    },
    {
        "d": "www.lirikcinta.com",
        "b": "cinta",
        "u": "https://www.lirikcinta.com/result/?q={{{s}}}"
    },
    {
        "d": "www.music.cliggo.com",
        "b": "cliggo",
        "u": "https://www.music.cliggo.com/search/{{{s}}}"
    },
    {
        "d": "www.clipstijl.nl",
        "b": "clipstijl",
        "u": "http://www.clipstijl.nl/zoeken.php?zoek={{{s}}} "
    },
    {
        "d": "www.clker.com",
        "b": "clker",
        "u": "http://www.clker.com/search/{{{s}}}"
    },
    {
        "d": "commons.wikimedia.org",
        "b": "commons",
        "u": "https://commons.wikimedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "compfight.com",
        "b": "compfight",
        "u": "http://compfight.com/search/{{{s}}} /"
    },
    {
        "d": "www.pollstar.com",
        "b": "concerts",
        "u": "http://www.pollstar.com/tour/searchall.pl?By=All&Content={{{s}}}&go_green.x=0&go_green.y=0"
    },
    {
        "d": "www.clipconverter.cc",
        "b": "convert",
        "u": "http://www.clipconverter.cc/?url={{{s}}}"
    },
    {
        "d": "www.cowboylyrics.com",
        "b": "cowboylyrics",
        "u": "https://www.cowboylyrics.com/search.html?cx=partner-pub-1248082249428003%3A7921416976&ie=UTF-8&q={{{s}}}&cof=FORID%3A10&siteurl=cowboylyrics.com%2F&ref=&ss=346j47246j4"
    },
    {
        "d": "www1.cpdl.org",
        "b": "cpdl",
        "u": "http://www1.cpdl.org/wiki/index.php/Special:Search?search={{{s}}}&fulltext=Keyword+search"
    },
    {
        "d": "www.cpu-world.com",
        "b": "cpuworld",
        "u": "http://www.cpu-world.com/cgi-bin/SearchSite.pl?SEARCH={{{s}}}&PROCESS=Search"
    },
    {
        "d": "critiquebrainz.org",
        "b": "critique",
        "u": "https://critiquebrainz.org/search/?query={{{s}}}&type=artist"
    },
    {
        "d": "www.csfd.cz",
        "b": "csfd",
        "u": "https://www.csfd.cz/hledat/?q={{{s}}}"
    },
    {
        "d": "cyberlearn.hes-so.ch",
        "b": "cyb",
        "u": "https://cyberlearn.hes-so.ch/course/search.php?search={{{s}}}"
    },
    {
        "d": "cadence.gq",
        "b": "cyt",
        "u": "https://cadence.gq/cloudtube/search?q={{{s}}}&sort_by=relevance"
    },
    {
        "d": "www.deviantart.com",
        "b": "da",
        "u": "http://www.deviantart.com/browse/all/?section=&global=1&q={{{s}}}"
    },
    {
        "d": "www.dafont.com",
        "b": "dafont",
        "u": "http://www.dafont.com/search.php?psize=m&q={{{s}}}"
    },
    {
        "d": "dagobah.net",
        "b": "dagobah",
        "u": "http://dagobah.net/?search={{{s}}}"
    },
    {
        "d": "www.dailymotion.com",
        "b": "dailymotion",
        "u": "https://www.dailymotion.com/search/{{{s}}}"
    },
    {
        "d": "danbooru.donmai.us",
        "b": "danbooru",
        "u": "https://danbooru.donmai.us/posts?tags={{{s}}}+rating:safe"
    },
    {
        "d": "www.darklyrics.com",
        "b": "darklyrics",
        "u": "http://www.darklyrics.com/search?q={{{s}}}"
    },
    {
        "d": "dashradio.com",
        "b": "dashradio",
        "u": "http://dashradio.com/?q={{{s}}}"
    },
    {
        "d": "datpiff.com",
        "b": "datpiff",
        "u": "http://datpiff.com/mixtapes-search?criteria={{{s}}}&sort=rating"
    },
    {
        "d": "{{{s}}}.deviantart.com",
        "b": "dauser",
        "u": "http://{{{s}}}.deviantart.com"
    },
    {
        "d": "book.douban.com",
        "b": "dbbook",
        "u": "https://book.douban.com/subject_search?search_text={{{s}}}&cat=1001"
    },
    {
        "d": "www.databazeknih.cz",
        "b": "dbk",
        "u": "http://www.databazeknih.cz/search?q={{{s}}}"
    },
    {
        "d": "dbnl.nl",
        "b": "dbnl",
        "u": "http://dbnl.nl/zoeken/zoekeninteksten/index.php?zoek={{{s}}}"
    },
    {
        "d": "danbooru.donmai.us",
        "b": "dbrartist",
        "u": "https://danbooru.donmai.us/artists?commit=Search&search%5Bany_name_matches%5D={{{s}}}&search%5Border%5D=created_at&utf8=%E2%9C%93"
    },
    {
        "d": "danbooru.donmai.us",
        "b": "dbr",
        "u": "https://danbooru.donmai.us/posts?tags={{{s}}}+rating:safe"
    },
    {
        "d": "read.douban.com",
        "b": "dbread",
        "u": "https://read.douban.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgv",
        "u": "https://duckduckgo.com/?q={{{s}}}&iar=videos&iax=videos&ia=videos"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddi",
        "u": "https://duckduckgo.com/?q={{{s}}}&iax=images&ia=images"
    },
    {
        "d": "www.digitaldjtips.com",
        "b": "ddjt",
        "u": "https://www.digitaldjtips.com/?s={{{s}}}"
    },
    {
        "d": "derpibooru.org",
        "b": "derpibooru",
        "u": "https://derpibooru.org/search?utf8=%E2%9C%93&sbq={{{s}}}"
    },
    {
        "d": "derpibooru.org",
        "b": "derpibooruorg",
        "u": "https://derpibooru.org/search?utf8=✓&sbq= {{{s}}}"
    },
    {
        "d": "derpibooru.org",
        "b": "derpi",
        "u": "https://derpibooru.org/search?q={{{s}}}"
    },
    {
        "d": "www.deviantart.com",
        "b": "deviantart",
        "u": "http://www.deviantart.com/browse/all/?section=&global=1&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dggi",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=images"
    },
    {
        "d": "joindiaspora.com",
        "b": "diasporatags",
        "u": "https://joindiaspora.com/tags/{{{s}}}"
    },
    {
        "d": "dic.pixiv.net",
        "b": "dicpixiv",
        "u": "http://dic.pixiv.net/a/{{{s}}}"
    },
    {
        "d": "invidio.us",
        "b": "dio",
        "u": "https://invidio.us/search?q={{{s}}}"
    },
    {
        "d": "dirble.com",
        "b": "dirble",
        "u": "http://dirble.com/search?q={{{s}}}"
    },
    {
        "d": "www.discogs.com",
        "b": "discogs",
        "u": "http://www.discogs.com/search?q={{{s}}}&btn=&type=all"
    },
    {
        "d": "discipleshiplibrary.com",
        "b": "dlib",
        "u": "http://discipleshiplibrary.com/search.php?a=1&e=1&m=0&p=0&n=0&s=topic1&t=TOPIC%20A&ss={{{s}}}&st=all&ssf="
    },
    {
        "d": "www.dailymotion.com",
        "b": "dm",
        "u": "https://www.dailymotion.com/search/{{{s}}}"
    },
    {
        "d": "www.scribd.com",
        "b": "docs",
        "u": "http://www.scribd.com/search?query={{{s}}}"
    },
    {
        "d": "documentaryheaven.com",
        "b": "documentary",
        "u": "http://documentaryheaven.com/find/?q={{{s}}}"
    },
    {
        "d": "www.dogobooks.com",
        "b": "dogob",
        "u": "http://www.dogobooks.com/search/{{{s}}}"
    },
    {
        "d": "www.dogomovies.com",
        "b": "dogom",
        "u": "http://www.dogomovies.com/search/{{{s}}}"
    },
    {
        "d": "dogsing.com",
        "b": "dogsing",
        "u": "https://dogsing.com/results/?q={{{s}}}"
    },
    {
        "d": "www.steinberg.net",
        "b": "dorfor",
        "u": "https://www.steinberg.net/forums/search.php?keywords={{{s}}}&fid%5B0%5D=246"
    },
    {
        "d": "buecher-doerner.buchhandlung.de",
        "b": "dörner",
        "u": "https://buecher-doerner.buchhandlung.de/shop/quickSearch?searchString={{{s}}}"
    },
    {
        "d": "www.downpour.com",
        "b": "downpour",
        "u": "http://www.downpour.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "derpibooru.org",
        "b": "dpb",
        "u": "https://derpibooru.org/search?q={{{s}}}"
    },
    {
        "d": "dp.la",
        "b": "dpla",
        "u": "http://dp.la/search?utf8=✓&q={{{s}}}"
    },
    {
        "d": "dribbble.com",
        "b": "dr",
        "u": "http://dribbble.com/search?q={{{s}}}"
    },
    {
        "d": "drivetribe.com",
        "b": "drivetribe",
        "u": "https://drivetribe.com/search/{{{s}}}"
    },
    {
        "d": "www.directlyrics.com",
        "b": "drly",
        "u": "http://www.directlyrics.com/search/?q=direct+lyrics&ie=utf-8&q={{{s}}}"
    },
    {
        "d": "d.tube",
        "b": "dtube",
        "u": "https://d.tube/#!/s/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "duckduckgo",
        "u": "https://duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "www.duden.de",
        "b": "duden",
        "u": "http://www.duden.de/suchen/dudenonline/{{{s}}}"
    },
    {
        "d": "www.dumpert.nl",
        "b": "dumpert",
        "u": "http://www.dumpert.nl/tag/{{{s}}}/"
    },
    {
        "d": "www.dwell.com",
        "b": "dwell",
        "u": "https://www.dwell.com/query/{{{s}}}"
    },
    {
        "d": "www.deezer.com",
        "b": "dz",
        "u": "https://www.deezer.com/search/{{{s}}}"
    },
    {
        "d": "e926.net",
        "b": "e926",
        "u": "http://e926.net/post/search?tags={{{s}}}"
    },
    {
        "d": "www.earpod.co",
        "b": "earpod",
        "u": "https://www.earpod.co/search?q={{{s}}}"
    },
    {
        "d": "ebooki.swiatczytnikow.pl",
        "b": "ebooki",
        "u": "https://ebooki.swiatczytnikow.pl/szukaj/{{{s}}}"
    },
    {
        "d": "booko.com.au",
        "b": "ebooko",
        "u": "https://booko.com.au/products/search?product_type=3&q={{{s}}}"
    },
    {
        "d": "site.ebrary.com",
        "b": "ebrary",
        "u": "http://site.ebrary.com/lib/alltitles/search.action?p00={{{s}}} "
    },
    {
        "d": "www.e-chords.com",
        "b": "e-c",
        "u": "https://www.e-chords.com/search-all/{{{s}}}"
    },
    {
        "d": "www.edx.org",
        "b": "edx",
        "u": "https://www.edx.org/course?search_query={{{s}}}"
    },
    {
        "d": "egghead.io",
        "b": "egghead",
        "u": "https://egghead.io/search?q={{{s}}}"
    },
    {
        "d": "www.elix-lsf.fr",
        "b": "elix",
        "u": "https://www.elix-lsf.fr/spip.php?page=recherche_definitions&recherche={{{s}}}&lang=fr"
    },
    {
        "d": "www.emusic.com",
        "b": "emusic",
        "u": "https://www.emusic.com/search/{{{s}}}"
    },
    {
        "d": "www.engrish.com",
        "b": "engrish",
        "u": "http://www.engrish.com/?s={{{s}}}"
    },
    {
        "d": "encore.sdcl.org",
        "b": "ensdcl",
        "u": "http://encore.sdcl.org/iii/encore/search/C__S{{{s}}}__Orightresult__U?lang=eng&suite=def"
    },
    {
        "d": "ccs.polarislibrary.com",
        "b": "eplibrary",
        "u": "http://ccs.polarislibrary.com/polaris/search/searchresults.aspx?ctx=19.1033.0.0.2&type=Keyword&term={{{s}}}&by=KW&sort=PD&limit=TOM=*&query=&page=0&searchid=1"
    },
    {
        "d": "equipboard.com",
        "b": "equipboard",
        "u": "http://equipboard.com/search?search_term={{{s}}}"
    },
    {
        "d": "www.esvbible.org",
        "b": "esv",
        "u": "http://www.esvbible.org/search/?q={{{s}}}"
    },
    {
        "d": "eternity.youfailit.net",
        "b": "eternity",
        "u": "http://eternity.youfailit.net/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "search.library.ethz.ch",
        "b": "ethl",
        "u": "https://search.library.ethz.ch/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=DADS&lang=en_US&offset=0"
    },
    {
        "d": "archive.org",
        "b": "etree",
        "u": "http://archive.org/search.php?query={{{s}}}%20AND%20collection%3Aetree"
    },
    {
        "d": "europeana.eu",
        "b": "europeana",
        "u": "http://europeana.eu/portal/search.html?query={{{s}}}"
    },
    {
        "d": "everipedia.org",
        "b": "everipedia",
        "u": "https://everipedia.org/wiki/{{{s}}}/"
    },
    {
        "d": "www.evesta.jp",
        "b": "evesta",
        "u": "http://www.evesta.jp/lyric/search2.php?ct=1&go=%E6%A4%9C%E7%B4%A2&a=&ca=0&l=&cl=0&k=&t={{{s}}} "
    },
    {
        "d": "www.estantevirtual.com.br",
        "b": "evirtat",
        "u": "http://www.estantevirtual.com.br/q/{{{s}}}"
    },
    {
        "d": "www.estantevirtual.com.br",
        "b": "evirtau",
        "u": "http://www.estantevirtual.com.br/qau/{{{s}}}"
    },
    {
        "d": "www.estantevirtual.com.br",
        "b": "evirtdes",
        "u": "http://www.estantevirtual.com.br/qdes/{{{s}}}"
    },
    {
        "d": "www.estantevirtual.com.br",
        "b": "evirted",
        "u": "http://www.estantevirtual.com.br/qed/{{{s}}}"
    },
    {
        "d": "www.estantevirtual.com.br",
        "b": "evirt",
        "u": "http://www.estantevirtual.com.br/qt/{{{s}}}"
    },
    {
        "d": "www.estantevirtual.com.br",
        "b": "evirttit",
        "u": "http://www.estantevirtual.com.br/qtit/{{{s}}}"
    },
    {
        "d": "www.eyeem.com",
        "b": "eyeem",
        "u": "https://www.eyeem.com/search?q={{{s}}}&sort=relevance"
    },
    {
        "d": "fanart.tv",
        "b": "fanart",
        "u": "https://fanart.tv/?sect=all&s={{{s}}}"
    },
    {
        "d": "fanart.tv",
        "b": "fanartm",
        "u": "https://fanart.tv/?s={{{s}}}&sect=2"
    },
    {
        "d": "www.fanfiction.net",
        "b": "fanfiction",
        "u": "https://www.fanfiction.net/search/?keywords={{{s}}}"
    },
    {
        "d": "fanlore.org",
        "b": "fanlore",
        "u": "https://fanlore.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fantlab.ru",
        "b": "fantlab",
        "u": "https://fantlab.ru/searchmain?searchstr={{{s}}}"
    },
    {
        "d": "fanart.tv",
        "b": "fatv",
        "u": "https://fanart.tv/?sect=all&s={{{s}}}"
    },
    {
        "d": "furaffinity.net",
        "b": "fauser",
        "u": "http://furaffinity.net/user/{{{s}}}"
    },
    {
        "d": "fcit.usf.edu",
        "b": "fcit",
        "u": "https://fcit.usf.edu/search/index.php?searchWords={{{s}}}"
    },
    {
        "d": "www.feedbooks.com",
        "b": "feedbooks",
        "u": "http://www.feedbooks.com/search?query={{{s}}}"
    },
    {
        "d": "www.wikifeet.com",
        "b": "feet",
        "u": "https://www.wikifeet.com/search/{{{s}}}"
    },
    {
        "d": "fastfoodmusic.com",
        "b": "ffm",
        "u": "https://fastfoodmusic.com/?s={{{s}}}"
    },
    {
        "d": "www.filmaffinity.com",
        "b": "film",
        "u": "https://www.filmaffinity.com/es/search.php?stext={{{s}}}"
    },
    {
        "d": "www.film.nl",
        "b": "filmnl",
        "u": "https://www.film.nl/?q={{{s}}}"
    },
    {
        "d": "filmow.com",
        "b": "filmow",
        "u": "http://filmow.com/buscar/?q={{{s}}}"
    },
    {
        "d": "findo.com",
        "b": "findo",
        "u": "https://findo.com/app/search?query={{{s}}}"
    },
    {
        "d": "fixyt.com",
        "b": "fixyt",
        "u": "http://fixyt.com/search?q={{{s}}}"
    },
    {
        "d": "www.flaticon.com",
        "b": "flaticon",
        "u": "http://www.flaticon.com/search/{{{s}}}"
    },
    {
        "d": "www.flickr.com",
        "b": "flickrcc",
        "u": "https://www.flickr.com/search/?text={{{s}}}&license=2%2C3%2C4%2C5%2C6%2C9"
    },
    {
        "d": "www.flickr.com",
        "b": "flickrc",
        "u": "http://www.flickr.com/search/?q={{{s}}}&l=commderiv"
    },
    {
        "d": "flickr.com",
        "b": "flickr",
        "u": "http://flickr.com/search/?q={{{s}}}"
    },
    {
        "d": "secure.flickr.com",
        "b": "flickrid",
        "u": "https://secure.flickr.com/photo.gne?id={{{s}}}"
    },
    {
        "d": "flickriver.com",
        "b": "flickriver",
        "u": "http://flickriver.com/search/{{{s}}}/"
    },
    {
        "d": "freemusicarchive.org",
        "b": "fma",
        "u": "http://freemusicarchive.org/search/?quicksearch={{{s}}}&sort=track_interest"
    },
    {
        "d": "filmaster.com",
        "b": "fm",
        "u": "http://filmaster.com/search/?q={{{s}}}"
    },
    {
        "d": "www.fanburst.com",
        "b": "fnb",
        "u": "https://www.fanburst.com/search?q={{{s}}}"
    },
    {
        "d": "www.folktunefinder.com",
        "b": "folktunefinder",
        "u": "http://www.folktunefinder.com/tunes?text={{{s}}}"
    },
    {
        "d": "www.dissolve.com",
        "b": "footage",
        "u": "http://www.dissolve.com/products?keywords={{{s}}}"
    },
    {
        "d": "fotolog.com",
        "b": "fotolog",
        "u": "https://fotolog.com/search?query={{{s}}}"
    },
    {
        "d": "framatube.org",
        "b": "framat",
        "u": "https://framatube.org/search?search={{{s}}}"
    },
    {
        "d": "fraze.it",
        "b": "frazeit",
        "u": "http://fraze.it/n_search.jsp?q={{{s}}}"
    },
    {
        "d": "www.freepik.com",
        "b": "freepik",
        "u": "http://www.freepik.com/index.php?goto=2&searchform=1&k={{{s}}}"
    },
    {
        "d": "www.freesfx.co.uk",
        "b": "freesfx",
        "u": "http://www.freesfx.co.uk/sfx/{{{s}}}"
    },
    {
        "d": "www.freesound.org",
        "b": "freesound",
        "u": "http://www.freesound.org/search/?q={{{s}}}"
    },
    {
        "d": "www.freesound.org",
        "b": "frs",
        "u": "http://www.freesound.org/search/?q={{{s}}}"
    },
    {
        "d": "www.filmtotaal.nl",
        "b": "ftnl",
        "u": "https://www.filmtotaal.nl/zoeken/?q={{{s}}}"
    },
    {
        "d": "www.funimation.com",
        "b": "funi",
        "u": "https://www.funimation.com/search/?q={{{s}}}"
    },
    {
        "d": "funkytime.tv",
        "b": "funky",
        "u": "https://funkytime.tv/search?q={{{s}}}"
    },
    {
        "d": "www.furaffinity.net",
        "b": "furaffinity",
        "u": "https://www.furaffinity.net/search/?q={{{s}}}"
    },
    {
        "d": "www.fwtv.tv",
        "b": "fwtv",
        "u": "http://www.fwtv.tv/buscar/{{{s}}}"
    },
    {
        "d": "gaana.com",
        "b": "gaana",
        "u": "https://gaana.com/search/{{{s}}}"
    },
    {
        "d": "www.garden-en.com",
        "b": "garden",
        "u": "http://www.garden-en.com/s/en/?type=sfd&query={{{s}}}"
    },
    {
        "d": "books.google.com",
        "b": "gb",
        "u": "http://books.google.com/books?q={{{s}}}&btnG=Search+Books"
    },
    {
        "d": "www.gamerscafe.com.br",
        "b": "gcafe",
        "u": "https://www.gamerscafe.com.br/pesquisa/{{{s}}}/"
    },
    {
        "d": "www.google.com",
        "b": "gcc",
        "u": "https://www.google.com/search?tbm=isch&tbs=sur:fmc&as_q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gdoodle",
        "u": "https://www.google.com/doodles?q={{{s}}}"
    },
    {
        "d": "www.generasia.com",
        "b": "generasia",
        "u": "http://www.generasia.com/w/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "genius.com",
        "b": "genius",
        "u": "https://genius.com/search?q={{{s}}}"
    },
    {
        "d": "www.gettyimages.com",
        "b": "gettyimages",
        "u": "http://www.gettyimages.com/Search/Search.aspx?src=quick&contractUrl=1&family=creative&phrase={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "gfycatdepot",
        "u": "https://www.reddit.com/r/GfycatDepot/search?q={{{s}}}&restrict_sr=on&sort=relevance&t=all"
    },
    {
        "d": "gfycat.com",
        "b": "gfy",
        "u": "https://gfycat.com/gifs/search/{{{s}}}"
    },
    {
        "d": "google.com",
        "b": "ggif",
        "u": "https://google.com/search?q={{{s}}}&site=webhp&tbm=isch&tbs=itp%3Aanimated"
    },
    {
        "d": "www.gibertjoseph.com",
        "b": "gibertj",
        "u": "http://www.gibertjoseph.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.google.ca",
        "b": "gica",
        "u": "http://www.google.ca/search?q={{{s}}}&tbm=isch"
    },
    {
        "d": "gifcities.org",
        "b": "gifcities",
        "u": "http://gifcities.org/?q={{{s}}}"
    },
    {
        "d": "giphy.com",
        "b": "gif",
        "u": "https://giphy.com/search/{{{s}}}"
    },
    {
        "d": "giphy.com",
        "b": "giphy",
        "u": "http://giphy.com/search/{{{s}}} "
    },
    {
        "d": "tv.giphy.com",
        "b": "giphytv",
        "u": "http://tv.giphy.com/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "giurl",
        "u": "https://www.google.com/searchbyimage?image_url={{{s}}}"
    },
    {
        "d": "gloria.tv",
        "b": "gloriatv",
        "u": "http://gloria.tv/?search={{{s}}}"
    },
    {
        "d": "www.gml.se",
        "b": "gml",
        "u": "https://www.gml.se/bocker/sok?q={{{s}}}"
    },
    {
        "d": "www.wiki-goettingen.de",
        "b": "goettingen",
        "u": "http://www.wiki-goettingen.de/index.php?search={{{s}}}"
    },
    {
        "d": "www.goodreads.com",
        "b": "goodreads",
        "u": "http://www.goodreads.com/search/search?search_type=books&search[query]={{{s}}}"
    },
    {
        "d": "www.goodreads.com",
        "b": "goodreadslist",
        "u": "https://www.goodreads.com/search?search_type=lists&q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "googlebooks",
        "u": "https://www.google.com/search?tbm=bks&q={{{s}}}"
    },
    {
        "d": "www.google.com.tr",
        "b": "googletr",
        "u": "https://www.google.com.tr/search?q={{{s}}} "
    },
    {
        "d": "www.gospell.org",
        "b": "gospell",
        "u": "http://www.gospell.org/index.php?search={{{s}}}"
    },
    {
        "d": "photos.google.com",
        "b": "gphotos",
        "u": "https://photos.google.com/search/{{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "gplaym",
        "u": "https://play.google.com/store/search?q={{{s}}}&c=music"
    },
    {
        "d": "archive.org",
        "b": "gratefuldead",
        "u": "http://archive.org/search.php?query={{{s}}}%20AND%20collection%3AGratefulDead"
    },
    {
        "d": "www.goodreads.com",
        "b": "greads",
        "u": "https://www.goodreads.com/search?utf8=✓&query={{{s}}}"
    },
    {
        "d": "goblinrefuge.com",
        "b": "grf",
        "u": "https://goblinrefuge.com/mediagoblin/search/?query={{{s}}}"
    },
    {
        "d": "www.goodreads.com",
        "b": "gr",
        "u": "https://www.goodreads.com/search?q={{{s}}}"
    },
    {
        "d": "images.google.com",
        "b": "gri",
        "u": "https://images.google.com/searchbyimage?image_url={{{s}}} "
    },
    {
        "d": "www.youtube.com",
        "b": "grumps",
        "u": "https://www.youtube.com/user/GameGrumps/search?query={{{s}}}"
    },
    {
        "d": "hds.hebis.de",
        "b": "gubf",
        "u": "https://hds.hebis.de/ubffm/Search/Results?lookfor={{{s}}}&type=allfields&submit=Suchen"
    },
    {
        "d": "www.guitaa.com",
        "b": "guitaa",
        "u": "https://www.guitaa.com/search?q={{{s}}}"
    },
    {
        "d": "www.guitartabsexplorer.com",
        "b": "guitartabs",
        "u": "http://www.guitartabsexplorer.com/search.php?search={{{s}}}"
    },
    {
        "d": "gunstreamer.com",
        "b": "gunstreamer",
        "u": "https://gunstreamer.com/search?q=Test&idx=videos&p=0&keyword={{{s}}}"
    },
    {
        "d": "www.gutenberg.org",
        "b": "gutenberg",
        "u": "http://www.gutenberg.org/ebooks/search/?query={{{s}}}"
    },
    {
        "d": "www.girlswithmuscle.com",
        "b": "gwm",
        "u": "https://www.girlswithmuscle.com/images/?name={{{s}}}"
    },
    {
        "d": "gyazo.com",
        "b": "gyazo",
        "u": "https://gyazo.com/search/{{{s}}}"
    },
    {
        "d": "hakkani.org",
        "b": "haq",
        "u": "http://hakkani.org/?term={{{s}}}"
    },
    {
        "d": "www.harptabs.com",
        "b": "harptabs",
        "u": "https://www.harptabs.com/searchsong.php?Name={{{s}}}&HarpType=0"
    },
    {
        "d": "hclib.bibliocommons.com",
        "b": "hclib",
        "u": "https://hclib.bibliocommons.com/v2/search?query={{{s}}}&searchType=smart"
    },
    {
        "d": "www.hdtracks.com",
        "b": "hdt",
        "u": "https://www.hdtracks.com/catalogsearch/result/?q={{{s}}}"
    },
    {
        "d": "www.heatspring.com",
        "b": "heatspring",
        "u": "https://www.heatspring.com/app/courses/?query={{{s}}}"
    },
    {
        "d": "hooktube.com",
        "b": "hkt",
        "u": "https://hooktube.com/results?search_query={{{s}}}"
    },
    {
        "d": "catalog.hmcpl.org",
        "b": "hmcpl",
        "u": "https://catalog.hmcpl.org/cgi-bin/koha/opac-search.pl?q={{{s}}}"
    },
    {
        "d": "honto.jp",
        "b": "hon",
        "u": "https://honto.jp/netstore/search_10{{{s}}}.html?srchf=1&tbty=0"
    },
    {
        "d": "hooktube.com",
        "b": "hooktube",
        "u": "https://hooktube.com/results?search_query={{{s}}}"
    },
    {
        "d": "www.houzz.com",
        "b": "houzz",
        "u": "https://www.houzz.com/photos/query/{{{s}}}"
    },
    {
        "d": "www.hpb.com",
        "b": "hpb",
        "u": "https://www.hpb.com/products?utf8=%E2%9C%93&keywords={{{s}}}"
    },
    {
        "d": "hooktube.com",
        "b": "htb",
        "u": "https://hooktube.com/results?search_query={{{s}}}"
    },
    {
        "d": "hooktube.com",
        "b": "ht",
        "u": "https://hooktube.com/results?search_query={{{s}}}"
    },
    {
        "d": "hooktube.com",
        "b": "htube",
        "u": "https://hooktube.com/results?search_query={{{s}}}"
    },
    {
        "d": "www.hulu.com",
        "b": "hulu",
        "u": "http://www.hulu.com/search?query={{{s}}}"
    },
    {
        "d": "hymn.se",
        "b": "hymn",
        "u": "http://hymn.se/?s={{{s}}}"
    },
    {
        "d": "hymn.se",
        "b": "hymnse",
        "u": "http://hymn.se/?s={{{s}}}"
    },
    {
        "d": "www.hymnal.net",
        "b": "hymns",
        "u": "https://www.hymnal.net/en/search/all/all/{{{s}}}"
    },
    {
        "d": "hypem.com",
        "b": "hypem",
        "u": "http://hypem.com/#!/search/{{{s}}}/1/"
    },
    {
        "d": "web.archive.org",
        "b": "ia",
        "u": "https://web.archive.org/web/*/{{{s}}}"
    },
    {
        "d": "www.archive.org",
        "b": "iarchive",
        "u": "http://www.archive.org/search.php?query={{{s}}} "
    },
    {
        "d": "www.irasutoya.com",
        "b": "iasutoya",
        "u": "http://www.irasutoya.com/search?q={{{s}}}"
    },
    {
        "d": "www.indiebound.org",
        "b": "ib",
        "u": "https://www.indiebound.org/search/book?keys={{{s}}}"
    },
    {
        "d": "dir.xiph.org",
        "b": "icecast",
        "u": "http://dir.xiph.org/search?search={{{s}}} "
    },
    {
        "d": "www.google.it",
        "b": "idd",
        "u": "http://www.google.it/cse?cx=partner-pub-5110806989181281:4419033070&q={{{s}}}"
    },
    {
        "d": "kantaro.ikso.net",
        "b": "ikso",
        "u": "http://kantaro.ikso.net/?do=search&id={{{s}}}&fulltext=Serĉo"
    },
    {
        "d": "www.image-net.org",
        "b": "imagenet",
        "u": "http://www.image-net.org/search?q={{{s}}}"
    },
    {
        "d": "quest.eb.com",
        "b": "imagequest",
        "u": "http://quest.eb.com/search/{{{s}}}"
    },
    {
        "d": "imagr.eu",
        "b": "imagr",
        "u": "https://imagr.eu/?action=search&search={{{s}}}"
    },
    {
        "d": "www.imdb.com",
        "b": "imdb",
        "u": "http://www.imdb.com/find?s=all&q={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "imgrwm",
        "u": "https://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1#q={{{s}}}&tbs=imgo:1,sur:fmc&tbm=isch"
    },
    {
        "d": "imgur.com",
        "b": "imgur",
        "u": "https://imgur.com/search?q={{{s}}}"
    },
    {
        "d": "imslp.org",
        "b": "imslp",
        "u": "http://imslp.org/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "www.chapters.indigo.ca",
        "b": "indigo",
        "u": "http://www.chapters.indigo.ca/home/search/?keywords={{{s}}}"
    },
    {
        "d": "invidio.us",
        "b": "in",
        "u": "https://invidio.us/search?q={{{s}}}"
    },
    {
        "d": "inkbunny.net",
        "b": "inkb",
        "u": "https://inkbunny.net/submissionsviewall.php?rid=&mode=search&page=1&orderby=create_datetime&text={{{s}}}&stringtype=and&keywords=yes&title=yes&description=no&artist=&favsby=&type=&sale=&days=&keyword_id=&user_id=&random=&md5="
    },
    {
        "d": "inspirationhut.net",
        "b": "inspirationhut",
        "u": "http://inspirationhut.net/?s={{{s}}}"
    },
    {
        "d": "instagram.com",
        "b": "instagram",
        "u": "https://instagram.com/explore/tags/{{{s}}}"
    },
    {
        "d": "instantlogosearch.com",
        "b": "instantlogo",
        "u": "http://instantlogosearch.com/?q={{{s}}}"
    },
    {
        "d": "www.instapaper.com",
        "b": "instapaper",
        "u": "https://www.instapaper.com/search?q={{{s}}}"
    },
    {
        "d": "invidio.us",
        "b": "invd",
        "u": "https://invidio.us/search?q={{{s}}}"
    },
    {
        "d": "invidio.us",
        "b": "invid",
        "u": "https://invidio.us/search?q={{{s}}}"
    },
    {
        "d": "invidio.us",
        "b": "invidio",
        "u": "https://invidio.us/search?q={{{s}}}"
    },
    {
        "d": "www.invidio.us",
        "b": "invidious",
        "u": "https://www.invidio.us/search?q={{{s}}}"
    },
    {
        "d": "inventaire.io",
        "b": "inv",
        "u": "https://inventaire.io/search?q={{{s}}}"
    },
    {
        "d": "imgops.com",
        "b": "iops",
        "u": "http://imgops.com/{{{s}}}"
    },
    {
        "d": "www.ipernity.com",
        "b": "ipernity",
        "u": "http://www.ipernity.com/search/doc?q={{{s}}}&w=on"
    },
    {
        "d": "iqdb.org",
        "b": "iqdb",
        "u": "http://iqdb.org/?url={{{s}}}"
    },
    {
        "d": "www.irasutoya.com",
        "b": "irasutoya",
        "u": "http://www.irasutoya.com/search?q={{{s}}}"
    },
    {
        "d": "isbndb.com",
        "b": "isbndb",
        "u": "http://isbndb.com/search-all.html?kw={{{s}}}"
    },
    {
        "d": "isbndb.com",
        "b": "isbn",
        "u": "https://isbndb.com/search/books/{{{s}}}"
    },
    {
        "d": "isbn.nu",
        "b": "isbnnu",
        "u": "http://isbn.nu/{{{s}}}"
    },
    {
        "d": "isbnsearch.org",
        "b": "isbnsearch",
        "u": "https://isbnsearch.org/search?s={{{s}}}"
    },
    {
        "d": "www.istockphoto.com",
        "b": "istock",
        "u": "http://www.istockphoto.com/photos/{{{s}}}?phrase={{{s}}}"
    },
    {
        "d": "www.istockphoto.com",
        "b": "istockphoto",
        "u": "http://www.istockphoto.com/file_search.php?action=file&text={{{s}}}"
    },
    {
        "d": "itunes.apple.com",
        "b": "itunesartist",
        "u": "https://itunes.apple.com/us/artist/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ituneses",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aitunes.apple.com%2Fes%2F"
    },
    {
        "d": "google.com",
        "b": "iurl",
        "u": "http://google.com/searchbyimage?image_url={{{s}}}"
    },
    {
        "d": "yandex.com",
        "b": "iya",
        "u": "https://yandex.com/images/search?text={{{s}}}"
    },
    {
        "d": "www.jamendo.com",
        "b": "jamendo",
        "u": "https://www.jamendo.com/search?q={{{s}}}"
    },
    {
        "d": "www.jamendo.com",
        "b": "jam",
        "u": "https://www.jamendo.com/en/search?qs=q={{{s}}}"
    },
    {
        "d": "www.jupiterbroadcasting.com",
        "b": "jb",
        "u": "http://www.jupiterbroadcasting.com/?s={{{s}}}"
    },
    {
        "d": "www.jeuxvideo.com",
        "b": "jeux",
        "u": "http://www.jeuxvideo.com/recherche.php?q={{{s}}}"
    },
    {
        "d": "www.jazzguitar.be",
        "b": "jgf",
        "u": "http://www.jazzguitar.be/forum/search.php?searchid={{{s}}}"
    },
    {
        "d": "jguitar.com",
        "b": "jguitar",
        "u": "http://jguitar.com/chordsearch?chordsearch={{{s}}}"
    },
    {
        "d": "www.jellynote.com",
        "b": "jn",
        "u": "https://www.jellynote.com/en/search?q={{{s}}}"
    },
    {
        "d": "www.jonathancoulton.com",
        "b": "joco",
        "u": "http://www.jonathancoulton.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.jstor.org",
        "b": "jstor",
        "u": "http://www.jstor.org/action/doBasicSearch?Query={{{s}}}"
    },
    {
        "d": "www.junodownload.com",
        "b": "junodl",
        "u": "http://www.junodownload.com/search/?q[all][0]={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "justwatchde",
        "u": "https://www.justwatch.com/de/Suche?q={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "justwatchuk",
        "u": "https://www.justwatch.com/uk/search?q={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "jwit",
        "u": "https://www.justwatch.com/it/cerca?q={{{s}}}"
    },
    {
        "d": "kalimah.top",
        "b": "kalimah",
        "u": "https://kalimah.top/results/?q={{{s}}}"
    },
    {
        "d": "www.kanopy.com",
        "b": "kanopy",
        "u": "https://www.kanopy.com/s?query={{{s}}}"
    },
    {
        "d": "catalog.kentonlibrary.org",
        "b": "kcpl",
        "u": "http://catalog.kentonlibrary.org/eg/opac/results?query={{{s}}}"
    },
    {
        "d": "ketab.io",
        "b": "ketab",
        "u": "https://ketab.io/search?submit=جستجو&q={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "kindle",
        "u": "https://www.amazon.com/s?k={{{s}}}&i=digital-text"
    },
    {
        "d": "www.amazon.de",
        "b": "kindlede",
        "u": "https://www.amazon.de/s?k={{{s}}}&i=digital-text"
    },
    {
        "d": "www.amazon.co.uk",
        "b": "kindleuk",
        "u": "https://www.amazon.co.uk/s?k={{{s}}}&i=digital-text"
    },
    {
        "d": "www.kinopoisk.ru",
        "b": "kino",
        "u": "http://www.kinopoisk.ru/index.php?first=no&what=&kp_query={{{s}}}"
    },
    {
        "d": "www.kirkusreviews.com",
        "b": "kirkus",
        "u": "https://www.kirkusreviews.com/search/?q={{{s}}}"
    },
    {
        "d": "kithara.to",
        "b": "kithara",
        "u": "https://kithara.to/index.php?cmd=fi&query={{{s}}}"
    },
    {
        "d": "primo.bibliothek.kit.edu",
        "b": "kit",
        "u": "http://primo.bibliothek.kit.edu/primo_library/libweb/action/search.do?mode=Basic&vid=KIT&vl%28freeText0%29={{{s}}}&vl%28freeText0%29=test&fn=search&tab=kit&srt=date"
    },
    {
        "d": "kitsu.io",
        "b": "kitsu",
        "u": "https://kitsu.io/anime?text={{{s}}}"
    },
    {
        "d": "bibliotek.kk.dk",
        "b": "kkbib",
        "u": "https://bibliotek.kk.dk/search/ting/{{{s}}}"
    },
    {
        "d": "www.kkbox.com",
        "b": "kkbox",
        "u": "https://www.kkbox.com/search.php?search=mix&word={{{s}}}"
    },
    {
        "d": "kara.moe",
        "b": "km",
        "u": "https://kara.moe/base/karas?filter={{{s}}}"
    },
    {
        "d": "www.kobo.com",
        "b": "kobo",
        "u": "https://www.kobo.com/us/en/search?Query={{{s}}}"
    },
    {
        "d": "kollekt.fm",
        "b": "kollekt",
        "u": "https://kollekt.fm/search/?q={{{s}}}&type=all"
    },
    {
        "d": "k-on.wikia.com",
        "b": "k-on",
        "u": "http://k-on.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.allkpop.com",
        "b": "kpop",
        "u": "https://www.allkpop.com/search/articles/{{{s}}}"
    },
    {
        "d": "catalog.krl.org",
        "b": "krl",
        "u": "http://catalog.krl.org/polaris/search/searchresults.aspx?ctx=1.1033.0.0.9&type=Keyword&term={{{s}}}&by=KW&sort=RELEVANCE&limit=TOM%3D*&query=&page=0&searchid=1"
    },
    {
        "d": "www.kickstarter.com",
        "b": "kst",
        "u": "https://www.kickstarter.com/{{{s}}} "
    },
    {
        "d": "www.karaoketexty.cz",
        "b": "ktcz",
        "u": "http://www.karaoketexty.cz/search?q={{{s}}}"
    },
    {
        "d": "kth-primo.hosted.exlibrisgroup.com",
        "b": "kthb",
        "u": "https://kth-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&vid=46KTH_VU1_L&search_scope=default_scope&sortby=rank&tab=default_tab&lang=en_US&mode=simple&fromRedirectFilter=true"
    },
    {
        "d": "www.kvraudio.com",
        "b": "kvr",
        "u": "http://www.kvraudio.com/q.php?search=1&q={{{s}}}"
    },
    {
        "d": "www.last.fm",
        "b": "lastfm",
        "u": "http://www.last.fm/search?q={{{s}}}"
    },
    {
        "d": "www.last.fm",
        "b": "last.fm",
        "u": "http://www.last.fm/search?q={{{s}}}&from=ac"
    },
    {
        "d": "lbp.me",
        "b": "lbp",
        "u": "https://lbp.me/search/v?q={{{s}}}"
    },
    {
        "d": "www.luftfahrtclubbraunschweig.de",
        "b": "lcbs",
        "u": "https://www.luftfahrtclubbraunschweig.de/suchen.php?such={{{s}}}"
    },
    {
        "d": "acordes.lacuerda.net",
        "b": "lcuerdanet",
        "u": "http://acordes.lacuerda.net/busca.php?exp={{{s}}} "
    },
    {
        "d": "www.legimi.pl",
        "b": "legimi",
        "u": "https://www.legimi.pl/ebooki/?szukaj={{{s}}}"
    },
    {
        "d": "www.hdg.de",
        "b": "lemo",
        "u": "https://www.hdg.de/lemo/search/?q={{{s}}}"
    },
    {
        "d": "letras.top",
        "b": "letra",
        "u": "https://letras.top/results/?q={{{s}}}"
    },
    {
        "d": "letras.mus.br",
        "b": "letrasbr",
        "u": "http://letras.mus.br/?q={{{s}}}"
    },
    {
        "d": "search.letssingit.com",
        "b": "letssingit",
        "u": "https://search.letssingit.com/?s={{{s}}}&a=search&l=archive"
    },
    {
        "d": "www.last.fm",
        "b": "lfm",
        "u": "http://www.last.fm/music/{{{s}}}/"
    },
    {
        "d": "www.librarything.com",
        "b": "librarything",
        "u": "http://www.librarything.com/search_works.php?q={{{s}}}"
    },
    {
        "d": "libre.fm",
        "b": "librefm",
        "u": "http://libre.fm/search.php?search_term={{{s}}}"
    },
    {
        "d": "librestock.com",
        "b": "librestock",
        "u": "http://librestock.com/search/?query={{{s}}}"
    },
    {
        "d": "www.libreture.com",
        "b": "libreture",
        "u": "https://www.libreture.com/search/?q={{{s}}}"
    },
    {
        "d": "librivox.org",
        "b": "librivox",
        "u": "http://librivox.org/newcatalog/search.php?title={{{s}}}&author=&status=all&action=Search"
    },
    {
        "d": "licentium.net",
        "b": "licentium",
        "u": "https://licentium.net/w/index.php?search={{{s}}}"
    },
    {
        "d": "lsr.di.unimi.it",
        "b": "lilypond",
        "u": "http://lsr.di.unimi.it/LSR/Search?q={{{s}}}"
    },
    {
        "d": "lirik.web.id",
        "b": "lirik",
        "u": "https://lirik.web.id/results/?q={{{s}}}"
    },
    {
        "d": "www.littre.org",
        "b": "littre",
        "u": "http://www.littre.org/definition/{{{s}}}"
    },
    {
        "d": "www.livechart.me",
        "b": "livec",
        "u": "https://www.livechart.me/search?q={{{s}}}"
    },
    {
        "d": "www.liveleak.com",
        "b": "liveleak",
        "u": "http://www.liveleak.com/browse?q={{{s}}} "
    },
    {
        "d": "www.liveplasma.com",
        "b": "liveplasma",
        "u": "http://www.liveplasma.com/#/artist/{{{s}}} "
    },
    {
        "d": "www.liveleak.com",
        "b": "ll",
        "u": "http://www.liveleak.com/browse?q={{{s}}}"
    },
    {
        "d": "archive.org",
        "b": "lma",
        "u": "http://archive.org/search.php?query={{{s}}}%20AND%20collection%3Aetree"
    },
    {
        "d": "www.livemixtapes.com",
        "b": "lm",
        "u": "http://www.livemixtapes.com/main.php?artist={{{s}}}"
    },
    {
        "d": "lostmediawiki.com",
        "b": "lmw",
        "u": "https://lostmediawiki.com/index.php?search={{{s}}}"
    },
    {
        "d": "instantlogosearch.com",
        "b": "logos",
        "u": "http://instantlogosearch.com/?q={{{s}}}"
    },
    {
        "d": "www.lololyrics.com",
        "b": "lololyrics",
        "u": "http://www.lololyrics.com/search?q={{{s}}} "
    },
    {
        "d": "www.letras.mus.br",
        "b": "ltb",
        "u": "https://www.letras.mus.br/?q={{{s}}} "
    },
    {
        "d": "www.librarything.com",
        "b": "lt",
        "u": "https://www.librarything.com/search.php?searchtype=work&search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lyrical",
        "u": "http://duckduckgo.com/?q=site%3Alyrical-nonsense.com+{{{s}}}"
    },
    {
        "d": "lyricsing.com",
        "b": "lyricsing",
        "u": "https://lyricsing.com/search/{{{s}}}"
    },
    {
        "d": "lyrics.wikia.com",
        "b": "lyrics",
        "u": "http://lyrics.wikia.com/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "lyricstranslate.com",
        "b": "lyricstranslate",
        "u": "http://lyricstranslate.com/en/site-search?query={{{s}}}"
    },
    {
        "d": "lyrics.wikia.com",
        "b": "lyricswiki",
        "u": "http://lyrics.wikia.com/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "lyrics.wikia.com",
        "b": "lyricwiki",
        "u": "http://lyrics.wikia.com/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "lyriki.com",
        "b": "lyriki",
        "u": "http://lyriki.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.lyrster.com",
        "b": "lyrster",
        "u": "http://www.lyrster.com/songs-lyrics/{{{s}}}.html"
    },
    {
        "d": "music.163.com",
        "b": "m163",
        "u": "http://music.163.com/#/search/m/?s={{{s}}}"
    },
    {
        "d": "www.mp3skulls.icu",
        "b": "m3s",
        "u": "https://www.mp3skulls.icu/mp3/{{{s}}}.html"
    },
    {
        "d": "www.metal-archives.com",
        "b": "maalbum",
        "u": "http://www.metal-archives.com/search?searchString={{{s}}}&type=album_title"
    },
    {
        "d": "www.metal-archives.com",
        "b": "maband",
        "u": "http://www.metal-archives.com/search?searchString={{{s}}}&type=band_name"
    },
    {
        "d": "www.metal-archives.com",
        "b": "mab",
        "u": "http://www.metal-archives.com/search?type=band_name&searchString={{{s}}}"
    },
    {
        "d": "www.majorsbooks.com",
        "b": "majorsbooks",
        "u": "http://www.majorsbooks.com/search/?searchQuery={{{s}}}"
    },
    {
        "d": "makezine.com",
        "b": "makezine",
        "u": "http://makezine.com/?s={{{s}}}"
    },
    {
        "d": "myanimelist.net",
        "b": "manga",
        "u": "http://myanimelist.net/manga.php?q={{{s}}}"
    },
    {
        "d": "www.metal-archives.com",
        "b": "march",
        "u": "http://www.metal-archives.com/search?searchString={{{s}}}&type=band_name"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbannotation",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=annotation"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbarea",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=area"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbartist",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=artist"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbcdstub",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=cdstub"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbdoc",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=doc"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbeditor",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=editor"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbe",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=event&method=indexed"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbevent",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=event"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbinstrument",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=instrument"
    },
    {
        "d": "musicbrainz.org",
        "b": "mblabel",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=label"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbl",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=label&method=indexed"
    },
    {
        "d": "musicbrainz.org",
        "b": "mb",
        "u": "http://musicbrainz.org/search/textsearch.html?type=artist&query={{{s}}}&handlearguments=1"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbplace",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=place"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbp",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=place&method=indexed"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbrc",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=recording"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbrec",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=recording&method=indexed"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbrecording",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=recording"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbreleasegroup",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=release_group"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbrelease",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=release"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbrg",
        "u": "http://musicbrainz.org/search?query={{{s}}}&type=release_group&method=indexed"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbr",
        "u": "http://musicbrainz.org/search?type=release&query={{{s}}}&handlearguments=1"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbseries",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=series"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbtag",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=tag"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbw",
        "u": "http://musicbrainz.org/search?query={{{s}}}&type=work&method=indexed"
    },
    {
        "d": "musicbrainz.org",
        "b": "mbwork",
        "u": "https://musicbrainz.org/search?query={{{s}}}&type=work"
    },
    {
        "d": "www.monstercat.com",
        "b": "mcat",
        "u": "https://www.monstercat.com/search?term={{{s}}}"
    },
    {
        "d": "monstercat.wikia.com",
        "b": "mcatwiki",
        "u": "http://monstercat.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "media.ccc.de",
        "b": "mccc",
        "u": "https://media.ccc.de/search/?q={{{s}}}"
    },
    {
        "d": "mixing.dj",
        "b": "mdj",
        "u": "http://mixing.dj/?s={{{s}}}"
    },
    {
        "d": "media.ccc.de",
        "b": "mediaccc",
        "u": "https://media.ccc.de/search/?q= {{{s}}}"
    },
    {
        "d": "megalyrics.ru",
        "b": "megalyr",
        "u": "http://megalyrics.ru/search?utf8=%E2%9C%93&search={{{s}}}"
    },
    {
        "d": "www.metacafe.com",
        "b": "metacafe",
        "u": "http://www.metacafe.com/videos_about/{{{s}}}/"
    },
    {
        "d": "www.metal-archives.com",
        "b": "metalarch",
        "u": "http://www.metal-archives.com/search?searchString={{{s}}}&type=band_name"
    },
    {
        "d": "www.metal-archives.com",
        "b": "metal",
        "u": "http://www.metal-archives.com/search?searchString={{{s}}}&type=band_name"
    },
    {
        "d": "www.metal-archives.com",
        "b": "metallum",
        "u": "https://www.metal-archives.com/search?searchString={{{s}}}&type=band_name"
    },
    {
        "d": "www.metalstorm.net",
        "b": "metalstorm",
        "u": "http://www.metalstorm.net/home/search.php?search_where=band&search_what={{{s}}}&x=0&y=0"
    },
    {
        "d": "morguefile.com",
        "b": "mf",
        "u": "https://morguefile.com/search/morguefile/1/{{{s}}}/pop"
    },
    {
        "d": "freemidi.org",
        "b": "midi",
        "u": "https://freemidi.org/search?q={{{s}}}"
    },
    {
        "d": "www.mijnserie.nl",
        "b": "mijnserie",
        "u": "https://www.mijnserie.nl/zoeken/?search={{{s}}}"
    },
    {
        "d": "www.myinstants.com",
        "b": "mi",
        "u": "http://www.myinstants.com/search/?name={{{s}}}"
    },
    {
        "d": "mistborn.wikia.com",
        "b": "mistborn",
        "u": "http://mistborn.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.cogimix.com",
        "b": "mix",
        "u": "https://www.cogimix.com/?q={{{s}}}"
    },
    {
        "d": "www.mixesdb.com",
        "b": "mixesdb",
        "u": "http://www.mixesdb.com/db/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "search.mlp.cz",
        "b": "mkp",
        "u": "https://search.mlp.cz/cz/?query={{{s}}}&kde=all#/c_s_ol=query-eq:{{{s}}}"
    },
    {
        "d": "www.mldb.org",
        "b": "mldb",
        "u": "http://www.mldb.org/search?mq={{{s}}}"
    },
    {
        "d": "www.moviemeter.nl",
        "b": "mmnl",
        "u": "https://www.moviemeter.nl/site/search?q={{{s}}}"
    },
    {
        "d": "musicmoz.org",
        "b": "mmoz",
        "u": "https://musicmoz.org/search/search.cgi?search={{{s}}}"
    },
    {
        "d": "mnacritique.mergersindia.com",
        "b": "mna",
        "u": "https://mnacritique.mergersindia.com/?s="
    },
    {
        "d": "modarchive.org",
        "b": "mod",
        "u": "http://modarchive.org/index.php?request=search&query={{{s}}}&submit=Find&search_type=filename_or_songtitle"
    },
    {
        "d": "zh.moegirl.org",
        "b": "moegirl",
        "u": "https://zh.moegirl.org/Special:Search?search={{{s}}}"
    },
    {
        "d": "moly.hu",
        "b": "moly",
        "u": "http://moly.hu/kereses?q={{{s}}}"
    },
    {
        "d": "www.mondadoristore.it",
        "b": "mondadoristore",
        "u": "http://www.mondadoristore.it/search/?tpr=10&g={{{s}}}&swe=N&search-input=active"
    },
    {
        "d": "www.musik-sammler.de",
        "b": "msammler",
        "u": "https://www.musik-sammler.de/search/{{{s}}}/"
    },
    {
        "d": "duckduckgo.com",
        "b": "mscore",
        "u": "https://duckduckgo.com/?q=site%3Amusescore.org+{{{s}}}&ia=web"
    },
    {
        "d": "mt-content-search-engine.000webhostapp.com",
        "b": "mtcontent",
        "u": "https://mt-content-search-engine.000webhostapp.com/?search={{{s}}}&do_search="
    },
    {
        "d": "musescore.com",
        "b": "musescore",
        "u": "http://musescore.com/sheetmusic?text={{{s}}}"
    },
    {
        "d": "musicbrainz.org",
        "b": "musicbrainz",
        "u": "http://musicbrainz.org/search/textsearch.html?type=artist&query={{{s}}}&handlearguments=1"
    },
    {
        "d": "www.music-map.com",
        "b": "musicmap",
        "u": "http://www.music-map.com/{{{s}}}"
    },
    {
        "d": "www.musicme.com",
        "b": "musicme",
        "u": "http://www.musicme.com/page.php?q={{{s}}}"
    },
    {
        "d": "musicmoz.org",
        "b": "musicmoz",
        "u": "http://musicmoz.org/search/search.cgi?search={{{s}}}"
    },
    {
        "d": "eu.musikazblai.com",
        "b": "musikazblai",
        "u": "http://eu.musikazblai.com/foro/search.php?q={{{s}}}"
    },
    {
        "d": "www.google.de",
        "b": "musiker-board",
        "u": "https://www.google.de/search?q={{{s}}}+site%3Awww.musiker-board.de&oq=Schaffer+site%3Awww.musiker-board.de"
    },
    {
        "d": "www.musipedia.org",
        "b": "musipedia",
        "u": "http://www.musipedia.org/result.html?tx_mpsearch_pi1[pc]={{{s}}}&tx_mpsearch_pi1[submit_button]=Search"
    },
    {
        "d": "www.musixmatch.com",
        "b": "musixmatchde",
        "u": "https://www.musixmatch.com/de/search/{{{s}}}"
    },
    {
        "d": "musopen.org",
        "b": "musopen",
        "u": "http://musopen.org/search?q={{{s}}}"
    },
    {
        "d": "muzofon.com",
        "b": "muzofon",
        "u": "http://muzofon.com/search/{{{s}}}"
    },
    {
        "d": "www.mvdbase.com",
        "b": "mvdb",
        "u": "http://www.mvdbase.com/index.php?term={{{s}}}&field=vid&page=results"
    },
    {
        "d": "www.myvideo.de",
        "b": "mv",
        "u": "http://www.myvideo.de/Videos_A-Z?searchWord={{{s}}}"
    },
    {
        "d": "meta.wikimedia.org",
        "b": "mwm",
        "u": "https://meta.wikimedia.org/w/index.php?&title=Special%3ASearch&go=Go&search={{{s}}}"
    },
    {
        "d": "www.musixmatch.com",
        "b": "mxm",
        "u": "https://www.musixmatch.com/search/{{{s}}}"
    },
    {
        "d": "www.mysongbook.com",
        "b": "mysongbook",
        "u": "http://www.mysongbook.com/search?utf8=%E2%9C%93&search%5Btype_item%5D=4&search%5Bname%5D={{{s}}}"
    },
    {
        "d": "music.youtube.com",
        "b": "myt",
        "u": "https://music.youtube.com/search?q={{{s}}}"
    },
    {
        "d": "www.myvidster.com",
        "b": "myvidster",
        "u": "https://www.myvidster.com/search/?q={{{s}}}"
    },
    {
        "d": "gbpicx.de",
        "b": "nacht",
        "u": "http://gbpicx.de//?s={{{s}}}"
    },
    {
        "d": "www.naturespic.com",
        "b": "naturespic",
        "u": "http://www.naturespic.com/NewZealand/result_search.asp?search={{{s}}}"
    },
    {
        "d": "www.nautiljon.com",
        "b": "nautiljon",
        "u": "http://www.nautiljon.com/search.php?cx=partner-pub-0881008410530095%3Ad1y8wrnakj0&cof=FORID%3A10&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "www.nb.no",
        "b": "nb",
        "u": "http://www.nb.no/nbsok/search?page=0&menuOpen=false&instant=true&action=search&currentHit=-1&searchString={{{s}}}"
    },
    {
        "d": "www.nicovideo.jp",
        "b": "ncvi",
        "u": "http://www.nicovideo.jp/search/{{{s}}}?track=nicouni_search_keyword"
    },
    {
        "d": "ndr.de",
        "b": "ndrde",
        "u": "https://ndr.de/suche10.html?query={{{s}}}"
    },
    {
        "d": "music.163.com",
        "b": "nem",
        "u": "http://music.163.com/#/search/m/?s={{{s}}}"
    },
    {
        "d": "www.ne.se",
        "b": "nese",
        "u": "http://www.ne.se/sok?q={{{s}}}"
    },
    {
        "d": "catalog.nexpresslibrary.org",
        "b": "nexpress",
        "u": "https://catalog.nexpresslibrary.org/cgi-bin/koha/opac-search.pl?q={{{s}}} "
    },
    {
        "d": "www.nicovideo.jp",
        "b": "nico",
        "u": "http://www.nicovideo.jp/search/{{{s}}}"
    },
    {
        "d": "www.nina.gov.pl",
        "b": "nina",
        "u": "http://www.nina.gov.pl/searchresult?query={{{s}}}"
    },
    {
        "d": "ninjawords.com",
        "b": "ninja",
        "u": "http://ninjawords.com/{{{s}}}"
    },
    {
        "d": "www.ninwiki.com",
        "b": "nin",
        "u": "http://www.ninwiki.com/index.php?title=Special:Search&redirs=0&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "images.nasa.gov",
        "b": "nivl",
        "u": "https://images.nasa.gov/search-results?searchInput={{{s}}}"
    },
    {
        "d": "seiga.nicovideo.jp",
        "b": "nns",
        "u": "https://seiga.nicovideo.jp/search/{{{s}}}"
    },
    {
        "d": "noslivres.net",
        "b": "noslivres",
        "u": "http://noslivres.net/?r={{{s}}}"
    },
    {
        "d": "www.noteflight.com",
        "b": "noteflight",
        "u": "http://www.noteflight.com/public_scores#/search/{{{s}}}"
    },
    {
        "d": "thenounproject.com",
        "b": "noun",
        "u": "https://thenounproject.com/search/?q={{{s}}}"
    },
    {
        "d": "www.novelupdates.com",
        "b": "novelupdates",
        "u": "http://www.novelupdates.com/?s={{{s}}}&post_type=seriesplans"
    },
    {
        "d": "thenounproject.com",
        "b": "np",
        "u": "http://thenounproject.com/search/?q={{{s}}}"
    },
    {
        "d": "tv.nrk.no",
        "b": "nrktv",
        "u": "http://tv.nrk.no/sok?q={{{s}}}"
    },
    {
        "d": "www.openclipart.org",
        "b": "ocal",
        "u": "http://www.openclipart.org/search/?query={{{s}}}"
    },
    {
        "d": "www.openclipart.org",
        "b": "oca",
        "u": "http://www.openclipart.org/search/?query={{{s}}}"
    },
    {
        "d": "occuprint.org",
        "b": "occuprint",
        "u": "http://occuprint.org/?action=search&q={{{s}}} "
    },
    {
        "d": "ocremix.org",
        "b": "ocremix",
        "u": "http://ocremix.org/quicksearch/remix/?qs_query={{{s}}}"
    },
    {
        "d": "opengameart.org",
        "b": "oga",
        "u": "http://opengameart.org/art-search?keys={{{s}}}"
    },
    {
        "d": "openlibrary.org",
        "b": "olib",
        "u": "http://openlibrary.org/search?q={{{s}}}"
    },
    {
        "d": "openlibrary.org",
        "b": "olibtext",
        "u": "https://openlibrary.org/search/inside?q={{{s}}}"
    },
    {
        "d": "www.ondarock.it",
        "b": "ondarock",
        "u": "http://www.ondarock.it/websearch.php?domains=www.ondarock.it&q={{{s}}}&sitesearch=www.ondarock.it&client=pub-4895368002735382&forid=1&ie=ISO-8859-1&oe=ISO-8859-1&cof=GALT%3A%23117dd2%3BGL%3A1%3BDIV%3A%23FFFFFF%3BVLC%3A7292ab%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0569b7%3BLC%3A0569b7%3BT%3A191919%3BGFNT%3A73baf2%3BGIMP%3A73baf2%3BFORID%3A11&hl=it"
    },
    {
        "d": "onecard.network",
        "b": "onecard",
        "u": "https://onecard.network/client/en_AU/sapubliclibraries/search/results?qu={{{s}}}"
    },
    {
        "d": "onedrive.live.com",
        "b": "onedrive",
        "u": "https://onedrive.live.com/#qt=search&q={{{s}}}"
    },
    {
        "d": "openbox.org",
        "b": "openbox",
        "u": "http://openbox.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "openclipart.org",
        "b": "openclipart",
        "u": "http://openclipart.org/search/?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "openculture",
        "u": "https://duckduckgo.com/?q=site%3Aopenculture.com+{{{s}}}"
    },
    {
        "d": "openlibra.com",
        "b": "openlib",
        "u": "https://openlibra.com/en/collection/search/term/{{{s}}}/"
    },
    {
        "d": "openlibrary.org",
        "b": "openlibrary",
        "u": "http://openlibrary.org/search?q={{{s}}}"
    },
    {
        "d": "www.overdrive.com",
        "b": "ovd",
        "u": "https://www.overdrive.com/search?q={{{s}}}"
    },
    {
        "d": "www.overdrive.com",
        "b": "overdrive",
        "u": "https://www.overdrive.com/search?q={{{s}}}"
    },
    {
        "d": "pch.com",
        "b": "pch",
        "u": "http://pch.com/?={{{s}}}"
    },
    {
        "d": "pective.com",
        "b": "pective",
        "u": "http://pective.com/search?q={{{s}}}"
    },
    {
        "d": "peggo.co",
        "b": "peggo",
        "u": "http://peggo.co/search/{{{s}}}"
    },
    {
        "d": "pengicau.com",
        "b": "pengicau",
        "u": "https://pengicau.com/w/index.php?search={{{s}}}&title=Special%3ASearch&fulltext=1"
    },
    {
        "d": "www.periscope.tv",
        "b": "peri",
        "u": "https://www.periscope.tv/search?q={{{s}}}"
    },
    {
        "d": "www.perrypedia.proc.org",
        "b": "perrypedia",
        "u": "http://www.perrypedia.proc.org/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.peteyvid.com",
        "b": "peteyvid",
        "u": "https://www.peteyvid.com/index.php?q={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "pewdiepie",
        "u": "https://www.youtube.com/user/PewDiePie/search?query={{{s}}} "
    },
    {
        "d": "www.pexels.com",
        "b": "pexels",
        "u": "http://www.pexels.com/search/{{{s}}}/"
    },
    {
        "d": "www.gutenberg.org",
        "b": "pgfr",
        "u": "https://www.gutenberg.org/ebooks/search/?query=l.fr+{{{s}}}"
    },
    {
        "d": "www.gutenberg.org",
        "b": "pg",
        "u": "https://www.gutenberg.org/ebooks/search/?query={{{s}}}"
    },
    {
        "d": "phish.net",
        "b": "phish",
        "u": "http://phish.net/song/?s={{{s}}}"
    },
    {
        "d": "photobucket.com",
        "b": "photobucket",
        "u": "http://photobucket.com/images/{{{s}}}/"
    },
    {
        "d": "phi.sh",
        "b": "phset",
        "u": "http://phi.sh/{{{s}}}"
    },
    {
        "d": "www.picsearch.com",
        "b": "pic",
        "u": "http://www.picsearch.com/index.cgi?q={{{s}}}"
    },
    {
        "d": "www.pictame.com",
        "b": "pictame",
        "u": "https://www.pictame.com/search?query={{{s}}}"
    },
    {
        "d": "pixabay.com",
        "b": "pixabay",
        "u": "http://pixabay.com/en/photos/?q={{{s}}}"
    },
    {
        "d": "www.pixiv.net",
        "b": "pixiv",
        "u": "http://www.pixiv.net/search.php?word={{{s}}}"
    },
    {
        "d": "www.plattentests.de",
        "b": "plattentests",
        "u": "http://www.plattentests.de/suche.php?parameter=all&suche={{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "playmusic",
        "u": "https://play.google.com/music/listen#/sr/{{{s}}}"
    },
    {
        "d": "www.playpilot.com",
        "b": "plp",
        "u": "https://www.playpilot.com/se/en/search/?q={{{s}}}"
    },
    {
        "d": "search.plyrics.com",
        "b": "plyrics",
        "u": "http://search.plyrics.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.listennotes.com",
        "b": "podcast",
        "u": "https://www.listennotes.com/search/?q={{{s}}}&sort_by_date=0"
    },
    {
        "d": "www.poets.org",
        "b": "poets",
        "u": "https://www.poets.org/search/node/{{{s}}}"
    },
    {
        "d": "www.pond5.com",
        "b": "pond5",
        "u": "https://www.pond5.com/stock-video-footage/1/{{{s}}}.html"
    },
    {
        "d": "www.pinterest.com",
        "b": "p",
        "u": "https://www.pinterest.com/search/pins/?q={{{s}}}"
    },
    {
        "d": "plymouthpubliclibrary.bibliocommons.com",
        "b": "ppl",
        "u": "https://plymouthpubliclibrary.bibliocommons.com/search?utf8=%E2%9C%93&t=smart&search_category=keyword&q={{{s}}}"
    },
    {
        "d": "archive.org",
        "b": "prel",
        "u": "https://archive.org/details/prelinger?and%5B%5D={{{s}}}"
    },
    {
        "d": "prezi.com",
        "b": "prezi",
        "u": "http://prezi.com/explore/search/?search={{{s}}}"
    },
    {
        "d": "www.priberam.pt",
        "b": "priberam",
        "u": "https://www.priberam.pt/dlpo/{{{s}}}"
    },
    {
        "d": "www.progarchives.com",
        "b": "progrock",
        "u": "http://www.progarchives.com/google-search-results.asp?cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}&cx=partner-pub-0447992028883143%3Aj1syec-2iv1&sa=submit&siteurl=www.progarchives.com%2F&ref=&ss=515j83611j5"
    },
    {
        "d": "peer.tube",
        "b": "ptube",
        "u": "https://peer.tube/search?search={{{s}}}"
    },
    {
        "d": "punctumbooks.com",
        "b": "punctumbooks",
        "u": "https://punctumbooks.com/?s={{{s}}}"
    },
    {
        "d": "www.primevideo.com",
        "b": "pv",
        "u": "https://www.primevideo.com/region/eu/search/ref=dv_web_nav_search?phrase={{{s}}}&ie=UTF8"
    },
    {
        "d": "pxhere.com",
        "b": "pxhere",
        "u": "https://pxhere.com/en/photos?q={{{s}}}"
    },
    {
        "d": "pixabay.com",
        "b": "px",
        "u": "http://pixabay.com/en/photos/?q={{{s}}}"
    },
    {
        "d": "pixabay.com",
        "b": "pxvg",
        "u": "https://pixabay.com/en/photos/?image_type=vector&cat=&min_width=&min_height=&q={{{s}}}&order=latest"
    },
    {
        "d": "pixabay.com",
        "b": "pxv",
        "u": "https://pixabay.com/en/photos/?q={{{s}}}&image_type=vector&cat=&min_width=&min_height="
    },
    {
        "d": "www.qim.com",
        "b": "qimalbum",
        "u": "http://www.qim.com/albums/albums.asp?search={{{s}}}"
    },
    {
        "d": "www.qim.com",
        "b": "qima",
        "u": "http://www.qim.com/albums/albums.asp?search={{{s}}}"
    },
    {
        "d": "www.qim.com",
        "b": "qimartiste",
        "u": "http://www.qim.com/artistes/artiste.asp?search={{{s}}}"
    },
    {
        "d": "www.qim.com",
        "b": "qim",
        "u": "http://www.qim.com/artistes/artiste.asp?search={{{s}}}"
    },
    {
        "d": "www.qobuz.com",
        "b": "qobuz",
        "u": "http://www.qobuz.com/recherche?q={{{s}}}"
    },
    {
        "d": "www.qim.com",
        "b": "quebecinfomusique",
        "u": "http://www.qim.com/artistes/artiste.asp?search={{{s}}}"
    },
    {
        "d": "www.queenslibrary.org",
        "b": "queenslibrary",
        "u": "http://www.queenslibrary.org/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qwm",
        "u": "https://www.qwant.com/music/search?q={{{s}}}"
    },
    {
        "d": "www.qwant.com",
        "b": "qwv",
        "u": "https://www.qwant.com/?q={{{s}}}&t=videos"
    },
    {
        "d": "www.radiojavan.com",
        "b": "radiojavan",
        "u": "https://www.radiojavan.com/search?query={{{s}}}"
    },
    {
        "d": "radiopaedia.org",
        "b": "rad",
        "u": "https://radiopaedia.org/search?utf8=✓&q={{{s}}}&scope=all"
    },
    {
        "d": "www.raiplay.it",
        "b": "rai",
        "u": "https://www.raiplay.it/ricerca?q={{{s}}}"
    },
    {
        "d": "ralvid.ml",
        "b": "ralvid",
        "u": "http://ralvid.ml/search.php?q={{{s}}}"
    },
    {
        "d": "rapgenius.com",
        "b": "rapgenius",
        "u": "http://rapgenius.com/search?q={{{s}}}"
    },
    {
        "d": "rateyourmusic.com",
        "b": "rateyourmusic",
        "u": "http://rateyourmusic.com/search?searchterm={{{s}}}&searchtype=a"
    },
    {
        "d": "www.reciva.com",
        "b": "reciva",
        "u": "https://www.reciva.com/stations/search?q={{{s}}}"
    },
    {
        "d": "reelgood.com",
        "b": "reelgood",
        "u": "https://reelgood.com/search?q={{{s}}}"
    },
    {
        "d": "ricerca.repubblica.it",
        "b": "repubblicavideo",
        "u": "http://ricerca.repubblica.it/ricerca/repubblica-video?query={{{s}}}&view=repubblica-video"
    },
    {
        "d": "www.reddit.com",
        "b": "reu",
        "u": "https://www.reddit.com/user/{{{s}}}"
    },
    {
        "d": "www.reverbnation.com",
        "b": "reverbnation",
        "u": "https://www.reverbnation.com/main/search?q={{{s}}}"
    },
    {
        "d": "images.google.com",
        "b": "rgi",
        "u": "https://images.google.com/searchbyimage?image_url={{{s}}}"
    },
    {
        "d": "rapgenius.com",
        "b": "rg",
        "u": "http://rapgenius.com/search?q={{{s}}}"
    },
    {
        "d": "www.rhymer.com",
        "b": "rhymer",
        "u": "http://www.rhymer.com/RhymingDictionary/{{{s}}}.html"
    },
    {
        "d": "www.rightnowmedia.org",
        "b": "rightnow",
        "u": "https://www.rightnowmedia.org/Search?q={{{s}}}"
    },
    {
        "d": "downloadringtones.mobi",
        "b": "ringtones",
        "u": "https://downloadringtones.mobi/?s={{{s}}}"
    },
    {
        "d": "www.radiojavan.com",
        "b": "rj",
        "u": "https://www.radiojavan.com/search?query={{{s}}}"
    },
    {
        "d": "robertchristgau.com",
        "b": "robertchristgau",
        "u": "https://robertchristgau.com/get_artist.php?name={{{s}}}"
    },
    {
        "d": "www.rocketbeans.tv",
        "b": "rocketbeans",
        "u": "https://www.rocketbeans.tv/?s={{{s}}}"
    },
    {
        "d": "www.rockit.it",
        "b": "rockit",
        "u": "https://www.rockit.it/web/cerca.php?k={{{s}}}"
    },
    {
        "d": "www.rockol.it",
        "b": "rockol",
        "u": "http://www.rockol.it/search.php?s={{{s}}}"
    },
    {
        "d": "owner.roku.com",
        "b": "roku",
        "u": "https://owner.roku.com/Add/{{{s}}}"
    },
    {
        "d": "www.rollingstone.it",
        "b": "rollingstoneit",
        "u": "http://www.rollingstone.it/?s={{{s}}}"
    },
    {
        "d": "www.rottentomatoes.com",
        "b": "rottentomatoes",
        "u": "http://www.rottentomatoes.com/search/?search={{{s}}}"
    },
    {
        "d": "royalroadl.com",
        "b": "royalroadl",
        "u": "https://royalroadl.com/fictions/search?keyword={{{s}}}"
    },
    {
        "d": "rs.4chan.org",
        "b": "rs4",
        "u": "http://rs.4chan.org/?s={{{s}}}&from=ALL"
    },
    {
        "d": "risibank.fr",
        "b": "rsibank",
        "u": "https://risibank.fr/#{{{s}}}"
    },
    {
        "d": "www.rottentomatoes.com",
        "b": "rt",
        "u": "https://www.rottentomatoes.com/search/?search={{{s}}}"
    },
    {
        "d": "rumble.com",
        "b": "rumble",
        "u": "https://rumble.com/all/q/{{{s}}}/?type=videos"
    },
    {
        "d": "rutube.ru",
        "b": "rutube",
        "u": "http://rutube.ru/search.html?page=index&search={{{s}}}&search_type=track"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "ruwk",
        "u": "https://ru.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.real.video",
        "b": "rv",
        "u": "https://www.real.video/search?query={{{s}}}"
    },
    {
        "d": "ryfma.com",
        "b": "ryfma",
        "u": "https://ryfma.com/search/{{{s}}}"
    },
    {
        "d": "rateyourmusic.com",
        "b": "ryg",
        "u": "https://rateyourmusic.com/genre/{{{s}}}"
    },
    {
        "d": "rateyourmusic.com",
        "b": "rymgenre",
        "u": "https://rateyourmusic.com/search?searchtype=g&searchterm={{{s}}}"
    },
    {
        "d": "rateyourmusic.com",
        "b": "rymrelease",
        "u": "https://rateyourmusic.com/search?searchterm={{{s}}}&type=l"
    },
    {
        "d": "rateyourmusic.com",
        "b": "rymr",
        "u": "https://rateyourmusic.com/search?searchtype=l&searchterm={{{s}}}"
    },
    {
        "d": "www.rhymezone.com",
        "b": "rz",
        "u": "http://www.rhymezone.com/r/rhyme.cgi?Word={{{s}}}&typeofrhyme=perfect&org1=syl&org2=l&org3=y"
    },
    {
        "d": "www.safaribooksonline.com",
        "b": "safari",
        "u": "https://www.safaribooksonline.com/search/?query={{{s}}}"
    },
    {
        "d": "safebooru.org",
        "b": "safebooru",
        "u": "http://safebooru.org/index.php?page=post&s=list&tags={{{s}}}"
    },
    {
        "d": "sakugabooru.com",
        "b": "sakuga",
        "u": "https://sakugabooru.com/post?tags={{{s}}}"
    },
    {
        "d": "www.saltystock.com",
        "b": "saltystock",
        "u": "http://www.saltystock.com/search.pp?keyword={{{s}}}"
    },
    {
        "d": "www.whosampled.com",
        "b": "sampled",
        "u": "http://www.whosampled.com/search/artists/?q={{{s}}}"
    },
    {
        "d": "saucenao.com",
        "b": "saucenao",
        "u": "http://saucenao.com/search.php?db=999&url={{{s}}}"
    },
    {
        "d": "www.savido.cz",
        "b": "savido",
        "u": "http://www.savido.cz/download.php?url={{{s}}}"
    },
    {
        "d": "www.saxo.com",
        "b": "saxo",
        "u": "https://www.saxo.com/dk/products/search?query={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "sbi",
        "u": "https://www.google.com/searchbyimage?image_url={{{s}}}"
    },
    {
        "d": "www.sbs.com.au",
        "b": "sbs",
        "u": "https://www.sbs.com.au/ondemand/search/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "scaruffi",
        "u": "https://duckduckgo.com/?q=site%3Ascaruffi.com+{{{s}}}"
    },
    {
        "d": "syncfile.co",
        "b": "scf",
        "u": "http://syncfile.co/{{{s}}}"
    },
    {
        "d": "www.worldswithoutend.com",
        "b": "scifi",
        "u": "http://www.worldswithoutend.com/searchwwe.asp?st={{{s}}} "
    },
    {
        "d": "www.scope.dk",
        "b": "scope.dk",
        "u": "http://www.scope.dk/sogning?sog={{{s}}} "
    },
    {
        "d": "www.scribd.com",
        "b": "scribd",
        "u": "http://www.scribd.com/search?query={{{s}}}"
    },
    {
        "d": "www.senscritique.com",
        "b": "scritique",
        "u": "http://www.senscritique.com/recherche/?gs_query={{{s}}}&submit2="
    },
    {
        "d": "soundcloud.com",
        "b": "sc",
        "u": "https://soundcloud.com/search?q={{{s}}}"
    },
    {
        "d": "encore.sdcl.org",
        "b": "sdcl",
        "u": "http://encore.sdcl.org/iii/encore/search/C__S{{{s}}}__Orightresult__U?lang=eng&suite=def"
    },
    {
        "d": "www.senscritique.com",
        "b": "senscritique",
        "u": "http://www.senscritique.com/recherche?query={{{s}}}"
    },
    {
        "d": "sentireascoltare.com",
        "b": "senta",
        "u": "http://sentireascoltare.com/?s={{{s}}}"
    },
    {
        "d": "thesession.org",
        "b": "session",
        "u": "https://thesession.org/search?where=&q={{{s}}}"
    },
    {
        "d": "www.sheetmusicdirect.com",
        "b": "sheetmusicdirect",
        "u": "http://www.sheetmusicdirect.com/Search.aspx?query={{{s}}}"
    },
    {
        "d": "shinden.pl",
        "b": "shinden",
        "u": "http://shinden.pl/search?q={{{s}}}"
    },
    {
        "d": "shironet.mako.co.il",
        "b": "shironet",
        "u": "http://shironet.mako.co.il/search?q={{{s}}}"
    },
    {
        "d": "directory.shoutcast.com",
        "b": "shoutcast",
        "u": "https://directory.shoutcast.com/Search?query={{{s}}}"
    },
    {
        "d": "secondhandsongs.com",
        "b": "shs",
        "u": "https://secondhandsongs.com/search?search_text={{{s}}}"
    },
    {
        "d": "www.scribblehub.com",
        "b": "shub",
        "u": "https://www.scribblehub.com/?s={{{s}}}"
    },
    {
        "d": "www.shutterstock.com",
        "b": "shutterstock",
        "u": "http://www.shutterstock.com/cat.mhtml?searchterm={{{s}}}"
    },
    {
        "d": "www.shazam.com",
        "b": "shz",
        "u": "http://www.shazam.com/de/search/{{{s}}}"
    },
    {
        "d": "sinonims.iec.cat",
        "b": "siec",
        "u": "https://sinonims.iec.cat/sinonims_cerca_sin.asp?pclau2={{{s}}}&button=Cerca+arreu"
    },
    {
        "d": "startpage.com",
        "b": "simages",
        "u": "https://startpage.com/do/metasearch.pl?cat=pics&query={{{s}}}"
    },
    {
        "d": "singcat.net",
        "b": "singcat",
        "u": "https://singcat.net/results/?q={{{s}}}"
    },
    {
        "d": "stjos.sjcpl.lib.in.us",
        "b": "sjcpl",
        "u": "http://stjos.sjcpl.lib.in.us/search/?searchtype=X&SORT=D&searcharg={{{s}}} "
    },
    {
        "d": "sketchfab.com",
        "b": "sketchfab",
        "u": "https://sketchfab.com/models?q={{{s}}}&sort_by=-likeCount"
    },
    {
        "d": "www.sketchport.com",
        "b": "sketchport",
        "u": "https://www.sketchport.com/search?q={{{s}}}"
    },
    {
        "d": "www.skyrock.com",
        "b": "skyrock",
        "u": "http://www.skyrock.com/search/people/?q={{{s}}}"
    },
    {
        "d": "www.slate.com",
        "b": "slate",
        "u": "http://www.slate.com/search.html#search={{{s}}}"
    },
    {
        "d": "catalog.slcpl.org",
        "b": "slcpl",
        "u": "http://catalog.slcpl.org/search/searchresults.aspx?term={{{s}}}"
    },
    {
        "d": "www.setlist.fm",
        "b": "sl",
        "u": "http://www.setlist.fm/search?query={{{s}}}"
    },
    {
        "d": "www.songlyrics.com",
        "b": "slyrics",
        "u": "http://www.songlyrics.com/index.php?section=search&searchW={{{s}}}&submit=Search"
    },
    {
        "d": "www.smashwords.com",
        "b": "smashwords",
        "u": "http://www.smashwords.com/books/search?query={{{s}}}"
    },
    {
        "d": "smdb.kb.se",
        "b": "smdb",
        "u": "http://smdb.kb.se/catalog/search?q={{{s}}}"
    },
    {
        "d": "songmeanings.com",
        "b": "smn",
        "u": "http://songmeanings.com/query/?query={{{s}}}"
    },
    {
        "d": "songmeanings.com",
        "b": "sms",
        "u": "http://songmeanings.com/query/?query={{{s}}}"
    },
    {
        "d": "snappygoat.com",
        "b": "snappygoat",
        "u": "https://snappygoat.com/s/?q={{{s}}}"
    },
    {
        "d": "soundcloud.com",
        "b": "sndcld",
        "u": "https://soundcloud.com/search?q={{{s}}}"
    },
    {
        "d": "www.snotr.com",
        "b": "snotr",
        "u": "https://www.snotr.com/search/?search={{{s}}}"
    },
    {
        "d": "www.socwall.com",
        "b": "socwall",
        "u": "http://www.socwall.com/wallpapers/search:{{{s}}}"
    },
    {
        "d": "www.sofurry.com",
        "b": "sofurry",
        "u": "https://www.sofurry.com/browse/search?search={{{s}}}"
    },
    {
        "d": "www.someecards.com",
        "b": "some",
        "u": "http://www.someecards.com/search?q={{{s}}} "
    },
    {
        "d": "www.spirit-of-metal.com",
        "b": "som",
        "u": "http://www.spirit-of-metal.com/find.php?nom={{{s}}}"
    },
    {
        "d": "son2teuf.org",
        "b": "son2teuf",
        "u": "http://son2teuf.org/search/category_sort/Page-1?searchphrase=any&searchword={{{s}}}&view=search"
    },
    {
        "d": "www.songmeanings.net",
        "b": "songmeaning",
        "u": "http://www.songmeanings.net/query/?q={{{s}}}&type=artists&page=1&start=0&mm=1&pp=20&b=Go"
    },
    {
        "d": "songmeanings.com",
        "b": "songmeanings",
        "u": "http://songmeanings.com/query/?query={{{s}}}"
    },
    {
        "d": "www.songtexte.com",
        "b": "songtext",
        "u": "http://www.songtexte.com/search?q={{{s}}}&c=all"
    },
    {
        "d": "soruso.com",
        "b": "soruso",
        "u": "https://soruso.com/?s={{{s}}}"
    },
    {
        "d": "soundcloud.com",
        "b": "soundcloud",
        "u": "http://soundcloud.com/search?q={{{s}}}"
    },
    {
        "d": "www.soundonsound.com",
        "b": "soundonsound",
        "u": "https://www.soundonsound.com/search/all/{{{s}}} "
    },
    {
        "d": "soundcloud.com",
        "b": "sound",
        "u": "https://soundcloud.com/search?q={{{s}}}"
    },
    {
        "d": "www.soundtrackinfo.com",
        "b": "soundtrackinfo",
        "u": "http://www.soundtrackinfo.com/search/{{{s}}}/"
    },
    {
        "d": "site.pictures",
        "b": "spics",
        "u": "https://site.pictures/search/images/?q={{{s}}}"
    },
    {
        "d": "unsplash.com",
        "b": "splash",
        "u": "https://unsplash.com/search/photos/{{{s}}}"
    },
    {
        "d": "splice.com",
        "b": "splice",
        "u": "https://splice.com/sounds/search?q={{{s}}}"
    },
    {
        "d": "seattle.bibliocommons.com",
        "b": "spl",
        "u": "https://seattle.bibliocommons.com/search?utf8=%E2%9C%93&t=smart&search_category=keyword&commit=Search&q={{{s}}}"
    },
    {
        "d": "open.spotify.com",
        "b": "spotifysearch",
        "u": "https://open.spotify.com/search/results/{{{s}}}"
    },
    {
        "d": "open.spotify.com",
        "b": "spotify",
        "u": "https://open.spotify.com/search/{{{s}}}"
    },
    {
        "d": "www.spriters-resource.com",
        "b": "spriters",
        "u": "https://www.spriters-resource.com/search/?q={{{s}}}}"
    },
    {
        "d": "open.spotify.com",
        "b": "spt",
        "u": "https://open.spotify.com/search/results/{{{s}}}"
    },
    {
        "d": "video.samaritanspurse.org",
        "b": "sptv",
        "u": "http://video.samaritanspurse.org/?s={{{s}}}"
    },
    {
        "d": "www.sputnikmusic.com",
        "b": "sputnikmusic",
        "u": "https://www.sputnikmusic.com/search_results.php?search_in=Bands&search_text={{{s}}}"
    },
    {
        "d": "www.sqa.org.uk",
        "b": "sqa",
        "u": "https://www.sqa.org.uk/pastpapers/findpastpaper.htm?subject={{{s}}}"
    },
    {
        "d": "www.ssptv.com",
        "b": "ssptv",
        "u": "http://www.ssptv.com/?s={{{s}}}"
    },
    {
        "d": "www.shutterstock.com",
        "b": "ssv",
        "u": "https://www.shutterstock.com/search?searchterm={{{s}}}&image_type=vector"
    },
    {
        "d": "standardebooks.org",
        "b": "stdebook",
        "u": "https://standardebooks.org/ebooks/?query={{{s}}}"
    },
    {
        "d": "steemit.com",
        "b": "steemit",
        "u": "https://steemit.com/static/search.html?q={{{s}}}"
    },
    {
        "d": "www.stickpng.com",
        "b": "stickpng",
        "u": "http://www.stickpng.com/search?q={{{s}}}"
    },
    {
        "d": "www.istockphoto.com",
        "b": "stockphotos",
        "u": "http://www.istockphoto.com/file_search.php?action=file&text={{{s}}}"
    },
    {
        "d": "www.stocksy.com",
        "b": "stocksy",
        "u": "https://www.stocksy.com/search/{{{s}}}"
    },
    {
        "d": "www.dissolve.com",
        "b": "stockvideo",
        "u": "http://www.dissolve.com/products?keywords={{{s}}}&media_type=video"
    },
    {
        "d": "www.stream.cz",
        "b": "stream",
        "u": "https://www.stream.cz/vyhledavani?dotaz={{{s}}}"
    },
    {
        "d": "www.shutterstock.com",
        "b": "ststock",
        "u": "https://www.shutterstock.com/search/{{{s}}}"
    },
    {
        "d": "scratch.mit.edu",
        "b": "s_user",
        "u": "https://scratch.mit.edu/users/{{{s}}}"
    },
    {
        "d": "suche.suub.uni-bremen.de",
        "b": "suub",
        "u": "https://suche.suub.uni-bremen.de/cgi-bin/CiXbase/brewis/CiXbase_search?act=search&INDEXINFO=awCN&LAN=DE&ORDER=&IHITS=15&FHITS=15&PRECISION=220&RELEVANCE=40&NO_RBITS=&n_dtyp=1LZ&n_rtyp=ceEdX&index=L&XML_STYLE=%2Fstyles%2Fcns-DE.xml%3F20130610&dtyp=&mtyp=&section=&term={{{s}}}&CID=&x=0&y=0"
    },
    {
        "d": "www.svgrepo.com",
        "b": "svgrepo",
        "u": "https://www.svgrepo.com/vectors/{{{s}}}/"
    },
    {
        "d": "www.svtplay.se",
        "b": "svtp",
        "u": "http://www.svtplay.se/sok?q={{{s}}}"
    },
    {
        "d": "www.svtplay.se",
        "b": "svt",
        "u": "http://www.svtplay.se/sok?q={{{s}}}"
    },
    {
        "d": "www.tab4u.com",
        "b": "tab4u",
        "u": "http://www.tab4u.com/resultsSimple?tab=songs&type=song&q={{{s}}}"
    },
    {
        "d": "www.911tabs.com",
        "b": "tab",
        "u": "http://www.911tabs.com/search.php?search={{{s}}}"
    },
    {
        "d": "tabcrawler.com",
        "b": "tabcrawler",
        "u": "http://tabcrawler.com/search/{{{s}}}"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "tabsb",
        "u": "http://www.ultimate-guitar.com/search.php?search_type=band&value={{{s}}}"
    },
    {
        "d": "www.tabscout.com",
        "b": "tabscout",
        "u": "http://www.tabscout.com/?action=search&query={{{s}}}"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "tabs",
        "u": "http://www.ultimate-guitar.com/search.php?search_type=title&value={{{s}}}"
    },
    {
        "d": "theanarchistlibrary.org",
        "b": "tal",
        "u": "http://theanarchistlibrary.org/search?query={{{s}}}"
    },
    {
        "d": "www.teachingchannel.org",
        "b": "tch",
        "u": "https://www.teachingchannel.org/search?q={{{s}}}"
    },
    {
        "d": "www.ted.com",
        "b": "ted",
        "u": "https://www.ted.com/search?q={{{s}}}"
    },
    {
        "d": "www.tekstowo.pl",
        "b": "tekstowo",
        "u": "http://www.tekstowo.pl/szukaj,wykonawca,{{{s}}} ,tytul,{{{s}}}.html"
    },
    {
        "d": "tenor.com",
        "b": "tenor",
        "u": "https://tenor.com/search/{{{s}}}"
    },
    {
        "d": "testi.xyz",
        "b": "testi",
        "u": "https://testi.xyz/results/?q={{{s}}}"
    },
    {
        "d": "thailyrics.top",
        "b": "thail",
        "u": "https://thailyrics.top/results/?q={{{s}}}"
    },
    {
        "d": "www.thalia.de",
        "b": "thalia",
        "u": "https://www.thalia.de/suche?sq={{{s}}}"
    },
    {
        "d": "thwiki.cc",
        "b": "thb",
        "u": "https://thwiki.cc/%E7%89%B9%E6%AE%8A:%E6%90%9C%E7%B4%A2?search={{{s}}}&go=%E5%89%8D%E5%BE%80&searchToken=d3hpaqueyzu0cl5im2izrofz8"
    },
    {
        "d": "thefella.com",
        "b": "thefella",
        "u": "https://thefella.com/search?q={{{s}}}"
    },
    {
        "d": "thenounproject.com",
        "b": "thenounproject",
        "u": "https://thenounproject.com/search/?q={{{s}}}"
    },
    {
        "d": "www.hooktheory.com",
        "b": "theorytab",
        "u": "https://www.hooktheory.com/theorytab/results?path={{{s}}}"
    },
    {
        "d": "thesession.org",
        "b": "thesession",
        "u": "https://thesession.org/tunes/search?type=&mode=&q={{{s}}}"
    },
    {
        "d": "www.thetvdb.com",
        "b": "thetvdb",
        "u": "https://www.thetvdb.com/search?q={{{s}}}&l=en"
    },
    {
        "d": "theyarddr.com",
        "b": "theyarddr",
        "u": "http://theyarddr.com/?s={{{s}}}"
    },
    {
        "d": "listen.tidal.com",
        "b": "tidal",
        "u": "https://listen.tidal.com/search/{{{s}}}"
    },
    {
        "d": "www.tigtagcarolina.com",
        "b": "tigtag",
        "u": "http://www.tigtagcarolina.com/search/?q={{{s}}}"
    },
    {
        "d": "www.tineye.com",
        "b": "tineye",
        "u": "http://www.tineye.com/search?url={{{s}}}"
    },
    {
        "d": "tinypic.com",
        "b": "tinypic",
        "u": "http://tinypic.com/search.php?tag={{{s}}}"
    },
    {
        "d": "tinyurl.com",
        "b": "tinyurl",
        "u": "http://tinyurl.com/create.php?url={{{s}}}"
    },
    {
        "d": "www.tipeee.com",
        "b": "tip",
        "u": "https://www.tipeee.com/creators?search={{{s}}}"
    },
    {
        "d": "tower.jp",
        "b": "tjp",
        "u": "https://tower.jp/search/item/{{{s}}}"
    },
    {
        "d": "tmbw.net",
        "b": "tmbw",
        "u": "http://tmbw.net/wiki/Special:Search?search={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.themoviedb.org",
        "b": "tmdb",
        "u": "https://www.themoviedb.org/search?query={{{s}}}"
    },
    {
        "d": "www.tinymixtapes.com",
        "b": "tmt",
        "u": "http://www.tinymixtapes.com/?search={{{s}}}"
    },
    {
        "d": "thenounproject.com",
        "b": "tnp",
        "u": "https://thenounproject.com/search/?q={{{s}}}"
    },
    {
        "d": "www.toicon.com",
        "b": "toicon",
        "u": "http://www.toicon.com/icons?query={{{s}}}"
    },
    {
        "d": "toogl.es",
        "b": "toogles",
        "u": "http://toogl.es/#/search/{{{s}}}"
    },
    {
        "d": "stock.tookapic.com",
        "b": "tookapic",
        "u": "https://stock.tookapic.com/search?q={{{s}}}"
    },
    {
        "d": "www.toxif.com",
        "b": "toxif",
        "u": "https://www.toxif.com/tags/{{{s}}} "
    },
    {
        "d": "www.trackitdown.net",
        "b": "trackitdown",
        "u": "http://www.trackitdown.net/search/keyword?q={{{s}}}"
    },
    {
        "d": "trendingimages.in",
        "b": "trending",
        "u": "https://trendingimages.in/search/images/?q={{{s}}}"
    },
    {
        "d": "tvtropes.org",
        "b": "trope",
        "u": "https://tvtropes.org/pmwiki/pmwiki.php/Main/{{{s}}}"
    },
    {
        "d": "www.thesinglesjukebox.com",
        "b": "tsj",
        "u": "http://www.thesinglesjukebox.com/?s={{{s}}}"
    },
    {
        "d": "fm.tuba.pl",
        "b": "tubafm",
        "u": "http://fm.tuba.pl/artysta/{{{s}}}"
    },
    {
        "d": "bit.tube",
        "b": "tube",
        "u": "https://bit.tube/results?term={{{s}}}"
    },
    {
        "d": "so.tudou.com",
        "b": "tudou",
        "u": "http://so.tudou.com/nisearch.do?kw={{{s}}}"
    },
    {
        "d": "www.tumblr.com",
        "b": "tumblr",
        "u": "https://www.tumblr.com/search/{{{s}}}"
    },
    {
        "d": "tunebat.com",
        "b": "tunebat",
        "u": "https://tunebat.com/Search?q={{{s}}}"
    },
    {
        "d": "www.tunefind.com",
        "b": "tunef",
        "u": "https://www.tunefind.com/search/site?q={{{s}}}"
    },
    {
        "d": "tunein.com",
        "b": "tunein",
        "u": "http://tunein.com/search/?query={{{s}}}"
    },
    {
        "d": "www.tv4play.se",
        "b": "tv4play",
        "u": "https://www.tv4play.se/s%C3%B6k/{{{s}}}"
    },
    {
        "d": "www.tv5monde.com",
        "b": "tv5",
        "u": "http://www.tv5monde.com/?q={{{s}}}"
    },
    {
        "d": "bendodson.com",
        "b": "tvart",
        "u": "https://bendodson.com/projects/itunes-artwork-finder/index.html?entity=tvSeason&country=us&query={{{s}}}"
    },
    {
        "d": "vampirediaries.wikia.com",
        "b": "tvd",
        "u": "http://vampirediaries.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "twit.tv",
        "b": "twittv",
        "u": "https://twit.tv/search/{{{s}}}"
    },
    {
        "d": "www.twitchmetrics.net",
        "b": "twmet",
        "u": "https://www.twitchmetrics.net/search?q={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ty",
        "u": "https://www.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "search.freefind.com",
        "b": "ubu",
        "u": "http://search.freefind.com/find.html?si=61902956&pid=r&n=0&_charset_=UTF-8&bcd=%C3%B7&query={{{s}}}"
    },
    {
        "d": "www.ufret.jp",
        "b": "ufret",
        "u": "http://www.ufret.jp/search.php?key={{{s}}}"
    },
    {
        "d": "www.ukulele-tabs.com",
        "b": "uketabs",
        "u": "https://www.ukulele-tabs.com/search-uke-chords.html?find={{{s}}}"
    },
    {
        "d": "ukutabs.com",
        "b": "uku",
        "u": "https://ukutabs.com/?s={{{s}}}"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "ultimateguitar",
        "u": "http://www.ultimate-guitar.com/search.php?search_type=title&value={{{s}}}"
    },
    {
        "d": "um3bd.free.fr",
        "b": "um3bd",
        "u": "http://um3bd.free.fr/?s={{{s}}}"
    },
    {
        "d": "unsplash.com",
        "b": "unsplash",
        "u": "https://unsplash.com/search?utf8=✓&keyword={{{s}}}"
    },
    {
        "d": "unsplash.com",
        "b": "unspls",
        "u": "https://unsplash.com/search/photos/{{{s}}}"
    },
    {
        "d": "unsplash.com",
        "b": "unspl",
        "u": "https://unsplash.com/search?utf8=✓&keyword={{{s}}}"
    },
    {
        "d": "unsplash.com",
        "b": "uns",
        "u": "https://unsplash.com/search/photos/{{{s}}}"
    },
    {
        "d": "utaitedb.net",
        "b": "utaite",
        "u": "http://utaitedb.net/Search?filter={{{s}}}"
    },
    {
        "d": "www.npo.nl",
        "b": "uzg",
        "u": "https://www.npo.nl/zoeken?term={{{s}}}"
    },
    {
        "d": "procarmanuals.com",
        "b": "vagssp",
        "u": "https://procarmanuals.com/?s={{{s}}}"
    },
    {
        "d": "www.vbox7.com",
        "b": "vbox7",
        "u": "https://www.vbox7.com/search/?q={{{s}}}"
    },
    {
        "d": "vdisk.weibo.com",
        "b": "vdisk",
        "u": "http://vdisk.weibo.com/search/?type=public&keyword={{{s}}}"
    },
    {
        "d": "www.vecteezy.com",
        "b": "vecteezy",
        "u": "http://www.vecteezy.com/free-vector/{{{s}}}"
    },
    {
        "d": "vector.me",
        "b": "vector",
        "u": "http://vector.me/search/{{{s}}} "
    },
    {
        "d": "www.youtube.com",
        "b": "vevo",
        "u": "https://www.youtube.com/user/VEVO/search?query={{{s}}}"
    },
    {
        "d": "visualhunt.com",
        "b": "vhunt",
        "u": "https://visualhunt.com/search/instant/?q={{{s}}}"
    },
    {
        "d": "viaplay.com",
        "b": "viaplay",
        "u": "https://viaplay.com/search?query={{{s}}}"
    },
    {
        "d": "www.viasona.cat",
        "b": "viasona",
        "u": "http://www.viasona.cat/cerca?que={{{s}}}&cerca=&sourceid=duckduckgo"
    },
    {
        "d": "www.vidangel.com",
        "b": "vidangel",
        "u": "http://www.vidangel.com/?s={{{s}}}"
    },
    {
        "d": "videosift.com",
        "b": "videosift",
        "u": "http://videosift.com/search?q={{{s}}}"
    },
    {
        "d": "www.vidlii.com",
        "b": "vidlii",
        "u": "https://www.vidlii.com/results?q={{{s}}}"
    },
    {
        "d": "vimeo.com",
        "b": "vimeo",
        "u": "https://vimeo.com/search?q={{{s}}}"
    },
    {
        "d": "www.yasiv.com",
        "b": "visual-youtube",
        "u": "http://www.yasiv.com/youtube#?q={{{s}}}"
    },
    {
        "d": "vjphotos.net",
        "b": "vj",
        "u": "http://vjphotos.net/?s={{{s}}}"
    },
    {
        "d": "vk.com",
        "b": "vkv",
        "u": "https://vk.com/video?q={{{s}}}"
    },
    {
        "d": "vocadb.net",
        "b": "vocadb",
        "u": "http://vocadb.net/Search?filter={{{s}}}"
    },
    {
        "d": "www.librairielesvolcans.com",
        "b": "volcans",
        "u": "http://www.librairielesvolcans.com/listeliv.php?RECHERCHE=simple&MOTS={{{s}}}&x=0&y=0"
    },
    {
        "d": "vortaro.net",
        "b": "votraro",
        "u": "http://vortaro.net/?w={{{s}}}"
    },
    {
        "d": "www.vrt.be",
        "b": "vrtnu",
        "u": "https://www.vrt.be/vrtnu/zoeken/#query={{{s}}}"
    },
    {
        "d": "code.visualstudio.com",
        "b": "vsdocs",
        "u": "https://code.visualstudio.com/Search?q={{{s}}}"
    },
    {
        "d": "www.vintagesynth.com",
        "b": "vse",
        "u": "http://www.vintagesynth.com/google_results.php?cx=partner-pub-9231860735104128%3A7369484958&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa=Search&siteurl=www.vintagesynth.com%2F&ref=&ss=572j143576j4"
    },
    {
        "d": "www.vwe.nl",
        "b": "vwe",
        "u": "http://www.vwe.nl/zoeken_resultaten.aspx?q={{{s}}}"
    },
    {
        "d": "wallhaven.cc",
        "b": "walla",
        "u": "https://wallhaven.cc/search?q={{{s}}}"
    },
    {
        "d": "wallhaven.cc",
        "b": "wallbase",
        "u": "https://wallhaven.cc/search?q={{{s}}}"
    },
    {
        "d": "wallhaven.cc",
        "b": "wallhaven",
        "u": "https://wallhaven.cc/search?q={{{s}}}"
    },
    {
        "d": "wallhaven.cc",
        "b": "wallheaven",
        "u": "https://wallhaven.cc/search?q={{{s}}}"
    },
    {
        "d": "wallhaven.cc",
        "b": "wallh",
        "u": "https://wallhaven.cc/search?q={{{s}}}"
    },
    {
        "d": "watchkin.com",
        "b": "watchkin",
        "u": "https://watchkin.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "watch",
        "u": "https://www.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "www.wattpad.com",
        "b": "wattpad",
        "u": "http://www.wattpad.com/stories/search/{{{s}}}"
    },
    {
        "d": "web.archive.org",
        "b": "wbm",
        "u": "https://web.archive.org/web/*/{{{s}}}"
    },
    {
        "d": "catalog.wccls.org",
        "b": "wccls",
        "u": "http://catalog.wccls.org/polaris/search/searchresults.aspx?term={{{s}}}"
    },
    {
        "d": "www.webcams.travel",
        "b": "webcams",
        "u": "http://www.webcams.travel/search/{{{s}}}"
    },
    {
        "d": "web.stagram.com",
        "b": "webstagram",
        "u": "http://web.stagram.com/search/{{{s}}}"
    },
    {
        "d": "www.wikifeet.com",
        "b": "wfeet",
        "u": "http://www.wikifeet.com/search/?query={{{s}}}"
    },
    {
        "d": "whosampled.com",
        "b": "whosampled",
        "u": "http://whosampled.com/search/?q={{{s}}}"
    },
    {
        "d": "wikiart.org",
        "b": "wikiart",
        "u": "http://wikiart.org/en/search/{{{s}}}/1"
    },
    {
        "d": "www.wikifeet.com",
        "b": "wikifeet",
        "u": "https://www.wikifeet.com/search/{{{s}}}"
    },
    {
        "d": "nl.wikipedia.org",
        "b": "wikinl",
        "u": "https://nl.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wikipaintings.org",
        "b": "wikipainting",
        "u": "http://www.wikipaintings.org/en/search/{{{s}}}/1"
    },
    {
        "d": "en.wikiquote.org",
        "b": "wikiquote",
        "u": "https://en.wikiquote.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wimp.com",
        "b": "wimp",
        "u": "http://www.wimp.com/search/{{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "wl95",
        "u": "https://www.youtube.com/user/WiiLord95/search?query={{{s}}}"
    },
    {
        "d": "commons.wikimedia.org",
        "b": "wmcc",
        "u": "https://commons.wikimedia.org/w/index.php?search={{{s}}}&ns14=1"
    },
    {
        "d": "commons.wikimedia.org",
        "b": "wmc",
        "u": "https://commons.wikimedia.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "wooordhunt.ru",
        "b": "woo",
        "u": "http://wooordhunt.ru/word/{{{s}}}"
    },
    {
        "d": "worship-songs-resources.worshiptogether.com",
        "b": "worshiptogether",
        "u": "http://worship-songs-resources.worshiptogether.com/search?w={{{s}}}"
    },
    {
        "d": "www.wiregrind.com",
        "b": "wrd",
        "u": "https://www.wiregrind.com/rhyming-dictionary/?word={{{s}}}"
    },
    {
        "d": "en.wikisource.org",
        "b": "ws",
        "u": "https://en.wikisource.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.worldswithoutend.com",
        "b": "wwend",
        "u": "http://www.worldswithoutend.com/searchwwe.asp?st={{{s}}}"
    },
    {
        "d": "www.whatpeopleplay.com",
        "b": "wwp",
        "u": "https://www.whatpeopleplay.com/search/all/{{{s}}}"
    },
    {
        "d": "www.89porno.com",
        "b": "www.89porno.com",
        "u": "http://www.89porno.com/?s={{{s}}}"
    },
    {
        "d": "wynk.in",
        "b": "wynk",
        "u": "https://wynk.in/music/detailsearch/{{{s}}}?q={{{s}}}"
    },
    {
        "d": "www.weasyl.com",
        "b": "wzl",
        "u": "https://www.weasyl.com/search?q={{{s}}}"
    },
    {
        "d": "wiki.warpzone.ms",
        "b": "wzw",
        "u": "http://wiki.warpzone.ms/start?do=search&id={{{s}}}"
    },
    {
        "d": "www.robertchristgau.com",
        "b": "xgau",
        "u": "http://www.robertchristgau.com/get_artist.php?name={{{s}}}"
    },
    {
        "d": "yamgo.com",
        "b": "yamgo",
        "u": "http://yamgo.com/search?q={{{s}}}"
    },
    {
        "d": "music.yandex.ru",
        "b": "yamusic",
        "u": "https://music.yandex.ru/search?text={{{s}}}"
    },
    {
        "d": "music.yandex.ru",
        "b": "yamu",
        "u": "https://music.yandex.ru/search?text={{{s}}}"
    },
    {
        "d": "www.youtube.be",
        "b": "yatu",
        "u": "https://www.youtube.be/?q={{{s}}}: "
    },
    {
        "d": "yayimages.com",
        "b": "yayimg",
        "u": "https://yayimages.com/search?phrase={{{s}}}"
    },
    {
        "d": "images.search.yahoo.com",
        "b": "yimages",
        "u": "http://images.search.yahoo.com/search/images;_ylt=A0WTefMw66dLrEoAACeLuLkF?p={{{s}}}&ei=utf-8&iscqry=&fr=sfp"
    },
    {
        "d": "images.search.yahoo.com",
        "b": "yim",
        "u": "http://images.search.yahoo.com/search/images?p={{{s}}}&fr=alltheweb&ei=utf-8&n=30&x=wrt&y=Search"
    },
    {
        "d": "www.yobi3d.com",
        "b": "yobi3d",
        "u": "https://www.yobi3d.com/#!/search?q={{{s}}}"
    },
    {
        "d": "youglish.com",
        "b": "youglish",
        "u": "http://youglish.com/search/{{{s}}}/us"
    },
    {
        "d": "youloop.org",
        "b": "youloop",
        "u": "http://youloop.org/search.php?q={{{s}}}"
    },
    {
        "d": "www.youpak.com",
        "b": "youpak",
        "u": "https://www.youpak.com/search?q={{{s}}}"
    },
    {
        "d": "youglish.com",
        "b": "yourglish",
        "u": "https://youglish.com/search/{{{s}}}?"
    },
    {
        "d": "youtubeonrepeat.com",
        "b": "youtubeonrepeat",
        "u": "http://youtubeonrepeat.com/results/?search_query={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "youtube",
        "u": "https://www.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "yout.com",
        "b": "yout",
        "u": "https://yout.com/search?terms={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "yt24",
        "u": "https://www.youtube.com/results?q={{{s}}}&sp=EgIIAg%253D%253D"
    },
    {
        "d": "www.youtube.com",
        "b": "ytb",
        "u": "https://www.youtube.com/results?search_query= {{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytcc",
        "u": "https://www.youtube.com/results?search_query={{{s}}}&sp=EgIwAQ%253D%253D"
    },
    {
        "d": "www.youtube.ch",
        "b": "ytch",
        "u": "https://www.youtube.ch/results?search_query={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytcv",
        "u": "https://www.youtube.com/user/{{{s}}}/videos"
    },
    {
        "d": "www.youtube.com",
        "b": "ytdate",
        "u": "https://www.youtube.com/results?search_query={{{s}}}&search_sort=video_date_uploaded"
    },
    {
        "d": "www.youtube.com",
        "b": "ytday",
        "u": "https://www.youtube.com/results?search_query={{{s}}}&sp=EgIIAg%253D%253D"
    },
    {
        "d": "www.youtube.com",
        "b": "ytde",
        "u": "https://www.youtube.com/results?search_query={{{s}}}&gl=DE&hl=de"
    },
    {
        "d": "www.youtube.com",
        "b": "ytd",
        "u": "https://www.youtube.com/watch?v={{{s}}}"
    },
    {
        "d": "www.youtube.fr",
        "b": "ytfr",
        "u": "http://www.youtube.fr/results?search_query={{{s}}}"
    },
    {
        "d": "gaming.youtube.com",
        "b": "ytg",
        "u": "https://gaming.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "in.youtube.com",
        "b": "yti",
        "u": "https://in.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytlist",
        "u": "https://www.youtube.com/results?filters=playlist&lclk=playlist&search_query={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytl",
        "u": "https://www.youtube.com/results?search_type=videos&search_query={{{s}}}&search_duration=long&uni=3"
    },
    {
        "d": "music.youtube.com",
        "b": "ytmusic",
        "u": "https://music.youtube.com/search?q={{{s}}}"
    },
    {
        "d": "music.youtube.com",
        "b": "ytmu",
        "u": "https://music.youtube.com/search?q={{{s}}}"
    },
    {
        "d": "music.youtube.com",
        "b": "ytm",
        "u": "https://music.youtube.com/search?q={{{s}}}"
    },
    {
        "d": "youtubeonrepeat.com",
        "b": "ytor",
        "u": "http://youtubeonrepeat.com/results/?search_query={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytp",
        "u": "https://www.youtube.com/results?q={{{s}}}&sp=EgIQAw%253D%253D"
    },
    {
        "d": "www.youtube.com",
        "b": "ytvideo",
        "u": "https://www.youtube.com/watch?v={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "yt",
        "u": "https://www.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "hooktube.com",
        "b": "yu",
        "u": "https://hooktube.com/results?search_query={{{s}}}"
    },
    {
        "d": "video.search.yahoo.com",
        "b": "yv",
        "u": "https://video.search.yahoo.com/search/video?p={{{s}}}"
    },
    {
        "d": "youzeek.com",
        "b": "yz",
        "u": "http://youzeek.com/?lng=RU#xPAGE_V3-Artist_%3Flng%3DRU%26Artist%3D{{{s}}}%26page%3DGeneral"
    },
    {
        "d": "www.zapiks.fr",
        "b": "zapiks",
        "u": "http://www.zapiks.fr/search.php?action=search&search={{{s}}} "
    },
    {
        "d": "zaycev.net",
        "b": "zaycev",
        "u": "https://zaycev.net/search.html?query_search={{{s}}}"
    },
    {
        "d": "www.zdf.de",
        "b": "zdf",
        "u": "https://www.zdf.de/suche?q={{{s}}}"
    },
    {
        "d": "www.zerochan.net",
        "b": "zerochan",
        "u": "http://www.zerochan.net/search?q={{{s}}}"
    },
    {
        "d": "www.zikinf.com",
        "b": "zikinf",
        "u": "https://www.zikinf.com/recherche/?query={{{s}}}"
    },
    {
        "d": "mp3.zing.vn",
        "b": "zmp3",
        "u": "http://mp3.zing.vn/tim-kiem/bai-hat.html?q={{{s}}} "
    },
    {
        "d": "wiki.killuglyradio.com",
        "b": "zwj",
        "u": "http://wiki.killuglyradio.com/index.php?title=Special%3ASearch&profile=default&search={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "υτ",
        "u": "https://www.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "вики",
        "u": "https://ru.wikipedia.org/w/index.php?search={{{s}}}&"
    },
    {
        "d": "docs.cntd.ru",
        "b": "гост",
        "u": "http://docs.cntd.ru/search/intellectual?q={{{s}}}"
    },
    {
        "d": "music.yandex.com",
        "b": "яму",
        "u": "https://music.yandex.com/search?text={{{s}}}"
    }
], bangs);

module.exports = {
    bangs
};
