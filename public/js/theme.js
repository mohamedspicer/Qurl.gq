let dataTheme = window.localStorage.getItem("data-theme");

if (!dataTheme) {
    dataTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    window.localStorage.setItem("data-theme", dataTheme);
} else {
    document.documentElement.setAttribute("data-theme", dataTheme);
}

const lightbulb = document.getElementById("lightbulb");

lightbulb.onclick = (e) => {
    e.preventDefault();

    dataTheme = (dataTheme == "dark") ? "light" : "dark";

    window.localStorage.setItem("data-theme", dataTheme);
    document.documentElement.setAttribute("data-theme", dataTheme);
}
