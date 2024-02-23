import { NextResponse } from 'next/server';

export async function GET(request){
    return NextResponse.json({ msj: 'Api consumida correctamente' }, { status: 200});
}

// Recuerda definir la api de clima, consumirla y entregar los datos con esta api.