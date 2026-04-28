import { supabaseAdmin } from "./supabaseAdmin";

export const requireAdmin = async (request: Request) => {
    const token = request.headers.get("authorization")?.replace("Bearer ", "");
    if(!token) {
        return { user: null, error: "Missing auth token"};
    }

    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data.user) {
        return { user: null, error: "Invalid auth token" };
    }    
    if (data.user.email !== process.env.ADMIN_EMAIL) {
        return { user: null, error: "Forbidden" };
    }
    
    return { user: data.user, error: null };
}