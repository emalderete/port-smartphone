export async function POST(request){
    const res = await request.json();
    let lat = res.latitude;
    let lon = res.longitude;

    const openWeatherApiKey = '1dedb490825caf835053c9f0e16a2116';
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${openWeatherApiKey}`;

    const apiRes = await fetch(api, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const jsonData = await apiRes.json();

    return Response.json({status: 200, data: jsonData, message: 'Solicitud aprobada'});
}