$(document).ready(function() {

    $(".page-section").hide(); 
    $("#section-archive").show(); 
    $("#archive-default").show(); 
    $("#archive-detail").hide();

    const archiveData = {
        "16mm": {
            summary: "Introduced by Eastman Kodak in 1923, the 16mm film was a portable and cost-effective alternative to the 35mm industry standard. Originally intended for amateur filmmakers and television production, its accessibility allowed independent directors and producers to bypass the financial and technical constraints of the major studio systems, effectively democratizing the cinematic medium. The defining aesthetic of 16mm is its film grain. Due to the smaller physical frame size compared to 35mm, the silver halide crystals—the organic building blocks of the image—become more visible upon enlargement. While once considered a technical limitation, this texture is now recognized as a source of physical depth that digital sensors cannot replicate.",
            movies: [
                { title: "DON'T LOOK BACK", director:"D. A. Pennebaker", type: "Black & hite", year: 1967, frames: ["dont-images/dont1.png", "dont-images/dont2.png", "dont-images/dont3.png"] },
                { title: "NIGHT OF THE LIVING DEAD", director: "George A. Romero", type: "Black & white", year: 1968, frames: ["living-dead/living-dead3.png", "living-dead/living-dead2.png", "living-dead/living-dead6.png", "living-dead/living-dead4.png", "living-dead/living-dead5.png", "living-dead/living-dead1.png"] },
                { title: "THE TEXAS CHAINSAW MASSACRE", director: "Tobe Hooper", type: "Color", year: 1974, frames: ["texas-images/texas2.png", "texas-images/texas1.png"] },
                { title: "THE EVIL DEAD", director: "Sam Raimi", type: "Color", year: 1981, frames: ["evil-dead-images/evil-dead2.png", "evil-dead-images/evil-dead1.png"] },
                { title: "THIS IS SPINAL TAP", director: "Rob Reiner", type: "Color", year: 1984, frames: ["spinal-images/spinal1.png", "spinal-images/spinal2.png"]},
                { title: "MAN BITES DOGS", director: "Rémy Belvaux, André Bonzel, Benoît Poelvoorde", type: "Black & white", year: 1992, frames: ["man-bites-images/manbites1.png", "man-bites-images/manbites2.png", "man-bites-images/manbites3.png", "man-bites-images/manbites4.png"] },
                { title: "CLERKS", director: "Kevin Smith", type: "Black & white", year: 1994, frames: ["clerks-images/clerks1.png", "clerks2.jpg"] },
                { title: "LEAVING LAS VEGAS", director: "Mike Figgis", type: "Color", year: 1995, frames: ["leaving-images/leaving1.png", "vegas2.jpg"] },
                { title: "PI", director: "Darren Aronofsky", type: "Black & white", year: 1998, frames:["pi-images/pi1.png"]},
                { title: "THE BLAIR WITCH PROJECT", director: "Daniel Myrick, Eduardo Sánchez", type: "Color / Black & white", year: 1999, frames: ["blair-images/blairwitch1.png", "blair2.jpg"] },
                { title: "CITY OF GOD", director: "Fernando Meirelles & Kátia Lund", type: "Color", year: 2002, frames:["city-of-images/city-of1.png"]},
                { title: "SQUID AND THE WHALE", director: "Noah Baumbach", type: "Color", year: 2005, frames: ["squid-images/squid1.png", "squid2.jpg"] },
                { title: "MOONRISE KINGDOM", director: "Wes Anderson", type: "Color", year: 2012, frames: ["moonrise-images/moonrise1.png"]},
                { title: "MOTHER!", director: "Darren Aronofsky", type: "Color", year: 2017, frames: ["mother-images/mother1.png", "mother2.jpg"] },
                { title: "MID90S", director: "Jonah Hill", type: "Color", year: 2018, frames: ["mid90-images/mid1.png", "mid90s2.jpg"] },
                { title: "THE SMASHING MACHINE", director: "Benny Safdie", type: "Color", year: 2025, frames: ["smashing-machine-images/smashing1.png", "smashing2.jpg"] }
            ]
        },
        "35mm": {
            summary: "Since its standardization by the Motion Picture Patents Company in 1909, 35mm has remained as the backbone of global cinema. Its four-perforation frame structure offered a balance between chemical resolution and mechanical reliability, establishing a globally used visual format that defined the 20th century. This format provides a clarity wich a natural sharpness of the scenes. The 1.37:1 Academy ratio or the 2.39:1 Anamorphic stretch on 35mm defined the golden ratio of cinema over 100 years.",
            movies: [
                { title: "METROPOLIS", director: "Fritz Lang",type: "Black & white", year: 1927, frames: ["metro-images/metro1.png", "metro2.jpg"] },
                { title: "WIZARD OF OZ", director: "Victor Fleming", type: "Color", year: 1939, frames: ["oz-images/oz1.png", "wind2.jpg"] },
                { title: "CITIZEN KANE", director: "Orson Welles", type: "Black & white", year: 1941, frames: ["kane-images/kane1.png", "kane2.jpg"] },
                { title: "SUNSET BOULEVARD", director: "Billy Wilder", type: "Black & white", year: 1950, frames: ["sunset-images/sunset1.png", "sunset2.jpg"] },
                { title: "THE NIGHT OF THE HUNTER", director: "Charles Laughton", type: "Black & white", year: 1955, frames: ["hunter-images/hunter1.png"]},
                { title: "FROM RUSSIA WITH LOVE", director: "Terence Young", type: "Color", year: 1963, frames: ["russia-images/russia1.png", "russia2.jpg"] },
                { title: "THE HARD DAY'S NIGHT", director: "Richard Lester", type: "Black & white", year: 1964, frames: ["hard-images/hard1.png"]},
                { title: "BULLITT", director: "Peter Yates", type: "Color", year: 1968, frames:["bullitt-images/bullitt1.png"]},
                { title: "THE GODFATHER", director: "Francis Ford Coppola", type: "Color", year: 1972, frames: ["godfather-images/godfather1.png", "godfather2.jpg"] },
                { title: "ERASERHEAD", director: "David Lynch", type: "Black & white", year: 1977, frames: ["eraser-images/eraser1.png"]},
                { title: "RAGING BULL", director: "Martin Scorsese", type: "Blakc & white", year: 1980, frames: ["raging-images/raging1.png"]},
                { title: "RAIDERS OF THE LOST ARK", director: "Steven Spielberg", type: "Color", year: 1981, frames: ["raiders-images/raiders1.png", "raiders2.jpg"] },
                { title: "PEE-WEE'S BIG ADVENTURE", director: "Tim burton", type: "Color", year: 1988, frames: ["peewee-images/peewee1.png", "peewee2.jpg"]},
                { title: "FIGHT CLUB", director: "David Fincher", type: "Color", year: 1999, frames: ["fightclub-images/fightclub1.png", "fight2.jpg"] },
                { title: "THERE WILL BE BLOOD", director: "Paul Thomas Adnerson", type: "Color", year: 2007, frames: ["blood-images/blood1.png", "country2.jpg"] },
                { title: "UNCUT GEMS", director: "Josh and Benny Safdie", type: "Color", year: 2019, frames: ["uncut-images/uncut1.png", "uncut2.jpg"] },
                { title: "MARTY SUPREME", director: "Josh Safdie", type: "Color", year: 2025, frames: ["marty-images/marty1.png", "marty2.jpg"] }
            ]
        },
        "70mm": {
            summary: "70mm film, often referred to as 65mm for the camera negative, is a large film format that offers superior image quality and resolution compared to smaller formats. It offers higher resolution and image quality compared to 35mm. It is often used for epic films and special presentations, providing a more immersive cinematic experience. By doubling the surface area of standard 35mm film, it drastically reduces grain and enhances chromatic precision, creating a scene with stability and profound clarity.",
            movies: [
                { title: "BEN-HUR", director: "William Wyler", type: "Color", year: 1959, frames: ["benhur-images/benhur-1.png", "ben2.jpg"] },
                { title: "WEST SIDE STORY", director: "Jerome Robbins, Robert Wise", type: "Color", year: 1961, frames: ["west-images/west1.png", "west2.jpg"] },
                { title: "LAWRENCE OF ARABIA", director: "David Lean", type: "Color", year: 1962, frames: ["lawrence-images/lawrence1.png", "lawrence2.jpg"] },
                { title: "GRAND PRIX", director: "John Frankenheimer", type: "Color", year: 1966, frames: ["grand-images/grand1.png", "grand-images/grand2.png"] },
                { title: "2001: A SPACE ODYSSEY", director: "Stanley Kubrick", type: "Color", year: 1968, frames: ["2001-images/2001-1.png", "space2.jpg"] },
                { title: "PATTON", director: "Franklin J. Schaffner", type: "Color", year: 1970, frames: ["patton-images/patton1.png", "patton-images/patton2.png", "patton-images/patton3.png"] },
                { title: "TRON", director: "Steven Lisberger", type: "Color", year: 1982, frames: ["tron-images/tron-1.png", "tron2.jpg"] },
                { title: "HAMLET", director: "Kenneth Branagh", type: "Color", year: 1996, frames: ["hamlet-images/hamlet1.png", "hamlet2.jpg"] },
                { title: "THE MASTER", director: "Paul Thomas Anderson", type: "Color", year: 2012, frames: ["master-images/master1.png", "master2.jpg"] },
                { title: "THE HATEFUL EIGHT", director: "Quentin Tarantino", type: "Color", year: 2015, frames: ["hateful-images/hateful1.png", "hateful2.jpg"] },
                { title: "SINNERS", director: "Ryan Coogler", type: "Color", year: 2025, frames: ["sinners-images/sinners1.png", "sinners2.jpg"] }
            ]
        },
        "VistaVision": {
            summary: "Engineered by Paramount in 1954, VistaVision revolutionaized the industry by rotating the 35mm film strip horizontally. By utlizing eight perforations per frame instead of the standard four, it created a negative with a significantly larger surface area, resulting in grain-free, high-definition image that was years ahead of its time. Originally designed to combat the rise of cheap TV films, VistaVision became the gold standard for visual effects and deep-focus cinematography. Even though it was abandoned by Hollywood after the huge failure of One-Eyed Jacks in 1961, this format came back in 2024, and is being widely used again.",
            movies: [
                { title: "WHITE CHRISTMAS", director: "Michael Curtiz", type: "Color", year: 1954, frames: ["christmas-images/christmas1.png", "white2.jpg"] },
                { title: "RICHARD III", director: "Lawrence Olivier", type: "Color", year: 1955, frames: ["richard-images/richard1.png", "thief2.jpg"] },
                { title: "THE TEN COMMANDENTS", director: "Cecil B. DeMille", type: "Color", year: 1956, frames: ["ten-images/ten1.png", "commandments2.jpg"] },
                { title: "GUNFIGHT AT THE O.K. CORRAL", director: "John Sturges", type: "Color", year: 1957, frames: ["gunfight-images/gunfight1.png", "gunfight2.jpg"] },
                { title: "VERTIGO", director: "Alfred Hitchcock", type: "Color", year: 1958, frames: ["vertigo-images/vertigo1.png", "vertigo2.jpg"] },
                { title: "NORTH BY NORTHWEST", director: "Alfred Hitchcock", type: "Color", year: 1959, frames: ["north-images/north1.png", "north2.jpg"] },
                { title: "IT STARTED IN NAPLES", director: "Melville Shavelson", type: "Color", year: 1960, frames: ["naples-images/naples1.png", "naples2.jpg"] },
                { title: "ONE-EYED JACKS", director: "Marlon Brando", type: "Color", year: 1961, frames: ["jacks-images/jacks1.png", "jacks2.jpg"] },
                { title: "THE BRUTALIST", director: "Brady Corbet", type: "Color", year: 2024, frames: ["brutalist-images/brutalist1.png", "brutalist2.jpg"] },
                { title: "ONE BATTLE AFTER ANOTHER", director: "Paul Thomas Anderson", type: "Color", year: 2025, frames: ["one-battle-images/one-battle1.png", "battle2.jpg"] },
                { title: "BUGONIA", director: "Yorgos Lanthimos", type: "Color", year: 2025, frames: ["bugonia-images/bugonia1.png", "bugonia2.jpg"] }
            ]
         },
         "IMAX": {
            summary: "Developed in the late 1960s as a specialized format for the grand-scale exhbition of science or nature documentary films, 15-perforation IMAX film is arguably the most powerful analog imaging system ever designed. Its frame is roughly ten times larger than standard 35mm, offering a resolution that challenges the limits of human eye. The vertical immerion of the format create a visceral, physical recation in the viewer, turning the act of watching a film into an act of presence within a hyper-real enviornment.",
            movies: [
                { title: "TIGER CHILD", director: "Donald Brittain", type: "Color", year: 1970, frames: ["tiger-images/tiger1.png"] },
                { title: "THE DREAM IS ALIVE", director: "Graeme Ferguson", type: "Color", year: 1985, frames: ["dream-images/dream1.png", "dream2.jpg"] },
                { title: "ROLLING STONES: LIVE AT THE MAX", director: "Michael G. Madsen", type: "Color", year: 1991, frames: ["rolling-images/rolling1.png", "stones2.jpg"] },
                { title: "THE DARK KNIGHT", director: "Christopher Nolan", type: "Color", year: 2008, frames: ["dark-knight-images/dark-knight1.png", "dark2.jpg"] },
                { title: "MISSION: IMPOSSIBLE – GHOST PROTOCOL", director: "Brad Bird", type: "Color", year: 2011, frames: ["mission-images/mission1.png", "mission2.jpg"] },
                { title: "INTERSTELLAR", director: "Christopher Nolan", type: "Color", year: 2014, frames: ["inter-images/inter1.png", "interstellar2.jpg"] },
                { title: "DUNKIRK", director: "Christopher Nolan", type: "Color", year: 2017, frames: ["dunkirk-images/dunkirk1.png", "dunkirk2.jpg"] },
                { title: "TENET", director: "Christopher Nolan", type: "Color", year: 2020, frames: ["tenet-images/tenet1.png", "tenet2.jpg"] },
                { title: "NOPE", director: "Jordan Peele", type: "Color", year: 2022, frames: ["nope-images/nope1.png", "nope2.jpg"] },
                { title: "OPPENHEIMER", director: "Christopher Nolan", type: "Color / Black & white", year: 2023, frames: ["oppenheimer-images/oppenheimer1.png", "oppenheimer2.jpg"] }
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

        // $("#archive-default").hide();
        $("#archive-detail").show();
        $(window).scrollTop(0);

        // $("#selected-format-box").attr("class", "ratio-box frame-" + format);
        $("#format-title").text(format);
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

setTimeout(function(){
$("#box-35mm").click();
},1000)

