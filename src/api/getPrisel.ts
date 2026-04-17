export async function getPrisel () {
    const response2 = await fetch(`https://www.elprisenligenu.dk/api/v1/prices/2026/04-17_DK1.json`)

        if (!response2.ok) {
            throw new Error("Network response was not ok")
        }
        const data2 = await response2.json()
        return data2
    }
