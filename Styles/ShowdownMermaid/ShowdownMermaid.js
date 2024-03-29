module.exports = function showdownmermaid() {
    return [
        {
            type: "lang",
            regex: /(```mermaid)([\s\S]+?)(```)/g,
            replace: function (whole, left, content, right, location, text) {
                return "<div class='mermaid'>" + content + "</div>";
            }
        }
    ]
};