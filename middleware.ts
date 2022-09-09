import { NextResponse }  from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware (req: NextRequest) {
    console.log({ req })
    return NextResponse.next();
}
// See " Matching Paths " below to learn ware
// export const config = {
//     matcher: '/about/:path*',
// }