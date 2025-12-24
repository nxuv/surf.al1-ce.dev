const custom = require("./bangs/custom.js")
const tech = require("./bangs/tech.js")
const multimedia = require("./bangs/multimedia.js")
const entertainment = require("./bangs/entertainment.js")
const research = require("./bangs/research.js")
const services = require("./bangs/services.js")
const news = require("./bangs/news.js")
const shopping = require("./bangs/shopping.js")

const bangs = [
    ...custom.bangs,
    ...tech.bangs,
    ...multimedia.bangs,
    ...entertainment.bangs,
    ...research.bangs,
    ...services.bangs,
    ...news.bangs,
    ...shopping.bangs,
];

/*
// NEW
bangs = [].concat([
    {
        // default
        d: "html.duckduckgo.com",
        // bang
        b: "dh",
        // url
        u: "https://html.duckduckgo.com/html/?q={{{s}}}"
    },
], bangs);
*/

const LS_DEFAULT_BANG = "g"; // localStorage.getItem("default-bang") ?? "g";
const defaultBang = bangs.find((b) => b.b === LS_DEFAULT_BANG);

function getBangredirectUrl(req) {
    const query = req.query.q.trim() ?? "";
    if (!query) { return; }

    const match = query.match(/!(\S+)/i);

    const bangCandidate = match?.[1]?.toLowerCase();
    const selectedBang = bangs.find((b) => b.b === bangCandidate) ?? defaultBang;

    // Remove the first bang from the query
    const cleanQuery = query.replace(/!\S+\s*/i, "").trim();

    // If the query is just `!gh`, use `github.com` instead of `github.com/search?q=`
    if (cleanQuery === "")
        return selectedBang ? `https://${selectedBang.d}` : null;

    // Format of the url is:
    // https://www.google.com/search?q={{{s}}}
    const searchUrl = selectedBang?.u.replace(
        "{{{s}}}",
        // Replace %2F with / to fix formats like "!ghr+t3dotgg/unduck"
        encodeURIComponent(cleanQuery).replace(/%2F/g, "/"),
    );
    if (!searchUrl) return null;

    return searchUrl;
}

function redirect(req, res) {
    const searchUrl = getBangredirectUrl(req);
    if (!searchUrl) return;
    res.redirect(searchUrl);
}


module.exports = {
    redirect
};
