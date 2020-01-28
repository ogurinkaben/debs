
var quotes = {
  "quotes": [
    {quote: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
    author: "J.R.R. Tolkien"},
    {quote: "I look at you and see the rest of my life in front of my eyes.",
    author: "Unknown"},
    {quote: "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.",
    author: "Leo Christopher"},
    {quote: "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive",
    author: "Inconnu"},
    {quote: "I choose you. And I’ll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I’ll keep choosing you.",
    author: "Unknown"},
    {quote: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you",
    author: "A. A. Milne"},
    {quote: "I’m much more me when I’m with you." ,
    author: "Unknown "},
    {quote: "You have bewitched me, body and soul, and I love… I love… I love you.",
    author: "Mr. Darcy, Pride and Prejudice"},
    {quote: "I wish I could turn back the clock. I’d find you sooner and love you longer.",
    author: "Unknown "},
    {quote: "I hope you know that every time I tell you to get home safe, stay warm, have a good day, or sleep well what I am really saying is I love you. I love you so damn much that it is starting to steal other words’ meanings.",
    author: "Open 365 on Tumblr"},
    {quote: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    author: "Angelita Lim"},
    {quote: "You are my best friend, my human diary and my other half. You mean the world to me and I love you.",
    author: "Unknown"},
    {quote: "If I know what love is, it is because of you.",
    author: "Herman Hesse"},
    {quote: "I realized I was thinking of you, and I began to wonder how long you’d been on my mind. Then it occurred to me: Since I met you, you’ve never left.",
    author: "Unknown"},
    {quote: "You don’t love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
    author: "Oscar Wilde"},
    {quote: "When I say I love you more, I don’t mean I love you more than you love me. I mean I love you more than the bad days ahead of us, I love you more than any fight we will ever have. I love you more than the distance between us, I love you more than any obstacle that could try and come between us. I love you the most.",
    author: "Unknown"},
    {quote: "You are my best friend, my human diary and my other half. You mean the world to me and I LOVE YOU.",
    author: ""},
    {quote: "If I know what love is, it is because of you." ,
    author: "Herman Hesse"},
    {quote: "I want you. All of you. Your flaws. Your mistakes. Your imperfections. I want you, and only you.",
    author: "John Legend"},
    {quote: "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.",
    author: ""},
    {quote: "I love you, and I will love you until I die, and if there’s a life after that, I’ll love you then.",
    author: "Cassandra Clare"},
    {quote: "I love you, not only for what you are, but for what I am when I am with you.",
    author: "Roy Croft"},
    {quote: "Just wanted to let you know that I love you even though you aren’t naked right now.",
    author: "Unknown"},
    {quote: "I realized I was thinking of you, and I began to wonder how long you'd been on my mind. Then it occurred to me: Since I met you, you've never left.",
    author: ""},
    {quote: "There is a madness in loving you, a lack of reason that makes it feel so flawless.",
    author: "Leo Christopher"},
    {quote:  "When I saw you, I was afraid to meet you. When I met you I was afraid to kiss you. When I kissed you, I was afraid to love you. Now that I love you, I am afraid to lose you.",
    author: "Unknown"},
    {quote: "When love is not madness it is not love." ,
    author: "Pedro Calderón de la Barca"},
    {quote: "You have bewitched me body and soul, and I love, I love, I LOVE YOU.",
    author: "Pride & Prejudice"},
    {quote: "I wish I could turn back the clock. I'd find you sooner and love you longer.",
    author: ""},
    {quote: "I have decided to stick to love, hate is too great a burden to bear.",
    author: "Martin Luther King, Jr."},
    {quote:  "I want you. All of you. Your flaws. Your mistakes. Your imperfections. I want you, and only you.",
    author: ""},
    {quote: "Because I could watch you for a single minute and find a thousand things that I love about you.",
    author: ""},
    {quote: "There is a madness in loving you, a lack of reason that makes it feel so flawless.",
    author: "Leo Christopher"},
    {quote:  "All of me loves all of you.",
    author: "John Legend, All of Me"}
  ]
}

function newQuote(){
  var index = Math.floor(Math.random() * quotes.quotes.length);
  var quote = quotes.quotes[index].quote;
  var author = quotes.quotes[index].author == "" ? "Unknown" : quotes.quotes[index].author;
  var url = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+ '"'+ quote +'" ' + author;
  $("#quoteText").html(quote);
}

$(document).ready(function(){
  newQuote();
  $("#newQuote").click(function(){
    var effect = ["blind"];
    var index = Math.floor(Math.random() * effect.length);
    $(".panel").toggle(effect[index], "slow", function(){
      newQuote();
    });
    $(".panel").toggle(effect[index], "slow" );
  });                 
});