/*
 Looking for something more complicated? Sorry :D
 */

function sayTwitter()
{
    writeLink('https://twitter.com/dutymessIr', "Follow Me");
}

function sayLinkedin()
{
    sayLinkedIn();
}

function sayLinkedIn()
{
    writeLink('https://linkedin.com/in/tahakamkar', "Connect with Me")
}

function sayBlog()
{
    writeLink([
        'http://blog.dutymess.ir',
        "Try 'virgool' too"
    ], "Read through", 'http://blog.dutymess.ir');
}

function sayWeblog()
{
    sayBlog();
}

function sayVirgool()
{
    writeLink('https://virgool.io/@dutymess', "Follow Me");
}

function sayTelegram()
{
    writeLink("https://t.me/dutymess", "Let's talk :)");
}

function sayGithub()
{
    writeLink('https://www.github.com/dutymess', "Get in Touch");
}

function sayInstagram()
{
    writeLink('https://www.instagram.com/dutymess', "Follow Me");
}

function sayFacebook()
{
    write([
        "Thank you for your interest, but ",
        "I am not really comfortable with this Facebook thing!",
        "Try Twitter instead."
    ], 'warning');
}

function sayCompany()
{
    writeLink("https://www.yasna.team", "Take a Look");
}

function sayJafar()
{
    write("Yea!!", 'info');
}

function sayGift()
{
    writeLink("https://www.payping.ir/taha", "Make Me Happy!");
}

function sayBirthday()
{
    write("21-Sep-1982 | 1361/07/07");
}

function sayHighSchool()
{
    write("Shahid Bahonar, Baharestan Sq., Tehran, Iran");
}

function saySchool()
{
    sayHighSchool();
}

function sayNationality()
{
    writeLink("Iranian", "Look it Up", "https://en.wikipedia.org/wiki/Iran");
}

function sayJob()
{
    write([
        "An ex. seafarer and marine engineer",
        "A part-time marine insurance surveyor and adjuster",
        "A part-time back-end developer",
        "A full-time learner and beginner"
    ]);
}

function sayOcupation()
{
    sayJob();
}

function sayProfession()
{
    sayJob();
}

function sayWork()
{
    sayJob();
}

function saySkills()
{
    sayJob();
}

function saySkill()
{
    sayJob();
}

function sayName()
{
    let searchUrl = "https://www.google.com/search?q=taha+kamkar";

    writeLink("Taha Kamkar", "Google Me", searchUrl);
}

function sayTest()
{
    write("Thanks for the test.");
    delayedHelp();
}

function sayHello()
{
    write("Hi");
    delayedHelp();
}

function sayHi()
{
    write("Hello");
    delayedHelp();
}


function sayTaha()
{
    let searchUrl = "https://www.google.com/search?q=taha+kamkar";

    writeLink("Yep! That's me. Taha Kamkar", "Google Me", searchUrl);
}

function sayDutymess()
{
    let searchUrl = "https://www.google.com/search?q=dutymess";

    writeLink([
        "'Dutymess' is my favorite online nickname.",
        "The word refers to a mess-room on ships, where on-duty seafarers can have a quick meal."
    ], "Google It", searchUrl);
}

function sayAge()
{
    let thisYear = new Date().getFullYear();
    let age      = thisYear - 1982;

    write("Should be around " + age.toString() + " by now.");
}

function sayGmail()
{
    write('taha.kamkar')
}

function sayEmail()
{
    write("taha.kamkar in gmail")
}

function saySocials()
{
    write([
        "I'm on Twitter, Telegram, LinkedIn, Instagram, Virgool and Goodreads",
        "Which one would you like?"
    ]);
}

function sayHelp()
{
    let output = [];

    output[0] = "Try one of these, for instance:";
    for (i = 1; i <= 3; i++) {
        output[i] = "'" + getList()[i] + "'";
    }
    output[4] = '... etc.';

    write(output);
}

function sayOk()
{
    write("OK");
}

function delayedHelp()
{
    setTimeout("sayHelp()", 1000);
}

function sayNumber()
{
    write("Sorry, but not here, for the time being. :)", "warning")
}

function sayPhone()
{
    sayNumber();
}

function sayTel()
{
    sayNumber();
}

function sayMobile()
{
    sayNumber();
}

function sayFootball()
{
    write("Not a real fan :)");
}

function sayLocation()
{
    writeLink("#Yasnateam :)", "Show on Map", "https://goo.gl/maps/Zo7ape4hWeM2")
}

function sayAddress()
{
    sayLocation();
}

function sayNothing()
{
    write(":|");
}

function sayCv()
{
    sayResume();
}

function sayCV()
{
    sayResume();
}

function sayGender()
{
    write("Male");
}

function saySalam()
{
    write("Aleyk e Salam");
}

function say()
{
    sayHelp();
}

function saySomething()
{
    sayHelp();
}

function sayGoodreads()
{
    writeLink("https://www.goodreads.com/user/show/26490670-taha-kamkar", "Get in Touch");
}

function sayWife()
{
    writeLink("Elaheh Mehrzadegan", "LinkedIn", "https://www.linkedin.com/in/elaheh-mehrzadegan-55b61685/");
}

function sayResume()
{
    let download_link = "https://drive.google.com/file/d/10fQEWS4Azv9EjH-Nf-rMnwpajsrGhQ9-/view?usp=sharing";
    writeLink("Marine Insurance Resume", "Download", download_link);
}

function sayInsuranceResume()
{
    sayResume();
}

function sayMarineInsuranceResume()
{
    sayResume();
}

function sayPrivacy()
{
    let text = [
        "The only thing logged herein, is the command you typed.",
        "View the source code on Github, for more information.",
        "Check `log()` method in app/Http/Controllers/IndexController.php, if you don't know where to look.",
        "It's not that complicated. :)"
    ];

    writeLink(text, "View it on Github", "https://www.github.com/dutymess/taha-homepage");
}

function sayCode()
{
    writeLink("https://www.github.com/dutymess/taha-homepage", "View it on Github")
}

function saySourceCode()
{
    sayCode();
}

function sayMarried()
{
    write([
        "Yes!",
        "Happily ever and after."
    ]);
}

function getList()
{
    return shuffle([
        'twitter',
        'linkedIn',
        'blog',
        'virgool',
        'github',
        'job',
        'name',
        'birthday',
        'age',
        'nationality',
        'high school',
        'email',
        'gmail',
        'socials',
        'resume',
        'goodreads',
        'gender',
        'address',
    ]);
}