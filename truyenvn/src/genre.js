load('config.js');

function execute() {
    let response = fetch(BASE_URL + "/?s=&post_type=wp-manga");
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        doc.select(".dropdown-genres option").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr("value"),
                script: "gen.js"
            })
        });
        return Response.success(genres);
    }

    return null;
}