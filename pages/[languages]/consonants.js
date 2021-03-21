import { useRouter } from "next/router";

export default function consonants() {
    const router = useRouter();
    return <div>Post #{router.query.lang}</div>;
}