import { inngest } from "@/config/inngest";

export const POST = async (req, res) => {
    console.log("Incoming request to Inngest:", req.body);
    return inngest.handleRequest(req, res);
};
