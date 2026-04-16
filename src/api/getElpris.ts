
export async function getElpris () {
    const response = await fetch(`https://www.elprisenligenu.dk/api/v1/prices/2026/04-16_DK2.json`)
    

    }

    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    const data = await response.json();

    return data; 
}
