// Extracting Strings for Translating
var gettext = function(s) {
    return s;
};

angular.module('enplug.sdk.utils').constant('quotes', {
    random: function () {
        var index = Math.floor(Math.random() * (this.quotes.length));
        return this.quotes[index];
    },
    quotes: [
        {
            text: gettext("All great achievements require time."),
            author: "Maya Angelou"
        },
        {
            text: gettext("You can't wait for inspiration. You have to go after it with a club."),
            author: "Jack London"
        },
        {
            text: gettext("The perfect is the enemy of the good."),
            author: "Voltaire"
        },
        {
            text: gettext("I play to win, whether during practice or a real game."),
            author: "Michael Jordan"
        },
        {
            text: gettext("Many of life's failures are people who did not realize how close they were to success when they gave up."),
            author: "Thomas Edison"
        },
        {
            text: gettext("At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since."),
            author: "Salvador Dali"
        },
        {
            text: gettext("Quality is more important than quantity. One home run is much better than two doubles."),
            author: "Steve Jobs"
        },
        {
            text: gettext("That's one small step for man, one giant leap for mankind."),
            author: "Neil Armstrong"
        },
        {
            text: gettext("Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep."),
            author: "Scott Adams"
        },
        {
            text: gettext("Nothing will work unless you do."),
            author: "Maya Angelou"
        },
        {
            text: gettext("The best way out is always through."),
            author: "Robert Frost"
        },
        {
            text: gettext("An ant on the move does more than a dozing ox."),
            author: "Lao Tzu"
        },
        {
            text: gettext("Show me a thoroughly satisfied man and I will show you a failure."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Our greatest glory is not in never failing, but in rising up every time we fail."),
            author: "Ralph Waldo Emerson"
        },
        {
            text: gettext("Every act of creation is first of all an act of destruction."),
            author: "Pablo Picasso"
        },
        {
            text: gettext("Fun is good."),
            author: "Dr. Seuss"
        },
        {
            text: gettext("I steal from every movie ever made."),
            author: "Quentin Tarantino"
        },
        {
            text: gettext("It is the working man who is the happy man. It is the idle man who is the miserable man."),
            author: "Ben Franklin"
        },
        {
            text: gettext("A person who never made a mistake never tried anything new."),
            author: "Albert Einstein"
        },
        {
            text: gettext("To be idle is a short road to death and to be diligent is a way of life."),
            author: "Buddha"
        },
        {
            text: gettext("The way to get started is to quit talking and begin doing."),
            author: "Walt Disney"
        },
        {
            text: gettext("For every dark night, there's a brigher day."),
            author: "Tupac Shakur"
        },
        {
            text: gettext("If you love life, don't waste time, for time is what life is made up of."),
            author: "Bruce Lee"
        },
        {
            text: gettext("You can never quit. Winners never quit, and quitters never win."),
            author: "Ted Turner"
        },
        {
            text: gettext("Work spares us from three evils: boredom, vice and need."),
            author: "Voltaire"
        },
        {
            text: gettext("Focus is a matter of deciding what things you're not going to do."),
            author: "John Carmack"
        },
        {
            text: gettext("I play to win, whether during practice or a real game."),
            author: "Michael Jordan"
        },
        {
            text: gettext("HULK SMASH!"),
            author: "The Incredible Hulk"
        },
        {
            text: gettext("The harder the conflict, the more glorious the triumph."),
            author: "Thomas Paine"
        },
        {
            text: gettext("Everything comes to him who hustles while he waits."),
            author: "Thomas Edison"
        },
        {
            text: gettext("You've got to jump off cliffs and build your wings on the way down."),
            author: "Ray Bradbury"
        },
        {
            text: gettext("Amateurs practice until they get it right. Professionals practice until they can't get it wrong."),
            author: "Unknown"
        },
        {
            text: gettext("Genius is one percent inspiration and ninety-nine percent perspiration."),
            author: "Thomas Edison"
        },
        {
            text: gettext("A lot of times, people don't know what they want until you show it to them."),
            author: "Steve Jobs"
        },
        {
            text: gettext("I don't know where I'm going, but I'm on my way."),
            author: "Carl Sagan"
        },
        {
            text: gettext("Lost time is never found again."),
            author: "Benjamin Franklin"
        },
        {
            text: gettext("Without pain, without sacrifice, we would have nothing."),
            author: "Tyler Durden"
        },
        {
            text: gettext("I pay no attention whatever to anybody's praise or blame. I simply follow my own feelings."),
            author: "Wolfgang Amadeus Mozart"
        },
        {
            text: gettext("You miss 100% of the shots you don't take."),
            author: "Wayne Gretzky"
        },
        {
            text: gettext("To have a great idea, have a lot of them."),
            author: "Thomas Edison"
        },
        {
            text: gettext("The value of an idea lies in the using of it."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Simplify, simplify, simplify."),
            author: "Henry David Thoreau"
        },
        {
            text: gettext("There's a way to do it better - find it."),
            author: "Thomas Edison"
        },
        {
            text: gettext("When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the steps."),
            author: "Confucius"
        },
        {
            text: gettext("During your life, never stop dreaming. No one can take away your dreams."),
            author: "Tupac Shakur"
        },
        {
            text: gettext("Things do not happen. Things are made to happen."),
            author: "John F. Kennedy"
        },
        {
            text: gettext("Ambition should be made of sterner stuff."),
            author: "William Shakespeare"
        },
        {
            text: gettext("If you spend too much time thinking about a thing, you'll never get it done."),
            author: "Bruce Lee"
        },
        {
            text: gettext("Success breeds success."),
            author: "Proverb"
        },
        {
            text: gettext("You are never too old to set another goal or to dream a new dream."),
            author: "C.S. Lewis"
        },
        {
            text: gettext("When you stop doing things for fun, you might as well be dead."),
            author: "Ernest Hemingway"
        },
        {
            text: gettext("There is no substitute for hard work."),
            author: "Thomas Edison"
        },
        {
            text: gettext("Live long and prosper."),
            author: "Spock"
        },
        {
            text: gettext("I have not failed. I've just found 10,000 ways that won't work."),
            author: "Thomas Edison"
        },
        {
            text: gettext("It's lack of faith that makes people afraid of meeting challenges, and I believed in myself."),
            author: "Muhammad Ali"
        },
        {
            text: gettext("All our dreams can come true, if we have the courage to pursue them."),
            author: "Walt Disney"
        },
        {
            text: gettext("Make everything as simple as possible, but not simpler."),
            author: "Albert Einstein"
        },
        {
            text: gettext("Some people want it to happen, some wish it would happen, others make it happen."),
            author: "Michael Jordan"
        },
        {
            text: gettext("I've got a theory that if you give 100% all the time, somehow things will work out in the end."),
            author: "Larry Bird"
        },
        {
            text: gettext("The problem with the future is that it keeps turning into the present."),
            author: "Bill Watterson"
        },
        {
            text: gettext("May the Force be with you."),
            author: "Han Solo"
        },
        {
            text: gettext("Victory belongs to the most persevering."),
            author: "Napoleon Bonaparte"
        },
        {
            text: gettext("I hated every minute of training, but I said, 'Dont quit. Suffer now and live the rest of your life as a champion'."),
            author: "Muhammad Ali"
        },
        {
            text: gettext("Do things that have never been done before."),
            author: "Russell Kirsch"
        },
        {
            text: gettext("I've failed over and over and over again in my life and that is why I succeed."),
            author: "Michael Jordan"
        },
        {
            text: gettext("A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty."),
            author: "Winston Churchill"
        },
        {
            text: gettext("He who hesitates is lost."),
            author: "Proverb"
        },
        {
            text: gettext("Carpe diem, seize the day boys, make your lives extraordinary."),
            author: "John Keating"
        },
        {
            text: gettext("Doing the best at this moment puts you in the best place for the next moment."),
            author: "Oprah Winfrey"
        },
        {
            text: gettext("Luck is preparation meeting opportunity."),
            author: "Oprah Winfrey"
        },
        {
            text: gettext("I have no special talent. I am only passionately curious."),
            author: "Albert Einstein"
        }]
});
