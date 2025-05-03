const supabaseURL = "https://scrwqyyvidqahgzmhqwu.supabase.co/rest/v1/All Games";
const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcndxeXl2aWRxYWhnem1ocXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NzIzMzksImV4cCI6MjA2MDU0ODMzOX0.AHUoQPSQ2K2sIUfqCuVui8_4CG84Tcv315AjYbINPj0";

const allGamesElem = document.querySelector('.all-games')
const lastGamesWrapper = document.querySelector('.last-games_wrapper')



fetch(supabaseURL, {
    method: "GET",
    headers: {
        apikey: supabaseApiKey,
        Authorization: `Bearer ${supabaseApiKey}`,
    },
})
    .then((result) => result.json())
    .then((data) => getAllGames(data))
    .catch((err) => {
        console.log(err);
    });


const getAllGames = (allData) => {
    allGamesElem.innerHTML = allData.length

    const firstIndex = allData.length - 5
    const lastIndex = firstIndex + 5



    const lastGames = allData.slice(firstIndex, lastIndex)
    lastGamesWrapper.innerHTML = ''
    lastGames.forEach(element => {
        lastGamesWrapper.insertAdjacentHTML('beforeend',
            `
             <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>cyberpunk</td>
                <td>${element.price}</td>
                <td>${element.genre}</td>
                <td>${element.platforms}</td>
                <td>${element.coverimg}</td>
                <td class="actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
             </tr>
            `
        )
    });

}