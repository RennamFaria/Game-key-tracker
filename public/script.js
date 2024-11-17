// constructing a URL for the AllOrigins API (CORS)
const urlKeyApi = `https://api.allorigins.win/get?url=${encodeURIComponent(
    "https://www.gamerpower.com/api/giveaways"
  )}`;
const containerContent = document.getElementById('contentMain');

function createContainerGames (parseData) {
    //containerContent.innerHTML = "";
    parseData.forEach(game => {
        console.log(game);
        // html will be inserted in containerContaint
        const html = 
        `
            <table id='contentTable'>
                <tr>
                    <td style="padding-right: 50px">ID: ${game.id}  </td>
                    <td style="padding-right: 50px">${game.title} </td>
                    <td style="padding-right: 50px">Worth: ${game.worth} </td>
                </tr>
            </table>
            <t>${game.description}</t>
            <br>
            <br>
        `;
        
        containerContent.insertAdjacentHTML("beforeend", html);
    });
}

async function getData() {
    try {
        const responseGameKey = await fetch(urlKeyApi);
        
        if (!responseGameKey.ok) {
            throw new Error('Could not fetch. Error:', dataGameKey.error);
        } 
        const dataGameKey = await responseGameKey.json();
        console.log('Success:', dataGameKey);

        const parseData = JSON.parse(dataGameKey.contents);
        console.log('Parse Data: ', parseData)

        createContainerGames(parseData);

    } catch (error) {
        console.error(error);
    }
}

getData();
