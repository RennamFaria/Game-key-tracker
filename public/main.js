// Updated to point to the proxy
const urlKeyApi = 'http://localhost:3000/proxy'; 

async function getImages() {
    try {
        const response = await fetch(urlKeyApi);
        const data = await response.json();

        if (!response.ok) {
            console.log('Server Error:', data.error);
        } else {
            console.log('Success:', data);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

getImages();
