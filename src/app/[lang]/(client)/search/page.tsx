import SearchBar from "@/components/features/client/search/search-bar"

const Page = () => {
    return (
        <div className="flex flex-col gap-[16px] py-8 px-4">
            <h1 className="font-bold text-[20px] uppercase">Search every thing</h1>
            <SearchBar />
        </div>
    )
}

export default Page