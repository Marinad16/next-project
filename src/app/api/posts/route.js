import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";


export const Get = async (request) => {
    return new NextResponse("sadg", {status: 200})
    // try {
    //     await connect()
    //     const posts = await Post.find();
    //
    //     return new NextResponse(posts, {status: 200})
    // } catch (err) {
    //     return new NextResponse("error", {status: 500})
    // }
}