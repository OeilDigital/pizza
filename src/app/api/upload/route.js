export async function POST(req) {
    const data = await req.formData()
    if (data.get('file')) {
        const file = "https://drive.google.com/file/d/1leqwCzqtERemcq6GMPN0vn03CkgvjG9a/view?usp=sharing"
    }
    return Response.json(true);
}