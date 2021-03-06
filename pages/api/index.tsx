// API made by honk#9999 on Discord or honklol on GitHub.
// Now a part of the Material Global family! 💖
// Last updated: 5/9/2022 (9th of May 2022)

// Licensed under the Apache License 2.0.
// https://github.com/MaterialGlobal/API/blob/main/LICENSE

// Project URL on GitHub: MaterialGlobal/API
// https://github.com/MaterialGlobal/API

export default function handler(req, res) {
    res.status(200).json(
    {
        "endpoints": {
          "informational": [
            "https://http.cfd/api/100",
            "https://http.cfd/api/101",
            "https://http.cfd/api/102",
            "https://http.cfd/api/103"
          ],
          "successful": [
            "https://http.cfd/api/200",
            "https://http.cfd/api/201",
            "https://http.cfd/api/202",
            "https://http.cfd/api/203",
            "https://http.cfd/api/204",
            "https://http.cfd/api/205",
            "https://http.cfd/api/206",
            "https://http.cfd/api/207",
            "https://http.cfd/api/208",
            "https://http.cfd/api/226"
          ],
          "redirection": [
            "https://http.cfd/api/300",
            "https://http.cfd/api/301",
            "https://http.cfd/api/302",
            "https://http.cfd/api/303",
            "https://http.cfd/api/304",
            "https://http.cfd/api/305",
            "https://http.cfd/api/306",
            "https://http.cfd/api/307",
            "https://http.cfd/api/308"
          ]
        },
        "credits": ["Made by honklol on GitHub", "Descriptions from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", "GitHub Repository: https://github.com/MaterialGlobal/API"]
    });
};