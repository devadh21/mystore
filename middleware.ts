import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {

   //  console.log("req: ", req.nextUrl.pathname);

   //  if(req.nextUrl.pathname.includes('/api')){
   //      console.log("no found")
         
   //      return NextResponse.redirect(new URL('/unauthorized', req.url)) 
   //      // return NextResponse.json({message:"not found"}) 
   //  }


// //   return NextResponse.redirect(new URL('/', req.url))
//     return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
   matcher: ['/api/:path*',]
}