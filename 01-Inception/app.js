// const heading = React.createElement(
//     "h1",
//     {id: "heading", alt: "This is alt text"},
//     "JS file connected to HTML"
// )

/*

    div
        div
            h1
        div
    div

    div
        div
            h1
        div
    div

*/

const parent = React.createElement(
    "div",
    { id : "parent" },
    [React.createElement(
        "div",
        { id : "child" },
        [       // create an array when passing multiple children
            React.createElement(
                "h1", {}, "This is h1 Tag from child"
            ),
            React.createElement(
                "h2", {}, "This is h2 Tag from child"
            )
        ]
    ),
    React.createElement(
        "div",
        { id : "child" },
        [       // create an array when passing multiple children
            React.createElement(
                "h1", {}, "This is h1 Tag from child"
            ),
            React.createElement(
                "h2", {}, "This is h2 Tag from child"
            )
        ]
    )
    ]

    // Here we can see as we are creating complex structure the code is getting hard to read!!!
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);