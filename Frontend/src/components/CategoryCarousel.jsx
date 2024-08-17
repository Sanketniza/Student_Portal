//&------------------------------------------------------------------------------------------  //

import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"


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
    "Product Designer"
]

function CategoryCarousel() {
  return (
        <>
            <div>
                <Carousel className="w-full max-w-xl mx-auto my-20">
                    <CarouselContent>
                        {
                            category.map((cat, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Button>
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
}

export default CategoryCarousel;
