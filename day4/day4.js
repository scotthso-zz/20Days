var quotes = new Array();

quotes[0] = "Pussy."
quotes[1] = "This is  your future we're talking about."
quotes[2] = "Still, don't give up."
quotes[3] = "How bad do you want your dreams to come true?"
quotes[4] = "Aren't you too old to be like that now?"
quotes[5] = "Is that how you want people to see you to be?"
quotes[6] = "Pick it up"
quotes[7] = "Cry more."



function display () {

    var i = Math.floor(7*Math.random());
    document.getElementById("answer").innerHTML = quotes[i];
}