export async function getExtensions(){
    const d = new Date()
    try {
        const res = await fetch(`/data.json?t=${d.toISOString()}`)
        if(!res.ok){
            console.error("Hiba a JSON fájl beolvasásakor.");
            return []
        }
        return await res.json()
    } catch (error) {
        console.error("Hálózati hiba!");
        return []
    }
}