{
    const copyButton = app.querySelector(".copy-button");
    const copyIcon = copyButton.querySelector("img");
    const urlInput = app.querySelector(".url-input");

    copyButton.addEventListener("click", async () => {
        await navigator.clipboard.writeText(urlInput.value);
        copyIcon.src = "/clipboard-check.svg";

        setTimeout(() => {
            copyIcon.src = "/clipboard.svg";
        }, 2000);
    });
}

/* BANG FORMAT

// OLD
bangs = [].concat([
    {
        // Category (irrelevant)
        c: "Custom",
        // What to open on empty bang
        d: "html.duckduckgo.com",
        // ?
        r: 0,
        // Name
        s: "DuckDuckGo HTML",
        // Subcategory
        sc: "Search",
        // Bang
        t: "dh",
        // Goto url
        u: "https://html.duckduckgo.com/html/?q={{{s}}}",
    },
], bangs);

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

const LS_DEFAULT_BANG = localStorage.getItem("default-bang") ?? "g";
const defaultBang = bangs.find((b) => b.b === LS_DEFAULT_BANG);

function getBangredirectUrl() {
    const url = new URL(window.location.href);
    const query = url.searchParams.get("q")?.trim() ?? "";
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

function doRedirect() {
    const searchUrl = getBangredirectUrl();
    if (!searchUrl) return;
    window.location.replace(searchUrl);
}

document.querySelector("#set-default").addEventListener("click", () => {
    let newBang = prompt("Please input new default bang", LS_DEFAULT_BANG);
    if (newBang == null || newBang == "") {
        alert("No bang was set");
        return;
    }
    
    const foundBang = bangs.find((b) => b.b === newBang);

    if (foundBang == undefined) {
        alert("Unknown bang");
        return;
    }

    if (confirm(`Found bang for '${foundBang.d}'`)) {
        localStorage.setItem("default-bang", newBang);
        alert("Set new bang to " + newBang);
    } else {
        alert("Cancelled");
        return;
    }
});

function findBang(a) {
    let d = "";
    console.log("---------------------------------------------------");
    console.log("Match:");
    for (let i of bangs) if (i.b == a) {
        console.log(i);
        d = i.d;
        break;
    }
    console.log("Similar bangs:");
    for (let i of bangs) if (i.d == d) {
        console.log(i);
    }
    console.log("---------------------------------------------------");
}

function filterBangsByCategory(category) {
    let ret = [];
    for (let i of bangs) if (i.c == category) ret.push({
        d: i.d,
        b: i.t,
        u: i.u
    });
    console.log(ret);
}

doRedirect();

// const LS_DEFAULT_BANG = localStorage.getItem("default-bang") ?? "g";
// const defaultBang = bangs.find((b) => b.t === LS_DEFAULT_BANG);

// function getBangredirectUrl() {
//     const url = new URL(window.location.href);
//     const query = url.searchParams.get("q")?.trim() ?? "";
//     if (!query) {
//         // noSearchDefaultPageRender();
//         return null;
//     }

//     const match = query.match(/!(\S+)/i);

//     const bangCandidate = match?.[1]?.toLowerCase();
//     const selectedBang = bangs.find((b) => b.t === bangCandidate) ?? defaultBang;

//     // Remove the first bang from the query
//     const cleanQuery = query.replace(/!\S+\s*/i, "").trim();

//     // If the query is just `!gh`, use `github.com` instead of `github.com/search?q=`
//     if (cleanQuery === "")
//         return selectedBang ? `https://${selectedBang.d}` : null;

//     // Format of the url is:
//     // https://www.google.com/search?q={{{s}}}
//     const searchUrl = selectedBang?.u.replace(
//         "{{{s}}}",
//         // Replace %2F with / to fix formats like "!ghr+t3dotgg/unduck"
//         encodeURIComponent(cleanQuery).replace(/%2F/g, "/"),
//     );
//     if (!searchUrl) return null;

//     return searchUrl;
// }