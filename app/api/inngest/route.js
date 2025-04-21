// filepath: c:\Users\mishr\Desktop\QuickCart\app\api\inngest\route.js
import { inngest } from "@/config/inngest";

export const POST = async (req, res) => {
    console.log("Incoming request to Inngest:", req.body);
    return inngest.handleRequest(req, res);
};import { inngest } from "@/config/inngest";

export const POST = inngest.handleRequest;
