import {
  FaGraduationCap,
  FaBriefcase,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const HomeSection2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
      <div className="flex items-center space-x-4">
        <GiTeacher className="text-orange-500 text-3xl" />
        <div>
          <h4 className="font-semibold text-lg">Education</h4>
          <p className="text-gray-600 text-sm">
            Fermentum nisi accumsan nisi sapi...
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaBriefcase className="text-orange-500 text-3xl" />
        <div>
          <h4 className="font-semibold text-lg">Career Classes</h4>
          <p className="text-gray-600 text-sm">
            Ultricies lacus turpis proin tempor faci...
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaGraduationCap className="text-orange-500 text-3xl" />
        <div>
          <h4 className="font-semibold text-lg">Scholarships</h4>
          <p className="text-gray-600 text-sm">
            Adipiscing in vitae nec posuere eget frin...
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaHandHoldingHeart className="text-orange-500 text-3xl" />
        <div>
          <h4 className="font-semibold text-lg">Mentorships</h4>
          <p className="text-gray-600 text-sm">
            Nunc tristique quis leo duis gravida vol...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
