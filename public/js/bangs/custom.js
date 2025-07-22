var bangs = bangs || [];

bangs = [].concat([
    {
        d: "html.duckduckgo.com",
        b: "dh",
        u: "https://html.duckduckgo.com/html/?q={{{s}}}",
    },
    {
        // doesnt matter
        d: "https://web.telegram.org/a/",
        b: "tg",
        u: "https://web.telegram.org/a/"
    },
    {
        d: "https://duckduckgo.com/bangs",
        b: "bangs",
        u: "https://duckduckgo.com/bangs?q={{{s}}}"
    },
    {
        d: "https://www.discordapp.com/channels/@me",
        b: "cord",
        u: "https://www.discordapp.com/channels/@me"
    }
], bangs);