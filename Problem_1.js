let button = document.querySelector("button");

button.addEventListener("click", function ()
{
    let i = 0;
    let s = "";

    while (i <= 6)
    {
        if (i != 3 && i != 6)
        {
            s += " " + i;
        }

        i++;
    }

    alert(s);
}
)