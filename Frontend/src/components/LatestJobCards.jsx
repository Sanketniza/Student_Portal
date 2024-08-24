import { Badge } from "./ui/badge"

// &------------------------------------------------------------------------------------------

function LatestJobCards() {
  return (
        <>
            <div className="p-5 px-10 py-10 border border-gray-300 rounded shadow shadow-2xl cursor-pointer ">

                <div>
                     <h1 className="text-2xl font-bold text-zinc-800">Company name</h1>
                     <p className="text-sm text-gray-500 text-muted-foreground">Lorem ipsum dolor sit amet</p>
                </div>

                <div className="my-2">
                     <h1 className="text-xl font-medium text-zinc-800">Job Title</h1>
                     <p className="text-sm text-gray-500 text-muted-foreground">Lorem ipsum dolor sit amet</p>
                </div>

                <div className="flex items-center gap-2 mt-5 shadow shadow-2xl cursor-pointer">
                    <Badge className={"mr-2 text-blue-800 shadow shadow-2xl bg-gray-300"} variant="ghost">12 Position</Badge>
                    <Badge className={"mr-2 text-red-800 shadow shadow-lg bg-gray-300"} variant="solid">Full Time</Badge>
                    <Badge className={"mr-2 text-yellow-800 shadow shadow-lg bg-gray-300"} variant="ghost">12LPA</Badge>
                </div>

            </div>
        </>
    )
};

export default LatestJobCards;