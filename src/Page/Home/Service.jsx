import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    axios
      .get("https://car-doctor-server-one-vert.vercel.app/service")
      .then(function (response) {
        setService(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="mb-14">
      <div className="md:w-1/2 mx-auto text-center space-y-3">
        <h1 className="text-xl font-semibold">Service</h1>
        <h1 className="text-3xl font-bold">Our Service Area</h1>
        <p className="text-sm text-neutral">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service?.map((item) => (
          <ServiceCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
      <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </div>
  );
};

export default Service;
