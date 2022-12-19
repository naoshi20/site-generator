// const p = document.getElementById("sample");
// p.textContent = "sample";

let res;
fetch(
    "https://script.google.com/macros/s/AKfycbwRYg29Hue-n17Xf9foykN9apnqu4j3SE7eMlpIjs-W1yD6MESthtxaXrTeqV-ej6vSTw/exec",
    {
        method: "GET",
        mode: "cors",
    }
)
    .then((response) => {
        if (response.ok) {
            return response.json().then((resJson) => {
                res = resJson;
                console.log(res[2]);
                console.log(res.length);
                for (let i = 1; i < res.length; i++) {
                    const row = document.createElement("div");
                    row.classList.add("row");
                    const col = document.createElement("div");
                    row.classList.add("col");
                    const a = document.createElement("a");
                    a.setAttribute(
                        "href",
                        "template.html?company=" + i.toString()
                    );
                    col.appendChild(a);
                    row.appendChild(col);
                    console.log(res[i][1]);
                    a.innerHTML = res[i][1];
                    const container = document.getElementById("container");
                    container.appendChild(row);
                }
            });
        }
        throw new Error("Network response was not ok.");
    })
    .catch((error) => {
        console.error(error);
    });
