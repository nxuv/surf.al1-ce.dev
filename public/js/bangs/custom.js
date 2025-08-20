var bangs = bangs || [];

bangs = [].concat([
    {
        d: "html.duckduckgo.com",
        b: "dh",
        u: "https://html.duckduckgo.com/html/?q={{{s}}}",
    },
    {
        // doesnt matter
        d: "web.telegram.org/a/",
        b: "tg",
        u: "https://web.telegram.org/a/"
    },
    {
        d: "duckduckgo.com/bangs",
        b: "bangs",
        u: "https://duckduckgo.com/bangs?q={{{s}}}"
    },
    {
        d: "www.discordapp.com/channels/@me",
        b: "cord",
        u: "https://www.discordapp.com/channels/@me"
    },
    {
        d: "google.com",
        b: "g",
        u: "https://google.com/search/?udm=14&q={{{s}}}",
    },
], bangs);
