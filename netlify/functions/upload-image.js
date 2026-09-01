/**
 * ASV TOURS — Image Upload Netlify Function
 *
 * Uploads base64 images to imgbb (free image hosting) and returns the URL.
 * Requires IMGBB_API_KEY environment variable in Netlify dashboard.
 *
 * POST /api/upload-image
 * Body: { "image": "base64string", "filename": "photo.jpg" }
 * Returns: { "url": "https://i.ibb.co/..." }
 */
exports.handler = async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: "Method not allowed." }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { image, filename } = body;

    if (!image) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: "Image data is required." }) };
    }

    const apiKey = process.env.IMGBB_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: "Image upload not configured. IMGBB_API_KEY is missing." }) };
    }

    // Upload to imgbb
    const formData = new URLSearchParams();
    formData.append("key", apiKey);
    formData.append("image", image);
    if (filename) formData.append("name", filename.replace(/\.[^.]+$/, ""));

    const res = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!data.success) {
      console.error("imgbb error:", data);
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: data.error?.message || "Image upload failed." }) };
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        url: data.data.url,
        display_url: data.data.display_url,
        delete_url: data.data.delete_url,
        width: data.data.width,
        height: data.data.height,
      }),
    };
  } catch (e) {
    console.error("Upload function error:", e.message);
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: "Internal server error: " + e.message }) };
  }
};
