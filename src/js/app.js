import _ from 'underscore';

var fonts = ['Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', 'sans-serif',
'Candara', 'Calibri', 'Segoe', 'Segoe UI', 'Optima', 'Arial', 'sans-serif',
'Courier New', 'Courier', 'Lucida Sans Typewriter', 'Lucida Typewriter', 'monospace',
'Franklin Gothic Medium', 'Arial', 'sans-serif',
'Futura', 'Trebuchet MS', 'Arial', 'sans-serif',
'Geneva', 'Tahoma', 'Verdana', 'sans-serif',
'Gill Sans', 'Gill Sans MT', 'Calibri', 'sans-serif',
'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif',
'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Verdana', 'sans-serif',
'Optima', 'Segoe', 'Segoe UI', 'Candara', 'Calibri', 'Arial', 'sans-serif',
'Segoe', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif',
'Tahoma', 'Geneva', 'Verdana', 'sans-serif',
'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Tahoma', 'sans-serif',
'Verdana', 'Geneva', 'sans-serif',
'Book Antiqua', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Georgia', 'serif',
'Baskerville', 'Baskerville old face', 'Hoefler Text', 'Garamond', 'Times New Roman', 'serif',
'Bodoni MT', 'Didot', 'Didot LT STD', 'Hoefler Text', 'Garamond', 'Times New Roman', 'serif',
'Cambria', 'Georgia', 'serif',
'Big Caslon', 'Book Antiqua', 'Palatino Linotype', 'Georgia', 'serif',
'Constantia', 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Georgia', 'serif',
'Didot', 'Didot LT STD', 'Hoefler Text', 'Garamond', 'Times New Roman', 'serif',
'Garamond', 'Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', 'serif',
'Goudy Old Style', 'Garamond', 'Big Caslon', 'Times New Roman', 'serif',
'Hoefler Text', 'Baskerville old face', 'Garamond', 'Times New Roman', 'serif',
'Lucida Bright', 'Georgia', 'serif',
'Palatino', 'Palatino Linotype', 'Palatino LT STD', "Book Antiqua", 'Georgia', 'serif'];



fonts = _.uniq(fonts);

function test(x, font) { return `<hr><h2>${font}</h2><p ${x}>I’m guessing there’s a better than decent chance that you’ve already heard about this, but this is such a bad one I thought I would just make sure: The appropriately-named Hacking Team was hacked earlier this week, and in the 400 gigs of data stolen from them was a previously unknown 0-day Flash exploit. The exploit allows web sites to execute arbitrary code on vulnerable machines.</p><p ${x}>The Hacking Team makes a living selling tools that allow their clients, mainly governments and law enforcement, to surveil internet users and snoop on encrypted internet traffic. An important part of their service is collecting unknown exploits and keeping them a secret so they don’t get patched, and can continue to be exploited.</p><p ${x}>Flash gets updated a lot, often for security purposes. What usually happens is a security firm, or a hacker looking for a bounty, or Adobe itself will find a vulnerability, and the Flash team will quietly patch their software before the exploit becomes widely known. This time, the exploit is already out there, and is quickly making its way into malware tools.</p>`
};

var name = "Bob", time = "today";
var content = "";
fonts.forEach(function(font) {
    var style = `style='font-family: ${font}, Comic Sans MS'`;
     content += test(style, font);
});

var el = document.getElementById('fonts').innerHTML = content;
