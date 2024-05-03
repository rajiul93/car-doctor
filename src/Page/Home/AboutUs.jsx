import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";

const AboutUs = () => {
  return (
    <div className="md:flex items-start gap-6 my-14 ">
      <div className="relative">
        <img className="rounded-xl w-3/4" src={person} alt="" />
        <img className="rounded-xl w-2/4 absolute right-0 -bottom-8 border-8 border-base-100" src={parts} alt="" />
      </div>
      <div>
        <h1 className="text-error font-bold">About Us</h1>
        <h1 className="w-2/3 text-3xl font-bold">
          We are qualified & of experience in this field
        </h1>
        <p className="w-2/3 ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <p className="w-2/3 ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
