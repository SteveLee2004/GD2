$(document).ready(function() {

    const archiveData = {
        "16mm": {
            summary: "16mm film is a historically popular and economical gauge of film...",
            movies: [
                { title: "Night of the Living Dead", director: "George A. Romero", type: "black & white", year: 1968, frames: ["night1.jpg", "night2.jpg"] },
                { title: "The Texas Chain Saw Massacre", director: "Tobe Hooper", type: "black & white", year: 1974, frames: ["texas1.jpg", "texas2.jpg"] },
                { title: "Evil Dead", director: "Sam Raimi", type: "color", year: 1981, frames: ["evil1.jpg", "evil2.jpg"] },
                { title: "Man Bites Dog", director: "Rémy Belvaux, André Bonzel, Benoît Poelvoorde", type: "color", year: 1992, frames: ["manbites1.jpg", "manbites2.jpg"] },
                { title: "Clerks", director: "Kevin Smith", type: "color", year: 1994, frames: ["clerks1.jpg", "clerks2.jpg"] },
                { title: "Levaing Las Vegas", director: "Mike Figgis", type: "color", year: 1995, frames: ["vegas1.jpg", "vegas2.jpg"] },
                { title: "The Blair Witch Project", director: "Daniel Myrick, Eduardo Sánchez", type: "color", year: 1999, frames: ["blair1.jpg", "blair2.jpg"] },
                { title: "Squid and the Whale", director: "Noah Baumbach", type: "color", year: 2005, frames: ["squid1.jpg", "squid2.jpg"] },
                { title: "Mother!", director: "Darren Aronofsky", type: "color", year: 2017, frames: ["mother1.jpg", "mother2.jpg"] },
                { title: "Mid90s", director: "Jonah Hill", type: "color", year: 2018, frames: ["mid90s1.jpg", "mid90s2.jpg"] },
                { title: "The Smashing Machine", director: "Benny Safdie", type: "color", year: 2025, frames: ["smashing1.jpg", "smashing2.jpg"] }

            ]
        },

        "35mm": {
            summary: "35mm film is the standard film gauge used for motion pictures...",
            movies: [
                { title: "Metropolis", director: "Fritz Lang",type: "black & white", year: 1927, frames: ["metro1.jpg", "metro2.jpg"] },
                { title: "Gone with the Wind", director: "Victor Fleming", type: "color", year: 1939, frames: ["wind1.jpg", "wind2.jpg"] },
                { title: "Citizen Kane", director: "Orson Welles", type: "color", year: 1941, frames: ["kane1.jpg", "kane2.jpg"] },
                { title: "Sunset Boulevard", director: "Billy Wilder", type: "color", year: 1950, frames: ["sunset1.jpg", "sunset2.jpg"] },
                { title: "From Russia with Love", director: "Terence Young", type: "color", year: 1963, frames: ["russia1.jpg", "russia2.jpg"] },
                { title: "The Godfather", director: "Francis Ford Coppola", type: "color", year: 1972, frames: ["godfather1.jpg", "godfather2.jpg"] },
                { title: "Raiders of the Lost Ark", director: "Steven Spielberg", type: "color", year: 1981, frames: ["raiders1.jpg", "raiders2.jpg"] },
                { title: "Fight Club", director: "David Fincher", type: "color", year: 1999, frames: ["fight1.jpg", "fight2.jpg"] },
                { title: "No Country for Old Men", director: "Joel Coen, Ethan Coen", type: "color", year: 2007, frames: ["country1.jpg", "country2.jpg"] },
                { title: "Uncut Gems", director: "Benny Safdie, Josh Safdie", type: "color", year: 2019, frames: ["uncut1.jpg", "uncut2.jpg"] },
                { title: "Marty Supreme", director: "Josh Safdie", type: "color", year: 2025, frames: ["marty1.jpg", "marty2.jpg"] }


            ]
        },

        "70mm (or 65mm)": {
            summary: "70mm film, often referred to as 65mm for the camera negative, is a large format film gauge that offers superior image quality and resolution compared to smaller formats...",
            movies: [
                { title: "Ben-Hur", director: "William Wyler", type: "color", year: 1959, frames: ["ben1.jpg", "ben2.jpg"] },
                { title: "West Side Story", director: "Jerome Robbins, Robert Wise", type: "color", year: 1961, frames: ["west1.jpg", "west2.jpg"] },
                { title: "Lawrence of Arabia", director: "David Lean", type: "color", year: 1962, frames: ["lawrence1.jpg", "lawrence2.jpg"] },
                { title: "Grand Prix", director: "John Frankenheimer", type: "color", year: 1966, frames: ["grand1.jpg", "grand2.jpg"] },
                { title: "2001: A Space Odyssey", director: "Stanley Kubrick", type: "color", year: 1968, frames: ["space1.jpg", "space2.jpg"] },
                { title: "Patton", director: "Franklin J. Schaffner", type: "color", year: 1970, frames: ["patton1.jpg", "patton2.jpg"] },
                { title: "Tron", director: "Steven Lisberger", type: "color", year: 1982, frames: ["tron1.jpg", "tron2.jpg"] },
                { title: "Hamlet", director: "Kenneth Branagh", type: "color", year: 1996, frames: ["hamlet1.jpg", "hamlet2.jpg"] },
                { title: "The Master", director: "Paul Thomas Anderson", type: "color", year: 2012, frames: ["master1.jpg", "master2.jpg"] },
                { title: "The Hateful Eight", director: "Quentin Tarantino", type: "color", year: 2015, frames: ["hateful1.jpg", "hateful2.jpg"] },
                { title: "Sinners", director: "Ryan Coogler", type: "color", year: 2025, frames: ["sinners1.jpg", "sinners2.jpg"] }
            ]
        },

        "VistaVision": {
            summary: "VistaVision is a higher resolution, widescreen variant of the 35mm motion picture film format which was created by engineers at Paramount Pictures in 1954. It uses a horizontal orientation of the film, allowing for a larger image area and improved image quality compared to standard 35mm film.",
            movies: [
                { title: "White Christmas", director: "Michael Curtiz", type: "color", year: 1954, frames: ["white1.jpg", "white2.jpg"] },
                { title: "To Catch a Thief", director: "Alfred Hitchcock", type: "color", year: 1955, frames: ["thief1.jpg", "thief2.jpg"] },
                { title: "The Ten Commandments", director: "Cecil B. DeMille", type: "color", year: 1956, frames: ["commandments1.jpg", "commandments2.jpg"] },
                { title: "Gunfight at the O.K. Corral", director: "John Sturges", type: "color", year: 1957, frames: ["gunfight1.jpg", "gunfight2.jpg"] },
                { title: "Vertigo", director: "Alfred Hitchcock", type: "color", year: 1958, frames: ["vertigo1.jpg", "vertigo2.jpg"] },
                { title: "North by Northwest", director: "Alfred Hitchcock", type: "color", year: 1959, frames: ["north1.jpg", "north2.jpg"] },
                { title: "It Started in Naples", director: "Melville Shavelson", type: "color", year: 1960, frames: ["naples1.jpg", "naples2.jpg"] },
                { title: "One-Eyed Jacks", director: "Marlon Brando", type: "color", year: 1961, frames: ["jacks1.jpg", "jacks2.jpg"] },
                { title: "The Brutalist", director: "Brady Corbet", type: "color", year: 2024, frames: ["brutalist1.jpg", "brutalist2.jpg"] },
                { title: "One Battle After Another", director: "Paul Thomas Anderson", type: "color", year: 2025, frames: ["battle1.jpg", "battle2.jpg"] },
                { title: "Bugonia", director: "Yorgos Lanthimos", type: "color", year: 2025, frames: ["bugonia1.jpg", "bugonia2.jpg"] }
            ]
         },

         "IMAX": {
            summary: "IMAX is a proprietary system of high-resolution cameras, film formats, film projectors, and theaters known for having very large screens with a tall aspect ratio and steep stadium seating. The IMAX format allows for greater image resolution and clarity compared to traditional formats.",
            movies: [
                { title: "Tiger Child", director: "Donald Brittain", type: "color", year: 1970, frames: ["tiger1.jpg", "tiger2.jpg"] },
                { title: "The Dream is Alive", director: "Graeme Ferguson", type: "color", year: 1985, frames: ["dream1.jpg", "dream2.jpg"] },
                { title: "Rolling Stones: Live at the Max", director: "Michael G. Madsen", type: "color", year: 1991, frames: ["stones1.jpg", "stones2.jpg"] },
                { title: "The Dark Knight", director: "Christopher Nolan", type: "color", year: 2008, frames: ["dark1.jpg", "dark2.jpg"] },
                { title: "Mission: Impossible – Ghost Protocol", director: "Brad Bird", type: "color", year: 2011, frames: ["mission1.jpg", "mission2.jpg"] },
                { title: "Interstellar", director: "Christopher Nolan", type: "color", year: 2014, frames: ["interstellar1.jpg", "interstellar2.jpg"] },
                { title: "Dunkirk", director: "Christopher Nolan", type: "color", year: 2017, frames: ["dunkirk1.jpg", "dunkirk2.jpg"] },
                { title: "Tenet", director: "Christopher Nolan", type: "color", year: 2020, frames: ["tenet1.jpg", "tenet2.jpg"] },
                { title: "Nope", director: "Jordan Peele", type: "color", year: 2022, frames: ["nope1.jpg", "nope2.jpg"] },
                { title: "Oppenheimer", director: "Christopher Nolan", type: "color", year: 2023, frames: ["oppenheimer1.jpg", "oppenheimer2.jpg"] }

            ]
         }
    };
    
    $(".sidebar a").click(function(e) {
        e.preventDefault();
        const targetId = $(this).attr("id").replace("nav-", "section-");
        
        $(".page-section").hide(); 
        $("#" + targetId).show();   

        if(targetId === "section-archive") {
            $("#archive-detail").hide();
            $("#archive-default").show();
        }
    });
 
    $(".format-box").click(function() {
        const format = $(this).data("format"); 
        const data = archiveData[format];

        $("#archive-default").hide();
        $("#archive-detail").show();

        $("#format-title").html(format + " film");
        $("#format-summary").html(data.summary);
        
        $("#movie-list").empty();
        data.movies.forEach((movie, index) => {
            $("#movie-list").append(`<li data-format="${format}" data-index="${index}">${movie.title}</li>`);
        });

        $("#movie-list li").first().click();
    });

    $(document).on("click", "#movie-list li", function() {
        const format = $(this).data("format");
        const index = $(this).data("index");
        const movie = archiveData[format].movies[index];

        $("#movie-list li").removeClass("active");
        $(this).addClass("active");

        $("#movie-title").html(movie.title);
        $("#movie-info").html(`${movie.director}, ${movie.year}`);

        $("#movie-frames").empty();
        movie.frames.forEach(src => {
            $("#movie-frames").append(`<img src="${src}" class="frame-${format}">`);
        });

        $(window).scrollTop(0);
    });

});