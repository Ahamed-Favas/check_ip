import { connectMongoDB } from "@/lib/mongodb";
import IpModel from "@/models/ip";
import { NextResponse } from "next/server";
await connectMongoDB();

export async function POST(req){
    try {
        const {ip} = await req.json()
        const existingIp = await IpModel.findOne({ ip:ip }).select('_id');
        if (existingIp) {
            return NextResponse.json({message:ip})
        }
        await IpModel.create({ ip });
        return NextResponse.json({message:ip})
    } catch (error) {
        return NextResponse.json({})
    }
}