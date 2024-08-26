import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Sanket", "Faridabad", "Greater", "Greater Nagpur", "Greater Pune", "Greater Mumbai"]
    },
    {
        filterType: "Role",
        array: ["Frontend", "Backend", "Fullstack"]
    },
    {
        filterType: "Experience",
        array: ["0-2 years", "2-5 years", "5-10 years", "10+ years"]
    },
    {
        filterType: "Salary",
        array: ["0 - 20k", "20 - 50k", "50 - 100k", "100 - 200k", "200 - 300k", "300 - 400k", "400 - 500k"]
    }
];

function FilterCard() {
    return (
        <>
            <div className="w-full p-4 overflow-y-auto border border-gray-300 rounded-lg shadow shadow-2xl h-[80vh]">
                <h1 className="text-xl font-bold shadow-2xl text-zinc-800 ">Filter Jobs</h1>
                <hr className="h-1 my-2 bg-gray-300" />
                
                <div>
                    <RadioGroup >
                        {
                            filterData.map((data, index) => (
                                <div key={index}>
                                    <h1 className='font-medium font-bold'>{data.filterType}</h1>
                                    {
                                        data.array.map((item, idx) => {
                                            const itemId = `id${index}-${idx}`
                                            return (
                                                <div className='flex items-center my-2 space-x-2' key={idx}>
                                                    <RadioGroupItem value={item} id={itemId} />
                                                    <Label htmlFor={itemId}>{item}</Label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ))
                        }
                    </RadioGroup> 
                </div>
                
            </div>
        </>
    );
}

export default FilterCard;
