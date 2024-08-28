import PropTypes from 'prop-types';

import { Badge } from "./ui/badge"

// &------------------------------------------------------------------------------------------

function LatestJobCards({item}) {

    // const {allJobs} = useSelector((store) => store.job);

  return (
        <>
            <div className="p-5 px-10 py-10 border border-gray-300 rounded shadow shadow-2xl cursor-pointer ">

                <div>
                     <h1 className="text-2xl font-bold text-zinc-800"> { item?.company?.name} </h1>
                     <p className="text-sm text-gray-500 text-muted-foreground">{ item?.company?.location} India</p>
                </div>

                <div className="my-2">
                     <h1 className="text-xl font-medium text-zinc-800"> { item?.title} </h1>
                     <p className="text-sm text-gray-500 text-muted-foreground"> { item?.description} </p>
                </div>

                <div className="flex items-center gap-2 mt-5 shadow shadow-2xl cursor-pointer">
                    <Badge className={"mr-2 text-blue-800 shadow shadow-2xl bg-gray-300"} variant="ghost"> {item?.position} Position</Badge>
                    <Badge className={"mr-2 text-red-800 shadow shadow-lg bg-gray-300"} variant="solid"> {item?.jobType}</Badge>
                    <Badge className={"mr-2 text-yellow-800 shadow shadow-lg bg-gray-300"} variant="ghost"> {item?.salary}LPA</Badge>
                </div>

            </div>
        </>
    )
};

LatestJobCards.propTypes = {
    item: PropTypes.shape({
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      jobType: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
    }).isRequired,
  };

export default LatestJobCards;