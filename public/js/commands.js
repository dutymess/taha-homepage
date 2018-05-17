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
    writeLink('http://blog.dutymess.ir', "Read through");
}

function sayVirgool()
{
    writeLink('https://virgoo.io/@dutymess', "Follow Me");
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

function sayProfession()
{
    sayJob();
}

function sayName()
{
    let searchUrl = "https://www.google.com/search?q=taha+kamkar";

    writeLink("Taha Kamkar", "Google Me", searchUrl);
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

    writeLink(text , "View it on Github" , "https://www.github.com/dutymess/taha-homepage");
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
        'goodreads'
    ]);
}