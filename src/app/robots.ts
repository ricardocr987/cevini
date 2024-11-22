import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                //You might want to protect certain areas from your website from being crawled, and therefore indexed, such as your CMS or admin, user accounts in your e-commerce, or some API routes.
                //disallow: ["/accounts"]
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
    }
}