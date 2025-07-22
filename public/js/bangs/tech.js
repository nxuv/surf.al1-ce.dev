var bangs = bangs || [];

bangs = [].concat([
    {
        "d": "www.01net.com",
        "b": "01net",
        "u": "http://www.01net.com/recherche/recherche.php?searchstring={{{s}}}&chaine=home"
    },
    {
        "d": "www.1001fonts.com",
        "b": "1001fonts",
        "u": "http://www.1001fonts.com/search.html?search={{{s}}}&x=0&y=0"
    },
    {
        "d": "www.101domain.com",
        "b": "101",
        "u": "http://www.101domain.com/domain-availability-search.htm?q={{{s}}}&sa.x=0&sa.y=0"
    },
    {
        "d": "www.101domain.com",
        "b": "101domain",
        "u": "https://www.101domain.com/domain-availability-search.htm?q={{{s}}}"
    },
    {
        "d": "www.1und1.de",
        "b": "1und1",
        "u": "https://www.1und1.de/suche?query={{{s}}}"
    },
    {
        "d": "24sessions.com",
        "b": "24sessions",
        "u": "http://24sessions.com/search/text:{{{s}}}"
    },
    {
        "d": "www.360androidapp.com",
        "b": "360app",
        "u": "https://www.360androidapp.com/{{{s}}}"
    },
    {
        "d": "3dagogo.com",
        "b": "3da",
        "u": "https://3dagogo.com/search?q={{{s}}}"
    },
    {
        "d": "3dbrew.org",
        "b": "3dbrew",
        "u": "http://3dbrew.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "3druck.com",
        "b": "3druck",
        "u": "http://3druck.com/?s={{{s}}}"
    },
    {
        "d": "www.3ds.com",
        "b": "3ds",
        "u": "http://www.3ds.com/search/?q={{{s}}}"
    },
    {
        "d": "3dwarehouse.sketchup.com",
        "b": "3dware",
        "u": "https://3dwarehouse.sketchup.com/search.html?q={{{s}}}"
    },
    {
        "d": "profile.intra.42.fr",
        "b": "42",
        "u": "https://profile.intra.42.fr/searches/search?query={{{s}}}"
    },
    {
        "d": "boards.4chan.org",
        "b": "4chg",
        "u": "https://boards.4chan.org/g/catalog#s={{{s}}}"
    },
    {
        "d": "4chan.org",
        "b": "4g",
        "u": "http://4chan.org/g/{{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "95g",
        "u": "https://cse.google.com/cse?cx=008464549922976904202:uxmexxzm3k4&q={{{s}}}"
    },
    {
        "d": "9to5google.com",
        "b": "95google",
        "u": "https://9to5google.com/?s={{{s}}}"
    },
    {
        "d": "9to5mac.com",
        "b": "95mac",
        "u": "http://9to5mac.com/?s={{{s}}}"
    },
    {
        "d": "alternativeto.net",
        "b": "a2",
        "u": "http://alternativeto.net/browse/search/?q={{{s}}}&ignoreExactMatch=true"
    },
    {
        "d": "v5.angular.io",
        "b": "a5",
        "u": "https://v5.angular.io/api?query={{{s}}}"
    },
    {
        "d": "v6.angular.io",
        "b": "a6",
        "u": "https://v6.angular.io/api?query={{{s}}}"
    },
    {
        "d": "v7.angular.io",
        "b": "a7",
        "u": "https://v7.angular.io/api?query={{{s}}}"
    },
    {
        "d": "www.aptoide.com",
        "b": "aapt",
        "u": "http://www.aptoide.com/search/view?search_top= {{{s}}} &x=0&y=0"
    },
    {
        "d": "www.abbuc.de",
        "b": "abbuc",
        "u": "http://www.abbuc.de/component/search/?searchword={{{s}}}"
    },
    {
        "d": "www.abuseipdb.com",
        "b": "abuseip",
        "u": "https://www.abuseipdb.com/check/{{{s}}}"
    },
    {
        "d": "aleth.io",
        "b": "acc",
        "u": "https://aleth.io/account/{{{s}}}"
    },
    {
        "d": "forum.acelaboratory.com",
        "b": "aceforum",
        "u": "http://forum.acelaboratory.com/search.php?keywords={{{s}}}"
    },
    {
        "d": "us.acer.com",
        "b": "acer",
        "u": "http://us.acer.com/ac/en/US/search?q={{{s}}}"
    },
    {
        "d": "applecoach.nl",
        "b": "acnl",
        "u": "https://applecoach.nl/?s={{{s}}}"
    },
    {
        "d": "plugins.cordova.io",
        "b": "acp",
        "u": "http://plugins.cordova.io/#/search?search={{{s}}}"
    },
    {
        "d": "acquiredby.co",
        "b": "acquiredby",
        "u": "https://acquiredby.co/?s={{{s}}}"
    },
    {
        "d": "blog.adafruit.com",
        "b": "adablog",
        "u": "https://blog.adafruit.com/?s={{{s}}}"
    },
    {
        "d": "developer.apple.com",
        "b": "adc",
        "u": "https://developer.apple.com/search/index.php?q={{{s}}}"
    },
    {
        "d": "addons.prestashop.com",
        "b": "addons",
        "u": "http://addons.prestashop.com/fr/recherche?search_query={{{s}}}"
    },
    {
        "d": "developer.apple.com",
        "b": "adev",
        "u": "https://developer.apple.com/search/?q={{{s}}}"
    },
    {
        "d": "forums.developer.apple.com",
        "b": "adf",
        "u": "https://forums.developer.apple.com/search.jspa?q={{{s}}}"
    },
    {
        "d": "www.adminwiki.fr",
        "b": "adminwiki",
        "u": "https://www.adminwiki.fr/start?do=search&id={{{s}}}"
    },
    {
        "d": "www.adobe.com",
        "b": "adobe",
        "u": "http://www.adobe.com/cfusion/search/index.cfm?loc=en_us&term={{{s}}}"
    },
    {
        "d": "docs.ansible.com",
        "b": "adoc",
        "u": "https://docs.ansible.com/ansible/latest/search.html?q={{{s}}}"
    },
    {
        "d": "adrenaline.uol.com.br",
        "b": "adr",
        "u": "https://adrenaline.uol.com.br/site/pesquisa/{{{s}}}"
    },
    {
        "d": "advancedgta.com",
        "b": "advgta",
        "u": "https://advancedgta.com/?s={{{s}}}"
    },
    {
        "d": "www.audeze.com",
        "b": "adz",
        "u": "https://www.audeze.com/search?q={{{s}}}*"
    },
    {
        "d": "duckduckgo.com",
        "b": "aeris",
        "u": "https://duckduckgo.com/?q=site%3Aimirhil.fr+{{{s}}}"
    },
    {
        "d": "androidfilehost.com",
        "b": "afh",
        "u": "https://androidfilehost.com/?w=search&s={{{s}}}"
    },
    {
        "d": "learn.adafruit.com",
        "b": "afl",
        "u": "https://learn.adafruit.com/search?q={{{s}}}"
    },
    {
        "d": "aftvhacks.de",
        "b": "aftvhacks",
        "u": "https://aftvhacks.de/?s={{{s}}}"
    },
    {
        "d": "www.android.gs",
        "b": "ag",
        "u": "http://www.android.gs/?s=&q={{{s}}}"
    },
    {
        "d": "android-review.googlesource.com",
        "b": "agerrit",
        "u": "https://android-review.googlesource.com/q/{{{s}}}"
    },
    {
        "d": "www.arturogoga.com",
        "b": "agoga",
        "u": "https://www.arturogoga.com/?s={{{s}}}"
    },
    {
        "d": "www.autohotkey.com",
        "b": "ahk",
        "u": "http://www.autohotkey.com/search/search.php?site=4&refine=0&template_demo=phpdig.html&result_page=search.php&search=Go+...&limite=100&option=start&path=docs/&query_string={{{s}}}"
    },
    {
        "d": "ahmia.fi",
        "b": "ahmia",
        "u": "https://ahmia.fi/search/?q={{{s}}}"
    },
    {
        "d": "ahrefs.com",
        "b": "ahrefs",
        "u": "https://ahrefs.com/site-explorer/overview/v2/subdomains/recent?target={{{s}}}"
    },
    {
        "d": "www.aidaily.co.uk",
        "b": "aidaily",
        "u": "https://www.aidaily.co.uk/search?q={{{s}}}"
    },
    {
        "d": "archlinuxarm.org",
        "b": "alarmpkg",
        "u": "https://archlinuxarm.org/packages/?q={{{s}}}"
    },
    {
        "d": "biznesalert.pl",
        "b": "alert",
        "u": "http://biznesalert.pl/?s={{{s}}}"
    },
    {
        "d": "alexa.com",
        "b": "alexa",
        "u": "http://alexa.com/search?q={{{s}}}"
    },
    {
        "d": "www.alexalt.es",
        "b": "alexalt",
        "u": "https://www.alexalt.es/?s={{{s}}}"
    },
    {
        "d": "www.alexa.com",
        "b": "alexasi",
        "u": "http://www.alexa.com/siteinfo/{{{s}}}"
    },
    {
        "d": "alexion.nl",
        "b": "alexion",
        "u": "http://alexion.nl/?s={{{s}}}&post_type=faq"
    },
    {
        "d": "www.alfredapp.com",
        "b": "alfred",
        "u": "https://www.alfredapp.com/search/?q={{{s}}}"
    },
    {
        "d": "www.algomation.com",
        "b": "alg",
        "u": "http://www.algomation.com/search?q={{{s}}}"
    },
    {
        "d": "algorithmia.com",
        "b": "algo",
        "u": "https://algorithmia.com/search?q={{{s}}}"
    },
    {
        "d": "www.allerstorfer.at",
        "b": "allerstorfer",
        "u": "https://www.allerstorfer.at/?s={{{s}}}"
    },
    {
        "d": "www.archlinux.org",
        "b": "alp",
        "u": "https://www.archlinux.org/packages/?sort=&q={{{s}}}"
    },
    {
        "d": "pkgs.alpinelinux.org",
        "b": "alpine",
        "u": "http://pkgs.alpinelinux.org/packages?name={{{s}}}"
    },
    {
        "d": "alternativeto.net",
        "b": "alternative",
        "u": "http://alternativeto.net/searchresult.aspx?search={{{s}}}"
    },
    {
        "d": "alternativeto.net",
        "b": "alternativeto",
        "u": "http://alternativeto.net/browse/search?q={{{s}}}"
    },
    {
        "d": "techdocs.altium.com",
        "b": "altium",
        "u": "http://techdocs.altium.com/search/wikinode/{{{s}}}"
    },
    {
        "d": "alternativeto.net",
        "b": "alto",
        "u": "http://alternativeto.net/browse/search?q={{{s}}} "
    },
    {
        "d": "wiki.alpinelinux.org",
        "b": "alw",
        "u": "https://wiki.alpinelinux.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "amanz.my",
        "b": "amanz",
        "u": "https://amanz.my/?s={{{s}}}"
    },
    {
        "d": "search.amd.com",
        "b": "amd",
        "u": "http://search.amd.com/en-us/Pages/results-all.aspx?k={{{s}}}"
    },
    {
        "d": "aminet.net",
        "b": "aminet",
        "u": "http://aminet.net/search?query={{{s}}}"
    },
    {
        "d": "addons.mozilla.org",
        "b": "amo",
        "u": "https://addons.mozilla.org/firefox/search/?q={{{s}}}&cat=all"
    },
    {
        "d": "www.amp-what.com",
        "b": "amp-what",
        "u": "http://www.amp-what.com/unicode/search/{{{s}}}"
    },
    {
        "d": "www.amp-what.com",
        "b": "ampwhat",
        "u": "http://www.amp-what.com/unicode/search/{{{s}}}"
    },
    {
        "d": "anaconda.org",
        "b": "anaconda",
        "u": "https://anaconda.org/search?q={{{s}}}"
    },
    {
        "d": "anandtech.com",
        "b": "anandtech",
        "u": "http://anandtech.com/SearchResults?q={{{s}}}"
    },
    {
        "d": "www.androidauthority.com",
        "b": "anau",
        "u": "http://www.androidauthority.com/?q={{{s}}}"
    },
    {
        "d": "android-arsenal.com",
        "b": "andar",
        "u": "https://android-arsenal.com/search?q={{{s}}}"
    },
    {
        "d": "www.androidcentral.com",
        "b": "andce",
        "u": "https://www.androidcentral.com/search/{{{s}}}"
    },
    {
        "d": "developer.android.com",
        "b": "andev",
        "u": "https://developer.android.com/s/results/?q={{{s}}}"
    },
    {
        "d": "developer.android.com",
        "b": "android",
        "u": "https://developer.android.com/s/results/?q={{{s}}}"
    },
    {
        "d": "www.androidpit.com",
        "b": "androidpit",
        "u": "http://www.androidpit.com/en/android/search?st={{{s}}}"
    },
    {
        "d": "www.androidpit.fr",
        "b": "androidpitfr",
        "u": "http://www.androidpit.fr/search?st={{{s}}}"
    },
    {
        "d": "www.anevry.com",
        "b": "anevry",
        "u": "http://www.anevry.com/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ang",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aangular.io"
    },
    {
        "d": "angel.co",
        "b": "angellist",
        "u": "https://angel.co/search?q={{{s}}}"
    },
    {
        "d": "angular.io",
        "b": "angular",
        "u": "https://angular.io/api?query={{{s}}}"
    },
    {
        "d": "docs.angularjs.org",
        "b": "angularjs",
        "u": "https://docs.angularjs.org/?as_q={{{s}}}"
    },
    {
        "d": "docs.ansible.com",
        "b": "ansible",
        "u": "https://docs.ansible.com/ansible/latest/#stq={{{s}}}&stp=1"
    },
    {
        "d": "galaxy.ansible.com",
        "b": "ansible-galaxy",
        "u": "https://galaxy.ansible.com/list#/roles?page=1&page_size=10&autocomplete={{{s}}}"
    },
    {
        "d": "docs.ansible.com",
        "b": "ansiblemod",
        "u": "http://docs.ansible.com/ansible/{{{s}}}_module.html"
    },
    {
        "d": "answers.splunk.com",
        "b": "ans.splunk",
        "u": "https://answers.splunk.com/search.html?q={{{s}}}"
    },
    {
        "d": "answers.splunk.com",
        "b": "answers.splunk",
        "u": "http://answers.splunk.com/search/?q={{{s}}}&Submit=Search"
    },
    {
        "d": "duckduckgo.com",
        "b": "apache",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Ahttps%3A%2F%2Fhttpd.apache.org%2Fdocs%2Fcurrent%2F"
    },
    {
        "d": "www.archlinux.org",
        "b": "apackages",
        "u": "http://www.archlinux.org/packages/?sort=&q={{{s}}}&maintainer=&last_update=&flagged=&limit=50"
    },
    {
        "d": "www.archlinux.org",
        "b": "apck",
        "u": "https://www.archlinux.org/packages/?sort=&q={{{s}}}&maintainer=&last_update=&flagged=&limit=50"
    },
    {
        "d": "apidock.com",
        "b": "apidockrails",
        "u": "http://apidock.com/rails/search/quick?query={{{s}}}"
    },
    {
        "d": "apidock.com",
        "b": "apidockruby",
        "u": "http://apidock.com/ruby/search/quick?query={{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "apiplatform",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aapi-platform.com&t=canonical&ia=web"
    },
    {
        "d": "apkpure.com",
        "b": "apkd",
        "u": "https://apkpure.com/search?q={{{s}}}"
    },
    {
        "d": "www.archlinux.org",
        "b": "apkg",
        "u": "https://www.archlinux.org/packages/?sort=&q={{{s}}}&maintainer=&flagged="
    },
    {
        "d": "www.apkmirror.com",
        "b": "apkm",
        "u": "https://www.apkmirror.com/?s={{{s}}}"
    },
    {
        "d": "www.apkmirror.com",
        "b": "apkmirror",
        "u": "http://www.apkmirror.com/?s={{{s}}}"
    },
    {
        "d": "apkpure.com",
        "b": "apkpure",
        "u": "https://apkpure.com/search?q={{{s}}}"
    },
    {
        "d": "aplcart.info",
        "b": "aplcart",
        "u": "https://aplcart.info/?q={{{s}}}"
    },
    {
        "d": "atom.io",
        "b": "apm",
        "u": "https://atom.io/packages/search?q={{{s}}}"
    },
    {
        "d": "addons.palemoon.org",
        "b": "apo",
        "u": "https://addons.palemoon.org/search/?terms={{{s}}}"
    },
    {
        "d": "www.appbrain.com",
        "b": "appbrain",
        "u": "http://www.appbrain.com/search?q={{{s}}}"
    },
    {
        "d": "developer.appcelerator.com",
        "b": "appcel",
        "u": "http://developer.appcelerator.com/apidoc/search/mobile/latest?q={{{s}}}"
    },
    {
        "d": "www.winehq.org",
        "b": "appdb",
        "u": "http://www.winehq.org/search?cx=partner-pub-0971840239976722%3Aw9sqbcsxtyf&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&siteurl=appdb.winehq.org%2F&ref=www.winehq.org%2Fsearch%2F%3Fcx%3Dpartner-pub-0971840239976722%253Aw9sqbcsxtyf%26cof%3DFORID%253A10%26ie%3DUTF-8%26q%3Dsomething&ss=674j114846j5"
    },
    {
        "d": "code.google.com",
        "b": "appengine",
        "u": "http://code.google.com/query/#p=appengine&q={{{s}}}"
    },
    {
        "d": "appexchange.salesforce.com",
        "b": "appex",
        "u": "https://appexchange.salesforce.com/results?keywords={{{s}}}"
    },
    {
        "d": "search.appinn.com",
        "b": "appinn",
        "u": "https://search.appinn.com/cse/search?q={{{s}}}&s=5999676002387380177&source=www.appinn.com"
    },
    {
        "d": "applebase.net",
        "b": "applebase",
        "u": "https://applebase.net/Search.html?term={{{s}}}&cat=1"
    },
    {
        "d": "www.apple.com",
        "b": "applebr",
        "u": "https://www.apple.com/br/search/{{{s}}}"
    },
    {
        "d": "developer.apple.com",
        "b": "appledev",
        "u": "https://developer.apple.com/search/index.php?q={{{s}}} "
    },
    {
        "d": "discussions.apple.com",
        "b": "applediscuss",
        "u": "https://discussions.apple.com/search.jspa?peopleEnabled=true&userID=&containerType=&container=&spotlight=true&q={{{s}}}"
    },
    {
        "d": "www.applefritter.com",
        "b": "applefritter",
        "u": "https://www.applefritter.com/search/node/{{{s}}}"
    },
    {
        "d": "appleinsider.com",
        "b": "appleinsider",
        "u": "http://appleinsider.com/search/{{{s}}}"
    },
    {
        "d": "support.apple.com",
        "b": "applesoftware",
        "u": "https://support.apple.com/en_US/downloads/{{{s}}}"
    },
    {
        "d": "support.apple.com",
        "b": "applesupport",
        "u": "http://support.apple.com/kb/index?page=search&product=&q={{{s}}}&src=support_site.kbase.search.searchresults"
    },
    {
        "d": "appnr.com",
        "b": "appnr",
        "u": "http://appnr.com/search/{{{s}}}"
    },
    {
        "d": "programs.wikia.com",
        "b": "apppedia",
        "u": "http://programs.wikia.com/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "appshopper.com",
        "b": "appshopper",
        "u": "http://appshopper.com/search/?search={{{s}}}"
    },
    {
        "d": "appsliced.co",
        "b": "appsliced",
        "u": "http://appsliced.co/apps?search={{{s}}}"
    },
    {
        "d": "apps.splunk.com",
        "b": "apps.splunk",
        "u": "http://apps.splunk.com/apps/#/search/{{{s}}}"
    },
    {
        "d": "www.appvv.com",
        "b": "appvv",
        "u": "http://www.appvv.com/search.htm?search={{{s}}}&device=1"
    },
    {
        "d": "www.apt-browse.org",
        "b": "aptbrowse",
        "u": "https://www.apt-browse.org/search/?query={{{s}}}"
    },
    {
        "d": "en.aptoide.com",
        "b": "aptoide",
        "u": "https://en.aptoide.com/search?query={{{s}}}"
    },
    {
        "d": "packages.ubuntu.com",
        "b": "apt",
        "u": "https://packages.ubuntu.com/search?keywords={{{s}}}&searchon=all&suite=all&section=all"
    },
    {
        "d": "ruby.libhunt.com",
        "b": "arb",
        "u": "https://ruby.libhunt.com/search?query={{{s}}}"
    },
    {
        "d": "www.esri.com",
        "b": "arcblog",
        "u": "https://www.esri.com/en-us/search/?q={{{s}}}"
    },
    {
        "d": "developers.arcgis.com",
        "b": "arcdev",
        "u": "https://developers.arcgis.com/search/?q={{{s}}}"
    },
    {
        "d": "doc.arcgis.com",
        "b": "arcdoc",
        "u": "https://doc.arcgis.com/search/?q={{{s}}}"
    },
    {
        "d": "resources.arcgis.com",
        "b": "arcgisres",
        "u": "http://resources.arcgis.com/content/search-result?searchKeyWord={{{s}}}"
    },
    {
        "d": "wiki.archlinux.org",
        "b": "arch",
        "u": "https://wiki.archlinux.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "aur.archlinux.org",
        "b": "archaur",
        "u": "https://aur.archlinux.org/packages.php?O=0&K={{{s}}}&do_Search=Go"
    },
    {
        "d": "bugs.archlinux.org",
        "b": "archbugs",
        "u": "https://bugs.archlinux.org/index.php?string={{{s}}}&project=0"
    },
    {
        "d": "wiki.archlinux.de",
        "b": "archde",
        "u": "https://wiki.archlinux.de/index.php?search={{{s}}}"
    },
    {
        "d": "bbs.archlinux.org",
        "b": "archforums",
        "u": "https://bbs.archlinux.org/search.php?action=search&keywords={{{s}}}&author=&search_in=0&sort_by=0&sort_dir=DESC&show_as=topics&search=Submit"
    },
    {
        "d": "wiki.archlinux.fr",
        "b": "archfr",
        "u": "http://wiki.archlinux.fr/index.php?title=Sp%C3%A9cial%3ARecherche&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "wiki.archlinux.jp",
        "b": "archjp",
        "u": "https://wiki.archlinux.jp/index.php?search={{{s}}}"
    },
    {
        "d": "bbs.archlinux.org",
        "b": "archlinux",
        "u": "https://bbs.archlinux.org/search.php?action=search&keywords={{{s}}}&author=&search_in=0&sort_by=0&sort_dir=DESC&show_as=topics&search=Submit"
    },
    {
        "d": "wiki.archlinux.fr",
        "b": "archlinuxfr",
        "u": "https://wiki.archlinux.fr/index.php?title=Spécial%3ARecherche&profile=default&fulltext=Search&search={{{s}}}"
    },
    {
        "d": "wiki.archlinux.org",
        "b": "archlinuxit",
        "u": "https://wiki.archlinux.org/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "man.archlinux.org",
        "b": "archman",
        "u": "https://man.archlinux.org/search?q={{{s}}}&go=Go"
    },
    {
        "d": "www.archlinux.org",
        "b": "archpackages",
        "u": "https://www.archlinux.org/packages/?q={{{s}}}"
    },
    {
        "d": "www.archlinux.org",
        "b": "archpkg",
        "u": "https://www.archlinux.org/packages/?sort=&q={{{s}}}&maintainer=&flagged="
    },
    {
        "d": "wiki.archlinux.org",
        "b": "archpl",
        "u": "https://wiki.archlinux.org/index.php/{{{s}}} _(Polski)"
    },
    {
        "d": "wiki.archlinux.org",
        "b": "archwiki",
        "u": "https://wiki.archlinux.org/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "arduino.stackexchange.com",
        "b": "arduino",
        "u": "http://arduino.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "arduinoreference",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aarduino.cc&ia=web"
    },
    {
        "d": "whois.arin.net",
        "b": "arin",
        "u": "http://whois.arin.net/rest/nets;q={{{s}}}?showDetails=true&showARIN=false&ext=netref2"
    },
    {
        "d": "ark.intel.com",
        "b": "ark",
        "u": "https://ark.intel.com/search?q={{{s}}}"
    },
    {
        "d": "www.armadeus.com",
        "b": "armadeus",
        "u": "http://www.armadeus.com/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "azure.microsoft.com",
        "b": "armtemp",
        "u": "https://azure.microsoft.com/de-de/resources/templates/?term={{{s}}}"
    },
    {
        "d": "arstechnica.com",
        "b": "ars",
        "u": "https://arstechnica.com/search/?ie=UTF-8&q={{{s}}}"
    },
    {
        "d": "arstechnica.co.uk",
        "b": "arstechnicauk",
        "u": "http://arstechnica.co.uk/search/?query={{{s}}}"
    },
    {
        "d": "arstechnica.co.uk",
        "b": "arsuk",
        "u": "http://arstechnica.co.uk/search/?query={{{s}}}"
    },
    {
        "d": "www.artstation.com",
        "b": "artstation",
        "u": "https://www.artstation.com/search?q={{{s}}}&sorting=recent"
    },
    {
        "d": "www.arturogoga.com",
        "b": "arturogoga",
        "u": "https://www.arturogoga.com/?s={{{s}}}"
    },
    {
        "d": "community.arubanetworks.com",
        "b": "aruba",
        "u": "https://community.arubanetworks.com/t5/forums/searchpage/tab/message?q={{{s}}}"
    },
    {
        "d": "sysadmin.libhunt.com",
        "b": "asa",
        "u": "https://sysadmin.libhunt.com/search?query={{{s}}}"
    },
    {
        "d": "ashadidi.com",
        "b": "asha",
        "u": "https://ashadidi.com/search/{{{s}}}"
    },
    {
        "d": "support.f5.com",
        "b": "askf5",
        "u": "https://support.f5.com/kb/en-us/search.res.html?productList=big-ip%2Cbc%2Cfp%2C3-dns%2Clc%2Cts%2Cwj%2Cwa_5_x%2Csam%2Clinerate-eol&versionList=all%2C&searchType=basic&isFromGSASearch=false&query={{{s}}}&site=support_external&client=support-f5-com&q={{{s}}}&prodName=ALL&prodVersText=&docTypeName=ALL&includeArchived=false&submit_form=&product=all&eolProducts=all&documentType=all"
    },
    {
        "d": "ask.fedoraproject.org",
        "b": "askfedora",
        "u": "https://ask.fedoraproject.org/en/questions/scope:all/sort:activity-desc/page:1/query:{{{s}}}/"
    },
    {
        "d": "www.asksteem.com",
        "b": "asksteem",
        "u": "https://www.asksteem.com/search?q={{{s}}}"
    },
    {
        "d": "askubuntu.com",
        "b": "asku",
        "u": "http://askubuntu.com/search?q={{{s}}}"
    },
    {
        "d": "askubuntu.com",
        "b": "askubnt",
        "u": "http://askubuntu.com/search?q={{{s}}}"
    },
    {
        "d": "askubuntu.com",
        "b": "askubuntu",
        "u": "http://askubuntu.com/search?q={{{s}}}"
    },
    {
        "d": "www.askvg.com",
        "b": "askvg",
        "u": "http://www.askvg.com/?s={{{s}}}"
    },
    {
        "d": "www.ultratools.com",
        "b": "asnumber",
        "u": "https://www.ultratools.com/tools/asnInfoResult?domainName={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "asterisk",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Awiki.asterisk.org&ia=web"
    },
    {
        "d": "www.addictivetips.com",
        "b": "at",
        "u": "http://www.addictivetips.com/archives/search/?cx=015974260755795457590%3Akigcmyffu6y&cof=FORID%3A11&ie=UTF-8&q={{{s}}}&s=Search"
    },
    {
        "d": "atmospherejs.com",
        "b": "atjs",
        "u": "https://atmospherejs.com/?q={{{s}}}"
    },
    {
        "d": "www.atlantistime.com",
        "b": "atlantis",
        "u": "https://www.atlantistime.com/?s={{{s}}}"
    },
    {
        "d": "atlas.torproject.org",
        "b": "atlas",
        "u": "https://atlas.torproject.org/#search/{{{s}}}"
    },
    {
        "d": "atmospherejs.com",
        "b": "atmospherejs",
        "u": "https://atmospherejs.com/?q={{{s}}}"
    },
    {
        "d": "alternativeto.net",
        "b": "ato",
        "u": "https://alternativeto.net/browse/search/?q={{{s}}}"
    },
    {
        "d": "atom.io",
        "b": "atomio",
        "u": "https://atom.io/packages/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "atom.io",
        "b": "atompackages",
        "u": "https://atom.io/packages/search?q={{{s}}}"
    },
    {
        "d": "atom.io",
        "b": "atomthemes",
        "u": "https://atom.io/themes/search?q={{{s}}}"
    },
    {
        "d": "www.autoitscript.com",
        "b": "au3",
        "u": "https://www.autoitscript.com/forum/search/?q={{{s}}}"
    },
    {
        "d": "aur.archlinux.org",
        "b": "au",
        "u": "https://aur.archlinux.org/packages/?K={{{s}}}"
    },
    {
        "d": "askubuntu.com",
        "b": "aubuntu",
        "u": "http://askubuntu.com/search?q={{{s}}}"
    },
    {
        "d": "www.audi.de",
        "b": "audi",
        "u": "http://www.audi.de/de/brand/de/tools/search.html#search={{{s}}}"
    },
    {
        "d": "aur4.archlinux.org",
        "b": "aur4",
        "u": "https://aur4.archlinux.org/packages/?K={{{s}}}"
    },
    {
        "d": "aur.archlinux.org",
        "b": "aur",
        "u": "https://aur.archlinux.org/packages/?K={{{s}}}"
    },
    {
        "d": "aur.archlinux.org",
        "b": "aurp",
        "u": "https://aur.archlinux.org/packages/{{{s}}}"
    },
    {
        "d": "www.autosar.org",
        "b": "autosar",
        "u": "https://www.autosar.org/nc/document-search/?tx_sysgsearch_pi1%5Bquery%5D={{{s}}}"
    },
    {
        "d": "www.applevis.com",
        "b": "avis",
        "u": "https://www.applevis.com/search?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "wiki.archlinux.org",
        "b": "aw",
        "u": "https://wiki.archlinux.org/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "wiki.archlinux.de",
        "b": "awde",
        "u": "https://wiki.archlinux.de/index.php?title=Spezial%3ASuche&search={{{s}}}"
    },
    {
        "d": "ruby.libhunt.com",
        "b": "awerb",
        "u": "https://ruby.libhunt.com/search?query={{{s}}}"
    },
    {
        "d": "docs.aws.amazon.com",
        "b": "aws",
        "u": "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation&searchQuery={{{s}}} "
    },
    {
        "d": "androidxref.com",
        "b": "ax",
        "u": "http://androidxref.com/5.1.0_r1/search?&project=abi&project=art&project=bionic&project=bootable&project=build&project=cts&project=dalvik&project=developers&project=development&project=device&project=docs&project=external&project=frameworks&project=hardware&project=libcore&project=libnativehelper&project=ndk&project=packages&project=pdk&project=prebuilts&project=sdk&project=system&project=tools&q={{{s}}}"
    },
    {
        "d": "www.azfonts.net",
        "b": "azfonts",
        "u": "https://www.azfonts.net/search.html?query={{{s}}}"
    },
    {
        "d": "azure.microsoft.com",
        "b": "azure",
        "u": "https://azure.microsoft.com/en-us/search/?q={{{s}}}"
    },
    {
        "d": "b0b.fr",
        "b": "b0b",
        "u": "http://b0b.fr/?s={{{s}}}"
    },
    {
        "d": "www.b4x.com",
        "b": "b4x",
        "u": "https://www.b4x.com/android/forum/pages/results/?query={{{s}}}"
    },
    {
        "d": "babymigo.com",
        "b": "babymigo",
        "u": "https://babymigo.com/search/questions?query={{{s}}}"
    },
    {
        "d": "www.baeldung.com",
        "b": "baeldung",
        "u": "https://www.baeldung.com/?s={{{s}}}"
    },
    {
        "d": "www.baixaki.com.br",
        "b": "baixaki",
        "u": "http://www.baixaki.com.br/busca.asp?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "bang",
        "u": "https://duckduckgo.com/bang?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "bash",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:mywiki.wooledge.org,wiki.bash-hackers.org"
    },
    {
        "d": "docs.bazel.build",
        "b": "bazel",
        "u": "https://docs.bazel.build/search.html?q={{{s}}}"
    },
    {
        "d": "appworld.blackberry.com",
        "b": "bbapps",
        "u": "http://appworld.blackberry.com/webstore/search/{{{s}}}"
    },
    {
        "d": "bitbucket.org",
        "b": "bb",
        "u": "https://bitbucket.org/repo/all/?name={{{s}}}"
    },
    {
        "d": "bitbucket.org",
        "b": "bbcs",
        "u": "https://bitbucket.org/search?q={{{s}}}"
    },
    {
        "d": "developer.blackberry.com",
        "b": "bbdev",
        "u": "https://developer.blackberry.com/native/search/?search={{{s}}}&searchaction=Search"
    },
    {
        "d": "doc.babylonjs.com",
        "b": "bbjs",
        "u": "https://doc.babylonjs.com/search/?bjsq={{{s}}}"
    },
    {
        "d": "www.bbs-consultant.net",
        "b": "bbsfr",
        "u": "http://www.bbs-consultant.net/search/node/{{{s}}}"
    },
    {
        "d": "bitbucket.org",
        "b": "bbus",
        "u": "https://bitbucket.org/{{{s}}}/"
    },
    {
        "d": "bcb-atm.com",
        "b": "bcb-atm",
        "u": "https://bcb-atm.com/map?keyword={{{s}}}"
    },
    {
        "d": "tools.ietf.org",
        "b": "bcp",
        "u": "http://tools.ietf.org/html/bcp{{{s}}}"
    },
    {
        "d": "en.bitcoin.it",
        "b": "bcwiki",
        "u": "https://en.bitcoin.it/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.bitdegree.org",
        "b": "bdgc",
        "u": "https://www.bitdegree.org/search?q={{{s}}}&src=ukw"
    },
    {
        "d": "www.bitdegree.org",
        "b": "bdgl",
        "u": "https://www.bitdegree.org/learn/search?query={{{s}}}"
    },
    {
        "d": "www.leblogduhacker.fr",
        "b": "bdh",
        "u": "http://www.leblogduhacker.fr/?s={{{s}}}"
    },
    {
        "d": "blockexplorer.com",
        "b": "be",
        "u": "https://blockexplorer.com/searchgo/{{{s}}}"
    },
    {
        "d": "www.behance.net",
        "b": "behance",
        "u": "http://www.behance.net/search?search={{{s}}}"
    },
    {
        "d": "www.bell.ca",
        "b": "bell",
        "u": "http://www.bell.ca/Search?q={{{s}}}"
    },
    {
        "d": "betalist.com",
        "b": "betalist",
        "u": "http://betalist.com/search?q={{{s}}}"
    },
    {
        "d": "bertholdsson.eu",
        "b": "beu",
        "u": "https://bertholdsson.eu/?s={{{s}}}"
    },
    {
        "d": "bgp.he.net",
        "b": "bgp",
        "u": "http://bgp.he.net/search?search%5Bsearch%5D={{{s}}}&commit=Search"
    },
    {
        "d": "bitinfocharts.com",
        "b": "bich",
        "u": "https://bitinfocharts.com/comparison/marketcap-{{{s}}}.html#log"
    },
    {
        "d": "bioinfo-fr.net",
        "b": "bifr",
        "u": "http://bioinfo-fr.net/?s={{{s}}}"
    },
    {
        "d": "bintray.com",
        "b": "bintray",
        "u": "https://bintray.com/search?query={{{s}}}"
    },
    {
        "d": "wiki.bitlair.nl",
        "b": "bitlair",
        "u": "https://wiki.bitlair.nl/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "bitref.com",
        "b": "bitref",
        "u": "https://bitref.com/{{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "blacklist",
        "u": "http://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a{{{s}}}&run=toolpage"
    },
    {
        "d": "live.blockcypher.com",
        "b": "blcy",
        "u": "https://live.blockcypher.com/btc/address/{{{s}}}"
    },
    {
        "d": "bluetoothle.wiki",
        "b": "ble",
        "u": "https://bluetoothle.wiki/start?do=search&id=start&q={{{s}}}"
    },
    {
        "d": "docs.blender.org",
        "b": "blendapi",
        "u": "https://docs.blender.org/api/current/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "docs.blender.org",
        "b": "blenderapi",
        "u": "https://docs.blender.org/api/current/search.html?q={{{s}}}"
    },
    {
        "d": "docs.blender.org",
        "b": "blender",
        "u": "https://docs.blender.org/manual/en/latest/search.html?q={{{s}}}&check_keywords=yes"
    },
    {
        "d": "budgetlightforum.com",
        "b": "blf",
        "u": "http://budgetlightforum.com/search?q_as={{{s}}}"
    },
    {
        "d": "blogmotion.fr",
        "b": "blm",
        "u": "http://blogmotion.fr/?utm_source=duckduckgo&utm_medium=bang&s={{{s}}}"
    },
    {
        "d": "www.blendernation.com",
        "b": "bln",
        "u": "https://www.blendernation.com/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "blog",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aduck.co%2Fblog"
    },
    {
        "d": "blogs.splunk.com",
        "b": "blogs.splunk",
        "u": "http://blogs.splunk.com/?s={{{s}}}"
    },
    {
        "d": "www.blogudir.com",
        "b": "blogudir",
        "u": "https://www.blogudir.com/search?q={{{s}}}"
    },
    {
        "d": "bugzilla.mozilla.org",
        "b": "bmo",
        "u": "https://bugzilla.mozilla.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "bokunoshumi.wordpress.com",
        "b": "bns",
        "u": "https://bokunoshumi.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "dillonboardman.wordpress.com",
        "b": "boardman",
        "u": "http://dillonboardman.wordpress.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "wiki.parabola.nu",
        "b": "bola",
        "u": "https://wiki.parabola.nu/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.parabola.nu",
        "b": "bolapkg",
        "u": "https://www.parabola.nu/packages/?q={{{s}}}"
    },
    {
        "d": "www.websmartboomer.com",
        "b": "boom",
        "u": "http://www.websmartboomer.com/?q={{{s}}}"
    },
    {
        "d": "bugzilla.opensuse.org",
        "b": "boo",
        "u": "https://bugzilla.opensuse.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "boost.org",
        "b": "boost",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:boost.org"
    },
    {
        "d": "getbootstrap.com",
        "b": "boot",
        "u": "https://getbootstrap.com/docs/4.0/components/{{{s}}}/"
    },
    {
        "d": "botlist.co",
        "b": "botlist",
        "u": "https://botlist.co/search?query={{{s}}}"
    },
    {
        "d": "boto3.readthedocs.io",
        "b": "boto3",
        "u": "https://boto3.readthedocs.io/en/latest/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.bountysource.com",
        "b": "bountysource",
        "u": "https://www.bountysource.com/search?query={{{s}}}"
    },
    {
        "d": "bourbon.io",
        "b": "bourbon",
        "u": "http://bourbon.io/docs/?q={{{s}}}"
    },
    {
        "d": "libraries.io",
        "b": "bower",
        "u": "https://libraries.io/search?q={{{s}}}&platforms=Bower&sort=rank&sort=rank"
    },
    {
        "d": "beautifulpixels.com",
        "b": "bp",
        "u": "http://beautifulpixels.com/?s={{{s}}} "
    },
    {
        "d": "bugs.python.org",
        "b": "bpoi",
        "u": "https://bugs.python.org/issue{{{s}}}"
    },
    {
        "d": "www.brainpop.com",
        "b": "bpop",
        "u": "https://www.brainpop.com/search/?keyword={{{s}}}"
    },
    {
        "d": "bugs.python.org",
        "b": "bpo",
        "u": "https://bugs.python.org/issue?%40columns=id%2Cactivity%2Ctitle%2Ccreator%2Cassignee%2Cstatus%2Ctype&%40sort=-activity&%40filter=status&%40action=searchid&ignore=file%3Acontent&%40search_text={{{s}}}&submit=search&status=-1%2C1%2C2%2C3"
    },
    {
        "d": "formulae.brew.sh",
        "b": "brewf",
        "u": "https://formulae.brew.sh/formula/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "brew",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aformulae.brew.sh"
    },
    {
        "d": "bropages.org",
        "b": "bro",
        "u": "http://bropages.org/{{{s}}}"
    },
    {
        "d": "www.bro.org",
        "b": "bro-ids",
        "u": "https://www.bro.org/sphinx/search.html?check_keywords=yes&q={{{s}}}"
    },
    {
        "d": "www.crummy.com",
        "b": "bs4",
        "u": "https://www.crummy.com/software/BeautifulSoup/bs4/doc/search.html?q={{{s}}}"
    },
    {
        "d": "www.freebsd.org",
        "b": "bsdman",
        "u": "http://www.freebsd.org/cgi/man.cgi?query={{{s}}}"
    },
    {
        "d": "shop.bsigroup.com",
        "b": "bsishop",
        "u": "https://shop.bsigroup.com/SearchResults/?q={{{s}}}"
    },
    {
        "d": "www.blueskyrotor.com",
        "b": "bsr",
        "u": "http://www.blueskyrotor.com/performance/search/index.php?keyword={{{s}}}"
    },
    {
        "d": "www.blockchain.com",
        "b": "btcaddr",
        "u": "https://www.blockchain.com/btc/address/{{{s}}}"
    },
    {
        "d": "bitcoinity.org",
        "b": "btcm",
        "u": "http://bitcoinity.org/markets/{{{s}}}/USD"
    },
    {
        "d": "btrfs.wiki.kernel.org",
        "b": "btrfs",
        "u": "https://btrfs.wiki.kernel.org/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "bugs.debian.org",
        "b": "bts",
        "u": "https://bugs.debian.org/cgi-bin/bugreport.cgi?bug={{{s}}}"
    },
    {
        "d": "www.bug.hr",
        "b": "bugforum",
        "u": "https://www.bug.hr/forum/search/topic/?txt={{{s}}}"
    },
    {
        "d": "bugzilla.mozilla.org",
        "b": "bugzilla",
        "u": "https://bugzilla.mozilla.org/buglist.cgi?quicksearch={{{s}}} "
    },
    {
        "d": "builtwith.com",
        "b": "builtwith",
        "u": "https://builtwith.com/?{{{s}}}"
    },
    {
        "d": "bundlephobia.com",
        "b": "bundle",
        "u": "https://bundlephobia.com/result?p={{{s}}}"
    },
    {
        "d": "bundlephobia.com",
        "b": "bundlephobia",
        "u": "https://bundlephobia.com/result?p={{{s}}}"
    },
    {
        "d": "bxr.su",
        "b": "bxr",
        "u": "http://bxr.su/search?refs={{{s}}}"
    },
    {
        "d": "www.byte-post.com",
        "b": "byte",
        "u": "https://www.byte-post.com/?s={{{s}}}"
    },
    {
        "d": "www.commander1024.de",
        "b": "c1024",
        "u": "http://www.commander1024.de/wordpress/?s={{{s}}}"
    },
    {
        "d": "c2.com",
        "b": "c2",
        "u": "http://c2.com/cgi/fullSearch?search={{{s}}}"
    },
    {
        "d": "cycling74.com",
        "b": "c74",
        "u": "https://cycling74.com/search/page/1/{{{s}}}"
    },
    {
        "d": "www.caddetails.com",
        "b": "cad",
        "u": "https://www.caddetails.com/search?q={{{s}}}"
    },
    {
        "d": "www.cadence.com",
        "b": "cadence",
        "u": "https://www.cadence.com/content/cadence-www/global/en_US/home/search.html?k={{{s}}}"
    },
    {
        "d": "book.cakephp.org",
        "b": "cake2book",
        "u": "http://book.cakephp.org/2.0/en/search.html?q={{{s}}} "
    },
    {
        "d": "book.cakephp.org",
        "b": "cake2",
        "u": "http://book.cakephp.org/2.0/en/search.html?q={{{s}}}"
    },
    {
        "d": "book.cakephp.org",
        "b": "cakebook",
        "u": "https://book.cakephp.org/3.0/en/search.html?check_keywords=yes&area=default&q={{{s}}}"
    },
    {
        "d": "api.cakephp.org",
        "b": "cake",
        "u": "http://api.cakephp.org/search/{{{s}}}"
    },
    {
        "d": "caniuse.com",
        "b": "caniuse",
        "u": "http://caniuse.com/#search={{{s}}}"
    },
    {
        "d": "crates.io",
        "b": "cargo",
        "u": "https://crates.io/search?q={{{s}}}"
    },
    {
        "d": "www.cashoverflow.in",
        "b": "cashoverflow",
        "u": "http://www.cashoverflow.in/?s={{{s}}} "
    },
    {
        "d": "www.computerbase.de",
        "b": "cbase",
        "u": "http://www.computerbase.de/suche/?q={{{s}}}"
    },
    {
        "d": "codebottle.io",
        "b": "cbottle",
        "u": "https://codebottle.io/?q={{{s}}}"
    },
    {
        "d": "coinmarketcap.com",
        "b": "ccap",
        "u": "https://coinmarketcap.com/currencies/search/?q={{{s}}}"
    },
    {
        "d": "www.christcenteredgamer.com",
        "b": "ccgrforum",
        "u": "https://www.christcenteredgamer.com/phpBB3/search.php?keywords={{{s}}}&submit=Search"
    },
    {
        "d": "www.christcenteredgamer.com",
        "b": "ccgrreviews",
        "u": "https://www.christcenteredgamer.com/index.php/component/search/?searchword={{{s}}}&ordering=newest&searchphrase=all&areas[0]=blogs"
    },
    {
        "d": "www.cnet.com",
        "b": "c",
        "u": "http://www.cnet.com/1770-5_1-0.html?query={{{s}}}"
    },
    {
        "d": "www.cplusplus.com",
        "b": "c++",
        "u": "http://www.cplusplus.com/search.do?q={{{s}}}"
    },
    {
        "d": "ccr.chakralinux.org",
        "b": "ccr",
        "u": "https://ccr.chakralinux.org/packages.php?O=0&K={{{s}}}&do_Search=+Go+"
    },
    {
        "d": "css-tricks.com",
        "b": "ccst",
        "u": "http://css-tricks.com/search-results/?q={{{s}}}"
    },
    {
        "d": "www.cdnjs.com",
        "b": "cdn",
        "u": "http://www.cdnjs.com/#/search/{{{s}}} "
    },
    {
        "d": "www.cdnplanet.com",
        "b": "cdnfinder",
        "u": "http://www.cdnplanet.com/tools/cdnfinder/#host:{{{s}}} "
    },
    {
        "d": "cdnjs.com",
        "b": "cdnjs",
        "u": "https://cdnjs.com/#q={{{s}}}"
    },
    {
        "d": "forum.cheatengine.org",
        "b": "ce",
        "u": "http://forum.cheatengine.org/search.php?q={{{s}}}"
    },
    {
        "d": "www.censys.io",
        "b": "censys",
        "u": "https://www.censys.io/ipv4?q={{{s}}}"
    },
    {
        "d": "cfdocs.org",
        "b": "cfd",
        "u": "https://cfdocs.org/{{{s}}}"
    },
    {
        "d": "www.codingforentrepreneurs.com",
        "b": "cfe",
        "u": "https://www.codingforentrepreneurs.com/search/?q={{{s}}}"
    },
    {
        "d": "docs.aws.amazon.com",
        "b": "cfn",
        "u": "http://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation-guide&searchQuery={{{s}}}&this_doc_product=AWS+CloudFormation&this_doc_guide=User+Guide&doc_locale=en_us#facet_doc_product=AWS%20CloudFormation&facet_doc_guide=User%20Guide"
    },
    {
        "d": "www.cgtrader.com",
        "b": "cgt",
        "u": "https://www.cgtrader.com/3d-models?keywords={{{s}}}"
    },
    {
        "d": "chakraos.org",
        "b": "chakraforum",
        "u": "http://chakraos.org/forum/search.php?action=search&keywords={{{s}}}&author=&search_in=0&sort_by=0&sort_dir=DESC&show_as=topics&search=Submit"
    },
    {
        "d": "www.chakraos.org",
        "b": "chakrapkg",
        "u": "http://www.chakraos.org/packages/index.php?act=search&subdir=&sortby=date&order=descending&searchpattern={{{s}}}"
    },
    {
        "d": "chakraos.org",
        "b": "chakrawiki",
        "u": "http://chakraos.org/wiki/index.php?search={{{s}}}&go=Go"
    },
    {
        "d": "charcod.es",
        "b": "char",
        "u": "http://charcod.es/#{{{s}}}"
    },
    {
        "d": "initialcharge.net",
        "b": "charge",
        "u": "http://initialcharge.net/?s={{{s}}} "
    },
    {
        "d": "hub.helm.sh",
        "b": "chart",
        "u": "https://hub.helm.sh/charts?q={{{s}}}"
    },
    {
        "d": "devhints.io",
        "b": "cheat",
        "u": "https://devhints.io/{{{s}}}"
    },
    {
        "d": "docs.chef.io",
        "b": "chefdoc",
        "u": "https://docs.chef.io/search.html#stq={{{s}}}&stp=1"
    },
    {
        "d": "docs.chef.io",
        "b": "chefio",
        "u": "https://docs.chef.io/search.html#stq={{{s}}}&stp=1"
    },
    {
        "d": "wiki.call-cc.org",
        "b": "chicken",
        "u": "https://wiki.call-cc.org/search?text={{{s}}}"
    },
    {
        "d": "www.chimerarevo.com",
        "b": "chimerarevo",
        "u": "http://www.chimerarevo.com/search/{{{s}}}"
    },
    {
        "d": "chmodcommand.com",
        "b": "chmod",
        "u": "https://chmodcommand.com/chmod-{{{s}}}/"
    },
    {
        "d": "chocolatey.org",
        "b": "choco",
        "u": "https://chocolatey.org/packages?q={{{s}}}"
    },
    {
        "d": "chocolatey.org",
        "b": "chocolatey",
        "u": "http://chocolatey.org/packages?q={{{s}}}"
    },
    {
        "d": "www.computerhope.com",
        "b": "chp",
        "u": "https://www.computerhope.com/search2.htm?q={{{s}}}"
    },
    {
        "d": "chrome.google.com",
        "b": "chrome",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}"
    },
    {
        "d": "chrome.google.com",
        "b": "chromestore",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}"
    },
    {
        "d": "chain.so",
        "b": "chs",
        "u": "https://chain.so/address/{{{s}}}"
    },
    {
        "d": "cheat.sh",
        "b": "chtsh",
        "u": "https://cheat.sh/{{{s}}}"
    },
    {
        "d": "www.codeigniter.com",
        "b": "ci",
        "u": "https://www.codeigniter.com/user_guide/search.html?q={{{s}}}"
    },
    {
        "d": "chocolatey.org",
        "b": "cinst",
        "u": "http://chocolatey.org/packages?q={{{s}}}"
    },
    {
        "d": "search.cisco.com",
        "b": "cisco",
        "u": "https://search.cisco.com/search?query={{{s}}}"
    },
    {
        "d": "caniuse.com",
        "b": "ciu",
        "u": "http://caniuse.com/#search={{{s}}}"
    },
    {
        "d": "caniusepython3.com",
        "b": "ciupy3",
        "u": "https://caniusepython3.com/project/{{{s}}}"
    },
    {
        "d": "caniuse.com",
        "b": "cius",
        "u": "https://caniuse.com/#search={{{s}}}"
    },
    {
        "d": "www.creationkit.com",
        "b": "ckt",
        "u": "http://www.creationkit.com/index.php?search={{{s}}}"
    },
    {
        "d": "support.cloudinary.com",
        "b": "cld",
        "u": "https://support.cloudinary.com/hc/en-us/search?utf8=%E2%9C%93&query={{{s}}}"
    },
    {
        "d": "www.clearwebstats.com",
        "b": "clearweb",
        "u": "http://www.clearwebstats.com/process.php?q={{{s}}}"
    },
    {
        "d": "www.commandlinefu.com",
        "b": "clf",
        "u": "http://www.commandlinefu.com/commands/matching/{{{s}}}/bys=/sort-by-votes"
    },
    {
        "d": "www.lispworks.com",
        "b": "clhs",
        "u": "http://www.lispworks.com/cgi-bin/search.cgi?q={{{s}}}&cmd=Search%21&t=-D--HB-"
    },
    {
        "d": "clickforce.com.au",
        "b": "clickforce",
        "u": "https://clickforce.com.au/?s={{{s}}}"
    },
    {
        "d": "www.clien.net",
        "b": "clien",
        "u": "https://www.clien.net/service/search?q={{{s}}}"
    },
    {
        "d": "cliki.net",
        "b": "cliki",
        "u": "http://cliki.net/site/search?query={{{s}}}"
    },
    {
        "d": "office.microsoft.com",
        "b": "clipart",
        "u": "http://office.microsoft.com/en-us/clipart/results.aspx?qu={{{s}}}&sc=20"
    },
    {
        "d": "clojuredocs.org",
        "b": "clj",
        "u": "https://clojuredocs.org/search?q={{{s}}}"
    },
    {
        "d": "cljdoc.org",
        "b": "cljdoc",
        "u": "https://cljdoc.org/search?q={{{s}}}"
    },
    {
        "d": "clojars.org",
        "b": "clojars",
        "u": "https://clojars.org/search?q={{{s}}}"
    },
    {
        "d": "clojuredocs.org",
        "b": "clojure",
        "u": "http://clojuredocs.org/search?x=0&y=0&q={{{s}}}"
    },
    {
        "d": "clojuredocs.org",
        "b": "clojuredocs",
        "u": "http://clojuredocs.org/search?x=0&y=0&q={{{s}}}"
    },
    {
        "d": "cloogle.org",
        "b": "cloogle",
        "u": "http://cloogle.org/#{{{s}}}"
    },
    {
        "d": "docs.aws.amazon.com",
        "b": "cloudformation",
        "u": "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation-guide&searchQuery={{{s}}}&this_doc_product=AWS+CloudFormation&this_doc_guide=User+Guide&doc_locale=en_us#facet_doc_product=AWS CloudFormation&facet_doc_guide=User Guide"
    },
    {
        "d": "cloudron.io",
        "b": "cloudron",
        "u": "https://cloudron.io/appstore.html?search={{{s}}}"
    },
    {
        "d": "clearlinux.org",
        "b": "clr",
        "u": "https://clearlinux.org/search?search={{{s}}}"
    },
    {
        "d": "www.clubic.com",
        "b": "clubic",
        "u": "http://www.clubic.com/r/{{{s}}}"
    },
    {
        "d": "www.cmake.org",
        "b": "cmake30",
        "u": "http://www.cmake.org/cmake/help/v3.0/search.html?q={{{s}}}"
    },
    {
        "d": "cmake.org",
        "b": "cmake",
        "u": "https://cmake.org/cmake/help/latest/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.cmmmanager.com",
        "b": "cmmm",
        "u": "https://www.cmmmanager.com/forum/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.cmmmanager.com",
        "b": "cmmmgr",
        "u": "https://www.cmmmanager.com/forum/search.php?keywords={{{s}}}"
    },
    {
        "d": "cmslxr.fnal.gov",
        "b": "cmssw",
        "u": "http://cmslxr.fnal.gov/search?_filestring=&_string={{{s}}}"
    },
    {
        "d": "www.cnet.com",
        "b": "cnet",
        "u": "http://www.cnet.com/1770-5_1-0.html?query={{{s}}}&tag=srch&target=nw"
    },
    {
        "d": "www.cnet.com",
        "b": "cnete",
        "u": "http://www.cnet.com/es/busqueda/?query={{{s}}}"
    },
    {
        "d": "www.cnet.com",
        "b": "cnetuk",
        "u": "http://www.cnet.com/search/?query={{{s}}}"
    },
    {
        "d": "developer.apple.com",
        "b": "cocoa",
        "u": "https://developer.apple.com/search/index.php?q={{{s}}} "
    },
    {
        "d": "cocoapods.org",
        "b": "cocoapods",
        "u": "http://cocoapods.org/?q={{{s}}}"
    },
    {
        "d": "support.code42.com",
        "b": "code42",
        "u": "https://support.code42.com/Special:Search?search={{{s}}}"
    },
    {
        "d": "codebottle.io",
        "b": "codebottle",
        "u": "https://codebottle.io/?q={{{s}}}"
    },
    {
        "d": "codedgar.com.ve",
        "b": "codedgar",
        "u": "https://codedgar.com.ve/?s={{{s}}}"
    },
    {
        "d": "codeforces.com",
        "b": "codeforces",
        "u": "http://codeforces.com/search?query={{{s}}}"
    },
    {
        "d": "code.gov",
        "b": "codegov",
        "u": "https://code.gov/search?query={{{s}}}"
    },
    {
        "d": "code.kx.com",
        "b": "codekx",
        "u": "https://code.kx.com/q/search?query={{{s}}}"
    },
    {
        "d": "www.codeweavers.com",
        "b": "codeweavers",
        "u": "http://www.codeweavers.com/compatibility/search/?name={{{s}}}"
    },
    {
        "d": "codex.wordpress.org",
        "b": "codex",
        "u": "http://codex.wordpress.org/?search={{{s}}}"
    },
    {
        "d": "thecodinglove.com",
        "b": "codinglove",
        "u": "http://thecodinglove.com/search/{{{s}}}"
    },
    {
        "d": "tympanus.net",
        "b": "codrops",
        "u": "http://tympanus.net/codrops/?s={{{s}}}"
    },
    {
        "d": "community.adobe.com",
        "b": "coldfusion",
        "u": "http://community.adobe.com/help/search.html?searchterm={{{s}}}&go=go&q={{{s}}}&l=coldfusion_product_adobelr&x=0&y=0&area=0&lr=en_US"
    },
    {
        "d": "www.colorhexa.com",
        "b": "color",
        "u": "http://www.colorhexa.com/{{{s}}}"
    },
    {
        "d": "compass-style.org",
        "b": "compass",
        "u": "http://compass-style.org/search/?q={{{s}}}"
    },
    {
        "d": "www.comptoirsecu.fr",
        "b": "comptoirsecu",
        "u": "http://www.comptoirsecu.fr/?s={{{s}}}"
    },
    {
        "d": "www.computerhope.com",
        "b": "computerhope",
        "u": "https://www.computerhope.com/search2.htm?q={{{s}}}"
    },
    {
        "d": "conarte.org.mx",
        "b": "conarte",
        "u": "http://conarte.org.mx/?s={{{s}}}"
    },
    {
        "d": "anaconda.org",
        "b": "conda",
        "u": "https://anaconda.org/search?q={{{s}}}"
    },
    {
        "d": "config.lk",
        "b": "config",
        "u": "https://config.lk/?s={{{s}}}"
    },
    {
        "d": "supermarket.chef.io",
        "b": "coobook",
        "u": "https://supermarket.chef.io/cookbooks?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "supermarket.chef.io",
        "b": "cookbook",
        "u": "https://supermarket.chef.io/cookbooks?q={{{s}}}"
    },
    {
        "d": "www.coolapk.com",
        "b": "Coolapk",
        "u": "https://www.coolapk.com/search?q={{{s}}}"
    },
    {
        "d": "copr.fedoraproject.org",
        "b": "copr",
        "u": "http://copr.fedoraproject.org/coprs/fulltext/?fulltext={{{s}}}"
    },
    {
        "d": "coptr.digipres.org",
        "b": "coptr",
        "u": "http://coptr.digipres.org/index.php?search={{{s}}}"
    },
    {
        "d": "coq.inria.fr",
        "b": "coq",
        "u": "https://coq.inria.fr/distrib/current/refman/search.html?q={{{s}}}"
    },
    {
        "d": "plugins.cordova.io",
        "b": "cordovapl",
        "u": "http://plugins.cordova.io/#/search?search={{{s}}}"
    },
    {
        "d": "coronalabs.com",
        "b": "corona",
        "u": "https://coronalabs.com/?s={{{s}}}"
    },
    {
        "d": "couleur-science.eu",
        "b": "couleur",
        "u": "http://couleur-science.eu/index.php?q={{{s}}}"
    },
    {
        "d": "www.coveo.com",
        "b": "coveo",
        "u": "http://www.coveo.com/en/search#q={{{s}}}"
    },
    {
        "d": "metacpan.org",
        "b": "cpan1",
        "u": "https://metacpan.org/search?q={{{s}}}&lucky=1"
    },
    {
        "d": "deps.cpantesters.org",
        "b": "cpandeps",
        "u": "http://deps.cpantesters.org/?module={{{s}}}&perl=any+version&os=any+OS"
    },
    {
        "d": "metacpan.org",
        "b": "cpan",
        "u": "http://metacpan.org/search?q={{{s}}}"
    },
    {
        "d": "metacpan.org",
        "b": "cpanm",
        "u": "http://metacpan.org/search?q={{{s}}}"
    },
    {
        "d": "codepen.io",
        "b": "cpen",
        "u": "http://codepen.io/search?q={{{s}}}&limit=all&depth=everything&show_forks=false"
    },
    {
        "d": "cygwin.com",
        "b": "cpg",
        "u": "https://cygwin.com/cgi-bin2/package-grep.cgi?grep={{{s}}}"
    },
    {
        "d": "coinpaprika.com",
        "b": "cp",
        "u": "https://coinpaprika.com/?sort={{{s}}}"
    },
    {
        "d": "www.cplusplus.com",
        "b": "cplusplus",
        "u": "http://www.cplusplus.com/query/search.cgi?q={{{s}}}"
    },
    {
        "d": "en.cppreference.com",
        "b": "cpp",
        "u": "http://en.cppreference.com/mwiki/index.php?search={{{s}}}"
    },
    {
        "d": "de.cppreference.com",
        "b": "cppde",
        "u": "http://de.cppreference.com/mwiki/index.php?title=Spezial%3ASuche&search={{{s}}}"
    },
    {
        "d": "en.cppreference.com",
        "b": "cppr",
        "u": "http://en.cppreference.com/mwiki/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "en.cppreference.com",
        "b": "cppref",
        "u": "http://en.cppreference.com/mwiki/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "cppreference.com",
        "b": "cppreference",
        "u": "http://cppreference.com/w/?search={{{s}}}"
    },
    {
        "d": "www.cppsamples.com",
        "b": "cppsamples",
        "u": "http://www.cppsamples.com/#/search/{{{s}}}"
    },
    {
        "d": "www.codeproject.com",
        "b": "cproj",
        "u": "http://www.codeproject.com/search.aspx?q={{{s}}}"
    },
    {
        "d": "www.cpugeek.co.uk",
        "b": "cpu",
        "u": "https://www.cpugeek.co.uk/search?q={{{s}}}"
    },
    {
        "d": "crackberry.com",
        "b": "crackberry",
        "u": "http://crackberry.com/search/google/{{{s}}}?query={{{s}}}"
    },
    {
        "d": "finzi.psych.upenn.edu",
        "b": "cran",
        "u": "http://finzi.psych.upenn.edu/cgi-bin/namazu.cgi?query={{{s}}}&max=100&result=normal&sort=score&idxname=functions&idxname=vignettes&idxname=views"
    },
    {
        "d": "crystal-ann.com",
        "b": "crann",
        "u": "https://crystal-ann.com/?query={{{s}}}"
    },
    {
        "d": "crate.io",
        "b": "crate",
        "u": "https://crate.io/docs/stable/search.html?check_keywords=yes&area=default&q={{{s}}}"
    },
    {
        "d": "crates.io",
        "b": "crates",
        "u": "https://crates.io/search?q={{{s}}}"
    },
    {
        "d": "bugs.chromium.org",
        "b": "crbug",
        "u": "https://bugs.chromium.org/p/chromium/issues/list?q={{{s}}}"
    },
    {
        "d": "codereview.stackexchange.com",
        "b": "cr",
        "u": "http://codereview.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.cockroachlabs.com",
        "b": "crdb",
        "u": "https://www.cockroachlabs.com/docs/search.html?q={{{s}}}"
    },
    {
        "d": "crystal-lang.org",
        "b": "crdoc",
        "u": "https://crystal-lang.org/docs/?q={{{s}}}"
    },
    {
        "d": "forums.creativecow.net",
        "b": "creativecow",
        "u": "http://forums.creativecow.net/search.php?content=F&q={{{s}}}"
    },
    {
        "d": "library.creativecow.net",
        "b": "creativecowlib",
        "u": "http://library.creativecow.net/search.php?q={{{s}}}"
    },
    {
        "d": "en.cppreference.com",
        "b": "c++ref",
        "u": "http://en.cppreference.com/mwiki/index.php?search=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "crontab.guru",
        "b": "cron",
        "u": "https://crontab.guru/#{{{s}}}"
    },
    {
        "d": "crossclj.info",
        "b": "crossclj",
        "u": "http://crossclj.info/search?q={{{s}}}"
    },
    {
        "d": "crystalshards.xyz",
        "b": "crsh",
        "u": "https://crystalshards.xyz/?filter={{{s}}}"
    },
    {
        "d": "crt.sh",
        "b": "crt",
        "u": "https://crt.sh/?q={{{s}}}"
    },
    {
        "d": "www.crunchbase.com",
        "b": "crunchbase",
        "u": "https://www.crunchbase.com/textsearch?q={{{s}}}"
    },
    {
        "d": "www.crunchbase.com",
        "b": "crunch",
        "u": "https://www.crunchbase.com/textsearch/?q={{{s}}}"
    },
    {
        "d": "crux.nu",
        "b": "crux",
        "u": "http://crux.nu/portdb/?a=search&q={{{s}}}"
    },
    {
        "d": "chrome.google.com",
        "b": "crx",
        "u": "https://chrome.google.com/webstore/search?q={{{s}}}"
    },
    {
        "d": "robwu.nl",
        "b": "crxviewer",
        "u": "https://robwu.nl/crxviewer/?crx={{{s}}}"
    },
    {
        "d": "crypto.stackexchange.com",
        "b": "crypto",
        "u": "http://crypto.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "api.call-cc.org",
        "b": "csc",
        "u": "http://api.call-cc.org/cdoc?q={{{s}}}&query-regex=Regexp"
    },
    {
        "d": "social.msdn.microsoft.com",
        "b": "csharp",
        "u": "http://social.msdn.microsoft.com/Search/en-US?query={{{s}}}&Refinement=126&ac=8"
    },
    {
        "d": "www.csounds.com",
        "b": "csound",
        "u": "http://www.csounds.com/manual/html/{{{s}}}.html"
    },
    {
        "d": "developer.mozilla.org",
        "b": "css",
        "u": "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=css"
    },
    {
        "d": "css-tricks.com",
        "b": "csst",
        "u": "https://css-tricks.com/?s={{{s}}}"
    },
    {
        "d": "css-tricks.com",
        "b": "csstricks",
        "u": "https://css-tricks.com/search-results/?q={{{s}}}"
    },
    {
        "d": "cstheory.stackexchange.com",
        "b": "cstheory",
        "u": "http://cstheory.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "chrome.google.com",
        "b": "cstore",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}"
    },
    {
        "d": "wiki.call-cc.org",
        "b": "csw",
        "u": "http://wiki.call-cc.org/search?text={{{s}}}&ident="
    },
    {
        "d": "ctan.org",
        "b": "ctan",
        "u": "http://ctan.org/search/?phrase={{{s}}}&x=1&PORTAL=on&PKG=on&AUTHORS=on&TOPICS=on&max=16"
    },
    {
        "d": "cubehero.com",
        "b": "cubehero",
        "u": "https://cubehero.com/search?q={{{s}}}"
    },
    {
        "d": "caniuse.com",
        "b": "cu",
        "u": "http://caniuse.com/#search={{{s}}}"
    },
    {
        "d": "www.cultofmac.com",
        "b": "cultofmac",
        "u": "http://www.cultofmac.com/?s={{{s}}}"
    },
    {
        "d": "cults3d.com",
        "b": "cults3d",
        "u": "https://cults3d.com/fr/recherche?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.curseforge.com",
        "b": "curse",
        "u": "https://www.curseforge.com/wow/addons/search?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "curseforge",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Acurseforge.com"
    },
    {
        "d": "stats.stackexchange.com",
        "b": "cv",
        "u": "https://stats.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "cve.mitre.org",
        "b": "cve",
        "u": "https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword={{{s}}}"
    },
    {
        "d": "cvedetails.com",
        "b": "cved",
        "u": "http://cvedetails.com/cve-details.php?t=1&cve_id={{{s}}}"
    },
    {
        "d": "www.cvedetails.com",
        "b": "cvedtls",
        "u": "https://www.cvedetails.com/google-search-results.php?q={{{s}}}&sa=Search"
    },
    {
        "d": "www.codewars.com",
        "b": "cw",
        "u": "https://www.codewars.com/kata/search/?q={{{s}}}"
    },
    {
        "d": "chrome.google.com",
        "b": "cwebstore",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "cwe",
        "u": "https://cse.google.com/cse?oe=utf8&ie=utf8&source=uds&q={{{s}}}&start=0&cx=012899561505164599335:tb0er0xsk_o"
    },
    {
        "d": "chrome.google.com",
        "b": "cws",
        "u": "https://chrome.google.com/webstore/search/{{{s}}}"
    },
    {
        "d": "www.cplusplus.com",
        "b": "cxx",
        "u": "http://www.cplusplus.com/search.do?q={{{s}}}"
    },
    {
        "d": "cygwin.com",
        "b": "cyg64",
        "u": "https://cygwin.com/cgi-bin2/package-grep.cgi?grep={{{s}}}&arch=x86_64"
    },
    {
        "d": "cygwin.com",
        "b": "cygwin",
        "u": "http://cygwin.com/cgi-bin2/package-grep.cgi?grep={{{s}}}"
    },
    {
        "d": "pkginfo.devuan.org",
        "b": "d1pkg",
        "u": "https://pkginfo.devuan.org/cgi-bin/d1pkgweb-query?search={{{s}}}&release=any"
    },
    {
        "d": "www.drive2.ru",
        "b": "d2r",
        "u": "https://www.drive2.ru/search?text={{{s}}}"
    },
    {
        "d": "datasheet4u.com",
        "b": "d4u",
        "u": "http://datasheet4u.com/share_search.php?sWord={{{s}}}"
    },
    {
        "d": "danielha.tk",
        "b": "danielha",
        "u": "https://danielha.tk/search.html?query={{{s}}}"
    },
    {
        "d": "www.daniweb.com",
        "b": "daniweb",
        "u": "https://www.daniweb.com/search/index?q={{{s}}}"
    },
    {
        "d": "www.dansverine.com",
        "b": "dansverine",
        "u": "https://www.dansverine.com/search?q={{{s}}}"
    },
    {
        "d": "api.drupal.org",
        "b": "dapi",
        "u": "https://api.drupal.org/api/drupal/latest/search/{{{s}}}"
    },
    {
        "d": "www.dartlang.org",
        "b": "dart",
        "u": "http://www.dartlang.org/search.html?q={{{s}}}"
    },
    {
        "d": "pub.dartlang.org",
        "b": "dartpub",
        "u": "https://pub.dartlang.org/packages?q={{{s}}}"
    },
    {
        "d": "www.data-blogger.com",
        "b": "datablogger",
        "u": "https://www.data-blogger.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.datasheetarchive.com",
        "b": "datasheetarchive",
        "u": "http://www.datasheetarchive.com/{{{s}}}-datasheet.html"
    },
    {
        "d": "www.datev.de",
        "b": "datev",
        "u": "https://www.datev.de/web/de/suche/?query={{{s}}}"
    },
    {
        "d": "www.ibm.com",
        "b": "db2z",
        "u": "https://www.ibm.com/support/knowledgecenter/search/{{{s}}}?scope=SSEPEK_11.0.0"
    },
    {
        "d": "dba.stackexchange.com",
        "b": "dbasx",
        "u": "http://dba.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "dev.bukkit.org",
        "b": "dbo",
        "u": "https://dev.bukkit.org/search?search={{{s}}}"
    },
    {
        "d": "bugs.debian.org",
        "b": "dbts",
        "u": "https://bugs.debian.org/{{{s}}}"
    },
    {
        "d": "bugs.debian.org",
        "b": "dbugs",
        "u": "http://bugs.debian.org/{{{s}}}"
    },
    {
        "d": "devdocs.io",
        "b": "dd",
        "u": "https://devdocs.io/#q={{{s}}}"
    },
    {
        "d": "qa.debian.org",
        "b": "ddev",
        "u": "https://qa.debian.org/developer.php?login={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddf",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aforums.dansdeals.com"
    },
    {
        "d": "ddh1.duckduckgo.com",
        "b": "ddh1",
        "u": "http://ddh1.duckduckgo.com/?q={{{s}}}"
    },
    {
        "d": "duck.co",
        "b": "ddh",
        "u": "https://duck.co/ia?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddms",
        "u": "https://duckduckgo.com/?q= {{{s}}}+site%3Adansdeals.com"
    },
    {
        "d": "duckduckgo.com",
        "b": "ddso",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:stackoverflow.com"
    },
    {
        "d": "duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion",
        "b": "ddt",
        "u": "https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/?q={{{s}}}"
    },
    {
        "d": "www.dd-wrt.com",
        "b": "ddwrt",
        "u": "http://www.dd-wrt.com/wiki/index.php/Special:Search?search={{{s}}}"
    },
    {
        "d": "bugs.debian.org",
        "b": "debbug",
        "u": "http://bugs.debian.org/{{{s}}}"
    },
    {
        "d": "buildd.debian.org",
        "b": "debbuildd",
        "u": "http://buildd.debian.org/status/package.php?p={{{s}}}"
    },
    {
        "d": "packages.debian.org",
        "b": "debcontent",
        "u": "https://packages.debian.org/search?searchon=contents&keywords={{{s}}}&mode=path&suite=unstable&arch=any"
    },
    {
        "d": "packages.debian.org",
        "b": "debfiles",
        "u": "https://packages.debian.org/search?searchon=contents&keywords={{{s}}}"
    },
    {
        "d": "search.debian.org",
        "b": "debian",
        "u": "http://search.debian.org/cgi-bin/omega?DB=en&P={{{s}}}"
    },
    {
        "d": "forums.debian.net",
        "b": "debianforums",
        "u": "http://forums.debian.net/search.php?keywords={{{s}}}"
    },
    {
        "d": "forum.debianizzati.org",
        "b": "debianizzati",
        "u": "http://forum.debianizzati.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "packages.debian.org",
        "b": "debianpack",
        "u": "https://packages.debian.org/search?keywords={{{s}}}"
    },
    {
        "d": "dyn.manpages.debian.org",
        "b": "debman",
        "u": "https://dyn.manpages.debian.org/jump?q={{{s}}}"
    },
    {
        "d": "lists.debian.org",
        "b": "debmla",
        "u": "http://lists.debian.org/debian-{{{s}}}/"
    },
    {
        "d": "lists.debian.org",
        "b": "debml",
        "u": "http://lists.debian.org/cgi-bin/search?query={{{s}}}&DEFAULTOP=and&author=&sort=relevance&HITSPERPAGE=10&language=en"
    },
    {
        "d": "packages.debian.org",
        "b": "debpackages",
        "u": "https://packages.debian.org/search?keywords={{{s}}}"
    },
    {
        "d": "qa.debian.org",
        "b": "debpc",
        "u": "https://qa.debian.org/popcon.php?package={{{s}}}"
    },
    {
        "d": "snapshot.debian.org",
        "b": "debsnap",
        "u": "http://snapshot.debian.org/binary/{{{s}}}/"
    },
    {
        "d": "tracker.debian.org",
        "b": "debtracker",
        "u": "https://tracker.debian.org/search?package_name={{{s}}}"
    },
    {
        "d": "wiki.debian.org",
        "b": "debwiki",
        "u": "http://wiki.debian.org/FrontPage?action=fullsearch&context=180&value={{{s}}}&titlesearch=Titles"
    },
    {
        "d": "urldecode.org",
        "b": "decode",
        "u": "https://urldecode.org/?text={{{s}}}&mode=decode"
    },
    {
        "d": "defkey.com",
        "b": "defkey",
        "u": "https://defkey.com/search?irq={{{s}}}"
    },
    {
        "d": "dlc.lib.de.us",
        "b": "delib",
        "u": "http://dlc.lib.de.us/client/default/search/results?qu={{{s}}}&te="
    },
    {
        "d": "search.dell.com",
        "b": "dell",
        "u": "http://search.dell.com/results.aspx?s=gen&c=us&l=en&cs=&k={{{s}}}&cat=all"
    },
    {
        "d": "www.dell.com",
        "b": "dellsp",
        "u": "https://www.dell.com/support/search/us/en/19#q={{{s}}}&sort=relevancy&f:langFacet=[en]"
    },
    {
        "d": "www.dell.com",
        "b": "dellst",
        "u": "http://www.dell.com/support/home/us/en/19/product-support/servicetag/{{{s}}}"
    },
    {
        "d": "search.euro.dell.com",
        "b": "delluk",
        "u": "http://search.euro.dell.com/results.aspx?s=gen&c=uk&l=en&cs=&k={{{s}}}&cat=all&x=0&y=0"
    },
    {
        "d": "www.delphibasics.co.uk",
        "b": "delphi",
        "u": "http://www.delphibasics.co.uk/RTL.asp?Name={{{s}}}"
    },
    {
        "d": "www.deltaco.se",
        "b": "deltaco",
        "u": "https://www.deltaco.se/Sidor/SearchResults.aspx?k={{{s}}}"
    },
    {
        "d": "developer.apple.com",
        "b": "devapple",
        "u": "https://developer.apple.com/search/index.php?q={{{s}}}"
    },
    {
        "d": "devdocs.io",
        "b": "dev",
        "u": "https://devdocs.io/#q={{{s}}}"
    },
    {
        "d": "devdocs.io",
        "b": "devdocs",
        "u": "https://devdocs.io/#q={{{s}}}"
    },
    {
        "d": "www.developpez.com",
        "b": "developpez",
        "u": "http://www.developpez.com/recherche/?q={{{s}}}&sa.x=0&sa.y=0&sa=Go&cx=006424388311999799839:-31tnf0iuqy&cof=FORID:9&ie=ISO-8859-1&siteurl=www.developpez.com/"
    },
    {
        "d": "devhints.io",
        "b": "devhints",
        "u": "https://devhints.io/?q={{{s}}}"
    },
    {
        "d": "dev.opera.com",
        "b": "devo",
        "u": "http://dev.opera.com/search?q={{{s}}}"
    },
    {
        "d": "forum.devontechnologies.com",
        "b": "devonforum",
        "u": "http://forum.devontechnologies.com/search.php?keywords={{{s}}}"
    },
    {
        "d": "devot-ee.com",
        "b": "devotee",
        "u": "http://devot-ee.com/search/results?keywords={{{s}}}&addon_version_support=ee2"
    },
    {
        "d": "devrant.com",
        "b": "devrant",
        "u": "https://devrant.com/search?term={{{s}}}"
    },
    {
        "d": "dev.splunk.com",
        "b": "dev.splunk",
        "u": "http://dev.splunk.com/search/dev?q={{{s}}}"
    },
    {
        "d": "dev.to",
        "b": "dev.to",
        "u": "https://dev.to/search?q={{{s}}}"
    },
    {
        "d": "dev.to",
        "b": "devto",
        "u": "https://dev.to/search?q={{{s}}}"
    },
    {
        "d": "dev.tube",
        "b": "devtube",
        "u": "http://dev.tube?q={{{s}}}"
    },
    {
        "d": "packages.debian.org",
        "b": "dfiles",
        "u": "http://packages.debian.org/search?section=all&arch=any&searchon=contents&keywords={{{s}}} "
    },
    {
        "d": "leaf.dragonflybsd.org",
        "b": "dfman",
        "u": "http://leaf.dragonflybsd.org/cgi/web-man?command={{{s}}}&section=ANY"
    },
    {
        "d": "duckduckgo.com",
        "b": "dgl4",
        "u": "https://duckduckgo.com/?q=site%3Adocs.gl%2Fgl4+{{{s}}}"
    },
    {
        "d": "docs.docker.com",
        "b": "dhdocs",
        "u": "https://docs.docker.com/search/?q={{{s}}}"
    },
    {
        "d": "hub.docker.com",
        "b": "dhub",
        "u": "https://hub.docker.com/search/?q={{{s}}}"
    },
    {
        "d": "www.die.net",
        "b": "die",
        "u": "http://www.die.net/search/?q={{{s}}}&sa=Search&ie=ISO-8859-1&cx=partner-pub-5823754184406795%3A54htp1rtx5u&cof=FORID%3A9"
    },
    {
        "d": "networking.ringofsaturn.com",
        "b": "dig",
        "u": "http://networking.ringofsaturn.com/Tools/dig.php?domain=ANY+{{{s}}}"
    },
    {
        "d": "digiato.com",
        "b": "digiato",
        "u": "http://digiato.com/?q={{{s}}}: "
    },
    {
        "d": "www.digitaltrends.com",
        "b": "digitaltrends",
        "u": "http://www.digitaltrends.com/?s={{{s}}}"
    },
    {
        "d": "meta.discourse.org",
        "b": "discourse",
        "u": "https://meta.discourse.org/search?q={{{s}}}"
    },
    {
        "d": "scratch.mit.edu",
        "b": "discussscratch",
        "u": "http://scratch.mit.edu/search/google_results/?q={{{s}}}&date=anytime&sort_by=datetime_shared"
    },
    {
        "d": "distrowatch.com",
        "b": "distro",
        "u": "http://distrowatch.com/table.php?distribution={{{s}}}"
    },
    {
        "d": "distrowatch.com",
        "b": "distrowatch",
        "u": "http://distrowatch.com/table.php?distribution={{{s}}}"
    },
    {
        "d": "www.elegantthemes.com",
        "b": "divi",
        "u": "https://www.elegantthemes.com/documentation/?s={{{s}}}&submit.x=0&submit.y=0"
    },
    {
        "d": "docs.djangoproject.com",
        "b": "django",
        "u": "http://docs.djangoproject.com/search/?q={{{s}}}"
    },
    {
        "d": "docs.djangoproject.com",
        "b": "dj",
        "u": "https://docs.djangoproject.com/search/?q={{{s}}}"
    },
    {
        "d": "docs.djangoproject.com",
        "b": "djlts",
        "u": "https://docs.djangoproject.com/en/2.2/search/?q={{{s}}}"
    },
    {
        "d": "djangopackages.com",
        "b": "djpackages",
        "u": "http://djangopackages.com/search/?q={{{s}}}"
    },
    {
        "d": "discord.js.org",
        "b": "djs",
        "u": "https://discord.js.org/#/docs/main/stable/search?q={{{s}}}"
    },
    {
        "d": "code.djangoproject.com",
        "b": "djticket",
        "u": "https://code.djangoproject.com/ticket/{{{s}}}"
    },
    {
        "d": "www.djtechtools.com",
        "b": "djtt",
        "u": "http://www.djtechtools.com/?s={{{s}}}"
    },
    {
        "d": "store.docker.com",
        "b": "dk",
        "u": "https://store.docker.com/search?q={{{s}}}"
    },
    {
        "d": "store.docker.com",
        "b": "dkstore",
        "u": "https://store.docker.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dlang",
        "u": "https://duckduckgo.com/?q=site%3Adlang.org+{{{s}}}"
    },
    {
        "d": "blog.desdelinux.net",
        "b": "dl",
        "u": "http://blog.desdelinux.net/?s={{{s}}}"
    },
    {
        "d": "www.dll-files.com",
        "b": "dll",
        "u": "http://www.dll-files.com/search.php?q={{{s}}}"
    },
    {
        "d": "dmaciasblog.com",
        "b": "dmaciasblog",
        "u": "http://dmaciasblog.com/?s={{{s}}}"
    },
    {
        "d": "dyn.manpages.debian.org",
        "b": "dman",
        "u": "https://dyn.manpages.debian.org/jump?q={{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "dmarc",
        "u": "https://mxtoolbox.com/SuperTool.aspx?action=dmarc%3a{{{s}}}&run=networktools"
    },
    {
        "d": "www.digitalinmarket.com",
        "b": "dmg",
        "u": "https://www.digitalinmarket.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dmo",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Adeb-multimedia.org%2Fpool%2F"
    },
    {
        "d": "learn.microsoft.com",
        "b": "dnab",
        "u": "https://learn.microsoft.com/en-us/dotnet/api/?term={{{s}}}"
    },
    {
        "d": "www.designernews.co",
        "b": "dnews",
        "u": "https://www.designernews.co/search#stq={{{s}}}&stp=1"
    },
    {
        "d": "dnf.readthedocs.io",
        "b": "dnf",
        "u": "https://dnf.readthedocs.io/en/latest/search.html?q={{{s}}}"
    },
    {
        "d": "docbook.org",
        "b": "docbook5",
        "u": "http://docbook.org/search/?cx=008085259838719972531%3Atqmky0g0tbo&q={{{s}}}&sa=DocBook+Search&cof=FORID%3A9&siteurl=docbook.org%2F&ref=&ss=551j84183j5"
    },
    {
        "d": "store.docker.com",
        "b": "docker",
        "u": "https://store.docker.com/search?q={{{s}}}"
    },
    {
        "d": "hub.docker.com",
        "b": "dockerhub",
        "u": "https://hub.docker.com/search/?isAutomated=0&isOfficial=0&page=1&pullCount=0&q={{{s}}}&starCount=0"
    },
    {
        "d": "docksal.readthedocs.io",
        "b": "docksal",
        "u": "https://docksal.readthedocs.io/en/master/search.html?q={{{s}}}"
    },
    {
        "d": "docs.rs",
        "b": "docsrs",
        "u": "https://docs.rs/releases/search?query={{{s}}}"
    },
    {
        "d": "docs.rs",
        "b": "docs.rs",
        "u": "https://docs.rs/releases/search?query={{{s}}}"
    },
    {
        "d": "docs.splunk.com",
        "b": "docs.splunk",
        "u": "https://docs.splunk.com/Special:SplunkSearch/docs?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "docubufr",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Adoc.ubuntu-fr.org"
    },
    {
        "d": "help.ubuntu.com",
        "b": "docubu",
        "u": "https://help.ubuntu.com/search.html?cof=FORID%3A9&cx=004599128559784038176%3Avj_p0xo-nng&ie=UTF-8&q={{{s}}}&sa=Search"
    },
    {
        "d": "www.digitalocean.com",
        "b": "do",
        "u": "https://www.digitalocean.com/community/search?q={{{s}}}"
    },
    {
        "d": "www.doityourself.com",
        "b": "doit",
        "u": "https://www.doityourself.com/search?dsp=how-to&psearch={{{s}}}"
    },
    {
        "d": "centralops.net",
        "b": "domaindossier",
        "u": "http://centralops.net/co/DomainDossier.aspx?addr={{{s}}}&dom_whois=true&dom_dns=true&traceroute=true&net_whois=true&svc_scan=true"
    },
    {
        "d": "www.namecheap.com",
        "b": "domain",
        "u": "http://www.namecheap.com/domains/domain-name-search/results.aspx?domain={{{s}}}"
    },
    {
        "d": "domainr.com",
        "b": "domainr",
        "u": "https://domainr.com/?q={{{s}}}"
    },
    {
        "d": "domize.com",
        "b": "domize.com",
        "u": "https://domize.com/?q={{{s}}}"
    },
    {
        "d": "developer.mozilla.org",
        "b": "dom",
        "u": "https://developer.mozilla.org/en-US/search?topic=api&q={{{s}}}"
    },
    {
        "d": "www.digitalocean.com",
        "b": "dot",
        "u": "https://www.digitalocean.com/community/tutorials?q={{{s}}}"
    },
    {
        "d": "learn.microsoft.com",
        "b": "dotnetapi",
        "u": "https://learn.microsoft.com/en-us/dotnet/api/?term={{{s}}}"
    },
    {
        "d": "learn.microsoft.com",
        "b": "dotnet",
        "u": "https://learn.microsoft.com/en-us/search/?terms={{{s}}}&products=%2Fdevrel%2F7696cda6-0510-47f6-8302-71bb5d2e28cf"
    },
    {
        "d": "my.dot.tk",
        "b": "dottk",
        "u": "http://my.dot.tk/registration/register?domainname={{{s}}}"
    },
    {
        "d": "www.doubtbox.online",
        "b": "doubtbox",
        "u": "https://www.doubtbox.online/search/?q={{{s}}}"
    },
    {
        "d": "dougscripts.com",
        "b": "dougscripts",
        "u": "http://dougscripts.com/itunes/itinfo/searchform.php?my_srch_term={{{s}}}"
    },
    {
        "d": "download.cnet.com",
        "b": "downloadcnet",
        "u": "http://download.cnet.com/1770-20_4-0.html?query={{{s}}}&platformSelect=&tag=srch&searchtype=downloads&filterName=platform%3DWindows%2CMobile%2CMac%2CWebware&filter=platform%3DWindows%2CMobile%2CMac%2CWebware"
    },
    {
        "d": "download.cnet.com",
        "b": "download",
        "u": "http://download.cnet.com/1770-20_4-0.html?searchtype=downloads&query={{{s}}}&tg=dl-20&search.x=0&search.y=0&search=+Go%252521"
    },
    {
        "d": "www.amdocs.com",
        "b": "dox",
        "u": "https://www.amdocs.com/search?search={{{s}}}"
    },
    {
        "d": "packages.debian.org",
        "b": "dpackages",
        "u": "http://packages.debian.org/search?keywords={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "dpcs",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:doc.pcsoft.fr&ia=web"
    },
    {
        "d": "packages.debian.org",
        "b": "dpkg",
        "u": "http://packages.debian.org/search?keywords={{{s}}}"
    },
    {
        "d": "dpldocs.info",
        "b": "dpldocs",
        "u": "https://dpldocs.info/locate?q={{{s}}}"
    },
    {
        "d": "anonscm.debian.org",
        "b": "dpmt",
        "u": "https://anonscm.debian.org/git/python-modules/packages/{{{s}}}.git"
    },
    {
        "d": "www.debian.org",
        "b": "dpolicy",
        "u": "https://www.debian.org/doc/debian-policy {{{s}}}"
    },
    {
        "d": "tracker.debian.org",
        "b": "dpts",
        "u": "https://tracker.debian.org/pkg/{{{s}}}"
    },
    {
        "d": "pub.dartlang.org",
        "b": "dpub",
        "u": "http://pub.dartlang.org/search?q={{{s}}}"
    },
    {
        "d": "leaf.dragonflybsd.org",
        "b": "dragonflyman",
        "u": "https://leaf.dragonflybsd.org/cgi/web-man?command={{{s}}}"
    },
    {
        "d": "www.dreamincode.net",
        "b": "dreamincode",
        "u": "http://www.dreamincode.net/forums/index.php?app=core&module=search&section=search&do=quick_search&search_app=core&fromsearch=1&search_term={{{s}}}&search_app=forums"
    },
    {
        "d": "community.dremio.com",
        "b": "dremio",
        "u": "https://community.dremio.com/search?q={{{s}}}"
    },
    {
        "d": "www.django-rest-framework.org",
        "b": "drf",
        "u": "http://www.django-rest-framework.org/?q={{{s}}}"
    },
    {
        "d": "dribbble.com",
        "b": "dribbble",
        "u": "http://dribbble.com/search?q={{{s}}}"
    },
    {
        "d": "dribbble.com",
        "b": "dribble",
        "u": "http://dribbble.com/search?q={{{s}}}"
    },
    {
        "d": "www.drillsource.com",
        "b": "drill",
        "u": "http://www.drillsource.com/?s={{{s}}}"
    },
    {
        "d": "docs.rs",
        "b": "drs",
        "u": "https://docs.rs/{{{s}}}"
    },
    {
        "d": "api.drupal.org",
        "b": "drupalapi",
        "u": "https://api.drupal.org/api/drupal/includes%21common.inc/function/{{{s}}}/7.x"
    },
    {
        "d": "cgit.drupalcode.org",
        "b": "drupalcode",
        "u": "https://cgit.drupalcode.org/{{{s}}}"
    },
    {
        "d": "drupal.org",
        "b": "drupal",
        "u": "http://drupal.org/search/apachesolr_search/{{{s}}}"
    },
    {
        "d": "www.drupal.org",
        "b": "drupmod",
        "u": "https://www.drupal.org/project/project_module/token?f%5B0%5D=&f%5B1%5D=&f%5B2%5D=&f%5B3%5D=&f%5B4%5D=sm_field_project_type%3Afull&f%5B5%5D=&f%5B6%5D=&text={{{s}}}&solrsort=iss_project_release_usage+desc&op=Search"
    },
    {
        "d": "drupal.org",
        "b": "drupp",
        "u": "http://drupal.org/project/{{{s}}}"
    },
    {
        "d": "snapshot.debian.org",
        "b": "dsbin",
        "u": "http://snapshot.debian.org/binary/?bin={{{s}}}"
    },
    {
        "d": "screenshots.debian.net",
        "b": "dsc",
        "u": "https://screenshots.debian.net/packages?utf8=✓&search={{{s}}}"
    },
    {
        "d": "codesearch.debian.net",
        "b": "dsource",
        "u": "https://codesearch.debian.net/search?q={{{s}}}"
    },
    {
        "d": "snapshot.debian.org",
        "b": "dssrc",
        "u": "http://snapshot.debian.org/package/?src={{{s}}}"
    },
    {
        "d": "security-tracker.debian.org",
        "b": "dst",
        "u": "https://security-tracker.debian.org/tracker/{{{s}}}"
    },
    {
        "d": "debtags.debian.net",
        "b": "dtag",
        "u": "http://debtags.debian.net/search/?q={{{s}}}"
    },
    {
        "d": "deskthority.net",
        "b": "dthority",
        "u": "http://deskthority.net/w/index.php?search={{{s}}}"
    },
    {
        "d": "tracker.debian.org",
        "b": "dtr",
        "u": "https://tracker.debian.org/pkg/{{{s}}}"
    },
    {
        "d": "code.dlang.org",
        "b": "dub",
        "u": "http://code.dlang.org/search?q={{{s}}}"
    },
    {
        "d": "help.appducx.com",
        "b": "ducx",
        "u": "http://help.appducx.com/index.php?topic=doc/Search-Result/index_en.htm&q={{{s}}}"
    },
    {
        "d": "duet3d.dozuki.com",
        "b": "duet",
        "u": "https://duet3d.dozuki.com/Search?query={{{s}}}"
    },
    {
        "d": "www.dummies.com",
        "b": "dummi",
        "u": "http://www.dummies.com/search.html?query={{{s}}}"
    },
    {
        "d": "www.developpez.com",
        "b": "dvlp",
        "u": "http://www.developpez.com/recherche/?q={{{s}}}&sa.x=-1376&sa.y=-2&cx=006424388311999799839%3A-31tnf0iuqy&cof=FORID%3A9&ie=ISO-8859-1&siteurl=www.developpez.com%2F%3Fq%3Dmicrosoft&ref=&ss=1463j290467j10"
    },
    {
        "d": "www.developpez.com",
        "b": "dvp",
        "u": "http://www.developpez.com/recherche/?cx=006424388311999799839%3A-31tnf0iuqy&cof=FORID%3A9&ie=ISO-8859-1&q={{{s}}}&sa=Rechercher"
    },
    {
        "d": "www.dxomark.com",
        "b": "dxo",
        "u": "http://www.dxomark.com/content/search/?SearchText={{{s}}} "
    },
    {
        "d": "dxr.mozilla.org",
        "b": "dxr",
        "u": "https://dxr.mozilla.org/mozilla-central/search?q={{{s}}}"
    },
    {
        "d": "easy-bi.org",
        "b": "easybi",
        "u": "http://easy-bi.org/blog/?s={{{s}}}"
    },
    {
        "d": "wiki.eclipse.org",
        "b": "eclipsewiki",
        "u": "https://wiki.eclipse.org/index.php?search={{{s}}}&fulltext=search"
    },
    {
        "d": "www.ecolab.com",
        "b": "ecolab",
        "u": "http://www.ecolab.com/search/#q={{{s}}}&sort=relevancy"
    },
    {
        "d": "ecomes.org",
        "b": "ecomes",
        "u": "https://ecomes.org/?s={{{s}}}"
    },
    {
        "d": "www.exploit-db.com",
        "b": "edbc",
        "u": "https://www.exploit-db.com/search/?action=search&text={{{s}}}"
    },
    {
        "d": "docs.expressionengine.com",
        "b": "eecms",
        "u": "https://docs.expressionengine.com/search/latest/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ee",
        "u": "https://duckduckgo.com/?q=site%3Ahttp%3A%2F%2Fellislab.com%2Fforums%2F+{{{s}}}"
    },
    {
        "d": "extensions.gnome.org",
        "b": "ego",
        "u": "https://extensions.gnome.org/#search={{{s}}}"
    },
    {
        "d": "www.engadget.com",
        "b": "egt",
        "u": "http://www.engadget.com/search/?q={{{s}}}"
    },
    {
        "d": "www.ehow.com",
        "b": "ehow",
        "u": "http://www.ehow.com/search.html?s={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "eips",
        "u": "https://github.com/ethereum/EIPs/issues?utf8=✓&q={{{s}}}"
    },
    {
        "d": "www.elektronik-kompendium.de",
        "b": "ek",
        "u": "http://www.elektronik-kompendium.de/service/suchen/index.htm?domains=www.elektronik-kompendium.de&sitesearch=www.elektronik-kompendium.de&q={{{s}}}&sa=Suchen&client=pub-7453653573550802&forid=1&channel=3122011476&ie=ISO-8859-1&oe=ISO-8859-1&flav=0000&sig=XvZoofyEi29r3eL9&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23FFFFFF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3A336699%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BFORID%3A11&hl=de"
    },
    {
        "d": "www.elastic.co",
        "b": "elastic",
        "u": "https://www.elastic.co/search?q={{{s}}}&section=Learn%2FDocs%2F"
    },
    {
        "d": "elbauldelprogramador.com",
        "b": "elbaul",
        "u": "http://elbauldelprogramador.com/?s={{{s}}}"
    },
    {
        "d": "electron.atom.io",
        "b": "electron",
        "u": "https://electron.atom.io/apps/?q={{{s}}}"
    },
    {
        "d": "electronjs.org",
        "b": "ele",
        "u": "https://electronjs.org/search?q={{{s}}}"
    },
    {
        "d": "eleven.rijitsu.com",
        "b": "elevenr",
        "u": "https://eleven.rijitsu.com/?s={{{s}}}"
    },
    {
        "d": "elinux.org",
        "b": "elinux",
        "u": "http://elinux.org/index.php?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "elixir-docs",
        "u": "https://duckduckgo.com/?q=site%3Aelixir-lang.org%2Fdocs+{{{s}}}"
    },
    {
        "d": "hexdocs.pm",
        "b": "elixir",
        "u": "https://hexdocs.pm/elixir/search.html?q={{{s}}}"
    },
    {
        "d": "elixirforum.com",
        "b": "elixirforum",
        "u": "https://elixirforum.com/search?q={{{s}}}"
    },
    {
        "d": "klaftertief.github.io",
        "b": "elm",
        "u": "http://klaftertief.github.io/elm-search/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "emacswiki",
        "u": "https://duckduckgo.com/?q=site:emacswiki.org+{{{s}}}"
    },
    {
        "d": "emaculation.com",
        "b": "emacu",
        "u": "https://emaculation.com/doku.php/mac_emulation?do=search&id=mac_emulation&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ember",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Ahttps%3A%2F%2Fapi.emberjs.com"
    },
    {
        "d": "packages.gentoo.org",
        "b": "emerge",
        "u": "https://packages.gentoo.org/packages/search?q={{{s}}}"
    },
    {
        "d": "www.endole.co.uk",
        "b": "endole",
        "u": "http://www.endole.co.uk/search/?search={{{s}}}"
    },
    {
        "d": "www.engadget.com",
        "b": "engadget",
        "u": "https://www.engadget.com/search/?search-terms={{{s}}}"
    },
    {
        "d": "es.engadget.com",
        "b": "enges",
        "u": "http://es.engadget.com/search/?q={{{s}}}"
    },
    {
        "d": "www.eng-tips.com",
        "b": "engtips",
        "u": "http://www.eng-tips.com/search.cfm?q={{{s}}}&action=search"
    },
    {
        "d": "galaxy.epic.com",
        "b": "epicg",
        "u": "https://galaxy.epic.com/?#Search/version=8200&searchWord={{{s}}}&lastUpdate="
    },
    {
        "d": "packages.sabayon.org",
        "b": "equo",
        "u": "https://packages.sabayon.org/quicksearch?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "erlang",
        "u": "https://duckduckgo.com/?q=site%3Aerlang.org+{{{s}}}"
    },
    {
        "d": "erlang.org",
        "b": "erl",
        "u": "http://erlang.org/doc/search/?q={{{s}}}"
    },
    {
        "d": "erlang.org",
        "b": "erlm",
        "u": "http://erlang.org/doc/man/{{{s}}}.html"
    },
    {
        "d": "doc.esdoc.org",
        "b": "esdoc",
        "u": "https://doc.esdoc.org/-/search.html?keyword={{{s}}}"
    },
    {
        "d": "support.eset.com",
        "b": "eset",
        "u": "http://support.eset.com/search/?search={{{s}}}"
    },
    {
        "d": "explainshell.com",
        "b": "esh",
        "u": "http://explainshell.com/explain?cmd={{{s}}}"
    },
    {
        "d": "eslint.org",
        "b": "eslint",
        "u": "http://eslint.org/docs/rules/{{{s}}}"
    },
    {
        "d": "esolangs.org",
        "b": "eso",
        "u": "http://esolangs.org/w/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "esolangs.org",
        "b": "esolang",
        "u": "http://esolangs.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "emacs.stackexchange.com",
        "b": "est",
        "u": "http://emacs.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "etherscan.io",
        "b": "etherscan",
        "u": "https://etherscan.io/search?q={{{s}}}"
    },
    {
        "d": "eventid.net",
        "b": "eventid",
        "u": "http://eventid.net/display.asp?eventid={{{s}}}&source="
    },
    {
        "d": "www.exalead.com",
        "b": "exalead",
        "u": "http://www.exalead.com/search/web/results/?q={{{s}}}"
    },
    {
        "d": "www.experts-exchange.com",
        "b": "exex",
        "u": "http://www.experts-exchange.com/searchResults.jsp?searchTerms={{{s}}}&searchType=10"
    },
    {
        "d": "www.expireddomains.net",
        "b": "expired",
        "u": "https://www.expireddomains.net/domain-name-search/?searchinit=1&q={{{s}}} "
    },
    {
        "d": "explainshell.com",
        "b": "explainshell",
        "u": "http://explainshell.com/explain?cmd={{{s}}}"
    },
    {
        "d": "www.exploit-db.com",
        "b": "exploitdb",
        "u": "https://www.exploit-db.com/search?q={{{s}}}"
    },
    {
        "d": "docs.expo.io",
        "b": "expo",
        "u": "https://docs.expo.io/versions/latest/sdk/{{{s}}}"
    },
    {
        "d": "filext.com",
        "b": "ext",
        "u": "http://filext.com/file-extension/{{{s}}}"
    },
    {
        "d": "docops.ca.com",
        "b": "ezt",
        "u": "https://docops.ca.com/ca-easytrieve/11-6/en/search?q={{{s}}}&max=10&key=CAET116"
    },
    {
        "d": "www.fabienm.eu",
        "b": "fabienm",
        "u": "http://www.fabienm.eu/wordpress/?s={{{s}}}"
    },
    {
        "d": "addons.mozilla.org",
        "b": "fad",
        "u": "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}"
    },
    {
        "d": "fontawesome.com",
        "b": "faicon",
        "u": "https://fontawesome.com/icons?d=gallery&q={{{s}}}"
    },
    {
        "d": "www.qth.fr",
        "b": "fanch",
        "u": "http://www.qth.fr/?s={{{s}}}"
    },
    {
        "d": "uk.farnell.com",
        "b": "farnell",
        "u": "http://uk.farnell.com/webapp/wcs/stores/servlet/Search?&st={{{s}}}"
    },
    {
        "d": "forums.fast.ai",
        "b": "fastai",
        "u": "https://forums.fast.ai/search?q={{{s}}}"
    },
    {
        "d": "bugs.freebsd.org",
        "b": "fbugs",
        "u": "https://bugs.freebsd.org/bugzilla/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "www.freecodecamp.org",
        "b": "fccf",
        "u": "https://www.freecodecamp.org/forum/search?q= {{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "fc",
        "u": "https://duckduckgo.com/?q=site%3A+freecadweb.org+{{{s}}}"
    },
    {
        "d": "blog.freshdesk.com",
        "b": "fdblog",
        "u": "https://blog.freshdesk.com/?s={{{s}}}"
    },
    {
        "d": "support.freshdesk.com",
        "b": "fdf",
        "u": "https://support.freshdesk.com/support/search/topics?term={{{s}}}"
    },
    {
        "d": "bugs.freedesktop.org",
        "b": "fdobugs",
        "u": "https://bugs.freedesktop.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "fdo",
        "u": "https://www.google.com/search?sitesearch=http%3A%2F%2Fwww.freedesktop.org%2Fwiki%2F&q={{{s}}}&gws_rd=ssl"
    },
    {
        "d": "search.f-droid.org",
        "b": "fdroid",
        "u": "https://search.f-droid.org/?q={{{s}}} "
    },
    {
        "d": "support.freshdesk.com",
        "b": "fds",
        "u": "https://support.freshdesk.com/support/search/solutions?term={{{s}}}"
    },
    {
        "d": "koji.fedoraproject.org",
        "b": "fedkojip",
        "u": "https://koji.fedoraproject.org/koji/search?match=glob&type=package&terms={{{s}}}"
    },
    {
        "d": "linuxmanpages.net",
        "b": "fedman",
        "u": "http://linuxmanpages.net/search.py?q={{{s}}}"
    },
    {
        "d": "fedoraproject.org",
        "b": "fedora",
        "u": "https://fedoraproject.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "fedoramagazine.org",
        "b": "fedoramagazine",
        "u": "https://fedoramagazine.org/?s={{{s}}}"
    },
    {
        "d": "apps.fedoraproject.org",
        "b": "fedorapkg",
        "u": "https://apps.fedoraproject.org/packages/s/{{{s}}}"
    },
    {
        "d": "fedoraproject.org",
        "b": "fedorawiki",
        "u": "https://fedoraproject.org/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "apps.fedoraproject.org",
        "b": "fedpack",
        "u": "https://apps.fedoraproject.org/packages/s/{{{s}}}"
    },
    {
        "d": "addons.mozilla.org",
        "b": "ffa",
        "u": "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "fgentoo",
        "u": "https://duckduckgo.com/?q=site%3Aforums.gentoo.org+{{{s}}}"
    },
    {
        "d": "wiki.fhem.de",
        "b": "fhem",
        "u": "https://wiki.fhem.de/w/index.php?search={{{s}}}"
    },
    {
        "d": "filehippo.com",
        "b": "fh",
        "u": "http://filehippo.com/search?q={{{s}}}"
    },
    {
        "d": "www.fosshub.com",
        "b": "fhub",
        "u": "https://www.fosshub.com/search/{{{s}}}"
    },
    {
        "d": "www.fido.ca",
        "b": "fido",
        "u": "http://www.fido.ca/consumer/search?q={{{s}}}"
    },
    {
        "d": "www.filefacts.net",
        "b": "filefacts",
        "u": "http://www.filefacts.net/search.php?ext={{{s}}}"
    },
    {
        "d": "filehippo.com",
        "b": "file",
        "u": "http://filehippo.com/search?q={{{s}}}"
    },
    {
        "d": "filehippo.com",
        "b": "filehippo",
        "u": "http://filehippo.com/search?q={{{s}}}"
    },
    {
        "d": "fileinfo.com",
        "b": "fileinfo",
        "u": "http://fileinfo.com/extension/{{{s}}}"
    },
    {
        "d": "www.findchips.com",
        "b": "findchips",
        "u": "http://www.findchips.com/avail?part={{{s}}}"
    },
    {
        "d": "pdb.finkproject.org",
        "b": "fink",
        "u": "http://pdb.finkproject.org/pdb/browse.php?summary={{{s}}}"
    },
    {
        "d": "addons.mozilla.org",
        "b": "firefoxaddons",
        "u": "http://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}"
    },
    {
        "d": "addons.mozilla.org",
        "b": "firefox",
        "u": "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}&cat=all"
    },
    {
        "d": "www.fischertechnik.de",
        "b": "fischertechnik",
        "u": "http://www.fischertechnik.de/desktopdefault.aspx/tabid-1//tabid-35/searchcall-4/4_keepvisible-true/redirected-1/?/sid-3230669/mid-4/tid-1/ct-0/q-{{{s}}}//k-/et-0/rpp-10/sar-False/t-/p-0/ap-True/cat-/cr-0/pr-0/icp-False/icc-False/ifc-False/sl-1/sp-0/cs-/"
    },
    {
        "d": "fishshell.com",
        "b": "fish",
        "u": "http://fishshell.com/docs/current/commands.html#{{{s}}}"
    },
    {
        "d": "flask.pocoo.org",
        "b": "flask",
        "u": "http://flask.pocoo.org/search/?q={{{s}}}"
    },
    {
        "d": "flathub.org",
        "b": "flathub",
        "u": "https://flathub.org/apps/search/{{{s}}}"
    },
    {
        "d": "flutter.io",
        "b": "flt",
        "u": "https://flutter.io/search/?q={{{s}}}"
    },
    {
        "d": "flutter.io",
        "b": "flutter",
        "u": "https://flutter.io/search/?q={{{s}}}"
    },
    {
        "d": "www.freebsd.org",
        "b": "fman",
        "u": "http://www.freebsd.org/cgi/man.cgi?query={{{s}}}"
    },
    {
        "d": "www.safe.com",
        "b": "fmedoc",
        "u": "https://www.safe.com/search/?site-search={{{s}}}&site=docs.safe.com"
    },
    {
        "d": "knowledge.safe.com",
        "b": "fmekb",
        "u": "https://knowledge.safe.com/search.html?f=&type=question+OR+idea+OR+kbentry&c=&redirect=search%2Fsearch&sort=relevance&q={{{s}}}:"
    },
    {
        "d": "mods.factorio.com",
        "b": "fmod",
        "u": "https://mods.factorio.com/query/{{{s}}}"
    },
    {
        "d": "community.filemaker.com",
        "b": "fmp",
        "u": "https://community.filemaker.com/en/s/global-search/{{{s}}}"
    },
    {
        "d": "fnd.io",
        "b": "fnd",
        "u": "https://fnd.io/#/us/search?mediaType=all&term={{{s}}}"
    },
    {
        "d": "fontawesome.com",
        "b": "fonta",
        "u": "https://fontawesome.com/icons?d=gallery&q={{{s}}}"
    },
    {
        "d": "fontawesome.com",
        "b": "fontawesome",
        "u": "https://fontawesome.com/icons?q={{{s}}}"
    },
    {
        "d": "fontlibrary.org",
        "b": "fontlibrary",
        "u": "https://fontlibrary.org/en/search?query={{{s}}}"
    },
    {
        "d": "www.fontsquirrel.com",
        "b": "fonts",
        "u": "http://www.fontsquirrel.com/fonts/list/find_fonts?q[term]={{{s}}}&q[search_check]=Y"
    },
    {
        "d": "www.fontspace.com",
        "b": "fontspace",
        "u": "http://www.fontspace.com/search/?q={{{s}}}"
    },
    {
        "d": "www.fontsquirrel.com",
        "b": "fontsq",
        "u": "http://www.fontsquirrel.com/fonts/list/find_fonts?q[term]={{{s}}}&q[search_check]=Y"
    },
    {
        "d": "www.fool.com",
        "b": "fool",
        "u": "http://www.fool.com/search/index.aspx?go=1&site=USMF&q={{{s}}}&source=ifltnvsnq0000001&mbbid=BoardID&mbmid=MessageID"
    },
    {
        "d": "www.forosuse.org",
        "b": "forosuse",
        "u": "http://www.forosuse.org/?q={{{s}}}"
    },
    {
        "d": "www.fortinet.com",
        "b": "fortinet",
        "u": "https://www.fortinet.com/search.html?q={{{s}}}"
    },
    {
        "d": "fossdroid.com",
        "b": "fossd",
        "u": "https://fossdroid.com/s/{{{s}}}.html"
    },
    {
        "d": "fossdroid.com",
        "b": "fossdroid",
        "u": "https://fossdroid.com/s.html?q={{{s}}}"
    },
    {
        "d": "www.fosshub.com",
        "b": "fosshub",
        "u": "https://www.fosshub.com/search/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "fowler",
        "u": "https://duckduckgo.com/?q=site%3Amartinfowler.com+{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "fpcs",
        "u": "https://duckduckgo.com/?q=site:forum.pcsoft.fr+{{{s}}}"
    },
    {
        "d": "florida-prep.org",
        "b": "fpe",
        "u": "https://florida-prep.org/search?q={{{s}}}"
    },
    {
        "d": "www.freebsd.org",
        "b": "fports",
        "u": "http://www.freebsd.org/cgi/ports.cgi?query={{{s}}}&stype=all"
    },
    {
        "d": "apps.fedoraproject.org",
        "b": "fps",
        "u": "https://apps.fedoraproject.org/packages/s/{{{s}}}"
    },
    {
        "d": "frack.nl",
        "b": "frack",
        "u": "https://frack.nl/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.freebsd.org",
        "b": "freebsd",
        "u": "https://www.freebsd.org/cgi/ports.cgi?query={{{s}}}"
    },
    {
        "d": "man.freebsd.org",
        "b": "freebsdman",
        "u": "http://man.freebsd.org/{{{s}}}"
    },
    {
        "d": "www.freedommobile.ca",
        "b": "freedom",
        "u": "https://www.freedommobile.ca/support/search/faq-search-results?q={{{s}}}"
    },
    {
        "d": "free.com.tw",
        "b": "freeg",
        "u": "https://free.com.tw/?s={{{s}}}"
    },
    {
        "d": "free.com.tw",
        "b": "freegroup",
        "u": "https://free.com.tw/?s={{{s}}}"
    },
    {
        "d": "www.freelancer.com",
        "b": "freelancer",
        "u": "https://www.freelancer.com/work/{{{s}}}/"
    },
    {
        "d": "freelancinghacks.com",
        "b": "freelancinghacks",
        "u": "http://freelancinghacks.com/?s={{{s}}}"
    },
    {
        "d": "wiki.freepascal.org",
        "b": "freepascal",
        "u": "http://wiki.freepascal.org/index.php?search={{{s}}}"
    },
    {
        "d": "free-theme-download.com",
        "b": "free-theme-download",
        "u": "https://free-theme-download.com/search?term={{{s}}}"
    },
    {
        "d": "www.frequencycheck.com",
        "b": "freqcheck",
        "u": "https://www.frequencycheck.com/search?s={{{s}}}"
    },
    {
        "d": "support.freshdesk.com",
        "b": "freshdesk",
        "u": "https://support.freshdesk.com/support/search?term={{{s}}}"
    },
    {
        "d": "www.freshports.org",
        "b": "freshports",
        "u": "https://www.freshports.org/search.php?query={{{s}}}&search=go&num=10&stype=name&method=match&deleted=excludedeleted&start=1&casesensitivity=caseinsensitive"
    },
    {
        "d": "www.futureboy.us",
        "b": "frink",
        "u": "http://www.futureboy.us/fsp/frink.fsp?fromVal={{{s}}}"
    },
    {
        "d": "www.larousse.fr",
        "b": "fr",
        "u": "http://www.larousse.fr/dictionnaires/francais/{{{s}}}"
    },
    {
        "d": "www.adafruit.com",
        "b": "fruit",
        "u": "http://www.adafruit.com/search?q={{{s}}}&b=1"
    },
    {
        "d": "directory.fsf.org",
        "b": "fsd",
        "u": "http://directory.fsf.org/wiki/{{{s}}}"
    },
    {
        "d": "directory.fsf.org",
        "b": "fsfd",
        "u": "http://directory.fsf.org/wiki?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "www.fsf.org",
        "b": "fsf",
        "u": "http://www.fsf.org/search?SearchableText={{{s}}} "
    },
    {
        "d": "flathub.org",
        "b": "fthub",
        "u": "https://flathub.org/apps/search/{{{s}}}"
    },
    {
        "d": "www.freetutorials.us",
        "b": "ftu",
        "u": "https://www.freetutorials.us/?s={{{s}}}"
    },
    {
        "d": "www.fuget.org",
        "b": "fuget",
        "u": "https://www.fuget.org/packages?q={{{s}}}"
    },
    {
        "d": "www.funtoo.org",
        "b": "funtoo",
        "u": "http://www.funtoo.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.forgottenweapons.com",
        "b": "fw",
        "u": "http://www.forgottenweapons.com/?s={{{s}}}"
    },
    {
        "d": "fortranwiki.org",
        "b": "fwiki",
        "u": "http://fortranwiki.org/fortran/search?query={{{s}}}"
    },
    {
        "d": "frugalware.org",
        "b": "fwpkg",
        "u": "http://frugalware.org/packages?op=pkg&arch=all&ver=current&srch={{{s}}}"
    },
    {
        "d": "www.fayerwayer.com",
        "b": "fwy",
        "u": "https://www.fayerwayer.com/?q={{{s}}}"
    },
    {
        "d": "fxr.watson.org",
        "b": "fxr",
        "u": "http://fxr.watson.org/fxr/ident?i={{{s}}}"
    },
    {
        "d": "gdgts.de",
        "b": "gadgets",
        "u": "http://gdgts.de/?s={{{s}}}"
    },
    {
        "d": "www.gadgetsnow.com",
        "b": "gadgetsnow",
        "u": "https://www.gadgetsnow.com/topic/{{{s}}}?SEARCH_STRING={{{s}}}"
    },
    {
        "d": "galaxy.ansible.com",
        "b": "galaxy",
        "u": "https://galaxy.ansible.com/search?keywords={{{s}}}"
    },
    {
        "d": "www.gamefront.com",
        "b": "gamefront",
        "u": "https://www.gamefront.com/search/files?q={{{s}}}"
    },
    {
        "d": "www.gandi.net",
        "b": "gandi",
        "u": "https://www.gandi.net/domain/suggest?domain_list={{{s}}}"
    },
    {
        "d": "garoa.net.br",
        "b": "garoa",
        "u": "https://garoa.net.br/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.mein-gartenexperte.de",
        "b": "gartenexperte",
        "u": "https://www.mein-gartenexperte.de/suche?keywords={{{s}}}"
    },
    {
        "d": "gbatemp.net",
        "b": "gbat",
        "u": "https://gbatemp.net/search/87708019/?q={{{s}}}"
    },
    {
        "d": "bugs.gentoo.org",
        "b": "gbugs",
        "u": "https://bugs.gentoo.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "cloud.google.com",
        "b": "gcp",
        "u": "https://cloud.google.com/s/results/?q={{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "gcubed",
        "u": "https://cse.google.com/cse/publicurl?cx=007995818864770319293:3weihy1amkc&cof=FORID:1&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "gdb",
        "u": "http://duckduckgo.com/?q=site:sourceware.org/gdb/current/onlinedocs/gdb/+{{{s}}}"
    },
    {
        "d": "docs.godotengine.org",
        "b": "gdd",
        "u": "http://docs.godotengine.org/en/latest/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "gamedev.stackexchange.com",
        "b": "gdev",
        "u": "https://gamedev.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "gdgt.com",
        "b": "gdgt",
        "u": "http://gdgt.com/search/{{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gdiag",
        "u": "https://google.com/safebrowsing/diagnostic?site={{{s}}}"
    },
    {
        "d": "dns.google.com",
        "b": "gdns",
        "u": "https://dns.google.com/query?name={{{s}}}&type=A&dnssec=true"
    },
    {
        "d": "docs.google.com",
        "b": "gdocs",
        "u": "https://docs.google.com/document/u/0/?pli=1&tgif=c&q={{{s}}}"
    },
    {
        "d": "browser.geekbench.com",
        "b": "geekbench",
        "u": "http://browser.geekbench.com/v4/cpu/search?q={{{s}}}"
    },
    {
        "d": "geeksided.com",
        "b": "geeksided",
        "u": "http://geeksided.com/?s={{{s}}}"
    },
    {
        "d": "www.geekunivers.com",
        "b": "geeku",
        "u": "http://www.geekunivers.com/?s={{{s}}} "
    },
    {
        "d": "rubygems.org",
        "b": "gem",
        "u": "https://rubygems.org/search?utf8=%E2%9C%93&query={{{s}}}"
    },
    {
        "d": "rubygems.org",
        "b": "gems",
        "u": "http://rubygems.org/search?query={{{s}}}"
    },
    {
        "d": "www.gemug.ge",
        "b": "gemug",
        "u": "http://www.gemug.ge/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "genma",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Ahttp%3A%2F%2Fgenma.free.fr"
    },
    {
        "d": "wiki.gentoo.org",
        "b": "gentoo",
        "u": "http://wiki.gentoo.org/index.php?search={{{s}}}"
    },
    {
        "d": "packages.gentoo.org",
        "b": "gentoopkg",
        "u": "https://packages.gentoo.org/packages/search?q={{{s}}}"
    },
    {
        "d": "wiki.gentoo.org",
        "b": "gentoowiki",
        "u": "https://wiki.gentoo.org/index.php?search={{{s}}}"
    },
    {
        "d": "geoawesomeness.com",
        "b": "geoawesome",
        "u": "http://geoawesomeness.com/?s={{{s}}}"
    },
    {
        "d": "www.infosniper.net",
        "b": "geoip",
        "u": "http://www.infosniper.net/index.php?ip_address={{{s}}}"
    },
    {
        "d": "geoiptool.com",
        "b": "geoiptool",
        "u": "http://geoiptool.com/fr/?IP={{{s}}}"
    },
    {
        "d": "kartkatalog.geonorge.no",
        "b": "geonorge",
        "u": "https://kartkatalog.geonorge.no/search?text={{{s}}}"
    },
    {
        "d": "www.geeksforgeeks.org",
        "b": "gfg",
        "u": "https://www.geeksforgeeks.org/?q={{{s}}}"
    },
    {
        "d": "www.grafikart.fr",
        "b": "gfk",
        "u": "https://www.grafikart.fr/search?q={{{s}}}"
    },
    {
        "d": "fonts.google.com",
        "b": "gfonts",
        "u": "https://fonts.google.com/?query={{{s}}}"
    },
    {
        "d": "www.geogebra.org",
        "b": "ggb",
        "u": "http://www.geogebra.org/cms/{{{s}}}"
    },
    {
        "d": "gabgagnon.ca",
        "b": "ggca",
        "u": "https://gabgagnon.ca/?s={{{s}}}"
    },
    {
        "d": "globalgamejam.org",
        "b": "ggj",
        "u": "http://globalgamejam.org/?q={{{s}}}"
    },
    {
        "d": "www.ghacks.net",
        "b": "ghacks",
        "u": "https://www.ghacks.net/?s={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "ghc",
        "u": "https://github.com/search?utf8=✓&q={{{s}}}&type=Code"
    },
    {
        "d": "github.com",
        "b": "ghcode",
        "u": "https://github.com/search?utf8=✓&q={{{s}}}&type=Code"
    },
    {
        "d": "github.com",
        "b": "gh",
        "u": "https://github.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ghio",
        "u": "https://duckduckgo.com/?q=site%3Agithub.io+{{{s}}}&ia=web"
    },
    {
        "d": "github.com",
        "b": "ghjs",
        "u": "https://github.com/search?l=JavaScript&o=desc&q={{{s}}}&s=indexed&type=Code"
    },
    {
        "d": "github.com",
        "b": "ghp",
        "u": "https://github.com/search?q=is%3Aprivate+{{{s}}}"
    },
    {
        "d": "github.com",
        "b": "ghrepo",
        "u": "https://github.com/{{{s}}}"
    },
    {
        "d": "github.com",
        "b": "ghr",
        "u": "https://github.com/{{{s}}}"
    },
    {
        "d": "github.com",
        "b": "ght",
        "u": "https://github.com/trending/{{{s}}}"
    },
    {
        "d": "github.com",
        "b": "ghtopic",
        "u": "https://github.com/topic/{{{s}}}"
    },
    {
        "d": "github.com",
        "b": "ghuser",
        "u": "https://github.com/search?type=Users&q={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "ghus",
        "u": "https://github.com/{{{s}}}/"
    },
    {
        "d": "www.gigabyte.com",
        "b": "gigabyte",
        "u": "https://www.gigabyte.com/Search?kw={{{s}}}"
    },
    {
        "d": "gigaom.com",
        "b": "gigaom",
        "u": "http://gigaom.com/?s={{{s}}}"
    },
    {
        "d": "gis.stackexchange.com",
        "b": "gisse",
        "u": "https://gis.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "gist.github.com",
        "b": "gist",
        "u": "https://gist.github.com/search?q={{{s}}}"
    },
    {
        "d": "libgit2.github.com",
        "b": "git2",
        "u": "https://libgit2.github.com/libgit2/#HEAD/search/{{{s}}}"
    },
    {
        "d": "git-scm.com",
        "b": "gitdocs",
        "u": "https://git-scm.com/search/results?search={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "git",
        "u": "https://github.com/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "github",
        "u": "http://github.com/search?q={{{s}}}&type=Everything&repo=&langOverride=&start_value=1"
    },
    {
        "d": "help.github.com",
        "b": "githubhelp",
        "u": "https://help.github.com/search/?q={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "githubstars",
        "u": "https://github.com/stars?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.gitignore.io",
        "b": "gitignore",
        "u": "https://www.gitignore.io/api/{{{s}}}"
    },
    {
        "d": "gitlab.com",
        "b": "gitlab",
        "u": "https://gitlab.com/search?utf8=%E2%9C%93&search={{{s}}}&group_id=&repository_ref="
    },
    {
        "d": "gitote.in",
        "b": "gitote",
        "u": "https://gitote.in/explore/repos?q={{{s}}}"
    },
    {
        "d": "git-scm.com",
        "b": "git-scm",
        "u": "http://git-scm.com/search/results?search={{{s}}}"
    },
    {
        "d": "es.gizmodo.com",
        "b": "gizes",
        "u": "http://es.gizmodo.com/search?q={{{s}}}"
    },
    {
        "d": "gizmodo.com",
        "b": "gizmodo",
        "u": "http://gizmodo.com/search?q={{{s}}}"
    },
    {
        "d": "gitlab.com",
        "b": "glab",
        "u": "https://gitlab.com/search?utf8=✓&search={{{s}}}"
    },
    {
        "d": "glitch.com",
        "b": "glitch",
        "u": "https://glitch.com/search?q={{{s}}}"
    },
    {
        "d": "www.opengl.org",
        "b": "gl",
        "u": "https://www.opengl.org/search/?cx=017055583490642512057%3Ahwpumfa180i&cof=FORID%3A9&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "gls",
        "u": "https://duckduckgo.com/?q=site%3Agolang.org+{{{s}}}"
    },
    {
        "d": "www.khronos.org",
        "b": "glwiki",
        "u": "https://www.khronos.org/opengl/wiki_opengl/index.php?search={{{s}}}"
    },
    {
        "d": "support.google.com",
        "b": "gman",
        "u": "https://support.google.com/search?q={{{s}}}"
    },
    {
        "d": "wiki.garrysmod.com",
        "b": "gmod",
        "u": "http://wiki.garrysmod.com/page/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "geekmps.fr",
        "b": "gmps",
        "u": "http://geekmps.fr/component/search/?searchword={{{s}}} "
    },
    {
        "d": "gitlab.gnome.org",
        "b": "gnomebugs",
        "u": "https://gitlab.gnome.org/groups/GNOME/-/issues?search={{{s}}}"
    },
    {
        "d": "developer.gnome.org",
        "b": "gnomedev",
        "u": "https://developer.gnome.org/symbols/?q={{{s}}}"
    },
    {
        "d": "live.gnome.org",
        "b": "gnome",
        "u": "http://live.gnome.org/Home?action=fullsearch&context=180&value={{{s}}}&titlesearch=Titles"
    },
    {
        "d": "wiki.gnome.org",
        "b": "gnomewiki",
        "u": "https://wiki.gnome.org/Home?action=fullsearch&context=180&value={{{s}}}&titlesearch=Titles"
    },
    {
        "d": "www.generation-nt.com",
        "b": "gnt",
        "u": "http://www.generation-nt.com/s/{{{s}}}/"
    },
    {
        "d": "www.gnu.org",
        "b": "gnu",
        "u": "http://www.gnu.org/cgi-bin/estseek.cgi?phrase={{{s}}}"
    },
    {
        "d": "golang.cafe",
        "b": "gocafe",
        "u": "https://golang.cafe/Golang-{{{s}}}-Jobs"
    },
    {
        "d": "www.godaddy.com",
        "b": "godaddy",
        "u": "https://www.godaddy.com/dpp/find?checkAvail=1%2c1&isc=daytona08&ci=8962&domainToCheck={{{s}}}"
    },
    {
        "d": "godoc.org",
        "b": "godoc",
        "u": "https://godoc.org/?q={{{s}}}"
    },
    {
        "d": "docs.godotengine.org",
        "b": "godot",
        "u": "http://docs.godotengine.org/en/stable/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "godotengine.org",
        "b": "godotqa",
        "u": "https://godotengine.org/qa/search?q={{{s}}}"
    },
    {
        "d": "mail.google.com",
        "b": "go",
        "u": "https://mail.google.com/mail/u/0/#search/{{{s}}}"
    },
    {
        "d": "golang.org",
        "b": "golang",
        "u": "http://golang.org/search?q={{{s}}}"
    },
    {
        "d": "goodfeeds.net",
        "b": "goodfeeds",
        "u": "https://goodfeeds.net/search?q={{{s}}}"
    },
    {
        "d": "golang.org",
        "b": "gopkg",
        "u": "https://golang.org/pkg/{{{s}}}"
    },
    {
        "d": "go-search.org",
        "b": "go-search",
        "u": "http://go-search.org/search?q={{{s}}}"
    },
    {
        "d": "guruofsales.com",
        "b": "gos",
        "u": "http://guruofsales.com/?s={{{s}}}"
    },
    {
        "d": "gathering.tweakers.net",
        "b": "got",
        "u": "http://gathering.tweakers.net/forum/find?keyword={{{s}}}"
    },
    {
        "d": "goto.google.com",
        "b": "goto",
        "u": "https://goto.google.com/{{{s}}}"
    },
    {
        "d": "packages.gentoo.org",
        "b": "gpackages",
        "u": "https://packages.gentoo.org/packages/search?q={{{s}}} "
    },
    {
        "d": "go.pkgdoc.org",
        "b": "gpd",
        "u": "http://go.pkgdoc.org/?q={{{s}}}"
    },
    {
        "d": "play.google.com",
        "b": "gp",
        "u": "https://play.google.com/store/search?q={{{s}}}"
    },
    {
        "d": "help.gamepedia.com",
        "b": "gphelp",
        "u": "https://help.gamepedia.com/index.php?search={{{s}}}"
    },
    {
        "d": "gpio.co.uk",
        "b": "gpio",
        "u": "https://gpio.co.uk/?s={{{s}}}"
    },
    {
        "d": "golang.org",
        "b": "gpk",
        "u": "https://golang.org/pkg/{{{s}}}"
    },
    {
        "d": "gpo.zugaina.org",
        "b": "gpo",
        "u": "http://gpo.zugaina.org/Search?search={{{s}}}"
    },
    {
        "d": "gpsearch.azurewebsites.net",
        "b": "gpsearch",
        "u": "http://gpsearch.azurewebsites.net/default.aspx?search={{{s}}}"
    },
    {
        "d": "grabcad.com",
        "b": "grabcad",
        "u": "http://grabcad.com/library?per_page=20&query={{{s}}} "
    },
    {
        "d": "duckduckgo.com",
        "b": "gradle",
        "u": "http://duckduckgo.com/?q=site%3Agradle.org+{{{s}}}"
    },
    {
        "d": "plugins.gradle.org",
        "b": "gradlep",
        "u": "https://plugins.gradle.org/search?term={{{s}}}"
    },
    {
        "d": "www.grafikart.fr",
        "b": "grafikart",
        "u": "http://www.grafikart.fr/search?q={{{s}}}"
    },
    {
        "d": "learn.getgrav.org",
        "b": "grav",
        "u": "https://learn.getgrav.org/search?q={{{s}}}"
    },
    {
        "d": "marketplace.graylog.org",
        "b": "graylog",
        "u": "https://marketplace.graylog.org/addons?search={{{s}}}"
    },
    {
        "d": "www.grc.com",
        "b": "grcp",
        "u": "https://www.grc.com/port_{{{s}}}.htm"
    },
    {
        "d": "greasyfork.org",
        "b": "greasyfork",
        "u": "https://greasyfork.org/scripts/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "groovy",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:docs.groovy-lang.org"
    },
    {
        "d": "www.grottopress.com",
        "b": "grottopress",
        "u": "https://www.grottopress.com/?s={{{s}}}"
    },
    {
        "d": "plugins.grails.org",
        "b": "grp",
        "u": "http://plugins.grails.org/?query={{{s}}}&submit=Search"
    },
    {
        "d": "www.gsmarena.com",
        "b": "gsma",
        "u": "http://www.gsmarena.com/results.php3?sName={{{s}}}"
    },
    {
        "d": "www.gsmarena.com",
        "b": "gsmarena",
        "u": "http://www.gsmarena.com/results.php3?sName={{{s}}}"
    },
    {
        "d": "google.com",
        "b": "gso",
        "u": "https://google.com/search?q=%2B%5Binurl%3Ahttp%3A%2F%2Fstackoverflow.com%5D+{{{s}}}"
    },
    {
        "d": "glammingspace.blogspot.com",
        "b": "gspace",
        "u": "https://glammingspace.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "wiki.greasespot.net",
        "b": "gsw",
        "u": "https://wiki.greasespot.net/index.php?title=Special%3ASearch&fulltext=Search&search={{{s}}}"
    },
    {
        "d": "geektimes.ru",
        "b": "gtmz",
        "u": "https://geektimes.ru/search/?q={{{s}}}"
    },
    {
        "d": "guardianproject.info",
        "b": "guardianproject",
        "u": "https://guardianproject.info/?s={{{s}}}"
    },
    {
        "d": "en.glyphwiki.org",
        "b": "gwen",
        "u": "http://en.glyphwiki.org/wiki/Special:Search?search={{{s}}}"
    },
    {
        "d": "wiki.gentoo.org",
        "b": "gw",
        "u": "https://wiki.gentoo.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "wiki.gentoo.org",
        "b": "gwiki",
        "u": "http://wiki.gentoo.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "habrahabr.ru",
        "b": "habra",
        "u": "http://habrahabr.ru/search/?q={{{s}}}"
    },
    {
        "d": "habr.com",
        "b": "habr",
        "u": "https://habr.com/ru/search/?&q={{{s}}}"
    },
    {
        "d": "hack42.nl",
        "b": "hack42",
        "u": "https://hack42.nl/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "hackaday.com",
        "b": "hackaday",
        "u": "http://hackaday.com/?s={{{s}}}"
    },
    {
        "d": "hackage.haskell.org",
        "b": "hackage",
        "u": "http://hackage.haskell.org/packages/search?terms={{{s}}}"
    },
    {
        "d": "blog.hackeradana.org",
        "b": "hackeradana",
        "u": "https://blog.hackeradana.org/search?q={{{s}}}"
    },
    {
        "d": "blog.drhack.net",
        "b": "hackology",
        "u": "https://blog.drhack.net/?s={{{s}}}"
    },
    {
        "d": "www.hackster.io",
        "b": "hackster",
        "u": "https://www.hackster.io/search?i=projects&q={{{s}}}"
    },
    {
        "d": "hackaday.com",
        "b": "had",
        "u": "http://hackaday.com/?s={{{s}}}"
    },
    {
        "d": "search-hadoop.com",
        "b": "hadoop",
        "u": "http://search-hadoop.com/?q={{{s}}}"
    },
    {
        "d": "www.hahwul.com",
        "b": "hahwul",
        "u": "http://www.hahwul.com/search?max-results=7&q={{{s}}}"
    },
    {
        "d": "forums.hak5.org",
        "b": "hak5f",
        "u": "https://forums.hak5.org/index.php?app=core&module=search&do=search&fromMainBar=1&search_term={{{s}}}"
    },
    {
        "d": "hak5.org",
        "b": "hak5",
        "u": "http://hak5.org/?s={{{s}}}"
    },
    {
        "d": "us.hardware.info",
        "b": "hardwareinfo",
        "u": "https://us.hardware.info/#search:{{{s}}}"
    },
    {
        "d": "www.haskell.org",
        "b": "haskellwiki",
        "u": "http://www.haskell.org/haskellwiki/Special:Search/{{{s}}}"
    },
    {
        "d": "lib.haxe.org",
        "b": "haxelib",
        "u": "http://lib.haxe.org/search?v={{{s}}}"
    },
    {
        "d": "holumbus.fh-wedel.de",
        "b": "hayoo",
        "u": "http://holumbus.fh-wedel.de/hayoo/hayoo.html?query={{{s}}}"
    },
    {
        "d": "hackage.haskell.org",
        "b": "hckg",
        "u": "https://hackage.haskell.org/packages/search?terms={{{s}}}"
    },
    {
        "d": "www.heise.de",
        "b": "hdl",
        "u": "https://www.heise.de/download/search?terms={{{s}}}"
    },
    {
        "d": "hdrapin.com",
        "b": "hdrapin",
        "u": "http://hdrapin.com/?s={{{s}}}"
    },
    {
        "d": "acm.hdu.edu.cn",
        "b": "hdu",
        "u": "http://acm.hdu.edu.cn/search.php?field=problem&key={{{s}}}"
    },
    {
        "d": "headtalker.com",
        "b": "headtalker",
        "u": "https://headtalker.com/?s={{{s}}}&post_type[]=campaigns"
    },
    {
        "d": "www.healthable.org",
        "b": "healthable",
        "u": "https://www.healthable.org/?s={{{s}}}"
    },
    {
        "d": "www.heise.de",
        "b": "heise",
        "u": "http://www.heise.de/suche/?q={{{s}}}&rm=search"
    },
    {
        "d": "hub.helm.sh",
        "b": "helmh",
        "u": "https://hub.helm.sh/charts?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "herber",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aherber.de"
    },
    {
        "d": "devcenter.heroku.com",
        "b": "heroku",
        "u": "http://devcenter.heroku.com/articles?q={{{s}}}"
    },
    {
        "d": "www.colorhexa.com",
        "b": "hex",
        "u": "http://www.colorhexa.com/{{{s}}}"
    },
    {
        "d": "hexdocs.pm",
        "b": "hexdocs",
        "u": "http://hexdocs.pm/{{{s}}}"
    },
    {
        "d": "hex.pm",
        "b": "hexpm",
        "u": "https://hex.pm/packages?search={{{s}}}&sort=downloads"
    },
    {
        "d": "www.haskell.org",
        "b": "hgle",
        "u": "https://www.haskell.org/hoogle/?hoogle={{{s}}}"
    },
    {
        "d": "www.haskell.org",
        "b": "hgl",
        "u": "https://www.haskell.org/hoogle/?hoogle={{{s}}}"
    },
    {
        "d": "www.mercurial-scm.org",
        "b": "hg",
        "u": "https://www.mercurial-scm.org/wiki/Mercurial?action=fullsearch&context=180&value={{{s}}}&titlesearch=Title"
    },
    {
        "d": "www.haskell.org",
        "b": "h",
        "u": "http://www.haskell.org/hoogle/?hoogle={{{s}}}"
    },
    {
        "d": "nl.hideproxy.me",
        "b": "hideme",
        "u": "https://nl.hideproxy.me/go.php?u={{{s}}}"
    },
    {
        "d": "success.highfive.com",
        "b": "highfive",
        "u": "https://success.highfive.com/hc/en-us/search?utf8=✓&query={{{s}}}"
    },
    {
        "d": "hackaday.io",
        "b": "hio",
        "u": "https://hackaday.io/search?term={{{s}}}"
    },
    {
        "d": "hackage.haskell.org",
        "b": "hkg",
        "u": "https://hackage.haskell.org/packages/search?terms={{{s}}}"
    },
    {
        "d": "hacktips.it",
        "b": "hk",
        "u": "http://hacktips.it/?s={{{s}}}"
    },
    {
        "d": "hn.algolia.com",
        "b": "hnd",
        "u": "https://hn.algolia.com/?query={{{s}}}&sort=byDate"
    },
    {
        "d": "hn.algolia.com",
        "b": "hn",
        "u": "https://hn.algolia.com/?q={{{s}}}"
    },
    {
        "d": "hackernoon.com",
        "b": "hno",
        "u": "https://hackernoon.com/search?q={{{s}}}"
    },
    {
        "d": "www.haskell.org",
        "b": "ho",
        "u": "http://www.haskell.org/hoogle/?hoogle={{{s}}}"
    },
    {
        "d": "www.projecthoneypot.org",
        "b": "honeypot",
        "u": "http://www.projecthoneypot.org/ip_{{{s}}}"
    },
    {
        "d": "hoogle.haskell.org",
        "b": "hoogle",
        "u": "https://hoogle.haskell.org/?hoogle={{{s}}}&scope=set%3Astackage"
    },
    {
        "d": "www.whoishostingthis.com",
        "b": "hosting",
        "u": "http://www.whoishostingthis.com/?q={{{s}}}"
    },
    {
        "d": "networking.ringofsaturn.com",
        "b": "host",
        "u": "http://networking.ringofsaturn.com/Tools/dig.php?domain=ANY+{{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "hou",
        "u": "https://cse.google.com/cse?cx=001106583893786776783%3Au81vudxhm7a&ie=UTF-8&q={{{s}}}&sa=Search&siteurl=www.sidefx.com%2Fdocs%2Fhoudini%2F&ref=www.sidefx.com%2Fdocs%2F&ss=504j116288j4"
    },
    {
        "d": "www.hover.com",
        "b": "hover",
        "u": "https://www.hover.com/domains/results?q={{{s}}}"
    },
    {
        "d": "howcode.org",
        "b": "how",
        "u": "https://howcode.org/search?q={{{s}}}"
    },
    {
        "d": "howtodoinjava.com",
        "b": "howtodoinjava",
        "u": "http://howtodoinjava.com/search-results/?q={{{s}}}"
    },
    {
        "d": "www.howtoforge.com",
        "b": "howtoforge",
        "u": "http://www.howtoforge.com/trip_search?keys={{{s}}}"
    },
    {
        "d": "www.howtogeek.com",
        "b": "howtogeek",
        "u": "http://www.howtogeek.com/search/?q={{{s}}}"
    },
    {
        "d": "howtomakemyblog.com",
        "b": "howtomakemyblog",
        "u": "http://howtomakemyblog.com/?s={{{s}}}"
    },
    {
        "d": "hosts-file.net",
        "b": "hphosts",
        "u": "http://hosts-file.net/default.asp?s={{{s}}}"
    },
    {
        "d": "search.hp.com",
        "b": "hp",
        "u": "http://search.hp.com/query.html?lang=en&submit.x=0&submit.y=0&qt={{{s}}}&la=en&cc=us"
    },
    {
        "d": "www.support.hp.com",
        "b": "hpsupport",
        "u": "http://www.support.hp.com/us-en/search?q={{{s}}}&filter="
    },
    {
        "d": "hstspreload.org",
        "b": "hsts",
        "u": "https://hstspreload.org/?domain={{{s}}}"
    },
    {
        "d": "http.cat",
        "b": "htcat",
        "u": "https://http.cat/{{{s}}}"
    },
    {
        "d": "www.howtogeek.com",
        "b": "htg",
        "u": "http://www.howtogeek.com/search/?q={{{s}}}"
    },
    {
        "d": "www.w3.org",
        "b": "html2txt",
        "u": "http://www.w3.org/services/html2txt?url={{{s}}}"
    },
    {
        "d": "html5doctor.com",
        "b": "html5d",
        "u": "http://html5doctor.com/search/?q={{{s}}}"
    },
    {
        "d": "htmlbook.ru",
        "b": "htmlbook",
        "u": "http://htmlbook.ru/search/?as_q={{{s}}}"
    },
    {
        "d": "www.htmldog.com",
        "b": "htmldog",
        "u": "http://www.htmldog.com/search/?q={{{s}}}"
    },
    {
        "d": "http.cat",
        "b": "httpcat",
        "u": "https://http.cat/{{{s}}}"
    },
    {
        "d": "httpstatuses.com",
        "b": "http",
        "u": "https://httpstatuses.com/{{{s}}} "
    },
    {
        "d": "knowledge.hubspot.com",
        "b": "hubspot",
        "u": "https://knowledge.hubspot.com/search?q={{{s}}}"
    },
    {
        "d": "hugethinking.com",
        "b": "huge",
        "u": "https://hugethinking.com/?s={{{s}}}"
    },
    {
        "d": "codewithhugo.com",
        "b": "hugo",
        "u": "https://codewithhugo.com/search/?q={{{s}}}"
    },
    {
        "d": "www.hackingwithswift.com",
        "b": "hws",
        "u": "https://www.hackingwithswift.com/search/{{{s}}}"
    },
    {
        "d": "hex.pm",
        "b": "hx",
        "u": "https://hex.pm/packages?search={{{s}}}&sort=downloads"
    },
    {
        "d": "www.hyperbola.info",
        "b": "hyper",
        "u": "https://www.hyperbola.info/packages/?q={{{s}}}"
    },
    {
        "d": "www.{{{s}}}.hypestat.com",
        "b": "hypestat",
        "u": "http://www.{{{s}}}.hypestat.com/"
    },
    {
        "d": "www.i3-technologies.com",
        "b": "i3",
        "u": "https://www.i3-technologies.com/en/resources/knowledge-base/?q={{{s}}}"
    },
    {
        "d": "www.iappmag.de",
        "b": "iappmag",
        "u": "http://www.iappmag.de/?s={{{s}}}"
    },
    {
        "d": "www.iav.com",
        "b": "iaven",
        "u": "https://www.iav.com/en/search/site/{{{s}}}"
    },
    {
        "d": "www.iav.com",
        "b": "iav",
        "u": "https://www.iav.com/search/site/{{{s}}}"
    },
    {
        "d": "www.ibm.com",
        "b": "ibm",
        "u": "http://www.ibm.com/Search/?q={{{s}}}&v=16&en=utf&lang=en&cc=us&Search=Search"
    },
    {
        "d": "www.ibm.com",
        "b": "ibmkc",
        "u": "https://www.ibm.com/support/knowledgecenter/en/search/{{{s}}}"
    },
    {
        "d": "icobench.com",
        "b": "ico",
        "u": "https://icobench.com/icos?s={{{s}}}"
    },
    {
        "d": "www.iconfinder.com",
        "b": "iconfinder",
        "u": "http://www.iconfinder.com/search/?q={{{s}}}"
    },
    {
        "d": "www.iconfinder.com",
        "b": "icon",
        "u": "http://www.iconfinder.com/search/?q={{{s}}}"
    },
    {
        "d": "icons8.com",
        "b": "icons8",
        "u": "https://icons8.com/web-app/for/all/{{{s}}} "
    },
    {
        "d": "www.iconfinder.com",
        "b": "icons",
        "u": "http://www.iconfinder.com/search/?q={{{s}}}"
    },
    {
        "d": "www.iculture.nl",
        "b": "icultr",
        "u": "http://www.iculture.nl/?s={{{s}}}"
    },
    {
        "d": "idoimaging.com",
        "b": "idi",
        "u": "https://idoimaging.com/programs/fulltext?utf8=✓&Program[fulltext]={{{s}}}"
    },
    {
        "d": "www.harrisgeospatial.com",
        "b": "idl",
        "u": "http://www.harrisgeospatial.com/docs/SearchResults.aspx?q={{{s}}}"
    },
    {
        "d": "www.idownloadblog.com",
        "b": "idownloadblog",
        "u": "http://www.idownloadblog.com/search/?cx=partner-pub-2130162217902648%3Adgi3x3-xedb&cof=FORID%3A11&ie=ISO-8859-1&q={{{s}}}&siteurl=www.idownloadblog.com%2F&ref=www.google.com%2F&ss=1069j239311j6"
    },
    {
        "d": "docs.idris-lang.org",
        "b": "idris",
        "u": "http://docs.idris-lang.org/en/latest/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "idroot.us",
        "b": "idroot",
        "u": "https://idroot.us/?s={{{s}}}"
    },
    {
        "d": "www.idropnews.com",
        "b": "idrop",
        "u": "https://www.idropnews.com/?s={{{s}}}"
    },
    {
        "d": "instantdomainsearch.com",
        "b": "ids",
        "u": "https://instantdomainsearch.com/#search={{{s}}}"
    },
    {
        "d": "support.inspiredelearning.com",
        "b": "iel",
        "u": "https://support.inspiredelearning.com/help/search/?phrase={{{s}}}"
    },
    {
        "d": "datatracker.ietf.org",
        "b": "ietf",
        "u": "http://datatracker.ietf.org/doc/search/?name={{{s}}}&activeDrafts=on&rfcs=on"
    },
    {
        "d": "www.ifun.de",
        "b": "ifun",
        "u": "https://www.ifun.de/suche/{{{s}}}"
    },
    {
        "d": "www.isitdownrightnow.com",
        "b": "iid",
        "u": "https://www.isitdownrightnow.com/{{{s}}}.html"
    },
    {
        "d": "www.ijinus.com",
        "b": "ijinus",
        "u": "https://www.ijinus.com/?s={{{s}}}&lang=en"
    },
    {
        "d": "illumos.org",
        "b": "illumos",
        "u": "http://illumos.org/man/{{{s}}}"
    },
    {
        "d": "www.ilounge.com",
        "b": "ilounge",
        "u": "http://www.ilounge.com/index.php/search/results/search&keywords={{{s}}}"
    },
    {
        "d": "www.ilovefreesoftware.com",
        "b": "ilovefreesoftware",
        "u": "http://www.ilovefreesoftware.com/gsearch?ie=UTF-8&q={{{s}}}&ss=1633j526083j9&cof=FORID%3a10&cx=008701510501807727669%3aabbyr0bpxi0&siteurl=www.ilovefreesoftware.com%2f"
    },
    {
        "d": "imagelayers.io",
        "b": "imagelayers",
        "u": "https://imagelayers.io/?images={{{s}}}"
    },
    {
        "d": "www.imagely.com",
        "b": "imagely",
        "u": "https://www.imagely.com/?s={{{s}}} "
    },
    {
        "d": "www.inmotionhosting.com",
        "b": "imh",
        "u": "https://www.inmotionhosting.com/support/search?searchword={{{s}}}"
    },
    {
        "d": "www.imore.com",
        "b": "imore",
        "u": "http://www.imore.com/search/{{{s}}}?query={{{s}}}"
    },
    {
        "d": "www.infoq.com",
        "b": "infoq",
        "u": "http://www.infoq.com/search.action?queryString={{{s}}}"
    },
    {
        "d": "www.infoworld.com",
        "b": "infoworld",
        "u": "https://www.infoworld.com/search/google?cx=014839440456418836424%3Ahugs45or03k&cof=FORID%3A9&query={{{s}}}&op=Search&gl=US&safe=off&form_build_id=form-ea211c8bee91b69175fca8d84e9d9543&form_id=google_cse_results_searchbox_form"
    },
    {
        "d": "wiki.installgentoo.com",
        "b": "installgentoo",
        "u": "https://wiki.installgentoo.com/index.php/{{{s}}}"
    },
    {
        "d": "software.intel.com",
        "b": "inteli",
        "u": "https://software.intel.com/sites/landingpage/IntrinsicsGuide/#!=undefined&text={{{s}}}"
    },
    {
        "d": "www.intel.com",
        "b": "intel",
        "u": "http://www.intel.com/content/www/us/en/search.html?keyword={{{s}}}"
    },
    {
        "d": "www.intodns.com",
        "b": "intodns",
        "u": "http://www.intodns.com/{{{s}}}"
    },
    {
        "d": "into.hu",
        "b": "intohu",
        "u": "http://into.hu/kereses.php?kereses={{{s}}}&cikk=1&forum=1&letolt=1&fal=1&zene=1&kerdesek=1&page=1"
    },
    {
        "d": "www.inwx.com",
        "b": "inwx",
        "u": "http://www.inwx.com/en/domain/check#search={{{s}}}#region=DEFAULT"
    },
    {
        "d": "developer.apple.com",
        "b": "ios",
        "u": "http://developer.apple.com/library/ios/search/?q={{{s}}}"
    },
    {
        "d": "www.roomalert.ro",
        "b": "iot",
        "u": "https://www.roomalert.ro/search?q={{{s}}}"
    },
    {
        "d": "www.actualidadiphone.com",
        "b": "iphonees",
        "u": "http://www.actualidadiphone.com/search/{{{s}}}"
    },
    {
        "d": "ipinfo.io",
        "b": "ipinfo",
        "u": "http://ipinfo.io/{{{s}}}"
    },
    {
        "d": "www.iplocation.net",
        "b": "iplocation",
        "u": "https://www.iplocation.net/?query={{{s}}}"
    },
    {
        "d": "www.iptolocation.net",
        "b": "iploc",
        "u": "https://www.iptolocation.net/trace-{{{s}}}"
    },
    {
        "d": "iplookup.theel0ja.info",
        "b": "iplookup",
        "u": "http://iplookup.theel0ja.info/?host={{{s}}}"
    },
    {
        "d": "ready.chair6.net",
        "b": "ipv6",
        "u": "http://ready.chair6.net/?url={{{s}}}"
    },
    {
        "d": "whatismyipaddress.com",
        "b": "ip",
        "u": "http://whatismyipaddress.com/ip/{{{s}}}"
    },
    {
        "d": "scitools.org.uk",
        "b": "iris",
        "u": "http://scitools.org.uk/iris/docs/latest/search.html?q={{{s}}}"
    },
    {
        "d": "isc.sans.edu",
        "b": "isc",
        "u": "https://isc.sans.edu/ipinfo.html?ip={{{s}}}"
    },
    {
        "d": "security.stackexchange.com",
        "b": "isec",
        "u": "https://security.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.iserv.fr",
        "b": "iserv",
        "u": "https://www.iserv.fr/?s={{{s}}}"
    },
    {
        "d": "is.gd",
        "b": "isgd",
        "u": "https://is.gd/create.php?url={{{s}}}"
    },
    {
        "d": "distrowatch.com",
        "b": "iso",
        "u": "https://distrowatch.com/table.php?distribution={{{s}}}"
    },
    {
        "d": "itnewz.ro",
        "b": "itnewz",
        "u": "http://itnewz.ro/?s={{{s}}}: "
    },
    {
        "d": "www.itninja.com",
        "b": "itninja",
        "u": "http://www.itninja.com/search?q={{{s}}}"
    },
    {
        "d": "www.itrig.de",
        "b": "itrig",
        "u": "http://www.itrig.de/index.php?serendipity%5Baction%5D=search&serendipity%5Bfullentry%5D=1&serendipity%5BsearchTerm%5D={{{s}}}"
    },
    {
        "d": "iwantmyname.com",
        "b": "iwant",
        "u": "http://iwantmyname.com/search?domain={{{s}}}"
    },
    {
        "d": "iwantmyname.com",
        "b": "iwantmyname",
        "u": "https://iwantmyname.com/?domain={{{s}}}"
    },
    {
        "d": "iwantmyname.com",
        "b": "iwmn",
        "u": "https://iwantmyname.com/?domain={{{s}}}"
    },
    {
        "d": "iyanmv.com",
        "b": "iyanmv",
        "u": "http://iyanmv.com/?s={{{s}}}"
    },
    {
        "d": "junookyo.blogspot.com",
        "b": "j2team",
        "u": "https://junookyo.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "jadi.net",
        "b": "jadi",
        "u": "https://jadi.net/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "japi",
        "u": "https://duckduckgo.com/?q=site%3Aapi.joomla.org+{{{s}}}"
    },
    {
        "d": "support.justaddpower.com",
        "b": "jap",
        "u": "https://support.justaddpower.com/kb/search/?q={{{s}}}"
    },
    {
        "d": "www.findjar.com",
        "b": "jar",
        "u": "http://www.findjar.com/index.x?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "java11",
        "u": "https://duckduckgo.com/?q=site%3Adocs.oracle.com%2Fen%2Fjava%2Fjavase%2F11%2Fdocs%2Fapi%2F+{{{s}}}"
    },
    {
        "d": "search.oracle.com",
        "b": "java4",
        "u": "http://search.oracle.com/search/search?tzoffset=420&default=true&q={{{s}}}+url:/javase/1.4.2/docs&start=1&nodeid=&fid=&showSimilarDoc=true&group=Documentation&keyword=&x=0&y=0"
    },
    {
        "d": "search.oracle.com",
        "b": "java5",
        "u": "http://search.oracle.com/search/search?tzoffset=420&default=true&q={{{s}}}+url:/javase/1.5.0/docs&start=1&nodeid=&fid=&showSimilarDoc=true&group=Documentation&keyword=&x=0&y=0"
    },
    {
        "d": "search.oracle.com",
        "b": "java6",
        "u": "http://search.oracle.com/search/search?tzoffset=420&default=true&q={{{s}}}+url:/javase/6/docs&start=1&nodeid=&fid=&showSimilarDoc=true&group=Documentation&keyword=&x=0&y=0"
    },
    {
        "d": "docs.oracle.com",
        "b": "java7",
        "u": "https://docs.oracle.com/apps/search/search.jsp?q={{{s}}}&category=java&product=e17409-01"
    },
    {
        "d": "duckduckgo.com",
        "b": "java8",
        "u": "https://duckduckgo.com/?q=site%3Adocs.oracle.com%2Fjavase%2F8%2Fdocs%2Fapi%2F+{{{s}}}"
    },
    {
        "d": "docs.oracle.com",
        "b": "java9",
        "u": "http://docs.oracle.com/apps/search/search.jsp?category=java&q={{{s}}}"
    },
    {
        "d": "search.oracle.com",
        "b": "javafx",
        "u": "https://search.oracle.com/search/search?num=10&exttimeout=false&q={{{s}}}+url:/javase/8/javafx/api&group=Documentation"
    },
    {
        "d": "java.libhunt.com",
        "b": "javalibhunt",
        "u": "https://java.libhunt.com/search?query={{{s}}}"
    },
    {
        "d": "javalibs.com",
        "b": "javalibs",
        "u": "https://javalibs.com/search?q={{{s}}}"
    },
    {
        "d": "docs.oracle.com",
        "b": "java",
        "u": "https://docs.oracle.com/apps/search/search.jsp?q={{{s}}}&category=java"
    },
    {
        "d": "developer.mozilla.org",
        "b": "javascript",
        "u": "https://developer.mozilla.org/search?q={{{s}}}"
    },
    {
        "d": "plugins.jetbrains.com",
        "b": "jbplugins",
        "u": "https://plugins.jetbrains.com/search?correctionAllowed=true&search={{{s}}}"
    },
    {
        "d": "jcp.org",
        "b": "jcp",
        "u": "https://jcp.org/en/jsr/summary?id={{{s}}}"
    },
    {
        "d": "www.journaldugeek.com",
        "b": "jdg",
        "u": "http://www.journaldugeek.com/?s={{{s}}}"
    },
    {
        "d": "docs.oracle.com",
        "b": "jdk",
        "u": "http://docs.oracle.com/apps/search/search.jsp?category=java&q={{{s}}}"
    },
    {
        "d": "extensions.joomla.org",
        "b": "jed",
        "u": "https://extensions.joomla.org/extensions/extension/?searchall={{{s}}}&filter%5Btags%5D%5B%5D=&filter%5Bcore_catid%5D=&filter%5Bincludes%5D=&filter%5Bversions%5D=&filter%5Btype%5D=&filter%5Bhasdemo%5D=&filter%5Bnewupdated%5D=&filter%5Bscore%5D=&dir=DESC&limitstart=&controller=filter&view=extension&layout=list&Itemid=145&clearorders=0&clearfilters=1"
    },
    {
        "d": "jesuerocha.com",
        "b": "jesuerocha",
        "u": "https://jesuerocha.com/search/{{{s}}}"
    },
    {
        "d": "www.jetbrains.com",
        "b": "jetbrains",
        "u": "https://www.jetbrains.com/search/?q={{{s}}}"
    },
    {
        "d": "jinja.pocoo.org",
        "b": "jj",
        "u": "http://jinja.pocoo.org/docs/2.10/search/?q={{{s}}}"
    },
    {
        "d": "hub.jmonkeyengine.org",
        "b": "jme",
        "u": "https://hub.jmonkeyengine.org/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "jmew",
        "u": "https://duckduckgo.com/?q={{{s}}} site:wiki.jmonkeyengine.org"
    },
    {
        "d": "jomgeek.my",
        "b": "jomgeek",
        "u": "https://jomgeek.my/?s={{{s}}}"
    },
    {
        "d": "api.jquery.com",
        "b": "jqd",
        "u": "http://api.jquery.com/{{{s}}}/"
    },
    {
        "d": "api.jquery.com",
        "b": "jq",
        "u": "http://api.jquery.com/?ns0=1&s={{{s}}}"
    },
    {
        "d": "jquerymobile.com",
        "b": "jqm",
        "u": "http://jquerymobile.com/?s={{{s}}}"
    },
    {
        "d": "api.jquery.com",
        "b": "jquery",
        "u": "http://api.jquery.com/?ns0=1&s={{{s}}}"
    },
    {
        "d": "api.jqueryui.com",
        "b": "jqui",
        "u": "http://api.jqueryui.com/?s={{{s}}}"
    },
    {
        "d": "jqueryui.com",
        "b": "jqu",
        "u": "http://jqueryui.com/?s={{{s}}}"
    },
    {
        "d": "js.coach",
        "b": "jscoach",
        "u": "https://js.coach/?search={{{s}}}"
    },
    {
        "d": "www.jsdelivr.com",
        "b": "jsd",
        "u": "https://www.jsdelivr.com/?query={{{s}}}"
    },
    {
        "d": "www.jshint.com",
        "b": "jshint",
        "u": "http://www.jshint.com/docs/options/#{{{s}}}"
    },
    {
        "d": "javascript.info",
        "b": "jsinfo",
        "u": "https://javascript.info/search/?query={{{s}}}"
    },
    {
        "d": "junespringmultimedia.com",
        "b": "jsm",
        "u": "https://junespringmultimedia.com/?s={{{s}}}&post_type=page"
    },
    {
        "d": "developer.mozilla.org",
        "b": "js",
        "u": "https://developer.mozilla.org/en-US/search?topic=api&topic=js&q={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "jso",
        "u": "http://stackoverflow.com/search?q=[java]+{{{s}}}"
    },
    {
        "d": "jsr.io",
        "b": "jsr",
        "u": "https://jsr.io/packages?search={{{s}}}"
    },
    {
        "d": "search.oracle.com",
        "b": "jtut",
        "u": "http://search.oracle.com/search/search?search_p_main_operator=all&group=Documentation&q={{{s}}}+url%3A%2Fjavase%2Ftutorial"
    },
    {
        "d": "juejin.im",
        "b": "juejin",
        "u": "https://juejin.im/search?query= {{{s}}}&type=all"
    },
    {
        "d": "jujucharms.com",
        "b": "juju",
        "u": "https://jujucharms.com/q/{{{s}}}"
    },
    {
        "d": "docs.julialang.org",
        "b": "julia",
        "u": "https://docs.julialang.org/en/latest/search?q={{{s}}}"
    },
    {
        "d": "www.juniper.net",
        "b": "juninet",
        "u": "https://www.juniper.net/search/gsa/?keyword={{{s}}}"
    },
    {
        "d": "kubernetes.io",
        "b": "k8s",
        "u": "https://kubernetes.io/search/?q={{{s}}}"
    },
    {
        "d": "www.kali.org",
        "b": "kali",
        "u": "https://www.kali.org/?s={{{s}}}"
    },
    {
        "d": "www.kamailio.org",
        "b": "kamailio",
        "u": "https://www.kamailio.org/w/?s={{{s}}}"
    },
    {
        "d": "forum.kaosx.us",
        "b": "kaos",
        "u": "https://forum.kaosx.us/?q={{{s}}}"
    },
    {
        "d": "kaosx.tk",
        "b": "kaospkg",
        "u": "http://kaosx.tk/packages/?act=search&subdir=&sortby=date&order=descending&searchpattern={{{s}}} "
    },
    {
        "d": "api.kde.org",
        "b": "kapi",
        "u": "http://api.kde.org/mapsearcher.php?class={{{s}}}&module=ALL&version=ALL&go=Go"
    },
    {
        "d": "www.kashipara.com",
        "b": "kashipara",
        "u": "https://www.kashipara.com/search/search.php?search={{{s}}}"
    },
    {
        "d": "support.kaspersky.com",
        "b": "kaspersky",
        "u": "http://support.kaspersky.com/search?query={{{s}}}"
    },
    {
        "d": "katacoda.com",
        "b": "katacoda",
        "u": "https://katacoda.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "kb",
        "u": "http://duckduckgo.com/?q=site%3Akeybase.io+{{{s}}}"
    },
    {
        "d": "korben.info",
        "b": "kbn",
        "u": "https://korben.info/?s={{{s}}}"
    },
    {
        "d": "bugs.kde.org",
        "b": "kbugs",
        "u": "https://bugs.kde.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "community.kde.org",
        "b": "kcommunity",
        "u": "http://community.kde.org/index.php?title=Special:Search&search={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "kcp",
        "u": "https://github.com/KaOS-Community-Packages?query={{{s}}}"
    },
    {
        "d": "code.kx.com",
        "b": "kdb",
        "u": "https://code.kx.com/q/search?query={{{s}}}"
    },
    {
        "d": "www.kdeblog.com",
        "b": "kdeblog",
        "u": "http://www.kdeblog.com/?s={{{s}}}"
    },
    {
        "d": "www.kdnuggets.com",
        "b": "kdnuggets",
        "u": "https://www.kdnuggets.com/?s={{{s}}}"
    },
    {
        "d": "keras.io",
        "b": "keras",
        "u": "https://keras.io/search.html?q={{{s}}}"
    },
    {
        "d": "www.kerosenokomputing.com",
        "b": "kero",
        "u": "http://www.kerosenokomputing.com/search?q={{{s}}} "
    },
    {
        "d": "git.kernel.org",
        "b": "ker",
        "u": "https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/log/?h=v5.0.1&qt=grep&q={{{s}}}"
    },
    {
        "d": "kasperfred.com",
        "b": "kf",
        "u": "https://kasperfred.com/posts/?q={{{s}}}"
    },
    {
        "d": "invent.kde.org",
        "b": "kgitlab",
        "u": "https://invent.kde.org/search?utf8=✓&snippets=&scope=&search={{{s}}}"
    },
    {
        "d": "hub.kubeapps.com",
        "b": "kh",
        "u": "https://hub.kubeapps.com/charts?q={{{s}}}"
    },
    {
        "d": "www.khronos.org",
        "b": "khronos",
        "u": "http://www.khronos.org/search/?cx=017055583490642512057:_ak1bpok_no&cof=FORID:9&q={{{s}}}&sa=Search&siteurl=www.khronos.org/"
    },
    {
        "d": "getkirby.com",
        "b": "kirby",
        "u": "https://getkirby.com/search?q={{{s}}}"
    },
    {
        "d": "kivy.org",
        "b": "kivyapi",
        "u": "http://kivy.org/docs/search.html?check_keywords=yes&area=default&q={{{s}}}"
    },
    {
        "d": "kivy.org",
        "b": "kivy",
        "u": "http://kivy.org/docs/search.html?check_keywords=yes&area=default&q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "kkbruce",
        "u": "http://www.google.com/cse?cx=002209521788924011185:wzz9w-qvlhi&q={{{s}}}"
    },
    {
        "d": "klnavarro.free.fr",
        "b": "kln",
        "u": "http://klnavarro.free.fr/spip/spip.php?page=recherche&recherche={{{s}}}"
    },
    {
        "d": "knowledge.kaltura.com",
        "b": "kmc",
        "u": "https://knowledge.kaltura.com/search?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "forum.keyboardmaestro.com",
        "b": "kmf",
        "u": "https://forum.keyboardmaestro.com/search?q={{{s}}}"
    },
    {
        "d": "bugs.koha-community.org",
        "b": "koha",
        "u": "https://bugs.koha-community.org/bugzilla3/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "koji.fedoraproject.org",
        "b": "kojipkg",
        "u": "http://koji.fedoraproject.org/koji/search?match=glob&type=package&terms={{{s}}}"
    },
    {
        "d": "www.kokothemes.com",
        "b": "kokothemes",
        "u": "https://www.kokothemes.com/?s={{{s}}}"
    },
    {
        "d": "www.komputeko.net",
        "b": "komputeko",
        "u": "http://www.komputeko.net/index_eo.php?vorto={{{s}}}"
    },
    {
        "d": "www.kotaku.com.au",
        "b": "kotakuau",
        "u": "http://www.kotaku.com.au/?s={{{s}}}"
    },
    {
        "d": "kotlinlang.org",
        "b": "kotlin",
        "u": "https://kotlinlang.org/?q={{{s}}}"
    },
    {
        "d": "kotlin.link",
        "b": "kotlinlinks",
        "u": "https://kotlin.link/?q={{{s}}}"
    },
    {
        "d": "projects.kde.org",
        "b": "kprojects",
        "u": "https://projects.kde.org/search?q={{{s}}}&all_words=1&projects=1&submit=Submit"
    },
    {
        "d": "www.kreativfont.com",
        "b": "kreativfont",
        "u": "https://www.kreativfont.com/?s={{{s}}}"
    },
    {
        "d": "krebsonsecurity.com",
        "b": "krebs",
        "u": "https://krebsonsecurity.com/?s={{{s}}}"
    },
    {
        "d": "krebsonsecurity.com",
        "b": "krebsonsec",
        "u": "https://krebsonsecurity.com/?s={{{s}}}&x=0&y=0"
    },
    {
        "d": "docs.krita.org",
        "b": "krita",
        "u": "https://docs.krita.org/index.php?search={{{s}}}"
    },
    {
        "d": "techbase.kde.org",
        "b": "ktb",
        "u": "http://techbase.kde.org/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "techbase.kde.org",
        "b": "ktechbase",
        "u": "http://techbase.kde.org/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "kubadownload.com",
        "b": "kubadownload",
        "u": "https://kubadownload.com/search?q={{{s}}}"
    },
    {
        "d": "www.kuba-pichci.pl",
        "b": "kubapichci",
        "u": "http://www.kuba-pichci.pl/?s={{{s}}}"
    },
    {
        "d": "kubernetes.io",
        "b": "kubernetes",
        "u": "https://kubernetes.io/docs/search/?q={{{s}}}"
    },
    {
        "d": "www.kuketz-blog.de",
        "b": "kuketz",
        "u": "https://www.kuketz-blog.de/?s={{{s}}}"
    },
    {
        "d": "kuribo64.net",
        "b": "kuribo64",
        "u": "http://kuribo64.net/board/search.php?q={{{s}}}&inposts=0"
    },
    {
        "d": "userbase.kde.org",
        "b": "kuserbase",
        "u": "https://userbase.kde.org/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "kodexploit.com",
        "b": "kx",
        "u": "http://kodexploit.com/blog/search?search={{{s}}}"
    },
    {
        "d": "code.kx.com",
        "b": "kxref",
        "u": "https://code.kx.com/q/search?query={{{s}}}"
    },
    {
        "d": "l1sp.org",
        "b": "l1sp",
        "u": "http://l1sp.org/search?q={{{s}}}"
    },
    {
        "d": "www.love2d.org",
        "b": "l2d",
        "u": "http://www.love2d.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "www.lamhatech.com",
        "b": "lamhatech",
        "u": "https://www.lamhatech.com/search?q={{{s}}}"
    },
    {
        "d": "www.netlib.org",
        "b": "lapack",
        "u": "http://www.netlib.org/lapack/complex16/{{{s}}}.f"
    },
    {
        "d": "laracasts.com",
        "b": "laracasts",
        "u": "https://laracasts.com/search?q={{{s}}}"
    },
    {
        "d": "laravel.com",
        "b": "laravel",
        "u": "https://laravel.com/docs/{{{s}}}"
    },
    {
        "d": "en.wikibooks.org",
        "b": "latexwb",
        "u": "https://en.wikibooks.org/wiki/Search?search={{{s}}}&prefix=LaTeX"
    },
    {
        "d": "launchpad.net",
        "b": "launchpad",
        "u": "https://launchpad.net/+search?field.text={{{s}}}"
    },
    {
        "d": "eng.letscc.net",
        "b": "lcc",
        "u": "http://eng.letscc.net/?t=all&k={{{s}}}"
    },
    {
        "d": "laracasts.com",
        "b": "lc",
        "u": "https://laracasts.com/search?q={{{s}}}"
    },
    {
        "d": "lxr.free-electrons.com",
        "b": "lcr",
        "u": "http://lxr.free-electrons.com/ident?i={{{s}}}"
    },
    {
        "d": "php.learndev.info",
        "b": "learndev",
        "u": "https://php.learndev.info/?q={{{s}}}"
    },
    {
        "d": "learn.javascript.ru",
        "b": "learn-js",
        "u": "http://learn.javascript.ru/search?query={{{s}}}"
    },
    {
        "d": "learnxinyminutes.com",
        "b": "learnxiny",
        "u": "https://learnxinyminutes.com/docs/{{{s}}}/"
    },
    {
        "d": "lowendbox.com",
        "b": "leb",
        "u": "http://lowendbox.com/?s={{{s}}}"
    },
    {
        "d": "mothereff.in",
        "b": "len",
        "u": "https://mothereff.in/byte-counter#{{{s}}}"
    },
    {
        "d": "shop.lenovo.com",
        "b": "lenovo",
        "u": "http://shop.lenovo.com/SEUILibrary/controller/e/web/LenovoPortal/en_US/site.workflow:SimpleSiteSearch?q={{{s}}}&v=15&lang=en&cc=us&en=utf&Search.x=0&Search.y=0&Search=Search"
    },
    {
        "d": "www.lesnumeriques.com",
        "b": "lesnumeriques",
        "u": "http://www.lesnumeriques.com/recherche.html?q={{{s}}}&cx=partner-pub-8349656358827352%3A8590362607&cof=FORID%3A10&ie=UTF-8&hl=fr"
    },
    {
        "d": "www.lesnumeriques.com",
        "b": "lesnum",
        "u": "http://www.lesnumeriques.com/recherche?q={{{s}}}"
    },
    {
        "d": "levidsmith.com",
        "b": "levi",
        "u": "https://levidsmith.com/?s={{{s}}}"
    },
    {
        "d": "libs.garden",
        "b": "lg.go",
        "u": "https://libs.garden/go/search?q={{{s}}}"
    },
    {
        "d": "geekpauvre.com",
        "b": "lgp",
        "u": "http://geekpauvre.com/?s={{{s}}} "
    },
    {
        "d": "lehollandaisvolant.net",
        "b": "lhv",
        "u": "http://lehollandaisvolant.net/?q={{{s}}}"
    },
    {
        "d": "lehollandaisvolant.net",
        "b": "lhvl",
        "u": "http://lehollandaisvolant.net/?mode=links&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "libgdx",
        "u": "https://duckduckgo.com/?q=site%3Alibgdx.badlogicgames.com+{{{s}}}&t=h&ia=web"
    },
    {
        "d": "libraries.io",
        "b": "libraries",
        "u": "https://libraries.io/search?q={{{s}}}"
    },
    {
        "d": "lib.rs",
        "b": "librs",
        "u": "https://lib.rs/search?q={{{s}}}"
    },
    {
        "d": "docs.libuv.org",
        "b": "libuv",
        "u": "http://docs.libuv.org/en/latest/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "lifehacking.nl",
        "b": "lifehacking",
        "u": "http://lifehacking.nl/?s={{{s}}}"
    },
    {
        "d": "dev.liferay.com",
        "b": "liferay",
        "u": "https://dev.liferay.com/es/search?p_p_id=3&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_3_struts_action=%2Fsearch%2Fsearch&_3_redirect=%2Fes%2Fdevelop%2Ftutorials%2F-%2Fknowledge_base%2F7-1%2Fupgrading-a-liferay-mvc-portlet&_3_keywords={{{s}}}&_3_groupId=10184"
    },
    {
        "d": "lignux.com",
        "b": "lignux",
        "u": "http://lignux.com/?s={{{s}}}"
    },
    {
        "d": "www.lincoder.com",
        "b": "lincoder",
        "u": "http://www.lincoder.com/?s={{{s}}}:"
    },
    {
        "d": "library.linode.com",
        "b": "linode",
        "u": "https://library.linode.com/search?query={{{s}}}"
    },
    {
        "d": "www.linux.org",
        "b": "linorg",
        "u": "https://www.linux.org/search/?q={{{s}}}"
    },
    {
        "d": "linuxsnippets.net",
        "b": "linsnipp",
        "u": "http://linuxsnippets.net/en/search/node/{{{s}}}"
    },
    {
        "d": "explicativolinux.wordpress.com",
        "b": "linux",
        "u": "https://explicativolinux.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "linuxfr",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Alinuxfr.org&ia=web"
    },
    {
        "d": "forums.linuxmint.com",
        "b": "linuxmint",
        "u": "http://forums.linuxmint.com/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.linuxquestions.org",
        "b": "linuxq",
        "u": "http://www.linuxquestions.org/questions/{{{s}}}"
    },
    {
        "d": "linuxtracker.org",
        "b": "linuxtracker",
        "u": "http://linuxtracker.org/index.php?page=torrents&search={{{s}}}"
    },
    {
        "d": "libraries.io",
        "b": "lio",
        "u": "https://libraries.io/search?q={{{s}}}"
    },
    {
        "d": "www.lipsum.com",
        "b": "lipsum",
        "u": "http://www.lipsum.com/feed/html?amount={{{s}}}"
    },
    {
        "d": "luvit.io",
        "b": "lit",
        "u": "https://luvit.io/lit.html#{{{s}}}"
    },
    {
        "d": "lokan.jp",
        "b": "lkn",
        "u": "https://lokan.jp/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "llvm",
        "u": "https://duckduckgo.com/?q=site%3Allvm.org+{{{s}}}"
    },
    {
        "d": "lmms.io",
        "b": "lmms",
        "u": "https://lmms.io/wiki/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "lenewbie.com",
        "b": "ln",
        "u": "http://lenewbie.com/?s={{{s}}}"
    },
    {
        "d": "bugs.documentfoundation.org",
        "b": "lobugs",
        "u": "https://bugs.documentfoundation.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "lodash.com",
        "b": "lodash",
        "u": "https://lodash.com/docs#{{{s}}}"
    },
    {
        "d": "logopond.com",
        "b": "logo",
        "u": "http://logopond.com/search/?search={{{s}}}"
    },
    {
        "d": "help.libreoffice.org",
        "b": "loh",
        "u": "https://help.libreoffice.org/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "docs.looker.com",
        "b": "lookdocs",
        "u": "https://docs.looker.com/#stq={{{s}}}&stp=1"
    },
    {
        "d": "duckduckgo.com",
        "b": "loopbackjs",
        "u": "http://duckduckgo.com/?q=site:loopback.io/doc/en/lb3+{{{s}}}"
    },
    {
        "d": "www.linux.org.ru",
        "b": "lor",
        "u": "https://www.linux.org.ru/search.jsp?q={{{s}}}&range=ALL&interval=ALL&user=&_usertopic=on"
    },
    {
        "d": "www.lineageoslog.com",
        "b": "loslog",
        "u": "https://www.lineageoslog.com/search?q={{{s}}}"
    },
    {
        "d": "opengrok.libreoffice.org",
        "b": "losource",
        "u": "http://opengrok.libreoffice.org/search?q={{{s}}}&project=core"
    },
    {
        "d": "www.love2d.org",
        "b": "love2d",
        "u": "http://www.love2d.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "love2d.org",
        "b": "love",
        "u": "http://love2d.org/w/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "love2d.org",
        "b": "lovewiki",
        "u": "https://love2d.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "bugs.launchpad.net",
        "b": "lpbug",
        "u": "https://bugs.launchpad.net/bugs/+bugs?field.searchtext={{{s}}}"
    },
    {
        "d": "launchpad.net",
        "b": "lp",
        "u": "https://launchpad.net/+search?field.text={{{s}}}"
    },
    {
        "d": "www.die.net",
        "b": "lpm",
        "u": "https://www.die.net/search/?q={{{s}}}"
    },
    {
        "d": "forum.linuxquimper.org",
        "b": "lq",
        "u": "https://forum.linuxquimper.org/search?q={{{s}}}"
    },
    {
        "d": "wiki.linuxquestions.org",
        "b": "lqw",
        "u": "http://wiki.linuxquestions.org/index.php?search={{{s}}}"
    },
    {
        "d": "lasombradelhelicoptero.com",
        "b": "lsdh",
        "u": "https://lasombradelhelicoptero.com/?s={{{s}}}"
    },
    {
        "d": "lsr.di.unimi.it",
        "b": "lsr",
        "u": "http://lsr.di.unimi.it/LSR/Search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "lttforum",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Alinustechtips.com"
    },
    {
        "d": "linustechtips.com",
        "b": "ltt",
        "u": "https://linustechtips.com/main/search/?&q={{{s}}}"
    },
    {
        "d": "www.lua.org",
        "b": "luadoc51",
        "u": "https://www.lua.org/manual/5.1/manual.html#pdf-{{{s}}}"
    },
    {
        "d": "www.lua.org",
        "b": "luadoc52",
        "u": "https://www.lua.org/manual/5.2/manual.html#pdf-{{{s}}}"
    },
    {
        "d": "www.lua.org",
        "b": "luadoc53",
        "u": "https://www.lua.org/manual/5.3/manual.html#pdf-{{{s}}}"
    },
    {
        "d": "luaforge.net",
        "b": "luaforge",
        "u": "http://luaforge.net/search/?type_of_search=soft&words={{{s}}}&Search=Search"
    },
    {
        "d": "luarocks.org",
        "b": "luarocks",
        "u": "https://luarocks.org/search?q={{{s}}}"
    },
    {
        "d": "lubuntu.me",
        "b": "lubuntu",
        "u": "http://lubuntu.me/?s={{{s}}}"
    },
    {
        "d": "avr.myluna.de",
        "b": "lunaavr",
        "u": "http://avr.myluna.de/doku.php?do=search&id={{{s}}}"
    },
    {
        "d": "la-vache-libre.org",
        "b": "lvl",
        "u": "http://la-vache-libre.org/?s={{{s}}}"
    },
    {
        "d": "learnxinyminutes.com",
        "b": "lxiny",
        "u": "https://learnxinyminutes.com/docs/{{{s}}}"
    },
    {
        "d": "lxle.net",
        "b": "lxle",
        "u": "http://lxle.net/forum/#/search?Search={{{s}}}"
    },
    {
        "d": "marc.info",
        "b": "lxml",
        "u": "http://marc.info/?l=linux-kernel&w=2&r=1&s={{{s}}}&q=b"
    },
    {
        "d": "elixir.bootlin.com",
        "b": "lxr",
        "u": "http://elixir.bootlin.com/linux/latest/ident/{{{s}}}"
    },
    {
        "d": "www.lynda.com",
        "b": "lynda",
        "u": "http://www.lynda.com/search?q={{{s}}}"
    },
    {
        "d": "maxforlive.com",
        "b": "m4l",
        "u": "http://maxforlive.com/library/index.php?by=any&q={{{s}}}"
    },
    {
        "d": "www.macvendorlookup.com",
        "b": "mac",
        "u": "http://www.macvendorlookup.com/search/{{{s}}}"
    },
    {
        "d": "macmagazine.uol.com.br",
        "b": "macmag",
        "u": "https://macmagazine.uol.com.br/?s={{{s}}}"
    },
    {
        "d": "www.macobserver.com",
        "b": "macobserver",
        "u": "https://www.macobserver.com/?s={{{s}}}"
    },
    {
        "d": "www.macports.org",
        "b": "macports",
        "u": "https://www.macports.org/ports.php?by=name&substr={{{s}}}"
    },
    {
        "d": "www.macrumors.com",
        "b": "macrumors",
        "u": "http://www.macrumors.com/search/?s={{{s}}}"
    },
    {
        "d": "www.macstories.net",
        "b": "macstories",
        "u": "http://www.macstories.net/?s={{{s}}}"
    },
    {
        "d": "www.macvendorlookup.com",
        "b": "macvendor",
        "u": "http://www.macvendorlookup.com/search/{{{s}}}"
    },
    {
        "d": "www.macworld.com",
        "b": "macworld",
        "u": "http://www.macworld.com/search?query={{{s}}} &submit=search"
    },
    {
        "d": "magento.com",
        "b": "magento",
        "u": "https://magento.com/search/gss/{{{s}}}"
    },
    {
        "d": "github.com",
        "b": "magiskmod",
        "u": "https://github.com/Magisk-Modules-Repo?&q={{{s}}}"
    },
    {
        "d": "www.raspberrypi.org",
        "b": "magpi",
        "u": "https://www.raspberrypi.org/magpi/?s={{{s}}}"
    },
    {
        "d": "magento.stackexchange.com",
        "b": "magsx",
        "u": "http://magento.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "makemac.com",
        "b": "makemac",
        "u": "http://makemac.com/?s={{{s}}}"
    },
    {
        "d": "makezine.com",
        "b": "make",
        "u": "https://makezine.com/?s={{{s}}}"
    },
    {
        "d": "www.makeuseof.com",
        "b": "makeuseof",
        "u": "https://www.makeuseof.com/?s={{{s}}}"
    },
    {
        "d": "linux.die.net",
        "b": "man1",
        "u": "https://linux.die.net/man/1/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "man7",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aman7.org%2Flinux%2Fman-pages"
    },
    {
        "d": "wiki.manjaro.org",
        "b": "manjaro",
        "u": "https://wiki.manjaro.org/index.php?search={{{s}}}&title=Special%3ASearch"
    },
    {
        "d": "forum.manjaro.org",
        "b": "manjf",
        "u": "https://forum.manjaro.org/search?expanded=true&q={{{s}}}"
    },
    {
        "d": "wiki.manjaro.org",
        "b": "manjw",
        "u": "https://wiki.manjaro.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.mankier.com",
        "b": "mankier",
        "u": "http://www.mankier.com/?q={{{s}}}"
    },
    {
        "d": "man-k.org",
        "b": "man-k",
        "u": "http://man-k.org/search?q={{{s}}}&dist=NetBSD-current"
    },
    {
        "d": "manpage.me",
        "b": "man",
        "u": "http://manpage.me/?q={{{s}}}"
    },
    {
        "d": "manned.org",
        "b": "manned",
        "u": "https://manned.org/browse/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "manosx",
        "u": "http://duckduckgo.com/?q={{{s}}}+site%3Adeveloper.apple.com"
    },
    {
        "d": "manpage.me",
        "b": "manpage",
        "u": "https://manpage.me/?q={{{s}}}"
    },
    {
        "d": "mariadb.com",
        "b": "mariadb",
        "u": "https://mariadb.com/kb/en/+search/?q={{{s}}}"
    },
    {
        "d": "markmail.org",
        "b": "markmail",
        "u": "http://markmail.org/search/?q={{{s}}}"
    },
    {
        "d": "mashable.com",
        "b": "mashable",
        "u": "http://mashable.com/follow/search?q={{{s}}}"
    },
    {
        "d": "mashable.com",
        "b": "mash",
        "u": "http://mashable.com/follow/search/?q={{{s}}} "
    },
    {
        "d": "www.UnmaskParasites.com",
        "b": "mask",
        "u": "http://www.UnmaskParasites.com/security-report/?page={{{s}}}"
    },
    {
        "d": "reference.wolfram.com",
        "b": "mathematica",
        "u": "http://reference.wolfram.com/search/?q={{{s}}}"
    },
    {
        "d": "docs.mathjax.org",
        "b": "mathjax",
        "u": "http://docs.mathjax.org/en/latest/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "es.mathworks.com",
        "b": "matlabans",
        "u": "https://es.mathworks.com/matlabcentral/answers/?term={{{s}}}"
    },
    {
        "d": "uk.mathworks.com",
        "b": "matlab",
        "u": "http://uk.mathworks.com/help/search.html?qdoc={{{s}}}&submitsearch=Search"
    },
    {
        "d": "matplotlib.sourceforge.net",
        "b": "matplotlib",
        "u": "http://matplotlib.sourceforge.net/search.html?q={{{s}}} "
    },
    {
        "d": "search.maven.org",
        "b": "maven",
        "u": "http://search.maven.org/#search|ga|1|{{{s}}}"
    },
    {
        "d": "extension.maxthon.com",
        "b": "maxthon",
        "u": "http://extension.maxthon.com/all/index.php?keyword={{{s}}}"
    },
    {
        "d": "blog.malwarebytes.org",
        "b": "mbamblog",
        "u": "https://blog.malwarebytes.org/?s={{{s}}}"
    },
    {
        "d": "www.mirbsd.org",
        "b": "mbsdman",
        "u": "https://www.mirbsd.org/man.cgi?q={{{s}}} "
    },
    {
        "d": "bugzilla.mozilla.org",
        "b": "mbug",
        "u": "https://bugzilla.mozilla.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "metacpan.org",
        "b": "mcpan",
        "u": "http://metacpan.org/search?q={{{s}}}"
    },
    {
        "d": "developer.mozilla.org",
        "b": "mdc",
        "u": "https://developer.mozilla.org/search?q={{{s}}}"
    },
    {
        "d": "learn.microsoft.com",
        "b": "md",
        "u": "https://learn.microsoft.com/en-us/search/?terms={{{s}}}"
    },
    {
        "d": "developer.mozilla.org",
        "b": "mdnapi",
        "u": "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=api"
    },
    {
        "d": "developer.mozilla.org",
        "b": "mdncss",
        "u": "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=css"
    },
    {
        "d": "developer.mozilla.org",
        "b": "mdnhtml",
        "u": "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=html"
    },
    {
        "d": "mdn.io",
        "b": "mdnio",
        "u": "https://mdn.io/{{{s}}}"
    },
    {
        "d": "developer.mozilla.org",
        "b": "mdnjs",
        "u": "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=js"
    },
    {
        "d": "developer.mozilla.org",
        "b": "mdn",
        "u": "https://developer.mozilla.org/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "mdn.s",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Adeveloper.mozilla.org"
    },
    {
        "d": "www.medgadget.com",
        "b": "medgadget",
        "u": "http://www.medgadget.com/?s={{{s}}}"
    },
    {
        "d": "www.mediawiki.org",
        "b": "mediawiki",
        "u": "https://www.mediawiki.org/w/index.php?search={{{s}}} "
    },
    {
        "d": "medium.com",
        "b": "medium",
        "u": "https://medium.com/search?q={{{s}}}"
    },
    {
        "d": "www.melopero.com",
        "b": "melopero",
        "u": "https://www.melopero.com/?s={{{s}}}&post_type=product"
    },
    {
        "d": "metacpan.org",
        "b": "metacpan",
        "u": "https://metacpan.org/search?q={{{s}}}"
    },
    {
        "d": "codegolf.meta.stackexchange.com",
        "b": "metappcg",
        "u": "https://codegolf.meta.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "meta.stackoverflow.com",
        "b": "metaso",
        "u": "http://meta.stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "docs.meteor.com",
        "b": "meteorjs",
        "u": "http://docs.meteor.com/#/full/{{{s}}}"
    },
    {
        "d": "search.microsoft.com",
        "b": "microsoft",
        "u": "http://search.microsoft.com/results.aspx?mkt=en-US&form=MSHOME&setlang=en-US&q={{{s}}}"
    },
    {
        "d": "midori-browser.org",
        "b": "midori",
        "u": "https://midori-browser.org?term={{{s}}}"
    },
    {
        "d": "wiki.mikrotik.com",
        "b": "mik",
        "u": "https://wiki.mikrotik.com/index.php?search={{{s}}}&title=Special:Search&go=Go"
    },
    {
        "d": "mimeapplication.net",
        "b": "mime",
        "u": "http://mimeapplication.net/search?q={{{s}}}"
    },
    {
        "d": "linuxmint.com",
        "b": "mint",
        "u": "http://linuxmint.com/search.php?query={{{s}}}&search=1"
    },
    {
        "d": "mixergy.com",
        "b": "mixergy",
        "u": "http://mixergy.com/?s={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "mjtsai",
        "u": "https://duckduckgo.com/?q={{{s}}}&sites=mjtsai.com&ia=web"
    },
    {
        "d": "mylaptopguide.com",
        "b": "mlg",
        "u": "https://mylaptopguide.com/?s={{{s}}}"
    },
    {
        "d": "www.myminifactory.com",
        "b": "mmf",
        "u": "https://www.myminifactory.com/search/?query={{{s}}}&searchType=1"
    },
    {
        "d": "manpages.org",
        "b": "mnp",
        "u": "http://manpages.org/{{{s}}}"
    },
    {
        "d": "www.mobileday.in",
        "b": "mobileday",
        "u": "https://www.mobileday.in/search/label/{{{s}}}"
    },
    {
        "d": "moddota.com",
        "b": "moddota",
        "u": "https://moddota.com/forums/search?Search={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "module",
        "u": "https://en.wikipedia.org/wiki/Module:{{{s}}}"
    },
    {
        "d": "docs.modx.org",
        "b": "modx",
        "u": "https://docs.modx.org/current/en/search?q={{{s}}}"
    },
    {
        "d": "docs.mongodb.org",
        "b": "mongodb",
        "u": "http://docs.mongodb.org/manual/search/?query={{{s}}}"
    },
    {
        "d": "docs.mongodb.org",
        "b": "mongo",
        "u": "http://docs.mongodb.org/manual/search/?query={{{s}}}"
    },
    {
        "d": "www.moxo.ir",
        "b": "moxo.ir",
        "u": "http://www.moxo.ir/?s={{{s}}} "
    },
    {
        "d": "addons.mozilla.org",
        "b": "mozaddon",
        "u": "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}"
    },
    {
        "d": "www.mozbrowser.nl",
        "b": "mozbrowser",
        "u": "http://www.mozbrowser.nl/forum/search.php?keywords={{{s}}}"
    },
    {
        "d": "dxr.mozilla.org",
        "b": "mozdxr",
        "u": "https://dxr.mozilla.org/mozilla-central/search?q={{{s}}}"
    },
    {
        "d": "support.mozilla.org",
        "b": "mozillasupport",
        "u": "https://support.mozilla.org/search?q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "moz",
        "u": "https://www.google.com/cse?cx=002443141534113389537%3Aysdmevkkknw&cof=FORID%3A0&q={{{s}}}"
    },
    {
        "d": "searchfox.org",
        "b": "mozsf",
        "u": "http://searchfox.org/mozilla-central/search?q={{{s}}}"
    },
    {
        "d": "wiki.mozilla.org",
        "b": "mozwiki",
        "u": "https://wiki.mozilla.org/index.php?search={{{s}}}"
    },
    {
        "d": "matplotlib.org",
        "b": "mpl",
        "u": "https://matplotlib.org/search.html?q={{{s}}} "
    },
    {
        "d": "www.medienpaedagogik-praxis.de",
        "b": "mppb",
        "u": "https://www.medienpaedagogik-praxis.de/?s={{{s}}}"
    },
    {
        "d": "www.macrumors.com",
        "b": "mr",
        "u": "http://www.macrumors.com/search?s={{{s}}}"
    },
    {
        "d": "www.themrphone.com",
        "b": "mrphone",
        "u": "https://www.themrphone.com/search/{{{s}}}"
    },
    {
        "d": "docs.microsoft.com",
        "b": "mscpp",
        "u": "https://docs.microsoft.com/en-us/search/index?search={{{s}}}&scope=C%2B%2B"
    },
    {
        "d": "docs.microsoft.com",
        "b": "msd",
        "u": "https://docs.microsoft.com/en-us/search/index?search={{{s}}}"
    },
    {
        "d": "social.msdn.microsoft.com",
        "b": "msdn",
        "u": "http://social.msdn.microsoft.com/Search/en-US?query={{{s}}}&ac=8"
    },
    {
        "d": "docs.microsoft.com",
        "b": "msdocs",
        "u": "https://docs.microsoft.com/en-us/search/index?search={{{s}}}"
    },
    {
        "d": "docs.microsoft.com",
        "b": "msdotnet",
        "u": "https://docs.microsoft.com/en-us/search/index?search={{{s}}}&scope=.NET"
    },
    {
        "d": "magento.stackexchange.com",
        "b": "mse",
        "u": "https://magento.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "mashable.com",
        "b": "msh",
        "u": "http://mashable.com/follow/search/?q={{{s}}}&commit=Search"
    },
    {
        "d": "us.msi.com",
        "b": "msi",
        "u": "https://us.msi.com/search/{{{s}}}"
    },
    {
        "d": "support.microsoft.com",
        "b": "mskb",
        "u": "https://support.microsoft.com/en-us/search?query={{{s}}}"
    },
    {
        "d": "www.microsoft.com",
        "b": "msmalware",
        "u": "http://www.microsoft.com/security/portal/Threat/Encyclopedia/Search.aspx?query={{{s}}}"
    },
    {
        "d": "search.microsoft.com",
        "b": "ms",
        "u": "http://search.microsoft.com/results.aspx?mkt=en-US&form=MSHOME&setlang=en-US&q={{{s}}}"
    },
    {
        "d": "msmvps.com",
        "b": "msmvps",
        "u": "http://msmvps.com/search/SearchResults.aspx?q={{{s}}}&o=Relevance"
    },
    {
        "d": "docs.microsoft.com",
        "b": "ms.net",
        "u": "https://docs.microsoft.com/en-us/dotnet/api/?view=netframework-4.7&term={{{s}}}"
    },
    {
        "d": "meta.stackoverflow.com",
        "b": "mso",
        "u": "https://meta.stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "mspoweruser.com",
        "b": "mspu",
        "u": "http://mspoweruser.com/?s={{{s}}}"
    },
    {
        "d": "social.technet.microsoft.com",
        "b": "mssql",
        "u": "https://social.technet.microsoft.com/Search/en-US/sqlserver?query={{{s}}}&Refinement=30&ac=4"
    },
    {
        "d": "www.catalog.update.microsoft.com",
        "b": "msupdate",
        "u": "https://www.catalog.update.microsoft.com/Search.aspx?q={{{s}}}"
    },
    {
        "d": "material.io",
        "b": "mtrl",
        "u": "https://material.io/search.html?q={{{s}}}"
    },
    {
        "d": "material-ui.com",
        "b": "mui",
        "u": "https://material-ui.com/api/{{{s}}}"
    },
    {
        "d": "macupdate.com",
        "b": "mu",
        "u": "http://macupdate.com/find/mac/{{{s}}}"
    },
    {
        "d": "www.makeuseof.com",
        "b": "muo",
        "u": "https://www.makeuseof.com/?s={{{s}}}"
    },
    {
        "d": "murlengine.com",
        "b": "murl",
        "u": "https://murlengine.com/api/en/search.php?q={{{s}}}"
    },
    {
        "d": "www.muycomputer.com",
        "b": "muycomputer",
        "u": "https://www.muycomputer.com/?s={{{s}}}"
    },
    {
        "d": "www.muylinux.com",
        "b": "muylinux",
        "u": "https://www.muylinux.com/?s={{{s}}}"
    },
    {
        "d": "search.muz.li",
        "b": "muzli",
        "u": "https://search.muz.li/search/{{{s}}}"
    },
    {
        "d": "mvnrepository.com",
        "b": "mvnrepository",
        "u": "http://mvnrepository.com/search.html?query={{{s}}}"
    },
    {
        "d": "mvnrepository.com",
        "b": "mvnrep",
        "u": "http://mvnrepository.com/search.html?query={{{s}}}:"
    },
    {
        "d": "mvnrepository.com",
        "b": "mvn",
        "u": "https://mvnrepository.com/search?q={{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "mx",
        "u": "http://mxtoolbox.com/SuperTool.aspx?action=mx%3a{{{s}}}&run=networktools"
    },
    {
        "d": "mypdns.org",
        "b": "mydns",
        "u": "https://mypdns.org/trac/search?q={{{s}}}"
    },
    {
        "d": "new.myfonts.com",
        "b": "myfonts",
        "u": "http://new.myfonts.com/search/{{{s}}}/"
    },
    {
        "d": "dev.mysql.com",
        "b": "mysql",
        "u": "https://duckduckgo.com/search/?q={{{s}}}+site:dev.mysql.com"
    },
    {
        "d": "notabug.org",
        "b": "nab",
        "u": "https://notabug.org/explore/repos?q={{{s}}}"
    },
    {
        "d": "www.naijatoptech.com.ng",
        "b": "naijatoptech",
        "u": "https://www.naijatoptech.com.ng/search?q={{{s}}}"
    },
    {
        "d": "nakedsecurity.sophos.com",
        "b": "nakedsec",
        "u": "https://nakedsecurity.sophos.com/?s={{{s}}}"
    },
    {
        "d": "www.name.com",
        "b": "name",
        "u": "http://www.name.com/name?&domain={{{s}}}"
    },
    {
        "d": "www.native-instruments.com",
        "b": "nativeinstruments",
        "u": "https://www.native-instruments.com/en/reaktor-community/reaktor-user-library/all/all/all/all/{{{s}}}/latest/1/all/?q={{{s}}}&t=userlib"
    },
    {
        "d": "www.notebookcheck.com",
        "b": "nbcde",
        "u": "https://www.notebookcheck.com/Notebook-Suche.1095.0.html?&manufacturer=&model={{{s}}}"
    },
    {
        "d": "www.notebookcheck.net",
        "b": "nbc",
        "u": "https://www.notebookcheck.net/Google-Search.36690.0.html?q={{{s}}}"
    },
    {
        "d": "netbsd.gw.com",
        "b": "nbsdman",
        "u": "http://netbsd.gw.com/cgi-bin/man-cgi?{{{s}}}"
    },
    {
        "d": "www.namecheap.com",
        "b": "ncheap",
        "u": "http://www.namecheap.com/domains/domain-name-search/results.aspx?domain={{{s}}}"
    },
    {
        "d": "www.namecheap.com",
        "b": "nc",
        "u": "https://www.namecheap.com/domains/registration/results.aspx?domain={{{s}}} "
    },
    {
        "d": "www.ncsc.nl",
        "b": "ncsc",
        "u": "https://www.ncsc.nl/zoeken?trefwoord={{{s}}}"
    },
    {
        "d": "neo4j.com",
        "b": "neo4j",
        "u": "https://neo4j.com/?s={{{s}}}"
    },
    {
        "d": "www.neos.io",
        "b": "neos",
        "u": "https://www.neos.io/download-and-extend/packages.html?search={{{s}}}"
    },
    {
        "d": "www.neowin.net",
        "b": "neowin",
        "u": "http://www.neowin.net/search/news?terms={{{s}}}"
    },
    {
        "d": "wiki.nesdev.com",
        "b": "nesdev",
        "u": "http://wiki.nesdev.com/w/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=1"
    },
    {
        "d": "www.netacad.com",
        "b": "netacad",
        "u": "https://www.netacad.com/search/node/{{{s}}}"
    },
    {
        "d": "docs.microsoft.com",
        "b": "netapi",
        "u": "https://docs.microsoft.com/dotnet/api/?term={{{s}}}"
    },
    {
        "d": "man.netbsd.org",
        "b": "netbsdman",
        "u": "http://man.netbsd.org/man/{{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "netbsd",
        "u": "http://www.google.com/cse?cx=006277936787196004968:mbdhrauy1wm&q=guide&oq=guide&gs_l=partner.12...0.0.1.52071.0.0.0.0.0.0.0.0..0.0.gsnos%2Cn%3D13..0.0.0jj1..1ac.#gsc.tab=0&gsc.q={{{s}}}&gsc.page=1"
    },
    {
        "d": "docs.microsoft.com",
        "b": "netcore2api",
        "u": "https://docs.microsoft.com/en-us/dotnet/api/?view=netcore-2.0&term={{{s}}}"
    },
    {
        "d": "toolbar.netcraft.com",
        "b": "netcraft",
        "u": "http://toolbar.netcraft.com/site_report?url={{{s}}}"
    },
    {
        "d": "www.searchdotnet.com",
        "b": ".net",
        "u": "http://www.searchdotnet.com/results.aspx?cx=002213837942349435108:jki1okx03jq&q={{{s}}}&sa=Search+.NET+sites&cof=FORID:9&siteurl=www.searchdotnet.com/"
    },
    {
        "d": "netgear.com",
        "b": "netgear",
        "u": "http://netgear.com/Search.aspx?q={{{s}}}"
    },
    {
        "d": "nethackwiki.com",
        "b": "nethack",
        "u": "http://nethackwiki.com/mediawiki/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "netolink.com",
        "b": "netolink",
        "u": "https://netolink.com/?s={{{s}}}"
    },
    {
        "d": "referencesource.microsoft.com",
        "b": "netsrc",
        "u": "http://referencesource.microsoft.com/#q={{{s}}}"
    },
    {
        "d": "code.tutsplus.com",
        "b": "nettuts",
        "u": "https://code.tutsplus.com/tutorials/search/{{{s}}}"
    },
    {
        "d": "networkpeople.nl",
        "b": "netwerk",
        "u": "http://networkpeople.nl/?s={{{s}}}"
    },
    {
        "d": "networkpeople.nl",
        "b": "networkpeople",
        "u": "http://networkpeople.nl/?s={{{s}}}"
    },
    {
        "d": "newffr.com",
        "b": "newffr",
        "u": "http://newffr.com/search.php?words={{{s}}}&mode=1&s_in_forum=1"
    },
    {
        "d": "apps.nextcloud.com",
        "b": "nextcloudapp",
        "u": "https://apps.nextcloud.com/?search={{{s}}}"
    },
    {
        "d": "v2.angular.io",
        "b": "ng2",
        "u": "https://v2.angular.io/api?search={{{s}}}"
    },
    {
        "d": "angular.io",
        "b": "ng4",
        "u": "https://angular.io/api?query={{{s}}}"
    },
    {
        "d": "v8.angular.io",
        "b": "ng8",
        "u": "https://v8.angular.io/api?search={{{s}}}"
    },
    {
        "d": "angular.io",
        "b": "ng",
        "u": "https://angular.io/api?query={{{s}}}"
    },
    {
        "d": "www.nginx.com",
        "b": "nginx",
        "u": "https://www.nginx.com/resources/wiki/search/?q={{{s}}}"
    },
    {
        "d": "wiki.nginx.org",
        "b": "nginxwiki",
        "u": "http://wiki.nginx.org/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "niebezpiecznik.pl",
        "b": "niebezpiecznik",
        "u": "https://niebezpiecznik.pl/?s={{{s}}}"
    },
    {
        "d": "www.nikonusa.com",
        "b": "nikon",
        "u": "http://www.nikonusa.com/en/about-nikon/search.page?searchCollection=SEARCH_ALL&q={{{s}}}"
    },
    {
        "d": "kb.nimvelo.com",
        "b": "nimvelo",
        "u": "http://kb.nimvelo.com/search?query={{{s}}}"
    },
    {
        "d": "search.ni.com",
        "b": "ni",
        "u": "http://search.ni.com/nisearch/app/main/p/bot/no/ap/global/lang/en/pg/1/q/{{{s}}}/"
    },
    {
        "d": "www.nintendolife.com",
        "b": "ninlife",
        "u": "http://www.nintendolife.com/search?q={{{s}}}&submit=Go"
    },
    {
        "d": "www.nirsoft.net",
        "b": "nirsoft",
        "u": "http://www.nirsoft.net/search_freeware_result_new.html?cx=partner-pub-5286073190998405%3A5399172980&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa=Search&siteurl=nirsoft.net%2F&ref=google.com%2F"
    },
    {
        "d": "discourse.nixos.org",
        "b": "nixcourse",
        "u": "https://discourse.nixos.org/search?q={{{s}}}"
    },
    {
        "d": "www.cyberciti.biz",
        "b": "nixcraft",
        "u": "http://www.cyberciti.biz/faq/?s={{{s}}}"
    },
    {
        "d": "nixos.wiki",
        "b": "nix",
        "u": "https://nixos.wiki/index.php?search={{{s}}}"
    },
    {
        "d": "nixos.org",
        "b": "nixopt",
        "u": "https://nixos.org/nixos/options.html#{{{s}}}"
    },
    {
        "d": "nixos.wiki",
        "b": "nixos",
        "u": "https://nixos.wiki/index.php?search={{{s}}}"
    },
    {
        "d": "nixos.wiki",
        "b": "nixoswiki",
        "u": "https://nixos.wiki/index.php?search={{{s}}}"
    },
    {
        "d": "nixos.org",
        "b": "nixpkg",
        "u": "https://nixos.org/nixos/packages.html?query={{{s}}}"
    },
    {
        "d": "nixos.org",
        "b": "nixpkgs",
        "u": "https://nixos.org/nixos/packages.html?query={{{s}}}"
    },
    {
        "d": "www.nltk.org",
        "b": "nltk",
        "u": "http://www.nltk.org/search.html?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "nodejs",
        "u": "https://duckduckgo.com/?q=!node+{{{s}}}"
    },
    {
        "d": "nodejs.org",
        "b": "node",
        "u": "http://nodejs.org/api/{{{s}}}.html"
    },
    {
        "d": "www.noi.cn",
        "b": "noi",
        "u": "http://www.noi.cn/search.html?q={{{s}}}"
    },
    {
        "d": "www.norid.no",
        "b": "norid",
        "u": "http://www.norid.no/index.html?charset=UTF-8&page=index&sok=Søk&query={{{s}}}"
    },
    {
        "d": "thenounproject.com",
        "b": "nounproject",
        "u": "http://thenounproject.com/search/?q={{{s}}}"
    },
    {
        "d": "npmjs.com",
        "b": "npmd",
        "u": "https://npmjs.com/package/{{{s}}}"
    },
    {
        "d": "www.npmjs.com",
        "b": "npmjs",
        "u": "https://www.npmjs.com/search?q={{{s}}}"
    },
    {
        "d": "www.npmjs.com",
        "b": "npm",
        "u": "https://www.npmjs.com/search?q={{{s}}}"
    },
    {
        "d": "npmsearch.com",
        "b": "npmsearch",
        "u": "https://npmsearch.com/?q={{{s}}}"
    },
    {
        "d": "npms.io",
        "b": "npmsio",
        "u": "https://npms.io/search?q={{{s}}}"
    },
    {
        "d": "npmsearch.com",
        "b": "npms",
        "u": "http://npmsearch.com/?q={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "nr",
        "u": "https://github.com/NixOS/nixpkgs/search?q={{{s}}}"
    },
    {
        "d": "nuget.org",
        "b": "nuget",
        "u": "http://nuget.org/packages?q={{{s}}}&sortOrder=package-download-count"
    },
    {
        "d": "docs.thefoundry.co.uk",
        "b": "nukepy",
        "u": "https://docs.thefoundry.co.uk/products/nuke/developers/80/pythondevguide/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "null-byte.wonderhowto.com",
        "b": "nullbyte",
        "u": "https://null-byte.wonderhowto.com/search/{{{s}}} "
    },
    {
        "d": "docs.scipy.org",
        "b": "numpy",
        "u": "http://docs.scipy.org/doc/numpy/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "duckduckgo.com",
        "b": "nvidia",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Anvidia.com&ia=web"
    },
    {
        "d": "overapi.com",
        "b": "oapi",
        "u": "http://overapi.com/{{{s}}}"
    },
    {
        "d": "openbuilds.com",
        "b": "ob",
        "u": "https://openbuilds.com/search/49203883/?q={{{s}}}"
    },
    {
        "d": "build.opensuse.org",
        "b": "obs",
        "u": "https://build.opensuse.org/search?search_text={{{s}}} "
    },
    {
        "d": "docs.obspy.org",
        "b": "obspydev",
        "u": "http://docs.obspy.org/master/search.html?q={{{s}}}"
    },
    {
        "d": "docs.obspy.org",
        "b": "obspy",
        "u": "http://docs.obspy.org/search.html?q={{{s}}}"
    },
    {
        "d": "caml.inria.fr",
        "b": "ocaml",
        "u": "http://caml.inria.fr/pub/docs/manual-ocaml/libref/{{{s}}}.html"
    },
    {
        "d": "camlspotter.github.io",
        "b": "ocamloscope",
        "u": "https://camlspotter.github.io/ocamloscope.html?q={{{s}}}"
    },
    {
        "d": "odoo-community.org",
        "b": "ocamod",
        "u": "https://odoo-community.org/shop?search={{{s}}}"
    },
    {
        "d": "www.overclockers.at",
        "b": "ocat",
        "u": "https://www.overclockers.at/search.php?action=simplesearch&query={{{s}}}"
    },
    {
        "d": "openclassrooms.com",
        "b": "occ",
        "u": "https://openclassrooms.com/courses?q={{{s}}}"
    },
    {
        "d": "camlspotter.github.io",
        "b": "oco",
        "u": "https://camlspotter.github.io/ocamloscope.html?q={{{s}}}"
    },
    {
        "d": "www.opendesktop.org",
        "b": "ocs",
        "u": "https://www.opendesktop.org/search?projectSearchText={{{s}}}"
    },
    {
        "d": "www.odoo.com",
        "b": "odoo",
        "u": "https://www.odoo.com/apps?search={{{s}}}"
    },
    {
        "d": "offliberty.com",
        "b": "offliberty",
        "u": "http://offliberty.com/#{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "of",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Ahttp%3A%2F%2Fforum.openframeworks.cc"
    },
    {
        "d": "www.ohloh.net",
        "b": "ohloh",
        "u": "https://www.ohloh.net/search?q={{{s}}}"
    },
    {
        "d": "orbithangar.com",
        "b": "ohm",
        "u": "http://orbithangar.com/advsearch.php?text={{{s}}}"
    },
    {
        "d": "www.openhub.net",
        "b": "oh",
        "u": "https://www.openhub.net/p?q={{{s}}}"
    },
    {
        "d": "www.oid-info.com",
        "b": "oid",
        "u": "http://www.oid-info.com/cgi-bin/display?oid={{{s}}}&submit=Display&action=display"
    },
    {
        "d": "www.oldapps.com",
        "b": "oldapps",
        "u": "http://www.oldapps.com/betasearch.php?cx=007779823686351122034%3Ai7o_lb6edjm&cof=FORID%3A9&ie=UTF-8&q={{{s}}}&siteurl="
    },
    {
        "d": "search.cpan.org",
        "b": "oldcpan",
        "u": "http://search.cpan.org/search?query={{{s}}}&mode=all"
    },
    {
        "d": "www.oldversion.com",
        "b": "oldversion",
        "u": "http://www.oldversion.com/search?query={{{s}}}"
    },
    {
        "d": "www.oldversion.com",
        "b": "oldv",
        "u": "http://www.oldversion.com/search?query={{{s}}}"
    },
    {
        "d": "www.omgchrome.com",
        "b": "omgchrome",
        "u": "http://www.omgchrome.com/?s={{{s}}}"
    },
    {
        "d": "www.omgchrome.com",
        "b": "omgc",
        "u": "http://www.omgchrome.com/?s={{{s}}}"
    },
    {
        "d": "omghackers.com",
        "b": "omgh",
        "u": "https://omghackers.com/?s={{{s}}}"
    },
    {
        "d": "www.omgubuntu.co.uk",
        "b": "omgubuntu",
        "u": "http://www.omgubuntu.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.omgubuntu.co.uk",
        "b": "omgu",
        "u": "http://www.omgubuntu.co.uk/?s={{{s}}}"
    },
    {
        "d": "www.onmsft.com",
        "b": "oms",
        "u": "https://www.onmsft.com/?s={{{s}}}"
    },
    {
        "d": "www.onemorething.nl",
        "b": "omt",
        "u": "http://www.onemorething.nl/zoeken/{{{s}}}/"
    },
    {
        "d": "duckduckgo.com",
        "b": "opam",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:https://opam.ocaml.org/packages"
    },
    {
        "d": "fr.openclassrooms.com",
        "b": "opc",
        "u": "http://fr.openclassrooms.com/recherche/?search={{{s}}}"
    },
    {
        "d": "man.openbsd.org",
        "b": "openbsdman",
        "u": "http://man.openbsd.org/?query={{{s}}}&apropos=0&sec=0&arch=default&manpath=OpenBSD-current"
    },
    {
        "d": "marc.info",
        "b": "openbsdmisc",
        "u": "http://marc.info/?l=openbsd-misc&w=2&r=1&s={{{s}}}&q=b"
    },
    {
        "d": "man.openbsd.org",
        "b": "openbsd",
        "u": "http://man.openbsd.org/?query={{{s}}}"
    },
    {
        "d": "marc.info",
        "b": "openbsdports",
        "u": "https://marc.info/?l=openbsd-ports&w=2&r=1&s={{{s}}}&q=b"
    },
    {
        "d": "docs.opencv.org",
        "b": "opencv",
        "u": "http://docs.opencv.org/3.0-last-rst/search.html?q={{{s}}}"
    },
    {
        "d": "www.opendesktop.org",
        "b": "opendesktop",
        "u": "https://www.opendesktop.org/search?projectSearchText={{{s}}}"
    },
    {
        "d": "www.opendns.com",
        "b": "opendns",
        "u": "http://www.opendns.com/search/?s={{{s}}}"
    },
    {
        "d": "openfontlibrary.org",
        "b": "openfont",
        "u": "http://openfontlibrary.org/en/search?query={{{s}}}"
    },
    {
        "d": "open-freax.fr",
        "b": "openfreax",
        "u": "http://open-freax.fr/?s={{{s}}}"
    },
    {
        "d": "opengameart.org",
        "b": "openga",
        "u": "http://opengameart.org/art-search?keys={{{s}}}"
    },
    {
        "d": "www.khronos.org",
        "b": "openglwiki",
        "u": "https://www.khronos.org/opengl/wiki_opengl/index.php?search={{{s}}}"
    },
    {
        "d": "www.openhub.net",
        "b": "openhub",
        "u": "https://www.openhub.net/p?query={{{s}}}&sort=relevance"
    },
    {
        "d": "www.opennet.ru",
        "b": "opennet",
        "u": "http://www.opennet.ru/search.shtml?exclude=index%7C%2Fman.shtml&words={{{s}}}"
    },
    {
        "d": "openports.se",
        "b": "openports",
        "u": "http://openports.se/search.php?so={{{s}}}"
    },
    {
        "d": "www.openprocessing.org",
        "b": "openprocessing",
        "u": "http://www.openprocessing.org/search/?q={{{s}}}"
    },
    {
        "d": "openradar.appspot.com",
        "b": "openradar",
        "u": "http://openradar.appspot.com/search?query={{{s}}}"
    },
    {
        "d": "openrepos.net",
        "b": "openrepos",
        "u": "https://openrepos.net/search/node/{{{s}}}"
    },
    {
        "d": "opensource.com",
        "b": "opensource",
        "u": "https://opensource.com/sitewide-search?search_api_views_fulltext={{{s}}}"
    },
    {
        "d": "en.opensuse.org",
        "b": "opensuse",
        "u": "http://en.opensuse.org/Special:Search?search={{{s}}}"
    },
    {
        "d": "software.opensuse.org",
        "b": "opensusesoftware",
        "u": "http://software.opensuse.org/search?q={{{s}}}"
    },
    {
        "d": "openuserjs.org",
        "b": "openuserjs",
        "u": "https://openuserjs.org/?q={{{s}}}"
    },
    {
        "d": "addons.opera.com",
        "b": "operaext",
        "u": "https://addons.opera.com/addons/extensions/?query={{{s}}}&order=new&top=0"
    },
    {
        "d": "addons.opera.com",
        "b": "opera",
        "u": "https://addons.opera.com/addons/extensions/?query={{{s}}}"
    },
    {
        "d": "www.optomaeurope.com",
        "b": "optoma",
        "u": "https://www.optomaeurope.com/search?query={{{s}}}"
    },
    {
        "d": "www.optus.com.au",
        "b": "optus",
        "u": "https://www.optus.com.au/customercentre/search?query={{{s}}}"
    },
    {
        "d": "www.opus-software.com.br",
        "b": "opussoftware",
        "u": "http://www.opus-software.com.br/?s={{{s}}}"
    },
    {
        "d": "www.oracle.com",
        "b": "oracle",
        "u": "https://www.oracle.com/search/results?Ntt={{{s}}}&Dy=1&Nty=1&Ntk=SI-ALL5"
    },
    {
        "d": "docs.oracle.com",
        "b": "oradocs",
        "u": "https://docs.oracle.com/apps/search/search.jsp?q={{{s}}}"
    },
    {
        "d": "search.oreilly.com",
        "b": "oreilly",
        "u": "http://search.oreilly.com/?q={{{s}}}"
    },
    {
        "d": "ore.spongepowered.org",
        "b": "ore",
        "u": "https://ore.spongepowered.org/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "org",
        "u": "https://duckduckgo.com/?q=site:http://orgmode.org/manual/+{{{s}}}"
    },
    {
        "d": "learning.oreilly.com",
        "b": "orly",
        "u": "https://learning.oreilly.com/search/?query={{{s}}}"
    },
    {
        "d": "osaa.dk",
        "b": "osaa",
        "u": "http://osaa.dk/wiki/index.php?title=Speciel%3ASearch&search={{{s}}}&go=Gå+til"
    },
    {
        "d": "wiki.osdev.org",
        "b": "osdev",
        "u": "https://wiki.osdev.org/index.php?title=Special%3ASearch&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "osdn.net",
        "b": "osdn",
        "u": "https://osdn.net/search/?iq={{{s}}}"
    },
    {
        "d": "opensource.org",
        "b": "osi",
        "u": "http://opensource.org/search/node/{{{s}}}"
    },
    {
        "d": "libraries.io",
        "b": "osl",
        "u": "http://libraries.io/search?q={{{s}}}"
    },
    {
        "d": "discourse.osmc.tv",
        "b": "osmc",
        "u": "https://discourse.osmc.tv/search?q={{{s}}}"
    },
    {
        "d": "www.osnews.com",
        "b": "osnews",
        "u": "http://www.osnews.com/search?q={{{s}}}"
    },
    {
        "d": "software.opensuse.org",
        "b": "os",
        "u": "http://software.opensuse.org/search?utf8=✓&q={{{s}}}&search_devel=false&search_unsupported=false&baseproject=openSUSE:13.1"
    },
    {
        "d": "www.osstatus.com",
        "b": "oss",
        "u": "https://www.osstatus.com/search/results?platform=all&framework=all&search={{{s}}}"
    },
    {
        "d": "www.ostechnix.com",
        "b": "ostech",
        "u": "https://www.ostechnix.com/?s={{{s}}}"
    },
    {
        "d": "en.opensuse.org",
        "b": "osw",
        "u": "https://en.opensuse.org/index.php?title=Special%3ASearch&profile=default&search={{{s}}}&fulltext=Search"
    },
    {
        "d": "osxdaily.com",
        "b": "osxdaily",
        "u": "http://osxdaily.com/gsearch/?cx=partner-pub-7321635426958037%3A1x5yj0-316e&cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}&sa=Search"
    },
    {
        "d": "developer.apple.com",
        "b": "osx",
        "u": "https://developer.apple.com/search/?q={{{s}}}&platform=OS%20X"
    },
    {
        "d": "community.oracle.com",
        "b": "otn",
        "u": "https://community.oracle.com/search.jspa?q={{{s}}}"
    },
    {
        "d": "our.umbraco.com",
        "b": "ourdocs",
        "u": "https://our.umbraco.com/search?q={{{s}}}&cat=documentation"
    },
    {
        "d": "www.outclock.org",
        "b": "outclock",
        "u": "http://www.outclock.org/index.php?searchword={{{s}}}&searchphrase=all&Itemid=548&option=com_search"
    },
    {
        "d": "store.ovi.com",
        "b": "ovi",
        "u": "http://store.ovi.com/search?q={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "ov",
        "u": "http://stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "www.owasp.org",
        "b": "owasp",
        "u": "https://www.owasp.org/index.php?search={{{s}}}"
    },
    {
        "d": "www.owler.com",
        "b": "owler",
        "u": "https://www.owler.com/iaApp/browsecompanyprofiles.htm?searchTerm={{{s}}}"
    },
    {
        "d": "openwrt.org",
        "b": "owrt",
        "u": "https://openwrt.org/doku.php?do=search&id=start&q={{{s}}}"
    },
    {
        "d": "pitchfork.com",
        "b": "p4k",
        "u": "http://pitchfork.com/search/?query={{{s}}}"
    },
    {
        "d": "p5js.org",
        "b": "p5",
        "u": "https://p5js.org/reference/#/p5/{{{s}}}"
    },
    {
        "d": "modules.perl6.org",
        "b": "p6mod",
        "u": "https://modules.perl6.org/search/?q={{{s}}}"
    },
    {
        "d": "www.archlinux.org",
        "b": "pac",
        "u": "https://www.archlinux.org/packages/?sort=&q={{{s}}}&maintainer=&flagged="
    },
    {
        "d": "packagist.org",
        "b": "packagist",
        "u": "https://packagist.org/search/?q={{{s}}}"
    },
    {
        "d": "packetstormsecurity.com",
        "b": "packet",
        "u": "http://packetstormsecurity.com/search/?q={{{s}}}"
    },
    {
        "d": "packman.links2linux.org",
        "b": "packman",
        "u": "http://packman.links2linux.org/search?q={{{s}}}"
    },
    {
        "d": "packagist.org",
        "b": "pack",
        "u": "https://packagist.org/search/?q={{{s}}}"
    },
    {
        "d": "www.archlinux.org",
        "b": "pacman",
        "u": "https://www.archlinux.org/packages/?sort=&q={{{s}}}"
    },
    {
        "d": "pagely.com",
        "b": "pagely",
        "u": "https://pagely.com/?s={{{s}}}"
    },
    {
        "d": "forum.palemoon.org",
        "b": "palemoon",
        "u": "http://forum.palemoon.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.paloaltonetworks.com",
        "b": "paloalto",
        "u": "https://www.paloaltonetworks.com/documentation/document-search.html?q={{{s}}}"
    },
    {
        "d": "pandas.pydata.org",
        "b": "pandas",
        "u": "http://pandas.pydata.org/pandas-docs/stable/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "mojepanstwo.pl",
        "b": "panstwo",
        "u": "https://mojepanstwo.pl/?q={{{s}}}"
    },
    {
        "d": "www.pantone.com",
        "b": "pantone",
        "u": "https://www.pantone.com/color-finder?q={{{s}}}"
    },
    {
        "d": "portableapps.com",
        "b": "papps",
        "u": "http://portableapps.com/search/node/{{{s}}}%20type%3Aapp"
    },
    {
        "d": "www.parabola.nu",
        "b": "parabola",
        "u": "https://www.parabola.nu/packages/?q={{{s}}}"
    },
    {
        "d": "wiki.parabola.nu",
        "b": "parabolaw",
        "u": "https://wiki.parabola.nu/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "wiki.parabola.nu",
        "b": "parawiki",
        "u": "https://wiki.parabola.nu/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.parker.com",
        "b": "parker",
        "u": "https://www.parker.com/portal/site/PARKER/menuitem.c9e5838e8a4c0934704b7b10237ad1ca/?selectCategory=all&vgnextfmt=EN&vgnextoid=941b13fc0fa14110VgnVCM10000032a71dacRCRD&newSearch=1&searchbox={{{s}}}"
    },
    {
        "d": "www.passmark.com",
        "b": "passmark",
        "u": "http://www.passmark.com/search/zoomsearch.php?zoom_query={{{s}}}&search=Search"
    },
    {
        "d": "wiki.archusers.ir",
        "b": "paw",
        "u": "http://wiki.archusers.ir/index.php?search={{{s}}}"
    },
    {
        "d": "rpm.pbone.net",
        "b": "pbone",
        "u": "http://rpm.pbone.net/index.php3?stat=3&search={{{s}}}&Search.x=0&Search.y=0&simple=1&srodzaj=1"
    },
    {
        "d": "www.planet-casio.com",
        "b": "pcasio",
        "u": "https://www.planet-casio.com/Fr/aide/recherche.php?q={{{s}}}"
    },
    {
        "d": "www.pcguia.pt",
        "b": "pcguia",
        "u": "http://www.pcguia.pt/?s={{{s}}}"
    },
    {
        "d": "www.pcisecuritystandards.org",
        "b": "pcidss",
        "u": "https://www.pcisecuritystandards.org/search/search.php?query={{{s}}}"
    },
    {
        "d": "packagecontrol.io",
        "b": "pcio",
        "u": "https://packagecontrol.io/search/{{{s}}}"
    },
    {
        "d": "docs.pointclouds.org",
        "b": "pcl",
        "u": "http://docs.pointclouds.org/trunk/search.php?query={{{s}}}"
    },
    {
        "d": "www.pcmag.com",
        "b": "pcmag",
        "u": "http://www.pcmag.com/search_redirect/?qry={{{s}}}&searchSection=0&site=3"
    },
    {
        "d": "www.reddit.com",
        "b": "pcmr",
        "u": "https://www.reddit.com/r/pcmasterrace/search?q={{{s}}}&restrict_sr=on&sort=relevance&t=all"
    },
    {
        "d": "packagecontrol.io",
        "b": "pctrl",
        "u": "https://packagecontrol.io/search/{{{s}}}"
    },
    {
        "d": "pcworld.bg",
        "b": "pcworldbg",
        "u": "http://pcworld.bg/search/all/{{{s}}}"
    },
    {
        "d": "www.pcworld.com",
        "b": "pcworld",
        "u": "http://www.pcworld.com/search?qt={{{s}}}&tk=srch_top"
    },
    {
        "d": "pecl.php.net",
        "b": "pecl",
        "u": "http://pecl.php.net/package-search.php?pkg_name={{{s}}}"
    },
    {
        "d": "www.peeringdb.com",
        "b": "peeringdb",
        "u": "https://www.peeringdb.com/search?q={{{s}}}"
    },
    {
        "d": "forum.peppermintos.com",
        "b": "peppermintos",
        "u": "https://forum.peppermintos.com/index.php?action=search2&search={{{s}}}"
    },
    {
        "d": "www.python.org",
        "b": "pep",
        "u": "http://www.python.org/dev/peps/pep-{{{s}}}/"
    },
    {
        "d": "forum.grabaperch.com",
        "b": "perch",
        "u": "http://forum.grabaperch.com/forum/search?query={{{s}}}"
    },
    {
        "d": "perldoc.pl",
        "b": "perldoc",
        "u": "https://perldoc.pl/search?q={{{s}}}"
    },
    {
        "d": "modules.perl6.org",
        "b": "perlmod6",
        "u": "http://modules.perl6.org/search/?q={{{s}}}"
    },
    {
        "d": "p3rl.org",
        "b": "perlmod",
        "u": "http://p3rl.org/{{{s}}}"
    },
    {
        "d": "www.perlmonks.org",
        "b": "perlmonks",
        "u": "http://www.perlmonks.org/?node={{{s}}}"
    },
    {
        "d": "p3rl.org",
        "b": "perl",
        "u": "http://p3rl.org/{{{s}}}"
    },
    {
        "d": "www.perseus.tufts.edu",
        "b": "perseus",
        "u": "http://www.perseus.tufts.edu/hopper/searchresults?q={{{s}}}"
    },
    {
        "d": "www.portagefilelist.de",
        "b": "pfl",
        "u": "http://www.portagefilelist.de/site/query/file/?file={{{s}}}&unique_packages=yes&do"
    },
    {
        "d": "www.netgate.com",
        "b": "pfss",
        "u": "https://www.netgate.com/docs/pfsense/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.portablefreeware.com",
        "b": "pfwc",
        "u": "http://www.portablefreeware.com/index.php?q={{{s}}}"
    },
    {
        "d": "www.portablefreeware.com",
        "b": "pfw",
        "u": "http://www.portablefreeware.com/index.php?q={{{s}}}"
    },
    {
        "d": "www.postgresql.org",
        "b": "pgdocs",
        "u": "http://www.postgresql.org/search/?u=%2Fdocs%2F&q={{{s}}}"
    },
    {
        "d": "cse.google.com",
        "b": "phalcondoc",
        "u": "https://cse.google.com/cse?cx=009733439235723428699:lh9ltjgvdz8&q=validation&oq=validation&gs_l=partner.3...77240.79724.1.80133.10.10.0.0.0.0.325.1627.4j2j1j3.10.0.gsnos%2Cn%3D13...0.2495j1017187j10..1ac.1.25.partner..10.0.0.XePJcoeor8s#gsc.tab=0&gsc.q={{{s}}}&gsc.page=1"
    },
    {
        "d": "duckduckgo.com",
        "b": "phas3r",
        "u": "https://duckduckgo.com/?q=inurl%3Ahttps%3A%2F%2Fphotonstorm.github.io%2Fphaser3-docs%2F+{{{s}}}#"
    },
    {
        "d": "www.phonearena.com",
        "b": "phonearena",
        "u": "http://www.phonearena.com/search/term/{{{s}}}"
    },
    {
        "d": "photics.com",
        "b": "pho",
        "u": "https://photics.com/?s={{{s}}}"
    },
    {
        "d": "photics.com",
        "b": "photics",
        "u": "https://photics.com/?s={{{s}}}"
    },
    {
        "d": "www.photocrati.com",
        "b": "photocrati",
        "u": "http://www.photocrati.com/?s={{{s}}}"
    },
    {
        "d": "www.php2python.com",
        "b": "php2py",
        "u": "http://www.php2python.com/wiki/search/?search_term={{{s}}} "
    },
    {
        "d": "secure.php.net",
        "b": "phpnet",
        "u": "https://secure.php.net/manual-lookup.php?pattern={{{s}}}"
    },
    {
        "d": "secure.php.net",
        "b": "php",
        "u": "https://secure.php.net/manual-lookup.php?pattern={{{s}}}"
    },
    {
        "d": "picolisp.com",
        "b": "picolisp",
        "u": "http://picolisp.com/wiki/?home&*Search={{{s}}}"
    },
    {
        "d": "www.pikapkg.com",
        "b": "pika",
        "u": "https://www.pikapkg.com/packages/?q={{{s}}}"
    },
    {
        "d": "forum.pine64.org",
        "b": "pine64",
        "u": "https://forum.pine64.org/search.php?text={{{s}}}&sortby=&order=desc"
    },
    {
        "d": "pinoutsguide.com",
        "b": "pinout",
        "u": "http://pinoutsguide.com/search.php?lang=eng&t={{{s}}}"
    },
    {
        "d": "pinvoke.net",
        "b": "pinvoke",
        "u": "http://pinvoke.net/search.aspx?search={{{s}}}"
    },
    {
        "d": "platformio.org",
        "b": "pio",
        "u": "http://platformio.org/lib/search?query={{{s}}}"
    },
    {
        "d": "pypi.python.org",
        "b": "pip",
        "u": "https://pypi.python.org/pypi?:action=search&term={{{s}}}&submit=search"
    },
    {
        "d": "duckduckgo.com",
        "b": "pitchbook",
        "u": "https://duckduckgo.com/?q=site%3Apitchbook.com%2Fprofiles%2Fcompany+{{{s}}}"
    },
    {
        "d": "pitchfork.com",
        "b": "pitchfork",
        "u": "http://pitchfork.com/search/?query={{{s}}}"
    },
    {
        "d": "pixels.thetangible.in",
        "b": "pixelposts",
        "u": "http://pixels.thetangible.in/search/{{{s}}}"
    },
    {
        "d": "www.archlinux.org",
        "b": "pkg",
        "u": "https://www.archlinux.org/packages/?sort=&q={{{s}}}"
    },
    {
        "d": "pkgs.org",
        "b": "pkgs",
        "u": "http://pkgs.org/search/?keyword={{{s}}}"
    },
    {
        "d": "pkgsrc.se",
        "b": "pkgsrc",
        "u": "http://pkgsrc.se/search.php?so={{{s}}}"
    },
    {
        "d": "packages.knightos.org",
        "b": "pko",
        "u": "https://packages.knightos.org/search?terms={{{s}}}"
    },
    {
        "d": "www.playterm.org",
        "b": "playterm",
        "u": "http://www.playterm.org/s/?tags={{{s}}}"
    },
    {
        "d": "www.buyplm.com",
        "b": "plm",
        "u": "https://www.buyplm.com/general-info/pdxpert-plm-software-search.aspx?query={{{s}}}"
    },
    {
        "d": "plone.org",
        "b": "plone",
        "u": "https://plone.org/@@search?SearchableText={{{s}}}"
    },
    {
        "d": "ploum.net",
        "b": "ploum",
        "u": "https://ploum.net/?s={{{s}}}"
    },
    {
        "d": "www.pluralsight.com",
        "b": "pls",
        "u": "https://www.pluralsight.com/search?q={{{s}}}"
    },
    {
        "d": "forum.palemoon.org",
        "b": "pmfe",
        "u": "https://forum.palemoon.org/search.php?keywords={{{s}}}&fid[0]=9"
    },
    {
        "d": "forum.palemoon.org",
        "b": "pmf",
        "u": "http://forum.palemoon.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "forum.peppermintos.com",
        "b": "pmos",
        "u": "https://forum.peppermintos.com/index.php?action=search2&search={{{s}}}"
    },
    {
        "d": "cocoapods.org",
        "b": "pod",
        "u": "http://cocoapods.org/?q={{{s}}}"
    },
    {
        "d": "en.pons.com",
        "b": "ponsensl",
        "u": "https://en.pons.com/translate?q={{{s}}}&l=ensl&in=en&lf=en"
    },
    {
        "d": "stdlib.ponylang.org",
        "b": "pony",
        "u": "https://stdlib.ponylang.org/search.html?q={{{s}}}"
    },
    {
        "d": "portableapps.com",
        "b": "portableapps",
        "u": "http://portableapps.com/search/node/{{{s}}}"
    },
    {
        "d": "www.portablefreeware.com",
        "b": "portablefreeware",
        "u": "http://www.portablefreeware.com/index.php?q={{{s}}}"
    },
    {
        "d": "portallinux.es",
        "b": "portallinux",
        "u": "http://portallinux.es/?s={{{s}}}"
    },
    {
        "d": "www.iana.org",
        "b": "port",
        "u": "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search={{{s}}}"
    },
    {
        "d": "docs.microsoft.com",
        "b": "posh",
        "u": "https://docs.microsoft.com/en-us/search/index?search={{{s}}}"
    },
    {
        "d": "pubs.opengroup.org",
        "b": "posix",
        "u": "http://pubs.opengroup.org/cgi/kman4.cgi?value={{{s}}}"
    },
    {
        "d": "www.postgresql.org",
        "b": "postgres",
        "u": "http://www.postgresql.org/search/?q={{{s}}}&a=1&submit=Search"
    },
    {
        "d": "www.postgresql.org",
        "b": "postgresql",
        "u": "http://www.postgresql.org/search?q={{{s}}}&a=1&submit=Search"
    },
    {
        "d": "poststatus.com",
        "b": "poststatus",
        "u": "https://poststatus.com/?s={{{s}}}"
    },
    {
        "d": "pouet.net",
        "b": "pouet",
        "u": "http://pouet.net/search.php?what={{{s}}}&type=prod"
    },
    {
        "d": "powerui.kulestar.com",
        "b": "powerui",
        "u": "https://powerui.kulestar.com/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "launchpad.net",
        "b": "ppa",
        "u": "https://launchpad.net/ubuntu/+ppas?name_filter={{{s}}}"
    },
    {
        "d": "codegolf.stackexchange.com",
        "b": "ppcg",
        "u": "https://codegolf.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.pocketpc.ch",
        "b": "ppc",
        "u": "http://www.pocketpc.ch/google.php?cx=partner-pub-5163471580494836%3A7047225119&ie=UTF-8&cof=FORID%3A9&q={{{s}}}&sa.x=0&sa.y=0"
    },
    {
        "d": "developer.paypal.com",
        "b": "ppdev",
        "u": "https://developer.paypal.com/search/?q={{{s}}}"
    },
    {
        "d": "pplware.sapo.pt",
        "b": "pplware",
        "u": "http://pplware.sapo.pt/resultados-da-pesquisa/?cx=partner-pub-1446920356351445%3Apqahidy83wu&cof=FORID%3A11&ie=UTF-8&q={{{s}}}&sa=Pesquisar"
    },
    {
        "d": "thepluginpeople.atlassian.net",
        "b": "pplwiki",
        "u": "https://thepluginpeople.atlassian.net/wiki/dosearchsite.action?queryString={{{s}}}"
    },
    {
        "d": "pragprog.com",
        "b": "pragprog",
        "u": "https://pragprog.com/search?q={{{s}}}"
    },
    {
        "d": "pretty-rfc.herokuapp.com",
        "b": "prfc",
        "u": "http://pretty-rfc.herokuapp.com/search?q={{{s}}}"
    },
    {
        "d": "www.primeinspiration.com",
        "b": "primeinspire",
        "u": "https://www.primeinspiration.com/?s={{{s}}}"
    },
    {
        "d": "www.primfx.com",
        "b": "primfx",
        "u": "https://www.primfx.com/q/{{{s}}}/"
    },
    {
        "d": "www.reddit.com",
        "b": "privacy",
        "u": "https://www.reddit.com/r/privacy/search?q={{{s}}}&restrict_sr=on"
    },
    {
        "d": "community.progress.com",
        "b": "procomm",
        "u": "https://community.progress.com/search#q={{{s}}}"
    },
    {
        "d": "www.producthunt.com",
        "b": "producthunt",
        "u": "https://www.producthunt.com/search?q={{{s}}}"
    },
    {
        "d": "www.proff.no",
        "b": "proff",
        "u": "https://www.proff.no/rollesøk?q={{{s}}}"
    },
    {
        "d": "progaccess33.net",
        "b": "progaccess",
        "u": "https://progaccess33.net/search/?q={{{s}}}"
    },
    {
        "d": "programmers.stackexchange.com",
        "b": "prog",
        "u": "http://programmers.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.codespeedy.com",
        "b": "program",
        "u": "https://www.codespeedy.com/?s={{{s}}}"
    },
    {
        "d": "www.programmableweb.com",
        "b": "programmableweb",
        "u": "http://www.programmableweb.com/search/{{{s}}}"
    },
    {
        "d": "knowledgebase.progress.com",
        "b": "progress",
        "u": "http://knowledgebase.progress.com/pkb_Home?q={{{s}}}"
    },
    {
        "d": "programmers.stackexchange.com",
        "b": "pro",
        "u": "http://programmers.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.prusaprinters.org",
        "b": "prusa",
        "u": "https://www.prusaprinters.org/search/all?q={{{s}}}"
    },
    {
        "d": "www.podcastscience.fm",
        "b": "psci",
        "u": "http://www.podcastscience.fm/?s={{{s}}} "
    },
    {
        "d": "www.psd-dude.com",
        "b": "psddude",
        "u": "http://www.psd-dude.com/tutorials/?search={{{s}}}"
    },
    {
        "d": "www.powershellgallery.com",
        "b": "psg",
        "u": "https://www.powershellgallery.com/packages?q={{{s}}}"
    },
    {
        "d": "www.programmingsimplified.com",
        "b": "psimplified",
        "u": "http://www.programmingsimplified.com/search/node/{{{s}}}"
    },
    {
        "d": "docs.microsoft.com",
        "b": "psmb",
        "u": "https://docs.microsoft.com/en-us/powershell/module/?term={{{s}}}"
    },
    {
        "d": "www.postgresql.org",
        "b": "psql",
        "u": "http://www.postgresql.org/search/?q={{{s}}} &a=1&submit=Search"
    },
    {
        "d": "pste.eu",
        "b": "pste",
        "u": "https://pste.eu/?q={{{s}}}"
    },
    {
        "d": "www.psychologytoday.com",
        "b": "psych22",
        "u": "https://www.psychologytoday.com/us/search/site/{{{s}}}"
    },
    {
        "d": "pub.dev",
        "b": "pubdev",
        "u": "https://pub.dev/packages?q={{{s}}}"
    },
    {
        "d": "packages.ubuntu.com",
        "b": "puc",
        "u": "http://packages.ubuntu.com/{{{s}}}"
    },
    {
        "d": "forge.puppetlabs.com",
        "b": "puppet",
        "u": "http://forge.puppetlabs.com/modules?q={{{s}}}&commit=Go"
    },
    {
        "d": "docs.puppet.com",
        "b": "puptype",
        "u": "https://docs.puppet.com/puppet/latest/type.html#{{{s}}}"
    },
    {
        "d": "puredata.info",
        "b": "puredata",
        "u": "http://puredata.info/search?SearchableText={{{s}}}"
    },
    {
        "d": "pursuit.purescript.org",
        "b": "purs",
        "u": "https://pursuit.purescript.org/search?q={{{s}}}"
    },
    {
        "d": "pursuit.purescript.org",
        "b": "pursuit",
        "u": "http://pursuit.purescript.org/search?q={{{s}}}"
    },
    {
        "d": "programadorwebvalencia.com",
        "b": "pwv",
        "u": "https://programadorwebvalencia.com/blog/?search={{{s}}}"
    },
    {
        "d": "www.phoenixcontact.com",
        "b": "pxc",
        "u": "http://www.phoenixcontact.com/online/portal/us?q={{{s}}}&uri=pxc-search%3Awebsite&library=usen"
    },
    {
        "d": "docs.python.org",
        "b": "py27",
        "u": "https://docs.python.org/2.7/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "py2",
        "u": "https://docs.python.org/2.7/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "py34",
        "u": "https://docs.python.org/3.4/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "py35",
        "u": "https://docs.python.org/3.5/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "py36doc",
        "u": "https://docs.python.org/3.6/library/{{{s}}}.html"
    },
    {
        "d": "docs.python.org",
        "b": "py3fr",
        "u": "https://docs.python.org/fr/3/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "py3k",
        "u": "http://docs.python.org/3/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "py3",
        "u": "https://docs.python.org/3/search.html?q={{{s}}}"
    },
    {
        "d": "bugs.python.org",
        "b": "pybug",
        "u": "https://bugs.python.org/issue?search_text={{{s}}}"
    },
    {
        "d": "www.pygame.org",
        "b": "pygame",
        "u": "https://www.pygame.org/docs/search.html?q={{{s}}}"
    },
    {
        "d": "pylint-messages.wikidot.com",
        "b": "pylm",
        "u": "http://pylint-messages.wikidot.com/messages:{{{s}}}"
    },
    {
        "d": "help.autodesk.com",
        "b": "pymel",
        "u": "https://help.autodesk.com/cloudhelp/2018/ENU/Maya-Tech-Docs/PyMel/search.html?q={{{s}}}&check_keywords=yes"
    },
    {
        "d": "pypi.org",
        "b": "pypa",
        "u": "https://pypi.org/search/?q={{{s}}}"
    },
    {
        "d": "pypi.org",
        "b": "pypi",
        "u": "https://pypi.org/search/?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "py",
        "u": "https://docs.python.org/3/search.html?q={{{s}}}"
    },
    {
        "d": "www.riverbankcomputing.com",
        "b": "pyqt5",
        "u": "https://www.riverbankcomputing.com/static/Docs/PyQt5/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "pyqt.sourceforge.net",
        "b": "pyqt",
        "u": "http://pyqt.sourceforge.net/Docs/PyQt5/search.html?q={{{s}}}"
    },
    {
        "d": "docs.pylonsproject.org",
        "b": "pyramid",
        "u": "https://docs.pylonsproject.org/projects/pyramid/en/latest/search.html?q={{{s}}}"
    },
    {
        "d": "doc-snapshots.qt.io",
        "b": "pyside2",
        "u": "https://doc-snapshots.qt.io/qtforpython/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.pyside.org",
        "b": "pyside",
        "u": "http://www.pyside.org/docs/pyside/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "spark.apache.org",
        "b": "pyspark",
        "u": "https://spark.apache.org/docs/latest/api/python/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "python26",
        "u": "http://docs.python.org/2.6/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "docs.python.org",
        "b": "python27",
        "u": "http://docs.python.org/2.7/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "docs.python.org",
        "b": "python2",
        "u": "https://docs.python.org/2/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "python30",
        "u": "http://docs.python.org/3.0/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "docs.python.org",
        "b": "python31",
        "u": "http://docs.python.org/3.1/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "docs.python.org",
        "b": "python32",
        "u": "http://docs.python.org/3.2/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "docs.python.org",
        "b": "python3",
        "u": "https://docs.python.org/3/search.html?q={{{s}}}"
    },
    {
        "d": "docs.python.org",
        "b": "pythondev",
        "u": "http://docs.python.org/dev/search.html?q={{{s}}} "
    },
    {
        "d": "docs.python.org",
        "b": "python",
        "u": "https://docs.python.org/3/search.html?q={{{s}}}"
    },
    {
        "d": "pyvideo.org",
        "b": "pyvideo",
        "u": "http://pyvideo.org/search?models=videos.video&q={{{s}}}"
    },
    {
        "d": "qiita.com",
        "b": "qiita",
        "u": "http://qiita.com/search?q={{{s}}}"
    },
    {
        "d": "questso.blogspot.com",
        "b": "qoq",
        "u": "https://questso.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "zxing.org",
        "b": "qrdecode",
        "u": "http://zxing.org/w/decode?u={{{s}}}"
    },
    {
        "d": "help.qlik.com",
        "b": "qs",
        "u": "https://help.qlik.com/en-US/search/?q={{{s}}}"
    },
    {
        "d": "www.ssllabs.com",
        "b": "qssl",
        "u": "https://www.ssllabs.com/ssldb/analyze.html?d={{{s}}}&hideResults=on"
    },
    {
        "d": "doc.qt.io",
        "b": "qt4",
        "u": "https://doc.qt.io/qt-4.8/search-results.html?q={{{s}}}"
    },
    {
        "d": "doc.qt.io",
        "b": "qt5",
        "u": "http://doc.qt.io/qt-5/search-results.html?q={{{s}}}"
    },
    {
        "d": "doc.qt.io",
        "b": "qt",
        "u": "https://doc.qt.io/qt-5/search-results.html?q={{{s}}}"
    },
    {
        "d": "www.qualebs.com",
        "b": "qualebs",
        "u": "https://www.qualebs.com/techbay/search?query={{{s}}}"
    },
    {
        "d": "www.quantcast.com",
        "b": "quantcast",
        "u": "https://www.quantcast.com/home/site/search/{{{s}}}"
    },
    {
        "d": "quay.io",
        "b": "quay",
        "u": "https://quay.io/search?q={{{s}}}"
    },
    {
        "d": "queryposts.com",
        "b": "queryposts",
        "u": "http://queryposts.com/?s={{{s}}}"
    },
    {
        "d": "quickdocs.org",
        "b": "quickdocs",
        "u": "http://quickdocs.org/search?q={{{s}}}"
    },
    {
        "d": "www.quirky.com",
        "b": "quirky",
        "u": "https://www.quirky.com/search?query={{{s}}}"
    },
    {
        "d": "qunwang6.github.io",
        "b": "qun",
        "u": "https://qunwang6.github.io/?q={{{s}}}"
    },
    {
        "d": "www.rapid7.com",
        "b": "r7",
        "u": "http://www.rapid7.com/db/search?utf8=%E2%9C%93&q={{{s}}} &t=a"
    },
    {
        "d": "blog.yechiel.me",
        "b": "rabbionrails",
        "u": "https://blog.yechiel.me/search?q={{{s}}}"
    },
    {
        "d": "docs.racket-lang.org",
        "b": "racket",
        "u": "http://docs.racket-lang.org/search/index.html?q={{{s}}}"
    },
    {
        "d": "railscasts.com",
        "b": "railscasts",
        "u": "http://railscasts.com/?search={{{s}}}"
    },
    {
        "d": "apidock.com",
        "b": "railsdock",
        "u": "http://apidock.com/rails/search?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "railsguides",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Aguides.rubyonrails.org"
    },
    {
        "d": "api.rubyonrails.org",
        "b": "rails",
        "u": "http://api.rubyonrails.org/?q={{{s}}}"
    },
    {
        "d": "search.rockwellautomation.com",
        "b": "ralit",
        "u": "http://search.rockwellautomation.com/search?q={{{s}}}&client=literature&filter=0&ie=UTF-8&oe=UTF-8&output=xml_no_dtd&proxystylesheet=literature&site=literature&getfields=*&lang=en&hl=en&num=20&requiredfields=xlanguage%3AMU%7Cxlanguage%3AEN"
    },
    {
        "d": "rgb.to",
        "b": "ral",
        "u": "http://rgb.to/ral/{{{s}}}"
    },
    {
        "d": "ramdajs.com",
        "b": "ramda",
        "u": "http://ramdajs.com/docs/#{{{s}}}"
    },
    {
        "d": "www.raspberrypi.org",
        "b": "raspberrypi",
        "u": "http://www.raspberrypi.org/?s={{{s}}}"
    },
    {
        "d": "www.raywenderlich.com",
        "b": "ray",
        "u": "https://www.raywenderlich.com/?s={{{s}}}"
    },
    {
        "d": "rubydocs.org",
        "b": "rb",
        "u": "https://rubydocs.org/d/ruby-latest/?q={{{s}}}"
    },
    {
        "d": "www.ruby-toolbox.com",
        "b": "rbtb",
        "u": "https://www.ruby-toolbox.com/?q={{{s}}}"
    },
    {
        "d": "www.metric-conversions.org",
        "b": "rbtc",
        "u": "http://www.metric-conversions.org/pt/moeda/bitcoin-em-real.htm?val={{{s}}}"
    },
    {
        "d": "bugzilla.redhat.com",
        "b": "rbugs",
        "u": "https://bugzilla.redhat.com/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "wiki.roblox.com",
        "b": "rbxw",
        "u": "http://wiki.roblox.com/index.php?search={{{s}}}"
    },
    {
        "d": "doc.rust-lang.org",
        "b": "rce",
        "u": "https://doc.rust-lang.org/error-index.html#E{{{s}}}"
    },
    {
        "d": "rust-lang.github.io",
        "b": "rclippy",
        "u": "https://rust-lang.github.io/rust-clippy/master/index.html#{{{s}}}"
    },
    {
        "d": "www.cplusplus.com",
        "b": "rcpp",
        "u": "http://www.cplusplus.com/search.do?q={{{s}}}"
    },
    {
        "d": "rdoc.info",
        "b": "rdoc",
        "u": "http://rdoc.info/find/github?q={{{s}}}"
    },
    {
        "d": "www.rdocumentation.org",
        "b": "rdocs",
        "u": "https://www.rdocumentation.org/search?q={{{s}}}"
    },
    {
        "d": "www.rdocumentation.org",
        "b": "rdocu",
        "u": "https://www.rdocumentation.org/search?q={{{s}}}"
    },
    {
        "d": "www.rdocumentation.org",
        "b": "rdo",
        "u": "https://www.rdocumentation.org/search?q={{{s}}}"
    },
    {
        "d": "rdrr.io",
        "b": "rdrr",
        "u": "https://rdrr.io/search?q={{{s}}}"
    },
    {
        "d": "react.parts",
        "b": "reactparts",
        "u": "https://react.parts/?search={{{s}}}"
    },
    {
        "d": "readthedocs.org",
        "b": "readthedocs",
        "u": "https://readthedocs.org/search/?q={{{s}}}"
    },
    {
        "d": "readwrite.com",
        "b": "readwriteweb",
        "u": "http://readwrite.com/search?keyword={{{s}}}"
    },
    {
        "d": "www.native-instruments.com",
        "b": "reaktor",
        "u": "https://www.native-instruments.com/en/reaktor-community/reaktor-user-library/all/all/all/all/{{{s}}}/latest/1/all/?q={{{s}}}&t=userlib"
    },
    {
        "d": "www.recode.net",
        "b": "recode",
        "u": "https://www.recode.net/search?q={{{s}}}"
    },
    {
        "d": "australia.recruit.net",
        "b": "recruit",
        "u": "https://australia.recruit.net/search.html?query={{{s}}}&location=&s="
    },
    {
        "d": "redis.io",
        "b": "redis",
        "u": "http://redis.io/commands/{{{s}}} "
    },
    {
        "d": "www.redmine.org",
        "b": "redmine",
        "u": "https://www.redmine.org/search?q={{{s}}}"
    },
    {
        "d": "regexper.com",
        "b": "regexper",
        "u": "https://regexper.com/#{{{s}}}"
    },
    {
        "d": "www.regexlib.com",
        "b": "regex",
        "u": "http://www.regexlib.com/Search.aspx?k={{{s}}} "
    },
    {
        "d": "lamiradadelreplicante.com",
        "b": "replicante",
        "u": "http://lamiradadelreplicante.com/?s={{{s}}} "
    },
    {
        "d": "repl.it",
        "b": "repl",
        "u": "https://repl.it/languages/{{{s}}}"
    },
    {
        "d": "repology.org",
        "b": "repology",
        "u": "https://repology.org/metapackages/?search={{{s}}}"
    },
    {
        "d": "reprap.org",
        "b": "reprap",
        "u": "http://reprap.org/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "revdroid.com",
        "b": "revdroid",
        "u": "https://revdroid.com/?s={{{s}}}"
    },
    {
        "d": "tools.ietf.org",
        "b": "rfc",
        "u": "https://tools.ietf.org/html/rfc{{{s}}}"
    },
    {
        "d": "www.rfc-editor.org",
        "b": "rfck",
        "u": "https://www.rfc-editor.org/search/rfc_search_detail.php?title={{{s}}}"
    },
    {
        "d": "www.rfcreader.com",
        "b": "rfcr",
        "u": "http://www.rfcreader.com/#rfc{{{s}}}"
    },
    {
        "d": "bugzilla.redhat.com",
        "b": "rhbz",
        "u": "https://bugzilla.redhat.com/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "www.food4rhino.com",
        "b": "rhino",
        "u": "http://www.food4rhino.com/browse?searchText={{{s}}}"
    },
    {
        "d": "rhn.redhat.com",
        "b": "rhsa",
        "u": "https://rhn.redhat.com/errata/RHSA-{{{s}}}.html"
    },
    {
        "d": "access.redhat.com",
        "b": "rht",
        "u": "https://access.redhat.com/search/#/?q={{{s}}}&p=1&srch=any&language=en&documentKind=Documentation"
    },
    {
        "d": "riddler.io",
        "b": "riddler",
        "u": "https://riddler.io/search?q={{{s}}}"
    },
    {
        "d": "docs.rightscale.com",
        "b": "rightscale",
        "u": "https://docs.rightscale.com/search.html?q={{{s}}}"
    },
    {
        "d": "apps.db.ripe.net",
        "b": "ripedb",
        "u": "https://apps.db.ripe.net/search/query.html?searchtext={{{s}}}&search%3AdoSearch=Search#resultsAnchor"
    },
    {
        "d": "stat.ripe.net",
        "b": "ripe",
        "u": "https://stat.ripe.net/{{{s}}}"
    },
    {
        "d": "docs.racket-lang.org",
        "b": "rkt",
        "u": "https://docs.racket-lang.org/search/index.html?q={{{s}}}"
    },
    {
        "d": "www.gurusrom.net",
        "b": "rm",
        "u": "http://www.gurusrom.net/search/term={{{s}}}"
    },
    {
        "d": "www.robtex.com",
        "b": "robtex",
        "u": "https://www.robtex.com/dns-lookup/{{{s}}}"
    },
    {
        "d": "luarocks.org",
        "b": "rock",
        "u": "https://luarocks.org/search?q={{{s}}}"
    },
    {
        "d": "developer.roblox.com",
        "b": "rodev",
        "u": "https://developer.roblox.com/search#stq={{{s}}}"
    },
    {
        "d": "www.rogers.com",
        "b": "rogers",
        "u": "https://www.rogers.com/customer/search?searchTerm={{{s}}}"
    },
    {
        "d": "www.roothax.com",
        "b": "rooth",
        "u": "https://www.roothax.com/?s={{{s}}}"
    },
    {
        "d": "root.cern.ch",
        "b": "root",
        "u": "http://root.cern.ch/drupal/search/node/{{{s}}}"
    },
    {
        "d": "rosettacode.org",
        "b": "rosettacode",
        "u": "https://rosettacode.org/w/index.php?search={{{s}}}&title=Special%3ASearch&wprov=acrw1"
    },
    {
        "d": "www.ros.org",
        "b": "ros",
        "u": "http://www.ros.org/search/index.html?cx=018259903093183594226%3Atxvzw9fat6w&cof=FORID%3A11%3BNB%3A1&ie=UTF-8&filter=0&num=10&input={{{s}}}&q={{{s}}}&sa=Submit"
    },
    {
        "d": "wiki.ros.org",
        "b": "rosw",
        "u": "https://wiki.ros.org/{{{s}}}"
    },
    {
        "d": "developer.roblox.com",
        "b": "rowiki",
        "u": "https://developer.roblox.com/search#stq={{{s}}}"
    },
    {
        "d": "www.raspberrypi.org",
        "b": "rpi",
        "u": "https://www.raspberrypi.org/search/{{{s}}}"
    },
    {
        "d": "raspberrypi.stackexchange.com",
        "b": "rpi-so",
        "u": "http://raspberrypi.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "rpmfind.net",
        "b": "rpmfind",
        "u": "http://rpmfind.net/linux/rpm2html/search.php?query={{{s}}}&submit=Search+..."
    },
    {
        "d": "admin.rpmfusion.org",
        "b": "rpmfusion",
        "u": "https://admin.rpmfusion.org/pkgdb/packages/{{{s}}}/"
    },
    {
        "d": "rpmfind.net",
        "b": "rpm",
        "u": "http://rpmfind.net/linux/rpm2html/search.php?query={{{s}}}&submit=Search+..."
    },
    {
        "d": "src.fedoraproject.org",
        "b": "rpms",
        "u": "https://src.fedoraproject.org/rpms/{{{s}}}"
    },
    {
        "d": "www.raspberrypi.org",
        "b": "rp",
        "u": "http://www.raspberrypi.org/phpBB3/search.php?keywords={{{s}}}"
    },
    {
        "d": "realpython.com",
        "b": "rpy",
        "u": "https://realpython.com/search?q={{{s}}}"
    },
    {
        "d": "reprap.org",
        "b": "rr",
        "u": "http://reprap.org/mediawiki/index.php?search={{{s}}}"
    },
    {
        "d": "docs.rs",
        "b": "rs-docs",
        "u": "https://docs.rs/{{{s}}}"
    },
    {
        "d": "www.rseek.org",
        "b": "rseek",
        "u": "http://www.rseek.org/?cx=010923144343702598753:boaz1reyxd4&newwindow=1&q={{{s}}}&sa=Search+functions,+lists,+and+more&cof=FORID:11&siteurl=www.rseek.org/"
    },
    {
        "d": "stackoverflow.com",
        "b": "rso",
        "u": "http://stackoverflow.com/search?q=[r]+{{{s}}}"
    },
    {
        "d": "doc.rust-lang.org",
        "b": "rs-std",
        "u": "https://doc.rust-lang.org/std/index.html?search={{{s}}}"
    },
    {
        "d": "www.rdocumentation.org",
        "b": "rstats",
        "u": "https://www.rdocumentation.org/search?q={{{s}}}"
    },
    {
        "d": "rosettacode.org",
        "b": "rstc",
        "u": "https://rosettacode.org/w/index.php?search={{{s}}}&title=Special%3ASearch&wprov=acrw1"
    },
    {
        "d": "kernel.readthedocs.io",
        "b": "rtdlinux",
        "u": "https://kernel.readthedocs.io/en/sphinx-samples/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "readthedocs.org",
        "b": "rtd",
        "u": "https://readthedocs.org/search/?q={{{s}}}"
    },
    {
        "d": "{{{s}}}.rtfd.io",
        "b": "rtfd",
        "u": "http://{{{s}}}.rtfd.io"
    },
    {
        "d": "community.rti.com",
        "b": "rti51cpp",
        "u": "https://community.rti.com/rti-doc/510/ndds.5.1.0/doc/html/api_cpp/search.php?query={{{s}}}"
    },
    {
        "d": "community.rti.com",
        "b": "rti51java",
        "u": "https://community.rti.com/rti-doc/510/ndds.5.1.0/doc/html/api_java/search.php?query={{{s}}}"
    },
    {
        "d": "community.rti.com",
        "b": "rti523um",
        "u": "https://community.rti.com/static/documentation/connext-dds/5.2.3/doc/manuals/connext_dds/html_files/RTI_ConnextDDS_CoreLibraries_UsersManual/index.htm#search-{{{s}}}"
    },
    {
        "d": "community.rti.com",
        "b": "rtikb",
        "u": "https://community.rti.com/search/kb/{{{s}}}"
    },
    {
        "d": "rubocop.readthedocs.io",
        "b": "rubocop",
        "u": "https://rubocop.readthedocs.io/en/latest/search.html?q={{{s}}}"
    },
    {
        "d": "www.ruby-doc.org",
        "b": "rubydoc",
        "u": "http://www.ruby-doc.org/search.html?q={{{s}}}"
    },
    {
        "d": "rubydocs.org",
        "b": "rubydocs",
        "u": "https://rubydocs.org/d/ruby-latest/?q={{{s}}}"
    },
    {
        "d": "rubygems.org",
        "b": "rubygems",
        "u": "http://rubygems.org/search?query={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "ruby",
        "u": "http://www.google.com/cse?q={{{s}}}&cx=013598269713424429640:g5orptiw95w&ie=UTF-8&sa=Search"
    },
    {
        "d": "www.ruby-toolbox.com",
        "b": "rubytoolbox",
        "u": "https://www.ruby-toolbox.com/search?utf8=✓&q={{{s}}}"
    },
    {
        "d": "ruk.ca",
        "b": "ruk",
        "u": "http://ruk.ca/search/site/{{{s}}}"
    },
    {
        "d": "www.redusers.com",
        "b": "ru",
        "u": "http://www.redusers.com/noticias/?s={{{s}}}"
    },
    {
        "d": "doc.rust-lang.org",
        "b": "rustdoc",
        "u": "https://doc.rust-lang.org/std/?search={{{s}}}"
    },
    {
        "d": "doc.rust-lang.org",
        "b": "rustd",
        "u": "https://doc.rust-lang.org/std/?search={{{s}}}"
    },
    {
        "d": "doc.rust-lang.org",
        "b": "rustn",
        "u": "https://doc.rust-lang.org/nightly/std/?search={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "rustrfc",
        "u": "https://github.com/rust-lang/rfcs/issues?utf8=✓&q={{{s}}}"
    },
    {
        "d": "doc.rust-lang.org",
        "b": "rust",
        "u": "https://doc.rust-lang.org/std/?search={{{s}}}"
    },
    {
        "d": "doc.rust-lang.org",
        "b": "ruststd",
        "u": "http://doc.rust-lang.org/std/?search={{{s}}}"
    },
    {
        "d": "www.razer.com",
        "b": "rzr",
        "u": "https://www.razer.com/search?text={{{s}}}"
    },
    {
        "d": "sanctum9.wordpress.com",
        "b": "s9",
        "u": "https://sanctum9.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "bugs.sabayon.org",
        "b": "sabayonbugs",
        "u": "https://bugs.sabayon.org/buglist.cgi?bug_status=__all__&content={{{s}}}"
    },
    {
        "d": "forum.sabayon.org",
        "b": "sabayonforums",
        "u": "https://forum.sabayon.org/search.php?keywords={{{s}}}"
    },
    {
        "d": "sabhow.blogspot.com",
        "b": "sabhow",
        "u": "https://sabhow.blogspot.com/search/?q={{{s}}}"
    },
    {
        "d": "safari-extensions.apple.com",
        "b": "safariext",
        "u": "https://safari-extensions.apple.com/?q={{{s}}}"
    },
    {
        "d": "www.salixos.org",
        "b": "salixforums",
        "u": "http://www.salixos.org/forum/search.php?keywords={{{s}}}"
    },
    {
        "d": "www.salixos.org",
        "b": "salix",
        "u": "http://www.salixos.org/wiki/index.php/Special:Search?search={{{s}}}"
    },
    {
        "d": "salsa.debian.org",
        "b": "salsa",
        "u": "https://salsa.debian.org/search?search={{{s}}}"
    },
    {
        "d": "docs.saltstack.com",
        "b": "saltmod",
        "u": "https://docs.saltstack.com/en/latest/ref/modules/all/salt.modules.{{{s}}}.html"
    },
    {
        "d": "cse.google.com",
        "b": "salt",
        "u": "https://cse.google.com/cse?cx=011515552685726825874:ht0p8miksrm&q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "saltstack",
        "u": "https://duckduckgo.com/?q=site%3Adocs.saltstack.com+{{{s}}}"
    },
    {
        "d": "docs.saltstack.com",
        "b": "saltstates",
        "u": "https://docs.saltstack.com/en/latest/ref/states/all/salt.states.{{{s}}}.html"
    },
    {
        "d": "wiki.samba.org",
        "b": "samba",
        "u": "https://wiki.samba.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go"
    },
    {
        "d": "www.samsung.com",
        "b": "sam",
        "u": "http://www.samsung.com/au/search/?q={{{s}}}"
    },
    {
        "d": "apps.sandstorm.io",
        "b": "sandstorm",
        "u": "https://apps.sandstorm.io/search?term={{{s}}}"
    },
    {
        "d": "blogs.sap.com",
        "b": "sapblogs",
        "u": "https://blogs.sap.com/?s={{{s}}}"
    },
    {
        "d": "launchpad.support.sap.com",
        "b": "sapdl",
        "u": "https://launchpad.support.sap.com/#/softwarecenter/search/{{{s}}}"
    },
    {
        "d": "help.sap.com",
        "b": "saphelp",
        "u": "https://help.sap.com/viewer/search?q={{{s}}}"
    },
    {
        "d": "launchpad.support.sap.com",
        "b": "sapnote",
        "u": "https://launchpad.support.sap.com/#/notes/{{{s}}}/E"
    },
    {
        "d": "launchpad.support.sap.com",
        "b": "sapnotes",
        "u": "https://launchpad.support.sap.com/#/solutions/notes/?q={{{s}}}"
    },
    {
        "d": "launchpad.support.sap.com",
        "b": "sap",
        "u": "https://launchpad.support.sap.com/#/solutions/notesv2/?q={{{s}}}"
    },
    {
        "d": "www.tcodesearch.com",
        "b": "saptables",
        "u": "http://www.tcodesearch.com/sap-tables/detail?id={{{s}}}"
    },
    {
        "d": "www.tcodesearch.com",
        "b": "saptable",
        "u": "http://www.tcodesearch.com/sap-tables/detail?id={{{s}}}"
    },
    {
        "d": "support.sas.com",
        "b": "sas",
        "u": "https://support.sas.com/en/search.html?q={{{s}}}&fq=siteArea%3A%22Documentation%22"
    },
    {
        "d": "savannah.gnu.org",
        "b": "savannah",
        "u": "https://savannah.gnu.org/search/?type_of_search=soft&words={{{s}}}"
    },
    {
        "d": "scratch.mit.edu",
        "b": "sb2",
        "u": "https://scratch.mit.edu/search/projects?q={{{s}}}"
    },
    {
        "d": "slackbuilds.org",
        "b": "sbopkg",
        "u": "https://slackbuilds.org/result/?search={{{s}}}"
    },
    {
        "d": "slackbuilds.org",
        "b": "sbo",
        "u": "http://slackbuilds.org/result/?search={{{s}}}"
    },
    {
        "d": "www.scala-lang.org",
        "b": "scalaapi",
        "u": "http://www.scala-lang.org/api/current/index.html?search={{{s}}}"
    },
    {
        "d": "index.scala-lang.org",
        "b": "scaladex",
        "u": "https://index.scala-lang.org/search?q={{{s}}} "
    },
    {
        "d": "www.scala-lang.org",
        "b": "scaladoc",
        "u": "http://www.scala-lang.org/api/current/?search={{{s}}}"
    },
    {
        "d": "index.scala-lang.org",
        "b": "scalai",
        "u": "https://index.scala-lang.org/search?q={{{s}}}"
    },
    {
        "d": "www.scala-lang.org",
        "b": "scalalang",
        "u": "http://www.scala-lang.org/api/current/?search={{{s}}}"
    },
    {
        "d": "www.scala-lang.org",
        "b": "scala",
        "u": "http://www.scala-lang.org/api/current/?search={{{s}}}"
    },
    {
        "d": "sccode.org",
        "b": "sccode",
        "u": "http://sccode.org/search?q={{{s}}}"
    },
    {
        "d": "schema.org",
        "b": "schema",
        "u": "https://schema.org/docs/search_results.html?q={{{s}}}"
    },
    {
        "d": "help.scilab.org",
        "b": "scilab",
        "u": "https://help.scilab.org/docs/6.0.0/en_US/search/{{{s}}}"
    },
    {
        "d": "www.sciplus.com",
        "b": "sciplus",
        "u": "https://www.sciplus.com/s/?q={{{s}}}"
    },
    {
        "d": "docs.scipy.org",
        "b": "scipy",
        "u": "http://docs.scipy.org/doc/scipy/reference/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "doc.sccode.org",
        "b": "sclang",
        "u": "http://doc.sccode.org/Search.html#{{{s}}}"
    },
    {
        "d": "search.sap.com",
        "b": "scn",
        "u": "http://search.sap.com/ui/scn#query={{{s}}}"
    },
    {
        "d": "searchcode.com",
        "b": "scode",
        "u": "https://searchcode.com/?q={{{s}}}"
    },
    {
        "d": "doc.scrapy.org",
        "b": "scrapy",
        "u": "http://doc.scrapy.org/en/latest/search.html?q={{{s}}}"
    },
    {
        "d": "scratchforums.asun.co",
        "b": "scratchforums",
        "u": "https://scratchforums.asun.co/search?q={{{s}}}"
    },
    {
        "d": "wiki.scratch.mit.edu",
        "b": "scratchwiki",
        "u": "http://wiki.scratch.mit.edu/w/index.php?search={{{s}}}&fulltext=Search&title=Special%3ASearch"
    },
    {
        "d": "syntaxdb.com",
        "b": "sdb",
        "u": "https://syntaxdb.com/reference/search?utf8=✓&search={{{s}}}"
    },
    {
        "d": "wiki.libsdl.org",
        "b": "sdl2",
        "u": "https://wiki.libsdl.org/FrontPage?action=fullsearch&context=180&value={{{s}}}&titlesearch=Titles"
    },
    {
        "d": "wiki.libsdl.org",
        "b": "sdl",
        "u": "https://wiki.libsdl.org/CategoryAPI?action=fullsearch&context=180&value={{{s}}}&titlesearch=Titles"
    },
    {
        "d": "www.se80.co.uk",
        "b": "se80",
        "u": "https://www.se80.co.uk/action/search_results.htm?q={{{s}}}"
    },
    {
        "d": "addons.mozilla.org",
        "b": "seamonkey",
        "u": "https://addons.mozilla.org/en-US/seamonkey/search/?q={{{s}}}&cat=all&lver=any&pid=1&sort=&pp=20&lup=&advanced="
    },
    {
        "d": "searchco.de",
        "b": "searchcode",
        "u": "http://searchco.de/?q={{{s}}}"
    },
    {
        "d": "search.cpan.org",
        "b": "searchcpan",
        "u": "http://search.cpan.org/search?query={{{s}}}&mode=all"
    },
    {
        "d": "searchenginewatch.com",
        "b": "searchenginewatch",
        "u": "https://searchenginewatch.com/?s={{{s}}}"
    },
    {
        "d": "searchcode.com",
        "b": "sea",
        "u": "https://searchcode.com/?q={{{s}}}"
    },
    {
        "d": "sebsauvage.net",
        "b": "seb",
        "u": "http://sebsauvage.net/rhaa/index.php?q={{{s}}}"
    },
    {
        "d": "chat.stackexchange.com",
        "b": "sechat",
        "u": "https://chat.stackexchange.com/rooms/{{{s}}}"
    },
    {
        "d": "insecure.org",
        "b": "seclists",
        "u": "http://insecure.org/search.html?cx=partner-pub-0078565546631069%3Abx60rb-fytx&cof=FORID%3A9&ie=ISO-8859-1&q={{{s}}}&sa=SecSearch"
    },
    {
        "d": "securedrop.readthedocs.org",
        "b": "securedrop",
        "u": "https://securedrop.readthedocs.org/en/latest/search.html?q={{{s}}}"
    },
    {
        "d": "securityheaders.io",
        "b": "securityheaders",
        "u": "https://securityheaders.io/?q={{{s}}}&followRedirects=on"
    },
    {
        "d": "www.snapeda.com",
        "b": "seda",
        "u": "https://www.snapeda.com/search/?q={{{s}}}&search-type=parts"
    },
    {
        "d": "sedo.com",
        "b": "sedo",
        "u": "https://sedo.com/search/?keyword={{{s}}}"
    },
    {
        "d": "de.selfhtml.org",
        "b": "selfhtml",
        "u": "http://de.selfhtml.org/navigation/suche/index.htm?Suchanfrage={{{s}}}"
    },
    {
        "d": "wiki.selfhtml.org",
        "b": "selfhtmlwiki",
        "u": "http://wiki.selfhtml.org/wiki/Spezial:Suche?search={{{s}}}"
    },
    {
        "d": "www.senderbase.org",
        "b": "senderbase",
        "u": "http://www.senderbase.org/senderbase_queries/detailhost?search_string={{{s}}}"
    },
    {
        "d": "docs.sentry.io",
        "b": "sentry",
        "u": "https://docs.sentry.io/search/?q={{{s}}}"
    },
    {
        "d": "www.servershop24.de",
        "b": "server24",
        "u": "https://www.servershop24.de/?ActionCall=WebActionArticleSearch&BranchId=0&multishop_id=0&customer_class=9&lang=de&Params[SearchParam]={{{s}}}"
    },
    {
        "d": "serverfault.com",
        "b": "serverfault",
        "u": "http://serverfault.com/search?q={{{s}}}"
    },
    {
        "d": "www.iana.org",
        "b": "service",
        "u": "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search={{{s}}}"
    },
    {
        "d": "symfony.com",
        "b": "sf2",
        "u": "http://symfony.com/search?q={{{s}}}"
    },
    {
        "d": "help.salesforce.com",
        "b": "sfhelp",
        "u": "https://help.salesforce.com/search#q={{{s}}}"
    },
    {
        "d": "scifiinterfaces.com",
        "b": "sfi",
        "u": "https://scifiinterfaces.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "na85.lightning.force.com",
        "b": "sforcel",
        "u": "https://na85.lightning.force.com/one/one.app#ey{{{s}}}Jjb21wb25lbnREZWYiOiJmb3JjZVNlYXJjaDpzZWFyY2hQYWdlIiwiYXR0cmlidXRlcyI6eyJ0ZXJtIjoiQ3VydCIsInNjb3BlTWFwIjp7InR5cGUiOiJUT1BfUkVTVUxUUyJ9LCJjb250ZXh0Ijp7ImRpc2FibGVTcGVsbENvcnJlY3Rpb24iOmZhbHNlLCJkaXNhYmxlSW50ZW50UXVlcnkiOmZhbHNlLCJwZXJtc0FuZFByZWZzIjp7IlNlYXJjaFVpLnNlYXJjaFVJUGlsb3RGZWF0dXJlRW5hYmxlZCI6ZmFsc2UsIlNlYXJjaEV4cGVyaWVuY2UuTGVmdE5hdkVuaGFuY2VtZW50RW5hYmxlZCI6dHJ1ZSwiU2VhcmNoLmNyb3NzT2JqZWN0c0F1dG9TdWdnZXN0RW5hYmxlZCI6dHJ1ZSwiU2VhcmNoUmVzdWx0c0xWTS5sdm1FbmFibGVkRm9yU2VhcmNoUmVzdWx0c09uIjp0cnVlLCJNeVNlYXJjaC51c2VyQ2FuSGF2ZU15U2VhcmNoQmVzdFJlc3VsdCI6ZmFsc2UsIlNlYXJjaFJlc3VsdHNMVk0ubHZtRW5hYmxlZEZvclRvcFJlc3VsdHMiOmZhbHNlLCJPcmdQZXJtaXNzaW9ucy5VbmlvbkFwcE5hdlNtYXJ0U2NvcGUiOnRydWUsIlNlYXJjaFVpLmZlZWRiYWNrQ29tcG9uZW50RW5hYmxlZCI6ZmFsc2UsIlNlYXJjaEV4cGVyaWVuY2UuVG9wUmVzdWx0c1NpbmdsZVNPU0xFbmFibGVkIjpmYWxzZSwiT3JnUHJlZmVyZW5jZXMuQ2hhdHRlckVuYWJsZWQiOnRydWUsIlNlYXJjaC5tYXNrU2VhcmNoSW5mb0luTG9ncyI6ZmFsc2UsIlNlYXJjaFVpLm9yZ0hhc0FjY2Vzc1RvU2VhcmNoVGVybUhpc3RvcnkiOmZhbHNlLCJTZWFyY2hVaS5zZWFyY2hVSUludGVyYWN0aW9uTG9nZ2luZ0VuYWJsZWQiOmZhbHNlLCJNeVNlYXJjaC51c2VyQ2FuSGF2ZU15U2VhcmNoIjpmYWxzZX0sInNlYXJjaERpYWxvZ1Nlc3Npb25JZCI6IjM0NmY1YzI1LTIwNGEtYjMyMS1kYzM3LTM3Yzc5ZGQyNjA3ZCIsInNlYXJjaFNvdXJjZSI6IklOUFVUX0RFU0tUT1AifSwiZ3JvdXBJZCI6IkRFRkFVTFQifSwic3RhdGUiOnt9fQ%3D%3D"
    },
    {
        "d": "login.salesforce.com",
        "b": "sforce",
        "u": "https://login.salesforce.com/_ui/search/ui/UnifiedSearchResults?str={{{s}}}"
    },
    {
        "d": "serverfault.com",
        "b": "sf",
        "u": "http://serverfault.com/search?q={{{s}}}"
    },
    {
        "d": "salesforce.stackexchange.com",
        "b": "sfse",
        "u": "http://salesforce.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "sourcegraph.com",
        "b": "sg",
        "u": "https://sourcegraph.com/search?q={{{s}}}"
    },
    {
        "d": "cryptography.cc",
        "b": "sha256",
        "u": "https://cryptography.cc/convert?text={{{s}}}&algorithm=sha256"
    },
    {
        "d": "river.libox.fr",
        "b": "shaarli",
        "u": "https://river.libox.fr/search.php?q={{{s}}}"
    },
    {
        "d": "www.shadertoy.com",
        "b": "shadertoy",
        "u": "https://www.shadertoy.com/results?query={{{s}}} "
    },
    {
        "d": "crystalshards.org",
        "b": "shards",
        "u": "https://crystalshards.org/?filter={{{s}}}"
    },
    {
        "d": "sharepoint.stackexchange.com",
        "b": "sharese",
        "u": "https://sharepoint.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "share.servicenow.com",
        "b": "sharesnc",
        "u": "https://share.servicenow.com/app.do#/search-result?search_query={{{s}}}"
    },
    {
        "d": "download.cnet.com",
        "b": "shareware",
        "u": "http://download.cnet.com/1770-20_4-0.html?searchtype=downloads&query={{{s}}}&tg=dl-20&search.x=0&search.y=0&search=+Go%252521"
    },
    {
        "d": "www.shaw.ca",
        "b": "shaw",
        "u": "https://www.shaw.ca/store/search/search.jsp?q={{{s}}}"
    },
    {
        "d": "www.shodan.io",
        "b": "shodan",
        "u": "https://www.shodan.io/search?query={{{s}}}"
    },
    {
        "d": "ecommerce.shopify.com",
        "b": "shopifyforum",
        "u": "https://ecommerce.shopify.com/ecommerce/{{{s}}}"
    },
    {
        "d": "help.shopify.com",
        "b": "shopify",
        "u": "https://help.shopify.com/en/search?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "www.shoutmeloud.com",
        "b": "shout",
        "u": "https://www.shoutmeloud.com/?s={{{s}}}"
    },
    {
        "d": "www.shodan.io",
        "b": "sh",
        "u": "https://www.shodan.io/search?query={{{s}}}"
    },
    {
        "d": "stor.1conan.com",
        "b": "shsh",
        "u": "https://stor.1conan.com/tsssaver/shsh/{{{s}}}"
    },
    {
        "d": "support.industry.siemens.com",
        "b": "siemenssupport",
        "u": "https://support.industry.siemens.com/cs/search?search={{{s}}}"
    },
    {
        "d": "doc.sikuli.org",
        "b": "sikuli",
        "u": "http://doc.sikuli.org/search.html?q={{{s}}}"
    },
    {
        "d": "www.simplicite.io",
        "b": "simplicite",
        "u": "https://www.simplicite.io/resources/search?q={{{s}}}"
    },
    {
        "d": "www.shouldiremoveit.com",
        "b": "siri",
        "u": "http://www.shouldiremoveit.com/programs.aspx?q={{{s}}}"
    },
    {
        "d": "www.sitepoint.com",
        "b": "sitepoint",
        "u": "https://www.sitepoint.com/?s={{{s}}}"
    },
    {
        "d": "situsali.com",
        "b": "situsali",
        "u": "https://situsali.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "kb.workfusion.com",
        "b": "skb",
        "u": "https://kb.workfusion.com/dosearchsite.action?cql=siteSearch+~+%22{{{s}}}%22&queryString={{{s}}}"
    },
    {
        "d": "scikit-image.org",
        "b": "skimage",
        "u": "http://scikit-image.org/docs/dev/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "sks-keyservers.net",
        "b": "sks",
        "u": "https://sks-keyservers.net/pks/lookup?op=vindex&search={{{s}}}"
    },
    {
        "d": "www.sketchappsources.com",
        "b": "sktr",
        "u": "https://www.sketchappsources.com/search_{{{s}}}.html"
    },
    {
        "d": "docs.skunity.com",
        "b": "sku",
        "u": "https://docs.skunity.com/syntax/search/{{{s}}}"
    },
    {
        "d": "community.skype.com",
        "b": "skypecommunity",
        "u": "http://community.skype.com/t5/forums/searchpage/tab/message?filter=labels%2Clocation&location=category%3AEnglish&q={{{s}}} "
    },
    {
        "d": "slackbuilds.org",
        "b": "slackbuild",
        "u": "http://slackbuilds.org/result/?search={{{s}}}"
    },
    {
        "d": "slackbuilds.org",
        "b": "slackbuilds",
        "u": "http://slackbuilds.org/result/?search={{{s}}}"
    },
    {
        "d": "docs.slackware.com",
        "b": "slackdoc",
        "u": "http://docs.slackware.com/start?do=search&id={{{s}}}&fulltext=Search"
    },
    {
        "d": "packages.slackware.com",
        "b": "slackpkg",
        "u": "http://packages.slackware.com/?search={{{s}}}"
    },
    {
        "d": "searchlibs.com",
        "b": "slibs",
        "u": "http://searchlibs.com/?q={{{s}}}"
    },
    {
        "d": "www.slidescarnival.com",
        "b": "slidescarnival",
        "u": "https://www.slidescarnival.com/?s={{{s}}}"
    },
    {
        "d": "forum.slitaz.org",
        "b": "slitazforums",
        "u": "http://forum.slitaz.org/search.php?q={{{s}}}"
    },
    {
        "d": "slo-tech.com",
        "b": "slotech",
        "u": "https://slo-tech.com/forum/isci/?q={{{s}}}"
    },
    {
        "d": "slote.me",
        "b": "slote",
        "u": "http://slote.me/?q={{{s}}}"
    },
    {
        "d": "wiki.secondlife.com",
        "b": "slwiki",
        "u": "http://wiki.secondlife.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "smartos.org",
        "b": "smartos",
        "u": "https://smartos.org/man/{{{s}}}"
    },
    {
        "d": "www.smarty.net",
        "b": "smarty",
        "u": "http://www.smarty.net/search?q={{{s}}}&show=manual-en&x=0&y=0"
    },
    {
        "d": "snapcraft.io",
        "b": "snapcraft",
        "u": "https://snapcraft.io/search?category=&q={{{s}}}"
    },
    {
        "d": "snapcraft.io",
        "b": "snappy",
        "u": "https://snapcraft.io/search?q={{{s}}}"
    },
    {
        "d": "snapcraft.io",
        "b": "snaps",
        "u": "https://snapcraft.io/search?q={{{s}}}"
    },
    {
        "d": "snapcraft.io",
        "b": "sncr",
        "u": "https://snapcraft.io/search?q={{{s}}}"
    },
    {
        "d": "developer.servicenow.com",
        "b": "snc",
        "u": "https://developer.servicenow.com/app.do#!/search?category=API&q={{{s}}}"
    },
    {
        "d": "community.servicenow.com",
        "b": "snk",
        "u": "https://community.servicenow.com/community?id=community_search&q={{{s}}}"
    },
    {
        "d": "www.snort.org",
        "b": "snort",
        "u": "https://www.snort.org/search?query={{{s}}}"
    },
    {
        "d": "www.snort.org",
        "b": "snrt",
        "u": "https://www.snort.org/search?query={{{s}}}&submit_search="
    },
    {
        "d": "seaborn.pydata.org",
        "b": "sns",
        "u": "http://seaborn.pydata.org/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "wiki.servicenow.com",
        "b": "snw",
        "u": "http://wiki.servicenow.com/search-results.php?cx=005409823165138974380%3Abltnnmgfoek&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa=Search&siteurl=wiki.servicenow.com%2Fsearch-results.php&ref=&ss="
    },
    {
        "d": "stackoverflow.com",
        "b": "sobash",
        "u": "http://stackoverflow.com/search?q=[bash]+{{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "socvi",
        "u": "https://stackoverflow.com/search?q=[labwindows]+{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "sod",
        "u": "https://duckduckgo.com/?q=site:stackoverflow.com+{{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "sof",
        "u": "https://stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "www.softpedia.com",
        "b": "softpedia",
        "u": "http://www.softpedia.com/dyn-search.php?search_term={{{s}}}&x=0&y=0"
    },
    {
        "d": "download.cnet.com",
        "b": "software",
        "u": "http://download.cnet.com/1770-20_4-0.html?searchtype=downloads&query={{{s}}}&tg=dl-20&search.x=0&search.y=0&search=+Go%252521"
    },
    {
        "d": "www.google.com",
        "b": "sog",
        "u": "https://www.google.com/search?q=site%3Astackoverflow.com+{{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "sojs",
        "u": "https://stackoverflow.com/search?q=[javascript]+{{{s}}}"
    },
    {
        "d": "sonarcloud.io",
        "b": "sonarcloud",
        "u": "https://sonarcloud.io/explore/projects?search={{{s}}}"
    },
    {
        "d": "community.sophos.com",
        "b": "sophoscom",
        "u": "https://community.sophos.com/search?q={{{s}}}"
    },
    {
        "d": "www.sophos.com",
        "b": "soph",
        "u": "https://www.sophos.com/en-us/search-results.aspx?search={{{s}}}"
    },
    {
        "d": "pt.stackoverflow.com",
        "b": "sopt",
        "u": "https://pt.stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "sopy",
        "u": "http://stackoverflow.com/search?q=[python]+{{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "sor",
        "u": "http://stackoverflow.com/search?q=[r]+{{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "soscrapy",
        "u": "http://stackoverflow.com/search?q={{{s}}}[scrapy]"
    },
    {
        "d": "software.opensuse.org",
        "b": "sos",
        "u": "http://software.opensuse.org/search?q={{{s}}}&search_devel=false&search_unsupported=false"
    },
    {
        "d": "stackoverflow.com",
        "b": "so",
        "u": "http://stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "www.stateofthedapps.com",
        "b": "sotd",
        "u": "https://www.stateofthedapps.com/dapps?text={{{s}}}"
    },
    {
        "d": "sourceforge.net",
        "b": "sourceforge",
        "u": "http://sourceforge.net/directory/?q={{{s}}}"
    },
    {
        "d": "sourcegraph.com",
        "b": "sourcegraph",
        "u": "https://sourcegraph.com/github.com/{{{s}}}"
    },
    {
        "d": "spacedock.info",
        "b": "spacedock",
        "u": "http://spacedock.info/search?query={{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "spamcheck",
        "u": "http://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a{{{s}}}&run=toolpage"
    },
    {
        "d": "subtlepatterns.com",
        "b": "spattern",
        "u": "http://subtlepatterns.com/?q={{{s}}}"
    },
    {
        "d": "mxtoolbox.com",
        "b": "spf",
        "u": "http://mxtoolbox.com/SuperTool.aspx?action=spf%3a{{{s}}}&run=toolpage"
    },
    {
        "d": "sphereon.com",
        "b": "sphereon",
        "u": "https://sphereon.com/?s={{{s}}}"
    },
    {
        "d": "community.spiceworks.com",
        "b": "spice",
        "u": "https://community.spiceworks.com/search?query={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "spip",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:spip.net"
    },
    {
        "d": "apps.splunk.com",
        "b": "splunkbase",
        "u": "https://apps.splunk.com/apps/#/search/{{{s}}}/page/1"
    },
    {
        "d": "www.splunk.com",
        "b": "splunk",
        "u": "https://www.splunk.com/en_us/search.html?query={{{s}}}"
    },
    {
        "d": "www.springsource.org",
        "b": "springsource",
        "u": "http://www.springsource.org/search/google?query={{{s}}}"
    },
    {
        "d": "search.sitepoint.com",
        "b": "spr",
        "u": "http://search.sitepoint.com/?q={{{s}}}&refinements%5Breference%5D=1"
    },
    {
        "d": "community.bistudio.com",
        "b": "sqf",
        "u": "https://community.bistudio.com/wiki?search={{{s}}}"
    },
    {
        "d": "www.sqlalchemy.org",
        "b": "sqlalchemy",
        "u": "http://www.sqlalchemy.org/docs/search.html?q={{{s}}}&check_keywords=yes&area=default"
    },
    {
        "d": "www.sqlite.org",
        "b": "sqlite",
        "u": "https://www.sqlite.org/search?s=d&q={{{s}}}"
    },
    {
        "d": "sql.sh",
        "b": "sqlsh",
        "u": "http://sql.sh/?s={{{s}}}&submit=Rechercher"
    },
    {
        "d": "sourceforge.net",
        "b": "srcforge",
        "u": "http://sourceforge.net/directory/os:windows/freshness:recently-updated/?q={{{s}}}"
    },
    {
        "d": "softwarerecs.stackexchange.com",
        "b": "srec",
        "u": "http://softwarerecs.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "srfi.schemers.org",
        "b": "srfi",
        "u": "http://srfi.schemers.org/srfi-{{{s}}}/srfi-{{{s}}}.html"
    },
    {
        "d": "duckduckgo.com",
        "b": "ss64",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:www.ss64.com"
    },
    {
        "d": "security.stackexchange.com",
        "b": "sse",
        "u": "https://security.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "dev.ssllabs.com",
        "b": "ssllabsdev",
        "u": "https://dev.ssllabs.com/ssltest/analyze.html?latest&d={{{s}}}"
    },
    {
        "d": "www.ssllabs.com",
        "b": "ssllabs",
        "u": "https://www.ssllabs.com/ssltest/analyze.html?d={{{s}}}"
    },
    {
        "d": "www.ssllabs.com",
        "b": "ssl",
        "u": "https://www.ssllabs.com/ssltest/analyze.html?d={{{s}}}&latest=true"
    },
    {
        "d": "www.soundsnap.com",
        "b": "ssnap",
        "u": "http://www.soundsnap.com/search/audio/{{{s}}}/score"
    },
    {
        "d": "sspai.com",
        "b": "sspai",
        "u": "https://sspai.com/search/article?q={{{s}}}"
    },
    {
        "d": "www.silverstripe.org",
        "b": "ssp",
        "u": "http://www.silverstripe.org/search/?q={{{s}}}"
    },
    {
        "d": "shopsmartreviews.in",
        "b": "ssr",
        "u": "https://shopsmartreviews.in/?s={{{s}}}"
    },
    {
        "d": "www.stackage.org",
        "b": "stackage",
        "u": "http://www.stackage.org/lts/hoogle?q={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "stackoverflow",
        "u": "http://stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "stackshare.io",
        "b": "stackshare",
        "u": "http://stackshare.io/search/q={{{s}}}"
    },
    {
        "d": "stackoverflow.com",
        "b": "stack",
        "u": "http://stackoverflow.com/search?q={{{s}}}"
    },
    {
        "d": "stakingreturns.com",
        "b": "stake",
        "u": "https://stakingreturns.com/coins/{{{s}}}"
    },
    {
        "d": "startupbuffer.com",
        "b": "startup",
        "u": "https://startupbuffer.com/search?s={{{s}}}"
    },
    {
        "d": "steamcommunity.com",
        "b": "steamsc",
        "u": "https://steamcommunity.com/search/users/#text={{{s}}}"
    },
    {
        "d": "www.cplusplus.com",
        "b": "stl",
        "u": "http://www.cplusplus.com/search.do?q={{{s}}}"
    },
    {
        "d": "www.stlfinder.com",
        "b": "stlf",
        "u": "https://www.stlfinder.com/?search={{{s}}}"
    },
    {
        "d": "stmblog.com",
        "b": "stm",
        "u": "http://stmblog.com/?s={{{s}}}"
    },
    {
        "d": "isc.sans.edu",
        "b": "storm",
        "u": "https://isc.sans.edu/ipinfo.html?ip={{{s}}}"
    },
    {
        "d": "store.steampowered.com",
        "b": "streg",
        "u": "https://store.steampowered.com/account/registerkey?key={{{s}}}"
    },
    {
        "d": "userstyles.org",
        "b": "stylish",
        "u": "https://userstyles.org/styles/browse?search_terms={{{s}}}"
    },
    {
        "d": "subeen.com",
        "b": "subeen",
        "u": "http://subeen.com/?s={{{s}}}"
    },
    {
        "d": "docs.sublimetext.info",
        "b": "subldoc",
        "u": "http://docs.sublimetext.info/en/latest/search.html?q={{{s}}}"
    },
    {
        "d": "forum.sublimetext.com",
        "b": "sublforum",
        "u": "https://forum.sublimetext.com/search?q={{{s}}}"
    },
    {
        "d": "sublime.wbond.net",
        "b": "sublime",
        "u": "https://sublime.wbond.net/search/{{{s}}}"
    },
    {
        "d": "www.tunnelsup.com",
        "b": "subnet",
        "u": "http://www.tunnelsup.com/subnet-calculator?ip={{{s}}} "
    },
    {
        "d": "subtlepatterns.com",
        "b": "subtlepatterns",
        "u": "http://subtlepatterns.com/?q={{{s}}}"
    },
    {
        "d": "sudomod.com",
        "b": "sudomod",
        "u": "http://sudomod.com/?s={{{s}}}"
    },
    {
        "d": "www.swiftbysundell.com",
        "b": "sundell",
        "u": "https://www.swiftbysundell.com/search?query={{{s}}}"
    },
    {
        "d": "supermarket.chef.io",
        "b": "super",
        "u": "https://supermarket.chef.io/cookbooks?utf8=%E2%9C%93&q={{{s}}}"
    },
    {
        "d": "busca.superdownloads.com.br",
        "b": "superdownloads",
        "u": "http://busca.superdownloads.com.br/busca/{{{s}}}.s1.html"
    },
    {
        "d": "busca.superdownloads.com.br",
        "b": "superd",
        "u": "http://busca.superdownloads.com.br/busca/{{{s}}}.s1.html"
    },
    {
        "d": "superuser.com",
        "b": "superuser",
        "u": "http://superuser.com/search?q={{{s}}}"
    },
    {
        "d": "bugzilla.novell.com",
        "b": "susebug",
        "u": "https://bugzilla.novell.com/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "software.opensuse.org",
        "b": "susepkg",
        "u": "https://software.opensuse.org/search?q={{{s}}}"
    },
    {
        "d": "software.opensuse.org",
        "b": "sus",
        "u": "http://software.opensuse.org/search?utf8=✓&q={{{s}}}&search_devel=false&search_unsupported=false&baseproject=openSUSE:13.1"
    },
    {
        "d": "superuser.com",
        "b": "su",
        "u": "http://superuser.com/search?q={{{s}}}"
    },
    {
        "d": "susydocs.oddbird.net",
        "b": "susy",
        "u": "http://susydocs.oddbird.net/en/latest/?q={{{s}}}"
    },
    {
        "d": "www.svartling.net",
        "b": "svartling",
        "u": "http://www.svartling.net/search?q={{{s}}}"
    },
    {
        "d": "developer.mozilla.org",
        "b": "svg",
        "u": "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=svg"
    },
    {
        "d": "forum.shopware.com",
        "b": "swag",
        "u": "https://forum.shopware.com/search?Search={{{s}}}"
    },
    {
        "d": "developer.apple.com",
        "b": "swift",
        "u": "https://developer.apple.com/search/?q={{{s}}}"
    },
    {
        "d": "www.swi-prolog.org",
        "b": "swipl",
        "u": "http://www.swi-prolog.org/pldoc/search?for={{{s}}}&in=all&match=summary"
    },
    {
        "d": "www.swi-prolog.org",
        "b": "swi",
        "u": "http://www.swi-prolog.org/search?for={{{s}}}"
    },
    {
        "d": "www.symantec.com",
        "b": "symantec",
        "u": "https://www.symantec.com/search?hiddenq=Pedroerkul&q={{{s}}}&searchJson={%22filter%22:[],%22startPage%22:1,%22start%22:0,%22sort%22:%22score%22}"
    },
    {
        "d": "symbolhound.com",
        "b": "symbolhound",
        "u": "http://symbolhound.com/?q={{{s}}}"
    },
    {
        "d": "symfony.com",
        "b": "symfony",
        "u": "http://symfony.com/search?q={{{s}}}"
    },
    {
        "d": "symbolhound.com",
        "b": "sym",
        "u": "http://symbolhound.com/?q={{{s}}}"
    },
    {
        "d": "{{{s}}}.tor2web.org",
        "b": "t2w",
        "u": "https://{{{s}}}.tor2web.org/"
    },
    {
        "d": "www.tableau.com",
        "b": "tableau",
        "u": "https://www.tableau.com/search#q={{{s}}}"
    },
    {
        "d": "tails.boum.org",
        "b": "tails",
        "u": "https://tails.boum.org/ikiwiki.cgi?P={{{s}}}"
    },
    {
        "d": "talaios.net",
        "b": "talaios",
        "u": "http://talaios.net/?s={{{s}}}"
    },
    {
        "d": "www.talkgraphics.com",
        "b": "talkgr",
        "u": "http://www.talkgraphics.com/search.php?searchid={{{s}}}:"
    },
    {
        "d": "tapestry.apache.org",
        "b": "tapestry",
        "u": "http://tapestry.apache.org/search.html?q={{{s}}}"
    },
    {
        "d": "www.taringa.net",
        "b": "taringa",
        "u": "http://www.taringa.net/buscar/?q={{{s}}}&"
    },
    {
        "d": "addons.thunderbird.net",
        "b": "tbaddons",
        "u": "https://addons.thunderbird.net/en-US/thunderbird/search/?q={{{s}}}"
    },
    {
        "d": "www.technobuffalo.com",
        "b": "tbuff",
        "u": "http://www.technobuffalo.com/search-results/?cx=partner-pub-2551798495402703%3Ad3m0wbhqu0s&cof=FORID%3A10&ie=ISO-8859-1&q={{{s}}}&sa=Search&siteurl=www.technobuffalo.com%2F&ref=&ss=975j318069j4"
    },
    {
        "d": "wiki.tcl.tk",
        "b": "tcl",
        "u": "http://wiki.tcl.tk/_/search?S={{{s}}}&_charset_=UTF-8"
    },
    {
        "d": "www.tcodesearch.com",
        "b": "tcode",
        "u": "http://www.tcodesearch.com/tcodes/search?q={{{s}}}"
    },
    {
        "d": "techcrunch.com",
        "b": "tc",
        "u": "http://techcrunch.com/search/{{{s}}}"
    },
    {
        "d": "tech2days.com",
        "b": "tech2days",
        "u": "http://tech2days.com/?q={{{s}}}:"
    },
    {
        "d": "techcopp.com",
        "b": "techcopp",
        "u": "https://techcopp.com/?s={{{s}}}"
    },
    {
        "d": "techcrunch.com",
        "b": "techcrunch",
        "u": "http://techcrunch.com/search/{{{s}}}"
    },
    {
        "d": "techdai.info",
        "b": "techdai",
        "u": "https://techdai.info/?s={{{s}}}"
    },
    {
        "d": "www.techdirt.com",
        "b": "techdirt",
        "u": "http://www.techdirt.com/search.php?site=&q={{{s}}}"
    },
    {
        "d": "techgeek.com.au",
        "b": "techgeek",
        "u": "https://techgeek.com.au/?s={{{s}}}"
    },
    {
        "d": "techified-news.blogspot.co.uk",
        "b": "techified",
        "u": "http://techified-news.blogspot.co.uk/{{{s}}} uds-search-results"
    },
    {
        "d": "techinfoeasy.blogspot.com",
        "b": "techinfo",
        "u": "https://techinfoeasy.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "code.kx.com",
        "b": "techmonk",
        "u": "https://code.kx.com/q/search?query={{{s}}}"
    },
    {
        "d": "social.technet.microsoft.com",
        "b": "technetlib",
        "u": "http://social.technet.microsoft.com/search/en-us/?query={{{s}}}#refinementChanges=85"
    },
    {
        "d": "social.technet.microsoft.com",
        "b": "technet",
        "u": "http://social.technet.microsoft.com/search/en-us/?query={{{s}}}"
    },
    {
        "d": "www.techiitalks.com",
        "b": "technews",
        "u": "https://www.techiitalks.com/{{{s}}}"
    },
    {
        "d": "techposts.org",
        "b": "techposts",
        "u": "https://techposts.org/?s={{{s}}}"
    },
    {
        "d": "www.techradar.com",
        "b": "techradar",
        "u": "https://www.techradar.com/search?searchTerm={{{s}}}"
    },
    {
        "d": "techrights.org",
        "b": "techrights",
        "u": "http://techrights.org/wiki/index.php/Special:Search?search={{{s}}}&fulltext=Search"
    },
    {
        "d": "technxt.net",
        "b": "tech",
        "u": "http://technxt.net/?s={{{s}}}"
    },
    {
        "d": "www.techtips4u.com",
        "b": "techtips4u",
        "u": "http://www.techtips4u.com/?s={{{s}}}"
    },
    {
        "d": "www.techtudo.com.br",
        "b": "techtudo",
        "u": "http://www.techtudo.com.br/busca/?q={{{s}}}"
    },
    {
        "d": "techvorm.com",
        "b": "techvorm",
        "u": "https://techvorm.com/?s={{{s}}}"
    },
    {
        "d": "www.tech-wd.com",
        "b": "tech-wd",
        "u": "http://www.tech-wd.com/wd/?s={{{s}}}"
    },
    {
        "d": "www.tecmint.com",
        "b": "tecmint",
        "u": "https://www.tecmint.com/search/?cx=partner-pub-2601749019656699%3A2173448976&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&sa=Search&siteurl=www.tecmint.com%2F&ref=duckduckgo.com%2F&ss=3875j2780811j15"
    },
    {
        "d": "www.tecmundo.com.br",
        "b": "tecmundo",
        "u": "https://www.tecmundo.com.br/busca?q={{{s}}}"
    },
    {
        "d": "tecnoblog.net",
        "b": "tecnoblog",
        "u": "https://tecnoblog.net/?s={{{s}}}"
    },
    {
        "d": "www.tensorflow.org",
        "b": "teflo",
        "u": "https://www.tensorflow.org/s/results/?q={{{s}}}"
    },
    {
        "d": "www.tei-c.org",
        "b": "tei",
        "u": "http://www.tei-c.org/?s={{{s}}}"
    },
    {
        "d": "teketen.com",
        "b": "teketen",
        "u": "http://teketen.com/?s={{{s}}}&submit=Search"
    },
    {
        "d": "www.tek.no",
        "b": "tek.no",
        "u": "https://www.tek.no/sok?query= {{{s}}}"
    },
    {
        "d": "teknosains.com",
        "b": "tekno",
        "u": "http://teknosains.com/search?q={{{s}}}:"
    },
    {
        "d": "www.teknologimasakini.com",
        "b": "tekn",
        "u": "https://www.teknologimasakini.com/search?q={{{s}}}&max-results=8"
    },
    {
        "d": "www.tek.com",
        "b": "tek",
        "u": "https://www.tek.com/search?keywords={{{s}}}"
    },
    {
        "d": "www.telstra.com.au",
        "b": "telstra",
        "u": "https://www.telstra.com.au/search/simple-search?inpSearch={{{s}}}&requestSiteId=personal&searchFormSubmited=Yes"
    },
    {
        "d": "tema18.blogspot.com",
        "b": "tema18",
        "u": "https://tema18.blogspot.com/search?q={{{s}}}"
    },
    {
        "d": "en.wikipedia.org",
        "b": "template",
        "u": "https://en.wikipedia.org/wiki/Template:{{{s}}}"
    },
    {
        "d": "www.tensorflow.org",
        "b": "tensorflow",
        "u": "https://www.tensorflow.org/s/results/?q={{{s}}}"
    },
    {
        "d": "www.teradata.com",
        "b": "teradata",
        "u": "https://www.teradata.com/Search?SearchText={{{s}}}"
    },
    {
        "d": "teratail.com",
        "b": "terat",
        "u": "https://teratail.com/questions/search?q={{{s}}}&conditions=and"
    },
    {
        "d": "brettterpstra.com",
        "b": "terp",
        "u": "http://brettterpstra.com/search/?q={{{s}}}"
    },
    {
        "d": "extensions.typo3.org",
        "b": "ter",
        "u": "https://extensions.typo3.org/?L=0&id=1&tx_solr[q]={{{s}}}"
    },
    {
        "d": "te-st.ru",
        "b": "te-st",
        "u": "https://te-st.ru/?s={{{s}}}"
    },
    {
        "d": "texdoc.net",
        "b": "texdoc",
        "u": "http://texdoc.net/pkg/{{{s}}}"
    },
    {
        "d": "tex.stackexchange.com",
        "b": "texse",
        "u": "http://tex.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "free3d.com",
        "b": "tf3d",
        "u": "https://free3d.com/3d-models/{{{s}}}"
    },
    {
        "d": "www.tensorflow.org",
        "b": "tflow",
        "u": "https://www.tensorflow.org/s/results/?q={{{s}}} "
    },
    {
        "d": "www.terraform.io",
        "b": "tfopr",
        "u": "https://www.terraform.io/docs/providers/openstack/r/{{{s}}}.html"
    },
    {
        "d": "www.thermofisher.com",
        "b": "tfs",
        "u": "http://www.thermofisher.com/search/results?query={{{s}}}"
    },
    {
        "d": "www.tensorflow.org",
        "b": "tf",
        "u": "https://www.tensorflow.org/s/results/?q={{{s}}}"
    },
    {
        "d": "www.thefastmode.com",
        "b": "thefastmode",
        "u": "http://www.thefastmode.com/site-search?q={{{s}}}"
    },
    {
        "d": "thegloor.com",
        "b": "thegloor",
        "u": "https://thegloor.com/?s={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "thehackernews",
        "u": "https://www.google.com/cse?q=test&cx=partner-pub-7983783048239650%3A3179771210#gsc.tab=0&gsc.q={{{s}}}&gsc.page=1"
    },
    {
        "d": "thenounproject.com",
        "b": "thenoun",
        "u": "https://thenounproject.com/search/?q={{{s}}}"
    },
    {
        "d": "www.thewebflash.com",
        "b": "thewebflash",
        "u": "https://www.thewebflash.com/?s={{{s}}}"
    },
    {
        "d": "www.thingiverse.com",
        "b": "thg",
        "u": "http://www.thingiverse.com/search?q={{{s}}}&sa="
    },
    {
        "d": "thilina.piyasundara.org",
        "b": "thilina",
        "u": "https://thilina.piyasundara.org/search?q={{{s}}}"
    },
    {
        "d": "www.thingiverse.com",
        "b": "thingiverse",
        "u": "http://www.thingiverse.com/search?cx=015525747728168968820%3Arqnsgx1xxcw&cof=FORID%3A9&q={{{s}}}"
    },
    {
        "d": "www.thingiverse.com",
        "b": "thing",
        "u": "https://www.thingiverse.com/search?q={{{s}}}"
    },
    {
        "d": "www.thingiverse.com",
        "b": "thingy",
        "u": "https://www.thingiverse.com/search?q={{{s}}}"
    },
    {
        "d": "thinktutorial.com",
        "b": "thinktutorial",
        "u": "http://thinktutorial.com/index.php?s={{{s}}}"
    },
    {
        "d": "thinkwiki.de",
        "b": "thinkwikide",
        "u": "http://thinkwiki.de/index.php?search={{{s}}}"
    },
    {
        "d": "www.thinkwiki.org",
        "b": "thinkwiki",
        "u": "http://www.thinkwiki.org/w/index.php?search={{{s}}}&go=Go&title=Special%3ASearch"
    },
    {
        "d": "thwack.solarwinds.com",
        "b": "thwack",
        "u": "https://thwack.solarwinds.com/search.jspa?q={{{s}}}"
    },
    {
        "d": "www.techinasia.com",
        "b": "tia",
        "u": "https://www.techinasia.com/search?query={{{s}}}"
    },
    {
        "d": "stockflare.com",
        "b": "ticker",
        "u": "https://stockflare.com/#stocks/${{{s}}} "
    },
    {
        "d": "unixtimestamp.com",
        "b": "timestamp",
        "u": "http://unixtimestamp.com/?unixTimestampInput={{{s}}}"
    },
    {
        "d": "www.unixtimestamp.org",
        "b": "time",
        "u": "http://www.unixtimestamp.org/?timestamp={{{s}}}"
    },
    {
        "d": "www.timhortons.com",
        "b": "timhortons",
        "u": "http://www.timhortons.com/ca/en/search/search-results.php?q={{{s}}}"
    },
    {
        "d": "tkkrlab.nl",
        "b": "tkkrlab",
        "u": "http://tkkrlab.nl/wiki/Special:Search?search={{{s}}}&go=Go"
    },
    {
        "d": "www.thomas-krenn.com",
        "b": "tkw",
        "u": "https://www.thomas-krenn.com/de/wiki/Spezial:Suchergebnisseite?type=mediawiki_page&q={{{s}}}"
    },
    {
        "d": "www.google.com",
        "b": "tldp",
        "u": "http://www.google.com/cse?cx=017644269519104757279%3Agm62gtzaoky&q={{{s}}}"
    },
    {
        "d": "tldr.inbrowser.app",
        "b": "tldr",
        "u": "https://tldr.inbrowser.app/search?query={{{s}}}"
    },
    {
        "d": "toolslib.net",
        "b": "tlib",
        "u": "https://toolslib.net/search/projects/?q={{{s}}}"
    },
    {
        "d": "help.trello.com",
        "b": "tman",
        "u": "http://help.trello.com/search?query={{{s}}}"
    },
    {
        "d": "blog.trendmicro.com",
        "b": "tmblog",
        "u": "https://blog.trendmicro.com/?s={{{s}}}"
    },
    {
        "d": "registry.terraform.io",
        "b": "tmg",
        "u": "https://registry.terraform.io/search?q={{{s}}}"
    },
    {
        "d": "www.techmansworld.com",
        "b": "tmw",
        "u": "https://www.techmansworld.com/search?q={{{s}}}"
    },
    {
        "d": "thenerdystudent.com",
        "b": "tns",
        "u": "https://thenerdystudent.com/?s={{{s}}}"
    },
    {
        "d": "thenextweb.com",
        "b": "tnw",
        "u": "https://thenextweb.com/?q={{{s}}}"
    },
    {
        "d": "www.tomshardware.com",
        "b": "tomshardware",
        "u": "http://www.tomshardware.com/s/{{{s}}}"
    },
    {
        "d": "www.tomshardware.com",
        "b": "tomshw",
        "u": "http://www.tomshardware.com/s/{{{s}}}/"
    },
    {
        "d": "www.tonymacx86.com",
        "b": "tonymacx86",
        "u": "https://www.tonymacx86.com/search/48223690/?q={{{s}}}&o=date"
    },
    {
        "d": "toolslib.net",
        "b": "toolslib",
        "u": "https://toolslib.net/search/projects/?q={{{s}}}"
    },
    {
        "d": "atlas.torproject.org",
        "b": "toratlas",
        "u": "https://atlas.torproject.org/#search/{{{s}}}"
    },
    {
        "d": "{{{s}}}.tor2web.org",
        "b": "tor",
        "u": "https://{{{s}}}.tor2web.org/"
    },
    {
        "d": "toster.ru",
        "b": "tost",
        "u": "https://toster.ru/search?q={{{s}}}"
    },
    {
        "d": "www.totalcmd.net",
        "b": "totalcmd",
        "u": "http://www.totalcmd.net/search.php?s={{{s}}}"
    },
    {
        "d": "toucharcade.com",
        "b": "toucharcade",
        "u": "http://toucharcade.com/?s={{{s}}}"
    },
    {
        "d": "tools.tracemyip.org",
        "b": "tracemyip",
        "u": "http://tools.tracemyip.org/lookup/{{{s}}}"
    },
    {
        "d": "network-tools.com",
        "b": "traceroute",
        "u": "http://network-tools.com/default.asp?prog=trace&host={{{s}}}"
    },
    {
        "d": "travis-ci.org",
        "b": "travis",
        "u": "https://travis-ci.org/search/{{{s}}}"
    },
    {
        "d": "www.trendmicro.com",
        "b": "trendmicro",
        "u": "https://www.trendmicro.com/en_us/common/cse.html#?cludoquery={{{s}}}"
    },
    {
        "d": "www.tripwire.com",
        "b": "tripwire",
        "u": "https://www.tripwire.com/state-of-security?s={{{s}}}"
    },
    {
        "d": "trisquel.info",
        "b": "trisquel",
        "u": "http://trisquel.info/en/search/node/{{{s}}} & https://trisquel.info/en/search/node/{{{s}}}"
    },
    {
        "d": "www.techsupportalert.com",
        "b": "tsa",
        "u": "http://www.techsupportalert.com/search/google?query={{{s}}}"
    },
    {
        "d": "www.turbosquid.com",
        "b": "ts",
        "u": "http://www.turbosquid.com/Search/Index.cfm?keyword={{{s}}}"
    },
    {
        "d": "www.npmjs.com",
        "b": "tstypes",
        "u": "https://www.npmjs.com/search?q=%40types%2F{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "tupo",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Awww.tutorialspoint.com&ia=web"
    },
    {
        "d": "www.tutorilio.com",
        "b": "tutorilio",
        "u": "https://www.tutorilio.com/?q={{{s}}}"
    },
    {
        "d": "tutsplus.com",
        "b": "tutsplus",
        "u": "http://tutsplus.com/tutorials/search?utf8=%E2%9C%93&search[topic]=&search[terms]={{{s}}}&button="
    },
    {
        "d": "hub.tutsplus.com",
        "b": "tuts",
        "u": "http://hub.tutsplus.com/search?utf8=✓&view=grid&search%5Bkeywords%5D={{{s}}}"
    },
    {
        "d": "linuxinthebox.company",
        "b": "tux",
        "u": "http://linuxinthebox.company/?product_cat=&post_type=product&s={{{s}}}"
    },
    {
        "d": "www.thewebflash.com",
        "b": "twf",
        "u": "https://www.thewebflash.com/?s={{{s}}}"
    },
    {
        "d": "twig.symfony.com",
        "b": "twig",
        "u": "https://twig.symfony.com/{{{s}}}"
    },
    {
        "d": "tweaklibrary.com",
        "b": "twlb",
        "u": "https://tweaklibrary.com/?s={{{s}}}"
    },
    {
        "d": "www.ti.com",
        "b": "txi",
        "u": "http://www.ti.com/sitesearch/docs/universalsearch.tsp?searchTerm={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "typescript",
        "u": "http://duckduckgo.com/?q={{{s}}}+site:www.typescriptlang.org"
    },
    {
        "d": "typo3.org",
        "b": "typo3",
        "u": "https://typo3.org/search/?tx_solr[q]={{{s}}}"
    },
    {
        "d": "uappexplorer.com",
        "b": "uappex",
        "u": "https://uappexplorer.com/apps?q={{{s}}}&sort=relevance"
    },
    {
        "d": "apps.ubuntu.com",
        "b": "uapps",
        "u": "https://apps.ubuntu.com/cat/search/?q={{{s}}}"
    },
    {
        "d": "www.ubergizmo.com",
        "b": "ubergizmo",
        "u": "http://www.ubergizmo.com/search/?q={{{s}}}"
    },
    {
        "d": "wiki.uberspace.de",
        "b": "uberspace",
        "u": "https://wiki.uberspace.de/start?do=search&id={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ubhu",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:ubuntu.hu"
    },
    {
        "d": "community.ubnt.com",
        "b": "ubiquiti",
        "u": "https://community.ubnt.com/t5/forums/searchpage/tab/message?q={{{s}}}"
    },
    {
        "d": "ubottu.com",
        "b": "ubottu",
        "u": "http://ubottu.com/factoids.cgi?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "ubufr",
        "u": "https://duckduckgo.com/?q=site%3Aubuntu-fr.org+{{{s}}}&ia=web"
    },
    {
        "d": "forum.ubuntu.org.cn",
        "b": "ubuntuchina",
        "u": "https://forum.ubuntu.org.cn/search.php?keywords={{{s}}}"
    },
    {
        "d": "ubuntuforums.org",
        "b": "ubuntuforums",
        "u": "http://ubuntuforums.org/search.php?do=process&query={{{s}}}"
    },
    {
        "d": "www.google.fr",
        "b": "ubuntufr",
        "u": "https://www.google.fr/search?q={{{s}}}+site%3Aubuntu-fr.org&gws_rd=ssl"
    },
    {
        "d": "ubuntuforums.org",
        "b": "ubuntuf",
        "u": "http://ubuntuforums.org/search.php?do=process&query={{{s}}}"
    },
    {
        "d": "packages.ubuntu.com",
        "b": "ubuntupack",
        "u": "http://packages.ubuntu.com/search?keywords={{{s}}}"
    },
    {
        "d": "forum.ubuntu-tr.net",
        "b": "ubuntutr",
        "u": "http://forum.ubuntu-tr.net/index.php?action=search;q={{{s}}}"
    },
    {
        "d": "www.ubuntu.com",
        "b": "ubuntu",
        "u": "https://www.ubuntu.com/search?q={{{s}}}"
    },
    {
        "d": "ubuntuusers.de",
        "b": "ubuntuusers",
        "u": "http://ubuntuusers.de/search/?query={{{s}}}&area=all"
    },
    {
        "d": "duckduckgo.com",
        "b": "ubuntuwikide",
        "u": "http://duckduckgo.com/?q=site%3Awiki.ubuntuusers.de+{{{s}}}"
    },
    {
        "d": "search.ucern.com",
        "b": "ucern",
        "u": "https://search.ucern.com/search?cp=connect&q={{{s}}}"
    },
    {
        "d": "www.mclean.net.nz",
        "b": "ucf",
        "u": "http://www.mclean.net.nz/ucf/?q={{{s}}}"
    },
    {
        "d": "unicode-table.com",
        "b": "uct",
        "u": "http://unicode-table.com/search/?q={{{s}}}"
    },
    {
        "d": "developer.ubuntu.com",
        "b": "udev",
        "u": "https://developer.ubuntu.com/en/search/?q={{{s}}}"
    },
    {
        "d": "docs.unrealengine.com",
        "b": "ue4docs",
        "u": "https://docs.unrealengine.com/en-us/Search-Results?Search={{{s}}}"
    },
    {
        "d": "answers.unrealengine.com",
        "b": "uea",
        "u": "https://answers.unrealengine.com/search.html?q={{{s}}}"
    },
    {
        "d": "keyserver.ubuntu.com",
        "b": "ukeys",
        "u": "https://keyserver.ubuntu.com/pks/lookup?search={{{s}}}&fingerprint=on&hash=on&op=vindex"
    },
    {
        "d": "uk.pcpartpicker.com",
        "b": "ukppp",
        "u": "https://uk.pcpartpicker.com/search/?cc=uk&q={{{s}}}"
    },
    {
        "d": "www.youmagine.com",
        "b": "umagine",
        "u": "https://www.youmagine.com/search/designs?utf8=%E2%9C%93&search={{{s}}}"
    },
    {
        "d": "manpages.ubuntu.com",
        "b": "uman",
        "u": "https://manpages.ubuntu.com/cgi-bin/search.py?q={{{s}}}"
    },
    {
        "d": "www.fileformat.info",
        "b": "unicode",
        "u": "http://www.fileformat.info/info/unicode/char/search.htm?q={{{s}}}&preview=entity"
    },
    {
        "d": "unicode-search.net",
        "b": "uni",
        "u": "http://unicode-search.net/unicode-namesearch.pl?term={{{s}}}"
    },
    {
        "d": "answers.unity3d.com",
        "b": "unityanswers",
        "u": "http://answers.unity3d.com/search.html?q={{{s}}}"
    },
    {
        "d": "docs.unity3d.com",
        "b": "unityapi",
        "u": "http://docs.unity3d.com/ScriptReference/30_search.html?q={{{s}}} "
    },
    {
        "d": "www.assetstore.unity3d.com",
        "b": "unityast",
        "u": "https://www.assetstore.unity3d.com/en/#!/search/page=1/sortby=relevance/query={{{s}}}"
    },
    {
        "d": "docs.unity3d.com",
        "b": "unitym",
        "u": "http://docs.unity3d.com/Manual/30_search.html?q={{{s}}}"
    },
    {
        "d": "docs.unity3d.com",
        "b": "unitysr",
        "u": "http://docs.unity3d.com/ScriptReference/30_search.html?q={{{s}}}"
    },
    {
        "d": "unity3d.com",
        "b": "unity",
        "u": "http://unity3d.com/search?gq={{{s}}} "
    },
    {
        "d": "unixhow.com",
        "b": "unixhow",
        "u": "https://unixhow.com/search?q={{{s}}}"
    },
    {
        "d": "minnie.tuhs.org",
        "b": "unix",
        "u": "http://minnie.tuhs.org/cgi-bin/utree.pl?filesearch={{{s}}}&submit=Go"
    },
    {
        "d": "unpkg.com",
        "b": "unpkg",
        "u": "https://unpkg.com/{{{s}}}"
    },
    {
        "d": "unshorten.me",
        "b": "unshorten",
        "u": "https://unshorten.me/s/{{{s}}}"
    },
    {
        "d": "untergang.de",
        "b": "untergang",
        "u": "http://untergang.de/index.php?option=search&searchword={{{s}}}"
    },
    {
        "d": "packages.ubuntu.com",
        "b": "upackages",
        "u": "http://packages.ubuntu.com/search?keywords={{{s}}}&searchon=names&suite=all&section=all"
    },
    {
        "d": "launchpad.net",
        "b": "upkg",
        "u": "https://launchpad.net/ubuntu/+source/{{{s}}}"
    },
    {
        "d": "www.uplabs.com",
        "b": "uplabs",
        "u": "http://www.uplabs.com/search?q={{{s}}}"
    },
    {
        "d": "en.uptodown.com",
        "b": "uptodown",
        "u": "https://en.uptodown.com/android/search/{{{s}}}"
    },
    {
        "d": "packages.ubuntu.com",
        "b": "up",
        "u": "http://packages.ubuntu.com/search?keywords={{{s}}}&searchon=names"
    },
    {
        "d": "docs.unity3d.com",
        "b": "uscript",
        "u": "http://docs.unity3d.com/Documentation/ScriptReference/30_search.html?q={{{s}}}"
    },
    {
        "d": "apps.ubuntu.com",
        "b": "usc",
        "u": "https://apps.ubuntu.com/cat/search/?q={{{s}}} "
    },
    {
        "d": "userstyles.org",
        "b": "userstyles",
        "u": "http://userstyles.org/styles/browse/all/{{{s}}}"
    },
    {
        "d": "unix.stackexchange.com",
        "b": "use",
        "u": "http://unix.stackexchange.com/search?q={{{s}}} "
    },
    {
        "d": "usite.hu",
        "b": "usite",
        "u": "http://usite.hu/{{{s}}}"
    },
    {
        "d": "docs.unity3d.com",
        "b": "usr",
        "u": "https://docs.unity3d.com/ScriptReference/30_search.html?q={{{s}}}"
    },
    {
        "d": "userstyles.org",
        "b": "ustyles",
        "u": "https://userstyles.org/styles/browse?search_terms={{{s}}}"
    },
    {
        "d": "www.fileformat.info",
        "b": "utf8",
        "u": "http://www.fileformat.info/info/unicode/char/search.htm?q={{{s}}}&preview=entity"
    },
    {
        "d": "open-store.io",
        "b": "utos",
        "u": "https://open-store.io/?sort=relevance&search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "uude",
        "u": "https://duckduckgo.com/?q=site%3Aubuntuusers.de+{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "uu",
        "u": "https://duckduckgo.com/?q=site%3Aubuntuusers.de+{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "uuwiki",
        "u": "https://duckduckgo.com/?q=site:wiki.ubuntuusers.de+{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "uuw",
        "u": "https://duckduckgo.com/?q=site:wiki.ubuntuusers.de+{{{s}}}"
    },
    {
        "d": "wiki.ubuntu.com",
        "b": "uwiki",
        "u": "https://wiki.ubuntu.com/Home?action=fullsearch&context=180&value={{{s}}}"
    },
    {
        "d": "uxul.de",
        "b": "uxul",
        "u": "https://uxul.de/find?search={{{s}}}"
    },
    {
        "d": "ux.stackexchange.com",
        "b": "ux",
        "u": "http://ux.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "app.vagrantup.com",
        "b": "vagrant",
        "u": "https://app.vagrantup.com/boxes/search?q={{{s}}}"
    },
    {
        "d": "valadoc.org",
        "b": "valadoc",
        "u": "https://valadoc.org/?q={{{s}}}"
    },
    {
        "d": "validator.nu",
        "b": "validatornu",
        "u": "https://validator.nu/?doc={{{s}}}"
    },
    {
        "d": "developer.valvesoftware.com",
        "b": "valve",
        "u": "https://developer.valvesoftware.com/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "vimawesome.com",
        "b": "va",
        "u": "http://vimawesome.com/?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "vba",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3Amsdn.microsoft.com%2Fen-us%2Fvba&t=ffab&ia=web"
    },
    {
        "d": "volumebot.com",
        "b": "vbot",
        "u": "https://volumebot.com/?s={{{s}}}"
    },
    {
        "d": "www.vbprofiles.com",
        "b": "vbp",
        "u": "http://www.vbprofiles.com/search?q={{{s}}}"
    },
    {
        "d": "developer.valvesoftware.com",
        "b": "vdc",
        "u": "https://developer.valvesoftware.com/w/index.php?search={{{s}}} "
    },
    {
        "d": "www.theverge.com",
        "b": "verge",
        "u": "http://www.theverge.com/search?q={{{s}}}"
    },
    {
        "d": "www.verisure.se",
        "b": "verisure",
        "u": "https://www.verisure.se/hidden/search-results.html?query={{{s}}}"
    },
    {
        "d": "veroot.com",
        "b": "veroot",
        "u": "http://veroot.com/search/{{{s}}}"
    },
    {
        "d": "victorhckinthefreeworld.wordpress.com",
        "b": "vhck",
        "u": "https://victorhckinthefreeworld.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "vibed.org",
        "b": "vibed",
        "u": "https://vibed.org/api/search?q={{{s}}}"
    },
    {
        "d": "vimawesome.com",
        "b": "vimawesome",
        "u": "http://vimawesome.com/?q={{{s}}}"
    },
    {
        "d": "vimawesome.com",
        "b": "vimaw",
        "u": "http://vimawesome.com/?q={{{s}}}"
    },
    {
        "d": "vimdoc.sourceforge.net",
        "b": "vimdoc",
        "u": "http://vimdoc.sourceforge.net/search.php?search={{{s}}}&docs=help"
    },
    {
        "d": "www.vim.org",
        "b": "vimscripts",
        "u": "http://www.vim.org/scripts/script_search_results.php?keywords={{{s}}}&script_type=&order_by=rating&direction=descending&search=search"
    },
    {
        "d": "www.google.com",
        "b": "vim",
        "u": "https://www.google.com/cse?cx=partner-pub-3005259998294962%3Abvyni59kjr1&q={{{s}}}"
    },
    {
        "d": "vim.wikia.com",
        "b": "vimw",
        "u": "http://vim.wikia.com/wiki/Special:Search?query={{{s}}}"
    },
    {
        "d": "www.virustotal.com",
        "b": "virustotalfilesearch",
        "u": "https://www.virustotal.com/en/search?query={{{s}}}"
    },
    {
        "d": "vi.stackexchange.com",
        "b": "viso",
        "u": "https://vi.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "docs.vmware.com",
        "b": "vmdocs",
        "u": "https://docs.vmware.com/en/search/#/{{{s}}}"
    },
    {
        "d": "kb.vmware.com",
        "b": "vmkb",
        "u": "https://kb.vmware.com/s/global-search/%40uri#q={{{s}}}"
    },
    {
        "d": "www.vodafone.com",
        "b": "vodafone",
        "u": "https://www.vodafone.com/content/index/search.html?search-query={{{s}}}"
    },
    {
        "d": "docs.voidlinux.org",
        "b": "voiddocs",
        "u": "https://docs.voidlinux.org/?search={{{s}}}"
    },
    {
        "d": "wiki.voidlinux.org",
        "b": "void",
        "u": "https://wiki.voidlinux.org/index.php?search={{{s}}}"
    },
    {
        "d": "wiki.voidlinux.org",
        "b": "voidwiki",
        "u": "https://wiki.voidlinux.org/index.php?search={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "voit",
        "u": "https://duckduckgo.com/?q={{{s}}}+site%3AKarl-Voit.at&ia=web"
    },
    {
        "d": "www.vivaolinux.com.br",
        "b": "vol",
        "u": "http://www.vivaolinux.com.br/busca/?cx=partner-pub-3535276187000580%3A4725058203&cof=FORID%3A10&ie=UTF-8&q={{{s}}}&tipoBusca=0&siteurl=www.vivaolinux.com.br"
    },
    {
        "d": "www.vpncompare.co.uk",
        "b": "vpn",
        "u": "https://www.vpncompare.co.uk/?s={{{s}}}"
    },
    {
        "d": "marketplace.visualstudio.com",
        "b": "vscode",
        "u": "https://marketplace.visualstudio.com/search?term={{{s}}}&target=VSCode&sortBy=Relevance"
    },
    {
        "d": "www.vst4free.com",
        "b": "vst4free",
        "u": "http://www.vst4free.com/index.php?s_keywords={{{s}}}&s_name=1&s_kind=1&s_sent2=1&Submit=Search"
    },
    {
        "d": "www.virustotal.com",
        "b": "vtip",
        "u": "https://www.virustotal.com/en/ip-address/{{{s}}}/information/"
    },
    {
        "d": "www.vtk.org",
        "b": "vtkcd",
        "u": "http://www.vtk.org/doc/nightly/html/class{{{s}}}.html"
    },
    {
        "d": "vtluug.org",
        "b": "vtluug",
        "u": "https://vtluug.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "www.vulgumtechus.com",
        "b": "vt",
        "u": "http://www.vulgumtechus.com/index.php?title=Spécial:Recherche&search={{{s}}}"
    },
    {
        "d": "vuetifyjs.com",
        "b": "vuetify",
        "u": "https://vuetifyjs.com/en/components/{{{s}}}#{{{s}}}"
    },
    {
        "d": "vuejs.org",
        "b": "vue",
        "u": "https://vuejs.org/v2/search/?q={{{s}}}"
    },
    {
        "d": "www.vulnhub.com",
        "b": "vulnhub",
        "u": "https://www.vulnhub.com/?q={{{s}}}&sort=date-asc&type=vm"
    },
    {
        "d": "vuo.org",
        "b": "vuo",
        "u": "https://vuo.org/search/site/{{{s}}}"
    },
    {
        "d": "wiki.voidlinux.org",
        "b": "vw",
        "u": "https://wiki.voidlinux.org/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "vyavasthit.com",
        "b": "vyavasthit",
        "u": "https://vyavasthit.com/?s={{{s}}}"
    },
    {
        "d": "www.w3schools.com",
        "b": "w3satt",
        "u": "https://www.w3schools.com/tags/att_{{{s}}}.asp"
    },
    {
        "d": "www.google.com",
        "b": "w3scn",
        "u": "http://www.google.com/search?q={{{s}}}+site:w3school.com.cn"
    },
    {
        "d": "www.w3schools.com",
        "b": "w3stag",
        "u": "http://www.w3schools.com/tags/tag_{{{s}}}.asp"
    },
    {
        "d": "duckduckgo.com",
        "b": "w3s",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:w3schools.com"
    },
    {
        "d": "validator.w3.org",
        "b": "w3v",
        "u": "https://validator.w3.org/nu/?doc={{{s}}}"
    },
    {
        "d": "social.wakoopa.com",
        "b": "wakoopa",
        "u": "http://social.wakoopa.com/search?query={{{s}}}"
    },
    {
        "d": "www.wap.org",
        "b": "wap",
        "u": "https://www.wap.org/search?q={{{s}}}"
    },
    {
        "d": "web.archive.org",
        "b": "wayback",
        "u": "https://web.archive.org/web/*/{{{s}}}"
    },
    {
        "d": "wb3.io",
        "b": "wb3",
        "u": "https://wb3.io/{{{s}}}"
    },
    {
        "d": "mywiki.wooledge.org",
        "b": "wbgw",
        "u": "https://mywiki.wooledge.org/EnglishFrontPage?action=fullsearch&context=180&value={{{s}}}&titlesearch=Titles"
    },
    {
        "d": "boilerinvasion.org",
        "b": "wbi",
        "u": "http://boilerinvasion.org/search?search={{{s}}}"
    },
    {
        "d": "webmasterparadies.de",
        "b": "wbmp",
        "u": "https://webmasterparadies.de/?s={{{s}}}"
    },
    {
        "d": "web2py.com",
        "b": "web2py",
        "u": "http://web2py.com/books/default/search/29?search={{{s}}}"
    },
    {
        "d": "webbco.us",
        "b": "webbco",
        "u": "http://webbco.us/search.php?q={{{s}}}"
    },
    {
        "d": "www.webcomponents.org",
        "b": "webcomp",
        "u": "https://www.webcomponents.org/search/{{{s}}}"
    },
    {
        "d": "www.webcomponents.org",
        "b": "webcomponents",
        "u": "https://www.webcomponents.org/search/{{{s}}}"
    },
    {
        "d": "www.webdesignerdepot.com",
        "b": "webdesignerdepot",
        "u": "http://www.webdesignerdepot.com/?q={{{s}}}"
    },
    {
        "d": "developer.mozilla.org",
        "b": "webext",
        "u": "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=addons"
    },
    {
        "d": "webref.ru",
        "b": "webref",
        "u": "https://webref.ru/search/?s={{{s}}}&cx=partner-pub-0708135098984815%3A9970767379&cof=FORID%3A10&ie=UTF-8"
    },
    {
        "d": "www.webopedia.com",
        "b": "web",
        "u": "https://www.webopedia.com/sgsearch/results?q={{{s}}}"
    },
    {
        "d": "store.whale.naver.com",
        "b": "whale",
        "u": "https://store.whale.naver.com/search/{{{s}}}"
    },
    {
        "d": "www.whatruns.com",
        "b": "whatruns",
        "u": "https://www.whatruns.com/website/{{{s}}}"
    },
    {
        "d": "www.webhostinghub.com",
        "b": "whh",
        "u": "https://www.webhostinghub.com/help/search?searchword={{{s}}}"
    },
    {
        "d": "www.whoishostingthis.com",
        "b": "whohosts",
        "u": "http://www.whoishostingthis.com/?q={{{s}}}"
    },
    {
        "d": "registro.br",
        "b": "whoisbr",
        "u": "https://registro.br/cgi-bin/whois/?qr={{{s}}}"
    },
    {
        "d": "whois.domaintools.com",
        "b": "whois",
        "u": "https://whois.domaintools.com/{{{s}}}"
    },
    {
        "d": "whoiz.herokuapp.com",
        "b": "whoizh",
        "u": "http://whoiz.herokuapp.com/lookup?url={{{s}}}"
    },
    {
        "d": "kkkkkkkkkk63ava6.onion",
        "b": "whonix",
        "u": "http://kkkkkkkkkk63ava6.onion/w/index.php?search={{{s}}}"
    },
    {
        "d": "en.wikichip.org",
        "b": "wikichips",
        "u": "https://en.wikichip.org/w/index.php?title=Special%3ASearch&search={{{s}}}"
    },
    {
        "d": "en.wikichip.org",
        "b": "wikichip",
        "u": "https://en.wikichip.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "wikidevi.com",
        "b": "wikidevi",
        "u": "https://wikidevi.com/w/index.php?search={{{s}}}&title=Special%3ASearch&go=Go"
    },
    {
        "d": "wiki.hybris.com",
        "b": "wikihybris",
        "u": "https://wiki.hybris.com/dosearchsite.action?queryString={{{s}}}"
    },
    {
        "d": "wikipediocracy.com",
        "b": "wikipediocracy",
        "u": "http://wikipediocracy.com/?s={{{s}}}"
    },
    {
        "d": "wiki.splunk.com",
        "b": "wiki.splunk",
        "u": "http://wiki.splunk.com/Special:SplunkSearch/wiki?q={{{s}}}"
    },
    {
        "d": "wiki.zimbra.com",
        "b": "wikizimbra",
        "u": "https://wiki.zimbra.com/index.php?search={{{s}}}"
    },
    {
        "d": "blog.miniasp.com",
        "b": "willh",
        "u": "http://blog.miniasp.com/search.aspx?q={{{s}}}"
    },
    {
        "d": "wpdev.uservoice.com",
        "b": "windev",
        "u": "https://wpdev.uservoice.com/search?query={{{s}}}"
    },
    {
        "d": "www.microsoft.com",
        "b": "windowsphone",
        "u": "https://www.microsoft.com/en-us/search/result.aspx?q={{{s}}}&form=apps"
    },
    {
        "d": "windowsreport.com",
        "b": "windowsreport",
        "u": "http://windowsreport.com/?s={{{s}}}"
    },
    {
        "d": "winehq.org",
        "b": "wine",
        "u": "http://winehq.org/search?cx=partner-pub-0971840239976722%3Aw9sqbcsxtyf&cof=FORID%3A10&q={{{s}}}"
    },
    {
        "d": "windows.microsoft.com",
        "b": "winstore",
        "u": "http://windows.microsoft.com/en-us/windows/search#q={{{s}}}&s=Store"
    },
    {
        "d": "www.wired.com",
        "b": "wired",
        "u": "https://www.wired.com/search/?q={{{s}}}&page=1&sort=score"
    },
    {
        "d": "bugs.webkit.org",
        "b": "wkb",
        "u": "https://bugs.webkit.org/buglist.cgi?quicksearch={{{s}}}"
    },
    {
        "d": "wikidevi.com",
        "b": "wkd",
        "u": "https://wikidevi.com/w/index.php?search={{{s}}}"
    },
    {
        "d": "mathematica.stackexchange.com",
        "b": "wmse",
        "u": "https://mathematica.stackexchange.com/search?q={{{s}}}"
    },
    {
        "d": "www.wnp.pl",
        "b": "wnp",
        "u": "http://www.wnp.pl/wyszukiwanie.html?szukaj={{{s}}}"
    },
    {
        "d": "wordlift.io",
        "b": "wordlift",
        "u": "https://wordlift.io/blog/en/?s={{{s}}}"
    },
    {
        "d": "wordnetweb.princeton.edu",
        "b": "wordnet",
        "u": "http://wordnetweb.princeton.edu/perl/webwn?s={{{s}}}&sub=Search+WordNet&o2=&o0=1&o7=&o5=&o1=1&o6=&o4=&o3=&h="
    },
    {
        "d": "www.worldcat.org",
        "b": "worldcat",
        "u": "http://www.worldcat.org/search?qt=worldcat_org_all&q={{{s}}}"
    },
    {
        "d": "www.mywot.com",
        "b": "wot",
        "u": "https://www.mywot.com/en/scorecard/{{{s}}}"
    },
    {
        "d": "www.wowtrk.com",
        "b": "wowtrk",
        "u": "https://www.wowtrk.com/offers/?keyword={{{s}}}"
    },
    {
        "d": "support.advancedcustomfields.com",
        "b": "wpacf",
        "u": "https://support.advancedcustomfields.com/forums/search?bbp_search={{{s}}}"
    },
    {
        "d": "wpackagist.org",
        "b": "wpackagist",
        "u": "https://wpackagist.org/search?q={{{s}}}&type=any&search="
    },
    {
        "d": "www.wpbeginner.com",
        "b": "wpbeg",
        "u": "http://www.wpbeginner.com/search/?q={{{s}}}"
    },
    {
        "d": "wpplugindirectory.org",
        "b": "wpd",
        "u": "http://wpplugindirectory.org/?s={{{s}}}"
    },
    {
        "d": "wordpress.org",
        "b": "wpp",
        "u": "https://wordpress.org/plugins/search/{{{s}}}/"
    },
    {
        "d": "wordpress.stackexchange.com",
        "b": "wpse",
        "u": "http://wordpress.stackexchange.com/search?q={{{s}}} "
    },
    {
        "d": "vip.wordpress.com",
        "b": "wpvip",
        "u": "https://vip.wordpress.com/?s={{{s}}}"
    },
    {
        "d": "wpzen.pl",
        "b": "wpzen",
        "u": "http://wpzen.pl/?s={{{s}}}"
    },
    {
        "d": "worldvectorlogo.com",
        "b": "wvl",
        "u": "https://worldvectorlogo.com/search/{{{s}}}"
    },
    {
        "d": "asciiwwdc.com",
        "b": "wwdc",
        "u": "http://asciiwwdc.com/search?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "wxdev",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:https://developers.weixin.qq.com/miniprogram/dev"
    },
    {
        "d": "developers.weixin.qq.com",
        "b": "wxmp",
        "u": "https://developers.weixin.qq.com/doc/search.html?query={{{s}}}"
    },
    {
        "d": "docs.wxwidgets.org",
        "b": "wxw",
        "u": "http://docs.wxwidgets.org/trunk/search.php?query={{{s}}}"
    },
    {
        "d": "www.warpzone.ms",
        "b": "wz",
        "u": "https://www.warpzone.ms/?s={{{s}}} "
    },
    {
        "d": "ref.x86asm.net",
        "b": "x86",
        "u": "http://ref.x86asm.net/geek.html#{{{s}}}"
    },
    {
        "d": "forums.xamarin.com",
        "b": "xamarinforums",
        "u": "http://forums.xamarin.com/search?Search={{{s}}}"
    },
    {
        "d": "developer.xamarin.com",
        "b": "xamarin",
        "u": "https://developer.xamarin.com/search?q={{{s}}}"
    },
    {
        "d": "github.com",
        "b": "xbps",
        "u": "https://github.com/void-linux/void-packages/search?q[]=filename%3Atemplate+path%3A%2Fsrcpkgs&q[]={{{s}}}&s=indexed"
    },
    {
        "d": "forum.xda-developers.com",
        "b": "xdadev",
        "u": "http://forum.xda-developers.com/sitesearch.php?q={{{s}}}"
    },
    {
        "d": "forum.xda-developers.com",
        "b": "xdaf",
        "u": "http://forum.xda-developers.com/sitesearch.php?q={{{s}}}"
    },
    {
        "d": "labs.xda-developers.com",
        "b": "xdal",
        "u": "https://labs.xda-developers.com/?search={{{s}}}"
    },
    {
        "d": "forum.xda-developers.com",
        "b": "xda",
        "u": "https://forum.xda-developers.com/search/?query={{{s}}}"
    },
    {
        "d": "xmpp.org",
        "b": "xep",
        "u": "https://xmpp.org/extensions/xep-{{{s}}}.html"
    },
    {
        "d": "www.xfce-look.org",
        "b": "xfce-look",
        "u": "https://www.xfce-look.org/search?projectSearchText={{{s}}} "
    },
    {
        "d": "forum.xojo.com",
        "b": "xf",
        "u": "https://forum.xojo.com/conversations/all?search={{{s}}}"
    },
    {
        "d": "learnxinyminutes.com",
        "b": "xiny",
        "u": "https://learnxinyminutes.com/docs/{{{s}}}"
    },
    {
        "d": "forum.xojo.com",
        "b": "xojo",
        "u": "https://forum.xojo.com/conversations/all?search={{{s}}}"
    },
    {
        "d": "blog.xorp.hu",
        "b": "xorp",
        "u": "https://blog.xorp.hu/?s={{{s}}}"
    },
    {
        "d": "explainshell.com",
        "b": "xsh",
        "u": "http://explainshell.com/explain?cmd={{{s}}}"
    },
    {
        "d": "www.xwiki.org",
        "b": "xwiki",
        "u": "http://www.xwiki.org/xwiki/bin/view/Main/Search?text={{{s}}}"
    },
    {
        "d": "yarnpkg.com",
        "b": "yarnpkg",
        "u": "https://yarnpkg.com/en/packages?q={{{s}}}"
    },
    {
        "d": "yarnpkg.com",
        "b": "yarn",
        "u": "https://yarnpkg.com/en/packages?q={{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "yegg",
        "u": "https://duckduckgo.com/?q=site%3Ahttp%3A%2F%2Fwww.gabrielweinberg.com%2Fblog+{{{s}}}"
    },
    {
        "d": "www.yiiframework.com",
        "b": "yii",
        "u": "http://www.yiiframework.com/search/?q={{{s}}}"
    },
    {
        "d": "www.youmagine.com",
        "b": "ymgn",
        "u": "https://www.youmagine.com/search/designs?search={{{s}}}"
    },
    {
        "d": "www.youmagine.com",
        "b": "youmagine",
        "u": "https://www.youmagine.com/search/designs?utf8=%E2%9C%93&search={{{s}}}"
    },
    {
        "d": "www.yours.org",
        "b": "yours",
        "u": "https://www.yours.org/search?q={{{s}}}"
    },
    {
        "d": "wiki.yoctoproject.org",
        "b": "ypw",
        "u": "https://wiki.yoctoproject.org/wiki/index.php?search={{{s}}}"
    },
    {
        "d": "youtrack.jetbrains.com",
        "b": "ytrack",
        "u": "https://youtrack.jetbrains.com/issues?q={{{s}}}"
    },
    {
        "d": "zaufanatrzeciastrona.pl",
        "b": "z3s",
        "u": "https://zaufanatrzeciastrona.pl/?s={{{s}}}"
    },
    {
        "d": "www.zdnet.com",
        "b": "zdnet",
        "u": "http://www.zdnet.com/search?q={{{s}}}"
    },
    {
        "d": "zdoom.org",
        "b": "zdoom",
        "u": "http://zdoom.org/w/index.php?search={{{s}}}"
    },
    {
        "d": "zestedesavoir.com",
        "b": "zds",
        "u": "http://zestedesavoir.com/rechercher/?q={{{s}}}"
    },
    {
        "d": "foundation.zurb.com",
        "b": "zff",
        "u": "http://foundation.zurb.com/forum/posts?utf8=✓&search={{{s}}}&button="
    },
    {
        "d": "duckduckgo.com",
        "b": "zf",
        "u": "https://duckduckgo.com/?q={{{s}}}+site:framework.zend.com"
    },
    {
        "d": "search.zoho.com",
        "b": "zoho",
        "u": "https://search.zoho.com/searchresult?query={{{s}}}&search_type=all&index_key=-1&embed=false"
    },
    {
        "d": "foundation.zurb.com",
        "b": "zurbfoundation",
        "u": "http://foundation.zurb.com/docs//?q={{{s}}}: "
    },
    {
        "d": "foundation.zurb.com",
        "b": "zurbf",
        "u": "http://foundation.zurb.com/docs//?q={{{s}}}: "
    },
    {
        "d": "zvon.org",
        "b": "zvon",
        "u": "http://zvon.org/comp/m/{{{s}}}.html"
    },
    {
        "d": "elixir.bootlin.com",
        "b": "zxr",
        "u": "https://elixir.bootlin.com/zephyr/latest/ident/{{{s}}}"
    },
    {
        "d": "duckduckgo.com",
        "b": "zythom",
        "u": "https://duckduckgo.com/?q=site%3Azythom.blogspot.com+{{{s}}}"
    },
    {
        "d": "tapseet.com",
        "b": "تبسيط",
        "u": "https://tapseet.com/?s={{{s}}}"
    },
    {
        "d": "nayiri.com",
        "b": "նայ",
        "u": "http://nayiri.com/search?l=hy_LB&dt=HY_HY&r=0&query={{{s}}}"
    }
], bangs);
