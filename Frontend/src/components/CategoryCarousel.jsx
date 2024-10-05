//&------------------------------------------------------------------------------------------  //

import { useDispatch } from "react-redux";
import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";


const category = [
    "Fronted Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Science",
    "Cyber Security",
    "Software Developer",
    "Mobile Developer",
    "Game Developer",
    "Graphics Designer",
    "Data Engineer",
    "Software Engineer",
    "UI/UX Designer",
    "Product Designer",

];

function CategoryCarousel() {
    useGetAllJobs();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        
        dispatch(setSearchedQuery(query));

        navigate("/browser");
        
    }
    
  return (
        <>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Carousel className="w-full max-w-xl mx-auto my-20 ">
                    <CarouselContent >
                        {
                            category.map((cat, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Button onClick={() => searchJobHandler(cat)} variant="outline" className="w-full border rounded-full shadow-lg bg-slate-300">
                                        {cat}
                                    </Button>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </>
    )
};

export default CategoryCarousel;
