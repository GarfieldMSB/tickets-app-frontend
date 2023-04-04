


export const getUltimos = async() => {
    const resp = await fetch(process.env.PATH);
    const data = await resp.json();

    return data.ultimos;
}