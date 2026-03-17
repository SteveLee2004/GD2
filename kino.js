$(function() {
    $("<style>").text(`
        .detail-view { 
            display: grid; 
            grid-template-columns: 4fr 6fr; 
            gap: 60px; 
            width: 100%; 
            animation: fadeIn 0.4s ease; 
            padding-top: 20px; }

        .detail-left h1 { 
            font-size: 4.5rem; 
            margin: 0 0 40px 0; 
            font-weight: 500; 
            line-height: 1; 
            letter-spacing: -1px; }

        .detail-left ul { 
            list-style: none; 
            padding: 0; 
            line-height: 2.2; 
            color: white; }

        .detail-right h2 { 
            font-size: 2.2rem; 
            margin: 0; 
            text-transform: uppercase; 
            line-height: 1.1; 
            font-weight: 500; }

        .movie-meta { 
            text-align: right; 
            font-size: 0.85rem; 
            line-height: 1.6; 
            color: white; 
            margin-bottom: 30px; }

        .back-btn { 
            background: none; 
            border: none; 
            border-bottom: 1px solid white; 
            color: white; cursor: pointer; 
            padding-bottom: 5px; 
            margin-bottom: 60px; 
            text-transform: uppercase; 
            font-size: 11px; 
            letter-spacing: 2px; }

    `).appendTo("head");

    $("summary").on("click", function(e) {
        let formatName = $(this).find(".name").text().trim(); 
        
        if (formatName === "16mm") {
            e.preventDefault(); 
            
            $(".format-item").hide(); 
            $(".detail-view").remove(); 

            let detailHtml = `
                <div class="detail-view">
                    <div class="detail-left">
                        <button class="back-btn">← Back to Archive</button>
                        <h1>${formatName} film</h1>
                        <ul>
                            <li style="color:white; font-weight:bold;">- Night of the Living Dead (1968)</li>
                            <li> -The Texas Chainsaw Massacre (1974)</li>
                            <li> -Evil Dead (1981)</li>
                            <li> -Man Bites Dog (1992)</li>
                            <li> -Clerks (1994)</li>
                            <li> -Leaving Las Vegas (1995)</li>
                            <li> -The Squid and the Whale (2005)</li>
                            <li> -Mother! (2017)</li>
                            <li> -Mid90s (2018)</li>
                            <li> -The Smashing Machine (2025)</li>

                        </ul>
                    </div>

                    <div class="detail-right">
                        <div style="display: flex; 
                        justify-content: space-between; 
                        align-items: flex-start;">
                        <h2>Night of<br>The Living Dead</h2>
                        <div class="movie-meta">Director: George A. Romero
                        <br>Year: 1968<br>Black & White</div>
                    </div>
                        <img src="night-of-the-living-dead.jpg" style="width: 100%;">
                    </div>
                </div>
            `;
            
            $(".format-list").append(detailHtml);

            $(".back-btn").on("click", function() {
                $(".detail-view").remove();
                $(".format-item").show();
            });
        }

    });
});