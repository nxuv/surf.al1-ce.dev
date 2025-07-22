var bangs = bangs || [];

bangs = [].concat([
    {
        "d": "www.bmw2002faq.com",
        "b": "02faq",
        "u": "https://www.bmw2002faq.com/search/?q={{{s}}}"
    },
    {
        "d": "boxofficemojo.com",
        "b": "0bo",
        "u": "http://boxofficemojo.com/search/?q={{{s}}}"
    },
    {
        "d": "www.11freunde.de",
        "b": "11freunde",
        "u": "http://www.11freunde.de/search/gss/{{{s}}}"
    },
    {
        "d": "1cak.com",
        "b": "1c",
        "u": "https://1cak.com/search-0-{{{s}}}"
    },
    {
        "d": "1d4chan.org",
        "b": "1d4chan",
        "u": "https://1d4chan.org/index.php?search={{{s}}}"
    },
    {
        "d": "2b2t.miraheze.org",
        "b": "2b2t",
        "u": "https://2b2t.miraheze.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "find.5ch.net",
        "b": "2channel",
        "u": "http://find.5ch.net/search?q={{{s}}}"
    },
    {
        "d": "2player.com",
        "b": "2pl",
        "u": "http://2player.com/search/?search={{{s}}}"
    },
    {
        "d": "www.3djuegos.com",
        "b": "3dj",
        "u": "https://www.3djuegos.com/?q={{{s}}}&zona=resultados-buscador&ni=1"
    },
    {
        "d": "boards.4chan.org",
        "b": "4_b",
        "u": "http://boards.4chan.org/b/catalog#s={{{s}}}"
    },
    {
        "d": "implyingrigged.info",
        "b": "4cc",
        "u": "http://implyingrigged.info/w/index.php?search={{{s}}}"
    },
    {
        "d": "4chan.org",
        "b": "4ch",
        "u": "https://4chan.org/{{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4cha",
        "u": "https://boards.4chan.org/a/catalog#s={{{s}}}"
    },
    {
        "d": "4chan.org",
        "b": "4chanb",
        "u": "http://4chan.org/b/{{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chfa",
        "u": "https://boards.4chan.org/fa/catalog#s={{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chint",
        "u": "https://boards.4chan.org/int/catalog#s={{{s}}}"
    },
    {
        "d": "archive.nyafuu.org",
        "b": "4chn",
        "u": "https://archive.nyafuu.org/n/search/text/{{{s}}}/"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chrandom",
        "u": "https://boards.4chan.org/b/catalog#s={{{s}}}"
    },
    {
        "d": "4chansearch.com",
        "b": "4chsearch",
        "u": "https://4chansearch.com/?q={{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chv",
        "u": "https://boards.4chan.org/v/catalog#s={{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4cvg",
        "u": "http://boards.4chan.org/vg/catalog#s={{{s}}}"
    },
    {
        "d": "4pda.ru",
        "b": "4pda",
        "u": "http://4pda.ru/forum/index.php?act=search&source=all&forums[]=all&query={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.4players.de",
        "b": "4pl",
        "u": "http://www.4players.de/4players.php/suchergebnis/Allgemein/4players/?s={{{s}}}"
    },
    {
        "d": "www.4players.de",
        "b": "4players",
        "u": "http://www.4players.de/4players.php/suchergebnis/Allgemein/4players/?s={{{s}}}"
    },
    {
        "d": "find.5ch.net",
        "b": "5channel",
        "u": "http://find.5ch.net/search?q={{{s}}}"
    },
    {
        "d": "engl393-dnd5th.wikia.com",
        "b": "5e",
        "u": "http://engl393-dnd5th.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "dnd5e.wikidot.com",
        "b": "5ew",
        "u": "http://dnd5e.wikidot.com/search:site/a/p/q/{{{s}}}"
    },
    {
        "d": "www.gta5-mods.com",
        "b": "5mods",
        "u": "https://www.gta5-mods.com/search/{{{s}}}"
    },
    {
        "d": "www.lightfm.com.au",
        "b": "89.9",
        "u": "https://www.lightfm.com.au/?s={{{s}}}"
    },
    {
        "d": "www.8a.nu",
        "b": "8a",
        "u": "https://www.8a.nu/scorecard/Search.aspx?Mode=SIMPLE&AscentType=0&CragName={{{s}}}"
    },
    {
        "d": "8ch.net",
        "b": "8chb",
        "u": "http://8ch.net/boards.php?title={{{s}}}"
    },
    {
        "d": "8ch.net",
        "b": "8chc",
        "u": "http://8ch.net/{{{s}}}/catalog.html"
    },
    {
        "d": "931women.com",
        "b": "931women",
        "u": "https://931women.com/?s={{{s}}}: "
    },
    {
        "d": "9pp.co",
        "b": "9",
        "u": "http://9pp.co/search?q={{{s}}}"
    },
    {
        "d": "9gag.com",
        "b": "9g",
        "u": "http://9gag.com/search?query={{{s}}}"
    },
    {
        "d": "9gag.com",
        "b": "9gag",
        "u": "https://9gag.com/search?query={{{s}}}"
    },
    {
        "d": "www.allaboutjazz.com",
        "b": "aaj",
        "u": "https://www.allaboutjazz.com/php/article_center.php?in_artist={{{s}}}&in_album=&in_label=&in_author=&in_type=0&orderby=dt_pub"
    },
    {
        "d": "www.aardwolf.com",
        "b": "aard",
        "u": "http://www.aardwolf.com/wiki/index.php/Site/Search?q={{{s}}}"
    },
    {
        "d": "aceattorney.wikia.com",
        "b": "aaw",
        "u": "http://aceattorney.wikia.com/wiki/{{{s}}}"
    },
    {
        "d": "www.abcgames.cz",
        "b": "abcgames",
        "u": "http://www.abcgames.cz/?p=sekcia_hladaj&key={{{s}}}"
    },
    {
        "d": "abcnotation.com",
        "b": "abcnotation",
        "u": "http://abcnotation.com/searchTunes?q={{{s}}}&f=c&o=a&s=0"
    },
    {
        "d": "www.abcya.com",
        "b": "abcya",
        "u": "https://www.abcya.com/search/?term={{{s}}}&type={{{s}}}"
    },
    {
        "d": "www.abretelibro.com",
        "b": "abretelibro",
        "u": "http://www.abretelibro.com/foro/search.php?keywords={{{s}}}&sf=titleonly"
    },
    {
        "d": "www.allocine.fr",
        "b": "ac",
        "u": "http://www.allocine.fr/recherche/?q={{{s}}}"
    },
    {
        "d": "www.amarchitrakatha.com",
        "b": "ackuc",
        "u": "https://www.amarchitrakatha.com/us/catalogsearch/result/?cat=0&q={{{s}}}"
    },
    {
        "d": "animalcrossing.wikia.com",
        "b": "acw",
        "u": "http://animalcrossing.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "assassinscreed.fandom.com",
        "b": "acwiki",
        "u": "https://assassinscreed.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "apple.stackexchange.com",
        "b": "ad",
        "u": "http://apple.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "arquivodabola.com.br",
        "b": "adb",
        "u": "http://arquivodabola.com.br/busca.html?termo={{{s}}}"
    },
    {
        "d": "www.addictinggames.com",
        "b": "addicting",
        "u": "http://www.addictinggames.com/search/games.jsp?gameKeyword={{{s}}}"
    },
    {
        "d": "www.addictinggames.com",
        "b": "addicting-games",
        "u": "http://www.addictinggames.com/search/games.jsp?gameKeyword={{{s}}}"
    },
    {
        "d": "www.adme.ru",
        "b": "adme",
        "u": "https://www.adme.ru/search/?q={{{s}}}"
    },
    {
        "d": "ancardia.wikia.com",
        "b": "adom",
        "u": "http://ancardia.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "forums.autodesk.com",
        "b": "adsk",
        "u": "http://forums.autodesk.com/t5/forums/searchpage/tab/message?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "adv",
        "u": "https://duckduckgo.com/?q=site%3Aadvrider.com+{{{s}}}"
    },
    {
        "d": "www.arsenal.com",
        "b": "afc",
        "u": "https://www.arsenal.com/search?search={{{s}}}"
    },
    {
        "d": "www.agame.com",
        "b": "agame",
        "u": "http://www.agame.com/search?searchTerm={{{s}}}"
    },
    {
        "d": "www.anaitgames.com",
        "b": "agames",
        "u": "https://www.anaitgames.com/buscador.php?search={{{s}}}"
    },
    {
        "d": "adventuregamers.com",
        "b": "ags",
        "u": "https://adventuregamers.com/games/search?keywords={{{s}}}"
    },
    {
        "d": "arkhamdb.com",
        "b": "ahdb",
        "u": "https://arkhamdb.com/find?q={{{s}}}"
    },
    {
        "d": "ahmetcadirci.com.tr",
        "b": "ahmetcadirci",
        "u": "https://ahmetcadirci.com.tr/search/?q={{{s}}}"
    },
    {
        "d": "www.arkhamhorrorwiki.com",
        "b": "ahw",
        "u": "http://www.arkhamhorrorwiki.com/wiki/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "aikatsu-friends.wikia.com",
        "b": "aifriends",
        "u": "http://aikatsu-friends.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "aikatsu.wikia.com",
        "b": "aikatsu",
        "u": "http://aikatsu.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "aion.wikia.com",
        "b": "aion",
        "u": "http://aion.wikia.com/wiki/index.php?search={{{s}}}&fulltext=0"
    },
    {
        "d": "airforums.com",
        "b": "airforums",
        "u": "http://airforums.com/?={{{s}}}:"
    },
    {
        "d": "aikatsustars.wikia.com",
        "b": "aistars",
        "u": "http://aikatsustars.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.alljapaneseallthetime.com",
        "b": "ajatt",
        "u": "http://www.alljapaneseallthetime.com/blog/?s={{{s}}}"
    },
    {
        "d": "anilist.co",
        "b": "al",
        "u": "https://anilist.co/search/anime?search={{{s}}}"
    },
    {
        "d": "www.allmusic.com",
        "b": "album",
        "u": "http://www.allmusic.com/search/albums/{{{s}}}"
    },
    {
        "d": "www.allmusic.com",
        "b": "albums",
        "u": "http://www.allmusic.com/search/albums/{{{s}}}"
    },
    {
        "d": "www.abretelibro.com",
        "b": "alibro",
        "u": "http://www.abretelibro.com/foro/search.php?keywords={{{s}}}&sf=titleonly"
    },
    {
        "d": "www.abretelibro.com",
        "b": "alibros",
        "u": "http://www.abretelibro.com/foro/search.php?keywords={{{s}}}"
    },
    {
        "d": "allmovie.com",
        "b": "allmovie",
        "u": "http://allmovie.com/search/all/{{{s}}}"
    },
    {
        "d": "www.allmusic.com",
        "b": "allmusic",
        "u": "http://www.allmusic.com/search/all/{{{s}}}"
    },
    {
        "d": "www.allocine.fr",
        "b": "allo",
        "u": "http://www.allocine.fr/recherche/?q={{{s}}}"
    },
    {
        "d": "www.allocine.fr",
        "b": "allocine",
        "u": "http://www.allocine.fr/recherche/?q={{{s}}}"
    },
    {
        "d": "www.allocine.fr",
        "b": "allociné",
        "u": "http://www.allocine.fr/recherche/?q={{{s}}}"
    },
    {
        "d": "alvanista.com",
        "b": "alvanista",
        "u": "http://alvanista.com/search?s={{{s}}}"
    },
    {
        "d": "www.amctv.com",
        "b": "amc",
        "u": "http://www.amctv.com/search#q={{{s}}}"
    },
    {
        "d": "search.ameba.jp",
        "b": "ameblo",
        "u": "http://search.ameba.jp/search.html?q={{{s}}}"
    },
    {
        "d": "music.amazon.com",
        "b": "amusic",
        "u": "https://music.amazon.com/search/{{{s}}}"
    },
    {
        "d": "anilist.co",
        "b": "ani",
        "u": "https://anilist.co/search/anime?sort=SEARCH_MATCH&search={{{s}}}"
    },
    {
        "d": "anime.akihabara.cz",
        "b": "anibara",
        "u": "http://anime.akihabara.cz/vyhledavani/{{{s}}}"
    },
    {
        "d": "anidb.net",
        "b": "anidb",
        "u": "https://anidb.net/perl-bin/animedb.pl?adb.search={{{s}}}&show=animelist&do.search=search"
    },
    {
        "d": "anilist.co",
        "b": "anilist",
        "u": "https://anilist.co/search/anime?sort=SEARCH_MATCH&search={{{s}}}"
    },
    {
        "d": "anilyrics.com",
        "b": "anilyrics",
        "u": "https://anilyrics.com/?s={{{s}}}"
    },
    {
        "d": "animeka.com",
        "b": "animeka",
        "u": "http://animeka.com/search/index.html?req={{{s}}}"
    },
    {
        "d": "www.animenewsnetwork.com",
        "b": "animenewsnetwork",
        "u": "http://www.animenewsnetwork.com/search?cx=016604166282602569737:znd1ysjewre&cof=FORID:11&q={{{s}}}"
    },
    {
        "d": "www.anime-planet.com",
        "b": "anime-planet",
        "u": "http://www.anime-planet.com/anime/all?name={{{s}}}"
    },
    {
        "d": "www.anime-planet.com",
        "b": "animeplanet",
        "u": "http://www.anime-planet.com/anime/all?name={{{s}}}"
    },
    {
        "d": "kitsu.io",
        "b": "animes",
        "u": "https://kitsu.io/anime?text={{{s}}}"
    },
    {
        "d": "animesimple.com",
        "b": "animsi",
        "u": "https://animesimple.com/search?q={{{s}}}"
    },
    {
        "d": "www.animenewsnetwork.com",
        "b": "ann",
        "u": "http://www.animenewsnetwork.com/search?cx=016604166282602569737:znd1ysjewre&cof=FORID:11&q={{{s}}}"
    },
    {
        "d": "www.animenewsnetwork.com",
        "b": "anne",
        "u": "http://www.animenewsnetwork.com/encyclopedia/search/name?only=anime&q={{{s}}}"
    },
    {
        "d": "annex.931women.com",
        "b": "annex.931women",
        "u": "https://annex.931women.com/?s={{{s}}}: "
    },
    {
        "d": "anoik.is",
        "b": "anoikis",
        "u": "http://anoik.is/systems/{{{s}}}"
    },
    {
        "d": "anotchortwo.com",
        "b": "anotchortwo",
        "u": "http://anotchortwo.com/?s={{{s}}}"
    },
    {
        "d": "www.answers.com",
        "b": "answers",
        "u": "http://www.answers.com/{{{s}}}"
    },
    {
        "d": "archiveofourown.org",
        "b": "ao3",
        "u": "https://archiveofourown.org/works/search?utf8=%E2%9C%93&work_search%5Bquery%5D={{{s}}}"
    },
    {
        "d": "archiveofourown.org",
        "b": "ao3tags",
        "u": "https://archiveofourown.org/tags/search?query[name]={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "aoe2r",
        "u": "https://www.reddit.com/r/aoe2/search?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "ageofempires.wikia.com",
        "b": "aoe",
        "u": "http://ageofempires.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.artofmanliness.com",
        "b": "aom",
        "u": "http://www.artofmanliness.com/?s={{{s}}}"
    },
    {
        "d": "db.vanillagaming.org",
        "b": "aowow",
        "u": "http://db.vanillagaming.org/?search={{{s}}}"
    },
    {
        "d": "ArcadePrehacks.com",
        "b": "aph",
        "u": "http://ArcadePrehacks.com/{{{s}}}"
    },
    {
        "d": "www.anime-planet.com",
        "b": "apln",
        "u": "https://www.anime-planet.com/anime/all?name={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "appletrailer",
        "u": "http://duckduckgo.com/?q=site:trailers.apple.com%20{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "appletv",
        "u": "https://duckduckgo.com/?q={{{s}}}%20site%3Atv.apple.com"
    },
    {
        "d": "www.arageek.com",
        "b": "arageek",
        "u": "http://www.arageek.com/?s={{{s}}}"
    },
    {
        "d": "www.arcgames.com",
        "b": "arcgames",
        "u": "http://www.arcgames.com/en/games/all-games/query/{{{s}}}"
    },
    {
        "d": "archived.moe",
        "b": "archivedmoe",
        "u": "https://archived.moe/_/search/text/{{{s}}}"
    },
    {
        "d": "ark.gamepedia.com",
        "b": "arkpedia",
        "u": "http://ark.gamepedia.com/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "ark.gamepedia.com",
        "b": "arkwiki",
        "u": "http://ark.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "armorgames.com",
        "b": "armorgames",
        "u": "http://armorgames.com/search/games?type=games&q={{{s}}}"
    },
    {
        "d": "armswiki.org",
        "b": "arms",
        "u": "https://armswiki.org/wiki/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "ffxiv.gamerescape.com",
        "b": "arr",
        "u": "http://ffxiv.gamerescape.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "arrow.wikia.com",
        "b": "arrow-wikia",
        "u": "http://arrow.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.arte.tv",
        "b": "arte",
        "u": "https://www.arte.tv/fr/search/?q={{{s}}}&page=1"
    },
    {
        "d": "artifact.gamepedia.com",
        "b": "artifact",
        "u": "https://artifact.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.artcyclopedia.com",
        "b": "artist",
        "u": "http://www.artcyclopedia.com/scripts/tsearch.pl?type=1&t={{{s}}}"
    },
    {
        "d": "www.artcyclopedia.com",
        "b": "artwork",
        "u": "http://www.artcyclopedia.com/scripts/tsearch.pl?t={{{s}}}&type=2"
    },
    {
        "d": "asianwiki.com",
        "b": "asianwiki",
        "u": "http://asianwiki.com/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.reddit.com",
        "b": "askreddit",
        "u": "https://www.reddit.com/r/AskReddit/search?q={{{s}}}&restrict_sr=on&sort=relevance&t=all"
    },
    {
        "d": "www.at40.com",
        "b": "at40",
        "u": "http://www.at40.com/?q={{{s}}}"
    },
    {
        "d": "arcade.tokyo",
        "b": "a.t",
        "u": "https://arcade.tokyo/?s={{{s}}}"
    },
    {
        "d": "www.atlasobscura.com",
        "b": "atlaso",
        "u": "https://www.atlasobscura.com/search?q={{{s}}}&kind=keyword"
    },
    {
        "d": "forum.a-tm.co.jp",
        "b": "a-tm",
        "u": "http://forum.a-tm.co.jp/search?q=hello&searchJSON={%22keywords%22%3A%22{{{s}}}%22}"
    },
    {
        "d": "www.atomtickets.com",
        "b": "atom",
        "u": "https://www.atomtickets.com/search?query={{{s}}}"
    },
    {
        "d": "www.atpworldtour.com",
        "b": "atp",
        "u": "http://www.atpworldtour.com/Search/Site.aspx?q={{{s}}}"
    },
    {
        "d": "www.abovetopsecret.com",
        "b": "ats",
        "u": "http://www.abovetopsecret.com/forum/index.php {{{s}}}"
    },
    {
        "d": "www.advancedtautactica.com",
        "b": "att",
        "u": "http://www.advancedtautactica.com/search.php?keywords={{{s}}}"
    },
    {
        "d": "atomix.vg",
        "b": "atx",
        "u": "http://atomix.vg/?s={{{s}}}"
    },
    {
        "d": "ausopen.com",
        "b": "ausopen",
        "u": "https://ausopen.com/search?search={{{s}}}"
    },
    {
        "d": "www.alpenvereinaktiv.com",
        "b": "avaktiv",
        "u": "https://www.alpenvereinaktiv.com/en/search/?q={{{s}}}"
    },
    {
        "d": "avatar.wikia.com",
        "b": "avatar",
        "u": "http://avatar.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.avatarpress.com",
        "b": "avatarpress",
        "u": "http://www.avatarpress.com/?s={{{s}}}"
    },
    {
        "d": "www.avclub.com",
        "b": "av",
        "u": "https://www.avclub.com/search?q={{{s}}}"
    },
    {
        "d": "www.avclub.com",
        "b": "avclub",
        "u": "https://www.avclub.com/search?q={{{s}}}"
    },
    {
        "d": "www.avclub.com",
        "b": "avc",
        "u": "http://www.avclub.com/search/?q={{{s}}}"
    },
    {
        "d": "www.aventrix.com",
        "b": "aventrix",
        "u": "https://www.aventrix.com/?q={{{s}}}"
    },
    {
        "d": "avpodcast.net",
        "b": "avpod",
        "u": "https://avpodcast.net/?s={{{s}}}"
    },
    {
        "d": "awesomenauts.gamepedia.com",
        "b": "awesomenauts",
        "u": "http://awesomenauts.gamepedia.com/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "awoiaf.westeros.org",
        "b": "awoiaf",
        "u": "http://awoiaf.westeros.org/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "ayrne.io",
        "b": "ayrne",
        "u": "https://ayrne.io/?s={{{s}}}"
    },
    {
        "d": "azurlane.koumakan.jp",
        "b": "azlane",
        "u": "https://azurlane.koumakan.jp/w/index.php?search={{{s}}}"
    },
    {
        "d": "search.azlyrics.com",
        "b": "azl",
        "u": "http://search.azlyrics.com/search.php?q={{{s}}}"
    },
    {
        "d": "b3ta.com",
        "b": "b3ta",
        "u": "http://b3ta.com/search/posts?q={{{s}}}"
    },
    {
        "d": "babylon5.wikia.com",
        "b": "b5",
        "u": "http://babylon5.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "beeradvocate.com",
        "b": "ba",
        "u": "http://beeradvocate.com/search?q={{{s}}}&qt=beer"
    },
    {
        "d": "buenosairesconnect.com",
        "b": "bac",
        "u": "http://buenosairesconnect.com/?s={{{s}}}"
    },
    {
        "d": "oracleofbacon.org",
        "b": "bacon",
        "u": "http://oracleofbacon.org/cgi-bin/movielinks?a=Kevin+Bacon&b={{{s}}}"
    },
    {
        "d": "www.mangaupdates.com",
        "b": "bakaupdatesmanga",
        "u": "https://www.mangaupdates.com/search.html?search={{{s}}}"
    },
    {
        "d": "baneks.site",
        "b": "baneks",
        "u": "https://baneks.site/search/{{{s}}}"
    },
    {
        "d": "archive.nyafuu.org",
        "b": "bant",
        "u": "https://archive.nyafuu.org/bant/search/text/{{{s}}}/"
    },
    {
        "d": "www.basketball-reference.com",
        "b": "basketballreference",
        "u": "https://www.basketball-reference.com/search/search.fcgi?hint=&search={{{s}}}"
    },
    {
        "d": "batman.wikia.com",
        "b": "batman",
        "u": "http://batman.wikia.com/wiki/{{{s}}}"
    },
    {
        "d": "bato.to",
        "b": "batoto",
        "u": "http://bato.to/search?name={{{s}}}&name_cond=c"
    },
    {
        "d": "pokemongohub.net",
        "b": "battledex",
        "u": "https://pokemongohub.net/?s={{{s}}}"
    },
    {
        "d": "eu.battle.net",
        "b": "battlenet",
        "u": "http://eu.battle.net/en/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "bay12",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Abay12games.com"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbci",
        "u": "http://www.bbc.co.uk/iplayer/search?q={{{s}}}"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbcsport",
        "u": "http://www.bbc.co.uk/search/sport/{{{s}}}?video=on&audio=on&text=on"
    },
    {
        "d": "www.bbfc.co.uk",
        "b": "bbfc",
        "u": "http://www.bbfc.co.uk/search/releases/{{{s}}}"
    },
    {
        "d": "www.baseball-reference.com",
        "b": "bbref",
        "u": "https://www.baseball-reference.com/search/search.fcgi?hint=&search={{{s}}}"
    },
    {
        "d": "www.bcdb.com",
        "b": "bcdb",
        "u": "http://www.bcdb.com/bcdb/search.cgi?query={{{s}}}&amp;bool=and&amp;substring=1"
    },
    {
        "d": "www.brawlcustommusic.com",
        "b": "bcm",
        "u": "http://www.brawlcustommusic.com/index.php?song={{{s}}}&submit=Search"
    },
    {
        "d": "because.moe",
        "b": "bcmoe",
        "u": "http://because.moe/?q={{{s}}}"
    },
    {
        "d": "boardcrewcial.org",
        "b": "bco",
        "u": "http://boardcrewcial.org/search/thread/{{{s}}}/"
    },
    {
        "d": "boxcritters.wiki",
        "b": "bcw",
        "u": "https://boxcritters.wiki/?search={{{s}}}"
    },
    {
        "d": "www.bedetheque.com",
        "b": "bdg",
        "u": "http://www.bedetheque.com/search/tout?RechTexte={{{s}}}&RechWhere=0 "
    },
    {
        "d": "www.bedetheque.com",
        "b": "bdt",
        "u": "http://www.bedetheque.com/search/tout?RechTexte={{{s}}}&RechWhere=0"
    },
    {
        "d": "www.bedetheque.com",
        "b": "bedetheque",
        "u": "http://www.bedetheque.com/search/tout?RechTexte={{{s}}}&RechWhere=0"
    },
    {
        "d": "beeradvocate.com",
        "b": "beer",
        "u": "http://beeradvocate.com/search?q={{{s}}}&qt=beer"
    },
    {
        "d": "beforeiplay.com",
        "b": "beforeiplay",
        "u": "http://beforeiplay.com/index.php?search={{{s}}}"
    },
    {
        "d": "ben10.wikia.com",
        "b": "ben10",
        "u": "http://ben10.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.betches.com",
        "b": "betches",
        "u": "http://www.betches.com/search/{{{s}}}"
    },
    {
        "d": "www.buzzfeed.com",
        "b": "bf",
        "u": "http://www.buzzfeed.com/search?q={{{s}}}"
    },
    {
        "d": "www.bfi.org.uk",
        "b": "bfi",
        "u": "https://www.bfi.org.uk/search/search-bfi/{{{s}}}"
    },
    {
        "d": "boardgamegeek.com",
        "b": "bgg",
        "u": "https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q={{{s}}}&B1=Go"
    },
    {
        "d": "www.bigfishgames.com",
        "b": "bigfish",
        "u": "http://www.bigfishgames.com/download-games/search.html?search={{{s}}}"
    },
    {
        "d": "www.bitchute.com",
        "b": "bitchute",
        "u": "https://www.bitchute.com/search/?q={{{s}}}&sort=date_created+desc"
    },
    {
        "d": "www.bjjheroes.com",
        "b": "bjj",
        "u": "https://www.bjjheroes.com/?s={{{s}}}"
    },
    {
        "d": "www.basketball-reference.com",
        "b": "bkref",
        "u": "http://www.basketball-reference.com/search/search.fcgi?hint={{{s}}}&search={{{s}}}&pid=&idx="
    },
    {
        "d": "www.blackbookmag.com",
        "b": "blackbook",
        "u": "http://www.blackbookmag.com/search/articles#keywords:{{{s}}}"
    },
    {
        "d": "www.blackbookmag.com",
        "b": "blackbookmag",
        "u": "http://www.blackbookmag.com/search/articles#keywords:{{{s}}}"
    },
    {
        "d": "blogtalkradio.com",
        "b": "blogtalkradio",
        "u": "http://blogtalkradio.com/search/{{{s}}}"
    },
    {
        "d": "bloodcat.com",
        "b": "bloodcat",
        "u": "https://bloodcat.com/osu/?q={{{s}}}&c=b&s=&m=&g=&l="
    },
    {
        "d": "bloons.wikia.com",
        "b": "bloonswiki",
        "u": "http://bloons.wikia.com/search?query={{{s}}}"
    },
    {
        "d": "www.blu-ray.com",
        "b": "bluray",
        "u": "http://www.blu-ray.com/search/?quicksearch=1&quicksearch_country=all&quicksearch_keyword={{{s}}}&section=bluraymovies"
    },
    {
        "d": "bluemoonrising.com",
        "b": "bmr",
        "u": "http://bluemoonrising.com/?s={{{s}}}"
    },
    {
        "d": "in.bookmyshow.com",
        "b": "bms",
        "u": "http://in.bookmyshow.com/search/results/?_s=0.2&search={{{s}}}"
    },
    {
        "d": "bokunoheroacademia.wikia.com",
        "b": "bnha",
        "u": "http://bokunoheroacademia.wikia.com/wiki/Special:Search?go&query={{{s}}}"
    },
    {
        "d": "boardgamegeek.com",
        "b": "boardgame",
        "u": "http://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q={{{s}}}&B1=Go"
    },
    {
        "d": "boardgamegeek.com",
        "b": "boardgamegeek",
        "u": "http://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q={{{s}}}"
    },
    {
        "d": "www.boardgameprices.com",
        "b": "boardgameprices",
        "u": "http://www.boardgameprices.com/compare-prices-for?q={{{s}}}"
    },
    {
        "d": "www.boards.ie",
        "b": "boards",
        "u": "http://www.boards.ie/search/submit/?query={{{s}}}"
    },
    {
        "d": "bestonlinecasinoca.com",
        "b": "bocca",
        "u": "https://bestonlinecasinoca.com/?s={{{s}}}"
    },
    {
        "d": "bodeka.org",
        "b": "bodeka",
        "u": "http://bodeka.org/?s={{{s}}}"
    },
    {
        "d": "bindingofisaacrebirth.gamepedia.com",
        "b": "boi",
        "u": "http://bindingofisaacrebirth.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.boxofficemojo.com",
        "b": "bom",
        "u": "http://www.boxofficemojo.com/search/?q={{{s}}}"
    },
    {
        "d": "in.bookmyshow.com",
        "b": "bookmyshow",
        "u": "http://in.bookmyshow.com/search/results/?_s=0.2&search={{{s}}}"
    },
    {
        "d": "bootleggames.wikia.com",
        "b": "bootleg",
        "u": "http://bootleggames.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "borderlands.wikia.com",
        "b": "borderlands",
        "u": "http://borderlands.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.bouletcorp.com",
        "b": "boulet",
        "u": "http://www.bouletcorp.com/?s={{{s}}}"
    },
    {
        "d": "boyslife.org",
        "b": "boyslife",
        "u": "http://boyslife.org/search/?q={{{s}}} "
    },
    {
        "d": "bulbapedia.bulbagarden.net",
        "b": "bpa",
        "u": "http://bulbapedia.bulbagarden.net/wiki/{{{s}}}"
    },
    {
        "d": "www.boredpanda.com",
        "b": "bpanda",
        "u": "https://www.boredpanda.com/?s={{{s}}}"
    },
    {
        "d": "bulbapedia.bulbagarden.net",
        "b": "bpedia",
        "u": "http://bulbapedia.bulbagarden.net/w/index.php?title=Special:Search&search={{{s}}}&go=Go"
    },
    {
        "d": "www.backpackinglight.com",
        "b": "bpl",
        "u": "http://www.backpackinglight.com/cgi-bin/backpackinglight/search.html?q={{{s}}}"
    },
    {
        "d": "legacy.baseballprospectus.com",
        "b": "bpro",
        "u": "https://legacy.baseballprospectus.com/player_search.php?search_name={{{s}}}"
    },
    {
        "d": "brickset.com",
        "b": "brickpart",
        "u": "http://brickset.com/parts?query={{{s}}}"
    },
    {
        "d": "brickset.com",
        "b": "brickset",
        "u": "http://brickset.com/sets?query={{{s}}}"
    },
    {
        "d": "brawlstars.fandom.com",
        "b": "brst",
        "u": "https://brawlstars.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.baroteam.fr",
        "b": "brtm",
        "u": "https://www.baroteam.fr/?s={{{s}}}"
    },
    {
        "d": "welovebrussels.org",
        "b": "brussels",
        "u": "https://welovebrussels.org/?s={{{s}}}"
    },
    {
        "d": "www.brutsellog.nl",
        "b": "brutsel",
        "u": "https://www.brutsellog.nl/?s={{{s}}}"
    },
    {
        "d": "bsaber.com",
        "b": "bsaber",
        "u": "https://bsaber.com/?s={{{s}}}"
    },
    {
        "d": "bladeandsoul.gamepedia.com",
        "b": "bsw",
        "u": "https://bladeandsoul.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "btabs",
        "u": "http://www.ultimate-guitar.com/search.php?s={{{s}}}&w=songs"
    },
    {
        "d": "buffy.wikia.com",
        "b": "buffy",
        "u": "http://buffy.wikia.com/wiki/Special:Search?search= {{{s}}}&go=Go"
    },
    {
        "d": "dev.bukkit.org",
        "b": "bukdev",
        "u": "https://dev.bukkit.org/search?search={{{s}}}"
    },
    {
        "d": "www.curseforge.com",
        "b": "bukkit",
        "u": "https://www.curseforge.com/minecraft/bukkit-plugins/search?search={{{s}}}"
    },
    {
        "d": "bulbapedia.bulbagarden.net",
        "b": "bulbapedia",
        "u": "http://bulbapedia.bulbagarden.net/w/index.php?title=Special:Search&search={{{s}}}&go=Go"
    },
    {
        "d": "www.bullmoose.com",
        "b": "bullmoose",
        "u": "http://www.bullmoose.com/search?q={{{s}}}&SC=1"
    },
    {
        "d": "www.mangaupdates.com",
        "b": "bum",
        "u": "http://www.mangaupdates.com/search.html?search={{{s}}}"
    },
    {
        "d": "www.burbuja.info",
        "b": "burbuja",
        "u": "http://www.burbuja.info/inmobiliaria/search.php?do=process&query={{{s}}}"
    },
    {
        "d": "www.buzzfeed.com",
        "b": "buzzfeed",
        "u": "https://www.buzzfeed.com/search?q={{{s}}}"
    },
    {
        "d": "www.playbuzz.com",
        "b": "buzz",
        "u": "http://www.playbuzz.com/search?query={{{s}}}"
    },
    {
        "d": "belfrycomics.net",
        "b": "bwc",
        "u": "http://belfrycomics.net/pg/?searchtype=Titles&searchpat={{{s}}}"
    },
    {
        "d": "www.byond.com",
        "b": "byond",
        "u": "http://www.byond.com/games/?text={{{s}}}"
    },
    {
        "d": "www.camptocamp.org",
        "b": "c2c",
        "u": "http://www.camptocamp.org/summits/list/snam/{{{s}}}"
    },
    {
        "d": "www.camptocamp.org",
        "b": "c2cforum",
        "u": "http://www.camptocamp.org/documents/search?type=forums&q={{{s}}} "
    },
    {
        "d": "www.camptocamp.org",
        "b": "c2csite",
        "u": "http://www.camptocamp.org/documents/search?type=sites&q={{{s}}}"
    },
    {
        "d": "www.camptocamp.org",
        "b": "c2csummit",
        "u": "http://www.camptocamp.org/documents/search?type=summits&q={{{s}}}"
    },
    {
        "d": "www.channel4.com",
        "b": "c4",
        "u": "http://www.channel4.com/search/?q={{{s}}}"
    },
    {
        "d": "www.cagematch.net",
        "b": "cagematch",
        "u": "http://www.cagematch.net/?id=666&search={{{s}}}"
    },
    {
        "d": "michaelyingling.com",
        "b": "cah",
        "u": "http://michaelyingling.com/random/calvin_and_hobbes/search.php?phrase={{{s}}}"
    },
    {
        "d": "michaelyingling.com",
        "b": "calvinandhobbes",
        "u": "http://michaelyingling.com/random/calvin_and_hobbes/search.php?phrase={{{s}}}"
    },
    {
        "d": "www.z28.com",
        "b": "camaro",
        "u": "https://www.z28.com/search/search?keywords={{{s}}}&order=relevance"
    },
    {
        "d": "www.canistream.it",
        "b": "canistream",
        "u": "http://www.canistream.it/search/term/{{{s}}}"
    },
    {
        "d": "www.canistream.it",
        "b": "canistreamit",
        "u": "http://www.canistream.it/search/term/{{{s}}}"
    },
    {
        "d": "www.canistream.it",
        "b": "canistreammovie",
        "u": "http://www.canistream.it/search/movie/{{{s}}}"
    },
    {
        "d": "www.canistream.it",
        "b": "canistreamtv",
        "u": "http://www.canistream.it/search/tv/{{{s}}}"
    },
    {
        "d": "www.capfriendly.com",
        "b": "capf",
        "u": "https://www.capfriendly.com/search?s={{{s}}}"
    },
    {
        "d": "caranddriver.com",
        "b": "caranddriver",
        "u": "http://caranddriver.com/search/{{{s}}}"
    },
    {
        "d": "www.carmagazine.co.uk",
        "b": "car",
        "u": "http://www.carmagazine.co.uk/GLOBAL/Search-Results/?N=0&Ntx=mode%20matchallpartial&Ntk=site&Ntt={{{s}}}"
    },
    {
        "d": "www.carmagazine.co.uk",
        "b": "carmag",
        "u": "http://www.carmagazine.co.uk/GLOBAL/Search-Results/?N=0&Ntx=mode%20matchallpartial&Ntk=site&Ntt={{{s}}}"
    },
    {
        "d": "castbox.fm",
        "b": "castbox",
        "u": "https://castbox.fm/podcasts/{{{s}}}"
    },
    {
        "d": "www.sports-reference.com",
        "b": "cbbr",
        "u": "https://www.sports-reference.com/cbb/search/search.fcgi?hint=&search={{{s}}}&pid=&idx="
    },
    {
        "d": "carminbook.com",
        "b": "cbk",
        "u": "http://carminbook.com/?s={{{s}}}"
    },
    {
        "d": "www1.cbn.com",
        "b": "cbn",
        "u": "http://www1.cbn.com/cbn-search?search_term={{{s}}}&site=default_collection"
    },
    {
        "d": "comicbookroundup.com",
        "b": "cbr",
        "u": "http://comicbookroundup.com/search_results.php?f_search={{{s}}}"
    },
    {
        "d": "www.sportsline.com",
        "b": "cbssports",
        "u": "http://www.sportsline.com/info/search?q={{{s}}}"
    },
    {
        "d": "combineoverwiki.net",
        "b": "cbwiki",
        "u": "http://combineoverwiki.net/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "choualbox.com",
        "b": "cbx",
        "u": "http://choualbox.com/recherche?q={{{s}}}"
    },
    {
        "d": "www.climbbybike.com",
        "b": "ccb",
        "u": "https://www.climbbybike.com/climbs_selection.asp?Mountainname={{{s}}}"
    },
    {
        "d": "cinemaclock.com",
        "b": "cck",
        "u": "http://cinemaclock.com/search?r=bri&m=Vancouver&key={{{s}}} "
    },
    {
        "d": "computercraft.info",
        "b": "ccwiki",
        "u": "http://computercraft.info/wiki/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "cddawiki.chezzo.com",
        "b": "cdda",
        "u": "http://cddawiki.chezzo.com/cdda_wiki/index.php?search={{{s}}}"
    },
    {
        "d": "cdda-trunk.chezzo.com",
        "b": "cddai",
        "u": "http://cdda-trunk.chezzo.com/search?q={{{s}}}"
    },
    {
        "d": "cddawiki.chezzo.com",
        "b": "cddaw",
        "u": "http://cddawiki.chezzo.com/cdda_wiki/index.php?search={{{s}}}"
    },
    {
        "d": "wikisceleb.com",
        "b": "celeb",
        "u": "https://wikisceleb.com/?s={{{s}}}"
    },
    {
        "d": "www.cellartracker.com",
        "b": "cellartracker",
        "u": "http://www.cellartracker.com/list.asp?fInStock=0&Table=List&iUserOverride=0&szSearch={{{s}}}"
    },
    {
        "d": "celticmusicpodcast.com",
        "b": "celticpodcast",
        "u": "http://celticmusicpodcast.com/?s={{{s}}}"
    },
    {
        "d": "www.sports-reference.com",
        "b": "cfbr",
        "u": "http://www.sports-reference.com/cfb/search/search.fcgi?search={{{s}}}"
    },
    {
        "d": "forum.curvefever.pro",
        "b": "cfpforum",
        "u": "https://forum.curvefever.pro/search?q={{{s}}}"
    },
    {
        "d": "champion.gg",
        "b": "cgg",
        "u": "http://champion.gg/champion/{{{s}}}"
    },
    {
        "d": "champion.gg",
        "b": "championgg",
        "u": "http://champion.gg/champion/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "chapo",
        "u": "https://www.reddit.com/r/ChapoTrapHouse/search?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "postavy.akihabara.cz",
        "b": "charbara",
        "u": "http://postavy.akihabara.cz/vyhledavani/{{{s}}}"
    },
    {
        "d": "charmed.wikia.com",
        "b": "charmed",
        "u": "http://charmed.wikia.com/wiki/Special:Search?search={{{s}}} "
    },
    {
        "d": "camphikedrive.blogspot.com.au",
        "b": "chd",
        "u": "http://camphikedrive.blogspot.com.au/search?q={{{s}}}&m=1"
    },
    {
        "d": "www.cheapassgamer.com",
        "b": "cheapassgamer",
        "u": "http://www.cheapassgamer.com/query.php?keywords={{{s}}}"
    },
    {
        "d": "www.cheatcc.com",
        "b": "cheatcc",
        "u": "http://www.cheatcc.com/search_results.html?sitesearch=CheatCC.com&domains=CheatCC.com&q={{{s}}}&sa=Google+Search&client=pub-7081624040320322&forid=1&ie=UTF8&oe=UTF8&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%230000FF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A0%3BLW%3A0%3BL%3Ahttp%3A%2F%2Fwww.cheatcc.com%2Fccclink.gif%3BS%3Ahttp%3A%2F%2Fwww.cheatcc.com%2Findex2.html%3BFORID%3A11"
    },
    {
        "d": "www.cheatcc.com",
        "b": "cheatcodes",
        "u": "http://www.cheatcc.com/search_results.html?sitesearch=CheatCC.com&domains=CheatCC.com&q={{{s}}}&sa=Google+Search&client=pub-7081624040320322&forid=1&ie=UTF8&oe=UTF8&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%230000FF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A0%3BLW%3A0%3BL%3Ahttp%3A%2F%2Fwww.cheatcc.com%2Fccclink.gif%3BS%3Ahttp%3A%2F%2Fwww.cheatcc.com%2Findex2.html%3BFORID%3A11"
    },
    {
        "d": "www.chefkoch.de",
        "b": "chefkoch",
        "u": "https://www.chefkoch.de/suche.php?wo=2&suche={{{s}}}"
    },
    {
        "d": "www.chess.com",
        "b": "chess",
        "u": "https://www.chess.com/topic/{{{s}}}"
    },
    {
        "d": "www.chessgames.com",
        "b": "chessgames",
        "u": "http://www.chessgames.com/perl/ezsearch.pl?search={{{s}}}"
    },
    {
        "d": "champion.gg",
        "b": "chgg",
        "u": "http://champion.gg/champion/{{{s}}}"
    },
    {
        "d": "chocolatecoveredkatie.com",
        "b": "choc",
        "u": "https://chocolatecoveredkatie.com/?s={{{s}}}"
    },
    {
        "d": "choualbox.com",
        "b": "choual",
        "u": "https://choualbox.com/recherche?q={{{s}}}"
    },
    {
        "d": "chuck-nbc.wikia.com",
        "b": "chuck",
        "u": "http://chuck-nbc.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.cinemainfocus.com",
        "b": "cif",
        "u": "http://www.cinemainfocus.com/search?q={{{s}}}"
    },
    {
        "d": "cinemassacre.com",
        "b": "cine",
        "u": "http://cinemassacre.com/?s={{{s}}}&search.x=0&search.y=0"
    },
    {
        "d": "www.cinemagay.it",
        "b": "cinemagay",
        "u": "http://www.cinemagay.it/ricerca.asp?tipo=0&campo={{{s}}}&Submit=Cerca"
    },
    {
        "d": "www.citatum.hu",
        "b": "citatum",
        "u": "https://www.citatum.hu/kereso.php?kereses={{{s}}}"
    },
    {
        "d": "civilization.wikia.com",
        "b": "civ",
        "u": "http://civilization.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "civilization.wikia.com",
        "b": "civilization",
        "u": "http://civilization.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "ck2.paradoxwikis.com",
        "b": "ck2",
        "u": "https://ck2.paradoxwikis.com/index.php?search={{{s}}}"
    },
    {
        "d": "ck2.paradoxwikis.com",
        "b": "ckiiwiki",
        "u": "https://ck2.paradoxwikis.com/index.php?search={{{s}}}"
    },
    {
        "d": "clashofclans.wikia.com",
        "b": "clashofclans",
        "u": "http://clashofclans.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1#"
    },
    {
        "d": "classicdb.ch",
        "b": "classicdb",
        "u": "http://classicdb.ch/?search={{{s}}}"
    },
    {
        "d": "cliqist.com",
        "b": "cliqist",
        "u": "http://cliqist.com/?s={{{s}}}"
    },
    {
        "d": "clwb.net",
        "b": "clwb",
        "u": "https://clwb.net/?post_type=event&s={{{s}}}"
    },
    {
        "d": "www.cineplex.com",
        "b": "cnplx",
        "u": "http://www.cineplex.com/search-2015?search-query={{{s}}}"
    },
    {
        "d": "www.coastercrazy.com",
        "b": "coastercrazy",
        "u": "http://www.coastercrazy.com/forums/search.php?keywords={{{s}}}"
    },
    {
        "d": "cod.esportspedia.com",
        "b": "codpedia",
        "u": "https://cod.esportspedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "callofduty.wikia.com",
        "b": "codw",
        "u": "http://callofduty.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "getsmokin.nl",
        "b": "coffeeshop",
        "u": "https://getsmokin.nl/coffeeshops?shopsearch={{{s}}}"
    },
    {
        "d": "colloq.io",
        "b": "colloq",
        "u": "https://colloq.io/search?query={{{s}}}"
    },
    {
        "d": "combodeck.net",
        "b": "combodeck",
        "u": "http://combodeck.net/Query/{{{s}}} "
    },
    {
        "d": "www.comic-rocket.com",
        "b": "comicrocket",
        "u": "https://www.comic-rocket.com/search?q={{{s}}}"
    },
    {
        "d": "www.comicvine.com",
        "b": "comicvine",
        "u": "http://www.comicvine.com/search/?q={{{s}}}"
    },
    {
        "d": "www.commitstrip.com",
        "b": "commitstrip",
        "u": "http://www.commitstrip.com/?s={{{s}}}"
    },
    {
        "d": "www.commonsensemedia.org",
        "b": "commonsensemedia",
        "u": "http://www.commonsensemedia.org/search/{{{s}}}"
    },
    {
        "d": "consent.games",
        "b": "consent",
        "u": "https://consent.games/?s={{{s}}}"
    },
    {
        "d": "www.conversadesofa.com",
        "b": "conversa",
        "u": "http://www.conversadesofa.com/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "coolmath",
        "u": "https://duckduckgo.com/?q=site%3Acoolmathgames.com+{{{s}}}&ia=web"
    },
    {
        "d": "www.coop.se",
        "b": "coop_se",
        "u": "https://www.coop.se/Sok/Receptsok/{{{s}}}"
    },
    {
        "d": "coppermind.net",
        "b": "coppermind",
        "u": "http://coppermind.net/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "consequenceofsound.net",
        "b": "cos",
        "u": "http://consequenceofsound.net/?s={{{s}}}"
    },
    {
        "d": "coub.com",
        "b": "coub",
        "u": "http://coub.com/search?q={{{s}}}"
    },
    {
        "d": "www.courttv.com",
        "b": "courttv",
        "u": "https://www.courttv.com/?s={{{s}}}"
    },
    {
        "d": "qrzcq.com",
        "b": "cq",
        "u": "http://qrzcq.com/call/{{{s}}}"
    },
    {
        "d": "www.cracked.com",
        "b": "cracked",
        "u": "http://www.cracked.com/search/search.php?sa=search&q={{{s}}}"
    },
    {
        "d": "crawl.chaosforge.org",
        "b": "crawl",
        "u": "http://crawl.chaosforge.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "loom.shalott.org",
        "b": "crawldb",
        "u": "https://loom.shalott.org/learndb.html#{{{s}}}"
    },
    {
        "d": "www.cricbuzz.com",
        "b": "cricbuzz",
        "u": "https://www.cricbuzz.com/search?q={{{s}}}"
    },
    {
        "d": "www.criterionchannel.com",
        "b": "cric",
        "u": "https://www.criterionchannel.com/search?q={{{s}}}"
    },
    {
        "d": "search.espncricinfo.com",
        "b": "cricinfo",
        "u": "http://search.espncricinfo.com/ci/content/site/search.html?search={{{s}}}&gblsearch="
    },
    {
        "d": "www.criterion.com",
        "b": "cri",
        "u": "https://www.criterion.com/search#stq={{{s}}}"
    },
    {
        "d": "www.criticker.com",
        "b": "criticker",
        "u": "https://www.criticker.com/?search={{{s}}}&type=films"
    },
    {
        "d": "criticalrole.wikia.com",
        "b": "critrole",
        "u": "http://criticalrole.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.codeweavers.com",
        "b": "crossover",
        "u": "http://www.codeweavers.com/compatibility/search/?name={{{s}}}&search=app"
    },
    {
        "d": "www.crunchyroll.com",
        "b": "crs",
        "u": "http://www.crunchyroll.com/search?from=&q={{{s}}}"
    },
    {
        "d": "www.crunchyroll.com",
        "b": "crunchyroll",
        "u": "http://www.crunchyroll.com/search?q={{{s}}}"
    },
    {
        "d": "clashroyale.fandom.com",
        "b": "crw",
        "u": "https://clashroyale.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "csgo-stats.net",
        "b": "csgostats",
        "u": "https://csgo-stats.net/search?q={{{s}}}"
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "cslq",
        "u": "http://wiki.teamliquid.net/counterstrike/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.commonsensemedia.org",
        "b": "csm",
        "u": "https://www.commonsensemedia.org/search/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "cstrade",
        "u": "https://www.reddit.com/r/GlobalOffensiveTrade/search?q={{{s}}}&restrict_sr=on&sort=new&t=all"
    },
    {
        "d": "www.ctv.ca",
        "b": "ctv",
        "u": "http://www.ctv.ca/searchResult.aspx?q={{{s}}}"
    },
    {
        "d": "www.cuantocabron.com",
        "b": "cuantocabron",
        "u": "http://www.cuantocabron.com/busqueda/0/{{{s}}}"
    },
    {
        "d": "cubash.com",
        "b": "cub",
        "u": "https://cubash.com/users?filter=0&query={{{s}}}"
    },
    {
        "d": "www.cultureunplugged.com",
        "b": "cultureunplugged",
        "u": "http://www.cultureunplugged.com/festival/gsearch.php?cx=006605354541519765965:qm01kqkdyrq&cof=FORID:10;NB:1&ie=UTF-8&q={{{s}}}&sa.x=0&sa.y=0"
    },
    {
        "d": "classic.wowhead.com",
        "b": "cwow",
        "u": "https://classic.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "explosm.net",
        "b": "cyanide",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:explosm.net"
    },
    {
        "d": "www.cyclingweekly.com",
        "b": "cyclingweekly",
        "u": "https://www.cyclingweekly.com/?s={{{s}}}"
    },
    {
        "d": "www.d20pfsrd.com",
        "b": "d20pfsrd",
        "u": "http://www.d20pfsrd.com/system/app/pages/search?scope=search-site&q={{{s}}}"
    },
    {
        "d": "www.d20srd.org",
        "b": "d20srd",
        "u": "http://www.d20srd.org/search.htm?q={{{s}}}"
    },
    {
        "d": "www.d20srd.org",
        "b": "d20",
        "u": "http://www.d20srd.org/search.htm?q={{{s}}}"
    },
    {
        "d": "dota2.gamepedia.com",
        "b": "d2gp",
        "u": "http://dota2.gamepedia.com/Special:Search/{{{s}}}"
    },
    {
        "d": "www.light.gg",
        "b": "d2",
        "u": "https://www.light.gg/db/search/?q={{{s}}}"
    },
    {
        "d": "diablo2.diablowiki.net",
        "b": "d2w",
        "u": "http://diablo2.diablowiki.net/index.php?title=Special%3ASearch&redirs=1&search={{{s}}}&fulltext=Search&ns0=1&ns14=1"
    },
    {
        "d": "dirty.ru",
        "b": "d3",
        "u": "https://dirty.ru/search/?query={{{s}}}"
    },
    {
        "d": "daddyknows.ru",
        "b": "daddyknows",
        "u": "https://daddyknows.ru/?s={{{s}}}"
    },
    {
        "d": "dadtribe.in",
        "b": "dadtribe",
        "u": "https://dadtribe.in/?s={{{s}}}"
    },
    {
        "d": "www.dagjeweg.nl",
        "b": "dagjeweg",
        "u": "https://www.dagjeweg.nl/zoeken?dq={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dal",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:abretelibro.com"
    },
    {
        "d": "www.nexusmods.com",
        "b": "danm",
        "u": "https://www.nexusmods.com/dragonage/search/?gsearch={{{s}}}&gsearchtype=mods"
    },
    {
        "d": "www.dariawiki.org",
        "b": "daria",
        "u": "http://www.dariawiki.org/wiki/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "dariusforoux.com",
        "b": "dariusf",
        "u": "https://dariusforoux.com/?s={{{s}}}"
    },
    {
        "d": "www.darkhorse.com",
        "b": "darkhorse",
        "u": "http://www.darkhorse.com/Search/{{{s}}}"
    },
    {
        "d": "www.databaze-her.cz",
        "b": "databaze-her",
        "u": "http://www.databaze-her.cz/hledani/?fraze={{{s}}}"
    },
    {
        "d": "dragonage.fandom.com",
        "b": "dawiki",
        "u": "https://dragonage.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "deadbydaylight.gamepedia.com",
        "b": "dbd",
        "u": "https://deadbydaylight.gamepedia.com/index.php?search={{{s}}}&title=Special:Search&go=Go"
    },
    {
        "d": "www.dotabuff.com",
        "b": "dbguide",
        "u": "https://www.dotabuff.com/heroes/{{{s}}}/guides"
    },
    {
        "d": "movie.douban.com",
        "b": "dbm",
        "u": "https://movie.douban.com/subject_search?search_text={{{s}}}"
    },
    {
        "d": "movie.douban.com",
        "b": "dbmovie",
        "u": "https://movie.douban.com/subject_search?search_text={{{s}}}&cat=1002"
    },
    {
        "d": "music.douban.com",
        "b": "dbmusic",
        "u": "https://music.douban.com/subject_search?search_text={{{s}}}&cat=1003"
    },
    {
        "d": "www.dotabuff.com",
        "b": "dbuff",
        "u": "http://www.dotabuff.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "dragonbolt-vanguard.wikia.com",
        "b": "dbv",
        "u": "http://dragonbolt-vanguard.wikia.com/search?query={{{s}}}"
    },
    {
        "d": "deathbattle.wikia.com",
        "b": "dbwiki",
        "u": "http://deathbattle.wikia.com/wiki/Special:Search?fulltext=Search&search={{{s}}}"
    },
    {
        "d": "www.dccomics.com",
        "b": "dccomics",
        "u": "http://www.dccomics.com/search/node/{{{s}}}"
    },
    {
        "d": "search.dcinside.com",
        "b": "dcinside",
        "u": "http://search.dcinside.com/combine/q/{{{s}}}"
    },
    {
        "d": "crawl.chaosforge.org",
        "b": "dcss",
        "u": "http://crawl.chaosforge.org/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "dc.wikia.com",
        "b": "dcwiki",
        "u": "http://dc.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.dndbeyond.com",
        "b": "d&d",
        "u": "https://www.dndbeyond.com/search?q={{{s}}}"
    },
    {
        "d": "ddnet.tw",
        "b": "ddnet",
        "u": "https://ddnet.tw/players/{{{s}}}"
    },
    {
        "d": "www.dduknow.com",
        "b": "dduknow",
        "u": "http://www.dduknow.com/?s={{{s}}}"
    },
    {
        "d": "darkestdungeon.gamepedia.com",
        "b": "ddwiki",
        "u": "https://darkestdungeon.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "deadspin.com",
        "b": "deadspin",
        "u": "http://deadspin.com/search?q={{{s}}}"
    },
    {
        "d": "www.debate.org",
        "b": "debate",
        "u": "http://www.debate.org/search?q={{{s}}}"
    },
    {
        "d": "www.deezer.com",
        "b": "deezer",
        "u": "https://www.deezer.com/search/{{{s}}}"
    },
    {
        "d": "delicious-fruit.com",
        "b": "delfruit",
        "u": "http://delicious-fruit.com/ratings/full.php?s={{{s}}}"
    },
    {
        "d": "forum.dragen-en-voeden.nl",
        "b": "denv",
        "u": "https://forum.dragen-en-voeden.nl/search.php?keywords={{{s}}}&terms=all&author=&sc=1&sf=all&sr=posts&sk=t&sd=d&st=0&ch=300&t=0&submit=Zoek"
    },
    {
        "d": "www.destructoid.com",
        "b": "destructoid",
        "u": "http://www.destructoid.com/search.phtml?cx=009275597616460404995%3A_iu6yjvsnom&cof=FORID%3A11&q={{{s}}}&sa=Search&siteurl=http%3A%2F%2Fwww.destructoid.com%2F"
    },
    {
        "d": "de.wikihow.com",
        "b": "dewikihow",
        "u": "http://de.wikihow.com/Special:GoogSearch?ie=UTF-8&q={{{s}}}&sa=Suche"
    },
    {
        "d": "www.pokebip.com",
        "b": "dex6g",
        "u": "https://www.pokebip.com/pokedex/index.php?phppage=recherche&req={{{s}}}"
    },
    {
        "d": "dwarffortresswiki.org",
        "b": "dfw",
        "u": "http://dwarffortresswiki.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "dwarffortresswiki.org",
        "b": "dfwiki",
        "u": "http://dwarffortresswiki.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.desiringgod.org",
        "b": "dg",
        "u": "http://www.desiringgod.org/search/results?utf8=%E2%9C%93&search_source=navbar&q={{{s}}}#gsc.tab=0&gsc.q={{{s}}}&gsc.page=1"
    },
    {
        "d": "diablo.wikia.com",
        "b": "diablo",
        "u": "http://diablo.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.di.fm",
        "b": "difm",
        "u": "https://www.di.fm/search?q={{{s}}}"
    },
    {
        "d": "digitalcomicmuseum.com",
        "b": "digitalcomicmuseum",
        "u": "http://digitalcomicmuseum.com/index.php?ACT=dosearch&terms={{{s}}}"
    },
    {
        "d": "digitalcomicmuseum.com",
        "b": "digitalcomics",
        "u": "http://digitalcomicmuseum.com/index.php?ACT=dosearch&terms={{{s}}}"
    },
    {
        "d": "www.digitalspy.com",
        "b": "digitalspy",
        "u": "http://www.digitalspy.com/search/{{{s}}}"
    },
    {
        "d": "igranje.hr",
        "b": "digra",
        "u": "https://igranje.hr/?s={{{s}}}"
    },
    {
        "d": "dilbert.com",
        "b": "dilbert",
        "u": "https://dilbert.com/search_results?terms={{{s}}}"
    },
    {
        "d": "dsc.discovery.com",
        "b": "discovery",
        "u": "http://dsc.discovery.com/search.htm?terms={{{s}}}"
    },
    {
        "d": "discworld.wikia.com",
        "b": "discworld",
        "u": "http://discworld.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.discogs.com",
        "b": "dis",
        "u": "https://www.discogs.com/search/?q={{{s}}}&type=all"
    },
    {
        "d": "search.disney.go.com",
        "b": "disney",
        "u": "http://search.disney.go.com/?q={{{s}}}"
    },
    {
        "d": "kidicarus.wikia.com",
        "b": "divinipedia",
        "u": "http://kidicarus.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.diynetwork.com",
        "b": "diy",
        "u": "http://www.diynetwork.com/search/{{{s}}}"
    },
    {
        "d": "diy.org",
        "b": "diyorg",
        "u": "https://duckduckgo.com/search/?q=site:diy.org+{{{s}}}"
    },
    {
        "d": "www.deejay.de",
        "b": "djay",
        "u": "http://www.deejay.de/{{{s}}}"
    },
    {
        "d": "www.djentmag.com",
        "b": "djent",
        "u": "https://www.djentmag.com/?s={{{s}}}"
    },
    {
        "d": "traducciones-videojuegos.clandlan.net",
        "b": "dlantrad",
        "u": "http://traducciones-videojuegos.clandlan.net/index.php?page=academia%2Fsearch&search={{{s}}}"
    },
    {
        "d": "dleague.nba.com",
        "b": "dleague",
        "u": "http://dleague.nba.com/?q={{{s}}}"
    },
    {
        "d": "dlive.tv",
        "b": "dlive",
        "u": "https://dlive.tv/s/search/{{{s}}}"
    },
    {
        "d": "www.dndbeyond.com",
        "b": "dndbeyond",
        "u": "https://www.dndbeyond.com/search?q={{{s}}}"
    },
    {
        "d": "www.dndbeyond.com",
        "b": "dnd",
        "u": "https://www.dndbeyond.com/search?q={{{s}}}"
    },
    {
        "d": "dungeons.wikia.com",
        "b": "dndwiki",
        "u": "http://dungeons.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "dobberhockey.com",
        "b": "dobber",
        "u": "https://dobberhockey.com/?s={{{s}}}&orderby=post_date"
    },
    {
        "d": "www.donationcoder.com",
        "b": "doco",
        "u": "http://www.donationcoder.com/forum/index.php?action=search2&search={{{s}}} "
    },
    {
        "d": "dofuswiki.wikia.com",
        "b": "dofus",
        "u": "https://dofuswiki.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "wiki.dolphin-emu.org",
        "b": "dolphin",
        "u": "https://wiki.dolphin-emu.org/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "wiki.dominionstrategy.com",
        "b": "domw",
        "u": "http://wiki.dominionstrategy.com/index.php?search={{{s}}}&go=Go&title=Special%3ASearch"
    },
    {
        "d": "dont-starve-game.wikia.com",
        "b": "dontstarve",
        "u": "http://dont-starve-game.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "doomwiki.org",
        "b": "doom",
        "u": "http://doomwiki.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.dopeclics.com",
        "b": "dopeclics",
        "u": "http://www.dopeclics.com/search?q={{{s}}}"
    },
    {
        "d": "dorama.akihabara.cz",
        "b": "dorabara",
        "u": "http://dorama.akihabara.cz/vyhledavani/{{{s}}}"
    },
    {
        "d": "dwarffortresswiki.org",
        "b": "dorf",
        "u": "http://dwarffortresswiki.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "dota2",
        "u": "http://wiki.teamliquid.net/dota2/index.php?search={{{s}}}"
    },
    {
        "d": "www.dotabuff.com",
        "b": "dotabuff",
        "u": "http://www.dotabuff.com/search?q={{{s}}}"
    },
    {
        "d": "dota2.gamepedia.com",
        "b": "dota",
        "u": "http://dota2.gamepedia.com/index.php?search={{{s}}} "
    },
    {
        "d": "evemaps.dotlan.net",
        "b": "dotlan",
        "u": "http://evemaps.dotlan.net/search?q={{{s}}}"
    },
    {
        "d": "www.douban.com",
        "b": "douban",
        "u": "http://www.douban.com/search?q={{{s}}}"
    },
    {
        "d": "movie.douban.com",
        "b": "doubanmovie",
        "u": "https://movie.douban.com/subject_search?search_text={{{s}}}"
    },
    {
        "d": "www.doujinshi.org",
        "b": "doujinshi",
        "u": "http://www.doujinshi.org/search/simple/?T=objects&sn={{{s}}}"
    },
    {
        "d": "dvdpascher.net",
        "b": "dpc",
        "u": "http://dvdpascher.net/recherche/?q={{{s}}}"
    },
    {
        "d": "dragon-quest.org",
        "b": "dq",
        "u": "http://dragon-quest.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.draftexpress.com",
        "b": "draftexpress",
        "u": "http://www.draftexpress.com/search/term/{{{s}}}"
    },
    {
        "d": "dragcave.wikia.com",
        "b": "dragcave",
        "u": "http://dragcave.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "violettacyra.blogspot.com",
        "b": "draomai",
        "u": "https://violettacyra.blogspot.com/search/?term={{{s}}}"
    },
    {
        "d": "www.drinkify.org",
        "b": "drinkify",
        "u": "http://www.drinkify.org/{{{s}}}"
    },
    {
        "d": "www.doctornerdlove.com",
        "b": "drnerdlove",
        "u": "http://www.doctornerdlove.com/?s={{{s}}}"
    },
    {
        "d": "www.dr.dk",
        "b": "drtv",
        "u": "https://www.dr.dk/tv/soeg/{{{s}}}"
    },
    {
        "d": "darksouls2.wikidot.com",
        "b": "ds2w",
        "u": "http://darksouls2.wikidot.com/search:site/q/{{{s}}}"
    },
    {
        "d": "darksouls3.wikidot.com",
        "b": "ds3w",
        "u": "http://darksouls3.wikidot.com/search:site/a/p/q/{{{s}}}"
    },
    {
        "d": "www.ulisses-regelwiki.de",
        "b": "dsarw",
        "u": "http://www.ulisses-regelwiki.de/index.php/suche.html?keywords={{{s}}}"
    },
    {
        "d": "wiki-aventurica.de",
        "b": "dsa",
        "u": "http://wiki-aventurica.de/wiki/index.php?title=Spezial:Suche&search={{{s}}}"
    },
    {
        "d": "www.dsmrf.com",
        "b": "dsmrf",
        "u": "https://www.dsmrf.com/?s={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "dsr",
        "u": "https://www.reddit.com/r/DotA2/search?q={{{s}}}&restrict_sr=on&sort=relevance&t=all"
    },
    {
        "d": "dont-starve-game.wikia.com",
        "b": "dstarve",
        "u": "http://dont-starve-game.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "darksouls.wikidot.com",
        "b": "dsw",
        "u": "http://darksouls.wikidot.com/search:site/q/{{{s}}}"
    },
    {
        "d": "danstonchat.com",
        "b": "dtc",
        "u": "http://danstonchat.com/search.html?search= {{{s}}}"
    },
    {
        "d": "www.drivethrurpg.com",
        "b": "dtrpg",
        "u": "https://www.drivethrurpg.com/browse.php?keywords={{{s}}}"
    },
    {
        "d": "board.dualthegame.com",
        "b": "dualb",
        "u": "https://board.dualthegame.com/index.php?/search/&q={{{s}}}"
    },
    {
        "d": "www.dotabuff.com",
        "b": "duff",
        "u": "http://www.dotabuff.com/search?q={{{s}}}"
    },
    {
        "d": "www.dustloop.com",
        "b": "dustloop",
        "u": "http://www.dustloop.com/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.dvdfr.com",
        "b": "dvdfr",
        "u": "http://www.dvdfr.com/search/search.php?produit=all&title={{{s}}}"
    },
    {
        "d": "xboxdvr.com",
        "b": "dvr",
        "u": "http://xboxdvr.com/gamer/{{{s}}}"
    },
    {
        "d": "dwarffortresswiki.org",
        "b": "dwarf",
        "u": "http://dwarffortresswiki.org/index.php?search={{{s}}}"
    },
    {
        "d": "wiki.d-addicts.com",
        "b": "dw",
        "u": "https://wiki.d-addicts.com/index.php?search={{{s}}}"
    },
    {
        "d": "tardis.wikia.com",
        "b": "dww",
        "u": "http://tardis.wikia.com/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "dynamite.com",
        "b": "dynamite",
        "u": "http://dynamite.com/htmlfiles/search2.html?0=19&next0=&KMPZ={{{s}}}"
    },
    {
        "d": "dynasty-scans.com",
        "b": "dyn",
        "u": "https://dynasty-scans.com/search?q={{{s}}}"
    },
    {
        "d": "everything2.com",
        "b": "e2",
        "u": "http://everything2.com/title/{{{s}}}?searchy=search"
    },
    {
        "d": "earthbound.wikia.com",
        "b": "earthbound",
        "u": "http://earthbound.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.eat-this.org",
        "b": "eatthis",
        "u": "https://www.eat-this.org/?s={{{s}}}"
    },
    {
        "d": "www.rogerebert.com",
        "b": "ebert",
        "u": "https://www.rogerebert.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "eco.gamepedia.com",
        "b": "ecowiki",
        "u": "https://eco.gamepedia.com/index.php?search={{{s}}}&title=Special:Search"
    },
    {
        "d": "encyclopediadramatica.rs",
        "b": "ed",
        "u": "https://encyclopediadramatica.rs/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "forums.frontier.co.uk",
        "b": "edf",
        "u": "https://forums.frontier.co.uk/search.php?do=process&query={{{s}}}"
    },
    {
        "d": "edhrec.com",
        "b": "edhrec",
        "u": "https://edhrec.com/cards/{{{s}}}"
    },
    {
        "d": "elite-dangerous.wikia.com",
        "b": "edw",
        "u": "http://elite-dangerous.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.eeggs.com",
        "b": "eeggs",
        "u": "http://www.eeggs.com/php/search.php?cx=partner-pub-3374430587172271%3Aqa6js0-hxxa&cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}&siteurl=www.eeggs.com/&ref="
    },
    {
        "d": "escapefromtarkov.gamepedia.com",
        "b": "eft",
        "u": "https://escapefromtarkov.gamepedia.com/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "eg",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:epguides.com"
    },
    {
        "d": "duckduckgo.com",
        "b": "egforums",
        "u": "http://duckduckgo.com/?q=site:eurogamer.net/forums+{{{s}}}"
    },
    {
        "d": "www.epicgames.com",
        "b": "egs",
        "u": "https://www.epicgames.com/store/en-US/store-search?q={{{s}}}"
    },
    {
        "d": "www.eliteguias.com",
        "b": "eguias",
        "u": "https://www.eliteguias.com/buscar.php?q={{{s}}}"
    },
    {
        "d": "www.english-heritage.org.uk",
        "b": "eh",
        "u": "https://www.english-heritage.org.uk/search?searchTerm={{{s}}}"
    },
    {
        "d": "www.evonyhookups.info",
        "b": "ehu",
        "u": "http://www.evonyhookups.info/?s={{{s}}}"
    },
    {
        "d": "eksisozluk.com",
        "b": "eksi",
        "u": "https://eksisozluk.com/?q={{{s}}}"
    },
    {
        "d": "elderscrolls.wikia.com",
        "b": "elderwiki",
        "u": "http://elderscrolls.wikia.com/wiki/index.php?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "eleymcqueen.blogspot.in",
        "b": "eley",
        "u": "http://eleymcqueen.blogspot.in/search?q={{{s}}}"
    },
    {
        "d": "www.eliteprospects.com",
        "b": "elite",
        "u": "https://www.eliteprospects.com/search/player?q={{{s}}}"
    },
    {
        "d": "www.eliteprospects.com",
        "b": "elitepr",
        "u": "https://www.eliteprospects.com/search/player?q={{{s}}}"
    },
    {
        "d": "www.eliteprospects.com",
        "b": "eliteprospects",
        "u": "https://www.eliteprospects.com/search/team?q={{{s}}}"
    },
    {
        "d": "www.elotrolado.net",
        "b": "elotrolado",
        "u": "http://www.elotrolado.net/search.php?keywords={{{s}}}&type=h"
    },
    {
        "d": "evelexicon.com",
        "b": "elx",
        "u": "https://evelexicon.com/term/{{{s}}}"
    },
    {
        "d": "www.emotiyou.com",
        "b": "emo",
        "u": "http://www.emotiyou.com/search/{{{s}}}"
    },
    {
        "d": "www.empireonline.com",
        "b": "empire",
        "u": "http://www.empireonline.com/search/default.asp?search={{{s}}}"
    },
    {
        "d": "emulation.gametechwiki.com",
        "b": "emu",
        "u": "http://emulation.gametechwiki.com/index.php?search={{{s}}}"
    },
    {
        "d": "en.kancollewiki.net",
        "b": "enkcwiki",
        "u": "http://en.kancollewiki.net/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "de.finalfantasyxiv.com",
        "b": "eorde",
        "u": "https://de.finalfantasyxiv.com/lodestone/playguide/db/search/?q={{{s}}}"
    },
    {
        "d": "eu.finalfantasyxiv.com",
        "b": "eor",
        "u": "https://eu.finalfantasyxiv.com/lodestone/playguide/db/search/?q={{{s}}}"
    },
    {
        "d": "fr.finalfantasyxiv.com",
        "b": "eorfr",
        "u": "https://fr.finalfantasyxiv.com/lodestone/playguide/db/search/?q={{{s}}}"
    },
    {
        "d": "www.eosdigitaal.nl",
        "b": "eos",
        "u": "https://www.eosdigitaal.nl/forum/search.php?keywords={{{s}}}&terms=all&author=&sc=1&sf=all&sk=t&sd=d&sr=posts&st=0&ch=300&t=0&submit=Zoeken"
    },
    {
        "d": "www.episodate.com",
        "b": "epd",
        "u": "https://www.episodate.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "epg",
        "u": "https://duckduckgo.com/?q=site%3Aepguides.com+{{{s}}}"
    },
    {
        "d": "www.epicgames.com",
        "b": "epic",
        "u": "https://www.epicgames.com/bing-search?keyword={{{s}}}"
    },
    {
        "d": "wiki.epicmafia.com",
        "b": "epicmafia",
        "u": "http://wiki.epicmafia.com/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.episodeworld.com",
        "b": "epw",
        "u": "http://www.episodeworld.com/search/?searchitem={{{s}}}"
    },
    {
        "d": "eq2.wikia.com",
        "b": "eq2",
        "u": "http://eq2.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "eqd",
        "u": "http://www.google.com/cse?cx=partner-pub-6285692791338183%3A7732117278&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "eqresource.com",
        "b": "eqr",
        "u": "http://eqresource.com/search.php?cx=partner-pub-8686271290388928%3Atjkxdymxk9a&cof=FORID%3A9&ie=ISO-8859-1&q={{{s}}}&sa=Search"
    },
    {
        "d": "www.daserste.de",
        "b": "erste",
        "u": "https://www.daserste.de/search/index.jsp?searchText={{{s}}}"
    },
    {
        "d": "rsagames.com",
        "b": "escape",
        "u": "http://rsagames.com/?s={{{s}}}"
    },
    {
        "d": "play.esea.net",
        "b": "esea",
        "u": "http://play.esea.net/index.php?s=search&query={{{s}}}"
    },
    {
        "d": "www.electric-skateboard.builders",
        "b": "esk8",
        "u": "https://www.electric-skateboard.builders/search?q={{{s}}}"
    },
    {
        "d": "esotalk.net",
        "b": "esotalk",
        "u": "https://esotalk.net/#search:{{{s}}}"
    },
    {
        "d": "cod.esportspedia.com",
        "b": "espcod",
        "u": "http://cod.esportspedia.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "halo.esportspedia.com",
        "b": "esphalo",
        "u": "http://halo.esportspedia.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "lol.esportspedia.com",
        "b": "esplol",
        "u": "http://lol.esportspedia.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.espn.com",
        "b": "espn",
        "u": "http://www.espn.com/search/results?q={{{s}}}"
    },
    {
        "d": "smite.esportspedia.com",
        "b": "espsmite",
        "u": "http://smite.esportspedia.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.esrb.org",
        "b": "esrb",
        "u": "http://www.esrb.org/ratings/search.jsp?titleOrPublisher={{{s}}}"
    },
    {
        "d": "www.etcconnect.com",
        "b": "etc",
        "u": "https://www.etcconnect.com/Search.aspx?q={{{s}}}"
    },
    {
        "d": "eternalwarcry.com",
        "b": "eternalwarcry",
        "u": "https://eternalwarcry.com/cards?Query={{{s}}}"
    },
    {
        "d": "etf2l.org",
        "b": "etf2l",
        "u": "http://etf2l.org/search/{{{s}}}/"
    },
    {
        "d": "enterthegungeon.gamepedia.com",
        "b": "etg",
        "u": "http://enterthegungeon.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.eu3wiki.com",
        "b": "eu3",
        "u": "http://www.eu3wiki.com/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "eu4.paradoxwikis.com",
        "b": "eu4",
        "u": "https://eu4.paradoxwikis.com/index.php?search={{{s}}}"
    },
    {
        "d": "eu4.paradoxwikis.com",
        "b": "eu4wiki",
        "u": "https://eu4.paradoxwikis.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.eurogamer.net",
        "b": "eurogamer",
        "u": "http://www.eurogamer.net/search.php?q={{{s}}}"
    },
    {
        "d": "euw.op.gg",
        "b": "euw.op",
        "u": "http://euw.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "eve-central.com",
        "b": "evecentral",
        "u": "https://eve-central.com/home/typesearch.html?search={{{s}}}"
    },
    {
        "d": "eve-central.com",
        "b": "evec",
        "u": "http://eve-central.com/home/typesearch.html?search={{{s}}}"
    },
    {
        "d": "wiki.eveonline.com",
        "b": "eve",
        "u": "http://wiki.eveonline.com/en/wiki/Special:Search/{{{s}}} "
    },
    {
        "d": "eve-marketdata.com",
        "b": "evemarket",
        "u": "https://eve-marketdata.com/price_check.php?type_name_header={{{s}}}"
    },
    {
        "d": "eventful.com",
        "b": "eventful",
        "u": "http://eventful.com/events?ga_type=events&ga_search={{{s}}}&q={{{s}}}"
    },
    {
        "d": "www.eventim.de",
        "b": "eventim",
        "u": "http://www.eventim.de/Tickets.html?affiliate=TUG&fun=search&fuzzy=yes&doc=search&action=grouped&inline=false&suchbegriff={{{s}}}&btn=true&x10=4"
    },
    {
        "d": "www.everyeye.it",
        "b": "everyeye",
        "u": "http://www.everyeye.it/ricerca/?q={{{s}}}"
    },
    {
        "d": "eve-search.com",
        "b": "evesearch",
        "u": "http://eve-search.com/search/{{{s}}}"
    },
    {
        "d": "wiki.eveuniversity.org",
        "b": "eveu",
        "u": "http://wiki.eveuniversity.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "wiki.eveuniversity.org",
        "b": "eveuni",
        "u": "http://wiki.eveuniversity.org/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.eauxvives.org",
        "b": "evo",
        "u": "http://www.eauxvives.org/forum/search.php?keywords={{{s}}}"
    },
    {
        "d": "eternalwarcry.com",
        "b": "ewc",
        "u": "https://eternalwarcry.com/cards?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ew",
        "u": "https://duckduckgo.com/?q=site%3Aew.com+{{{s}}}"
    },
    {
        "d": "www.ex-astris-scientia.org",
        "b": "exastris",
        "u": "http://www.ex-astris-scientia.org/search/search.cgi?Terms={{{s}}}:"
    },
    {
        "d": "www.exclusiveclue.com",
        "b": "exc",
        "u": "http://www.exclusiveclue.com/?term={{{s}}}"
    },
    {
        "d": "www.explainxkcd.com",
        "b": "exkcd",
        "u": "http://www.explainxkcd.com/wiki/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "www.explainxkcd.com",
        "b": "explainxkcd",
        "u": "http://www.explainxkcd.com/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.explara.com",
        "b": "explara",
        "u": "https://www.explara.com/search/{{{s}}}"
    },
    {
        "d": "www.explainxkcd.com",
        "b": "expxkcd",
        "u": "http://www.explainxkcd.com/wiki/index.php?search={{{s}}}&go=Go&title=Special%3ASearch"
    },
    {
        "d": "www.nexusmods.com",
        "b": "f3nm",
        "u": "https://www.nexusmods.com/fallout3/search/?gsearch={{{s}}}&gsearchtype=mods"
    },
    {
        "d": "fordsix.com",
        "b": "f6",
        "u": "https://fordsix.com/search.php?keywords={{{s}}}"
    },
    {
        "d": "forum.facepunch.com",
        "b": "facepunch",
        "u": "https://forum.facepunch.com/search/?q={{{s}}}"
    },
    {
        "d": "wiki.factorio.com",
        "b": "factorio",
        "u": "https://wiki.factorio.com/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "mods.factorio.com",
        "b": "factoriomods",
        "u": "https://mods.factorio.com/query/{{{s}}}"
    },
    {
        "d": "www.filmaffinity.com",
        "b": "faff",
        "u": "http://www.filmaffinity.com/es/search.php?stext={{{s}}} &stype=all"
    },
    {
        "d": "www.filmaffinity.com",
        "b": "faf",
        "u": "http://www.filmaffinity.com/es/advsearch2.php?cx=008177178803676006601%3A6zmc6j5pngs&cof=FORID%3A9&ie=ISO-8859-1&q={{{s}}}:"
    },
    {
        "d": "www.filmaffinity.com",
        "b": "fa",
        "u": "http://www.filmaffinity.com/es/search.php?stext={{{s}}}&stype=all"
    },
    {
        "d": "fallenlondon.wikia.com",
        "b": "fallenlondon",
        "u": "http://fallenlondon.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "fallout.wikia.com",
        "b": "fallout",
        "u": "http://fallout.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "fallout.gamepedia.com",
        "b": "falloutlore",
        "u": "https://fallout.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.fancade.com",
        "b": "fancade",
        "u": "http://www.fancade.com/search/?q={{{s}}}"
    },
    {
        "d": "www.fandango.com",
        "b": "fandango",
        "u": "http://www.fandango.com/search/?q={{{s}}}"
    },
    {
        "d": "www.fandom.com",
        "b": "fandom",
        "u": "https://www.fandom.com/?s={{{s}}}"
    },
    {
        "d": "www.fangraphs.com",
        "b": "fangraphs",
        "u": "http://www.fangraphs.com/players.aspx?lastname={{{s}}}"
    },
    {
        "d": "www.fansale.de",
        "b": "fansale",
        "u": "https://www.fansale.de/fansale/events.htm?searchText={{{s}}}"
    },
    {
        "d": "www.fantagraphics.com",
        "b": "fantagraphics",
        "u": "http://www.fantagraphics.com/index.php?keyword={{{s}}}"
    },
    {
        "d": "fantasy-life.wikia.com",
        "b": "fantasylife",
        "u": "http://fantasy-life.wikia.com/wiki/{{{s}}}"
    },
    {
        "d": "www.fashionmodeldirectory.com",
        "b": "fashionmodeldirectory",
        "u": "http://www.fashionmodeldirectory.com/search/?q={{{s}}}"
    },
    {
        "d": "fastu.be",
        "b": "fastube",
        "u": "http://fastu.be/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "fbg",
        "u": "https://duckduckgo.com/?q=site%3Afootballguys.com+{{{s}}}"
    },
    {
        "d": "mbasic.facebook.com",
        "b": "fblite",
        "u": "https://mbasic.facebook.com/search/?refid=46&search=people&search_source=search_bar&query={{{s}}}"
    },
    {
        "d": "www.pro-football-reference.com",
        "b": "fbr",
        "u": "http://www.pro-football-reference.com/player_search.fcgi?search={{{s}}}"
    },
    {
        "d": "www.fbschedules.com",
        "b": "fbs",
        "u": "http://www.fbschedules.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.fcbayern.de",
        "b": "fcbar",
        "u": "http://www.fcbayern.de/ar/search#search={{{s}}}&chronology=chrono"
    },
    {
        "d": "www.fcbayern.de",
        "b": "fcben",
        "u": "http://www.fcbayern.de/en/search#search={{{s}}}&chronology=chrono"
    },
    {
        "d": "www.fcbayern.de",
        "b": "fcbes",
        "u": "http://www.fcbayern.de/es/search#search={{{s}}}&chronology=chrono"
    },
    {
        "d": "www.fcbayern.de",
        "b": "fcb",
        "u": "http://www.fcbayern.de/de/search#search={{{s}}}&chronology=chrono"
    },
    {
        "d": "www.fcbayern.de",
        "b": "fcbjp",
        "u": "http://www.fcbayern.de/jp/search#search={{{s}}}&chronology=chrono"
    },
    {
        "d": "www.fcbayern.de",
        "b": "fcbru",
        "u": "http://www.fcbayern.de/ru/search#search={{{s}}}&chronology=chrono"
    },
    {
        "d": "www.fcbayernmunich.com",
        "b": "fcbus",
        "u": "http://www.fcbayernmunich.com/us/search#search={{{s}}}&chronology=chrono"
    },
    {
        "d": "www.forocoches.com",
        "b": "fcc",
        "u": "http://www.forocoches.com/foro/search.php?do=process&titleonly=1&query={{{s}}}"
    },
    {
        "d": "www.franceculture.fr",
        "b": "fculture",
        "u": "https://www.franceculture.fr/recherche?q={{{s}}}"
    },
    {
        "d": "www.fdb.cz",
        "b": "fdb",
        "u": "http://www.fdb.cz/vyhledavani.php?co=vsechno&hledat={{{s}}}"
    },
    {
        "d": "fdb.pl",
        "b": "fdbpl",
        "u": "https://fdb.pl/szukaj?utf8=✓&query={{{s}}}"
    },
    {
        "d": "fireemblem.fandom.com",
        "b": "fe7",
        "u": "https://fireemblem.fandom.com/search?query={{{s}}}"
    },
    {
        "d": "blog.fefe.de",
        "b": "fefe",
        "u": "https://blog.fefe.de/?q={{{s}}}"
    },
    {
        "d": "feheroes.gamepedia.com",
        "b": "feh",
        "u": "https://feheroes.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "feheroes.gamepedia.com",
        "b": "fehw",
        "u": "https://feheroes.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "edwardfeser.blogspot.com",
        "b": "feser",
        "u": "https://edwardfeser.blogspot.com/search?q={{{s}}} "
    },
    {
        "d": "fireemblemwiki.org",
        "b": "few",
        "u": "https://fireemblemwiki.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "fireemblemwiki.org",
        "b": "fewiki",
        "u": "https://fireemblemwiki.org/w/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "darksouls3.wiki.fextralife.com",
        "b": "fextrads3",
        "u": "https://darksouls3.wiki.fextralife.com/{{{s}}}"
    },
    {
        "d": "foundfootagecritic.com",
        "b": "ffc",
        "u": "http://foundfootagecritic.com/?s={{{s}}}"
    },
    {
        "d": "www.fanfiction.net",
        "b": "ff",
        "u": "http://www.fanfiction.net/search.php?type=story&keywords={{{s}}}&match=title&sort=0&genreid=0&subgenreid=0&characterid=0&subcharacterid=0&words=0&ready=1&categoryid=0"
    },
    {
        "d": "ff14.inven.co.kr",
        "b": "ffinv",
        "u": "http://ff14.inven.co.kr/dataninfo/item/?itemname={{{s}}}&datagroup=search"
    },
    {
        "d": "www.fanfiction.net",
        "b": "ffn",
        "u": "https://www.fanfiction.net/search/?keywords={{{s}}}&ready=1&type=story"
    },
    {
        "d": "www.fanfiction.net",
        "b": "ffstory",
        "u": "https://www.fanfiction.net/search.php?keywords={{{s}}}&type=story&match=any&formatid=any&sort=0&genreid1=0&genreid2=0&characterid1=0&characterid2=0&characterid3=0&characterid4=0&words=0&ready=1&categoryid=0"
    },
    {
        "d": "www.fanfiction.net",
        "b": "ffw",
        "u": "https://www.fanfiction.net/search.php?type=writer&keywords={{{s}}}&match=title&sort=0&genreid=0&subgenreid=0&characterid=0&subcharacterid=0&words=0&ready=1&categoryid=0#"
    },
    {
        "d": "finalfantasy.wikia.com",
        "b": "ffwiki",
        "u": "http://finalfantasy.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "ffxiv.consolegameswiki.com",
        "b": "ffxiv",
        "u": "https://ffxiv.consolegameswiki.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "ffxivteamcraft.com",
        "b": "ffxivtc",
        "u": "https://ffxivteamcraft.com/search?query={{{s}}}&onlyRecipes=true"
    },
    {
        "d": "www.frankerfacez.com",
        "b": "ffz",
        "u": "http://www.frankerfacez.com/emoticons/?q={{{s}}}"
    },
    {
        "d": "www.fangraphs.com",
        "b": "fg",
        "u": "http://www.fangraphs.com/players.aspx?lastname={{{s}}}"
    },
    {
        "d": "www.flightgear.org",
        "b": "fgf",
        "u": "http://www.flightgear.org/forums/search.php?keywords={{{s}}}"
    },
    {
        "d": "fategrandorder.wikia.com",
        "b": "fgow",
        "u": "http://fategrandorder.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "ficly.com",
        "b": "ficly",
        "u": "http://ficly.com/search?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "fiddling",
        "u": "https://duckduckgo.com/?q=site%3Agladyscelticcorner.com+{{{s}}}"
    },
    {
        "d": "ratings.fide.com",
        "b": "fide",
        "u": "https://ratings.fide.com/search.phtml?search={{{s}}}"
    },
    {
        "d": "www.fifa.com",
        "b": "fifa",
        "u": "https://www.fifa.com/search/?q={{{s}}}"
    },
    {
        "d": "thefifthcity.wikia.com",
        "b": "fifthcity",
        "u": "http://thefifthcity.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "m.filmaffinity.com",
        "b": "filmaffinityes",
        "u": "https://m.filmaffinity.com/es/search.php?stext={{{s}}}"
    },
    {
        "d": "www.filmaffinity.com",
        "b": "filmaffinity",
        "u": "https://www.filmaffinity.com/en/search.php?stext={{{s}}}"
    },
    {
        "d": "filmanic.com",
        "b": "filmanic",
        "u": "https://filmanic.com/search-for-movies-actors-directors/?q={{{s}}}"
    },
    {
        "d": "filmartgallery.com",
        "b": "filmart",
        "u": "https://filmartgallery.com/pages/search-results?q={{{s}}}"
    },
    {
        "d": "www.filmon.tv",
        "b": "filmon",
        "u": "http://www.filmon.tv/search/?term={{{s}}}"
    },
    {
        "d": "www.filmportal.de",
        "b": "filmportal.de",
        "u": "https://www.filmportal.de/search?search_api_fulltext={{{s}}}"
    },
    {
        "d": "filmracket.com",
        "b": "filmracket",
        "u": "http://filmracket.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.filmsarecool.com",
        "b": "films",
        "u": "http://www.filmsarecool.com/#search={{{s}}} "
    },
    {
        "d": "www.filmstarts.de",
        "b": "filmstarts",
        "u": "http://www.filmstarts.de/suche/?q={{{s}}}"
    },
    {
        "d": "www.film.tv",
        "b": "filmtvde",
        "u": "https://www.film.tv/google-suchergebnisse.html?cx=partner-pub-3004436243331931%3A1982226405&query={{{s}}}"
    },
    {
        "d": "www.filmtv.it",
        "b": "filmtv",
        "u": "http://www.filmtv.it/cerca/?q={{{s}}}"
    },
    {
        "d": "www.filmweb.pl",
        "b": "filmweb",
        "u": "http://www.filmweb.pl/search?q={{{s}}}"
    },
    {
        "d": "www.fimfiction.net",
        "b": "fimfic",
        "u": "https://www.fimfiction.net/stories?q={{{s}}}"
    },
    {
        "d": "www.fimfiction.net",
        "b": "fimfiction",
        "u": "https://www.fimfiction.net/stories?q={{{s}}}"
    },
    {
        "d": "www.fimfiction.net",
        "b": "fim",
        "u": "https://www.fimfiction.net/stories?q={{{s}}}"
    },
    {
        "d": "finalfantasy.wikia.com",
        "b": "finalfantasy",
        "u": "http://finalfantasy.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.findanyfilm.com",
        "b": "findanyfilm",
        "u": "http://www.findanyfilm.com/search?term={{{s}}}"
    },
    {
        "d": "www.finnkino.fi",
        "b": "finnkinoen",
        "u": "http://www.finnkino.fi/eng/Search/?query={{{s}}}"
    },
    {
        "d": "www.finnkino.fi",
        "b": "finnkino",
        "u": "http://www.finnkino.fi/Search?query={{{s}}}"
    },
    {
        "d": "finofilipino.org",
        "b": "fino",
        "u": "https://finofilipino.org/?s={{{s}}}"
    },
    {
        "d": "www.fip.fr",
        "b": "fip",
        "u": "https://www.fip.fr/player/{{{s}}}"
    },
    {
        "d": "firstpagefitness.com",
        "b": "firstpagefitness",
        "u": "https://firstpagefitness.com/?s={{{s}}}"
    },
    {
        "d": "funnyjunk.com",
        "b": "fj",
        "u": "http://funnyjunk.com/search/?q={{{s}}}"
    },
    {
        "d": "fkk-freunde.info",
        "b": "fkk",
        "u": "http://fkk-freunde.info/search.php?keywords={{{s}}}"
    },
    {
        "d": "flat.io",
        "b": "flatmusic",
        "u": "https://flat.io/search?q={{{s}}}"
    },
    {
        "d": "www.flickchart.com",
        "b": "flickchart",
        "u": "http://www.flickchart.com/SearchResults.aspx?s={{{s}}}"
    },
    {
        "d": "www.flicks.co.nz",
        "b": "flicks",
        "u": "https://www.flicks.co.nz/search/?q={{{s}}}"
    },
    {
        "d": "www.flipjuke.fr",
        "b": "flipjuke",
        "u": "http://www.flipjuke.fr/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.flixster.com",
        "b": "flix",
        "u": "http://www.flixster.com/search/?search={{{s}}} "
    },
    {
        "d": "www.floptv.tv",
        "b": "floptv",
        "u": "http://www.floptv.tv/search/?q={{{s}}}"
    },
    {
        "d": "fm4.orf.at",
        "b": "fm4",
        "u": "http://fm4.orf.at/search?q={{{s}}}&sort=date_desc&submit.x=0&submit.y=0"
    },
    {
        "d": "www.fashionmodeldirectory.com",
        "b": "fmd",
        "u": "http://www.fashionmodeldirectory.com/search/?q={{{s}}}"
    },
    {
        "d": "www.fightmatrix.com",
        "b": "fmx",
        "u": "http://www.fightmatrix.com/fighter-search/?fName={{{s}}}"
    },
    {
        "d": "freddy-fazbears-pizza.fandom.com",
        "b": "fnaf",
        "u": "https://freddy-fazbears-pizza.fandom.com/search?query={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "fnite",
        "u": "https://www.reddit.com/r/FortNiteBR/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "www.nexusmods.com",
        "b": "fnvnm",
        "u": "https://www.nexusmods.com/newvegas/search/?gsearch={{{s}}}&gsearchtype=mods"
    },
    {
        "d": "zoeken.fok.nl",
        "b": "fok",
        "u": "http://zoeken.fok.nl/zoek/?searchmode=simple&tab=fok&startdate=&enddate=&startdatelast=&enddatelast=&bycreator=&byuser=&orderby=relevance&s_fields[]=titel&s_fields[]=bericht&s_fields[]=reacties&status[]=open&status[]=gesloten&status[]=sticky&status[]=openstick&status[]=centraal&q={{{s}}}"
    },
    {
        "d": "food2fork.com",
        "b": "food2fork",
        "u": "http://food2fork.com/top?q={{{s}}}"
    },
    {
        "d": "www.foodnetwork.com",
        "b": "foodnetwork",
        "u": "http://www.foodnetwork.com/search/delegate.do?fnSearchString={{{s}}}&fnSearchType=site"
    },
    {
        "d": "fordsix.com",
        "b": "fordsix",
        "u": "https://fordsix.com/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.forewordreviews.com",
        "b": "forewordreviews",
        "u": "https://www.forewordreviews.com/search/?q={{{s}}}"
    },
    {
        "d": "fortnite.gamepedia.com",
        "b": "fort",
        "u": "https://fortnite.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "epicgames.com",
        "b": "fortnite",
        "u": "http://epicgames.com/fortnite/en-US/search?q={{{s}}}"
    },
    {
        "d": "fortnitestats.com",
        "b": "fortnitestats",
        "u": "https://fortnitestats.com/stats/{{{s}}}"
    },
    {
        "d": "www.fotbollskanalen.se",
        "b": "fotbollskanalen",
        "u": "http://www.fotbollskanalen.se/sok?q={{{s}}}"
    },
    {
        "d": "www.fotmob.com",
        "b": "fot",
        "u": "https://www.fotmob.com/search?q={{{s}}}"
    },
    {
        "d": "www.fowtcg.com",
        "b": "fow",
        "u": "http://www.fowtcg.com/cards?w={{{s}}}"
    },
    {
        "d": "www.fowsystem.com",
        "b": "fowg",
        "u": "https://www.fowsystem.com/de/Kartendatenbank?page=&CERCA=cerca&cardname={{{s}}}&block=ALL&edition=ALL&REGATT=or&cardnumber=&ABILITYTEXT=&ATKMIN=0&ATKMAX=2500&DEFMIN=0&DEFMAX=2500"
    },
    {
        "d": "fallout.wikia.com",
        "b": "fowiki",
        "u": "http://fallout.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1"
    },
    {
        "d": "www.foxlife.it",
        "b": "foxlifeit",
        "u": "https://www.foxlife.it/search/?q={{{s}}}"
    },
    {
        "d": "www.foxsports.it",
        "b": "foxsportsit",
        "u": "https://www.foxsports.it/?q={{{s}}}"
    },
    {
        "d": "www.fictionpress.com",
        "b": "fpstory",
        "u": "https://www.fictionpress.com/search/?keywords={{{s}}}&ready=1&type=story"
    },
    {
        "d": "forum.facepunch.com",
        "b": "fpunch",
        "u": "https://forum.facepunch.com/search/?q={{{s}}}"
    },
    {
        "d": "www.fictionpress.com",
        "b": "fpwriter",
        "u": "https://www.fictionpress.com/search/?keywords={{{s}}}&ready=1&type=writer"
    },
    {
        "d": "frinkiac.com",
        "b": "frinkiac",
        "u": "https://frinkiac.com/?p=search&q={{{s}}}"
    },
    {
        "d": "www.friskyradio.com",
        "b": "frisky",
        "u": "https://www.friskyradio.com/search/?q={{{s}}}"
    },
    {
        "d": "forgottenrealms.fandom.com",
        "b": "frwiki",
        "u": "https://forgottenrealms.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.fernsehserien.de",
        "b": "fsde",
        "u": "http://www.fernsehserien.de/suche/{{{s}}}"
    },
    {
        "d": "www.freesteamkeys.com",
        "b": "fsk",
        "u": "https://www.freesteamkeys.com/search_gcse/?q={{{s}}}"
    },
    {
        "d": "ftb.gamepedia.com",
        "b": "ftb",
        "u": "http://ftb.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "ftb.gamepedia.com",
        "b": "ftbwiki",
        "u": "https://ftb.gamepedia.com/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "ftl.wikia.com",
        "b": "ftl",
        "u": "http://ftl.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "wiki.factorio.com",
        "b": "ftw",
        "u": "https://wiki.factorio.com/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "www.fujitv.co.jp",
        "b": "fuji",
        "u": "https://www.fujitv.co.jp/search/index.html?keyword={{{s}}}"
    },
    {
        "d": "wtffunfact.com",
        "b": "funfact",
        "u": "https://wtffunfact.com/?s={{{s}}}"
    },
    {
        "d": "filmup.leonardo.it",
        "b": "fup",
        "u": "http://filmup.leonardo.it/cgi-bin/search.cgi?ps=10&fmt=long&sy=0&q={{{s}}}"
    },
    {
        "d": "fusionfall.wikia.com",
        "b": "fusionfall",
        "u": "http://fusionfall.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "fuska.nu",
        "b": "fuskanuforum",
        "u": "http://fuska.nu/forum/sok.php?sok={{{s}}}"
    },
    {
        "d": "www.fussballdaten.de",
        "b": "fussballdaten",
        "u": "http://www.fussballdaten.de/suche/?{{{s}}}"
    },
    {
        "d": "www.fussball.de",
        "b": "fussball",
        "u": "http://www.fussball.de/suche/-/text/{{{s}}}"
    },
    {
        "d": "www.futbin.com",
        "b": "futbin",
        "u": "https://www.futbin.com/players?search={{{s}}}"
    },
    {
        "d": "www.futhead.com",
        "b": "futhead",
        "u": "http://www.futhead.com/16/players/?name={{{s}}}"
    },
    {
        "d": "www.theinfosphere.org",
        "b": "futurama",
        "u": "http://www.theinfosphere.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.freeview.com.au",
        "b": "fviewau",
        "u": "http://www.freeview.com.au/tv-search/?search={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.filmweb.pl",
        "b": "fwb",
        "u": "https://www.filmweb.pl/search?q={{{s}}}"
    },
    {
        "d": "www.fxp.co.il",
        "b": "fxp",
        "u": "https://www.fxp.co.il/google.php?q={{{s}}}"
    },
    {
        "d": "fyyd.de",
        "b": "fyyd",
        "u": "https://fyyd.de/search?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "fz",
        "u": "https://duckduckgo.com/?q=site%3Afz.se+{{{s}}}"
    },
    {
        "d": "www.g2play.net",
        "b": "g2play",
        "u": "http://www.g2play.net/catalogsearch/result/index/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "gal",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:abretelibro.com"
    },
    {
        "d": "www.gamasutra.com",
        "b": "gamasutra",
        "u": "http://www.gamasutra.com/search/?search_text={{{s}}}"
    },
    {
        "d": "direct3d.ir",
        "b": "gam",
        "u": "http://direct3d.ir/forum/search/?keywords={{{s}}}"
    },
    {
        "d": "gamebanana.com",
        "b": "gamebanana",
        "u": "http://gamebanana.com/skins/search?search={{{s}}} "
    },
    {
        "d": "www.cheatcc.com",
        "b": "gamecheats",
        "u": "http://www.cheatcc.com/search_results.html?sitesearch=CheatCC.com&domains=CheatCC.com&q={{{s}}}&sa=Google+Search&client=pub-7081624040320322&forid=1&ie=UTF8&oe=UTF8&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%230000FF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A0%3BLW%3A0%3BL%3Ahttp%3A%2F%2Fwww.cheatcc.com%2Fccclink.gif%3BS%3Ahttp%3A%2F%2Fwww.cheatcc.com%2Findex2.html%3BFORID%3A11"
    },
    {
        "d": "www.gamefaqs.com",
        "b": "gamefaqs",
        "u": "http://www.gamefaqs.com/search/index.html?game={{{s}}}&platform=0"
    },
    {
        "d": "www.gameinformer.com",
        "b": "gameinformer",
        "u": "https://www.gameinformer.com/search?keyword={{{s}}}"
    },
    {
        "d": "gamejolt.com",
        "b": "gamejolt",
        "u": "http://gamejolt.com/search/?q={{{s}}}"
    },
    {
        "d": "www.gamekings.tv",
        "b": "gamekings",
        "u": "http://www.gamekings.tv/index.php?cat=3&s={{{s}}}"
    },
    {
        "d": "www.gamekult.com",
        "b": "gamekult",
        "u": "https://www.gamekult.com/rechercher-jeu.html?q={{{s}}}"
    },
    {
        "d": "games.gamepressure.com",
        "b": "gamepressure",
        "u": "http://games.gamepressure.com/games_encyclopedia.asp?search={{{s}}}"
    },
    {
        "d": "www.gamerankings.com",
        "b": "gamerankings",
        "u": "http://www.gamerankings.com/browse.html?search={{{s}}}"
    },
    {
        "d": "www.gamergen.com",
        "b": "gamergen",
        "u": "http://www.gamergen.com/s/{{{s}}}"
    },
    {
        "d": "gamersgate.com",
        "b": "gamersgate",
        "u": "http://gamersgate.com/games?q={{{s}}}"
    },
    {
        "d": "www.crazygames.com",
        "b": "games",
        "u": "https://www.crazygames.com/search?q={{{s}}}"
    },
    {
        "d": "games.lol",
        "b": "gameslol",
        "u": "https://games.lol/search/{{{s}}}"
    },
    {
        "d": "www.gamespot.com",
        "b": "gamespot",
        "u": "http://www.gamespot.com/search/?q={{{s}}}"
    },
    {
        "d": "www.gamesradar.com",
        "b": "gamesradar",
        "u": "https://www.gamesradar.com/search/?searchTerm={{{s}}}"
    },
    {
        "d": "www.gamestar.de",
        "b": "gamestar",
        "u": "http://www.gamestar.de/index.cfm?pid=109&s={{{s}}}"
    },
    {
        "d": "www.gamestop.com",
        "b": "gamestop",
        "u": "https://www.gamestop.com/search/?q={{{s}}}&lang=default"
    },
    {
        "d": "www.gamezebo.com",
        "b": "gamezebo",
        "u": "http://www.gamezebo.com/search/games?query={{{s}}}"
    },
    {
        "d": "gaming.stackexchange.com",
        "b": "gaming",
        "u": "http://gaming.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "thegamingbox.pfweb.eu",
        "b": "gamingbox",
        "u": "http://thegamingbox.pfweb.eu/?s={{{s}}}"
    },
    {
        "d": "www.gardenersworld.com",
        "b": "gardenersworld",
        "u": "http://www.gardenersworld.com/search/{{{s}}}"
    },
    {
        "d": "www.garrysmart.com",
        "b": "garrysmart",
        "u": "https://www.garrysmart.com/scripts/?&t=a&q={{{s}}}"
    },
    {
        "d": "gatherer.wizards.com",
        "b": "gatherer",
        "u": "http://gatherer.wizards.com/Pages/Search/Default.aspx?name=+[{{{s}}}]"
    },
    {
        "d": "gamebanana.com",
        "b": "gban",
        "u": "http://gamebanana.com/skins/search?search={{{s}}} "
    },
    {
        "d": "gbf.wiki",
        "b": "gbf",
        "u": "https://gbf.wiki/index.php?search={{{s}}}"
    },
    {
        "d": "gamebanana.com",
        "b": "gbn",
        "u": "http://gamebanana.com/search?query={{{s}}}"
    },
    {
        "d": "german-bash.org",
        "b": "gbo",
        "u": "http://german-bash.org/?searchtext={{{s}}}&search_in=both&action=search_"
    },
    {
        "d": "de.creepypasta.wikia.com",
        "b": "gcw",
        "u": "http://de.creepypasta.wikia.com/wiki/Spezial:Suche?query={{{s}}}"
    },
    {
        "d": "ffxiv.gamerescape.com",
        "b": "gearr",
        "u": "http://ffxiv.gamerescape.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.geeks-curiosity.net",
        "b": "geek",
        "u": "https://www.geeks-curiosity.net/?s={{{s}}}"
    },
    {
        "d": "www.geenstijl.nl",
        "b": "geenstijl",
        "u": "http://www.geenstijl.nl/fastsearch?query={{{s}}}&zoek=zoek"
    },
    {
        "d": "gematsu.com",
        "b": "gematsu",
        "u": "https://gematsu.com/?s={{{s}}}"
    },
    {
        "d": "genius.com",
        "b": "gen",
        "u": "http://genius.com/search?q={{{s}}}"
    },
    {
        "d": "genickbruch.com",
        "b": "genickbruch",
        "u": "http://genickbruch.com/index.php?befehl=suche&sname={{{s}}}"
    },
    {
        "d": "www.geocaching.com",
        "b": "geocache",
        "u": "http://www.geocaching.com/seek/nearest.aspx?key={{{s}}}"
    },
    {
        "d": "www.geocaching.com",
        "b": "geocaching",
        "u": "http://www.geocaching.com/seek/nearest.aspx?key={{{s}}}"
    },
    {
        "d": "www.ge-tracker.com",
        "b": "getracker",
        "u": "https://www.ge-tracker.com/names/{{{s}}}"
    },
    {
        "d": "geniusfactory.fr",
        "b": "gfactory",
        "u": "http://geniusfactory.fr/search/{{{s}}}"
    },
    {
        "d": "www.gamefaqs.com",
        "b": "gfaq",
        "u": "http://www.gamefaqs.com/search/index.html?game={{{s}}}"
    },
    {
        "d": "www.gamefaqs.com",
        "b": "gfaqs",
        "u": "http://www.gamefaqs.com/search/index.html?game={{{s}}}&platform=0"
    },
    {
        "d": "en.gfwiki.com",
        "b": "gfwiki",
        "u": "https://en.gfwiki.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.graffx.fr",
        "b": "gfx",
        "u": "http://www.graffx.fr/blabla/index.php?q={{{s}}}"
    },
    {
        "d": "www.giallozafferano.it",
        "b": "giallozafferano",
        "u": "https://www.giallozafferano.it/ricerca-ricette/{{{s}}}"
    },
    {
        "d": "www.giantbomb.com",
        "b": "giantbomb",
        "u": "http://www.giantbomb.com/search/?q={{{s}}}"
    },
    {
        "d": "www.giant-bicycles.com",
        "b": "giant",
        "u": "https://www.giant-bicycles.com/global/search?keyword={{{s}}}"
    },
    {
        "d": "gif-finder.com",
        "b": "giff",
        "u": "http://gif-finder.com/?s={{{s}}}"
    },
    {
        "d": "www.gizoogle.net",
        "b": "gizoogle",
        "u": "http://www.gizoogle.net/index.php?search={{{s}}}"
    },
    {
        "d": "www.gamekult.com",
        "b": "gk",
        "u": "https://www.gamekult.com/rechercher-jeu.html?q={{{s}}}"
    },
    {
        "d": "globoesporte.globo.com",
        "b": "globoesporte",
        "u": "https://globoesporte.globo.com/busca/?q={{{s}}}"
    },
    {
        "d": "www.gocomics.com",
        "b": "gocomics",
        "u": "https://www.gocomics.com/search/results?utf8=%E2%9C%93&terms={{{s}}}"
    },
    {
        "d": "www.gutsofdarkness.com",
        "b": "god",
        "u": "http://www.gutsofdarkness.com/god/recherche.php?r1={{{s}}}"
    },
    {
        "d": "wiki.godvillegame.com",
        "b": "godville",
        "u": "http://wiki.godvillegame.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.gogdb.org",
        "b": "gogdb",
        "u": "https://www.gogdb.org/products?search={{{s}}}"
    },
    {
        "d": "www.gog.com",
        "b": "gog",
        "u": "https://www.gog.com/games?search={{{s}}}"
    },
    {
        "d": "gunsoficarusonline.fandom.com",
        "b": "goiw",
        "u": "https://gunsoficarusonline.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "gokifu.com",
        "b": "gokifu",
        "u": "http://gokifu.com/index.php?q={{{s}}}"
    },
    {
        "d": "www.goldenmoustache.com",
        "b": "goldenmoustache",
        "u": "http://www.goldenmoustache.com/?s={{{s}}}"
    },
    {
        "d": "www.golfparks.ch",
        "b": "golfparks",
        "u": "http://www.golfparks.ch/de/suche?q={{{s}}}"
    },
    {
        "d": "www.gamingonlinux.com",
        "b": "gol",
        "u": "http://www.gamingonlinux.com/index.php?module=search&q={{{s}}}"
    },
    {
        "d": "golivelively.com",
        "b": "golivelively",
        "u": "http://golivelively.com/tag/{{{s}}}"
    },
    {
        "d": "gossiponthis.com",
        "b": "gonthis",
        "u": "http://gossiponthis.com/search/{{{s}}}"
    },
    {
        "d": "goodfil.ms",
        "b": "goodfilms",
        "u": "http://goodfil.ms/search?term={{{s}}}"
    },
    {
        "d": "goout.net",
        "b": "gooutbrno",
        "u": "https://goout.net/cs/brno/#\"?\":\"{{{s}}}\""
    },
    {
        "d": "goout.net",
        "b": "gooutprague",
        "u": "https://goout.net/cs/praha/#\"?\":\"{{{s}}}\""
    },
    {
        "d": "www.goproblog.nl",
        "b": "goproblog",
        "u": "https://www.goproblog.nl/component/search/?searchword={{{s}}}"
    },
    {
        "d": "www.legorafi.fr",
        "b": "gorafi",
        "u": "http://www.legorafi.fr/?s={{{s}}}"
    },
    {
        "d": "almanach.worldofgothic.de",
        "b": "gothic",
        "u": "https://almanach.worldofgothic.de/index.php/Spezial:Suche?search={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "gotrade",
        "u": "https://www.reddit.com/r/GlobalOffensiveTrade/search?q={{{s}}}&restrict_sr=on&sort=new&t=all"
    },
    {
        "d": "play.google.com",
        "b": "gpm",
        "u": "https://play.google.com/music/listen#/sr/{{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "gpmusic",
        "u": "https://play.google.com/music/listen?u=0#/sr/{{{s}}}"
    },
    {
        "d": "www.findagrave.com",
        "b": "grave",
        "u": "http://www.findagrave.com/php/famous.php?globalSearchCriteria={{{s}}}"
    },
    {
        "d": "www.beppegrillo.it",
        "b": "grillo",
        "u": "http://www.beppegrillo.it/google_cse.html?q={{{s}}}&x=-1208&y=-9"
    },
    {
        "d": "grimdawn.wikia.com",
        "b": "grimd",
        "u": "http://grimdawn.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "duckduckgo.com",
        "b": "grog",
        "u": "https://duckduckgo.com/?q=site%3Alegrog.org+{{{s}}}"
    },
    {
        "d": "www.grouvee.com",
        "b": "grouvee",
        "u": "http://www.grouvee.com/search/?q={{{s}}}"
    },
    {
        "d": "www.gry-online.pl",
        "b": "gryonline",
        "u": "https://www.gry-online.pl/gry/{{{s}}}/"
    },
    {
        "d": "gta.fandom.com",
        "b": "gtawiki",
        "u": "https://gta.fandom.com/search?query={{{s}}}"
    },
    {
        "d": "www.grimtools.com",
        "b": "gtdb",
        "u": "https://www.grimtools.com/db/search?query={{{s}}}"
    },
    {
        "d": "www.glocktalk.com",
        "b": "gtf",
        "u": "https://www.glocktalk.com/search/10717176/?q={{{s}}}&o=date"
    },
    {
        "d": "fr.gta5-mods.com",
        "b": "gtm",
        "u": "https://fr.gta5-mods.com/search/{{{s}}}"
    },
    {
        "d": "growtopia.wikia.com",
        "b": "gtwiki",
        "u": "http://growtopia.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.guardiana.net",
        "b": "guardiana",
        "u": "http://www.guardiana.net/MDG-Database/Search/?search_value={{{s}}} "
    },
    {
        "d": "www.guildwiki.org",
        "b": "guildwiki",
        "u": "http://www.guildwiki.org/index.php?title=Special%3ASearch&redirs=0&search={{{s}}}&fulltext=Search&ns0=1"
    },
    {
        "d": "theamazingworldofgumball.fandom.com",
        "b": "gumball",
        "u": "https://theamazingworldofgumball.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "gundam.wikia.com",
        "b": "gundam",
        "u": "http://gundam.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.gutefrage.net",
        "b": "gutefrage",
        "u": "https://www.gutefrage.net/search?query={{{s}}}"
    },
    {
        "d": "www.gw2bltc.com",
        "b": "gw2bltc",
        "u": "https://www.gw2bltc.com/en/tp/search?name={{{s}}}"
    },
    {
        "d": "wiki-de.guildwars2.com",
        "b": "gw2de",
        "u": "https://wiki-de.guildwars2.com/index.php?search={{{s}}}&go=Seite"
    },
    {
        "d": "gw2efficiency.com",
        "b": "gw2e",
        "u": "https://gw2efficiency.com/account/overview?filter.name={{{s}}}"
    },
    {
        "d": "wiki-fr.guildwars2.com",
        "b": "gw2fr",
        "u": "http://wiki-fr.guildwars2.com/index.php?search={{{s}}}"
    },
    {
        "d": "wiki.guildwars2.com",
        "b": "gw2",
        "u": "https://wiki.guildwars2.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.gw2spidy.com",
        "b": "gw2spidy",
        "u": "http://www.gw2spidy.com/search/{{{s}}}"
    },
    {
        "d": "www.gw2tp.com",
        "b": "gw2tp",
        "u": "https://www.gw2tp.com/search?name={{{s}}}"
    },
    {
        "d": "wiki.guildwars2.com",
        "b": "gw2wiki",
        "u": "http://wiki.guildwars2.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.gwentdb.com",
        "b": "gwentdb",
        "u": "http://www.gwentdb.com/search?search={{{s}}}"
    },
    {
        "d": "gwentify.com",
        "b": "gwentify",
        "u": "http://gwentify.com/cards/?st={{{s}}}"
    },
    {
        "d": "gowatchit.com",
        "b": "gwi",
        "u": "https://gowatchit.com/search?terms={{{s}}}"
    },
    {
        "d": "www.games-workshop.com",
        "b": "gworkshop",
        "u": "https://www.games-workshop.com/searchResults?_dyncharset=UTF-8&_dynSessConf=1497710725317319147&qty=&sorting=&view=&Ntt={{{s}}}"
    },
    {
        "d": "wiki.guildwars.com",
        "b": "gww",
        "u": "https://wiki.guildwars.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.ruilwaarde.nl",
        "b": "habbotrading",
        "u": "http://www.ruilwaarde.nl/?p={{{s}}}"
    },
    {
        "d": "www.romhacking.net",
        "b": "hack",
        "u": "https://www.romhacking.net/?page=hacks&genre=&platform=&game=&category=&perpage=30&order=Date&dir=1&title={{{s}}}&author=&hacksearch=Go"
    },
    {
        "d": "www.halopedia.org",
        "b": "halopedia",
        "u": "http://www.halopedia.org/index.php?search={{{s}}}"
    },
    {
        "d": "harrypotter.wikia.com",
        "b": "harrypotter",
        "u": "http://harrypotter.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "havenmaine.wikia.com",
        "b": "haven",
        "u": "http://havenmaine.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.humblebundle.com",
        "b": "hb",
        "u": "https://www.humblebundle.com/store/search?search={{{s}}}"
    },
    {
        "d": "www.heartbowsmakeup.com",
        "b": "hbm",
        "u": "http://www.heartbowsmakeup.com/?s={{{s}}}"
    },
    {
        "d": "www.homebrewtalk.com",
        "b": "hbt",
        "u": "http://www.homebrewtalk.com/search/?keyword={{{s}}}"
    },
    {
        "d": "www.holidaycheck.de",
        "b": "hc",
        "u": "http://www.holidaycheck.de/schnellsuche.php?q={{{s}}}"
    },
    {
        "d": "www.hockeydb.com",
        "b": "hdb",
        "u": "http://www.hockeydb.com/ihdb/stats/find_player.php?full_name={{{s}}}"
    },
    {
        "d": "www.head-fi.org",
        "b": "head-fi",
        "u": "http://www.head-fi.org/search.php?search={{{s}}}"
    },
    {
        "d": "www.hearthpwn.com",
        "b": "hearthpwn",
        "u": "http://www.hearthpwn.com/search?search={{{s}}}#t1:cards"
    },
    {
        "d": "hearthstone.gamepedia.com",
        "b": "hearthstone",
        "u": "http://hearthstone.gamepedia.com/?search={{{s}}}"
    },
    {
        "d": "hazmeelchingadofavor.com",
        "b": "hecf",
        "u": "http://hazmeelchingadofavor.com/?s={{{s}}}"
    },
    {
        "d": "www.heeza.fr",
        "b": "heeza",
        "u": "http://www.heeza.fr/fr/recherche?orderby=position&orderway=desc&search_query={{{s}}}&submit_search=Rechercher"
    },
    {
        "d": "heroeshearth.com",
        "b": "heroes",
        "u": "https://heroeshearth.com/hero/{{{s}}}/"
    },
    {
        "d": "www.hardcoregaming101.net",
        "b": "hg101",
        "u": "http://www.hardcoregaming101.net/?s={{{s}}}"
    },
    {
        "d": "www.hikr.org",
        "b": "hikr",
        "u": "http://www.hikr.org/cse.php?q={{{s}}}"
    },
    {
        "d": "www.hippressurecooking.com",
        "b": "hip",
        "u": "http://www.hippressurecooking.com/?s={{{s}}} "
    },
    {
        "d": "wiki.hippiestation.com",
        "b": "hippie",
        "u": "https://wiki.hippiestation.com//index.php?title=Special%3ASearch&profile=default&search={{{s}}}"
    },
    {
        "d": "www.hockey-reference.com",
        "b": "hkref",
        "u": "https://www.hockey-reference.com/search/search.fcgi?hint=&search={{{s}}}"
    },
    {
        "d": "hollowknight.wikia.com",
        "b": "hkw",
        "u": "http://hollowknight.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "howlongtobeat.com",
        "b": "hlb",
        "u": "http://howlongtobeat.com/?q={{{s}}}"
    },
    {
        "d": "hugelol.com",
        "b": "hl",
        "u": "http://hugelol.com/search?q={{{s}}}"
    },
    {
        "d": "hlp-search.tproxy.de",
        "b": "hlp",
        "u": "https://hlp-search.tproxy.de/search?q={{{s}}}"
    },
    {
        "d": "howlongtobeat.com",
        "b": "hltb",
        "u": "http://howlongtobeat.com/?q={{{s}}}"
    },
    {
        "d": "www.hltv.org",
        "b": "hltv",
        "u": "https://www.hltv.org/search?query={{{s}}}"
    },
    {
        "d": "www5.atwiki.jp",
        "b": "hmiku",
        "u": "http://www5.atwiki.jp/hmiku/?cmd=search&keyword={{{s}}}"
    },
    {
        "d": "www.hobby-machinist.com",
        "b": "hobby-machinist",
        "u": "http://www.hobby-machinist.com//?={{{s}}}"
    },
    {
        "d": "www.hockeydb.com",
        "b": "hockeydb",
        "u": "http://www.hockeydb.com/ihdb/stats/findplayer.php?full_name={{{s}}}"
    },
    {
        "d": "www.hockey-reference.com",
        "b": "hockeyref",
        "u": "http://www.hockey-reference.com/search/search.fcgi?search={{{s}}}"
    },
    {
        "d": "www.heavenofhorror.com",
        "b": "hoh",
        "u": "https://www.heavenofhorror.com/?s={{{s}}}"
    },
    {
        "d": "www.hoi3wiki.com",
        "b": "hoi3",
        "u": "http://www.hoi3wiki.com/index.php?search={{{s}}}"
    },
    {
        "d": "hoi4.paradoxwikis.com",
        "b": "hoi4",
        "u": "https://hoi4.paradoxwikis.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.homestuck.com",
        "b": "homestuck",
        "u": "https://www.homestuck.com/search?search={{{s}}}"
    },
    {
        "d": "hooktube.com",
        "b": "hook",
        "u": "https://hooktube.com/results?search_query={{{s}}}"
    },
    {
        "d": "hoopshype.com",
        "b": "hooph",
        "u": "http://hoopshype.com/?s={{{s}}}"
    },
    {
        "d": "www.hotstar.com",
        "b": "hotsar",
        "u": "http://www.hotstar.com/search?q={{{s}}}"
    },
    {
        "d": "www.hotstar.com",
        "b": "hotstar",
        "u": "http://www.hotstar.com/search?q={{{s}}}"
    },
    {
        "d": "www.homeoftheunderdogs.net",
        "b": "hotud",
        "u": "http://www.homeoftheunderdogs.net/search.php?search_game={{{s}}}"
    },
    {
        "d": "www.housepetscomic.com",
        "b": "housepets",
        "u": "http://www.housepetscomic.com/?s={{{s}}}"
    },
    {
        "d": "howlongtobeat.com",
        "b": "howlongtobeat",
        "u": "https://howlongtobeat.com/?q={{{s}}}"
    },
    {
        "d": "www.housepetscomic.com",
        "b": "hpcf",
        "u": "http://www.housepetscomic.com/forums/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.housepetscomic.com",
        "b": "hpc",
        "u": "http://www.housepetscomic.com/?s={{{s}}}"
    },
    {
        "d": "www.housepetscomic.com",
        "b": "hpf",
        "u": "http://www.housepetscomic.com/forums/search.php?keywords={{{s}}}"
    },
    {
        "d": "hrwiki.org",
        "b": "hrwiki",
        "u": "http://hrwiki.org/w/index.php?title=Special:Search&search={{{s}}}&go=Go"
    },
    {
        "d": "hearthstone.gamepedia.com",
        "b": "hswiki",
        "u": "http://hearthstone.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.humblebundle.com",
        "b": "humble",
        "u": "https://www.humblebundle.com/store/search?search={{{s}}}"
    },
    {
        "d": "humble.wikia.com",
        "b": "humblewiki",
        "u": "http://humble.wikia.com/w/{{{s}}}"
    },
    {
        "d": "www.humblebundle.com",
        "b": "hum",
        "u": "https://www.humblebundle.com/store/search?sort=bestselling&search={{{s}}}"
    },
    {
        "d": "huskermax.com",
        "b": "huskermax",
        "u": "http://huskermax.com/?q={{{s}}}"
    },
    {
        "d": "hunterxhunter.wikia.com",
        "b": "hxh",
        "u": "http://hunterxhunter.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "hyperninjas.com",
        "b": "hyperninjas",
        "u": "http://hyperninjas.com/search?q={{{s}}}"
    },
    {
        "d": "www.hyperninjas.com",
        "b": "hyp",
        "u": "http://www.hyperninjas.com/search?q={{{s}}}"
    },
    {
        "d": "hypixel.net",
        "b": "hypixel",
        "u": "https://hypixel.net/player/{{{s}}}/"
    },
    {
        "d": "hypixel-skyblock.fandom.com",
        "b": "hysb",
        "u": "https://hypixel-skyblock.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.hytiva.com",
        "b": "hyt",
        "u": "https://www.hytiva.com/search?searchString={{{s}}}"
    },
    {
        "d": "www.hytiva.com",
        "b": "hyts",
        "u": "https://www.hytiva.com/strains?searchString={{{s}}}"
    },
    {
        "d": "indeaparis.com",
        "b": "iap",
        "u": "http://indeaparis.com/component/finder/search?q={{{s}}} "
    },
    {
        "d": "infinitythewiki.com",
        "b": "iaw",
        "u": "http://infinitythewiki.com/en/{{{s}}}"
    },
    {
        "d": "www.mtb-news.de",
        "b": "ibc",
        "u": "http://www.mtb-news.de/forum/search/12469693/?q={{{s}}}&o=relevance"
    },
    {
        "d": "www.ibdb.com",
        "b": "ibdb",
        "u": "http://www.ibdb.com/search.asp?SearchFor={{{s}}}&SearchBy=All"
    },
    {
        "d": "www.kidicaruswiki.org",
        "b": "icaruspedia",
        "u": "http://www.kidicaruswiki.org/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.icheckmovies.com",
        "b": "icheckmovies",
        "u": "http://www.icheckmovies.com/search/movies/?query={{{s}}}"
    },
    {
        "d": "www.icheckmovies.com",
        "b": "icm",
        "u": "http://www.icheckmovies.com/search/movies/?query={{{s}}}"
    },
    {
        "d": "www.doomworld.com",
        "b": "idg",
        "u": "https://www.doomworld.com/idgames//index.php?search=1&field=title&sort=time&order=desc&word={{{s}}}"
    },
    {
        "d": "idolmaster.wikia.com",
        "b": "idolmawiki",
        "u": "http://idolmaster.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "theifab.com",
        "b": "ifab",
        "u": "http://theifab.com/search/{{{s}}}"
    },
    {
        "d": "ifdb.tads.org",
        "b": "ifdb",
        "u": "http://ifdb.tads.org/search?searchbar={{{s}}}"
    },
    {
        "d": "www.igdb.com",
        "b": "igdb",
        "u": "https://www.igdb.com/search?q={{{s}}}"
    },
    {
        "d": "imgur.com",
        "b": "igif",
        "u": "https://imgur.com/search/score?q=ext%3Agif+{{{s}}}"
    },
    {
        "d": "www.ign.com",
        "b": "ign",
        "u": "https://www.ign.com/search?q={{{s}}}"
    },
    {
        "d": "igorandandre.com",
        "b": "igorandandre",
        "u": "https://igorandandre.com/search/{{{s}}}"
    },
    {
        "d": "igra-apple.ru",
        "b": "igra",
        "u": "http://igra-apple.ru/?s={{{s}}}"
    },
    {
        "d": "www.iltapulu.fi",
        "b": "iltapulu",
        "u": "http://www.iltapulu.fi/search.php?q={{{s}}}"
    },
    {
        "d": "www.indiemag.fr",
        "b": "imag",
        "u": "https://www.indiemag.fr/search/node/{{{s}}}"
    },
    {
        "d": "www.project-imas.com",
        "b": "imas",
        "u": "http://www.project-imas.com/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "www.project-imas.com",
        "b": "imaswiki",
        "u": "http://www.project-imas.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.imdb.com",
        "b": "imbd",
        "u": "http://www.imdb.com/find?q={{{s}}}&s=all"
    },
    {
        "d": "www.imdb.com",
        "b": "imdba",
        "u": "http://www.imdb.com/find?ref_=nv_sr_fn&q={{{s}}}&s=nm"
    },
    {
        "d": "www.imdb.com",
        "b": "imdbep",
        "u": "https://www.imdb.com/find?&q={{{s}}}&s=ep"
    },
    {
        "d": "www.imdb.com",
        "b": "imdbk",
        "u": "http://www.imdb.com/find?s=kw&q={{{s}}}"
    },
    {
        "d": "m.imdb.com",
        "b": "imdbm",
        "u": "https://m.imdb.com/find?q={{{s}}}"
    },
    {
        "d": "www.imdb.com",
        "b": "imdbn",
        "u": "http://www.imdb.com/find?s=nm&q={{{s}}}"
    },
    {
        "d": "pro-labs.imdb.com",
        "b": "imdbp",
        "u": "http://pro-labs.imdb.com/find?q={{{s}}} "
    },
    {
        "d": "imdb.com",
        "b": "imdbs",
        "u": "http://imdb.com/showtimes/US/{{{s}}}"
    },
    {
        "d": "www.imdb.com",
        "b": "imdbtv",
        "u": "https://www.imdb.com/search/title?title={{{s}}}&title_type=tv_series"
    },
    {
        "d": "www.imdb.com",
        "b": "imd",
        "u": "http://www.imdb.com/find?q={{{s}}}+&s=all"
    },
    {
        "d": "www.imfdb.org",
        "b": "imfdb",
        "u": "http://www.imfdb.org/w/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "imgflip.com",
        "b": "imgflip",
        "u": "https://imgflip.com/search?q={{{s}}}"
    },
    {
        "d": "impdb.org",
        "b": "impdb",
        "u": "http://impdb.org/index.php?search={{{s}}}"
    },
    {
        "d": "ims.com.br",
        "b": "ims",
        "u": "https://ims.com.br/?s={{{s}}}"
    },
    {
        "d": "incompetech.com",
        "b": "incomp",
        "u": "https://incompetech.com/wordpress/?s={{{s}}}"
    },
    {
        "d": "www.indiedb.com",
        "b": "indiedb",
        "u": "http://www.indiedb.com/search?cx=008031850949085947773%3Acbmjgaamtxe&cof=FORID%3A11&ie=UTF-8&q={{{s}}}&sa.x=0&sa.y=0"
    },
    {
        "d": "inflooenz.com",
        "b": "infloo",
        "u": "http://inflooenz.com/?artist={{{s}}}"
    },
    {
        "d": "theinfosphere.org",
        "b": "infosphere",
        "u": "http://theinfosphere.org/index.php?search={{{s}}}&go=Go&title=Special%3ASearch"
    },
    {
        "d": "inkbunny.net",
        "b": "inkbun",
        "u": "https://inkbunny.net/submissionsviewall.php?mode=search&stringtype=and&keywords=yes&title=yes&description=yes&text={{{s}}}"
    },
    {
        "d": "splatoonwiki.org",
        "b": "inkipedia",
        "u": "http://splatoonwiki.org/w/index.php?search={{{s}}}&go=Go"
    },
    {
        "d": "lesinrocks.com",
        "b": "inrocks",
        "u": "https://lesinrocks.com/recherche/?q={{{s}}}"
    },
    {
        "d": "io9.com",
        "b": "io9",
        "u": "http://io9.com/search?q={{{s}}}"
    },
    {
        "d": "www.ipdb.org",
        "b": "ipdb",
        "u": "http://www.ipdb.org/search.pl?any={{{s}}}&sortby=name&search=Search+Database&searchtype=quick"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "iplayerradio",
        "u": "http://www.bbc.co.uk/radio/programmes/a-z/by/{{{s}}}/player"
    },
    {
        "d": "www.iplt20.com",
        "b": "ipl",
        "u": "https://www.iplt20.com/search?term={{{s}}}"
    },
    {
        "d": "irowiki.org",
        "b": "irowiki",
        "u": "http://irowiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "bindingofisaacrebirth.gamepedia.com",
        "b": "isaac",
        "u": "http://bindingofisaacrebirth.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.indieshuffle.com",
        "b": "ishuffle",
        "u": "http://www.indieshuffle.com/search/songs/{{{s}}}"
    },
    {
        "d": "itch.io",
        "b": "itch",
        "u": "https://itch.io/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "itunes",
        "u": "https://duckduckgo.com/?q={{{s}}}%20site%3Aitunes.apple.com"
    },
    {
        "d": "www.itv.com",
        "b": "itv",
        "u": "https://www.itv.com/itvplayer/search/term/{{{s}}}"
    },
    {
        "d": "www.ivoox.com",
        "b": "ivoox",
        "u": "https://www.ivoox.com/{{{s}}}_sb.html?sb={{{s}}}"
    },
    {
        "d": "instantwatcher.com",
        "b": "iw",
        "u": "http://instantwatcher.com/search?content_type=1+2&source=1+2+3&q={{{s}}}"
    },
    {
        "d": "www.izneo.com",
        "b": "izneo",
        "u": "http://www.izneo.com/search.html?pattern={{{s}}}"
    },
    {
        "d": "www.j-archive.com",
        "b": "ja",
        "u": "http://www.j-archive.com/search.php?search={{{s}}}"
    },
    {
        "d": "jalopnik.com",
        "b": "jalop",
        "u": "http://jalopnik.com/search?q={{{s}}}"
    },
    {
        "d": "jalopnik.com",
        "b": "jalopnik",
        "u": "http://jalopnik.com/search?q={{{s}}}"
    },
    {
        "d": "www.lejournaldubienetre.com",
        "b": "jdbe",
        "u": "http://www.lejournaldubienetre.com/search?tag={{{s}}}"
    },
    {
        "d": "jedipedia.wikia.com",
        "b": "jedipedia",
        "u": "http://jedipedia.wikia.com/wiki/Spezial:Suche?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "items.jellyneo.net",
        "b": "jellyneo",
        "u": "https://items.jellyneo.net/search/?name={{{s}}}"
    },
    {
        "d": "thehappyjetlagger.com",
        "b": "jetlag",
        "u": "https://thehappyjetlagger.com/?s={{{s}}}"
    },
    {
        "d": "jezebel.com",
        "b": "jezebel",
        "u": "http://jezebel.com/search?q={{{s}}}"
    },
    {
        "d": "items.jellyneo.net",
        "b": "jid",
        "u": "https://items.jellyneo.net/search/?name={{{s}}}"
    },
    {
        "d": "jayisgames.com",
        "b": "jig",
        "u": "http://jayisgames.com/search/?cx=partner-pub-4854273876013864%3A9692641413&cof=FORID%3A11&ie=ISO-8859-1&q={{{s}}}&sa=Search&siteurl=jayisgames.com%2Fgames%2F&ref=jayisgames.com%2F&ss=&siteurl=jayisgames.com%2Fsearch%2F%3Fq%3Dhello&ref=&ss=849j189425j6"
    },
    {
        "d": "joemonster.org",
        "b": "jm",
        "u": "http://joemonster.org/search.php?q={{{s}}}"
    },
    {
        "d": "jovemnerd.com.br",
        "b": "jnn",
        "u": "https://jovemnerd.com.br/?s={{{s}}}"
    },
    {
        "d": "joemonster.org",
        "b": "joe",
        "u": "http://joemonster.org/search.php?q={{{s}}}"
    },
    {
        "d": "joemonster.org",
        "b": "joemonster",
        "u": "http://joemonster.org/search.php?q={{{s}}}"
    },
    {
        "d": "jojo.wikia.com",
        "b": "jojo",
        "u": "http://jojo.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "jotboard.info",
        "b": "jotb",
        "u": "https://jotboard.info/lookup.php?q={{{s}}}"
    },
    {
        "d": "jovemnerd.com.br",
        "b": "jovemnerd",
        "u": "http://jovemnerd.com.br/?s={{{s}}}"
    },
    {
        "d": "joyreactor.cc",
        "b": "jr",
        "u": "http://joyreactor.cc/search?q={{{s}}}"
    },
    {
        "d": "slashdot.jp",
        "b": "/.j",
        "u": "http://slashdot.jp/index2.pl?fhfilter={{{s}}}"
    },
    {
        "d": "www.justtryart.ml",
        "b": "jta",
        "u": "https://www.justtryart.ml/search.php?k={{{s}}}"
    },
    {
        "d": "www.jumps.nl",
        "b": "jumps",
        "u": "https://www.jumps.nl/index.php/component/finder/search?q={{{s}}}&Itemid=106"
    },
    {
        "d": "www.juno.co.uk",
        "b": "juno",
        "u": "https://www.juno.co.uk/search/?q[all][]={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "justwatchau",
        "u": "https://www.justwatch.com/au/search?q={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "justwatch",
        "u": "https://www.justwatch.com/us/search?q={{{s}}}"
    },
    {
        "d": "www.jeuxvideo.com",
        "b": "jvcom",
        "u": "http://www.jeuxvideo.com/recherche.php?q={{{s}}} "
    },
    {
        "d": "www.jeuxvideo.com",
        "b": "jvd",
        "u": "http://www.jeuxvideo.com/recherche.php?q={{{s}}}"
    },
    {
        "d": "www.jeuxvideo.com",
        "b": "jv",
        "u": "http://www.jeuxvideo.com/recherche.php?q={{{s}}}"
    },
    {
        "d": "www.justwatch.com",
        "b": "jwi",
        "u": "https://www.justwatch.com/in/search?q={{{s}}}"
    },
    {
        "d": "www.kafto.gr",
        "b": "kafto",
        "u": "https://www.kafto.gr/?s={{{s}}}"
    },
    {
        "d": "kamelopedia.mormo.org",
        "b": "kamelopedia",
        "u": "http://kamelopedia.mormo.org/index.php?title=Spezial%3ASuche&search={{{s}}}&button=Senden"
    },
    {
        "d": "kancolle.wikia.com",
        "b": "kancolle",
        "u": "http://kancolle.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "konachan.net",
        "b": "kchannet",
        "u": "http://konachan.net/post?tags={{{s}}}"
    },
    {
        "d": "kc-mm.com",
        "b": "kcmm",
        "u": "http://kc-mm.com/?s={{{s}}}"
    },
    {
        "d": "japari-library.com",
        "b": "kemono",
        "u": "https://japari-library.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "forum.kvinneguiden.no",
        "b": "kgforum",
        "u": "http://forum.kvinneguiden.no/?q={{{s}}}"
    },
    {
        "d": "kg-portal.ru",
        "b": "kg",
        "u": "http://kg-portal.ru/?search&s_str= {{{s}}}"
    },
    {
        "d": "keygenmusic.net",
        "b": "kgm",
        "u": "http://keygenmusic.net/?page=search&query={{{s}}}"
    },
    {
        "d": "www.khinsider.com",
        "b": "khinsider",
        "u": "http://www.khinsider.com/search?search={{{s}}}"
    },
    {
        "d": "www.khwiki.com",
        "b": "khwiki",
        "u": "https://www.khwiki.com/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.kicker.de",
        "b": "kicker",
        "u": "http://www.kicker.de/home/suchergebnisse.html?suchbegriff={{{s}}}"
    },
    {
        "d": "www.kicknews.net",
        "b": "kicknews",
        "u": "http://www.kicknews.net/news/search?q={{{s}}} "
    },
    {
        "d": "www.kids-in-mind.com",
        "b": "kidsinmind",
        "u": "http://www.kids-in-mind.com/cgi-bin/search/search.pl?q={{{s}}} "
    },
    {
        "d": "www.kika.de",
        "b": "kika",
        "u": "https://www.kika.de/suche/suche104.html?q={{{s}}}"
    },
    {
        "d": "kids-in-mind.com",
        "b": "kim",
        "u": "https://kids-in-mind.com/?s={{{s}}}"
    },
    {
        "d": "www.kinderfilmliste.de",
        "b": "kinderfilmliste",
        "u": "http://www.kinderfilmliste.de/?suche={{{s}}}"
    },
    {
        "d": "kingkiller.wiki",
        "b": "kkc",
        "u": "https://kingkiller.wiki/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.konsolentreff.de",
        "b": "k",
        "u": "https://www.konsolentreff.de/search/1/?q={{{s}}}"
    },
    {
        "d": "kktix.com",
        "b": "kktix",
        "u": "https://kktix.com/events?search={{{s}}}"
    },
    {
        "d": "klocksnack.se",
        "b": "klocks",
        "u": "https://klocksnack.se/search/6404040/?q={{{s}}}&o=date"
    },
    {
        "d": "kaomojiya.jp",
        "b": "kmjy",
        "u": "http://kaomojiya.jp/keyword/{{{s}}}/?search_flg=1"
    },
    {
        "d": "kodi.wiki",
        "b": "kodi",
        "u": "http://kodi.wiki/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "koei.wikia.com",
        "b": "koei",
        "u": "http://koei.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.koket.se",
        "b": "köket",
        "u": "https://www.koket.se/search?searchtext={{{s}}}"
    },
    {
        "d": "kol.coldfront.net",
        "b": "kol",
        "u": "http://kol.coldfront.net/thekolwiki/index.php/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "kol.coldfront.net",
        "b": "kolwiki",
        "u": "http://kol.coldfront.net/thekolwiki/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "kol.coldfront.net",
        "b": "kolw",
        "u": "http://kol.coldfront.net/thekolwiki/index.php/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.kongregate.com",
        "b": "kong",
        "u": "http://www.kongregate.com/search?q={{{s}}}"
    },
    {
        "d": "www.kongregate.com",
        "b": "kongregate",
        "u": "http://www.kongregate.com/search?q={{{s}}}"
    },
    {
        "d": "www.koreus.com",
        "b": "koreus",
        "u": "https://www.koreus.com/search.php?q={{{s}}}&sa=Rechercher"
    },
    {
        "d": "en.kingofsat.net",
        "b": "kos",
        "u": "http://en.kingofsat.net/find.php?question={{{s}}}&Submit=Zap"
    },
    {
        "d": "kotaku.com",
        "b": "kotaku",
        "u": "http://kotaku.com/search?q={{{s}}}"
    },
    {
        "d": "www.kinopoisk.ru",
        "b": "kpoisk",
        "u": "http://www.kinopoisk.ru/index.php?first=no&what=&kp_query={{{s}}}"
    },
    {
        "d": "kritiker.se",
        "b": "kritiker",
        "u": "https://kritiker.se/sok/?q={{{s}}}"
    },
    {
        "d": "forum.kerbalspaceprogram.com",
        "b": "kspf",
        "u": "http://forum.kerbalspaceprogram.com/search.php?s={{{s}}}"
    },
    {
        "d": "wiki.kerbalspaceprogram.com",
        "b": "ksp",
        "u": "http://wiki.kerbalspaceprogram.com/index.php?search={{{s}}}"
    },
    {
        "d": "wiki.kerbalspaceprogram.com",
        "b": "kspwiki",
        "u": "http://wiki.kerbalspaceprogram.com/w/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "kitsu.io",
        "b": "ksu",
        "u": "https://kitsu.io/anime?text={{{s}}}"
    },
    {
        "d": "kotaku.com",
        "b": "ktk",
        "u": "http://kotaku.com/search?q={{{s}}}"
    },
    {
        "d": "level-1.fr",
        "b": "l1",
        "u": "https://level-1.fr/?s={{{s}}}"
    },
    {
        "d": "www.live365.com",
        "b": "l365",
        "u": "http://www.live365.com/cgi-bin/directory.cgi?searchdesc={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "l3u",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:l3utterfish.blogspot.com"
    },
    {
        "d": "www.left4craft.org",
        "b": "l4c",
        "u": "https://www.left4craft.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "acordes.lacuerda.net",
        "b": "lacuerda",
        "u": "http://acordes.lacuerda.net/busca.php?canc=0&exp={{{s}}}"
    },
    {
        "d": "www.laemmle.com",
        "b": "laemmle",
        "u": "https://www.laemmle.com/search?q={{{s}}}"
    },
    {
        "d": "laftel.net",
        "b": "laftel",
        "u": "https://laftel.net/search?keyword={{{s}}}"
    },
    {
        "d": "lain.wiki",
        "b": "lainwiki",
        "u": "https://lain.wiki/index.php?search={{{s}}}"
    },
    {
        "d": "lamlaminkings.com.ng",
        "b": "lamlaminkings",
        "u": "https://lamlaminkings.com.ng/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.last.fm",
        "b": "lastfmmusic",
        "u": "https://www.last.fm/music/{{{s}}}"
    },
    {
        "d": "www.laut.de",
        "b": "laut",
        "u": "https://www.laut.de/Suche?q={{{s}}}"
    },
    {
        "d": "letterboxd.com",
        "b": "lb",
        "u": "https://letterboxd.com/search/{{{s}}}/"
    },
    {
        "d": "letterboxd.com",
        "b": "lbx",
        "u": "https://letterboxd.com/search/{{{s}}}"
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "lcsgo",
        "u": "http://wiki.teamliquid.net/counterstrike/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.lddb.com",
        "b": "lddb",
        "u": "http://www.lddb.com/search.php?search={{{s}}}"
    },
    {
        "d": "www.legends-decks.com",
        "b": "l-d",
        "u": "https://www.legends-decks.com/search.php?q={{{s}}}"
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "ldota",
        "u": "http://wiki.teamliquid.net/dota2/index.php?search={{{s}}}"
    },
    {
        "d": "www.lav-det-selv.dk",
        "b": "ldsdk",
        "u": "https://www.lav-det-selv.dk/find?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "learnlol",
        "u": "https://www.reddit.com/r/summonerschool/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "ideas.lego.com",
        "b": "legoideas",
        "u": "https://ideas.lego.com/discover#search/q:{{{s}}}"
    },
    {
        "d": "letterboxd.com",
        "b": "letterboxd",
        "u": "http://letterboxd.com/search/films/{{{s}}}/"
    },
    {
        "d": "wh40k.lexicanum.com",
        "b": "lexicanum",
        "u": "http://wh40k.lexicanum.com/mediawiki/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "old.reddit.com",
        "b": "lfc",
        "u": "https://old.reddit.com/r/LiverpoolFC/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "libregamewiki.org",
        "b": "lgw",
        "u": "https://libregamewiki.org/index.php?search={{{s}}}"
    },
    {
        "d": "lifehacker.com",
        "b": "lh",
        "u": "http://lifehacker.com/search?q={{{s}}}"
    },
    {
        "d": "libbyapp.com",
        "b": "libby",
        "u": "https://libbyapp.com/library/reads/search/query-{{{s}}}/page-1"
    },
    {
        "d": "www.libreflix.org",
        "b": "libreflix",
        "u": "https://www.libreflix.org/busca/{{{s}}}"
    },
    {
        "d": "lifehacker.com",
        "b": "lifehacker",
        "u": "http://lifehacker.com/search?q={{{s}}}"
    },
    {
        "d": "lifpv.com",
        "b": "lifpv",
        "u": "https://lifpv.com/?s={{{s}}}"
    },
    {
        "d": "www.lightfm.com.au",
        "b": "lightfm",
        "u": "https://www.lightfm.com.au/?s={{{s}}}"
    },
    {
        "d": "www.light.gg",
        "b": "lightgg",
        "u": "https://www.light.gg/db/search/?q={{{s}}}"
    },
    {
        "d": "www.light.gg",
        "b": "light",
        "u": "https://www.light.gg/db/search/?q={{{s}}} "
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "liquidpedia",
        "u": "http://wiki.teamliquid.net/starcraft2/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "liquipedia",
        "u": "http://wiki.teamliquid.net/starcraft2/index.php?title=Special%3ASearch&go=Go&search={{{s}}}"
    },
    {
        "d": "www.listadomanga.es",
        "b": "listadomangablog",
        "u": "http://www.listadomanga.es/blog/?s={{{s}}}"
    },
    {
        "d": "www.listal.com",
        "b": "listal",
        "u": "http://www.listal.com/search/{{{s}}}"
    },
    {
        "d": "listverse.com",
        "b": "listverse",
        "u": "http://listverse.com/search/?q={{{s}}}&sa=Search"
    },
    {
        "d": "literana.de",
        "b": "literana",
        "u": "https://literana.de/?s={{{s}}}"
    },
    {
        "d": "www.liveatc.net",
        "b": "liveatc",
        "u": "https://www.liveatc.net/search/?icao={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lj",
        "u": "http://duckduckgo.com/?q=site%3Alivejournal.com+{{{s}}} "
    },
    {
        "d": "www.lolking.net",
        "b": "lk",
        "u": "http://www.lolking.net/search?name={{{s}}}"
    },
    {
        "d": "lmddgtfy.net",
        "b": "lmddgtfy",
        "u": "https://lmddgtfy.net/?q={{{s}}}"
    },
    {
        "d": "lemmasoft.renai.us",
        "b": "lms",
        "u": "https://lemmasoft.renai.us/forums/search.php?keywords={{{s}}}"
    },
    {
        "d": "luigi-mansion.wikia.com",
        "b": "lmwiki",
        "u": "http://luigi-mansion.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "lndb.info",
        "b": "lndb",
        "u": "http://lndb.info/search?text={{{s}}}"
    },
    {
        "d": "ask.libreoffice.org",
        "b": "loask",
        "u": "http://ask.libreoffice.org/en/questions/scope:all/sort:activity-desc/page:1/query:={{{s}}}/"
    },
    {
        "d": "locast.be",
        "b": "locast",
        "u": "https://locast.be/?s={{{s}}}"
    },
    {
        "d": "gineipaedia.com",
        "b": "logh",
        "u": "https://gineipaedia.com/w/index.php?title=Special:Search&search={{{s}}}&go=Go"
    },
    {
        "d": "lolalytics.com",
        "b": "lolchamp",
        "u": "https://lolalytics.com/ranked/worldwide/current/diamond/plus/champion/{{{s}}}"
    },
    {
        "d": "www.lolcounter.com",
        "b": "lolcounter",
        "u": "http://www.lolcounter.com/champions/{{{s}}}"
    },
    {
        "d": "www.lolking.net",
        "b": "lolking",
        "u": "http://www.lolking.net/search?name={{{s}}}"
    },
    {
        "d": "www.lolpro.com",
        "b": "lolpro",
        "u": "http://www.lolpro.com/search?search={{{s}}}"
    },
    {
        "d": "www.lolskill.net",
        "b": "lolskill",
        "u": "http://www.lolskill.net/{{{s}}} "
    },
    {
        "d": "leagueoflegends.wikia.com",
        "b": "lolwikia",
        "u": "http://leagueoflegends.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "leagueoflegends.wikia.com",
        "b": "lolwiki",
        "u": "http://leagueoflegends.wikia.com/wiki/Special:Search?search={{{s}}} "
    },
    {
        "d": "lostpedia.wikia.com",
        "b": "lost",
        "u": "http://lostpedia.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "lotro-wiki.com",
        "b": "lotrow",
        "u": "http://lotro-wiki.com/index.php?search={{{s}}}&button=&title=Special%3ASearch"
    },
    {
        "d": "love-live.wikia.com",
        "b": "lovelive",
        "u": "http://love-live.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "recipegym.com",
        "b": "lowcarb",
        "u": "https://recipegym.com/?s={{{s}}}"
    },
    {
        "d": "www.loweringthebar.net",
        "b": "loweringthebar",
        "u": "http://www.loweringthebar.net/?s={{{s}}}"
    },
    {
        "d": "lparchive.org",
        "b": "lparchive",
        "u": "http://lparchive.org/search/{{{s}}} #results"
    },
    {
        "d": "liquipedia.net",
        "b": "lqpcs",
        "u": "https://liquipedia.net/counterstrike/index.php?search={{{s}}}"
    },
    {
        "d": "search.letssingit.com",
        "b": "lsi",
        "u": "http://search.letssingit.com/cgi-exe/am.cgi?a=search&l=archive&typeid=2&s={{{s}}}"
    },
    {
        "d": "www.lspace.org",
        "b": "lspace",
        "u": "http://www.lspace.org/cgi-imps/perlfect/search/search.pl?q={{{s}}}"
    },
    {
        "d": "liquipedia.net",
        "b": "lstarcraft",
        "u": "https://liquipedia.net/starcraft2/index.php?search={{{s}}}"
    },
    {
        "d": "www.lta.org.uk",
        "b": "lta",
        "u": "https://www.lta.org.uk/search-results/?q={{{s}}}"
    },
    {
        "d": "letterboxd.com",
        "b": "ltr",
        "u": "http://letterboxd.com/search/{{{s}}}"
    },
    {
        "d": "lubimyczytac.pl",
        "b": "lubimyczytac",
        "u": "http://lubimyczytac.pl/szukaj/ksiazki?phrase={{{s}}}"
    },
    {
        "d": "ludopedia.com.br",
        "b": "ludo",
        "u": "http://ludopedia.com.br/search?search={{{s}}}"
    },
    {
        "d": "ludopedia.com.br",
        "b": "ludopedia",
        "u": "http://ludopedia.com.br/search?search={{{s}}}"
    },
    {
        "d": "lurkmore.to",
        "b": "lurk",
        "u": "http://lurkmore.to/index.php?search={{{s}}}"
    },
    {
        "d": "lurkmore.to",
        "b": "lurkmore",
        "u": "http://lurkmore.to/index.php?search={{{s}}}"
    },
    {
        "d": "lutris.net",
        "b": "lutris",
        "u": "https://lutris.net/games/?q={{{s}}}"
    },
    {
        "d": "lesswrong.com",
        "b": "lw",
        "u": "http://lesswrong.com/search/results?cx=015839050583929870010%3A-802ptn4igi&cof=FORID%3A11&ie=UTF-8&sa=Search&siteurl=lesswrong.com%2F&q={{{s}}}"
    },
    {
        "d": "www.lyricstune.in",
        "b": "lyricstune",
        "u": "https://www.lyricstune.in/search?q={{{s}}}"
    },
    {
        "d": "wiki.mabinogiworld.com",
        "b": "mabiwiki",
        "u": "http://wiki.mabinogiworld.com/index.php?search={{{s}}}"
    },
    {
        "d": "magiccards.info",
        "b": "magiccard",
        "u": "http://magiccards.info/query?q={{{s}}}&v=card&s=cname"
    },
    {
        "d": "magiccards.info",
        "b": "magiccards",
        "u": "http://magiccards.info/query?q={{{s}}}&v=card&s=cname"
    },
    {
        "d": "gatherer.wizards.com",
        "b": "magic",
        "u": "http://gatherer.wizards.com/Pages/Search/Default.aspx?name=+[{{{s}}}]"
    },
    {
        "d": "www.maku.fi",
        "b": "maku",
        "u": "http://www.maku.fi/haku/recipe?q={{{s}}}"
    },
    {
        "d": "myanimelist.net",
        "b": "malall",
        "u": "https://myanimelist.net/search/all?q={{{s}}}"
    },
    {
        "d": "myanimelist.net",
        "b": "mal",
        "u": "https://myanimelist.net/anime.php?q={{{s}}}"
    },
    {
        "d": "memory-alpha.org",
        "b": "malpha",
        "u": "http://memory-alpha.org/index.php?search={{{s}}}"
    },
    {
        "d": "en.memory-alpha.org",
        "b": "ma",
        "u": "http://en.memory-alpha.org/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "manga.akihabara.cz",
        "b": "manbara",
        "u": "http://manga.akihabara.cz/vyhledavani/{{{s}}}"
    },
    {
        "d": "mangadex.org",
        "b": "mangadex",
        "u": "https://mangadex.org/search?tag_mode_exc=any&tag_mode_inc=all&title={{{s}}}"
    },
    {
        "d": "mangarock.com",
        "b": "mangarock",
        "u": "https://mangarock.com/search?q={{{s}}}"
    },
    {
        "d": "kitsu.io",
        "b": "mangas",
        "u": "https://kitsu.io/manga?text={{{s}}}"
    },
    {
        "d": "cgi.marca.com",
        "b": "marca",
        "u": "http://cgi.marca.com/buscador/archivo_marca.html?q={{{s}}}"
    },
    {
        "d": "marginalrevolution.com",
        "b": "marginalrevolution",
        "u": "http://marginalrevolution.com/?s={{{s}}}"
    },
    {
        "d": "www.mariowiki.com",
        "b": "mario",
        "u": "https://www.mariowiki.com/{{{s}}}"
    },
    {
        "d": "www.mariowiki.com",
        "b": "mariowiki",
        "u": "http://www.mariowiki.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.marmarisreservation.com",
        "b": "marmaris",
        "u": "https://www.marmarisreservation.com/?s={{{s}}}"
    },
    {
        "d": "marvel.com",
        "b": "marvelc",
        "u": "http://marvel.com/search/?q={{{s}}}&category=comics"
    },
    {
        "d": "www.marvel.com",
        "b": "marvel",
        "u": "https://www.marvel.com/search/?query={{{s}}}"
    },
    {
        "d": "marvel.wikia.com",
        "b": "marvelwiki",
        "u": "http://marvel.wikia.com/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "minecraft-de.gamepedia.com",
        "b": "mcde",
        "u": "https://minecraft-de.gamepedia.com/{{{s}}}"
    },
    {
        "d": "www.minecraftforum.net",
        "b": "mcf",
        "u": "http://www.minecraftforum.net/search?search={{{s}}}"
    },
    {
        "d": "minecraft.fr",
        "b": "mcfr",
        "u": "https://minecraft.fr/?s={{{s}}}"
    },
    {
        "d": "www.curseforge.com",
        "b": "mcmodpacks",
        "u": "https://www.curseforge.com/minecraft/modpacks/search?search={{{s}}}"
    },
    {
        "d": "www.curseforge.com",
        "b": "mcmods",
        "u": "https://www.curseforge.com/minecraft/mc-mods/search?search={{{s}}}"
    },
    {
        "d": "namemc.com",
        "b": "mcname",
        "u": "https://namemc.com/s?{{{s}}}"
    },
    {
        "d": "minecraft-computer.wikia.com",
        "b": "mcpc",
        "u": "http://minecraft-computer.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "mcpedl.com",
        "b": "mcpedl",
        "u": "http://mcpedl.com/?s={{{s}}}"
    },
    {
        "d": "minecraftpocketedition.wikia.com",
        "b": "mcpew",
        "u": "http://minecraftpocketedition.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "minecraft-pl.gamepedia.com",
        "b": "mc-pl",
        "u": "https://minecraft-pl.gamepedia.com/index.php?search={{{s}}}&title=Specjalna:Szukaj&go=Przejd%C5%BA"
    },
    {
        "d": "www.mcskinsearch.com",
        "b": "mcskin",
        "u": "http://www.mcskinsearch.com/skin/{{{s}}}"
    },
    {
        "d": "www.movie-censorship.com",
        "b": "mcs",
        "u": "http://www.movie-censorship.com/list.php?s={{{s}}}"
    },
    {
        "d": "minecraft-statistic.net",
        "b": "mcstats",
        "u": "https://minecraft-statistic.net/en/search/?q={{{s}}}"
    },
    {
        "d": "marvelcinematicuniverse.wikia.com",
        "b": "mcu",
        "u": "http://marvelcinematicuniverse.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "moviecovers.com",
        "b": "mcv",
        "u": "http://moviecovers.com/multicrit.html?titre={{{s}}}"
    },
    {
        "d": "de.minecraftwiki.net",
        "b": "mcwikide",
        "u": "http://de.minecraftwiki.net/index.php?title=Spezial%3ASuche&search={{{s}}}"
    },
    {
        "d": "minecraft-fr.gamepedia.com",
        "b": "mcwikifr",
        "u": "http://minecraft-fr.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "minecraft-zh.gamepedia.com",
        "b": "mcwikizh",
        "u": "https://minecraft-zh.gamepedia.com/{{{s}}}"
    },
    {
        "d": "www.minecraftworldmap.com",
        "b": "mcwm",
        "u": "https://www.minecraftworldmap.com/search?ss={{{s}}}"
    },
    {
        "d": "minecraft.gamepedia.com",
        "b": "mcw",
        "u": "http://minecraft.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "moridb.com",
        "b": "mdb",
        "u": "http://moridb.com/items/search?q={{{s}}}"
    },
    {
        "d": "mydramalist.com",
        "b": "mdl",
        "u": "http://mydramalist.com/browse/all?sort[]=relevance&q={{{s}}}"
    },
    {
        "d": "www.madmoizelle.com",
        "b": "mdmz",
        "u": "http://www.madmoizelle.com/recherche.php?q={{{s}}}&sitesearch=madmoizelle.com&cx=014204933963475694561%3Aq69po45gmum&cof=FORID%3A11&client=pub-9887088429202220&forid=1&ie=ISO-8859-1&oe=ISO-8859-1&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23336699%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3A336699%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BFORID%3A11&hl=fr&sa=Recherche"
    },
    {
        "d": "mangadex.org",
        "b": "mdx",
        "u": "https://mangadex.org/search?title={{{s}}}"
    },
    {
        "d": "medium.com",
        "b": "med",
        "u": "https://medium.com/search?q={{{s}}}"
    },
    {
        "d": "megaman.wikia.com",
        "b": "megaman",
        "u": "http://megaman.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "megamitensei.wikia.com",
        "b": "megamitensei",
        "u": "http://megamitensei.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "megamitensei.wikia.com",
        "b": "megatenw",
        "u": "http://megamitensei.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "me_irl",
        "u": "https://www.reddit.com/r/me_irl/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "en.memory-alpha.org",
        "b": "mema",
        "u": "http://en.memory-alpha.org/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns4=1#"
    },
    {
        "d": "masseffect.wikia.com",
        "b": "me",
        "u": "http://masseffect.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "memegenerator.net",
        "b": "memegen",
        "u": "http://memegenerator.net/memes/search?q={{{s}}}"
    },
    {
        "d": "memory-beta.wikia.com",
        "b": "memorybeta",
        "u": "http://memory-beta.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.metacritic.com",
        "b": "metacritic",
        "u": "http://www.metacritic.com/search/all/{{{s}}}/results"
    },
    {
        "d": "meta.stackexchange.com",
        "b": "metasx",
        "u": "http://meta.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.meteli.net",
        "b": "meteli",
        "u": "http://www.meteli.net/tapahtumahaku?q={{{s}}}"
    },
    {
        "d": "www.metroidwiki.org",
        "b": "metroidwiki",
        "u": "http://www.metroidwiki.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.mobafire.com",
        "b": "mfg",
        "u": "http://www.mobafire.com/league-of-legends/{{{s}}}-guide"
    },
    {
        "d": "mfm.wikia.com",
        "b": "mfm",
        "u": "http://mfm.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "metalgear.wikia.com",
        "b": "mgw",
        "u": "http://metalgear.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "mhr",
        "u": "https://www.reddit.com/r/MonsterHunter/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "monsterhunter.wikia.com",
        "b": "mh",
        "u": "http://monsterhunter.wikia.com/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "monsterhunter.wikia.com",
        "b": "mhwiki",
        "u": "http://monsterhunter.wikia.com/wiki/index.php?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "miitopia.wikia.com",
        "b": "miitopia",
        "u": "http://miitopia.wikia.com/wiki/{{{s}}}"
    },
    {
        "d": "minecraft-de.gamepedia.com",
        "b": "minecraft-de",
        "u": "http://minecraft-de.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "minecraft-de.gamepedia.com",
        "b": "minecraftde",
        "u": "http://minecraft-de.gamepedia.com/index.php?search={{{s}}}&title=Spezial%3ASuche&go=Seite"
    },
    {
        "d": "minecraft.wiki",
        "b": "minecraft",
        "u": "http://minecraft.wiki?search={{{s}}}"
    },
    {
        "d": "minecraft-ru.gamepedia.com",
        "b": "minecraft-ru",
        "u": "https://minecraft-ru.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "minecraft-seeds.net",
        "b": "minecraftseeds",
        "u": "http://minecraft-seeds.net/seeds/search/?q={{{s}}}"
    },
    {
        "d": "minecraft.wiki",
        "b": "minecraftwiki",
        "u": "http://minecraft.wiki?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "minecraft.wiki",
        "b": "minecratwiki",
        "u": "http://minecraft.wiki?search={{{s}}}"
    },
    {
        "d": "www.minecraftforum.net",
        "b": "mineforum",
        "u": "https://www.minecraftforum.net/search?search={{{s}}}"
    },
    {
        "d": "www.miniclip.com",
        "b": "miniclip",
        "u": "http://www.miniclip.com/games/en/search.php?query={{{s}}}"
    },
    {
        "d": "www.miniclip.com",
        "b": "minigame",
        "u": "http://www.miniclip.com/games/search/en/?query={{{s}}}#t-sd"
    },
    {
        "d": "mariokart.wikia.com",
        "b": "mkrw",
        "u": "http://mariokart.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "mlb.mlb.com",
        "b": "mlb",
        "u": "http://mlb.mlb.com/searchGlobalSearchServlet?club=mlb&search_mode=1&searchtypeid=-1&page_number=1&query_text1={{{s}}}"
    },
    {
        "d": "espn.go.com",
        "b": "mlbp",
        "u": "http://espn.go.com/mlb/players?=1&search={{{s}}} "
    },
    {
        "d": "multiplayer.it",
        "b": "mlpit",
        "u": "https://multiplayer.it/ricerca/?q={{{s}}}"
    },
    {
        "d": "mlp.wikia.com",
        "b": "mlp",
        "u": "http://mlp.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.mlssoccer.com",
        "b": "mls",
        "u": "http://www.mlssoccer.com/search/{{{s}}}"
    },
    {
        "d": "muslimmanga.org",
        "b": "mmanga",
        "u": "http://muslimmanga.org/?lang=en&s={{{s}}}"
    },
    {
        "d": "www.musixmatch.com",
        "b": "mmatch",
        "u": "https://www.musixmatch.com/search/{{{s}}}"
    },
    {
        "d": "metromatinee.com",
        "b": "mme",
        "u": "https://metromatinee.com/search/{{{s}}}"
    },
    {
        "d": "www.mymovies.it",
        "b": "mmi",
        "u": "http://www.mymovies.it/database/ricercalibera/default.asp?q={{{s}}}&cx=partner-pub-1699801751737986%3Ax7j961-1g3m&cof=FORID%3A9&ie=ISO-8859-1&sa=Cerca "
    },
    {
        "d": "myanimelist.net",
        "b": "mml",
        "u": "http://myanimelist.net/manga.php?q={{{s}}}"
    },
    {
        "d": "www.mrmoneymustache.com",
        "b": "mmm",
        "u": "https://www.mrmoneymustache.com/?s={{{s}}}"
    },
    {
        "d": "mmo13.com",
        "b": "mmo13",
        "u": "https://mmo13.com/search/{{{s}}}"
    },
    {
        "d": "na.whatismymmr.com",
        "b": "mmr",
        "u": "https://na.whatismymmr.com/{{{s}}}"
    },
    {
        "d": "minimalistbaker.com",
        "b": "mnb",
        "u": "https://minimalistbaker.com/?s={{{s}}}"
    },
    {
        "d": "www.makenewfriendspodcast.com",
        "b": "mnf",
        "u": "https://www.makenewfriendspodcast.com/?s={{{s}}}"
    },
    {
        "d": "www.nexusmods.com",
        "b": "mnm",
        "u": "https://www.nexusmods.com/morrowind/search/?gsearch={{{s}}}&gsearchtype=mods"
    },
    {
        "d": "www.mobafire.com",
        "b": "mobafirebuilds",
        "u": "http://www.mobafire.com/league-of-legends/browse/?q={{{s}}}: "
    },
    {
        "d": "www.mobafire.com",
        "b": "mobafire",
        "u": "http://www.mobafire.com//?q={{{s}}}:"
    },
    {
        "d": "mobcup.net",
        "b": "mobcup",
        "u": "https://mobcup.net/search?q={{{s}}}"
    },
    {
        "d": "www.mobileread.com",
        "b": "mobileread",
        "u": "https://www.mobileread.com/forums/gcs.php?cx=011403329271260343335%3Amzng3fi-cti&q={{{s}}}&sa=Search&siteurl=www.mobileread.com%2F"
    },
    {
        "d": "mobirumdiscovery.com",
        "b": "mobirum",
        "u": "https://mobirumdiscovery.com/search?q={{{s}}}"
    },
    {
        "d": "www.mobygames.com",
        "b": "mobygames",
        "u": "http://www.mobygames.com/search/quick?q={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.mobygames.com",
        "b": "moby",
        "u": "http://www.mobygames.com/search/quick?q={{{s}}}"
    },
    {
        "d": "modarchive.org",
        "b": "modarchive",
        "u": "https://modarchive.org/index.php?request=search&query={{{s}}}&submit=Find&search_type=filename_or_songtitle"
    },
    {
        "d": "moddb.com",
        "b": "moddb",
        "u": "http://moddb.com/search?q={{{s}}}"
    },
    {
        "d": "boxofficemojo.com",
        "b": "mojo",
        "u": "http://boxofficemojo.com/search/?q={{{s}}}"
    },
    {
        "d": "moncul.org",
        "b": "moncul",
        "u": "http://moncul.org/?s={{{s}}}"
    },
    {
        "d": "www.mondofox.it",
        "b": "mondofox",
        "u": "https://www.mondofox.it/?q={{{s}}}"
    },
    {
        "d": "blog.monolecte.fr",
        "b": "monolecte",
        "u": "http://blog.monolecte.fr/?s={{{s}}} "
    },
    {
        "d": "www.monstercat.com",
        "b": "monstercat",
        "u": "https://www.monstercat.com/search?term={{{s}}}"
    },
    {
        "d": "www.moviepilot.de",
        "b": "mopi",
        "u": "https://www.moviepilot.de/suche?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "morbotron.com",
        "b": "morbo",
        "u": "https://morbotron.com/?q={{{s}}}"
    },
    {
        "d": "morbotron.com",
        "b": "morbotron",
        "u": "https://morbotron.com/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "more",
        "u": "https://duckduckgo.com/?q=site:https://www.mobileread.com%20{{{s}}}"
    },
    {
        "d": "ingressmosaik.com",
        "b": "mosaik",
        "u": "https://ingressmosaik.com/search?f={{{s}}}"
    },
    {
        "d": "www.moshville.co.uk",
        "b": "moshville",
        "u": "http://www.moshville.co.uk//?s={{{s}}}"
    },
    {
        "d": "www.motorsport.com",
        "b": "motorsport",
        "u": "http://www.motorsport.com/all/search/?q={{{s}}}"
    },
    {
        "d": "moviechat.org",
        "b": "moviechat",
        "u": "https://moviechat.org/search?name={{{s}}}"
    },
    {
        "d": "www.moviefone.com",
        "b": "moviefone",
        "u": "https://www.moviefone.com/search/{{{s}}}/"
    },
    {
        "d": "www.movieguide.org",
        "b": "movieguide",
        "u": "http://www.movieguide.org/?s={{{s}}}&submit.x=0&submit.y=0&submit=Search&key=hs"
    },
    {
        "d": "www.moviemeter.nl",
        "b": "moviemeter",
        "u": "https://www.moviemeter.nl/site/search?q={{{s}}}"
    },
    {
        "d": "m.moviepilot.de",
        "b": "moviepilotm",
        "u": "http://m.moviepilot.de/suche?utf8=✓&q={{{s}}}"
    },
    {
        "d": "www.moviepilot.de",
        "b": "moviepilot",
        "u": "http://www.moviepilot.de/suche?utf8=✓&q={{{s}}}"
    },
    {
        "d": "www.atomtickets.com",
        "b": "movies",
        "u": "https://www.atomtickets.com/search?query={{{s}}}"
    },
    {
        "d": "www.movieweb.com",
        "b": "movieweb",
        "u": "http://www.movieweb.com/search?search={{{s}}}"
    },
    {
        "d": "movielens.org",
        "b": "movl",
        "u": "https://movielens.org/explore?q={{{s}}}"
    },
    {
        "d": "mpora.com",
        "b": "mpora",
        "u": "http://mpora.com/search/videos?q={{{s}}}"
    },
    {
        "d": "www.mountainproject.com",
        "b": "mproj",
        "u": "https://www.mountainproject.com/search?q={{{s}}}"
    },
    {
        "d": "m.reddit.com",
        "b": "mre",
        "u": "https://m.reddit.com/search?q={{{s}}}"
    },
    {
        "d": "www.mrqe.com",
        "b": "mrqe",
        "u": "http://www.mrqe.com/search?utf8=%E2%9C%93&q={{{s}}} "
    },
    {
        "d": "forums.maplestory2.nexon.net",
        "b": "ms2",
        "u": "http://forums.maplestory2.nexon.net/search?Search={{{s}}}"
    },
    {
        "d": "www.manga-sanctuary.com",
        "b": "msanctuary",
        "u": "http://www.manga-sanctuary.com/recherche.php?keywords={{{s}}}"
    },
    {
        "d": "mspaintadventures.wikia.com",
        "b": "mspa",
        "u": "http://mspaintadventures.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "mspaintadventures.wikia.com",
        "b": "mspawiki",
        "u": "http://mspaintadventures.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.mtbproject.com",
        "b": "mtb",
        "u": "https://www.mtbproject.com/search?q={{{s}}}"
    },
    {
        "d": "www.moestuinforum.nl",
        "b": "mtf",
        "u": "https://www.moestuinforum.nl/search/gsearch_body.html?q={{{s}}}"
    },
    {
        "d": "forum.minetest.net",
        "b": "mtforums",
        "u": "https://forum.minetest.net/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.cardmarket.com",
        "b": "mtgcm",
        "u": "https://www.cardmarket.com/en/Magic/Products/Search?searchString={{{s}}}"
    },
    {
        "d": "www.mtggoldfish.com",
        "b": "mtggf",
        "u": "http://www.mtggoldfish.com/q?query_string={{{s}}}"
    },
    {
        "d": "gatherer.wizards.com",
        "b": "mtgg",
        "u": "http://gatherer.wizards.com/Pages/Search/Default.aspx?name=+[{{{s}}}]"
    },
    {
        "d": "mtg-hunter.com",
        "b": "mtgh",
        "u": "http://mtg-hunter.com/?q={{{s}}}"
    },
    {
        "d": "scryfall.com",
        "b": "mtg",
        "u": "https://scryfall.com/search?q={{{s}}}"
    },
    {
        "d": "mtgsalvation.gamepedia.com",
        "b": "mtgs",
        "u": "http://mtgsalvation.gamepedia.com/?search={{{s}}}"
    },
    {
        "d": "mtgsalvation.gamepedia.com",
        "b": "mtgwiki",
        "u": "http://mtgsalvation.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "mtg.wtf",
        "b": "mtgwtf",
        "u": "https://mtg.wtf/card?q={{{s}}}"
    },
    {
        "d": "content.minetest.net",
        "b": "mtmod",
        "u": "https://content.minetest.net/packages/?q={{{s}}}"
    },
    {
        "d": "www.mountainproject.com",
        "b": "mtn",
        "u": "https://www.mountainproject.com/search?q={{{s}}}"
    },
    {
        "d": "www.modthesims.info",
        "b": "mts",
        "u": "http://www.modthesims.info/browse.php?tag={{{s}}}"
    },
    {
        "d": "www.multitracks.com",
        "b": "mtt",
        "u": "http://www.multitracks.com/search/?q={{{s}}}"
    },
    {
        "d": "www.mtv.com",
        "b": "mtv",
        "u": "http://www.mtv.com/search/?searchterm={{{s}}}"
    },
    {
        "d": "wiki.minetest.net",
        "b": "mtw",
        "u": "http://wiki.minetest.net/index.php?search={{{s}}}"
    },
    {
        "d": "makeupalley.com",
        "b": "mua",
        "u": "http://makeupalley.com/search.asp?q={{{s}}}"
    },
    {
        "d": "mubi.com",
        "b": "mubi",
        "u": "http://mubi.com/search/results?cx=016360985607050269103%3Acmmod4epzpo&cof=FORID%3A10&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "muppet.wikia.com",
        "b": "muppet",
        "u": "http://muppet.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "muralpsicologia.com.br",
        "b": "muralpsi",
        "u": "http://muralpsicologia.com.br/eventos/pesquisa?s={{{s}}}"
    },
    {
        "d": "www.murfie.com",
        "b": "murfie",
        "u": "https://www.murfie.com/search?search={{{s}}}"
    },
    {
        "d": "forums.musculardevelopment.com",
        "b": "muscdevforum",
        "u": "http://forums.musculardevelopment.com?q={{{s}}}: "
    },
    {
        "d": "www.musicradar.com",
        "b": "musicr",
        "u": "http://www.musicradar.com/search?searchTerm={{{s}}} "
    },
    {
        "d": "www.musixmatch.com",
        "b": "musicxm",
        "u": "https://www.musixmatch.com/search/{{{s}}}"
    },
    {
        "d": "www.musixmatch.com",
        "b": "musixmatch",
        "u": "https://www.musixmatch.com/search/{{{s}}}"
    },
    {
        "d": "muslimmanga.org",
        "b": "muslimmanga",
        "u": "http://muslimmanga.org/?lang=en&s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "mwi",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Amusicweb-international.com"
    },
    {
        "d": "www.mixcloud.com",
        "b": "mxc",
        "u": "https://www.mixcloud.com/{{{s}}}"
    },
    {
        "d": "www.mixer.com",
        "b": "mxr",
        "u": "https://www.mixer.com/{{{s}}}"
    },
    {
        "d": "forum.mxsimulator.com",
        "b": "mxs",
        "u": "http://forum.mxsimulator.com/search.php?keywords={{{s}}}"
    },
    {
        "d": "myanimelist.net",
        "b": "myanimelist",
        "u": "http://myanimelist.net/anime.php?q={{{s}}}"
    },
    {
        "d": "mydramalist.com",
        "b": "mydrama",
        "u": "https://mydramalist.com/search?q={{{s}}}"
    },
    {
        "d": "www.myinstants.com",
        "b": "myinstants",
        "u": "https://www.myinstants.com/search/?name={{{s}}}"
    },
    {
        "d": "www.mymovies.it",
        "b": "mym",
        "u": "http://www.mymovies.it/database/ricerca/?q={{{s}}}"
    },
    {
        "d": "www.mymovies.it",
        "b": "mymovies",
        "u": "http://www.mymovies.it/database/ricercalibera/default.asp?q={{{s}}}&cx=partner-pub-1699801751737986%3Ax7j961-1g3m&cof=FORID%3A9&ie=ISO-8859-1&sa=Cerca"
    },
    {
        "d": "myshows.me",
        "b": "myshows",
        "u": "http://myshows.me/search/?q={{{s}}}"
    },
    {
        "d": "de.namemc.com",
        "b": "namemc",
        "u": "https://de.namemc.com/s?{{{s}}}"
    },
    {
        "d": "www.naointendo.com.br",
        "b": "naointendo",
        "u": "http://www.naointendo.com.br/blog/busca?utf8=✓&q={{{s}}}"
    },
    {
        "d": "na.op.gg",
        "b": "na.op",
        "u": "http://na.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "naruto.wikia.com",
        "b": "naruto",
        "u": "http://naruto.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "naturallybeautycare.com",
        "b": "natural",
        "u": "https://naturallybeautycare.com/search/{{{s}}}"
    },
    {
        "d": "www.navalactionwiki.com",
        "b": "nava",
        "u": "http://www.navalactionwiki.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "dleague.nba.com",
        "b": "nbadl",
        "u": "http://dleague.nba.com/?q={{{s}}}"
    },
    {
        "d": "www.nbamaniacs.com",
        "b": "nbam",
        "u": "https://www.nbamaniacs.com/?s={{{s}}}"
    },
    {
        "d": "www.nba.com",
        "b": "nba",
        "u": "http://www.nba.com/search#/{{{s}}}"
    },
    {
        "d": "crypt-of-the-necrodancer.wikia.com",
        "b": "necrod",
        "u": "http://crypt-of-the-necrodancer.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns1=1&ns2=1&ns3=1&ns4=1&ns5=1&ns6=1&ns7=1&ns8=1&ns9=1&ns10=1&ns11=1&ns12=1&ns13=1&ns14=1&ns15=1&ns110=1&ns111=1&ns828=1&ns829=1&ns1201=1#advanced"
    },
    {
        "d": "necyklopedie.wikia.com",
        "b": "necy",
        "u": "http://necyklopedie.wikia.com/wiki/{{{s}}}"
    },
    {
        "d": "neptunia.wikia.com",
        "b": "nepu",
        "u": "http://neptunia.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "dvd.netflix.com",
        "b": "netflixdvd",
        "u": "https://dvd.netflix.com/Search?v1={{{s}}}"
    },
    {
        "d": "www.netflix.com",
        "b": "netflix",
        "u": "https://www.netflix.com/search?q={{{s}}}"
    },
    {
        "d": "www.netlingo.com",
        "b": "netlingo",
        "u": "http://www.netlingo.com/search.php?searchtxt={{{s}}}"
    },
    {
        "d": "www.netflix.com",
        "b": "net",
        "u": "https://www.netflix.com/search?q={{{s}}}"
    },
    {
        "d": "netrunnerdb.com",
        "b": "netrunner",
        "u": "http://netrunnerdb.com/find/?q={{{s}}}"
    },
    {
        "d": "www.newgrounds.com",
        "b": "newgrounds",
        "u": "https://www.newgrounds.com/search/summary?suitabilities=etm&terms={{{s}}}"
    },
    {
        "d": "next-episode.net",
        "b": "next",
        "u": "http://next-episode.net/site-search-{{{s}}}.html"
    },
    {
        "d": "www.nfb.ca",
        "b": "nfb",
        "u": "https://www.nfb.ca/search/#?queryString={{{s}}}&index=0&language=en"
    },
    {
        "d": "search.nfl.com",
        "b": "nfl",
        "u": "http://search.nfl.com/search/?query={{{s}}}"
    },
    {
        "d": "www.nfl.com",
        "b": "nflps",
        "u": "http://www.nfl.com/players/search?category=name&filter={{{s}}}"
    },
    {
        "d": "www.netflix.com",
        "b": "nf",
        "u": "https://www.netflix.com/search?q={{{s}}}"
    },
    {
        "d": "nfs.wikia.com",
        "b": "nfsw",
        "u": "http://nfs.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.newgrounds.com",
        "b": "ngg",
        "u": "http://www.newgrounds.com/portal/search/games/{{{s}}}"
    },
    {
        "d": "www.nhl.com",
        "b": "nhl",
        "u": "http://www.nhl.com/ice/search.htm?tab=news&q={{{s}}}&x=0&y=0"
    },
    {
        "d": "nethackwiki.com",
        "b": "nh",
        "u": "https://nethackwiki.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "nethackwiki.com",
        "b": "nhw",
        "u": "https://nethackwiki.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "dic.nicovideo.jp",
        "b": "nicodic",
        "u": "https://dic.nicovideo.jp/s/al/t/{{{s}}}/rev_created/desc/1-"
    },
    {
        "d": "live.nicovideo.jp",
        "b": "nicolive",
        "u": "https://live.nicovideo.jp/search?keyword={{{s}}}"
    },
    {
        "d": "www.nicovideo.jp",
        "b": "niconico",
        "u": "http://www.nicovideo.jp/search/{{{s}}}"
    },
    {
        "d": "www.nintendo.de",
        "b": "nintendode",
        "u": "https://www.nintendo.de/Suche-/Suche-299117.html?q={{{s}}}&f=147393"
    },
    {
        "d": "www.nintendolife.com",
        "b": "nintendolife",
        "u": "http://www.nintendolife.com/search?q={{{s}}}&submit=Go"
    },
    {
        "d": "www.nintendo.com",
        "b": "nintendo",
        "u": "https://www.nintendo.com/search/#category=all&page=1&query={{{s}}}"
    },
    {
        "d": "nintendo.wikia.com",
        "b": "nintendowiki",
        "u": "http://nintendo.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.nitrome.com",
        "b": "nitrome",
        "u": "http://www.nitrome.com/search.php?id={{{s}}}&search_type=default"
    },
    {
        "d": "www.nintendolife.com",
        "b": "nlife",
        "u": "http://www.nintendolife.com/search?q={{{s}}}&submit=Go"
    },
    {
        "d": "namemc.com",
        "b": "nmc",
        "u": "https://namemc.com/s?{{{s}}}"
    },
    {
        "d": "www.nexusmods.com",
        "b": "nm",
        "u": "https://www.nexusmods.com/search/?gsearch={{{s}}}&gsearchtype=mods"
    },
    {
        "d": "nomanssky.gamepedia.com",
        "b": "nms",
        "u": "https://nomanssky.gamepedia.com/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "search.nndb.com",
        "b": "nndb",
        "u": "http://search.nndb.com/search/nndb.cgi?nndb=1&omenu=unspecified&query={{{s}}}"
    },
    {
        "d": "cowlevel.net",
        "b": "nng",
        "u": "https://cowlevel.net/search?q={{{s}}}"
    },
    {
        "d": "live.nicovideo.jp",
        "b": "nnl",
        "u": "https://live.nicovideo.jp/search?keyword={{{s}}}"
    },
    {
        "d": "noita.gamepedia.com",
        "b": "noita",
        "u": "https://noita.gamepedia.com/{{{s}}}"
    },
    {
        "d": "nonciclopedia.wikia.com",
        "b": "nonciclopedia",
        "u": "http://nonciclopedia.wikia.com/index.php?title=Speciale%3ARicerca&search={{{s}}}&go=Vai"
    },
    {
        "d": "nookipedia.com",
        "b": "nook",
        "u": "http://nookipedia.com/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "notalwaysright.com",
        "b": "notalwaysright",
        "u": "http://notalwaysright.com/?s={{{s}}}"
    },
    {
        "d": "www.notdoppler.com",
        "b": "notdoppler",
        "u": "http://www.notdoppler.com/search.php?cx=partner-pub-5587930311934766%3A9473942733&cof=FORID%3A9&ie=UTF-8&q={{{s}}}&sa=Search"
    },
    {
        "d": "note.mu",
        "b": "note",
        "u": "https://note.mu/search?context=note&mode=search&q={{{s}}}"
    },
    {
        "d": "www.npo.nl",
        "b": "npo",
        "u": "https://www.npo.nl/zoeken?term={{{s}}}"
    },
    {
        "d": "netrunnerdb.com",
        "b": "nrdb",
        "u": "http://netrunnerdb.com/find/?q={{{s}}}"
    },
    {
        "d": "radio.nrk.no",
        "b": "nrkr",
        "u": "http://radio.nrk.no/sok?q={{{s}}}"
    },
    {
        "d": "www.nrl.com",
        "b": "nrl",
        "u": "https://www.nrl.com/search/?keyword={{{s}}}&sort=Relevance"
    },
    {
        "d": "nsindex.net",
        "b": "nsissues",
        "u": "https://nsindex.net/w/index.php?search={{{s}}}"
    },
    {
        "d": "nationstates.net",
        "b": "nsn",
        "u": "https://nationstates.net/nation={{{s}}}"
    },
    {
        "d": "nationstates.net",
        "b": "nsr",
        "u": "https://nationstates.net/region={{{s}}}"
    },
    {
        "d": "www.nts.live",
        "b": "nts",
        "u": "https://www.nts.live/find?q={{{s}}}&type=all"
    },
    {
        "d": "www.ntv.co.jp",
        "b": "ntv",
        "u": "https://www.ntv.co.jp/search/?q={{{s}}}"
    },
    {
        "d": "nuclear-throne.wikia.com",
        "b": "nuclearthrone",
        "u": "http://nuclear-throne.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "nusagates.com",
        "b": "nusagates",
        "u": "https://nusagates.com/?s={{{s}}}"
    },
    {
        "d": "www.novelupdates.com",
        "b": "nvu",
        "u": "http://www.novelupdates.com/?s={{{s}}}&post_type=seriesplans"
    },
    {
        "d": "nightvale.wikia.com",
        "b": "nvwiki",
        "u": "http://nightvale.wikia.com/wiki/Special:Search?search= {{{s}}}&fulltext=Search"
    },
    {
        "d": "neverwintervault.org",
        "b": "nwvault",
        "u": "https://neverwintervault.org/search/node/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "oatmeal",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:theoatmeal.com"
    },
    {
        "d": "ocdoc.cil.li",
        "b": "ocdoc",
        "u": "https://ocdoc.cil.li/doku.php?id=start&do=search&q={{{s}}}"
    },
    {
        "d": "www.oculus.com",
        "b": "oculus",
        "u": "https://www.oculus.com/experiences/go/search/?q={{{s}}}"
    },
    {
        "d": "www.ofdb.de",
        "b": "ofdb",
        "u": "http://www.ofdb.de/view.php?SText={{{s}}}&Kat=All&page=suchergebnis"
    },
    {
        "d": "ogdb.eu",
        "b": "ogdb",
        "u": "http://ogdb.eu/index.php?section=simplesearchresults&searchstring={{{s}}}"
    },
    {
        "d": "www.ogol.com.br",
        "b": "ogol",
        "u": "http://www.ogol.com.br/search.php?inputString={{{s}}}"
    },
    {
        "d": "forums.online-go.com",
        "b": "ogs",
        "u": "https://forums.online-go.com/search?q={{{s}}}"
    },
    {
        "d": "ohmygear.net",
        "b": "ohmygear",
        "u": "https://ohmygear.net/en/search/{{{s}}}"
    },
    {
        "d": "www.ohnorobot.com",
        "b": "ohnorobot",
        "u": "http://www.ohnorobot.com/index.php?s={{{s}}}&Search=Search&comic="
    },
    {
        "d": "rpg.hamsterrepublic.com",
        "b": "ohr",
        "u": "http://rpg.hamsterrepublic.com/ohrrpgce/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "old.reddit.com",
        "b": "oldred",
        "u": "https://old.reddit.com/search?q={{{s}}}"
    },
    {
        "d": "buscador.ole.com.ar",
        "b": "ole",
        "u": "http://buscador.ole.com.ar/{{{s}}}"
    },
    {
        "d": "oliverse.ch",
        "b": "oliverse",
        "u": "https://oliverse.ch/?search={{{s}}}"
    },
    {
        "d": "omaps.worldofo.com",
        "b": "omaps",
        "u": "http://omaps.worldofo.com/index.php?st={{{s}}}"
    },
    {
        "d": "www.omdb.org",
        "b": "omdb",
        "u": "https://www.omdb.org/search?search%5Btext%5D={{{s}}}"
    },
    {
        "d": "omelete.uol.com.br",
        "b": "omelete",
        "u": "https://omelete.uol.com.br/busca/?q={{{s}}}"
    },
    {
        "d": "www.omevan.com",
        "b": "omevan",
        "u": "https://www.omevan.com/search?q={{{s}}}:"
    },
    {
        "d": "omgvoice.com",
        "b": "omgvoice",
        "u": "https://omgvoice.com/search?term={{{s}}}"
    },
    {
        "d": "omgvoice.com",
        "b": "omgv",
        "u": "https://omgvoice.com/search?term={{{s}}}"
    },
    {
        "d": "oncyclopedia.org",
        "b": "oncyclo",
        "u": "http://oncyclopedia.org/wiki/Speciaal:Zoeken?search={{{s}}}&go=Zoeken"
    },
    {
        "d": "onepiece.wikia.com",
        "b": "onepiece",
        "u": "http://onepiece.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.theonion.com",
        "b": "onion",
        "u": "http://www.theonion.com/search/?q={{{s}}}"
    },
    {
        "d": "oxygennotincluded.gamepedia.com",
        "b": "oni",
        "u": "http://oxygennotincluded.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.nexusmods.com",
        "b": "onm",
        "u": "https://www.nexusmods.com/oblivion/search/?gsearch={{{s}}}&gsearchtype=mods"
    },
    {
        "d": "www.ohnorobot.com",
        "b": "onr",
        "u": "http://www.ohnorobot.com/index.php?s={{{s}}}&Search=Search&comic="
    },
    {
        "d": "outof.cards",
        "b": "ooc",
        "u": "https://outof.cards/search/?query={{{s}}}"
    },
    {
        "d": "www.imperialassembly.com",
        "b": "ootv",
        "u": "http://www.imperialassembly.com/oracle/?quicksearch=1&search_13={{{s}}}"
    },
    {
        "d": "br.op.gg",
        "b": "opbr",
        "u": "http://br.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "www.opendota.com",
        "b": "opendota",
        "u": "https://www.opendota.com/search?q={{{s}}}"
    },
    {
        "d": "openings.moe",
        "b": "openings",
        "u": "http://openings.moe/list/?s={{{s}}}"
    },
    {
        "d": "euw.op.gg",
        "b": "opeuw",
        "u": "http://euw.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "euw.op.gg",
        "b": "opggeuw",
        "u": "http://euw.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "www.op.gg",
        "b": "opgg",
        "u": "http://www.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "www.op.gg",
        "b": "op.gg",
        "u": "http://www.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "www.op.gg",
        "b": "opg",
        "u": "http://www.op.gg/champion/{{{s}}}"
    },
    {
        "d": "las.op.gg",
        "b": "oplas",
        "u": "http://las.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "na.op.gg",
        "b": "opna",
        "u": "http://na.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "oce.op.gg",
        "b": "opoce",
        "u": "http://oce.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "ru.op.gg",
        "b": "opru",
        "u": "http://ru.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "opskins.com",
        "b": "opskins",
        "u": "https://opskins.com/index.php?search_item={{{s}}}&min=&max=&grade=Grade&type=Type&sort=f&loc=shop_search"
    },
    {
        "d": "tr.op.gg",
        "b": "optr",
        "u": "http://tr.op.gg/summoner/userName={{{s}}}"
    },
    {
        "d": "old.reddit.com",
        "b": "ored",
        "u": "https://old.reddit.com/search?q={{{s}}}&sort=relevance&t=all"
    },
    {
        "d": "tvthek.orf.at",
        "b": "orf",
        "u": "http://tvthek.orf.at/search?q={{{s}}}"
    },
    {
        "d": "old.reddit.com",
        "b": "ors",
        "u": "https://old.reddit.com/r/{{{s}}}/"
    },
    {
        "d": "old.reddit.com",
        "b": "osr",
        "u": "https://old.reddit.com/r/{{{s}}}"
    },
    {
        "d": "services.runescape.com",
        "b": "osrsge",
        "u": "http://services.runescape.com/m=itemdb_oldschool/results?query={{{s}}}"
    },
    {
        "d": "services.runescape.com",
        "b": "osrshs",
        "u": "http://services.runescape.com/m=hiscore_oldschool/hiscorepersonal.ws?user1={{{s}}}"
    },
    {
        "d": "oldschool.runescape.wiki",
        "b": "osrs",
        "u": "https://oldschool.runescape.wiki/?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "oldschool.runescape.wiki",
        "b": "osrswiki",
        "u": "https://oldschool.runescape.wiki/?search={{{s}}}"
    },
    {
        "d": "oldschool.runescape.wiki",
        "b": "osrsw",
        "u": "https://oldschool.runescape.wiki/?search={{{s}}}"
    },
    {
        "d": "ostadium.com",
        "b": "ostadium",
        "u": "http://ostadium.com/search?q={{{s}}}"
    },
    {
        "d": "osu.ppy.sh",
        "b": "osuf",
        "u": "http://osu.ppy.sh/forum/search.php?keywords={{{s}}}&terms=all&author=&sc=1&sd=d&sr=posts&ch=300&t=0&submit=Search"
    },
    {
        "d": "osu.ppy.sh",
        "b": "osu",
        "u": "https://osu.ppy.sh/home/search?query={{{s}}}"
    },
    {
        "d": "osusearch.com",
        "b": "osus",
        "u": "http://osusearch.com/search/?title={{{s}}}"
    },
    {
        "d": "osu.ppy.sh",
        "b": "osuu",
        "u": "https://osu.ppy.sh/u/{{{s}}}"
    },
    {
        "d": "overwatch.wikia.com",
        "b": "overwatch",
        "u": "http://overwatch.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1#"
    },
    {
        "d": "overwatch.gamepedia.com",
        "b": "owgamepedia",
        "u": "https://overwatch.gamepedia.com/index.php?search={{{s}}}&title=Special:Search&go=Go"
    },
    {
        "d": "liquipedia.net",
        "b": "owliquipedia",
        "u": "https://liquipedia.net/overwatch/index.php?search={{{s}}}"
    },
    {
        "d": "masteroverwatch.com",
        "b": "owmaster",
        "u": "https://masteroverwatch.com/search/{{{s}}}"
    },
    {
        "d": "openwhyd.org",
        "b": "ow",
        "u": "https://openwhyd.org/search?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "owsr",
        "u": "https://www.reddit.com/r/Overwatch/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "outdoorzer.com",
        "b": "ozer",
        "u": "https://outdoorzer.com/s={{{s}}}"
    },
    {
        "d": "packers.com",
        "b": "packers",
        "u": "http://packers.com/?={{{s}}}"
    },
    {
        "d": "www.pacogames.com",
        "b": "paco",
        "u": "https://www.pacogames.com/search?q={{{s}}}"
    },
    {
        "d": "pad.wikia.com",
        "b": "pad",
        "u": "http://pad.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1"
    },
    {
        "d": "www.puzzledragonx.com",
        "b": "padx",
        "u": "http://www.puzzledragonx.com/en/search.asp?q={{{s}}}"
    },
    {
        "d": "www.pandora.com",
        "b": "pandora",
        "u": "https://www.pandora.com/search/{{{s}}}/all"
    },
    {
        "d": "pantip.com",
        "b": "pantip",
        "u": "https://pantip.com/search?q={{{s}}}"
    },
    {
        "d": "www.paokfc.gr",
        "b": "paokfc",
        "u": "http://www.paokfc.gr/en/?s={{{s}}}"
    },
    {
        "d": "www.papersera.net",
        "b": "papersera",
        "u": "http://www.papersera.net/cgi-bin/yabb/YaBB.cgi{{{s}}} "
    },
    {
        "d": "www.papskubber.dk",
        "b": "pap",
        "u": "http://www.papskubber.dk/?q={{{s}}}&s=search&submitbutton=S%C3%B8g"
    },
    {
        "d": "www.theparisreview.org",
        "b": "parisreview",
        "u": "http://www.theparisreview.org/search?q={{{s}}}"
    },
    {
        "d": "www.parkrun.com",
        "b": "parkrun",
        "u": "https://www.parkrun.com/search?cx=partner-pub-2762663671557547%3A1576658957&cof=FORID%3A11&ie=UTF-8&q={{{s}}}&sa=Search&siteurl=www.parkrun.com%2F&ref=&ss=631j112681j5"
    },
    {
        "d": "www.pathe.nl",
        "b": "pathe",
        "u": "https://www.pathe.nl/Zoek?q={{{s}}}"
    },
    {
        "d": "pathfinderwiki.com",
        "b": "pathfinderwiki",
        "u": "https://pathfinderwiki.com/mediawiki/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "paizo.com",
        "b": "pathsrd",
        "u": "http://paizo.com/search?q={{{s}}}&what=prd"
    },
    {
        "d": "payday.wikia.com",
        "b": "payday",
        "u": "http://payday.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.probuilds.net",
        "b": "pbc",
        "u": "https://www.probuilds.net/champions/details/{{{s}}}"
    },
    {
        "d": "pbfcomics.com",
        "b": "pbf",
        "u": "http://pbfcomics.com/?s={{{s}}}"
    },
    {
        "d": "pbolo.com",
        "b": "pbolo",
        "u": "https://pbolo.com/?s={{{s}}}"
    },
    {
        "d": "www.pbs.org",
        "b": "pbs",
        "u": "https://www.pbs.org/search/?q={{{s}}}"
    },
    {
        "d": "polandball.wikia.com",
        "b": "pbwiki",
        "u": "https://polandball.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "pcgamingwiki.com",
        "b": "pcgamingwiki",
        "u": "http://pcgamingwiki.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.pcgamesn.com",
        "b": "pcgn",
        "u": "https://www.pcgamesn.com/search/{{{s}}}"
    },
    {
        "d": "www.pcgamer.com",
        "b": "pcg",
        "u": "https://www.pcgamer.com/search/?searchTerm={{{s}}}"
    },
    {
        "d": "pcgamingwiki.com",
        "b": "pcgw",
        "u": "https://pcgamingwiki.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.procyclingstats.com",
        "b": "pcs",
        "u": "https://www.procyclingstats.com/search.php?term={{{s}}}"
    },
    {
        "d": "wiki.pcsx2.net",
        "b": "pcsx2",
        "u": "https://wiki.pcsx2.net/index.php?search={{{s}}}"
    },
    {
        "d": "podcastlist.ca",
        "b": "pdcstlst",
        "u": "https://podcastlist.ca/?s={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "pdpreddit",
        "u": "https://www.reddit.com/r/PewdiepieSubmissions/search?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "puzzledragonx.com",
        "b": "pdx",
        "u": "http://puzzledragonx.com/en/search.asp?q={{{s}}}&searchoption=1"
    },
    {
        "d": "peeron.com",
        "b": "peeron",
        "u": "http://peeron.com/cgi-bin/invcgis/psearch?query={{{s}}}&limit=none"
    },
    {
        "d": "pegi.info",
        "b": "pegi",
        "u": "https://pegi.info/search-pegi?q={{{s}}}"
    },
    {
        "d": "perezhilton.com",
        "b": "perezhilton",
        "u": "http://perezhilton.com/?s={{{s}}}"
    },
    {
        "d": "www.perfectgame.org",
        "b": "perfectgame",
        "u": "https://www.perfectgame.org/Search.aspx?search={{{s}}}"
    },
    {
        "d": "www.perlentaucher.de",
        "b": "Perlen",
        "u": "https://www.perlentaucher.de/nsuche?q={{{s}}}"
    },
    {
        "d": "personality-database.com",
        "b": "per",
        "u": "https://personality-database.com/search?q={{{s}}}"
    },
    {
        "d": "www.pro-football-reference.com",
        "b": "pfr",
        "u": "http://www.pro-football-reference.com/search/search.fcgi?search={{{s}}}&pid="
    },
    {
        "d": "cse.google.com",
        "b": "pfs",
        "u": "https://cse.google.com/cse?cx=006680642033474972217%3A6zo0hx_wle8&q={{{s}}}"
    },
    {
        "d": "phineasandferb.wikia.com",
        "b": "pfwiki",
        "u": "http://phineasandferb.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.brooksbaseball.net",
        "b": "pfx",
        "u": "http://www.brooksbaseball.net/search.php?name={{{s}}}"
    },
    {
        "d": "phun.freeforums.org",
        "b": "phun",
        "u": "http://phun.freeforums.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.pianostreet.com",
        "b": "pianostreet",
        "u": "https://www.pianostreet.com/index_sr.php?q={{{s}}}"
    },
    {
        "d": "piapro-studio.fandom.com",
        "b": "piapro",
        "u": "https://piapro-studio.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.pietsmiet.de",
        "b": "pietsmiet",
        "u": "https://www.pietsmiet.de/search?query={{{s}}}"
    },
    {
        "d": "pikabu.ru",
        "b": "pikabu",
        "u": "http://pikabu.ru/search.php?q={{{s}}}"
    },
    {
        "d": "www.pikminwiki.com",
        "b": "pikipedia",
        "u": "http://www.pikminwiki.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "pinside.com",
        "b": "pinside",
        "u": "https://pinside.com/pinball/forum/search?s=1&q={{{s}}}&include_basement=0#results"
    },
    {
        "d": "pixelmonmod.com",
        "b": "pixel",
        "u": "http://pixelmonmod.com/wiki/index.php?title={{{s}}}"
    },
    {
        "d": "www.pixelprospector.com",
        "b": "pixelp",
        "u": "http://www.pixelprospector.com/?s={{{s}}}"
    },
    {
        "d": "pikabu.ru",
        "b": "pkb",
        "u": "https://pikabu.ru/search.php?q={{{s}}}"
    },
    {
        "d": "wiki.pokemoncentral.it",
        "b": "pkmce",
        "u": "http://wiki.pokemoncentral.it/index.php?search={{{s}}}"
    },
    {
        "d": "plancke.io",
        "b": "plancke",
        "u": "https://plancke.io/hypixel/player/stats/{{{s}}}"
    },
    {
        "d": "www.planetebd.com",
        "b": "planetebd",
        "u": "http://www.planetebd.com/recherche?mot-clef={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "planetmc",
        "u": "https://www.planetminecraft.com/resources/?keywords={{{s}}}"
    },
    {
        "d": "www.play-asia.com",
        "b": "playasia",
        "u": "http://www.play-asia.com/paOS-19-71-99-15-{{{s}}}.html"
    },
    {
        "d": "duckduckgo.com",
        "b": "playonlinux",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aplayonlinux.com"
    },
    {
        "d": "www.pleated-jeans.com",
        "b": "pleatedjeans",
        "u": "http://www.pleated-jeans.com/?s={{{s}}} "
    },
    {
        "d": "www.pluggedin.com",
        "b": "pluggedin",
        "u": "https://www.pluggedin.com/search/?q={{{s}}}&i=titles&p=0&l=20&c=%7B%7D"
    },
    {
        "d": "www.pluggedin.com",
        "b": "plug",
        "u": "http://www.pluggedin.com/search?q={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmcb",
        "u": "https://www.planetminecraft.com/banners/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmcc",
        "u": "https://www.planetminecraft.com/collections/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmcd",
        "u": "https://www.planetminecraft.com/resources/mods/data-pack/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmck",
        "u": "https://www.planetminecraft.com/resources/skins/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmcm",
        "u": "https://www.planetminecraft.com/resources/mods/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmc",
        "u": "http://www.planetminecraft.com/resources/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmcp",
        "u": "https://www.planetminecraft.com/resources/projects/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmcr",
        "u": "https://www.planetminecraft.com/resources/texture_packs/?keywords={{{s}}}"
    },
    {
        "d": "www.planetminecraft.com",
        "b": "pmcs",
        "u": "https://www.planetminecraft.com/resources/servers/?keywords={{{s}}}"
    },
    {
        "d": "wiki.puella-magi.net",
        "b": "pmmm",
        "u": "https://wiki.puella-magi.net/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "pixelmon.wikia.com",
        "b": "pmon",
        "u": "http://pixelmon.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1"
    },
    {
        "d": "papermario.wikia.com",
        "b": "pmwiki",
        "u": "http://papermario.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.pandora.com",
        "b": "pndr",
        "u": "https://www.pandora.com/search/{{{s}}}"
    },
    {
        "d": "wiki.pokemoncentral.it",
        "b": "pocewiki",
        "u": "http://wiki.pokemoncentral.it/index.php?search={{{s}}}"
    },
    {
        "d": "www.pocketgamer.co.uk",
        "b": "pocketgamer",
        "u": "http://www.pocketgamer.co.uk/latest.asp?srch={{{s}}}"
    },
    {
        "d": "www.pockettactics.com",
        "b": "pockettactics",
        "u": "http://www.pockettactics.com/home/SearchForm?Search={{{s}}}"
    },
    {
        "d": "podcloud.fr",
        "b": "podcloud",
        "u": "https://podcloud.fr/search?q={{{s}}}"
    },
    {
        "d": "poedb.tw",
        "b": "poedb",
        "u": "http://poedb.tw/us/search.php?Search={{{s}}}"
    },
    {
        "d": "pathofexile.gamepedia.com",
        "b": "poegp",
        "u": "https://pathofexile.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "pathofexile.gamepedia.com",
        "b": "poepage",
        "u": "http://pathofexile.gamepedia.com/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "poer",
        "u": "https://www.reddit.com/r/pathofexile/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "pathofexile.gamepedia.com",
        "b": "poewiki",
        "u": "http://pathofexile.gamepedia.com/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "brickbronze.wikia.com",
        "b": "pokebrickbronze",
        "u": "http://brickbronze.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.pokecommunity.com",
        "b": "pokecommunity",
        "u": "https://www.pokecommunity.com/search.php?do=q{{{s}}}"
    },
    {
        "d": "pokemondb.net",
        "b": "pokedb",
        "u": "http://pokemondb.net/search?q={{{s}}}"
    },
    {
        "d": "www.pokemon.com",
        "b": "pokedex",
        "u": "https://www.pokemon.com/us/pokedex/{{{s}}}"
    },
    {
        "d": "pokemmo.wikia.com",
        "b": "pokemmo",
        "u": "http://pokemmo.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "pokemondb.net",
        "b": "pokemondb",
        "u": "http://pokemondb.net/search?q={{{s}}}"
    },
    {
        "d": "www.pokepedia.fr",
        "b": "pokepedia",
        "u": "http://www.pokepedia.fr/index.php?title=Special%3ARecherche&search={{{s}}}"
    },
    {
        "d": "www.pokewiki.de",
        "b": "pokewiki",
        "u": "http://www.pokewiki.de/index.php?search={{{s}}}&button=&title=Spezial%3ASuche"
    },
    {
        "d": "pollstar.com",
        "b": "pollstar",
        "u": "http://pollstar.com/tour/searchall.pl?By=All&Content={{{s}}}&go_green.x=0&go_green.y=0"
    },
    {
        "d": "www.polygon.com",
        "b": "polygon",
        "u": "http://www.polygon.com/search?q={{{s}}}"
    },
    {
        "d": "incendar.com",
        "b": "pop",
        "u": "http://incendar.com/funko_pop_search.php?search={{{s}}}"
    },
    {
        "d": "poppy.fandom.com",
        "b": "poppy",
        "u": "https://poppy.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.popsike.com",
        "b": "popsike",
        "u": "http://www.popsike.com/php/quicksearch.php?searchtext={{{s}}}"
    },
    {
        "d": "theportalwiki.com",
        "b": "portalwiki",
        "u": "http://theportalwiki.com/w/index.php?search={{{s}}} "
    },
    {
        "d": "port.hu",
        "b": "porthu",
        "u": "http://port.hu/kereso?q={{{s}}}"
    },
    {
        "d": "posterspy.com",
        "b": "posterspy",
        "u": "https://posterspy.com/posters/?s={{{s}}}&post_type=poster"
    },
    {
        "d": "www.der-postillon.com",
        "b": "postillon",
        "u": "http://www.der-postillon.com/search?q={{{s}}}"
    },
    {
        "d": "piratesonline.fandom.com",
        "b": "potco",
        "u": "https://piratesonline.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.powned.it",
        "b": "powned",
        "u": "https://www.powned.it/?s={{{s}}}"
    },
    {
        "d": "pr0gramm.com",
        "b": "pr0",
        "u": "http://pr0gramm.com/top/{{{s}}}"
    },
    {
        "d": "www.protondb.com",
        "b": "prdb",
        "u": "https://www.protondb.com/search?q={{{s}}}"
    },
    {
        "d": "www.amazon.com",
        "b": "primevideo",
        "u": "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Dprime-instant-video&field-keywords={{{s}}}"
    },
    {
        "d": "www.amazon.co.jp",
        "b": "primevideojp",
        "u": "https://www.amazon.co.jp/s/?url=search-alias%3Dinstant-video&field-keywords={{{s}}}"
    },
    {
        "d": "www.prosieben.de",
        "b": "pro7",
        "u": "http://www.prosieben.de/suche?q={{{s}}}"
    },
    {
        "d": "www.probuilds.net",
        "b": "probuilds",
        "u": "https://www.probuilds.net/champions/details/{{{s}}}"
    },
    {
        "d": "help.profitopia.de",
        "b": "profitopia",
        "u": "https://help.profitopia.de/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.progarchives.com",
        "b": "progarchives",
        "u": "http://www.progarchives.com/google-search-results.asp?cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}&cx=partner-pub-0447992028883143%3Aj1syec-2iv1&sa=submit&siteurl=www.progarchives.com%252Falbum.asp%253Fid%253D998"
    },
    {
        "d": "www.reddit.com",
        "b": "programmerhumor",
        "u": "https://www.reddit.com/r/ProgrammerHumor/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "www.pronto.com.ar",
        "b": "pronto",
        "u": "http://www.pronto.com.ar/search/google?q={{{s}}}"
    },
    {
        "d": "www.protondb.com",
        "b": "protondb",
        "u": "https://www.protondb.com/search?q={{{s}}}"
    },
    {
        "d": "www.protondb.com",
        "b": "proton",
        "u": "https://www.protondb.com/search?q={{{s}}}"
    },
    {
        "d": "store.playstation.com",
        "b": "psnjp",
        "u": "https://store.playstation.com/ja-jp/search/{{{s}}}"
    },
    {
        "d": "store.playstation.com",
        "b": "psnnz",
        "u": "https://store.playstation.com/en-nz/grid/search-game/1?query={{{s}}}"
    },
    {
        "d": "store.playstation.com",
        "b": "psn",
        "u": "https://store.playstation.com/#!/en-us/search/q={{{s}}}"
    },
    {
        "d": "psnprofiles.com",
        "b": "psnprofiles",
        "u": "https://psnprofiles.com/search/games?q={{{s}}}"
    },
    {
        "d": "www.pspgen.com",
        "b": "pspgen",
        "u": "http://www.pspgen.com/s/{{{s}}}/"
    },
    {
        "d": "psprices.com",
        "b": "psprices",
        "u": "https://psprices.com/search/?q={{{s}}}"
    },
    {
        "d": "store.playstation.com",
        "b": "pss",
        "u": "https://store.playstation.com/en-us/search/{{{s}}}"
    },
    {
        "d": "pkmncards.com",
        "b": "ptcg",
        "u": "http://pkmncards.com/?s={{{s}}}&display=card&sort=date"
    },
    {
        "d": "www.protondb.com",
        "b": "ptn",
        "u": "https://www.protondb.com/search?q={{{s}}}"
    },
    {
        "d": "www.ptt.cc",
        "b": "ptt",
        "u": "https://www.ptt.cc/bbs/{{{s}}}"
    },
    {
        "d": "pubgmobileupdate.com",
        "b": "pubg",
        "u": "https://pubgmobileupdate.com/?s={{{s}}}"
    },
    {
        "d": "pubg.gamepedia.com",
        "b": "pubgwiki",
        "u": "https://pubg.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.pubsgalore.co.uk",
        "b": "pubs",
        "u": "http://www.pubsgalore.co.uk/search.php?search={{{s}}}"
    },
    {
        "d": "www.puzzlopia.com",
        "b": "puzzles",
        "u": "http://www.puzzlopia.com/search-results?search={{{s}}}"
    },
    {
        "d": "plantsvszombies.wikia.com",
        "b": "pvz",
        "u": "http://plantsvszombies.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.pokewiki.de",
        "b": "pwde",
        "u": "http://www.pokewiki.de/index.php?search={{{s}}}&title=Spezial%3ASuche&go=Seite"
    },
    {
        "d": "www.primiciasya.com",
        "b": "pya",
        "u": "http://www.primiciasya.com/search.html?q={{{s}}}"
    },
    {
        "d": "pzwiki.net",
        "b": "pzw",
        "u": "https://pzwiki.net/w/index.php?search={{{s}}}"
    },
    {
        "d": "quinapalus.com",
        "b": "qat",
        "u": "http://quinapalus.com/cgi-bin/qat?pat={{{s}}}"
    },
    {
        "d": "www.bash.org",
        "b": "qdb",
        "u": "http://www.bash.org/?search={{{s}}}"
    },
    {
        "d": "qlcrew.com",
        "b": "qlcrew",
        "u": "https://qlcrew.com/?q={{{s}}}"
    },
    {
        "d": "m.quickmeme.com",
        "b": "qme",
        "u": "http://m.quickmeme.com/search/?q={{{s}}}"
    },
    {
        "d": "www.qrz.com",
        "b": "qrz",
        "u": "http://www.qrz.com/db/?callsign={{{s}}}&cmd=Search"
    },
    {
        "d": "forum.quartertothree.com",
        "b": "qt3",
        "u": "https://forum.quartertothree.com/search?expanded=true&q={{{s}}}"
    },
    {
        "d": "en.wikiquote.org",
        "b": "quotes",
        "u": "http://en.wikiquote.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.quotev.com",
        "b": "quotev",
        "u": "https://www.quotev.com/search/{{{s}}}"
    },
    {
        "d": "www.racing.com",
        "b": "racing",
        "u": "http://www.racing.com/search?q={{{s}}}"
    },
    {
        "d": "www.radiotimes.com",
        "b": "radiotimes",
        "u": "http://www.radiotimes.com/search?q={{{s}}}"
    },
    {
        "d": "animorphsforum.com",
        "b": "raf",
        "u": "http://animorphsforum.com/index.php?action=search;advanced;search={{{s}}}"
    },
    {
        "d": "roosterteeth.com",
        "b": "rah",
        "u": "https://roosterteeth.com/channel/achievement-hunter#search?term={{{s}}}"
    },
    {
        "d": "raider.io",
        "b": "raiderio",
        "u": "https://raider.io/search?type=character&name[0][contains]={{{s}}}"
    },
    {
        "d": "genius.com",
        "b": "rap",
        "u": "https://genius.com/search?q={{{s}}}"
    },
    {
        "d": "www.residentadvisor.net",
        "b": "ra",
        "u": "http://www.residentadvisor.net/search.aspx?searchstr={{{s}}}"
    },
    {
        "d": "rateyourmusic.com",
        "b": "rateyourgenre",
        "u": "https://rateyourmusic.com/genre/{{{s}}}"
    },
    {
        "d": "www.ratkojat.fi",
        "b": "ratko",
        "u": "https://www.ratkojat.fi/hae?s={{{s}}}"
    },
    {
        "d": "rawg.io",
        "b": "rawg",
        "u": "https://rawg.io/search?query={{{s}}}"
    },
    {
        "d": "razzball.com",
        "b": "razzball",
        "u": "http://razzball.com/index.php?s={{{s}}}"
    },
    {
        "d": "www.roblox.com",
        "b": "rblxg",
        "u": "https://www.roblox.com/search/users?keyword={{{s}}}"
    },
    {
        "d": "www.roblox.com",
        "b": "rblx",
        "u": "http://www.roblox.com/Catalog/Lists.aspx?m=TopFavorites&c=9&t=AllTime&d=All&q={{{s}}}"
    },
    {
        "d": "rbnorway.org",
        "b": "rbn",
        "u": "http://rbnorway.org/?s={{{s}}}"
    },
    {
        "d": "rbt.asia",
        "b": "rbtg",
        "u": "https://rbt.asia/g/search/text/{{{s}}}"
    },
    {
        "d": "rbt.asia",
        "b": "rbtmu",
        "u": "https://rbt.asia/mu/search/text/{{{s}}}/"
    },
    {
        "d": "devforum.roblox.com",
        "b": "rbxdev",
        "u": "https://devforum.roblox.com/search?q={{{s}}}"
    },
    {
        "d": "rcdb.com",
        "b": "rcdb",
        "u": "http://rcdb.com/qs.htm?qs={{{s}}}"
    },
    {
        "d": "rcf.fr",
        "b": "rcf",
        "u": "https://rcf.fr/rechercher/{{{s}}}"
    },
    {
        "d": "www.readerscave.com",
        "b": "rc",
        "u": "https://www.readerscave.com/?s={{{s}}}"
    },
    {
        "d": "www.readdc.com",
        "b": "readdc",
        "u": "https://www.readdc.com/search?search={{{s}}}&submit=SEARCH"
    },
    {
        "d": "bindingofisaacrebirth.gamepedia.com",
        "b": "rebirth",
        "u": "http://bindingofisaacrebirth.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "reborn.wikia.com",
        "b": "reborn",
        "u": "http://reborn.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.guiarecetas.com",
        "b": "recetas",
        "u": "https://www.guiarecetas.com/?s={{{s}}}"
    },
    {
        "d": "reck.dk",
        "b": "reck",
        "u": "http://reck.dk/?s={{{s}}}"
    },
    {
        "d": "www.redbox.com",
        "b": "redbox",
        "u": "http://www.redbox.com/search/?q={{{s}}}"
    },
    {
        "d": "www.redbull.com",
        "b": "redbull",
        "u": "https://www.redbull.com/int-en/search/{{{s}}}"
    },
    {
        "d": "www.reelviews.net",
        "b": "reelviews",
        "u": "http://www.reelviews.net/search/{{{s}}}"
    },
    {
        "d": "regravity.com",
        "b": "regrav",
        "u": "http://regravity.com/?s={{{s}}}"
    },
    {
        "d": "www.releases.com",
        "b": "releases",
        "u": "https://www.releases.com/search?q={{{s}}}"
    },
    {
        "d": "releasemonitor.de",
        "b": "remo",
        "u": "https://releasemonitor.de/s?q={{{s}}}"
    },
    {
        "d": "remywiki.com",
        "b": "remy",
        "u": "https://remywiki.com/index.php?search={{{s}}}"
    },
    {
        "d": "remywiki.com",
        "b": "remywiki",
        "u": "https://remywiki.com/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "www.residentadvisor.net",
        "b": "residentadvisor",
        "u": "http://www.residentadvisor.net/search.aspx?searchstr={{{s}}}"
    },
    {
        "d": "www.respawners.net",
        "b": "respawners",
        "u": "https://www.respawners.net/search?query={{{s}}}"
    },
    {
        "d": "retropie.org.uk",
        "b": "retro",
        "u": "https://retropie.org.uk/forum/search?term={{{s}}}&in=titlesposts&matchWords=all&sortBy=relevance&sortDirection=desc&showAs=posts"
    },
    {
        "d": "revengerists.wikia.com",
        "b": "revengerists",
        "u": "http://revengerists.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.radiofreesatan.com",
        "b": "rfs",
        "u": "http://www.radiofreesatan.com/?s={{{s}}}&submit=Submit"
    },
    {
        "d": "www.reddit.com",
        "b": "rgo",
        "u": "https://www.reddit.com/r/GlobalOffensive/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "www.runehq.com",
        "b": "rhq",
        "u": "http://www.runehq.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.stateofthedapps.com",
        "b": "rhtt",
        "u": "https://www.stateofthedapps.com/dapps?text={{{s}}}"
    },
    {
        "d": "rimworldwiki.com",
        "b": "rimwiki",
        "u": "http://rimworldwiki.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "r/leb",
        "u": "https://www.reddit.com/r/lebanon/search?q={{{s}}}"
    },
    {
        "d": "www.rugbyleagueproject.org",
        "b": "rlp",
        "u": "http://www.rugbyleagueproject.org/search/?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rlr",
        "u": "https://www.reddit.com/r/RocketLeague/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "rocketleague.fandom.com",
        "b": "rlw",
        "u": "https://rocketleague.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "rimworldwiki.com",
        "b": "rmw",
        "u": "https://rimworldwiki.com/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "en.rocketnews24.com",
        "b": "rn24",
        "u": "http://en.rocketnews24.com/?s={{{s}}}"
    },
    {
        "d": "www.roblox.com",
        "b": "robloxg",
        "u": "https://www.roblox.com/games/?Keyword={{{s}}}"
    },
    {
        "d": "www.roblox.com",
        "b": "robloxgr",
        "u": "http://www.roblox.com/Groups/search.aspx?val={{{s}}}"
    },
    {
        "d": "www.roblox.com",
        "b": "robloxl",
        "u": "https://www.roblox.com/develop/library?CatalogContext=2&Keyword={{{s}}}&SortAggregation=5&LegendExpanded=true&Category=6"
    },
    {
        "d": "www.roblox.com",
        "b": "roblox",
        "u": "https://www.roblox.com/games/?Keyword={{{s}}}"
    },
    {
        "d": "www.roblox.com",
        "b": "robloxu",
        "u": "https://www.roblox.com/search/users?keyword={{{s}}}"
    },
    {
        "d": "www.rogerebert.com",
        "b": "rogerebert",
        "u": "http://www.rogerebert.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "roguebasin.roguelikedevelopment.org",
        "b": "roguebasin",
        "u": "http://roguebasin.roguelikedevelopment.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.returnofkings.com",
        "b": "rok",
        "u": "http://www.returnofkings.com/?s={{{s}}}"
    },
    {
        "d": "riskofrain2.fandom.com",
        "b": "ror2",
        "u": "https://riskofrain2.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.rotoworld.com",
        "b": "roto",
        "u": "https://www.rotoworld.com/search#query={{{s}}}"
    },
    {
        "d": "www.rottentomatoes.com",
        "b": "rottentomato",
        "u": "http://www.rottentomatoes.com/search/?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "rouxbe",
        "u": "https://duckduckgo.com/?q=site%3Arouxbe.com+{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rpf",
        "u": "https://www.reddit.com/r/PublicFreakout/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "rpggeek.com",
        "b": "rpggeek",
        "u": "http://rpggeek.com/geeksearch.php?action=search&objecttype=rpgunified&q={{{s}}}&B1=Go"
    },
    {
        "d": "rpg.stackexchange.com",
        "b": "rpg",
        "u": "http://rpg.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "rpg.stackexchange.com",
        "b": "rpgsx",
        "u": "http://rpg.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.rockpapershotgun.com",
        "b": "rps",
        "u": "http://www.rockpapershotgun.com/?s={{{s}}} "
    },
    {
        "d": "riordan.fandom.com",
        "b": "rrw",
        "u": "https://riordan.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "oldschool.runescape.wiki",
        "b": "rs07",
        "u": "https://oldschool.runescape.wiki/w/Special:Search?search={{{s}}}"
    },
    {
        "d": "runescape.wiki",
        "b": "rscape",
        "u": "https://runescape.wiki/?search={{{s}}}"
    },
    {
        "d": "services.runescape.com",
        "b": "rsge",
        "u": "http://services.runescape.com/m=itemdb_rs/results?query={{{s}}}"
    },
    {
        "d": "www.rockstargames.com",
        "b": "rsg",
        "u": "https://www.rockstargames.com/search/?q={{{s}}}"
    },
    {
        "d": "www.roblox.com",
        "b": "rspt",
        "u": "https://www.roblox.com/games/?Keyword={{{s}}}"
    },
    {
        "d": "runescape.wiki",
        "b": "rs",
        "u": "https://runescape.wiki/?search={{{s}}}"
    },
    {
        "d": "reddit.com",
        "b": "rsub",
        "u": "https://reddit.com/r/{{{s}}}"
    },
    {
        "d": "runescape.wiki",
        "b": "rswikin",
        "u": "https://runescape.wiki/?search=test&title=Special%3ASearch&fulltext={{{s}}}"
    },
    {
        "d": "runescape.wiki",
        "b": "rswiki",
        "u": "https://runescape.wiki/?search={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rtboi",
        "u": "https://www.reddit.com/r/bindingofisaac/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "www.rte.ie",
        "b": "rte",
        "u": "http://www.rte.ie/search/?query={{{s}}}"
    },
    {
        "d": "roosterteeth.com",
        "b": "rth",
        "u": "https://roosterteeth.com/#search?term={{{s}}}"
    },
    {
        "d": "www.rtve.es",
        "b": "rtve",
        "u": "http://www.rtve.es/buscador/?q={{{s}}}"
    },
    {
        "d": "runescape.wiki",
        "b": "runescape",
        "u": "https://runescape.wiki/w/Special:Search?search={{{s}}}"
    },
    {
        "d": "runsignup.com",
        "b": "runsignup",
        "u": "https://runsignup.com/Races?s=&cloudSearch=T&name={{{s}}}"
    },
    {
        "d": "rustlabs.com",
        "b": "rustlabs",
        "u": "https://rustlabs.com/search={{{s}}}"
    },
    {
        "d": "rvb.wikia.com",
        "b": "rvb",
        "u": "http://rvb.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.elmonterv.com",
        "b": "rvrental",
        "u": "https://www.elmonterv.com/search/?q={{{s}}}"
    },
    {
        "d": "rateyourmusic.com",
        "b": "rymf",
        "u": "https://rateyourmusic.com/search?searchtype=F&searchterm={{{s}}}"
    },
    {
        "d": "rateyourmusic.com",
        "b": "rym",
        "u": "https://rateyourmusic.com/search?searchterm={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "rzelda",
        "u": "https://www.reddit.com/r/zelda/search/?q={{{s}}}"
    },
    {
        "d": "slice42.com",
        "b": "s42",
        "u": "https://slice42.com/?s={{{s}}}"
    },
    {
        "d": "www.saabforum.nl",
        "b": "saabforum",
        "u": "http://www.saabforum.nl/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.jiosaavn.com",
        "b": "saavn",
        "u": "https://www.jiosaavn.com/search/{{{s}}}"
    },
    {
        "d": "www.sackmuehle.de",
        "b": "sack",
        "u": "https://www.sackmuehle.de/?s=({{{s}}})"
    },
    {
        "d": "sandiamesa.com",
        "b": "sandiamesa",
        "u": "https://sandiamesa.com/?s={{{s}}}"
    },
    {
        "d": "swordartonline.wikia.com",
        "b": "sao",
        "u": "http://swordartonline.wikia.com/wiki/Special:Search?go&query={{{s}}}"
    },
    {
        "d": "forums.sapphirecommunity.com",
        "b": "sapphire",
        "u": "http://forums.sapphirecommunity.com/search.php?keywords={{{s}}}&terms=all&author=&fid%5B%5D=4&fid%5B%5D=6&sc=1&sf=all&sr=posts&sk=t&sd=d&st=0&ch=800&t=0&submit=Search"
    },
    {
        "d": "www.sarna.net",
        "b": "sarna",
        "u": "http://www.sarna.net/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.sayba.com.br",
        "b": "sayba",
        "u": "http://www.sayba.com.br/pesquisar/?q={{{s}}}"
    },
    {
        "d": "www.sbmania.net",
        "b": "sbmania",
        "u": "http://www.sbmania.net/advsearch.php?l=80&q={{{s}}}"
    },
    {
        "d": "spongebob.wikia.com",
        "b": "sbwiki",
        "u": "http://spongebob.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.scarecrow.com",
        "b": "scarecrow",
        "u": "https://www.scarecrow.com/45/search.html?keywords={{{s}}}"
    },
    {
        "d": "www.schnittberichte.com",
        "b": "schnittberichte",
        "u": "http://www.schnittberichte.com/svds.php?Page=Suche&String={{{s}}}"
    },
    {
        "d": "www.scholieren.com",
        "b": "scholieren",
        "u": "http://www.scholieren.com/zoek?q={{{s}}}"
    },
    {
        "d": "soundcloud.com",
        "b": "scloud",
        "u": "https://soundcloud.com/search?q={{{s}}}"
    },
    {
        "d": "www.smashcustommusic.com",
        "b": "scm",
        "u": "http://www.smashcustommusic.com/index.php?song={{{s}}}"
    },
    {
        "d": "imslp.org",
        "b": "score",
        "u": "http://imslp.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.scout.com",
        "b": "scout",
        "u": "http://www.scout.com/news?query={{{s}}}"
    },
    {
        "d": "lafundacionscp.wikidot.com",
        "b": "scp-es",
        "u": "http://lafundacionscp.wikidot.com/search:site/a/pf/q/{{{s}}}"
    },
    {
        "d": "scpfoundation.net",
        "b": "scpru",
        "u": "http://scpfoundation.net/search:site/q/{{{s}}}"
    },
    {
        "d": "www.scp-wiki.net",
        "b": "scp",
        "u": "http://www.scp-wiki.net/search:site/a/p/q/{{{s}}} "
    },
    {
        "d": "www.senscritique.com",
        "b": "scq",
        "u": "https://www.senscritique.com/recherche?query={{{s}}}"
    },
    {
        "d": "www.scrabblelookup.com",
        "b": "scrabblelookup",
        "u": "http://www.scrabblelookup.com/word/portion/search/{{{s}}}"
    },
    {
        "d": "scratch.mit.edu",
        "b": "scratch",
        "u": "https://scratch.mit.edu/search/projects?q={{{s}}}"
    },
    {
        "d": "www.senscritique.com",
        "b": "scri",
        "u": "http://www.senscritique.com/recherche?query={{{s}}}"
    },
    {
        "d": "scryfall.com",
        "b": "scryfall",
        "u": "https://scryfall.com/search?q={{{s}}}"
    },
    {
        "d": "scryfall.com",
        "b": "scry",
        "u": "https://scryfall.com/search?q={{{s}}}"
    },
    {
        "d": "forums.studentdoctor.net",
        "b": "sdnf",
        "u": "https://forums.studentdoctor.net/search/86811885/?q={{{s}}}"
    },
    {
        "d": "stardewvalleywiki.com",
        "b": "sdv",
        "u": "http://stardewvalleywiki.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "seatgeek.com",
        "b": "seatgeek",
        "u": "http://seatgeek.com/search/?search={{{s}}}"
    },
    {
        "d": "www.secondbike.co.uk",
        "b": "secondbike",
        "u": "https://www.secondbike.co.uk/search?q={{{s}}}"
    },
    {
        "d": "segaretro.org",
        "b": "sega",
        "u": "https://segaretro.org/index.php?search={{{s}}}"
    },
    {
        "d": "senseis.xmp.net",
        "b": "sensei",
        "u": "http://senseis.xmp.net/?search={{{s}}}&searchtype=title"
    },
    {
        "d": "senseis.xmp.net",
        "b": "senseislibrary",
        "u": "http://senseis.xmp.net/?searchstring={{{s}}}&fullsearch.x=0&fullsearch.y=0&searchtype=either"
    },
    {
        "d": "senseis.xmp.net",
        "b": "senseis",
        "u": "http://senseis.xmp.net/?searchstring={{{s}}}&fullsearch.x=0&fullsearch.y=0&searchtype=either "
    },
    {
        "d": "store.sonyentertainmentnetwork.com",
        "b": "sen",
        "u": "https://store.sonyentertainmentnetwork.com/#!/en-us/search/q={{{s}}}"
    },
    {
        "d": "sentireascoltare.com",
        "b": "sentireascoltare",
        "u": "http://sentireascoltare.com/?s={{{s}}}"
    },
    {
        "d": "www.serebii.net",
        "b": "serebii",
        "u": "http://www.serebii.net/search.shtml?cx=018410473690156091934%3A6gahkiyodbi&cof=FORID%3A11&q={{{s}}}&sa=Search&siteurl=www.serebii.net%2Findex2.shtml"
    },
    {
        "d": "serenesforest.net",
        "b": "serenes",
        "u": "https://serenesforest.net/?s={{{s}}}"
    },
    {
        "d": "serialvilla.com",
        "b": "serialvilla.com",
        "u": "http://serialvilla.com/search? keyword={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "serjunk",
        "u": "https://duckduckgo.com/?q=site%3Awww.serienjunkies.de+{{{s}}}"
    },
    {
        "d": "www.setlist.fm",
        "b": "setlist",
        "u": "http://www.setlist.fm/search?query={{{s}}}"
    },
    {
        "d": "scryfall.com",
        "b": "sfa",
        "u": "https://scryfall.com/search?q={{{s}}}"
    },
    {
        "d": "scryfall.com",
        "b": "sfl",
        "u": "https://scryfall.com/search?q={{{s}}}"
    },
    {
        "d": "thejadednetwork.com",
        "b": "sfx",
        "u": "http://thejadednetwork.com/sfx/search/?keyword={{{s}}}&submitSearch="
    },
    {
        "d": "www.shayarimerepyarki.com",
        "b": "shayari",
        "u": "https://www.shayarimerepyarki.com/search?q={{{s}}}"
    },
    {
        "d": "shbf.se",
        "b": "shbf",
        "u": "http://shbf.se/bryggaren/search.php?keywords={{{s}}}&sid=7fb2bed909445b5497565d97ea00eb62"
    },
    {
        "d": "www.sherdog.com",
        "b": "sherdog",
        "u": "http://www.sherdog.com/stats/fightfinder?SearchTxt={{{s}}}"
    },
    {
        "d": "shikimori.org",
        "b": "shikimori",
        "u": "https://shikimori.org/animes?search={{{s}}}"
    },
    {
        "d": "shikimori.org",
        "b": "shiki",
        "u": "https://shikimori.org/animes?search={{{s}}}"
    },
    {
        "d": "shitcore.org",
        "b": "shitcore",
        "u": "http://shitcore.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "help.strongholdkingdoms.com",
        "b": "shkwiki",
        "u": "http://help.strongholdkingdoms.com/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "forum.shmakerspace.org",
        "b": "shmf",
        "u": "https://forum.shmakerspace.org/search?q={{{s}}}"
    },
    {
        "d": "shikimori.org",
        "b": "shm",
        "u": "https://shikimori.org/animes?search={{{s}}}"
    },
    {
        "d": "dex.pokemonshowdown.com",
        "b": "showdown",
        "u": "http://dex.pokemonshowdown.com/?q={{{s}}}"
    },
    {
        "d": "www.shroomery.org",
        "b": "shroomery",
        "u": "https://www.shroomery.org/search.php?terms={{{s}}}"
    },
    {
        "d": "www.silvergames.com",
        "b": "silvergames",
        "u": "https://www.silvergames.com/en/s?q={{{s}}}"
    },
    {
        "d": "simpsons.wikia.com",
        "b": "simpsons",
        "u": "http://simpsons.wikia.com/wiki/Special:Search?search= {{{s}}}"
    },
    {
        "d": "www.sinemalar.com",
        "b": "sinemalar",
        "u": "http://www.sinemalar.com/ara/?type=all&page=1&q={{{s}}}"
    },
    {
        "d": "singa.com",
        "b": "singa",
        "u": "https://singa.com/search/results/{{{s}}}"
    },
    {
        "d": "sipreadrepeat.com",
        "b": "sip",
        "u": "https://sipreadrepeat.com/?s={{{s}}}"
    },
    {
        "d": "www.si.com",
        "b": "si",
        "u": "https://www.si.com/search?q={{{s}}}"
    },
    {
        "d": "schoolido.lu",
        "b": "sit",
        "u": "http://schoolido.lu/cards/?search={{{s}}}&name=&rarity=&attribute=&is_promo=&is_special=&is_event=&skill=&translated_collection=&collection=&main_unit=&sub_unit=&idol_school=&idol_year=&release_after=&release_before=&view=cards&albumbuilder_account=15585&account=&ordering=id&reverse_order=on"
    },
    {
        "d": "simpsonswiki.com",
        "b": "siw",
        "u": "http://simpsonswiki.com/w/index.php?title=Special%3ASearch&search={{{s}}} "
    },
    {
        "d": "sixdegreesofkanyewest.com",
        "b": "sixdegrees",
        "u": "https://sixdegreesofkanyewest.com/artist?q={{{s}}}"
    },
    {
        "d": "sk1er.club",
        "b": "sk1",
        "u": "https://sk1er.club/stats/{{{s}}}"
    },
    {
        "d": "wiki.sk89q.com",
        "b": "sk98q",
        "u": "http://wiki.sk89q.com/w/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.theskinnyconfidential.com",
        "b": "skinny",
        "u": "https://www.theskinnyconfidential.com/?s={{{s}}}"
    },
    {
        "d": "www.songkick.com",
        "b": "sk",
        "u": "http://www.songkick.com/search?query={{{s}}}"
    },
    {
        "d": "www.skysports.com",
        "b": "sky",
        "u": "http://www.skysports.com/search?q={{{s}}}"
    },
    {
        "d": "www.skystore.com",
        "b": "skystore",
        "u": "https://www.skystore.com/search?q={{{s}}}"
    },
    {
        "d": "strategischlui.nl",
        "b": "slnl",
        "u": "https://strategischlui.nl/?s={{{s}}}"
    },
    {
        "d": "www.smashingmagazine.com",
        "b": "smashingmagazine",
        "u": "http://www.smashingmagazine.com/search-results/?q={{{s}}}&cx=partner-pub-6779860845561969%3A5884617103&cof=FORID%3A10&ie=UTF-8"
    },
    {
        "d": "www.smogon.com",
        "b": "smgsm",
        "u": "http://www.smogon.com/dex/sm/pokemon/{{{s}}}"
    },
    {
        "d": "smite.gamepedia.com",
        "b": "smite",
        "u": "http://smite.gamepedia.com/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "www.smogon.com",
        "b": "smogonbw",
        "u": "http://www.smogon.com/dex/bw/pokemon/{{{s}}}"
    },
    {
        "d": "www.smogon.com",
        "b": "smogondp",
        "u": "http://www.smogon.com/dex/dp/pokemon/{{{s}}}"
    },
    {
        "d": "www.smogon.com",
        "b": "smogongs",
        "u": "http://www.smogon.com/dex/gs/pokemon/{{{s}}}"
    },
    {
        "d": "www.smogon.com",
        "b": "smogonrb",
        "u": "http://www.smogon.com/dex/rb/pokemon/{{{s}}}"
    },
    {
        "d": "www.smogon.com",
        "b": "smogon",
        "u": "https://www.smogon.com/dex/sm/pokemon/{{{s}}}"
    },
    {
        "d": "www.smogon.com",
        "b": "smogonsm",
        "u": "http://www.smogon.com/dex/sm/pokemon/{{{s}}}/"
    },
    {
        "d": "www.smogon.com",
        "b": "smogonxy",
        "u": "http://www.smogon.com/dex/xy/pokemon/{{{s}}}"
    },
    {
        "d": "www.smogon.com",
        "b": "smogrs",
        "u": "http://www.smogon.com/dex/rs/pokemon/{{{s}}}/"
    },
    {
        "d": "www.smogon.com",
        "b": "smog",
        "u": "http://www.smogon.com/search/?q={{{s}}}"
    },
    {
        "d": "www.swissmilk.ch",
        "b": "smre",
        "u": "https://www.swissmilk.ch/de/alle-rezepte/suche/?qt={{{s}}}&cat=Rezept+Suche&qd=1"
    },
    {
        "d": "www.mariowiki.com",
        "b": "smw",
        "u": "http://www.mariowiki.com/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.nexusmods.com",
        "b": "snm",
        "u": "https://www.nexusmods.com/skyrim/search/?gsearch={{{s}}}&gsearchtype=mods"
    },
    {
        "d": "sonic.wikia.com",
        "b": "snn",
        "u": "http://sonic.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "int.soccerway.com",
        "b": "soccerway",
        "u": "http://int.soccerway.com/search/?q={{{s}}}&module=all"
    },
    {
        "d": "soccerwiki.com",
        "b": "soccerwiki",
        "u": "http://soccerwiki.com/wiki.php?action=search&q={{{s}}}&searchType=players"
    },
    {
        "d": "socialblade.com",
        "b": "socialblade",
        "u": "https://socialblade.com/search/{{{s}}}"
    },
    {
        "d": "www.sofascore.com",
        "b": "sofasc",
        "u": "https://www.sofascore.com/search?q={{{s}}}"
    },
    {
        "d": "sofifa.com",
        "b": "sofifa",
        "u": "https://sofifa.com/players?keyword={{{s}}} "
    },
    {
        "d": "www.solomid.net",
        "b": "solomid",
        "u": "http://www.solomid.net/searchresults.php?q={{{s}}}"
    },
    {
        "d": "www.supersoluce.com",
        "b": "soluce",
        "u": "http://www.supersoluce.com/search/supersoluce/{{{s}}}"
    },
    {
        "d": "www.songfacts.com",
        "b": "songfacts",
        "u": "http://www.songfacts.com/search-song-1.php?{{{s}}}"
    },
    {
        "d": "www.songkick.com",
        "b": "songkick",
        "u": "https://www.songkick.com/search?query={{{s}}}"
    },
    {
        "d": "www.songsterr.com",
        "b": "songsterr",
        "u": "http://www.songsterr.com/a/wa/search?pattern={{{s}}}"
    },
    {
        "d": "info.sonicretro.org",
        "b": "sonicretro",
        "u": "http://info.sonicretro.org/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.sonofmarketing.it",
        "b": "sonofmarketing",
        "u": "http://www.sonofmarketing.it/?q={{{s}}}"
    },
    {
        "d": "www.sounddogs.com",
        "b": "sounddogs",
        "u": "https://www.sounddogs.com/search?keywords={{{s}}}"
    },
    {
        "d": "www.soundy.top",
        "b": "soundy",
        "u": "https://www.soundy.top/sounds?q={{{s}}}"
    },
    {
        "d": "www.southparkstudios.com",
        "b": "southpark",
        "u": "http://www.southparkstudios.com/search?keywords={{{s}}}"
    },
    {
        "d": "soyluna.wikia.com",
        "b": "soyluna",
        "u": "http://soyluna.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.eksisozluk.com",
        "b": "sozluk",
        "u": "http://www.eksisozluk.com/show.asp?t={{{s}}}"
    },
    {
        "d": "speedrun.com",
        "b": "speedrun",
        "u": "http://speedrun.com/{{{s}}}"
    },
    {
        "d": "www.speedsolving.com",
        "b": "speedsolving",
        "u": "https://www.speedsolving.com/forum/searchresults.php?q={{{s}}}"
    },
    {
        "d": "spele.nl",
        "b": "spele",
        "u": "http://spele.nl/zoeken/?q={{{s}}}"
    },
    {
        "d": "www.spieletipps.de",
        "b": "spieletipps",
        "u": "http://www.spieletipps.de/suche/?keyword={{{s}}}"
    },
    {
        "d": "www.spigotmc.org",
        "b": "spigotmc",
        "u": "https://www.spigotmc.org/search/14487199/?q={{{s}}}&o=relevance"
    },
    {
        "d": "www.spigotmc.org",
        "b": "spigot",
        "u": "https://www.spigotmc.org/search/14203285/?q={{{s}}}&o=relevance"
    },
    {
        "d": "www.spinoza.it",
        "b": "spinoza",
        "u": "http://www.spinoza.it/?s={{{s}}}"
    },
    {
        "d": "spinrilla.com",
        "b": "spinrilla",
        "u": "https://spinrilla.com/search?q={{{s}}}"
    },
    {
        "d": "www.spi0n.com",
        "b": "spion",
        "u": "http://www.spi0n.com/?s={{{s}}}"
    },
    {
        "d": "splatoonwiki.org",
        "b": "splatoon",
        "u": "http://splatoonwiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "spongebob.wikia.com",
        "b": "spongebob",
        "u": "http://spongebob.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.sporcle.com",
        "b": "sporcle",
        "u": "http://www.sporcle.com/games/tags/{{{s}}}"
    },
    {
        "d": "forum.spore.com",
        "b": "sporum",
        "u": "http://forum.spore.com/jforum/jforum.page?module=search&action=search&search_keywords={{{s}}}"
    },
    {
        "d": "www.spriters-resource.com",
        "b": "spritersresource",
        "u": "https://www.spriters-resource.com/search/?q={{{s}}}"
    },
    {
        "d": "www.spreaker.com",
        "b": "sprkr",
        "u": "https://www.spreaker.com/search?query={{{s}}}"
    },
    {
        "d": "open.spotify.com",
        "b": "spy",
        "u": "https://open.spotify.com/search/{{{s}}}"
    },
    {
        "d": "squarefaction.ru",
        "b": "sqfa",
        "u": "http://squarefaction.ru/main/search/google?searchQuery={{{s}}}"
    },
    {
        "d": "squidmag.ink",
        "b": "squidmag",
        "u": "https://squidmag.ink/?s={{{s}}}"
    },
    {
        "d": "5e.d20srd.org",
        "b": "srd5",
        "u": "http://5e.d20srd.org/search.htm?q={{{s}}}"
    },
    {
        "d": "www.d20srd.org",
        "b": "srd",
        "u": "http://www.d20srd.org/search.htm?q={{{s}}}"
    },
    {
        "d": "reddit.com",
        "b": "sreddit",
        "u": "http://reddit.com/r/{{{s}}}"
    },
    {
        "d": "info.sonicretro.org",
        "b": "sretro",
        "u": "http://info.sonicretro.org/index.php?search={{{s}}}"
    },
    {
        "d": "steamrep.com",
        "b": "sri",
        "u": "http://steamrep.com/id/{{{s}}}"
    },
    {
        "d": "shoryuken.com",
        "b": "srk",
        "u": "http://shoryuken.com/?s={{{s}}}"
    },
    {
        "d": "old.reddit.com",
        "b": "sro",
        "u": "https://old.reddit.com/r/{{{s}}}/"
    },
    {
        "d": "reddit.com",
        "b": "sr",
        "u": "http://reddit.com/r/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "srrl",
        "u": "https://www.reddit.com/r/RocketLeague/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "www.reddit.com",
        "b": "srtop",
        "u": "https://www.reddit.com/r/{{{s}}}/top/?sort=top&t=all"
    },
    {
        "d": "ssaft.com",
        "b": "ssaft",
        "u": "http://ssaft.com/Blog/dotclear/?q={{{s}}}"
    },
    {
        "d": "www.ssbwiki.com",
        "b": "ssb",
        "u": "http://www.ssbwiki.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.songsterr.com",
        "b": "stabs",
        "u": "http://www.songsterr.com/a/wa/search?pattern={{{s}}}"
    },
    {
        "d": "play.stan.com.au",
        "b": "stan",
        "u": "https://play.stan.com.au/programs{{{s}}}"
    },
    {
        "d": "starbounder.org",
        "b": "starbounder",
        "u": "http://starbounder.org/mediawiki/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "starbounder.org",
        "b": "starbound",
        "u": "http://starbounder.org/mediawiki/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "stardewvalleywiki.com",
        "b": "stardew",
        "u": "http://stardewvalleywiki.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "stardewvalleywiki.com",
        "b": "stardewvalley",
        "u": "http://stardewvalleywiki.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "stargate.wikia.com",
        "b": "stargate",
        "u": "http://stargate.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "starmadepedia.net",
        "b": "starmade",
        "u": "https://starmadepedia.net/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.starticket.ch",
        "b": "starticket",
        "u": "https://www.starticket.ch/de/suche?_csquery={{{s}}}"
    },
    {
        "d": "memory-alpha.wikia.com",
        "b": "startrek",
        "u": "http://memory-alpha.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&resultsLang=en"
    },
    {
        "d": "starwars.wikia.com",
        "b": "starwars",
        "u": "http://starwars.wikia.com/wiki/Special:Search?search={{{s}}}&go=&fulltext=Search "
    },
    {
        "d": "steamcommunity.com",
        "b": "stcm",
        "u": "https://steamcommunity.com/id/{{{s}}}"
    },
    {
        "d": "steamcharts.com",
        "b": "steamcharts",
        "u": "http://steamcharts.com/search/?q={{{s}}}"
    },
    {
        "d": "steamcommunity.com",
        "b": "steamcommunity",
        "u": "http://steamcommunity.com/actions/Search?K={{{s}}}"
    },
    {
        "d": "steamdb.info",
        "b": "steamdb",
        "u": "http://steamdb.info/search/?a=app&q={{{s}}}"
    },
    {
        "d": "www.steamgifts.com",
        "b": "steamgift",
        "u": "https://www.steamgifts.com/giveaways/search?q={{{s}}}"
    },
    {
        "d": "steamcommunity.com",
        "b": "steamgl",
        "u": "https://steamcommunity.com/workshop/browse/?appid=765&searchtext={{{s}}}"
    },
    {
        "d": "store.steampowered.com",
        "b": "steamid",
        "u": "https://store.steampowered.com/app/{{{s}}}/"
    },
    {
        "d": "store.steampowered.com",
        "b": "steamkey",
        "u": "https://store.steampowered.com/account/registerkey?key={{{s}}}"
    },
    {
        "d": "steamcommunity.com",
        "b": "steammarket",
        "u": "http://steamcommunity.com/market/search?q={{{s}}}"
    },
    {
        "d": "www.steamprices.com",
        "b": "steamprices",
        "u": "http://www.steamprices.com/us/search?{{{s}}}"
    },
    {
        "d": "steamrep.com",
        "b": "steamrep",
        "u": "http://steamrep.com/?q={{{s}}}"
    },
    {
        "d": "steamspy.com",
        "b": "steamspy",
        "u": "http://steamspy.com/search.php?s={{{s}}}"
    },
    {
        "d": "store.steampowered.com",
        "b": "steam",
        "u": "http://store.steampowered.com/search/?term={{{s}}}"
    },
    {
        "d": "www.steamtrades.com",
        "b": "steamtrades",
        "u": "http://www.steamtrades.com/forum/search/{{{s}}}"
    },
    {
        "d": "stellaris.paradoxwikis.com",
        "b": "stellaris",
        "u": "https://stellaris.paradoxwikis.com/index.php?search={{{s}}}"
    },
    {
        "d": "store.steampowered.com",
        "b": "ste",
        "u": "http://store.steampowered.com/search/?term={{{s}}}"
    },
    {
        "d": "strategischlui.nl",
        "b": "strategischlui",
        "u": "https://strategischlui.nl/?s={{{s}}}"
    },
    {
        "d": "strategywiki.org",
        "b": "strategywiki",
        "u": "https://strategywiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "slay-the-spire.fandom.com",
        "b": "stsw",
        "u": "https://slay-the-spire.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.stubhub.com",
        "b": "stubhub",
        "u": "http://www.stubhub.com/search/doSearch?searchStr={{{s}}}&pageNumber=1&resultsPerPage=50&searchMode=event&start=0&rows=50"
    },
    {
        "d": "studiofutbol.com.ec",
        "b": "studiofutbol",
        "u": "http://studiofutbol.com.ec/?submit=&s={{{s}}}"
    },
    {
        "d": "singletrackworld.com",
        "b": "stw",
        "u": "https://singletrackworld.com/forum/search/{{{s}}}"
    },
    {
        "d": "subeta.net",
        "b": "subetashops",
        "u": "https://subeta.net/user_shops.php/search/shops/{{{s}}}"
    },
    {
        "d": "subnautica.wikia.com",
        "b": "subnautica",
        "u": "http://subnautica.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "subr",
        "u": "http://www.reddit.com/r/{{{s}}}"
    },
    {
        "d": "www.serialupdates.me",
        "b": "su.me",
        "u": "https://www.serialupdates.me/?s={{{s}}}"
    },
    {
        "d": "www.summitpost.org",
        "b": "summitpost",
        "u": "http://www.summitpost.org/object_list.php?object_type=0&object_name_0={{{s}}}&page=1"
    },
    {
        "d": "voat.co",
        "b": "sv",
        "u": "https://voat.co/v/{{{s}}}"
    },
    {
        "d": "stardewvalleywiki.com",
        "b": "svw",
        "u": "http://stardewvalleywiki.com/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "summonerswar.wikia.com",
        "b": "swars",
        "u": "http://summonerswar.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.spaghetti-western.net",
        "b": "swdb",
        "u": "http://www.spaghetti-western.net/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "starwars.wikia.com",
        "b": "swwiki",
        "u": "http://starwars.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "schedule.sxsw.com",
        "b": "sxsw",
        "u": "https://schedule.sxsw.com/2019/search?q={{{s}}}"
    },
    {
        "d": "www.stuffyoushouldknow.com",
        "b": "sysk",
        "u": "https://www.stuffyoushouldknow.com/search.php?terms={{{s}}}"
    },
    {
        "d": "thetacticalguru.com",
        "b": "tacticalguru",
        "u": "https://thetacticalguru.com/?s={{{s}}}"
    },
    {
        "d": "tanuki.pl",
        "b": "tanuki",
        "u": "http://tanuki.pl/szukaj/{{{s}}}"
    },
    {
        "d": "tapastic.com",
        "b": "tapastic",
        "u": "https://tapastic.com/search/SERIES/list?query={{{s}}}"
    },
    {
        "d": "www.tapology.com",
        "b": "tapology",
        "u": "https://www.tapology.com/search?term={{{s}}}"
    },
    {
        "d": "tappedout.net",
        "b": "tap",
        "u": "http://tappedout.net/search/?q={{{s}}}"
    },
    {
        "d": "tardis.wikia.com",
        "b": "tardis",
        "u": "http://tardis.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "escapefromtarkov.gamepedia.com",
        "b": "tarkov",
        "u": "https://escapefromtarkov.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "tasvideos.org",
        "b": "tas",
        "u": "http://tasvideos.org/Search.html?key={{{s}}} "
    },
    {
        "d": "www.taste.com.au",
        "b": "taste",
        "u": "http://www.taste.com.au/search-recipes/?q={{{s}}}"
    },
    {
        "d": "www.tibia.com",
        "b": "tbc",
        "u": "http://www.tibia.com/community/?subtopic=characters&name={{{s}}}"
    },
    {
        "d": "www.tbn.org",
        "b": "tbn",
        "u": "https://www.tbn.org/search?s={{{s}}}"
    },
    {
        "d": "www.thechristianfilmreview.com",
        "b": "tcfreview",
        "u": "https://www.thechristianfilmreview.com/?s={{{s}}}"
    },
    {
        "d": "store.tcgplayer.com",
        "b": "tcgplayer",
        "u": "http://store.tcgplayer.com/magic/product/show?cardname={{{s}}}"
    },
    {
        "d": "tcrf.net",
        "b": "tcrf",
        "u": "http://tcrf.net/index.php?search={{{s}}}"
    },
    {
        "d": "thronesdb.com",
        "b": "tdb",
        "u": "https://thronesdb.com/find?q={{{s}}}"
    },
    {
        "d": "www.ulisses-regelwiki.de",
        "b": "tdegr",
        "u": "http://www.ulisses-regelwiki.de/index.php/search.html?keywords={{{s}}}"
    },
    {
        "d": "tarotdetiziana.com",
        "b": "tdt",
        "u": "https://tarotdetiziana.com/?s={{{s}}}"
    },
    {
        "d": "www.teamliquid.net",
        "b": "teamliquid",
        "u": "http://www.teamliquid.net/forum/search.php?q={{{s}}}"
    },
    {
        "d": "wiki.telefang.net",
        "b": "telefang",
        "u": "http://wiki.telefang.net/index.php?search={{{s}}}"
    },
    {
        "d": "www.telerama.fr",
        "b": "telerama",
        "u": "http://www.telerama.fr/recherche/recherche.php?query={{{s}}}"
    },
    {
        "d": "www.telkku.com",
        "b": "telkku",
        "u": "http://www.telkku.com/search?searchText={{{s}}}"
    },
    {
        "d": "www.telsu.fi",
        "b": "telsu",
        "u": "http://www.telsu.fi/{{{s}}}"
    },
    {
        "d": "www.tennisabstract.com",
        "b": "tena",
        "u": "http://www.tennisabstract.com/cgi-bin/player.cgi?p={{{s}}}"
    },
    {
        "d": "tera.wikia.com",
        "b": "tera",
        "u": "http://tera.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "terraria.gamepedia.com",
        "b": "terraria",
        "u": "https://terraria.gamepedia.com/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "terraria.gamepedia.com",
        "b": "terrg",
        "u": "http://terraria.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "elderscrolls.wikia.com",
        "b": "teswiki",
        "u": "http://elderscrolls.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "texty.krestys.lt",
        "b": "texty",
        "u": "http://texty.krestys.lt/paieska.php?t={{{s}}}"
    },
    {
        "d": "backpack.tf",
        "b": "tf2bp",
        "u": "http://backpack.tf/id/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "tf2r",
        "u": "https://www.reddit.com/r/tf2/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "wiki.teamfortress.com",
        "b": "tf2",
        "u": "http://wiki.teamfortress.com/w/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "wiki.teamfortress.com",
        "b": "tf2wiki",
        "u": "http://wiki.teamfortress.com/w/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "ticketforevent.com",
        "b": "tfe",
        "u": "https://ticketforevent.com/events/?q={{{s}}}"
    },
    {
        "d": "www.teamfortress.tv",
        "b": "tftv",
        "u": "http://www.teamfortress.tv/search?q={{{s}}}"
    },
    {
        "d": "tfwiki.net",
        "b": "tfwiki",
        "u": "http://tfwiki.net/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "tolkiengateway.net",
        "b": "tgate",
        "u": "http://tolkiengateway.net/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "tgstation13.org",
        "b": "tgs",
        "u": "https://tgstation13.org/wiki//index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "thronesdb.com",
        "b": "thdb",
        "u": "http://thronesdb.com/find?q={{{s}}}"
    },
    {
        "d": "theatricalia.com",
        "b": "theatricalia",
        "u": "https://theatricalia.com/search?q={{{s}}}"
    },
    {
        "d": "www.thecrag.com",
        "b": "thecrag",
        "u": "https://www.thecrag.com/nodes/fuzzy-search/{{{s}}}?S={{{s}}}&ST=w"
    },
    {
        "d": "www.thefunny.in",
        "b": "thefunny",
        "u": "https://www.thefunny.in/?s={{{s}}}"
    },
    {
        "d": "www.thefutoncritic.com",
        "b": "thefutoncritic",
        "u": "http://www.thefutoncritic.com/search.aspx?q={{{s}}}&type=titles"
    },
    {
        "d": "www.thegreat.uk",
        "b": "thegreat",
        "u": "https://www.thegreat.uk/?s={{{s}}}"
    },
    {
        "d": "www.thehdroom.com",
        "b": "thehdroom",
        "u": "https://www.thehdroom.com/?s={{{s}}}"
    },
    {
        "d": "www.themoviedb.org",
        "b": "themoviedb",
        "u": "http://www.themoviedb.org/search?query={{{s}}}"
    },
    {
        "d": "www.theonion.com",
        "b": "theonion",
        "u": "http://www.theonion.com/search/?q={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.thetoptens.com",
        "b": "thetoptens",
        "u": "http://www.thetoptens.com/search.asp?q={{{s}}}&cx=partner-pub-5900458016987292%3Agdkm434o44o&cof=FORID%3A9&ie=ISO-8859-1&siteurl=www.thetoptens.com%2F%3Fq%3Da&ref=&ss=421j55697j9"
    },
    {
        "d": "tonyhawkgames.wikia.com",
        "b": "thgw",
        "u": "http://tonyhawkgames.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.thisamericanlife.org",
        "b": "thislife",
        "u": "https://www.thisamericanlife.org/archive?keyword={{{s}}}"
    },
    {
        "d": "thmods.com",
        "b": "thmods",
        "u": "http://thmods.com/forum/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.thonky.com",
        "b": "thonky",
        "u": "https://www.thonky.com/search.php?q={{{s}}}"
    },
    {
        "d": "thoriummod.gamepedia.com",
        "b": "thoriummod",
        "u": "https://thoriummod.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.thousand-sunny.org",
        "b": "thousand",
        "u": "http://www.thousand-sunny.org/?s={{{s}}}"
    },
    {
        "d": "www.hollywoodreporter.com",
        "b": "thr",
        "u": "https://www.hollywoodreporter.com/search/{{{s}}}"
    },
    {
        "d": "en.touhouwiki.net",
        "b": "thwiki",
        "u": "http://en.touhouwiki.net/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "en.touhouwiki.net",
        "b": "thw",
        "u": "http://en.touhouwiki.net/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "secure.tibia.com",
        "b": "tibia",
        "u": "https://secure.tibia.com/community/?subtopic=characters&name={{{s}}}"
    },
    {
        "d": "tibia.wikia.com",
        "b": "tibiawiki",
        "u": "http://tibia.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.ticketnetwork.com",
        "b": "ticketnetwork",
        "u": "https://www.ticketnetwork.com/en/search/?text={{{s}}}"
    },
    {
        "d": "passport.baidu.com",
        "b": "tiebaid",
        "u": "https://passport.baidu.com/v2/?regnamesugg&username={{{s}}}"
    },
    {
        "d": "tieba.baidu.com",
        "b": "tieba",
        "u": "http://tieba.baidu.com/f?ie=utf-8&kw={{{s}}}"
    },
    {
        "d": "db.tigsource.com",
        "b": "tigdb",
        "u": "http://db.tigsource.com/search?game[name]={{{s}}}"
    },
    {
        "d": "www.tigsource.com",
        "b": "tigsource",
        "u": "http://www.tigsource.com/?s={{{s}}}"
    },
    {
        "d": "www.tigsource.com",
        "b": "tig",
        "u": "http://www.tigsource.com/?s={{{s}}}"
    },
    {
        "d": "www.tiketti.fi",
        "b": "tikettien",
        "u": "http://www.tiketti.fi/events#q={{{s}}}"
    },
    {
        "d": "www.tiketti.fi",
        "b": "tiketti",
        "u": "http://www.tiketti.fi/tapahtumat#q={{{s}}}"
    },
    {
        "d": "www.tinhouse.com",
        "b": "tinhouse",
        "u": "http://www.tinhouse.com/blog/search_results?cx=011725669505340441470%3Ak2fqsblnr5c&cof=FORID%3A9&ie=UTF-8&q={{{s}}}&sa=Search"
    },
    {
        "d": "tirage-gagnant.com",
        "b": "tiragegagnant",
        "u": "http://tirage-gagnant.com/?s={{{s}}}"
    },
    {
        "d": "tunein.com",
        "b": "ti",
        "u": "http://tunein.com/search/?query={{{s}}}"
    },
    {
        "d": "www3.tivo.com",
        "b": "tivo",
        "u": "http://www3.tivo.com/tivo-tco/search.do?dispatch=simplesearch&searchFor={{{s}}}"
    },
    {
        "d": "trakt.tv",
        "b": "tki",
        "u": "https://trakt.tv/search/imdb?query={{{s}}}"
    },
    {
        "d": "trakt.tv",
        "b": "tkm",
        "u": "http://trakt.tv/search/movies?q={{{s}}}"
    },
    {
        "d": "trakt.tv",
        "b": "tks",
        "u": "http://trakt.tv/search/shows?q={{{s}}}"
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "tld",
        "u": "http://wiki.teamliquid.net/dota2/index.php?search={{{s}}}"
    },
    {
        "d": "www.teamliquid.net",
        "b": "tl",
        "u": "http://www.teamliquid.net/forum/search.php?q={{{s}}}"
    },
    {
        "d": "wiki.teamliquid.net",
        "b": "tlw",
        "u": "http://wiki.teamliquid.net/starcraft2/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.torn.com",
        "b": "tmarket",
        "u": "https://www.torn.com/imarket.php#/p=shop&step=shop&type=&searchname={{{s}}}"
    },
    {
        "d": "www.transfermarkt.com",
        "b": "tmen",
        "u": "http://www.transfermarkt.com/schnellsuche/ergebnis/schnellsuche?query={{{s}}}"
    },
    {
        "d": "www.transfermarkt.co.uk",
        "b": "tmuk",
        "u": "http://www.transfermarkt.co.uk/schnellsuche/ergebnis/schnellsuche?query={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.tmz.com",
        "b": "tmz",
        "u": "http://www.tmz.com/search/articles/{{{s}}}/1/"
    },
    {
        "d": "tnbc1.com",
        "b": "tnbc1",
        "u": "https://tnbc1.com/?s={{{s}}} "
    },
    {
        "d": "wiki.tockdom.com",
        "b": "tockdom",
        "u": "http://wiki.tockdom.com/w/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "tomeofknowledge.info",
        "b": "tok",
        "u": "http://tomeofknowledge.info/?q={{{s}}}"
    },
    {
        "d": "www.tokyonoise.net",
        "b": "tokyonoise",
        "u": "http://www.tokyonoise.net/cerca.php?s={{{s}}}&p=1"
    },
    {
        "d": "tolkiengateway.net",
        "b": "tolkiengateway",
        "u": "http://tolkiengateway.net/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "te4.org",
        "b": "tome",
        "u": "https://te4.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "tomwoods.com",
        "b": "tom",
        "u": "https://tomwoods.com/search/{{{s}}}/"
    },
    {
        "d": "www.toramp.com",
        "b": "toramp",
        "u": "http://www.toramp.com/search.php?search={{{s}}}"
    },
    {
        "d": "towerofsaviors.wikia.com",
        "b": "toswikia",
        "u": "http://towerofsaviors.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "en.touhouwiki.net",
        "b": "touhou",
        "u": "http://en.touhouwiki.net/index.php?search={{{s}}} "
    },
    {
        "d": "kidultkingdom.com",
        "b": "toys",
        "u": "https://kidultkingdom.com/?s={{{s}}}"
    },
    {
        "d": "thepeoplescube.com",
        "b": "tpc",
        "u": "http://thepeoplescube.com/searchGoogle.php?cx=partner-pub-8404716009789025%3A4p2aqaojris&cof=FORID%3A9&ie=ISO-8859-1&q={{{s}}}&sa="
    },
    {
        "d": "themeparkpress.com",
        "b": "tppress",
        "u": "https://themeparkpress.com/?s={{{s}}}"
    },
    {
        "d": "www.traileraddict.com",
        "b": "traileraddict",
        "u": "http://www.traileraddict.com/search/{{{s}}}"
    },
    {
        "d": "www.traileraddict.com",
        "b": "trailer",
        "u": "http://www.traileraddict.com/search.php?sitesearch=www.traileraddict.com&q={{{s}}}"
    },
    {
        "d": "trakt.tv",
        "b": "trakt",
        "u": "http://trakt.tv/search?utf8=%E2%9C%93&query={{{s}}}"
    },
    {
        "d": "www.transfermarkt.de",
        "b": "transfermarkt",
        "u": "http://www.transfermarkt.de/schnellsuche/ergebnis/schnellsuche?query={{{s}}}&x=0&y=0"
    },
    {
        "d": "gizoogle.net",
        "b": "tranz",
        "u": "http://gizoogle.net/tranzizzle.php?search={{{s}}}&se=Go+Git+Dis+Shiznit"
    },
    {
        "d": "trashwiki.org",
        "b": "trashwiki",
        "u": "http://trashwiki.org/w/index.php?search={{{s}}}&title=Special:Search"
    },
    {
        "d": "www.transfermarkt.de",
        "b": "trfde",
        "u": "http://www.transfermarkt.de/de/undefined/suche/ergebnis.html?quicksearch={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.rolexforums.com",
        "b": "trf",
        "u": "http://www.rolexforums.com/tags.php?tag={{{s}}}"
    },
    {
        "d": "www.trictrac.net",
        "b": "trictrac",
        "u": "http://www.trictrac.net/recherche?query={{{s}}}"
    },
    {
        "d": "axisandallies.wikia.com",
        "b": "triplea",
        "u": "http://axisandallies.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1#"
    },
    {
        "d": "triviaowl.com",
        "b": "triviaowl",
        "u": "https://triviaowl.com/?s={{{s}}} "
    },
    {
        "d": "allthetropes.wikia.com",
        "b": "tropes",
        "u": "http://allthetropes.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.trueachievements.com",
        "b": "trueachievements",
        "u": "https://www.trueachievements.com/searchresults.aspx?search={{{s}}}"
    },
    {
        "d": "truesteamachievements.com",
        "b": "truesteam",
        "u": "https://truesteamachievements.com/searchresults.aspx?search={{{s}}}"
    },
    {
        "d": "www.truetrophies.com",
        "b": "truetrophies",
        "u": "https://www.truetrophies.com/searchresults.aspx?search={{{s}}}"
    },
    {
        "d": "wiki.travellerrpg.com",
        "b": "trw",
        "u": "http://wiki.travellerrpg.com/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "toontownrewritten.wikia.com",
        "b": "ttr",
        "u": "http://toontownrewritten.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "truyendi.com",
        "b": "ttruyen",
        "u": "http://truyendi.com/tim-kiem-truyen.html?q={{{s}}}"
    },
    {
        "d": "www.twitch.tv",
        "b": "ttv",
        "u": "https://www.twitch.tv/search?term={{{s}}}"
    },
    {
        "d": "tumbview.com",
        "b": "tumbview",
        "u": "http://tumbview.com/{{{s}}}/grid/"
    },
    {
        "d": "www.tunefind.com",
        "b": "tunefind",
        "u": "https://www.tunefind.com/search/site?q={{{s}}}"
    },
    {
        "d": "www.theturboforums.com",
        "b": "turbo",
        "u": "https://www.theturboforums.com/search/153518/?q={{{s}}}"
    },
    {
        "d": "tuxdb.com",
        "b": "tuxdb",
        "u": "https://tuxdb.com/section/db&page=0&search={{{s}}}"
    },
    {
        "d": "search.tv2.dk",
        "b": "tv2",
        "u": "https://search.tv2.dk/?query={{{s}}}&sort=relevance&page=1"
    },
    {
        "d": "www.ccma.cat",
        "b": "tv3",
        "u": "http://www.ccma.cat/tv3/alacarta/cercador/?items_pagina=15&perfil=rellevancia&profile=videos&text={{{s}}}"
    },
    {
        "d": "www.tv.com",
        "b": "tvcom",
        "u": "http://www.tv.com/search?q={{{s}}}"
    },
    {
        "d": "www.thetvdb.com",
        "b": "tvdbfr",
        "u": "https://www.thetvdb.com/search?q={{{s}}}&l=fr"
    },
    {
        "d": "www.thetvdb.com",
        "b": "tvdb",
        "u": "https://www.thetvdb.com/search?query={{{s}}}&l=en"
    },
    {
        "d": "www.tvguide.com",
        "b": "tvguide",
        "u": "http://www.tvguide.com/search/index.aspx?keyword={{{s}}}"
    },
    {
        "d": "www.tvmaze.com",
        "b": "tvmaze",
        "u": "https://www.tvmaze.com/search?q={{{s}}}"
    },
    {
        "d": "www.tvnz.co.nz",
        "b": "tvnz",
        "u": "https://www.tvnz.co.nz/search?q={{{s}}}"
    },
    {
        "d": "www.tvp.pl",
        "b": "tvp",
        "u": "https://www.tvp.pl/szukaj?query={{{s}}}"
    },
    {
        "d": "tvseriesfinale.com",
        "b": "tvseriesfinale",
        "u": "http://tvseriesfinale.com/?s={{{s}}}"
    },
    {
        "d": "www.tvspielfilm.de",
        "b": "tvspielfilm",
        "u": "http://www.tvspielfilm.de/suche/?q={{{s}}} "
    },
    {
        "d": "www.tvshowtime.com",
        "b": "tvst",
        "u": "http://www.tvshowtime.com/en/search?q={{{s}}}"
    },
    {
        "d": "tvthek.orf.at",
        "b": "tvthek",
        "u": "http://tvthek.orf.at/search?q={{{s}}}"
    },
    {
        "d": "tvtropes.org",
        "b": "tvtropes",
        "u": "http://tvtropes.org/pmwiki/search_result.php?cx=partner-pub-6610802604051523%3Aamzitfn8e7v&cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}&siteurl=tvtropes.org%2Fpmwiki%2Fpmwiki.php%2FMain%2FHomePage"
    },
    {
        "d": "www.tv.com",
        "b": "tv",
        "u": "http://www.tv.com/search?q= {{{s}}}"
    },
    {
        "d": "www.twitch.tv",
        "b": "twg",
        "u": "https://www.twitch.tv/directory/game/{{{s}}}"
    },
    {
        "d": "www.twitch.tv",
        "b": "twich",
        "u": "http://www.twitch.tv/search?query={{{s}}} "
    },
    {
        "d": "www.twitch.tv",
        "b": "twitchchat",
        "u": "https://www.twitch.tv/{{{s}}}/chat?popout="
    },
    {
        "d": "twitch.tv",
        "b": "twitchc",
        "u": "https://twitch.tv/{{{s}}}"
    },
    {
        "d": "www.twitch.tv",
        "b": "twitchg",
        "u": "https://www.twitch.tv/directory/game/{{{s}}}"
    },
    {
        "d": "player.twitch.tv",
        "b": "twitchpop",
        "u": "https://player.twitch.tv/?volume=0.5&channel={{{s}}}"
    },
    {
        "d": "twitch.tv",
        "b": "twitch",
        "u": "https://twitch.tv/{{{s}}}"
    },
    {
        "d": "www.thewanderingrv.com",
        "b": "twrv",
        "u": "https://www.thewanderingrv.com/search/{{{s}}}"
    },
    {
        "d": "witcher.gamepedia.com",
        "b": "tww",
        "u": "http://witcher.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "search2.tv-tokyo.co.jp",
        "b": "tx",
        "u": "http://search2.tv-tokyo.co.jp/pc/?enc=UTF-8&q={{{s}}}"
    },
    {
        "d": "u.gg",
        "b": "uchamp",
        "u": "https://u.gg/lol/champions/{{{s}}}"
    },
    {
        "d": "www.uci.org",
        "b": "uci",
        "u": "https://www.uci.org/search?q={{{s}}}"
    },
    {
        "d": "en.uesp.net",
        "b": "uesp",
        "u": "http://en.uesp.net/w/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "ufc.com",
        "b": "ufc",
        "u": "https://ufc.com/search?search={{{s}}}&sort_by=created"
    },
    {
        "d": "u.gg",
        "b": "ugg",
        "u": "https://u.gg/opensearch/?query={{{s}}}"
    },
    {
        "d": "u.gg",
        "b": "u.gg",
        "u": "https://u.gg/opensearch/?query={{{s}}}"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "ug",
        "u": "https://www.ultimate-guitar.com/search.php?search_type=title&value={{{s}}}"
    },
    {
        "d": "www.uitinvlaanderen.be",
        "b": "uitinv",
        "u": "http://www.uitinvlaanderen.be/agenda/search?query={{{s}}}"
    },
    {
        "d": "ukcsgo.com",
        "b": "ukcsgo",
        "u": "http://ukcsgo.com/forums/search/{{{s}}}/"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "ultimate-guitar",
        "u": "http://www.ultimate-guitar.com/search.php?search_type=title&value={{{s}}}"
    },
    {
        "d": "ultrastar-es.org",
        "b": "ultrastares",
        "u": "http://ultrastar-es.org/en/canciones?busqueda={{{s}}}"
    },
    {
        "d": "uncyclopedia.wikia.com",
        "b": "uncyclopedia",
        "u": "http://uncyclopedia.wikia.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "en.uncyclopedia.co",
        "b": "uncyc",
        "u": "https://en.uncyclopedia.co/w/index.php?search={{{s}}}"
    },
    {
        "d": "undertale.wikia.com",
        "b": "undertale",
        "u": "http://undertale.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "wiki.eveuniversity.org",
        "b": "uniwiki",
        "u": "https://wiki.eveuniversity.org/index.php?title=Special%3ASearch&search={{{s}}}&button="
    },
    {
        "d": "www.youtube.com",
        "b": "unnotchslayer1yt",
        "u": "https://www.youtube.com/channel/UCBX3P-QmXmCgWmCU2Mqt9sg/search?query={{{s}}}"
    },
    {
        "d": "unogs.com",
        "b": "unogs",
        "u": "http://unogs.com/search/?q={{{s}}}"
    },
    {
        "d": "www.unp.me",
        "b": "unp",
        "u": "http://www.unp.me/search/1/?q={{{s}}}"
    },
    {
        "d": "docs.unrealengine.com",
        "b": "unrealengine",
        "u": "https://docs.unrealengine.com/en-us/Search-Results?Search={{{s}}}"
    },
    {
        "d": "www.unseen64.net",
        "b": "unseen64",
        "u": "http://www.unseen64.net/?s={{{s}}}"
    },
    {
        "d": "uncyclopedia.wikia.com",
        "b": "unwiki",
        "u": "http://uncyclopedia.wikia.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.reddit.com",
        "b": "unxprn",
        "u": "https://www.reddit.com/r/unixporn/search?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "wiki.uqm.stack.nl",
        "b": "uqm",
        "u": "http://wiki.uqm.stack.nl/index.php?search={{{s}}}"
    },
    {
        "d": "wiki.uqm.stack.nl",
        "b": "uq",
        "u": "http://wiki.uqm.stack.nl/script/index.php?search={{{s}}}&go=Go&title=Special%3ASearch"
    },
    {
        "d": "urbaneffect.net",
        "b": "urbanfx",
        "u": "http://urbaneffect.net/?s={{{s}}}"
    },
    {
        "d": "forums.urealms.com",
        "b": "urealmsforums",
        "u": "https://forums.urealms.com/search?Search={{{s}}}"
    },
    {
        "d": "wiki.urealms.com",
        "b": "urealms",
        "u": "https://wiki.urealms.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.uschess.org",
        "b": "uschess",
        "u": "http://www.uschess.org/datapage/player-search.php?name={{{s}}}&state=ANY&ratingmin=&ratingmax=&order=N&rating=R&mode=Find"
    },
    {
        "d": "www.usopen.org",
        "b": "usopen",
        "u": "https://www.usopen.org/en_US/search/results.html?query={{{s}}}"
    },
    {
        "d": "wiki.utopia-game.com",
        "b": "utopia",
        "u": "http://wiki.utopia-game.com/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "unlimitedworld.de",
        "b": "uwmc",
        "u": "https://unlimitedworld.de/search/1786851/?q={{{s}}}"
    },
    {
        "d": "www.ssjoy.org",
        "b": "uwo",
        "u": "https://www.ssjoy.org/dho/?vid=&mid=home&act=IS&is_target=all&is_keyword={{{s}}}"
    },
    {
        "d": "www.unwrapyourmind.com",
        "b": "uym",
        "u": "https://www.unwrapyourmind.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.vagalume.com.br",
        "b": "vagalume",
        "u": "http://www.vagalume.com.br/search.php?q={{{s}}}"
    },
    {
        "d": "db.vanillagaming.org",
        "b": "vag",
        "u": "http://db.vanillagaming.org/?search={{{s}}}"
    },
    {
        "d": "vanillawowdb.com",
        "b": "vani",
        "u": "https://vanillawowdb.com/?search={{{s}}}"
    },
    {
        "d": "vandal.elespanol.com",
        "b": "van",
        "u": "https://vandal.elespanol.com/busqueda/{{{s}}}"
    },
    {
        "d": "fallout.gamepedia.com",
        "b": "vault",
        "u": "http://fallout.gamepedia.com/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "veekun.com",
        "b": "veekun",
        "u": "http://veekun.com/dex/lookup?lookup={{{s}}}"
    },
    {
        "d": "vertigo.wikia.com",
        "b": "vertigocomics",
        "u": "http://vertigo.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "videoeta.com",
        "b": "ve",
        "u": "https://videoeta.com/search?utf8=%E2%9C%93&keywords={{{s}}}"
    },
    {
        "d": "www.viagogo.de",
        "b": "vggde",
        "u": "http://www.viagogo.de/searchResults.aspx?SearchText={{{s}}}"
    },
    {
        "d": "www.viagogo.co.uk",
        "b": "vgguk",
        "u": "http://www.viagogo.co.uk/searchResults.aspx?SearchText={{{s}}}"
    },
    {
        "d": "www.viagogo.com",
        "b": "vgg",
        "u": "http://www.viagogo.com/searchResults.aspx?SearchText={{{s}}}"
    },
    {
        "d": "vgmdb.net",
        "b": "vgmdb",
        "u": "https://vgmdb.net/search?q={{{s}}}"
    },
    {
        "d": "videogames.pricecharting.com",
        "b": "vgpc",
        "u": "http://videogames.pricecharting.com/search?q={{{s}}}&submit=Go"
    },
    {
        "d": "vic2.paradoxwikis.com",
        "b": "vic2",
        "u": "https://vic2.paradoxwikis.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.videoculinary.ru",
        "b": "videoculinary",
        "u": "http://www.videoculinary.ru/search/?q={{{s}}}"
    },
    {
        "d": "www.videodetective.com",
        "b": "videodetective",
        "u": "http://www.videodetective.com/Search/Results?id={{{s}}}"
    },
    {
        "d": "videogamegeek.com",
        "b": "videogamegeek",
        "u": "http://videogamegeek.com/geeksearch.php?action=search&objecttype=videogameunified&q={{{s}}}&B1=Go"
    },
    {
        "d": "vigilantcitizen.com",
        "b": "vigcit",
        "u": "http://vigilantcitizen.com/?s={{{s}}} "
    },
    {
        "d": "www.viki.com",
        "b": "vik",
        "u": "https://www.viki.com/search?q={{{s}}}"
    },
    {
        "d": "villains.wikia.com",
        "b": "villain",
        "u": "http://villains.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.vlive.tv",
        "b": "vlive",
        "u": "https://www.vlive.tv/search/all?query={{{s}}}"
    },
    {
        "d": "vndb.org",
        "b": "vndb",
        "u": "http://vndb.org/v/all?sq={{{s}}}"
    },
    {
        "d": "vanillo.co",
        "b": "vnillo",
        "u": "https://vanillo.co/search?q={{{s}}}"
    },
    {
        "d": "vocaloid.wikia.com",
        "b": "vocaloid",
        "u": "http://vocaloid.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.voicy.network",
        "b": "voicy",
        "u": "https://www.voicy.network/clips/search?search={{{s}}}"
    },
    {
        "d": "voltron.wikia.com",
        "b": "voltron",
        "u": "http://voltron.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "vortex.gg",
        "b": "vortexcg",
        "u": "https://vortex.gg/games?title={{{s}}}"
    },
    {
        "d": "www.vossey.com",
        "b": "vossey",
        "u": "http://www.vossey.com/recherche/index.php?ac=recherche&titre={{{s}}}"
    },
    {
        "d": "videogames.pricecharting.com",
        "b": "vp",
        "u": "http://videogames.pricecharting.com/search?q={{{s}}}&type=videogames&go=Go"
    },
    {
        "d": "vrchat.net",
        "b": "vrchat",
        "u": "https://vrchat.net/home/search/{{{s}}}"
    },
    {
        "d": "vrv.co",
        "b": "vrv",
        "u": "https://vrv.co/?q={{{s}}}"
    },
    {
        "d": "vtmb.wikia.com",
        "b": "vtmb",
        "u": "http://vtmb.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.vudu.com",
        "b": "vudu",
        "u": "https://www.vudu.com/content/movies/search?searchString={{{s}}}"
    },
    {
        "d": "vukajlija.com",
        "b": "vukajlija",
        "u": "http://vukajlija.com/pretraga/izraz?s={{{s}}}"
    },
    {
        "d": "www.kaskus.co.id",
        "b": "w3kaskus",
        "u": "http://www.kaskus.co.id/search/forum?q={{{s}}}"
    },
    {
        "d": "waapt.wiki.tropi.us",
        "b": "waapt",
        "u": "https://waapt.wiki.tropi.us/wiki/Special:Search/{{{s}}}"
    },
    {
        "d": "www.wad-archive.com",
        "b": "wad",
        "u": "http://www.wad-archive.com/search?o=d&q={{{s}}}"
    },
    {
        "d": "waitbutwhy.com",
        "b": "waitbutwhy",
        "u": "http://waitbutwhy.com/?s={{{s}}}"
    },
    {
        "d": "walkypedia.wikia.com",
        "b": "walky",
        "u": "http://walkypedia.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "totalwarwarhammer.gamepedia.com",
        "b": "warhammer",
        "u": "https://totalwarwarhammer.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.world-art.ru",
        "b": "waru",
        "u": "http://www.world-art.ru/search.php?public_search={{{s}}}&global_sector=all"
    },
    {
        "d": "www.wba.co.uk",
        "b": "wbafc",
        "u": "https://www.wba.co.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "wbd",
        "u": "https://www.reddit.com/r/worldbuilding/?q={{{s}}}&restrict_sr=on&include_over_18=on&sort=relevance&t=all"
    },
    {
        "d": "www.worldcubeassociation.org",
        "b": "wcach",
        "u": "https://www.worldcubeassociation.org/competitions?utf8=%E2%9C%93&region={{{s}}}&search=&state=present&year=all+years&display=list"
    },
    {
        "d": "www.wikicanaan.org",
        "b": "wcanaan",
        "u": "http://www.wikicanaan.org/wiki/bienvenue?do=search&id={{{s}}}&fulltext=Recherche"
    },
    {
        "d": "www.warcraftlogs.com",
        "b": "wcl",
        "u": "https://www.warcraftlogs.com/search/?term={{{s}}}"
    },
    {
        "d": "es.pokemon.wikia.com",
        "b": "wdex",
        "u": "http://es.pokemon.wikia.com/wiki/Especial:Buscar?query={{{s}}}"
    },
    {
        "d": "wdtprs.com",
        "b": "wdtprs",
        "u": "http://wdtprs.com/blog/?s={{{s}}}"
    },
    {
        "d": "es.pokemon.wikia.com",
        "b": "wdx",
        "u": "http://es.pokemon.wikia.com/wiki/WikiDex={{{s}}}"
    },
    {
        "d": "www.webbspy.com",
        "b": "webbspy",
        "u": "https://www.webbspy.com/?s={{{s}}}"
    },
    {
        "d": "www.webnovel.com",
        "b": "webnovel",
        "u": "https://www.webnovel.com/search?keywords={{{s}}}"
    },
    {
        "d": "www.webtoons.com",
        "b": "webtoon",
        "u": "https://www.webtoons.com/search?keyword={{{s}}}"
    },
    {
        "d": "www.webtoons.com",
        "b": "webtoons",
        "u": "https://www.webtoons.com/search?keyword={{{s}}}"
    },
    {
        "d": "weezerpedia.com",
        "b": "weezer",
        "u": "http://weezerpedia.com/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.werstreamt.es",
        "b": "werstreamt",
        "u": "https://www.werstreamt.es/filme-serien?q={{{s}}}"
    },
    {
        "d": "www.werstreamt.es",
        "b": "wer",
        "u": "https://www.werstreamt.es/filme-serien?q={{{s}}}&action_results=suchen"
    },
    {
        "d": "www.weltfussball.de",
        "b": "wfdep",
        "u": "http://www.weltfussball.de/suche/?q={{{s}}}&kind=1"
    },
    {
        "d": "www.weltfussball.de",
        "b": "wfdet",
        "u": "http://www.weltfussball.de/suche/?q={{{s}}}&kind=2"
    },
    {
        "d": "de.warframe.wikia.com",
        "b": "wfde",
        "u": "http://de.warframe.wikia.com/wiki/Spezial:Suche?search={{{s}}}"
    },
    {
        "d": "warframe.wikia.com",
        "b": "wfen",
        "u": "http://warframe.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.wholefoodsmarket.com",
        "b": "wfm",
        "u": "http://www.wholefoodsmarket.com/site_search/{{{s}}} "
    },
    {
        "d": "www.worldfootball.net",
        "b": "wfootball",
        "u": "http://www.worldfootball.net/search/?q={{{s}}}&kind=1"
    },
    {
        "d": "warframe.wikia.com",
        "b": "wfwiki",
        "u": "http://warframe.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "warframe.wikia.com",
        "b": "wfw",
        "u": "http://warframe.wikia.com/wiki/Special:WikiaSearch?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "wiki.wargaming.net",
        "b": "wgw",
        "u": "http://wiki.wargaming.net/en/index.php?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "whatif",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:what-if.xkcd.com"
    },
    {
        "d": "whatupintown.com",
        "b": "whatupintown",
        "u": "https://whatupintown.com/search/?q={{{s}}}"
    },
    {
        "d": "classic.wowhead.com",
        "b": "whc",
        "u": "https://classic.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "forums.whirlpool.net.au",
        "b": "whirlpool",
        "u": "http://forums.whirlpool.net.au/forum/?action=search&q={{{s}}}"
    },
    {
        "d": "forums.whirlpool.net.au",
        "b": "whlp",
        "u": "https://forums.whirlpool.net.au/forum/?action=search&q={{{s}}}"
    },
    {
        "d": "www.whoscored.com",
        "b": "whoscored",
        "u": "http://www.whoscored.com/Search/?t={{{s}}}"
    },
    {
        "d": "www.wiki-aventurica.de",
        "b": "wia",
        "u": "http://www.wiki-aventurica.de/index.php?title=Spezial:Suche&search={{{s}}}"
    },
    {
        "d": "answers.wikia.com",
        "b": "wikianswers",
        "u": "http://answers.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns112=1&ns500=1&ns502=1"
    },
    {
        "d": "wikibound.info",
        "b": "wikibound",
        "u": "http://wikibound.info/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.wikidex.net",
        "b": "wikidex",
        "u": "https://www.wikidex.net/index.php?search={{{s}}}"
    },
    {
        "d": "wikimoon.org",
        "b": "wikimoon",
        "u": "http://wikimoon.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.wikipaintings.org",
        "b": "wikipaintings",
        "u": "http://www.wikipaintings.org/en/search/{{{s}}}/1"
    },
    {
        "d": "wikirby.com",
        "b": "wikirby",
        "u": "http://wikirby.com/w/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "metroid.wikia.com",
        "b": "wikitroid",
        "u": "http://metroid.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "wiki.vg",
        "b": "wikivg",
        "u": "http://wiki.vg/index.php?search={{{s}}}"
    },
    {
        "d": "www.winehq.org",
        "b": "winehq",
        "u": "https://www.winehq.org/search?q={{{s}}}"
    },
    {
        "d": "windows.microsoft.com",
        "b": "win",
        "u": "http://windows.microsoft.com/en-US/windows/search#q={{{s}}}"
    },
    {
        "d": "www.thewire.co.uk",
        "b": "wire",
        "u": "https://www.thewire.co.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.wiringherlant.nl",
        "b": "wiringherlant",
        "u": "http://www.wiringherlant.nl/?s={{{s}}}"
    },
    {
        "d": "themindsjournal.com",
        "b": "wisepick",
        "u": "https://themindsjournal.com/?s={{{s}}}"
    },
    {
        "d": "www.wikidex.net",
        "b": "wkdx",
        "u": "https://www.wikidex.net/index.php?title=Especial:Buscar&search={{{s}}}"
    },
    {
        "d": "www.wykop.pl",
        "b": "wkp",
        "u": "http://www.wykop.pl/szukaj/{{{s}}}/?"
    },
    {
        "d": "www.wunschliste.de",
        "b": "wlde",
        "u": "http://www.wunschliste.de/suche/{{{s}}}"
    },
    {
        "d": "fr.wikiloc.com",
        "b": "wlfr",
        "u": "http://fr.wikiloc.com/wikiloc/find.do?q={{{s}}}"
    },
    {
        "d": "westofloathing.gamepedia.com",
        "b": "wolw",
        "u": "https://westofloathing.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "starwars.wikia.com",
        "b": "wookieepedia",
        "u": "http://starwars.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1"
    },
    {
        "d": "starwars.wikia.com",
        "b": "wookie",
        "u": "http://starwars.wikia.com/wiki/Special:Search?search={{{s}}}&go=&fulltext=Search"
    },
    {
        "d": "www.world-art.ru",
        "b": "worldart",
        "u": "http://www.world-art.ru/search.php?public_search={{{s}}}&global_sector=all"
    },
    {
        "d": "www.worldcubeassociation.org",
        "b": "worldcubeassociation",
        "u": "https://www.worldcubeassociation.org/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "worldmusic",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Arootsworld.com%2Crootsworld.org&ia=web"
    },
    {
        "d": "www.worldofspectrum.org",
        "b": "worldofspectrum",
        "u": "http://www.worldofspectrum.org/infoseek.cgi?regexp={{{s}}}&model=any&loadpics=3&fast=on"
    },
    {
        "d": "worms2d.info",
        "b": "worms",
        "u": "http://worms2d.info/?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "wortvogel.de",
        "b": "wortvogel",
        "u": "http://wortvogel.de/?s={{{s}}}"
    },
    {
        "d": "oldschool.runescape.wiki",
        "b": "wosrs",
        "u": "https://oldschool.runescape.wiki/?search={{{s}}}&title=Special:Search&go=Go"
    },
    {
        "d": "www.worldofspectrum.org",
        "b": "wos",
        "u": "http://www.worldofspectrum.org/infoseek.cgi?regexp={{{s}}}&model=any&loadpics=3&fast=on"
    },
    {
        "d": "wiki.wargaming.net",
        "b": "wotwiki",
        "u": "http://wiki.wargaming.net/en/index.php?search={{{s}}}"
    },
    {
        "d": "www.woutick.es",
        "b": "woutick",
        "u": "https://www.woutick.es/?busqueda={{{s}}}"
    },
    {
        "d": "eu.battle.net",
        "b": "wowarmoryeu",
        "u": "http://eu.battle.net/wow/en/search?q={{{s}}}"
    },
    {
        "d": "us.battle.net",
        "b": "wowarmoryus",
        "u": "http://us.battle.net/wow/en/search?q={{{s}}}"
    },
    {
        "d": "us.battle.net",
        "b": "wowarmory",
        "u": "http://us.battle.net/wow/en/search?q={{{s}}}"
    },
    {
        "d": "eu.battle.net",
        "b": "wowbattlenet",
        "u": "http://eu.battle.net/wow/en/search?q={{{s}}}"
    },
    {
        "d": "classic.wowhead.com",
        "b": "wowclassic",
        "u": "https://classic.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "www.wowdb.com",
        "b": "wowdb",
        "u": "http://www.wowdb.com/search?search={{{s}}}"
    },
    {
        "d": "fr.wowhead.com",
        "b": "wowfr",
        "u": "https://fr.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "classic.wowhead.com",
        "b": "wowhc",
        "u": "https://classic.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "de.wowhead.com",
        "b": "wowheadde",
        "u": "http://de.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "fr.wowhead.com",
        "b": "wowheadfr",
        "u": "http://fr.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "www.wowhead.com",
        "b": "wowhead",
        "u": "http://www.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "es.wowhead.com",
        "b": "wowhes",
        "u": "https://es.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "ru.wowhead.com",
        "b": "wowhr",
        "u": "http://ru.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "www.wowhead.com",
        "b": "wowh",
        "u": "http://www.wowhead.com/search?q={{{s}}}"
    },
    {
        "d": "www.wowpedia.org",
        "b": "wowpedia",
        "u": "http://www.wowpedia.org/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "www.wowprogress.com",
        "b": "wowprogress",
        "u": "https://www.wowprogress.com/search?q={{{s}}}"
    },
    {
        "d": "worldofwarcraft.com",
        "b": "wow",
        "u": "https://worldofwarcraft.com/search?q={{{s}}}"
    },
    {
        "d": "{{{s}}}.wordpress.com",
        "b": "wpblog",
        "u": "http://{{{s}}}.wordpress.com"
    },
    {
        "d": "www.wsgf.org",
        "b": "wsgf",
        "u": "http://www.wsgf.org/mgl?title_op=contains&game_name={{{s}}}"
    },
    {
        "d": "www.wtatennis.com",
        "b": "wta",
        "u": "http://www.wtatennis.com/search/query/{{{s}}}"
    },
    {
        "d": "whatthefuckshouldilistentorightnow.com",
        "b": "wtl",
        "u": "http://whatthefuckshouldilistentorightnow.com/artist.php?artist={{{s}}}"
    },
    {
        "d": "www.webtoons.com",
        "b": "wtoon",
        "u": "https://www.webtoons.com/search?keyword={{{s}}}"
    },
    {
        "d": "wiki.warthunder.com",
        "b": "wtw",
        "u": "http://wiki.warthunder.com/index.php?search={{{s}}} "
    },
    {
        "d": "www.wumingfoundation.com",
        "b": "wuming",
        "u": "http://www.wumingfoundation.com/giap/?s={{{s}}}"
    },
    {
        "d": "www.wurmweb.at",
        "b": "wurmweb",
        "u": "http://www.wurmweb.at/?s={{{s}}}"
    },
    {
        "d": "wurmpedia.com",
        "b": "wurm",
        "u": "http://wurmpedia.com/index.php?search={{{s}}}&fulltext=Search&title=Special%3ASearch"
    },
    {
        "d": "www.wwe.com",
        "b": "wwe",
        "u": "https://www.wwe.com/search/all/relevance/{{{s}}}"
    },
    {
        "d": "forum.wuxiaworld.com",
        "b": "wxf",
        "u": "https://forum.wuxiaworld.com/search?Search={{{s}}}"
    },
    {
        "d": "wynncraft.gamepedia.com",
        "b": "wynn",
        "u": "https://wynncraft.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.xbox.com",
        "b": "xbox",
        "u": "http://www.xbox.com/en-GB/Search?q={{{s}}}#All"
    },
    {
        "d": "xenoblade.wikia.com",
        "b": "xenoblade",
        "u": "http://xenoblade.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.xiami.com",
        "b": "xiami",
        "u": "http://www.xiami.com/search?key={{{s}}}"
    },
    {
        "d": "xivdb.com",
        "b": "xivdb",
        "u": "http://xivdb.com/?search={{{s}}}"
    },
    {
        "d": "xivdb.com",
        "b": "xiv",
        "u": "http://xivdb.com/?search={{{s}}}"
    },
    {
        "d": "www.xkcdb.com",
        "b": "xkcdb",
        "u": "http://www.xkcdb.com/?search={{{s}}}"
    },
    {
        "d": "xkcd.com",
        "b": "xkcdn",
        "u": "http://xkcd.com/{{{s}}}/"
    },
    {
        "d": "xkcd.com",
        "b": "xkcd",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:xkcd.com"
    },
    {
        "d": "www.y8.com",
        "b": "y8",
        "u": "http://www.y8.com/search?utf8=%E2%9C%93&kind=game&q={{{s}}}"
    },
    {
        "d": "chiebukuro.search.yahoo.co.jp",
        "b": "ychiejp",
        "u": "http://chiebukuro.search.yahoo.co.jp/search?p={{{s}}}"
    },
    {
        "d": "www.yentlendeboer.nl",
        "b": "yentlendeboer",
        "u": "http://www.yentlendeboer.nl/?s={{{s}}}"
    },
    {
        "d": "yugioh.wikia.com",
        "b": "ygo",
        "u": "http://yugioh.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.yidio.com",
        "b": "yidio",
        "u": "http://www.yidio.com/search/entertainment/{{{s}}}/1?find={{{s}}}"
    },
    {
        "d": "tv.yahoo.co.jp",
        "b": "yjtv",
        "u": "https://tv.yahoo.co.jp/search/?q={{{s}}}"
    },
    {
        "d": "youngjustice.wikia.com",
        "b": "yjwiki",
        "u": "http://youngjustice.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "yogscast.wikia.com",
        "b": "yogscast",
        "u": "http://yogscast.wikia.com/wiki/index.php?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.soku.com",
        "b": "youku",
        "u": "http://www.soku.com/search_video/q_{{{s}}}"
    },
    {
        "d": "www.yourtv.com.au",
        "b": "yourtv",
        "u": "http://www.yourtv.com.au/guide/search.aspx?q={{{s}}}"
    },
    {
        "d": "www.youtv.de",
        "b": "youtv",
        "u": "https://www.youtv.de/suche?search[q]={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "you",
        "u": "https://www.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "yppedia.puzzlepirates.com",
        "b": "ypp",
        "u": "https://yppedia.puzzlepirates.com/Special:Search?search={{{s}}}"
    },
    {
        "d": "search.yahoo.com",
        "b": "ysports",
        "u": "https://search.yahoo.com/search?p=/{{{s}}}"
    },
    {
        "d": "ystream.tv",
        "b": "ystream",
        "u": "https://ystream.tv/q/?s={{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytc",
        "u": "https://www.youtube.com/user/{{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "ytes",
        "u": "https://www.youtube.com/results?search_query={{{s}}}&gl=ES&hl=es"
    },
    {
        "d": "gaming.youtube.com",
        "b": "ytgaming",
        "u": "https://gaming.youtube.com/results?search_query={{{s}}}"
    },
    {
        "d": "ytmnd.com",
        "b": "ytmnd",
        "u": "http://ytmnd.com/search?q={{{s}}}"
    },
    {
        "d": "tv.youtube.com",
        "b": "yttv",
        "u": "https://tv.youtube.com/search/{{{s}}}"
    },
    {
        "d": "www.yourtv.com.au",
        "b": "ytv",
        "u": "http://www.yourtv.com.au/guide/search.aspx?q={{{s}}}"
    },
    {
        "d": "www.db.yugioh-card.com",
        "b": "yugiohdb",
        "u": "http://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&keyword={{{s}}}&stype=1&ctype=&starfr=&starto=&atkfr=&atkto=&deffr=&defto=&othercon=1"
    },
    {
        "d": "yugipedia.com",
        "b": "yugioh",
        "u": "https://yugipedia.com/wiki/Special:Search?search={{{s}}}&button=Go"
    },
    {
        "d": "yume100prince.wikia.com",
        "b": "yume100",
        "u": "http://yume100prince.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "yuyuhakusho.wikia.com",
        "b": "yyh",
        "u": "http://yuyuhakusho.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.z100.com",
        "b": "z100",
        "u": "http://www.z100.com/main.html/?q={{{s}}}"
    },
    {
        "d": "eq2.zam.com",
        "b": "zameq2",
        "u": "http://eq2.zam.com/search.html?q={{{s}}}"
    },
    {
        "d": "everquest.allakhazam.com",
        "b": "zameq",
        "u": "http://everquest.allakhazam.com/search.html?q={{{s}}}"
    },
    {
        "d": "www.zbsamp.com",
        "b": "zbsamp",
        "u": "http://www.zbsamp.com/index.php?action=search2;search={{{s}}}"
    },
    {
        "d": "www.zeldadungeon.net",
        "b": "zdw",
        "u": "https://www.zeldadungeon.net/wiki/Special:Search/{{{s}}}"
    },
    {
        "d": "www.zeldadungeon.net",
        "b": "zd",
        "u": "https://www.zeldadungeon.net/?s={{{s}}}"
    },
    {
        "d": "zelda.wikia.com",
        "b": "zeldapedia",
        "u": "http://zelda.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.zeldauniverse.net",
        "b": "zeldauniverse",
        "u": "http://www.zeldauniverse.net/?s={{{s}}}"
    },
    {
        "d": "zelda.gamepedia.com",
        "b": "zeldawiki",
        "u": "https://zelda.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.zero.eu",
        "b": "zero",
        "u": "http://www.zero.eu/?s={{{s}}}"
    },
    {
        "d": "zkillboard.com",
        "b": "zkb",
        "u": "https://zkillboard.com/search/{{{s}}}/"
    },
    {
        "d": "zkillboard.com",
        "b": "zkillboard",
        "u": "https://zkillboard.com/search/{{{s}}}/"
    },
    {
        "d": "zkillboard.com",
        "b": "zkill",
        "u": "https://zkillboard.com/search/{{{s}}} /"
    },
    {
        "d": "www.zeldauniverse.net",
        "b": "zu",
        "u": "http://www.zeldauniverse.net/?s={{{s}}}"
    },
    {
        "d": "zelda.gamepedia.com",
        "b": "zw",
        "u": "https://zelda.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.zerozero.pt",
        "b": "zz",
        "u": "http://www.zerozero.pt/search.php?op=all&inputString={{{s}}}"
    }
], bangs);
