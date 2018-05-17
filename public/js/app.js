let countDown        = 15;
let countDownRunning = true;

$(document).ready(function ()
{
    $("form").submit(function (e)
    {
        e.preventDefault(e);
    });
    $("#command").focus();

    clear();
    runCounter();
});

function run()
{
    let command  = toTitleCase($("#command").val()).replace(/ /g, '');
    let funcName = "say" + command;

    clear();

    if (typeof window[funcName] === "function") {
        window[funcName]();
        log(1);
        stopCounter();
        return;
    }

    log(0);
    // resumeCounter();
    resetInput();
    write([
        "Sorry! Undefined command '" + command + "' ",
        "Try 'help' to have some ideas."
    ], 'warning');
}

function log(was_valid)
{
    $("#txtValid").val(was_valid);
    $('#form').ajaxSubmit();
    resetInput();
}


function toTitleCase(str)
{
    return str.replace(/(?:^|\s)\w/g, function (match)
    {
        return match.toUpperCase();
    });
}

function write(string, color = 'success')
{
    let $element = $("#divResult");
    $element.attr('class', 'text-' + color);

    new TypeIt('#divResult', {
        strings: string,
        speed  : 10,
        cursor : false,
    });

}

function showButton(url, label = 'Open')
{
    setTimeout(function ()
    {
        $("#btnOpen").html(label).attr('href', url).fadeIn('fast');
    }, 2000);
}

function hideButton()
{
    $("#btnOpen").hide();
}

function writeLink(text, buttonLabel, url = 'text')
{
    if (url == 'text') {
        url = text;
    }

    write(text);
    showButton(url, buttonLabel);
}

function clear()
{
    write('');
    $("#btnOpen").hide();
}

function resetInput()
{
    $("#command").val('');
}

function shuffle(array)
{
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue      = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex]  = temporaryValue;
    }

    return array;
}

function resetCounter()
{
    countDown = 15;
}

function runCounter()
{
    if (!countDownRunning || countDown <= 0)
        return;

    setTimeout("runCounter()", 1000);
    countDown--;
    // console.log(countDown);

    if (countDown == 0) {
        askHelp();
    }
}

function stopCounter()
{
    countDownRunning = false;
}

function resumeCounter()
{
    countDownRunning = true;
    runCounter();
}

function askHelp()
{
    write("Try 'help' for some ideas.")
}

