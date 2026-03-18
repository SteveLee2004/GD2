$(document).ready(function() {

    const archiveData = {
        "16mm": {
            summary: "16mm film is a historically popular and economical gauge of film. With a width of approximately 2/3 inches, it was generally used for the production of non-theatrical films such as industrial, educational, and television films, as well as low-budget films.",
            movies: [
                { title: "DON'T LOOK BACK", director:"D. A. Pennebaker", type: "Black & hite", year: 1967, frames: ["dont-images/dont1.png", "dont-images/dont2.png", "dont-images/dont3.png"] },
                { title: "NIGHT OF THE LIVING DEAD", director: "George A. Romero", type: "Black & white", year: 1968, frames: ["living-dead/living-dead3.png", "living-dead/living-dead2.png", "living-dead/living-dead6.png", "living-dead/living-dead4.png", "living-dead/living-dead5.png", "living-dead/living-dead1.png"] },
                { title: "THE TEXAS CHAINSAW MASSACRE", director: "Tobe Hooper", type: "Color", year: 1974, frames: ["texas-images/texas2.png", "texas-images/texas1.png"] },
                { title: "THE EVIL DEAD", director: "Sam Raimi", type: "Color", year: 1981, frames: ["evil-dead-images/evil-dead2.png", "evil-dead-images/evil-dead1.png"] },
                { title: "THIS IS SPINAL TAP", director: "Rob Reiner", type: "Color", year: 1984, frames: ["spinal-images/spinal1.png"]},
                { title: "MAN BITES DOGS", director: "Rémy Belvaux, André Bonzel, Benoît Poelvoorde", type: "Black & white", year: 1992, frames: ["manbites1.jpg", "manbites2.jpg"] },
                { title: "CLERKS", director: "Kevin Smith", type: "Black & white", year: 1994, frames: ["clerks1.jpg", "clerks2.jpg"] },
                { title: "LEAVING LAS VEGAS", director: "Mike Figgis", type: "olor", year: 1995, frames: ["vegas1.jpg", "vegas2.jpg"] },
                { title: "PI", director: "Darren Aronofsky", type: "Black & white", year: 1998, frames:[]},
                { title: "THE BLAIR WITCH PROJECT", director: "Daniel Myrick, Eduardo Sánchez", type: "Color / Black & white", year: 1999, frames: ["blair-images/blairwitch1.png", "blair2.jpg"] },
                { title: "CITY OF GOD", director: "Fernando Meirelles & Kátia Lund", type: "Color", year: 2002, frames:[]},
                { title: "SQUID AND THE WHALE", director: "Noah Baumbach", type: "Color", year: 2005, frames: ["squid1.jpg", "squid2.jpg"] },
                { title: "MOONRISE KINGDOM", director: "Wes Anderson", type: "Color", year: 2012, frames: []},
                { title: "MOTHER!", director: "Darren Aronofsky", type: "Color", year: 2017, frames: ["mother1.jpg", "mother2.jpg"] },
                { title: "MID90S", director: "Jonah Hill", type: "Color", year: 2018, frames: ["mid90s1.jpg", "mid90s2.jpg"] },
                { title: "THE SMASHING MACHINE", director: "Benny Safdie", type: "Color", year: 2025, frames: ["smashing1.jpg", "smashing2.jpg"] }
            ]
        },
        "35mm": {
            summary: "35mm film is the standard film gauge used for motion pictures. This is the most commonly used platform for film-based cinema. It originated from the film format used in the Kinetoscopesystems of William Kennedy, Laurie Dixon, and Thomas Edison in the late 19th and early 20th centuries. In 1908, Edison manipulated the industry to establish a standard for shared patents and licensing his technology.",
            movies: [
                { title: "METROPOLIS", director: "Fritz Lang",type: "Black & white", year: 1927, frames: ["metro-images/metro1.png", "metro2.jpg"] },
                { title: "WIZARD OF OZ", director: "Victor Fleming", type: "Color", year: 1939, frames: ["wind1.jpg", "wind2.jpg"] },
                { title: "CITIZEN KANE", director: "Orson Welles", type: "Black & white", year: 1941, frames: ["kane1.jpg", "kane2.jpg"] },
                { title: "SUNSET BOULEVARD", director: "Billy Wilder", type: "Black & white", year: 1950, frames: ["sunset1.jpg", "sunset2.jpg"] },
                { title: "FROM RUSSIA WITH LOVE", director: "Terence Young", type: "Color", year: 1963, frames: ["russia1.jpg", "russia2.jpg"] },
                { title: "THE HARD DAY'S NIGHT", director: "Richard Lester", type: "Black & white", year: 1964, frames: []},
                { title: "BULLITT", director: "Peter Yates", type: "Color", year: 1968, frames:[]},
                { title: "THE GODFATHER", director: "Francis Ford Coppola", type: "Color", year: 1972, frames: ["godfather-images/godfather1.png", "godfather2.jpg"] },
                { title: "ERASERHEAD", director: "David Lynch", type: "Black & white", year: 1977, frames: []},
                { title: "RAGING BULL", director: "Martin Scorsese", type: "Blakc & white", year: 1980, frames: []},
                { title: "RAIDERS OF THE LOST ARK", director: "Steven Spielberg", type: "Color", year: 1981, frames: ["raiders1.jpg", "raiders2.jpg"] },
                { title: "PEE-WEE'S BIG ADVENTURE", director: "Tim burton", type: "Color", year: 1988, frames: ["peewee1.jpg", "peewee2.jpg"]},
                { title: "FIGHT CLUB", director: "David Fincher", type: "Color", year: 1999, frames: ["fight1.jpg", "fight2.jpg"] },
                { title: "THERE WILL BE BLOOD", director: "Paul Thomas Adnerson", type: "Color", year: 2007, frames: ["country1.jpg", "country2.jpg"] },
                { title: "UNCUT GEMS", director: "Josh and Benny Safdie", type: "Color", year: 2019, frames: ["uncut1.jpg", "uncut2.jpg"] },
                { title: "MARTY SUPREME", director: "Josh Safdie", type: "Color", year: 2025, frames: ["marty1.jpg", "marty2.jpg"] }
            ]
        },
        "70mm": {
            summary: "70mm film, often referred to as 65mm for the camera negative, is a large format film gauge that offers superior image quality and resolution compared to smaller formats. It offers higher resolution and image quality compared to 35mm. It is often used for epic films and special presentations, providing a more immersive cinematic experience.",
            movies: [
                { title: "BEN-HUR", director: "William Wyler", type: "Color", year: 1959, frames: ["ben1.jpg", "ben2.jpg"] },
                { title: "WEST SIDE STORY", director: "Jerome Robbins, Robert Wise", type: "Color", year: 1961, frames: ["west1.jpg", "west2.jpg"] },
                { title: "LAWRENCE OF ARABIA", director: "David Lean", type: "Color", year: 1962, frames: ["lawrence1.jpg", "lawrence2.jpg"] },
                { title: "GRAND PRIX", director: "John Frankenheimer", type: "Color", year: 1966, frames: ["grand-images/grand1.png", "grand-images/grand2.png"] },
                { title: "2001: A SPACE ODYSSEY", director: "Stanley Kubrick", type: "Color", year: 1968, frames: ["space1.jpg", "space2.jpg"] },
                { title: "PATTON", director: "Franklin J. Schaffner", type: "Color", year: 1970, frames: ["patton-images/patton1.png", "patton-images/patton2.png", "patton-images/patton3.png"] },
                { title: "TRON", director: "Steven Lisberger", type: "Color", year: 1982, frames: ["tron1.jpg", "tron2.jpg"] },
                { title: "HAMLET", director: "Kenneth Branagh", type: "Color", year: 1996, frames: ["hamlet1.jpg", "hamlet2.jpg"] },
                { title: "THE MASTER", director: "Paul Thomas Anderson", type: "Color", year: 2012, frames: ["master-images/master1.png", "master2.jpg"] },
                { title: "THE HATEFUL EIGHT", director: "Quentin Tarantino", type: "Color", year: 2015, frames: ["hateful1.jpg", "hateful2.jpg"] },
                { title: "SINNERS", director: "Ryan Coogler", type: "Color", year: 2025, frames: ["sinners1.jpg", "sinners2.jpg"] }
            ]
        },
        "vistavision": {
            summary: "VistaVision is a higher resolution, widescreen variant of the 35mm motion picture film format. With a width of 70mm, this format offers higher resolution and image quality compared to 35mm. It is often used for epic films and special presentations, providing a more immersive cinematic experience.",
            movies: [
                { title: "WHITE CHRISTMAS", director: "Michael Curtiz", type: "Color", year: 1954, frames: ["white1.jpg", "white2.jpg"] },
                { title: "TO CATCH A THIEF", director: "Alfred Hitchcock", type: "Color", year: 1955, frames: ["thief1.jpg", "thief2.jpg"] },
                { title: "THE TEN COMMANDENTS", director: "Cecil B. DeMille", type: "Color", year: 1956, frames: ["commandments1.jpg", "commandments2.jpg"] },
                { title: "GUNFIGHT AT THE O.K. CORRAL", director: "John Sturges", type: "Color", year: 1957, frames: ["gunfight1.jpg", "gunfight2.jpg"] },
                { title: "VERTIGO", director: "Alfred Hitchcock", type: "Color", year: 1958, frames: ["vertigo1.jpg", "vertigo2.jpg"] },
                { title: "NORTH BY NORTHWEST", director: "Alfred Hitchcock", type: "Color", year: 1959, frames: ["north1.jpg", "north2.jpg"] },
                { title: "IT STARTED IN NAPLES", director: "Melville Shavelson", type: "Color", year: 1960, frames: ["naples1.jpg", "naples2.jpg"] },
                { title: "ONE-EYED JACKS", director: "Marlon Brando", type: "Color", year: 1961, frames: ["jacks1.jpg", "jacks2.jpg"] },
                { title: "THE BRUTALIST", director: "Brady Corbet", type: "Color", year: 2024, frames: ["brutalist1.jpg", "brutalist2.jpg"] },
                { title: "ONE BATTLE AFTER ANOTHER", director: "Paul Thomas Anderson", type: "Color", year: 2025, frames: ["battle1.jpg", "battle2.jpg"] },
                { title: "BUGONIA", director: "Yorgos Lanthimos", type: "Color", year: 2025, frames: ["bugonia1.jpg", "bugonia2.jpg"] }
            ]
         },
         "imax": {
            summary: "IMAX is a proprietary system of high-resolution cameras, film formats. Known for its massive frame size and immersive cinematic experience, this format was developed in the late 1960s to push the boundaries of resolution.",
            movies: [
                { title: "TIGER CHILD", director: "Donald Brittain", type: "Color", year: 1970, frames: ["tiger1.jpg", "tiger2.jpg"] },
                { title: "THE DREAM IS ALIVE", director: "Graeme Ferguson", type: "Color", year: 1985, frames: ["dream1.jpg", "dream2.jpg"] },
                { title: "ROLLING STONES: LIVE AT THE MAX", director: "Michael G. Madsen", type: "Color", year: 1991, frames: ["stones1.jpg", "stones2.jpg"] },
                { title: "THE DARK KNIGHT", director: "Christopher Nolan", type: "Color", year: 2008, frames: ["dark1.jpg", "dark2.jpg"] },
                { title: "MISSION: IMPOSSIBLE – GHOST PROTOCOL", director: "Brad Bird", type: "Color", year: 2011, frames: ["mission1.jpg", "mission2.jpg"] },
                { title: "INTERSTELLAR", director: "Christopher Nolan", type: "Color", year: 2014, frames: ["interstellar1.jpg", "interstellar2.jpg"] },
                { title: "DUNKIRK", director: "Christopher Nolan", type: "Color", year: 2017, frames: ["dunkirk1.jpg", "dunkirk2.jpg"] },
                { title: "TENET", director: "Christopher Nolan", type: "Color", year: 2020, frames: ["tenet1.jpg", "tenet2.jpg"] },
                { title: "NOPE", director: "Jordan Peele", type: "Color", year: 2022, frames: ["nope1.jpg", "nope2.jpg"] },
                { title: "OPPENHEIMER", director: "Christopher Nolan", type: "Color / Black & white", year: 2023, frames: ["oppenheimer1.jpg", "oppenheimer2.jpg"] }
            ]
         }
    };
    
    $(".sidebar a").click(function(e) {
        e.preventDefault();
        let target = $(this).attr("id").replace("nav-", "section-");
        $(".page-section").hide();
        $("#"+target).show();
        if(target==="section-archive"){
            $("#archive-detail").hide();
            $("#archive-default").show();
        }
    });
 
    $(".format-box").click(function() {
        let format = $(this).data("format"); 
        let data = archiveData[format];

        if(!data) return; 

        $("#archive-default").hide();
        $("#archive-detail").show();

        $("#selected-format-box").attr("class", "ratio-box frame-" + format);
        $("#format-title").text(format + " film");
        $("#format-summary").text(data.summary);
        
        $("#movie-list").empty();
        data.movies.forEach(function(movie, i) {
            $("#movie-list").append(`<li data-format="${format}" data-index="${i}">${movie.title}</li>`);
        });

        $("#movie-list li").first().trigger("click");
    });

$(document).on("click", "#movie-list li", function() {
    const format = $(this).data("format");
    const index = $(this).data("index");
    const movie = archiveData[format].movies[index];

    $(this).addClass("active").siblings().removeClass("active");

    $("#movie-title").text(movie.title);
    $(".info-director").text(movie.director);
    $(".info-year").text(movie.year);
    $(".info-type").text(movie.type);

    $("#movie-frames").empty();

    movie.frames.forEach(function(src) {
    let path;

    if (src.includes('/')) {
        path = `images/${src}`; 
    } 
    else if (movie.folder) {
        path = `images/${movie.folder}/${src}`;
    } 
    else {
        path = `images/${src}`;
    }
    
    $("#movie-frames").append(`<img src="${path}" class="frame-${format}" alt="${movie.title} frame">`)
    });

    $(window).scrollTop(0);

});

const cursor = document.createElement("div");

cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.background = "orange";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.transform = "translate(-50%, -50%)";
cursor.style.display = "none";
cursor.style.zIndex = "9999";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

$(document).on("mouseenter", "#movie-list li", function() {
    const index = $(this).data("index");
    const format = $(this).data("format");
    const movie = archiveData[format].movies[index];

    if(movie.title === "MARTY SUPREME"){
        cursor.style.display = "block";          
        document.body.style.cursor = "none";     
    } else {
        cursor.style.display = "none";           
        document.body.style.cursor = "default";  
    }
});

$(document).on("mouseleave", "#movie-list li", function(){
    cursor.style.display = "none";
    document.body.style.cursor = "default";
    
});

});