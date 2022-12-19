let companyId;
window.onload = function () {
    // URLを取得
    const url = new URL(window.location.href);

    // URLSearchParamsオブジェクトを取得
    const params = url.searchParams;

    companyId = params.get("company");
    console.log(companyId);

    // IDを使ってspan要素を取得する
    const span = document.getElementById("test");
    // 取得したspan要素に受け取ったパラメータを代入
    // span.innerText = company;
};

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
                console.log(res);
                console.log(res[companyId]);
                const compnyData = res[companyId];
                companyName.textContent = compnyData[1];
                companyName2.textContent = compnyData[1];
                companyBelief.textContent = compnyData[3];
                companyVision.textContent = compnyData[4];
                companyAbout.textContent =
                    compnyData[5] +
                    compnyData[6] +
                    compnyData[7] +
                    compnyData[8];
                workerExsisting.textContent = compnyData[9];
                workerExpectation.textContent =
                    compnyData[10] + compnyData[11] + compnyData[12];
            });
        }
        throw new Error("Network response was not ok.");
    })
    .catch((error) => {
        console.error(error);
    });
