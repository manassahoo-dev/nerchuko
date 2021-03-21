import { useRouter } from "next/router";

export default function PostPage() {
    const router = useRouter();
    return <div>Post #{router.query.lang}</div>;
}