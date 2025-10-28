import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import NextPage from "./ui/next-page";
import StartPage from "./ui/start-page";

export default function ProfileSidebar() {
    const doesNext = useSelector((state: RootState) => state.active.nextPart)

    return (
        <>
            {doesNext ? <NextPage /> : <StartPage />}
        </>
    );
}
