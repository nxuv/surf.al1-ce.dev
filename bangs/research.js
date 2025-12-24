var bangs = bangs || [];

bangs = [].concat([
    {
        "d": "www.1177.se",
        "b": "1177",
        "u": "http://www.1177.se/Sok/?q={{{s}}}"
    },
    {
        "d": "11870.com",
        "b": "11870",
        "u": "http://11870.com/konsulto?q={{{s}}}"
    },
    {
        "d": "34travel.me",
        "b": "34travel",
        "u": "https://34travel.me/search?text={{{s}}}"
    },
    {
        "d": "www.3gpp.org",
        "b": "3gpp",
        "u": "http://www.3gpp.org/DynaReport/{{{s}}}.htm"
    },
    {
        "d": "food52.com",
        "b": "52",
        "u": "http://food52.com/recipes/search?q={{{s}}}"
    },
    {
        "d": "fivethirtyeight.com",
        "b": "538",
        "u": "http://fivethirtyeight.com/?s={{{s}}}"
    },
    {
        "d": "www.750g.com",
        "b": "750g",
        "u": "https://www.750g.com/recherche.htm?search={{{s}}}"
    },
    {
        "d": "80000hours.org",
        "b": "80k",
        "u": "https://80000hours.org/search/?q={{{s}}}"
    },
    {
        "d": "hermetic.com",
        "b": "93",
        "u": "https://hermetic.com/index?do=search&id={{{s}}}"
    },
    {
        "d": "990finder.foundationcenter.org",
        "b": "990",
        "u": "http://990finder.foundationcenter.org/990results.aspx?990_type=&fn={{{s}}}&st=&zp=&ei=&fy=&action=Search"
    },
    {
        "d": "aare.edu.ee",
        "b": "aare",
        "u": "https://aare.edu.ee/dictionary.html?query={{{s}}}&lang=ee"
    },
    {
        "d": "www.getty.edu",
        "b": "aat",
        "u": "http://www.getty.edu/vow/AATServlet?english=N&find={{{s}}}&logic=AND&page=1&note="
    },
    {
        "d": "www.abbreviations.com",
        "b": "abbr",
        "u": "http://www.abbreviations.com/{{{s}}}"
    },
    {
        "d": "www.abcam.com",
        "b": "abcam",
        "u": "https://www.abcam.com/products?keywords={{{s}}}"
    },
    {
        "d": "www.abebooks.com",
        "b": "abebooks",
        "u": "http://www.abebooks.com/servlet/SearchResults?kn={{{s}}}"
    },
    {
        "d": "www.abiunity.de",
        "b": "abiunity",
        "u": "https://www.abiunity.de/datenbank.php?boardid=48#!v=searchdb&search={{{s}}}&boardid=48"
    },
    {
        "d": "abr.business.gov.au",
        "b": "abn",
        "u": "http://abr.business.gov.au/Search.aspx?SearchText={{{s}}}"
    },
    {
        "d": "abo.finna.fi",
        "b": "abol",
        "u": "https://abo.finna.fi/Search/Results?lookfor={{{s}}}&type=AllFields"
    },
    {
        "d": "aberdeenshire.gov.uk",
        "b": "abshire",
        "u": "http://aberdeenshire.gov.uk/search?search={{{s}}}"
    },
    {
        "d": "www.academia.edu",
        "b": "academia",
        "u": "http://www.academia.edu/people/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "academicearth.org",
        "b": "academicearth",
        "u": "https://academicearth.org/?s={{{s}}}"
    },
    {
        "d": "dic.academic.ru",
        "b": "acad",
        "u": "http://dic.academic.ru/searchall.php?SWord={{{s}}}"
    },
    {
        "d": "www.accc.gov.au",
        "b": "accc",
        "u": "https://www.accc.gov.au/site-search/{{{s}}}"
    },
    {
        "d": "www.archchinese.com",
        "b": "ach",
        "u": "http://www.archchinese.com/chinese_english_dictionary.html?find={{{s}}}"
    },
    {
        "d": "www.aclweb.org",
        "b": "acl",
        "u": "https://www.aclweb.org/anthology/search/?q={{{s}}}"
    },
    {
        "d": "www.aclu.org",
        "b": "aclu",
        "u": "https://www.aclu.org/search/{{{s}}}?show_aff=1"
    },
    {
        "d": "dl.acm.org",
        "b": "acm",
        "u": "http://dl.acm.org/results.cfm?dlr=GUIDE&query={{{s}}}"
    },
    {
        "d": "dl.acm.org",
        "b": "acmdl",
        "u": "https://dl.acm.org/results.cfm?query={{{s}}}"
    },
    {
        "d": "www.acne.org",
        "b": "acne",
        "u": "https://www.acne.org/search.php?i=&q={{{s}}}"
    },
    {
        "d": "www.acronymfinder.com",
        "b": "acr",
        "u": "http://www.acronymfinder.com/{{{s}}}.html"
    },
    {
        "d": "www.acronymfinder.com",
        "b": "acro",
        "u": "http://www.acronymfinder.com/~/search/af.aspx?string=exact&Acronym={{{s}}}"
    },
    {
        "d": "www.acronymfinder.com",
        "b": "acronym",
        "u": "http://www.acronymfinder.com/~/search/af.aspx?string=exact&Acronym={{{s}}}"
    },
    {
        "d": "www.acronymfinder.com",
        "b": "acronyms",
        "u": "http://www.acronymfinder.com/~/search/af.aspx?string=exact&Acronym={{{s}}}"
    },
    {
        "d": "pubs.acs.org",
        "b": "acs",
        "u": "http://pubs.acs.org/action/doSearch?AllField={{{s}}}"
    },
    {
        "d": "www.activestate.com",
        "b": "activestate",
        "u": "http://www.activestate.com/search/index.html?cx=005567415255730122040%3Aiof7ftsiexy&cof=FORID%3A11&sa.x=0&sa.y=0&q={{{s}}}#1013"
    },
    {
        "d": "acurazine.com",
        "b": "acurazine",
        "u": "http://acurazine.com/forums/search.php?do=showgcs&query={{{s}}}"
    },
    {
        "d": "www.ada-auth.org",
        "b": "ada",
        "u": "http://www.ada-auth.org/search-rm05.cgi?SearchA={{{s}}}&SearchO=&SearchN="
    },
    {
        "d": "www.addgene.org",
        "b": "addgene",
        "u": "https://www.addgene.org/search/advanced/?q={{{s}}}"
    },
    {
        "d": "woerterbuchnetz.de",
        "b": "adelung",
        "u": "http://woerterbuchnetz.de/Adelung/?lemma={{{s}}}"
    },
    {
        "d": "adsabs.harvard.edu",
        "b": "adsabs",
        "u": "http://adsabs.harvard.edu//cgi-bin/basic_connect?qsearch={{{s}}}"
    },
    {
        "d": "ui.adsabs.harvard.edu",
        "b": "ads",
        "u": "https://ui.adsabs.harvard.edu/#search/q={{{s}}}"
    },
    {
        "d": "ui.adsabs.harvard.edu",
        "b": "adsbeta",
        "u": "https://ui.adsabs.harvard.edu/#search/q={{{s}}}"
    },
    {
        "d": "labs.adsabs.harvard.edu",
        "b": "adslabs",
        "u": "http://labs.adsabs.harvard.edu/ui/cgi-bin/topicSearch?q={{{s}}}"
    },
    {
        "d": "adsabs.harvard.edu",
        "b": "adsref",
        "u": "http://adsabs.harvard.edu/cgi-bin/nph-abs_connect?db_key=ALL&bibcode={{{s}}} "
    },
    {
        "d": "austria-forum.org",
        "b": "aeiou",
        "u": "https://austria-forum.org/Search.jsp?category=Austria-Forum&sname=name%2Csuchbegriff&query={{{s}}}+&searchType=default&useShortcuts=y&useSynonyms=n&doFuzzy=y&minResults=15"
    },
    {
        "d": "www.acronymfinder.com",
        "b": "af",
        "u": "http://www.acronymfinder.com/{{{s}}}.html"
    },
    {
        "d": "aalto.finna.fi",
        "b": "afinna",
        "u": "https://aalto.finna.fi/Search/Results?lookfor={{{s}}}"
    },
    {
        "d": "www.e-publishing.af.mil",
        "b": "afpubs",
        "u": "http://www.e-publishing.af.mil/index.asp?txtSearchWord={{{s}}}&rdoFormPub=rdoPub"
    },
    {
        "d": "af.wikipedia.org",
        "b": "afwiki",
        "u": "https://af.wikipedia.org/w/index.php?search={{{s}}}&title=Spesiaal%3ASoek&go=Wys"
    },
    {
        "d": "agora.gg",
        "b": "agora",
        "u": "http://agora.gg/search/{{{s}}}"
    },
    {
        "d": "www.agrireseau.net",
        "b": "agri",
        "u": "https://www.agrireseau.net/documents?r={{{s}}}"
    },
    {
        "d": "agricola.nal.usda.gov",
        "b": "agricola",
        "u": "https://agricola.nal.usda.gov/vwebv/search?searchArg={{{s}}}&searchCode=GKEY%5E&setLimit=1&recCount=10&searchType=1&page.search.search.button=Search"
    },
    {
        "d": "ahdictionary.com",
        "b": "ahd",
        "u": "https://ahdictionary.com/word/search.html?q={{{s}}}&submit.x=0&submit.y=0"
    },
    {
        "d": "www.duckduckgo.com",
        "b": "aichat",
        "u": "https://www.duckduckgo.com/?q={{{s}}}&ia=chat&bang=true "
    },
    {
        "d": "www.aifittings.com",
        "b": "aifit",
        "u": "http://www.aifittings.com/searchResults?q={{{s}}}"
    },
    {
        "d": "scitation.aip.org",
        "b": "aip",
        "u": "http://scitation.aip.org/search?value1={{{s}}}&option1=fulltext"
    },
    {
        "d": "www.airframes.org",
        "b": "airframes",
        "u": "http://www.airframes.org/reg/{{{s}}}"
    },
    {
        "d": "www.goodtobreathein.com",
        "b": "airquality",
        "u": "https://www.goodtobreathein.com/?zipcode={{{s}}}"
    },
    {
        "d": "www.aish.com",
        "b": "aish",
        "u": "http://www.aish.com/search/?keywords={{{s}}}"
    },
    {
        "d": "aitopics.org",
        "b": "aitopics",
        "u": "https://aitopics.org/search?q={{{s}}}"
    },
    {
        "d": "www.duckduckgo.com",
        "b": "ai",
        "u": "https://www.duckduckgo.com/?q={{{s}}}&ia=chat&bang=true "
    },
    {
        "d": "www.akc.org",
        "b": "akc",
        "u": "https://www.akc.org/?s={{{s}}}"
    },
    {
        "d": "bie.ala.org.au",
        "b": "alaus",
        "u": "https://bie.ala.org.au/search?q={{{s}}}"
    },
    {
        "d": "www.alberta.ca",
        "b": "alberta",
        "u": "https://www.alberta.ca/search-results.aspx?q={{{s}}}"
    },
    {
        "d": "eow.alc.co.jp",
        "b": "alc",
        "u": "http://eow.alc.co.jp/search?q={{{s}}}"
    },
    {
        "d": "discover.elgar.govt.nz",
        "b": "alib",
        "u": "https://discover.elgar.govt.nz/iii/encore/search/C__S{{{s}}}__Orightresult__U?lang=eng&suite=def"
    },
    {
        "d": "www.allaboutcircuits.com",
        "b": "allaboutcircuits",
        "u": "http://www.allaboutcircuits.com/scripts/search.html?cx=006978388026519765659%3Ahg719j5vhl8&cof=FORID%3A9&q={{{s}}}&sa=Find"
    },
    {
        "d": "www.allacronyms.com",
        "b": "allacronyms",
        "u": "https://www.allacronyms.com/{{{s}}}"
    },
    {
        "d": "biblez.com",
        "b": "allbibles",
        "u": "http://biblez.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.ah.nl",
        "b": "allerhande",
        "u": "https://www.ah.nl/allerhande/recepten-zoeken?Ntt={{{s}}}"
    },
    {
        "d": "alliancechampions.com",
        "b": "alliance",
        "u": "https://alliancechampions.com/?s={{{s}}}"
    },
    {
        "d": "allrecipes.com",
        "b": "allrecipes",
        "u": "http://allrecipes.com/search/results/?wt={{{s}}}"
    },
    {
        "d": "www.almaany.com",
        "b": "almaanyar",
        "u": "http://www.almaany.com/ar/dict/ar-ar/{{{s}}}"
    },
    {
        "d": "www.almaany.com",
        "b": "almaanyen",
        "u": "http://www.almaany.com/ar/dict/ar-en/{{{s}}}/"
    },
    {
        "d": "www.almaany.com",
        "b": "almaanyfa",
        "u": "https://www.almaany.com/ar/dict/ar-fa/{{{s}}}/"
    },
    {
        "d": "americastestkitchen.com",
        "b": "americastestkitchen",
        "u": "http://americastestkitchen.com/search?q={{{s}}}"
    },
    {
        "d": "journals.ametsoc.org",
        "b": "ametsoc",
        "u": "https://journals.ametsoc.org/action/doSearch?AllField={{{s}}}"
    },
    {
        "d": "ask.metafilter.com",
        "b": "amf",
        "u": "http://ask.metafilter.com/search.mefi?q={{{s}}}"
    },
    {
        "d": "anarchy101.org",
        "b": "an101",
        "u": "http://anarchy101.org/search?q={{{s}}}"
    },
    {
        "d": "new.wordsmith.org",
        "b": "anag",
        "u": "https://new.wordsmith.org/anagram/anagram.cgi?anagram={{{s}}}&t=500&a=n"
    },
    {
        "d": "www.oneacross.com",
        "b": "anagram",
        "u": "http://www.oneacross.com/cgi-bin/search_anagram.cgi?p0={{{s}}}&c0=&s=+Go+"
    },
    {
        "d": "duckduckgo.com",
        "b": "analyser",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Ahttp%3A%2F%2Flarmarange.github.io%2Fanalyse-R"
    },
    {
        "d": "en.anarchopedia.org",
        "b": "anaped",
        "u": "http://en.anarchopedia.org/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "theanarchistlibrary.org",
        "b": "anarchistlib",
        "u": "http://theanarchistlibrary.org/search?query={{{s}}}"
    },
    {
        "d": "anarchopedia.org",
        "b": "anarchopedia",
        "u": "http://anarchopedia.org/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.ancestry.com",
        "b": "ancestry",
        "u": "https://www.ancestry.com/search/?keyword={{{s}}}"
    },
    {
        "d": "www.rigvedawiki.net",
        "b": "angelhalowiki",
        "u": "http://www.rigvedawiki.net/r1/wiki.php/{{{s}}}"
    },
    {
        "d": "library.angus.gov.uk",
        "b": "anguscatalogue",
        "u": "http://library.angus.gov.uk/ipac20/ipac.jsp?session=138BN7L458484.310312&menu=search&aspect=subtab184&npp=10&ipp=20&spp=20&profile=ang--7&ri=&term={{{s}}}&index=.AW&x=-354&y=-218&aspect=subtab184&term=&index=.TW&term=&index=.SE&term=&index=.SW&term=&index=BSTLLR&sort="
    },
    {
        "d": "ankiweb.net",
        "b": "anki",
        "u": "https://ankiweb.net/shared/decks/{{{s}}}"
    },
    {
        "d": "www.anmat.gov.ar",
        "b": "anmat",
        "u": "http://www.anmat.gov.ar/resultados.asp?cx=018082787451070703178%3Arx-vbt5pdfu&cof=FORID%3A10&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "answersingenesis.org",
        "b": "answersingenesis",
        "u": "https://answersingenesis.org/search/?q={{{s}}}"
    },
    {
        "d": "www.synonyms.net",
        "b": "antonym",
        "u": "http://www.synonyms.net/antonyms/{{{s}}}"
    },
    {
        "d": "anu.summon.serialssolutions.com",
        "b": "anulib",
        "u": "http://anu.summon.serialssolutions.com/search?q={{{s}}}"
    },
    {
        "d": "find.anu.edu.au",
        "b": "anu",
        "u": "http://find.anu.edu.au/search?filter=0&client=anu_frontend&proxystylesheet=anu_frontend&site=default_collection&btnG=Search&q={{{s}}}&search1=Go"
    },
    {
        "d": "anw.inl.nl",
        "b": "anw",
        "u": "http://anw.inl.nl/search?type=simple&q={{{s}}}"
    },
    {
        "d": "search.aol.com",
        "b": "aol",
        "u": "http://search.aol.com/aol/search?enabled_terms=&s_it=comsearch&q={{{s}}}"
    },
    {
        "d": "artofproblemsolving.com",
        "b": "aops",
        "u": "http://artofproblemsolving.com/wiki/index.php?title=Special%3ASearch&fulltext=Search&search={{{s}}}"
    },
    {
        "d": "apastyle.org",
        "b": "apa",
        "u": "http://apastyle.org/search.aspx?query={{{s}}}"
    },
    {
        "d": "auspost.com.au",
        "b": "apc",
        "u": "https://auspost.com.au/search?q={{{s}}}"
    },
    {
        "d": "apstudent.collegeboard.org",
        "b": "apcentral",
        "u": "https://apstudent.collegeboard.org/search?searchq={{{s}}}&searchType=aps_site&tp=aps_site"
    },
    {
        "d": "academicprogress.in",
        "b": "apin",
        "u": "https://academicprogress.in/library/search/?q={{{s}}}"
    },
    {
        "d": "scitation.aip.org",
        "b": "apl",
        "u": "http://scitation.aip.org/search?value1={{{s}}}&option1=all"
    },
    {
        "d": "austin.bibliocommons.com",
        "b": "aplib",
        "u": "https://austin.bibliocommons.com/v2/search?query={{{s}}}&searchType=smart"
    },
    {
        "d": "applesold.com",
        "b": "applerealty",
        "u": "http://applesold.com/search?q={{{s}}}"
    },
    {
        "d": "apple.stackexchange.com",
        "b": "applese",
        "u": "http://apple.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "journals.aps.org",
        "b": "aps",
        "u": "http://journals.aps.org/search?q={{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "arabic",
        "u": "http://www.perseus.tufts.edu/hopper/morph?l={{{s}}}&la=ar"
    },
    {
        "d": "allrecipes.com",
        "b": "ar",
        "u": "http://allrecipes.com/search/default.aspx?qt=k&wt={{{s}}}&rt=r&origin=Recipe%20Search%20Results"
    },
    {
        "d": "www.almaany.com",
        "b": "ar-ar",
        "u": "http://www.almaany.com/ar/dict/ar-ar/{{{s}}}"
    },
    {
        "d": "wiki.arcadeotaku.com",
        "b": "arcadeotaku",
        "u": "https://wiki.arcadeotaku.com/index.php?search={{{s}}}"
    },
    {
        "d": "heavenlyarchangels.wordpress.com",
        "b": "archangels",
        "u": "https://heavenlyarchangels.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "www.archchinese.com",
        "b": "archch",
        "u": "http://www.archchinese.com/chinese_english_dictionary.html?find={{{s}}}"
    },
    {
        "d": "catalogue.biu-toulouse.fr",
        "b": "archi",
        "u": "http://catalogue.biu-toulouse.fr/ipac20/ipac.jsp?profile=http://catalogue.biu-toulouse.fr/ipac20/ipac.jsp?profile=http://catalogue.biu-toulouse.fr/ipac20/ipac.jsp?profile=http://catalogue.biu-toulouse.fr/ipac20/ipac.jsp?profile=?q={{{s}}}:"
    },
    {
        "d": "catalogue.biu-toulouse.fr",
        "b": "archipel",
        "u": "http://catalogue.biu-toulouse.fr/ipac20/ipac.jsp?menu=search&aspect=subtab26&npp=10&ipp=20&spp=20&profile=sicd&ri=&index=.GK&term={{{s}}}"
    },
    {
        "d": "univtoulouse.summon.serialssolutions.com",
        "b": "archiplus",
        "u": "http://univtoulouse.summon.serialssolutions.com/search?s.q={{{s}}}"
    },
    {
        "d": "www.glyphweb.com",
        "b": "arda",
        "u": "http://www.glyphweb.com/arda/search.asp?search={{{s}}}"
    },
    {
        "d": "discuss.area51.stackexchange.com",
        "b": "area51",
        "u": "http://discuss.area51.stackexchange.com/search?q= {{{s}}}"
    },
    {
        "d": "www.speakinglatino.com",
        "b": "argot",
        "u": "http://www.speakinglatino.com/?s={{{s}}}&advanced=0&search_type=&posts_country=&posts_category=&words_country=&words_category=&words_letter=CHOOSE+A+STARTING+LETTER&all_country=&all_letter=CHOOSE+A+STARTING+LETTER"
    },
    {
        "d": "aynrandlexicon.com",
        "b": "arl",
        "u": "http://aynrandlexicon.com/searchresults/index.html?cx=013104633629966810561%3Ag5jt9ka8qre&cof=FORID%3A11&q={{{s}}}"
    },
    {
        "d": "collections.artsmia.org",
        "b": "artsmia",
        "u": "https://collections.artsmia.org/index.php?page=search#query={{{s}}}"
    },
    {
        "d": "library.artstor.org",
        "b": "artstor",
        "u": "https://library.artstor.org/#/search/{{{s}}};page=1;size=48"
    },
    {
        "d": "arxiv.org",
        "b": "arx",
        "u": "http://arxiv.org/search?query={{{s}}}&searchtype=all"
    },
    {
        "d": "arxiv.org",
        "b": "arxiv",
        "u": "http://arxiv.org/search?query={{{s}}}&searchtype=all"
    },
    {
        "d": "astrobites.org",
        "b": "asb",
        "u": "https://astrobites.org/?s={{{s}}}"
    },
    {
        "d": "ascl.net",
        "b": "ascl",
        "u": "http://ascl.net/code/search/{{{s}}}"
    },
    {
        "d": "peer.asee.org",
        "b": "asee",
        "u": "https://peer.asee.org/?q={{{s}}}"
    },
    {
        "d": "www.asihablamos.com",
        "b": "asi",
        "u": "http://www.asihablamos.com/www/significado/palabra/{{{s}}}"
    },
    {
        "d": "www.askapatient.com",
        "b": "askapatient",
        "u": "http://www.askapatient.com/searchresults.asp?searchField={{{s}}} "
    },
    {
        "d": "askimam.org",
        "b": "askimam",
        "u": "http://askimam.org/public/processsearch/Question.keywords:{{{s}}}/Question.type:1"
    },
    {
        "d": "www.asksutra.com",
        "b": "asksutra",
        "u": "http://www.asksutra.com/en/serp.php?cx=006191677038902776655%3Akobzooodbpy&cof=FORID%3A11&q={{{s}}}"
    },
    {
        "d": "awoiaf.westeros.org",
        "b": "asoiaf",
        "u": "http://awoiaf.westeros.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.astray.com",
        "b": "astray",
        "u": "http://www.astray.com/recipes/?search={{{s}}}"
    },
    {
        "d": "www.accesstoinsight.org",
        "b": "ati",
        "u": "http://www.accesstoinsight.org/search_results.html?cx=015061908441090246348%3Adj4lxnh4dda&cof=FORID%3A9%3BNB%3A1&ie=UTF-8&q={{{s}}}&sa=Search"
    },
    {
        "d": "academie.atilf.fr",
        "b": "atilf",
        "u": "https://academie.atilf.fr/9/consulter/{{{s}}}?page=1"
    },
    {
        "d": "www.americastestkitchen.com",
        "b": "atk",
        "u": "https://www.americastestkitchen.com/search?q={{{s}}}"
    },
    {
        "d": "www.atlaspiv.cz",
        "b": "atlaspiv",
        "u": "http://www.atlaspiv.cz/?beername={{{s}}} "
    },
    {
        "d": "atlwiki.net",
        "b": "atl",
        "u": "http://atlwiki.net/Special:Search/{{{s}}}"
    },
    {
        "d": "primo.aub.aau.dk",
        "b": "aub",
        "u": "http://primo.aub.aau.dk/primo_library/libweb/action/search.do?fn=search&ct=search&initialSearch=true&mode=Basic&tab=default_tab&indx=1&dum=true&srt=rank&vid=desktop&frbg=&vl%28freeText0%29={{{s}}}&scp.scps=scope%3A%28AUB_PROJEKT_DC%29%2Cscope%3A%28AUB_SFX%29%2Cscope%3A%28AUB_AAL%29%2Cscope%3A%28AUB_ESB%29%2Cscope%3A%28AUB_KBH%29%2Cscope%3A%28AUB_VBN%29%2Cprimo_central_multiple_fe&vl%2857399062UI1%29=all_items&vl%281UIStartWith0%29=contains&vl%2857399064UI0%29=any&vl%2857399064UI0%29=title&vl%2857399064UI0%29=any"
    },
    {
        "d": "birds.audubon.org",
        "b": "audubonb",
        "u": "http://birds.audubon.org/search/node?keys={{{s}}}"
    },
    {
        "d": "www.audubonmagazine.org",
        "b": "audubonmag",
        "u": "http://www.audubonmagazine.org/search/node?keys={{{s}}}"
    },
    {
        "d": "www.audubon.org",
        "b": "audubon",
        "u": "http://www.audubon.org/search/node?keys={{{s}}}"
    },
    {
        "d": "www.aulete.com.br",
        "b": "aulete",
        "u": "http://www.aulete.com.br/{{{s}}}"
    },
    {
        "d": "australia.gov.au",
        "b": "ausgov",
        "u": "http://australia.gov.au/search?collection=gov_all&coverage=all&num_ranks=3&extra_all_num_ranks=3&form=simple&query={{{s}}}"
    },
    {
        "d": "www.ausmed.com.au",
        "b": "ausmed",
        "u": "http://www.ausmed.com.au/sitesearch?q={{{s}}}"
    },
    {
        "d": "www.austlii.edu.au",
        "b": "austlii",
        "u": "http://www.austlii.edu.au/cgi-bin/sinosrch.cgi?query={{{s}}}&results=50&submit=Search&mask_world=&mask_path=&callback=on&method=auto&meta=%2Fau"
    },
    {
        "d": "www.asexuality.org",
        "b": "avenwiki",
        "u": "http://www.asexuality.org/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "avicultura.com",
        "b": "avi",
        "u": "https://avicultura.com/?s={{{s}}}"
    },
    {
        "d": "www.avvo.com",
        "b": "avvo",
        "u": "https://www.avvo.com/search?query={{{s}}}&commit=Search"
    },
    {
        "d": "wordsmith.org",
        "b": "awad",
        "u": "http://wordsmith.org/awad/search.html?cx=partner-pub-0068747404870456%3A118gxl-7atb&cof=FORID%3A11&q={{{s}}}&sa=Search"
    },
    {
        "d": "www.azom.com",
        "b": "azm",
        "u": "https://www.azom.com/search.aspx?q={{{s}}}&site=all&fsb=1"
    },
    {
        "d": "www.azom.com",
        "b": "azom",
        "u": "https://www.azom.com/search.aspx?q={{{s}}}&site=all&fsb=1"
    },
    {
        "d": "www.biology4kids.com",
        "b": "b4kids",
        "u": "http://www.biology4kids.com/search.html?cx=partner-pub-9168758629909687%3A9553394167&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa=Search"
    },
    {
        "d": "www.babla.fr",
        "b": "bab",
        "u": "http://www.babla.fr/anglais-francais/{{{s}}}"
    },
    {
        "d": "live.babelnet.org",
        "b": "babelnet",
        "u": "http://live.babelnet.org/search?word={{{s}}}&lang=EN"
    },
    {
        "d": "en.bab.la",
        "b": "babende",
        "u": "http://en.bab.la/dictionary/english-german/{{{s}}}"
    },
    {
        "d": "pl.bab.la",
        "b": "babpl",
        "u": "http://pl.bab.la/slownik/angielski-polski/{{{s}}}"
    },
    {
        "d": "traductor.babylon-software.com",
        "b": "babylonee",
        "u": "http://traductor.babylon-software.com/ingles/a-espanol/{{{s}}}"
    },
    {
        "d": "www.backpacker.com",
        "b": "backpacker",
        "u": "https://www.backpacker.com/search?query={{{s}}}"
    },
    {
        "d": "www.bailii.org",
        "b": "bailii",
        "u": "http://www.bailii.org/cgi-bin/sino_search_1.cgi?sort=rank&query={{{s}}}"
    },
    {
        "d": "ballotpedia.org",
        "b": "ballot",
        "u": "https://ballotpedia.org/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "bancodata.com.br",
        "b": "bancodata",
        "u": "https://bancodata.com.br/busca/?i={{{s}}}"
    },
    {
        "d": "de.pons.com",
        "b": "bangfren",
        "u": "https://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=enfr&in=&lf=fr"
    },
    {
        "d": "de.pons.com",
        "b": "banglg",
        "u": "http://de.pons.com/übersetzung?q={{{s}}}&l=dela&in=&lf=de"
    },
    {
        "d": "www.banq.qc.ca",
        "b": "banq",
        "u": "http://www.banq.qc.ca/techno/recherche/rms.html?keyword={{{s}}}&Recherche=tout&fonction=chercher&afficherPortail=checked&afficherIris=checked&afficherPistard=checked&afficherColNum=checked"
    },
    {
        "d": "www.barnivore.com",
        "b": "barnivore",
        "u": "http://www.barnivore.com/search?keyword={{{s}}}"
    },
    {
        "d": "www.webtender.com",
        "b": "bartender",
        "u": "http://www.webtender.com/cgi-bin/search?name={{{s}}}&show=15&verbose=on"
    },
    {
        "d": "duckduckgo.com",
        "b": "bascan",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:www.lyc-bascan-rambouillet.ac-versailles.fr"
    },
    {
        "d": "www.baseball-reference.com",
        "b": "baseballreference",
        "u": "http://www.baseball-reference.com/pl/player_search.cgi?search={{{s}}}"
    },
    {
        "d": "www.base-search.net",
        "b": "base",
        "u": "https://www.base-search.net/Search/Results?lookfor={{{s}}}&type=all&oaboost=1&ling=1&name=&newsearch=1&refid=dcbasen"
    },
    {
        "d": "www.basenotes.net",
        "b": "basenotes",
        "u": "http://www.basenotes.net/fragrancedirectory/?search={{{s}}}"
    },
    {
        "d": "www.base-search.net",
        "b": "basesearch",
        "u": "http://www.base-search.net/Search/Results?lookfor={{{s}}}&refid=duckduckgo"
    },
    {
        "d": "www.basketball-reference.com",
        "b": "bballref",
        "u": "https://www.basketball-reference.com/search/search.fcgi?hint=&search={{{s}}}&pid=&idx= "
    },
    {
        "d": "www.bbb.org",
        "b": "bbb",
        "u": "http://www.bbb.org/us/Find-Business-Reviews/name/{{{s}}}"
    },
    {
        "d": "www.bbcgoodfood.com",
        "b": "bbcgf",
        "u": "http://www.bbcgoodfood.com/search/recipes?query={{{s}}}"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bbcr",
        "u": "http://www.bbc.co.uk/search?q={{{s}}}"
    },
    {
        "d": "digital.bbm.usp.br",
        "b": "bbm",
        "u": "https://digital.bbm.usp.br/simple-search?location=&query={{{s}}}"
    },
    {
        "d": "bbqpitboys.com",
        "b": "bbqpb",
        "u": "https://bbqpitboys.com/?s={{{s}}}&post_type=post"
    },
    {
        "d": "www.basketball-reference.com",
        "b": "bbr",
        "u": "http://www.basketball-reference.com/player_search.cgi?search={{{s}}}"
    },
    {
        "d": "digital.bbm.usp.br",
        "b": "bbusp",
        "u": "https://digital.bbm.usp.br/simple-search?location=&query= {{{s}}} &rpp=100"
    },
    {
        "d": "cn.bing.com",
        "b": "bce",
        "u": "https://cn.bing.com/dict/search?q={{{s}}}"
    },
    {
        "d": "www.spca.bc.ca",
        "b": "bcspca",
        "u": "http://www.spca.bc.ca/search.html?q={{{s}}}"
    },
    {
        "d": "bct.comperio.it",
        "b": "bct",
        "u": "http://bct.comperio.it/opac/search/lst?q={{{s}}}"
    },
    {
        "d": "baike.baidu.com",
        "b": "bdbaike",
        "u": "https://baike.baidu.com/item/{{{s}}}"
    },
    {
        "d": "wapbaike.baidu.com",
        "b": "bdbk",
        "u": "https://wapbaike.baidu.com/search/word?word={{{s}}}"
    },
    {
        "d": "cn.bing.com",
        "b": "bdi",
        "u": "https://cn.bing.com/dict/search?q={{{s}}}"
    },
    {
        "d": "www.businessdictionary.com",
        "b": "bdictionary",
        "u": "http://www.businessdictionary.com/search.php?q={{{s}}}"
    },
    {
        "d": "bdl.oqlf.gouv.qc.ca",
        "b": "bdl",
        "u": "http://bdl.oqlf.gouv.qc.ca/bdl/gabarit_bdl.asp?T1={{{s}}}&T3.x=0&T3.y=0"
    },
    {
        "d": "dblp.uni-trier.de",
        "b": "bdlp",
        "u": "http://dblp.uni-trier.de/search?q={{{s}}}"
    },
    {
        "d": "www.beautyheaven.com.au",
        "b": "beautyheaven",
        "u": "https://www.beautyheaven.com.au/search?term={{{s}}}"
    },
    {
        "d": "www.beautypedia.com",
        "b": "beautypedia",
        "u": "https://www.beautypedia.com/skin-care-reviews/?Ntt={{{s}}}"
    },
    {
        "d": "beck-online.beck.de",
        "b": "beck",
        "u": "https://beck-online.beck.de/Search?words={{{s}}}"
    },
    {
        "d": "www.beeradvocate.com",
        "b": "beeradvocate",
        "u": "https://www.beeradvocate.com/search/?q={{{s}}}"
    },
    {
        "d": "surnames.behindthename.com",
        "b": "behindsurname",
        "u": "http://surnames.behindthename.com/name/{{{s}}} "
    },
    {
        "d": "www.behindthename.com",
        "b": "behindthename",
        "u": "http://www.behindthename.com/name/{{{s}}}"
    },
    {
        "d": "www.bellevuecollege.edu",
        "b": "bellevuecollege",
        "u": "http://www.bellevuecollege.edu/search/?txtQuery={{{s}}}&search=Search"
    },
    {
        "d": "dict.tu-chemnitz.de",
        "b": "beolingus",
        "u": "http://dict.tu-chemnitz.de/dings.cgi?query={{{s}}}"
    },
    {
        "d": "www.bergfex.com",
        "b": "bergfex",
        "u": "http://www.bergfex.com/sommer/suchen/?q={{{s}}}"
    },
    {
        "d": "bermuda.io",
        "b": "bermuda",
        "u": "http://bermuda.io/dataset?q={{{s}}}"
    },
    {
        "d": "circoloberneri.indivia.net",
        "b": "berneri",
        "u": "http://circoloberneri.indivia.net/?s={{{s}}}"
    },
    {
        "d": "bevvy.co",
        "b": "bevvy",
        "u": "https://bevvy.co/search?q={{{s}}}"
    },
    {
        "d": "www.babelfish.de",
        "b": "bfde",
        "u": "http://www.babelfish.de/dict?query={{{s}}}&src=auto&dst=en&submit=übersetzen"
    },
    {
        "d": "billygraham.org",
        "b": "bgea",
        "u": "http://billygraham.org/?s={{{s}}}"
    },
    {
        "d": "www.biblegateway.com",
        "b": "bgkj",
        "u": "https://www.biblegateway.com/quicksearch/?quicksearch={{{s}}}&qs_version=KJV"
    },
    {
        "d": "www.biblegateway.com",
        "b": "bgkjv",
        "u": "https://www.biblegateway.com/quicksearch/?quicksearch={{{s}}}&qs_version=KJV"
    },
    {
        "d": "www.biblegateway.com",
        "b": "bgw",
        "u": "http://www.biblegateway.com/keyword/?search={{{s}}}"
    },
    {
        "d": "biblehub.net",
        "b": "bhb",
        "u": "http://biblehub.net/search.php?q={{{s}}}"
    },
    {
        "d": "www.bhive.org",
        "b": "bhive",
        "u": "https://www.bhive.org/?s={{{s}}}"
    },
    {
        "d": "www.british-history.ac.uk",
        "b": "bho",
        "u": "http://www.british-history.ac.uk/search?query={{{s}}}"
    },
    {
        "d": "baheth.info",
        "b": "bht",
        "u": "http://baheth.info/all.jsp?term={{{s}}}"
    },
    {
        "d": "www.biblestudytools.com",
        "b": "biben",
        "u": "http://www.biblestudytools.com/search/?s=references&q={{{s}}}&rc=ENC&rc2="
    },
    {
        "d": "opac.uni-erfurt.de",
        "b": "biberfurt",
        "u": "http://opac.uni-erfurt.de/DB=1/SET=3/TTL=11/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM={{{s}}}"
    },
    {
        "d": "biblehub.net",
        "b": "bibhub",
        "u": "http://biblehub.net/search.php?q={{{s}}}"
    },
    {
        "d": "biblehub.net",
        "b": "bibleatlas",
        "u": "http://biblehub.net/searchatlas.php?q={{{s}}}"
    },
    {
        "d": "www.biblegateway.com",
        "b": "bible",
        "u": "http://www.biblegateway.com/keyword/?search={{{s}}}&searchtype=all"
    },
    {
        "d": "www.bible.com",
        "b": "biblecom",
        "u": "https://www.bible.com/search/bible?q={{{s}}}"
    },
    {
        "d": "www.biblegateway.com",
        "b": "biblegateway",
        "u": "http://www.biblegateway.com/keyword/?search={{{s}}}&version1=47&searchtype=all"
    },
    {
        "d": "biblemenus.com",
        "b": "biblehub",
        "u": "http://biblemenus.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.biblestudytools.com",
        "b": "bibletools",
        "u": "http://www.biblestudytools.com/search/?q={{{s}}}"
    },
    {
        "d": "www.biblija.net",
        "b": "biblija",
        "u": "http://www.biblija.net/biblija.cgi?m={{{s}}} "
    },
    {
        "d": "bibliotek.dk",
        "b": "bibliotek",
        "u": "https://bibliotek.dk/search/work/{{{s}}}"
    },
    {
        "d": "www.bibsonomy.org",
        "b": "bibsonomy",
        "u": "http://www.bibsonomy.org/search/{{{s}}}"
    },
    {
        "d": "onesearch.unipi.it",
        "b": "bibunipi",
        "u": "http://onesearch.unipi.it/primo_library/libweb/action/search.do?fn=search&ct=search&initialSearch=true&mode=Basic&tab=default_tab&indx=1&dum=true&srt=rank&vid=39UPI_V1&frbg=&tb=t&vl(freeText0)={{{s}}}&scp.scps=scope%3A(39UPI)%2C39UPI_EbscoLocal%2Cprimo_central_multiple_fe"
    },
    {
        "d": "bigenc.ru",
        "b": "bigenc",
        "u": "https://bigenc.ru/search?q={{{s}}}"
    },
    {
        "d": "bigfuture.collegeboard.org",
        "b": "bigfuture",
        "u": "https://bigfuture.collegeboard.org/sitesearch?searchType=bf_site&tp=bf&q={{{s}}}"
    },
    {
        "d": "words.bighugelabs.com",
        "b": "bighuge",
        "u": "http://words.bighugelabs.com/{{{s}}}"
    },
    {
        "d": "www.bigoven.com",
        "b": "bigoven",
        "u": "http://www.bigoven.com/recipes/{{{s}}}/best"
    },
    {
        "d": "www.debijbel.nl",
        "b": "bijbel",
        "u": "https://www.debijbel.nl/zoeken/?q={{{s}}}&v=NBV&t=bible"
    },
    {
        "d": "sheldonbrown.com",
        "b": "bike",
        "u": "http://sheldonbrown.com/searchResults.html?cx=partner-pub-1229949690989515%3A1174459614&cof=FORID%3A10&q={{{s}}}"
    },
    {
        "d": "billygraham.org",
        "b": "billygraham",
        "u": "https://billygraham.org/?s={{{s}}}"
    },
    {
        "d": "biluppgifter.se",
        "b": "biluppg",
        "u": "https://biluppgifter.se/fordon/{{{s}}}"
    },
    {
        "d": "www.biography.com",
        "b": "bio",
        "u": "http://www.biography.com/search?query={{{s}}}"
    },
    {
        "d": "bioconductor.org",
        "b": "bioc",
        "u": "http://bioconductor.org/help/search/index.html?q={{{s}}}"
    },
    {
        "d": "www.biography.com",
        "b": "biography",
        "u": "https://www.biography.com/search?query={{{s}}}"
    },
    {
        "d": "thebiogrid.org",
        "b": "biogrid",
        "u": "http://thebiogrid.org/search.php?search={{{s}}}"
    },
    {
        "d": "allyouneedisbiology.wordpress.com",
        "b": "biology",
        "u": "https://allyouneedisbiology.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "www.biology-online.org",
        "b": "bio-online",
        "u": "http://www.biology-online.org/search.php?search={{{s}}}"
    },
    {
        "d": "biorxiv.org",
        "b": "biorxiv",
        "u": "http://biorxiv.org/search/{{{s}}}"
    },
    {
        "d": "www.allaboutbirds.org",
        "b": "bird",
        "u": "https://www.allaboutbirds.org/search/?q={{{s}}}"
    },
    {
        "d": "www.allaboutbirds.org",
        "b": "birds",
        "u": "https://www.allaboutbirds.org/search/?q={{{s}}}"
    },
    {
        "d": "www.bisp-surf.de",
        "b": "bisp",
        "u": "https://www.bisp-surf.de/Search/Results?type=AllFields&lookfor={{{s}}}&submit=Suchen&limit=20&sort=relevance"
    },
    {
        "d": "www.bbc.co.uk",
        "b": "bitesizegcse",
        "u": "http://www.bbc.co.uk/schools/gcsebitesize/search/index.shtml?scope=gcsebitesize_include&q={{{s}}}"
    },
    {
        "d": "search.bivol.bg",
        "b": "bivol",
        "u": "https://search.bivol.bg/?q={{{s}}}#results"
    },
    {
        "d": "www.businessdictionary.com",
        "b": "bizdic",
        "u": "http://www.businessdictionary.com/search.php?q={{{s}}}"
    },
    {
        "d": "incfact.com",
        "b": "biz",
        "u": "https://incfact.com/company/search/?q={{{s}}}"
    },
    {
        "d": "www.basketball-reference.com",
        "b": "bkr",
        "u": "http://www.basketball-reference.com/player_search.cgi?search={{{s}}}"
    },
    {
        "d": "www.bookshare.org",
        "b": "bkshare",
        "u": "https://www.bookshare.org/search?keyword={{{s}}}"
    },
    {
        "d": "www.blb.org",
        "b": "blb",
        "u": "http://www.blb.org/search/preSearch.cfm?plugin=yes&Criteria={{{s}}}"
    },
    {
        "d": "thelawdictionary.org",
        "b": "bld",
        "u": "http://thelawdictionary.org/search2/?cx=partner-pub-4620319056007131%3A7293005414&cof=FORID%3A11&ie=UTF-8&q={{{s}}}}"
    },
    {
        "d": "www.bleepingcomputer.com",
        "b": "bleepingpc",
        "u": "https://www.bleepingcomputer.com/search/?q={{{s}}}"
    },
    {
        "d": "blender.stackexchange.com",
        "b": "blex",
        "u": "http://blender.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "searcharchives.bl.uk",
        "b": "blms",
        "u": "http://searcharchives.bl.uk/primo_library/libweb/action/search.do?fn=search&vl(freeText0)={{{s}}}"
    },
    {
        "d": "explore.bl.uk",
        "b": "bl",
        "u": "http://explore.bl.uk/primo_library/libweb/action/search.do?fn=search&vl(freeText0)={{{s}}}"
    },
    {
        "d": "www.blueletterbible.org",
        "b": "blueletterbible",
        "u": "http://www.blueletterbible.org/search/search.cfm?Criteria={{{s}}}&t=KJV#s=s_primary_0_1"
    },
    {
        "d": "cse.google.com",
        "b": "bluelight",
        "u": "http://cse.google.com/cse?cx=009513296995230692334:6ksgwcos37i&q={{{s}}}"
    },
    {
        "d": "rsw.me.uk",
        "b": "blueline",
        "u": "https://rsw.me.uk/blueline/methods/search?q={{{s}}}"
    },
    {
        "d": "explore.bl.uk",
        "b": "bluk",
        "u": "http://explore.bl.uk/primo_library/libweb/action/search.do?fn=search&vl(freeText0)={{{s}}}"
    },
    {
        "d": "bestpractice.bmj.com",
        "b": "bmjbp",
        "u": "https://bestpractice.bmj.com/search?q={{{s}}}"
    },
    {
        "d": "www.bmj.com",
        "b": "bmj",
        "u": "https://www.bmj.com/search/advanced/{{{s}}}"
    },
    {
        "d": "www.bmonotes.com",
        "b": "bmonotes",
        "u": "https://www.bmonotes.com/Search/GeneralSearch?query={{{s}}}"
    },
    {
        "d": "catalogue.bnf.fr",
        "b": "bnf",
        "u": "http://catalogue.bnf.fr/rechercher.do?motRecherche={{{s}}}"
    },
    {
        "d": "www.bnrmetal.com",
        "b": "bnr",
        "u": "http://www.bnrmetal.com/v5/search/search/{{{s}}}"
    },
    {
        "d": "www.bogleheads.org",
        "b": "bogle",
        "u": "http://www.bogleheads.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ordbok.uib.no",
        "b": "bokmålsordboka",
        "u": "http://ordbok.uib.no/perl/ordbok.cgi?OPP=+{{{s}}}&ant_bokmaal=5&ant_nynorsk=5&bokmaal=+&ordbok=bokmaal"
    },
    {
        "d": "bonnus.ulb.uni-bonn.de",
        "b": "bonnus",
        "u": "https://bonnus.ulb.uni-bonn.de/Summon/Search?lookfor={{{s}}}&type=AllFields&submit=Suchen"
    },
    {
        "d": "bookbrainz.org",
        "b": "bookbrainz",
        "u": "https://bookbrainz.org/search?q={{{s}}}"
    },
    {
        "d": "www.booking.com",
        "b": "bookinges",
        "u": "https://www.booking.com/search.es.html?ss={{{s}}}"
    },
    {
        "d": "www.bpb.de",
        "b": "bpb",
        "u": "http://www.bpb.de/suche/?suchwort={{{s}}}&suchen=Suchen"
    },
    {
        "d": "bibliotheques.paris.fr",
        "b": "bpp",
        "u": "https://bibliotheques.paris.fr/Default/search.aspx?SC=CATALOGUE&QUERY={{{s}}}&QUERY_LABEL="
    },
    {
        "d": "www.brainpop.com",
        "b": "brainpop",
        "u": "https://www.brainpop.com/search/search.weml?keyword={{{s}}}"
    },
    {
        "d": "educators.brainpop.com",
        "b": "brainpopeducators",
        "u": "http://educators.brainpop.com/search/?q={{{s}}}"
    },
    {
        "d": "www.brainyquote.com",
        "b": "brainyquote",
        "u": "https://www.brainyquote.com/search_results.html?q={{{s}}}"
    },
    {
        "d": "www.bratabase.com",
        "b": "bratabase",
        "u": "http://www.bratabase.com/search/?q={{{s}}}"
    },
    {
        "d": "www.baseball-reference.com",
        "b": "br",
        "u": "http://www.baseball-reference.com/pl/player_search.cgi?search={{{s}}}"
    },
    {
        "d": "www.b-rhymes.com",
        "b": "b-rhymes",
        "u": "http://www.b-rhymes.com/rhyme/word/{{{s}}}"
    },
    {
        "d": "www.bricklink.com",
        "b": "bricklinkcat",
        "u": "http://www.bricklink.com/catalogList.asp?q={{{s}}}"
    },
    {
        "d": "www.brightstorm.com",
        "b": "brightstorm",
        "u": "http://www.brightstorm.com/search/?k={{{s}}}"
    },
    {
        "d": "www.britannica.com",
        "b": "britannica",
        "u": "http://www.britannica.com/search?query={{{s}}}"
    },
    {
        "d": "school.eb.com",
        "b": "britannicaschoole",
        "u": "http://school.eb.com/levels/elementary/search/articles?query={{{s}}}"
    },
    {
        "d": "school.eb.com",
        "b": "britannicaschoolh",
        "u": "http://school.eb.com/levels/high/search/articles?query={{{s}}}"
    },
    {
        "d": "school.eb.com",
        "b": "britannicaschoolm",
        "u": "http://school.eb.com/levels/middle/search/articles?query={{{s}}}"
    },
    {
        "d": "www.britannica.com",
        "b": "brit",
        "u": "https://www.britannica.com/search?query={{{s}}}"
    },
    {
        "d": "www.britishslang.co.uk",
        "b": "british",
        "u": "http://www.britishslang.co.uk/search/default.aspx?q={{{s}}}"
    },
    {
        "d": "school.eb.com",
        "b": "britsche",
        "u": "http://school.eb.com/levels/elementary/search/articles?query={{{s}}}"
    },
    {
        "d": "school.eb.com",
        "b": "britschh",
        "u": "http://school.eb.com/levels/high/search/articles?query={{{s}}}"
    },
    {
        "d": "school.eb.com",
        "b": "britschm",
        "u": "http://school.eb.com/levels/middle/search/articles?query={{{s}}}"
    },
    {
        "d": "brainly.com",
        "b": "brly",
        "u": "https://brainly.com/app/ask?entry=hero&q={{{s}}}"
    },
    {
        "d": "brockhaus.de",
        "b": "brockhaus",
        "u": "https://brockhaus.de/search/?t=enzy&q={{{s}}}"
    },
    {
        "d": "www.brookings.edu",
        "b": "brook",
        "u": "https://www.brookings.edu/search/?s={{{s}}}"
    },
    {
        "d": "search.library.brown.edu",
        "b": "brown",
        "u": "https://search.library.brown.edu/?utf8=✓&q={{{s}}}"
    },
    {
        "d": "search.library.brown.edu",
        "b": "brownlib",
        "u": "https://search.library.brown.edu/?utf8=✓&q={{{s}}}"
    },
    {
        "d": "www.britannica.com",
        "b": "brt",
        "u": "http://www.britannica.com/search?query={{{s}}}"
    },
    {
        "d": "brumario.usal.es",
        "b": "brumario",
        "u": "http://brumario.usal.es/search/?searchtype=X&searcharg={{{s}}} &op=Buscar&SORT=D&searchscope="
    },
    {
        "d": "www.biblesociety.org.au",
        "b": "bsa",
        "u": "https://www.biblesociety.org.au/?s={{{s}}}&x=0&y=0"
    },
    {
        "d": "opacplus.bsb-muenchen.de",
        "b": "bsb",
        "u": "https://opacplus.bsb-muenchen.de/InfoGuideClient/start.do?Login=opacext&BaseURL=https%3a%2f%2fopacplus.bsb-muenchen.de%2fInfoGuideClient%2fstart.do%3fLogin%3dopacext&Query=-1=%22{{{s}}}%22"
    },
    {
        "d": "www.signbsl.com",
        "b": "bsl",
        "u": "http://www.signbsl.com/sign/{{{s}}}"
    },
    {
        "d": "www.biostars.org",
        "b": "bstar",
        "u": "https://www.biostars.org/local/search/page/?q={{{s}}}"
    },
    {
        "d": "www.behindthename.com",
        "b": "btname",
        "u": "https://www.behindthename.com/names/search.php?terms={{{s}}}&type="
    },
    {
        "d": "bulbapedia.bulbagarden.net",
        "b": "bu",
        "u": "https://bulbapedia.bulbagarden.net/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "ucm.summon.serialssolutions.com",
        "b": "bucea",
        "u": "http://ucm.summon.serialssolutions.com/es-ES/#!/search?ho=t&fvf=ContentType,Newspaper%20Article,t&l=es-ES&q={{{s}}}&pg=buscador&utf8=%E2%9C%93"
    },
    {
        "d": "www.budgetbytes.com",
        "b": "budgetbytes",
        "u": "http://www.budgetbytes.com/?s={{{s}}}"
    },
    {
        "d": "buprimo.hosted.exlibrisgroup.com",
        "b": "buej",
        "u": "https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=BU&lang=en_US&offset=0"
    },
    {
        "d": "www.buffalolib.org",
        "b": "buffalolib",
        "u": "https://www.buffalolib.org/vufind/Union/Search?lookfor={{{s}}}&type=keyword&submit=Find&sort=title"
    },
    {
        "d": "bugguide.net",
        "b": "bugguide",
        "u": "http://bugguide.net/index.php?q=search&keys={{{s}}}"
    },
    {
        "d": "bulbapedia.bulbagarden.net",
        "b": "bulba",
        "u": "http://bulbapedia.bulbagarden.net/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "blog.bulletproof.com",
        "b": "bulletproof",
        "u": "https://blog.bulletproof.com/?s={{{s}}}"
    },
    {
        "d": "www.bund.net",
        "b": "bund",
        "u": "https://www.bund.net/service/suchergebnis/?L=0&q={{{s}}}"
    },
    {
        "d": "catalogue.bu.univ-paris8.fr",
        "b": "bup8",
        "u": "http://catalogue.bu.univ-paris8.fr/cgi-bin/koha/opac-search.pl?idx=&q={{{s}}}"
    },
    {
        "d": "www.business.gov.au",
        "b": "businessgovau",
        "u": "https://www.business.gov.au/search?q={{{s}}}"
    },
    {
        "d": "bustimes.org",
        "b": "bustimes",
        "u": "https://bustimes.org/search?q={{{s}}}"
    },
    {
        "d": "www.buycott.com",
        "b": "buycott",
        "u": "http://www.buycott.com/search/all?query={{{s}}}"
    },
    {
        "d": "www.buzer.de",
        "b": "buz",
        "u": "https://www.buzer.de/s1.htm?a=&g={{{s}}}"
    },
    {
        "d": "fahrinfo.bvg.de",
        "b": "bvg",
        "u": "https://fahrinfo.bvg.de/Fahrinfo/bin/query.bin/?pk_campaign=BVG.de_Eingabe&from={{{s}}} "
    },
    {
        "d": "pesquisa.bvsalud.org",
        "b": "bvs",
        "u": "http://pesquisa.bvsalud.org/regional/?q={{{s}}}"
    },
    {
        "d": "www.byggahus.se",
        "b": "byggahus",
        "u": "https://www.byggahus.se/sokresultat/?q={{{s}}} "
    },
    {
        "d": "www.byu.edu",
        "b": "byu",
        "u": "https://www.byu.edu/search-all?q={{{s}}}"
    },
    {
        "d": "yadda.icm.edu.pl",
        "b": "bztch",
        "u": "https://yadda.icm.edu.pl/baztech/search/page.action?q=sc.general*c_0all_0eq.{{{s}}}*l_0&qt=SEARCH"
    },
    {
        "d": "www.cabq.gov",
        "b": "cabq",
        "u": "http://www.cabq.gov/searchresults?q={{{s}}}"
    },
    {
        "d": "www.cairn.info",
        "b": "cairn",
        "u": "http://www.cairn.info/resultats_recherche.php?searchTerm={{{s}}}"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "cald",
        "u": "http://dictionary.cambridge.org/search/british/?source=duckduckgo&q={{{s}}}"
    },
    {
        "d": "qrzcq.com",
        "b": "call",
        "u": "http://qrzcq.com/?q={{{s}}}&action=search&page=search"
    },
    {
        "d": "www.caloriecount.com",
        "b": "cals",
        "u": "https://www.caloriecount.com/search/foods?searchpro={{{s}}}"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "cambridge",
        "u": "http://dictionary.cambridge.org/dictionary/english/{{{s}}}"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "camd",
        "u": "http://dictionary.cambridge.org/search/american-english/direct/?q={{{s}}}"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "camfren",
        "u": "https://dictionary.cambridge.org/dictionary/french-english/{{{s}}}"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "camg",
        "u": "http://dictionary.cambridge.org/us/grammar/british-grammar/{{{s}}}"
    },
    {
        "d": "idiscover.lib.cam.ac.uk",
        "b": "camlib",
        "u": "http://idiscover.lib.cam.ac.uk/primo-explore/search?query=any,contains,{{{s}}}&tab=cam_lib_coll&search_scope=SCOP_CAM_ALL&vid=44CAM_PROD&lang=en_US&offset=0"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "campl",
        "u": "http://dictionary.cambridge.org/dictionary/english-polish/{{{s}}}"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "camplen",
        "u": "https://dictionary.cambridge.org/dictionary/polish-english/{{{s}}}"
    },
    {
        "d": "navigator.tu-dresden.de",
        "b": "campusnav",
        "u": "https://navigator.tu-dresden.de/erweitertesuche/{{{s}}}"
    },
    {
        "d": "search.cam.ac.uk",
        "b": "cam",
        "u": "http://search.cam.ac.uk/web?query={{{s}}}"
    },
    {
        "d": "www.canlii.ca",
        "b": "canlii",
        "u": "http://www.canlii.ca/en/search/search.do?all={{{s}}}"
    },
    {
        "d": "www.andcannabis.com",
        "b": "cannabis",
        "u": "https://www.andcannabis.com/?s={{{s}}}"
    },
    {
        "d": "www.canoonet.eu",
        "b": "canoo",
        "u": "http://www.canoonet.eu/services/Controller?input={{{s}}}"
    },
    {
        "d": "www.cantonese.sheik.co.uk",
        "b": "cantodict",
        "u": "http://www.cantonese.sheik.co.uk/dictionary/search/?searchtype=1&text={{{s}}}"
    },
    {
        "d": "www.calorieking.com.au",
        "b": "carbs",
        "u": "http://www.calorieking.com.au/foods/search.php?keywords={{{s}}}&showresults=yes&go=Search"
    },
    {
        "d": "www.cardboardconnection.com",
        "b": "cardboard",
        "u": "https://www.cardboardconnection.com/search-results?q={{{s}}}"
    },
    {
        "d": "www.commonchemistry.org",
        "b": "cas",
        "u": "http://www.commonchemistry.org/ChemicalDetail.aspx?ref={{{s}}}"
    },
    {
        "d": "casetext.com",
        "b": "casetext",
        "u": "https://casetext.com/search?q={{{s}}}"
    },
    {
        "d": "www.catalandictionary.org",
        "b": "catalandictionary",
        "u": "http://www.catalandictionary.org/en/search/?q={{{s}}}"
    },
    {
        "d": "www.cathdb.info",
        "b": "cath",
        "u": "http://www.cathdb.info/search?q={{{s}}}"
    },
    {
        "d": "www.catholic.com",
        "b": "catholic",
        "u": "http://www.catholic.com/search/content/{{{s}}}"
    },
    {
        "d": "dlc.iec.cat",
        "b": "cat",
        "u": "https://dlc.iec.cat/results.asp?txtEntrada={{{s}}}"
    },
    {
        "d": "www.cbtnuggets.com",
        "b": "cbtnuggets",
        "u": "https://www.cbtnuggets.com/search?q={{{s}}}"
    },
    {
        "d": "ccc.scborromeo.org.master.com",
        "b": "cccc",
        "u": "http://ccc.scborromeo.org.master.com/texis/master/search/?sufs=0&q={{{s}}}"
    },
    {
        "d": "hamster.foxhollow.ca",
        "b": "ccd",
        "u": "http://hamster.foxhollow.ca/ccd/index.php?keywords={{{s}}} "
    },
    {
        "d": "www.ccel.org",
        "b": "ccel",
        "u": "http://www.ccel.org/search/fulltext/{{{s}}}"
    },
    {
        "d": "www.codecheck.info",
        "b": "ccheck",
        "u": "https://www.codecheck.info/product.search?q={{{s}}}&OK=Suchen"
    },
    {
        "d": "www.country-codes.org",
        "b": "ccode",
        "u": "http://www.country-codes.org/{{{s}}}"
    },
    {
        "d": "recherche.conseil-constitutionnel.fr",
        "b": "cconst",
        "u": "http://recherche.conseil-constitutionnel.fr/?q={{{s}}}"
    },
    {
        "d": "www.cybercook.com.br",
        "b": "ccook",
        "u": "http://www.cybercook.com.br/receitas/{{{s}}}"
    },
    {
        "d": "www.cdc.gov",
        "b": "cdc",
        "u": "http://www.cdc.gov/search.do?queryText={{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cd",
        "u": "http://www.collinsdictionary.com/dictionary/english/{{{s}}}?showCookiePolicy=true"
    },
    {
        "d": "lookup.computerlanguage.com",
        "b": "cde",
        "u": "http://lookup.computerlanguage.com/host_app/search?cid=C999999&term={{{s}}}&lookup.x=0&lookup.y=0"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "cdgdic",
        "u": "http://dictionary.cambridge.org/dictionary/learner-english/{{{s}}}_1?q={{{s}}}"
    },
    {
        "d": "dictionary.cambridge.org",
        "b": "cdic",
        "u": "https://dictionary.cambridge.org/spellcheck/english/?q={{{s}}}"
    },
    {
        "d": "cdict.net",
        "b": "cdict",
        "u": "https://cdict.net/?q={{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cdl",
        "u": "http://www.collinsdictionary.com/dictionary/english-cobuild-learners/{{{s}}}"
    },
    {
        "d": "cdsportal.u-strasbg.fr",
        "b": "cds",
        "u": "http://cdsportal.u-strasbg.fr/#{{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cdt",
        "u": "https://www.collinsdictionary.com/dictionary/english-thesaurus/{{{s}}}"
    },
    {
        "d": "www.cecmed.cu",
        "b": "cecmed",
        "u": "https://www.cecmed.cu/search/node?keys={{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cenes",
        "u": "https://www.collinsdictionary.com/dictionary/english-spanish/{{{s}}}"
    },
    {
        "d": "thesaurus.cerl.org",
        "b": "cerl",
        "u": "http://thesaurus.cerl.org/cgi-bin/search.pl?type=l&type=i&type=p&type=c&query={{{s}}}"
    },
    {
        "d": "phonebook.cern.ch",
        "b": "cern",
        "u": "https://phonebook.cern.ch/phonebook/#search/?query={{{s}}}"
    },
    {
        "d": "www.biblegateway.com",
        "b": "cev",
        "u": "https://www.biblegateway.com/quicksearch/?quicksearch={{{s}}}&qs_version=CEV"
    },
    {
        "d": "www.cfainstitute.org",
        "b": "cfa",
        "u": "https://www.cfainstitute.org/en/search#q={{{s}}}"
    },
    {
        "d": "wikicfp.com",
        "b": "cfp",
        "u": "http://wikicfp.com/cfp/servlet/tool.search?q={{{s}}}&year=f"
    },
    {
        "d": "www.ecfr.gov",
        "b": "cfr",
        "u": "http://www.ecfr.gov/cgi-bin/searchECFR?q1={{{s}}}"
    },
    {
        "d": "hub.culturegraph.org",
        "b": "cg",
        "u": "http://hub.culturegraph.org/search?query={{{s}}}"
    },
    {
        "d": "catalog.gpo.gov",
        "b": "cgp",
        "u": "http://catalog.gpo.gov/F?func=find-b&find_code=WRD&request={{{s}}}"
    },
    {
        "d": "resources.allsetlearning.com",
        "b": "cgw",
        "u": "https://resources.allsetlearning.com/gramwiki/?search={{{s}}}"
    },
    {
        "d": "www.chabad.org",
        "b": "chabad",
        "u": "http://www.chabad.org/search/results.asp?searchWord={{{s}}}"
    },
    {
        "d": "chambers.co.uk",
        "b": "chambers",
        "u": "http://chambers.co.uk/search.php?query={{{s}}}&title=21st"
    },
    {
        "d": "www.charitynavigator.org",
        "b": "charity",
        "u": "http://www.charitynavigator.org/index.cfm?bay=search.results&keyword_list={{{s}}}"
    },
    {
        "d": "www.charitynavigator.org",
        "b": "charitynavigator",
        "u": "http://www.charitynavigator.org/index.cfm?bay=search.results&keyword_list={{{s}}}"
    },
    {
        "d": "www.charlotteslaw.nl",
        "b": "charlotteslaw",
        "u": "https://www.charlotteslaw.nl/?s={{{s}}}"
    },
    {
        "d": "www.duckduckgo.com",
        "b": "chat",
        "u": "https://www.duckduckgo.com/?q={{{s}}}&ia=chat&bang=true "
    },
    {
        "d": "chequeado.com",
        "b": "ch",
        "u": "http://chequeado.com/?s={{{s}}}"
    },
    {
        "d": "www.cheatography.com",
        "b": "cheatography",
        "u": "http://www.cheatography.com/explore/search/?q={{{s}}}"
    },
    {
        "d": "www.cheese.com",
        "b": "cheese",
        "u": "http://www.cheese.com/?q={{{s}}}"
    },
    {
        "d": "www.chefkoch.de",
        "b": "chefkochvegan",
        "u": "http://www.chefkoch.de/rs/s0t57/{{{s}}}/Vegan-Rezepte.html"
    },
    {
        "d": "www.chemicalize.org",
        "b": "chemicalize",
        "u": "http://www.chemicalize.org/structure/#!mol={{{s}}}&source=fp"
    },
    {
        "d": "www.chemie.de",
        "b": "chemie.de",
        "u": "http://www.chemie.de/search/?q={{{s}}}"
    },
    {
        "d": "chemistry.stackexchange.com",
        "b": "chemse",
        "u": "http://chemistry.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.chemspider.com",
        "b": "chemspider",
        "u": "http://www.chemspider.com/Search.aspx?q={{{s}}}"
    },
    {
        "d": "chemwiki.ucdavis.edu",
        "b": "chemwiki",
        "u": "http://chemwiki.ucdavis.edu/Special:Search?search={{{s}}}&qid=&fpid=1285&fpth="
    },
    {
        "d": "www.chichester.gov.uk",
        "b": "chichester",
        "u": "http://www.chichester.gov.uk/article/23353/Search?q={{{s}}}"
    },
    {
        "d": "www.chiefdelphi.com",
        "b": "chief",
        "u": "https://www.chiefdelphi.com/search?expanded=true&q={{{s}}}"
    },
    {
        "d": "www.chillingeffects.org",
        "b": "chillingeffects",
        "u": "https://www.chillingeffects.org/notices/search?&term={{{s}}}"
    },
    {
        "d": "ucblibraries.summon.serialssolutions.com",
        "b": "chinook",
        "u": "http://ucblibraries.summon.serialssolutions.com/search?q={{{s}}}"
    },
    {
        "d": "www.msarnoff.org",
        "b": "chipdb",
        "u": "http://www.msarnoff.org/chipdb/{{{s}}}"
    },
    {
        "d": "churchhistorycatalog.lds.org",
        "b": "chl",
        "u": "http://churchhistorycatalog.lds.org/primo_library/libweb/action/search.do?fn=search&ct=search&initialSearch=true&mode=Basic&tab=chl&indx=1&dum=true&srt=rank&vid=CHL_PUBLIC&frbg=&tb=t&vl%28freeText0%29={{{s}}}&scp.scps=scope%3A%28PEAD%29%2Cscope%3A%28PARCHIVES%29%2Cscope%3A%28PLIBRARY%29%2Cscope%3A%28ALEPH-PCPX%29%2Cscope%3A%28ALEPH-JHX%29%2Cscope%3A%28ALEPH-CAX%29&vl%2830857204UI1%29=all_items&vl%281UIStartWith0%29=contains&vl%2830857210UI0%29=any&vl%2830857210UI0%29=title&vl%2830857210UI0%29=any"
    },
    {
        "d": "chalmers.summon.serialssolutions.com",
        "b": "chlib",
        "u": "http://chalmers.summon.serialssolutions.com/en/search?ho=t&q={{{s}}}"
    },
    {
        "d": "www.ultimate-guitar.com",
        "b": "chords",
        "u": "http://www.ultimate-guitar.com/search.php?search_type=title&value={{{s}}}"
    },
    {
        "d": "www.chow.com",
        "b": "chow",
        "u": "http://www.chow.com/search?type=Topic&from_date=1+year+ago&query={{{s}}}"
    },
    {
        "d": "www.churchclarity.org",
        "b": "churchclarity",
        "u": "https://www.churchclarity.org/search?query={{{s}}}"
    },
    {
        "d": "www.cia.gov",
        "b": "cia",
        "u": "https://www.cia.gov/search?q={{{s}}}&site=WORLD_FACTBOOK&btnG=Search&x=0&y=0&output=xml_no_dtd&client=CIA&myAction=%2Fsearch&proxystylesheet=CIA&submitMethod=get&sort=date%3AD%3AL%3Ad1&oe=UTF-8&ie=UTF-8&ud=1&exclude_apps=1"
    },
    {
        "d": "web2.wipo.int",
        "b": "cib",
        "u": "http://web2.wipo.int/classifications/ipc/ipcpub/#lang=fr&menulang=FR&refresh=page&fipcpc=yes&indexes=yes&notion=scheme&version=20160101&symbol={{{s}}}"
    },
    {
        "d": "ciberduvidas.iscte-iul.pt",
        "b": "ciberduvidas",
        "u": "https://ciberduvidas.iscte-iul.pt/pesquisa?termo={{{s}}}"
    },
    {
        "d": "paper.sc",
        "b": "cie",
        "u": "https://paper.sc/search/?as=page&query={{{s}}}"
    },
    {
        "d": "company.info",
        "b": "cio",
        "u": "https://company.info/organisations/search?q={{{s}}}"
    },
    {
        "d": "racingcircuits.info",
        "b": "circuit",
        "u": "http://racingcircuits.info/misc/search-results.html?search={{{s}}}"
    },
    {
        "d": "cisne.sim.ucm.es",
        "b": "cisne",
        "u": "http://cisne.sim.ucm.es/search*spi~S/X?SEARCH={{{s}}}"
    },
    {
        "d": "citeseer.ist.psu.edu",
        "b": "citeseer",
        "u": "http://citeseer.ist.psu.edu/search?q={{{s}}}&submit=Search&sort=rlv&t=doc"
    },
    {
        "d": "www.citeulike.org",
        "b": "citeul",
        "u": "http://www.citeulike.org/search/all?q={{{s}}}"
    },
    {
        "d": "citizendium.org",
        "b": "citi",
        "u": "http://citizendium.org/wiki?search={{{s}}}&title=Special%3ASearch&go=Go+To+Page"
    },
    {
        "d": "citroenc3owners.com",
        "b": "citroenc3owners",
        "u": "http://citroenc3owners.com/search.php?keywords={{{s}}}&terms=all&author=&fid[]=5&sc=1&sf=all&sk=t&sd=d&sr=posts&st=0&ch=300&t=0&submit=Search"
    },
    {
        "d": "curia.europa.eu",
        "b": "cjeu",
        "u": "http://curia.europa.eu/juris/liste.jsf?language=en&num={{{s}}}"
    },
    {
        "d": "www.ck12.org",
        "b": "ck12",
        "u": "https://www.ck12.org/search/?q={{{s}}}&referrer=top_nav&autoComplete=false"
    },
    {
        "d": "www.chefkoch.de",
        "b": "ck",
        "u": "http://www.chefkoch.de/rs/s0/{{{s}}}/Rezepte.html"
    },
    {
        "d": "craftkeys.com",
        "b": "ckeys",
        "u": "http://craftkeys.com/site-info/{{{s}}}"
    },
    {
        "d": "www.1001cocktails.com",
        "b": "cktl",
        "u": "http://www.1001cocktails.com/cocktails/rechercheCocktailsNom.php?mot={{{s}}}"
    },
    {
        "d": "www.cleanuptheworld.org",
        "b": "cleanuptheworld",
        "u": "http://www.cleanuptheworld.org/en/search.html?kw={{{s}}}"
    },
    {
        "d": "www.charlotteslaw.nl",
        "b": "clfp",
        "u": "https://www.charlotteslaw.nl/?s={{{s}}}"
    },
    {
        "d": "www.climedweb.com",
        "b": "climed",
        "u": "http://www.climedweb.com/wp/?s="
    },
    {
        "d": "clinicasyhospitales.com.co",
        "b": "clinicas",
        "u": "https://clinicasyhospitales.com.co/buscar?q={{{s}}}"
    },
    {
        "d": "clio.columbia.edu",
        "b": "clio",
        "u": "https://clio.columbia.edu/catalog?q={{{s}}}"
    },
    {
        "d": "calil.jp",
        "b": "clt",
        "u": "https://calil.jp/local/search?csid=tokyo&q={{{s}}}"
    },
    {
        "d": "catalogue.leidenuniv.nl",
        "b": "clu",
        "u": "https://catalogue.leidenuniv.nl/primo-explore/search?query=any,contains,{{{s}}}&tab=all_content&search_scope=All_Content&vid=UBL_V1&lang=en_US&offset=0"
    },
    {
        "d": "catalog.clcohio.org",
        "b": "cml",
        "u": "http://catalog.clcohio.org/polaris/search/searchresults.aspx?term={{{s}}}"
    },
    {
        "d": "www.chicagomanualofstyle.org",
        "b": "cms",
        "u": "http://www.chicagomanualofstyle.org/search.epl?q={{{s}}}"
    },
    {
        "d": "cnba.uba.ar",
        "b": "cnba",
        "u": "http://cnba.uba.ar/search/node/{{{s}}}"
    },
    {
        "d": "www.charitynavigator.org",
        "b": "cn",
        "u": "http://www.charitynavigator.org/index.cfm?bay=search.results&keyword_list={{{s}}}"
    },
    {
        "d": "cndic.naver.com",
        "b": "cndic",
        "u": "http://cndic.naver.com/search/all?q={{{s}}}"
    },
    {
        "d": "www.cnm.edu",
        "b": "cnm",
        "u": "https://www.cnm.edu/@@gcse-searchresults?q={{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtla",
        "u": "http://www.cnrtl.fr/antonymie/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtlc",
        "u": "http://www.cnrtl.fr/concordance/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtld",
        "u": "http://www.cnrtl.fr/definition/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtle",
        "u": "http://www.cnrtl.fr/etymologie/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtlm",
        "u": "http://www.cnrtl.fr/morphologie/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtlp",
        "u": "http://www.cnrtl.fr/proxemie/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cnrtls",
        "u": "http://www.cnrtl.fr/synonymie/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "cntrl",
        "u": "http://www.cnrtl.fr/definition/{{{s}}}"
    },
    {
        "d": "cocatalog.loc.gov",
        "b": "cocatalog",
        "u": "http://cocatalog.loc.gov/cgi-bin/Pwebrecon.cgi?Search_Arg={{{s}}}&Search_Code=TALL&CNT=25&HIST=1"
    },
    {
        "d": "cocatalog.loc.gov",
        "b": "cocatalogn",
        "u": "http://cocatalog.loc.gov/cgi-bin/Pwebrecon.cgi?Search_Arg={{{s}}}&Search_Code=NALL&CNT=25&HIST=1"
    },
    {
        "d": "physics.nist.gov",
        "b": "codata",
        "u": "https://physics.nist.gov/cgi-bin/cuu/Results?search_for={{{s}}}"
    },
    {
        "d": "www.collegeboard.org",
        "b": "collegeboard",
        "u": "https://www.collegeboard.org/search?tp=usearch&x=15&x1=t4&y=13&searchType=site&word={{{s}}}"
    },
    {
        "d": "www.collegeconfidential.com",
        "b": "collegeconfidential",
        "u": "http://www.collegeconfidential.com/search_results.htm?q={{{s}}}&sa=Google+Search&userInput=&sitesearch=collegeconfidential.com&cx=013579521852154800353%3Avvp1k6kluvq&cof=FORID%3A9 "
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "collins",
        "u": "http://www.collinsdictionary.com/dictionary/english/{{{s}}}"
    },
    {
        "d": "oxforddictionary.so8848.com",
        "b": "collocation",
        "u": "http://oxforddictionary.so8848.com/search1?word={{{s}}}"
    },
    {
        "d": "colostate-primo.hosted.exlibrisgroup.com",
        "b": "Cololib",
        "u": "https://colostate-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=01COLSU&lang=en_US&primoQueryTemp=d&search_field=any&search_scope=Everything&query=any,contains,{{{s}}}"
    },
    {
        "d": "computernewb.com",
        "b": "com",
        "u": "https://computernewb.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "portal.core.edu.au",
        "b": "confrank",
        "u": "http://portal.core.edu.au/conf-ranks/?search={{{s}}}&by=all&source=all&sort=atitle&page=1"
    },
    {
        "d": "www.congress.gov",
        "b": "congress",
        "u": "https://www.congress.gov/search?q={%22source%22%3A%22legislation%22%2C%22search%22%3A%22{{{s}}}%22}"
    },
    {
        "d": "www.spanishdict.com",
        "b": "conjes",
        "u": "http://www.spanishdict.com/conjugate/{{{s}}}"
    },
    {
        "d": "www.conjugacao.com.br",
        "b": "conjugacao",
        "u": "https://www.conjugacao.com.br/busca.php?q={{{s}}}"
    },
    {
        "d": "www.conjuga-me.net",
        "b": "conjuga",
        "u": "http://www.conjuga-me.net/verbo-{{{s}}}"
    },
    {
        "d": "leconjugueur.lefigaro.fr",
        "b": "conjuguer",
        "u": "http://leconjugueur.lefigaro.fr/conjugaison/verbe/{{{s}}}.html"
    },
    {
        "d": "www.connectny.info",
        "b": "connectny",
        "u": "http://www.connectny.info/search/?searchtype=X&SORT=D&searcharg={{{s}}}"
    },
    {
        "d": "www.conservapedia.com",
        "b": "conservapedia",
        "u": "http://www.conservapedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.consultant.ru",
        "b": "consplus",
        "u": "https://www.consultant.ru/search/?q={{{s}}}"
    },
    {
        "d": "www.consumerlab.com",
        "b": "consumerlab",
        "u": "https://www.consumerlab.com/Search/{{{s}}}"
    },
    {
        "d": "www.cooks.com",
        "b": "cook",
        "u": "http://www.cooks.com/?/q={{{s}}}"
    },
    {
        "d": "cooking.nytimes.com",
        "b": "cooking",
        "u": "https://cooking.nytimes.com/search?q={{{s}}}"
    },
    {
        "d": "cookpad.com",
        "b": "cookpad",
        "u": "http://cookpad.com/search/{{{s}}}"
    },
    {
        "d": "www.cookscountry.com",
        "b": "cooksc",
        "u": "http://www.cookscountry.com/search/?type=&q={{{s}}}"
    },
    {
        "d": "www.cooks.com",
        "b": "cooks",
        "u": "http://www.cooks.com/rec/search?q={{{s}}}"
    },
    {
        "d": "www.cooksillustrated.com",
        "b": "cooksi",
        "u": "http://www.cooksillustrated.com/search/results.asp?query={{{s}}}"
    },
    {
        "d": "cooljugator.com",
        "b": "cool",
        "u": "http://cooljugator.com/lt/{{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "cop2usd",
        "u": "http://www.xe.com/currencyconverter/convert/?From=COP&To=USD&Amount={{{s}}}"
    },
    {
        "d": "copac.ac.uk",
        "b": "copac",
        "u": "http://copac.ac.uk/search?&title={{{s}}}"
    },
    {
        "d": "core.ac.uk",
        "b": "core",
        "u": "https://core.ac.uk/search?q={{{s}}}"
    },
    {
        "d": "opencorporates.com",
        "b": "corp",
        "u": "https://opencorporates.com/companies?q={{{s}}}"
    },
    {
        "d": "www.cosdna.com",
        "b": "cosdna",
        "u": "http://www.cosdna.com/eng/product.php?q={{{s}}}"
    },
    {
        "d": "selfcater.com",
        "b": "cottages",
        "u": "https://selfcater.com/find?query={{{s}}}"
    },
    {
        "d": "www.couchsurfing.org",
        "b": "couch",
        "u": "https://www.couchsurfing.org/?q={{{s}}}"
    },
    {
        "d": "www.coursera.org",
        "b": "coursera",
        "u": "https://www.coursera.org/search?query={{{s}}}"
    },
    {
        "d": "combineoverwiki.net",
        "b": "cow",
        "u": "http://combineoverwiki.net/index.php?search={{{s}}}&button=&title=Special%3ASearch"
    },
    {
        "d": "chipublib.bibliocommons.com",
        "b": "cpl",
        "u": "https://chipublib.bibliocommons.com/search?&t=title&search_category=title&q={{{s}}}"
    },
    {
        "d": "coder.aapc.com",
        "b": "cpt",
        "u": "https://coder.aapc.com/cpt-codes/{{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cpten",
        "u": "https://www.collinsdictionary.com/dictionary/portuguese-english/{{{s}}}"
    },
    {
        "d": "www.craftsy.com",
        "b": "craftsy",
        "u": "https://www.craftsy.com/search?query={{{s}}}"
    },
    {
        "d": "www.cram.com",
        "b": "cram",
        "u": "http://www.cram.com/search?query={{{s}}}&submit=Search"
    },
    {
        "d": "creation.com",
        "b": "creation",
        "u": "https://creation.com/search?q={{{s}}}"
    },
    {
        "d": "www.consumerreports.org",
        "b": "crep",
        "u": "https://www.consumerreports.org/search/?query={{{s}}}"
    },
    {
        "d": "www.consumerreports.org",
        "b": "creps",
        "u": "https://www.consumerreports.org/search/?query={{{s}}}"
    },
    {
        "d": "www.crisco.unicaen.fr",
        "b": "crisco",
        "u": "http://www.crisco.unicaen.fr/des/synonymes/{{{s}}}"
    },
    {
        "d": "critiki.com",
        "b": "critiki",
        "u": "https://critiki.com/search/?t={{{s}}}"
    },
    {
        "d": "www.bettycrocker.com",
        "b": "crocker",
        "u": "https://www.bettycrocker.com/search?term={{{s}}} "
    },
    {
        "d": "search.crossref.org",
        "b": "crossref",
        "u": "http://search.crossref.org/?q={{{s}}}"
    },
    {
        "d": "stats.stackexchange.com",
        "b": "crossvalidated",
        "u": "http://stats.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.wordfun.ca",
        "b": "crossword",
        "u": "http://www.wordfun.ca/words/fw?q={{{s}}}"
    },
    {
        "d": "webopac.csbno.net",
        "b": "csbno",
        "u": "http://webopac.csbno.net/opac/search/lst?q={{{s}}}"
    },
    {
        "d": "cisne.sim.ucm.es",
        "b": "csn",
        "u": "http://cisne.sim.ucm.es/search*spi~S/X?SEARCH={{{s}}}&sort=D"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cspen",
        "u": "https://www.collinsdictionary.com/dictionary/spanish-english/{{{s}}}"
    },
    {
        "d": "cs.stackexchange.com",
        "b": "csse",
        "u": "http://cs.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "ctext.org",
        "b": "ctextd",
        "u": "http://ctext.org/dictionary.pl?if=en&char={{{s}}}"
    },
    {
        "d": "clinicaltrials.gov",
        "b": "ctgov",
        "u": "https://clinicaltrials.gov/ct2/results?term={{{s}}}"
    },
    {
        "d": "www.collinsdictionary.com",
        "b": "cth",
        "u": "http://www.collinsdictionary.com/dictionary/english-thesaurus/{{{s}}}"
    },
    {
        "d": "cudl.lib.cam.ac.uk",
        "b": "cudl",
        "u": "https://cudl.lib.cam.ac.uk/search?keyword={{{s}}}"
    },
    {
        "d": "newcatalog.library.cornell.edu",
        "b": "cul",
        "u": "https://newcatalog.library.cornell.edu/search?q={{{s}}}"
    },
    {
        "d": "newcatalog.library.cornell.edu",
        "b": "culib",
        "u": "https://newcatalog.library.cornell.edu/catalog?q={{{s}}}"
    },
    {
        "d": "libraries.clemson.edu",
        "b": "culibrary",
        "u": "http://libraries.clemson.edu/?s={{{s}}}"
    },
    {
        "d": "www.culy.nl",
        "b": "culy",
        "u": "http://www.culy.nl/?s={{{s}}}"
    },
    {
        "d": "curia.europa.eu",
        "b": "curiac",
        "u": "http://curia.europa.eu/juris/liste.jsf?pro=&lgrec=en&nat=&oqp=&dates=&lg=&language=en&jur=C%2CT%2CF&cit=none%252CC%252CCJ%252CR%252C2008E%252C%252C%252C%252C%252C%252C%252C%252C%252C%252Ctrue%252Cfalse%252Cfalse&num={{{s}}}&td=ALL&pcs=O&avg=&page=1&mat=or&jge=&for=&cid=114819"
    },
    {
        "d": "curia.europa.eu",
        "b": "curia",
        "u": "http://curia.europa.eu/juris/liste.jsf?&num={{{s}}}"
    },
    {
        "d": "curia.europa.eu",
        "b": "curian",
        "u": "http://curia.europa.eu/juris/liste.jsf?pro=&nat=&oqp=&dates=&lg=&language=en&jur=C%2CT%2CF&cit=none%252CC%252CCJ%252CR%252C2008E%252C%252C%252C%252C%252C%252C%252C%252C%252C%252Ctrue%252Cfalse%252Cfalse&td=ALL&pcs=O&avg=&page=1&mat=or&parties={{{s}}}&jge=&for=&cid=114819"
    },
    {
        "d": "www.currclick.com",
        "b": "currclick",
        "u": "http://www.currclick.com/browse.php?keywords={{{s}}}"
    },
    {
        "d": "www.gesformacion.es",
        "b": "cursos",
        "u": "http://www.gesformacion.es/buscar?controller=search&search_query={{{s}}}"
    },
    {
        "d": "datacvr.virk.dk",
        "b": "cvr",
        "u": "https://datacvr.virk.dk/data/visninger?soeg={{{s}}}"
    },
    {
        "d": "de.wikipedia.org",
        "b": "cwde",
        "u": "https://de.wikipedia.org/w/index.php?title=Spezial:Zitierhilfe&page={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "cwen",
        "u": "https://en.wikipedia.org/wiki/Special:CiteThisPage?page={{{s}}}"
    },
    {
        "d": "crosswordtracker.com",
        "b": "cwt",
        "u": "http://crosswordtracker.com/answer/{{{s}}}/"
    },
    {
        "d": "cyberleninka.ru",
        "b": "cybl",
        "u": "https://cyberleninka.ru/search?q={{{s}}}"
    },
    {
        "d": "www.chooseyourevent.co.uk",
        "b": "cye",
        "u": "http://www.chooseyourevent.co.uk/keywordsearch.asp?searchterms={{{s}}}"
    },
    {
        "d": "www.cymath.com",
        "b": "cymath",
        "u": "http://www.cymath.com/answer.php?q={{{s}}}"
    },
    {
        "d": "complexityzoo.uwaterloo.ca",
        "b": "cz",
        "u": "https://complexityzoo.uwaterloo.ca/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "d66.nl",
        "b": "d66",
        "u": "https://d66.nl/?s={{{s}}}"
    },
    {
        "d": "dailymed.nlm.nih.gov",
        "b": "dailymed",
        "u": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query={{{s}}}"
    },
    {
        "d": "asturianu.elahorcado.net",
        "b": "dalla",
        "u": "http://asturianu.elahorcado.net/search.php?search={{{s}}}"
    },
    {
        "d": "dane.ac-dijon.fr",
        "b": "dane",
        "u": "http://dane.ac-dijon.fr/?s={{{s}}}"
    },
    {
        "d": "libcat.dartmouth.edu",
        "b": "dartlib",
        "u": "http://libcat.dartmouth.edu/search/X?{{{s}}}"
    },
    {
        "d": "dash.harvard.edu",
        "b": "dash",
        "u": "http://dash.harvard.edu/search?scope=%2F&query={{{s}}}&rpp=10&sort_by=0&order=DESC"
    },
    {
        "d": "search.datacite.org",
        "b": "datacite",
        "u": "https://search.datacite.org/works?query={{{s}}}"
    },
    {
        "d": "toolbox.google.com",
        "b": "data",
        "u": "https://toolbox.google.com/datasetsearch/search?query={{{s}}}"
    },
    {
        "d": "www.data.gouv.fr",
        "b": "datagouv",
        "u": "https://www.data.gouv.fr/fr/search/?q={{{s}}}"
    },
    {
        "d": "data.gov.au",
        "b": "datagovau",
        "u": "http://data.gov.au/dataset?q={{{s}}}"
    },
    {
        "d": "catalog.data.gov",
        "b": "datagov",
        "u": "http://catalog.data.gov/dataset?q={{{s}}}&sort=score+desc%2C+name+asc"
    },
    {
        "d": "toolbox.google.com",
        "b": "datasearch",
        "u": "https://toolbox.google.com/datasetsearch/search?query={{{s}}}"
    },
    {
        "d": "www.data.vic.gov.au",
        "b": "datavicgov",
        "u": "https://www.data.vic.gov.au/data/dataset?q={{{s}}}"
    },
    {
        "d": "www.datazar.com",
        "b": "datazar",
        "u": "https://www.datazar.com/search/data/?q={{{s}}}"
    },
    {
        "d": "dic.daum.net",
        "b": "daumdic",
        "u": "http://dic.daum.net/search.do?q={{{s}}}"
    },
    {
        "d": "dic.daum.net",
        "b": "다음사전",
        "u": "http://dic.daum.net/search.do?q={{{s}}}"
    },
    {
        "d": "davidnesher.com.ar",
        "b": "davidnesher",
        "u": "http://davidnesher.com.ar/?q={{{s}}}:"
    },
    {
        "d": "daviswiki.org",
        "b": "daviswiki",
        "u": "https://daviswiki.org/_rsearch/?q={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "dbgap",
        "u": "https://www.ncbi.nlm.nih.gov/gap/?term={{{s}}}"
    },
    {
        "d": "dejure.org",
        "b": "dbgb",
        "u": "http://dejure.org/gesetze/BGB/{{{s}}}.html"
    },
    {
        "d": "dblp.uni-trier.de",
        "b": "dblp",
        "u": "https://dblp.uni-trier.de/search?q={{{s}}}"
    },
    {
        "d": "dblp.uni-trier.de",
        "b": "dblp.pub",
        "u": "http://dblp.uni-trier.de/search/publ?q={{{s}}} "
    },
    {
        "d": "data.bnf.fr",
        "b": "dbnf",
        "u": "http://data.bnf.fr/search?term={{{s}}}"
    },
    {
        "d": "wiki.dbpedia.org",
        "b": "dbpedia",
        "u": "http://wiki.dbpedia.org/Search?phrase={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "dbsnp",
        "u": "http://www.ncbi.nlm.nih.gov/snp?term={{{s}}}"
    },
    {
        "d": "int.darkbyte.ru",
        "b": "dbyte",
        "u": "http://int.darkbyte.ru/{{{s}}}"
    },
    {
        "d": "www.dictionary.com",
        "b": "dcom",
        "u": "http://www.dictionary.com/browse/{{{s}}}"
    },
    {
        "d": "docs.anakeen.com",
        "b": "dcp",
        "u": "http://docs.anakeen.com/dynacase/stable/#{{{s}}}"
    },
    {
        "d": "dcs.rutgers.edu",
        "b": "dcs",
        "u": "https://dcs.rutgers.edu/search/node/{{{s}}}"
    },
    {
        "d": "capitadiscovery.co.uk",
        "b": "dcul",
        "u": "https://capitadiscovery.co.uk/dcu/items?query={{{s}}}"
    },
    {
        "d": "sli.uvigo.gal",
        "b": "ddd",
        "u": "http://sli.uvigo.gal/ddd/ddd_pescuda.php?pescuda={{{s}}}&tipo_busca=lema"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgd",
        "u": "https://duckduckgo.com/?q={{{s}}}&ia=definition"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgf",
        "u": "http://duckduckgo.com/?kl=fr-fr&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddgr",
        "u": "https://duckduckgo.com/?q=site:reddit.com+{{{s}}}"
    },
    {
        "d": "dic.daum.net",
        "b": "ddic",
        "u": "http://dic.daum.net/search.do?q={{{s}}}"
    },
    {
        "d": "ordnet.dk",
        "b": "ddo",
        "u": "http://ordnet.dk/ddo/ordbog?query={{{s}}} "
    },
    {
        "d": "library.deakin.edu.au",
        "b": "deakin",
        "u": "http://library.deakin.edu.au/search/?searchtype=X&SORT=D&searcharg={{{s}}}&searchscope=1"
    },
    {
        "d": "dedalus.usp.br",
        "b": "dedalus",
        "u": "http://dedalus.usp.br/F/?func=find-b&request={{{s}}}"
    },
    {
        "d": "dedalus.usp.br",
        "b": "ded",
        "u": "http://dedalus.usp.br/F/2GT4AME1FV9M25Q886NF9PCLB2BK39NF8XMFRXNHCQIL1JX5IG-19193?func=find-b&request={{{s}}}&find_code=WRD&adjacent=N&local_base=USP01&x=39&y=11&filter_code_1=WLN&filter_request_1=&filter_code_2=WYR&filter_request_2=&filter_code_3=WYR&filter_request_3=&filter_code_4=WMA&filter_request_4=&filter_code_5=WBA&filter_request_5="
    },
    {
        "d": "www.deepdyve.com",
        "b": "deepdyve",
        "u": "https://www.deepdyve.com/search?query={{{s}}}"
    },
    {
        "d": "dd.thekkedam.org",
        "b": "deepthidevaki",
        "u": "https://dd.thekkedam.org/search/?q={{{s}}}"
    },
    {
        "d": "kids.wordsmyth.net",
        "b": "definekids",
        "u": "https://kids.wordsmyth.net/we/?ent={{{s}}}"
    },
    {
        "d": "www.thefreedictionary.com",
        "b": "define",
        "u": "http://www.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "www.thefreedictionary.com",
        "b": "def",
        "u": "http://www.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "dict.tu-chemnitz.de",
        "b": "de",
        "u": "http://dict.tu-chemnitz.de/dings.cgi?query={{{s}}}"
    },
    {
        "d": "sok.deichman.no",
        "b": "deic",
        "u": "https://sok.deichman.no/search?query={{{s}}}"
    },
    {
        "d": "deit.dict.cc",
        "b": "deit",
        "u": "http://deit.dict.cc/?s={{{s}}}"
    },
    {
        "d": "dejure.org",
        "b": "dejure",
        "u": "https://dejure.org/cgi-bin/suche?Suchenach={{{s}}}"
    },
    {
        "d": "delcat.worldcat.org",
        "b": "delcat",
        "u": "https://delcat.worldcat.org/search?qt=wc_org_delcat&q={{{s}}}&scope=0&oldscope=0&wcsbtn2w=Search&fq=&dblist=1461%2C1542%2C638"
    },
    {
        "d": "delectable.com",
        "b": "delectable",
        "u": "https://delectable.com/search/{{{s}}}"
    },
    {
        "d": "dizionario.internazionale.it",
        "b": "demauro",
        "u": "https://dizionario.internazionale.it/parola/{{{s}}}"
    },
    {
        "d": "www.dict.cc",
        "b": "dende",
        "u": "https://www.dict.cc/?s={{{s}}}"
    },
    {
        "d": "www.dexigner.com",
        "b": "designdirectory",
        "u": "http://www.dexigner.com/directory/search.html?q={{{s}}}"
    },
    {
        "d": "es.thefreedictionary.com",
        "b": "des",
        "u": "http://es.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "de.tfd.com",
        "b": "detfd",
        "u": "http://de.tfd.com/{{{s}}}"
    },
    {
        "d": "deutsch-tuerkisch.net",
        "b": "deuturk",
        "u": "https://deutsch-tuerkisch.net/suche/{{{s}}}"
    },
    {
        "d": "de.wikipedia.org",
        "b": "dew",
        "u": "https://de.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "de.wikipedia.org",
        "b": "dewiki",
        "u": "http://de.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "dexonline.ro",
        "b": "dexonline",
        "u": "http://dexonline.ro/definitie/{{{s}}}"
    },
    {
        "d": "www.dogfoodadvisor.com",
        "b": "dfa",
        "u": "https://www.dogfoodadvisor.com/?s={{{s}}}"
    },
    {
        "d": "dejure.org",
        "b": "dgg",
        "u": "http://dejure.org/gesetze/GG/{{{s}}}.html"
    },
    {
        "d": "www.fgv.br",
        "b": "dhbb",
        "u": "http://www.fgv.br/cpdoc/acervo/arquivo?busca= {{{s}}} &TipoUD=0&MacroTipoUD=0&nItens=100"
    },
    {
        "d": "delhihighcourt.nic.in",
        "b": "dhc",
        "u": "http://delhihighcourt.nic.in/SiteSearch.asp?zoom_query= {{{s}}}"
    },
    {
        "d": "dialnet.unirioja.es",
        "b": "dialnet",
        "u": "http://dialnet.unirioja.es/buscar/documentos?querysDismax.DOCUMENTAL_TODO={{{s}}}"
    },
    {
        "d": "www.differencebetween.net",
        "b": "dibe",
        "u": "http://www.differencebetween.net/search/?q={{{s}}}"
    },
    {
        "d": "www.diccionari.cat",
        "b": "diccionari",
        "u": "http://www.diccionari.cat/cgi-bin/AppDLC3.exe?APP=CERCADLC&GECART={{{s}}}"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "dic",
        "u": "http://www.merriam-webster.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.dicionarioinformal.com.br",
        "b": "dicinfo",
        "u": "https://www.dicionarioinformal.com.br/{{{s}}}/"
    },
    {
        "d": "www.dicio.com.br",
        "b": "dicio",
        "u": "https://www.dicio.com.br/pesquisa.php?q={{{s}}}"
    },
    {
        "d": "dicoado.org",
        "b": "dico",
        "u": "https://dicoado.org/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "dico.isc.cnrs.fr",
        "b": "dicoiscenfr",
        "u": "http://dico.isc.cnrs.fr/dico/tr/chercher_en?r={{{s}}}"
    },
    {
        "d": "dico.isc.cnrs.fr",
        "b": "dicoiscfren",
        "u": "http://dico.isc.cnrs.fr/dico/tr/chercher_fr?r={{{s}}}"
    },
    {
        "d": "www.dicoz.fr",
        "b": "dicoz",
        "u": "http://www.dicoz.fr/?s={{{s}}}"
    },
    {
        "d": "michaelis.uol.com.br",
        "b": "dic-ptbr",
        "u": "http://michaelis.uol.com.br/moderno-portugues/busca/portugues-brasileiro/{{{s}}}"
    },
    {
        "d": "www.infopedia.pt",
        "b": "dicpt",
        "u": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/{{{s}}}"
    },
    {
        "d": "www.dict.cc",
        "b": "dict.cc",
        "u": "http://www.dict.cc/?s={{{s}}}"
    },
    {
        "d": "www.dict.org",
        "b": "dict",
        "u": "http://www.dict.org/bin/Dict?Form=Dict2&Database=*&Query={{{s}}}"
    },
    {
        "d": "www.greek-language.gr",
        "b": "dictgr",
        "u": "http://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/search.html?lq={{{s}}}"
    },
    {
        "d": "dictionary.reference.com",
        "b": "dictionaryr",
        "u": "http://dictionary.reference.com/browse/{{{s}}}"
    },
    {
        "d": "www.thefreedictionary.com",
        "b": "dictionary",
        "u": "http://www.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "dict-navi.com",
        "b": "dictn",
        "u": "http://dict-navi.com/en/dictionary/list/?type=search&search_term={{{s}}}"
    },
    {
        "d": "dict.pl",
        "b": "dictpl",
        "u": "http://dict.pl/dict?word={{{s}}}"
    },
    {
        "d": "www.dict.org",
        "b": "dictre",
        "u": "http://www.dict.org/bin/Dict?Form=Dict1&Database=*&Strategy=re&Query=^{{{s}}}$"
    },
    {
        "d": "dictzone.com",
        "b": "dictzonespma",
        "u": "http://dictzone.com/spanyol-magyar-szotar/{{{s}}}"
    },
    {
        "d": "portail.atilf.fr",
        "b": "diddal",
        "u": "http://portail.atilf.fr/cgi-bin/search2e?title={{{s}}}&author=&class=&speech=&objtype=&word=&CONJUNCT=PHRASE&PROXY=moins+de&DISTANCE=3&OUTPUT=conc&SYSTEM_DIR=%2Fvar%2Fartfla%2Fencyclopedie%2Ftextdata%2FIMAGE%2F"
    },
    {
        "d": "www.dictionary.com",
        "b": "di",
        "u": "http://www.dictionary.com/browse/{{{s}}}"
    },
    {
        "d": "dlc.iec.cat",
        "b": "diec",
        "u": "https://dlc.iec.cat/results.asp?txtEntrada={{{s}}}"
    },
    {
        "d": "www.diigo.com",
        "b": "diigt",
        "u": "https://www.diigo.com/tag/{{{s}}}?year=2"
    },
    {
        "d": "www.diki.pl",
        "b": "diki",
        "u": "https://www.diki.pl/slownik-angielskiego/?q={{{s}}}"
    },
    {
        "d": "app.dimensions.ai",
        "b": "dimensions",
        "u": "https://app.dimensions.ai/discover/publication?search_text={{{s}}}&search_type=kws&search_field=full_search"
    },
    {
        "d": "www.dicionarioinformal.com.br",
        "b": "din",
        "u": "http://www.dicionarioinformal.com.br/{{{s}}}"
    },
    {
        "d": "dirae.es",
        "b": "dirae",
        "u": "http://dirae.es/palabras/?q={{{s}}}"
    },
    {
        "d": "discoverygc.com",
        "b": "disco",
        "u": "http://discoverygc.com/wiki/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "dizionario.internazionale.it",
        "b": "dit",
        "u": "http://dizionario.internazionale.it/parola/{{{s}}}"
    },
    {
        "d": "www.diva-portal.org",
        "b": "diva",
        "u": "https://www.diva-portal.org/smash/resultList.jsf?dswid=8805&language=en&searchType=SIMPLE&query={{{s}}}&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all"
    },
    {
        "d": "liu.diva-portal.org",
        "b": "divaliu",
        "u": "http://liu.diva-portal.org/smash/resultList.jsf?searchType=SIMPLE&query={{{s}}}"
    },
    {
        "d": "www.divii.org",
        "b": "divii",
        "u": "http://www.divii.org/search?q= {{{s}}}"
    },
    {
        "d": "dizionario.internazionale.it",
        "b": "dizint",
        "u": "http://dizionario.internazionale.it/cerca/{{{s}}}"
    },
    {
        "d": "docs.djangoproject.com",
        "b": "djangodoc",
        "u": "https://docs.djangoproject.com/en/1.8/search/?q={{{s}}}"
    },
    {
        "d": "www.dictjuggler.net",
        "b": "djtrans",
        "u": "http://www.dictjuggler.net/en/yakugo/?word={{{s}}}"
    },
    {
        "d": "ordnet.dk",
        "b": "dkord",
        "u": "http://ordnet.dk/ddo/ordbog?query={{{s}}}"
    },
    {
        "d": "diksiyonaryo.ph",
        "b": "dkp",
        "u": "https://diksiyonaryo.ph/search/{{{s}}}"
    },
    {
        "d": "mdlc.iec.cat",
        "b": "dlcat",
        "u": "http://mdlc.iec.cat/results.asp?txtEntrada={{{s}}}&operEntrada=0"
    },
    {
        "d": "dle.rae.es",
        "b": "dle",
        "u": "http://dle.rae.es/?w={{{s}}}"
    },
    {
        "d": "dlmf.nist.gov",
        "b": "dlmf",
        "u": "http://dlmf.nist.gov/search/search?q={{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "dlo",
        "u": "https://dict.leo.org/german-english/{{{s}}}"
    },
    {
        "d": "www.priberam.pt",
        "b": "dlpoc",
        "u": "https://www.priberam.pt/dlpo/Conjugar/{{{s}}}"
    },
    {
        "d": "www.priberam.pt",
        "b": "dlpo",
        "u": "https://www.priberam.pt/dlpo/{{{s}}}"
    },
    {
        "d": "duke.summon.serialssolutions.com",
        "b": "dlss",
        "u": "http://duke.summon.serialssolutions.com/?summonVersion=2.0#!/search?ho=t&fvf=SourceType,Library%20Catalog,f%7CContentType,Book%20%2F%20eBook,f&q={{{s}}}&l=en"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "dmf",
        "u": "http://www.cnrtl.fr/definition/dmf/{{{s}}}"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "dmw",
        "u": "https://www.merriam-webster.com/dictionary/{{{s}}}"
    },
    {
        "d": "portal.dnb.de",
        "b": "dnb",
        "u": "https://portal.dnb.de/opac.htm?query={{{s}}}&method=simpleSearch"
    },
    {
        "d": "dict-navi.com",
        "b": "dnde",
        "u": "http://dict-navi.com/de/dictionary/list/?type=search&search_term={{{s}}}"
    },
    {
        "d": "referenceworks.brillonline.com",
        "b": "dnp",
        "u": "http://referenceworks.brillonline.com/search?s.q={{{s}}}&s.f.s2_parent=s.f.book.der-neue-pauly"
    },
    {
        "d": "www.doaj.org",
        "b": "doaj",
        "u": "https://www.doaj.org/search?source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22{{{s}}}%22%2C%22default_operator%22%3A%22AND%22%7D%7D%2C%22from%22%3A0%2C%22size%22%3A10%7D"
    },
    {
        "d": "flexikon.doccheck.com",
        "b": "doccde",
        "u": "http://flexikon.doccheck.com/de/index.php?title=Spezial:Suche&q={{{s}}}"
    },
    {
        "d": "m.flexikon.doccheck.com",
        "b": "docc",
        "u": "http://m.flexikon.doccheck.com/en/search/?q={{{s}}}"
    },
    {
        "d": "www.doccheck.com",
        "b": "doccheck",
        "u": "http://www.doccheck.com/de/search/?q={{{s}}}"
    },
    {
        "d": "www.doctorofcredit.com",
        "b": "doc",
        "u": "https://www.doctorofcredit.com/?s={{{s}}}"
    },
    {
        "d": "www.doctrine.fr",
        "b": "doctrine",
        "u": "https://www.doctrine.fr/?q={{{s}}}"
    },
    {
        "d": "canigivemydog.com",
        "b": "dog",
        "u": "http://canigivemydog.com/?s={{{s}}} "
    },
    {
        "d": "dogechain.info",
        "b": "dogechain",
        "u": "http://dogechain.info/address/{{{s}}}"
    },
    {
        "d": "www.dogpedia.org",
        "b": "dogpedia",
        "u": "http://www.dogpedia.org/?s={{{s}}}"
    },
    {
        "d": "doi.org",
        "b": "doi",
        "u": "https://doi.org/{{{s}}}"
    },
    {
        "d": "www.domu.com",
        "b": "domu",
        "u": "https://www.domu.com/chicago/apartment-search2?domu_search={{{s}}}"
    },
    {
        "d": "dotwhat.net",
        "b": "dotwhat",
        "u": "http://dotwhat.net/search/{{{s}}}"
    },
    {
        "d": "lema.rae.es",
        "b": "dpd",
        "u": "http://lema.rae.es/dpd/?key={{{s}}}"
    },
    {
        "d": "www.dpg-verhandlungen.de",
        "b": "dpg",
        "u": "https://www.dpg-verhandlungen.de/year/2019/conference/regensburg/search?query={{{s}}}&submit=Search"
    },
    {
        "d": "www.dblp.org",
        "b": "dplb",
        "u": "http://www.dblp.org/search/index.php#query={{{s}}}"
    },
    {
        "d": "ilg.usc.es",
        "b": "dplg",
        "u": "http://ilg.usc.es/pronuncia/?pq=&q={{{s}}}&l=1&c[]=0"
    },
    {
        "d": "michaelis.uol.com.br",
        "b": "dptbr",
        "u": "http://michaelis.uol.com.br/moderno-portugues/busca/portugues-brasileiro/{{{s}}}"
    },
    {
        "d": "dragonball.wikia.com",
        "b": "dragball",
        "u": "https://dragonball.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "academia.gal",
        "b": "drag",
        "u": "http://academia.gal/dicionario_rag/searchNoun.do?nounTitle={{{s}}}"
    },
    {
        "d": "draxe.com",
        "b": "draxe",
        "u": "https://draxe.com/?s={{{s}}}"
    },
    {
        "d": "www.dreambible.com",
        "b": "dreambible",
        "u": "http://www.dreambible.com/search.php?q={{{s}}}"
    },
    {
        "d": "dreammoods.com",
        "b": "dream",
        "u": "http://dreammoods.com/cgibin/dreamdictionarysearch.pl?method=exact&header=dreamsymbol&search={{{s}}}"
    },
    {
        "d": "dictionary.reference.com",
        "b": "dref",
        "u": "http://dictionary.reference.com/browse/{{{s}}}"
    },
    {
        "d": "dsn.dk",
        "b": "dro",
        "u": "https://dsn.dk/?retskriv={{{s}}}"
    },
    {
        "d": "www.drugbank.ca",
        "b": "drugbank",
        "u": "http://www.drugbank.ca/search?query={{{s}}} "
    },
    {
        "d": "www.drugs.com",
        "b": "drugs.com",
        "u": "https://www.drugs.com/search.php?searchterm={{{s}}}"
    },
    {
        "d": "www.drugs.com",
        "b": "drugs",
        "u": "http://www.drugs.com/search.php?&searchterm={{{s}}}"
    },
    {
        "d": "drw-www.adw.uni-heidelberg.de",
        "b": "drw",
        "u": "http://drw-www.adw.uni-heidelberg.de/drw-cgi/zeige?term={{{s}}}&index=lemmata"
    },
    {
        "d": "darksouls.wiki.fextralife.com",
        "b": "ds1",
        "u": "https://darksouls.wiki.fextralife.com/{{{s}}}"
    },
    {
        "d": "www.denstoredanske.dk",
        "b": "dsd",
        "u": "http://www.denstoredanske.dk/Special:Opslag?q={{{s}}}"
    },
    {
        "d": "www.datenschutz-wiki.de",
        "b": "dsgvo",
        "u": "https://www.datenschutz-wiki.de/index.php?search={{{s}}}&ns3000=1"
    },
    {
        "d": "dsn.dk",
        "b": "dsn",
        "u": "https://dsn.dk/?retskriv={{{s}}}&ae=0"
    },
    {
        "d": "dsp.stackexchange.com",
        "b": "dspse",
        "u": "http://dsp.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.d-seite.de",
        "b": "dste",
        "u": "https://www.d-seite.de/vis/vis.php?lemma={{{s}}}"
    },
    {
        "d": "dejure.org",
        "b": "dstgb",
        "u": "http://dejure.org/gesetze/StGB/{{{s}}}.html"
    },
    {
        "d": "dontsweattherecipe.com",
        "b": "dstr",
        "u": "https://dontsweattherecipe.com/?s={{{s}}}"
    },
    {
        "d": "dsv.su.se",
        "b": "dsv",
        "u": "http://dsv.su.se/s%C3%B6k?q={{{s}}}"
    },
    {
        "d": "www.datenschutz-wiki.de",
        "b": "dswiki",
        "u": "https://www.datenschutz-wiki.de/index.php?search={{{s}}}"
    },
    {
        "d": "deskthority.net",
        "b": "dt",
        "u": "https://deskthority.net/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.data.gouv.fr",
        "b": "dtg",
        "u": "https://www.data.gouv.fr/search/?q={{{s}}}"
    },
    {
        "d": "www.thefreedictionary.com",
        "b": "d",
        "u": "http://www.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "www.discoverthenetworks.org",
        "b": "dtn",
        "u": "http://www.discoverthenetworks.org/search/?q={{{s}}}&cof=FORID%3A11&cx=013255222075609514560%3Avfcebs4vcuo"
    },
    {
        "d": "deskthority.net",
        "b": "dtwiki",
        "u": "https://deskthority.net/wiki/{{{s}}}"
    },
    {
        "d": "find.library.duke.edu",
        "b": "duc",
        "u": "https://find.library.duke.edu/?search_field=all_fields&q={{{s}}}"
    },
    {
        "d": "www.duckduckgo.com",
        "b": "duckai",
        "u": "https://www.duckduckgo.com/?q={{{s}}}&ia=chat&bang=true "
    },
    {
        "d": "www.duedil.com",
        "b": "duedil",
        "u": "https://www.duedil.com/companies/search?query={{{s}}}&op=Companies"
    },
    {
        "d": "library.duke.edu",
        "b": "dul",
        "u": "http://library.duke.edu/find/all?Ntt={{{s}}} "
    },
    {
        "d": "www.dummies.com",
        "b": "dummies",
        "u": "https://www.dummies.com/?s={{{s}}}"
    },
    {
        "d": "dejure.org",
        "b": "durhg",
        "u": "http://dejure.org/cgi-bin/suche?Suchenach={{{s}}}"
    },
    {
        "d": "www.ikonet.com",
        "b": "dv",
        "u": "http://www.ikonet.com/fr/ledictionnairevisuel/static/qc/searchresults?cx=partner-pub-7156007925185226%3Atd1ipa-ejn8&cof=FORID%3A9&ie=UTF-8&q={{{s}}}&siteurl=www.ikonet.com%2Ffr%2Fledictionnairevisuel%2F&ref=www.ikonet.com%2Ffr%2Fledictionnairevisuel%2Fstatic%2Fqc%2Fsearchresults%3Fcx%3Dpartner-pub-7156007925185226%253Atd1ipa-ejn8%26cof%3DFORID%253A9%26ie%3DUTF-8%26q%3Dfraise%26siteurl%3Dwww.ikonet.com%252Ffr%252Fledictionnairevisuel%252Fstatic%252Fqc%252Fvisuel%26ref%3D%26ss%3D607j79921j6&ss=648j91840j6"
    },
    {
        "d": "woerterbuchnetz.de",
        "b": "dwb",
        "u": "http://woerterbuchnetz.de/DWB/?lemma={{{s}}}"
    },
    {
        "d": "www.dwds.de",
        "b": "dwds",
        "u": "http://www.dwds.de/?qu={{{s}}}"
    },
    {
        "d": "daviswiki.org",
        "b": "dwiki",
        "u": "https://daviswiki.org/_rsearch/?q={{{s}}}"
    },
    {
        "d": "www.dictionary.com",
        "b": "dxn",
        "u": "http://www.dictionary.com/browse/{{{s}}}?s=ts"
    },
    {
        "d": "www.ean-search.org",
        "b": "ean",
        "u": "http://www.ean-search.org/perl/ean-search.pl?q={{{s}}}"
    },
    {
        "d": "www.easybib.com",
        "b": "easybib",
        "u": "http://www.easybib.com/cite/eval?url={{{s}}}"
    },
    {
        "d": "eatbydate.com",
        "b": "eatbydate",
        "u": "http://eatbydate.com/search/?q={{{s}}}"
    },
    {
        "d": "eattender.com",
        "b": "eattender",
        "u": "http://eattender.com/recipes/search?q={{{s}}}"
    },
    {
        "d": "www.eatbydate.com",
        "b": "ebd",
        "u": "http://www.eatbydate.com/search/?q={{{s}}}"
    },
    {
        "d": "www.ebi.ac.uk",
        "b": "ebi",
        "u": "https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query={{{s}}}&requestFrom=duckduckgo"
    },
    {
        "d": "www.britannica.com",
        "b": "ebrit",
        "u": "https://www.britannica.com/search?query={{{s}}}"
    },
    {
        "d": "curia.europa.eu",
        "b": "ecli",
        "u": "http://curia.europa.eu/juris/liste.jsf?critereEcli={{{s}}}"
    },
    {
        "d": "www.e-codices.unifr.ch",
        "b": "ecodices",
        "u": "http://www.e-codices.unifr.ch/en/search/all?sQueryString={{{s}}}"
    },
    {
        "d": "www.ecosia.org",
        "b": "eco",
        "u": "https://www.ecosia.org/search?q={{{s}}}"
    },
    {
        "d": "www.ecole-club.ch",
        "b": "ecole-club",
        "u": "https://www.ecole-club.ch/Cours/recherche@{{{s}}}"
    },
    {
        "d": "www.ecolo.be",
        "b": "ecolo",
        "u": "http://www.ecolo.be/spip.php?recherche={{{s}}}&page=recherche"
    },
    {
        "d": "www.econbiz.de",
        "b": "econbiz",
        "u": "http://www.econbiz.de/Search/Results?lookfor={{{s}}}&type=AllFields&submit=Suchen"
    },
    {
        "d": "econlib.org",
        "b": "econlib",
        "u": "http://econlib.org/cgi-bin/fullsearch.pl?query={{{s}}}"
    },
    {
        "d": "secure.ecs.soton.ac.uk",
        "b": "ecs",
        "u": "https://secure.ecs.soton.ac.uk/kb/search/?q={{{s}}}&s=1"
    },
    {
        "d": "www.exploit-db.com",
        "b": "edb",
        "u": "https://www.exploit-db.com/search/?action=search&description={{{s}}}"
    },
    {
        "d": "everydaycarry.com",
        "b": "edc",
        "u": "http://everydaycarry.com/search{{{s}}}"
    },
    {
        "d": "www.sec.gov",
        "b": "edgar",
        "u": "http://www.sec.gov/cgi-bin/browse-edgar?company={{{s}}}&CIK=&filenum=&State=&SIC=&owner=include&action=getcompany"
    },
    {
        "d": "www.sec.gov",
        "b": "edgart",
        "u": "http://www.sec.gov/cgi-bin/browse-edgar?company=&match=&CIK={{{s}}}&filenum=&State=&Country=&SIC=&owner=exclude&Find=Find+Companies&action=getcompany"
    },
    {
        "d": "www.editus.lu",
        "b": "editus",
        "u": "http://www.editus.lu/ed/fr/recherche.html?q={{{s}}}"
    },
    {
        "d": "spotlight.edmodo.com",
        "b": "edmodo",
        "u": "https://spotlight.edmodo.com/Browse?search=true&q={{{s}}}"
    },
    {
        "d": "new.edmodo.com",
        "b": "edmo",
        "u": "https://new.edmodo.com/search?q={{{s}}}"
    },
    {
        "d": "educalingo.com",
        "b": "educalingofr",
        "u": "https://educalingo.com/fr/dic-fr/{{{s}}}"
    },
    {
        "d": "edutalk.id",
        "b": "edutalk",
        "u": "https://edutalk.id/?s={{{s}}}"
    },
    {
        "d": "edutin.com",
        "b": "edut",
        "u": "http://edutin.com/cursos/buscar/{{{s}}}"
    },
    {
        "d": "www.eff.org",
        "b": "eff",
        "u": "https://www.eff.org/search/site/{{{s}}}"
    },
    {
        "d": "diglib.eg.org",
        "b": "egdl",
        "u": "http://diglib.eg.org/discover?query={{{s}}}&submit=Go"
    },
    {
        "d": "eow.alc.co.jp",
        "b": "eijirou",
        "u": "https://eow.alc.co.jp/search?q={{{s}}}"
    },
    {
        "d": "www.iranicaonline.org",
        "b": "eir",
        "u": "http://www.iranicaonline.org/articles/search/keywords:{{{s}}}"
    },
    {
        "d": "www.tanoshiijapanese.com",
        "b": "ej",
        "u": "http://www.tanoshiijapanese.com/dictionary/index.cfm?j=&e={{{s}}}&search=Search+%3E"
    },
    {
        "d": "econjwatch.org",
        "b": "ejw",
        "u": "https://econjwatch.org/search/?m=all&q={{{s}}}"
    },
    {
        "d": "www.eki.ee",
        "b": "ekss",
        "u": "http://www.eki.ee/dict/ekss/index.cgi?Q={{{s}}}&F=M"
    },
    {
        "d": "www.bibleserver.com",
        "b": "elb",
        "u": "http://www.bibleserver.com/text/ELB/{{{s}}}"
    },
    {
        "d": "www.elconjugador.com",
        "b": "elconjugador",
        "u": "http://www.elconjugador.com/conjugaison/verbe/espagnol/{{{s}}}.html"
    },
    {
        "d": "www.greek-language.gr",
        "b": "eldict",
        "u": "http://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/search.html?lq=%22{{{s}}}%22"
    },
    {
        "d": "hiztegiak.elhuyar.eus",
        "b": "elheneu",
        "u": "http://hiztegiak.elhuyar.eus/en_eu/{{{s}}}"
    },
    {
        "d": "hiztegiak.elhuyar.eus",
        "b": "elheseu",
        "u": "http://hiztegiak.elhuyar.eus/es_eu/{{{s}}}"
    },
    {
        "d": "hiztegiak.elhuyar.eus",
        "b": "elheuen",
        "u": "http://hiztegiak.elhuyar.eus/eu_en/{{{s}}}"
    },
    {
        "d": "hiztegiak.elhuyar.eus",
        "b": "elheues",
        "u": "http://hiztegiak.elhuyar.eus/eu_es/{{{s}}}"
    },
    {
        "d": "hiztegiak.elhuyar.eus",
        "b": "elheufr",
        "u": "http://hiztegiak.elhuyar.eus/eu_fr/{{{s}}}"
    },
    {
        "d": "hiztegiak.elhuyar.eus",
        "b": "elhfreu",
        "u": "http://hiztegiak.elhuyar.eus/fr_eu/{{{s}}}"
    },
    {
        "d": "hiztegiak.elhuyar.org",
        "b": "elhuyar",
        "u": "http://hiztegiak.elhuyar.org/es_eu/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "eli5",
        "u": "https://www.reddit.com/r/explainlikeimfive/search?q={{{s}}}&restrict_sr=on&sort=relevance&t=all"
    },
    {
        "d": "ell.stackexchange.com",
        "b": "ell",
        "u": "https://ell.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "el.wikipedia.org",
        "b": "elw",
        "u": "https://el.wikipedia.org/w/index.php?search={{{s}}}&title=%CE%95%CE%B9%CE%B4%CE%B9%CE%BA%CF%8C%3A%CE%91%CE%BD%CE%B1%CE%B6%CE%AE%CF%84%CE%B7%CF%83%CE%B7&go=%CE%9C%CE%B5%CF%84%CE%AC%CE%B2%CE%B1%CF%83%CE%B7"
    },
    {
        "d": "www.ema.europa.eu",
        "b": "ema",
        "u": "http://www.ema.europa.eu/ema/index.jsp?curl=pages%2Fincludes%2Fmedicines%2Fmedicines_landing_page.jsp&searchkwByEnter=true&quickSearch={{{s}}}"
    },
    {
        "d": "www.medicines.org.uk",
        "b": "emc",
        "u": "https://www.medicines.org.uk/emc/search?q= {{{s}}}"
    },
    {
        "d": "search.medscape.com",
        "b": "emedicine",
        "u": "http://search.medscape.com/reference-search?newSearchHeader=1&queryText={{{s}}}"
    },
    {
        "d": "www.emich.edu",
        "b": "emich",
        "u": "https://www.emich.edu/search/?q={{{s}}}"
    },
    {
        "d": "emojipedia.org",
        "b": "emojipedia",
        "u": "http://emojipedia.org/?s={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "en2fr",
        "u": "https://translate.google.com/#en/fr/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enbr",
        "u": "https://translate.google.com/#en/pt/{{{s}}}"
    },
    {
        "d": "www.encyclo.nl",
        "b": "enc",
        "u": "http://www.encyclo.nl/begrip/{{{s}}}"
    },
    {
        "d": "www.encodeproject.org",
        "b": "encode",
        "u": "https://www.encodeproject.org/search/?searchTerm={{{s}}}"
    },
    {
        "d": "www.encyclopedia.com",
        "b": "encom",
        "u": "http://www.encyclopedia.com/searchresults.aspx?q={{{s}}}"
    },
    {
        "d": "encyc.org",
        "b": "encyc",
        "u": "http://encyc.org/wiki/{{{s}}}"
    },
    {
        "d": "www.encyclopediaofmath.org",
        "b": "encyclopediaofmath",
        "u": "http://www.encyclopediaofmath.org/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "encyclopedia",
        "u": "http://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "endic.naver.com",
        "b": "endic",
        "u": "http://endic.naver.com/search.nhn?sLn=en&isOnlyViewEE=N&query={{{s}}}"
    },
    {
        "d": "endless-sphere.com",
        "b": "endlessphere",
        "u": "http://endless-sphere.com/forums/?q {{{s}}} "
    },
    {
        "d": "english.stackexchange.com",
        "b": "en",
        "u": "http://english.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "essearch.energystar.gov",
        "b": "energystar",
        "u": "http://essearch.energystar.gov/search?query={{{s}}}&affiliate=www.energystar.gov"
    },
    {
        "d": "translate.google.com",
        "b": "enfi",
        "u": "http://translate.google.com/#en/fi/{{{s}}}"
    },
    {
        "d": "www.focloir.ie",
        "b": "enfoc",
        "u": "http://www.focloir.ie/en/dictionary/ei/{{{s}}}?advSearch=1&q={{{s}}}&inlanguage=en"
    },
    {
        "d": "www.englishforums.com",
        "b": "engfor",
        "u": "https://www.englishforums.com/search/{{{s}}}.htm"
    },
    {
        "d": "www.englishgrammar.org",
        "b": "enggramm",
        "u": "https://www.englishgrammar.org/?s={{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "engtb",
        "u": "https://cse.google.com/cse?cx=partner-pub-3176996020956223:6582549258&q={{{s}}}&og=_l=partner-generic.3...19628.24-generic..0.0.0."
    },
    {
        "d": "translate.google.com",
        "b": "enid",
        "u": "https://translate.google.com/translate#en/id/{{{s}}}"
    },
    {
        "d": "enigma.huma-num.fr",
        "b": "enig",
        "u": "http://enigma.huma-num.fr/index.php?q=1&w={{{s}}}"
    },
    {
        "d": "enigma.huma-num.fr",
        "b": "enigma",
        "u": "http://enigma.huma-num.fr/index.php?q=1&w={{{s}}}"
    },
    {
        "d": "latin-dictionary.net",
        "b": "enlat",
        "u": "http://latin-dictionary.net/search/english/{{{s}}}"
    },
    {
        "d": "www.enmu.edu",
        "b": "enmu",
        "u": "http://www.enmu.edu/search?q={{{s}}}"
    },
    {
        "d": "ojibwe.lib.umn.edu",
        "b": "enoj",
        "u": "https://ojibwe.lib.umn.edu/search?utf8=%E2%9C%93&q={{{s}}}&commit=Search&type=english"
    },
    {
        "d": "translate.google.com",
        "b": "enru",
        "u": "http://translate.google.com/#en/ru/{{{s}}}"
    },
    {
        "d": "www.ensembl.org",
        "b": "ensembl",
        "u": "http://www.ensembl.org/Multi/Search/Results?q={{{s}}};site=ensembl"
    },
    {
        "d": "www.ensembl.org",
        "b": "ens",
        "u": "http://www.ensembl.org/Multi/psychic?q={{{s}}}"
    },
    {
        "d": "english.stackexchange.com",
        "b": "enstex",
        "u": "https://english.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "mw.lojban.org",
        "b": "en-sutsis",
        "u": "http://mw.lojban.org/extensions/ilmentufa/i/en/#sisku/http://mw.lojban.org/extensions/ilmentufa/i/en/#sisku/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "enth",
        "u": "https://translate.google.com/#en/th/{{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "entrez",
        "u": "http://www.ncbi.nlm.nih.gov/sites/gquery?term={{{s}}}"
    },
    {
        "d": "glosbe.com",
        "b": "eo2en",
        "u": "https://glosbe.com/eo/en/{{{s}}}"
    },
    {
        "d": "www.eoearth.org",
        "b": "eoearth",
        "u": "http://www.eoearth.org/results/all/?searchnext=true&q={{{s}}}"
    },
    {
        "d": "eol.org",
        "b": "eol",
        "u": "http://eol.org/search?q={{{s}}}&search=Go"
    },
    {
        "d": "www.encyclopediaofmath.org",
        "b": "eom",
        "u": "http://www.encyclopediaofmath.org/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "www.etymonline.com",
        "b": "eo",
        "u": "https://www.etymonline.com/search?q={{{s}}}"
    },
    {
        "d": "eowp.alc.co.jp",
        "b": "eow",
        "u": "http://eowp.alc.co.jp/search?q={{{s}}}"
    },
    {
        "d": "nlquery.epa.gov",
        "b": "epa",
        "u": "http://nlquery.epa.gov/epasearch/epasearch?querytext={{{s}}}&fld=&areaname=&typeofsearch=epa&areacontacts=http%3A%2F%2Fwww.epa.gov%2Fepahome%2Fcomments.htm&areasearchurl=&result_template=epafiles_default.xsl&filter=sample4filt.hts&x=0&y=0"
    },
    {
        "d": "everipedia.org",
        "b": "ep",
        "u": "https://everipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "beast-epfl.hosted.exlibrisgroup.com",
        "b": "epflbib",
        "u": "https://beast-epfl.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=EPFL&lang=en_US&offset=0"
    },
    {
        "d": "beast-epfl.hosted.exlibrisgroup.com",
        "b": "epflbook",
        "u": "https://beast-epfl.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=EPFL&lang=fr_FR&offset=0&fn=search"
    },
    {
        "d": "search.epfl.ch",
        "b": "epfldir",
        "u": "https://search.epfl.ch/psearch.action?q={{{s}}}&f=directory&lang=en&pageSize=10&sort="
    },
    {
        "d": "search.epfl.ch",
        "b": "epfl",
        "u": "http://search.epfl.ch/web.action?q={{{s}}}"
    },
    {
        "d": "plan.epfl.ch",
        "b": "epflp",
        "u": "http://plan.epfl.ch/?room={{{s}}}"
    },
    {
        "d": "www.epicurious.com",
        "b": "epicurious",
        "u": "http://www.epicurious.com/tools/searchresults?search={{{s}}}&x=0&y=0"
    },
    {
        "d": "europepmc.org",
        "b": "epmc",
        "u": "http://europepmc.org/search?query={{{s}}}"
    },
    {
        "d": "register.epo.org",
        "b": "eporeg",
        "u": "https://register.epo.org/smartSearch?searchMode=smart&query={{{s}}}"
    },
    {
        "d": "elpasopl.ent.sirsi.net",
        "b": "eppl",
        "u": "https://elpasopl.ent.sirsi.net/client/en_US/default/search/results?ln=en_US&q={{{s}}}"
    },
    {
        "d": "spatialreference.org",
        "b": "epsg",
        "u": "http://spatialreference.org/ref/?search=epsg:{{{s}}}"
    },
    {
        "d": "equaldex.com",
        "b": "equaldex",
        "u": "http://equaldex.com/search?q={{{s}}}"
    },
    {
        "d": "www.erowid.org",
        "b": "er",
        "u": "https://www.erowid.org/search.php?q={{{s}}}"
    },
    {
        "d": "www.erf.de",
        "b": "erf",
        "u": "http://www.erf.de/?node=1097&page=1&NAV_CatSelect=0&NAV_MetaSuchtext={{{s}}}"
    },
    {
        "d": "eric.ed.gov",
        "b": "eric",
        "u": "https://eric.ed.gov/?q={{{s}}}"
    },
    {
        "d": "www.erowid.org",
        "b": "eroexp",
        "u": "https://www.erowid.org/experiences/exp.cgi?S1=0&S2=-1&C1=-1&Str={{{s}}}"
    },
    {
        "d": "www.erowid.org",
        "b": "erowid",
        "u": "http://www.erowid.org/search.php?q={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "esdef",
        "u": "http://www.wordreference.com/definicion/{{{s}}}"
    },
    {
        "d": "lexicoon.org",
        "b": "eslexicon",
        "u": "http://lexicoon.org/es/{{{s}}}"
    },
    {
        "d": "worldwide.espacenet.com",
        "b": "espacenet",
        "u": "https://worldwide.espacenet.com/searchResults?ST=singleline&query={{{s}}}&Submit=Search"
    },
    {
        "d": "physics.stackexchange.com",
        "b": "esse",
        "u": "https://physics.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "essin",
        "u": "http://www.wordreference.com/sinonimos/{{{s}}}"
    },
    {
        "d": "estraviz.org",
        "b": "estraviz",
        "u": "https://estraviz.org/{{{s}}}"
    },
    {
        "d": "www.esvonline.org",
        "b": "esvonline",
        "u": "http://www.esvonline.org/search/{{{s}}}/"
    },
    {
        "d": "www.ethnologue.com",
        "b": "ethnologue",
        "u": "http://www.ethnologue.com/search?keys={{{s}}}"
    },
    {
        "d": "www.ethz.ch",
        "b": "ethz",
        "u": "https://www.ethz.ch/en/utils/search.html?search={{{s}}}"
    },
    {
        "d": "etimo.it",
        "b": "etimo",
        "u": "http://etimo.it/?term={{{s}}}"
    },
    {
        "d": "www.eattheweeds.com",
        "b": "etw",
        "u": "http://www.eattheweeds.com/?s={{{s}}}"
    },
    {
        "d": "www.etymonline.com",
        "b": "etymology",
        "u": "http://www.etymonline.com/index.php?search={{{s}}}&searchmode=none"
    },
    {
        "d": "www.etymonline.com",
        "b": "etymonline",
        "u": "http://www.etymonline.com/search?q={{{s}}}"
    },
    {
        "d": "www.etymonline.com",
        "b": "etymo",
        "u": "http://www.etymonline.com/index.php?term={{{s}}}"
    },
    {
        "d": "etymologiebank.nl",
        "b": "etynl",
        "u": "http://etymologiebank.nl/trefwoord/{{{s}}}"
    },
    {
        "d": "www.etymonline.com",
        "b": "ety",
        "u": "http://www.etymonline.com/index.php?allowed_in_frame=0&search={{{s}}}&searchmode=none"
    },
    {
        "d": "europa.eu",
        "b": "eu",
        "u": "https://europa.eu/search/?QueryText={{{s}}}"
    },
    {
        "d": "edinboro.edu",
        "b": "eup",
        "u": "http://edinboro.edu/search/search.html?keyword={{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "eur2usd",
        "u": "http://www.xe.com/currencyconverter/convert/?From=EUR&To=USD&Amount={{{s}}}"
    },
    {
        "d": "eur-lex.europa.eu",
        "b": "eurlex",
        "u": "http://eur-lex.europa.eu/search.html?text={{{s}}}&scope=EURLEX&type=quick"
    },
    {
        "d": "europepmc.org",
        "b": "europepmc",
        "u": "http://europepmc.org/search?query={{{s}}}"
    },
    {
        "d": "www.essen-und-trinken.de",
        "b": "eut",
        "u": "https://www.essen-und-trinken.de/suche#site=eut&category=Rezept&query={{{s}}}&page=1&sorting=relevance"
    },
    {
        "d": "eva.fing.edu.uy",
        "b": "evafing",
        "u": "https://eva.fing.edu.uy/course/search.php?search={{{s}}}"
    },
    {
        "d": "wiki.evageeks.org",
        "b": "evawk",
        "u": "https://wiki.evageeks.org/Special:Search?search={{{s}}}"
    },
    {
        "d": "everipedia.org",
        "b": "ever",
        "u": "https://everipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "www.everymac.com",
        "b": "everymac",
        "u": "http://www.everymac.com/ultimate-mac-lookup/?search_keywords={{{s}}}"
    },
    {
        "d": "www.eviq.org.au",
        "b": "eviq",
        "u": "https://www.eviq.org.au/search?searchtext={{{s}}}"
    },
    {
        "d": "www.evrenbilim.com",
        "b": "evren",
        "u": "https://www.evrenbilim.com/?s={{{s}}}"
    },
    {
        "d": "www.3ds.com",
        "b": "exaled",
        "u": "http://www.3ds.com/search/?q={{{s}}} "
    },
    {
        "d": "examine.com",
        "b": "examine",
        "u": "http://examine.com/search.php?q={{{s}}}"
    },
    {
        "d": "examine.com",
        "b": "ex",
        "u": "https://examine.com/search/?q={{{s}}}"
    },
    {
        "d": "irfantoor.com",
        "b": "exp",
        "u": "http://irfantoor.com/exploits?s={{{s}}}"
    },
    {
        "d": "explorecourses.stanford.edu",
        "b": "explorecourses",
        "u": "http://explorecourses.stanford.edu/search?q={{{s}}}"
    },
    {
        "d": "ezinearticles.com",
        "b": "ezine",
        "u": "http://ezinearticles.com/search/?q={{{s}}}"
    },
    {
        "d": "www.factbites.com",
        "b": "factbites",
        "u": "http://www.factbites.com/topics/{{{s}}}"
    },
    {
        "d": "factornumber.com",
        "b": "factor",
        "u": "http://factornumber.com/?page={{{s}}};"
    },
    {
        "d": "farsi123.com",
        "b": "farsi123",
        "u": "http://farsi123.com/?word={{{s}}}"
    },
    {
        "d": "www.fass.se",
        "b": "fassv",
        "u": "https://www.fass.se/LIF/result?userType=0&query={{{s}}}"
    },
    {
        "d": "www.fatsecret.com",
        "b": "fatsecret",
        "u": "https://www.fatsecret.com/calories-nutrition/search?q={{{s}}}"
    },
    {
        "d": "www.fundeu.es",
        "b": "fbbva",
        "u": "http://www.fundeu.es/?s={{{s}}}"
    },
    {
        "d": "www.frag-caesar.de",
        "b": "fcaesar",
        "u": "https://www.frag-caesar.de/lateinwoerterbuch/{{{s}}}-uebersetzung.html"
    },
    {
        "d": "search.usa.gov",
        "b": "fda",
        "u": "https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=fda&query={{{s}}}&commit=Search"
    },
    {
        "d": "fddb.info",
        "b": "fddb",
        "u": "http://fddb.info/db/de/suche/?udd=0&cat=site-de&search={{{s}}}"
    },
    {
        "d": "freedictionary.org",
        "b": "fd",
        "u": "http://freedictionary.org/?Query={{{s}}}&button=Search"
    },
    {
        "d": "finedictionary.com",
        "b": "fdic",
        "u": "http://finedictionary.com/{{{s}}}.html"
    },
    {
        "d": "www.federalregister.gov",
        "b": "fedreg",
        "u": "https://www.federalregister.gov/documents/search?conditions%5Bterm%5D={{{s}}}"
    },
    {
        "d": "www.feedough.com",
        "b": "feedough",
        "u": "https://www.feedough.com/?s={{{s}}}"
    },
    {
        "d": "fee.org",
        "b": "fee",
        "u": "https://fee.org/search/?q={{{s}}}"
    },
    {
        "d": "www.fer.unizg.hr",
        "b": "fer",
        "u": "http://www.fer.unizg.hr/search?sq={{{s}}} &s_skip=0"
    },
    {
        "d": "www.folklore.ee",
        "b": "fes",
        "u": "http://www.folklore.ee/justkui/sonastik/?otsing={{{s}}}&paring=Otsi"
    },
    {
        "d": "www.fettrechner.de",
        "b": "fettrechner",
        "u": "http://www.fettrechner.de/cgi-bin/kalorientabelle.pl?t=temsearch&sort=BEZEICHNUNG&f=*RUBRIK%2C*SUCHBEGRIFFE%2C*BEZEICHNUNG%2C*HERSTELLER&f1=HERSTELLER&start=1&dif=50&c={{{s}}}"
    },
    {
        "d": "www.admin.ch",
        "b": "ffch",
        "u": "https://www.admin.ch/opc/search/?lang=fr&language[]=fr&product[]=fg&text={{{s}}}&lang=fr"
    },
    {
        "d": "fhsu.edu",
        "b": "fhsu",
        "u": "https://fhsu.edu/searchresults.aspx?query={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "fien",
        "u": "http://translate.google.com/#fi/en/{{{s}}} "
    },
    {
        "d": "www.file-extensions.org",
        "b": "fileext",
        "u": "http://www.file-extensions.org/search/?searchstring={{{s}}}"
    },
    {
        "d": "filext.com",
        "b": "filext",
        "u": "http://filext.com/file-extension/{{{s}}}"
    },
    {
        "d": "public.findlaw.com",
        "b": "findlaw",
        "u": "http://public.findlaw.com/LCsearch.html?entry={{{s}}}"
    },
    {
        "d": "www.finecooking.com",
        "b": "finecooking",
        "u": "http://www.finecooking.com/?s={{{s}}}"
    },
    {
        "d": "www.finedictionary.com",
        "b": "finedict",
        "u": "http://www.finedictionary.com/{{{s}}}.html"
    },
    {
        "d": "fineli.fi",
        "b": "finelien",
        "u": "https://fineli.fi/fineli/en/elintarvikkeet?q={{{s}}}"
    },
    {
        "d": "fineli.fi",
        "b": "fineli",
        "u": "https://fineli.fi/fineli/fi/elintarvikkeet?q={{{s}}}"
    },
    {
        "d": "fineli.fi",
        "b": "finelisv",
        "u": "https://fineli.fi/fineli/sv/elintarvikkeet?q={{{s}}}"
    },
    {
        "d": "finlex.fi",
        "b": "finlex",
        "u": "http://finlex.fi/fi/laki/haku/?search[type]=pika&search[pika]={{{s}}}"
    },
    {
        "d": "fitfolly.com",
        "b": "fitfolly",
        "u": "https://fitfolly.com/?s={{{s}}}"
    },
    {
        "d": "search.ebscohost.com.ezproxy.fiu.edu",
        "b": "fiueds",
        "u": "http://search.ebscohost.com.ezproxy.fiu.edu/login.aspx?direct=true&scope=site&type=0&site=eds-live&lang=en&bquery=[{{{s}}}]"
    },
    {
        "d": "fkb.dk",
        "b": "fkb",
        "u": "https://fkb.dk/search/ting/{{{s}}}"
    },
    {
        "d": "www.felleskatalogen.no",
        "b": "fkt",
        "u": "https://www.felleskatalogen.no/medisin/sok?sokord={{{s}}}"
    },
    {
        "d": "flexikon.doccheck.com",
        "b": "fle",
        "u": "http://flexikon.doccheck.com/de/Spezial:Suche?q={{{s}}}"
    },
    {
        "d": "www.flightradar24.com",
        "b": "flightradar",
        "u": "https://www.flightradar24.com/data/flights/{{{s}}}"
    },
    {
        "d": "www.webflis.us",
        "b": "flis",
        "u": "http://www.webflis.us//webflis.aspx?All={{{s}}}"
    },
    {
        "d": "www.wildflower.org",
        "b": "flower",
        "u": "http://www.wildflower.org/plants/search.php?search_field={{{s}}}&newsearch=true"
    },
    {
        "d": "www.reddit.com",
        "b": "flr",
        "u": "https://www.reddit.com/r/FluidLang/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "flybase.org",
        "b": "fly",
        "u": "http://flybase.org/search/{{{s}}}"
    },
    {
        "d": "www.foodnetwork.com",
        "b": "fn",
        "u": "https://www.foodnetwork.com/search/{{{s}}}-"
    },
    {
        "d": "file.org",
        "b": "fo",
        "u": "http://file.org/extension/{{{s}}} "
    },
    {
        "d": "foldoc.org",
        "b": "foldoc",
        "u": "http://foldoc.org/{{{s}}}"
    },
    {
        "d": "folkets-lexikon.csc.kth.se",
        "b": "folkets",
        "u": "http://folkets-lexikon.csc.kth.se/folkets/#lookup&{{{s}}}&0"
    },
    {
        "d": "www.folkwiki.se",
        "b": "folkwiki",
        "u": "http://www.folkwiki.se/?n=Meta.Start&action=search&q={{{s}}}"
    },
    {
        "d": "www.identifont.com",
        "b": "font",
        "u": "http://www.identifont.com/find?font={{{s}}}&similar={{{s}}}"
    },
    {
        "d": "www.identifont.com",
        "b": "fontslike",
        "u": "http://www.identifont.com/find?similar={{{s}}}&q=Go"
    },
    {
        "d": "fooby.ch",
        "b": "fooby",
        "u": "https://fooby.ch/de/suche.html?query={{{s}}}&treffertyp=rezepte"
    },
    {
        "d": "www.food.com",
        "b": "food",
        "u": "http://www.food.com/recipe-finder/all/{{{s}}}"
    },
    {
        "d": "search.freefind.com",
        "b": "foodsubs",
        "u": "http://search.freefind.com/find.html?id=81296093&pageid=r&query={{{s}}}"
    },
    {
        "d": "www.foody.vn",
        "b": "foody",
        "u": "https://www.foody.vn/ho-chi-minh/dia-diem?q={{{s}}}&ss=header_search_form"
    },
    {
        "d": "forkd.com",
        "b": "forkd",
        "u": "http://forkd.com/recipe/search?q={{{s}}}"
    },
    {
        "d": "www.forrester.com",
        "b": "forrester",
        "u": "https://www.forrester.com/search?tmtxt={{{s}}}"
    },
    {
        "d": "forvo.com",
        "b": "forvo",
        "u": "http://forvo.com/search/{{{s}}}/"
    },
    {
        "d": "www.focusonthefamily.com",
        "b": "fotf",
        "u": "https://www.focusonthefamily.com/search-results#q={{{s}}}&t=FocusOnTheFamilyOnly&sort=relevancy"
    },
    {
        "d": "www.flightradar24.com",
        "b": "fr24",
        "u": "https://www.flightradar24.com/data/flights/{{{s}}}"
    },
    {
        "d": "www.fragrantica.com",
        "b": "fragrantica",
        "u": "https://www.fragrantica.com/search/?q={{{s}}}"
    },
    {
        "d": "www.fran.si",
        "b": "fran",
        "u": "http://www.fran.si/iskanje?View=2&Query= {{{s}}} "
    },
    {
        "d": "www.frag-caesar.de",
        "b": "frc",
        "u": "http://www.frag-caesar.de/lateinwoerterbuch/{{{s}}}-uebersetzung.html"
    },
    {
        "d": "www.frag-caesar.de",
        "b": "frcs",
        "u": "http://www.frag-caesar.de/lateinwoerterbuch/{{{s}}}-uebersetzung.html"
    },
    {
        "d": "research.stlouisfed.org",
        "b": "fred",
        "u": "https://research.stlouisfed.org/fred2/search?st={{{s}}}"
    },
    {
        "d": "www.freecollocation.com",
        "b": "freecol",
        "u": "http://www.freecollocation.com/search?word={{{s}}}"
    },
    {
        "d": "freedictionary.org",
        "b": "freedict",
        "u": "http://freedictionary.org/?Query={{{s}}}&button=Search"
    },
    {
        "d": "freedictionary.org",
        "b": "freedictionary",
        "u": "http://freedictionary.org/?Query={{{s}}}&button=Search"
    },
    {
        "d": "www.freethesaurus.com",
        "b": "freethesaurus",
        "u": "http://www.freethesaurus.com/{{{s}}}"
    },
    {
        "d": "french.stackexchange.com",
        "b": "french",
        "u": "http://french.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "frida.fooddata.dk",
        "b": "frida",
        "u": "https://frida.fooddata.dk/food/search?lang=en&q={{{s}}}"
    },
    {
        "d": "frightfind.com",
        "b": "fright",
        "u": "https://frightfind.com/?s={{{s}}}"
    },
    {
        "d": "www.francisfrith.com",
        "b": "frith",
        "u": "https://www.francisfrith.com/search?q={{{s}}}"
    },
    {
        "d": "framabee.org",
        "b": "frmb",
        "u": "https://framabee.org/?q={{{s}}}"
    },
    {
        "d": "www.frontiersin.org",
        "b": "frontiers",
        "u": "http://www.frontiersin.org/SearchData.aspx?sq={{{s}}}"
    },
    {
        "d": "ratings.food.gov.uk",
        "b": "fsarating",
        "u": "http://ratings.food.gov.uk/enhanced-search/en-GB/{{{s}}}/%5E/alpha/0/%5E/%5E/1/1/10"
    },
    {
        "d": "www.futura-sciences.com",
        "b": "fsc",
        "u": "http://www.futura-sciences.com/magazines/sciences/recherche/?q={{{s}}}"
    },
    {
        "d": "www.freethesaurus.com",
        "b": "fthes",
        "u": "https://www.freethesaurus.com/{{{s}}}"
    },
    {
        "d": "www.farmacotherapeutischkompas.nl",
        "b": "ftk",
        "u": "https://www.farmacotherapeutischkompas.nl/snelzoeken?zoekterm={{{s}}}&domein=geneesmiddelen"
    },
    {
        "d": "www.futurelearn.com",
        "b": "ftln",
        "u": "https://www.futurelearn.com/search?q={{{s}}}"
    },
    {
        "d": "www.ub-katalog.fernuni-hagen.de",
        "b": "fubib",
        "u": "https://www.ub-katalog.fernuni-hagen.de/F/?func=find-b&request={{{s}}}&find_code=WRD"
    },
    {
        "d": "www.fullformgo.com",
        "b": "fullform",
        "u": "https://www.fullformgo.com/term/{{{s}}}"
    },
    {
        "d": "fullforms.com",
        "b": "fullforms",
        "u": "http://fullforms.com/{{{s}}} "
    },
    {
        "d": "www.fundeu.es",
        "b": "fundeu",
        "u": "https://www.fundeu.es/?s={{{s}}}"
    },
    {
        "d": "finviz.com",
        "b": "fvz",
        "u": "http://finviz.com/quote.ashx?t={{{s}}}&ty=c&ta=1&p=d"
    },
    {
        "d": "foodwishes.blogspot.com",
        "b": "fwcj",
        "u": "https://foodwishes.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "www.gadventures.com",
        "b": "gadv",
        "u": "https://www.gadventures.com/search/?q={{{s}}}&ref=ddgsearch"
    },
    {
        "d": "www.focloir.ie",
        "b": "gael",
        "u": "http://www.focloir.ie/en/spellcheck/ei/?q={{{s}}}"
    },
    {
        "d": "www.lexilogos.com",
        "b": "gaf",
        "u": "http://www.lexilogos.com/latin/gaffiot.php?q={{{s}}}"
    },
    {
        "d": "www.focloir.ie",
        "b": "gafoc",
        "u": "http://www.focloir.ie/en/dictionary/ei/{{{s}}}?advSearch=1&q={{{s}}}&inlanguage=ga"
    },
    {
        "d": "gethuman.com",
        "b": "gah",
        "u": "https://gethuman.com/phone-number/search/{{{s}}}"
    },
    {
        "d": "www.galinos.gr",
        "b": "galinos",
        "u": "https://www.galinos.gr/web/drugs/main/search?q={{{s}}}"
    },
    {
        "d": "gallica.bnf.fr",
        "b": "gallica",
        "u": "http://gallica.bnf.fr/Search?ArianeWireIndex=index&p=1&lang=FR&q={{{s}}}"
    },
    {
        "d": "www.gamefly.com",
        "b": "gamefly",
        "u": "https://www.gamefly.com/#!/search/all?q={{{s}}}"
    },
    {
        "d": "glosbe.com",
        "b": "garen",
        "u": "https://glosbe.com/ar/en/{{{s}}}"
    },
    {
        "d": "wirtschaftslexikon.gabler.de",
        "b": "gawi",
        "u": "https://wirtschaftslexikon.gabler.de/search/content?keys={{{s}}}"
    },
    {
        "d": "www.greatbritishchefs.com",
        "b": "gbc",
        "u": "https://www.greatbritishchefs.com/search2#?pi=1&ps=48&st={{{s}}}&orderby="
    },
    {
        "d": "www.google.com",
        "b": "gbooks",
        "u": "https://www.google.com/search?nfpr=1&tbm=bks&q={{{s}}}"
    },
    {
        "d": "www.buenosaires.gob.ar",
        "b": "gcba",
        "u": "http://www.buenosaires.gob.ar/bweb/search?keys={{{s}}}"
    },
    {
        "d": "gcide.gnu.org.ua",
        "b": "gcide",
        "u": "http://gcide.gnu.org.ua/?q={{{s}}} &define=Define&strategy=."
    },
    {
        "d": "www.gcmap.com",
        "b": "gcmap",
        "u": "http://www.gcmap.com/mapui?P={{{s}}}"
    },
    {
        "d": "www.gcmap.com",
        "b": "gcm",
        "u": "http://www.gcmap.com/mapui?P={{{s}}}&MS=wls&DU=nm"
    },
    {
        "d": "www.diccionari.cat",
        "b": "gdlc",
        "u": "http://www.diccionari.cat/cgi-bin/AppDLC3.exe?APP=CERCADLC&GECART={{{s}}}&x=0&y=0"
    },
    {
        "d": "gdt.oqlf.gouv.qc.ca",
        "b": "gdt",
        "u": "http://gdt.oqlf.gouv.qc.ca/resultat.aspx?terme={{{s}}}"
    },
    {
        "d": "gdz.sub.uni-goettingen.de",
        "b": "gdz",
        "u": "http://gdz.sub.uni-goettingen.de/en/dms/suche/?tx_goobit3_search[formquery]={{{s}}}&tx_goobit3_search[order]=1&tx_goobit3_search[default]=METADATA&tx_goobit3_search[orderfield]=BYCREATOR&tx_goobit3_search[link]=0"
    },
    {
        "d": "www.google.com.ec",
        "b": "gec",
        "u": "https://www.google.com.ec/search?safe=active&q={{{s}}}"
    },
    {
        "d": "www.geeksforgeeks.org",
        "b": "geeks",
        "u": "https://www.geeksforgeeks.org/?s={{{s}}}"
    },
    {
        "d": "www.gematrix.org",
        "b": "gematria",
        "u": "https://www.gematrix.org/?word={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "genbank",
        "u": "http://www.ncbi.nlm.nih.gov/nuccore/?term={{{s}}}"
    },
    {
        "d": "gender.wikia.com",
        "b": "gender",
        "u": "http://gender.wikia.com/search?query={{{s}}}"
    },
    {
        "d": "www.genealogieonline.nl",
        "b": "genea",
        "u": "https://www.genealogieonline.nl/en/zoeken/?q={{{s}}} "
    },
    {
        "d": "www.genecards.org",
        "b": "genecards",
        "u": "http://www.genecards.org/index.php?path=/Search/keyword/{{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "gene",
        "u": "https://www.ncbi.nlm.nih.gov/gene/?term={{{s}}} "
    },
    {
        "d": "gen.lib.rus.ec",
        "b": "genesis",
        "u": "http://gen.lib.rus.ec/search.php?req={{{s}}}&lg_topic=libgen&open=0&view=simple&res=25&phrase=1&column=def"
    },
    {
        "d": "en.glosbe.com",
        "b": "genhu",
        "u": "https://en.glosbe.com/en/hu/{{{s}}}"
    },
    {
        "d": "www.geograph.org.uk",
        "b": "geograph",
        "u": "https://www.geograph.org.uk/of/{{{s}}}"
    },
    {
        "d": "geofactoftheday.blogspot.com",
        "b": "geography",
        "u": "https://geofactoftheday.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "www.geonames.org",
        "b": "geonames",
        "u": "http://www.geonames.org/search.html?q={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "geo",
        "u": "http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc={{{s}}}"
    },
    {
        "d": "www.zeno.org",
        "b": "georges",
        "u": "http://www.zeno.org/Zeno/0/Suche?q={{{s}}}&k=Georges-1913"
    },
    {
        "d": "www.getabstract.com",
        "b": "getabstract",
        "u": "https://www.getabstract.com/en/search?initial=true&query={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "gflights",
        "u": "https://www.google.com/flights/#search;t={{{s}}}"
    },
    {
        "d": "tube.geogebra.org",
        "b": "ggbtube",
        "u": "http://tube.geogebra.org/search/perform/search/{{{s}}}"
    },
    {
        "d": "en.glosbe.com",
        "b": "ghuen",
        "u": "https://en.glosbe.com/hu/en/{{{s}}}"
    },
    {
        "d": "gibbon.co",
        "b": "gibbon",
        "u": "https://gibbon.co/search?q={{{s}}}"
    },
    {
        "d": "www.giftinformation.se",
        "b": "giftinfo",
        "u": "http://www.giftinformation.se/searchpage/?query={{{s}}}"
    },
    {
        "d": "www.gesetze-im-internet.de",
        "b": "gii",
        "u": "http://www.gesetze-im-internet.de/cgi-bin/htsearch?config=Gesamt_bmjhome2005&method=and&words={{{s}}}"
    },
    {
        "d": "glosbe.com",
        "b": "gip",
        "u": "http://glosbe.com/it/pl/{{{s}}}"
    },
    {
        "d": "www.google.fr",
        "b": "giti",
        "u": "https://www.google.fr/maps/dir/{{{s}}}/{{{s}}}"
    },
    {
        "d": "globaledge.msu.edu",
        "b": "globaledge",
        "u": "http://globaledge.msu.edu/search?q={{{s}}}"
    },
    {
        "d": "www.interglot.com",
        "b": "glotenes",
        "u": "http://www.interglot.com/dictionary/en/es/search?q={{{s}}} "
    },
    {
        "d": "www.interglot.com",
        "b": "glotesen",
        "u": "http://www.interglot.com/dictionary/es/en/search?q={{{s}}} "
    },
    {
        "d": "interglot.com",
        "b": "glotnl",
        "u": "http://interglot.com/dictionary/nl/en/search?q={{{s}}}"
    },
    {
        "d": "glottolog.org",
        "b": "glottolog",
        "u": "http://glottolog.org/glottolog?search={{{s}}}"
    },
    {
        "d": "german.stackexchange.com",
        "b": "glse",
        "u": "https://german.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "glutenfreerecipebox.com",
        "b": "glutenfreerecipebox",
        "u": "https://glutenfreerecipebox.com/?s={{{s}}}"
    },
    {
        "d": "www.google.co.uk",
        "b": "gmuk",
        "u": "https://www.google.co.uk/maps/place/{{{s}}} "
    },
    {
        "d": "www.google.com",
        "b": "gnda",
        "u": "https://www.google.com/?gws_rd=ssl#q={{{s}}}&tbs=ida:1&gl=us"
    },
    {
        "d": "duckgobang.com",
        "b": "gobang",
        "u": "http://duckgobang.com/?s={{{s}}}"
    },
    {
        "d": "golden.com",
        "b": "golden",
        "u": "https://golden.com/search/{{{s}}}"
    },
    {
        "d": "goldbook.iupac.org",
        "b": "gold",
        "u": "http://goldbook.iupac.org/terms/search/{{{s}}}"
    },
    {
        "d": "www.gonutss.com",
        "b": "gonutss",
        "u": "https://www.gonutss.com/s?q={{{s}}}"
    },
    {
        "d": "www.goodfood.com.au",
        "b": "goodfoodau",
        "u": "https://www.goodfood.com.au/search?text={{{s}}}&type=recipe"
    },
    {
        "d": "google.com",
        "b": "googleimg",
        "u": "https://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1"
    },
    {
        "d": "scholar.google.com",
        "b": "googlescholar",
        "u": "http://scholar.google.com/scholar?hl=en&q={{{s}}}"
    },
    {
        "d": "dictionary.goo.ne.jp",
        "b": "gooj",
        "u": "http://dictionary.goo.ne.jp/srch/all/{{{s}}}/m0u/"
    },
    {
        "d": "www.numbergossip.com",
        "b": "gossip",
        "u": "http://www.numbergossip.com/?number={{{s}}}"
    },
    {
        "d": "www.gotquestions.org",
        "b": "gotquestions",
        "u": "https://www.gotquestions.org/search.php?zoom_query={{{s}}}"
    },
    {
        "d": "search.usa.gov",
        "b": "govimages",
        "u": "https://search.usa.gov/search/images?affiliate=usagov&query={{{s}}}"
    },
    {
        "d": "www.govtrack.us",
        "b": "govtrack",
        "u": "http://www.govtrack.us/search?q={{{s}}}"
    },
    {
        "d": "www.gov.uk",
        "b": "gov.uk",
        "u": "https://www.gov.uk/search?q={{{s}}}"
    },
    {
        "d": "www.gov.uk",
        "b": "govuk",
        "u": "https://www.gov.uk/search?q= {{{s}}}"
    },
    {
        "d": "search.usa.gov",
        "b": "gov",
        "u": "https://search.usa.gov/search?affiliate=usagov&query={{{s}}}"
    },
    {
        "d": "www.gpdp.it",
        "b": "gpdp",
        "u": "https://www.gpdp.it/home/ricerca/-/search/key/{{{s}}}"
    },
    {
        "d": "glosbe.com",
        "b": "gpi",
        "u": "http://glosbe.com/pl/it/{{{s}}}"
    },
    {
        "d": "gpsies.de",
        "b": "gpsies",
        "u": "http://gpsies.de/?q={{{s}}}"
    },
    {
        "d": "www.gotquestions.org",
        "b": "gq+",
        "u": "https://www.gotquestions.org/search.php?zoom_query={{{s}}}"
    },
    {
        "d": "enguayaquil.com",
        "b": "gquil",
        "u": "https://enguayaquil.com/?s={{{s}}}"
    },
    {
        "d": "www.nayiri.com",
        "b": "grabar",
        "u": "http://www.nayiri.com/imagedDictionaryBrowser.jsp?dictionaryId=28&dt=HY_HY&query={{{s}}}"
    },
    {
        "d": "grammis.ids-mannheim.de",
        "b": "grammis",
        "u": "https://grammis.ids-mannheim.de/suche?search={{{s}}}&research=&research%5B%5D=sysgrams&research%5B%5D=corpora&research%5B%5D=phonos&research%5B%5D=terms&knowledge=&knowledge%5B%5D=questions&knowledge%5B%5D=programs&knowledge%5B%5D=eurograms&knowledge%5B%5D=orthos&ressources=&ressources%5B%5D=connectors&ressources%5B%5D=affixes&ressources%5B%5D=prepositions&ressources%5B%5D=verbs&scat=DuckDuckGo+Bang"
    },
    {
        "d": "gramota.ru",
        "b": "gramota",
        "u": "http://gramota.ru/slovari/dic/?word={{{s}}}&all=x"
    },
    {
        "d": "graph.tk",
        "b": "graph",
        "u": "http://graph.tk/#{{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "greek",
        "u": "http://www.perseus.tufts.edu/hopper/morph?l={{{s}}}&la=greek#lexicon"
    },
    {
        "d": "greensdictofslang.com",
        "b": "greensdic",
        "u": "https://greensdictofslang.com/search/basic?q={{{s}}}"
    },
    {
        "d": "bigenc.ru",
        "b": "gre",
        "u": "https://bigenc.ru/search?q={{{s}}}"
    },
    {
        "d": "www.grepmed.com",
        "b": "grepmed",
        "u": "https://www.grepmed.com/?q={{{s}}}"
    },
    {
        "d": "www.groundai.com",
        "b": "groundai",
        "u": "https://www.groundai.com/search/?text={{{s}}}&sort=_score"
    },
    {
        "d": "scholar.google.com",
        "b": "gsch",
        "u": "http://scholar.google.com/scholar?&q={{{s}}}"
    },
    {
        "d": "scholar.google.com",
        "b": "gschol",
        "u": "http://scholar.google.com/scholar?q={{{s}}} "
    },
    {
        "d": "www.gsmarena.com",
        "b": "gsm",
        "u": "http://www.gsmarena.com/results.php3?sName={{{s}}}"
    },
    {
        "d": "www.gradesource.com",
        "b": "gsrc",
        "u": "http://www.gradesource.com/findcourse.asp?sb=C&name={{{s}}}&st=0&x=0&y=0"
    },
    {
        "d": "translate.google.com",
        "b": "gtenfr",
        "u": "https://translate.google.com/#en/fr/{{{s}}}"
    },
    {
        "d": "gatech-primo.hosted.exlibrisgroup.com",
        "b": "gtlib",
        "u": "https://gatech-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=01GALI_GIT&search_scope=Everything&query=any,contains,{{{s}}}"
    },
    {
        "d": "trends.google.com",
        "b": "gtrends",
        "u": "https://trends.google.com/trends/explore?date=all&geo=US&q={{{s}}}"
    },
    {
        "d": "gso.gbv.de",
        "b": "gvk",
        "u": "https://gso.gbv.de/DB=2.1/CMD?MATCFILTER=N&MATCSET=N&ACT0=&IKT0=&TRM0=&ACT3=*&IKT3=8183&ACT=SRCHA&IKT=1016&SRT=YOP&TRM={{{s}}}"
    },
    {
        "d": "go.galegroup.com",
        "b": "gvrl",
        "u": "http://go.galegroup.com/ps/headerQuickSearch.do?quickSearchTerm={{{s}}}&inputFieldNames%5B0%5D=OQE&searchType=BasicSearchForm&userGroupName=mlin_m_newtnsh&nwf=y&prodId=GVRL&stw.option=&ebook=&quicksearchIndex=OQE&spellCheck=true&hasCoProduct=false"
    },
    {
        "d": "www.gwct.org.uk",
        "b": "gwct",
        "u": "http://www.gwct.org.uk/search?keywords={{{s}}}"
    },
    {
        "d": "library.gwu.edu",
        "b": "gwlib",
        "u": "http://library.gwu.edu/search-all?query={{{s}}}"
    },
    {
        "d": "www.guinnessworldrecords.com",
        "b": "gwr",
        "u": "http://www.guinnessworldrecords.com/search?term={{{s}}}"
    },
    {
        "d": "search.gwu.edu",
        "b": "gwu",
        "u": "https://search.gwu.edu/search?site=gw_main_VCM&client=gw_main_VCM&proxystylesheet=phase2fe&output=xml_no_dtd&q={{{s}}}"
    },
    {
        "d": "www.giallozafferano.it",
        "b": "gzric",
        "u": "http://www.giallozafferano.it/ricerca-ricette/{{{s}}} "
    },
    {
        "d": "www.h2g2.com",
        "b": "h2g2",
        "u": "http://www.h2g2.com/search?search_type=article_quick_search&searchstring={{{s}}}&approved_entries_only_chk=1"
    },
    {
        "d": "wiki.hydrogenaudio.org",
        "b": "hak",
        "u": "http://wiki.hydrogenaudio.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.halaltube.com",
        "b": "halaltube",
        "u": "https://www.halaltube.com/?s={{{s}}}"
    },
    {
        "d": "hal.archives-ouvertes.fr",
        "b": "hal",
        "u": "https://hal.archives-ouvertes.fr/search/index/?q={{{s}}}"
    },
    {
        "d": "www.hamdata.com",
        "b": "ham",
        "u": "http://www.hamdata.com/getcall.html?callsign={{{s}}}"
    },
    {
        "d": "hanja.naver.com",
        "b": "hanja",
        "u": "http://hanja.naver.com/search?query={{{s}}}"
    },
    {
        "d": "hansard.parliament.uk",
        "b": "hansard",
        "u": "https://hansard.parliament.uk/search?searchTerm={{{s}}}"
    },
    {
        "d": "www.hanze.nl",
        "b": "hanze",
        "u": "https://www.hanze.nl/nld/zoeken?k={{{s}}}"
    },
    {
        "d": "www.hanzicraft.com",
        "b": "hanzicraft",
        "u": "http://www.hanzicraft.com/character/{{{s}}}"
    },
    {
        "d": "hanzidb.org",
        "b": "hanzidb",
        "u": "http://hanzidb.org/character/{{{s}}}"
    },
    {
        "d": "www.happi.com",
        "b": "happi",
        "u": "https://www.happi.com/contents/searchcontent/all/{{{s}}}/"
    },
    {
        "d": "www.happycow.net",
        "b": "happycow",
        "u": "https://www.happycow.net/searchmap?lat=&lng=&location={{{s}}}"
    },
    {
        "d": "hollis.harvard.edu",
        "b": "harvardlib",
        "u": "http://hollis.harvard.edu/primo_library/libweb/action/dlSearch.do?institution=HVD&vid=HVD&tab=everything&displayField=all&search_scope=everything&mode=Basic&onCampus=false&displayMode=full&query=any%2Ccontains%2C{{{s}}}"
    },
    {
        "d": "www.trhastane.com",
        "b": "hastane",
        "u": "http://www.trhastane.com/arama.php?sehir=0&word={{{s}}} "
    },
    {
        "d": "babel.hathitrust.org",
        "b": "hathi",
        "u": "http://babel.hathitrust.org/cgi/ls?field1=ocr;q1={{{s}}};a=srchls"
    },
    {
        "d": "crazyabouthavana.com",
        "b": "havana",
        "u": "https://crazyabouthavana.com/?s={{{s}}}"
    },
    {
        "d": "hazeguitars.com",
        "b": "haze",
        "u": "https://hazeguitars.com/search?q={{{s}}}"
    },
    {
        "d": "okeanos-www.hbz-nrw.de",
        "b": "hbz",
        "u": "http://okeanos-www.hbz-nrw.de/F/?func=find-c&ccl_term=WRD%3D%22{{{s}}}%22"
    },
    {
        "d": "hcommons.org",
        "b": "hcommons",
        "u": "https://hcommons.org/?s={{{s}}}"
    },
    {
        "d": "www.findacode.com",
        "b": "hcpcs",
        "u": "https://www.findacode.com/code.php?set=HCPCS&c={{{s}}}"
    },
    {
        "d": "hudoc.echr.coe.int",
        "b": "hd",
        "u": "http://hudoc.echr.coe.int/eng#{%22fulltext%22:[%22{{{s}}}%22],%22documentcollectionid2%22:[%22GRANDCHAMBER%22,%22CHAMBER%22]}"
    },
    {
        "d": "hyperdictionary.com",
        "b": "hdict",
        "u": "http://hyperdictionary.com/search.aspx?define={{{s}}}"
    },
    {
        "d": "he.wikipedia.org",
        "b": "hebwiki",
        "u": "https://he.wikipedia.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "katalog.ub.uni-heidelberg.de",
        "b": "heidi",
        "u": "http://katalog.ub.uni-heidelberg.de/cgi-bin/search.cgi?fsubmit=1&query= {{{s}}}"
    },
    {
        "d": "heilkraeuter.de",
        "b": "heilkraeuter",
        "u": "http://heilkraeuter.de/cgi-bin/search.cgi?Terms={{{s}}}"
    },
    {
        "d": "www.heinzelnisse.info",
        "b": "heinzelnisse",
        "u": "http://www.heinzelnisse.info/dict?searchItem={{{s}}} "
    },
    {
        "d": "helka.finna.fi",
        "b": "helka",
        "u": "https://helka.finna.fi/Search/Results?lookfor={{{s}}}"
    },
    {
        "d": "www.thehendonmob.com",
        "b": "hendon",
        "u": "http://www.thehendonmob.com/search/?q={{{s}}}"
    },
    {
        "d": "www.heritage.org",
        "b": "heritage",
        "u": "https://www.heritage.org/search?contains={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "hfr",
        "u": "http://duckduckgo.com/?q=site:linuxfr.org+{{{s}}}"
    },
    {
        "d": "hsfu.boss2.bsz-bw.de",
        "b": "hfuboss",
        "u": "https://hsfu.boss2.bsz-bw.de/Search/Results?lookfor={{{s}}}&limit=20"
    },
    {
        "d": "www.hs-furtwangen.de",
        "b": "hfu",
        "u": "https://www.hs-furtwangen.de/suche/?L=0&id=207&tx_solr[q]={{{s}}}"
    },
    {
        "d": "holbein-gymnasium.de",
        "b": "hga",
        "u": "https://holbein-gymnasium.de/index.php/component/search/?searchword={{{s}}}"
    },
    {
        "d": "www.genenames.org",
        "b": "hgnc",
        "u": "http://www.genenames.org/cgi-bin/quick_search.pl?submit=Submit&search={{{s}}}"
    },
    {
        "d": "hgpu.org",
        "b": "hgpu",
        "u": "http://hgpu.org/?s={{{s}}}"
    },
    {
        "d": "hexagonhotchocolate.wordpress.com",
        "b": "hhc",
        "u": "https://hexagonhotchocolate.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "www.hillel.org",
        "b": "hillel",
        "u": "http://www.hillel.org/college-guide/search#keyword={{{s}}}&radius=10"
    },
    {
        "d": "www.maxgyan.com",
        "b": "hintoeng",
        "u": "http://www.maxgyan.com/search/hindi-to-english/index.php?q={{{s}}}"
    },
    {
        "d": "www.history.com",
        "b": "history",
        "u": "http://www.history.com/search?search-field={{{s}}}&x=0&y=0"
    },
    {
        "d": "hitchwiki.org",
        "b": "hitchwiki",
        "u": "http://hitchwiki.org/en/index.php?search={{{s}}}&fulltext=Search&title=Special%3ASearch"
    },
    {
        "d": "howjsay.com",
        "b": "hjs",
        "u": "https://howjsay.com/search?word={{{s}}}"
    },
    {
        "d": "www.elegislation.gov.hk",
        "b": "hkeleg",
        "u": "https://www.elegislation.gov.hk/results?SEARCH_OPTION=K&keyword.SEARCH_FIELD=E&keyword.SEARCH_KEYWORD={{{s}}}"
    },
    {
        "d": "search.legco.gov.hk",
        "b": "hklegco",
        "u": "https://search.legco.gov.hk/LegCoWeb/Search.aspx?lang=en&searchtype=simple&keyword={{{s}}}"
    },
    {
        "d": "www.hklii.hk",
        "b": "hklii",
        "u": "http://www.hklii.hk/cgi-bin/sinosrch.cgi?query={{{s}}}&results=50&submit=Search&mask_world=&mask_path=&callback=on&method=auto&meta=%2Fhklii"
    },
    {
        "d": "www.hs-neu-ulm.de",
        "b": "hnu",
        "u": "https://www.hs-neu-ulm.de/nc/suchergebnisse/?id=1289&L=0&q={{{s}}}"
    },
    {
        "d": "dlc.lib.de.us",
        "b": "hockessinlib",
        "u": "https://dlc.lib.de.us/client/en_US/default/search/results?qu={{{s}}}&te="
    },
    {
        "d": "hol.kag.org",
        "b": "hol",
        "u": "https://hol.kag.org/a/{{{s}}}"
    },
    {
        "d": "hollis.harvard.edu",
        "b": "hollis",
        "u": "https://hollis.harvard.edu/primo-explore/search?query=any,contains,{{{s}}}&tab=everything&search_scope=everything&vid=HVD2&lang=en_US&offset=0"
    },
    {
        "d": "www.homesnap.com",
        "b": "homesnap",
        "u": "https://www.homesnap.com/search?q={{{s}}}"
    },
    {
        "d": "homeworkhelpforkids.co.uk",
        "b": "homework",
        "u": "http://homeworkhelpforkids.co.uk/?s={{{s}}}"
    },
    {
        "d": "opac.hebib.de",
        "b": "hopac",
        "u": "http://opac.hebib.de/search?scope=R1&q={{{s}}}"
    },
    {
        "d": "en.hortipedia.com",
        "b": "hort",
        "u": "http://en.hortipedia.com/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "homotopytypetheory.org",
        "b": "hott",
        "u": "https://homotopytypetheory.org/?s={{{s}}}"
    },
    {
        "d": "howjsay.com",
        "b": "howjsay",
        "u": "https://howjsay.com/search?word={{{s}}}"
    },
    {
        "d": "www.howstuffworks.com",
        "b": "howstuffworks",
        "u": "http://www.howstuffworks.com/search.php?terms={{{s}}}"
    },
    {
        "d": "howthingswork.virginia.edu",
        "b": "howthingswork",
        "u": "http://howthingswork.virginia.edu/search.php?searchs={{{s}}}&Go.x=0&Go.y=0&searchq=yes&searcha=yes"
    },
    {
        "d": "duckduckgo.com",
        "b": "hphys",
        "u": "https://duckduckgo.com/?q=site%3Ahyperphysics.phy-astr.gsu.edu+{{{s}}}"
    },
    {
        "d": "hpluspedia.org",
        "b": "hplus",
        "u": "https://hpluspedia.org/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "hpluspedia.org",
        "b": "hpluspedia",
        "u": "https://hpluspedia.org/index.php?search={{{s}}}"
    },
    {
        "d": "hpluspedia.org",
        "b": "hpp",
        "u": "https://hpluspedia.org/index.php?search={{{s}}}"
    },
    {
        "d": "id.healthyplusplus.com",
        "b": "hppid",
        "u": "https://id.healthyplusplus.com/search?q={{{s}}}"
    },
    {
        "d": "harrypotter.wikia.com",
        "b": "hpwiki",
        "u": "http://harrypotter.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.hogeschoolrotterdam.nl",
        "b": "hro",
        "u": "https://www.hogeschoolrotterdam.nl/zoek/?q={{{s}}}"
    },
    {
        "d": "www.restovisio.com",
        "b": "hrv",
        "u": "http://www.restovisio.com/search?sq={{{s}}}"
    },
    {
        "d": "www.hs-albsig.de",
        "b": "hsas",
        "u": "http://www.hs-albsig.de/search/results.aspx?k={{{s}}}&cs=Diese%20Website&u=http%3A%2F%2Fwww.hs-albsig.de"
    },
    {
        "d": "www.adl.org",
        "b": "hsdb",
        "u": "https://www.adl.org/education-and-resources/resource-knowledge-base/hate-symbols?keys={{{s}}}"
    },
    {
        "d": "honyakustar.com",
        "b": "hs",
        "u": "http://honyakustar.com/en/{{{s}}} "
    },
    {
        "d": "www.hsl.fi",
        "b": "hsl",
        "u": "https://www.hsl.fi/search/solr?keywords={{{s}}}"
    },
    {
        "d": "computer.howstuffworks.com",
        "b": "hsw",
        "u": "http://computer.howstuffworks.com/search.php?terms={{{s}}}"
    },
    {
        "d": "www.howtoforge.com",
        "b": "htf",
        "u": "http://www.howtoforge.com/trip_search?keys={{{s}}}"
    },
    {
        "d": "www.htw-dresden.de",
        "b": "htw",
        "u": "https://www.htw-dresden.de/suche.html?tx_kesearch_pi1[sword]={{{s}}}"
    },
    {
        "d": "hubpages.com",
        "b": "hubpg",
        "u": "https://hubpages.com/search/?s={{{s}}} "
    },
    {
        "d": "hudoc.echr.coe.int",
        "b": "huco",
        "u": "http://hudoc.echr.coe.int/sites/eng/Pages/search.aspx#{%22fulltext%22:[%22{{{s}}} %22],%22documentcollectionid2%22:[%22GRANDCHAMBER%22,%22CHAMBER%22]}"
    },
    {
        "d": "halo.umbc.edu",
        "b": "hw",
        "u": "http://halo.umbc.edu/cgi-bin/haloweb/nrc1.pl?display=json&operation=search&keyword={{{s}}}"
    },
    {
        "d": "hi.wikipedia.org",
        "b": "hwiki",
        "u": "https://hi.wikipedia.org/w/index.php?search={{{s}}}&title=विशेष%3Aखोज&go=जाएँ&ns0=1"
    },
    {
        "d": "www.hardwarezone.com.sg",
        "b": "hwz",
        "u": "http://www.hardwarezone.com.sg/search/forum/?{{{s}}}"
    },
    {
        "d": "www.hoaxbuster.com",
        "b": "hxb",
        "u": "http://www.hoaxbuster.com/search/node/{{{s}}}%20type%3Aarticle"
    },
    {
        "d": "hymnary.org",
        "b": "hymnary",
        "u": "https://hymnary.org/search?qu={{{s}}}"
    },
    {
        "d": "iacobus.usc.es",
        "b": "iacobus",
        "u": "http://iacobus.usc.es/search*gag/?searchtype=Y&SORT=D&searcharg={{{s}}} "
    },
    {
        "d": "www.iacr.org",
        "b": "iacr",
        "u": "https://www.iacr.org/search/?q={{{s}}}"
    },
    {
        "d": "research.investors.com",
        "b": "ibd",
        "u": "https://research.investors.com/stock-quotes/nasdaq-apple-inc-{{{s}}}.htm?fromsearch=1"
    },
    {
        "d": "www.ibge.gov.br",
        "b": "ibge",
        "u": "https://www.ibge.gov.br/busca.html?searchword={{{s}}}&searchphrase=all"
    },
    {
        "d": "www.ibiblio.org",
        "b": "ibiblio",
        "u": "http://www.ibiblio.org/gsearch/?cx=006345117986368989313%3Ar2fkn4tcz5i&cof=FORID%3A11&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "icannwiki.com",
        "b": "icannwiki",
        "u": "https://icannwiki.com/index.php?search={{{s}}}"
    },
    {
        "d": "www.icd10data.com",
        "b": "icd10",
        "u": "http://www.icd10data.com/Search.aspx?search={{{s}}}"
    },
    {
        "d": "www.icd9data.com",
        "b": "icd9",
        "u": "http://www.icd9data.com/Search/?q={{{s}}}"
    },
    {
        "d": "www.icd-code.de",
        "b": "icd",
        "u": "http://www.icd-code.de/suche/icd/recherche.html?sp=0&sp=S{{{s}}} "
    },
    {
        "d": "ices.dk",
        "b": "ices",
        "u": "http://ices.dk/Searchcenter/Pages/default.aspx?k={{{s}}}"
    },
    {
        "d": "www.imperial.ac.uk",
        "b": "ic",
        "u": "https://www.imperial.ac.uk/search/?q={{{s}}}"
    },
    {
        "d": "catpro.icpl.org",
        "b": "icpl",
        "u": "https://catpro.icpl.org/iii/encore/search?lang=eng&target={{{s}}}"
    },
    {
        "d": "ideas.repec.org",
        "b": "ideas",
        "u": "http://ideas.repec.org/cgi-bin/htsearch?q={{{s}}}&cmd=Search!"
    },
    {
        "d": "ideja.d2.si",
        "b": "ideje",
        "u": "https://ideja.d2.si/results.php?q={{{s}}}"
    },
    {
        "d": "idioms.thefreedictionary.com",
        "b": "idiom",
        "u": "http://idioms.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "dlc.iec.cat",
        "b": "iec",
        "u": "https://dlc.iec.cat/results.asp?txtEntrada={{{s}}}"
    },
    {
        "d": "ieeexplore.ieee.org",
        "b": "ieee",
        "u": "http://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText={{{s}}}"
    },
    {
        "d": "www.iens.nl",
        "b": "iens",
        "u": "http://www.iens.nl/restaurant?q={{{s}}}"
    },
    {
        "d": "www.iep.utm.edu",
        "b": "iep",
        "u": "http://www.iep.utm.edu/{{{s}}} "
    },
    {
        "d": "www.eki.ee",
        "b": "ies",
        "u": "http://www.eki.ee/dict/ies/index.cgi?Q={{{s}}}"
    },
    {
        "d": "digital-library.theiet.org",
        "b": "iet",
        "u": "https://digital-library.theiet.org/search?value1={{{s}}}&option1=all&option2=contentType&pageSize=20&value2="
    },
    {
        "d": "www.ifht.rwth-aachen.de",
        "b": "ifht",
        "u": "http://www.ifht.rwth-aachen.de/ca/be/ovbs/?lidx=&search={{{s}}}"
    },
    {
        "d": "www.ifixit.com",
        "b": "ifixit",
        "u": "http://www.ifixit.com/search?x=0&y=0&query={{{s}}}"
    },
    {
        "d": "parts.igem.org",
        "b": "igem",
        "u": "http://parts.igem.org/Special:Search?search={{{s}}} "
    },
    {
        "d": "inspirehep.net",
        "b": "ihep",
        "u": "http://inspirehep.net/search?p={{{s}}}"
    },
    {
        "d": "www.iiba.org",
        "b": "iiba",
        "u": "https://www.iiba.org/search/?q={{{s}}}"
    },
    {
        "d": "prirucka.ujc.cas.cz",
        "b": "ijp",
        "u": "http://prirucka.ujc.cas.cz/?slovo={{{s}}}"
    },
    {
        "d": "indiankanoon.org",
        "b": "ikanoon",
        "u": "https://indiankanoon.org/search/?formInput={{{s}}}"
    },
    {
        "d": "ikkepedia.org",
        "b": "ikkepedia",
        "u": "http://ikkepedia.org/wiki/{{{s}}}"
    },
    {
        "d": "search.illinoisstate.edu",
        "b": "ilstu",
        "u": "http://search.illinoisstate.edu/?q={{{s}}}"
    },
    {
        "d": "images.math.cnrs.fr",
        "b": "imaths",
        "u": "http://images.math.cnrs.fr/spip.php?page=recherche&page=recherche&recherche={{{s}}}"
    },
    {
        "d": "www.imbiomed.com.mx",
        "b": "imb",
        "u": "http://www.imbiomed.com.mx/1/1/articulos.php?method=searchKeyword&keywords={{{s}}}"
    },
    {
        "d": "www.imperial.ac.uk",
        "b": "imperial",
        "u": "https://www.imperial.ac.uk/search/?q={{{s}}}"
    },
    {
        "d": "annuaire.in2p3.fr",
        "b": "in2p3",
        "u": "https://annuaire.in2p3.fr/search/{{{s}}}"
    },
    {
        "d": "www.inah.gob.mx",
        "b": "inah",
        "u": "https://www.inah.gob.mx/buscador?searchword={{{s}}}"
    },
    {
        "d": "www.inaturalist.org",
        "b": "inat",
        "u": "https://www.inaturalist.org/search?q={{{s}}}"
    },
    {
        "d": "indiankanoon.org",
        "b": "indiankanoon",
        "u": "https://indiankanoon.org/search/?formInput={{{s}}}"
    },
    {
        "d": "infogalactic.com",
        "b": "infogalactic",
        "u": "http://infogalactic.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "infogalactic.com",
        "b": "infogal",
        "u": "https://infogalactic.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "infogalactic.com",
        "b": "infog",
        "u": "https://infogalactic.com/info/{{{s}}}"
    },
    {
        "d": "infogr.am",
        "b": "infogram",
        "u": "https://infogr.am/search#{{{s}}}"
    },
    {
        "d": "catalogue.inha.fr",
        "b": "inha",
        "u": "http://catalogue.inha.fr/inha/List.csp?SearchT1={{{s}}}&Index1=Tlm&Database=5&OpacLanguage=fre&NumberToRetrieve=50&SearchMethod=Find_1&SearchTerm1={{{s}}}&Profile=Profile35&PreviousList=Start&PageType=Start&WebPageNr=1&WebAction=NewSearch&StartValue=1&RowRepeat=0&MyChannelCount="
    },
    {
        "d": "www.inhaltsangabe.de",
        "b": "inhalt",
        "u": "https://www.inhaltsangabe.de/?s={{{s}}}"
    },
    {
        "d": "initium.fandom.com",
        "b": "initium",
        "u": "https://initium.fandom.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "ivdnt.org",
        "b": "inl",
        "u": "https://ivdnt.org/zoeken-in-woordenboeken?w={{{s}}}"
    },
    {
        "d": "innsida.ntnu.no",
        "b": "innsida",
        "u": "https://innsida.ntnu.no/sok?site=innsida&query={{{s}}}&category=all"
    },
    {
        "d": "www.inrs.fr",
        "b": "inrs",
        "u": "http://www.inrs.fr/header/recherche.html?queryStr={{{s}}}"
    },
    {
        "d": "www.insa-strasbourg.fr",
        "b": "insas",
        "u": "http://www.insa-strasbourg.fr/fr/?s={{{s}}}"
    },
    {
        "d": "www.insectimages.org",
        "b": "insectimages",
        "u": "https://www.insectimages.org/search/action.cfm?q={{{s}}}"
    },
    {
        "d": "insideschools.org",
        "b": "insideschools",
        "u": "http://insideschools.org/search?q={{{s}}} "
    },
    {
        "d": "inspirehep.net",
        "b": "inspire",
        "u": "http://inspirehep.net/search?p={{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "integral",
        "u": "https://www.wolframalpha.com/input/?i=integral+{{{s}}}"
    },
    {
        "d": "www.investopedia.com",
        "b": "invest",
        "u": "https://www.investopedia.com/search/?search-terms={{{s}}}"
    },
    {
        "d": "www.investopedia.com",
        "b": "investopedia",
        "u": "https://www.investopedia.com/search/?search-terms={{{s}}}"
    },
    {
        "d": "www.investorwords.com",
        "b": "investorwords",
        "u": "http://www.investorwords.com/search_cse.php?q={{{s}}}"
    },
    {
        "d": "iopscience.iop.org",
        "b": "iop",
        "u": "http://iopscience.iop.org/nsearch?terms={{{s}}}&searchType=yourSearch"
    },
    {
        "d": "en.wikipedia.org",
        "b": "ipa",
        "u": "https://en.wikipedia.org/wiki/Help:IPA/{{{s}}}"
    },
    {
        "d": "interpersonal.stackexchange.com",
        "b": "ips",
        "u": "https://interpersonal.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.ip-tracker.org",
        "b": "iptrack",
        "u": "http://www.ip-tracker.org/locator/ip-lookup.php?ip={{{s}}}"
    },
    {
        "d": "search.irs.gov",
        "b": "irs",
        "u": "http://search.irs.gov/search?q={{{s}}}&proxystylesheet=irs_portals_frontend"
    },
    {
        "d": "www.isaca.org",
        "b": "isaca",
        "u": "http://www.isaca.org/Search/Pages/DefaultResults.aspx?k=Test&s={{{s}}}"
    },
    {
        "d": "iscrapapp.com",
        "b": "iscrap",
        "u": "http://iscrapapp.com/?SearchTxt={{{s}}}"
    },
    {
        "d": "www.isfdb.org",
        "b": "isfdb",
        "u": "http://www.isfdb.org/cgi-bin/se.cgi?type=Fiction%20Titles&arg={{{s}}}"
    },
    {
        "d": "islamqa.info",
        "b": "islamqa",
        "u": "http://islamqa.info/en/search?key={{{s}}}&yt0=search"
    },
    {
        "d": "islamansiklopedisi.org.tr",
        "b": "isl",
        "u": "https://islamansiklopedisi.org.tr/arama/?q={{{s}}}&p=m"
    },
    {
        "d": "is.muni.cz",
        "b": "ismu",
        "u": "https://is.muni.cz/auth/vyhledavani/?search={{{s}}}"
    },
    {
        "d": "www.isprimenumber.com",
        "b": "isprime",
        "u": "http://www.isprimenumber.com/prime/{{{s}}}"
    },
    {
        "d": "itaigi.tw",
        "b": "itaigi",
        "u": "https://itaigi.tw/k/{{{s}}}"
    },
    {
        "d": "it-ebooks.info",
        "b": "itebooks",
        "u": "http://it-ebooks.info/search/?q={{{s}}}&type=title"
    },
    {
        "d": "context.reverso.net",
        "b": "itfr",
        "u": "http://context.reverso.net/traduction/italien-francais/{{{s}}}"
    },
    {
        "d": "it.wikipedia.org",
        "b": "itwiki",
        "u": "https://it.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "kb.iu.edu",
        "b": "iukb",
        "u": "https://kb.iu.edu/search?q={{{s}}}"
    },
    {
        "d": "iupac.org",
        "b": "iupac",
        "u": "https://iupac.org/?s={{{s}}}"
    },
    {
        "d": "www.italian-verbs.com",
        "b": "iv",
        "u": "http://www.italian-verbs.com/italian-verbs/conjugation.php?verbo={{{s}}}"
    },
    {
        "d": "www.investopedia.com",
        "b": "ivst",
        "u": "https://www.investopedia.com/search?q={{{s}}}"
    },
    {
        "d": "www.theiphonewiki.com",
        "b": "iwiki",
        "u": "https://www.theiphonewiki.com/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "ixigo.com",
        "b": "ixigo",
        "u": "https://ixigo.com/q/{{{s}}}"
    },
    {
        "d": "ca.ixl.com",
        "b": "ixl",
        "u": "https://ca.ixl.com/search?q={{{s}}}"
    },
    {
        "d": "japaneseverbconjugator.com",
        "b": "jaconj",
        "u": "http://japaneseverbconjugator.com/VerbDetails.asp?txtVerb={{{s}}}&Go=Conjugate"
    },
    {
        "d": "jade.io",
        "b": "jade",
        "u": "https://jade.io/search/{{{s}}}"
    },
    {
        "d": "www.jamieoliver.com",
        "b": "jamie",
        "u": "https://www.jamieoliver.com/search/?s={{{s}}}"
    },
    {
        "d": "janus.lib.cam.ac.uk",
        "b": "janus",
        "u": "https://janus.lib.cam.ac.uk/db/node.xsp?search={{{s}}}"
    },
    {
        "d": "jargonf.org",
        "b": "jargonf",
        "u": "http://jargonf.org/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wikibooks.org",
        "b": "jawb",
        "u": "https://ja.wikibooks.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wikipedia.org",
        "b": "jawiki",
        "u": "https://ja.wikipedia.org/wiki/{{{s}}} "
    },
    {
        "d": "ja.wikipedia.org",
        "b": "jawp",
        "u": "https://ja.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wikiquote.org",
        "b": "jawq",
        "u": "https://ja.wikiquote.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wikisource.org",
        "b": "jaws",
        "u": "https://ja.wikisource.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wiktionary.org",
        "b": "jawt",
        "u": "https://ja.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wikiversity.org",
        "b": "jawv",
        "u": "https://ja.wikiversity.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "jbovlaste.lojban.org",
        "b": "jbo",
        "u": "http://jbovlaste.lojban.org/lookup?Form=lookup.pl1&Strategy=*&Query={{{s}}}"
    },
    {
        "d": "jbovlaste.lojban.org",
        "b": "jbovlaste",
        "u": "http://jbovlaste.lojban.org/dict/{{{s}}}"
    },
    {
        "d": "ca.justdial.com",
        "b": "jdca",
        "u": "http://ca.justdial.com/allus/{{{s}}}"
    },
    {
        "d": "www.justdial.com",
        "b": "jdin",
        "u": "http://www.justdial.com/National-Search/{{{s}}}"
    },
    {
        "d": "www.justdial.com",
        "b": "jdpune",
        "u": "http://www.justdial.com/Pune/{{{s}}}"
    },
    {
        "d": "www.jdwetherspoon.co.uk",
        "b": "jdw",
        "u": "http://www.jdwetherspoon.co.uk/home/pubs/find/{{{s}}}"
    },
    {
        "d": "www.jedipedia.net",
        "b": "jedi",
        "u": "https://www.jedipedia.net/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.jedisjeux.net",
        "b": "jedis",
        "u": "http://www.jedisjeux.net/search_results.php?search={{{s}}}&button_search=Ok"
    },
    {
        "d": "www.j-archive.com",
        "b": "jeopardy",
        "u": "http://www.j-archive.com/search.php?search={{{s}}}"
    },
    {
        "d": "www.aeaweb.org",
        "b": "jep",
        "u": "https://www.aeaweb.org/journals/jep/search-results?within%5Btitle%5D=on&within%5Babstract%5D=on&within%5Bauthor%5D=on&journal=3&q={{{s}}}"
    },
    {
        "d": "www.jergasdehablahispana.org",
        "b": "jergas",
        "u": "http://www.jergasdehablahispana.org/?pais=&palabra={{{s}}}&submit=Buscar&tipobusqueda=0"
    },
    {
        "d": "www.tanoshiijapanese.com",
        "b": "je",
        "u": "http://www.tanoshiijapanese.com/dictionary/index.cfm?j={{{s}}}&e=&search=Search+%3E"
    },
    {
        "d": "www.liberty.edu",
        "b": "jfl",
        "u": "https://www.liberty.edu/library/search-results/?type=all&q={{{s}}}"
    },
    {
        "d": "www.cambridge.org",
        "b": "jfm",
        "u": "https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/listing?q={{{s}}}"
    },
    {
        "d": "jhg-traunreut.de",
        "b": "jhg",
        "u": "http://jhg-traunreut.de/index.php?q={{{s}}}&option=com_finder&view=search"
    },
    {
        "d": "catalyst.library.jhu.edu",
        "b": "jhulib",
        "u": "https://catalyst.library.jhu.edu/multi_search?utf8=✓&search_field=all_fields&q={{{s}}}"
    },
    {
        "d": "jisho.org",
        "b": "ji",
        "u": "https://jisho.org/search/{{{s}}}"
    },
    {
        "d": "jisho.org",
        "b": "jik",
        "u": "https://jisho.org/search/%23kanji%20{{{s}}}"
    },
    {
        "d": "jlptdictionary.com",
        "b": "jlpt",
        "u": "http://jlptdictionary.com/index.php?pn=1&st=0&jl=0&njl=0&sb=0&obt=0&wpp=25&ot=0&k={{{s}}}"
    },
    {
        "d": "japanese.stackexchange.com",
        "b": "jlse",
        "u": "http://japanese.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.justonecookbook.com",
        "b": "jocb",
        "u": "https://www.justonecookbook.com/?s={{{s}}}"
    },
    {
        "d": "joinup.ec.europa.eu",
        "b": "joinup",
        "u": "https://joinup.ec.europa.eu/search?keys={{{s}}}"
    },
    {
        "d": "www.joker.be",
        "b": "joker",
        "u": "https://www.joker.be/nl/groepsreizen/{{{s}}}"
    },
    {
        "d": "www.jove.com",
        "b": "jove",
        "u": "https://www.jove.com/search?q={{{s}}}"
    },
    {
        "d": "jpdic.naver.com",
        "b": "jpdic",
        "u": "http://jpdic.naver.com/search.nhn?query={{{s}}}"
    },
    {
        "d": "www.kanjijapanese.com",
        "b": "jpen",
        "u": "http://www.kanjijapanese.com/en/dictionary-japanese-english/{{{s}}}"
    },
    {
        "d": "www.jpl.nasa.gov",
        "b": "jpl",
        "u": "https://www.jpl.nasa.gov/search.php?q={{{s}}}"
    },
    {
        "d": "www.just-the-word.com",
        "b": "jtw",
        "u": "http://www.just-the-word.com/api/combinations?word={{{s}}}"
    },
    {
        "d": "jukuu.com",
        "b": "jukuu",
        "u": "http://jukuu.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.jusbrasil.com.br",
        "b": "jusbrasil",
        "u": "https://www.jusbrasil.com.br/busca?q={{{s}}}"
    },
    {
        "d": "www.jusbrasil.com.br",
        "b": "jusbr",
        "u": "http://www.jusbrasil.com.br/busca?q={{{s}}} "
    },
    {
        "d": "law.justia.com",
        "b": "justia",
        "u": "http://law.justia.com/lawsearch?query={{{s}}}"
    },
    {
        "d": "www.jw.org",
        "b": "jw",
        "u": "http://www.jw.org/en/search/?q={{{s}}}"
    },
    {
        "d": "create.kahoot.it",
        "b": "kahoot",
        "u": "https://create.kahoot.it/search?filter=1&query=science&tags={{{s}}}"
    },
    {
        "d": "www.khanacademy.org",
        "b": "ka",
        "u": "https://www.khanacademy.org/search?page_search_query={{{s}}}"
    },
    {
        "d": "kakijun.jp",
        "b": "kakijun",
        "u": "http://kakijun.jp/main/u_kensaku.php?KANJI={{{s}}}"
    },
    {
        "d": "kakosepise.com",
        "b": "kakosepise",
        "u": "http://kakosepise.com/?s={{{s}}}"
    },
    {
        "d": "prpm.dbp.gov.my",
        "b": "kamus",
        "u": "http://prpm.dbp.gov.my/Search.aspx?k={{{s}}}"
    },
    {
        "d": "app.kanjialive.com",
        "b": "kanji",
        "u": "https://app.kanjialive.com/search/{{{s}}}"
    },
    {
        "d": "www.khanacademy.org",
        "b": "kaprof",
        "u": "https://www.khanacademy.org/profile/{{{s}}}/"
    },
    {
        "d": "judgmenthck.kar.nic.in",
        "b": "karhcj",
        "u": "http://judgmenthck.kar.nic.in/judgments/simple-search?query={{{s}}}"
    },
    {
        "d": "www.securelist.com",
        "b": "kasperskymal",
        "u": "https://www.securelist.com/en/descriptions?words={{{s}}}&behavior=&Search=Search&search_type=1"
    },
    {
        "d": "kateglo.com",
        "b": "kateglo",
        "u": "http://kateglo.com/?phrase={{{s}}}&mod=dictionary"
    },
    {
        "d": "kbbi.kemdikbud.go.id",
        "b": "kbbi",
        "u": "https://kbbi.kemdikbud.go.id/entri/{{{s}}}"
    },
    {
        "d": "www.kcl.ac.uk",
        "b": "kcl",
        "u": "https://www.kcl.ac.uk/search/search.aspx#/all?term={{{s}}}"
    },
    {
        "d": "kcls.bibliocommons.com",
        "b": "kcls",
        "u": "http://kcls.bibliocommons.com/search?t=smart&search_category=keyword&q={{{s}}}&commit=Search"
    },
    {
        "d": "kanjidamage.com",
        "b": "kd",
        "u": "http://kanjidamage.com/kanji/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "kn.eki.ee",
        "b": "keel",
        "u": "http://kn.eki.ee/?Q={{{s}}}"
    },
    {
        "d": "kekanto.com.br",
        "b": "kekanto",
        "u": "https://kekanto.com.br/newsearch?search={{{s}}}"
    },
    {
        "d": "www.gyakorikerdesek.hu",
        "b": "kerdes",
        "u": "https://www.gyakorikerdesek.hu/kereses.php?keres={{{s}}}"
    },
    {
        "d": "kerjasama.bandung.go.id",
        "b": "kerjasama",
        "u": "http://kerjasama.bandung.go.id/?s={{{s}}}"
    },
    {
        "d": "www.kfz-info.net",
        "b": "kfz",
        "u": "http://www.kfz-info.net/{{{s}}}-kfz-kennzeichen/"
    },
    {
        "d": "www.khanacademy.org",
        "b": "khanacademy",
        "u": "http://www.khanacademy.org/search?page_search_query={{{s}}}"
    },
    {
        "d": "www.khanacademy.org",
        "b": "khan",
        "u": "https://www.khanacademy.org/search?page_search_query={{{s}}}"
    },
    {
        "d": "www.kickstarter.com",
        "b": "kickstarter",
        "u": "https://www.kickstarter.com/projects/search?utf8=✓&term={{{s}}}"
    },
    {
        "d": "kirp.pl",
        "b": "kirp",
        "u": "http://kirp.pl/?s={{{s}}}"
    },
    {
        "d": "kitchenstories.io",
        "b": "kitchenstories",
        "u": "https://kitchenstories.io/en/search?search={{{s}}}"
    },
    {
        "d": "www.biblestudytools.com",
        "b": "kj",
        "u": "http://www.biblestudytools.com/search/?q={{{s}}}&s=Bibles&t=kjv"
    },
    {
        "d": "www.kingjamesbibleonline.org",
        "b": "kjv",
        "u": "http://www.kingjamesbibleonline.org/search.php?q={{{s}}}"
    },
    {
        "d": "www.klubschule.ch",
        "b": "klubschule",
        "u": "https://www.klubschule.ch/Kurse/suche@{{{s}}}"
    },
    {
        "d": "www.knf.gov.pl",
        "b": "knf",
        "u": "https://www.knf.gov.pl/wyniki_wyszukiwania?searchText={{{s}}}&publicationId=18&sortType=accuracy"
    },
    {
        "d": "knoema.com",
        "b": "kn",
        "u": "https://knoema.com/search?query={{{s}}}"
    },
    {
        "d": "knowyourmeme.com",
        "b": "knowyourmeme",
        "u": "http://knowyourmeme.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "portal.kobv.de",
        "b": "kobv",
        "u": "http://portal.kobv.de/simpleSearch.do?query= {{{s}}}"
    },
    {
        "d": "www.kochwiki.org",
        "b": "kochwiki",
        "u": "https://www.kochwiki.org/w/index.php?search={{{s}}}&go=Seite"
    },
    {
        "d": "de.bab.la",
        "b": "konj",
        "u": "http://de.bab.la/konjugieren/deutsch/{{{s}}}"
    },
    {
        "d": "kanji.koohii.com",
        "b": "koohii",
        "u": "https://kanji.koohii.com/study/kanji/{{{s}}}"
    },
    {
        "d": "slovniky.korpus.sk",
        "b": "korpus",
        "u": "http://slovniky.korpus.sk/?w={{{s}}}"
    },
    {
        "d": "www.kotikokki.net",
        "b": "kotikokki",
        "u": "https://www.kotikokki.net/reseptit/?freeText={{{s}}}"
    },
    {
        "d": "www.kielitoimistonsanakirja.fi",
        "b": "kotus",
        "u": "http://www.kielitoimistonsanakirja.fi/netmot.exe?page=results&UI=fi80&Opt=8&dic=1&SearchWord={{{s}}}&SearchMode=1"
    },
    {
        "d": "www.kpedia.jp",
        "b": "kped",
        "u": "https://www.kpedia.jp/w/{{{s}}}"
    },
    {
        "d": "kalliope.staatsbibliothek-berlin.de",
        "b": "kpe",
        "u": "http://kalliope.staatsbibliothek-berlin.de/de/search.html?q={{{s}}}"
    },
    {
        "d": "krdic.naver.com",
        "b": "krdic",
        "u": "http://krdic.naver.com/search.nhn?query={{{s}}}"
    },
    {
        "d": "www.kth.se",
        "b": "kth",
        "u": "https://www.kth.se/search/search?q={{{s}}}"
    },
    {
        "d": "www.kielitoimistonsanakirja.fi",
        "b": "kts",
        "u": "https://www.kielitoimistonsanakirja.fi/{{{s}}}"
    },
    {
        "d": "catalog.lib.ku.edu",
        "b": "kulib",
        "u": "https://catalog.lib.ku.edu/cgi-bin/Pwebrecon.cgi?Search_Arg={{{s}}}&SL=None&Search_Code=FT*&PID=vT8gNN42qqUs0JjgNd8tssHev&SEQ=20180430021422&CNT=25&HIST=1&kujSubmitButtonName=Search"
    },
    {
        "d": "www.kulinarian.com",
        "b": "kulinarian",
        "u": "https://www.kulinarian.com/recipe/search?q={{{s}}}"
    },
    {
        "d": "kuranara.com",
        "b": "kuran",
        "u": "https://kuranara.com/ara?q={{{s}}}"
    },
    {
        "d": "kvk.bibliothek.kit.edu",
        "b": "kvkde",
        "u": "http://kvk.bibliothek.kit.edu/hylib-bin/kvk/nph-kvk2.cgi?maske=kvk-redesign&lang=de&title=KIT-Bibliothek%3A+Karlsruher+Virtueller+Katalog+KVK+%3A+Ergebnisanzeige&head=%2F%2Fkvk.bibliothek.kit.edu%2Fasset%2Fhtml%2Fhead.html&header=%2F%2Fkvk.bibliothek.kit.edu%2Fasset%2Fhtml%2Fheader.html&spacer=%2F%2Fkvk.bibliothek.kit.edu%2Fasset%2Fhtml%2Fspacer.html&footer=%2F%2Fkvk.bibliothek.kit.edu%2Fasset%2Fhtml%2Ffooter.html&css=none&input-charset=utf-8&ALL=&TI={{{s}}}&AU=&CI=&ST=&PY=&SB=&SS=&PU=&kataloge=SWB&kataloge=BVB&kataloge=NRW&kataloge=HEBIS&kataloge=HEBIS_RETRO&kataloge=KOBV_SOLR&kataloge=GBV&kataloge=DDB&kataloge=STABI_BERLIN&kataloge=TIB&kataloge=OEVK_GBV&kataloge=VD16&kataloge=VD17&kataloge=VD18&kataloge=VOE&kataloge=ZDB&ref=direct&client-js=yes"
    },
    {
        "d": "www.kvk.nl",
        "b": "kvk",
        "u": "http://www.kvk.nl/orderstraat/bedrijf-kiezen/?q={{{s}}}"
    },
    {
        "d": "knowyourmeme.com",
        "b": "kym",
        "u": "http://knowyourmeme.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.kidzsearch.com",
        "b": "kzs",
        "u": "http://www.kidzsearch.com/kzsearch.php?q={{{s}}}"
    },
    {
        "d": "labdoor.com",
        "b": "labdoor",
        "u": "https://labdoor.com/review?q={{{s}}}"
    },
    {
        "d": "www.bac-lac.gc.ca",
        "b": "lac",
        "u": "http://www.bac-lac.gc.ca/eng/collectionsearch/Pages/collectionsearch.aspx?q={{{s}}}"
    },
    {
        "d": "glosbe.com",
        "b": "lad",
        "u": "https://glosbe.com/la/en/{{{s}}}"
    },
    {
        "d": "laec.fr",
        "b": "laec",
        "u": "https://laec.fr/recherche?termes={{{s}}}"
    },
    {
        "d": "www.lafourchette.com",
        "b": "lafourchette",
        "u": "https://www.lafourchette.com/search-refine/{{{s}}}"
    },
    {
        "d": "de.langenscheidt.com",
        "b": "la",
        "u": "https://de.langenscheidt.com/deutsch-englisch/search?term={{{s}}}"
    },
    {
        "d": "lammps.sandia.gov",
        "b": "lammps",
        "u": "http://lammps.sandia.gov/doc/search.html?q={{{s}}}"
    },
    {
        "d": "en.langenscheidt.com",
        "b": "langen",
        "u": "https://en.langenscheidt.com/german-english/{{{s}}}"
    },
    {
        "d": "LanguageTool.org",
        "b": "lang",
        "u": "https://LanguageTool.org/?text={{{s}}}"
    },
    {
        "d": "www.microsoft.com",
        "b": "lanpor",
        "u": "http://www.microsoft.com/Language/en-US/Search.aspx?sString={{{s}}}&langID=pl-pl"
    },
    {
        "d": "ls2pac.lapl.org",
        "b": "lapl",
        "u": "https://ls2pac.lapl.org/?section=search&term={{{s}}}"
    },
    {
        "d": "www.larousse.fr",
        "b": "larenfr",
        "u": "http://www.larousse.fr/dictionnaires/anglais-francais/{{{s}}}"
    },
    {
        "d": "www.larousse.fr",
        "b": "laresfr",
        "u": "http://www.larousse.fr/dictionnaires/espagnol-francais/{{{s}}}/"
    },
    {
        "d": "www.larousse.fr",
        "b": "larfres",
        "u": "http://www.larousse.fr/dictionnaires/francais-espagnol/{{{s}}}/"
    },
    {
        "d": "www.larousse.fr",
        "b": "lar",
        "u": "http://www.larousse.fr/dictionnaires/francais/{{{s}}}"
    },
    {
        "d": "latin-dictionary.net",
        "b": "latdict",
        "u": "http://latin-dictionary.net/search/latin/{{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "latin",
        "u": "http://www.perseus.tufts.edu/hopper/morph?l={{{s}}}&la=la"
    },
    {
        "d": "www.dizionario-latino.com",
        "b": "latino",
        "u": "https://www.dizionario-latino.com/dizionario-latino-italiano.php?parola={{{s}}}"
    },
    {
        "d": "www.archives.nd.edu",
        "b": "lat",
        "u": "http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword={{{s}}}"
    },
    {
        "d": "www.lau.edu.lb",
        "b": "lau",
        "u": "https://www.lau.edu.lb/search/index.php?q={{{s}}}"
    },
    {
        "d": "www.law.cornell.edu",
        "b": "law",
        "u": "https://www.law.cornell.edu/search/site/{{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "lawphil",
        "u": "https://cse.google.com/cse?cx=000327027907964447955:65fjwortx5c&q={{{s}}}&oq={{{s}}}&gs_l=partner-generic.3...6080.6409.0.9078.4.4.0.0.0.0.157.426.2j2.4.0.gsnos%2Cn%3D13...0.264j30168j4...1.34.partner-generic..2.2.173.cXIan67Quoc"
    },
    {
        "d": "www.global-regulation.com",
        "b": "laws",
        "u": "https://www.global-regulation.com/search.php?year&country&province&d=1&start&q={{{s}}}&advanced=false"
    },
    {
        "d": "law.moj.gov.tw",
        "b": "lawtw",
        "u": "https://law.moj.gov.tw/Law/LawSearchResult.aspx?ty=ONEBAR&kw={{{s}}}"
    },
    {
        "d": "www.avvo.com",
        "b": "lawyer",
        "u": "https://www.avvo.com/search?query={{{s}}}"
    },
    {
        "d": "authorities.loc.gov",
        "b": "lcauth",
        "u": "http://authorities.loc.gov/cgi-bin/Pwebrecon.cgi?Search_0Arg={{{s}}}&Search_Code=SHED_&PID=pyauyDhI6ZL9vR3exz9cx8t8BF&SEQ=20161101104025&CNT=100&HIST=1"
    },
    {
        "d": "lccn.loc.gov",
        "b": "lccn",
        "u": "https://lccn.loc.gov/{{{s}}}"
    },
    {
        "d": "www.litcharts.com",
        "b": "lcharts",
        "u": "https://www.litcharts.com/search?query={{{s}}}"
    },
    {
        "d": "id.loc.gov",
        "b": "lcid",
        "u": "http://id.loc.gov/search/?q={{{s}}}&q="
    },
    {
        "d": "www.larousse.fr",
        "b": "lconj",
        "u": "https://www.larousse.fr/conjugaison/francais/{{{s}}}"
    },
    {
        "d": "de.langenscheidt.com",
        "b": "lda",
        "u": "http://de.langenscheidt.com/deutsch-arabisch/search?term={{{s}}}"
    },
    {
        "d": "www.ldoceonline.com",
        "b": "ld",
        "u": "http://www.ldoceonline.com/search/?q={{{s}}}"
    },
    {
        "d": "www.lds.org",
        "b": "lds",
        "u": "https://www.lds.org/search?lang=eng&query={{{s}}} "
    },
    {
        "d": "www.lds.org",
        "b": "ldss",
        "u": "https://www.lds.org/scriptures/search?lang=eng&query={{{s}}}"
    },
    {
        "d": "www.leafly.com",
        "b": "leafly",
        "u": "https://www.leafly.com/search?q={{{s}}}"
    },
    {
        "d": "www.learnersdictionary.com",
        "b": "learnersdictionary",
        "u": "http://www.learnersdictionary.com/definition/{{{s}}}"
    },
    {
        "d": "www.learngaelic.net",
        "b": "learngaelic",
        "u": "http://www.learngaelic.net/dictionary/index.jsp?slang=both&wholeword=false&abairt={{{s}}}"
    },
    {
        "d": "learningapps.org",
        "b": "learn",
        "u": "https://learningapps.org/index.php?s={{{s}}}"
    },
    {
        "d": "www.le-dictionnaire.com",
        "b": "ledict",
        "u": "http://www.le-dictionnaire.com/resultats.php?mot={{{s}}}"
    },
    {
        "d": "lego.fandom.com",
        "b": "legowiki",
        "u": "https://lego.fandom.com/search?query={{{s}}}"
    },
    {
        "d": "www.bibliotheek.universiteitleiden.nl",
        "b": "leidenlib",
        "u": "https://www.bibliotheek.universiteitleiden.nl/zoeken?q={{{s}}}"
    },
    {
        "d": "www.leifiphysik.de",
        "b": "leifi",
        "u": "https://www.leifiphysik.de/suche?search_api_fulltext={{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "leo",
        "u": "https://dict.leo.org/englisch-deutsch/{{{s}}}"
    },
    {
        "d": "dict.leo.org",
        "b": "leop",
        "u": "http://dict.leo.org/ptde/?lp=ende&lang=de&searchLoc=0&cmpType=relaxed&sectHdr=on&spellToler=&search={{{s}}}"
    },
    {
        "d": "lernabit.com",
        "b": "lernabit",
        "u": "https://lernabit.com/search?q={{{s}}}"
    },
    {
        "d": "le.ac.uk",
        "b": "le",
        "u": "https://le.ac.uk/search?q={{{s}}}"
    },
    {
        "d": "lexin.udir.no",
        "b": "lexin",
        "u": "http://lexin.udir.no/?search={{{s}}}&dict=nbo-maxi&ui-lang=NBO&startingfrom=&count=10&checked-languages=E&checked-languages=N"
    },
    {
        "d": "www.lexisnexis.com.au",
        "b": "lexisnexis",
        "u": "https://www.lexisnexis.com.au/en/global-pages/search?query={{{s}}}"
    },
    {
        "d": "www.lexml.gov.br",
        "b": "lexml",
        "u": "https://www.lexml.gov.br/busca/search?keyword={{{s}}}&f1-tipoDocumento="
    },
    {
        "d": "lapfoxtrax.wikia.com",
        "b": "lftwiki",
        "u": "http://lapfoxtrax.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "libcom.org",
        "b": "libcom",
        "u": "https://libcom.org/search/node/{{{s}}}"
    },
    {
        "d": "www.libdems.org.uk",
        "b": "libdems",
        "u": "http://www.libdems.org.uk/search?q={{{s}}}"
    },
    {
        "d": "www.libreriauniversitaria.it",
        "b": "liberia",
        "u": "http://www.libreriauniversitaria.it/c_power_search.php?shelf=BIT&q={{{s}}}&submit="
    },
    {
        "d": "library.iiitd.edu.in",
        "b": "libiiitd",
        "u": "http://library.iiitd.edu.in/cgi-bin/koha/opac-search.pl?idx=&q={{{s}}}"
    },
    {
        "d": "librewiki.net",
        "b": "libre",
        "u": "https://librewiki.net/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "librewiki.net",
        "b": "librewiki",
        "u": "https://librewiki.net/index.php?title=%ED%8A%B9%EC%88%98%3A%EA%B2%80%EC%83%89&search={{{s}}}"
    },
    {
        "d": "libris.kb.se",
        "b": "libris",
        "u": "http://libris.kb.se/hitlist?d=libris&q={{{s}}}&f=simp&spell=true"
    },
    {
        "d": "www.librarything.com",
        "b": "libthing",
        "u": "https://www.librarything.com/search.php?term={{{s}}}"
    },
    {
        "d": "www.libreriauniversitaria.it",
        "b": "libuniversitaria",
        "u": "http://www.libreriauniversitaria.it/c_power_search.php?shelf=BIT&q={{{s}}}&submit="
    },
    {
        "d": "lib.uva.nl",
        "b": "libuva",
        "u": "https://lib.uva.nl/primo-explore/search?query=any,contains,{{{s}}}&tab=all&search_scope=uva_all&vid=UVA"
    },
    {
        "d": "www.linguee.de",
        "b": "lidi",
        "u": "http://www.linguee.de/deutsch-italienisch/search?query={{{s}}}"
    },
    {
        "d": "lifehacker.com",
        "b": "lifehack",
        "u": "http://lifehacker.com/search?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "lifeprint",
        "u": "http://www.google.com/cse?cx=partner-pub-2513564923850231%3Anzof3qz9abm&ie=ISO-8859-1&q=time&sa=Search#gsc.tab=0&gsc.q={{{s}}}&gsc.page=1"
    },
    {
        "d": "www.law.cornell.edu",
        "b": "lii",
        "u": "https://www.law.cornell.edu/search/site/{{{s}}}"
    },
    {
        "d": "thesaurus.com",
        "b": "like",
        "u": "http://thesaurus.com/browse/{{{s}}}"
    },
    {
        "d": "www.linkedin.com",
        "b": "lilearning",
        "u": "https://www.linkedin.com/learning/search?keywords={{{s}}}"
    },
    {
        "d": "www.linguee.com.br",
        "b": "linbr",
        "u": "http://www.linguee.com.br/portugues-ingles/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.de",
        "b": "lindit",
        "u": "http://www.linguee.de/deutsch-italienisch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "linef",
        "u": "https://www.linguee.com/english-french/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "linen",
        "u": "http://www.linguee.com/english-dutch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.fr",
        "b": "linfd",
        "u": "http://www.linguee.fr/francais-allemand/search?source=auto&query={{{s}}} "
    },
    {
        "d": "www.linguee.fr",
        "b": "linfe",
        "u": "https://www.linguee.fr/francais-anglais/search?query= {{{s}}}"
    },
    {
        "d": "www.linguee.fr",
        "b": "lingfe",
        "u": "http://www.linguee.fr/francais-anglais/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.de",
        "b": "lingf",
        "u": "http://www.linguee.de/deutsch-franzoesisch/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.fr",
        "b": "lingfn",
        "u": "http://www.linguee.fr/francais-neerlandais/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.fr",
        "b": "lingfr",
        "u": "http://www.linguee.fr/francais-anglais/search?source=auto&query={{{s}}}"
    },
    {
        "d": "ling.pl",
        "b": "ling",
        "u": "https://ling.pl/slownik/angielsko-polski/{{{s}}}"
    },
    {
        "d": "www.netlingo.com",
        "b": "lingo",
        "u": "http://www.netlingo.com/search.php?searchtxt={{{s}}}"
    },
    {
        "d": "www.linguee.pl",
        "b": "lingpl",
        "u": "http://www.linguee.pl/angielski-polski/t%C5%82umaczenie/{{{s}}}.html"
    },
    {
        "d": "lingualeo.com",
        "b": "lingualeo",
        "u": "https://lingualeo.com/ru/glossary/learn/dictionary#{{{s}}}"
    },
    {
        "d": "www.linguee.es",
        "b": "lingues",
        "u": "https://www.linguee.es/espanol-ingles/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "lin",
        "u": "http://www.linguee.com/english-french/search?source=auto&query={{{s}}} "
    },
    {
        "d": "www.linguee.nl",
        "b": "lin-nlen",
        "u": "http://www.linguee.nl/nederlands-engels/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linguee.com",
        "b": "linsv",
        "u": "http://www.linguee.com/english-swedish/search?source=auto&query={{{s}}}"
    },
    {
        "d": "www.linternaute.com",
        "b": "linternaute",
        "u": "http://www.linternaute.com/encyclopedie/recherche/?f_libelle={{{s}}}"
    },
    {
        "d": "www.lipad.ca",
        "b": "lipad",
        "u": "https://www.lipad.ca/search/?q={{{s}}}"
    },
    {
        "d": "learneditonline.blog",
        "b": "litblog",
        "u": "https://learneditonline.blog/?s={{{s}}}"
    },
    {
        "d": "literarydevices.net",
        "b": "litdev",
        "u": "https://literarydevices.net/?s={{{s}}}"
    },
    {
        "d": "litfl.com",
        "b": "litfl",
        "u": "https://litfl.com/?s={{{s}}}"
    },
    {
        "d": "search.liu.se",
        "b": "liu",
        "u": "http://search.liu.se/en/?query={{{s}}}"
    },
    {
        "d": "www.livestrong.com",
        "b": "livestrong",
        "u": "http://www.livestrong.com/search/?mode=standard&search={{{s}}}"
    },
    {
        "d": "capitadiscovery.co.uk",
        "b": "lluk",
        "u": "http://capitadiscovery.co.uk/liverpool/items?query={{{s}}}"
    },
    {
        "d": "collections.leventhalmap.org",
        "b": "lmec",
        "u": "https://collections.leventhalmap.org/search?&q={{{s}}}"
    },
    {
        "d": "opac.ub.uni-muenchen.de",
        "b": "lmu",
        "u": "https://opac.ub.uni-muenchen.de/TouchPoint/start.do?View=sunrise&Language=de&Query=-1=%22{{{s}}}%22"
    },
    {
        "d": "lnu-se-primo.hosted.exlibrisgroup.com",
        "b": "lnu",
        "u": "https://lnu-se-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&search_scope=default_scope&sortby=rank&vid=primo-custom-lnu&pcAvailability=false&lang=sv_SE"
    },
    {
        "d": "tel.local.ch",
        "b": "locfr",
        "u": "http://tel.local.ch/fr/q?what={{{s}}}"
    },
    {
        "d": "www.loc.gov",
        "b": "loc",
        "u": "https://www.loc.gov/search/?q={{{s}}} "
    },
    {
        "d": "logeion.uchicago.edu",
        "b": "logeion",
        "u": "http://logeion.uchicago.edu/{{{s}}}"
    },
    {
        "d": "logeion.uchicago.edu",
        "b": "log",
        "u": "http://logeion.uchicago.edu/{{{s}}}"
    },
    {
        "d": "mw.lojban.org",
        "b": "lojban",
        "u": "https://mw.lojban.org/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "www.lonelyplanet.com",
        "b": "lonelyplanet",
        "u": "https://www.lonelyplanet.com/search?q={{{s}}}"
    },
    {
        "d": "dict.longdo.com",
        "b": "longdo",
        "u": "https://dict.longdo.com/search/{{{s}}}"
    },
    {
        "d": "www.frontiersin.org",
        "b": "loop",
        "u": "http://www.frontiersin.org/SearchData.aspx?sq={{{s}}}"
    },
    {
        "d": "lotr.wikia.com",
        "b": "lotr",
        "u": "http://lotr.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "lovdata.no",
        "b": "lovdata",
        "u": "http://lovdata.no/sok?q={{{s}}}"
    },
    {
        "d": "www.leifiphysik.de",
        "b": "lph",
        "u": "https://www.leifiphysik.de/suche/{{{s}}}"
    },
    {
        "d": "de.langenscheidt.com",
        "b": "ls.de-sv",
        "u": "http://de.langenscheidt.com/deutsch-schwedisch/search?term={{{s}}}&q_cat=%2Fdeutsch-schwedisch%2F"
    },
    {
        "d": "librarysearch.lse.ac.uk",
        "b": "lselib",
        "u": "https://librarysearch.lse.ac.uk/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=CSCOP_ALL&sortby=rank&vid=44LSE_VU1"
    },
    {
        "d": "littlesis.org",
        "b": "ls",
        "u": "http://littlesis.org/search?q={{{s}}}"
    },
    {
        "d": "de.langenscheidt.com",
        "b": "ls.sv",
        "u": "http://de.langenscheidt.com/schwedisch-deutsch/search?term={{{s}}}&q_cat=%2Fschwedisch-deutsch%2F"
    },
    {
        "d": "search.lib.latrobe.edu.au",
        "b": "ltulib",
        "u": "http://search.lib.latrobe.edu.au/primo_library/libweb/action/dlSearch.do?vid=LATROBE&institution=LATROBE&search_scope=All&query=any,contains, {{{s}}} "
    },
    {
        "d": "lt.wikipedia.org",
        "b": "ltwiki",
        "u": "https://lt.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "lugatim.com",
        "b": "lugatım",
        "u": "http://lugatim.com/s/{{{s}}}"
    },
    {
        "d": "www.liberty.edu",
        "b": "lu",
        "u": "https://www.liberty.edu/search/?q={{{s}}}"
    },
    {
        "d": "lumendatabase.org",
        "b": "lumen",
        "u": "http://lumendatabase.org/notices/search?utf8=✓&term={{{s}}}"
    },
    {
        "d": "www.bibleserver.com",
        "b": "lut",
        "u": "https://www.bibleserver.com/text/LUT/{{{s}}}"
    },
    {
        "d": "lux.leuphana.de",
        "b": "lux",
        "u": "https://lux.leuphana.de/vufind/Search/Results?lookfor={{{s}}}&submit=Suchen"
    },
    {
        "d": "www.livermore.lib.ca.us",
        "b": "lv",
        "u": "http://www.livermore.lib.ca.us/search/a?searchtype=X&SORT=D&searchscope=7&searcharg={{{s}}}"
    },
    {
        "d": "www.lingvolive.com",
        "b": "lvoenru",
        "u": "https://www.lingvolive.com/en-us/translate/en-ru/{{{s}}}"
    },
    {
        "d": "ludwig.guru",
        "b": "lwg",
        "u": "https://ludwig.guru/s/{{{s}}}"
    },
    {
        "d": "www.lexico.com",
        "b": "lx",
        "u": "https://www.lexico.com/definition/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lyle",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:forums.lylemcdonald.com"
    },
    {
        "d": "www.maa.org",
        "b": "maa",
        "u": "http://www.maa.org/search/node?keys={{{s}}}"
    },
    {
        "d": "www.almaany.com",
        "b": "maany",
        "u": "http://www.almaany.com/ar/dict/ar-en/{{{s}}}/"
    },
    {
        "d": "www.macmillandictionary.com",
        "b": "macdic",
        "u": "http://www.macmillandictionary.com/dictionary/american/{{{s}}}"
    },
    {
        "d": "library.macewan.ca",
        "b": "macewan",
        "u": "https://library.macewan.ca/library-search?query={{{s}}}"
    },
    {
        "d": "www.everymac.com",
        "b": "macid",
        "u": "http://www.everymac.com/ultimate-mac-lookup/?search_keywords={{{s}}}"
    },
    {
        "d": "www.macmillandictionary.com",
        "b": "macmillan",
        "u": "http://www.macmillandictionary.com/dictionary/american/{{{s}}}"
    },
    {
        "d": "www.macquariedictionary.com.au",
        "b": "macq",
        "u": "https://www.macquariedictionary.com.au/features/word/search/?word={{{s}}}&search_word_type=Dictionary"
    },
    {
        "d": "madoncollections.com",
        "b": "madonc",
        "u": "https://madoncollections.com/collectables/?q={{{s}}}"
    },
    {
        "d": "magma.maths.usyd.edu.au",
        "b": "magma",
        "u": "http://magma.maths.usyd.edu.au/magma/handbook/search?query={{{s}}}&intrinsics=1"
    },
    {
        "d": "www.makeupalley.com",
        "b": "makeupalley",
        "u": "https://www.makeupalley.com/search.asp?q={{{s}}}&x=0&y=0"
    },
    {
        "d": "malid.is",
        "b": "malid",
        "u": "http://malid.is/leit/{{{s}}}"
    },
    {
        "d": "www.mangahigh.com",
        "b": "mangahigh",
        "u": "https://www.mangahigh.com/browse/?q={{{s}}}"
    },
    {
        "d": "maoridictionary.co.nz",
        "b": "maoridictionary",
        "u": "http://maoridictionary.co.nz/search?idiom=&phrase=&proverb=&loan=&histLoanWords=&keywords={{{s}}}"
    },
    {
        "d": "maoridictionary.co.nz",
        "b": "maori",
        "u": "http://maoridictionary.co.nz/search?idiom=&phrase=&proverb=&loan=&histLoanWords=&keywords={{{s}}}"
    },
    {
        "d": "maoridictionary.co.nz",
        "b": "māori",
        "u": "http://maoridictionary.co.nz/search?keywords={{{s}}}"
    },
    {
        "d": "maps.google.com",
        "b": "mapsfr",
        "u": "https://maps.google.com/maps?hl=fr&q={{{s}}}"
    },
    {
        "d": "putusan.mahkamahagung.go.id",
        "b": "mari",
        "u": "http://putusan.mahkamahagung.go.id/main/pencarian/?q={{{s}}}"
    },
    {
        "d": "www.marmiton.org",
        "b": "marmit",
        "u": "http://www.marmiton.org/recettes/recherche.aspx?s={{{s}}} "
    },
    {
        "d": "www.marmiton.org",
        "b": "marmiton",
        "u": "http://www.marmiton.org/recettes/recherche.aspx?aqt={{{s}}}"
    },
    {
        "d": "www.mathsisfun.com",
        "b": "mathisfun",
        "u": "http://www.mathsisfun.com/sphider/search.php?query={{{s}}}&submit=&search=1"
    },
    {
        "d": "mathworld.wolfram.com",
        "b": "math",
        "u": "http://mathworld.wolfram.com/search/?query={{{s}}}&x=0&y=0"
    },
    {
        "d": "mathoverflow.net",
        "b": "mathoverflow",
        "u": "http://mathoverflow.net/search?q={{{s}}}"
    },
    {
        "d": "math.stackexchange.com",
        "b": "mathse",
        "u": "http://math.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "mathworks",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:mathworks.com"
    },
    {
        "d": "mathworld.wolfram.com",
        "b": "mathworld",
        "u": "http://mathworld.wolfram.com/search/?query={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.mathworks.com",
        "b": "matlabfx",
        "u": "http://www.mathworks.com/matlabcentral/fileexchange/?term={{{s}}}"
    },
    {
        "d": "www.matweb.com",
        "b": "matl",
        "u": "http://www.matweb.com/search/QuickText.aspx?SearchText={{{s}}}"
    },
    {
        "d": "www.matematyka.pl",
        "b": "matpl",
        "u": "http://www.matematyka.pl/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.matweb.com",
        "b": "matweb",
        "u": "http://www.matweb.com/search/QuickText.aspx?SearchText={{{s}}}"
    },
    {
        "d": "www.matweb.com",
        "b": "matw",
        "u": "http://www.matweb.com/search/QuickText.aspx?SearchText={{{s}}}"
    },
    {
        "d": "www.mayoclinic.org",
        "b": "mayo",
        "u": "https://www.mayoclinic.org/search/search-results?q={{{s}}}"
    },
    {
        "d": "www.mybeercellar.com",
        "b": "mbc",
        "u": "https://www.mybeercellar.com/?search={{{s}}}"
    },
    {
        "d": "www.monroecc.edu",
        "b": "mcc",
        "u": "https://www.monroecc.edu/search/#gsc.q={{{s}}}"
    },
    {
        "d": "mcgill.worldcat.org",
        "b": "mcgilllib",
        "u": "http://mcgill.worldcat.org/search?q={{{s}}}&qt=owc_search&scope=2"
    },
    {
        "d": "www.mcgill.ca",
        "b": "mcgill",
        "u": "http://www.mcgill.ca/search/?query={{{s}}}&find=Search"
    },
    {
        "d": "mdpl.ent.sirsi.net",
        "b": "mcplmd",
        "u": "https://mdpl.ent.sirsi.net/client/en_US/catalog/search/results?qu={{{s}}}"
    },
    {
        "d": "mcpac.mcpl.lib.ny.us",
        "b": "mcpl",
        "u": "https://mcpac.mcpl.lib.ny.us/search/t?{{{s}}}"
    },
    {
        "d": "www.metacrawler.com",
        "b": "mcr",
        "u": "http://www.metacrawler.com/search/web?fcoid=417&fcop=topnav&fpid=2&om_nextpage=True&q={{{s}}}"
    },
    {
        "d": "minecraft-de.gamepedia.com",
        "b": "mcwd",
        "u": "http://minecraft-de.gamepedia.com/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "minecraft.gamepedia.com",
        "b": "mcwiki",
        "u": "https://minecraft.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "md5.gromweb.com",
        "b": "md5",
        "u": "http://md5.gromweb.com/?md5={{{s}}}"
    },
    {
        "d": "www.marksdailyapple.com",
        "b": "mda",
        "u": "http://www.marksdailyapple.com/search-results/?cx=004987908667488763946%3Akd-fp2c7jek&cof=FORID%3A11&ie=UTF-8&q={{{s}}}&siteurl=www.marksdailyapple.com%2F&ref=&ss=1623j619159j7"
    },
    {
        "d": "www.mdbg.net",
        "b": "mdbg",
        "u": "https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb={{{s}}}"
    },
    {
        "d": "m.dict.cc",
        "b": "mdcc",
        "u": "https://m.dict.cc/?s={{{s}}}"
    },
    {
        "d": "www.medbullets.com",
        "b": "medb",
        "u": "http://www.medbullets.com/search?cx=011011587714199370644:0fb95tj2wze&cof=FORID:9&ie=UTF-8&sa.x=10&sa.y=12&sa=Search&q={{{s}}}"
    },
    {
        "d": "mechanicalsite.com",
        "b": "medf",
        "u": "https://mechanicalsite.com/?s={{{s}}}"
    },
    {
        "d": "mediabiasfactcheck.com",
        "b": "mediabias",
        "u": "https://mediabiasfactcheck.com/?s={{{s}}}"
    },
    {
        "d": "mediadico.com",
        "b": "mediadico",
        "u": "http://mediadico.com/dictionnaire/definition/{{{s}}}"
    },
    {
        "d": "media.info",
        "b": "mediainfo",
        "u": "http://media.info/search?s={{{s}}}"
    },
    {
        "d": "mediatum.ub.tum.de",
        "b": "mediatum",
        "u": "https://mediatum.ub.tum.de/?query={{{s}}}"
    },
    {
        "d": "medical-dictionary.thefreedictionary.com",
        "b": "medical",
        "u": "http://medical-dictionary.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "www.translatetheweb.com",
        "b": "medi",
        "u": "http://www.translatetheweb.com/?item1={{{s}}}&field=all&maxKurztitel=25&sachgruppen=0&sachgruppenSchulfaecher=0&media=all&local=0&produzent=0&article_id=23&submitEinfacheSuche=Find+Titles&from=&to=en&a=http%3A%2F%2Fmedibus.info%2Findex.php%3Farticle_id%3D23%23einfSucheInfo&f=1"
    },
    {
        "d": "vsearch.nlm.nih.gov",
        "b": "medlineplus",
        "u": "http://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3Aproject=medlineplus&query={{{s}}}"
    },
    {
        "d": "www.mednar.com",
        "b": "mednar",
        "u": "http://www.mednar.com/mednar/result-list/fullRecord:{{{s}}}"
    },
    {
        "d": "medical-phd.blogspot.com",
        "b": "medphd",
        "u": "https://medical-phd.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "search.medscape.com",
        "b": "medscape",
        "u": "http://search.medscape.com/reference-search?newSearchHeader=1&queryText={{{s}}}"
    },
    {
        "d": "www.meligrana.com",
        "b": "meligrana",
        "u": "https://www.meligrana.com/es/alojamiento-turismo/buscar-alojamiento.asp?q={{{s}}} "
    },
    {
        "d": "melvyl.worldcat.org",
        "b": "melvyl",
        "u": "http://melvyl.worldcat.org/search?q={{{s}}}"
    },
    {
        "d": "de.memory-alpha.wikia.com",
        "b": "memalphade",
        "u": "http://de.memory-alpha.wikia.com/wiki/Spezial:Suche?query={{{s}}}"
    },
    {
        "d": "knowyourmeme.com",
        "b": "meme",
        "u": "http://knowyourmeme.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.memidex.com",
        "b": "memidex",
        "u": "http://www.memidex.com/{{{s}}}"
    },
    {
        "d": "en.memory-alpha.org",
        "b": "memoryalpha",
        "u": "http://en.memory-alpha.org/wiki/Special:Search?search={{{s}}}&fulltext=Search&resultsLang=en"
    },
    {
        "d": "www.memrise.com",
        "b": "memrise",
        "u": "http://www.memrise.com/courses/english/?q={{{s}}}"
    },
    {
        "d": "menadoc.bibliothek.uni-halle.de",
        "b": "menadoc",
        "u": "https://menadoc.bibliothek.uni-halle.de/search/quick?query={{{s}}}"
    },
    {
        "d": "www.mendeley.com",
        "b": "mendeley",
        "u": "http://www.mendeley.com/research-papers/search/?query={{{s}}}"
    },
    {
        "d": "www.mediamarkt.de",
        "b": "mendesah",
        "u": "https://www.mediamarkt.de/de/search.html?query={{{s}}}"
    },
    {
        "d": "www.mennlex.de",
        "b": "mennlex",
        "u": "http://www.mennlex.de/doku.php?do=search&id={{{s}}}"
    },
    {
        "d": "www.menupages.com",
        "b": "menupages",
        "u": "http://www.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "search.mercola.com",
        "b": "mercola",
        "u": "https://search.mercola.com/results.aspx?q={{{s}}} "
    },
    {
        "d": "meritbadge.org",
        "b": "meritbadge",
        "u": "http://meritbadge.org/wiki/index.php/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "meritbadge.org",
        "b": "merit",
        "u": "http://meritbadge.org/wiki/index.php/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "merriamwebster",
        "u": "http://www.merriam-webster.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "mesh",
        "u": "https://www.ncbi.nlm.nih.gov/mesh/?term={{{s}}}"
    },
    {
        "d": "de.metapedia.org",
        "b": "metade",
        "u": "https://de.metapedia.org/m/index.php?search={{{s}}}&title=Spezial%3ASuche"
    },
    {
        "d": "metalab.at",
        "b": "metalab",
        "u": "https://metalab.at/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "av-wx.com",
        "b": "metar",
        "u": "http://av-wx.com/?search={{{s}}}&mode=metar"
    },
    {
        "d": "www.meteoblue.com",
        "b": "meteoblue",
        "u": "https://www.meteoblue.com/en/weather/forecast/14-days/{{{s}}}"
    },
    {
        "d": "woerterbuchnetz.de",
        "b": "meyers",
        "u": "http://woerterbuchnetz.de/Meyers/?lemme={{{s}}}"
    },
    {
        "d": "www.muscleforlife.com",
        "b": "mfl",
        "u": "http://www.muscleforlife.com/?s={{{s}}} "
    },
    {
        "d": "www.morfix.co.il",
        "b": "mfx",
        "u": "http://www.morfix.co.il/{{{s}}}"
    },
    {
        "d": "www.dmgh.de",
        "b": "mgh",
        "u": "https://www.dmgh.de/de/fs1/search/query.html?fulltext={{{s}}}"
    },
    {
        "d": "www.mentalhealthlaw.co.uk",
        "b": "mhlo",
        "u": "http://www.mentalhealthlaw.co.uk/index.php?search={{{s}}}"
    },
    {
        "d": "www.millersville.edu",
        "b": "millersv",
        "u": "https://www.millersville.edu/search-results.php?query={{{s}}}"
    },
    {
        "d": "milog.co.il",
        "b": "milog",
        "u": "http://milog.co.il/{{{s}}}"
    },
    {
        "d": "www.mindat.org",
        "b": "mindat",
        "u": "http://www.mindat.org/search.php?search={{{s}}}"
    },
    {
        "d": "www.minimins.com",
        "b": "minimins",
        "u": "https://www.minimins.com/index.php?search/search&keywords={{{s}}}:"
    },
    {
        "d": "www.mirabileweb.it",
        "b": "mirabile",
        "u": "http://www.mirabileweb.it/ricerca_semplice.aspx?tsearch={{{s}}}"
    },
    {
        "d": "mises.org",
        "b": "mises",
        "u": "https://mises.org/search/site/{{{s}}}"
    },
    {
        "d": "lib.mit.edu",
        "b": "mitlib",
        "u": "https://lib.mit.edu/search/bento?q={{{s}}}"
    },
    {
        "d": "student.mit.edu",
        "b": "mit",
        "u": "http://student.mit.edu/catalog/search.cgi?search={{{s}}}"
    },
    {
        "d": "search.mit.edu",
        "b": "mitocw",
        "u": "http://search.mit.edu/search?site=ocw&client=mit&output=xml_no_dtd&proxystylesheet=http://ocw.mit.edu/search/google-ocw.xsl&proxyreload=1&q={{{s}}}"
    },
    {
        "d": "video.mit.edu",
        "b": "mitvid",
        "u": "http://video.mit.edu/search/?q={{{s}}}"
    },
    {
        "d": "www.drinksmixer.com",
        "b": "mixer",
        "u": "http://www.drinksmixer.com/search/?q={{{s}}}&d=1&p=1"
    },
    {
        "d": "www.mlat.uzh.ch",
        "b": "mlat",
        "u": "http://www.mlat.uzh.ch/MLS/advsuchergebnis.php?suchbegriff={{{s}}}&mode=SPH_MATCH_EXTENDED2&corpus=all"
    },
    {
        "d": "www.learnersdictionary.com",
        "b": "mld",
        "u": "http://www.learnersdictionary.com/definition/{{{s}}}"
    },
    {
        "d": "mlgb3.bodleian.ox.ac.uk",
        "b": "mlgb",
        "u": "http://mlgb3.bodleian.ox.ac.uk/mlgb/?search_term={{{s}}}"
    },
    {
        "d": "find.minlib.net",
        "b": "mln",
        "u": "https://find.minlib.net/iii/encore/search/C__S{{{s}}}"
    },
    {
        "d": "vsearch.nlm.nih.gov",
        "b": "mlpes",
        "u": "https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3Aproject=medlineplus-spanish&v%3Asources=medlineplus-spanish-bundle&query={{{s}}}"
    },
    {
        "d": "medieval.bodleian.ox.ac.uk",
        "b": "mmol",
        "u": "https://medieval.bodleian.ox.ac.uk/?q={{{s}}}"
    },
    {
        "d": "www.medicinanet.com.br",
        "b": "mn",
        "u": "http://www.medicinanet.com.br/pesquisas/{{{s}}}.htm"
    },
    {
        "d": "www.moby-thesaurus.org",
        "b": "mobythes",
        "u": "http://www.moby-thesaurus.org/search?q={{{s}}}"
    },
    {
        "d": "www.moedict.tw",
        "b": "moedict",
        "u": "https://www.moedict.tw/{{{s}}}"
    },
    {
        "d": "www.webqc.org",
        "b": "molw",
        "u": "http://www.webqc.org/mmcalc.php?compound={{{s}}}"
    },
    {
        "d": "mathoverflow.net",
        "b": "mo",
        "u": "http://mathoverflow.net/search?q={{{s}}}"
    },
    {
        "d": "www.monash.edu",
        "b": "monash",
        "u": "https://www.monash.edu/search?query={{{s}}}"
    },
    {
        "d": "www.class-central.com",
        "b": "mooc",
        "u": "https://www.class-central.com/search?q={{{s}}}"
    },
    {
        "d": "www.class-central.com",
        "b": "moocs",
        "u": "https://www.class-central.com/search?q={{{s}}}"
    },
    {
        "d": "moonmonday.space",
        "b": "moon",
        "u": "https://moonmonday.space/?s={{{s}}}"
    },
    {
        "d": "www.morfix.co.il",
        "b": "morfix",
        "u": "http://www.morfix.co.il/{{{s}}}"
    },
    {
        "d": "www.mormon.org",
        "b": "mormon",
        "u": "https://www.mormon.org/searchresults#?query={{{s}}}"
    },
    {
        "d": "www.morningstar.com",
        "b": "morningstar",
        "u": "https://www.morningstar.com/search.html?q={{{s}}}"
    },
    {
        "d": "boston.menupages.com",
        "b": "mpbo",
        "u": "http://boston.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "chicago.menupages.com",
        "b": "mpch",
        "u": "http://chicago.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "washingtondc.menupages.com",
        "b": "mpdc",
        "u": "http://washingtondc.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "southflorida.menupages.com",
        "b": "mpfl",
        "u": "http://southflorida.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "www.mpg.de",
        "b": "mpgde",
        "u": "http://www.mpg.de/en/search?utf8=%E2%9C%93&searchfield={{{s}}}"
    },
    {
        "d": "www.mpg.de",
        "b": "mpg",
        "u": "http://www.mpg.de/en/search?utf8=%E2%9C%93&searchfield={{{s}}}"
    },
    {
        "d": "pubman.mpdl.mpg.de",
        "b": "mpgpure",
        "u": "http://pubman.mpdl.mpg.de/pubman/faces/SearchResultListPage.jsp?cql=escidoc.objecttype%3D%22item%22+AND+escidoc.content-model.objid%3D%22escidoc%3Apersistent4%22+AND+%28%28escidoc.metadata%3D%22{{{s}}}%22%29+OR+%28%28escidoc.any-identifier%3D%22{{{s}}}%22+OR+escidoc.property.latest-release.objid%3D%22{{{s}}}%22%29%29+%29"
    },
    {
        "d": "rena.mpdl.mpg.de",
        "b": "mpgrena",
        "u": "http://rena.mpdl.mpg.de/rena/Search/Results?lookfor={{{s}}}"
    },
    {
        "d": "losangeles.menupages.com",
        "b": "mpla",
        "u": "http://losangeles.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "www.menupages.com",
        "b": "mp",
        "u": "http://www.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "www.menupages.com",
        "b": "mpny",
        "u": "http://www.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "philadelphia.menupages.com",
        "b": "mpph",
        "u": "http://philadelphia.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "sanfrancisco.menupages.com",
        "b": "mpsf",
        "u": "http://sanfrancisco.menupages.com/restaurants/text/{{{s}}}/all-areas/all-neighborhoods/all-cuisines/"
    },
    {
        "d": "mathscinet.ams.org",
        "b": "mref",
        "u": "https://mathscinet.ams.org/mathscinet-mref?ref={{{s}}}"
    },
    {
        "d": "mri.iop.kcl.ac.uk",
        "b": "mri",
        "u": "https://mri.iop.kcl.ac.uk/mediawiki/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "academic.research.microsoft.com",
        "b": "msacademic",
        "u": "http://academic.research.microsoft.com/Search?query={{{s}}}&s=0"
    },
    {
        "d": "academic.microsoft.com",
        "b": "msac",
        "u": "https://academic.microsoft.com/search?q={{{s}}}&f=&orderBy=0&forceFallback=true"
    },
    {
        "d": "academic.microsoft.com",
        "b": "msa",
        "u": "https://academic.microsoft.com/search?q={{{s}}}"
    },
    {
        "d": "www.ams.org",
        "b": "msc",
        "u": "http://www.ams.org/mathscinet/search/publications.html?pg4=ALLF&s4={{{s}}}"
    },
    {
        "d": "www.msdmanuals.com",
        "b": "msdjp",
        "u": "https://www.msdmanuals.com/ja-jp/ホーム/SearchResults?query={{{s}}}"
    },
    {
        "d": "www.sciencelab.com",
        "b": "msds",
        "u": "http://www.sciencelab.com/search.php?q={{{s}}}"
    },
    {
        "d": "quote.morningstar.com",
        "b": "msq",
        "u": "http://quote.morningstar.com/stock/s.aspx?t={{{s}}}"
    },
    {
        "d": "math.stackexchange.com",
        "b": "mstack",
        "u": "https://math.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "lib.msu.edu",
        "b": "msulibrary",
        "u": "https://lib.msu.edu/searchresults/?Ntt={{{s}}}"
    },
    {
        "d": "wiki.multitheftauto.com",
        "b": "mtawiki",
        "u": "https://wiki.multitheftauto.com/index.php?title=Special%3ASearch&profile=default&fulltext=Search&search={{{s}}}"
    },
    {
        "d": "www.mandarintools.com",
        "b": "mtcn",
        "u": "http://www.mandarintools.com/cgi-bin/wordlook.pl?word={{{s}}}&where=whole"
    },
    {
        "d": "www.mandarintools.com",
        "b": "mten",
        "u": "http://www.mandarintools.com/cgi-bin/wordlook.pl?word={{{s}}}&searchtype=english&where=whole"
    },
    {
        "d": "mtg.wtf",
        "b": "mtgw",
        "u": "https://mtg.wtf/card?q={{{s}}}"
    },
    {
        "d": "www.multitran.com",
        "b": "mt",
        "u": "https://www.multitran.com/m.exe?s={{{s}}}"
    },
    {
        "d": "www.mtu.edu",
        "b": "mtu",
        "u": "https://www.mtu.edu/search/?q={{{s}}}"
    },
    {
        "d": "mugshots.com",
        "b": "mugshots",
        "u": "http://mugshots.com/search.html?q={{{s}}}"
    },
    {
        "d": "multcolib.org",
        "b": "multcolib",
        "u": "https://multcolib.org/search/site/{{{s}}}"
    },
    {
        "d": "mungfali.com",
        "b": "mungfali",
        "u": "http://mungfali.com/explore.php?q={{{s}}}"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "mwd",
        "u": "http://www.merriam-webster.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "mweb",
        "u": "https://www.merriam-webster.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.learnersdictionary.com",
        "b": "mwld",
        "u": "http://www.learnersdictionary.com/definition/{{{s}}}"
    },
    {
        "d": "www.learnersdictionary.com",
        "b": "mwl",
        "u": "http://www.learnersdictionary.com/definition/{{{s}}}"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "mw",
        "u": "http://www.merriam-webster.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "mwt",
        "u": "http://www.merriam-webster.com/thesaurus/{{{s}}}"
    },
    {
        "d": "unabridged.merriam-webster.com",
        "b": "mwunabridged",
        "u": "http://unabridged.merriam-webster.com/unabridged/{{{s}}}"
    },
    {
        "d": "mywellbrain.com",
        "b": "mybrain",
        "u": "https://mywellbrain.com/?s={{{s}}}"
    },
    {
        "d": "www.myflorida.com",
        "b": "myfl",
        "u": "http://www.myflorida.com/search_results.html?q={{{s}}}#gsc.tab=0&gsc.q=dmv&gsc.page=1"
    },
    {
        "d": "www.mygov.scot",
        "b": "mygovscot",
        "u": "https://www.mygov.scot/search?q={{{s}}}&cat=sitesearch"
    },
    {
        "d": "www.mymovingreviews.com",
        "b": "mymovingreviews",
        "u": "http://www.mymovingreviews.com/search.php?q={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.myrecipes.com",
        "b": "myrec",
        "u": "http://www.myrecipes.com/search/site/{{{s}}}"
    },
    {
        "d": "www.naardensebijbel.nl",
        "b": "naarden",
        "u": "http://www.naardensebijbel.nl/?search-class=DB_CustomSearch_Widget-db_customsearch_widget&widget_number=preset-default&-0=vers&cs-booknr-1=&cs-bijbelhoofdstuk-2=&cs-versnummer-3=&cs-bijbelvers_v2-4={{{s}}}&search=Zoeken"
    },
    {
        "d": "www.biblegateway.com",
        "b": "nabre",
        "u": "https://www.biblegateway.com/passage/?search={{{s}}}&version=NABRE"
    },
    {
        "d": "naeb.brit.org",
        "b": "naeb",
        "u": "http://naeb.brit.org/uses/search/?string={{{s}}}"
    },
    {
        "d": "naijalingo.com",
        "b": "naijalingo",
        "u": "http://naijalingo.com/search?word={{{s}}}"
    },
    {
        "d": "namu.wiki",
        "b": "namu",
        "u": "https://namu.wiki/go/{{{s}}}"
    },
    {
        "d": "www.timini.no",
        "b": "nano",
        "u": "https://www.timini.no/search/q/{{{s}}}"
    },
    {
        "d": "www.naob.no",
        "b": "naob",
        "u": "https://www.naob.no/s%C3%B8k/{{{s}}}"
    },
    {
        "d": "nasasearch.nasa.gov",
        "b": "nasa",
        "u": "https://nasasearch.nasa.gov/search?query={{{s}}}&affiliate=nasa&utf8=%E2%9C%93"
    },
    {
        "d": "www.biblegateway.com",
        "b": "nasb",
        "u": "https://www.biblegateway.com/quicksearch/?quicksearch={{{s}}}&qs_version=NASB"
    },
    {
        "d": "www.natgeokids.com",
        "b": "natgeokids",
        "u": "https://www.natgeokids.com/?s=testhttps://www.nationalgeographic.com/search/?q={{{s}}}"
    },
    {
        "d": "www.nature.com",
        "b": "nature",
        "u": "http://www.nature.com/search/executeSearch?sp-q-1=&sp-q={{{s}}}"
    },
    {
        "d": "ncatlab.org",
        "b": "ncatlab",
        "u": "http://ncatlab.org/nlab/show/HomePage/?q={{{s}}}"
    },
    {
        "d": "www.nocoastbestcoast.com",
        "b": "ncbc",
        "u": "https://www.nocoastbestcoast.com/search.php?search={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "ncbi",
        "u": "http://www.ncbi.nlm.nih.gov/gquery/?term={{{s}}}"
    },
    {
        "d": "nciku.com",
        "b": "nce",
        "u": "http://nciku.com/search/en/{{{s}}}"
    },
    {
        "d": "www.nciku.com",
        "b": "nciku",
        "u": "http://www.nciku.com/search/all/{{{s}}}"
    },
    {
        "d": "www.nclive.org",
        "b": "ncl",
        "u": "https://www.nclive.org/search-everything?search={{{s}}}"
    },
    {
        "d": "search.lib.ncsu.edu",
        "b": "ncsulib",
        "u": "http://search.lib.ncsu.edu/?q={{{s}}}"
    },
    {
        "d": "nciku.com",
        "b": "ncz",
        "u": "http://nciku.com/search/zh/{{{s}}}"
    },
    {
        "d": "www.deutsche-biographie.de",
        "b": "ndb",
        "u": "https://www.deutsche-biographie.de/search?name={{{s}}}&kat=ndbadb&beruf=&orte=&geburtsjahr=&todesjahr=&gnd=&st=erw&facets=&cf=10&number=0&ot=&sl=[]&sort="
    },
    {
        "d": "endic.naver.com",
        "b": "ndic",
        "u": "http://endic.naver.com/search.nhn?query={{{s}}}"
    },
    {
        "d": "ndla.no",
        "b": "ndla",
        "u": "https://ndla.no/en/search/apachesolr_search/{{{s}}}?language[]=und&filters=1/"
    },
    {
        "d": "ndlonline.ndl.go.jp",
        "b": "ndl",
        "u": "https://ndlonline.ndl.go.jp/#!/search?keyword={{{s}}}"
    },
    {
        "d": "onesearch.library.nd.edu",
        "b": "nd",
        "u": "https://onesearch.library.nd.edu/primo-explore/search?query=any,contains,{{{s}}}&tab=onesearch&search_scope=malc_blended&vid=NDU&lang=en_US&offset=0"
    },
    {
        "d": "ndpr.nd.edu",
        "b": "ndpr",
        "u": "http://ndpr.nd.edu/search/?search_keyword=&as_sitesearch=ndpr.nd.edu&q={{{s}}}"
    },
    {
        "d": "recherche.nebis.ch",
        "b": "nebis",
        "u": "https://recherche.nebis.ch/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=NEBIS"
    },
    {
        "d": "www.neb.com",
        "b": "neb",
        "u": "https://www.neb.com/search?q={{{s}}}"
    },
    {
        "d": "ned.ipac.caltech.edu",
        "b": "ned",
        "u": "http://ned.ipac.caltech.edu/cgi-bin/objsearch?objname={{{s}}}"
    },
    {
        "d": "www.needsnest.com",
        "b": "needsnest",
        "u": "https://www.needsnest.com/search/?search_keywords={{{s}}}"
    },
    {
        "d": "www.nejm.org",
        "b": "nejm",
        "u": "http://www.nejm.org/search?q={{{s}}}&asug="
    },
    {
        "d": "www.nerdwallet.com",
        "b": "nerdwallet",
        "u": "http://www.nerdwallet.com/search/results#q={{{s}}}"
    },
    {
        "d": "www.ne.se",
        "b": "ne.se",
        "u": "http://www.ne.se/s%C3%B6k/?t=uppslagsverk&q={{{s}}}"
    },
    {
        "d": "www.ne.se",
        "b": "nes",
        "u": "http://www.ne.se/sok?q={{{s}}}"
    },
    {
        "d": "www.nestoria.de",
        "b": "nestde",
        "u": "http://www.nestoria.de/{{{s}}}"
    },
    {
        "d": "www.nestoria.co.uk",
        "b": "nestuk",
        "u": "http://www.nestoria.co.uk/{{{s}}} "
    },
    {
        "d": "networkx.lanl.gov",
        "b": "networkx",
        "u": "http://networkx.lanl.gov/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.newhomesource.com",
        "b": "newhomes",
        "u": "https://www.newhomesource.com/locationhandler?searchtext={{{s}}}"
    },
    {
        "d": "www.newport.com",
        "b": "newport",
        "u": "https://www.newport.com/search/?text={{{s}}}"
    },
    {
        "d": "newsela.com",
        "b": "newsela",
        "u": "https://newsela.com/search/#/?needle={{{s}}}"
    },
    {
        "d": "www.neyzen.com",
        "b": "neyzen",
        "u": "http://www.neyzen.com/aramasonuc.html?q={{{s}}}"
    },
    {
        "d": "books.google.com",
        "b": "ngram",
        "u": "http://books.google.com/ngrams/graph?content={{{s}}}&year_start=1800&year_end=2000&corpus=15&smoothing=3"
    },
    {
        "d": "books.google.com",
        "b": "ngrams",
        "u": "https://books.google.com/ngrams/graph?content={{{s}}}&year_start=1800&year_end=2000"
    },
    {
        "d": "books.google.com",
        "b": "ngr",
        "u": "https://books.google.com/ngrams/graph?content={{{s}}}&year_start=1850&year_end=2009&corpus=15&smoothing=0"
    },
    {
        "d": "www.bibleserver.com",
        "b": "ngü",
        "u": "http://www.bibleserver.com/search/NG%C3%9C/{{{s}}}"
    },
    {
        "d": "nhd.heinle.com",
        "b": "nhd",
        "u": "http://nhd.heinle.com/Definition.aspx?word={{{s}}}"
    },
    {
        "d": "www.nhs.uk",
        "b": "nhs",
        "u": "http://www.nhs.uk/Search/?q={{{s}}}"
    },
    {
        "d": "www.nice.org.uk",
        "b": "nice",
        "u": "https://www.nice.org.uk/search?q={{{s}}}"
    },
    {
        "d": "www.niche.com",
        "b": "niche",
        "u": "https://www.niche.com/search/?q={{{s}}}"
    },
    {
        "d": "www.nielsen.com",
        "b": "nielsen",
        "u": "https://www.nielsen.com/us/en/search.html?q={{{s}}}&sp_cs=UTF-8"
    },
    {
        "d": "search.nih.gov",
        "b": "nih",
        "u": "https://search.nih.gov/search?utf8=%E2%9C%93&affiliate=nih&query={{{s}}}&commit=Search&btnG.x=0&btnG.y=0&btnG=search"
    },
    {
        "d": "niice.co",
        "b": "niice",
        "u": "http://niice.co/?search={{{s}}}"
    },
    {
        "d": "www.niif.hu",
        "b": "niif",
        "u": "http://www.niif.hu/search/node/{{{s}}}"
    },
    {
        "d": "www.nisanyansozluk.com",
        "b": "nisanyan",
        "u": "http://www.nisanyansozluk.com/?k={{{s}}}"
    },
    {
        "d": "www.notesinspanish.com",
        "b": "nis",
        "u": "http://www.notesinspanish.com/?s={{{s}}}"
    },
    {
        "d": "www.nitrc.org",
        "b": "nitrc",
        "u": "http://www.nitrc.org/search/?type_of_search=group&term[]={{{s}}}"
    },
    {
        "d": "www.biblestudytools.com",
        "b": "niv",
        "u": "http://www.biblestudytools.com/search/?q={{{s}}}&s=Bibles&t=niv"
    },
    {
        "d": "www.biblegateway.com",
        "b": "nkj",
        "u": "https://www.biblegateway.com/quicksearch/?quicksearch={{{s}}}&qs_version=NKJV"
    },
    {
        "d": "krdic.naver.com",
        "b": "nkr",
        "u": "http://krdic.naver.com/search.nhn?query={{{s}}}&kind=all"
    },
    {
        "d": "ncatlab.org",
        "b": "nlab",
        "u": "https://ncatlab.org/nlab/search?query={{{s}}}"
    },
    {
        "d": "catalogue.nla.gov.au",
        "b": "nla",
        "u": "http://catalogue.nla.gov.au/Search/Home?lookfor={{{s}}}"
    },
    {
        "d": "www.bibleserver.com",
        "b": "nlb",
        "u": "https://www.bibleserver.com/text/NLB/{{{s}}}"
    },
    {
        "d": "ncatlab.org",
        "b": "nl",
        "u": "http://ncatlab.org/nlab/search?query={{{s}}}"
    },
    {
        "d": "newleftreview.org",
        "b": "nlr",
        "u": "https://newleftreview.org/search/hybrid?query={{{s}}}"
    },
    {
        "d": "nl.wikipedia.org",
        "b": "nlwi",
        "u": "https://nl.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "nolife-wiki.fr",
        "b": "nlw",
        "u": "http://nolife-wiki.fr/index.php?title=Spécial%3ARecherche&go=Lire&search={{{s}}}"
    },
    {
        "d": "nmlegis.gov",
        "b": "nmlegis",
        "u": "https://nmlegis.gov/?q={{{s}}}"
    },
    {
        "d": "www.nmsu.edu",
        "b": "nmsu",
        "u": "https://www.nmsu.edu/search_results.html?q={{{s}}}"
    },
    {
        "d": "nutrimatic.org",
        "b": "nmt",
        "u": "https://nutrimatic.org/?q={{{s}}}"
    },
    {
        "d": "registry.faa.gov",
        "b": "nnumber",
        "u": "http://registry.faa.gov/aircraftinquiry/NNum_Results.aspx?NNumbertxt={{{s}}}"
    },
    {
        "d": "www.nolo.com",
        "b": "nolo",
        "u": "https://www.nolo.com/search2?type=all&query={{{s}}}&location="
    },
    {
        "d": "nomadlist.com",
        "b": "nomad",
        "u": "https://nomadlist.com/?q={{{s}}}"
    },
    {
        "d": "nomnompaleo.com",
        "b": "nomnom",
        "u": "https://nomnompaleo.com/?s={{{s}}}"
    },
    {
        "d": "www.noodlechinese.com",
        "b": "noodle",
        "u": "https://www.noodlechinese.com/search?q={{{s}}} "
    },
    {
        "d": "www.nordicnames.de",
        "b": "nordicnames",
        "u": "https://www.nordicnames.de/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "ordbok.uib.no",
        "b": "norsk",
        "u": "http://ordbok.uib.no/perl/ordbok.cgi?OPP={{{s}}}&ant_bokmaal=5&ant_nynorsk=5&begge=+&ordbok=begge"
    },
    {
        "d": "www.nosdeputes.fr",
        "b": "nosdeputes",
        "u": "https://www.nosdeputes.fr/recherche/{{{s}}}"
    },
    {
        "d": "hss3uro2hsxfogfq.onion",
        "b": "notevil",
        "u": "http://hss3uro2hsxfogfq.onion/index.php?q={{{s}}}"
    },
    {
        "d": "www.verbix.com",
        "b": "noverbix",
        "u": "http://www.verbix.com/webverbix/go.php?D1=25&T1={{{s}}}"
    },
    {
        "d": "www.parcs.at",
        "b": "npat",
        "u": "http://www.parcs.at/npa/mmd_data_by.php?q={{{s}}}&btnG=Suche+starten&searchval=30000"
    },
    {
        "d": "www.npmtrends.com",
        "b": "npmtrends",
        "u": "https://www.npmtrends.com/{{{s}}}"
    },
    {
        "d": "openscience.si",
        "b": "npoz",
        "u": "http://openscience.si/NaprednoIskanje.aspx?t=s&q=1:0:{{{s}}};"
    },
    {
        "d": "www.nps.gov",
        "b": "nps",
        "u": "http://www.nps.gov/search/?affiliate=nps&query={{{s}}}"
    },
    {
        "d": "www.drworkout.fitness",
        "b": "nsuns",
        "u": "https://www.drworkout.fitness/?s={{{s}}}"
    },
    {
        "d": "www.nsw.gov.au",
        "b": "nswgov",
        "u": "https://www.nsw.gov.au/search-google/?Search={{{s}}}"
    },
    {
        "d": "www.ntnu.edu",
        "b": "ntnu",
        "u": "http://www.ntnu.edu/sok?query={{{s}}}"
    },
    {
        "d": "ntrs.nasa.gov",
        "b": "ntrs",
        "u": "https://ntrs.nasa.gov/?Ntt={{{s}}}&Ntx=mode matchallpartial&Nm=123|Collection|NASA STI||17|Collection|NACA"
    },
    {
        "d": "www.nutritionix.com",
        "b": "ntx",
        "u": "https://www.nutritionix.com/search?q={{{s}}}"
    },
    {
        "d": "numbermatics.com",
        "b": "number",
        "u": "http://numbermatics.com/n/{{{s}}}/"
    },
    {
        "d": "en.numista.com",
        "b": "numista",
        "u": "https://en.numista.com/catalogue/index.php?r={{{s}}}&mode=simplifie&p=1"
    },
    {
        "d": "nusearch.nottingham.ac.uk",
        "b": "nusearch",
        "u": "http://nusearch.nottingham.ac.uk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28UNUK%29%2Cscope%3A%28unuk_pda_ebl%29&frbg=&tab=default_tab&dstmp=1430162925299&srt=rank&ct=search&mode=Basic&dum=true&indx=1&tb=t&vl(freeText0)={{{s}}}&fn=search&vid=UNUK"
    },
    {
        "d": "nutritiondata.self.com",
        "b": "nutridata",
        "u": "http://nutritiondata.self.com/foods-{{{s}}}}000000000000000000000.html"
    },
    {
        "d": "nutritionfacts.org",
        "b": "nutritionfacts",
        "u": "https://nutritionfacts.org/?s={{{s}}}"
    },
    {
        "d": "nvd.nist.gov",
        "b": "nvd",
        "u": "https://nvd.nist.gov/vuln/search/results?form_type=Basic&results_type=overview&query={{{s}}}&search_type=all"
    },
    {
        "d": "nvd.nist.gov",
        "b": "nvds",
        "u": "https://nvd.nist.gov/vuln/search/results?form_type=Basic&results_type=overview&query={{{s}}}&search_type=all"
    },
    {
        "d": "webbook.nist.gov",
        "b": "nwb",
        "u": "https://webbook.nist.gov/cgi/cbook.cgi?Name={{{s}}}&Units=SI"
    },
    {
        "d": "ninjawords.com",
        "b": "nw",
        "u": "http://ninjawords.com/{{{s}}}"
    },
    {
        "d": "nwn.wikia.com",
        "b": "nwn",
        "u": "http://nwn.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "networkx.lanl.gov",
        "b": "nx",
        "u": "http://networkx.lanl.gov/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "browse.nypl.org",
        "b": "nypl",
        "u": "https://browse.nypl.org/iii/encore/search/C__S{{{s}}}__Orightresult__U?lang=eng"
    },
    {
        "d": "www.nyse.com",
        "b": "nyse",
        "u": "https://www.nyse.com/quote/XNYS:{{{s}}}"
    },
    {
        "d": "cooking.nytimes.com",
        "b": "nytc",
        "u": "http://cooking.nytimes.com/search?q={{{s}}}"
    },
    {
        "d": "nzf.org.nz",
        "b": "nzf",
        "u": "https://nzf.org.nz/Search/Results?term={{{s}}}"
    },
    {
        "d": "tepuna.on.worldcat.org",
        "b": "nzlibraries",
        "u": "https://tepuna.on.worldcat.org/external-search?queryString={{{s}}}"
    },
    {
        "d": "search.nzqa.govt.nz",
        "b": "nzqa",
        "u": "https://search.nzqa.govt.nz/apps/search/?q={{{s}}}"
    },
    {
        "d": "www.oxfordlearnersdictionaries.com",
        "b": "oaad",
        "u": "https://www.oxfordlearnersdictionaries.com/definition/american_english/{{{s}}}"
    },
    {
        "d": "openaccessbutton.org",
        "b": "oab",
        "u": "https://openaccessbutton.org/?url={{{s}}}"
    },
    {
        "d": "www.oxforddictionaries.com",
        "b": "oad",
        "u": "http://www.oxforddictionaries.com/definition/american_english/{{{s}}}"
    },
    {
        "d": "www.oxfordlearnersdictionaries.com",
        "b": "oald",
        "u": "https://www.oxfordlearnersdictionaries.com/search/english/?q={{{s}}}"
    },
    {
        "d": "onlinebooks.library.upenn.edu",
        "b": "oba",
        "u": "http://onlinebooks.library.upenn.edu/webbin/book/search?author={{{s}}}&amode=words"
    },
    {
        "d": "bible.oremus.org",
        "b": "obb",
        "u": "http://bible.oremus.org/?passage={{{s}}}"
    },
    {
        "d": "engine-codes.com",
        "b": "obd",
        "u": "http://engine-codes.com/search_codes.php?q={{{s}}}"
    },
    {
        "d": "www.worldcat.org",
        "b": "oclc",
        "u": "https://www.worldcat.org/search?q={{{s}}}"
    },
    {
        "d": "openclassrooms.com",
        "b": "oc",
        "u": "https://openclassrooms.com/courses?q={{{s}}}"
    },
    {
        "d": "search.mit.edu",
        "b": "ocw",
        "u": "http://search.mit.edu/search?site=ocw&client=mit&output=xml_no_dtd&proxystylesheet=http://ocw.mit.edu/search/google-ocw.xsl&proxyreload=1&q={{{s}}}"
    },
    {
        "d": "odb.org",
        "b": "odb",
        "u": "https://odb.org/search?q={{{s}}}"
    },
    {
        "d": "data.europa.eu",
        "b": "odeu",
        "u": "https://data.europa.eu/euodp/en/data/dataset?q={{{s}}}"
    },
    {
        "d": "en.oxforddictionaries.com",
        "b": "odic",
        "u": "https://en.oxforddictionaries.com/search?utf8=%E2%9C%93&filter=dictionary&query={{{s}}}"
    },
    {
        "d": "www.oxforddnb.com",
        "b": "odnb",
        "u": "http://www.oxforddnb.com/search?q={{{s}}}"
    },
    {
        "d": "oxforddictionaries.com",
        "b": "od",
        "u": "http://oxforddictionaries.com/definition/english/{{{s}}}?q={{{s}}}"
    },
    {
        "d": "public.opendatasoft.com",
        "b": "ods",
        "u": "http://public.opendatasoft.com/explore/dataset/european-train-stations/?q={{{s}}}"
    },
    {
        "d": "www.oeconsortium.org",
        "b": "oec",
        "u": "http://www.oeconsortium.org/courses/search/?search= {{{s}}} "
    },
    {
        "d": "www.oed.com",
        "b": "oed",
        "u": "http://www.oed.com/search?searchType=dictionary&q={{{s}}}&_searchBtn=Search"
    },
    {
        "d": "www.oercommons.org",
        "b": "oer",
        "u": "http://www.oercommons.org/search?f.search={{{s}}}"
    },
    {
        "d": "world.openfoodfacts.org",
        "b": "off",
        "u": "http://world.openfoodfacts.org/cgi/search.pl?search_terms={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "og",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aomniglot.com"
    },
    {
        "d": "oxfordindex.oup.com",
        "b": "oi",
        "u": "http://oxfordindex.oup.com/search?q={{{s}}}"
    },
    {
        "d": "www.oiseaux.net",
        "b": "oiseaux",
        "u": "http://www.oiseaux.net/search/?q={{{s}}}"
    },
    {
        "d": "ojibwe.lib.umn.edu",
        "b": "ojen",
        "u": "https://ojibwe.lib.umn.edu/search?utf8=%E2%9C%93&q={{{s}}}&commit=Search&type=ojibwe"
    },
    {
        "d": "www.oxfordlearnersdictionaries.com",
        "b": "olad",
        "u": "http://www.oxfordlearnersdictionaries.com/definition/american_english/{{{s}}}"
    },
    {
        "d": "www.dizionario-italiano.it",
        "b": "olivetti",
        "u": "https://www.dizionario-italiano.it/dizionario-italiano.php?parola={{{s}}}"
    },
    {
        "d": "www.onelook.com",
        "b": "olth",
        "u": "http://www.onelook.com/reverse-dictionary.shtml?s={{{s}}}"
    },
    {
        "d": "www.omegawiki.org",
        "b": "omegawiki",
        "u": "http://www.omegawiki.org/index.php?search={{{s}}}"
    },
    {
        "d": "forum.omeka.org",
        "b": "omeka",
        "u": "https://forum.omeka.org/search?q={{{s}}}"
    },
    {
        "d": "omim.org",
        "b": "omim",
        "u": "http://omim.org/search?index=entry&sort=score+desc%2C+prefix_sort+desc&start=1&limit=10&search={{{s}}} "
    },
    {
        "d": "onelook.com",
        "b": "onelook",
        "u": "http://onelook.com/?w={{{s}}}"
    },
    {
        "d": "onelook.com",
        "b": "onelookr",
        "u": "http://onelook.com/?w=*&loc=revfp2&clue={{{s}}}"
    },
    {
        "d": "www.onelook.com",
        "b": "onelookth",
        "u": "http://www.onelook.com/reverse-dictionary.shtml?s={{{s}}}"
    },
    {
        "d": "www.onestopenglish.com",
        "b": "onestopenglish",
        "u": "http://www.onestopenglish.com/searchResults.aspx?keywords={{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "onorsk",
        "u": "http://www.perseus.tufts.edu/hopper/morph?l={{{s}}}&la=non"
    },
    {
        "d": "www.ons.gov.uk",
        "b": "ons",
        "u": "https://www.ons.gov.uk/search?q={{{s}}}"
    },
    {
        "d": "www.oolone.com",
        "b": "oolone",
        "u": "http://www.oolone.com/?search={{{s}}}"
    },
    {
        "d": "onelook.com",
        "b": "o",
        "u": "http://onelook.com/?w={{{s}}}&ls=a"
    },
    {
        "d": "www.reddit.com",
        "b": "ootl",
        "u": "https://www.reddit.com/r/OutOfTheLoop/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "lhgrw.gbv.de",
        "b": "opachgw",
        "u": "https://lhgrw.gbv.de/DB=1/SET=18/TTL=1/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM={{{s}}}"
    },
    {
        "d": "hu-berlin.hosted.exlibrisgroup.com",
        "b": "opachu",
        "u": "https://hu-berlin.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&search_scope=default_scope&displayField=all&pcAvailabiltyMode=false&dum=true&vid=hub_ub&displayMode=full&bulkSize=30&mode=Basic&tab=default_tab&highlight=true&institution=HUB_UB&sortby=rank&lang=de_DE"
    },
    {
        "d": "opac.ub.uni-potsdam.de",
        "b": "opacp",
        "u": "https://opac.ub.uni-potsdam.de/DB=1/SET=4/TTL=1/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM={{{s}}}"
    },
    {
        "d": "openbadges.it",
        "b": "openbadges",
        "u": "https://openbadges.it/search/{{{s}}} "
    },
    {
        "d": "openparliament.ca",
        "b": "openparl",
        "u": "https://openparliament.ca/search/?q={{{s}}}"
    },
    {
        "d": "www.openrent.co.uk",
        "b": "openrent",
        "u": "https://www.openrent.co.uk/properties-to-rent/{{{s}}}"
    },
    {
        "d": "www.openrice.com",
        "b": "openrice",
        "u": "http://www.openrice.com/zh/hongkong/restaurant/sr1.htm?tc=sr1quick&s=1&region=0&inputstrwhat={{{s}}}&inputstrwhere="
    },
    {
        "d": "www.opensecrets.org",
        "b": "opensecrets",
        "u": "http://www.opensecrets.org/usearch/?q={{{s}}}"
    },
    {
        "d": "cnx.org",
        "b": "openstax",
        "u": "https://cnx.org/search?q={{{s}}}"
    },
    {
        "d": "openthebox.be",
        "b": "openthebox",
        "u": "https://openthebox.be/search?q={{{s}}}&v=t"
    },
    {
        "d": "search.open.ac.uk",
        "b": "openuni",
        "u": "http://search.open.ac.uk/public/search/results?q={{{s}}}"
    },
    {
        "d": "openplaques.org",
        "b": "op",
        "u": "https://openplaques.org/search?utf8=%E2%9C%93&phrase={{{s}}}"
    },
    {
        "d": "aplicacions.llengua.gencat.cat",
        "b": "optimot",
        "u": "http://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?action=Principal&method=cerca_generica&input_cercar={{{s}}}&tipusCerca=cerca.tot"
    },
    {
        "d": "www.ouquoicomment.ch",
        "b": "oqc",
        "u": "https://www.ouquoicomment.ch/?s={{{s}}}&search_by=all"
    },
    {
        "d": "orcid.org",
        "b": "orcid",
        "u": "https://orcid.org/orcid-search/quick-search?searchQuery={{{s}}} "
    },
    {
        "d": "beta.ordbogen.com",
        "b": "ordbog",
        "u": "https://beta.ordbogen.com/da/search#/{{{s}}}"
    },
    {
        "d": "www.ordbogen.com",
        "b": "ordbogen",
        "u": "http://www.ordbogen.com/opslag.php?word={{{s}}}&dict=auto"
    },
    {
        "d": "ordbok.uib.no",
        "b": "ordbok",
        "u": "http://ordbok.uib.no/perl/ordbok.cgi?OPP=+{{{s}}}&ant_bokmaal=5&ant_nynorsk=5&begge=+&ordbok=begge"
    },
    {
        "d": "www.ord.se",
        "b": "ordfr",
        "u": "http://www.ord.se/oversattning/franska/?s={{{s}}}&l=FRASVE"
    },
    {
        "d": "ordnet.dk",
        "b": "ordnet.dk",
        "u": "http://ordnet.dk/ddo/ordbog?query={{{s}}}+&search=S%C3%B8g"
    },
    {
        "d": "www.ordnett.no",
        "b": "ordnett",
        "u": "https://www.ordnett.no/search?language=no&phrase={{{s}}}"
    },
    {
        "d": "ne.ord.se",
        "b": "ord",
        "u": "https://ne.ord.se/ordbok/svenska/engelska/s%C3%B6k/{{{s}}}"
    },
    {
        "d": "www.ord.se",
        "b": "ordsv",
        "u": "http://www.ord.se/oversattning/Svenska/?s={{{s}}}&l=SVESVE"
    },
    {
        "d": "duckduckgo.com",
        "b": "oregon",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Atheoregoncoast.info"
    },
    {
        "d": "www.orfoqrafiya.az",
        "b": "orfoqrafiya",
        "u": "http://www.orfoqrafiya.az/aze/?q={{{s}}}"
    },
    {
        "d": "bibsys-almaprimo.hosted.exlibrisgroup.com",
        "b": "oriantnu",
        "u": "https://bibsys-almaprimo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=NTNU_UB&lang=no_NO&offset=0"
    },
    {
        "d": "or.justice.cz",
        "b": "or",
        "u": "https://or.justice.cz/ias/ui/rejstrik-$firma?jenPlatne=PLATNE&nazev={{{s}}}&polozek=50&typHledani=STARTS_WITH"
    },
    {
        "d": "orthodoxwiki.org",
        "b": "orthodoxwiki",
        "u": "http://orthodoxwiki.org/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "orthonet.sdv.fr",
        "b": "orthonet",
        "u": "http://orthonet.sdv.fr/php/rech_mot.php?mot={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.oru.se",
        "b": "oru",
        "u": "https://www.oru.se/funktioner/sokresultat/?query={{{s}}}"
    },
    {
        "d": "www.osapublishing.org",
        "b": "osa",
        "u": "https://www.osapublishing.org/search.cfm?q={{{s}}}"
    },
    {
        "d": "www.eki.ee",
        "b": "õs",
        "u": "http://www.eki.ee/dict/qs/index.cgi?Q={{{s}}}"
    },
    {
        "d": "osf.io",
        "b": "osf",
        "u": "https://osf.io/search/?q={{{s}}}"
    },
    {
        "d": "www.oslo.kommune.no",
        "b": "oslo",
        "u": "https://www.oslo.kommune.no/sokeresultater/?q={{{s}}}"
    },
    {
        "d": "encore.oslri.net",
        "b": "oslri",
        "u": "https://encore.oslri.net/iii/encore/search?target={{{s}}}"
    },
    {
        "d": "www.ostarrichi.org",
        "b": "ostarrichi",
        "u": "http://www.ostarrichi.org/dictionary-search.html?search={{{s}}}"
    },
    {
        "d": "www.openthesaurus.de",
        "b": "othde",
        "u": "https://www.openthesaurus.de/synonyme/{{{s}}}"
    },
    {
        "d": "onelook.com",
        "b": "otrd",
        "u": "http://onelook.com/thesaurus/?s={{{s}}}"
    },
    {
        "d": "www.ottobib.com",
        "b": "ottobibtex",
        "u": "http://www.ottobib.com/isbn/{{{s}}}/bibtex"
    },
    {
        "d": "ottawa.ca",
        "b": "ott",
        "u": "https://ottawa.ca/en/search?searchfield={{{s}}}"
    },
    {
        "d": "www.ouicar.fr",
        "b": "ouicar",
        "u": "http://www.ouicar.fr/car/search?where={{{s}}}&from=ddgbang"
    },
    {
        "d": "www.outsideonline.com",
        "b": "outsidemag",
        "u": "https://www.outsideonline.com/search/site/{{{s}}}"
    },
    {
        "d": "webstersdictionary1828.com",
        "b": "owd",
        "u": "http://webstersdictionary1828.com/Dictionary/{{{s}}}"
    },
    {
        "d": "buscador.lechuza.org",
        "b": "owl",
        "u": "http://buscador.lechuza.org/resultados.php?texto={{{s}}}&xx=buscar"
    },
    {
        "d": "www.oxfordbibliographies.com",
        "b": "oxbib",
        "u": "http://www.oxfordbibliographies.com/search?q={{{s}}}"
    },
    {
        "d": "www.oxforddictionaries.com",
        "b": "oxed",
        "u": "http://www.oxforddictionaries.com/definition/english/{{{s}}}"
    },
    {
        "d": "es.oxforddictionaries.com",
        "b": "oxenes",
        "u": "https://es.oxforddictionaries.com/translate/english-spanish/{{{s}}}"
    },
    {
        "d": "es.oxforddictionaries.com",
        "b": "oxesen",
        "u": "https://es.oxforddictionaries.com/translate/spanish-english/{{{s}}}"
    },
    {
        "d": "www.oxfordlearnersdictionaries.com",
        "b": "oxfordlearners",
        "u": "http://www.oxfordlearnersdictionaries.com/definition/english/{{{s}}}"
    },
    {
        "d": "www.oxfordreference.com",
        "b": "oxfordref",
        "u": "http://www.oxfordreference.com/search?siteToSearch=aup&q={{{s}}}"
    },
    {
        "d": "premium.oxforddictionaries.com",
        "b": "oxfren",
        "u": "https://premium.oxforddictionaries.com/translate/french-english/{{{s}}}?q=insoumise&searchDictCode=english-french"
    },
    {
        "d": "www.oxfordlearnersdictionaries.com",
        "b": "oxl",
        "u": "https://www.oxfordlearnersdictionaries.com/definition/english/{{{s}}}_1?isEntryInOtherDict=false"
    },
    {
        "d": "www.lexico.com",
        "b": "ox",
        "u": "https://www.lexico.com/search?utf8=%E2%9C%93&filter=dictionary&dictionary=en&query={{{s}}}"
    },
    {
        "d": "en.oxforddictionaries.com",
        "b": "oxs",
        "u": "https://en.oxforddictionaries.com/thesaurus/{{{s}}}"
    },
    {
        "d": "en.oxforddictionaries.com",
        "b": "oxt",
        "u": "https://en.oxforddictionaries.com/thesaurus/{{{s}}}"
    },
    {
        "d": "www.oyez.org",
        "b": "oyez",
        "u": "https://www.oyez.org/search/{{{s}}}"
    },
    {
        "d": "www.oyez.org",
        "b": "oyz",
        "u": "https://www.oyez.org/search/{{{s}}}"
    },
    {
        "d": "www.ozdic.com",
        "b": "ozdic",
        "u": "http://www.ozdic.com/collocation-dictionary/{{{s}}}"
    },
    {
        "d": "www.pagesjaunes.fr",
        "b": "pagesblanches",
        "u": "https://www.pagesjaunes.fr/pagesblanches/recherche?quoiqui={{{s}}}"
    },
    {
        "d": "encore.palatinelibrary.org",
        "b": "palatinelibrary",
        "u": "http://encore.palatinelibrary.org/iii/encore/search?target={{{s}}}"
    },
    {
        "d": "paleoleap.com",
        "b": "paleoleap",
        "u": "http://paleoleap.com/?s={{{s}}}"
    },
    {
        "d": "www.paleohacks.com",
        "b": "paleo",
        "u": "https://www.paleohacks.com/searches?utf8=%E2%9C%93&query={{{s}}}&commit=Search"
    },
    {
        "d": "www.ilpalio.siena.it",
        "b": "palio",
        "u": "http://www.ilpalio.siena.it/5/cerca.aspx?q={{{s}}}"
    },
    {
        "d": "panlexicon.com",
        "b": "pan",
        "u": "https://panlexicon.com/?q={{{s}}} "
    },
    {
        "d": "www.pseudomonas.com",
        "b": "pao1",
        "u": "http://www.pseudomonas.com/searchAnnotation.do?strain_ids=107&field1=commonNameFields&input1={{{s}}}"
    },
    {
        "d": "paperity.org",
        "b": "paper",
        "u": "https://paperity.org/search/?q={{{s}}}"
    },
    {
        "d": "scholar.google.com",
        "b": "papers",
        "u": "http://scholar.google.com/scholar?as_ylo=2000&q={{{s}}}&as_sdt=1,5&as_vis=1&num=100"
    },
    {
        "d": "parts.io",
        "b": "parts",
        "u": "http://parts.io/search/term-{{{s}}} "
    },
    {
        "d": "patents.google.com",
        "b": "patent",
        "u": "https://patents.google.com/?oq={{{s}}}"
    },
    {
        "d": "www.pauker.at",
        "b": "pat.fi",
        "u": "http://www.pauker.at/pauker/DE_DE/FI/wb/?modus=&suche={{{s}}}&page=1#"
    },
    {
        "d": "patft.uspto.gov",
        "b": "patft",
        "u": "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=0&f=S&l=50&d=PTXT&OS=&RS=%22{{{s}}}%22&Query=%22{{{s}}}%22&TD=&Srch1=%22{{{s}}}%22&NextList1=xxx"
    },
    {
        "d": "patents.google.com",
        "b": "patg",
        "u": "https://patents.google.com/?q={{{s}}}"
    },
    {
        "d": "www.patheos.com",
        "b": "patheos",
        "u": "https://www.patheos.com/search?q={{{s}}}"
    },
    {
        "d": "patient.info",
        "b": "patientinfo",
        "u": "https://patient.info/search.asp?searchterm={{{s}}}"
    },
    {
        "d": "patient.info",
        "b": "patient",
        "u": "https://patient.info/search.asp?searchterm={{{s}}}&searchcoll=All"
    },
    {
        "d": "patient.info",
        "b": "patientuk",
        "u": "https://patient.info/search.asp?searchterm={{{s}}}"
    },
    {
        "d": "www.pauker.at",
        "b": "patm",
        "u": "http://www.pauker.at/app.php/DE_DE/?s={{{s}}}#suche"
    },
    {
        "d": "www.pauker.at",
        "b": "pat",
        "u": "http://www.pauker.at/pauker/DE_DE/EN/wb?modus=&suche={{{s}}}&page=1#"
    },
    {
        "d": "www.pauker.at",
        "b": "pat.pt",
        "u": "http://www.pauker.at/pauker/DE_DE/PT/wb/?modus=&suche={{{s}}}&page=1#"
    },
    {
        "d": "www.pauker.at",
        "b": "pat.sv",
        "u": "http://www.pauker.at/pauker/DE_DE/SE/wb?modus=&suche={{{s}}}&page=1#"
    },
    {
        "d": "www.pauker.at",
        "b": "pauker",
        "u": "http://www.pauker.at/pauker/DE_EN/EN/wb/?modus=&suche={{{s}}}&page=1#"
    },
    {
        "d": "referenceworks.brillonline.com",
        "b": "pauly",
        "u": "http://referenceworks.brillonline.com/search?s.q={{{s}}}&s.f.s2_parent=s.f.book.der-neue-pauly&search-go=Search"
    },
    {
        "d": "www.pagesjaunes.fr",
        "b": "pbl",
        "u": "http://www.pagesjaunes.fr/pagesblanches/recherche?quoiqui={{{s}}}&proximite=0"
    },
    {
        "d": "catalog.princeton.edu",
        "b": "pcat",
        "u": "https://catalog.princeton.edu/catalog?utf8=✓&search_field=all_fields&q={{{s}}}"
    },
    {
        "d": "pcoo.gov.ph",
        "b": "pcoo",
        "u": "https://pcoo.gov.ph/?s={{{s}}}"
    },
    {
        "d": "www.presidentschoice.ca",
        "b": "pc",
        "u": "http://www.presidentschoice.ca/en_CA/search-page.query@{{{s}}}.html"
    },
    {
        "d": "www.rcsb.org",
        "b": "pdb",
        "u": "http://www.rcsb.org/pdb/search/navbarsearch.do?f=&q={{{s}}}"
    },
    {
        "d": "pocket.dict.cc",
        "b": "pdict.cc",
        "u": "http://pocket.dict.cc/?s={{{s}}}"
    },
    {
        "d": "fedsearch.proquest.com",
        "b": "pdqtglobal",
        "u": "http://fedsearch.proquest.com/search/sru/pqdtglobal?operation=searchRetrieve&version=1.2&maximumRecords=30&query={{{s}}}"
    },
    {
        "d": "pqdtopen.proquest.com",
        "b": "pdqtopen",
        "u": "https://pqdtopen.proquest.com/results.html?QryTxt={{{s}}}"
    },
    {
        "d": "folkets-lexikon.csc.kth.se",
        "b": "pd",
        "u": "http://folkets-lexikon.csc.kth.se/folkets/folkets.en.html#lookup&{{{s}}}&0"
    },
    {
        "d": "pediaa.com",
        "b": "pediaa",
        "u": "https://pediaa.com/?s={{{s}}}"
    },
    {
        "d": "www.infopedia.pt",
        "b": "pe",
        "u": "https://www.infopedia.pt/dicionarios/pesquisa/{{{s}}}"
    },
    {
        "d": "www.pedigreedatabase.com",
        "b": "pedigree",
        "u": "http://www.pedigreedatabase.com/search.html?q={{{s}}} "
    },
    {
        "d": "pegasos.kirjas.to",
        "b": "pegasos",
        "u": "http://pegasos.kirjas.to/selaushaku.asp?kohde=vapaasana&hakuehto={{{s}}}"
    },
    {
        "d": "onlinebooks.library.upenn.edu",
        "b": "pennbooks",
        "u": "https://onlinebooks.library.upenn.edu/webbin/book/search?author=&amode=words&title={{{s}}}&tmode=words&c=x"
    },
    {
        "d": "www.pepperplate.com",
        "b": "pepperplate",
        "u": "http://www.pepperplate.com/search/?text={{{s}}}"
    },
    {
        "d": "www.persee.fr",
        "b": "persee",
        "u": "http://www.persee.fr/search?q={{{s}}}"
    },
    {
        "d": "www.pathfindersonline.org",
        "b": "pfonline",
        "u": "http://www.pathfindersonline.org/component/search/?searchword={{{s}}}&ordering=newest&searchphrase=all"
    },
    {
        "d": "gutenberg.spiegel.de",
        "b": "pgde",
        "u": "http://gutenberg.spiegel.de/suche?q={{{s}}}"
    },
    {
        "d": "www.pharmgkb.org",
        "b": "pgkb",
        "u": "https://www.pharmgkb.org/search?query={{{s}}}"
    },
    {
        "d": "www.pgri.or.id",
        "b": "pgri",
        "u": "http://www.pgri.or.id/?s={{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "pgr",
        "u": "http://www.perseus.tufts.edu/hopper/morph?l={{{s}}}&la=greek"
    },
    {
        "d": "www.pharmgkb.org",
        "b": "pharmgkb",
        "u": "https://www.pharmgkb.org/search?query={{{s}}}"
    },
    {
        "d": "phet.colorado.edu",
        "b": "phet",
        "u": "http://phet.colorado.edu/en/search?q={{{s}}}"
    },
    {
        "d": "philpapers.org",
        "b": "philpapers",
        "u": "http://philpapers.org/s/{{{s}}}"
    },
    {
        "d": "latin.packhum.org",
        "b": "phi",
        "u": "http://latin.packhum.org/search?q={{{s}}}"
    },
    {
        "d": "www.whitepages.com",
        "b": "phone",
        "u": "http://www.whitepages.com/phone/{{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "phrase",
        "u": "https://duckduckgo.com/?q=site:phrases.org.uk%20{{{s}}}"
    },
    {
        "d": "www.pharmawiki.ch",
        "b": "phw",
        "u": "https://www.pharmawiki.ch/wiki/index.php?wiki={{{s}}}"
    },
    {
        "d": "www.physicsclassroom.com",
        "b": "phy",
        "u": "https://www.physicsclassroom.com/?q={{{s}}}"
    },
    {
        "d": "physics.stackexchange.com",
        "b": "physe",
        "u": "https://physics.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.physicsforums.com",
        "b": "physics",
        "u": "https://www.physicsforums.com/search/90229641/?q={{{s}}}&o=relevance "
    },
    {
        "d": "physics.stackexchange.com",
        "b": "physse",
        "u": "https://physics.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "patient.info",
        "b": "pils",
        "u": "http://patient.info/Search.asp?searchTerm={{{s}}}&collections=Condition_Leaflets"
    },
    {
        "d": "dictionary.pinpinchinese.com",
        "b": "pinpin",
        "u": "http://dictionary.pinpinchinese.com/search/t/{{{s}}}"
    },
    {
        "d": "wiki.piratenpartei.de",
        "b": "piratenwiki",
        "u": "https://wiki.piratenpartei.de/Spezial:Suche?search={{{s}}}&fulltext=Suchen"
    },
    {
        "d": "pirsa.org",
        "b": "pirsa",
        "u": "http://pirsa.org/index.php?p=speaker&name={{{s}}}"
    },
    {
        "d": "vortaro.net",
        "b": "piv",
        "u": "http://vortaro.net/#{{{s}}}"
    },
    {
        "d": "peekier.com",
        "b": "pk",
        "u": "https://peekier.com/#!{{{s}}}"
    },
    {
        "d": "www.planespotters.net",
        "b": "plane",
        "u": "http://www.planespotters.net/search.php?q={{{s}}}"
    },
    {
        "d": "planetdepos.com",
        "b": "planetdepos",
        "u": "https://planetdepos.com/?s={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "planetmath",
        "u": "https://github.com/search?l=TeX&q=org%3Aplanetmath+{{{s}}}&type=Topics"
    },
    {
        "d": "powo.science.kew.org",
        "b": "plants",
        "u": "http://powo.science.kew.org/?q={{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "pla",
        "u": "http://www.perseus.tufts.edu/hopper/morph?l={{{s}}}&la=la"
    },
    {
        "d": "plato.stanford.edu",
        "b": "plato",
        "u": "http://plato.stanford.edu/search/searcher.py?query={{{s}}}"
    },
    {
        "d": "www.platt-wb.de",
        "b": "platt",
        "u": "http://www.platt-wb.de/platt-hoch/?term={{{s}}}"
    },
    {
        "d": "pleiades.stoa.org",
        "b": "pleiades",
        "u": "http://pleiades.stoa.org/search?SearchableText={{{s}}}&portal_type=Place&submit=Search"
    },
    {
        "d": "www.plosmedicine.org",
        "b": "plosmed",
        "u": "http://www.plosmedicine.org/search/simple?query={{{s}}}&filterJournals=PLoSMedicine"
    },
    {
        "d": "publiclab.org",
        "b": "pl",
        "u": "http://publiclab.org/search/{{{s}}}"
    },
    {
        "d": "latin.packhum.org",
        "b": "plt",
        "u": "http://latin.packhum.org/search?q={{{s}}}"
    },
    {
        "d": "www.plunket.org.nz",
        "b": "plunket",
        "u": "https://www.plunket.org.nz/home/SearchForm?Search={{{s}}}&action_results=Search"
    },
    {
        "d": "www.pluralsight.com",
        "b": "pluralsight",
        "u": "http://www.pluralsight.com/search/?searchTerm={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "pmd",
        "u": "http://www.ncbi.nlm.nih.gov/pubmed/?term={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "pmid",
        "u": "http://www.ncbi.nlm.nih.gov/pubmed/?term={{{s}}}"
    },
    {
        "d": "search.pmi.org",
        "b": "pmi",
        "u": "https://search.pmi.org/default.aspx?q={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "pm",
        "u": "https://www.ncbi.nlm.nih.gov/pubmed/?term={{{s}}}"
    },
    {
        "d": "muse.jhu.edu",
        "b": "pmuse",
        "u": "https://muse.jhu.edu/search?action=search&query=content:{{{s}}}:and&min=1&max=10&t=header"
    },
    {
        "d": "www.pnas.org",
        "b": "pnas",
        "u": "http://www.pnas.org/search/{{{s}}}%20numresults%3A10%20sort%3Arelevance-rank%20format_result%3Astandard"
    },
    {
        "d": "psychonautwiki.org",
        "b": "pnw",
        "u": "https://psychonautwiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.poemhunter.com",
        "b": "poem",
        "u": "http://www.poemhunter.com/search/?q={{{s}}}"
    },
    {
        "d": "www.poetryfoundation.org",
        "b": "poems",
        "u": "https://www.poetryfoundation.org/search?query={{{s}}} "
    },
    {
        "d": "www.poetryfoundation.org",
        "b": "poetry",
        "u": "http://www.poetryfoundation.org/search/?q={{{s}}}"
    },
    {
        "d": "www.polito.it",
        "b": "polito",
        "u": "http://www.polito.it/search/?lang=it&q={{{s}}}"
    },
    {
        "d": "www.polymtl.ca",
        "b": "polymtl",
        "u": "https://www.polymtl.ca/etudes/cours/recherche/*?sigle={{{s}}}"
    },
    {
        "d": "search.pomagalo.com",
        "b": "pomagalo",
        "u": "https://search.pomagalo.com/?keywords_id=&keywords={{{s}}}"
    },
    {
        "d": "de.pons.com",
        "b": "ponsdees",
        "u": "http://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=dees&in=&lf=de"
    },
    {
        "d": "de.pons.com",
        "b": "ponsdefr",
        "u": "http://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=defr&in=&lf=de"
    },
    {
        "d": "de.pons.com",
        "b": "ponsdeit",
        "u": "http://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=deit&in=&lf=de"
    },
    {
        "d": "en.pons.com",
        "b": "ponsdepl",
        "u": "http://en.pons.com/translate?q={{{s}}}&l=depl&in=&lf=de"
    },
    {
        "d": "de.pons.com",
        "b": "ponsde",
        "u": "https://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=deen&in=&lf=de"
    },
    {
        "d": "de.pons.com",
        "b": "ponsdesv",
        "u": "https://de.pons.com/%C3%BCbersetzung?q={{{s}}}&l=desv&in=&lf=de"
    },
    {
        "d": "en.pons.eu",
        "b": "ponsenfr",
        "u": "http://en.pons.eu/translate?q={{{s}}}&l=enfr&in=&lf=fr"
    },
    {
        "d": "en.pons.com",
        "b": "ponsplen",
        "u": "https://en.pons.com/translate?q={{{s}}}&l=enpl&in=&lf=en"
    },
    {
        "d": "sjp.pwn.pl",
        "b": "por",
        "u": "http://sjp.pwn.pl/poradnia/szukaj/{{{s}}}.html"
    },
    {
        "d": "www.potafocal.com",
        "b": "potafocal",
        "u": "http://www.potafocal.com/?s={{{s}}}"
    },
    {
        "d": "www.pouparmelhor.com",
        "b": "poupar",
        "u": "https://www.pouparmelhor.com/?s={{{s}}}"
    },
    {
        "d": "poweren.ir",
        "b": "poweren",
        "u": "https://poweren.ir/?s={{{s}}}"
    },
    {
        "d": "www.powerthesaurus.org",
        "b": "powt",
        "u": "https://www.powerthesaurus.org/{{{s}}}/synonyms"
    },
    {
        "d": "putonyourcakepants.com",
        "b": "poycp",
        "u": "http://putonyourcakepants.com/?s={{{s}}}"
    },
    {
        "d": "dictionary.pinpinchinese.com",
        "b": "ppin",
        "u": "http://dictionary.pinpinchinese.com/search/t/{{{s}}}"
    },
    {
        "d": "www.pravidla.cz",
        "b": "pravidla",
        "u": "http://www.pravidla.cz/hledej/?qr={{{s}}}"
    },
    {
        "d": "www.prdl.org",
        "b": "prdl",
        "u": "http://www.prdl.org/search.php?q={{{s}}}"
    },
    {
        "d": "fu-berlin.hosted.exlibrisgroup.com",
        "b": "primo",
        "u": "https://fu-berlin.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&tab=fub&search_scope=FUB_ALL&vid=FUB&lang=de_DE&offset=0"
    },
    {
        "d": "library.princeton.edu",
        "b": "princetonlib",
        "u": "https://library.princeton.edu/find/all/{{{s}}}"
    },
    {
        "d": "www.princeton.edu",
        "b": "princeton",
        "u": "https://www.princeton.edu/main/tools/search/?q={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.princetonreview.com",
        "b": "princetonreview",
        "u": "https://www.princetonreview.com/search-results?q={{{s}}}"
    },
    {
        "d": "journals.aps.org",
        "b": "prl",
        "u": "http://journals.aps.org/search?q={{{s}}}"
    },
    {
        "d": "www.gutenberg.org",
        "b": "projectgutenberg",
        "u": "http://www.gutenberg.org/ebooks/search/?query={{{s}}}"
    },
    {
        "d": "dictionary.reference.com",
        "b": "pronounce",
        "u": "http://dictionary.reference.com/browse/{{{s}}}"
    },
    {
        "d": "proofwiki.org",
        "b": "proof",
        "u": "https://proofwiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.proofwiki.org",
        "b": "proofwiki",
        "u": "http://www.proofwiki.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "protein",
        "u": "https://www.ncbi.nlm.nih.gov/protein/?term={{{s}}}"
    },
    {
        "d": "protocols.io",
        "b": "protocolsio",
        "u": "https://protocols.io/search?key={{{s}}}"
    },
    {
        "d": "discover.poudrelibraries.org",
        "b": "prpl",
        "u": "http://discover.poudrelibraries.org/iii/encore/search/C__S{{{s}}}__Orightresult__U?lang=eng"
    },
    {
        "d": "prpm.dbp.gov.my",
        "b": "prpm",
        "u": "http://prpm.dbp.gov.my/Search.aspx?k={{{s}}}"
    },
    {
        "d": "ar.prvademecum.com",
        "b": "pr",
        "u": "http://ar.prvademecum.com/?s={{{s}}}"
    },
    {
        "d": "physics.stackexchange.com",
        "b": "pse",
        "u": "https://physics.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.psiram.com",
        "b": "psiram",
        "u": "https://www.psiram.com/de/index.php?title=Spezial%3ASuche&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.psoriasis-netz.de",
        "b": "pso",
        "u": "https://www.psoriasis-netz.de/?s={{{s}}}"
    },
    {
        "d": "psu.summon.serialssolutions.com",
        "b": "psulib",
        "u": "http://psu.summon.serialssolutions.com/search/results?spellcheck=true&q={{{s}}}&x=0&y=0"
    },
    {
        "d": "psychiatry.org",
        "b": "psych",
        "u": "https://psychiatry.org/home/search-results?k={{{s}}}"
    },
    {
        "d": "psychonautwiki.org",
        "b": "psychonautwiki",
        "u": "https://psychonautwiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "psychonautwiki.org",
        "b": "psy",
        "u": "https://psychonautwiki.org/w/index.php?search={{{s}}}&title=Special:Search"
    },
    {
        "d": "the-ptg.blogspot.in",
        "b": "ptg",
        "u": "https://the-ptg.blogspot.in/search?q={{{s}}}"
    },
    {
        "d": "www.powerthesaurus.org",
        "b": "pt",
        "u": "https://www.powerthesaurus.org/{{{s}}}"
    },
    {
        "d": "www.protoolreviews.com",
        "b": "ptr",
        "u": "http://www.protoolreviews.com/?s={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "pubchem",
        "u": "http://www.ncbi.nlm.nih.gov/pccompound/?term={{{s}}}"
    },
    {
        "d": "pubmed.ncbi.nlm.nih.gov",
        "b": "publabs",
        "u": "https://pubmed.ncbi.nlm.nih.gov/?term={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "pubmed",
        "u": "https://www.ncbi.nlm.nih.gov/pubmed/?term={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "pub",
        "u": "https://www.ncbi.nlm.nih.gov/pubmed?EntrezSystem2.PEntrez.Pubmed.SearchBar.Db=pubmed&term={{{s}}}"
    },
    {
        "d": "www.pucsp.br",
        "b": "pucsp",
        "u": "https://www.pucsp.br/buscar?search_api_fulltext={{{s}}}&field_area_de_conhecimento=All&field_escola=&type=All"
    },
    {
        "d": "nationalarchives.gov.uk",
        "b": "puid",
        "u": "http://nationalarchives.gov.uk/PRONOM/{{{s}}}"
    },
    {
        "d": "search.freefind.com",
        "b": "purplemath",
        "u": "http://search.freefind.com/find.html?id=5014414&pageid=r&mode=ALL&n=0&query={{{s}}}"
    },
    {
        "d": "paperswithcode.com",
        "b": "pwc",
        "u": "https://paperswithcode.com/search?q={{{s}}}"
    },
    {
        "d": "psychonautwiki.org",
        "b": "pwiki",
        "u": "https://psychonautwiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fa.wikipedia.org",
        "b": "pwp",
        "u": "https://fa.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "pytorch.org",
        "b": "pytorch",
        "u": "https://pytorch.org/docs/stable/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.quimbee.com",
        "b": "qb",
        "u": "https://www.quimbee.com/search?q={{{s}}}"
    },
    {
        "d": "www.qconcursos.com",
        "b": "qc",
        "u": "https://www.qconcursos.com/busca?q={{{s}}}"
    },
    {
        "d": "www.qcunbon.be",
        "b": "qcubbrux",
        "u": "http://www.qcunbon.be/bruxelles?q={{{s}}}"
    },
    {
        "d": "quant.stackexchange.com",
        "b": "qso",
        "u": "https://quant.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.topuniversities.com",
        "b": "qstu",
        "u": "https://www.topuniversities.com/search/site/{{{s}}}"
    },
    {
        "d": "www.qualtrics.com",
        "b": "qual",
        "u": "https://www.qualtrics.com/support/search/?q={{{s}}}"
    },
    {
        "d": "www.quandl.com",
        "b": "quandl",
        "u": "https://www.quandl.com/search?query={{{s}}}"
    },
    {
        "d": "quizlet.com",
        "b": "quizlet",
        "u": "http://quizlet.com/subject/{{{s}}}/"
    },
    {
        "d": "quoteinvestigator.com",
        "b": "quoteinvestigator",
        "u": "https://quoteinvestigator.com/?s={{{s}}}"
    },
    {
        "d": "quran.com",
        "b": "quran",
        "u": "http://quran.com/search?q={{{s}}}"
    },
    {
        "d": "quran.com",
        "b": "qur",
        "u": "http://quran.com/search?q={{{s}}}"
    },
    {
        "d": "www.qwantjunior.com",
        "b": "qwe",
        "u": "https://www.qwantjunior.com/?q={{{s}}}&t=education"
    },
    {
        "d": "www.rome2rio.com",
        "b": "r2r",
        "u": "https://www.rome2rio.com/map/{{{s}}}"
    },
    {
        "d": "www.reddit.com",
        "b": "radhd",
        "u": "https://www.reddit.com/r/ADHD/search/?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "radiopaedia.org",
        "b": "radio",
        "u": "https://radiopaedia.org/search?utf8=%E2%9C%93&q={{{s}}}&scope=all"
    },
    {
        "d": "radiopaedia.org",
        "b": "radiopaedia",
        "u": "http://radiopaedia.org/search?q={{{s}}}"
    },
    {
        "d": "academia.gal",
        "b": "rag",
        "u": "http://academia.gal/dicionario/-/termo/busca/{{{s}}}"
    },
    {
        "d": "www.ratebeer.com",
        "b": "ratebeer",
        "u": "https://www.ratebeer.com/search?q={{{s}}}"
    },
    {
        "d": "www.ratemyprofessors.com",
        "b": "ratemyprofessor",
        "u": "http://www.ratemyprofessors.com/search.jsp?query={{{s}}}"
    },
    {
        "d": "www.ratemyprofessors.com",
        "b": "rate",
        "u": "https://www.ratemyprofessors.com/search.jsp?query={{{s}}}"
    },
    {
        "d": "rationalwiki.org",
        "b": "rationalwiki",
        "u": "http://rationalwiki.org/w/index.php?search={{{s}}}&button=&title=Special:Search&go=Go"
    },
    {
        "d": "www.ratp.fr",
        "b": "ratp",
        "u": "https://www.ratp.fr/itineraires?start={{{s}}}&lieu_depart=station&"
    },
    {
        "d": "www.ravelry.com",
        "b": "ravelry",
        "u": "http://www.ravelry.com/patterns/search#query={{{s}}}"
    },
    {
        "d": "www.rbbg.it",
        "b": "rbbg",
        "u": "https://www.rbbg.it/opac/search/lst?q={{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "rcef",
        "u": "http://context.reverso.net/translation/english-french/{{{s}}}"
    },
    {
        "d": "www.ricardocuisine.com",
        "b": "rcfr",
        "u": "https://www.ricardocuisine.com/recherche/mot-cle/{{{s}}}"
    },
    {
        "d": "bab.la",
        "b": "rconj",
        "u": "http://bab.la/conjugaison/russe/{{{s}}}"
    },
    {
        "d": "rcsb.org",
        "b": "rcsb",
        "u": "http://rcsb.org/pdb/explore/explore.do?structureId={{{s}}}"
    },
    {
        "d": "apps.leg.wa.gov",
        "b": "rcw",
        "u": "http://apps.leg.wa.gov/RCW/default.aspx?cite={{{s}}}"
    },
    {
        "d": "www.romajidesu.com",
        "b": "rdkj",
        "u": "http://www.romajidesu.com/kanji/{{{s}}}"
    },
    {
        "d": "www.romajidesu.com",
        "b": "rdvcb",
        "u": "http://www.romajidesu.com/?m=dictionary&a=lookup&w={{{s}}}"
    },
    {
        "d": "www.re3data.org",
        "b": "re3",
        "u": "https://www.re3data.org/search?query={{{s}}}"
    },
    {
        "d": "reactome.org",
        "b": "reactome",
        "u": "http://reactome.org/content/query?q={{{s}}}"
    },
    {
        "d": "realo.com",
        "b": "realo",
        "u": "https://realo.com/search?q={{{s}}}"
    },
    {
        "d": "www.realtor.com",
        "b": "realtor",
        "u": "http://www.realtor.com/realestateandhomes-search/{{{s}}}"
    },
    {
        "d": "tools.wmflabs.org",
        "b": "reasonator",
        "u": "http://tools.wmflabs.org/reasonator/?find={{{s}}}"
    },
    {
        "d": "rebiun.baratz.es",
        "b": "rebiun",
        "u": "http://rebiun.baratz.es/rebiun/search?q={{{s}}}&start=0&rows=12&sort=score+desc&advanced_handler=advanced"
    },
    {
        "d": "archive.recapthelaw.org",
        "b": "recap",
        "u": "http://archive.recapthelaw.org/search/advanced/?q={{{s}}}&x=0&y=0&court=&docket_number=&case_name=&pacer_case_number=&date_filed=&date_filed_end=&date_terminated=&date_terminated_end=&date_last_filing=&date_last_filing_end="
    },
    {
        "d": "www.recettes.qc.ca",
        "b": "recettesqc",
        "u": "https://www.recettes.qc.ca/recettes/recherche?search[query]={{{s}}}&search[sort]="
    },
    {
        "d": "allrecipes.com",
        "b": "recipe",
        "u": "http://allrecipes.com/search/default.aspx?qt=k&wt={{{s}}}"
    },
    {
        "d": "allrecipes.com",
        "b": "recipes",
        "u": "http://allrecipes.com/search/default.aspx?qt=k&rt=r&pqt=k&ms=0&fo=0&wt={{{s}}}"
    },
    {
        "d": "www.redalyc.org",
        "b": "redalyc",
        "u": "http://www.redalyc.org/busquedaArticuloFiltros.oa?q={{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "redeen",
        "u": "https://dictionary.reverso.net/german-english/{{{s}}}"
    },
    {
        "d": "www.redensarten-index.de",
        "b": "redensarten",
        "u": "http://www.redensarten-index.de/suche.php?suchbegriff={{{s}}}&bool=relevanz&gawoe=an&suchspalte[]=rart_ou&suchspalte[]=rart_varianten_ou"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reespt",
        "u": "http://dictionary.reverso.net/spanish-portuguese/{{{s}}}"
    },
    {
        "d": "www.reference.com",
        "b": "ref",
        "u": "http://www.reference.com/web?q={{{s}}}"
    },
    {
        "d": "www.refseek.com",
        "b": "refseek",
        "u": "https://www.refseek.com/search?q={{{s}}}"
    },
    {
        "d": "relatedwords.org",
        "b": "relword",
        "u": "http://relatedwords.org/relatedto/{{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "renpl",
        "u": "https://context.reverso.net/tłumaczenie/angielski-polski/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "ren",
        "u": "http://dictionary.reverso.net/english-definition/{{{s}}}"
    },
    {
        "d": "renso-ruigo.com",
        "b": "rensoruigo",
        "u": "https://renso-ruigo.com/word/{{{s}}}"
    },
    {
        "d": "www.repeaterbook.com",
        "b": "repeater",
        "u": "https://www.repeaterbook.com/repeaters/keyword.php?func=result&keyword={{{s}}}"
    },
    {
        "d": "repositorium.sdum.uminho.pt",
        "b": "repum",
        "u": "https://repositorium.sdum.uminho.pt/simple-search?query={{{s}}}"
    },
    {
        "d": "www.researchgate.net",
        "b": "researchgate",
        "u": "https://www.researchgate.net/search/publications?q={{{s}}}"
    },
    {
        "d": "journals.plos.org",
        "b": "research",
        "u": "http://journals.plos.org/plosone/search?unformattedQuery=everything:\"{{{s}}}\""
    },
    {
        "d": "www.respaper.com",
        "b": "resp",
        "u": "http://www.respaper.com/s?q={{{s}}}"
    },
    {
        "d": "www.resto.fr",
        "b": "restofr",
        "u": "http://www.resto.fr/business/search?searchbox=true&businessTypeId=1&fullText={{{s}}}"
    },
    {
        "d": "www.reta-vortaro.de",
        "b": "reta-vortaro",
        "u": "http://www.reta-vortaro.de/cgi-bin/sercxu.pl?sercxata={{{s}}}&kadroj=1"
    },
    {
        "d": "www.onelook.com",
        "b": "revd",
        "u": "http://www.onelook.com/reverse-dictionary.shtml?s={{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "revef",
        "u": "http://dictionary.reverso.net/english-french/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reversoenfr",
        "u": "http://dictionary.reverso.net/english-french/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reversofren",
        "u": "http://dictionary.reverso.net/english-french/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reversoiten",
        "u": "http://dictionary.reverso.net/italian-english/{{{s}}}"
    },
    {
        "d": "dictionary.reverso.net",
        "b": "reverso",
        "u": "http://dictionary.reverso.net/german-english/{{{s}}} "
    },
    {
        "d": "rex.kb.dk",
        "b": "rex",
        "u": "http://rex.kb.dk/primo_library/libweb/action/search.do?fn=search&vl%28freeText0%29={{{s}}}"
    },
    {
        "d": "www.reasonablefaith.org",
        "b": "rf",
        "u": "http://www.reasonablefaith.org/search/results?q={{{s}}}"
    },
    {
        "d": "dictionnaire.reverso.net",
        "b": "rfr",
        "u": "http://dictionnaire.reverso.net/francais-definition/{{{s}}}"
    },
    {
        "d": "www.researchgate.net",
        "b": "rgate",
        "u": "https://www.researchgate.net/search.Search.html?query={{{s}}}"
    },
    {
        "d": "rhymebrain.com",
        "b": "rhymebrain",
        "u": "http://rhymebrain.com/en/What_rhymes_with_{{{s}}}.html"
    },
    {
        "d": "www.rhymezone.com",
        "b": "rhyme",
        "u": "https://www.rhymezone.com/r/rhyme.cgi?Word={{{s}}}&typeofrhyme=perfect&org1=syl&org2=l&org3=y"
    },
    {
        "d": "rigvedawiki.net",
        "b": "rigveda",
        "u": "https://rigvedawiki.net/r1/wiki.php/{{{s}}}"
    },
    {
        "d": "rigvedawiki.net",
        "b": "rigvedawiki",
        "u": "http://rigvedawiki.net/r1/wiki.php/{{{s}}}"
    },
    {
        "d": "www.riksdagen.se",
        "b": "riksdagen",
        "u": "https://www.riksdagen.se/sv/global/sok/?q={{{s}}}&st=1"
    },
    {
        "d": "www.cercarime.it",
        "b": "rima",
        "u": "https://www.cercarime.it/?rima={{{s}}}"
    },
    {
        "d": "www.rimessolides.com",
        "b": "rime",
        "u": "http://www.rimessolides.com/rime.aspx?m={{{s}}}"
    },
    {
        "d": "rimlexikon.com",
        "b": "rim",
        "u": "http://rimlexikon.com/index.php?rim={{{s}}}"
    },
    {
        "d": "opac.regesta-imperii.de",
        "b": "riopac",
        "u": "http://opac.regesta-imperii.de/lang_en/suche.php?qs={{{s}}}"
    },
    {
        "d": "www.ris.bka.gv.at",
        "b": "ris",
        "u": "https://www.ris.bka.gv.at/Ergebnis.wxe?Abfrage=Gesamtabfrage&SearchInAsylGH=False&SearchInAvn=False&SearchInAvsv=False&SearchInBegut=False&SearchInBgblAlt=False&SearchInBgblAuth=False&SearchInBgblPdf=False&SearchInBks=False&SearchInBundesnormen=False&SearchInDok=False&SearchInDsk=False&SearchInErlaesse=False&SearchInGbk=False&SearchInGemeinderecht=False&SearchInJustiz=False&SearchInBvwg=False&SearchInLvwg=False&SearchInLgbl=False&SearchInLgblNO=False&SearchInLgblAuth=False&SearchInLrBgld=False&SearchInLrK=False&SearchInLrNO=False&SearchInLrOO=False&SearchInLrSbg=False&SearchInLrStmk=False&SearchInLrT=False&SearchInLrVbg=False&SearchInLrW=False&SearchInNormenliste=False&SearchInPvak=False&SearchInRegV=False&SearchInUbas=False&SearchInUmse=False&SearchInUvs=False&SearchInVerg=False&SearchInVfgh=False&SearchInVwgh=False&ImRisSeit=Undefined&ResultPageSize=100&Suchworte={{{s}}}&Position=1"
    },
    {
        "d": "www.ritchiespecs.com",
        "b": "ritchiespecs",
        "u": "https://www.ritchiespecs.com/results/{{{s}}}"
    },
    {
        "d": "rit.summon.serialssolutions.com",
        "b": "ritlib",
        "u": "https://rit.summon.serialssolutions.com/search?l=en&q={{{s}}}"
    },
    {
        "d": "www.rmit.edu.au",
        "b": "rmit",
        "u": "https://www.rmit.edu.au/search?q={{{s}}}"
    },
    {
        "d": "www.admin.ch",
        "b": "ro",
        "u": "https://www.admin.ch/opc/search/?text={{{s}}}&lang=fr&language%5B%5D=fr&product%5B%5D=ClassifiedCompilation"
    },
    {
        "d": "rocwiki.org",
        "b": "rocwiki",
        "u": "http://rocwiki.org/?action=search&string={{{s}}}"
    },
    {
        "d": "www.roget.org",
        "b": "roget",
        "u": "http://www.roget.org/scripts/qq.php?seekword={{{s}}}"
    },
    {
        "d": "roll20.net",
        "b": "roll205e",
        "u": "https://roll20.net/compendium/dnd5e/searchbook/?terms={{{s}}}"
    },
    {
        "d": "www.romajidesu.com",
        "b": "romajidesuvcb",
        "u": "http://www.romajidesu.com/?m=dictionary&a=lookup&w={{{s}}}"
    },
    {
        "d": "rostr.disney.com",
        "b": "rostr",
        "u": "https://rostr.disney.com/search_results?query={{{s}}}"
    },
    {
        "d": "www.routard.com",
        "b": "routard",
        "u": "http://www.routard.com/recherche.asp?q={{{s}}}&edt_cleRech={{{s}}}"
    },
    {
        "d": "www.radicalphilosophy.com",
        "b": "rphilos",
        "u": "http://www.radicalphilosophy.com/?s={{{s}}}"
    },
    {
        "d": "context.reverso.net",
        "b": "rplen",
        "u": "https://context.reverso.net/tłumaczenie/polski-angielski/{{{s}}}"
    },
    {
        "d": "www.admin.ch",
        "b": "rsch",
        "u": "https://www.admin.ch/opc/search/?text={{{s}}}&lang=fr&product[]=cc&date_range_min=&date_range_max=&d_compilation=both&d_is_in_force=yes&thesaurus=1"
    },
    {
        "d": "www.reddit.com",
        "b": "rsci",
        "u": "https://www.reddit.com/r/askscience/search?q={{{s}}}&restrict_sr=1"
    },
    {
        "d": "www.refseek.com",
        "b": "rsk",
        "u": "https://www.refseek.com/search?q={{{s}}}"
    },
    {
        "d": "www.rspb.org.uk",
        "b": "rspb",
        "u": "https://www.rspb.org.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.biblegateway.com",
        "b": "rsvce",
        "u": "https://www.biblegateway.com/passage/?search={{{s}}}&version=RSVCE"
    },
    {
        "d": "runescape.wiki",
        "b": "rsw",
        "u": "https://runescape.wiki/?search={{{s}}}&title=Special:Search&go=Go"
    },
    {
        "d": "translate.google.com",
        "b": "ruen",
        "u": "http://translate.google.com/#ru/en/{{{s}}}"
    },
    {
        "d": "www.rug.nl",
        "b": "rug",
        "u": "http://www.rug.nl/search/?searchtext={{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "ruwiki",
        "u": "https://ru.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "raritanval.edu",
        "b": "rvcc",
        "u": "http://raritanval.edu/rvcc/search.aspx?searchtext={{{s}}}"
    },
    {
        "d": "rationalwiki.org",
        "b": "rw",
        "u": "http://rationalwiki.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.rwth-aachen.de",
        "b": "rwth",
        "u": "http://www.rwth-aachen.de/ca/be/hx/?lidx=&institution=RWTH+Aachen+University&search={{{s}}}"
    },
    {
        "d": "ruxpert.ru",
        "b": "rxp",
        "u": "http://ruxpert.ru/index.php?search={{{s}}}"
    },
    {
        "d": "www.semanticscholar.org",
        "b": "s2",
        "u": "https://www.semanticscholar.org/search?q={{{s}}}"
    },
    {
        "d": "sabahlatan.com",
        "b": "sabahlatan",
        "u": "http://sabahlatan.com/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "sab",
        "u": "https://duckduckgo.com/?q=site%3Askepticsannotatedbible.com+{{{s}}}&ia=web"
    },
    {
        "d": "duckduckgo.com",
        "b": "sage",
        "u": "https://duckduckgo.com/?q=site%3Adoc.sagemath.org+{{{s}}}"
    },
    {
        "d": "www.suomisanakirja.fi",
        "b": "saki",
        "u": "http://www.suomisanakirja.fi/{{{s}}}"
    },
    {
        "d": "salamtm.blogspot.com",
        "b": "salam",
        "u": "https://salamtm.blogspot.com/search/?term={{{s}}}"
    },
    {
        "d": "www.sanakirja.org",
        "b": "sanakirja",
        "u": "http://www.sanakirja.org/search.php?q={{{s}}} "
    },
    {
        "d": "www.sandiego.org",
        "b": "sandiego",
        "u": "https://www.sandiego.org/search/site.aspx?q={{{s}}}"
    },
    {
        "d": "spokensanskrit.de",
        "b": "sanskrit",
        "u": "http://spokensanskrit.de/index.php?tinput={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "saq",
        "u": "https://duckduckgo.com/?q=site%3Askepticsannotatedbible.com%2Fquran%2F+{{{s}}}&t=ffsb&ia=web"
    },
    {
        "d": "www.merriam-webster.com",
        "b": "say",
        "u": "https://www.merriam-webster.com/dictionary/{{{s}}}?pronunciation"
    },
    {
        "d": "www.sba.gov",
        "b": "sba",
        "u": "https://www.sba.gov/search/?q={{{s}}}"
    },
    {
        "d": "bibleforums.org",
        "b": "sbg",
        "u": "http://bibleforums.org/search.php?s={{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "sbm",
        "u": "https://duckduckgo.com/?q=site%3Asciencebasedmedicine.org+{{{s}}}"
    },
    {
        "d": "opac.sbn.it",
        "b": "sbn",
        "u": "http://opac.sbn.it/opacsbn/opac/iccu/free.jsp={{{s}}}"
    },
    {
        "d": "www.slounik.org",
        "b": "sbrm",
        "u": "http://www.slounik.org/search?dict=&search={{{s}}}"
    },
    {
        "d": "www.sverigeisiffror.scb.se",
        "b": "scben",
        "u": "http://www.sverigeisiffror.scb.se/hitta-statistik/sok/?query={{{s}}}"
    },
    {
        "d": "www.sverigeisiffror.scb.se",
        "b": "scb",
        "u": "http://www.sverigeisiffror.scb.se/hitta-statistik/sok/?query={{{s}}}"
    },
    {
        "d": "sccl.bibliocommons.com",
        "b": "sccl",
        "u": "https://sccl.bibliocommons.com/search/?t=smart&searchOpt=catalogue&q= {{{s}}}&search_category=keyword"
    },
    {
        "d": "www.sciencedirect.com",
        "b": "scdirect",
        "u": "https://www.sciencedirect.com/search?qs={{{s}}}"
    },
    {
        "d": "scd.summon.serialssolutions.com",
        "b": "scdpo",
        "u": "http://scd.summon.serialssolutions.com/search?s.q={{{s}}}"
    },
    {
        "d": "www.sciencedaily.com",
        "b": "scd",
        "u": "https://www.sciencedaily.com/search/?keyword={{{s}}}"
    },
    {
        "d": "scholarpedia.org",
        "b": "schp",
        "u": "http://scholarpedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.sciencedirect.com",
        "b": "scid",
        "u": "http://www.sciencedirect.com/search?qs={{{s}}}"
    },
    {
        "d": "thesciencedictionary.org",
        "b": "scidict",
        "u": "http://thesciencedictionary.org/search2/?q={{{s}}}"
    },
    {
        "d": "www.sciencedirect.com",
        "b": "scidirect",
        "u": "https://www.sciencedirect.com/search?qs={{{s}}}"
    },
    {
        "d": "www.sciencedirect.com",
        "b": "scidir",
        "u": "https://www.sciencedirect.com/search?qs={{{s}}}"
    },
    {
        "d": "search.scielo.org",
        "b": "scielo",
        "u": "http://search.scielo.org/?q={{{s}}}&where=ORG"
    },
    {
        "d": "www.sciencedaily.com",
        "b": "sciencedaily",
        "u": "http://www.sciencedaily.com/search/?keyword={{{s}}} "
    },
    {
        "d": "www.sciencedirect.com",
        "b": "sciencedirect",
        "u": "https://www.sciencedirect.com/search?qs={{{s}}}"
    },
    {
        "d": "www.scilit.net",
        "b": "scilit",
        "u": "https://www.scilit.net/articles/10/0?Search={{{s}}}"
    },
    {
        "d": "scimagojr.com",
        "b": "scimago",
        "u": "http://scimagojr.com/journalsearch.php?q={{{s}}}"
    },
    {
        "d": "scinapse.io",
        "b": "scin",
        "u": "https://scinapse.io/search?query={{{s}}}"
    },
    {
        "d": "www.spanishdict.com",
        "b": "sconj",
        "u": "http://www.spanishdict.com/conjugate/{{{s}}}"
    },
    {
        "d": "www.dsl.ac.uk",
        "b": "scots",
        "u": "http://www.dsl.ac.uk/results/{{{s}}}"
    },
    {
        "d": "scouts.org.uk",
        "b": "scouts",
        "u": "https://scouts.org.uk/cse-search/?query={{{s}}}"
    },
    {
        "d": "www.scrabblewordsolver.com",
        "b": "scrabble",
        "u": "http://www.scrabblewordsolver.com/word-checker/{{{s}}}"
    },
    {
        "d": "www.spanishdict.com",
        "b": "sdict",
        "u": "http://www.spanishdict.com/translate/{{{s}}}"
    },
    {
        "d": "www.sciencedirect.com",
        "b": "sdirect",
        "u": "https://www.sciencedirect.com/search?qs={{{s}}}"
    },
    {
        "d": "searchworks.stanford.edu",
        "b": "searchworks",
        "u": "http://searchworks.stanford.edu/?q={{{s}}}&search_field=search"
    },
    {
        "d": "www.seatalk.info",
        "b": "seatalk",
        "u": "http://www.seatalk.info/cgi-bin/nautical-marine-sailing-dictionary/db.cgi?db=db&view_records=1&uid=default&Term={{{s}}}"
    },
    {
        "d": "www.sec.gov",
        "b": "secedgar",
        "u": "https://www.sec.gov/cgi-bin/browse-edgar?CIK={{{s}}}&owner=exclude&action=getcompany"
    },
    {
        "d": "www.sechenovclinic.ru",
        "b": "sechenovclinic",
        "u": "http://www.sechenovclinic.ru/search/index.php?q={{{s}}}"
    },
    {
        "d": "secsearch.sec.gov",
        "b": "sec",
        "u": "https://secsearch.sec.gov/search?utf8=%3F&affiliate=secsearch&query={{{s}}}"
    },
    {
        "d": "english.stackexchange.com",
        "b": "seenglish",
        "u": "http://english.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.sefaria.org",
        "b": "sefaria",
        "u": "http://www.sefaria.org/search?q={{{s}}}"
    },
    {
        "d": "library.seg.org",
        "b": "segdl",
        "u": "https://library.seg.org/action/doSearch?AllField={{{s}}}"
    },
    {
        "d": "library.seg.org",
        "b": "seg",
        "u": "https://library.seg.org/action/doSearch?AllField={{{s}}}&publication="
    },
    {
        "d": "selectome.unil.ch",
        "b": "selectome",
        "u": "https://selectome.unil.ch/cgi-bin/getResult.cgi?query={{{s}}}&res_type=auto"
    },
    {
        "d": "www.semanticscholar.org",
        "b": "semantic",
        "u": "https://www.semanticscholar.org/search?q={{{s}}}&sort=relevance&ae=false"
    },
    {
        "d": "math.stackexchange.com",
        "b": "semath",
        "u": "https://math.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "sentence.yourdictionary.com",
        "b": "sentence",
        "u": "http://sentence.yourdictionary.com/{{{s}}}"
    },
    {
        "d": "plato.stanford.edu",
        "b": "sep",
        "u": "http://plato.stanford.edu/search/searcher.py?query={{{s}}}"
    },
    {
        "d": "oeis.org",
        "b": "seq",
        "u": "http://oeis.org/search?q={{{s}}}"
    },
    {
        "d": "www.seriouseats.com",
        "b": "seriouseats",
        "u": "http://www.seriouseats.com/search?term={{{s}}}&site=all"
    },
    {
        "d": "www.service-public.fr",
        "b": "servicepublic",
        "u": "https://www.service-public.fr/particuliers/recherche?keyword={{{s}}}"
    },
    {
        "d": "www.seslisozluk.net",
        "b": "sesli",
        "u": "http://www.seslisozluk.net/?ssQBy=0&word={{{s}}}"
    },
    {
        "d": "www.seslisozluk.com",
        "b": "seslisozluk",
        "u": "http://www.seslisozluk.com/?word={{{s}}}"
    },
    {
        "d": "www.suomienglantisanakirja.fi",
        "b": "ses",
        "u": "https://www.suomienglantisanakirja.fi/{{{s}}}"
    },
    {
        "d": "simple.wikipedia.org",
        "b": "se.w",
        "u": "https://simple.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "slovnik.seznam.cz",
        "b": "sezs",
        "u": "http://slovnik.seznam.cz/en-cz/word/?q={{{s}}}"
    },
    {
        "d": "www.sfmoma.org",
        "b": "sfmoma",
        "u": "https://www.sfmoma.org/search/?q={{{s}}}"
    },
    {
        "d": "sfpl.bibliocommons.com",
        "b": "sfpl",
        "u": "https://sfpl.bibliocommons.com/v2/search?searchType=smart&query={{{s}}}"
    },
    {
        "d": "search.lib.sfu.ca",
        "b": "sfulib",
        "u": "http://search.lib.sfu.ca/?q={{{s}}}"
    },
    {
        "d": "www.yeastgenome.org",
        "b": "sgd",
        "u": "https://www.yeastgenome.org/search?q={{{s}}}&is_quick=true"
    },
    {
        "d": "www.shabdkosh.com",
        "b": "shbd",
        "u": "http://www.shabdkosh.com/translate/{{{s}}}/"
    },
    {
        "d": "www.shiatsu-stijlen.nl",
        "b": "shiatsu",
        "u": "http://www.shiatsu-stijlen.nl/zoeken.php?cx=partner-pub-1276597034470244%3Aslojxr-8otw&cof=FORID%3A11&ie=ISO-8859-1&q={{{s}}}&sa=Zoeken"
    },
    {
        "d": "www.shmoop.com",
        "b": "shmoop",
        "u": "http://www.shmoop.com/search?q={{{s}}} "
    },
    {
        "d": "shura.shu.ac.uk",
        "b": "shura",
        "u": "http://shura.shu.ac.uk/cgi/facet/simple2?q={{{s}}}"
    },
    {
        "d": "partners.sigfox.com",
        "b": "sigfox",
        "u": "https://partners.sigfox.com/search/products?q={{{s}}}"
    },
    {
        "d": "www.sigmaaldrich.com",
        "b": "sigma",
        "u": "http://www.sigmaaldrich.com/catalog/search?interface=All&term={{{s}}}"
    },
    {
        "d": "www.signingsavvy.com",
        "b": "signingsavvy",
        "u": "https://www.signingsavvy.com/search/{{{s}}}"
    },
    {
        "d": "simbad.u-strasbg.fr",
        "b": "simbad",
        "u": "http://simbad.u-strasbg.fr/simbad/sim-basic?Ident={{{s}}}"
    },
    {
        "d": "www.simplyrecipes.com",
        "b": "simpl",
        "u": "https://www.simplyrecipes.com/?s={{{s}}}"
    },
    {
        "d": "www.sinonimos.com.br",
        "b": "sin",
        "u": "https://www.sinonimos.com.br/{{{s}}}"
    },
    {
        "d": "luirig.altervista.org",
        "b": "sinonimi",
        "u": "http://luirig.altervista.org/sinonimi/hypertext/ricerca.php?title={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "sinonimo",
        "u": "http://www.wordreference.com/sinonimos/{{{s}}}"
    },
    {
        "d": "sjiauto.wordpress.com",
        "b": "sjiauto",
        "u": "https://sjiauto.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "sjp.pwn.pl",
        "b": "sjp",
        "u": "http://sjp.pwn.pl/szukaj/{{{s}}}.html"
    },
    {
        "d": "www.scimagojr.com",
        "b": "sjr",
        "u": "http://www.scimagojr.com/journalsearch.php?q={{{s}}}"
    },
    {
        "d": "slovniky.korpus.sk",
        "b": "skd",
        "u": "http://slovniky.korpus.sk/?w={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "skepdic",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:skepdic.com"
    },
    {
        "d": "duckduckgo.com",
        "b": "skepticsbible",
        "u": "https://duckduckgo.com/?q=site:skepticsannotatedbible.com {{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "skepticskoran",
        "u": "https://duckduckgo.com/?q=site%3Askepticsannotatedbible.com%2Fquran%2F+{{{s}}}&ia=web"
    },
    {
        "d": "duckduckgo.com",
        "b": "skepticsquran",
        "u": "https://duckduckgo.com/?q=site%3Askepticsannotatedbible.com%2Fquran%2F+{{{s}}}&t=ffsb&ia=web"
    },
    {
        "d": "skeptoid.com",
        "b": "skeptoid",
        "u": "https://skeptoid.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.skillshare.com",
        "b": "skillshare",
        "u": "https://www.skillshare.com/search?query={{{s}}}"
    },
    {
        "d": "www.skillshare.com",
        "b": "skill",
        "u": "https://www.skillshare.com/search?query={{{s}}}"
    },
    {
        "d": "www.ewg.org",
        "b": "skindeep",
        "u": "http://www.ewg.org/skindeep/search.php?query={{{s}}}"
    },
    {
        "d": "shabdkosh.com",
        "b": "skk",
        "u": "http://shabdkosh.com/kn/translate/{{{s}}}/"
    },
    {
        "d": "duckduckgo.com",
        "b": "sklearn",
        "u": "https://duckduckgo.com/?q=site%3Ahttp%3A%2F%2Fscikit-learn.org%2Fstable%2Fmodules%2Fgenerated%2F+{{{s}}}&ia=web"
    },
    {
        "d": "www.slang.gr",
        "b": "slanggr",
        "u": "http://www.slang.gr/lemmas?q={{{s}}}"
    },
    {
        "d": "onlineslangdictionary.com",
        "b": "slang",
        "u": "http://onlineslangdictionary.com/definition+of/{{{s}}}"
    },
    {
        "d": "www.slaw.ca",
        "b": "slaw",
        "u": "http://www.slaw.ca/?s={{{s}}}"
    },
    {
        "d": "www.slcl.org",
        "b": "slcl",
        "u": "https://www.slcl.org/bento/search/{{{s}}}"
    },
    {
        "d": "link.springer.com",
        "b": "slink",
        "u": "http://link.springer.com/search?query={{{s}}}"
    },
    {
        "d": "slovniky.korpus.sk",
        "b": "slovak",
        "u": "http://slovniky.korpus.sk/?w={{{s}}}"
    },
    {
        "d": "slovnenya.com",
        "b": "slovnenya",
        "u": "http://slovnenya.com/dictionary/{{{s}}}"
    },
    {
        "d": "slovnik.seznam.cz",
        "b": "slovnik",
        "u": "https://slovnik.seznam.cz/en/?q={{{s}}}"
    },
    {
        "d": "slovniky.korpus.sk",
        "b": "slovniky",
        "u": "http://slovniky.korpus.sk/?w={{{s}}}"
    },
    {
        "d": "slovari.yandex.ru",
        "b": "slov",
        "u": "http://slovari.yandex.ru/search.xml?text={{{s}}}"
    },
    {
        "d": "www.sololearn.com",
        "b": "slq",
        "u": "https://www.sololearn.com/Discuss?ordering=Trending&query={{{s}}}"
    },
    {
        "d": "katalogbeta.slub-dresden.de",
        "b": "slub",
        "u": "http://katalogbeta.slub-dresden.de/?tx_find_find[q][default]={{{s}}} "
    },
    {
        "d": "science.sciencemag.org",
        "b": "smag",
        "u": "http://science.sciencemag.org/search/{{{s}}}"
    },
    {
        "d": "rug.on.worldcat.org",
        "b": "smartcat",
        "u": "https://rug.on.worldcat.org/search?databaseList=&queryString={{{s}}}"
    },
    {
        "d": "www.smarticular.net",
        "b": "smart",
        "u": "https://www.smarticular.net/?s={{{s}}}"
    },
    {
        "d": "si.edu",
        "b": "smithsonian",
        "u": "https://si.edu/sisearch?edan_q={{{s}}}"
    },
    {
        "d": "smittenkitchen.com",
        "b": "smitten",
        "u": "https://smittenkitchen.com/?s={{{s}}}"
    },
    {
        "d": "smpl.bibliocommons.com",
        "b": "smpl",
        "u": "https://smpl.bibliocommons.com/search?t=smart&search_category=keyword&q={{{s}}}"
    },
    {
        "d": "www.semanticscholar.org",
        "b": "smsc",
        "u": "https://www.semanticscholar.org/search?q={{{s}}}"
    },
    {
        "d": "www.smulweb.nl",
        "b": "smulweb",
        "u": "http://www.smulweb.nl/recepten/{{{s}}}"
    },
    {
        "d": "www.snappywords.com",
        "b": "snappywords",
        "u": "http://www.snappywords.com/?lookup={{{s}}}"
    },
    {
        "d": "docs.servicenow.com",
        "b": "sndocs",
        "u": "https://docs.servicenow.com/search?q={{{s}}}"
    },
    {
        "d": "www.snf.ch",
        "b": "snf",
        "u": "http://www.snf.ch/en/Search/Pages/default.aspx?k={{{s}}}"
    },
    {
        "d": "www.sinonimi-contrari.it",
        "b": "snit",
        "u": "http://www.sinonimi-contrari.it/{{{s}}}/"
    },
    {
        "d": "snl.no",
        "b": "snl",
        "u": "http://snl.no/.search?e=snl&query={{{s}}}"
    },
    {
        "d": "www.snopes.com",
        "b": "snopes",
        "u": "http://www.snopes.com/?s={{{s}}}"
    },
    {
        "d": "www.snpedia.com",
        "b": "snpedia",
        "u": "https://www.snpedia.com/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.snuson.com",
        "b": "snuson",
        "u": "http://www.snuson.com/forum/shop/search/?q={{{s}}}&submit.x=0&submit.y=0"
    },
    {
        "d": "www.soapnote.org",
        "b": "soapnote",
        "u": "https://www.soapnote.org/?s={{{s}}}"
    },
    {
        "d": "sokr.ru",
        "b": "sokr",
        "u": "http://sokr.ru/{{{s}}}/"
    },
    {
        "d": "solidaris.be",
        "b": "solidaris",
        "u": "http://solidaris.be/MonsWP/Pages/recherche.aspx?k={{{s}}} "
    },
    {
        "d": "solo.bodleian.ox.ac.uk",
        "b": "solo",
        "u": "http://solo.bodleian.ox.ac.uk/primo-explore/search?query=any,contains,{{{s}}}&tab=local&search_scope=LSCOP_ALL&vid=SOLO&lang=en_US&offset=0"
    },
    {
        "d": "sonaveeb.ee",
        "b": "sonaveeb",
        "u": "https://sonaveeb.ee/search/est-est/detail/{{{s}}}/"
    },
    {
        "d": "www.sourcewatch.org",
        "b": "sourcewatch",
        "u": "http://www.sourcewatch.org/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "www.spanishdict.com",
        "b": "spanishdict",
        "u": "https://www.spanishdict.com/translate/{{{s}}}"
    },
    {
        "d": "www.spanishdict.com",
        "b": "spanish",
        "u": "https://www.spanishdict.com/translate/{{{s}}}"
    },
    {
        "d": "www.speakinglatino.com",
        "b": "spanslang",
        "u": "http://www.speakinglatino.com/?s={{{s}}}&advanced=0&search_type=&posts_country=&posts_category=&words_country=&words_category=&words_letter=CHOOSE+A+STARTING+LETTER&all_country=&all_letter=CHOOSE+A+STARTING+LETTER"
    },
    {
        "d": "www.spareroom.co.uk",
        "b": "spare",
        "u": "https://www.spareroom.co.uk/flatshare/flatshare_detail.pl?flatshare_id={{{s}}}"
    },
    {
        "d": "www.sparknotes.com",
        "b": "sparknotes",
        "u": "http://www.sparknotes.com/search?q={{{s}}}"
    },
    {
        "d": "www.speakersassociates.com",
        "b": "speakers",
        "u": "https://www.speakersassociates.com/search?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "www.speedsolving.com",
        "b": "speedsolvingwiki",
        "u": "https://www.speedsolving.com/wiki/index.php?title=Special%3ASearch&search={{{s}}} &go=Go"
    },
    {
        "d": "www.spektrum.de",
        "b": "spekbio",
        "u": "https://www.spektrum.de/lexikon/biologie/?q={{{s}}}"
    },
    {
        "d": "www.spektrum.de",
        "b": "spekgeo",
        "u": "https://www.spektrum.de/lexikon/geographie/?q={{{s}}}"
    },
    {
        "d": "www.speedguide.net",
        "b": "spg",
        "u": "https://www.speedguide.net/search_rez.php?seek={{{s}}}&words=yes"
    },
    {
        "d": "www.splcenter.org",
        "b": "splc",
        "u": "https://www.splcenter.org/resources?keyword={{{s}}}"
    },
    {
        "d": "spongebob.fandom.com",
        "b": "sponge",
        "u": "https://spongebob.fandom.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "spoonacular.com",
        "b": "spoonacular",
        "u": "https://spoonacular.com/{{{s}}}"
    },
    {
        "d": "link.springer.com",
        "b": "springerfree",
        "u": "https://link.springer.com/search?showAll=false&query={{{s}}}"
    },
    {
        "d": "link.springer.com",
        "b": "springerlink",
        "u": "https://link.springer.com/search?query={{{s}}}"
    },
    {
        "d": "link.springer.com",
        "b": "springer",
        "u": "http://link.springer.com/search?query={{{s}}}"
    },
    {
        "d": "sproget.dk",
        "b": "sproget",
        "u": "https://sproget.dk/lookup?SearchableText={{{s}}}"
    },
    {
        "d": "www.ncbi.nlm.nih.gov",
        "b": "sra",
        "u": "http://www.ncbi.nlm.nih.gov/sra/?term={{{s}}}"
    },
    {
        "d": "www.admin.ch",
        "b": "srch",
        "u": "http://www.admin.ch/opc/search/?lang=de&language[]=de&product[]=fg&product[]=oc&product[]=cc&product[]=ba&product[]=jcd&date_range_min=&date_range_max=&d_compilation=both&d_is_in_force=yes&text={{{s}}}"
    },
    {
        "d": "www.ssb.no",
        "b": "ssbno",
        "u": "https://www.ssb.no/sok?sok= {{{s}}}"
    },
    {
        "d": "www.semanticscholar.org",
        "b": "ssch",
        "u": "https://www.semanticscholar.org/search?q={{{s}}}&sort=relevance&ae=false"
    },
    {
        "d": "dictionnaire.sensagent.leparisien.fr",
        "b": "ssg",
        "u": "http://dictionnaire.sensagent.leparisien.fr/{{{s}}}/fr-fr/"
    },
    {
        "d": "ssjc.ujc.cas.cz",
        "b": "ssjc",
        "u": "http://ssjc.ujc.cas.cz/search.php?heslo={{{s}}}"
    },
    {
        "d": "www.speakinglatino.com",
        "b": "sslang",
        "u": "http://www.speakinglatino.com/?s={{{s}}}&advanced=0&search_type=&posts_country=&posts_category=&words_country=&words_category=&words_letter=CHOOSE+A+STARTING+LETTER&all_country=&all_letter=CHOOSE+A+STARTING+LETTER"
    },
    {
        "d": "www.ssoar.info",
        "b": "ssoar",
        "u": "http://www.ssoar.info/ssoar/discover?query={{{s}}}"
    },
    {
        "d": "surrey-primotc.hosted.exlibrisgroup.com",
        "b": "ss",
        "u": "https://surrey-primotc.hosted.exlibrisgroup.com/primo-explore/search?vl(freeText0)={{{s}}}&fn=search&vid=44SUR_VU1&tab=default_tab&query=any,contains,{{{s}}}&search_scope=default_scope"
    },
    {
        "d": "csgostash.com",
        "b": "sst",
        "u": "https://csgostash.com/google-search?q={{{s}}}"
    },
    {
        "d": "www.speedsolving.com",
        "b": "sswiki",
        "u": "https://www.speedsolving.com/wiki/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "stacks.math.columbia.edu",
        "b": "stacksproj",
        "u": "https://stacks.math.columbia.edu/search?query={{{s}}}"
    },
    {
        "d": "www.statenvertaling.net",
        "b": "staten",
        "u": "https://www.statenvertaling.net/zoek.php?q={{{s}}}"
    },
    {
        "d": "www.stationsweb.nl",
        "b": "stationsweb",
        "u": "http://www.stationsweb.nl/stationlijst.asp?station={{{s}}} "
    },
    {
        "d": "www.statista.com",
        "b": "statista",
        "u": "https://www.statista.com/search/?q={{{s}}}"
    },
    {
        "d": "www.statsbiblioteket.dk",
        "b": "statsbiblioteket",
        "u": "https://www.statsbiblioteket.dk/au/?locale=en#/search?query={{{s}}}"
    },
    {
        "d": "statisticsbyjim.com",
        "b": "stats",
        "u": "https://statisticsbyjim.com/?s={{{s}}}"
    },
    {
        "d": "www.stata.com",
        "b": "stdoc",
        "u": "http://www.stata.com/help.cgi?{{{s}}}"
    },
    {
        "d": "portal.stf.jus.br",
        "b": "stf",
        "u": "http://portal.stf.jus.br/processos/listarProcessos.asp?classe=&numeroProcesso={{{s}}}"
    },
    {
        "d": "biblioteket.stockholm.se",
        "b": "sthlmbibbla",
        "u": "https://biblioteket.stockholm.se/sok?freetext={{{s}}}"
    },
    {
        "d": "stilltasty.com",
        "b": "stilltasty",
        "u": "https://stilltasty.com/Search?q={{{s}}}"
    },
    {
        "d": "www.stixoi.info",
        "b": "stixoi",
        "u": "http://www.stixoi.info/stixoi.php?info=SS&keywords={{{s}}}&act=ss"
    },
    {
        "d": "www.straightdope.com",
        "b": "straightdope",
        "u": "http://www.straightdope.com/columns/search?query={{{s}}}&action=search"
    },
    {
        "d": "www.wikileaf.com",
        "b": "strain",
        "u": "https://www.wikileaf.com/strains/?search={{{s}}}"
    },
    {
        "d": "www.biblestudytools.com",
        "b": "strongs",
        "u": "https://www.biblestudytools.com/search/?q={{{s}}}&t=kjv&s=Bibles"
    },
    {
        "d": "st-takla.org",
        "b": "sts",
        "u": "http://st-takla.org/Coptic-Search-St-Takla.org/site_search.php?q={{{s}}}&op=and"
    },
    {
        "d": "www.sacred-texts.com",
        "b": "sttexts",
        "u": "http://www.sacred-texts.com/cat/srchtitl.htm?search_str={{{s}}}"
    },
    {
        "d": "www.studentdoctor.net",
        "b": "studentdoctor",
        "u": "http://www.studentdoctor.net/search-sdn/?cx={{{s}}}"
    },
    {
        "d": "studybible.info",
        "b": "studybible",
        "u": "http://studybible.info/YLT/{{{s}}}"
    },
    {
        "d": "study.com",
        "b": "study",
        "u": "https://study.com/search/text/academy.html?q={{{s}}}"
    },
    {
        "d": "www.stupidedia.org",
        "b": "stupi",
        "u": "http://www.stupidedia.org/stupi?title=Spezial%3ASuche&search={{{s}}} "
    },
    {
        "d": "www.superteacherworksheets.com",
        "b": "stws",
        "u": "https://www.superteacherworksheets.com/search-results.html?srch_words={{{s}}}"
    },
    {
        "d": "www.sudoc.abes.fr",
        "b": "sudoc",
        "u": "http://www.sudoc.abes.fr//DB=2.1/TTL=1/CMD?ACT=SRCHA&IKT=1016&SRT=RLV&TRM={{{s}}}"
    },
    {
        "d": "learn.sharedusemobilitycenter.org",
        "b": "sumc",
        "u": "https://learn.sharedusemobilitycenter.org/search/?keyword={{{s}}}"
    },
    {
        "d": "sunnah.com",
        "b": "sunnah",
        "u": "https://sunnah.com/search/?q={{{s}}}"
    },
    {
        "d": "supercoachtalk.com",
        "b": "supercoachtalk",
        "u": "http://supercoachtalk.com/?s={{{s}}}"
    },
    {
        "d": "www.google.fr",
        "b": "superphysique",
        "u": "https://www.google.fr/search?q=site:www.superphysique.org+{{{s}}}"
    },
    {
        "d": "suttacentral.net",
        "b": "suttac",
        "u": "https://suttacentral.net/search?query={{{s}}}"
    },
    {
        "d": "mw.lojban.org",
        "b": "sutysisku",
        "u": "http://mw.lojban.org/extensions/ilmentufa/i/en/index.html#sisku/{{{s}}}"
    },
    {
        "d": "stanford.rimeto.io",
        "b": "suwho",
        "u": "https://stanford.rimeto.io/search/{{{s}}}"
    },
    {
        "d": "svenska.se",
        "b": "svao",
        "u": "https://svenska.se/tre/?sok={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "sven",
        "u": "https://translate.google.com/#sv/en/{{{s}}}"
    },
    {
        "d": "svenska.se",
        "b": "svenska",
        "u": "https://svenska.se/tre/?sok={{{s}}}&pz=1"
    },
    {
        "d": "help.sitevision.se",
        "b": "svhelp",
        "u": "https://help.sitevision.se/SiteVision_4_0/searchhelp.html?query={{{s}}}"
    },
    {
        "d": "www.synonymer.se",
        "b": "svs",
        "u": "https://www.synonymer.se/sv-syn/{{{s}}}"
    },
    {
        "d": "es.stardewvalleywiki.com",
        "b": "svwe",
        "u": "https://es.stardewvalleywiki.com/ {{{s}}}"
    },
    {
        "d": "www.swissbib.ch",
        "b": "swissbib",
        "u": "https://www.swissbib.ch/Search/Results?lookfor={{{s}}}&type=AllFields"
    },
    {
        "d": "searchworks.stanford.edu",
        "b": "sworks",
        "u": "http://searchworks.stanford.edu/?utf8=✓&search_field=search&q={{{s}}}"
    },
    {
        "d": "simple.wikipedia.org",
        "b": "sw",
        "u": "https://simple.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.sweetsearch.com",
        "b": "swtsearch",
        "u": "http://www.sweetsearch.com/search?q={{{s}}}"
    },
    {
        "d": "words.bighugelabs.com",
        "b": "sy",
        "u": "http://words.bighugelabs.com/{{{s}}}"
    },
    {
        "d": "www.symbolab.com",
        "b": "symb",
        "u": "https://www.symbolab.com/solver/step-by-step/{{{s}}}"
    },
    {
        "d": "www.symbolab.com",
        "b": "symolab",
        "u": "http://www.symbolab.com/solver/step-by-step/{{{s}}}"
    },
    {
        "d": "www.synapse.org",
        "b": "synapse",
        "u": "https://www.synapse.org/#!Search:{{{s}}} "
    },
    {
        "d": "synonyme.de",
        "b": "synde",
        "u": "http://synonyme.de/{{{s}}}/"
    },
    {
        "d": "www.crisco.unicaen.fr",
        "b": "synf",
        "u": "http://www.crisco.unicaen.fr/des/synonymes/{{{s}}}"
    },
    {
        "d": "synoniemen.net",
        "b": "synoniemen",
        "u": "http://synoniemen.net/index.php?zoekterm={{{s}}}"
    },
    {
        "d": "www.slovnik-synonym.cz",
        "b": "synonyma",
        "u": "http://www.slovnik-synonym.cz/web.php/hledat?typ_hledani=prefix&cizi_slovo={{{s}}}"
    },
    {
        "d": "www.crisco.unicaen.fr",
        "b": "synonyme",
        "u": "http://www.crisco.unicaen.fr/des/synonymes/{{{s}}}"
    },
    {
        "d": "www.synonymer.se",
        "b": "synonymer",
        "u": "https://www.synonymer.se/sv-syn/{{{s}}}"
    },
    {
        "d": "synonymes.com",
        "b": "synonymes",
        "u": "http://synonymes.com/resultats.php?mot={{{s}}}"
    },
    {
        "d": "thesaurus.com",
        "b": "synonyms",
        "u": "http://thesaurus.com/browse/{{{s}}}"
    },
    {
        "d": "www.thesaurus.com",
        "b": "synonym",
        "u": "http://www.thesaurus.com/browse/{{{s}}} "
    },
    {
        "d": "www.synonymo.fr",
        "b": "syno",
        "u": "http://www.synonymo.fr/syno/{{{s}}}"
    },
    {
        "d": "www.synonimy.pl",
        "b": "synpl",
        "u": "https://www.synonimy.pl/synonim/{{{s}}}"
    },
    {
        "d": "thesaurus.com",
        "b": "syn",
        "u": "http://thesaurus.com/browse/{{{s}}}"
    },
    {
        "d": "www.systranet.com",
        "b": "sysef",
        "u": "http://www.systranet.com/fr/fr/dictionary/english-french/{{{s}}}?"
    },
    {
        "d": "www.systranet.com",
        "b": "sysensw",
        "u": "http://www.systranet.com/fr/fr/dictionary/english-swedish/{{{s}}}?"
    },
    {
        "d": "www.systranet.com",
        "b": "sysfe",
        "u": "http://www.systranet.com/fr/fr/dictionary/french-english/{{{s}}}?"
    },
    {
        "d": "www.systranet.com",
        "b": "sysswen",
        "u": "http://www.systranet.com/fr/fr/dictionary/swedish-english/{{{s}}}?"
    },
    {
        "d": "slovnik.seznam.cz",
        "b": "sznsfr",
        "u": "https://slovnik.seznam.cz/fr-cz/?q={{{s}}}"
    },
    {
        "d": "taaladvies.net",
        "b": "taal",
        "u": "http://taaladvies.net/taal/advies/zoek.php?q={{{s}}}"
    },
    {
        "d": "www.tafesa.edu.au",
        "b": "tafesa",
        "u": "https://www.tafesa.edu.au/search-results?indexCatalogue=all&searchQuery={{{s}}}"
    },
    {
        "d": "www.trafikverket.se",
        "b": "tåg",
        "u": "https://www.trafikverket.se/trafikinformation/tag/?&TrainOrStation={{{s}}}"
    },
    {
        "d": "www.tripadvisor.it",
        "b": "tait",
        "u": "https://www.tripadvisor.it/Search?q={{{s}}}"
    },
    {
        "d": "takoboto.jp",
        "b": "takoboto",
        "u": "http://takoboto.jp/?q={{{s}}}"
    },
    {
        "d": "takoboto.jp",
        "b": "tako",
        "u": "http://takoboto.jp/?q={{{s}}}"
    },
    {
        "d": "tiger-algebra.com",
        "b": "talg",
        "u": "http://tiger-algebra.com/drill/{{{s}}}/"
    },
    {
        "d": "tangorin.com",
        "b": "tangorin",
        "u": "http://tangorin.com/examples/{{{s}}}"
    },
    {
        "d": "www.tanks-encyclopedia.com",
        "b": "tanks",
        "u": "http://www.tanks-encyclopedia.com/?s={{{s}}}"
    },
    {
        "d": "tanzil.net",
        "b": "tanzil",
        "u": "http://tanzil.net/#search/quran/{{{s}}}"
    },
    {
        "d": "www.tastekid.com",
        "b": "tastekid",
        "u": "http://www.tastekid.com/like/{{{s}}}"
    },
    {
        "d": "www.tasteline.com",
        "b": "tasteline",
        "u": "http://www.tasteline.com/ReceptSok/{{{s}}}"
    },
    {
        "d": "tatoeba.org",
        "b": "tatoeba",
        "u": "http://tatoeba.org/sentences/search?query={{{s}}}"
    },
    {
        "d": "tatoeba.org",
        "b": "tatoebla",
        "u": "http://tatoeba.org/sentences/search?query={{{s}}}"
    },
    {
        "d": "tatoeba.org",
        "b": "tato",
        "u": "https://tatoeba.org/sentences/search?query={{{s}}}"
    },
    {
        "d": "www.tripadvisor.com",
        "b": "ta",
        "u": "http://www.tripadvisor.com/Search?q={{{s}}} "
    },
    {
        "d": "ta.wikipedia.org",
        "b": "tawk",
        "u": "https://ta.wikipedia.org/w/index.php?search= {{{s}}}&title=%E0%AE%9A%E0%AE%BF%E0%AE%B1%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81%3ASearch&go=%E0%AE%9A%E0%AF%86%E0%AE%B2%E0%AF%8D"
    },
    {
        "d": "www.taxi.it",
        "b": "taxi",
        "u": "https://www.taxi.it/?s={{{s}}}"
    },
    {
        "d": "www.thebluealliance.com",
        "b": "tba",
        "u": "https://www.thebluealliance.com/search?q={{{s}}}"
    },
    {
        "d": "bigbangtheory.wikia.com",
        "b": "tbbtwiki",
        "u": "http://bigbangtheory.wikia.com/wiki/Special:Search?search={{{s}}}&fulltext=Search&ns0=1&ns14=1#"
    },
    {
        "d": "www.tradingcarddb.com",
        "b": "tcdb",
        "u": "https://www.tradingcarddb.com/Search.cfm?SearchCategory=Baseball&cx=partner-pub-2387250451295121%3Ahes0ib-44xp&cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}"
    },
    {
        "d": "www.thecanadianencyclopedia.ca",
        "b": "tce",
        "u": "https://www.thecanadianencyclopedia.ca/en/search?search={{{s}}}"
    },
    {
        "d": "www.statutes.legis.state.tx.us",
        "b": "tcs",
        "u": "http://www.statutes.legis.state.tx.us/SearchResults.aspx?CP=1&Code=ZZ&Phrase={{{s}}}"
    },
    {
        "d": "sozluk.gov.tr",
        "b": "tdk",
        "u": "https://sozluk.gov.tr/?kelime={{{s}}}"
    },
    {
        "d": "www.tearma.ie",
        "b": "tearma",
        "u": "http://www.tearma.ie/Search.aspx?term={{{s}}}"
    },
    {
        "d": "www.technobyte.org",
        "b": "technobyte",
        "u": "https://www.technobyte.org/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "tec",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Ahttp%3A%2F%2Fwww.ecologicalcitizen.net%2F&ia=web"
    },
    {
        "d": "ed.ted.com",
        "b": "teded",
        "u": "https://ed.ted.com/search?utf8=✓&qs={{{s}}}"
    },
    {
        "d": "yellowpages.superpages.com",
        "b": "tel",
        "u": "http://yellowpages.superpages.com/listings.jsp?C={{{s}}}&CS=L&MCBP=true&search=Find+It&SRC=&STYPE=S&SCS=&channelId=&sessionId="
    },
    {
        "d": "www.treccani.it",
        "b": "tenc",
        "u": "http://www.treccani.it/enciclopedia/tag/{{{s}}}/"
    },
    {
        "d": "teonanacatl.org",
        "b": "teo",
        "u": "https://teonanacatl.org/search/1/?q={{{s}}}"
    },
    {
        "d": "www.termania.net",
        "b": "termania",
        "u": "http://www.termania.net/iskanje?query={{{s}}}&SearchIn=All"
    },
    {
        "d": "www.termcat.cat",
        "b": "termcat",
        "u": "https://www.termcat.cat/cercaterm/{{{s}}}?type=basic"
    },
    {
        "d": "tesoro.pr",
        "b": "tesoro",
        "u": "https://tesoro.pr/busqueda?q={{{s}}}"
    },
    {
        "d": "www.greek-language.gr",
        "b": "test",
        "u": "http://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/search.html?lq={{{s}}}"
    },
    {
        "d": "www.treccani.it",
        "b": "te",
        "u": "http://www.treccani.it/enciclopedia/tag/{{{s}}}/"
    },
    {
        "d": "eur-lex.europa.eu",
        "b": "teu",
        "u": "http://eur-lex.europa.eu/search.html?wh0=DN%3D12012M*&lbStatus=ALL&qid=1459001887262&DTS_DOM=EU_LAW&ARTICLE_NUM={{{s}}}&treatyStatus=ARTICLE_NUMBER&type=advanced&lang=en&SUBDOM_INIT=TREATIES&legalCelex=TEU_2012&DTS_SUBDOM=TREATIES"
    },
    {
        "d": "te.wikipedia.org",
        "b": "tewiki",
        "u": "https://te.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.textileschool.com",
        "b": "textileschool",
        "u": "https://www.textileschool.com/?s={{{s}}}"
    },
    {
        "d": "acronyms.thefreedictionary.com",
        "b": "tfdacronyms",
        "u": "http://acronyms.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "de.thefreedictionary.com",
        "b": "tfdde",
        "u": "http://de.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "encyclopedia2.thefreedictionary.com",
        "b": "tfdencyclopedia",
        "u": "http://encyclopedia2.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "financial-dictionary.thefreedictionary.com",
        "b": "tfdfinancial",
        "u": "http://financial-dictionary.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "idioms.thefreedictionary.com",
        "b": "tfdidioms",
        "u": "http://idioms.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "legal-dictionary.thefreedictionary.com",
        "b": "tfdlegal",
        "u": "http://legal-dictionary.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "medical-dictionary.thefreedictionary.com",
        "b": "tfdmedical",
        "u": "http://medical-dictionary.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "www.thefreedictionary.com",
        "b": "tfd",
        "u": "http://www.thefreedictionary.com/{{{s}}}"
    },
    {
        "d": "forum.tfes.org",
        "b": "tfes",
        "u": "https://forum.tfes.org/index.php?action=search2;search={{{s}}}"
    },
    {
        "d": "www.tfl.gov.uk",
        "b": "tfl",
        "u": "http://www.tfl.gov.uk/tfl/search/?keywords={{{s}}}"
    },
    {
        "d": "search.tga.gov.au",
        "b": "tga",
        "u": "https://search.tga.gov.au/s/search.html?collection=tga-websites-web&query={{{s}}}&op=Search"
    },
    {
        "d": "www.thegreatcourses.com",
        "b": "tgc",
        "u": "http://www.thegreatcourses.com/search/result/?q={{{s}}}"
    },
    {
        "d": "thegamesdb.net",
        "b": "tgdb",
        "u": "http://thegamesdb.net/search/?string={{{s}}}&function=Search"
    },
    {
        "d": "tangorin.com",
        "b": "tgdict",
        "u": "https://tangorin.com/words?search={{{s}}}"
    },
    {
        "d": "tangorin.com",
        "b": "tgr",
        "u": "http://tangorin.com/general/{{{s}}}"
    },
    {
        "d": "www.thai-language.com",
        "b": "thai",
        "u": "http://www.thai-language.com/default.aspx?search={{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "then",
        "u": "https://translate.google.com/#th/en/{{{s}}}"
    },
    {
        "d": "www.theses.fr",
        "b": "theses",
        "u": "http://www.theses.fr/?q={{{s}}}"
    },
    {
        "d": "tel.archives-ouvertes.fr",
        "b": "thesetel",
        "u": "https://tel.archives-ouvertes.fr/search/index/?q={{{s}}}"
    },
    {
        "d": "www.thesaurus.com",
        "b": "thes",
        "u": "http://www.thesaurus.com/browse/{{{s}}}"
    },
    {
        "d": "www.theyworkforyou.com",
        "b": "theyworkforyou",
        "u": "http://www.theyworkforyou.com/search/?q={{{s}}}"
    },
    {
        "d": "suche.thulb.uni-jena.de",
        "b": "thj",
        "u": "https://suche.thulb.uni-jena.de/Search/Results?lookfor={{{s}}}"
    },
    {
        "d": "www.th-nuernberg.de",
        "b": "thnuernberg",
        "u": "https://www.th-nuernberg.de/suche/?id=1&L=0&q={{{s}}}"
    },
    {
        "d": "www.thoughtco.com",
        "b": "thoughtco",
        "u": "https://www.thoughtco.com/search?q={{{s}}}"
    },
    {
        "d": "www.thrustcurve.org",
        "b": "thrustcurve",
        "u": "http://www.thrustcurve.org/motorsearch.jsp?designation={{{s}}}"
    },
    {
        "d": "opac.tib.uni-hannover.de",
        "b": "tib",
        "u": "http://opac.tib.uni-hannover.de/DB=1/CHARSET=UTF-8/SRCH?IKT=1016&TRM={{{s}}}"
    },
    {
        "d": "opac.tib.uni-hannover.de",
        "b": "tibub",
        "u": "http://opac.tib.uni-hannover.de/DB=1/SET=1/TTL=1/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM={{{s}}}"
    },
    {
        "d": "opac.tib.uni-hannover.de",
        "b": "tiho",
        "u": "http://opac.tib.uni-hannover.de/DB=5/LNG=DU/SID=40343eab-1/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM={{{s}}}"
    },
    {
        "d": "llevatilde.es",
        "b": "tilde",
        "u": "https://llevatilde.es/palabra/{{{s}}}"
    },
    {
        "d": "ideja.d2.si",
        "b": "timekiller",
        "u": "https://ideja.d2.si/results?q={{{s}}}"
    },
    {
        "d": "tippie.uiowa.edu",
        "b": "tippie",
        "u": "https://tippie.uiowa.edu/google-search?search={{{s}}}"
    },
    {
        "d": "tiss.tuwien.ac.at",
        "b": "tiss",
        "u": "https://tiss.tuwien.ac.at/adressbuch/adressbuch/suche?suchtext={{{s}}}"
    },
    {
        "d": "www.tradooit.com",
        "b": "tit",
        "u": "http://www.tradooit.com/info.php?q={{{s}}} &btn-recherche.x=0&btn-recherche.y=0&langFrom=en&langTo=fr"
    },
    {
        "d": "tradukka.com",
        "b": "tkk2es",
        "u": "http://tradukka.com/translate/es/{{{s}}}"
    },
    {
        "d": "tradukka.com",
        "b": "tkk",
        "u": "http://tradukka.com/translate/en/{{{s}}}"
    },
    {
        "d": "www.cnrtl.fr",
        "b": "tlfi",
        "u": "http://www.cnrtl.fr/definition/{{{s}}}"
    },
    {
        "d": "trademarks.justia.com",
        "b": "tmark",
        "u": "http://trademarks.justia.com/search.php?q={{{s}}}"
    },
    {
        "d": "www.travelmath.com",
        "b": "tmn",
        "u": "http://www.travelmath.com/nearest-airport/{{{s}}}"
    },
    {
        "d": "discovery.nationalarchives.gov.uk",
        "b": "tna",
        "u": "http://discovery.nationalarchives.gov.uk/results/r?_q={{{s}}}"
    },
    {
        "d": "www.tolweb.org",
        "b": "tof",
        "u": "http://www.tolweb.org/tree/{{{s}}}"
    },
    {
        "d": "tolkiengateway.net",
        "b": "tolkien",
        "u": "http://tolkiengateway.net/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "tolweb.org",
        "b": "tol",
        "u": "http://tolweb.org/tree/home.pages/search.html?q={{{s}}}&sa=Search"
    },
    {
        "d": "www.techopedia.com",
        "b": "top",
        "u": "https://www.techopedia.com/search?q={{{s}}}&section=all"
    },
    {
        "d": "www.touristindonesia.tk",
        "b": "tourindo",
        "u": "https://www.touristindonesia.tk/search?q={{{s}}}"
    },
    {
        "d": "www.torontopubliclibrary.ca",
        "b": "tpl",
        "u": "http://www.torontopubliclibrary.ca/search.jsp?Ntt={{{s}}}"
    },
    {
        "d": "thesaurus.plus",
        "b": "tp",
        "u": "https://thesaurus.plus/search?q={{{s}}}"
    },
    {
        "d": "www.traegergrills.com",
        "b": "traeger",
        "u": "https://www.traegergrills.com/recipes?types=RecipeDetail&term={{{s}}}"
    },
    {
        "d": "tramper.nz",
        "b": "tramper",
        "u": "http://tramper.nz/?view=search&keywords={{{s}}}"
    },
    {
        "d": "www.trappersreport.com",
        "b": "trap",
        "u": "https://www.trappersreport.com/?q={{{s}}}"
    },
    {
        "d": "traum-deutung.de",
        "b": "traumdeutung",
        "u": "https://traum-deutung.de/?s={{{s}}}"
    },
    {
        "d": "thewelltravelledfamily.com",
        "b": "travel",
        "u": "https://thewelltravelledfamily.com/?s={{{s}}}"
    },
    {
        "d": "www.treccani.it",
        "b": "treccani",
        "u": "http://www.treccani.it/vocabolario/tag/{{{s}}}"
    },
    {
        "d": "www.thesaurus.com",
        "b": "tref",
        "u": "http://www.thesaurus.com/browse/{{{s}}}"
    },
    {
        "d": "translate.google.com",
        "b": "trenth",
        "u": "https://translate.google.com/#en/th/{{{s}}}"
    },
    {
        "d": "www.tripadvisor.com",
        "b": "tripadvisor",
        "u": "http://www.tripadvisor.com/Search?q={{{s}}}&sub-search=Go"
    },
    {
        "d": "www.tripoto.com",
        "b": "tripoto",
        "u": "https://www.tripoto.com/travel-guide/{{{s}}}"
    },
    {
        "d": "wiki.tripsit.me",
        "b": "tripsit",
        "u": "https://wiki.tripsit.me/index.php?search={{{s}}}"
    },
    {
        "d": "www.tripdatabase.com",
        "b": "trip",
        "u": "http://www.tripdatabase.com/search?criteria={{{s}}}"
    },
    {
        "d": "trove.nla.gov.au",
        "b": "trove",
        "u": "http://trove.nla.gov.au/result?q={{{s}}} "
    },
    {
        "d": "translatica.pl",
        "b": "trpl",
        "u": "http://translatica.pl/szukaj/{{{s}}}"
    },
    {
        "d": "www.grnpedia.org",
        "b": "trrust",
        "u": "http://www.grnpedia.org/trrust/result.php?gene={{{s}}}&species=human&confirm=0"
    },
    {
        "d": "www.trulia.com",
        "b": "trulia",
        "u": "http://www.trulia.com/validate.php?tst=h&display=for+sale&search={{{s}}}&type=&min_price=min&max_price=max&min_num_beds=0&min_num_baths=0&min_size=0&submit_btn=SEARCH"
    },
    {
        "d": "www.tryggehandel.se",
        "b": "tryggehandel",
        "u": "https://www.tryggehandel.se/?s={{{s}}}"
    },
    {
        "d": "www.thestudentroom.co.uk",
        "b": "tsr",
        "u": "https://www.thestudentroom.co.uk/search/?tsr-search-query={{{s}}}"
    },
    {
        "d": "tatoeba.org",
        "b": "ttb-ita",
        "u": "http://tatoeba.org/eng/sentences/search?query={{{s}}}&from=und&to=ita"
    },
    {
        "d": "books.google.com",
        "b": "ttbooks",
        "u": "https://books.google.com/talktobooks/query?q={{{s}}}"
    },
    {
        "d": "www.btb.termiumplus.gc.ca",
        "b": "t+",
        "u": "http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra&i=&index=alt&__index=alt&srchtxt={{{s}}}&comencsrch.x=0&comencsrch.y=0"
    },
    {
        "d": "www.thesaurus.com",
        "b": "t",
        "u": "http://www.thesaurus.com/browse/{{{s}}}"
    },
    {
        "d": "techterms.com",
        "b": "ttt",
        "u": "https://techterms.com/search?query={{{s}}}"
    },
    {
        "d": "katalog.tub.tuhh.de",
        "b": "tub",
        "u": "https://katalog.tub.tuhh.de/Search/Results?lookfor={{{s}}}&type=AllFields&limit=20&sort=relevance"
    },
    {
        "d": "duckduckgo.com",
        "b": "tuc",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Awww.tu-chemnitz.de"
    },
    {
        "d": "www.tudelft.nl",
        "b": "tud",
        "u": "https://www.tudelft.nl/en/search/?q={{{s}}}"
    },
    {
        "d": "www.tudogostoso.com.br",
        "b": "tudogostoso",
        "u": "http://www.tudogostoso.com.br/busca?q={{{s}}}"
    },
    {
        "d": "search.tugraz.at",
        "b": "tug",
        "u": "http://search.tugraz.at/search?q={{{s}}}&site=Alle&btnG=Suchen&client=tug_portal&output=xml_no_dtd&proxystylesheet=tug_portal&sitesearch=www.tugraz.at"
    },
    {
        "d": "www.tuhh.de",
        "b": "tuhh",
        "u": "https://www.tuhh.de/tuhh/suche/suchergebnis.html?cx=013498366615220259019:ljc1ircsxvi&ie=utf8&hl=de&q={{{s}}}"
    },
    {
        "d": "www.tujavortaro.net",
        "b": "tuj",
        "u": "http://www.tujavortaro.net/?vorto={{{s}}}"
    },
    {
        "d": "www.tum.de",
        "b": "tum",
        "u": "https://www.tum.de/en/spezialseiten/search/?q={{{s}}}&sites=all"
    },
    {
        "d": "tunearch.org",
        "b": "tunearch",
        "u": "https://tunearch.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "tureng.com",
        "b": "tureng",
        "u": "http://tureng.com/tr/turkce-ingilizce/{{{s}}}"
    },
    {
        "d": "tureng.com",
        "b": "tur",
        "u": "http://tureng.com/tr/turkce-ingilizce/{{{s}}}"
    },
    {
        "d": "tu-dresden.de",
        "b": "tu",
        "u": "https://tu-dresden.de/@@search?SearchableText={{{s}}}"
    },
    {
        "d": "catalogplus.tuwien.ac.at",
        "b": "tuwlib",
        "u": "https://catalogplus.tuwien.ac.at/primo_library/libweb/action/dlSearch.do?queryfield=&x=0&y=0&institution=UTW&vid=UTW&tab=default_tab&search_scope=UTW&mode=Basic&indx=1&bulkSize=10&dum=true&highlight=true&pcAvailabiltyMode=false&prefLang=en_US&dummyChar=♥&query=any%2Ccontains%2C{{{s}}}&displayField=title"
    },
    {
        "d": "www.treccani.it",
        "b": "tvoc",
        "u": "http://www.treccani.it/vocabolario/tag/{{{s}}}/"
    },
    {
        "d": "tvtropes.org",
        "b": "tvt",
        "u": "http://tvtropes.org/pmwiki/search_result.php?q={{{s}}}"
    },
    {
        "d": "www.theyworkforyou.com",
        "b": "twfy",
        "u": "http://www.theyworkforyou.com/search/?q={{{s}}}"
    },
    {
        "d": "twitter.com",
        "b": "twid",
        "u": "https://twitter.com/intent/user?user_id={{{s}}}"
    },
    {
        "d": "trove.wikia.com",
        "b": "twiki",
        "u": "http://trove.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "twitchemotes.com",
        "b": "twitche",
        "u": "https://twitchemotes.com/search?query={{{s}}}"
    },
    {
        "d": "tyda.se",
        "b": "tydade",
        "u": "http://tyda.se/search/{{{s}}}?lang%5B0%5D=de&lang%5B1%5D=sv"
    },
    {
        "d": "tyda.se",
        "b": "tyd",
        "u": "http://tyda.se/search/{{{s}}}?lang%5B0%5D=en&lang%5B1%5D=fr&lang%5B2%5D=de&lang%5B3%5D=es&lang%5B4%5D=la&lang%5B5%5D=nb&lang%5B6%5D=da&lang%5B7%5D=sv"
    },
    {
        "d": "www.tyndale.com",
        "b": "tyndale",
        "u": "https://www.tyndale.com/search?q={{{s}}}&f="
    },
    {
        "d": "ubc.summon.serialssolutions.com",
        "b": "ubclib",
        "u": "http://ubc.summon.serialssolutions.com/search?s.cmd=addFacetValueFilters%28ContentType%2CNewspaper+Article%3At%29&spellcheck=true&s.q={{{s}}}"
    },
    {
        "d": "katalog.ub.uni-freiburg.de",
        "b": "ubfr",
        "u": "https://katalog.ub.uni-freiburg.de/opac/RDSIndex/Search?lookfor={{{s}}}&source=homepage"
    },
    {
        "d": "gu-se-primo.hosted.exlibrisgroup.com",
        "b": "ub",
        "u": "https://gu-se-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=46GUB_VU1&lang=sv_SE&offset=0"
    },
    {
        "d": "www.ub.uni-heidelberg.de",
        "b": "ubhd",
        "u": "http://www.ub.uni-heidelberg.de/suche/suche.html?cx=009778813800417314295%3Af3s5sfjqeck&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa=Suche"
    },
    {
        "d": "beluga.sub.uni-hamburg.de",
        "b": "ubhh",
        "u": "https://beluga.sub.uni-hamburg.de/vufind/Search/Results?lookfor={{{s}}}&submitForm=Suchen&library=BELUGA_ALL"
    },
    {
        "d": "hds.hebis.de",
        "b": "ubjgu",
        "u": "https://hds.hebis.de/ubmz/Search/Results?lookfor={{{s}}}&trackSearchEvent=Einfache+Suche&type=allfields&search=new&submit=Suchen"
    },
    {
        "d": "hds.hebis.de",
        "b": "ubks",
        "u": "https://hds.hebis.de/ubks/Discover/EBSCO?lookfor={{{s}}} "
    },
    {
        "d": "katalog.ub.uni-leipzig.de",
        "b": "ubl",
        "u": "https://katalog.ub.uni-leipzig.de/Search/Results?lookfor={{{s}}}"
    },
    {
        "d": "rds-tue.ibs-bw.de",
        "b": "ubt",
        "u": "https://rds-tue.ibs-bw.de/opac/RDSIndex/Search?lookfor={{{s}}}"
    },
    {
        "d": "www.ucdavis.edu",
        "b": "ucd",
        "u": "https://www.ucdavis.edu/search/google/{{{s}}}"
    },
    {
        "d": "catalog.lib.uchicago.edu",
        "b": "uchi",
        "u": "https://catalog.lib.uchicago.edu/vufind/Search/Results?lookfor={{{s}}} &type=AllFields"
    },
    {
        "d": "ucl-new-primo.hosted.exlibrisgroup.com",
        "b": "ucllib",
        "u": "https://ucl-new-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{{s}}}&offset=0&tab=local&vid=UCL_VU2&search_scope=CSCOP_UCL"
    },
    {
        "d": "search2.ucl.ac.uk",
        "b": "ucl",
        "u": "https://search2.ucl.ac.uk/s/search.html?query={{{s}}}&collection=website-meta&profile=_website&tab=websites&submit=Go"
    },
    {
        "d": "www.genome.ucsc.edu",
        "b": "ucscgb",
        "u": "http://www.genome.ucsc.edu/cgi-bin/hgTracks?hgsid=592541357_hq8TArn5c0CoLwcXM3n3eZOaR8ZC&org=Human&db=hg38&position={{{s}}}&pix=800"
    },
    {
        "d": "catalog.lib.uchicago.edu",
        "b": "uc",
        "u": "https://catalog.lib.uchicago.edu/vufind/Search/Results?lookfor={{{s}}}&type=AllFields"
    },
    {
        "d": "vancouverunitarians.ca",
        "b": "ucv",
        "u": "http://vancouverunitarians.ca/?s={{{s}}}"
    },
    {
        "d": "www.udemy.com",
        "b": "udemy",
        "u": "https://www.udemy.com/courses/search/?q={{{s}}}"
    },
    {
        "d": "www.urbandictionary.com",
        "b": "ud",
        "u": "https://www.urbandictionary.com/define.php?term={{{s}}}"
    },
    {
        "d": "ufind.univie.ac.at",
        "b": "ufind",
        "u": "https://ufind.univie.ac.at/de/search.html?filter=all&query={{{s}}}"
    },
    {
        "d": "www.ufrj.br",
        "b": "ufrj",
        "u": "http://www.ufrj.br/buscagoogle2.php?ie=utf-8&oe=utf-8&cx=001879131226118048161%3Ac12ayzh7sok&cof=FORID%3A11&q={{{s}}}"
    },
    {
        "d": "www.ugr.es",
        "b": "ugr",
        "u": "http://www.ugr.es/pages/search?query={{{s}}}"
    },
    {
        "d": "www.uhasselt.be",
        "b": "uh",
        "u": "https://www.uhasselt.be/google-search?q={{{s}}}"
    },
    {
        "d": "www.ultralingua.com",
        "b": "uif",
        "u": "http://www.ultralingua.com/onlinedictionary/dictionary#src_lang=Italian&dest_lang=French&query={{{s}}}"
    },
    {
        "d": "www.uitmuntend.de",
        "b": "uitm",
        "u": "http://www.uitmuntend.de/woerterbuch/{{{s}}}/"
    },
    {
        "d": "www.ujaen.es",
        "b": "uja",
        "u": "https://www.ujaen.es/search?s={{{s}}}"
    },
    {
        "d": "prirucka.ujc.cas.cz",
        "b": "ujc",
        "u": "http://prirucka.ujc.cas.cz/?slovo={{{s}}}&Hledej=Hledej"
    },
    {
        "d": "petition.parliament.uk",
        "b": "ukgovpeti",
        "u": "https://petition.parliament.uk/petitions?q={{{s}}}"
    },
    {
        "d": "ukikipedia.net",
        "b": "ukiki",
        "u": "https://ukikipedia.net/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "www.legislation.gov.uk",
        "b": "uklaw",
        "u": "http://www.legislation.gov.uk/all?title={{{s}}}"
    },
    {
        "d": "www.uni-konstanz.de",
        "b": "ukn",
        "u": "https://www.uni-konstanz.de/suche/?q={{{s}}}"
    },
    {
        "d": "www.parliament.uk",
        "b": "ukparl",
        "u": "http://www.parliament.uk/search/results/?q={{{s}}}"
    },
    {
        "d": "www.parliament.uk",
        "b": "ukp",
        "u": "http://www.parliament.uk/search/results/?q={{{s}}}"
    },
    {
        "d": "uk.wikipedia.org",
        "b": "ukwiki",
        "u": "https://uk.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "cibleplus.ulb.ac.be",
        "b": "ulb",
        "u": "https://cibleplus.ulb.ac.be/primo-explore/search?query=any,contains,{{{s}}}&tab=default_tab&search_scope=default_scope&vid=32ULB_VU1&lang=fr_FR&offset=0"
    },
    {
        "d": "hds.hebis.de",
        "b": "ulbda",
        "u": "https://hds.hebis.de/ulbda/Search/Results?lookfor= {{{s}}}&service=catalog"
    },
    {
        "d": "katalog.ulb.hhu.de",
        "b": "ulbd",
        "u": "https://katalog.ulb.hhu.de/Search/Results?lookfor={{{s}}}&type=AllFields"
    },
    {
        "d": "hds.hebis.de",
        "b": "ulbh",
        "u": "https://hds.hebis.de/ulbda/Search/Results?lookfor={{{s}}}&service=catalog"
    },
    {
        "d": "www.umassd.edu",
        "b": "umassd",
        "u": "https://www.umassd.edu/universitysearch/?q={{{s}}}"
    },
    {
        "d": "www.umass.edu",
        "b": "umass",
        "u": "https://www.umass.edu/search/#stq={{{s}}}&stp=1"
    },
    {
        "d": "www.umb.edu",
        "b": "umb",
        "u": "https://www.umb.edu/search?cx=001225130692263366863%3Auxj4oosyzxy&cof=FORID%3A11&q={{{s}}}"
    },
    {
        "d": "www.searchum.umd.edu",
        "b": "umd",
        "u": "http://www.searchum.umd.edu/search?site=UMCP&client=UMCP&proxystylesheet=UMCP&output=xml_no_dtd&q={{{s}}}"
    },
    {
        "d": "search.unimelb.edu.au",
        "b": "umelb",
        "u": "https://search.unimelb.edu.au/?q={{{s}}}"
    },
    {
        "d": "umich.edu",
        "b": "umich",
        "u": "http://umich.edu/search/keywords/{{{s}}}/"
    },
    {
        "d": "opac.bu.umk.pl",
        "b": "umk",
        "u": "http://opac.bu.umk.pl/webpac-bin/B_horizonPL/wgbroker.exe?new+-access+top+search+open+CI+{{{s}}}"
    },
    {
        "d": "primo-pmtna01.hosted.exlibrisgroup.com",
        "b": "uml",
        "u": "https://primo-pmtna01.hosted.exlibrisgroup.com/primo-explore/search?institution=UMB&vid=UMB&tab=default_tab&search_scope=UManitoba&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{{s}}}&displayField=all&pcAvailabiltyMode=true&sortby=rank&lang=en_US"
    },
    {
        "d": "search.umn.edu",
        "b": "umn",
        "u": "https://search.umn.edu/tc/index.php?q={{{s}}} "
    },
    {
        "d": "repositorio.unb.br",
        "b": "unbri",
        "u": "http://repositorio.unb.br/simple-search?query={{{s}}}&submit=Ir"
    },
    {
        "d": "search.uncg.edu",
        "b": "uncg",
        "u": "http://search.uncg.edu/search?q={{{s}}}&site=default_collection&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend"
    },
    {
        "d": "library.unc.edu",
        "b": "unclib",
        "u": "https://library.unc.edu/find/combinedresults/?Ntt={{{s}}}&Ntk=Keyword"
    },
    {
        "d": "whc.unesco.org",
        "b": "unescowhc",
        "u": "http://whc.unesco.org/en/search/?criteria={{{s}}}"
    },
    {
        "d": "www.une.edu.au",
        "b": "une",
        "u": "https://www.une.edu.au/search?collection=une-meta&query={{{s}}}"
    },
    {
        "d": "www.unfpa.org",
        "b": "unfpa",
        "u": "http://www.unfpa.org/search/node/{{{s}}} "
    },
    {
        "d": "unicat.be",
        "b": "unicat",
        "u": "http://unicat.be/uniCat?func=search&language=en&fromWeb=1&formQuery={{{s}}}"
    },
    {
        "d": "www.unicef.org",
        "b": "unicef",
        "u": "http://www.unicef.org/search/search.php?q_en={{{s}}}"
    },
    {
        "d": "unicode-table.com",
        "b": "unic",
        "u": "https://unicode-table.com/en/search/?q={{{s}}}"
    },
    {
        "d": "www.uni-goettingen.de",
        "b": "unigö",
        "u": "http://www.uni-goettingen.de/de/suche.html?query={{{s}}}"
    },
    {
        "d": "www.uni-mannheim.de",
        "b": "unima",
        "u": "https://www.uni-mannheim.de/suche/?tx_solr%5Bq%5D={{{s}}}"
    },
    {
        "d": "www.unimc.it",
        "b": "unimc",
        "u": "http://www.unimc.it/@@search?SearchableText={{{s}}}"
    },
    {
        "d": "www.uniprot.org",
        "b": "uniprot",
        "u": "http://www.uniprot.org/uniprot/?query={{{s}}}"
    },
    {
        "d": "search.library.unisa.edu.au",
        "b": "unisalib",
        "u": "http://search.library.unisa.edu.au/?query=any,contains,{{{s}}}"
    },
    {
        "d": "unity3d.com",
        "b": "unityans",
        "u": "http://unity3d.com/search?refinement=answers&gq={{{s}}} "
    },
    {
        "d": "www.universalis.fr",
        "b": "universalis",
        "u": "https://www.universalis.fr/recherche/q/{{{s}}}"
    },
    {
        "d": "ufind.univie.ac.at",
        "b": "univie",
        "u": "http://ufind.univie.ac.at/en/search.html?query={{{s}}}"
    },
    {
        "d": "search.unm.edu",
        "b": "unm",
        "u": "http://search.unm.edu/search?q={{{s}}}"
    },
    {
        "d": "www.unomaha.edu",
        "b": "unomaha",
        "u": "https://www.unomaha.edu/search/?q={{{s}}}"
    },
    {
        "d": "untermportal.un.org",
        "b": "unterm",
        "u": "http://untermportal.un.org/search/{{{s}}}"
    },
    {
        "d": "search.un.org",
        "b": "un",
        "u": "http://search.un.org/search?ie=utf8&site=un_org&output=xml_no_dtd&client=UN_Website_en&num=10&lr=lang_en&proxystylesheet=UN_Website_en&oe=utf8&q={{{s}}}&Submit=Go"
    },
    {
        "d": "www.library.auckland.ac.nz",
        "b": "uoalib",
        "u": "https://www.library.auckland.ac.nz/search/{{{s}}}"
    },
    {
        "d": "search.library.ualberta.ca",
        "b": "uoal",
        "u": "https://search.library.ualberta.ca/symphony?q={{{s}}}"
    },
    {
        "d": "search.auckland.ac.nz",
        "b": "uoa",
        "u": "https://search.auckland.ac.nz/search?site=All_university_websites&client=uoa_frontend&proxystylesheet=uoa_frontend&proxyreload=0&output=xml_no_dtd&q={{{s}}}"
    },
    {
        "d": "udallas.edu",
        "b": "uod",
        "u": "http://udallas.edu/searchresults.html?q={{{s}}}"
    },
    {
        "d": "onesearch.library.utoronto.ca",
        "b": "uoftlib",
        "u": "https://onesearch.library.utoronto.ca/onesearch/{{{s}}}//"
    },
    {
        "d": "onesearch.library.utoronto.ca",
        "b": "uoft",
        "u": "https://onesearch.library.utoronto.ca/onesearch/{{{s}}}"
    },
    {
        "d": "www.kent.ac.uk",
        "b": "uok",
        "u": "https://www.kent.ac.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.manchester.ac.uk",
        "b": "uom",
        "u": "http://www.manchester.ac.uk/search/?q={{{s}}}"
    },
    {
        "d": "www.nottingham.ac.uk",
        "b": "uon",
        "u": "http://www.nottingham.ac.uk/search.aspx?q={{{s}}}:"
    },
    {
        "d": "www.surrey.ac.uk",
        "b": "uos",
        "u": "https://www.surrey.ac.uk/search?query={{{s}}}"
    },
    {
        "d": "www.upcdatabase.com",
        "b": "upc",
        "u": "http://www.upcdatabase.com/item/{{{s}}}"
    },
    {
        "d": "www.upng.ac.pg",
        "b": "upng",
        "u": "http://www.upng.ac.pg/site/component/search/?searchword={{{s}}}&searchphrase=all&Itemid=101"
    },
    {
        "d": "www.uptodate.com",
        "b": "uptodate",
        "u": "http://www.uptodate.com/contents/search?search={{{s}}}"
    },
    {
        "d": "search.library.uq.edu.au",
        "b": "uql",
        "u": "https://search.library.uq.edu.au/primo-explore/search?query=any,contains,{{{s}}}&tab=61uq_all&search_scope=61UQ_All&sortby=rank&vid=61UQ&offset=0"
    },
    {
        "d": "urbaanisanakirja.com",
        "b": "urbaani",
        "u": "http://urbaanisanakirja.com/search/?q={{{s}}}"
    },
    {
        "d": "www.urbandictionary.com",
        "b": "urbandictionary",
        "u": "http://www.urbandictionary.com/define.php?term={{{s}}}"
    },
    {
        "d": "www.urbandictionary.com",
        "b": "urban",
        "u": "http://www.urbandictionary.com/define.php?term={{{s}}}"
    },
    {
        "d": "urlquery.net",
        "b": "urlquery",
        "u": "http://urlquery.net/search.php?q={{{s}}}&type=string&max=50"
    },
    {
        "d": "suche.uni-regensburg.de",
        "b": "ur",
        "u": "http://suche.uni-regensburg.de/index.php?q={{{s}}}"
    },
    {
        "d": "www.usal.es",
        "b": "usal",
        "u": "http://www.usal.es/webusal/usal_buscador?query={{{s}}}"
    },
    {
        "d": "www.usaspending.gov",
        "b": "usaspending",
        "u": "http://www.usaspending.gov/search?form_fields=%7B%22search_term%22%3A%22{{{s}}}%22%7D"
    },
    {
        "d": "search.usa.gov",
        "b": "usa",
        "u": "https://search.usa.gov/search?utf8=✓&affiliate=usagov&query={{{s}}}"
    },
    {
        "d": "usc-primo.hosted.exlibrisgroup.com",
        "b": "usclib",
        "u": "https://usc-primo.hosted.exlibrisgroup.com/primo-explore/search?institution=01USC_INST&vid=01USC&mode=Basic&facet=&displayMode=full&bulkSize=25&highlight=true&dum=true&query=any,contains,{{{s}}}&displayField=all&pcAvailabiltyMode=true&sortby=rank&lang=en_US"
    },
    {
        "d": "www.xe.com",
        "b": "usd2cop",
        "u": "http://www.xe.com/currencyconverter/convert/?From=USD&To=COP&Amount={{{s}}}"
    },
    {
        "d": "www.xe.com",
        "b": "usd2eur",
        "u": "http://www.xe.com/currencyconverter/convert/?From=USD&To=EUR&Amount={{{s}}}"
    },
    {
        "d": "ndb.nal.usda.gov",
        "b": "usda",
        "u": "https://ndb.nal.usda.gov/ndb/search/list?SYNCHRONIZER_TOKEN=f84a82f2-08ef-411f-a08f-2ae87edece78&SYNCHRONIZER_URI=%2Fndb%2Fsearch%2Flist&qt=&qlookup={{{s}}}&ds=&manu="
    },
    {
        "d": "galaxyproject.org",
        "b": "usegalaxy",
        "u": "https://galaxyproject.org/search/?q={{{s}}}"
    },
    {
        "d": "search.usmint.gov",
        "b": "usmint",
        "u": "http://search.usmint.gov/search?affiliate=usmint.gov&formFocused=0&query={{{s}}}"
    },
    {
        "d": "usq.summon.serialssolutions.com",
        "b": "usq",
        "u": "https://usq.summon.serialssolutions.com/search?s.q={{{s}}} "
    },
    {
        "d": "opac.library.usyd.edu.au",
        "b": "usydlib",
        "u": "http://opac.library.usyd.edu.au/search/?searchtype=X&SORT=D&searcharg={{{s}}}&searchscope=4&submit=Submit"
    },
    {
        "d": "usyd.summon.serialssolutions.com",
        "b": "usydl",
        "u": "https://usyd.summon.serialssolutions.com/search?q={{{s}}}"
    },
    {
        "d": "sydney.edu.au",
        "b": "usyd",
        "u": "http://sydney.edu.au/s/search.html?collection=Usyd&query={{{s}}}"
    },
    {
        "d": "www.uta.edu",
        "b": "uta",
        "u": "http://www.uta.edu/search/?q={{{s}}}"
    },
    {
        "d": "www.uptodate.com",
        "b": "utdol",
        "u": "https://www.uptodate.com/contents/search?search={{{s}}}"
    },
    {
        "d": "utk-almaprimo.hosted.exlibrisgroup.com",
        "b": "utk",
        "u": "https://utk-almaprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=01UTK&institution=01UTK&facet=rtype,exclude,reviews&facet=rtype,exclude,reference_entrys&search_scope=OneSearch&tab=default_tab&onCampus=false&group=GUEST&query=any,contains,{{{s}}}&lang=en_US"
    },
    {
        "d": "le.utah.gov",
        "b": "utleg",
        "u": "http://le.utah.gov/solrsearch.jsp?request={{{s}}}"
    },
    {
        "d": "catalog.lib.utexas.edu",
        "b": "utlibrary",
        "u": "https://catalog.lib.utexas.edu/search/?searchtype=X&SORT=D&searcharg={{{s}}}&searchscope=29"
    },
    {
        "d": "onesearch.library.utoronto.ca",
        "b": "utlib",
        "u": "https://onesearch.library.utoronto.ca/onesearch/{{{s}}}/"
    },
    {
        "d": "onesearch.library.utoronto.ca",
        "b": "utl",
        "u": "https://onesearch.library.utoronto.ca/onesearch/{{{s}}}"
    },
    {
        "d": "find.utoronto.ca",
        "b": "utoronto",
        "u": "http://find.utoronto.ca/search?proxystylesheet=default_frontend&q={{{s}}}"
    },
    {
        "d": "www.utexas.edu",
        "b": "ut",
        "u": "https://www.utexas.edu/search/results?query={{{s}}}"
    },
    {
        "d": "www.urbandictionary.com",
        "b": "u",
        "u": "http://www.urbandictionary.com/define.php?term={{{s}}}"
    },
    {
        "d": "search.lib.virginia.edu",
        "b": "uvac",
        "u": "http://search.lib.virginia.edu/catalog?q={{{s}}}"
    },
    {
        "d": "faulkner.lib.virginia.edu",
        "b": "uvafaulk",
        "u": "http://faulkner.lib.virginia.edu/results?type=transcription&q={{{s}}} "
    },
    {
        "d": "search.lib.virginia.edu",
        "b": "uvalib",
        "u": "http://search.lib.virginia.edu/catalog?q={{{s}}}"
    },
    {
        "d": "www.uvic.ca",
        "b": "uvic",
        "u": "https://www.uvic.ca/search/q/web.php?q={{{s}}}&t=4&p=1&g=true"
    },
    {
        "d": "onesearch.library.uwa.edu.au",
        "b": "uwalib",
        "u": "https://onesearch.library.uwa.edu.au/discovery/search?query=any,contains,{{{s}}}&tab=Everything&search_scope=MyInst_and_CI&sortby=rank&vid=61UWA_INST:UWA&offset=0"
    },
    {
        "d": "search.library.wisc.edu",
        "b": "uwlib",
        "u": "https://search.library.wisc.edu/search/catalog?q={{{s}}}"
    },
    {
        "d": "www.uzh.ch",
        "b": "uzh",
        "u": "http://www.uzh.ch/de/search.html?q={{{s}}}"
    },
    {
        "d": "www.vagonweb.cz",
        "b": "vagw",
        "u": "http://www.vagonweb.cz/razeni/razeni.php?jmeno={{{s}}}&najit=Suchen"
    },
    {
        "d": "vajehyab.com",
        "b": "vajeh",
        "u": "https://vajehyab.com/?q={{{s}}} "
    },
    {
        "d": "www.vajje.com",
        "b": "vajje",
        "u": "http://www.vajje.com/vajje/search/index?query={{{s}}}"
    },
    {
        "d": "rsnijders.info",
        "b": "vakblog",
        "u": "http://rsnijders.info/vakblog/?s={{{s}}} "
    },
    {
        "d": "varsome.com",
        "b": "varsome",
        "u": "https://varsome.com/variant/search?query={{{s}}}"
    },
    {
        "d": "gsearch.vatican.va",
        "b": "vatican",
        "u": "http://gsearch.vatican.va/search?q={{{s}}}&btnG=Search+on&site=default_collection&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&sort=date%3AD%3AL%3Ad1&entsp=a__policy_documenti&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&exclude_apps=1&filter=0"
    },
    {
        "d": "vedabase.com",
        "b": "vb",
        "u": "http://vedabase.com/en/search/site/{{{s}}}"
    },
    {
        "d": "vision.org.au",
        "b": "vcm",
        "u": "https://vision.org.au/site-search/?phrase={{{s}}}&cbi=1"
    },
    {
        "d": "www.vandale.nl",
        "b": "vdfn",
        "u": "http://www.vandale.nl/opzoeken?pattern={{{s}}}&lang=fn"
    },
    {
        "d": "www.vandale.nl",
        "b": "vdnf",
        "u": "http://www.vandale.nl/opzoeken?pattern={{{s}}}&lang=nf"
    },
    {
        "d": "vectorspace.ai",
        "b": "vectorspace",
        "u": "http://vectorspace.ai/recommend/app/crypto_discover?query={{{s}}}"
    },
    {
        "d": "find.vegas.com",
        "b": "vegas",
        "u": "http://find.vegas.com/search?entqr=1&output=xml_no_dtd&sort=date%3AD%3AL%3Ad1&entsp=0&client=vegas&ud=1&oe=UTF-8&ie=UTF-8&proxystylesheet=vegas&site=vegas&q={{{s}}}&btnG=%E2%8C%95"
    },
    {
        "d": "www.verbs.cat",
        "b": "verbcat",
        "u": "http://www.verbs.cat/ca/conjugacio.html?infinitive={{{s}}} "
    },
    {
        "d": "www.verbformen.de",
        "b": "verben",
        "u": "http://www.verbformen.de/konjugation/?i={{{s}}}"
    },
    {
        "d": "www.les-verbes.com",
        "b": "verbes",
        "u": "http://www.les-verbes.com/conjuguer.php?verbe={{{s}}}"
    },
    {
        "d": "www.verbix.com",
        "b": "verbixeng",
        "u": "http://www.verbix.com/webverbix/English/{{{s}}}r.html"
    },
    {
        "d": "www.verbix.com",
        "b": "verbixes",
        "u": "http://www.verbix.com/webverbix/Spanish/{{{s}}}.html"
    },
    {
        "d": "verbix.com",
        "b": "verbix",
        "u": "http://verbix.com/find-verb/?verb={{{s}}}"
    },
    {
        "d": "conjugator.reverso.net",
        "b": "verbomatic",
        "u": "http://conjugator.reverso.net/conjugation-english-verb-{{{s}}}.html"
    },
    {
        "d": "conjugator.reverso.net",
        "b": "verb",
        "u": "http://conjugator.reverso.net/conjugation-english-verb-{{{s}}}.html"
    },
    {
        "d": "versus.com",
        "b": "versus",
        "u": "https://versus.com/en/{{{s}}}"
    },
    {
        "d": "www.vertalen.nu",
        "b": "vertalen",
        "u": "http://www.vertalen.nu/vertaal?van=nl&naar=en&vertaal={{{s}}}"
    },
    {
        "d": "www.verbformen.de",
        "b": "vf",
        "u": "http://www.verbformen.de/konjugation/?i={{{s}}}"
    },
    {
        "d": "www.vgn.de",
        "b": "vgn",
        "u": "https://www.vgn.de/verbindungen/?td={{{s}}}"
    },
    {
        "d": "viaf.org",
        "b": "viaf",
        "u": "http://viaf.org/viaf/search?query=local.names+all+%22{{{s}}}%22&stylesheet=/viaf/xsl/results.xsl&sortKeys=holdingscount&maximumRecords=100"
    },
    {
        "d": "www.vic.gov.au",
        "b": "vicgovau",
        "u": "https://www.vic.gov.au/search?q={{{s}}}"
    },
    {
        "d": "www.vic.gov.au",
        "b": "vicgov",
        "u": "https://www.vic.gov.au/search?q={{{s}}}"
    },
    {
        "d": "la.wikipedia.org",
        "b": "vici",
        "u": "https://la.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "www.vidal.fr",
        "b": "vidal",
        "u": "https://www.vidal.fr/recherche/index/q:{{{s}}}/"
    },
    {
        "d": "et.wikipedia.org",
        "b": "viki",
        "u": "https://et.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "eo.wikipedia.org",
        "b": "vikipedio",
        "u": "https://eo.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "tr.wikipedia.org",
        "b": "vikipedi",
        "u": "https://tr.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.decodethis.com",
        "b": "vin",
        "u": "http://www.decodethis.com/VINdecoder/65/vin/{{{s}}}"
    },
    {
        "d": "ca.wikipedia.org",
        "b": "viquipedia",
        "u": "https://ca.wikipedia.org/w/index.php?search={{{s}}}&title=Especial%3ACerca&go=V%C3%A9s-hi"
    },
    {
        "d": "visitwarrington.com",
        "b": "visitwarrington",
        "u": "https://visitwarrington.com/explore/?type=search-all&search_keywords={{{s}}}&sort=latest"
    },
    {
        "d": "visuwords.com",
        "b": "visuwords",
        "u": "https://visuwords.com/{{{s}}}"
    },
    {
        "d": "visuwords.com",
        "b": "vis",
        "u": "http://visuwords.com/?q={{{s}}}"
    },
    {
        "d": "viu.summon.serialssolutions.com",
        "b": "viul",
        "u": "http://viu.summon.serialssolutions.com/search?s.q={{{s}}}"
    },
    {
        "d": "www.vivino.com",
        "b": "vivino",
        "u": "https://www.vivino.com/search/wines?q={{{s}}}"
    },
    {
        "d": "www.kono.be",
        "b": "vivo",
        "u": "http://www.kono.be/cgi-bin/vivo/ViVo.cgi?lingvo=eo&esprimo={{{s}}}"
    },
    {
        "d": "vlasisku.lojban.org",
        "b": "vlasisku",
        "u": "http://vlasisku.lojban.org/vlasisku/{{{s}}}"
    },
    {
        "d": "vlasisku.lojban.org",
        "b": "vla",
        "u": "http://vlasisku.lojban.org/vlasisku/{{{s}}}"
    },
    {
        "d": "www.vocabulary.com",
        "b": "vocabulary",
        "u": "https://www.vocabulary.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.vocabulary.com",
        "b": "vocab",
        "u": "http://www.vocabulary.com/dictionary/{{{s}}}"
    },
    {
        "d": "www.voced.edu.au",
        "b": "voced",
        "u": "http://www.voced.edu.au/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "www.voedingswaardetabel.nl",
        "b": "voedingswaarde",
        "u": "http://www.voedingswaardetabel.nl/voedingswaarde/?q={{{s}}}"
    },
    {
        "d": "eo.wikipedia.org",
        "b": "vo",
        "u": "https://eo.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "vortaro.net",
        "b": "vortaro",
        "u": "http://vortaro.net/#{{{s}}}"
    },
    {
        "d": "voterly.com",
        "b": "voterly",
        "u": "https://voterly.com/search/politicians?q={{{s}}}"
    },
    {
        "d": "vpl.bibliocommons.com",
        "b": "vpl",
        "u": "https://vpl.bibliocommons.com/search?q={{{s}}}&t=smart&search_category=keyword"
    },
    {
        "d": "www.vsb.bc.ca",
        "b": "vsb",
        "u": "http://www.vsb.bc.ca/search/node/{{{s}}}"
    },
    {
        "d": "vschart.com",
        "b": "vschart",
        "u": "http://vschart.com/search?q={{{s}}}"
    },
    {
        "d": "sapere.virgilio.it",
        "b": "vsc",
        "u": "https://sapere.virgilio.it/parole/sinonimi-e-contrari/{{{s}}}"
    },
    {
        "d": "valuestockguide.com",
        "b": "vsg",
        "u": "http://valuestockguide.com/?s={{{s}}}"
    },
    {
        "d": "search.vt.edu",
        "b": "vtech",
        "u": "https://search.vt.edu/search/pages.html;sa=Search&q={{{s}}}"
    },
    {
        "d": "www.vatefaireconjuguer.com",
        "b": "vtfc",
        "u": "https://www.vatefaireconjuguer.com/search?verb={{{s}}}"
    },
    {
        "d": "www.vatefaireconjuguer.com",
        "b": "vtf",
        "u": "http://www.vatefaireconjuguer.com/conjugaison/verbe/{{{s}}}"
    },
    {
        "d": "biblio.vub.ac.be",
        "b": "vub",
        "u": "http://biblio.vub.ac.be/vubissmartweb/List.csp?SearchT1={{{s}}}&Index1=Vuballewoorden&Database=3_UB01&OpacLanguage=dut&NumberToRetrieve=20&SearchMethod=Find_1&SearchTerm1=test&Profile=Default&PreviousList=Start&PageType=Start&EncodedRequest=p*20W*20*0A*20*B5*86*DF*D6*7E*A7*15*FD*0F*5E&WebPageNr=1&WebAction=NewSearch&StartValue=1&RowRepeat=0&MyChannelCount="
    },
    {
        "d": "www.vajehyab.com",
        "b": "vy",
        "u": "https://www.vajehyab.com/?q={{{s}}}"
    },
    {
        "d": "www.wikizero.com",
        "b": "w0",
        "u": "https://www.wikizero.com/search.php?s={{{s}}}&lang=en"
    },
    {
        "d": "fr.wiki2.org",
        "b": "w2fr",
        "u": "https://fr.wiki2.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wiki2.org",
        "b": "w2",
        "u": "https://en.wiki2.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wadoku.de",
        "b": "wadoku",
        "u": "http://www.wadoku.de/search/{{{s}}}"
    },
    {
        "d": "www.w3.org",
        "b": "wai",
        "u": "https://www.w3.org/WAI/search/?q={{{s}}}"
    },
    {
        "d": "www.walkscore.com",
        "b": "walkscore",
        "u": "http://www.walkscore.com/score/{{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "walpha",
        "u": "https://www.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "m.wolframalpha.com",
        "b": "wam",
        "u": "http://m.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wandsk",
        "u": "https://www.wikiwand.com/sk/{{{s}}}"
    },
    {
        "d": "an.wikipedia.org",
        "b": "wan",
        "u": "https://an.wikipedia.org/w/index.php?search={{{s}}}&title=Especial%3AMirar"
    },
    {
        "d": "www.westonaprice.org",
        "b": "wapf",
        "u": "https://www.westonaprice.org/?s={{{s}}}"
    },
    {
        "d": "ar.wikipedia.org",
        "b": "war",
        "u": "https://ar.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "wol.jw.org",
        "b": "watchtower",
        "u": "http://wol.jw.org/en/wol/qt/r1/lp-e?q={{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "wa",
        "u": "https://www.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "wayne.edu",
        "b": "wayne",
        "u": "https://wayne.edu/search/?type=all&q={{{s}}}"
    },
    {
        "d": "az.wikipedia.org",
        "b": "waz",
        "u": "https://az.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "de.wikibooks.org",
        "b": "wbde",
        "u": "https://de.wikibooks.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "bg.wikipedia.org",
        "b": "wbg",
        "u": "https://bg.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "ja.wikibooks.org",
        "b": "wbj",
        "u": "https://ja.wikibooks.org/w/index.php?search={{{s}}}&title=特別%3A検索&go=表示"
    },
    {
        "d": "ml.wikibooks.org",
        "b": "wbml",
        "u": "https://ml.wikibooks.org/wiki/special:search/{{{s}}}"
    },
    {
        "d": "br.wikipedia.org",
        "b": "wbr",
        "u": "https://br.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "pt.wikipedia.org",
        "b": "w.br",
        "u": "https://pt.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "en.wikibooks.org",
        "b": "wb",
        "u": "http://en.wikibooks.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "ca.wikipedia.org",
        "b": "wcat",
        "u": "https://ca.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ca.wikipedia.org",
        "b": "wca",
        "u": "https://ca.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.worldcat.org",
        "b": "wci",
        "u": "http://www.worldcat.org/identities/find?fullName={{{s}}}"
    },
    {
        "d": "whocallsme.com",
        "b": "wcm",
        "u": "http://whocallsme.com/nb/search.aspx?q={{{s}}}"
    },
    {
        "d": "cs.wikipedia.org",
        "b": "wcs",
        "u": "https://cs.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "whocalled.us",
        "b": "wcu",
        "u": "http://whocalled.us/lookup/{{{s}}}"
    },
    {
        "d": "cy.wikipedia.org",
        "b": "wcy",
        "u": "https://cy.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "cs.wikipedia.org",
        "b": "wcz",
        "u": "https://cs.wikipedia.org/w/index.php?search={{{s}}}&title=Speci%C3%A1ln%C3%AD%3AHled%C3%A1n%C3%AD&go=J%C3%ADt+na"
    },
    {
        "d": "da.wikipedia.org",
        "b": "wda",
        "u": "http://da.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "de.wikipedia.org",
        "b": "wde",
        "u": "https://de.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "de.wikipedia.org",
        "b": "w.de",
        "u": "https://de.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wdg",
        "u": "http://en.wikipedia.org/w/index.php?title=Special:Search&search={{{s}}}+discography&go=Go"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wdic",
        "u": "https://en.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "da.wikipedia.org",
        "b": "wdk",
        "u": "https://da.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wdr",
        "u": "http://www.wordreference.com/es/translation.asp?tranword={{{s}}} "
    },
    {
        "d": "www.whatdotheyknow.com",
        "b": "wdtk",
        "u": "https://www.whatdotheyknow.com/search/{{{s}}}/all"
    },
    {
        "d": "www.wikidata.org",
        "b": "wdt",
        "u": "https://www.wikidata.org/w/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.websters1913.com",
        "b": "web1913",
        "u": "https://www.websters1913.com/words/{{{s}}}"
    },
    {
        "d": "ejje.weblio.jp",
        "b": "weblioe",
        "u": "http://ejje.weblio.jp/content/{{{s}}}"
    },
    {
        "d": "www.weblio.jp",
        "b": "weblioj",
        "u": "http://www.weblio.jp/content/{{{s}}}"
    },
    {
        "d": "thesaurus.weblio.jp",
        "b": "webliot",
        "u": "http://thesaurus.weblio.jp/content/{{{s}}}"
    },
    {
        "d": "www.weblio.jp",
        "b": "weblio",
        "u": "http://www.weblio.jp/content/{{{s}}}"
    },
    {
        "d": "www.webmd.com",
        "b": "webmd",
        "u": "http://www.webmd.com/search/search_results/default.aspx?query={{{s}}}"
    },
    {
        "d": "webmineral.com",
        "b": "webmin",
        "u": "http://webmineral.com/cgi-bin/search/search.pl?sitesearch=&Terms={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.webopedia.com",
        "b": "webo",
        "u": "https://www.webopedia.com/sgsearch/results?q={{{s}}}"
    },
    {
        "d": "www.webster-dictionary.org",
        "b": "websters",
        "u": "http://www.webster-dictionary.org/definition/{{{s}}}"
    },
    {
        "d": "webxicon.org",
        "b": "webxiconen",
        "u": "http://webxicon.org/search.php?l=-1&l2=3&q={{{s}}}"
    },
    {
        "d": "webxicon.org",
        "b": "webxiconfi",
        "u": "http://webxicon.org/search.php?l=-1&l2=17&q={{{s}}}"
    },
    {
        "d": "webxicon.org",
        "b": "webxiconse",
        "u": "http://webxicon.org/search.php?l=-1&l2=15&q={{{s}}}"
    },
    {
        "d": "webxicon.org",
        "b": "webxiconsu",
        "u": "http://webxicon.org/search.php?l=-1&l2=17&q={{{s}}}"
    },
    {
        "d": "webxicon.org",
        "b": "webxiconsv",
        "u": "http://webxicon.org/search.php?l=-1&l2=15&q={{{s}}}"
    },
    {
        "d": "weixin.sogou.com",
        "b": "weixin",
        "u": "https://weixin.sogou.com/weixin?type=2&query={{{s}}}"
    },
    {
        "d": "el.wikipedia.org",
        "b": "wel",
        "u": "https://el.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.welklidwoord.nl",
        "b": "welklidwoord",
        "u": "https://www.welklidwoord.nl/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wenfr",
        "u": "http://www.wordreference.com/enfr/{{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "w.en",
        "u": "http://en.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wen",
        "u": "http://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "eo.wikipedia.org",
        "b": "weo",
        "u": "http://eo.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "wesleyan.summon.serialssolutions.com",
        "b": "wes1",
        "u": "http://wesleyan.summon.serialssolutions.com/search?utf8=✓&s.q={{{s}}}"
    },
    {
        "d": "wesleyan.summon.serialssolutions.com",
        "b": "weslib",
        "u": "http://wesleyan.summon.serialssolutions.com/search?utf8=✓&s.q={{{s}}}"
    },
    {
        "d": "www.wesleyan.edu",
        "b": "wesu",
        "u": "http://www.wesleyan.edu/search/search-results.html?cx=001254463385620737445%3Anbar83le1bc&cof=FORID%3A11&ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "es.wikipedia.org",
        "b": "wes",
        "u": "http://es.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "en.wikipedia.org",
        "b": "w-es",
        "u": "https://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "wetten.overheid.nl",
        "b": "wetten",
        "u": "http://wetten.overheid.nl/zoeken/rs/2,3,4/titel/{{{s}}}/"
    },
    {
        "d": "eu.wikipedia.org",
        "b": "weus",
        "u": "https://eu.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "eu.wikipedia.org",
        "b": "weu",
        "u": "https://eu.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "we",
        "u": "http://en.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "fa.wikipedia.org",
        "b": "wfa",
        "u": "https://fa.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fi.wikipedia.org",
        "b": "wfi",
        "u": "https://fi.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "fr.wikipedia.org",
        "b": "wfr",
        "u": "http://fr.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "fy.wikipedia.org",
        "b": "wfy",
        "u": "https://fy.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ga.wikipedia.org",
        "b": "wga",
        "u": "https://ga.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "gl.wikipedia.org",
        "b": "wgal",
        "u": "https://gl.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "de.wikipedia.org",
        "b": "wge",
        "u": "https://de.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "el.wikipedia.org",
        "b": "wgr",
        "u": "https://el.wikipedia.org/wiki/Special:Search?search={{{s}}} &go=Go&go=Go&go=Go"
    },
    {
        "d": "whatis.techtarget.com",
        "b": "whatis",
        "u": "http://whatis.techtarget.com/wsearchResults/1,290214,sid9,00.html?query={{{s}}}"
    },
    {
        "d": "www.vocabulary.com",
        "b": "whats",
        "u": "https://www.vocabulary.com/dictionary/{{{s}}}"
    },
    {
        "d": "es.wikihow.com",
        "b": "whes",
        "u": "https://es.wikihow.com/wikiHowTo?search={{{s}}}"
    },
    {
        "d": "he.wikipedia.org",
        "b": "whe",
        "u": "https://he.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "whfoods.org",
        "b": "whfoods",
        "u": "http://whfoods.org/sitesearch.php?sstr={{{s}}}&how=1"
    },
    {
        "d": "fr.wikihow.com",
        "b": "whfr",
        "u": "https://fr.wikihow.com/wikiHowTo?search={{{s}}}"
    },
    {
        "d": "www.wordhippo.com",
        "b": "whip",
        "u": "https://www.wordhippo.com/what-is/another-word-for/{{{s}}}.html"
    },
    {
        "d": "www.archives.nd.edu",
        "b": "whitakers",
        "u": "http://www.archives.nd.edu/cgi-bin/wordz.pl?english={{{s}}}"
    },
    {
        "d": "www.archives.nd.edu",
        "b": "whitl",
        "u": "http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword={{{s}}}"
    },
    {
        "d": "hi.wikipedia.org",
        "b": "whi",
        "u": "http://hi.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "nl.wikihow.com",
        "b": "whnl",
        "u": "https://nl.wikihow.com/wikiHowTo?search={{{s}}}"
    },
    {
        "d": "www.who.int",
        "b": "whoint",
        "u": "https://www.who.int/search?query={{{s}}}"
    },
    {
        "d": "es.wikihow.com",
        "b": "whowes",
        "u": "http://es.wikihow.com/wikiHowTo?search={{{s}}}"
    },
    {
        "d": "www.wikihow.com",
        "b": "whow",
        "u": "http://www.wikihow.com/Special:LSearch?search={{{s}}}"
    },
    {
        "d": "hr.wikipedia.org",
        "b": "whr",
        "u": "http://hr.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "hu.wikipedia.org",
        "b": "whu",
        "u": "https://hu.wikipedia.org/w/index.php?search={{{s}}}&button=&title=Speci%C3%A1lis%3AKeres%C3%A9s"
    },
    {
        "d": "www.wikihow.com",
        "b": "wh",
        "u": "http://www.wikihow.com/wikiHowTo?search={{{s}}}"
    },
    {
        "d": "wikihow.com",
        "b": "whw",
        "u": "http://wikihow.com/wikiHowTo?search={{{s}}}"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wictionary",
        "u": "https://en.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "id.wikipedia.org",
        "b": "wid",
        "u": "https://id.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fi.wikipedia.org",
        "b": "wi-fi",
        "u": "http://fi.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "fr.wiktionary.org",
        "b": "wifr",
        "u": "https://fr.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "community-search.fandom.com",
        "b": "wikia",
        "u": "https://community-search.fandom.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "en.wikibooks.org",
        "b": "wikibooks",
        "u": "http://en.wikibooks.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "pt.wikipedia.org",
        "b": "wikibr",
        "u": "https://pt.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "en.wikibooks.org",
        "b": "wikicook",
        "u": "https://en.wikibooks.org/wiki/Special:Search?search={{{s}}}&prefix=Cookbook%3A&fulltext=Search+Cookbook&fulltext=Search"
    },
    {
        "d": "commons.wikimedia.org",
        "b": "wikic",
        "u": "https://commons.wikimedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wikidata.org",
        "b": "wikidata",
        "u": "https://www.wikidata.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "de.wikipedia.org",
        "b": "wiki.de",
        "u": "https://de.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "de.wikipedia.org",
        "b": "wikide",
        "u": "http://de.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "en.wikipedia.org",
        "b": "wikien",
        "u": "https://en.wikipedia.org/w/index.php?search={{{s}}}&title=Special:Search"
    },
    {
        "d": "es.wikipedia.org",
        "b": "wikies",
        "u": "https://es.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fr.wikipedia.org",
        "b": "wikifr",
        "u": "https://fr.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "en.wikifur.com",
        "b": "wikifur",
        "u": "https://en.wikifur.com/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.wikihow.com",
        "b": "wikihow",
        "u": "https://www.wikihow.com/wikiHowTo?search={{{s}}}"
    },
    {
        "d": "id.wikipedia.org",
        "b": "wikiid",
        "u": "https://id.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "wikiindex.org",
        "b": "wikiindex",
        "u": "http://wikiindex.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.wikilengua.org",
        "b": "wikilengua",
        "u": "http://www.wikilengua.org/index.php/Especial:Buscar?search={{{s}}}&fulltext=Buscar"
    },
    {
        "d": "www.wikiloc.com",
        "b": "wikiloc",
        "u": "http://www.wikiloc.com/wikiloc/find.do?q={{{s}}}"
    },
    {
        "d": "it.wikipedia.org",
        "b": "wikipediait",
        "u": "https://it.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wikipedia",
        "u": "http://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "pl.wikipedia.org",
        "b": "wiki.pl",
        "u": "https://pl.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "pt.wikipedia.org",
        "b": "wikipt",
        "u": "https://pt.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "wikirhymer.com",
        "b": "wikirhymer",
        "u": "http://wikirhymer.com/words/{{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "wikiru",
        "u": "https://ru.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "sco.wikipedia.org",
        "b": "wikisco",
        "u": "https://sco.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "simple.wikipedia.org",
        "b": "wikisimple",
        "u": "https://simple.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "en.wikisource.org",
        "b": "wikisource",
        "u": "https://en.wikisource.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wikispecies",
        "u": "https://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.wikisummaries.org",
        "b": "wikisum",
        "u": "http://www.wikisummaries.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "curriculum.toxicology.wikispaces.net",
        "b": "wikitox",
        "u": "http://curriculum.toxicology.wikispaces.net/search/view/{{{s}}}"
    },
    {
        "d": "wikitravel.org",
        "b": "wikitravel",
        "u": "http://wikitravel.org/en/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "wikitravel.org",
        "b": "wikit",
        "u": "http://wikitravel.org/en/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "en.wikiversity.org",
        "b": "wikiversity",
        "u": "https://en.wikiversity.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "vi.wikipedia.org",
        "b": "wiki-vn",
        "u": "https://vi.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "de.wikivoyage.org",
        "b": "wikivoyagede",
        "u": "https://de.wikivoyage.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "el.wikivoyage.org",
        "b": "wikivoyageel",
        "u": "https://el.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "en.wikivoyage.org",
        "b": "wikivoyageen",
        "u": "https://en.wikivoyage.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "es.wikivoyage.org",
        "b": "wikivoyagees",
        "u": "https://es.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "fr.wikivoyage.org",
        "b": "wikivoyagefr",
        "u": "https://fr.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "he.wikivoyage.org",
        "b": "wikivoyagehe",
        "u": "https://he.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "it.wikivoyage.org",
        "b": "wikivoyageit",
        "u": "https://it.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "nl.wikivoyage.org",
        "b": "wikivoyagenl",
        "u": "https://nl.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "pl.wikivoyage.org",
        "b": "wikivoyagepl",
        "u": "https://pl.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "pt.wikivoyage.org",
        "b": "wikivoyagept",
        "u": "https://pt.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "ro.wikivoyage.org",
        "b": "wikivoyagero",
        "u": "https://ro.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "ru.wikivoyage.org",
        "b": "wikivoyageru",
        "u": "https://ru.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "sv.wikivoyage.org",
        "b": "wikivoyagesv",
        "u": "https://sv.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "uk.wikivoyage.org",
        "b": "wikivoyageuk",
        "u": "https://uk.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "vi.wikivoyage.org",
        "b": "wikivoyagevi",
        "u": "https://vi.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "en.wikivoyage.org",
        "b": "wikivoyage",
        "u": "http://en.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "zh.wikivoyage.org",
        "b": "wikivoyagezh",
        "u": "https://zh.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wikiwand",
        "u": "http://www.wikiwand.com/en/{{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wiki",
        "u": "http://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "ru.wiktionary.org",
        "b": "wikru",
        "u": "https://ru.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "br.wiktionary.org",
        "b": "wiktbr",
        "u": "https://br.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "de.wiktionary.org",
        "b": "wiktde",
        "u": "http://de.wiktionary.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wikten",
        "u": "http://en.wiktionary.org/wiki/Special:Search?search={{{s}}}&go=Define"
    },
    {
        "d": "eo.wiktionary.org",
        "b": "wikteo",
        "u": "https://eo.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "es.wiktionary.org",
        "b": "wiktes",
        "u": "https://es.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fr.wiktionary.org",
        "b": "wiktfr",
        "u": "https://fr.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "el.m.wiktionary.org",
        "b": "wiktgr",
        "u": "https://el.m.wiktionary.org/wiki{{{s}}}"
    },
    {
        "d": "hu.wiktionary.org",
        "b": "wikthu",
        "u": "https://hu.wiktionary.org/w/index.php?search={{{s}}}&title=Speci%C3%A1lis%3AKeres%C3%A9s"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wiktionary",
        "u": "http://en.wiktionary.org/wiki/Special:Search?search={{{s}}}&go=Define"
    },
    {
        "d": "it.wiktionary.org",
        "b": "wiktit",
        "u": "http://it.wiktionary.org/w/index.php?search={{{s}}}&title=Speciale%3ARicerca"
    },
    {
        "d": "ko.wiktionary.org",
        "b": "wiktko",
        "u": "https://ko.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "la.wiktionary.org",
        "b": "wiktla",
        "u": "https://la.wiktionary.org/wiki/Special:Search?search={{{s}}}&go=Define"
    },
    {
        "d": "nl.wiktionary.org",
        "b": "wiktnl",
        "u": "https://nl.wiktionary.org/w/index.php?search={{{s}}}&title=Speciaal%3AZoeken"
    },
    {
        "d": "no.wiktionary.org",
        "b": "wiktno",
        "u": "https://no.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "pt.wiktionary.org",
        "b": "wiktpt",
        "u": "https://pt.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "ru.wiktionary.org",
        "b": "wiktru",
        "u": "https://ru.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "sv.wiktionary.org",
        "b": "wiktsv",
        "u": "https://sv.wiktionary.org/w/index.php?search={{{s}}}&title=Special%3AS%C3%B6k"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wikt",
        "u": "http://en.wiktionary.org/wiki/Special:Search?search={{{s}}}&go=Define"
    },
    {
        "d": "www.onlinelibrary.wiley.com",
        "b": "wiley",
        "u": "https://www.onlinelibrary.wiley.com/action/doSearch?AllField={{{s}}}"
    },
    {
        "d": "commons.wikimedia.org",
        "b": "wim",
        "u": "http://commons.wikimedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "incubator.wikimedia.org",
        "b": "winc",
        "u": "http://incubator.wikimedia.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.wisemarketplace.org",
        "b": "wisedir",
        "u": "http://www.wisemarketplace.org/k:{{{s}}}"
    },
    {
        "d": "www.wissen.de",
        "b": "wissen",
        "u": "http://www.wissen.de/wissensserver/search?keyword={{{s}}}"
    },
    {
        "d": "is.wikipedia.org",
        "b": "wis",
        "u": "https://is.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "el.m.wiktionary.org",
        "b": "witgr",
        "u": "https://el.m.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "pl.wiktionary.org",
        "b": "witpl",
        "u": "https://pl.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "it.wikipedia.org",
        "b": "wit",
        "u": "http://it.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wi",
        "u": "https://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "zh.wikipedia.org",
        "b": "wizh",
        "u": "https://zh.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ja.wikipedia.org",
        "b": "wja",
        "u": "http://ja.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.wjec.co.uk",
        "b": "wjec",
        "u": "http://www.wjec.co.uk/search/pf_search.php?q={{{s}}}"
    },
    {
        "d": "wiki.jvflux.com",
        "b": "wjvf",
        "u": "https://wiki.jvflux.com/index.php?title=Spécial:Recherche&search={{{s}}}"
    },
    {
        "d": "ja.wikipedia.org",
        "b": "wj",
        "u": "https://ja.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "nl.wikisage.org",
        "b": "wkan",
        "u": "http://nl.wikisage.org/w/index.php?search={{{s}}}&title=Speciaal%3AZoeken&go=OK"
    },
    {
        "d": "kk.wikipedia.org",
        "b": "wkk",
        "u": "https://kk.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "lt.wiktionary.org",
        "b": "wklt",
        "u": "https://lt.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wikiloc.com",
        "b": "wkl",
        "u": "https://www.wikiloc.com/wikiloc/find.do?q={{{s}}}"
    },
    {
        "d": "en.m.wikipedia.org",
        "b": "wkm",
        "u": "https://en.m.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "kn.wikipedia.org",
        "b": "wkn",
        "u": "https://kn.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ko.wikipedia.org",
        "b": "wko",
        "u": "https://ko.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "species.wikimedia.org",
        "b": "wksp",
        "u": "https://species.wikimedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "species.wikimedia.org",
        "b": "wks",
        "u": "https://species.wikimedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "de.wiktionary.org",
        "b": "wktde",
        "u": "http://de.wiktionary.org/w/index.php?search= {{{s}}}"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wkten",
        "u": "https://en.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "en.wikiversity.org",
        "b": "wku",
        "u": "https://en.wikiversity.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wk",
        "u": "https://en.wikipedia.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "la.wikipedia.org",
        "b": "wla",
        "u": "http://la.wikipedia.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "a.next.westlaw.com",
        "b": "wln",
        "u": "https://a.next.westlaw.com/Search/Results.html?query={{{s}}}&jurisdiction=ALLCASES"
    },
    {
        "d": "reference.wolfram.com",
        "b": "wlr",
        "u": "http://reference.wolfram.com/search/?q={{{s}}}"
    },
    {
        "d": "lt.wikipedia.org",
        "b": "wlt",
        "u": "https://lt.wikipedia.org/w/?search={{{s}}}"
    },
    {
        "d": "lv.wikipedia.org",
        "b": "wlv",
        "u": "https://lv.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "search.wikileaks.org",
        "b": "wl",
        "u": "https://search.wikileaks.org/?q={{{s}}}"
    },
    {
        "d": "de.m.wikipedia.org",
        "b": "wmde",
        "u": "https://de.m.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "meta.wikimedia.org",
        "b": "wmeta",
        "u": "http://meta.wikimedia.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "ml.wikipedia.org",
        "b": "wml",
        "u": "https://ml.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "public.wmo.int",
        "b": "wmo",
        "u": "https://public.wmo.int/en/search?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "sr.m.wikipedia.org",
        "b": "wmsr",
        "u": "https://sr.m.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "mt.wikipedia.org",
        "b": "wmt",
        "u": "http://mt.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.m.wikipedia.org",
        "b": "wm",
        "u": "http://en.m.wikipedia.org/wiki?search={{{s}}}"
    },
    {
        "d": "my.wikipedia.org",
        "b": "wmy",
        "u": "https://my.wikipedia.org/w/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "www.wordnik.com",
        "b": "wnk",
        "u": "https://www.wordnik.com/words/?myWord={{{s}}}"
    },
    {
        "d": "nl.wikipedia.org",
        "b": "wnl",
        "u": "https://nl.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "nn.wikipedia.org",
        "b": "wnn",
        "u": "https://nn.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "no.wikipedia.org",
        "b": "wno",
        "u": "https://no.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "woerterbuchnetz.de",
        "b": "woerterbuchnetz",
        "u": "http://woerterbuchnetz.de/cgi-bin/WBNetz/startGlobalSearch.tcl?stichwort={{{s}}}"
    },
    {
        "d": "www.woerterbuch.info",
        "b": "woerterbuch",
        "u": "http://www.woerterbuch.info/?query={{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "wolframalpha",
        "u": "https://www.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "wolfram",
        "u": "https://www.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "wolf",
        "u": "https://www.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "wol.jw.org",
        "b": "wolsv",
        "u": "https://wol.jw.org/wol/finder?wtlocale=Z&q={{{s}}}"
    },
    {
        "d": "wol.jw.org",
        "b": "wol",
        "u": "http://wol.jw.org/wol/finder?q={{{s}}}"
    },
    {
        "d": "www.woodmac.com",
        "b": "woodmac",
        "u": "https://www.woodmac.com/store/search/?q={{{s}}}"
    },
    {
        "d": "www.wood-database.com",
        "b": "wood",
        "u": "http://www.wood-database.com/?s={{{s}}}"
    },
    {
        "d": "woordenlijst.org",
        "b": "woordenlijst",
        "u": "http://woordenlijst.org/zoek/?q={{{s}}}&w=w"
    },
    {
        "d": "www.woorden.org",
        "b": "woord",
        "u": "https://www.woorden.org/woord/{{{s}}}"
    },
    {
        "d": "wordcentral.com",
        "b": "wordcentral",
        "u": "http://wordcentral.com/cgi-bin/student?book=Student&va={{{s}}}"
    },
    {
        "d": "wordinfo.info",
        "b": "wordinfo",
        "u": "http://wordinfo.info/results?searchString={{{s}}}"
    },
    {
        "d": "www.wordnik.com",
        "b": "wordnik",
        "u": "http://www.wordnik.com/words/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wordreference",
        "u": "http://www.wordreference.com/es/translation.asp?tranword={{{s}}}"
    },
    {
        "d": "www.wordsmyth.net",
        "b": "wordsmyth",
        "u": "http://www.wordsmyth.net/?level=3&ent={{{s}}}"
    },
    {
        "d": "www.wordwebonline.com",
        "b": "wordweb",
        "u": "http://www.wordwebonline.com/search.pl?w={{{s}}}"
    },
    {
        "d": "www.worldatlas.com",
        "b": "worldatlas",
        "u": "https://www.worldatlas.com/search?q={{{s}}}"
    },
    {
        "d": "worldbuilding.stackexchange.com",
        "b": "worldbuilding",
        "u": "http://worldbuilding.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "worldcatmobile.org",
        "b": "worldcatm",
        "u": "http://worldcatmobile.org/?q={{{s}}}"
    },
    {
        "d": "www.wormbase.org",
        "b": "worm",
        "u": "http://www.wormbase.org/species/c_elegans/gene/{{{s}}}"
    },
    {
        "d": "gateway.webofknowledge.com",
        "b": "wosc",
        "u": "https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&SrcApp=WEB&SrcAuth=ProQuest&DestApp=UA&DestLinkType=GeneralSearchSummary&topic={{{s}}}"
    },
    {
        "d": "www.wotif.com",
        "b": "wotif",
        "u": "http://www.wotif.com/search/TextSearch?searchTerms={{{s}}}"
    },
    {
        "d": "www.wowwiki.com",
        "b": "wowwiki",
        "u": "http://www.wowwiki.com/Special:Search?search={{{s}}}"
    },
    {
        "d": "synonyme.woxikon.de",
        "b": "woxikon",
        "u": "http://synonyme.woxikon.de/synonyme/{{{s}}}.php"
    },
    {
        "d": "developer.wordpress.org",
        "b": "wpdev",
        "u": "https://developer.wordpress.org/?s={{{s}}}"
    },
    {
        "d": "fr.wikipedia.org",
        "b": "wpfr",
        "u": "https://fr.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "pl.wikipedia.org",
        "b": "wpl",
        "u": "http://pl.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "pt.wikipedia.org",
        "b": "wpt",
        "u": "http://pt.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "de.wikiquote.org",
        "b": "wqde",
        "u": "https://de.wikiquote.org/w/index.php?search={{{s}}}&title=Spezial%3ASuche"
    },
    {
        "d": "es.wikiquote.org",
        "b": "wqes",
        "u": "https://es.wikiquote.org/w/?search={{{s}}}"
    },
    {
        "d": "pl.wikiquote.org",
        "b": "wqpl",
        "u": "https://pl.wikiquote.org/w/index.php?search={{{s}}}&title=Specjalna:Szukaj&go=Przejdź"
    },
    {
        "d": "en.wikiquote.org",
        "b": "wq",
        "u": "https://en.wikiquote.org/w/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "en.wikipedia.org",
        "b": "wrand",
        "u": "https://en.wikipedia.org/wiki/Special:RandomInCategory/{{{s}}}"
    },
    {
        "d": "www.wolframalpha.com",
        "b": "wra",
        "u": "https://www.wolframalpha.com/input/?i={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrcfr",
        "u": "http://www.wordreference.com/conj/FrVerbs.aspx?v={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrc",
        "u": "http://www.wordreference.com/conj/FrVerbs.aspx?v={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrdeen",
        "u": "http://www.wordreference.com/deen/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wref",
        "u": "https://www.wordreference.com/enfr/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrei",
        "u": "http://www.wordreference.com/enit/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrende",
        "u": "http://www.wordreference.com/ende/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrenes",
        "u": "http://www.wordreference.com/redirect/translation.aspx?w={{{s}}}&dict=enes"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrenit",
        "u": "http://www.wordreference.com/enit/{{{s}}} "
    },
    {
        "d": "www.wordreference.com",
        "b": "wrennl",
        "u": "http://www.wordreference.com/ennl/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrenpt",
        "u": "http://www.wordreference.com/enpt/{{{s}}} "
    },
    {
        "d": "www.wordreference.com",
        "b": "wrensp",
        "u": "http://www.wordreference.com/es/translation.asp?tranword={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrensv",
        "u": "https://www.wordreference.com/ensv/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrep",
        "u": "http://www.wordreference.com/pten/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wresconj",
        "u": "http://www.wordreference.com/conj/ESverbs.aspx?v={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wresen",
        "u": "http://www.wordreference.com/es/en/translation.asp?spen={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wresfr",
        "u": "http://www.wordreference.com/esfr/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wresit",
        "u": "http://www.wordreference.com/esit/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrespt",
        "u": "http://www.wordreference.com/espt/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrfe",
        "u": "http://www.wordreference.com/fren/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrfrconj",
        "u": "http://www.wordreference.com/conj/FRverbs.aspx?v={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrfrde",
        "u": "http://www.wordreference.com/frde/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrfren",
        "u": "http://www.wordreference.com/fren/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrfres",
        "u": "http://www.wordreference.com/fres/{{{s}}}"
    },
    {
        "d": "wikirhymer.com",
        "b": "wrhymer",
        "u": "http://wikirhymer.com/words/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrie",
        "u": "http://www.wordreference.com/iten/{{{s}}}"
    },
    {
        "d": "wright.tools",
        "b": "wrighttools",
        "u": "http://wright.tools/en/stable/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.wordreference.com",
        "b": "writen",
        "u": "http://www.wordreference.com/iten/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "writes",
        "u": "https://www.wordreference.com/iten/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "writ",
        "u": "http://www.wordreference.com/definizione/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrnlen",
        "u": "http://www.wordreference.com/nlen/{{{s}}}"
    },
    {
        "d": "ro.wikipedia.org",
        "b": "wro",
        "u": "https://ro.wikipedia.org/w/index.php?search={{{s}}}&title=Special%3AC%C4%83utare"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrpe",
        "u": "http://www.wordreference.com/enpt/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrpten",
        "u": "http://www.wordreference.com/pten/{{{s}}} "
    },
    {
        "d": "eprints.whiterose.ac.uk",
        "b": "wrro",
        "u": "http://eprints.whiterose.ac.uk/cgi/search/simple?full={{{s}}}&_action_search=Search&_order=bytitle&basic_srchtype=ALL&_satisfyall=ALL"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrspconj",
        "u": "http://www.wordreference.com/conj/ESverbs.aspx?v={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrss",
        "u": "http://www.wordreference.com/sinonimos/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrsven",
        "u": "https://www.wordreference.com/ensv/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrs",
        "u": "http://www.wordreference.com/es/translation.asp?tranword={{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrsyes",
        "u": "https://www.wordreference.com/sinonimos//{{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "w.ru",
        "u": "https://ru.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ru.wikipedia.org",
        "b": "wru",
        "u": "https://ru.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wr",
        "u": "http://www.wordreference.com/definition/{{{s}}}"
    },
    {
        "d": "www.wordreference.com",
        "b": "wrze",
        "u": "https://www.wordreference.com/zhen/{{{s}}}"
    },
    {
        "d": "sco.wikipedia.org",
        "b": "wsco",
        "u": "http://sco.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "de.wikisource.org",
        "b": "wsde",
        "u": "https://de.wikisource.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wesleyseminary.edu",
        "b": "wsem",
        "u": "https://www.wesleyseminary.edu/?s={{{s}}}"
    },
    {
        "d": "se.wikipedia.org",
        "b": "wse",
        "u": "http://se.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fr.wikisource.org",
        "b": "wsfr",
        "u": "https://fr.wikisource.org/w/index.php?search={{{s}}}&title=Sp%C3%A9cial%3ARecherche&go=Lire"
    },
    {
        "d": "fa.wikishia.net",
        "b": "wshfa",
        "u": "http://fa.wikishia.net/index.php?search={{{s}}}"
    },
    {
        "d": "en.wikishia.net",
        "b": "wsh",
        "u": "http://en.wikishia.net/view/?search={{{s}}}"
    },
    {
        "d": "simple.wikipedia.org",
        "b": "wsimple",
        "u": "https://simple.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "sl.wikipedia.org",
        "b": "wsi",
        "u": "https://sl.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "wsjp.pl",
        "b": "wsjp",
        "u": "http://wsjp.pl/index.php?szukaj={{{s}}}&pwh=0"
    },
    {
        "d": "sk.wikipedia.org",
        "b": "wsk",
        "u": "https://sk.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "sl.wikipedia.org",
        "b": "wsl",
        "u": "http://sl.wikipedia.org/w/index.php?title=Special%3ASearch&profile=default&search={{{s}}}"
    },
    {
        "d": "species.wikimedia.org",
        "b": "wspec",
        "u": "https://species.wikimedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "wayne.edu",
        "b": "wsu",
        "u": "https://wayne.edu/search/?q={{{s}}}&type=all"
    },
    {
        "d": "sv.wikipedia.org",
        "b": "wsv",
        "u": "http://sv.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "words.bighugelabs.com",
        "b": "wsyn",
        "u": "http://words.bighugelabs.com/{{{s}}}"
    },
    {
        "d": "zh.wikisource.org",
        "b": "wszh",
        "u": "https://zh.wikisource.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "bg.wiktionary.org",
        "b": "wtbg",
        "u": "https://bg.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "ca.wiktionary.org",
        "b": "wtca",
        "u": "https://ca.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "cs.wiktionary.org",
        "b": "wtcz",
        "u": "https://cs.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "de.wiktionary.org",
        "b": "wtde",
        "u": "https://de.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "el.wiktionary.org",
        "b": "wtel",
        "u": "https://el.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wten",
        "u": "http://en.wiktionary.org/w/index.php?search={{{s}}}&button=&title=Special%3ASearch"
    },
    {
        "d": "eo.wiktionary.org",
        "b": "wteo",
        "u": "https://eo.wiktionary.org/w/index.php?search={{{s}}}&title=Speciala%C4%B5o%3ASer%C4%89i&go=Ek!"
    },
    {
        "d": "es.wiktionary.org",
        "b": "wtes",
        "u": "https://es.wiktionary.org/w/index.php?search={{{s}}}&button=&title=Especial%3ABuscar"
    },
    {
        "d": "fi.wiktionary.org",
        "b": "wtfi",
        "u": "https://fi.wiktionary.org/w/index.php?search={{{s}}}&title=Toiminnot%3AHaku"
    },
    {
        "d": "www.mirbsd.org",
        "b": "wtf",
        "u": "https://www.mirbsd.org/wtf.cgi?q={{{s}}}"
    },
    {
        "d": "fr.wiktionary.org",
        "b": "wtfr",
        "u": "https://fr.wiktionary.org/wiki/{{{s}}} "
    },
    {
        "d": "wtg.pt",
        "b": "wtg",
        "u": "https://wtg.pt/?s={{{s}}}"
    },
    {
        "d": "hi.wiktionary.org",
        "b": "wth",
        "u": "https://hi.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wtionary",
        "u": "https://en.wiktionary.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "it.wiktionary.org",
        "b": "wtit",
        "u": "http://it.wiktionary.org/w/index.php?search={{{s}}}&title=Speciale%3ARicerca"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wtla",
        "u": "https://en.wiktionary.org/wiki/{{{s}}}#Latin"
    },
    {
        "d": "en.m.wiktionary.org",
        "b": "wtm",
        "u": "https://en.m.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "nl.wiktionary.org",
        "b": "wtnl",
        "u": "https://nl.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "no.wiktionary.org",
        "b": "wtno",
        "u": "https://no.wiktionary.org/wiki/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "pl.wiktionary.org",
        "b": "wtpl",
        "u": "https://pl.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "pt.wiktionary.org",
        "b": "wtpt",
        "u": "https://pt.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "ro.wiktionary.org",
        "b": "wtro",
        "u": "https://ro.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "ru.wiktionary.org",
        "b": "wtru",
        "u": "http://ru.wiktionary.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "tr.wikipedia.org",
        "b": "wtr",
        "u": "https://tr.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "sv.wiktionary.org",
        "b": "wtsv",
        "u": "http://sv.wiktionary.org/w/index.php?search={{{s}}}&button=&title=Special%3AS%C3%B6k"
    },
    {
        "d": "ta.wiktionary.org",
        "b": "wtta",
        "u": "https://ta.wiktionary.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "tt.wikipedia.org",
        "b": "wtt",
        "u": "https://tt.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "vi.wiktionary.org",
        "b": "wtvi",
        "u": "https://vi.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wiktionary.org",
        "b": "wt",
        "u": "https://en.wiktionary.org/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "zh.wiktionary.org",
        "b": "wtzh",
        "u": "https://zh.wiktionary.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "uk.wikipedia.org",
        "b": "wuk",
        "u": "http://uk.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.wulfila.be",
        "b": "wulfila",
        "u": "http://www.wulfila.be/gothic/browse/search/?find={{{s}}}&mode=1"
    },
    {
        "d": "de.wikivoyage.org",
        "b": "wvde",
        "u": "https://de.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wikivoyage.org",
        "b": "wven",
        "u": "https://en.wikivoyage.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "en.wikiversity.org",
        "b": "wvers",
        "u": "http://en.wikiversity.org/w/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "es.wikivoyage.org",
        "b": "wves",
        "u": "https://es.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "fr.wikivoyage.org",
        "b": "wvfr",
        "u": "https://fr.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "it.wikivoyage.org",
        "b": "wvit",
        "u": "https://it.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "nl.wikivoyage.org",
        "b": "wvnl",
        "u": "https://nl.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "vo.wikipedia.org",
        "b": "wvo",
        "u": "http://vo.wikipedia.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "pt.wikivoyage.org",
        "b": "wvpt",
        "u": "https://pt.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "ru.wikivoyage.org",
        "b": "wvru",
        "u": "https://ru.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "sv.wikivoyage.org",
        "b": "wvsv",
        "u": "https://sv.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wikivoyage.org",
        "b": "wv",
        "u": "https://en.wikivoyage.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwde",
        "u": "https://www.wikiwand.com/de/{{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwen",
        "u": "http://www.wikiwand.com/en/{{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwes",
        "u": "http://www.wikiwand.com/es/{{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwfr",
        "u": "https://www.wikiwand.com/fr/{{{s}}}"
    },
    {
        "d": "www.worldwildlife.org",
        "b": "wwf",
        "u": "https://www.worldwildlife.org/search?cx=003443374396369277624%3Av3nraqhmeyk&ie=UTF-8&x={{{s}}}&sa="
    },
    {
        "d": "www.wegenwiki.nl",
        "b": "wwiki",
        "u": "http://www.wegenwiki.nl/index.php?search={{{s}}}&title=Speciaal%3AZoeken"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwnl",
        "u": "http://www.wikiwand.com/nl/{{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwpt",
        "u": "https://www.wikiwand.com/pt/{{{s}}}"
    },
    {
        "d": "www.wikiwand.com",
        "b": "ww",
        "u": "https://www.wikiwand.com/en/{{{s}}}"
    },
    {
        "d": "nihongo.monash.edu",
        "b": "wwwjdic",
        "u": "http://nihongo.monash.edu/cgi-bin/wwwjdic?1MUE{{{s}}}"
    },
    {
        "d": "publicwww.com",
        "b": "www",
        "u": "https://publicwww.com/websites/{{{s}}}/"
    },
    {
        "d": "www.wikiwand.com",
        "b": "wwzh",
        "u": "https://www.wikiwand.com/zh/{{{s}}}"
    },
    {
        "d": "synonyme.woxikon.de",
        "b": "wxd",
        "u": "http://synonyme.woxikon.de/synonyme/{{{s}}}.php"
    },
    {
        "d": "zh.wikipedia.org",
        "b": "wzh",
        "u": "http://zh.wikipedia.org/w/wiki.phtml?search={{{s}}}&go=Go"
    },
    {
        "d": "de.xen.wiki",
        "b": "xende",
        "u": "https://de.xen.wiki/index.php?search={{{s}}}"
    },
    {
        "d": "en.xen.wiki",
        "b": "xen",
        "u": "https://en.xen.wiki/index.php?search={{{s}}}"
    },
    {
        "d": "exchange.xforce.ibmcloud.com",
        "b": "xfe",
        "u": "https://exchange.xforce.ibmcloud.com/search/{{{s}}}"
    },
    {
        "d": "search.crossref.org",
        "b": "xref",
        "u": "http://search.crossref.org/?q={{{s}}}"
    },
    {
        "d": "xtupleuniversity.xtuple.com",
        "b": "xt",
        "u": "https://xtupleuniversity.xtuple.com/search/node/{{{s}}}"
    },
    {
        "d": "www.xavier.edu",
        "b": "xu",
        "u": "https://www.xavier.edu/search/?q={{{s}}}"
    },
    {
        "d": "www.arxiv-vanity.com",
        "b": "xvr",
        "u": "https://www.arxiv-vanity.com/convert/?query={{{s}}}"
    },
    {
        "d": "slovari.yandex.ru",
        "b": "yad",
        "u": "https://slovari.yandex.ru/{{{s}}}/"
    },
    {
        "d": "dic.search.yahoo.co.jp",
        "b": "yahoojdic",
        "u": "http://dic.search.yahoo.co.jp/search?p={{{s}}}"
    },
    {
        "d": "dic.search.yahoo.co.jp",
        "b": "ydic",
        "u": "http://dic.search.yahoo.co.jp/search?ei=UTF-8&p={{{s}}}&stype=full&fr=dic"
    },
    {
        "d": "www.yourdictionary.com",
        "b": "yd",
        "u": "http://www.yourdictionary.com/search/?ydQ={{{s}}}"
    },
    {
        "d": "www.yeastgenome.org",
        "b": "yeast",
        "u": "http://www.yeastgenome.org/search?q={{{s}}}&is_quick=true"
    },
    {
        "d": "www.yellow.lu",
        "b": "yellowlu",
        "u": "http://www.yellow.lu/en/yellow-pages/search?location=&query={{{s}}}&sort_by=relevance"
    },
    {
        "d": "www.yelp.com",
        "b": "yelpsd",
        "u": "http://www.yelp.com/search?find_desc={{{s}}}&find_loc=san+diego&ns=1"
    },
    {
        "d": "www.yelp.com",
        "b": "yelp",
        "u": "http://www.yelp.com/search?find_desc={{{s}}}&ns=1&rpp=10&find_loc="
    },
    {
        "d": "yufid.com",
        "b": "yfd",
        "u": "http://yufid.com/result/?search={{{s}}} "
    },
    {
        "d": "finance.yahoo.com",
        "b": "yf",
        "u": "http://finance.yahoo.com/q?s={{{s}}}"
    },
    {
        "d": "www.yeastgenome.org",
        "b": "yg",
        "u": "https://www.yeastgenome.org/search?q={{{s}}}"
    },
    {
        "d": "yourei.jp",
        "b": "yourei",
        "u": "http://yourei.jp/{{{s}}}"
    },
    {
        "d": "www.bible.com",
        "b": "youversion",
        "u": "https://www.bible.com/search/bible?q={{{s}}}"
    },
    {
        "d": "yochicago.com",
        "b": "yo",
        "u": "http://yochicago.com/?s={{{s}}}"
    },
    {
        "d": "yippy.com",
        "b": "ypy",
        "u": "http://yippy.com/search/?v%3Aproject=clusty-new&query={{{s}}}"
    },
    {
        "d": "slovari.yandex.ru",
        "b": "ys",
        "u": "https://slovari.yandex.ru/{{{s}}}"
    },
    {
        "d": "www.youtube.com",
        "b": "yth",
        "u": "https://www.youtube.com/feed/history?query={{{s}}}"
    },
    {
        "d": "www.yummly.com",
        "b": "yummly",
        "u": "http://www.yummly.com/recipes?q={{{s}}}"
    },
    {
        "d": "www.yummly.com",
        "b": "yum",
        "u": "http://www.yummly.com/recipes?q={{{s}}}"
    },
    {
        "d": "www.yvr.ca",
        "b": "yvr",
        "u": "http://www.yvr.ca/en/search#q={{{s}}}"
    },
    {
        "d": "www.zakonypreludi.sk",
        "b": "zakony",
        "u": "http://www.zakonypreludi.sk/main/search.aspx?text={{{s}}}"
    },
    {
        "d": "www.zanran.com",
        "b": "zanran",
        "u": "http://www.zanran.com/q/?search={{{s}}}"
    },
    {
        "d": "www.zargan.com",
        "b": "zargan",
        "u": "http://www.zargan.com/tr/q/{{{s}}}"
    },
    {
        "d": "www.zentralblatt-math.org",
        "b": "zbmath",
        "u": "http://www.zentralblatt-math.org/zbmath/search/?q={{{s}}}"
    },
    {
        "d": "www.zdic.net",
        "b": "zdic",
        "u": "http://www.zdic.net/search/?q={{{s}}}"
    },
    {
        "d": "www.zedat.fu-berlin.de",
        "b": "zedat",
        "u": "https://www.zedat.fu-berlin.de/FAQ?q={{{s}}}"
    },
    {
        "d": "zenodo.org",
        "b": "zenodo",
        "u": "https://zenodo.org/search?q={{{s}}}"
    },
    {
        "d": "www.zeno.org",
        "b": "zeno",
        "u": "http://www.zeno.org/Zeno/0/Suche?q={{{s}}}&k=Bibliothek"
    },
    {
        "d": "www.zillow.com",
        "b": "zillow",
        "u": "http://www.zillow.com/homes/{{{s}}}_rb/"
    },
    {
        "d": "www.zli.ch",
        "b": "zli",
        "u": "https://www.zli.ch/service/suche/?q={{{s}}}"
    },
    {
        "d": "www.zoopla.co.uk",
        "b": "zoopla",
        "u": "http://www.zoopla.co.uk/search/?q={{{s}}}&geo_autocomplete_identifier=&country_code=&flatshare_q=&section=for-sale&search_source=nav&include_shared_ownership=true&include_retirement_homes=true&new_homes=include"
    },
    {
        "d": "ar.wikipedia.org",
        "b": "و",
        "u": "https://ar.wikipedia.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "www.google.co.il",
        "b": "ג",
        "u": "https://www.google.co.il/{{{s}}}"
    },
    {
        "d": "he.wikipedia.org",
        "b": "ויקי",
        "u": "https://he.wikipedia.org/w/index.php?search={{{s}}}&title=מיוחד%3Aחיפוש&go=לערך"
    },
    {
        "d": "he.wikisource.org",
        "b": "חוק",
        "u": "https://he.wikisource.org/w/index.php?search=חוק+{{{s}}}"
    },
    {
        "d": "www.morfix.co.il",
        "b": "מורפיקס",
        "u": "http://www.morfix.co.il/{{{s}}}"
    },
    {
        "d": "el.m.wikipedia.org",
        "b": "Βικι",
        "u": "https://el.m.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "el.m.wiktionary.org",
        "b": "Λεξικό",
        "u": "https://el.m.wiktionary.org/wiki/{{{s}}}"
    },
    {
        "d": "engramm.su",
        "b": "англяз",
        "u": "http://engramm.su/start?do=search&id={{{s}}}"
    },
    {
        "d": "uk.m.wikipedia.org",
        "b": "в",
        "u": "https://uk.m.wikipedia.org/wiki/{{{s}}}"
    },
    {
        "d": "ru.wiktionary.org",
        "b": "вс",
        "u": "https://ru.wiktionary.org/w/index.php?search={{{s}}}&ns0=1"
    }
], bangs);

module.exports = {
    bangs
};
