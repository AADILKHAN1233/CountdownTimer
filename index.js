const endDate = "24 oct 2023 09:02 PM"

document.getElementById("end-date").innerHTML = endDate;
const input = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;
    console.log(diff);
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600) % 24;
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff) % 60;
}

clock()

setInterval(
    () => {
        clock()
    },
    1000
)