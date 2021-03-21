$(document).ready(function(){
    $('#new-quote').on("click", function() {
        var quotes = [
            {quote: "There's nothing wrong with you, there's a lot of wrong in the world we live in",
            author: "Chris Colfer"},
            {quote: "People get built different. We don't need to figure it out, we just need to respect it.",
            author: "Adventure Time (Princess Bubblegum)"},
            {quote: "Imagine what would happen if compassion were normal. Imagine how many people would still be here. Imagine that",
            author: "Ms. Marvel"},
            {quote: "It doesn't matter if someone has it worse. It doesn't change the fact that you have what you have",
            author: "The Perks of being a Wallflower"},
            {quote: "It is the time you have wasted for your rose that makes your rose so important",
            author: "The Little Prince"},
            {quote: "We Accept the love we think we deserve",
            author: "The Perks of being a Wallflower"},
            {quote: "So this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be",
            author: "The Perks of being a Wallflower"},
            {quote: "All Grown ups were once children... but only a few of them remember it",
            author: "The Little Prince"},
            {quote: "They laugh at me because I'm different I laugh at them because they're all the same",
            author: "Kurt Cobain"},
            {quote: "How lucky I am to have something that makes saying goodeye so hard",
            author: "Winnie the Pooh"},
            {quote: "Things change and friends leave. Life doesn't stop for anybody",
            author: "Stephen Chbosky"},
            {quote: "But what is grief if not love persevering?",
            author: "The Vision"},
            {quote: "If love is just a word, then why does it hurt so much if you realize it isn't there?",
            author: "Naruto Shippuden (Gaara)"}
        ];

        var randomNum = Math.floor(Math.random()*quotes.length);
        var randomQuote = quotes[randomNum].quote;
        var randomAuthor = quotes[randomNum].author;
        $('#text').animate({ opacity: 0 }, 500, function () {
            $(this).animate({ opacity: 1 }, 500);
            $('#text').html('<i class="fa fa-quote-left"></i> '+randomQuote+' <i class="fa fa-quote-right"></i>');
        });
        $('#author').animate({ opacity: 0 }, 500, function () {
            $(this).animate({ opacity: 1 }, 500);
            $('#author').text('- '+randomAuthor);
        });
        $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?text=' + randomQuote + '%20-%20' + randomAuthor);
    });
});